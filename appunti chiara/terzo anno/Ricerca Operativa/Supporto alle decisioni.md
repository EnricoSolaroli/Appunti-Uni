I metodi di ottimizzazione hanno un’ampia gamma di applicazioni e tra i diversi ambiti abbiamo il _Supporto alle Decisioni_.

Metodi di ottimizzazione $\to$ matematica

Fondamentale per il supporto alle decisioni è la relazione tra dati e ottimizzazione. Per sviluppare una soluzione per il supporto alle decisioni sono necessari i seguenti passi:

- **modellare matematicamente il problema** che si vuole risolvere;

- identificare la sua **complessità**;

- **progettare l’algoritmo più adatto**, usando le tecniche di soluzione in relazione al modello e alla complessità del problema.  

#def PROBLEMA: quesito con cui si chiede di trovare, con un procedimento di calcolo, uno o più dati sconosciuti, partendo dai dati noti contenuti nell’enunciato del quesito stesso.

#def ISTANZA: rappresenta i dati noti del problema.

Nel nostro contesto per _risolvere un problema_ è necessario costruire un ==modello== e definire un ==algoritmo== di soluzione.

#def MODELLO: rappresentazione, spesso semplificata, di concetti, fenomeni, relazioni, strutture, processi, sistemi, etc. I modelli consentono di perseguire i seguenti obiettivi:

- **facilitare la comprensione**, identificando le componenti fondamentali e i meccanismi di funzionamento;

- **spiegare, controllare e predire eventi**, anche sulla base delle osservazioni passate;

- **supportare i processi decisionali**. 

## Modello matematico
Consente di rappresentare la realtà di interesse con un alto grado di astrazione per mezzo di simboli, equazioni, etc. I modelli matematici che utilizzeremo prevedono l’uso di parametri che rappresentano l’input e di variabili che rappresentano l’output. Vi sono due tipi di modelli:

- _modelli deterministici_ - i parametri possono essere definiti con esattezza a priori;
- _modelli stocastici_ - i parametri non sono certi a priori.

Spesso dai modelli stocastici ci si riporta a modelli deterministici, ad esempio enumerando scenari rappresentativi. 

## Approssimazione di un Modello
- **Prima del calcolo:**
    - modello;
    - misure empiriche;
    - precedenti calcoli.
- **Durante il calcolo:**
    - troncamento o discretizzazione;
    - arrotondamento.

**NOTA:** l'accuratezza del risultato finale dipende da tutti questi aspetti.

## Errori di Troncamento e Arrotondamento
L’**errore di troncamento** è dato dalla differenza tra il “risultato reale” e quello prodotto dall’algoritmo. Per esempio, può essere dovuto alla terminazione di un algoritmo di soluzione di tipo iterativo prima del raggiungimento del valore reale.

L’**errore di arrotondamento** è dato dalla differenza tra il risultato prodotto da un dato algoritmo usando un’aritmetica esatta e il risultato prodotto dallo stesso algoritmo usando un’aritmetica approssimata. L’aritmetica del “computer” è approssimata a causa dell’inesatta rappresentazione dei numeri reali e dall’applicazione degli operatori aritmetici ad essi.

>gli errori di calcolo sono la somma di errori di troncamento e di arrotondamento.

## Tipologie di Problemi
- Problema di “_Decisione_” (o problema decisionale): data un’istanza si vuole determinare se esiste o meno una certa soluzione;
- Problema di “_Ricerca_”: data un’istanza si vuole determinare una possibile soluzione;
- Problema di “_Enumerazione_”: data un’istanza si vuole determinare tutte le possibili soluzioni;
- Problema di “_Ottimizzazione_”: data un’istanza si vuole determinare la “migliore soluzione” possibile rispetto ad una misura fissata.

## Esempio TSP (traveling salesman problem)
A un mezzo di un corriere sono stati assegnati dei pacchi da consegnare:
- Problema di “Decisione”: si vuole sapere se è possibile svolgere tutte le consegne in una giornata lavorativa (e.g., entro le 9 ore di lavoro);
- Problema di “Ricerca”: si vuole determinare una sequenza di visite che consente di consegnare tutti i pacchi entro la giornata lavorativa;
- Problema di “Enumerazione”: si vogliono enumerare tutte le possibili soluzioni che consentono la consegna di tutti i pacchi;
- Problema di “Ottimizzazione”: si vuole determinare la sequenza delle visite che minimizza una funzione obiettivo (e.g., tempo impiegato, chilometri percorsi, etc.).

Una soluzione del TSP è definita dall’__ordine__ con cui si dovrà visitare le n fermate (per esempio, per permettere al corriere di consegnare i pacchi). Il numero delle possibili soluzioni alternative per un TSP che prevede n fermate potrebbe essere pari a:

$$ n! = 1 \times 2 \times 3 \times 4 \times 5 \times \dots \times n $$

Esempi:

$$

\begin{aligned}

5! &= 1 \times 2 \times 3 \times 4 \times 5 = 120 \\[6pt]

10! &= 1 \times 2 \times 3 \times \cdots \times 9 \times 10 = 3\,628\,800 \\[6pt]

20! &= 1 \times 2 \times 3 \times \cdots \times 19 \times 20 = 2\,432\,902\,008\,176\,640\,000 \\[6pt]

100! &= 1 \times 2 \times 3 \times \cdots \times 99 \times 100 \\[6pt]

200! &= 1 \times 2 \times 3 \times \cdots \times 199 \times 200

\end{aligned}

$$

## Complessità Computazionale
La teoria della complessità computazionale, spesso denotata come "informatica teorica" ha l'obiettivo di ==classificare i problemi secondo la loro intrinseca complessità==.

La difficoltà di un problema è una sua caratteristica generale che non è associata a una particolare istanza. Ricordiamo che un problema è un’entità astratta, mentre un’istanza è un caso particolare.  

> un algoritmo risolve un problema se è in grado di generare una soluzione per ogni possibile istanza.

Funzioni polinomiali, esponenziali e fattoriali:

![[Pasted image 20260923145614.png]]

I _problemi semplici_ sono polinomiali (insieme **P**)

I _problemi difficili_ sono "non-polinomiali" (insieme **NP**) tra cui si sono i problemi **NP-completi**.

