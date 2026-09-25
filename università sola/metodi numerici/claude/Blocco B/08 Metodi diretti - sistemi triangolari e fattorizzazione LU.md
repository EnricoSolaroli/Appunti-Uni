 # Metodi diretti: sistemi triangolari e fattorizzazione LU

> **Blocco B · giorni 2–3 di 5 — martedì 25 (teoria) e mercoledì 26 agosto (codice)** · Fonte: `Sistemi Lineari_Metodi_Numerici_Diretti.pdf` (pp. 16–27, 32–33)
> Laboratorio collegato: **Laboratorio 9 (23/4), Esercizi 4–6** · Codice: `SolveTriangular.py` (`Lsolve`, `Usolve`)

---

## 1. Diretti contro iterativi

| | **Metodi diretti** | **Metodi iterativi** |
|---|---|---|
| Cosa producono | in assenza di errori di arrotondamento, la soluzione **esatta** in un **numero finito** di passi | una **successione** di soluzioni approssimate che, sotto opportune ipotesi, converge alla soluzione |
| La matrice $A$ | viene **modificata** durante il calcolo (fattorizzata) | **non** viene modificata → si sfrutta facilmente la sparsità |
| Adatti a | matrici **dense** e di **moderate dimensioni** | matrici **grandi e sparse** |
| In aritmetica esatta | soluzione esatta in un numero **finito** di passi | soluzione esatta in un numero **infinito** di passi |

> 📌 Le slide dichiarano che il corso si concentra sui metodi **iterativi**, e tratta i diretti come "breve richiamo". Non lasciarti ingannare: nelle prove d'esame i diretti compaiono eccome — Cholesky nella Simulazione II, determinante e inversa via LU nella Simulazione III e nell'esame del 4 luglio 2024 T1.

---

## 2. L'idea della fattorizzazione

Un metodo diretto trasforma $Ax=b$ in un sistema **equivalente** con struttura più semplice, fattorizzando

$$A = B\cdot C \qquad\Longrightarrow\qquad BCx=b \qquad\Longrightarrow\qquad \begin{cases} By=b\\ Cx=y\end{cases}$$

Un problema difficile diventa **due problemi facili**, perché $B$ e $C$ sono triangolari (o ortogonali).

**Costo**: la fattorizzazione costa $O(n^3)$, la risoluzione dei due sistemi triangolari costa $O(n^2)$. Ne segue una conseguenza pratica importante: **se devi risolvere più sistemi con la stessa $A$ e termini noti diversi, fattorizzi una volta sola** e paghi $O(n^2)$ per ciascun termine noto. È esattamente ciò che si sfrutta per calcolare l'inversa ([[08 Metodi diretti - sistemi triangolari e fattorizzazione LU#7. Calcolo dell'inversa — $n$ sistemi lineari|§7]]).

### Le tre fattorizzazioni

| Metodo | Fattorizzazione | Struttura | Esistenza | Unicità |
|---|---|---|---|---|
| **Eliminazione gaussiana** | $A=LU$ | $L$ triang. inferiore con **diagonale di 1**, $U$ triang. superiore | sotto le ipotesi del Teorema 1 (o con $P$: sempre, se $A$ non singolare) | **sì** |
| **Cholesky** | $A=LL^T=R^TR$ | $L$ triang. inferiore con diagonale **positiva** | solo se $A$ **simmetrica e definita positiva** | sì |
| **Householder** | $A=QR$ | $Q$ ortogonale ($Q^{-1}=Q^T$), $R$ triang. superiore | **sempre** | **no** |

---

## 3. Sistemi triangolari

Sono la base di tutto: ogni fattorizzazione serve a ricondursi a questi.

### Sostituzione in avanti — $Lx=b$, $L$ triangolare inferiore

$$\begin{cases} l_{11}x_1 = b_1\\ l_{21}x_1+l_{22}x_2 = b_2\\ \dots\\ l_{i1}x_1+\dots+l_{ii}x_i = b_i \end{cases} \qquad\Longrightarrow\qquad \begin{cases} x_1=\dfrac{b_1}{l_{11}}\\[6pt] x_i=\dfrac{b_i-\sum_{j=1}^{i-1}l_{ij}x_j}{l_{ii}},\quad i=2,\dots,n \end{cases}$$

