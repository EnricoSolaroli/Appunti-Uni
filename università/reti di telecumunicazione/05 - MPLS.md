[Visere (2627_MPLS)](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/Visere.pdf>)

# MPLS – Multi-Protocol Label Switching

>> Segue [[04 - Instradamento nelle reti a pacchetto e in Internet]]: lì ogni router decide il next hop con il longest prefix match sulla destinazione IP, qui si aggiunge sopra IP una "etichetta" (label) che permette di inoltrare in modo più semplice e di scegliere i percorsi (ingegneria del traffico).

## Indice

1. **Perché MPLS** (slide 1–6)
	- [[#Slide 2 – Le esigenze della rete di trasporto|Le esigenze della rete di trasporto]]
	- [[#Slide 3 – IP oggi|IP oggi]]
	- [[#Slide 4 – Routing classico|I limiti del routing classico]]
	- [[#Slide 5 – Come possiamo aggiungere queste funzioni senza sostituire il routing IP?|Aggiungere funzioni senza sostituire IP]]
	- [[#Slide 6 – Obiettivo|Obiettivo]]
2. **Concetti di base: flussi, FEC e label** (slide 7–12)
	- [[#Slide 7 – Il concetto di base|Il concetto di base]]
	- [[#Slide 8 – Flow e Label|Flussi e label]]
	- [[#Slide 9 – Forwarding Equivalence Classes (FEC)|Forwarding Equivalence Classes]]
	- [[#Slide 10 – La label|La label]]
	- [[#Slide 12 – Come funziona MPLS|Come funziona MPLS]]
3. **Label switching: LER, LSR, LSP** (slide 13–21)
	- [[#Slide 13 – Label switching|Label switching]]
	- [[#Slide 14 – Label Edge Router - LER|LER]], [[#Slide 15 – Label Switch Router - LSR|LSR]] e [[#Slide 16 – Label Switched Path - LSP|LSP]]
	- [[#Slide 17 – Vantaggi|Vantaggi]]
	- [[#Slide 18 – Ingegneria del traffico|Ingegneria del traffico]] ed [[#Slide 19 – Esempio|esempio]]
	- [[#Slide 20 – MPLS: formato della label|Formato della label (32 bit)]]
	- [[#Slide 21 – Da ricordare|Da ricordare]]
4. **Gestione e assegnazione delle label** (slide 22–35)
	- [[#Slide 22 – MPLS implica che tutta la rete di trasporto deve riconoscere le medesime label?|Le label hanno valore locale]]
	- [[#Slide 23 – Gestione delle label nel LSR|Gestione delle label nel LSR]]
	- [[#Slide 24 – Assegnazione delle label|Assegnazione delle label]]
	- [[#Slide 25 -> 28 – Label allocation|Esempio di allocazione (downstream)]]
	- [[#Slide 29 – Label swapping|Label swapping]]
	- [[#Slide 30 – LER di uscita|LER di uscita: label ordinaria, Implicit NULL, Explicit NULL]]
	- [[#Slide 31 – Explicit NULL|Explicit NULL]] e [[#Slide 32 – Penultimate Hop Popping (PHP)|Penultimate Hop Popping]]
	- [[#Slide 33 – Time To Live|Time To Live]] ed [[#Slide 34 – Esempio|esempio]]
	- [[#Slide 35 – Label merging (aggregazione)|Label merging]]
5. **Label stacking e distribuzione delle label** (slide 36–43)
	- [[#Slide 36 – MPLS: label stacking|Label stacking]] ed [[#Slide 37 -> 38 – Label stacking|esempi]]
	- [[#Slide 39 – Allocazione delle label|Allocazione: unsolicited e on demand]]
	- [[#Slide 40 – Label retention|Label retention: liberal e conservative]]
	- [[#Slide 41 – Modalità di controllo di un LSP|Controllo: independent e ordered]]
	- [[#Slide 42 – Label Distribution Protocol (LDP)|LDP]]
	- [[#Slide 43 – Da ricordare|Da ricordare]]

---
## Slide 1 – MPLS

---
## Slide 2 – Le esigenze della rete di trasporto

- Un operatore utilizza la stessa infrastruttura per trasportare flussi di traffico di diversi clienti e con requisiti differenti.
- La rete deve consentire di:
	- separare logicamente clienti e servizi;
	- applicare trattamenti differenziati alle diverse classi di traffico;
	- utilizzare percorsi scelti in funzione di vincoli e politiche;
	- predisporre percorsi alternativi per reagire rapidamente ai guasti;
	- mantenere il core indipendente dai dettagli delle reti trasportate.
- ***Il solo indirizzo IP di destinazione non rappresenta tutte queste informazioni***.

>> Il punto chiave: l'indirizzo di destinazione dice solo *dove* deve arrivare il pacchetto, non *per chi* lo si trasporta (quale cliente, quale VPN), *come* trattarlo (priorità, banda garantita) né *per quale strada* farlo passare. Per esempio, due clienti diversi possono usare gli stessi indirizzi privati 10.0.0.0/8: guardando solo l'IP il core non riesce a distinguerli.

---
## Slide 3 – IP oggi

- I protocolli di routing calcolano la raggiungibilità delle destinazioni e costruiscono le tabelle di forwarding.
- Ogni router esamina l'indirizzo IP di destinazione e determina il next hop mediante longest prefix match.
- Questo meccanismo garantisce la connettività, ma una rete di trasporto deve anche:
	- distinguere servizi e clienti;
	- controllare l'utilizzo delle risorse;
	- reagire rapidamente ai guasti.

>> Ripasso (vedi [[04 - Instradamento nelle reti a pacchetto e in Internet]]): con il longest prefix match, fra tutte le righe della tabella che corrispondono alla destinazione si sceglie quella con il prefisso più lungo. Esempio: se la tabella contiene 10.0.0.0/8 e 10.1.0.0/16, un pacchetto per 10.1.2.3 corrisponde a entrambe e viene inoltrato secondo 10.1.0.0/16.
>>
>> "Reagire rapidamente ai guasti": con il routing IP classico, dopo un guasto i router devono accorgersene, propagare l'informazione e ricalcolare le rotte (convergenza). Nel frattempo, che può durare da centinaia di millisecondi a secondi, i pacchetti si perdono.

---
## Slide 4 – Routing classico

- Il router IP convenzionali instrada sulla base dell'indirizzo IP di destinazione
- Tutti i pacchetti diretti verso una certa destinazione seguono lo stesso percorso
	- Il percorso è quello riconosciuto di lunghezza minima dall'algoritmo di routing

![[RT05-s004-1.png|550]]

- Da A e C verso F: i flussi da A e da C confluiscono in B e proseguono entrambi su B–D–F

>> Questo è il limite del routing basato solo sulla destinazione: in B la decisione dipende solo da "verso F", quindi tutto il traffico per F prende lo stesso next hop (D), anche se il link B–D si congestiona e B–E–F è libero. Non si può dire a B "il traffico che viene da C mandalo via E" senza ricorrere a meccanismi ad hoc (policy routing).

---
## Slide 5 – Come possiamo aggiungere queste funzioni senza sostituire il routing IP?

>> La risposta, sviluppata nelle slide seguenti, è MPLS: il routing IP resta com'è (OSPF, BGP calcolano ancora le rotte) e sotto il livello IP si aggiunge un'etichetta (label) che guida il forwarding.

---
## Slide 6 – Obiettivo

- Separare routing da forwarding (piano di controllo da piano dati)
- Il ***routing*** si basa sui protocolli convenzionali, che sono molto consolidati e non si possono modificare in modo semplice
- Il ***forwarding*** si basa su identificazione dei pacchetti basata su label e commutazione veloce

>> Piano di controllo = come si decidono le strade (protocolli di routing, costruzione delle tabelle); avviene "ogni tanto", in software. Piano dati = cosa si fa con ogni singolo pacchetto (consultare la tabella e inoltrare); avviene milioni di volte al secondo, idealmente in hardware. MPLS cambia solo il piano dati e lascia invariato il calcolo delle rotte.

---
## Slide 7 – Il concetto di base

- In una rete tradizionale si deve valutare in ogni router come instradare il singolo pacchetto
	- Longest prefix match e scelta del next hop
- Questo richiede tempo e mette sotto pressione i router che devono gestire moltissimi pacchetti al secondo
- Possiamo semplificare l'operazione di forwarding?

**Perché non marcare tutti i pacchetti che devono fare un tratto di strada e gestirli in base alla marcatura senza dover fare Longest Prefix Match?**

>> L'idea è la stessa dei circuiti virtuali (X.25, Frame Relay, ATM): la classificazione "costosa" si fa una sola volta, all'ingresso. Da lì in poi ogni nodo legge solo un'etichetta corta e la usa come indice diretto in una tabella (exact match), senza dover confrontare prefissi di lunghezza variabile.
>>
>> Oggi anche i router IP fanno il longest prefix match in hardware (TCAM), quindi il vantaggio di velocità conta meno che negli anni '90, quando MPLS è nato. Il valore principale di MPLS oggi sta nelle funzioni aggiuntive: traffic engineering, VPN, fast reroute.

---
## Slide 8 – Flow e Label

- Viene definito il concetto di **flusso (flow)**
- Un flusso è una sequenza di datagrammi accomunati da:
	- Medesimo instradamento (route)
	- Uniformi richieste di qualità di servizio
	- Insieme delle politiche di gestione richieste nei router (priorità ecc.)
- Posso classificare i flussi in «classi» in base ai requisiti di instradamento
- Il flusso viene associato ad una **etichetta (label)**
	- La label «marca» tutti i datagrammi dello stesso flusso

---
## Slide 9 – Forwarding Equivalence Classes (FEC)

- Insiemi in cui vengono suddivisi i flussi di pacchetti in base a
	- Destinazione
	- Classe di traffico
- Next hop
	- Indirizzo del nodo successivo: è l'elemento fondamentale che caratterizza una classe di equivalenza
- In una rete IP classica i datagrammi in ingresso al router:
	- Vengono associati ad una FEC
	- Instradati nella medesima direzione

>> Una FEC è un insieme di pacchetti che vengono inoltrati tutti nello stesso modo (stesso percorso, stesso trattamento). Nel routing IP classico la FEC è implicita: ogni riga della tabella di routing (ogni prefisso) definisce una FEC, e il router la "ricalcola" a ogni hop con il longest prefix match. In MPLS la FEC si determina **una sola volta**, all'ingresso del dominio, e viene "ricordata" tramite la label.
>>
>> Esempio: FEC 1 = "pacchetti per 192.168.5.0/24"; FEC 2 = "pacchetti per 192.168.5.0/24 con traffico VoIP (DSCP EF)". La destinazione è la stessa, ma le due FEC possono seguire percorsi diversi o avere priorità diverse.

---
## Slide 10 – La label

- La **label** è un identificatore locale ai nodi di rete che semanticamente è in grado di rappresentare le esigenza della rete di trasporto
	- La label ha **lunghezza fissa e breve**
	- La label ha significato locale: non rappresenta direttamente un indirizzo IP
	- L'instradamento avviene tramite **exact match** della label
- Serve un nuovo protocollo di gestione di questa nuova forma di forwarding:
	- MPLS : Multi Protocol Label Switching

>> Exact match e longest prefix match a confronto: con l'exact match la label (20 bit) si usa direttamente come indice in una tabella, quindi basta un solo accesso in memoria. Con il longest prefix match, invece, bisogna trovare fra molti prefissi di lunghezza diversa quello più lungo che corrisponde alla destinazione (con alberi trie o TCAM).

---
## Slide 11 – MPLS

- MultiProtocol Label Switching è definito da IETF per implementare il label switching
- La label viene utilizzata sia per il trasferimento sia per la gestione delle risorse
- Una stessa modalità di trasferimento viene fornita per servizi diversi (unicast, multicast, unicast con diversa QoS)
- E' una soluzione multiprotocollo
	- Rispetto allo strato di rete
	- Rispetto allo strato di linea

>> "Multiprotocollo" in entrambe le direzioni: sopra MPLS si può trasportare IPv4, IPv6, ma anche trame Ethernet o altro (pseudowire). Sotto, MPLS funziona su Ethernet, PPP, ATM, Frame Relay, ecc. Per questo lo si descrive spesso come un protocollo di "livello 2,5". L'architettura è definita nella RFC 3031.

---
## Slide 12 – Come funziona MPLS

- All'ingresso del dominio MPLS, i pacchetti vengono classificati in una Forwarding Equivalence Class, FEC.
- Il router di ingresso (**Label Edge Router o LER**) inserisce una **label** nel pacchetto: **PUSH**.
- I router del core (**Label Switched Router o LSR**) inoltrano il pacchetto in base alla label e possono sostituirla a ogni hop: **SWAP**.
- All'uscita dal dominio, la label viene rimossa: **POP**.
- La sequenza di router attraversata dai pacchetti appartenenti alla stessa FEC costituisce un **Label Switched Path (LSP)**.

>> Esempio: un pacchetto per 10.1.2.3 entra nel LER A, che lo classifica nella FEC "10.1.0.0/16" e fa PUSH della label 17. L'LSR B riceve label 17 e, consultando la sua tabella, fa SWAP con la label 30 e lo invia a C. C fa SWAP 30 → 25 e lo invia al LER D, che fa POP e inoltra il pacchetto IP normalmente.
>>
>> PUSH (aggiungere una label), SWAP (sostituirla) e POP (toglierla) sono le tre sole operazioni del piano dati MPLS.

---
## Slide 13 – Label switching

![[RT05-s013-1.png|650]]

- Legenda: **LER**, **LSR**, **IP router**
- Il pacchetto `DATA | IP` arriva da un host al LER di ingresso, che lo classifica:
	- i pacchetti della FEC1 (`DATA | IP | FEC1`) seguono **LSP1** (percorso in alto)
	- i pacchetti della FEC2 (`DATA | IP | FEC2`) seguono **LSP2** (percorso in basso)
- Al LER di uscita la label viene tolta e il pacchetto `DATA | IP` prosegue verso la LAN di destinazione attraverso un normale IP router

>> Nella figura l'etichetta è scritta come "FEC1"/"FEC2" per semplicità: in realtà il valore numerico della label cambia a ogni hop (SWAP), mentre la FEC (e quindi l'LSP) resta la stessa per tutto il percorso.
>>
>> Le due FEC possono avere anche la stessa destinazione IP: i pacchetti partono dallo stesso LER e arrivano allo stesso LER di uscita, ma seguono percorsi diversi. Con il routing IP classico questo non sarebbe possibile.

---
## Slide 14 – Label Edge Router - LER

- Attribuisce ai pacchetti entranti dominio MPLS la label
- Toglie la label ai pacchetti uscenti
- Quando un LER riceve un pacchetto dall'esterno
	- Determina la FEC e il next hop
	- Se il next hop è un LSR viene determinata la label da aggiungere al pacchetto
	- Invia il pacchetto al next hop

>> Il LER è l'unico punto in cui si fa il lavoro "pesante": classificazione e longest prefix match sull'IP. Nella terminologia Cisco è detto anche PE (Provider Edge), mentre gli LSR del core sono i P (Provider). Lo stesso LER fa da ingress per alcuni LSP e da egress per altri.

---
## Slide 15 – Label Switch Router - LSR

- Un router capace di label switching viene detto label switch router o LSR
- Ciascun LSR mantiene una tabella di instradamento detta Label Forwarding Information Base (LFIB)
- LFIB contiene:
	- elenco delle label attive
		- la label è di fatto la entry nella LFIB
	- interfaccia sulla quale va inviato un datagramma con una certa label
	- nuova label da associare a quel datagramma

>> Esempio di LFIB di un LSR:
>>
>> | Label in ingresso | Interfaccia di uscita | Label in uscita |
>> |---|---|---|
>> | 17 | eth1 | 30 |
>> | 18 | eth2 | 42 |
>> | 21 | eth1 | pop |
>>
>> Un pacchetto con label 17 viene inviato su eth1 con label 30. "La label è la entry" significa che la label in ingresso è la chiave di ricerca (exact match). Con "pop" la label viene tolta, come nel PHP che si vedrà più avanti.
>>
>> Nota sui nomi: la slide usa sia "Label Switch Router" (qui) sia "Label Switched Router" (slide 12). Indicano la stessa cosa; la RFC 3031 usa "Label Switching Router".

---
## Slide 16 – Label Switched Path - LSP

- Un Label Switched Path è una sequenza di routers tale che
	- Inizia con un LER che inserisce la label
	- Tutti i LSR intermedi che commutano i pacchetti sulla base della label
	- Termina con un LER che
		- Prende la decisione di instradamento in modo IP convenzionale senza utilizzare le label
- Tutti i pacchetti appartenenti al medesimo LSP vengono instradati sul medesimo percorso (connection oriented)

>> Un LSP è **unidirezionale**: per il traffico di ritorno serve un altro LSP (che può seguire anche un percorso diverso). "Connection oriented" va inteso nel senso che il percorso viene stabilito prima dell'invio dei dati, come in un circuito virtuale. Non c'è però prenotazione di risorse né controllo di stato per ogni connessione, a meno di usare l'ingegneria del traffico.
>>
>> Con il Penultimate Hop Popping (PHP), che si vedrà più avanti, la label viene tolta già dal penultimo router. Così il LER di uscita riceve direttamente il pacchetto IP e deve fare un solo lookup invece di due.

---
## Slide 17 – Vantaggi

- Mantenimento dei protocolli di routing IP standard (OSPF, BGP)
	- disponibilità
	- scalabilità
	- flessibilità
- Trasferimento veloce dei pacchetti
	- Possibilità di utilizzo di hardware sviluppati per altre tecniche di commutazione veloce per il forwarding e lo switching

>> "Hardware sviluppato per altre tecniche": alla nascita di MPLS esistevano già switch ATM e Frame Relay molto veloci, che commutavano celle e trame in base a un identificatore locale (VPI/VCI, DLCI). MPLS ha permesso di riusarli come LSR, mettendo la label MPLS al posto di quell'identificatore.

---
## Slide 18 – Ingegneria del traffico

- Utilizzando indicazioni esplicite è possibile ad esempio
	- ripartire i flussi di traffico su diversi percorsi
	- avere percorsi alternativi già pronti da utilizzare in caso di guasto
- Questi sono meccanismi avanzati di **ingegneria del traffico nella rete di trasporto**
	- Tipicamente servono protocolli specifici a supporto

![[RT05-s018-1.png|550]]

- Il flusso da A segue A–B–D–F (blu), quello da C segue C–B–E–F (verde)

>> È la stessa rete della slide 4, ma lì in B tutto il traffico verso F andava su D. Qui B smista i due flussi su percorsi diversi, perché non guarda più la destinazione IP ma la label, che identifica l'LSP scelto all'ingresso.
>>
>> I "protocolli specifici" sono soprattutto RSVP-TE, che segnala un LSP lungo un percorso esplicito prenotando banda, e le estensioni TE di OSPF e IS-IS, che diffondono la banda disponibile sui link. Il meccanismo dei "percorsi alternativi già pronti" si chiama MPLS Fast Reroute: con LSP di backup già installati si commuta in meno di 50 ms.

---
## Slide 19 – Esempio

- A deve inviare 80 Mb/s ad una network collegata a F
	- 40 Mb/s di traffico in tempo reale
	- 40 Mb/s di trasferimento dati.
- Con il normale shortest-path routing, entrambi i flussi seguirebbero A–B–D–F, congestionando il link B–D da 50 Mb/s.
- Con Traffic Engineering e MPLS (MPLS-TE) possiamo definire due LSP:
	- LSP1: per il traffico real time, 40 Mb/s, percorso A–B–D–F
	- LSP2: per il traffico dati dati, 40 Mb/s, percorso A–B–E–F
- L'LSR A classifica i pacchetti e li associa all'LSP opportuno.
- La destinazione IP rimane la stessa, ma i percorsi utilizzati sono differenti.

>> La rete è quella della slide 18. Con lo shortest path, sul link B–D arriverebbero 80 Mb/s su 50 disponibili: 30 Mb/s in eccesso, quindi code piene e perdite che colpirebbero anche il traffico in tempo reale. Con i due LSP, B–D porta 40 Mb/s (80% di utilizzo) e B–E–F gli altri 40 Mb/s.
>>
>> Precisazione: A, che classifica i pacchetti e inserisce la label, svolge il ruolo di LER di ingresso (non di semplice LSR). "dati dati" è una ripetizione nella slide.

---
## Slide 20 – MPLS: formato della label

- La label è una entità breve e di lunghezza fissa
- Non codifica gli indirizzi di rete
- E' trasportata assieme al pacchetto, tipicamente inserita tra l'intestazione del protocollo di linea e l'intestazione del protocollo di rete

![[RT05-s020-1.png|500]]

- **Label**: è l'etichetta vera e propria
- **TC (Traffic Class)**: 3 bit riservati alla gestione della qualità di servizio
- **S**: usato per **label stacking** in reti MPLS gerarchiche
	- Se non ci sono ulteriori etichette
		- S = 1
	- Altrimenti
		- S = 0
- **TTL**: è il tempo di vita del pacchetto

>> Verifica: 20 + 3 + 1 + 8 = 32 bit = 4 byte per ogni label (detta *label stack entry* o "shim header"). Con 20 bit ci sono $2^{20} = 1\,048\,576$ valori possibili. I valori 0–15 sono riservati: per esempio 0 = IPv4 Explicit NULL, 2 = IPv6 Explicit NULL, 3 = Implicit NULL (usato per segnalare il PHP).
>>
>> Il campo TC si chiamava EXP ("experimental") fino alla RFC 5462 (2009), quindi in molti testi si trova ancora con quel nome. Ha 3 bit come il campo IP Precedence, quindi 8 classi. Spesso lo si ricava dal DSCP del pacchetto IP.
>>
>> S (Bottom of Stack) = 1 indica l'**ultima** label della pila, cioè quella più vicina all'header IP. Esempio con due label (VPN): label esterna con S = 0, label interna con S = 1.
>>
>> Il TTL funziona come quello IP: all'ingresso di norma si copia il TTL IP nella label, ogni LSR lo decrementa e a 0 il pacchetto viene scartato, così si evitano cicli infiniti. All'uscita lo si ricopia nel campo TTL IP.
>>
>> "DL" = intestazione di livello data link (es. Ethernet). Nelle trame Ethernet la presenza di MPLS è segnalata dall'EtherType 0x8847.

---
## Slide 21 – Da ricordare

- I flussi di traffico sono classificati in **forwarding equivalent classes (FEC)**, insiemi di pacchetti che verranno gestiti tutti nel medesimo modo lungo un **label switched path (LSP)**
- Alla FEC corrisponde un insieme di **etichette (label)** che vengono usate per il forwarding dei pacchetti al posto dell'indirizzo IP
- Nei router MPLS il forwarding viene effettuato mediante exact match della label in ingresso, evitando il longest prefix match sull'indirizzo IP

>> "Un insieme di etichette" perché a ogni hop la label della stessa FEC può avere un valore diverso: la FEC è unica lungo l'LSP, ma i valori delle label cambiano con lo SWAP. Il nome corretto è "forwarding equivalence class".

---
## Slide 22 – MPLS implica che tutta la rete di trasporto deve riconoscere le medesime label?

No: **le label hanno significato locale**.
Ciascun LSR riconosce le label che ha assegnato e annunciato ai propri vicini. Durante il forwarding, la label può essere sostituita con quella richiesta dal nodo successivo.

>> Esempio: LSP A → B → C → D per la FEC 10.1.0.0/16. C annuncia a B "per 10.1.0.0/16 mandami label 30"; B annuncia ad A "per 10.1.0.0/16 mandami label 17". A fa PUSH di 17, B fa SWAP 17 → 30. È quindi chi riceve (il nodo a valle, *downstream*) a scegliere la label: si parla di allocazione downstream, vista più avanti nelle slide sulla label allocation.
>>
>> Visto che il significato è locale, lo stesso valore (es. 17) può essere usato da un altro LSR per una FEC completamente diversa senza conflitti. Basta che ogni LSR non usi lo stesso valore per due FEC diverse. Questo è lo stesso principio dei VPI/VCI di ATM e dei DLCI di Frame Relay.
---
## Slide 23 – Gestione delle label nel LSR

- Associa una label ad ogni LSP (label binding)
	- Riconosce i pacchetti che appartengono alla medesima FEC
	- Associa ai pacchetti la label del LSP a cui appartiene la FEC
- Concorda le label con il LSR a monte
	- Il LSR a monte deve etichettare i pacchetti appartenenti all'LSP in modo che il LSR a valle li riconosca correttamente
- Calcola il prossimo LSR di un LSP
	- Si basa sugli algoritmi e protocolli di routing tradizionali
- Concordare una label con il LSR a valle
	- Il LSR a valle deve correttamente riconoscere i pacchetti come appartenenti all'LSP
- La label di ingresso e quella di uscita per un LSP non devono necessariamente essere uguali
	- Mappatura fra label di ingresso e label di uscita

>> "A valle" (downstream) significa verso la destinazione della FEC, "a monte" (upstream) verso la sorgente. Ogni LSR ha quindi due accordi per lo stesso LSP: con il vicino a monte concorda la propria label di **ingresso**, con quello a valle la propria label di **uscita**. Le due label sono collegate da una riga della LFIB (label in → label out + interfaccia).
>>
>> Il "prossimo LSR" non lo decide MPLS: è il next hop che il routing IP (OSPF, IS-IS, BGP...) ha già calcolato per quel prefisso, come visto in [[04 - Instradamento nelle reti a pacchetto e in Internet]]. MPLS cambia solo il modo di inoltrare i pacchetti (lookup esatto su una label invece del longest prefix match), non il percorso scelto.

---
## Slide 24 – Assegnazione delle label

- Chi crea l'associazione fra label e FEC/LSP?
- Deve essere garantita l'unicità dell'assegnazione per evitare ambiguità
- L'associazione viene fatta sempre dal LSR a valle del collegamento
- Dipendentemente dall'implementazione le label possono essere uniche
	- per interfaccia
	- per LSR

>> Perché a valle? La label serve a chi **riceve** il pacchetto per trovare la riga giusta nella propria LFIB. Solo il ricevente sa quali valori ha già usato, quindi è lui a sceglierli e a garantirne l'unicità.
>>
>> Le due varianti si chiamano *per-interface label space* (la stessa label può indicare FEC diverse su interfacce d'ingresso diverse, quindi la LFIB va consultata con la coppia interfaccia + label) e *per-platform label space* (la label è unica su tutto l'LSR, a prescindere da dove arriva il pacchetto). Il secondo caso è quello che rende possibile il label merging della slide 35.

---
## Slide 25 -> 28 – Label allocation

![[RT05-s025-1.png|341]]![[RT05-s026-1.png|345]]
![[RT05-s027-1.png|342]]![[RT05-s028-1.png|347]]

>> Sequenza: l'allocazione parte dal LER di uscita (a destra, dietro cui c'è la rete 137.204.0.0/16) e risale verso il LER di ingresso. Ogni nodo sceglie la propria label di ingresso, la annuncia al vicino a monte (freccia rossa) e il vicino la scrive come OUT LABEL nella propria tabella. Il LER di ingresso (slide 28) non ha IN LABEL perché riceve un pacchetto IP puro: classifica il pacchetto nella FEC 137.204.0.0/16 e fa PUSH della label 108. Il LER di uscita non ha OUT LABEL perché fa POP e inoltra in IP.
>>
>> **Incoerenza della slide**: le label annunciate sono 7, 10 e 8, ma nelle tabelle compaiono 107, 110 e 108. Vanno lette come la stessa label: 7 ≡ 107, 10 ≡ 110, 8 ≡ 108 (nella slide 29 le tabelle usano 7/10/8 e i pacchetti 107/110/108). I valori a tre cifre sono quelli "realistici": le label 0–15 sono riservate (0 IPv4 Explicit NULL, 1 Router Alert, 2 IPv6 Explicit NULL, 3 Implicit NULL, 7 Entropy Label Indicator...), quindi 7, 8 e 10 non si potrebbero usare come label ordinarie.

---
## Slide 29 – Label swapping

- LSR riceve un datagramma:
	- estrae la sua label di ingresso
	- cerca nella LFIB la entry relativa a quella label
	- sostituisce la label di ingresso con la label di uscita
	- invia il pacchetto sulla interfaccia specificata verso il next hop

![[RT05-s029-1.png|700]]

>> Percorso del pacchetto: entra come IP puro sull'interfaccia 0 del LER di ingresso, che fa PUSH (label 8/108) e lo invia su 1. Il primo LSR lo riceve su 4 con label 8, trova la riga "8 → 10, out 2" e fa SWAP. Il secondo LSR lo riceve su 1 con label 10 e fa SWAP a 7, uscita 3. Il LER di uscita lo riceve su 2 con label 7, fa POP ed esce in IP sull'interfaccia 1.
>>
>> Come nelle slide precedenti, le tabelle usano 8/10/7 mentre i pacchetti disegnati portano 108/110/107: si tratta della stessa label.
>>
>> Nel nucleo il lookup è una ricerca esatta su un indice di 20 bit, molto più semplice del longest prefix match sull'indirizzo IP di destinazione. Ad ogni swap l'LSR decrementa anche il TTL della label (slide 33).

---
## Slide 30 – LER di uscita

- L'ultimo LER ha in realtà più possibilità operative che dipendono dalla label che annuncia al penultimo LSR
	- Label Ordinaria
		- sceglie una label normale
		- farà label POP quando riceve il pacchetto passandolo poi al forwarding IP
	- Implicit NULL (label 3 per IPv4 e label 2 per IPv6):
		- Il penultimo LSR, avendo ricevuto dal LER di uscita il binding con Implicit NULL, esegue POP sulla label corrente invece di sostituirla
		- Il LER di uscita riceve un pacchetto IP senza label quindi usa solamente forwarding IP
	- Explicit NULL (label 0)
		- LSR a monte usa label 0
		- Quando arriva al LER la label 0 viene rimossa ed il pacchetto è gestito dal forwarding IP

>> **Errore della slide**: Implicit NULL è la label **3** sia per IPv4 sia per IPv6. La label 2 è l'**Explicit NULL per IPv6** (RFC 3032). Quindi: Explicit NULL = 0 (IPv4) / 2 (IPv6), Implicit NULL = 3 (per entrambi).
>>
>> La label 3 non compare mai in un pacchetto: esiste solo nella segnalazione (LDP) come istruzione al penultimo LSR "togli la label invece di sostituirla". La label 0, invece, viaggia davvero sull'ultimo collegamento.
>>
>> Con una label ordinaria il LER di uscita deve fare due lookup: prima nella LFIB (per scoprire che deve fare POP), poi nella tabella IP. Implicit NULL (PHP, slide 32) elimina il primo lookup; Explicit NULL lo rende banale (operazione fissa) ma conserva l'header MPLS fino al LER (slide 31).

---
## Slide 31 – Explicit NULL

- La label explicit NULL prevede una operazione prestabilita, non necessita di una LFIB esplicita come la label ordinaria
- Quindi perché usarla?
	- Nell'header MPLS sono presenti anche le informazioni di Traffic Class che potrebbero essere usate dal LER in fase di gestione del pacchetto prima del forwarding IP finale

| | PHP (Implicit NULL) | Label ordinaria | Explicit NULL |
|---|---|---|---|
| Label ricevuta dal LER | Nessuna | Valore qualunque | 0 |
| Elaborazione MPLS nel LER | No, per quella label | Sì | Sì |
| Lookup LFIB per la label | No | Sì | No |
| Informazione MPLS TC disponibile al LER | No, se lo stack è vuoto | Sì | Sì |
| Successivo forwarding | IP | Secondo la LFIB, anche IP | IP, se lo stack è vuoto |

>> TC (Traffic Class) è il campo di 3 bit dell'header MPLS, chiamato EXP prima dell'RFC 5462: serve per la QoS (fino a 8 classi). Con PHP la label viene tolta dal penultimo LSR e il TC va perso sull'ultimo collegamento. Con Explicit NULL il LER riceve ancora la label 0 col suo TC e può applicare la QoS decisa nel dominio MPLS (code, scheduling) prima di passare all'inoltro IP.
>>
>> "Se lo stack è vuoto": con label stacking (slide 36) sotto la label rimossa ce ne può essere un'altra. In quel caso il LER continua l'elaborazione MPLS sulla label successiva invece di passare subito all'IP.

---
## Slide 32 – Penultimate Hop Popping (PHP)

- La label di trasporto viene rimossa dal penultimo LSR, anziché dal LER di uscita.
- II LER di uscita annuncia al penultimo LSR la label speciale Implicit NULL (3).
- Il penultimo LSR esegue POP (non SWAP); l'ultimo LER riceve direttamente IP

![[RT05-s032-1.png|700]]

Perché? LER non deve elaborare l'header MPLS per rimuovere una label ormai non più utile.

>> Confronto con la slide 29: qui il secondo LSR, invece di sostituire 110 con 107, toglie la label. Sull'ultimo collegamento viaggia quindi il pacchetto IP puro e il LER di uscita fa un solo lookup (quello IP). Per il penultimo LSR il costo non cambia: fa comunque un lookup nella LFIB e un'operazione sulla label (POP invece di SWAP).
>>
>> PHP è il comportamento predefinito in molte implementazioni (es. Cisco con LDP). Il suo limite è la perdita del campo TC sull'ultimo hop (vedi slide 31).

---
## Slide 33 – Time To Live

- TTL fa parte dell'intestazione IP
- Quando un datagramma emerge da una rete di trasporto MPLS il campo TTL dovrebbe avere un valore che tiene conto del numero di LSR attraversati
- TTL viene inserito nella label MPLS
	- Ha lo stesso valore del TTL di IP all'ingresso del primo LSR
	- Viene decrementato ad ogni attraverso di un LSR
	- Viene copiato nell'intestazione IP al momento di ritornare ad un normale router

>> Gli LSR non guardano l'header IP, quindi non possono decrementare il TTL IP. Per questo l'header MPLS ha un suo campo TTL di 8 bit (ogni label è di 32 bit: 20 di label, 3 di TC, 1 di S, 8 di TTL). Il TTL MPLS serve allo stesso scopo di quello IP: se arriva a 0 il pacchetto viene scartato, così un loop di instradamento non fa girare i pacchetti all'infinito.
>>
>> Esempio: un pacchetto entra con TTL IP = 64 e attraversa 3 LSR. All'uscita il TTL IP vale 64 − 3 = 61, come se avesse attraversato 3 router IP. Questo è il *modello uniforme*. Con il *modello pipe* l'operatore invece non copia il TTL indietro e il dominio MPLS conta come un solo hop (così, per esempio, traceroute non mostra i router interni).

---
## Slide 34 – Esempio

![[RT05-s034-1.png|650]]

>> Lettura: entrando nel dominio di livello n+1 viene fatto PUSH di una seconda label (102) sopra la label del livello n (106), con lo stesso TTL (7). Dentro il dominio interno si decrementa solo il TTL della label in cima (102 → 104, TTL 7 → 6). La label sottostante resta invariata (106, TTL 7) perché nessuno la guarda. All'uscita dal dominio interno la label superiore viene rimossa e il suo TTL, già ridotto, viene ricopiato in quella sotto. Il risultato finale è TTL 5 = 8 − 3: i tre decrementi contano tutti gli LSR attraversati, anche quelli del dominio interno.
>>
>> Il valore "1" nell'ultima tabella va inteso come illustrativo: nella realtà la label 1 è riservata (Router Alert).

---
## Slide 35 – Label merging (aggregazione)

- Se l'allocazione della label non dipende dall'interfaccia nel caso di unsolicited allocation:
	- Può accadere che due o più flussi di traffico siano aggregati in un unico flusso a valle di un certo LSR

![[RT05-s035-1.png|650]]

>> Idea: con label space per-platform l'LSR a valle annuncia la **stessa** label per la FEC xx.xx a tutti i vicini a monte. I pacchetti della stessa FEC arrivano quindi con la stessa label da interfacce diverse e la LFIB ha una sola riga (la colonna "Int." d'ingresso è vuota perché non serve). In uscita esce un unico flusso con label 5. Così le label e le righe crescono con il numero di FEC, non con il numero di sorgenti.
>>
>> **Incoerenza della slide**: il router in basso invia il pacchetto con label 3, ma la tabella dell'LSR che aggrega ha solo la riga per la label 10. Perché ci sia davvero merging, anche il router in basso dovrebbe usare come OUT label la 10 annunciata dal router a valle. Inoltre 3 è una label riservata (Implicit NULL), quindi qui va intesa come puramente illustrativa.
>>
>> Dopo il merge non si può più distinguere da quale sorgente proviene un pacchetto. Per l'inoltro verso la stessa destinazione non serve, come per l'aggregazione dei prefissi nel routing IP.

---
## Slide 36 – MPLS: label stacking

![[RT05-s036-1.png|600]]

- È possibile innestare domini MPLS
	- Si realizzano diversi livelli di instradamento (simile al concetto di routing gerarchico)
- Push label
	- quando si entra in un dominio, viene aggiunta un'etichetta valida per quel dominio
- Pop label
	- quando si esce da un dominio che viene rimossa l'etichetta

>> Il bit S (Bottom of Stack) vale 1 solo nella label più vicina all'header IP, cioè in fondo allo stack, e 0 in tutte le altre. Nel disegno lo stack cresce di una label (S=0) ad ogni dominio in cui si entra e cala di una ad ogni uscita. Gli LSR guardano e modificano sempre e solo la label in cima (quella più a destra nel disegno, la prima trasmessa).
>>
>> Quando fa POP, un LSR guarda S: se era 1 sotto c'è il pacchetto IP e si passa all'inoltro IP; se era 0 si continua con la label successiva. Usi tipici: tunnel di traffic engineering e VPN MPLS (label esterna = trasporto fino al PE, label interna = VPN/cliente).

---
## Slide 37 -> 38 – Label stacking

![[RT05-s037-1.png|450]]

Deve avere in memoria tutte le FEC

![[RT05-s038-1.png|450]]

Tabella di instramento più semplice

>> Senza stacking (slide 37) l'LSR centrale vede quattro LSP distinti (i quattro colori) e deve avere una riga nella LFIB per ciascuna FEC. Con lo stacking (slide 38) i quattro flussi entrano in un dominio interno dove viaggiano tutti con un'unica label esterna (la freccia fucsia, cioè un tunnel). L'LSR interno ha quindi una sola riga e i flussi si separano di nuovo all'uscita, quando la label esterna viene rimossa e riappaiono le label originali. È lo stesso vantaggio del routing gerarchico e dell'aggregazione dei prefissi visti in [[04 - Instradamento nelle reti a pacchetto e in Internet]]: i nodi interni conoscono solo il "riassunto".

---
## Slide 39 – Allocazione delle label

- Le label sono una risorsa gestita dai LSR a valle di un link
- Le label sono allocate con due diverse modalità:
	- Downstream on demand allocation
	- Unsolicited downstream allocation
- Downstream on demand
	- L'allocazione viene richiesta dal LSR a monte
	- L'allocazione viene resa nota solamente al LSR richiedente
- Unsolicited downstream
	- L'allocazione avviene senza esplicita richiesta
	- L'allocazione viene notificata a tutti i LSR a monte di quello che esegue l'allocazione

>> In entrambi i casi è sempre il nodo a valle a scegliere la label (slide 24). Cambia solo chi fa partire lo scambio: con *on demand* è il vicino a monte a chiedere "che label uso per la FEC X?" (Label Request), con *unsolicited* il nodo a valle annuncia da solo i binding (Label Mapping) a tutti i vicini.
>>
>> In pratica LDP nelle reti IP usa di solito downstream unsolicited, mentre RSVP-TE (traffic engineering) lavora on demand, perché il percorso esplicito viene richiesto dal LER di ingresso.

---
## Slide 40 – Label retention

- A seguito di unsolicited allocation dal LSR X si possono ricevere allocazioni su di un percorso non utilizzato dal LSR a monte
- Cosa fare in questo caso?
	- Liberal retention mode
		- Si tiene memoria dell'associazione e questa può essere immediatamente utilizzata se ad un certo punto si vuole instradare traffico attraverso X
		- Maggiore velocità di esecuzione
	- Conservative retention mode
		- Si cancella l'associazione e, in caso di bisogno, si deve eseguire un'allocazione on demand
		- Maggiore economia nella gestione delle label

>> Esempio: R ha due vicini, X e Y. Per la FEC 137.204.0.0/16 il routing IP sceglie Y come next hop, ma con l'allocazione unsolicited anche X annuncia una label per quella FEC. In *liberal* R conserva la label di X anche se non la usa. Se il link verso Y cade e il routing sceglie X, R può commutare subito, senza segnalazione: convergenza rapida, al prezzo di più memoria. In *conservative* R la scarta e, se servirà, dovrà richiederla di nuovo, quindi con un ritardo.
>>
>> La combinazione tipica è unsolicited + liberal (LDP sui router). La modalità conservative si usa con dispositivi che hanno poche label disponibili (storicamente gli switch ATM) e si abbina naturalmente a on demand.

---
## Slide 41 – Modalità di controllo di un LSP

- Independent LSP control
	- Ogni LSR prende le decisioni di binding in modo indipendente e le distribuisce ai LSR a monte
	- Può accadere che pacchetti di una stessa FEC seguano strade diverse prima che venga formato completamente il LSP
- Ordered LSP control
	- Un LSR crea un binding per una certa FEC solamente se
		- È l'ultimo nodo di un LSP
		- Ha già ricevuto il binding per quella FEC dal LSR che lo segue lungo il LSP
	- La label all'ingresso è disponibile solamente quando tutto il LSP è stato creato
	- La distribuzione delle label procede dal nodo di uscita verso i router a monte, assicurando che i binding necessari a valle siano già disponibili prima dell'annuncio a monte

>> Le slide 25–28 sono un esempio di *ordered control*: il LER di uscita annuncia per primo, ogni nodo annuncia a monte solo dopo aver ricevuto la label da valle, e il LER di ingresso ha la sua label solo alla fine.
>>
>> Con *independent control* ogni LSR annuncia una label appena conosce la FEC dalla propria tabella di routing, anche se il nodo a valle non ha ancora risposto. L'LSP si forma più in fretta, ma per qualche istante un LSR può avere una label in ingresso senza label in uscita: in quel caso fa POP e inoltra in IP, e i pacchetti della stessa FEC possono seguire strade diverse. Ordered è più lento ma garantisce un LSP completo e coerente (necessario per esempio per il traffic engineering).

---
## Slide 42 – Label Distribution Protocol (LDP)

- La label di uscita da un LSR a monte deve essere uguale a quella di ingresso per il LSR a valle
- E' necessario uno scambio di informazioni fra gli LSR al fine di accordarsi sulla label da utilizzare per una certa FEC
- E' possibile modificare protocolli esistenti per svolgere questo compito:
	- RSVP, BGP, RSVP-TUNNELS
- Si possono definire nuovi protocolli ad hoc
	- Label distribution protocol LDP

>> LDP (RFC 5036) in breve: i vicini si scoprono con messaggi Hello su UDP (porta 646, indirizzo multicast 224.0.0.2 "tutti i router della sottorete"). Poi aprono una sessione TCP (porta 646) su cui si scambiano i binding FEC → label (Label Mapping, Label Request, Label Withdraw...). LDP non calcola percorsi: segue le scelte dell'IGP (OSPF/IS-IS).
>>
>> Le estensioni di protocolli esistenti: RSVP-TE (RSVP esteso per creare tunnel con percorso esplicito e banda riservata, quello che la slide chiama "RSVP-TUNNELS") e BGP (trasporta label per le VPN MPLS e per il "labeled unicast" fra domini).

---
## Slide 43 – Da ricordare

Fra due nodi MPLS la label viene decisa dal nodo a valle

La label non è fissata ma cambia da collegamento a collegamento in base alle politiche di allocazione (**label swapping**)

Le label possono essere innestate su domini MPLS diversi (**label stacking**)

>> Altri punti da ricordare di questa parte: label di 32 bit = 20 bit label + 3 TC + 1 S + 8 TTL; label riservate 0–15 (0/2 Explicit NULL IPv4/IPv6, 3 Implicit NULL → PHP). Allocazione: downstream unsolicited o on demand. Retention: liberal (veloce) o conservative (risparmia label). Controllo: independent (veloce) o ordered (LSP coerente).

---
## Riassunto

>> **Perché MPLS**
>> - Il routing IP classico decide hop per hop, solo sulla destinazione, con il longest prefix match: non si possono scegliere percorsi diversi per flussi diversi verso la stessa destinazione, né garantire qualità del servizio. MPLS aggiunge queste funzioni **senza sostituire IP**: si mette "sopra" IP, fra livello 2 e livello 3.
>>
>> **Concetti chiave**
>> - **FEC** (Forwarding Equivalence Class): insieme di pacchetti trattati allo stesso modo, cioè stesso percorso e stesso trattamento. Il pacchetto viene classificato **una sola volta**, all'ingresso della rete.
>> - **Label**: identificatore corto, di lunghezza fissa e con **significato locale** fra due router adiacenti. A ogni salto viene sostituito (**label swapping**) secondo la tabella LFIB: label in ingresso → (interfaccia di uscita, label in uscita).
>> - **LER** (Label Edge Router): ai bordi. In ingresso classifica il pacchetto e inserisce la label (push); in uscita la toglie (pop) e passa al forwarding IP.
>> - **LSR**: all'interno della rete, fa solo label swapping, senza guardare l'header IP.
>> - **LSP** (Label Switched Path): il percorso unidirezionale che i pacchetti di una FEC seguono attraverso gli LSR.
>> - **Ingegneria del traffico**: flussi verso la stessa destinazione possono seguire LSP diversi, per bilanciare il carico o evitare link congestionati.
>>
>> **Header MPLS (32 bit)**
>> - Label (20 bit), TC (3 bit, ex EXP: classe di traffico), S (1 bit, fondo dello stack), TTL (8 bit). Le label 0–15 sono riservate.
>>
>> **Assegnazione e uscita**
>> - Le label le sceglie il router **a valle** (downstream) e le annuncia a quello a monte, che le usa in uscita.
>> - Al LER di uscita ci sono tre possibilità:
>> 	- label ordinaria (il LER fa pop e lookup LFIB);
>> 	- **Implicit NULL** (label 3): il **penultimo** router fa pop (**PHP**, Penultimate Hop Popping) e il LER riceve un pacchetto IP puro;
>> 	- **Explicit NULL** (0 in IPv4, 2 in IPv6): il LER riceve la label e conserva l'informazione TC.
>> - **TTL**: all'ingresso il TTL IP viene copiato nella label e decrementato a ogni salto MPLS; all'uscita viene ricopiato nell'header IP, così i loop continuano a non durare per sempre.
>> - **Label merging**: più flussi entranti con label diverse escono con la **stessa** label (aggregazione).
>>
>> **Label stacking e distribuzione**
>> - Più label impilate (stack, con il bit S sull'ultima): si possono annidare LSP, per esempio un tunnel che attraversa un'altra rete. Si lavora sempre sulla label in cima.
>> - Allocazione **downstream unsolicited** (il router annuncia senza richiesta) oppure **downstream on demand** (su richiesta).
>> - Retention: **liberal** (si tengono anche le label dei vicini che non sono il next hop: reazione più veloce, più memoria) oppure **conservative** (solo quelle del next hop).
>> - Controllo: **independent** (ogni router annuncia appena può) oppure **ordered** (si annuncia solo dopo aver ricevuto la label da valle, a partire dal LER di uscita).
>> - **LDP** (Label Distribution Protocol): il protocollo con cui i router si scambiano le associazioni label–FEC.
