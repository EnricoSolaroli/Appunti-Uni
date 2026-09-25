[2627_IP_2_AddOn](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/2627_IP_2_AddOn.pdf>)

# Approfondimenti IP – riassemblamento, indirizzamento e tabelle di instradamento

>> Approfondimenti della lezione [[01 - Instradamento IPv4 e IPv6]]: all'inizio di ogni blocco trovi una riga **Torna alla nota principale** con il link alla slide da cui partire.

## Indice

1. **Riassemblamento IPv4 secondo RFC 791** (slide 2–8)
	- [[#Slide 2 – Approfondiamo gli algoritmi utilizzati per riassemblare i pacchetti IPv4 al ricevitore|Il problema dei frammenti fuori ordine e duplicati]]
	- [[#Slide 4 – Algoritmi per il riassemblamento IPv4|RFC 791 e RFC 815, datagramma minimo di 68 byte]]
	- [[#Slide 5 – Riassemblamento (RFC 791)|Procedura RFC 791: BUFID, RCVBT, TDL e timer]]
	- [[#Slide 8 – In sintesi|Limiti dell'algoritmo di RFC 791]]
2. **Riassemblamento con la lista dei buchi (RFC 815)** (slide 9–12)
	- [[#Slide 9 – RFC 815|Il concetto di buco: hole.first e hole.last]]
	- [[#Slide 10 – Algoritmo|Aggiornamento della lista dei buchi]]
	- [[#Slide 11 – Graficamente|Casi grafici di intersezione frammento/buco]]
3. **Indirizzamento: progetto di una rete aziendale** (slide 13–16)
	- [[#Slide 13 – Approfondiamo la conoscenza delle politiche di indirizzamento e della costruzione della tabella di instradamento|Politiche di indirizzamento e subnetting]]
	- [[#Slide 15 – Esempio|Esempio: tre siti su una /24 di classe C]]
	- [[#Slide 16 – Architettura|Architettura con LAN e MAN]]
4. **Subnetting con netmask uniforme** (slide 17–20)
	- [[#Slide 17 – La scelta della netmask|Tabella netmask, numero di host e di sottoreti]]
	- [[#Slide 18 – Soluzione 1|Soluzione 1: quattro /26, indirizzi e broadcast]]
	- [[#Slide 20 – Soluzione 1|Indirizzi di router e host]]
5. **Netmask a lunghezza variabile (VLSM)** (slide 21–26)
	- [[#Slide 21 – Scelta di netmask diverse|Scelta di netmask diverse]]
	- [[#Slide 22 – Soluzione 2|Soluzione 2: /26, /27 e /29]]
	- [[#Slide 23 – Soluzione 1|Rete dei router ridotta a una /29]]
	- [[#Slide 25 – Soluzione 3|Soluzione 3: link punto-punto con /30]]
6. **Tabelle di instradamento nei router lontani** (slide 27–32)
	- [[#Slide 27 – Approfondiamo l'analisi dell'uso della tabella di instradamento|Uso della tabella di instradamento]]
	- [[#Slide 29 – Esempio|Esempio: quattro /24 dietro R1, uscita verso R2]]
	- [[#Slide 31 – Esempio|Tabella di R2: tutti i prefissi esplicitati]]
7. **Inoltro con longest prefix match** (slide 33–35)
	- [[#Slide 33 – (senza titolo: inoltro in R2 verso 192.168.10.2)|R2: consegna diretta sulla /30]]
	- [[#Slide 34 – (senza titolo: inoltro in R2 verso 137.204.65.210)|R2: consegna indiretta tramite R1]]
	- [[#Slide 35 – (senza titolo: inoltro in R1 verso 137.204.65.210)|R1: consegna all'host su en1]]
8. **Aggregazione dei prefissi (supernetting)** (slide 36–40)
	- [[#Slide 36 – Analizziamo gli indirizzi delle 4 reti|Bit comuni delle quattro reti: prefisso /22]]
	- [[#Slide 37 – Un altro esempio|Aggregazione a passi: due /23 in una /22]]
	- [[#Slide 38 – Semplificazione delle tabelle|Semplificazione della tabella di R2]]
	- [[#Slide 40 – Aggregazione|Inoltro con la rotta aggregata]]
9. **Ordinamento delle rotte ed eccezioni** (slide 41–43)
	- [[#Slide 41 – Perché ordinare i route?|Ordinamento per netmask decrescente]]
	- [[#Slide 42 – Eccezioni|Eccezione /24 dentro la /22]]
	- [[#Slide 43 – Eccezioni|Eccezione /30 dentro la /24]]


---
## Slide 1 – Approfondimenti

---
## Slide 2 – Approfondiamo gli algoritmi utilizzati per riassemblare i pacchetti IPv4 al ricevitore

>> **Torna alla nota principale** → [[01 - Instradamento IPv4 e IPv6#Slide 21 – Il riassemblamento|slide 21 – Il riassemblamento]]
>> **Torna alla nota principale** → [[01 - Instradamento IPv4 e IPv6#Slide 13 – Chi frammenta|slide 13 – Chi frammenta]]

---
## Slide 3 – Domanda

- ***Come ricostruiamo il datagramma dai frammenti che possono arrivare anche non consecutivi e anche ripetuti in tutto o in parte?***

>> Il ricevitore finale (non i router intermedi) deve rimettere insieme i frammenti usando i campi dell'header IPv4: Identification (insieme a indirizzi sorgente/destinazione e protocollo) per capire a quale datagramma appartiene un frammento, Fragment Offset per sapere dove collocarlo, e il flag More Fragments per riconoscere l'ultimo frammento (e quindi la lunghezza totale). Le difficoltà sono che i frammenti possono arrivare fuori ordine, duplicati, sovrapposti o non arrivare affatto.

---
## Slide 4 – Algoritmi per il riassemblamento IPv4
*(slide marcata "A")*

- Il problema di come implementare il riassemblamento è affrontato in due RFC
	- RFC 791 è la specifica originale di IP
	- RFC 815 propone un miglioramento successivo
- Da RFC 791
	- `Every internet module` **`must be able to forward a datagram of 68 octets`** `without further fragmentation. This is because an internet header may be up to 60 octets, and the minimum fragment is 8 octets.`

>> Il conto: header massimo $= 15 \cdot 4 = 60$ byte (IHL è su 4 bit e conta parole da 32 bit) e il frammento minimo di dati è 8 byte, perché il Fragment Offset si misura in unità di 8 byte. Quindi $60 + 8 = 68$ byte è la MTU minima che ogni link IPv4 deve supportare senza ulteriore frammentazione.
>> Conseguenza: in tutti i frammenti tranne l'ultimo la lunghezza del campo dati deve essere un multiplo di 8 byte.

---
## Slide 5 – Riassemblamento (RFC 791)
*(slide marcata "A")*

![[RT02-s005-1.png|700]]

```
Procedure:

(1)  BUFID <- source|destination|protocol|identification;
(2)  IF FO = 0 AND MF = 0
(3)     THEN IF buffer with BUFID is allocated
(4)             THEN flush all reassembly for this BUFID;
(5)          Submit datagram to next step; DONE.
(6)     ELSE IF no buffer with BUFID is allocated
(7)             THEN allocate reassembly resources
                     with BUFID;
                     TIMER <- TLB; TDL <- 0;
(8)          put data from fragment into data buffer with
             BUFID from octet FO*8 to
                                 octet (TL-(IHL*4))+FO*8;
(9)          set RCVBT bits from FO
                                 to FO+((TL-(IHL*4)+7)/8);
(10)         IF MF = 0 THEN TDL <- TL-(IHL*4)+(FO*8)
(11)         IF FO = 0 THEN put header in header buffer
(12)         IF TDL # 0
(13)          AND all RCVBT bits from 0
                                 to (TDL+7)/8 are set
(14)            THEN TL <- TDL+(IHL*4)
(15)                 Submit datagram to next step;
(16)                 free all reassembly resources
                     for this BUFID; DONE.
(17)         TIMER <- MAX(TIMER,TTL);
(18)         give up until next fragment or timer expires;
(19) timer expires: flush all reassembly with this BUFID; DONE.

Notation:

  FO    -  Fragment Offset
  IHL   -  Internet Header Length
  MF    -  More Fragments flag
  TTL   -  Time To Live
  NFB   -  Number of Fragment Blocks
  TL    -  Total Length
  TDL   -  Total Data Length
  BUFID -  Buffer Identifier
  RCVBT -  Fragment Received Bit Table
  TLB   -  Timer Lower Bound
```

Annotazione (riferita a `source|destination|protocol|identification`, riga 1):
Parametri identificativi del datagramma
Garantiscono che si considerino solamente frammenti dello stesso datagramma originale

>> Il campo Identification da solo non basta: due sorgenti diverse possono usare lo stesso valore, e la stessa sorgente può usarlo verso destinazioni o protocolli diversi. Per questo la chiave del buffer (BUFID) è la quadrupla sorgente, destinazione, protocollo, identification.

---
## Slide 6 – Riassemblamento (RFC 791)
*(slide marcata "A")*

![[RT02-s006-1.png|700]]

```
Procedure:

(1)  BUFID <- source|destination|protocol|identification;
(2)  IF FO = 0 AND MF = 0
(3)     THEN IF buffer with BUFID is allocated
(4)             THEN flush all reassembly for this BUFID;
(5)          Submit datagram to next step; DONE.
(6)     ELSE IF no buffer with BUFID is allocated
(7)             THEN allocate reassembly resources
                     with BUFID;
                     TIMER <- TLB; TDL <- 0;
(8)          put data from fragment into data buffer with
             BUFID from octet FO*8 to
                                 octet (TL-(IHL*4))+FO*8;
(9)          set RCVBT bits from FO
                                 to FO+((TL-(IHL*4)+7)/8);
(10)         IF MF = 0 THEN TDL <- TL-(IHL*4)+(FO*8)
(11)         IF FO = 0 THEN put header in header buffer
(12)         IF TDL # 0
(13)          AND all RCVBT bits from 0
                                 to (TDL+7)/8 are set
(14)            THEN TL <- TDL+(IHL*4)
(15)                 Submit datagram to next step;
(16)                 free all reassembly resources
                     for this BUFID; DONE.
(17)         TIMER <- MAX(TIMER,TTL);
(18)         give up until next fragment or timer expires;
(19) timer expires: flush all reassembly with this BUFID; DONE.

Notation:

  FO    -  Fragment Offset
  IHL   -  Internet Header Length
  MF    -  More Fragments flag
  TTL   -  Time To Live
  NFB   -  Number of Fragment Blocks
  TL    -  Total Length
  TDL   -  Total Data Length
  BUFID -  Buffer Identifier
  RCVBT -  Fragment Received Bit Table
  TLB   -  Timer Lower Bound
```

Annotazione (riferita a `FO = 0 AND MF = 0`, riga 2):
Se
- Fragment Offest = 0 (comincia dal primo byte del datagramma originale)
- More Fragment = 0 (non ci sono altri frammenti)

Allora tutto il datagramma è stato ricostruito e può essere consegnato

>> In pratica è il caso di un datagramma **non frammentato**: il "frammento" è l'intero datagramma. Eventuali risorse di riassemblamento già allocate con lo stesso BUFID (righe 3-4) vengono scartate e il datagramma viene passato subito al livello superiore.

---
## Slide 7 – Riassemblamento (RFC 791)
*(slide marcata "A")*

![[RT02-s007-1.png|700]]

```
Procedure:

(1)  BUFID <- source|destination|protocol|identification;
(2)  IF FO = 0 AND MF = 0
(3)     THEN IF buffer with BUFID is allocated
(4)             THEN flush all reassembly for this BUFID;
(5)          Submit datagram to next step; DONE.
(6)     ELSE IF no buffer with BUFID is allocated
(7)             THEN allocate reassembly resources
                     with BUFID;
                     TIMER <- TLB; TDL <- 0;
(8)          put data from fragment into data buffer with
             BUFID from octet FO*8 to
                                 octet (TL-(IHL*4))+FO*8;
(9)          set RCVBT bits from FO
                                 to FO+((TL-(IHL*4)+7)/8);
(10)         IF MF = 0 THEN TDL <- TL-(IHL*4)+(FO*8)
(11)         IF FO = 0 THEN put header in header buffer
(12)         IF TDL # 0
(13)          AND all RCVBT bits from 0
                                 to (TDL+7)/8 are set
(14)            THEN TL <- TDL+(IHL*4)
(15)                 Submit datagram to next step;
(16)                 free all reassembly resources
                     for this BUFID; DONE.
(17)         TIMER <- MAX(TIMER,TTL);
(18)         give up until next fragment or timer expires;
(19) timer expires: flush all reassembly with this BUFID; DONE.

Notation:

  FO    -  Fragment Offset
  IHL   -  Internet Header Length
  MF    -  More Fragments flag
  TTL   -  Time To Live
  NFB   -  Number of Fragment Blocks
  TL    -  Total Length
  TDL   -  Total Data Length
  BUFID -  Buffer Identifier
  RCVBT -  Fragment Received Bit Table
  TLB   -  Timer Lower Bound
```

Annotazione (riferita alle righe 7-8):
Vengono allocate le risorse di memoria per il datagramma (Total Data Length)
Viene fissato un timer (timeout)
Il frammento viene memorizzato al punto giusto della sequenza
F0\*8 perché si ragiona a blocchi di 8 byte (64 bit)

>> Lettura delle altre righe: $TL - IHL \cdot 4$ è la lunghezza dei soli dati del frammento (Total Length meno header, con IHL in parole da 4 byte). La RCVBT ha **un bit per ogni blocco da 8 byte**: la riga 9 marca come ricevuti i blocchi coperti dal frammento ($+7$ e divisione intera servono ad arrotondare per eccesso). Solo l'ultimo frammento (MF = 0) permette di conoscere la lunghezza totale dei dati: $TDL = TL - IHL\cdot 4 + FO\cdot 8$ (riga 10). Il datagramma è completo quando TDL è noto e tutti i bit da 0 a $(TDL+7)/8$ sono a 1 (righe 12-13).
>>
>> Esempio: frammento con $FO = 185$, $TL = 1500$, $IHL = 5$: dati di $1500 - 20 = 1480$ byte, collocati dal byte $185 \cdot 8 = 1480$ al byte $2960$.
>>
>> Il timer (righe 7, 17, 19) evita di tenere occupata memoria all'infinito se un frammento è andato perso: parte da TLB e viene eventualmente alzato al TTL del frammento ricevuto; alla scadenza tutto il buffer viene scartato.

---
## Slide 8 – In sintesi
*(slide marcata "A")*

- L'algoritmo proposto in RFC 791 mira a contare il numero di byte ricevuti e controllare che questo numero sia uguale alla dimensione originale del datagramma
- L'algoritmo non è particolarmente efficace
- RFC 815 propone un algoritmo molto più semplice ed efficace che non ha problemi con alcuna combinazione di frammenti

>> Il limite dell'approccio di RFC 791 è che richiede una struttura aggiuntiva (la bit table RCVBT, un bit per ogni blocco di 8 byte) e, per verificare il completamento, bisogna scandire tutti i bit a ogni frammento ricevuto. RFC 815 invece tiene solo l'elenco delle parti ancora mancanti ("buchi"), che in genere sono pochi.

---
## Slide 9 – RFC 815
*(slide marcata "A")*

- Utilizza il concetto di «buco (hole)»
- `hole.first` offset dell'inizio di un buco (dati mancanti)
- `hole.last` offset della fine di un buco
- Crea una lista ordinata di buchi che inizialmente è composta da un solo buco uguale a tutto il pacchetto
	- Istante iniziale: istante di ricezione di un primo frammento con informazioni identificative non ancora registrate
	- Si crea una lista con un elemento solo che ha
		- `hole.first=0` e `hole.last=infinito`

>> `hole.last` parte da "infinito" perché, finché non arriva l'ultimo frammento (MF = 0), non si conosce la lunghezza totale del datagramma. Quando arriva l'ultimo frammento, il buco finale "fino a infinito" viene chiuso.
>> Un'idea elegante di RFC 815: il descrittore di ogni buco (first, last, puntatore al successivo) viene memorizzato **dentro il buco stesso** nel buffer di riassemblamento; è possibile perché ogni buco è grande almeno 8 byte (la granularità dell'offset), quindi non serve memoria aggiuntiva.

---
## Slide 10 – Algoritmo
*(slide marcata "A")*

- Ricevuto un frammento si procede a controllare la lista dei buchi
	- Se `fragment.first>hole.last` si passa al buco successivo
	- Se `fragment.last<hole.first` si passa al buco successivo
	- Se non è vera nessuna delle precedenti il segmento arrivato intercetta il buco corrente che va sostituito da un buco nuovo
		- Se `fragment.first>hole.first` il nuovo buco avrà `hole.first=hole.first` e `hole.last=fragment.first`
		- Se `fragment.last<hole.last` il nuovo buco avrà `hole.first=fragment.last` e `hole.last=hole.last`
- L'algoritmo termina quando **non ci sono più buchi**

>> Precisazioni rispetto al testo di RFC 815: il buco corrente viene prima **eliminato** dalla lista, poi si inseriscono al suo posto zero, uno o due buchi nuovi (due se il frammento cade tutto all'interno del buco). Se first e last indicano byte inclusi, i nuovi buchi sono esattamente $[\text{hole.first},\ \text{fragment.first}-1]$ e $[\text{fragment.last}+1,\ \text{hole.last}]$. Inoltre il buco "a destra" si crea solo se il frammento ha MF = 1: se è l'ultimo frammento, dopo di lui non mancano dati.
>> Duplicati e sovrapposizioni non creano problemi: un frammento già ricevuto non interseca alcun buco (casi "si passa al successivo") e quindi non modifica la lista.

---
## Slide 11 – Graficamente
*(slide marcata "A")*

![[RT02-s011-1.png|600]]

>> Le righe mostrano il buco (tra `hole.first` e `hole.last`) e alcuni frammenti in arrivo (in verde). Nei primi due casi il frammento sta interamente prima del buco ($\text{fragment.last} < \text{hole.first}$) o interamente dopo ($\text{fragment.first} > \text{hole.last}$): non c'è intersezione e si passa al buco successivo. Nell'ultimo caso il frammento si sovrappone all'inizio del buco: il buco va sostituito (vedi slide successiva).

---
## Slide 12 – Graficamente
*(slide marcata "A")*

![[RT02-s012-1.png|600]]

>> I tre casi di intersezione: il frammento copre l'inizio del buco e resta un nuovo buco a destra; il frammento copre la fine del buco e resta un nuovo buco a sinistra; il frammento cade all'interno del buco e restano due nuovi buchi, uno per lato. Se il frammento copre tutto il buco, il buco sparisce senza essere sostituito.

---
## Slide 13 – Approfondiamo la conoscenza delle politiche di indirizzamento e della costruzione della tabella di instradamento

>> **Torna alla nota principale** → [[01 - Instradamento IPv4 e IPv6#Slide 98 – Le sottoreti|slide 98–102 – Le sottoreti e il subnetting]]
>> **Torna alla nota principale** → [[01 - Instradamento IPv4 e IPv6#Slide 50 – Da ricordare|slide 50 – numero di host disponibili]]

---
## Slide 14 – Domanda

- ***Come si attribuiscono i numeri ai calcolatori di una network IP?***
- ***La network può essere suddivisa in sotto-network?***

---
## Slide 15 – Esempio

- Un'azienda possiede tre siti distribuiti su una grande area urbana: S1, S2, S3.
- Ciascun sito aziendale è dotato di infrastrutture informatiche comprendenti, tra l'altro, una LAN ed un router di uscita verso il mondo esterno. Tutti i siti devono essere interconnessi tra loro con una rete a maglia completa.
- I siti sono così divisi:
	- S1, S2: 50 host
	- S3: 20 host
- Si richiede di progettare una rete di classe C a cui viene assegnato l'indirizzo 196.200.96.0/24 comprensiva della numerazione dei router, definendo le relative netmask

>> Le sottoreti da numerare sono **quattro**: le tre LAN (S1, S2, S3) e la rete metropolitana M (MAN) che collega i tre router. Una /24 offre 256 indirizzi, di cui 254 assegnabili (si escludono l'indirizzo di rete e quello di broadcast); lo stesso vale in ogni sottorete: i due indirizzi estremi non si assegnano agli host.

---
## Slide 16 – Architettura

![[RT02-s016-1.png|600]]

>> Nella figura: le LAN dei siti S1, S2, S3, ciascuna col proprio router, e la MAN (M) che interconnette i tre router.

---
## Slide 17 – La scelta della netmask

![[RT02-s017-1.png|500]]

| Ultimo byte netmask | # host | # subnets |
|:---:|:---:|:---:|
| 00000000 | 254 | 1 |
| 10000000 | 126 | 2 |
| **11000000** | **62** | **4** |
| 11100000 | 30 | 8 |
| 11110000 | 14 | 16 |
| 11111000 | 6 | 32 |
| 11111100 | 2 | 64 |

>> Con $k$ bit a 1 nell'ultimo byte della netmask si ottengono $2^k$ sottoreti, ciascuna con $2^{8-k}$ indirizzi, di cui $2^{8-k} - 2$ assegnabili agli host (tolti indirizzo di rete e broadcast). Es. $k = 2$: $2^2 = 4$ sottoreti da $2^6 - 2 = 62$ host.
>> La riga evidenziata è quella scelta: servono 4 sottoreti (S1, S2, S3, M) e almeno 50 host nelle più grandi, quindi una maschera /26 (255.255.255.192) basta.

---
## Slide 18 – Soluzione 1

- Subnets:
	- 196.200.96.0/26 (S1)
	- 196.200.96.64/26 (S2)
	- 196.200.96.128/26 (S3)
	- 196.200.96.192/26 (M)
- Netmask: 255.255.255.192
- Broadcast:
	- 196.200.96.63 (S1)
	- 196.200.96.127 (S2)
	- 196.200.96.191 (S3)
	- 196.200.96.255 (M)

>> Il broadcast di ogni sottorete si ottiene mettendo a 1 tutti i 6 bit di host: indirizzo di rete $+ 63$ (es. $.64 + 63 = .127$).
>> Questa soluzione, con la stessa maschera per tutte le sottoreti, è semplice ma spreca indirizzi: S3 ha 20 host su 62 disponibili e M ne usa solo 3 (i router) su 62, e non resta spazio per altre sottoreti.

---
## Slide 19 – Soluzione 1

![[RT02-s019-1.png|600]]

>> Nella figura: S1 = 196.200.96.0/26, S2 = 196.200.96.64/26, M = 196.200.96.192/26, S3 = 196.200.96.128/26.

---
## Slide 20 – Soluzione 1

- Routers LAN:
	- 196.200.96.62 (S1)
	- 196.200.96.126 (S2)
	- 196.200.96.190 (S3)
- Routers MAN: qualunque indirizzo tra:
	- 196.200.96.193 e .254 (M)
- IP Hosts: qualunque indirizzo tra:
	- 196.200.96.1 e .61 (S1)
	- 196.200.96.65 e .125 (S2)
	- 196.200.96.129 e .189 (S3)

>> Ogni router ha due interfacce e quindi due indirizzi: uno nella LAN del proprio sito (qui per convenzione l'ultimo assegnabile, broadcast $-1$) e uno nella sottorete M. Gli host usano gli indirizzi restanti della LAN, e l'interfaccia LAN del router è il loro default gateway.

---
## Slide 21 – Scelta di netmask diverse

![[RT02-s021-1.png|500]]

| Ultimo byte netmask | # host | # subnets |
|:---:|:---:|:---:|
| 00000000 | 254 | 1 |
| 10000000 | 126 | 2 |
| **11000000** | **62** | **4** |
| **11100000** | **30** | **8** |
| 11110000 | 14 | 16 |
| **11111000** | **6** | **32** |
| 11111100 | 2 | 64 |

>> Idea (VLSM, Variable Length Subnet Mask): si dà a ogni sottorete la maschera più lunga che contiene i suoi host. S1 e S2 (50 host) richiedono /26 (62 host), S3 (20 host) basta una /27 (30 host), la MAN, che deve contenere solo i 3 router, basta una /29 (6 host). Le tre righe evidenziate con colori diversi corrispondono a queste tre scelte.

>> **Torna alla nota principale** → [[01 - Instradamento IPv4 e IPv6#Slide 103 – CIDR|slide 103–104 – CIDR e reti di dimensione variabile]]

---
## Slide 22 – Soluzione 2

![[RT02-s022-1.png|600]]

| Subnet | # host | Indirizzi | Broadcast |
|:---:|:---:|:---:|:---:|
| 196.200.96.0/26 | 62 | 1 – 62 | 63 |
| 196.200.96.64/26 | 62 | 65 – 126 | 127 |
| 196.200.96.128/27 | 30 | 129 – 158 | 159 |
| 196.200.96.160/27 | 30 | 161 – 190 | 191 |
| 196.200.96.192/27 | 30 | 193 – 222 | 223 |
| 196.200.96.224/29 | 6 | 225 – 230 | 231 |
| 196.200.96.232/29 | 6 | 233 – 238 | 239 |
| 196.200.96.240/29 | 6 | 241 – 246 | 247 |
| 196.200.96.248/29 | 6 | 249 – 254 | 255 |

>> Le righe colorate sono (con ogni probabilità) quelle assegnate, con gli stessi colori della tabella precedente: le due /26 (verdi) a S1 e S2, la /27 196.200.96.128/27 (rosa) a S3, la /29 196.200.96.248/29 (gialla) alla MAN, sufficiente per le 3 interfacce dei router. Le altre sottoreti (.160/27, .192/27, .224/29, .232/29, .240/29) restano libere per usi futuri, cosa impossibile con la Soluzione 1.
>> I blocchi devono essere allineati alla propria dimensione: una /27 (32 indirizzi) può iniziare solo da un multiplo di 32 (128, 160, 192, 224), una /29 (8 indirizzi) da un multiplo di 8. Per questo la suddivisione procede dalle sottoreti più grandi alle più piccole.
---
## Slide 23 – Soluzione 1

![[RT02-s023-1.png|500]]

- 196.200.96.0/26
- 196.200.96.64/26
- 196.200.96.128/26
- 196.200.96.248/29

>> Rispetto allo schema con quattro /26, qui la rete che collega i tre router usa una /29 (196.200.96.248–255): 8 indirizzi, 6 utilizzabili (.249–.254), sufficienti per i 3 router.
>> In questo modo il resto dello spazio .192–.247 resta libero per altri usi, invece di sprecare una intera /26 (62 indirizzi) per 3 sole interfacce.

---
## Slide 24 – Scelta di netmask diverse

![[RT02-s024-1.png|500]]

| Ultimo byte netmask | # host | # subnets |
| --- | --- | --- |
| 00000000 | 254 | 1 |
| 10000000 | 126 | 2 |
| **11000000** | **62** | **4** |
| **11100000** | **30** | **8** |
| 11110000 | 14 | 16 |
| 11111000 | 6 | 32 |
| **11111100** | **2** | **64** |

>> Con $n$ bit a 1 e $h = 8-n$ bit a 0 nell'ultimo byte: $\#\text{subnets} = 2^{n}$ e $\#\text{host} = 2^{h} - 2$ (si tolgono indirizzo di rete e di broadcast).
>> Le righe evidenziate (verde /26, rosa /27, giallo /30) sono le maschere usate nella Soluzione 3 (colori corrispondenti nelle slide successive).

---
## Slide 25 – Soluzione 3

![[RT02-s025-1.png|500]]

| Subnet | # host | Indirizzi | Broadcast |
| --- | --- | --- | --- |
| 196.200.96.0/26 | 62 | 1 – 62 | 63 |
| 196.200.96.64/26 | 62 | 65 – 126 | 127 |
| 196.200.96.128/27 | 30 | 129 – 158 | 159 |
| 196.200.96.160/27 | 30 | 161 – 190 | 191 |
| 196.200.96.192/27 | 30 | 193 – 222 | 223 |
| 196.200.96.224/28 | 14 | 225 – 238 | 239 |
| 196.200.96.240/30 | 2 | 241 – 242 | 243 |
| 196.200.96.244/30 | 2 | 245 – 246 | 247 |
| 196.200.96.248/30 | 2 | 249 – 250 | 251 |
| 196.200.96.252/30 | 2 | 253 – 254 | 255 |

>> È un esempio di VLSM (Variable Length Subnet Mask): la /24 viene divisa in blocchi di dimensione diversa. Il conteggio torna: $2\cdot 64 + 3\cdot 32 + 16 + 4\cdot 4 = 256$ indirizzi.
>> Regola pratica: si assegnano prima i blocchi più grandi, così ogni blocco inizia a un indirizzo multiplo della propria dimensione (allineamento), condizione necessaria perché rete/maschera siano validi.
>> Le /30 (2 soli host) sono ideali per i collegamenti punto-punto tra due router.

---
## Slide 26 – Soluzione 3

![[RT02-s026-1.png|500]]

- 196.200.96.0/26
- 196.200.96.64/26
- 196.200.96.128/27
- 196.200.96.240/30
- 196.200.96.244/30
- 196.200.96.248/30
- if1, if2, if3

>> Qui i tre router non condividono più un'unica rete: ogni coppia di router è collegata da un link punto-punto dedicato, ciascuno con la propria /30 (2 indirizzi utili, uno per estremo).
>> Ad esempio il router della LAN 196.200.96.0/26 ha if1 sulla LAN, if2 sul link 196.200.96.240/30 verso il router della .64/26 e if3 sul link 196.200.96.244/30 verso il router della .128/27.

---
## Slide 27 – Approfondiamo l'analisi dell'uso della tabella di instradamento

>> **Torna alla nota principale** → [[01 - Instradamento IPv4 e IPv6#Slide 108 – Esempio|slide 108 – Esempio con R1 e R2 (stessa rete)]]
>> **Torna alla nota principale** → [[01 - Instradamento IPv4 e IPv6#Slide 66 – Table lookup|slide 66 – Table lookup e longest prefix match]]

---
## Slide 28 – Domanda

- ***Cosa accade alle tabelle di instradamento nei router lontani dalla network considerata?***

---
## Slide 29 – Esempio

- 4 network sono interconnesse da un singolo router denominato R1
- Il router R1 fornisce il collegamento ad Internet tramite un secondo router R2
- Le 4 network hanno prefisso
	- 137.204.64.0/24
	- 137.204.65.0/24
	- 137.204.66.0/24
	- 137.204.67.0/24

---
## Slide 30 – Esempio

![[RT02-s030-1.png|500]]

- 137.204.64.0/24 da 137.204.64.1 a 137.204.64.254
- 137.204.65.0/24
- 137.204.66.0/24
- 137.204.67.0/24
- R1: 137.204.64.254, 137.204.65.254, 137.204.66.254, 137.204.67.254, 192.168.10.2/30
- 192.168.10.0/30
- R2: 192.168.10.1/30

Tabella R1

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | 192.168.10.1 | ppp0 |
| 137.204.64.0/24 | On link | en0 |
| 137.204.65.0/24 | On link | en1 |
| 137.204.66.0/24 | On link | en2 |
| 137.204.67.0/24 | On link | en3 |
| 192.168.10.0/30 | On link | ppp0 |

>> "On link" significa che la rete è direttamente connessa a un'interfaccia del router: per quelle destinazioni si fa consegna diretta (ARP sull'indirizzo di destinazione). La default route 0.0.0.0/0 manda tutto il resto verso R2 (192.168.10.1).

---
## Slide 31 – Esempio

![[RT02-s031-1.png|500]]

Tabella R2

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | … | ppp1 |
| 137.204.64.0/24 | 192.168.10.2 | ppp0 |
| 137.204.65.0/24 | 192.168.10.2 | ppp0 |
| 137.204.66.0/24 | 192.168.10.2 | ppp0 |
| 137.204.67.0/24 | 192.168.10.2 | ppp0 |
| 192.168.10.0/30 | On link | ppp0 |

>> Per R2 le quattro network non sono direttamente connesse: sono raggiungibili solo tramite R1 (192.168.10.2), quindi compaiono con gateway R1 e interfaccia ppp0. Il gateway della default route ("…") è il router del provider verso Internet, raggiungibile su ppp1.

---
## Slide 32 – Esempio

![[RT02-s032-1.png|500]]

Tabella R1

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | 192.168.10.1 | ppp0 |
| 137.204.64.0/24 | On link | en0 |
| 137.204.65.0/24 | On link | en1 |
| 137.204.66.0/24 | On link | en2 |
| 137.204.67.0/24 | On link | en3 |
| 192.168.10.0/30 | On link | ppp0 |

Tabella R2

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | … | ppp1 |
| 137.204.64.0/24 | 192.168.10.2 | ppp0 |
| 137.204.65.0/24 | 192.168.10.2 | ppp0 |
| 137.204.66.0/24 | 192.168.10.2 | ppp0 |
| 137.204.67.0/24 | 192.168.10.2 | ppp0 |
| 192.168.10.0/30 | On link | ppp0 |

I prefissi raggiungibili compaiono nelle tabelle di tutti i router

>> È la risposta alla domanda di slide 28: senza accorgimenti, ogni prefisso deve comparire (come riga esplicita) anche nei router lontani. Su scala Internet questo farebbe esplodere la dimensione delle tabelle, da cui la necessità dell'aggregazione (slide 38 e seguenti).

---
## Slide 33 – (senza titolo: inoltro in R2 verso 192.168.10.2)

![[RT02-s033-1.png|500]]

>> Tabella di instradamento dell'host 137.204.64.10 (rete 137.204.64.0/24):

| Dest | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | 137.205.64.254 | en0 |
| 137.204.64.0/24 | On link | en0 |

Pacchetto IP: **192.168.10.2**

>> Il pacchetto arriva a R2 da Internet; tabella di R2:

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | … | ppp1 |
| 137.204.64.0/24 | 192.168.10.2 | ppp0 |
| 137.204.65.0/24 | 192.168.10.2 | ppp0 |
| 137.204.66.0/24 | 192.168.10.2 | ppp0 |
| 137.204.67.0/24 | 192.168.10.2 | ppp0 |
| 192.168.10.0/30 | On link | ppp0 |

- Longest prefix match
	- 192.168-10.2 AND 255.255.255.252 = 192.168.10.0
- Consegna diretta a 192.168.10.2 sulla network **192.168.10.0/30**
	- Direct delivery su **ppp0**
	- arp per 192.168.10.2

>> "192.168-10.2" è un refuso della slide per 192.168.10.2. Anche il gateway di default dell'host (137.205.64.254) è evidentemente un refuso per 137.204.64.254, l'interfaccia di R1 sulla rete 137.204.64.0/24 (un gateway deve stare sulla stessa rete dell'host).
>> Calcolo: $2 = 00000010_2$ e $252 = 11111100_2$, quindi $2 \text{ AND } 252 = 0$ e il risultato è 192.168.10.0, che coincide con la riga 192.168.10.0/30 "On link": la destinazione è sulla rete direttamente connessa, R2 la consegna direttamente (risolvendo con ARP l'indirizzo di livello 2 di 192.168.10.2).

---
## Slide 34 – (senza titolo: inoltro in R2 verso 137.204.65.210)

![[RT02-s034-1.png|500]]

>> Tabella di instradamento dell'host 137.204.64.10:

| Dest | Netmask | Gateway | Interface |
| --- | --- | --- | --- |
| 0.0.0.0 | 0.0.0.0 | 137.205.64.254 | en0 |
| 137.204.64.0 | 255.255.255.0 | 137.204.64.10 | en0 |

Pacchetto IP: **137.204.65.210**

>> Il pacchetto arriva a R2 da Internet; tabella di R2:

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | … | ppp1 |
| 137.204.64.0/24 | 192.168.10.2 | ppp0 |
| 137.204.65.0/24 | 192.168.10.2 | ppp0 |
| 137.204.66.0/24 | 192.168.10.2 | ppp0 |
| 137.204.67.0/24 | 192.168.10.2 | ppp0 |
| 192.168.10.0/30 | On link | ppp0 |

- Longest prefix match
	- 137.204.65.210 AND 255.255.255.0 = 137.204.65.0
- Gateway 192.168.10.2
- Consegna indiretta tramite 192.168.10.2 sulla network **192.168.10.0/30** utilizzando **ppp0**

>> La tabella dell'host è qui scritta nella notazione "classica" con colonna Netmask: per la rete locale il gateway coincide con l'indirizzo dell'host stesso (137.204.64.10), che equivale a "On link".
>> In R2 la destinazione corrisponde alla riga 137.204.65.0/24, che ha un gateway: consegna indiretta, cioè il datagramma viene inviato a R1 (ARP su 192.168.10.2, non su 137.204.65.210), mentre l'indirizzo IP di destinazione nel pacchetto resta 137.204.65.210.

---
## Slide 35 – (senza titolo: inoltro in R1 verso 137.204.65.210)

![[RT02-s035-1.png|500]]

>> Tabella di instradamento dell'host 137.204.64.10:

| Dest | Netmask | Gateway | Interface |
| --- | --- | --- | --- |
| 0.0.0.0 | 0.0.0.0 | 137.205.64.254 | en0 |
| 137.204.64.0 | 255.255.255.0 | 137.204.64.10 | en0 |

Pacchetto IP: **137.204.65.210**

>> Il pacchetto è ora arrivato a R1; tabella di R1:

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | 192.168.10.1 | ppp0 |
| 137.204.64.0/24 | On link | en0 |
| 137.204.65.0/24 | On link | en1 |
| 137.204.66.0/24 | On link | en2 |
| 137.204.67.0/24 | On link | en3 |
| 192.168.10.0/30 | On link | ppp0 |

- Longest prefix match
	- 137.204.65.210 AND 255.255.255.0 = 137.204.65.0
- Collegamento diretto
- Consegna indiretta sulla network **137.204.65.0/24** utilizzando **en1**

>> Attenzione: in R1 la riga trovata è "On link", quindi si tratta in realtà di una consegna **diretta** (come dice "Collegamento diretto"): R1 fa ARP per 137.204.65.210 sull'interfaccia en1 e consegna il datagramma direttamente all'host. La dicitura "Consegna indiretta" nella slide va letta in questo senso.

---
## Slide 36 – Analizziamo gli indirizzi delle 4 reti

- 137.204.64.0 il terzo byte è 01000000
- 137.204.65.0 il terzo byte è 01000001
- 137.204.66.0 il terzo byte è 01000010
- 137.204.67.0 il terzo byte è 01000011
	- I primi 2 byte ed i primi 6 bit del terzo byte sono comuni a tutte e quattro le network. Se usiamo NETMASK=255.255.252.0

```
10001001.11001100.01000000.xxxxxxxx      10001001.11001100.01000001.xxxxxxxx
11111111.11111111.11111100.00000000      11111111.11111111.11111100.00000000
10001001.11001100.01000000.00000000      10001001.11001100.01000000.00000000
   137      204      64                     137      204      65

10001001.11001100.01000010.xxxxxxxx      10001001.11001100.01000011.xxxxxxxx
11111111.11111111.11111100.00000000      11111111.11111111.11111100.00000000
10001001.11001100.01000000.00000000      10001001.11001100.01000000.00000000
   137      204      66                     137      204      67
```

- Otteniamo il medesimo risultato in tutti e quattro i casi:
	- Il prefisso di rete è sempre 137.204.**64**.0

>> 255.255.252.0 corrisponde a /22 ($8+8+6 = 22$ bit a 1). I due bit meno significativi del terzo byte (00, 01, 10, 11) sono proprio quelli che distinguono le quattro /24: mascherandoli, tutte e quattro danno 137.204.64.0.
>> Perché l'aggregazione sia esatta servono $2^k$ reti contigue e allineate: qui $4 = 2^2$ reti e 64 è multiplo di 4. Il blocco /22 copre esattamente 137.204.64.0 – 137.204.67.255.

>> **Torna alla nota principale** → [[01 - Instradamento IPv4 e IPv6#Slide 105 – Supernetting|slide 105–106 – Supernetting]]

---
## Slide 37 – Un altro esempio

![[RT02-s037-1.png|500]]

- 137.204.56.0/24 → terzo byte **00111000**
- 137.204.57.0/24 → terzo byte **00111001**
- 137.204.58.0/24 → terzo byte **00111010**
- 137.204.59.0/24 → terzo byte **00111011**
- 137.204.56.0/24 + 137.204.57.0/24 → 137.204.56.0/23, terzo byte **0011100**0
- 137.204.58.0/24 + 137.204.59.0/24 → 137.204.58.0/23, terzo byte **0011101**0
- 137.204.56.0/23 + 137.204.58.0/23 → 137.204.56.0/22, terzo byte **001110**00

>> In rosso (qui in grassetto) i bit che fanno parte del prefisso: a ogni passo di aggregazione due blocchi "fratelli" (che differiscono solo nell'ultimo bit del prefisso) si fondono e il prefisso si accorcia di un bit.
>> Controesempio: 137.204.57.0/24 e 137.204.58.0/24 sono contigue ma NON aggregabili in una /23, perché 57 = 00111001 e 58 = 00111010 differiscono già nel penultimo bit (la /23 che contiene 57 è 137.204.56.0/23).

---
## Slide 38 – Semplificazione delle tabelle

- È necessario che R2 conosca il dettaglio di come le reti sono connesse a R1?
	- R2 invia comunque i datagrammi tramite R1
	- È sufficiente un'informazione più "riassuntiva"
- I route verso le 4 network possono essere aggregate in una sola
- R2 vede le 4 reti come una sola
	- Il gateway verso quelle destinazioni è R1

---
## Slide 39 – Aggregazione

![[RT02-s039-1.png|500]]

>> Tabella di R2:

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | -.-.-.- | ppp1 |
| 137.204.64.0/22 | 192.168.10.2 | ppp0 |
| 192.168.10.0/30 | On link | ppp0 |

Le network
- 137.204.64.0/24
- 137.204.65.0/24
- 137.204.66.0/24
- 137.204.66.0/24

Vengono aggregate in un unico prefisso 137.204.64.0/22

>> Nell'elenco della slide la quarta rete è ripetuta per refuso: si tratta di 137.204.67.0/24.
>> Le 4 righe /24 di R2 (tutte con lo stesso gateway 192.168.10.2 e la stessa interfaccia) diventano un'unica riga /22: la tabella di R1 invece non cambia, perché R1 deve comunque sapere su quale interfaccia si trova ciascuna /24. Questo meccanismo (supernetting / route aggregation, alla base del CIDR) è ciò che tiene sotto controllo la dimensione delle tabelle nei router del backbone.

---
## Slide 40 – Aggregazione

![[RT02-s040-1.png|500]]

Pacchetto IP: **137.204.65.210**

>> Tabella di R2:

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | -.-.-.- | ppp1 |
| 137.204.64.0/22 | 192.168.10.2 | ppp0 |
| 192.168.10.0/30 | On link | ppp0 |

- Longest prefix match
	- 137.204.65.210 AND 255.255.252.0 = 137.204.64.0
- Gateway 192.168.10.2
- Consegna indiretta tramite 192.168.10.2 sulla network **192.168.10.0/30** utilizzando **ppp0**

>> Calcolo sul terzo byte: $65 = 01000001_2$, $252 = 11111100_2$, AND $= 01000000_2 = 64$. Il risultato 137.204.64.0 coincide con la riga /22, quindi il datagramma va a R1 esattamente come prima dell'aggregazione (slide 34): la decisione di inoltro non cambia, cambia solo la dimensione della tabella.

---
## Slide 41 – Perché ordinare i route?

- Dare priorità alle route più specifiche
- L'ordinamento in funzione della Netmask decrescente garantisce di considerare in ordine
	- singoli host
	- reti piccole
	- reti grandi
- È possibile implementare eccezioni a regole generali che possono convivere nella medesima tabella

>> "Netmask decrescente" = dalla maschera più lunga alla più corta: prima le /32 (singoli host), poi prefissi via via più corti, fino alla default route /0 in fondo. Scorrendo la tabella in quest'ordine, la prima riga che fa match è automaticamente il longest prefix match.
>> Un indirizzo può quindi appartenere a più righe (es. una /24 contenuta in una /22, entrambe contenute in /0): vince sempre la più specifica, e così una regola generale (la /22) può convivere con un'eccezione (una /24 diretta altrove).

>> **Torna alla nota principale** → [[01 - Instradamento IPv4 e IPv6#Slide 64 – Lettura della tabella|slide 64 – Lettura della tabella (ordinamento delle righe)]]

---
## Slide 42 – Eccezioni

![[RT02-s042-1.png|500]]

>> Ora la rete 137.204.66.0/24 (interfaccia di R2: 137.204.66.254) è collegata direttamente a R2.

>> Tabella di R1:

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | 192.168.10.1 | ppp0 |
| 137.204.64.0/24 | On link | en0 |
| 137.204.65.0/24 | On link | en1 |
| 137.204.67.0/24 | On link | en3 |
| 192.168.10.0/30 | On link | ppp0 |

>> Tabella di R2:

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | -.-.-.- | ppp1 |
| 137.204.64.0/22 | 192.168.10.2 | ppp0 |
| 137.204.66.0/24 | On link | en0 |
| 192.168.10.0/30 | On link | Ppp0 |

La rotta per 137.204.66.0/24 viene cancellata e non è necessario modificarla perché adesso viene assorbita dalla rotta di default

>> In R1: la riga di 137.204.66.0/24 sparisce e per quella rete non serve aggiungere nulla, perché i pacchetti verso 137.204.66.x seguono la default route verso R2, che è proprio il router giusto.
>> In R2: la /22 verso R1 resta (continua a coprire .64, .65 e .67), e si aggiunge la /24 "On link" come eccezione. Per 137.204.66.x entrambe le righe fanno match, ma la /24 è più specifica e vince: i pacchetti vengono consegnati direttamente su en0 invece che rimandati a R1.

---
## Slide 43 – Eccezioni

![[RT02-s043-1.png|500]]

>> A R2 è ora collegato anche l'host 137.204.66.130 (interfaccia di R2: 137.204.66.129).

>> Tabella di R1:

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | 192.168.10.1 | ppp0 |
| 137.204.64.0/24 | On link | en0 |
| 137.204.65.0/24 | On link | en1 |
| 137.204.67.0/24 | On link | en3 |
| 192.168.10.0/30 | On link | ppp0 |

>> Tabella di R2:

| Prefix | Gateway | Interface |
| --- | --- | --- |
| 0.0.0.0/0 | -.-.-.- | ppp1 |
| 137.204.64.0/22 | 192.168.10.2 | ppp0 |
| 137.204.66.0/24 | On link | en0 |
| 137.204.66.128/30 | On link | en1 |
| 192.168.10.0/30 | On link | ppp0 |

>> Eccezione dentro l'eccezione: 137.204.66.128/30 (indirizzi .128–.131, utili .129 e .130) è contenuta in 137.204.66.0/24, che a sua volta è contenuta in 137.204.64.0/22. Per la destinazione 137.204.66.130 fanno match tre righe (/22, /24, /30) più la default: vince la /30, quindi consegna diretta su en1.
>> Conseguenza: gli indirizzi .128–.131 non sono più utilizzabili dagli host sulla rete di en0, perché R2 li instraderebbe sempre su en1.

---
## Riassunto

>> **Riassemblamento IPv4**
>> - Lo fa solo il destinatario finale; i frammenti dello stesso datagramma sono individuati da sorgente, destinazione, protocollo e Identification (BUFID).
>> - Fragment Offset in unità di 8 byte: i dati di ogni frammento tranne l'ultimo sono multipli di 8. MTU minima garantita: 68 byte (header max 60 + 8 di dati).
>> - FO = 0 e MF = 0: datagramma non frammentato. Solo l'ultimo frammento (MF = 0) dà la lunghezza totale: $TDL = TL - 4\cdot IHL + 8\cdot FO$.
>> - RFC 791: bit table RCVBT (un bit per blocco di 8 byte) più timer che scarta i buffer incompleti; poco efficiente.
>> - RFC 815: lista dei "buchi", inizialmente uno solo $[0, \infty]$. Un frammento che interseca un buco lo elimina e crea fino a due buchi nuovi (a destra solo se MF = 1). Il datagramma è completo quando non restano buchi; duplicati e sovrapposizioni sono gestiti in modo naturale.
>>
>> **Subnetting**
>> - Con $n$ bit di subnet e $h$ bit di host: $2^n$ sottoreti da $2^h - 2$ host (si escludono indirizzo di rete e broadcast).
>> - Ricordarsi di contare anche la rete che collega i router.
>> - Netmask uniforme (quattro /26): semplice ma spreca indirizzi.
>> - VLSM: a ogni sottorete la maschera più lunga che basta (/26 per 50 host, /27 per 20, /29 o /30 per i router). Si assegnano prima i blocchi grandi; ogni blocco inizia da un multiplo della propria dimensione. Le /30 sono ideali per i link punto-punto.
>>
>> **Tabella di instradamento**
>> - Longest prefix match: AND tra destinazione e netmask di ogni riga, vince il prefisso più lungo che coincide.
>> - "On link": consegna diretta, ARP sulla destinazione. Riga con gateway: consegna indiretta, ARP sul gateway, mentre l'IP di destinazione resta invariato.
>> - Ordinare le rotte per netmask decrescente (/32 … /0) fa sì che la prima corrispondenza sia la più specifica.
>>
>> **Aggregazione (CIDR)**
>> - $2^k$ reti contigue e allineate si aggregano togliendo $k$ bit: 137.204.64–67.0/24 diventano 137.204.64.0/22 (255.255.252.0).
>> - Riduce le tabelle dei router lontani senza cambiare le decisioni di inoltro.
>> - Eccezioni: una rotta più specifica (/24, /30) può convivere con quella aggregata e vince per le sue destinazioni.
