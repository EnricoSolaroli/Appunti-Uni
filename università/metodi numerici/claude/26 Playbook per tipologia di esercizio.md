# 26 — Playbook per tipologia di esercizio

> **Cos'è.** Per ognuna delle sei famiglie che possono uscire: come si riconosce, quali funzioni dello scheletro servono e **quanti buchi** hanno, come si imposta il problema, la ricetta grafica, le giustificazioni teoriche da scrivere, le trappole.
>
> **Complemento di** [[24 Compendio unico - tutto l'esame in un file|nota 24]] (teoria e formule) e [[25 Autotest di richiamo - le cose senza cue|nota 25]] (autotest). Questa è la nota *operativa*: cosa fare, nell'ordine in cui si fa.

---

# 0. I tre file che ti danno — e come sfruttarli

## 0.1 `scheletri_25_26.py` — 20 funzioni, 116 marcatori `#to do`

⚠️ **I marcatori non contano i buchi veri.** Ci sono righe da scrivere **senza** alcun marcatore, e marcatori scritti in modo non uniforme (`# to do` con lo spazio, oppure un semplice `#`). Il conteggio per funzione:

| Funzione | `#to do` | Buchi veri | Note |
|---|---|---|---|
| `metodo_bisezione` | 3 | 3 | |
| `falsi` | 5 | 5 | |
| `corde` | 1 | 1 | |
| `newton` | 6 | 6 | |
| `newton_modificato` | 3 | 3 | |
| `secanti` | 5 | 5 | |
| `stima_ordine` | 0 | 0 | **già completa** |
| `newton_raphson` | 8 | 8 | |
| `newton_raphson_corde` | 9 | 9 | |
| `newton_raphson_sham` | 9 | 9 | |
| `jacobi` | 11 | 11 | |
| `gauss_seidel` | 10 | 10 | |
| `gauss_seidel_sor` | 10 | **11** | `raggiospettrale=` è un buco senza marcatore |
| `steepestdescent` | 9 | 9 | |
| `conjugate_gradient` | 11 | 11 | |
| `eqnorm` | 2 | **~6** | manca tutto il blocco Cholesky, e `x` non viene mai assegnato |
| `qrLS` | 1 | **3** | manca `Q, R = spLin.qr(A)`; `x=` è marcato con un solo `#` |
| `SVDLS` | 5 | **6** | `d1 = # to do` ha lo spazio e sfugge a Ctrl+F |
| `plagr` | 5 | 5 | |
| `InterpL` | 3 | 3 | |

> [!warning] Le due cose da fare per prime, appena apri il file
> **1. La riga di import.** Lo scheletro importa **solo `numpy`**. Prima riga da scrivere:
> ```python
> import numpy as np
> import scipy.linalg as spLin
> import matplotlib.pyplot as plt
> import sympy as sym
> from sympy.utilities.lambdify import lambdify
> from scipy.io import loadmat
> from SolveTriangular import Lsolve, Usolve
> ```
> **2. Non provare a importare lo scheletro finché resta un buco.** `d = #to do` non è Python valido: `import scheletri_25_26` fallisce con `SyntaxError` e non carica **nemmeno** le funzioni già complete. Se ti serve una funzione singola prima di aver finito, **incollala in una cella del notebook**.

**Funzioni che NON sono nello scheletro e vanno scritte da zero:**

| Funzione | Quando serve |
|---|---|
| `LUsolve(P, L, U, b)` | ogni volta che risolvi con LU |
| `solve_nsis(A, B)` | "sfruttare la fattorizzazione per calcolare l'**inversa**" |
| `rho_T_Jac(A)` | $\omega$ ottimale per SOR (è `jacobi` troncata) |
| `newton_raphson_minimo` | c'era l'anno scorso, oggi no: se lo chiedono è teoria |

## 0.2 `SolveTriangular.py` — `Lsolve` e `Usolve`, già pronte

Firma identica per entrambe: **`x, flag = Lsolve(L, b)`**.

- restituiscono **sempre una colonna $(n,1)$**, mai un vettore 1-D
- restituiscono **`[], 1`** se un elemento diagonale è nullo o la matrice non è quadrata
- **non** fanno alcun controllo che `L` sia davvero triangolare: se le passi una matrice piena, calcolano lo stesso un risultato, sbagliato e senza avvisi

> [!danger] La regola delle forme, che ti è già costata più volte
> **In ingresso** ai metodi iterativi: `x0` e `b` devono essere **colonne** $(n,1)$ — `loadmat` restituisce già $b$ così, e `jacobi` fa `d.reshape(n,1)`.
> **In uscita** da `Lsolve`/`Usolve`: se il risultato deve incontrare un array 1-D, **appiattiscilo** con `np.asarray(x).ravel()`.
> Sbagliare direzione non dà errore: dà broadcasting a $(n,n)$ e un numero plausibile e falso.
> Controllo che le copre entrambe: `print(A.shape, b.shape, x0.shape)`.

## 0.3 `utilities.py` — il ricettario, NON un modulo

⚠️ **Non si importa.** Usa `np`, `plt` e `lambdify` senza averli importati ed esegue codice a livello di modulo: `import utilities` va in `NameError`. **Si apre e si copia.**

Ed è prezioso, perché contiene esattamente le ricette che all'esame non hanno alcun suggerimento:

| Dentro `utilities.py` trovi | Ti serve per |
|---|---|
| `x=sym.symbols('x')`, `sym.diff(fs,x,1)`, `lambdify(x,dfs,np)` | **zeri**: la derivata per Newton |
| `np.meshgrid` + `plot_surface` + `plt.contour(..., levels=[0])` | **sistemi non lineari**: il metodo grafico per $X_0$ |
| `F_sym(...).jacobian(sym.Matrix([x_sym, y_sym]))` + `sym.lambdify` | **sistemi non lineari**: costruire $F$ e $J$ |
| `sym.derive_by_array(F, (x,y))` e `sym.hessian(F, (x,y))` | **Newton per il minimo**: gradiente e Hessiana |

**Strategia d'esame**: appena apri il PC, apri anche `utilities.py` in una finestra. Quando ti serve una di queste quattro cose, copi e adatti i nomi. Sono le parti in cui si perde più tempo a ricostruire da zero.

---

# 1. Sistemi lineari

## 1.1 Come si riconosce

Il testo dice *"nel file `test.mat` sono memorizzate le matrici e i termini noti"*, oppure ti dà una matrice esplicita. È **sempre** l'Esercizio 1.

Caricamento (copialo dal testo, che di solito lo riporta):
```python
from scipy.io import loadmat
dati = loadmat('test.mat')
A = dati["A"].astype(float)
b = dati["b"].astype(float)
```

## 1.2 Le cinque domande, nell'ordine

Non improvvisare: esegui sempre queste cinque diagnosi e **stampale**, perché sono la giustificazione.

```python
m, n = A.shape
print("dimensioni:", m, n)                                  # 1. forma
print("densita': %.2f%%" % (np.count_nonzero(A)/(m*n)*100)) # 2. sparsita'
print("simmetrica:", np.allclose(A, A.T))                   # 3. simmetria
print("autovalori > 0:", np.all(np.linalg.eigvalsh(A) > 0)) # 4. definita positiva
print("K2(A) = %.4e" % np.linalg.cond(A))                   # 5. condizionamento
# dominanza diagonale stretta per righe:
print("dominanza:", np.all(np.abs(np.diag(A)) >
      np.sum(np.abs(A), axis=1) - np.abs(np.diag(A))))
```

> [!danger] L'errore che hai fatto tre volte
> `np.all(np.linalg.eigvals(A)) > 0` è **sbagliato**: `np.all(...)` collassa già a booleano e poi lo confronti con 0, quindi è vero quasi sempre. La parentesi va così: `np.all(np.linalg.eigvals(A) > 0)`.
> Con matrici simmetriche usa **`eigvalsh`**: più veloce e restituisce autovalori reali.

## 1.3 L'albero decisionale

```
rettangolare?  --SI-->  minimi quadrati (vai alla sezione 4)
     |NO
piccola (n <~ 400)?  --SI-->  METODO DIRETTO (la sparsita' non conta)
     |                          SDP          -> Cholesky
     |                          K2 basso     -> LU con pivoting
     |                          K2 alto      -> QR
     |NO  (grande >400)
sparsa (<33%)?  --SI-->  METODO ITERATIVO
     |              SDP                    -> discesa (SD,CG) oppure Gauss-Seidel
     |              dominanza diagonale    -> Jacobi o Gauss-Seidel (scegli GS)
     |NO --> metodo diretto comunque
```

**La domanda che ti ha fregato**: piccola *e* sparsa → **piccola vince**. A $n=20$ un metodo diretto costa niente e la sparsità è irrilevante.

## 1.4 Le funzioni e i loro buchi

### Blocco iterativo — un solo scheletro, cambiano $M$ e $N$

`jacobi` (11) · `gauss_seidel` (10) · `gauss_seidel_sor` (11)

```python
d = np.diag(A);  D = np.diag(d)
E = np.tril(A, -1);  F = np.triu(A, 1)
M = ...;  N = ...                                  # <-- l'unica differenza
T = np.linalg.inv(M) @ N
raggiospettrale = np.max(np.abs(np.linalg.eigvals(T)))     # NON np.linalg.norm!
it = 0;  er_vet = []
while it < it_max and errore >= toll:
    x = ...                                        # l'aggiornamento
    errore = np.linalg.norm(x - x0)/np.linalg.norm(x)
    er_vet.append(errore);  x0 = x.copy();  it += 1
return x, it, er_vet
```

| Metodo       | $M$   | $N$      | l'aggiornamento                      |
| ------------ | ----- | -------- | ------------------------------------ |
| Jacobi       | $D$   | $-(E+F)$ | `x = (b + N@x0)/d.reshape(n,1)`      |
| Gauss-Seidel | $D+E$ | $-F$     | `x, flag = Lsolve(M, b - F@x0)`      |
| SOR          | $D+E$ | $-F$     | `xtilde, flag = Lsolve(M, b - F@x0)` |
|              |       |          | $x=(1-\omega)*x_{0}+\omega*xtilde$   |
 
⚠️ `raggiospettrale = np.max(np.abs(autovalori))`. Con `np.linalg.norm(autovalori)` ottieni la norma euclidea dell'**intero vettore**: ti esce un numero $>1$ che sembrerebbe dire "diverge" mentre il metodo converge.

### Blocco discesa — un solo scheletro, cambia la direzione

`steepestdescent` (9) · `conjugate_gradient` (11)

```python
x = x0.copy();  r = A@x - b;  p = -r;  it = 0
nb = np.linalg.norm(b);  errore = np.linalg.norm(r)/nb
vet_r = [errore]
while errore >= tol and it < itmax:
    it += 1
    Ap = A @ p
    alpha = -(r.T @ p)/(p.T @ Ap)          # passo ottimo, uguale per entrambi
    x = x + alpha*p
    rtr_old = r.T @ r                      # <-- solo CG
    r = r + alpha*Ap
    gamma = (r.T @ r)/rtr_old              # <-- solo CG
    errore = np.linalg.norm(r)/nb;  vet_r.append(errore)
    p = -r                 # steepest descent
    p = -r + gamma*p       # gradiente coniugato
```

> [!danger] L'ordine degli argomenti è INVERTITO fra le due famiglie
> `gauss_seidel(A, b, x0, **toll, it_max**)` — tolleranza prima
> `steepestdescent(A, b, x0, **itmax, tol**)` — iterazioni prima
> Se sbagli, il ciclo non parte e ti ritrovi **0 iterazioni** senza alcun errore.

## 1.5 Le giustificazioni da scrivere

**Convergenza — occhio a quale teorema serve a quale metodo:**

| Serve garantire | Condizione | Vale per |
|---|---|---|
| Jacobi **e** Gauss-Seidel | dominanza diagonale stretta per righe | entrambi, sufficiente |
| Gauss-Seidel | $A$ SDP | solo GS |
| Jacobi | $A$ SDP **e** $2D-A$ SDP | serve la seconda condizione |
| metodi di **discesa** | $A$ SDP — **obbligatoria**, la dominanza non basta | SD e CG |
| qualunque metodo | $\rho(T)<1$ | necessaria **e** sufficiente |

Per i metodi di discesa aggiungi sempre la frase sul funzionale, altrimenti il "richiamando i risultati teorici" resta scoperto:

> Se $A$ è SDP, risolvere $Ax=b$ equivale a minimizzare $\Phi(x)=\frac12x^TAx-b^Tx$, il cui gradiente è $\nabla\Phi(x)=Ax-b=r$. La definita positività garantisce che $\Phi$ sia strettamente convessa e ammetta **un unico** minimo globale, coincidente con la soluzione.

**Velocità di convergenza** — chi governa cosa:

| Metodo | dipende da | fattore |
|---|---|---|
| Jacobi, GS, SOR | $\rho(T)$ | $\rho(T)^k$ |
| Steepest descent | $K_2(A)$ | $\left(\frac{K_2-1}{K_2+1}\right)^k$ |
| Gradiente coniugato | $\sqrt{K_2(A)}$ | $2\left(\frac{\sqrt{K_2}-1}{\sqrt{K_2}+1}\right)^k$, e termina in $\le n$ passi |

Stima delle iterazioni: $k \approx \log(toll)/\log q$. **Le osservate devono venire minori della stima**, perché è una maggiorazione — se ne osservi di più, c'è un bug.

**Perturbazione** (se il testo chiede di perturbare il termine noto):

$$\frac{\|\delta x\|}{\|x\|} \le K(A)\,\frac{\|\delta b\|}{\|b\|}$$

L'amplificazione osservata deve essere $\le K(A)$, e in pratica molto minore. **Se la supera, c'è un errore nel codice.**

## 1.6 La ricetta grafica

```python
plt.semilogy(range(1, len(er_GS)+1),  er_GS,  'b-o', label='Gauss-Seidel')
plt.semilogy(range(1, len(er_SD)+1),  er_SD,  'r-s', label='steepest descent')
plt.semilogy(range(1, len(er_CG)+1),  er_CG,  'g-^', label='gradiente coniugato')
plt.xlabel('iterazione k'); plt.ylabel('errore relativo')
plt.legend(); plt.grid(True); plt.show()
```

**`semilogy` sempre**: in scala lineare le curve sono schiacciate e il grafico non dimostra nulla. In scala logaritmica una convergenza lineare è una **retta** e la pendenza è $\log\rho(T)$. Parti dallo **stesso** $x_0$ per tutti i metodi, altrimenti confronti curve che partono da altezze diverse.

## 1.7 Verifica finale, sempre

```python
print("residuo:", np.linalg.norm(A@x - b))
```

## 1.8 Determinante e inversa dalla fattorizzazione LU

> **Richiesto in 3 testi**: `Miscellanea` A, **Simulazione III** Es. 1, **4 luglio 2024 T1** Es. 1. La formulazione e' sempre *"calcolarne la fattorizzazione LU di Gauss facendo uso di `scipy.linalg.lu` e **sfruttarla** per il calcolo del suo determinante e della sua inversa"*.
>
> ⚠️ **"Sfruttarla" e' vincolante**: `np.linalg.det` e `np.linalg.inv` **non** rispondono alla domanda. Vanno usate solo come **confronto**, che anzi il testo chiede esplicitamente.

### La convenzione di scipy — da fissare una volta per tutte

```python
PT, L, U = spLin.lu(A)          # scipy garantisce  A = PT @ L @ U
P = PT.T.copy()                 # quindi per RISOLVERE serve  P = PT^T,  perche'  P A = L U
```

- `L` e' triangolare **inferiore con diagonale unitaria**
- `U` e' triangolare **superiore**
- `PT` e' una matrice di permutazione: ha determinante $\pm1$

### Il determinante

Da $A = P^T L U$, per il teorema di Binet:

$$\det(A) = \det(P^T)\cdot\det(L)\cdot\det(U) = \pm1 \cdot 1 \cdot \prod_{i=1}^{n}u_{ii}$$

perche' **il determinante di una matrice triangolare e' il prodotto degli elementi diagonali**, e $L$ ha diagonale unitaria quindi $\det(L)=1$. Il segno $\pm1$ e' la parita' del numero di scambi di riga effettuati dal pivoting.

```python
PT, L, U = spLin.lu(A)
detA = np.linalg.det(PT) * np.prod(np.diag(U))

print("det via LU   = %.14f" % detA)
print("det numpy    = %.14f" % np.linalg.det(A))     # il confronto richiesto dal testo
print("differenza   = %.3e"  % abs(detA - np.linalg.det(A)))
```

Sulla matrice di `Miscellanea` A (verificato):

| | valore |
|---|---|
| `det(PT)` | $1.0$ (numero **pari** di scambi) |
| `diag(U)` | $4.5,\ -8.2222,\ -2.6216,\ 0.59794$ |
| det via LU | $58.00000000000001$ |
| `np.linalg.det` | $57.99999999999999$ |
| esatto (sympy) | $58$ |
| differenza | $2.1\cdot10^{-14}$ |

**Il commento da scrivere**: i due valori coincidono a meno della precisione di macchina; entrambi sono affetti da errore di arrotondamento perche' calcolati in aritmetica finita, e la differenza $\sim10^{-14}$ e' del tutto compatibile con $K_2(A)\approx26$ e con l'accumulo degli errori nelle $n$ moltiplicazioni. **Nessuno dei due e' "piu' esatto"**: sono entrambi approssimazioni dello stesso valore esatto 58.

### L'inversa

Calcolare $A^{-1}$ significa risolvere $AX = I$, cioe' **$n$ sistemi lineari** con la stessa matrice dei coefficienti e termini noti le colonne dell'identita'. Il vantaggio: la fattorizzazione si calcola **una volta sola** e si riusa $n$ volte — costo $O(n^3/3)$ una volta piu' $n$ coppie di sostituzioni $O(n^2)$, invece di $n$ fattorizzazioni.

⚠️ **`solve_nsis` non e' nello scheletro**: va scritta da zero.

```python
def solve_nsis(A, B):
    m, n = A.shape
    flag = 0
    if n != m:
        print("Matrice non quadrata")
        return []
    X = np.zeros((n, n))
    PT, L, U = spLin.lu(A)
    P = PT.T.copy()
    for i in range(n):
        y, flag = Lsolve(L, P @ B[:, i])          # colonna i-esima del termine noto
        if flag == 0:
            x, flag = Usolve(U, y)
            X[:, i] = x.reshape(n,)
        else:
            print("Elemento diagonale nullo")
            X = []
    return X
```

```python
Ainv = solve_nsis(A, np.eye(4))
print("verifica  ||A @ Ainv - I|| = %.3e" % np.linalg.norm(A @ Ainv - np.eye(4)))
print("confronto con scipy       = %.3e" % np.linalg.norm(Ainv - spLin.inv(A)))
```

Verificato sulla stessa matrice: $\|A A^{-1}-I\| = 7.7\cdot10^{-16}$ e scarto da `spLin.inv` pari a $2.5\cdot10^{-16}$.

> [!warning] Le tre cose che si sbagliano
> **`P = PT.T`**, non `PT`. Se salti la trasposta il risultato e' sbagliato e nessuno protesta.
> **`x.reshape(n,)`** in fondo: `Usolve` restituisce una colonna $(n,1)$ e la stai assegnando a `X[:, i]` che e' $(n,)$ — senza reshape prendi un errore di broadcasting.
> **`B[:, i]` e' gia' 1-D**: `Lsolve` la accetta, ma se avessi passato `B[:, i:i+1]` avresti una colonna e le forme si propagano diversamente. Resta coerente.

### `LUsolve` — il caso particolare con una sola colonna

Anche questa **non e' nello scheletro**. E' `solve_nsis` con un solo termine noto:

```python
def LUsolve(P, L, U, b):
    y, flag = Lsolve(L, P @ b)
    if flag == 0:
        x, flag = Usolve(U, y)
    return x, flag
```

Impararle insieme conviene: se sai `solve_nsis`, `LUsolve` e' il suo corpo senza il ciclo.

### La domanda teorica che accompagna sempre

> **Non si calcola mai l'inversa per risolvere un sistema lineare.** Per risolvere $Ax=b$ si usa la fattorizzazione e due sostituzioni, costo $O(n^3/3)+O(n^2)$; calcolare $A^{-1}$ e poi fare $A^{-1}b$ costa **$n$ volte di piu'** ed e' anche **numericamente peggiore**, perche' introduce ulteriori errori di arrotondamento. L'inversa si calcola solo quando serve l'inversa **in quanto tale**, come in questo esercizio.

**Esistenza della LU senza pivoting** — se il testo la chiede (`Miscellanea` A1):

> **Teorema.** $A$ ammette fattorizzazione $A=LU$ senza pivoting se e solo se tutti i **minori principali di testa** $A_k$ (sottomatrici $k\times k$ in alto a sinistra) hanno determinante non nullo.

```python
print("minori principali di testa:", [np.linalg.det(A[:k, :k]) for k in range(1, n+1)])
```

Se uno si annulla, la fattorizzazione senza pivoting **non esiste** e serve il pivoting a perno massimo. Il pivoting si usa comunque, anche quando la LU esisterebbe, perche' migliora la stabilita' numerica a costo trascurabile.


---

# 2. Equazioni non lineari (zeri)

## 2.1 Come si riconosce

Ti danno **una** funzione di **una** variabile e chiedono gli zeri. Quasi sempre Esercizio 2.

## 2.2 Impostazione: sympy per la derivata

Copia da `utilities.py`:

```python
x = sym.symbols('x')
fx  = 2*x**4 - sym.Rational(7,2)*x**3 + sym.Rational(3,4)*x**2 + x - sym.Rational(1,4)
dfx = sym.diff(fx, x, 1)
f  = lambdify(x, fx,  np)
df = lambdify(x, dfx, np)
```

⚠️ `sym.Rational(7,2)`, non `7/2`, per restare in aritmetica esatta.
⚠️ **Non riusare `x` per la griglia del grafico** — sovrascriveresti il simbolo. Usa `xx`.

## 2.3 Il grafico, prima di tutto

```python
xx = np.linspace(a, b, 200)
plt.plot(xx, f(xx), 'r-', label='f(x)')
plt.axhline(0, color='k', lw=0.8)
plt.grid(True); plt.legend(); plt.show()
```

Serve a **contare gli zeri** (spesso è il primo punto, 1 punto) e a **scegliere intervalli e iterati iniziali**.

## 2.4 Le funzioni e i buchi

| Funzione | buchi | l'aggiornamento — l'unica riga che cambia |
|---|---|---|
| `metodo_bisezione` | 3 | $x_k = a+\frac{b-a}{2}$ |
| `falsi` | 5 | $x_k = a - f(a)\frac{b-a}{f(b)-f(a)}$ |
| `corde` | 1 | $x_{k+1}=x_k - \frac{f(x_k)}{m}$, $m$ costante |
| `newton` | 6 | $x_{k+1}=x_k - \frac{f(x_k)}{f'(x_k)}$ |
| `newton_modificato` | 3 | $x_{k+1}=x_k - m\frac{f(x_k)}{f'(x_k)}$ |
| `secanti` | 5 | $x_{k+1}=x_k-f(x_k)\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}$ |
| `stima_ordine` | **0** | già completa |

Struttura comune a tutte:
```python
while it < nmax and errorex >= tolx and erroref >= tolf:
    ...
    xk1 = <l'aggiornamento>
    errorex = abs(d)/abs(xk1) if xk1 != 0 else abs(d)
    erroref = abs(fname(xk1))
    v_xk.append(xk1);  xk = xk1;  it += 1
return xk1, it, np.array(v_xk)
```

## 2.5 Scelta di $x_0$ e degli intervalli

- **Bisezione e regula falsi** (bracketing): serve $f(a)f(b)<0$. Su uno zero di **molteplicità pari** questo è impossibile — la funzione tocca l'asse senza attraversarlo.
- **Newton** converge solo **localmente**: $x_0$ vicino allo zero, e **lontano dai punti dove $f'\approx0$**, dove la tangente quasi orizzontale scaraventa il primo passo lontanissimo.
- Criterio rigoroso da citare (Fourier): su $[a,b]$ con $f(a)f(b)<0$ e $f'$, $f''$ di segno costante, si prende come $x_0$ l'estremo dove $f(x_0)f''(x_0)>0$.
- **Verifica sempre a quale zero sei arrivato**: Newton può convergere a un altro.

## 2.6 Ordine e molteplicità — il cuore teorico

`stima_ordine(v_xk, it)` — **vuole il vettore degli iterati, non la radice**.

> [!warning] Servono almeno 4 iterati
> `k = iterazioni - 4`. Con `it = 3` diventa $k=-1$: numpy **non protesta**, riavvolge gli indici e restituisce un numero grande e plausibile ma **privo di senso** (per esempio 352). Se il metodo converge in meno di 4 passi, parti da un $x_0$ più lontano.

**La molteplicità in due modi:**

1. *Teorico (da scrivere)* — $f(\alpha)=f'(\alpha)=\dots=f^{(m-1)}(\alpha)=0$, $f^{(m)}(\alpha)\neq0$:
   ```python
   for i in range(5): print(i, sym.diff(fx, x, i).subs(x, alpha))
   ```
2. *Sperimentale (da verificare)* — da $C=1-\frac1m$, quindi $m=\text{round}\big(\frac{1}{1-C}\big)$ con
   ```python
   C = abs(v[-1]-v[-2])/abs(v[-2]-v[-3])
   ```

**La catena logica completa**, che è la domanda da 3 punti:

> $x=\alpha$ ha molteplicità $m=2$. Newton è iterazione funzionale con $g(x)=x-\frac{f(x)}{f'(x)}$, e ha ordine 2 se e solo se $g'(\alpha)=0$; ma per una radice di molteplicità $m$ si ha $g'(\alpha)=1-\frac1m\neq0$, quindi la convergenza degrada a **lineare** con costante $C=1-\frac1m$. Si ripristina l'ordine 2 con $x_{k+1}=x_k-m\frac{f(x_k)}{f'(x_k)}$, per cui $g_m'(\alpha)=0$.

**Deflazione** (Sim II): $g(x)=\frac{f(x)}{(x-x_1^*)(x-x_2^*)}$ trasforma una radice multipla in una **semplice** — è l'alternativa a `newton_modificato`: lì correggi il metodo, qui la funzione.

---

# 3. Sistemi non lineari

## 3.1 Come si riconosce

Due (o più) equazioni non lineari in due incognite, con la richiesta di **Newton-Raphson, corde e Shamanskii** e il **confronto dei grafici dell'errore**.

## 3.2 Impostazione — copiala da `utilities.py`

```python
x_sym, y_sym = sym.symbols('x_sym y_sym')

def F_sym(f1_sym, f2_sym):
    return sym.Matrix([[f1_sym(x_sym, y_sym)], [f2_sym(x_sym, y_sym)]])

f1_sym = lambda x_sym, y_sym: x_sym**2 + x_sym*y_sym - 10
f2_sym = lambda x_sym, y_sym: y_sym + 3*x_sym*y_sym**2 - 57

J_sym = F_sym(f1_sym, f2_sym).jacobian(sym.Matrix([x_sym, y_sym]))
J_numerical = sym.lambdify([x_sym, y_sym], J_sym, np)
F_numerical = sym.lambdify([x_sym, y_sym], F_sym(f1_sym, f2_sym), np)
```

⚠️ Porta **tutto a sinistra**: $x^2+xy=10$ diventa `x**2 + x*y - 10`.

## 3.3 Il metodo grafico per $X_0$ — anche questo da `utilities.py`

```python
xg = np.arange(-8, 8, 0.1);  yg = np.arange(-8, 8, 0.1)
X, Y = np.meshgrid(xg, yg)
superfici = F_numerical(X, Y).squeeze()

plt.contour(X, Y, superfici[0,:,:], levels=[0], colors='black')
plt.contour(X, Y, superfici[1,:,:], levels=[0], colors='red')
plt.grid(True); plt.show()
```

Le **intersezioni** fra curva nera e curva rossa sono le soluzioni: `initial_guess = [1, 3]` si legge da lì.

⚠️ Usa `xg`, `yg` per la griglia: `X` dentro le funzioni è l'iterato, e riusare lo stesso nome è il modo più veloce per rompere tutto.

## 3.4 Le funzioni e i buchi — un solo scheletro, cambia *quando* si ricalcola $J$

`newton_raphson` (8) · `newton_raphson_corde` (9) · `newton_raphson_sham` (9)

```python
X = np.array(initial_guess, dtype=float)
it = 0;  erroreF = 1+tolF;  erroreX = 1+tolX;  errore = []
while it <= max_iterations and erroreX > tolX and erroreF > tolF:
    jx = np.array(J_numerical(X[0], X[1]), dtype=float)      # <-- QUI la differenza
    if np.linalg.matrix_rank(jx) < jx.shape[0]:
        print("Jacobiana non a rango massimo");  return None, None, None
    fx = np.array(F_numerical(X[0], X[1]), dtype=float).squeeze()
    s = np.linalg.solve(jx, -fx)
    Xnew = X + s                                             # <-- X maiuscola!
    erroreX = np.linalg.norm(s,1)/np.linalg.norm(Xnew,1)
    errore.append(erroreX)
    erroreF = np.linalg.norm(np.array(F_numerical(Xnew[0], Xnew[1]),
                             dtype=float).squeeze(), 1)
    X = Xnew;  it += 1
return X, it, errore
```

| Variante | dove sta `jx = ...` |
|---|---|
| Newton-Raphson | **dentro** il ciclo, ogni iterazione |
| Corde | **prima** del ciclo, calcolata una volta sola |
| Shamanskii | dentro il ciclo ma sotto `if it % update == 0:` |

## 3.5 Il grafico e la giustificazione

```python
plt.semilogy(range(1,len(err_N)+1),  err_N,  'b-o', label='Newton-Raphson')
plt.semilogy(range(1,len(err_NC)+1), err_NC, 'r-s', label='corde')
plt.semilogy(range(1,len(err_NS)+1), err_NS, 'g-^', label='Shamanskii')
plt.legend(); plt.grid(True); plt.show()
```

> I tre metodi differiscono solo per **quanto spesso viene ricalcolata la Jacobiana**, e questo determina l'ordine. Newton-Raphson usa $J$ esatta a ogni passo ed eredita la convergenza **quadratica**. Le corde congelano $J$ in $X^{(0)}$: la matrice di iterazione non si annulla nella soluzione, quindi la convergenza è solo **lineare**, con costante tanto più vicina a 1 quanto più $X^{(0)}$ è lontano. Shamanskii è il compromesso: convergenza **superlineare**, con un andamento a gradini nel grafico in corrispondenza dei ricalcoli.
>
> Il confronto va letto per **costo complessivo**, non per numero di iterazioni: le corde riutilizzano una sola fattorizzazione, Newton paga $O(n^3)$ a ogni passo.

## 3.6 Newton-Raphson per il minimo (solo teoria)

Cercare un minimo di $f:\mathbb{R}^n\to\mathbb{R}$ equivale a cercare uno **zero del gradiente**. Applicando NR a $F=\nabla f$, la Jacobiana di $F$ è l'**Hessiana** di $f$:

$$H(X^{(k)})\,s^{(k)} = -\nabla f(X^{(k)}), \qquad X^{(k+1)}=X^{(k)}+s^{(k)}$$

Si risolve un sistema lineare a ogni passo, **non** si inverte $H$. Serve $H$ definita positiva per garantire che sia un minimo e non una sella. Gradiente e Hessiana simbolici sono in `utilities.py`: `sym.derive_by_array(F, (x,y))` e `sym.hessian(F, (x,y))`.

---

# 4. Sistemi sovradeterminati (minimi quadrati)

## 4.1 Come si riconosce

$m > n$: più dati che incognite. Formulazioni tipiche: *"retta di regressione"*, *"costruire un modello"*, *"sistema lineare sovradeterminato"*, *"imporre il passaggio di una curva per $m$ punti"*.

⚠️ **Conta i punti.** Con 3 punti e 3 incognite il sistema è **quadrato**: non è minimi quadrati, è una fattorizzazione diretta (7 maggio 2025 lo chiede apposta).

## 4.2 La regola unica per costruire $A$

> **La colonna $j$ contiene la funzione che moltiplica l'incognita $j$, valutata su tutti i dati. Tutto ciò che non moltiplica un'incognita va nel termine noto, cambiato di segno.**

Tre casi:

**(a) base polinomiale** — $y = a_0+a_1x+\dots+a_nx^n$
```python
A = np.vander(x, increasing=True)[:, :n+1]
# grafico: np.polyval(np.flip(alpha), xv)     <-- flip perche' polyval vuole potenze DECRESCENTI
```

**(b) base non polinomiale** — es. $y = a + b\,e^{-x} + c\,e^{-2x}$
```python
A = np.column_stack([np.ones(m), np.exp(-x), np.exp(-2*x)])
# grafico: NON np.polyval! valuta l'espressione a mano:
modello = a + b*np.exp(-xv) + c*np.exp(-2*xv)
```

**(c) curva implicita** — es. $9x^2-4y^2+a_1x+a_2y+a_3=0$
```python
A = np.column_stack([x, y, np.ones(m)])     # SOLO le colonne delle incognite
b = -(9*x**2 - 4*y**2)                      # il resto a destra, cambiato di segno
```
⚠️ L'errore tipico è mettere anche $9x^2$ e $-4y^2$ come colonne: sono **numeri noti**, non incognite.

## 4.3 Quale metodo

| Situazione | Metodo |
|---|---|
| $K_2(A)$ contenuto | `eqnorm` (equazioni normali) |
| $K_2(A)$ medio-alto, rango pieno | **`qrLS`** ← la scelta di default |
| rango **non** massimo, oppure $K_2 > 1/\varepsilon$ | `SVDLS` |

**La frase sul perché non le equazioni normali** (T5):
> $K_2(A^TA)=K_2(A)^2$: le equazioni normali elevano al quadrato il condizionamento. QR lavora direttamente su $A$ e non lo peggiora.

## 4.4 Le funzioni e i buchi

**`eqnorm` — 2 marcatori ma ~6 buchi veri** (manca tutto il blocco Cholesky, e `x` non viene mai assegnato):
```python
G = A.T @ A
f = A.T @ b
L = spLin.cholesky(G, lower=True)
LT = L.T
z, flag = Lsolve(L, f)
if flag == 0:
    x, flag = Usolve(LT, z)
return x
```

**`qrLS` — 1 marcatore ma 3 buchi** (manca anche la riga della fattorizzazione):
```python
n = A.shape[1]
Q, R = spLin.qr(A)                          # <-- manca, e NON mode='economic'
h = Q.T @ b
x, flag = Usolve(R[:n, :n], h[:n])
residuo = np.linalg.norm(h[n:])**2          # <-- h[n:], NON h[:n]
```

> [!danger] Le due trappole di `qrLS`
> **`h[n:]` e non `h[:n]`.** Da $\|Ax-b\|^2=\|R_1x-h_1\|^2+\|h_2\|^2$, il minimo annulla il primo addendo e il residuo **è** $\|h_2\|^2=$ `h[n:]`. Segnale d'allarme: se la parabola ha residuo **maggiore** della retta, hai sbagliato indice.
> **Mai `mode='economic'`**: restituisce $Q$ ridotta, `h[n:]` è vuoto e il residuo esce **0.0** senza alcun errore.

**`SVDLS` — 5 marcatori ma 6 buchi** (`d1 = # to do` ha lo spazio e sfugge a Ctrl+F):
```python
d  = U.T @ b
d1 = d[0:k].reshape(k, 1)
s1 = s[0:k].reshape(k, 1)
c  = d1/s1
x  = V[:, 0:k] @ c
residuo = np.linalg.norm(d[k:])**2
```

## 4.5 Ricetta grafica

```python
plt.plot(x, y, 'ro', label='dati')
xv = np.linspace(x.min(), x.max(), 200)
plt.plot(xv, modello, 'b-', label='modello')
plt.legend(); plt.grid(True); plt.show()
```

Per una **curva implicita** serve la forma **parametrica**, che il testo fornisce:
```python
t = np.linspace(0, 2*np.pi, 300)              # circonferenza
xc = C[0] + r*np.cos(t);  yc = C[1] + r*np.sin(t)
```
⚠️ Aggiungi `plt.axis('equal')`, altrimenti una circonferenza sembra un'ellisse.
⚠️ Il **centro** di un'iperbole **non sta sulla curva**: è normale che il marcatore resti staccato dai rami.

## 4.6 La verifica che chiude l'esercizio

```python
print("residuo:", np.linalg.norm(A@alpha - b)**2)
# per una curva: le distanze dal centro devono essere tutte = r se il sistema e' quadrato,
# diverse se e' ai minimi quadrati
```

**La frase da 1 punto** (7 maggio): con $n$ punti e $n$ incognite la curva **passa esattamente per** i punti (residuo nullo); con più punti la curva li **approssima** nel senso dei minimi quadrati. È la distinzione interpolazione/minimi quadrati applicata a una curva.

---

# 5. Interpolazione

## 5.1 Come si riconosce

*"Implementare le function necessarie per costruire il polinomio interpolante di Lagrange"*, con nodi **assegnati** e la funzione $f$ **nota**.

⚠️ Se $f$ è nota, **non** scrivere "i dati sono sperimentali": è la giustificazione dei minimi quadrati, non dell'interpolazione. Sono due problemi diversi.

## 5.2 Le funzioni e i buchi

**`plagr(xnodi, j)` — 5 buchi**: coefficienti del $j$-esimo polinomio fondamentale
```python
xzeri = np.zeros_like(xnodi)
n = xnodi.size
if j == 0:
    xzeri = xnodi[1:n]
else:
    xzeri = np.append(xnodi[0:j], xnodi[j+1:n])
num = np.poly(xzeri)                 # polinomio con quegli zeri
den = np.polyval(num, xnodi[j])      # normalizzazione: L_j(x_j) = 1
p = num/den
return p
```

**`InterpL(x, y, xx)` — 3 buchi**:
```python
n = x.size;  m = xx.size
L = np.zeros((m, n))
for j in range(n):
    p = plagr(x, j)
    L[:, j] = np.polyval(p, xx)
pol = L @ y
return pol
```

L'idea: $p(x)=\sum_j y_j L_j(x)$, cioè `L @ y`. `plagr` costruisce $L_j$ come polinomio che ha per zeri **tutti i nodi tranne il $j$-esimo**, normalizzato perché valga 1 in $x_j$.

## 5.3 Ricetta grafica

```python
xx = np.linspace(a, b, 200)
pol = InterpL(xnodi, ynodi, xx)

plt.plot(xx, f(xx), 'b-', label='f(x)')
plt.plot(xx, pol, 'r--', label='polinomio interpolante')
plt.plot(xnodi, ynodi, 'ko', label='nodi')
plt.legend(); plt.grid(True); plt.show()

plt.figure()
plt.semilogy(xx, np.abs(f(xx) - pol), label='errore assoluto')
plt.legend(); plt.grid(True); plt.show()
```

## 5.4 Il teorema dell'errore — 3 punti, da scrivere per intero

> **Teorema.** Sia $f\in C^{n+1}[a,b]$ e sia $p_n$ il polinomio che interpola $f$ su $n+1$ nodi distinti. Allora per ogni $\bar x\in[a,b]$ **esiste** $\xi\in(a,b)$ tale che
> $$f(\bar x)-p_n(\bar x)=\frac{\omega_{n+1}(\bar x)}{(n+1)!}\,f^{(n+1)}(\xi), \qquad \omega_{n+1}(x)=\prod_{i=0}^{n}(x-x_i)$$

**I tre fattori da commentare:**
1. $\omega_{n+1}(\bar x)$ — dipende **solo dalla posizione dei nodi** rispetto a $\bar x$: si annulla nei nodi e cresce agli estremi con nodi equispaziati (fenomeno di Runge)
2. $(n+1)!$ — cresce molto rapidamente, tende a ridurre l'errore
3. $f^{(n+1)}(\xi)$ — dipende dalla funzione e **non è controllabile**

> [!warning] La direzione logica
> È un teorema di **esistenza**: $\xi$ **dipende da** $\bar x$ e **non si può scegliere**. Non si può dire "l'errore è nullo in $\bar x$ perché esiste un $\xi$ in cui la derivata si annulla": il ragionamento va nel verso opposto. Se l'errore è nullo in un punto, la spiegazione diretta è che lì $f$ e $p$ coincidono (per esempio perché entrambe si annullano).

## 5.5 Costante di Lebesgue — 3 punti

$$\Lambda_n = \max_{x\in[a,b]}\sum_{j=0}^{n}|L_j(x)|$$

```python
xx = np.linspace(a, b, 1000)
somma = np.zeros_like(xx)
for j in range(xnodi.size):
    somma += np.abs(np.polyval(plagr(xnodi, j), xx))
Lambda = np.max(somma)
```

**Il ruolo**: misura quanto l'interpolazione amplifica le perturbazioni sui dati — è l'indice di condizionamento del problema interpolatorio, $\|f-p_n\|_\infty \le (1+\Lambda_n)\,\|f-p^*_n\|_\infty$.

> [!warning] Dipende da DUE cose
> Dai **nodi** *e* dall'**intervallo** su cui si prende il massimo. Sugli stessi 3 nodi $\Lambda_n$ può valere $5/3$ su $[1,\,1.75]$ e $29$ su $[0,2]$. **Usa l'intervallo dichiarato dal testo**, e dichiara quale hai usato.

Asintotica: $\sim\frac{2^{n+1}}{en\log n}$ con nodi equispaziati (esplode), $\sim\frac{2}{\pi}\log n + 0.9625$ con nodi di Chebyshev (cresce lentamente). È il motivo per cui si preferiscono i nodi di Chebyshev, addensati agli estremi.

---

# 6. Stabilità e condizionamento

## 6.1 Come si riconosce quale dei due

| Il testo dice… | È… | Devi derivare |
|---|---|---|
| "perturbare i dati", "ricavare l'indice di condizionamento" | **condizionamento** — proprietà del **problema** | $K=\left\vert\frac{xf'(x)}{f(x)}\right\vert$ |
| "formula più stabile", "cancellazione", "spacing" | **stabilità** — proprietà dell'**algoritmo** | soglia con lo spacing + riscrittura |

Nel primo caso l'errore nasce **dai dati** e nessun algoritmo ti salva. Nel secondo il problema è ben condizionato e l'errore lo introduce **la formula**, quindi cambiando formula sparisce.

## 6.2 Lo schema in 6 punti — identico in tutti e cinque i testi

```python
k = np.arange(1, 17)

# 1. formula ingenua
xk  = 1 + 10.0**(-k)
val = 1/(xk - 1)

# 2. riferimento in ALTA PRECISIONE (sympy)
rif = np.array([float(sym.N(1/(1 + sym.Rational(1,10**int(kk)) - 1), 40)) for kk in k])

# 3. errore relativo + grafico semilogy
err = np.abs(val - rif)/np.abs(rif)
plt.semilogy(k, err, 'r-o'); plt.grid(True); plt.show()

# 4. la derivazione (4 punti)  --> vedi sotto
# 5. formula stabile (2 punti) --> vedi sotto
# 6. confronto dei due errori sullo stesso grafico
```

⚠️ Nel punto 2 usa `sym.Rational(1, 10**k)` e **non** `10.0**-k`: altrimenti il "valore vero" è già un float e non è più un riferimento.

## 6.3 Ricavare $K$ — la derivazione (4 punti)

> Sviluppando in serie di Taylor al primo ordine, $f(x+\delta x)=f(x)+\delta x\,f'(x)+o(\delta x)$, da cui
> $$f(\tilde x)-f(x)\approx(\tilde x-x)f'(x)$$
> Dividendo per $f(x)$ si passa all'errore relativo sul risultato, e **moltiplicando e dividendo per $x$** compare l'errore relativo sui dati:
> $$\left|\frac{f(\tilde x)-f(x)}{f(x)}\right| \approx \underbrace{\left|\frac{x f'(x)}{f(x)}\right|}_{K}\cdot\left|\frac{\tilde x-x}{x}\right|$$

**Il passaggio che quasi tutti saltano è l'ultimo**: senza moltiplicare e dividere per $x$ ottieni un legame con l'errore **assoluto** sui dati, che non è l'indice di condizionamento. È lì che si perde il punto.

**Regola generale da aggiungere**: $f(x)$ sta al denominatore, quindi **valutare una funzione vicino a un suo zero è intrinsecamente mal condizionato**.

Verifica sperimentale:
```python
delta = 1e-12
xt = xk*(1 + delta)
amplificazione = (np.abs(f(xt)-f(xk))/np.abs(f(xk)))/delta   # deve essere <= K
```
⚠️ Per $k$ molto grande l'amplificazione osservata resta molto **sotto** $K$, perché il dato perturbato non è più rappresentabile distintamente. Commentalo: è il tipo di osservazione che il punto "commentare i risultati" premia.

## 6.4 Cancellazione e spacing (4 punti)

> La cancellazione si verifica sottraendo **due numeri quasi uguali**: le cifre significative comuni si elidono e il risultato conserva solo le poche cifre in cui differivano, quindi l'errore relativo viene amplificato enormemente.

**Il criterio con lo spacing**: `np.spacing(y)` è la distanza fra $y$ e il numero di macchina successivo, $\approx\varepsilon|y|$ con $\varepsilon=2.22\cdot10^{-16}$. La cancellazione diventa catastrofica quando

$$\frac{|\text{risultato}|}{|\text{termine sottratto}|}\lesssim\varepsilon_{mach}$$

**I due casi ricorrenti, con soglie verificate:**

| Caso | dove cancella | soglia teorica | collasso osservato |
|---|---|---|---|
| $x^2-2kx+1=0$, radice $k-\sqrt{k^2-1}$ | $\sqrt{k^2-1}\approx k$ | $k\gtrsim4.7\cdot10^7$ | $k=10^8$ |
| $1-\cos x$, $x$ piccolo | $\cos x\to1$ | $x\lesssim2.1\cdot10^{-8}$ | $x=10^{-8}$ |

## 6.5 La formula stabile (2 punti)

> Si riscrive l'espressione in forma **matematicamente equivalente** eliminando la sottrazione fra numeri vicini.

| Caso | formula stabile | come ci si arriva |
|---|---|---|
| radice piccola di $ax^2+bx+c$ | $x_-=\frac{1}{k+\sqrt{k^2-1}}$ | razionalizzazione, o dal prodotto delle radici $x_+x_-=c/a$ |
| $1-\cos x$ | $2\sin^2\!\big(\frac x2\big)$ | identità di bisezione |

## 6.6 La frase che chiude

> Il problema è **ben condizionato**, ma l'algoritmo basato sulla formula diretta è **instabile**, perché introduce una sottrazione fra numeri quasi uguali. La formula alternativa è matematicamente equivalente ma numericamente stabile: essendo il problema lo stesso, tutta la differenza osservata negli errori è imputabile all'**algoritmo**, non al condizionamento.

---

# 7. Checklist d'esame

## Nei primi 5 minuti

1. Scrivi la **riga di import** completa
2. Apri `utilities.py` in una finestra a parte
3. Leggi **tutti** i punti di **tutti** gli esercizi e annota i punteggi
4. Decidi l'ordine: **prima quello che sai fare**

## Mentre svolgi

- Le **giustificazioni vanno in celle markdown**, non dentro stringhe `"""..."""` nel codice
- Ogni giustificazione ha tre parti: **enunciato del teorema → verifica delle ipotesi sui tuoi numeri → conclusione**. Il terzo passo è quello che salti.
- Se un'ipotesi cade, dì esplicitamente **cosa non puoi più concludere**
- Dopo ogni risoluzione, **una riga di verifica**: `np.linalg.norm(A@x - b)`

## Prima di consegnare

- [ ] **Kernel → Restart & Run All** — output stantii e `NameError` su variabili definite più sotto sono il rischio numero uno
- [ ] Rileggi ogni `if`: **su quale variabile sto decidendo?** (è il tuo pattern d'errore dominante)
- [ ] Ogni `plt.plot` con etichetta usa `label=`, mai il 4° argomento posizionale
- [ ] Controlla le forme: `print(A.shape, b.shape, x0.shape)`

## Gestione del tempo

Nei testi di condizionamento/stabilità **più della metà dei punti è in due derivazioni su carta**. Nei sistemi lineari, la scelta del metodo vale poco ma **se sbagli quella perdi anche tutti i punti a valle**. Regola: **prima la giustificazione, poi il codice** — la giustificazione si scrive in cinque minuti e vale di più.