#def NP - Nondeterministic Polynomial time, è l’insieme dei problemi decisionali in cui se la risposta è “Si” lo si può verificare in tempo polinomiale utilizzando una macchina di Turing deterministica, o in modo equivalente possiamo dire che il problema può essere risolto in tempo polinomiale da una macchina di Turing non-deterministica.

Si dimostra che $P \subseteq NP$ ma non sappiamo se $P \neq NP$ 

Un problema decisionale $f:I⟶{0,1}$  è **riducibile polinomialmente** a $g:I⟶{0,1}$ e si scrive

$f∝g$ se esiste una funzione $h$ **calcolabile in tempo polinomiale**, tale che per ogni input $x$:

$$f(x)=g(h(x))$$

In altre parole, possiamo trasformare ogni istanza di $f$ in un'istanza di $g$ tramite una funzione $h$ calcolabile in tempo polinomiale, mantenendo lo stesso risultato.

Un problema decisionale $p:I⟶{0,1}$ è definito **NP-Completo** se e solo se valgono entrambe le seguenti condizioni:

1. Il problema appartiene a **NP**: $p∈NP$
2. Ogni problema appartenente a **NP** è riducibile polinomialmente a $p$: $∀f∈NP,f∝p$ 

Quindi, un problema è **NP-Completo** se: appartiene a $NP$ ed è almeno tanto difficile quanto ogni altro problema in $NP$, secondo la riduzione polinomiale.

Fino ad oggi non è stato dimostrato che l'insieme dei problemi in **P** e l'insieme dei problemi **NP-Completi** siano disgiunti.

In altre parole, non sappiamo se: $P∩NP-Completi=∅$

Se esistesse invece un problema che appartiene contemporaneamente a $P$ e agli $NP$-Completi, allora si avrebbe: $P=NP$  

Questo è strettamente legato al famoso **problema P vs NP**, che rimane tuttora irrisolto.

Un problema di ottimizzazione è **NP-Hard** se esiste almeno un problema **NP-Completo** che può essere ridotto ad esso in tempo polinomiale. Un problema *NP-Hard non deve necessariamente appartenere a NP*.

In particolare, mentre un problema **NP-Completo** deve appartenere a $NP$, un problema **NP-Hard** può anche non appartenere a $NP$.

## Problemi vs Algoritmi
Le __prestazioni di un algoritmo__ possono essere misurate con:
-  il _tempo di calcolo richiesto per ottenere la soluzione;
-  la _qualità della soluzione_ (i.e., quanto il risultato ottenuto approssima il risultato corretto).

Per i problemi difficili c'è un ulteriore opzione:
#def **Algoritmi euristici**, che trovano soluzioni di “buona qualità”;
#def **Algoritmi esatti**, che trovano le soluzioni “ottime”.

> x la scelta dell’algoritmo è determinante definire la complessità computazionale del problema  

## Modelli vs Algoritmi
Il *modello scelto* per un dato problema ha un impatto determinante sulla scelta dell’*algoritmo più adatto*.
- Si potrebbe scegliere un modello che **approssima maggiormente il problema**, ma che può essere risolto in modo molto **efficiente/efficace**.
- Mentre modelli che **descrivono in modo molto preciso il problema** potrebbero essere troppo difficili da risolvere.  

*Quali dovrebbero essere i criteri di scelta?*
La stragrande maggioranza degli algoritmi di soluzione nell’ambito dell’**Intelligenza Artificiale (AI)** sono classificabili come **algoritmi euristici**.

Nell’ambito dell’**ottimizzazione**, molti modelli possono essere risolti in modo **esatto** tramite **algoritmi esatti**.

## Ricerca Operativa
Quando dobbiamo risolvere un problema dobbiamo costruire un modello che sia risolvibile da un algoritmo adeguato alla complessità del problema e alla tipologia di istanze che dobbiamo risolvere. 

>  La disciplina che si occupa dei problemi di ottimizzazione è nota come operations research (ricerca operativa) e fa parte del settore decision science (scienze decisionali).

<div style="text-align: right;">
16/09/26
</div>
### Ottimizzazione Non-Vincolata
Si ha quando la **funzione obiettivo** può assumere qualsiasi valore, senza limiti imposti alle variabili decisionali.

- **Concetto chiave:** Si cerca il punto di massimo o minimo assoluto della funzione.
- **Esempio (Domanda e Ricavo):** Se il ricavo è modellato da un'equazione quadratica del tipo $R(p) = -ap^2 + bp$, geometricamente rappresenta una **parabola concava** (a forma di U rovesciata).
- **Risoluzione:** Il valore ottimo corrisponde al **vertice della parabola**, la cui ascissa si calcola con la formula $p = -\frac{b}{2a}$ (in alternativa, si usano le derivate).

### Ottimizzazione Vincolata
A differenza del caso precedente, qui le variabili sono soggette a **restrizioni (vincoli)** dovute a risorse limitate (es. budget, materie prime) o regole fisiche/logiche (es. conservazione del flusso).

**Fasi della modellazione:**
1. **Variabili decisionali:** Identificare le incognite del problema (es. quantità di prodotti da realizzare, $x_1, x_2, \dots$).
2. **Definizione dei vincoli:** Tradurre i limiti in un sistema di equazioni o disequazioni.
    - _Vincoli di non negatività:_ Spesso le variabili non possono assumere valori negativi (es. non si possono produrre quantità negative di un bene, $x_i \ge 0$).
    - _Soluzioni arbitrarie ma limitate:_ Se il sistema ha equazioni ridondanti, una variabile può risultare "arbitraria". Tuttavia, se essa deve essere intera e rispetta dei limiti precisi (es. $5 \le x \le 15$), le soluzioni ottime da valutare non sono infinite, ma circoscritte a quei precisi valori.