```
for i = 1,2,…,n
    xᵢ = bᵢ
    for j = 1,2,…,i-1
        xᵢ = xᵢ - lᵢⱼ·xⱼ
    end
    xᵢ = xᵢ / lᵢᵢ
end
```

### Sostituzione all'indietro — $Ux=b$, $U$ triangolare superiore

$$x_n=\frac{b_n}{u_{nn}}, \qquad x_i=\frac{b_i-\sum_{j=i+1}^{n}u_{ij}x_j}{u_{ii}},\quad i=n-1,\dots,1$$

```
for i = n, n-1, …, 1
    xᵢ = bᵢ
    for j = i+1,…,n
        xᵢ = xᵢ - uᵢⱼ·xⱼ
    end
    xᵢ = xᵢ / uᵢᵢ
end
```

**Complessità** (moltiplicazioni): $\sum_{i=1}^{n} i = \dfrac{n(n+1)}{2}$, cioè $O\!\left(\dfrac{n^2}{2}\right)$ per entrambe.

### Nel codice: `SolveTriangular.py`

`Lsolve(L,b)` e `Usolve(U,b)` restituiscono `(x, flag)` con `flag=0` se i test di applicabilità sono superati, `flag=1` altrimenti. I due test sono:

1. **matrice quadrata** (`n != m` → errore)
2. **nessun elemento diagonale nullo** (`np.all(np.diag(U))` → se un $u_{ii}=0$ la matrice è singolare e la divisione fallirebbe)

Nota implementativa: il prodotto scalare parziale è fatto con `np.dot(U[i,i+1:n], x[i+1:n])` invece che con un ciclo interno — vettorizzato, più veloce e più leggibile.

---

## 4. ⭐ Fattorizzazione LU di Gauss

> ### Teorema 1 (esistenza e unicità della fattorizzazione LU)
> Sia $A\in\mathbb{R}^{n\times n}$ e sia $A_k$ la **sottomatrice principale di testa** di ordine $k$ (le prime $k$ righe e le prime $k$ colonne).
> Se **tutte** le sottomatrici principali di testa $A_k$, $k=1,\dots,n-1$, sono **non singolari**, allora esiste ed è **unica** la fattorizzazione $A=LU$, con $L$ triangolare inferiore a diagonale unitaria e $U$ triangolare superiore.

> ⚠️ **Due precisazioni che l'esame apprezza:**
> - Non serve richiedere esplicitamente che $A$ sia non singolare **per l'esistenza** della fattorizzazione; serve però che lo sia **per usarla** a risolvere $Ax=b$.
> - Le ipotesi riguardano $k=1,\dots,n-1$: la sottomatrice di ordine $n$ (cioè $A$ stessa) non entra nella condizione.

### L'algoritmo

L'eliminazione di Gauss elimina progressivamente le incognite, riducendo il sistema a forma triangolare superiore ($U$). La matrice $L$ si costruisce **registrando i moltiplicatori** usati nel processo.

Si inizializza $L=I$, poi per $k=1,\dots,n-1$:

$$\begin{cases} l_{ik}=\dfrac{a_{ik}}{a_{kk}}, & i=k+1,\dots,n\\[6pt] a_{ij}=a_{ij}-l_{ik}\,a_{kj}, & i,j=k+1,\dots,n \end{cases}$$

L'elemento $a_{kk}$ si chiama **pivot**. Alla fine, nel triangolo superiore di $A$ c'è $U$, e in $L$ il fattore triangolare inferiore.

**Complessità**: $\approx\dfrac{1}{3}n^3$.

Risoluzione del sistema:

$$\begin{cases} Ly=b\\ Ux=y\end{cases}$$

### Esempio svolto

$$A=\begin{bmatrix}2&1&1\\2&4&6\\4&8&12+\varepsilon\end{bmatrix} \;\longrightarrow\; \text{prendiamo } A=\begin{bmatrix}2&1&1\\2&4&6\\4&8&12\end{bmatrix}\ \text{(soddisfa il Teorema 1)}$$

