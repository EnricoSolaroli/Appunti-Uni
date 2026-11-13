> Trascrizione della dispensa *Programmazione Lineare Intera – Esercizi* (Ver. 2.0), prof. M. A. Boschetti.
> I testi, i modelli, i tableau e i calcoli sono quelli delle slide. Le figure sono descritte a parole, con i vertici calcolati.
> Le parti segnate **(aggiunta mia)** non sono nelle slide: sono la soluzione di P2 (lasciata "per esercizio"), gli ottimi veri degli Esempi 3 e 4 e un'osservazione sul taglio della riga 3 dell'Esempio 2.

**Convenzione per i tableau**
- La prima riga (riga 0) contiene i costi ridotti e, nell'ultima colonna, **−z**.
- Le righe successive (riga 1, 2, …) sono i vincoli. L'ultima colonna è il termine noto $\bar b$.
- La colonna "Base" non è nelle slide: l'ho aggiunta per far vedere quale variabile è in base in ogni riga.

---
# Esempio 1: Branch and Bound e Tagli di Gomory
## Testo
- Un'azienda di fertilizzanti deve determinare il mix ottimale per la produzione oraria dei composti integratori **A** e **B**. Questi richiedono le materie prime di base Nitrato di Ammonio (**N**) e Glicerina (**G**).
- Produrre 1 unità del composto A richiede 2 unità di N, mentre produrre 1 unità del composto B richiede 1 unità di N.
- Dalla produzione di 1 unità del composto A viene prodotta 1 unità di G, mentre la produzione del composto B ne consuma 3 unità.
- Ogni ora sono disponibili complessivamente 8 unità di N e 6 di G.
- Il numero di unità del composto A prodotte in un'ora non può superare le 4 unità.
- Il guadagno della vendita dei due integratori è uguale a 1 KEuro (cioè 1000 Euro) per unità, per entrambi i composti.

### a) Modello
*Scrivere un modello di programmazione lineare che permette di determinare il mix che massimizza il guadagno.*

Devo determinare quante unità del composto a e del composto b devo produrre, quindi ho bisogno di almeno due variabili.