**Gestione delle Disequazioni e Regione Ammissibile:**
- **Variabili di scarto:** Quando un vincolo prevede che non sia obbligatorio consumare _tutte_ le risorse, si usano le disequazioni (es. $\le 30000$). Poiché le operazioni elementari (es. Gauss) non funzionano sulle disequazioni, queste si trasformano in equazioni **aggiungendo delle "variabili di scarto"** ($s_1, s_2 \ge 0$), che rappresentano la risorsa inutilizzata.
- **Regione Ammissibile:** L'insieme di tutti i punti che soddisfano contemporaneamente tutti i vincoli (incluse le non negatività). All'interno di quest'area (o al suo perimetro) risiede la soluzione ottima.

### Programmazione Lineare (LP)
È la branca della "Programmazione Matematica" che si occupa di trovare la soluzione ottima all'interno della regione ammissibile, quando funzione e vincoli sono lineari.

**Componenti del Modello Generale di LP:**
- **Variabili decisionali (xi​):** Quantità del prodotto i da produrre.
- **Parametri dati:**
    - pi​: Profitto unitario per il prodotto i.
    - bj​: Disponibilità massima della materia prima j.
    - aij​: Quantità di materia j richiesta per produrre un'unità di i.
- **Funzione Obiettivo:** Da massimizzare (o minimizzare). Es: z=max∑pi​xi​
- **Vincoli di capacità:** L'uso delle risorse non deve superare la disponibilità. Es: ∑aij​xi​≤bj​
- **Vincoli di non negatività:** xi​≥0

**Risoluzione e Complessità:**
- Graficamente (per problemi a 2 variabili), la soluzione si trova nei vertici della regione ammissibile.
- Per problemi complessi, l'algoritmo più celebre è il **Metodo del Simplesso** (che usa operazioni elementari sui "tableau", simili al metodo di Gauss-Jordan).
- **Nota teorica:** Se si parla di programmazione lineare _continua_ (le variabili possono assumere valori decimali/frazionari e non per forza interi), il problema dal punto di vista computazionale è considerato **"facile"**.

<div style="text-align: right;">
21/09/26
</div>
### Modelli Matematici per l’Ottimizzazione
**Funzione Obiettivo e Tipologia di Problemi**
- **Unicità:** In un problema di programmazione lineare standard, la funzione obiettivo da ottimizzare è sempre solo una.
- **Verso dell'ottimizzazione:** I problemi possono essere sia di minimizzazione (minimo) che di massimizzazione (massimo).

**Tipologia di Variabili (Intere vs. Continue)**
A seconda dei vincoli imposti sulle componenti della soluzione $x$, i problemi si classificano in:
- **Programmazione Lineare Intera (PLI):** Quando abbiamo il vincolo aggiuntivo che _tutte_ le componenti della soluzione $x$ debbano assumere valori interi.
- **Programmazione Lineare Mista Intera (PLMI / MILP):** Quando _solo alcune_ componenti di $x$ sono vincolate ad essere intere (mentre altre possono assumere valori continui).

**Bound (Limiti) e Stime del Valore Ottimo ($z_P$)**
Indipendentemente dal fatto che il problema sia di minimo o massimo, il valore della soluzione ottima $z_P$ è sempre compreso tra un limite inferiore e un limite superiore: **$z_{LB} \le z_P \le z_{UB}$**. Il significato di questi limiti cambia però in base alla direzione dell'ottimizzazione:

- **Nel caso di un Problema di MINIMO (es. minimizzare i costi):**
    - **Lower Bound ($z_{LB}$):** È una stima _per difetto_. Si calcola tramite **procedure di bounding** (limiti teorici sotto i quali è impossibile scendere).
    - **Upper Bound ($z_{UB}$):** È una stima _per eccesso_, ed è rappresentata da qualsiasi _soluzione ammissibile_ trovata. Per trovare queste soluzioni si usano procedure dette **euristiche**.
- **Nel caso di un Problema di MASSIMO (es. massimizzare i profitti):**
    - **Lower Bound ($z_{LB}$):** In questo caso è la _soluzione ammissibile_ (una stima per difetto). Se trovo una soluzione che mi dà profitto 100, so che l'ottimo sarà almeno 100 o più. Si calcola tramite procedure **euristiche**.
    - **Upper Bound ($z_{UB}$):** È la stima _per eccesso_ (un limite teorico insuperabile). Si calcola tramite **procedure di bounding**.

**Categorie di Algoritmi Risolutivi**
Per affrontare i problemi, si utilizzano tre tipi di approcci:
- **Procedure Eurisiche:** Trovano rapidamente soluzioni ammissibili (fornendo un $z_{UB}$ nei problemi di minimo, e un $z_{LB}$ nei problemi di massimo). Non garantiscono l'ottimalità, ma danno risultati validi.
- **Procedure di Bounding:** Calcolano stime teoriche (rilassamenti del problema) per restringere il campo in cui si trova l'ottimo.
- **Algoritmi Esatti:** Algoritmi che "garantiscono" matematicamente la determinazione della soluzione ottima assoluta del problema $P$ (compatibilmente con le risorse di memoria e di tempo di calcolo che si hanno a disposizione).

### Il Problema dello Zaino (Knapsack Problem)
**Definizione e Modello Matematico**
- Il problema del knapsack consiste nel determinare quali tra $n$ oggetti (ognuno con un peso $w_i$ e un profitto $p_i$) devono essere inseriti in un contenitore di capacità massima $W$ per massimizzarne il profitto complessivo.    

- La condizione fondamentale è che la somma dei pesi degli oggetti scelti non superi la capacità $W$ dello zaino.

- Se si ipotizza di avere a disposizione una sola copia per ogni oggetto, si parla di **Knapsack 0-1**. In questo caso le variabili decisionali sono $x_i \in \{0, 1\}$.

- Il modello matematico cerca di massimizzare $z_{KP} = \sum_{i=1}^n p_i x_i$ soggetto al vincolo di capacità $\sum_{i=1}^n w_i x_i \le W$.

**Approccio Greedy, Rilassamento e Bounds** 
Per scegliere gli oggetti, un primo approccio è calcolare il rapporto profitto/peso per unità di capacità ($r_i = p_i / w_i$) e ordinarli in modo decrescente. Si cerca di inserire prima quelli con il rapporto più alto.

- **Lower Bound (Soluzione Ammissibile):** Se gli oggetti non sono divisibili e inseriamo solo quelli interi che ci stanno effettivamente nello zaino, otteniamo una _soluzione ammissibile_. Essendo un problema di massimo, questa soluzione ci fornisce una stima per difetto (lower bound).

