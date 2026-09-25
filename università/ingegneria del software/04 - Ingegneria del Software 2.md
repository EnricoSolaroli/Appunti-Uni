[4-IngegneriaSW](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/ingegneria del software/slide/4-IngegneriaSW.pdf>)

# Ingegneria del Software – 2

## Indice

1. **Misurazione e stima dei costi** (slide 2–5)
	- [[#Slide 2 – Misurazione|Perché si misura: previsione, stima, decisioni]]
	- [[#Slide 3 – Misurazione|Scopi e fasi della misurazione nel ciclo di vita]]
	- [[#Slide 4 – Stima dei costi|Fonti e fattori di costo]]
	- [[#Slide 5 – Le dimensioni del software|Metriche dimensionali (LOC/DSI) e indici di qualità]]
2. **Il metodo dei Function Points** (slide 6–16)
	- [[#Slide 6 – Il metodo Function Points|Caratteristiche: parametro adimensionale e indipendente dalla tecnologia]]
	- [[#Slide 8 – Conteggio dei Function Point|I 5 tipi di funzione, i pesi e il numero non pesato]]
	- [[#Slide 10 – Tipi di conteggio|Sviluppo, manutenzione evolutiva, applicazione esistente]]
	- [[#Slide 11 – Ambito del conteggio e confine delle applicazioni|Ambito e confine dell'applicazione]]
	- [[#Slide 12 – Funzioni di tipo dati|Funzioni di tipo dati: ILF ed EIF]]
	- [[#Slide 14 – Funzioni di tipo transazione|Funzioni di tipo transazione: EI, EO, EQ]]
	- [[#Slide 15 – Fattore di aggiustamento|Fattore di aggiustamento e le 14 caratteristiche generali]]
3. **Il numero ciclomatico di McCabe** (slide 17–22)
	- [[#Slide 17 – Il numero ciclomatico|Definizione di complessità del flusso di controllo]]
	- [[#Slide 18 – Il numero ciclomatico|Calcolo su grafo fortemente connesso: e − n + 1]]
	- [[#Slide 19 – Il numero ciclomatico|Cammini linearmente indipendenti: v(G) = e − n + 2]]
	- [[#Slide 21 – Il numero ciclomatico|Teorema di Mills e grafi con più procedure]]
	- [[#Slide 22 – Il numero ciclomatico|Validità sperimentale e soglia raccomandata di 10]]
4. **COCOMO: modello costruttivo dei costi** (slide 23–25)
	- [[#Slide 23 – Constructive Cost Model|Stima della dimensione in KDSI e conversione da FP]]
	- [[#Slide 24 – Constructive Cost Model (2)|Classi Organic, Semi-detached, Embedded e formule dello sforzo]]
	- [[#Slide 25 – Constructive Cost Model (3)|I 15 stimatori di costo moltiplicativi]]
5. **Modelli di processo prescrittivi** (slide 26–31)
	- [[#Slide 26 – Modelli di produzione|Il processo di produzione e le famiglie di modelli]]
	- [[#Slide 27 – I modelli prescrittivi|Le cinque attività strutturali generiche]]
	- [[#Slide 28 – Il modello a cascata (waterfall)|Modello a cascata e suoi limiti]]
	- [[#Slide 29 – Il modello incrementale|Modello incrementale a stadi]]
	- [[#Slide 30 – Il modello RAD|Rapid Application Development]]
	- [[#Slide 31 – Incrementale vs. iterativo|Incrementale vs. iterativo]]
6. **Modelli evolutivi, prototipazione e MDD** (slide 32–40)
	- [[#Slide 32 – I modelli evolutivi|Requisiti che cambiano e sviluppo evolutivo]]
	- [[#Slide 33 – Prototipazione|Prototipo: obiettivi e benefici]]
	- [[#Slide 34 – Prototipazione|Il processo di prototipazione: attività e prodotti]]
	- [[#Slide 35 – Prototipazione|Prototipazione evolutiva vs. usa-e-getta]]
	- [[#Slide 38 – Prototipazione dell'interfaccia utente|Prototipazione dell'interfaccia utente]]
	- [[#Slide 39 – Il modello a spirale|Modello a spirale e analisi dei rischi]]
	- [[#Slide 40 – Model-Driven Development|MDD e i modelli CIM, PIM, PSM]]
7. **Modelli agili ed Extreme Programming** (slide 41–45)
	- [[#Slide 41 – I modelli agili|Caratteristiche dei processi agili]]
	- [[#Slide 42 – Extreme Programming|Pianificazione e user story]]
	- [[#Slide 43 – Extreme Programming|Design: semplicità, schede CRC, refactoring]]
	- [[#Slide 44 – Extreme Programming|Pair programming, unit test e test di regressione]]
	- [[#Slide 45 – Extreme Programming|Velocità del progetto]]
8. **Unified Process** (slide 46–52)
	- [[#Slide 46 – Unified Process|Caratteristiche di UP]]
	- [[#Slide 47 – Un modello di UP|Ruoli, attività, manufatti, flussi di lavoro]]
	- [[#Slide 48 – Manufatti|I cinque set di manufatti]]
	- [[#Slide 49 – Flussi di lavoro|I nove flussi di lavoro]]
	- [[#Slide 50 – Fasi|Le quattro fasi: inception, elaboration, construction, transition]]
	- [[#Slide 51 – Milestone|Milestone di fase]]
	- [[#Slide 52 – Fasi e flussi di lavoro|Incrocio fra fasi e discipline]]
9. **Verifica del software e testing** (slide 53–61)
	- [[#Slide 53 – Verifica del software|Tecniche dinamiche e statiche]]
	- [[#Slide 54 – Testing|Limiti del testing e impossibilità del testing esaustivo]]
	- [[#Slide 55 – Testing in the small|Grafi di controllo dei costrutti elementari]]
	- [[#Slide 56 – Testing in the small|Copertura delle istruzioni (statement test)]]
	- [[#Slide 57 – Testing in the small|Copertura delle decisioni (branch test)]]
	- [[#Slide 58 – Testing in the small|Copertura di decisioni e condizioni]]
	- [[#Slide 60 – Testing in the large|Testing in the large e black-box testing]]
	- [[#Slide 61 – Testing in the large|Test di modulo, di integrazione e di sistema]]
10. **Analisi statica del codice** (slide 62–70)
	- [[#Slide 62 – Analisi del software|Analisi vs. testing]]
	- [[#Slide 63 – Code walk-through|Code walk-through]]
	- [[#Slide 64 – Code inspection|Code inspection e classi di errori]]
	- [[#Slide 65 – Analisi di flusso dei dati|Operazioni sulle variabili: definizione, uso, annullamento]]
	- [[#Slide 66 – Analisi di flusso dei dati: esempio|Esempio: la procedura swap]]
	- [[#Slide 68 – Analisi di flusso dei dati|Le due regole generali e le sequenze anomale]]
	- [[#Slide 70 – Analisi di flusso dei dati|Falsi positivi delle sequenze au e dd]]
11. **Certificazione e qualità** (slide 71–75)
	- [[#Slide 71 – 4. Certificazione|Certificazione e accreditamento]]
	- [[#Slide 72 – La certificazione ISO 9000|Iter di certificazione secondo ISO 10011]]
	- [[#Slide 73 – La certificazione ISO 9000|Manuale qualità, verifica ispettiva, visite di sorveglianza]]
	- [[#Slide 74 – I documenti del progetto|Archivio del progetto e documenti]]
	- [[#Slide 75 – Vision 2000|Vision 2000 e ISO 9001:2000]]
12. **La manutenzione del software** (slide 76–81)
	- [[#Slide 76 – 5. La manutenzione|I quattro tipi di manutenzione]]
	- [[#Slide 77 – Manutenzione|Errori, difetti e malfunzionamenti]]
	- [[#Slide 78 – Manutenzione correttiva|Manutenzione correttiva]]
	- [[#Slide 79 – Manutenzione adattiva|Manutenzione adattiva]]
	- [[#Slide 80 – Manutenzione perfettiva|Manutenzione perfettiva]]
	- [[#Slide 81 – Manutenzione evolutiva|Manutenzione evolutiva]]


---
## Slide 1 – Ingegneria del Software - 2

INGEGNERIA DEL SOFTWARE - 2

---
## Slide 2 – Misurazione

- Nel ciclo di vita del software la misurazione serve a prevedere o stimare tempi di consegna, costo di lavorazione, qualità del prodotto
- Come in ogni altro settore ingegneristico, alle misure viene assegnato il compito di normalizzazione tra oggetti e fenomeni distinti, per un loro confronto o per effettuare correlazioni, al fine di valutare e prendere decisioni
- La tipicità (e "non fisicità" del software) rendono però in parte ambigue le misure in questo settore. Ciò non ha impedito all'ingegneria del software di proporre un vasto insieme di misure e di metodi per la misurazione

>> "Normalizzazione" qui significa ricondurre oggetti diversi a una stessa scala: senza una
>> unità comune non si possono confrontare due progetti, né correlare una causa (es. la
>> complessità) a un effetto (es. il numero di difetti).

---
## Slide 3 – Misurazione

- Scopi:
	- la previsione delle caratteristiche che avrà il software in una fase del ciclo di vita diversa da quella in cui si effettua la valutazione
	- la stima delle caratteristiche possedute dal software, nella fase e nello stadio di sviluppo in cui si effettua la valutazione
- Fasi:
	- in fase di pianificazione: per stimare tempi e costi nello studio di fattibilità
	- in fase di progettazione: per prevedere la manutenibilità e prevenire problemi nel software rilasciato in esercizio
	- in fase di collaudo e/o test: per confrontare quanto fornito con le specifiche date
	- dopo il rilascio in esercizio: per misurare l'impatto del prodotto sulla efficienza ed efficacia del lavoro svolto, confrontare le prestazioni con quelle di altri prodotti comparabili, individuare aree di possibile miglioramento, decidere il momento del ritiro dalla produzione
- In sostanza, *si misura per prendere decisioni ed agire*

>> Distinzione utile: la **previsione** guarda avanti nel tempo (dalla fase corrente a una
>> futura), la **stima** riguarda ciò che il software è *adesso* ma non si può osservare
>> direttamente.

---
## Slide 4 – Stima dei costi

- ***Fonti di costo***
	- Costo delle risorse per lo sviluppo del sw:
		- costo del personale tecnico
		- costo del personale di supporto
		- costo delle risorse informatiche
		- materiali di consumo
		- costi generali della struttura
- ***Fattori di costo***
	- **Numero di istruzioni da codificare (benefici del riuso)**
	- Capacità, motivazione e coordinamento degli addetti allo sviluppo
	- Complessità del programma
	- Stabilità dei requisiti
	- Caratteristiche dell'ambiente di sviluppo

>> Attenzione alla differenza: le *fonti* di costo sono le voci di spesa (dove vanno i soldi),
>> i *fattori* di costo sono le variabili che ne fanno crescere o calare l'importo.

---
## Slide 5 – Le dimensioni del software

- **Metriche dimensionali**
	- si basano sul numero di istruzioni del programma
	- LOC (*Lines Of Code*) o DSI (*Delivered Source Instructions*)

M = mesi uomo tot., E = numero tot. errori, \$ = costo tot., PD = pagine doc.

**Indici di qualità**

| | |
|---|---|
| *Produttività*: | $P = LOC/M$ |
| *Qualità*: | $Q = E/LOC$ |
| *Costo unitario*: | $C = \$/LOC$ |
| *Documentazione*: | $D = PD/LOC$ |

- **Metriche funzionali**
	- si basano sulle caratteristiche funzionali del programma
	- Metodo dei Punti Funzione (*Function Points*)

>> Tutti e quattro gli indici sono rapporti che normalizzano rispetto alla dimensione: per
>> esempio $Q = E/LOC$ è la densità di errori, confrontabile fra programmi di taglia diversa.
>> Il limite delle LOC è che dipendono dal linguaggio e dallo stile di codifica: 1000 LOC
>> Assembler e 1000 LOC C++ non offrono la stessa funzionalità. È proprio questo limite che
>> motiva le metriche funzionali.

---
## Slide 6 – Il metodo Function Points

- Fra le metriche del software riguardanti la dimensione, i FP sono la più vecchia (Allan Albrecht, metà degli anni 70) e tuttora la più diffusa:
	- Restituisce un *parametro adimensionale*
	- Misura la dimensione di un sw in termini delle *funzionalità* offerte all'utente (niente a che vedere con le funzioni dei linguaggi di programmazione!)
	- La misurazione si basa sul *disegno logico* del software espresso in una forma qualsiasi: specifiche in linguaggio naturale, schemi Entity-Relationship, diagrammi di flusso dei dati, ecc.
	- Può essere utilizzato a partire dalla *prima fase dello sviluppo* per poi ripetere la misura nel caso le specifiche siano cambiate
	- E' *indipendente dall'ambiente tecnologico* in cui si sviluppa il progetto
	- Consente *confronti* fra differenti progetti e organizzazioni

>> Il punto chiave: i FP si contano dal *cosa* fa il software (visto dall'utente), non dal
>> *come* è scritto. Per questo si possono calcolare già sui requisiti, cioè quando il codice
>> non esiste ancora e le LOC sarebbero impossibili da contare.

---
## Slide 7 – Il metodo Function Points

- Può essere usato da un'organizzazione come:
	- Uno strumento per determinare la *complessità* di un pacchetto applicativo acquistato attraverso la quantificazione di tutte le sue funzioni
	- Uno strumento che aiuti gli utenti a determinare il *beneficio* per le loro organizzazioni derivante da un pacchetto applicativo commerciale, attraverso la quantificazione delle sole funzioni che soddisfano i loro requisiti
	- Uno strumento per *misurare un prodotto*, a sostegno di analisi sulla qualità e sulla produttività
	- Un veicolo per *stimare costi e risorse* necessarie per lo sviluppo e la manutenzione del software
	- Un *fattore di normalizzazione* per effettuare confronti sul software

---
## Slide 8 – Conteggio dei Function Point

- Il metodo consiste nell'identificare 5 tipi di funzioni (funzionalità):
	- **funzioni di tipo dati**
		- file interni logici
		- file esterni di interfaccia
	- **funzioni di tipo transazione**
		- input esterno
		- output esterno
		- interrogazioni esterne

![[ISW4-s008-1.png|500]]

| Tipo | Peso (semplice) | Peso (medio) | Peso (complesso) |
|---|---|---|---|
| Input Esterno | 3 | 4 | 6 |
| Output Esterno | 4 | 5 | 7 |
| Interrogazione esterna | 3 | 4 | 6 |
| File Interno Logico | 7 | 10 | 15 |
| File Esterno di Interfaccia | 5 | 7 | 10 |

- Una volta identificate le funzioni, a ciascuna di esse si assegna un **peso** calcolato sulla base della quantità di dati e sulla complessità delle relazioni tra loro
- La somma dei pesi di tutte le funzioni costituisce il **Numero di Function Points Non Pesato**
- Infine, questo numero è moltiplicato per un **fattore di aggiustamento** ottenuto considerando un insieme di 14 **Caratteristiche Generali del Sistema**

>> Schema complessivo del calcolo:
>> $FP = \left(\sum_{f} peso(f)\right) \times FA$
>> dove la sommatoria è il numero di FP non pesato (UFP) e $FA$ è il fattore di aggiustamento.
>> Si noti che i file (ILF, EIF) "pesano" più delle transazioni: mantenere dati costa più che
>> muoverli.

---
## Slide 9 – Conteggio dei Function Point

![[ISW4-s009-1.png|600]]

Flusso del conteggio:

1. individuare il tipo di conteggio
2. individuare l'ambito del conteggio e il confine delle applicazioni
3. contare le funzioni di tipo dati / contare le funzioni di tipo transazione → determinare il numero di FP non pesati
4. determinare il fattore di aggiustamento
5. calcolare il numero di FP pesati

---
## Slide 10 – Tipi di conteggio

- *per progetti di sviluppo*: calcolo dei FP di un software da realizzare ex novo più eventuale conversione dei dati dalla vecchia applicazione
- *per progetti di manutenzione evolutiva*: misura le modifiche a un software esistente, comprendendo funzioni aggiunte, modificate, cancellate e di conversione
- *per una applicazione esistente*: consente il calcolo dei FP cosiddetti *installati* e il loro aggiornamento
	1. calcolo dei FP iniziali, differisce dal calcolo per i progetti di sviluppo perché non prevede funzioni di conversione
	2. aggiornamento dei FP dopo ogni manutenzione evolutiva, differisce dal calcolo per un progetto di manutenzione evolutiva perché i punti delle funzioni cancellate sono sottratte invece che sommate
- Quindi i FP possono essere usati per misurare una applicazione durante tutto il suo tempo di vita

>> Differenza sottile ma importante: nel conteggio di *progetto* si misura lo sforzo (anche
>> cancellare funzioni è lavoro, quindi somma), nel conteggio dell'*applicazione installata* si
>> misura la dimensione attuale del prodotto (quindi ciò che è stato tolto va sottratto).

---
## Slide 11 – Ambito del conteggio e confine delle applicazioni

- Identificare l'**ambito del conteggio** significa identificare le funzionalità che devono essere considerate in un conteggio
- Il **confine** è la linea di separazione tra le applicazioni che si stanno misurando e le applicazioni esterne o l'utente
- **Regole**:
	- Il confine è determinato basandosi sul punto di vista dell'utente
	- Il confine tra applicazioni collegate è basato su aree funzionali distinte dal punto di vista dell'utente e non in funzione degli aspetti tecnologici

>> Il confine è la scelta più delicata del metodo: spostarlo cambia la classificazione dei dati
>> (ILF dentro / EIF fuori) e quindi il totale dei FP. Va deciso una volta e mantenuto coerente
>> fra conteggi successivi, altrimenti i confronti perdono senso.

---
## Slide 12 – Funzioni di tipo dati

- **File interno logico** (Internal Logical File: ILF)
	- è un gruppo di dati o informazioni di controllo logicamente collegati e riconoscibili dall'utente che sono mantenuti all'interno dei confini dell'applicazione
	- Il compito primario di un ILF è di contenere dati mantenuti attraverso uno o più processi elementari dell'applicazione che si sta contando
- **File esterno di interfaccia** (External Interface File: EIF)
	- è un gruppo di dati o informazioni di controllo logicamente collegati e riconoscibili dall'utente che sono referenziati dall'applicazione ma sono mantenuti all'interno dei confini di un'altra applicazione
	- Il compito primario di un EIF è di contenere dati referenziati da uno o più processi elementari dell'applicazione che si sta contando
	- Questo significa che un EIF contato per un'applicazione deve essere un ILF in un'altra applicazione

>> Regola pratica: se l'applicazione *scrive/aggiorna* quel gruppo di dati è un ILF; se lo
>> *legge soltanto* perché appartiene a un'altra applicazione è un EIF.

---
## Slide 13 – Esempio

- ILF:
	- *Dati sulle entità gestite dall'applicazione come: informazioni sugli impiegati, sui prodotti, sui clienti, ecc.*
	- *Dati sulle transazioni effettuate dall'applicazione come: registrazioni di prelievi da un conto corrente, di spese fatte con credit card, di movimentazione di magazzino, ecc.*
	- *Dati sulla sicurezza dell'applicazione (come password, accessi,..)*
	- *Dati di HELP*
	- *Dati di log (registrazione delle operazioni effettuate)*
- EIF:
	- *Dati su entità gestite da altre applicazioni*
	- *Dati sulla sicurezza mantenuti all'esterno dell'applicazione*
	- *Dati di HELP mantenuti all'esterno dell'applicazione*
	- *Dati di log mantenuti all'esterno dell'applicazione*

---
## Slide 14 – Funzioni di tipo transazione

- **Input Esterno** (External Input: EI)
	- è un processo elementare dell'applicazione che elabora dati o informazioni di controllo provenienti dall'esterno del confine dell'applicazione
	- Il compito principale di un EI è di mantenere uno o più ILFs e/o di modificare il comportamento del sistema
- **Output Esterno** (External Output: EO)
	- è un processo elementare dell'applicazione che manda dati o informazioni di controllo all'esterno del confine dell'applicazione
	- Il compito principale di un EO è di presentare informazioni all'utente attraverso una logica di processo diversa dal, o in aggiunta al, recupero di dati o informazioni di controllo
	- La logica di processo deve contenere almeno una formula matematica o calcolo, creare dati derivati, mantenere uno o più ILFs o modificare il comportamento del sistema
- **Interrogazione Esterna** (External Inquiry: EQ)
	- è un processo elementare che manda dati o informazioni di controllo fuori dal confine dell'applicazione
	- Il compito principale di una EQ è di presentare informazioni all'utente attraverso il recupero di dati o informazioni di controllo da un ILF o EIF
	- La logica di processo non contiene formule matematiche o calcoli e non crea dati derivati

>> EO e EQ mandano entrambi dati verso l'esterno: la discriminante è il *calcolo*. Se c'è una
>> elaborazione che produce dati derivati è un EO (peso maggiore), se è puro recupero e
>> visualizzazione è una EQ.

---
## Slide 15 – Fattore di aggiustamento

- Il numero totale di FP viene moltiplicato per un **fattore di aggiustamento** per tenere conto di quelle funzionalità generali del sistema non sufficientemente rappresentate dalle funzioni dati e transazionali
- Il valore del fattore di aggiustamento varia fra 0.65 e 1.35 (+/-35%) e viene calcolato sulla base del grado di influenza di ciascuna delle 14 Caratteristiche Generali del Sistema

---
## Slide 16 – Fattore di aggiustamento

- Il grado di influenza di una caratteristica è compreso tra 0 (nessuna influenza) e 5 (forte influenza):

$$\text{fattore di aggiustamento} = 0.65 + (TDI \times 0.01)$$

con TDI (Total Degree of Influence) somma dei gradi di influenza per ciascuna caratteristica:

- comunicazione dati
- distribuzione dell'elaborazione
- prestazioni
- utilizzo estensivo della configurazione
- frequenza delle transazioni
- inserimento dati interattivo
- efficienza per l'utente finale
- aggiornamento interattivo
- complessità elaborativa
- riusabilità
- facilità di installazione
- facilità di gestione operativa
- molteplicità di siti
- facilità di modifica

>> Verifica dell'intervallo: con 14 caratteristiche e grado massimo 5 si ha
>> $0 \le TDI \le 70$, quindi $0.65 \le FA \le 0.65 + 0.70 = 1.35$, cioè esattamente il
>> $\pm 35\%$ annunciato nella slide precedente.

---
## Slide 17 – Il numero ciclomatico

- Modello di metrica del software proposto da McCabe nel 1976
- Il numero ciclomatico è una definizione operativa di complessità del flusso di controllo di un programma, ed è legato all'identificazione di tutti i cammini che permettono di raggiungere una copertura accettabile del programma
	- Misura della sola complessità del software intesa in riferimento alla sua produzione, comprensione e modifica
	- Viene preso in considerazione il solo flusso di controllo, senza alcun riferimento alla complessità dei dati (grafo del flusso di controllo)
	- Metrica svincolata dalle particolarità di un linguaggio

---
## Slide 18 – Il numero ciclomatico

- Il numero ciclomatico di un grafo fortemente connesso è il numero minimo di archi che occorre eliminare per trasformarlo in un albero

ESEMPIO: numero ciclomatico = 3

- Il numero ciclomatico di un grafo fortemente connesso si calcola come:

$$e - n + 1$$

dove e è il numero degli archi ed n è il numero dei nodi

![[ISW4-s018-1.png|300]]

>> L'intuizione: un albero con $n$ nodi ha esattamente $n-1$ archi, quindi da un grafo con $e$
>> archi bisogna toglierne $e-(n-1) = e-n+1$. Il numero ciclomatico conta quindi i "cicli
>> indipendenti" del grafo.

---
## Slide 19 – Il numero ciclomatico

- Se un programma è ben formato esistono sempre un nodo iniziale e uno terminale. Inoltre, esiste sempre almeno un cammino che permette di collegare il nodo iniziale con uno qualunque degli altri nodi ed almeno un cammino che permette di collegare uno qualunque dei nodi con il nodo terminale
- Si rende fortemente connesso il grafo del flusso di controllo del programma aggiungendo un arco orientato che va dal nodo terminale al nodo iniziale (+ 1 arco)
- Il numero ciclomatico del programma, assunto come misura della complessità del suo flusso di controllo, è il numero ciclomatico del grafo G modificato, v(G), ed esprime il ***numero di cammini linearmente indipendenti nel grafo di controllo***:

$$v(G) = e - n + 2$$

>> Da dove viene il "+2": sul grafo reso fortemente connesso ci sono $e+1$ archi, quindi
>> $v(G) = (e+1) - n + 1 = e - n + 2$, dove $e$ ed $n$ sono archi e nodi del grafo *originale*.

---
## Slide 20 – Il numero ciclomatico

**ESEMPI:**

![[ISW4-s020-1.png|400]]

- v(G)=1
- v(G)=2
- v(G)=2
- v(G)=2

>> Verifica sul primo caso: due nodi e un arco, $v(G) = 1 - 2 + 2 = 1$; un programma
>> puramente sequenziale ha un solo cammino, e infatti $v(G)=1$. Ogni punto di decisione
>> aggiunge 1.

---
## Slide 21 – Il numero ciclomatico

- ***Teorema di Mills***:

$$v(G) = d + 1$$

dove d è il numero dei punti di decisione del programma (assumendo che un punto di decisione a k uscite contribuisca come k-1 punti di decisione a 2 uscite)

- Se il programma ha procedure al suo interno, il numero ciclomatico dell'intero grafo è dato dalla somma dei numeri ciclomatici dei singoli grafi indipendenti:

$$v(G) = e - n + 2p$$

dove e ed n sono rispettivamente archi e nodi del grafo nel suo insieme, p è il numero di grafi (procedure) indipendenti

>> Il teorema di Mills è la versione "pratica": non serve disegnare il grafo, basta contare
>> `if`, `while`, `for` e le condizioni composte. Uno `switch` con k rami vale $k-1$.

---
## Slide 22 – Il numero ciclomatico

- Il numero ciclomatico cattura almeno in parte ciò che intuitivamente è la complessità del flusso di controllo
- Esistono conferme sperimentali che indicano che si ha un buon grado di correlazione tra il numero ciclomatico e grandezze sicuramente influenzate notevolmente dalla complessità del flusso di controllo, come ad esempio il numero degli errori riscontrati
- Raccomandazione: *la complessità ciclomatica di un modulo non dovrebbe superare il valore 10*

>> $v(G)$ è anche un limite inferiore al numero di casi di test necessari per la copertura dei
>> cammini indipendenti: un modulo con $v(G)=30$ richiederebbe almeno 30 test, ed è questo
>> che rende la soglia di 10 una regola pratica sensata.

---
## Slide 23 – Constructive Cost Model

- Si calcola una stima iniziale dei costi di sviluppo in base alla dimensione del software da produrre, poi la si migliora sulla base di un insieme di parametri

**Modello intermedio**

1. *Stima della dimensione del software*: calcolata come numero di linee di codice scritte (KDSI), può essere fatta sulla base dell'esperienza del manager oppure utilizzando una tecnica analitica basata, ad esempio, sul metodo FP:

| FP | CLang | #Linee |
|---|---|---|
| 1000 | 20 (Cobol) | 20000 |
| 1000 | 32 (Pascal) | 32000 |
| 1000 | 40 (C++) | 40000 |
| 1000 | 88 (Assembler) | 88000 |

>> CLang è il numero di linee di codice che servono, in quel linguaggio, per realizzare un
>> Function Point: è il "tasso di cambio" fra misura funzionale e misura dimensionale. Più il
>> linguaggio è di alto livello, minore è CLang.

---
## Slide 24 – Constructive Cost Model (2)

2. *Determinazione della classe del software*: i sw sono suddivisi in tre categorie con caratteristiche di difficoltà crescente. Per ogni categoria è stata sviluppata una diversa formula per il calcolo del costo, espresso in mesi uomo:

$$\begin{aligned}
\textit{Organic} \quad & M_{Nom} = 3.2 \times KDSI^{1.05}\\
\textit{Semi-detached} \quad & M_{Nom} = 3.0 \times KDSI^{1.12}\\
\textit{Embedded} \quad & M_{Nom} = 2.8 \times KDSI^{1.2}
\end{aligned}$$

L'appartenenza ad uno dei tre profili viene determinata sulla base dei seguenti parametri:

![[ISW4-s024-1.png|600]]

| | *Organic* | *Semi-det.* | *Embedded* |
|---|---|---|---|
| Conoscenza richiesta nel settore applicativo | Limitata | Normale | Completa |
| Esperienza del team nello sviluppo di software dello stesso tipo | Estesa | Considerevole | Moderata |
| Necessità di comunicare con sistemi esterni | Limitata | Considerevole | Elevata |
| Presenza di vincoli di progetto | Limitata | Considerevole | Elevata |
| Necessità di sviluppare apparecchiature hardware | Limitata | Normale | Elevata |
| Necessità di sviluppare strutture dati e algoritmi innovativi | Limitata | Normale | Elevata |
| Esistono premi per la consegna anticipata | Bassi | Normali | Elevati |
| Dimensione del prodotto | <50 KDSI | <300 KDSI | >300 KDSI |

>> Tutti e tre gli esponenti sono maggiori di 1: lo sforzo cresce *più che linearmente* con la
>> dimensione (diseconomia di scala, dovuta al costo di comunicazione e coordinamento). E
>> l'esponente cresce passando da Organic a Embedded, cioè i progetti più vincolati
>> peggiorano più in fretta al crescere della taglia.

---
## Slide 25 – Constructive Cost Model (3)

3. *Applicazione degli stimatori di costo*:

$$M = M_{Nom} \times \prod_{i=1}^{15} c_i$$

![[ISW4-s025-1.png|600]]

| | Molto Bassa | Bassa | Normale | Alta | Molto Alta | Extra |
|---|---|---|---|---|---|---|
| **Proprietà del prodotto** | | | | | | |
| - Affidabilità del software richiesto | 0.75 | 0.88 | 1.00 | 1.15 | 1.40 | |
| - Complessità della base di dati | | 0.94 | 1.00 | 1.08 | 1.16 | |
| - Complessità del prodotto | 0.70 | 0.85 | 1.00 | 1.15 | 1.30 | 1.65 |
| **Caratteristiche dell'hardware** | | | | | | |
| - Vincoli di efficienza | | 1.00 | 1.11 | 1.30 | 1.66 | |
| - Vincoli di memoria | | 1.00 | 1.06 | 1.21 | 1.56 | |
| - Variabilità dell'ambiente di sviluppo | | 0.87 | 1.00 | 1.15 | 1.30 | |
| - Tempi di risposta | 0.87 | 1.00 | 1.07 | 1.15 | | |
| **Caratteristiche del team** | | | | | | |
| - Capacità degli analisti | 1.46 | 1.19 | 1.00 | 0.86 | 0.71 | |
| - Esperienza nella classe di applicazioni | 1.29 | 1.13 | 1.00 | 0.91 | 0.82 | |
| - Capacità dei programmatori | 1.42 | 1.17 | 1.00 | 0.86 | 0.70 | |
| - Esperienza nel linguaggio di programmazione | 1.14 | 1.07 | 1.00 | 0.95 | | |
| - Esperienza nell'ambiente di sviluppo | 1.21 | 1.10 | 1.00 | 0.90 | | |
| **Caratteristiche del progetto** | | | | | | |
| - Modernità del processo di sviluppo | 1.24 | 1.10 | 1.00 | 0.91 | 0.82 | |
| - Utilizzo di tool di sviluppo | 1.24 | 1.10 | 1.00 | 0.91 | 0.83 | |
| - Presenza di un piano temporale di sviluppo | 1.23 | 1.08 | 1.00 | 1.04 | 1.10 | |

>> I $c_i$ sono moltiplicatori centrati su 1.00 ("Normale"): valori $>1$ allungano il progetto,
>> valori $<1$ lo accorciano. Si noti l'inversione di segno nelle caratteristiche del team
>> (capacità "Molto Bassa" = 1.46, cioè costo maggiore) rispetto a quelle del prodotto. Il
>> fattore con l'escursione più ampia è la capacità dei programmatori/analisti: le persone
>> pesano più della tecnologia.

---
## Slide 26 – Modelli di produzione

- Il processo di produzione è la sequenza di operazioni che viene seguita per costruire, consegnare e modificare un prodotto
- La complessità dei sistemi informatici e l'elevata instabilità del processo di costruzione dovuta alla volubilità del mercato rendono necessaria l'adozione di modelli di processo potenti e flessibili:
	- Modello a cascata
	- Modelli incrementali
	- Modelli evolutivi
	- Modelli agili

---
## Slide 27 – I modelli prescrittivi

- Definiscono un insieme distinto di attività, azioni, compiti, risultati e prodotti che sono necessari per ingegnerizzare un software di alta qualità
- Introducono elementi di stabilità, controllo e organizzazione in un'attività che, se lasciata incontrollata, tende a diventare caotica
- Producono programmi, documenti e dati
- Tutti i modelli prescrittivi comprendono sostanzialmente le stesse attività strutturali generiche:
	- comunicazione (comprende la raccolta dei requisiti)
	- pianificazione
	- modellazione
	- costruzione (comprende il testing)
	- deployment
- Ogni modello applica un'enfasi differente a queste attività e definisce un flusso di lavoro che coinvolge ciascuna attività in modo differente

>> "Prescrittivi" perché prescrivono *cosa* fare e in che ordine. La differenza fra un modello
>> e l'altro non sta nelle attività (sono sempre quelle cinque) ma in come vengono
>> sequenziate, ripetute e sovrapposte.

---
## Slide 28 – Il modello a cascata (waterfall)

- Introdotto nel 1970, suggerisce un approccio sistematico e sequenziale lineare, in cui l'output di ogni fase rappresenta l'input della successiva
	- E' inadeguato quando (come spesso accade) i requisiti sono incerti o non noti durante le fasi iniziali del progetto
	- Non permette di modificare i risultati delle fasi precedenti alla luce di errori riscontrati a posteriori
	- Solo al termine del progetto si genera una versione funzionante dei programma

![[ISW4-s028-1.png|600]]

| Comunicazione | Pianificazione | Modellazione | Costruzione | Deployment |
| --- | --- | --- | --- | --- |
| inizio progetto<br>raccolta requisiti | stima<br>pianificazione<br>controllo | analisi<br>progettazione | programmazione<br>testing | consegna<br>supporto<br>feedback |

>> Le frecce di ritorno fra una fase e la precedente indicano che il modello ammette
>> al più un feedback locale (verso la fase immediatamente precedente): non esiste un
>> vero meccanismo per rimettere in discussione decisioni prese molte fasi prima.
>> Da qui il costo elevatissimo di un errore sui requisiti scoperto in fase di collaudo.

---
## Slide 29 – Il modello incrementale

- E' un modello *iterativo* che combina aspetti del modello a cascata applicati a sottosistemi del prodotto finale, producendo il software *a incrementi*
- Consiste nell'applicare più sequenze lineari, scalate nel tempo, ognuna delle quali produce uno **stadio** operativo del software
	- Il primo stadio consiste in genere in un "prodotto base", ossia un prodotto che soddisfa i requisiti fondamentali tralasciando alcune caratteristiche supplementari
	- In seguito a una valutazione dell'utente, si stende un piano per lo stadio successivo, che preveda l'aggiunta di nuove funzionalità
- E' adatto a progetti in cui i requisiti iniziali sono ben definiti ma la dimensione del sistema scoraggia l'adozione di un processo puramente lineare

![[ISW4-s029-1.png|600]]

Assi del diagramma: *funzionalità* (verticale) e *tempo* (orizzontale); **stadio 1** e **stadio 2** sono due sequenze Comunicazione → Pianificazione → Modellazione → Costruzione → Deployment sfalsate nel tempo.

>> Il punto chiave è che ogni stadio è una cascata completa e consegna software
>> funzionante: dopo lo stadio 1 il cliente ha già qualcosa in esercizio, mentre
>> nel waterfall puro non avrebbe nulla fino alla fine.

---
## Slide 30 – Il modello RAD

- Rapid Application Development è un modello di processo incrementale che punta a un ciclo di sviluppo molto breve
- Si tratta di un adattamento del modello a cascata, nel quale l'obiettivo di accelerare lo sviluppo è raggiunto grazie a strategie costruttive fondate sull'uso di **componenti**
- Ogni applicazione modularizzabile in modo che ciascuna funzionalità principale possa essere completata in meno di 3 mesi è candidata al RAD
- Ogni funzionalità viene affrontata da un team RAD distinto e poi integrata a formare un unico prodotto
- RAD fallisce se:
	- gli utenti non riescono a tenere il passo
	- il sistema non è modularizzabile
	- sono richieste alte prestazioni da ottenere tramite l'ottimizzazione delle interfacce tra i componenti

![[ISW4-s030-1.png|600]]

Comunicazione → Pianificazione → (Modellazione → Costruzione) in parallelo su *team 1* e *team 2* → Deployment.

>> A differenza dell'incrementale, qui il parallelismo è *spaziale* (più team
>> contemporaneamente su moduli diversi) e non *temporale* (stadi successivi):
>> per questo il collo di bottiglia diventa l'integrazione delle interfacce.

---
## Slide 31 – Incrementale vs. iterativo

- Similarità
	- Prevedono entrambi più versioni successive del sistema
	- Ad ogni istante dopo il primo rilascio esiste una versione in esercizio e una versione in sviluppo
- Differenze
	- Sviluppo *incrementale*: ogni versione aggiunge nuove funzionalità o sottosistemi
	- Sviluppo *iterativo*: da subito sono presenti le funzionalità/sottosistemi di base che vengono successivamente raffinate e migliorate. I requisiti possono cambiare

>> In sintesi: l'incrementale cresce "in larghezza" (aggiunge pezzi nuovi a
>> requisiti stabili), l'iterativo cresce "in profondità" (rifinisce gli stessi
>> pezzi man mano che i requisiti si chiariscono). I processi reali combinano
>> le due dimensioni: iterativo *e* incrementale.

---
## Slide 32 – I modelli evolutivi

- Osservazioni:
	- I sistemi software evolvono nel tempo, e **i loro requisiti cambiano** durante lo sviluppo
		- Anche se è impossibile realizzare un prodotto completo e competitivo nei tempi dettati dal mercato, potrebbe essere possibile realizzare una versione limitata per rispondere alla pressione della concorrenza
	- A volte il cliente riesce a definire solo **obiettivi generali** per il software, ma non riesce ad identificare requisiti dettagliati in termini di input, elaborazione o output
- I modelli evolutivi sono iterativi, e caratterizzati in modo tale da consentire lo sviluppo di versioni sempre più complete del software
	- Si produce una versione limitata, sulla base di requisiti ben noti, e successivamente si realizzano delle estensioni
	- Si fa largo uso di **tecniche di prototipazione**

---
## Slide 33 – Prototipazione

- Un prototipo è una versione approssimata, parziale (funzionante), dell'applicazione che deve essere sviluppata
- Obiettivi:
	- Un prototipo software permette di animare e dimostrare i requisiti
		- L'uso principale consiste nell'aiutare i clienti e gli sviluppatori a capire meglio i requisiti inizialmente vaghi o insufficienti
		- Il prototipo può essere usato per l'addestramento dell'utente prima che sia consegnato il sistema finale
- Benefici:
	- Equivoci fra gli utenti del sw e gli sviluppatori sono messi in evidenza
	- Possono essere evidenziate funzionalità mancanti o confuse
	- Un sistema funzionante è disponibile molto presto nel processo
	- Il prototipo può servire come base per derivare una specifica del sistema

---
## Slide 34 – Prototipazione

![[ISW4-s034-1.png|560]]

Il processo di prototipazione (in ovale le attività, in rettangolo i prodotti):

| Attività | Prodotto |
| --- | --- |
| stabilire gli obiettivi del prototipo | piano del prototipo |
| definire la funzionalità del prototipo | sketch della definizione |
| sviluppare il prototipo | prototipo eseguibile |
| valutare il prototipo | rapporto di valutazione |

---
## Slide 35 – Prototipazione

- Due tecniche:
	- L'obiettivo della **prototipazione evolutiva** è di fornire un sistema funzionante all'utente finale
		- Lo sviluppo parte con i requisiti che sono meglio capiti
		- il software del prototipo vale circa il 14-15% del prodotto finito
		- il prototipo viene fatto evolvere nel prodotto finale, senza gettarlo
	- L'obiettivo del **prototipo usa e getta** è di validare o derivare i requisiti del sistema
		- Il processo di prototipazione parte con i requisiti che non sono ben capiti
		- il software del prototipo vale circa il 5-10% del volume del prodotto finito

>> Le due tecniche partono da estremi opposti: l'evolutiva dai requisiti *più*
>> chiari (perché quel codice dovrà sopravvivere), l'usa-e-getta da quelli *meno*
>> chiari (perché serve proprio a chiarirli, e poi verrà buttata).

---
## Slide 36 – Prototipazione evolutiva

- Viene usata per sistemi in cui le specifiche non possono essere sviluppate in anticipo, per esempio sistemi AI e interfacce utente

![[ISW4-s036-1.png|560]]

Sviluppare una specifica astratta → Costruire un prototipo del sistema → Usare il prototipo del sistema → *Il sistema è adeguato?* (no: si torna a costruire il prototipo; sì: Consegnare il sistema)

- Ma...
	- cambiamenti continui tendono a corrompere il sistema, per cui il mantenimento a lungo termine diviene costoso
	- sono richieste grandi capacità di progettazione e programmazione
	- si deve accettare che il tempo di vita del sistema sia corto

---
## Slide 37 – Prototipazione usa-e-getta

- Usata per ridurre il rischio dei requisiti incerti
- Il prototipo è sviluppato da una specifica iniziale, consegnato per sperimentazione e quindi gettato
- Il prototipo NON deve essere considerato un sistema finale perché
	- alcune caratteristiche del sistema possono non essere state considerate
	- non c'è specifica per il mantenimento a lungo termine
	- il prototipo non è strutturato bene e sarebbe difficile da mantenere

![[ISW4-s037-1.png|600]]

Flusso: Accenno dei requisiti → Sviluppo del prototipo → Valutazione del prototipo → Specifica del sistema → Sviluppo del sistema → Validazione del sistema → **Sistema SW consegnato**; dallo sviluppo del prototipo si recuperano solo *componenti riusabili*.

---
## Slide 38 – Prototipazione dell'interfaccia utente

![[ISW4-s038-1.png|400]]

- E' impossibile specificare in anticipo il *look and feel* di una interfaccia utente in maniera efficace, quindi prototipare è essenziale
- Lo sviluppo di GUI (Graphical User Interface) sta diventando una attività che prende la maggior parte del costo dello sviluppo del sistema
- Generatori di interfacce utente possono essere usati per "disegnare" l'interfaccia e simularne la funzionalità

---
## Slide 39 – Il modello a spirale

- Fa crescere incrementalmente il grado di definizione e implementazione del sistema (a partire da un modello cartaceo o da un prototipo), riducendo il livello di rischio e producendo un insieme di milestone per garantire la fattibilità delle soluzioni intraprese

1. **Customer communication:** Colloquio tra cliente e team di sviluppo
2. **Planning:** Raccolta requisiti e definizione piano di progetto
3. **Risk analysis:** Stima e prevenzione dei rischi tecnici e di gestione
4. **Engineering:** Modellazione e progettazione
5. **Construction & release:** Realizzazione, collaudo e installazione
6. **Costumer evaluation:** Rilevazione delle reazioni da parte del cliente

![[ISW4-s039-1.png|500]]

Legenda del diagramma (Fonte: Pressman): Product Maintenance Projects, Product Enhancement Projects, New Product Development Projects, Concept Development Projects; sull'asse *project entry point axis* si sceglie il punto di ingresso nella spirale.

>> Ogni giro completo della spirale attraversa tutti e sei i settori e si allontana
>> dal centro: il raggio rappresenta il costo cumulato, l'angolo la fase corrente.
>> La novità rispetto agli altri modelli è il settore di *risk analysis*, che può
>> anche decidere di fermare il progetto prima di spendere altro.

---
## Slide 40 – Model-Driven Development

- MDD è un tipo di sviluppo in cui si creano modelli formali del software che vengono poi fatti evolvere mentre il sistema viene progettato e implementato
- I modelli diventano la guida del processo di sviluppo; infatti, MDD prevede l'uso di strumenti per la generazione automatica del codice e dei test case a partire dai modelli

![[ISW4-s040-1.png|600]]

Flusso: Raccolta e specifica dei requisiti → Design ad alto livello → Design dettagliato → Codifica → Testing → Deployment; da "Design dettagliato" e dalla codifica viene generato automaticamente il **codice**.

- **Computational Independent Model (CIM)**: rappresenta il sistema secondo la terminologia del dominio
- **Platform Independent Model (PIM)**: precisa il tipo di architettura in modo indipendente dalla piattaforma tecnologica di implementazione
- **Platform Specific Model (PSM)**: specifica il sistema in termini dei costrutti disponibili in una specifica tecnologia implementativa

>> I tre modelli formano una catena di raffinamenti: CIM (cosa, nel linguaggio del
>> cliente) → PIM (come, in astratto) → PSM (come, su questa tecnologia). Il
>> passaggio PIM→PSM è quello che gli strumenti MDD automatizzano con trasformazioni.

---
## Slide 41 – I modelli agili

- I modelli prescrittivi, basati su una ferrea disciplina, trascurano la fragilità delle persone che realizzano il software
- Il modelli di processo agili presentano le seguenti caratteristiche:
	- incoraggiano la soddisfazione del cliente e una consegna incrementale anticipata del software
	- impiegano team di progettazione compatti e molto motivati
	- impiegano metodi informali
	- producono un livello minimo di prodotti di ingegneria del software
	- incoraggiano semplicità di sviluppo
	- richiedono comunicazione continua tra sviluppatori e utenti

---
## Slide 42 – Extreme Programming

- E' il più diffuso modello di processo agile, nato nel 1999
- XP adotta un approccio object-oriented e include 4 attività strutturali:
	- **Pianificazione**
		- definisce un insieme di *user story* che descrivono le funzionalità del software
		- a ogni user story il cliente assegna un valore che ne definisce la priorità
		- i progettisti assegnano a ogni user story un costo (in settimane di sviluppo)
		- se una user story richiede più di 3 settimane di sviluppo, si chiede al cliente di frammentarla
		- il cliente e i progettisti decidono quali user story inserire nella prossima release, e le ordinano per valore o per rischio decrescenti

---
## Slide 43 – Extreme Programming

- E' il più diffuso modello di processo agile, nato nel 1999
- XP adotta un approccio object-oriented e include 4 attività strutturali:
	- **Design**
		- persegue la massima semplicità
		- viene scoraggiata la progettazione di funzionalità aggiuntive
		- incoraggia l'uso di *schede CRC* (Classe-Responsabilità-Collaborazione)
		- se viene individuato un problema di design, si crea immediatamente un prototipo operativo (*spike solution*) che viene poi valutato
		- incoraggia il *refactoring*, ossia un processo di "ripulitura" e riorganizzazione del software che non ne altera il comportamento esterno
		- l'architettura viene considerata un elemento transitorio

---
## Slide 44 – Extreme Programming

- E' il più diffuso modello di processo agile, nato nel 1999
- XP adotta un approccio object-oriented e include 4 attività strutturali:
	- **Programmazione**
		- si basa sul *pair programming*, in cui 2 persone (in genere con ruoli leggermente differenziati) collaborano alla stessa workstation per sviluppare il software così da fornire un meccanismo di soluzione in tempo reale dei problemi e una garanzia di qualità
	- **Testing**
		- già prima dell'inizio della programmazione vengono definiti degli *unit test*, ossia test di ogni singolo componente, che vengono ora implementati attraverso uno strumento di supporto che ne consenta l'automazione
		- si incoraggia il *test di regressione* a ogni modifica del software

>> Definire gli unit test *prima* del codice (test-first) non è solo disciplina di
>> verifica: il test è la specifica eseguibile del componente, quindi sostituisce
>> parte della documentazione di design che XP volutamente non produce.

---
## Slide 45 – Extreme Programming

- Dopo il primo rilascio del progetto, il team XP calcola la **velocità del progetto**, intesa come il numero di user story implementate nella prima release
- La velocità del progetto è utilizzata per
	- stimare le date di consegna e le pianificazioni per le successive release
	- determinare se le user story sono state sottovalutate, ed eventualmente modificare il contenuto delle prossime release o le loro date di consegna

---
## Slide 46 – Unified Process

- Unified Process (UP) è il processo di sviluppo del software ideato da Booch, Rumbaugh, Jacobson (gli autori di UML)
	- Guidato dai casi d'uso
	- Centrato sull'architettura
	- Iterativo e incrementale
	- Model-based e component-based
	- Object-oriented
	- Configurabile

---
## Slide 47 – Un modello di UP

- **CHI**: Una **risorsa** o **ruolo** definisce il comportamento e le responsabilità di un individuo o un gruppo
- **COSA**: Il comportamento è espresso in termini di **attività** e **manufatti**
- **QUANDO**: Si modellano **flussi di lavoro**, ossia sequenze di attività correlate eseguite da ruoli che producono manufatti

![[ISW4-s047-1.png|350]]

Confronto fra la notazione **UP** (a sinistra) e quella **RUP** (a destra) per ruolo/risorsa, attività, manufatto e flusso di lavoro.

---
## Slide 48 – Manufatti

- **Set di gestione**
	- elaborati di pianificazione (software development plan, studio economico, …)
	- elaborati operazionali (stato di avanzamento, descrizione versione, …)
- **Set dei requisiti**
	- documento di visione
	- modello dei casi d'uso
	- modello di business
- **Set di progettazione**
	- modello di design
	- modello architetturale
	- modello di test
- **Set di implementazione**
	- codice sorgente ed eseguibili
	- file di dati
- **Set di rilascio agli utenti**
	- script di installazione
	- documentazione utente
	- materiale formativo

---
## Slide 49 – Flussi di lavoro

- I flussi di lavoro non sono rigidamente sequenziali, e vengono svolti dal progetto in ogni iterazione
	- **Requisiti**: fissa ciò che il sistema deve fare
	- **Analisi**: mette a punto i requisiti e li struttura
	- **Progettazione**: concretizza i requisiti in un'architettura del sistema
	- **Implementazione**: costruisce il software
	- **Test**: verifica che l'implementazione rispetti i requisiti
	- **Deployment**: descrive la configurazione del sistema
	- **Gestione configurazione**: mantiene le versioni del sistema
	- **Gestione progetto**: descrive le strategie per gestire un processo iterativo
	- **Ambiente**: descrive le infrastrutture di sviluppo

---
## Slide 50 – Fasi

- Le fasi sono sequenziali, e corrispondono a milestone significativi per committenti, utenti, management
	- **Inception (avvio)**: definisce gli obiettivi del progetto, ne investiga la fattibilità, ne stima i costi, il potenziale di mercato e i rischi, analizza i prodotti concorrenti
	- **Elaboration**: pianifica il progetto e ne definisce le caratteristiche funzionali, strutturali e architetturali
	- **Construction**: sviluppa il prodotto attraverso una serie di iterazioni, effettua il testing, prepara la documentazione
	- **Transition**: consegna il sistema agli utenti finali (include marketing, installazione, configurazione, formazione, supporto, mantenimento)
- Ogni fase può essere composta da una o più iterazioni; il numero esatto dipende dalle scelte del Project Manager e dai rischi del progetto

>> Attenzione a non confondere *fasi* e *flussi di lavoro*: le fasi sono l'asse
>> temporale (quando), i flussi di lavoro sono le discipline (che cosa si fa).
>> Ogni fase esegue un po' di tutti i flussi, con pesi diversi — è esattamente
>> quello che mostra il grafico della slide 52.

---
## Slide 51 – Milestone

- Inception
	- Documenti fattibilità
- Elaboration
	- Specifica dei requisiti software
	- Architettura consolidata e verificata
- Construction
	- Versione sistema in pre-produzione (Beta)
- Transition
	- Versione sistema in produzione

---
## Slide 52 – Fasi e flussi di lavoro

![[ISW4-s052-1.png|600]]

Il grafico incrocia le *Phases* (Inception, Elaboration, Construction, Transition) con le *Disciplines*, suddivise in **attività operative** (Business Modeling, Requirements, Analysis & Design, Implementation, Test, Deployment) e **attività di supporto** (Configuration & Change Mgmt, Project Management, Environment). In basso le *Iterations*: Initial, E1, E2, C1, C2, CN, T1, T2.

>> Le "gobbe" mostrano lo sforzo relativo di ciascuna disciplina nel tempo: nessuna
>> disciplina è confinata a una sola fase (come nel waterfall), ma ognuna ha il
>> proprio picco — i requisiti in Elaboration, l'implementazione in Construction,
>> il deployment in Transition.

---
## Slide 53 – Verifica del software

**3**

- La fase di verifica del software ha lo scopo di controllare se il sistema realizzato risponde alle specifiche di progetto
- La verifica non coinvolge solo il prodotto finale ma segue passo per passo il progetto e lo sviluppo del prodotto
- Le tecniche di verifica del sw possono essere classificate come:
	- **Dinamiche o di testing:** il corretto funzionamento del sistema viene controllato sulla base di prove sperimentali che ne verifichino il comportamento in un insieme rappresentativo di situazioni. Sono le più utilizzate nella pratica.
	- **Statiche o di analisi:** il corretto funzionamento del sistema viene verificato analizzando direttamente la struttura dei moduli e il codice che li realizza. Sono applicabili durante l'intero ciclo di vita

>> La differenza operativa è semplice: nelle tecniche dinamiche il programma viene
>> *eseguito* su dati di prova, in quelle statiche no (ispezioni, walkthrough,
>> analisi del flusso di controllo e dei dati, model checking).

---
## Slide 54 – Testing

*"Le operazioni di testing possono individuare la presenza di errori nel software ma non possono dimostrarne la correttezza"* (Dijkstra 1972)

- Scopo del testing è quello di verificare il comportamento del sistema in un insieme di casi sufficientemente ampio da rendere plausibile che il suo comportamento sia analogo anche nelle restanti situazioni
- Vista l'impossibilità pratica di verificare un sistema in tutte le possibili circostanze (*testing esaustivo*) è necessario individuare dei criteri per la selezione dei casi significativi
- Le operazioni di testing si suddividono in:
	- **Testing in the small**: riguardano moduli singoli e porzioni specifiche del codice che rivestono una particolare importanza o che hanno una particolare complessità
	- **Testing in the large**: riguardano il sistema nella sua globalità

>> Il testing esaustivo è impraticabile già su esempi banali: una funzione con due
>> input interi a 32 bit ha $2^{32} \cdot 2^{32} = 2^{64} \approx 1.8 \cdot 10^{19}$
>> combinazioni possibili. Da qui la necessità di *criteri di copertura* che
>> selezionino un sottoinsieme finito e significativo di casi.

---
## Slide 55 – Testing in the small

- Valuta il corretto funzionamento di una porzione del codice analizzando in modo approfondito il suo comportamento in relazione all'input

**Grafi di controllo**

![[ISW4-s055-1.png|550]]

I quattro costrutti elementari e i rispettivi grafi di controllo: **assegnamento** ($x=3$), **if then** ($x>0$ / $x\le 0$), **if then else** ($x>0$ / $x\le 0$), **while** ($x>0$ / $x\le 0$).

>> Il grafo di controllo (control flow graph) è il modello su cui si basa tutto il testing
>> white-box: i nodi sono blocchi di istruzioni, gli archi i possibili passaggi di controllo.
>> "Coprire" il codice significa allora coprire nodi (statement test) o archi (branch test)
>> di questo grafo.

---
## Slide 56 – Testing in the small

**Criterio di copertura dei programmi (statement test)**

*"Selezionare un insieme di test T tali che, a seguito dell'esecuzione del programma P su tutti i casi di T, ogni istruzione elementare di P venga eseguita almeno una volta"*

- Si basa sull'osservazione che un errore non può essere scoperto se la parte di codice che lo contiene non viene eseguita almeno una volta
- Può essere eseguito solo conoscendo la struttura interna della porzione di codice (***white-box testing***)

```
read(x);
read(y);
if x!=0 then x:=x+10;
y:=y/x;
.......
```

**test={(x=20, y=30)}**

>> Un solo caso di prova basta a eseguire tutte le istruzioni, ma non scopre l'errore:
>> con $x=0$ l'if non viene preso e `y:=y/x` divide per zero. La copertura delle
>> istruzioni è quindi il criterio più debole.

---
## Slide 57 – Testing in the small

**Criterio di copertura delle decisioni (branch test)**

*"Selezionare un insieme di test T tali che, a seguito dell'esecuzione del programma P su tutti i casi di T, ogni arco del grafo di controllo di P sia attraversato almeno una volta"*

- Il criterio richiede che per ogni condizione presente nel codice sia utilizzato un test che produca il risultato TRUE e FALSE
- Si basa sul flusso di controllo e non sull'insieme di istruzioni
- Può essere eseguito solo conoscendo la struttura interna della porzione di codice (*white-box testing*)

```
read(x);
read(y);
if (x=0 or y>0)
      then y:=y/x;
      else x:=y+2/x;
.......
```

**test={(x=5, y=5), (x=5, y=-5)}**

>> I due casi rendono la condizione composta vera e falsa, quindi entrambi i rami sono
>> percorsi. Però il caso $x=0$ non viene mai provato: la divisione per zero in
>> `y:=y/x` resta nascosta. Da qui la necessità del criterio successivo.

---
## Slide 58 – Testing in the small

**Criterio di copertura delle decisioni e delle condizioni**

*"Selezionare un insieme di test T tali che, a seguito dell'esecuzione del programma P su tutti i casi di T, ogni arco del grafo di controllo di P sia attraversato e tutti i possibili valori delle condizioni composte siano valutati almeno una volta"*

- Il criterio richiede che, per ogni porzione di condizione composta presente nel codice, sia utilizzato un test che produca il risultato TRUE e FALSE
- Il criterio produce un'analisi più approfondita rispetto al criterio di copertura delle decisioni
- Può essere eseguito solo conoscendo la struttura interna della porzione di codice (*white-box testing*)

>> Sulla condizione `(x=0 or y>0)` non basta più che l'intera espressione sia vera e falsa:
>> ciascuna sotto-condizione (`x=0` e `y>0`) deve assumere entrambi i valori. Serve quindi
>> anche un caso con $x=0$, quello che il branch test lasciava scoperto.

---
## Slide 59 – Testing in the small

```
1. read(x);
2. read(y);
3. if (y=0)
4.      then x:=x+1;
5. y:=y/x;
6. if (x>0)
7.      then print(x);
8.      else print(y);
```

(la riga **3. `if (y=0)`** è evidenziata)

**test1={(x=2, y=10), (x=-2, y=0)}**

**test2={(x=2, y=10), (x=-1, y=0)}**

Entrambi i test set soddisfano il criterio di copertura delle decisioni e delle condizioni, ma solo *test2* permette di individuare l'errore.

![[ISW4-s059-1.png|400]]

Grafo di controllo: `1 read(x)` → `2 read(y)`; da 2, con $y=0$ si va a `4 x:=x+1`, con $y\ne 0$ direttamente a `5 y=y/x`; da 5, con $x>0$ a `7 print(x)`, con $x\le 0$ a `8 print(y)`; entrambi confluiscono in `end`.

>> Con *test2* il caso $(x=-1, y=0)$ entra nel ramo `then` e porta $x$ a $0$: la riga 5
>> diventa una divisione per zero. Con *test1* il caso $(x=-2, y=0)$ percorre gli stessi
>> archi e le stesse condizioni, ma porta $x$ a $-1$ e il malfunzionamento non si
>> manifesta. Morale: la copertura strutturale è necessaria ma non sufficiente, perché
>> non garantisce di scegliere *i valori* che fanno emergere il difetto.

---
## Slide 60 – Testing in the large

- L'esplosione combinatoria delle possibili situazioni che si hanno quando si esaminano sistemi di grandi dimensioni rende impossibile l'utilizzo di tecniche white-box
- Si rende quindi necessario valutare il funzionamento del sistema sulla base delle corrispondenze input-output. Il sistema è considerato una scatola nera (***black-box testing***)
- L'insieme di test da utilizzare viene selezionato sulla base delle specifiche di progetto che permettono di definire i diversi valori di input e i corrispondenti valori in output.

*"Il programma riceve come input una fattura di cui è nota la struttura dettagliata. La fattura deve essere inserita in un archivio ordinato per data. Se esistono altre fatture con la stessa data fa fede l'ordine di arrivo. È inoltre necessario verificare che: 1) il cliente sia già stato inserito in archivio, vi sia corrispondenza tra la data di inserimento del cliente e quella della fattura, ...."*

**Test Set**

1) Fattura con data odierna
2) Fattura con data passata e per la quale esistono altre fatture
3) Fattura con data passata e per la quale non esistono altre fatture
4) Fattura il cui cliente non è stato inserito.
....

>> I casi di prova black-box si ricavano partizionando l'input in *classi di equivalenza*
>> (qui: posizione temporale della data, presenza di fatture omonime, presenza del cliente)
>> e scegliendo un rappresentante per classe, più i valori di confine.

---
## Slide 61 – Testing in the large

- **Test di modulo**: verifica se un modulo è stato implementato correttamente in base al suo comportamento esterno
- **Test d'integrazione**: verifica il comportamento di sottoparti del sistema sulla base del loro comportamento esterno. Viene solitamente svolto simulando il comportamento dei moduli che producono l'input del sottosistema in analisi
- **Test di sistema**: verifica il comportamento dell'intero sistema sulla base del suo comportamento esterno
	- Il test d'integrazione permette di:
		1. Anticipare la scoperta di eventuali errori alla fase di sviluppo
		2. Semplificare la ricerca degli errori poiché questi risultano circoscritti alla sottoporzione in esame
		3. Rilasciare sottoparti autonome del sistema

>> I moduli "simulati" che forniscono l'input sono i classici *driver* e *stub*: permettono
>> di provare un sottosistema prima che tutto il resto sia pronto.

---
## Slide 62 – Analisi del software

**Analizzare un software significa ispezionarne il codice per capirne le caratteristiche e le funzionalità.**

- Può essere effettuata sul codice oppure su pseudocodice.
- Permette la verifica di un insieme di esecuzioni mentre il testing verifica singoli casi
- È soggetta agli errori di colui che la effettua
- Si basa su un modello della realtà e non su dati reali

I due principali approcci all'analisi del software sono *Code walk-through* e *Code inspection*

>> È la differenza fra verifica **statica** (analisi: si ragiona sul testo del programma e si
>> coprono intere famiglie di esecuzioni) e verifica **dinamica** (testing: si esegue il
>> programma su singoli input concreti). Le due tecniche sono complementari.

---
## Slide 63 – Code walk-through

- È un tipo di analisi informale eseguita da un team di persone che dopo aver selezionato opportune porzioni del codice e opportuni valori di input ne simulano su carta il comportamento
	- Il numero di persone coinvolte deve essere ridotto (3~5)
	- Il progettista deve fornire in anticipo la documentazione scritta relativa al codice
	- L'analisi non deve durare più di alcune ore
	- L'analisi deve essere indirizzata alla ricerca dei problemi e non alla loro soluzione

![[ISW4-s063-1.png|250]]

>> "Su carta" è letterale: si percorre il codice a mente, come se si camminasse dentro
>> l'esecuzione (*walk-through*), senza eseguirlo davvero.

---
## Slide 64 – Code inspection

- L'analisi, eseguita da un team di persone e organizzata come nel caso del code walk-through, mira a ricercare classi specifiche di errori. Il codice viene esaminato controllando soltanto la presenza di una particolare categoria di errore, piuttosto che simulando una generica esecuzione
- Le classi di errori che vengono solitamente ricercate con questa tecnica sono:
	- Uso di variabili non inizializzate
	- Loop infiniti
	- Letture di dati non allocati
	- Deallocazioni improprie di memoria

![[ISW4-s064-1.png|300]]

>> Differenza chiave rispetto al walk-through: qui non si simula un'esecuzione generica,
>> si va a caccia di una *checklist* di difetti noti. È la logica che oggi ritroviamo negli
>> analizzatori statici automatici (lint, sanitizer, ecc.).

---
## Slide 65 – Analisi di flusso dei dati

- Un tipo particolare di code inspection
- L'analisi dell'evoluzione del valore associato alle variabili durante l'esecuzione di un programma è intrinsecamente dinamica. Ciononostante, alcuni aspetti di questo problema possono essere analizzati anche staticamente
- A ogni comando è possibile associare staticamente il tipo di operazioni eseguite sulle variabili:
	- *definizioni* (d)
	- *usi* (u)
	- *annullamenti* (a)
- Sequenze di comandi, corrispondenti a possibili esecuzioni, sono riducibili staticamente a sequenze di tali operazioni

>> In pratica: **d** = assegnamento di un valore, **u** = lettura del valore, **a** = la variabile
>> perde il valore (entrata nel blocco che la dichiara, uscita dallo scope, deallocazione).
>> Ogni cammino del grafo di controllo diventa così una stringa sull'alfabeto {d, u, a}.

---
## Slide 66 – Analisi di flusso dei dati: esempio

```
1 procedure swap (x1, x2: real)
2 var x: real;
3 begin
4 x2 := x;
5 x2 := x1;
6 x1 := x;
7 end;
```

- Per la variabile x, la sequenza (assegnamenti 4,5,6) può essere ridotta a:
	- un annullamento (il valore associato alla variabile x non è infatti definito al momento dell'attivazione del sottoprogramma)
	- un uso (linea 4)
	- un secondo uso (linea 6)

	La sequenza di operazioni sulla variabile x può quindi essere riassunta con la stringa **auu**
- Per la variabile x1 la sequenza di operazioni corrispondenti può essere riassunta dalla stringa **dud** (è uno dei parametri formali della procedura e quindi il valore è definito al momento della chiamata)
- Per la variabile x2, la sequenza di operazioni corrispondenti è **ddd**

>> Il programma corretto sarebbe `x := x2; x2 := x1; x1 := x;`, che darebbe le sequenze
>> **adu** per x, **dud** per x1 e **dud** per x2: tutte legali. Le stringhe anomale **auu**
>> e **ddd** segnalano quindi proprio lo scambio sbagliato alla linea 4.

---
## Slide 67 – Analisi di flusso dei dati

- L'esame delle sequenze ottenute per ogni variabile può rilevare la presenza di anomalie
	- La sequenza **auu**, ad esempio, ottenuta per la variabile x permette di dedurre che il valore usato nei due comandi di assegnamento alle linee 4 e 6 non è definito, i due usi della variabile sono infatti preceduti da un annullamento
- In generale, ogni sequenza contenente un uso non preceduto da una definizione senza annullamenti intermedi è sintomo di una possibile anomalia dovuta all'uso di valori non definiti
	- Nel programma swap, che dovrebbe scambiare il contenuto dei parametri x1 e x2 facendo uso di una variabile locale x, le variabili x ed x2 nell'assegnamento di linea 4 (`x2 := x;`) sono state erroneamente invertite
	- Anche la sequenza **ddd** ottenuta per la variabile x2 permette di rilevare l'anomalia nel programma swap: il valore associato a x2 all'atto della chiamata non è usato prima di essere sostituito da un nuovo valore, è quindi assegnato inutilmente alla variabile
- In generale, ogni sequenza contenente due definizioni consecutive è sintomo di una possibile anomalia

---
## Slide 68 – Analisi di flusso dei dati

- Regole generali, la cui violazione permette di dedurre la presenza di possibili anomalie nel programma:

1. **L'uso di una variabile x deve essere sempre essere preceduto in ogni sequenza da una definizione della stessa variabile x, senza annullamenti intermedi**
	- Un uso non preceduto da una definizione corrisponde infatti al potenziale uso di un valore non determinato di una variabile; al momento dell'uso, infatti, il valore della variabile non è ancora stato definito. Allo stesso modo se tra l'uso e la precedente definizione compare un annullamento, il valore della variabile non è definito all'atto del uso

2. **Una definizione di una variabile x deve sempre essere seguita da un uso della variabile x, prima di un'altra definizione o di un annullamento della stessa variabile x**
	- Una definizione non seguita da un uso prima di ulteriori definizioni o annullamenti della variabile corrisponde all'assegnamento di un valore non successivamente utilizzato e quindi potenzialmente inutile. Ciò può essere sintomo di un'anomalia dovuta all'omissione del comando che avrebbe dovuto usare il valore assegnato alla variabile.

>> In sintesi: le due sotto-stringhe "proibite" sono **au** (uso di valore non definito) e
>> **dd** (definizione inutile, valore sovrascritto senza essere letto).

---
## Slide 69 – Analisi di flusso dei dati

- Esempio:
	- **aduduu**, **duadudu** sono legali secondo le regole (1) e (2)
	- **aduddu**, **dauduu**, **duaudu** non soddisfanno invece le regole (1) e (2)
		- Nella prima compaiono due definizioni consecutive, contrariamente a quanto richiesto dalla regola (2)
		- Nella seconda tra il primo uso e la precedente definizione compare un annullamento, la regola (1) non è quindi soddisfatta
		- Nella terza, è interposto un annullamento tra un uso (il secondo uso della sequenza) e la definizione precedente (la prima definizione della sequenza)

>> Verifica rapida: basta cercare le coppie `dd` e `au` dentro la stringa.
>> In `aduddu` compare `dd` (posizioni 4-5); in `dauduu` e in `duaudu` compare `au`.

---
## Slide 70 – Analisi di flusso dei dati

- Non tutte le sequenze **au** e **dd** corrispondono necessariamente ad anomalie:
	- La sequenza **au** può per esempio comparire in un generatore di numeri casuali, che legge il contenuto non inizializzato di una cella di memoria per determinare il seme della generazione
	- La sequenza **dd** può essere dovuta ad una cattiva strutturazione del programma, per cui la prima definizione della sequenza non è usata nell'esecuzione considerata, ma lo è in un'altra esecuzione, che richiede la percorrenza di un cammino diverso:

```
1 ......
2 x := .....
3 if .... then x := .....
4 ... := ...x...
5 .......
```

>> Nell'esempio, il cammino che entra nel `then` produce la sequenza `dd` (linee 2 e 3),
>> ma il cammino che salta il `then` usa davvero la definizione della linea 2. L'analisi
>> statica segnala quindi *falsi positivi*: indica anomalie *possibili*, non certe.

---
## Slide 71 – 4. Certificazione

- Con il termine ***certificazione*** si intende l'atto mediante il quale un ***organismo di certificazione accreditato*** a livello nazionale o internazionale dichiara che, con un livello confidenziale attendibile, un determinato prodotto, processo, servizio o sistema qualità aziendale è conforme a una specifica norma o documento normativo a essa applicabile
- L'***accreditamento*** è definito come il riconoscimento formale di idoneità di un laboratorio a effettuare specifiche prove o determinati tipi di prova. L'uso del termine è ora esteso al processo di riconoscimento delle competenze degli organismi di certificazione

![[ISW4-s071-1.png|250]]

>> Attenzione alla catena: qualcuno *accredita* l'organismo, e l'organismo accreditato
>> *certifica* l'azienda. Sono due livelli distinti di riconoscimento.

---
## Slide 72 – La certificazione ISO 9000

L'iter di valutazione dell'azienda da parte degli enti di certificazione deve seguire le prescrizioni stabilite dalla norma **ISO 10011**.

![[ISW4-s072-1.png|600]]

Flusso (a sinistra le attività dell'**Azienda**, a destra quelle dell'**Ente certificatore**):

- Predisposizione della documentazione e realizzazione del S.Q. → Invio del manuale qualità
- Esame di conformità del manuale qualità → **Conforme?**
	- No → Azioni Correttive (azienda) → nuovo invio del manuale
	- Sì → Verifica ispettiva
- Attuazione azioni correttive → Verifica ispettiva → **Conforme?**
	- No → Rifiuto Motivato → Azioni Correttive (azienda)
	- Sì → Concessione certificazione → Certificato ISO 9000 all'azienda e Visite di sorveglianza

---
## Slide 73 – La certificazione ISO 9000

- La certificazione ISO 9000 può essere rilasciata anche su sotto-porzioni dell'azienda oggetto di valutazione. La definizione dell'estensione dell'analisi e quindi la scelta degli elementi e dei processi oggetto di verifica sono un problema controverso e motivo di discussione tra le parti. È compito dell'organismo di certificazione, in collaborazione con l'azienda da certificare, definire i confini e l'estensione della certificazione
	- Il ***manuale qualità*** comprende la specifica di tutti i processi su cui è applicato il sistema qualità. Esso comprende inoltre la descrizione di tutta la documentazione che viene redatta a supporto di tale sistema
	- La ***verifica ispettiva*** è la fase fondamentale della certificazione. Durante la visita ispettiva i valutatori interpellano, secondo un piano concordato in base alle caratteristiche dell'azienda e al risultato dell'analisi del manuale qualità, vari responsabili aziendali le cui funzioni hanno impatto sulla qualità (direzione generale, ufficio acquisti, direzione tecnica, responsabili laboratori, ecc.). Vengono quindi visitati i reparti in cui si svolgono le attività ed effettuate le verifiche relative alla corretta applicazione delle procedure aziendali
	- A certificazione avvenuta l'organismo di certificazione effettua visite di mantenimento della certificazione (***visite di sorveglianza***). La frequenza delle visite di sorveglianza non è uguale per tutti gli organismi e può variare da 1 a 4 all'anno

---
## Slide 74 – I documenti del progetto

- La gestione della qualità si realizza tramite la standardizzazione di tutte le operazioni che riguardano il processo. Elemento primario a tale fine è l'insieme dei documenti che costituiscono l'archivio del progetto. La concessione della certificazione ISO 9000 si basa in gran parte sulla correttezza di tale documentazione
- I documenti del progetto si dividono in:
	- Documenti tecnici
	- Documenti di pianificazione

![[ISW4-s074-1.png|500]]

Confluiscono nell'**ARCHIVIO DEL PROGETTO**: *Piano della qualità*, *Piano del progetto*, *Piano gestione configurazione* (documenti di pianificazione) e i *Documenti tecnici*.

---
## Slide 75 – Vision 2000

È il programma di revisione delle norme ISO 9000, culminato nel 2000, che ha dato vita alla **ISO 9001:2000**

![[ISW4-s075-1.png|200]]

**Obiettivo:**

Creare un sistema di gestione per la qualità che aumenti la soddisfazione del cliente, assicurando che i prodotti e i servizi siano conformi alle normative e ai requisiti contrattuali

**Approccio:**

Spostare l'attenzione dalla gestione basata sulle procedure a una basata sui processi

Questo significa che le attività di un'organizzazione vengono identificate, gestite e controllate come una serie di processi interconnessi

**Principi chiave:**

- *Centralità del cliente*: La soddisfazione del cliente è l'obiettivo principale
- *Processi*: L'efficacia e l'efficienza dell'azienda sono gestite attraverso il monitoraggio e il miglioramento dei processi
- *Miglioramento continuo*: Le organizzazioni devono perseguire il miglioramento costante delle proprie prestazioni
- *Responsabilità*: Richiede un ruolo guida forte da parte della direzione aziendale nel guidare l'organizzazione verso il raggiungimento degli obiettivi di qualità

>> Il passaggio "procedure → processi" è il cuore di Vision 2000: non si certifica più solo
>> che l'azienda segue le procedure scritte, ma che i suoi processi producono davvero il
>> risultato atteso e migliorano nel tempo.

---
## Slide 76 – 5. La manutenzione

| Tipo | Descrizione |
| --- | --- |
| **Correttiva** | Rimedia ai malfunzionamenti provocati dai difetti derivanti da errori di analisi, progettazione, codifica, test |
| **Adattiva** | mantiene inalterato il livello di servizio del sistema al mutare delle condizioni operative |
| **Perfettiva** | migliora qualitativamente le caratteristiche funzionali o tecniche del sistema |
| **Evolutiva** | migliora qualitativamente e quantitativamente le caratteristiche del sistema |

---
## Slide 77 – Manutenzione

**Errori:**

- commessi dall'uomo
- interessano tutte le fasi del ciclo di sviluppo

**Difetti:**

- si riscontrano nei programmi
- si manifestano nella produzione di risultati sbagliati

**Malfunzionamenti:**

- interessano i sistemi
- ne compromettono l'intera funzionalità
- ne annullano il valore informativo

>> È la catena causale classica: l'**errore** è l'atto umano, il **difetto** (*fault*) è la sua
>> traccia nel codice, il **malfunzionamento** (*failure*) è il comportamento sbagliato che
>> l'utente osserva. Una manutenzione che si ferma al malfunzionamento senza risalire
>> al difetto (e all'errore) è destinata a ripetersi.

---
## Slide 78 – Manutenzione correttiva

- Esempi:
	- tutto ciò che fa "andare male" i programmi
- Costi:
	- altissimi (40%), soprattutto quando non si risale oltre i difetti
- Risultati:
	- aumento dell'entropia del programma
	- degrado del sistema
	- abbattimento dell'affidabilità
	- ripristino della qualità

---
## Slide 79 – Manutenzione adattiva

- Esempi:
	- ricalcolo tasse e imposte
	- aggiornamento/gestione listini e tariffari
	- modifiche a routine di calcolo
- Costi:
	- alti (20-30%) ma spesso imputati allo sviluppo
- Risultati:
	- nessun aumento dei valori informativi del sistema
	- ripristino della qualità

---
## Slide 80 – Manutenzione perfettiva

- Esempi:
	- ricerca performance
	- estensioni funzioni applicative
	- nuove interfacce
	- modifiche architetturali
- Costi:
	- quasi sempre imputati allo "sviluppo"
- Risultati:
	- aumento del valore informativo del sistema
	- aumento dell'utilizzabilità
	- aumento della complessità
	- spesso, degrado della qualità

---
## Slide 81 – Manutenzione evolutiva

- Esempi:
	- nuove funzioni "embedded" nei vecchi programmi
	- passaggio da interfaccia a caratteri a interfaccia a finestre
	- passaggio da file indexed a DBMS relazionali
	- potenziamento reporting
- Costi:
	- alti (spesso nascosti fino all'esercizio)
- Risultati:
	- aumento tendenziale dell'entropia
	- diminuzione della robustezza del sistema
	- aumento della potenza
	- aumento della qualità, ma solo se si progetta bene l'operazione!

>> Le quattro forme di manutenzione hanno effetti opposti sulla qualità: correttiva e
>> adattiva la *ripristinano* (riportano il sistema al livello atteso), perfettiva ed evolutiva
>> *aumentano il valore* del sistema ma rischiano di degradarne la struttura, se non si
>> progetta bene l'intervento.

---
## Riassunto

>> **Misurazione e metriche**
>> - Si misura per *prevedere* (caratteristiche future) e *stimare* (caratteristiche attuali), cioè per decidere e agire.
>> - Metriche dimensionali LOC/DSI: produttività $P=LOC/M$, qualità $Q=E/LOC$, costo $C=\$/LOC$, documentazione $D=PD/LOC$. Limite: le LOC dipendono dal linguaggio.
>>
>> **Function Points**
>> - Misura funzionale adimensionale, calcolabile già sui requisiti e indipendente dalla tecnologia.
>> - 5 funzioni: dati (ILF interno, EIF esterno) e transazione (EI, EO con calcolo, EQ senza calcolo).
>> - Pesi semplice/medio/complesso: EI 3-4-6, EO 4-5-7, EQ 3-4-6, ILF 7-10-15, EIF 5-7-10.
>> - $FA = 0.65 + (TDI \times 0.01)$, 14 caratteristiche da 0 a 5 ⇒ $TDI \le 70$ e $0.65 \le FA \le 1.35$. FP pesati = UFP × FA.
>>
>> **Numero ciclomatico (McCabe, 1976)**
>> - $v(G) = e - n + 2$ = numero di cammini linearmente indipendenti; con $p$ procedure, $v(G)=e-n+2p$.
>> - Teorema di Mills: $v(G) = d + 1$ ($d$ punti di decisione; una decisione a $k$ uscite vale $k-1$). Soglia raccomandata: 10.
>>
>> **COCOMO**
>> - Organic $3.2 \cdot KDSI^{1.05}$, Semi-detached $3.0 \cdot KDSI^{1.12}$, Embedded $2.8 \cdot KDSI^{1.2}$; esponenti $>1$ = diseconomia di scala.
>> - $M = M_{Nom} \times \prod_{i=1}^{15} c_i$, moltiplicatori centrati su 1.00.
>>
>> **Modelli di processo**
>> - Attività comuni: comunicazione, pianificazione, modellazione, costruzione, deployment.
>> - Cascata (1970): sequenziale, inadatta a requisiti incerti. Incrementale: più cascate sfalsate, ogni stadio consegna software funzionante. RAD: team paralleli, moduli < 3 mesi. Incrementale = aggiunge funzionalità; iterativo = raffina quelle esistenti.
>> - Prototipazione evolutiva (14-15% del prodotto, il prototipo diventa il sistema) vs. usa-e-getta (5-10%, si butta). Spirale: sei settori, novità è la *risk analysis*. MDD: CIM → PIM → PSM.
>> - XP (1999): user story (max 3 settimane), schede CRC, spike solution, refactoring, pair programming, unit test prima del codice, velocità del progetto.
>> - UP: guidato dai casi d'uso, centrato sull'architettura, iterativo e incrementale. Distinguere le 4 *fasi* (inception, elaboration, construction, transition) dai *flussi di lavoro*, presenti in ogni fase con pesi diversi.
>>
>> **Verifica**
>> - Dinamica (testing) vs. statica (analisi). Dijkstra: il testing mostra la presenza di errori, non la correttezza.
>> - Criteri white-box in ordine crescente di forza: copertura delle istruzioni → delle decisioni (archi) → di decisioni e condizioni. La copertura strutturale è necessaria ma non sufficiente: conta anche la scelta dei valori.
>> - Testing in the large: black-box per classi di equivalenza; test di modulo, di integrazione (driver e stub), di sistema.
>> - Analisi statica: walk-through (simulazione su carta, 3-5 persone) e inspection (checklist di errori). Flusso dei dati con operazioni d/u/a: sequenze sospette **au** (uso non definito) e **dd** (definizione inutile), con possibili falsi positivi.
>>
>> **Certificazione e manutenzione**
>> - L'ente accreditato certifica l'azienda (ISO 9000, iter secondo ISO 10011: manuale qualità, verifica ispettiva, visite di sorveglianza). Vision 2000 / ISO 9001:2000 sposta il focus dalle procedure ai processi.
>> - Catena causale: errore (umano) → difetto (nel codice) → malfunzionamento (nel sistema).
>> - Correttiva (~40% dei costi) e adattiva (20-30%) *ripristinano* la qualità; perfettiva ed evolutiva *aumentano il valore* ma fanno crescere complessità ed entropia.
