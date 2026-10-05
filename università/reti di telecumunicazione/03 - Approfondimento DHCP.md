[DHCP - Dynamic Host Configuration Protocol](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/DHCP - Dynamic Host Configuration Protocol.html>) · [pagina su Virtuale](https://virtuale.unibo.it/pluginfile.php/3129144/mod_folder/content/0/index.htm)

# DHCP – Dynamic Host Configuration Protocol

>> Approfondimento (pagina HTML, non slide) collegato alla lezione [[01 - Instradamento IPv4 e IPv6]]. È l'"analisi dettagliata del protocollo DHCP con esempi operativi e catture di traffico" citata nella [[01 - Instradamento IPv4 e IPv6#Slide 129 – Ulteriori dettagli|slide 129]]. **Torna alla nota principale** → [[01 - Instradamento IPv4 e IPv6#Slide 124 – DHCP – RFC 2131,2132|slide 124–130: DHCP]]
>>
>> La pagina è divisa in sezioni numerate e non in slide, quindi i titoli seguono la numerazione originale (1, 2.1, 5.1.1…). Nelle catture ci sono GIF animate, trascritte fotogramma per fotogramma in tabella.

## Indice

1. **Introduzione e modalità di allocazione** (sez. 1–2.1)
	- [[#1. Introduzione|Cos'è il DHCP: modello client-server]]
	- [[#2.1 Modalità Allocazione|Allocazione automatica, dinamica e manuale; BOOTP e relay agent]]
2. **Formato e tipi di messaggio** (sez. 2.2–2.4)
	- [[#2.2 Formato messaggio|Formato del messaggio (Figura 1)]]
	- [[#2.3 Dettaglio Campi|Significato dei campi: op, xid, ciaddr, yiaddr, siaddr, giaddr, chaddr…]]
	- [[#2.4 Tipo Messaggi|Gli 8 tipi di messaggio (opzione 53)]]
3. **Comportamento del client** (sez. 3)
	- [[#3.1 Stati del client|Stati del client e timer T1/T2]]
	- [[#3.2 Prima Assegnazione|Prima assegnazione: le cinque fasi, porte 67/68]]
	- [[#3.3 Assegnazione Accelerata|Assegnazione accelerata (opzione 50)]]
	- [[#3.4 Estensione Prestito|Rinnovo del prestito: renew e rebinding]]
	- [[#3.5 Rilascio indirizzo|Rilascio dell'indirizzo]]
4. **Lato server** (sez. 4)
	- [[#4.1 Archivio Parametri Configurazione|Archivio dei prestiti e file dhcpd.leases]]
	- [[#4.2 Configurazione Demone DHCP|File dhcpd.conf e topologia della rete di prova]]
	- [[#4.2.1 Parametri|Parametri globali]]
	- [[#4.2.2 Dichiarazione|Dichiarazioni: subnet, host, range]]
5. **Catture: assegnazione indirizzo** (sez. 5.1)
	- [[#5.1.1 Assegnazione standard|DORA standard]]
	- [[#5.1.2 Configurazione di due client|Due client insieme: il ruolo di xid]]
	- [[#5.1.3 Ricezione offerte multiple|Due server, offerte multiple]]
	- [[#5.1.4 Invio DHCPDECLINE|DHCPDECLINE]]
	- [[#5.1.5 Procedura accelerata|Procedura accelerata]]
	- [[#5.1.6 Rifiuto di una richiesta, DHCPNAK|DHCPNAK]]
6. **Catture: gestione dell'interfaccia** (sez. 5.2)
	- [[#5.2.1 Rinnovo del prestito, client in renew|Rinnovo in renew (unicast)]]
	- [[#5.2.2 Rinnovo del prestito, client in rebinding|Rinnovo in rebinding (broadcast)]]
	- [[#5.2.3 Scadenza prestito, riacquisizione|NAK in rebinding e riacquisizione]]
	- [[#5.2.4 Rilascio indirizzo|DHCPRELEASE]]
	- [[#5.2.5 DHCPINFORM|DHCPINFORM]]

---
## 1. Introduzione

Il DHCP (*Dynamic Host Configuration Protocol*, Protocollo di Configurazione Dinamica degli Host) fornisce un meccanismo automatico e centralizzato per l'assegnazione degli indirizzi all'interno di una rete locale (LAN).
Oltre a specificare un meccanismo per l'allocazione degli indirizzi di rete, deve anche definire un protocollo per il trasporto dei parametri specifici per gli host, in modo tale da rendere le informazioni disponibili anche alle macchine che non hanno ancora l'interfaccia di rete attiva (una lista completa dei parametri comunicabili attraverso DHCP è consultabile nell'Appendice A del [rfc-2131](http://www.ietf.org/rfc/rfc2131.txt)).

Il DHCP è costruito su un modello client-server dove il server è la macchina designata dall'amministratore di rete a fornire alle macchine che ne fanno richiesta (i client) i parametri di inizializzazione e tenerne traccia in un [[#4.1 Archivio Parametri Configurazione|database locale]].

---
## 2. Protocollo DHCP

### 2.1 Modalità Allocazione

In condizioni normali il DHCP dovrebbe evitare sia la configurazione manuale individuale per i client (ogni macchina dovrebbe essere in grado di scoprire i parametri di configurazione appropriati senza l'intervento dell'utente) sia la configurazione specifica per ogni client da parte dell'amministratore (come invece prevede il BOOTP [rfc-951](http://www.ietf.org/rfc/rfc951.txt)), nonostante questo il protocollo definisce tre diversi meccanismi per l'allocazione degli indirizzi:

- **allocazione automatica**
	in questa configurazione il server assegna un indirizzo **permanente** ai client che ne fanno richiesta, non è richiesto alcun intervento da parte dell'amministratore (se non per la configurazione iniziale del server DHCP);

- **allocazione dinamica**
	l'indirizzo è assegnato per un periodo di tempo limitato (oppure fino a quando il client non rinunci esplicitamente all'uso dell'indirizzo); anche questa configurazione non richiede l'intervento dell'amministratore ad ogni aggiunta di un client all'interno della rete ed è l'unica che permette il riuso automatico degli indirizzi assegnati ai client che non ne fanno più uso. Di conseguenza l'assegnazione dinamica può essere particolarmente utile per l'assegnazione di indirizzi ai client che rimarranno connessi per un periodo di tempo limitato, oppure per condividere un insieme di indirizzi tra un gruppo di client che non necessita di un indirizzo permanente, ad esempio reti in cui il numero di indirizzi disponibili è inferiore al numero di host che ne ha accesso.

- **allocazione manuale**
	in questo caso l'indirizzo è assegnato esplicitamente dall'amministratore di rete con un pacchetto di informazioni legato a un particolare identificativo della macchina (potrebbe essere il MAC address della scheda di rete, il nome DNS di un server locale o qualsiasi altro identificativo purché unico). L'allocazione manuale usa il DHCP semplicemente come protocollo di trasporto.
	Questo metodo di configurazione permette di eliminare la possibilità di commettere errori durante il processo di configurazione manuale e individuale degli host in ambienti dove, per qualsiasi motivo, è consigliabile gestire l'assegnazione al di fuori dei meccanismi del DHCP.

Si osserva quindi che il DHCP è definibile come un'estensione del BOOTP ( [rfc-951](http://www.ietf.org/rfc/rfc951.txt) con l'aggiunta dei meccanismi di allocazione automatica e dinamica), per mantenere quindi la compatibilità il formato dei messaggi è lo stesso e il comportamento degli agenti di inoltro BOOTP (*relay agent*, host incaricati di inoltrare i messaggi attraverso varie sottoreti per garantire l'economicità evitando di installare un server DHCP in ognuna di esse) viene mutuato identico nel protocollo DHCP, sono quindi definiti gli agenti di inoltro DHCP.
La principale differenza sta nel fatto che soltanto nel DHCP è definito un meccanismo utile al client per richiedere tutti i parametri necessari per rendersi operativo.

>> **Relay agent in pratica**: il DHCPDISCOVER è un broadcast limitato (255.255.255.255), quindi **non attraversa i router**. Il relay, di solito il router stesso, lo riceve sulla LAN del client e lo inoltra in **unicast** al server DHCP di un'altra rete, scrivendo il proprio indirizzo nel campo *giaddr*. Dal *giaddr* il server capisce da quale sottorete scegliere l'indirizzo. Così basta un solo server per molte sottoreti.

Chiaramente qualsiasi tipo di allocazione scelta richiede che il server mantenga in un particolare [[#4.1 Archivio Parametri Configurazione|database]] le informazioni legate a ciascun client ( dette in *binding* col client ), quali appunto l'indirizzo fornito, la durata dell'allocazione ( tempo di prestito o *lease time* ) e tutti parametri richiesti dai client o ad essi comunicati.
La presenza del [[#4.1 Archivio Parametri Configurazione|database]] consente ad un client DHCP di riacquisire lo stesso indirizzo in seguito ad un riavvio della macchina, di modo che, essendo le informazioni persistenti sul server, i parametri di configurazione saranno gli stessi anche dopo un riavvio del server stesso o semplicemente del meccanismo DHCP.

### 2.2 Formato messaggio

In *Figura 1* è rappresentato il formato di un messaggio DHCP, i numeri in parentesi indicano la dimensione in ottetti del campo, la spiegazione in dettaglio di tutti i campi si trova in *Tabella 1*.

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+---------------+---------------+---------------+---------------+
|    op (1)     |   htype (1)   |   hlen (1)    |   hops (1)    |
+---------------+---------------+---------------+---------------+
|                            xid (4)                            |
+-------------------------------+-------------------------------+
|           secs (2)            |           flags (2)           |
+-------------------------------+-------------------------------+
|                          ciaddr  (4)                          |
+---------------------------------------------------------------+
|                          yiaddr  (4)                          |
+---------------------------------------------------------------+
|                          siaddr  (4)                          |
+---------------------------------------------------------------+
|                          giaddr  (4)                          |
+---------------------------------------------------------------+
|                          chaddr  (16)                         |
+---------------------------------------------------------------+
|                          sname   (64)                         |
+---------------------------------------------------------------+
|                          file    (128)                        |
+---------------------------------------------------------------+
|                    opzioni (variabile)                        |
+---------------------------------------------------------------+
```

*Figura 1 - Formato messaggio DHCP*

>> La parte fissa del messaggio è lunga 1+1+1+1+4+2+2+4·4+16+64+128 = **236 byte**, e le opzioni partono subito dopo. Il *magic cookie* all'inizio delle opzioni vale 99.130.83.99 (0x63825363) e distingue un messaggio DHCP da un vecchio messaggio BOOTP. Il formato è identico a BOOTP, per compatibilità.

### 2.3 Dettaglio Campi

|  |  |
|---|---|
| **op** | Tipo di messaggio, assume soltanto i due possibili valori: <br> 1 = BOOTREQUEST, si riferisce a qualsiasi interazione diretta dal client al server; <br> 2 = BOOTREPLY, identifica ogni risposta del server verso un client. |
| **htype** | '*Hardware type*', indica il tipo di indirizzo fisico della macchina <br> 1 per Ethernet |
| **hlen** | '*Hardware Address Lenght*', lunghezza in byte dell'indirizzo fisico <br> 6 per Ethernet |
| **hops** | Numero di passaggi attraverso un agente di inoltro, è posto inizialmente a zero dal client. |
| **xid** | '*Transaction ID*', identificativo della transazione, è un numero casuale scelto dal client usato per associare le richieste e le risposte tra client e server |
| **secs** | Inizializzato dal client, indica i secondi trascorsi dall'avvio del processo di configurazione. |
| **flags** | Il primo bit di questo campo è definito come flag **broadcast** ed è usato con i client che non accettano comunicazioni unicast a livello IP prima che abbiano ottenuto l'indirizzo; i rimanenti bit **devono** essere posti a zero dai client ed essere ignorati da server e agenti di inoltro. |
| **ciaddr** | '*Client IP address*', di norma posto a 0.0.0.0, contiene un indirizzo diverso soltanto quando il client è già configurato per rispondere ad una richiesta ARP, ovvero quando il client si trova negli stati **bound**, **renew** o **rebinding**. |
| **yiaddr** | '*Your (client) IP address*', usato dal server per comunicare l'indirizzo offerto al client. |
| **siaddr** | '*Next Server IP address*', indirizzo del server DHCP da usare nel successivo passo di inizializzazione; usato dal server nei messaggi *DHCPOFFER* e *DHCPACK*. Un server può restituire il proprio indirizzo se è preparato per fornire il seguente servizio di inizializzazione (ad esempio la consegna di un'immagine eseguibile del sistema operativo). Qualsiasi indirizzo il server usi in questo campo, restituisce sempre il proprio indirizzo con l'opzione 54 "*Server identifier*" |
| **giaddr** | '*Relay Agent IP address*', riempito dagli eventuali agenti di inoltro con il proprio indirizzo IP; se il campo è vuoto vuol dire che il client è direttamente collegato alla stessa rete del server. |
| **chaddr** | '*Client Hardware address*', indirizzo fisico dell'interfaccia di rete del client. |
| **sname** | '*Server host name*', è un campo opzionale in formato stringa e termina *null.* |
| **file** | '*Boot file name*', nome del file utilizzabile dal client nel processo d'avvio, usato per macchine senza disco fisso o che si avviano con un'immagine eseguibile remota del sistema operativo. |
| **opzioni** | Di lunghezza variabile, inizia con un '*Magic cookie*'; la dimensione minima che un client deve essere in grado di ricevere è 72 ottetti. I client DHCP possono negoziare l'uso di messaggi DHCP più grandi con l'opzione 57 "*Maximum DHCP Message Size*". I campi opzionali possono essere ulteriormente estesi nei campi '*file*' e '*sname*'. Una lista delle opzioni negoziabili tramite DHCP è definita nell' [rfc-2132](http://www.ietf.org/rfc/rfc951.txt). |

*Tabella 1 - Dettaglio Campi*

>> Nella riga *opzioni* il link "rfc-2132" della pagina originale punta per errore a `rfc951.txt` (BOOTP). L'RFC corretta per le opzioni è la **RFC 2132** (*DHCP Options and BOOTP Vendor Extensions*).
>>
>> Come ricordare i quattro indirizzi: **c**iaddr = IP attuale del **c**lient (se ne ha già uno); **y**iaddr = "**y**our", l'IP che il server assegna; **s**iaddr = **s**erver per il passo successivo (es. TFTP); **g**iaddr = **g**ateway, cioè il relay agent.

### 2.4 Tipo Messaggi

Il campo 'op' definisce soltanto se la comunicazione è client-server o server-client, i vari tipi di messaggi sono identificati dall'opzione obbligatoria 53 "*DHCP Message Type*" e sono possibili i seguenti valori:

- **DHCPDISCOVER**
	Usato dal client in modalità broadcast per localizzare i server disponibili.
	In questo tipo di messaggi gli unici campi significativi oltre ai *htype*, *hlen* e *xid* sono:
	*flags* -> se posto a 1 i bootreply saranno broadcast anche a livello ethernet;
	*opzioni* -> in particolare l'opzione 55 "*Parameter Request List*" con la quale il client specifica la lista dei parametri per i quali necessita la configurazione

- **DHCPOFFER**
	Dal server al client in risposta ad un *DHCPDISCOVER*, contiene le informazioni per proseguire la procedura nei campi *siaddr*, *giaddr* ed eventualmente *file*; i parametri di configurazione offerti nel campo *yiaddr* e nelle *opzioni*.

- **DHCPREQUEST**
	Dal client al server sia per richiedere i parametri offerti (in questo caso conterrà l'opzione 54 "*Server identifier*"), sia per confermare la correttezza di un indirizzo allocato in precedenza (per esempio dopo un riavvio \[[[#3.3 Assegnazione Accelerata|3.3]]\]) sia per estendere il lease time.
	I campi saranno gli stessi del *DHCPDISCOVER*, con le uniche differenze per *secs* che sarà uguale al valore dello stesso campo nel *DHCPOFFER* ed eventualmente per le *opzioni* (non devono tuttavia esserci differenze tra l'opzione 55 "*Parameter Request List*" in questo messaggio e nel *DHCPDISCOVER*).

- **DHCPACK**
	Dal server al client con i parametri di configurazione, incluso l'indirizzo assegnato, è la conferma che il processo è terminato con successo. Non è altro che una copia del *DHCPOFFER*.

- **DHCPNAK**
	Dal server al client per indicare che è scaduto il tempo di prestito o che l'indirizzo richiesto non è corretto (ad esempio un client prova a rinnovare un indirizzo precedentemente acquisito dopo essersi collegato ad una sottorete nella qual l'indirizzo precedente non è tra quelli allocabili).
	Sono posti a zeri tutti i campi esclusi *siaddr* e *chaddr*. Contiene l'opzione 56 "*Message*" con la spiegazione del rifiuto.
	[[#5.2.3 Scadenza prestito, riacquisizione|Cattura 5.2.3]] con *DHCPNAK* dovuto ad una richiesta incorretta da parte del client.

- **DHCPDECLINE**
	Dal client al server, indica che il client ha scoperto per altre vie che l'indirizzo assegnato è già in uso da un altro host. Il messaggio è inviato in modalità broadcast. ( [[#5.1.4 Invio DHCPDECLINE|cattura 5.1.4]] )

- **DHCPRELEASE**
	Dal client al server per rilasciare l'indirizzo e cancellare da parte del client il prestito rimanente. Il server può scegliere di mantenere una copia dei parametri di configurazione per un possibile riuso in risposta a successive richieste da parte dello stesso client. Sempre inviato in modalità unicast ( [[#5.2.4 Rilascio indirizzo|cattura 5.2.4]] )

- **DHCPINFORM**
	Dal client al server per interrogare l'archivio dei parametri di configurazione. Il server risponde direttamente all'indirizzo specificato nel campo *ciaddr* con un *DHCPACK* con i parametri di configurazione esclusi il tempo di prestito e il campo *yiaddr*. ( [[#5.2.5 DHCPINFORM|cattura 5.2.5]] )

>> Riepilogo dei messaggi (opzione 53):
>>
>> | Messaggio | Direzione | Di solito |
>> |---|---|---|
>> | DISCOVER | client → server | broadcast |
>> | OFFER | server → client | broadcast (o unicast) |
>> | REQUEST | client → server | broadcast (unicast in *renew*) |
>> | ACK | server → client | broadcast (o unicast) |
>> | NAK | server → client | broadcast |
>> | DECLINE | client → server | broadcast |
>> | RELEASE | client → server | unicast |
>> | INFORM | client → server | broadcast o unicast (risposta ACK unicast) |

---
## 3. DHCP lato client

### 3.1 Stati del client

Il client si trova in uno dei seguenti possibili stati quando:

|  |  |
|---|---|
| **init-reboot** | è in fase di boot o si è appena collegato fisicamente alla rete. |
| **selecting** | ha ricevuto una o più offerte ma non ha ancora scelto quella da richiedere |
| **bound** | ha appena ricevuto i parametri di inizializzazione dal server DHCP e ha configurato l'interfaccia di rete. <br> Il client rimarrà indefinitamente in questo stato se riceve un prestito infinito, in caso contrario avvierà due timer T1 e T2 impostati rispettivamente allo 0.5 e allo 0.875 del tempo di prestito. Il server può anche specificare dei rapporti diversi per i timer con le opzioni 58 "*Renewal (T1) Time Value*" e 59 "*Rebinding (T2) Time Value*". <br> Allo scadere del primo dei due timer entrerà nello stato **renew**. |
| **renew** | è scaduto il timer T1. <br> Il client proverà ad estendere il prestito contattando in modalità **unicast** il server dal quale ha ricevuto l'indirizzo (utilizzando l'opzione 54 "*Server identifier*"). Se riceve conferma torna nello stato **bound**. <br> Allo scadere del secondo timer entrerà nello stato **rebinding**. |
| **rebinding** | è scaduto il timer T2. <br> Il client proverà ad estendere il prestito inviando un messaggio in modalità **broadcast** indicando l'indirizzo per il quale vuole estendere il prestito nel campo '*ciaddr*'. |

*Tabella 2 - Stati del client*

>> **Esempio numerico**: con un lease di 1 ora, T1 = 0,5 · 60 = **30 min**, quando il client prova a rinnovare in unicast col proprio server (*renew*). T2 = 0,875 · 60 = **52,5 min**, quando chiede in broadcast a qualunque server (*rebinding*). A **60 min** il lease scade: il client deve smettere di usare l'indirizzo e ripartire da *init*.
>>
>> La RFC 2131 definisce anche altri stati (INIT, REQUESTING, REBOOTING). Qui sono accorpati: *init-reboot* comprende l'inizio della procedura, *selecting* la scelta dell'offerta.

### 3.2 Prima Assegnazione

Il processo di configurazione di un client mediante DHCP è composto da cinque fasi:

- **Richiesta**
	Il client invia un messaggio *DHCPDISCOVER* in modalità broadcast sulla propria rete fisica indirizzati alla porta UDP '**bootps**' (67) per scoprire eventuali server DHCP

- **Offerta**
	Ogni server può rispondere con un messaggio *DHCPOFFER* che include l'indirizzo di rete proposto nel campo '*yiaddr*' e alcuni altri parametri di configurazione tra le opzioni. Prima di inviare un *DHCPOFFER* il server può verificare l'effettiva disponibilità dell'indirizzo scelto (ad esempio con un ICMP '*echo request*') pur non essendone obbligato. Le risposte sono inviate alla porta UDP '***bootpc***' (68)

- **Selezione**
	Il client dopo aver atteso un tempo arbitrario per ricevere più risposte sceglie un server al quale richiedere i parametri con un *DHCPREQUEST* broadcast. Il messaggio sarà accettato soltanto dal server indicato nell'opzione 54 "*Server identifier*". Se il client non riceve alcun messaggio *DHCPOFFER* va in time out e ritrasmette il *DHCPDISCOVER*.

- **Assegnazione**
	Il server a cui è indirizzato il *DHCPREQUEST* inserisce le informazioni in bound con il client nell'archivio dei parametri di configurazione e risponde con un *DHCPACK* contenente tutti i parametri richiesti dal client o specificati dall'amministratore di rete.
	Lo stesso *DHCPREQUEST* è usato dai server che non sono stati selezionati come notifica del fatto che il client ha rifiutato l'offerta.
	Qualora il server non dovesse essere in grado di rispondere positivamente al *DHCPREQUEST* (per esempio l'indirizzo di rete è stato già allocato) dovrebbe rispondere con un *DHCPNAK*, la mancata risposta produce lo stesso effetto di una risposta negativa.

- **Verifica**
	Una volta che il client ha ricevuto il *DHCPACK* deve verificare la correttezza dei dati ricevuti (per esempio può verificare che l'indirizzo sia effettivamente libero con delle '*ARP request*') e prendere nota della durata del prestito.
	Se da questa verifica risulta che i parametri non sono corretti allora invierà un *DHCPDECLINE* al server e ricomincerà il processo di configurazione con un *DHCPDISCOVER* aspettando un tempo minimo per evitare un traffico eccessivo sulla rete.
	Anche nel caso in cui dovesse ricevere un *DHCPNAK* ricomincerebbe il processo dall'inizio.
	Se invece non riceve alcun tipo di messaggio e va quindi in timeout ritrasmette il *DHCPREQUEST* secondo un particolare algoritmo (definito nel [rfc-2131](http://www.ietf.org/rfc/rfc2131.txt) sezione 4.1)

>> **Perché due porte fisse (67 e 68)?** Le risposte del server sono spesso in broadcast. Se il client usasse una porta effimera casuale, il broadcast arriverebbe a tutti gli host su quella porta, magari usata da un'altra applicazione. Con una porta dedicata al client (68) il messaggio arriva solo ai processi client DHCP.

La [[#5.1.1 Assegnazione standard|cattura 5.1.1]] mostra il processo appena descritto.

Il client non conosce alcuno dei parametri di configurazione, costruisce quindi pacchetti con indirizzo sorgente 0.0.0.0 e destinazione 255.255.255.255, anche a livello ethernet i messaggi (anche quelli del server) sono in broadcast, la coerenza delle informazioni è assicurata dal '*Transaction ID*'.

>> **Approfondimento dalla nota 01** → [[01 - Instradamento IPv4 e IPv6#Slide 125 – DHCP – 1|slide 125–128: le quattro fasi DORA in versione sintetica]]

Dalle [[#5.1.2 Configurazione di due client|cattura 5.1.2]] e [[#5.1.3 Ricezione offerte multiple|cattura 5.1.3]] si deduce l'importanza del campo '*Transaction ID*', gli host interessati nel processo sono tre e questo campo, identificando univocamente le transazioni, garantisce il corretto funzionamento del protocollo.
Per transazione s'intende l'intero processo di configurazione dallo stato iniziale alla conferma dei parametri da parte del server, questo comprende anche le ritrasmissioni per time out, anche quelle dei messaggi *DHCPDISCOVER*.
Fa parte invece di un'altra transazione la procedura d'acquisizione dell'indirizzo dopo un *DHCPDECLINE* ( [[#5.1.4 Invio DHCPDECLINE|cattura 5.1.4]] ).

### 3.3 Assegnazione Accelerata

Nel caso in cui il client sia già a conoscenza di tutti i parametri di configurazione da un'assegnazione precedente il cui lease time non sia ancora scaduto può seguire la procedura di prima assegnazione \[[[#3.2 Prima Assegnazione|3.2]]\] omettendo i passaggi di Richiesta e Offerta ( [[#5.1.5 Procedura accelerata|cattura 5.1.5]] ). 
Il messaggio *DHCPREQUEST* è inviato in modalità broadcast e include un indirizzo ip nell'opzione 50 "*requested IP address*", il campo '*ciaddr*' deve essere vuoto in quanto l'indirizzo non è ancora stato confermato.
Se il client non riceve alcuna risposta, o se riceve un *DHCPNAK* deve iniziare la procedura di configurazione standard \[[[#3.2 Prima Assegnazione|3.2]]\] dall'inizio.

### 3.4 Estensione Prestito

La procedura per il rinnovo del prestito per un indirizzo si svolge esattamente come l'assegnazione accelerata, il client infatti è già a conoscenza di tutti i parametri di cui ha bisogno, ed inoltre ha anche l'interfaccia di rete configurata. 
Questo gli permette non solo un'eventuale comunicazione unicast, ma anche il prosieguo dell'attività di rete fino allo scadere effettivo del prestito se non dovesse ricevere alcuna risposta alle richieste di rinnovo del prestito, operazione che deve essere iniziata non appena il client entra negli stati ***renew*** o ***rebinding***.
 
Nello stato **renew** il client invia la richiesta di rinnovo direttamente al server dal quale ha ricevuto l'indirizzo ( [[#5.2.1 Rinnovo del prestito, client in renew|cattura 5.2.1]] ). 
Se il client non dovesse ricevere messaggi dal server che ha provato a contattare rimarrebbe nello stato di renew conservando la configurazione fino allo scadere del [[#3.1 Stati del client|timer T2]] per entrare nello stato di ***rebinding***.
 
Nello stato **rebinding** le richieste sono inviate in modalità broadcast e qualsiasi server può estendere il prestito o rifiutarlo perchè ritenuto illegale; questa procedura è identica a quella descritta nella sezione \[[[#3.3 Assegnazione Accelerata|3.3]]\].
Qualora il client riceva una risposta positiva entrerebbe nello stato di ***bound*** ( [[#5.2.2 Rinnovo del prestito, client in rebinding|cattura 5.2.2]] ), in caso contrario rimarrebbe in ***rebinding*** fino allo scadere del prestito o fino alla ricezione di un *DHCPNAK* ( [[#5.2.3 Scadenza prestito, riacquisizione|cattura 5.2.3]] ), dopo di che ritornerebbe nello stato di ***init-reboot*** per ricominciare l'intera procedura di assegnazione \[[[#3.2 Prima Assegnazione|3.2]]\].

### 3.5 Rilascio indirizzo

Il client può scegliere di rinunciare al prestito dell'indirizzo inviando un messaggio *DHCPRELEASE* al server. Il prestito da rilasciare è identificato il campo '*chaddr*' e l'indirizzo di rete oppure con l'opzione 61 "*Client Identifier*" se l'ha usata anche per ottenere il prestito.
Il *DHCPRELEASE* annulla il prestito rimanente per l'indirizzo, in caso di riacquisizione il client dovrà seguire la procedura standard \[[[#3.2 Prima Assegnazione|3.2]]\] (di norma un host in fase di riavvio o spegnimento non invia messaggi *DHCPRELEASE*). ( [[#5.2.4 Rilascio indirizzo|cattura 5.2.4]] )

---
## 4. DHCP lato Server

### 4.1 Archivio Parametri Configurazione

La gestione delle informazioni in bound con un client è resa possibile dal mantenimento in maniera permanente dei parametri di configurazione di rete assegnati di volta in volta ai client. Il servizio per funzionare correttamente deve identificare in maniera corretta con una chiave unica i client e le impostazioni ad essi associate.
La chiave può essere la coppia [*numero IP sottorete* , *indirizzo fisico*] (da notare che l'indirizzo fisico è ottenuto sia dal contenuto del campo *chaddr* che da quello dei campi *htype* e *hlen*, per evitare possibili duplicazioni dell'indirizzo fisico risultanti da problemi di ordinamento dei bit nel caso di rete con differenti sistemi di comunicazione); questa coppia permette il riuso dello stesso indirizzo di rete su diverse sottoreti, o anche l'utilizzo di indirizzi fisici non globalmente unici.
Alternativamente la chiave potrebbe essere la coppia [*numero IP sottorete* , *nome host*] che permette di assegnare in maniera intelligente i parametri agli host che si spostano in una sottorete diversa, oppure che cambiano indirizzo fisico (un client potrebbe sostituire interfaccia di rete per vari motivi, tra i quali un guasto).
Di default il protocollo definisce la coppia come [*numero IP sottorete* , *identificativo client*] dove l' *identificativo client* è il valore contenuto all'interno dell'opzione 61 "*Client identifier*" (di norma uguale all'indirizzo fisico se non esplicitamente dichiarato dal client).
L'archivio dei parametri di configurazione può anche essere usato da un client per riottenere i propri settaggi; l'interfaccia del client verso l'archivio è costituita dai messaggi *DHCPINFORM*.

Una particolare implementazione di un server DHCP, di solito contenuta in tutte le distribuzioni linux, è quella fornita dalla [ISC](http://www.isc.org/) (Internet System Consortium).
Tutte le informazioni sui lease attivi sono contenute nel file

```
/var/state/dhcp/dhcpd.leases
```

```
# All times in this file are in UTC (GMT), not your local timezone. This is
# not a bug, so please don't ask about it. There is no portable way to
# store leases in the local timezone, so please don't request this as a
# feature. If this is inconvenient or confusing to you, we sincerely
# apologize. Seriously, though - don't ask.
# The format of this file is documented in the dhcpd.leases(5) manual page.
# This lease file was written by isc-dhcp-V3.0pl2

lease 192.168.1.55 {
  starts 6 2004/11/27 19:28:04;
  ends 6 2004/11/27 19:31:04;
  binding state active;
  next binding state free;
  hardware ethernet 00:05:5d:47:94:68;
  uid "\001\000\005]G\224h";
}
```

>> Il file è il "database" del server di cui si parla in [[#2.1 Modalità Allocazione|2.1]]: per ogni prestito registra indirizzo, inizio e fine (qui 3 minuti: 19:28:04 → 19:31:04), stato e MAC del client. Grazie a questo file il server, anche dopo un riavvio, sa quali indirizzi ha già dato in prestito.

Il formato di questo file è:

- **`lease`** *indirizzo* **`{`**
	indica l'indirizzo al quale è stato concesso il prestito.
- **`starts`** *data***`;`**
  **`ends`** *data***`;`**
	Rispettivamente l'ora di assegnazione e di scadenza del prestito;
	Il formato di *data* è giorno_della_settimana anno/mese/giorno ora:minuti:secondi;
	Un prestito senza scadenza avrà data '*never*'.
- **`binding state`** *state*
  **`next binding state`** *state*
	Rispettivamente gli stati attuali e futuri del prestito, *ends* indica la data di scadenza dello stato attuale; lo stato attuale *free*, indica che il lease è scaduto da poco e il client non ha rinnovato il prestito.
- **`hardware`** *address*
	MAC address dell'interfaccia di rete; *address* è secondo la forma '*tipo-hardware* *indirizzo-mac*'.
- **`uid`** *numero*
	Identificativo del client usato nell'acquisizione del prestito dal client stesso; la voce non è presente qualora il client non fornisse un identificativo non essendone obbligato.
- **`client-hostname`** *stringa*
	Anche questo è un campo opzionale registrato soltanto se il client fornisce un proprio nome host.
- **`abandoned`**
	Indica che il prestito non deve essere riassegnato.

Ulteriori informazioni sono reperibili sul manuale dhcpd.leases (5) tramite il comando

```
# man dhcpd.leases
```

### 4.2 Configurazione Demone DHCP

Il file di configurazione per il server DHCP è *dhcpd.conf* solitamente in */etc* ed è strutturato in due parti: la lista dei parametri e quella delle dichiarazioni.
La prima contiene appunto l'insieme dei parametri da comunicare ai client (il tempo di prestito, il gateway, i server dns ecc.); la seconda invece descrive la topologia della rete (i client, le sottoreti, i pool di indirizzi disponibili ecc.)

Un esempio sufficientemente esaustivo del file di configurazione è il seguente:

```
#
# Parametri generali
#
default-lease-time 6000;
max-lease-time 18000;
option domain-name "turati155.it";
option domain-name-servers 192.168.1.83, 212.216.112.112;

#
# Definisci il range indirizzi liberi
#
subnet 192.168.1.0 netmask 255.255.255.0
{
  range 192.168.1.20 192.168.1.25;
  option broadcast-address 192.168.1.255;
  option routers 192.168.1.1;
}

#
# Configurazione uri
#
host uri
{
  hardware ethernet 00:0E:7B:8E:45:03;
  fixed-address 192.168.1.17;
  ping-check false;
}

#
# Configurazione pizeta
#
host pizeta
{
  hardware ethernet 00:0E:35:24:7E:48;
  fixed-address 192.168.1.12;
  filename "pxelinux.0";
  next-server 192.168.1.83;
}

#
# Sottorete privata
#
subnet 192.168.4.0 netmask 255.255.255.0 {
  host toba {
    hardware ethernet 00:04:61:00:00:00;
    fixed-address 192.168.4.10;
  }
  range 192.168.4.10 192.168.4.20;
  deny unknown-clients;
  authoritative;
}
```

>> Lettura del file: prestito di default 6000 s (100 min), massimo 18000 s (5 h). Nella sottorete 192.168.1.0/24 gli indirizzi dinamici sono solo 192.168.1.20–25 (6 indirizzi), mentre *uri* e *pizeta* ricevono sempre lo stesso indirizzo, legato al loro MAC: è l'**allocazione manuale** di [[#2.1 Modalità Allocazione|2.1]]. *pizeta* riceve anche il file di boot `pxelinux.0` da scaricare dal server 192.168.1.83, cioè fa il boot da rete (PXE).

Un rappresentazione grafica della rete descritta nel file di configurazione sulla quale sono state effettuate le catture è la seguente:

![[RT03-dhcp-topologia-rete.png]]

| Host | Ruolo | IP | MAC |
|---|---|---|---|
| Server DHCP / Default GW | server | 192.168.1.1 | 00:85:A0:01:01:00 |
| Server DHCP | server | 192.168.1.55 | 00:05:5D:47:94:68 |
| Server DHCP | server | 192.168.1.83 | 00:10:5A:F1:96:24 |
| Guest | Indirizzo Dinamico | – | – |
| Pizeta | Fixed Address | 192.168.1.12 | – |
| Uri | Fixed Address | 192.168.1.17 | – |
| Toba | Fixed Address (Sottorete Privata) | 192.168.4.10 | – |

>> Nelle catture compaiono **tre server DHCP** sulla stessa LAN (192.168.1.1, .55 e .83). È una situazione voluta per mostrare i casi con più offerte ([[#5.1.3 Ricezione offerte multiple|5.1.3]]) e con server diversi che rispondono al rinnovo ([[#5.2.2 Rinnovo del prestito, client in rebinding|5.2.2]], [[#5.2.3 Scadenza prestito, riacquisizione|5.2.3]]).

#### 4.2.1 Parametri

In testa al file vi sono le opzioni che si applicano a tutti i client:

- **`default-lease-time`** *secondi***`;`**
	Tempo di prestito di default.
- **`max-lease-time`** *secondi***`;`**
	Massimo tempo di prestito che il server può inviare o che il client può richiedere.
- **`option domain-name "`***nome***`";`**
	Nome di dominio dei client.
- **`option domain-name-servers`** *indirizzo [indirizzo]***`;`**
	Lista di server DNS.

#### 4.2.2 Dichiarazione

Nella seconda parte sono definite:

La prima sottorete secondo la forma

- **`subnet`** *indirizzo* **`netmask`** *indirizzo*
	Indirizzo e maschera di sottorete.
- **`{`**
  **`range`** *primo_indirizzo secondo_indirizzo*`;`
  *[* **`range`** *primo_indirizzo secondo_indirizzo*`;` *]*
	Indica gli indirizzi che il server può dare in prestito; sono possibili più range.
- **`option broadcast-address`** *indirizzo***`;`**
	Indirizzo usato per le comunicazioni broadcast.
- **`option routers`** *indirizzo [indirizzo]***`;`**
	Lista dei router nella sottorete (*default gateway*).
- **`}`**

Un host con indirizzo fisso

- **`host`** *nome_host*
  **`{`**
  **`hardware`** *tipo_hardware indirizzo_MAC***`;`**
	I tipi di hardware supportati sono *ethernet, fddi* e *token ring*.
- **`fixed-address`** *indirizzo***`;`**
	Indirizzo fisso da offrire all'host con l'indirizzo fisico della dichiarazione precedente.
- **`ping-check`** *flag***`;`**
	Indica se il server deve verificare o meno l'effettiva disponibilità dell'indirizzo con un ICMP "*echo request*"
- **`}`**

Un host che esegue il boot tramite un'immagine remota del sistema operativo

- **`host`** *nome_host*
  **`{`**
  **`hardware`** *tipo_hardware indirizzo_MAC***`;`**
  **`fixed-address`** *indirizzo***`;`**
  **`filename "`***nome_file***`";`**
	Nome del file eseguibile.
- **`next-server`** *indirizzo***`;`**
	Indirizzo del server TFTP dove risiede il file di avvio.
- **`}`**

Seconda sottorete:

- **`subnet`** *indirizzo* **`netmask`** *indirizzo* **`{`**
  **`host`** ...
	Definizione degli host che appartengono alla sottorete.
- **`range`** *primo_indirizzo ultimo_indirizzo***`;`**
	Range degli indirizzi per eventuali host senza indirizzo fisso o per eventuali host sconosciuti
- **`deny unknown-clients;`**
  *[* **`allow unknown-clients;`** *]*
	Rifiutare o meno i client sconosciuti.
- **`authoritative;`**
	Autorizza il server a rispondere ai messaggi *DHCPINFORM*.
- **`}`**

>> La slide dice che `authoritative` autorizza a rispondere ai *DHCPINFORM*, ma nel server ISC ha un effetto più importante: un server **authoritative** è sicuro di conoscere la configurazione corretta della sottorete, per cui invia **DHCPNAK** ai client che chiedono un indirizzo non valido per quella rete. Un server non authoritative invece resta in silenzio. È proprio il meccanismo che produce i NAK delle catture [[#5.1.6 Rifiuto di una richiesta, DHCPNAK|5.1.6]] e [[#5.2.3 Scadenza prestito, riacquisizione|5.2.3]].

Maggiori informazioni sul manuale dhcpd.conf (5) tramite il comando

```
# man dhcpd.conf
```

---
## 5. Catture

>> Le catture sono GIF animate (ogni fotogramma resta circa 4 s): in Obsidian si animano da sole. Sotto ciascuna ho trascritto in tabella i fotogrammi, così puoi leggere tutti i pacchetti senza aspettare l'animazione. Il numero **#** è quello indicato nell'animazione, cioè il numero del pacchetto nella cattura Ethereal (oggi Wireshark).

### 5.1 Assegnazione indirizzo

#### 5.1.1 Assegnazione standard

![[RT03-dhcp-base.gif]]

| # | Messaggio | Verso | IP src | IP dest | ETH dest |
|---|---|---|---|---|---|
| 1 | DHCPDISCOVER | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF |
| 2 | DHCPOFFER | Server → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF |
| 3 | DHCPREQUEST | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF |
| 4 | DHCPACK | Server → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF |

Un client si trova nello stato di ***init-reboot***, invia un *DHCPDISCOVER* specificando una lista di parametri richiesti, il server risponde specificando soltanto i parametri di cui è a conoscenza (mancano ad esempio tutti i parametri relativi al NetBIOS). Una volta configurato, il client effettua tre *ARP request* per assicurare l'unicità dell'indirizzo all'interno della sua sottorete.

>> È lo scambio **DORA**: **D**iscover → **O**ffer → **R**equest → **A**ck. Tutti e quattro i messaggi sono broadcast, sia a livello IP (255.255.255.255) sia Ethernet (FF:FF:FF:FF:FF:FF). Il client non ha ancora un indirizzo e quindi non può ricevere unicast: il flag *broadcast* e la sorgente 0.0.0.0 servono a questo.

#### 5.1.2 Configurazione di due client

![[RT03-dhcp-dueclient.gif]]

| # | Messaggio | Verso | IP src | IP dest | ETH dest | xid |
|---|---|---|---|---|---|---|
| 1 | DHCPDISCOVER | pizeta → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | 0x1fc64bf0 |
| 2 | DHCPDISCOVER | toba → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | 0xef01e4cd |
| 3 | DHCPOFFER | Server → toba | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | 0xef01e4cd |
| 4 | DHCPREQUEST | toba → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | 0xef01e4cd |
| 5 | DHCPACK | Server → toba | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | 0xef01e4cd |
| 8 | DHCPOFFER | Server → pizeta | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | 0x1fc64bf0 |
| 9 | DHCPREQUEST | pizeta → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | 0x1fc64bf0 |
| 10 | DHCPACK | Server → pizeta | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | 0x1fc64bf0 |

Server DHCP IP: 192.168.1.83 — Guest Name "pizeta" (alla fine IP: 192.168.1.35) — Guest Name "toba" (alla fine IP: 192.168.1.10)

Due client iniziano la procedura di configurazione quasi simultaneamente; le differenze tra i due messaggi sono i campi *xid* e *chaddr*. Il server risponde separatamente ad entrambe le richieste mantenendo i valori dei campi precedenti per evitare ambiguità.

>> Tutti i messaggi sono broadcast, quindi **entrambi** i client li ricevono tutti: ognuno riconosce i propri confrontando l'*xid* (e il *chaddr*) con quello che ha scelto lui. I pacchetti 6 e 7 non compaiono nell'animazione: probabilmente sono le *ARP request* di verifica di toba.
>>
>> Nella cattura pizeta riceve 192.168.1.35 e toba 192.168.1.10, non gli indirizzi fissi del `dhcpd.conf` di [[#4.2 Configurazione Demone DHCP|4.2]] (192.168.1.12 e 192.168.4.10). La cattura è stata fatta evidentemente con una configurazione diversa.

#### 5.1.3 Ricezione offerte multiple

![[RT03-dhcp-dueserver.gif]]

| # | Messaggio | Verso | IP src | IP dest | ETH dest | Altro |
|---|---|---|---|---|---|---|
| 1 | DHCPDISCOVER | Guest → entrambi i server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 2 | DHCPOFFER | Server .55 → Guest | 192.168.1.55 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 3 | DHCPREQUEST | Guest → entrambi i server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | Server Identifier: 192.168.1.55 |
| 4 | DHCPOFFER | Server .83 → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 5 | DHCPACK | Server .55 → Guest | 192.168.1.55 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | Guest → IP: 192.168.1.54 |

Il client è in inizializzazione effettua quindi una ricerca dei server alla quale rispondono i due host 192.168.1.55 e 192.168.1.83, il client è configurato per rispondere non appena riceve un'offerta valida. La procedura si svolge come nella [[#5.1.1 Assegnazione standard|cattura 5.1.1]]

>> Osserva l'ordine: l'offerta di .83 (pacchetto 4) arriva **dopo** che il client ha già mandato il *DHCPREQUEST* con *Server Identifier* = 192.168.1.55. Viene quindi ignorata. Il REQUEST è in broadcast proprio perché anche .83 lo riceva e capisca che la sua offerta è stata rifiutata, così può rimettere l'indirizzo offerto nel pool.

#### 5.1.4 Invio DHCPDECLINE

![[RT03-dhcp-decline.gif]]

| # | Messaggio | Verso | IP src | IP dest | ETH dest | Altro |
|---|---|---|---|---|---|---|
| 1 | DHCPDISCOVER | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 2 | DHCPOFFER | Server → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | IP offerto 192.168.1.40 |
| 3 | DHCPREQUEST | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 4 | DHCPACK | Server → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 5 | DHCPDECLINE | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 6 | DHCPDISCOVER | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 7 | DHCPOFFER | Server → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | IP offerto 192.168.1.41 |
| 8 | DHCPREQUEST | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 4 | DHCPACK | Server → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | Guest → IP: 192.168.1.41 |

Server DHCP IP: 192.168.1.1

Il client inizia la procedura di configurazione ma riceve dal server ( 192.168.1.1 ) un indirizzo che il ritiene non valido ( 192.168.1.40 ) avverte quindi il server dell'errore con un *DHCPDECLINE* (l'indirizzo che il client rifiuta è contenuto nell'opzione 50 "*Requested IP address*") e ricomincia la procedura di assegnazione fino a che non riceve un indirizzo valido ( 192.168.1.45 ).

>> **Incongruenze nella cattura**:
>> - L'ultimo fotogramma è numerato "4", ma è il pacchetto 9.
>> - Il server è indicato come 192.168.1.1, mentre nei messaggi del server l'IP src è 192.168.1.83.
>> - Il testo dice che alla fine il client riceve 192.168.1.45, ma nell'animazione ottiene **192.168.1.41**.
>>
>> Il concetto comunque non cambia. Dopo l'ACK il client verifica l'indirizzo (di solito con una ARP): se scopre che 192.168.1.40 è già usato da un altro host, manda un DECLINE. Il server segna l'indirizzo come non disponibile e il client ricomincia da capo con una **nuova transazione** (nuovo *xid*).

#### 5.1.5 Procedura accelerata

![[RT03-dhcp-accelerata.gif]]

| # | Messaggio | Verso | IP src | IP dest | ETH dest |
|---|---|---|---|---|---|
| 1 | DHCPREQUEST | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF |
| 2 | DHCPACK | Server → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF |

Il client aveva gia ricevuto un indirizzo in precedenza ( 192.168.1.35 ) fa quindi richiesta per riacquisirlo e riceve conferma dal server ( 192.168.1.83 ).

>> Sono solo "RA" invece di "DORA". Il client chiede direttamente il vecchio indirizzo con l'opzione 50 (*requested IP address*), lasciando vuoto *ciaddr* perché l'indirizzo non è ancora confermato ([[#3.3 Assegnazione Accelerata|3.3]]). È quello che fa un portatile quando si riconnette alla stessa rete.

#### 5.1.6 Rifiuto di una richiesta, DHCPNAK

![[RT03-dhcp-nak.gif]]

| # | Messaggio | Verso | IP src | IP dest | ETH dest | Altro |
|---|---|---|---|---|---|---|
| 1 | DHCPREQUEST | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | IP richiesto: 192.168.1.46 |
| 2 | DHCPNACK | Server → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 3 | DHCPDISCOVER | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 2 | DHCPOFFER | Server → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 5 | DHCPREQUEST | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | |
| 6 | DHCPACK | Server → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | Guest → IP: 192.168.1.12 |

Il client dopo un riavvio tenta di riacquisire l'indirizzo 192.168.1.46 ma la politica del server su quell'indirizzo è cambiata, riceve quindi in risposta un *DHCPNAK* con il messaggio "*requested address is incorrect*". Il client entra così nello stato ***init-reboot*** ed effettua l'intera procedura di assegnazione per ricevere alla fine dell'assegnazione l'indirizzo 192.168.1.12.

>> Nell'animazione il messaggio 2 è scritto "DHCP**NACK**", ma il nome corretto è **DHCPNAK**. Anche il quarto fotogramma è numerato "2", ma è il pacchetto 4. È la procedura accelerata di [[#5.1.5 Procedura accelerata|5.1.5]] andata male: il NAK costringe il client a ripartire dal DORA completo.

### 5.2 Gestione Interfaccia

#### 5.2.1 Rinnovo del prestito, client in renew

![[RT03-dhcp-renew.gif]]

| # | Messaggio | Verso | IP src | IP dest | ETH dest |
|---|---|---|---|---|---|
| 8 | DHCPREQUEST | Guest → Server | 192.168.1.45 | 192.168.1.83 | **unicast** |
| 9 | DHCPACK | Server → Guest | 192.168.1.83 | 192.168.1.45 | **unicast** |

Il client è nello stato di ***init-reboot***, richiede un indirizzo ed ottiene in risposta il 192.168.1.45 dal server 192.168.1.83, il *lease time* è di 2 minuti.
Allo scadere del [[#3.1 Stati del client|timer T1]] e quindi dopo 60 secondi circa ( le richieste di rinnovo devono essere fatte in un istante di tempo casuale nell'intervallo [T1 - 1 sec] e [T1 + 1 sec] ) il client invia un *DHCPREQUEST* **unicast** al server 192.168.1.83 per estendere il prestito.

>> Ora il client **ha** un indirizzo, quindi il rinnovo è unicast in entrambe le direzioni. Il conto: lease 120 s, T1 = 0,5 · 120 = 60 s. Se il rinnovo riesce, il lease riparte da zero e T1/T2 vengono ricalcolati.

#### 5.2.2 Rinnovo del prestito, client in rebinding

![[RT03-dhcp-rebinding.gif]]

| # | Messaggio | Verso | IP src | IP dest | ETH dest | Stato client |
|---|---|---|---|---|---|---|
| 1 | DHCPREQUEST | Guest → Server .55 | 192.168.1.25 | 192.168.1.55 | **unicast** | **renew** |
| 5 | DHCPACK | Server .55 → Guest | 192.168.1.55 | 192.168.1.25 | **unicast** | **buond** |
| 3 - 4 - 5 | DHCPREQUEST | Guest → Server .55 ✗ | 192.168.1.25 | 192.168.1.55 | **unicast** | **renew** |
| 6 | DHCPREQUEST | Guest → broadcast ✗ | 192.168.1.25 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | **rebinding** |
| 7 | DHCPACK | Server .83 → Guest | 192.168.1.83 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | **bound** |

I primi due pacchetti si riferiscono al rinnovo di un indirizzo, gli host in causa sono 192.168.1.25 il client e 192.168.1.55 il server. Il lease time è di 60 secondi, dopo quindi 30 secondi circa il client prova per tre volte a rinnovare l'indirizzo tramite il server 192.168.1.55 senza ricevere risposta.
Allo scadere del [[#3.1 Stati del client|timer T2]] prova di nuovo ad estendere l'indirizzo, ma questa volta con un messaggio broadcast, il lease time è esteso dal server 192.168.1.83
**Nota**: Il timer T2 in quest'esempio scade dopo 0.875 * 60 sec = 52.5, ma il client deve attendere un tempo casuale all'interno di un certo intervallo definito dall'algoritmo di ritrasmissione specificato nell' [rfc-2131](http://www.ietf.org/rfc/rfc2131.txt), in questo caso di 2^4 = 16 +o- 1 sec dall'ultimo messaggio spedito e quindi intorno al secondo 58.

>> Nell'animazione il secondo fotogramma è numerato "5" (è il pacchetto 2) e c'è il refuso "buond" per **bound**. La ✗ rossa indica che il server .55 non è più raggiungibile.
>>
>> Riepilogo dei tempi, con lease = 60 s:
>> - T1 = 0,5 · 60 = **30 s**: renew, unicast verso .55 (3 tentativi senza risposta);
>> - T2 = 0,875 · 60 = **52,5 s**: rebinding, broadcast a **qualsiasi** server;
>> - risponde .83, che estende il prestito, e il client torna *bound*.
>>
>> Senza risposta anche in rebinding, allo scadere del lease (60 s) il client avrebbe dovuto abbandonare l'indirizzo.

#### 5.2.3 Scadenza prestito, riacquisizione

![[RT03-dhcp-rebindingnak.gif]]

| # | Messaggio | Verso | IP src | IP dest | ETH dest | Stato client |
|---|---|---|---|---|---|---|
| 6 - 7 - 8 | DHCPREQUEST | Guest → Server | 192.168.1.25 | 192.168.1.83 | **unicast** | **renew** |
| 9 | DHCPREQUEST | Guest → broadcast | 192.168.1.25 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | **rebinding** |
| 10 | DHCPNACK | Server .1 → Guest | 192.168.1.1 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | **init-reboot** (IP: 0.0.0.0) |
| 11 - 12 - 13 | DHCPDISCOVER | Guest → broadcast | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | **init-reboot** |
| 14 | DHCPOFFER | Server .55 → Guest | 192.168.1.55 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | **init-reboot** |
| 15 | DHCPREQUEST | Guest → Server .55 | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | **selecting** |
| 16 | DHCPACK | Server .55 → Guest | 192.168.1.55 | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | **bound** (IP: 192.168.1.25) |

Server DHCP IP: 192.168.1.1 — Server DHCP IP: 192.168.1.55

Il client 192.168.1.25 riceve il primo prestito dal server 192.168.1.83 e riuscirà ad estenderlo fino al secondo 34, allo scadere del [[#3.1 Stati del client|timer T2]] il client prova ad estendere il prestito, ma riceve un DHCPNAK da 192.168.1.1 ed entra quindi nello stato ***init-reboot***.
***Nota***: il valore del campo *secs* nei messaggi 3-5:
alla prima richiesta il campo è 0, mentre alla seconda è 1024. Questo valore non indica il numero di secondi effettivamente trascorsi tra una richiesta e l'altra ma serve da identificativo per le ritrasmissioni dato che il '*Transaction id*' (campo *xid*) deve rimanere uguale.

>> Il server .83 (a cui il client aveva chiesto il rinnovo) nell'animazione non è disegnato: è la macchina che non risponde. In rebinding risponde invece 192.168.1.1, che considera "illegale" la richiesta e manda un **NAK** (vedi la nota su `authoritative` in [[#4.2.2 Dichiarazione|4.2.2]]). Il client perde l'indirizzo, torna a 0.0.0.0 e rifà il DORA completo, ottenendo di nuovo 192.168.1.25 ma stavolta da .55.
>>
>> Anche qui l'animazione scrive "DHCP**NACK**" invece di **DHCPNAK**.
>>
>> I "messaggi 3-5" citati nella nota corrispondono ai pacchetti 11-12-13 dell'animazione.

#### 5.2.4 Rilascio indirizzo

![[RT03-dhcp-release.png]]

| Messaggio | Verso | IP src | IP dest | ETH dest |
|---|---|---|---|---|
| DHCPRELEASE | Guest (IP:192.168.1.45) → Server | 192.168.1.45 | 192.168.1.83 | **unicast** |

Server DHCP IP: 192.168.1.1 — Server DHCP IP: 192.168.1.55 — Server DHCP IP: 192.168.1.83

Il client comunica al server che non ha più bisogno dell'indirizzo assegnato ed ovviamente non richiede risposta in quanto l'interfaccia non è più configurata. La comunicazione è **unicast**.

>> È l'unico messaggio DHCP **senza risposta**. Va solo al server che ha concesso il prestito (unicast), non a tutti. Su Linux lo genera ad esempio `dhclient -r`.

#### 5.2.5 DHCPINFORM

![[RT03-dhcp-inform.gif]]

| # | Messaggio | Verso | IP src | IP dest | ETH dest | Altro |
|---|---|---|---|---|---|---|
| 1 | DHCPINFORM | Guest → Server | 0.0.0.0 (**none**) | 255.255.255.255 (**all**) | FF:FF:FF:FF:FF:FF | IP richiesto: 192.168.1.20 |
| 2 | DHCPACK | Server → Guest | 192.168.1.10 | 192.168.1.20 | **unicast** | |

Il client ( 192.168.1.20 ) non è ancora completamente configurato, ma conosce già almeno un indirizzo disponibile, invia quindi la richiesta di ulteriori informazioni per conoscere i vari parametri specificati nell'opzione 55 "*Parameter Request List*" in bound con l'indirizzo indicato nel campo *ciaddr*. Il server ( 192.168.1.10 ) non è tenuto ad inviare un lease time.
Mentre la richiesta del client è inviata broadcast, la risposta del server è necessariamente **unicast**.

>> DHCPINFORM si usa quando l'IP è già configurato (ad esempio a mano) e servono **solo gli altri parametri**: DNS, gateway, dominio e così via. Per questo l'ACK non contiene né *yiaddr* né lease time, ed è unicast all'indirizzo in *ciaddr*.
>>
>> Una stranezza della cattura: secondo l'RFC 2131 il client in INFORM dovrebbe già usare il proprio IP come sorgente, qui invece compare 0.0.0.0.

---
## Riassunto

>> **Cos'è**
>> - Protocollo **client-server** su **UDP**: server sulla porta **67** (bootps), client sulla **68** (bootpc). Configura automaticamente IP, netmask, gateway, DNS…
>> - Estende **BOOTP** (RFC 951) e ne mantiene lo stesso formato di messaggio. Il DHCP è definito nella RFC **2131**, le opzioni nella **2132**.
>> - Tre modalità di allocazione: **automatica** (indirizzo permanente), **dinamica** (in prestito, *lease*: l'unica che riusa gli indirizzi) e **manuale** (legata al MAC, decisa dall'amministratore).
>> - **Relay agent**: inoltra i broadcast DHCP verso un server su un'altra sottorete e scrive il proprio IP in *giaddr*.
>>
>> **Messaggio**
>> - Campi principali:
>> 	- *op*: 1 = BOOTREQUEST, 2 = BOOTREPLY;
>> 	- *xid*: identifica la transazione;
>> 	- *ciaddr*: IP attuale del client;
>> 	- *yiaddr*: IP offerto dal server;
>> 	- *siaddr*: server per il passo successivo;
>> 	- *giaddr*: relay agent;
>> 	- *chaddr*: MAC del client;
>> 	- *flags*: bit broadcast.
>> - Il tipo di messaggio sta nell'**opzione 53**. Altre opzioni da ricordare: 50 (IP richiesto), 54 (Server identifier), 55 (Parameter Request List), 56 (Message), 58/59 (T1/T2), 61 (Client identifier).
>> - Gli 8 messaggi: DISCOVER, OFFER, REQUEST, ACK, NAK, DECLINE, RELEASE, INFORM.
>>
>> **Prima assegnazione (DORA)**
>> - DISCOVER → OFFER → REQUEST (con Server identifier) → ACK, tutti in broadcast IP ed Ethernet.
>> - Il client usa sorgente 0.0.0.0 e le risposte si abbinano alle richieste tramite l'**xid**.
>> - Il REQUEST in broadcast avvisa anche i server non scelti.
>> - Dopo l'ACK il client verifica l'indirizzo (ARP). Se è già in uso manda un **DECLINE** e ricomincia.
>> - Un **NAK** fa ripartire il client da capo.
>>
>> **Accelerata e rinnovo**
>> - **Procedura accelerata**: solo REQUEST (opzione 50) + ACK, se il vecchio lease è ancora valido.
>> - Timer: **T1 = 0,5** e **T2 = 0,875** del lease.
>> 	- Allo scadere di T1 il client entra in **renew**: REQUEST in **unicast** al proprio server.
>> 	- Allo scadere di T2 entra in **rebinding**: REQUEST in **broadcast** a qualunque server.
>> 	- Alla scadenza del lease torna a *init* e perde l'indirizzo.
>> - **RELEASE**: unicast, senza risposta.
>> - **INFORM**: chiede solo i parametri, per un host che ha già l'IP. L'ACK è unicast, senza lease né *yiaddr*.
>>
>> **Lato server (ISC dhcpd)**
>> - I prestiti vengono salvati in `dhcpd.leases`, la configurazione sta in `dhcpd.conf`: parametri globali, `subnet`/`range`, `host` con `hardware ethernet` + `fixed-address`.
>> - Il server identifica un client con la chiave [sottorete, identificativo client (opzione 61, di default il MAC)].
>> - `authoritative`: il server risponde con NAK alle richieste non valide per la rete.
