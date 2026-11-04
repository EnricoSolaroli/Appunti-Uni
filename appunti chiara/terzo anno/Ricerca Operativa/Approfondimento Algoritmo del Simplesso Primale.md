# Spiegazione dettagliata
L'algoritmo del Simplesso Primale risolve problemi di Programmazione Lineare (PL) esplorando in modo efficiente i vertici (soluzioni di base) del poliedro che definisce la regione ammissibile, alla ricerca del punto in cui la funzione obiettivo raggiunge il suo valore ottimo.

Per comprendere la matematica sottostante ai 5 step, consideriamo il problema in forma standard (supponiamo di minimizzare):

  

$$\min z = \mathbf{c}^T\mathbf{x}$$

$$\text{soggetto a: } \mathbf{A}\mathbf{x} = \mathbf{b}, \quad \mathbf{x} \ge \mathbf{0}$$

La matrice dei vincoli $\mathbf{A}$ viene suddivisa in due componenti: una matrice quadrata e invertibile $\mathbf{B}$ (matrice di base) e la restante matrice $\mathbf{N}$ (matrice non di base). Coerentemente, scomponiamo le incognite $\mathbf{x} = [\mathbf{x}_B, \mathbf{x}_N]$ e i costi $\mathbf{c} = [\mathbf{c}_B, \mathbf{c}_N]$.

  

Il sistema dei vincoli $\mathbf{A}\mathbf{x} = \mathbf{b}$ diventa:

  

$$\mathbf{B}\mathbf{x}_B + \mathbf{N}\mathbf{x}_N = \mathbf{b}$$

Moltiplicando a sinistra per $\mathbf{B}^{-1}$, possiamo esprimere le variabili di base in funzione delle non-base:

  

$$\mathbf{x}_B = \mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{N}\mathbf{x}_N$$

Questa equazione è il "motore" di tutto l'algoritmo. Analizziamo i singoli step.

  

## Step 1: Inizializzazione

In una soluzione di base, per definizione, "spegniamo" le variabili non di base ponendole a zero ($\mathbf{x}_N = \mathbf{0}$). Sostituendo $\mathbf{0}$ nell'equazione motore, otteniamo i valori delle variabili di base:

  

$$\mathbf{x}_B = \mathbf{B}^{-1}\mathbf{b} = \mathbf{\bar{b}}$$

Affinché la soluzione sia _ammissibile_ (e non solo una soluzione matematica del sistema), deve rispettare i vincoli di non negatività. Quindi $\mathbf{\bar{b}} \ge \mathbf{0}$. Il valore attuale della funzione obiettivo $z$ si calcola ignorando $\mathbf{x}_N$ (che vale zero):

  

$$z = \mathbf{c}_B\mathbf{x}_B = \mathbf{c}_B\mathbf{B}^{-1}\mathbf{b}$$

## Step 2: Pricing (Costi Ridotti)

Questo step determina _se_ conviene far entrare una variabile $x_j$ (attualmente a zero) in base. Sostituiamo l'equazione motore all'interno della funzione obiettivo $z = \mathbf{c}_B\mathbf{x}_B + \mathbf{c}_N\mathbf{x}_N$:

  

$$z = \mathbf{c}_B(\mathbf{B}^{-1}\mathbf{b} - \mathbf{B}^{-1}\mathbf{N}\mathbf{x}_N) + \mathbf{c}_N\mathbf{x}_N$$

$$z = \mathbf{c}_B\mathbf{B}^{-1}\mathbf{b} - (\mathbf{c}_B\mathbf{B}^{-1}\mathbf{N} - \mathbf{c}_N)\mathbf{x}_N$$

Definiamo il vettore dei moltiplicatori del simplesso (o variabili duali) come $\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1}$. Guardiamo il coefficiente associato a una singola variabile non di base $x_j$:

  

$$z_{nuovo} = z_{attuale} - (\mathbf{w}\mathbf{a}_j - c_j)x_j$$

