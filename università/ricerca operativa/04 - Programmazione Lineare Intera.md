[4 - Programmazione Lineare Intera - Ver.3.2](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/ricerca operativa/slide/4 - Programmazione Lineare Intera - Ver.3.2.pdf>)

# Ricerca Operativa – Programmazione Lineare Intera

>> Segue [[03 - Introduzione Programmazione Lineare]]: qui le variabili devono essere intere. Tutti i metodi della lezione usano il simplesso (primale e duale), la dualità e il formato tableau visti nella lezione 3 e negli esercizi di [[03.1 - Programmazione Lineare - Esercizi]].
>> **Aggiornata alla Ver.3.2 (6/11).** Rispetto alla Ver.3.0 cambiano solo: la figura della slide 86 ("ortogonalità" → "complementarietà"), piccole correzioni di testo nelle slide 92 e 99 (corretto il refuso $c_{ij} \ne c_{ji}$), la slide 102 (nuovo punto sui *lazy constraints*) e la slide 104 (aggiunto il tour di Nagata del 2025).
>> Esercizi di questa lezione: [[04.1 - Programmazione Lineare Intera - Esercizi]] (esempio svolto a lezione) e [[04.2 - Programmazione Lineare Intera - Esercizi d'esame svolti]] (esercizi d'esame con soluzione).

## Indice

1. **Metodi Branch and Bound** (slide 4–13)
	- [[#Slide 4 – Introduzione ai Metodi Branch and Bound|Idea: rilassamento lineare e branching]]
	- [[#Slide 5 – Selezione variabile frazionaria|Scelta della variabile frazionaria]]
	- [[#Slide 6 – Regola di branching|Regola di branching]]
	- [[#Slide 7 -> 9 – Lower e Upper Bound|Lower bound, upper bound e chiusura dei nodi]]
	- [[#Slide 10 – Metodo di visita dell'albero|Visita dell'albero: depth-first, breadth-first, best-first]]
	- [[#Slide 11 – Algoritmo Branch and Bound|L'algoritmo]]
	- [[#Slide 12 -> 13 – Osservazioni e Varianti|Osservazioni e varianti]]
2. **Disuguaglianze valide e tagli di Gomory** (slide 14–27)
	- [[#Slide 14 – Introduzione alle Valid Inequalities|Disuguaglianze valide]]
	- [[#Slide 15 -> 18 – Tagli di Gomory|Costruzione del taglio di Gomory]]
	- [[#Slide 19 -> 26 – Esempio di Applicazione dei Tagli di Gomory|Esempio completo con i tableau]]
	- [[#Slide 27 – Osservazioni sui Tagli di Gomory|Osservazioni]]
3. **Rilassamento lagrangiano** (slide 28–50)
	- [[#Slide 28 -> 33 – Introduzione ai Metodi di Decomposizione|Metodi di decomposizione: vincoli "complicanti"]]
	- [[#Slide 34 -> 37 – Rilassamento Lagrangiano|Il problema lagrangiano e il duale lagrangiano]]
	- [[#Slide 38 -> 47 – Rilassamento Lagrangiano: esempi|Esempi: set covering ed esempio numerico]]
	- [[#Slide 48 -> 50 – Dualità Lagrangiana Forte|Dualità lagrangiana forte]]
4. **Bound lagrangiano, subgradiente ed euristica** (slide 51–78)
	- [[#Slide 51 -> 63 – Rilassamento Lineare vs Rilassamento Lagrangiano|Rilassamento lineare contro lagrangiano: $z_{LP} \le z_{LR} \le z_P$]]
	- [[#Slide 64 -> 73 – Metodo del Subgradiente|Metodo del subgradiente]]
	- [[#Slide 74 – Euristica Lagrangiana|Euristica lagrangiana]]
	- [[#Slide 75 -> 78 – Rilassamento Lagrangiano: esempio|Altri esempi di rilassamento]]
5. **Generazione di colonne** (slide 79–97)
	- [[#Slide 79 -> 82 – Introduzione al Column Generation|Idea: problema master ristretto]]
	- [[#Slide 83 -> 86 – Algoritmo Column Generation|L'algoritmo e il pricing]]
	- [[#Slide 87 – Cutting Stock Problem, Gilmore e Gomory (1960)|Cutting stock problem]]
		- [[#Slide 88 -> 89 – Cutting Stock Problem: esempio|Esempio]] e [[#Slide 90 -> 91 – Cutting Stock Problem: modello|modello]]
	- [[#Slide 92 -> 95 – Cutting Stock Problem: Column Generation Algorithm|Column generation per il cutting stock]]
	- [[#Slide 96 -> 97 – Considerazioni|Considerazioni]]
6. **Generazione dinamica dei vincoli** (slide 98–104)
	- [[#Slide 98 – Generazione dei Vincoli|Generazione dei vincoli]]
	- [[#Slide 99 -> 104 – Travelling Salesman Problem|TSP: vincoli di eliminazione dei sottocicli]]

---
## Slide 2 -> 3 – Outline

1. Metodi Branch and Bound
	- Introduzione ai Metodi Branch and Bound
	- Selezione variabile frazionaria
	- Regola di branching
	- Lower e Upper Bound
	- Metodo di visita dell'albero
	- Algoritmo Branch and Bound
	- Osservazioni e Varianti
2. Disuguaglianze Valide
	- Introduzione alle Valid Inequalities
	- Tagli di Gomory
	- Esempio di Applicazione dei Tagli di Gomory
	- Osservazioni sui Tagli di Gomory
3. Metodi di Decomposizione
	- Introduzione ai Metodi di Decomposizione
	- Rilassamento Lagrangiano
	- Esempi di Rilassamento Lagrangiano
	- Dualità Lagrangiana Forte
	- Rilassamento Lineare vs Rilassamento Lagrangiano
	- Metodo del Subgradiente
	- Euristica Lagrangiana
	- Altri Esempi di Rilassamento Lagrangiano
4. Metodi di Generazione di Colonne
	- Introduzione
	- Algoritmo Column Generation
	- Cutting Stock Problem
	- Considerazioni
5. Generazione Dinamica dei Vincoli
	- Travelling Salesman Problem

---
## Slide 4 – Introduzione ai Metodi Branch and Bound

- Consideriamo il problema IP di ~~programmazione lineare intera~~:

$$
\begin{array}{rll}
z_{IP} = & \min\ \mathbf{c}\mathbf{x} & (1)\\
\text{s.t.} & \mathbf{A}\mathbf{x} \ge \mathbf{b} & (2)\\
 & \mathbf{x} \ge \mathbf{0} \text{ and integer} & (3)
\end{array}
$$

- Il rilassamento lineare LP del problema IP è dato da:

$$
\begin{array}{rll}
z_{LP} = & \min\ \mathbf{c}\mathbf{x} & (4)\\
\text{s.t.} & \mathbf{A}\mathbf{x} \ge \mathbf{b} & (5)\\
 & \mathbf{x} \ge \mathbf{0} & (6)
\end{array}
$$

- Se la soluzione ottima $\mathbf{x}^*$ del problema LP è intera, allora è la soluzione ottima anche per il problema intero IP.
- Cosa accade se invece la soluzione ottima $\mathbf{x}^*$ del problema LP è frazionaria?

>> LP ha la stessa funzione obiettivo e una regione ammissibile più grande (contiene tutte le soluzioni intere di IP), quindi per un problema di minimo $z_{LP} \le z_{IP}$: il rilassamento lineare fornisce sempre un **lower bound**. Se la sua soluzione ottima è intera è ammissibile per IP e raggiunge il bound, quindi è ottima.

---
## Slide 5 – Selezione variabile frazionaria

- Una possibilità è l'applicazione del Metodo Branch and Bound che abbiamo già visto per il caso particolare del Knapsack Problem.
- Per il Knapsack Problem c'era al più una sola variabile frazionaria, mentre in generale potremo avere diverse variabili frazionarie.
- Quindi, in generale, è necessario stabilire un **criterio per selezionare una variabile frazionaria** (che deve essere intera nella soluzione ottima di IP), per fare un **branch**.
- Possibili esempi di criteri per selezionare la variabile frazionaria $x_j$:
	- ~~la più frazionaria~~, i.e., quella con il valore $x_j - \lfloor x_j \rfloor$ più vicino a 0,5;
	- ~~la più intera~~, i.e., quella con il valore $x_j - \lfloor x_j \rfloor$ più vicino a 0 o 1;
	- utilizzando un ordine prestabilito;
	- ~~etc~~... (a seconda del problema può convenire una scelta come un'altra)
>il branch and bound funziona meglio tanto più alta è la stima (?!)

>> Esempio: con $x_1 = 2.45$, $x_2 = 0.9$, $x_3 = 3.1$ le parti frazionarie sono $0.45$, $0.9$, $0.1$: il criterio "più frazionaria" sceglie $x_1$; il criterio "più intera" sceglie $x_3$ (la più vicina a 0) o $x_2$ (la più vicina a 1), a seconda di come si risolve il pareggio.

---
## Slide 6 – Regola di branching

- Data la soluzione ottima del problema LP e la variabile frazionaria $x_j$ selezionata, una possibile **regola di branching** può prevedere la creazione di due sottoproblemi (**branching binario** -> il + standard):

	$\color{red}{P(x_j \le \lfloor x_j \rfloor)}$: ottenuto da LP aggiungendo il vincolo $x_j \le \lfloor x_j \rfloor$;
	$\color{red}{P(x_j \ge \lceil x_j \rceil)}$: ottenuto da LP aggiungendo il vincolo $x_j \ge \lceil x_j \rceil$.
	
	La soluzione frazionaria $x_j$ è esclusa in entrambe i sottoproblemi.
	
- Se consideriamo il problema LP originale come **nodo radice** di un albero di ricerca, i due sottoproblemi sono i suoi **nodi figli**.
- Il processo di branching descritto per il nodo radice è ripetuto per i nodi figli, per cui la regola di branching è applicata ad ogni nodo $k$ dell'albero di ricerca (dove $k = 0$ è il nodo radice, $k = 1, 2$ i suoi nodi figli, etc.).
- Il branching binario descritto non è l'unica opzione (si potrebbero fare cose molto più complicate ma ci limitiamo a questo).
>man mano che faccio il branch, i nodi figli ho hanno lo stesso bound (stima per difetto) del padre o ce la hanno + alta,  man mano che vado ad esplorare l'albero dovrei trovare dei lower bound sempre più alti che convergono alla soluzione ottima.

>quando trovo la heap vuota, la soluzione ottima del problema corrisponde alla migliore soluzione ammissibile che ho trovato fino a quel momento.

>> Esempio: se $x_j = 5.3$ i figli sono $P(x_j \le 5)$ e $P(x_j \ge 6)$. Nessuna soluzione intera va persa (ogni intero soddisfa $x_j \le 5$ oppure $x_j \ge 6$), mentre si elimina la striscia $5 < x_j < 6$ che contiene la soluzione frazionaria corrente.

---
## Slide 7 -> 9 – Lower e Upper Bound

- Per ogni nodo $k$ dobbiamo risolvere il sottoproblema $P_k$ ottenendo la soluzione $\mathbf{x}_k$ di costo $z_k$.
	- Se $P_k$ **non ha soluzione ammissibile** poniamo $z_k = +\infty$ e non generiamo nodi figli (**perché?** perché se non è ammissibile adesso non sarà ammissibile neanche con gli ulteriori vincoli aggiuntivi).
	- Se la soluzione $\mathbf{x}_k$ di $P_k$ è **intera**, allora è sicuramente un **upper bound** alla soluzione ottima del problema intero originario IP e non è necessario generare ulteriori nodi figli del nodo $k$ (**perché?** i figli possono solo peggiorare la soluzione).
	- Se la soluzione $\mathbf{x}_k$ di $P_k$ è **frazionaria**, allora il costo $z_k$ rappresenta un **lower bound** ($LB_k = z_k$) al valore della migliore soluzione intera che si può ottenere nel sottoalbero di cui il nodo $k$ è il nodo radice.
- La miglior soluzione intera ammissibile finora trovata ha costo $z_{UB}$ (i.e., è il miglior upper bound finora trovato).
- L'upper bound $z_{UB}$ può essere inizializzato a $+\infty$ (non ho ancora trovato una soluzione ammissibile per il problema) oppure con il valore della soluzione generata con un **algoritmo euristico**.

>> Risposte ai "perché?": i figli di $k$ hanno gli stessi vincoli di $P_k$ più uno, quindi le loro regioni ammissibili sono contenute in quella di $P_k$.
>> - Se $P_k$ è inammissibile, lo sono anche tutti i nodi del suo sottoalbero.
>> - Se $\mathbf{x}_k$ è intera, è la migliore soluzione possibile nel sottoalbero (i figli possono solo peggiorare, $z \ge z_k$): non serve esplorarlo.

- Oltre a ottenere un upper bound quando la soluzione $\mathbf{x}_k$ di $P_k$ è intera, lo si può ottenere utilizzando un **algoritmo euristico per ripristinare l'ammissibilità intera** della soluzione $\mathbf{x}_k$ quando è frazionaria.
- ~~L'upper bound $z_{UB}$ è molto importante perché permette di **eliminare in anticipo** quei nodi che non consentiranno di ottenere la soluzione ottima~~, evitando di esplorare il corrispondente sotto-albero.
- Se per un nodo $k$ la soluzione di $P_k$ ha costo $z_k \ge z_{UB}$ allora il nodo non deve essere                "**espanso**" (i.e., non devono essere generati i nodi figli) perché non consentiranno di ottenere una soluzione di costo inferiore a $z_{UB}$ (conosciamo già una soluzione di costo $z_{UB}$).
- Migliore è il valore $z_{UB}$ e tanto più velocemente lo otteniamo e più veloce sarà la convergenza e la quantità di memoria risparmiata.

![[RO04-s009-1.png|293]]
>i vincoli si concateno, ogni livello aggiunge un vincolo.

>> Lettura dell'albero (le linee sotto un nodo indicano che il nodo è chiuso, cioè non viene espanso). Si parte con $z_{UB} = 110$ (ad esempio da un'euristica) e alla radice $z_0 = 90$, quindi l'ottimo è compreso fra 90 e 110.
>> - $P_1$ ($x_j \le 5$): $z_1 = 120 \ge z_{UB}$ ⇒ chiuso.
>> - $P_2$ ($x_j \ge 6$): $z_2 = 95 < z_{UB}$ ⇒ si fa branching su $x_k$.
>> - $P_3$ ($x_k \le 1$): $z_3 = 115 \ge 110$ ⇒ chiuso; $P_4$ ($x_k \ge 2$): $z_4 = 110 \ge 110$ ⇒ chiuso (con $z_k = z_{UB}$ non si può migliorare).
>>
>> Non resta alcun nodo aperto: la soluzione di costo 110 già nota è ottima.

---
## Slide 10 – Metodo di visita dell'albero

- Quando a un nodo $k$ viene svolto un branching binario vengono generati due nodi figli che vengono inseriti in un **heap** (struttura dati).
- L'ordine con cui i nodi sono estratti dalla heap per essere "***risolti***" determina il metodo di visita dell'albero di ricerca.
- I metodi di visita dell'albero di ricerca più noti sono i seguenti:
	- **Depth-First Search:** ricerca in profondità, esplorando i nodi figli prima di fare backtracking;
	- **Breadth-First Search:** esplora l'albero di ricerca un livello alla volta, i.e., estrae dalla heap prima i nodi dei livelli di indice più piccolo;
	- ~~**Best-First Search:**~~ ad ogni iterazione estrae dalla heap il nodo con il lower bound più basso.
- Non esite un metodo migliore di altri. La scelta dipende dal modello che si vuole risolvere e dalle performance a cui si è interessati.
>bisogna anche considerare le operazioni di pulizia: bisogna essere efficienti anche da quel punto di vista.

>> Compromessi tipici:
>> - Depth-First: poca memoria (i nodi aperti crescono solo con la profondità dell'albero) e trova presto soluzioni intere, quindi un $z_{UB}$; rischia però di perdere tempo in sottoalberi poco promettenti.
>> - Breadth-First: memoria che cresce in modo esponenziale col livello; trova soluzioni intere tardi (di solito stanno in profondità).
>> - Best-First: tende a esplorare meno nodi e fa salire più in fretta il lower bound globale, ma la lista dei nodi aperti può diventare molto grande.
>>
>> "Heap" va inteso come contenitore generico dei nodi aperti: per la Best-First è una coda di priorità (un vero heap), per la Depth-First si comporta come una pila, per la Breadth-First come una coda.

---
## Slide 11 – Algoritmo Branch and Bound

**Algoritmo Branch and Bound**

**Step 1.** Poni $z_{UB} = +\infty$ (o risultato di una euristica) e inserisci nella heap vuota il problema $P_0$:
	$z_0 = \min\{\mathbf{c}\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \ge \mathbf{0}\}$.
**Step 2.** Estrai il problema $P_k$ dalla heap (se è vuota, STOP) e ottieni la soluzione $\mathbf{x}_k$ di costo $z_k$ ($z_k = +\infty$ se non ha soluzione).
**Step 3.** Se $z_k \ge z_{UB}$ torna allo Step 2 (il nodo $k$ non viene espanso).
	**Step 4.** Se la soluzione $\mathbf{x}_k$ è intera, allora aggiorna l'upper bound:
	$z_{UB} = z_k$ e $\mathbf{x} = \mathbf{x}_k$ (avendo passato lo Step 3, $z_k < z_{UB}$).
	Elimina dalla heap tutti i nodi $P_k$ per cui $z_k \ge z_{UB}$.
	Torna allo Step 2.
**Step 5.** Seleziona una variabile $x_j$ frazionaria nella soluzione $\mathbf{x}_k$ e inserisci nella heap due nodi figli $P(x_j \le \lfloor x_j \rfloor)$ e $P(x_j \ge \lceil x_j \rceil)$.
	Torna allo Step 2.

> #es: difficile che ci chieda un algoritmo intero, al massimo 2/3 interazioni oppure dal punto di vista grafico

>> I nodi nella heap non sono ancora stati risolti: il valore usato allo Step 4 per eliminarli è il lower bound ereditato dal padre (il $z$ del nodo da cui sono stati generati), che è valido perché un figlio non può costare meno del padre.
>> Allo STOP (heap vuota), $\mathbf{x}$ è la soluzione intera ottima di costo $z_{UB}$; se è ancora $z_{UB} = +\infty$, il problema IP non ha soluzioni intere ammissibili.

---
## Slide 12 -> 13 – Osservazioni e Varianti

- I problemi $P_k$ possono essere risolti usando il **metodo del simplesso**.
- Per risolvere il problema $P_k$ in modo efficiente sarebbe utile partire dalla base del nodo padre. Per cui, quando si salva in heap il nodo dovrebbe essere necessario salvare anche questa informazione.
- Per includere in $P_k$ tutti i vincoli imposti dalla regola di branching è necessario individuare (o conservare) i vincoli definiti dal "cammino" dal nodo $k$ fino alla radice dell'albero di ricerca.
- Rimarchiamo che la regola di branching proposta è solo una delle tante opzioni possibili. Per ogni problema specifico potrebbe essere proposta una regola diversa.
- Inoltre, i problemi $P_k$ potrebbero essere risolti usando altri metodi (e.g., Rilassamento Lagrangiano) e/o rilassando ulterioriormente i vincoli presenti nel modello (oltre ai vincoli di interezza).

>> Partire dalla base ottima del padre conviene perché il vincolo di branching aggiunto la rende primale non ammissibile ma la lascia duale ammissibile (i costi ridotti non cambiano): bastano poche iterazioni del **simplesso duale**, esattamente come per i tagli di Gomory più avanti.

- L'algoritmo Branch and Bound proposto potrebbe essere migliorato includendo altre opzioni, come ad esempio:
	- Algoritmi euristici di "**repair**" per generare un upper bound $z_{UB}$ di buona qualità dalle soluzioni frazionarie di $P_k$;
	- Aggiunta di ulteriori vincoli ("**cut**") per eliminare delle soluzioni frazionarie. In questo caso parleremo di "**Branch and Cut**". -> cercano di accelerare la chiusura del gap fra i bound
- Gli algoritmi Branch and Cut sono uno strumento molto potente per risolvere problemi difficili.
- Lo studio di quali vincoli/cut aggiungere e dei metodi per identificarli fa parte della "**Poliedrale**", un ambito di ricerca della programmazione matematica.
- I vincoli che eliminano le soluzioni frazionarie, ma non compromettono l'ammissibilità delle soluzioni intere, sono anche detti "**valid inequalities**" oppure "**disuguaglianze valide**".

---
## Slide 14 – Introduzione alle Valid Inequalities

- Consideriamo un problema P di programmazione lineare intera:
	$z_P = \min\{\mathbf{c}\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \ge \mathbf{0} \text{ e intera}\}$.
- Se il problma P ha una soluzione ammissibile e lo risolviamo con il Simplesso (Primale o Duale), potremo ottenere il seguente tableau ottimo (per semplicità abbiamo riordinato le colonne):

$$
\begin{array}{c|c|ccccc|ccccc|c}
 & z & & & \mathbf{x_B} & & & & & \mathbf{x_N} & & & \text{RHS}\\ \hline
z & 1 & 0 & \dots & 0 & \dots & 0 & \mathbf{w}\mathbf{a}_{m+1} - c_{m+1} & \dots & \mathbf{w}\mathbf{a}_{m+j} - c_{m+j} & \dots & \mathbf{w}\mathbf{a}_n - c_n & \mathbf{c_B}\mathbf{B}^{-1}\mathbf{b}\\ \hline
 & 0 & 1 & \dots & 0 & \dots & 0 & y_1^{m+1} & \dots & y_1^j & \dots & y_1^n & \bar b_1\\
 & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots\\
\mathbf{x_B} & 0 & 0 & \dots & 1 & \dots & 0 & y_i^{m+1} & \dots & y_i^j & \dots & y_i^n & \bar b_i\\
 & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots\\
 & 0 & 0 & \dots & 0 & \dots & 1 & y_m^{m+1} & \dots & y_m^j & \dots & y_m^n & \bar b_m\\ \hline
\end{array}
$$

- Ipotizziamo che la variabile in corrispondenza della riga $i$ (in questo caso $x_i$) abbia un valore $\bar b_i$ frazionario.
- Quale vincolo possiamo aggiungere per "**escludere**" questa soluzione frazionaria dall'insieme delle soluzioni ammissibili senza escludere anche le soluzioni intere?

> #es : tableau ottimo, ce una variabile frazionaria e ci può chiedere di generare gomory cut per quella riga e poi di ri-ottimizzare (all'esame qualcosa di più esotico)

>idea di aggiungere disuguaglianze per eliminare progressivamente tutte le soluzioni frazionarie che si presentano fino a quando convergeremo a un tableau con solo soluzioni intere, i tagli di  gomory ha il potenziale teorico per poterlo fare

---
## Slide 15 -> 18 – Tagli di Gomory

- Costruiamo delle disuguaglianze valide note come **Tagli di Gomory**.
- Se consideriamo il tableau ottimo, l'equazione corrispondente alla riga $i$ può essere scritta come segue:

$$
x_i + \sum_{j=m+1}^{n} y_i^j x_j = \bar b_i \qquad (7)
$$
>scrivere il vincolo in questo modo o come lo avevamo scritto all'inizio è la stessa cosa. 
>xi è la variabile in base + tutte le variabili  xj che non sono in base (che nel tableau ottimo valgono 0) per yi corrispondente, quindi xi è uguale a bi barrato.  

- Possiamo decomporre le quantità $y_i^j$ e $\bar b_i$ nelle ~~componenti intere e frazionarie~~:

$$
y_i^j = I_i^j + F_i^j \quad \text{e} \quad \bar b_i = I_i + F_i
$$
>NB: stare attenti alla decomposizione nel caso di numeri negativi.

	dove

$$
\begin{array}{lcll}
I_i^j = \lfloor y_i^j \rfloor & \text{e} & F_i^j = y_i^j - I_i^j & (0 \le F_i^j < 1)\\
I_i = \lfloor \bar b_i \rfloor & \text{e} & F_i = \bar b_i - I_i & (0 \le F_i < 1)
\end{array}
$$
>la parta frazionaria deve essere compresa fra 0 e 1!

>> Attenzione ai numeri negativi: la parte intera è la parte intera inferiore, quindi la parte frazionaria è sempre in $[0, 1]$. Esempio: $y = -\frac{1}{3}$ ⇒ $I = \lfloor -\frac{1}{3} \rfloor = -1$ e $F = -\frac{1}{3} - (-1) = \frac{2}{3}$ (non $\frac{1}{3}$). Serve nell'esempio della slide 25.

- L'equazione corrispondente alla riga $i$ può essere riscritta come:

$$
x_i + \sum_{j=m+1}^{n} y_i^j x_j = \bar b_i
$$
>decompongo y e b nella parte intera e frazionaria
$$
x_i + \sum_{j=m+1}^{n} (I_i^j + F_i^j) x_j = I_i + F_i
$$

$$
\underbrace{x_i + \sum_{j=m+1}^{n} I_i^j x_j - I_i}_{\text{Integer for every integer } \mathbf{x}} = \underbrace{F_i - \sum_{j=m+1}^{n} F_i^j x_j}_{<1, \text{ for every } \mathbf{x} \ge \mathbf{0}}
$$

- Siccome il termine a sinistra è sempre intero per ogni soluzione $\mathbf{x}$ intera, allora lo deve essere anche il termine a destra, che è minore strettamente di 1.
>nel caso migliore la quantità di destra è uguale a 0

>> Il termine a destra è $< 1$ perché $F_i < 1$ e $F_i^j x_j \ge 0$ (con $F_i^j \ge 0$ e $\mathbf{x} \ge \mathbf{0}$). A sinistra si sommano solo interi ($x_i$, $x_j$ e $I_i^j$, $I_i$) quando $\mathbf{x}$ è intera.

- Siccome

$$
F_i - \sum_{j=m+1}^{n} F_i^j x_j < 1
$$

	ma $F_i - \sum_{j=m+1}^{n} F_i^j x_j$ deve essere anche intero, allora:

$$
F_i - \sum_{j=m+1}^{n} F_i^j x_j \le 0
$$

	che corrisponde al seguente vincolo, detto **Taglio di Gomory**:

$$
-\sum_{j=m+1}^{n} F_i^j x_j \le -F_i \qquad (8)
$$
>questa disuguaglianza è valida per costruzione perché non elimina nessuna soluzione intera, viene violata solo dalla soluzione frazionaria corrente.

>**idea di gomory**: in maniera algebrica ha costruito un vincolo che gli taglia via la soluzione frazionaria corrente e allo stesso tempo non gli elimina nessuna soluzione intera ammissibile, quindi posso aggiungere questo vincolo e con il simplesso duale posso riottimizzare subuto il tableau.

che non è soddifatto dalla soluzione corrente, perché $x_j = 0$ per ogni $j = m+1, \dots, n$ dato che sono non base, mentre $F_i > 0$ visto che abbiamo ipotizzato che $\bar b_i$ è frazionario.

>> In sintesi: il taglio è **valido** (lo soddisfano tutte le soluzioni intere ammissibili) e **separa** la soluzione corrente (sostituendo $x_j = 0$ si ottiene $0 \le -F_i < 0$, falso). Equivalente e più facile da ricordare: $\sum_{j \in N} F_i^j x_j \ge F_i$.

- Per semplicità avevamo ipotizzato che la base fosse costituita dalle prime $m$ colonne. Nel caso generale, il Taglio di Gomory relativo alla variabile in base frazionaria in corrispondenza della riga $i$ può essere riscritto come:

$$
-\sum_{j \in N} F_i^j x_j \le -F_i \qquad (9)
$$

	dove $N$ è l'insieme delle colonne non in base.
- Se risolviamo il problema con il Simplesso, quando aggiungiamo il nuovo vincolo al problema non è necessario ripetere l'algoritmo dall'inizio, ma possiamo ripartire dalla base corrente.
- Se le variabili attualmente incluse sono $n$, il taglio di Gomory corrisponde a una nuova riga da aggiungere al tableau:

$$
-\sum_{j \in N} F_i^j x_j + x_{n+1} = -F_i \qquad (10)
$$

>> La nuova slack $x_{n+1}$ entra in base nella nuova riga (colonna identità), con valore $-F_i < 0$: la base estesa è primale non ammissibile. La riga 0 non cambia (il costo di $x_{n+1}$ è 0), quindi i costi ridotti restano $\le 0$ e la base è ancora duale ammissibile: si riparte con il **simplesso duale**, pivotando proprio sulla riga del taglio.

---
## Slide 19 -> 26 – Esempio di Applicazione dei Tagli di Gomory

Si consideri il problema P:

$$
\begin{array}{rrcrcl}
\min z_P = & & & -x_2 & & \\
\text{s.t.} & +3x_1 & & +2x_2 & \le & 6\\
 & -3x_1 & & +2x_2 & \le & 0\\
 & x_1 & , & x_2 & \ge & 0 \text{ e intere}
\end{array}
$$

![[RO04-s019-1.png|381]]
>se in un esercizio utilizziamo il taglio di gomery non è poi immediato il fatto di trovare per forza una soluzione intera, semplicemente stiamo eliminando quella frazionaria corrente.

>> La regione del rilassamento è il triangolo di vertici $(0,0)$, $(2,0)$ e $(1, \frac{3}{2})$: l'ottimo LP è il vertice $(1, \frac{3}{2})$ con $z_{LP} = -\frac{3}{2}$, mentre l'ottimo intero è $(1, 1)$ con $z_P = -1$.

Se rilassiamo i vincoli di interezza (ottenendo il problema LP), possiamo risolvere il problema con il simplesso primale.
Il primo tableau è il seguente:

$$
\begin{array}{cccc|c}
x_1 & x_2 & x_3 & x_4 & \\
0 & 1 & 0 & 0 & 0\\ \hline
3 & 2 & 1 & 0 & 6\\
-3 & \boxed{2} & 0 & 1 & 0\\ \hline
\end{array}
$$

Dopo la prima iterazione abbiamo:

$$
\begin{array}{cccc|c}
x_1 & x_2 & x_3 & x_4 & \\
3/2 & 0 & 0 & -1/2 & 0\\ \hline
\boxed{6} & 0 & 1 & -1 & 6\\
-3/2 & 1 & 0 & 1/2 & 0\\ \hline
\end{array}
$$

>> $x_3$ e $x_4$ sono le slack dei due vincoli. Nella riga 0 c'è $\mathbf{w}\mathbf{a}_j - c_j$, quindi per $x_2$ (costo $-1$) vale $0 - (-1) = 1 > 0$ ⇒ entra $x_2$; rapporti minimi $\frac{6}{2} = 3$ e $\frac{0}{2} = 0$ ⇒ esce $x_4$. È un pivot degenere: la soluzione resta $(0, 0)$ e $z$ resta $0$.
>> Seconda iterazione: entra $x_1$ (costo ridotto $\frac{3}{2} > 0$), l'unico elemento positivo della colonna è $6$ ⇒ esce $x_3$.

Dopo la seconda iterazione abbiamo ottenuto il seguente tableau ottimo:

$$
\begin{array}{cccc|c}
x_1 & x_2 & x_3 & x_4 & \\
0 & 0 & -1/4 & -1/4 & -3/2\\ \hline
1 & 0 & 1/6 & -1/6 & 1\\
0 & 1 & 1/4 & 1/4 & 3/2\\ \hline
\end{array}
$$

- La soluzione ottima del problema LP è $\mathbf{x} = (1, \frac{3}{2})$, che non è intera.
- Possiamo aggiungere un Taglio di Gomory per eliminare (si dice anche "**separare**") la soluzione frazionaria.
- Ricordiamo che dobbiamo scegliere una riga corrispondete a una variabile frazionaria. Nel nostro caso quella relativa a $x_2$:

$$
x_2 + \frac{1}{4}x_3 + \frac{1}{4}x_4 = \frac{3}{2}
$$

- Data la riga corrispondete a $x_2$ è:

$$
x_2 + \frac{1}{4}x_3 + \frac{1}{4}x_4 = \frac{3}{2}
$$

	Ricordiamo che il Taglio di Gomory ha la seguente forma:

$$
-\sum_{j=m+1}^{n} F_i^j x_j \le -F_i
$$

	quindi nel nostro caso è:

$$
-\frac{1}{4}x_3 - \frac{1}{4}x_4 \le -\frac{1}{2}
$$

>> Parti frazionarie: $F(\frac{1}{4}) = \frac{1}{4}$ e $F(\frac{3}{2}) = \frac{1}{2}$.
>> Nelle variabili originali, sostituendo $x_3 = 6 - 3x_1 - 2x_2$ e $x_4 = 3x_1 - 2x_2$: $x_3 + x_4 \ge 2$ ⇒ $6 - 4x_2 \ge 2$ ⇒ $x_2 \le 1$. Il taglio "abbassa" il vertice frazionario $(1, \frac{3}{2})$.

Possiamo aggiungere il Taglio di Gomory inserendo una nuova riga al tableau, oltre alla colonna della nuova variabile di scarto $x_5$:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & 0 & -1/4 & -1/4 & 0 & -3/2\\ \hline
1 & 0 & 1/6 & -1/6 & 0 & 1\\
0 & 1 & 1/4 & 1/4 & 0 & 3/2\\
0 & 0 & -1/4 & -1/4 & 1 & -1/2\\ \hline
\end{array}
$$

La base corrente che includeva le colonne delle variabili $x_1$ e $x_2$ può essere estesa aggiungendo la colonna corrispondente alla nuova variabile di scarto $x_5$.
Come risulta evidente, questa base non è primale ammissibile (il termine noto è negativo), ma duale ammissibile; quindi ~~conviene continuare con il Simplesso Duale.~~

Applichiamo la prima iterazione del simplesso duale:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & 0 & -1/4 & -1/4 & 0 & -3/2\\ \hline
1 & 0 & 1/6 & -1/6 & 0 & 1\\
0 & 1 & 1/4 & 1/4 & 0 & 3/2\\
0 & 0 & \boxed{-1/4} & -1/4 & 1 & -1/2\\ \hline
\end{array}
$$

Il risultato ottenuto è:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & 0 & 0 & 0 & -1 & -1\\ \hline
1 & 0 & 0 & -1/3 & 2/3 & 2/3\\
0 & 1 & 0 & 0 & 1 & 1\\
0 & 0 & 1 & 1 & -4 & 2\\ \hline
\end{array}
$$

>> Riga: l'unico termine noto negativo è $-\frac{1}{2}$ (riga del taglio, esce $x_5$). Colonna: i rapporti sono $\frac{-1/4}{-1/4} = 1$ per $x_3$ e $\frac{-1/4}{-1/4} = 1$ per $x_4$, quindi c'è un pareggio e la slide sceglie $x_3$. Il tableau risultante è corretto (verificato).

Dopo una sola iterazione abbiamo ottenuto il tableau ottimo:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & 0 & 0 & 0 & -1 & -1\\ \hline
1 & 0 & 0 & -1/3 & 2/3 & 2/3\\
0 & 1 & 0 & 0 & 1 & 1\\
0 & 0 & 1 & 1 & -4 & 2\\ \hline
\end{array}
$$

- La nuova soluzione ottima è $\mathbf{x} = (\frac{2}{3}, 1)$, che non è ancora intera.
- Possiamo ~~aggiungere un nuovo Taglio di Gomory~~ per eliminare la soluzione frazionaria.
- In questo caso la riga è quella relativa a $x_1$ e il Taglio di Gomory è:

$$
-\frac{2}{3}x_4 - \frac{2}{3}x_5 + x_6 = -\frac{2}{3}
$$

>> Qui c'è il tranello dei coefficienti negativi: nella riga $x_1 - \frac{1}{3}x_4 + \frac{2}{3}x_5 = \frac{2}{3}$ la parte frazionaria di $-\frac{1}{3}$ è $-\frac{1}{3} - \lfloor -\frac{1}{3} \rfloor = -\frac{1}{3} + 1 = \frac{2}{3}$; quelle di $\frac{2}{3}$ (coefficiente di $x_5$ e termine noto) sono $\frac{2}{3}$.
>> Nelle variabili originali: la slack del primo taglio vale $x_5 = \frac{x_3 + x_4}{4} - \frac{1}{2} = 1 - x_2$, quindi $x_4 + x_5 \ge 1$ ⇒ $3x_1 - 2x_2 + 1 - x_2 \ge 1$ ⇒ $x_2 \le x_1$.

Applichiamo ancora il ~~simplesso duale~~:

$$
\begin{array}{cccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & x_6 & \\
0 & 0 & 0 & 0 & -1 & 0 & -1\\ \hline
1 & 0 & 0 & -1/3 & 2/3 & 0 & 2/3\\
0 & 1 & 0 & 0 & 1 & 0 & 1\\
0 & 0 & 1 & 1 & -4 & 0 & 2\\
0 & 0 & 0 & \boxed{-2/3} & -2/3 & 1 & -2/3\\ \hline
\end{array}
$$

La soluzione ottima ottenuta è finalmente intera:

$$
\begin{array}{cccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & x_6 & \\
0 & 0 & 0 & 0 & -1 & 0 & -1\\ \hline
1 & 0 & 0 & 0 & 1 & -1/2 & 1\\
0 & 1 & 0 & 0 & 1 & 0 & 1\\
0 & 0 & 1 & 0 & -5 & 3/2 & 1\\
0 & 0 & 0 & 1 & 1 & -3/2 & 1\\ \hline
\end{array}
$$

>> Rapporti: $\frac{0}{-2/3} = 0$ per $x_4$ e $\frac{-1}{-2/3} = \frac{3}{2}$ per $x_5$ ⇒ entra $x_4$ (pivot degenere per il duale: $z$ resta $-1$). Tableau verificato: $\mathbf{x} = (1, 1)$, $z_P = -1$.
>> Il costo ridotto nullo di $x_6$ (non in base) indica ottimi alternativi del rilassamento (il segmento $x_2 = 1$, $1 \le x_1 \le \frac{4}{3}$), ma l'unico punto intero è $(1, 1)$.

---
## Slide 27 – Osservazioni sui Tagli di Gomory

- Nell'esempio otteniamo la soluzione ottima intera $\mathbf{x} = (1, 1)$ aggiungendo solo due Tagli di Gomory.
- In teoria l'uso dei Tagli di Gomory dovrebbe consentire la convergenza a una soluzione intera (con ulteriori accorgimenti che non approfondiamo), ma nella pratica non consentono di ottenere la soluzione ottima intera.
- Esistono altre disuguaglianze valide, alcune generali e altre studiate per risolvere specifici modelli, che consentono di ottenere più velocemente valori del **lower bound** migliori. Come i Tagli di Gomory, raramente consentono di ottenere direttamente soluzioni intere.
- **Migliorare i valori del lower bound consente a metodi come il branch and bound di convergere molto più velocemente alla soluzione ottima intera.**

>> In pratica i tagli puri convergono molto lentamente (servono moltissimi tagli, sempre meno profondi) e accumulano errori numerici; per questo si usano dentro il Branch and Bound (Branch and Cut): i tagli alzano il lower bound dei nodi e così più nodi vengono chiusi con il test $z_k \ge z_{UB}$.
---
## Slide 28 -> 33 – Introduzione ai Metodi di Decomposizione

- Alcuni problemi di programmazione lineare presentano un **elevato numero di variabili e/o vincoli**. Alcuni vincoli potrebbero rendere il problema di difficile soluzione.
- ~~In alcuni casi la struttura della matrice dei vincoli permette di **decomporre** il problema originale in sottoproblemi di più facile soluzione~~ (i.e., **Metodi di Decomposizione**).
- L'approccio più "semplice" prevede di risolvere tali problemi senza considerare esplicitamente tutte le variabili e/o i vincoli del problema.
- Il ==🔵**simplesso dinamico**== (criss-cross -> "incrociato") definisce un *core* iniziale che considera solo un sottoinsieme delle variabili e dei vincoli del problema (i + stringenti e importanti). Dopodiché, aggiunge dinamicamente le variabili e i vincoli *mancanti* durante il processo di soluzione. (troppo semplice, viene considerato poco dai ricercatori)

- Una possibilità per decomporre facilmente un modello è rappresentata dai metodi di generazione di colonne, che generano dinamicamente le colonne di un problema (**Metodi Column Generation**).
- Metodi di decomposizione più sofisticati sono:
	- Il ==*Rilassamento Lagrangiano*==;
	- Il ==*Metodo di Decomposizione di Dantzig-Wolfe*==;
	- Il ==*Metodo di Decomposizione di Benders*==.
- I metodi di decomposizione possono essere applicati a problemi di programmazione lineare continua, intera e mista intera.
- Per ciascun metodo di decomposizione ci possono essere diversi modi per decomporre un modello.
--- 
- In generale un problema P può avere la seguente forma:

$$
\begin{array}{rlr}
z_P = \min & \mathbf{c}_1\mathbf{x} + \mathbf{c}_2\mathbf{y} & (11)\\
\text{s.t.} & \mathbf{A}\mathbf{x} + \mathbf{B}\mathbf{y} \ge \mathbf{b} & (12)\\
 & (\mathbf{x}, \mathbf{y}) \in D & (13)
\end{array}
$$
>partiziono la matrice dei vincoli in A e B, 
>$(\mathbf{x}, \mathbf{y}) \in D$, nasconde degli ulteriori vincoli in più rispetto quelli che siamo abituati:

dove l'insieme dei punti ammissibili $D$ può essere definito, per esempio, come:

$$
D = \{(\mathbf{x}, \mathbf{y}) : \mathbf{D}_1\mathbf{x} \ge \mathbf{d}_1, \mathbf{D}_2\mathbf{y} \ge \mathbf{d}_2, \mathbf{x} \ge \mathbf{0}, \mathbf{y} \ge \mathbf{0} \text{ and integer}\} \qquad (14)
$$

	oppure:

$$
D = \{(\mathbf{x}, \mathbf{y}) : \mathbf{D}_1\mathbf{x} + \mathbf{D}_2\mathbf{y} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}, \mathbf{y} \ge \mathbf{0} \text{ and integer}\} \qquad (15)
$$

- Se si considera il primo esempio il problema P è il seguente:

$$
\begin{array}{rrcrcll}
z_P = \min & \mathbf{c}_1\mathbf{x} & + & \mathbf{c}_2\mathbf{y} & & & (16)\\
\text{s.t.} & \mathbf{A}\mathbf{x} & + & \mathbf{B}\mathbf{y} & \ge & \mathbf{b} & (17)\\
 & \mathbf{D}_1\mathbf{x} & & & \ge & \mathbf{d}_1 & (18)\\
 & & & \mathbf{D}_2\mathbf{y} & \ge & \mathbf{d}_2 & (19)\\
 & \mathbf{x} & & & \ge & \mathbf{0} & (20)\\
 & & & \mathbf{y} & \ge & \mathbf{0} \text{ and integer} & (21)
\end{array}
$$

- ~~Se si rilassano i vincoli (17) allora il problema P si decompone in due problemi indipendenti, uno rispetto alle variabili $\mathbf{x}$, l'altro rispetto alle variabili $\mathbf{y}$.~~ -> ottimizzo rispetto la x, poi rispetto la y e poi unisco i risultati.
- Però la soluzione $(\mathbf{x}, \mathbf{y})$ calcolata risolvendo i due problemi indipendenti separatamente potrebbe non soddisfare i vincoli (17) rilassati.

>> Togliendo (17) restano due problemi separati: $\min\{\mathbf{c}_1\mathbf{x} : \mathbf{D}_1\mathbf{x} \ge \mathbf{d}_1, \mathbf{x} \ge \mathbf{0}\}$ (un PL) e $\min\{\mathbf{c}_2\mathbf{y} : \mathbf{D}_2\mathbf{y} \ge \mathbf{d}_2, \mathbf{y} \ge \mathbf{0} \text{ intero}\}$ (un PLI). ==🔵I vincoli (17) sono quelli "di collegamento" (*linking constraints*)== : sono gli unici che legano $\mathbf{x}$ e $\mathbf{y}$.

---
- Se si considera il secondo esempio il problema P è il seguente:

$$
\begin{array}{rrcrcll}
z_P = \min & \mathbf{c}_1\mathbf{x} & + & \mathbf{c}_2\mathbf{y} & & & (22)\\
\text{s.t.} & \mathbf{A}\mathbf{x} & + & \mathbf{B}\mathbf{y} & \ge & \mathbf{b} & (23)\\
 & \mathbf{D}_1\mathbf{x} & + & \mathbf{D}_2\mathbf{y} & \ge & \mathbf{d} & (24)\\
 & \mathbf{x} & & & \ge & \mathbf{0} & (25)\\
 & & & \mathbf{y} & \ge & \mathbf{0} \text{ and integer} & (26)
\end{array}
$$

- Anche se si rilassano i vincoli (23), il problema P non si decompone in due problemi indipendenti come nel primo caso.
- Nonostante questo potrebbe convenire perché ~~i vincoli (23) rendono il problema particolarmente complesso da risolvere~~.
- Però anche in questo caso la soluzione $(\mathbf{x}, \mathbf{y})$ calcolata risolvendo il problema rilassato potrebbe non soddisfare i vincoli (23).
>come faccio a essere sicuro di ottenere comunque una soluzione ammissibile anche secondo i vincoli 23? lo vedremo
---
- Si consideri, ora, il seguente problema P:

$$
\begin{array}{rrcll}
z_P = \min & \mathbf{c}\mathbf{x} & & & (27)\\
\text{s.t.} & \mathbf{A}\mathbf{x} & \ge & \mathbf{b} & (28)\\
 & \mathbf{B}\mathbf{x} & \ge & \mathbf{d} & (29)\\
 & \mathbf{x} & \ge & \mathbf{0} \text{ and integer} & (30)
\end{array}
$$

	dove i vincoli (28) sono considerati complicati.
- Per semplicità si assume che la regione di ammissibilità sia non vuota e limitata.
- Si denota con LP il rilassamento lineare del problema P, ottenuto rilassando i vincoli di integralità (30), e con $z_{LP}$ il valore della sua soluzione ottima.

>ogni tanto può anche capitare di togliere i vincoli che risultano più "facili" al contrario dei più complicati perché mantenendo quest'ultimi si ha un modo più efficace per risolvere il problema. (es: knapsack, in questo caso in particolare lo riusciamo a risolvere all'esatto facendo molto meglio del rilassamento continuo)

---
## Slide 34 -> 37 – Rilassamento Lagrangiano

>da adesso in poi chiamiamo rilassamento lineare, denotiamo con **LP**, il problema in cui ho rimosso i vincoli di interezza. Ci interessa capire se il problema rilassato è in grado di ottenere il valore del problema con il rilassamento lineare.

- Il **rilassamento Lagrangiano** permette di ottenere un lower bound per il problema P nel seguente modo:
	- alcuni vincoli considerati *difficili* sono rimossi;
	- i vincoli rimossi sono inseriti nella funzione obiettivo per mezzo delle *penalità Lagrangiane*.
- Per esempio, se nel problema P ([[#Slide 28 -> 33 – Introduzione ai Metodi di Decomposizione|Vai al problema P]]), si rilassano i vincoli (28) usando il vettore non negativo di penalità Lagrangiane $\lambda$, si ottiene la seguente formulazione LR:

$$
\begin{array}{rlr}
z_{LR}(\lambda) = \min & \mathbf{c}\mathbf{x} + \lambda(\mathbf{b} - \mathbf{A}\mathbf{x}) & (31)\\
\text{s.t.} & \mathbf{B}\mathbf{x} \ge \mathbf{d} & (32)\\
 & \mathbf{x} \ge \mathbf{0} \text{ and integer} & (33)
\end{array}
$$

>> Intuizione: se $\mathbf{x}$ viola il vincolo $i$ di (28), allora $b_i - \mathbf{a}^i\mathbf{x} > 0$ e il termine $\lambda_i(b_i - \mathbf{a}^i\mathbf{x})$ fa *crescere* il costo (penalità); se lo rispetta, il termine è $\le 0$ e il costo può solo scendere ("premio"). Per questo serve $\lambda \ge 0$ (vincoli $\ge$ in un problema di minimo): così LR non può mai superare $z_P$. 
>> Il concetto è di penalizzare una soluzione non ammissibile, i segni possono essere anche invertiti quindi  $\mathbf{a}^i\mathbf{x} - b_i> 0$ causa una lambda $\lambda \le 0$.

**Teorema (Dualità Lagrangiana Debole)**
*$z_{LR}(\lambda)$ è un valido lower bound al valore della soluzione ottima di P, i.e., $z_{LR}(\lambda) \le z_P$, per ogni $\lambda \ge \mathbf{0}$ (come ci pare).*

**Dimostrazione** ( #esame : la può chiedere)
- *Sia $\mathbf{x}^*$ la soluzione ottima di P.*
- *Siccome $\mathbf{x}^*$ è una soluzione ammissibile anche per LR($\lambda$), per ogni $\lambda \ge \mathbf{0}$, si ha che:*

$$
z_{LR}(\lambda, \mathbf{x}^*) = \mathbf{c}\mathbf{x}^* + \lambda(\mathbf{b} - \mathbf{A}\mathbf{x}^*) \ge z_{LR}(\lambda)
$$

- *Però $\lambda(\mathbf{b} - \mathbf{A}\mathbf{x}^*) \le 0$, perché $\lambda \ge \mathbf{0}$ e $\mathbf{A}\mathbf{x}^* \ge \mathbf{b}$, quindi:*

$$
z_{LR}(\lambda) \le z_{LR}(\lambda, \mathbf{x}^*) \le z_P, \quad \forall \lambda \ge \mathbf{0}.
$$

>> In sintesi: $z_{LR}(\lambda) \le \mathbf{c}\mathbf{x}^* + \underbrace{\lambda(\mathbf{b} - \mathbf{A}\mathbf{x}^*)}_{\le 0} \le \mathbf{c}\mathbf{x}^* = z_P$. Il primo $\le$ vale perché LR minimizza su un insieme che contiene $\mathbf{x}^*$ (togliendo vincoli la regione si allarga). ~~Quindi la soluzione ottima del problema lagrangiano è minore o uguale alla soluzione ottima del problema intero originario.~~

- Il sottoproblema LR è detto **problema Lagrangiano**.
- Per identificare il vettore di penalità $\lambda$ che massimizza il lower bound $z_{LR}(\lambda)$ si deve risolvere il cosiddetto **Lagrangiano Duale**, che può essere formulato come segue:

$$
z_{LR} = \max\{z_{LR}(\lambda) : \lambda \ge \mathbf{0}\} \qquad (34)
$$

	dove per ogni vettore di penalità fissato deve essere risolto un problema Lagrangiano LR, che può essere riscritto come:

$$
\begin{array}{rlr}
z_{LR}(\lambda) = \min & (\mathbf{c} - \lambda\mathbf{A})\mathbf{x} + \lambda\mathbf{b} & (35)\\
\text{s.t.} & \mathbf{B}\mathbf{x} \ge \mathbf{d} & (36)\\
 & \mathbf{x} \ge \mathbf{0} \text{ and integer} & (37)
\end{array}
$$

>> Per $\mathbf{x}$ fissato, $(\mathbf{c} - \lambda\mathbf{A})\mathbf{x} + \lambda\mathbf{b}$ è lineare in $\lambda$; $z_{LR}(\lambda)$ è il minimo di queste funzioni lineari (una per ogni punto intero ammissibile), quindi è **concava e lineare a tratti**. Nei punti di "spigolo" non è derivabile: per questo si massimizza con il subgradiente e non con il gradiente.

- Il lower bound $z_{LR}$ fornito dal Lagrangiano duale è maggiore o uguale a quello fornito dalla soluzione ottima $z_{LP}$ del rilassamento lineare del problema P ?, i.e. $z_{LR} \ge z_{LP}$.
- Se il lower bound $z_{LR}$ è strettamente minore alla soluzione ottima del problema P, $z_{LR} < z_P$, allora si dice che c'è **Duality Gap**. -> il rilassamento lagrangiano non è sempre in grado di raggiungere il valore della soluzione ottima intera, ma fa meglio del rilassamento lineare
- Si noti che è possibile aggiungere al problema LR dei nuovi vincoli ridondanti nella formulazione originale P, ma che possono aiutare la convergenza ed eventualmente migliorare il lower bound $z_{LR}$.
- Per risolvere il problema LR il metodo più usato è il **subgradiente**.

>> Catena da ricordare: $z_{LP} \le z_{LR} \le z_P$.
>> Se il problema Lagrangiano ha la **proprietà di integralità** (il suo rilassamento continuo ha sempre soluzioni ottime intere, come quando i vincoli rimasti sono solo $x_j \in \{0,1\}$), allora $z_{LR} = z_{LP}$: il rilassamento Lagrangiano non migliora il bound, ma può comunque essere molto più veloce da calcolare. Il bound migliora ($z_{LR} > z_{LP}$) solo se il sottoproblema LR non ha la proprietà di integralità.
>> Nell'ultimo punto "risolvere il problema LR" va inteso come risolvere il Lagrangiano duale (34): il subgradiente aggiorna $\lambda$, e per ogni $\lambda$ si risolve il problema LR($\lambda$).

---
## Slide 38 -> 47 – Rilassamento Lagrangiano: esempi

**Set Covering Problem**

- Il Set Covering Problem (SC) è il problema di *coprire* le righe di una matrice $A$, con coefficienti $a_{ij} \in \{0, 1\}$ e di dimensione $m \times n$, con un sottoinsieme $S$ di colonne di costo minimo.
- Sia $x_j$ una variabile binaria 0-1 uguale a 1 se la colonna $j$ di costo $c_j$ è in soluzione, 0 altrimenti. Un modello per il problema SC è:

$$
\begin{array}{rllr}
z_{SC} = \min & \displaystyle\sum_{j=1}^{n} c_j x_j & & (38)\\
\text{s.t.} & \displaystyle\sum_{j=1}^{n} a_{ij} x_j \ge 1, & i = 1, \dots, m & (39)\\
 & x_j \in \{0, 1\}, & j = 1, \dots, n & (40)
\end{array}
$$
>voglio trovare quel sottoinsieme di colonne che mi garantisce la copertura di tutte le righe almeno una volta ma voglio risparmiare, voglio che la somma dei costi delle colonne che ho scelto sia la minima.

**Esempio numerico:**

- Si consideri l'istanza di set covering dove $m = 3$, $n = 6$ e il vettore dei costi è $\mathbf{c} = [1, 2, 3, 4, 5, 6]$
- Mentre, la matrice $A$ dei coefficienti è la seguente:

$$
A = \begin{array}{c|cccccc}
 & 1 & 2 & 3 & 4 & 5 & 6\\ \hline
1 & 1 & 0 & 1 & 0 & 1 & 0\\
2 & 0 & 0 & 1 & 1 & 0 & 1\\
3 & 0 & 1 & 0 & 0 & 1 & 1
\end{array}
$$

- Soluzione ottima di costo 5 è il sottoinsieme di colonne $S = \{2, 3\}$ .

>> Verifica: la colonna 3 copre le righe 1 e 2, la colonna 2 copre la riga 3; costo $c_2 + c_3 = 2 + 3 = 5$. L'enumerazione di tutti i $2^6$ sottoinsiemi conferma che non esiste copertura di costo minore (in questa istanza anche il rilassamento lineare vale 5).

- Il Rilassamento Lagrangiano del problema SC rispetto ai vincoli (39) è il seguente:

$$
\begin{array}{rll}
z_{LR}(\lambda) = \min & \displaystyle\sum_{j=1}^{n} c_j x_j + \sum_{i=1}^{m} \lambda_i \Big(1 - \sum_{j=1}^{n} a_{ij} x_j\Big) & \\
\text{s.t.} & x_j \in \{0, 1\}, & j = 1, \dots, n
\end{array}
$$

	dove $\lambda_i \ge 0$, $i = 1, \dots, m$.
- Il problema $LR(\lambda)$ può essere riscritto come segue:

$$
\begin{array}{rll}
z_{LR}(\lambda) = \min & \displaystyle\sum_{j=1}^{n} \Big(c_j - \sum_{i=1}^{m} \lambda_i a_{ij}\Big) x_j + \sum_{i=1}^{m} \lambda_i & \\
\text{s.t.} & x_j \in \{0, 1\}, & j = 1, \dots, n
\end{array}
$$

- Se si definisce il *costo penalizzato* $c'_j = c_j - \sum_{i=1}^{m} \lambda_i a_{ij}$, $j = 1, \dots, n$, il problema $LR(\lambda)$ può essere riscritto come segue:

$$
\begin{array}{rll}
z_{LR}(\lambda) = \min & \displaystyle\sum_{j=1}^{n} c'_j x_j + \sum_{i=1}^{m} \lambda_i & \\
\text{s.t.} & x_j \in \{0, 1\}, & j = 1, \dots, n
\end{array}
$$

	la cui soluzione ottima $\mathbf{x}^*$ può essere calcolata ponendo, per ogni $j = 1, \dots, n$:

$$
x_j^* = \begin{cases} 1 & \text{se } c'_j \le 0;\\ 0 & \text{altrimenti.} \end{cases}
$$

>> Il problema Lagrangiano del set covering è banale: senza i vincoli di copertura le variabili sono indipendenti, quindi basta prendere tutte le colonne con costo penalizzato non positivo (con $c'_j = 0$ si può scegliere indifferentemente 0 o 1). Costo: $O(mn)$ per calcolare i $c'_j$.
>> Avendo la proprietà di integralità, per il set covering vale $z_{LR} = z_{LP}$: il vantaggio è la velocità, non un bound migliore.

---
**Esempio numerico:**

- Si consideri il seguente problem di Set Covering:

$$
\begin{array}{rrcrcrcrcr}
z_{SC} = \min & 2x_1 & & +3x_2 & & +4x_3 & & +5x_4 & & \\
\text{s.t.} & x_1 & & & & +x_3 & & & \ge & 1\\
 & x_1 & & & & & & +x_4 & \ge & 1\\
 & & & x_2 & & +x_3 & & +x_4 & \ge & 1\\
 & x_1 & , & x_2 & , & x_3 & , & x_4 & \in & \{0, 1\}
\end{array}
$$

- La soluzione ottima di costo 5 è $x_1 = x_2 = 1$ e $x_3 = x_4 = 0$.
- Si rilassano mediante le penalità Lagrangiane $\lambda_1$, $\lambda_2$ e $\lambda_3$ i vincoli di set covering.

- Il problema Lagrangiano LR è il seguente:

$$
\begin{array}{rl}
z_{LR}(\lambda) = \min & 2x_1 + 3x_2 + 4x_3 + 5x_4 + \lambda_1(1 - x_1 - x_3)\\
 & + \lambda_2(1 - x_1 - x_4) + \lambda_3(1 - x_2 - x_3 - x_4)\\
\text{s.t.} & x_1, x_2, x_3, x_4 \in \{0, 1\}
\end{array}
$$

	che equivale al problema:

$$
\begin{array}{rl}
z_{LR}(\lambda) = \min & c'_1 x_1 + c'_2 x_2 + c'_3 x_3 + c'_4 x_4 + \lambda_1 + \lambda_2 + \lambda_3\\
\text{s.t.} & x_1, x_2, x_3, x_4 \in \{0, 1\}
\end{array}
$$

	dove

$$
\begin{array}{l}
c'_1 = 2 - \lambda_1 - \lambda_2\\
c'_2 = 3 - \lambda_3\\
c'_3 = 4 - \lambda_1 - \lambda_3\\
c'_4 = 5 - \lambda_2 - \lambda_3
\end{array}
$$

- Se $\lambda_1 = 1.5$, $\lambda_2 = 1.6$ e $\lambda_3 = 2.2$ si ha:

$$
\begin{array}{l}
c'_1 = 2 - \lambda_1 - \lambda_2 = -1.1\\
c'_2 = 3 - \lambda_3 = 0.8\\
c'_3 = 4 - \lambda_1 - \lambda_3 = 0.3\\
c'_4 = 5 - \lambda_2 - \lambda_3 = 1.2
\end{array}
$$

- La soluzione ottima $\mathbf{x}^*$ di $LR(\lambda)$ è:

$$
x_1^* = 1, x_2^* = x_3^* = x_4^* = 0
$$

	di costo $z_{LR}(\lambda) = -1.1 + 0 + 0 + 0 + 1.5 + 1.6 + 2.2 = 4.2$ $(\le 5)$.
	
>mi devo ricordare di fare la somma delle lambda.

>> Questo $\lambda$ dà solo un lower bound debole. La soluzione $\mathbf{x}^* = (1,0,0,0)$ viola il terzo vincolo: il "subgradiente" $\mathbf{b} - A\mathbf{x}^* = (1-1,\ 1-1,\ 1-0) = (0, 0, 1)$ suggerisce di aumentare $\lambda_3$, che è proprio ciò che accade nel passaggio a $\lambda = (1, 1, 3)$ della slide seguente.

- Se $\lambda_1 = 1$, $\lambda_2 = 1$ e $\lambda_3 = 3$ si ha:

$$
\begin{array}{l}
c'_1 = 2 - \lambda_1 - \lambda_2 = 0\\
c'_2 = 3 - \lambda_3 = 0\\
c'_3 = 4 - \lambda_1 - \lambda_3 = 0\\
c'_4 = 5 - \lambda_2 - \lambda_3 = 1
\end{array}
$$

- La soluzione ottima $\mathbf{x}^*$ di $LR(\lambda)$ è:

$$
x_1^* = x_2^* = x_3^* = x_4^* = 0
$$

	di costo $z_{LR}(\lambda) = 0 + 0 + 0 + 0 + 1 + 1 + 3 = 5$ $(\le 5)$.
- Anche se $z_{LR}(\lambda) = z_{SC} = 5$, si noti che $\mathbf{x}^*$ non è una soluzione ammissibile per $SC$.
- Esistono soluzioni ottime alternative di $LR(\lambda)$ di costo $z_{LR}(\lambda) = 5$ tra le quali c'è anche la soluzione ottima di $SC$.

>> Con $c'_1 = c'_2 = c'_3 = 0$ e $c'_4 = 1$, sono ottime per LR($\lambda$) tutte le 8 soluzioni con $x_4 = 0$ e $x_1, x_2, x_3$ qualsiasi. Tra queste $\bar{\mathbf{x}} = (1, 1, 0, 0)$ è ammissibile per SC e soddisfa $\lambda(\mathbf{b} - A\bar{\mathbf{x}}) = 1\cdot 0 + 1\cdot 0 + 3\cdot 0 = 0$: per il teorema di dualità Lagrangiana forte (slide 48) è ottima per SC e $\lambda = (1, 1, 3)$ è ottimo per il Lagrangiano duale ($z_{LR} = 5$, nessun duality gap).
>> Nota: la regola della slide 41 ("$x_j^* = 1$ se $c'_j \le 0$") darebbe $(1, 1, 1, 0)$, ammissibile ma di costo 9; la slide sceglie invece $(0,0,0,0)$, che corrisponde a mettere a 1 solo i $c'_j < 0$. Entrambe sono ottime per LR($\lambda$): quando ci sono costi penalizzati nulli, la soluzione restituita dipende da come si rompono i pareggi, e può essere non ammissibile o non ottima per SC anche se il bound è esatto.

---
**Esempio Numerico:**
- Si consideri il seguente problema:

$$
\begin{array}{rrcrcrcr}
z_P = \min & 3x_1 & & +7x_2 & & +10x_3 & & \\
\text{s.t.} & x_1 & & +3x_2 & & +5x_3 & \ge & 7\\
 & x_1 & , & x_2 & , & x_3 & \in & \{0, 1\}
\end{array}
$$

- Il problema Lagrangiano è il seguente:

$$
\begin{array}{rl}
z_{LR}(\lambda) = \min & 3x_1 + 7x_2 + 10x_3 + \lambda(7 - x_1 - 3x_2 - 5x_3)\\
\text{s.t.} & x_1, x_2, x_3 \in \{0, 1\}
\end{array}
$$

	che può essere riscritto come:

$$
\begin{array}{rl}
z_{LR}(\lambda) = \min & (3 - \lambda)x_1 + (7 - 3\lambda)x_2 + (10 - 5\lambda)x_3 + 7\lambda\\
\text{s.t.} & x_1, x_2, x_3 \in \{0, 1\}
\end{array}
$$

- Calcoliamo $z_{LR}(\lambda)$ per $\lambda \ge 0$:
	- $\lambda = 0$, $z_{LR}(0) = 0$ e $\mathbf{x} = (0, 0, 0)$;
	- $\lambda = 1$, $z_{LR}(1) = 7$ e $\mathbf{x} = (0, 0, 0)$;
	- $\lambda = 2$, $z_{LR}(2) = 14$ e $\mathbf{x} = (0, 0, 0)$ oppure $\mathbf{x} = (0, 0, 1)$;
	- $\lambda = \frac{7}{3}$, $z_{LR}(\frac{7}{3}) = \frac{44}{3}$ e $\mathbf{x} = (0, 0, 1)$ oppure $\mathbf{x} = (0, 1, 1)$;
	- $\lambda = 3$, $z_{LR}(3) = 14$ e $\mathbf{x} = (0, 0, 1)$ oppure $\mathbf{x} = (1, 1, 1)$;
	- $\lambda > 3$, $z_{LR}(\lambda) = -2\lambda + 20$ e $\mathbf{x} = (1, 1, 1)$.
- Quindi esiste un gap di dualità in quanto $z_{LR} = \frac{44}{3}$ $(= z_{LR}(\frac{7}{3}))$, mentre la soluzione ottima $\mathbf{x}^* = (0, 1, 1)$ del problema P ha un costo pari a $z_P = 17$.
- Si noti che la soluzione ottima $\mathbf{x}^* = (0, 1, 1)$ corrisponde a una delle soluzioni di $z_{LR}(\frac{7}{3})$.

>> **Errore nella slide** (caso $\lambda = 3$): i costi penalizzati sono $(3-3,\ 7-9,\ 10-15) = (0, -2, -5)$, quindi $x_2$ e $x_3$ devono valere 1. Le soluzioni ottime sono $\mathbf{x} = (0, 1, 1)$ oppure $(1, 1, 1)$, non $(0, 0, 1)$: con $(0,0,1)$ si otterrebbe $21 - 5 = 16 \ne 14$. Il valore $z_{LR}(3) = 21 - 2 - 5 = 14$ è invece corretto.
>> Funzione completa (concava, lineare a tratti):
>> - $0 \le \lambda \le 2$: $z_{LR}(\lambda) = 7\lambda$, con $\mathbf{x} = (0,0,0)$;
>> - $2 \le \lambda \le \frac{7}{3}$: $z_{LR}(\lambda) = 10 + 2\lambda$, con $\mathbf{x} = (0,0,1)$;
>> - $\frac{7}{3} \le \lambda \le 3$: $z_{LR}(\lambda) = 17 - \lambda$, con $\mathbf{x} = (0,1,1)$;
>> - $\lambda \ge 3$: $z_{LR}(\lambda) = 20 - 2\lambda$, con $\mathbf{x} = (1,1,1)$.
>>
>> Il massimo è nello spigolo $\lambda = \frac{7}{3}$: $z_{LR} = \frac{44}{3} \approx 14.67$, gap $= 17 - \frac{44}{3} = \frac{7}{3}$. Coincide con il rilassamento lineare ($z_{LP} = 10 + 7 \cdot \frac{2}{3} = \frac{44}{3}$ con $\mathbf{x} = (0, \frac{2}{3}, 1)$), come previsto dalla proprietà di integralità del sottoproblema.
>> Anche se $(0,1,1)$ è ottima per LR($\frac{7}{3}$) ed è ammissibile, non soddisfa la condizione $\lambda(b - A\mathbf{x}) = \frac{7}{3}(7 - 8) = -\frac{7}{3} \ne 0$ della dualità forte: per questo non si può certificarne l'ottimalità con il solo bound Lagrangiano.

---
## Slide 48 -> 50 – Dualità Lagrangiana Forte

**Teorema (Dualità Lagrangiana Forte)**
*Dato il problema P ([[#Slide 28 -> 33 – Introduzione ai Metodi di Decomposizione|Vai al problema P]]), sia $\bar{\mathbf{x}}$ la soluzione ottima di $z_{LR}(\bar\lambda)$ per un dato $\bar\lambda \ge 0$. Se $\bar{\mathbf{x}}$ e $\bar\lambda$ soddisfano le seguenti condizioni:*
- *$\bar{\mathbf{x}}$ è ammissibile per P (i.e., $\mathbf{A}\bar{\mathbf{x}} \ge \mathbf{b}$)*
- *$\bar\lambda(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) = 0$,*

*allora $\bar{\mathbf{x}}$ è la soluzione ottima di P e $z_{LR} = z_{LR}(\bar\lambda)$.*

**Dimostrazione**
*La dimostrazione è divisa in due parti:*
- *Si dimostra che la soluzione $\bar{\mathbf{x}}$ è una soluzione ottima di P;*
- *Si dimostra che $z_{LR} = z_{LR}(\bar\lambda)$.*

>> La seconda condizione è l'analogo degli scarti complementari: per ogni vincolo rilassato, o la penalità è nulla ($\bar\lambda_i = 0$) o il vincolo è soddisfatto all'uguaglianza. Le condizioni sono **sufficienti, non necessarie**: se c'è duality gap non esiste nessuna coppia $(\bar{\mathbf{x}}, \bar\lambda)$ che le soddisfi.
>> Se $\bar{\mathbf{x}}$ è ammissibile ma $\bar\lambda(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) < 0$, si ha comunque $z_{LR}(\bar\lambda) \le z_P \le \mathbf{c}\bar{\mathbf{x}}$: un lower e un upper bound, utili per misurare quanto si è lontani dall'ottimo.

**Dimostrazione (la soluzione $\bar{\mathbf{x}}$ è una soluzione ottima di P)**
*Essendo $\bar{\mathbf{x}}$ una soluzione ammissibile di P si ha:*

$$
\mathbf{c}\bar{\mathbf{x}} \ge z_P. \qquad (41)
$$

*Per il teorema della dualità Lagrangiana debole si ha:*

$$
z_P \ge z_{LR}(\bar\lambda) = \mathbf{c}\bar{\mathbf{x}} + \underbrace{\bar\lambda(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}})}_{=0}. \qquad (42)
$$

*Per cui, da (41) e (42) si ottiene:*

$$
\mathbf{c}\bar{\mathbf{x}} \ge z_P \ge \mathbf{c}\bar{\mathbf{x}} \quad \Longrightarrow \quad z_P = \mathbf{c}\bar{\mathbf{x}} \ (= z_{LR}(\bar\lambda)). \qquad (43)
$$

**Dimostrazione ($z_{LR} = z_{LR}(\bar\lambda)$)**
*Dalla definizione di Lagrangiano Duale $z_{LR}$ si ha:*

$$
z_{LR} \ge z_{LR}(\bar\lambda) \qquad (44)
$$

*Mentre, dalla dualità Lagrangiana debole si ha:*

$$
z_P \ge z_{LR} \qquad (45)
$$

*Quindi, da (43), (44) e (45) si ottiene:*

$$
z_{LR} = z_{LR}(\bar\lambda). \qquad (46)
$$

>> In una riga: $z_{LR}(\bar\lambda) \overset{(43)}{=} z_P \overset{(45)}{\ge} z_{LR} \overset{(44)}{\ge} z_{LR}(\bar\lambda)$, quindi tutte le disuguaglianze sono uguaglianze.
---
## Slide 51 -> 63 – Rilassamento Lineare vs Rilassamento Lagrangiano

- Per comodità il problema P ([[#Slide 28 -> 33 – Introduzione ai Metodi di Decomposizione|Vai al problema P]]) può essere riscritto nella seguente forma compatta:

$$
\begin{array}{rlr}
z_P = \min & \mathbf{c}\mathbf{x} & (47)\\
\text{s.t.} & \mathbf{A}\mathbf{x} \ge \mathbf{b} & (48)\\
 & \mathbf{x} \in X & (49)
\end{array}
$$

	dove $X = \{\mathbf{x} : \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0} \text{ and integer}\}$.
- Il rilassamento lineare (LP) del problema P è ottenuto rilassando il vincolo di interezza delle variabili $\mathbf{x}$, i.e. $X' = \{\mathbf{x} : \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}$.
- Si ricorda che il valore ottimo $z_{LP}$ del rilassamento lineare di P è un valido lower bound al valore $z_P$ della soluzione ottima di P, i.e., $z_{LP} \le z_P$.
>almeno bene come il rilassamento lineare ma anche addirittura meglio

>> "Vai al problema P" è un pulsante-link del PDF che rimanda alla slide 33, dove P è scritto per esteso: $\min \mathbf{c}\mathbf{x}$ s.t. $\mathbf{A}\mathbf{x} \ge \mathbf{b}$ (vincoli "complicati"), $\mathbf{B}\mathbf{x} \ge \mathbf{d}$, $\mathbf{x} \ge \mathbf{0}$ intero. Qui i vincoli "facili" e l'interezza sono raccolti nell'insieme $X$.

- Si denota con **$conv(X)$ l'inviluppo convesso di $X$**, che è dato dall'intersezione di tutti gli insiemi convessi che contengono $X$ -> come si calcola? non lo sappiamo.

![[RO04-s052-1.png|459]]

>> Nella figura: i punti interi sono $X$, la linea continua è il poliedro $\{\mathbf{x} : \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}$, la linea tratteggiata è $conv(X)$. In generale $conv(X) \subseteq \{\mathbf{x} : \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}$, ed è il più piccolo poliedro che contiene tutti i punti interi ammissibili.

**Teorema (Caratterizzazione del Lagrangiano Duale)**
*Dato il problema $z_P = \min\{\mathbf{c}\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \in X\}$. Se si rilassano in modo Lagrangiano i vincoli $\mathbf{A}\mathbf{x} \ge \mathbf{b}$, il costo della soluzione ottima $z_{LR}$ del Lagrangiano Duale è uguale al costo della soluzione ottima del seguente problema di programmazione lineare:*

$$
\begin{array}{rlr}
z_{LR} = \min & \mathbf{c}\mathbf{x} & (50)\\
\text{s.t.} & \mathbf{A}\mathbf{x} \ge \mathbf{b} & (51)\\
 & \mathbf{x} \in conv(X) & (52)
\end{array}
$$
>soluzione del lagrangiano duale è equivalente al problema dell'inviluppo convesso (che però continuiamo a non sapere calcolare)

**Dimostrazione**
*Il Lagrangiano Duale è definito come:*

$$
z_{LR} = \max\{z_{LR}(\lambda) : \lambda \ge \mathbf{0}\} = \max_{\lambda \ge \mathbf{0}} \left\{ \min_{\mathbf{x} \in X} \{\mathbf{c}\mathbf{x} + \lambda(\mathbf{b} - \mathbf{A}\mathbf{x})\} \right\} \qquad (53)
$$
>riscritto in matematica lo stesso concetto di prima.

**Dimostrazione (Primo passo)**
*Se $T$ è l'insieme dei punti estremi del poliedro $X$ (che si è ipotizzato limitato e non vuoto) allora:*

>la soluzione ottima sta nei punti estremi, numeriamo ogni punto estremo e valutare la funzione obbiettivo in quei punti. problema: non conosco a priori tutti i punti estremi.
$$
z_{LR} = \max_{\lambda \ge \mathbf{0}} \left\{ \min_{t \in T} \mathbf{c}\mathbf{x}^t + \lambda(\mathbf{b} - \mathbf{A}\mathbf{x}^t) \right\} \qquad (54)
$$

*che equivale al seguente problema:*

>uso una variabile ausiliaria in più z per esplicitare il max e il min.

$$
\begin{array}{rllr}
z_{LR} = \max & z & & (55)\\
\text{s.t.} & z \le \mathbf{c}\mathbf{x}^t + \lambda(\mathbf{b} - \mathbf{A}\mathbf{x}^t), & t \in T & (56)\\
 & \lambda \ge \mathbf{0} & & (57)
\end{array}
$$

*(NOTA: questo è il master della ~~decomposizione di Benders~~)*

>> $X$ è un insieme finito di punti interi, non un poliedro: $T$ va inteso come l'insieme dei punti estremi di $conv(X)$ (o, equivalentemente, di tutti i punti di $X$). Il passaggio (53) → (54) funziona perché, fissato $\lambda$, la funzione da minimizzare è lineare in $\mathbf{x}$ e il suo minimo su $X$ si raggiunge in un vertice di $conv(X)$.
>> (55)–(57): $z$ deve stare sotto tutte le rette $\mathbf{c}\mathbf{x}^t + \lambda(\mathbf{b} - \mathbf{A}\mathbf{x}^t)$, quindi al massimo vale il loro minimo; massimizzando $z$ si ottiene esattamente (54). È un PL con un vincolo per ogni punto di $T$ (moltissimi vincoli → generazione di vincoli/tagli, come in Benders).

**Dimostrazione (Secondo passo)**
*Il duale del problema (55)–(57) è:*

$$
\begin{array}{rllr}
z_{LR} = \min & \displaystyle\sum_{t \in T} (\mathbf{c}\mathbf{x}^t)\alpha_t & & (58)\\
\text{s.t.} & \displaystyle\sum_{t \in T} (\mathbf{b} - \mathbf{A}\mathbf{x}^t)\alpha_t \le \mathbf{0} & & (59)\\
 & \displaystyle\sum_{t \in T} \alpha_t = 1 & & (60)\\
 & \alpha_t \ge 0, & t \in T & (61)
\end{array}
$$

*(NOTA: questo è il master della ~~decomposizione di Dantzig-Wolfe~~, modo ulteriormente diverso per vedere il problema del lagrangiano duale)*

>> Il duale ha una variabile $\alpha_t$ per ogni vincolo (56), cioè per ogni punto $\mathbf{x}^t$: è un PL con moltissime colonne, che si risolve con la generazione di colonne (Dantzig-Wolfe). Il vincolo (60) viene dalla variabile libera $z$, i vincoli (59) dalle variabili $\lambda \ge \mathbf{0}$.

**Dimostrazione (Conclusioni)**
*Definendo $\mathbf{x} = \sum_{t \in T} \mathbf{x}^t \alpha_t$, dal problema (58)–(61) si ottiene il teorema:*

$$
\begin{array}{rl}
\min & \mathbf{c}\mathbf{x}\\
\text{s.t.} & \mathbf{A}\mathbf{x} \ge \mathbf{b}\\
 & \mathbf{x} \in conv(X)
\end{array}
$$
>quindi restringo la grandezza dell'insieme nel quale cerco la x.

- Questo teorema è importante perché:
	- caratterizza il Lagrangiano Duale;
	- stabilisce l'equivalenza tra il rilassamento Lagrangiano e le decomposizioni di Dantzig-Wolfe e Benders.

>> $\mathbf{x} = \sum_{t} \mathbf{x}^t \alpha_t$ con $\alpha_t \ge 0$ e $\sum_t \alpha_t = 1$ è proprio una combinazione convessa dei punti estremi, cioè un generico punto di $conv(X)$.

**Dettaglio dei passaggi chiave del teorema**
Per calcolare il duale del problema (55)–(57) conviene riscriverlo come:

$$
\begin{array}{rllr}
z_{LR} = -\min & -z & & (62)\\
\text{s.t.} & -(\mathbf{b} - \mathbf{A}\mathbf{x}^t)\lambda + z \le \mathbf{c}\mathbf{x}^t, & t \in T & (63)\\
 & \lambda \ge \mathbf{0} & & (64)
\end{array}
$$

Al seguente duale basterà poi cambiare il segno alle variabili $\alpha_t$:

$$
\begin{array}{rllr}
z_{LR} = -\max & \displaystyle\sum_{t \in T} (\mathbf{c}\mathbf{x}^t)\alpha_t & & (65)\\
\text{s.t.} & \displaystyle\sum_{t \in T} -(\mathbf{b} - \mathbf{A}\mathbf{x}^t)\alpha_t \le \mathbf{0} & & (66)\\
 & \displaystyle\sum_{t \in T} \alpha_t = -1 & & (67)\\
 & \alpha_t \le 0, & t \in T & (68)
\end{array}
$$

>> Regole usate: primale di minimo con vincoli $\le$ → variabili duali $\alpha_t \le 0$; variabile $\lambda \ge \mathbf{0}$ → vincolo duale (66) di tipo $\le$ con termine noto $0$ (coefficiente di $\lambda$ nell'obiettivo); variabile $z$ libera → vincolo (67) di uguaglianza con termine noto $-1$ (coefficiente di $z$ nell'obiettivo $-z$).
>> Ponendo $\alpha_t' = -\alpha_t \ge 0$: $-\max \sum_t (\mathbf{c}\mathbf{x}^t)(-\alpha_t') = \min \sum_t (\mathbf{c}\mathbf{x}^t)\alpha_t'$, (66) diventa (59) e (67) diventa (60). I conti tornano.

Per l'ultmo passaggio che porta alle conclusioni, conviene riscrivere il problema (58)–(61) come:

$$
\begin{array}{rllr}
z_{LR} = \min & \mathbf{c}\displaystyle\sum_{t \in T} \mathbf{x}^t \alpha_t & & (69)\\
\text{s.t.} & \mathbf{b}\displaystyle\sum_{t \in T} \alpha_t - \mathbf{A}\displaystyle\sum_{t \in T} \mathbf{x}^t \alpha_t \le \mathbf{0} & & (70)\\
 & \displaystyle\sum_{t \in T} \alpha_t = 1 & & (71)\\
 & \alpha_t \ge 0, & t \in T & (72)
\end{array}
$$

Dopodiché, basterà sostituire $\mathbf{x} = \sum_{t \in T} \mathbf{x}^t \alpha_t$ e osservare che il vincolo (70) si può riscrivere come:

$$
-\mathbf{A}\mathbf{x} \le -\mathbf{b} \qquad (73)
$$

> #es : non la chiede questa sim all'esame.

>> Infatti per la (71) $\mathbf{b}\sum_t \alpha_t = \mathbf{b}$, quindi la (70) diventa $\mathbf{b} - \mathbf{A}\mathbf{x} \le \mathbf{0}$, cioè $\mathbf{A}\mathbf{x} \ge \mathbf{b}$; (71)–(72) dicono che $\mathbf{x} \in conv(X)$.

**Teorema (Relazione tra Rilassamento Lagrangiano e LP)**
*Il lower bound ottenuto dal rilassamento Lagrangiano del problema P è sempre maggiore o uguale del lower bound ottenuto dal Rilassamento Lineare di P, i.e., $z_{LP} \le z_{LR}$.*

**Dimostrazione**
*Siccome $conv(X) \subseteq \{\mathbf{x} : \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}$, l'insieme delle soluzioni del Lagrangiano Duale dato da $\{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \in conv(X)\}$ è contenuto nell'insieme delle soluzioni di LP dato da $\{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}$:*

$$
\{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \in conv(X)\} \subseteq \{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}. \qquad (74)
$$

*da cui segue che $z_{LP} \le z_{LR}$.*

>> Minimizzando la stessa funzione su un insieme più piccolo il minimo non può diminuire. In sintesi la catena dei bound è $z_{LP} \le z_{LR} \le z_P$.

![[RO04-s060-1.png|281]]![[RO04-s060-2.png|284]]

**(a)** $\{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0} \text{ intero}\}$; **(b)** $\{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}$

![[RO04-s061-1.png|283]]![[RO04-s061-2.png|287]]

**(a)** $conv(X)$; **(b)** $\{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \in conv(X)\}$

**Nota:** ricordiamo che $X = \{\mathbf{x} : \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0} \text{ and integer}\}$

![[RO04-s062-1.png|288]]![[RO04-s062-2.png|292]]

**(a)** $\{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}$ — **(b)** $\{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \in conv(X)\}$

>> Confronto della slide 62: (a) è la regione del rilassamento lineare LP, (b) quella del Lagrangiano Duale. La (b) è contenuta nella (a): il Lagrangiano "taglia via" la parte in alto a sinistra perché, rilassando solo $\mathbf{A}\mathbf{x} \ge \mathbf{b}$, l'interezza resta imposta sui vincoli $\mathbf{B}\mathbf{x} \ge \mathbf{d}$ (si usa $conv(X)$ al posto di $\{\mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}$). Per questo $z_{LR}$ può essere strettamente migliore di $z_{LP}$.

**Teorema**
*Si hanno le seguenti proprietà:*
- *$z_P = z_{LR}$ se e solo se:*

$$
\begin{array}{c}
conv(X \cap \{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \ge \mathbf{0}\})\\
=\\
conv(X) \cap conv(\{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \ge \mathbf{0}\});
\end{array}
$$
>inviluppo convesso delle intersezioni o intersezione dei inviluppi convessi coicidono.

- *$z_{LP} = z_{LR}$ se (Proprietà di Integralità):*

$$
conv(X) = conv(\{\mathbf{x} : \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}).
$$
>il vincolo di interezza non mi cambia l'insieme dei punti ammissibili.

>posso capire a priori se posso fare meglio? -> non ce un metodo matematico per capirlo. ma in modo empirico tramite l'esperienza lo potremmo intuire.

>> Il "se e solo se" del primo punto va inteso per ogni vettore di costi $\mathbf{c}$: per un $\mathbf{c}$ particolare si può avere $z_P = z_{LR}$ anche senza l'uguaglianza fra gli insiemi.
>> Proprietà di integralità: $\{\mathbf{x} : \mathbf{B}\mathbf{x} \ge \mathbf{d}, \mathbf{x} \ge \mathbf{0}\}$ è già convesso, quindi la condizione dice che questo poliedro ha tutti i vertici interi (il problema Lagrangiano si può risolvere come PL senza perdere nulla). In tal caso il rilassamento Lagrangiano non dà un bound migliore di LP: conviene usarlo solo se il problema Lagrangiano è più veloce da risolvere. Esempio: problemi Lagrangiani di assegnamento o con matrice totalmente unimodulare.

---
## Slide 64 -> 73 – **Metodo del Subgradiente**

- Il Lagrangiano Duale può essere risolto come problema di programmazione lineare, per esempio tramite le decomposizioni di Dantzig-Wolfe e Benders.
- Risolvere il Lagrangiano Duale come problema di Programmazione Lineare può essere *oneroso* dal punto di vista computazionale.
- Per risolvere il Lagrangiano Duale si possono utilizzare dei metodi *euristici*, come il metodo del *subgradiente*.
- Per introdurre il metodo del subgradiente è necessario dimostrare che la funzione Lagrangiana $z_{LR}(\lambda)$ è concava e definire cos'è un subgradiente.

**Teorema**
*La Funzione Lagrangiana $z_{LR}(\bar\lambda) = \mathbf{c}\bar{\mathbf{x}} + \bar\lambda(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}})$ è concava.*

**Dimostrazione**
*Si consideri il seguente esempio:*

![[RO04-s065-1.png|550]]

>> Nella figura la corda che unisce $z_{LR}(\lambda_1)$ e $z_{LR}(\lambda_2)$ sta sotto la curva: nel punto $\alpha\lambda_1 + (1-\alpha)\lambda_2$ si ha $\alpha z_{LR}(\lambda_1) + (1-\alpha) z_{LR}(\lambda_2) \le z_{LR}(\alpha\lambda_1 + (1-\alpha)\lambda_2)$, che è la definizione di funzione concava.

**Dimostrazione**
*Siano $\lambda_1, \lambda_2 \ge \mathbf{0}$ e $\bar\lambda$ una combinazione convessa di $\lambda_1$ e $\lambda_2$, i.e. $\bar\lambda = \alpha\lambda_1 + (1-\alpha)\lambda_2$ con $\alpha \in [0, 1]$. Sia $\bar{\mathbf{x}}$ la soluzione ottima di LR($\bar\lambda$):*

$$
z_{LR}(\bar\lambda) = \mathbf{c}\bar{\mathbf{x}} + \bar\lambda(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) \qquad (75)
$$

*$\bar{\mathbf{x}}$ è una soluzione ammissibile di LR($\lambda_1$) e LR($\lambda_2$), quindi:*

$$
\begin{array}{rcllr}
z_{LR}(\lambda_1) & \le & \mathbf{c}\bar{\mathbf{x}} + \lambda_1(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) & & (76)\\
z_{LR}(\lambda_2) & \le & \mathbf{c}\bar{\mathbf{x}} + \lambda_2(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) & & (77)
\end{array}
$$

*da cui si ottiene:*

$$
\alpha z_{LR}(\lambda_1) + (1-\alpha) z_{LR}(\lambda_2) \le \mathbf{c}\bar{\mathbf{x}} + \underbrace{(\alpha\lambda_1 + (1-\alpha)\lambda_2)}_{=\bar\lambda}(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) = z_{LR}(\bar\lambda).
$$

>>~~La disuguaglianza finale si ottiene moltiplicando la (76) per $\alpha \ge 0$, la (77) per $1-\alpha \ge 0$ e sommando.~~ Intuizione: $z_{LR}(\lambda) = \min_{\mathbf{x} \in X}\{\mathbf{c}\mathbf{x} + \lambda(\mathbf{b} - \mathbf{A}\mathbf{x})\}$ è il minimo di tante funzioni lineari (affini) in $\lambda$, una per ogni $\mathbf{x} \in X$; il minimo di funzioni affini è sempre concavo e **lineare a tratti**, quindi in generale non derivabile (la curva liscia della figura è solo illustrativa). Per questo serve il subgradiente al posto del gradiente.

- Un vettore $s$ é detto *subgradiente* della funzione $f(\lambda)$ nel punto $\bar\lambda$ se soddisfa la seguente condizione:

$$
f(\lambda) \le f(\bar\lambda) + s(\lambda - \bar\lambda) \qquad (78)
$$

![[RO04-s067-1.png|500]]

>> ~~Per una funzione concava il subgradiente definisce un iperpiano che sta sempre sopra la funzione e la tocca in $\bar\lambda$ ~~(nella figura la retta $f(\bar\lambda) + s(\lambda - \bar\lambda)$). Dove $f$ è derivabile l'unico subgradiente è il gradiente; nei "punti angolosi" ce ne sono infiniti. A rigore, per funzioni concave si parla anche di *supergradiente*.

>cerchiamo di costruire s.

- Si vuole definire il subgradiente della funzione Lagrangiana:

$$
z_{LR}(\bar\lambda) = \mathbf{c}\bar{\mathbf{x}} + \bar\lambda(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) \qquad (79)
$$

- Per ogni $\lambda \ge \mathbf{0}$ si ha che:

$$
z_{LR}(\lambda) \le \mathbf{c}\bar{\mathbf{x}} + \lambda(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) \qquad (80)
$$

- Sottraendo dalla (80) la (79) si ottiene:

$$
z_{LR}(\lambda) - z_{LR}(\bar\lambda) \le (\lambda - \bar\lambda)(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) \qquad (81)
$$

	oppure

$$
z_{LR}(\lambda) \le z_{LR}(\bar\lambda) + (\lambda - \bar\lambda)(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) \qquad (82)
$$

	Per cui $\mathbf{s} = (\mathbf{b} - \mathbf{A}\bar{\mathbf{x}})$ è un subgradiente della funzione Lagrangiana $z_{LR}(\lambda)$ calcolata nel punto $\bar\lambda$.

>> In pratica il subgradiente è "gratis": è il vettore delle violazioni dei vincoli rilassati nella soluzione $\bar{\mathbf{x}}$ del problema Lagrangiano. $s_i > 0$ ⇒ vincolo $i$ violato ($\mathbf{a}_i\bar{\mathbf{x}} < b_i$) ⇒ la penalità $\lambda_i$ aumenta; $s_i < 0$ ⇒ vincolo soddisfatto con margine ⇒ $\lambda_i$ diminuisce.

- Affinché $z_{LR}(\lambda)$ sia maggiore di $z_{LR}(\bar\lambda)$ è necessario muoversi nella direzione del subgradiente, perché $(\lambda - \bar\lambda)(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) > 0$. Quindi, è necessario che:

$$
\lambda = \bar\lambda + \theta\mathbf{s} \qquad (83)
$$

	dove $\theta > 0$ è lo spostamento lungo il subgradiente.
- Lo spostamento $\theta$ può essere calcolato in diversi modi:
	- in modo *esatto* risolvendo il problema:

$$
\theta^* = \operatorname{argmax}\left\{ z_{LR}(\bar\lambda + \theta\mathbf{s}) : \theta > 0 \right\} \qquad (84)
$$

		garantendo che $z_{LR}(\bar\lambda + \theta^*\mathbf{s}) \ge z_{LR}(\bar\lambda)$, però potrebbe essere molto costoso.
	- in modo euristico, solitamente valutando una semplice espressione, ma non può essere garantito che $z_{LR}(\bar\lambda + \theta^*\mathbf{s}) \ge z_{LR}(\bar\lambda)$.
>bisogna valutare un modo per capire il valore del passo per avvicinarmi al massimo.

>> Dalla (82): se $(\lambda - \bar\lambda)\mathbf{s} \le 0$ allora $z_{LR}(\lambda) \le z_{LR}(\bar\lambda)$, cioè non si può migliorare. Con $\lambda = \bar\lambda + \theta\mathbf{s}$ si ha $(\lambda - \bar\lambda)\mathbf{s} = \theta\|\mathbf{s}\|^2 > 0$: la condizione è necessaria, ma non sufficiente. Il subgradiente, a differenza del gradiente, non è sempre una direzione di salita: per questo il metodo non è monotono e si tiene traccia del miglior $z_{LR}$ trovato.

- Ad ogni iterazione $k$ del subgradiente lo spostamento $\theta^k$ può essere calcolato con uno dei seguenti approcci euristici:
	- ***Polyak-type step size*:** (abbiamo la )

$$
\theta^k = \beta^k \frac{\bar z - z_{LR}(\boldsymbol{\lambda}^k)}{\|\mathbf{s}^k\|_2^2} \qquad (85)
$$

		dove $\bar z$ è una stima per difetto della soluzione ottima del Lagrangiano duale $z_{LR}$, i.e., $\bar z \le z_{LR}$. In questo caso, se $0 < \beta^k \le 2$ allora la convergenza di $z_{LR}(\boldsymbol{\lambda}^k)$ a $z_{LR}$ è garantita.
		In alternativa si può sostituire $\bar z$ con un valido upper bound $z_{UB}$. Oppure si può sovrastimare $z_{LR}(\boldsymbol{\lambda}^k)$ come segue:

$$
\theta^k = \beta^k \frac{0.01 \times z_{LR}(\boldsymbol{\lambda}^k)}{\|\mathbf{s}^k\|_2^2} \qquad (86)
$$

		Il parametro $\beta^k$ può essere diminuito (e.g., dimezzato) se dopo un certo numero di iterazioni $z_{LR}(\boldsymbol{\lambda}^k)$ non è migliorato.

>scegliere il beta giusto mi consente di avere la giusta convergenza.

>> Attenzione: con $\bar z \le z_{LR}$ il numeratore $\bar z - z_{LR}(\boldsymbol{\lambda}^k)$ diventa $\le 0$ appena $z_{LR}(\boldsymbol{\lambda}^k)$ supera $\bar z$, e il passo si annulla o cambia verso: il risultato classico garantisce la convergenza fino al livello $\bar z$ (con $\bar z = z_{LR}$ convergenza all'ottimo). Per questo nella pratica si usa quasi sempre $\bar z = z_{UB}$, stima per eccesso, che rende il numeratore positivo.
>> La (86) corrisponde a $\bar z = 1.01 \times z_{LR}(\boldsymbol{\lambda}^k)$, cioè una stima "1% sopra" il valore corrente; ha senso se $z_{LR}(\boldsymbol{\lambda}^k) > 0$.

- Altri approcci euristici per il calcolo dello spostamento $\theta^k$ sono:
	- **Constant step size**: $\theta^k = h$;
	- **Constant step length**: $\theta^k = h / \|\mathbf{s}^k\|_2$;
	- **Square summable but not summable**:

$$
\sum_{k=1}^{\infty} (\theta^k)^2 < \infty \ \text{ and } \ \sum_{k=1}^{\infty} \theta^k = \infty;
$$

		Per esempio, $\alpha^k = a/(b+k)$, dove $a > 0$ e $b \ge 0$.
	- **Diminishing step size**:

$$
\lim_{k \to \infty} \theta^k = 0 \ \text{ and } \ \sum_{k=1}^{\infty} \theta^k = \infty.
$$

		Per esempio, $\alpha^k = a/\sqrt{k}$, dove $a > 0$.

>> Refuso: negli esempi $\alpha^k$ va letto come $\theta^k$ (es. $\theta^k = a/(b+k)$ e $\theta^k = a/\sqrt{k}$).
>> Perché queste condizioni: $\sum \theta^k = \infty$ garantisce che i passi possano portare arbitrariamente lontano (si raggiunge l'ottimo da qualunque punto di partenza), mentre $\theta^k \to 0$ evita di "rimbalzare" per sempre attorno all'ottimo. Con passo costante o lunghezza costante si converge solo a un intorno dell'ottimo, tanto più piccolo quanto più è piccolo $h$.

- Quando la penalità Lagrangiana $\lambda_i$ è aggiornata si deve tenere conto di eventuali vincoli sul segno:
	- $\mathbf{a}_i\mathbf{x} = b_i$: la penalità $\lambda_i$ può essere qualsiasi (sia negativa che positiva),

$$
\lambda_i^{k+1} = \lambda_i^k + \theta^k s_i \qquad (87)
$$

	- $\mathbf{a}_i\mathbf{x} \ge b_i$: la penalità $\lambda_i$ deve essere non negativa (>= 0),

$$
\lambda_i^{k+1} = \max\left\{0, \lambda_i^k + \theta^k s_i\right\} \qquad (88)
$$

	- $\mathbf{a}_i\mathbf{x} \le b_i$: la penalità $\lambda_i$ deve essere non positiva (<= 0),

$$
\lambda_i^{k+1} = \min\left\{0, \lambda_i^k + \theta^k s_i\right\} \qquad (89)
$$

>> Questi segni valgono con la convenzione delle slide, termine $+\lambda(\mathbf{b} - \mathbf{A}\mathbf{x})$ in un problema di minimo: per un vincolo $\le$ si usa $\lambda_i \le 0$ così che la penalità $\lambda_i(b_i - \mathbf{a}_i\mathbf{x})$ sia $\le 0$ sulle soluzioni ammissibili. Equivalentemente si può scrivere il vincolo come $-\mathbf{a}_i\mathbf{x} \ge -b_i$ e usare $\lambda_i \ge 0$.

**Algoritmo del Subgradiente:** (banale dice il prof:/)

**Step 1.** Sia $z_P = \min\{\mathbf{c}\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \in X\}$, dove $\mathbf{A} \in \mathbb{R}^{mn}$, $\mathbf{c} \in \mathbb{R}^n$ e $\mathbf{b} \in \mathbb{R}^m$. Poni $z_{LB} = -\infty$, $z_{UB} = +\infty$ e $\boldsymbol{\lambda} = \mathbf{0}$. (il lambda si può anche scegliere casualmente, ma il prof preferisce partire da zero, #es : di solito ce lo dice lui come partire, se non ce lo dice dobbiamo sceglierlo noi in base alle condizioni)

**Step 2.** Risolvi il problema Lagrangiano:

$$
z_{LR}(\boldsymbol{\lambda}) = (\mathbf{c} - \boldsymbol{\lambda}\mathbf{A})\bar{\mathbf{x}} + \boldsymbol{\lambda}\mathbf{b} = \min\{(\mathbf{c} - \boldsymbol{\lambda}\mathbf{A})\mathbf{x} + \boldsymbol{\lambda}\mathbf{b} : \mathbf{x} \in X\}
$$

e aggiorna il lower bound $z_{LB} = \max\{z_{LB}, z_{LR}(\boldsymbol{\lambda})\}$.

**Step 3.** Se $\bar{\mathbf{x}}$ è ammissibile $z_{UB} = \min\{z_{UB}, \mathbf{c}\bar{\mathbf{x}}\}$ e se ottima STOP.

**Step 4.** Aggiorna le penalità Lagrangiane:

$$
\lambda_i = \max\{0, \lambda_i + \theta s_i\}, \quad i = 1, \dots, m,
$$

dove $s_i = b_i - \mathbf{a}_i\bar{\mathbf{x}}$, e vai allo Step 2.

>contributo: algoritmo abbastanza facile da implementare senza dover risolvere l'intero problema originale.

>> Step 3: $\bar{\mathbf{x}}$ ammissibile per P non basta per l'ottimalità, perché $z_{LR}(\boldsymbol{\lambda}) = \mathbf{c}\bar{\mathbf{x}} + \boldsymbol{\lambda}(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) \le \mathbf{c}\bar{\mathbf{x}}$. È ottima se vale anche la complementarità $\boldsymbol{\lambda}(\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}) = 0$ (allora $z_{LR}(\boldsymbol{\lambda}) = \mathbf{c}\bar{\mathbf{x}}$), o più in generale quando $z_{LB} = z_{UB}$.
>> Nella pratica servono anche altri criteri di arresto (numero massimo di iterazioni, $\theta$ o $\beta$ troppo piccoli, $\mathbf{s} = \mathbf{0}$), perché il subgradiente spesso non dimostra l'ottimalità.

---
## Slide 74 – **Euristica Lagrangiana** 

>buona categoria di metauristiche

**Step 1.** Calcola una soluzione euristica del problema P e inizializza il subgradiente;

**Step 2.** Calcola $z_{LR}(\boldsymbol{\lambda})$ ottenendo la soluzione $\mathbf{x}$;

**Step 3.** Verifica l'ammissibilità della soluzione $\mathbf{x}$;

**Step 4.** Costruisci una soluzione ammissibile per il problema P utilizzando $\mathbf{x}$ e/o $\boldsymbol{\lambda}$; (applicando una tecnica euristica di repairing)

**Step 5.** Se si verificano le condizioni di arresto allora STOP;

**Step 6.** Aggiorna le penalità Lagrangiane $\boldsymbol{\lambda}$ e vai allo Step 2.

>> Idea: la soluzione $\mathbf{x}$ del problema Lagrangiano di solito viola "di poco" i vincoli rilassati; allo Step 4 la si ripara con un'euristica (es. togliendo o spostando gli elementi che violano i vincoli), oppure si usano i costi penalizzati $\mathbf{c} - \boldsymbol{\lambda}\mathbf{A}$ come guida per un'euristica greedy. Così a ogni iterazione si ottiene sia un lower bound ($z_{LR}(\boldsymbol{\lambda})$) sia, possibilmente, un upper bound migliore, e il gap $z_{UB} - z_{LB}$ misura la qualità della soluzione.

---
## Slide 75 -> 78 – Rilassamento Lagrangiano: esempio

**Generalized Assignment Problem (GAP)**
- Il Generalized Assignment Problem (GAP) è il problema di ***assegnare*** un insieme di ***server*** $I$, a un insieme di ***client*** $J$, minimizzando i costi di assegnamento.
- Ogni server $i$ ha una capacità massima $Q_i$.
- Ogni client $j$ deve essere assegnato a esattamente un server.
- Se il server $i$ è assegnato al client $j$ si paga un costo $c_{ij}$ e si consuma una quantità $q_{ij}$ della capacità $Q_i$.
- Per costruire il modello matematico definiamo le variabili binarie $x_{ij}$ che devono essere uguali a 1 se il server $i$ è stato assegnato al client $j$, 0 altrimenti.

- Un modello per il problema GAP è:

$$
\begin{array}{rllr}
z_{GAP} = \min & \displaystyle\sum_{i \in I}\sum_{j \in J} c_{ij}x_{ij} & & (90)\\
\text{s.t.} & \displaystyle\sum_{i \in I} x_{ij} = 1, & j \in J & (91)\\
 & \displaystyle\sum_{j \in J} q_{ij}x_{ij} \le Q_i, & i \in I & (92)\\
 & x_{ij} \in \{0, 1\}, & i \in I, j \in J & (93)
\end{array}
$$

- Se vogliamo applicare il rilassamento Lagrangiano quali vincoli conviene rilassare?
- Proviamo prima a rilassare i vincoli (91) e poi i vincoli (92) e vediamo quali problemi Lagrangiani dobbiamo risolvere.

>> ~~(91) sono i vincoli di assegnamento~~ (ogni client a un solo server), (92) i vincoli di capacità dei server -> knapsack.

- Se rilassiamo i vincoli (91) in funzione obiettivo utilizzando le penalità Lagrangiane $\lambda_j$, il problema Langrangiano LR1 sarà:

$$
\begin{array}{rllr}
z_{LR1} = \min & \displaystyle\sum_{i \in I}\sum_{j \in J} (c_{ij} + \lambda_j)x_{ij} - \sum_{j \in J} \lambda_j & & (94)\\
\text{s.t.} & \displaystyle\sum_{j \in J} q_{ij}x_{ij} \le Q_i, & i \in I & (95)\\
 & x_{ij} \in \{0, 1\}, & i \in I, j \in J & (96)
\end{array}
$$

- Siccome abbiamo rilassato delle equazioni, le penalità Lagrangiane non hanno vincoli di segno.
- Come si può notare, ~~dobbiamo risolvere un insieme di Knapsack Problem indipendenti, uno per ogni server $i \in I$.~~
- In questo caso si può dimostrare che $z_{LR1}$ può essere strettamente maggiore del rilassamento continuo del GAP.

>> La (94) si ottiene aggiungendo all'obiettivo $\sum_j \lambda_j(\sum_i x_{ij} - 1)$. Rispetto alla convenzione $\lambda(\mathbf{b} - \mathbf{A}\mathbf{x})$ usata finora il segno è invertito, ma per vincoli di uguaglianza $\lambda_j$ è libero, quindi è equivalente (basta sostituire $\lambda_j$ con $-\lambda_j$).
>> Per ogni server $i$: $\min \sum_j (c_{ij} + \lambda_j)x_{ij}$ con un solo vincolo di capacità e variabili binarie = knapsack (in forma di minimo: conviene prendere solo i client con costo penalizzato $c_{ij} + \lambda_j < 0$). **Il knapsack non ha la proprietà di integralità, per questo $z_{LR1}$ può superare $z_{LP}$, al prezzo di risolvere $|I|$ problemi NP-hard** (in pratica facili, pseudo-polinomiali con la programmazione dinamica).

- Se rilassiamo i vincoli (92) in funzione obiettivo utlizzando le penalità Lagrangiane $\lambda_i \ge 0$, il problema Langrangiano LR1 sarà un assegnamento:

$$
\begin{array}{rllr}
z_{LR2} = \min & \displaystyle\sum_{i \in I}\sum_{j \in J} (c_{ij} + \lambda_i q_{ij})x_{ij} - \sum_{i \in I} \lambda_i Q_i & & (97)\\
\text{s.t.} & \displaystyle\sum_{i \in I} x_{ij} = 1, & j \in J & (98)\\
 & x_{ij} \in \{0, 1\}, & i \in I, j \in J & (99)
\end{array}
$$

- In questo caso si può dimostrare che $z_{LR2}$ NON può essere strettamente maggiore del rilassamento continuo del GAP.
- Quindi, il rilassamento LR1 ha il potenziale per fornire un lower bound migliore del rilassamento LR2.

>logica: mi tengo tanti piccoli problemi NP-hard e riesco ad ottenere un bound strettamente migliore del rilassamento continuo.

>> Refuso: il problema Lagrangiano che si ottiene qui è LR2, non LR1 (come indica $z_{LR2}$ nella (97)).
>> La (97) si ottiene aggiungendo $\sum_i \lambda_i(\sum_j q_{ij}x_{ij} - Q_i)$, che è $\le 0$ sulle soluzioni ammissibili perché $\lambda_i \ge 0$: corretto per un problema di minimo.
>> Più che un assegnamento classico è un semi-assegnamento: ogni client $j$ si assegna indipendentemente al server con costo penalizzato minimo $\min_i (c_{ij} + \lambda_i q_{ij})$, in tempo $O(|I||J|)$. Questi vincoli hanno la proprietà di integralità (slide 63), quindi $z_{LR2} = z_{LP}$: il bound è facile da calcolare ma non migliore del rilassamento continuo.
---
## Slide 79 -> 82 – Introduzione al **Column Generation**

- I metodi di generazione di colonne risolvono il problema senza considerare esplicitamente tutte le variabili.
- Si definisce un *core* iniziale che considera solo un sottoinsieme delle variabili, dopodiché si aggiungono dinamicamente le variabili mancanti "necessarie" durante il processo di soluzione.
- Si consideri il seguente problema di programmazione lineare:

$$
\begin{array}{rrl}
z_P = & \min & cx \\
 & \text{s.t.} & Ax = b \\
 & & x \ge 0
\end{array}
$$

- Il problema duale è il seguente:

$$
\begin{array}{rrl}
z_D = & \max & wb \\
 & \text{s.t.} & wA \le c
\end{array}
$$

>> ~~Il duale di un problema in forma standard (vincoli di uguaglianza) ha variabili $w$ libere in segno~~ ~~su tutto il dominio R~~. L'idea del column generation è che un numero enorme di colonne di $A$ corrisponde a un numero enorme di vincoli $w a_j \le c_j$ del duale: se ne considerano pochi alla volta e si aggiunge solo quello più violato.

- Il simplesso primale esegue iterativamente le seguenti operazioni:
	- Selezione di una colonna $s$ di $A$ (*variabile entrante*);
	- Selezione di una riga $r$ di $A$ (*variabile uscente*);
	- Esecuzione di un'operazione di pivoting sull'elemento pivot $a_{rs}$.
- Sia $B$ una base della matrice dei vincoli $A$.
- Possiamo definire le seguenti entità:

$$
\begin{array}{rcl}
\color{red}{w = c_B B^{-1}} & : & \text{variabili duali associate alla base } B; \\
\color{red}{\bar b = B^{-1} b} & : & \text{valore delle variabili in base;} \\
\color{red}{a_j} & : & \text{colonna } j \text{ della matrice } A; \\
\color{red}{\bar c_j = w a_j - c_j} & : & \text{costo ridotto associato alla variabile } x_j; \\
\color{red}{\bar y_j = B^{-1} a_j} & : & \text{colonna } j \text{ della matrice } B^{-1}A.
\end{array}
$$
>le colonne $a_{j}$ all'inizio non le abbiamo tutte, le dobbiamo generare. come si fa?

- Le operazioni del metodo del simplesso primale possono essere riassunte come segue:

|                                            | Simplesso Primale                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------------------ |
| Test di ottimalità                         | $\bar c_j = w a_j - c_j \le 0, j = 1, \dots, n$                                            |
| Variabile entrante                         | $s = argmax\{\bar c_j : j = 1, \dots, n\}$                                                 |
| Variabile uscente<br>(con rapporto minimo) | $r = argmin\left\{\frac{\bar b_i}{\bar y_{is}} : \bar y_{is} > 0, i = 1, \dots, m\right\}$ |
| Elemento di pivoting                       | $\bar y_{rs}$                                                                              |

>> Qui si sta minimizzando e il costo ridotto è definito come $w a_j - c_j$: la colonna entrante è quella con $\bar c_j$ massimo (positivo), e si è all'ottimo quando tutti i $\bar c_j \le 0$. È esattamente il problema di *pricing* delle slide successive.

- Simplesso in formato tableau:

$$
\begin{array}{c|ccc|ccc|c|l}
z & x_1 & \dots & x_m & x_{m+1} & \dots & x_n & & \\ \hline
1 & & -c_B & & & -c_N & & 0 & z - c_B x_B - c_N x_N = 0 \\ \hline
0 & & & & & & & & \\
\vdots & & B & & & N & & b & B x_B + N x_N = b \\
0 & & & & & & & &
\end{array}
$$

$$
\begin{array}{c|ccc|ccc|c}
z & x_1 & \dots & x_m & x_{m+1} & \dots & x_n & \\ \hline
1 & 0 & \dots & 0 & & \bar c_N = c_B B^{-1} N - c_N & & \bar c_0 = c_B B^{-1} b \\ \hline
0 & & & & & & & \\
\vdots & & I & & & \bar Y = B^{-1} N & & \bar b = B^{-1} b \\
0 & & & & & & &
\end{array}
$$

>> Il secondo tableau si ottiene dal primo premoltiplicando le righe dei vincoli per $B^{-1}$ e sommando alla riga 0 la combinazione $c_B B^{-1}$ di quelle righe. Nella riga 0 si leggono quindi i costi ridotti $\bar c_N$ e il valore dell'obiettivo $c_B B^{-1} b$; per calcolare il costo ridotto di una colonna nuova $a_j$ (che non è nel tableau) basta conoscere $w = c_B B^{-1}$: $\bar c_j = w a_j - c_j$.

---
## Slide 83 -> 86 – ~~Algoritmo~~ Column Generation

- Si consideri il seguente problema di programmazione lineare:

$$
\begin{array}{rllr}
z(P) = \min & \displaystyle\sum_{j=1}^{n} c_j x_j & & (100) \\
\text{s.t.} & \displaystyle\sum_{j=1}^{n} a_{ij} x_j = b_i, & i = 1, \dots, m & (101) \\
 & x_j \ge 0, & j = 1, \dots, n & (102)
\end{array}
$$

- Data una base $B$ di $A$, la corrispondente soluzione base può essere migliorata se esiste una colonna $h$ tale che $\bar c_h > 0$, dove:

$$
\bar c_h = \max\left\{\bar c_j = w a_j - c_j : j = 1, \dots, n\right\} > 0
$$

- Ad ogni iterazione è necessario determinare se esiste una colonna $a_h$ di costo $c_h$ tale che $\bar c_h = w a_h - c_h > 0$ risolvendo il *problema di pricing*:

$$
\bar c_h = \max\left\{\bar c_j = w a_j - c_j : j = 1, \dots, n\right\} > 0 \qquad (103)
$$

- L'applicazione del simplesso può risultare proibitiva se il numero di colonne è elevato.
- In alcuni casi la struttura del problema di pricing (103) è tale da consentire la soluzione senza considerare esplicitamente tutte le variabili (colonne) del problema originario.
- Il metodo prende il nome di *generazione di colonne* perché nella soluzione del problema di pricing (103) le variabili (colonne) del problema vengono generate solo quando servono.

>> Il punto chiave: il ~~pricing~~ non ~~si risolve~~ enumerando le colonne, ma ~~come un problema di ottimizzazione in cui le "variabili" sono i coefficienti della colonna $a_j$~~ (nel Cutting Stock diventa un problema di knapsack, slide 93).

**Algoritmo Column Generation**

**Step 1.** Definisci una base ammissibile iniziale $B$;

**Step 2.** Calcola la soluzione base corrispondente a $B$:
	$x = (x_B, 0) = (B^{-1} b, 0)$;
	e la corrispondente soluzione duale:
	$w = c_B B^{-1}$ ( 'variabile duale ottima corrente' ?); 

**Step 3.** Risolvi il problema di pricing, generando la variabile $h$ di costo ridotto $\bar c_h = w a_h - c_h$ massimo; 
>il pricing serve per trovare una nuova colonna (una alla volta nei casi basi) da aggiungere alla soluzione che ci permette di convergere

**Step 4.** Se il costo ridotto $\bar c_h \le 0$ allora STOP: la soluzione $x$ è ottima e non è necessario generare altre colonne; altrimenti calcola la nuova base $B$ e vai allo Step 2.

>> Il problema ristretto alle sole colonne generate si chiama *problema master ristretto*. Allo Step 4, se $\bar c_h \le 0$ per la colonna migliore, vale $w a_j \le c_j$ per **tutte** le colonne: $w$ è ammissibile per il duale completo e, con $x$ primale ammissibile e di pari valore, la soluzione è ottima anche per il problema con tutte le colonne.

**Figura:** Schema di funzionamento dell'algoritmo Column Generation:
![[RO04-s086-1.png|500]]

>> Lo schema: il **problema master** (problema originale dove non ho tutte le colonne) passa le variabili duali $w$ ottime al **generatore di colonne (sottoproblema-pricing)**, che restituisce le colonne con costo ridotto positivo. 
>> 
>> Il simplesso sul master garantisce a) e b) (scarti complementari), il pricing verifica c): quando non trova colonne con $\bar c_h > 0$ anche la c) è soddisfatta e la soluzione è ottima.

---
## Slide 87 – Cutting Stock Problem, Gilmore e Gomory (1960)

**Descrizione del Problema**

- Sia $I$ un insieme di $n$ oggetti ognuno dei quali di lunghezza pari a $\ell_i$, $i = 1, \dots, n$.
- Sia $n_i$ il numero di pezzi che si devono produrre per ogni oggetto $i$, $i = 1, \dots, n$.
- Sia $L$ la lunghezza delle barre (*master*) dalle quali tagliare gli oggetti necessari.
- Una *configurazione di taglio* (*pattern*) $k$ è una possibile configurazione di taglio di un sottoinsieme di oggetti $I_k \subseteq I$ da una barra master (i.e., $\sum_{i \in I_k} a_{ik} \ell_i \le L$, dove $a_{ik}$ è il numero di oggetti $i$ nel pattern $k$).
>come la genero?
>- le genero tutte e tengo solo quelle che rispettano i vincoli -> infattibile
>- column generation -> yes.

---
## Slide 88 -> 89 – Cutting Stock Problem: esempio

Si consideri il seguente esempio, in cui si devono produrre i seguenti 3 oggetti:

| Oggetto | $\ell_i$ (m) | $n_i$ |
| :-----: | :----------: | :---: |
|    A    |      5       |  150  |
|    B    |      7       |  200  |
|    C    |      9       |  300  |

Le barre da cui tagliare gli oggetti richiesti ha lunghezza $L = 20$m

Alcune configurazioni di taglio possibili sono le seguenti:

![[RO04-s089-1.png|650]]

>> Le tre barre da 20: $7 + 9$ con sfrido 4; $5 + 5 + 7$ con sfrido 3; $5 + 5 + 9$ con sfrido 1. Sono i pattern 1, 2 e 3 della tabella sotto.

Altre configurazioni:

| | Pattern 1 | Pattern 2 | Pattern 3 | Pattern 4 | Pattern 5 |
|---|:---:|:---:|:---:|:---:|:---:|
| A (5 m) | 0 | 2 | 2 | 4 | 1 |
| B (7 m) | 1 | 1 | 0 | 0 | 2 |
| C (9 m) | 1 | 0 | 1 | 0 | 0 |

>> Ogni pattern è una colonna $a_k$ e deve rispettare $\sum_i a_{ik} \ell_i \le 20$: $16$, $17$, $19$, $20$, $19$, tutti ammissibili. Con solo 3 lunghezze i pattern sono pochi, ma con decine di oggetti diversi il loro numero esplode: per questo si usa il column generation.

---
## Slide 90 -> 91 – Cutting Stock Problem: **modello**

**Formulazione Matematica del Problema**

- Sia $J$ l'insieme degli indici di tutte le possibili configurazioni di taglio.
- Sia inoltre $a_{ij}$ il numero di volte in cui l'oggetto $i$ è tagliato nella configurazione $j$, $i \in I$, $j \in J$.
- L'obiettivo del problema è quello di tagliare dalle barre tutti i pezzi necessari minimizzando il numero di barre necessarie. (si sotto-intende di avere un numero limitato di barre, non ce il rischio di non trovare la soluzione ammissibile perché non ci sono abbastanza barre)
- Sia $y_j$ una variabile intera non negativa che rappresenta il numero di volte in cui la configurazione $j \in J$ è usata per tagliare dei pezzi.
- La formulazione matematica del problema è la seguente:

$$
\begin{array}{rllr}
z_P = \min & \displaystyle\sum_{j \in J} y_j & & (104) \\
\text{s.t.} & \displaystyle\sum_{j \in J} a_{ij} y_j \ge n_i, & i \in I & (105) \\
 & y_j \ge 0 \text{ intero}, & j \in J & (106)
\end{array}
$$
 
- Si noti che la cardinalità dell'insieme $J$ può essere grande.
- Il rilassamento lineare (LP) del problema P lo si ottiene sostituendo i vincoli (106) con i seguenti:

$$
y_j \ge 0, \quad j \in J \qquad (107)
$$

>> Tutti i costi $c_j$ valgono $1$ (ogni pattern usato consuma una barra): per questo nel costo ridotto della slide seguente compare "$-1$". I vincoli sono $\ge$, quindi le variabili duali $w_i$ sono $\ge 0$: $w_i$ si interpreta come il "valore" (in frazioni di barra) di un pezzo di tipo $i$.

---
## Slide 92 -> 95 – Cutting Stock Problem: Column Generation **Algorithm**

- Sia $LP'$ il problema 'ridotto' ottenuto da $LP$ sostituendo l'insieme $J$ delle configurazioni con il sottoinsieme $J' \subset J$ (si suppone che $J'$ sia tale da garantire che $LP'$ ammetta una soluzione ammissibile).
- Si risolva il problema $LP'$ e siano $w_i$, $i \in I$, le variabili duali associate ai vincoli di $LP'$.
- Il costo ridotto di ogni configurazione $j \in J$ è dato da:

$$
\bar c_j = \sum_{i \in I} a_{ij} w_i - 1 \qquad (108)
$$
> -1 per il costo costante di ogni variabile.
- Se esiste almeno una configurazione non contenuta in $J'$ di costo ridotto positivo, i.e.:

$$
\max_{j \in J \setminus J'} [\bar c_j] > 0 \qquad (109)
$$

allora la soluzione base corrente non è ottima per LP.

- Siccome i costi ridotti $\bar c_j$, $j \in J'$, sono non positivi:

$$
\max_{j \in J \setminus J'} \left\{\sum_{i \in I} a_{ij} w_i - 1\right\} = \max_{j \in J} \left\{\sum_{i \in I} a_{ij} w_i - 1\right\} \qquad (110)
$$

che equivale a risolvere il seguente problema:

$$
\begin{array}{rllr}
z_{SP} = \max & \displaystyle\sum_{i \in I} w_i z_i - 1 & & (111) \\
\text{s.t.} & \displaystyle\sum_{i \in I} \ell_i z_i \le L & & (112) \\
 & z_i \ge 0 \text{ intero}, & i \in I & (113)
\end{array}
$$

dove $z_i$, $i \in I$, è una variabile decisionale che rappresenta il numero di volte in cui l'oggetto $i$ è tagliato nella *nuova configurazione*.

>> L'uguaglianza (110) vale quando il massimo è positivo (cioè proprio nel caso che interessa): le colonne già in $J'$ hanno $\bar c_j \le 0$ perché $LP'$ è stato risolto all'ottimo, quindi non possono dare il massimo. Il pricing può allora cercare su **tutto** $J$, senza preoccuparsi di escludere le colonne già generate.
>> Il vincolo (112) dice che $z$ è un pattern ammissibile: l'insieme dei vettori $z$ interi che lo soddisfano è esattamente l'insieme delle colonne di $J$. Il pricing è quindi un **knapsack intero** (non binario: un oggetto può comparire più volte nel pattern) con profitti $w_i$ e pesi $\ell_i$.

**Algoritmo Column Generation**

**Step 1.** Si generi un insieme iniziale $J'$ di configurazioni di taglio in modo che il problema $LP'$ abbia una soluzione ammissibile;

**Step 2.** Si risolva il problema $LP'$ definito sull'insieme di configurazioni $J'$. Sia $y^*$ la soluzione ottima primale e sia $w^*$ la corrispondente soluzione duale;

**Step 3.** Si risolva il seguente problema di knapsack intero:

$$
\begin{array}{rllr}
z_{SP} = \max & \displaystyle\sum_{i \in I} w_i^* z_i & & (114) \\
\text{s.t.} & \displaystyle\sum_{i \in I} \ell_i z_i \le L & & (115) \\
 & z_i \ge 0 \text{ intero}, & i \in I & (116)
\end{array}
$$

Sia $\mathbf{z}^*$ la soluzione ottima si SP;

**Step 4.** Se $\sum_{i \in I} w_i^* z_i^* \le 1$ allora STOP: $\mathbf{y}^*$ è la soluzione ottima per il rilassamento LP; altrimenti aggiungi a $J'$ la colonna (nuova configurazione) data dalla soluzione $\mathbf{z}^*$ e vai allo Step 2.

>> Rispetto a (111) qui il "$-1$" è tolto dall'obiettivo e spostato nel test dello Step 4: $z_{SP} \le 1$ equivale a costo ridotto massimo $\le 0$.
>> Un $J'$ iniziale sempre ammissibile (Step 1): un pattern "omogeneo" per ogni oggetto, con $\lfloor L/\ell_i \rfloor$ pezzi di tipo $i$.

**NOTA:**
L'Algoritmo Column Generation risolve all'ottimo il rilassamento lineare del problema originario. Quindi, la soluzione può essere frazionaria.

>> Esempio svolto (dati di slide 88–89), verificato con un solver, partendo da $J'$ = i 5 pattern della tabella:
>> - Iterazione 1: $LP' = 300$ barre (es. 225 volte il pattern 1 e 75 volte il pattern 3), una soluzione duale ottima è $w^* = (0, 0, 1)$. Knapsack: il pattern $z^* = (0, 0, 2)$ (due pezzi C, $18 \le 20$) vale $2 > 1$ ⇒ si aggiunge la colonna.
>> - Iterazione 2: $LP' = 262.5$ con $y = 12.5$ (pattern 4, $4 \times$A), $100$ (pattern 5, A+2B), $150$ (nuovo, 2C); $w^* = \left(\frac14, \frac38, \frac12\right)$. Ora il knapsack vale al massimo $1$ ($4 \cdot \frac14 = \frac14 + 2 \cdot \frac38 = 2 \cdot \frac12 = 1$) ⇒ STOP.
>> - L'ottimo di $LP$ è $262.5$, frazionario. Siccome $\lceil 262.5 \rceil = 263$ è un lower bound per il problema intero e arrotondando $12.5 \to 13$ si ottiene una soluzione intera da $13 + 100 + 150 = 263$ barre, questa è ottima: un caso in cui il "rounding" della slide 96 funziona perfettamente.

---
## Slide 96 -> 97 – Considerazioni

- Nel caso di problemi di Programmazione Lineare, l'algoritmo column generation determina la soluzione ottima del problema.
- Nel caso di problemi di Programmazione Intera, come il Cutting Stock Problem, l'algoritmo column generation applicato al rilassamento lineare del problema può terminare con una soluzione che risulta frazionaria.
- Usualmente i problemi classificati come Cutting Stock Problem richiedono di tagliare poche tipologie di oggetti in grandi quantità. In questo caso si può ottenere una soluzione euristica di ottima qualità applicando un semplice "rounding".
- Per i problemi che richiedono di tagliare molte tipologie di oggetti in piccole quantità (*Bin Packing Problem*) il "rounding" può produrre soluzioni di qualità non adeguata.

>> Perché: arrotondando per eccesso ogni $y_j$ frazionario si usa al più una barra in più per ogni pattern in base, cioè al più $|I|$ barre in più (le variabili in base sono al più quante i vincoli). Con 3 tipi di oggetto e centinaia di barre l'errore è trascurabile; nel Bin Packing (molti tipi, $n_i$ piccoli, poche barre in totale) le stesse $|I|$ barre in più possono essere una frazione enorme della soluzione.

- In questo caso è necessario applicare un algoritmo di tipo branch and bound per determinare la soluzione ottima intera. Per il calcolo del lower bound si può sempre utilizzare una tecnica *column generation*.
- Questi metodi prendono il nome di metodi *Branch and Price*.

>> Branch and Price = branch and bound in cui il lower bound di ogni nodo si calcola con column generation (il "price" è il pricing). Va fatto con attenzione: le regole di branching devono essere compatibili con il pricing, altrimenti il sottoproblema può rigenerare proprio le colonne vietate dal branching.

---
## Slide 98 – Generazione dei Vincoli

- Abbiamo visto che per migliorare il rilassamento continuo di un problema di programmazione lineare intera possiamo aggiungere delle **disuguaglianze valide**.
- Una disuguaglianza valida è un vincolo che elimina delle soluzioni frazionarie senza eliminare delle soluzioni intere, quindi è un vincolo ridondante nella formulazione originaria intera del problema.
- Ora vediamo che per alcuni modelli il numero di vincoli necessari (i.e., senza i quali il modello non è valido) può essere molto elevato, anche esponenziale.
- Consideriamo il **Travelling Salesman Problem** (TSP, Problema del Commesso Viaggiatore).

>> La generazione dei vincoli è il "duale" del column generation: là si parte da poche colonne (variabili) e si aggiungono quelle con costo ridotto positivo, qui si parte da pochi vincoli e si aggiungono quelli violati dalla soluzione corrente (*separazione*). Aggiungere un vincolo al primale equivale ad aggiungere una colonna al duale.

---
## Slide 99 -> 104 – Travelling Salesman Problem

- Consideriamo il problema di un autista che deve fare le consegne visitando una e una sola volta ciascun cliente.
- Possiamo rappresentare il problema utilizzando un grafo orientato $G = (V, A)$, dove $V$ è l'insieme dei vertici e $A$ è l'insieme degli archi.
- I vertici $i \in V$ rappresentano i clienti da visitare e il deposito da cui partire e rientrare.
- Gli archi $(i, j) \in A$ rappresentano il tragitto dal vertice $i$ al vertice $j$, a cui è associato un costo $c_{ij}$ (e.g., i chilometri da percorrere, il tempo di guida, etc.). Per semplicità consideriamo il grafo completo.
- Si noti che in questo caso $c_{ij} \ne c_{ji}$, per cui parleremo di **Asymmetric Travelling Salesman Problem** (ATSP, Problema del Commesso Viaggiatore Asimmetrico).

>> Nella Ver.3.0 c'era il refuso $c_{ij} \ne c_{ij}$, corretto nella Ver.3.2: andare da $i$ a $j$ può costare diversamente che tornare da $j$ a $i$ (es. sensi unici). Più precisamente, nell'ATSP i costi *possono* essere diversi; se $c_{ij} = c_{ji}$ per ogni coppia si ha il TSP simmetrico.

- Siano $x_{ij}$ delle variabili binarie uguali a 1 se l'arco $(i, j)$ è nella soluzione ottima, 0 altrimenti.
- Un modello molto noto per il TSP asimmetrico è il seguente:

$$
\begin{array}{rllr}
z_{TSP} = \min & \displaystyle\sum_{i \in V} \sum_{j \in V} c_{ij} x_{ij} & & (117) \\
\text{s.t.} & \displaystyle\sum_{j \in V} x_{ij} = 1, & i \in V & (118) \\
 & \displaystyle\sum_{j \in V} x_{ji} = 1, & i \in V & (119) \\
 & \displaystyle\sum_{i \in S} \sum_{j \in \bar S} x_{ij} \ge 1, & \forall S \subset V, \bar S = V \setminus S & (120) \\
 & x_{ij} \in \{0, 1\}, & (i, j) \in A & (121)
\end{array}
$$

>> (118): da ogni vertice esce esattamente un arco; (119): in ogni vertice entra esattamente un arco. Insieme a (121) formano un **problema di assegnamento**, le cui soluzioni sono insiemi di cicli disgiunti che coprono tutti i vertici. (120): per ogni sottoinsieme proprio e non vuoto $S$ almeno un arco deve uscire da $S$, quindi nessun ciclo può chiudersi dentro $S$ e resta un solo ciclo hamiltoniano. I vincoli (120) sono $2^{|V|} - 2$: esponenziali.

- I vincoli (120) sono detti ***subtour elimination***, perché eliminano i sottocicli. Possono essere definiti anche in modo diverso.
- L'insieme degli archi $A(S, \bar S) = \{(i, j) \in A : i \in S, j \in \bar S\}$ è detto ***taglio*** determinato dagli insiemi $S$ e $\bar S$.
- Siccome i vincoli (120) sono in un numero esponenziale, invece di generarli tutti, si può risolvere il problema dell'assegnamento ottenuto ignorando questi vincoli.
- Una volta risolto il problema dell'assegnamento, basta identificare se esiste un **sottociclo**. I vertici visitati dal sottociclo rappresentano un insieme $S$ il cui corrispondente vincolo (120) è violato.
- Si aggiunge il vincolo e si riottimizza il problema, che ora non è più un semplice assegnamento e il suo rilassamento lineare può avere soluzioni frazionarie.

>> Esempio: con $V = \{1, \dots, 5\}$ l'assegnamento potrebbe restituire i due cicli $1 \to 2 \to 3 \to 1$ e $4 \to 5 \to 4$. Con $S = \{1, 2, 3\}$ nessun arco va da $S$ a $\bar S = \{4, 5\}$, quindi il vincolo $\sum_{i \in S}\sum_{j \in \bar S} x_{ij} \ge 1$ è violato e lo si aggiunge.
>> Una forma alternativa equivalente (la "definizione diversa" citata) è $\sum_{i \in S}\sum_{j \in S} x_{ij} \le |S| - 1$: dentro $S$ ci possono essere al più $|S| - 1$ archi, quindi nessun ciclo chiuso su $S$.
>> L'assegnamento senza (120) ha matrice totalmente unimodulare, quindi il rilassamento lineare dà già soluzioni intere; aggiungendo i vincoli (120) questa proprietà si perde.

- Anche se le soluzioni sono frazionarie, è possibile determinare se c'è un vincolo (120) violato e identificare il corrispondente insieme $S$.
- Purtroppo, anche per trovare l'ottimo del rilassamento lineare del modello (117)-(121) può essere necessario generare molti vincoli.
- La soluzione del rilassamento lineare può essere molto frazionaria e avere un valore distante dal valore della soluzione ottima intera.
- Per cui, è necessario fare ricorso anche alle disuguglianze valide e a un metodo branch and bound, che in questo caso chiameremo **branch and cut** (i.e., branch and bound + valid inequalities).
- Si noti che i vincoli (120) per eliminare i subtour, sono necessari per la correttezza del modello, per cui siamo obbligati a generarli (in gergo sono dei ***lazy constraints***). Le **valid inequalities** sono opzionali e il loro mancato utilizzo può compromettere solo le prestazioni.

>> **Lazy constraints vs valid inequalities**: senza i vincoli (120) il modello ammette soluzioni con sottocicli, cioè *sbagliate*; quindi ogni soluzione intera trovata va controllata e, se contiene un sottociclo, il vincolo violato va aggiunto per forza. Le disuguaglianze valide invece non tolgono nessuna soluzione intera ammissibile: servono solo a stringere il rilassamento (bound migliori, meno nodi). "Iniqualities" nella slide è un refuso per *inequalities*.
>> Con soluzione frazionaria $x^*$ un vincolo (120) violato si trova come **taglio di capacità minima**: si dà ad ogni arco la capacità $x^*_{ij}$ e si cerca un insieme $S$ con $\sum_{i \in S}\sum_{j \in \bar S} x^*_{ij} < 1$, risolvendo problemi di flusso massimo / taglio minimo (tempo polinomiale). Branch and cut = branch and bound in cui in ogni nodo il rilassamento è rafforzato generando vincoli violati (subtour elimination e altre disuguaglianze valide).

- Gli strumenti matematici sviluppati hanno permesso la soluzione di TSP di enormi dimensioni:

![[RO04-s103-1.png|300]]![[RO04-s103-2.png|300]]

>> A sinistra un tour ottimo che attraversa le città della Germania, a destra lo "Sweden Tour" su 24,978 città della Svezia.

Per l'istanza **World TSP** che conta 1,904,711 città, il lower bound fornito dal codice **Concorde TSP** ha dimostrato che la soluzione trovata nel 2003 da Keld Helsgaun dista al massimo lo 0.076% dall'ottimo e che quella trovata da Yuichi Nagata nel 2025 dista al massimo lo 0.0471%.

![[RO04-s104-1.png|650]]

>> Nella Ver.3.2 la slide aggiunge il miglioramento del 2025: lo stesso lower bound di Concorde certifica che il tour di Nagata è entro lo 0.0471% dall'ottimo, contro lo 0.076% del tour di Helsgaun del 2003. Il gap si riduce perché è migliorata la soluzione euristica (l'upper bound), che si avvicina al lower bound.
>> Qui si vede bene la combinazione di euristica e bound: l'euristica (algoritmo di Lin-Kernighan-Helsgaun) dà un upper bound, il rilassamento rafforzato con tagli (Concorde, branch and cut) dà un lower bound; il loro scarto relativo (gap) certifica la qualità della soluzione anche senza averne dimostrato l'ottimalità.

---
## Riassunto

>> **Perché la PLI è difficile**
>> - Il rilassamento lineare (si tolgono i vincoli di interezza) dà un **lower bound** per un problema di minimo, ma arrotondare la sua soluzione può dare soluzioni non ammissibili o lontane dall'ottimo.
>>
>> **Branch and Bound**
>> - Si risolve il rilassamento. Se la soluzione è frazionaria si sceglie una variabile $x_j = \bar x_j$ frazionaria e si generano due sottoproblemi: $x_j \le \lfloor \bar x_j \rfloor$ e $x_j \ge \lceil \bar x_j \rceil$.
>> - Ogni nodo ha un lower bound (il suo rilassamento). L'upper bound è la miglior soluzione intera trovata finora (incumbent).
>> - Un nodo si chiude se: è inammissibile, la sua soluzione è intera (si aggiorna l'UB), oppure $LB \ge UB$ (non può migliorare l'incumbent).
>> - Visita: depth-first (trova presto soluzioni intere, usa poca memoria), breadth-first, best-first (nodo con LB minore: meno nodi esplorati, più memoria).
>> - Dopo il branching si riparte dal tableau del padre con il **simplesso duale**: il nuovo vincolo rende la base non primale ammissibile ma la lascia duale ammissibile.
>>
>> **Tagli di Gomory**
>> - Dalla riga $i$ del tableau ottimo, con $\bar b_i$ frazionario: $\sum_j F_i^j x_j \ge F_i$, con $F = a - \lfloor a \rfloor \in [0,1)$ (attenzione ai negativi: $F(-\tfrac{1}{3}) = \tfrac{2}{3}$).
>> - Nel tableau si aggiunge la riga $-\sum_j F_i^j x_j + s = -F_i$ con una nuova slack $s$, e si continua col **simplesso duale**.
>> - Il taglio elimina la soluzione frazionaria corrente senza togliere nessuna soluzione intera.
>>
>> **Rilassamento lagrangiano**
>> - Si spostano nell'obiettivo i vincoli "complicanti" $A\mathbf{x} \ge \mathbf{b}$, pesati con i moltiplicatori $\lambda \ge 0$: $z_{LR}(\lambda) = \min\{\mathbf{c}\mathbf{x} + \lambda(\mathbf{b} - A\mathbf{x})\}$ sui vincoli rimasti. Per i vincoli di uguaglianza $\lambda$ è libero.
>> - Per ogni $\lambda \ge 0$: $z_{LR}(\lambda) \le z_P$ (dualità lagrangiana debole). Il **duale lagrangiano** è $z_{LR} = \max_{\lambda \ge 0} z_{LR}(\lambda)$, che è una funzione concava e lineare a tratti.
>> - In generale vale $z_{LP} \le z_{LR} \le z_P$. Se il sottoproblema rimasto ha la **proprietà di integralità**, allora $z_{LR} = z_{LP}$ e il rilassamento lagrangiano non migliora il bound.
>> - Dualità forte: se $\mathbf{x}(\lambda)$ è ammissibile per P e vale la complementarietà $\lambda(\mathbf{b} - A\mathbf{x}) = 0$, allora è ottima.
>>
>> **Subgradiente**
>> - Si aggiorna $\lambda^{k+1} = \max\{0,\ \lambda^k + \theta^k \mathbf{s}^k\}$ con $\mathbf{s}^k = \mathbf{b} - A\mathbf{x}(\lambda^k)$, cioè la violazione dei vincoli rilassati.
>> - Passo tipico (Polyak): $\theta^k = \alpha^k \frac{z_{UB} - z_{LR}(\lambda^k)}{\|\mathbf{s}^k\|^2}$, con $\alpha^k$ che decresce.
>> - **Euristica lagrangiana**: la soluzione del rilassamento si "ripara" per renderla ammissibile e ottenere un upper bound.
>>
>> **Column generation**
>> - Quando le colonne (variabili) sono troppe si risolve un **master ristretto** con poche colonne. Dalle variabili duali $\mathbf{w}$ si cerca, con il **pricing**, una colonna con costo ridotto favorevole. Se non esiste, il rilassamento lineare è ottimo.
>> - Nel cutting stock ogni colonna è un pattern di taglio, e il pricing è uno **zaino**: $\max \sum_i w_i a_i$ con $\sum_i l_i a_i \le L$. Entra il pattern se il valore è $> 1$.
>>
>> **Generazione dinamica dei vincoli (TSP)**
>> - I vincoli di eliminazione dei sottocicli sono in numero esponenziale. Si parte senza, si risolve, si cercano i sottocicli violati e si aggiungono solo quelli: è il duale concettuale della column generation.
