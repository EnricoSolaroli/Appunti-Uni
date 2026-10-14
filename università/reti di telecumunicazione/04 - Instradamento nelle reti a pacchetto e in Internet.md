[2627_Router_3](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/2627_Router_3.pdf>)

# Instradamento nelle reti a pacchetto e in Internet

>> Continua la lezione [[01 - Instradamento IPv4 e IPv6]]: lì la tabella di instradamento è data, qui si vede come i router la costruiscono (algoritmi e protocolli di routing). Nei punti di contatto trovi una riga **Collegamento con 01**.

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
	- [[#Slide 55 – RIP versione 2|RIP versione 2]]
	- [[#Slide 57 – Da ricordare|Riepilogo]]
9. **Traffico di routing e indirizzi multicast** (slide 58–65)
	- [[#Slide 58 – Il traffico di routing e gli indirizzi multicast|Introduzione]]
	- [[#Slide 59 – Protoclli di routing e IP multicast|Traffico di routing sul piano di controllo]]
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
	- [[#Slide 70 – Esempio|Esempio di Dijkstra passo per passo]]
11. **OSPF: principi, vicini e Designated Router** (slide 79–89)
	- [[#Slide 79 – Open Shortest Path First (OSPF)|Caratteristiche di OSPF]]
	- [[#Slide 80 – OSPF in sintesi|OSPF in sintesi]]
	- [[#Slide 81 – Il costo in OSPF|Il costo delle interfacce]]
	- [[#Slide 82 – LSDB|LSA e Link State Database]]
	- [[#Slide 83 – Vicinanza e adiacenza|Vicini e adiacenti]]
	- [[#Slide 84 – Hello|Pacchetti Hello]]
	- [[#Slide 85 – Tipologie di rete|Tipologie di rete e stella equivalente]]
	- [[#Slide 86 – Router designato|Designated Router e Backup DR]]
	- [[#Slide 88 – Identificazione dei router e priorità|Router ID e priorità]]
	- [[#Slide 89 – Elezione del DR|Elezione di DR e BDR]]
12. **OSPF: messaggi, sincronizzazione e aree** (slide 90–105)
	- [[#Slide 90 – Più funzioni per un solo protocollo|Funzioni e tipi di pacchetto]]
	- [[#Slide 91 – OSPF: intestazione comune|Intestazione comune]]
	- [[#Slide 92 – Sinconizzazione dei database|Sincronizzazione dei database]]
	- [[#Slide 93 – Le fasi di OSPF|Fasi Hello, Exchange e Update]]
	- [[#Slide 94 – Relazione con un vicino|Stati della relazione con un vicino]]
	- [[#Slide 95 – Aree di routing|Aree di routing e tipi di router]]
	- [[#Slide 97 – LSA e LSU|LSA, LSU e acknowledgment]]
	- [[#Slide 98 – Tipologie di LSA|Tipi di LSA]]
	- [[#Slide 99 – Quali LSA attraversano i confini delle aree?|LSA ai confini delle aree]]
	- [[#Slide 100 – Verso le rotte inter-area|Summary-LSA e rotte inter-area]]
	- [[#Slide 101 – Tipologia di rotte|Rotte intra-area, inter-area ed esterne]]
	- [[#Slide 102 – Link state o distance vector|Link state o distance vector?]]
	- [[#Slide 103 – Tipologia di aree|Aree normali, stub, totally stubby e NSSA]]
	- [[#Slide 104 – Da ricordare|Riepilogo]]
	- [[#Slide 105 – Com'è implementata effettivamente la struttura gerarchica di Internet?|Verso il routing fra AS]]

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

![[RT04n-s024-1.png|550]]

Blocchi dello schema:
- Higher layer protocols (TCP, UDP, ICMP, OSPF, …)
- Aggiunta intestazione IP
- Processamento intestazione IP
	- IP dest = host locale → Riassemblaggio → Higher layer protocols
	- IP dest = host remoto → Inoltro → Frammentazione → Strato 2
- Strato 2
- errore → ICMP (linee tratteggiate da Riassemblaggio, Inoltro e Frammentazione verso gli Higher layer protocols)

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

Elementi dello schema:
- Sorgenti: IS-IS, OSPF, RIP, BGP Peer 1, BGP Peer 2, BGP Peer 3 (questi ultimi attraverso le Route Maps) → **Import Policies** → **RIB (Routing Information Base)**
- Aggregate, Direct, Static → **RIB (Routing Information Base)**
- RIB → **Route Selection Process** → **FIB (Forwarding Information Base)**
- Route Selection Process → **Export Policies** → IS-IS, OSPF, RIP, BGP Peer 1, BGP Peer 2, BGP Peer 3 (questi ultimi attraverso le Route Maps)

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
	- Il distanca vector contiene solamente l'indicazione della distanza di una destinazione, non del percorso o del next hop
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

| parola | campi |
|---|---|
| 1 | command \| version \| must be zero |
| 2 (ripetuto) | address family identifier \| must be zero |
| 3 (ripetuto) | address |
| 4 (ripetuto) | must be zero |
| 5 (ripetuto) | must be zero |
| 6 (ripetuto) | metric |
| ... | address family identifier \| must be zero |
| ... | address |
| ... | must be zero |
| ... | must be zero |
| ... | metric |

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
	- Si considerano solo le voci *i* con distanze $d_i < \infty$
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
- Non supporta il CIDR
- È un protocollo insicuro
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
## Slide 55 – RIP versione 2

- I miglioramenti introdotti riguardano soprattutto:
	- subnetting e CIDR
	- autenticazione

![[RT04-s068-1.png|600]]

| parola | campi |
|---|---|
| 1 | command \| version \| routing domain |
| 2 | 11111111 11111111 \| authentication type |
| 3 | authentication data |
| 4 | authentication data |
| 5 | authentication data |
| 6 | authentication data |
| 7 (ripetuto) | address family identifier \| route tag |
| 8 (ripetuto) | address |
| 9 (ripetuto) | subnet mask |
| 10 (ripetuto) | next hop |
| 11 (ripetuto) | metric |

Il blocco da "address family identifier" a "metric" è **ripetuto** per ogni entry.

>> La seconda parola con address family identifier = 0xFFFF (i 16 bit a 1) indica che la prima entry non è una route ma contiene l'autenticazione: authentication type (es. 2 = password semplice) e 16 byte di password (4 parole). Occupa quindi lo spazio di una entry (20 byte), e restano 24 route nel pacchetto.
>> Rispetto a RIP v1 i campi prima a zero diventano route tag, subnet mask e next hop. Il campo "routing domain" compariva nella prima specifica di RIP v2 (RFC 1388); in RFC 2453 quei 16 bit sono tornati "must be zero". RIP v2 invia i RESPONSE al gruppo multicast 224.0.0.9 (slide 55).

---
## Slide 56 – RIP versione 2

- Compatibilità verso il basso
	- RIP-1 ignora le entry con i campi riservati diversi da zero
- Possibilità di indicare sottoreti o indirizzamento CIDR
	- tramite il campo **subnet mask**
- Possibilità di **autenticare** chi invia i messaggi
- Possibilità di indicare il proprio AS e di scambiare informazioni con protocolli EGP
	- tramite i campi **route tag** e **routing domain**
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
## Slide 59 – Protoclli di routing e IP multicast

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

Testo nella figura: Network A, Network B, Network C, Network D, Network E, H1, H2, Inter router, User traffic (data plane), Routing infos (control plane).

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
## Slide 70 – Esempio

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

---
## Slide 71 – Esempio

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

| riga | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| chiara |  | A 2 |  | A 6 | A 3 |  |  |  |
| scura |  | **A 2** |  |  |  |  |  |  |

>> Passo 1 (inizializzazione da a): si esaminano i vicini di a → b = 2, d = 6, e = 3 (predecessore A). Il minimo è **b (2)**, che diventa definitivo (riga scura) e si evidenzia il link a–b.

---
## Slide 72 – Esempio

![[RT04-s044-1.png|400]]

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

![[RT04-s044-2.png|600]]

| riga | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| chiara |  | A 2 |  | A 6 | A 3 |  |  |  |
| scura |  | **A 2** |  |  |  |  |  |  |
| chiara |  |  | B 4 |  | B 3 |  |  |  |
| scura |  | **A 2** |  |  | **B 3** |  |  |  |

>> Passo 2: si aggiornano le distanze passando per b: c = 2+2 = 4 (nuovo), e = 2+1 = 3 (uguale al valore precedente via a, 3: c'è un pareggio e la slide sceglie b come predecessore). Il minimo tra i nodi non definitivi (c 4, d 6, e 3) è **e (3, via B)**: si evidenzia b–e.

---
## Slide 73 – Esempio

![[RT04-s045-1.png|400]]

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

![[RT04-s045-2.png|600]]

| riga | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| chiara |  | A 2 |  | A 6 | A 3 |  |  |  |
| scura |  | **A 2** |  |  |  |  |  |  |
| chiara |  |  | B 4 |  | B 3 |  |  |  |
| scura |  | **A 2** |  |  | **B 3** |  |  |  |
| chiara |  |  | E 6 | E 5 |  | E 6 |  | E 7 |
| scura |  | **A 2** | **B 4** |  | **B 3** |  |  |  |

>> Passo 3: si rilassano i link uscenti da e (distanza 3): c = 3+3 = 6 (peggiore del 4 già noto, non aggiorna), d = 3+2 = 5 (migliora il 6 via a), f = 3+3 = 6, h = 3+4 = 7. Il minimo tra i non definitivi (c 4, d 5, f 6, h 7) è **c (4, via B)**: si evidenzia b–c.

---
## Slide 74 – Esempio

![[RT04-s046-1.png|400]]

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

![[RT04-s046-2.png|600]]

| riga | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| chiara |  | A 2 |  | A 6 | A 3 |  |  |  |
| scura |  | **A 2** |  |  |  |  |  |  |
| chiara |  |  | B 4 |  | B 3 |  |  |  |
| scura |  | **A 2** |  |  | **B 3** |  |  |  |
| chiara |  |  | E 6 | E 5 |  | E 6 |  | E 7 |
| scura |  | **A 2** | **B 4** |  | **B 3** |  |  |  |
| chiara |  |  |  |  |  |  |  | C 5 |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** |  |  |  |

>> Passo 4: da c (distanza 4) si raggiunge h con 4+1 = 5, che migliora il 7 via e. Ora d e h valgono entrambi 5: la slide rende definitivo per primo **d (5, via E)** e si evidenzia d–e (h a 5 resterà il prossimo).

---
## Slide 75 – Esempio

![[RT04-s047-1.png|400]]

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

![[RT04-s047-2.png|600]]

| riga | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| chiara |  | A 2 |  | A 6 | A 3 |  |  |  |
| scura |  | **A 2** |  |  |  |  |  |  |
| chiara |  |  | B 4 |  | B 3 |  |  |  |
| scura |  | **A 2** |  |  | **B 3** |  |  |  |
| chiara |  |  | E 6 | E 5 |  | E 6 |  | E 7 |
| scura |  | **A 2** | **B 4** |  | **B 3** |  |  |  |
| chiara |  |  |  |  |  |  |  | C 5 |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** |  |  |  |
| chiara |  |  |  |  |  |  |  |  |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** |  |  | **C 5** |

>> Passo 5: d non offre miglioramenti (i suoi vicini a ed e sono già definitivi), quindi la riga chiara è vuota. Il minimo tra i non definitivi (f 6, h 5) è **h (5, via C)**: si evidenzia c–h.

---
## Slide 76 – Esempio

![[RT04-s048-1.png|400]]

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

![[RT04-s048-2.png|600]]

| riga | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| chiara |  | A 2 |  | A 6 | A 3 |  |  |  |
| scura |  | **A 2** |  |  |  |  |  |  |
| chiara |  |  | B 4 |  | B 3 |  |  |  |
| scura |  | **A 2** |  |  | **B 3** |  |  |  |
| chiara |  |  | E 6 | E 5 |  | E 6 |  | E 7 |
| scura |  | **A 2** | **B 4** |  | **B 3** |  |  |  |
| chiara |  |  |  |  |  |  |  | C 5 |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** |  |  |  |
| chiara |  |  |  |  |  |  |  |  |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** |  |  | **C 5** |
| chiara |  |  |  |  |  |  | H 7 |  |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** | **E 6** |  | **C 5** |

>> Passo 6: da h (distanza 5) si raggiunge g con 5+2 = 7 (predecessore H). Il minimo tra i non definitivi (f 6, g 7) è **f (6, via E)**: si evidenzia e–f.

---
## Slide 77 – Esempio

![[RT04-s049-1.png|400]]

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

![[RT04-s049-2.png|600]]

| riga | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| chiara |  | A 2 |  | A 6 | A 3 |  |  |  |
| scura |  | **A 2** |  |  |  |  |  |  |
| chiara |  |  | B 4 |  | B 3 |  |  |  |
| scura |  | **A 2** |  |  | **B 3** |  |  |  |
| chiara |  |  | E 6 | E 5 |  | E 6 |  | E 7 |
| scura |  | **A 2** | **B 4** |  | **B 3** |  |  |  |
| chiara |  |  |  |  |  |  |  | C 5 |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** |  |  |  |
| chiara |  |  |  |  |  |  |  |  |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** |  |  | **C 5** |
| chiara |  |  |  |  |  |  | H 7 |  |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** | **E 6** |  | **C 5** |
| chiara |  |  |  |  |  |  | F 9 |  |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** | **E 6** | **H 7** | **C 5** |

>> Passo 7: da f (distanza 6) si ricalcola g = 6+2 = **8** (nella slide è riportato "F 9", ma col peso f–g = 2 il valore corretto è 8); in ogni caso è peggiore di 7 via h, quindi non aggiorna. L'ultimo nodo, **g (7, via H)**, diventa definitivo: si evidenzia g–h.

---
## Slide 78 – Esempio

![[RT04-s050-1.png|400]]

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

![[RT04-s050-2.png|600]]

| riga | A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|---|
| chiara |  | A 2 |  | A 6 | A 3 |  |  |  |
| scura |  | **A 2** |  |  |  |  |  |  |
| chiara |  |  | B 4 |  | B 3 |  |  |  |
| scura |  | **A 2** |  |  | **B 3** |  |  |  |
| chiara |  |  | E 6 | E 5 |  | E 6 |  | E 7 |
| scura |  | **A 2** | **B 4** |  | **B 3** |  |  |  |
| chiara |  |  |  |  |  |  |  | C 5 |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** |  |  |  |
| chiara |  |  |  |  |  |  |  |  |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** |  |  | **C 5** |
| chiara |  |  |  |  |  |  | H 7 |  |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** | **E 6** |  | **C 5** |
| chiara |  |  |  |  |  |  | F 9 |  |
| scura |  | **A 2** | **B 4** | **E 5** | **B 3** | **E 6** | **H 7** | **C 5** |
| chiara |  |  |  |  |  |  |  |  |
| gialla |  | **A 2** | **B 4** | **E 5** | **B 3** | **E 6** | **H 7** | **C 5** |
| arancio |  | **A 2** | **B 4** | **B 5** | **B 3** | **B 6** | **B 7** | **B 5** |

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
- Dal LSDB ricava lo shortest-path tre
- La rete può essere suddivisa in aree per limitarne la complessità

>> A differenza di RIP (distance vector, trasportato in UDP porta 520), OSPF non usa né UDP né TCP: i suoi pacchetti sono payload diretto di IP con Protocol = 89. L'affidabilità della consegna (ack, ritrasmissioni) è quindi gestita dal protocollo stesso.
>>
>> "shortest-path tre" va letto come *shortest-path tree*: l'albero dei cammini minimi calcolato con Dijkstra a partire dall'LSDB.

---
## Slide 80 – OSPF in sintesi

![[RT04n-s080-1.png|350]]

1. Scoperta dei vicini (Hello)
2. Formazione delle adiacenze (scambio informazioni di raggiungibilità)
3. Sincronizzazione e flooding
4. LSBD comune a tutti nell'area
5. Calcolo Shortest path
6. RIB e FIB

>> La pipeline in breve: con gli Hello si scopre *chi* c'è; fra alcuni vicini si formano adiacenze; sulle adiacenze si sincronizzano i database e si propagano gli LSA (flooding); quando tutti i router dell'area hanno lo stesso LSDB (qui scritto "LSBD"), ciascuno esegue Dijkstra con sé stesso come radice; i risultati popolano la RIB e da questa la FIB usata per l'inoltro.

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
## Slide 83 – Vicinanza e adiacenza

- Vicini (**neighbour**)
	- Due router che scambiano pacchetti sulla stessa rete
	- Riconoscono pertanto una comunicazione bidirezionale
- Adiacenti (**adjacent**)
	- Due router che una volta vicini decidono di sincronizzare i loro LSDB sull'interfaccia
		- In pratica concorrono al processo di determinazione del routing
- Quindi:
	- tutti i router adiacenti sono anche vicini
	- non tutti i router vicini diventano adiacenti

>> L'adiacenza è quindi un sottoinsieme della relazione di vicinanza. Su una LAN con DR (slide 86) due router qualsiasi sono vicini, ma diventano adiacenti solo con il DR e il BDR; nello stato finale dei due router non-DR la relazione si ferma a "2-Way".

---
## Slide 84 – Hello

- I pacchetti **Hello** vengono inviati per farsi riconoscere come router OSPF dai vicini
	- Vengono inviati **periodicamente** sulle interfacce abilitate in base a quanto specificato dal parametro **HelloInterval**
- Permettono di scoprire i propri vicini
	- Includono una lista di tutti i vicini (Neighbor) dai quali è stato ricevuto un pacchetto HELLO recente (cioè non più vecchio di **RouterDeadInterval**)
- Ogni router quindi è aggiornato su
	- quali sono i vicini
	- che è presente un collegamento bidirezionale
	- se esso è ancora attivo

>> Il collegamento bidirezionale si verifica così: quando il router A riceve un Hello di B che contiene il router ID di A nella lista dei vicini, A sa che B lo sente, quindi la comunicazione funziona in entrambi i versi (stato "2-Way").
>>
>> Valori tipici su LAN: HelloInterval = 10 s, RouterDeadInterval = 40 s (4 volte l'Hello). Se per un RouterDeadInterval non arriva alcun Hello, il vicino è dichiarato non più attivo.

---
## Slide 85 – Tipologie di rete

- OSPF è progettato per operare correttamente con reti:
	- Point-to-Point (punto-punto fra due router)
	- Broadcast Multi-Access o BMA (tipicamente LAN 802)
	- Non-Broadcast Multi-Access o NBMA (Frame Relay, …)
- In una rete ad accesso multiplo (BMA) tutti gli N router connessi alla rete sono di fatto connessi con tutti gli altri
	- il numero totale di LSA da trasmettere sarebbe N(N–1)
		- Abbiamo già visto che il RIP utilizza l'indirizzo Multicast
- Qui però la questione è più complessa in quanto gli LSDB potrebbero essere tutti disallineati
- Per le adiacenze conviene adottare una topologia a **stella equivalente**, con N archi bidirezionali ed un router che f da centro stello

>> Con N router in maglia completa le adiacenze sarebbero $\binom{N}{2} = \frac{N(N-1)}{2}$, cioè $N(N-1)$ relazioni orientate. Per N = 10 sono 45 adiacenze (90 relazioni), mentre con la stella sono solo 9 (una per ogni router non centrale, $N-1$). L'ultimo punto va letto come "un router che fa da centro stella": è il DR della slide successiva.
>>
>> Il multicast da solo non basta: evita di inviare N copie dello stesso pacchetto, ma non risolve il problema di tenere sincronizzati i database di ogni coppia di router. Per questo serve un punto di riferimento comune.

---
## Slide 86 – Router designato

- Si elegge un **Router designato (DR)**
- Ogni router della LAN è adiacente solo al DR (e al BDR)
	- lo scambio di informazioni di routing avviene solo tra router adiacenti (cioè DR fa da tramite)
	- inoltre il DR è l'unico a comunicare i prefissi di questa sezione di rete al mondo esterno
- Per ragioni di affidabilità occorre avere anche un Backup Designated Router (BDR) adiacente a tutti i router locali

>> Indirizzi multicast in pratica: i router non-DR inviano i propri aggiornamenti a 224.0.0.6 (AllDRouters, ascoltato da DR e BDR); il DR li ridistribuisce a 224.0.0.5 (AllSPFRouters, tutti i router OSPF). Il DR genera anche l'LSA di rete (Network-LSA) che rappresenta la LAN come un unico nodo nel grafo.
>>
>> Il BDR ascolta tutto e ha già le adiacenze con ogni router: se il DR cade lo sostituisce subito, senza dover risincronizzare i database.

---
## Slide 87 – Esempio

![[RT04n-s087-1.png|600]]

- In alto a sinistra: la LAN fisica, con più router collegati allo stesso segmento (e due host)
- In alto a destra: **router vicini**, cioè tutti i router della LAN si vedono a vicenda attraverso il mezzo condiviso
- In basso: **DR** e **router adiacenti**, cioè la topologia a stella equivalente in cui ogni router della LAN è adiacente solo al DR

>> Il router a destra, collegato con un link punto-punto, resta adiacente direttamente al suo vicino: sui collegamenti point-to-point non si elegge un DR e i due estremi diventano sempre adiacenti.

---
## Slide 88 – Identificazione dei router e priorità

- Ogni router di un dominio OSPF deve avere un identificativo univoco (router ID) di 32 bit:
	- di default si prende l'indirizzo IP più alto fra quelli assegnati alle interfacce del router
	- si può assegnare manualmente un router ID ad ogni router configurando opportunamente l'interfaccia di loop-back
	- configurare l'interfaccia di loop-back è un modo più stabile e sicuro di assegnare il router ID perché questa interfaccia non viene mai disabilitata
- Ai singoli router possono essere associate delle priorità
	- utilizzate nell'elezione del DR
	- valore di priorità compreso tra 0 e 255 (8 bit)
	- di default tutti i router hanno priorità 1 (più bassa)

>> Precisazione: su molte implementazioni (es. Cisco) l'ordine è router ID configurato esplicitamente con il comando `router-id`, poi l'IP più alto fra le loopback, poi l'IP più alto fra le interfacce fisiche attive. Il router ID è scritto in notazione puntata come un indirizzo IP, ma è solo un identificativo e non deve essere per forza raggiungibile.
>>
>> Priorità 1 è la più bassa fra quelle *eleggibili*: la priorità 0 significa "mai DR/BDR" (vedi slide successiva).

---
## Slide 89 – Elezione del DR

- Ciascun router nella rete BMA:
	- Esamina la lista dei suoi vicini
	- Elimina dalla lista tutti i router non eleggibili (ad esempio tutti quelli che hanno priorità nulla)
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
## Slide 90 – Più funzioni per un solo protocollo

- OSPF implementa tre funzioni con diversi scopi:
	- **hello, exchange, flooding**
- Per ogni funzione si utilizza un messaggio specifico
- I messaggi hanno una intestazione comune
	- vengono aggiunte informazioni per il particolare scopo a cui il messaggio è destinato (tipo di pacchetto)

![[RT04n-s090-1.png|550]]

| Version | Type | Packet Length |
|---|---|---|
| Router ID | | |
| Area ID | | |
| Checksum | | AuType |
| Authentication | | |
| Authentication | | |
| … | | |

>> Ogni riga è di 32 bit: Version (8 bit), Type (8 bit), Packet Length (16 bit); Router ID (32); Area ID (32); Checksum (16) e AuType (16); Authentication (64 bit, su due righe). In totale l'intestazione comune è di 24 byte.
>>
>> I tipi di pacchetto (campo Type) sono 5: 1 = Hello (funzione *hello*); 2 = Database Description e 3 = Link State Request (funzione *exchange*, cioè la sincronizzazione iniziale); 4 = Link State Update e 5 = Link State Acknowledgment (funzione *flooding* affidabile).

---
## Slide 91 – OSPF: intestazione comune

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
## Slide 92 – Sinconizzazione dei database

- Quando si stabilisce un'adiacenza si eleggono un **Leader** e un **Follower** e si sincronizzano gli LSDB
- Perché sincronizzare?
	- Un nuovo vicino può avere un database incompleto
		- non ha ricevuto gli LSA distribuiti prima della formazione dell'adiacenza;
		- potrebbe possedere versioni meno recenti di alcuni LSA;
- Il calcolo dello shortest path richiede LSDB completo

>> Leader/Follower corrispondono a quelli che la RFC 2328 chiama Master/Slave: diventa Leader il router con router ID più alto, ed è lui a guidare lo scambio dei Database Description scegliendo i numeri di sequenza. Ogni DD contiene solo le *intestazioni* degli LSA; confrontandole ciascun router capisce quali LSA gli mancano o sono vecchi e li chiede con i Link State Request, a cui l'altro risponde con i Link State Update.
>>
>> Il Leader/Follower riguarda la singola adiacenza ed è indipendente dal ruolo DR/BDR.

---
## Slide 93 – Le fasi di OSPF

![[RT04n-s093-1.png|600]]

- Hello →
- ← Hello

Fase di **Hello**
I router scoprono l'esistenza reciproca

- ← Database Description (Master)
- Database Description →
- ← Database Description
- ⋮
- Database Description →
- ← Database Description

Fase di **Exchange**
Si sceglie il master e lo slave
Si confrontano i database

- ← Link State Request
- Link State Update →
- ← Link State Ack

Fase di **Update**
Si inviano richieste di aggiornamento ai router adiacenti per aggiornare il database

>> - **Hello**: i pacchetti Hello sono inviati periodicamente (tipicamente ogni 10 s su LAN, *dead interval* 40 s) in multicast (224.0.0.5); servono a scoprire i vicini, a verificare che la comunicazione sia bidirezionale (ogni router elenca nell'Hello i vicini che ha già sentito), a fare da *keep-alive* e, sulle reti multiaccesso, a eleggere DR e BDR.
>> - **Exchange**: diventa master il router con Router ID più alto; il master detta i numeri di sequenza dei pacchetti Database Description (DBD). I DBD non contengono gli LSA completi ma solo i loro **header** (tipo, ID, router originante, numero di sequenza, età): basta per capire quali LSA mancano o sono più vecchi nel proprio database.
>> - **Update**: per ciascun LSA mancante o obsoleto il router invia un Link State Request; il vicino risponde con un Link State Update che contiene gli LSA completi, e la ricezione viene confermata con un Link State Ack (il flooding di OSPF è affidabile).

---
## Slide 94 – Relazione con un vicino

![[RT04n-s094-1.png|600]]

Diagramma degli stati: Down → Init → Two way, poi due rami:
- Nessuna adiacenza → Two way
- Adiacenza → Ex start → Exchange → Loading → Full

La connessione bidirezionale definisce il vicino

La sincronizzazione dei database definisce l'adiacente

>> Significato degli stati:
>> - **Down**: nessun Hello ricevuto dal vicino (o scaduto il dead interval).
>> - **Init**: è arrivato un Hello dal vicino, ma il proprio Router ID non compare ancora nella sua lista di vicini (comunicazione vista in un solo verso).
>> - **Two way**: il router vede il proprio ID nell'Hello del vicino → comunicazione bidirezionale: i due sono **vicini** (*neighbor*).
>> - A questo punto si decide se formare un'**adiacenza**: su un collegamento punto-punto sempre; su una rete multiaccesso (es. Ethernet) solo con DR e BDR. Due router "normali" (DROther) restano stabilmente in Two way (ramo "Nessuna adiacenza").
>> - **Ex start**: scelta di master e slave; **Exchange**: scambio dei Database Description; **Loading**: richieste (LSR) e ricezione (LSU) degli LSA mancanti; **Full**: database sincronizzati → i due sono **adiacenti**.
>>
>> Quindi: vicino ≠ adiacente. Gli LSA vengono scambiati solo fra router adiacenti.

---
## Slide 95 – Aree di routing

- Una rete può può essere suddiviso in «**Routing Area** (RA)» interconnesse da un backbone (Area 0)
	- ciascuna area risulta separata dalle altre per quanto riguarda lo scambio delle informazioni di routing e si comporta come un'entità indipendente (3° livello gerarchico di routing)
	- per interconnettere le aree vi devono essere router connessi a più aree e/o al backbone (almeno un router per area)
- Classificazione dei router secondo OSPF:
	- **Internal Router**: router interni a ciascuna area
	- **Area Border Router**: router che scambiano informazioni con altre aree
	- **Backbone Router**: router che si interfacciano con il backbone
	- **AS Boundary Router**: router che scambiano informazioni con altri AS usando un protocollo EGP

>> Perché le aree: il flooding degli LSA di topologia e il calcolo di Dijkstra restano confinati dentro l'area. Una variazione di un link in un'area non costringe i router delle altre aree a rifare lo Shortest Path, e la LSDB di ogni router contiene solo la topologia della propria area: meno memoria, meno CPU, meno traffico di controllo.
>>
>> Vincolo di progetto: ogni area non-backbone deve essere collegata all'Area 0 (tramite un ABR) e tutto il traffico inter-area transita per il backbone: la struttura fra aree è quindi a stella con centro nell'Area 0. Se un'area non è fisicamente connessa all'Area 0 si può usare un *virtual link* attraverso un'altra area.
>>
>> Un router può avere più ruoli contemporaneamente (es. un ABR è anche Backbone Router, perché ha almeno un'interfaccia nell'Area 0).

---
## Slide 96 – Esempio

![[RT04n-s096-1.png|600]]

Etichette della figura:
- AS (il dominio OSPF, a sinistra) e AS (un altro AS, a destra)
- Area Border Router
- **Stub Area** con route di default
- RA
- Area 0 Backbone
- AS boundary Router e Backbone Router
- Backbone Router
- Area Border Router e Backbone Router
- Internal Router

>> Lettura della figura: l'AS a sinistra è diviso in tre Routing Area più l'Area 0. Il router del backbone collegato all'AS di destra è ASBR (parla con l'altro AS con un EGP) e allo stesso tempo Backbone Router. I router che hanno interfacce sia nell'Area 0 sia in un'altra area sono ABR + Backbone Router. La stub area non riceve le rotte esterne: le raggiunge con una rotta di default verso il proprio ABR.

---
## Slide 97 – LSA e LSU

- Link State Advertisement (LSA)
	- Oggetto informativo che descrive una parte della topologia o una destinazione
- Link State Update (LSU)
	- Pacchetto OSPF
- Un singolo LSU può trasportare uno o più LSA
- Link State Acknowledgment
	- conferma la ricezione degli LSA

>> Distinzione importante: l'LSA è l'**informazione** (la "lettera"), l'LSU è il **pacchetto** OSPF che la trasporta (la "busta"). Ogni LSA è identificato da tipo, Link State ID e router che lo ha originato; ha un **numero di sequenza** (per riconoscere la versione più recente) e un'**età** (LS Age): l'originatore lo rinfresca ogni 30 minuti e, se raggiunge MaxAge (1 ora), viene eliminato dalla LSDB.

---
## Slide 98 – Tipologie di LSA

![[RT04n-s098-1.png|600]]

| LSA | Generato da | Informazione |
|---|---|---|
| Type 1 Router-LSA | Ogni router | Link e costi del router nell'area |
| Type 2 Network-LSA | DR | Router collegati alla rete multiaccesso |
| Type 3 Summary-LSA | ABR | Prefissi raggiungibili in un'altra area |
| Type 4 ASBR Summary-LSA | ABR | Come raggiungere un ASBR |
| Type 5 AS-External-LSA | ASBR | Destinazioni esterne al dominio OSPF |

>> **DR** = *Designated Router*: su una rete multiaccesso con $n$ router, invece di avere $n(n-1)/2$ adiacenze (tutti con tutti) ogni router forma l'adiacenza solo con il DR (e con il BDR, il suo backup). La rete viene rappresentata come un nodo "virtuale", descritto dal DR con il Network-LSA, a cui tutti i router sono collegati. Le adiacenze passano così da $O(n^2)$ a $O(n)$: ad es. con $n=10$ si passa da 45 a $2(n-2)+1 = 17$ (con DR e BDR).
>>
>> Il tipo 4 serve perché il tipo 5 dice "la destinazione esterna X si raggiunge tramite l'ASBR Y", ma i router di un'altra area non conoscono la topologia che porta a Y: l'ABR annuncia con il tipo 4 il costo per raggiungere Y.

---
## Slide 99 – Quali LSA attraversano i confini delle aree?

![[RT04n-s099-1.png|600]]

| Tipo | Contenuto | Portata |
|---|---|---|
| 1 – Router-LSA | Link del router | Solo area di origine |
| 2 – Network-LSA | Router connessi a una rete multiaccesso | Solo area di origine |
| 3 – Summary-LSA | Prefisso raggiungibile attraverso un ABR | Una singola area; generato dall'ABR |
| 4 – ASBR-Summary-LSA | Come raggiungere un ASBR | Una singola area; generato dall'ABR |
| 5 – AS-External-LSA | Destinazione esterna a OSPF | Intero AS OSPF, salvo aree stub |
| 7 – NSSA-External-LSA | Destinazione esterna immessa in una NSSA | Solo NSSA; può essere convertito in tipo 5 |

Gli ABR non trasferiscono nelle altre aree i Router-LSA e i Network-LSA: la topologia di un'area rimane nascosta alle altre.

>> "Una singola area" per i tipi 3 e 4 significa che ogni Summary-LSA vive solo nell'area in cui l'ABR lo immette: per arrivare in un'altra area l'informazione non viene inoltrata così com'è, ma un ABR ne genera uno nuovo (vedi slide seguente). Il tipo 5, invece, è l'unico che viene propagato inalterato in tutto il dominio OSPF (escluse le aree stub). Il tipo 7 nasce dentro una NSSA, dove i tipi 5 non sono ammessi, e l'ABR della NSSA lo traduce in tipo 5 per il resto dell'AS.

---
## Slide 100 – Verso le rotte inter-area

- Un ABR appartiene ad almeno due aree e mantiene una LSDB distinta per ciascuna.
	- Esegue Shortest Path separatamente nelle diverse aree.
	- Dalle rotte calcolate ricava le destinazioni da annunciare alle altre aree.
- Per ogni destinazione genera un nuovo Summary-LSA di tipo 3, contenente:
	- il prefisso;
	- la maschera;
	- il costo calcolato dall'ABR verso quella destinazione.
- Gli altri router apprendono destinazione e distanza, ma non la topologia dell'area remota.

Un Summary-LSA non è la copia di un Route-LSA proveniente da un'altra area: è un nuovo annuncio generato dall'ABR

>> ("Route-LSA" va letto come Router-LSA, tipo 1.)
>>
>> Esempio: l'ABR $B$ sta tra l'Area 1 e l'Area 0. Nell'Area 1 calcola con Dijkstra che il prefisso 10.1.0.0/16 dista 20. Nell'Area 0 immette un Summary-LSA "10.1.0.0/16, costo 20". Un router $R$ dell'Area 0 che dista 5 da $B$ calcola $5 + 20 = 25$ per raggiungere quel prefisso, senza sapere niente di come sia fatta l'Area 1.
>>
>> Se l'Area 1 usa prefissi contigui, l'ABR può anche **aggregarli** in un unico Summary-LSA (route summarization), riducendo ulteriormente le informazioni propagate.

---
## Slide 101 – Tipologia di rotte

- Rotta intra-area
	- calcolate dalla LSDB dell'area usando gli LSA 1 e 2.
- Rotta inter-area
	- apprese mediante gli LSA 3 generati dagli ABR; è nota la raggiungibilità del prefisso, non la topologia dell'area remota
- Rotta esterna
	- apprese mediante LSA 5 originati da un ASBR, oppure mediante LSA 7 all'interno di una NSSA

>> Se la stessa destinazione è raggiungibile con rotte di tipo diverso, OSPF preferisce sempre, indipendentemente dal costo: intra-area > inter-area > esterna. Il costo serve a scegliere solo fra rotte dello stesso tipo.

---
## Slide 102 – Link state o distance vector

- OSPF rimane un protocollo link state.
- Il calcolo delle rotte intra-area si basa sulla conoscenza della topologia, mentre quello delle rotte inter-area utilizza informazioni aggregate di destinazione e costo annunciate dagli ABR
- Questo secondo meccanismo presenta caratteristiche simili al Distance Vector, pur senza trasformare OSPF in un protocollo Distance Vector.

| All'interno di un'area | Fra aree diverse |
|---|---|
| Vengono descritti router e link | Vengono annunciati prefissi e metriche |
| Tutti hanno la stessa topologia dell'area | La topologia remota rimane nascosta |
| Ogni router esegue SP sulla LSDB | Il router aggiunge il proprio costo verso l'ABR |
| Il risultato è una **rotta intra-area** | Il risultato è una **rotta inter-area** |

>> La somiglianza con il Distance Vector è proprio l'equazione di Bellman-Ford: $D_R(\text{dest}) = \min_{\text{ABR}} \{\, c(R,\text{ABR}) + D_{\text{ABR}}(\text{dest}) \,\}$, dove $c(R,\text{ABR})$ viene da Dijkstra sulla propria area e $D_{\text{ABR}}(\text{dest})$ è il costo annunciato nel Summary-LSA.
>> I problemi tipici del DV (cicli, count to infinity) sono evitati dalla struttura gerarchica: tutte le aree comunicano solo attraverso l'Area 0 (topologia a stella fra aree) e un ABR non ri-annuncia nell'Area 0 i Summary-LSA che ha ricevuto da un'area non-backbone.

---
## Slide 103 – Tipologia di aree

- Area normale
	- Accetta tutti i tipi di route
- Stub area (e totally stubby area)
	- Accetta route intra e inter area
	- Tutti i router della stub area usano un "default route" verso destinazioni al di fuori dell'AS
		- Comunicato dall'Area Border Router (ABR)
	- I requisiti di memoria dei router sono ridotti
- Not so stubby area
	- Stub area che importa alcuni route esterni
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
## Slide 104 – Da ricordare

**OSPF: link state**
- molto più avanzato adatto a reti grandi
- complesso da configurare

Tre fasi: Hello, Exchange, Update

>> Rispetto a RIP (distance vector): OSPF converge più rapidamente, non soffre di count to infinity, usa costi configurabili sui link invece del semplice numero di hop (e non ha il limite di 15 hop), e scala grazie alle aree; il prezzo è maggiore complessità, memoria (LSDB) e CPU (Dijkstra).

---
## Slide 105 – Com'è implementata effettivamente la struttura gerarchica di Internet?

Com'è implementata effettivamente la struttura gerarchica di Internet?

>> OSPF (come RIP) è un protocollo di routing interno a un Autonomous System (IGP). Il livello gerarchico superiore, cioè l'instradamento fra AS diversi, è affidato a un protocollo EGP: in Internet si usa BGP.

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
