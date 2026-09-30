[2LAN with Gateway](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/laboratori/Laboratorio 2 - 28:09/2LAN with Gateway.pdf>)

# Laboratorio 2 – Due LAN collegate da due router (GNS3)

> Appunti di laboratorio (28/09): passaggi eseguiti in GNS3 su Mac, problemi incontrati e come li ho risolti. Non è una trascrizione completa delle slide.

## Indice

1. [[#1. Importare l'immagine del router c3725|Importare l'immagine del router c3725]] (slide 2–17)
2. [[#2. Prima topologia: R1 – R2|Prima topologia R1 – R2]] (slide 18–32)
3. [[#3. Topologia con 2 LAN e 2 router|Topologia con 2 LAN e 2 router]] (slide 33–43)
4. [[#4. Logica del piano di indirizzamento|Logica del piano di indirizzamento]]
5. [[#5. Concetti da ricordare|Concetti da ricordare]]
6. [[#Riassunto|Riassunto]]

---
## 1. Importare l'immagine del router c3725

**Immagine usata:** `C3725-AD.BIN` (Cisco IOS 12.4(25d), c3725 Advanced Enterprise), salvata in `Documents/lab/reti/2`. Le slide usano la 12.4(15)T14: per il laboratorio va bene lo stesso.

**Percorso in GNS3:** Edit → Preferences → Dynamips → IOS routers → **New**
1. *Run this IOS router on my local computer* → Next
2. **Browse…** → selezionare il file `.bin` (se chiede di decomprimere → **Yes**)
3. Name / Platform: `c3725`
4. RAM: **128 MB**
5. Network adapters: slot 0 `GT96100-FE`, slot 1 `NM-1FE-TX`, slot 2 `NM-1FE-TX`
6. WIC: `WIC-1T`, `WIC-1T`, `WIC-2T`
7. Idle-PC: *Idle-PC finder*, oppure a mano `0x602467a4` → Finish → Apply → OK

>> **Errore "Sorry, this is not a valid IOS image!"**
>> GNS3 controlla i primi byte del file: accetta solo un eseguibile ELF 32 bit big-endian (i vecchi router Cisco MIPS/PowerPC).
>> - Il file scaricato era un **archivio `.rar`**: rinominarlo in `.bin` **non** lo estrae. Va estratto (`tar -xf nomefile` nel Terminale, trascinando il file nella finestra per avere il nome giusto, oppure The Unarchiver/Keka) e poi va selezionato il `.bin` che c'è dentro.
>> - L'immagine `i86bi-linux-l2-…bin` del "Materiale a supporto" è un'immagine **IOU** (Linux x86), non Dynamips: va in *IOS on UNIX → IOU Devices*, e su Mac Apple Silicon probabilmente richiede la GNS3 VM.

---
## 2. Prima topologia: R1 – R2

- Trascinare due router c3725 nell'area di lavoro (R1, R2), collegarli con **Add a link** su `FastEthernet0/0`.
- **Start** (tasto verde) → **Console** per aprire i terminali.
- All'avvio tutte le interfacce sono **administratively down**: vanno accese a mano.

```
R1# configure terminal
R1(config)# interface fa0/0
R1(config-if)# no shutdown
R1(config-if)# end
```

Verifica e salvataggio:

```
R1# show ip interface brief     (sh ip int br)
R1# show version                (sh ver)
R1# copy running-config startup-config   (wr)
```

>> **Errore `% Invalid input detected at '^' marker`** con `int fa0/0`: ero in modalità privilegiata (`R1#`). Prima serve `conf t`. La parte `R1(config)#` è il **prompt**, non va digitata.

>> Messaggi all'avvio come `%SW_VLAN-4-IFS_FAILURE ... No device available` sono normali nel c3725 emulato e si possono ignorare.

---
## 3. Topologia con 2 LAN e 2 router

![[RTL02-s034-1.png|650]]

| Dispositivo | Interfaccia | Indirizzo | Gateway |
|---|---|---|---|
| PC1 | e0 | 10.1.1.2/24 | 10.1.1.1 |
| PC2 | e0 | 10.1.1.3/24 | 10.1.1.1 |
| R1 | verso LAN1 | 10.1.1.1/24 | – |
| R1 | verso R2 | 10.0.0.1/30 | – |
| R2 | verso R1 | 10.0.0.2/30 | – |
| R2 | verso LAN2 | 10.1.2.1/24 | – |
| PC3 | e0 | 10.1.2.2/24 | 10.1.2.1 |
| PC4 | e0 | 10.1.2.3/24 | 10.1.2.1 |

>> **Attenzione – incongruenza nelle slide:** il disegno collega i router su `e0/0` ed `e1/0`, mentre i comandi delle slide 36 e 38 configurano `FastEthernet0/1`. **L'IP va messo sull'interfaccia dove c'è davvero il cavo.** Nel mio progetto i cavi sono R1 Fa0/0 ↔ Switch1, R1 **Fa1/0** ↔ R2 Fa0/0, R2 **Fa1/0** ↔ Switch2, quindi ho usato Fa1/0 al posto di Fa0/1.

**Router 1**

```
R1# conf t
R1(config)# interface fa0/0
R1(config-if)# ip address 10.1.1.1 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# interface fa1/0
R1(config-if)# ip address 10.0.0.1 255.255.255.252
R1(config-if)# no shutdown
R1(config-if)# exit
R1(config)# ip route 10.1.2.0 255.255.255.0 10.0.0.2
R1(config)# end
R1# wr
```

**Router 2**

```
R2# conf t
R2(config)# interface fa0/0
R2(config-if)# ip address 10.0.0.2 255.255.255.252
R2(config-if)# no shutdown
R2(config-if)# interface fa1/0
R2(config-if)# ip address 10.1.2.1 255.255.255.0
R2(config-if)# no shutdown
R2(config-if)# exit
R2(config)# ip route 10.1.1.0 255.255.255.0 10.0.0.1
R2(config)# end
R2# wr
```

**PC (VPCS)** – sintassi `ip <indirizzo> <netmask> <gateway>`, poi `save`:

```
PC1> ip 10.1.1.2 255.255.255.0 10.1.1.1
PC2> ip 10.1.1.3 255.255.255.0 10.1.1.1
PC3> ip 10.1.2.2 255.255.255.0 10.1.2.1
PC4> ip 10.1.2.3 255.255.255.0 10.1.2.1
```

**Test:** `PC1> ping 10.1.2.3` e `PC4> ping 10.1.1.3`. Il primo pacchetto in *timeout* è normale (ARP), poi risponde con `ttl=62` (due router attraversati: 64 − 2).

>> **Sintomi dell'errore sulle interfacce** (IP su Fa0/1 senza cavo):
>> - `PC4> ping 10.1.1.3` → `host (10.1.2.1) not reachable`: il PC non raggiunge nemmeno il suo gateway;
>> - `PC1> ping 10.1.2.3` → solo timeout: il pacchetto arriva a R1 ma non passa verso R2.

**Debug in ordine:**
1. `sh ip int br` su ogni router → le interfacce con IP devono essere **up/up**
2. `sh ip route` → deve esserci la riga `S` della rotta statica
3. ping dal PC al **proprio gateway**, poi al router remoto, poi al PC remoto
4. in GNS3, passare il mouse sui cavi per vedere quali interfacce collegano

---
## 4. Logica del piano di indirizzamento

Gli indirizzi non sono casuali: seguono regole tipiche della progettazione di una piccola rete.

1. **Indirizzi privati**: tutto è nel blocco `10.0.0.0/8`, uno dei tre riservati alle reti private (RFC 1918, insieme a `172.16.0.0/12` e `192.168.0.0/16`). Non è usato su Internet, quindi non crea conflitti, ed è il blocco più grande da suddividere.
2. **Ogni collegamento è una rete IP separata**: un router collega reti *diverse*, quindi qui le reti sono tre. Due interfacce dello stesso router non possono stare nella stessa rete.

| Rete | Indirizzo | Uso |
|---|---|---|
| LAN1 | `10.1.1.0/24` | PC1, PC2, R1 |
| LAN2 | `10.1.2.0/24` | PC3, PC4, R2 |
| Collegamento R1–R2 | `10.0.0.0/30` | R1, R2 |

3. **Il terzo ottetto indica la LAN**: `10.1.1.x` = LAN 1, `10.1.2.x` = LAN 2. Leggendo `10.1.2.3` si capisce subito che è un PC della LAN 2. Una LAN 3 sarebbe `10.1.3.0/24`.
4. **Il gateway è `.1`**: il router prende il primo indirizzo utilizzabile della LAN (`10.1.1.1`, `10.1.2.1`) e i PC seguono (`.2`, `.3`). Non è obbligatorio, ma è una convenzione diffusa: conoscendo la rete si conosce anche il gateway.
5. **/30 sul collegamento tra router**: `255.255.255.252` dà 4 indirizzi, cioè esattamente i 2 che servono su un collegamento punto-punto.
	- `10.0.0.0` → indirizzo di rete
	- `10.0.0.1` → R1
	- `10.0.0.2` → R2
	- `10.0.0.3` → broadcast
	
	Una /24 (254 host) sarebbe uno spreco. Il secondo ottetto diverso (`10.0.x` invece di `10.1.x`) separa a colpo d'occhio i collegamenti tra router dalle LAN degli utenti.
6. **/24 sulle LAN**: la più comoda da leggere (i primi tre numeri sono la rete, l'ultimo l'host) e basta per 254 dispositivi.

**Schema di lettura** dell'indirizzo `10 . A . B . C`:
- `10` → rete privata
- `A` → tipo di rete: `1` = LAN utenti, `0` = collegamento tra router
- `B` → numero della LAN
- `C` → dispositivo, con il router sempre a `.1`

>> I numeri si possono cambiare e la rete funziona lo stesso, purché ogni rete sia distinta e ogni PC abbia come gateway l'indirizzo del router **nella sua stessa rete**.

---
## 5. Concetti da ricordare

- **Topologia**: lo schema della rete, cioè quali dispositivi ci sono e come sono collegati. "Topologia Cisco" = topologia costruita con router Cisco.
- **Modalità della CLI Cisco (IOS)**:
	- `R1>` utente → `enable` → `R1#` privilegiata
	- `R1#` → `configure terminal` → `R1(config)#` configurazione globale
	- `R1(config)#` → `interface fa0/0` → `R1(config-if)#` configurazione interfaccia
	- `end` (o Ctrl+Z) torna a `R1#`
- **Abbreviazioni**: `conf t`, `int`, `no shut`, `sh ip int br`; `?` mostra i comandi disponibili, Tab completa.
- **running-config** (RAM, si perde allo spegnimento) vs **startup-config** (NVRAM, caricata all'avvio): salvare con `wr` / `copy run start`.
- Le interfacce partono **administratively down**: servono `no shutdown`.
- Nomi interfacce: `FastEthernet<slot>/<porta>`; il c3725 è modulare, le schede `NM-1FE-TX` negli slot 1 e 2 aggiungono Fa1/0 e Fa2/0, i WIC aggiungono le Serial.
- **Rotte statiche**: `ip route <rete> <netmask> <next hop>`. Ogni router conosce solo le reti direttamente connesse; per raggiungere la LAN dall'altra parte serve dirgli a chi inoltrare.
- **/30** (255.255.255.252) sul collegamento punto-punto tra router: 2 soli host utilizzabili (10.0.0.1 e 10.0.0.2).

---
## Riassunto

Nel laboratorio 2 si importa in GNS3 l'immagine IOS del router Cisco c3725 (Dynamips) e la si usa prima per una topologia minima R1–R2 e poi per collegare due LAN, ciascuna con due PC VPCS e uno switch, tramite due router. Ogni router ha un'interfaccia verso la propria LAN (/24) e una verso l'altro router (/30); con una rotta statica per parte i due router sanno raggiungere la LAN remota, e i PC usano il router della propria LAN come gateway. I problemi incontrati sono stati tre: l'immagine IOS ancora compressa in `.rar` (va estratta, non rinominata), i comandi di interfaccia dati fuori dalla modalità `conf t`, e gli indirizzi IP messi su un'interfaccia (Fa0/1) diversa da quella collegata col cavo (Fa1/0). Il piano di indirizzamento segue uno schema leggibile: `10.1.<LAN>.x/24` per le LAN con il router a `.1`, e `10.0.0.0/30` per il collegamento punto-punto tra i router. Ricordarsi sempre di salvare con `wr` sui router e `save` sui PC.
