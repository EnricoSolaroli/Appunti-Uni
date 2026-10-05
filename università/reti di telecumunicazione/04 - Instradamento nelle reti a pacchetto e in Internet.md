[2627_Routing](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/2627_Routing.pdf>)

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
3. **Instradamento con tabella e shortest path** (slide 13–16)
	- [[#Slide 13 – Nell'instradamento con tabelle come si compila la tabella?|Come si compila la tabella]]
	- [[#Slide 14 – Instradamento con tabella|Schema del nodo con tabella]]
	- [[#Slide 15 – Store-and-Forward|Store-and-forward]]
	- [[#Slide 16 – Shortest path routing|Shortest path routing: centralizzato e distribuito]]
4. **Rappresentazione della rete con i grafi** (slide 17–22)
	- [[#Slide 17 – Rappresentazione della rete|Topologia come grafo orientato e pesi]]
	- [[#Slide 18 – Il grafo della rete|Definizioni: nodi, archi, grafi orientati e non]]
	- [[#Slide 20 – Grafo pesato|Grafo pesato]]
	- [[#Slide 21 – Routing shortest path nel mondo IP|Shortest path nel mondo IP]]
	- [[#Slide 22 – Da ricordare|Riepilogo]]
5. **Routing gerarchico in Internet: IGP ed EGP** (slide 23–27)
	- [[#Slide 23 – Internet è una sola grande rete: i router devono conoscere tutte le network?|I router devono conoscere tutte le network?]]
	- [[#Slide 24 – Internet = rete di reti|Internet come rete di reti]]
	- [[#Slide 26 – Internet: grafo semplificato|Grafo semplificato, IGP ed EGP]]
	- [[#Slide 27 – IGP|Distance vector e link state]]
6. **Distance vector e Bellman-Ford** (slide 28–32)
	- [[#Slide 28 – Distance vector|Principio del distance vector]]
	- [[#Slide 29 – Esempio|Esempi di evoluzione delle tabelle]]
	- [[#Slide 31 – Algoritmo|Algoritmo di Bellman-Ford]]
	- [[#Slide 32 – Cold start e tempo di convergenza|Cold start e tempo di convergenza]]
7. **Problemi del distance vector e rimedi** (slide 33–38)
	- [[#Slide 33 – Bouncing effect|Bouncing effect]]
	- [[#Slide 34 – Convergenza lenta|Convergenza lenta]]
	- [[#Slide 35 – Count to infinity|Count to infinity]]
	- [[#Slide 36 – Split horizon|Split horizon e poisonous reverse]]
	- [[#Slide 37 – Triggered update|Triggered update]]
	- [[#Slide 38 – Ma non basta…|Limiti dei rimedi: loop a tre nodi]]
8. **Link state e algoritmo di Dijkstra** (slide 39–50)
	- [[#Slide 39 – Link state|Principio del link state]]
	- [[#Slide 40 – Raccolta delle informazioni|Hello, echo e Link State Packet]]
	- [[#Slide 41 – Diffusione ed elaborazione delle informazioni|Flooding degli LSP e calcolo con Dijkstra]]
	- [[#Slide 42 – Esempio|Esempio di Dijkstra passo per passo]]
9. **Traffico di routing, multicast e IGMP** (slide 51–58)
	- [[#Slide 51 – Protoclli di routing e IP multicast|Traffico di routing sul piano di controllo]]
	- [[#Slide 52 – Una tipica architettura|Architettura tipica con rete condivisa]]
	- [[#Slide 53 – Il traffico di routing|Costo della maglia completa]]
	- [[#Slide 54 – Multicast|Uso del multicast]]
	- [[#Slide 55 – IP Multicast|Indirizzi IP multicast dei protocolli di routing]]
	- [[#Slide 56 – The Internet Group Management Protocol (IGMP)|IGMP]]
	- [[#Slide 57 – Il traffico multicast|Traffico multicast: N messaggi]]
	- [[#Slide 58 – Da ricordare|Riepilogo]]
10. **Il protocollo RIP (versioni 1 e 2)** (slide 59–69)
	- [[#Slide 59 – Come sono implementati distance vector e link state?|Implementazione di DV e LS]]
	- [[#Slide 60 – Routing Information Protocol (RIP)|RIP: messaggi REQUEST e RESPONSE]]
	- [[#Slide 61 – Response|Invio dei RESPONSE e aggiornamenti periodici]]
	- [[#Slide 62 – RIP: formato dei pacchetti|Formato dei pacchetti e significato dei campi]]
	- [[#Slide 64 – RIP: la tabella di routing|Tabella di routing, metrica e timer]]
	- [[#Slide 65 – RIP: aggiornamento della tabella di routing|Aggiornamento della tabella]]
	- [[#Slide 66 – RIP: problematiche|Problematiche e sicurezza]]
	- [[#Slide 67 – La mancanza di CIDR|Mancanza di CIDR]]
	- [[#Slide 68 – RIP versione 2|RIP versione 2]]

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

- Flooding
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

![[RT04-s008-1.png|400]]

>> Nella figura il router centrale riceve il pacchetto (freccia verde) e lo ricopia su tutte le altre interfacce (frecce arancioni); il "?" indica il dubbio se ritrasmetterlo anche sull'interfaccia di provenienza. Se lo facesse, il pacchetto tornerebbe indietro e verrebbe a sua volta ricopiato: con nodi di grado $d$ dopo $k$ salti si possono avere fino a circa $d^k$ copie, e in presenza di anelli il pacchetto non si estinguerebbe mai.

---
## Slide 9 – Soluzioni

- Un nodo non ritrasmette il pacchetto nella direzione dalla quale è giunto
- Identificazione dei pacchetti
	- Ad ogni pacchetto viene associato un identificativo unico (l'indirizzo della sorgente e un numero di sequenza
	- Il nodo crea una lista dei pacchetti ricevuti e ritrasmessi
	- Ogni pacchetto già trasmesso, viene ignorato
- Contatore del tempo di vita (TTL) di un pacchetto per evitare che giri all'infinito

![[RT04-s009-1.png|350]]
![[RT04-s009-2.png|260]]

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

- Ramdon
	- Il next hop viene scelto a caso fra quelli possibili
	- Le probabilità possono essere diverse e modificabili nel tempo
- Delection routing (hot potato)
	- Il next viene scelto come quello avente il minor numero di pacchetti in attesa di essere trasmessi
- Problemi
	- Non garantiscono la consegna in tempi certi
	- Potrebbe dar luogo a comportamenti instabili (loop)
	- È necessario implementare meccanismi che limitino il tempo di vita dei pacchetti

>> "Ramdon" e "Delection" sono refusi della slide per *Random* e *Deflection* routing (cfr. slide 6). Nel deflection routing ("patata bollente") il nodo si libera del pacchetto il prima possibile inviandolo sull'uscita con la coda più corta, anche se non avvicina il pacchetto alla destinazione: per questo il pacchetto può vagare a lungo o andare in loop, e serve il TTL.

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

![[RT04-s019-1.png|220]]
![[RT04-s019-2.png|250]]

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

![[RT04-s020-1.png|240]]
![[RT04-s020-2.png|290]]

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
## Slide 22 – Da ricordare

L'instradamento shortest path costruisce sulla **teoria dei grafi** per realizzare **percorsi end-to-end ottimali**

Implica
- Scambio di informazioni fra router per **conoscere le network raggiungibili**
- Algoritmi numerici per il calcolo dei percorsi di lunghezza minima e **identificazione del next hop**
---
## Slide 23 – Internet è una sola grande rete: i router devono conoscere tutte le network?

Internet è una sola grande rete: i router devono conoscere tutte le network?

>> No: sarebbe impraticabile. Le tabelle di instradamento conterrebbero centinaia di migliaia di voci, ogni cambiamento di topologia andrebbe propagato a tutti i router del mondo e ogni organizzazione dovrebbe fidarsi delle informazioni di tutte le altre. Da qui l'idea (slide seguenti) di vedere Internet come insieme di reti autonome interconnesse, con instradamento gerarchico: dettagliato all'interno di ciascuna rete (IGP), aggregato fra le reti (EGP).

---
## Slide 24 – Internet = rete di reti

![[RT04-s024-1.png|600]]

>> La figura mostra router (cilindri azzurri), LAN con host (quadratini rossi su segmenti/anelli) e collegamenti punto-punto fra router: vista "piatta", senza alcuna struttura amministrativa.

---
## Slide 25 – Internet = network interconnesse

![[RT04-s025-1.png|600]]

>> Stessa topologia della slide precedente, ma ora i router sono raggruppati in domini (le "nuvole" grigie): ciascun dominio è gestito da un'unica amministrazione (Autonomous System, AS). Le nuvole più scure nel dominio in basso a sinistra mostrano che anche all'interno di un dominio ci possono essere ulteriori suddivisioni (es. aree).

---
## Slide 26 – Internet: grafo semplificato

![[RT04-s026-1.png|600]]

- Exterior Gateway Protocols (EGP)
- Interior Gateway Protocols (IGP)

>> Le linee continue fra router di domini diversi sono gestite dai protocolli **EGP** (instradamento fra AS, oggi BGP); le linee tratteggiate all'interno di un dominio rappresentano la raggiungibilità interna, gestita dagli **IGP** (es. RIP, OSPF). Il dettaglio interno di ogni AS è nascosto agli altri: fra AS si scambiano solo informazioni aggregate di raggiungibilità.

---
## Slide 27 – IGP

- Consideriamo per primi i meccanismi di routing IGP
- Due metodologie e due protocolli:
	- Distance vector -> RIP
	- Link state -> OSPF

---
## Slide 28 – Distance vector

- Basato su Bellman-Ford, in versione dinamica e distribuita proposta da Ford-Fulkerson
- **Dialogo strettamente fra router vicini**
	- Ogni nodo scopre i suoi vicini e ne calcola la distanza da se stesso
	- Ogni nodo invia ai propri vicini periodicamente un vettore contenente la stima della sua distanza da tutti gli altri nodi della rete (quelli di cui è a conoscenza)
- E' un protocollo semplice e richiede poche risorse
- Problemi:
	- convergenza lenta, partenza lenta (cold start)
	- problemi di stabilità: conteggio all'infinito

>> Regola di aggiornamento: quando il nodo $x$ riceve dal vicino $v$ il vettore $D_v(\cdot)$, per ogni destinazione $y$ calcola
>> $$D_x(y) = \min_{v \in \text{vicini}(x)} \{ c(x,v) + D_v(y) \}$$
>> e come next hop sceglie il vicino $v$ che realizza il minimo. Ogni nodo conosce quindi solo "distanza + direzione" verso ogni destinazione, non la topologia completa ("routing by rumor").

---
## Slide 29 – Esempio

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

1. A riceve DV(B) – Tabella di A

| dest | Costo, next hop |
| --- | --- |
| A | 0 |
| B | 1, B |
| C | **3, B** |
| D | **2, B** |

2. A riceve DV(C) – Tabella di A

| dest | Costo, next hop |
| --- | --- |
| A | 0 |
| B | 1, B |
| C | 3, B |
| D | 2, B |
| E | **10, B** |

3. B riceve DV(D) – Tabella di B

| dest | Costo, next hop |
| --- | --- |
| A | 1, A |
| B | 0 |
| C | 2, C |
| D | 1, D |
| E | **3, D** |

4. A riceve DV(B) – Tabella di A

| dest | Costo, next hop |
| --- | --- |
| A | 0 |
| B | 1, B |
| C | 3, B |
| D | 2, B |
| E | **4, B** |

>> Costi dei link nel grafo: A–B = 1, A–C = 6, B–C = 2, B–D = 1, C–D = 3, C–E = 7, D–E = 2.
>> Passo 1: da DV(B), A calcola C: $1+2=3 < 6$ (diretto) → (3, B); D: $1+1=2$ → (2, B).
>> Passo 2: DV(C) porta la destinazione E. Con la regola di Bellman-Ford "pura" A otterrebbe E via C con costo $c(A,C)+D_C(E)=6+7=13$, next hop C. Il valore 10, B della slide corrisponde invece al cammino A→B→C→E ($1+2+7=10$), cioè sfrutta il fatto che A raggiunge già C a costo 3 passando per B: è un cammino reale, ma a rigore B non ha ancora annunciato E, quindi in un vero DV la voce sarebbe (13, C) e diventerebbe (4, B) solo al passo 4.
>> Passo 3: B riceve DV(D): E via D $=1+2=3$ → (3, D); C via D $=1+3=4 > 2$, resta (2, C).
>> Passo 4: A riceve il nuovo DV(B) che contiene (E,3): E via B $=1+3=4$ → (4, B). Questi sono i costi minimi definitivi da A: B=1, C=3, D=2, E=4 (tutti con next hop B).

---
## Slide 30 – Esempio 3.18 dal libro

![[RT04-s030-1.png|400]]

![[RT04-s030-2.png|650]]

Evoluzione del distance vector di A

A riceve i DV sempre solo da B e F (suo diretti vicini)

I DV di B ed F sono progressivamente più completi e permettono ad A di venire a conscenza dell'intera rete

DV ricevuti da B (D = destinazione, C = costo):

| D | B - Time T | B - Time 2T | B - Time 3T | B - Time 4T |
| --- | --- | --- | --- | --- |
| A | 1 | 1 | 1 | 1 |
| B | - | - | - | - |
| C | 3 | 3 | 3 | 3 |
| D |  | 5 | 4 | **5** |
| E | 5 | 3 | 3 | **4** |
| F | 1 | 1 | 1 | 1 |

DV ricevuti da F:

| D | F - Time T | F - Time 2T | F - Time 3T | F - Time 4T |
| --- | --- | --- | --- | --- |
| A | 3 | 2 | 2 | 2 |
| B | 1 | 1 | 1 | 1 |
| C |  | 4 | 4 | 4 |
| D | 6 | 3 | **6** | 6 |
| E | 2 | 2 | **3** | 3 |
| F | - | - | - | - |

Tabella di A (D = destinazione, C = costo, NH = next hop):

| D | A - Time T | A - Time 2T | A - Time 3T | A - Time 4T | A - Time 5T |
| --- | --- | --- | --- | --- | --- |
| A | - | - | - | - | - |
| B | 1, B | 1, B | 1, B | 1, B | 1, B |
| C |  | 4, B | 4, B | 4, B | 4, B |
| D |  | 9, F | **6, F** | **5, B** | **6, B** |
| E |  | 5, F | **4, B** | 4, B | **5, B** |
| F | 3, F | **2, B** | 2, B | 2, B | 2, B |

(in grigio nella figura le voci modificate rispetto al passo precedente; il DV di B al tempo $kT$ e quello di F al tempo $kT$ producono la tabella di A al tempo $(k+1)T$)

>> Nel grafo della figura (estratto dal libro) le etichette dei nodi e dei costi sono in gran parte perse nella resa del PDF; dalla tabella iniziale di A si ricava comunque $c(A,B)=1$ e $c(A,F)=3$.
>> Verifica del passaggio T → 2T: A combina i DV di B e F al tempo T:
>> - C: via B $1+3=4$ (F non conosce C) → (4, B)
>> - D: via F $3+6=9$ (B non conosce D) → (9, F)
>> - E: via B $1+5=6$, via F $3+2=5$ → (5, F)
>> - F: via B $1+1=2 < 3$ (diretto) → (2, B)
>>
>> Passaggio 2T → 3T (DV al tempo 2T): D via B $1+5=6$, via F $3+3=6$ (parità, resta F); E via B $1+3=4$, via F $3+2=5$ → (4, B).
>> Passaggio 3T → 4T: D via B $1+4=5$ → (5, B).
>> Passaggio 4T → 5T: i DV di B e F riportano ora distanze maggiori verso D ed E (B: D=5, E=4; F: D=6, E=3), quindi A aggiorna D → $1+5=6$ e E → $1+4=5$ via B. Le distanze possono anche **aumentare**: un nodo sostituisce sempre la propria stima con quella derivata dall'ultimo DV ricevuto dal next hop, il che permette di seguire variazioni della rete (qui, a giudicare dalle tabelle, un peggioramento dei collegamenti verso D/E intervenuto fra 2T e 3T).

---
## Slide 31 – Algoritmo

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
## Slide 32 – Cold start e tempo di convergenza

- Allo start-up le tabelle dei singoli nodi contengono solo l'indicazione delle distanze dagli immediati vicini
- Da qui in poi lo scambio dei distance vector permette la creazione di tabelle sempre più complete
- L'algoritmo converge al più dopo un numero di passi pari al numero di nodi della rete
- Se la rete è molto grande il tempo di convergenza può essere lungo.
- Cosa succede se lo stato della rete cambia in un tempo inferiore a quello di convergenza dell'algoritmo?
	- Risultato imprevedibile → si ritarda la convergenza

>> Ad ogni scambio periodico l'informazione avanza di un solo salto: un nodo a distanza $h$ salti viene scoperto dopo circa $h$ periodi. Con RIP (aggiornamenti ogni 30 s) e reti con diametro di 10-15 salti si arriva facilmente a diversi minuti di convergenza.

---
## Slide 33 – Bouncing effect

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
## Slide 34 – Convergenza lenta

![[RT04-s034-1.png|600]]

Costi: C–B = 20, C–A = 2, A–B = 1 → 40 (il costo del link A–B passa da 1 a 40).

| Tabella di C (iniziale) | |
| --- | --- |
| A | 2,A |
| B | 3,A |

| Tabella di A (iniziale) | |
| --- | --- |
| B | 1,B |
| C | 2,C |

Evoluzione della voce verso B:
- Tabella di C: B 3,A → B 7,A → B 11,A → B 15,A → B 19,A → B 20,B
- Tabella di A: B 1,B → B 40,B → B 5,C → B 9,C → B 13,C → B 17,C → B 21,C → B 22,C

>> A rileva che il link verso B ora costa 40, ma C dichiara ancora B a 3 (via A): A sceglie $2+3=5$ via C. C, il cui next hop per B è A, deve accettare il nuovo valore di A: $2+5=7$. Ad ogni scambio la stima cresce di 4 (2+2, andata e ritorno sul link A–C) finché A annuncia 21 (da $2+19$): per C la via A costerebbe $2+21=23 > 20$, quindi preferisce il link diretto (20, B); a quel punto A ottiene $2+20=22 < 40$ → (22, C), valore corretto. Il numero di scambi necessari è proporzionale alla differenza dei costi: con costi grandi la convergenza può richiedere moltissimo tempo, e nel frattempo A e C instradano in ciclo i pacchetti per B.

---
## Slide 35 – Count to infinity

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

---
## Slide 36 – Split horizon

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
## Slide 37 – Triggered update

- Una ulteriore modifica per migliorare i tempi di convergenza è relativa alla tempistica con cui inviare i DV ai vicini
	- i protocolli basati su questi algoritmi richiedono di inviare periodicamente le informazioni delle distanze ai vicini
	- è possibile che un DV legato ad un cambiamento della topologia parta in ritardo e venga sopravanzato da informazioni vecchie inviate da altri nodi
- Triggered update: un nodo deve inviare immediatamente le informazioni a tutti i vicini qualora si verifichi una modifica della propria tabella di instradamento

>> L'aggiornamento periodico resta comunque necessario (garantisce che l'informazione venga rinfrescata anche se un messaggio va perso); il triggered update si aggiunge a esso per propagare subito le "cattive notizie" (es. distanza posta a ∞), riducendo la finestra in cui possono circolare informazioni obsolete come nel bouncing effect.

---
## Slide 38 – Ma non basta…

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
## Slide 39 – Link state

- Utilizzando il *protocollo di routing* ogni nodo si costruisce un'immagine del grafo della rete
- Il protocollo di routing ha come scopo fondamentale quello di permettere ad ogni nodo di crearsi l'immagine della rete
	- scoperta dei nodi vicini
	- raccolta di informazioni dai vicini
	- diffusione delle informazioni raccolte a tutti gli altri nodi della rete
- Noto il grafo della rete ogni nodo calcola le tabelle di routing utilizzando un opportuno *algoritmo di routing*

>> Differenza chiave rispetto al distance vector: nel DV ogni nodo dice ai **vicini** cosa sa di **tutta la rete** (le sue distanze); nel link state ogni nodo dice a **tutta la rete** cosa sa dei **suoi vicini** (i suoi link). Così tutti i nodi hanno la stessa mappa e calcolano i percorsi in modo indipendente, senza basarsi su stime altrui: niente count to infinity e convergenza più rapida, al prezzo di più memoria e calcolo.

---
## Slide 40 – Raccolta delle informazioni

- Ogni router deve comunicare con i propri vicini ed "imparare" i loro indirizzi
	- **Hello Packet**
- Deve poi misurare la distanza dai vicini
	- **Echo Packet**
- In seguito ogni router costruisce un pacchetto con lo stato delle linee (**Link State Packet** o LSP) che contiene
	- la lista dei suoi vicini
	- le lunghezze dei collegamenti per raggiungerli

>> Gli Hello vengono inviati periodicamente anche dopo la scoperta: la loro mancata ricezione per un certo intervallo segnala che il vicino (o il link) non è più disponibile, generando un nuovo LSP. La "distanza" misurata con gli echo può essere un ritardo (round-trip time) oppure, più spesso nella pratica, un costo amministrativo configurato (es. in OSPF legato alla banda del link).

---
## Slide 41 – Diffusione ed elaborazione delle informazioni

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
## Slide 42 – Esempio

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
## Slide 43 – Esempio

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
## Slide 44 – Esempio

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
## Slide 45 – Esempio

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
## Slide 46 – Esempio

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
## Slide 47 – Esempio

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
## Slide 48 – Esempio

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
## Slide 49 – Esempio

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
## Slide 50 – Esempio

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
## Slide 51 – Protoclli di routing e IP multicast

- Sia nel distance vector, sia nel link state i router si devono scambiare pacchetti con informazioni di routing
- Questo traffico è logicamente riferito al piano di controllo (segnalazione)
- Tipicamente utilizza le stesse risorse del piano d'utente (servizi)
- Questo potrebbe creare conflitti in caso di sovraccarico dell'infrastruttura

>> In altre parole, il routing IP è "in banda": i messaggi dei protocolli di routing (RIP, OSPF, ...) viaggiano come normali datagrammi IP sugli stessi link e nelle stesse code del traffico utente. Se la rete è congestionata possono andare persi o arrivare in ritardo proprio i messaggi che servirebbero a reagire al problema (es. un router dichiarato irraggiungibile per timeout).

---
## Slide 52 – Una tipica architettura

- Più router fungono da gateway verso diverse network
- Condividono una network per lo scambio
	- Delle informazioni di routing
	- Del traffico fra le varie network che interconnettono

![[RT04-s052-1.png|600]]

Testo nella figura: Network A, Network B, Network C, Network D, Network E, H1, H2, Inter router, User traffic (data plane), Routing infos (control plane).

>> Nella figura la linea verde (User traffic) va da H2 a H1, quella rossa (Routing infos) collega i router.
>> La network centrale ("Inter router", tipicamente una LAN di transito/backbone) è condivisa: su di essa passano sia il traffico H2 → H1 (piano d'utente) sia gli scambi di informazioni di routing fra i tre router (piano di controllo).

---
## Slide 53 – Il traffico di routing

- Il traffico di routing condivide le risorse con il traffico d'utente
- Per questa ragione va minimizzato

![[RT04-s053-1.png|600]]

- Maglia completa
- N router N(N-1)/2 (circa $N^2$ scambi di informazioni di routing)

>> Se ogni router invia le proprie informazioni separatamente (unicast) a ciascuno degli altri, servono tante "relazioni" quante sono le coppie di router: $\binom{N}{2} = \frac{N(N-1)}{2}$, cioè $O(N^2)$. Nella figura $N = 3$ → 3 scambi bidirezionali (le frecce rosse); con $N = 10$ diventerebbero già 45.

---
## Slide 54 – Multicast

- Domanda:
	- Possiamo ridurre il traffico del piano di controllo?
- Risposta:
	- **SI** se la network supporta il punto-multipunto un invio di informazioni di routing può raggiungere molti router in un sol colpo
- Operativamente
	- Utilizzo indirizzi IP Multicast

>> Su una LAN broadcast (es. Ethernet) un singolo frame inviato a un indirizzo multicast viene ricevuto da tutte le interfacce iscritte al gruppo: il router trasmette una sola volta invece di $N-1$ volte.

---
## Slide 55 – IP Multicast

- Indirizzi multicast
	- da 224.0.0.0 a 239.255.255.255
- Come utilizzarli?
- I router possono utilizzare diversi protocolli in contemporanea
- 224.0.0.9 RIPv2
- 224.0.0.5 OSPF All routers
- 224.0.0.6 OSPF Designated routers
- 224.0.0.10 EIGRP Routers
- 224.0.0.24 OSPF TE

>> Sono gli indirizzi della ex classe D (primi 4 bit = 1110, cioè 224.0.0.0/4). Il blocco 224.0.0.0/24 ("Local Network Control Block") è riservato ai protocolli di controllo sul link locale: i pacchetti verso questi indirizzi non vengono mai inoltrati dai router (di solito sono inviati con TTL = 1). Ogni protocollo di routing ha il proprio gruppo, così un router riceve solo i messaggi dei protocolli che usa.

>> **Collegamento con 01** → [[01 - Instradamento IPv4 e IPv6#Slide 95 – Classe delle reti|slide 95: la classe D, cioè gli indirizzi multicast]]

---
## Slide 56 – The Internet Group Management Protocol (IGMP)

- Serve per dichiarare appartenenza ad un gruppo di multicast
- Prevede dei messaggi per
	- Iscriversi ad un gruppo
	- Abbandonare un gruppo
	- Valutare l'appartenenza ad un gruppo o meno

>> In IGMP (v2) i tre casi corrispondono a: *Membership Report* (un host si iscrive / conferma l'iscrizione), *Leave Group* (abbandono), *Membership Query* (il router chiede periodicamente quali gruppi hanno ancora membri sul link). IGMP è trasportato direttamente in IP (protocol number 2) e opera fra host e router dello stesso link; in IPv6 il suo ruolo è svolto da MLD (parte di ICMPv6).

---
## Slide 57 – Il traffico multicast

- Un messaggio raggiunge tutti i calcolatori del gruppo

![[RT04-s057-1.png|600]]

- Topologia logica a stella
- N router - N messaggi

>> Ogni router invia **un solo** messaggio multicast che raggiunge tutti gli altri: con $N$ router servono $N$ messaggi in tutto (uno per router), contro gli $N(N-1)/2$ scambi della maglia completa della slide 53. Il costo cresce quindi linearmente invece che quadraticamente.

---
## Slide 58 – Da ricordare

- Il routing è **gerarchico**
	- **Interior gateway protocols** (IGP)
	- **Exterior gateway protocols** (EGP)
- IGP
	- **Distance vector**: semplice ma limitato
	- **Link state**: più complesso ed efficace
- Normalmente le informazioni sono scambiate usando indirizzamento su **gruppi multicast**

---
## Slide 59 – Come sono implementati distance vector e link state?

Come sono implementati distance vector e link state?

>> Le slide seguenti mostrano l'implementazione del distance vector con RIP (v1 e v2); il corrispondente protocollo link state (Dijkstra) usato in Internet è OSPF.

---
## Slide 60 – Routing Information Protocol (RIP)

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
## Slide 61 – Response

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
## Slide 62 – RIP: formato dei pacchetti

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
## Slide 63 – RIP: significato dei campi

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
## Slide 64 – RIP: la tabella di routing

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
## Slide 65 – RIP: aggiornamento della tabella di routing

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
## Slide 66 – RIP: problematiche

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
## Slide 67 – La mancanza di CIDR

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
## Slide 68 – RIP versione 2

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
## Slide 69 – RIP versione 2

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
## Riassunto

>> **Concetti generali**
>> - Instradare significa scegliere il **next hop**. L'**algoritmo** calcola il percorso, il **protocollo** definisce come i router si scambiano le informazioni.
>> - Algoritmi **senza tabella**: flooding, random, deflection (hot potato), source routing. Algoritmi **con tabella**: fisso/centralizzato oppure dinamico a distanza minima.
>> - **Flooding**: ogni pacchetto viene ritrasmesso su tutte le uscite. È robusto, ma i pacchetti proliferano. Rimedi: non ritrasmettere sull'interfaccia di arrivo, identificare i pacchetti (sorgente + numero di sequenza), usare il TTL.
>>
>> **Shortest path e grafi**
>> - La rete si modella come un grafo pesato $G=(V,E)$ con $w(i,j)>0$ e $w=\infty$ se non c'è l'arco.
>> - Il routing è gerarchico: gli **IGP** operano dentro un AS (distance vector, es. RIP; link state, es. OSPF), gli **EGP** fra AS diversi.
>>
>> **Distance vector (Bellman-Ford distribuito)**
>> - Ogni nodo dialoga solo con i vicini e invia loro periodicamente le proprie distanze stimate da tutte le destinazioni note: $D_x(y)=\min_v\{c(x,v)+D_v(y)\}$. Converge al più in un numero di passi pari al numero di nodi.
>> - Problemi: cold start e convergenza lenta. Nel **bouncing effect**, dopo un guasto, informazioni vecchie creano loop temporanei. Nel **count to infinity** la destinazione è irraggiungibile e le stime crescono senza limite. Si interrompe con un limite $D_{max}$ oltre cui la destinazione è considerata irraggiungibile.
>> - Rimedi: **split horizon** (non annunciare X al vicino usato come next hop verso X; con *poisonous reverse* lo si annuncia con distanza ∞) e **triggered update** (invio immediato quando la tabella cambia). Non bastano con loop di tre o più nodi.
>>
>> **Link state e Dijkstra**
>> - Ogni router scopre i vicini (Hello), misura le distanze (Echo) e crea un **LSP** con i vicini e i costi dei link. L'LSP viene diffuso a tutti con flooding, includendo mittente, numero di sequenza ed età.
>> - **Dijkstra**: a ogni passo il nodo non definitivo a distanza minima diventa definitivo e si aggiornano i suoi vicini. Il risultato è l'albero dei cammini minimi. In tabella si memorizza solo il gateway (primo hop).
>> - DV è semplice ma limitato, LS è più complesso ma converge più rapidamente e non soffre di count to infinity.
>>
>> **Multicast**
>> - Con la maglia completa servono $N(N-1)/2$ scambi, con il multicast solo $N$ messaggi. Gli indirizzi multicast vanno da 224.0.0.0 a 239.255.255.255: 224.0.0.9 per RIPv2, 224.0.0.5/6 per OSPF. IGMP serve a iscriversi a un gruppo, abbandonarlo e verificarne l'appartenenza.
>>
>> **RIP**
>> - È un distance vector (RFC 1058; v2 RFC 2453) trasportato su **UDP porta 520**. Messaggi REQUEST (command 1) e RESPONSE (command 2).
>> - I RESPONSE partono **ogni 30 s** (con uno scarto da 1 a 5 s), su richiesta o come triggered update. Un pacchetto è lungo al massimo **512 byte**, cioè **25 entry**.
>> - La metrica è l'hop count: **16 = ∞**, quindi il percorso massimo è di 15 hop e RIP è adatto solo a reti piccole. Timer: timeout 180 s, garbage collection 120 s.
>> - Se l'aggiornamento arriva dal next hop attuale, la nuova distanza si accetta anche se è peggiore.
>> - RIP v1 usa split horizon e triggered update. Non supporta il CIDR (non trasporta la netmask) ed è insicuro.
>> - **RIPv2** aggiunge subnet mask (CIDR), next hop, route tag e autenticazione, usa il multicast 224.0.0.9 ed è compatibile con RIP-1. Resta comunque un distance vector.