- **Upper Bound (Rilassamento Lineare):** Se consideriamo il problema in cui ammettiamo una soluzione frazionaria (sostituendo il vincolo $x_i \in \{0,1\}$ con $0 \le x_i \le 1$), stiamo operando un _rilassamento lineare_. Se un oggetto non entra interamente, possiamo prenderne solo la frazione che ci sta per riempire esattamente la capacità. Il profitto ottenuto in questo modo è l'ottimo frazionario, ma rispetto al problema intero originale rappresenta solo una stima per eccesso (upper bound).

- Risolvendo il rilassamento lineare, si ottiene _sempre_ una soluzione con al più una sola variabile frazionaria, chiamata **"splitting item"**.

- Se la soluzione trovata con il rilassamento lineare non presenta variabili frazionarie (cioè è intera), allora quella è direttamente la soluzione ottima del problema originario.

**Risoluzione tramite Branch and Bound**
- Se la soluzione del rilassamento lineare è frazionaria, non si può accettare come ottima per il problema 0-1. Si utilizza quindi un approccio ad albero di ricerca chiamato **branch and bound**.

- Si generano due nuovi sottoproblemi a partire dalla variabile frazionaria $x_i$: in un ramo si _impone_ l'oggetto in soluzione ($x_i = 1$), nell'altro lo si _vieta_ ($x_i = 0$).

- Gli upper bound calcolati nei nodi dell'albero servono per "potare" la ricerca: si eliminano i nodi che sicuramente non conducono all'ottimo (ovvero i nodi il cui upper bound è minore del lower bound finora trovato).

**Risoluzione tramite Programmazione Dinamica**
- In alternativa al branch and bound, si utilizza l'algoritmo di **Programmazione Dinamica**, che prevede un numero di stadi $n$ (pari agli oggetti) e un numero di stati $w$ (da $0$ a $W$, la capacità).

- Ad ogni stadio si risolvono i sottoproblemi considerando solo i primi $j$ oggetti per ogni livello di capacità parziale.
   
- L'algoritmo si basa su questa ricorsione per calcolare l'ottimo $z_j(w)$:      
    - Se il peso dell'oggetto eccede la capacità corrente ($w < w_j$), il profitto è uguale a quello dello stadio precedente: $z_{j-1}(w)$.
    
    - Se invece c'è spazio ($w \ge w_j$), si sceglie il massimo tra non inserire l'oggetto ($z_{j-1}(w)$) o inserirlo sommando il suo profitto al valore ottimo ottenibile con la capacità residua ($z_{j-1}(w - w_j) + p_j$).
    
- Utilizzando una tabella, alla fine avremo l'ottimo e potremo ricostruire a ritroso le scelte. Questa tecnica equivale a un'enumerazione parziale che scarta le soluzioni subottime.

- La complessità computazionale di questo algoritmo è **$O(nW)$**. Poiché dipende non solo da $n$ ma anche dal valore numerico della capacità $W$, si definisce un algoritmo **pseudopolinomiale**.

## TSP - Problema del Commesso Viaggiatore
**Definizione e Rappresentazione su Grafo**
* Il **Travelling Salesman Problem (TSP)** modella la situazione di un autista che deve decidere l'ordine in cui fare le consegne per minimizzare una funzione obiettivo, come i chilometri da percorrere o il tempo di guida.

* La condizione fondamentale è che l'itinerario deve visitare **una e una sola volta** ciascun cliente.

* Il problema viene modellato utilizzando un grafo orientato $G = (V, A)$.

* I vertici $i \in V$ rappresentano i clienti che devono essere visitati, incluso il deposito da cui si parte e si rientra.

* Gli archi $(i, j) \in A$ congiungono i vari nodi e rappresentano il tragitto per passare dal vertice $i$ al vertice $j$.

* Ad ogni arco è associato un costo $c_{ij}$. Se il costo per andare da $i$ a $j$ differisce dal costo per tornare da $j$ a $i$ ($c_{ij} \neq c_{ji}$), si parla di **Asymmetric Travelling Salesman Problem (ATSP)**.

**Modello Matematico (Asymmetric TSP)**
* Il modello utilizza variabili decisionali binarie $x_{ij}$, le quali valgono $1$ se l'arco $(i, j)$ fa parte della soluzione ottima, e $0$ in caso contrario.

* La funzione obiettivo mira a minimizzare il costo complessivo dei tragitti scelti: $\min z_{TSP} = \sum_{(i,j) \in A} c_{ij} x_{ij}$.

* Per garantire la connettività di base, si impongono i **vincoli di assegnamento**: da ogni nodo deve uscire esattamente un arco ($\sum_{j \in V} x_{ij} = 1$) e in ogni nodo deve entrare esattamente un arco ($\sum_{j \in V} x_{ji} = 1$).

**Il Problema dei Sottocicli (Subtours)**
* Risolvere esclusivamente i vincoli di assegnamento può generare una "soluzione con subtour". In questo caso, ogni vertice viene visitato regolarmente (ha grado 2), ma l'itinerario si spezza in due o più cicli chiusi e disgiunti, senza formare un unico tour continuo.