La quantità $\Delta_j = \mathbf{w}\mathbf{a}_j - c_j$ è il **costo ridotto** (spesso con segno invertito rispetto ad alcune notazioni standard). Poiché il nostro scopo è _minimizzare_ $z$, vogliamo che il termine $-(\mathbf{w}\mathbf{a}_j - c_j)$ sia negativo, il che significa che $\mathbf{w}\mathbf{a}_j - c_j$ deve essere **strettamente positivo**.

Scegliamo $\max \{\mathbf{w}\mathbf{a}_j - c_j\}$ per selezionare la variabile $x_k$ che offre il potenziale di miglioramento più ripido (il massimo gradiente di discesa per unità incrementale di $x_k$).

  

## Step 3: Condizioni di Ottimalità

Se per tutte le variabili non di base risulta $\mathbf{w}\mathbf{a}_j - c_j \le 0$, l'equazione di discesa ci dice che aumentare qualsiasi $x_j$ (che per i vincoli di segno può solo aumentare da $0$ in poi) farebbe aumentare il costo totale $z$ (o mantenerlo invariato).

Poiché nessuna direzione locale migliora la funzione obiettivo e il problema di programmazione lineare è convesso, l'ottimo locale appena trovato è garantito essere l'**ottimo globale**. L'algoritmo termina.

  

## Step 4: Direzione e Illimitatezza

Abbiamo deciso di aumentare $x_k$ mantenendo a zero le altre variabili non di base. L'equazione motore diventa:

  

$$\mathbf{x}_B = \mathbf{\bar{b}} - (\mathbf{B}^{-1}\mathbf{a}_k)x_k$$

Definendo $\mathbf{y}^k = \mathbf{B}^{-1}\mathbf{a}_k$, riscriviamo:

  

$$\mathbf{x}_B = \mathbf{\bar{b}} - \mathbf{y}^k x_k$$

Il vettore $\mathbf{y}^k$ rappresenta i tassi di sostituzione: ci dice di quanto le attuali variabili in base si ridurranno se aumentiamo $x_k$ di un'unità.

Se ogni componente del vettore è negativa o nulla ($\mathbf{y}^k \le \mathbf{0}$), significa che il termine $-\mathbf{y}^k x_k$ sarà $\ge \mathbf{0}$. Di conseguenza, all'aumentare di $x_k$, il vettore $\mathbf{x}_B$ non farà altro che crescere (o restare fermo). Nessun vincolo di non negatività $\mathbf{x}_B \ge 0$ verrebbe mai violato, permettendoci di far crescere $x_k \to \infty$ e portando il costo $z \to -\infty$. Il poliedro è aperto in quella direzione: il problema è **illimitato**.

## Step 5: Rapporto Minimo (Test di Ammissibilità)

Se invece almeno un elemento di $\mathbf{y}^k$ è positivo ($y_i^k > 0$), allora all'aumentare di $x_k$, la componente $x_{B_i}$ corrispondente tenderà a diminuire.

Dobbiamo garantire $\mathbf{x}_B \ge 0$ per restare nel poliedro, quindi:

  

$$\bar{b}_i - y_i^k x_k \ge 0 \implies x_k \le \frac{\bar{b}_i}{y_i^k} \quad (\text{per } y_i^k > 0)$$

Poiché questa disuguaglianza deve valere per _tutte_ le righe $i$, il massimo incremento che possiamo dare a $x_k$ è dettato dal vincolo più stringente (il collo di bottiglia):

  

$$x_k = \min \left\{ \frac{\bar{b}_i}{y_i^k} : y_i^k > 0 \right\}$$

La riga $r$ dove si verifica questo minimo identifica la variabile di base $x_r$ che per prima tocca lo zero. In questo momento ci troviamo su un nuovo vertice del poliedro: $x_k$ è entrata a far parte della base con valore strettamente positivo, mentre $x_r$ si è annullata, uscendo dalla base. Si aggiorna la matrice invertibile $\mathbf{B}$ scambiando le due colonne e si riavvia il ciclo.

# Esempio numerico
Risolviamo passo dopo passo un problema di programmazione lineare applicando rigorosamente i 5 step e la notazione matriciale.

  

Consideriamo il problema di minimizzazione in forma canonica:

  

