[2627_IP_1](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/2627_IP_1.pdf>)

# Instradamento IPv4 e IPv6

>> Questa lezione ha slide di approfondimento in [[02 - Approfondimenti IP]]: nei punti in cui conviene aprirle trovi una riga **Approfondimento in 02** con il link diretto alla slide giusta.

## Indice

1. **Il protocollo IPv4 e il formato del datagramma** (slide 2–10)
	- [[#Slide 2 – Esploriamo i protocolli della rete Internet|Introduzione a IPv4]]
	- [[#Slide 3 – Architettura|Posizione di IP nell'architettura]]
	- [[#Slide 4 – IPv4- RFC 791|Caratteristiche: connectionless e best effort]]
	- [[#Slide 5 – Struttura degli indirizzi IPv4|Indirizzi a 32 bit e notazione dotted decimal]]
	- [[#Slide 6 – Formato del pacchetto|Formato dell'intestazione]]
	- [[#Slide 7 – Significato delle PCI (1)|Significato dei campi (PCI)]]
2. **Frammentazione e riassemblaggio** (slide 11–22)
	- [[#Slide 11 – Fragment offset|Fragment offset in blocchi da 8 byte]]
	- [[#Slide 12 – La frammentazione IPv4|Frammentazione e MTU]]
	- [[#Slide 13 – Chi frammenta|Chi frammenta e chi riassembla]]
	- [[#Slide 15 – Esempio di calcolo dell'offset|Esempi di calcolo dell'offset]]
	- [[#Slide 17 – Primo collegamento: cattura|Catture Wireshark dei frammenti]]
	- [[#Slide 21 – Il riassemblamento|Riassemblaggio]]
	- [[#Slide 22 – Da ricordare|Riepilogo delle funzioni dell'intestazione]]
3. **Internet come rete di reti: network IP e router** (slide 23–41)
	- [[#Slide 23 – Applicazioni residenti in calcolatori a grande distanza|Il problema dell'instradamento]]
	- [[#Slide 25 – Come funziona Internet|Network IP, host e router]]
	- [[#Slide 30 – Interconnettere le isole|Interconnessione delle network e router]]
	- [[#Slide 34 – Le network fra i gateway|Collegamenti fra router come network e forwarding]]
	- [[#Slide 37 – Cosa fa IP|Ruolo di IP e decisione di instradamento]]
	- [[#Slide 40 – L'instradamento IP|Instradamento hop-by-hop]]
4. **Indirizzamento: Net-ID, Host-ID e netmask** (slide 42–50)
	- [[#Slide 42 – Come fa un calcolatore a sapere a quale network appartiene?|Appartenenza a una network]]
	- [[#Slide 43 – Semantica dell'indirizzo IP|Net-ID e Host-ID]]
	- [[#Slide 44 – Come si distingue net-ID da host-ID?|Netmask e notazioni]]
	- [[#Slide 46 – Il network ID|Indirizzo di network e di broadcast]]
	- [[#Slide 48 – Esercizio|Esercizi ed esempio UniBO]]
	- [[#Slide 50 – Da ricordare|Numero di host disponibili]]
5. **Consegna diretta e indiretta** (slide 51–58)
	- [[#Slide 51 – Il singolo host come decide in che modo e dove inviare il pacchetto?|Come decide l'host]]
	- [[#Slide 53 – Schematicamente|Confronto dei Network ID]]
	- [[#Slide 55 – Instradamento diretto e indiretto|Direct e indirect delivery]]
6. **Tabella di instradamento e longest prefix match** (slide 59–75)
	- [[#Slide 59 – Come posso sapere quale gateway usare per la consegna indiretta?|Scelta del gateway]]
	- [[#Slide 60 – La tabella di instradamento IP|Struttura della tabella e campi delle rotte]]
	- [[#Slide 62 – Prefisso IP|Prefisso IP e notazione CIDR]]
	- [[#Slide 64 – Lettura della tabella|Lettura della tabella e table lookup]]
	- [[#Slide 66 – Table lookup|Longest prefix match]]
	- [[#Slide 68 – Esempio di lookup – 1|Esempi di lookup]]
	- [[#Slide 71 – Qual è l'obiettivo della tabella|Campi gateway e interfaccia]]
7. **Consegna diretta a livello 2: ARP** (slide 76–91)
	- [[#Slide 76 – Come si implementa la consegna diretta?|Implementare la consegna diretta]]
	- [[#Slide 77 – Relazione Indirizzi L2 – Indirizzi IP|Indirizzi L2 e indirizzi IP]]
	- [[#Slide 80 – Address Resolution Protocol – ARP (RFC 826)|Protocollo ARP e cache ARP]]
	- [[#Slide 84 – Direct Delivery|Indirizzi L2 e IP nella consegna diretta e indiretta]]
	- [[#Slide 87 – Esempio 1|Esempi con tabelle di instradamento]]
8. **Classi di indirizzi, subnetting e CIDR** (slide 92–109)
	- [[#Slide 92 – La domanda di oggi|Evoluzione della logica di instradamento]]
	- [[#Slide 94 – IP e netmask|Netmask come informazione locale]]
	- [[#Slide 95 – Classe delle reti|Classi A, B, C, D, E]]
	- [[#Slide 97 – Intervalli di indirizzi|Intervalli e indirizzi riservati]]
	- [[#Slide 98 – Le sottoreti|Subnetting]]
	- [[#Slide 103 – CIDR|CIDR e suoi obiettivi]]
	- [[#Slide 105 – Supernetting|Supernetting e aggregazione]]
	- [[#Slide 107 – Oggi|Esempio di tabelle con aggregazione]]
	- [[#Slide 109 – Da ricordare|Classful e CIDR a confronto]]
9. **Protocolli di controllo: ICMP e DHCP** (slide 110–130)
	- [[#Slide 110 – Domanda|Funzioni di controllo in IPv4]]
	- [[#Slide 113 – ICMP|ICMP e formato del pacchetto]]
	- [[#Slide 115 – Tipi di errori|Messaggi di errore]]
	- [[#Slide 117 – Informazioni|Messaggi informativi: echo e timestamp]]
	- [[#Slide 119 – Le applicazioni|Ping e traceroute]]
	- [[#Slide 124 – DHCP – RFC 2131,2132|DHCP e scambio DORA]]
10. **Esaurimento di IPv4, indirizzi privati e NAT** (slide 131–148)
	- [[#Slide 131 – Domanda|Come continuare a usare IPv4]]
	- [[#Slide 132 – Indirizzamento IP: gestione|Gestione degli indirizzi: IANA, RIR, LIR]]
	- [[#Slide 133 – Esaurimento degli indirizzi IPv4|Esaurimento degli indirizzi]]
	- [[#Slide 134 – Indirizzi IP privati|Indirizzi privati (RFC 1918)]]
	- [[#Slide 137 – NAT|NAT e motivazioni]]
	- [[#Slide 140 – Basic NAT – Conversione di indirizzo IP|Basic NAT e NAPT]]
	- [[#Slide 142 – Direzione delle connessioni|Connessioni entranti e port forwarding]]
	- [[#Slide 144 – Analisi di connessioni attraverso NAT|Catture attraverso il NAT]]
	- [[#Slide 146 – NAT e applicazioni di rete|Problemi del NAT e limiti di IPv4]]
11. **IPv6: intestazione e indirizzi** (slide 149–161)
	- [[#Slide 149 – Cosa viene dopo IPv4?|Motivazioni e caratteristiche di IPv6]]
	- [[#Slide 152 – Header IPv6|Intestazione IPv6 e confronto con IPv4]]
	- [[#Slide 155 – L'indirizzo IPv6|Notazione degli indirizzi]]
	- [[#Slide 156 – Tipologie di indirizzi|Tipi di indirizzi: unicast, multicast, anycast]]
	- [[#Slide 158 – Il prefisso ha lo stesso significato|Prefisso e Interface Identifier]]
	- [[#Slide 159 – Anycast (1)|Anycast]]
12. **ICMPv6, Neighbor Discovery e autoconfigurazione** (slide 162–175)
	- [[#Slide 162 – ICMPv6|ICMPv6 e sue funzioni]]
	- [[#Slide 164 – Discovery e configurazione|Discovery e configurazione]]
	- [[#Slide 165 – Neighbor Discovery Protocol (NDP)|Neighbor Discovery Protocol]]
	- [[#Slide 166 – NS/NA|Neighbor Solicitation e Advertisement]]
	- [[#Slide 168 – Il router di default|Router di default]]
	- [[#Slide 169 – Duplicate Address Detection (DAD)|Duplicate Address Detection]]
	- [[#Slide 170 – Stateless Address Autoconfiguration (SLAAC)|SLAAC]]
	- [[#Slide 172 – DHCPv6|DHCPv6]]
	- [[#Slide 173 – Avvio di un host IPv6|Avvio di un host IPv6]]
	- [[#Slide 174 – Assegnazione indirizzi IPv6|Assegnazione dei blocchi IPv6]]


---
## Slide 1 – Instradamento IPv4 e IPv6

---
## Slide 2 – Esploriamo i protocolli della rete Internet

**Esploriamo i protocolli della rete Internet, in particolare l'Internet Protocol (IP) nella sua versione più diffusa che è la 4 (IPv4)**

---
## Slide 3 – Architettura

![[RT01-s003-1.png|600]]

| Livello OSI | Protocolli | Strato |
|---|---|---|
| Application | Applicazioni: e-mail, ftp, telnet, www… | Strati superiori |
| Transport | TCP, UDP | Strato 4 |
| Network | **IP** (con ICMP e ARP) | Strato 3 |
| Data Link | Non specificato (ad es. IEEE 802-Ethernet-X25-Aloha ecc.) | Strato 2 |
| Physical | Non specificato – Collegamento fisico | Strato 1 |

>> IP è il "collante" dell'architettura: tutto ciò che sta sopra (TCP/UDP e applicazioni) usa IP, e IP può funzionare sopra qualunque tecnologia di livello 2/1 (modello "a clessidra").
>> ICMP (messaggi di controllo/errore) è trasportato dentro IP; ARP serve a tradurre indirizzi IP in indirizzi di livello 2 (es. MAC Ethernet), per questo nel disegno sta a cavallo tra livello 3 e livello 2.

---
## Slide 4 – IPv4- RFC 791

- Progettato per funzionare a **commutazione di pacchetto** in modalità **connectionless**
- Si fa carico della trasmissione di pacchetti detti **datagrammi** da sorgente a destinazione, attraverso reti eterogenee
- Identifica **host** e **router** tramite indirizzi di **lunghezza fissa**, raggruppandoli in **reti IP**
- **Frammenta** e **riassembla** i datagrammi quando necessario
- Offre un servizio di tipo **best effort**, cioè non sono previsti meccanismi per
	- aumentare l'affidabilità del collegamento end-to-end,
	- eseguire il controllo di flusso e della sequenza (no ARQ).

>> "Connectionless" significa che non c'è una fase di instaurazione della connessione: ogni datagramma porta con sé l'indirizzo di destinazione completo ed è instradato indipendentemente dagli altri. Eventuali funzioni di affidabilità (ritrasmissioni, ordinamento, controllo di flusso) sono delegate ai livelli superiori, tipicamente a TCP.

---
## Slide 5 – Struttura degli indirizzi IPv4

- Indirizzi di lunghezza fissa pari a **32 bit**
- Scritti convenzionalmente come sequenza di 4 numeri decimali, con valori da **0** a **255**, separati da punto (rappresentazione **dotted decimal**)

```
10001001.11001100.11010100.00000001
137.204.212.1
```

- Numero teorico max. di indirizzi
$$2^{32} = 4.294.967.296$$
	- In realtà si riesce a sfruttare un numero molto inferiore
- Assegnati dalla **IANA** (**I**nternet **A**ssigned **N**umbers **A**uthority)

>> Ogni numero decimale corrisponde a un ottetto (8 bit), quindi va da $0$ a $2^8-1=255$. Esempio: $10001001_2 = 128+8+1 = 137$, $11001100_2 = 128+64+8+4 = 204$, $11010100_2 = 128+64+16+4=212$.
>> Il numero effettivamente utilizzabile è minore perché interi blocchi sono riservati (indirizzi privati, loopback 127.0.0.0/8, multicast, indirizzi di rete e broadcast di ogni subnet, ecc.) e l'allocazione a blocchi genera inevitabilmente sprechi.

---
## Slide 6 – Formato del pacchetto

![[RT01-s006-1.png|600]]

>> Dimensioni dei campi: Version 4 bit, IHL 4 bit, Type of Service 8 bit, Total Length 16 bit, Identification 16 bit, Flags 3 bit, Fragment Offset 13 bit, TTL 8 bit, Protocol 8 bit, Header Checksum 16 bit, indirizzi 32 bit ciascuno. Senza opzioni l'intestazione è lunga $5 \times 32 = 160$ bit $= 20$ byte.

---
## Slide 7 – Significato delle PCI (1)

- **Version** : indica il formato dell'intestazione, attualmente la versione in uso è la 4
- **IHL** : lunghezza dell'intestazione, espressa in parole di 32 bit; lunghezza minima = 5
- **Type of service** : indicazione sul tipo di servizio richiesto, usato anche come sorta di priorità
- **Total length** : lunghezza totale del datagramma, misurata in bytes; lunghezza massima = 65535 bytes, ma non è detto che tutte le implementazioni siano in grado di gestire questa dimensione

>> PCI = Protocol Control Information, cioè i campi di intestazione del protocollo.
>> IHL è su 4 bit, quindi vale al massimo 15: l'intestazione va da $5\cdot 4 = 20$ byte a $15 \cdot 4 = 60$ byte (40 byte di opzioni al massimo). Total Length è su 16 bit, da cui il massimo $2^{16}-1 = 65535$ byte.
>> Oggi il campo Type of Service è stato ridefinito come DSCP (6 bit, Differentiated Services) + ECN (2 bit), come si vede nelle catture Wireshark più avanti ("Differentiated Services Field").

---
## Slide 8 – Significato delle PCI (2)

- **Identification** : Valore utilizzato per associare fra loro i frammenti dello stesso datagramma
- **Flag** :
	- bit 0: sempre a 0
	- bit 1: don't fragment (DF)
		- DF = 0 si può frammentare
		- DF = 1 non si può frammentare
	- bit 2: more fragments (MF)
		- MF = 0 ultimo frammento
		- MF = 1 frammento intermedio
- **Fragment offset**: indica quale è la posizione di questo frammento nel datagramma, come distanza in unità di 64 bit dall'inizio

>> Il Fragment Offset è su 13 bit: in unità da 8 byte può indicare posizioni fino a $(2^{13}-1)\cdot 8 = 65528$ byte, coerente con la lunghezza massima del datagramma. Usare blocchi da 8 byte "risparmia" 3 bit rispetto a contare i singoli byte (che richiederebbe 16 bit).
>> Un datagramma non frammentato ha MF = 0 e Offset = 0; il primo frammento ha MF = 1 e Offset = 0; l'ultimo ha MF = 0 e Offset > 0.

---
## Slide 9 – Significato delle PCI (3)
*(slide marcata "A")*

- **Time to live (TTL)** : max numero di nodi attraversabili
	- Il nodo sorgente attribuisce un valore maggiore di 0 a TTL (tipicamente TTL = 64, al massimo 255)
	- Ogni nodo che attraversa il datagramma pone TTL = TTL - 1
	- Il primo nodo che vede TTL = 0 distrugge il datagramma
- **Protocol** : indica a quale protocollo di livello superiore appartengono i dati del datagramma
- **Header checksum** : controllo di errore della sola intestazione, viene ricalcolato da ogni nodo attraversato dal datagramma
- **Source and Destination Address** : indirizzi sorgente e destinazione

>> Il TTL impedisce che un pacchetto intrappolato in un loop di instradamento circoli all'infinito. Quando un router scarta un pacchetto per TTL scaduto invia di norma alla sorgente un messaggio ICMP "Time Exceeded" (su questo si basa `traceroute`).
>> Valori tipici del campo Protocol: 1 = ICMP, 6 = TCP, 17 = UDP.
>> Il checksum va ricalcolato a ogni hop perché almeno il TTL cambia a ogni nodo (e con esso l'intestazione).

---
## Slide 10 – Significato delle PCI (4)
*(slide marcata "A")*

- **Options** : contiene opzioni relative al trasferimento del datagramma (registrazione del percorso, meccanismi di sicurezza), è perciò di lunghezza variabile
- **Padding** : bit privi di significato aggiunti per fare in modo che l'intestazione sia con certezza multipla di 32 bit

>> Il padding è necessario perché IHL misura l'intestazione in parole da 32 bit: se le opzioni occupano ad esempio 3 byte, si aggiunge 1 byte di padding per arrivare a un multiplo di 4 byte.

---
## Slide 11 – Fragment offset

- Il datagramma IP viene virtualmente suddiviso in sotto-blocchi di 8 byte (64 bit)
- Per chi trasmette (non necessariamente la sorgente dei dati ma anche un nodo intermedio)
	- Il primo blocco del datagramma è il numero 0
	- I blocchi successivi sono logicamente numerati sequenzialmente
- Il numero logico del primo blocco viene scritto nel **Fragment Offset** del datagramma

![[RT01-s011-1.png|600]]

- Header 1 – Min 20 byte
- 1° blocco: 64 bit – Offset = 0
- 2° blocco: 64 bit – Offset = 1
- 3° blocco: 64 bit – Offset = 2

>> I blocchi numerati sono solo quelli del campo dati (l'intestazione non conta). Un frammento che inizia al byte $b$ del payload originale ha quindi $\text{Offset} = b/8$; per questo tutti i frammenti tranne l'ultimo devono avere un campo dati di lunghezza multipla di 8 byte.

---
## Slide 12 – La frammentazione IPv4

![[RT01-s012-1.png|600]]

- Pacchetto originale (1514 byte): Eth | IP (FO=0) | Dati applicazione
- Rete di casa – Massima lunghezza del frame di livello 2 = Ethernet 1514 byte
- Rete di accesso geografica – Massima lunghezza del frame di livello 2 della tecnologia geografica = 800 byte (esempio)
- Internet
- Frammenti: Eth | IP (**FO = 0**) | Segmento 1 (8\*N byte); Eth | IP (**FO = N**) | Seg. 2

>> Il primo frammento trasporta $8N$ byte di dati, quindi il secondo frammento inizia al blocco numero $N$: FO = N.
>> Nota: 1514 byte è la lunghezza del frame Ethernet compresa l'intestazione Ethernet di 14 byte; il pacchetto IP al suo interno può essere al massimo di 1500 byte (MTU Ethernet).

---
## Slide 13 – Chi frammenta

- La dimensione massima del frame di livello 2 dipende dalle tecnologie
	- Tale dimensione viene tipicamente chiamata Maximum Transmission Unit (MTU) tipicamente misurata in byte
- In teoria qualunque nodo di rete connesso a tecnologie diverse di livello 2, può dover affrontare questo problema
- Pertanto **qualunque nodo di rete** dotato di protocollo IP deve potere e **può frammentare** un datagramma ( ameno che non sia vietato dal Flag Don't Fragment)
- I nodi intermedi **non riassemblano**, ma lo fa solamente il **terminale ricevente**

>> Se un router deve inoltrare un datagramma più grande della MTU in uscita e il flag DF = 1, lo scarta e invia alla sorgente un messaggio ICMP "Fragmentation needed": su questo meccanismo si basa la Path MTU Discovery, con cui la sorgente scopre la MTU minima del percorso ed evita del tutto la frammentazione.

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 4 – Algoritmi per il riassemblamento IPv4|slide 4: perché ogni nodo IP deve poter inoltrare datagrammi di almeno 68 byte senza frammentarli]]

---
## Slide 14 – Frammentazioni multiple

- Un datagramma può essere frammentato a più riprese in nodi successivi
- La numerazione tramite "**offset**" è stata concepita per poter rinumerare facilmente **frammenti di un frammento**
- Un datagramma può essere duplicato dalla rete e le copie possono seguire percorsi diversi con frammentazioni diverse
- Possono essere ricevuti frammenti che si sovrappongono parzialmente

>> Poiché l'offset è assoluto (riferito all'inizio del datagramma originale), quando un frammento con offset $O$ viene ulteriormente spezzato, i nuovi pezzi hanno offset $O + k$, dove $k$ è la posizione (in blocchi) del pezzo all'interno del frammento: non serve conoscere nulla degli altri frammenti.

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 3 – Domanda|slide 3: come si ricostruisce un datagramma da frammenti fuori ordine, duplicati o sovrapposti]]

---
## Slide 15 – Esempio di calcolo dell'offset

![[RT01-s015-1.png|600]]

- Datagramma originale: header 20 byte (Offset=0) + dati 640 bit = 80 byte (10 blocchi)
- Nodo X : pacchetto in uscita MTU <= 512 bit (64 byte)
	- 480 bit = 60 (20+40) byte – Offset=0
	- Offset=5
- Nodo Y : pacchetto in uscita MTU <= 304 bit (38 byte)
	- 288 bit = 36 byte – Offset=0
	- 288 bit = 36 byte – Offset=2
	- 224 bit = 28 byte – Offset=4

>> Nodo X: con MTU 64 byte e 20 byte di header restano 44 byte per i dati, arrotondati per difetto al multiplo di 8: 40 byte = 5 blocchi. Primo frammento: blocchi 0–4 (Offset=0, MF=1); secondo frammento: blocchi 5–9, 40 byte (Offset=5, MF=0).
>> Nodo Y: con MTU 38 byte restano 18 byte, arrotondati a 16 byte = 2 blocchi. Il primo frammento (5 blocchi) viene diviso in pezzi da 2, 2 e 1 blocco con offset $0, 2, 4$: lunghezze $20+16=36$, $20+16=36$ e $20+8=28$ byte. Poiché il frammento di partenza aveva MF=1 (non era l'ultimo del datagramma), tutti e tre i pezzi hanno MF=1.

---
## Slide 16 – Un esempio più realistico

![[RT01-s016-1.png|600]]

- Terminale sorgente: pacchetto in uscita su rete WiFi aperta che può avere MTU = 2304 byte
	- 20 byte + 2284 byte = 285.5 blocchi da 64 bit – Offset=0, MF=0
- Router X: pacchetto in uscita su rete Ethernet: MTU = 1500 byte
	- 1480 byte = 185 blocchi – Offset=0, MF=1
	- 804 byte = 100.5 blocchi – Offset=185, MF=0
- Router Y: pacchetto in uscita su tunnel VXLAN: MTU = 1450 byte
	- 1424 byte = 178 blocchi – Offset=0, MF=1
	- 56 byte = 7 blocchi – Offset=178, MF=1
- Router Z: pacchetto in uscita su Ethernet: MTU = 1500 byte
	- 804 byte = 100.5 blocchi – Offset=185, MF=0

>> Verifica dei conti: $1500-20 = 1480 = 185 \cdot 8$ (già multiplo di 8); $2284 - 1480 = 804$ byte, che sta nell'ultimo frammento e quindi può non essere multiplo di 8.
>> Router Y: $1450 - 20 = 1430$, arrotondato per difetto a multiplo di 8 dà $1424 = 178 \cdot 8$. Il resto del primo frammento è $1480 - 1424 = 56 = 7 \cdot 8$ byte, con offset $0 + 178 = 178$ e MF=1 (perché il frammento originale non era l'ultimo). Il frammento con 804 byte di dati (824 byte totali) passa invece senza essere toccato, avendo lunghezza < 1500.

---
## Slide 17 – Primo collegamento: cattura

![[RT01-s017-1.png|600]]

- 192.168.111.10 → **MTU = 2304 byte** → router → MTU = 1500 byte → router → MTU = 1450 byte → 172.16.8.5

```
Frame 1: 2318 bytes on wire (18544 bits), 2318 bytes captured
Ethernet II, Src: 26:4b:3d:c7:6a:0b, Dst: 6e:3e:c2...
Internet Protocol Version 4, Src: 192.168.111.10, Dst: 172.16.8.5
  0100 .... = Version: 4
  .... 0101 = Header Length: 20 bytes (5)
  Differentiated Services Field: 0x00 (DSCP: CS0, ECN: Not-ECT)
  Total Length: 2304
  Identification: 0x2ee7 (10983)
  000. .... = Flags: 0x0
    0... .... = Reserved bit: Not set
    .0.. .... = Don't fragment: Not set
    ..0. .... = More fragments: Not set
  ...0 0000 0000 0000 = Fragment Offset: 0
  Time to Live: 64
  Protocol: ICMP (1)
  Header Checksum: 0x634e [correct]
  [Header checksum status: Good]
  [Calculated Checksum: 0x634e]
  Source Address: 192.168.111.10
  Destination Address: 172.16.8.5
Data (2284 bytes)
```

>> È un ping (ICMP) da 2284 byte di dati IP: il datagramma da 2304 byte esce intero dalla sorgente, con MF=0 e offset 0. Il frame catturato è lungo $2304 + 14 = 2318$ byte (intestazione Ethernet inclusa).

---
## Slide 18 – Secondo collegamento: cattura

![[RT01-s018-1.png|600]]

- 192.168.111.10 → MTU = 2304 byte → router → **MTU = 1500 byte** → router → MTU = 1450 byte → 172.16.8.5

```
Frame 1: 1514 bytes on wire (12112 bits)
Ethernet II, Src: FujitsuT_5c:3d:54 (90:1b:0e...)
Internet Protocol Version 4, Src: 192.168.111.10
  Total Length: 1500
  Identification: 0x43ec (17388)
  001. .... = Flags: 0x1, More fragments
    ..1. .... = More fragments: Set
  ...0 0000 0000 0000 = Fragment Offset: 0
  Time to Live: 63
  Protocol: ICMP (1)
  Header Checksum: 0x2e6d [correct]
Data (1480 bytes)

Frame 2: 838 bytes on wire (6704 bits)
Ethernet II, Src: FujitsuT_5c:3d:54 (90:1b:0e...)
Internet Protocol Version 4, Src: 192.168.111.10
  Total Length: 824
  Identification: 0x43ec (17388)
  000. .... = Flags: 0x0
    ..0. .... = More fragments: Not set
  ...0 0000 1011 1001 = Fragment Offset: 1480
  Time to Live: 63
  Protocol: ICMP (1)
  Header Checksum: 0x5058 [correct]
Data (804 bytes)
```

$$1500 + 824 = 2324 = 2304 + 20$$

>> Wireshark mostra il Fragment Offset già moltiplicato per 8 (in byte): il valore binario nel campo è $10111001_2 = 185$ e $185 \cdot 8 = 1480$.
>> Entrambi i frammenti hanno la stessa Identification (0x43ec) e TTL decrementato a 63; checksum diversi perché le intestazioni differiscono. La somma delle lunghezze supera l'originale di 20 byte perché c'è un'intestazione IP in più.

---
## Slide 19 – Terzo collegamento: cattura

![[RT01-s019-1.png|600]]

- 192.168.111.10 → MTU = 2304 byte → router → MTU = 1500 byte → router → **MTU = 1450 byte** → 172.16.8.5

```
Frame 1: 1458 bytes on wire (11664 bits)
Ethernet II, Src: Cisco_3e:fb:71 (00:24:97:...)
Internet Protocol Version 4, Src: 192.168.111.10
  Total Length: 1444
  Identification: 0x73d3 (29651)
  001. .... = Flags: 0x1, More fragments
  ...0 0000 0000 0000 = Fragment Offset: 0
  Time to Live: 62
  Header Checksum: 0xffbd [correct]
Data (1424 bytes)

Frame 2: 90 bytes on wire
  Total Length: 76
  Identification: 0x73d3 (29651)
  001. .... = Flags: 0x1, More fragments
  ...0 0000 1011 0010 = Fragment Offset: 1424
  Time to Live: 62
  Header Checksum: 0x0464 [correct]
Data (56 bytes)

Frame 3: 838 bytes on wire (6704 bits)
  Total Length: 824
  Identification: 0x73d3 (29651)
  000. .... = Flags: 0x0
  ...0 0000 1011 1001 = Fragment Offset: 1480
  Time to Live: 62
  Header Checksum: 0x2171 [correct]
Data (804 bytes)
```

$$1444 + 76 + 824 = 2344 = 2304 + 20 + 20$$

>> Il primo frammento da 1500 byte è stato riframmentato in 1444 byte (1424 di dati, offset 0) e 76 byte (56 di dati, offset $178 \cdot 8 = 1424$, MF ancora a 1); il frammento da 824 byte passa invariato (a parte TTL e checksum). Ora ci sono tre intestazioni IP al posto di una, da cui i +40 byte.
>> L'Identification (0x73d3) è diversa da quella della slide precedente perché si tratta di un'altra esecuzione del ping, ma è uguale in tutti e tre i frammenti.

---
## Slide 20 – In senso opposto

![[RT01-s020-1.png|600]]

- 192.168.111.10 ← **MTU = 2304 byte** ← router ← MTU = 1500 byte ← router ← MTU = 1450 byte ← 172.16.8.5

```
Frame 2: 1458 bytes on wire (11664 bits)
Ethernet II, Src: 6e:3e:c2:b9:35:54
Internet Protocol Version 4, Src: 172.16.8.5, Dst: 192.168.111.10
  Total Length: 1444
  Identification: 0x91fd (37373)
  001. .... = Flags: 0x1, More fragments
  ...0 0000 0000 0000 = Fragment Offset: 0
  Time to Live: 62
  Protocol: ICMP (1)
  Header Checksum: 0xe193 [correct]
Data (1424 bytes)

Frame 3: 894 bytes on wire (7152 bits)
Ethernet II, Src: 6e:3e:c2:b9:35:54
Internet Protocol Version 4, Src: 172.16.8.5, Dst: 192.168.111.10
  Total Length: 880
  Identification: 0x91fd (37373)
  000. .... = Flags: 0x0
  ...0 0000 1011 0010 = Fragment Offset: 1424
  Time to Live: 62
  Protocol: ICMP (1)
  Header Checksum: 0x0316 [correct]
Data (860 bytes)
```

>> La risposta (echo reply da 2284 byte di dati) viene frammentata direttamente dalla sorgente 172.16.8.5, che si affaccia sul link con MTU 1450: bastano due frammenti ($1424 + 860 = 2284$), che poi attraversano senza modifiche i link con MTU maggiore. Catturati sul primo link (lato 192.168.111.10) hanno TTL 62: la frammentazione dipende dal percorso e dal verso, e i frammenti non vengono riassemblati dai router intermedi.

---
## Slide 21 – Il riassemblamento

![[RT01-s021-1.png|500]]

- Il protocollo IP non controlla il canale: i datagrammi possono arrivare corretti ma fuori sequenza e/o in tempi diversi
- Come faccio a ricomporli correttamente?

Dati «IP sorgente – Ip destinazione - Protocol – Identification»
Si utilizza il Fragment offset per tutti i segmenti intermedi (MF=1)
Quando arriva l'ultimo frammento (MF=0) si controlla di avere la sequenza di offset completa

>> La quaterna (sorgente, destinazione, protocollo, identification) identifica univocamente il datagramma originale a cui appartengono i frammenti. Il ricevente ordina i frammenti per offset e verifica che non ci siano "buchi": il frammento che parte all'offset $O$ con $L$ byte di dati deve essere seguito da uno con offset $O + L/8$.
>> Il riassemblaggio avviene con un timer: se non arrivano tutti i frammenti entro un tempo limite, quelli ricevuti vengono scartati e l'intero datagramma è perso (basta perdere un frammento per perdere tutto).

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 5 – Riassemblamento (RFC 791)|slide 5–8: l'algoritmo di riassemblamento della RFC 791 (BUFID, bit table, timer)]]
>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 9 – RFC 815|slide 9–12: l'algoritmo migliorato della RFC 815 con la lista dei "buchi"]]

---
## Slide 22 – Da ricordare

Le principali funzionalità garantite dalle PCI dell'IPv4

**Indirizzamento**
	IP sorgente e destinazione

**Frammentazione**
	Permette di adattare la dimensione dei datagrammi durante il percorso

**Controllo**
	Mitiga possibili malfunzionamenti di rete determinando la scomparsa di pacchetti che non stanno raggiungendo la destinazione

---
## Slide 23 – Applicazioni residenti in calcolatori a grande distanza

Applicazioni residenti in calcolatori a grande distanza dialogano fra loro
Normalmente non esiste un collegamento «diretto» fra sorgente e destinazione

***Come può un'applicazione raggiungere la destinazione finale comunicando attraversando tecnologie eterogenee senza conoscerle a priori?***

---
## Slide 24 – In termini più tecnici

- La rete Internet è una rete a commutazione di pacchetto
	- Oggi un sistema molto complesso
- In generale esistono più modi per raggiungere una destinazione da una certa sorgente
- Chi decide quale percorso debbano seguire i pacchetti e come lo fa?
- Si decide pacchetto per pacchetto o per flusso di dati applicativi?
- …

>> In IP la decisione è presa hop-by-hop: ogni router, per ogni pacchetto, sceglie solo il prossimo salto consultando la propria tabella di instradamento in base all'indirizzo di destinazione. Le tabelle sono costruite a parte (configurazione statica o protocolli di routing).

---
## Slide 25 – Come funziona Internet

- Internet è una grande "rete di reti"
- La componente elementare è la **network IP**
	- Ogni network IP è una sorta di isola
		- I calcolatori che fungono da nodi terminali all'interno di una network IP sono detti **host**
	- Le isole sono interconnesse da apparati che svolgono la funzione di "collegamento"
		- Si tratta di calcolatori specializzati detti **router** o **gateway**

---
## Slide 26 – Internet: reti di reti

![[RT01-s026-1.png|500]]

- Host
- Network IP (×4)
- Tante Network IP isolate

---
## Slide 27 – La tecnologia

- Ogni network IP può essere implementata con una **tecnologia specifica**
- Esempio
	- Wi-Fi : Network realizzata con tecnologia wireless in area locale
	- ADSL, xDSL, PON: Network realizzata con tecnologia a media distanza via cavo o fibra ottica utilizzando uno specifico fornitore di servizio pubblico
	- Ethernet: Network realizzata con tecnologia a breve distanza via cavo privata in area locale
	- 4G/5G: Network realizzata con tecnologia radio cellulare a media distanza tramite infrastruttura di uno specifico fornitore di servizio pubblico

---
## Slide 28 – La network IP

- In termini infrastrutturali:
	- I calcolatori di una network IP sono connessi dalla medesima infrastruttura di rete fisica (livelli 1 e 2)
- In termini funzionali:
	- Tutti gli host appartenenti alla medesima network IP sono in grado di scambiarsi pacchetti direttamente grazie alla tecnologia con cui essa viene implementata

**Fra due host della stessa network esiste un canale di comunicazione diretto**

>> "Direttamente" significa senza passare per un router: il pacchetto IP viene incapsulato in un frame di livello 2 indirizzato all'host destinatario stesso (ad es. al suo indirizzo MAC, ottenuto con ARP).

---
## Slide 29 – Internet: reti di reti

![[RT01-s029-1.png|500]]

- **SI**: comunicazione fra due host della stessa Network IP
- **NO**: comunicazione fra host di Network IP diverse
- Tante Network IP: isole fra loro isolate

---
## Slide 30 – Interconnettere le isole

- Per far parlare tra loro le network IP è necessario che
	- Vi siano dei collegamenti fra le network stesse, spesso realizzati con tecnologie diverse da quelle utilizzate sulla singola network
	- Vi siano degli apparati che permettono di usare questi collegamenti nel modo opportuno
	- Sia possibile scegliere il giusto collegamento verso la network che si vuole raggiungere

>> I tre requisiti corrispondono a: collegamenti fisici (link), apparati di commutazione (router) e funzione di instradamento (routing), cioè la scelta del percorso.

---
## Slide 31 – I router

![[RT01-s031-1.png|550]]

Collegamento fra router:
- Può essere una tecnologia simile a quella delle network oppure molto diversa

Gateway o Router (i ponti fra le isole):
- Nodo di rete che interconnette due network IP
- Deve poter parlare diverse tecnologie specifiche
- Ha funzioni dal livello 1 al livello 3 OSI

>> Il router termina i livelli 1 e 2 su ciascuna interfaccia (può avere un'interfaccia Ethernet, una in fibra, una radio, ecc.), estrae il datagramma IP e lo reincapsula nel formato di livello 2 dell'interfaccia di uscita: è per questo che può interconnettere tecnologie diverse.

---
## Slide 32 – Il percorso end-to-end

![[RT01-s032-1.png|500]]

>> Il percorso tratteggiato mostra come un pacchetto va dall'host sorgente all'host destinazione attraversando una sequenza di network IP e router: ogni router riceve il pacchetto da una network e lo inoltra sulla successiva.

---
## Slide 33 – Percorsi alternativi

![[RT01-s033-1.png|500]]

>> Nella rete esistono più percorsi fra la stessa coppia sorgente-destinazione (rosso e verde): la scelta di quale usare è compito dell'instradamento, e la presenza di alternative permette anche di aggirare eventuali guasti.

---
## Slide 34 – Le network fra i gateway

- Per uniformità consideriamo i collegamenti fra i router come network (in molti casi con solamente due calcolatori connessi)
- Ne consegue che quindi un gateway è un calcolatore:
	- Connesso a più di una network IP
	- Capace di ricevere un pacchetto da una network e ritrasmetterlo su un'altra (forwarding)

>> Un collegamento punto-punto fra due router è quindi una network IP con due soli host (le due interfacce dei router): in IPv4 si usano spesso subnet /30 (2 indirizzi utilizzabili) o /31 per questo scopo.

---
## Slide 35 – Le network fra i gateway

![[RT01-s035-1.png|500]]

- Network IP

>> Tratteggiate in rosso sono evidenziate le network costituite dai collegamenti fra i router, che si aggiungono alle network degli host.

---
## Slide 36 – Le network fra i gateway

![[RT01-s036-1.png|600]]

- Forwarding
- Network IP (x4)

>> Il *forwarding* è l'operazione del singolo router: riceve un pacchetto su un'interfaccia e lo rilancia su un'altra, verso la network successiva. Il percorso completo è una sequenza di questi inoltri.

---
## Slide 37 – Cosa fa IP

- La tecnologia IP è agnostica rispetto alla tecnologia con cui sono realizzate le network
	- Il protocollo IP è concepito per lavorare indifferentemente su tecnologie diverse
	- Ha quindi una funzione puramente logica disgiunta dall'implementazione fisica
- **L'obiettivo di IP è quello di rendere possibile il dialogo fra network a prescindere dalla loro implementazione e localizzazione**

>> Esempio: lo stesso datagramma IP può passare da una LAN Ethernet a un collegamento Wi-Fi e poi a una fibra ottica. A ogni passaggio cambia la trama di livello 2 che lo trasporta, mentre il datagramma IP resta lo stesso (a parte campi come il TTL).

---
## Slide 38 – La domanda cruciale

![[RT01-s038-1.png|600]]

- Fumetto: "Ho un pacchetto da trasmettere. Deve andare sulla mia network oppure devo usare un gateway?"
- Network IP (x3)

---
## Slide 39 – La risposta

- Ogni nodo di Internet ha una base dati di destinazioni possibili
- Quando deve inviare un datagramma
	- Parte dall'indirizzo IP di destinazione
	- Legge la base dati
	- Decide quale azione intraprendere
- **La tecnologia della propria network può essere utilizzata:**
	- **Per raggiungere la destinazione finale**
	- **Per raggiungere il primo gateway da attraversare**

>> La base dati di cui si parla è la *tabella di instradamento* (routing table), che vedremo nelle slide successive. Ce l'hanno anche i semplici host, non solo i router.

---
## Slide 40 – L'instradamento IP

![[RT01-s040-1.png|600]]

- Il singolo calcolatore terminale sceglie un router come gateway verso la network IP di destinazione: **invia** il datagramma verso il router
- Il router decide in che direzione inviare il datagramma: **instrada** il datagramma
- Il singolo salto viene solitamente detto **hop**
- Network IP (x4)

---
## Slide 41 – Da ricordare

Internet rete di reti

**Network IP**
- Componente base di Internet
- Gruppo di calcolatori che possono comunicare tra loro con una tecnologia omogenea

**Router o gateway**
- Calcolatore specializzato connesso a più di una network
- Capace di ricevere un pacchetto da una network e inviarlo su un'altra

---
## Slide 42 – Come fa un calcolatore a sapere a quale network appartiene?

***Come fa un calcolatore a sapere a quale network appartiene?***

---
## Slide 43 – Semantica dell'indirizzo IP

- L'indirizzo IP è logicamente suddiviso in due parti:
	- **Network (Net) ID**
		- Prefisso che identifica la **Network IP** a cui appartiene l'indirizzo
		- Tutti gli indirizzi di una medesima **Network IP** hanno il medesimo *Network ID*
	- **Host ID**
		- Identifica l'host (l'interfaccia) vero e proprio di una certa Network
- Per Net e Host ID vengono utilizzati bit contigui
	- Net ID occupa la parte *sinistra* dell'indirizzo
	- Host ID occupa la parte *destra* dell'indirizzo

>> Un indirizzo IP identifica un'*interfaccia*, non una macchina: un router con 4 interfacce ha 4 indirizzi IP, uno per ciascuna network a cui è collegato.

---
## Slide 44 – Come si distingue net-ID da host-ID?

- Si usa la netmask
	- Al numero IP viene associata una **maschera** di 32 bit

![[RT01-s044-1.png|450]]

```
            137.204.191.85
10001001.11001100.10111111.01010101
11111111.11111111.11111111.11000000
|<-------------- Net-ID -------->|Host-ID|
```

- I bit a 1 della netmask identificano i bit dell'indirizzo IP che fanno parte del net-ID
- La netmask si può rappresentare
	- In notazione dotted-decimal
		- `11111111.11111111.11111111.11000000 = 255.255.255.192`
	- In notazione esadecimale
		- `11111111.11111111.11111111.11000000 = ff.ff.ff.c0`
	- Utilizzando la notazione abbreviata
		- `11111111.11111111.11111111.11000000 = /26`

>> Il "/26" è semplicemente il numero di bit a 1 nella netmask: $8+8+8+2 = 26$. Restano quindi $32-26 = 6$ bit per l'Host-ID.

---
## Slide 45 – Identifichiamo la network

- Indirizzo IP 137.204.191.85 con netmask 255.255.255.192
- In binario
	- 137 -> 10001001
	- 204 -> 11001100
	- 191 -> 10111111
	- 85 -> 01010101
	- 255 -> 11111111
	- 192 -> 11000000
- Indirizzo IP = 10001001 11001100 10111111 01010101
- Netmask = 11111111 11111111 11111111 11000000
- Net-ID = 10001001 11001100 10111111 01
- Host-ID = 010101
- È scomodo usare sequenze di bit di lunghezza variabile
	- Diventa complicato scriverle in forma decimale

>> In pratica il Net-ID si ottiene con un AND bit a bit tra indirizzo e netmask: $85 \text{ AND } 192 = 01010101 \text{ AND } 11000000 = 01000000 = 64$. L'Host-ID è il resto: $85 - 64 = 21$ ($010101_2 = 21$).

---
## Slide 46 – Il network ID

- Si mantiene il riferimento ai 32 bit
- Normalmente si indica l'intera network utilizzando il Net-ID opportuno e ponendo a 0 l'Host-ID
- Quindi nell'esempio l'identificativo della network è:

	10001001 11001100 10111111 01000000
	137.204.191.64

- Se 137.204.191.64 viene usato come «nome» della network *non si può usare per gli host*

---
## Slide 47 – Il broadcast

- In alcuni casi può essere utile avere modo di comunicare in contemporanea con tutti i calcolatori della propria network
	- Questo significa inviare un pacchetto IP con un indirizzo di destinazione dedicato a questo scopo (che non può essere anche indirizzo di un host specifico)
- Si definisce indirizzo di broadcast l'indirizzo che ha l'host-ID composto da soli 1
- Nell'esempio

	**137.204.191.127** (ultimo byte: 01111111)

>> Ultimo byte: i primi 2 bit (01) appartengono al Net-ID, gli ultimi 6 (111111) all'Host-ID tutto a 1, quindi $64 + 63 = 127$. Gli host utilizzabili della network 137.204.191.64/26 vanno da .65 a .126.

---
## Slide 48 – Esercizio

- Identificare l'intervallo dei numeri IP disponibili per gli host delle seguenti network
- 192.168.8.0 netmask 255.255.252.0
	- Da 192.168.8.1 a 192.168.11.254
	- Numero totale $2^{10} - 2 = 1022$
- 10.0.0.128 netmask 255.255.255.128
	- Da 10.0.0.129 a 10.0.0.254
	- Numero totale $2^{7} - 2 = 126$

>> Procedimento per il primo caso: $252 = 11111100_2$, quindi la netmask ha $8+8+6 = 22$ bit a 1 e restano $H = 10$ bit per l'host. Nel terzo byte variano gli ultimi 2 bit, quindi va da 8 a $8+3 = 11$. Network = 192.168.8.0, broadcast = 192.168.11.255, e gli host stanno nel mezzo.
>>
>> Secondo caso: $128 = 10000000_2$, quindi è un /25 con $H = 7$. Network = 10.0.0.128, broadcast = $128 + 127 = 255$, cioè 10.0.0.255.

---
## Slide 49 – Esempio: Università di Bologna

- **Net ID = 137.204**
	- La network corrispondente ha indirizzo **137.204**.*0.0*
	- Tutti i numeri IP dell'Università di Bologna hanno il medesimo prefisso
- **Host ID**
	- Qualunque combinazione dei rimanenti 16 bit
		- Escluso 137.204.0.0 e 137.204.255.255
	- Server web UniBO
		- 137.204.24.35
	- Server web del DEIS
		- 137.204.24.40
	- Server web DEISNet
		- 137.204.57.85

>> Con un prefisso /16 restano 16 bit per gli host, quindi $2^{16} - 2 = 65534$ indirizzi assegnabili.

---
## Slide 50 – Da ricordare

La **netmask** definisce il **Net-ID** che avrà lunghezza N

Rimangono per l'Host-ID $H = 32 - N$ bit
Quindi sono disponibili $I = 2^H$ indirizzi IP

Di questi due non possono essere usati poiché servono per una diversa semantica
- Host-ID di tutti 0 viene utilizzato per indicare la network
- Host-ID di tutti 1 viene utilizzato come indirizzo broadcast

Quindi gli indirizzi effettivamente disponibili per le tipiche network IPv4 sono

$$I' = I - 2 = 2^H - 2$$

>> Casi particolari: con un /31 ($H=1$) la formula darebbe 0 host utilizzabili, ma il RFC 3021 permette di usare entrambi gli indirizzi sui collegamenti punto-punto. Un /32 ($H=0$) identifica un singolo host.

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 17 – La scelta della netmask|slide 17: tabella netmask → numero di host e di sottoreti, applicata a un esercizio]]

---
## Slide 51 – Il singolo host come decide in che modo e dove inviare il pacchetto?

***Il singolo host come decide in che modo e dove inviare il pacchetto?***

---
## Slide 52 – Come inviare il pacchetto

- La domanda va fatta partendo dall'indirizzo IP di destinazione
- Se **appartiene** alla mia stessa network deve avere il mio stesso Network-ID
	- In questo caso avviene una consegna o instradamento **diretto (direct delivery)**
- Se **non appartiene** alla mia network avrà un Network-ID qualunque
	- In questo caso avviene una consegna o instradamento **indiretto (indirect delivery)**

---
## Slide 53 – Schematicamente

![[RT01-s053-1.png|550]]

- A quale network appartengo?
	- IP Address + Netmask → Mio Network ID
- Devo inviare un datagramma
	- IP Destination + Netmask → Destination Network ID = Mio Network ID ?
- Se **SI** apparteniamo alla stessa Network
- se **NO** apparteniamo a network diverse

>> Nel confronto l'host usa la *propria* netmask anche sull'indirizzo di destinazione: calcola $(IP_{dest} \text{ AND } N_{mia}) = (IP_{mio} \text{ AND } N_{mia})$?
>>
>> Esempio: io sono 137.204.191.85/26. Per la destinazione 137.204.191.100 ottengo $100 \text{ AND } 192 = 64$, quindi stessa network e consegna diretta. Per 137.204.191.130 ottengo $130 \text{ AND } 192 = 128 \neq 64$, quindi consegna indiretta.

---
## Slide 54 – Come inviare il pacchetto

![[RT01-s054-1.png|600]]

- Network IP
- Indirect delivery
- Direct delivery

---
## Slide 55 – Instradamento diretto e indiretto

- **Direct delivery :**
	- IP sorgente e IP destinatario sono sulla stessa network
	- L'host sorgente spedisce il datagramma direttamente al destinatario
- **Indirect delivery :**
	- IP sorgente e IP destinatario non sono sulla stessa network
	- L'host sorgente invia il datagramma ad un router intermedio
- **Routing** : scelta del percorso su cui inviare i dati
	- i router formano struttura interconnessa e cooperante:
		- i datagrammi passano dall'uno all'altro finché raggiungono quello che può consegnarli direttamente al destinatario

>> Anche la consegna indiretta termina sempre con una consegna diretta: l'ultimo router è collegato alla network del destinatario e gli consegna il pacchetto direttamente.

---
## Slide 56 – Direct Delivery

![[RT01-s056-1.png|650]]

- HOST1, HOST2, HOST3, ROUTER1 (ETHERNET)
- MAN – WAN
- ROUTER2, HOST4

>> HOST1 e HOST3 sono sulla stessa Ethernet, quindi il datagramma viaggia direttamente dall'uno all'altro senza passare da ROUTER1.

---
## Slide 57 – Indirect Delivery

![[RT01-s057-1.png|650]]

- HOST1, HOST2, HOST3, ROUTER1 (ETHERNET)
- MAN – WAN
- ROUTER2, HOST4

>> HOST4 è su un'altra network. HOST1 consegna quindi il datagramma a ROUTER1 (freccia rossa, una consegna diretta a livello Ethernet). Da lì il pacchetto attraversa la MAN/WAN fino a ROUTER2, che lo consegna direttamente a HOST4 (freccia blu).

---
## Slide 58 – Da ricordare

**Instradamento diretto**: invio il pacchetto ad un host della mia network

**Instradamento indiretto**: il pacchetto è destinato ad un host di un'altra network, invio il pacchetto ad un gateway

---
## Slide 59 – Come posso sapere quale gateway usare per la consegna indiretta?

***Come posso sapere quale gateway usare per la consegna indiretta?***

---
## Slide 60 – La tabella di instradamento IP

- Base dati in forma di tabella
	- Righe (dette anche route, rotte, entry, record)
		- Insieme di informazioni relative alla singola informazione di instradamento
	- Colonne (dette campi)
		- Informazioni del medesimo tipo relative a diverse opzioni di instradamento
- Formato della tabella
	- Dipende dal sistema operativo e dall'implementazione
		- Le informazioni sono le medesime
		- Il modo di presentarle ed elaborarle può essere diverso

>> Esempi pratici: su Linux la tabella si vede con `ip route` (o il vecchio `route -n`), su macOS con `netstat -rn`, su Windows con `route print`.

---
## Slide 61 – Route

- Tipici campi della singola rotta sono:
	- **Prefix(P):** Combinazione di indirizzo e netmask in notazione CIDR, di fatto permette di ricavare il net-ID (prefisso di rete)
	- **Destinazione (D):** numero IP valido
		- Può essere un indirizzo di network o di host
	- **Netmask (N):** maschera di rete valida
		- Identifica il Net-ID
	- **Gateway (G)**: numero IP a cui consegnare il datagramma
		- Indica il tipo di consegna da effettuare
	- **Interfaccia di rete (IF)**: interfaccia di rete da utilizzare (loopback compreso) per la consegna del datagramma
		- Seleziona il dispositivo hardware da utilizzare per l'invio del datagramma
	- **Metrica (M)**: specifica il "costo" di quel particolare route
		- Possono esistere più route verso una medesima destinazione

>> Il campo Gateway distingue i due tipi di consegna. Se contiene l'indirizzo di un router, la consegna è indiretta. Se indica "On Link" (o 0.0.0.0, o l'indirizzo dell'interfaccia stessa), la destinazione è raggiungibile direttamente e la consegna è diretta.

---
## Slide 62 – Prefisso IP

- Sequenza contigua dei bit più significativi di un indirizzo IP che identifica un insieme di indirizzi
	- Una sequenza di 32 bit qualunque è un indirizzo puro
	- Una sequenza di 32 bit a cui associo una netmask che definisce il net-ID diventa un prefisso
- La notazione **Classless Inter-domain Routing (CIDR)** definisce un modo compatto di scrivere networkID e netmask e definire quindi un prefisso
	- Indirizzo di network / numero dei bit a 1 nella netmask
		- 192.168.8.0 netmask 255.255.252.0 diventa **192.168.8.0/22**
		- 10.0.0.128 netmask 255.255.255.128 diventa **10.0.0.128/25**

---
## Slide 63 – La tabella

![[RT01-s063-1.png|550]]

>> Lettura: le quattro reti /24 e il collegamento punto-punto /30 sono direttamente connessi ("On Link"). Tutto il resto segue la *default route* 0.0.0.0/0 verso il next hop 192.168.10.1, che sta proprio sulla /30 raggiungibile via ppp0. Da notare che il next hop di una rotta indiretta deve essere a sua volta raggiungibile direttamente.

---
## Slide 64 – Lettura della tabella

- In linea di principio
	- Le righe della tabella sono ordinate
	- L'ordinamento è fatto in funzione del numero di «1» presenti nella netmask
- La lettura della tabella avviene partendo dalla riga in cui la NETMASK contiene il maggior numero di «1» e si procede verso la riga che contiene il maggior numero di «0»
	- Non è detto che la lettura sia implementata effettivamente in questo modo ma logicamente questo è quello che deve succedere.

>> Nei router reali la ricerca usa strutture dati efficienti (trie/radix tree, TCAM hardware) che trovano direttamente il prefisso più lungo, senza scorrere la tabella riga per riga. Il risultato è identico.

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 41 – Perché ordinare i route?|slide 41–43: perché le rotte vanno ordinate per netmask e come funzionano le eccezioni]]

---
## Slide 65 – Uso della tabella di instradamento

- Il singolo nodo riceve un datagramma:
	- Estrae dall'intestazione IP_D = indirizzo IP di destinazione
	- Seleziona la rotta per tale IP_D, confrontandolo con i record della tabella
		- Processo di "**table lookup**"
	- Se la rotta esiste
		- Esegue l'azione di instradamento suggerita dai campi Next Hop e Interface
	- Se la rotta non esiste genera un messaggio di errore
		- Tipicamente notificato all'indirizzo sorgente (ICMP - **Destination Unreachable**)

>> Se la tabella contiene una default route (0.0.0.0/0), una rotta esiste sempre, quindi l'errore "no route" si verifica solo sui nodi che non ne hanno una.

---
## Slide 66 – Table lookup

- La ricerca nella tabella avviene confrontando
	- **Indirizzo IP di destinazione IP_D del datagramma**
	- **Prefix (D) di ciascun route**
	- Utilizzando la **netmask (N)** del Prefix considerato
- La procedura viene detta di "longest prefix match"
	- IP_D **AND** N = R
		- Indirizzo di destinazione del datagramma e netmask di ciascuna riga
	- R = D ?
		- SI : la route viene selezionata e il processo termina
		- NO : si passa al route successivo
- Ricorda: i route vengono letti partendo da quello con il prefisso più lungo (netmask con maggior numero di «1»)

$$R = IP_D \wedge N \qquad R \stackrel{?}{=} D$$

>> Perché il più lungo? Un prefisso più lungo descrive un insieme di indirizzi più piccolo e quindi più specifico. Se una destinazione ricade in più prefissi (per esempio in un /24 e anche in 0.0.0.0/0), la rotta più specifica è quella più precisa. Il /0 corrisponde a qualunque indirizzo, per questo va controllato per ultimo.

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 33 – (senza titolo: inoltro in R2 verso 192.168.10.2)|slide 33–35: longest prefix match svolto passo passo nei router R1 e R2]]

---
## Slide 67 – Il lookup

![[RT01-s067-1.png|650]]

>> Lo schema riassume il confronto: si prende il Destination Address dall'header IP (32 bit) e lo si mette in AND con la netmask della riga (qui la /24 della riga 137.204.67.0). Il risultato si confronta con il prefisso della riga: se coincide la rotta è selezionata, altrimenti si passa alla riga successiva. Prima volta che esce Si si finisce.

---
## Slide 68 – Esempio di lookup – 1

![[RT01-s068-1.png|300]]

- Datagramma con IP dest. = 192.168.2.1
- Confronto prima con riga 3, poi con riga 2 e poi riga 1

```
192.168.002.001                       bitwise AND
255.255.255.252
192.168.002.000 == 192.168.002.000
```

- La riga 3 è quella giusta (prefisso di 30 bit)

>> Anche la riga 2 (e la riga 1) sarebbero soddisfatte da 192.168.2.1, ma vince la riga 3 perché ha il prefisso più lungo. Il /30 192.168.2.0 contiene gli indirizzi da .0 a .3.

---
s## Slide 69 – Esempio di lookup – 2

![[RT01-s069-1.png|300]]

|   | Prefix | Etc. |
|---|---|---|
| 1 | 0.0.0.0/0 | … |
| 2 | 192.168.2.0/24 | … |
| 3 | 192.168.2.0/30 | … |

- Datagramma con IP dest. = 192.168.2.21

```
192.168.002.021
255.255.255.252
192.168.002.020 != 192.168.002.00

192.168.002.021
255.255.255.000
192.168.002.000 == 192.168.002.000
```

- La riga 2 è quella giusta (network specific)

>> $21 = 00010101_2$ e $252 = 11111100_2$, quindi $21 \text{ AND } 252 = 00010100_2 = 20$. Il risultato 192.168.2.20 è diverso da 192.168.2.0, quindi la riga 3 non corrisponde (nella slide il secondo termine è troncato: si intende 192.168.002.000).

---
## Slide 70 – Esempio di lookup – 3

![[RT01-s070-1.png|300]]

|   | Prefix | Etc. |
|---|---|---|
| 1 | 0.0.0.0/0 | … |
| 2 | 192.168.2.0/24 | … |
| 3 | 192.168.2.0/30 | … |

- Datagramma con IP dest. = 80.48.15.170

```
080.048.015.170
255.255.255.252
080.048.015.168 != 192.168.002.000

080.048.015.170
255.255.255.000
080.048.015.000 != 192.168.002.000

080.048.015.170
000.000.000.000
000.000.000.000 == 000.000.000.000
```

- La riga 1 è quella giusta (default gateway)

>> $170 = 10101010_2$ e $170 \text{ AND } 252 = 10101000_2 = 168$. Con la netmask /0 il risultato è sempre 0.0.0.0, qualunque sia la destinazione. Per questo la default route corrisponde a tutto e viene scelta solo quando nessuna rotta più specifica corrisponde.

---
## Slide 71 – Qual è l'obiettivo della tabella

- Indicare all'host se fare consegna diretta o indiretta e, nel caso di consegna indiretta, specificare il gateway
- Queste informazioni vanno indicate nella tabella
- In realtà nelle tabelle compaiono due informazioni aggiuntive
	- Gateway
	- Interfaccia
- Perché due informazioni distinte?

>> Il gateway dice *a chi* consegnare il pacchetto a livello 2 (a un router o direttamente alla destinazione), l'interfaccia dice *da quale scheda di rete* farlo uscire. Sono informazioni indipendenti: la stessa interfaccia può servire sia per consegne dirette sia per consegne indirette (vedi slide seguenti).

---
## Slide 72 – L'invio del pacchetto

- Un calcolatore può avere una o più interfacce
- Ad ogni interfaccia deve essere attribuito un numero IP e quindi una network di appartenenza
	- La singola interfaccia permette di raggiungere una diversa network
- È quindi necessario indicare quale interfaccia si deve utilizzare per fare consegna diretta oppure per raggiungere un determinato gateway

---
## Slide 73 – Esempio classico

- Calcolatore con singola interfaccia connessa ad una determinata network
- La stessa interfaccia deve essere utilizzata in due modi diversi
	- Consegna diretta verso calcolatori della propria network
	- Consegna indiretta verso un gateway di collegamento
- Le due tipologie di consegna implicano due diverse operazioni
- Cosa fare dipende **dal contenuto del campo gateway** anche se si utilizza la medesima interfaccia

---
## Slide 74 – Uso del Gateway

- Il campo gateway della tabella di routing serve per specificare il tipo di instradamento
	- Instradamento diretto: la sintassi dipende dall'implementazione
		- Oggi in genere compare la scritta «on-link»
		- In passato
			- In Windows: instradamento diretto se gateway = IP locale
			- In Linux/Unix: instradamento diretto se gateway = 0.0.0.0,
	- Instradamento indiretto
		- Gateway = numero IP del router da contattare

![[RT01-s074-1.png|600]]

| Prefix | Gateway | Interface |
|---|---|---|
| 0.0.0.0/0 | 137.204.72.254 | en0 |
| 137.204.72.0/24 | On link | en0 |

Host 137.204.72.14 (interfaccia en0), host 137.204.72.35, router 137.204.72.254 verso Internet.

>> Entrambe le righe usano en0: la riga *on-link* (blu) porta a una consegna diretta verso gli host della 137.204.72.0/24 (es. .35), la riga di default (rossa) porta a una consegna indiretta tramite il router .254 per tutto il resto.

---
## Slide 75 – Da ricordare

Ogni calcolatore che usa IP ha una **tabella di instradamento**

La tabella di instradamento contiene tutte le informazioni per consegnare i pacchetti

Il **longest prefix match** è l'algoritmo che ci dice quali informazioni usare e che tipo di consegna implementare

---
## Slide 76 – Come si implementa la consegna diretta?

***Come si implementa la consegna diretta?***

---
## Slide 77 – Relazione Indirizzi L2 – Indirizzi IP

- Lo strato di rete conosce solamente l'indirizzo IP
- Gli host comunicano attraverso una **rete fisica** (ad es. LAN) che implementa il livello 2 e il livello 1
- Normalmente queste tecnologie hanno un indirizzo di livello 2 (L2 address)
	- È necessario per diverse ragioni che discuteremo più avanti

>> Esempio tipico: in Ethernet/Wi-Fi l'indirizzo L2 è il MAC address a 48 bit (es. `00-50-54-d9-ba-00`). Le schede di rete accettano le trame indirizzate al proprio MAC (o broadcast), quindi per consegnare un datagramma sulla LAN serve conoscere il MAC del next hop.

---
## Slide 78 – Problema?

- Come si ricava l'indirizzo fisico di B dato il suo indirizzo IP?
- Gli indirizzi fisici sono generalmente funzione della tecnologia e dell'hardware utilizzati
- Possono cambiare nel tempo se si sostituisce l'hardware e/o se si cambia la network
- **Devono essere associati ai numeri IP con un metodo dinamico**
	- **Il problema è generale ma può essere risolto in vari modi**
- **In IPv4 esiste un protocollo specifico detto Address Resolution Protocol (ARP)**

>> In IPv6 ARP non esiste: la stessa funzione è svolta dal Neighbor Discovery Protocol (messaggi ICMPv6 Neighbor Solicitation/Advertisement), che usa multicast invece del broadcast.

---
## Slide 79 – Architettura

![[RT01-s079-1.png|550]]

| Modello | Protocolli | Strato |
|---|---|---|
| Application | Applicazioni: e-mail, ftp, telnet, www… | Strati superiori |
| Transport | TCP, UDP | Strato 4 |
| Network | IP (con ICMP e ARP) | Strato 3 |
| Data Link | Non specificato (ad es. IEEE 802-Ethernet-X25-Aloha ecc.) | Strato 2 |
| Physical | Non specificato – Collegamento fisico | Strato 1 |

>> ARP è disegnato a cavallo tra strato 3 e strato 2: serve al livello di rete, ma i suoi messaggi viaggiano direttamente dentro le trame L2 (in Ethernet con EtherType 0x0806), non dentro datagrammi IP.

---
## Slide 80 – Address Resolution Protocol – ARP (RFC 826)

![[RT01-s080-1.png|600]]

- Il nodo sorgente invia un pacchetto broadcast (**ARP request**) contenente l'indirizzo IP del quale si cerca l'indirizzo L2
- Tutte le stazioni della rete locale leggono la trama broadcast

>> Nella figura 137.204.57.95 chiede "chi ha 137.204.57.10?". La request contiene anche IP e MAC del mittente, così il destinatario può già memorizzarli senza dover fare a sua volta una richiesta.

---
## Slide 81 – Address Resolution Protocol - ARP (3)

![[RT01-s081-1.png|600]]

- Il destinatario della richiesta (se esiste) risponde al mittente, inviando un messaggio (**ARP reply**) che contiene il proprio indirizzo L2
- Con questo messaggio l'host sorgente è in grado di associare l'appropriato indirizzo L2 all'IP di riferimento
- Ogni host mantiene una tabella (**cache ARP**) con le corrispondenze fra indirizzi L2 e indirizzi IP già note

>> La reply è unicast (inviata direttamente al MAC del richiedente). Le voci della cache hanno una scadenza (tipicamente da decine di secondi a pochi minuti) per gestire il caso di hardware sostituito o indirizzi riassegnati.

---
## Slide 82 – Comando ARP

**`arp -a`**

visualizza il contenuto della cache ARP con le diverse corrispondenze tra indirizzi IP e MAC

---
## Slide 83 – Esempio

![[RT01-s083-1.png|600]]

```
C:\>arp -a

Interface: 137.204.57.174 on Interface 0x1000003
  Internet Address      Physical Address      Type
  137.204.57.1          08-00-20-9c-9c-93     dynamic
  137.204.57.88         00-60-b0-78-e8-fd     dynamic
  137.204.57.180        00-10-4b-db-0a-3a     dynamic
  137.204.57.181        00-30-c1-d5-ee-9b     dynamic
  137.204.57.254        00-50-54-d9-ba-00     dynamic

C:\>ping -n 1 137.204.57.177

Pinging 137.204.57.177 with 32 bytes of data:

Reply from 137.204.57.177: bytes=32 time<10ms TTL=128

Ping statistics for 137.204.57.177:
    Packets: Sent = 1, Received = 1, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 0ms, Maximum =  0ms, Average =  0ms

C:\>arp -a

Interface: 137.204.57.174 on Interface 0x1000003
  Internet Address      Physical Address      Type
  137.204.57.1          08-00-20-9c-9c-93     dynamic
  137.204.57.177        00-b0-d0-ec-46-62     dynamic
  137.204.57.180        00-10-4b-db-0a-3a     dynamic
  137.204.57.181        00-30-c1-d5-ee-9b     dynamic
  137.204.57.254        00-50-54-d9-ba-00     dynamic

C:\>
```

>> Il ping verso 137.204.57.177 (stessa network, consegna diretta) ha richiesto prima una risoluzione ARP: dopo il comando la voce di .177 compare nella cache. La voce di .88, invece, è scaduta nel frattempo ed è sparita.

---
## Slide 84 – Direct Delivery

![[RT01-s084-1.png|600]]

Trama: | L2 ADDRESS: HOST3 | IP ADDRESS: HOST3 | DATI |

>> Consegna diretta: HOST1 e HOST3 sono sulla stessa Ethernet, quindi sia l'indirizzo L2 sia l'indirizzo IP di destinazione sono quelli di HOST3.

---
## Slide 85 – Indirect Delivery

![[RT01-s085-1.png|600]]

Trama: | L2 ADDRESS: ROUTER1 | IP ADDRESS: HOST4 | DATI |

>> Consegna indiretta: l'IP di destinazione resta quello del destinatario finale (HOST4), mentre l'indirizzo L2 è quello del next hop (ROUTER1), ottenuto con ARP sull'IP del gateway. Ad ogni salto l'intestazione L2 viene riscritta, quella IP no (a parte TTL e checksum).

---
## Slide 86 – Da mittente a destinatario

- C'è sempre una consegna diretta
- Può non esserci alcuna consegna indiretta
- Possono esserci una o più consegne indirette

![[RT01-s086-1.png|600]]

>> In figura: da HOST1 a HOST3 una sola consegna diretta (blu); da HOST1 a HOST4 una serie di consegne indirette (rosse, HOST1→ROUTER1→…→ROUTER2) e infine la consegna diretta ROUTER2→HOST4. L'ultimo salto è sempre diretto.

---
## Slide 87 – Esempio 1

- Un host connesso solamente ad una network con un solo gateway verso l'esterno

![[RT01-s087-1.png|600]]

Host 137.204.64.1 (interfaccia en0) sulla network 137.204.64.0/24; gateway 137.204.64.254 verso Internet.

| Prefix | Next Hop | Interface | Metric |
|---|---|---|---|
| 0.0.0.0/0 | 137.204.64.254 | en0 | 1 |
| 137.204.64.0/24 | On link | en0 | 1 |

---
## Slide 88 – Esempio 1

- 137.204.64.1 deve inviare un datagramma a 137.204.64.95
	- La destinazione è sulla sua stessa network
	- Quindi la destinazione è il next hop -> consegna diretta
	- Di conseguenza si
		- Invia il pacchetto direttamente su en0
		- Oppure avvia il protocollo arp su en0 per richiedere l'indirizzo L2 di 137.204.64.95 e poi gli invia il pacchetto
- 137.204.64.1 deve inviare un datagramma a 137.204.67.3
	- La destinazione è su una diversa network
	- È indicato come gateway 137.204.64.254
	- Di conseguenza
		- Invia il pacchetto al gateway direttamente su en0 a 137.204.64.254
		- Oppure avvia il protocollo arp su en0 per richiedere l'indirizzo L2 di 137.204.64.254 e poi gli invia il pacchetto

>> Longest prefix match: 137.204.64.95 corrisponde sia a 0.0.0.0/0 sia a 137.204.64.0/24, vince /24 (on link). 137.204.67.3 corrisponde solo a 0.0.0.0/0 (il terzo byte 67 ≠ 64), quindi next hop 137.204.64.254. "Direttamente" significa quando l'indirizzo L2 è già nella cache ARP; altrimenti prima si lancia ARP.

---
## Slide 89 – Esempio 2

- Un host connesso a due network con un solo gateway verso l'esterno

![[RT01-s089-1.png|600]]

Host con interfaccia en1 (10.0.0.1, network 10.0.0.0/24) e interfaccia en0 (137.204.64.1, network 137.204.64.0/24); gateway 137.204.64.254 verso Internet.

| Prefix | Next Hop | Interface | Metric |
|---|---|---|---|
| 0.0.0.0/0 | 137.204.64.254 | en0 | 1 |
| 137.204.64.0/24 | On link | en0 | 1 |
| 10.0.0.0/24 | On link | en1 | 1 |

---
## Slide 90 – Esempio 2

- Valgono gli stessi casi dell'esempio precedente, ma in più ve ne è un terzo
- 10.0.0.1 deve inviare un datagramma a 10.0.0.15
	- La destinazione è sulla sua stessa network
	- Quindi la destinazione è il next hop -> consegna diretta
	- Di conseguenza si
		- Invia il pacchetto direttamente su en1
		- Oppure avvia il protocollo arp su en1 per richiedere l'indirizzo L2 di 10.0.0.15 e poi gli invia il pacchetto

>> Qui l'interfaccia è l'informazione decisiva: la richiesta ARP per 10.0.0.15 va fatta su en1, perché su en0 nessuno risponderebbe.

---
## Slide 91 – Da ricordare

Per consegnare i datagrammi serve anche l'indirizzo L2 oltre all'indirizzo IP

La corrispondenza indirizzo L2-indirizzo IP si ottiene con il protocollo **arp**

Dalla tabella di instradamento ottengo:
- Su quale interfaccia lanciare arp e poi effettuare la consegna (diretta o indiretta)
- Se io sono il gateway (consegna diretta) oppure se ho bisogno di un gateway terzo (consegna indiretta)

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 33 – (senza titolo: inoltro in R2 verso 192.168.10.2)|slide 33–35: esempi di consegna diretta e indiretta decisi dalla tabella di instradamento]]

---
## Slide 92 – La domanda di oggi

- ***La logica descritta sopra è l'unica possibile?***
- ***La logica delle tabelle di instradamento è sempre stata così?***

---
## Slide 93 – Il singolo numero IP ha valore solamente se accompagnato dalla netmask

***Il singolo numero IP ha valore solamente se accompagnato dalla netmask***

***Questo complica la gestione delle tabelle***

***È sempre stato così?***

---
## Slide 94 – IP e netmask

- Il numero IP ha valore assoluto in rete
	- Un numero IP pubblico deve essere unico su Internet
	- I numeri IP sorgente e destinazione caratterizzano il datagramma in quanto parte della sua intestazione
- La netmask è relativa al nodo dove il datagramma viene elaborato
	- Non viene trasportata nell'intestazione del datagramma
	- Ai medesimi indirizzi possono corrispondere netmask diverse in nodi diversi (route aggregation)
- È sempre stato così?
	- NO: inizialmente la suddivisione net-ID e host-ID era assoluta

>> Esempio di route aggregation: dentro l'Università l'indirizzo 137.204.57.10 appartiene alla 137.204.57.0/24, mentre un router esterno lo vede semplicemente come parte di 137.204.0.0/16.

---
## Slide 95 – Classe delle reti

- Durante la fase iniziale di Internet furono definite diverse "**classi**" di network differenziate per **dimensione**
	- La parte iniziale del Net-ID differenzia le classi
		- 0 classe A
		- 10 classe B
		- 110 classe C
	- La definizione delle classi è standard e quindi nota a tutti
	- I router riconoscono la classe di una rete dai primi bit dell'indirizzo
		- Ricavano di conseguenza il Net-ID

---
## Slide 96 – Classi di indirizzi

![[RT01-s096-1.png|550]]

| Classe | Bit iniziali | Net-ID | Host-ID |
|---|---|---|---|
| Classe A | 0 | 8 bit | 24 bit |
| Classe B | 10 | 16 bit | 16 bit |
| Classe C | 110 | 24 bit | 8 bit |
| Classe D (multicast) | 1110 | – | – |
| Classe E (sperimentale) | 1111 | – | – |

(32 bit in totale)

- **Network ID**: identifica una rete IP
- **Host ID**: identifica i singoli calcolatori della rete

>> Dimensioni: classe A → $2^7=128$ reti da $2^{24}-2$ host ciascuna; classe B → $2^{14}=16384$ reti da $2^{16}-2=65534$ host; classe C → $2^{21}$ reti da $2^8-2=254$ host (si tolgono gli indirizzi con Host-ID tutto a 0 e tutto a 1). Le netmask implicite sono quindi /8, /16 e /24.

---
## Slide 97 – Intervalli di indirizzi

- Classe A: **da 0.0.0.0 a 127.255.255.255**
- Classe B: **da 128.0.0.0 a 191.255.255.255**
- Classe C: **da 192.0.0.0 a 223.255.255.255**
- Classe D: **da 224.0.0.0 a 239.255.255.255**
- Classe E: **da 240.0.0.0 a 255.255.255.255**
- Indirizzi riservati (RFC 3232)
	- **`0.0.0.0`** indica l'host corrente senza specificarne l'indirizzo
	- **`Host-ID tutto a 0`** viene usato per **indicare la rete**
	- **`Host-ID tutto a 1`** è l'indirizzo di **broadcast** per quella rete
	- **`0.x.y.z`** indica un certo Host-ID sulla rete corrente senza specificare il Net-ID
	- **`255.255.255.255`** è l'indirizzo di broadcast sul link (non instradato dai router)
	- **`127.x.y.z`** è il **loopback**, che redirige i datagrammi agli strati superiori dell'host corrente

>> Gli intervalli discendono dai bit iniziali: classe B inizia con 10, cioè primo byte tra 10000000 = 128 e 10111111 = 191. Esempio: 137.204.0.0 ha primo byte 137 → classe B, Net-ID 137.204.

---
## Slide 98 – Le sottoreti

- A un'amministrazione è assegnata una network
	- L'amministrazione potrebbe essere suddivisa in sotto-amministrazioni *logicamente separate*
	- Converrebbe "*frammentare*" la network in "***sub-network***" da assegnare alle sotto-amministrazioni
- Si decide localmente una sotto-ripartizione Net/Host ID **indipendente dalle classi**
- Si frammenta l'Host-ID in due parti:
	- la prima identifica la sottorete (**subnet-ID**)
	- la seconda identifica i singoli host della sottorete
- La ripartizione deve essere *locale* e *reversibile*
	- Tutta Internet vede comunque una certa network come un'entità unitaria

---
## Slide 99 – Subnetting

- La suddivisione è locale alla singola interfaccia
	- Deve essere configurabile localmente
- Si personalizza la ***Netmask***

![[RT01-s099-1.png|550]]

Primo byte, Secondo byte → Network ID; Terzo byte e primi 2 bit del Quarto byte → Subnetwork ID; ultimi 6 bit → Host ID

```
11111111 11111111  1111111111 000000
Netmask /26
```

>> Netmask /26 = 255.255.255.192. Su una classe B il subnet-ID è lungo $26-16=10$ bit → $2^{10}=1024$ sottoreti, ciascuna con $2^6-2=62$ host utilizzabili.

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 15 – Esempio|slide 15–20: esercizio completo di subnetting di una /24 in quattro /26 (stessa netmask /26 di questa slide)]]

---
## Slide 100 – Esempio: Università di Bologna

- Una network di classe B (137.204.0.0)
	- Numerose entità distinte nella stessa amministrazione
		- Facoltà, Dipartimenti, Centri di ricerca ecc.
	- Si suddivide la rete (network) in sottoreti (subnetwork)
- Il primo byte del Host-ID viene utilizzato come indirizzo di sottorete
	- Dalla network di classe B si ricavano 256 network della dimensione di una classe C

**Netmask = 255.255.255.0**

>> Es. 137.204.57.0/24 e 137.204.59.0/24 sono due sottoreti diverse (subnet-ID 57 e 59), ciascuna con 254 host utilizzabili.

---
## Slide 101 – Subnetting

- Subnet diverse sono di fatto Network diverse e quindi non comunicano
- È necessario un gateway

![[RT01-s101-1.png|600]]

Host delle subnet 137.204.59.0/24 (es. 137.204.59.4) e 137.204.57.0/24 (es. 137.204.57.18): comunicazione SI all'interno della stessa subnet, NO fra subnet diverse, anche se condividono lo stesso mezzo fisico.

>> Anche se i cavi sono collegati, un host della .59 che vuole raggiungere 137.204.57.18 trova la destinazione fuori dalla propria network (netmask /24) e quindi non tenta la consegna diretta: serve una riga di tabella con un gateway.

---
## Slide 102 – Subnetting

- Il Gateway permette instradamento indiretto fra le Subnetwork

![[RT01-s102-1.png|600]]

Subnet 137.204.59.0/24 e 137.204.57.0/24 collegate da un router: SI all'interno di ciascuna subnet, SI fra le subnet passando dal router.

---
## Slide 103 – CIDR

- Con la grande diffusione di Internet la rigida suddivisione nelle 3 classi rende l'instradamento poco flessibile e scalabile
- **CIDR** (RFC 4632) Classless InterDomain Routing
	- Si decide di rompere la logica delle classi nei router
	- La dimensione del Net-ID può essere qualunque
	- Le tabelle di routing devono **comprendere anche le Netmask**
	- Generalizzazione del subnetting/supernetting
		- reti IP definite da **Net-ID/Netmask**

---
## Slide 104 – Obiettivi del CIDR

- Allocazione di reti IP di dimensioni variabili
	- utilizzo più efficiente dello spazio degli indirizzi
- Accorpamento delle informazioni di routing
	- più reti contigue rappresentate da un'unica riga nelle tabelle di routing
- Miglioramento di due situazioni critiche
	- Limitatezza di reti di classe A e B
	- Crescita esplosiva delle dimensioni delle tabelle di routing

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 21 – Scelta di netmask diverse|slide 21–26: netmask di lunghezza diversa (VLSM) per non sprecare indirizzi, con link punto-punto /30]]

---
## Slide 105 – Supernetting

- Raggruppare più reti con indirizzi consecutivi
	- Indicarle nelle tabelle di routing con una sola entry accompagnata dalla opportuna Netmask
- Es. Un ente ha bisogno di circa 2000 indirizzi IP
	- una rete di classe B è troppo grande (64K indirizzi)
	- meglio 8 reti di classe C ($8 \times 256 = 2048$ indirizzi) dalla 194.24.0.0 alla 194.24.7.0
- **Supernetting**: si accorpano le 8 reti contigue in un'unica super-rete:
	- Identificativo: 194.24.0.0/21
	- Supernet mask: 255.255.248.0
	- Indirizzi: 194.24.0.1 – 194.24.7.254
	- Broadcast: 194.24.7.255

>> Perché /21: 8 reti = $2^3$, quindi si tolgono 3 bit dai 24 della classe C: $24-3=21$. Il terzo byte va da 0 = `00000000` a 7 = `00000111`: i primi 5 bit sono uguali, gli ultimi 3 variano. La maschera ha 21 uni: 255.255.`11111000`.0 = 255.255.248.0. Il broadcast ha tutti gli 11 bit di host a 1: 194.24.`00000111`.`11111111` = 194.24.7.255. Host utilizzabili: $2^{11}-2 = 2046$.
>>
>> L'accorpamento funziona solo perché i blocchi sono allineati: ad esempio 194.24.1.0–194.24.8.0 non sarebbero aggregabili in un unico prefisso.

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 36 – Analizziamo gli indirizzi delle 4 reti|slide 36–40: aggregazione delle quattro /24 in una /22 e semplificazione della tabella di R2]]

---
## Slide 106 – Supernetting

- Subnetting e Supernetting sono operazioni duali
	- Subnetting → **n** bit del Host-ID diventano parte del Net-ID
	- Supernetting → **n** bit del Net-ID diventano parte dell'Host-ID

![[RT01-s106-1.png]]

- Accorpamento di **N** reti IP (**$N = 2^n$**)
	- **contigue**:
		- 194.24.0.0/24 + 194.24.1.0/24 = 194.24.0.0/23
		- 194.24.0.0/24 + 194.24.2.0/24 = non contigue
	- **allineate** secondo i multipli di $2^n$
		- 194.24.0.0/24 + .1.0/24 + .2.0/24 + .3.0/24 = 194.24.0.0/22
		- 194.24.2.0/24 + .3.0/24 + .4.0/24 + .5.0/24 = non allineate

>> Perché 194.24.2.0/24 … 194.24.5.0/24 non si possono accorpare in un /22? Un /22 ha gli ultimi 2 bit del terzo ottetto a zero, quindi il blocco deve iniziare da un multiplo di 4: .0, .4, .8, … Il terzo ottetto va da 2 (`00000010`) a 5 (`00000101`), e questi valori non hanno in comune i primi 6 bit. Si potrebbero rappresentare solo come 194.24.2.0/23 + 194.24.4.0/23.
>> Allo stesso modo .0/24 e .2/24 non sono contigue (manca .1), quindi un /23 unico includerebbe anche la rete .1.0/24, che non appartiene all'insieme.

---
## Slide 107 – Oggi

- La distinzione fra Net-ID e Host-ID è locale funzione della Netmask
- Lo stesso indirizzo può essere interpretato in modo diverso in punti diversi della rete
- Tutte le tabelle di instradamento devono contenere l'informazione sulla Netmask da applicare per un certo prefisso

---
## Slide 108 – Esempio

![[RT01-s108-1.png|600]]

- R1: 137.204.66.100 appartiene alle Network IP 137.204.66.0/24
- R2: 137.204.66.100 appartiene alle Network IP 137.204.64.0/22

Reti collegate a R1: 137.204.64.0/24, 137.204.65.0/24, 137.204.66.0/24, 137.204.67.0/24

Tabella di instradamento di R1:

| Dest | Netmask | Gateway | Interface |
|---|---|---|---|
| 0.0.0.0 | 0.0.0.0 | 192.168.10.1 | ppp0 |
| 137.204.64.0 | 255.255.255.0 | 137.204.64.254 | en0 |
| 137.204.65.0 | 255.255.255.0 | 137.204.65.254 | en1 |
| 137.204.66.0 | 255.255.255.0 | 137.204.66.254 | en2 |
| 137.204.67.0 | 255.255.255.0 | 137.204.67.254 | en3 |
| 192.168.10.0 | 255.255.255.252 | 192.168.10.2 | ppp0 |

Tabella di instradamento di R2:

| Dest | Netmask | Gateway | Interface |
|---|---|---|---|
| 0.0.0.0 | 0.0.0.0 | -.-.-.- | ppp1 |
| 137.204.64.0 | 255.255.252.0 | 192.168.10.2 | ppp0 |
| 192.168.10.0 | 255.255.255.252 | 192.168.10.1 | ppp0 |

>> R2 vede le quattro /24 di R1 come un'unica rete 137.204.64.0/22 (supernetting): 255.255.252.0 lascia liberi gli ultimi 2 bit del terzo ottetto, che coprono i valori 64–67. Così R2 ha una sola riga invece di quattro. R1 invece deve distinguere le quattro reti, perché ognuna è su un'interfaccia diversa.
>> Il link punto-punto R1–R2 è un /30 (255.255.255.252): 4 indirizzi, cioè la rete .0, due host (.1 e .2) e il broadcast .3.

>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 29 – Esempio|slide 29–35: la stessa rete (R1, R2, 137.204.64.0/22) sviluppata passo passo, con le tabelle dei due router]]
>> **Approfondimento in 02** → [[02 - Approfondimenti IP#Slide 42 – Eccezioni|slide 42–43: eccezioni, cioè una rotta più specifica dentro il prefisso aggregato]]

---
## Slide 109 – Da ricordare

Indirizzamento «classful»
- PRO: semplifica l'implementazione dei gateway
- CON: le network devono per forza avere alcune dimensioni prefissate

**Massimizza semplicità di implementazione penalizzando la flessibilità**

CIDR
- PRO: massima flessibilità nella dimensione delle network, contenimento della dimensione delle tabelle di instradamento
- CON: complessità implementativa

**Massimizza flessibilità penalizzando semplicità di implementazione**

>> La "complessità implementativa" del CIDR sta soprattutto nel *longest prefix match*: il router non può più ricavare la netmask dall'indirizzo (come con le classi). Deve quindi cercare, fra tutte le righe compatibili, quella con il prefisso più lungo. Per farlo servono strutture dati apposite (trie, TCAM).

---
## Slide 110 – Domanda

***IPv4 è completamente privo di ogni forma di controllo del funzionamento?***

***Nel caso esistono protocolli di segnalazione che permettano di implementare funzioni «control plane»?***

---
## Slide 111 – Architettura

![[RT01-s111-1.png|500]]

| Strato OSI | Protocolli | Strato |
|---|---|---|
| Application | Applicazioni: e-mail, ftp, telnet, www… ; DHCP | Strati superiori |
| Transport | TCP, UDP | Strato 4 |
| Network | IP (con ICMP e ARP) | Strato 3 |
| Data Link | Non specificato (ad es. IEEE 802-Ethernet-X25-Aloha ecc.) | Strato 2 |
| Physical | Non specificato. Collegamento fisico | Strato 1 |

>> Nel disegno DHCP è un'applicazione che usa UDP. ICMP è incapsulato in IP, ma nell'architettura fa parte dello strato di rete. Anche ARP è associato allo strato 3, anche se in realtà viaggia direttamente nelle trame di strato 2.

---
## Slide 112 – Il protocollo IP…

- offre un servizio di tipo best effort
	- non garantisce la corretta consegna dei datagrammi
	- se necessario si affida a protocolli affidabili di livello superiore (TCP)
- Questo non toglie che siano necessarie alcune funzioni di controllo
	- situazioni anomale
	- errori e/o irraggiungibilità della destinazione
	- Configurazione delle interfacce
- Qui consideriamo due protocolli
	- **ICMP (Internet Control Message Protocol)**
	- **DHCP (Dynamic Host Configuration Protocol)**

---
## Slide 113 – ICMP

- **Internet Control Message Protocol** (RFC 792) svolge funzioni di controllo per IP
	- IP usa ICMP per la gestione di situazioni anomale, per cui ICMP offre un servizio ad IP
	- i pacchetti ICMP sono incapsulati in datagrammi IP, per cui ICMP è anche utente IP

![[RT01-s113-1.png|500]]

Frame Strato 2 ⊃ Datagramma IP Strato 3 ⊃ Pacchetto ICMP

>> Nell'header IP il campo Protocol vale 1 per ICMP. Per evitare cascate di messaggi, un errore ICMP non viene mai generato in risposta a un altro messaggio di errore ICMP. Allo stesso modo si genera solo per il primo frammento di un datagramma.

---
## Slide 114 – Pacchetto ICMP

![[RT01-s114-1.png|400]]

| Campo | Dimensione |
|---|---|
| IP header | 20 - 60 byte |
| Message Type | 1 byte |
| Message Code | 1 byte |
| Checksum | 2 byte |
| Additional Fields (optional) | variabile |
| Data | variabile |

- **Type**: definisce il tipo di messaggio ICMP
	- messaggi di errore
	- messaggi di richiesta di informazioni
- **Code**: descrive il tipo di errore e ulteriori dettagli
- **Checksum**: controlla i bit errati nel messaggio ICMP
- **Add. Fields**: dipendono dal tipo di messaggio ICMP
- **Data**: intestazione e parte dei dati del datagramma che ha generato l'errore

>> Nei messaggi di errore il campo Data contiene l'header IP e i primi 8 byte del datagramma che ha causato l'errore. Bastano a includere le porte TCP/UDP, così la sorgente può capire a quale connessione o applicazione si riferisce l'errore.

---
## Slide 115 – Tipi di errori

- **Destination Unreachable** (Type = 3)
	- Generato da un gateway quando la sottorete o l'host non sono raggiungibili
	- Generato da un host quando si presenta un errore sull'indirizzo dell'entità di livello superiore a cui trasferire il datagramma
- Codici errore di Destination Unreachable
	- 0 = sottorete non raggiungibile
	- 1 = host non raggiungibile
	- 2 = protocollo non disponibile
	- 3 = porta non disponibile
	- 4 = frammentazione necessaria ma bit don't fragment settato

>> Il codice 4 è alla base del *Path MTU Discovery*: la sorgente invia datagrammi con DF=1 e, quando riceve questo errore (che riporta anche l'MTU del link successivo), riduce la dimensione dei pacchetti.

---
## Slide 116 – Tipi di errori

- Time Exceeded (Type = 11)
	- generato da un router quando il Time-to-Live di un datagramma si azzera ed il datagramma viene distrutto (Code = 0)
	- generato da un host quando un timer si azzera in attesa dei frammenti per riassemblare un datagramma ricevuto in parte (Code = 1)
- Redirect (Type = 5)
	- generato da un router per indicare all'host sorgente un'altra strada più conveniente per raggiungere l'host destinazione

>> Esempio di Redirect: un host ha come default gateway R1, ma per una certa destinazione R1 inoltrerebbe il pacchetto a R2, che si trova sulla stessa LAN dell'host. R1 inoltra comunque il pacchetto e manda all'host un Redirect: i pacchetti successivi per quella destinazione andranno direttamente a R2.

---
## Slide 117 – Informazioni

- Echo (Type = 8)
- Echo Reply (Type = 0)
	- l'host sorgente invia la richiesta ad un altro host o ad un gateway
	- la destinazione deve rispondere immediatamente
	- metodo usato per determinare lo stato di una rete e dei suoi host, la loro raggiungibilità e il tempo di transito nella rete
- Additional Fields:
	- Identifier: identifica l'insieme degli echo appartenenti allo stesso test
	- Sequence Number: identifica ciascun echo nell'insieme
	- Optional Data: usato per inserire eventuali dati di verifica

---
## Slide 118 – Informazioni

- Timestamp Request (Type = 13)
- Timestamp Reply (Type = 14)
	- l'host sorgente invia all'host destinazione un Originate Timestamp che indica l'istante in cui la richiesta è partita
	- l'host destinazione risponde inviando un
		- Receive Timestamp che indica l'istante in cui la richiesta è stata ricevuta
		- Transmit Timestamp che indica l'istante in cui la risposta è stata inviata
	- serve per valutare il tempo di transito nella rete, al netto del tempo di processamento $= T_{Transmit} - T_{Receive}$

>> Detto $T_{Arrivo}$ l'istante in cui la sorgente riceve la risposta, il tempo totale di transito in rete (andata + ritorno) è
>> $$T_{rete} = (T_{Arrivo} - T_{Originate}) - (T_{Transmit} - T_{Receive})$$
>> cioè il tempo complessivo meno il tempo di processamento della destinazione. Questo valore non dipende dalla sincronizzazione degli orologi dei due host, perché ogni differenza usa timestamp dello stesso host.

---
## Slide 119 – Le applicazioni

- Con ICMP vengono implementate alcune importanti applicazioni di gestione e controllo di rete
- In particolare
	- **PING** -> raggiungibilità
	- **TRACEROUTE** -> analisi del percorso

---
## Slide 120 – PING

**`ping DEST`**

Permette di controllare se l'host DEST è raggiungibile o meno da SORG

![[RT01-s120-1.png|400]]

- SORG invia a DEST un pacchetto **ICMP** di tipo **"echo"**
- Se l'host DEST è raggiungibile da SORG, DEST risponde inviando indietro un pacchetto ICMP di tipo **"echo reply"**

---
## Slide 121 – Opzioni

| Opzione | Significato |
|---|---|
| `-n N` | permette di specificare quanti pacchetti inviare (un pacchetto al secondo) |
| `-l M` | specifica la dimensione in byte di ciascun pacchetto |
| `-t` | esegue `ping` finché interrotto con `Ctrl-C` |
| `-a` | traduce l'indirizzo IP in nome DNS |
| `-f` | setta il bit *don't fragment* a 1 |
| `-i T` | setta *time-to-live* = `T` |
| `-w Tout` | specifica un timeout in millisecondi |

- Per maggiori informazioni consultare l'help: `ping /?`

>> Queste sono le opzioni della versione Windows. Su Linux/macOS la sintassi è diversa, per esempio `-c N` per il numero di pacchetti, `-s M` per la dimensione e `-t T` (Linux) per il TTL.
>> Esempio: `ping -f -l 1472 DEST` su Ethernet (MTU 1500) passa, mentre con `-l 1473` fallisce: $1472 + 8$ (header ICMP) $+ 20$ (header IP) $= 1500$.

---
## Slide 122 – Comando PING – Output

L'output mostra
- la dimensione del pacchetto "echo reply"
- l'indirizzo IP di DEST
- il numero di sequenza della risposta (solo UNIX-LINUX)
- il "time-to-live" (TTL)
- il "round-trip time" (RTT)
- alcuni risultati statistici: N° pacchetti persi, MIN, MAX e media del RTT

>> Esempio di output (Linux):
>> ```
>> $ ping -c 3 8.8.8.8
>> 64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=12.4 ms
>> 64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=12.1 ms
>> 64 bytes from 8.8.8.8: icmp_seq=3 ttl=117 time=12.6 ms
>> --- 8.8.8.8 ping statistics ---
>> 3 packets transmitted, 3 received, 0% packet loss
>> rtt min/avg/max/mdev = 12.1/12.4/12.6/0.2 ms
>> ```
>> Il TTL mostrato è quello rimasto al pacchetto di risposta quando arriva. Il valore iniziale tipico è 64 (Linux), 128 (Windows) o 255, quindi la differenza dà un'idea del numero di router attraversati.

---
## Slide 123 – TRACEROUTE

**`tracert DEST`**

Permette di conoscere il percorso seguito dai pacchetti inviati da SORG e diretti verso DEST

![[RT01-s123-1.png|500]]

- SORG invia a DEST una serie di pacchetti **ICMP** di tipo **ECHO** con un **TIME-TO-LIVE (TTL)** progressivo da **1** a **30** (per default)
- Ciascun nodo intermedio decrementa **TTL**
- Il nodo che rileva **TTL = 0** invia a SORG un pacchetto **ICMP** di tipo **TIME EXCEEDED**
- SORG costruisce una lista dei nodi attraversati fino a DEST
- L'output mostra il **TTL**, il nome **DNS** e l'indirizzo **IP** dei nodi intermedi ed il **ROUND-TRIP TIME (RTT)**

>> Il pacchetto con TTL = k viene scartato dal k-esimo router, che si rivela alla sorgente con il Time Exceeded. Quando TTL è abbastanza grande, il pacchetto arriva a DEST, che risponde con un Echo Reply: da lì la sorgente capisce che il percorso è finito.
>> `tracert` di Windows usa ICMP Echo. Il `traceroute` di Unix per default usa invece datagrammi UDP verso porte improbabili: in quel caso la destinazione risponde con Destination Unreachable, codice 3 (porta non disponibile).

---
## Slide 124 – DHCP – RFC 2131,2132

**Dynamic Host Configuration Protocol**

Configurazione **automatica** e **dinamica** di
- Indirizzo IP
- Netmask
- Broadcast
- Host name
- Default gateway
- Server DNS

Server su porta **67** UDP, client su porta **68** UDP

>> "Dinamica" significa che l'indirizzo viene dato in *lease*, cioè in prestito per un tempo limitato, e il client deve rinnovarlo. Così gli indirizzi degli host non più attivi tornano disponibili.

---
## Slide 125 – DHCP – 1

- Quando un host attiva l'interfaccia di rete, invia in modalità broadcast un messaggio **DHCPDISCOVER** in cerca di un server DHCP

![[RT01-s125-1.png|500]]

>> Il client non ha ancora un indirizzo: il DHCPDISCOVER parte con IP sorgente 0.0.0.0 e destinazione 255.255.255.255 (broadcast limitato). Per questo un server DHCP deve stare sulla stessa LAN, oppure serve un *DHCP relay* sul router.

---
## Slide 126 – DHCP – 2

- Ciascun server DHCP presente risponde all'host con un messaggio **DHCPOFFER** con cui propone un indirizzo IP

![[RT01-s126-1.png|500]]

---
## Slide 127 – DHCP – 3

- L'host accetta una delle offerte proposte dai server e manda un messaggio **DHCPREQUEST** in cui richiede la configurazione, specificando il server

![[RT01-s127-1.png|500]]

>> Anche il DHCPREQUEST è inviato in broadcast: così anche i server la cui offerta non è stata scelta vengono a saperlo e possono liberare l'indirizzo che avevano proposto.

---
## Slide 128 – DHCP – 4

- Il server DHCP risponde all'host con un messaggio **DHCPACK** specificando i parametri di configurazione

![[RT01-s128-1.png|500]]

>> Riassunto dello scambio "DORA": **D**iscover → **O**ffer → **R**equest → **A**ck. Se l'indirizzo non è più disponibile, il server risponde con DHCPNAK e il client ricomincia da capo.

---
## Slide 129 – Ulteriori dettagli

- Un'analisi dettagliata del protocollo DHCP che include:
	- Esempi operativi
	- Catture di traffico
- Si può trovare su virtuale

---
## Slide 130 – Da ricordare

**ICMP** ci aiuta a verificare il funzionamento di IPv4

Su ICMP si basano alcune applicazioni molto note come **PING** e **TRACEROUTE**

La configurazione iniziale dell'interfaccia IP può essere manuale o automatica

**DHCP** è il protocollo che permette la configurazione automatica

---
## Slide 131 – Domanda

***Gli indirizzi IPv4 sono molti ma non sufficienti per l'attuale espansione di Internet***

***Come è possibile utilizzare ancora IPv4?***

---
## Slide 132 – Indirizzamento IP: gestione

![[RT01-s132-1.png|600]]

Gerarchia: ICANN (IANA) → RIR (ARIN, RIPE NCC, APNIC, LACNIC, AFRINIC) → NIR → LIR → ISP → EU

- RIR: Regional Internet Registry
- NIR: National Internet Registry
- LIR: Local Internet Registry
- ISP: Internet Service Provider
- EU: End User

>> Aree dei RIR: ARIN (Nord America), RIPE NCC (Europa, Medio Oriente, Asia centrale), APNIC (Asia-Pacifico), LACNIC (America Latina e Caraibi), AFRINIC (Africa). Non tutti i livelli sono sempre presenti: in Europa, per esempio, i LIR (spesso gli ISP stessi) ricevono gli indirizzi direttamente dal RIPE NCC.

---
## Slide 133 – Esaurimento degli indirizzi IPv4

![[RT01-s133-1.png|600]]

ICANN – NEWS RELEASE – *FOR IMMEDIATE RELEASE, February 3, 2011* – **Available Pool of Unallocated IPv4 Internet Addresses Now Completely Emptied**

Linea temporale 1980–2010:

| Data | Evento |
|---|---|
| SEP-81 | **RFC 791** – IPV4 standard |
| 1989 | **The World** – First commercial ISP |
| NOV-91 | **Creation of ROAD** – Routing & Addressing Group |
| JUN-92 | **RFC 1338** – First description of the exhaustion problem |
| SEP-93 | **RFC 1519** – CIDR proposed |
| MAY-94 | **RFC 1631** – NAT proposed |
| DEC-96 | **RFC 1883** – IPv6 Proposed |
| JAN-11 | **IPV4 exhausted** – IANA used last free /8 address block |

Linea temporale 2010–2020:

| Data | Evento |
|---|---|
| JAN-11 | **IANA** allocateed the last free /8 spaces |
| APR-11 | **APNIC** started using its last free /8 space |
| SEP-12 | **RIPE NCC** started using its last free /8 space |
| JUN-14 | **ARIN** started using its last free /8 space |
| SEP-14 | **LACNIC** started using its last free /8 space |
| MAR-17 | **AfriNIC** started using its last free /8 space |
| NOV-19 | **RIPE NCC** allocateed the last free /22 space |

**IPv4 Waiting List** (RIPE NCC)

| | |
|---|---|
| LIRs in queue | 785 |
| Days that first LIR in queue has been waiting | 473 |

We use a waiting list to allocate recovered IPv4 addresses to our members. The table above shows the number of requests already on the waiting list and the number of days that the LIR at the front of the queue has been waiting. This is also shown on the graph below, which should fluctuate over time - falling when recovered addresses become available and are allocated, and rising as new IPv4 requests are added to the waiting list. Both the table and graph are updated every three hours.

Grafico "IPv4 Waiting List Graph" (2019–2026): LIRs in queue; Days that first LIR has been waiting.

>> Oggi i RIR non hanno più blocchi liberi: gli indirizzi IPv4 si ottengono solo da quelli recuperati (lista d'attesa) o comprandoli sul mercato secondario. Per questo sono diventati indispensabili gli indirizzi privati, il NAT e, a lungo termine, IPv6.

---
## Slide 134 – Indirizzi IP privati

- RFC 1918 (per IPv4) definisce degli intervalli di indirizzi IP destinati a reti IP utilizzate da enti per finalità interne
- Spazi di indirizzamento IPv4 privati:
	- 10.0.0.0 a 10.255.255.255 (10.0.0.0/8)
	- 172.16.0.0 a 172.31.255.255 (172.16.0.0/12)
	- 192.168.0.0 a 192.168.255.255 (192.168.0.0/16)
- Cosa significa privati?

>> Dimensioni: /8 → $2^{24} \approx 16{,}7$ milioni di indirizzi; /12 → $2^{20} \approx 1$ milione (da 172.16 a 172.31, cioè 16 reti /16); /16 → $2^{16} = 65536$ indirizzi.

---
## Slide 135 – RFC1918

**Hosts within enterprises that use IP can be partitioned into three categories:**

**Category 1:** hosts that do not require access to hosts in other enterprises or the Internet at large; hosts within this category may use IP addresses that are unambiguous within an enterprise, but may be ambiguous between enterprises.

**Category 2:** hosts that need access to a limited set of outside services (e.g., E-mail, FTP, netnews, remote login) which can be handled by mediating gateways (e.g. application layer gateways). For many hosts in this category an unrestricted external access (provided via IP connectivity) may be unnecessary and even undesirable for privacy/security reasons. Just like hosts within the first category, such hosts may use IP addresses that are unambiguous within an enterprise, but may be ambiguous between enterprises.

**Category 3:** hosts that need network layer access outside the enterprise (provided via IP connectivity); hosts in the last category require IP addresses that are globally unambiguous.

We will refer to the hosts in the first and second categories as "**private**".
We will refer to the hosts in the third category as "**public**".

>> In breve: un indirizzo privato è unico solo all'interno dell'organizzazione. Organizzazioni diverse possono usare gli stessi indirizzi, e per questo non possono comparire su Internet.

---
## Slide 136 – RFC1918

Because private addresses have no global meaning, **routing information about private networks shall not be propagated on inter-enterprise links**, and packets with private source or destination addresses should not be forwarded across such links. Routers in networks not using private address space, especially those of Internet service providers, are expected to be configured **to reject (filter out) routing information about private networks**. If such a router receives such information the rejection shall not be treated as a routing protocol error.

Indirect references to such addresses should be contained within the enterprise. Prominent examples of such references are DNS Resource Records and other information referring to internal private addresses. **In particular, Internet service providers should take measures to prevent such leakage.**

---
## Slide 137 – NAT

- Tecnica di instradamento di pacchetti IP con sostituzione degli indirizzi
	- NAT : sostituisce gli indirizzi IP
	- NAPT : sostituisce indirizzi IP e porte
- Definito nella RFC 3022 per permettere a reti IP private l'accesso a reti IP pubbliche tramite un apposito gateway
- Necessario per il risparmio di indirizzi IP pubblici e il riutilizzo di indirizzi IP privati

![[RT01-s137-1.png|500]]

Rete privata 192.168.10.0/24 — NAT/NAPT — rete pubblica 137.204.191.0/24

---
## Slide 138 – Motivazioni

- Superare i limiti imposti dall'indisponibilità di numeri IP
- Condividere uno o pochi indirizzi per accedere alla rete globale
- Security
	- Nasconde gli indirizzi e la struttura della rete
	- Se opportunamente implementato rende gli host della rete privata inaccessibili dall'esterno

>> L'inaccessibilità dall'esterno è un effetto collaterale: senza una voce nella tabella di traduzione, il NAT non sa a quale host interno consegnare un pacchetto in ingresso, quindi lo scarta. Non sostituisce un vero firewall. Per rendere raggiungibile un server interno serve una regola statica (*port forwarding*).

---
## Slide 139 – Network (+Port) Address Translator (NAT o NAPT)

![[RT01-s139-1.png|550]]

A — Rete privata — **N** — Internet — B

Nel nodo N: Trasporto | Funzione di mappatura | IP; Stack protocollare di Rete (lato rete privata) / Stack protocollare di Rete (lato Internet)

>> Il NAT non è un router "puro": per fare la mappatura deve leggere e modificare anche campi di strato superiore (le porte TCP/UDP nel NAPT). Deve anche ricalcolare i checksum IP e TCP/UDP, perché il checksum TCP/UDP include uno pseudo-header con gli indirizzi IP. Per questo il NAT rompe il principio end-to-end.

---
## Slide 140 – Basic NAT – Conversione di indirizzo IP

- Il NAT può fornire una semplice conversione di indirizzo IP (statica o dinamica)
- Conversioni contemporanee limitate dal numero di indirizzi IP pubblici a disposizione del gateway

![[RT01-s140-1.png|550]]

Host privati 192.168.10.1 e 192.168.10.2; gateway NAT con interfaccia interna 192.168.10.254 e indirizzi pubblici 137.204.191.141, 137.204.191.142; server 137.204.191.140.

| Sorgente | Destinazione |
|---|---|
| 192.168.10.1:3123 (prima del NAT) | 137.204.191.140:80 |
| 137.204.191.141:3123 (dopo il NAT) | 137.204.191.140:80 |
| 192.168.10.2:5039 (prima del NAT) | 137.204.191.140:22 |
| 137.204.191.142:5039 (dopo il NAT) | 137.204.191.140:22 |

>> Nel Basic NAT c'è una corrispondenza 1:1 fra indirizzo privato e indirizzo pubblico, mentre le porte restano invariate (3123 e 5039). Con 2 indirizzi pubblici possono quindi uscire contemporaneamente al massimo 2 host interni. Il NAPT supera questo limite perché traduce anche le porte: molti host possono condividere un solo indirizzo pubblico.

---
## Slide 141 – Conversione di indirizzo e porta

- Il NAT può fornire anche conversione di indirizzo IP e porta TCP o UDP
- Conversioni contemporanee possibili anche con un unico indirizzo IP pubblico del gateway

![[RT01-s141-1.png|500]]

| Rete privata (sorgente) | Rete pubblica (dopo NAT) | Destinazione |
|---|---|---|
| 192.168.10.1:3123 | 137.204.191.141:3123 | 137.204.191.140:80 |
| 192.168.10.2:3123 | 137.204.191.141:4131 | 137.204.191.140:22 |

>> Questo è il NAPT (Network Address and Port Translation, detto anche PAT o "masquerading"): i due host privati usano la stessa porta sorgente 3123, ma il gateway ha un solo IP pubblico (137.204.191.141). Per distinguere le due connessioni in uscita il NAT cambia anche la porta sorgente della seconda (3123 → 4131).
>> La tabella del NAT memorizza la corrispondenza (IP privato, porta privata) ↔ (IP pubblico, porta pubblica): quando arriva una risposta verso 137.204.191.141:4131 il NAT sa che va inoltrata a 192.168.10.2:3123.
>> Poiché il campo porta è di 16 bit, un solo IP pubblico può in teoria gestire decine di migliaia di connessioni contemporanee.

---
## Slide 142 – Direzione delle connessioni

- Tipicamente da rete privata verso rete pubblica
	- Il NAT si preoccupa di effettuare la conversione inversa quando arrivano le risposte
	- Registra le corrispondenze in corso in una tabella
- E' possibile contattare dalla rete pubblica un host sulla rete privata?
	- Dipende dal tipo di NAT e dalla relativa configurazione

![[RT01-s142-1.png|500]]

| Pacchetto in arrivo (rete pubblica) | Dopo la traduzione (rete privata) | Sorgente |
|---|---|---|
| 137.204.191.141:80 | 192.168.10.1:80 | 137.204.191.140:4014 |

>> Una connessione che *nasce* all'esterno non trova alcuna corrispondenza nella tabella del NAT (che si popola solo con il traffico uscente), quindi normalmente viene scartata: il NAT agisce di fatto anche come un rudimentale firewall. Per renderla possibile serve una regola statica configurata a mano (vedi port forwarding, slide successiva).

---
## Slide 143 – Port forwarding

- Il NAT permette l'ingresso di pacchetti destinati a porte specifiche effettuando la traduzione opportuna

![[RT01-s143-1.png|500]]

| Destinazione pubblica | Tradotta in (privata) | Sorgente |
|---|---|---|
| 137.204.191.141:80 | 192.168.10.1:80 | 137.204.191.140:4014 |
| 137.204.191.141:8080 | 192.168.10.2:8080 | 137.204.191.140:4015 |

>> Il port forwarding è una regola statica del tipo "tutto ciò che arriva sulla porta X dell'IP pubblico va inoltrato a IP privato:porta Y". Così un server web interno (192.168.10.1) è raggiungibile dall'esterno come 137.204.191.141:80, e un secondo servizio su un altro host come 137.204.191.141:8080. Limite: una data porta pubblica può essere associata a un solo host interno.

---
## Slide 144 – Analisi di connessioni attraverso NAT

![[RT01-s144-1.png|600]]

>> Cattura (Ethereal, oggi Wireshark) effettuata sull'interfaccia *interna* del NAT (file NAT-int.cap): l'host privato 192.168.10.174 dialoga via HTTP con il server 137.204.24.12 usando il proprio indirizzo privato.

---
## Slide 145 – Analisi di connessioni attraverso NAT

![[RT01-s145-1.png|600]]

>> Stessa connessione catturata sull'interfaccia *esterna* del NAT (file NAT-ext.cap): i pacchetti sono identici (stessi tempi, stesse porte 3770 → 80, stessi numeri di sequenza) ma l'indirizzo 192.168.10.174 è stato sostituito con l'indirizzo pubblico del NAT 137.204.57.76. Il server remoto non vede mai l'indirizzo privato.

---
## Slide 146 – NAT e applicazioni di rete

- Il NAT dovrebbe essere trasparente per l'applicazione
	- Modifica l'intestazione IP e TCP/UDP ma non il payload
- Questo è un problema in tutti i casi in cui l'applicazione trasporta nei suoi dati gli indirizzi IP (per qualsivoglia ragione)
	- Per esempio FTP utilizza due connessioni parallele
		- connessione per l'interazione con il server tramite linea di comando (porta TCP 21)
		- connessione per il trasferimento dei dati da e verso il server
		- i parametri della seconda sono specificati nei dati trasmessi dalla prima

>> In FTP attivo il client invia sul canale di controllo un comando `PORT h1,h2,h3,h4,p1,p2` con il *proprio* indirizzo IP e porta: dietro NAT questo indirizzo è privato e il server non potrebbe usarlo. Per questo i NAT implementano degli ALG (Application Level Gateway) che ispezionano e riscrivono anche il payload, oppure si usa FTP in modalità passiva (`PASV`), in cui è il client ad aprire anche la connessione dati.
>> Problemi analoghi si hanno con SIP/VoIP e altri protocolli che negoziano indirizzi e porte nei dati.

---
## Slide 147 – I problemi

- L'uso di reti IP private, le tecniche di NAT (presso l'utente finale e/o di tipo "carrier grade")
	- compromettono l'ideale "trasparenza" di Internet
	- rompono il principio di separazione delle funzioni di competenza di strati diversi
		- Esempio: un router IP opera a livello di rete, ma se svolge anche funzioni di NAT e/o firewall deve elaborare anche le intestazioni di livello di trasporto
- L'intestazione IPv4 di dimensioni variabili rende inefficiente l'elaborazione veloce (tramite hardware specializzato) nei router IP
		- Esempio: un router IP di fascia alta supporta schede di rete con capacità aggregata di centinaia di Gbit/s --> elaborazione di centinaia di milioni di pacchetti al secondo
- La frammentazione di pacchetti IPv4 e il calcolo della header checksum rallentano ulteriormente l'elaborazione delle intestazioni IP

>> Ordine di grandezza: con pacchetti di dimensione minima (circa 64 byte a livello Ethernet, più preambolo e intervallo tra trame ≈ 84 byte = 672 bit) un link da 100 Gbit/s trasporta circa $10^{11}/672 \approx 1{,}5 \times 10^8$ pacchetti al secondo: ogni nanosecondo risparmiato nell'elaborazione dell'intestazione conta.
>> La header checksum va ricalcolata a ogni hop perché il TTL cambia: IPv6 elimina del tutto questo campo, affidandosi ai controlli degli strati inferiori e superiori.
>> "Carrier grade NAT" (CGN): NAT operato dal provider, per cui molti clienti condividono lo stesso IP pubblico (spesso si ha un doppio NAT: quello di casa più quello del provider).

---
## Slide 148 – Da ricordare

**NAT e NAPT** permettono la coesistenza di numerazione privata e connettività globale

Il NAT ha ridotto notevolmente la necessità di utilizzare numeri IPv4 pubblici

Grazie a questo IPv4 continua ad essere estremamente diffuso nonostante l'esaurimento degli indirizzi

---
## Slide 149 – Cosa viene dopo IPv4?

***Cosa viene dopo IPv4?***

---
## Slide 150 – IPv6

- Standardizzato da IETF in RFC 2460 (1998), sostituita da RFC 8200 (2017)
	- Capacità di indirizzamento estesa a 128 bit --> spazio di indirizzamento $2^{128} \simeq 3.4 \times 10^{38}$
		- Se la superficie dell'intero pianeta Terra fosse ricoperta di dispositivi di rete, si potrebbero assegnare circa $7 \times 10^{23}$ indirizzi per metro quadrato
	- Pensata per essere inesauribile anche in caso di allocazione inefficiente delle reti IPv6
- Semplificazione del formato dell'intestazione, che ha dimensione fissa pari a 40 byte e contiene un numero ridotto di campi
- Supporto per estensioni e opzioni più efficiente in termini di elaborazione
- Possibilità di etichettare flussi di pacchetti
- Supporto per autenticazione e cifratura nativa dei dati
- IPv6 migliora IPv4, ma non è retrocompatibile

>> Verifica del conto: la superficie terrestre è circa $5{,}1 \times 10^{14}\ \text{m}^2$, quindi $\dfrac{3{,}4 \times 10^{38}}{5{,}1 \times 10^{14}} \approx 6{,}7 \times 10^{23}$ indirizzi per m².
>> Confronto: IPv4 ha $2^{32} \approx 4{,}3 \times 10^{9}$ indirizzi, cioè IPv6 ne ha $2^{96} \approx 7{,}9 \times 10^{28}$ volte di più.
>> "Non retrocompatibile" significa che un host solo-IPv4 e uno solo-IPv6 non possono comunicare direttamente: servono meccanismi di transizione (dual stack, tunnel, traduttori come NAT64).

---
## Slide 151 – IPv6

- Indirizzi di 128 bit
- **Semplificazione dell'intestazione** obbligatoria
	- Meno campi che nell'IPv4
	- Frammentazione solo alla sorgente non nei router
- Rimane invariata la logica di instradamento
	- Connectionless e best effort
	- Forwarding hop-by-hop
	- Longest prefix match
	- Indirizzo di destinazione end-to-end

>> In IPv6 se un pacchetto è troppo grande per il link successivo il router lo scarta e invia alla sorgente un messaggio ICMPv6 "Packet Too Big" indicando la MTU; la sorgente (tramite Path MTU Discovery) riduce la dimensione o frammenta essa stessa usando un'intestazione di estensione Fragment. La MTU minima garantita su ogni link IPv6 è 1280 byte.

---
## Slide 152 – Header IPv6

![[RT01-s152-1.png|500]]

| Campo | Dimensione |
|---|---|
| Version | 4 bit |
| Traffic Class | 8 bit |
| Flow Label | 20 bit |
| Payload length | 16 bit |
| Next header | 8 bit |
| Hop limit | 8 bit |
| Source Address | 16 byte |
| Destination Address | 16 byte |

Intestazione totale: 40 byte, seguita da User Data.

>> Controllo: $4+8+20 = 32$ bit (prima riga), $16+8+8 = 32$ bit (seconda riga), cioè 8 byte; più $2 \times 16 = 32$ byte di indirizzi: totale $8 + 32 = 40$ byte. Metà dell'intestazione è occupata dagli indirizzi.

---
## Slide 153 – Campi

- **Version** (4 bit): versione del protocollo (= 6)
- **Traffic class** (8 bit): indicazione del tipo di servizio da offrire al pacchetto, nel caso la rete differenzi tra classi di traffico con diversi requisiti di qualità
- **Flow Label** (20 bit): etichetta che può identificare il flusso a cui appartiene il pacchetto, con possibilità di implementare una modalità a circuito virtuale
- **Payload Length** (16 bit): dimensione del campo dati misurata in bytes
- **Next Header** (8 bit): identifica il tipo di intestazione immediatamente successiva a quella IPv6: può fare riferimento a protocolli di strato di trasporto (es. TCP o UDP) oppure ad estensioni dell'intestazione IPv6 stessa
- **Hop Limit** (8 bit): contatore che viene decrementato di una unità da ciascun router attraversato, scartando il pacchetto se raggiunge il valore 0

>> Corrispondenze con IPv4: Traffic Class ≈ Type of Service (DSCP + ECN), Hop Limit = TTL (rinominato perché di fatto conta gli hop, non il tempo), Next Header = Protocol (usa gli stessi valori: 6 = TCP, 17 = UDP, 58 = ICMPv6).
>> Payload Length esclude i 40 byte dell'intestazione fissa (ma include eventuali estensioni), mentre il Total Length di IPv4 comprendeva anche l'intestazione.
>> Le estensioni formano una catena: ogni intestazione di estensione ha a sua volta un campo Next Header, fino ad arrivare al protocollo di trasporto.

---
## Slide 154 – A confronto

![[RT01-s154-1.png|550]]

Legenda:
- Field's Name Kept from IPv4 to IPv6
- Fields Not Kept in IPv6
- Name and Position Changed in IPv6
- New Field in IPv6

https://343networks.wordpress.com/2010/06/02/ipv4-vs-ipv6-header/

>> Campi eliminati in IPv6: IHL (l'intestazione ha lunghezza fissa), Identification, Flags e Fragment Offset (spostati in un'estensione, usata solo dalla sorgente), Header Checksum, Options e Padding (sostituiti dalle estensioni).
>> Campi rinominati/spostati: Type of Service → Traffic Class, Total Length → Payload Length, Time to Live → Hop Limit, Protocol → Next Header. Unico campo nuovo: Flow Label.

---
## Slide 155 – L'indirizzo IPv6

- Otto gruppi da 16 bit separati da due punti
- Gli zeri iniziali di ciascun gruppo possono essere omessi
- Una sola sequenza continua di gruppi a zero può essere sostituita da ::
- Mai usare :: più di una volta nello stesso indirizzo

```
2001:0db8:1234:0000:0000:0000:0000:0042
                    ↓
            2001:db8:1234::42
```

>> Ogni gruppo è di 4 cifre esadecimali (4 × 4 = 16 bit), per un totale di 8 × 16 = 128 bit.
>> Perché "::" una sola volta: in `2001::1::2` non si potrebbe sapere quanti gruppi a zero corrispondono a ciascun "::" (1+2, 2+1, ...), mentre con un solo "::" il numero di gruppi mancanti si ricava come 8 meno i gruppi scritti.
>> Per convenzione (RFC 5952) si usano le lettere minuscole e si comprime la sequenza di zeri più lunga (non un singolo gruppo a zero).
>> Il prefisso 2001:db8::/32 è riservato alla documentazione, per questo compare in tutti gli esempi.

---
## Slide 156 – Tipologie di indirizzi

| Tipo | Prefisso o esempio | Significato |
|---|---|---|
| **Global unicast** | 2000::/3 | Instradabile globalmente |
| **Link-local** | fe80::/10 | Valido soltanto sul link |
| **Multicast** | ff00::/8 | Uno-a-molti; sostituisce molti usi del broadcast |
| **Anycast** | stesso formato unicast | Raggiunge una delle interfacce del gruppo |
| **Unspecified / loopback** | :: / ::1 | Nessun indirizzo / nodo locale |

**Non vengono definiti indirizzi broadcast**

>> 2000::/3 significa che i primi 3 bit sono 001: gli indirizzi globali attuali iniziano quindi con 2 o 3 in esadecimale (da 2000:: a 3fff:...).
>> Equivalenti IPv4: :: ≈ 0.0.0.0, ::1 ≈ 127.0.0.1 (ma in IPv6 il loopback è un solo indirizzo, non un'intera /8), fe80::/10 ≈ 169.254.0.0/16. Ogni interfaccia IPv6 ha sempre un indirizzo link-local, anche quando ne ha uno globale.

---
## Slide 157 – In particolare

- **Unicast**: identifica una singola interfaccia
	- Un pacchetto inviato a un indirizzo unicast viene consegnato solo alla rispettiva interfaccia
	- L'indirizzo può essere di tipo link-local o global
- **Multicast**: identifica un sottoinsieme di interfacce
	- Un pacchetto inviato a un indirizzo multicast viene consegnato a tutte le interfacce identificate da quell'indirizzo
	- La trasmissione broadcast è sostituita dal multicast
- **Anycast**: identifica un sottoinsieme di interfacce
	- Un pacchetto inviato a un indirizzo anycast viene consegnato a una sola delle interfacce identificate da quell'indirizzo
	- Tipicamente a quella considerata "più vicina" dai protocolli di instradamento

>> Esempi di gruppi multicast link-local ben noti: ff02::1 (tutti i nodi del link, l'equivalente più vicino al broadcast) e ff02::2 (tutti i router del link). Il vantaggio rispetto al broadcast è che ogni nodo riceve solo il traffico dei gruppi a cui si è iscritto.

---
## Slide 158 – Il prefisso ha lo stesso significato

**2001:db8:1234:5678::42/64**

I primi 64 bit identificano il prefisso; i rimanenti identificano l'interfaccia.

![[RT01-s158-1.png|500]]

| Global routing prefix (esempio: /48) | Subnet ID 16 bit | Interface Identifier 64 bit |
|---|---|---|
| ← 64 bit → | | ← 64 bit → |

Il /64 è il caso più tipico ma non è una divisione universale per ogni collegamento IPv6.

>> Nell'esempio: prefisso globale 2001:db8:1234 (48 bit = 3 gruppi), Subnet ID 5678 (16 bit = 1 gruppo), Interface ID 0000:0000:0000:0042 (64 bit = 4 gruppi). Con un /48 un'organizzazione dispone di $2^{16} = 65536$ subnet /64, ciascuna con $2^{64}$ possibili identificativi di interfaccia.
>> Esattamente come in IPv4, il prefisso è la parte usata dai router per il longest prefix match.

---
## Slide 159 – Anycast (1)

- Un concetto inedito (RFC 4291 sez. 2.6)
	- Un normale indirizzo IPv6 assegnato contemporaneamente a più interfacce, generalmente appartenenti a nodi collocati in punti diversi della rete.
- Quando un host invia un pacchetto a quell'indirizzo, la rete lo consegna a una sola delle interfacce che lo possiedono
	- quella che il sistema di routing considera "più vicina".
- "Più vicina" significa più conveniente secondo le logiche del piano di controllo della rete (routing)

>> "Più vicina" non significa necessariamente più vicina geograficamente: dipende dalle metriche e dalle politiche del protocollo di routing (numero di hop, costo dei link, politiche BGP tra operatori).

---
## Slide 160 – Anycast (2)

- Supponiamo che lo stesso servizio DNS sia disponibile in tre sedi
	- DNS A	Bologna	2001:db8:53::53
	- DNS B	Milano	2001:db8:53::53
	- DNS C	Roma	2001:db8:53::53
- I tre server utilizzano lo stesso indirizzo anycast: 2001:db8:53::53
- Un client invia quindi una richiesta a: 2001:db8:53::53
- I router della rete possono consegnarla:
	- al server di Bologna per un client in Emilia-Romagna;
	- al server di Milano per un client nel Nord Italia;
	- al server di Roma per un client nel Centro Italia.

>> È esattamente il modo in cui funzionano i root server DNS e molte CDN (in pratica anche con IPv4): centinaia di istanze fisiche condividono lo stesso indirizzo. Vantaggi: minore latenza, distribuzione del carico, resilienza (se un'istanza cade, il routing la ritira e il traffico va automaticamente a un'altra).
>> Si presta bene a servizi basati su scambi brevi (come le query DNS su UDP); con connessioni lunghe c'è il rischio che un cambio di routing sposti i pacchetti successivi su un'altra istanza.

---
## Slide 161 – Anycast (3)

- IPv6 non riserva un prefisso generale per gli indirizzi anycast
	- Un indirizzo anycast ha la stessa forma di un indirizzo unicast.
- La differenza dipende dalla configurazione:
	- se l'indirizzo viene assegnato a una sola interfaccia, è unicast;
	- se viene assegnato a più interfacce e queste vengono annunciate dal routing, funziona come anycast.
- Il pacchetto IPv6 non contiene quindi un campo che dica "questa destinazione è anycast".
- **Sono i nodi che ospitano il servizio e il sistema di routing a conoscere tale configurazione**.
- Quindi anycast non identifica "**quale nodo**", ma "**una qualsiasi istanza raggiungibile di un servizio**".

>> Dal punto di vista del mittente, quindi, inviare a un indirizzo anycast è indistinguibile dall'inviare a un unicast: tutta la "magia" sta nel fatto che più punti della rete annunciano lo stesso prefisso e ogni router sceglie il percorso migliore secondo le proprie tabelle.

---
## Slide 162 – ICMPv6

- È stato definito un protocollo ICMPv6 (RFC 4443) usato per operazioni di diagnostica e segnalazione di errori
- ICMPv6 è utilizzato anche per gestire le operazioni di Neighbour Discovery tra nodi collegati allo stesso segmento di rete (RFC 4861)
	- Rilevamento di indirizzi duplicati
	- Scoperta di router
	- Risoluzione degli indirizzi a livello di collegamento (equivalente all'ARP di IPv4)
	- Neighbor Solicitation: messaggio ICMPv6 di richiesta di indirizzo MAC
	- Neighbor Advertisement: messaggio ICMPv6 di risposta che include l'indirizzo MAC

>> Differenza importante: ARP è un protocollo a sé, incapsulato direttamente in Ethernet; in IPv6 la risoluzione degli indirizzi usa invece messaggi ICMPv6 trasportati dentro pacchetti IPv6 (Next Header = 58). Per questo in IPv6 ICMPv6 non può essere bloccato indiscriminatamente dai firewall: senza di esso la rete smette di funzionare.

---
## Slide 163 – Funzioni di ICMPv6

- Errori
	- Destination Unreachable
	- Packet Too Big
	- Time Exceeded
	- Parameter Problem
- Diagnostica
	- Echo Request
	- Echo Reply
		- Alla base del comando ping

>> Packet Too Big è nuovo rispetto a ICMP per IPv4 ed è indispensabile perché i router IPv6 non frammentano: informa la sorgente della MTU da usare (Path MTU Discovery).
>> Time Exceeded viene inviato quando l'Hop Limit arriva a 0: è ciò su cui si basa `traceroute`.
>> In IPv4 lo stesso ruolo del Packet Too Big era svolto da Destination Unreachable con codice "Fragmentation needed and DF set".

---
## Slide 164 – Discovery e configurazione

| Funzione | Meccanismo IPv6 | Confronto IPv4 |
|---|---|---|
| **Risoluzione IPv6–L2** | Neighbor Solicitation / Advertisement | ARP |
| **Scoperta del router** | Router Solicitation / Advertisement | Configurazione del gateway |
| **Verifica di unicità** | Duplicate Address Detection | ARP probe |
| **Neighbor Unreachability** | Controllo della raggiungibilità del neighbor | Nessun equivalente unico |
| **Redirect** | Indicazione di un next hop migliore | ICMP Redirect |

>> Neighbor Unreachability Detection (NUD): un nodo verifica periodicamente che i neighbor con cui sta comunicando (in particolare il router) siano ancora raggiungibili, usando conferme dagli strati superiori (es. ACK TCP) o, se mancano, NS unicast. In IPv4 una voce della cache ARP resta valida fino alla scadenza anche se il nodo è sparito.

---
## Slide 165 – Neighbor Discovery Protocol (NDP)

- Insieme di procedure ICMPv6 con cui un nodo gestisce il collegamento locale
	- La tabella di routing individua il next hop;
	- NDP individua come raggiungere quel next hop sul link locale
- Un **neighbor** è qualsiasi nodo raggiungibile direttamente sul medesimo link:
	- può essere l'host destinatario oppure un router
- Utilizza 5 diversi messaggi ICMPv6
	- Router Solicitation (tipo 133): Un host richiede informazioni ai router
	- Router Advertisement (tipo 134) Un router annuncia prefissi, default route e parametri
	- Neighbor Solicitation (tipo 135) Cerca un neighbor o verifica un indirizzo
	- Neighbor Advertisement (tipo 136) Risponde a una NS o annuncia una variazione
	- Redirect (tipo 137) Indica all'host un next hop migliore

>> I messaggi NDP sono inviati con Hop Limit = 255 e il ricevente li accetta solo se arrivano ancora con 255: in questo modo si ha la garanzia che provengano dal link locale e non da un attaccante remoto (nessun router li ha inoltrati).
>> Tipi ICMPv6 da 0 a 127 sono messaggi di errore, da 128 a 255 informativi (Echo Request = 128, Echo Reply = 129, NDP = 133–137).

---
## Slide 166 – NS/NA

![[RT01-s166-1.png|500]]

Solicited node multicast address:
ff02::1:ff00:0/104
\+
Ultimi 24 bit dell'indirizzo cercato

Neighbour Solicitation (multicast)
Verso l'indirizzo multicast ff02::1:ff00:20

Host: 2001:db8:1::10, 2001:db8:1::20, 2001:db8:1::30

Solo questo host appartiene al gruppo multicast ff02::1:ff00:20

>> Esempio: l'host 2001:db8:1::10 vuole conoscere il MAC di 2001:db8:1::20. Gli ultimi 24 bit di 2001:db8:1::20 sono 00:0020, quindi l'indirizzo solicited-node è ff02::1:ff00:20 ($104 + 24 = 128$ bit).
>> A differenza di ARP, che va in broadcast a tutti, la NS arriva solo ai nodi iscritti a quel gruppo (a livello Ethernet l'indirizzo multicast IPv6 è mappato sul MAC 33:33:ff:00:00:20, filtrabile dalla scheda di rete). Gli altri host (::30) scartano la trama senza disturbare la CPU.
>> Ogni host si iscrive automaticamente al gruppo solicited-node di ciascuno dei propri indirizzi.

---
## Slide 167 – NS/NA

![[RT01-s167-1.png|500]]

Neighbour Advertisment (unicast verso 2001:db8:1::10)

>> L'host 2001:db8:1::20 risponde con un Neighbor Advertisement inviato direttamente (unicast) al richiedente, contenente il proprio indirizzo MAC (opzione Target Link-Layer Address). Il richiedente salva l'associazione nella propria neighbor cache (equivalente della cache ARP).

---
## Slide 168 – Il router di default

- Il router invia messaggi ICMPv6 Router Advertisement, annunciandosi come possibile router predefinito
	- Periodicamente
	- In risposta a una Router Solicitation
- L'host usa il campo Router Lifetime per aggiungere, mantenere o rimuovere il router dalla propria lista dei router predefiniti e configurare la rotta ::/0

>> ::/0 è la default route IPv6, l'equivalente di 0.0.0.0/0 in IPv4: prefisso di lunghezza 0, quindi corrisponde a qualsiasi destinazione (ed è il match più corto possibile).
>> Le RS vengono inviate al gruppo ff02::2 (tutti i router), i RA periodici al gruppo ff02::1 (tutti i nodi). Il router si annuncia con il proprio indirizzo link-local, che è quello usato dall'host come next hop.

---
## Slide 169 – Duplicate Address Detection (DAD)

- Utilizza sempre NDP
- Prima di utilizzare un nuovo indirizzo, l'host lo considera *tentative* e invia una Neighbor Solicitation con:
	- sorgente IPv6 ::, perché il nuovo indirizzo non è ancora utilizzabile;
	- Target Address uguale all'indirizzo da verificare;
- Se arriva una Neighbor Advertisement, o in alcuni casi una NS concorrente, l'indirizzo risulta duplicato e non può essere assegnato all'interfaccia.

>> La NS di DAD è inviata al gruppo solicited-node dell'indirizzo da verificare: se un altro nodo possiede già quell'indirizzo, risponde con un NA (inviato a ff02::1, dato che la sorgente :: non può ricevere risposte unicast). Se invece nessuno risponde entro un certo tempo, l'indirizzo passa da *tentative* a valido.
>> La "NS concorrente" è il caso in cui due nodi stanno verificando lo stesso indirizzo nello stesso momento: ciascuno vede la NS dell'altro e capisce che c'è un conflitto.

---
## Slide 170 – Stateless Address Autoconfiguration (SLAAC)

- **Meccanismo standardizzato di autoconfigurazione IPv6**
	- non un protocollo autonomo con propri pacchetti
- Funzionamento
	- Host genera un indirizzo link-local
		- Verifica che sia unico mediante DAD
	- Con Router Advertisement
		- Riceve un prefisso IPv6
	- Combina il prefisso con un Interface Identifier e genera il proprio indirizzo.
		- Verifica anche questo indirizzo mediante DAD.
	- Con Router Advertisement
		- Riceve il router predefinito.

>> L'indirizzo link-local si ottiene come fe80::/64 + Interface Identifier. L'Interface Identifier (64 bit) può essere derivato dal MAC con il metodo EUI-64 (si inserisce ff:fe al centro dei 48 bit e si inverte il 7° bit), oppure, per ragioni di privacy, generato in modo pseudo-casuale (RFC 7217 / RFC 8981), così che l'host non sia tracciabile tramite il MAC.
>> Esempio EUI-64: MAC 00:1a:2b:3c:4d:5e → Interface ID 021a:2bff:fe3c:4d5e; con prefisso 2001:db8:1::/64 si ottiene 2001:db8:1::21a:2bff:fe3c:4d5e.
>> SLAAC richiede prefissi /64 proprio perché l'Interface Identifier è di 64 bit.

---
## Slide 171 – SLAAC

- Stateless
	- non esiste un server centrale che assegna gli indirizzi e mantiene una tabella dei lease
- L'host genera autonomamente il proprio indirizzo
	- conserva localmente informazioni e tempi di validità
- SLAAC è il meccanismo IPv6 mediante il quale un host configura autonomamente i propri indirizzi utilizzando i prefissi annunciati dai router attraverso ICMPv6 Router Advertisement, senza richiedere un server di assegnazione

>> I tempi di validità (preferred lifetime e valid lifetime) arrivano anch'essi nei RA e vengono rinnovati a ogni nuovo annuncio: se il router smette di annunciare un prefisso, gli indirizzi corrispondenti scadono da soli. Questo facilita anche la rinumerazione di una rete.
>> I RA hanno dei flag (M = Managed, O = Other) che dicono all'host se usare anche DHCPv6 per l'indirizzo (M) o solo per altri parametri, ad esempio i server DNS (O).

---
## Slide 172 – DHCPv6

- Trasporto su UDP come DHCP
	- Porta server 547 porta client 546
- Può funzionare in modalità
	- Stateful
		- Il server assegna indirizzi e lease
		- Il client mantiene lo stato dell'assegnazione
		- La sequenza base è simile al DHCP dell'IPv4, usa Solicit, Advertise, Request e Reply
	- Stateless
		- Non assegna indirizzi ma solo parametri aggiuntivi di rete

>> Corrispondenza con DHCPv4: Solicit ≈ Discover, Advertise ≈ Offer, Request ≈ Request, Reply ≈ Ack (in IPv4 le porte erano 67 server / 68 client).
>> Il client non usa broadcast (che non esiste): invia i messaggi dal proprio indirizzo link-local al gruppo multicast ff02::1:2 (All_DHCP_Relay_Agents_and_Servers).
>> Il default gateway non viene fornito da DHCPv6: si ottiene sempre tramite Router Advertisement. La modalità stateless si usa tipicamente insieme a SLAAC per distribuire, ad esempio, i server DNS.

---
## Slide 173 – Avvio di un host IPv6

- Genera un indirizzo **link local** e esegue DAD per escludere conflitti
- Ottiene prefisso di network, router ecc. con **Router Solicitation e Advertisement**
- Ottiene indirizzo tramite **SLAAC o DHCPv6**
- È pronto per la consegna e risolve l'indirizzo L2 del next hop con **Neighbor Solicitation e Neighbor Advertisement**

>> Riassunto della sequenza tipica:
>> 1. fe80::IID → NS di DAD (sorgente ::) → nessuna risposta → indirizzo link-local valido
>> 2. RS a ff02::2 → RA dal router (prefisso, flag M/O, link-local del router)
>> 3. indirizzo globale con SLAAC (prefisso + IID, poi DAD) oppure da DHCPv6
>> 4. per spedire fuori dal link: longest prefix match → default route ::/0 → NS/NA per il MAC del router → invio del pacchetto.

---
## Slide 174 – Assegnazione indirizzi IPv6

- ICANN (IANA) alloca grandi blocchi di indirizzi contigui ai vari RIR
	- Esempi: 2001:600::/23 e 2a00::/12 sono due dei diversi blocchi assegnati a RIPE
- I RIR allocano ai LIR e/o agli operatori (ISP) blocchi tipicamente /32
	- 2001:760::/32 allocato al GARR, appartenente a 2001:600::/23
	- 2a00:1620::/32 allocato al CNR, appartenente a 2a00::/12
- I LIR assegnano alle organizzazioni (EU) blocchi tipicamente /48
	- 2001:760::/48 assegnato al GARR
	- 2a00:1620:a0::/48 assegnato alla sede CNR di Bologna
- Ciascuna organizzazione utilizza al proprio interno reti IPv6 tipicamente /64
	- 2001:760:1a::/64 è una subnet del blocco assegnato al GARR
	- 2a00:1620:a0:5a00::/64 è una subnet del blocco assegnato alla sede CNR di Bologna

>> Quante reti ci stanno a ogni livello: un /32 contiene $2^{48-32} = 2^{16} = 65536$ blocchi /48; un /48 contiene $2^{64-48} = 2^{16} = 65536$ subnet /64. Un solo ISP con un /32 dispone quindi di $2^{32}$ subnet /64, tante quanti sono tutti gli indirizzi IPv4 esistenti.
>> Verifica di appartenenza: 2001:0760:: inizia con i 23 bit di 2001:0600 (0x0760 = 0000 0111 0110 0000 e 0x0600 = 0000 0110 0000 0000 hanno in comune i primi 7 bit del secondo gruppo, 16 + 7 = 23), quindi 2001:760::/32 ⊂ 2001:600::/23.
>> Nota: 2001:760:1a::/64 sta in 2001:760:1a::/48, non in 2001:760::/48 (i primi 48 bit sono 2001:0760:001a); appartiene comunque al /32 del GARR.
>> EU = End User (utente finale).

---
## Slide 175 – Da ricordare

Con IPv6 si **allarga lo spazio degli indirizzi** a dismisura

I meccanismi di configurazione cambiano e non sono retrocompatibili

Le logiche di instradamento non cambiano

---
## Riassunto

>> **IPv4 e intestazione**
>> - IP è connectionless e best effort (niente ritrasmissioni né controllo di flusso), con indirizzi a 32 bit.
>> - L'intestazione va da 20 a 60 byte (IHL in parole da 32 bit, minimo 5). Total Length arriva al massimo a 65535 byte.
>> - TTL: ogni router lo decrementa di 1 e il pacchetto con TTL a 0 viene scartato (ICMP Time Exceeded). L'header checksum si ricalcola a ogni hop.
>>
>> **Frammentazione**
>> - Qualunque nodo può frammentare (salvo DF=1), ma riassembla solo il destinatario.
>> - Il Fragment Offset si conta in blocchi da 8 byte del payload. Il campo dati dei frammenti non finali deve essere multiplo di 8. MF=1 vale per tutti tranne l'ultimo.
>> - Per il riassemblaggio i frammenti si associano con (sorgente, destinazione, protocol, identification). Se ne manca uno si perde l'intero datagramma.
>>
>> **Indirizzamento e instradamento**
>> - Il Net-ID si ottiene come IP AND netmask. Con $H = 32 - N$ bit di host si hanno $2^H - 2$ indirizzi utilizzabili (Host-ID tutto a 0 = network, tutto a 1 = broadcast).
>> - L'host applica la propria netmask all'IP di destinazione: se il Net-ID è uguale al proprio fa consegna diretta, altrimenti consegna indiretta a un gateway. L'ultimo salto è sempre una consegna diretta.
>> - Una rotta contiene prefisso, gateway (on-link oppure IP del router), interfaccia e metrica. Il lookup usa il **longest prefix match**: vince il prefisso più lungo per cui $IP_D \wedge N = D$. La default route 0.0.0.0/0 corrisponde a qualunque destinazione.
>> - ARP risolve l'indirizzo IP del next hop in MAC con una request in broadcast e una reply in unicast, e salva il risultato in cache. Nella consegna indiretta il MAC di destinazione è quello del router, mentre l'IP di destinazione resta quello finale.
>>
>> **Classi, subnetting, CIDR**
>> - Le classi A (0), B (10) e C (110) avevano netmask implicite /8, /16 e /24. D era per il multicast, E sperimentale.
>> - Il subnetting sposta bit dall'Host-ID al Net-ID. Il supernetting fa l'inverso e aggrega $2^n$ reti contigue e allineate (es. 194.24.0.0/21 = 8 reti /24).
>> - Con il CIDR la netmask è locale e va inserita nelle tabelle: più flessibilità e tabelle più piccole, ma un'implementazione più complessa.
>>
>> **ICMP e DHCP**
>> - Tipi ICMP da ricordare: Destination Unreachable (3), Time Exceeded (11), Redirect (5), Echo/Echo Reply (8/0). Traceroute sfrutta un TTL crescente e i Time Exceeded.
>> - DHCP usa le porte UDP 67 (server) e 68 (client), con lo scambio DORA: Discover, Offer, Request, Ack.
>>
>> **Indirizzi privati e NAT**
>> - Indirizzi privati (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, non instradati su Internet.
>> - Il Basic NAT traduce solo l'IP (1:1). Il NAPT traduce IP e porta, così molti host condividono un solo IP pubblico. Le connessioni entranti richiedono il port forwarding.
>>
>> **IPv6**
>> - Indirizzi a 128 bit e intestazione fissa di 40 byte, senza checksum né campi di frammentazione. I router non frammentano (ICMPv6 Packet Too Big). Hop Limit corrisponde al TTL, Next Header al Protocol.
>> - Notazione: si omettono gli zeri iniziali e si usa "::" una sola volta. Tipi di indirizzo: global 2000::/3, link-local fe80::/10, multicast ff00::/8, anycast. Il broadcast non esiste. Una subnet tipica è un /64.
>> - NDP (ICMPv6, tipi 133–137) comprende RS/RA per il router e il prefisso, e NS/NA per la risoluzione L2 (inviate al gruppo solicited-node). DAD verifica l'unicità di un indirizzo con una NS con sorgente ::.
>> - Avvio di un host: link-local e DAD, poi RS/RA, poi SLAAC (prefisso + Interface ID) oppure DHCPv6 (porte 546/547).
