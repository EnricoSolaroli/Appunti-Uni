[3 - Introduzione Programmazione Lineare - Ver.4.1](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/ricerca operativa/slide/3 - Introduzione Programmazione Lineare - Ver.4.1.pdf>)

# Ricerca Operativa – Introduzione alla Programmazione Lineare

## Indice

1. **Modelli, bound, euristici e algoritmi esatti** (slide 4–9)
	- [[#Slide 4 – Algoritmi di Ottimizzazione: Modelli|Modello matematico e tipi di programmazione lineare]]
	- [[#Slide 6 – Algoritmi di Ottimizzazione: Lower e Upper Bounds|Lower e upper bound (problemi di minimo e di massimo)]]
	- [[#Slide 9 – Algoritmi di Ottimizzazione: Esatti|Algoritmi esatti]]
2. **Il problema del knapsack (0–1)** (slide 10–21)
	- [[#Slide 10 – Esempio: il Knapsack Problem|Definizione e modello KP]]
	- [[#Slide 11 – Il Problema del Knapsack: Upper Bound|Upper bound: rilassamento continuo e algoritmo di Dantzig]]
	- [[#Slide 13 – Il Problema del Knapsack: Euristico|Euristico greedy]]
	- [[#Slide 15 – Il Problema del Knapsack: Esatti|Metodi esatti: stati del Branch & Bound]]
	- [[#Slide 17 – Il Problema del Knapsack: Branch and Bound|Algoritmo Branch & Bound]]
	- [[#Slide 19 – Il Problema del Knapsack: Programmazione Dinamica|Programmazione dinamica (complessità pseudopolinomiale)]]
3. **Formulazione della programmazione lineare** (slide 22–32)
	- [[#Slide 22 – Programmazione Lineare (LP)|Formulazione LP e forma matriciale]]
	- [[#Slide 24 – Assunzioni implicite per LP|Assunzioni: proporzionalità, additività, determinismo, continuità]]
	- [[#Slide 26 – Soluzione di un problema LP|Soluzione ammissibile, regione ammissibile, ottimo]]
	- [[#Slide 27 – Esempio: Soluzione ottima unica|Esempi grafici: ottimo unico e ottimi equivalenti]]
	- [[#Slide 29 – Esempio: Soluzione illimitata|Esempi grafici: soluzione illimitata e regione illimitata]]
	- [[#Slide 31 – Esempio: Problema senza soluzione|Problema inammissibile]]
	- [[#Slide 32 – Programmazione Lineare Intera (MIP)|Programmazione lineare intera e arrotondamento]]
4. **Esempi di modelli LP e MIP** (slide 33–53)
	- [[#Slide 33 – Il problema della dieta|Problema della dieta]]
	- [[#Slide 37 – Il problema della selezione dei fondi di investimento|Selezione dei fondi di investimento]]
	- [[#Slide 41 – Il problema dei trasporti|Problema dei trasporti e totale unimodularità]]
	- [[#Slide 44 – Il problema dei trasporti con costi fissi|Trasporti con costi fissi (vincoli big-M)]]
	- [[#Slide 49 – Problema del flusso a costo minimo|Flusso a costo minimo e network design]]
	- [[#Slide 51 – Mix ottimale di produzione|Mix ottimale di produzione]]
5. **Manipolazioni, forma canonica e forma standard** (slide 54–57)
	- [[#Slide 54 – Manipolazioni di un problema|Min/max e inversione delle disequazioni]]
	- [[#Slide 55 – Manipolazioni di un problema (2)|Equazioni, disequazioni e variabili di scarto]]
	- [[#Slide 56 – Manipolazioni di un problema (3)|Variabili libere]]
	- [[#Slide 57 – Forma canonica e forma standard|Forma canonica e forma standard]]
6. **Soluzioni base e poliedri convessi** (slide 58–67)
	- [[#Slide 58 – Definizione di Soluzione Base Ammissibile|Ipotesi di rango e matrice di base]]
	- [[#Slide 60 – Definizione di Soluzione Base Ammissibile (3)|Soluzione base ammissibile]]
	- [[#Slide 61 – Insieme Poliedrico Convesso|Insieme poliedrico convesso e punti estremi]]
	- [[#Slide 62 – Insieme Poliedrico Convesso (2)|Punti estremi = soluzioni base ammissibili]]
	- [[#Slide 63 – Insieme Poliedrico Convesso (3)|Direzioni e direzioni estreme]]
	- [[#Slide 64 – Insieme Poliedrico Convesso (4)|Teorema della rappresentazione]]
	- [[#Slide 66 – Insieme Poliedrico Convesso (6)|Ottimo finito e teorema fondamentale della PL]]
7. **Metodo del simplesso primale** (slide 68–75)
	- [[#Slide 68 – Migliorare una Soluzione Base|Funzione obiettivo in termini delle variabili non base]]
	- [[#Slide 69 – Migliorare una Soluzione Base (2)|Costi ridotti e condizione di ottimalità]]
	- [[#Slide 70 – Migliorare una Soluzione Base (3)|Variazione delle variabili in base]]
	- [[#Slide 72 – Migliorare una Soluzione Base (5)|Rapporto minimo e illimitatezza]]
	- [[#Slide 74 – Algoritmo del Simplesso Primale|Algoritmo del simplesso primale]]
8. **Dualità** (slide 76–98)
	- [[#Slide 76 – Definizione del Problema Duale|Definizione del problema duale]]
	- [[#Slide 77 – Come si ottiene il duale?|Derivazione del duale dalle condizioni di ottimalità]]
	- [[#Slide 80 – Dualità debole|Dualità debole]]
	- [[#Slide 82 – Dualità debole|Corollario: certificato di ottimalità]]
	- [[#Slide 83 – Dualità Forte|Dualità forte]]
	- [[#Slide 86 – Relazione tra Primale e Duale|Relazioni tra primale e duale]]
	- [[#Slide 88 – Forme Miste del Primale|Forme miste del primale]]
	- [[#Slide 90 – Forme Miste del Primale (3)|Tabella di corrispondenza primale-duale ed esempio]]
	- [[#Slide 92 – Condizioni di Complementarietà|Condizioni di complementarietà]]
	- [[#Slide 96 – Interpretazione economica della dualità|Interpretazione economica (shadow price, dieta)]]
9. **Esempi di simplesso e dualità** (slide 99–119)
	- [[#Slide 99 – Esempio n. 1|Esempio 1: verifica di ottimalità di una base]]
	- [[#Slide 102 – Esempio n. 2|Esempio 2: soluzione illimitata]]
	- [[#Slide 107 – Esempio n. 3|Esempio 3: iterazioni del simplesso]]
	- [[#Slide 117 – Esempio n. 4|Esempio 4: verifica con la complementarietà]]
10. **Simplesso in formato tableau e base iniziale** (slide 120–151)
	- [[#Slide 120 – Il Metodo del Simplesso Formato Tableau|Costruzione del tableau]]
	- [[#Slide 123 – L'operazione di Pivoting|Operazione di pivoting]]
	- [[#Slide 124 – Simplesso Primale in Formato Tableau by Examples|Esempio in formato tableau]]
	- [[#Slide 130 – Come determinare una base iniziale: caso facile|Base iniziale: caso facile]]
	- [[#Slide 131 – Come determinare una base iniziale: Metodo Big-M|Metodo Big-M]]
	- [[#Slide 133 – Come determinare una base iniziale: Metodo 2-Fasi|Metodo delle due fasi]]
	- [[#Slide 136 – Come determinare una base iniziale: Esempio 1|Esempi del metodo delle due fasi]]
	- [[#Slide 149 – Metodo del Simplesso: Degenerazione e Convergenza|Degenerazione, cicli e regola di Bland]]
11. **Metodo del simplesso duale** (slide 152–165)
	- [[#Slide 152 – Il Metodo del Simplesso Duale|Idea: ammissibilità duale e complementarietà]]
	- [[#Slide 155 – Il Metodo del Simplesso Duale (4)|Rapporto minimo duale]]
	- [[#Slide 156 – Algoritmo del Simplesso Duale|Algoritmo del simplesso duale]]
	- [[#Slide 158 – Algoritmo del Simplesso Duale (3)|Base non duale ammissibile: vincolo artificiale]]
	- [[#Slide 159 – Simplesso Duale: Esempio 1|Esempio 1]]
	- [[#Slide 162 – Simplesso Duale: Esempio 2|Esempio 2]]
12. **Riferimenti bibliografici** (slide 166)
	- [[#Slide 166 – Riferimenti bibliografici|Testi di riferimento e AMPL]]


---
## Slide 1 – Introduzione alla Programmazione Lineare

---
## Slide 2-3 – Outline

1. Introduzione alla Programmazione Lineare
	- Modelli, Bounds, Euristici e Metodi Esatti
	- Un primo esempio: il Knapsack Problem
2. Introduzione alla Programmazione Lineare (LP)
	- Formulazione matematica
	- Assunzioni
	- Soluzione di un problema LP
	- Esempi
	- Manipolazioni di un problema
	- Forma canonica e forma standard
3. Il Metodo del Simplesso
	- Definizione di Soluzione Base Ammissibile
	- Insieme Poliedrico Convesso
	- Migliorare una Soluzione Base
	- Algoritmo del Simplesso Primale
	4. Dualità
	- Definizione del Problema Duale
	- Dualità Debole
	- Dualità Forte
	- Relazione tra Primale e Duale
	- Condizioni di Complementarietà
	- Interpretazione economica della dualità
	-  Esempi
4. Il Metodo del Simplesso Formato Tableau
	- L'operazione di Pivoting
	- Simplesso Primale in Formato Tableau by Examples
5. Il Metodo del Simplesso Duale
	- Algoritmo del Simplesso Duale
6. Riferimenti bibliografici

---
## Slide 4 – Algoritmi di Ottimizzazione: Modelli

- Il primo passo per definire un algoritmo di ottimizzazione per un problema consiste nel definire il **modello matematico**.
- Un modello matematico si può rappresentare come segue:

$$
(P)\qquad
\begin{aligned}
z_P = \min\ & f(\mathbf{x}) \\
\text{s.t. }\ & g_i(\mathbf{x}) \le b_i, && i = 1,\dots,n \\
& h_j(\mathbf{x}) = d_j, && j = 1,\dots,m \\
& \mathbf{x} \ge \mathbf{0}
\end{aligned}
$$

- La funzione $f(\mathbf{x})$ è detta ***funzione obiettivo***, mentre le espressioni $g_i(\mathbf{x}) \le b_i$ e $h_j(\mathbf{x}) = d_j$ rappresentano i ***vincoli***.
- L'espressione $\mathbf{x} \ge \mathbf{0}$ rappresenta i ***vincoli di non negatività*** -> sono un vantaggio.
- nel corso sia per la funzione obbiettivo sia per i vincoli ci concentriamo su funzioni lineari!

>> "s.t." sta per *subject to* ("soggetto a"). Non è restrittivo scrivere il modello come minimo: un problema di massimo si riconduce a uno di minimo perché $\max f(\mathbf{x}) = -\min\,(-f(\mathbf{x}))$ (stessa soluzione ottima, valore cambiato di segno).

---
## Slide 5 – Algoritmi di Ottimizzazione: Modelli (2)

- Se le funzioni $f(\mathbf{x})$, $g_i(\mathbf{x})$ e $h_j(\mathbf{x})$ sono lineari parliamo di **programmazione lineare continua**.
- Nel caso vi sia il vincolo aggiuntivo che la soluzione $\mathbf{x}$ deve avere componenti intere, parliamo di **programmazione lineare intera**, mentre se solo alcune componenti di $\mathbf{x}$ devono essere intere, parliamo di **programmazione lineare mista intera**.

>> Lineare significa della forma $f(\mathbf{x}) = c_1x_1 + \dots + c_nx_n$: niente prodotti tra variabili ($x_1x_2$), potenze ($x_1^2$) o altre funzioni non lineari. In inglese: LP (*Linear Programming*), ILP/IP (*Integer*), MILP/MIP (*Mixed Integer*).

---
## Slide 6 – Algoritmi di Ottimizzazione: Lower e Upper Bounds

- Dato un problema di programmazione lineare $P$ di "minimo", un valido **lower bound** $z_{LB}$ è una stima per difetto del valore della soluzione ottima $z_P$, i.e., $z_{LB} \le z_P$. Le procedure per calcolare i lower bound sono dette **procedure di bounding**.
- Dato un problema di programmazione lineare $P$ di "minimo", una soluzione ammissibile corrisponde a un valido **upper bound** $z_{UB}$ ed è, quindi, una stima per eccesso del valore della soluzione ottima $z_P$, i.e., $z_P \le z_{UB}$. Le procedure per calcolare soluzioni ammissibili sono dette **euristici**.

>> Perché una soluzione ammissibile è un upper bound in un problema di minimo: l'ottimo è il minimo tra *tutti* i valori ammissibili, quindi non può superare il valore di nessuna di esse.
>> Avere entrambi i bound permette di stimare la qualità di una soluzione euristica anche senza conoscere $z_P$: il gap $z_{UB} - z_{LB}$ (o $\frac{z_{UB}-z_{LB}}{z_{LB}}$ in termini relativi) limita dall'alto l'errore commesso. Se $z_{LB} = z_{UB}$ la soluzione euristica è ottima.

---
## Slide 7 – Algoritmi di Ottimizzazione: Lower e Upper Bounds

![[RO03-s007-1.png|400]]
- tutti i metodi esatti cercano di chiudere il gap
---
## Slide 8 – Algoritmi di Ottimizzazione: Lower e Upper Bounds

![[RO03-s008-1.png|420]]
 
>> Nel problema di massimo i ruoli si scambiano: una soluzione ammissibile non può valere più dell'ottimo, quindi fornisce un **lower bound** (euristici), mentre le procedure di bounding (es. rilassamenti) forniscono un **upper bound**. In entrambi i casi l'euristico dà il bound "dalla parte peggiore" dell'ottimo e il rilassamento quello "dalla parte migliore".

---
## Slide 9 – Algoritmi di Ottimizzazione: Esatti

- Dato un problema di programmazione lineare $P$, un **algoritmo esatto** è un algoritmo che "garantisce" (compatibilmente con le risorse di memoria e tempo calcolo disponibili) la determinazione della soluzione ottima di $P$.

---
## Slide 10 – Esempio: il Knapsack Problem

- Il problema del knapsack consiste nel determinare quale degli $n$ oggetti di peso $w_i$ e profitto $p_i$ devono essere inseriti nel knapsack di capacità $W$, per massimizzare il profitto complessivo.
- Se si ipotizza che per ogni oggetto si ha una sola copia, allora si parla del problema del knapsack (0–1).
- Il modello matematico classico per il problema del knapsack (0–1) è il seguente:

$$
(KP)\qquad
\begin{aligned}
z_{KP} = \max\ & \sum_{i=1}^{n} p_i x_i \\
\text{s.t. }\ & \sum_{i=1}^{n} w_i x_i \le W \\
& x_i \in \{0,1\}, \quad i = 1,\dots,n
\end{aligned}
$$

>> Knapsack = "zaino". La variabile binaria $x_i$ vale $1$ se l'oggetto $i$ viene inserito nello zaino e $0$ altrimenti; il vincolo impone che il peso totale degli oggetti scelti non superi la capacità $W$.

---
## Slide 11 – Il Problema del Knapsack: Upper Bound

- Un valido upper bound per il problema del knapsack può essere calcolato risolvendo il **rilassamento continuo** (i.e., LP-relaxation) della formulazione matematica $KP$:

$$
(LKP)\qquad
\begin{aligned}
z_{LKP} = \max\ & \sum_{i=1}^{n} p_i x_i \\
\text{s.t. }\ & \sum_{i=1}^{n} w_i x_i \le W \\
& 0 \le x_i \le 1, \quad i = 1,\dots,n
\end{aligned}
$$

- Il problema $LKP$ corrisponde a un problema di programmazione lineare continua, che in generale può essere risolto con il **Metodo del Simplesso** o **A Punti Interni**. Ma in questo caso il problema è molto più facile e ha complessità $O(n \log n)$.

>> Perché è un upper bound: sostituire $x_i \in \{0,1\}$ con $0 \le x_i \le 1$ allarga la regione ammissibile (ogni soluzione di $KP$ è ammissibile anche per $LKP$). Massimizzando su un insieme più grande non si può ottenere di meno, quindi $z_{KP} \le z_{LKP}$.

---
## Slide 12 – Il Problema del Knapsack: Upper Bound

- Un valido upper bound per il problema del knapsack può essere calcolato con il seguente algoritmo:

$$
\begin{array}{rl}
 & \text{UPPER BOUND KP}(W, \mathbf{w}, \mathbf{p}, \mathbf{x}) \\
1 & \text{Ordina tutti gli oggetti per ordine non crescente di } r_i = \frac{p_i}{w_i} \\
2 & \text{Inizializza } W' = W \text{ e } x_i = 0, \text{ per ogni oggetto } i = 1,\dots,n \\
3 & \textbf{foreach } i = 1,\dots,n \text{ in ordine non crescente di } r_i \textbf{ do} \\
4 & \quad \textbf{if } W' \ge w_i \\
5 & \quad\quad \textbf{then } x_i = 1 \\
6 & \quad\quad\phantom{\textbf{then }} W' = W' - w_i \\
7 & \quad\quad \textbf{else } x_i = \frac{W'}{w_i} \ \text{(elemento "critico")} \\
8 & \quad\quad\phantom{\textbf{else }} \text{exit}
\end{array}
$$

>> Questo algoritmo (di Dantzig) risolve esattamente $LKP$: $r_i = p_i/w_i$ è il profitto per unità di peso, quindi conviene riempire lo zaino partendo dagli oggetti più "redditizi"; l'unico oggetto frazionario è l'elemento critico, che riempie esattamente la capacità residua. La complessità $O(n\log n)$ è dovuta all'ordinamento (il ciclo è $O(n)$).
>> Se i profitti $p_i$ sono interi anche $z_{KP}$ è intero, quindi si può usare l'upper bound più stretto $\lfloor z_{LKP} \rfloor$.

---
## Slide 13 – Il Problema del Knapsack: Euristico

- Una soluzione ammissibile (valido lower bound) per il problema del knapsack può essere calcolato con il seguente algoritmo "greedy" derivato dall'upper bound:

$$
\begin{array}{rl}
 & \text{GREEDY KP}(W, \mathbf{w}, \mathbf{p}, \mathbf{x}) \\
1 & \text{Ordina tutti gli oggetti per ordine non crescente di } r_i = \frac{p_i}{w_i} \\
2 & \text{Inizializza } W' = W \text{ e } x_i = 0, \text{ per ogni oggetto } i = 1,\dots,n \\
3 & \textbf{foreach } i = 1,\dots,n \text{ in ordine non crescente di } r_i \textbf{ do} \\
4 & \quad \textbf{if } W' \ge w_i \\
5 & \quad\quad \textbf{then } x_i = 1 \\
6 & \quad\quad\phantom{\textbf{then }} W' = W' - w_i
\end{array}
$$

>> Differenza rispetto all'upper bound: l'oggetto che non entra viene semplicemente saltato (niente valori frazionari, niente *exit*) e si continua a provare gli oggetti successivi, che potrebbero ancora entrare nella capacità residua.
>>
>> **Esempio.** $W = 10$, tre oggetti con $\mathbf{w} = (6, 5, 5)$ e $\mathbf{p} = (9, 7, 7)$, quindi $\mathbf{r} = (1.5,\ 1.4,\ 1.4)$.
>> - Upper bound: $x_1 = 1$ ($W' = 4$); l'oggetto 2 non entra, quindi $x_2 = 4/5$ (critico) $\Rightarrow z_{LKP} = 9 + 0.8\cdot 7 = 14.6$.
>> - Greedy: $x_1 = 1$ ($W' = 4$); gli oggetti 2 e 3 non entrano $\Rightarrow z_{LB} = 9$.
>> - Ottimo: prendere gli oggetti 2 e 3 (peso $10$) $\Rightarrow z_{KP} = 14$.
>>
>> Quindi $9 \le 14 \le 14.6$: il greedy può essere anche molto lontano dall'ottimo.

---
## Slide 14 – Il Problema del Knapsack: Euristico (2)

- L'algoritmo euristico può essere migliorato applicando delle permutazioni all'ordinamento originario. Esiste una permutazione per cui si ottiene la soluzione ottima.

>> Nell'esempio precedente basta l'ordine $(2, 3, 1)$: il greedy inserisce gli oggetti 2 e 3 ($W' = 0$) e ottiene $14$, cioè l'ottimo. In generale basta mettere in testa gli oggetti della soluzione ottima; il problema è che le permutazioni sono $n!$, quindi provarle tutte non è praticabile.

---
## Slide 15-16 – Il Problema del Knapsack: Esatti

- La soluzione ottima per il problema del knapsack può essere calcolata utilizzando i seguenti due approcci:
	- Metodi Branch & Bound
	- Programmazione Dinamica
- Il Branch & Bound è un algoritmo di enumerazione implicita che utilizza le procedure di bounding per potare l'albero di ricerca e, quindi, ridurre lo spazio esplorato.
- L'algoritmo ad ogni nodo dell'albero calcola il bound e identifica uno dei seguenti stati:
	- (a) Il bound indica che non può essere ottenuta una soluzione migliore della migliore soluzione ammissibile disponibile: il nodo viene eliminato;
	- (b) Il bound fornisce una soluzione ammissibile: si aggiorna la migliore soluzione ammissibile disponibile e il nodo viene eliminato;
	- (c) Non si sono verificati i casi (a) e (b): il problema viene ulteriormente decomposto in $k$ sottoproblemi (*branching*).

>> "Enumerazione implicita": l'enumerazione esplicita di tutte le $2^n$ soluzioni binarie è impraticabile; il B&B le considera tutte, ma la maggior parte viene scartata in blocco (un intero sottoalbero) grazie ai bound, senza essere generata.

>> Nel caso (b) il sottoproblema è risolto all'ottimo (la soluzione del rilassamento è già ammissibile per il problema originale), quindi non serve esplorarlo oltre. Nel knapsack (0–1) il branching tipico usa $k = 2$: si fissa una variabile frazionaria a $0$ in un figlio e a $1$ nell'altro (vedi slide successive).

---
## Slide 17 – Il Problema del Knapsack: Branch and Bound

- Per ogni nodo dell'albero di ricerca si definisce l'insieme $F_0 \subseteq \{1,\dots,n\}$ delle variabili fissate a $0$ (oggetti che non devono essere caricati) e l'insieme $F_1 \subseteq \{1,\dots,n\}$ delle variabili fissate a $1$ (oggetti che devono essere caricati). Ovviamente, $F_0 \cap F_1 = \emptyset$.
- L'insieme delle variabili "libere" è $L = \{1,\dots,n\} \setminus (F_0 \cup F_1)$.
- Per calcolare un upper bound ad ogni nodo del Branch & Bound si definisca il seguente rilassamento lineare del knapsack (0–1):

$$
(LKP)\qquad
\begin{aligned}
z_{LKP}(L, F_0, F_1) = \max\ & \sum_{i \in L} p_i x_i + \sum_{i \in F_1} p_i \\
\text{s.t. }\ & \sum_{i \in L} w_i x_i \le W - \sum_{i \in F_1} w_i \\
& 0 \le x_i \le 1, \qquad i \in L
\end{aligned}
$$

>> Gli oggetti in $F_1$ sono già nello zaino: contribuiscono al profitto con la costante $\sum_{i\in F_1} p_i$ e consumano capacità, che quindi si riduce a $W - \sum_{i\in F_1} w_i$. Gli oggetti in $F_0$ semplicemente spariscono. Il rilassamento resta un $LKP$ sulle sole variabili libere e si risolve ancora con l'algoritmo di slide 12.

---
## Slide 18 – Il Problema del Knapsack: Branch and Bound

- Un algoritmo Branch & Bound per il knapsack (0–1) è il seguente:

$$
\begin{array}{rl}
 & \text{BBKP}(F_0, F_1, W, \mathbf{w}, \mathbf{p}, \mathbf{x}, z) \\
1 & \text{Definisci } L = \{1,\dots,n\} \setminus (F_0 \cup F_1). \\
2 & \text{Calcola } z_{LKP}(L, F_0, F_1). \text{ Sia } \mathbf{x}' \text{ la sua soluzione.} \\
3 & \textbf{if } z_{LKP}(L, F_0, F_1) < z \text{ oppure } z_{LKP}(L, F_0, F_1) \text{ non ha soluzione } \textbf{then} \\
4 & \quad \text{Elimina il nodo; RETURN;} \\
5 & \textbf{else if } \text{la variabile dell'elemento critico } j \text{ è intera } \textbf{then} \\
6 & \quad \textbf{if } z_{LKP}(L, F_0, F_1) > z \textbf{ then} \\
7 & \quad\quad z = z_{LKP}(L, F_0, F_1);\ \mathbf{x} = \mathbf{x}'; \\
8 & \quad \text{RETURN;} \\
9 & \textbf{else} \\
10 & \quad F_0 = F_0 \cup \{j\};\ \text{call BBKP}(F_0, F_1, W, \mathbf{w}, \mathbf{p}, \mathbf{x}, z);\ F_0 = F_0 \setminus \{j\} \\
11 & \quad F_1 = F_1 \cup \{j\};\ \text{call BBKP}(F_0, F_1, W, \mathbf{w}, \mathbf{p}, \mathbf{x}, z);\ F_1 = F_1 \setminus \{j\}
\end{array}
$$

>> Corrispondenza con i casi di slide 15–16: riga 3 = caso (a) (il bound non batte l'incumbent $z$, oppure il nodo è inammissibile, cioè $\sum_{i\in F_1} w_i > W$); righe 5–8 = caso (b) (la soluzione del rilassamento è intera, quindi ammissibile per $KP$); righe 9–11 = caso (c), branching binario sull'elemento critico $j$. Si parte con $F_0 = F_1 = \emptyset$ e $z$ pari al valore di una soluzione euristica (es. il greedy) o $0$.
>> Se basta trovare *una* soluzione ottima, alla riga 3 si può potare anche quando $z_{LKP} = z$ (usando $\le$): il nodo non può produrre soluzioni strettamente migliori.

---
## Slide 19 – Il Problema del Knapsack: Programmazione Dinamica

- La Programmazione Dinamica risolve il problema componendo le soluzioni a "***stadi***" partendo dalle soluzioni parziali di sottoproblemi, seguendo un approccio di tipo "*bottom-up*".
- La programmazione dinamica si applica ai problemi di ottimizzazione che hanno le seguenti caratteristiche:
	- (a) Il problema può essere decomposto in stadi. Ad ogni stadio è associata una decisione;
	- (b) Ad ogni stadio $k$ il problema può trovarsi in un numero finito di "stati" possibili: $\{s_1^k, \dots, s_{q_k}^k\}$;
	- (c) Può essere definita una funzione di costo $f_k(s_i^k)$ dello stato $s_i^k$ dello stadio $k$ che dipende solo dagli stadi precedenti;
	- (d) Da ogni stato $s_i^k$ dello stadio $k$ può essere calcolato ogni possibile stato dello stadio $k+1$.

>> La proprietà (c) è il *principio di ottimalità* (Bellman): il valore ottimo di uno stato si ottiene combinando i valori ottimi degli stati dello stadio precedente, senza dover ricordare *come* ci si è arrivati. È ciò che permette di riutilizzare le soluzioni dei sottoproblemi invece di ricalcolarle.

---
## Slide 20 – Il Problema del Knapsack: Programmazione Dinamica

- La Programmazione Dinamica per risolve il problema del knapsack (0–1) prevede $n+1$ stadi (il numero di oggetti $+\,1$) e ad ogni stadio un numero di stati pari a $W+1$ (la capacità del knapsack $+\,1$).
- Ad ogni stadio $j \in \{1,\dots,n\}$ e per ogni stato $w \in \{0,\dots,W\}$ si risolve il seguente sottoproblema:

$$
(KP_j(w))\qquad
\begin{aligned}
z_j(w) = \max\ & \sum_{i=1}^{j} p_i x_i \\
\text{s.t. }\ & \sum_{i=1}^{j} w_i x_i \le w \\
& x_i \in \{0,1\}, \quad i = 1,\dots,j
\end{aligned}
$$

>> $z_j(w)$ è il miglior profitto ottenibile usando solo i primi $j$ oggetti e uno zaino di capacità $w$. Lo stadio $0$ (nessun oggetto) spiega il "$+1$" negli stadi, lo stato $w = 0$ il "$+1$" negli stati. La soluzione del problema originale è $z_{KP} = z_n(W)$. Qui si assume che pesi e capacità siano interi.

---
## Slide 21 – Il Problema del Knapsack: Programmazione Dinamica

- Risolvere per ogni stato $w$ dello stadio $j$ i problemi $KP_j(w)$ equivale a utilizzare la seguente recursione:
	- (a) Inizializza $KP_0(w) = 0$, per ogni $w \in \{0,\dots,W\}$;
	- (b) Ad ogni stadio $j \in \{1,\dots,n\}$ e per ogni stato $w \in \{0,\dots,W\}$, calcola la seguente recursione:

$$
z_j(w) =
\begin{cases}
z_{j-1}(w), & \text{if } w < w_j \\
\max\left\{ z_{j-1}(w),\ z_{j-1}(w - w_j) + p_j \right\}, & \text{if } w \ge w_j
\end{cases}
$$

- L'algoritmo di programmazione dinamica qui proposto ha complessità $O(nW)$. Quindi si dice che è "***pseudopolinomiale***".
- Un algoritmo di programmazione dinamica alternativo per il knapsack (0–1) poteva essere ottenuto definendo uno stadio per ogni $w \in \{0,\dots,W\}$ e uno stato per ogni $j \in \{1,\dots,n\}$.

>> Il punto (a) va letto come $z_0(w) = 0$: senza oggetti il profitto è nullo. Nella recursione, se l'oggetto $j$ non entra ($w < w_j$) si eredita il valore precedente; altrimenti si sceglie il meglio tra non prenderlo ($z_{j-1}(w)$) e prenderlo (profitto $p_j$ più il meglio ottenibile con la capacità rimanente $w - w_j$).
>> "Pseudopolinomiale": $O(nW)$ è polinomiale nel *valore* di $W$, ma non nella dimensione dell'input, perché $W$ si codifica con $\log_2 W$ bit (quindi $W$ è esponenziale nella lunghezza della sua codifica). Il knapsack (0–1) è NP-difficile.
>>
>> **Esempio** (dati di slide 13: $W = 10$, $\mathbf{w} = (6,5,5)$, $\mathbf{p} = (9,7,7)$), valori di $z_j(w)$:
>>
>> | $j \backslash w$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
>> |---|---|---|---|---|---|---|---|---|---|---|---|
>> | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
>> | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 9 | 9 | 9 | 9 | 9 |
>> | 2 | 0 | 0 | 0 | 0 | 0 | 7 | 9 | 9 | 9 | 9 | 9 |
>> | 3 | 0 | 0 | 0 | 0 | 0 | 7 | 9 | 9 | 9 | 9 | 14 |
>>
>> Ad esempio $z_3(10) = \max\{z_2(10),\ z_2(5) + 7\} = \max\{9,\ 14\} = 14 = z_{KP}$.

---
## Slide 22 – Programmazione Lineare (LP)

- La programmazione lineare consiste nel *minimizzare* (o *massimizzare*) una *funzione obiettivo* lineare in presenza di vincoli lineari.
- Si consideri un problema di programmazione lineare *continua* con $n$ variabili decisionali e $m$ vincoli:

$$
\begin{aligned}
\min\ z = & \sum_{j=1}^{n} c_j x_j \\
\text{s.t. }\ & \sum_{j=1}^{n} a_{ij} x_j \ge b_i, && i = 1,\dots,m \\
& x_j \ge 0, && j = 1,\dots,n
\end{aligned}
$$

dove
- $x_j$: variabile decisionale;
- $c_j$: coefficiente di costo della variabile $x_j$;
- $b_i$: termine noto del vincolo $i$;
- $a_{ij}$: coefficiente della variabile $x_j$ nel vincolo $i$;
- $z$: valore della funzione obiettivo.

---
## Slide 23 – Programmazione Lineare (LP), dal punto di vista matriciale

Una rappresentazione più compatta del problema è la seguente¹:

$$
\begin{aligned}
\min\ z = & \ \mathbf{c}\mathbf{x}\\
\text{s.t. }\ & \mathbf{A}\mathbf{x} \ge \mathbf{b} \\
& \mathbf{x} \ge \mathbf{0}
\end{aligned}
$$

dove

$$
\mathbf{c} = \begin{bmatrix} c_1 \\ c_2 \\ \vdots \\ c_n \end{bmatrix}
\quad
\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}
\quad
\mathbf{b} = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix}
\quad
\mathbf{A} = \begin{bmatrix}
a_{11} & a_{12} & \dots & a_{1n} \\
a_{21} & a_{22} & \dots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \dots & a_{mn}
\end{bmatrix}
$$

La matrice $\mathbf{A}$ è anche detta, semplicemente, **matrice dei vincoli**.

¹ per non appesantire la notazione, qui e nel proseguo, dove non è indispensabile non si esplicitano i *trasposti* di vettori e matrici (e.g., $\mathbf{c}^T\mathbf{x}$)

>cx -> indica il prodotto scalare

>> Dimensioni: $\mathbf{c}, \mathbf{x} \in \mathbb{R}^n$, $\mathbf{b} \in \mathbb{R}^m$, $\mathbf{A} \in \mathbb{R}^{m \times n}$ (una riga per vincolo, una colonna per variabile). La riga $i$ di $\mathbf{A}\mathbf{x} \ge \mathbf{b}$ è esattamente il vincolo $\sum_j a_{ij}x_j \ge b_i$, e $\mathbf{c}\mathbf{x}$ sta per $\mathbf{c}^T\mathbf{x} = \sum_j c_jx_j$. Le disuguaglianze tra vettori si intendono componente per componente.

---
## Slide 24-25 – Assunzioni implicite per LP

Nella formulazione di un problema di programmazione lineare sono implicite alcune assunzioni.
- **Proporzionalità**
  Ogni variabile $x_j$ contribuisce con la quantità:
	- $c_j x_j$ al valore della funzione obiettivo;
	- $a_{ij} x_j$ al vincolo $i$.

**Esempi**

![[RO03-s024-1.png|175]] ![[RO03-s024-2.png|190]]

- **Additività**
	- Il valore della funzione obiettivo è dato dalla somma dei contributi $c_j x_j$ forniti da ciascuna variabile $j$.
	- Il contributo totale ad ogni vincolo $i$ è dato dalla somma dei contributi $a_{ij} x_j$ forniti da ciascuna variabile $j$.
- **Dati deterministici**
	- I coefficienti $c_j$, $a_{ij}$ e $b_i$ devono essere noti.
	- Nel caso in cui alcuni dati fossero, ad esempio, di natura stocastica, essi devono essere *approssimati* con dati deterministici.
- **Continuità delle variabili** (indispensabile)
  Le variabili possono assumere tutti i valori reali che soddisfano i vincoli.

>> Nel caso (b) la funzione vale $f(x_j) = k_j + c_jx_j$ per $x_j > 0$ e $0$ per $x_j = 0$: c'è un costo fisso $k_j$ (es. costo di attivazione di un impianto) che si paga appena $x_j > 0$. Questo salto in $0$ non è lineare e non si può modellare con la sola LP continua; servono variabili binarie aggiuntive (programmazione lineare mista intera).

>> L'additività esclude interazioni tra variabili: un termine come $x_1x_2$ (es. uno sconto che dipende da quanto si acquista di due prodotti insieme) la viola. La continuità è l'assunzione che cade nella programmazione lineare intera (slide 32).

---
## Slide 26 – Soluzione di un problema LP

- **Soluzione ammissibile**
  Una soluzione $\mathbf{x}$ che soddisfa i vincoli $\mathbf{A}\mathbf{x} \ge \mathbf{b}$ e i vincoli di *non-negatività* $\mathbf{x} \ge \mathbf{0}$ è detta *soluzione ammissibile*.
- **Regione ammissibile**
  L'insieme di tutte le soluzioni ammissibili di un problema è detta *regione ammissibile*.
- **Soluzione Ottima**
  La soluzione ammissibile $\mathbf{x}^*$ che minimizza (o massimizza) il valore della funzione obiettivo è detta *soluzione ottima*.
- **Problema senza soluzione**
  Se la regione ammissibile è *vuota* diremo che il problema non ha soluzione o che il problema non è ammissibile.

>> In formule, la regione ammissibile è $X = \{\mathbf{x} \in \mathbb{R}^n : \mathbf{A}\mathbf{x} \ge \mathbf{b},\ \mathbf{x} \ge \mathbf{0}\}$ e $\mathbf{x}^*$ è ottima (per il minimo) se $\mathbf{c}\mathbf{x}^* \le \mathbf{c}\mathbf{x}$ per ogni $\mathbf{x} \in X$. Per un problema LP si presenta sempre uno di questi tre casi: ottimo finito (unico o con infinite soluzioni ottime equivalenti), problema illimitato, problema inammissibile. Gli esempi seguenti li mostrano tutti.

---
## Slide 27 – Esempio: Soluzione ottima unica

$$
\begin{array}{rrcrcrl}
\min z = & -x_1 & - & 3x_2 & & & \\
 & -x_1 & - & x_2 & \ge & -6 & (a) \\
 & x_1 & - & 2x_2 & \ge & -8 & (b) \\
 & x_1 & + & x_2 & \ge & 2 & (c) \\
 & x_1, & & x_2 & \ge & 0 &
\end{array}
$$

![[RO03-s027-1.png|313]]

- Per minimizzare la funzione obiettivo $z = -x_1 - 3x_2$ bisogna muoversi nella direzione $-\mathbf{c} = (1, 3)$.
- La soluzione ottima corrisponde a un *vertice* (o *punto estremo*) della regione ammissibile.

>> Nel grafico la regione ammissibile è il poligono di vertici $C=(0,2)$, $D=(0,4)$, $E$, $A=(6,0)$, $B=(2,0)$; la retta tratteggiata è la curva di livello della funzione obiettivo passante per l'ottimo. L'ottimo è il vertice $E$, intersezione di (a) e (b): $x_1 + x_2 = 6$ e $-x_1 + 2x_2 = 8$ danno $3x_2 = 14$, cioè $\mathbf{x}^* = \left(\frac{4}{3}, \frac{14}{3}\right)$ con $z^* = -\frac{4}{3} - 14 = -\frac{46}{3} \approx -15.33$ (confronto: in $D$ vale $-12$, in $A$ vale $-6$).
>> La direzione di discesa è $-\mathbf{c}$ perché il gradiente di $z = \mathbf{c}\mathbf{x}$ è $\mathbf{c}$ (direzione di massima crescita): per minimizzare si trasla la curva di livello verso $-\mathbf{c}$ finché tocca ancora la regione ammissibile.

---
## Slide 28 – Esempio: Soluzioni ottime equivalenti

$$
\begin{array}{rrcrcrl}
\max z = & 2x_1 & + & 3x_2 & & & \\
 & x_1 & + & 3x_2 & \le & 9 & (a) \\
 & 4x_1 & + & 6x_2 & \le & 24 & (b) \\
 & x_1, & & x_2 & \ge & 0 &
\end{array}
$$

![[RO03-s028-1.png|401]]

- Nei punti $B = (6, 0)$ and $C = (3, 2)$ la funzione obiettivo assume il valore ottimo $z^* = 12$.
- In ogni punto del segmento cha va da $P_1$ a $P_2$ la funzione obiettivo assume lo stesso valore $z^* = 12$.

>> Il motivo: la funzione obiettivo è parallela al vincolo (b), infatti $2x_1 + 3x_2 = \frac{1}{2}(4x_1 + 6x_2) \le \frac{24}{2} = 12$, con uguaglianza lungo tutto il lato di (b), cioè il segmento (in grassetto nel grafico) da $C=(3,2)$ a $B=(6,0)$ (i punti $P_1$, $P_2$ del testo corrispondono quindi a questi due estremi). Anche qui almeno una soluzione ottima è un vertice: esistono infinite soluzioni ottime, ma tra queste ci sono i vertici $B$ e $C$.

>le soluzioni ottime potrebbero stare anche su una faccia del poliedro non per forza su una retta
---
## Slide 29 – Esempio: Soluzione illimitata

$$
\begin{array}{rrcrcrl}
\min z = & -2x_1 & - & 5x_2 & & & \\
 & -3x_1 & + & 2x_2 & \le & 6 & (a) \\
 & x_1 & + & 2x_2 & \ge & 2 & (b) \\
 & x_1, & & x_2 & \ge & 0 &
\end{array}
$$

![[RO03-s029-1.png|353]]

- Tutti i punti $x_1 = x_2$, con $x_1 \ge \frac{2}{3}$ appartengono alla regione ammissibile.
- Nei punti $x_1 = x_2$ il valore della funzione obiettivo $z = -2x_1 - 5x_2$ diviene $z = -7x_1$, da cui $z \to -\infty$ per $x_1 \to \infty$.

>> Verifica: con $x_1 = x_2 = t$, il vincolo (b) diventa $3t \ge 2$, cioè $t \ge \frac{2}{3}$, e (a) diventa $-t \le 6$, sempre vero per $t \ge 0$. La regione ammissibile è illimitata *nella direzione in cui l'obiettivo migliora*: il problema non ha ottimo finito (si dice *illimitato*), pur essendo ammissibile.

---
## Slide 30 – Esempio: Regione amm. illimitata ma sol. limitata

$$
\begin{array}{rrcrcrl}
\min z = & 2x_1 & + & x_2 & & & \\
 & -3x_1 & + & 2x_2 & \le & 6 & (a) \\
 & x_1 & + & 2x_2 & \ge & 2 & (b) \\
 & x_1, & & x_2 & \ge & 0 &
\end{array}
$$

![[RO03-s030-1.png|350]]

- Per minimizzare la funzione obiettivo $z = 2x_1 + x_2$ bisogna muoversi nella direzione $-\mathbf{c} = (-2, -1)$.
- La soluzione ottima corrisponde a un punto estremo della regione ammissibile.

>> Stessa regione ammissibile della slide 29, ma ora l'obiettivo peggiora andando all'infinito ($c_1, c_2 > 0$ e $\mathbf{x} \ge \mathbf{0}$). Confrontando i vertici: $A = (0,3)$ dà $z = 3$, $B = (0,1)$ dà $z = 1$, $C = (2,0)$ dà $z = 4$. L'ottimo è $\mathbf{x}^* = B = (0,1)$ con $z^* = 1$. Quindi una regione illimitata non implica un problema illimitato: dipende dalla direzione dell'obiettivo.

>il fatto di avere un poliedro illimitato per avere una soluzione limitata è solo una condizione necessaria.
---
## Slide 31 – Esempio: Problema senza soluzione

$$
\begin{array}{rrcrcrl}
\min z = & 2x_1 & + & 5x_2 & & & \\
 & 2x_1 & + & 3x_2 & \ge & 12 & (a) \\
 & 3x_1 & + & 4x_2 & \le & 12 & (b) \\
 & x_1, & & x_2 & \ge & 0 &
\end{array}
$$

![[RO03-s031-1.png|348]]

- La regione ammissibile è *vuota*.

>> Nel grafico la retta di (a) passa per $C = (0,4)$ e $B = (6,0)$ (ammissibili i punti sopra), quella di (b) per $E = (0,3)$ e $D = (4,0)$ (ammissibili i punti sotto): nel primo quadrante i due semipiani non si intersecano.
>> Dimostrazione algebrica: per $\mathbf{x} \ge \mathbf{0}$ vale $2x_1 + 3x_2 \le \frac{9}{4}x_1 + 3x_2 = \frac{3}{4}(3x_1 + 4x_2) \le \frac{3}{4}\cdot 12 = 9 < 12$, quindi (b) e la non negatività rendono impossibile (a).

>prima si risolvono le prime due equazioni, poi capisco se la parte ammissibile sta a dx o sx.
---
## Slide 32 – Programmazione Lineare Intera (MIP)

- cosa cambia se aggiungo il vincolo di interezza?

Un problema di programmazione lineare intera è un problema di programmazione lineare nel quale tutte le variabili decisionali sono vincolate ad assumere valori interi.

$$
\begin{aligned}
\min\ z = & \sum_{j=1}^{n} c_j x_j \\
\text{s.t. }\ & \sum_{j=1}^{n} a_{ij} x_j \ge b_i, && i = 1,\dots,m \\
& x_j \ge 0, && j = 1,\dots,n \\
& x_j \text{ intera}, && j = 1,\dots,n
\end{aligned}
$$

![[RO03-s032-1.png|285]] ![[RO03-s032-2.png|202]]

(a): ottimo PLI, ottimo PLC, arrotondamento PLC; (b): ottimo LP, ottimo MIP

>> PLC = programmazione lineare continua (il rilassamento, senza vincoli di interezza), PLI = programmazione lineare intera. I punti neri sono le soluzioni intere. Le figure mostrano che risolvere il rilassamento continuo e **arrotondare** non funziona in generale: in (a) l'arrotondamento dell'ottimo PLC è un punto intero ammissibile ma diverso dall'ottimo PLI; in (b) il punto intero più vicino all'ottimo LP cade fuori dalla regione ammissibile e l'ottimo MIP si trova altrove. In generale arrotondare può dare soluzioni non ammissibili oppure ammissibili ma non ottime.
>> Il rilassamento continuo resta però utile come bound: per un problema di minimo $z_{PLC} \le z_{PLI}$ (è la stessa idea di $LKP$ per il knapsack).

>con il vincolo di interezza il problema passa da essere polinomiale da non polinomiale
---
## Slide 33 – Il problema della dieta

- Determinare la composizione della dieta di costo minimo, che garantisca un contributo minimo giornaliero di energia (2000 Kcal), di proteine (55 g) e di calcio (800 mg) scegliendo tra:

| Alimenti disponibili | Porzione | Ener. (kcal) | Prot. (g) | Calcio (mg) | Costo (Euro) |
|---|---:|---:|---:|---:|---:|
| Fiocchi avena | 28 g | 100 | 5 | 2 | 0.30 |
| Pollo | 100 g | 205 | 32 | 12 | 0.90 |
| Uova | 2 | 160 | 13 | 54 | 0.80 |
| Latte | 237 cc | 160 | 8 | 285 | 0.50 |
| Torta ciliegie | 170 g | 420 | 4 | 22 | 2.00 |
| Maiale e piselli | 260 g | 260 | 14 | 80 | 1.90 |

- Se la dieta prevedesse un solo alimento avremo:

---
## Slide 34 – Il problema della dieta (2)

| Alimento | N. porzioni | Costo |
|---|---:|---:|
| Fiocchi avena | 400.0 | 120.00 |
| Pollo | 66.6 | 59.94 |
| Uova | 14.8 | 11.84 |
| Latte | 12.5 | 6.25 |
| Torta ciliegie | 36.3 | 72.60 |
| Maiale e piselli | 10.0 | 19.00 |

- Aggiungiamo l'ulteriore vincolo sul numero di porzioni-giorno per ciascun alimento:

| Alimento | Limite |
|---|---|
| Fiocchi avena | $\le 4$ |
| Pollo | $\le 3$ |
| Uova | $\le 2$ |
| Latte | $\le 8$ |
| Torta ciliegie | $\le 2$ |
| Maiale e piselli | $\le 2$ |

>> La prima tabella indica quante porzioni servirebbero (e a che costo) se ci si nutrisse di **un solo alimento**: per ogni alimento si prende il massimo, sui tre nutrienti, di (fabbisogno / contenuto per porzione). Ad esempio per i fiocchi d'avena il vincolo più stringente è il calcio: $800/2 = 400$ porzioni, costo $400 \cdot 0.30 = 120$; per il latte è l'energia: $2000/160 = 12.5$ porzioni, costo $6.25$.
>> Diete del genere sono ovviamente irrealistiche: da qui i limiti superiori sulle porzioni giornaliere.

---
## Slide 35 – Il problema della dieta (3)

- Per formulare matematicamente il problema facciamo uso delle seguenti variabili decisionali:
	- $x_{j}$: N. di porzioni per l'alimento
	- $x_1$: N. porzioni di Fiocchi avena
	- $x_2$: N. porzioni di Pollo
	- $x_3$: N. porzioni di Uova
	- $x_4$: N. porzioni di Latte
	- $x_5$: N. porzioni di Torta ciliegie
	- $x_6$: N. porzioni di Maiale e piselli
	
>modellando in porzioni si evita anche il problema dell'unità di misura, che in caso contrario sarebbe stato da uniformare
---
## Slide 36 – Il problema della dieta (4)

- **Formulazione matematica**

$$
\begin{array}{rrrrrrrcr}
\min z = & .30x_1 & +.90x_2 & +.80x_3 & +.50x_4 & +2.00x_5 & +1.90x_6 & & \\
 & 100x_1 & +205x_2 & +160x_3 & +160x_4 & +420x_5 & +260x_6 & \ge & 2000 \\
 & 5x_1 & +32x_2 & +13x_3 & +8x_4 & +4x_5 & +14x_6 & \ge & 55 \\
 & 2x_1 & +12x_2 & +54x_3 & +285x_4 & +22x_5 & +80x_6 & \ge & 800 \\
 & x_1 & & & & & & \le & 4 \\
 & & x_2 & & & & & \le & 3 \\
 & & & x_3 & & & & \le & 2 \\
 & & & & x_4 & & & \le & 8 \\
 & & & & & x_5 & & \le & 2 \\
 & & & & & & x_6 & \le & 2 \\
 & x_1, & x_2, & x_3, & x_4, & x_5, & x_6 & \ge & 0
\end{array}
$$

>> I tre vincoli $\ge$ sono i fabbisogni minimi giornalieri di energia (kcal), proteine (g) e calcio (mg); i sei vincoli $\le$ sono i limiti superiori della slide precedente (vincoli di tipo *bound* sulle singole variabili).
>> (non conosciamo ancora il metodo per risolverlo)
>> Risolvendo  il rilassamento continuo si ottiene $\mathbf{x}^* = (4,\ 1.56,\ 0,\ 8,\ 0,\ 0)$ con $z^* \approx 6.60$: 4 porzioni di avena, 8 di latte e circa 1.56 di pollo, cioè il pollo serve solo a coprire l'energia mancante ($2000 - 400 - 1280 = 320$ kcal, $320/205 \approx 1.56$). Imponendo porzioni intere l'ottimo diventa $(4, 0, 2, 8, 0, 0)$ con $z = 6.80$.

---
## Slide 37 – Il problema della selezione dei fondi di investimento

- Si vuole determinare la composizione del portafoglio di fondi di investimento che massimizzi il rendimento complessivo.
- L'investimento complessivo deve ammontare a 100 KEuro e si vuole garantire che il portafoglio copra per almeno la percentuale $\alpha$ il mercato industriale, $\beta$ il mercato bancario e $\gamma$ quello tecnologico.

| Fondi | Rendimento atteso | Industriale (%) | Bancario (%) | Tecnologico (%) | Rating |
|:---:|:---:|:---:|:---:|:---:|:---:|
| A | 1.05 | 100 | 0 | 0 | 1.5 |
| B | 1.04 | 80 | 20 | 0 | 1.6 |
| C | 1.20 | 0 | 0 | 100 | 5.0 |
| D | 1.08 | 50 | 25 | 25 | 2.0 |
| E | 1.09 | 60 | 10 | 30 | 3.0 |
| F | 1.15 | 0 | 20 | 80 | 4.0 |
| G | 1.12 | 30 | 30 | 40 | 2.5 |

>> Il "rating" qui va letto come un indice di rischio: i fondi con rendimento atteso più alto (C, F) hanno anche rating più alto. Il vincolo sul rating medio serve quindi a limitare il rischio del portafoglio.

---
## Slide 38 – Il problema della selezione dei fondi di investimento (2)

- Denotiamo con $F$ l'insieme dei fondi.
- I parametri $\alpha$, $\beta$ e $\gamma$ sono delle percentuali, quindi $0 \le \alpha, \beta, \gamma \le 1$.
- I rimanenti parametri sono i seguenti:
	- $r_i$: rendimento fondo $i$;
	- $\alpha_i$: percentuale industriale fondo $i$, $0 \le \alpha_i \le 1$;
	- $\beta_i$: percentuale bancario fondo $i$, $0 \le \beta_i \le 1$;
	- $\gamma_i$: percentuale tecnologico fondo $i$, $0 \le \gamma_i \le 1$;
	- $\rho_i$: rating fondo $i$;
	- $\rho$: rating medio.
- La variabile decisionale $x_i$ indica la somma investita nel fondo $i$.

---
## Slide 39 – Il problema della selezione dei fondi di investimento (3)

- **Modello matematico:**

$$
\begin{aligned}
\max\ z = {} & \sum_{i \in F} r_i x_i \\
\text{s.t. } & \sum_{i \in F} x_i = 100 \\
& \sum_{i \in F} \alpha_i x_i \ge 100\alpha \\
& \sum_{i \in F} \beta_i x_i \ge 100\beta \\
& \sum_{i \in F} \gamma_i x_i \ge 100\gamma \\
& \sum_{i \in F} \rho_i x_i \le 100\rho \\
& x_i \ge 0, \quad i \in F
\end{aligned}
$$

- Esiste una soluzione ammissibile per ogni combinazione dei valori $\alpha$, $\beta$ e $\gamma$?
- La soluzione è sempre limitata per ogni combinazione dei valori $\alpha$, $\beta$ e $\gamma$?

>> **Ammissibilità:** no. Per ogni fondo $\alpha_i + \beta_i + \gamma_i = 1$, quindi sommando i tre vincoli di copertura si ottiene $\sum_i (\alpha_i+\beta_i+\gamma_i)x_i = 100 \ge 100(\alpha+\beta+\gamma)$: serve almeno $\alpha + \beta + \gamma \le 1$. Inoltre anche il vincolo di rating può rendere il problema inammissibile (es. se $\rho < 1.5$, il rating minimo tra i fondi, nessun portafoglio lo soddisfa).
>> **Limitatezza:** sì, sempre (quando ammissibile). Il vincolo $\sum_i x_i = 100$ con $x_i \ge 0$ implica $0 \le x_i \le 100$: la regione ammissibile è limitata, quindi la funzione obiettivo non può crescere all'infinito.
>> Poiché il totale investito è 100, i vincoli sono proprio percentuali: ad esempio $\sum_i \rho_i x_i \le 100\rho$ equivale a dire che la media dei rating pesata con le quote investite è al più $\rho$.

---
## Slide 40 – Il problema della selezione dei fondi di investimento (4)

- Il modello sarebbe ancora valido se il primo vincolo fosse sostituito da $\sum_{i \in F} x_i \le 100$?
- Vi sono dei parametri che non sono deterministici?
- Si può usare un modello deterministico in cui si usa il rendimento atteso per valutare il rendimento complessivo. Quali sono i limiti di questo approccio? Come si potrebbe modellare il problema diversamente?
- Di quali dati bisognerebbe disporre per poter costruire un modello alternativo?

>> Con $\sum_i x_i \le 100$ i vincoli con secondo membro $100\alpha$, $100\beta$, $100\gamma$, $100\rho$ non esprimono più percentuali del capitale effettivamente investito (se si investe meno di 100, "$\sum_i \rho_i x_i \le 100\rho$" non garantisce più rating medio $\le \rho$). Per restare corretti bisognerebbe scriverli rispetto a $\sum_i x_i$, ad esempio $\sum_i (\alpha_i - \alpha) x_i \ge 0$ e $\sum_i (\rho_i - \rho) x_i \le 0$ (vincoli ancora lineari).
>> Il parametro chiaramente aleatorio è il rendimento $r_i$ (e in parte il rating). Usare solo il valore atteso ignora il rischio, cioè la variabilità e le correlazioni tra i fondi. Un'alternativa classica è il modello media-varianza di Markowitz (serve la matrice di covarianza dei rendimenti e il modello diventa quadratico), oppure modelli stocastici/a scenari, che richiedono serie storiche o scenari di rendimento con le relative probabilità.

---
## Slide 41 – Il problema dei trasporti

- Siano dati:
	- *$n$ origini* con disponibilità pari a $a_i$, $i = 1, \dots, n$;
	- *$m$ destinazioni* con richiesta $b_j$, $j = 1, \dots, m$;
	- il costo $c_{ij}$ per trasportare una unità di merce dalla sorgente $i$ alla destinazione $j$.
- Determinare come trasportare la merce dalle origini alle destinazioni rispettando i vincoli su disponibilità e richieste, minimizzando il costo totale.
- Si ipotizza che $\sum_{i=1}^{n} a_i = \sum_{j=1}^{m} b_j$.
- Cosa accadrebbe se $\sum_{i=1}^{n} a_i \ne \sum_{j=1}^{m} b_j$?

>> Con i vincoli di uguaglianza della slide seguente, se $\sum_i a_i \ne \sum_j b_j$ il problema è **inammissibile**: sommando i vincoli di origine si ottiene $\sum_{i,j} x_{ij} = \sum_i a_i$, sommando quelli di destinazione $\sum_{i,j} x_{ij} = \sum_j b_j$.
>> Se l'offerta supera la domanda ($\sum_i a_i > \sum_j b_j$) basta trasformare i vincoli di origine in $\sum_j x_{ij} \le a_i$, oppure (equivalentemente) aggiungere una **destinazione fittizia** con domanda $\sum_i a_i - \sum_j b_j$ e costi nulli. Se invece la domanda supera l'offerta, non tutta la domanda può essere soddisfatta: si aggiunge un'origine fittizia (la merce "spedita" da essa è domanda non servita, eventualmente con un costo di penalità).

---
## Slide 42 – Il problema dei trasporti (2)

- **Modello matematico:**

$$
\begin{aligned}
\min\ z = {} & \sum_{i=1}^{n} \sum_{j=1}^{m} c_{ij} x_{ij} \\
\text{s.t. } & \sum_{j=1}^{m} x_{ij} = a_i, && i = 1, \dots, n \\
& \sum_{i=1}^{n} x_{ij} = b_j, && j = 1, \dots, m \\
& x_{ij} \ge 0, \text{ intera}, && i = 1, \dots, n,\ j = 1, \dots, m
\end{aligned}
$$

  dove $x_{ij}$ rappresenta la quantità di merce trasportata dall'origine $i$ alla destinazione $j$.

- Il vincolo di interezza applicato alle variabili $x_{ij}$ rende *difficile* il problema?
- La risposta è NO, perché se i parametri $a_i$ e $b_j$ sono interi allora anche la soluzione del *rilassamento continuo* del problema è sempre intera.

>> Il *rilassamento continuo* è lo stesso problema in cui si elimina il vincolo "intera", lasciando solo $x_{ij} \ge 0$: è un problema di PL, risolvibile efficientemente. In generale la sua soluzione ottima può essere frazionaria (si veda il mix di produzione alla slide 53); per il problema dei trasporti invece no, grazie alla struttura della matrice dei vincoli (slide seguente).

---
## Slide 43 – Il problema dei trasporti (3)

- La proprietà che implica l'interezza della soluzione, se i parametri $a_i$ e $b_j$ sono interi, è dovuta alla particolare struttura della matrice dei vincoli, che in questo caso è sempre ***totalmente unimodulare***.

**Definizione.** Una matrice $\mathbf{A} \in \mathbb{R}^{m,n}$ si dice totalmente unimodulare se il determinante di ogni sottomatrice quadrata di $\mathbf{A}$ (cioè di ogni minore di $\mathbf{A}$) è uguale a $0$, $+1$ oppure $-1$.

- Se $\mathbf{A}$ è totalmente unimodulare e $\mathbf{b}$ è un vettore intero, allora ogni vertice della regione ammissibile $X = \{\mathbf{x} : \mathbf{A}\mathbf{x} = \mathbf{b}\}$ è intero.
- Vedremo meglio più avanti cosa significa esattamente. In particolare, capiremo perché l'interezza di ogni vertice della regione ammissibile implica l'interezza della soluzione ottima del problema.

>> Intuizione: un vertice corrisponde a una soluzione base $\mathbf{x}_B = \mathbf{B}^{-1}\mathbf{b}$ (slide 59–60). Per la regola di Cramer $\mathbf{B}^{-1} = \operatorname{adj}(\mathbf{B}) / \det(\mathbf{B})$: se $\mathbf{A}$ è TU, $\det(\mathbf{B}) = \pm 1$ e $\operatorname{adj}(\mathbf{B})$ ha elementi interi, quindi $\mathbf{B}^{-1}\mathbf{b}$ è intero se $\mathbf{b}$ lo è.
>> Nel problema dei trasporti ogni colonna (variabile $x_{ij}$) ha esattamente due coefficienti pari a 1: uno nella riga dell'origine $i$ e uno nella riga della destinazione $j$. Le matrici di questo tipo (righe divisibili in due gruppi, con ogni colonna che ha un 1 in ciascun gruppo) sono totalmente unimodulari: è la matrice di incidenza di un grafo bipartito.

---
## Slide 44 – Il problema dei trasporti con costi fissi

- Il problema dei trasporti è un caso speciale del problema più generale dei ***flussi di costo minimo***, che ha numerose applicazioni a problemi di logistica, telecomunicazioni, finanza, etc.
- Una applicazione in ambito logitico potrebbe essere il problema della distribuzione di ***un singolo "prodotto"*** in cui vi sono delle *sorgenti* che spediscono il prodotto (e.g., punti di produzione o magazzini) e delle *destinazioni* che lo ricevono (e.g., punti vendita o magazzini).
- Una possibile applicazione alla finanza è il ***problema del trasferimento ottimo di fondi*** che deve affrontare una multinazionale, in cui delle *sedi* devono inviare delle risorse (e.g., liquidità ottenuta dalla vendita di prodotti) a delle altre che le richiedono (e.g., per pagare i costi di produzione).

---
## Slide 45 – Il problema dei trasporti con costi fissi (2)

- In generale, si può parlare del problema della distribuzione di una singola ***"commodity"***, in cui delle *sorgenti* immettono la commodity (e.g., gas estratto da un pozzo) e delle *destinazioni* la ricevono (e.g., centri di stoccaggio).
- Il problema dei flussi di costo minimo considera anche la presenza di ***punti di smistamento/transito***.
- Il problema della distribuzione di una commodity può essere definito come segue:
	- *$n$ origini* con disponibilità pari a $a_i$ unità, $i = 1, \dots, n$;
	- *$m$ destinazioni* con richiesta di $b_j$ unità, $j = 1, \dots, m$;
	- il costo $c_{ij}$ per trasferire una unità della commodity (e.g., 1 Euro) dalla sorgente $i$ alla destinazione $j$.
	
>es di commodity: gas, petrolio, prodotto...
>**"multi commodity"** -> il problema diventa molto difficile, nella realtà sono quasi tutti multi commodity

---
## Slide 46 – Il problema dei trasporti con costi fissi (3)

- Si vuole determinare come trasferire la commodity dalle origini alle destinazioni rispettando i vincoli su disponibilità e richieste, minimizzando il costo totale.
- Spesso il costo di ciascun "trasferimento", oltre ad avere un ***costo variabile*** $c_{ij}$ (che è proporzionale alla quantità trasferita), ha anche un ***costo fisso*** $f_{ij}$ (che si paga se viene trasferita una quantità strettamente maggiore di zero da $i$ a $j$).
- In presenza di costi fissi come si può modellare il problema? E' ancora un problema facile?

>> Il costo del collegamento $(i,j)$ diventa $g(x_{ij}) = 0$ se $x_{ij} = 0$ e $g(x_{ij}) = f_{ij} + c_{ij} x_{ij}$ se $x_{ij} > 0$: una funzione **discontinua** in 0 (e non convessa), che non si può esprimere con sole variabili continue in un modello lineare. Servono variabili binarie, come nella slide seguente.

---
## Slide 47 – Il problema dei trasporti con costi fissi (4)

- **Modello matematico:**

$$
\begin{aligned}
\min\ z = {} & \sum_{i=1}^{n} \sum_{j=1}^{m} c_{ij} x_{ij} + \sum_{i=1}^{n} \sum_{j=1}^{m} f_{ij} y_{ij} \\
\text{s.t. } & \sum_{j=1}^{m} x_{ij} = a_i, && i = 1, \dots, n \\
& \sum_{i=1}^{n} x_{ij} = b_j, && j = 1, \dots, m \\
& x_{ij} \le M_{ij} y_{ij}, && i = 1, \dots, n,\ j = 1, \dots, m \\
& x_{ij} \ge 0, \text{ intera}, && i = 1, \dots, n,\ j = 1, \dots, m \\
& y_{ij} \in \{0, 1\}, && i = 1, \dots, n,\ j = 1, \dots, m
\end{aligned}
$$

  dove:
	- $x_{ij}$ rappresenta le unità trasferite da $i$ a $j$;
	- $y_{ij}$ è una variabile binaria $0-1$ uguale a 1 se e solo se $x_{ij} > 0$;
	- $M_{ij}$ è un numero sufficientemente grande, i.e., $M_{ij} = \min\{a_i, b_j\}$.
	
>vincoli dei trasporti rimangono inalterati, cambia che ce anche la componente di costo fisso oltre a quella di costo variabile. 
>appena tolgono i vincoli di interezza diventa frazionaria.

>> Il vincolo $x_{ij} \le M_{ij} y_{ij}$ (vincolo "big-M") realizza la logica: se $y_{ij} = 0$ allora $x_{ij} = 0$; se $y_{ij} = 1$ il vincolo non limita $x_{ij}$, perché comunque $x_{ij} \le a_i$ e $x_{ij} \le b_j$. L'implicazione inversa ($x_{ij} = 0 \Rightarrow y_{ij} = 0$) non è imposta da un vincolo ma dalla minimizzazione: se $f_{ij} > 0$ conviene porre $y_{ij} = 0$ ogni volta che è possibile.
>> Scegliere $M_{ij}$ il più piccolo possibile (qui $\min\{a_i, b_j\}$) è importante: un $M$ enorme rende il rilassamento continuo molto debole (con $y_{ij} = x_{ij}/M_{ij}$ frazionario il costo fisso viene quasi azzerato).

---
## Slide 48 – Il problema dei trasporti con costi fissi (5)

- Purtroppo il problema è difficile (NP-Hard) ed è un caso particolare del problema più generale di ***network design***.
- Solitamente la presenza di costi fissi induce a problemi di programmazione lineare mista intera difficili da risolvere.
- Inoltre, spesso nelle applicazioni del mondo reale è necessario considerare anche punti di smistamento/transito, per cui abbiamo bisogno del modello più generale del ***problema del flusso di costo minimo***.

---
## Slide 49 – Problema del flusso a costo minimo

- Dato un grafo orientato $G = (V, A)$, dove $V$ è l'insieme dei vertici (nodi) e $A$ è l'insieme degli archi.
- Il problema del flusso a costo minimo può essere definito utilizzando i seguenti parametri:
	- $b_i$: quantità di flusso immessa ($b_i > 0$) o assorbita ($b_i < 0$) in corrispondenza del vertice $i \in V$. Se $b_i = 0$, allora il flusso che entra nel vertice $i$ deve essere pari al flusso che esce.
	- $u_{ij}$: capacità dell'arco $(i, j) \in A$.
- I nodi con $b_i > 0$ sono le sorgenti, con $b_i < 0$ sono le destinazioni, mentre i nodi con $b_i = 0$ sono i punti di smistamento/transito.
- Le variabili $x_{ij}$ indicano quante unità di flusso attraversano l'arco $(i, j)$.

---
## Slide 50 – Problema del flusso a costo minimo (2)

- **Modello matematico: problema del flusso a costo minimo**

$$
\begin{aligned}
\min\ z = {} & \sum_{(i,j) \in A} c_{ij} x_{ij} \\
\text{s.t. } & \sum_{j \in \Gamma_i^+} x_{ij} - \sum_{j \in \Gamma_i^-} x_{ji} = b_i, && i \in V \\
& 0 \le x_{ij} \le u_{ij}, && (i, j) \in A
\end{aligned}
$$

>1 riga dei vincoli -> il bilancio fra ciò che arriva e ciò che parte deve essere uguale a $b_{i}$ 

- Se aggiungiamo un costo fisso $f_{ij}$ e le variabili $y_{ij}$ che indicano se l'arco $(i, j)$ è usato, otteniamo il modello matematico per il problema del network design.
- **Modello matematico: problema del ~~network design~~**
	- aggiungendo il costo fisso cambia il tipo di problema!

$$
\begin{aligned}
\min\ z = {} & \sum_{(i,j) \in A} c_{ij} x_{ij} + \sum_{(i,j) \in A} f_{ij} y_{ij} \\
\text{s.t. } & \sum_{j \in \Gamma_i^+} x_{ij} - \sum_{j \in \Gamma_i^-} x_{ji} = b_i, && i \in V \\
& 0 \le x_{ij} \le u_{ij} y_{ij}, && (i, j) \in A
\end{aligned}
$$

>> $\Gamma_i^+ = \{j : (i,j) \in A\}$ è l'insieme dei successori di $i$ (archi uscenti) e $\Gamma_i^- = \{j : (j,i) \in A\}$ quello dei predecessori (archi entranti): il vincolo dice "flusso uscente − flusso entrante = flusso immesso nel nodo" (vincolo di conservazione del flusso). Sommando su tutti i nodi ogni $x_{ij}$ compare una volta con $+$ e una con $-$, quindi il problema può essere ammissibile solo se $\sum_{i \in V} b_i = 0$.
>> Nel network design si sottintende $y_{ij} \in \{0,1\}$. Il problema dei trasporti è il caso particolare con grafo bipartito origini → destinazioni, flusso immesso $a_i$ nei nodi origine, flusso immesso $-b_j$ (cioè $b_j$ assorbito) nei nodi destinazione e capacità illimitate. Anche la matrice dei vincoli di flusso (matrice di incidenza nodi-archi di un grafo orientato) è totalmente unimodulare.

---
## Slide 51 – Mix ottimale di produzione

- Un'azienda che produce infissi in legno (L) e Alluminio(A) ha tre reparti di lavorazione:
	- lavorazione legno (Rep. L);
	- lavorazione alluminio (Rep. A);
	- assemblaggio e inserimento vetri (Rep. V).
- I tempi di produzione (in minuti) in ciascun reparto sono:

|                      | Rep. L | Rep. A | Rep. V |
| -------------------- | :----: | :----: | :----: |
| Infisso in alluminio |   0    | 10 min | 8 min  |
| Infisso in legno     | 21 min |   0    | 12 min |

- Il guadagno netto (in Euro) per infisso è:

|                      | soldi |
| -------------------- | :---: |
| Infisso in alluminio |  60   |
| Infisso in legno     |  180  |

---
## Slide 52 – Mix ottimale di produzione (2)

- Le ore lavorative totali disponibili settimanalmente per ciascun reparto sono:

| Reparto | Ore |
|---|:---:|
| Rep. A | 240 |
| Rep. L | 180 |
| Rep. V | 240 |

- Determinare il mix di prodotti che massimizza il guadagno, nel caso in cui si possa vendere tutta la produzione.
- Le variabili decisionali sono le seguenti:
	- $x_1$: numero infissi in alluminio prodotti;
	- $x_2$: numero infissi in legno prodotti.

---
## Slide 53 – Mix ottimale di produzione (3)

**Modello matematico:**

$$
\begin{array}{rrcrl}
\max\ z = & 60x_1 & + & 180x_2 & \\
\text{s.t.} & 10x_1 & & & \le 14400 \ (= 240 \times 60) \\
 & & & 21x_2 & \le 10800 \ (= 180 \times 60) \\
 & 8x_1 & + & 12x_2 & \le 14400 \ (= 240 \times 60) \\
 & x_1 & , & x_2 & \ge 0 \ \text{interi}
\end{array}
$$

![[RO03-s053-1.png|478]]

>> Le ore sono convertite in minuti (×60) perché i tempi di lavorazione sono in minuti. Nel grafico: la retta verticale è $x_1 \le 1440$ (Rep. A), quella orizzontale $x_2 \le 10800/21 = 3600/7 \approx 514.3$ (Rep. L), la retta obliqua $8x_1 + 12x_2 \le 14400$ (Rep. V, intercette $x_1 = 1800$ e $x_2 = 1200$); la freccia dall'origine indica la direzione di crescita dell'obiettivo, il gradiente $(60, 180)$.
>> L'ottimo del rilassamento continuo è il vertice in cui si intersecano i vincoli di Rep. L e Rep. V: da $x_2 = 3600/7$ si ha $8x_1 = 14400 - 12 \cdot 3600/7 = 57600/7$, cioè $x_1 = 7200/7 \approx 1028.57$, con $z^* = 1080000/7 \approx 154285.71$ €. (I valori $1028.5$ e $514.2$ in slide sono troncati.)
>> La soluzione è frazionaria, quindi non rispetta il vincolo di interezza: arrotondando per difetto si ottiene $(1028, 514)$, ammissibile con $z = 154200$, ma l'ottimo intero è $(1029, 514)$ con $z = 154260$ (infatti $8 \cdot 1029 + 12 \cdot 514 = 14400$ esatto). Qui arrotondare è quasi ottimo perché i valori sono grandi, ma in generale l'arrotondamento può essere molto lontano dall'ottimo intero o addirittura non ammissibile.

---
## Slide 54-55-56 – Manipolazioni di un problema

- **Minimizzazione e Massimizzazione**
  Un problema di massimo può essere convertito in un problema di minimo e viceversa:

$$
\max \sum_{j=1}^{n} c_j x_j = -\min \sum_{j=1}^{n} -c_j x_j
$$

- **Inversione di una disequazione**
  Una disequazione del tipo "$\ge$" si converte in una disequazione del tipo "$\le$" ~~moltiplicando entrambe i membri per $-1$~~:

$$
\sum_{j=1}^{n} a_{ij} x_j \ge b_i \implies \sum_{j=1}^{n} -a_{ij} x_j \le -b_i
$$
>bisogna stare attenti a fare operazioni lecite!

>> Nella prima trasformazione cambia solo il valore ottimo (di segno), non la soluzione ottima: il punto $\mathbf{x}^*$ che massimizza $\mathbf{c}\mathbf{x}$ è lo stesso che minimizza $-\mathbf{c}\mathbf{x}$. Esempio: $\max\{x : 0 \le x \le 3\} = 3$ e $-\min\{-x : 0 \le x \le 3\} = -(-3) = 3$.

- **Equazioni in disequazioni**
  Ad una equazione corrispondono 2 disequazioni:

$$
\sum_{j=1}^{n} a_{ij} x_j = b_i \implies
\begin{cases}
\sum_{j=1}^{n} a_{ij} x_j \ge b_i \\
\sum_{j=1}^{n} a_{ij} x_j \le b_i
\end{cases}
$$

- **Disequazioni in equazioni**
  Una disequazione può essere trasformata in una equazione utilizzando una ~~*variabile di scarto* non-negativa~~ (compensano quello che ho nella parte a sx in più rispetto a quello che ho nel termine noto, vincolo: devono essere $\geq$ 0):

$$
\sum_{j=1}^{n} a_{ij} x_j \ge b_i \implies \sum_{j=1}^{n} a_{ij} x_j - x_{n+i} = b_i
$$

$$
\sum_{j=1}^{n} a_{ij} x_j \le b_i \implies \sum_{j=1}^{n} a_{ij} x_j + x_{n+i} = b_i
$$

>> Si introduce una nuova variabile $x_{n+i} \ge 0$ per ogni vincolo $i$ (indice $n+i$ per non confondersi con le $n$ variabili originali) e con coefficiente nullo nella funzione obiettivo. Il suo valore misura "quanto manca" al vincolo per essere soddisfatto all'uguaglianza: $x_{n+i} = 0$ significa vincolo *attivo* (saturo). Nel caso "$\ge$" si parla anche di variabile di *surplus*. 
>> modo diverso per vederla: "aggiungi delle colonne in coda al problema", se il vincolo è $\leq$ il segno cambia.
>> Esempio: $2x_1 + 3x_2 \le 12$ diventa $2x_1 + 3x_2 + x_3 = 12$, $x_3 \ge 0$; nel punto $(3, 1)$ si ha $x_3 = 12 - 9 = 3$.

- **Non negatività delle variabili**
  Se nel modello del problema una variabile $x_j$ può assumere qualsiasi valore, allora può essere sostituita con 2 variabili $x_j^+$ e $x_j^-$ non-negative:

$$
x_j = x_j^+ - x_j^-, \quad x_j^+, x_j^- \ge 0
$$

>> Ogni numero reale si scrive come differenza di due non negativi (es. $-5 = 0 - 5$, ma anche $= 2 - 7$: la rappresentazione non è unica). Nelle soluzioni base (vertici) le colonne di $x_j^+$ e $x_j^-$ sono una l'opposta dell'altra, quindi linearmente dipendenti e non possono stare entrambe in base: al più una delle due è positiva, e si ottiene la scomposizione "naturale" $x_j^+ = \max\{x_j, 0\}$, $x_j^- = \max\{-x_j, 0\}$.
>> Alternativa: se $x_j$ compare in un vincolo di uguaglianza, la si può ricavare da quel vincolo ed eliminarla dal modello.

---
## Slide 57 – Forma canonica e forma standard

- **Forma "canonica"**

$$
\begin{aligned}
z = \min\ & \sum_{j=1}^{n} c_j x_j \\
\text{s.t. } & \sum_{j=1}^{n} a_{ij} x_j \ge b_i, && i = 1, \dots, m \\
& x_j \ge 0, && j = 1, \dots, n
\end{aligned}
$$

  Utile per illustrare le relazioni di dualità -> tutte disequazioni.

- **Forma "standard"**

$$
\begin{aligned}
z = \min\ & \sum_{j=1}^{n} c_j x_j \\
\text{s.t. } & \sum_{j=1}^{n} a_{ij} x_j = b_i, && i = 1, \dots, m \\
& x_j \ge 0, && j = 1, \dots, n
\end{aligned}
$$

  Necessaria per risolvere il problema con algoritmi come il simplesso -> tutte equazioni.

>> In forma matriciale: canonica $\min\{\mathbf{c}\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b},\ \mathbf{x} \ge \mathbf{0}\}$, standard $\min\{\mathbf{c}\mathbf{x} : \mathbf{A}\mathbf{x} = \mathbf{b},\ \mathbf{x} \ge \mathbf{0}\}$. ~~Grazie alle manipolazioni delle slide precedenti **qualunque** problema di PL si può portare in entrambe le forme.~~
>> Esempio: $\max\{3x_1 + 2x_2 : x_1 + x_2 \le 4,\ x_1 \ge 1,\ x_1 \ge 0,\ x_2 \text{ libera}\}$ in forma standard diventa $\min\{-3x_1 - 2x_2^+ + 2x_2^- : x_1 + x_2^+ - x_2^- + x_3 = 4,\ x_1 - x_4 = 1,\ x_1, x_2^+, x_2^-, x_3, x_4 \ge 0\}$ (e il valore ottimo va cambiato di segno).

---
## Slide 58-59 – Definizione di Soluzione Base Ammissibile

- Si consideri il seguente problema:

$$
\begin{aligned}
\min\ z = {} & \mathbf{c}\mathbf{x} \\
\text{s.t. } & \mathbf{A}\mathbf{x} = \mathbf{b} \\
& \mathbf{x} \ge \mathbf{0}
\end{aligned}
$$

  dove $\mathbf{A} \in \mathbb{R}^{m,n}$, $\mathbf{c}, \mathbf{x} \in \mathbb{R}^n$, e $\mathbf{b} \in \mathbb{R}^m$.

- Il problema deve essere definito necessariamente in ~~forma *standard*~~. Per cui se eventualmente alcuni vincoli sono disequazioni devono essere trasformati in equazioni.
- Si suppone per semplicità che (ipotesi che non mi toglie generalità grazie al modo in cui il metodo del simplesso funziona):

$$
\mathit{Rango}(\mathbf{A}, \mathbf{b}) = \mathit{Rango}(\mathbf{A}) = m
$$

>> $\text{Rango}(\mathbf{A},\mathbf{b}) = \text{Rango}(\mathbf{A})$ è la condizione di Rouché–Capelli: il sistema $\mathbf{A}\mathbf{x} = \mathbf{b}$ ha soluzioni. $\text{Rango}(\mathbf{A}) = m$ significa che le $m$ righe sono linearmente indipendenti, cioè non ci sono vincoli ridondanti (implica $m \le n$). Non è una vera restrizione: i vincoli ridondanti si possono eliminare, e se si parte da vincoli $\le$ con variabili di scarto la matrice contiene l'identità $\mathbf{I}_m$ e ha automaticamente rango $m$.
>> Qui $\mathbf{c}$ è un vettore riga, per cui $\mathbf{c}\mathbf{x} = \sum_j c_j x_j$ (altrove si scrive $\mathbf{c}^T\mathbf{x}$).

>il gradiente è c, noi per minimizzare dobbiamo andare in direzione -c.
>N.B: a parità di vincoli posso avere funzioni obbiettivo diverse!

- La matrice $\mathbf{A}$ può essere riscritta per comodità nella forma

$$
\mathbf{A} = [\mathbf{B}, \mathbf{N}]
$$

  dove $\mathbf{B} \in \mathbb{R}^{m,m}$ corrisponde a $m$ colonne linearmente indipendenti ed $\mathbf{N} \in \mathbb{R}^{m,n-m}$ sono le rimanenti $n - m$ colonne di $\mathbf{A}$.

- Ponendo $\mathbf{x}^T = [\mathbf{x}_\mathbf{B}, \mathbf{x}_\mathbf{N}]$ il sistema dei vincoli $\mathbf{A}\mathbf{x} = \mathbf{b}$ può essere riscritto come:

$$
[\mathbf{B}, \mathbf{N}] \begin{bmatrix} \mathbf{x}_\mathbf{B} \\ \mathbf{x}_\mathbf{N} \end{bmatrix} = \mathbf{b} \quad \Rightarrow \quad \mathbf{B}\mathbf{x}_\mathbf{B} + \mathbf{N}\mathbf{x}_\mathbf{N} = \mathbf{b}
$$

  e poichè $\mathbf{B}$ è invertibile si ha:

$$
\mathbf{x}_\mathbf{B} = \mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{N}\mathbf{x}_\mathbf{N}
$$

>> $\mathbf{B}$ si chiama **matrice di base**: le variabili $\mathbf{x}_\mathbf{B}$ (associate alle sue colonne) sono le *variabili in base*, le $\mathbf{x}_\mathbf{N}$ le *variabili fuori base*. Scrivere $\mathbf{A} = [\mathbf{B}, \mathbf{N}]$ presuppone di aver riordinato le colonne: in pratica si sceglie un qualunque sottoinsieme di $m$ colonne linearmente indipendenti. L'ultima formula dice che, fissati liberamente i valori delle $n - m$ variabili fuori base, le variabili in base sono determinate univocamente.

---
## Slide 60 – Definizione di Soluzione Base Ammissibile (3)

- Se fissiamo $\mathbf{x}_\mathbf{N} = \mathbf{0}$, la soluzione $\mathbf{x} = [\mathbf{x}_\mathbf{B}, \mathbf{x}_\mathbf{N}] = [\mathbf{B}^{-1}\mathbf{b}, \mathbf{0}]$ rappresenta una ***Soluzione Base***.
- Nel caso in cui $\mathbf{x}_\mathbf{B} \ge \mathbf{0}$ (i.e., soddisfa i vincoli di non negatività) diremo che $\mathbf{x}$ è una ***Soluzione Base Ammissibile***.

>> **Esempio.** Vincoli $x_1 + x_2 \le 4$, $x_1 \le 3$, $x_1, x_2 \ge 0$. In forma standard: $x_1 + x_2 + x_3 = 4$, $x_1 + x_4 = 3$, quindi
>> $\mathbf{A} = \begin{bmatrix} 1 & 1 & 1 & 0 \\ 1 & 0 & 0 & 1 \end{bmatrix}$, $\mathbf{b} = \begin{bmatrix} 4 \\ 3 \end{bmatrix}$, con $m = 2$, $n = 4$.
>> Le scelte di 2 colonne su 4 sono $\binom{4}{2} = 6$:
>>
>> | Colonne in base | Soluzione base $(x_1, x_2, x_3, x_4)$ | Ammissibile? | Punto $(x_1, x_2)$ |
>> |---|---|---|---|
>> | $\{x_1, x_2\}$ | $(3, 1, 0, 0)$ | sì | $(3, 1)$ |
>> | $\{x_1, x_3\}$ | $(3, 0, 1, 0)$ | sì | $(3, 0)$ |
>> | $\{x_1, x_4\}$ | $(4, 0, 0, -1)$ | no ($x_4 < 0$) | $(4, 0)$ |
>> | $\{x_2, x_3\}$ | — (colonne uguali, $\mathbf{B}$ singolare) | non è una base | — |
>> | $\{x_2, x_4\}$ | $(0, 4, 0, 3)$ | sì | $(0, 4)$ |
>> | $\{x_3, x_4\}$ | $(0, 0, 4, 3)$ | sì | $(0, 0)$ |
>>
>> Le 4 soluzioni base ammissibili sono esattamente i 4 vertici del quadrilatero ammissibile nel piano $(x_1, x_2)$; la soluzione base non ammissibile $(4,0)$ è l'intersezione delle rette $x_1 + x_2 = 4$ e $x_2 = 0$, che cade fuori dalla regione (viola $x_1 \le 3$).

---
## Slide 61 – Insieme Poliedrico Convesso

- Un ***Insieme Poliedrico Convesso*** è definito dall'intersezione di un numero finito di sottospazi chiusi:

$$
X = \{\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b}, \mathbf{x} \ge \mathbf{0}\}
$$

  oppure

$$
X = \{\mathbf{x} : \mathbf{A}\mathbf{x} = \mathbf{b}, \mathbf{x} \ge \mathbf{0}\}
$$

- Ogni punto $\mathbf{x}$ di un insieme poliedrico convesso $X$, che non può essere espresso come combinazione convessa di due punti $\mathbf{x}^1, \mathbf{x}^2 \in X$ tali che $\mathbf{x}^1 \ne \mathbf{x}$ e $\mathbf{x}^2 \ne \mathbf{x}$, è detto ***Punto Estremo*** di X.

>> I "sottospazi chiusi" sono **semispazi** chiusi, cioè insiemi del tipo $\{\mathbf{x} : \mathbf{a}_i\mathbf{x} \ge b_i\}$; un'uguaglianza equivale a due semispazi (slide 55). L'intersezione di insiemi convessi è convessa, quindi $X$ è convesso.
>> Combinazione convessa di $\mathbf{x}^1, \mathbf{x}^2$: $\mathbf{x} = \lambda\mathbf{x}^1 + (1-\lambda)\mathbf{x}^2$ con $\lambda \in [0,1]$, cioè un punto del segmento che li unisce. Un punto estremo è quindi un punto che non sta "in mezzo" a nessun segmento contenuto in $X$: geometricamente, un **vertice**. In un quadrato sono estremi solo i 4 vertici; in un cerchio (convesso ma non poliedrico) lo sono tutti i punti della circonferenza.

---
## Slide 62 – Insieme Poliedrico Convesso (2)

**Teorema.** L'insieme dei punti estremi dell'insieme poliedrico convesso $X = \{\mathbf{x} : \mathbf{A}\mathbf{x} = \mathbf{b}, \mathbf{x} \ge \mathbf{0}\}$ corrisponde all'insieme delle soluzioni base ammissibili.

**Teorema.** Un insieme poliedrico convesso $X = \{\mathbf{x} : \mathbf{A}\mathbf{x} = \mathbf{b}, \mathbf{x} \ge \mathbf{0}\}$ ha un numero finito di punti estremi.

**Dimostrazione.** Se la matrice $\mathbf{A}$ di ordine $(m \times n)$ è di rango pieno, allora il numero massimo di basi è pari al numero di possibili scelte di $m$ delle $n$ colonne di $\mathbf{A}$; ossia:

$$
\binom{n}{m} = \frac{n!}{m!(n-m)!}
$$

**Teorema.** Se la soluzione ottima di un problema di programmazione lineare è finita, allora il punto di minimo si ottiene in corrispondenza di almeno uno dei punti estremi (i.e. soluzione base ammissibile).

>> Questi teoremi sono la base del simplesso: invece di cercare l'ottimo tra gli infiniti punti di $X$ basta cercarlo tra le soluzioni base ammissibili, che sono in numero finito. Nell'esempio della slide 60: $\binom{4}{2} = 6$ scelte di colonne, 5 basi, 4 soluzioni base ammissibili = 4 vertici.
>> Il bound $\binom{n}{m}$ cresce però in modo esponenziale (es. $\binom{40}{20} \approx 1.38 \cdot 10^{11}$), per cui enumerare tutte le basi non è praticabile: il simplesso le visita in modo "intelligente", passando da una base a una adiacente che migliora l'obiettivo.
>> Il teorema dice "almeno uno": l'ottimo può essere anche un intero lato (o faccia) di $X$, quando la funzione obiettivo è parallela a esso; anche in quel caso tra i punti ottimi c'è almeno un vertice.

---
## Slide 63 – Insieme Poliedrico Convesso (3)

- Un vettore non nullo $\mathbf{d}$ è detto *direzione* dell'insieme convesso $X$, se dato un qualsiasi punto $\mathbf{x}_0 \in X$ ogni altro punto $\mathbf{x} = \mathbf{x}_0 + \lambda\mathbf{d}$, $\lambda \ge 0$, appartiene a $X$.

**Teorema.** Dato un insieme poliedrico convesso $X = \{\mathbf{x} : \mathbf{A}\mathbf{x} = \mathbf{b}, \mathbf{x} \ge \mathbf{0}\}$, il vettore $\mathbf{d}$ è direzione di $X$ se e solo se:

$$
\mathbf{A}\mathbf{d} = \mathbf{0}, \quad \mathbf{d} \ge \mathbf{0}, \quad \mathbf{d} \ne \mathbf{0}
$$

- Due vettori $\mathbf{d}_1$ e $\mathbf{d}_2$ sono distinti se $\mathbf{d}_1 \ne \beta\mathbf{d}_2$ per ogni $\beta$.
- Un vettore $\mathbf{d}$ è detto **direzione estrema** di $X$ se non può essere rappresentato come combinazione lineare di altre due direzioni distinte $\mathbf{d}_1$ e $\mathbf{d}_2$.

>> Perché il teorema vale: $\mathbf{A}(\mathbf{x}_0 + \lambda\mathbf{d}) = \mathbf{b} + \lambda\mathbf{A}\mathbf{d} = \mathbf{b}$ per ogni $\lambda$ se e solo se $\mathbf{A}\mathbf{d} = \mathbf{0}$; e $\mathbf{x}_0 + \lambda\mathbf{d} \ge \mathbf{0}$ per ogni $\lambda \ge 0$ (anche grande) se e solo se $\mathbf{d} \ge \mathbf{0}$. Solo un poliedro **illimitato** ha direzioni.
>> "Distinti" significa non proporzionali: $\mathbf{d}$ e $2\mathbf{d}$ individuano la stessa direzione. La combinazione lineare nella definizione di direzione estrema va intesa con coefficienti positivi ($\mathbf{d} = \mu_1\mathbf{d}_1 + \mu_2\mathbf{d}_2$, $\mu_1, \mu_2 > 0$): le direzioni estreme sono gli "spigoli" del cono delle direzioni.
>> Esempio: $X = \{(x_1, x_2) \ge \mathbf{0} : x_2 \le 1\}$ (una striscia infinita). La sola direzione estrema è $(1, 0)$; nel primo ortante $\{\mathbf{x} \ge \mathbf{0}\}$ di $\mathbb{R}^2$ le direzioni estreme sono $(1,0)$ e $(0,1)$, mentre $(1,1) = (1,0) + (0,1)$ è una direzione ma non estrema.

---
## Slide 64 – Insieme Poliedrico Convesso (4)

**Teorema della Rappresentazione.**
Sia dato un insieme poliedrico convesso $X = \{\mathbf{x} : \mathbf{A}\mathbf{x} = \mathbf{b}, \mathbf{x} \ge \mathbf{0}\}$.
Sia $P = \{\mathbf{x}_i : i = 1, \dots, np\}$ l'insieme di tutti i punti estremi di $X$ e sia $D = \{\mathbf{d}_j : j = 1, \dots, nd\}$ l'insieme di tutte le direzione estreme di $X$.
Ogni punto di $X$ può essere rappresentato come:

$$
\begin{aligned}
\mathbf{x} = {} & \sum_{i=1}^{np} \lambda_i \mathbf{x}_i + \sum_{j=1}^{nd} \mu_j \mathbf{d}_j \\
\text{s.t. } & \sum_{i=1}^{np} \lambda_i = 1 \\
& \lambda_i \ge 0, && i = 1, \dots, np \\
& \mu_j \ge 0, && j = 1, \dots, nd
\end{aligned}
$$

**NOTA:** Se il poliedro è limitato, allora $D = \emptyset$.

>> In parole: ogni punto di $X$ è "una combinazione convessa dei vertici" (un punto del poligono dei vertici) "più una combinazione a coefficienti non negativi delle direzioni estreme" (uno spostamento verso l'infinito lungo il cono delle direzioni). Se $X$ è limitato (politopo) resta solo la prima parte: ogni punto è combinazione convessa dei suoi vertici.
>> Esempio: nella striscia $X = \{(x_1, x_2) \ge \mathbf{0} : x_2 \le 1\}$ i punti estremi sono $(0,0)$ e $(0,1)$, la direzione estrema è $(1,0)$; il punto $(5, 0.3)$ si scrive $0.7\,(0,0) + 0.3\,(0,1) + 5\,(1,0)$.

---
## Slide 65 – Insieme Poliedrico Convesso (5)

**Teorema della Rappresentazione**

![[RO03-s065-1.png]]

>> La figura mostra un poliedro illimitato $X$ con punti estremi $\mathbf{x}_1, \mathbf{x}_2, \mathbf{x}_3$ e direzioni estreme $\mathbf{d}_1, \mathbf{d}_2$. Un generico punto $\mathbf{x} \in X$ si ottiene partendo da un punto $\mathbf{p} = \sum_i \lambda_i \mathbf{x}_i$ del triangolo formato dai vertici e spostandosi lungo $\sum_j \mu_j \mathbf{d}_j$, cioè in una direzione del "cono" generato da $\mathbf{d}_1$ e $\mathbf{d}_2$.

---
## Slide 66 – Insieme Poliedrico Convesso (6)

**Teorema.** La soluzione ottima di un problema di programmazione lineare è finita se e solo se $\mathbf{c}\mathbf{d}_j \ge 0$, $j = 1, \dots, nd$. In questo caso il minimo si ottiene in corrispondenza di almeno uno dei punti estremi.

**Dimostrazione.** Dal Teorema della Rappresentazione deriva si ottiene che la funzione obiettivo può essere riscritto come:

$$
\min z = \mathbf{c}\mathbf{x} = \sum_{i=1}^{np} (\mathbf{c}\mathbf{x}_i)\lambda_i + \sum_{j=1}^{nd} (\mathbf{c}\mathbf{d}_j)\mu_j
$$

Se per almeno una direzione estrema $\mathbf{d}_j$ abbiamo che $\mathbf{c}\mathbf{d}_j < 0$, allora possiamo aumentare arbitrariamente $\mu_j$ e la funzione obiettivo risulterà illimitata.

>> Il teorema presuppone $X \ne \emptyset$. L'altra metà della dimostrazione: se $\mathbf{c}\mathbf{d}_j \ge 0$ per ogni $j$, conviene porre tutti i $\mu_j = 0$ (i termini con le direzioni non possono che aumentare $z$). Resta $\sum_i (\mathbf{c}\mathbf{x}_i)\lambda_i$ con $\lambda_i \ge 0$, $\sum_i \lambda_i = 1$: una media pesata dei valori $\mathbf{c}\mathbf{x}_i$, che è minima mettendo tutto il peso ($\lambda_k = 1$) sul vertice con $\mathbf{c}\mathbf{x}_k = \min_i \mathbf{c}\mathbf{x}_i$. Quindi il minimo esiste finito ed è raggiunto in un punto estremo: è la dimostrazione del terzo teorema della slide 62.
>> Interpretazione: $\mathbf{c}\mathbf{d}_j < 0$ significa che muovendosi lungo $\mathbf{d}_j$ (sempre restando in $X$) il costo diminuisce senza limite. Esempio: $\min\{-x_1 : \mathbf{x} \in X\}$ sulla striscia della slide 64 è illimitato, perché $\mathbf{c}\mathbf{d} = (-1, 0) \cdot (1, 0) = -1 < 0$; invece $\min\{x_1 + x_2\}$ sulla stessa striscia ha ottimo finito nel vertice $(0,0)$.

---
## Slide 67 – Insieme Poliedrico Convesso (7)

Invece, se per ogni direzione $\mathbf{d}_j$ abbiamo che $\mathbf{c}\mathbf{d}_j \geq 0$ oppure non ne abbiamo, allora nella soluzione ottima avremo $\mu_j = 0$, per ogni $j = 1, \dots, nd$.
In questo caso la funzione obiettivo si riduce a:

$$\min z = \mathbf{c}\mathbf{x} = \sum_{i=1}^{np} (\mathbf{c}\mathbf{x}_i)\lambda_i$$

Siccome $\sum_{i=1}^{np} \lambda_i = 1$ e $\lambda_i \geq 0$, allora la soluzione è sicuramente finita.
Sia $x_p$ il punto extremo tale che $\mathbf{c}\mathbf{x}_p \leq \mathbf{c}\mathbf{x}_i$, per ogni $i = 1, \dots, np$.
Se ora consideriamo un qualsiasi punto $\mathbf{x} \in X$ avremo:

$$\mathbf{c}\mathbf{x} = \sum_{i=1}^{np} (\mathbf{c}\mathbf{x}_i)\lambda_i \geq \sum_{i=1}^{np} (\mathbf{c}\mathbf{x}_p)\lambda_i = (\mathbf{c}\mathbf{x}_p)\sum_{i=1}^{np} \lambda_i = \mathbf{c}\mathbf{x}_p$$

quindi

$$\mathbf{c}\mathbf{x} \geq \mathbf{c}\mathbf{x}_p$$

>> **Intuizione:** una media pesata (con pesi non negativi a somma 1) di numeri non può essere più piccola del più piccolo di essi. Poiché ogni punto di $X$ è (a meno delle direzioni, che qui non aiutano) una combinazione convessa dei punti estremi, il suo costo è una media dei costi dei vertici, quindi almeno pari al costo del vertice migliore $\mathbf{x}_p$.
>> Questo è il **teorema fondamentale della PL**: se il problema ha ottimo finito, allora almeno un punto estremo (vertice) è ottimo. Per questo il simplesso può limitarsi a esplorare le soluzioni base ammissibili.

---
## Slide 68 – Migliorare una Soluzione Base

- Il valore della funzione obiettivo corrispondente alla soluzione base $\mathbf{x} = [\mathbf{x}_B, \mathbf{x}_N] = [\mathbf{B}^{-1}\mathbf{b}, \mathbf{0}]$, è dato dall'espressione:
$$z = [\mathbf{c}_B, \mathbf{c}_N]\begin{bmatrix} \mathbf{x}_B \\ \mathbf{x}_N \end{bmatrix} = \mathbf{c}_B\mathbf{B}^{-1}\mathbf{b}$$
- Per determinare come varia la funzione obiettivo per valori non nulli delle variabili non base $\mathbf{x}_N$, dato che $\mathbf{x}_B = \mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{N}\mathbf{x}_N$, avremo:
$$\begin{aligned}
z &= \mathbf{c}_B\mathbf{x}_B + \mathbf{c}_N\mathbf{x}_N \\
&= \mathbf{c}_B(\mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{N}\mathbf{x}_N) + \mathbf{c}_N\mathbf{x}_N \\
&= \mathbf{c}_B\mathbf{B}^{-1}\mathbf{b} - (\mathbf{c}_B\mathbf{B}^{-1}\mathbf{N} - \mathbf{c}_N)\mathbf{x}_N
\end{aligned}$$

>> L'espressione $\mathbf{x}_B = \mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{N}\mathbf{x}_N$ deriva semplicemente dai vincoli $\mathbf{B}\mathbf{x}_B + \mathbf{N}\mathbf{x}_N = \mathbf{b}$, moltiplicati a sinistra per $\mathbf{B}^{-1}$. In pratica si "eliminano" le variabili base dalla funzione obiettivo, esprimendo $z$ solo in funzione delle variabili non base: il primo termine è il costo attuale, il secondo dice come cambia $z$ se "accendiamo" qualche variabile non base.

---
## Slide 69 – Migliorare una Soluzione Base (2)

- Se definiamo $\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1}$ possiamo scrivere:
$$z = \mathbf{w}\mathbf{b} - (\mathbf{w}\mathbf{N} - \mathbf{c}_N)\mathbf{x}_N = \mathbf{w}\mathbf{b} - \sum_{k \in N}(\mathbf{w}\mathbf{a}_k - c_k)x_k$$
	dove $N$ è l'insieme degli indici delle variabili/colonne non base.
- Se $(\mathbf{w}\mathbf{N} - \mathbf{c}_N) \leq \mathbf{0}$ la soluzione base ammissibile $\mathbf{x}$ è *ottima*.
- Nel caso, invece, esistesse una colonna $k$ non base tale che:
$$\mathbf{w}\mathbf{a}_k - c_k > 0$$
	allora il valore della funzione obiettivo può decrescere dal valore attuale $z_0 = \mathbf{c}_B\mathbf{B}^{-1}\mathbf{b} = \mathbf{w}\mathbf{b}$ al valore:
$$z = z_0 - (\mathbf{w}\mathbf{a}_k - c_k)x_k$$

>> Le quantità $\mathbf{w}\mathbf{a}_k - c_k$ (spesso indicate $z_k - c_k$) sono i **costi ridotti** (con questa convenzione di segno). Poiché le variabili non base possono solo crescere da $0$ (vincolo $\mathbf{x}_N \geq \mathbf{0}$), per un problema di minimo:
>> - se tutti i $\mathbf{w}\mathbf{a}_k - c_k \leq 0$, aumentare qualsiasi $x_k$ non fa diminuire $z$ $\Rightarrow$ ottimo;
>> - se qualche $\mathbf{w}\mathbf{a}_k - c_k > 0$, ogni unità di $x_k$ fa scendere $z$ di $\mathbf{w}\mathbf{a}_k - c_k$.
>>
>> Il vettore $\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1}$ è il vettore dei *moltiplicatori del simplesso*: come si vedrà nella parte sulla dualità, all'ottimo è proprio la soluzione duale ottima.

---
## Slide 70 – Migliorare una Soluzione Base (3)

- L'entità del miglioramento della funzione obiettivo dipende dal valore massimo che la variabile $x_k$ può assumere, garantendo che la nuova soluzione sia sempre Base Ammissibile.
- Per determinare di quanto posso aumentare la variabile $x_k$ per avere un nuova soluzione Base Ammissibile, dobbiamo considerare l'equazione che dermina la soluzione $\mathbf{x}_B$ in funzione di $\mathbf{x}_N$:
$$\mathbf{x}_B = \mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{N}\mathbf{x}_N$$
	che possiamo riscrivere come:
$$\mathbf{x}_B = \bar{\mathbf{b}} - \mathbf{y}^k x_k$$
	dove $\bar{\mathbf{b}} = \mathbf{B}^{-1}\mathbf{b}$ e $\mathbf{y}^k = \mathbf{B}^{-1}\mathbf{a}_k$ (ipotizzando che $x_j = 0,\ \forall j \in N \setminus \{k\}$).

>> $\mathbf{y}^k = \mathbf{B}^{-1}\mathbf{a}_k$ contiene i coefficienti con cui la colonna $\mathbf{a}_k$ si scrive come combinazione lineare delle colonne di base: $\mathbf{a}_k = \mathbf{B}\mathbf{y}^k$. Aumentando $x_k$ di una unità, per restare su $\mathbf{A}\mathbf{x} = \mathbf{b}$ le variabili base devono diminuire di $\mathbf{y}^k$. Geometricamente ci si muove lungo uno *spigolo* del poliedro che parte dal vertice corrente, nella direzione $\mathbf{d} = \begin{bmatrix} -\mathbf{y}^k \\ \mathbf{e}_k \end{bmatrix}$ (componenti base e non base).

---
## Slide 71 – Migliorare una Soluzione Base (4)

- Per ogni componente $i$-esima di $\mathbf{x}_B$, $i = 1, \dots, m$, abbiamo che:
$$x_i = \bar{b}_i - y_i^k x_k$$
- Se vogliamo che la soluzione base rimanga ammissibile dobbiamo aumentare $x_k$ in modo che:
$$x_i = \bar{b}_i - y_i^k x_k \geq 0$$
- Quindi per ogni $i$ la variabile $x_k$ deve rispettare la condizione:
$$x_k \leq \frac{\bar{b}_i}{y_i^k}$$

>> Attenzione: la divisione per $y_i^k$ conserva il verso della disuguaglianza solo se $y_i^k > 0$. Se $y_i^k \leq 0$, allora $x_i = \bar{b}_i - y_i^k x_k \geq \bar{b}_i \geq 0$ per ogni $x_k \geq 0$: la componente $i$ non pone alcun limite alla crescita di $x_k$. Per questo nella slide successiva il rapporto si considera solo sulle righe con $y_i^k > 0$.

---
## Slide 72 – Migliorare una Soluzione Base (5)

- Il valore massimo che la variabile $x_k$ può assumere è dato dal cosiddetto ***Rapporto Minimo***:
$$x_k = \frac{\bar{b}_r}{y_r^k} = \min_{i=1,\dots,m}\left[\frac{\bar{b}_i}{y_i^k} : y_i^k > 0\right]$$
- Nel caso in cui $\mathbf{y}^k \leq \mathbf{0}$ la funzione obiettivo è ***illimitata***, in quanto $(\mathbf{w}\mathbf{a}_k - c_k) > 0$ e $x_k$ può arbitrariamente crescere garantendo l'ammissibilità della soluzione.

>> **Esempio:** se $\bar{\mathbf{b}} = (4, 1, 6)$ e $\mathbf{y}^k = (1, -2, 3)$, i rapporti validi sono $4/1 = 4$ e $6/3 = 2$ (la riga 2 ha $y_2^k < 0$ e si ignora). Il minimo è $2$, raggiunto per $r = 3$: $x_k = 2$ e la terza variabile base si azzera ed esce dalla base. La nuova soluzione è $\mathbf{x}_B = (4-2,\ 1+4,\ 6-6) = (2, 5, 0)$.
>>
>> Se $\bar{b}_r = 0$ (soluzione **degenere**) il passo è nullo: la base cambia ma il vertice e il valore di $z$ restano gli stessi. In caso di parità nel rapporto minimo, dopo il cambio base un'altra variabile base resta a zero (degenerazione).

---
## Slide 73 – Migliorare una Soluzione Base (6)

- Una volta aggiornato il valore della variabile $x_k$ tutte le variabili $x_i$ in base sono aggiornate come segue:
$$x_i = \bar{b}_i - y_i^k \frac{\bar{b}_r}{y_r^k}$$
	mentre tutte le altre variabili non base diverse da $k$ rimangono nulle.
- Si noti che la variabile $x_r$ dopo essere stata aggiornata sarà nulla e la colonna $\mathbf{a}_k$ sostituisce la colonna $\mathbf{a}_r$ nella base $\mathbf{B}$.
- Diremo che $x_k$ ***entra*** in base, mentre $x_r$ ***esce*** dalla base.

>> Per $i = r$ si ottiene $x_r = \bar{b}_r - y_r^k \frac{\bar{b}_r}{y_r^k} = 0$. La nuova matrice di base resta invertibile perché $y_r^k \neq 0$: la colonna $\mathbf{a}_k = \mathbf{B}\mathbf{y}^k$ ha una componente non nulla lungo $\mathbf{a}_r$, quindi sostituendo $\mathbf{a}_r$ con $\mathbf{a}_k$ le colonne restano linearmente indipendenti. Il nuovo valore dell'obiettivo è $z = z_0 - (\mathbf{w}\mathbf{a}_k - c_k)\,\frac{\bar{b}_r}{y_r^k} \leq z_0$.

---
## Slide 74 – Algoritmo del Simplesso Primale

*Step*1. **Inizializzazione:**
	Definisce una soluzione base ammissibile
	$\mathbf{x} = [\mathbf{x}_B, \mathbf{x}_N] = [\mathbf{B}^{-1}\mathbf{b}, \mathbf{0}] = [\bar{\mathbf{b}}, \mathbf{0}]$ di costo $z = \mathbf{c}_B\mathbf{x}_B = \mathbf{c}_B\mathbf{B}^{-1}\mathbf{b}$.

*Step*2. **Pricing:**
	Calcola $\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1}$, che equivale a risolvere $\mathbf{w}\mathbf{B} = \mathbf{c}_B$.
	Calcola i *costi ridotti* $\mathbf{w}\mathbf{a}_j - c_j$ per le variabili non-base $j \in N$ e determina:
$$\mathbf{w}\mathbf{a}_k - c_k = \max_{j \in N}\left\{\mathbf{w}\mathbf{a}_j - c_j\right\}$$

*Step*3. **Condizioni di ottimalità:**
	Se $\mathbf{w}\mathbf{a}_k - c_k < 0$, allora STOP la soluzione è *ottima*.

*Step*4. **La variabile $k$ è candidata a entrare in base:**
	Calcola $\mathbf{y}^k = \mathbf{B}^{-1}\mathbf{a}_k$, che equivale a risolvere $\mathbf{B}\mathbf{y}^k = \mathbf{a}_k$.
	Se $\mathbf{y}^k \leq \mathbf{0}$, allora STOP la soluzione è *illimitata*.

>> Nello Step 3 la condizione di ottimalità vale anche con l'uguaglianza: se $\max_{j \in N}\{\mathbf{w}\mathbf{a}_j - c_j\} \leq 0$ la soluzione è ottima (come nella slide 69). Un costo ridotto nullo per una variabile non base segnala tipicamente la presenza di **ottimi alternativi** (farla entrare non cambia $z$).
>>
>> La regola di scelta "massimo costo ridotto" è la *regola di Dantzig*; qualunque $k$ con costo ridotto positivo va bene. Nella pratica non si calcola mai $\mathbf{B}^{-1}$ esplicitamente: si risolvono i sistemi lineari $\mathbf{w}\mathbf{B} = \mathbf{c}_B$ e $\mathbf{B}\mathbf{y}^k = \mathbf{a}_k$ (ad es. con fattorizzazione LU).

---
## Slide 75 – Algoritmo del Simplesso Primale (2)

*Step*5. **Rapporto minimo:**
	Calcola il valore da assegnare a $x_k$:
$$x_k = \frac{\bar{b}_r}{y_r^k} = \min\left\{\frac{\bar{b}_i}{y_i^k} : y_i^k > 0,\ i = 1, \dots, m\right\}$$
	La variabile $x_r$ esce dalla base e $x_k$ entra al suo posto.
	Aggiorna $\mathbf{B}$, $\mathbf{N}$ e la soluzione base $\mathbf{x} = [\mathbf{x}_B, \mathbf{x}_N] = [\bar{\mathbf{b}}, \mathbf{0}]$.
	Ritorna allo Step 2.

>> A ogni iterazione non degenere $z$ diminuisce strettamente, e siccome le basi sono in numero finito (al più $\binom{n}{m}$) nessuna base si ripete: l'algoritmo termina in un numero finito di passi. In presenza di degenerazione il simplesso può invece **ciclare** (ripetere basi con lo stesso $z$); si evita con regole anti-ciclo come la *regola di Bland* (scegliere sempre l'indice più piccolo tra i candidati a entrare e a uscire).

---
## Slide 76 – Definizione del Problema Duale

- Si consideri il problema LP in forma canonica, che chiameremo problema "***primale***":
$$\begin{aligned}
z_P = \min\ & \mathbf{c}\mathbf{x} \\
s.t.\ & \mathbf{A}\mathbf{x} \geq \mathbf{b} \\
& \mathbf{x} \geq \mathbf{0}
\end{aligned}$$
	dove l'insieme dei sui punti ammissibili è $X = \{\mathbf{x} : \mathbf{A}\mathbf{x} \geq \mathbf{b}, \mathbf{x} \geq \mathbf{0}\}$.
- Il suo problema "***duale***" è il seguente:
$$\begin{aligned}
z_D = \max\ & \mathbf{w}\mathbf{b} \\
s.t.\ & \mathbf{w}\mathbf{A} \leq \mathbf{c} \\
& \mathbf{w} \geq \mathbf{0}
\end{aligned}$$
	dove l'insieme dei sui punti ammissibili è $W = \{\mathbf{w} : \mathbf{w}\mathbf{A} \leq \mathbf{c}, \mathbf{w} \geq \mathbf{0}\}$.

>> Qui $\mathbf{w}$ è un vettore **riga** di $m$ componenti (una variabile duale per ogni vincolo del primale), mentre $\mathbf{x}$ è un vettore colonna di $n$ componenti. Il duale ha un vincolo per ogni variabile del primale: i ruoli di $\mathbf{b}$ e $\mathbf{c}$ si scambiano e la matrice è "letta per colonne" ($\mathbf{w}\mathbf{A} \leq \mathbf{c}$ equivale a $\mathbf{A}^T\mathbf{w}^T \leq \mathbf{c}^T$). Il duale del duale è di nuovo il primale.

---
## Slide 77 – Come si ottiene il duale?

- Partendo dal problema primale in forma canonica:
$$\begin{aligned}
z_P = \min\ & \mathbf{c}\mathbf{x} \\
s.t.\ & \mathbf{A}\mathbf{x} \geq \mathbf{b} \\
& \mathbf{x} \geq \mathbf{0}
\end{aligned}$$
- Aggiungendo $m$ variabili $\mathbf{x}_S$ di ***slack*** alle $n$ variabili originarie, il primale equivale al problema in forma standard:
$$\begin{aligned}
z_P = \min\ & \mathbf{c}\mathbf{x} \\
s.t.\ & \mathbf{A}\mathbf{x} - \mathbf{I}\mathbf{x}_S = \mathbf{b} \\
& \mathbf{x}, \mathbf{x}_S \geq \mathbf{0}
\end{aligned}$$
	dove $\mathbf{I} = [\mathbf{a}_{n+1}, \dots, \mathbf{a}_{n+m}] = [\mathbf{e}_1, \dots, \mathbf{e}_m]$ è la matrice identità di ordine $m$.

>> Nota: nella matrice dei vincoli del problema standard, $[\mathbf{A}, -\mathbf{I}]$, le colonne delle variabili di slack sono in realtà $-\mathbf{e}_1, \dots, -\mathbf{e}_m$ (con costo $c_{n+i} = 0$): è per questo che nella slide seguente compare $-\mathbf{w}\mathbf{e}_i$. Poiché sottraggono l'eccedenza, queste variabili si chiamano anche variabili di *surplus*.

---
## Slide 78 – Come si ottiene il duale? (2)

- In corrispondenza di una soluzione ottima del primale deve esistere una base $\mathbf{B}$ per cui:
$$\mathbf{w}\mathbf{a}_j - c_j \leq 0, \quad j = 1, \dots, n+m$$
	dove, ricordiamo, $\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1}$.
- Riscrivendo la disequazione $\mathbf{w}\mathbf{a}_j - c_j \leq 0$ per le variabili originarie e quelle di slack si ha:
$$\begin{aligned}
\mathbf{w}\mathbf{a}_j &\leq c_j, & j &= 1, \dots, n \\
-\mathbf{w}\mathbf{e}_i &\leq 0, & i &= 1, \dots, m
\end{aligned}$$
	che in forma matriciale può essere riscritta:
$$\begin{aligned}
\mathbf{w}\mathbf{A} &\leq \mathbf{c} \\
\mathbf{w} &\geq \mathbf{0}
\end{aligned}$$

>> Per le colonne di base il costo ridotto è automaticamente nullo ($\mathbf{c}_B\mathbf{B}^{-1}\mathbf{B} - \mathbf{c}_B = \mathbf{0}$), quindi la condizione può essere scritta su tutte le $n+m$ colonne. Siccome $\mathbf{w}\mathbf{e}_i = w_i$, la seconda riga dice $-w_i \leq 0$, cioè $w_i \geq 0$: il segno delle variabili duali "nasce" dalle colonne di slack. In sintesi: *le condizioni di ottimalità del primale sono esattamente le condizioni di ammissibilità del duale*.

---
## Slide 79 – Come si ottiene il duale? (3)

- Quindi abbiamo mostrato perché l'insieme delle soluzioni ammissibili del duale è definito come:
$$W = \{\mathbf{w} : \mathbf{w}\mathbf{A} \leq \mathbf{c}, \mathbf{w} \geq \mathbf{0}\}$$
- Ora si vuole mostrare perché la funzione obiettivo da massimizzare è rappresentata da $\mathbf{w}\mathbf{b}$ (i.e., $z_D = \max\{\mathbf{w}\mathbf{b} : \mathbf{w} \in W\}$).

---
## Slide 80 – Dualità debole

**Lemma 1 (Dualità Debole).**
Se $\tilde{\mathbf{x}} \in X = \{\mathbf{x} : \mathbf{A}\mathbf{x} \geq \mathbf{b}, \mathbf{x} \geq \mathbf{0}\}$ e $\tilde{\mathbf{w}} \in W = \{\mathbf{w} : \mathbf{w}\mathbf{A} \leq \mathbf{c}, \mathbf{w} \geq \mathbf{0}\}$ allora $\tilde{\mathbf{w}}\mathbf{b} \leq \mathbf{c}\tilde{\mathbf{x}}$.

**Dimostrazione.**
Siccome $\tilde{\mathbf{x}} \in X$ allora $\mathbf{A}\tilde{\mathbf{x}} \geq \mathbf{b}$. Poichè $\tilde{\mathbf{w}} \geq \mathbf{0}$, si ha:
$$\tilde{\mathbf{w}}\mathbf{A}\tilde{\mathbf{x}} \geq \tilde{\mathbf{w}}\mathbf{b} \tag{1}$$
Siccome $\tilde{\mathbf{w}} \in W$ allora $\tilde{\mathbf{w}}\mathbf{A} \leq \mathbf{c}$. Poichè $\tilde{\mathbf{x}} \geq \mathbf{0}$, si ha:
$$\tilde{\mathbf{w}}\mathbf{A}\tilde{\mathbf{x}} \leq \mathbf{c}\tilde{\mathbf{x}} \tag{2}$$
Dalle espressioni (1) e (2) si ottiene $\tilde{\mathbf{w}}\mathbf{b} \leq \mathbf{c}\tilde{\mathbf{x}}$. $\square$

>> Il punto chiave è che moltiplicare una disuguaglianza vettoriale per un vettore **non negativo** ne preserva il verso: $\mathbf{A}\tilde{\mathbf{x}} - \mathbf{b} \geq \mathbf{0}$ e $\tilde{\mathbf{w}} \geq \mathbf{0}$ implicano $\tilde{\mathbf{w}}(\mathbf{A}\tilde{\mathbf{x}} - \mathbf{b}) = \sum_i \tilde{w}_i(\mathbf{a}^i\tilde{\mathbf{x}} - b_i) \geq 0$ (somma di prodotti di numeri $\geq 0$). Per questo i segni delle variabili duali sono legati al verso dei vincoli primali.

---
## Slide 81 – Dualità debole (2)

- Dalla dualità debole si deduce che il valore $\mathbf{w}\mathbf{b}$ di qualsiasi soluzione $\mathbf{w} \in W$ è un lower bound alla soluzione ottima del primale.
- Il miglior lower bound $\mathbf{w}^*\mathbf{b}$ alla soluzione ottima del primale lo si può ottenere risolvendo il seguente problema "*duale*":
$$\begin{aligned}
z = \max\ & \mathbf{w}\mathbf{b} \\
s.t.\ & \mathbf{w}\mathbf{A} \leq \mathbf{c} \\
& \mathbf{w} \geq \mathbf{0}
\end{aligned}$$

>> Ecco perché l'obiettivo del duale è $\max\,\mathbf{w}\mathbf{b}$: ogni $\mathbf{w} \in W$ fornisce una stima dal basso di $z_P$, e il duale cerca la **stima dal basso più stretta** possibile. Viceversa, ogni $\mathbf{x} \in X$ fornisce un upper bound per $z_D$. Quindi $\mathbf{w}\mathbf{b} \leq z_D \leq z_P \leq \mathbf{c}\mathbf{x}$ per ogni coppia ammissibile.

---
## Slide 82 – Dualità debole

**Corollario 1.** Se $\mathbf{x}^* \in X$ e $\mathbf{w}^* \in W$ soddisfano $\mathbf{w}^*\mathbf{b} = \mathbf{c}\mathbf{x}^*$ allora $\mathbf{x}^*$ è soluzione ottima del primale e $\mathbf{w}^*$ è soluzione ottima del duale.

**Dimostrazione.** Per il *lemma della dualità debole* si ha $\mathbf{w}\mathbf{b} \leq \mathbf{c}\mathbf{x}$, $\forall \mathbf{w} \in W$ e $\forall \mathbf{x} \in X$.
Quindi, $\mathbf{c}\mathbf{x} \geq \mathbf{w}^*\mathbf{b}$, $\forall \mathbf{x} \in X$, ma poichè per ipotesi $\mathbf{w}^*\mathbf{b} = \mathbf{c}\mathbf{x}^*$ si ha:
$$\mathbf{c}\mathbf{x} \geq \mathbf{w}^*\mathbf{b} = \mathbf{c}\mathbf{x}^*, \forall \mathbf{x} \in X \tag{3}$$
Per cui $\mathbf{x}^* \in X$ è soluzione ottima del primale.
Analogamente, $\mathbf{c}\mathbf{x}^* \geq \mathbf{w}\mathbf{b}$, $\forall \mathbf{w} \in W$, ma poichè per ipotesi $\mathbf{w}^*\mathbf{b} = \mathbf{c}\mathbf{x}^*$ si ha:
$$\mathbf{w}^*\mathbf{b} = \mathbf{c}\mathbf{x}^* \geq \mathbf{w}\mathbf{b}, \forall \mathbf{w} \in W \tag{4}$$
Per cui $\mathbf{w}^* \in W$ è soluzione ottima del duale. $\square$

>> Il corollario fornisce un **certificato di ottimalità**: per convincere qualcuno che $\mathbf{x}^*$ è ottima basta esibire un $\mathbf{w}^*$ duale ammissibile con lo stesso valore; la verifica richiede solo prodotti matrice-vettore, senza rieseguire l'algoritmo.

---
## Slide 83 – Dualità Forte

Il *teorema della dualità forte* stabilisce che se esistono soluzioni ammissibili sia per il primale che per il duale, allora esistono due soluzioni ottime i cui valori coincidono.

**Teorema 1 (Dualità Forte).** Se $X \neq \emptyset$ e $W \neq \emptyset$, allora esiste una soluzione $\mathbf{x}^*$ ottima per il primale e una soluzione $\mathbf{w}^*$ ottima per il duale. Inoltre, $\mathbf{w}^*\mathbf{b} = \mathbf{c}\mathbf{x}^*$.

**Dimostrazione.** Per il corollario 1 è sufficiente dimostrare l'esistenza di $\mathbf{x}^* \in X$ e $\mathbf{w}^* \in W$ tali che $\mathbf{w}^*\mathbf{b} = \mathbf{c}\mathbf{x}^*$.

Siccome $W \neq \emptyset$, per il lemma della dualità debole il valore $\mathbf{c}\mathbf{x}$ è limitato inferiormente (i.e. $\max\{\mathbf{w}\mathbf{b} : \mathbf{w} \in W\} \leq \min\{\mathbf{c}\mathbf{x} : \mathbf{x} \in X\}$).

Quindi, $X \neq \emptyset$ e $\mathbf{c}\mathbf{x}$ limitata, implica che il primale ha soluzione ottima limitata.

>> Più precisamente: preso un qualunque $\bar{\mathbf{w}} \in W$, si ha $\mathbf{c}\mathbf{x} \geq \bar{\mathbf{w}}\mathbf{b}$ per ogni $\mathbf{x} \in X$, quindi $\mathbf{c}\mathbf{x}$ non può tendere a $-\infty$. Per il teorema fondamentale della PL, un problema ammissibile e limitato ha una soluzione ottima in un vertice, cioè una soluzione base ammissibile ottima (quella trovata dal simplesso, usando una regola anti-ciclo per garantirne la terminazione).

---
## Slide 84 – Dualità Forte (2)

Riscriviamo il primale in forma standard:
$$\begin{aligned}
z = \min\ & \mathbf{c}\mathbf{x} \\
s.t.\ & \mathbf{A}\mathbf{x} - \mathbf{I}\mathbf{x}_S = \mathbf{b} \\
& \mathbf{x}, \mathbf{x}_S \geq \mathbf{0}
\end{aligned}$$
Indichiamo con $(\mathbf{x}^*, {\mathbf{x}_S}^*)$ la soluzione ottima del primale e con $\mathbf{B}$ la corrispondente base ottima.
Per le condizioni di ottimalità si ha:
$$\mathbf{c}_B\mathbf{B}^{-1}\mathbf{a}_j - c_j \leq 0, \quad j = 1, \dots, n+m$$
che, ponendo $\mathbf{w}^* = \mathbf{c}_B\mathbf{B}^{-1}$, equivale a:
$$\begin{aligned}
\mathbf{w}^*\mathbf{A} &\leq \mathbf{c} \\
\mathbf{w}^* &\geq \mathbf{0}
\end{aligned}$$

---
## Slide 85 – Dualità Forte (3)

Per cui la soluzione $\mathbf{w}^* = \mathbf{c}_B\mathbf{B}^{-1}$ è duale ammissibile, i.e. $\mathbf{w}^* \in W$.
Infine, siccome $\mathbf{w}^* = \mathbf{c}_B\mathbf{B}^{-1}$ e $\mathbf{x}^* = (\mathbf{B}^{-1}\mathbf{b}, \mathbf{0})$, si ha:
$$\mathbf{w}^*\mathbf{b} = \mathbf{c}_B\mathbf{B}^{-1}\mathbf{b} = \mathbf{c}\mathbf{x}^*$$
Per cui il teorema è dimostrato. $\square$

>> Conseguenza pratica: quando il simplesso termina con una base ottima $\mathbf{B}$, fornisce "gratis" anche la soluzione duale ottima $\mathbf{w}^* = \mathbf{c}_B\mathbf{B}^{-1}$ (i moltiplicatori del simplesso calcolati nello Step 2 dell'ultima iterazione). Nota: la $\mathbf{x}^*$ qui include anche le slack, e poiché esse hanno costo nullo $\mathbf{c}\mathbf{x}^*$ coincide con $\mathbf{c}_B\mathbf{x}_B^*$.

---
## Slide 86 – Relazione tra Primale e Duale

- Dal teorema della dualità debole abbiamo:
$$\mathbf{c}\mathbf{x} \geq \mathbf{w}\mathbf{A}\mathbf{x} \geq \mathbf{w}\mathbf{b}$$
	Se supponiamo che il primale ha soluzione ottima non limitata allora:
$$\mathbf{c}\mathbf{x} \to -\infty \quad \Rightarrow \quad -\infty \geq \mathbf{w}\mathbf{b}, \forall \mathbf{w} \in W$$
	allora il duale non ha soluzioni ammissibili, i.e. $W = \emptyset$.
- È vero anche il viceversa: se il duale ha soluzione ottima non limitata:
$$\mathbf{w}\mathbf{b} \to +\infty \quad \Rightarrow \quad \mathbf{c}\mathbf{x} \geq +\infty, \forall \mathbf{x} \in X$$
	allora il primale non ha soluzioni ammissibili, i.e. $X = \emptyset$.

---
## Slide 87 – Relazione tra Primale e Duale (2)

- Se il primale non ha soluzioni ammissibili, i.e. $X = \emptyset$, allora il duale o non ha soluzioni ammissibili o ha una soluzione ottima non limitata.
- Possiamo riassumere tutti i possibili casi nella seguente tabella:

| P \ D | Ottimo | Non Amm. | Illim. |
|---|:---:|:---:|:---:|
| **Ottimo** | X | | |
| **Non Amm.** | | X | X |
| **Illim.** | | X | |

>> Il caso "entrambi non ammissibili" può davvero verificarsi. Esempio: primale $\min\ -x_1 - x_2$ s.t. $x_1 - x_2 \geq 1$, $-x_1 + x_2 \geq 1$, $\mathbf{x} \geq \mathbf{0}$ (sommando i vincoli si otterrebbe $0 \geq 2$, impossibile). Il duale è $\max\ w_1 + w_2$ s.t. $w_1 - w_2 \leq -1$, $-w_1 + w_2 \leq -1$, $\mathbf{w} \geq \mathbf{0}$ (sommando: $0 \leq -2$, impossibile).
>>
>> Lettura della tabella: se uno dei due ha ottimo finito, anche l'altro lo ha (dualità forte); se uno è illimitato, l'altro è non ammissibile (dualità debole).

---
## Slide 88 – Forme Miste del Primale

- Un problema di programmazione lineare si può presentare nella seguente forma:
$$\begin{aligned}
\min z_P = \ & \mathbf{c}\mathbf{x} \\
s.t.\ & \mathbf{A}_1\mathbf{x} \geq \mathbf{b}_1 \\
& \mathbf{A}_2\mathbf{x} = \mathbf{b}_2 \\
& \mathbf{A}_3\mathbf{x} \leq \mathbf{b}_3 \\
& \mathbf{x} \geq \mathbf{0}
\end{aligned}$$
- Per scrivere il duale portiamo il primale in forma standard:
$$\begin{array}{rlllll}
\min z_P = & \mathbf{c}\mathbf{x} & & & & \\
s.t. & \mathbf{A}_1\mathbf{x} & -\mathbf{I}\mathbf{x}_S & & = \mathbf{b}_1 & : \mathbf{w}_1 \\
& \mathbf{A}_2\mathbf{x} & & & = \mathbf{b}_2 & : \mathbf{w}_2 \\
& \mathbf{A}_3\mathbf{x} & & +\mathbf{I}\mathbf{x}_T & = \mathbf{b}_3 & : \mathbf{w}_3 \\
& \mathbf{x},\ \mathbf{x}_S,\ \mathbf{x}_T \geq \mathbf{0} & & & &
\end{array}$$

>> La notazione "$: \mathbf{w}_i$" associa a ciascun blocco di vincoli il corrispondente vettore di variabili duali.

---
## Slide 89 – Forme Miste del Primale (2)

- Dato il primale in forma standard:
$$\begin{array}{rlllll}
\min z_P = & \mathbf{c}\mathbf{x} & & & & \\
s.t. & \mathbf{A}_1\mathbf{x} & -\mathbf{I}\mathbf{x}_S & & = \mathbf{b}_1 & : \mathbf{w}_1 \\
& \mathbf{A}_2\mathbf{x} & & & = \mathbf{b}_2 & : \mathbf{w}_2 \\
& \mathbf{A}_3\mathbf{x} & & +\mathbf{I}\mathbf{x}_T & = \mathbf{b}_3 & : \mathbf{w}_3 \\
& \mathbf{x},\ \mathbf{x}_S,\ \mathbf{x}_T \geq \mathbf{0} & & & &
\end{array}$$
- Il duale è il seguente:
$$\begin{aligned}
\max z_D = \ & \mathbf{w}_1\mathbf{b}_1 + \mathbf{w}_2\mathbf{b}_2 + \mathbf{w}_3\mathbf{b}_3 \\
s.t.\ & \mathbf{w}_1\mathbf{A}_1 + \mathbf{w}_2\mathbf{A}_2 + \mathbf{w}_3\mathbf{A}_3 \leq \mathbf{c} \\
& \mathbf{w}_1 \geq \mathbf{0} \\
& \mathbf{w}_2 \text{ qualsiasi} \\
& \mathbf{w}_3 \leq \mathbf{0}
\end{aligned}$$

>> Da dove vengono i segni: applicando la condizione duale $\mathbf{w}\mathbf{a}_j \leq c_j$ anche alle colonne di slack (costo nullo) si ottiene:
>> - colonne di $\mathbf{x}_S$ (pari a $-\mathbf{I}$ nel primo blocco): $-\mathbf{w}_1 \leq \mathbf{0}$, cioè $\mathbf{w}_1 \geq \mathbf{0}$;
>> - colonne di $\mathbf{x}_T$ (pari a $+\mathbf{I}$ nel terzo blocco): $\mathbf{w}_3 \leq \mathbf{0}$;
>> - il blocco di uguaglianze non ha slack, quindi nessun vincolo di segno su $\mathbf{w}_2$.

---
## Slide 90 – Forme Miste del Primale (3)

- Possiamo riassumere tutti i possibili casi nella seguente tabella:

| Primale | Duale |
|:---:|:---:|
| min | max |
| **Vincolo $i$** | **Variabile $w_i$** |
| $\geq$ | $w_i \geq 0$ |
| $=$ | qualsiasi |
| $\leq$ | $w_i \leq 0$ |
| **Variabile $x_j$** | **Vincolo $j$** |
| $x_j \geq 0$ | $\leq$ |
| qualsiasi | $=$ |
| $x_j \leq 0$ | $\geq$ |

>> Un modo per ricordarla: per un problema di **min**, i casi "naturali" sono vincoli $\geq$ e variabili $\geq 0$ (la forma canonica), e a essi corrispondono nel duale variabili $\geq 0$ e vincoli $\leq$ (i casi naturali per un max). Le uguaglianze corrispondono a variabili libere e viceversa; i casi "innaturali" ($\leq$ in un min, $x_j \leq 0$) si corrispondono con segni invertiti. Letta da destra a sinistra, la tabella dà il duale di un problema di max.

---
## Slide 91 – Forme Miste del Primale: Esempio

Dato il seguente problema primale:
$$\begin{array}{rll}
\min z_P = & x_1 - 2x_2 + 3x_3 & \\
s.t. & x_1 + x_2 \geq 2 & : w_1 \\
& -x_1 + x_2 - x_3 = 1 & : w_2 \\
& +x_2 - 2x_3 \leq 3 & : w_3 \\
& x_1 \ \text{qualsiasi} & \\
& x_2 \geq 0 & \\
& x_3 \leq 0 &
\end{array}$$
Il problema duale è:
$$\begin{array}{rll}
\max z_D = & 2w_1 + w_2 + 3w_3 & \\
s.t. & w_1 - w_2 = 1 & : x_1 \\
& w_1 + w_2 + w_3 \leq -2 & : x_2 \\
& -w_2 - 2w_3 \geq 3 & : x_3 \\
& w_1 \geq 0 & \\
& w_2 \ \text{qualsiasi} & \\
& w_3 \leq 0 &
\end{array}$$

>> Come si costruisce, colonna per colonna: il vincolo duale $j$ usa la colonna $j$ dei coefficienti del primale e ha come termine noto $c_j$.
>> - $x_1$: colonna $(1, -1, 0)$, $c_1 = 1$, $x_1$ libera $\Rightarrow$ $w_1 - w_2 = 1$;
>> - $x_2$: colonna $(1, 1, 1)$, $c_2 = -2$, $x_2 \geq 0$ $\Rightarrow$ $w_1 + w_2 + w_3 \leq -2$;
>> - $x_3$: colonna $(0, -1, -2)$, $c_3 = 3$, $x_3 \leq 0$ $\Rightarrow$ $-w_2 - 2w_3 \geq 3$.
>>
>> Verifica numerica: $\mathbf{x}^* = (1, 1, -1)$ è ammissibile per il primale con $z_P = 1 - 2 - 3 = -4$, e $\mathbf{w}^* = (0, -1, -1)$ è ammissibile per il duale con $z_D = 0 - 1 - 3 = -4$. Valori uguali $\Rightarrow$ per il corollario 1 sono entrambe ottime.

---
## Slide 92 – Condizioni di Complementarietà

Dai teoremi relativi alla dualità è possibile derivare delle condizioni di ottimalità.

**Corollario 2 (Complementarietà).** Le soluzioni $\tilde{\mathbf{x}} \in X$ del primale e $\tilde{\mathbf{w}} \in W$ del duale sono ottime se e solo se
$$\begin{aligned}
(a) \quad & \tilde{\mathbf{w}}(\mathbf{A}\tilde{\mathbf{x}} - \mathbf{b}) = 0 \\
(b) \quad & (\mathbf{c} - \tilde{\mathbf{w}}\mathbf{A})\tilde{\mathbf{x}} = 0
\end{aligned}$$

**Dimostrazione.**
Si vuole dimostrare che:
- Se (a) e (b) sono soddisfatte, allora le soluzioni $\tilde{\mathbf{x}}$ e $\tilde{\mathbf{w}}$ sono ottime.
- Se le soluzioni $\tilde{\mathbf{x}}$ e $\tilde{\mathbf{w}}$ sono ottime, allora le condizioni (a) e (b) devono essere soddisfatte.

---
## Slide 93 – Condizioni di Complementarietà (2)

- **(a) e (b) sono soddisfatte le soluzioni $\tilde{\mathbf{x}}$ e $\tilde{\mathbf{w}}$ sono ottime.**
	Dal lemma della dualità debole si ha che per ogni $\tilde{\mathbf{x}}$ e $\tilde{\mathbf{w}}$:
$$\tilde{\mathbf{w}}\mathbf{b} \leq \tilde{\mathbf{w}}\mathbf{A}\tilde{\mathbf{x}} \leq \mathbf{c}\tilde{\mathbf{x}}$$
	Ma se (a) e (b) sono soddisfatte si ha anche:
$$\begin{aligned}
(a) \quad \tilde{\mathbf{w}}\mathbf{A}\tilde{\mathbf{x}} &= \tilde{\mathbf{w}}\mathbf{b} \\
(b) \quad \mathbf{c}\tilde{\mathbf{x}} &= \tilde{\mathbf{w}}\mathbf{A}\tilde{\mathbf{x}}
\end{aligned}$$
	Per cui $\tilde{\mathbf{w}}\mathbf{b} = \mathbf{c}\tilde{\mathbf{x}}$ e, per il corollario 1, $\tilde{\mathbf{x}}$ e $\tilde{\mathbf{w}}$ sono ottime.

---
## Slide 94 – Condizioni di Complementarietà (3)

- **Se le soluzioni $\tilde{\mathbf{x}}$ e $\tilde{\mathbf{w}}$ sono ottime allora le condizioni (a) e (b) devono essere soddisfatte.**
	Se una delle due condizioni di complementarietà non è soddisfatta allora almeno una delle due soluzioni non è ottima.
	Infatti, se ad esempio $\tilde{\mathbf{w}}(\mathbf{A}\tilde{\mathbf{x}} - \mathbf{b}) > 0$ allora ne consegue che $\tilde{\mathbf{w}}\mathbf{b} < \mathbf{c}\tilde{\mathbf{x}}$.

Per cui il corollario è dimostrato. $\square$

**NOTA:** il corollario stabilisce che data una soluzione del primale $\tilde{\mathbf{x}} \in X$ per dimostrarne l'ottimalità è sufficiente trovare una soluzione duale $\tilde{\mathbf{w}} \in W$ che soddisfi le condizioni di complementarietà (*o viceversa*).

>> Il passaggio chiave: se entrambe sono ottime, per la dualità forte $\tilde{\mathbf{w}}\mathbf{b} = \mathbf{c}\tilde{\mathbf{x}}$, quindi nella catena $\tilde{\mathbf{w}}\mathbf{b} \leq \tilde{\mathbf{w}}\mathbf{A}\tilde{\mathbf{x}} \leq \mathbf{c}\tilde{\mathbf{x}}$ tutte le disuguaglianze devono valere con l'uguaglianza, e questo è esattamente (a) e (b). Se invece $\tilde{\mathbf{w}}(\mathbf{A}\tilde{\mathbf{x}} - \mathbf{b}) > 0$, si ha $\tilde{\mathbf{w}}\mathbf{b} < \tilde{\mathbf{w}}\mathbf{A}\tilde{\mathbf{x}} \leq \mathbf{c}\tilde{\mathbf{x}}$, in contraddizione con la dualità forte.

---
## Slide 95 – Condizioni di Complementarietà (4)

Le condizioni di complementarietà:
$$\begin{aligned}
(a) \quad \mathbf{w}(\mathbf{A}\mathbf{x} - \mathbf{b}) &= 0 \\
(b) \quad (\mathbf{c} - \mathbf{w}\mathbf{A})\mathbf{x} &= 0
\end{aligned}$$
corrispondono alle equazioni:
$$\begin{aligned}
(a') \quad w_i(\mathbf{a}^i\mathbf{x} - b_i) &= 0, & i &= 1, \dots, m \\
(b') \quad (c_j - \mathbf{w}\mathbf{a}_j)x_j &= 0, & j &= 1, \dots, n
\end{aligned}$$
dalle quali si derivano le seguenti osservazioni:
- $w_i > 0$ implica che $\mathbf{a}^i\mathbf{x} = b_i$ ($\mathbf{a}^i$ è la riga $i$-esima della matrice $\mathbf{A}$);
- $\mathbf{a}^i\mathbf{x} > b_i$ implica che $w_i = 0$;
- $x_j > 0$ implica che $\mathbf{w}\mathbf{a}_j = c_j$ ($\mathbf{a}_j$ è la colonna $j$-esima della matrice $\mathbf{A}$);
- $\mathbf{w}\mathbf{a}_j < c_j$ implica che $x_j = 0$.

>> Il passaggio da (a) ad (a') vale perché $\mathbf{w}(\mathbf{A}\mathbf{x} - \mathbf{b}) = \sum_i w_i(\mathbf{a}^i\mathbf{x} - b_i)$ è una somma di termini tutti $\geq 0$ (per $\mathbf{w} \in W$, $\mathbf{x} \in X$): una somma di termini non negativi è nulla solo se ogni termine è nullo. Analogamente per (b).
>>
>> In parole: **un vincolo "lasco" ha variabile duale nulla, una variabile duale non nulla richiede un vincolo "attivo"**. Nota che le implicazioni non si invertono: $\mathbf{a}^i\mathbf{x} = b_i$ non implica $w_i > 0$ (può essere $w_i = 0$ con vincolo attivo, ad es. in caso di degenerazione).

---
## Slide 96 – Interpretazione economica della dualità

- Il valore di ciascuna variabile duale corrisponde al valore della risorsa espressa dal termine noto del corrispondente vincolo (**shadow price**)
- In altre parole, il valore della variabile duale indica il potenziale peggioramento/miglioramento del valore della soluzione ottima se modifico di una unità il termine noto del corrispondente vincolo.
- Una interpretazione economica alternativa della dualità la possiamo ottenere dal seguente esempio.

>> Perché: all'ottimo $z^* = \mathbf{c}_B\mathbf{B}^{-1}\mathbf{b} = \mathbf{w}^*\mathbf{b} = \sum_i w_i^* b_i$. Se si cambia $b_i$ di una piccola quantità $\Delta$ e la base $\mathbf{B}$ resta ottima (cioè $\mathbf{B}^{-1}(\mathbf{b} + \Delta\mathbf{e}_i) \geq \mathbf{0}$), allora $z^*$ cambia esattamente di $w_i^*\Delta$: $w_i^* = \partial z^*/\partial b_i$. Per un vincolo $\geq$ in un problema di min, $w_i^* \geq 0$ è il costo aggiuntivo per unità di "requisito" in più; un vincolo non attivo ha shadow price nullo (aumentare un po' la risorsa non serve).

---
## Slide 97 – Interpretazione economica della dualità (2)

**Esempio: il problema della dieta.**

Siano dati $n$ alimenti e $m$ nutrienti:
- $x_j$: consumo dell'alimento $j$;
- $c_j$: costo unitario dell'alimento $j$;
- $a_{ij}$: quantità del nutriente $i$ contenuto in una unità dell'alimento $j$;
- $r_i$: quantità minima dell'$i$-esimo nutriente.

La formulazione matematica del problema può essere la seguente:
$$\begin{aligned}
(P) \quad \min z_P = \ & \sum_{j=1}^{n} c_j x_j \\
s.t.\ & \sum_{j=1}^{n} a_{ij}x_j \geq r_i, & i &= 1, \dots, m \\
& x_j \geq 0, & j &= 1, \dots, n
\end{aligned}$$

---
## Slide 98 – Interpretazione economica della dualità (3)

Si vuole produrre una *pillola* sostitutiva che contenga gli $m$ nutrienti.

L'obiettivo è quello di fissare il costo $w_i$ per ogni unità di nutriente $i$, in modo da massimizzare il costo della pillola, mantenendolo competitivo con quello del cibo reale.

Il problema può essere formulato come segue:
$$\begin{aligned}
(D) \quad \max z_D = \ & \sum_{i=1}^{m} w_i r_i \\
s.t.\ & \sum_{i=1}^{m} w_i a_{ij} \leq c_j, & j &= 1, \dots, n \\
& w_i \geq 0, & i &= 1, \dots, m
\end{aligned}$$

Il problema D è il duale del problema P.

>> Lettura dei vincoli: $\sum_i w_i a_{ij}$ è il prezzo, in "pillole", dei nutrienti contenuti in una unità dell'alimento $j$. Se superasse $c_j$ converrebbe comprare l'alimento $j$ invece delle pillole: da qui $\sum_i w_i a_{ij} \leq c_j$ (competitività). Il ricavo del venditore di pillole per coprire il fabbisogno $\mathbf{r}$ è $\sum_i w_i r_i$.
>> Per la dualità forte, il massimo ricavo ottenibile dal venditore coincide con il costo minimo della dieta. Per la complementarietà, gli alimenti effettivamente acquistati ($x_j > 0$) hanno prezzo "equo" ($\sum_i w_i a_{ij} = c_j$), e i nutrienti assunti in eccesso ($\sum_j a_{ij}x_j > r_i$) hanno prezzo $w_i = 0$.

---
## Slide 99 – Esempio n. 1

Si consideri il seguente problema di programmazione lineare continua:
$$\begin{array}{rrcrcrcl}
\min z = & -3x_1 & + & x_2 & & & & \\
s.t. & x_1 & + & 2x_2 & \leq & +4 & (a) & \\
& -x_1 & + & x_2 & \leq & +1 & (b) & \\
& x_1 & , & x_2 & \geq & 0 & &
\end{array}$$

Il problema si può riscrivere in forma standard:
$$\begin{array}{rrcrcrcrcrl}
\min z = & -3x_1 & + & x_2 & & & & & & & \\
s.t. & x_1 & + & 2x_2 & + & x_3 & & & = & +4 & (a) \\
& -x_1 & + & x_2 & & & + & x_4 & = & +1 & (b) \\
& x_1 & , & x_2 & , & x_3 & , & x_4 & \geq & 0 &
\end{array}$$

dove $x_3$ e $x_4$ sono le variabili di slack (scarto).

>> Poiché i vincoli sono $\leq$ con termini noti non negativi, le slack forniscono subito una base ammissibile iniziale: $\mathbf{B} = [\mathbf{a}_3, \mathbf{a}_4] = \mathbf{I}$, con $\mathbf{x}_B = (x_3, x_4) = (4, 1)$, $\mathbf{x}_N = (x_1, x_2) = (0, 0)$ e $z = 0$ (l'origine del piano $x_1, x_2$). Da qui si può avviare direttamente il simplesso primale.

---
## Slide 100 – Esempio n. 1

Data la base $\mathbf{B} = \left[\mathbf{a}_1, \mathbf{a}_4\right]$, la corrispondente soluzione base $\mathbf{x} = [\mathbf{x}_\mathbf{B}, \mathbf{x}_\mathbf{N}] = \left[\mathbf{B}^{-1}\mathbf{b}, \mathbf{0}\right]$[^2] è la seguente:

$$\mathbf{x}_\mathbf{B} = \mathbf{B}^{-1}\mathbf{b} = \begin{bmatrix} x_1 \\ x_4 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ -1 & 1 \end{bmatrix}^{-1} \begin{bmatrix} 4 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 4 \\ 1 \end{bmatrix} = \begin{bmatrix} 4 \\ 5 \end{bmatrix}$$

siccome i vincoli di non-negatività sono rispettati la soluzione base è ammissibile.

La funzione obiettivo è pari a $z = \mathbf{c}_\mathbf{B}\mathbf{x}_\mathbf{B} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1}\mathbf{b} = -12$.

La soluzione è ottima?

Per saperlo dobbiamo verificare se $\mathbf{w}\mathbf{a}_j - c_j \le 0$ per ogni variabile non base $x_j$, dove $\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1}$.

[^2]: come in precedenza, dove non necessario non si esplicitano i *trasposti* di vettori e matrici

>> Il problema è quello della slide precedente: $\min z = -3x_1 + x_2$ con $x_1 + 2x_2 + x_3 = 4$, $-x_1 + x_2 + x_4 = 1$. Quindi $\mathbf{c} = [-3, 1, 0, 0]$, $\mathbf{c}_\mathbf{B} = [c_1, c_4] = [-3, 0]$ e $z = -3 \cdot 4 + 0 \cdot 5 = -12$.
>> La quantità $\mathbf{w}\mathbf{a}_j - c_j$ è l'opposto del costo ridotto $\bar c_j = c_j - \mathbf{w}\mathbf{a}_j$: se è $\le 0$ per ogni variabile non base, far crescere una qualsiasi $x_j$ non base non può diminuire $z$ (in un problema di minimo), quindi la base è ottima.

---
## Slide 101 – Esempio n. 1

Calcoliamo $\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1}$:

$$\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1} = [-3, 0] \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix} = [-3, 0]$$

Per cui verifichiamo che $\mathbf{w}\mathbf{a}_2 - c_2 \le 0$ e $\mathbf{w}\mathbf{a}_3 - c_3 \le 0$:

$$\mathbf{w}\mathbf{a}_2 - c_2 = [-3, 0] \begin{bmatrix} 2 \\ 1 \end{bmatrix} - 1 = -6 - 1 = -7$$

$$\mathbf{w}\mathbf{a}_3 - c_3 = [-3, 0] \begin{bmatrix} 1 \\ 0 \end{bmatrix} - 0 = -3 - 0 = -3$$

Quindi la soluzione è ottima.

>> Soluzione ottima: $x_1 = 4$, $x_2 = 0$ (slack $x_3 = 0$, $x_4 = 5$), con $z^* = -12$. Si noti che $\mathbf{w} = [-3, 0]$ è anche una soluzione duale ammissibile con $\mathbf{w}\mathbf{b} = -3 \cdot 4 + 0 \cdot 1 = -12 = z^*$: primale e duale hanno lo stesso valore, come previsto dalla dualità forte.

---
## Slide 102 – Esempio n. 2

Si consideri il seguente problema di programmazione lineare continua:

$$\begin{aligned}
\min z = &-x_1 - 3x_2 \\
\text{s.t. } & \phantom{-}x_1 - 2x_2 \le +4 \quad (a) \\
& -x_1 + \phantom{2}x_2 \le +3 \quad (b) \\
& \phantom{-}x_1, \ x_2 \ge 0
\end{aligned}$$

Il problema si può riscrivere in forma standard:

$$\begin{aligned}
\min z = &-x_1 - 3x_2 \\
\text{s.t. } & \phantom{-}x_1 - 2x_2 + x_3 \phantom{{}+x_4} = +4 \quad (a) \\
& -x_1 + \phantom{2}x_2 \phantom{{}+x_3} + x_4 = +3 \quad (b) \\
& \phantom{-}x_1, \ x_2, \ x_3, \ x_4 \ge 0
\end{aligned}$$

dove $x_3$ e $x_4$ sono le variabili di slack (scarto).

---
## Slide 103 – Esempio n. 2

Data la base $\mathbf{B} = [\mathbf{a}_3, \mathbf{a}_2]$, la corrispondente soluzione base $\mathbf{x} = [\mathbf{x}_\mathbf{B}, \mathbf{x}_\mathbf{N}] = \left[\mathbf{B}^{-1}\mathbf{b}, \mathbf{0}\right]$ è la seguente:

$$\mathbf{x}_\mathbf{B} = \mathbf{B}^{-1}\mathbf{b} = \begin{bmatrix} x_3 \\ x_2 \end{bmatrix} = \begin{bmatrix} 1 & -2 \\ 0 & 1 \end{bmatrix}^{-1} \begin{bmatrix} 4 \\ 3 \end{bmatrix} = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 4 \\ 3 \end{bmatrix} = \begin{bmatrix} 10 \\ 3 \end{bmatrix}$$

siccome i vincoli di non-negatività sono rispettati la soluzione base è ammissibile.

La funzione obiettivo è pari a $z = \mathbf{c}_\mathbf{B}\mathbf{x}_\mathbf{B} = [0, -3] \begin{bmatrix} 10 \\ 3 \end{bmatrix} = -9$.

La soluzione è ottima?

Per saperlo dobbiamo verificare se $\mathbf{w}\mathbf{a}_j - c_j \le 0$ per ogni variabile non base $x_j$, dove $\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1}$.

>> L'ordine delle colonne in $\mathbf{B}$ conta: la prima riga di $\mathbf{x}_\mathbf{B}$ corrisponde a $x_3$ (colonna $\mathbf{a}_3 = [1, 0]^T$), la seconda a $x_2$ (colonna $\mathbf{a}_2 = [-2, 1]^T$); di conseguenza $\mathbf{c}_\mathbf{B} = [c_3, c_2] = [0, -3]$.

---
## Slide 104 – Esempio n. 2

Calcoliamo $\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1}$:

$$\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1} = [0, -3] \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} = [0, -3]$$

Per cui verifichiamo che $\mathbf{w}\mathbf{a}_4 - c_4 \le 0$ e $\mathbf{w}\mathbf{a}_1 - c_1 \le 0$:

$$\mathbf{w}\mathbf{a}_4 - c_4 = [0, -3] \begin{bmatrix} 0 \\ 1 \end{bmatrix} - 0 = -3 - 0 = -3$$

$$\mathbf{w}\mathbf{a}_1 - c_1 = [0, -3] \begin{bmatrix} 1 \\ -1 \end{bmatrix} + 1 = +3 + 1 = +4$$

Quindi la soluzione non è ottima e la variabile $x_1$ è candidata a entrare in base.

>> Interpretazione: $\mathbf{w}\mathbf{a}_1 - c_1 = +4$ significa che ogni unità di aumento di $x_1$ (mantenendo i vincoli soddisfatti aggiustando le variabili in base) fa diminuire $z$ di 4.

---
## Slide 105 – Esempio n. 2

Quando una variabile $x_k$ non base aumenta le variabili in base vengono modificate come segue:

$$\mathbf{x}_\mathbf{B} = \mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{a}_k x_k = \bar{\mathbf{b}} - \mathbf{y}^1 x_1$$

dove $\bar{\mathbf{b}} = \mathbf{B}^{-1}\mathbf{b}$ e $\mathbf{y}^k = \mathbf{B}^{-1}\mathbf{a}_k$.

Nel nostro caso

$$\mathbf{y}^1 = \mathbf{B}^{-1}\mathbf{a}_1 = \begin{bmatrix} 1 & 2 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ -1 \end{bmatrix} = \begin{bmatrix} -1 \\ -1 \end{bmatrix}$$

quindi:

$$\mathbf{x}_\mathbf{B} = \begin{bmatrix} x_3 \\ x_2 \end{bmatrix} = \bar{\mathbf{b}} - \mathbf{y}^1 x_1 = \begin{bmatrix} 10 \\ 3 \end{bmatrix} - \begin{bmatrix} -1 \\ -1 \end{bmatrix} x_1 = \begin{bmatrix} 10 + x_1 \\ 3 + x_1 \end{bmatrix}$$

>> La formula deriva da $\mathbf{B}\mathbf{x}_\mathbf{B} + \mathbf{a}_k x_k = \mathbf{b}$ (tutte le altre non base restano a 0): moltiplicando per $\mathbf{B}^{-1}$ si ottiene $\mathbf{x}_\mathbf{B} = \mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{a}_k x_k$.
>> Qui tutte le componenti di $\mathbf{y}^1$ sono $\le 0$: nessuna variabile in base diminuisce al crescere di $x_1$, quindi il criterio del rapporto minimo non ha alcun candidato.

---
## Slide 106 – Esempio n. 2

Come si può notare la variabile $x_1$ può aumentare illimitatamente senza rendere la soluzione non ammissibile, perché a loro volta le variabili in base $x_2$ e $x_3$ aumentano. Infatti la soluzione è la seguente:

$$\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} x_1 \\ 3 + x_1 \\ 10 + x_1 \\ 0 \end{bmatrix} = \begin{bmatrix} 0 \\ 3 \\ 10 \\ 0 \end{bmatrix} + \begin{bmatrix} 1 \\ 1 \\ 1 \\ 0 \end{bmatrix} x_1$$

che equivale a

$$\mathbf{x} = \bar{\mathbf{b}} + \mathbf{d}x_1 = \mathbf{x}_0 + \mathbf{d}x_1$$

dove $\mathbf{d}$ è una direzione.

Pertanto la soluzione è illimitata.

>> Verifica: $\mathbf{d} = [1, 1, 1, 0]^T$ è una direzione ammissibile perché $\mathbf{d} \ge \mathbf{0}$ e $\mathbf{A}\mathbf{d} = \mathbf{a}_1 + \mathbf{a}_2 + \mathbf{a}_3 = [1 - 2 + 1, \ -1 + 1 + 0]^T = \mathbf{0}$. Lungo di essa $z = -9 + \mathbf{c}\mathbf{d}\,x_1 = -9 - 4x_1$ (con $\mathbf{c}\mathbf{d} = -1 - 3 = -4 = -(\mathbf{w}\mathbf{a}_1 - c_1)$), che tende a $-\infty$ per $x_1 \to +\infty$.
>> Regola generale: se una variabile $x_k$ ha $\mathbf{w}\mathbf{a}_k - c_k > 0$ e $\mathbf{y}^k \le \mathbf{0}$, il problema (di minimo) è illimitato inferiormente.

---
## Slide 107 – Esempio n. 3

Si consideri il seguente problema di programmazione lineare continua:

$$\begin{aligned}
\min z = &-x_1 - 3x_2 \\
\text{s.t. } & \phantom{-}2x_1 + 3x_2 \le +6 \quad (a) \\
& -\phantom{2}x_1 + \phantom{3}x_2 \le +1 \quad (b) \\
& \phantom{-2}x_1, \ x_2 \ge 0
\end{aligned}$$

Il problema si può riscrivere in forma standard:

$$\begin{aligned}
\min z = &-x_1 - 3x_2 \\
\text{s.t. } & \phantom{-}2x_1 + 3x_2 + x_3 \phantom{{}+x_4} = +6 \quad (a) \\
& -\phantom{2}x_1 + \phantom{3}x_2 \phantom{{}+x_3} + x_4 = +1 \quad (b) \\
& \phantom{-2}x_1, \ x_2, \ x_3, \ x_4 \ge 0
\end{aligned}$$

dove $x_3$ e $x_4$ sono le variabili di slack (scarto).

---
## Slide 108 – Esempio n. 3

I parametri del problema sono i vettori dei termini noti $\mathbf{b}$ e dei costi $\mathbf{c}$:

$$\mathbf{b} = \begin{bmatrix} 6 \\ 1 \end{bmatrix} \qquad \mathbf{c} = \begin{bmatrix} -1 \\ -3 \\ 0 \\ 0 \end{bmatrix}$$

e la matrice dei vincoli $\mathbf{A}$:

$$\mathbf{A} = \begin{bmatrix} 2 & 3 & 1 & 0 \\ -1 & 1 & 0 & 1 \end{bmatrix}$$

Qual è una base $\mathbf{B}$ della matrice $\mathbf{A}$?

$$\mathbf{A} = [\mathbf{N}, \mathbf{B}] = \begin{bmatrix} 2 & 3 & 1 & 0 \\ -1 & 1 & 0 & 1 \end{bmatrix} \ \Rightarrow \ \mathbf{N} = \begin{bmatrix} 2 & 3 \\ -1 & 1 \end{bmatrix} \quad \mathbf{B} = \mathbf{I} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

>> Le colonne delle variabili di slack formano sempre la matrice identità: è la scelta naturale di base iniziale, ammissibile perché $\mathbf{b} \ge \mathbf{0}$ (si veda la slide 130).

---
## Slide 109 – Esempio n. 3

**Iterazione n. 1**

Data la base $\mathbf{B} = \mathbf{I} = \left[\mathbf{a}_3, \mathbf{a}_4\right]$, la corrispondente soluzione base $\mathbf{x} = [\mathbf{x}_\mathbf{B}, \mathbf{x}_\mathbf{N}] = \left[\mathbf{B}^{-1}\mathbf{b}, \mathbf{0}\right]$ è la seguente:

$$\mathbf{x}_\mathbf{B} = \mathbf{B}^{-1}\mathbf{b} = \begin{bmatrix} x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}^{-1} \begin{bmatrix} 6 \\ 1 \end{bmatrix} = \begin{bmatrix} 6 \\ 1 \end{bmatrix}$$

siccome i vincoli di non-negatività sono rispettati la soluzione base è ammissibile.

La funzione obiettivo è pari a $z = \mathbf{c}_\mathbf{B}\mathbf{x}_\mathbf{B} = [0, 0] \begin{bmatrix} 6 \\ 1 \end{bmatrix} = 0$.

Per sapere se la soluzione corrente è ottima oppure se può essere migliorata dobbiamo verificare se $\mathbf{w}\mathbf{a}_j - c_j \le 0$ per ogni variabile non base $x_j$, dove $\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1}$.

>> Geometricamente la base iniziale corrisponde al vertice $(x_1, x_2) = (0, 0)$ della regione ammissibile nel piano delle variabili originarie.

---
## Slide 110 – Esempio n. 3

Calcoliamo $\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1}$:

$$\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1} = [0, 0] \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = [0, 0]$$

Per cui verifichiamo che $\mathbf{w}\mathbf{a}_1 - c_1 \le 0$ e $\mathbf{w}\mathbf{a}_2 - c_2 \le 0$:

$$\mathbf{w}\mathbf{a}_1 - c_1 = [0, 0] \begin{bmatrix} 2 \\ -1 \end{bmatrix} - (-1) = 0 + 1 = +1$$

$$\mathbf{w}\mathbf{a}_2 - c_2 = [0, 0] \begin{bmatrix} 3 \\ 1 \end{bmatrix} - (-3) = 0 + 3 = +3$$

Quindi la soluzione non è ottima e la variabile $x_2$ è candidata a entrare in base, perché:

$$\mathbf{w}\mathbf{a}_2 - c_2 = \max\left\{\mathbf{w}\mathbf{a}_1 - c_1, \mathbf{w}\mathbf{a}_2 - c_2\right\}$$

>> È la regola di Dantzig: si fa entrare la variabile con il costo ridotto "più promettente", cioè quella che fa diminuire $z$ più rapidamente per unità di aumento. Anche $x_1$ sarebbe stata una scelta valida (ha $\mathbf{w}\mathbf{a}_1 - c_1 > 0$).

---
## Slide 111 – Esempio n. 3

Quando una variabile $x_k$ non base aumenta le variabili in base vengono modificate come segue:

$$\mathbf{x}_\mathbf{B} = \mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{a}_k x_k = \bar{\mathbf{b}} - \mathbf{y}^2 x_2$$

dove $\bar{\mathbf{b}} = \mathbf{B}^{-1}\mathbf{b}$ e $\mathbf{y}^k = \mathbf{B}^{-1}\mathbf{a}_k$.

Nel nostro caso

$$\mathbf{y}^2 = \mathbf{B}^{-1}\mathbf{a}_2 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 3 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \end{bmatrix}$$

quindi:

$$\mathbf{x}_\mathbf{B} = \begin{bmatrix} x_3 \\ x_4 \end{bmatrix} = \bar{\mathbf{b}} - \mathbf{y}^2 x_2 = \begin{bmatrix} 6 \\ 1 \end{bmatrix} - \begin{bmatrix} 3 \\ 1 \end{bmatrix} x_2 = \begin{bmatrix} 6 - 3x_2 \\ 1 - x_2 \end{bmatrix} = \begin{bmatrix} \bar b_1 - y_1^2 x_2 \\ \bar b_2 - y_2^2 x_2 \end{bmatrix}$$

---
## Slide 112 – Esempio n. 3

Per calcolare il valore da assegnare a $x_2$ si applica il criterio del rapporto minimo:

$$x_2 = \frac{\bar b_r}{y_r^k} = \min\left\{\frac{\bar b_i}{y_i^k} : y_i^k > 0, i = 1, \ldots, m\right\}$$

che nel nostro caso:

$$x_2 = \min\left\{\frac{\bar b_1}{y_1^2} = \frac{6}{3}, \frac{\bar b_2}{y_2^2} = \frac{1}{1}\right\} = \frac{\bar b_2}{y_2^2} = 1$$

La variabile $x_4$ si annulla, quindi esce dalla base e $x_2$ entra al suo posto con il valore 1. La soluzione base corrente diventa:

$$\mathbf{x}_\mathbf{B} = \begin{bmatrix} x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} 6 - 3x_2 \\ 1 - x_2 \end{bmatrix} \ \Rightarrow \ \mathbf{x}_\mathbf{B} = \begin{bmatrix} x_3 \\ x_2 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \end{bmatrix} = \bar{\mathbf{b}}$$

Il nuovo valore della funzione obiettivo è:

$$z_1 = z_0 - (\mathbf{w}\mathbf{a}_2 - c_2)x_2 = 0 - 3x_2 = -3$$

>> Il rapporto minimo garantisce che nessuna variabile in base diventi negativa: $x_3 = 6 - 3x_2 \ge 0$ richiede $x_2 \le 2$, $x_4 = 1 - x_2 \ge 0$ richiede $x_2 \le 1$; il vincolo più stringente è il secondo, quindi esce $x_4$.
>> Nel piano $(x_1, x_2)$ ci si è spostati dal vertice $(0, 0)$ al vertice $(0, 1)$, dove il vincolo (b) è saturo. La nuova base è $\mathbf{B} = [\mathbf{a}_3, \mathbf{a}_2]$.

---
## Slide 113 – Esempio n. 3

**Iterazione n. 2**

Calcoliamo $\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1}$:

$$\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1} = [0, -3] \begin{bmatrix} 1 & 3 \\ 0 & 1 \end{bmatrix}^{-1} = [0, -3] \begin{bmatrix} 1 & -3 \\ 0 & 1 \end{bmatrix} = [0, -3]$$

Per cui verifichiamo che $\mathbf{w}\mathbf{a}_1 - c_1 \le 0$ e $\mathbf{w}\mathbf{a}_4 - c_4 \le 0$:

$$\mathbf{w}\mathbf{a}_1 - c_1 = [0, -3] \begin{bmatrix} 2 \\ -1 \end{bmatrix} - (-1) = 3 + 1 = +4$$

$$\mathbf{w}\mathbf{a}_4 - c_4 = [0, -3] \begin{bmatrix} 0 \\ 1 \end{bmatrix} - 0 = -3 + 0 = -3$$

Quindi la soluzione non è ottima e la variabile $x_1$ è candidata a entrare in base, perché:

$$\mathbf{w}\mathbf{a}_1 - c_1 = \max\left\{\mathbf{w}\mathbf{a}_1 - c_1, \mathbf{w}\mathbf{a}_4 - c_4\right\}$$

---
## Slide 114 – Esempio n. 3

Quando la variabile $x_1$ aumenta le variabili in base vengono modificate come segue:

$$\mathbf{x}_\mathbf{B} = \mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{a}_k x_k = \bar{\mathbf{b}} - \mathbf{y}^1 x_1$$

dove $\bar{\mathbf{b}} = \mathbf{B}^{-1}\mathbf{b}$ e $\mathbf{y}^k = \mathbf{B}^{-1}\mathbf{a}_k$.

Nel nostro caso

$$\mathbf{y}^1 = \mathbf{B}^{-1}\mathbf{a}_1 = \begin{bmatrix} 1 & -3 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 2 \\ -1 \end{bmatrix} = \begin{bmatrix} 5 \\ -1 \end{bmatrix}$$

quindi:

$$\mathbf{x}_\mathbf{B} = \begin{bmatrix} x_3 \\ x_2 \end{bmatrix} = \bar{\mathbf{b}} - \mathbf{y}^1 x_1 = \begin{bmatrix} 3 \\ 1 \end{bmatrix} - \begin{bmatrix} 5 \\ -1 \end{bmatrix} x_1 = \begin{bmatrix} 3 - 5x_1 \\ 1 + x_1 \end{bmatrix} = \begin{bmatrix} \bar b_1 - y_1^1 x_1 \\ \bar b_2 - y_2^1 x_1 \end{bmatrix}$$

---
## Slide 115 – Esempio n. 3

Per calcolare il valore da assegnare a $x_1$ si applica il criterio del rapporto minimo:

$$x_1 = \frac{\bar b_r}{y_r^1} = \min\left\{\frac{\bar b_i}{y_i^1} : y_i^1 > 0, i = 1, \ldots, m\right\}$$

che nel nostro caso:

$$x_1 = \min\left\{\frac{\bar b_1}{y_1^1} = \frac{3}{5}\right\} = \frac{3}{5}$$

La variabile che si annulla è $x_3$, quindi esce dalla base e $x_1$ entra al suo posto con il valore $\frac{3}{5}$. La soluzione base corrente diventa:

$$\mathbf{x}_\mathbf{B} = \begin{bmatrix} x_3 \\ x_2 \end{bmatrix} = \begin{bmatrix} 3 - 5x_1 \\ 1 + x_1 \end{bmatrix} \ \Rightarrow \ \mathbf{x}_\mathbf{B} = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix} = \begin{bmatrix} 3/5 \\ 8/5 \end{bmatrix} = \bar{\mathbf{b}}$$

Il nuovo valore della funzione obiettivo è:

$$z_2 = z_1 - (\mathbf{w}\mathbf{a}_1 - c_1)x_1 = -3 - 4\left(\frac{3}{5}\right) = -\frac{27}{5}$$

>> Nel rapporto minimo compare solo la prima riga perché $y_2^1 = -1 < 0$: al crescere di $x_1$ la variabile $x_2 = 1 + x_1$ aumenta e non può mai annullarsi.
>> Ora $x_3 = x_4 = 0$: entrambi i vincoli (a) e (b) sono saturi, cioè ci si trova nel vertice $(x_1, x_2) = (3/5, 8/5)$ dato dall'intersezione di $2x_1 + 3x_2 = 6$ e $-x_1 + x_2 = 1$.

---
## Slide 116 – Esempio n. 3

**Iterazione n. 3**

Calcoliamo $\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1}$:

$$\mathbf{w} = \mathbf{c}_\mathbf{B}\mathbf{B}^{-1} = [-1, -3] \begin{bmatrix} 2 & 3 \\ -1 & 1 \end{bmatrix}^{-1} = [-1, -3] \begin{bmatrix} 1/5 & -3/5 \\ 1/5 & 2/5 \end{bmatrix}$$

da cui $\mathbf{w} = [-4/5, -3/5]$.

Per cui verifichiamo che $\mathbf{w}\mathbf{a}_3 - c_3 \le 0$ e $\mathbf{w}\mathbf{a}_4 - c_4 \le 0$:

$$\mathbf{w}\mathbf{a}_3 - c_3 = [-4/5, -3/5] \begin{bmatrix} 1 \\ 0 \end{bmatrix} - 0 = -4/5 + 0 = -4/5$$

$$\mathbf{w}\mathbf{a}_4 - c_4 = [-4/5, -3/5] \begin{bmatrix} 0 \\ 1 \end{bmatrix} - 0 = -3/5 + 0 = -3/5$$

La soluzione è ottima!

>> Soluzione ottima: $x_1^* = 3/5$, $x_2^* = 8/5$, $z^* = -3/5 - 24/5 = -27/5$.
>> Il vettore $\mathbf{w} = [-4/5, -3/5]$ è la soluzione ottima del duale (con vincoli primali $\le$ in un problema di minimo le variabili duali sono $\le 0$): infatti $\mathbf{w}\mathbf{b} = -\tfrac{4}{5} \cdot 6 - \tfrac{3}{5} \cdot 1 = -\tfrac{27}{5} = z^*$.

---
## Slide 117 – Esempio n. 4

Si consideri il seguente problema di programmazione lineare continua:

$$\begin{aligned}
\min z = &-x_1 + 3x_2 \\
\text{s.t. } & -x_1 + x_2 \ge +3 \\
& \phantom{-}3x_1 + x_2 \le +6 \\
& \phantom{-3x_1} + x_2 \le +5 \\
& \phantom{-}x_1, \ x_2 \ge 0
\end{aligned}$$

Si vuole verificare se la soluzione $\mathbf{x} = [x_1, x_2] = [0, 3]$ è ottima.

Come si può verificare?

Possiamo considerare due possibilità:
- risolvere il problema;
- applicare le condizioni di complementarietà.

>> Il secondo approccio è molto più rapido: basta costruire il duale, dedurre dalle condizioni di complementarietà (ortogonalità) i valori delle variabili duali e controllare che siano duali ammissibili. Se lo sono, $\mathbf{x}$ è ottima; se il sistema non ha soluzione duale ammissibile, $\mathbf{x}$ non è ottima.

---
## Slide 118 – Esempio n. 4

Partendo dal problema primale:

$$\begin{aligned}
\min z = &-x_1 + 3x_2 \\
\text{s.t. } & -x_1 + x_2 \ge +3 \quad : \boldsymbol{w_1} \\
& \phantom{-}3x_1 + x_2 \le +6 \quad : \boldsymbol{w_2} \\
& \phantom{-3x_1} + x_2 \le +5 \quad : \boldsymbol{w_3} \\
& \phantom{-}x_1, \ x_2 \ge 0
\end{aligned}$$

Si definisce il suo problema duale:

$$\begin{aligned}
\max z = &+3w_1 + 6w_2 + 5w_3 \\
\text{s.t. } & -w_1 + 3w_2 \phantom{{}+w_3} \le -1 \quad : \boldsymbol{x_1} \\
& \phantom{-}w_1 + \phantom{3}w_2 + w_3 \le +3 \quad : \boldsymbol{x_2} \\
& \phantom{-}w_1 \ge 0 \\
& \phantom{-}w_2 \le 0 \\
& \phantom{-}w_3 \le 0
\end{aligned}$$

>> Regole usate (primale di minimo): vincolo $\ge$ $\Rightarrow$ $w_i \ge 0$; vincolo $\le$ $\Rightarrow$ $w_i \le 0$; variabile $x_j \ge 0$ $\Rightarrow$ vincolo duale $\sum_i w_i a_{ij} \le c_j$. I termini noti primali diventano i coefficienti dell'obiettivo duale e viceversa.

---
## Slide 119 – Esempio n. 4

Si verifica la *saturazione* dei vincoli del problema primale per la soluzione $\mathbf{x} = [x_1, x_2] = [0, 3]$:
- $-x_1 + x_2 \ge +3$: è saturo $\Rightarrow$ **$w_1 \ge 0$**;
- $3x_1 + x_2 \le +6$: non è saturo $\Rightarrow$ **$w_2 = 0$**;
- $x_2 \le +5$: non è saturo $\Rightarrow$ **$w_3 = 0$**.

Mentre la soluzione $\mathbf{x} = [x_1, x_2] = [0, 3]$ implica che il vincolo duale associato alla variabile $x_2$ deve essere saturo:

$$\boldsymbol{w_1 + w_2 + w_3 = +3} \quad \Rightarrow \quad \boldsymbol{w_1 = +3}$$

Per cui, applicando le condizioni di complementarietà si ha **$w_1 = +3$**, che rispetta tutti i vincoli del problema duale (compreso $w_1 \ge 0$).

Quindi partendo dalla soluzione primale $\mathbf{x}$ si è ottenuta una soluzione duale ammissibile $\mathbf{w}$ che soddisfa le condizioni di complementarietà, per cui la soluzione $\mathbf{x} = [x_1, x_2] = [0, 3]$ è ottima.

>> Verifica completa con $\mathbf{w} = [3, 0, 0]$: primo vincolo duale $-3 + 0 = -3 \le -1$ ✓, secondo $3 + 0 + 0 = 3 \le 3$ ✓ (saturo), segni ✓. Inoltre i valori delle funzioni obiettivo coincidono: primale $z = -0 + 3 \cdot 3 = 9$, duale $3 \cdot 3 + 6 \cdot 0 + 5 \cdot 0 = 9$.
>> Il vincolo duale associato a $x_1$ non deve essere saturo perché $x_1 = 0$ (la complementarietà impone la saturazione solo per le $x_j > 0$).

---
## Slide 120 – Il Metodo del Simplesso Formato Tableau

- Il "*simplesso primale in formato tableau*" permette di semplificare le operazioni di aggiornamento della base, della corrispondente soluzione e dei costi ridotti $\mathbf{w}\mathbf{a}_j - c_j$ ad ogni iterazione:

$$\begin{aligned}
\min \ z = {} & \mathbf{c}_B\mathbf{x}_B + \mathbf{c}_N\mathbf{x}_N \\
& \mathbf{B}\mathbf{x}_B + \mathbf{N}\mathbf{x}_N = \mathbf{b} \\
& \mathbf{x}_B, \ \mathbf{x}_N \ge \mathbf{0}
\end{aligned}$$

che si può riscrivere come:

$$\begin{aligned}
\min \ & z \\
& z - \mathbf{c}_B\mathbf{x}_B - \mathbf{c}_N\mathbf{x}_N = 0 \\
& \mathbf{x}_B + \mathbf{B}^{-1}\mathbf{N}\mathbf{x}_N = \mathbf{B}^{-1}\mathbf{b} \\
& \mathbf{x}_B, \ \mathbf{x}_N \ge \mathbf{0}
\end{aligned}$$

>> Il secondo sistema si ottiene portando tutto a sinistra nella definizione di $z$ e moltiplicando i vincoli $\mathbf{B}\mathbf{x}_B + \mathbf{N}\mathbf{x}_N = \mathbf{b}$ a sinistra per $\mathbf{B}^{-1}$.

---
## Slide 121 – Il Metodo del Simplesso Formato Tableau (2)

Moltiplicando la seconda equazione per $\mathbf{c}_B$ e sommandola per la prima si ottiene:

$$\begin{aligned}
\min \ & z \\
& z + \mathbf{0}\mathbf{x}_B + (\mathbf{c}_B\mathbf{B}^{-1}\mathbf{N} - \mathbf{c}_N)\mathbf{x}_N = \mathbf{c}_B\mathbf{B}^{-1}\mathbf{b} \\
& \mathbf{x}_B + \mathbf{B}^{-1}\mathbf{N}\mathbf{x}_N = \mathbf{B}^{-1}\mathbf{b} \\
& \mathbf{x}_B, \ \mathbf{x}_N \ge \mathbf{0}
\end{aligned}$$

- Il risultato può essere inserito in un "*tableau*" come segue:

|  | $z$ | $\mathbf{x}_\mathbf{B}$ | $\mathbf{x}_\mathbf{N}$ | RHS |  |
|---|---|---|---|---|---|
| $z$ | 1 | $\mathbf{0}$ | $\mathbf{c}_B\mathbf{B}^{-1}\mathbf{N} - \mathbf{c}_N$ | $\mathbf{c}_B\mathbf{B}^{-1}\mathbf{b}$ | $\leftarrow$ Riga 0 |
| $\mathbf{x}_\mathbf{B}$ | 0 | $\mathbf{I}$ | $\mathbf{B}^{-1}\mathbf{N}$ | $\mathbf{B}^{-1}\mathbf{b}$ |  |

dove il Right Hand Side (RHS) contiene il valore della funzione obiettivo e delle variabili base.

>> Nella riga 0 compaiono esattamente i valori $\mathbf{w}\mathbf{a}_j - c_j$ (con $\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1}$) per le colonne non base, mentre per le colonne in base valgono 0. Le colonne $\mathbf{B}^{-1}\mathbf{N}$ sono i vettori $\mathbf{y}^j = \mathbf{B}^{-1}\mathbf{a}_j$ e la colonna RHS contiene $\bar{\mathbf{b}}$: tutto ciò che serve per test di ottimalità e rapporto minimo si legge direttamente dal tableau.

---
## Slide 122 – Il Metodo del Simplesso Formato Tableau (3)

In una versione di maggiore dettaglio il "*tableau*" è il seguente:

$$\begin{array}{c|c|cccccc|ccccc|c}
 & z & & & \mathbf{x}_\mathbf{B} & & & & & & \mathbf{x}_\mathbf{N} & & & \text{RHS} \\
\hline
z & 1 & 0 & \ldots & 0 & \ldots & 0 & & \mathbf{w}\mathbf{a}_{m+1} - c_{m+1} & \ldots & \mathbf{w}\mathbf{a}_{m+j} - c_{m+j} & \ldots & \mathbf{w}\mathbf{a}_n - c_n & \mathbf{c}_B\mathbf{B}^{-1}\mathbf{b} \\
\hline
 & 0 & 1 & \ldots & 0 & \ldots & 0 & & y_1^{m+1} & \ldots & y_1^j & \ldots & y_1^n & \bar b_1 \\
 & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots \\
\mathbf{x}_\mathbf{B} & 0 & 0 & \ldots & 1 & \ldots & 0 & & y_i^{m+1} & \ldots & y_i^j & \ldots & y_i^n & \bar b_i \\
 & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots & & \ldots & \ldots & \ldots & \ldots & \ldots & \ldots \\
 & 0 & 0 & \ldots & 0 & \ldots & 1 & & y_m^{m+1} & \ldots & y_m^j & \ldots & y_m^n & \bar b_m
\end{array}$$

- Come si può notare il tableau contiene tutte le informazioni necessarie per l'esecuzione dell'algoritmo del simplesso.
- L'operazione base è il ***pivoting***. Che permette a una nuova variabile di entrare in base e di aggiornare *correttamente* tutte le informazioni nel tableau (costi ridotti, valore variabili base, etc.)
- Si illustra l'utilizzo del tableau con un esempio.

---
## Slide 123 – L'operazione di Pivoting

- Ad ogni iterazione si seleziona la variabile non base candidata ad entrare in base e si definisce con il criterio del rapporto minimo la variabile base che uscirà:
	- La variable entrante si seleziona scegliendo la colonna che massimizza il *costo ridotto* $\mathbf{w}\mathbf{a}_k - c_k$ presente nella riga 0.
	- La variable uscente si seleziona scegliendo la riga che minimizza il rapporto $\frac{\bar b_i}{y_i^k}$ con $y_i^k > 0$.
- Si divide la riga $i$ per $y_i^k$ (che sicuramente è positivo).
- Ad ogni riga $i' \ne i$ si aggiunge la riga $i$ moltiplicata per $-y_{i'}^k$.
- Alla riga 0 si aggiunge la riga $i$ moltiplicata per $-(\mathbf{w}\mathbf{a}_k - c_k)$.

>> Il pivoting è un passo di eliminazione di Gauss–Jordan sulla colonna $k$: al termine la colonna di $x_k$ diventa un vettore unitario (1 nella riga pivot, 0 altrove, riga 0 compresa), cioè $x_k$ è diventata una variabile in base e prende il posto della variabile che stava in base nella riga $i$.
>> Aggiornare la riga 0 in questo modo equivale a ricalcolare $\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1}$ e tutti i costi ridotti per la nuova base, e il RHS della riga 0 passa da $z$ a $z - (\mathbf{w}\mathbf{a}_k - c_k)\,\bar b_i / y_i^k$, la stessa formula vista negli esempi.

---
## Slide 124 – Simplesso Primale in Formato Tableau by Examples

Si consideri il problema:

$$\begin{aligned}
\min \ z = {} & x_1 - 2x_2 - 6x_3 \\
\text{s.t. } & x_1 \le 2 \\
& x_2 \le 3 \\
& x_3 \le 3 \\
& x_1 + x_2 + x_3 \le 4 \\
& x_1, \ x_2, \ x_3 \ge 0
\end{aligned}$$

![[RO03-s124-1.png|450]]

>> La figura mostra il poliedro ammissibile: il tetraedro $x_1 + x_2 + x_3 \le 4$, $\mathbf{x} \ge \mathbf{0}$ (vertici $(0,0,0)$, $(4,0,0)$, $(0,4,0)$, $(0,0,4)$) "tagliato" dai piani $x_1 = 2$, $x_2 = 3$ e $x_3 = 3$, che generano i vertici $(2,0,2)$, $(2,2,0)$, $(1,3,0)$, $(0,3,1)$, $(0,3,0)$, $(0,1,3)$, $(1,0,3)$.

---
## Slide 125 – Simplesso Primale in Formato Tableau by Examples

In forma standard il problema è il seguente:

$$\begin{aligned}
\min \ z = {} & x_1 - 2x_2 - 6x_3 \\
\text{s.t. } & x_1 + x_4 = 2 \\
& x_2 + x_5 = 3 \\
& x_3 + x_6 = 3 \\
& x_1 + x_2 + x_3 + x_7 = 4 \\
& x_1, \ x_2, \ x_3, \ x_4, \ x_5, \ x_6, \ x_7 \ge 0
\end{aligned}$$

Per cui il primo tableau è il seguente:

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ |  |
|---|---|---|---|---|---|---|---|
| -1 | +2 | +6 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 | 2 |
| 0 | 1 | 0 | 0 | 1 | 0 | 0 | 3 |
| 0 | 0 | 1 | 0 | 0 | 1 | 0 | 3 |
| 1 | 1 | 1 | 0 | 0 | 0 | 1 | 4 |

>> La base iniziale è quella delle slack $\{x_4, x_5, x_6, x_7\}$ ($\mathbf{B} = \mathbf{I}$, $\mathbf{c}_B = \mathbf{0}$, quindi $\mathbf{w} = \mathbf{0}$): la riga 0 contiene semplicemente $\mathbf{w}\mathbf{a}_j - c_j = -c_j$, cioè $[-1, +2, +6]$ per $x_1, x_2, x_3$. La soluzione corrisponde al vertice $(0,0,0)$ con $z = 0$.
>> Candidate a entrare sono $x_2$ ($+2$) e $x_3$ ($+6$); la regola del massimo sceglierebbe $k = 3$.

---
## Slide 126 – Simplesso Primale in Formato Tableau by Examples

Cosa succede se scegliamo $k = 2$ invece di $k = 3$?

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ |  |  |
|---|---|---|---|---|---|---|---|---|
| -1 | +2 | +6 | 0 | 0 | 0 | 0 | 0 |  |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 | 2 |  |
| 0 | $\boxed{1}$ | 0 | 0 | 1 | 0 | 0 | 3 | (0,0,0) |
| 0 | 0 | 1 | 0 | 0 | 1 | 0 | 3 |  |
| 1 | 1 | 1 | 0 | 0 | 0 | 1 | 4 |  |

![[RO03-s126-1.png|250]]

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ |  |  |
|---|---|---|---|---|---|---|---|---|
| -1 | 0 | +6 | 0 | -2 | 0 | 0 | -6 |  |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 | 2 |  |
| 0 | 1 | 0 | 0 | 1 | 0 | 0 | 3 | (0,3,0) |
| 0 | 0 | 1 | 0 | 0 | 1 | 0 | 3 |  |
| 1 | 0 | $\boxed{1}$ | 0 | -1 | 0 | 1 | 1 |  |

![[RO03-s126-2.png|250]]

>> Primo pivot: nella colonna di $x_2$ i coefficienti positivi sono nelle righe 2 e 4, con rapporti $3/1 = 3$ e $4/1 = 4$: il minimo è nella riga 2, quindi esce $x_5$. Operazioni: riga 4 $-=$ riga 2, riga 0 $-=$ $2 \cdot$ riga 2. Si passa al vertice $(0,3,0)$ con $z = -6$.
>> Secondo pivot: entra $x_3$ (unico costo ridotto positivo, $+6$); rapporti $3/1 = 3$ (riga 3) e $1/1 = 1$ (riga 4), quindi esce $x_7$ (pivot riquadrato nella riga 4).

---
## Slide 127 – Simplesso Primale in Formato Tableau by Examples

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ |  |  |
|---|---|---|---|---|---|---|---|---|
| -7 | 0 | 0 | 0 | +4 | 0 | -6 | -12 |  |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 | 2 |  |
| 0 | 1 | 0 | 0 | 1 | 0 | 0 | 3 | (0,3,1) |
| -1 | 0 | 0 | 0 | $\boxed{1}$ | 1 | -1 | 2 |  |
| 1 | 0 | 1 | 0 | -1 | 0 | 1 | 1 |  |

![[RO03-s127-1.png|250]]

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ |  |  |
|---|---|---|---|---|---|---|---|---|
| -3 | 0 | 0 | 0 | 0 | -4 | -2 | -20 |  |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 | 2 |  |
| 1 | 1 | 0 | 0 | 0 | -1 | 1 | 1 | (0,1,3) |
| -1 | 0 | 0 | 0 | 1 | 1 | -1 | 2 |  |
| 0 | 0 | 1 | 0 | 0 | 1 | 0 | 3 |  |

![[RO03-s127-2.png|250]]

La soluzione è ottima!

>> Dopo il secondo pivot si è nel vertice $(0,3,1)$ con $z = -2 \cdot 3 - 6 \cdot 1 = -12$. Ora l'unico costo ridotto positivo è quello di $x_5$ ($+4$): nella sua colonna i coefficienti positivi sono nelle righe 2 e 3, con rapporti $3/1 = 3$ e $2/1 = 2$, quindi il pivot è nella riga 3 ed esce $x_6$.
>> Nel tableau finale tutti i valori della riga 0 sono $\le 0$: base ottima $\{x_4, x_2, x_5, x_3\}$ con $x_2 = 1$, $x_3 = 3$ (e $x_4 = 2$, $x_5 = 2$), cioè il vertice $(0,1,3)$ con $z^* = -2 - 18 = -20$. Con la scelta $k = 2$ sono servite 3 iterazioni: $(0,0,0) \to (0,3,0) \to (0,3,1) \to (0,1,3)$.

---
## Slide 128 – Simplesso Primale in Formato Tableau by Examples

Cosa sarebbe successo se avessimo scelto $\mathbf{w}\mathbf{a}_k - c_k = \max_j\left\{\mathbf{w}\mathbf{a}_j - c_j\right\}$.

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ |  |  |
|---|---|---|---|---|---|---|---|---|
| -1 | +2 | +6 | 0 | 0 | 0 | 0 | 0 |  |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 | 2 |  |
| 0 | 1 | 0 | 0 | 1 | 0 | 0 | 3 | (0,0,0) |
| 0 | 0 | $\boxed{1}$ | 0 | 0 | 1 | 0 | 3 |  |
| 1 | 1 | 1 | 0 | 0 | 0 | 1 | 4 |  |

![[RO03-s128-1.png|250]]

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ |  |  |
|---|---|---|---|---|---|---|---|---|
| -1 | +2 | 0 | 0 | 0 | -6 | 0 | -18 |  |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 | 2 |  |
| 0 | 1 | 0 | 0 | 1 | 0 | 0 | 3 | (0,0,3) |
| 0 | 0 | 1 | 0 | 0 | 1 | 0 | 3 |  |
| 1 | $\boxed{1}$ | 0 | 0 | 0 | -1 | 1 | 1 |  |

![[RO03-s128-2.png|250]]

>> Entra $x_3$ (costo ridotto $+6$, il massimo); rapporti $3/1 = 3$ (riga 3) e $4/1 = 4$ (riga 4): esce $x_6$. Si arriva al vertice $(0,0,3)$ con $z = -18$.
>> Poi entra $x_2$ ($+2$); rapporti $3/1 = 3$ (riga 2) e $1/1 = 1$ (riga 4): esce $x_7$.

---
## Slide 129 – Simplesso Primale in Formato Tableau by Examples

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $x_7$ |  |  |
|---|---|---|---|---|---|---|---|---|
| -3 | 0 | 0 | 0 | 0 | -4 | -2 | -20 |  |
| 1 | 0 | 0 | 1 | 0 | 0 | 0 | 2 |  |
| -1 | 0 | 0 | 0 | 1 | 1 | -1 | 2 | (0,1,3) |
| 0 | 0 | 1 | 0 | 0 | 1 | 0 | 3 |  |
| 1 | 1 | 0 | 0 | 0 | -1 | 1 | 1 |  |

![[RO03-s129-1.png|250]]

La soluzione è ottima!

In questo caso abbiamo fatto una iterazione in meno.

Scegliendo $\mathbf{w}\mathbf{a}_k - c_k = \max_j\left\{\mathbf{w}\mathbf{a}_j - c_j\right\}$ non si hanno garanzie di una più rapida convergenza, ma in media le iterazioni diminuiscono.

>> Percorso: $(0,0,0) \to (0,0,3) \to (0,1,3)$, 2 iterazioni contro le 3 della scelta $k = 2$. Si arriva allo stesso ottimo $(0,1,3)$ con $z^* = -20$; la riga 0 finale è identica a quella della slide 127, solo le righe dei vincoli compaiono in ordine diverso (la base è la stessa).
>> La regola del massimo costo ridotto guarda solo al miglioramento per unità di $x_k$, non a quanto $x_k$ potrà effettivamente crescere (dato dal rapporto minimo): per questo non garantisce sempre il minor numero di iterazioni.

---
## Slide 130 – Come determinare una base iniziale: caso facile

- Se il problema di $n$ variabili e $m$ vincoli ha la seguente forma:

$$\begin{aligned}
z_P = \min \ & \mathbf{c}\mathbf{x} \\
\text{s.t. } & \mathbf{A}\mathbf{x} \le \mathbf{b} \\
& \mathbf{x} \ge \mathbf{0}
\end{aligned}$$

- quando si aggiungono le $m$ variabili $\mathbf{x}_\mathbf{S}$ di ***slack*** alle $n$ variabili originarie, il primale in forma standard è il seguente:

$$\begin{aligned}
z_P = \min \ & \mathbf{c}\mathbf{x} \\
\text{s.t. } & \mathbf{A}\mathbf{x} + \mathbf{I}\mathbf{x}_\mathbf{S} = \mathbf{b} \\
& \mathbf{x}, \mathbf{x}_\mathbf{S} \ge \mathbf{0}
\end{aligned}$$

dove $\mathbf{I} = [\mathbf{e}_1, \ldots, \mathbf{e}_m]$ è la matrice identità di ordine $m$, che senz'altro può essere una base $\mathbf{B} = \mathbf{I}$, la quale è anche ammissibile se $\mathbf{b} \ge \mathbf{0}$.

>> Con $\mathbf{B} = \mathbf{I}$ si ha $\mathbf{x}_\mathbf{B} = \mathbf{x}_\mathbf{S} = \mathbf{b}$ e $\mathbf{x} = \mathbf{0}$: la base iniziale corrisponde all'origine. Se invece qualche $b_i < 0$, moltiplicando il vincolo per $-1$ si ottiene un vincolo $\ge$ la cui slack entra con coefficiente $-1$: la colonna identità si perde e serve un metodo come il Big-M (o le due fasi).

---
## Slide 131 – Come determinare una base iniziale: Metodo Big-M

- Se il problema ha la seguente forma:

$$\begin{aligned}
z_P = \min \ & \mathbf{c}\mathbf{x} \\
\text{s.t. } & \mathbf{A}\mathbf{x} = \mathbf{b} \\
& \mathbf{x} \ge \mathbf{0}
\end{aligned}$$

non è detto che sia facile individuare una base $\mathbf{B}$ tra le colonne di $\mathbf{A}$.
- Nell'ipotesi che $\mathbf{b} \ge \mathbf{0}$, si possono aggiungere $m$ variabili $\mathbf{x}_\mathbf{A}$, dette ***artificiali***, alle $n$ variabili originarie, e risolvere il seguente problema:

$$\begin{aligned}
z_{P(M)} = \min \ & \mathbf{c}\mathbf{x} + \mathbf{M}\mathbf{x}_\mathbf{A} \\
\text{s.t. } & \mathbf{A}\mathbf{x} + \mathbf{I}\mathbf{x}_\mathbf{A} = \mathbf{b} \\
& \mathbf{x}, \mathbf{x}_\mathbf{A} \ge \mathbf{0}
\end{aligned}$$

dove $\mathbf{I}$ è la matrice identità di ordine $m$ e $\mathbf{M} = M\mathbf{I}$, con $M > 0$ scelto *sufficientemente grande*.

>> Idea: le colonne delle artificiali formano la base iniziale ammissibile $\mathbf{B} = \mathbf{I}$ con $\mathbf{x}_\mathbf{A} = \mathbf{b} \ge \mathbf{0}$. Il costo $M$ molto grande penalizza fortemente ogni artificiale positiva, quindi il simplesso tende a farle uscire dalla base: se il problema originale è ammissibile, all'ottimo di $P(M)$ (per $M$ abbastanza grande) si avrà $\mathbf{x}_\mathbf{A} = \mathbf{0}$.
>> In pratica il termine $\mathbf{M}\mathbf{x}_\mathbf{A}$ vale $M \sum_{i=1}^m x_{A,i}$. Un'alternativa che evita di fissare un valore numerico di $M$ è il metodo delle due fasi (prima si minimizza $\sum_i x_{A,i}$, poi si ottimizza $\mathbf{c}\mathbf{x}$ partendo dalla base trovata).

---
## Slide 132 – Come determinare una base iniziale: Metodo Big-M (2)

- Se risolviamo il problema $P(M)$ con le variabili artificiali, possiamo avere i seguenti casi:
	- Il problema $P(M)$ ha una soluzione ottima $(\mathbf{x}^*, \mathbf{x}_\mathbf{A}{}^*)$:
		- Se $\mathbf{x}_\mathbf{A}{}^* = \mathbf{0}$, allora $\mathbf{x}^*$ è la soluzione ottima del problema P;
		- Se $\mathbf{x}_\mathbf{A}{}^* \ne \mathbf{0}$, allora il problema P non ha soluzione.
	- Il problema $P(M)$ ha soluzione illimitata. Data la soluzione base ammissibile $(\mathbf{x}, \mathbf{x}_\mathbf{A})$ corrispondente all'iterazione in cui il simplesso è terminato:
		- Se $\mathbf{x}_\mathbf{A} = \mathbf{0}$, allora il problema P ha soluzione illimitata;
		- Se $\mathbf{x}_\mathbf{A} \ne \mathbf{0}$, allora il problema P non ha soluzione.

Omettiamo la dimostrazione.

>> "Non ha soluzione" qui significa che P è **inammissibile** (regione ammissibile vuota): anche pagando il costo enorme $M$ non si riesce ad azzerare le artificiali, quindi non esiste $\mathbf{x} \ge \mathbf{0}$ con $\mathbf{A}\mathbf{x} = \mathbf{b}$.
>> Intuizione per il primo caso: se $(\mathbf{x}^*, \mathbf{0})$ è ottima per $P(M)$, per ogni $\mathbf{x}$ ammissibile di P si ha $\mathbf{c}\mathbf{x}^* \le \mathbf{c}\mathbf{x} + M \cdot 0 = \mathbf{c}\mathbf{x}$, quindi $\mathbf{x}^*$ è ottima anche per P.

---
## Slide 133 – Come determinare una base iniziale: Metodo 2-Fasi

- Sia dato un problema della seguente forma:

$$
\begin{aligned}
(P)\quad z_P = \min\ & \mathbf{c}\mathbf{x}\\
\text{s.t. } & \mathbf{A}\mathbf{x} = \mathbf{b}\\
& \mathbf{x} \ge \mathbf{0}
\end{aligned}
$$

- Nell'ipotesi che $\mathbf{b} \ge \mathbf{0}$, si possono aggiungere $m$ variabili $\mathbf{x_A}$, dette ***artificiali***, alle $n$ variabili originarie, e risolvere il seguente problema:

$$
\begin{aligned}
(P')\quad z_{P'} = \min\ & \mathbf{1}\mathbf{x_A}\\
\text{s.t. } & \mathbf{A}\mathbf{x} + \mathbf{I}\mathbf{x_A} = \mathbf{b}\\
& \mathbf{x}, \mathbf{x_A} \ge \mathbf{0}
\end{aligned}
$$

	dove $\mathbf{I}$ è la matrice identità di ordine $m$ e $\mathbf{1} = \{1, 1, \dots, 1\}$, è un vettore di $m$ componenti tutte pari a 1.

>> L'ipotesi $\mathbf{b} \ge \mathbf{0}$ non è restrittiva: se $b_i < 0$ basta moltiplicare il vincolo $i$ per $-1$.
>> Il vantaggio di $P'$ è che una base ammissibile è disponibile subito: $B = \mathbf{I}$ (colonne delle artificiali), con $\mathbf{x} = \mathbf{0}$ e $\mathbf{x_A} = \mathbf{b} \ge \mathbf{0}$.
>> Le artificiali servono solo nelle righe che non hanno già una variabile "pronta" per la base (ad es. una slack con coefficiente $+1$ di un vincolo $\le$ con $b_i \ge 0$).

---
## Slide 134 – Come determinare una base iniziale: Metodo 2-Fasi (2)

- In questo caso i problemi $P$ e $P'$ non sono equivalenti.
- Risolvere il problema $P'$ serve solo a determinare una soluzione base ammissibile per il problema $P$.
- Sia $(\mathbf{x}^*, \mathbf{x}^*_{\mathbf{A}})$ la soluzione ottima del problema $P'$ di valore $z_{P'}$. Si possono presentare tre casi:
	- $z_{P'} > 0$
	  $\Rightarrow$ **il problema $P$ non ha una base ammissibile**;
	- $z_{P'} = 0$ e nessuna variabile artificiale è in base
	  $\Rightarrow$ **il problema $P$ ha una base ammissibile**;
	- $z_{P'} = 0$ e almeno una variabile artificiale è in base
	  $\Rightarrow$ **il problema $P$ ha una base ammissibile, ma bisogna *estrarla***.

>> Perché funziona: poiché $\mathbf{x_A} \ge \mathbf{0}$, si ha sempre $z_{P'} = \sum_i x^A_i \ge 0$. Inoltre $z_{P'} = 0 \iff \mathbf{x_A} = \mathbf{0} \iff \mathbf{A}\mathbf{x} = \mathbf{b},\ \mathbf{x}\ge\mathbf{0}$, cioè $\mathbf{x}$ è ammissibile per $P$.
>> Quindi se l'ottimo di $P'$ è strettamente positivo, nessun $\mathbf{x}$ ammissibile per $P$ esiste (altrimenti $(\mathbf{x}, \mathbf{0})$ avrebbe valore $0$).

---
## Slide 135 – Come determinare una base iniziale: Metodo 2-Fasi (3)

- Se $z_{P'} = 0$ e una variabile artificiale è in base, per generare una base senza variabili artificiali è necessario farla uscire.
- Questo caso si verifica quando la soluzione è ***degenere***, ossia una variabile in base ha valore nullo:

![[RO03-s135-1.png]]

- Se esiste un $y_i^j \neq 0$, allora possiamo ***pivotare*** su questo coefficiente e la variabile $x_j$ entra in base al posto della variabile artificiale $x_h^A$.
- Se $y_i^j = 0$, per ogni $j = 1, \dots, n$, allora possiamo eliminare dal tableau sia la riga $i$ che la colonna della variabile artificiale $x_h^A$.

>> Nel pivot su $y_i^j$ è ammesso anche un coefficiente **negativo**: dato che $\bar b_i = 0$, la riga $i$ divisa per $y_i^j$ ha ancora termine noto $0$ e gli altri $\bar b$ non cambiano (si sottrae un multiplo di $0$). L'ammissibilità è quindi preservata e cambia solo la base, non il punto.
>> Se invece tutti gli $y_i^j$ delle variabili originarie sono nulli, la riga $i$ (ristretta alle variabili originarie) è combinazione lineare delle altre: il vincolo corrispondente di $P$ è **ridondante** e può essere eliminato.

---
## Slide 136 – Come determinare una base iniziale: Esempio 1

Si consideri il problema:

$$
\begin{array}{rrrrcr}
\min z_P = & -4x_1 & +x_2 & -3x_3 & & \\
\text{s.t.} & +2x_1 & +x_2 & +2x_3 & = & +10\\
 & +6x_1 & -3x_2 & & = & +8\\
 & x_1\ , & x_2\ , & x_3 & \ge & 0
\end{array}
$$

Il problema per la fase 1 è il seguente:

$$
\begin{array}{rrrrrrcr}
\min z_{P'} = & & & & +x_4 & +x_5 & & \\
\text{s.t.} & +2x_1 & +x_2 & +2x_3 & +x_4 & & = & +10\\
 & +6x_1 & -3x_2 & & & +x_5 & = & +8\\
 & x_1\ , & x_2\ , & x_3\ , & x_4\ , & x_5 & \ge & 0
\end{array}
$$

>> Qui entrambi i vincoli sono di uguaglianza, quindi non ci sono slack da sfruttare: servono due artificiali, $x_4$ e $x_5$.

---
## Slide 137 – Come determinare una base iniziale: Esempio 1

Il primo tableau è il seguente:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & 0 & 0 & -1 & -1 & 0\\ \hline
2 & 1 & 2 & 1 & 0 & 10\\
6 & -3 & 0 & 0 & 1 & 8\\ \hline
\end{array}
$$

Prima di partire è necessario sistemare la riga 0, azzerando i costi ridotti $\mathbf{w}\mathbf{a}_j - c_j$ delle variabili in base:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
+8 & -2 & +2 & 0 & 0 & +18\\ \hline
2 & 1 & 2 & 1 & 0 & 10\\
6 & -3 & 0 & 0 & 1 & 8\\ \hline
\end{array}
$$

>> In pratica la nuova riga 0 si ottiene sommando alla riga 0 tutte le righe in cui c'è un'artificiale in base (costo 1): $(0,0,0,-1,-1\,|\,0) + (2,1,2,1,0\,|\,10) + (6,-3,0,0,1\,|\,8) = (8,-2,2,0,0\,|\,18)$.
>> Il valore $+18 = 10 + 8$ è proprio $z_{P'}$ nella base iniziale $\mathbf{x_A} = \mathbf{b}$.

---
## Slide 138 – Come determinare una base iniziale: Esempio 1

Risolviamo la fase 1:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
+8 & -2 & +2 & 0 & 0 & +18\\ \hline
2 & 1 & 2 & 1 & 0 & 10\\
\boxed{6} & -3 & 0 & 0 & 1 & 8\\ \hline
\end{array}
$$

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & +2 & +2 & 0 & -4/3 & +22/3\\ \hline
0 & \boxed{2} & 2 & 1 & -1/3 & 22/3\\
1 & -1/2 & 0 & 0 & 1/6 & 4/3\\ \hline
\end{array}
$$

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & 0 & 0 & -1 & -1 & 0\\ \hline
0 & 1 & 1 & 1/2 & -1/6 & 11/3\\
1 & 0 & 1/2 & 1/4 & 1/12 & 19/6\\ \hline
\end{array}
$$

>> Scelte di pivot: entra $x_1$ (costo ridotto $+8$, il massimo); rapporto minimo $\min\{10/2,\ 8/6\} = 4/3$ ⇒ esce la riga 2 ($x_5$).
>> Poi $x_2$ e $x_3$ hanno entrambi $+2$: si sceglie $x_2$ (indice minimo); l'unico $y_i^2 > 0$ è nella riga 1, con rapporto $(22/3)/2 = 11/3$ ⇒ esce $x_4$.
>> Nell'ultimo tableau tutti i costi ridotti sono $\le 0$ e $z_{P'} = 0$: fase 1 conclusa con base $\{x_2, x_1\}$.

---
## Slide 139 – Come determinare una base iniziale: Esempio 1

Siccome la fase 1 è terminata con $z_{P'} = 0$ e le variabili artificiali sono fuori dalla base, abbiamo individuato la base per $P$.

Eliminiamo le variabili artificiali e ripristinando la funzione obiettivo originale nella riga 0, otteniamo il seguente tableau per la fase 2:

$$
\begin{array}{ccc|c}
x_1 & x_2 & x_3 & \\
+4 & -1 & +3 & 0\\ \hline
0 & 1 & 1 & 11/3\\
1 & 0 & 1/2 & 19/6\\ \hline
\end{array}
$$

Anche per la fase 2, prima di partire è necessario sistemare la riga 0, azzerando i costi ridotti $\mathbf{w}\mathbf{a}_j - c_j$ delle variabili in base:

$$
\begin{array}{ccc|c}
x_1 & x_2 & x_3 & \\
0 & 0 & +2 & -9\\ \hline
0 & 1 & 1 & 11/3\\
1 & 0 & 1/2 & 19/6\\ \hline
\end{array}
$$

>> La riga 0 iniziale contiene $-c_j$ (con $\mathbf{w} = \mathbf{0}$): da $\mathbf{c} = (-4, 1, -3)$ si ha $(+4, -1, +3)$.
>> Per azzerare i costi ridotti di $x_2$ (riga 1) e $x_1$ (riga 2): nuova riga 0 $=$ riga 0 $+ 1\cdot$ riga 1 $- 4\cdot$ riga 2. Il termine noto diventa $0 + 11/3 - 4\cdot 19/6 = -9$, cioè il valore $\mathbf{c_B}\mathbf{B}^{-1}\mathbf{b} = 1\cdot\frac{11}{3} - 4\cdot\frac{19}{6} = -9$ della soluzione di partenza.

---
## Slide 140 – Come determinare una base iniziale: Esempio 1 (2)

Dopo aver azzerando i costi ridotti delle variabili in base, abbiamo:

$$
\begin{array}{ccc|c}
x_1 & x_2 & x_3 & \\
0 & 0 & +2 & -9\\ \hline
0 & 1 & \boxed{1} & 11/3\\
1 & 0 & 1/2 & 19/6\\ \hline
\end{array}
$$

Una volta eseguita l'operazione di pivoting:

$$
\begin{array}{ccc|c}
x_1 & x_2 & x_3 & \\
0 & -2 & 0 & -49/3\\ \hline
0 & 1 & 1 & 11/3\\
1 & -1/2 & 0 & 4/3\\ \hline
\end{array}
\qquad \leftarrow \text{ottimo!}
$$

>> Entra $x_3$ (unico costo ridotto positivo); rapporti $\frac{11/3}{1} = \frac{11}{3}$ e $\frac{19/6}{1/2} = \frac{19}{3}$ ⇒ esce la riga 1 ($x_2$).
>> Soluzione ottima: $\mathbf{x}^* = \left(\frac{4}{3}, 0, \frac{11}{3}\right)$, con $z_P^* = -4\cdot\frac{4}{3} - 3\cdot\frac{11}{3} = -\frac{16}{3} - 11 = -\frac{49}{3}$ (verificato anche numericamente).

---
## Slide 141 – Come determinare una base iniziale: Esempio 2

Si consideri il problema:

$$
\begin{array}{rrrcr}
\min z_P = & -2x_1 & +x_2 & & \\
\text{s.t.} & +x_1 & -2x_2 & \ge & +5\\
 & +2x_1 & +5x_2 & = & +6\\
 & x_1\ , & x_2 & \ge & 0
\end{array}
$$

Il problema per la fase 1, aggiungendo le variabili di slack e artificiali, è il seguente:

$$
\begin{array}{rrrrrrcr}
\min z_{P'} = & & & & +x_4 & +x_5 & & \\
\text{s.t.} & +x_1 & -2x_2 & -x_3 & +x_4 & & = & +5\\
 & +2x_1 & +5x_2 & & & +x_5 & = & +6\\
 & x_1\ , & x_2\ , & x_3\ , & x_4\ , & x_5 & \ge & 0
\end{array}
$$

>> Il vincolo $\ge$ riceve una variabile di surplus $x_3$ con coefficiente $-1$: non può fare da variabile di base (avrebbe valore $-5$), per questo serve comunque l'artificiale $x_4$.

---
## Slide 142 – Come determinare una base iniziale: Esempio 2

Il primo tableau è il seguente:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & 0 & 0 & -1 & -1 & 0\\ \hline
1 & -2 & -1 & 1 & 0 & 5\\
2 & 5 & 0 & 0 & 1 & 6\\ \hline
\end{array}
$$

Prima di partire è necessario sistemare la riga 0, azzerando i costi ridotti $\mathbf{w}\mathbf{a}_j - c_j$ delle variabili in base:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
+3 & +3 & -1 & 0 & 0 & +11\\ \hline
1 & -2 & -1 & 1 & 0 & 5\\
2 & 5 & 0 & 0 & 1 & 6\\ \hline
\end{array}
$$

---
## Slide 143 – Come determinare una base iniziale: Esempio 2

Risolviamo la fase 1:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
+3 & +3 & -1 & 0 & 0 & +11\\ \hline
1 & -2 & -1 & 1 & 0 & 5\\
\boxed{2} & 5 & 0 & 0 & 1 & 6\\ \hline
\end{array}
$$

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & -9/2 & -1 & 0 & -3/2 & +2\\ \hline
0 & -9/2 & -1 & 1 & -1/2 & 2\\
1 & 5/2 & 0 & 0 & 1/2 & 3\\ \hline
\end{array}
$$

Purtroppo la fase 1 termina con $z_{P'} > 0$, quindi il problema originale non ha una soluzione ammissibile.

>> Dopo un solo pivot tutti i costi ridotti sono $\le 0$: l'ottimo di $P'$ vale $2$, con l'artificiale $x_4 = 2$ ancora in base.
>> Verifica diretta: dal vincolo di uguaglianza $x_1 = \frac{6 - 5x_2}{2} \le 3$, quindi $x_1 - 2x_2 \le 3 < 5$ per ogni $x_2 \ge 0$: il vincolo $x_1 - 2x_2 \ge 5$ non può mai essere soddisfatto. Il "deficit" minimo è proprio $5 - 3 = 2 = z_{P'}$.

---
## Slide 144 – Come determinare una base iniziale: Esempio 3

Si consideri il problema:

$$
\begin{array}{rrrcr}
\min z_P = & -3x_1 & -2x_2 & & \\
\text{s.t.} & +x_1 & -2x_2 & \ge & +8\\
 & +3x_1 & +2x_2 & \ge & +5\\
 & x_1\ , & x_2 & \ge & 0
\end{array}
$$

Il problema per la fase 1, aggiungendo le variabili di slack e artificiali, è il seguente:

$$
\begin{array}{rrrrrrrcr}
\min z_{P'} = & & & & & +x_5 & +x_6 & & \\
\text{s.t.} & +x_1 & -2x_2 & -x_3 & & +x_5 & & = & +8\\
 & +3x_1 & +2x_2 & & -x_4 & & +x_6 & = & +5\\
 & x_1\ , & x_2\ , & x_3\ , & x_4\ , & x_5\ , & x_6 & \ge & 0
\end{array}
$$

---
## Slide 145 – Come determinare una base iniziale: Esempio 3

Il primo tableau è il seguente:

$$
\begin{array}{cccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & x_6 & \\
0 & 0 & 0 & 0 & -1 & -1 & 0\\ \hline
1 & -2 & -1 & 0 & 1 & 0 & 8\\
3 & 2 & 0 & -1 & 0 & 1 & 5\\ \hline
\end{array}
$$

Prima di partire è necessario sistemare la riga 0, azzerando i costi ridotti $\mathbf{w}\mathbf{a}_j - c_j$ delle variabili in base:

$$
\begin{array}{cccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & x_6 & \\
+4 & 0 & -1 & -1 & 0 & 0 & +13\\ \hline
1 & -2 & -1 & 0 & 1 & 0 & 8\\
3 & 2 & 0 & -1 & 0 & 1 & 5\\ \hline
\end{array}
$$

---
## Slide 146 – Come determinare una base iniziale: Esempio 3

Risolviamo la fase 1:

$$
\begin{array}{cccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & x_6 & \\
+4 & 0 & -1 & -1 & 0 & 0 & +13\\ \hline
1 & -2 & -1 & 0 & 1 & 0 & 8\\
\boxed{3} & 2 & 0 & -1 & 0 & 1 & 5\\ \hline
\end{array}
$$

$$
\begin{array}{cccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & x_6 & \\
0 & -8/3 & -1 & +1/3 & 0 & -4/3 & +19/3\\ \hline
0 & -8/3 & -1 & \boxed{1/3} & 1 & -1/3 & 19/3\\
1 & 2/3 & 0 & -1/3 & 0 & 1/3 & 5/3\\ \hline
\end{array}
$$

$$
\begin{array}{cccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & x_6 & \\
0 & 0 & 0 & 0 & -1 & -1 & 0\\ \hline
0 & -8 & -3 & 1 & 3 & -1 & 19\\
1 & -2 & -1 & 0 & 1 & 0 & 8\\ \hline
\end{array}
$$

>> Primo pivot: entra $x_1$ ($+4$), rapporti $\min\{8/1,\ 5/3\} = 5/3$ ⇒ esce $x_6$. Secondo pivot: l'unico costo ridotto positivo è quello di $x_4$ ($+1/3$) e l'unico $y_i^4 > 0$ è nella riga 1 ⇒ esce $x_5$.
>> Si noti che la variabile di surplus $x_4$ entra in base: la base finale $\{x_4, x_1\}$ non contiene artificiali.

---
## Slide 147 – Come determinare una base iniziale: Esempio 3

Siccome la fase 1 è terminata con $z_{P'} = 0$ e le variabili artificiali sono fuori dalla base, abbiamo individuato la base per $P$.

Eliminiamo le variabili artificiali e ripristinando la funzione obiettivo originale nella riga 0, otteniamo il seguente tableau per la fase 2:

$$
\begin{array}{cccc|c}
x_1 & x_2 & x_3 & x_4 & \\
+3 & +2 & 0 & 0 & 0\\ \hline
0 & -8 & -3 & 1 & 19\\
1 & -2 & -1 & 0 & 8\\ \hline
\end{array}
$$

Anche per la fase 2, prima di partire è necessario sistemare la riga 0, azzerando i costi ridotti $\mathbf{w}\mathbf{a}_j - c_j$ delle variabili in base:

$$
\begin{array}{cccc|c}
x_1 & x_2 & x_3 & x_4 & \\
0 & +8 & +3 & 0 & -24\\ \hline
0 & -8 & -3 & 1 & 19\\
1 & -2 & -1 & 0 & 8\\ \hline
\end{array}
$$

>> Solo $x_1$ (in base nella riga 2) ha costo ridotto non nullo: nuova riga 0 $=$ riga 0 $- 3\cdot$ riga 2. Il valore $-24 = -3\cdot 8$ è $z_P$ nel punto $(x_1, x_2) = (8, 0)$.

---
## Slide 148 – Come determinare una base iniziale: Esempio 3 (2)

Purtroppo se si sceglie la variable entrante $x_2$ si scopre che $\mathbf{y}^2 < \mathbf{0}$, quindi il problema ha soluzione *illimitata*.

In questo caso si presentava una situazione analoga anche se avessimo scelto la variabile entrante $x_3$.

>> Colonna di $x_2$: $\mathbf{y}^2 = (-8, -2)^T$, nessun elemento positivo ⇒ il rapporto minimo non ha candidati. Facendo crescere $x_2 = t \ge 0$ si ottiene la semiretta ammissibile $x_1 = 8 + 2t$, $x_4 = 19 + 8t$, $x_3 = 0$, lungo la quale $z_P = -3(8+2t) - 2t = -24 - 8t \to -\infty$.
>> Controllo: $x_1 - 2x_2 = 8 \ge 8$ e $3x_1 + 2x_2 = 24 + 8t \ge 5$ per ogni $t \ge 0$. Il costo ridotto $+8$ è proprio la pendenza con cui l'obiettivo decresce.

---
## Slide 149 – Metodo del Simplesso: Degenerazione e Convergenza

- La ***degenerazione*** si presenta quando alcuni $\bar b_i$ sono nulli.
- In caso di degenerazione, quando si applica il rapporto minimo, il valore da assegnare alla variabile entrante è sempre nullo:

$$
x_k = \frac{\bar b_r}{y_r^k} = \min\left\{ \frac{\bar b_i}{y_i^k} : y_i^k > 0,\ i = 1, \dots, m \right\} = 0
$$

- Per cui cambia la base, ma non il punto estremo che coincide con il precedente.
- Il rischio è che il metodo torni a *spostarsi* su una base già considerata nelle precedenti iterazioni.

>> Precisazione: il passo è nullo quando il minimo del rapporto è raggiunto in una riga con $\bar b_r = 0$ e $y_r^k > 0$; se tutte le righe con $\bar b_i = 0$ hanno $y_i^k \le 0$, il passo può essere comunque positivo.
>> Con un passo nullo il valore di $z$ non cambia: viene meno l'argomento "$z$ migliora strettamente ad ogni iterazione" che garantisce la terminazione nel caso non degenere.

---
## Slide 150 – Metodo del Simplesso: Degenerazione e Convergenza (2)

- Si consideri il seguente esempio:

$$
\begin{array}{rcrcl}
x_1 & & & \le & 2\\
 & & x_2 & \le & 2\\
x_1 & + & x_2 & \le & 4
\end{array}
$$

![[RO03-s150-1.png]]

	Il metodo potrebbe avere un ***ciclo*** che coinvolge le basi associate ai tre punti estremi $A, B$ e $C$ che corrispondono a tre diverse soluzioni base, ma coincidono.

>> In forma standard si aggiungono le slack $s_1, s_2, s_3$ (base di dimensione $m = 3$). Nel punto $(2,2)$ si ha $x_1 = x_2 = 2$ e $s_1 = s_2 = s_3 = 0$: passano per quel punto tre rette, una in più di quelle necessarie nel piano.
>> Le basi $\{x_1, x_2, s_1\}$, $\{x_1, x_2, s_2\}$, $\{x_1, x_2, s_3\}$ sono tutte non singolari e tutte danno lo stesso vertice $(2,2)$ (con una slack in base a valore $0$): sono le tre soluzioni base $A$, $B$, $C$.

---
## Slide 151 – Metodo del Simplesso: Degenerazione e Convergenza (3)

- La ***Regola di Bland*** stabilisce che per evitare la **degenerazione ciclante** è sufficiente scegliere tra le variabili candidate a entrare in base (i.e., $\mathbf{w}\mathbf{a}_j - c_j$ positivi) e quelle candidate a uscire dalla base (i.e., che soddisfano il criterio del rapporto minimo) quelle di indice minimo.
- Esistono metodo più complessi, ma più efficienti (i.e., mediamente richiedono un numero più ridotto di iterazioni), rispetto alla Regola di Blend, come la ***Regola Lessicografica***.
- Il metodo del simplesso, se implementa un metodo per evitare la degenerazione ciclante, nel caso peggiore deve generare tutte le possibili basi che sono un numero finito:

$$
\binom{n}{m} = \frac{n!}{m!\,(n-m)!}
$$

>> Il binomiale conta i modi di scegliere $m$ colonne (la base) tra le $n$ di $\mathbf{A}$: è un limite superiore, perché non tutte le scelte danno matrici non singolari o soluzioni ammissibili. Già con $n = 20$, $m = 10$ si ha $\binom{20}{10} = 184756$.
>> Senza cicli nessuna base può ripetersi (il valore di $z$ non peggiora mai e, con la regola anti-ciclo, non si torna a una base già vista), da cui la terminazione finita. In pratica il simplesso richiede molte meno iterazioni, anche se esistono esempi (Klee–Minty) con numero di iterazioni esponenziale.

---
## Slide 152 – Il Metodo del Simplesso Duale

- Il Simplesso Primale, ad ogni iterazione, soddisfa:
	- L'ammissibilità primale della soluzione: $\bar b_r \ge 0$ per ogni $r$;
	- Le Condizioni di Complementarietà.
- Il Metodo del Simplesso Duale, ad ogni iterazione, soddisfa:
	- L'ammissibilità duale della soluzione: $\mathbf{w}\mathbf{a}_j - c_j \le 0$ per ogni $j$;
	- Le Condizioni di Complementarietà.
- Le Condizioni di Complementarietà sono soddisfatte perché le variabili $x_j$ che sono in base hanno $\mathbf{w}\mathbf{a}_j - c_j = 0$, mentre quelle non in base hanno valore nullo ($x_j = 0$).

![[RO03-s152-1.png]]

$$
\begin{array}{c|c|ccccc|ccccc|c}
 & z & & & \mathbf{x_B} & & & & & \mathbf{x_N} & & & \text{RHS}\\ \hline
z & 1 & 0 & \dots & 0 & \dots & 0 & \mathbf{w}\mathbf{a}_{m+1} - c_{m+1} & \dots & \mathbf{w}\mathbf{a}_{m+j} - c_{m+j} & \dots & \mathbf{w}\mathbf{a}_n - c_n & \mathbf{c_B}\mathbf{B}^{-1}\mathbf{b}\\ \hline
 & 0 & 1 & \dots & 0 & \dots & 0 & y_1^{m+1} & \dots & y_1^j & \dots & y_1^n & \bar b_1\\
 & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots\\
\mathbf{x_B} & 0 & 0 & \dots & 1 & \dots & 0 & y_i^{m+1} & \dots & y_i^j & \dots & y_i^n & \bar b_i\\
 & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots\\
 & 0 & 0 & \dots & 0 & \dots & 1 & y_m^{m+1} & \dots & y_m^j & \dots & y_m^n & \bar b_m
\end{array}
$$

>> Idea: il simplesso primale parte da una base primale ammissibile e cerca l'ottimalità ($\mathbf{w}\mathbf{a}_j - c_j \le 0$); il duale fa il contrario: parte da una base "ottima" (duale ammissibile, cioè $\mathbf{w} = \mathbf{c_B}\mathbf{B}^{-1}$ ammissibile per il duale) ma primale non ammissibile, e cerca l'ammissibilità primale ($\bar{\mathbf{b}} \ge \mathbf{0}$).
>> È lo stesso tableau: cambia solo quale condizione si mantiene e quale si insegue. Quando entrambe valgono, per la complementarietà la soluzione è ottima.
>> È molto utile quando si aggiunge un vincolo o si modifica $\mathbf{b}$ a un problema già risolto: la base ottima resta duale ammissibile e si riparte da lì.

---
## Slide 153 – Il Metodo del Simplesso Duale (2)

- Quando applichiamo il Simplesso Duale dobbiamo avere che tutti vincoli duali siano soddisfatti, quindi che $\mathbf{w}\mathbf{a}_j - c_j \le 0$ per ogni $j$.
- Se tutte le variabili sono non negative la soluzione è OTTIMA.
- Se invece almeno una variabile in base ha valore negativo (i.e., esiste almeno un $r$ tale che $\bar b_r < 0$) allora dobbiamo farla diventare maggiore o uguale a zero.
- Se effettuiamo una operazione di pivoting sulla riga $r$ e su una qualche colonna $k$ tale che $y_r^k < 0$ allora nel nuovo tableau avremo $\bar b_r > 0$, perché $\bar b_r = \bar b_r / y_r^k > 0$).
- La colonna $k$ deve essere scelta in modo da conservare l'ammissibilità duale: $\mathbf{w}\mathbf{a}_j - c_j \le 0$ per ogni $j$.

>> Nell'uguaglianza $\bar b_r = \bar b_r / y_r^k$ il membro sinistro è il valore **dopo** il pivot (la riga $r$ viene divisa per il pivot): negativo diviso negativo dà un valore positivo, e la variabile $x_k$ entra in base con quel valore al posto di $x_{B_r}$, che esce.

---
## Slide 154 – Il Metodo del Simplesso Duale (3)

- Quando pivoteremo sulla riga $r$ e la colonna $k$ la riga 0 del tableau verrà aggiornata come segue:

$$
(\mathbf{w}\mathbf{a}_j - c_j) = (\mathbf{w}\mathbf{a}_j - c_j) - \frac{y_r^j}{y_r^k}(\mathbf{w}\mathbf{a}_k - c_k)
$$

- Per conservare l'ammissibilità duale abbiamo bisogno che:

$$
(\mathbf{w}\mathbf{a}_j - c_j) - \frac{y_r^j}{y_r^k}(\mathbf{w}\mathbf{a}_k - c_k) \le 0
$$

	Siccome $\frac{\mathbf{w}\mathbf{a}_k - c_k}{y_r^k} \ge 0$, se $y_r^j > 0$ avremo che il valore aggionato di $\mathbf{w}\mathbf{a}_j - c_j$ sarà sicuramente non positivo.

>> Il membro sinistro della prima formula è il valore aggiornato. Il segno di $\frac{\mathbf{w}\mathbf{a}_k - c_k}{y_r^k}$ viene da: numeratore $\le 0$ (ammissibilità duale corrente) e denominatore $< 0$ (pivot negativo).
>> Se $y_r^j > 0$ si sottrae da una quantità $\le 0$ la quantità $y_r^j \cdot \frac{\mathbf{w}\mathbf{a}_k - c_k}{y_r^k} \ge 0$: il risultato resta $\le 0$. Se $y_r^j = 0$ il costo ridotto non cambia. Il caso delicato è $y_r^j < 0$ (slide successiva).

---
## Slide 155 – Il Metodo del Simplesso Duale (4)

- Invece se $y_r^j < 0$ avremo bisogno di soddisfare il seguente vincolo:

$$
\frac{\mathbf{w}\mathbf{a}_k - c_k}{y_r^k} \le \frac{\mathbf{w}\mathbf{a}_j - c_j}{y_r^j}
$$

- Quindi per sceglire la colonna $k$ su cui pivotare dobbiamo usare il seguente criterio del rapporto minimo:

$$
\frac{\mathbf{w}\mathbf{a}_k - c_k}{y_r^k} = \min\left\{ \frac{\mathbf{w}\mathbf{a}_j - c_j}{y_r^j} : y_r^j < 0,\ j = 1, \dots, n \right\}
$$

>> Derivazione: si divide la disuguaglianza della slide precedente per $y_r^j < 0$, invertendo il verso: $\frac{\mathbf{w}\mathbf{a}_j - c_j}{y_r^j} - \frac{\mathbf{w}\mathbf{a}_k - c_k}{y_r^k} \ge 0$.
>> Tutti i rapporti considerati sono $\ge 0$ (numeratore $\le 0$, denominatore $< 0$). È il "gemello" del rapporto minimo primale: là si sceglie la **riga** che esce per non perdere $\bar{\mathbf{b}} \ge \mathbf{0}$, qui la **colonna** che entra per non perdere $\mathbf{w}\mathbf{a}_j - c_j \le 0$.

---
## Slide 156 – Algoritmo del Simplesso Duale

**Step1. Inizializzazione:**
	Sia $\mathbf{B}$ una base duale ammissibile: $\mathbf{w}\mathbf{a}_j - c_j = \mathbf{c_B}\mathbf{B}^{-1}\mathbf{a}_j - c_j \le 0$.

**Step3. Determinazione riga $r$:**
	$\bar b_r = \min\{\bar b_i : i = 1, \dots, m\}$.
	Se $\bar{\mathbf{b}} \ge \mathbf{0}$, allora STOP perché la soluzione è primale ammissibile e quindi *ottima*.

**Step4. Determinazione colonna $k$:**
	Applica il rapporto minimo:

$$
\frac{\mathbf{w}\mathbf{a}_k - c_k}{y_r^k} = \min\left\{ \frac{\mathbf{w}\mathbf{a}_j - c_j}{y_r^j} : y_r^j < 0,\ j = 1, \dots, n \right\}
$$

	Se $y_r^j \ge 0$, per ogni $j = 1, \dots, n$, allora STOP perché il duale è illimitato e la soluzione ammissibile del primale non esiste.

>> La numerazione degli step sulla slide (Step1, Step3, Step4, poi Step3 nella slide seguente) va letta come Step 1, 2, 3, 4: inizializzazione, scelta della riga, scelta della colonna, pivoting.
>> Scegliere la riga con $\bar b_r$ più negativo è una regola euristica: qualunque riga con $\bar b_r < 0$ andrebbe bene.
>> Perché il primale è inammissibile se $y_r^j \ge 0$ per ogni $j$: la riga $r$ dice $x_{B_r} + \sum_{j \in N} y_r^j x_j = \bar b_r < 0$, impossibile con $\mathbf{x} \ge \mathbf{0}$ (il membro sinistro sarebbe $\ge 0$).

---
## Slide 157 – Algoritmo del Simplesso Duale (2)

**Step3. Pivoting:**
	Svolgi un operazione di pivoting sull'elemento $(r, k)$.
	Ritorna allo Step 2.

**NOTE:**
- Il valore della funzione obiettivo $z = \mathbf{c_B}\mathbf{x_B} = \mathbf{c_B}\mathbf{B}^{-1}\mathbf{b}$ è un lower bound.
- Durante l'esecuzione del simplesso duale il valore della funzione obiettivo cresce in modo monotonico non decrescente, perchè:
	$\mathbf{c_B}\bar{\mathbf{b}} = \mathbf{c_B}\bar{\mathbf{b}} - \frac{\bar b_r}{y_r^k}(\mathbf{w}\mathbf{a}_k - c_k)$.

>> Lower bound: $\mathbf{w} = \mathbf{c_B}\mathbf{B}^{-1}$ è ammissibile per il duale e $\mathbf{c_B}\mathbf{B}^{-1}\mathbf{b} = \mathbf{w}\mathbf{b}$ è il suo valore; per la dualità debole $\mathbf{w}\mathbf{b} \le \mathbf{c}\mathbf{x}$ per ogni $\mathbf{x}$ primale ammissibile.
>> Monotonia (a sinistra il valore nuovo): $\frac{\bar b_r}{y_r^k} > 0$ (entrambi negativi) e $\mathbf{w}\mathbf{a}_k - c_k \le 0$, quindi il termine sottratto è $\le 0$ e il valore non diminuisce. Cresce strettamente se $\mathbf{w}\mathbf{a}_k - c_k < 0$ (caso non degenere per il duale).

---
## Slide 158 – Algoritmo del Simplesso Duale (3)

- Come possiamo gestire il caso in cui la base non sia duale ammissibile (i.e., esiste almeno un $j$ per cui $\mathbf{w}\mathbf{a}_j - c_j > 0$)?
- Possiamo aggiungere il seguente vincolo artificiale:

$$
\sum_{j \in N} x_j \le M \implies \sum_{j \in N} x_j + x_{n+1} = M
$$

	dove $N$ è l'insieme delle variabili non base ed $M$ è un valore positivo sufficientemente grande.
- Dopodiché si deve pivotare sulla colonna $k$ tale che:

$$
\mathbf{w}\mathbf{a}_k - c_k = \max\{\mathbf{w}\mathbf{a}_j - c_j : j \in N\}
$$

- Se al termine del simplesso duale $x_{n+1} > 0$ la soluzione è ottima, altrimenti se $x_{n+1} = 0$ la soluzione è illimitata.

>> Il pivot si fa sulla riga del nuovo vincolo, in cui tutti i coefficienti delle variabili non base valgono $1$: sottraendo alla riga 0 $(\mathbf{w}\mathbf{a}_k - c_k)$ volte questa riga, ogni costo ridotto diventa $(\mathbf{w}\mathbf{a}_j - c_j) - \max_{i \in N}(\mathbf{w}\mathbf{a}_i - c_i) \le 0$: la base diventa duale ammissibile.
>> Interpretazione dei casi finali: se il vincolo artificiale non è attivo ($x_{n+1} > 0$) non ha influito sull'ottimo; se è attivo, la soluzione "insegue" $M$ e il valore ottimo dipende da $M$, cioè il problema originale è illimitato.

---
## Slide 159 – Simplesso Duale: Esempio 1

Si consideri il problema:

$$
\begin{array}{rrrrcr}
\min z_P = & 2x_1 & +3x_2 & 4x_3 & & \\
\text{s.t.} & +x_1 & +2x_2 & +x_3 & \ge & +3\\
 & +2x_1 & -x_2 & +3x_3 & \ge & +4\\
 & x_1\ , & x_2\ , & x_3 & \ge & 0
\end{array}
$$

Aggiungendo le variabili di slack il problema è seguente:

$$
\begin{array}{rrrrrrcr}
\min z_P = & 2x_1 & +3x_2 & 4x_3 & & & & \\
\text{s.t.} & -x_1 & -2x_2 & -x_3 & +x_4 & & = & -3\\
 & -2x_1 & +x_2 & -3x_3 & & +x_5 & = & -4\\
 & x_1\ , & x_2\ , & x_3\ , & x_4\ , & x_5 & \ge & 0
\end{array}
$$

>> I vincoli $\ge$ sono stati moltiplicati per $-1$ prima di aggiungere le slack: così $x_4, x_5$ formano subito una base identità, primale non ammissibile ($x_4 = -3$, $x_5 = -4$) ma duale ammissibile perché $\mathbf{c} = (2, 3, 4) \ge \mathbf{0}$. È la situazione tipica in cui il simplesso duale evita la fase 1.

---
## Slide 160 – Simplesso Duale: Esempio 1

Il primo tableau è il seguente:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
-2 & -3 & -4 & 0 & 0 & 0\\ \hline
-1 & -2 & -1 & 1 & 0 & -3\\
-2 & 1 & -3 & 0 & 1 & -4\\ \hline
\end{array}
$$

La riga 0 contiene tutti valori $\mathbf{w}\mathbf{a}_j - c_j \le 0$, quindi la base corrispondente alle colonne di $x_4$ e $x_5$ è duale ammissibile e si può procedere:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
-2 & -3 & -4 & 0 & 0 & 0\\ \hline
-1 & -2 & -1 & 1 & 0 & -3\\
\boxed{-2} & 1 & -3 & 0 & 1 & -4\\ \hline
\end{array}
$$

>> Riga: $\min\{-3, -4\} = -4$ ⇒ riga 2 ($x_5$ esce). Colonna: tra i $y_2^j < 0$ (colonne $x_1$ e $x_3$) i rapporti sono $\frac{-2}{-2} = 1$ e $\frac{-4}{-3} = \frac{4}{3}$ ⇒ entra $x_1$.

---
## Slide 161 – Simplesso Duale: Esempio 1

Dopo la prima iterazione abbiamo:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & -4 & -1 & 0 & -1 & 4\\ \hline
0 & \boxed{-5/2} & 1/2 & 1 & -1/2 & -1\\
1 & -1/2 & 3/2 & 0 & -1/2 & 2\\ \hline
\end{array}
$$

Dopo la seconda iterazione:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & 0 & -9/5 & -8/5 & -1/5 & 28/5\\ \hline
0 & 1 & -1/5 & -2/5 & 1/5 & 2/5\\
1 & 0 & 7/5 & -1/5 & -2/5 & 11/5\\ \hline
\end{array}
$$

La soluzione ottima è $\mathbf{x}^* = \left(\frac{11}{5}, \frac{2}{5}, 0\right)$ e il suo costo $z_P^* = \frac{28}{5}$.

>> Seconda iterazione: l'unico $\bar b_i < 0$ è nella riga 1 ($-1$); tra i $y_1^j < 0$ i rapporti sono $\frac{-4}{-5/2} = \frac{8}{5}$ (per $x_2$) e $\frac{-1}{-1/2} = 2$ (per $x_5$) ⇒ entra $x_2$. Il valore dell'obiettivo sale da $4$ a $28/5$, come previsto dalla monotonia.
>> Verifica: $2\cdot\frac{11}{5} + 3\cdot\frac{2}{5} = \frac{28}{5}$. Dalla riga 0 sotto le slack ($-8/5$, $-1/5$) si legge anche, cambiando segno perché i vincoli sono stati moltiplicati per $-1$, la soluzione duale ottima del problema originale $\mathbf{w}^* = \left(\frac{8}{5}, \frac{1}{5}\right)$, e infatti $3\cdot\frac{8}{5} + 4\cdot\frac{1}{5} = \frac{28}{5}$ (dualità forte).

---
## Slide 162 – Simplesso Duale: Esempio 2

Si consideri il problema:

$$
\begin{array}{rrrcr}
\min z_P = & -x_1 & -6x_2 & & \\
\text{s.t.} & +x_1 & +x_2 & \ge & 2\\
 & +x_1 & +3x_2 & \le & 3\\
 & x_1\ , & x_2 & \ge & 0
\end{array}
$$

Aggiungendo le variabili di slack il problema è seguente:

$$
\begin{array}{rrrrrcr}
\min z_P = & -x_1 & -6x_2 & & & & \\
\text{s.t.} & -x_1 & -x_2 & +x_3 & & = & -2\\
 & +x_1 & +3x_2 & & +x_4 & = & 3\\
 & x_1\ , & x_2\ , & x_3\ , & x_4 & \ge & 0
\end{array}
$$

>> Qui $\mathbf{c}$ ha componenti negative, quindi la base delle slack ha costi ridotti $-c_j > 0$: non è duale ammissibile e serve il vincolo artificiale della slide 158.

---
## Slide 163 – Simplesso Duale: Esempio 2

Il primo tableau è il seguente:

$$
\begin{array}{cccc|c}
x_1 & x_2 & x_3 & x_4 & \\
1 & 6 & 0 & 0 & 0\\ \hline
-1 & -1 & 1 & 0 & -2\\
1 & 3 & 0 & 1 & 3\\ \hline
\end{array}
$$

La riga 0 contiene anche valori positivi, per cui la base corrispondente alle colonne di $x_3$ e $x_4$ non è duale ammissibile e si deve aggiungere il vincolo artificiale e pivotare su $(3, 2)$:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
1 & 6 & 0 & 0 & 0 & 0\\ \hline
-1 & -1 & 1 & 0 & 0 & -2\\
1 & 3 & 0 & 1 & 0 & 3\\
1 & \boxed{1} & 0 & 0 & 1 & M\\ \hline
\end{array}
$$

>> Il vincolo artificiale è $x_1 + x_2 + x_5 = M$ (le non base sono $x_1, x_2$; $x_5$ è la sua slack). Il pivot $(3,2)$ è nella riga 3 (il nuovo vincolo) e nella colonna di $x_2$, che ha il costo ridotto massimo ($6$).

---
## Slide 164 – Simplesso Duale: Esempio 2

Il pivotaggio permette di avere una base duale ammissibile:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
-5 & 0 & 0 & 0 & -6 & -6M\\ \hline
0 & 0 & 1 & 0 & 1 & -2+M\\
-2 & 0 & 0 & 1 & \boxed{-3} & 3-3M\\
1 & 1 & 0 & 0 & 1 & M\\ \hline
\end{array}
$$

Dopo il pivotaggio su $(2, 5)$ perché $3 - 3M < 0$:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
-1 & 0 & 0 & -2 & 0 & -6\\ \hline
\boxed{-2/3} & 0 & 1 & 1/3 & 0 & -1\\
2/3 & 0 & 0 & -1/3 & 1 & M-1\\
1/3 & 1 & 0 & 1/3 & 0 & 1\\ \hline
\end{array}
$$

>> Con $M$ grande, $-2 + M > 0$ e $3 - 3M < 0$: la riga da cui uscire è la 2. Tra i $y_2^j < 0$ i rapporti sono $\frac{-5}{-2} = \frac{5}{2}$ (per $x_1$) e $\frac{-6}{-3} = 2$ (per $x_5$) ⇒ entra $x_5$, come nella slide.
>> Il valore dell'obiettivo passa da $-6M$ a $-6$: il lower bound "dipendente da $M$" sparisce non appena il vincolo artificiale smette di essere attivo.

---
## Slide 165 – Simplesso Duale: Esempio 2

Dopo la seconda iterazione:

$$
\begin{array}{ccccc|c}
x_1 & x_2 & x_3 & x_4 & x_5 & \\
0 & 0 & -3/2 & -5/2 & 0 & -9/2\\ \hline
1 & 0 & -3/2 & -1/2 & 0 & 3/2\\
0 & 0 & 1 & 0 & 1 & M-2\\
0 & 1 & 1/2 & 1/2 & 0 & 1/2\\ \hline
\end{array}
$$

La soluzione ottima è $\mathbf{x}^* = \left(\frac{3}{2}, \frac{1}{2}\right)$ e il suo costo è $z_P^* = -\frac{9}{2}$.

Si noti che la variabile di scarto del vincolo artificiale è $x_5 = M - 2$.

>> Pivot: riga 1 ($\bar b_1 = -1$), unico $y_1^j < 0$ è quello di $x_1$ ($-2/3$) ⇒ entra $x_1$.
>> Poiché $x_5 = M - 2 > 0$, il vincolo artificiale non è attivo e per la regola della slide 158 la soluzione è ottima per il problema originale. Verifica: $x_1 + x_2 = 2$ e $x_1 + 3x_2 = 3$ (entrambi i vincoli attivi), $z_P = -\frac{3}{2} - 6\cdot\frac{1}{2} = -\frac{9}{2}$.

---
## Slide 166 – Riferimenti bibliografici

- M.S. Bazaraa, J.J. Jarvis, H.D. Sherali, "Linear Programming and Network Flows", Wiley.
- V. Chvátal, "Linear Programming", Freeman.
- L.A. Wolsey, "Integer Programming", Wiley.
- G. Cornuejols & R. Tütüncü, "Optimization Methods in Finance", Cambridge University Press.
- "AMPL: A Modeling Language for Mathematical Programming", scaricabile dal sito **www.ampl.com**.
- AMPL, versione limitata gratuita per studenti, scaricabile dal sito **www.ampl.com**.

---
## Riassunto

>> **Bound, euristici, metodi esatti**
>> - Problema di minimo: $z_{LB} \le z_P \le z_{UB}$; il lower bound viene da procedure di bounding (es. rilassamento continuo), l'upper bound da una soluzione ammissibile (euristico). Nel massimo i ruoli si scambiano.
>> - Knapsack 0–1: upper bound = rilassamento $LKP$, risolto ordinando per $p_i/w_i$ non crescente con un solo elemento critico frazionario ($O(n\log n)$); il greedy (salta gli oggetti che non entrano) dà un lower bound.
>> - Branch & Bound: a ogni nodo il nodo si pota se il bound non batte l'incumbent, si chiude se il rilassamento è intero, altrimenti si ramifica sull'elemento critico ($x_j = 0$ / $x_j = 1$).
>> - Programmazione dinamica: $z_j(w) = \max\{z_{j-1}(w),\ z_{j-1}(w - w_j) + p_j\}$ se $w \ge w_j$; complessità $O(nW)$, cioè **pseudopolinomiale**.
>>
>> **Programmazione lineare**
>> - $\min\{\mathbf{c}\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b},\ \mathbf{x} \ge \mathbf{0}\}$; assunzioni: proporzionalità, additività, dati deterministici, continuità.
>> - Casi possibili: ottimo unico, infiniti ottimi equivalenti, problema illimitato, problema inammissibile.
>> - Trasporti: la matrice dei vincoli è **totalmente unimodulare** (ogni minore vale $0, \pm 1$), quindi con $a_i, b_j$ interi i vertici sono interi. Con costi fissi servono binarie e vincoli $x_{ij} \le M_{ij} y_{ij}$: problema NP-hard.
>> - Manipolazioni: $\max \mathbf{c}\mathbf{x} = -\min(-\mathbf{c}\mathbf{x})$; slack/surplus per passare a uguaglianze; variabile libera $x_j = x_j^+ - x_j^-$. Forma **canonica** ($\ge$, utile per la dualità), forma **standard** ($=$, necessaria per il simplesso).
>>
>> **Soluzioni base e poliedri**
>> - Con $\mathbf{A} = [\mathbf{B}, \mathbf{N}]$ e rango $m$: soluzione base $\mathbf{x}_B = \mathbf{B}^{-1}\mathbf{b}$, $\mathbf{x}_N = \mathbf{0}$; ammissibile se $\mathbf{x}_B \ge \mathbf{0}$.
>> - Punti estremi del poliedro $=$ soluzioni base ammissibili, in numero finito (al più $\binom{n}{m}$).
>> - $\mathbf{d}$ è direzione sse $\mathbf{A}\mathbf{d} = \mathbf{0}$, $\mathbf{d} \ge \mathbf{0}$, $\mathbf{d} \ne \mathbf{0}$. Teorema della rappresentazione: $\mathbf{x} = \sum_i \lambda_i \mathbf{x}_i + \sum_j \mu_j \mathbf{d}_j$, con $\sum_i \lambda_i = 1$, $\lambda, \mu \ge 0$.
>> - Ottimo finito sse $\mathbf{c}\mathbf{d}_j \ge 0$ per ogni direzione estrema; in tal caso almeno un vertice è ottimo (**teorema fondamentale della PL**).
>>
>> **Simplesso primale**
>> - $z = \mathbf{w}\mathbf{b} - \sum_{k \in N}(\mathbf{w}\mathbf{a}_k - c_k)x_k$ con $\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1}$ (moltiplicatori del simplesso).
>> - **Costi ridotti** (convenzione del corso): $\mathbf{w}\mathbf{a}_j - c_j$. Ottimalità se $\mathbf{w}\mathbf{a}_j - c_j \le 0$ per ogni $j \in N$; altrimenti entra $k$ con $\mathbf{w}\mathbf{a}_k - c_k > 0$ (regola di Dantzig: il massimo).
>> - $\mathbf{y}^k = \mathbf{B}^{-1}\mathbf{a}_k$, $\mathbf{x}_B = \bar{\mathbf{b}} - \mathbf{y}^k x_k$. **Test del rapporto minimo**:
>> $$x_k = \frac{\bar b_r}{y_r^k} = \min\left\{\frac{\bar b_i}{y_i^k} : y_i^k > 0\right\}$$
>> esce $x_r$; se $\mathbf{y}^k \le \mathbf{0}$ il problema è illimitato.
>> - Base iniziale: slack se $\mathbf{A}\mathbf{x} \le \mathbf{b}$ con $\mathbf{b} \ge \mathbf{0}$; altrimenti variabili artificiali con **Big-M** ($\min \mathbf{c}\mathbf{x} + M\mathbf{1}\mathbf{x}_A$) o **due fasi** (fase 1: $\min \mathbf{1}\mathbf{x}_A$; $z_{P'} > 0 \Rightarrow$ $P$ inammissibile; $z_{P'} = 0$ con artificiale in base degenere $\Rightarrow$ pivot per estrarla o riga ridondante).
>> - Degenerazione ($\bar b_r = 0$): passo nullo, rischio di cicli; si evitano con la **regola di Bland** (indice minimo per entrante e uscente) o la regola lessicografica.
>>
>> **Dualità**
>> - Primale $\min\{\mathbf{c}\mathbf{x} : \mathbf{A}\mathbf{x} \ge \mathbf{b},\ \mathbf{x} \ge \mathbf{0}\}$, duale $\max\{\mathbf{w}\mathbf{b} : \mathbf{w}\mathbf{A} \le \mathbf{c},\ \mathbf{w} \ge \mathbf{0}\}$: le condizioni di ottimalità del primale sono l'ammissibilità del duale.
>> - **Dualità debole**: per ogni $\mathbf{x} \in X$, $\mathbf{w} \in W$: $\mathbf{w}\mathbf{b} \le \mathbf{w}\mathbf{A}\mathbf{x} \le \mathbf{c}\mathbf{x}$. Se $\mathbf{w}^*\mathbf{b} = \mathbf{c}\mathbf{x}^*$ entrambe sono ottime.
>> - **Dualità forte**: se $X \ne \emptyset$ e $W \ne \emptyset$ esistono ottimi con $\mathbf{w}^*\mathbf{b} = \mathbf{c}\mathbf{x}^*$, e $\mathbf{w}^* = \mathbf{c}_B\mathbf{B}^{-1}$ dalla base ottima.
>> - Casi: ottimo–ottimo; illimitato $\Rightarrow$ l'altro inammissibile; entrambi inammissibili è possibile.
>> - Tabella (primale min): vincolo $\ge$ / $=$ / $\le$ $\leftrightarrow$ $w_i \ge 0$ / libera / $w_i \le 0$; variabile $x_j \ge 0$ / libera / $x_j \le 0$ $\leftrightarrow$ vincolo duale $\le$ / $=$ / $\ge$.
>> - **Complementarietà**: $\mathbf{x}$, $\mathbf{w}$ ammissibili sono ottime sse
>> $$w_i(\mathbf{a}^i\mathbf{x} - b_i) = 0 \ \ \forall i, \qquad (c_j - \mathbf{w}\mathbf{a}_j)\,x_j = 0 \ \ \forall j$$
>> vincolo lasco $\Rightarrow w_i = 0$; $x_j > 0 \Rightarrow$ vincolo duale saturo.
>> - Interpretazione economica: $w_i^*$ è lo **shadow price** della risorsa $b_i$ (variazione di $z^*$ per unità di $b_i$, finché la base resta ottima).
>>
>> **Simplesso duale**
>> - Mantiene l'ammissibilità duale ($\mathbf{w}\mathbf{a}_j - c_j \le 0$) e la complementarietà, cercando $\bar{\mathbf{b}} \ge \mathbf{0}$.
>> - Esce la riga $r$ con $\bar b_r < 0$ (il più negativo); entra la colonna del rapporto minimo duale:
>> $$\frac{\mathbf{w}\mathbf{a}_k - c_k}{y_r^k} = \min\left\{\frac{\mathbf{w}\mathbf{a}_j - c_j}{y_r^j} : y_r^j < 0\right\}$$
>> se $y_r^j \ge 0$ per ogni $j$, il primale è inammissibile (duale illimitato).
>> - Il valore $\mathbf{c}_B\mathbf{B}^{-1}\mathbf{b}$ è un lower bound non decrescente. Se la base non è duale ammissibile si aggiunge $\sum_{j \in N} x_j \le M$ e si pivota sul massimo costo ridotto.