$$\min z = -3x_1 - 2x_2$$

$$\text{soggetto a: } \begin{cases} x_1 + 2x_2 \le 4 \\ 3x_1 + x_2 \le 6 \end{cases}, \quad x_1, x_2 \ge 0$$

Introducendo le variabili di scarto $x_3, x_4 \ge 0$, otteniamo la **forma standard**:

  

$$\min z = -3x_1 - 2x_2 + 0x_3 + 0x_4$$

$$\begin{bmatrix} 1 & 2 & 1 & 0 \\ 3 & 1 & 0 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} 4 \\ 6 \end{bmatrix}, \quad \mathbf{x} \ge \mathbf{0}$$

Identifichiamo i vettori fondamentali:

  

$$\mathbf{c} = [-3, -2, 0, 0], \quad \mathbf{b} = \begin{bmatrix} 4 \\ 6 \end{bmatrix}, \quad \mathbf{a}_1 = \begin{bmatrix} 1 \\ 3 \end{bmatrix}, \; \mathbf{a}_2 = \begin{bmatrix} 2 \\ 1 \end{bmatrix}, \; \mathbf{a}_3 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \; \mathbf{a}_4 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

## Iterazione 1

### Step 1: Inizializzazione

Scegliamo le variabili di scarto come base iniziale: indici di base $B = (3, 4)$ e non-base $N = (1, 2)$.

  

$$\mathbf{B} = [\mathbf{a}_3, \mathbf{a}_4] = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \mathbf{I} \implies \mathbf{B}^{-1} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}$$

$$\mathbf{c}_B = [c_3, c_4] = [0, 0]$$

Calcoliamo i valori delle variabili di base e il costo:

  

$$\mathbf{\bar{b}} = \mathbf{B}^{-1}\mathbf{b} = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 4 \\ 6 \end{bmatrix} = \begin{bmatrix} 4 \\ 6 \end{bmatrix} \ge \mathbf{0} \quad (\text{ammissibile})$$

$$\mathbf{x} = [x_1, x_2, x_3, x_4]^T = [0, 0, 4, 6]^T, \quad z = \mathbf{c}_B\mathbf{\bar{b}} = [0, 0]\begin{bmatrix} 4 \\ 6 \end{bmatrix} = 0$$

### Step 2: Pricing

Calcoliamo il moltiplicatore $\mathbf{w}$:

  

$$\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1} = [0, 0]\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = [0, 0]$$

Calcoliamo i costi ridotti $\mathbf{w}\mathbf{a}_j - c_j$ per $j \in \{1, 2\}$:

  

- Per $j = 1$ ($x_1$): $\mathbf{w}\mathbf{a}_1 - c_1 = [0, 0]\begin{bmatrix} 1 \\ 3 \end{bmatrix} - (-3) = 0 + 3 = 3$
    
      
    
- Per $j = 2$ ($x_2$): $\mathbf{w}\mathbf{a}_2 - c_2 = [0, 0]\begin{bmatrix} 2 \\ 1 \end{bmatrix} - (-2) = 0 + 2 = 2$
    
      
    

Determiniamo la variabile entrante $k$:

  

$$\max \{3, 2\} = 3 \implies k = 1 \quad (x_1 \text{ entra in base})$$

### Step 3: Condizioni di Ottimalità

Poiché $\mathbf{w}\mathbf{a}_1 - c_1 = 3 > 0$, la soluzione attuale **non è ottima**.

  

### Step 4: Direzione e Illimitatezza

Calcoliamo il vettore di scambio $\mathbf{y}^1$:

  

$$\mathbf{y}^1 = \mathbf{B}^{-1}\mathbf{a}_1 = \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}\begin{bmatrix} 1 \\ 3 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \end{bmatrix}$$

Poiché $\mathbf{y}^1 \not\le \mathbf{0}$, la soluzione **non è illimitata**.

  

### Step 5: Rapporto Minimo

Calcoliamo i rapporti per le componenti $y_i^1 > 0$:

  

- Riga 1 ($x_3$): $\frac{\bar{b}_1}{y_1^1} = \frac{4}{1} = 4$
    
      
    