**Passo $k=1$**: $l_{21}=\frac{2}{2}=1$… *(nell'esempio delle slide, con $A=\begin{bmatrix}2&1&1\\4&6&\cdot\\8&12&7\end{bmatrix}$, si ottiene $l_{21}=2$, $l_{31}=4$)*

Sottrai alla riga 2 la riga 1 moltiplicata per $l_{21}$; alla riga 3 la riga 1 per $l_{31}$:

$$A^{(1)}=\begin{bmatrix}2&1&1\\0&5&1\\0&10&3\end{bmatrix}$$

**Passo $k=2$**: $l_{32}=\frac{10}{5}=2$; sottrai alla riga 3 la riga 2 per $l_{32}$:

$$A^{(2)}=\begin{bmatrix}2&1&1\\0&5&1\\0&0&1\end{bmatrix}$$

$$L=\begin{bmatrix}1&0&0\\2&1&0\\4&2&1\end{bmatrix}, \qquad U=\begin{bmatrix}2&1&1\\0&5&1\\0&0&1\end{bmatrix}$$

---

## 5. Pivoting e matrici di permutazione

### Matrice di permutazione

$$P=\begin{bmatrix}0&0&1&0\\0&1&0&0\\1&0&0&0\\0&0&0&1\end{bmatrix} \qquad\text{(identità con la riga 1 e la riga 3 scambiate)}$$

- $PA$ = scambia le stesse **righe** di $A$
- $AP$ = scambia le corrispondenti **colonne** di $A$
- il prodotto di matrici di permutazione è ancora una matrice di permutazione

> ### Teorema 2 (LU con permutazione)
> Data $A$ **non singolare**, esiste una matrice di permutazione $P$ tale che
> $$PA=LU$$
> ⚠️ **$P$ non è unica**: possono esistere diverse $P$ tali che $PA$ soddisfi le ipotesi del Teorema 1.

Il Teorema 2 è quello che rende LU **sempre applicabile** a matrici non singolari, anche quando il Teorema 1 fallisce.

### Le due varianti di pivoting

**Pivoting parziale "primo non nullo".** Al passo $k$, se $a_{kk}=0$, si cerca nella colonna $k$, a partire dalla riga $k$, la prima riga $s$ con elemento non nullo, e si scambiano le righe $k$ e $s$. Garantisce l'esistenza della fattorizzazione, per cui basta $a_{kk}\neq0$.

**Pivoting per colonne a perno massimo** — *è quella implementata in `scipy.linalg`*. Al passo $k$ si cerca nella colonna $k$, da riga $k$ in giù, l'elemento di **modulo massimo**, e lo si porta in posizione di pivot.

```
Inizializza P = I
for k = 1,…,n-1
    s = indice di riga del massimo in modulo in A[k:n, k]
    se s ≠ k:
        scambia la riga s con la riga k in A, e registra lo scambio in P
    lᵢₖ = aᵢₖ / aₖₖ                    i = k+1,…,n
    aᵢⱼ = aᵢⱼ - lᵢₖ·aₖⱼ                i,j = k+1,…,n
```

> ### ⭐ Perché il perno massimo si usa SEMPRE, anche quando il Teorema 1 vale
> Perché in questo modo **tutti gli elementi di $L$ risultano $|l_{ij}|\le1$**: dividendo per l'elemento più grande della colonna, i moltiplicatori non esplodono mai. È una questione di **stabilità**, non di esistenza. Vedi il documento 09, [[08 Metodi diretti - sistemi triangolari e fattorizzazione LU#4. ⭐ Fattorizzazione LU di Gauss|§4]].

### Esempio con pivoting

$$A=\begin{bmatrix}2&1&1\\4&2&3\\8&12&7\end{bmatrix}$$

Le ipotesi del Teorema 1 **non** sono soddisfatte: la sottomatrice di testa $2\times2$, $\begin{bmatrix}2&1\\4&2\end{bmatrix}$, è singolare (det $=0$).

**Passo $k=1$**: il modulo massimo nella colonna 1 è 8, in terza riga. Scambio righe 1↔3:

$$A=\begin{bmatrix}8&12&7\\4&2&3\\2&1&1\end{bmatrix}, \qquad P=\begin{bmatrix}0&0&1\\0&1&0\\1&0&0\end{bmatrix}$$

$l_{21}=\frac48=\frac12$, $l_{31}=\frac28=\frac14$:

$$A^{(1)}=\begin{bmatrix}8&12&7\\0&-4&-\frac12\\0&-2&-\frac34\end{bmatrix}$$

**Passo $k=2$**: $l_{32}=\frac{-2}{-4}=\frac12$:

$$A^{(2)}=\begin{bmatrix}8&12&7\\0&-4&-\frac12\\0&0&-\frac12\end{bmatrix}$$

$$L=\begin{bmatrix}1&0&0\\\frac12&1&0\\\frac14&\frac12&1\end{bmatrix}, \qquad U=\begin{bmatrix}8&12&7\\0&-4&-\frac12\\0&0&-\frac12\end{bmatrix}$$

Nota: tutti gli $|l_{ij}|\le1$, come previsto.

### Risolvere il sistema quando c'è $P$

Gli scambi vanno applicati **anche al termine noto**:

$$Ax=b \;\Longrightarrow\; PAx=Pb \;\Longrightarrow\; LUx=Pb \;\Longrightarrow\; \boxed{\begin{cases}Ly=Pb\\ Ux=y\end{cases}}$$

Dimenticare di permutare $b$ è l'errore più frequente in laboratorio.

---

## 6. ⚠️ La convenzione di `scipy.linalg.lu` — verificata

`scipy.linalg.lu(A)` restituisce **tre** matrici tali che

$$A = P_{\text{scipy}}\,L\,U \qquad\text{cioè}\qquad P_{\text{scipy}}^{\,T} A = LU$$

Quindi **la $P$ del corso (quella per cui $PA=LU$) è la trasposta della prima matrice restituita**:

```python
from scipy.linalg import lu
PT, L, U = lu(A)     # la prima matrice restituita è P^T nella notazione del corso
P = PT.T             # ✅ questa è la P tale che P@A == L@U
```

Verificato numericamente su `A = [[2,5,8,7],[5,2,2,8],[7,5,6,6],[5,4,4,8]]`:

```
A == PT @ L @ U      →  True
PT @ A == L @ U      →  False      ❌
PT.T @ A == L @ U    →  True       ✅
```

> 🪤 **La trappola**: nella **Nota 1** del laboratorio il professore scrive `P = PT.copy()`, che **non traspone** — crea solo una copia indipendente in memoria. Lì funziona perché la matrice è $2\times2$ e $P=\begin{bmatrix}0&1\\1&0\end{bmatrix}$ è **simmetrica**: in dimensione 2 le uniche permutazioni sono l'identità e l'unico scambio, entrambe simmetriche, quindi $P^T=P$ e l'errore è invisibile per costruzione. Negli **Esercizi 4 e 7** infatti scrive correttamente `P = PT.T`.
>
> Su $A_4=\begin{bmatrix}2&5&8&7\\5&2&2&8\\7&5&6&6\\5&4&4&8\end{bmatrix}$ la permutazione è un **ciclo di lunghezza 4**, non simmetrico, e la differenza è drammatica:
>
> | | $PA=LU$ | soluzione (esatta: $[1,1,1,1]$) |
> |---|---|---|
> | `P = PT.T` | ✅ True | $[1,\,1,\,1,\,1]$ |
> | `P = PT.copy()` | ❌ False | $[0.351,\,-2.361,\,1.361,\,3.031]$ |
>
> Nessun errore, nessun avviso: solo numeri sbagliati. **Usa sempre `P = PT.T`, e verifica con `np.allclose(P@A, L@U)`.**
>
> 📌 Il motivo matematico: le matrici di permutazione sono **ortogonali**, quindi $P^{-1}=P^T$. scipy restituisce la matrice che *ricostruisce* $A$ ($A=pLU$), il corso vuole quella che *permuta* $A$ ($PA=LU$): sono l'una l'inversa dell'altra, e per matrici ortogonali l'inversa è la trasposta.

### La funzione da avere pronta

```python
import SolveTriangular as ST
from scipy.linalg import lu

def LUsolve(P, L, U, b):
    Pb = P @ b
    y, flag = ST.Lsolve(L, Pb)
    if flag == 0:
        x, flag = ST.Usolve(U, y)
    else:
        return [], flag
    return x, flag

# uso
PT, L, U = lu(A)
P = PT.T
x, flag = LUsolve(P, L, U, b)
```

---

## 7. Calcolo dell'inversa — $n$ sistemi lineari

Poiché $A\cdot A^{-1}=I$ e la $i$-esima colonna di $I$ è il vettore $e_i$ della base canonica, la $i$-esima colonna $x_i$ di $A^{-1}$ risolve

$$A x_i = e_i, \qquad i=1,\dots,n$$

**Il punto**: la matrice è la stessa per tutti gli $n$ sistemi, quindi si **fattorizza una volta sola** e si riusa:

$$\begin{cases} L y_i = P e_i\\ U x_i = y_i \end{cases} \qquad i=1,\dots,n$$

Costo: $O(n^3)$ per la fattorizzazione $+\;n\cdot O(n^2)=O(n^3)$ per le risoluzioni, invece di $n$ fattorizzazioni.

```python
def solve_nsis(A, B):
    """Risolve AX = B con B matrice: X[:,i] risolve A x = B[:,i]."""
    PT, L, U = lu(A)
    P = PT.T
    n = A.shape[0]
    X = np.zeros((n, B.shape[1]))
    for i in range(B.shape[1]):
        x, flag = LUsolve(P, L, U, B[:, i].reshape(n, 1))
        X[:, i] = x.flatten()
    return X

A_inv = solve_nsis(A, np.eye(n))     # confronta con scipy.linalg.inv(A)
```

---

## 8. ⭐ Calcolo del determinante via LU

Da $PA=LU$:

$$\det(PA)=\det(L)\det(U)=\det(U)=\prod_{i=1}^{n}u_{ii} \qquad\text{(perché } \det L=1\text{, diagonale unitaria)}$$

D'altra parte $\det(PA)=\det(P)\det(A)$, e

$$\det(P)=(-1)^{s}, \qquad s=\text{numero di scambi di righe effettuati}$$

$$\boxed{\;\det(A)=(-1)^{s}\prod_{i=1}^{n}u_{ii}\;}$$

**E il rango**: è il numero $r$ di elementi **non nulli** sulla diagonale di $U$.

```python
PT, L, U = lu(A)
P = PT.T
det_LU = np.linalg.det(P) * np.prod(np.diag(U))     # det(P) = ±1
# confronta con np.linalg.det(A)
```

*(Il segno si può ottenere sia contando gli scambi sia, più semplicemente, con `np.linalg.det(P)`, che vale esattamente $\pm1$.)*

Questo è l'esercizio della **Simulazione III** e dell'**esame del 4 luglio 2024 T1**: 2 punti per il determinante, 2 per l'inversa.

---

## 9. Da ricordare

| | |
|---|---|
| Idea dei metodi diretti | $A=BC$ ⟹ $By=b$, $Cx=y$; fattorizzazione $O(n^3)$, sostituzioni $O(n^2)$ |
| Sostituzione avanti/indietro | $O(n^2/2)$ moltiplicazioni |
| **Teorema 1 (LU)** | tutte le sottomatrici principali di testa $A_k$, $k=1..n-1$, non singolari ⟹ $LU$ esiste ed è **unica** |
| **Teorema 2 (LU con $P$)** | $A$ non singolare ⟹ $\exists P$ con $PA=LU$; $P$ **non** unica |
| Costo LU | $\approx\frac13 n^3$ |
| Pivoting a perno massimo | garantisce $\vert l_{ij}\vert \le1$ → **stabilità** |
| Sistema con $P$ | $Ly=Pb$, $Ux=y$ — **permuta anche $b$** |
| `scipy.linalg.lu` | restituisce $P^T$: usa `P = PT.T` |
| Inversa | $n$ sistemi $Ax_i=e_i$, una sola fattorizzazione |
| **Determinante** | $\det(A)=(-1)^s\prod u_{ii}$ |
| Rango | numero di $u_{ii}\neq0$ |
