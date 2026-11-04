# Set Covering Problem

---

## Slide 1

* Il Set Covering Problem (SCP) è il problema di coprire le righe di una matrice $A = (a_{ij})$ di dimensioni $m \times n$ con coefficienti 0 ed 1, con un sottoinsieme di colonne di costo minimo.
* Sia $x_j$ una variabile binaria 0-1 definita per ogni colonna come segue:
  $$x_j = \begin{cases} 1, & \text{se la colonna } j \text{ di costo } c_j \text{ è in soluzione} \\ 0, & \text{altrimenti} \end{cases}$$
* Una formulazione matematica per il problema SCP è la seguente:
  $$(SCP) \quad z_{SCP} = \min \sum_{j=1}^{n} c_j x_j$$
  $$s.t. \sum_{j=1}^{n} a_{ij} x_j \ge 1, \quad i = 1, ..., m$$
  $$x_j \in \{0, 1\}, \quad j = 1, ... n$$

---

## Slide 2: Esempio

* Si consideri il problema di Set Covering definito dai parametri che sono riassunti qui di seguito:
  * Il numero di colonne è pari a $n = 6$ e il numero di righe è $m = 3$.
  * Il vettore dei costi è $\mathbf{c} = [1 \quad 2 \quad 3 \quad 4 \quad 5 \quad 6]$.
  * La matrice dei vincoli è:
    $$A = \begin{bmatrix} 1 & 0 & 1 & 0 & 1 & 0 \\ 0 & 0 & 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 0 & 1 & 1 \end{bmatrix}$$
* In questo caso la soluzione ottima è $\mathbf{x}^* = [0 \quad 1 \quad 1 \quad 0 \quad 0 \quad 0]$, ossia include la colonna 2 e la colonna 3.
* Il costo della soluzione ottima è $z_{SCP}^* = 5$.

---

## Slide 3: Algoritmo Genetico per il Set Covering (Beasley and Chu, 1995)

* **Step 1.** Genera in modo casuale una popolazione di $N$ soluzioni iniziali.
* **Step 2.** **Seleziona due genitori**: seleziona due soluzioni $P_1$ e $P_2$.
* **Step 3.** **Crossover**: combina $P_1$ e $P_2$ per formare una nuova soluzione $C$.
* **Step 4.** **Mutazione**: modifica $k$ colonne di $C$ in modo casuale.
* **Step 5.** **Repair**: Rendi ammissibile la soluzione $C$.
* **Step 5.** Se la soluzione $C$ è già presente nella popolazione torna a Step 2.
* **Step 6.** Sostituisci una soluzione della popolazione con la soluzione $C$.
* **Step 7.** Se non è stato raggiunto il numero massimo di iterazioni, torna allo Step 2; altrimenti la soluzione è quella con il valore di fitness più piccolo.

---

## Slide 4

### Rappresentazione di una soluzione
* Una soluzione è rappresentata da una stringa binaria di $n$ bit, dove un valore a 1 del $j$-esimo bit indica che la colonna $j$ è in soluzione.

  $$ \begin{array}{cccccccc} 1 & 2 & 3 & 4 & 5 & \dots & n-1 & n \end{array} $$
  $$ \begin{array}{|c|c|c|c|c|c|c|c|} \hline 1 & 0 & 1 & 1 & 0 & \dots & 1 & 0 \\ \hline \end{array} $$

### Definizione della funzione di fitness
* La funzione di fitness $f_{P_k}$ di una soluzione $P_k$ è data da:
  $$f_{P_k} = \sum_{j=1}^{n} c_j s_{ij}$$
  dove $s_{ij}$ è il valore del $j$-esimo bit nella stringa corrispondete alla soluzione $P_k$.

---

## Slide 5: Selezione dei genitori

* La tecnica utilizzata per selezionare i genitori è la **binary tournament selection**.
* Dalla popolazione vengono selezionati in modo casuale due gruppi di soluzioni di una cardinalità prestabilita. Poi, a turno, vengono estratte due soluzioni $P_1$ e $P_2$ con fitness migliore.
* Esistono molte altre tecniche per selezionare i genitori da utilizzare nel crossover.
* Cosa proporreste come criterio di selezione?

---

## Slide 6: Operazione di crossover