- Riga 2 ($x_4$): $\frac{\bar{b}_2}{y_2^1} = \frac{6}{3} = 2$
    
      
    

$$x_1 = \min \{4, 2\} = 2 \implies r = 2$$

La variabile alla riga 2 ($x_4$) tocca lo zero per prima ed **esce dalla base**, sostituita da $x_1$.

Nuova base: $B = (3, 1)$, variabili non-base: $N = (4, 2)$.

  

## Iterazione 2

### Step 1: Inizializzazione

Costruiamo la nuova matrice di base $\mathbf{B} = [\mathbf{a}_3, \mathbf{a}_1]$ e calcoliamo la sua inversa:

  

$$\mathbf{B} = \begin{bmatrix} 1 & 1 \\ 0 & 3 \end{bmatrix} \implies \mathbf{B}^{-1} = \begin{bmatrix} 1 & -1/3 \\ 0 & 1/3 \end{bmatrix}$$

$$\mathbf{c}_B = [c_3, c_1] = [0, -3]$$

Aggiorniamo la soluzione:

  

$$\mathbf{\bar{b}} = \mathbf{B}^{-1}\mathbf{b} = \begin{bmatrix} 1 & -1/3 \\ 0 & 1/3 \end{bmatrix} \begin{bmatrix} 4 \\ 6 \end{bmatrix} = \begin{bmatrix} 4 - 2 \\ 2 \end{bmatrix} = \begin{bmatrix} 2 \\ 2 \end{bmatrix}$$

Quindi $x_3 = 2, x_1 = 2$ (mentre $x_2 = 0, x_4 = 0$).

  

$$z = \mathbf{c}_B\mathbf{\bar{b}} = [0, -3]\begin{bmatrix} 2 \\ 2 \end{bmatrix} = -6$$

### Step 2: Pricing

Calcoliamo il moltiplicatore $\mathbf{w}$:

  

$$\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1} = [0, -3]\begin{bmatrix} 1 & -1/3 \\ 0 & 1/3 \end{bmatrix} = [0, -1]$$

Calcoliamo i costi ridotti per le variabili fuori base $j \in \{2, 4\}$:

  

- Per $j = 2$ ($x_2$): $\mathbf{w}\mathbf{a}_2 - c_2 = [0, -1]\begin{bmatrix} 2 \\ 1 \end{bmatrix} - (-2) = -1 + 2 = 1$
    
      
    
- Per $j = 4$ ($x_4$): $\mathbf{w}\mathbf{a}_4 - c_4 = [0, -1]\begin{bmatrix} 0 \\ 1 \end{bmatrix} - 0 = -1 - 0 = -1$
    
      
    

Determiniamo la variabile entrante:

  

$$\max \{1, -1\} = 1 \implies k = 2 \quad (x_2 \text{ entra in base})$$

### Step 3: Condizioni di Ottimalità

Poiché $\mathbf{w}\mathbf{a}_2 - c_2 = 1 > 0$, la soluzione **non è ottima**.

  

### Step 4: Direzione e Illimitatezza

Calcoliamo il vettore di scambio $\mathbf{y}^2$:

  

$$\mathbf{y}^2 = \mathbf{B}^{-1}\mathbf{a}_2 = \begin{bmatrix} 1 & -1/3 \\ 0 & 1/3 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 2 - 1/3 \\ 1/3 \end{bmatrix} = \begin{bmatrix} 5/3 \\ 1/3 \end{bmatrix}$$

Poiché $\mathbf{y}^2 \not\le \mathbf{0}$, la soluzione **non è illimitata**.

  

### Step 5: Rapporto Minimo

Entrambi i coefficienti sono positivi:

  

- Riga 1 ($x_3$): $\frac{\bar{b}_1}{y_1^2} = \frac{2}{5/3} = \frac{6}{5} = 1.2$
    
      
    
- Riga 2 ($x_1$): $\frac{\bar{b}_2}{y_2^2} = \frac{2}{1/3} = 6$
    
      
    