Siano $x_1$ e $x_2$ (almeno 2 variabili, si parte da ciò che sappiamo ci serve alla fine) le variabili che rappresentano il numero di unità prodotte dei composti A e B, rispettivamente. 
Il modello è (voglio massimizzare il guadagno):
$$
\begin{aligned}
\max\ z_P =\ & +1x_1 + 1x_2 && \text{// Massimizza il guadagno}\\
\text{s.t.}\ & +2x_1 + 1x_2 \le 8 && \text{// Disponibilità di N}\\
& -1x_1 + 3x_2 \le 6 && \text{// Disponibilità di G}\\
& +1x_1 \le 4 && \text{// Limite di produzione per A}\\
& x_1,\ x_2 \ge 0 && \text{// Vincoli di non negatività}
\end{aligned}
$$
Si noti che la disponibilità di G aumenta di 1 unità per ogni unità di composto A che verrà prodotta. Per questo $x_1$ ha coefficiente $-1$ nel vincolo di G.

### b) Simplesso (metodo delle 2 fasi + regola di Bland)
*Risolvere il problema con l'algoritmo del simplesso, utilizzando il metodo delle 2 fasi e la regola di Bland.* 

**degenerazione** -> una variabile in base è in base con valore 0, il rischio in cui potrei incorrere è che potrei avere degenerazione ciclante, perchè quando uscirà dalla base, chi entra ha sempre valore 0, quindi il valore della base non cambia. 
Se le variabili in base hanno valore  > 0 questo non può accadere.)

- Il problema è di massimo, per cui è necessario trasformarlo in un problema di minimo cambiando il segno dei costi nella funzione obiettivo.
- Aggiungendo anche le variabili di slack si ha:

$$
\begin{aligned}
\min\ z_P =\ & -x_1 - x_2\\
\text{s.t.}\ & +2x_1 + x_2 + x_3 = 8\\
& -x_1 + 3x_2 + x_4 = 6\\
& +x_1 + x_5 = 4\\
& x_1, x_2, x_3, x_4, x_5 \ge 0
\end{aligned}
$$

**Tableau iniziale**, ottenuto dal modello originale:

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $\bar b$ |
|---|---|---|---|---|---|---|
| (riga 0) | 1 | 1 | 0 | 0 | 0 | 0 |
| $x_3$ | **2** | 1 | 1 | 0 | 0 | 8 |
| $x_4$ | −1 | 3 | 0 | 1 | 0 | 6 |
| $x_5$ | 1 | 0 | 0 | 0 | 1 | 4 |

> Nota: Non è necessario svolgere la Fase 1, perché le slack $x_3, x_4, x_5$ formano già una base ammissibile (l'identità), non serve applicare la regola di bland, ma la applico perchè è stato richiesto.

Per la regola di Bland entra $x_1$, la variabile di indice minimo con costo ridotto positivo. Il rapporto minimo dà un pareggio tra $8/2 = 4$ (riga 1) e $4/1 = 4$ (riga 3). Bland sceglie la riga 1, perché in base c'è $x_3$, che ha indice minore di $x_5$.

**Tableau dopo aver pivotato su (1,1):**

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $\bar b$ |
|---|---|---|---|---|---|---|
| (riga 0) | 0 | 1/2 | −1/2 | 0 | 0 | −4 |
| $x_1$ | 1 | 1/2 | 1/2 | 0 | 0 | 4 |
| $x_4$ | 0 | **7/2** | 1/2 | 1 | 0 | 10 |
| $x_5$ | 0 | −1/2 | −1/2 | 0 | 1 | 0 |
C'è ancora un costo positivo -> non è la soluzione ottima.
La variabile $x_5$ ora è diventata degenere, perchè è in base con valore 0, quindi è necessario applicare la regola di bland.

Ora entra $x_2$. Il rapporto minimo è calcolato solo sulle righe con $y_{i2} > 0$:
- riga 1: $4 / (1/2) = 8$;
- riga 2: $10 / (7/2) = 20/7$.

Il minimo è sulla riga 2, quindi il pivot è (2,2).

**Tableau dopo aver pivotato su (2,2):**

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $\bar b$ |
|---|---|---|---|---|---|---|
| (riga 0) | 0 | 0 | −4/7 | −1/7 | 0 | −38/7 |
| $x_1$ | 1 | 0 | 3/7 | −1/7 | 0 | 18/7 |
| $x_2$ | 0 | 1 | 1/7 | 2/7 | 0 | 20/7 |
| $x_5$ | 0 | 0 | −3/7 | 1/7 | 1 | 10/7 |

**Tableau ottimo Fase 2:** è lo stesso di sopra. Tutti i costi ridotti sono $\le 0$.

La soluzione del rilassamento continuo (senza vincoli di interezza) è quindi $x_1 = \dfrac{18}{7}$ e $x_2 = \dfrac{20}{7}$.

Il suo costo è $z_P = \dfrac{38}{7}$. Nel tableau otteniamo $-\dfrac{38}{7}$ perché avevamo invertito i segni dei costi nella funzione obiettivo quando avevamo trasformato il problema di massimo in un problema di minimo.

### c) Regione ammissibile
*Disegnare la regione ammissibile.*

**Figura (descrizione).** La regione è un quadrilatero nel primo quadrante con vertici:
![[Pasted image 20261110114252.png]]

Disegno le varie rette dei vincoli ($2x_1 + x_2 = 8$, $-x_1 + 3x_2 = 6$ e $x_1 = 4$). Prendo le varie aree tracciate dalle rette. C è il punto ottimo trovato. 
Se la soluzione deve essere intera, C non va più bene.

| Vertice | Coordinate | Vincoli attivi |
|---|---|---|
| A | $(0,0)$ | $x_1 = 0,\ x_2 = 0$ |
| B | $(4,0)$ | $2x_1 + x_2 = 8$, $x_1 = 4$, $x_2 = 0$ |
| C | $(18/7,\ 20/7) \approx (2.57,\ 2.86)$ | $2x_1 + x_2 = 8$, $-x_1 + 3x_2 = 6$ |
| D | $(0,\ 2)$ | $-x_1 + 3x_2 = 6$, $x_1 = 0$ |

Il simplesso percorre A → B → C. L'ottimo è C.

> *Nota*: La soluzione dopo il primo pivot è associata ad una **base degenere** (vertice B). Infatti la variabile di slack $x_5$ è in base con valore 0. Si può notare che nel vertice B il vincolo $x_1 \le 4$ è "attivo" ma "ridondante": la retta $x_1 = 4$ passa proprio per B, che è già determinato dagli altri due vincoli.

Se ora aggiungiamo i vincoli di interezza, la soluzione C non va più bene.

### d) Branch and Bound
*Si aggiunga il vincolo di interezza sulle variabili $x_1$ e $x_2$. 
Risolvere il problema mediante il metodo branch and bound.*
- *Si deve risolvere ogni nodo "graficamente", indicando la regione ammissibile e la soluzione ottima.*
- *Per il branching si deve selezionare la variabile frazionaria di indice minimo e sviluppare il nodo relativo al problema più promettente.*
- *Si disegni l'albero decisionale sviluppato, indicando per ciascun nodo il valore del bound e la soluzione ottenuta.*
- *Risolvere i nodi del Branch and Bound (prima risolti graficamente) con il Simplesso.*

Il branching deve essere svolto sulla variabile frazionaria di indice minimo, che nel nostro caso è $x_1 = \dfrac{18}{7} = 2,..$. 
I nodi generati sono:
- **P1**: problema associato al taglio $x_1 \le 2$;
- **P2**: problema associato al taglio $x_1 \ge 3$.

![[Pasted image 20261110115436.png]]

Se applicando il branch and bound, il nodo rimane valido c'è un errore. La regione ammissibile è quella a sinistra di x1=2. Poi traccio la retta x1=3 e la regione ammissibile è quella a destra. Quindi rimane solo il triangolo 

La soluzione in P1 = (2, 8/3) è ancora frazionaria, invece la soluzione di P2 = (3, 2) è intera.

**Albero decisionale:**
![[Pasted image 20261110115708.png]]

- Il problema è di **massimo**, quindi il rilassamento dà un **upper bound**. Poiché i costi sono interi, il bound si arrotonda **per difetto**, ⌊·⌋.
- **P1** (vincolo $x_1 \le 2$): ottimo $(2, 8/3)$ con $z = 14/3 \approx 4.67$, quindi $z_{UB} = 4$.
- **P2** (vincolo $x_1 \ge 3$): ottimo $(3, 2)$ con $z = 5$. Questa soluzione è già intera.

**Conclusione**
- P2 dà una soluzione intera di valore 5, uguale al bound di P0, quindi è ottima.
- P1 ha $z_{UB} = 4 < 5$, quindi anche se la soluzione è frazionaria e potrei continuare con branch and bound visto che ho già trovato il miglior lower bound, il ramo viene potato.
- **Ottimo intero:** $x_1 = 3,\ x_2 = 2$, con $z = 5$.

### e) P1 e P2 con il simplesso
*Risolvere i problemi P1 e P2 con l'algoritmo del simplesso.*
**Tableau ottimo per il nodo P0:**

| Base     | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $\bar b$ |
| -------- | ----- | ----- | ----- | ----- | ----- | -------- |
| (riga 0) | 0     | 0     | −4/7  | −1/7  | 0     | −38/7    |
| $x_1$    | 1     | 0     | 3/7   | −1/7  | 0     | 18/7     |
| $x_2$    | 0     | 1     | 1/7   | 2/7   | 0     | 20/7     |
| $x_5$    | 0     | 0     | −3/7  | 1/7   | 1     | 10/7     |

### P1: aggiunta del vincolo $x_1 \le 2$
Il vincolo diventa $x_1 + x_6 = 2$, con la nuova slack $x_6$.

**Tableau per risolvere P1 dopo aver aggiunto il vincolo $x_1 \le 2$:**

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $\bar b$ |
|---|---|---|---|---|---|---|---|
| (riga 0) | 0 | 0 | −4/7 | −1/7 | 0 | 0 | −38/7 |
| $x_1$ | 1 | 0 | 3/7 | −1/7 | 0 | 0 | 18/7 |
| $x_2$ | 0 | 1 | 1/7 | 2/7 | 0 | 0 | 20/7 |
| $x_5$ | 0 | 0 | −3/7 | 1/7 | 1 | 0 | 10/7 |
| $x_6$ | 1 | 0 | 0 | 0 | 0 | 1 | 2 |

La nuova riga ha un 1 nella colonna di $x_1$, che è in base. Per ripristinare la base si sottrae la riga di $x_1$ dalla nuova riga. $x_6$ è pronto per entrare in base. 

**Tableau dopo aver ripristinato la base:**

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $\bar b$ |
|---|---|---|---|---|---|---|---|
| (riga 0) | 0 | 0 | −4/7 | −1/7 | 0 | 0 | −38/7 |
| $x_1$ | 1 | 0 | 3/7 | −1/7 | 0 | 0 | 18/7 |
| $x_2$ | 0 | 1 | 1/7 | 2/7 | 0 | 0 | 20/7 |
| $x_5$ | 0 | 0 | −3/7 | 1/7 | 1 | 0 | 10/7 |
| $x_6$ | 0 | 0 | **−3/7** | 1/7 | 0 | 1 | −4/7 |

Il termine noto dell'ultima riga è negativo, quindi la base non è più ammissibile. I costi ridotti però sono ancora tutti $\le 0$, quindi si applica il simplesso duale.

**Simplesso duale**:
- esce $x_6$, che ha $\bar b = -4/7 < 0$;
- entra la variabile con coefficiente negativo nella riga e rapporto minimo. I candidati sono $x_3$ con $(-4/7)/(-3/7) = 4/3$ e $x_4$, che ha coefficiente positivo e quindi non è candidato.

Entra $x_3$. Nella numerazione delle slide è il pivot **(5,3)**.

**Tableau dopo aver pivotato su (5,3):**

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $\bar b$ |
|---|---|---|---|---|---|---|---|
| (riga 0) | 0 | 0 | 0 | −1/3 | 0 | −4/3 | −14/3 |
| $x_1$ | 1 | 0 | 0 | 0 | 0 | 1 | 2 |
| $x_2$ | 0 | 1 | 0 | 1/3 | 0 | 1/3 | 8/3 |
| $x_5$ | 0 | 0 | 0 | 0 | 1 | −1 | 2 |
| $x_3$ | 0 | 0 | 1 | −1/3 | 0 | −7/3 | 4/3 |

**Tableau ottimo:** è quello sopra. I costi ridotti sono tutti $\le 0$ e i termini noti sono tutti $\ge 0$. Ho trovato la soluzione ottima di P1. 

La soluzione è quindi $x_1 = 2$ e $x_2 = \dfrac{8}{3}$.

Il suo costo è $z_P = \dfrac{14}{3}$. Nel tableau otteniamo $-\dfrac{14}{3}$ perché avevamo invertito i segni dei costi nella funzione obiettivo quando avevamo trasformato il problema di massimo in un problema di minimo.

*Per esercizio risolvere P2.*

### P2: aggiunta del vincolo $x_1 \ge 3$ — (aggiunta mia)

Il vincolo $x_1 \ge 3$ si scrive come $-x_1 \le -3$, cioè $-x_1 + x_6 = -3$. Per ripristinare la base si **somma** la riga di $x_1$:

$$
(-1,0,0,0,0,1 \mid -3) + (1,0,\tfrac37,-\tfrac17,0,0 \mid \tfrac{18}{7}) = (0,0,\tfrac37,-\tfrac17,0,1 \mid -\tfrac37)
$$

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $\bar b$ |
|---|---|---|---|---|---|---|---|
| (riga 0) | 0 | 0 | −4/7 | −1/7 | 0 | 0 | −38/7 |
| $x_1$ | 1 | 0 | 3/7 | −1/7 | 0 | 0 | 18/7 |
| $x_2$ | 0 | 1 | 1/7 | 2/7 | 0 | 0 | 20/7 |
| $x_5$ | 0 | 0 | −3/7 | 1/7 | 1 | 0 | 10/7 |
| $x_6$ | 0 | 0 | 3/7 | **−1/7** | 0 | 1 | −3/7 |

Simplesso duale:
- esce $x_6$;
- l'unico coefficiente negativo nella sua riga è quello di $x_4$ ($-1/7$), quindi entra $x_4$. Il pivot è sulla riga di $x_6$, colonna $x_4$.

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $\bar b$ |
|---|---|---|---|---|---|---|---|
| (riga 0) | 0 | 0 | −1 | 0 | 0 | −1 | −5 |
| $x_1$ | 1 | 0 | 0 | 0 | 0 | −1 | 3 |
| $x_2$ | 0 | 1 | 1 | 0 | 0 | 2 | 2 |
| $x_5$ | 0 | 0 | 0 | 0 | 1 | 1 | 1 |
| $x_4$ | 0 | 0 | −3 | 1 | 0 | −7 | 3 |

Il tableau è ottimo: $x_1 = 3$, $x_2 = 2$, $z_P = 5$. La soluzione è intera, quindi P2 non va ramificato ulteriormente. È l'ottimo del problema intero.

### f) Taglio di Gomory
*Aggiungere un Taglio di Gomory e riottimizzare (aggiungo il taglio nel tableau e trovo la nuova soluzione ottima).*

Si parte dal **tableau ottimo per il nodo P0** (vedi sopra) e si usa la riga di $x_1$:

$$
x_1 + \tfrac37 x_3 - \tfrac17 x_4 = \tfrac{18}{7}
$$

Nei tagli di Gomory, le parti frazionarie dei coefficienti (sia per le variabili in base che per quelle non in base) devono sempre essere **maggiori o uguali a zero e minori di 1** ($0 \le f < 1$).

La regola matematica generale per calcolare la parte frazionaria $F(x)$ è sottrarre dal numero l'intero più grande che sia minore o uguale ad esso: $F(x) = x - \lfloor x \rfloor$.

A livello pratico e operativo per i calcoli, l'appunto si divide in questi tre casi:
- **Frazione positiva tra 0 e 1:** Si prende il valore esattamente così com'è.
    - $F(3/7) = 3/7$
- **Frazione negativa:** Si deve rendere il valore positivo aggiungendo l'intero successivo (nel caso di valori compresi tra 0 e -1, si aggiunge 1, calcolando di fatto $1 + x$).
    - $F(-1/7) = 1 - 1/7 = 6/7$
- **Frazione positiva maggiore di 1:** Si elimina la parte intera e si mantiene esclusivamente il resto (ovvero la frazione vera e propria). Poiché $18/7$ equivale a $2$ con il resto di $4/7$, si sottrae l'intero $2$.
    - $F(18/7) = 18/7 - 2 = 4/7$

Il taglio di Gomory è $\sum F(y_{ij})x_j \ge F(\bar b_i)$, che scritto come $\le$ diventa:

$$
-\tfrac37 x_3 - \tfrac67 x_4 \le -\tfrac47
$$

Con la nuova slack $x_6$ si ottiene la riga $(0,0,-\tfrac37,-\tfrac67,0,1 \mid -\tfrac47)$.

**Tableau dopo aver aggiunto il Taglio di Gomory $-\tfrac37 x_3 - \tfrac67 x_4 \le -\tfrac47$:**

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $\bar b$ |
|---|---|---|---|---|---|---|---|
| (riga 0) | 0 | 0 | −4/7 | −1/7 | 0 | 0 | −38/7 |
| $x_1$ | 1 | 0 | 3/7 | −1/7 | 0 | 0 | 18/7 |
| $x_2$ | 0 | 1 | 1/7 | 2/7 | 0 | 0 | 20/7 |
| $x_5$ | 0 | 0 | −3/7 | 1/7 | 1 | 0 | 10/7 |
| $x_6$ | 0 | 0 | −3/7 | **−6/7** | 0 | 1 | −4/7 |
Si applica il simplesso duale. Esce $x_6$. I rapporti $|c_j / y_{ij}|$ dei candidati sono:
- $x_3$: $(4/7)/(3/7) = 4/3$;
- $x_4$: $(1/7)/(6/7) = 1/6$.

Il minimo è quello di $x_4$, quindi entra $x_4$: pivot **(5,4)**.

**Tableau dopo aver pivotato su (5,4):**

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $x_6$ | $\bar b$ |
|---|---|---|---|---|---|---|---|
| (riga 0) | 0 | 0 | −1/2 | 0 | 0 | −1/6 | −16/3 |
| $x_1$ | 1 | 0 | 1/2 | 0 | 0 | −1/6 | 8/3 |
| $x_2$ | 0 | 1 | 0 | 0 | 0 | 1/3 | 8/3 |
| $x_5$ | 0 | 0 | −1/2 | 0 | 1 | 1/6 | 4/3 |
| $x_4$ | 0 | 0 | 1/2 | 1 | 0 | −7/6 | 2/3 |

**Tableau ottimo:** è quello sopra (costi $\le 0$ e termini noti positivi).

La soluzione è quindi $x_1 = \dfrac83$ e $x_2 = \dfrac83$.

Il suo costo è $z_P = \dfrac{16}{3}$. Nel tableau otteniamo $-\dfrac{16}{3}$ perché avevamo invertito i segni dei costi nella funzione obiettivo quando avevamo trasformato il problema di massimo in un problema di minimo.

>I tagli di Gomory non ci consentono quasi mai di arrivare subito alla soluzione intera, per farlo bisogna aggiungere nuove condizioni.

### g) Disegno del taglio
*Vogliamo disegnare il Taglio di Gomory per vedere il suo impatto sulla regione ammissibile.*

Dobbiamo riscrivere il taglio in funzione di $x_1$ e $x_2$, sostituendo $x_3$ e $x_4$ con le equazioni ottenute dai vincoli del problema originale:

- $2x_1 + x_2 + x_3 = 8 \implies x_3 = 8 - 2x_1 - x_2$
- $-x_1 + 3x_2 + x_4 = 6 \implies x_4 = 6 + x_1 - 3x_2$

Quindi il Taglio di Gomory diventa:

$$
-\tfrac37 x_3 - \tfrac67 x_4 \le -\tfrac47
\implies
-\tfrac37(8 - 2x_1 - x_2) - \tfrac67(6 + x_1 - 3x_2) \le -\tfrac47
$$

$$
-\tfrac{24}{7} + \tfrac67 x_1 + \tfrac37 x_2 - \tfrac{36}{7} - \tfrac67 x_1 + \tfrac{18}{7} x_2 \le -\tfrac47
\implies
x_2 \le \tfrac83
$$

![[Pasted image 20261110121528.png]]

**Figura (descrizione):**
- Si vede la regione dell'Esempio 1 (vertici A, B, C) con i punti interi segnati.
- La retta orizzontale tratteggiata $x_2 = 8/3$ taglia via la punta in cui sta C $= (18/7, 20/7)$.
- Nessun punto intero viene escluso.
- Il nuovo ottimo è $(8/3, 8/3)$, dove la retta del taglio incontra $2x_1 + x_2 = 8$.
- Il taglio mi ha permesso di eliminare una parte della soluzione frazionaria.
---
# Esempio 2: Branch and Bound e Tagli di Gomory

## Testo
Si consideri il problema di programmazione lineare:
$$
\begin{aligned}
\min\ z_P =\ & -x_1 - x_2\\
\text{s.t.}\ & 3x_1 + 2x_2 \le 12\\
& -2x_1 + 3x_2 \le 3\\
& x_1 \ge 1\\
& x_1,\ x_2 \ge 0
\end{aligned}
$$

Le variabili di scarto sono:
- $x_3$ per il primo vincolo;
- $x_4$ per il secondo;
- $x_5$ per $x_1 \ge 1$ (surplus: $x_1 - x_5 = 1$).

Risolvendo con il Metodo del Simplesso, il **tableau ottimo** è:

| Base | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ | $\bar b$ |
|---|---|---|---|---|---|---|
| (riga 0) | 0 | 0 | −5/13 | −1/13 | 0 | −63/13 |
| $x_5$ (riga 1) | 0 | 0 | 3/13 | −2/13 | 1 | 17/13 |
| $x_2$ (riga 2) | 0 | 1 | 2/13 | 3/13 | 0 | 33/13 |
| $x_1$ (riga 3) | 1 | 0 | 3/13 | −2/13 | 0 | 30/13 |
Le variabili in base sono: $x_1$, $x_2$ e $x_5$.

### a) Regione ammissibile
*Disegnare la regione ammissibile.*

**Figura (descrizione).** La regione è un quadrilatero con vertici:
![[Pasted image 20261110121754.png]]

| Coordinate | Vincoli attivi |
|---|---|
| $(1,\ 0)$ | $x_1 = 1$, $x_2 = 0$ |
| $(4,\ 0)$ | $3x_1 + 2x_2 = 12$, $x_2 = 0$ |
| $(30/13,\ 33/13) \approx (2.31,\ 2.54)$ — punto D, ottimo | $3x_1 + 2x_2 = 12$, $-2x_1 + 3x_2 = 3$ |
| $(1,\ 5/3)$ — punto C | $x_1 = 1$, $-2x_1 + 3x_2 = 3$ |
Nella figura sono segnati anche i punti interi.

### b) Tagli di Gomory
*Si aggiunga il vincolo di interezza sulle variabili $x_1$ e $x_2$. Determinare un Taglio di Gomory e disegnare la nuova regione ammissibile.*

- Siccome i termini noti e i coefficienti dei vincoli sono interi, anche le variabili di scarto devono essere intere.
- Per cui possiamo determinare un Taglio di Gomory anche dalla **riga 1**, in cui è in base la variabile di scarto $x_5$.

Per disegnare ogni taglio servono le sostituzioni ottenute dai vincoli del problema originale:

- $3x_1 + 2x_2 + x_3 = 12 \implies x_3 = 12 - 3x_1 - 2x_2$
- $-2x_1 + 3x_2 + x_4 = 3 \implies x_4 = 3 + 2x_1 - 3x_2$

#### Taglio dalla Riga 1
![[Pasted image 20261110122158.png]]
Le parti frazionarie della riga 1 sono:
- $F(3/13) = 3/13$;
- $F(-2/13) = 11/13$;
- $F(17/13) = 4/13$.

Il Taglio di Gomory relativo alla Riga 1 è:
$$
-\tfrac{3}{13}x_3 - \tfrac{11}{13}x_4 \le -\tfrac{4}{13}
$$
Sostituendo:
$$
-\tfrac{3}{13}(12 - 3x_1 - 2x_2) - \tfrac{11}{13}(3 + 2x_1 - 3x_2) \le -\tfrac{4}{13}
$$

$$
-\tfrac{36}{13} + \tfrac{9}{13}x_1 + \tfrac{6}{13}x_2 - \tfrac{33}{13} - \tfrac{22}{13}x_1 + \tfrac{33}{13}x_2 \le -\tfrac{4}{13}
$$

$$
-\tfrac{13}{13}x_1 + \tfrac{39}{13}x_2 \le \tfrac{65}{13} \implies -x_1 + 3x_2 \le 5
$$

**Figura (descrizione).** 
![[Pasted image 20261110122528.png]]
Per disegnare faccio la retta -x1+3x2=5 e capisco dove sta l'origine. La nuova regione ammissibile è quella di prima, tagliata dalla retta tratteggiata $-x_1 + 3x_2 = 5$. La retta passa per i punti interi $(1,2)$ e $(4,3)$ e taglia via il vertice D.

#### Taglio dalla Riga 2
![[Pasted image 20261110122549.png]]
Le parti frazionarie della riga 2 sono:
- $F(2/13) = 2/13$;
- $F(3/13) = 3/13$;
- $F(33/13) = 7/13$.

Il Taglio di Gomory relativo alla Riga 2 è:
$$
-\tfrac{2}{13}x_3 - \tfrac{3}{13}x_4 \le -\tfrac{7}{13}
$$
Sostituendo:
$$
-\tfrac{2}{13}(12 - 3x_1 - 2x_2) - \tfrac{3}{13}(3 + 2x_1 - 3x_2) \le -\tfrac{7}{13}
$$
$$
-\tfrac{24}{13} + \tfrac{6}{13}x_1 + \tfrac{4}{13}x_2 - \tfrac{9}{13} - \tfrac{6}{13}x_1 + \tfrac{9}{13}x_2 \le -\tfrac{7}{13}
$$
$$
0x_1 + \tfrac{13}{13}x_2 \le \tfrac{26}{13} \implies x_2 \le 2
$$

**Figura (descrizione).** 
![[Pasted image 20261110122621.png]]
La nuova regione ammissibile è tagliata dalla retta orizzontale $x_2 = 2$.
Questo taglio è il migliore da fare perché taglia molti punti frazionari dell'area ammissibile, purtroppo non posso sapere in anticipo qual è il taglio migliore.

#### Taglio dalla Riga 3
![[Pasted image 20261110122721.png]]
Il Taglio di Gomory relativo alla Riga 3, come riportato nella slide, è:

$$
-\tfrac{3}{13}x_3 - \tfrac{2}{13}x_4 \le -\tfrac{4}{13}
$$
Sostituendo:
$$
-\tfrac{3}{13}(12 - 3x_1 - 2x_2) - \tfrac{2}{13}(3 + 2x_1 - 3x_2) \le -\tfrac{4}{13}
$$
$$
-\tfrac{36}{13} + \tfrac{9}{13}x_1 + \tfrac{6}{13}x_2 - \tfrac{6}{13} - \tfrac{4}{13}x_1 + \tfrac{6}{13}x_2 \le -\tfrac{4}{13}
$$
$$
\tfrac{5}{13}x_1 + \tfrac{12}{13}x_2 \le \tfrac{38}{13} \implies 5x_1 + 12x_2 \le 38
$$

**Figura (descrizione).** 
![[Pasted image 20261110122743.png]]
La nuova regione ammissibile è tagliata dalla retta tratteggiata $5x_1 + 12x_2 = 38$.

> **Osservazione (aggiunta mia).**
> - Nella riga 3 il coefficiente di $x_4$ è $-2/13$. La sua parte frazionaria è $F(-2/13) = 1 - 2/13 = 11/13$, non $2/13$.
> - Con la regola delle parti frazionarie, il taglio dalla riga 3 sarebbe quindi $-\tfrac{3}{13}x_3 - \tfrac{11}{13}x_4 \le -\tfrac{4}{13}$. È lo stesso taglio della riga 1, cioè $-x_1 + 3x_2 \le 5$, e torna perché le righe 1 e 3 hanno la stessa parte frazionaria.
> - Il taglio scritto nella slide, $5x_1 + 12x_2 \le 38$, in questo esempio è comunque **valido**. Tutti i punti interi ammissibili lo rispettano, mentre l'ottimo continuo D lo viola, perché dà $5\cdot\tfrac{30}{13} + 12\cdot\tfrac{33}{13} = 42 > 38$.
> - All'esame conviene usare la regola $F(a) = a - \lfloor a \rfloor$.

### c) Branch and Bound
*Si aggiunga il vincolo di interezza sulle variabili $x_1$ e $x_2$. Risolvere il problema mediante il metodo branch and bound.*
- *Si deve risolvere ogni nodo "graficamente", indicando la regione ammissibile e la soluzione ottima.*
- *Per il branching si deve selezionare la variabile frazionaria di indice minimo e sviluppare il nodo relativo al problema più promettente.*
- *Si disegni l'albero decisionale sviluppato, indicando per ciascun nodo il valore del bound e la soluzione ottenuta.*
- *Risolvere per esercizio i nodi del Branch and Bound (prima risolti graficamente) con il Simplesso.*

**Soluzione.**
- La soluzione del rilassamento lineare determinata con il Metodo del Simplesso è $x_1 = \dfrac{30}{13}$ e $x_2 = \dfrac{33}{13}$. Il suo valore è $z = -\dfrac{63}{13} = -4.84$.
- Siccome i costi nella funzione obiettivo sono interi, per determinare il lower bound possiamo arrotondare per eccesso il valore di $z$, quindi $z_{LB} = -4$.
- Svolgiamo il branching sulla variabile frazionaria di indice minimo, che nel nostro caso è $x_1 = \dfrac{30}{13} = 2,...$ 
- I nodi generati sono:
  - **P1**: problema associato al taglio $x_1 \le \lfloor 30/13 \rfloor = 2$;
  - **P2**: problema associato al taglio $x_1 \ge \lceil 30/13 \rceil = 3$.

**Figura (descrizione).** 
![[Pasted image 20261110123058.png]]
Le regioni ammissibili di P1 e P2 sono le due strisce della regione originale:
- P1 è la striscia con $1 \le x_1 \le 2$;
- P2 è la striscia con $x_1 \ge 3$.

La fascia $2 < x_1 < 3$, che contiene D, viene eliminata.

- Risolvendo per via grafica **P1** si ottiene la soluzione $(2, \tfrac73)$, che ha valore $z = -\tfrac{13}{3} = -4.33$, per cui $z_{LB} = -4$.
- Risolvendo per via grafica **P2** si ottiene la soluzione $(3, \tfrac32)$, che ha valore $z = -\tfrac92 = -4.5$, per cui $z_{LB} = -4$.
- Se procediamo con il branching del nodo P1, che ha una sola variabile frazionaria $x_2 = \tfrac73 = 2,..$, generiamo i seguenti nodi:
  - **P3**: problema associato al taglio $x_2 \le \lfloor 7/3 \rfloor = 2$;
  - **P4**: problema associato al taglio $x_2 \ge \lceil 7/3 \rceil = 3$.

**Figura (descrizione).** 
![[Pasted image 20261110123247.png]]
La regione ammissibile di P3 è la striscia $1 \le x_1 \le 2$, limitata in alto da $x_2 \le 2$. Il suo ottimo è il punto intero $(2,2)$.

**Albero dopo aver risolto P3:**
![[Pasted image 20261110123338.png]]

- Il nodo P3 ha una soluzione intera di valore $-4$, quindi tutti i nodi ancora da esplorare con $z_{LB} \ge -4$ possono essere eliminati.
- Il nodo P4 ha come padre P1, che ha $z_{LB} = -4$. Anche P4 può quindi essere eliminato, perché non potrà permettere di trovare una soluzione migliore (cioè con un valore minore di $-4$), posso eliminarlo dall'heap anche senza esplorarlo.
- Il valore della soluzione intera permette di eliminare anche il nodo P2, a cui corrisponde $z_{LB} = -4$.
- Siccome sono esauriti i nodi/problemi attivi, la soluzione $x_1 = 2$ e $x_2 = 2$, di valore $z = -4$, è la **soluzione ottima** del problema.

> **(aggiunta mia)**
> - P4 sarebbe comunque inammissibile: con $x_1 \le 2$, il vincolo $-2x_1 + 3x_2 \le 3$ dà $x_2 \le 7/3 < 3$.
> - Anche $(3,1)$ ha valore $-4$: è un ottimo alternativo.

---
# Esempio 3: Rilassamento Lagrangiano
## Testo
Si consideri il problema:
$$
\begin{aligned}
\min\ z_P =\ & x_1 - 4x_2 - x_3\\
\text{s.t.}\ & x_1 - x_2 + 2x_3 \ge 1 && (1)\\
& 2x_1 - x_2 - x_3 \ge 1 && (2)\\
& x_1, x_2, x_3 \in \{0,1\}
\end{aligned}
$$

- Rilassare in modo Lagrangiano il vincolo (1) utilizzando la penalità Lagrangiana $\lambda \ge 0$.
- Svolgere la prima iterazione completa del metodo del subgradiente, partendo dalle seguenti penalità iniziali:
  - $\lambda = 0$;
  - $\lambda = 2$.

### Problema Lagrangiano
$$
\begin{aligned}
\min\ z_{LR} =\ & x_1 - 4x_2 - x_3 + \lambda(1 - x_1 + x_2 - 2x_3)\\
\text{s.t.}\ & 2x_1 - x_2 - x_3 \ge 1 && (2)\\
& x_1, x_2, x_3 \in \{0,1\}
\end{aligned}
$$

- Abbiamo rilassato un vincolo di $\ge$ e abbiamo scritto il subgradiente come $s = 1 - x_1 + x_2 - 2x_3$. Per questo le penalità $\lambda$ devono essere non negative, cioè $\lambda \ge 0$.
- Con la penalità positiva tutte le soluzioni non ammissibili (con valore negativo) possono essere ripulite ed eliminate(?).
- Per risolvere il Problema Lagrangiano in modo più comodo, conviene scriverlo come:
$$
\begin{aligned}
\min\ z_{LR} =\ & (1-\lambda)x_1 + (-4+\lambda)x_2 + (-1-2\lambda)x_3 + \lambda\\
\text{s.t.}\ & 2x_1 - x_2 - x_3 \ge 1 && (2)\\
& x_1, x_2, x_3 \in \{0,1\}
\end{aligned}
$$

#### Caso 1: $\lambda = 0$
$$
\begin{aligned}
\min\ z_{LR} =\ & 1x_1 - 4x_2 - x_3\\
\text{s.t.}\ & 2x_1 - x_2 - x_3 \ge 1 && (2)\\
& x_1, x_2, x_3 \in \{0,1\}
\end{aligned}
$$

Le possibili soluzioni sono:

| $x$ | Ammissibile per (2)? | $z_{LR}$ |
|---|---|---|
| (0, 0, 0) | no | — |
| (1, 0, 0) | sì | 1 |
| (0, 1, 0) | no | — |
| (0, 0, 1) | no | — |
| **(1, 1, 0)** | sì | **−3** ← soluzione di $z_{LR}(0)$ |
| (1, 0, 1) | sì | 0 |
| (0, 1, 1) | no | — |
| (1, 1, 1) | no | — |
Elenco tutte le possibilità e per ogni possibilità guardo se i vincoli sono soddisfatti.

- La soluzione del Problema Lagrangiano $z_{LR}(0)$ è $x = (1,1,0)$, che soddisfa il vincolo (2) non rilassato. Il suo valore è $z_{LR}(0) = -3$.
- Il subgradiente è $s = 1 - x_1 + x_2 - 2x_3 = 1 - 1 + 1 - 0 = 1$. Quindi il vincolo (1) è violato e la penalità $\lambda$ dovrà aumentare.
- La penalità Lagrangiana $\lambda$ può essere aggiornata come segue, dove $\theta > 0$ è scelta con uno dei criteri visti a lezione:
$$
\lambda = \max\{0,\ \lambda + \theta s\} = \max\{0,\ 0 + 1\theta\}
$$
#### Caso 2: $\lambda = 2$
$$
\begin{aligned}
\min\ z_{LR} =\ & -1x_1 - 2x_2 - 5x_3 + 2\\
\text{s.t.}\ & 2x_1 - x_2 - x_3 \ge 1 && (2)\\
& x_1, x_2, x_3 \in \{0,1\}
\end{aligned}
$$

Le possibili soluzioni sono:

| $x$           | Ammissibile per (2)? | $z_{LR}$                          |
| ------------- | -------------------- | --------------------------------- |
| (0, 0, 0)     | no                   | —                                 |
| (1, 0, 0)     | sì                   | 1                                 |
| (0, 1, 0)     | no                   | —                                 |
| (0, 0, 1)     | no                   | —                                 |
| (1, 1, 0)     | sì                   | −1                                |
| **(1, 0, 1)** | sì                   | **−4** ← soluzione di $z_{LR}(2)$ |
| (0, 1, 1)     | no                   | —                                 |
| (1, 1, 1)     | no                   | —                                 |

- La soluzione ottima del Problema Lagrangiano $z_{LR}(2)$ è $x = (1,0,1)$, che soddisfa il vincolo (2) non rilassato. Il suo valore è $z_{LR}(2) = -4$.
- Il subgradiente è $s = 1 - x_1 + x_2 - 2x_3 = 1 - 1 + 0 - 2 = -2$, per cui il vincolo (1) non è violato.
- La soluzione $x = (1,0,1)$ è ammissibile, ma la penalità Lagrangiana $\lambda$ è positiva. Per questo non possiamo dimostrare che sia ottima: la complementarietà $\lambda(1 - x_1 + x_2 - 2x_3) = 2\cdot(-2) \ne 0$ non vale.
- Si prosegue e si aggiorna la penalità Lagrangiana $\lambda$, che dovrà diminuire. Con $\theta > 0$ scelta con uno dei criteri visti a lezione:
$$
\lambda = \max\{0,\ \lambda + \theta s\} = \max\{0,\ 2 - 2\theta\}
$$

> **(aggiunta mia) Come va a finire.**
> - L'ottimo vero di $P$ è $x = (1,0,1)$ con $z_P = 0$. Le soluzioni che rispettano sia (1) sia (2) sono solo $(1,0,0)$, con valore 1, e $(1,0,1)$, con valore 0.
> - Il miglior bound Lagrangiano è $z_{LR} = -2$, ottenuto per $\lambda = 1$.
> - C'è quindi un **gap di dualità** pari a 2.
> - Attenzione: nella tabella del Caso 2 i valori sono di $z_{LR}(2)$, non di $z_P$. Per $(1,0,1)$ si ha $z_{LR}(2) = -4$, mentre $z_P = 0$; la differenza è la penalità $\lambda s = 2\cdot(-2) = -4$.

L'idea del lagrangiano è che finché non trovo soluzioni ammissibili aumento il valore della penalità per evitare di finire in soluzioni non ammissibili, quando invece trovo una soluzione ammissibile, abbasso al sua penalità per incentivare di arrivare in quella soluzione.

---
# Esempio 4: Rilassamento Lagrangiano
## Testo
Si consideri il problema:

$$
\begin{aligned}
\min\ z_P =\ & 2x_1 + 3x_2\\
\text{s.t.}\ & 2x_1 + x_2 \ge 2 && (1)\\
& x_1 + 3x_2 \ge 4 && (2)\\
& 0 \le x_1 \le 2 \quad \text{intero}\\
& 0 \le x_2 \le 2 \quad \text{intero}
\end{aligned}
$$

- Rilassare in modo Lagrangiano i vincoli (1) e (2) utilizzando le penalità $\lambda_1$ e $\lambda_2$, rispettivamente.
- Svolgere la prima iterazione completa del metodo del subgradiente, partendo dalle seguenti penalità iniziali:
  - $\lambda_1 = 0$ e $\lambda_2 = 0$;
  - $\lambda_1 = 1$ e $\lambda_2 = 1$.
(sottointeso che i lambda devono essere $\ge 0$)

## Problema Lagrangiano
$$
\begin{aligned}
\min\ z_{LR} =\ & 2x_1 + 3x_2 + \lambda_1(2 - 2x_1 - x_2) + \lambda_2(4 - x_1 - 3x_2)\\
\text{s.t.}\ & 0 \le x_1 \le 2 \ \text{intero}\\
& 0 \le x_2 \le 2 \ \text{intero}
\end{aligned}
$$
- Abbiamo rilassato dei vincoli di $\ge$ e abbiamo scritto il subgradiente come $s = (s_1, s_2)$, dove $s_1 = 2 - 2x_1 - x_2$ e $s_2 = 4 - x_1 - 3x_2$. Per questo le penalità $\lambda_1$ e $\lambda_2$ devono essere non negative, cioè $\lambda_1, \lambda_2 \ge 0$.
- Riscriviamo il Problema Lagrangiano come:

$$
\begin{aligned}
\min\ z_{LR} =\ & (2 - 2\lambda_1 - \lambda_2)x_1 + (3 - \lambda_1 - 3\lambda_2)x_2 + 2\lambda_1 + 4\lambda_2\\
\text{s.t.}\ & 0 \le x_1 \le 2 \ \text{intero}\\
& 0 \le x_2 \le 2 \ \text{intero}
\end{aligned}
$$
	così da poterlo leggere per colonne.
	
#### Caso 1: $\lambda_1 = 0$, $\lambda_2 = 0$
$$
\min\ z_{LR} = 2x_1 + 3x_2 \quad \text{s.t.}\ 0 \le x_1, x_2 \le 2 \ \text{interi}
$$

Le possibili soluzioni (tutte ammissibili per il problema Lagrangiano) sono:

*Sia $x_1$ che $x_2$ possono valere solo 0, 1 o 2, quindi di seguito tutte le possibili combinazioni*

| $x$        | $z_{LR}$                           |
| ---------- | ---------------------------------- |
| **(0, 0)** | **0** ← soluzione di $z_{LR}(0,0)$ |
| (1, 0)     | 2                                  |
| (2, 0)     | 4                                  |
| (0, 1)     | 3                                  |
| (1, 1)     | 5                                  |
| (2, 1)     | 7                                  |
| (0, 2)     | 6                                  |
| (1, 2)     | 8                                  |
| (2, 2)     | 10                                 |

- La soluzione del Problema Lagrangiano $z_{LR}(0,0)$ è $x = (0,0)$ e il suo valore è $z_{LR}(0,0) = 0$.
- Le componenti del subgradiente sono $s_1 = 2 - 2x_1 - x_2 = 2$ e $s_2 = 4 - x_1 - 3x_2 = 4$.
- I vincoli (1) e (2) sono violati, quindi le penalità $\lambda_1$ e $\lambda_2$ dovranno aumentare.
- Le penalità Lagrangiane possono essere aggiornate come segue, dove $\theta > 0$ è scelta con uno dei criteri visti a lezione:
$$
\lambda_1 = \max\{0,\ \lambda_1 + \theta s_1\} = \max\{0,\ 0 + 2\theta\}
$$
$$
\lambda_2 = \max\{0,\ \lambda_2 + \theta s_2\} = \max\{0,\ 0 + 4\theta\}
$$
$\theta$ è unico sia per x1, che per x2, perché è lo spostamento lungo il vettore del subgradiente.

#### Caso 2: $\lambda_1 = 1$, $\lambda_2 = 1$
$$
\min\ z_{LR} = -1x_1 - 1x_2 + 6 \quad \text{s.t.}\ 0 \le x_1, x_2 \le 2 \ \text{interi}
$$

Le possibili soluzioni sono:

| $x$ | $z_{LR}$ |
|---|---|
| (0, 0) | 6 |
| (1, 0) | 5 |
| (2, 0) | 4 |
| (0, 1) | 5 |
| (1, 1) | 4 |
| (2, 1) | 3 |
| (0, 2) | 4 |
| (1, 2) | 3 |
| **(2, 2)** | **2** ← soluzione di $z_{LR}(1,1)$ |

- La soluzione del Problema Lagrangiano $z_{LR}(1,1)$ è $x = (2,2)$ e il suo valore è $z_{LR}(1,1) = 2$.
- Le componenti del subgradiente sono $s_1 = 2 - 2x_1 - x_2 = -4$ e $s_2 = 4 - x_1 - 3x_2 = -4$.
- I vincoli (1) e (2) non sono violati, quindi la soluzione $x = (2,2)$ è ammissibile. Però le penalità Lagrangiane non sono nulle, e non possiamo dimostrare che la soluzione sia ottima.
- Si prosegue e si aggiornano le penalità $\lambda_1$ e $\lambda_2$, che dovranno diminuire. Con $\theta > 0$ scelta con uno dei criteri visti a lezione:

$$
\lambda_1 = \max\{0,\ \lambda_1 + \theta s_1\} = \max\{0,\ 1 - 4\theta\}
$$
$$
\lambda_2 = \max\{0,\ \lambda_2 + \theta s_2\} = \max\{0,\ 1 - 4\theta\}
$$

> **(aggiunta mia) Come va a finire.**
> - Tra i 9 punti, quelli che rispettano sia (1) sia (2) hanno valori: $(1,1) \to 5$, $(2,1) \to 7$, $(0,2) \to 6$, $(1,2) \to 8$, $(2,2) \to 10$.
> - L'ottimo vero è quindi $x = (1,1)$ con $z_P = 5$.
> - La soluzione $(2,2)$ trovata con $\lambda = (1,1)$ è ammissibile ma costa 10, molto più dell'ottimo. Questo conferma che un $x$ ammissibile con penalità non nulle **non** è garantito ottimo.