* Viene utilizzato un operatore di crossover, chiamato **fusion crossover**, che tiene conto sia della struttura sia della fitness delle soluzioni del parent set.
* L'operatore di crossover produce, a differenza degli operatori classici, una sola soluzione.
* Siano $f_{P_1}$ e $f_{P_2}$ i valori di fitness delle soluzioni $P_1$ e $P_2$ e sia $C$ la nuova soluzione costruita come segue, per ogni $i = 1, ..., n$:
  1) Se $P_1[i] = P_2[i]$, allora $C[i] = P_1[i] = P_2[i]$;
  2) Se $P_1[i] \neq P_2[i]$, allora
     a) $C[i] = P_1[i]$ con probabilità $p = f_{P_2} / (f_{P_1} + f_{P_2})$,
     b) $C[i] = P_2[i]$ con probabilità $1 - p$.

---

## Slide 7: Esempio di operazione di crossover

$$ \begin{array}{rccccccccl} & 1 & 2 & 3 & 4 & 5 & \dots & n-1 & n & \\ P_1 = & \begin{array}{|c|c|c|c|c|c|c|c|} \hline 1 & 0 & 0 & 1 & 0 & \dots & 0 & 0 \\ \hline \end{array} & & f_{P_1} \\ P_2 = & \begin{array}{|c|c|c|c|c|c|c|c|} \hline 1 & 1 & 1 & 1 & 0 & \dots & 0 & 0 \\ \hline \end{array} & & f_{P_2} \\ & & & & & \Downarrow & & & & \\ C = & \begin{array}{|c|c|c|c|c|c|c|c|} \hline 1 & 1 & 0 & 1 & 0 & \dots & 0 & 0 \\ \hline \end{array} & & F_C \end{array} $$

* Nel caso in cui $f_{P_1} = 4$ e $f_{P_2} = 6$, se $P_1[i] \neq P_2[i]$, la probabilità che $C[i] = P_1[i]$ è $p = \frac{6}{4+6} = 0.6$, mentre la probabilità che $C[i] = P_2[i]$ è $1 - p = 1 - 0.6 = 0.4$.

---

## Slide 8: Operazione di ammissibilità (Repair)

* La soluzione $C$ generata dopo l'applicazione dell'operatore di fusion crossover può risultare non ammissibile.
* Nel caso la soluzione $C$ non sia ammissibile possiamo applicare un operatore di ammissibilità per renderla ammissibile.
* Consideriamo i seguenti parametri:
  * $I$ = insieme di tutte le righe;
  * $J$ = insieme di tutte le colonne;
  * $\alpha_i$ = insieme delle colonne che coprono la riga $i \in I$;
  * $\beta_j$ = insieme delle righe coperte dalla colonna $j \in J$;
  * $S$ = insieme delle colonne in una soluzione;
  * $U$ = insieme delle righe non coperte dalla soluzione;
  * $w_i$ = numero di colonne che coprono la riga $i \in I$ in $S$.

---

## Slide 9: Algoritmo Operatore di Ammissibilità

* **Step 1.** Inizializza $w_i = |S \cap \alpha_i|, \forall i \in I$.
* **Step 2.** Inizializza $U = \{i : w_i = 0, \forall i \in I\}$.
* **Step 3.** Per ogni riga $i \in U$:
  a) Trova la prima colonna $j$ in $\alpha_i$ che minimizza $c_j / |U \cap \beta_j|$;
  b) Aggiungi $j$ a $S$ e poni $w_i = w_i + 1, \forall i \in \beta_j$, e $U = U \setminus \beta_j$.
* **Step 4.** Per ogni colonna $j \in S$, considerati per costo $c_j$ decrescente, se $w_i \ge 2, \forall i \in \beta_j$, poni $S = S \setminus \{j\}$ e $w_i = w_i - 1, \forall i \in \beta_j$.

---

## Slide 10: Aggiornamento della popolazione

* Dopo che una nuova soluzione $C$ è stata prodotta, la popolazione viene aggiornata rimuovendo dalla popolazione una soluzione scelta casualmente fra le soluzioni con valore di fitness inferiore al valore medio (below-average fitness) ed inserendo $C$ nella popolazione.
* Quali alternative potevano esserci?