$$x_2 = \min \{1.2, 6\} = \frac{6}{5} \implies r = 1$$

La variabile alla riga 1 ($x_3$) tocca lo zero per prima ed **esce dalla base**, sostituita da $x_2$.

Nuova base: $B = (2, 1)$, variabili non-base: $N = (3, 4)$.

  

## Iterazione 3

### Step 1: Inizializzazione

Costruiamo la nuova matrice di base $\mathbf{B} = [\mathbf{a}_2, \mathbf{a}_1]$ e la sua inversa:

  

$$\mathbf{B} = \begin{bmatrix} 2 & 1 \\ 1 & 3 \end{bmatrix} \implies \mathbf{B}^{-1} = \frac{1}{5}\begin{bmatrix} 3 & -1 \\ -1 & 2 \end{bmatrix}$$

$$\mathbf{c}_B = [c_2, c_1] = [-2, -3]$$

Aggiorniamo i valori di base:

  

$$\mathbf{\bar{b}} = \mathbf{B}^{-1}\mathbf{b} = \frac{1}{5}\begin{bmatrix} 3 & -1 \\ -1 & 2 \end{bmatrix} \begin{bmatrix} 4 \\ 6 \end{bmatrix} = \frac{1}{5}\begin{bmatrix} 12 - 6 \\ -4 + 12 \end{bmatrix} = \begin{bmatrix} 6/5 \\ 8/5 \end{bmatrix}$$

Le variabili di base valgono $x_2 = 1.2$ e $x_1 = 1.6$ (mentre $x_3 = 0, x_4 = 0$).

  

$$z = \mathbf{c}_B\mathbf{\bar{b}} = [-2, -3] \begin{bmatrix} 6/5 \\ 8/5 \end{bmatrix} = -\frac{12}{5} - \frac{24}{5} = -\frac{36}{5} = -7.2$$

### Step 2: Pricing

Calcoliamo il moltiplicatore $\mathbf{w}$:

  

$$\mathbf{w} = \mathbf{c}_B\mathbf{B}^{-1} = [-2, -3] \cdot \frac{1}{5}\begin{bmatrix} 3 & -1 \\ -1 & 2 \end{bmatrix} = \frac{1}{5}[-6 + 3, \; 2 - 6] = \left[-\frac{3}{5}, -\frac{4}{5}\right]$$

Calcoliamo i costi ridotti per le variabili non-base $j \in \{3, 4\}$:

  

- Per $j = 3$ ($x_3$): $\mathbf{w}\mathbf{a}_3 - c_3 = \left[-\frac{3}{5}, -\frac{4}{5}\right]\begin{bmatrix} 1 \\ 0 \end{bmatrix} - 0 = -\frac{3}{5}$
    
      
    
- Per $j = 4$ ($x_4$): $\mathbf{w}\mathbf{a}_4 - c_4 = \left[-\frac{3}{5}, -\frac{4}{5}\right]\begin{bmatrix} 0 \\ 1 \end{bmatrix} - 0 = -\frac{4}{5}$
    
      
    

### Step 3: Condizioni di Ottimalità

Verifichiamo il costo ridotto massimo:

  

$$\max \left\{-\frac{3}{5}, -\frac{4}{5}\right\} = -\frac{3}{5} \le 0$$

Tutti i costi ridotti sono **minori o uguali a zero**: la condizione di arresto è soddisfatta. **STOP: la soluzione è ottima**.

  

|**Iterazione**|**Base**|**Vertice (x1​,x2​)**|**Valore z**|**Variabile Entrante**|**Variabile Uscente**|
|---|---|---|---|---|---|
|**1**|$\{x_3, x_4\}$|$(0, 0)$|$0$|$x_1$|$x_4$|
|**2**|$\{x_3, x_1\}$|$(2, 0)$|$-6$|$x_2$|$x_3$|
|**3**|$\{x_2, x_1\}$|$(1.6, 1.2)$|$-7.2$|_Nessuna (Ottimo)_|-|

Il punto di minimo globale è $x_1^* = 1.6$, $x_2^* = 1.2$, con costo ottimo $z^* = -7.2$.