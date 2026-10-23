[RIP](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/laboratori/Laboratorio 4 - 12:10/RIP.pdf>)

# Laboratorio 4 – RIP su router Cisco (GNS3)

>> Teoria corrispondente: [[04 - Instradamento nelle reti a pacchetto e in Internet#Slide 47 – Routing Information Protocol (RIP)|nota 04, slide 47–56 (RIP)]]. Laboratorio precedente: [[02 - Laboratorio 2 - Due LAN collegate da due router]].

## Indice

1. **Il router Cisco C3745** (slide 2–3)
	- [[#Slide 2 – CISCO C3745|Router modulare emulato in GNS3]]
	- [[#Slide 3 – Cisco C3745|Moduli di rete e interfacce FastEthernet]]
2. **RIP: principi e algoritmo distanza-vettore** (slide 4–10)
	- [[#Slide 4 – RIP|Introduzione a RIP]]
	- [[#Slide 5 -> 7 – RIP – Cenni di Teoria|Definizione: routing dinamico per reti piccole e medie]]
		- Funzionamento dell'algoritmo distanza-vettore
	- [[#Slide 8 – Algoritmo di Distanza-Vettore (RIP)|Esempio di scambio delle tabelle tra tre router]]
	- [[#Slide 9 -> 10 – RIP – Cenni di Teoria|Metrica hop count e limite di 15 hop]]
		- Aggiornamenti periodici ogni 30 secondi
3. **Count-to-infinity e contromisure** (slide 11–13)
	- [[#Slide 11 – PROBLEMI del RIP|Il problema del count-to-infinity]]
	- [[#Slide 12 -> 17 – RIP – Cenni di Teoria|Split horizon]]
		- Poison reverse
4. **Convergenza, versioni, vantaggi e limiti di RIP** (slide 14–17)
	- [[#Slide 12 -> 17 – RIP – Cenni di Teoria|Convergenza e versioni RIPv1, RIPv2, RIPng]]
		- Esempio di funzionamento con tre router
		- Vantaggi e limiti
		- Confronto con OSPF ed EIGRP
5. **Laboratorio RIP: topologia** (slide 18–21)
	- [[#Slide 18 – RIP - LABORATORIO|Introduzione al laboratorio]]
	- [[#Slide 19 -> 21 – Laboratorio RIP - Topologia|Schema e piano di indirizzamento]]
		- Topologia generale con tre router e tre PC
		- Collegamenti tra le interfacce
6. **Laboratorio RIP: configurazione dei dispositivi** (slide 22–29)
	- [[#Slide 22 -> 29 – Laboratorio RIP – Configurazione Dispositivi|Schema GNS3 con gli indirizzi]]
		- R1: indirizzi IP delle interfacce
		- R1: attivazione di RIPv2
		- R2: indirizzi IP e RIP
		- R3: indirizzi IP e RIP
		- Configurazione dei PC VPCS
7. **Laboratorio RIP: verifica delle tabelle di routing** (slide 30–32)
	- [[#Slide 30 -> 32 – Laboratorio RIP – Verifica della Configurazione|R1: interfacce, database RIP e tabella di routing]]
		- Verifica su R2
		- Verifica su R3
8. **Laboratorio RIP: verifica con ping tra i PC** (slide 33–35)
	- [[#Slide 33 -> 35 – Laboratorio RIP – Verifica della Funzionamento|Ping da PC1 verso PC2 e PC3]]
		- Ping da PC2
		- Ping da PC3

---
## Slide 1 – Laboratorio di RETI di TELECOMUNICAZIONE

**Laboratorio di**
**RETI di TELECOMUNICAZIONE**

Dipartimento di Ingegneria Scienze e Informatica

---
## Slide 2 – CISCO C3745

![[RTL04-s002-1.png|500]]

>> Il Cisco 3745 è un router modulare (serie 3700) che in GNS3 viene emulato tramite Dynamips caricando l'immagine IOS reale. Di base offre due porte FastEthernet integrate (Fa0/0 e Fa0/1); gli slot per moduli di rete (NM) aggiungono ulteriori interfacce, che IOS chiama `FastEthernet1/0`, `FastEthernet2/0`, ... (numero di slot / numero di porta).

---
## Slide 3 – Cisco C3745

![[RTL04-s003-1.png|500]]

>> Nella foto si vedono i moduli di rete estraibili: è per questo che negli output `show ip interface brief` delle slide 30–32 compaiono anche FastEthernet1/0, 2/0 e 3/0 (moduli NM-1FE-TX installati negli slot 1, 2 e 3 in GNS3).

---
## Slide 4 – RIP

---
## Slide 5 -> 7 – RIP – Cenni di Teoria

>> La teoria completa di RIP (formato dei messaggi, timer, RIPv1 vs RIPv2) è nella nota "04 - Instradamento nelle reti a pacchetto e in Internet", slide 47–56.

Il **Routing Information Protocol (RIP)** è un protocollo di routing dinamico utilizzato per scambiare informazioni sulle reti tra i router in una rete IP.

RIP è uno dei protocolli di routing più semplici e viene utilizzato **in reti di piccole o medie** dimensioni per distribuire informazioni sulle tabelle di routing.

Si basa su un algoritmo di **distanza-vettore** e utilizza la **metrica del numero di salti (hop count)** per determinare il percorso migliore verso una destinazione.

>> RIP è un IGP (Interior Gateway Protocol): si usa all'interno di un singolo sistema autonomo. I messaggi RIP viaggiano su UDP, porta 520 (RIPv2 usa l'indirizzo multicast 224.0.0.9; RIPv1 il broadcast).
>> "Dinamico" significa che le tabelle non sono scritte a mano (routing statico, `ip route ...`) ma si costruiscono e si aggiornano da sole scambiando messaggi tra router.

**Come funziona RIP:**

- **Algoritmo di Distanza-Vettore**: RIP utilizza l'algoritmo di distanza-vettore, che funziona in questo modo:
	1. Ogni router mantiene una tabella di routing che contiene le informazioni sulle reti conosciute e le distanze (numero di salti) verso di esse.
	2. Periodicamente, ogni router invia l'intera tabella di routing ai propri vicini (router collegati direttamente).
	3. I router ricevono le tabelle di routing dai loro vicini, aggiornano la propria tabella aggiungendo 1 alla distanza e selezionano il percorso con il minor numero di salti per raggiungere ogni rete.

>> È l'algoritmo di Bellman-Ford distribuito: se $D_x(y)$ è la distanza del router $x$ dalla rete $y$ e $c(x,v)=1$ il costo verso ogni vicino $v$, allora
>> $$D_x(y) = \min_{v \in \text{vicini}(x)} \{\, c(x,v) + D_v(y) \,\}$$
>> Il "vettore" è l'elenco (rete, distanza) che ogni router manda ai vicini; nessun router conosce la topologia completa, ma solo "verso quale vicino" e "a che distanza" sta ogni rete.

---
## Slide 8 – Algoritmo di Distanza-Vettore (RIP)

![[RTL04-s008-1.png]]

**Algoritmo di Distanza-Vettore (RIP)**

RIP è un protocollo di routing a distanza-vettore. Ogni router conosce solo le reti direttamente connesse e scopre le altre reti scambiando periodicamente la propria tabella di routing con i vicini.

*Topologia di esempio*: R1 — R2 — R3, con la rete 192.168.1.0/24 collegata a R1 e la rete 192.168.3.0/24 collegata a R3.

**1 – Ogni router mantiene la propria tabella di routing**
Ogni router conosce inizialmente solo le reti direttamente connesse, con distanza 0.

Router R1:

| Rete di destinazione | Distanza (numero di salti) | Next hop |
| --- | --- | --- |
| 192.168.1.0/24 | 0 | - |

Router R2:

| Rete di destinazione | Distanza (numero di salti) | Next hop |
| --- | --- | --- |
| - | - | - |

Router R3:

| Rete di destinazione | Distanza (numero di salti) | Next hop |
| --- | --- | --- |
| 192.168.3.0/24 | 0 | - |

**2 – Scambio periodico delle tabelle di routing**
Periodicamente (ogni 30 secondi), ogni router invia l'intera tabella di routing ai propri vicini direttamente connessi.

| Tabella di R1 (inviata a R2) | |
| --- | --- |
| 192.168.1.0/24 | 0 |

| Tabella di R3 (inviata a R2) | |
| --- | --- |
| 192.168.3.0/24 | 0 |

Ogni router invia la propria tabella completa, che contiene tutte le reti conosciute e le relative distanze (numero di salti).

**3 – Aggiornamento delle tabelle di routing**
Quando un router riceve la tabella di routing da un vicino, aggiunge 1 alla distanza (per il salto verso il vicino) e seleziona, per ogni rete, il percorso con il minor numero di salti.

Router R2 dopo la ricezione delle tabelle:

| Rete di destinazione | Distanza (numero di salti) | Next hop |
| --- | --- | --- |
| 192.168.1.0/24 | 1 | R1 |
| 192.168.3.0/24 | 1 | R3 |

Router R1 dopo l'aggiornamento:

| Rete di destinazione | Distanza (numero di salti) | Next hop |
| --- | --- | --- |
| 192.168.1.0/24 | 0 | - |
| 192.168.3.0/24 | 2 | R2 |

Router R3 dopo l'aggiornamento:

| Rete di destinazione | Distanza (numero di salti) | Next hop |
| --- | --- | --- |
| 192.168.3.0/24 | 0 | - |
| 192.168.1.0/24 | 2 | R2 |

**Risultato:** dopo alcuni scambi di aggiornamenti, tutti i router conoscono tutte le reti della topologia e per ognuna selezionano il percorso con il minor numero di salti (metrica di RIP).

>> Nota: l'infografica semplifica, perché anche i due collegamenti R1–R2 e R2–R3 sono reti IP (nel laboratorio: 192.168.1.0/24 e 192.168.2.0/24) che R2 conosce come direttamente connesse. Inoltre servono due giri di scambi: prima R2 impara le reti di R1 e R3 (distanza 1), poi le ri-annuncia e R1 e R3 imparano la rete "opposta" a distanza 2.
>> In Cisco IOS una rete direttamente connessa viene annunciata con metrica 1 (e non 0 + 1 aggiunto da chi riceve): il risultato finale è identico, il vicino la installa a 1 salto.

---
## Slide 9 -> 10 – RIP – Cenni di Teoria

- **Metrica Hop Count**:

La distanza tra un router e una rete è misurata in termini di **hop**, cioè il numero di router intermedi tra la sorgente e la destinazione.
**La metrica massima supportata da RIP è 15 hop**.
Se una rete è oltre 15 hop, viene considerata irraggiungibile.

>> In pratica il valore 16 rappresenta "infinito" (rete irraggiungibile): è il motivo per cui RIP non scala oltre reti con diametro di 15 router.
>> L'hop count ignora la banda: un percorso di 2 salti su link lenti viene preferito a uno di 3 salti su link veloci. Protocolli come OSPF usano invece un costo legato alla banda.

- **Messaggi di Aggiornamento Periodico**:
	- I router inviano messaggi di aggiornamento ogni 30 secondi per condividere le loro tabelle di routing con i vicini.
	- Questi aggiornamenti contengono informazioni sulle reti conosciute e le distanze verso di esse.

>> Oltre all'update timer (30 s), Cisco IOS usa altri tre timer (visibili con `show ip protocols`): *invalid* 180 s (se una rotta non viene più ri-annunciata, viene marcata come non valida, metrica 16), *hold-down* 180 s (per un po' si ignorano annunci "peggiori" della rotta caduta, per evitare loop) e *flush* 240 s (la rotta viene cancellata dalla tabella).
>> Quando cambia qualcosa, i router inviano anche *triggered update* immediati, senza aspettare i 30 s.

---
## Slide 11 – PROBLEMI del RIP

![[RTL04-s011-1.png|350]]

```
[Rete X]———[ R1 ]———[ R2 ]
             |
       (R1 conosce X)
```

**R1** ha la rete X direttamente collegata (distanza 0).
**R2** impara da R1: "X è a 1 salto via R1".
Ora immaginate che **la rete X si guasti** o che il collegamento R1–X cada. Cosa succede con il semplice Distance-Vector?
R1 si accorge che X non è più raggiungibile → la mette a **16 (infinito)**.
**Ma prima che R1 invii l'aggiornamento**, R2 invia la sua tabella a R1: *"X è a 1 salto da me"*.
R1 pensa: *"Ah! R2 sa come raggiungere X! Allora X è a 2 salti via R2"*.
R1 aggiorna la sua tabella: X → 2 salti via R2.
R1 invia a R2: *"X è a 2 salti"*.
R2 aggiorna: X → 3 salti via R1.
R1 → 4, R2 → 5, R1 → 6... **e così via all'infinito** (fino a 16).

👉 Questo si chiama **count-to-infinity** (conteggio verso l'infinito). Il pacchetto gira in loop tra R1 e R2.

>> Il problema nasce dal fatto che il vettore distanza non dice *attraverso chi* passa la rotta: R1 non sa che il "1 salto" di R2 passa proprio da R1 stesso. Le buone notizie si propagano in fretta, le cattive lentamente.
>> Proprio per questo "infinito" vale solo 16: il conteggio si ferma dopo al massimo ~15 scambi (con aggiornamenti ogni 30 s potrebbero volerci minuti). Durante il conteggio i pacchetti destinati a X rimbalzano tra R1 e R2 finché il TTL non si esaurisce.

---
## Slide 12 -> 17 – RIP – Cenni di Teoria

![[RTL04-s012-1.png|350]]

```
[Rete X]———[ R1 ]———[ R2 ]
             |
       (R1 conosce X)
```

**SOLUZIONI**

**Split Horizon**: Se un router **impara** una rotta da una certa interfaccia, **non deve riannunciare** quella stessa rotta **su quella stessa interfaccia**.

**Esempio:**
R2 impara la rotta verso X **dall'interfaccia che punta a R1**.
Con Split Horizon, R2 **non annuncia X a R1** (perché l'ha imparata proprio da R1).
Così R1 non può mai pensare erroneamente che R2 sia una via alternativa per X.

**Limite**
Split Horizon **da solo** non basta. Funziona bene per loop a 2 router, ma non risolve tutti i casi (es. topologie con 3+ router in anello). Per questo serve anche il Poison Reverse.

>> Idea intuitiva: "non raccontare a qualcuno una notizia che ti ha dato lui". In Cisco IOS lo split horizon è attivo di default sulle interfacce Ethernet (si vede/modifica con `ip split-horizon` a livello di interfaccia).

![[RTL04-s013-1.png|350]]

```
[Rete X]———[ R1 ]———[ R2 ]
             |
       (R1 conosce X)
```

**SOLUZIONI**

**Poison Reverse:** È l'**opposto** di Split Horizon nel comportamento, ma con lo **stesso obiettivo**. Invece di **non annunciare** la rotta appresa da un vicino, il router **la annuncia di nuovo a quel vicino** — ma con **metrica 16 (infinito)**, cioè "irraggiungibile".

ESEMPIO
R2 impara X da R1 (distanza 1).
Con Poison Reverse, R2 **annuncia X a R1** dicendo: *"X è a 16 salti da me"*.
R1 riceve l'informazione e pensa: *"OK, R2 NON è una via per X"*.
R1 mantiene la sua rotta diretta (distanza 0).

>> Il vantaggio rispetto allo split horizon "semplice" è che l'informazione negativa è esplicita: R1 non deve aspettare la scadenza di un timer per escludere R2 come alternativa. Il costo è che i messaggi di update sono più lunghi.
>> Attenzione: neanche split horizon + poison reverse eliminano del tutto il count-to-infinity in anelli di 3 o più router (l'informazione "vecchia" può arrivare da un terzo router); in quei casi intervengono il limite 16 e i timer di hold-down. Da non confondere con il *route poisoning*: è R1 che annuncia subito la rete X guasta con metrica 16.

- **Convergenza**:
	- Quando una rete cambia (ad esempio, una rete diventa non raggiungibile), i router aggiornano le loro tabelle di routing e trasmettono questi aggiornamenti ai vicini.
	- La convergenza è il tempo necessario affinché tutte le tabelle di routing si aggiornino correttamente dopo una modifica della rete. Con RIP, questo processo può richiedere del tempo, specialmente in reti più grandi.

- **Versioni di RIP**:
	- **RIP v1**: Supporta solo il **routing classful**, quindi non invia informazioni sulle subnet mask, il che significa che tutte le reti devono utilizzare la stessa subnet mask (non supporta il VLSM). **Variable Length Subnet Masking è** una tecnica di subnetting che consente l'uso di subnet mask di lunghezza variabile all'interno della stessa rete, permettendo una suddivisione più efficiente dello spazio degli indirizzi IP.
	- **RIP v2**: È un miglioramento della versione 1 e supporta il **routing classless**, inviando informazioni sulle subnet mask (supporta il VLSM).
	- **RIPng (RIP next generation)**: È una versione di RIP progettata per le reti IPv6.

>> Esempio di VLSM: da 192.168.1.0/24 si possono ricavare una /26 (62 host) per una LAN e diverse /30 (2 host) per i collegamenti punto-punto tra router. RIPv1, non trasmettendo la maschera, non può distinguerle.
>> Altre differenze di RIPv2: aggiornamenti in multicast (224.0.0.9) invece che in broadcast, campo next hop e autenticazione dei messaggi. Nel laboratorio si usa `version 2`.

**Esempio di Funzionamento:**

Immaginate tre router collegati tra loro:
- **R1** ha una connessione alla rete **192.168.1.0/24**.
- **R2** ha una connessione alla rete **192.168.2.0/24**.
- **R3** ha una connessione alla rete **192.168.3.0/24**.

Quando RIP è abilitato su tutti i router, ognuno invia aggiornamenti ai propri vicini.
Se **R1** riceve un aggiornamento da **R2** con la rotta verso **192.168.2.0/24** con un hop di 1, aggiornerà la sua tabella di routing con questa informazione.
Lo stesso accade per **R3**, che invia la sua rete agli altri due router.

>> Se i router sono in catena R1 — R2 — R3, alla convergenza R1 raggiunge 192.168.2.0/24 con metrica 1 (via R2) e 192.168.3.0/24 con metrica 2 (via R2); simmetricamente R3 vede 192.168.1.0/24 a 2 salti. È esattamente ciò che si osserverà nelle tabelle `show ip route` del laboratorio (righe `[120/1]` e `[120/2]`).

1. **Vantaggi di RIP:**
- **Semplicità**: RIP è facile da configurare e da capire.
- **Ampio supporto**: RIP è uno dei protocolli di routing più ampiamente supportati ed è presente su molti dispositivi di rete.

2. **Limiti di RIP:**
- **Scalabilità**: A causa della metrica limitata a 15 hop, RIP non è adatto a reti di grandi dimensioni.
- **Lento nella convergenza**: RIP può richiedere tempo per convergere, soprattutto in reti complesse.
- **Nessun supporto per reti senza classi in RIP v1**: RIP v1 non supporta VLSM o CIDR, il che limita l'uso in reti più avanzate. **Classless Inter-Domain Routing (CIDR) è** un metodo di allocazione e routing degli indirizzi IP che sostituisce il vecchio sistema basato sulle classi (classful). Consente di aggregare indirizzi IP per ridurre la quantità di tabelle di routing e l'uso dello spazio IP

>> Esempio di aggregazione CIDR: le quattro reti 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24 e 192.168.3.0/24 condividono i primi 22 bit e si possono annunciare con un'unica rotta 192.168.0.0/22.
>> Un ulteriore limite: l'invio dell'intera tabella ogni 30 s genera traffico anche quando nulla cambia.

In generale, **RIP** è utilizzato principalmente in reti più piccole o in ambienti dove la semplicità è più importante delle prestazioni.
In reti più grandi, protocolli come **OSPF** o **EIGRP** sono preferibili.
**Enhanced Interior Gateway Routing Protocol è** un protocollo di routing proprietario di Cisco che combina i vantaggi dei protocolli di routing di distanza-vettore e di stato del collegamento.
È più veloce e scalabile di RIP e supporta reti più complesse.

>> OSPF è un protocollo link-state standard: ogni router conosce l'intera topologia (LSDB) e calcola i cammini minimi con Dijkstra, usando un costo basato sulla banda. EIGRP è spesso chiamato "ibrido avanzato" e usa l'algoritmo DUAL, che garantisce percorsi privi di loop e prepara in anticipo un percorso di riserva (feasible successor).

---
## Slide 18 – RIP - LABORATORIO

---
## Slide 19 -> 21 – Laboratorio RIP - Topologia

![[RTL04-s019-1.png]]

| Dispositivo | Interfaccia | Indirizzo IP | Collegato a |
| --- | --- | --- | --- |
| R1 | f 0/0 | 192.168.1.1 | R2 (f 0/0) |
| R1 | f 0/1 | 192.168.10.1 | PC1 |
| R2 | f 0/0 | 192.168.1.2 | R1 (f 0/0) |
| R2 | f 0/1 | 192.168.2.1 | R3 (f 0/0) |
| R2 | f 1/0 | 192.168.20.1 | PC2 |
| R3 | f 0/0 | 192.168.2.2 | R2 (f 0/1) |
| R3 | f 0/1 | 192.168.30.1 | PC3 |
| PC1 | – | 192.168.10.2 | R1 |
| PC2 | – | 192.168.20.2 | R2 |

>> Le reti in gioco sono 5, tutte /24: due reti di transito tra router (192.168.1.0 tra R1 e R2, 192.168.2.0 tra R2 e R3) e tre LAN con un PC ciascuna (192.168.10.0, 192.168.20.0, 192.168.30.0; PC3 avrà 192.168.30.2, vedi slide 22). Ogni router conosce direttamente solo le reti delle proprie interfacce: tutte le altre le deve imparare con RIP.
>> R2 è al centro: ogni rete che non gli è direttamente connessa è a 1 salto. R1 e R3, invece, vedono la LAN "opposta" a 2 salti e la rete di transito più lontana (192.168.2.0 per R1, 192.168.1.0 per R3) a 1 salto.

1. **Topologia generale**

Avremo:

- **Router R1, R2 e R3** collegati tra loro.
- **PC1** collegato a **R1**, **PC2** collegato a **R2**, e **PC3** collegato a **R3**.
- Ogni router sarà in una rete diversa, con il protocollo RIP che gestirà il routing tra tutte le reti.

2. **Collegamenti**

- **Router R1**:
	- Fa0/0 collegata a Fa0/0 di **R2**.
	- Fa0/1 collegata a **PC1**.
- **Router R2:**
	- Fa0/0 collegata a Fa0/0 di R1.
	- Fa0/1 collegata a Fa0/0 di R3.
	- Fa1/0 collegata a PC2.
- **Router R3:**
	- Fa0/0 collegata a Fa0/1 di R2.
	- Fa0/1 collegata a PC3.

>> In GNS3 i collegamenti si creano con lo strumento "Add a link", scegliendo esattamente queste porte: se si collega la porta sbagliata, l'indirizzo IP configurato nella slide successiva finisce su un'interfaccia non cablata e il ping fallisce. Fa1/0 su R2 esiste solo se nello slot 1 è stato inserito un modulo FastEthernet (es. NM-1FE-TX).

---
## Slide 22 -> 29 – Laboratorio RIP – Configurazione Dispositivi

![[RTL04-s022-1.png]]

| Dispositivo | Interfaccia (come indicata nello schema) | Indirizzo IP |
| --- | --- | --- |
| PC1 (VPCS) | – | 192.168.10.2 |
| R1 | f 0/0 | 192.168.10.1 |
| R1 | f 0/1 | 192.168.1.1 |
| R2 | f 0/0 | 192.168.1.2 |
| R2 | f 0/1 | 192.168.2.1 |
| R2 | f 1/0 | 192.168.20.1 |
| PC2 (VPCS) | – | 192.168.20.2 |
| R3 | f 0/0 | 192.168.2.2 |
| R3 | f 0/1 | 192.168.30.1 |
| PC3 (VPCS) | – | 192.168.30.2 |

>> Attenzione: in questo schema GNS3 le etichette di R1 sono invertite rispetto alla slide 19 e alla configurazione della slide 23 (dove Fa0/0 = 192.168.1.1 verso R2 e Fa0/1 = 192.168.10.1 verso PC1, confermato dall'output della slide 30). Fa fede la configurazione: l'importante è che l'indirizzo IP sia sull'interfaccia fisicamente collegata alla rete giusta.
>> I PC sono VPCS (Virtual PC Simulator), host leggerissimi di GNS3 che permettono solo comandi base come `ip`, `ping`, `trace`.

**Configurazione degli IP e del protocollo RIP:**

**Router R1:**

- Accedete al router R1 tramite console.
- Configurate gli indirizzi IP:

```
enable
configure terminal
interface fastEthernet 0/0
ip address 192.168.1.1 255.255.255.0
no shutdown

interface fastEthernet 0/1
ip address 192.168.10.1 255.255.255.0
no shutdown
exit
```

>> - `enable`: passa dalla modalità utente (`R1>`) alla modalità privilegiata (`R1#`).
>> - `configure terminal`: entra nella configurazione globale (`R1(config)#`).
>> - `interface fastEthernet 0/0`: seleziona l'interfaccia da configurare (`R1(config-if)#`).
>> - `ip address <indirizzo> <maschera>`: assegna l'IP; 255.255.255.0 equivale a /24.
>> - `no shutdown`: accende l'interfaccia, che sui router Cisco è spenta di default ("administratively down").
>> - `exit`: risale di un livello. Da `(config-if)` si può anche passare direttamente a un'altra `interface ...` senza `exit`, come avviene qui.

**Router R1:**

- Abilitate il protocollo RIP:

```
router rip
version 2
network 192.168.1.0
network 192.168.10.0
no auto-summary
exit
```

>> - `router rip`: avvia il processo RIP ed entra nella sua configurazione (`R1(config-router)#`).
>> - `version 2`: usa RIPv2 (classless, maschere negli update, multicast 224.0.0.9); senza questo comando IOS invia RIPv1.
>> - `network 192.168.1.0`: attiva RIP su tutte le interfacce il cui IP appartiene a quella rete (classful) e include la rete negli annunci. Non si indicano reti "lontane": si elencano solo le reti **direttamente connesse** del router. Per R1 sono 192.168.1.0 (verso R2) e 192.168.10.0 (LAN di PC1).
>> - `no auto-summary`: disattiva il riassunto automatico ai confini delle classi (es. 10.1.0.0/16 annunciata come 10.0.0.0/8). Qui tutte le reti sono /24 di classe C, quindi l'effetto pratico è nullo, ma è buona norma con reti non contigue.
>> - `exit`: torna alla configurazione globale.

**Configurazione degli IP e del protocollo RIP:**

**Router R2:**

- Accedete al router R2 tramite console.
- Configurate gli indirizzi IP:

```
enable
configure terminal
interface fastEthernet 0/0
ip address 192.168.1.2 255.255.255.0
no shutdown

interface fastEthernet 0/1
ip address 192.168.2.1 255.255.255.0
no shutdown

interface fastEthernet 0/2
ip address 192.168.20.1 255.255.255.0
no shutdown
exit
```

>> Incongruenza nella slide: l'interfaccia verso PC2 è indicata come `fastEthernet 0/2`, mentre la topologia la chiama f 1/0 e l'output della slide 31 mostra 192.168.20.1 su **FastEthernet2/0** (con Fa1/0 non assegnata). Sul C3745 Fa0/2 non esiste: va usato il nome dell'interfaccia effettivamente cablata verso PC2 in GNS3 (es. `interface fastEthernet 1/0` o `2/0`).

**Router R2:**

- Abilitate il protocollo RIP:

```
router rip
version 2
network 192.168.1.0
network 192.168.2.0
network 192.168.20.0
no auto-summary
exit
```

>> R2 ha tre reti direttamente connesse (le due di transito e la LAN di PC2), quindi tre comandi `network`. Una rete dimenticata qui non verrebbe annunciata e, se è quella di un collegamento, R2 non scambierebbe nemmeno gli update RIP su quell'interfaccia.

**Configurazione degli IP e del protocollo RIP:**

**Router R3:**

- Accedete al router R3 tramite console.
- Configurate gli indirizzi IP:

```
enable
configure terminal
interface fastEthernet 0/0
ip address 192.168.2.2 255.255.255.0
no shutdown

interface fastEthernet 0/1
ip address 192.168.30.1 255.255.255.0
no shutdown
exit
```

**Router R3:**

- Abilitate il protocollo RIP:

```
router rip
version 2
network 192.168.2.0
network 192.168.30.0
no auto-summary
exit
```

>> Per verificare la configurazione del processo si può usare `show ip protocols`: mostra la versione inviata/ricevuta, le reti annunciate ("Routing for Networks"), i vicini da cui arrivano update ("Routing Information Sources") e i timer (update 30, invalid 180, hold down 180, flushed 240). Per osservare gli update in tempo reale: `debug ip rip` (e `undebug all` per fermarlo).

**Configurazione dei PC:**

1. **PC1** (collegato a R1):

```
ip 192.168.10.2 255.255.255.0 192.168.10.1
```

2. **PC2** (collegato a R2):

```
ip 192.168.20.2 255.255.255.0 192.168.20.1
```

3. **PC3** (collegato a R3):

```
ip 192.168.30.2 255.255.255.0 192.168.30.1
```

>> Sintassi VPCS: `ip <indirizzo> <maschera> <gateway>` (equivalente: `ip 192.168.10.2/24 192.168.10.1`). Il gateway di default di ogni PC è l'indirizzo dell'interfaccia del router sulla stessa LAN: senza di esso il PC non saprebbe a chi consegnare i pacchetti verso altre reti. Con `show ip` si verifica la configurazione, con `save` la si salva.

---
## Slide 30 -> 32 – Laboratorio RIP – Verifica della Configurazione

Controllate le interfacce R1:

![[RTL04-s030-1.png]]

```
show ip interface brief
```

```
show ip rip database
show ip route
```

```
*Mar  1 00:13:48.835: %SYS-5-CONFIG_I: Configured from console by console
R1#show ip interface brief
Interface                  IP-Address      OK? Method Status                Protocol
FastEthernet0/0            192.168.1.1     YES manual up                    up
FastEthernet0/1            192.168.10.1    YES manual up                    up
FastEthernet1/0            unassigned      YES unset  administratively down down
FastEthernet2/0            unassigned      YES unset  administratively down down
FastEthernet3/0            unassigned      YES unset  administratively down down
R1#show ip rip database
192.168.1.0/24    auto-summary
192.168.1.0/24    directly connected, FastEthernet0/0
192.168.2.0/24    auto-summary
192.168.2.0/24
    [1] via 192.168.1.2, 00:00:07, FastEthernet0/0
192.168.10.0/24    auto-summary
192.168.10.0/24    directly connected, FastEthernet0/1
192.168.20.0/24    auto-summary
192.168.20.0/24
    [1] via 192.168.1.2, 00:00:07, FastEthernet0/0
192.168.30.0/24    auto-summary
192.168.30.0/24
    [2] via 192.168.1.2, 00:00:07, FastEthernet0/0
R1#show ip route
Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2
       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
       ia - IS-IS inter area, * - candidate default, U - per-user static route
       o - ODR, P - periodic downloaded static route

Gateway of last resort is not set

R    192.168.30.0/24 [120/2] via 192.168.1.2, 00:00:02, FastEthernet0/0
C    192.168.10.0/24 is directly connected, FastEthernet0/1
R    192.168.20.0/24 [120/1] via 192.168.1.2, 00:00:02, FastEthernet0/0
C    192.168.1.0/24 is directly connected, FastEthernet0/0
R    192.168.2.0/24 [120/1] via 192.168.1.2, 00:00:02, FastEthernet0/0
R1#wr
```

>> **`show ip interface brief`**: riepilogo delle interfacce. "Status" è lo stato fisico/amministrativo (`administratively down` = mai attivata con `no shutdown`), "Protocol" lo stato di linea. Per R1 solo Fa0/0 e Fa0/1 sono up/up, coerentemente con la topologia.
>> **`show ip rip database`**: il database interno di RIP. Le righe `auto-summary` sono le voci di riassunto classful generate dal processo (qui coincidono con le reti stesse, essendo tutte /24 di classe C); `[n]` è la metrica in hop, seguita dal vicino da cui è stata appresa, dal tempo trascorso dall'ultimo update e dall'interfaccia di uscita.
>> **`show ip route`**, come leggere una riga RIP, es. `R 192.168.30.0/24 [120/2] via 192.168.1.2, 00:00:02, FastEthernet0/0`:
>> - `R` = rotta appresa da RIP (`C` = direttamente connessa);
>> - `[120/2]` = [distanza amministrativa / metrica]: 120 è l'AD di RIP (affidabilità della fonte rispetto ad altri protocolli: connessa 0, statica 1, OSPF 110), 2 sono gli hop;
>> - `via 192.168.1.2` = next hop (Fa0/0 di R2);
>> - `00:00:02` = secondi dall'ultimo update ricevuto per quella rotta (si azzera circa ogni 30 s; oltre 180 s la rotta diventa invalida);
>> - `FastEthernet0/0` = interfaccia di uscita.
>>
>> Coerenza con la topologia: da R1 tutte le reti remote passano per R2 (192.168.1.2). 192.168.2.0 e 192.168.20.0 sono a 1 salto (attaccate a R2), 192.168.30.0 a 2 salti (R2 e poi R3). Le 5 reti della topologia sono tutte presenti: 2 `C` + 3 `R`.
>> `wr` (write memory) salva la running-config nella startup-config (NVRAM), così la configurazione sopravvive al riavvio.

Controllate le interfacce R2:

![[RTL04-s031-1.png]]

```
show ip interface brief
```

```
show ip rip database
show ip route
```

```
*Mar  1 00:13:59.687: %SYS-5-CONFIG_I: Configured from console by console
R2#show ip int br
Interface                  IP-Address      OK? Method Status                Protocol
FastEthernet0/0            192.168.1.2     YES manual up                    up
FastEthernet0/1            192.168.2.1     YES manual up                    up
FastEthernet1/0            unassigned      YES unset  administratively down down
FastEthernet2/0            192.168.20.1    YES manual up                    up
FastEthernet3/0            unassigned      YES unset  administratively down down
R2#show ip rip database
192.168.1.0/24    auto-summary
192.168.1.0/24    directly connected, FastEthernet0/0
192.168.2.0/24    auto-summary
192.168.2.0/24    directly connected, FastEthernet0/1
192.168.10.0/24    auto-summary
192.168.10.0/24
    [1] via 192.168.1.1, 00:00:21, FastEthernet0/0
192.168.20.0/24    auto-summary
192.168.20.0/24    directly connected, FastEthernet2/0
192.168.30.0/24    auto-summary
192.168.30.0/24
    [1] via 192.168.2.2, 00:00:22, FastEthernet0/1
R2#show ip route
Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2
       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
       ia - IS-IS inter area, * - candidate default, U - per-user static route
       o - ODR, P - periodic downloaded static route

Gateway of last resort is not set

R    192.168.30.0/24 [120/1] via 192.168.2.2, 00:00:05, FastEthernet0/1
R    192.168.10.0/24 [120/1] via 192.168.1.1, 00:00:00, FastEthernet0/0
C    192.168.20.0/24 is directly connected, FastEthernet2/0
C    192.168.1.0/24 is directly connected, FastEthernet0/0
C    192.168.2.0/24 is directly connected, FastEthernet0/1
R2#wr
Building configuration...
[OK]
R2#
```

>> `show ip int br` è l'abbreviazione di `show ip interface brief` (IOS accetta qualsiasi prefisso non ambiguo).
>> R2 è il router centrale: ha 3 reti `C` (192.168.1.0 verso R1, 192.168.2.0 verso R3, 192.168.20.0 verso PC2) e impara solo le due LAN remote, entrambe a 1 salto: 192.168.10.0 via 192.168.1.1 (R1) su Fa0/0 e 192.168.30.0 via 192.168.2.2 (R3) su Fa0/1.
>> Si noti che nel laboratorio reale la LAN di PC2 è su **FastEthernet2/0** (non Fa1/0 come nella topologia, né Fa0/2 come nella slide 25).

Controllate le interfacce R3:

![[RTL04-s032-1.png]]

```
show ip interface brief
```

```
show ip rip database
show ip route
```

```
R3#show ip int br
Interface                  IP-Address      OK? Method Status                Protocol
FastEthernet0/0            192.168.2.2     YES manual up                    up
FastEthernet0/1            192.168.30.1    YES manual up                    up
FastEthernet1/0            unassigned      YES unset  administratively down down
FastEthernet2/0            unassigned      YES unset  administratively down down
FastEthernet3/0            unassigned      YES unset  administratively down down
R3#show ip rip database
192.168.1.0/24    auto-summary
192.168.1.0/24
    [1] via 192.168.2.1, 00:00:09, FastEthernet0/0
192.168.2.0/24    auto-summary
192.168.2.0/24    directly connected, FastEthernet0/0
192.168.10.0/24    auto-summary
192.168.10.0/24
    [2] via 192.168.2.1, 00:00:09, FastEthernet0/0
192.168.20.0/24    auto-summary
192.168.20.0/24
    [1] via 192.168.2.1, 00:00:09, FastEthernet0/0
192.168.30.0/24    auto-summary
192.168.30.0/24    directly connected, FastEthernet0/1
R3#show ip route
Codes: C - connected, S - static, R - RIP, M - mobile, B - BGP
       D - EIGRP, EX - EIGRP external, O - OSPF, IA - OSPF inter area
       N1 - OSPF NSSA external type 1, N2 - OSPF NSSA external type 2
       E1 - OSPF external type 1, E2 - OSPF external type 2
       i - IS-IS, su - IS-IS summary, L1 - IS-IS level-1, L2 - IS-IS level-2
       ia - IS-IS inter area, * - candidate default, U - per-user static route
       o - ODR, P - periodic downloaded static route

Gateway of last resort is not set

C    192.168.30.0/24 is directly connected, FastEthernet0/1
R    192.168.10.0/24 [120/2] via 192.168.2.1, 00:00:21, FastEthernet0/0
R    192.168.20.0/24 [120/1] via 192.168.2.1, 00:00:21, FastEthernet0/0
R    192.168.1.0/24 [120/1] via 192.168.2.1, 00:00:21, FastEthernet0/0
C    192.168.2.0/24 is directly connected, FastEthernet0/0
R3#wr
Building configuration...
[OK]
R3#
```

>> R3 è simmetrico a R1: tutte le rotte remote passano per R2 (next hop 192.168.2.1, interfaccia Fa0/0). 192.168.20.0 e 192.168.1.0 sono a 1 salto, 192.168.10.0 (LAN di PC1) a 2 salti (`[120/2]`: R2 e poi R1).
>> Riassunto delle metriche RIP alla convergenza (C = connessa):
>>
>> | Rete | R1 | R2 | R3 |
>> | --- | --- | --- | --- |
>> | 192.168.1.0/24 | C | C | 1 |
>> | 192.168.2.0/24 | 1 | C | C |
>> | 192.168.10.0/24 | C | 1 | 2 |
>> | 192.168.20.0/24 | 1 | C | 1 |
>> | 192.168.30.0/24 | 2 | 1 | C |

---
## Slide 33 -> 35 – Laboratorio RIP – Verifica della Funzionamento

**Ping tra i PC**:Provate a fare il ping da **PC1** a **PC2** e **PC3**:

![[RTL04-s033-1.png]]

```
Welcome to Virtual PC Simulator, version 0.8.3
Dedicated to Daling.
Build time: Sep  9 2023 11:15:00
Copyright (c) 2007-2015, Paul Meng (mirnshi@gmail.com)
All rights reserved.

VPCS is free software, distributed under the terms of the "BSD" licence.
Source code and license can be found at vpcs.sf.net.
For more information, please visit wiki.freecode.com.cn.

Press '?' to get help.

Executing the startup file

PC1> ip 192.168.10.2 255.255.255.0 192.168.10.1
Checking for duplicate address...
PC1 : 192.168.10.2 255.255.255.0 gateway 192.168.10.1

PC1> ping 192.168.20.2

192.168.20.2 icmp_seq=1 timeout
84 bytes from 192.168.20.2 icmp_seq=2 ttl=62 time=39.616 ms
84 bytes from 192.168.20.2 icmp_seq=3 ttl=62 time=39.632 ms
84 bytes from 192.168.20.2 icmp_seq=4 ttl=62 time=39.020 ms
84 bytes from 192.168.20.2 icmp_seq=5 ttl=62 time=40.125 ms

PC1> ping 192.168.30.2

192.168.30.2 icmp_seq=1 timeout
84 bytes from 192.168.30.2 icmp_seq=2 ttl=61 time=41.960 ms
84 bytes from 192.168.30.2 icmp_seq=3 ttl=61 time=49.836 ms
84 bytes from 192.168.30.2 icmp_seq=4 ttl=61 time=49.547 ms
84 bytes from 192.168.30.2 icmp_seq=5 ttl=61 time=50.241 ms

PC1> save
Saving startup configuration to startup.vpc
.  done

PC1>
```

>> Il primo pacchetto in timeout è normale: i router lungo il percorso devono prima risolvere con ARP l'indirizzo MAC del next hop / dell'host di destinazione, e nel frattempo il primo echo request viene scartato. Dal secondo in poi le cache ARP sono popolate.
>> Il TTL conferma il numero di router attraversati: VPCS invia con TTL 64 e ogni router lo decrementa di 1 (anche sul percorso di ritorno, che è simmetrico). PC1 → PC2 attraversa R1 e R2: $64-2=62$. PC1 → PC3 attraversa R1, R2, R3: $64-3=61$. È coerente con le metriche RIP viste prima (+1 router perché conta anche il router del PC di partenza).
>> `save` salva la configurazione del VPCS in `startup.vpc`, che viene rieseguita all'avvio ("Executing the startup file").

![[RTL04-s034-1.png]]

```
Welcome to Virtual PC Simulator, version 0.8.3
Dedicated to Daling.
Build time: Sep  9 2023 11:15:00
Copyright (c) 2007-2015, Paul Meng (mirnshi@gmail.com)
All rights reserved.

VPCS is free software, distributed under the terms of the "BSD" licence.
Source code and license can be found at vpcs.sf.net.
For more information, please visit wiki.freecode.com.cn.

Press '?' to get help.

Executing the startup file

PC2> ip 192.168.20.2 255.255.255.0 192.168.20.1
Checking for duplicate address...
PC2 : 192.168.20.2 255.255.255.0 gateway 192.168.20.1

PC2> ping 192.168.10.2

84 bytes from 192.168.10.2 icmp_seq=1 ttl=62 time=37.508 ms
84 bytes from 192.168.10.2 icmp_seq=2 ttl=62 time=39.934 ms
84 bytes from 192.168.10.2 icmp_seq=3 ttl=62 time=39.862 ms
84 bytes from 192.168.10.2 icmp_seq=4 ttl=62 time=30.497 ms
84 bytes from 192.168.10.2 icmp_seq=5 ttl=62 time=29.893 ms

PC2> ping 192.168.30.2

84 bytes from 192.168.30.2 icmp_seq=1 ttl=62 time=29.991 ms
84 bytes from 192.168.30.2 icmp_seq=2 ttl=62 time=30.398 ms
84 bytes from 192.168.30.2 icmp_seq=3 ttl=62 time=30.529 ms
84 bytes from 192.168.30.2 icmp_seq=4 ttl=62 time=29.510 ms
84 bytes from 192.168.30.2 icmp_seq=5 ttl=62 time=29.939 ms

PC2> save
Saving startup configuration to startup.vpc
.  done

PC2>
```

>> Da PC2 entrambe le destinazioni sono a 2 router di distanza (R2+R1 verso PC1, R2+R3 verso PC3), quindi TTL $= 64-2 = 62$ in tutti e due i casi. Qui non c'è il timeout iniziale: le voci ARP necessarie erano già nelle cache grazie ai ping precedenti.

![[RTL04-s035-1.png]]

```
Welcome to Virtual PC Simulator, version 0.8.3
Dedicated to Daling.
Build time: Sep  9 2023 11:15:00
Copyright (c) 2007-2015, Paul Meng (mirnshi@gmail.com)
All rights reserved.

VPCS is free software, distributed under the terms of the "BSD" licence.
Source code and license can be found at vpcs.sf.net.
For more information, please visit wiki.freecode.com.cn.

Press '?' to get help.

Executing the startup file

PC3> ip 192.168.30.2 255.255.255.0 192.168.30.1
Checking for duplicate address...
PC3 : 192.168.30.2 255.255.255.0 gateway 192.168.30.1

PC3> ping 192.168.10.2

84 bytes from 192.168.10.2 icmp_seq=1 ttl=61 time=49.950 ms
84 bytes from 192.168.10.2 icmp_seq=2 ttl=61 time=40.281 ms
84 bytes from 192.168.10.2 icmp_seq=3 ttl=61 time=39.371 ms
84 bytes from 192.168.10.2 icmp_seq=4 ttl=61 time=39.750 ms
84 bytes from 192.168.10.2 icmp_seq=5 ttl=61 time=39.353 ms

PC3> ping 192.168.20.2

84 bytes from 192.168.20.2 icmp_seq=1 ttl=62 time=49.061 ms
84 bytes from 192.168.20.2 icmp_seq=2 ttl=62 time=40.139 ms
84 bytes from 192.168.20.2 icmp_seq=3 ttl=62 time=39.890 ms
84 bytes from 192.168.20.2 icmp_seq=4 ttl=62 time=29.470 ms
84 bytes from 192.168.20.2 icmp_seq=5 ttl=62 time=29.769 ms

PC3> save
Saving startup configuration to startup.vpc
.  done

PC3>
```

>> PC3 → PC1 attraversa R3, R2, R1 (TTL $64-3=61$), PC3 → PC2 attraversa R3, R2 (TTL $64-2=62$): le risposte confermano che RIP ha costruito correttamente le tabelle su tutti e tre i router e che c'è piena raggiungibilità tra le tre LAN.
>> Per vedere il percorso hop per hop si può usare `trace 192.168.10.2` in VPCS: comparirebbero 192.168.30.1, 192.168.2.1, 192.168.1.1 e infine 192.168.10.2.

---
## Riassunto

>> **Teoria RIP**
>> - RIP è un IGP dinamico a distanza-vettore (Bellman-Ford distribuito). Ogni router conosce solo le reti connesse e ogni 30 s invia l'intera tabella ai vicini, che aggiungono 1 hop e tengono il percorso più corto.
>> - La metrica è l'hop count, con massimo 15. Il valore 16 significa irraggiungibile. La banda dei link non conta.
>> - Timer Cisco: update 30 s, invalid 180 s, hold-down 180 s, flush 240 s.
>> - Count-to-infinity: dopo un guasto due router si ri-annunciano a vicenda la rotta caduta e la metrica cresce fino a 16. Split horizon vieta di ri-annunciare una rotta sull'interfaccia da cui è stata appresa. Poison reverse la ri-annuncia su quell'interfaccia con metrica 16. Nessuno dei due basta negli anelli di 3 o più router.
>> - RIPv1 è classful (niente maschere, niente VLSM, broadcast). RIPv2 è classless (maschere, VLSM, multicast 224.0.0.9, autenticazione). RIPng è la versione per IPv6.
>> - RIP è semplice, ma scala poco e converge lentamente. Per reti grandi si preferiscono OSPF (link-state) o EIGRP.
>>
>> **Piano di indirizzamento (tutto /24)**
>> - Catena R1 — R2 — R3. Reti di transito: 192.168.1.0 (R1 .1 e R2 .2) e 192.168.2.0 (R2 .1 e R3 .2).
>> - LAN: 192.168.10.0 (PC1 .2, gateway R1 .1), 192.168.20.0 (PC2 .2, gateway R2 .1), 192.168.30.0 (PC3 .2, gateway R3 .1).
>>
>> **Comandi chiave**
>> - Interfacce: `enable`, `configure terminal`, `interface fastEthernet x/y`, `ip address <ip> 255.255.255.0`, `no shutdown` (le interfacce Cisco sono spente di default).
>> - RIP: `router rip`, `version 2`, un `network` per ogni rete direttamente connessa, `no auto-summary`. Con `wr` si salva la configurazione.
>> - VPCS: `ip <ip> <maschera> <gateway>`, poi `save`.
>>
>> **Verifica**
>> - `show ip interface brief` mostra le interfacce usate in stato up/up.
>> - `show ip route`: `C` indica una rete connessa, `R` una rotta RIP. In `[120/n]`, 120 è la distanza amministrativa di RIP e n sono gli hop. Da R1 la rete 192.168.30.0 è `[120/2]` via 192.168.1.2.
>> - `show ip protocols` mostra versione, reti annunciate, vicini e timer. `show ip rip database` e `debug ip rip` servono per l'analisi.
>> - Ping tra i PC: il primo pacchetto può andare in timeout per via dell'ARP. Il TTL di risposta parte da 64 e cala di 1 per ogni router attraversato: 62 con 2 router, 61 con 3 (PC1–PC3).
>>
>> **Incongruenze del deck**
>> - Lo schema GNS3 della slide 22 scambia gli indirizzi di Fa0/0 e Fa0/1 di R1. Vale la configurazione: Fa0/0 = 192.168.1.1 verso R2.
>> - Per l'interfaccia di R2 verso PC2 la topologia indica Fa1/0, la configurazione `fastEthernet 0/2`, che sul C3745 non esiste. Negli output invece l'IP sta su Fa2/0. Bisogna configurare la porta effettivamente cablata.
>> - Nel deck manca l'indirizzo di PC3 nella tabella della topologia: è 192.168.30.2.