* Per impedirlo, sono necessari i vincoli di **subtour elimination** (eliminazione dei sottocicli): $\sum_{i \in S} \sum_{j \in S'} x_{ij} \ge 1$. Questo vincolo impone che per ogni possibile sottoinsieme di vertici $S$, esista almeno un arco (un "taglio") che lo colleghi all'insieme dei nodi rimanenti $S'$.

* Poiché questi vincoli di eliminazione dei cicli sono in numero **esponenziale**, la strategia risolutiva prevede di ignorarli all'inizio, risolvendo solo il più semplice problema dell'assegnamento (la cui soluzione è sicuramente intera).

* Se nella soluzione così trovata emerge un sottociclo, si identificano i vertici isolati (l'insieme $S$), si aggiunge al modello il vincolo specifico violato e si riottimizza il problema.

**Rilassamento Lineare e Branch and Cut**
* Una volta aggiunto un vincolo per spezzare un sottociclo, il modello non è più un semplice problema di assegnamento; di conseguenza, il suo rilassamento lineare può iniziare a produrre soluzioni frazionarie.

* La soluzione di questo rilassamento continuo può essere molto distante dal valore della soluzione ottima intera.

* Per migliorare la ricerca, è necessario aggiungere ulteriori vincoli chiamati **disuguaglianze valide**: queste equazioni sono ridondanti per la formulazione intera originaria (non cambiano l'ottimo finale), ma sono utilissime per "tagliare via" molte soluzioni frazionarie dal rilassamento.

* Quando l'aggiunta di queste disuguaglianze valide viene combinata internamente alla struttura di un metodo Branch and Bound, l'algoritmo risultante prende il nome di **Branch & Cut**.

**Applicazioni, Dimensioni e Altri Algoritmi**
* I problemi di Programmazione Lineare Intera o Mista (PLI), a cui appartiene il TSP, vengono tipicamente risolti con algoritmi esatti come Branch & Bound, Branch & Cut, Branch & Price o Programmazione Dinamica.

* I sofisticati strumenti matematici odierni hanno permesso di certificare soluzioni per istanze TSP di dimensioni colossali. Nel 2001 è stata risolta un'istanza con i $15.112$ vertici della Germania, e nel 2004 l'istanza con i $24.978$ vertici della Svezia utilizzando il risolutore Concorde TSP.

* Per la colossale "World TSP" (composta da $1.904.711$ vertici nel mondo), sebbene non si conosca la soluzione perfetta finale, nel 2025 è stato trovato un itinerario il cui costo dista al massimo solo lo $0.0471\%$ dall'ottimo teorico (dimostrato sfruttando i lower bound di Concorde).

* In alternativa ai metodi tradizionali per la PLI, il TSP viene spesso impiegato come banco di prova per testare l'efficacia di approcci di intelligenza artificiale non lineari (come ad esempio le reti neurali basate su *Self-Organizing Maps*).

<div style="text-align: right;">
28/09/26
</div>
## Algoritmi Euristici e Metauristici
Nel contesto degli "Algoritmi euristici e metaeuristici", un generico problema di ottimizzazione richiede di trovare il valore minimo di una funzione, espresso matematicamente come $\min f(\mathbf{x})$ per $\mathbf{x} \in X$. I componenti che definiscono formalmente questo problema includono:
- **Funzione obiettivo:** La funzione $f: \mathbb{R}^n \rightarrow \mathbb{R}$ che deve essere minimizzata.
- **Variabili decisionali:** Il vettore $\mathbf{x} = [x_1, x_2, ..., x_n]^T \in \mathbb{R}^n$ che rappresenta le incognite su cui si può agire.
- **Soluzioni ammissibili:** L'insieme $X$ che raggruppa tutte le soluzioni conformi ai "vincoli del problema".
- **Costo:** Il valore $f(\mathbf{x})$ associato a ogni singola soluzione ammissibile $\mathbf{x} \in X$.
- **Soluzione ottima (o minimo globale):** Una specifica soluzione $\mathbf{x}^* \in X$ che presenta un costo inferiore rispetto a tutte le altre soluzioni nell'insieme. Questa condizione di ottimalità si verifica se $f(\mathbf{x}^*) < f(\mathbf{x})$ per $\forall \mathbf{x} \in X$.

Gli algoritmi euristici vengono usati per i problemi in cui non si possono usare i metodi esatti, tuttavia gli algoritmi euristici non garantiscono la soluzione ottima e non sono in grado di fornire nemmeno la distanza dalla soluzione ottima.

Gli algoritmi euristici possono essere classificati principalmente in tre tipologie:

1. **Algoritmi costruttivi e di ricerca locale:** Sfruttano le proprietà strutturali delle soluzioni ammissibili per costruire e perfezionare le soluzioni. Il loro obiettivo principale è quello di ottenere rapidamente una soluzione di buona qualità.
2. **Metaeuristiche:** Sono algoritmi avanzati che, in molti casi, operano su un'intera "popolazione" di soluzioni anziché su una singola. Il loro punto di forza è la capacità di gestire il compromesso tra:
    - **Diversificazione (esplorazione):** la ricerca effettuata in regioni dello spazio delle soluzioni nuove o inizialmente poco promettenti.
    - **Intensificazione (sfruttamento):** la concentrazione della ricerca nelle regioni dello spazio che si sono già rivelate più promettenti.
3. **Matheuristics:** Sono algoritmi ibridi ricavati da calcoli matematici che uniscono le euristiche con la matematica rigorosa. Fanno ampio uso degli strumenti tipici della programmazione matematica per guidare o migliorare il processo di ricerca.

### Ricerca Locale
- Nella ricerca locale, per ogni soluzione $\mathbf{x}$ appartenente all'insieme delle soluzioni ammissibili $X$, si definisce un insieme di vicinanza noto come _neighborhood_, indicato con $N(\mathbf{x})$.
- L'algoritmo parte dalla generazione di una soluzione iniziale.
- Il passo successivo consiste nel trovare una soluzione $\mathbf{x}'$ all'interno del _neighborhood_ che minimizzi la funzione obiettivo.
- Se si trova un vicino che migliora la soluzione attuale (ovvero se $f(\mathbf{x}') < f(\mathbf{x})$), la soluzione viene aggiornata e il processo si ripete. Questo aggiornamento della soluzione è formalmente definito come "spostamento" o "mossa".
- Le mosse che l'algoritmo può effettuare dipendono strettamente da come è stato definito il concetto di _neighborhood_.

L'algoritmo si ferma quando non ci sono più soluzioni migliorative nelle vicinanze, il che significa che può facilmente terminare e rimanere bloccato in un minimo locale.
Poiché non c'è modo di stabilire a priori quale sia il punto migliore da cui partire, l'algoritmo può essere migliorato applicando la ricerca locale a diverse soluzioni iniziali, esplorando così diverse aree dello spazio di ricerca.

**Applicazione pratica: il Travelling Salesman Problem (TSP)**
- Un possibile approccio di ricerca locale per il TSP prevede due passi principali: la costruzione di una soluzione iniziale e il suo successivo miglioramento.
- La costruzione della soluzione iniziale può avvenire tramite algoritmi dedicati, come ad esempio il "nearest neighbor".
- Il miglioramento si ottiene applicando degli scambi (che costituiscono il _neighborhood_) per ridurre il costo totale.

**Tipologie di scambi (Mosse) per il TSP**
- **3-opt (Lin and Kernighan, 1973):** QCome hai menzionato, questo metodo cerca di migliorare la soluzione eliminando gli incroci; l'algoritmo interviene sui collegamenti tra un insieme di nodi (indicati con $i, j, k, l, m, n$) alterandone la sequenza per ottenere un percorso differente.
- **Or-opt (Or, 1976):** Oltre al 3-opt, esiste un'altra mossa specifica chiamata Or-opt. Questa tecnica consiste nel prelevare una sotto-sequenza di nodi consecutivi (ad esempio i nodi $m, n, p$) per inserirla in una posizione completamente diversa all'interno del percorso.

## Tabu Search
- La Tabu Search, proposta originariamente da Glover nel 1986, è classificata come una metaeuristica a singola soluzione.
- A differenza della semplice ricerca locale che si ferma al primo minimo locale incontrato e necessita di continui _restart_ da punti casuali, la Tabu Search è progettata per continuare l'esplorazione: partendo da un punto iniziale, naviga autonomamente lo spazio di ricerca.
- La caratteristica fondamentale che permette questo comportamento è la capacità dell'algoritmo di accettare mosse peggiorative. Ad ogni iterazione, l'algoritmo seleziona la _migliore soluzione disponibile_ nell'intorno della soluzione corrente ($f(\mathbf{x}') = \min\{f(\mathbf{x}'') : \forall\mathbf{x}'' \in N(\mathbf{x})\}$), anche se questa dovesse risultare peggiore della soluzione attuale, permettendo così di uscire dalla "trappola" dei minimi locali.

Per evitare che l'algoritmo, accettando mosse peggiorative, finisca per ciclare infinitamente sulle stesse soluzioni (tornando sui propri passi), viene introdotta una struttura di memoria: la **Tabu List** ($TL$).
Questa lista impedisce temporaneamente all'algoritmo di visitare nuovamente soluzioni (o di effettuare mosse) già esplorate di recente. Di conseguenza, la ricerca del miglior vicino viene ristretta solo alle soluzioni che _non_ sono presenti nella Tabu List: $f(\mathbf{x}') = \min\{f(\mathbf{x}'') : \forall\mathbf{x}'' \in N(\mathbf{x}), \mathbf{x}'' \notin TL\}$.
La Tabu List ha una lunghezza massima prefissata. Dopo un certo numero di iterazioni (il "tempo massimo" di permanenza), le soluzioni più vecchie vengono rimosse dalla lista, potendo così essere riconsiderate per future mosse.

**L'Algoritmo e la Terminazione**
L'algoritmo si struttura nei seguenti passi operativi:
1. **Inizializzazione:** Generazione di una soluzione iniziale $\mathbf{x}$, salvataggio di questa come la migliore finora trovata ($\mathbf{x}^*$) e creazione di una Tabu List inizialmente vuota ($TL = \emptyset$).
2. **Selezione della mossa:** Ricerca della miglior soluzione $\mathbf{x}'$ nel neighborhood, escludendo rigorosamente quelle presenti nella Tabu List.
3. **Aggiornamento:** Esecuzione della mossa (la soluzione corrente $\mathbf{x}$ diventa $\mathbf{x}'$), inserimento della vecchia soluzione nella Tabu List ($TL = TL \cup \{\mathbf{x}\}$), e aggiornamento della miglior soluzione globale $\mathbf{x}^*$ se la nuova soluzione ha un valore oggettivo migliore.
4. **Terminazione:** Il processo riparte dal punto 2 finché non si verifica un criterio di arresto. Poiché, come hai notato, non è possibile stabilire a priori un criterio assoluto di ottimalità, l'algoritmo si ferma al soddisfacimento di una "condizione di terminazione" predefinita (ad esempio, un numero massimo di iterazioni o un limite di tempo).

### Simulated annealing
Il Simulated Annealing (ricottura simulata), introdotto da Kirkpatrick et al. (1983), "imita" il processo termico di ricottura dei metalli. In metallurgia, un materiale viene riscaldato ad alta temperatura (permettendo agli atomi di muoversi liberamente) e poi raffreddato lentamente e in modo controllato, per raggiungere uno stato di bassa energia libera (cristallizzazione ottimale).
Applicato all'ottimizzazione, questo si traduce in un algoritmo di "ricerca globale" che utilizza un parametro fondamentale: la "temperatura" ($T$).

**Il Ruolo della Temperatura: Diversificazione vs. Intensificazione**
- **Alte temperature (fase iniziale):** L'algoritmo parte con una temperatura alta ($T$). In questa fase, la ricerca è fortemente "diversificata". Ciò significa che l'algoritmo accetta "con alta probabilità" di muoversi verso soluzioni vicine anche se queste peggiorano il valore della funzione obiettivo. Questo permette un'ampia esplorazione dello spazio delle soluzioni.
- **Raffreddamento (basse temperature):** Man mano che l'algoritmo procede, la temperatura ($T$) viene progressivamente ridotta. Con l'abbassarsi della temperatura, si riduce proporzionalmente anche la "probabilità di accettare peggioramenti". La ricerca diventa così più "intensificata", concentrandosi sull'ottimizzazione locale all'interno della regione promettente in cui si trova.

**Lo Pseudocodice**
Lo pseudocodice dettaglia matematicamente il processo:
1. **Inizializzazione:** Genera una soluzione iniziale ammissibile $\mathbf{x}$ e la imposta come migliore soluzione trovata finora ($\mathbf{x}^* = \mathbf{x}$).
2. **Generazione nel vicinato:** Genera una soluzione $\mathbf{x}'$ nel vicinato $\mathcal{N}(\mathbf{x})$.
3. **Valutazione e Accettazione:**
    - **Miglioramento:** Se la nuova soluzione $\mathbf{x}'$ è migliore (ovvero, se $z(\mathbf{x}') < z(\mathbf{x})$), viene sempre accettata ($\mathbf{x} = \mathbf{x}'$). Se è anche migliore della soluzione globale $\mathbf{x}^*$, aggiorna $\mathbf{x}^*$.
    - **Peggioramento:** Se la nuova soluzione è peggiore, entra in gioco il cuore probabilistico del metodo. La soluzione peggiorativa $\mathbf{x}'$ viene accettata con una certa probabilità $p = e^{-(z(\mathbf{x}') - z(\mathbf{x})) / (kT)}$. Questa formula mostra che la probabilità di accettare un peggioramento ($z(\mathbf{x}') - z(\mathbf{x}) > 0$) dipende sia dall'entità del peggioramento stesso, sia dalla temperatura $T$. A temperature alte, $p$ sarà più vicina a 1, a temperature basse, $p$ si avvicinerà a 0.
4. **Aggiornamento Temperatura e Terminazione:** Se è soddisfatta una condizione di _annealing_, la temperatura $T$ viene abbassata (raffreddamento). Il ciclo (a partire dal punto 3) si ripete finché non viene soddisfatta una "condizione di terminazione". Al termine, restituisce la migliore soluzione $\mathbf{x}^*$ trovata.

### Gli algoritmi genetici
Gli algoritmi genetici, introdotti per la prima volta da Holland (1992), prendono ispirazione dal processo evolutivo naturale degli organismi.
Il metodo si basa su un insieme di soluzioni, chiamate "individui", che formano una "popolazione" aggiornata iterativamente.
Le soluzioni vengono codificate come "stringhe" (o cromosomi), il cui formato specifico, come le stringhe di bit, varia in base all'applicazione.

**Le Fasi dell'Algoritmo Genetico**
Il ciclo di vita dell'algoritmo si struttura in passi sequenziali:
- **Step 1 e 2:** Viene generata una popolazione iniziale $P$ e per ogni soluzione $\mathbf{x} \in P$ si valuta il costo $f(\mathbf{x})$ attraverso una "funzione di fitness".
- **Step 3 (Selezione dei genitori):** Si seleziona un sottoinsieme di soluzioni $G$ a partire dall'insieme principale $P$.
- **Step 4 (Crossover):** I genitori presenti in $G$ vengono combinati tra loro per generare un nuovo insieme di soluzioni $P_G$.
- **Step 5 (Mutazione):** Alcune delle nuove soluzioni in $P_G$ subiscono una modifica casuale.
- **Step 6 (Selezione della popolazione):** Utilizzando la funzione di fitness, si crea la popolazione per l'iterazione successiva, sostituendo in toto o in parte i vecchi individui di $P$ con i nuovi di $P_G$.
- **Step 7:** Il ciclo riparte dallo Step 3 e continua fino a quando non risulta soddisfatta una specifica "condizione di terminazione".

L'operatore di **crossover** ricombina i sottoinsiemi del _parent set_ per generare nuovi individui. A livello pratico sulle stringhe di bit, può avvenire come "Single Crossover" (con un singolo punto di taglio e scambio tra due stringhe) o "Double Crossover" (con un doppio punto di taglio).

L'operatore di **mutazione** serve a diversificare la popolazione. Il suo scopo è introdurre nuove caratteristiche che potrebbero favorire l'evoluzione e generare individui con una fitness superiore. Come mostrato graficamente, la mutazione può consistere nel cambiare il valore di un singolo elemento all'interno della stringa.

La "funzione di fitness" è fondamentale perché deve valutare non solo il "costo" della soluzione, ma anche il suo "grado" di non ammissibilità, meccanismo che viene gestito aggiungendo una penalità.

La fase finale di selezione degli individui che formeranno la nuova popolazione si affida proprio alla funzione di fitness, sebbene possa essere implementata attraverso numerosi schemi operativi differenti.

## Set Covering Problem
Il Set Covering Problem (SCP) è il problema di coprire le righe di una matrice $A = (a_{ij})$ di dimensioni $m \times n$ con coefficienti 0 ed 1, con un sottoinsieme di colonne di costo minimo.
* **Vincolo principale**: tutte le righe devono essere coperte almeno una volta.
* **Obiettivo**: Devo trovare un set di colonne che mi consente di coprire almeno uan volta tutte le righe.

Sia $x_j$ una variabile binaria 0-1 definita per ogni colonna come segue: $$x_j = \begin{cases} 1, & \text{se la colonna } j \text{ di costo } c_j \text{ è in soluzione} \\ 0, & \text{altrimenti} \end{cases}$$
Una formulazione matematica per il problema SCP è la seguente:

  $$(SCP) \quad z_{SCP} = \min \sum_{j=1}^{n} c_j x_j$$

  $$s.t. \sum_{j=1}^{n} a_{ij} x_j \ge 1, \quad i = 1, ..., m$$

  $$x_j \in \{0, 1\}, \quad j = 1, ... n$$

Si consideri il problema di Set Covering definito dai parametri che sono riassunti qui di seguito:

  * Il numero di colonne è pari a $n = 6$ e il numero di righe è $m = 3$.

  * Il vettore dei costi è $\mathbf{c} = [1 \quad 2 \quad 3 \quad 4 \quad 5 \quad 6]$.

  * La matrice dei vincoli è:

    $$A = \begin{bmatrix} 1 & 0 & 1 & 0 & 1 & 0 \\ 0 & 0 & 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 0 & 1 & 1 \end{bmatrix}$$

* In questo caso la soluzione ottima è $\mathbf{x}^* = [0 \quad 1 \quad 1 \quad 0 \quad 0 \quad 0]$, ossia include la colonna 2 e la colonna 3.

* Il costo della soluzione ottima è $z_{SCP}^* = 5$.  

### Rappresentazione di una soluzione
Una soluzione è rappresentata da una stringa binaria di $n$ bit, dove un valore a 1 del $j$-esimo bit indica che la colonna $j$ è in soluzione.
  $$ \begin{array}{cccccccc} 1 & 2 & 3 & 4 & 5 & \dots & n-1 & n \end{array} $$
  $$ \begin{array}{|c|c|c|c|c|c|c|c|} \hline 1 & 0 & 1 & 1 & 0 & \dots & 1 & 0 \\ \hline \end{array} $$

### Definizione della funzione di fitness

* La funzione di fitness $f_{P_k}$ di una soluzione $P_k$ è data da:

  $$f_{P_k} = \sum_{j=1}^{n} c_j s_{ij}$$

  dove $s_{ij}$ è il valore del $j$-esimo bit nella stringa corrispondete alla soluzione $P_k$.

### Selezione dei genitori
La tecnica utilizzata per selezionare i genitori è la **binary tournament selection**.

* Dalla popolazione vengono selezionati in modo casuale due gruppi di soluzioni di una cardinalità prestabilita. Poi, a turno, vengono estratte due soluzioni $P_1$ e $P_2$ con fitness migliore.

* Esistono molte altre tecniche per selezionare i genitori da utilizzare nel crossover.

* Cosa proporreste come criterio di selezione?

### Operazione di crossover
Viene utilizzato un operatore di crossover, chiamato **fusion crossover**, che tiene conto sia della struttura sia della fitness delle soluzioni del parent set.

* L'operatore di crossover produce, a differenza degli operatori classici, una sola soluzione.

* Siano $f_{P_1}$ e $f_{P_2}$ i valori di fitness delle soluzioni $P_1$ e $P_2$ e sia $C$ la nuova soluzione costruita come segue, per ogni $i = 1, ..., n$:

  1) Se $P_1[i] = P_2[i]$, allora $C[i] = P_1[i] = P_2[i]$;

  2) Se $P_1[i] \neq P_2[i]$, allora

     a) $C[i] = P_1[i]$ con probabilità $p = f_{P_2} / (f_{P_1} + f_{P_2})$,

     b) $C[i] = P_2[i]$ con probabilità $1 - p$.

