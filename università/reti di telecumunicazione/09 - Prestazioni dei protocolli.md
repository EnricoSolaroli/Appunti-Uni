[Prestazioni](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/Prestazioni.pdf>)

# Prestazioni dei protocolli

>> Come si misurano le prestazioni di un protocollo: traffico offerto, smaltito e perduto, efficienza, il sistema a coda con singolo servitore (M/M/1 e M/D/1). Poi si applicano gli stessi strumenti ai protocolli di accesso casuale delle LAN visti in [[08 - Local Area Network e accesso multiplo]]: MAC ideale, ALOHA, slotted ALOHA, CSMA e CSMA/CD.

## Indice

1. **Traffico, prestazioni ed efficienza** (slide 1–23)
	- [[#Slide 2 – Affidabilità|Affidabilità]]
	- [[#Slide 3 – Funzionalità e prestazioni|Funzionalità e prestazioni]]
	- [[#Slide 4 – Le prestazioni in generale|Le prestazioni in generale]]
	- [[#Slide 5 – Arrivi e partenze|Arrivi e partenze]]
	- [[#Slide 6 – Richieste offerte e smaltite|Richieste offerte e smaltite]]
	- [[#Slide 7 – Richieste perdute|Richieste perdute]]
	- [[#Slide 8 – Analogamente|Analogamente]]
	- [[#Slide 9 – Utente e servizio|Utente e servizio]]
	- [[#Slide 10 – La lunghezza del pacchetto|La lunghezza del pacchetto]]
	- [[#Slide 11 – Frequenza di servizio|Frequenza di servizio]]
	- [[#Slide 12 – Il ruolo di μ|Il ruolo di μ]]
	- [[#Slide 13 – Di quale sistema parliamo|Di quale sistema parliamo]]
	- [[#Slide 14 – Cosa accade all'utente in un sistema a coda?|Cosa accade all'utente in un sistema a coda?]]
	- [[#Slide 15 – Il traffico|Il traffico]]
	- [[#Slide 16 – Alcune definizioni conseguenti|Alcune definizioni conseguenti]]
	- [[#Slide 17 – Il traffico smaltito|Il traffico smaltito]]
	- [[#Slide 18 – In un sistema ideale|In un sistema ideale]]
	- [[#Slide 19 – In un sistema reale|In un sistema reale]]
	- [[#Slide 20 – Capacità massima ed efficienza|Capacità massima ed efficienza]]
	- [[#Slide 21 – Ce|Ce]]
	- [[#Slide 22 – Unità di misura|Unità di misura]]
	- [[#Slide 23 – Valutazione efficienza|Valutazione efficienza]]
2. **Il sistema a coda con singolo servitore** (slide 24–35)
	- [[#Slide 25 – Il nodo di commutazione a pacchetto|Il nodo di commutazione a pacchetto]]
	- [[#Slide 26 – La congestione|La congestione]]
	- [[#Slide 27 – Coda singolo servitore|Coda singolo servitore]]
	- [[#Slide 28 – Alcune ipotesi semplificative|Alcune ipotesi semplificative]]
	- [[#Slide 29 – Utilizzazione|Utilizzazione]]
	- [[#Slide 30 – Servitore occupato|Servitore occupato]]
	- [[#Slide 31 – Traffico e utilizzazione|Traffico e utilizzazione]]
	- [[#Slide 32 – Tempo medio di attesa in coda|Tempo medio di attesa in coda]]
	- [[#Slide 33 – La statistica del tempo di servizio|La statistica del tempo di servizio]]
	- [[#Slide 34 – Un classico problema nella progettazione dei protocolli|Un classico problema nella progettazione dei protocolli]]
	- [[#Slide 35 – Il compromesso|Il compromesso]]
3. **Accesso casuale: parametri ed efficienza della LAN** (slide 36–45)
	- [[#Slide 37 -> 38 – Protocolli ad accesso casuale|Protocolli ad accesso casuale]]
	- [[#Slide 39 – Parametri caratterizzanti la LAN|Parametri caratterizzanti la LAN]]
	- [[#Slide 40 – LAN ideale|LAN ideale]]
	- [[#Slide 41 – Propagazione reale (topologia bus)|Propagazione reale (topologia bus)]]
	- [[#Slide 42 – Efficienza con MAC ideale|Efficienza con MAC ideale]]
	- [[#Slide 43 – Traffico smaltito dalla LAN|Traffico smaltito dalla LAN]]
	- [[#Slide 44 – Esempio numerico|Esempio numerico]]
	- [[#Slide 45 – Quale efficienza per le LAN|Quale efficienza per le LAN]]
4. **ALOHA e slotted ALOHA** (slide 46–56)
	- [[#Slide 46 – Protocollo a contesa: ALOHA|Protocollo a contesa: ALOHA]]
	- [[#Slide 47 – Aloha: prestazioni|Aloha: prestazioni]]
	- [[#Slide 48 – Traffico offerto e smaltito|Traffico offerto e smaltito]]
	- [[#Slide 49 – Intervallo di vulnerabilità|Intervallo di vulnerabilità]]
	- [[#Slide 50 – Calcolo del Throughput|Calcolo del Throughput]]
	- [[#Slide 51 – Aloha: throughput|Aloha: throughput]]
	- [[#Slide 52 – Throughput di Aloha|Throughput di Aloha]]
	- [[#Slide 53 -> 54 – Slotted Aloha|Slotted Aloha]]
	- [[#Slide 55 – Algoritmi di back-off|Algoritmi di back-off]]
	- [[#Slide 56 – Derivati del protocollo Aloha|Derivati del protocollo Aloha]]
5. **CSMA e CSMA/CD** (slide 57–65)
	- [[#Slide 57 – CSMA: Carrier Sensing Multiple Access|CSMA: Carrier Sensing Multiple Access]]
	- [[#Slide 58 – CSMA: intervallo di vulnerabilità|CSMA: intervallo di vulnerabilità]]
	- [[#Slide 59 – Persistent e Nonpersistent CSMA|Persistent e Nonpersistent CSMA]]
	- [[#Slide 60 – Versione slotted e problemi di stabilità|Versione slotted e problemi di stabilità]]
	- [[#Slide 61 – CSMA/CD: CSMA con Collision Detect|CSMA/CD: CSMA con Collision Detect]]
	- [[#Slide 62 – Codifica di Manchester|Codifica di Manchester]]
	- [[#Slide 63 – Cosa migliora nel CSMA-CD|Cosa migliora nel CSMA-CD]]
	- [[#Slide 64 – CSMA|CSMA]]
	- [[#Slide 65 – CSMA-CD|CSMA-CD]]

---
## Slide 1 – Protocolli: Prestazioni

Protocolli: Prestazioni

Franco CALLEGATI

Dipartimento di Informatica: Scienza e Ingegneria

---
## Slide 2 – Affidabilità

- Controllo dell'errore
	- Rivelazione e correzioni
	- CRC e Internet checksum
- Eventuale recupero dell'errore
	- ARQ e ritrasmissione
- Controllo di flusso e sequenza
	- Ack e ARQ
- **Questi temi sono stati trattati lo scorso anno**

---
## Slide 3 – Funzionalità e prestazioni

- I protocolli sono progettati per garantire
	- Funzionalità
		- La trasmissione dati deve poter avvenire risolvendo i problemi che si riscontrano nell'accesso e nell'uso del canale
	- Prestazioni
		- La trasmissione deve avvenire con successo utilizzando per quanto possibile la capacità messa a disposizione dallo strato fisico

---
## Slide 4 – Le prestazioni in generale

- Un *sistema* deve *smaltire* del *lavoro* che gli viene *offerto* dall'esterno
- Esempio nel caso specifico delle reti di tlc
	- Livello N+1 invia PDU al livello N tramite la relativa interfaccia (e un opportuno SAP)
	- Livello N impiega un certo tempo per soddisfare la richiesta

![[RT09-s004-1.png|600]]

- Richieste in arrivo (offerte) → sistema → Richieste soddisfatte (smaltite)
- Nel sistema: $k(t)$ = Numero di richieste Accettate in attesa di essere soddisfatte

---
## Slide 5 – Arrivi e partenze

- $a(t)$: Numero di richieste di servizio giunte al tempo *t*
- $s(t)$: Numero di richieste accettate al tempo *t*
- $p(t)$: Numero di partenze dal sistema al tempo *t*

![[RT09-s005-1.png|600]]

$$k(t) = s(t) - p(t)$$

>> $a(t)$, $s(t)$ e $p(t)$ sono funzioni di conteggio cumulative: partono da 0 e crescono a gradini di 1 a ogni arrivo, accettazione o partenza. Per costruzione $a(t) \ge s(t) \ge p(t)$. La distanza verticale fra la curva degli accettati e quella delle partenze è il numero di richieste presenti nel sistema in quell'istante.

---
## Slide 6 – Richieste offerte e smaltite

- Frequenza media delle richieste offerte

$$\lambda = \lim_{t \to \infty} \frac{a(t)}{t}$$

- Frequenza media delle richieste smaltite

$$\lambda_s = \lim_{t \to \infty} \frac{p(t)}{t}$$

- Se il sistema in oggetto non produce lavoro ma lo riceve solamente dall'esterno

$$\lambda_s \le \lambda$$

>> $\lambda$ si misura in richieste (pacchetti) al secondo. Qui $\lambda_s$ è definita con le partenze $p(t)$, mentre nella slide successiva viene legata agli accettati $s(t)$. Non c'è contraddizione: se il sistema è stabile, $k(t) = s(t) - p(t)$ resta limitato, quindi $k(t)/t \to 0$ e i due limiti coincidono. A regime tutto ciò che viene accettato prima o poi esce.

---
## Slide 7 – Richieste perdute

- $\lambda_s = \lambda$ Implica $s(t) = a(t)$
- Tutte le richieste vengono accettate dal sistema e prima o poi soddisfatte
- $\lambda_s < \lambda$ implica $r(t) = a(t) - s(t)$
- Dove *r(t)* rappresenta le richieste che non vengono accettate e sono *rifiutate o perdute* dal sistema

>> Nelle reti la perdita tipica è la coda (buffer) piena di un router: il pacchetto in arrivo viene scartato (*drop*).

---
## Slide 8 – Analogamente

- Posso definire

$$\lambda_p = \lim_{t \to \infty} \frac{r(t)}{t}$$

- Da cui consegue

$$\lambda = \lambda_s + \lambda_p$$

>> Esempio: arrivano $\lambda = 1000$ pacchetti/s e ne vengono scartati in media 50 al secondo, quindi $\lambda_p = 50$ pacchetti/s e $\lambda_s = 950$ pacchetti/s. La probabilità di perdita è $P_p = \lambda_p/\lambda = 5\%$.

---
## Slide 9 – Utente e servizio

- In una rete a pacchetto considerare il semplice «bit rate» del canale non è del tutto corretto
	- I bit sono raggruppati in pacchetti
	- L'unità di servizio è il pacchetto non il bit
		- In altre parole trasmetttere una porzione di bit appartenenti ad un pacchetto non ha senso di per se
- **Il riferimento è il tempo di servizio dell'intero pacchetto che solo se completato produce un risultato «utile» per l'utente**
- $\vartheta$: Tempo richiesto dal servizio di un generico cliente (pacchetto dati, PDU)
	- Servizio aleatorio
		- Si fa riferimento in prima battuta al tempo medio
	- Servizio deterministico
		- Tempo di servizio costante ed uguale al suo valore medio

>> Nel linguaggio della teoria delle code l'"utente" o "cliente" è il pacchetto e il "servitore" è il sistema di trasmissione (la linea in uscita). Il tempo di servizio $\vartheta$ di un pacchetto è il suo tempo di trasmissione.

---
## Slide 10 – La lunghezza del pacchetto

- *L* lunghezza del pacchetto in bit
- *C* capacità del canale in bit per secondo
- Ovviamente

$$\bar{\vartheta} = \frac{L}{C}$$

>> Esempio: un pacchetto da 1500 byte, cioè $L = 12\,000$ bit, su un canale da $C = 10$ Mbit/s richiede $\bar\vartheta = 12\,000 / 10^7 = 1{,}2$ ms. Se le lunghezze sono variabili, $\bar\vartheta = \bar L / C$ con $\bar L$ lunghezza media.

---
## Slide 11 – Frequenza di servizio

- L'inverso del tempo medio di servizio viene detto frequenza media di servizio

$$\mu = \frac{1}{\bar{\vartheta}}$$

- La frequenza media di servizio è legata alla presenza di utenti del sistema
	- Se non vi sono richieste di servizio ovviamente la frequenza di servizio è nulla
	- Se vi sono richieste di servizio il parametro da indicazione di quanto velocemente esse vengono soddisfatte

>> Con $\bar\vartheta = L/C$ si ha $\mu = C/L$ pacchetti al secondo. Nell'esempio precedente ($\bar\vartheta = 1{,}2$ ms) $\mu \approx 833$ pacchetti/s. $\mu$ è la velocità di servizio *quando il servitore lavora*: se è inattivo per mancanza di pacchetti non smaltisce nulla.

---
## Slide 12 – Il ruolo di μ

- Di fatto $\mu$ può essere interpretato come una sorta di capacità massima del servitore
- Se $\bar{\vartheta} = 0.5 \text{ s}$ ne consegue che il servitore al più smaltirà $\mu = 2 \text{ pacchetti/s}$
- Possiamo dire che il singolo servitore al massimo può smaltire m pacchetti

$$\lambda_s^{\max} = \mu$$

>> La "m" del terzo punto è un $\mu$ rimasto senza il simbolo greco: va letto "può smaltire $\mu$ pacchetti (al secondo)". Con $m$ servitori uguali il massimo diventa $\lambda_s^{\max} = m\mu$.

---
## Slide 13 – Di quale sistema parliamo

- Per le reti hanno particolare importanza i sistemi a coda

![[RT09-s013-1.png|600]]

- Utenti (pacchetti) arrivano con frequenza $\lambda$: una parte $\lambda_p$ viene persa, la parte accettata $\lambda_s$ entra nella Coda di attesa
- Uno o più servitori (sistemi di trasmissione)
- Nella reti a pacchetto 1 solo servitore è il caso di riferimento

>> Il caso di riferimento è un solo servitore perché ogni linea in uscita di un router trasmette un pacchetto alla volta. La coda è il buffer di uscita.

---
## Slide 14 – Cosa accade all'utente in un sistema a coda?

- L'utente permane nel sistema per un tempo che tiene conto dell'attesa in coda e del tempo di esecuzione del servizio
- $\bar\delta$ tempo medio totale speso dal singolo utente nel sistema a coda che è composto da
	- $\bar\vartheta$ tempo effettivo di servizio (l'utente fa le cose per le quali è entrato nel sistema)
	- *T<sub>A</sub>* tempo speso in coda, ossia tempo di attesa prima di essere effettivamente servito

$$\bar{\delta} = \bar{\vartheta} + \bar{T}_A$$

>> Per un router: $\bar T_A$ è il ritardo di accodamento (*queueing delay*), $\bar\vartheta$ il ritardo di trasmissione. Il ritardo di propagazione sul link non fa parte di $\bar\delta$, perché avviene fuori dal sistema a coda.

---
## Slide 15 – Il traffico

- Le prestazioni del sistema che fornisce il servizio dipendono:
	- Dalla numerosità degli arrivi, tipicamente frequenza media di arrivo (utenti per secondo)
	- Dalla durata del servizio, tipicamente la frequenza media di servizio (utenti al secondo) o il tempo medio di servizio (secondi)
- Si definisce **traffico** il numero medio di utenti presenti nel sistema
- Si dimostra che il prodotto fra frequenza di arrivo e tempo medio di permanenza nel sistema (teorema di Little) da il traffico

$$A = \lambda \bar{\delta}$$

>> **Teorema di Little**: numero medio nel sistema = frequenza media di ingresso × tempo medio di permanenza. Vale per qualunque sistema stabile, indipendentemente dalle distribuzioni di arrivi e servizi e dalla disciplina di coda. Se ci sono perdite, la frequenza da usare è quella degli utenti che entrano davvero, cioè $A = \lambda_s \bar\delta$. Nella slide si usa $\lambda$ perché si suppone $\lambda_p = 0$.
>>
>> Esempio: in un router entrano 2000 pacchetti/s e ciascuno resta in media 5 ms, quindi nel router ci sono in media $A = 2000 \cdot 0{,}005 = 10$ pacchetti.
>>
>> Si può applicare anche solo a una parte del sistema. Applicato alla sola coda dà il numero medio di pacchetti in attesa, $\lambda \bar T_A$. Applicato al solo servitore dà $\lambda\bar\vartheta$, cioè la frazione di tempo in cui il servitore è occupato (slide 29–31).

---
## Slide 16 – Alcune definizioni conseguenti

- Per analogia si definiscono
- $A_0 = \lambda \bar\vartheta$
	- Traffico offerto (occupazione media di un sistema ideale che serve subito tutti gli utenti senza attesa)
- $A_s = \lambda_s \bar\vartheta$
	- Traffico smaltito (occupazione media dei servitori del sistema)
	- Ci ricorda che se ls utenti mediamente entrano per unità di tempo entrano allora ls devono uscire
- $A_p = \lambda_p \bar\vartheta$
	- Traffico perduto (occupazione media di un sistema che serve gli utenti che invece sono stati rifiutati)

>> I due "ls" del secondo sotto-punto sono $\lambda_s$ (simbolo perso): "se $\lambda_s$ utenti mediamente entrano per unità di tempo, allora $\lambda_s$ devono uscire".
>>
>> Da $\lambda = \lambda_s + \lambda_p$ segue subito $A_0 = A_s + A_p$. Sono applicazioni di Little dove al posto di $\bar\delta$ c'è solo il tempo di servizio $\bar\vartheta$: si conta quanti servitori sono occupati in media, senza contare chi aspetta in coda.

---
## Slide 17 – Il traffico smaltito

- *A<sub>s</sub>* da una valutazione della capacità di servizio del sistema considerato
- Se i servitori sono impegnati al 100% il sistema esprime tutta la sua capacità di servizio
- Se i servitori sono *m* allora

$$0 \le A_s \le m$$

- *A<sub>s</sub>* è spesso indicato con il nome di *throughput*

>> Con un solo servitore ($m = 1$), $A_s = \lambda_s\bar\vartheta = \lambda_s/\mu \le 1$ è la frazione di tempo in cui il servitore lavora. Per esempio $A_s = 0{,}7$ Erlang vuol dire canale occupato il 70% del tempo, cioè throughput pari al 70% della capacità.

---
## Slide 18 – In un sistema ideale

![[RT09-s018-1.png|600]]

- Il sistema ha una capacità massima finita di smaltire richieste (dipende dalle condizioni in cui opera): $\lambda_s^{\max}$
- Finché non si raggiunge la capacità massima: $\lambda_s = \lambda$
- Se le richieste offerte sono eccessive una parte non può essere soddisfatta: $\lambda_p = \lambda - \lambda_s$

>> Il grafico mostra il throughput in funzione del carico offerto. La curva cresce come la bisettrice $\lambda_s = \lambda$ e poi diventa piatta a $\lambda_s^{\max}$. Quello che supera il massimo viene perso. In un sistema "ideale" la capacità è sfruttata tutta: il tratto orizzontale sta proprio al massimo teorico ($\mu$, cioè $C/L$ per un canale).

---
## Slide 19 – In un sistema reale

![[RT09-s019-1.png|600]]

- La riduzione di capacità si interpreta come perdita di efficienza
- ***Efficienza del protocollo***

$$\eta = \frac{\lambda_s^{\mathrm{e}}}{\lambda_s^{\max}} \le 1$$

- La riduzione di capacità obbliga il livello superiore a limitare la proprie richieste pena la perdita dei dati

>> In un sistema reale il throughput si satura a un valore $\lambda_s^{\mathrm e}$ ("effettivo") più basso del massimo teorico, per via di overhead, errori, tempi morti, ecc. (slide 21). La freccia tratteggiata sull'asse $\lambda$ indica che il carico che si può offrire senza perdite scende da $\lambda_s^{\max}$ a $\lambda_s^{\mathrm e}$. Esempio: se una LAN da 10 Mbit/s smaltisce al più 6 Mbit/s di dati utili, $\eta = 0{,}6$.

---
## Slide 20 – Capacità massima ed efficienza

- Quali sono le prestazioni ideali per un protocollo data link?
	- Poiché il protocollo invia i bit dello strato 3 sul canale la sua capacità massima teorica è la velocità del canale *C*
- Il tempo medio di servizio minimo possibile sarebbe quindi

$$\bar{\vartheta} = \frac{L}{C} = \frac{1}{\mu}$$

- Se il protocollo richiede maggiore tempo per la completa trasmissione della trama allora

$$\bar{\vartheta}_e = \frac{L}{C_e} > \frac{1}{\mu}$$

>> $C_e < C$ è la capacità effettiva vista dai dati dello strato 3. Combinando con la slide 19 si ottiene
>>
>> $$\eta = \frac{\lambda_s^{\mathrm e}}{\lambda_s^{\max}} = \frac{1/\bar\vartheta_e}{1/\bar\vartheta} = \frac{\bar\vartheta}{\bar\vartheta_e} = \frac{C_e}{C}$$
>>
>> che è la formula della slide 23.

---
## Slide 21 – Ce

- La capacità effettiva dipende dal protocollo
- Se le funzionalità richieste o una situazione non ideale richiedono più tempo per ogni PDU allora parte della capacità risulta inutilizzabile per i dati degli utenti
	- PCI necessarie per la segnalazione
	- Errori di trasmissione
	- Ritrasmissioni
	- Tempi morti legati alle dinamiche del protocollo
	- Tempi morti in attesa di accedere al canale

>> Esempi: la PCI sono header e trailer della trama. Errori e ritrasmissioni sono quelli di ARQ. I tempi morti del protocollo sono per esempio l'attesa dell'ACK in stop-and-wait. I tempi morti di accesso sono le collisioni e i backoff dei protocolli ad accesso casuale (ALOHA, CSMA), che vengono analizzati più avanti nella lezione (vedi anche [[08 - Local Area Network e accesso multiplo]]).

---
## Slide 22 – Unità di misura

- Il traffico è una grandezza adimensionale
	- Moltiplico richieste di servizio per unità di tempo (secondo) per la durata del servizio in unità di tempo (secondi)

$$A_0 = \lambda \bar{\vartheta}$$

- Formalmente si misura con una unità fittizia detta Erlang

>> $[\text{richieste/s}] \cdot [\text{s}] = $ numero puro. 1 Erlang corrisponde a un servitore occupato in continuazione. Esempio: $\lambda = 100$ pacchetti/s con $\bar\vartheta = 5$ ms danno $A_0 = 0{,}5$ Erlang, cioè una linea occupata in media al 50%.

---
## Slide 23 – Valutazione efficienza

- Per valutare l'efficienza di solito si fa riferimento alla PDU
- Si confronta:
	- La quantità di tempo strettamente utilizzato per inviare i soli dati d'utente (SDU)
	- La quantità di tempo utilizzato complessivamente per completare correttamente l'invio della PDU
		- In funzione delle regole del protocollo
- L'efficienza è data dal rapporto fra queste due quantità
- Questo problema l'abbiamo studiato lo scorso anno studiando i protocolli ARQ

![[RT09-s023-1.png|300]]

$$\eta = \frac{T_u}{T_0} = \frac{\bar{\vartheta}}{\bar{\vartheta}_{\mathrm{e}}}$$

>> Nel diagramma temporale (tempo verso il basso, trasmettitore a sinistra, ricevitore a destra) ogni trama ha una parte scura (PCI) e una parte chiara (SDU). $T_u$ è il tempo per trasmettere solo la SDU. $T_0$ è l'intervallo fra l'inizio di una trama e l'inizio della successiva, quindi comprende PCI, propagazione e tempi morti.
>>
>> Esempio (stop-and-wait, senza errori, PCI e ACK trascurabili): $T_0 = T_f + 2\tau$, quindi $\eta = \dfrac{1}{1+2a}$ con $a = \tau/T_f$. Con $T_f = 1$ ms e $\tau = 0{,}5$ ms si ottiene $\eta = 0{,}5$.

---
## Slide 24 – Reti commutate: il sistema a coda con singolo servitore

Reti commutate: il sistema a coda con singolo servitore

---
## Slide 25 – Il nodo di commutazione a pacchetto

![[RT09-s025-1.png|600]]

- Linee di ingresso → Funzione di instradamento → Linee di uscita
- Tabella di instradamento (consultata dalla funzione di instradamento)

>> Ogni linea (in ingresso e in uscita) ha il proprio buffer, disegnato come coda. La funzione di instradamento consulta la tabella e smista ogni pacchetto verso la coda della linea di uscita giusta (il pacchetto bordato di arancione è uno appena smistato). Il riquadro rosso mette in evidenza una singola linea di uscita con la sua coda: è il sistema che si studia nelle slide seguenti.

---
## Slide 26 – La congestione

![[RT09-s026-1.png|450]]

>> Più pacchetti, arrivati da linee di ingresso diverse, devono uscire nello stesso momento sulla stessa linea di uscita (la "X" e l'esplosione indicano il conflitto). Una linea trasmette un solo pacchetto alla volta, quindi gli altri vanno messi in coda. Se il carico verso quella uscita resta troppo alto, la coda cresce e alla fine si riempie: ritardi e perdite sono gli effetti della congestione.

---
## Slide 27 – Coda singolo servitore

- Ogni collegamento in uscita viene schematizzato come sistema coda singolo servitore

![[RT09-s027-1.png|600]]

- Utenti (pacchetti), $\lambda$, $\lambda_s$, $\lambda_p$, Coda di attesa, Servitore (sistema di trasmissione)

---
## Slide 28 – Alcune ipotesi semplificative

- Le perdite di pacchetti in prima approssimazione sono trascurabili (coda infinita) $\lambda_p = 0$, $\lambda_s = \lambda$
- I pacchetti arrivano causalmente con distribuzione di Poisson

$$\Pr\{k \text{ arrivals during } t\} = P(k,t) = \frac{(\lambda T)^k}{k!} e^{-\lambda T}$$

- La dimensione dei pacchetti è casuale con distribuzione esponenziale uguale per tutti i pacchetti

$$\Pr\{\vartheta \le t\} = F_\vartheta(t) = 1 - e^{-\frac{t}{\bar\vartheta}}$$

>> "causalmente" è un refuso per "casualmente". Nella formula di Poisson l'intervallo viene chiamato prima $t$ e poi $T$: è lo stesso intervallo, da leggere $P(k,t) = \frac{(\lambda t)^k}{k!}e^{-\lambda t}$.
>>
>> **Arrivi di Poisson**: arrivi indipendenti fra loro, con numero medio $\lambda t$ in un intervallo $t$. In modo equivalente, i tempi fra un arrivo e il successivo sono esponenziali di media $1/\lambda$. È un buon modello quando il traffico è la somma di molte sorgenti indipendenti.
>>
>> **Servizio esponenziale**: dato che $\vartheta = L/C$, se le lunghezze $L$ sono esponenziali anche il tempo di servizio è esponenziale, con media $\bar\vartheta = \bar L/C$. L'esponenziale è "senza memoria": il tempo di servizio che resta non dipende da quanto servizio è già stato fatto.
>>
>> Con queste ipotesi (arrivi Markoviani, servizio Markoviano, 1 servitore, coda infinita) si ha la coda **M/M/1** della notazione di Kendall.

---
## Slide 29 – Utilizzazione

- Il servitore alterna fasi di lavoro a fasi di pausa
	- Idealmente vorremmo il servitore sempre attivo
		- Il servitore in pausa è uno spreco di risorse
	- Il servitore può essere attivo solo se ci sono clienti da servire
		- I clienti arrivano in modo casuale e può capitare che ci sia un periodo di tempo senza arrivi

![[RT09-s029-1.png|650]]

$$\rho = \frac{B(T)}{T}$$

- Asse verticale: Servitore singolo – Numero di clienti ins ervizio (1 o 0)

>> $B(T)$ (*busy time*) è la somma dei periodi in cui il servitore è occupato in un intervallo di osservazione $T$. Nel grafico i tratti blu in alto sono quei periodi messi uno dopo l'altro. L'utilizzazione $\rho$ è la frazione di tempo in cui il servitore lavora, quindi $0 \le \rho \le 1$. Nell'etichetta dell'asse c'è un refuso ("ins ervizio" sta per "in servizio").

---
## Slide 30 – Servitore occupato

- In un sistema a servitore singolo l'utilizzazione è la percentuale di tempo per cui il servitore è impegnato
- In un sistema ergodico questa è anche la probabilità di trovare il servitore occupato in un instante qualunque
- Quindi

$$\rho = \Pr\{\text{Servitore occupato}\} = \Pr\{\text{Pacchetto accodato}\}$$

>> *Ergodico* vuol dire che la media nel tempo (frazione di tempo occupato) coincide con la media statistica (probabilità di trovarlo occupato in un istante a caso). La seconda uguaglianza vale perché gli arrivi sono di Poisson (proprietà PASTA, *Poisson Arrivals See Time Averages*): un pacchetto che arriva trova il servitore occupato con probabilità $\rho$ e in quel caso deve aspettare in coda.

---
## Slide 31 – Traffico e utilizzazione

$$\rho = \frac{\lambda}{\mu}$$

- Questa grandezza è significativa perché confronta il ritmo di arrivo con quello di servizio

![[RT09-s031-1.png|550]]

- Il numero medio di utenti nel sistema tende all'infinito

>> $\rho = \lambda/\mu = \lambda\bar\vartheta$, quindi per un solo servitore senza perdite $\rho$ coincide con il traffico offerto $A_0$ (e con $A_s$). Il sistema è stabile solo se $\rho < 1$, cioè se in media arrivano meno pacchetti di quanti il servitore ne può smaltire.
>>
>> La curva è il numero medio di utenti nel sistema M/M/1:
>>
>> $$A = \frac{\rho}{1-\rho}$$
>>
>> Valori: $\rho = 0{,}5 \Rightarrow A = 1$, $\rho = 0{,}8 \Rightarrow A = 4$, $\rho = 0{,}9 \Rightarrow A = 9$, $\rho = 0{,}95 \Rightarrow A = 19$. Il fumetto indica $A \approx 15$, cioè $\rho \approx 0{,}94$. Vicino a $\rho = 1$ basta poco carico in più per far crescere molto il numero medio di utenti e quindi il ritardo. Per questo le linee non si dimensionano per lavorare vicino al 100%.

---
## Slide 32 – Tempo medio di attesa in coda

![[RT09-s032-1.png|600]]

$$\bar{T}_A = \bar{\vartheta} \frac{\rho}{1-\rho}$$

- Se il tempo di servizio diminuisce lo fa anche il tempo di attesa in coda
- Curve per θ = 0.1, θ = 1, θ = 10

>> La $\theta$ della legenda è il tempo medio di servizio $\bar\vartheta$. Formula dell'attesa media in coda per M/M/1. Il tempo medio totale nel sistema è $\bar\delta = \bar\vartheta + \bar T_A = \dfrac{\bar\vartheta}{1-\rho}$. Con Little: $\lambda\bar\delta = \dfrac{\rho}{1-\rho} = A$, che è la curva della slide 31.
>>
>> Verifica dei punti rossi a $\rho = 0{,}6$, dove $\frac{\rho}{1-\rho} = 1{,}5$: $\bar T_A = 0{,}15$ per $\bar\vartheta = 0{,}1$, $\bar T_A = 1{,}5$ per $\bar\vartheta = 1$, $\bar T_A = 15$ per $\bar\vartheta = 10$. Il grafico è corretto.
>>
>> Conseguenza pratica: a parità di utilizzazione, una linea più veloce (con $C$ dieci volte più grande, $\bar\vartheta = L/C$ è dieci volte più piccolo) ha un'attesa in coda dieci volte più breve.

---
## Slide 33 – La statistica del tempo di servizio

- Il traffico nel sistema cambia se cambia la statistica del tempo di servizio
	- Servizio casuale con distribuzione esponenziale (M)
	- Servizio deterministico ossia sempre uguale (D)

$$\bar{T}_A = \bar{\vartheta}\frac{\rho}{1-\rho}$$

$$\bar{T}_A = \bar{\vartheta}\frac{\rho}{2(1-\rho)}$$

![[RT09-s033-1.png|500]]

- M/M/1: Random (Poisson); M/D/1: Deterministic

>> Prima formula: M/M/1. Seconda formula: M/D/1. Sono due casi della formula di Pollaczek–Khinchine per la coda M/G/1:
>>
>> $$\bar T_A = \bar\vartheta\,\frac{\rho\,(1 + c_\vartheta^2)}{2(1-\rho)}$$
>>
>> dove $c_\vartheta$ è il coefficiente di variazione del tempo di servizio (deviazione standard / media). Per il servizio esponenziale $c_\vartheta = 1$, per quello deterministico $c_\vartheta = 0$. Quindi a parità di $\rho$ e $\bar\vartheta$ i pacchetti di lunghezza fissa **dimezzano** l'attesa in coda.
>>
>> Il grafico, con asse "A", riporta il numero medio di utenti nel sistema $A = \rho + \lambda\bar T_A$ (Little), non direttamente $\bar T_A$. Per M/M/1 $A = \frac{\rho}{1-\rho}$. Per M/D/1 $A = \rho + \frac{\rho^2}{2(1-\rho)}$. Per esempio a $\rho = 0{,}8$ si ha $A = 4$ (M/M/1) contro $A = 2{,}4$ (M/D/1). Entrambe le curve vanno all'infinito per $\rho \to 1$.

---
## Slide 34 – Un classico problema nella progettazione dei protocolli

- Pacchetti di lunghezza predeterminata e tutti uguali migliorano le prestazione in caso di accodamento
- I dati di utente arrivano in quantità casuale quindi è necessario il **padding**

![[RT09-s034-1.png|550]]

- SDU (User Data) inserita in un pacchetto di lunghezza fissa (Fixed packet length) insieme alla PCI
- Padding: Bit senza significato Di solo riempimento

>> Esempi reali: ATM usa celle tutte di 53 byte (48 di payload e 5 di header). In Ethernet c'è una lunghezza *minima* di trama di 64 byte: se i dati sono meno di 46 byte si aggiunge padding. Questo però serve a far funzionare la rilevazione delle collisioni di CSMA/CD, non a migliorare l'accodamento (vedi [[08 - Local Area Network e accesso multiplo]]).

---
## Slide 35 – Il compromesso

- I pacchetti di lunghezza fissa migliorano il tempo di attesa in coda
- Il padding aumenta la lunghezza dei pacchetti, quindi aumenta il tempo di servizio e quindi peggiora il tempo di attesa in coda
- Cosa conviene?

>> Dipende da quanto padding serve e dal carico. Esempio indicativo: con lunghezze variabili (modello M/M/1) e $\rho = 0{,}5$ si ha $\bar T_A = \bar\vartheta \cdot \frac{0{,}5}{0{,}5} = 1{,}0\,\bar\vartheta$.
>> - Se con il padding i pacchetti diventano il 20% più lunghi, il tempo di servizio sale a $1{,}2\,\bar\vartheta$ e $\rho$ sale a $0{,}6$. Con M/D/1 si ottiene $\bar T_A = 1{,}2\,\bar\vartheta \cdot \frac{0{,}6}{2 \cdot 0{,}4} = 0{,}9\,\bar\vartheta$: la lunghezza fissa conviene.
>> - Se i pacchetti diventano il 50% più lunghi, $\rho = 0{,}75$ e $\bar T_A = 1{,}5\,\bar\vartheta \cdot \frac{0{,}75}{2 \cdot 0{,}25} = 2{,}25\,\bar\vartheta$: la lunghezza fissa non conviene.
>>
>> In più il padding riduce sempre l'efficienza $\eta$, perché una parte della capacità viene spesa per trasmettere bit senza significato.
---
## Slide 36 – Protocolli ad accesso casuale: funzionalità e prestazioni

Protocolli ad accesso casuale: funzionalità e prestazioni

>> Inizia la parte sul livello MAC delle LAN: con un mezzo condiviso le stazioni devono decidere *quando* trasmettere senza un coordinatore centrale. Si misura quanto traffico riesce a passare (traffico smaltito $A_s$, o throughput $S$) in funzione del traffico offerto. I protocolli sono gli stessi visti in [[08 - Local Area Network e accesso multiplo]], qui se ne ricavano le prestazioni.

---
## Slide 37 -> 38 – Protocolli ad accesso casuale

![[RT09-s037-1.png|600]]

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

>> L'albero si legge in base a due capacità della stazione: ascoltare il canale *prima* di trasmettere (carrier sensing, la CAP della slide successiva) e accorgersi della collisione *mentre* trasmette (collision detection, legata alla CRA). ALOHA non fa nessuna delle due, CSMA fa solo la prima, CSMA/CD le fa entrambe. CSMA/CA (Wi-Fi) ascolta il canale ma, non potendo rilevare le collisioni via radio, cerca di evitarle (Collision Avoidance) e usa gli ACK.

- CAP - Channel Access Procedure
	- E' l'insieme delle procedure che la stazione effettua per realizzare l'accesso al canale
		- Capacità di capire se il canale è già utilizzato
		- Impossibilità di monitorare il canale per capire se qualcuno lo sta utilizzando
- CRA - Collision Resolution Algorithm
	- E' l'insieme delle procedure che la stazione effettua per rivelare ed eventualmente recuperare situazioni di collisione
		- Capacità o meno di capire se una collisione sta avvenendo od è avvenuta a valle di una trasmissione

>> I due sotto-punti della CAP sono le due alternative possibili: la stazione può ascoltare il canale (CSMA) oppure non può farlo (ALOHA). Per la CRA conta se la collisione si scopre *durante* la trasmissione (CSMA/CD, che si interrompe subito) o solo *dopo* (ALOHA e CSMA, tramite la mancata eco o il mancato ACK). In ogni caso la ritrasmissione avviene dopo un back-off casuale.

---
## Slide 39 – Parametri caratterizzanti la LAN

- **$L$** : lunghezza massima della trama
	- Tutte le trame sono della dimensione massima
- **$C$** : velocità di trasmissione sul mezzo
- **$d$** : massima distanza fra due stazioni della LAN
- **$v$** : velocità di propagazione del segnale
- **$\vartheta = L/C$** : tempo di trasmissione di una trama
- **$d/v$** : tempo di propagazione di un singolo bit sulla LAN
- **$Cd/v$** : massimo numero di bit che possono essere presenti contemporaneamente sulla LAN

>> $\vartheta = L/C$ è il tempo di servizio già visto per il sistema a coda: il tempo per "mettere sul filo" tutti gli $L$ bit. $d/v$ è invece il tempo che il segnale impiega ad andare da un capo all'altro della LAN (nel rame $v \approx 2\cdot 10^8$ m/s, cioè circa 5 µs per km).
>>
>> $Cd/v$ è il prodotto banda × ritardo: mentre il primo bit viaggia da un estremo all'altro, il trasmettitore ne immette altri $C \cdot d/v$. Nelle slide successive $\vartheta$ viene indicato anche con $T$.

---
## Slide 40 – LAN ideale

- Utilizza una CAP ideale
	- Coordina le stazioni per evitare accessi contemporanei al canale di trasmissione
	- Tutte le trame in arrivo vengono trasmesse con successo, quindi $A_s = A_0$
- Il tempo di propagazione della trama è nullo
- È possibile trasmettere le trame una di seguito all'altra
	- Il canale di trasmissione della LAN può essere utilizzato al 100%

![[RT09-s040-1.png|450]]

- Se $A_0 < 1$ allora $\lambda_s = \lambda$
- Se $A_0 \ge 1$ allora $A_S = 1$
- La LAN ideale permette di smaltire tutto il traffico offerto, fino alla saturazione del canale

>> Il traffico (in Erlang) è $A_0 = \lambda\vartheta$ (offerto) e $A_s = \lambda_s\vartheta$ (smaltito): la frazione di tempo in cui il canale è occupato da trame utili. Dire $\lambda_s = \lambda$ equivale a dire $A_s = A_0$. Un canale non può trasmettere più di una trama alla volta, quindi $A_s \le 1$ Erlang: la LAN ideale si comporta come un singolo servitore perfetto, con $A_s = \min(A_0, 1)$.

---
## Slide 41 – Propagazione reale (topologia bus)

- La trama impiega un tempo non nullo per attraversare la LAN
	- $t$ : A inizia la trasmissione
	- $t + L/C$ : A termina la trasmissione
	- $t + d/v$ : B riceve il primo bit
	- $t + L/C + d/v$ : B riceve l'ultimo bit

![[RT09-s041-1.png|350]]![[RT09-s041-2.png|300]]

>> A sinistra la trama emessa da A percorre il bus fino a B (i triangoli alle estremità sono i terminatori). A destra il diagramma spazio-tempo fra A e B, con la durata $T_0$ divisa in $L/C$ e $d/v$.
>>
>> Il diagramma spazio-tempo si legge dall'alto verso il basso (il tempo scorre in giù): la banda inclinata è la trama che viaggia da A a B. La LAN resta occupata dall'istante in cui A emette il primo bit fino a quando l'ultimo bit arriva a B, cioè per
>> $$T_0 = \frac{L}{C} + \frac{d}{v}$$
>> Solo dopo questo istante un'altra stazione può trasmettere senza rischiare di sovrapporsi (con un MAC ideale che lo sa).

---
## Slide 42 – Efficienza con MAC ideale

- Una trama tiene impegnata la LAN per $T_0$
- Il canale di trasmissione non può più essere usato al 100%
- Al massimo viene utilizzato per T secondi ogni $T_0$
- **Efficienza** del MAC

$$\eta = T/T_0 = \frac{L/C}{L/C + d/v} = \frac{1}{1+a}$$

- L'efficienza pone un limite superiore al massimo traffico smaltito $A_S$

$a = Cd/vL$ è interpretabile come la lunghezza della LAN misurata in PDU

![[RT09-s042-1.png|500]]

>> Il passaggio si ottiene dividendo numeratore e denominatore per $L/C$:
>> $$\eta = \frac{1}{1 + \frac{d/v}{L/C}}, \qquad a = \frac{d/v}{L/C} = \frac{\text{tempo di propagazione}}{\text{tempo di trasmissione}} = \frac{Cd}{vL}$$
>> Qui $T$ indica il tempo di trasmissione della trama ($T = \vartheta = L/C$).
>>
>> Lettura del disegno: sulla LAN ci stanno $Cd/v$ bit, cioè $Cd/(vL) = a$ trame. Se $a \ll 1$ la trama è molto più lunga della rete e il "tempo morto" di propagazione pesa poco ($\eta \to 1$); se $a \gg 1$ ogni trama occupa la rete per un tempo dominato dalla propagazione ($\eta \to 0$). Anche un MAC ideale, che conosce perfettamente lo stato delle altre stazioni, non può fare meglio di $1/(1+a)$.

---
## Slide 43 – Traffico smaltito dalla LAN

- $A_0 < 1/(1+a)$
	- Tutte le trame in arrivo vengono trasmesse
	- $A_S = A_0$
- $A_0 \ge 1/(1+a)$
	- Il MAC non permette la trasmissione di tutte le trame
	- Parte delle trame viene accodata
	- $A_s = 1/(1+a) < A_0$

![[RT09-s043-1.png|450]]

>> Rispetto alla LAN ideale (slide 40) la saturazione arriva prima: $A_s = \min\left(A_0, \frac{1}{1+a}\right)$. Valori delle tre curve: $a = 0{,}2 \Rightarrow 1/1{,}2 \approx 0{,}83$; $a = 1 \Rightarrow 0{,}5$; $a = 5 \Rightarrow 1/6 \approx 0{,}17$, coerenti con il grafico.

---
## Slide 44 – Esempio numerico

- $d = 1$ km $\quad v = 200000$ km/s $\quad d/v = 100$
- $C = 10$ Mbit/s
- $d/v = 5\cdot 10^{-6}$
- $C\,d/v = 10\cdot 10^{+6} \cdot 5\cdot 10^{-6} = 50$
- $a = 50/100 = 0{,}5 \quad \eta = 1/1{,}5 = 0{,}67$
- $C = 100$ Mbit/s
- $C\,d/v = 500$
- $a = 500/100 = 5 \quad \eta = 1/6$
- $C = 1$ Gbit/s
- $C\,d/v = 5000$
- $a = 5000/100 = 50 \quad \eta = 1/51$

>> Refuso nella prima riga: "$d/v = 100$" va letto **$L = 100$ bit** (lunghezza della trama). Infatti $d/v = 1/200000$ s $= 5$ µs, come scritto nella riga successiva, e il 100 compare poi al denominatore di $a = Cd/(vL)$.
>>
>> Verifica (calcoli corretti):
>>
>> | $C$ | $Cd/v$ (bit sulla LAN) | $a = Cd/(vL)$ | $\eta = 1/(1+a)$ |
>> |---|---|---|---|
>> | 10 Mbit/s | 50 | 0,5 | 0,667 |
>> | 100 Mbit/s | 500 | 5 | 0,167 |
>> | 1 Gbit/s | 5000 | 50 | 0,0196 |
>>
>> A parità di distanza e di lunghezza di trama, aumentare $C$ di 10 volte moltiplica $a$ per 10: la trama dura meno ma la propagazione no. Una trama di 100 bit è molto corta; con trame Ethernet massime ($L = 12000$ bit) a 1 Gbit/s su 1 km si avrebbe $a \approx 0{,}42$ e $\eta \approx 0{,}71$.

---
## Slide 45 – Quale efficienza per le LAN

- **$a$** determina le prestazioni della LAN
- Maggiore è la lunghezza del canale in trame, minore risulta il traffico massimo smaltibile (massimo throughput)
	- I protocolli ad accesso multiplo sono efficienti quando le distanze e le velocità di trasmissione sono abbastanza limitati

![[RT09-s045-1.png|450]]

>> La curva è $\eta(a) = 1/(1+a)$: vale 1 per $a = 0$, 0,5 per $a = 1$ e circa 0,09 per $a = 10$. Per questo le reti ad accesso multiplo funzionano bene solo su distanze brevi (LAN) e, al crescere della velocità, richiedono di ridurre la distanza o allungare le trame (come fa Ethernet con la trama minima). Su distanze grandi, come un collegamento satellitare, $a$ è enorme.

---
## Slide 46 – Protocollo a contesa: ALOHA

- È nato nel 1970 per collegare tra loro le università delle isole Hawaii.
- Prevede stazioni a terra ed un satellite geostazionario
	- Le stazioni trasmettono tutte sul medesimo canale radio (uplink)
	- Il satellite ritrasmette a terra amplificati i dati su un canale diverso (downlink)
- **CAP**
	- Quando un trasmettitore ha una trama da trasmettere la trasmette senza alcun verifica preventiva
	- La trama viene ritrasmessa dal satellite verso tutte le stazioni
	- La stazione trasmittente riceve la propria trama ed ha quindi conferma della corretta trasmissione
- **CRA**
	- Quando due stazioni trasmettono contemporaneamente i segnali collidono e si interferiscono sull'uplink
	- Il satellite scarta le trame non correttamente ricevute
	- La stazione non riceve la propria trama sul downlink e quindi identifica una collisione
	- Non ritrasmette subito ma fa partire l'algoritmo di **back-off**
		- Sceglie l'istante per la ritrasmissione in modo aleatorio all'interno di un intervallo di lunghezza prefissata $T_b$ (tempo di back-off)

>> Nota storica: l'ALOHAnet originale (Abramson, Università delle Hawaii, operativa dal 1971) usava collegamenti radio terrestri, e il ruolo di "ripetitore" lo svolgeva la stazione centrale di Oahu. Il modello con satellite è quello con cui lo schema è stato poi applicato e con cui viene spesso presentato.
>>
>> Il back-off casuale è essenziale: se le due stazioni coinvolte ritrasmettessero dopo un tempo fisso, colliderebbero di nuovo all'infinito.

---
## Slide 47 – Aloha: prestazioni

- Assumiamo che i pacchetti generati dalle sorgenti di traffico (applicazioni) determinino gli arrivi di trame alle stazioni secondo un **processo di Poisson** con frequenza media di arrivo **$\lambda$**
	- Tenendo conto delle ritrasmissioni, il numero medio di pacchetti trasmessi in effetti al satellite nell'unità di tempo è **$\lambda_r > \lambda$**
	- Le collisioni con successive ritrasmissioni generano delle **correlazioni** fra gli arrivi, ma le trascuriamo in prima approssimazione (il traffico in arrivo al MAC è ancora di Poisson)

>> In un processo di Poisson di frequenza $\lambda$ il numero di arrivi in un intervallo di durata $t$ ha distribuzione
>> $$P(k \text{ arrivi in } t) = \frac{(\lambda t)^k}{k!}\, e^{-\lambda t}, \qquad P(0 \text{ arrivi in } t) = e^{-\lambda t}$$
>> È il modello di molte sorgenti indipendenti, ognuna poco attiva. $\lambda_r$ comprende sia le trame nuove sia le ritrasmissioni: è il carico che il canale "vede" davvero. L'ipotesi che anche $\lambda_r$ sia poissoniano è un'approssimazione, ragionevole se $T_b$ è grande (le ritrasmissioni sono sparse a caso nel tempo).

---
## Slide 48 – Traffico offerto e smaltito

- Ipotesi:
	- Trame tutte uguali di lunghezza pari a L e quindi richiedono un tempo di trasmissione pari a T
- Traffico offerto dalle applicazioni

$$A_0 = \lambda T$$

- Traffico offerto al MAC

$$G = \lambda_r T$$

- A causa delle collisioni $\lambda_r \ge \lambda$
- Il traffico smaltito è pari al traffico offerto che viene trasmesso senza collidere
	- Una trama viene trasmessa senza collidere con probabilità $P_0$

**$A_s = G\,P_0$**

>> Tre grandezze in Erlang (numero medio di trame per tempo di trama $T$): $A_0$ è il traffico nuovo, $G$ il totale dei tentativi (nuove + ritrasmissioni), $A_s$ i tentativi andati a buon fine. In regime stazionario, se nessuna trama viene scartata definitivamente, tutto ciò che entra prima o poi esce: $A_s = A_0$. Il problema è quanto deve crescere $G$ per smaltire un dato $A_0$, e se esiste un massimo oltre cui non si va.

---
## Slide 49 – Intervallo di vulnerabilità

![[RT09-s049-1.png|500]]

- Si definisce **intervallo di vulnerabilità** $T_v$ l'intervallo all'interno del quale una trasmissione può dar luogo a collisione
- Nel caso di ALOHA vale **$T_v = 2T$**
	- La trama considerata inizia in $t_0$ e finisce in $t_0 + T$
	- Si ha collisione se
		- il primo bit della trama considerata si sovrapponga all'ultimo bit di una trama precedente
		- Il primo bit di una nuova trama si sovrapponga all'ultimo bit della trama considerata
	- Nessuna trama deve essere trasmessa per un tempo T prima di $t_0$ e per un tempo T successivo a $t_0$

>> Nel disegno la trama blu è quella considerata; le gialle iniziano in $t_a \in (t_0 - T, t_0)$ e in $t_b \in (t_0, t_0 + T)$ e la rovinano entrambe. Una trama che inizia prima di $t_0 - T$ è già finita in $t_0$; una che inizia dopo $t_0 + T$ trova la blu già conclusa. Basta una sovrapposizione anche di un solo bit perché entrambe le trame siano perse.

---
## Slide 50 – Calcolo del Throughput

- La probabilità di non avere una trasmissione in $2T$ (probabilità di non collisione) è

$$P_0 = e^{-2\lambda_r T} = e^{-2G}$$

- Quindi il numero medio di trasmissioni aventi successo (traffico smaltito $A_s$) è pari a

$$A_s = G\,e^{-2G}$$

- Valore massimo di $A_s$

**$A_S^{max} = 1/(2e) \approx 0.18$ per $G = 0.5$**

>> $P_0$ è la probabilità di zero arrivi di Poisson (frequenza $\lambda_r$) nell'intervallo di vulnerabilità $T_v = 2T$: $P_0 = e^{-\lambda_r \cdot 2T} = e^{-2G}$.
>>
>> Il massimo si trova annullando la derivata:
>> $$\frac{dA_s}{dG} = e^{-2G}(1 - 2G) = 0 \;\Rightarrow\; G = \tfrac{1}{2}, \qquad A_s^{max} = \tfrac{1}{2}e^{-1} = \frac{1}{2e} \approx 0{,}184$$
>> (verificato numericamente). In pratica ALOHA puro usa al massimo circa il 18% della capacità del canale: con un canale da 1 Mbit/s passano al più circa 184 kbit/s di trame utili.

---
## Slide 51 – Aloha: throughput

- $A_s \approx G$ per piccoli valori di G
- $A_s \to 0$ per grandi valori di G

![[RT09-s051-1.png|550]]

- Pochi tentativi di trasmissione
- Compromesso fra numero di tentativi e relativi successi
- Troppe collisioni

>> Per $G$ piccolo $e^{-2G} \approx 1$: quasi tutti i tentativi riescono, quindi $A_s \approx G$. Per $G$ grande il fattore esponenziale prevale e quasi tutto collide.
>>
>> Per ogni $A_s < 1/(2e)$ esistono due valori di $G$ che lo producono: uno a sinistra del massimo (stabile, poche ritrasmissioni) e uno a destra (molte ritrasmissioni). Se il sistema finisce sul ramo destro, più collisioni portano più ritrasmissioni, quindi $G$ cresce e $A_s$ cala ancora: è il problema di stabilità dei protocolli a contesa.

---
## Slide 52 – Throughput di Aloha

![[RT09-s052-1.png|500]]

>> Stessa curva $S = G\,e^{-2G}$ della slide precedente, con $G$ su scala logaritmica (da $10^{-2}$ a $10^{1}$). Qui il traffico smaltito è chiamato throughput $S$. Alcuni valori: $S(0{,}01) \approx 0{,}0098$, $S(0{,}1) \approx 0{,}082$, $S(0{,}5) \approx 0{,}184$ (massimo), $S(1) \approx 0{,}135$, $S(5) \approx 0{,}0002$. La scala log fa vedere bene che sotto $G \approx 0{,}1$ si ha $S \approx G$ e che oltre $G \approx 3$ il canale è praticamente bloccato dalle collisioni.

---
## Slide 53 -> 54 – Slotted Aloha

- Un possibile miglioramento: **SLOTTED ALOHA**.
	- Il sistema lavora in modo **sincrono**: l'asse dei tempi viene diviso in intervalli (slot) di lunghezza T
	- Le trame vengono trasmesse in corrispondenza di istanti predefiniti

![[RT09-s053-1.png|600]]

- Sequenza di sincronismo trasmessa dal satellite

Prima di iniziare le trasmissioni la stazione deve acquisire il sincronismo, inviando trame di tentativo e rivelando come si posizionano rispetto agli slot
Due trame o si sovrappongono completamente o non si sovrappongono per nulla

>> Nel disegno la trama blu e la gialla sopra di lei partono nello stesso slot e collidono completamente; la gialla nello slot successivo non dà fastidio a nessuno. Una stazione che genera una trama a metà slot deve aspettare l'inizio dello slot successivo: si paga un ritardo medio aggiuntivo di $T/2$ in cambio di un throughput doppio.

- L'intervallo di vulnerabilità si riduce a T
	- $P_0 = e^{-G}$
	- $A_s = Ge^{-G}$
	- il massimo di $A_s$ vale **$A_s^{max} = 1/e \cong 0.36$** per $G_{max} = 1$

![[RT09-s054-1.png|450]]

>> Ora collidono solo le trame che iniziano nello stesso slot, quindi la finestra è $T_v = T$ e $P_0 = e^{-\lambda_r T} = e^{-G}$. Massimo: $\frac{d}{dG}(G e^{-G}) = e^{-G}(1 - G) = 0 \Rightarrow G = 1$, $A_s^{max} = 1/e \approx 0{,}368$. Il valore della slide (0.36) è arrotondato per difetto: meglio ricordare **0,37**, cioè il doppio di ALOHA puro.
>>
>> Interpretazione per $G = 1$: in media si tenta una trama per slot; con Poisson il 36,8% degli slot è vuoto ($e^{-1}$), il 36,8% contiene esattamente una trama (successo) e il restante 26,4% contiene una collisione.

---
## Slide 55 – Algoritmi di back-off

- Aloha classico
	- Sceglie a caso (con probabilità uniforme) il nuovo istante di trasmissione nell'intervallo 0 e $T_b$
		- Deve essere $T_b \gg T$ per rendere piccola la probabilità di una nuova collisione
- Aloha slotted
	- Si ritrasmette negli istanti di sincronismo, ci sono due alternative:
		- Si prende $T_b = n_b T$ e si sceglie un numero a caso fra 0 ed $n_b - 1$
		- Si ritrasmette nel primo slot utile con probabilità $p_b$ e si passa allo slot successivo con probabilità ($1-p_b$); ripetendo l'algoritmo ad ogni slot fino a che non si trasmette
- A parità di valore medio del tempo di ritrasmissione, queste due alternative danno prestazioni simili

>> Confronto delle due alternative slotted: con la scelta uniforme fra $0$ e $n_b - 1$ si attendono in media $\frac{n_b - 1}{2}$ slot; con la scelta slot per slot il numero di slot saltati è geometrico, con media $\frac{1 - p_b}{p_b}$. Le due medie coincidono per $p_b = \frac{2}{n_b + 1}$ (es. $n_b = 9 \Leftrightarrow p_b = 0{,}2$, in media 4 slot di attesa).
>>
>> Un $T_b$ grande riduce le nuove collisioni ma allunga il ritardo. Ethernet risolve il compromesso con il *binary exponential backoff*: dopo la $n$-esima collisione si sceglie a caso fra $0$ e $2^{\min(n,10)} - 1$ slot, quindi l'intervallo si adatta al carico.

---
## Slide 56 – Derivati del protocollo Aloha

- Il protocollo Aloha può essere implementato su qualunque mezzo trasmissivo e qualunque topologia
- Ha una efficienza piuttosto bassa ma è circa quanto di meglio si può fare quando i ritardi di propagazione sono grandi come nel caso del satellite
- Se lo si vuole applicare ad una rete locale conviene sfruttare la conoscenza che ogni stazione può acquisire sull'attività delle altre
- Nasce così il protocollo **CSMA Carrier Sensing Multiple Access**
	- Viene proposto su una topologia a Bus bidirezionale
	- È ancora un protocollo ad accesso casuale a contesa

>> Collegamento con il parametro $a$: via satellite il ritardo di propagazione (circa 0,25 s fra due stazioni a terra, passando per un satellite geostazionario) è molto maggiore del tempo di trama, cioè $a \gg 1$. Ascoltare il canale non serve, perché lo si sentirebbe libero anche mentre è già in viaggio la trama di un altro. In una LAN invece $a \ll 1$ e quello che si sente sul canale è un'informazione affidabile e aggiornata.

---
## Slide 57 – CSMA: Carrier Sensing Multiple Access

- **Carrier sensing**
	- Ogni stazione che debba trasmettere **rivela** presenza di segnale sul bus e trasmette solo se è libero
	- Se il bus è occupato si aspetta la fine della trama e poi
		- Si trasmette (caso *1* persistent)
		- Si fa partire l'algoritmo di back off (caso non persistent o *0* persistent)
		- Si trasmette con probabilità *p* e si fa partire l'algoritmo di back off con probabilità (*1-p*) (caso *p* persistent)
- Una volta iniziata la trasmissione, i dati inviati da una stazione **possono collidere** con quelli di un'altra
	- Questo avviene a causa del ritardo di propagazione non nullo
	- Sul bus non c'è un meccanismo immediato di rivelazione delle collisioni: occorre affidarsi a un sistema di Acknowledgement
- L'algoritmo di back-off può essere come quello dell'Aloha con $T_b \gg 2\tau$

>> Le tre varianti in breve:
>> - **1-persistent**: appena il canale si libera trasmette subito. Il ritardo è minimo, ma se due stazioni stavano aspettando la stessa trama collidono di sicuro.
>> - **non persistent**: se il canale è occupato rinuncia, aspetta un tempo casuale e riascolta. Le collisioni sono meno frequenti, ma il canale può restare inutilizzato anche quando c'è chi deve trasmettere. Nella definizione classica (Tanenbaum) la stazione non sta in ascolto fino alla fine della trama: riprova direttamente dopo il tempo casuale.
>> - **p-persistent** (di solito su canale slotted): quando il canale è libero trasmette con probabilità $p$, altrimenti rimanda allo slot successivo e ripete. $p$ piccolo comporta poche collisioni ma più ritardo.
>>
>> $\tau$ è il tempo di propagazione fra le stazioni più lontane (definito nella slide successiva).

---
## Slide 58 – CSMA: intervallo di vulnerabilità

![[RT09-s058-1.png|550]]

- Chiamiamo A e Z le due stazioni più distanti sul Bus e **$\tau$** il **tempo di propagazione** fra di loro + il tempo necessario per rivelare il segnale
- A esegue il carrier sensing nell'istante $t_A$
	- Se Z fa carrier sensing fra $t_A$ e $t_A + \tau$ non rileva attività e può quindi anch'essa iniziare a trasmettere: *si ha collisione*
	- Analogamente se Z ha trasmesso fra $t_A$ e $t_A - \tau$ A non rileva il segnale di Z e trasmette in $t_A$: *si ha collisione*
- **L'intervallo di vulnerabilità vale $2\tau$**
- Le prestazioni sono tanto migliori dell'Aloha quanto più **$\tau/T < 1$**
	- In generale le prestazioni dipendono anche dal valore di *p*

>> Confronto con ALOHA: l'intervallo di vulnerabilità passa da $2T$ a $2\tau$. Se $\tau \ll T$ la finestra in cui un'altra trasmissione può rovinare la nostra è molto più corta, perché una volta che il primo bit ha raggiunto tutte le stazioni (dopo $\tau$) nessuno inizierà più a trasmettere. Il rapporto $\tau/T$ è proprio il parametro $a = Cd/(vL)$ delle slide 42–45 (a meno del tempo di rivelazione).

---
## Slide 59 – Persistent e Nonpersistent CSMA

Utilizzazione del canale per Aloha e CSMA

![[RT09-s059-1.png|650]]

da Tanenbaum

>> Il grafico (Tanenbaum) è calcolato con propagazione trascurabile ($a \to 0$). Alcuni riferimenti:
>> - Pure ALOHA: massimo circa 0,18 per $G = 0{,}5$; Slotted ALOHA: circa 0,37 per $G = 1$;
>> - 1-persistent CSMA: $S = \frac{G(1+G)e^{-G}}{G + e^{-G}}$, massimo circa 0,54 per $G \approx 1$ (verificato);
>> - nonpersistent CSMA: $S = \frac{G}{1+G}$, che tende a 1 per $G \to \infty$ (0,9 per $G = 9$, come nel grafico);
>> - p-persistent: più $p$ è piccolo, più alto e "piatto" è il throughput (0,01-persistent arriva quasi a 1), al prezzo di ritardi maggiori.
>>
>> Con $a > 0$ tutte le curve CSMA si abbassano. Ad esempio la nonpersistent diventa $S = \frac{G e^{-aG}}{G(1+2a) + e^{-aG}}$.

---
## Slide 60 – Versione slotted e problemi di stabilità

- Anche per il CSMA esiste la **versione slotted**
- In questo caso la misura più opportuna del **tempo di slot** è **$\tau$**
- L'intervallo di vulnerabilità vale $\tau$ invece che $2\tau$

>> Stesso ragionamento di slotted ALOHA: se si può iniziare a trasmettere solo all'inizio di uno slot di durata $\tau$, collidono solo le stazioni che partono nello stesso slot. La finestra di vulnerabilità si dimezza.
>>
>> La slide non sviluppa i "problemi di stabilità" del titolo. In sintesi: con un back-off fisso, se il carico supera il punto di massimo della curva $S(G)$, le collisioni aumentano le ritrasmissioni, queste aumentano $G$ e quindi le collisioni. Il sistema può scivolare verso $S \to 0$ (lo stesso problema di ALOHA, slide 51). Si stabilizza adattando il back-off al carico, come con il binary exponential backoff.

---
## Slide 61 – CSMA/CD: CSMA con Collision Detect

- Un miglioramento del CSMA è stato proposto da **Metcalfe** nel 1976
- **Collision Detection**:
	- Una stazione è in grado di rilevare l'avvenuta collisione ***rimanendo in ascolto*** sul mezzo mentre trasmette
	- E' un **processo analogico** basato sulla **rilevazione di potenza** sul canale (facilitato anche dalla codifica di Manchester adottata)
- In caso di collisione:
	- si ferma subito la trasmissione
	- si invia una particolare sequenza di bits (**jamming**) per informare tutte le altre stazioni dell'avvenuta collisione

>> Il jamming (in Ethernet 32 bit) serve a far sì che anche la stazione più lontana, che magari ha appena iniziato a trasmettere, si accorga con certezza della collisione. Perché il trasmettitore la rilevi *mentre sta ancora trasmettendo*, la trama deve durare almeno un round-trip: $T \ge 2\tau$. Da qui viene la trama minima di Ethernet (64 byte = 512 bit, cioè 51,2 µs a 10 Mbit/s). Il CD funziona su cavo; via radio non è praticabile, per questo il Wi-Fi usa CSMA/CA.

---
## Slide 62 – Codifica di Manchester

- Rappresentazione dei bit
	- "0" logico: segnale basso (-0.85 Volt) per mezzo tempo di simbolo e segnale alto (+0.85 Volt) per l'altro mezzo
	- "1" logico: segnale alto per mezzo tempo di simbolo e poi segnale basso
- Vantaggi
	- Una transizione al centro di ogni bit, che può essere rivelata mediante un derivatore, facilita
		- L'acquisizione del sincronismo
		- Il carrier sensing
		- Il collision detection
	- Sono disponibili simboli (alto alto e basso basso) per rappresentare *non dati*
- Svantaggi
	- Per trasmettere a 10 Mbit/s occorre un clock a 20 MHz
- Il protocollo CSMA/CD con codifica di Manchester è stato adottato nella rete Ethernet, standard di mercato per le LAN

>> Attenzione alla convenzione: quella della slide ("0" = basso→alto, "1" = alto→basso) è la convenzione di G. E. Thomas, usata anche da Tanenbaum. Lo standard IEEE 802.3 usa quella opposta ("0" = alto→basso, "1" = basso→alto). Il concetto non cambia: conta che ci sia sempre una transizione a metà bit.
>>
>> Esempio, bit 1 0 1 1 secondo la slide: alto-basso | basso-alto | alto-basso | alto-basso.
>>
>> Il "costo" è che ogni bit richiede due semi-simboli: a 10 Mbit/s si hanno 20 Mbaud, cioè il doppio della banda. Il segnale ha valor medio nullo e non contiene lunghe sequenze costanti, quindi il ricevitore resta sincronizzato. Una collisione si riconosce perché la sovrapposizione di due segnali fa salire il livello (la tensione media) oltre la soglia attesa.

---
## Slide 63 – Cosa migliora nel CSMA-CD

- Nei casi in cui avviene collisione
	- Nel CSMA le stazioni continuano la trasmissione dell'intera trama
		- Il canale rimane impegnato inutilmente per un intervallo di tempo all'incirca pari a T
	- Nel CSMA/CD
		- Al più il canale rimane impegnato inutilmente al più per la somma di
			- Un intervallo di vulnerabilità ()
			- Il tempo necessario a rilevare la collisione più il tempo della sequenza di Jamming ($T_{CD}$)

![[RT09-s063-1.png|350]]![[RT09-s063-2.png|300]]

>> Nei disegni: a sinistra (CSMA) il canale resta occupato per $\le T + \tau$, a destra (CSMA/CD) per $\le \tau + T_{CD}$. La trama gialla inizia fino a $\tau$ prima di $t_0$, la blu in $t_0$.
>>
>> Nella slide manca il simbolo fra parentesi in "Un intervallo di vulnerabilità ()": va letto **($\tau$)**, come nel disegno a destra.
>>
>> Il guadagno è grande quando $T \gg \tau + T_{CD}$, cioè con trame lunghe rispetto alla propagazione ($a$ piccolo). Una collisione "costa" pochi microsecondi invece di un'intera trama, e per questo CSMA/CD si avvicina all'efficienza del MAC ideale $1/(1+a)$ molto più di CSMA.

---
## Slide 64 – CSMA

![[RT09-s064-1.png|650]]

>> Lettura della figura (il tempo scorre verso il basso, le bande inclinate sono i segnali che si propagano a destra e a sinistra):
>> - $t_0$: D inizia a trasmettere (banda grigio chiaro);
>> - $t_1$: B ascolta il canale, il segnale di D non è ancora arrivato, quindi lo trova libero e trasmette anch'esso (banda grigio medio);
>> - $t_2$: il segnale di D arriva a B. Da qui le trame si sovrappongono (zona grigio scuro = collisione);
>> - $t_3$: D finisce di trasmettere la sua trama intera;
>> - $t_4$: il primo bit di B arriva a D;
>> - $t_5$: B finisce di trasmettere la sua trama intera;
>> - $t_6$: l'ultimo bit della trama di D arriva a B.
>>
>> Senza collision detection entrambe le stazioni trasmettono la trama completa ($t_3 - t_0 = t_5 - t_1 = T$) e il canale resta occupato inutilmente per tutto quel tempo. Si accorgeranno della collisione solo per la mancanza dell'ACK.

---
## Slide 65 – CSMA-CD

![[RT09-s065-1.png|650]]

>> Stessa situazione della slide precedente, ma con collision detection:
>> - $t_0$: D inizia a trasmettere; $t_1$: B trova il canale libero e trasmette;
>> - $t_2$: il segnale di D arriva a B, che **rileva la collisione**, interrompe la trama e invia il jamming;
>> - $t_3$: B smette di trasmettere (fine del jamming);
>> - $t_4$: il segnale di B arriva a D, che rileva a sua volta la collisione e invia il jamming;
>> - $t_5$: D smette di trasmettere;
>> - $t_6$, $t_7$: l'ultimo bit emesso da B passa per D e poi raggiunge E (l'estremo del bus).
>>
>> Confrontando con la slide 64, la banda di B è molto più corta ($t_3 - t_1$ invece di $T$) e anche D si ferma molto prima della fine della trama. Il canale torna libero dopo circa $\tau + T_{CD}$ (slide 63), e le due stazioni ripetono il tentativo dopo il back-off.

---
## Riassunto

>> **Traffico e prestazioni**
>> - $a(t)$, $s(t)$ e $p(t)$ sono le richieste arrivate, accettate e partite. Frequenze medie: offerte $\lambda$, smaltite $\lambda_s \le \lambda$, perdute $\lambda_p$, con $\lambda = \lambda_s + \lambda_p$.
>> - Tempo di servizio di un pacchetto $\vartheta = L/C$; frequenza di servizio $\mu = 1/\vartheta$, la capacità massima del servitore.
>> - **Traffico** $A = \lambda \bar\delta$ (teorema di **Little**: utenti medi nel sistema = frequenza di arrivo × tempo medio di permanenza). Traffico offerto $A_0 = \lambda\vartheta$, smaltito $A_s = \lambda_s\vartheta$ (il throughput), perduto $A_p$. Si misura in **Erlang**.
>> - Nel sistema ideale $\lambda_s = \lambda$ fino alla capacità massima. In quello reale il protocollo spreca capacità (PCI, errori, ritrasmissioni, tempi morti): l'efficienza è $\eta = \lambda_s^{\max,e}/\lambda_s^{\max} = \vartheta/\vartheta_e \le 1$.
>>
>> **Coda con singolo servitore**
>> - Un nodo a pacchetto si modella come una coda per ogni linea di uscita. Ipotesi: niente perdite, arrivi di Poisson, servizio esponenziale.
>> - **Utilizzazione** $\rho = \lambda/\mu$, pari alla probabilità che il servitore sia occupato. Per M/M/1 il tempo medio di attesa è $\bar T_A = \vartheta \frac{\rho}{1-\rho}$ e il numero medio di utenti è $\rho/(1-\rho)$: entrambi esplodono per $\rho \to 1$. Con servizio deterministico (M/D/1) l'attesa si dimezza: $\vartheta \frac{\rho}{2(1-\rho)}$.
>> - Compromesso del **padding**: i pacchetti di lunghezza fissa riducono l'attesa, ma il padding li allunga e consuma capacità.
>>
>> **LAN ad accesso casuale**
>> - Parametri: $L$ (lunghezza della trama), $C$, $d$, $v$; $\vartheta = L/C$. Il parametro $a = \frac{d/v}{\vartheta} = \frac{Cd}{vL}$ è il rapporto fra propagazione e trasmissione, cioè la lunghezza della LAN misurata in trame.
>> - Con un MAC ideale l'efficienza massima è $\eta = \frac{1}{1+a}$: più $a$ è piccolo, più la LAN è efficiente.
>>
>> **ALOHA**
>> - Si trasmette appena si ha una trama e, se non arriva l'ACK, si ritrasmette dopo un backoff. L'intervallo di vulnerabilità è $2\vartheta$: $S = G e^{-2G}$, con massimo $\frac{1}{2e} \approx 0{,}184$ per $G = 0{,}5$.
>> - **Slotted ALOHA**: si trasmette solo a inizio slot, quindi la vulnerabilità scende a $\vartheta$: $S = G e^{-G}$, con massimo $\frac{1}{e} \approx 0{,}368$ per $G = 1$.
>>
>> **CSMA e CSMA/CD**
>> - **CSMA**: si ascolta prima di trasmettere, e la vulnerabilità si riduce al tempo di propagazione. Varianti: 1-persistent, non-persistent, p-persistent. Il throughput è molto più alto di ALOHA se $a$ è piccolo.
>> - **CSMA/CD**: in più si interrompe la trasmissione appena si rileva una collisione, così il tempo sprecato si limita a circa due volte il tempo di propagazione. Ethernet usa la codifica **Manchester**, che ha una transizione a metà di ogni bit.
