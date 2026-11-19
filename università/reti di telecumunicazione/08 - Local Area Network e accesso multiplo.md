[LAN_new](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/LAN_new.pdf>)

# Local Area Network e accesso multiplo

>> Dalle caratteristiche delle LAN (mezzo condiviso, broadcast, collisioni) si arriva ai protocolli di accesso multiplo, al progetto IEEE 802, a Ethernet con CSMA/CD e alla sua evoluzione, al cablaggio strutturato, al Wi-Fi 802.11 e all'interconnessione con repeater, bridge e switch. I mezzi fisici sono in [[07 - Strato fisico e mezzi trasmissivi]], le prestazioni di ALOHA e CSMA in [[09 - Prestazioni dei protocolli]].

## Indice

1. **LAN e accesso multiplo** (slide 1–10)
	- [[#Slide 2 – LAN: Local Area Networks|LAN: Local Area Networks]]
	- [[#Slide 3 – Scelte per le LAN|Scelte per le LAN]]
	- [[#Slide 4 – Mezzo trasmissivo|Mezzo trasmissivo]]
	- [[#Slide 5 – Reti cablate: topologie|Reti cablate: topologie]]
	- [[#Slide 6 – Topologie punto-multipunto|Topologie punto-multipunto]]
	- [[#Slide 7 – Due caratteristiche|Due caratteristiche]]
	- [[#Slide 8 – Accesso al canale di collegamento|Accesso al canale di collegamento]]
	- [[#Slide 9 -> 10 – Accesso multiplo: tassonomia|Accesso multiplo: tassonomia]]
2. **Protocolli ad accesso casuale e IEEE 802** (slide 11–18)
	- [[#Slide 12 – Protocolli ad accesso casuale|Protocolli ad accesso casuale]]
	- [[#Slide 13 – Protocolli a contesa|Protocolli a contesa]]
	- [[#Slide 14 – Progetto IEEE 802|Progetto IEEE 802]]
	- [[#Slide 15 – Scelta importante di IEEE 802|Scelta importante di IEEE 802]]
	- [[#Slide 16 -> 17 – Commissioni e documenti IEEE 802|Commissioni e documenti IEEE 802]]
	- [[#Slide 18 – PROGETTO IEEE 802|PROGETTO IEEE 802]]
3. **Ethernet e CSMA/CD** (slide 19–32)
	- [[#Slide 20 – Rete Ethernet|Rete Ethernet]]
	- [[#Slide 21 – CSMA/CD|CSMA/CD]]
	- [[#Slide 22 – Slot time|Slot time]]
	- [[#Slide 23 – Formato del Frame|Formato del Frame]]
	- [[#Slide 24 -> 25 – Campi del frame|Campi del frame]]
	- [[#Slide 26 – (Screenshot Wireshark: frame Ethernet)|(Screenshot Wireshark: frame Ethernet)]]
	- [[#Slide 27 – Destination address|Destination address]]
	- [[#Slide 28 – Source address|Source address]]
	- [[#Slide 29 – Type|Type]]
	- [[#Slide 30 – Delimitazione delle trame|Delimitazione delle trame]]
	- [[#Slide 31 – Collision Domain|Collision Domain]]
	- [[#Slide 32 – Broadcast domain|Broadcast domain]]
4. **Strato fisico di Ethernet** (slide 33–44)
	- [[#Slide 34 -> 36 – Ethernet classica a 10 Mbit/s|Ethernet classica a 10 Mbit/s]]
	- [[#Slide 37 – Ethernet Cabling|Ethernet Cabling]]
	- [[#Slide 38 – Evoluzione dell’Ethernet|Evoluzione dell’Ethernet]]
	- [[#Slide 39 -> 40 – IEEE 802.3 u – Fast Ethernet a 100 Mbit/s|IEEE 802.3 u – Fast Ethernet a 100 Mbit/s]]
	- [[#Slide 41 -> 42 – IEEE 802.3 z - Gigabit Ethernet|IEEE 802.3 z - Gigabit Ethernet]]
	- [[#Slide 43 – Multigigabit Ethernet|Multigigabit Ethernet]]
	- [[#Slide 44 – Carrier Ethernet|Carrier Ethernet]]
5. **Cablaggio strutturato** (slide 45–50)
	- [[#Slide 46 – Cablaggio strutturato|Cablaggio strutturato]]
	- [[#Slide 47 – Componenti del cablaggio strutturato|Componenti del cablaggio strutturato]]
	- [[#Slide 48 – Armadio di rete|Armadio di rete]]
	- [[#Slide 49 – Apparati attivi nell’armadio|Apparati attivi nell’armadio]]
	- [[#Slide 50 – Patch cord e connettività|Patch cord e connettività]]
6. **Wireless LAN 802.11** (slide 51–74)
	- [[#Slide 52 – Lo standard IEEE 802.11|Lo standard IEEE 802.11]]
	- [[#Slide 53 – Lo strato fisico 802.11|Lo strato fisico 802.11]]
	- [[#Slide 54 – Uso della banda ISM|Uso della banda ISM]]
	- [[#Slide 55 – Lo strato fisico 802.11a|Lo strato fisico 802.11a]]
	- [[#Slide 56 – Lo strato fisico 802.11b|Lo strato fisico 802.11b]]
	- [[#Slide 57 – Canalizzazione 802.11b|Canalizzazione 802.11b]]
	- [[#Slide 58 – Lo strato fisico 802.11g|Lo strato fisico 802.11g]]
	- [[#Slide 59 -> 62 – Architettura di rete 802.11|Architettura di rete 802.11]]
	- [[#Slide 63 -> 64 – Problemi di accesso multiplo al canale|Problemi di accesso multiplo al canale]]
	- [[#Slide 65 -> 66 – Protocollo MAC 802.11 – DCF|Protocollo MAC 802.11 – DCF]]
	- [[#Slide 67 -> 68 – Protocollo MAC 802.11 – PCF|Protocollo MAC 802.11 – PCF]]
	- [[#Slide 69 -> 70 – Trama MAC 802.11|Trama MAC 802.11]]
	- [[#Slide 71 -> 74 – Indirizzamento 802.11|Indirizzamento 802.11]]
7. **Interconnessione di LAN** (slide 75–82)
	- [[#Slide 76 – Alternative di interconnessione di LAN|Alternative di interconnessione di LAN]]
	- [[#Slide 77 – REPEATER|REPEATER]]
	- [[#Slide 78 – Bridge|Bridge]]
	- [[#Slide 79 – Bridge da 802.x a 802.y|Bridge da 802.x a 802.y]]
	- [[#Slide 80 – SWITCH|SWITCH]]
	- [[#Slide 81 – Differenza fra hub e switch|Differenza fra hub e switch]]
	- [[#Slide 82 – Learning Switch|Learning Switch]]

---
## Slide 1 – Local Area Network e Accesso multiplo

Local Area Network e Accesso multiplo

---
## Slide 2 – LAN: Local Area Networks

Infrastruttura di telecomunicazioni che consente ad apparati **indipendenti** (stazioni) di comunicare in un'area **limitata** attraverso **un canale fisico condiviso** ad **elevata bit rate** con **bassi tassi di errore**

- **INDIPENDENTI**: assenza di architetture master-slaves
- **LIMITATA**: un'area di dimensioni moderate è spesso privata, non soggetta a regulations
- **CANALE FISICO CONDIVISO**: potrebbe essere un unico mezzo fisico condiviso
- **ELEVATA BIT RATE**: uso esclusivo dell'intera banda anche se per brevi intervalli
- **BASSI TASSI DI ERRORE**: a causa delle piccole distanze si dispone di molta potenza

>> "Uso esclusivo dell'intera banda anche se per brevi intervalli": in una LAN a mezzo condiviso chi trasmette usa tutta la capacità del canale (es. 10 Mbit/s), ma solo per la durata della propria trama; poi il canale passa a un altro. È l'opposto della canalizzazione (FDMA/TDMA), dove ognuno ha sempre una fetta fissa e piccola della banda.
>>
>> "Non soggetta a regulations": l'area è privata (un edificio, un campus), quindi il cablaggio non richiede autorizzazioni da parte di un operatore o di un ente regolatore, a differenza delle reti pubbliche.

---
## Slide 3 – Scelte per le LAN

- Le LAN sono *reti di calcolatori* e devono essere implementate scegliendo *protocolli per tutti gli strati dell'OSI*
- Le **dimensioni limitate** rendono convenienti soluzioni particolari per gli **strati 1 e 2**
	- di questo si occupano gli standard per le LAN
- Occorre scegliere
	- Il mezzo trasmissivo
	- La topologia
	- Un eventuale protocollo di accesso

>> Dallo strato 3 in su una LAN usa gli stessi protocolli di qualsiasi altra rete (tipicamente IP, TCP/UDP). Gli standard LAN (IEEE 802) definiscono solo strato fisico e strato di collegamento.

---
## Slide 4 – Mezzo trasmissivo

- Nelle reti geografiche (WAN) e nella rete di accesso la fibra ottica sta progressivamente sostituendo il rame
	- Abbiamo già discusso gli elementi fondamentali
		- Maggiore banda e distanza
		- Minore costo
		- Connettorizzazione più complessa e costosa
- Nelle LAN
	- Per le dimensioni limitate il costo del mezzo incide meno rispetto al costo dei connettori per le stazioni
		- La penetrazione delle fibre ottiche è più lenta
		- Per gli ultimi metri al momento sopravvive la soluzione basata su UTP
- Il mezzo radio, per motivi di affidabilità e di costi non è stato usato fino alla fine degli anni '90
	- Oggi ha una rilevanza grazie alla grande diffusione commerciale del Wi-Fi

>> In una WAN il costo dominante è il cavo (chilometri di posa), quindi conviene la fibra, che copre distanze maggiori con meno rigeneratori. In una LAN i cavi sono corti (decine di metri) e il costo si concentra nelle interfacce di ogni stazione: un connettore e un transceiver ottico costano molto più di una presa RJ45 su doppino UTP. Per questo la fibra si usa nelle dorsali (tra armadi e piani) e il rame fino alla scrivania. Mezzi trasmissivi: [[07 - Strato fisico e mezzi trasmissivi]].

---
## Slide 5 – Reti cablate: topologie

- Topologie tradizionalmente preferita nelle WAN
	- A stella
	- A maglia più o meno completa
	- Architettura gerarchica
- Topologie punto-multipunto
	- Non adatte per le WAN
		- Nelle WAN è importante avere i collegamenti più lunghi possibile
		- Le prese intermedie sottraggono potenza e aggiungono disturbi imponendo collegamenti più corti
	- Sono state preferite nelle prime proposte di LAN
		- Se i terminali sono pochi non servono nodi di commutazione

>> Su un bus ogni presa (tap) preleva una parte della potenza del segnale e introduce riflessioni, quindi più stazioni ci sono, più corto deve essere il cavo. In una LAN con poche stazioni vicine questo non è un problema, e in cambio non serve nessun apparato attivo (switch, router): basta un cavo a cui si attaccano tutti.

---
## Slide 6 – Topologie punto-multipunto

- Bus bidirezionale
- Bus unidirezionale
- Doppio bus (dual bus)
- Anello

![[RT08-s006-1.png|450]]

- Bus unidirezionale: In bound channel, Out bound channel

>> - **Bus bidirezionale**: il segnale di ogni stazione si propaga in entrambe le direzioni. I triangoli alle estremità sono i terminatori, che assorbono il segnale ed evitano le riflessioni (è la topologia dell'Ethernet originale su coassiale).
>> - **Bus unidirezionale**: le stazioni trasmettono su un canale (out bound) che si ripiega e torna indietro come canale di ricezione (in bound). In questo modo ogni trasmissione passa davanti a tutte le stazioni.
>> - **Doppio bus**: due bus unidirezionali con versi opposti. Il quadrato in testa a ogni bus genera le trame (slot) e il triangolo in fondo è il terminatore. Per raggiungere una stazione si usa il bus che va nella sua direzione (è la topologia di DQDB, IEEE 802.6).
>> - **Anello**: catena di collegamenti punto-punto chiusa su se stessa, in cui ogni interfaccia ritrasmette il segnale alla successiva (es. Token Ring, IEEE 802.5).

---
## Slide 7 – Due caratteristiche

- Topologie punto-multipunto = mezzo di trasmissione condiviso = due caratteristiche peculiari
	- **Broadcast**
		- La LAN fornisce in modo nativo una comunicazione da uno a tutti (broadcast) sul mezzo condiviso
		- Per evitare che tutti i calcolatori leggano i dati di tutte le comunicazioni si deve introdurre un meccanismo di indirizzamento a livello di protocollo LAN
			- Si vuole evitare che lo strato 3 debba elaborare anche le conversazioni degli altri
	- **Collisione**
		- Su di un mezzo condiviso esiste la possibilità che più utenti inviino informazioni contemporaneamente
		- Interferenza – perturbazione o distruzione dell'informazione – perdita di trasparenza semantica

>> Broadcast: fisicamente ogni scheda di rete riceve tutte le trame, ma confronta l'indirizzo di destinazione (indirizzo MAC, slide 25) con il proprio e passa allo strato 3 solo quelle per sé, più quelle broadcast e multicast. Così la CPU non deve elaborare il traffico degli altri. In modalità "promiscua" (come fa Wireshark) la scheda passa invece tutto.
>>
>> Collisione: se due segnali si sovrappongono sul mezzo, il ricevitore vede la loro somma e non riesce a decodificare nessuno dei due. Servono quindi regole di accesso al mezzo (protocolli MAC). La "trasparenza semantica" è la garanzia che i bit arrivino senza errori.

---
## Slide 8 – Accesso al canale di collegamento

- Collegamenti con canali punto-punto e commutati
	- Solo sorgente e destinazione hanno accesso al canale quindi la sorgente può liberamente impegnare tutta la capacità certa di raggiungere la destinazione
- Collegamenti con canali ad accesso multiplo
	- Più sorgenti possono accedere al canale contemporaneamente determinando quindi la «**collisione**»
- Collegamenti con accesso al canale controllato
	- Il canale è condiviso ma l'accesso viene controllato in modo centralizzato o distribuito per **evitare** **fenomeni di collisione**

---
## Slide 9 -> 10 – Accesso multiplo: tassonomia

![[RT08-s009-1.png|600]]

- Tecniche di accesso multiplo
	- Canalizzazione
		- FDMA
		- TDMA
		- CDMA
	- Accesso dinamico
		- Accesso ordinato
			- Prenotazione
			- Trasferimento di permesso
		- Accesso a contesa

>> Nella slide 10 lo stesso albero ha il riquadro **Accesso a contesa** evidenziato in rosso: è la famiglia di protocolli trattata da qui in avanti (ALOHA, CSMA, CSMA/CD, CSMA/CA).

>> - **Canalizzazione**: la capacità viene divisa in canali fissi assegnati in modo statico, senza collisioni. **FDMA** divide in frequenza (ogni utente ha la sua banda), **TDMA** divide in tempo (ogni utente ha il suo slot in una trama ciclica), **CDMA** divide per codice (tutti trasmettono insieme sulla stessa banda, ciascuno con un codice ortogonale agli altri). Va bene per traffico costante, ma spreca capacità con traffico a raffiche (bursty), tipico dei dati: i canali degli utenti inattivi restano vuoti.
>> - **Accesso dinamico**: la capacità si assegna solo a chi ha qualcosa da trasmettere.
>> 	- **Ordinato** (senza collisioni): le stazioni trasmettono a turno. Con la *prenotazione* le stazioni chiedono prima il canale (in modo centralizzato, es. polling, o distribuito, es. DQDB). Con il *trasferimento di permesso* un "testimone" (token) passa da una stazione all'altra e trasmette solo chi lo possiede (Token Ring, Token Bus).
>> 	- **A contesa** (casuale): ognuno trasmette quando vuole, le collisioni sono ammesse e vengono risolte con ritrasmissioni (Ethernet, Wi-Fi). È semplice e ha basso ritardo a basso carico, ma non garantisce un ritardo massimo.

---
## Slide 11 – Protocolli ad accesso casuale: funzionalità e prestazioni

Protocolli ad accesso casuale: funzionalità e prestazioni

---
## Slide 12 – Protocolli ad accesso casuale

![[RT08-s012-1.png|650]]

- Protocolli con accesso casuale
	- Senza rilevazione del canale
		- ALOHA
		- Slotted ALOHA
	- Con rilevazione del canale
		- Senza rilevazione di collisioni
			- CSMA
			- Slotted CSMA
			- CSMA/CA
		- Con rilevazione di collisioni
			- CSMA/CD
			- Slotted CSMA/CD

>> - **ALOHA**: si trasmette appena si ha una trama, senza ascoltare il canale. **Slotted ALOHA**: il tempo è diviso in slot e si può iniziare solo all'inizio di uno slot, così il periodo di vulnerabilità si dimezza. Throughput massimo 18,4% (ALOHA) e 36,8% (slotted).
>> - **CSMA** (Carrier Sense Multiple Access): prima di trasmettere si ascolta il canale e si trasmette solo se è libero. Le collisioni restano possibili per via del ritardo di propagazione: due stazioni possono sentire il canale libero nello stesso momento.
>> - **CSMA/CD** (Collision Detection): mentre trasmette, la stazione controlla il canale. Se rileva una collisione interrompe subito la trasmissione, così non spreca il resto della trama (Ethernet classica, slide 21).
>> - **CSMA/CA** (Collision Avoidance): sul canale radio non si riesce a rilevare la collisione mentre si trasmette, quindi si cerca di evitarla con attese casuali prima di trasmettere, e la riuscita si verifica con un ACK (Wi-Fi 802.11).
>>
>> Le prestazioni di questi protocolli sono in [[09 - Prestazioni dei protocolli]].

---
## Slide 13 – Protocolli a contesa

- Ammettono le collisioni e devono cercare di gestirle
- Vengono anche chiamati protocolli di controllo di accesso al mezzo trasmissivo (Medium Access Control o MAC)
- CAP - Channel Access Procedure
	- E' l'insieme delle procedure che la stazione effettua per realizzare l'accesso al canale
- CRA - Collision Resolution Algorithm
	- E' l'insieme delle procedure che la stazione effettua per rivelare ed eventualmente recuperare situazioni di collisione

>> Esempio con CSMA/CD in Ethernet. La **CAP** è: ascolta il canale, aspetta che sia libero (più l'intervallo tra trame), poi trasmetti. Il **CRA** è: se rilevi una collisione interrompi, invia la sequenza di jamming, poi aspetta un tempo casuale con il *binary exponential backoff* (dopo la n-esima collisione scegli k a caso tra 0 e $2^{\min(n,10)}-1$ e attendi k slot time) e riprova. Dopo 16 tentativi falliti la trama viene scartata.

---
## Slide 14 – Progetto IEEE 802

- Molti altri protocolli a contesa e collision free sono stati proposti soprattutto nei tardi anni '70
- Nel 1980 parte il **Progetto IEEE 802** per tentare di definire degli standard per LAN
	- IEEE ha già avuto un grande successo con lo standard IEEE 488, per applicazioni ai banchi di misura comandati da un calcolatore
		- Propone un'architetture master-slave
		- Si rifà ad uno standard di mercato proprietario: lo HP-IB (Hewlett Packard Interface Bus)
- Si organizza in commissioni che producono documenti denominati IEEE 802.x
	- diventeranno standard ISO col nome IS 8802/x

>> Curiosità: il numero 802 viene da febbraio 1980 (anno 80, mese 2), quando il progetto è partito.

---
## Slide 15 – Scelta importante di IEEE 802

![[RT08-s015-1.png|300]]

- Strato 3: Strati superiori
- Strato 2: Sottostrato **LLC**, Sottostrato **MAC**
- Strato 1: Physical signaling, Medium specifications

- Lo strato 2 viene diviso in due sottostrati
	- LLC = Logical Link Control
	- MAC = Medium Access Control
- Lo strato LLC è indipendente dal mezzo fisico, dalla topologia e dal protocollo di accesso
- Anche lo strato 1 viene diviso in due

>> - **MAC** (sottostrato inferiore): dipende dal tipo di LAN. Decide quando una stazione può trasmettere (CSMA/CD, token, …), definisce il formato della trama, gli indirizzi a 48 bit e il controllo d'errore (FCS).
>> - **LLC** (sottostrato superiore, IEEE 802.2): è uguale per tutte le LAN. Offre allo strato 3 un'interfaccia unica, indica a quale protocollo di rete consegnare i dati (campi DSAP/SSAP) e può offrire servizi con o senza connessione e riscontro. In pratica, sulle LAN Ethernet con IP si usa quasi solo il servizio senza connessione e senza riscontro, e spesso al posto di LLC si usa il campo Type di Ethernet II (slide 23–24).
>> - Strato 1: *physical signaling* è la codifica dei bit (es. Manchester) ed è indipendente dal mezzo, *medium specifications* è la parte che dipende dal mezzo (cavo, connettori, livelli elettrici).

---
## Slide 16 -> 17 – Commissioni e documenti IEEE 802

- IEEE 802.1 : descrizione generale del progetto, modello di riferimento
	- Non ha mai finito i suoi lavori
	- Contiene anche parte di standard che non trovano facilmente posto in altri documenti
- IEEE 802.2 : Sottostrato LLC, interfaccia con gli strati superiori
- **IEEE 802.3** : Rete locale basata su CSMA/CD, ispirata alla rete Ethernet
- IEEE 802.4 : Rete locale basata su Token Passing Bus
- IEEE 802.5 : Rete locale basata su Token Ring, ispirata alla rete Token Ring di IBM
- IEEE 802.6 : Reti in Area Metropolitana o MAN (Metropolitan Area Networks)

- IEEE 802.7 : Studi sulle tecnologie a larga banda
- IEEE 802.8 : Studi sulla tecnologie in fibra ottica
- IEEE 802.9 : ISLAN (Isochronous LAN)
- IEEE 802.10 : LAN/MAN security
- **IEEE 802.11** : WLAN (Wireless LAN)
- IEEE 802.12 : Reti locali a 100 Mbit/s basate su Demand Priority (standard AnyLAN di HP)
- IEEE 802.13 : non esiste
- IEEE 802.14 : Cable modem per impianti di TV via cavo
- IEEE 802.15 : Personal Area Networks (Bluetooth)
- IEEE 802.16 : Accesso wireless a banda larga per utenti residenziali
- IEEE 802.17 : Resilient Packet Ring (RPR)

>> Oggi restano attivi soprattutto 802.1 (bridging e switching: Spanning Tree 802.1D, VLAN 802.1Q, autenticazione 802.1X), 802.3 (Ethernet), 802.11 (Wi-Fi) e 802.15 (Bluetooth, Zigbee con 802.15.4). Molti degli altri (802.4, 802.5, 802.6, 802.12, …) sono stati abbandonati. 802.16 è WiMAX.

---
## Slide 18 – PROGETTO IEEE 802

![[RT08-s018-1.png|600]]

- Network layer
- Data Link layer:
	- LLC: 802.2 Logical Link Control
	- MAC: 802.3, 802.4, 802.5, 802.6, …, 802.11
- Physical layer: CSMA/CD, Token Bus, Token Ring, DQDB, Wireless LAN

>> La figura riassume la scelta della slide 15: un solo LLC (802.2) comune, sopra MAC e strati fisici diversi per ogni tipo di LAN. DQDB = Distributed Queue Dual Bus, il protocollo a doppio bus di 802.6 (slide 6). I blocchi MAC scendono anche nello strato fisico, perché ogni standard 802.x definisce sia il MAC sia i suoi strati fisici.

---
## Slide 19 – Rete Ethernet e IEEE 802.3

Rete Ethernet e IEEE 802.3

---
## Slide 20 – Rete Ethernet

- Nasce da sviluppi della Xerox nel 1976, poi si forma in consorzio comprendente
	- Digital Equipment Corporation (DEC)
	- Intel
	- Xerox
- Il consorzio nel 1978 mette a punto lo standard a 10Mbit/s chiamato DIX
- Nel 1983 il DIX diviene con poche modifiche lo standard IEEE 802.3
- È basato sul protocollo di accesso CSMA/CD

>> Date: l'articolo di Metcalfe e Boggs su Ethernet (Xerox PARC) è del 1976. La specifica DIX 1.0 ("Blue Book") è stata pubblicata nel 1980 e la versione 2.0 (Ethernet II) nel 1982, quindi il "1978" della slide è al più la data in cui è partita la collaborazione. Lo standard IEEE 802.3 è del 1983. Una delle "poche modifiche" è il campo Length al posto del campo Type (slide 23–24).

---
## Slide 21 – CSMA/CD

- Protocollo Carrier Sensing Multiple Access with Collision Detection
	- **_Limita molto_** ma **_non elimina_** la possibilità che due stazioni parlino in contemporanea
	- È quindi possibile la **_collisione_** fra due o più flussi informativi risultante in **_perdita di trame_** (layer 2 PDU)
- Permette un'utilizzazione molto efficiente della banda disponibile sul mezzo trasmissivo
- Non è in grado di garantire in modo certo i tempi di consegna delle trame (ritardo di accesso)

>> Funzionamento (1-persistente):
>> 1. la stazione ascolta il canale: se è occupato aspetta che si liberi, poi attende l'IFG (96 bit = 9,6 µs a 10 Mbit/s) e trasmette;
>> 2. mentre trasmette confronta ciò che invia con ciò che legge sul mezzo: se sono diversi c'è una collisione;
>> 3. in caso di collisione smette di trasmettere i dati, invia la sequenza di jamming (così tutti si accorgono della collisione) e applica il backoff esponenziale binario (slide 13) prima di riprovare.
>>
>> Le collisioni restano possibili perché una stazione si accorge che un'altra ha iniziato a trasmettere solo dopo il tempo di propagazione $\tau$. Il ritardo di accesso non è garantito perché il backoff è casuale e, con molto carico, una trama può collidere più volte (dopo 16 tentativi viene scartata).

---
## Slide 22 – Slot time

- Slot time = tempo necessario per trasmettere
	- 512 bit in reti a 10 e 100 Mbit/s
	- 4096 bit in reti a 1 Gbit/s
- La trama deve avere una dimensione minima uguale allo slot time
- Lo slot time deve essere superiore alla somma:
	- Del tempo di andata e ritorno del segnale
	- Del tempo necessario per rilevare la collisione e lanciare la sequenza di jamming
- Sequenza di jamming = 33 bit
	- La sequenza di jamming deve essere abbastanza lunga da garantire il riconoscimento di una collisione nel circuito di CD
- Fissata la dimensione dello slot time
	- Ogni trama di dimensione minore viene scartata
	- Viene imposto il tempo di propagazione massimo e quindi conseguentemente la dimensione massima della rete

>> **Perché serve una trama minima.** Il caso peggiore: A, a un estremo della rete, inizia a trasmettere. Poco prima che il segnale arrivi all'altro estremo (dopo circa $\tau$) anche B inizia. La collisione torna ad A dopo circa $2\tau$. A deve essere ancora in trasmissione quando la collisione gli arriva, altrimenti crede che la trama sia arrivata bene. Quindi:
>> $$T_{trama} = \frac{L_{min}}{C} \ge 2\tau \;(+\text{tempo di rilevazione e jamming})$$
>>
>> **Numeri.** 512 bit = 64 byte (la trama minima di Ethernet).
>> - A 10 Mbit/s: slot time = 512 / 10⁷ = 51,2 µs. Questo budget di andata e ritorno, ritardi dei repeater compresi, fissa la dimensione massima della rete a circa 2500 m (5 segmenti da 500 m con 4 repeater in 10Base5).
>> - A 100 Mbit/s lo slot resta di 512 bit ma dura solo 5,12 µs, quindi il diametro massimo scende a circa 200 m.
>> - A 1 Gbit/s, con 512 bit si scenderebbe a una ventina di metri: per questo lo slot è portato a 4096 bit = 512 byte (4,096 µs) con la *carrier extension*, mentre la trama minima resta di 64 byte.
>>
>> **Refuso probabile**: lo standard IEEE 802.3 prevede una sequenza di jamming di **32 bit**, non 33.
>>
>> "Ogni trama di dimensione minore viene scartata": una trama più corta di 64 byte può essere solo il frammento di una trama interrotta da una collisione (*runt*), quindi il ricevitore la butta.

---
## Slide 23 – Formato del Frame

![[RT08-s023-1.png|600]]

| IEEE 802.3 | Dimensione | Ethernet |
|---|---|---|
| Preamble | 7 byte | Preamble |
| Start Frame Delimiter | 1 byte | |
| Destination Address | 6 byte | Destination Address |
| Source Address | 6 byte | Source Address |
| Length | 2 byte | Type |
| LLC Data | 46-1500 byte | LLC Data |
| Pad | | Pad |
| Frame Check Sequence | 4 byte | Frame Check Sequence |

- Max 1518 byte
- b0 → b7: Ordine di trasmissione

>> Nella figura il Preamble di Ethernet II occupa la stessa altezza di Preamble + SFD di 802.3 (per questo nella tabella la cella accanto all'SFD è vuota); i 46-1500 byte comprendono LLC Data + Pad. In Ethernet DIX il preambolo è un unico blocco di 8 byte che finisce con …10101011, quindi è identico, bit per bit, a 7 byte di preambolo più 1 di SFD.
>>
>> **Conti sulla lunghezza**, esclusi preambolo e SFD:
>> - massima: 6 + 6 + 2 + 1500 + 4 = **1518 byte**
>> - minima: 6 + 6 + 2 + 46 + 4 = **64 byte** = 512 bit = slot time (slide 22)
>>
>> Attenzione: nella figura la parentesi graffa "Max 1518 byte" abbraccia anche preambolo e SFD, ma i 1518 byte si contano **dal Destination Address all'FCS**. Con preambolo e SFD sul cavo si arriva a 1526 byte, a cui si aggiunge l'IFG di 12 byte tra una trama e la successiva.
>>
>> "b0 → b7, ordine di trasmissione": Ethernet trasmette i byte in ordine e, dentro ogni byte, **prima il bit meno significativo** (LSB first). Il campo FCS fa eccezione e si trasmette dal bit di grado più alto.

---
## Slide 24 -> 25 – Campi del frame

- **Preamble**
	- 7 byte tutti uguali a 10101010; producono, a 10 Mbps, un'onda quadra a 10 Mhz per 5,6 µs, che consente al ricevitore di sincronizzare il suo clock con quello del trasmettitore.
- **SFD**
	- uguale a 10101011 ha la funzione di flag di inizio frame
- **Lunghezza / Tipo**
	- Per IEEE 802.3 la lunghezza indica quanti byte ci sono nel campo dati (da 0 a 1500)
		- Il tipo di payload è dato da LLC
		- I primo 4 bit sono sempre 0
	- Per Ethernet indica il Tipo di payload contenuto nel campo dati
		- Uno dei primi 4 bit è ≠0
- **Dati**
	- contiene il payload del livello superiore.

- **Pad** (da to pad = riempire)
	- Se il frame (esclusi preambolo e delimiter) è più corto di 64 byte, con questo campo lo si porta alla lunghezza di 64 byte
- **Frame Checking sequence**
	- Contiene i bit di ridondanza per il codice di controllo dell'errore, di tipo polinomiale di grado 32
- **Indirizzi**
	- Sono composti da 48 bit (6 byte)
	- Sono cablati nella scheda di rete
	- Sono univoci a livello mondiale; i primi 3 byte individuano il costruttore e gli altri 3 numerano progressivamente le schede
	- E' possibile specificare
		- un singolo destinatario (unicast)
			`00-60-b0-78-e8-fd`
		- un indirizzo di gruppo (multicast): il primo bit deve essere a 1
		- un invio a tutte le stazioni (broadcast)
			`ff-ff-ff-ff-ff-ff`

>> **Preambolo, correzione.** 7 byte = 56 bit, che a 10 Mbit/s durano 56 × 0,1 µs = **5,6 µs**: questo numero è giusto. La frequenza invece è sbagliata: con la codifica Manchester la sequenza 1010… produce un'onda quadra a **5 MHz**, non a 10 MHz. Ogni bit dura 100 ns e contiene una transizione a metà, quindi alternando 1 e 0 il periodo è di 2 bit = 200 ns. L'errore viene dal Tanenbaum, che riporta "10 MHz".
>>
>> **SFD**: è il preambolo con gli ultimi due bit "11". Il ricevitore, appena sincronizzato, aspetta questa coppia per sapere dove inizia il Destination Address.
>>
>> **Lunghezza o Tipo: la regola vera.** Il ricevitore guarda il valore dei 2 byte:
>> - **≤ 1500** (0x05DC): è un campo *Length* (802.3) e dopo c'è l'intestazione LLC;
>> - **≥ 1536** (0x0600): è un campo *Type* (Ethernet II), per esempio 0x0800 = IPv4, 0x0806 = ARP, 0x86DD = IPv6.
>>
>> Il criterio dei "primi 4 bit" della slide è impreciso. È vero che una lunghezza ≤ 1500 ha i primi 4 bit a 0, ma lo stesso vale anche per tipi molto comuni: 0x0800 (IPv4) = 0000 1000 0000 0000 inizia con 0000. Nella slide c'è anche il refuso "I primo" per "I primi". In pratica, oggi IP viaggia quasi sempre in trame Ethernet II, con il campo Type.
>>
>> **Pad**: i dati devono essere almeno 46 byte (64 − 18 di intestazione e FCS). Se il payload è più corto, il trasmettitore aggiunge byte di riempimento fino a 46. Con il formato 802.3 il ricevitore toglie il pad grazie al campo Length. Con Ethernet II lo toglie lo strato superiore, perché per esempio IP conosce la propria lunghezza totale.
>>
>> **FCS**: è il CRC-32, calcolato su indirizzi, Length/Type, dati e pad (preambolo e SFD esclusi). La trama con FCS errato viene scartata e non viene ritrasmessa dallo strato 2: Ethernet non usa riscontri.
>>
>> **Indirizzi MAC.**
>> - I primi 3 byte sono l'OUI (Organizationally Unique Identifier) assegnato da IEEE al costruttore. Per esempio 00-60-b0 è un OUI di Hewlett-Packard.
>> - Nel primo byte i due bit meno significativi hanno un ruolo speciale. Il bit 0 è **I/G** (Individual/Group): 0 = unicast, 1 = multicast o broadcast. Il bit 1 è **U/L** (Universal/Local): 0 = indirizzo assegnato dal costruttore, 1 = indirizzo amministrato localmente.
>> - Siccome ogni byte si trasmette partendo dall'LSB, il bit I/G è proprio **il primo bit che va sul cavo**: è il senso di "il primo bit deve essere a 1". Scritto in esadecimale, un indirizzo è multicast se il primo byte è dispari, per esempio 01-00-5e-xx-xx-xx (multicast IPv4) oppure 33-33-xx (multicast IPv6).
>> - Il broadcast ff-ff-ff-ff-ff-ff è il caso particolare di indirizzo di gruppo con tutti i 48 bit a 1.
>> - "Cablati nella scheda" vuol dire scritti in ROM dal costruttore, ma il sistema operativo può sovrascriverli via software (ad esempio la randomizzazione del MAC sui telefoni, che usa indirizzi con il bit U/L a 1).

---
## Slide 26 – (Screenshot Wireshark: frame Ethernet)

![[RT08-s026-1.png|700]]

Screenshot di Wireshark (file `ConnessioneDEISNET_DNS.cap`, filtro `tcp`), con selezionato il frame 6 (`GET / HTTP/1.1`). Campi evidenziati:

```
Frame 6: 790 bytes on wire (6320 bits), 790 bytes captured (6320 bits)
Ethernet II, Src: DellComp_89:b3:e9 (00:06:5b:89:b3:e9), Dst: D-Link_c6:fa:6f (00:50:ba:c6:fa:6f)
    Destination: D-Link_c6:fa:6f (00:50:ba:c6:fa:6f)
    Source: DellComp_89:b3:e9 (00:06:5b:89:b3:e9)
    Type: IP (0x0800)

0000  00 50 ba c6 fa 6f 00 06  5b 89 b3 e9 08 00 ...
```

>> I primi 14 byte della trama sono l'intestazione Ethernet II: 6 byte di destinazione (`00 50 ba c6 fa 6f`), 6 di sorgente (`00 06 5b 89 b3 e9`) e 2 di Type (`08 00` = IPv4). Subito dopo, `45` è il primo byte dell'intestazione IP (versione 4, lunghezza dell'intestazione 5 × 4 = 20 byte).
>>
>> Wireshark non mostra **né il preambolo/SFD né l'FCS**, perché la scheda di rete li toglie prima di passare la trama al sistema operativo. Infatti 790 byte = 14 (Ethernet) + 20 (IP) + 20 (TCP) + 736 (dati HTTP, `Len: 736`).
>>
>> Altri dettagli:
>> - Le trame da 1514 byte sono le più grandi possibili: 1518 meno i 4 byte di FCS, cioè 14 + 1500.
>> - I segmenti di ACK inviati dall'host locale risultano di 54 byte, sotto il minimo di 60 (64 con FCS): la cattura avviene sull'host che trasmette, prima che la scheda aggiunga il pad.
>> - Quelli ricevuti dall'esterno risultano invece di 60 byte, cioè già riempiti con il pad.
>> - La destinazione è un apparato D-Link: il router/gateway verso Internet, perché l'IP di destinazione 137.204.57.85 non è nella LAN locale.

---
## Slide 27 – Destination address

![[RT08-s027-1.png|700]]

```
Destination: D-Link_c6:fa:6f (00:50:ba:c6:fa:6f)
    Address: D-Link_c6:fa:6f (00:50:ba:c6:fa:6f)
    .... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)
    .... ...0 .... .... .... .... = IG bit: Individual address (unicast)
```

>> Wireshark scompone il primo byte dell'indirizzo, `0x00` = 0000 0000:
>> - il bit 1 (LG, cioè U/L) vale 0: indirizzo universale, assegnato dal costruttore;
>> - il bit 0 (IG) vale 0: indirizzo individuale, cioè unicast.
>>
>> I primi 3 byte `00:50:ba` sono l'OUI di D-Link, ed è per questo che Wireshark scrive "D-Link_c6:fa:6f".

---
## Slide 28 – Source address

![[RT08-s028-1.png|700]]

```
Source: DellComp_89:b3:e9 (00:06:5b:89:b3:e9)
    Address: DellComp_89:b3:e9 (00:06:5b:89:b3:e9)
    .... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)
    .... ...0 .... .... .... .... = IG bit: Individual address (unicast)
```

>> L'OUI `00:06:5b` appartiene a Dell. L'indirizzo sorgente ha **sempre** il bit I/G a 0: una trama è trasmessa da una sola stazione, quindi la sorgente non può essere un indirizzo di gruppo. Solo la destinazione può essere multicast o broadcast.
---
## Slide 29 – Type

![[RT08-s029-1.png|650]]

**Type: IP (0x0800)**

>> Stessa cattura delle slide precedenti (frame 6, la `GET / HTTP/1.1`): il riquadro verde evidenzia il campo Type dell'intestazione Ethernet II, e nel pannello esadecimale sono evidenziati i byte corrispondenti `08 00`.
>>
>> Il campo Type occupa i byte 12–13 del frame (subito dopo i 6 byte di destinazione e i 6 di sorgente: Wireshark non mostra preambolo/SFD né, di solito, la FCS, che vengono tolti dalla scheda di rete). Dice a quale protocollo di livello superiore va consegnato il payload: `0x0800` = IPv4, `0x0806` = ARP, `0x86DD` = IPv6, `0x8100` = tag VLAN 802.1Q.
>>
>> Come si distinguono Ethernet II e 802.3: se il valore dei byte 12–13 è ≥ `0x0600` (1536) è un **Type** (Ethernet II, come qui); se è ≤ 1500 è un campo **Length** (formato 802.3, e il tipo di protocollo è allora indicato dall'intestazione LLC/SNAP).

---
## Slide 30 – Delimitazione delle trame

- Assenza di trame = assenza di segnale sul canale
- Preambolo di sincronismo e SFD delimitano l’inizio
- L’assenza di segnale indica il termine di un frame
- Due frame devono essere separati almeno da un Inter-Frame Gap (IFG)
	- 96 tempi di bit
		- 10 Mbps Ethernet 9,6 μsec
		- 100 Mbps Ethernet 960 nsec
		- 1000 Mbps Ethernet 96 nsec

>> Il preambolo è di 7 byte `10101010` (un'onda quadra che permette al ricevitore di agganciare il clock) seguiti dall'SFD `10101011`: i due `1` finali segnalano che da lì inizia l'indirizzo di destinazione. Non serve un delimitatore di fine: la fine del frame è riconosciuta dalla sparizione della portante (con la codifica Manchester, dall'assenza di transizioni).
>>
>> Verifica dei numeri: IFG = 96 bit / R, quindi 96 / 10⁷ = 9,6 µs, 96 / 10⁸ = 0,96 µs = 960 ns, 96 / 10⁹ = 96 ns. L'IFG dà alle interfacce il tempo di tornare in ricezione e di elaborare la trama appena ricevuta prima della successiva.

---
## Slide 31 – Collision Domain

- ***Collision domain*** = l’insieme delle stazioni connesse alla medesima rete Ethernet che ***possono collidere*** in trasmissione
- Per garantire il corretto funzionamento del CSMA-CD si devono imporre vincoli alla dimensione massima della LAN
	- In funzione della dimensione delle trame
	- In funzione della velocità di trasmissione
- Inoltre il mezzo trasmissivo impone dei vincoli sulle dimensioni dei collegamenti (attenuazione, rumore)
- La dimensione fisica del collision domain è conseguenza delle tecnologie adottate per lo strato fisico

>> Il vincolo nasce dal CSMA/CD: chi trasmette deve accorgersi di un'eventuale collisione **mentre sta ancora trasmettendo**, quindi la durata della trama minima deve essere almeno pari al round-trip time fra le due stazioni più lontane:
>> $$\frac{L_{min}}{C} \ge 2\tau = \frac{2d}{v} \quad\Rightarrow\quad d_{max} = \frac{L_{min}\, v}{2C}$$
>> Con $L_{min}$ = 512 bit (64 byte) a 10 Mbit/s lo slot time è 51,2 µs; il limite reale è circa 2500 m perché nel budget del round-trip entrano anche i ritardi di repeater, transceiver e il jamming. A parità di trama minima, se $C$ cresce di 10 volte il diametro si riduce di 10 volte: circa 250 m a 100 Mbit/s e 25 m a 1 Gbit/s (vedi le slide 39 e 41). Le prestazioni dei protocolli a contesa sono in [[09 - Prestazioni dei protocolli]].
>>
>> Repeater e hub **estendono** il collision domain (ripetono anche le collisioni); bridge e switch lo **separano**: ogni porta di uno switch è un collision domain a sé, e in full duplex le collisioni spariscono del tutto.

---
## Slide 32 – Broadcast domain

- Una trama MAC con
```
Destination address = ff.ff:ff:ff:ff:ff:ff
```
- Viene ricevuta da tutte le interfacce della LAN
- Realizza una comunicazione broadcast dalla sorgente a tutte le destinazioni della LAN
- Dominio di broadcast = insieme di stazioni raggiungibili con l’invio dalla medesima trama inviata con indirizzo broadcast
	- In condizioni normali una singola LAN è anche un singolo dominio di broadcast

>> Refuso: l'indirizzo broadcast MAC è di **6** byte, `ff:ff:ff:ff:ff:ff` (tutti i 48 bit a 1); nella slide c'è un `ff` di troppo e un punto al posto dei due punti. È il caso estremo di indirizzo di gruppo (bit I/G = 1).
>>
>> Collision domain e broadcast domain sono cose diverse: uno switch divide i collision domain ma inoltra i broadcast su tutte le porte, quindi tutta la LAN commutata resta **un unico** broadcast domain. Solo un router (livello 3) o la suddivisione in VLAN separano i domini di broadcast. Esempi di traffico broadcast: richieste ARP, DHCP Discover.

---
## Slide 33 – Soluzioni per lo strato fisico dell’Ethernet

---
## Slide 34 -> 36 – Ethernet classica a 10 Mbit/s

- **Proposta iniziale: 10base5**
	- 10: velocità 10 Mbit/s con codifica Manchester (clock a 20 MHz)
	- base: trasmissione in banda base (contrapposto a broad)
	- 5: segmenti fino a 500 metri (con max 100 stazioni)
	- Cavo coassiale a 50 Ω, diametro della cavità 6.15 mm (thick wire)
		- Attacco al cavo con prese a vampiro a cui si collegano apparati attivi detti Transceiver
		- Stazioni collegate mediante cavi transceiver (drop cable) lunghi fino a 40 m
- Cavo thin wire troppo rigido, non si presta al cablaggio di un edificio
	- Occorre distribuire capillarmente prese a muro per raggiungere tutte le stazioni

>> Refuso: nell'ultimo punto si parla del cavo **thick** wire (il 10base5 appena descritto), non del thin wire: è il cavo spesso a essere troppo rigido, ed è proprio per questo che nasce il 10base2.
>>
>> Manchester: ogni bit è rappresentato da una transizione a metà del tempo di bit (in 802.3: basso→alto = 1, alto→basso = 0), quindi servono 2 simboli per bit, cioè 20 Mbaud per 10 Mbit/s. In cambio il segnale porta con sé il clock e non ha componente continua (vedi [[07 - Strato fisico e mezzi trasmissivi]]).
>>
>> Per estendere la rete oltre un segmento si usano repeater con la regola 5-4-3: al massimo 5 segmenti, 4 repeater e solo 3 segmenti popolati di stazioni, per un totale di circa 2500 m. Il cavo transceiver (AUI) nello standard può arrivare a 50 m.

- **10base2** (thin wire Ethernet)
	- Cavo coassiale sottile a 50 Ω ma con diametro della cavità di 2.95 mm, molto flessibile
	- Segmenti fino a 180 metri con max 30 stazioni
	- Il transceiver è integrato nella scheda a bordo del computer
		- collegamento con connettori BNC e computer in serie sul segmento con connettori a T (daisy chain)
	- Di solito si istalla un backbone 10base5 (cablaggio verticale) che interconnette segmenti 10base2 per raggiungere le prese a muro (cablaggio orizzontale)
		- occorrono repeaters

>> Lo standard fissa il segmento 10base2 a **185 m** (il "2" del nome è l'arrotondamento). Il segmento va chiuso alle due estremità da terminatori da 50 Ω; se una stazione stacca male il connettore a T, si interrompe il bus e cade tutto il segmento: è il limite principale della topologia a bus.

- **10baseT**
	- Usa coppie simmetriche intrecciate senza schermatura UTP (Unshielded Twisted Pairs)
	- occorrono UTP di categoria 3 per arrivare a 100 m
	- Ogni stazione ha una UTP tutta a sua disposizione collegata alla porta di un Hub con connettore RJ45
		- RJ45 simile a RJ11 con 4 contatti
	- Gli Hub fungono da multiport repeater per il cablaggio orizz.
	- Il cablaggio verticale può essere fatto con altri multiport repeater (topologia a stella)
- **10baseF**
	- Alternativa con cavo in fibra ottica multimodo
	- Fino a 2000 m di distanza
	- Ancora costosa a causa dei connettori e degli attacchi per le stazioni
	- La 10baseF spesso viene usata per il cablaggio verticale

>> Precisazione sui connettori: l'RJ45 ha **8** contatti (8P8C), l'RJ11 telefonico ne ha di solito 4 (o 2). Il 10baseT ne usa però solo 4 dell'RJ45: una coppia per trasmettere (pin 1-2) e una per ricevere (pin 3-6).
>>
>> Con l'hub la topologia fisica diventa a stella, ma quella logica resta un bus: l'hub ripete ogni bit su tutte le altre porte, quindi tutte le stazioni sono ancora nello stesso collision domain. Il guadagno è nell'affidabilità (un cavo rotto isola una sola stazione) e nel cablaggio, non nelle prestazioni.

---
## Slide 37 – Ethernet Cabling

Three kinds of Ethernet cabling.
(a) 10Base5, (b) 10Base2, (c) 10Base-T.

![[RT08-s037-1.png|600]]

- (a) Controller, Transceiver cable, Vampire tap, Transceiver, Core
- (b) Transceiver + controller, Connector
- (c) Controller, Twisted pair, Hub

da Tanenbaum

>> Si vede dove sta il transceiver: in (a) è esterno, montato sul cavo spesso con la presa a vampiro e collegato al PC con il cavo transceiver; in (b) è dentro la scheda e il coassiale sottile passa da una stazione all'altra con il connettore a T; in (c) ogni stazione ha il proprio doppino fino all'hub.

---
## Slide 38 – Evoluzione dell’Ethernet

- 1992: IEEE riconvocò il comitato 802.3 con l’esigenza di definire LANs più veloci
	- prima proposta: di **mantenere 802.3 tale e quale**, rendendola solo più veloce,
	- Altra proposta: ridefinirla totalmente con nuove caratteristiche (traffico real-time, voce digitale,... )
- Il comitato 802.3 alla fine decise per la prima
- I fautori della seconda formarono un loro comitato **802.12** e la standardizzarono comunque
	- questo standard non ha però avuto successo

>> La scelta di non toccare formato del frame, indirizzi e trama minima è la ragione del successo di Fast Ethernet: retrocompatibilità totale con le schede e il software esistenti (cambia solo lo strato fisico). Lo standard 802.12 è il 100VG-AnyLAN, con accesso a "demand priority" gestito dall'hub invece del CSMA/CD.

---
## Slide 39 -> 40 – IEEE 802.3 u – Fast Ethernet a 100 Mbit/s

- Diametro massimo di un collision domain: 250 m
- **100baseT4**
	- Ogni stazione è collegata con 4 UTP di cat. 3
	- Lunghezza fino a 100 m
	- Clock a 25 MHz
	- Codifica 8B/6T: 8 bit (256 comb.) da trasmettere vengono codificati in 6 simboli Ternari (729 comb.)
		- Restano diverse combinazioni *non dati*
		- Su ognuna delle UTP la velocità e 33.333.. Mbit/s
	- Un UTP sempre in direzione Hub-stazione, un UTP sempre stazione-Hub, gli altri 2 vanno a rinforzare una direzione alternativamente portandola a 100 Mbit/s

>> Verifica: 3⁶ = 729 ≥ 2⁸ = 256, quindi 6 simboli ternari bastano per 8 bit e avanzano combinazioni per i simboli di controllo. Ogni coppia va a 25 Mbaud e ogni simbolo porta in media 8/6 di bit: 25 · 8/6 = 33,3 Mbit/s per coppia; trasmettendo su 3 coppie insieme (quella fissa più le due bidirezionali) si arriva a 100 Mbit/s. Poiché in una direzione servono 3 coppie su 4, il 100baseT4 funziona solo in half duplex.
>>
>> I 250 m vengono dallo stesso conto della slide 31: 512 bit a 100 Mbit/s durano 5,12 µs, dieci volte meno che a 10 Mbit/s. In pratica, con i ritardi degli hub, il diametro ammesso è circa 205 m.

- **100baseTX**
	- 2 coppie UTP di cat. 5, fino a 100m
	- Clock a 125 MHz
	- Codifica 4B/5B (come in FDDI): 4 bit vengono mappati in 5 bit
		- Velocità netta 100 Mbit/s full duplex
		- Restano combinazioni libere per non dati
- **100base FX**
	- Cavo in fibra ottica multimodo
	- Fino a 2000 m

>> 4B/5B: 125 Mbaud × 4/5 = 100 Mbit/s. Dei 32 codici a 5 bit se ne usano 16 per i dati, scelti in modo da avere abbastanza transizioni (mai più di tre zeri di fila), più alcuni per controllo e idle. Sul rame il flusso a 125 Mbaud viene poi trasmesso con la codifica di linea MLT-3, che riduce la frequenza fondamentale a circa 31 MHz, dentro i limiti del cat. 5.
>>
>> Full duplex: una coppia per direzione, quindi con uno switch si può trasmettere e ricevere insieme, senza collisioni e senza CSMA/CD. I 2000 m del 100baseFX valgono in full duplex; in half duplex il limite resta quello del collision domain (circa 400 m).

---
## Slide 41 -> 42 – IEEE 802.3 z - Gigabit Ethernet

- Standard per definire una rete Erhernet a 1 Gbit/s; i collision domain dovrebbero diventare di 25 m; per portarli a 200 m si usa:
	- Carrier extension
	- Frame bursting
- **1000baseSX e 1000baseLX**
	- Due alternative in fibra ottica, la prima multimodo, la seconda mono o multi modo
	- Codifica 8B/10B
	- Generatori a Laser
	- Distanze 550 m o 5000 m (solo con LX monomodo)

>> **Carrier extension**: lo slot time viene portato da 512 bit a 4096 bit (512 byte). Una trama più corta di 512 byte viene seguita da simboli di estensione (dopo la FCS) che tengono occupato il canale; la trama minima "logica" resta di 64 byte, e il ricevitore scarta l'estensione. Il prezzo è l'efficienza: una trama da 64 byte occupa il canale per 512 byte, cioè solo il 12,5% è utile.
>>
>> **Frame bursting**: per recuperare efficienza, dopo la prima trama (eventualmente estesa) una stazione può inviare altre trame di seguito, riempiendo gli IFG con simboli di estensione così che nessun altro occupi il canale, fino a un limite di 65 536 bit (8 KB) per burst.
>>
>> Entrambi servono solo in half duplex; in pratica Gigabit Ethernet si usa quasi sempre in full duplex con switch, dove il CSMA/CD è disattivato e il diametro è limitato solo dal mezzo fisico.
>>
>> 8B/10B: 8 bit diventano 10 bit, quindi la linea va a 1,25 Gbaud. I codici sono scelti per bilanciare uni e zeri (niente componente continua) e garantire transizioni. Il 550 m dell'SX vale con fibra multimodo 50 µm (con 62,5 µm si scende a 220–275 m). Refuso: "Erhernet" → Ethernet.

- **1000baseCX**
	- Usa 2 coppie intrecciate e schermate STP (nel cavetto ogni coppia è schermata e tutto l’insieme delle coppie è di nuovo schermato)
	- Soluzione costosa e meno performante delle OF
- **1000baseT**
	- 4 coppie UTP di cat. 5
	- Clock a 125 MHz
	- Codifica: 2 bit sino codificati su 1 simbolo a 5 livelli
		- È disponibile 1 livello come non dato
		- Velocità netta 1Gbit/s half duplex

>> Il 1000baseCX arriva solo a 25 m (collegamenti dentro l'armadio o la sala macchine). "OF" = fibra ottica.
>>
>> 1000baseT, verifica: PAM-5 (livelli −2, −1, 0, +1, +2) a 125 Mbaud con 2 bit per simbolo fa 250 Mbit/s per coppia; su 4 coppie in parallelo si arriva a 1 Gbit/s. Il quinto livello non è sprecato: serve alla codifica a traliccio (trellis) che migliora la resistenza al rumore.
>>
>> Errore della slide: il 1000baseT lavora normalmente in **full duplex**, a 1 Gbit/s per direzione: ogni coppia trasmette e riceve contemporaneamente, grazie a un circuito ibrido e alla cancellazione d'eco. L'half duplex è previsto dallo standard ma non si usa in pratica. Refuso: "sino" → sono.

---
## Slide 43 – Multigigabit Ethernet

- Ora si parla di 10Gigabit Ethernet (allo studio dal 2002 come IEEE 802.3 ae)
	- Applicabile solo su fibra ottica e non su rame
	- Diversi tipi di fibre e modalità di trasmissione
		- Distanze fino a diversi Km
- La maggioranza dei computer sul mercato non può sfruttare la velocità superiori al Gigabit
	- Vengono usate per il backbone
	- Backbone anche su estensioni di diversi Km: sono una moderna alternativa per le MAN
- Lo standard IEEE802.17 (RPR) è una possibile proposta alternativa per i backbone MAN

>> Informazioni datate: l'802.3ae è stato approvato nel 2002, e dal 2006 esiste anche il 10GBASE-T (802.3an) **su rame**, con cavo cat. 6a fino a 100 m. Oggi esistono anche 25, 40, 100, 200, 400 e 800 Gbit/s, usati nei data center e nelle reti degli operatori.
>>
>> Dal 10 Gigabit in su Ethernet è **solo full duplex**: il CSMA/CD non esiste più, e del protocollo originale restano il formato del frame e gli indirizzi. RPR (Resilient Packet Ring) è un protocollo ad anello per le MAN, con recupero dai guasti in meno di 50 ms.

---
## Slide 44 – Carrier Ethernet

- Requisiti tecnologici
	- Diversi per trasporto e accesso
- Ethernet nasce per le LAN ossia per l’accesso
- La penetrazione nello strato di trasporto richiede l’introduzione di nuove funzionalità
	- Segnalazione e gestione
	- Indirizzamento
- Sono in fase di definizione una serie di nuovi standard per introdurre queste funzioni
	- Indirizzamento gerarchico multilivello
	- Recupero dei guasti

>> "Carrier Ethernet" è l'uso di Ethernet nelle reti degli operatori (metro e trasporto). Esempi degli standard citati: per l'indirizzamento gerarchico, Q-in-Q (802.1ad, doppio tag VLAN) e Provider Backbone Bridges (802.1ah, "MAC-in-MAC": il frame del cliente viene incapsulato in un frame con indirizzi MAC dell'operatore); per la gestione, l'OAM 802.1ag; per il recupero dei guasti, la protezione ad anello ITU-T G.8032.

---
## Slide 45 – Il cablaggio delle LAN moderne

---
## Slide 46 – Cablaggio strutturato

- Un unico cablaggio per tutti i servizi di telecomunicazioni degli edifici
	- **EIA/TIA 568** (standard di mercato)
	- **ISO 11801**
	- La soluzione più utilizzata è basata su UTP
		- In un nuovo edificio vengono posati cavetti con diverse coppie (tipicamente 4) che poi finiscono in prese a muro RJ11 o RJ45 per tutti i servizi di telecom.
- Il cablaggio è organizzato in modo gerarchico

![[RT08-s046-1.png|600]]

>> Lettura della figura: due edifici, ciascuno con tre piani (i piani rossi). Su ogni piano un armadio (grigio) raggiunge le prese a muro con una stella di cavi. Gli armadi di piano sono collegati all'armadio principale dell'edificio (grigio scuro a sinistra, rosso a destra), e i due armadi principali sono collegati fra loro: stella di stelle, cioè cablaggio orizzontale, verticale (dorsale di edificio) e di campus.
>>
>> "Strutturato" significa che il cablaggio è indipendente dagli apparati e dai servizi: la stessa presa può servire un PC, un telefono o un access point, e cambiare servizio vuol dire solo spostare una patch cord nell'armadio.

---
## Slide 47 – Componenti del cablaggio strutturato

![[RT08-s047-1.png|600]]

- **Prese a muro**: Punti di accesso alla LAN per l’utente finale. Localizzate in prossimità delle postazioni di lavoro
- **Cablaggio orizzontale o di piano**: Cavidotti e cavi che collegano le prese a muro con l’armadio di rete realizzando una topologia a stella
- **Armadio di rete**: Punto di arrivo del cablaggio orizzontale e contenitore degli apparati attivi della LAN (hub, switch, bridge, router)
- **Cablaggio verticale**: Interconnette più armadi di rete per realizzare una LAN estesa

>> Numeri da ricordare (TIA-568 / ISO 11801): la tratta orizzontale fissa è al massimo **90 m**, più fino a 10 m di patch cord ai due estremi, per un canale di 100 m. È lo stesso limite dei 100 m del 10/100/1000baseT. Il cablaggio verticale, più lungo e con più traffico, si fa spesso in fibra.

---
## Slide 48 – Armadio di rete

![[RT08-s048-1.png|600]]

- Il cablaggio orizzontale entra nell’armadio di rete e i vari cavi sono collegati al retro dei **patch panel**
- **Patch panel**: Pannello che presenta
	- Sul reto un insieme di connettori per cavi UTP
	- sul fronte un insieme di prese standard (in questo caso RJ45 per cavi UTP)
- Riporta all’interno dell’armadio di rete i punti di connessione al cablaggio rappresentati dalle prese a muro

>> Refuso: "reto" → retro. Sul retro i cavi del cablaggio orizzontale sono attestati in modo permanente (connettori a perforazione di isolante, "punch-down"); ogni presa sul fronte del patch panel corrisponde a una presa a muro.

---
## Slide 49 – Apparati attivi nell’armadio

![[RT08-s049-1.png|600]]

- L’armadio di rete ospita gli apparati attivi, in questo caso uno switch equipaggiato con:
	- Tre moduli da 24 porte fast Ethernet UTP
	- Un modulo con 2 porte Ethernet in fibra
- Switch e path panel sono affiancati ma in queste condizioni non esiste alcuna connettività di LAN
- Le porte in fibra qui già connesse tipicamente servono per realizzare il cablaggio verticale

>> Refuso: "path panel" → patch panel. Il patch panel è un elemento passivo: finché le sue prese non vengono collegate alle porte dello switch, le prese a muro non sono collegate a nulla (vedi slide successiva).

---
## Slide 50 – Patch cord e connettività

![[RT08-s050-1.png|600]]

- La connettività della LAN viene realizzata collegando le porte dei patch panel con le porte dello switch tramite spezzoni di cavo detti **patch cord**.
- **Patch cord**: Determina se e a quale porta della switch sia connessa una presa a muro
- Per garantire connettività a tutte le prese a muro il numero di porte dei patch panel deve essere equivalente al numero di porte dello switch

>> In pratica spesso si posano più prese di quelle che servono subito, e si collegano allo switch solo quelle attive: in quel caso le porte dello switch possono essere meno di quelle del patch panel. Cambiando la patch cord si può anche spostare una presa su un'altra porta, per esempio su una VLAN diversa, senza toccare il cablaggio fisso.

---
## Slide 51 – WIRELESS LAN (Wi-Fi)

---
## Slide 52 – Lo standard IEEE 802.11

- Il mezzo radio è stato ignorato nei primi standard 802
- A partire dal 1997 compare un nuovo standard per fornire l’accesso a reti locali via radio

![[RT08-s052-1.png|600]]

- Upper layers
- Data link layer: Logical link control, MAC sublayer
- Physical layer: 802.11 Infrared, 802.11 FHSS, 802.11 DSSS, 802.11a OFDM, 802.11b HR-DSSS, 802.11g OFDM

Da A.S. Tanenbaum, “Reti di Calcolatori”

>> Come per Ethernet, l'802.11 definisce MAC e strato fisico, mentre l'LLC (802.2) è comune a tutte le LAN 802. Lo strato MAC 802.11 (CSMA/CA, DCF/PCF) è lo stesso per tutti gli strati fisici in figura: le versioni successive (802.11g, poi n = Wi-Fi 4, ac = Wi-Fi 5, ax = Wi-Fi 6) cambiano soprattutto la parte fisica, cioè modulazioni, larghezza dei canali e MIMO.

---
## Slide 53 – Lo strato fisico 802.11

- Si occupa della trasmissione fisica delle trame secondo le specifiche stabilite
- Interagisce con lo strato MAC per segnalare l’attività del canale (necessario per il protocollo di accesso)
- La prima versione (1997) prevedeva tre tecniche di trasmissione a **1Mb/s** e **2Mb/s**
	- infrarossi (scarsamente usata)
	- FHSS
	- DSSS
- Utilizza la banda **ISM** (Industrial, Scientific, Medical) a **2.4 GHz** (83.5 Mhz da 2.40 a 2.4835 Ghz)
	- disponibile per applicazioni industriali, scientifiche e mediche senza necessità di chiedere licenze

>> Le due tecniche spread spectrum (vedi [[07 - Strato fisico e mezzi trasmissivi]]):
>> - **FHSS** (Frequency Hopping): il trasmettitore salta da un canale stretto all'altro secondo una sequenza pseudocasuale nota anche al ricevitore; un'interferenza su una frequenza disturba solo pochi salti.
>> - **DSSS** (Direct Sequence): ogni bit viene moltiplicato per una sequenza di chip molto più veloce, quindi il segnale si allarga su una banda ampia con densità di potenza bassa; il ricevitore, correlando con la stessa sequenza, recupera il bit e attenua le interferenze a banda stretta.
>>
>> "Segnalare l'attività del canale" è il Clear Channel Assessment (CCA): è il carrier sense su cui si basa il CSMA/CA.

---
## Slide 54 – Uso della banda ISM

- Proprio perché l’utilizzo è libero, occorre una regolamentazione per evitare abusi e per ridurre le interferenze
	- limitazioni sulla potenza massima trasmessa
	- utilizzo di tecniche Spread Spectrum
	- specifiche di utilizzo
		- FHSS: 79 canali da 1 Mhz ciascuno
			- tempo di permanenza su un canale ≤ 400 ms (dwell time)
			- su 30 secondi occorre utilizzare almeno 75 canali diversi
		- DSSS: processing gain ≥ 10 dB
- In Italia, il D.M. 28 Maggio 2003 stabilisce
	- obbligo di richiesta di autorizzazione al Ministero per offrire servizi Wi-Fi nella banda ISM su suolo pubblico
	- obbligo di identificazione degli utenti di tali servizi
	- nessun obbligo su suolo privato

>> Processing gain = rapporto fra chip rate e bit rate. L'802.11 DSSS usa la sequenza di Barker a 11 chip per bit: $G_p = 10 \log_{10} 11 \approx 10{,}4$ dB, appena sopra il minimo di 10 dB richiesto.
>>
>> La parte italiana è storica: gli obblighi di identificazione degli utenti dei Wi-Fi pubblici (poi rafforzati dal "decreto Pisanu" del 2005) sono stati aboliti a partire dal 2011.

---
## Slide 55 – Lo strato fisico 802.11a

- Emesso nel 1999, implementa il Wi-Fi a banda larga
- Utilizza la banda **ISM** a **5 GHz**
	- 5.15÷5.25 + 5.25÷5.35 + 5.725÷5.825
	- meno utilizzata di quella a 2.4 GHz
	- maggiore larghezza di banda disponibile (300 MHz)
	- solo limiti sulla potenza massima trasmessa
- Fa uso di OFDM
	- 52 sottoportanti (48 per i dati, 4 per la sincronizzazione)
	- 312.5 kHz di banda per sottoportante
- 12 canali da 20 MHz ciascuno
- Bit rate: **6, 9, 12, 18, 24, 36, 48, 54 Mb/s**
	- ottenute con codifiche diverse e modulazioni BPSK, QPSK, 16-QAM, 64-QAM
	- scelte in base alla distanza da coprire

>> Verifica: 3 sottobande da 100 MHz = 300 MHz. Le 52 sottoportanti × 312,5 kHz occupano 16,25 MHz dentro il canale da 20 MHz. Ogni simbolo OFDM dura 4 µs (3,2 µs più 0,8 µs di intervallo di guardia). Il bit rate massimo è 48 sottoportanti × 6 bit (64-QAM) × 3/4 (codice convoluzionale) = 216 bit per simbolo, e 216 bit / 4 µs = **54 Mb/s**. Il minimo è 48 × 1 bit (BPSK) × 1/2 = 24 bit / 4 µs = **6 Mb/s**.
>>
>> Le 4 sottoportanti "di sincronizzazione" sono le pilot, che servono a stimare fase e frequenza. A rigore la banda a 5 GHz non è ISM (negli USA si chiama U-NII), tranne la parte 5,725–5,875 GHz, ma è comunque senza licenza.

---
## Slide 56 – Lo strato fisico 802.11b

- Emesso nel 1999, implementa il Wi-Fi a banda larga
- Utilizza la banda **ISM** a **2.4 GHz**
- Fa uso di **High-Rate DSSS** (**HR-DSSS**)
- 14 canali (13 in Europa) da 5 MHz ciascuno
	- il segnale spread spectrum occupa 22 MHz
- Bit rate: **1, 2, 5.5, 11 Mb/s**
	- 1 e 2 Mb/s ottenuti con sequenza PN di Barker a 11 chip e modulazioni DBPSK e DQPSK (compatibile con 802.11)
	- 5.5 e 11 Mb/s ottenuti con una complessa codifica spread spectrum a 11 Mchip/s (Complementary Code Keying – CCK) e modulazione DQPSK
- Riesce ad adattare la bit rate alle condizioni del canale
	- **Dynamic Rate Shifting**

>> Attenzione: 5 MHz è la **spaziatura** fra i centri dei canali, non la loro larghezza. Siccome ogni segnale occupa 22 MHz, canali vicini si sovrappongono: per averne di non sovrapposti servono almeno 5 canali di distanza, e l'unica terna possibile è **1, 6, 11**. Il canale 14 è ammesso solo in Giappone.
>>
>> Verifica dei rate: con Barker, 1 Msimbolo/s × 11 chip = 11 Mchip/s; DBPSK (1 bit/simbolo) dà 1 Mb/s e DQPSK (2 bit/simbolo) 2 Mb/s. Con CCK a 1,375 Msimboli/s ogni simbolo porta 4 bit (5,5 Mb/s) oppure 8 bit (11 Mb/s), con lo stesso chip rate di 11 Mchip/s. Il throughput utile reale è circa la metà del bit rate nominale, a causa degli overhead del MAC (DIFS, backoff, ACK).
>>
>> Dynamic Rate Shifting: quando il segnale peggiora (distanza, ostacoli) la stazione scende automaticamente 11 → 5,5 → 2 → 1 Mb/s, e risale quando il canale migliora.
---
## Slide 57 – Canalizzazione 802.11b

![[RT08-s057-1.png|650]]

- Channel Numbers: 1 … 14
- Channel Center Frequencies (in GHz): 2.412, 2.417, 2.422, 2.427, 2.432, 2.437, 2.442, 2.447, 2.452, 2.457, 2.462, 2.467, 2.472, 2.484
- 22 MHz Channel Bandwidth
- IEEE 802.11 RF Channelization Scheme

Da http://www.hyperlinktech.com/web/band… (indirizzo troncato nella slide)

>> I centri dei canali 1–13 distano solo 5 MHz l'uno dall'altro ($f_c = 2407 + 5n$ MHz), mentre ogni canale DSSS occupa circa 22 MHz: canali vicini quindi si sovrappongono. Per non sovrapporsi due canali devono distare almeno 5 posizioni (5 × 5 = 25 MHz > 22 MHz), da cui la classica terna di canali **non sovrapposti 1, 6, 11** (in Europa, con i canali OFDM da 20 MHz di 802.11g, si usa anche 1-5-9-13).
>>
>> Il canale 14 (2.484 GHz) è un'eccezione: è spaziato di 12 MHz dal 13 ed era ammesso solo in Giappone. La banda ISM a 2.4 GHz va da 2400 a 2483,5 MHz, e i canali effettivamente utilizzabili dipendono dalla normativa del paese.
>>
>> In pratica, AP vicini vanno messi su canali non sovrapposti, altrimenti si disturbano a vicenda (interferenza di canale adiacente) anche se usano numeri di canale diversi.

---
## Slide 58 – Lo strato fisico 802.11g

- Emesso nel 2003
- Come 802.11b, utilizza la banda **ISM** a **2.4 GHz**
- Come 802.11a, fa uso di OFDM, ma può usare anche HR-DSSS
- Bit rate
	- HR-DSSS: **1, 2, 5.5, 11 Mb/s**
	- OFDM: **6, 9, 12, 18, 24, 36, 48, 54 Mb/s**

>> 802.11g porta in banda 2.4 GHz la modulazione OFDM di 802.11a (stessi bit rate fino a 54 Mb/s), restando retrocompatibile con 802.11b grazie al supporto di HR-DSSS. Il prezzo della compatibilità: se nella BSS c'è anche una sola stazione 802.11b, che non capisce i frame OFDM, le stazioni g devono attivare una "protezione" (RTS/CTS o CTS-to-self trasmessi in DSSS prima dei frame OFDM), e il throughput effettivo cala parecchio.
>>
>> I bit rate sono velocità di trasmissione sul canale radio, non throughput utile: per l'overhead del MAC (intervalli, backoff, ACK) il throughput reale di 802.11g a 54 Mb/s è circa la metà.

---
## Slide 59 -> 62 – Architettura di rete 802.11

![[RT08-s059-1.png|550]]

- Basic Service Set (BSS)
- Access Point (AP): Base station
- Distribution System: To wired network
- Wireless Station

*Da A.S. Tanenbaum, "Reti di Calcolatori"*

>> Una **BSS** è l'insieme delle stazioni che condividono lo stesso canale radio sotto la stessa area di copertura; in modalità infrastrutturata è "governata" da un AP ed è identificata dal **BSSID**, che coincide con l'indirizzo MAC dell'interfaccia radio dell'AP. Il **Distribution System** è la rete (di solito una LAN Ethernet cablata) che collega fra loro gli AP e li collega al resto della rete.

![[RT08-s060-1.png|300]]![[RT08-s060-2.png|300]]

- **Modalità Infrastrutturata (Infrastructure BSS)**: Le stazioni comunicano attraverso l'AP (anche se non si vedono direttamente)
- **Modalità Ad-Hoc (Independent BSS)**: Le stazioni comunicano in modalità peer-to-peer e solo se si vedono direttamente

*Da A.S. Tanenbaum, "Reti di Calcolatori"*

>> Figura a sinistra: modalità infrastrutturata; figura a destra: modalità ad-hoc.
>>
>> In modalità infrastrutturata anche due stazioni della stessa BSS non si parlano direttamente: il frame va dalla stazione all'AP e dall'AP alla destinazione (due trasmissioni radio). In compenso basta che ognuna "veda" l'AP. In una IBSS (ad-hoc) non c'è AP e non c'è collegamento verso la rete cablata, e ogni stazione raggiunge solo quelle nel proprio raggio radio (802.11 non fa routing multi-hop).

![[RT08-s061-1.png|650]]

- Extended Service Set (ESS)
- Distribution System: Ethernet
- Base station, Cell, Portal

Occorre gestire l'associazione delle stazioni agli AP
Permette la mobilità delle stazioni trasparente agli strati superiori
Gli AP sono configurati come bridge tra WLAN e LAN, così l'intero ESS è visto come un'unica LAN (unico dominio di broacast)

*Da A.S. Tanenbaum, "Reti di Calcolatori"*

>> Un **ESS** è un insieme di BSS (celle) collegate dallo stesso Distribution System e con lo stesso nome di rete, l'**SSID**: ogni cella ha il proprio BSSID, ma tutte annunciano lo stesso SSID. Una stazione è associata a un solo AP per volta; quando si sposta da una cella all'altra si riassocia al nuovo AP (*roaming*) mantenendo lo stesso indirizzo IP, perché tutto l'ESS è un'unica LAN a livello 2 (un'unica sottorete IP). Il **Portal** è il punto di collegamento verso una LAN non 802.11.
>>
>> "broacast" nella slide è un refuso per "broadcast".

![[RT08-s062-1.png|650]]

- Extended Service Set (ESS)
- Wireless Distribution System

*Da A.S. Tanenbaum, "Reti di Calcolatori"*

>> Con il **Wireless Distribution System (WDS)** gli AP non sono collegati da un cavo Ethernet ma si scambiano i frame via radio fra loro (bridge wireless fra AP). È comodo dove non si può cablare, ma ogni frame che attraversa il WDS occupa il canale radio più volte, e la trama deve portare 4 indirizzi (vedi slide 74).

---
## Slide 63 -> 64 – Problemi di accesso multiplo al canale

- A differenza delle LAN cablate, in cui tutti ricevono quello che viene trasmesso sul mezzo condiviso, nelle WLAN ci sono problemi specifici

![[RT08-s063-1.png|650]]

- **stazione nascosta**: A wants to send to B but cannot hear that B is busy (Range of C's radio; C is transmitting)
- **stazione esposta**: B wants to send to C but mistakenly thinks the transmission will fail (Range of A's radio; A is transmitting)

*Da A.S. Tanenbaum, "Reti di Calcolatori"*

- Il problema della stazione nascosta rende maggiormente problematico l'uso del **carrier sensing**, rispetto alle reti cablate
- La natura half-duplex delle interfacce WLAN impedisce l'uso di **collision detect**
- Il protocollo di accesso multiplo CSMA/CD usato da 802.3 non è utilizzabile nelle WLAN
- Si usa il **Carrier Sensing Multiple Access** con **Collision Avoidance** (**CSMA/CA**) in due modalità
	- **Distributed Coordination Function** (**DCF**)
		- l'accesso al canale è gestito in modo distribuito
	- **Point Coordination Function** (**PCF**)
		- l'accesso al canale è gestito dall'AP

>> **Stazione nascosta**: C sta trasmettendo a B; A è fuori dalla portata di C, quindi sente il canale libero, trasmette a B e i due segnali collidono **in B**. Il carrier sensing fallisce perché A ascolta il canale nel punto sbagliato: conta lo stato del canale al ricevitore, non al trasmettitore.
>>
>> **Stazione esposta**: A trasmette (verso una stazione a sinistra, fuori figura); B sente A e quindi rinuncia a trasmettere verso C, anche se C, che è fuori dalla portata di A, riceverebbe senza problemi. Qui il carrier sensing è troppo prudente e si spreca un'occasione di trasmettere.
>>
>> Perché niente collision detection: una scheda radio non può ricevere mentre trasmette sulla stessa frequenza (il proprio segnale, enormemente più forte, copre quello che arriva dagli altri); e comunque, per il terminale nascosto, la collisione avviene al ricevitore e il trasmettitore non potrebbe accorgersene. Quindi si cerca di **evitare** le collisioni (CA) invece di rilevarle, e ci si accorge di una trasmissione fallita solo dalla mancanza dell'ACK. Le prestazioni di ALOHA e CSMA sono in [[09 - Prestazioni dei protocolli]].

---
## Slide 65 -> 66 – Protocollo MAC 802.11 – DCF

- Prima di inviare una trama, il mittente invia al destinatario un **Request To Send** (**RTS**)
	- le altre stazioni che lo ricevono sanno che il canale sta per essere occupato e quanto a lungo lo sarà (la durata del frame è contenuta nel RTS)
- Se il destinatario è in grado di ricevere, risponde con un **Clear To Send** (**CTS**)
	- a questo punto anche le stazioni che vedono il destinatario ma non il mittente sanno che il canale sarà occupato e conoscono la durata del frame
- L'unico ad accorgersi se una trama è errata è il ricevitore
	- invia un **ACK** al mittente per ogni trama ricevuta correttamente
	- se scade un time-out prima della ricezione dell'ACK, il mittente ritrasmette il frame (preceduto da un nuovo RTS)

![[RT08-s066-1.png|650]]

*Da A.S. Tanenbaum, "Reti di Calcolatori"*

- Le stazioni C e D si accorgono (in tempi diversi) che il canale non è disponibile ed effettuano un carrier sensing virtuale
	- il Network Allocation Vector (NAV) mantiene il canale virtuale occupato
- In caso di collisione tra due RTS, si applica un meccanismo di backoff esponenziale binario
	- si aspetta un tempo casuale entro un intervallo crescente come $2^n$

>> Lettura del diagramma: A vuole trasmettere a B. C è nel raggio di A (sente l'RTS) e imposta subito il NAV; D è nel raggio di B ma non di A (è il "terminale nascosto" rispetto ad A), quindi non sente l'RTS ma sente il CTS, e imposta il NAV da quel momento. Entrambi i NAV durano fino alla fine dell'ACK: il campo Duration di RTS e CTS indica il tempo per cui il canale resterà occupato (CTS + dati + ACK, più gli intervalli SIFS).
>>
>> Il **NAV** è il carrier sensing "virtuale": un contatore che la stazione decrementa e durante il quale considera il canale occupato anche se fisicamente non sente nulla. Si affianca al carrier sensing fisico.
>>
>> Precisazioni rispetto alla slide:
>> - lo schema base della DCF è CSMA/CA con ACK: si ascolta il canale, lo si aspetta libero per un DIFS, si attende un backoff casuale e poi si trasmette. RTS/CTS è **opzionale** e nella pratica si usa solo per frame più lunghi di una soglia (RTS threshold), perché aggiunge overhead; un RTS che collide costa poco, perché è corto (20 byte), mentre una collisione fra frame di dati lunghi costa molto;
>> - il backoff si fa non solo dopo una collisione ma anche ogni volta che si trova il canale occupato: si sceglie un numero casuale di slot in $[0, CW]$, il contatore si decrementa solo mentre il canale è libero e si congela quando è occupato. A ogni trasmissione fallita (nessun CTS o nessun ACK) la finestra $CW$ raddoppia (es. 31 → 63 → … fino a 1023), e torna al minimo dopo un successo.

---
## Slide 67 -> 68 – Protocollo MAC 802.11 – PCF

- Nel caso di rete infrastrutturata, l'AP gestisce l'utilizzo del canale a polling, attribuendolo a turno alle stazioni che hanno bisogno di trasmettere
- L'AP trasmette periodicamente un segnale di **beacon** che permette
	- la sincronizzazione delle stazioni
	- la rilevazione della presenza dell'AP
	- la possibilità di entrare nel processo di polling
- Quando una stazione viene attivata, essa scandisce i canali disponibili e cerca i beacon di eventuali AP con cui associarsi
	- tra le atre cose, il beacon mostra il **SSID** (se impostato) che identifica l'AP

>> In PCF l'AP divide il tempo in un periodo senza contesa (CFP, l'AP interroga a turno le stazioni) e un periodo con contesa (CP, si usa la DCF), che si alternano. PCF è opzionale e nei prodotti reali non è quasi mai implementata; la QoS è stata poi affidata a 802.11e (EDCA/HCCA).
>>
>> I beacon invece esistono sempre, anche quando si usa solo la DCF: ogni AP li trasmette circa ogni 100 ms (102,4 ms di default). Contengono, fra l'altro, SSID, bit rate supportati e timestamp per la sincronizzazione. Questa ricerca è la *scansione passiva*; c'è anche quella *attiva*, in cui la stazione invia dei Probe Request e gli AP rispondono. Precisazione: l'SSID identifica la rete (l'ESS), non il singolo AP, che invece è identificato dal BSSID.

![[RT08-s068-1.png|650]]

- Control frame or next fragment may be sent here (dopo SIFS)
- PCF frames may be sent here (dopo PIFS)
- DCF frames may be sent here (dopo DIFS)
- Bad frame recovery done here (dopo EIFS)

*Da A.S. Tanenbaum, "Reti di Calcolatori"*

- dopo SIFS (Short InterFrame Spacing) ci si aspetta che qualcuno trasmetta un ACK, un CTS o un frammento di trama successivo
- altrimenti, dopo PIFS (PCF InterFrame Spacing) ci si aspetta che intervenga l'AP (beacon, polling, …)
- altrimenti, dopo DIFC (DCF InterFrame Spacing) le altre stazioni possono provare ad accedere (con un RTS)
- altrimenti, dopo EIFS (Extended InterFrame Spacing) chi ha ricevuto un frame inatteso può segnalarlo

>> "DIFC" è un refuso per **DIFS**.
>>
>> Gli intervalli realizzano una **priorità** senza bisogno di messaggi: chi deve aspettare meno vince sempre il canale. $SIFS < PIFS < DIFS < EIFS$, con $PIFS = SIFS + 1\ \text{slot}$ e $DIFS = SIFS + 2\ \text{slot}$. Per esempio, in 802.11b (DSSS) SIFS = 10 µs e slot = 20 µs, quindi PIFS = 30 µs e DIFS = 50 µs; in 802.11a (OFDM a 5 GHz) SIFS = 16 µs e slot = 9 µs, quindi DIFS = 34 µs. In questo modo l'ACK (o il CTS, o il frammento successivo) parte dopo un solo SIFS e nessun'altra stazione può "infilarsi" nel mezzo di uno scambio in corso.
>>
>> L'EIFS, più precisamente, è l'attesa più lunga che una stazione usa al posto del DIFS quando ha ricevuto un frame con errori (e quindi non ha potuto leggerne il campo Duration): così lascia il tempo all'eventuale ACK di quello scambio, senza disturbarlo.

---
## Slide 69 -> 70 – Trama MAC 802.11

![[RT08-s069-1.png|650]]

| Campo | Frame control | Duration | Address 1 | Address 2 | Address 3 | Seq. | Address 4 | Data | Checksum |
|---|---|---|---|---|---|---|---|---|---|
| Byte | 2 | 2 | 6 | 6 | 6 | 2 | 6 | 0-2312 | 4 |

| Frame control | Version | Type | Subtype | To DS | From DS | MF | Retry | Pwr | More | W | O |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Bit | 2 | 2 | 4 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |

*Da A.S. Tanenbaum, "Reti di Calcolatori"*

- Type = data, control, management
- Subtype = RTS, CTS, ACK, …
- To DS, From DS = diretto a o proveniente dal sistema di distribuzione
- MF = More Fragments
- Retry = è una ritrasmissione
- Pwr = gestione dell'alimentazione delle stazioni (sleep, wake-up)
- More = altri frame a seguire
- W = dati cifrati con WEP
- O = mantenere l'ordine di sequenza dei frame
- Duration = durata del frame e del relativo ACK
- Address 1…4 = indirizzi MAC (48 bit) di mittente, destinatario, Tx e RX radio (usati secondo le situazioni specifiche)
- Sequence = numerazione delle trame in sequenza
- Checksum = codice di controllo d'errore

>> Qualche dettaglio in più sui campi:
>> - **Type** distingue i frame di *management* (beacon, probe, autenticazione, associazione), di *controllo* (RTS, CTS, ACK) e di *dati*; **Subtype** specifica il tipo esatto;
>> - **Duration** è espresso in µs ed è il valore che le altre stazioni copiano nel proprio NAV;
>> - **Seq.** (Sequence Control) contiene 12 bit di numero di sequenza e 4 bit di numero di frammento: serve a scartare i duplicati (frame ritrasmessi perché era andato perso l'ACK, con Retry = 1) e a riassemblare i frammenti (MF = 1 su tutti i frammenti tranne l'ultimo);
>> - **Pwr** = 1 indica che dopo questo frame la stazione entra in risparmio energetico: l'AP terrà in coda i frame diretti a lei; **More** dice a una stazione in power save che l'AP ha altri frame in coda per lei;
>> - **W** (oggi "Protected Frame") indica payload cifrato, con WEP o con i successori WPA/WPA2;
>> - **Checksum** è un CRC a 32 bit, come l'FCS di Ethernet.
>>
>> Differenze rispetto al frame Ethernet: fino a 4 indirizzi invece di 2 (Address 4 c'è solo nel caso WDS, quindi l'header è normalmente di 24 byte, 30 con quattro indirizzi), nessun preambolo a livello MAC (è nel PHY) e nessun campo Type/Length: l'EtherType del protocollo trasportato sta in un header LLC/SNAP all'inizio di Data. Il payload massimo (2312 byte) è più grande dei 1500 di Ethernet.

---
## Slide 71 -> 74 – Indirizzamento 802.11

IBSS (Ad-Hoc)

![[RT08-s071-1.png|450]]

- DA = destinatario e Rx
- SA = mittente e Tx

Address 1 = DA
Address 2 = SA
Address 3 = BSSID (casuale generato da una delle stazioni nell'IBSS)
Address 4 = N/A
To DS = 0
From DS = 0

BSS/ESS Uplink (anche verso LAN)

![[RT08-s072-1.png|500]]

- BSSID = Rx
- SA = mittente e Tx
- DA = destinatario

Address 1 = BSSID (MAC address dell'AP)
Address 2 = SA
Address 3 = DA
Address 4 = N/A
To DS = 1
From DS = 0

BSS/ESS Downlink (anche da LAN)

![[RT08-s073-1.png|500]]

- BSSID = Tx
- SA = mittente
- DA = destinatario e Rx

Address 1 = DA
Address 2 = BSSID (MAC address dell'AP)
Address 3 = SA
Address 4 = N/A
To DS = 0
From DS = 1

ESS con Wireless Distribution System

![[RT08-s074-1.png|600]]

- TA = Tx, RA = Rx
- SA = mittente, DA = destinatario

Address 1 = RA
Address 2 = TA
Address 3 = DA
Address 4 = SA
To DS = 1
From DS = 1

>> Riepilogo (RA/TA = ricevitore/trasmettitore radio di questo salto, DA/SA = destinazione/sorgente finali):
>>
>> | Caso | To DS | From DS | Address 1 | Address 2 | Address 3 | Address 4 |
>> |---|---|---|---|---|---|---|
>> | IBSS (ad-hoc) | 0 | 0 | DA | SA | BSSID | – |
>> | Uplink (stazione → AP) | 1 | 0 | BSSID | SA | DA | – |
>> | Downlink (AP → stazione) | 0 | 1 | DA | BSSID | SA | – |
>> | WDS (AP → AP) | 1 | 1 | RA | TA | DA | SA |
>>
>> Regola per ricordarla: **Address 1 è sempre il ricevitore radio** (chi deve prendere il frame e mandare l'ACK) e **Address 2 è sempre il trasmettitore radio** (a cui va mandato l'ACK). Address 3 contiene l'indirizzo "che manca" fra DA, SA e BSSID; Address 4 serve solo quando sia ricevitore sia trasmettitore sono AP, e quindi servono quattro indirizzi distinti.
>>
>> Esempio di uplink verso la LAN: il PC wireless S invia a un server Ethernet D. Sul canale radio: A1 = BSSID dell'AP, A2 = MAC di S, A3 = MAC di D. L'AP, che fa da bridge, lo converte in un frame Ethernet con destinazione D e sorgente S: il server vede come mittente il MAC di S, non quello dell'AP.
>>
>> Nella slide 74 il frame descritto è quello sul salto fra il secondo AP (TA) e il terzo AP (RA), la freccia rossa spessa. Il percorso completo è SA → AP1 → AP2 → AP3 → DA, e su ogni salto cambiano solo RA e TA, mentre SA e DA restano gli stessi. Nell'IBSS il BSSID casuale è un indirizzo con il bit U/L = 1 (amministrato localmente).

---
## Slide 75 – Interconnessione di LAN

Interconnessione di LAN

---
## Slide 76 – Alternative di interconnessione di LAN

- A volte può essere conveniente suddividere una LAN in più spezzoni o interconnettere LAN o reti di tipo diverso
- Servono apparati di interconnessione che a seconda della funzionalità prendono il nome di
	- Repeaters
	- Bridge
	- Routers
	- Gateways

>> Il criterio è lo strato OSI fino a cui l'apparato "ragiona":
>> - **repeater/hub** → strato 1 (bit): ripete i segnali, non guarda i frame;
>> - **bridge/switch** → strato 2 (frame): inoltra in base all'indirizzo MAC;
>> - **router** → strato 3 (pacchetti): inoltra in base all'indirizzo IP e separa i domini di broadcast;
>> - **gateway** → strati superiori: converte fra protocolli diversi, per esempio a livello applicativo (nel linguaggio comune "gateway" indica spesso anche il router di default).

---
## Slide 77 – REPEATER

- Apparato attivo che collega 2 o più mezzi di trasmissione
- Opera a livello dello **strato1** OSI
- Permette l'estensione del mezzo di trasmissione
	- Amplifica il segnale
	- Rigenera i bit entranti e li sincronizza
- Permette di estendere una topologia LAN
	- Utilizza più "spezzoni" di mezzo trasmissivo, ciascuno dei quali deve sottostare alle norme di standard
	- Le "parti" della LAN devono essere equivalenti per quanto riguarda il livello 2 (MAC)
- Nella rete Ethernet il diametro complessivo non deve superare i 2500 metri

>> Il repeater non interpreta i frame: ripete su tutte le altre porte ogni bit che riceve, collisioni comprese. Quindi tutti i segmenti collegati da repeater formano **un unico dominio di collisione** (e di broadcast). L'hub è un repeater multiporta.
>>
>> Il limite dei 2500 m viene dal vincolo di CSMA/CD: il tempo di andata e ritorno fra le due stazioni più lontane, compresi i ritardi dei repeater, deve restare entro lo slot time di 512 bit = 51,2 µs a 10 Mbit/s, cioè entro la durata della frame minima di 64 byte. Con 10Base5: al massimo 5 segmenti da 500 m e 4 repeater fra due stazioni (regola 5-4-3: 5 segmenti, 4 repeater, solo 3 segmenti popolati), da cui 5 × 500 = 2500 m. Vedi anche [[07 - Strato fisico e mezzi trasmissivi]].

---
## Slide 78 – Bridge

- Opera a livello dello strato 2 OSI
- Può interconnettere LAN di tipo diverso (Ethernet con Token ring, ...)
	- Esegue più protocolli MAC
	- Effettua conversioni del formato di trama
- Nel caso di reti Ethernet separa i domini di collisione
	- Il vincolo dei m. 2500 si applica al collision domain
	- Tramite bridge si possono realizzare LAN di dimensione superiore
- Learning bridge e Filtering bridge
	- Impara quali stazioni sono connesse ad una porta analizzando il "source address" delle trame MAC
	- Invia la trama solo sulla porta di uscita dove si trova il destinatario analizzando il destination address della trama MAC
		- Esegue una funzione di instradamento a livello di trama
	- Separa il traffico dei diversi domini di collisione

>> Il bridge è *store-and-forward*: riceve il frame per intero, ne controlla l'FCS e lo ritrasmette sull'altra porta applicando a sua volta CSMA/CD. Per questo una collisione su un lato non si propaga sull'altro, e ogni porta è un dominio di collisione a sé.
>>
>> Funzionamento del *learning bridge* (bridge trasparente, IEEE 802.1D), per ogni frame ricevuto su una porta P:
>> 1. **apprendimento**: associa il MAC sorgente alla porta P nella tabella (con un timer di *aging*, tipicamente 300 s, per dimenticare le stazioni spostate o spente);
>> 2. **inoltro**: se il MAC destinazione è in tabella su una porta diversa da P, inoltra solo lì; se è sulla stessa porta P, **scarta** il frame (*filtering*: mittente e destinatario sono sullo stesso segmento); se non è in tabella, oppure è broadcast o multicast, lo inoltra su tutte le porte tranne P (*flooding*).
>>
>> Il bridge **non** separa i domini di broadcast: i broadcast vengono inoltrati ovunque, e per separarli serve un router (o le VLAN). Se fra i bridge ci sono anelli, i broadcast girerebbero all'infinito: per questo i bridge eseguono lo *Spanning Tree Protocol*, che disattiva alcune porte per ottenere una topologia ad albero.

---
## Slide 79 – Bridge da 802.x a 802.y

Operation of a LAN bridge from 802.11 to 802.3.

![[RT08-s079-1.png|650]]

- Host A: Network, LLC, MAC (802.11 | Pkt), Physical (802.11 | Pkt)
- Bridge: LLC (Pkt); lato Wireless LAN 802.11, lato Ethernet 802.3
- Host B: Physical (802.3 | Pkt), MAC (802.3 | Pkt), LLC, Network
- Wireless LAN, Ethernet

da Tanenbaum

>> Il pacchetto di rete (Pkt) di A scende fino al MAC, dove riceve l'intestazione 802.11, e attraversa la WLAN. Il bridge toglie l'intestazione 802.11, arriva fino allo strato LLC (comune a tutte le LAN 802, vedi IEEE 802.2) e rimette un'intestazione 802.3 per la Ethernet; B risale la pila. Il pacchetto di livello 3 non viene toccato: il bridge è trasparente per IP.
>>
>> Le difficoltà della conversione fra LAN diverse: formati di trama diversi (va ricalcolato il CRC); dimensioni massime diverse (2312 byte in 802.11 contro 1500 in Ethernet, e a livello 2 non esiste frammentazione: un frame troppo grande va scartato); velocità diverse (servono buffer); funzioni presenti solo da un lato (cifratura, QoS). È proprio quello che fa ogni AP verso la LAN cablata.

---
## Slide 80 – SWITCH

- È un bridge ad alta densità di porte
- Tipicamente ad ogni porta è connessa una sola stazione
- È in grado di trasferire contemporaneamente trame da più porte di ingresso a più porte di uscita
	- Opera una funzione di commutazione a livello 2 basata sull'indirizzo MAC
- Uno switch Ethernet svolge una funzione simile all'hub ma garantendo maggiori prestazioni

>> Con una sola stazione per porta (*microsegmentazione*) ogni collegamento è un dominio di collisione con due soli attori, e può funzionare in **full-duplex**: le collisioni spariscono e CSMA/CD di fatto non serve più. Ogni stazione ha a disposizione l'intera capacità della propria porta.
>>
>> Modalità di inoltro: *store-and-forward* (riceve tutto il frame e controlla l'FCS prima di inoltrarlo, così scarta i frame errati) oppure *cut-through* (inizia a ritrasmettere appena ha letto il MAC di destinazione, nei primi 6 byte dopo il preambolo: latenza minore, ma propaga anche i frame corrotti).

---
## Slide 81 – Differenza fra hub e switch

- Hub
	- bus collassato = mezzo condiviso, trasmissione broadcast delle trame
	- Capacità aggregata = capacità della singola porta
- Switch
	- Sistema di commutazione = ri-trasmissione selettiva delle trame
	- Capacità aggregata superiore a quella della singola porta

![[RT08-s081-1.png|300]]![[RT08-s081-2.png|300]]

- Hub. Esempio: hub fast ethernet. Si trasferiscono 100 Mbit/s
- Switch. Esempio: switch fast ethernet. Si trasferiscono 200 Mbit/s

>> Nell'hub il frame che entra da una porta esce su tutte le altre: c'è un solo "canale" da 100 Mbit/s condiviso da tutti, e mentre una stazione trasmette le altre devono aspettare. Nello switch il frame esce solo verso il destinatario, quindi due coppie disgiunte (in figura: alto sinistra → basso destra e alto destra → basso sinistra) trasmettono contemporaneamente, cioè 2 × 100 = 200 Mbit/s.
>>
>> In generale, con N porte e collegamenti full-duplex lo switch può arrivare a N × 100 Mbit/s di capacità aggregata (N/2 coppie che si scambiano dati in entrambe le direzioni), purché la sua matrice di commutazione (*backplane*) regga quel traffico, cioè sia *non-blocking*. Il limite resta il caso in cui più stazioni trasmettono verso la stessa porta di uscita: lì i frame si accodano nei buffer.

---
## Slide 82 – Learning Switch

![[RT08-s082-1.png|650]]

- In alto a sinistra: MAC A sulla porta 1; tabella: PORT 1 = MAC A
- In alto a destra: MAC A, MAC C sulla porta 3; tabella: PORT 1 = MAC A, PORT 3 = MAC C
- In basso: MAC A, due switch collegati (porta 2 dello switch di sinistra ↔ porta 1 dello switch di destra)

>> Le tre situazioni della figura:
>> 1. **In alto a sinistra**: A invia un frame (per esempio a C) entrando dalla porta 1. Lo switch impara "PORT 1 = MAC A"; la destinazione non è ancora in tabella, quindi fa *flooding* sulle porte 2, 3 e 4.
>> 2. **In alto a destra**: C risponde ad A dalla porta 3. Lo switch impara "PORT 3 = MAC C"; ora A è in tabella, quindi il frame esce **solo** dalla porta 1. Da questo momento il traffico fra A e C non disturba più le stazioni sulle porte 2 e 4.
>> 3. **In basso**: con due switch in cascata, il frame di A (destinazione ignota) viene inviato dal primo switch sulle porte 2 e 4; il secondo lo riceve sulla porta 1 e lo inoltra a sua volta sulle porte 2 e 3. Il secondo switch impara "PORT 1 = MAC A": su una porta che collega un altro switch ci sono **più indirizzi MAC**, cioè tutte le stazioni che stanno "dietro" quella porta.
>>
>> I frame broadcast (es. richieste ARP, destinazione FF:FF:FF:FF:FF:FF) vengono sempre inoltrati su tutte le porte: anche con molti switch, tutta la rete resta un unico dominio di broadcast.

---
## Riassunto

>> **LAN e accesso multiplo**
>> - LAN: apparati indipendenti, area limitata, canale condiviso, bit rate elevato, pochi errori. Le scelte da fare sono il mezzo, la topologia (bus, anello, stella) e il protocollo di accesso.
>> - Un mezzo condiviso porta con sé **broadcast** (tutti ricevono) e **collisioni** (trasmissioni simultanee).
>> - Tassonomia: **canalizzazione** (FDMA, TDMA, CDMA) oppure **accesso dinamico**. Quest'ultimo può essere ordinato (prenotazione, passaggio del permesso) o **a contesa**: il protocollo combina una CAP per accedere al canale e una CRA per risolvere le collisioni.
>>
>> **IEEE 802 ed Ethernet**
>> - IEEE 802 divide lo strato 2 in **LLC** (802.2, comune a tutti) e **MAC**, specifico di ogni standard: 802.3 Ethernet, 802.11 WLAN…
>> - **CSMA/CD**: si ascolta il canale, si trasmette, se si rileva una collisione si interrompe, si invia il jamming e si ritenta dopo un backoff.
>> - **Slot time** = 512 bit, cioè 51,2 µs a 10 Mbit/s. Una trama deve durare almeno il tempo di andata e ritorno, per accorgersi della collisione mentre si sta ancora trasmettendo: da qui la **trama minima di 64 byte** e il limite al diametro della rete.
>> - Trama: preambolo + SFD, indirizzi di destinazione e sorgente (6 byte), Length/Type (≤1500 indica una lunghezza, ≥1536 un tipo), dati 46–1500 byte (con padding), FCS (CRC-32). Fra due trame almeno 96 bit di IFG.
>> - Indirizzi MAC unicast, multicast e broadcast (`ff:ff:ff:ff:ff:ff`). **Collision domain**: stazioni che possono collidere. **Broadcast domain**: stazioni raggiunte da un broadcast.
>>
>> **Evoluzione di Ethernet e cablaggio**
>> - 10Base5 (coassiale spesso), 10Base2 (coassiale sottile), 10BaseT (UTP con hub). Fast Ethernet 100 Mbit/s (100BaseTX, FX, T4). Gigabit (1000BaseSX/LX/CX/T, con carrier extension e frame bursting). Multigigabit e Carrier Ethernet.
>> - **Cablaggio strutturato**: una stella gerarchica con armadi di rete, patch panel, patch cord e apparati attivi (switch).
>>
>> **Wi-Fi 802.11**
>> - Lo strato fisico usa le bande ISM a 2,4 GHz (802.11b/g, con canali non sovrapposti 1, 6, 11) e a 5 GHz (802.11a).
>> - Architettura: BSS con access point, ESS (più BSS collegati da un distribution system), IBSS (ad hoc).
>> - Sul canale radio non si può rilevare la collisione e ci sono il **terminale nascosto** e quello **esposto**. Per questo la DCF usa **CSMA/CA**: DIFS, backoff casuale, ACK dopo un SIFS ed eventualmente RTS/CTS. La PCF è un accesso controllato dall'AP con polling e beacon.
>> - La trama ha fino a **4 indirizzi**, il cui significato dipende dai bit To DS e From DS.
>>
>> **Interconnessione**
>> - **Repeater/hub**: strato 1, estende il collision domain. **Bridge/switch**: strato 2, separa i collision domain ma non i broadcast domain.
>> - Lo switch **impara** gli indirizzi sorgente sulle porte e inoltra solo verso la porta giusta. Se la destinazione è sconosciuta, inoltra su tutte le porte (flooding).