### Esempio di operazione di crossover
  

$$ \begin{array}{rccccccccl} & 1 & 2 & 3 & 4 & 5 & \dots & n-1 & n & \\ P_1 = & \begin{array}{|c|c|c|c|c|c|c|c|} \hline 1 & 0 & 0 & 1 & 0 & \dots & 0 & 0 \\ \hline \end{array} & & f_{P_1} \\ P_2 = & \begin{array}{|c|c|c|c|c|c|c|c|} \hline 1 & 1 & 1 & 1 & 0 & \dots & 0 & 0 \\ \hline \end{array} & & f_{P_2} \\ & & & & & \Downarrow & & & & \\ C = & \begin{array}{|c|c|c|c|c|c|c|c|} \hline 1 & 1 & 0 & 1 & 0 & \dots & 0 & 0 \\ \hline \end{array} & & F_C \end{array} $$

  

* Nel caso in cui $f_{P_1} = 4$ e $f_{P_2} = 6$, se $P_1[i] \neq P_2[i]$, la probabilità che $C[i] = P_1[i]$ è $p = \frac{6}{4+6} = 0.6$, mentre la probabilità che $C[i] = P_2[i]$ è $1 - p = 1 - 0.6 = 0.4$.

### Algoritmo Operatore di Ammissibilità 

