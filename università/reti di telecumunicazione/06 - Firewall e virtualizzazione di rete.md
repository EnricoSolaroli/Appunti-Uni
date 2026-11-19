[2627_Firewall](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/2627_Firewall.pdf>)

# Firewall e virtualizzazione di rete

>> Il PDF contiene due lezioni. Nella prima (slide 1–17) si vede come filtrare il traffico fra rete interna e Internet: packet filter, stateful inspection, application gateway/proxy, DMZ. Nella seconda (slide 18–33) si vede come costruire reti logiche sopra l'infrastruttura fisica: overlay, tunnel GRE e VXLAN. Si appoggia al routing e a OSPF di [[04 - Instradamento nelle reti a pacchetto e in Internet]] e, come [[05 - MPLS]], aggiunge un livello sopra IP.

## Indice

1. **Minacce e firewall** (slide 1–4)
	- [[#Slide 2 – Come possiamo proteggere le infrastrutture ed il traffico da attacchi malevoli?|La domanda di partenza]]
	- [[#Slide 3 – Sicurezza del flusso informativo|Attacchi al flusso informativo: DoS, sniffing, MitM, spoofing]]
	- [[#Slide 4 – Firewall|Il firewall fra rete interna ed esterna]]
2. **Tipi di firewall** (slide 5–13)
	- [[#Slide 5 -> 6 – Packet filter|Packet filter e ACL]]
	- [[#Slide 7 – Packet filter e trasporto|ACL con le porte di trasporto]]
	- [[#Slide 8 – Default policy|Default accept e default deny]]
	- [[#Slide 9 -> 10 – Stateful Packet Inspector|Stateful Packet Inspector]]
	- [[#Slide 11 -> 12 – Application level gateway|Application level gateway]] e [[#Slide 13 – Application Layer Gateway (Proxy)|proxy]]
3. **Dove mettere il firewall** (slide 14–17)
	- [[#Slide 14 – Protezione di host: firewall|Firewall sull'host]]
	- [[#Slide 15 -> 16 – Protezione di rete: firewall|Firewall di rete]]
	- [[#Slide 17 – Configurazione di packet filter e proxy|Packet filter, proxy e zona demilitarizzata]]
4. **Virtualizzazione e reti overlay** (slide 18–23)
	- [[#Slide 19 – Virtualizzazione|Virtualizzazione: vantaggi e criticità]]
	- [[#Slide 20 – Virtualizzazione di rete|Virtualizzazione di rete]]
	- [[#Slide 21 – Reti "Overlay"|Reti overlay]]
	- [[#Slide 22 – Tecnologie di virtualizzazione|Tecnologie di virtualizzazione]]
	- [[#Slide 23 – La network IP|La network IP come overlay]]
5. **GRE** (slide 24–28)
	- [[#Slide 24 – GRE Tunnel (RFC 1701)|Tunnel GRE]]
	- [[#Slide 25 – GRE header|Header GRE]] e [[#Slide 26 – GRE header: campi opzionali|campi opzionali]]
	- [[#Slide 27 -> 28 – Applicazione del GRE|OSPF su una rete logica di tunnel GRE]]
6. **VXLAN** (slide 29–33)
	- [[#Slide 29 – Virtual Extensible LAN (VXLAN)|VXLAN: formato e VNI]]
	- [[#Slide 30 – Applicazione di VXLAN|Una network IP estesa sulla rete globale]]
	- [[#Slide 31 -> 33 – Esempio|Esempio: una ARP request attraverso il tunnel VXLAN]]

---
## Slide 1 – Firewall

---
## Slide 2 – Come possiamo proteggere le infrastrutture ed il traffico da attacchi malevoli?

>> È la domanda che apre la lezione: prima si classificano le minacce al flusso informativo (slide 3), poi si vede lo strumento principale per filtrare il traffico, il **firewall**, nelle sue tre forme (packet filter, stateful packet inspector, application level gateway) e la loro disposizione in rete (DMZ).

---
## Slide 3 – Sicurezza del flusso informativo

![[RT06-s003-1.png|600]]


>> - **DoS**: B non riceve più il traffico di A (o non riesce più a servire nessuno), per esempio perché viene sommerso da richieste inutili (flooding, SYN flood). Se le sorgenti sono tante e distribuite si parla di DDoS. Attacca la *disponibilità*.
>> - **Sniffing**: C riceve una copia del traffico ma la comunicazione A → B prosegue normalmente, quindi né A né B se ne accorgono. Attacca la *riservatezza*.
>> - **MitM**: C si mette in mezzo, riceve i messaggi di A, li legge e/o li modifica e li inoltra a B; A e B credono di parlare direttamente (es. con ARP spoofing in una LAN). Attacca *riservatezza e integrità*.
>> - **Spoofing**: C crea da zero messaggi che sembrano venire da A (es. falsificando l'indirizzo IP sorgente). Attacca l'*autenticità*.
>>
>> Un firewall aiuta soprattutto contro DoS e spoofing (filtrando ciò che entra); contro sniffing e MitM la difesa principale è la crittografia (TLS, IPsec, VPN), che rende i dati illeggibili e le modifiche rilevabili.

---
## Slide 4 – Firewall

![[RT06-s004-1.png|600]]

- Il firewall si interpone fra rete interna (da proteggere) e rete esterna (da cui possono provenire le minacce)
- È un apparato che può essere co-localizzato con il gateway
- Permette il passaggio di alcuni pacchetti (frecce verdi) e blocca quello di altri (frecce rosse)

>> "Co-localizzato con il gateway": spesso il firewall è lo stesso router di confine che collega la rete aziendale a Internet (il default gateway visto in [[04 - Instradamento nelle reti a pacchetto e in Internet]]). Lì passa per forza tutto il traffico entrante e uscente, quindi è il punto naturale dove applicare le regole di filtraggio. Sui router le regole si applicano a un'interfaccia e a una direzione (in ingresso o in uscita).
>>
>> Nella figura alcuni flussi verdi sono bidirezionali e altri solo in un verso: il firewall può decidere anche in base alla direzione (es. permettere le connessioni aperte dall'interno ma non quelle aperte dall'esterno).

---
## Slide 5 -> 6 – Packet filter

![[RT06-s005-1.png|600]]

>> Il firewall F lavora a livello IP: riceve il pacchetto da un'interfaccia (L1 e L2 della rete aziendale), risale fino al livello IP, prende la decisione (pallino rosso) e lo reinoltra sull'altra interfaccia (verso Internet), come un router. Le frecce arancione e gialla (applicazione e trasporto, end-to-end fra A e B) passano attraverso F senza essere toccate. Il rettangolino giallo sopra IP indica che il packet filter può "sbirciare" anche qualche campo dell'intestazione di trasporto (le porte, vedi slide 7), senza però gestire il protocollo di trasporto.

- Prende decisioni in base al contenuto dei campi del protocollo IP
	- IP sorgente
	- IP destinazione
	- Protocollo di livello superiore (campo protocol)
- Tipicamente confronta questi parametri con delle liste di accesso (Access Control List o ACL) che specificano le regole di comportamento
	- ACCEPT: il pacchetto viene instradato correttamente
	- DENY: il pacchetto viene bloccato e cancellato
	- REJECT: il pacchetto viene bloccato e viene inviato un messaggio di errore alla sorgente (similmente a DESTINATION UNREACHABLE)
- Alcuni esempi di regole ACL

```
deny icmp any host 10.0.1.54
permit tcp host 10.0.0.37 host 10.1.1.230
deny icmp 10.0.0.0 0.0.0.255 host 10.0.0.254
```

>> La sintassi è quella delle ACL estese Cisco: `azione protocollo sorgente destinazione`. Ogni indirizzo si può scrivere in tre modi:
>> - `any`: qualunque indirizzo (equivale a `0.0.0.0 255.255.255.255`);
>> - `host X`: solo l'indirizzo X (equivale a `X 0.0.0.0`);
>> - `X wildcard`: un insieme di indirizzi indicato con una **wildcard mask**, che è l'inverso della netmask. Un bit a 0 vuol dire "deve coincidere con X", un bit a 1 vuol dire "qualsiasi valore". Quindi `0.0.0.255` corrisponde a /24 (netmask `255.255.255.0`), `0.0.0.63` a /26, `0.0.255.255` a /16.
>>
>> Cosa matcha ciascuna regola:
>> 1. `deny icmp any host 10.0.1.54`: scarta tutti i pacchetti ICMP (ping, echo reply, errori…) da qualunque sorgente verso l'host 10.0.1.54. Il resto del traffico verso quell'host (TCP, UDP) non è toccato da questa regola.
>> 2. `permit tcp host 10.0.0.37 host 10.1.1.230`: lascia passare tutti i segmenti TCP, su qualunque porta, da 10.0.0.37 a 10.1.1.230. Vale **solo in quel verso**: le risposte da 10.1.1.230 a 10.0.0.37 sono altri pacchetti e servono un'altra regola (il packet filter è stateless, slide 7).
>> 3. `deny icmp 10.0.0.0 0.0.0.255 host 10.0.0.254`: scarta l'ICMP proveniente da tutti gli host 10.0.0.0–10.0.0.255 (cioè 10.0.0.0/24) e diretto a 10.0.0.254. Tipicamente .254 è l'interfaccia del gateway/firewall stesso: così gli host interni non possono pingarlo.
>>
>> DENY e REJECT bloccano entrambi il pacchetto, la differenza è cosa vede il mittente. Con DENY (in iptables `DROP`) non riceve nulla e aspetta un timeout: è più "silenzioso" e non rivela l'esistenza del filtro. Con REJECT riceve subito un ICMP Destination Unreachable (tipicamente type 3, code 13 "communication administratively prohibited") oppure, per TCP, un segmento RST: il client capisce subito che non può connettersi, ma l'attaccante scopre che c'è un filtro.

---
## Slide 7 – Packet filter e trasporto

- Un packet filter può anche permettere di creare ACL più complesse che includono informazioni prese del livello di trasporto
	- Porta sorgente
	- Porat destinazione
- In questo caso le ACL risultano più articolate

```
deny 10.0.10.0 0.0.0.255 host 10.0.1.254 80
permit tcp 10.0.0.37 10.1.1.230
```

- Il packet filter è comunque un dispositivo «stateless» che controlla pacchetto per pacchetto ma che non tiene conto di possibili correlazioni fra pacchetti successivi
- Questo lo rende facilmente attaccabile per esempio con un semplice *IP spoofing* (modifica dell'indirizzo IP)

>> Refuso: "Porat destinazione" → "Porta destinazione".
>>
>> Gli esempi della slide sono scritti in forma semplificata. In sintassi Cisco reale:
>> - la prima regola deve indicare il protocollo (le porte esistono solo per TCP/UDP) e la porta va con un operatore (`eq`, `neq`, `lt`, `gt`, `range`): `deny tcp 10.0.10.0 0.0.0.255 host 10.0.1.254 eq 80`. Matcha i segmenti TCP da qualunque host di 10.0.10.0/24 (wildcard `0.0.0.255`) verso la porta **di destinazione** 80 di 10.0.1.254, cioè blocca l'accesso HTTP a quel web server da quella sottorete. La posizione decide quale porta si filtra: una porta scritta dopo la sorgente è la porta sorgente, una scritta dopo la destinazione è la porta destinazione.
>> - nella seconda regola mancano le parole `host`: scritta così, 10.1.1.230 verrebbe letto come wildcard della sorgente. Quella corretta è `permit tcp host 10.0.0.37 host 10.1.1.230`, identica alla seconda regola della slide 6 (e in realtà non usa le porte). Con le porte sarebbe, per esempio, `permit tcp host 10.0.0.37 host 10.1.1.230 eq 22` (solo SSH).
>>
>> Perché lo spoofing funziona: il packet filter si fida dell'IP sorgente scritto nel pacchetto, che chiunque può falsificare. Se esiste una regola `permit ... host 10.0.0.37 ...`, un attaccante può mandare pacchetti con sorgente finta 10.0.0.37 e passano. Una contromisura parziale è l'**anti-spoofing** (ingress filtering, RFC 2827): sull'interfaccia esterna si scartano i pacchetti che arrivano da Internet con un IP sorgente interno, privato (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, vedi [[01 - Instradamento IPv4 e IPv6]]) o di loopback, perché non possono essere legittimi.

---
## Slide 8 – Default policy

- Normalmente le ACL vengono consultate sequenzialmente
- La prima regola che risulta vera conclude la lettura e viene applicata
- Un packet filter può essere configurato con una politica di **default**
- Default accept
	- Tutto il traffico può passare escluso quello esplicitamente indicato nella ACL
	- ```
	  permit any any
	  ```
- Default deny
	- Tutto il traffico viene bloccato escluso quello esplicitamente indicato nella ACL
	- ```
	  deny any any
	  ```

>> L'**ordine delle regole** conta, perché vince la prima che matcha (first match). Esempio, con l'intenzione di bloccare Telnet verso 10.0.1.254 e lasciare passare tutto il resto:
>> - `deny tcp any host 10.0.1.254 eq 23` e poi `permit ip any any`: funziona, Telnet viene bloccato perché la prima regola lo prende per prima.
>> - nell'ordine inverso `permit ip any any` matcha qualunque pacchetto, quindi la `deny` non viene mai raggiunta e Telnet passa.
>>
>> Regola pratica: le regole specifiche vanno prima, quelle generiche dopo, e la default policy è l'ultima regola (quella che matcha tutto). `permit any any` / `deny any any` è la forma abbreviata della slide: in Cisco si scrive `permit ip any any` (ACL estese) e alla fine di ogni ACL c'è già un **deny implicito**. Quindi una ACL Cisco è "default deny" se non si aggiunge esplicitamente un permit finale.
>>
>> - Default accept = *blacklist*: comodo, ma tutto ciò che ci si è dimenticati di vietare passa.
>> - Default deny = *whitelist*: più sicuro (è la scelta raccomandata), ma bisogna ricordarsi di permettere tutto ciò che serve. Per esempio, se il firewall è un router che fa OSPF, vanno permessi i pacchetti OSPF (IP protocol 89, multicast 224.0.0.5/6, vedi [[04 - Instradamento nelle reti a pacchetto e in Internet]]), altrimenti le adiacenze cadono.

---
## Slide 9 -> 10 – Stateful Packet Inspector

![[RT06-s009-1.png|600]]

>> Rispetto al packet filter (slide 5) la decisione (pallino rosso) è ancora presa nel punto di inoltro IP, ma ora il firewall legge e interpreta anche l'intestazione di trasporto e parte dell'applicazione (linee verdi verso Trasporto e Applicazione). Il pacchetto però non viene "terminato": la connessione resta end-to-end fra A e B.

- Simile a un packet filter ma capace di tenere memoria della correlazione fra pacchetti in funzione delle connessioni a livello di trasporto
	- Comprende il three ways handshake del TCP e memorizza le connessioni aperte
	- Permette l'apertura delle connessioni in base alla direzione (incoming – outgoing)
- L'implementazione può anche supportare dinamiche complesse all'interno dello stesso protocollo (dialogo multi connessione)
- Maggiore sicurezza rispetto al semplice packet filter
	- Se permette solo connessioni in uscita, previene azioni di port scanning dalla rete esterna verso la rete interna
	- Blocca tipologie di attacco basate sull'apertura della connessione (SYN flood)

>> **Tabella di stato**: per ogni connessione il firewall memorizza la 5-tupla (IP sorgente, IP destinazione, protocollo, porta sorgente, porta destinazione) e lo stato TCP. Esempio con la regola "solo connessioni in uscita":
>> 1. l'host interno 10.0.0.37:51000 manda un SYN a 93.184.216.34:443 → è una nuova connessione in uscita, quindi viene permessa e registrata;
>> 2. arriva il SYN-ACK da 93.184.216.34:443 a 10.0.0.37:51000 → corrisponde a una voce in tabella, quindi passa;
>> 3. arriva da Internet un SYN non richiesto verso 10.0.0.37:22 → non corrisponde a nulla ed è un'apertura in ingresso, quindi viene scartato.
>>
>> Con un packet filter stateless, per far passare le risposte bisognerebbe permettere in ingresso tutto il TCP verso le porte alte, aprendo un buco enorme. Lo SPI invece apre il "varco di ritorno" solo per le connessioni realmente iniziate dall'interno. La voce viene rimossa con FIN/RST o dopo un timeout di inattività. Per UDP e ICMP, che non hanno connessione, lo "stato" si approssima con un timeout (es. una risposta DNS è accettata solo se arriva poco dopo la richiesta).
>>
>> **Dialogo multi connessione**: alcuni protocolli aprono connessioni aggiuntive concordate dentro una prima connessione. Un esempio è l'FTP attivo: il controllo va sulla porta 21 e il client comunica con il comando `PORT` su quale porta il server deve aprire la connessione dati (dalla sua porta 20). Altro esempio è SIP, che negozia le porte RTP per l'audio. Lo SPI deve leggere quel dialogo per aprire temporaneamente proprio la connessione attesa.
>>
>> **Port scanning**: uno scanner (es. nmap) manda SYN a molte porte per vedere quali rispondono. Se dall'esterno nessun SYN in ingresso viene accettato, lo scan non scopre niente. **SYN flood**: l'attaccante manda moltissimi SYN (spesso con IP sorgente falsificato) senza mai completare l'handshake, così il server esaurisce le risorse per le connessioni semiaperte. Lo SPI vede le connessioni che restano a metà e può limitarle, farle scadere presto o completare lui l'handshake (SYN proxy) prima di passarle al server.

---
## Slide 11 -> 12 – Application level gateway

![[RT06-s011-1.png|600]]

>> Qui F ha due pile protocollari complete e separate, una per lato (Trasporto/IP/L1-L2 verso la rete aziendale e verso Internet), unite al livello applicativo (ALG). Il pacchetto risale fino all'applicazione, dove viene interpretato (pallino rosso), e poi riscende sull'altro lato. Le frecce nere che terminano su ogni livello indicano che **tutte** le connessioni terminano in F: non esiste più una connessione di trasporto end-to-end fra A e B.

- Equivale ad avere due host connessi direttamente
- In entrata interpreta uno specifico protocollo applicativo
	- In base alla configurazione può bloccare i messaggi
	- Oppure instradarli oltre modificandoli opportunamente, spesso per consentirne il transito attraverso NAT o firewall ulteriori.
- Ovviamente è molto meno performante a livello di prestazioni in quanto più complesso
- Potrebbe risultare un collo di bottiglia in condizioni di traffico molto elevato

>> "Due host connessi direttamente": A apre una connessione TCP con F e F apre una **seconda** connessione TCP con B. Ciascuno dei due vede solo F, quindi gli indirizzi interni non sono mai esposti all'esterno. Dato che F capisce il protocollo, può filtrare in base al contenuto (es. bloccare certi URL o comandi FTP, cercare malware in un allegato) e non solo in base a indirizzi e porte.
>>
>> Esempio di modifica "per il transito attraverso NAT": in SIP e in FTP gli indirizzi IP e le porte sono scritti **dentro** il messaggio applicativo (corpo SDP di SIP, comando `PORT` di FTP). Un NAT che riscrive solo l'intestazione IP lascerebbe dentro l'indirizzo privato, e il destinatario cercherebbe di rispondere a 192.168.x.x. L'ALG riscrive anche quei campi con l'indirizzo pubblico.
>>
>> Riepilogo dei tre tipi:
>>
>> | | Packet filter | Stateful Packet Inspector | Application level gateway |
>> |---|---|---|---|
>> | Livello di decisione | IP (+ porte) | IP + stato della connessione di trasporto | applicazione |
>> | Memoria fra pacchetti | no (stateless) | sì (tabella delle connessioni) | sì (termina le connessioni) |
>> | Connessione A–B | end-to-end | end-to-end | spezzata in due (A–F, F–B) |
>> | Prestazioni | massime | buone | le più basse |

---
## Slide 13 – Application Layer Gateway (Proxy)

![[RT06-s013-1.png|600]]

- Rete aziendale – H – Internet
- Politiche di accesso:
	- FTP server ↔ FTP proxy ↔ FTP client
	- HTTP server ↔ HTTP proxy ↔ HTTP client
	- SIP server ↔ SIP proxy ↔ SIP client

>> In pratica l'ALG è un host H (spesso detto *bastion host*) su cui gira un **proxy per ogni protocollo** da far passare: un protocollo senza proxy semplicemente non attraversa H. Le politiche di accesso stabiliscono chi può usare quale proxy e per fare cosa.
>>
>> Nella figura i server sono nella rete aziendale e i client in Internet: è il caso di un *reverse proxy*, che protegge i server interni dai client esterni. Altrettanto comune è il caso opposto (*forward proxy*): i client interni escono verso server esterni passando dal proxy, per esempio un proxy HTTP aziendale che fa anche caching e filtraggio dei contenuti.

---
## Slide 14 – Protezione di host: firewall

![[RT06-s014-1.png|550]]

- Un firewall è un filtro software/hardware che serve a proteggersi da accessi indesiderati provenienti dall'esterno della rete
- Può essere semplicemente un programma installato sul proprio PC che protegge quest'ultimo da attacchi esterni
	- tipicamente usato in accessi domestici a larga banda (ADSL, FTTH)

>> Esempi di firewall personali (host-based) sono Windows Defender Firewall, il firewall di macOS e iptables/nftables (o ufw) su Linux. Proteggono solo la macchina su cui girano e possono filtrare anche per applicazione (es. "questo programma non può accettare connessioni in ingresso").

---
## Slide 15 -> 16 – Protezione di rete: firewall

- Oppure può essere una macchina dedicata che filtra tutto il traffico da e per una rete locale

![[RT06-s015-1.png|600]]

- Tutto il traffico fra la rete locale ed Internet deve essere filtrato dal firewall
- Solo il traffico autorizzato deve attraversare il firewall
- Si deve comunque permettere che i servizi di rete ritenuti necessari siano mantenuti
- Il firewall deve essere per quanto possibile immune da problemi di sicurezza sull'host

>> Il primo punto è un requisito di topologia: non devono esistere percorsi alternativi che aggirano il firewall (es. un modem 4G collegato a un PC della LAN), altrimenti tutto il filtraggio è inutile. Il secondo corrisponde a una default policy *deny* (slide 8). Il terzo ricorda il compromesso con l'usabilità: bloccare tutto è sicuro ma inutile.
>>
>> L'ultimo punto vuol dire che la macchina firewall dev'essere a sua volta difficile da attaccare (*hardening*): sistema minimale, nessun servizio superfluo, nessun utente ordinario, aggiornamenti costanti. Se il firewall viene compromesso, l'attaccante si trova già "dentro" e controlla il filtro.

---
## Slide 17 – Configurazione di packet filter e proxy

![[RT06-s017-1.png|600]]

- LAN interna – Applicazioni (3 host)
- Packet Filter
- Zona Demilitarizzata – Applicazioni con Proxy, Applicazioni
- Internet

>> La **Zona Demilitarizzata (DMZ)** è una sottorete "cuscinetto" fra la LAN interna e Internet. Vi si mettono le macchine che devono essere raggiungibili dall'esterno (web server, mail server, DNS pubblico) e il proxy. Il router verso Internet di solito filtra anch'esso (screening router), quindi ci sono due barriere in serie (architettura *screened subnet*).
>>
>> Politica tipica:
>> - da Internet si può raggiungere solo la DMZ, e solo sui servizi pubblicati (es. TCP 80/443 verso il web server);
>> - dalla DMZ verso la LAN interna non si apre nessuna connessione (il packet filter interno la blocca);
>> - dalla LAN interna verso l'esterno si passa dal proxy nella DMZ (il packet filter permette le connessioni LAN → proxy e poco altro).
>>
>> Vantaggio: se un server della DMZ viene compromesso, l'attaccante ha ancora davanti il packet filter interno e non arriva direttamente agli host della LAN.
---
## Slide 18 – **Virtualizzazione di rete**
---
## Slide 19 – Virtualizzazione

- Creare versioni "virtuali" di sistemi di computazione, di memorizzazione, di rete
- **Versione virtuale** di un sistema
	- Il sistema viene eseguito come elemento software logicamente indipendente dall'hardware utilizzato
- Vantaggi
	- Condivisione di risorse fisiche
	- Disaccoppiamento del progetto software da quello hardware
	- Maggiore flessibilità (mobilità, scalabilità)
- Criticità
	- Isolamento fra sistemi distinti che condividono lo stesso hardware
	- Sicurezza e privacy

>> Esempio classico: più macchine virtuali sullo stesso server fisico, gestite da un hypervisor. Ogni VM "crede" di avere CPU, memoria e scheda di rete proprie. L'isolamento è la criticità principale: un errore o un attacco in una VM non deve riuscire a leggere o disturbare le altre. In rete vale lo stesso: il traffico di clienti (tenant) diversi che condividono gli stessi link e switch deve restare separato.

---
## Slide 20 – Virtualizzazione di rete

- Punto di partenza
	- L'infrastruttura di rete, soprattutto se geografica, non è facilmente modificabile su richiesta
	- Le esigenze di servizio dell'utenza presentano una complessità sempre crescente
- Obiettivo della virtualizzazione
	- Realizzare topologie o funzionalità sull'infrastruttura esistente diverse da quelle native
- In generale si parla di reti "overlay"
	- Sovrapposte logicamente all'infrastruttura fisica per realizzare funzionalità diverse da quelle normalmente fornite dalla stessa

>> Terminologia: la rete fisica sottostante si chiama **underlay**, quella logica costruita sopra si chiama **overlay**. Il meccanismo di base è quasi sempre l'**incapsulamento** (tunneling): il pacchetto dell'overlay viaggia come payload dentro un pacchetto dell'underlay, che lo trasporta senza guardarci dentro.

---
## Slide 21 – Reti "Overlay"

![[RT06-s021-1.png|650]]

- Overlay Network
- Logical link
- Access network
- Network Domain
- Service Gateway

>> Lettura della figura: i nodi blu formano la rete overlay e sono collegati da *logical link*. Ogni link logico corrisponde in realtà a un percorso di più hop dentro i domini di rete fisici (nuvole verdi), come mostra la linea blu spessa nel dominio in basso a destra. Le linee tratteggiate verticali indicano su quale nodo fisico è "appoggiato" ogni nodo overlay. Il Service Gateway è il punto in cui l'overlay si aggancia a un dominio fisico.
>>
>> Esempi di overlay noti: le reti P2P, le CDN, le VPN e anche Internet stessa, che agli inizi era un overlay costruito sopra la rete telefonica.

---
## Slide 22 – Tecnologie di virtualizzazione

- Generic Routing Encapsulation (GRE) RFC 1701
- Virtual eXtensible Local Area Network (VXLAN) RFC 7348
- Virtual Local Area Network (VLAN) IEEE 802.1Q
- Virtual Private Network (VPN)
- Virtual Private Wire Service (VPWS)
- Virtual Private LAN Service (VPLS) RFC 4761 4762

>> In breve: GRE è un tunnel generico punto-punto su IP, che crea un overlay di livello 3. VXLAN trasporta frame Ethernet in UDP/IP, cioè un overlay di livello 2 su una rete IP. Le VLAN 802.1Q dividono una LAN fisica in più LAN logiche con un tag di 4 byte nel frame. Il VLAN ID è di 12 bit, quindi ci sono al massimo 4094 VLAN utilizzabili (0 e 4095 sono riservati): è questo limite che VXLAN supera con il VNI a 24 bit.
>>
>> VPWS e VPLS sono servizi offerti dagli operatori, tipicamente su MPLS. VPWS è un "filo" L2 punto-punto emulato (pseudowire). VPLS emula una LAN multipunto fra più sedi: RFC 4761 usa BGP per la segnalazione, RFC 4762 usa LDP.

---
## Slide 23 – La network IP

- La network IP è già una forma di network overlay
- Gli switch interconnessi realizzano la LAN
	- Un solo dominio di broadcast
	- La ripartizione degli host in diverse network IP determina differenze nelle politiche di instradamento politica di instradamento
		- Direct forwarding fra Host della stessa network IP
		- Indirect forwarding tramite gateway fra host di network IP diverse

![[RT06-s023-1.png|600]]

- LAN
- 192.168.10.1, 192.168.10.2 → 192.168.10.0/24
- 192.168.20.1, 192.168.20.2 → 192.168.20.0/24

>> Nella slide "politica di instradamento" è ripetuto per refuso.
>>
>> I quattro host sono sulla stessa LAN fisica (stesso dominio di broadcast), ma l'indirizzamento IP li divide in due reti logiche. Un host decide come inoltrare facendo l'AND fra l'indirizzo di destinazione e la propria netmask, come visto nella nota [[01 - Instradamento IPv4 e IPv6]]. Se 192.168.10.1 invia a 192.168.10.2, la destinazione è nella sua stessa /24: fa ARP e consegna direttamente (direct forwarding). Se invia a 192.168.20.1, la destinazione è fuori dalla sua rete: manda il frame al MAC del gateway, che lo rigira sulla stessa LAN (indirect forwarding). Questo succede anche se fisicamente il frame avrebbe potuto arrivare direttamente.

---
## Slide 24 – GRE Tunnel (RFC 1701)

- Protocollo per l'incapsulamento di pacchetti generici su protocollo IP

![[RT06-s024-1.png|500]]

- In particolare può permettere l'incapsulamento di IP su IP

![[RT06-s024-2.png|550]]

- IP | GRE | Pacchetto da trasportare
- IP | GRE | IP | Dati
	- IP header esterno per il trasporto in rete
	- IP header interno per gli utenti del tunnel

>> Nell'header IP esterno il campo Protocol vale **47** (GRE). Gli indirizzi esterni sono quelli dei due estremi del tunnel (router), quelli interni sono quelli degli host che comunicano. I router intermedi vedono e instradano solo l'header esterno.
>>
>> Overhead nel caso IPv4 su IPv4 senza campi opzionali: 20 byte di IP esterno + 4 byte di GRE = 24 byte. Per questo su un'interfaccia tunnel GRE si usa di solito un MTU di 1500 − 24 = 1476 byte.
>>
>> Per IP-in-IP esiste anche l'incapsulamento diretto senza GRE (RFC 2003, protocollo 4), che costa 4 byte in meno. GRE però può trasportare qualunque protocollo (il "Generic" del nome), indicato dal campo Protocol Type.

---
## Slide 25 – GRE header

- Version (0) indica la versione dell'header
- Protocol type: dice che tipo di protocollo viene incapsulato nel tunnel
- Sono poi disponibili campi opzionali per altre funzioni

```
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|C|R|K|S|s|Recur|  Flags  | Ver |         Protocol Type         |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|      Checksum (optional)      |       Offset (optional)       |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                         Key (optional)                        |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                    Sequence Number (optional)                 |
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
|                         Routing (optional)
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

>> Campi della prima parola, la sola sempre presente (4 byte), secondo RFC 1701:
>> - **C** (bit 0, Checksum Present): se vale 1 sono presenti i campi Checksum e Offset e il Checksum è valido.
>> - **R** (bit 1, Routing Present): se vale 1 sono presenti i campi Offset e Routing (e quindi anche il Checksum, che sta nella stessa parola). Se C o R valgono 1 la parola Checksum + Offset c'è sempre, ma ciascuno dei due valori ha significato solo se il suo bit è a 1.
>> - **K** (bit 2, Key Present): se vale 1 è presente il campo Key (32 bit).
>> - **S** (bit 3, Sequence Number Present): se vale 1 è presente il Sequence Number (32 bit).
>> - **s** (bit 4, Strict Source Route): si mette a 1 solo se tutte le informazioni di Routing sono di tipo *strict* source route, cioè il percorso indicato va seguito senza hop intermedi aggiuntivi.
>> - **Recur** (bit 5–7, Recursion Control): intero senza segno di 3 bit che indica quanti ulteriori incapsulamenti sono ammessi; di default vale 0. Serve a evitare che un pacchetto venga incapsulato all'infinito, ad esempio se la destinazione del tunnel viene raggiunta passando di nuovo per il tunnel stesso.
>> - **Flags** (bit 8–12): riservati per usi futuri, vanno trasmessi a 0.
>> - **Ver** (bit 13–15): versione, deve valere 0. Il valore 1 è usato solo dalla variante "enhanced GRE" di PPTP (RFC 2637).
>> - **Protocol Type** (16 bit): tipo del pacchetto trasportato, con gli stessi codici EtherType di Ethernet. Ad esempio 0x0800 = IPv4, 0x86DD = IPv6, 0x8847 = MPLS, 0x6558 = frame Ethernet completi (Transparent Ethernet Bridging, cioè un tunnel GRE di livello 2).
>>
>> Campi opzionali:
>> - **Checksum** (16 bit): checksum IP (complemento a uno) calcolato su header GRE e payload.
>> - **Offset** (16 bit): distanza in byte dall'inizio del campo Routing alla prima Source Route Entry (SRE) attiva, cioè quella da esaminare adesso.
>> - **Key** (32 bit), **Sequence Number** (32 bit), **Routing** (lunghezza variabile, una lista di SRE): vedi la slide successiva. La riga Routing non è chiusa a destra proprio perché ha lunghezza variabile.
>>
>> L'header GRE va quindi da 4 byte (nessun bit a 1) a 16 byte più il Routing (C o R, K e S tutti a 1).
>>
>> **Differenza con RFC 2784**: RFC 2784 (2000) ha semplificato l'header, che oggi è quello usato in pratica. Resta solo il bit **C**; i bit 1–12 diventano *Reserved0*, e un ricevitore che non implementa anche RFC 1701 deve scartare i pacchetti con i bit 1–5 diversi da 0. Spariscono quindi R, s, Recur, Offset e Routing, e al posto di Offset c'è un campo *Reserved1* di 16 bit. Key e Sequence Number (bit K e S) sono stati poi reintrodotti da RFC 2890 come estensione di RFC 2784.
>>
>> ```
>>  0                   1                   2                   3
>>  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
>> +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
>> |C|       Reserved0       | Ver |         Protocol Type         |
>> +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
>> |      Checksum (optional)      |       Reserved1 (Optional)    |
>> +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
>> ```

---
## Slide 26 – GRE header: campi opzionali

- Checksum
	- Inserito per controllare la correttezza dei dati (Internet checksum)
- Key
	- Può essere inserito per autenticare la sorgente del pacchetto incapsulato nel tunnel con un qualche metodo di autenticazione (password)
- Sequence Number
	- Inserito alla sorgente per stabilire la sequenza di invio dei pacchetti sul tunnel
	- La destinazione dovrebbe instradare i pacchetti ricevuti nel corretto ordine
- Routing
	- È possibile elencare i router che si vuole vengano attraversati dal pacchetto (determina la politica di instradamento del tunnel)

>> Key: RFC 1701 la descrive davvero come un mezzo con cui il ricevitore può autenticare la sorgente. Però la chiave viaggia in chiaro, quindi chiunque intercetti il traffico la legge: non è una vera protezione. In pratica (RFC 2890) la Key si usa per distinguere più tunnel o più flussi fra la stessa coppia di estremi. Per riservatezza e autenticazione vere si usa GRE dentro IPsec.
>>
>> Sequence Number: RFC 1701 non definisce cosa debba fare il ricevitore. RFC 2890 stabilisce che i pacchetti arrivati fuori ordine vengono scartati oppure tenuti in un buffer e consegnati in ordine. "Instradare nel corretto ordine" va letto in questo senso: consegnare in uscita dal tunnel nell'ordine di invio.
>>
>> Routing: è una forma di source routing (simile all'opzione Source Route dell'header IPv4), che si combina con i bit R e s e con il campo Offset. È stato eliminato in RFC 2784 e oggi non si usa.

---
## Slide 27 -> 28 – Applicazione del GRE

- Incapsulamento di IP su IP
- Permette di creare un overlay a livello di routing

![[RT06-s027-1.png|600]]

>> Tre router della rete fisica (in rosso) sono collegati fra loro da tunnel GRE (in verde). Sul piano logico i tre router si vedono come vicini diretti, collegati da link punto-punto (le interfacce tunnel), anche se fisicamente sono separati da più hop. Su questi link logici gira un secondo dominio OSPF, distinto da quello della rete fisica: ci sono due istanze di routing sovrapposte (vedi OSPF nella nota [[04 - Instradamento nelle reti a pacchetto e in Internet]]).
>>
>> Gli Hello OSPF sono inviati in multicast a 224.0.0.5. Dentro il tunnel diventano normali pacchetti unicast fra gli estremi, quindi attraversano anche router che non sanno nulla dell'overlay. È uno dei motivi per cui si usa GRE: IPsec da solo, ad esempio, non trasporta traffico multicast.
>>
>> Tranello pratico: l'indirizzo di destinazione del tunnel deve essere raggiunto tramite il routing *fisico*. Se l'overlay annunciasse anche gli indirizzi degli estremi del tunnel, il router potrebbe decidere di raggiungere l'estremo passando per il tunnel stesso (routing ricorsivo): il tunnel cade, la route sparisce, il tunnel torna su, e così via. È il problema che il campo Recur dell'header RFC 1701 cercava di limitare.

![[RT06-s028-1.png|650]]

>> In alto, la linea nera è il percorso fisico seguito dal tunnel fra i due estremi più in basso; il link marcato con X si guasta. In basso, l'OSPF della rete fisica ricalcola le route e il tunnel ora passa per un altro nodo (nuova linea nera), mentre la topologia logica (in verde) resta identica. Nel dominio logico nessun LSA viene rigenerato e nessuna route viene ricalcolata.
>>
>> Il rovescio della medaglia: il costo OSPF di un'interfaccia tunnel è un valore configurato e non segue il percorso fisico reale, che ora magari è più lungo o più lento. Inoltre GRE è stateless: se la rete fisica si partiziona davvero, il tunnel resta "up" finché non se ne accorge l'OSPF logico (Hello mancati per tutto il dead interval) oppure un meccanismo di keepalive.

---
## Slide 29 – Virtual Extensible LAN (VXLAN)

- Highly scalable distributed Layer 2 overlay network for tenant traffic isolation in cloud computing environments
- Encapsulation of L2 traffic in UDP packets (dest port 4789)
	- stateless tunnels between VXLAN Tunnel End Points (VTEPs)
	- each isolated L2 segment is identified by a 24-bit VXLAN Network Identifier (VNI) → 16M VNIs

![[RT06-s029-1.png|650]]

>> I valori sono corretti (RFC 7348): la porta UDP di destinazione assegnata da IANA è **4789**. Il VNI è di 24 bit, quindi $2^{24} = 16\,777\,216 \approx 16$ milioni di segmenti, contro le 4094 VLAN possibili con 802.1Q.
>>
>> Header VXLAN (8 byte): Flags (8 bit, con il bit I a 1 per indicare un VNI valido, cioè il byte vale 0x08), Reserved (24 bit), VNI (24 bit), Reserved (8 bit).
>>
>> Cosa contiene ogni livello: l'IP esterno ha come indirizzi quelli dei due VTEP (Protocol = 17, UDP); il frame interno è il frame Ethernet originale della VM, con i MAC degli host. Il frame interno viaggia senza il suo FCS: l'FCS in fondo alla figura è quello del frame esterno. La porta UDP *sorgente* di solito è calcolata con un hash degli header del frame interno, così i router dell'underlay possono distribuire i diversi flussi su più percorsi equivalenti (ECMP).
>>
>> Overhead con IPv4 e senza tag VLAN esterno: 14 + 20 + 8 + 8 = **50 byte**. Per trasportare frame interni con payload da 1500 byte l'underlay deve avere un MTU di almeno 1550 byte. La nota "IP Header Data" della figura è incompleta: i 20 byte dell'header IP comprendono anche flag, fragment offset e TTL.
>>
>> "Stateless" significa che fra i VTEP non c'è un'apertura di sessione o una segnalazione: ogni frame viene incapsulato e spedito in modo indipendente.

---
## Slide 30 – Applicazione di VXLAN

- Una sola network IP estesa sulla rete globale
- VXLAN trasporta i frame Ethernet sulla rete di interconnessione IP

![[RT06-s030-1.png|650]]

- 192.168.1.1, 192.168.1.2, 192.168.1.3, 192.168.1.4
- Switch che implementa la LAN
- Tunnel VXLAN
- IP Network 192.168.1.0/24

>> È la situazione opposta a quella della slide 23. Lì c'era una sola LAN fisica divisa in due reti IP; qui ci sono due LAN fisicamente lontane che formano un'unica rete IP 192.168.1.0/24 e un unico dominio di broadcast. Le icone blu agli estremi del tunnel sono i VTEP. Per gli host è come essere tutti attaccati allo stesso switch: 192.168.1.1 raggiunge 192.168.1.4 con direct forwarding, senza passare da un gateway.
>>
>> Un caso d'uso tipico è la migrazione di una macchina virtuale da un data center all'altro senza cambiarne l'indirizzo IP.

---
## Slide 31 -> 33 – Esempio

![[RT06-s031-1.png|650]]

- ARP request «Who has 192.168.1.1 Tell 192.168.1.3
- ARP request
- Switch che implementa la LAN
- Tunnel VXLAN
- IP Network 192.168.1.0/24

>> Passo 1: 192.168.1.3 vuole parlare con 192.168.1.1, che è nella stessa /24, ma non ne conosce il MAC. Manda quindi una ARP request in broadcast (MAC di destinazione ff:ff:ff:ff:ff:ff), che arriva allo switch locale. Nella slide manca la » di chiusura nel fumetto. La slide non lo disegna, ma lo switch inoltra il broadcast anche a 192.168.1.4, che lo ignora perché l'IP richiesto non è il suo.

![[RT06-s032-1.png|650]]

- VXLAN | ARP request

>> Passo 2: il VTEP incapsula il frame ARP e lo spedisce nel tunnel verso il VTEP remoto. La scritta "Tunnel VXLAN" è stata tolta per far posto al pacchetto in transito. Il riquadro "VXLAN" è una semplificazione: davanti al frame ARP originale ci sono header Ethernet esterno, IP esterno (VTEP → VTEP), UDP con porta di destinazione 4789 e header VXLAN con il VNI del segmento.
>>
>> Dato che è un broadcast, RFC 7348 prevede che il VTEP lo mandi al gruppo multicast IP associato a quel VNI, oppure che ne faccia una copia unicast per ogni VTEP remoto che serve lo stesso VNI (head-end replication). Con due soli siti, come qui, il risultato è lo stesso.

![[RT06-s033-1.png|650]]

- ARP request (verso 192.168.1.1 e 192.168.1.2)
- Switch

>> Passo 3: il VTEP remoto decapsula il frame, toglie gli header esterni e consegna il frame ARP originale, identico a quello partito da .3, alla LAN locale, dove viene inoltrato in broadcast a 192.168.1.1 e 192.168.1.2. Qui gli switch sono etichettati solo "Switch": dopo la decapsulazione si comportano come normali switch Ethernet. 192.168.1.2 scarta la richiesta; 192.168.1.1 risponde.
>>
>> Cosa succede dopo (non mostrato): decapsulando, il VTEP remoto impara che il MAC di .3 si trova dietro il VTEP con quell'IP sorgente esterno, così come uno switch impara i MAC dalle porte. La ARP reply di .1 è unicast verso il MAC di .3: il VTEP la incapsula e la manda direttamente in unicast al VTEP giusto, senza multicast. Da quel momento .1 e .3 comunicano come se fossero sulla stessa LAN.

---
## Riassunto

>> **Minacce e firewall**
>> - Attacchi al flusso fra A e B: **DoS** (la comunicazione viene bloccata), **sniffing** (intercettata), **Man in the Middle** (modificata), **spoofing** (informazioni false inviate a nome di altri).
>> - Il **firewall** sta fra la rete interna da proteggere e quella esterna. Lascia passare alcuni pacchetti e ne blocca altri. Può stare nello stesso apparato del gateway.
>>
>> **Tipi di firewall**
>> - **Packet filter**: decide pacchetto per pacchetto in base a IP sorgente/destinazione e protocollo, e a volte anche alle porte di trasporto. Usa le **ACL** con azioni ACCEPT/DENY/REJECT (REJECT avvisa la sorgente con un ICMP Destination Unreachable, DENY scarta in silenzio).
>> - Le ACL si leggono **in ordine**: vale la prima regola che fa match. Se nessuna fa match si applica la **default policy**: *default accept* (passa tutto tranne ciò che è vietato) o *default deny* (si blocca tutto tranne ciò che è permesso, la scelta più sicura).
>> - Il packet filter è **stateless**: non lega i pacchetti fra loro, quindi è facile da aggirare (es. IP spoofing).
>> - **Stateful Packet Inspector**: ricorda le connessioni aperte (segue il three-way handshake TCP). Può così permettere solo le connessioni aperte dall'interno e far rientrare le risposte, bloccando port scanning e attacchi come il SYN flood.
>> - **Application level gateway / proxy**: equivale a due host collegati, uno per lato. Interpreta un protocollo applicativo specifico (FTP, HTTP, SIP…) e può bloccare o modificare i messaggi, per esempio per farli passare attraverso il NAT. È il più sicuro ma il meno performante, e può fare da collo di bottiglia.
>>
>> **Dove mettere il firewall**
>> - **Sull'host**: un programma che protegge il singolo PC (tipico degli accessi domestici).
>> - **Di rete**: una macchina dedicata attraverso cui deve passare tutto il traffico fra LAN e Internet. Passa solo il traffico autorizzato, ma i servizi necessari devono restare disponibili. Il firewall stesso deve essere il più possibile immune da attacchi.
>> - **Zona demilitarizzata (DMZ)**: il proxy e i server esposti stanno fra il packet filter che protegge la LAN interna e il router verso Internet.
>>
>> **Virtualizzazione e overlay**
>> - Virtualizzare significa far girare un sistema come software indipendente dall'hardware. Vantaggi: risorse fisiche condivise, progetto software slegato dall'hardware, flessibilità. Criticità: isolamento, sicurezza e privacy.
>> - Una **rete overlay** è una rete logica sovrapposta a quella fisica, con topologie e funzioni diverse da quelle native. Tecnologie: GRE, VXLAN, VLAN, VPN, VPWS, VPLS. Anche una network IP sopra una LAN di switch è già una forma di overlay.
>>
>> **GRE**
>> - Incapsula un pacchetto generico (anche IP: **IP su IP**) dietro un header IP esterno e un header GRE. L'IP esterno serve al trasporto nella rete, quello interno agli utenti del tunnel.
>> - Header GRE: bit C, R, K, S, s, Recur, Flags, **Ver = 0** e **Protocol Type** (cosa c'è dentro). Campi opzionali: **Checksum** (Internet checksum), Offset, **Key** (identifica o autentica la sorgente, ma viaggia in chiaro), **Sequence Number** (per mantenere l'ordine), **Routing** (elenco dei router da attraversare). In RFC 2784 resta solo il bit C.
>> - Applicazione: si crea un **dominio OSPF su una rete logica** di tunnel GRE. Se cambia un percorso nella rete fisica, il dominio logico non se ne accorge.
>>
>> **VXLAN**
>> - Overlay di **livello 2** molto scalabile, nato per isolare il traffico dei tenant nel cloud. I frame Ethernet viaggiano dentro pacchetti **UDP (porta 4789)** fra i **VTEP** (VXLAN Tunnel End Point), con tunnel stateless.
>> - Ogni segmento L2 è identificato da un **VNI a 24 bit**, quindi circa 16 milioni di segmenti (contro i 4096 delle VLAN).
>> - Si ottiene una sola network IP (es. 192.168.1.0/24) estesa su siti lontani. Esempio: la ARP request broadcast di 192.168.1.3 entra nel tunnel incapsulata in VXLAN, esce dall'altro lato e raggiunge 192.168.1.1 e .2 come se fossero sulla stessa LAN.
