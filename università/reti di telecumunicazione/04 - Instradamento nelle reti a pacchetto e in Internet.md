[2627_Router_3](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/2627_Router_3.pdf>)

# Instradamento nelle reti a pacchetto e in Internet

>> Continua la lezione [[01 - Instradamento IPv4 e IPv6]]: lì la tabella di instradamento è data, qui si vede come i router la costruiscono (algoritmi e protocolli di routing). Nei punti di contatto trovi una riga **Collegamento con 01**.

>> **Da analizzare: slide nuove della versione del 26/10** (spunta quando le hai studiate)
>> - [ ] [[#Slide 145 – EGP come funzionano?|145–159]]: EGP e BGP (sessioni, path vector, policy, messaggi, attributi, scelta del percorso)
>>
>> **Slide già viste ma modificate dal prof** (da rileggere)
>> - [ ] [[#Slide 90 – Router designato|90]] Router designato, [[#Slide 92 – Identificazione dei router e priorità|92]] priorità 0, [[#Slide 100 – Sinconizzazione dei database|100]] sincronizzazione dei database
>> - [ ] [[#Slide 107 – Verso le rotte inter-area|107]] Summary-LSA, [[#Slide 108 – Tipologia di rotte|108]] ordine di preferenza delle rotte, [[#Slide 111 – Tipologia di aree|111]] tipologia di aree, [[#Slide 112 – Da ricordare|112]] Da ricordare
 
## Indice

1. **Il problema dell'instradamento: algoritmi e protocolli** (slide 2–6)
	- [[#Slide 2 – Nelle reti a pacchetto chi e come si decide che strada devono seguire i dati?|Chi decide il percorso dei dati]]
	- [[#Slide 3 – Funzioni di IP|L'instradamento fra le funzioni di IP]]
	- [[#Slide 4 – Algoritmi e protocolli|Scelta del next hop e obiettivi dell'algoritmo]]
	- [[#Slide 5 – Tabella?|Algoritmi con e senza tabella]]
	- [[#Slide 6 – Algoritmi di instradamento|Classificazione degli algoritmi di instradamento]]
2. **Algoritmi senza tabella: flooding e altri** (slide 7–12)
	- [[#Slide 7 – Flooding|Flooding]]
	- [[#Slide 8 – Problema|Proliferazione dei pacchetti]]
	- [[#Slide 9 – Soluzioni|Soluzioni: identificativi e TTL]]
	- [[#Slide 10 – Dinamicità|Instradamento statico e dinamico]]
	- [[#Slide 11 – Altri esempi|Random e deflection routing]]
	- [[#Slide 12 – Da ricordare|Riepilogo]]
3. **Instradamento con tabella, shortest path e grafi** (slide 13–21)
	- [[#Slide 13 – Nell'instradamento con tabelle come si compila la tabella?|Come si compila la tabella]]
	- [[#Slide 14 – Instradamento con tabella|Schema del nodo con tabella]]
	- [[#Slide 15 – Store-and-Forward|Store-and-forward]]
	- [[#Slide 16 – Shortest path routing|Shortest path routing: centralizzato e distribuito]]
	- [[#Slide 17 – Rappresentazione della rete|Topologia come grafo orientato e pesi]]
	- [[#Slide 18 – Il grafo della rete|Definizioni: nodi, archi, grafi orientati e non]]
	- [[#Slide 20 – Grafo pesato|Grafo pesato]]
	- [[#Slide 21 – Routing shortest path nel mondo IP|Shortest path nel mondo IP: protocolli e algoritmi]]
4. **Il router IP: funzioni, RIB e FIB** (slide 22–28)
	- [[#Slide 22 – Il router IP|Il router come nodo di commutazione IP]]
	- [[#Slide 23 – Le 4 funzioni dei Router|Routing, forwarding, switching e trasmissione]]
	- [[#Slide 24 – Schema funzionale di un router|Schema funzionale di un router]]
	- [[#Slide 25 – Tabella di Routing e di forwarding|Routing Information Base e Forwarding Information Base]]
	- [[#Slide 26 – Routing vs. forwarding table|Import/export policies e route selection]]
	- [[#Slide 27 – Arrivare alla FIB|Dalla RIB alla FIB]]
	- [[#Slide 28 – Da ricordare|Riepilogo]]
5. **Routing gerarchico in Internet: IGP ed EGP** (slide 29–34)
	- [[#Slide 29 – Internet è una sola grande rete: i router devono conoscere tutte le network?|I router devono conoscere tutte le network?]]
	- [[#Slide 30 – Internet = rete di reti|Internet come rete di reti]]
	- [[#Slide 32 – Internet: grafo semplificato|Grafo semplificato, IGP ed EGP]]
	- [[#Slide 33 – IGP|Distance vector, link state e path vector]]
	- [[#Slide 34 – Da ricordare|Riepilogo: routing gerarchico]]
6. **Distance vector e Bellman-Ford** (slide 35–39)
	- [[#Slide 35 – IGP: come sono implementati distance vector e link state?|Implementazione degli IGP]]
	- [[#Slide 36 – Distance vector|Principio del distance vector]]
	- [[#Slide 37 – Esempio|Esempio di evoluzione delle tabelle]]
	- [[#Slide 39 – Cold start e tempo di convergenza|Cold start e tempo di convergenza]]
7. **Problemi del distance vector e rimedi** (slide 40–46)
	- [[#Slide 40 – Bouncing effect|Bouncing effect]]
	- [[#Slide 41 – Convergenza lenta|Convergenza lenta]]
	- [[#Slide 42 – Count to infinity|Count to infinity]]
	- [[#Slide 43 – Perché accade?|Perché accade: le cause delle anomalie]]
	- [[#Slide 44 – Split horizon|Split horizon e poisonous reverse]]
	- [[#Slide 45 – Triggered update|Triggered update]]
	- [[#Slide 46 – Ma non basta…|Limiti dei rimedi: loop a tre nodi]]
8. **Il protocollo RIP (versioni 1 e 2)** (slide 47–57)
	- [[#Slide 47 – Routing Information Protocol (RIP)|RIP: messaggi REQUEST e RESPONSE]]
	- [[#Slide 48 – Response|Invio dei RESPONSE e aggiornamenti periodici]]
	- [[#Slide 49 – RIP: formato dei pacchetti|Formato dei pacchetti e significato dei campi]]
	- [[#Slide 51 – La tabella di routing|Tabella di routing, metrica e timer]]
	- [[#Slide 52 – RIP: aggiornamento della tabella di routing|Aggiornamento della tabella]]
	- [[#Slide 53 – RIP: problematiche|Problematiche e sicurezza]]
	- [[#Slide 54 – La mancanza di CIDR|Mancanza di CIDR]]
	- [[#Slide 55 -> 56 – RIP versione 2|RIP versione 2]]
	- [[#Slide 57 – Da ricordare|Riepilogo]]
9. **Traffico di routing e indirizzi multicast** (slide 58–65)
	- [[#Slide 58 – Il traffico di routing e gli indirizzi multicast|Introduzione]]
	- [[#Slide 59 – Protocolli di routing e IP multicast|Traffico di routing sul piano di controllo]]
	- [[#Slide 60 – Una tipica architettura|Architettura tipica con rete condivisa]]
	- [[#Slide 61 – Il traffico di routing|Costo della maglia completa]]
	- [[#Slide 62 – Multicast|Uso del multicast]]
	- [[#Slide 63 – IP Multicast|Indirizzi IP multicast dei protocolli di routing]]
	- [[#Slide 64 – Il traffico multicast|Traffico multicast: N messaggi]]
	- [[#Slide 65 – Da ricordare|Riepilogo]]
10. **Link state e algoritmo di Dijkstra** (slide 66–78)
	- [[#Slide 66 – IGP: come sono implementati distance vector e link state?|Implementazione del link state]]
	- [[#Slide 67 – Link state|Principio del link state]]
	- [[#Slide 68 – Raccolta delle informazioni|Hello, echo e Link State Packet]]
	- [[#Slide 69 – Diffusione ed elaborazione delle informazioni|Flooding degli LSP e calcolo con Dijkstra]]
	- [[#Slide 70->78 – Esempio|Esempio di Dijkstra passo per passo]]
11. **OSPF: principi, LSA, vicini e Designated Router** (slide 79–96)
	- [[#Slide 79 – Open Shortest Path First (OSPF)|Caratteristiche di OSPF]]
	- [[#Slide 80 – OSPF in sintesi|OSPF in sintesi]]
	- [[#Slide 81 – Il costo in OSPF|Il costo delle interfacce]]
	- [[#Slide 82 – LSDB|LSA e Link State Database]]
	- [[#Slide 83 – Esempio|Esempio: il Router-LSA di R2]]
	- [[#Slide 84 – Un esempio più realistico|Router-LSA con reti stub]]
	- [[#Slide 85 – Dal punto di vista di R1|Dijkstra dal punto di vista di R1]]
	- [[#Slide 86 – LSA e LSU|LSA, LSU e acknowledgment]]
	- [[#Slide 87 – Vicinanza e adiacenza|Vicini e adiacenti]]
	- [[#Slide 88 – Hello|Pacchetti Hello]]
	- [[#Slide 89 – Tipologie di rete|Tipologie di rete e stella equivalente]]
	- [[#Slide 90 – Router designato|Designated Router e Backup DR]]
	- [[#Slide 92 – Identificazione dei router e priorità|Router ID e priorità]]
	- [[#Slide 93 – Elezione del DR|Elezione di DR e BDR]]
	- [[#Slide 94 -> 96 – Esempio|Esempio: elezione del DR, Router-LSA e Network-LSA]]
12. **OSPF: messaggi, sincronizzazione e aree** (slide 97–112)
	- [[#Slide 97 – Più funzioni per un solo protocollo|Funzioni e tipi di pacchetto]]
	- [[#Slide 98 – OSPF: intestazione comune|Intestazione comune]]
	- [[#Slide 99 – I messaggi OSPF|I 5 tipi di messaggio OSPF]]
	- [[#Slide 100 – Sinconizzazione dei database|Sincronizzazione dei database]]
	- [[#Slide 101 – Le fasi di OSPF|Fasi Hello, Exchange e Update]]
	- [[#Slide 102 – Relazione con un singolo vicino|Stati della relazione con un vicino]]
	- [[#Slide 103 – Aree di routing|Aree di routing e tipi di router]]
	- [[#Slide 105 – Tipologie di LSA|Tipi di LSA]]
	- [[#Slide 106 – La raggiungibilità attraverso i confini delle aree?|LSA ai confini delle aree]]
	- [[#Slide 107 – Verso le rotte inter-area|Summary-LSA e rotte inter-area]]
	- [[#Slide 108 – Tipologia di rotte|Rotte intra-area, inter-area ed esterne]]
	- [[#Slide 109 – Calcolo delle rotte inter-area|Esempio di calcolo di una rotta inter-area]]
	- [[#Slide 110 – Link state o distance vector|Link state o distance vector?]]
	- [[#Slide 111 – Tipologia di aree|Aree normali, stub, totally stubby e NSSA]]
	- [[#Slide 112 – Da ricordare|Riepilogo]]
13. **Struttura gerarchica di Internet: gli Autonomous System** (slide 113–126)
	- [[#Slide 113 – Com'è implementata effettivamente la struttura gerarchica di Internet?|Verso il routing fra AS]]
	- [[#Slide 114 – Internet = rete di reti|Internet come rete di reti]]
	- [[#Slide 115 – Internet = sistemi interconnessi|Internet come sistemi interconnessi]]
	- [[#Slide 116 – Internet: grafo semplificato|Grafo semplificato degli AS]]
	- [[#Slide 117 – Il routing a livello globale|Routing gerarchico e due tipi di grafo]]
	- [[#Slide 118 – Autonomous Systems|Definizione classica di AS]]
	- [[#Slide 119 – I protocolli di routing|IGP ed EGP]]
	- [[#Slide 120 – RFC 1930|Definizione moderna di AS (RFC 1930)]]
	- [[#Slide 121 – AS|Un AS con le sue aree e il router di confine]]
	- [[#Slide 122 – Esempio|Esempio: GARR, AS137]]
	- [[#Slide 123 – Internet Routing Registries|Internet Routing Registries]]
	- [[#Slide 124 – AS 137|Regole di import ed export di AS137]]
	- [[#Slide 125 – AS20965 Regole di Import|Regole di import di GEANT]]
	- [[#Slide 126 – Interconnessione fra AS|Rotte intra-dominio, inter-dominio e peering]]
14. **ISP, peering e Internet Exchange** (slide 127–144)
	- [[#Slide 127 – Internet Service Provider|Internet Service Provider]]
	- [[#Slide 128 – Internet region|Internet region]]
	- [[#Slide 129 -> 130 – Classificazione degli ISP|ISP Tier 1, 2 e 3]]
	- [[#Slide 131 – In sintesi|Gerarchia degli ISP]]
	- [[#Slide 132 – In Italia|Il Tier 1 italiano]]
	- [[#Slide 133 – In sintesi|Transito a pagamento e peering]]
	- [[#Slide 134 – ISP locali e POP|ISP locali e Point of Presence]]
	- [[#Slide 135 – Esempio|Esempio di ISP locale]]
	- [[#Slide 136 – Indirizzamento|Indirizzamento di un ISP]]
	- [[#Slide 137 – Interconnessione|Interconnettere tutti i POP o pochi POP]]
	- [[#Slide 138 – Non utilizzata|Interconnessione di tutti i POP]]
	- [[#Slide 139 – Peering diretto tramite due POP|Peering tramite due POP]]
	- [[#Slide 140 – Il Peering|Il peering]]
	- [[#Slide 141 – Peering policy|Peering policy]]
	- [[#Slide 142 – Da Tier 3 a Tier 1|AS di transito e NSP]]
	- [[#Slide 143 – Internet Exchange|Internet Exchange Point]]
	- [[#Slide 144 – IXP in Italia|IXP in Italia]]
15. **EGP e BGP** (slide 145–159)
	- [[#Slide 145 – EGP come funzionano?|EGP: come funzionano?]]
	- [[#Slide 146 – Exterior Gateway Protocols|Differenze fra EGP e IGP: le politiche]]
	- [[#Slide 147 – BGP: Border Gateway Protocol|BGP-4: sessioni TCP, eBGP e iBGP]]
	- [[#Slide 148 – BGP: interconnessione tra AS|BGP fra gli AS]]
	- [[#Slide 149 – BGP: sessioni interne ed esterne|Sessioni eBGP e iBGP]]
	- [[#Slide 150 – Path Vector|Path vector ed eliminazione dei cicli]]
	- [[#Slide 151 – Routing policies|Import ed export policy]]
	- [[#Slide 152 -> 154 – BGP: scambio di path vector|Esempio di scambio dei path vector]]
	- [[#Slide 155 – BGP: tipi di messaggio|Open, Update, Notification, Keepalive]]
	- [[#Slide 156 – Attributi|Attributi: well-known, optional, partial]]
	- [[#Slide 157 – Esempi|Origin, AS path, Next hop]]
	- [[#Slide 158 – Esempio: path vector|Esempio: costruzione dell'AS_PATH]]
	- [[#Slide 159 – Scelta del percorso|Scelta del percorso e LOCAL_PREF]]

---
## Slide 2 – Nelle reti a pacchetto chi e come si decide che strada devono seguire i dati?

Nelle reti a pacchetto chi e come si decide che strada devono seguire i dati?

---
## Slide 3 – Funzioni di IP

- Indirizzamento
- Frammentazione
- Instradamento
	- Decidere che percorso un datagramma deve seguire per raggiungere la destinazione dalla sorgente
	- Utilizza le PCI dei datagrammi, in particolari l'indirizzo destinazione
	- Determina il comportamento della funzione di commutazione nei nodi
- Il problema dell'instradamento è più generale rispetto allo specifico protocollo di livello 3

>> PCI = *Protocol Control Information*, cioè le informazioni di controllo contenute nell'intestazione del datagramma (per l'instradamento conta soprattutto l'indirizzo IP di destinazione).
>> Il problema è "più generale" perché si pone in qualunque rete a commutazione di pacchetto (X.25, ATM, reti di sensori, ecc.), non solo in IP: gli algoritmi che seguono (flooding, Bellman-Ford, Dijkstra) sono indipendenti dal protocollo di livello 3.

>> **Collegamento con 01** → [[01 - Instradamento IPv4 e IPv6#Slide 40 – L'instradamento IP|slide 40: l'instradamento hop-by-hop di IP, visto dal lato del singolo datagramma]]

---
## Slide 4 – Algoritmi e protocolli

- Instradamento = scelta del percorso
- La scelta del percorso spesso significa semplicemente scegliere il prossimo router a cui inviare un pacchetto (scelta del *next hop*)
- Algoritmo di instradamento
	- Metodologia di scelta del next hop
	- Ha obiettivi di ottimalità
		- Semplicità = bassa complessità computazionale
		- Robustezza = capacità di adeguarsi a cambiamenti
		- Stabilità = consistenza di risultato
		- Efficienza = buon uso delle risorse disponibili senza sprechi

>> Algoritmo e protocollo sono cose distinte: l'**algoritmo** decide come calcolare il percorso migliore a partire dalle informazioni disponibili, il **protocollo** di routing definisce come i router si scambiano tali informazioni (formato dei messaggi, tempistiche, ecc.).
>> Stabilità significa che, a parità di condizioni, l'algoritmo converge sempre allo stesso risultato senza oscillazioni (es. percorsi che cambiano continuamente avanti e indietro).

---
## Slide 5 – Tabella?

- I nodi di commutazione per applicare l'algoritmo possono utilizzare informazioni predisposte localmente tipicamente sotto forma di tabelle
- Algoritmi senza tabella
	- Non fanno uso di tabelle di instradamento
- Algoritmi con tabella
	- Fanno uso di tabelle di instradamento

---
## Slide 6 – Algoritmi di instradamento

- Senza tabella
	- Flooding
	- Random
	- Deflection routing (hot potato)
	- Source routing
- Con tabella
	- Instradamento fisso e centralizzato
	- Instradamento dinamico a distanza minima

>> Nel *source routing* è la sorgente a scrivere nell'intestazione del pacchetto l'intero percorso (la lista dei nodi da attraversare): i nodi intermedi si limitano a leggerla, quindi non serve una tabella nei nodi intermedi (ma la sorgente deve conoscere la topologia). In IPv4 esiste come opzione (Loose/Strict Source Route).

---
## Slide 7 – Flooding

- **Flooding**
	- ogni nodo ritrasmette su tutte le porte di uscita ogni pacchetto ricevuto
	- Prima o poi
		- un pacchetto viene sicuramente ricevuto da tutti i nodi della rete e quindi anche da quello a cui è effettivamente destinato
	- Tutte le strade possibili sono percorse
		- il primo pacchetto che arriva a destinazione ha fatto la strada più breve possibile
	- L'elaborazione associata è pressoché nulla
- Molto adatto quando si desidera inviare una certa informazione a tutti i nodi della rete (*broadcasting*)

>> Il flooding è robustissimo (se esiste almeno un percorso, il pacchetto arriva) ma spreca moltissima banda. Per questo si usa soprattutto per diffondere informazioni di controllo a tutti i nodi: ad esempio nel routing link state i messaggi LSA vengono distribuiti proprio con un flooding controllato.

---
## Slide 8 – Problema

**Proliferazione dei pacchetti**

- Nel singolo nodo ogni pacchetto viene copiato tante volte quante sono le interfacce
- Se ritrasmesso sull'interfaccia da cui è arrivato il numero di copie cresce esponenzialmente

![[RT04-s008-1.png|260]]

>> Nella figura il router centrale riceve il pacchetto (freccia verde) e lo ricopia su tutte le altre interfacce (frecce arancioni); il "?" indica il dubbio se ritrasmetterlo anche sull'interfaccia di provenienza. Se lo facesse, il pacchetto tornerebbe indietro e verrebbe a sua volta ricopiato: con nodi di grado $d$ dopo $k$ salti si possono avere fino a circa $d^k$ copie, e in presenza di anelli il pacchetto non si estinguerebbe mai.

---
## Slide 9 – Soluzioni

- Un nodo non ritrasmette il pacchetto nella direzione dalla quale è giunto
- Identificazione dei pacchetti
	- Ad ogni pacchetto viene associato un identificativo unico (l'indirizzo della sorgente e un numero di sequenza
	- Il nodo crea una lista dei pacchetti ricevuti e ritrasmessi
	- Ogni pacchetto già trasmesso, viene ignorato
- Contatore del tempo di vita (TTL) di un pacchetto per evitare che giri all'infinito

![[RT04-s009-1.png|195]]![[RT04-s009-2.png|260]]

>> La prima regola da sola non basta: nella figura a destra c'è un anello di tre router, e il pacchetto può girare lungo il triangolo (frecce verde → arancione → gialla) tornando al nodo da cui è partito ("?") pur senza mai essere rimandato indietro sull'interfaccia di arrivo. Servono quindi anche l'identificazione dei pacchetti (ogni nodo inoltra una sola volta la stessa coppia sorgente + numero di sequenza) e/o il TTL, che viene decrementato a ogni hop e fa scartare il pacchetto quando arriva a zero.

---
## Slide 10 – Dinamicità

- Tutte le metodologie di instradamento dovrebbero adattarsi agli eventuali cambiamenti topologici della rete
- Lo possono fare più o meno velocemente per cui si parla di instradamento
- Statico (o fisso)
	- I percorsi sono decisi in momenti specifici (inizializzazione della rete) e non cambiano sul breve periodo
	- Se c'è un cambiamento repentino della topologia questo viene recepito solamente alla prossima inizializzazione
- Dinamico
	- I percorsi vengono modificati periodicamente per adattarsi velocemente ad eventuali cambiamenti della rete

>> In IP l'instradamento statico corrisponde alle rotte configurate a mano dall'amministratore (es. `ip route add ...`), quello dinamico alle rotte apprese tramite protocolli di routing (RIP, OSPF, BGP).

---
## Slide 11 – Altri esempi

- **Random**
	- Il next hop viene scelto a caso fra quelli possibili
	- Le probabilità possono essere diverse e modificabili nel tempo
- **Deflection routing** (hot potato)
	- Il next viene scelto come quello avente il minor numero di pacchetti in attesa di essere trasmessi
- Problemi
	- Non garantiscono la consegna in tempi certi
	- Potrebbe dar luogo a comportamenti instabili (loop)
	- È necessario implementare meccanismi che limitino il tempo di vita dei pacchetti

>> Nel deflection routing ("patata bollente") il nodo si libera del pacchetto il prima possibile inviandolo sull'uscita con la coda più corta, anche se non avvicina il pacchetto alla destinazione: per questo il pacchetto può vagare a lungo o andare in loop, e serve il TTL.

---
## Slide 12 – Da ricordare

L'instradamento è un **problema comune** a qualunque rete a commutazione di pacchetto

Normalmente l'instradamento si realizza tramite la scelta del **next hop**

Distinguiamo fra algoritmi di instradamento
- **Senza tabella**
- **Con tabella**

---
## Slide 13 – Nell'instradamento con tabelle come si compila la tabella?

Nell'instradamento con tabelle come si compila la tabella?

>> **Collegamento con 01** → [[01 - Instradamento IPv4 e IPv6#Slide 60 – La tabella di instradamento IP|slide 60–75: com'è fatta la tabella di instradamento IP e come si usa (longest prefix match)]]. Qui invece si vede come la tabella viene **riempita**.

---
## Slide 14 – Instradamento con tabella

![[RT04-s014-1.png|550]]

Schema del nodo: Linee di ingresso → Funzione di instradamento → Linee di uscita; la funzione di instradamento consulta la Tabella di instradamento.

>> La funzione di instradamento preleva i pacchetti dalle code di ingresso, consulta la tabella usando l'indirizzo di destinazione e deposita ciascun pacchetto nella coda della linea di uscita scelta (nella figura il pacchetto evidenziato in arancione).

---
## Slide 15 – Store-and-Forward

- Il pacchetto entrante è verificato e memorizzato
- Si estraggono le informazioni di instradamento dall'intestazione (indirizzo di destinazione, priorità, classe di servizio)
- Si confrontano queste informazioni con la tabella di instradamento
	- Identificando una o più uscite su cui inviare il pacchetto
- Il pacchetto è inserito nella coda relativa all'uscita prescelta, in attesa della effettiva trasmissione

**Il pacchetto viene prima memorizzato interamente nel nodo e quindi ritrasmesso nella direzione opportuna**

**La tabella di instradamento, per il confronto con l'indirizzo di destinazione, fornisce l'informazione sul next hop**

>> "Verificato" significa tipicamente controllo d'errore (es. checksum/CRC): per farlo serve aver ricevuto il pacchetto per intero, ed è uno dei motivi dello store-and-forward. Conseguenza: ogni nodo aggiunge almeno un tempo di trasmissione del pacchetto $L/C$ (lunghezza / capacità del link) al ritardo end-to-end, oltre all'eventuale attesa in coda.

---
## Slide 16 – Shortest path routing

- Si assume che ad ogni collegamento della rete possa essere attribuita una lunghezza
- Lunghezza
	- è un numero che serve a caratterizzare il peso di quel collegamento nel determinare la funzione di costo del percorso totale di trasmissione
- L'algoritmo cerca la strada di lunghezza minima fra ogni mittente e ogni destinatario
- Si applicano algoritmi di calcolo dello shortest path (Bellman-Ford e Dijkstra)
- L'implementazione può avvenire in modalità
	- Centralizzata
		- Un solo nodo esegue i calcoli per tutti
	- Distribuita
		- Ogni nodo esegue i calcoli per se
		- Sincrona
			- Tutti i nodi eseguono gli stessi passi dell'algoritmo nello stesso istante
		- Asincrona
			- I nodi eseguono lo stesso passo dell'algoritmo in momenti diversi

>> In Internet l'implementazione è distribuita e asincrona: ogni router calcola da sé le proprie rotte (Bellman-Ford distribuito nel distance vector, es. RIP; Dijkstra nel link state, es. OSPF) senza alcuna sincronizzazione globale fra i router.

---
## Slide 17 – Rappresentazione della rete

- Topologia di rete -> grafo orientato:
	- Terminali e commutatori -> nodi del grafo
	- Collegamenti -> archi del grafo
		- L'orientazione degli archi rappresenta la direzione di trasmissione
	- Costo dell'utilizzo di un collegamento -> peso
		- distanza geografica
		- ritardo introdotto dal collegamento
		- inverso della capacità del collegamento
		- costo economico di un certo instradamento
		- una combinazione dei precedenti
	- Il percorso end-to-end ha un costo che è la somma dei costi dei collegamenti attraversati

>> Esempio di peso "inverso della capacità": OSPF usa di default $\text{costo} = \dfrac{\text{banda di riferimento}}{\text{banda del link}}$ (con riferimento $100$ Mb/s, un link Fast Ethernet costa $1$ e uno a $10$ Mb/s costa $10$). Se tutti i pesi valgono $1$ il costo del percorso coincide con il numero di hop, come in RIP.

---
## Slide 18 – Il grafo della rete

- Sia $V$ un insieme finito di **nodi**
- Un **arco** è definito come una coppia di nodi $(i,j)$, $i,j \in V$
- Sia $E$ un insieme di possibili archi
- Un **grafo** $G$ è definito come la coppia $(V,E)$
	- **orientato** se $E$ consiste di coppie ordinate, cioè se $(i,j)\neq(j,i)$
	- **non orientato** se $E$ consiste di coppie non ordinate, cioè se $(i,j)=(j,i)$
- Normalmente si dice che se $(i,j) \in E$, i nodi $i$ e $j$ sono **vicini**

---
## Slide 19 – Rappresentazione di grafi

![[RT04-s019-1.png|220]]![[RT04-s019-2.png|256]]

**Grafo orientato**
$V = \{1,2,3,4,5,6,7\}$
$E = \{(1,2),(1,3),(1,7),(2,3),(3,6),(4,3),(4,5),(4,6),(6,4),(7,1),(7,6)\}$
Dimensioni: $|V|=7$, $|E|=11$

**Grafo non orientato**
$V = \{1,2,3,4,5,6,7\}$
$E = \{(1,2),(1,3),(1,7),(2,3),(3,4),(3,6),(4,5),(4,6),(6,7)\}$
Dimensioni: $|V|=7$, $|E|=9$

>> Nel grafo orientato le coppie $(1,7),(7,1)$ e $(4,6),(6,4)$ sono archi distinti (i due archi curvi in figura): per questo ha $11$ archi. Nel non orientato ogni collegamento conta una volta sola. In generale un grafo non orientato con $|V|$ nodi ha al massimo $\binom{|V|}{2} = \frac{|V|(|V|-1)}{2}$ archi ($21$ per $|V|=7$), uno orientato al massimo $|V|(|V|-1)$ ($42$).

---
## Slide 20 – Grafo pesato

- Un **grafo pesato** è un grafo $G=(V,E)$ tale che ad ogni arco $(i,j) \in E$ è associato un numero reale $w(i,j)$ chiamato **peso** (o costo, o distanza)
	- In un grafo non orientato vale sempre $w(i,j) = w(j,i)$
	- In un grafo orientato vale in generale $w(i,j) \neq w(j,i)$
	- Se $(i,j) \notin E$, allora $w(i,j) = \infty$
	- Per semplicità si assume $w(i,j) > 0$ per ogni arco $(i,j) \in E$

![[RT04-s020-1.png|235]]![[RT04-s020-2.png|290]]

Grafo orientato (sinistra):
$w(1,7) = 4$
$w(7,1) = 2$
$w(1,2) = 1$
$w(2,1) = \infty$

Grafo non orientato (destra):
$w(1,7) = w(7,1) = 2$
$w(1,6) = \infty$

>> Pesi del grafo orientato: $w(1,2)=1$, $w(1,3)=6$, $w(2,3)=3$, $w(1,7)=4$, $w(7,1)=2$, $w(7,6)=3$, $w(3,6)=2$, $w(4,3)=3$, $w(4,6)=1$, $w(6,4)=4$, $w(4,5)=5$. Esempio: da 1 a 3 l'arco diretto costa $6$, ma il percorso $1\to2\to3$ costa $1+3=4$: lo shortest path non è necessariamente quello con meno hop.
>>
>> L'ipotesi $w(i,j)>0$ esclude i cicli di costo negativo (lungo cui il costo potrebbe diminuire all'infinito) ed è necessaria per la correttezza di Dijkstra; Bellman-Ford tollera pesi negativi purché non ci siano cicli negativi.

---
## Slide 21 – Routing shortest path nel mondo IP

- Quando i nodi di rete vengono accesi conoscono solamente la configurazione delle loro interfacce
	- Statica
	- Dinamica con DHCP
- **Con queste informazioni popolano la tabella di instradamento iniziale**
- Per implementare il routing shortest path verso una qualunque destinazione devono utilizzare
	- Uno o più ***protocolli*** di routing per scambiarsi informazioni ed apprendere la topologia della rete
	- Uno o più ***algoritmi*** per il calcolo degli SP sulla base delle informazioni ottenute

>> La tabella iniziale contiene solo le reti direttamente connesse (quelle delle proprie interfacce, con next hop "diretto"). Tutte le altre destinazioni vengono apprese solo successivamente, tramite rotte statiche o protocolli di routing.

---
## Slide 22 – Il router IP

- Il nodo di commutazione nelle reti IP viene detto **router**
- Il router è un nodo di commutazione a pacchetto specializzato per l'utilizzo del protocollo IP
- Nonostante siano tutti identificati con il termine router i nodi di commutazione della rete Internet possono essere fra loro molto diversi

>> Si va dal router domestico (un unico dispositivo che fa anche da switch, access point Wi-Fi e NAT) ai router di backbone degli operatori, con centinaia di interfacce ad altissima velocità e forwarding realizzato in hardware dedicato: la funzione logica è la stessa, l'architettura e le prestazioni sono completamente diverse.

---
## Slide 23 – Le 4 funzioni dei Router

- Routing
	- Scambio di informazioni con altri router (protocolli)
	- Elaborazione locale (algoritmi)
	- Popolazione delle tabelle di routing
- Forwarding
	- IP
		- Table lookup
		- Header update
- Switching
	- Trasferimento del datagramma da interfaccia di input a interfaccia di output
- Trasmissione
	- Trasmissione del datagramma sul mezzo fisico (utilizzando l'interfaccia di rete di output)

>> Il routing è il "piano di controllo": lavora su scale di tempo lente (secondi/minuti) e decide i percorsi. Forwarding, switching e trasmissione sono il "piano dati": vanno eseguiti per ogni singolo datagramma, quindi devono essere velocissimi.
>> L'header update comprende tipicamente il decremento del TTL e il conseguente ricalcolo dell'header checksum IPv4.

---
## Slide 24 – Schema funzionale di un router

![[RT04n-s024-1.png|464]]

>> Percorso in ricezione: lo strato 2 consegna il datagramma al processamento dell'intestazione IP; se la destinazione è il router stesso il datagramma viene riassemblato (se frammentato) e passato al protocollo superiore (es. OSPF), altrimenti viene inoltrato e, se più grande della MTU dell'interfaccia di uscita, frammentato.
>> Percorso in trasmissione: i protocolli superiori generati localmente passano per l'aggiunta dell'intestazione IP e poi seguono lo stesso processamento.
>> Gli errori (es. TTL scaduto, destinazione irraggiungibile, frammentazione necessaria ma bit DF impostato, timeout di riassemblaggio) vengono segnalati generando messaggi ICMP.

---
## Slide 25 – Tabella di Routing e di forwarding

- **Routing information base (RIB)**
	- Il risultato dell'esecuzione di protocolli e algoritmi
	- Ogni record della tabella è composto da un prefisso, un next hop e la metric
	- Per un singolo prefisso posso esserci anche numerose alternative
- **Forward Information Base (FIB)**
	- Derivata dalla RIB
	- I record includono anche l'interfaccia per dare indicazione sull'esecuzione della consegna diretta
	- È la tabella effettivamente utilizzata per inviare i datagrammi
	- Deve essere ottimizzata per implementare efficacemente il longest prefix match

>> Esempio: nella RIB il prefisso 10.1.0.0/16 può comparire due volte, appreso via OSPF (next hop 192.168.1.2, metrica 20) e via RIP (next hop 192.168.2.2, metrica 3 hop); nella FIB ne resta una sola, con next hop e interfaccia di uscita.
>> Per il longest prefix match la FIB viene tipicamente organizzata in strutture dati ad albero (trie) o in memorie hardware TCAM, in modo che la ricerca richieda un tempo limitato indipendentemente dal numero di prefissi.

---
## Slide 26 – Routing vs. forwarding table

![[RT04n-s026-1.png|550]] 

>> Direct = reti direttamente connesse alle interfacce del router; Static = rotte configurate a mano; Aggregate = rotte di sintesi (prefissi aggregati) create localmente.
>> Il Route Selection Process sceglie, per ogni prefisso, la rotta migliore tra quelle presenti nella RIB: tra protocolli diversi le metriche non sono confrontabili, per cui si usa una preferenza per sorgente (es. la "administrative distance" nei router Cisco: Direct 0, Static 1, eBGP 20, OSPF 110, IS-IS 115, RIP 120); a parità di sorgente vince la metrica minore.
>> Le Export Policies decidono quali delle rotte selezionate vengono annunciate agli altri router tramite ciascun protocollo (redistribuzione).

---
## Slide 27 – Arrivare alla FIB

- La RIB è una base dati che viene compilata con
	- Il concorso di numerosi protocolli
	- Diverse strategie di sintesi delle informazioni note
	- Contiene tutte le informazioni disponibili
- La FIB si ottiene a partire dalle informazioni della RIB
	- Vengono utilizzati opportuni algoritmi
	- Contiene solamente una specifica informazione di forwarding per ogni prefisso
- Nel complesso queste operazioni determinano la strategia di instradamento utilizzata dai nodi della rete

---
## Slide 28 – Da ricordare

L'instradamento shortest path costruisce sulla **teoria dei grafi** per realizzare **percorsi end-to-end ottimali**
- **Protocolli** per lo scambio di informazioni
- **Algoritmi** numerici per il calcolo dei percorsi

Obiettivo = per ogni prefisso **-> next hop**

Il router può **eseguire tutti i protocolli e algoritmi** disponibili per popolare la **Routing Information Base**

Dalla RIB il router deriva la **Forwarding Information Base** che viene utilizzata per il longest prefix match

---
## Slide 29 – Internet è una sola grande rete: i router devono conoscere tutte le network?

>il linea teorica si.

>> No: sarebbe impraticabile. Le tabelle di instradamento conterrebbero centinaia di migliaia di voci, ogni cambiamento di topologia andrebbe propagato a tutti i router del mondo e ogni organizzazione dovrebbe fidarsi delle informazioni di tutte le altre. Da qui l'idea (slide seguenti) di vedere Internet come insieme di reti autonome interconnesse, con instradamento gerarchico: dettagliato all'interno di ciascuna rete (IGP), aggregato fra le reti (EGP).

---
## Slide 30 – Internet = rete di reti

![[RT04-s024-1.png|510]]

>> La figura mostra router (cilindri azzurri), LAN con host (quadratini rossi su segmenti/anelli) e collegamenti punto-punto fra router: vista "piatta", senza alcuna struttura amministrativa.

---
## Slide 31 – Internet = network interconnesse

![[RT04-s025-1.png|479]]

>> Stessa topologia della slide precedente, ma ora i router sono raggruppati in domini (le "nuvole" grigie): ciascun dominio è gestito da un'unica amministrazione (Autonomous System, AS). Le nuvole più scure nel dominio in basso a sinistra mostrano che anche all'interno di un dominio ci possono essere ulteriori suddivisioni (es. aree).

---
## Slide 32 – Internet: grafo semplificato

![[RT04-s026-1.png|513]]

- Exterior Gateway Protocols (**EGP**)
- Interior Gateway Protocols (**IGP**)

>> Le linee continue fra router di domini diversi sono gestite dai protocolli **EGP** (instradamento fra AS, oggi BGP); le linee tratteggiate all'interno di un dominio rappresentano la raggiungibilità interna, gestita dagli **IGP** (es. RIP, OSPF). Il dettaglio interno di ogni AS è nascosto agli altri: fra AS si scambiano solo informazioni aggregate di raggiungibilità.

---
## Slide 33 – IGP

- I meccanismi di routing IGP sono implementati storicamente con due metodologie a cui corrispondono oggi due protocolli:
	- Distance vector -> **RIP**
	- Link state -> **OSPF**
- I meccanismi di routing EGP sono molto più complessi:
	- Path vector -> **BGP**
>must di domande per le domande aperte finali!!

---
## Slide 34 – Da ricordare

Il routing è **gerarchico**
- **Interior gateway protocols** (IGP)
- **Exterior gateway protocols** (EGP)

>> IGP: usati all'interno di un singolo Autonomous System (es. RIP, OSPF, IS-IS), puntano a percorsi ottimi secondo una metrica. EGP: usati tra Autonomous System diversi (oggi BGP), dove contano soprattutto le politiche amministrative oltre che la raggiungibilità.

---
## Slide 35 – IGP: come sono implementati distance vector e link state?

Come sono implementati distance vector e link state?

>> Le slide seguenti mostrano l'implementazione del distance vector con RIP (v1 e v2); il corrispondente protocollo link state (Dijkstra) usato in Internet è OSPF.

---
## Slide 36 – Distance vector

- Basato su Bellman-Ford, in versione dinamica e distribuita proposta da Ford-Fulkerson
- **Dialogo strettamente fra router vicini**
	- Ogni nodo scopre i suoi vicini e ne calcola la distanza da se stesso (es: facendo ping)
	- Ogni nodo invia ai propri vicini periodicamente un vettore contenente la stima della sua distanza da tutti gli altri nodi della rete (quelli di cui è a conoscenza)
- E' un protocollo semplice e richiede poche risorse
- Problemi:
	- convergenza lenta, partenza lenta (cold start)
	- problemi di stabilità: conteggio all'infinito

>> Regola di aggiornamento: quando il nodo $x$ riceve dal vicino $v$ il vettore $D_v(\cdot)$, per ogni destinazione $y$ calcola
>> $$D_x(y) = \min_{v \in \text{vicini}(x)} \{ c(x,v) + D_v(y) \}$$
>> e come next hop sceglie il vicino $v$ che realizza il minimo. Ogni nodo conosce quindi solo "distanza + direzione" verso ogni destinazione, non la topologia completa ("routing by rumor").

---
## Slide 37 – Esempio

![[RT04-s029-1.png|250]]

Distance Vector iniziali: DV(i)= {(i,0)}, per i = A,B,C,D,E

Distance Vector dopo la scoperta dei vicini:
- DV(A) = {(A,0), (B,1), (C,6)}
- DV(B) = {(A,1), (B,0), (C,2), (D,1)}
- DV(C) = {(A,6), (B,2), (C,0), (D,3), (E,7)}
- DV(D) = {(B,1), (C,3), (D,0), (E,2)}
- DV(E) = {(C,7), (D,2), (E,0)}

Evoluzione delle tabelle di routing

![[RT04-s029-2.png|650]]

>> Costi dei link nel grafo: A–B = 1, A–C = 6, B–C = 2, B–D = 1, C–D = 3, C–E = 7, D–E = 2.
>> Passo 1: da DV(B), A calcola C: $1+2=3 < 6$ (diretto) → (3, B); D: $1+1=2$ → (2, B).
>> Passo 2: DV(C) porta la destinazione E. Con la regola di Bellman-Ford "pura" A otterrebbe E via C con costo $c(A,C)+D_C(E)=6+7=13$, next hop C. Il valore 10, B della slide corrisponde invece al cammino A→B→C→E ($1+2+7=10$), cioè sfrutta il fatto che A raggiunge già C a costo 3 passando per B: è un cammino reale, ma a rigore B non ha ancora annunciato E, quindi in un vero DV la voce sarebbe (13, C) e diventerebbe (4, B) solo al passo 4.
>> Passo 3: B riceve DV(D): E via D $=1+2=3$ → (3, D); C via D $=1+3=4 > 2$, resta (2, C).
>> Passo 4: A riceve il nuovo DV(B) che contiene (E,3): E via B $=1+3=4$ → (4, B). Questi sono i costi minimi definitivi da A: B=1, C=3, D=2, E=4 (tutti con next hop B).

---
## Slide 38 – Algoritmo 

>parte algoritmica non è così rilevante per il corso.

- Nodo sorgente del traffico denominato *s*
- $D^h_i$ costo del percorso di lunghezza minima da *s* a *j* in al più *h* salti
- $d_{ij}$ costo del collegamento diretto fra i e j
- $d_{ij} = \infty$ se i e j non sono connessi direttamente
- Per *h=1*
$$D_j^h = d_{sj} \quad \forall j \neq s$$
- Per *h = h+1*
$$D_j^h = \min_i \left\{ D_i^{h-1} + d_{ij},\ D_j^{h-1} \right\}$$

>> Nel secondo punto l'indice corretto è $D^h_j$ (costo minimo da $s$ a $j$ con al più $h$ salti), coerente con le formule.
>> Intuizione: il miglior cammino verso $j$ con al più $h$ salti o è già un cammino con al più $h-1$ salti ($D_j^{h-1}$), oppure è un cammino ottimo con al più $h-1$ salti verso un nodo $i$ seguito dal link $i \to j$. Poiché un cammino semplice ha al più $N-1$ salti, dopo $N-1$ iterazioni i valori sono quelli definitivi (se non ci sono cicli a costo negativo).
>> Nella versione distribuita (distance vector) il ruolo di $D_i^{h-1}$ è svolto dal vettore ricevuto dal vicino $i$, e ogni nodo esegue il calcolo come sorgente di sé stesso.

---
## Slide 39 – Cold start e tempo di convergenza

- Allo start-up le tabelle dei singoli nodi contengono solo l'indicazione delle distanze dagli immediati vicini
- Da qui in poi lo scambio dei distance vector permette la creazione di tabelle sempre più complete
- L'algoritmo converge al più dopo un numero di passi pari al numero di nodi della rete
- Se la rete è molto grande il tempo di convergenza può essere lungo.
- Cosa succede se lo stato della rete cambia in un tempo inferiore a quello di convergenza dell'algoritmo?
	- Risultato imprevedibile → si ritarda la convergenza

>> Ad ogni scambio periodico l'informazione avanza di un solo salto: un nodo a distanza $h$ salti viene scoperto dopo circa $h$ periodi. Con RIP (aggiornamenti ogni 30 s) e reti con diametro di 10-15 salti si arriva facilmente a diversi minuti di convergenza.

---
## Slide 40 – Bouncing effect

- Il link fra due nodi A e B cade
	- A e B si accorgono che il collegamento non funziona e immediatamente pongono ad infinito la sua lunghezza
	- Se altri nodi hanno nel frattempo inviato anche i loro vettori delle distanze, si possono creare delle incongruenze temporanee, di durata dipendente dalla complessità della rete
		- ad esempio A crede di poter raggiungere B tramite un altro nodo C che a sua volta passa attraverso A
	- Queste incongruenze possono dare luogo a cicli, per cui due o più nodi si scambiano datagrammi fino a che non si esaurisce il TTL o finché non si converge nuovamente

![[RT04-s033-1.png|650]]

Costi: C–B = 6, C–A = 2, A–B = 1 (link guasto).

| Tabella di C (prima) | |
| --- | --- |
| A | 2,A |
| B | 3,A |

| Tabella di A (prima) | |
| --- | --- |
| B | 1,B |
| C | 2,C |

- A, dopo il guasto: B ∞,B → riceve DV(C) = {(A,2), (B,3)} → B 5,C
- C riceve DV(A) = {(B,5), (C,2)} → B 6,B

>> Sequenza: A pone B a ∞, ma prima di poterlo comunicare riceve il vecchio DV(C) in cui C dichiara di raggiungere B a costo 3 (in realtà passando proprio per A). A calcola $2+3=5$ e sceglie C come next hop per B. Ora C instrada verso B tramite A e A tramite C: **ciclo** fra A e C, i pacchetti rimbalzano finché non scade il TTL. Il ciclo si scioglie quando C riceve DV(A) con (B,5): via A costerebbe $2+5=7$, il link diretto costa 6, quindi C passa a (6, B); al successivo scambio A otterrà via C $2+6=8$.

---
## Slide 41 – Convergenza lenta

![[RT04-s034-1.png|447]]

Costi: C–B = 20, C–A = 2, A–B = 1 → 40 (il costo del link A–B passa da 1 a 40).

| Tabella di C (iniziale) | |
| --- | --- |
| A | 2,A |
| B | 3,A |

| Tabella di A (iniziale) |     |
| ----------------------- | --- |
| B                       | 1,B |
| C                       | 2,C |

Evoluzione della voce verso B:
- Tabella di C: B 3,A → B 7,A → B 11,A → B 15,A → B 19,A → B 20,B
- Tabella di A: B 1,B → B 40,B → B 5,C → B 9,C → B 13,C → B 17,C → B 21,C → B 22,C

>> A rileva che il link verso B ora costa 40, ma C dichiara ancora B a 3 (via A): A sceglie $2+3=5$ via C. C, il cui next hop per B è A, deve accettare il nuovo valore di A: $2+5=7$. Ad ogni scambio la stima cresce di 4 (2+2, andata e ritorno sul link A–C) finché A annuncia 21 (da $2+19$): per C la via A costerebbe $2+21=23 > 20$, quindi preferisce il link diretto (20, B); a quel punto A ottiene $2+20=22 < 40$ → (22, C), valore corretto. Il numero di scambi necessari è proporzionale alla differenza dei costi: con costi grandi la convergenza può richiedere moltissimo tempo, e nel frattempo A e C instradano in ciclo i pacchetti per B.

---
## Slide 42 – Count to infinity

![[RT04-s035-1.png|450]]

- Situazione iniziale: $D_{AB} = 1$, $D_{BC} = 1$ e $D_{AC} = 2$
	- Link BC va fuori servizio
	- B riceve il DV di A che contiene l'informazione $D_{AC} = 2$, per cui esso computa una nuova $D'_{BC} = D_{BA} + D_{AC} = 3$
	- B comunica ad A la sua nuova distanza da C
	- A calcola la nuova distanza $D_{AC} = D_{AB} + D'_{BC} = 4$
	- …
- La cosa può andare avanti all'infinito
	- Si può interrompere imponendo che quando una distanza assume un valore $D_{IJ} > D_{max}$ allora si suppone che il nodo destinazione J non sia più raggiungibile
- Inoltre si possono introdurre meccanismi migliorativi
	- **Split horizon**
	- **Triggered update**

>> Qui C è diventato irraggiungibile, quindi non esiste un valore "giusto" a cui convergere: A e B continuano a rimbalzarsi la stima (3, 4, 5, 6, …), crescente di 1 a ogni scambio. Il limite $D_{max}$ definisce di fatto "infinito": in RIP vale 16, cioè una distanza di 16 salti significa destinazione irraggiungibile. Il prezzo è che RIP non può essere usato in reti con diametro superiore a 15 salti, e il conteggio fino a 16 richiede comunque diversi periodi di aggiornamento.
>
>intrisicamente si definisce la dimensione massima della rete.
>scenario semplice ma con problemi prestazionali -> adatto per determinati contesti con calcolo computazionale bassa (es: iot)

---
## Slide 43 – Perché accade?

- Convergenza lenta e conteggio all'infinito sono **anomalie** del distance vector
	- Il fenomeno coinvolge due router vicini ed il percorso verso una terza destinazione
- I due router si **convincono erroneamente che l'altro è il miglior next hop** verso la destinazione
	- Si crea così un ciclo dove i pacchetto permangono senza arrivare mai a destinazione
- Qual è la causa effettiva?
	- Il distance vector contiene solamente l'indicazione della distanza di una destinazione, non del percorso o del next hop
	- I distance vector sono inviati periodicamente ed in modo totalmente indipendente dai vari router
	- Un router riceve dal vicino un'informazione non aggiornata in merito alla distanza verso una destinazione

>> Esempio tipico: catena A – B – C, con C destinazione e costi unitari. B ha distanza 1 verso C, A ha distanza 2 (via B). Se il link B–C cade, B ha perso la rotta diretta, ma riceve il vettore di A che dice "C a distanza 2": B non sa che quel percorso passa proprio per B stesso, e quindi aggiorna la sua distanza a 2 + 1 = 3 via A. A, ricevendo da B distanza 3, passa a 4, poi B a 5, e così via: le distanze crescono di 2 ogni scambio completo fino al valore che rappresenta "infinito" (16 in RIP). Nel frattempo i pacchetti per C rimbalzano tra A e B (fino allo scadere del TTL).
>> Rimedi classici: split horizon (non annunciare una destinazione al vicino da cui la si è appresa), poisoned reverse (annunciarla con distanza infinita), triggered update (inviare subito gli aggiornamenti dopo un cambiamento) e un valore di infinito piccolo per limitare la durata del conteggio.

---
## Slide 44 – Split horizon

- Split horizon è una tecnica molto semplice per risolvere in parte i problemi suddetti
	- se A instrada i pacchetti verso una destinazione X tramite B, non ha senso per B cercare di raggiungere X tramite A
	- di conseguenza non ha senso che A renda nota a B la sua distanza da X
- Un algoritmo modificato di questo tipo richiede che un router invii informazioni diverse ai diversi vicini
- Split horizon in forma semplice:
	- A omette la sua distanza da X nel DV che invia a B
- Split horizon with poisonous reverse:
	- A inserisce tutte le destinazioni nel DV diretto a B, ma pone la distanza da X uguale ad infinito

>> Applicato all'esempio della slide precedente: A raggiunge C tramite B, quindi nel DV inviato a B non annuncia C (forma semplice) oppure lo annuncia con distanza ∞ (poisonous reverse). Quando il link B–C cade, B non trova alternative "fasulle" e pone subito C a ∞. Il poisonous reverse è più esplicito: B riceve attivamente "da A non puoi raggiungere C", invece di dover attendere la scadenza di un timer; in cambio i messaggi sono più grandi.

---
## Slide 45 – Triggered update

- Una ulteriore modifica per migliorare i tempi di convergenza è relativa alla tempistica con cui inviare i DV ai vicini
	- i protocolli basati su questi algoritmi richiedono di inviare periodicamente le informazioni delle distanze ai vicini
	- è possibile che un DV legato ad un cambiamento della topologia parta in ritardo e venga sopravanzato da informazioni vecchie inviate da altri nodi
- Triggered update: un nodo deve inviare immediatamente le informazioni a tutti i vicini qualora si verifichi una modifica della propria tabella di instradamento

>> L'aggiornamento periodico resta comunque necessario (garantisce che l'informazione venga rinfrescata anche se un messaggio va perso); il triggered update si aggiunge a esso per propagare subito le "cattive notizie" (es. distanza posta a ∞), riducendo la finestra in cui possono circolare informazioni obsolete come nel bouncing effect.

---
## Slide 46 – Ma non basta…

- I diversi rimedi proposti in realtà non sono davvero risolutivi
	- sono ancora presenti situazioni patologiche in cui i protocolli Distance Vector convergono troppo lentamente o non convergono affatto

![[RT04-s038-1.png|200]]

- Inizialmente, A e B raggiungono D tramite C
- Dopo il guasto, C mette a ∞ la sua dist. da D
- Dopo aver ricevuto il DV da C, A crede di poter raggiungere comunque D tramite B
- Idem per B che crede di poter usare A
- Stavolta A e B trasmettono i propri DV a C
- Si crea di nuovo un loop e un problema di convergenza

>> Lo split horizon impedisce solo i cicli fra **due** nodi adiacenti. Qui A e B instradano verso D tramite C, quindi verso C applicano split horizon, ma fra loro si scambiano normalmente la distanza da D (per A, B non è il next hop verso D, e viceversa). Se il DV di C con D = ∞ arriva ad A prima che arrivi il DV aggiornato di B, A adotta il vecchio percorso "via B" (che in realtà passa per C) e lo annuncia a C; il ciclo coinvolge tre nodi e il conteggio all'infinito riparte. Solo il limite $D_{max}$ garantisce la terminazione: è uno dei motivi che portano ai protocolli link state.

---
## Slide 47 – Routing Information Protocol (RIP)

- Protocollo **distance vector**, di implementazione vecchia (RFC 1058, Giugno 1988), discende dal protocollo di routing realizzato per la rete XNS di Xerox
- Ne esiste una **versione 2** più recente (RFC 2453)
- Molto diffuso in passato perché il codice di implementazione è liberamente disponibile
- Utilizzato praticamente solo su reti TCP/IP
- Utilizza due tipi di messaggi:
	- **REQUEST** serve per chiedere esplicitamente informazioni ai nodi vicini (ad es. all'avvio del nodo)
	- **RESPONSE** serve in generale per inviare informazioni di routing (cioè i distance vector)
- I messaggi RIP sono trasportati da UDP ed usano la porta 520 sia in trasmissione che in ricezione

>> RIP è quindi un protocollo di livello applicativo dal punto di vista dello stack (gira sopra UDP, ad es. con il demone `routed`), anche se il suo scopo è configurare la tabella di instradamento di livello rete. Ogni router esegue Bellman-Ford distribuito con metrica hop count.

---
## Slide 48 – Response

- Un **RESPONSE** con nuove informazioni di routing viene inviato:
	- periodicamente
	- come risposta ad una richiesta esplicita
	- quando una informazione di routing cambia (triggered update)
- Le informazioni periodiche sono inviate ogni 30 secondi, con uno scarto da 1 a 5 secondi, per evitare "tempeste" di aggiornamenti
- Response contiene il distance vector del router che lo invia
	- Destinazione
	- Distanza (hop count)

>> Lo scarto casuale serve a evitare la *sincronizzazione* dei router: se tutti trasmettessero esattamente ogni 30 s, gli aggiornamenti tenderebbero ad allinearsi nel tempo e a generare picchi di traffico (e collisioni) tutti nello stesso istante.

---
## Slide 49 – RIP: formato dei pacchetti

- La struttura del pacchetto è basata su parole di 32 bit
- Il pacchetto può avere lunghezza variabile fino a 512 byte (max 25 entry)

![[RT04-s062-1.png|600]]

Il blocco da "address family identifier" a "metric" è **ripetuto** per ogni entry.

>> Dimensioni dei campi (RFC 1058): command 8 bit, version 8 bit, must be zero 16 bit (intestazione di 4 byte); in ogni entry address family identifier 16 bit + zero 16 bit, address 32 bit, due parole a zero (64 bit), metric 32 bit → 20 byte per entry.
>> Verifica del limite: $4 + 25 \cdot 20 = 504 \le 512$ byte; una 26ª entry porterebbe a 524 byte. Se il distance vector ha più di 25 destinazioni, si inviano più RESPONSE.

---
## Slide 50 – RIP: significato dei campi

- I bit del pacchetto sono molto ridondanti rispetto alla quantità di informazioni da inviare (molti campi fissi con i bit tutti a zero)
	- inizialmente pensati per adattarsi ad altri protocolli
- **command**: distingue tra REQUEST (1) e RESPONSE (2)
- **version**: versione del RIP
- **address family identifier**: indica il tipo di indirizzo di rete utilizzato, vale 2 per IP
- **address**: identifica la destinazione per la quale viene data la distanza
- **metrica**: è la distanza dalla destinazione indicata

>> Le parole "must be zero" erano spazio riservato per indirizzi di altre famiglie di protocolli (es. XNS) più lunghi di 32 bit; RIP v2 riutilizzerà proprio questi campi (subnet mask, next hop, route tag) mantenendo la stessa struttura del pacchetto.
>> La metrica occupa 32 bit anche se può valere solo da 1 a 16.

---
## Slide 51 – La tabella di routing

- Ogni riga nella tabella contiene:
	- indirizzo di **destinazione**: è un indirizzo IP a 32 bit
	- **distanza** dalla destinazione (metrica)
		- in termini di hop-count (ogni link ha peso = 1)
		- la distanza massima (∞) per RIP è pari a **16**, al fine di limitare il conteggio all'infinito → adatto per reti relativamente piccole
	- **next-hop** sul percorso verso la destinazione
		- router vicino a cui inviare i datagrammi per la destinazione
	- due contatori
		- **Timeout**: se una route non viene aggiornata dopo TO secondi, la sua distanza è posta all'infinito (si ipotizza una perdita di connettività)
		- **Garbage-collection timer**: se dopo ulteriori GC secondi la route viene eliminata del tutto dalla tabella
		- I valori di default sono TO = 180 s e GC = 120 s

>> Con ∞ = 16 il cammino più lungo utilizzabile è di 15 hop. Il "count to infinity" termina comunque, al più dopo che le distanze sono salite fino a 16, invece di crescere indefinitamente.
>> I timer si legano al periodo di 30 s: TO = 180 s = 6 aggiornamenti periodici persi. Durante i GC = 120 s la route resta in tabella con metrica 16 per poter annunciare ai vicini che la destinazione è irraggiungibile, prima di cancellarla.

---
## Slide 52 – RIP: aggiornamento della tabella di routing

- A riceve un RESPONSE da B
	- Si controlla la correttezza dei dati (indirizzi IP e metriche validi)
	- Si calcola $d_i = d_i + 1$
- Esiste già una entry per la destinazione *i* ?
	- NO
		- Si crea una nuova entry
			- la distanza è $d_i$
			- il next-hop è B (mittente del RESPONSE)
			- si fa partire il timeout
	- SI
		- $d_i$ è minore di quella presente in tabella
			- la entry viene aggiornata con next hop = B e distanza = $d_i$
			- si fa ripartire il timeout
		- Next hop = B
			- Si aggiorna a distanza
			- Si fa ripartire il timeout

>> È il passo di Bellman-Ford con costo di link pari a 1: $D_A(i) = \min\left(D_A(i),\ 1 + D_B(i)\right)$.
>> Il caso "Next hop = B" è fondamentale: se B è già il next hop per *i*, A accetta la nuova distanza **anche se è peggiore** (B è l'unica fonte autorevole sul percorso che A sta usando). È così che le cattive notizie (aumenti di metrica, fino a 16) si propagano.
>> Esempio: A ha in tabella (dest. N, distanza 3, next hop B). Arriva da B "N a distanza 4" → $d = 5$: A aggiorna a 5 perché il next hop è B. Se invece la stessa informazione arrivasse da C, A la ignorerebbe ($5 > 3$).

---
## Slide 53 – RIP: problematiche

- Fa uso di split horizon
	- RESPONSE di interfacce diverse possono essere diverse
- Fa uso di triggered update
	- non è necessario indicare nella RESPONSE tutte le entry della tabella ma solamente quelle appena modificate
- Il RIPv1 non supporta il CIDR
- Il RIPv1 è un protocollo insicuro
	- Chiunque trasmetta datagrammi dalla porta UDP 520 viene considerato come un router autorizzato
	- Esempio di malfunzionamento indotto:
		- un router non autorizzato trasmette messaggi contenenti indicazione di una distanza 0 tra se stesso e tutti gli altri della rete
		- dopo qualche tempo tutti i percorsi ottimi convergono su questo router

>> Split horizon: su un'interfaccia non si annunciano le route apprese proprio da quell'interfaccia (o, nella variante *poisoned reverse*, le si annuncia con metrica 16). Per questo il RESPONSE dipende dall'interfaccia di uscita. Riduce i loop tra due router adiacenti, ma non elimina il count to infinity in topologie con cicli più lunghi.
>> L'attacco descritto è un *blackhole*: annunciando distanza 0 verso tutto, il router malevolo diventa il next hop preferito ovunque e può scartare o intercettare il traffico. RIP v2 introduce l'autenticazione proprio per questo.

---
## Slide 54 – La mancanza di CIDR

- Si supponga di voler utilizzare la rete 10.0.0.0 suddivisa in sottoreti \24
- Si realizzi la seguente architettura di rete

```
10.1.1.0-------router----200.200.200.0----router---100.100.100.0---router---10.2.2.0
```

- RouterB riceve distance vector contenenti la rete 10.2.2.0 da RouterC e la rete 10.1.1.0 da RouterA
- In assenza di CIDR 10.1.1.0 e 10.2.2.0 sono indirizzi appartenti alla stessa rete di classe A 10.0.0.0/8
	- Per RouterB 10.0.0.0/8 deve essere un'unica destinazione
	- RouterB è confuso perché vede la stessa rete in due diverse direzioni

>> I tre router sono, da sinistra, RouterA, RouterB e RouterC. Il problema nasce dal fatto che il RESPONSE di RIP v1 non trasporta la subnet mask: un router che riceve un indirizzo da un'interfaccia appartenente a un'altra rete classful può solo dedurre la maschera dalla classe (10.x → /8). RouterB non ha interfacce nella rete 10.0.0.0, quindi interpreta 10.1.1.0 e 10.2.2.0 entrambi come "10.0.0.0/8", raggiungibile sia verso RouterA sia verso RouterC. Una rete classful così "spezzata" da reti di altra classe si chiama *discontiguous network*.

>> **Collegamento con 01** → [[01 - Instradamento IPv4 e IPv6#Slide 103 – CIDR|slide 103–109: CIDR e aggregazione dei prefissi]], che RIP v1 non supporta perché non trasporta la netmask.

---
## Slide 55 -> 56 – RIP versione 2

- I miglioramenti introdotti riguardano soprattutto:
	- subnetting e CIDR
	- autenticazione

![[RT04-s068-1.png|600]]

Il blocco da "address family identifier" a "metric" è **ripetuto** per ogni entry.

>> La seconda parola con address family identifier = 0xFFFF (i 16 bit a 1) indica che la prima entry non è una route ma contiene l'autenticazione: authentication type (es. 2 = password semplice) e 16 byte di password (4 parole). Occupa quindi lo spazio di una entry (20 byte), e restano 24 route nel pacchetto.
>> Rispetto a RIP v1 i campi prima a zero diventano route tag, subnet mask e next hop. Il campo "routing domain" compariva nella prima specifica di RIP v2 (RFC 1388); in RFC 2453 quei 16 bit sono tornati "must be zero". RIP v2 invia i RESPONSE al gruppo multicast 224.0.0.9 (slide 55).

- Compatibilità verso il basso
	- RIP-1 ignora le entry con i campi riservati diversi da zero
- Possibilità di indicare sottoreti o indirizzamento CIDR
	- tramite il campo **subnet mask**
- Possibilità di **autenticare** chi invia i messaggi
- Possibilità di indicare il proprio AS e di scambiare informazioni con protocolli EGP
- Possibilità di specificare un **next hop** più appropriato
- Comunque non adatto ad AS grandi
- Comunque ha problemi di convergenza
	- è pur sempre un distance vector

>> Next hop: su una rete condivisa un router può annunciare una destinazione indicando come next hop un *altro* router della stessa rete che è in posizione migliore. Così si evita un salto inutile ("passa direttamente da lui"). Il valore 0.0.0.0 significa "usa me, il mittente".
>> I limiti restano quelli del distance vector: il diametro è al massimo di 15 hop, la convergenza è lenta e il count to infinity può ancora verificarsi. Per AS grandi si usa un link state come OSPF.

---
## Slide 57 – Da ricordare

**Distance vector**: semplice ma limitato
- Problemi di convergenza
- Conteggio all'infinito

**RIP: distance vector**
- Versione 1 obsoleta
- Versione 2 ancora utilizzata
- per reti piccole e implementazioni semplici

---
## Slide 58 – Il traffico di routing e gli indirizzi multicast

---
## Slide 59 – Protocolli di routing e IP multicast

- Sia nel distance vector, sia nel link state i router si devono scambiare pacchetti con informazioni di routing
- Questo traffico è logicamente riferito al piano di controllo (segnalazione)
- Tipicamente utilizza le stesse risorse del piano d'utente (servizi)
- Questo potrebbe creare conflitti in caso di sovraccarico dell'infrastruttura

>> In altre parole, il routing IP è "in banda": i messaggi dei protocolli di routing (RIP, OSPF, ...) viaggiano come normali datagrammi IP sugli stessi link e nelle stesse code del traffico utente. Se la rete è congestionata possono andare persi o arrivare in ritardo proprio i messaggi che servirebbero a reagire al problema (es. un router dichiarato irraggiungibile per timeout).

---
## Slide 60 – Una tipica architettura

- Più router fungono da gateway verso diverse network
- Condividono una network per lo scambio
	- Delle informazioni di routing
	- Del traffico fra le varie network che interconnettono

![[RT04-s052-1.png|600]]

>> Nella figura la linea verde (User traffic) va da H2 a H1, quella rossa (Routing infos) collega i router.
>> La network centrale ("Inter router", tipicamente una LAN di transito/backbone) è condivisa: su di essa passano sia il traffico H2 → H1 (piano d'utente) sia gli scambi di informazioni di routing fra i tre router (piano di controllo).

---
## Slide 61 – Il traffico di routing

- Il traffico di routing condivide le risorse con il traffico d'utente
- Per questa ragione va minimizzato

![[RT04-s053-1.png|600]]

- Maglia completa
- N router N(N-1)/2 (circa $N^2$ scambi di informazioni di routing)

>> Se ogni router invia le proprie informazioni separatamente (unicast) a ciascuno degli altri, servono tante "relazioni" quante sono le coppie di router: $\binom{N}{2} = \frac{N(N-1)}{2}$, cioè $O(N^2)$. Nella figura $N = 3$ → 3 scambi bidirezionali (le frecce rosse); con $N = 10$ diventerebbero già 45.

---
## Slide 62 – Multicast

- Domanda:
	- Possiamo ridurre il traffico del piano di controllo?
- Risposta:
	- **SI** se la network supporta il punto-multipunto un invio di informazioni di routing può raggiungere molti router in un sol colpo
- Operativamente
	- Utilizzo indirizzi IP Multicast

>> Su una LAN broadcast (es. Ethernet) un singolo frame inviato a un indirizzo multicast viene ricevuto da tutte le interfacce iscritte al gruppo: il router trasmette una sola volta invece di $N-1$ volte.

---
## Slide 63 – IP Multicast

- Indirizzi multicast
	- da 224.0.0.0 a 239.255.255.255
- Come utilizzarli?
- I router possono utilizzare diversi protocolli in contemporanea
- 224.0.0.9 RIPv2
- 224.0.0.5 OSPF All routers
- 224.0.0.6 OSPF Designated routers
- 224.0.0.10 EIGRP Routers

>> Sono gli indirizzi della ex classe D (primi 4 bit = 1110, cioè 224.0.0.0/4). Il blocco 224.0.0.0/24 ("Local Network Control Block") è riservato ai protocolli di controllo sul link locale: i pacchetti verso questi indirizzi non vengono mai inoltrati dai router (di solito sono inviati con TTL = 1). Ogni protocollo di routing ha il proprio gruppo, così un router riceve solo i messaggi dei protocolli che usa.

>> **Collegamento con 01** → [[01 - Instradamento IPv4 e IPv6#Slide 95 – Classe delle reti|slide 95: la classe D, cioè gli indirizzi multicast]]

---
## Slide 64 – Il traffico multicast

- Un messaggio raggiunge tutti i calcolatori del gruppo

![[RT04-s057-1.png|600]]

- Topologia logica a stella
- N router - N messaggi

>> Ogni router invia **un solo** messaggio multicast che raggiunge tutti gli altri: con $N$ router servono $N$ messaggi in tutto (uno per router), contro gli $N(N-1)/2$ scambi della maglia completa della slide 53. Il costo cresce quindi linearmente invece che quadraticamente.

---
## Slide 65 – Da ricordare

**Traffico di routing**
- utilizza la stessa rete del traffico dati
- non deve consumare risorse eccessive
- è necessario ottimizzare l'invio dei messaggi

Indirizzi **IP Multicast**

>> Per questo i protocolli di routing usano indirizzi multicast riservati invece del broadcast: ad esempio RIPv2 invia a 224.0.0.9, OSPF a 224.0.0.5 (tutti i router OSPF) e 224.0.0.6 (designated router). Solo le interfacce iscritte a quel gruppo elaborano i messaggi, gli altri host li scartano già a livello di scheda di rete.

---
## Slide 66 – IGP: come sono implementati distance vector e link state?

Come sono implementati distance vector e link state?

>> Le slide seguenti mostrano l'implementazione del distance vector con RIP (v1 e v2); il corrispondente protocollo link state (Dijkstra) usato in Internet è OSPF.

---
## Slide 67 – Link state

- Utilizzando il *protocollo di routing* ogni nodo si costruisce un'immagine del grafo della rete
- Il protocollo di routing ha come scopo fondamentale quello di permettere ad ogni nodo di crearsi l'immagine della rete
	- scoperta dei nodi vicini
	- raccolta di informazioni dai vicini
	- diffusione delle informazioni raccolte a tutti gli altri nodi della rete
- Noto il grafo della rete ogni nodo calcola le tabelle di routing utilizzando un opportuno *algoritmo di routing*

>> Differenza chiave rispetto al distance vector: nel DV ogni nodo dice ai **vicini** cosa sa di **tutta la rete** (le sue distanze); nel link state ogni nodo dice a **tutta la rete** cosa sa dei **suoi vicini** (i suoi link). Così tutti i nodi hanno la stessa mappa e calcolano i percorsi in modo indipendente, senza basarsi su stime altrui: niente count to infinity e convergenza più rapida, al prezzo di più memoria e calcolo.

---
## Slide 68 – Raccolta delle informazioni

- Ogni router deve comunicare con i propri vicini ed "imparare" i loro indirizzi
	- **Hello Packet**
- Deve poi misurare la distanza dai vicini
	- **Echo Packet**
- In seguito ogni router costruisce un pacchetto con lo stato delle linee (**Link State Packet** o LSP) che contiene
	- la lista dei suoi vicini
	- le lunghezze dei collegamenti per raggiungerli

>> Gli Hello vengono inviati periodicamente anche dopo la scoperta: la loro mancata ricezione per un certo intervallo segnala che il vicino (o il link) non è più disponibile, generando un nuovo LSP. La "distanza" misurata con gli echo può essere un ritardo (round-trip time) oppure, più spesso nella pratica, un costo amministrativo configurato (es. in OSPF legato alla banda del link).

---
## Slide 69 – Diffusione ed elaborazione delle informazioni

- I pacchetti LSP devono essere trasmessi da tutti i router a tutti gli altri router della rete
	- si usa il Flooding
	- a tal fine nel pacchetto LSP occorre aggiungere
		- l'indirizzo del mittente
		- un numero di sequenza
		- una indicazione dell'età del pacchetto
- Avendo ricevuto LSP da tutti i router, ogni router è in grado di costruirsi un'immagine della rete
	- tipicamente si usa l'algoritmo di Dijkstra per calcolare i cammini minimi verso ogni altro router

>> A cosa servono i campi aggiunti:
>> - **mittente + numero di sequenza**: identificano univocamente ogni LSP; un router inoltra (flooding) un LSP solo se è più recente di quello già memorizzato per quel mittente, altrimenti lo scarta. Questo evita che il flooding generi copie all'infinito e garantisce che vecchie informazioni non sovrascrivano quelle nuove.
>> - **età**: viene decrementata nel tempo (e ad ogni inoltro); quando arriva a zero l'LSP viene scartato. Serve a eliminare informazioni di router spenti e a recuperare situazioni anomale (es. numero di sequenza corrotto o router riavviato che riparte da numeri bassi).

---
## Slide 70->78 – Esempio

![[RT04-s042-1.png|400]]

Determinare il percorso di lunghezza minima dal nodo a verso tutti gli altri.  
Nelle righe grigio chiare della tabella indichiamo le distanze determinate a quel passo dell'algoritmo  
Nelle righe grigio scure indichiamo la distanza che viene ritenuta la migliore determinando il nodo a cui fare riferimento per i calcoli al prossimo passo dell'algoritmo

Passo 1: il nodo a minima distanza da a è b  
Passo 2: il nodo a minima distanza da a avente b come predecessore è e  
Passo 3: il nodo a minima distanza da a avente e come predecessore è c  
……  
È dimostrato che, procedendo in questo modo, le distanze determinate sono minime e non possono essere migliorate nei passi successivi dell'algoritmo  
Nella riga gialla viene riassunta la soluzione dell'algoritmo. Essa riporta la distanza minima verso X ed il nodo "predecessore" di X sul relativo percorso  
Nella riga arancio viene indicata la distanza da A al nodo X e il gateway da A verso X (ossia il nodo a cui A deve inviare i dati per raggiungere X)

![[RT04-s042-2.png|600]]

>> Grafo (pesi dei link): a–b 2, b–c 2, a–d 6, a–e 3, b–e 1, c–e 3, c–h 1, d–e 2, e–f 3, e–h 4, f–g 2, g–h 2.
>> Notazione della tabella: ogni cella "X n" significa "distanza n da a, con predecessore X". La tabella è ancora vuota: le slide seguenti la riempiono un passo alla volta (algoritmo di Dijkstra con sorgente a).

![[RT04-s043-1.png|400]]

Determinare il percorso di lunghezza minima dal nodo a verso tutti gli altri.  
Nelle righe grigio chiare della tabella indichiamo le distanze determinate a quel passo dell'algoritmo  
Nelle righe grigio scure indichiamo la distanza che viene ritenuta la migliore determinando il nodo a cui fare riferimento per i calcoli al prossimo passo dell'algoritmo

Passo 1: il nodo a minima distanza da a è b  
Passo 2: il nodo a minima distanza da a avente b come predecessore è e  
Passo 3: il nodo a minima distanza da a avente e come predecessore è c  
……  
È dimostrato che, procedendo in questo modo, le distanze determinate sono minime e non possono essere migliorate nei passi successivi dell'algoritmo  
Nella riga gialla viene riassunta la soluzione dell'algoritmo. Essa riporta la distanza minima verso X ed il nodo "predecessore" di X sul relativo percorso  
Nella riga arancio viene indicata la distanza da A al nodo X e il gateway da A verso X (ossia il nodo a cui A deve inviare i dati per raggiungere X)

![[RT04-s043-2.png|600]]

>> Passo 1 (inizializzazione da a): si esaminano i vicini di a → b = 2, d = 6, e = 3 (predecessore A). Il minimo è **b (2)**, che diventa definitivo (riga scura) e si evidenzia il link a–b.

![[RT04-s044-1.png|225]]![[RT04-s044-2.png|431]]

>> Passo 2: si aggiornano le distanze passando per b: c = 2+2 = 4 (nuovo), e = 2+1 = 3 (uguale al valore precedente via a, 3: c'è un pareggio e la slide sceglie b come predecessore). Il minimo tra i nodi non definitivi (c 4, d 6, e 3) è **e (3, via B)**: si evidenzia b–e.

![[RT04-s045-1.png|234]]![[RT04-s045-2.png|442]]

>> Passo 3: si rilassano i link uscenti da e (distanza 3): c = 3+3 = 6 (peggiore del 4 già noto, non aggiorna), d = 3+2 = 5 (migliora il 6 via a), f = 3+3 = 6, h = 3+4 = 7. Il minimo tra i non definitivi (c 4, d 5, f 6, h 7) è **c (4, via B)**: si evidenzia b–c.

![[RT04-s046-1.png|237]]![[RT04-s046-2.png|452]]

>> Passo 4: da c (distanza 4) si raggiunge h con 4+1 = 5, che migliora il 7 via e. Ora d e h valgono entrambi 5: la slide rende definitivo per primo **d (5, via E)** e si evidenzia d–e (h a 5 resterà il prossimo).

![[RT04-s047-1.png|239]]![[RT04-s047-2.png|452]]

>> Passo 5: d non offre miglioramenti (i suoi vicini a ed e sono già definitivi), quindi la riga chiara è vuota. Il minimo tra i non definitivi (f 6, h 5) è **h (5, via C)**: si evidenzia c–h.

![[RT04-s048-1.png|243]]![[RT04-s048-2.png|456]]

>> Passo 6: da h (distanza 5) si raggiunge g con 5+2 = 7 (predecessore H). Il minimo tra i non definitivi (f 6, g 7) è **f (6, via E)**: si evidenzia e–f.

![[RT04-s049-1.png|226]]![[RT04-s049-2.png|432]]

>> Passo 7: da f (distanza 6) si ricalcola g = 6+2 = **8** (nella slide è riportato "F 9", ma col peso f–g = 2 il valore corretto è 8); in ogni caso è peggiore di 7 via h, quindi non aggiorna. L'ultimo nodo, **g (7, via H)**, diventa definitivo: si evidenzia g–h.

![[RT04-s050-1.png|250]]![[RT04-s050-2.png|437]]

H precede G nel percorso ottimo da A a G  
B è il primo nodo che A incontra sul percorso ottimo verso G

>> Il riquadro in basso commenta la colonna G: nella riga gialla "H 7" (predecessore H), nella riga arancio "B 7" (gateway B).
>> Passo finale: g non ha vicini non definitivi, quindi l'ultima riga chiara resta vuota e l'algoritmo termina. I link in grassetto formano l'**albero dei cammini minimi** radicato in a: a–b, b–c, b–e, c–h, d–e, e–f, g–h (7 archi per 8 nodi).
>> Le frecce rosse mostrano da dove nascono i valori: dalla distanza definitiva di B (2) si calcolano C = B 4 ed E = B 3; da quella di E (3) si calcolano C = E 6, D = E 5, F = E 6, H = E 7.
>> Riga arancio: il gateway si ottiene risalendo i predecessori fino al primo nodo dopo a. Ad es. per g: g ← h ← c ← b ← a, quindi gateway B e distanza 7 (a–b–c–h–g = 2+2+1+2). Per d: d ← e ← b ← a, gateway B, distanza 5. Tutti i nodi risultano raggiungibili tramite B perché, al passo 2, il pareggio su e è stato risolto scegliendo b come predecessore (con il predecessore a il gateway verso e, d, f sarebbe stato e stesso, con le stesse distanze).
>> La riga arancio è proprio la **tabella di instradamento** di a: per ogni destinazione basta memorizzare il next hop (gateway), non tutto il percorso.

---
## Slide 79 – Open Shortest Path First (OSPF)

- Divenuto standard nella versione 2 (RFC 2328)
- Protocollo di tipo **link state**
- Incapsulato direttamente in IP
	- il valore del campo protocol dell'intestazione IP (89 per OSPF) serve a distinguere questi pacchetti da altri
- Ogni router costruisce un **Link State Database (LSDB)**
- Dal LSDB ricava lo shortest-path tree
- La rete può essere suddivisa in aree per limitarne la complessità

>> A differenza di RIP (distance vector, trasportato in UDP porta 520), OSPF non usa né UDP né TCP: i suoi pacchetti sono payload diretto di IP con Protocol = 89. L'affidabilità della consegna (ack, ritrasmissioni) è quindi gestita dal protocollo stesso.

---
## Slide 80 – OSPF in sintesi

![[RT04v3-s080-1.png|287]]

>> La pipeline in breve: con gli Hello si scopre *chi* c'è; fra alcuni vicini si formano adiacenze; sulle adiacenze si sincronizzano i database e si propagano gli LSA (flooding); quando tutti i router dell'area hanno lo stesso LSDB, ciascuno esegue Dijkstra con sé stesso come radice; i risultati popolano la RIB e da questa la FIB usata per l'inoltro.

---
## Slide 81 – Il costo in OSPF

- Ogni interfaccia OSPF ha un costo
- Il costo di un percorso è la somma dei costi delle interfacce attraversate
- Il costo può essere configurato
	- Molte implementazioni propongono un valore derivato dal rapporto fra una banda di riferimento e la banda dell'interfaccia
	- OSPF non misura normalmente il ritardo mediante pacchetti Echo

>> Esempio tipico (Cisco): $\text{costo} = \dfrac{B_{\text{rif}}}{B_{\text{interfaccia}}}$ con $B_{\text{rif}} = 100$ Mbit/s di default, arrotondato all'intero e con minimo 1. Una FastEthernet (100 Mbit/s) ha costo 1, una Ethernet a 10 Mbit/s costo 10; con questo default però 100 Mbit/s, 1 Gbit/s e 10 Gbit/s valgono tutte 1, per cui nelle reti moderne si alza la banda di riferimento.
>>
>> Il costo si applica all'interfaccia **in uscita**: un collegamento può quindi avere costi diversi nei due versi. Il costo è statico, a differenza del vecchio ARPANET che misurava il ritardo con pacchetti Echo.

---
## Slide 82 – LSDB

- Ogni router genera informazioni sul proprio stato locale
- Queste informazioni sono contenute nei Link State Advertisement (LSA)
- I router distribuiscono gli LSA mediante flooding affidabile
- I router appartenenti di un'area di rete convergono verso la stessa LSDB
- Ogni router usa se stesso come radice del proprio shortest path tree

>> Il database è identico per tutti i router dell'area, ma l'albero dei cammini minimi è diverso per ciascuno, perché cambia la radice da cui parte Dijkstra.
>>
>> Il flooding è "affidabile" perché ogni LSA ricevuto deve essere confermato (Link State Acknowledgment) e viene ritrasmesso finché non arriva la conferma.

---
## Slide 83 – Esempio

![[RT04v3-s083-1.png|350]]

- LSA generato da R2 (router LSA type 1)
	- Collegamento R2-R1 costo 2
	- Collegamento R2-R3 costo 3
- Ogni router descrive la propria porzione di topologia mediante LSA.
- La raccolta degli LSA permette a tutti i router dell'area di ricostruire il grafo completo
	- $LSDB = \{LSA(R1), LSA(R2), LSA(R3)\}$

>> Gli altri due LSA dell'esempio sono LSA(R1) = {R1-R2 costo 2, R1-R3 costo 8} e LSA(R3) = {R3-R1 costo 8, R3-R2 costo 3}. Ogni router descrive solo i propri collegamenti, quindi ogni arco compare due volte, una per ciascun estremo. Mettendo insieme i tre LSA, ogni router ottiene lo stesso grafo a triangolo.
>>
>> In OSPF il costo è associato all'interfaccia *in uscita*, quindi in generale R2-R1 e R1-R2 potrebbero avere costi diversi. Qui sono simmetrici. Già da questo grafo si vede che per R1 conviene raggiungere R3 passando per R2 (2 + 3 = 5) invece di usare il link diretto (8).

---
## Slide 84 – Un esempio più realistico

![[RT04v3-s084-1.png|450]]

- LSA di R1 (router LSA type 1)
	- R1-R2 costo 2
	- R1-R3 costo 8
	- 198.51.30.0/24 costo 1
- LSA di R2 (router LSA type 1)
	- R2-R3 costo 3
	- R2-R1 costo 2
	- 192.168.10.0/24 costo 1
- LSA di R3 (router LSA type 1)
	- R3-R1 costo 8
	- R3-R2 costo 3
	- 203.0.113.0/24 costo 1

>> Rispetto alla slide precedente, ogni Router-LSA contiene due tipi di informazione: i collegamenti verso altri router, cioè gli archi del grafo usati da Dijkstra, e le reti **stub** direttamente collegate (N1, N2, N3). Le reti stub sono reti "foglia", senza altri router OSPF, e diventano le destinazioni IP vere e proprie delle rotte.
>>
>> Le reti stub non sono "nodi di transito": nessun percorso le attraversa per arrivare altrove. Per questo nel calcolo vengono appese all'albero dei cammini minimi come foglie, sommando il costo del router che le annuncia.

---
## Slide 85 – Dal punto di vista di R1

| Destinazione | Percorso minimo | Costo totale |
|---|---|---|
| 195.51.30.0/24 | Direttamente connessa | 1 |
| 198.168.10.0/24 | R1 → R2 → N2 | 2 + 1 = 3 |
| 203.0.113.0/24 | R1 → R2 → R3 → N3 | 2 + 3 + 1 = 6 |

- Il percorso diretto R1->R3->N3 avrebbe costo 8+1=9 e risulta quindi meno conveniente del percorso R1->R2->R3->N3
- Quindi
	- Gli LSA distribuiscono informazioni topologiche,
	- Dijkstra utilizza queste informazioni
	- il risultato del calcolo permette la costruzione delle rotte verso i prefissi IP

>> **Refusi nella tabella**: due prefissi non corrispondono alla figura della slide precedente. N1 è **198.51.30.0/24**, non 195.51.30.0/24, e N2 è **192.168.10.0/24**, non 198.168.10.0/24. I costi invece sono corretti.
>>
>> Dijkstra eseguito da R1 sul grafo della slide 84:
>> 1. Si parte da R1 = 0. I candidati sono N1 = 1, R2 = 2 e R3 = 8.
>> 2. Si fissa N1 (1). È una rete stub, quindi non ha archi uscenti.
>> 3. Si fissa R2 (2). R3 scende da 8 a min(8, 2 + 3) = 5 passando per R2, e N2 diventa 2 + 1 = 3.
>> 4. Si fissa N2 (3).
>> 5. Si fissa R3 (5). N3 diventa 5 + 1 = 6.
>> 6. Si fissa N3 (6).
>>
>> Nella tabella di routing di R1 conta solo il **next hop**: N1 è direttamente connessa, mentre N2 (costo 3) e N3 (costo 6) si raggiungono entrambe con next hop R2. Il link R1-R3 di costo 8 non viene usato per nessuna destinazione, ma resta come alternativa se cade R2 o uno dei suoi link.

---
## Slide 86 – LSA e LSU

- Link State Advertisement (LSA)
	- Oggetto informativo che descrive una parte della topologia o una destinazione
- Link State Update (LSU)
	- Pacchetto OSPF
- Un singolo LSU può trasportare uno o più LSA
- Link State Acknowledgment
	- conferma la ricezione degli LSA

>> Distinzione importante: l'LSA è l'**informazione** (la "lettera"), l'LSU è il **pacchetto** OSPF che la trasporta (la "busta"). Ogni LSA è identificato da tipo, Link State ID e router che lo ha originato; ha un **numero di sequenza** (per riconoscere la versione più recente) e un'**età** (LS Age): l'originatore lo rinfresca ogni 30 minuti e, se raggiunge MaxAge (1 ora), viene eliminato dalla LSDB.

---
## Slide 87 – Vicinanza e adiacenza

- Vicini (**neighbour**)
	- Due router che scambiano pacchetti sulla stessa rete
	- Riconoscono pertanto una comunicazione bidirezionale
- Adiacenti (**adjacent**)
	- Due router che una volta vicini decidono di sincronizzare i loro LSDB sull'interfaccia
		- In pratica concorrono al processo di determinazione del routing
- Quindi:
	- tutti i router adiacenti sono anche vicini
	- non tutti i router vicini diventano adiacenti

>> L'adiacenza è quindi un sottoinsieme della relazione di vicinanza. Su una LAN con DR (slide 90) due router qualsiasi sono vicini, ma diventano adiacenti solo con il DR e il BDR; nello stato finale dei due router non-DR la relazione si ferma a "2-Way".

---
## Slide 88 – Hello

- I pacchetti **Hello** vengono inviati per farsi riconoscere come router OSPF dai vicini
	- Vengono inviati **periodicamente** sulle interfacce abilitate in base a quanto specificato dal parametro **HelloInterval**
- Permettono di scoprire i propri vicini
	- Includono una lista di tutti i vicini (Neighbor) dai quali è stato ricevuto un pacchetto HELLO recente (cioè non più vecchio di **RouterDeadInterval**)
- La comunicazione è riconosciuta come bidirezionale quando il router trova il proprio Router ID nella lista dei vicini contenuta nell'Hello ricevuto.
- Ogni router quindi è aggiornato su
	- quali sono i vicini
	- che è presente un collegamento bidirezionale
	- se esso è ancora attivo

>> Il collegamento bidirezionale si verifica così: quando il router A riceve un Hello di B che contiene il router ID di A nella lista dei vicini, A sa che B lo sente, quindi la comunicazione funziona in entrambi i versi (stato "2-Way").
>>
>> Valori tipici su LAN: HelloInterval = 10 s, RouterDeadInterval = 40 s (4 volte l'Hello). Se per un RouterDeadInterval non arriva alcun Hello, il vicino è dichiarato non più attivo.

---
## Slide 89 – Tipologie di rete

- OSPF è progettato per operare correttamente con reti:
	- Point-to-Point (punto-punto fra due router)
	- Broadcast Multi-Access o BMA (tipicamente LAN 802)
	- Non-Broadcast Multi-Access o NBMA (Frame Relay, …)
- In una rete ad accesso multiplo con broadcast (BMA) tutti gli N router connessi alla rete sono di fatto connessi con tutti gli altri
- In assenza di un meccanismo di ottimizzazione, gli N router su una LAN potrebbero stabilire N(N−1)/2 adiacenze, con un numero elevato di relazioni da mantenere sincronizzate
	- In quanto gli LSDB potrebbero essere tutti disallineati
- Per le adiacenze conviene adottare una topologia a **stella equivalente**, con N archi bidirezionali ed un router che fa da centro stello

>> Con N router in maglia completa le adiacenze sarebbero $\binom{N}{2} = \frac{N(N-1)}{2}$, cioè $N(N-1)$ relazioni orientate. Per N = 10 sono 45 adiacenze (90 relazioni), mentre con la stella sono solo 9 (una per ogni router non centrale, $N-1$). L'ultimo punto va letto come "un router che fa da centro stella": è il DR della slide successiva.
>>
>> Il multicast da solo non basta: evita di inviare N copie dello stesso pacchetto, ma non risolve il problema di tenere sincronizzati i database di ogni coppia di router. Per questo serve un punto di riferimento comune.

---
## Slide 90 – Router designato

- Si elegge un **Router designato (DR)**
- Ogni router della LAN è adiacente solo al DR (e al BDR)
	- Il DR ha un ruolo centrale nel flooding degli LSA sulla LAN e genera il Network-LSA di tipo 2 che rappresenta la rete multiaccesso nella topologia OSPF dell'area
- Per ogni rete multi-accesso viene eletto un DR
- Per ragioni di affidabilità occorre avere anche un Backup Designated Router (BDR) adiacente a tutti i router locali

>> Indirizzi multicast in pratica: i router non-DR inviano i propri aggiornamenti a 224.0.0.6 (AllDRouters, ascoltato da DR e BDR); il DR li ridistribuisce a 224.0.0.5 (AllSPFRouters, tutti i router OSPF).
>>
>> Il BDR ascolta tutto e ha già le adiacenze con ogni router: se il DR cade lo sostituisce subito, senza dover risincronizzare i database.

---
## Slide 91 – Esempio

![[RT04n-s087-1.png|600]]

- In alto a sinistra: la LAN fisica, con più router collegati allo stesso segmento (e due host)
- In alto a destra: **router vicini**, cioè tutti i router della LAN si vedono a vicenda attraverso il mezzo condiviso
- In basso: **DR** e **router adiacenti**, cioè la topologia a stella equivalente in cui ogni router della LAN è adiacente solo al DR

>> Il router a destra, collegato con un link punto-punto, resta adiacente direttamente al suo vicino: sui collegamenti point-to-point non si elegge un DR e i due estremi diventano sempre adiacenti.

---
## Slide 92 – Identificazione dei router e priorità

- Ogni router di un dominio OSPF deve avere un identificativo univoco (router ID) di 32 bit:
	- in generale di default si prende l'indirizzo IP più alto fra quelli assegnati alle interfacce del router
	- si può assegnare manualmente un router ID ad ogni router configurando opportunamente l'interfaccia di loop-back
	- configurare l'interfaccia di loop-back è un modo più stabile e sicuro di assegnare il router ID perché questa interfaccia non viene mai disabilitata
- Ai singoli router possono essere associate delle priorità
	- utilizzate nell'elezione del DR
	- valore di priorità compreso tra 0 e 255 (8 bit)
	- I router a priorità 0 non sono eleggibili
	- di default tutti i router hanno priorità 1

>> Precisazione: su molte implementazioni (es. Cisco) l'ordine è router ID configurato esplicitamente con il comando `router-id`, poi l'IP più alto fra le loopback, poi l'IP più alto fra le interfacce fisiche attive. Il router ID è scritto in notazione puntata come un indirizzo IP, ma è solo un identificativo e non deve essere per forza raggiungibile.

---
## Slide 93 – Elezione del DR

- Ciascun router nella rete BMA:
	- Esamina la lista dei suoi vicini
	- Elimina dalla lista tutti i router non eleggibili (ad esempio tutti quelli che hanno priorità 0)
	- Fra quelli rimasti seleziona il router avente la priorità maggiore
	- Sceglie il più alto router ID in caso di uguale priorità
- Il router selezionato è il DR
	- Se le informazioni sono consistenti (cioè tutti i router hanno visto tutti i vicini questo algoritmo garantisce una scelta univoca)
- Rivede la tabella dei vicini e ri-seleziona gli eleggibili (a questo punto il router che è stato eletto DR non è più eleggibile)
	- seleziona ed elegge il BDR secondo le regole già adottate per il DR
- Termina la procedura una volta eletti DR e BDR

>> Esempio: su una LAN ci sono R1 (priorità 1, ID 10.0.0.1), R2 (priorità 1, ID 10.0.0.9), R3 (priorità 5, ID 10.0.0.3) e R4 (priorità 0, ID 10.0.0.7). R4 è escluso perché ha priorità 0. R3 diventa DR perché ha la priorità più alta. Fra R1 e R2 (entrambi con priorità 1) vince il router ID più alto, quindi R2 diventa BDR.
>>
>> Nelle implementazioni reali l'elezione non è preemptive: se in seguito si aggiunge un router con priorità più alta, questo non prende il posto del DR in carica. Il ruolo cambia solo se il DR cade (e allora il BDR viene promosso).

---
## Slide 94 -> 96 – Esempio

![[RT04v3-s094-1.png|450]]

| Router ID | Priorità |
|---|---|
| R1 : 1.1.1.1 | 2 |
| R2 : 2.2.2.2 | 0 |
| R3 : 3.3.3.3 | 1 |
| R4 : 4.4.4.4 | 1 |
| R5 : 5.5.5.5 | 0 |

L'algoritmo di elezione del DR selezione
- DR = R1 per maggiore priorità
- BDR = R4 per maggiore Id rispetto a R3 a parità di priorità

>> Applicando le regole della slide 93: R2 e R5 hanno priorità 0, quindi non sono eleggibili, anche se R5 ha il router ID più alto di tutti. Restano R1 (2), R3 (1) e R4 (1). R1 ha la priorità maggiore e diventa DR. Escluso R1, R3 e R4 hanno la stessa priorità e vince il router ID più alto, quindi il BDR è R4 (4.4.4.4 > 3.3.3.3).
>>
>> Priorità 0 vuol dire solo "mai DR o BDR". R2 e R5 partecipano comunque a OSPF e formano l'adiacenza Full con DR e BDR come tutti gli altri.

![[RT04v3-s095-1.png|450]]

R3 manda al DR un LSU (pacchetto OSPF Type 4) contenente il suo Router-LSA Type 1

Destinazione multicast: 224.0.0.6 (AllDRouters) -> cioè l'indirizzo ascoltato solo da DR e BDR.

**Router-LSA originato da R3**
- LSA Type 1 · Originatore: R3
- Router ID = 3.3.3.3
- Collegamento alla LAN transit
	- Link ID: 10.0.0.1 (IP del DR)
	- IP di R3 sulla LAN: 10.0.0.3
	- Costo verso la LAN: 10
- Rete stub direttamente collegata
	- **10.30.0.0/24 · costo 1**
- Ogni router origina il proprio Router-LSA. Non annuncia reti remote come direttamente collegate.

>> Come leggere il Router-LSA di R3:
>> - **Transit**: la LAN comune (10.0.0.0/24, vedi la netmask nella slide successiva) ha più router e un DR, quindi R3 non elenca i singoli vicini. Descrive invece un collegamento verso una rete di transito, identificata dall'IP del DR (Link ID = 10.0.0.1). L'IP di R3 sulla LAN (10.0.0.3) è il campo che la RFC chiama *Link Data*. Il costo 10 è quello dell'interfaccia di R3 verso la LAN.
>> - **Stub**: 10.30.0.0/24 è collegata solo a R3, quindi compare come rete stub (foglia) con il suo costo.
>> - Allo stesso modo R4 annuncerà nel proprio Router-LSA la stub 10.40.0.0/24. R3 non la annuncia, perché "non annuncia reti remote come direttamente collegate".

![[RT04v3-s096-1.png|450]]

1. R1 distribuisce il router LSA ricevuto da R3 (e anche da tutti gli altri router) i router LSA (tipo 1 ) ricevuti
	- Destinazione multicast: 224.0.0.5 (All SPF Routers)
2. R1 origina un Network LSA (tipo 2)
	- Destinazione multicast: 224.0.0.5
	- Il Network-LSA elenca i router con adiacenza Full al DR; non contiene né le LAN stub 10.30.0.0/24 e 10.40.0.0/24 né i costi dei link

**Network-LSA originato da R1**
- LSA Type 2 · Originatore: R1
- Router ID = 1.1.1.1
- Link state ID: 10.0.0.1 (IP del DR)
- Netmask : 255.255.255.0 (10.0.0.0/24)
- Attached routers: R1, R2, R3, R4, R5

>> Il punto 1 è scritto in modo confuso. Il senso è che il DR rifà il flooding verso tutti (224.0.0.5) dei Router-LSA ricevuti da R3 e dagli altri router, senza modificarli. Ogni Router-LSA resta "firmato" dal router che lo ha originato.
>>
>> Come si costruisce il grafo da questi LSA:
>> - La LAN diventa un **nodo** a sé (pseudo-nodo), descritto dal DR con il Network-LSA. Gli archi *router → LAN* hanno il costo scritto in ciascun Router-LSA (es. 10 per R3). Gli archi *LAN → router* hanno costo 0, ed è per questo che il Network-LSA non contiene costi.
>> - Il prefisso della LAN (10.0.0.0/24) si ricava da Link State ID e Netmask del Network-LSA. Le stub 10.30.0.0/24 e 10.40.0.0/24 si trovano invece solo nei Router-LSA di R3 e R4.
>> - Gli *Attached routers* comprendono anche il DR stesso e i router con priorità 0 (R2, R5), perché anche loro sono in Full con il DR. Nel pacchetto reale compaiono come router ID (1.1.1.1 … 5.5.5.5).
>> - Esempio di calcolo: se tutte le interfacce sulla LAN costano 10, R1 raggiunge 10.30.0.0/24 con costo R1 → LAN (10) + LAN → R3 (0) + stub (1) = 11, con next hop 10.0.0.3. In questo modo si contano 5 archi verso lo pseudo-nodo, invece di 5·4 = 20 archi orientati (10 coppie) in una maglia completa.

---
## Slide 97 – Più funzioni per un solo protocollo

- OSPF implementa tre funzioni con diversi scopi:
	- **hello, exchange, flooding**
- Per ogni funzione si utilizzano messaggi specifici
- I messaggi hanno una intestazione comune
	- vengono aggiunte informazioni per il particolare scopo a cui il messaggio è destinato (tipo di pacchetto)

![[RT04n-s090-1.png|550]]

>> Ogni riga è di 32 bit: Version (8 bit), Type (8 bit), Packet Length (16 bit); Router ID (32); Area ID (32); Checksum (16) e AuType (16); Authentication (64 bit, su due righe). In totale l'intestazione comune è di 24 byte.
>>
>> I tipi di pacchetto (campo Type) sono 5: 1 = Hello (funzione *hello*); 2 = Database Description e 3 = Link State Request (funzione *exchange*, cioè la sincronizzazione iniziale); 4 = Link State Update e 5 = Link State Acknowledgment (funzione *flooding* affidabile).

---
## Slide 98 – OSPF: intestazione comune

- **Version** indica la versione di OSPF (versione 2)
- **Type** indica il tipo di pacchetto
- **Packet Length** numero di byte del pacchetto
- **Router ID** indirizzo IP che identifica il router mittente
- **Area ID** identifica l'area di appartenenza
	- il numero 0.0.0.0 è l'area di backbone
- **Checksum** calcolata su tutto il pacchetto OSPF escludendo gli 8 byte del campo authentication
	- si utilizza l'algoritmo classico di IP
- **AuType** indica il tipo di autenticazione:
	- 0 nessuna autenticazione
	- 1 autenticazione semplice (password nel campo **authentication**)
	- 2 autenticazione crittografica (dati nel campo **authentication**)

>> Packet Length include l'intestazione comune (24 byte). L'"algoritmo classico di IP" è il complemento a uno della somma in complemento a uno delle parole di 16 bit. Con AuType = 2 il campo Authentication non contiene il digest ma una key ID, la sua lunghezza e un numero di sequenza crittografico; il digest (es. MD5) è accodato in fondo al pacchetto e, in questo caso, la checksum standard non viene calcolata (l'integrità è garantita dal digest).
>>
>> L'area 0 (backbone) è obbligatoria in un dominio multi-area: tutte le altre aree devono essere collegate a essa.

---
## Slide 99 – I messaggi OSPF

- Complessivamente 5 tipologie di messaggio
	- HELLO: scoperta e mantenimento dei vicini
	- DB DESCRIPTION (DBD): confronto delle informazioni contenute nel LSDB del vicino
	- LINK STATE REQUEST (LSR): richiesta di specifici LSA
	- LINK STATE UPDATE (LSU): Invio di uno o più LSA
	- LINK STATE ACK (LSACK): conferma della ricezione del LSA
- Questi messaggi sono funzionali alle tre fasi principali di funzionamento del protocollo

>> Il campo *Type* dell'intestazione comune vale 1 = Hello, 2 = DBD, 3 = LSR, 4 = LSU, 5 = LSAck. Per questo l'LSU della slide 95 è il "pacchetto OSPF Type 4". Non vanno confusi con i *tipi di LSA* (1 = Router, 2 = Network, …), che sono il contenuto trasportato dagli LSU.
>>
>> Corrispondenza con le tre fasi:
>> - **Hello**: pacchetti Hello.
>> - **Exchange**: DBD, poi LSR e LSU per gli LSA mancanti.
>> - **Flooding**: LSU e LSAck, che rendono il flooding affidabile.
>>
>> I pacchetti OSPF viaggiano direttamente su IP (protocol number 89), senza TCP né UDP.

---
## Slide 100 – Sinconizzazione dei database

- Quando si stabilisce un'adiacenza si eleggono un **Leader** e un **Follower** e si controlla che gli LSDB contengano informazioni coerenti
	- Si confrontano i database (DBD) e vengono richieste le informazioni necessarie per allinearli (LSR, LSU e LSA)
- Perché sincronizzare?
	- Un nuovo vicino può avere un database incompleto
		- non ha ricevuto gli LSA distribuiti prima della formazione dell'adiacenza;
		- potrebbe possedere versioni meno recenti di alcuni LSA;
- Il calcolo dello shortest path richiede LSDB completo

>> Leader/Follower corrispondono a quelli che la RFC 2328 chiama Master/Slave: diventa Leader il router con router ID più alto, ed è lui a guidare lo scambio dei Database Description scegliendo i numeri di sequenza. Ogni DD contiene solo le *intestazioni* degli LSA; confrontandole ciascun router capisce quali LSA gli mancano o sono vecchi e li chiede con i Link State Request, a cui l'altro risponde con i Link State Update.
>>
>> Il Leader/Follower riguarda la singola adiacenza ed è indipendente dal ruolo DR/BDR.

---
## Slide 101 – Le fasi di OSPF

![[RT04n-s093-1.png|600]]

>> - **Hello**: i pacchetti Hello sono inviati periodicamente (tipicamente ogni 10 s su LAN, *dead interval* 40 s) in multicast (224.0.0.5); servono a scoprire i vicini, a verificare che la comunicazione sia bidirezionale (ogni router elenca nell'Hello i vicini che ha già sentito), a fare da *keep-alive* e, sulle reti multiaccesso, a eleggere DR e BDR.
>> - **Exchange**: diventa master il router con Router ID più alto; il master detta i numeri di sequenza dei pacchetti Database Description (DBD). I DBD non contengono gli LSA completi ma solo i loro **header** (tipo, ID, router originante, numero di sequenza, età): basta per capire quali LSA mancano o sono più vecchi nel proprio database.
>> - **Update**: per ciascun LSA mancante o obsoleto il router invia un Link State Request; il vicino risponde con un Link State Update che contiene gli LSA completi, e la ricezione viene confermata con un Link State Ack (il flooding di OSPF è affidabile).

---
## Slide 102 – Relazione con un singolo vicino

![[RT04n-s094-1.png|600]]

>> Significato degli stati:
>> - **Down**: nessun Hello ricevuto dal vicino (o scaduto il dead interval).
>> - **Init**: è arrivato un Hello dal vicino, ma il proprio Router ID non compare ancora nella sua lista di vicini (comunicazione vista in un solo verso).
>> - **Two way**: il router vede il proprio ID nell'Hello del vicino → comunicazione bidirezionale: i due sono **vicini** (*neighbor*).
>> - A questo punto si decide se formare un'**adiacenza**: su un collegamento punto-punto sempre; su una rete multiaccesso (es. Ethernet) solo con DR e BDR. Due router "normali" (DROther) restano stabilmente in Two way (ramo "Nessuna adiacenza").
>> - **Ex start**: scelta di master e slave; **Exchange**: scambio dei Database Description; **Loading**: richieste (LSR) e ricezione (LSU) degli LSA mancanti; **Full**: database sincronizzati → i due sono **adiacenti**.
>>
>> Quindi: vicino ≠ adiacente. Gli LSA vengono scambiati solo fra router adiacenti.

---
## Slide 103 – Aree di routing

- Una rete può può essere suddiviso in «**Routing Area** (RA)» interconnesse da un backbone (Area 0)
	- ciascuna area risulta separata dalle altre per quanto riguarda lo scambio delle informazioni di routing e si comporta come un'entità indipendente (3° livello gerarchico di routing)
	- per interconnettere le aree vi devono essere router connessi a più aree e/o al backbone (almeno un router per area)
- Classificazione dei router secondo OSPF:
	- **Internal Router**: router interni a ciascuna area
	- **Area Border Router**: router che scambiano informazioni con altre aree
	- **Backbone Router**: router che si interfacciano con il backbone
	- **AS Boundary Router**: router che scambiano informazioni con altri AS usando rotte statiche o apprese da altri protocolli inclusi gli EGP

>> Perché le aree: il flooding degli LSA di topologia e il calcolo di Dijkstra restano confinati dentro l'area. Una variazione di un link in un'area non costringe i router delle altre aree a rifare lo Shortest Path, e la LSDB di ogni router contiene solo la topologia della propria area: meno memoria, meno CPU, meno traffico di controllo.
>>
>> Vincolo di progetto: ogni area non-backbone deve essere collegata all'Area 0 (tramite un ABR) e tutto il traffico inter-area transita per il backbone: la struttura fra aree è quindi a stella con centro nell'Area 0. Se un'area non è fisicamente connessa all'Area 0 si può usare un *virtual link* attraverso un'altra area.
>>
>> Un router può avere più ruoli contemporaneamente (es. un ABR è anche Backbone Router, perché ha almeno un'interfaccia nell'Area 0).

---
## Slide 104 – Esempio

![[RT04n-s096-1.png|600]]

>> Lettura della figura: l'AS a sinistra è diviso in tre Routing Area più l'Area 0. Il router del backbone collegato all'AS di destra è ASBR (parla con l'altro AS con un EGP) e allo stesso tempo Backbone Router. I router che hanno interfacce sia nell'Area 0 sia in un'altra area sono ABR + Backbone Router. La stub area non riceve le rotte esterne: le raggiunge con una rotta di default verso il proprio ABR.

---
## Slide 105 – Tipologie di LSA

![[RT04v3-s105-1.png|600]]

>> **DR** = *Designated Router*: su una rete multiaccesso con $n$ router, invece di avere $n(n-1)/2$ adiacenze (tutti con tutti) ogni router forma l'adiacenza solo con il DR (e con il BDR, il suo backup). La rete viene rappresentata come un nodo "virtuale", descritto dal DR con il Network-LSA, a cui tutti i router sono collegati. Le adiacenze passano così da $O(n^2)$ a $O(n)$: ad es. con $n=10$ si passa da 45 a $2(n-2)+1 = 17$ (con DR e BDR).
>>
>> Il tipo 4 serve perché il tipo 5 dice "la destinazione esterna X si raggiunge tramite l'ASBR Y", ma i router di un'altra area non conoscono la topologia che porta a Y: l'ABR annuncia con il tipo 4 il costo per raggiungere Y.

---
## Slide 106 – La raggiungibilità attraverso i confini delle aree?

![[RT04n-s099-1.png|600]]

Gli ABR non trasferiscono nelle altre aree i Router-LSA e i Network-LSA: la topologia di un'area rimane nascosta alle altre.

>> "Una singola area" per i tipi 3 e 4 significa che ogni Summary-LSA vive solo nell'area in cui l'ABR lo immette: per arrivare in un'altra area l'informazione non viene inoltrata così com'è, ma un ABR ne genera uno nuovo (vedi slide seguente). Il tipo 5, invece, è l'unico che viene propagato inalterato in tutto il dominio OSPF (escluse le aree stub). Il tipo 7 nasce dentro una NSSA, dove i tipi 5 non sono ammessi, e l'ABR della NSSA lo traduce in tipo 5 per il resto dell'AS.

---
## Slide 107 – Verso le rotte inter-area

- Un ABR appartiene ad almeno due aree e mantiene una LSDB distinta per ciascuna.
	- Esegue Shortest Path separatamente nelle diverse aree.
	- Dalle rotte calcolate ricava le destinazioni da annunciare al di fuori dell'area
- L'ABR origina Summary-LSA Type 3 per annunciare i prefissi raggiungibili da altre aree, eventualmente aggregandoli secondo la configurazione:
	- Può contenere anche un solo prefisso
	- Gli eventuali prefissi vengono aggregati se possibile in base alla configurazione
- Gli altri router apprendono destinazione e distanza, ma non la topologia dell'area remota.

Un Summary-LSA non è la copia di un Route-LSA proveniente da un'altra area: è un nuovo annuncio generato dall'ABR

>> ("Route-LSA" va letto come Router-LSA, tipo 1.)
>>
>> Esempio: l'ABR $B$ sta tra l'Area 1 e l'Area 0. Nell'Area 1 calcola con Dijkstra che il prefisso 10.1.0.0/16 dista 20. Nell'Area 0 immette un Summary-LSA "10.1.0.0/16, costo 20". Un router $R$ dell'Area 0 che dista 5 da $B$ calcola $5 + 20 = 25$ per raggiungere quel prefisso, senza sapere niente di come sia fatta l'Area 1.
>>
>> Se l'Area 1 usa prefissi contigui, l'ABR può anche **aggregarli** in un unico Summary-LSA (route summarization), riducendo ulteriormente le informazioni propagate.

---
## Slide 108 – Tipologia di rotte

- Rotta intra-area
	- calcolate dalla LSDB dell'area usando gli LSA 1 e 2.
- Rotta inter-area
	- apprese mediante gli LSA 3 generati dagli ABR; è nota la raggiungibilità del prefisso, non la topologia dell'area remota
- Rotta esterna
	- apprese mediante LSA 5 originati da un ASBR, oppure mediante LSA 7 all'interno di una NSSA

- Nella scelta della rotta verso una destinazione l'ordine di preferenza è : rotta intra-area, rotta inter-area, rotta esterna.

>> Se la stessa destinazione è raggiungibile con rotte di tipo diverso, OSPF preferisce sempre, indipendentemente dal costo: intra-area > inter-area > esterna. Il costo serve a scegliere solo fra rotte dello stesso tipo.

---
## Slide 109 – Calcolo delle rotte inter-area

![[RT04n-s103-1.png|550]]

- R1 conosce il percorso verso B mediante Area0 e Area 2: costo 9.
- R1 annuncia all'Area 1, mediante un LSA Type 3, la raggiungibilità della network fra R2 e B con costo 9.
- A sa che R1 è raggiungibile con costo 4
- A calcola la distanza da B facendo 4+9 = 13

A non conosce la topologia completa dell'Area 2.
Conosce il costo per raggiungere R1 e il costo verso B annunciato da R1

>> Il 9 è il costo calcolato da R1 (ABR fra Area 1 e Area 0): 3 fino a R2 + 6 fino a B. È il meccanismo "alla distance vector" della slide successiva: A somma il proprio costo verso l'ABR al costo annunciato, esattamente come in Bellman-Ford, senza vedere la topologia dell'Area 0 e dell'Area 2.

---
## Slide 110 – Link state o distance vector

- OSPF è un protocollo link state.
- Nel calcolo delle rotte
	- intra-area si basa sulla conoscenza della topologia,
	- inter-area utilizza informazioni aggregate di destinazione e costo annunciate dagli ABR
- Questo secondo meccanismo presenta caratteristiche simili al Distance Vector
	- Ci si affida alla conoscenza trasferita da un terzo e non appresa in modo diretto

| All'interno di un'area | Fra aree diverse |
|---|---|
| Vengono descritti router e link | Vengono annunciati prefissi e metriche |
| Tutti hanno la stessa topologia dell'area | La topologia remota rimane nascosta |
| Ogni router esegue SP sulla LSDB | Il router aggiunge il proprio costo verso l'ABR |
| Il risultato è una **rotta intra-area** | Il risultato è una **rotta inter-area** |

>> La somiglianza con il Distance Vector è proprio l'equazione di Bellman-Ford: $D_R(\text{dest}) = \min_{\text{ABR}} \{\, c(R,\text{ABR}) + D_{\text{ABR}}(\text{dest}) \,\}$, dove $c(R,\text{ABR})$ viene da Dijkstra sulla propria area e $D_{\text{ABR}}(\text{dest})$ è il costo annunciato nel Summary-LSA.
>> I problemi tipici del DV (cicli, count to infinity) sono evitati dalla struttura gerarchica: tutte le aree comunicano solo attraverso l'Area 0 (topologia a stella fra aree) e un ABR non ri-annuncia nell'Area 0 i Summary-LSA che ha ricevuto da un'area non-backbone.

---
## Slide 111 – Tipologia di aree

- Area normale
	- Accetta LSA intra-area, inter-area ed esterni
- Stub area
	- Informazioni intra-area e inter-area; niente LSA esterni Type 5;
	- default annunciata dall'ABR per le destinazioni esterne
	- I requisiti di memoria dei router sono ridotti
- Totally stubby area
	- Informazioni intra area;
	- Normalmente una default dall'ABR
- Not so stubby area
	- Stub area che importa alcuni route esterni
	- Consente di originare informazion esterne tramite LSA di tipo 7
	- Uno dei router dell'area è connesso a un AS diverso e diventa un ASBR

>> Riassunto in termini di LSA ammessi:
>>
>> | Tipo di area | LSA 1, 2 | LSA 3 | LSA 4, 5 | LSA 7 |
>> |---|---|---|---|---|
>> | Normale | sì | sì | sì | no |
>> | Stub | sì | sì (+ default) | no | no |
>> | Totally stubby | sì | solo default | no | no |
>> | NSSA | sì | sì | no | sì |
>>
>> La *totally stubby* è una stub area in cui l'ABR blocca anche i Summary-LSA (tipo 3): dentro l'area si conoscono solo le rotte intra-area più una rotta di default verso l'ABR. Ha senso quando l'area ha un'unica uscita (o poche), perché allora conoscere i dettagli delle destinazioni esterne non cambierebbe la scelta del next hop.

---
## Slide 112 – Da ricordare

OSPF è un protocollo **Link State**: ogni router ricostruisce la topologia della propria area

Hello, adiacenze e sincronizzazione permettono di costruire LSDB coerenti; il flooding li mantiene aggiornati

Dijkstra calcola i percorsi minimi e permette di derivare le rotte.

La suddivisione in aree **migliora la scalabilità**, introducendo annunci di raggiungibilità tramite ABR.

>> Rispetto a RIP (distance vector): OSPF converge più rapidamente, non soffre di count to infinity, usa costi configurabili sui link invece del semplice numero di hop (e non ha il limite di 15 hop), e scala grazie alle aree; il prezzo è maggiore complessità, memoria (LSDB) e CPU (Dijkstra).

---
## Slide 113 – Com'è implementata effettivamente la struttura gerarchica di Internet?

Com'è implementata effettivamente la struttura gerarchica di Internet?

>> OSPF (come RIP) è un protocollo di routing interno a un Autonomous System (IGP). Il livello gerarchico superiore, cioè l'instradamento fra AS diversi, è affidato a un protocollo EGP: in Internet si usa BGP.

---
## Slide 114 – Internet = rete di reti

![[RT04n-s107-1.png|520]]

>> Stessa figura della [[#Slide 30 – Internet = rete di reti|slide 30]]: router, LAN e collegamenti visti "in piano", senza alcuna struttura amministrativa.

---
## Slide 115 – Internet = sistemi interconnessi

![[RT04n-s108-1.png|520]]

>> Rispetto alla [[#Slide 31 – Internet = network interconnesse|slide 31]] ora i domini hanno un nome: AS1…AS5 sono gli **Autonomous System**, definiti nelle slide seguenti.

---
## Slide 116 – Internet: grafo semplificato

![[RT04n-s109-1.png|520]]

>> Il grafo semplificato della [[#Slide 32 – Internet: grafo semplificato|slide 32]] con gli AS etichettati: le linee continue fra AS diversi sono gestite dagli EGP, le tratteggiate interne dagli IGP.

---
## Slide 117 – Il routing a livello globale

- Routing gerarchico:
	- Identificazione di sottoinsiemi di rete autonomi per quanto riguarda l'instradamento
	- Identificazione di punti di contatto fra i sottoinsiemi
- Due tipi di grafo
	- Topologia dei sottoinsiemi della rete
		- Grafi di dettaglio
	- Topologie dei sottoinsiemi interconnessi
		- Grafo semplificato
			- I sottoinsiemi sono i nodi
			- I collegamenti fra i sottoinsiemi sono gli archi
	- <u>A ciascun livello non si ha conoscenza dell'altro</u>

>> È la stessa idea delle aree OSPF portata un livello più su: dentro un AS si usa il grafo di dettaglio (IGP), fra AS il grafo semplificato in cui ogni AS è un nodo (EGP). Nessun livello vede i dettagli dell'altro, ed è questo che rende il routing di Internet scalabile.

---
## Slide 118 – Autonomous Systems

- I sottoinsiemi in cui viene suddivisa logicamente la rete Internet sono detti
	**Autonomous Systems (AS)**
- Cosa è un AS?
- La definizione classica di AS è
	- un insieme di router gestiti da un'unica amministrazione
	- che utilizza
		- un solo protocollo di routing
		- un'unica logica per definire le metriche
- Questa definizione *era applicabile* nella prima fase di sviluppo di Internet ma è diventata *troppo limitata* con l'evolversi della rete

---
## Slide 119 – I protocolli di routing

- Un AS deve implementare il routing al suo interno
	- Lo fa utilizzando uno o più protocolli di routing detti Interior Gateway protocols (IGP)
- Un AS deve comunicare con gli altri AS per implementare il routing fra AS
	- Lo fa utilizzando un protocollo di routing pensato appositamente detto Exterior Gateway Protocol (EGP)

>> IGP visti nel corso: RIP (distance vector) e OSPF (link state). L'EGP usato oggi in Internet è **BGP** (Border Gateway Protocol, versione 4), di tipo *path vector*.

---
## Slide 120 – RFC 1930

- L'evoluzione di Internet e l'introduzione del CIDR richiedono una definizione più estensiva dell'AS
- Oggi un AS è
	- Un insieme di prefissi di rete IP (network IP definite secondo la logica CIDR)
	- Gestito in modo unitario e con una ben definita politica di routing
		- Questo significa che chi gestisce l'AS ha definito in modo chiaro al suo interno come raggiungere le network IP
- Quindi l'AS
	- **Può**
		- Avere uno o più enti gestori
		- Utilizzare una o più tecnologie
	- Ma **deve**
		- Avere un'unica logica che garantisce la connettività con il resto del mondo

>> Il passaggio chiave: l'AS non è più definito da *chi* gestisce i router o da *quale* IGP usa, ma dall'avere **un'unica politica di routing verso l'esterno**. Ogni AS è identificato da un numero (ASN), assegnato dai registri regionali (in Europa il RIPE NCC).

---
## Slide 121 – AS

![[RT04v3-s121-1.png|600]]

>> La figura riprende lo schema delle aree OSPF dentro un AS. A sinistra c'è un AS diviso in tre aree collegate all'Area 0 (backbone). A destra c'è un secondo AS, di cui si vede solo il router di confine. Il router dell'Area 0 collegato all'altro AS ha due ruoli: è **Backbone Router**, perché sta nell'Area 0, ed è **AS Boundary Router (ASBR)**, perché scambia rotte con l'altro AS tramite un protocollo EGP (BGP).
>>
>> La suddivisione in aree è un fatto interno all'AS: dall'esterno l'AS appare come un'unica entità, che annuncia i propri prefissi tramite l'ASBR.

---
## Slide 122 – Esempio

- Università di Bologna -> 137.204.0.0/16
- Politecnico di Torino -> 130.192.0.0/16
- Entrambi
	- sono connessi al GARR, la rete italiana degli enti di ricerca
	- comunicano con il resto del mondo tramite il GARR
- Non c'è bisogno di avere un AS per ogni ateneo e infatti il GARR (e tutte le reti connesse ad esso) costituiscono un unico AS (AS137)

---
## Slide 123 – Internet Routing Registries

- Database contenenti le politiche di routing degli AS

![[RT04n-s115-1.png|450]]

>> Nella figura: la ricerca di AS137 sul registro **RADb** (Routing Assets Database), con il risultato riportato per esteso nella slide seguente.

---
## Slide 124 – AS 137

![[RT04n-s116-1.png|600]]

- Regole di Import: Da quali AS posso ricevere informazioni di routing (con scambio di path vector BGP ad esempio)
- Regole di Export: A quali AS comunico informazioni di routing (inviando path vector BGP ad esempio)

>> Lettura dell'oggetto *aut-num*: AS137 è **ASGARR** (Consortium GARR). Le righe `import` dicono da chi accetta rotte (da AS20965, cioè GEANT, e da AS1299) e con che preferenza (`pref`: valore più basso = più preferito, quindi per IPv4 unicast le rotte di AS1299, pref=100, sono preferite a quelle di GEANT, pref=300). Le righe `export` dicono cosa annuncia e a chi: a GEANT annuncia `AS-GARRTOGEANT`, ad AS1299 annuncia `AS-GARR`, cioè gli insiemi di prefissi del GARR. Le righe `mp-import`/`mp-export` sono le stesse regole per multicast e IPv6.

---
## Slide 125 – AS20965 Regole di Import

![[RT04n-s117-1.png|300]]

GEANT è la rete degli enti di ricerca Europea
Ha interconnessioni con le principali reti mondiali
Importa ed esporta informazioni di routing verso numerosi AS

1. Le network IP di GARR sono inviate a GEANT
2. GEANT le invia alle altre reti di trasporto mondiali

>> La prima riga dell'elenco (`from AS137 accept AS-GARRTOGEANT`) è la controparte dell'`export` visto nella slide precedente: GARR annuncia quei prefissi e GEANT li accetta. Le politiche dei due AS devono essere coerenti perché la rotta si propaghi.

---
## Slide 126 – Interconnessione fra AS

![[RT04n-s118-1.png|520]]

>> Tre tipi di percorso nella figura:
>> - **rotta intra-dominio** (tratteggiata dentro AS4): gestita dall'IGP dell'AS;
>> - **interconnessione diretta (peering)** fra AS2 e AS4 (in rosso): i due AS si scambiano traffico direttamente;
>> - **rotta inter-dominio indiretta** da AS1 ad AS2 (in azzurro, tratteggiata): non c'è un collegamento diretto, quindi il traffico passa per AS5, che fa da AS di *transito*.

---
## Slide 127 – Internet Service Provider

- Un Internet Service Provider (ISP) è un'organizzazione che fornisce servizi per l'utilizzo di Internet
- Servizi:
	- Connettività
	- Web, mail hosting
	- Registrazione e noleggio di numeri IP e nomi di dominio
	- …
- Dal punto di vista giuridico un ISP può essere:
	- Privato con finalità di lucro
	- Privato senza finalità di lucro
	- In forma cooperativa
	- …
- Tipicamente un ISP si registra come AS

---
## Slide 128 – Internet region

- Gli AS non sono necessariamente vincolate ad aree geografiche e/o confini nazionali
- Internet region
	- Una porzione di Internet contenuta in una specifica area geografica
		- Tipicamente una nazione o un insieme di nazioni
- Relazione fra Internet Region e ISP
	- Un'Internet Region è solitamente servita da più ISP
	- Uno stesso ISP può servire più Internet Region

---
## Slide 129 -> 130 – Classificazione degli ISP

- Tier 1 ISP
	- Un ISP che all'interno di una "Internet Region" raggiunge tutte le reti senza accedere a servizi a pagamento di altri
	- In breve un soggetto che possiede un'infrastruttura di rete che copre tutta una nazione
		- Tipicamente il gestore "incumbent"
	- Gli ISP Tier 1 possono essere
		- <u>Nazionali</u> quando servono una sola Internet regione
		- <u>Globali</u> quando hanno punti di accesso in paesi e continenti diversi

- Tier 2
	- Un ISP che raggiunge l'Internet globale acquistando servizi di interconnessione da un Tier 1 ISP
	- Un ISP Tier 2 può avere interconnessioni anche con più di un ISP Tier 1 nella stesse o in diverse Internet Region
- Tier 3
	- Un ISP che serve un'area abbastanza delimitata
		- ISP locali o regionali
	- Per raggiungere l'Internet globale acquista servizi di interconnessione da un ISP Tier 2
	- Può avere interconnessioni dirette (peering) con altri ISP Tier 3 che servono la stessa zona o zone limitrofe

>> *Incumbent* = l'ex operatore monopolista nazionale, che possiede storicamente l'infrastruttura (in Italia TIM). In sintesi: il Tier 1 non paga nessuno per il transito, il Tier 2 paga un Tier 1, il Tier 3 paga un Tier 2.

---
## Slide 131 – In sintesi

![[RT04n-s123-1.png|500]]

>> La gerarchia dentro una Internet Region: i Local ISP (Tier 3) si appoggiano ai Tier 2, che a loro volta si collegano al Tier 1. Ogni linea verso l'alto è un collegamento con un ISP di livello superiore.

---
## Slide 132 – In Italia

- Il principale ISP Tier 1 è Telecom Italia Sparkle
	- Da RadB

```
aut-num: AS6762
as-name: SEABONE-NET
descr: TELECOM ITALIA SPARKLE S.p.A.
remarks: International Internet Backbone
```

---
## Slide 133 – In sintesi

![[RT04n-s127-1.png|500]]

>> Stessa gerarchia della [[#Slide 131 – In sintesi|slide 131]], con i due tipi di relazione evidenziati: le linee verso il livello superiore sono **interconnessioni a pagamento** (transito), la linea rossa fra due ISP locali dello stesso livello è un **peering**.

---
## Slide 134 – ISP locali e POP

- Un ISP locale fornisce il servizio a gruppi di utenti co-localizzati (singola città, area industriale ecc.)
- Realizza un'infrastruttura con router e switch in un punto della zona detto <u>Point of Presence</u> o <u>POP</u>
- Come collega gli utenti a quella infrastruttura?
	- Riutilizzo del vecchio collegamento telefonico in rame (ADSL e simili)
	- Fibra ottica (FTTH)
	- Collegamento radio (Wi-Fi e simili)
	- Soluzioni miste (rame+fibra ad esempio nel FTTC)

>> FTTH = *Fiber To The Home*, fibra fino a casa; FTTC = *Fiber To The Cabinet*, fibra fino all'armadio di strada e poi rame fino all'utente.

---
## Slide 135 – Esempio

![[RT04n-s129-1.png|450]]

>> Un ISP locale con tre POP collegati fra loro: ognuno serve gli utenti della propria zona con una tecnologia d'accesso diversa (ADSL, ADSL/FTTH, Wi-Fi).

---
## Slide 136 – Indirizzamento

- Un ISP dispone di un sottoinsieme di numeri IP da utilizzare per i suoi clienti
	- Se sono consecutivi possono avere lo stesso prefisso quindi unico Network ID
	- Se non sono consecutivi deve gestire più prefissi quindi più Network ID
- In funzione della dimensione (numero di utenti e distanze geografiche) la rete dell'ISP può essere composta da una o più LAN

>> Avere un solo prefisso aggregato (CIDR) significa annunciare una sola rotta agli altri AS, quindi tabelle di routing più piccole.

---
## Slide 137 – Interconnessione

- Come scambiano traffico ISP che coprono la medesima zona geografica
- Interconnettere fra loro tutti i POP?
	- Numerosi collegamenti
	- Complessità di gestione del routing
		- Rotte specifiche per ogni POP in funzione dei numeri a loro connessi
	- Percorsi di lunghezza minima
- Interconnettere uno o pochi POP?
	- Minor numero di collegamenti
	- Routing semplificato
	- Percorsi potenzialmente più lunghi

---
## Slide 138 – Non utilizzata

![[RT04n-s132-1.png|500]]

>> Prima soluzione della slide precedente: due ISP (i due piani, POP verdi e rossi) con i POP collegati a coppie (linee tratteggiate). Il traffico fra due utenti (quadratini gialli) segue il percorso più corto, ma servono molti collegamenti e un routing complicato: per questo in pratica **non viene utilizzata**.

---
## Slide 139 – Peering diretto tramite due POP

![[RT04n-s133-1.png|500]]

>> Seconda soluzione: i due ISP sono collegati in un solo punto. Il percorso fra i due utenti (linea punteggiata) diventa più lungo perché deve passare dai due POP di interconnessione, ma i collegamenti sono pochi e il routing è semplice.

---
## Slide 140 – Il Peering

- Relazione di peering
	- Interconnessione fra due AS stabilita al fine di scambiarsi traffico
		- Con operatore di contenuti (Amazon, Aruba, Netflix)
- La relazione di peering non ha carattere economico
	- Gli AS non devono pagarsi reciprocamente per lo scambio di traffico
	- I loro introiti rimangono limitati alla tariffazione dei rispettivi utenti
- Tipicamente il peering avviene fra ISP del medesimo livello

>> Peering e transito sono le due relazioni possibili fra AS: nel **transito** un AS paga un altro AS (di livello superiore) per raggiungere tutta Internet; nel **peering** due AS si scambiano gratuitamente solo il traffico diretto alle rispettive reti. Conviene a entrambi quando i volumi scambiati sono simili, perché fa risparmiare sul transito a pagamento.

---
## Slide 141 – Peering policy

- Ristretta
	- Devi chiedere di fare peering e la richiesta va approvata
- Aperta
	- Approvato di default

---
## Slide 142 – Da Tier 3 a Tier 1

- Teoricamente ogni ISP dovrebbe fare peering con ogni altro ISP con cui vuole scambiare traffico
	- Ogni AS dovrebbe essere connesso con ogni altro AS
		- Gran numero di collegamenti dedicati fra POP
- Alcuni ISP svolgono la funzione di AS di transito per interconnettere con una topologia "a stella" gli ISP
	- Gli ISP specializzati nel fornire servizi di transito sono anche detti Network Service provider (NSP)
- Talvolta gli NSP coincidono con ISP Tier 1

>> È lo stesso ragionamento della stella equivalente con il DR in OSPF ([[#Slide 89 – Tipologie di rete|slide 89]]): con N AS una maglia completa richiede N(N−1)/2 collegamenti, una stella intorno a un AS di transito solo N.

---
## Slide 143 – Internet Exchange

- Per favorire l'interconnessione fra ISP e NSP (ssia fra i loro AS) esistono gli IXP
- Internet Exchange Point (IX o IXP)
	- Infrastrutture attraverso le quali gli ISP possono stabilire relazioni di peering
	- L'IXP è costruito per permettere l'interconnessione diretta degli AS senza utilizzare reti di terze parti
	- L'IXP fornisce soluzioni di connettività con specifiche garanzie di qualità (disponibilità elevata, sicurezza fisica, banda garantita ecc.)
- Un elenco degli IXP nel mondo si può trovare alla pagina `www.internetexchangemap.com`

>> In pratica un IXP è un grande switch (di livello 2) in un data center neutrale a cui i router di confine dei vari AS si collegano: con un solo collegamento fisico un AS può fare peering con molti altri AS, ciascuno tramite una propria sessione BGP.
>>
>> **Riassunto slide 136–143: come si collegano fra loro gli ISP?**
>> 1. **Punto di partenza (136):** un ISP gestisce un blocco di IP (meglio un solo prefisso, quindi una sola rotta da annunciare) e una rete di POP.
>> 2. **Due ISP nella stessa zona (137–139):** il compromesso fra le due soluzioni.
>>
>> | | Tutti i POP collegati (138) | Uno o pochi POP collegati (139) |
>> |---|---|---|
>> | Collegamenti | molti | pochi |
>> | Routing | complesso (rotte per ogni POP) | semplice |
>> | Percorsi | i più brevi | più lunghi |
>> | Nella pratica | **non usata** | usata (peering diretto) |
>>
>> 3. **Tanti ISP (142–143):** invece della maglia completa ($N(N-1)/2$ collegamenti):
>> 	- **transito**: una stella intorno a un AS di transito (NSP, spesso Tier 1), con $N$ collegamenti, a pagamento;
>> 	- **IXP**: un punto d'incontro neutrale (es. MIX) dove molti AS fanno peering diretto con un solo collegamento fisico.
>>
>> Filo conduttore: il compromesso **numero di collegamenti ↔ semplicità del routing ↔ lunghezza dei percorsi**, che si ripete alle due scale.

---
## Slide 144 – IXP in Italia

- MIX (Milan Internet eXchange)
	- Milano, Palermo, Catania
- NaMeX (Nautilus Mediterranean eXchange point
	- Roma
- TOP-IX (Torino Piemonte Internet Exchange)
	- Torino
- Tuscany Internet eXchange
	- Firenze
- PCIX
	- Piacenza

---
## Slide 145 – EGP come funzionano?

EGP come funzionano?
Why the protocol BGP seems to be the substitutor of the AGP EGP in the slide 137 in the PDF 3
---
## Slide 146 – Exterior Gateway Protocols

- I protocolli di tipo EGP sono diversi da quelli di tipo IGP
- All'interno di un AS si persegue l'ottimizzazione dei percorsi
- Nel routing tra diversi AS si deve tener conto anche (e soprattutto) delle **politiche di instradamento**
	- ogni AS vuole mantenere una propria autonomia ed indipendenza dagli altri e non vuole subire decisioni prese da altri
	- alcuni AS non vogliono permettere ad altri AS di instradare il traffico attraverso le loro reti
	- in altri casi bisogna operare secondo accordi internazionali
- Attualmente il protocollo EGP dominante è il **Border Gateway Protocol** (BGP)

>> In sintesi: un IGP (RIP, OSPF) cerca il percorso *migliore* secondo una metrica comune a tutto l'AS. Un EGP deve invece trovare un percorso *ammesso* dagli accordi commerciali fra AS (cliente/fornitore, peering), anche se non è il più corto. Per questo fra AS non si usa una metrica condivisa: ogni AS ragiona con le proprie regole.

---
## Slide 147 – BGP: Border Gateway Protocol

- **BGP** è stato concepito come sostituto di EGP
- Oggi è in uso la versione 4 (RFC 4271)
- I router BGP si scambiano informazioni attraverso connessioni TCP (porta 179) chiamate **sessioni BGP**
	- le comunicazioni sono affidabili
	- funzionalità di controllo degli errori demandate allo strato di trasporto → BGP più semplice
- Si distinguono due tipi di sessioni BGP:
	- sessioni BGP **esterne** (**eBGP**) instaurate tra router BGP appartenenti ad AS diversi
	- sessioni BGP **interne** (**iBGP**) instaurate tra router BGP appartenenti allo stesso AS
- Le informazioni scambiate riguardano la raggiungibilità di reti IP secondo lo scema classless (CIDR)

>> Attenzione al doppio significato di "EGP": qui indica il vecchio protocollo specifico chiamato proprio *Exterior Gateway Protocol* (RFC 904, anni '80), non la categoria dei protocolli EGP di cui BGP fa parte.
>>
>> Ruolo delle due sessioni:
>> - **eBGP**: di solito fra due router di bordo direttamente collegati, di AS diversi. Serve a imparare e annunciare le rotte verso l'esterno.
>> - **iBGP**: fra router dello stesso AS. Serve a distribuire *dentro* l'AS le rotte esterne imparate dai router di bordo, così tutti i router di bordo hanno la stessa visione. Non sostituisce l'IGP: la raggiungibilità interna (ad esempio il next hop) resta compito di OSPF o RIP.
>>
>> Su iBGP l'AS_PATH non viene modificato. Per evitare cicli dentro l'AS, una rotta imparata via iBGP non viene ri-annunciata ad altri peer iBGP. Per questo servono sessioni iBGP fra tutte le coppie di router (full mesh) oppure dei *route reflector*.

---
## Slide 148 – BGP: interconnessione tra AS

![[RT04v3-s148-1.png|600]]

- Cinque AS (AS1 … AS5), ognuno con la propria rete interna
- **BGP** sui collegamenti fra i router di bordo di AS diversi

---
## Slide 149 – BGP: sessioni interne ed esterne

![[RT04v3-s149-1.png|600]]

- **eBGP**: linee continue fra router di bordo di AS diversi
- **iBGP**: linee tratteggiate fra router di bordo dello stesso AS

>> Le linee tratteggiate sono sessioni TCP logiche, non per forza link fisici diretti: i due router di AS4 possono essere lontani e comunicare attraverso altri router interni, raggiunti tramite l'IGP. In AS5, che ha tre router di bordo, le sessioni iBGP formano un full mesh (triangolo), come richiesto dalla regola vista alla slide 147.

---
## Slide 150 – Path Vector

- BGP è un protocollo di tipo **Path Vector**
	- nel **vettore dei percorsi** (path) si elencano tutti gli AS da attraversare per raggiungere una destinazione
		- Elencati dal primo all'ultimo
	- risolve il problema dei percorsi ciclici
	- più consono a definire le politiche di routing tra AS rispetto alla semplice distanza
- Come si evitano i cicli:
	- quando un router di bordo di un AS riceve un path vector controlla se il suo AS è già elencato al suo interno
	- se lo è, esiste un loop e quel path vector non viene considerato
	- altrimenti il path vector viene aggiornato con l'indicazione dell'AS di appartenenza e comunicato ai vicini, in quanto considerato corretto

>> Rispetto al distance vector (RIP), al posto della sola distanza si annuncia l'intera sequenza di AS. In questo modo un AS riconosce subito un percorso che passa già per sé stesso, e il conteggio all'infinito non si verifica.
>>
>> "Dal primo all'ultimo" significa che in testa c'è l'AS più vicino (l'ultimo che ha annunciato la rotta) e in fondo l'AS di origine della destinazione. Ogni AS, quando ri-annuncia la rotta via eBGP, aggiunge il proprio numero **in testa** (*prepend*).
>>
>> Il controllo dei cicli avviene a livello di AS, non di singolo router: un path vector non dice nulla sul percorso dentro ogni AS, che è deciso dal suo IGP.
 
---
## Slide 151 – Routing policies

- Come si applicano le politiche di routing:
	- si comunicano ai vicini solo i path vector relativi alle destinazioni verso le quali si vuole permettere il transito (**export policies**)
	- dal path vector è possibile risalire agli AS da attraversare per raggiungere una destinazione e possono essere applicate la **import policies**:
		- se nel path vector ricevuto da un vicino sono presenti uno o più AS incompatibili con le politiche di routing stabilite, esso viene ignorato
		- Possono essere assegnate preferenze specifiche a certe rotte in base agli AS da attraversare
- L'approccio basato sul percorso invece che sulla distanza non richiede che tutti i router usino la stessa metrica → possibilità di scelte arbitrarie
- Elevati requisiti di memoria nei router per mantenere le tabelle

>> Esempio tipico di export policy: un AS *stub* (cliente) collegato a due fornitori non ri-annuncia al fornitore A le rotte imparate dal fornitore B. Altrimenti diventerebbe un AS di transito fra i due e pagherebbe traffico che non è suo.
>>
>> Esempio di import policy: si scarta ogni rotta il cui AS_PATH contiene un AS non affidabile, oppure si dà una preferenza più alta (LOCAL_PREF, slide 159) alle rotte ricevute da un cliente rispetto a quelle ricevute da un fornitore.
>>
>> Sulla memoria: la tabella BGP completa di Internet contiene ormai circa un milione di prefissi IPv4 (più quelli IPv6), e per ognuno un router può tenere più rotte alternative, con l'AS_PATH e gli altri attributi.

---
## Slide 152 -> 154 – BGP: scambio di path vector

![[RT04v3-s152-1.png|600]]

- AS3 contiene le reti 151.16.0.0/16, 151.17.0.0/16, 151.18.0.0/15
- AS2 contiene 80.128.0.0/12, AS4 contiene 211.47.64.0/21
- AS3 annuncia ad AS5:
	- AS-PATH
	- 151.16.0.0/14
	- AS3

>> AS3 non annuncia le tre reti separate ma un unico prefisso **aggregato** (supernetting CIDR). Verifica: 151.16.0.0/14 copre gli indirizzi da 151.16.0.0 a 151.19.255.255, cioè 151.16/16 + 151.17/16 + 151.18/15 (che a sua volta copre 151.18 e 151.19). L'aggregato coincide esattamente con l'unione delle tre reti.

![[RT04v3-s153-1.png|600]]

- AS5 propaga l'informazione al suo interno (frecce sulle sessioni iBGP) e la annuncia ad AS1, AS2 e AS4:
	- AS-PATH
	- 151.16.0.0/14
	- AS5
	- AS3

>> Semplificazione della figura: il box con "AS5 AS3" è disegnato anche vicino alle frecce *interne* ad AS5. In BGP reale, su iBGP l'AS_PATH resta "AS3", e AS5 viene aggiunto in testa solo quando la rotta esce verso un altro AS via eBGP (verso AS1, AS2, AS4).

![[RT04v3-s154-1.png|600]]

- In AS1 l'informazione passa via iBGP all'altro router di bordo, che la annuncia ad AS5:
	- AS-PATH
	- 151.16.0.0/14
	- AS1
	- AS5
	- AS3
- AS2 annuncia ad AS4:
	- AS-PATH
	- 151.16.0.0/14
	- AS2
	- AS5
	- AS3
- AS2 annuncia ad AS4 la propria rete:
	- AS-PATH
	- 80.128.0.0/12
	- AS2
- AS4 annuncia ad AS2 la propria rete:
	- AS-PATH
	- 211.47.64.0/21
	- AS4
- AS4 annuncia ad AS2:
	- AS-PATH
	- 151.16.0.0/14
	- AS4
	- AS5
	- AS3

>> Cosa succede a questi annunci:
>> - **AS1 → AS5** con "AS1 AS5 AS3": AS5 trova il proprio numero nel path, quindi riconosce il ciclo e **scarta** l'annuncio (regola della slide 150).
>> - **AS2 → AS4** con "AS2 AS5 AS3": non c'è ciclo, ma AS4 conosce già "AS5 AS3" (2 AS) direttamente da AS5. A parità di altri criteri sceglie il percorso più corto e tiene l'altro come alternativa.
>> - **AS4 → AS2** con "AS4 AS5 AS3": vale lo stesso discorso, perché AS2 preferisce "AS5 AS3".
>>
>> Si vede anche l'export policy: se AS1 o AS2 fossero AS stub (clienti di AS5), di norma *non* ri-annuncerebbero ad altri le rotte imparate da AS5, per non diventare AS di transito. La figura mostra invece il comportamento "senza politiche", per illustrare la propagazione e il controllo dei cicli.

---
## Slide 155 – BGP: tipi di messaggio

- **Open**: primo messaggio trasmesso quando viene attivata una connessione verso un router BGP vicino, contiene
	- informazioni di identificazione dell'AS di chi trasmette
	- durata del timeout per considerare un vicino non più attivo
	- dati di autenticazione
- **Update**: contiene il path vector e i relativi attributi
- **Notification**: messaggio di notifica di errori e/o di chiusura della connessione
- **Keepalive**: non contiene informazioni aggiuntive, ma è usato per comunicare ad un router BGP vicino, in assenza di nuove informazioni di routing, che il trasmettitore è comunque attivo, anche se silente

>> Dettagli utili:
>> - L'**Open** contiene versione (4), numero di AS, *Hold Time* (il timeout), *BGP Identifier* (router ID) e parametri opzionali. Nel BGP-4 attuale il campo di autenticazione non c'è più: la sessione si protegge a livello TCP (opzione MD5 o TCP-AO).
>> - L'**Update** serve sia ad annunciare nuove rotte (NLRI + attributi) sia a **ritirarle** (campo *withdrawn routes*). BGP è incrementale: dopo lo scambio iniziale della tabella si inviano solo le variazioni, non aggiornamenti periodici come in RIP.
>> - Il **Keepalive** si invia di solito ogni 1/3 dell'Hold Time (valori tipici 60 s e 180 s). Se entro l'Hold Time non arriva nessun messaggio, il vicino è considerato non attivo e le sue rotte vengono rimosse.
>> - Dopo una **Notification** la sessione TCP viene chiusa.

---
## Slide 156 – Attributi

- A ciascun path vector sono associati degli **attributi** che ne specificano la natura (ad es. il "path" è un attributo)
- Un determinato attributo può essere:
	- **well-known**: riconoscibile da tutte le implementazioni BGP, deve essere inoltrato assieme al path vector (dopo un eventuale aggiornamento)
		- **mandatory**: deve essere presente nel path vector
		- **discretionary**: può anche non essere indicato
	- **optional**: può non essere riconosciuto da alcuni router
		- **transitive**: deve essere inoltrato anche se non riconosciuto
		- **non-transitive**: deve essere ignorato se non riconosciuto
	- **partial**: si tratta di un attributo optional-transitive che è stato ritrasmesso senza modifiche da un router perché non lo ha riconosciuto (indica se un determinato path vector è stato riconosciuto o meno da tutti i router attraversati)

>> Esempi delle quattro categorie:
>>
>> | Categoria | Attributi |
>> |---|---|
>> | well-known mandatory | ORIGIN, AS_PATH, NEXT_HOP |
>> | well-known discretionary | LOCAL_PREF, ATOMIC_AGGREGATE |
>> | optional transitive | COMMUNITY, AGGREGATOR |
>> | optional non-transitive | MULTI_EXIT_DISC (MED) |
>>
>> "Partial" non è una quarta categoria: è un bit (flag) nell'intestazione dell'attributo, che si accende quando un router ha inoltrato un attributo optional transitive senza capirlo.

---
## Slide 157 – Esempi

- **Origin** (Code = 1): è well-known mandatory
	- **0 = IGP**: l'informazione è stata ottenuta direttamente dal protocollo di routing operante all'interno dell'AS in cui si trova la destinazione e per cui la si ritiene veritiera
	- **1 = EGP**: l'informazione è stata appresa dal protocollo EGP, che non funziona se vi sono cicli → un percorso caratterizzato da questo valore è peggiore di uno di tipo IGP
	- **2 = incomplete**: serve ad indicare che il percorso è stato determinato in altro modo (es. statico) oppure è utilizzato per marcare un percorso di AS che è stato troncato perché la destinazione è al momento non raggiungibile
- **AS path** (Code = 2): è well-known mandatory
	- consiste nell'elenco degli AS da attraversare lungo il percorso verso la destinazione
- **Next hop** (Code = 3): è well-known mandatory
	- indica l'indirizzo IP del router di bordo dell'AS che deve essere usato come next hop verso la destinazione specificata

>> Il "Code" è il *type code* dell'attributo nel messaggio Update. Qui "EGP" è di nuovo il vecchio protocollo omonimo. Nella scelta fra due rotte, a parità dei criteri precedenti, si preferisce l'ORIGIN più basso: IGP (0) < EGP (1) < incomplete (2). Oggi "incomplete" compare soprattutto per rotte ridistribuite da rotte statiche o direttamente connesse.
>>
>> NEXT_HOP: su eBGP è l'indirizzo del router di bordo vicino che ha annunciato la rotta. Su iBGP di norma viene inoltrato *invariato*, quindi i router interni devono saper raggiungere quell'indirizzo esterno tramite l'IGP (in alternativa il router di bordo si configura con *next-hop-self*).

---
## Slide 158 – Esempio: path vector

Prefisso considerato P = 203.0.113.0/24

![[RT04v3-s158-1.png|650]]

- AS 65030: Al suo interno si trova P. Origina la rotta per il prefisso
- AS 65020: riceve e riannuncia
- AS 65010: riceve e riannuncia

BGP Update generato da AS65030
- NLRI = 203.0.113.0/24
- AS_PATH = AS65030

BGP Update generato da AS65020
- NLRI = 203.0.113.0/24
- AS_PATH = AS65020 AS65030

BGP Update generato da AS65020
- NLRI = 203.0.113.0/24
- AS_PATH = AS65010 AS65020 AS65030

>> **Refuso**: il terzo update è generato da **AS65010** (che si aggiunge in testa), non da AS65020. È l'annuncio che AS65010 invia ai suoi vicini *successivi*: ciò che AS65010 *riceve* da AS65020 è "AS65020 AS65030".
>>
>> NLRI (*Network Layer Reachability Information*) è il prefisso annunciato. Il path cresce di un AS a ogni passaggio eBGP, con l'AS più recente in testa e l'origine (AS65030) sempre in fondo.
>>
>> I numeri usati sono "da documentazione": gli AS 64512–65534 sono riservati all'uso privato e 203.0.113.0/24 (TEST-NET-3) è riservato agli esempi.

---
## Slide 159 – Scelta del percorso

- Non è detto che il percorso più breve sia selezionato
- Dal punto di vista di AS 65300 per P = 203.0.113.0/24

| Rotta ricevuta | AS_PATH | LOCAL_PREF |
|---|---|---|
| Via AS 65100 | 65100 65300 | 100 |
| **Via AS 65200** | **65200 65350 65300** | **200** |

- AS 65300 sceglie la seconda rotta perché preferibile
	- LOCAL_PREF esprime una preferenza per ragioni amministrative/gestionali

>> **Incongruenza della slide**: entrambi gli AS_PATH terminano con 65300, quindi 65300 è l'AS di *origine* di P. Un AS che riceve un path contenente il proprio numero lo scarta come ciclo (slide 150), quindi AS 65300 non potrebbe valutare queste rotte. Il punto di vista corretto è quello di un altro AS (ad esempio un ipotetico AS X collegato sia ad AS 65100 che ad AS 65200) che riceve due rotte verso P, originato da AS 65300.
>>
>> **LOCAL_PREF** (well-known discretionary): non arriva dal vicino. Lo assegna l'AS stesso alle rotte che riceve via eBGP, con la sua import policy, e lo propaga solo al proprio interno via iBGP, così tutti i suoi router scelgono la stessa uscita. Vince il valore **più alto**: 200 > 100, quindi viene scelta la rotta via AS 65200, anche se il suo AS_PATH è più lungo (3 AS contro 2).
>>
>> Ordine semplificato del processo di decisione BGP: (1) LOCAL_PREF più alto, (2) AS_PATH più corto, (3) ORIGIN più basso, (4) MED più basso, (5) eBGP preferito a iBGP, (6) costo IGP minore verso il NEXT_HOP, (7) router ID più basso. La lunghezza del path conta solo se le preferenze locali sono uguali.

---
## Riassunto

>> **Concetti generali**
>> - Instradare significa scegliere il **next hop**. L'**algoritmo** calcola il percorso, il **protocollo** definisce come i router si scambiano le informazioni.
>> - Algoritmi **senza tabella** (flooding, random, deflection, source routing) e **con tabella** (fisso o dinamico a distanza minima).
>> - **Flooding**: ritrasmissione su tutte le uscite, robusto ma i pacchetti proliferano. Rimedi: non ritrasmettere sull'interfaccia di arrivo, identificativo (sorgente + numero di sequenza), TTL.
>>
>> **Router IP, RIB e FIB**
>> - Funzioni del router: **routing** (protocolli + algoritmi), **forwarding** (lookup e aggiornamento dell'header), **switching** fra interfacce, **trasmissione**.
>> - La **RIB** raccoglie i risultati di tutti i protocolli: prefisso, next hop e metrica, anche con più alternative. La **FIB**, derivata dalla RIB, ha una sola voce per prefisso (con l'interfaccia d'uscita), è usata per inoltrare ed è ottimizzata per il **longest prefix match**.
>>
>> **Grafi e routing gerarchico**
>> - La rete è un grafo pesato $G=(V,E)$ con $w(i,j)>0$ e $w=\infty$ se l'arco manca; il costo di un percorso è la somma dei pesi.
>> - **IGP** dentro un AS (distance vector → RIP, link state → OSPF), **EGP** fra AS: **BGP**, di tipo **path vector** (annuncia la sequenza di AS verso ogni destinazione), guidato soprattutto da politiche.
>>
>> **Distance vector**
>> - Ogni nodo invia periodicamente ai vicini le distanze stimate verso tutte le destinazioni note: $D_x(y)=\min_v\{c(x,v)+D_v(y)\}$ (Bellman-Ford distribuito).
>> - Problemi: cold start, convergenza lenta, **bouncing effect** (loop temporanei dopo un guasto), **count to infinity** (destinazione irraggiungibile, stime crescenti fino a $D_{max}$).
>> - **Perché accade**: il DV riporta solo la distanza, non il percorso né il next hop, e i vettori partono in modo indipendente. Un'informazione vecchia del vicino porta due router a scegliersi a vicenda come next hop: ciclo.
>> - Rimedi: **split horizon** (X non si annuncia al vicino usato come next hop verso X; con *poisonous reverse* gli si annuncia con distanza ∞) e **triggered update**. Non bastano con loop di tre o più nodi.
>>
>> **RIP**
>> - Distance vector (RFC 1058; v2 RFC 2453) su **UDP porta 520**, messaggi REQUEST e RESPONSE.
>> - RESPONSE **ogni 30 s** (scarto da 1 a 5 s), al massimo **512 byte = 25 entry**.
>> - Metrica hop count, **16 = ∞** (massimo 15 hop): solo reti piccole. Timeout 180 s, garbage collection 120 s.
>> - Un aggiornamento dal next hop attuale si accetta anche se peggiore.
>> - v1: niente CIDR (manca la netmask), insicuro. **RIPv2**: subnet mask, next hop, route tag, autenticazione; resta un distance vector.
>>
>> **Traffico di routing e multicast**
>> - Il traffico di routing condivide le risorse con quello d'utente e va minimizzato: maglia completa $N(N-1)/2$ scambi, multicast $N$ messaggi.
>> - Multicast 224.0.0.0–239.255.255.255: 224.0.0.9 RIPv2, 224.0.0.5/6 OSPF.
>>
>> **Link state e Dijkstra**
>> - Ogni router scopre i vicini (Hello), misura i costi (Echo) e diffonde con flooding un **LSP** (mittente, numero di sequenza, età).
>> - **Dijkstra**: a ogni passo il nodo non definitivo più vicino diventa definitivo. Si ottiene l'albero dei cammini minimi; in tabella va solo il gateway.
>> - LS converge più in fretta e senza count to infinity, ma è più complesso.
>>
>> **OSPF**
>> - Link state (RFC 2328) direttamente su IP (**protocol 89**); costo per interfaccia, spesso banda di riferimento / banda.
>> - Gli **Hello** periodici scoprono i vicini e verificano il link bidirezionale. **Vicini**: comunicazione bidirezionale. **Adiacenti**: vicini che sincronizzano la LSDB.
>> - Sulle LAN multi-accesso ogni router è adiacente solo a **DR** e **BDR**, eletti per priorità (0 = non eleggibile, default 1) e poi router ID più alto.
>> - Gli **LSA** viaggiano nei pacchetti **LSU** con flooding affidabile; in un'area tutti hanno la stessa **LSDB** e ognuno esegue Dijkstra come radice.
>> - Fasi: **Hello**, **Exchange** (master/slave, Database Description), **Update** (LS Request, LS Update, LS Ack).
>> - **Aree** collegate all'**Area 0**; router interni, ABR, backbone, ASBR. Gli LSA 1–2 restano nell'area, gli ABR annunciano prefisso e costo con LSA 3, gli ASBR le rotte esterne con LSA 5.
>> - Aree **stub** (default route invece delle rotte esterne), **totally stubby** (anche senza LSA 3), **NSSA** (rotte esterne con LSA 7).
>> - Rotte **inter-area**: l'ABR annuncia con un LSA 3 il proprio costo verso la destinazione; il router interno somma il suo costo verso l'ABR (es. 4 + 9 = 13) senza conoscere la topologia remota. È un comportamento "alla distance vector", ma OSPF resta link state.
>>
>> **Autonomous System**
>> - Routing gerarchico: dentro l'AS grafo di dettaglio (**IGP**), fra AS grafo semplificato in cui ogni AS è un nodo (**EGP**, cioè BGP). Nessun livello conosce i dettagli dell'altro.
>> - **AS** oggi (RFC 1930): insieme di prefissi IP con **un'unica politica di routing** verso l'esterno; può avere più gestori e più tecnologie (es. GARR = AS137 per tutti gli atenei).
>> - Le politiche (regole di **import**/**export**) sono pubblicate negli **Internet Routing Registries** (es. RADb).
>>
>> **ISP, peering e IXP**
>> - **Tier 1**: raggiunge tutte le reti senza pagare nessuno; **Tier 2**: compra transito da un Tier 1; **Tier 3** (locale): compra transito da un Tier 2.
>> - **Transito**: a pagamento, verso il livello superiore. **Peering**: scambio gratuito fra AS, di solito dello stesso livello; policy ristretta o aperta.
>> - L'ISP locale serve gli utenti tramite i **POP** (accesso in rame, FTTH, FTTC, radio). Interconnettere tutti i POP dà percorsi minimi ma troppi link; pochi punti di interconnessione semplificano ma allungano i percorsi.
>> - **NSP** = AS di transito che collegano gli ISP "a stella". Gli **IXP** (in Italia MIX, NaMeX, TOP-IX…) permettono il peering diretto fra molti AS in un unico punto.
>>
>> **BGP (EGP)**
>> - Fra AS contano soprattutto le **politiche** (autonomia, transito ammesso o no, accordi), non solo il percorso ottimo. L'EGP usato oggi è **BGP-4** (RFC 4271).
>> - Sessioni su **TCP porta 179**, quindi affidabili. **eBGP** fra router di AS diversi, **iBGP** fra router dello stesso AS. Si scambiano prefissi CIDR.
>> - **Path vector**: per ogni destinazione si annuncia la lista degli AS da attraversare. Un AS che trova il proprio numero nel path scarta l'annuncio: così si evitano i cicli. Ogni AS aggiunge il proprio numero prima di propagare.
>> - **Export policy**: a chi annunciare cosa (cioè a chi offrire transito). **Import policy**: quali rotte accettare o preferire. Non serve una metrica comune fra AS, ma le tabelle sono grandi.
>> - Messaggi: **Open**, **Update** (path vector + attributi), **Notification** (errori o chiusura), **Keepalive**.
>> - Attributi: **well-known** (mandatory o discretionary), **optional** (transitive o non-transitive), **partial**. Esempi: ORIGIN (0 IGP, 1 EGP, 2 incomplete), AS_PATH, NEXT_HOP (tutti well-known mandatory).
>> - Non vince per forza il percorso più corto: prima conta il **LOCAL_PREF** più alto, assegnato dall'AS per ragioni amministrative.