* **Step 1.** Inizializza $w_i = |S \cap \alpha_i|, \forall i \in I$.

* **Step 2.** Inizializza $U = \{i : w_i = 0, \forall i \in I\}$.

* **Step 3.** Per ogni riga $i \in U$:

  a) Trova la prima colonna $j$ in $\alpha_i$ che minimizza $c_j / |U \cap \beta_j|$;

  b) Aggiungi $j$ a $S$ e poni $w_i = w_i + 1, \forall i \in \beta_j$, e $U = U \setminus \beta_j$.

* **Step 4.** Per ogni colonna $j \in S$, considerati per costo $c_j$ decrescente, se $w_i \ge 2, \forall i \in \beta_j$, poni $S = S \setminus \{j\}$ e $w_i = w_i - 1, \forall i \in \beta_j$.

### Aggiornamento della popolazione 
Dopo che una nuova soluzione $C$ è stata prodotta, la popolazione viene aggiornata rimuovendo dalla popolazione una soluzione scelta casualmente fra le soluzioni con valore di fitness inferiore al valore medio (below-average fitness) ed inserendo $C$ nella popolazione.

## Vehicle Routing Problem
Dato un grafo $G = (V,A)$, dove il vertice 0 rappresenta il deposito e i vertici $V' = \{1, \dots, n\}$ rappresentano i clienti.
* Ad ogni cliente $i \in V'$ è associata una domanda positiva $q_i$ (es. peso del pacco, tempo del servizio, ecc.).
* Ad ogni arco $(i,j) \in A$ è associato un costo non negativo $c_{ij}$.
* Presso il deposito sono disponibili $M$ veicoli identici di capacità $Q$.
* Il costo di un viaggio (o route) è dato dalla somma dei costi degli archi che compongono il viaggio.
* Ogni veicolo deve effettuare un viaggio (route) partendo (o tornando) con un carico minore o al più uguale alla capacità $Q$.
* Ogni viaggio deve iniziare e terminare al deposito.
* Ogni cliente deve essere visitato una ed una sola volta (e da un solo veicolo).

**Obiettivo**
* Disegnare $M$ route (viaggi), una per ogni veicolo, in modo da visitare tutti i clienti una e una sola volta e minimizzare la somma dei costi delle route.
* Il costo di ciascuna route è data dalla somma dei costi $c_{ij}$ degli archi percorsi.
* Possiamo denotare una route come:
  * Insieme dei vertici visitati $R = \{0, i_1, i_2, \dots, i_{|R|-1}, 0\}$;
  * Insieme degli archi visitati $R = \{(0, i_1), (i_1, i_2), \dots, (i_{|R|-1}, 0)\}$.
* Il costo della route $R$ è dato da $c(R) = \sum_{(i,j) \in R} c_{ij}$.

**Esempio**
>Grafo con deposito centrale e nodi cliente con relative domande
![[Pasted image 20261005203123.png]]

**Esempio**
>Mappa dell'Emilia Romagna con 3 route: Vehicle 1 (Ravenna/Cervia), Vehicle 2 (Faenza/Forlì), Vehicle 3 (Rimini), con partenza dal Deposito a Cesena
![[Pasted image 20261005203311.png]]

>Le slide dopo non le ha spiegate!