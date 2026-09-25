# 00c — Python e grafici: guida essenziale per l'esame

> [!info] Come si usa questa nota
> Non è una nota da **studiare**: è una nota da **usare mentre scrivi**.
> - Le Parti 1–5 le leggi una volta e poi ci torni solo quando qualcosa non funziona.
> - La **[[00c Python e grafici - guida essenziale per l'esame#Parte 6 — I grafici|Parte 6]] (grafici)** e la **[[00c Python e grafici - guida essenziale per l'esame#Parte 9 — Il cheat sheet da riscrivere a memoria|Parte 9]] (cheat sheet)** vanno riscritte a mano, a memoria, finché non escono da sole.
> - La **[[00c Python e grafici - guida essenziale per l'esame#Parte 10 — Il programma "foglio bianco"|Parte 10]]** è il programma operativo per uscire dal foglio bianco.
>
> Data: 30 agosto 2026 · Esame: venerdì 11 settembre 2026

---

## Parte 0 — Delimitiamo il problema: quanto Python ti serve davvero

La paura nasce da un'idea sbagliata: *"non so Python"*. Ma all'esame non ti serve **Python**, ti serve **un dialetto di circa 40 comandi**. Li ho contati: sono quelli in questa nota.

### Cosa ti danno / cosa scrivi tu

| Livello | Chi lo scrive | Difficoltà reale |
|---|---|---|
| `Lsolve`, `Usolve` (`SolveTriangular.py`) | **ti sono dati** | zero |
| Il corpo delle funzioni dello scheletro (`jacobi`, `qrLS`, …) | tu, ma **con struttura, commenti e nomi già scritti** | quella che già gestisci |
| Lo **script di prova**: costruire `A` e `b`, chiamare la funzione, stampare, **disegnare** | **tu, da zero, su foglio bianco** | ⚠️ **è qui che sei scoperto** |

**Conclusione operativa:** non devi "imparare Python". Devi diventare fluente su **una pagina di codice**: quella che va *sopra* e *sotto* le funzioni dello scheletro. È molto meno di quello che pensi, ed è un lavoro finito, non infinito.

---

### Dove si scrivono le giustificazioni (non con `print`)

Il testo d'esame e' un **notebook**, e in un notebook il testo discorsivo va in una **cella Markdown** — non dentro `print`, non dentro `#`.

| Tasti (in `Esc`, modalita' comando) | Effetto |
|---|---|
| `b` | nuova cella **sotto** · `a` sopra |
| `m` | trasforma la cella in **Markdown** · `y` la riporta a codice |
| `Ctrl`/`Cmd` + `Invio` | esegue e **rende** il testo formattato |
| `Maiusc` + `Invio` | esegue e passa alla cella successiva |

Dentro una cella Markdown funziona tutto quello che serve:

```markdown
### Esercizio 1 — scelta del metodo

$A_1$ e' **simmetrica** e ha tutti gli autovalori positivi, quindi **definita positiva**:
si applica la fattorizzazione di **Cholesky**, l'unica del corso con stabilita' forte.

$$K_2(A_1) = 2.4 \quad\Longrightarrow\quad \text{ben condizionata}$$
```

Le formule si scrivono con `$...$` in riga e `$$...$$` centrate: **usale**. La richiesta ricorrente e' *"giustificare teoricamente, richiamando il teorema opportuno"*, e una formula scritta bene vale piu' di tre righe di parole.

> [!tip] Il ritmo giusto durante la prova
> **Markdown → codice → Markdown**: prima dici cosa stai per fare e perche', poi lo fai, poi commenti il risultato. Le celle di testo sono la parte che il correttore legge per assegnare i punti di giustificazione — che in ogni prova valgono quanto o piu' del codice.

Se proprio ti serve del testo lungo **dentro** una cella di codice (per esempio per non spezzare il flusso), la via pulita e' un commento a blocco con `#` riga per riga: una stringa fra triple virgolette funziona, ma viene mostrata solo se e' l'ultima espressione della cella, quindi e' inaffidabile.

---

## Parte 1 — Le shape: qui nasce il 90% dei tuoi errori

### 1.1 Le tre forme che devi distinguere

```python
import numpy as np

a = np.array([1., 2., 3.])                 # shape (3,)   -> vettore "piatto", 1 indice
b = np.array([1., 2., 3.]).reshape(3, 1)   # shape (3,1)  -> vettore COLONNA, matrice
c = np.array([[1., 2., 3.]])               # shape (1,3)  -> vettore RIGA, matrice
```

Numericamente contengono la stessa cosa. Per numpy sono **tre oggetti diversi** e si comportano in modo diverso.

**Regola del corso:** nel laboratorio i termini noti e le soluzioni sono quasi sempre **colonne `(n,1)`**, perché le funzioni fanno `A@x` e vogliono un risultato colonna. Quindi:

```python
b = np.sum(A, axis=1).reshape(n, 1)    # ← il .reshape NON è decorativo
x0 = np.zeros((n, 1))                  # ← doppia parentesi: è una TUPLA di dimensioni
```

> [!warning] `np.zeros(n)` dà `(n,)`, `np.zeros((n,1))` dà una colonna. Un carattere di differenza, due comportamenti diversi.

### 1.2 I convertitori (tutti quelli che ti servono)

| Comando | Da | A | Quando lo usi |
|---|---|---|---|
| `v.reshape(n,1)` | `(n,)` | `(n,1)` | prima di passare `b` a una funzione |
| `v.reshape(-1,1)` | qualsiasi | colonna | `-1` = "calcolalo tu" |
| `M.ravel()` | `(n,1)` | `(n,)` | per disegnare, per `print` leggibile |
| `M.flatten()` | idem | `(n,)` | come `ravel` ma fa una **copia** |
| `M.squeeze()` | `(n,1)` | `(n,)` | toglie tutte le dimensioni di lunghezza 1 |
| `M.item()` | `(1,1)` | **numero** | quando ti serve uno scalare vero |
| `float(M)` | `(1,1)` | numero | ⚠️ deprecato in numpy recente, **usa `.item()`** |

### 1.3 Il broadcasting silenzioso — l'errore che NON dà errore

Questo è il motivo per cui devi controllare le shape: numpy spesso **non protesta**, inventa una matrice.

```python
r = np.array([1., 2., 3.]).reshape(3,1)   # colonna (3,1)
s = np.array([1., 2., 3.])                # piatto  (3,)

r - s        # ⚠️ NON è un vettore: è una matrice (3,3)!
```

Numpy allinea le shape da destra, allunga le dimensioni di lunghezza 1, e ti restituisce una **(3,3)** senza una parola di avvertimento. Poi `np.linalg.norm(...)` funziona lo stesso, l'errore "converge", e il risultato è sbagliato.

> [!danger] Sintomo tipico all'esame
> Il codice **gira**, stampa un errore piccolissimo (`1e-11`), e la soluzione è sbagliata. Ti è già successo due volte: `r = r + alpha*p` invece di `alpha*Ap`, e `np.tril(A,1)` invece di `np.triu(A,1)`. **Nessuno dei due dà un messaggio d'errore.**

### 1.4 La regola operativa (mettila in muscolo)

```python
print(A.shape, b.shape, x0.shape)   # PRIMA di chiamare qualunque funzione
print(X.shape, Y.shape, Z.shape)    # PRIMA di qualunque contour / plot_surface
```

Costa 2 secondi e ti salva 20 minuti. All'esame **scrivila davvero**, poi la cancelli.

---

## Parte 2 — numpy: il vocabolario minimo

### 2.1 Costruire array

```python
np.array([[1.,2.],[3.,4.]])     # da lista di liste
np.zeros((n,1));  np.ones((m,n));  np.eye(n)          # eye = identità
np.linspace(a, b, N)            # N punti da a a b, ESTREMI INCLUSI  ← per i grafici
np.arange(a, b, passo)          # da a a b ESCLUSO, con passo        ← per i contatori
np.random.rand(n,n)             # uniformi in [0,1)
```

> [!warning] `np.arange(1, 1, 0.1)` restituisce un array **vuoto**, senza errore. Risultato: grafico bianco. Per i grafici usa **sempre `linspace`**.

### 2.2 Indicizzare e affettare

```python
A[i, j]          # elemento
A[i, :]          # riga i        -> shape (n,)
A[:, j]          # colonna j     -> shape (n,)   ⚠️ diventa PIATTA
A[:, j:j+1]      # colonna j     -> shape (n,1)  ← se la vuoi colonna
A[0:k, :]        # prime k righe
A[k:, :]         # dalla riga k in poi
v[1:n]           # dal secondo alla fine
traj[:, 0]       # tutte le x di una traiettoria  ← serve per i grafici
```

Gli indici partono da **0** e l'estremo destro è **escluso**: `A[0:3]` sono le righe 0,1,2.

### 2.3 Operazioni: `@` contro `*`

| Scrivi | Significa |
|---|---|
| `A @ B` oppure `np.dot(A,B)` | prodotto **matriciale** (righe per colonne) |
| `A * B` | prodotto **elemento per elemento** ⚠️ |
| `A.T` | trasposta |
| `A ** 2` | ogni elemento al quadrato (**non** $A^2$) |
| `r.T @ r` | prodotto scalare → risultato `(1,1)`, non uno scalare! |

```python
alpha = ((r.T @ r) / (r.T @ (A @ r))).item()   # ← .item() per avere un numero
```

### 2.4 `np.diag` ha due comportamenti opposti

```python
d = np.diag(A)      # A matrice -> ESTRAE la diagonale, shape (n,)
D = np.diag(d)      # d vettore -> COSTRUISCE la matrice diagonale (n,n)
```

Nel corso li usi entrambi nella stessa riga:
```python
d = np.diag(A);  D = np.diag(d)
```

Triangolari (metodi iterativi, $A = D + E + F$):
```python
E = np.tril(A, -1)    # strettamente inferiore  (-1 = sotto la diagonale)
F = np.triu(A,  1)    # strettamente superiore  (+1 = sopra la diagonale)
np.tril(A)            # inferiore diagonale INCLUSA (offset 0)
```

> [!danger] `np.tril(A, 1)` non è un errore di sintassi: è la triangolare **inferiore più una sopradiagonale**. Gira e sbaglia. Memorizza: **tri-L = Low = giù**, **tri-U = Up = su**.

### 2.5 Riduzioni e `axis`

```python
np.sum(A, axis=1)    # somma lungo le COLONNE -> un numero per RIGA   -> shape (n,)
np.sum(A, axis=0)    # somma lungo le RIGHE   -> un numero per COLONNA
np.max(np.abs(v))    # massimo in modulo
np.count_nonzero(s > soglia)     # quanti valori singolari sopra soglia (rango numerico)
```

**Come ricordare `axis`:** `axis=k` è l'indice che **sparisce**. `A` è `(n,n)`; con `axis=1` sparisce il secondo indice e resta `(n,)`, cioè un valore per riga.

Uso tipico: costruire `b` in modo che la soluzione esatta sia $x = (1,1,\dots,1)^T$:
```python
b = np.sum(A, axis=1).reshape(n, 1)     # perché  A @ [1,...,1]^T = somme delle righe
```

### 2.6 `np.linalg` — le sei che usi davvero

```python
np.linalg.norm(v)              # norma 2 di un vettore / Frobenius di una matrice
np.linalg.norm(v, np.inf)      # norma infinito
np.linalg.norm(A, 1)           # norma 1 (matrice)
np.linalg.cond(A)              # numero di condizionamento in norma 2
np.linalg.eigvals(T)           # autovalori (complessi in generale)
np.linalg.solve(A, b)          # soluzione "di riferimento" per confrontare
np.linalg.inv(A)               # inversa — solo per costruire T, mai per risolvere
np.linalg.det(A)               # determinante
```

Raggio spettrale (ti serve in ogni metodo iterativo):
```python
raggiospettrale = np.max(np.abs(np.linalg.eigvals(T)))
```

### 2.7 Polinomi (interpolazione)

```python
np.poly(radici)         # dai ZERI ai COEFFICIENTI   -> serve in plagr
np.polyval(p, xx)       # valuta il polinomio p nei punti xx
np.vander(x, n+1)       # matrice di Vandermonde
np.polyfit(x, y, grado) # minimi quadrati polinomiali (comodo per confronti)
```

### 2.8 `copy()` — la trappola dei riferimenti

```python
x0 = x        # ⚠️ NON copia: x0 e x sono lo STESSO array
x0 = x.copy() # ✅ copia vera
```

Nel ciclo iterativo, senza `.copy()` l'errore risulta sempre 0 e il metodo "converge" alla prima iterazione. Stesso discorso quando accumuli la traiettoria:
```python
traiettoria.append(x.copy())     # senza copy() finisci con N volte l'ultimo punto
```

---

## Parte 3 — scipy.linalg: le fattorizzazioni e le loro trappole

```python
import scipy.linalg as spLin
from scipy.linalg import lu, cholesky, qr, svd, hilbert
```

| Chiamata | Restituisce | Trappola |
|---|---|---|
| `P, L, U = lu(A)` | `A = P @ L @ U` | ⚠️ Il `P` restituito è il **$P^T$ della teoria**: in teoria $PA = LU$. Per questo il prof scrive `PT, L, U = lu(A)` e poi `P = PT.T`. |
| `L = cholesky(G, lower=True)` | $G = LL^T$ | senza `lower=True` ti dà $R$ **triangolare superiore** |
| `Q, R = qr(A)` | $A = QR$ | `R` è `(m,n)`: prendi `R[0:n,:]` e `h[0:n]` |
| `U, s, VT = svd(A)` | `s` è un **vettore**, non una matrice; l'ultimo output è $V^T$ | `V = VT.T`, sempre |
| `hilbert(n)` | matrice di Hilbert | serve per gli esempi mal condizionati |

> [!note] Il `P = PT.copy()` della soluzione del prof
> Nella Nota 1 del Lab 9 è **sbagliato** (funziona solo se la permutazione è simmetrica, come nel 2×2). Sul 4×4 dà un risultato falso. La riga giusta è `P = PT.T`.

Tolleranza sul rango numerico (in `SVDLS`):
```python
thresh = np.spacing(1) * m * s[0]     # np.spacing(1) = epsilon macchina
k = np.count_nonzero(s > thresh)      # rango numerico
```

---

## Parte 4 — sympy: solo il minimo che serve (metodi di Newton / minimo)

L'idea chiave è la distinzione **simbolico ↔ numerico**:

- `_sym` = una **formula**, un oggetto sympy. Non si può disegnare, non si può mettere in un array.
- `_num` = una **funzione Python** che accetta numeri e restituisce numeri. Questa si disegna.

Il ponte fra i due è `lambdify`.

```python
import sympy as sym
from sympy.utilities.lambdify import lambdify

x, y = sym.symbols('x y')                    # 1) le variabili simboliche

f_sym = (x**2 - y)**2 + (1 - x)**2           # 2) la funzione, SOLO con x e y simbolici

grad_sym = sym.derive_by_array(f_sym, (x, y))   # 3) gradiente simbolico
H_sym    = sym.hessian(f_sym, (x, y))           # 4) hessiana simbolica

f_num  = lambdify((x, y), f_sym,  np)           # 5) versioni numeriche
fx_num = lambdify((x, y), grad_sym[0], np)
fy_num = lambdify((x, y), grad_sym[1], np)
```

> [!danger] I tre errori che hai già fatto qui
> 1. Passare una **`lambda`** a `derive_by_array` → `SympifyError`. Deve ricevere un'espressione simbolica, non una funzione Python.
> 2. Scrivere `x**2 - y**2` invece di `(x**2 - y)**2` → nessun errore, risultato sbagliato.
> 3. Usare `x`, `y` numpy al posto di `x_sym`, `y_sym` dentro la formula → **silenzioso**, ti costruisce un array e non una formula.
> 4. `0.001(...)` invece di `0.001*(...)` → `TypeError: 'float' object is not callable`.

Valutare in un punto senza `lambdify`:
```python
f_sym.subs({x: 1.0, y: 2.0})              # restituisce un oggetto sympy
float(f_sym.subs({x: 1.0, y: 2.0}))       # → numero
```

**Verifica del minimo** (dopo Newton): calcola l'hessiana **nel punto trovato**, poi
```python
np.linalg.eigvals(H_val)     # tutti > 0 → minimo;  segni misti → sella
```

---

## Parte 5 — Il pattern unico di ogni funzione iterativa

Tutte le funzioni del corso — Jacobi, Gauss-Seidel, SOR, gradiente, gradiente coniugato, Newton — hanno **lo stesso scheletro**. Impararlo una volta vale per tutte:

```python
it = 0
errore = 1000                 # grande, per entrare nel while
er_vet = []                   # lista degli errori, per il grafico

while it <= it_max and errore >= toll:
    # --- 1. calcola il nuovo x a partire da x0 (QUI cambia il metodo) ---
    x = ...
    # --- 2. misura l'errore relativo ---
    errore = np.linalg.norm(x - x0) / np.linalg.norm(x)
    # --- 3. registra e aggiorna ---
    er_vet.append(errore)
    x0 = x.copy()
    it = it + 1

return x, it, er_vet
```

Le quattro cose che sbagli in questo blocco e come accorgertene:

| Errore | Sintomo |
|---|---|
| manca il `:` dopo `while` | `SyntaxError` (facile) |
| manca `.copy()` | converge subito, errore 0 |
| manca `er_vet.append` | grafico vuoto |
| manca il `return` | `cannot unpack non-iterable NoneType object` |

---

## Parte 6 — I grafici

> Questa è la parte che ti spaventa. In realtà i grafici di questo esame sono **quattro**, sempre gli stessi. Impari quattro ricette e hai finito.

![[quattro_ricette.png]]

### 6.0 Il modello mentale

Matplotlib non "capisce" la matematica: sa fare **una cosa sola**, unire punti. Tu gli dai due array **della stessa lunghezza** (le x e le y) e lui li disegna. Tutto il resto è decorazione.

```python
import matplotlib.pyplot as plt
```

### 6.1 L'anatomia di una figura

```python
plt.figure(figsize=(8,5))          # opzionale: nuova figura
plt.plot(xx, yy, 'b-', label='f(x)')
plt.plot(x,  y,  'ro', label='nodi')
plt.xlabel('x')
plt.ylabel('y')
plt.title('Interpolazione di Lagrange')
plt.legend()                        # mostra le label  ← senza questo le label non si vedono
plt.grid(True)
plt.show()                          # ← chiude la figura: quello che disegni dopo va in una NUOVA figura
```

> [!tip] `plt.show()` è il separatore
> Tutti i `plot` fra due `show()` finiscono **nello stesso grafico**. Se vuoi due figure distinte, metti `plt.show()` in mezzo. Se vuoi sovrapporre due curve, **non** metterlo in mezzo.

### 6.2 La stringa di formato, decomposta

`'ro-'` non è magia: sono tre pezzi indipendenti, in qualunque ordine.

| Colore | | Marker | | Linea | |
|---|---|---|---|---|---|
| `b` blu | `r` rosso | `o` cerchio | `s` quadrato | `-` continua | `--` tratteggiata |
| `g` verde | `k` nero | `*` stella | `^` triangolo | `:` puntini | `-.` tratto-punto |
| `m` magenta | `c` ciano | `.` punto | `x` croce | *(niente)* | solo marker |

Quindi: `'ro'` = pallini rossi senza linea · `'b-'` = linea blu senza pallini · `'ro-'` = pallini rossi uniti da una linea.

Alternativa esplicita (più leggibile se ti confondi):
```python
plt.plot(x, y, color='red', marker='o', linestyle='-')
```

### 6.3 RICETTA 1 — Curva + nodi + polinomio interpolante

È il grafico dell'interpolazione (Runge, Chebyshev, Lab 12 maggio).

```python
# 1. i nodi (pochi) e i valori nei nodi
x = np.linspace(-5, 5, n+1)
y = f(x)

# 2. la griglia fitta per disegnare le curve (SEMPRE più fitta dei nodi)
xx = np.linspace(-5, 5, 200)

# 3. il polinomio interpolante valutato sulla griglia fitta
pol = InterpL(x, y, xx)

# 4. il disegno
plt.plot(xx, f(xx), 'b-',  label='f(x)')
plt.plot(xx, pol,   'g--', label='p_n(x)')
plt.plot(x,  y,     'ro',  label='nodi')
plt.legend(); plt.title(f'Interpolazione con n = {n}'); plt.show()

# 5. l'errore, se richiesto
errore = np.max(np.abs(f(xx) - pol))
print('errore massimo =', errore)
```

> [!note] Le due griglie
> `x` (i nodi, ~5–20 punti) e `xx` (la griglia di disegno, ~100–500 punti) sono **due cose diverse**. Confonderle è l'errore n.1 di questo grafico.

### 6.4 RICETTA 2 — L'errore per iterazione (semilogy)

È il grafico dei metodi iterativi e di discesa. **Va sempre in scala semilogaritmica.**

![[anatomia_errore.png]]

```python
x, it, er_vet = jacobi(A, b, x0, toll, it_max)

plt.semilogy(np.arange(it), er_vet, 'bo-', label='Jacobi')
plt.xlabel('iterazione k')
plt.ylabel('errore relativo')
plt.title('Confronto della velocità di convergenza')
plt.legend(); plt.grid(True); plt.show()
```

**Perché semilogy e non plot.** L'errore va come $\|e^{(k)}\| \approx C\rho^k$. Prendendo il logaritmo:
$$\log \|e^{(k)}\| \approx \log C + k \log \rho$$
cioè **una retta** di pendenza $\log\rho$. In scala lineare vedresti solo una curva schiacciata sull'asse; in semilogy leggi direttamente il raggio spettrale: **più ripida = più veloce**.

> [!warning] L'ascissa
> `er_vet` ha `it` elementi. Se scrivi `np.arange(1, it)` hai un elemento in meno e matplotlib ti dà
> `ValueError: x and y must have same first dimension`.
> Le due scritture sicure: `np.arange(it)` oppure `np.arange(1, it+1)` (quest'ultima se vuoi partire da 1).
> In caso di dubbio: `print(len(er_vet), it)`.

Confronto fra due metodi nella stessa figura — basta **non** mettere `show()` in mezzo:
```python
plt.semilogy(np.arange(itG),  er_G,  'bo-', label='gradiente')
plt.semilogy(np.arange(itCG), er_CG, 'rs-', label='gradiente coniugato')
plt.legend(); plt.show()
```

### 6.5 RICETTA 3 — Curve di livello + traiettoria

È il grafico dei metodi di discesa (zig-zag) e di Newton per il minimo. Qui serve `meshgrid`, che è l'unico concetto un po' nuovo.

![[anatomia_meshgrid.png]]

**Cosa fa `meshgrid`:** prende due vettori (le x e le y possibili) e restituisce **due matrici della stessa forma**, che insieme elencano tutte le coppie $(x,y)$ della griglia. `Z` deve avere **esattamente la stessa forma** di `X` e `Y`.

```python
# 1. la griglia
xg = np.linspace(-1.5, 1.5, 200)
yg = np.linspace(-1.5, 1.5, 200)
X, Y = np.meshgrid(xg, yg)

# 2. la funzione valutata su TUTTA la griglia (Z deve essere una MATRICE)
Z = 0.5*(A[0,0]*X**2 + 2*A[0,1]*X*Y + A[1,1]*Y**2) - (b[0,0]*X + b[1,0]*Y)

print(X.shape, Y.shape, Z.shape)      # ← devono essere identiche

# 3. le curve di livello
plt.contour(X, Y, Z, levels=np.linspace(Z.min(), Z.max(), 30))

# 4. la traiettoria sopra le curve
plt.plot(traiettoria[:,0], traiettoria[:,1], 'ro-')
plt.xlabel('x1'); plt.ylabel('x2'); plt.title('Metodo del gradiente'); plt.show()
```

**Come accumulare la traiettoria** (se la funzione non te la restituisce):
```python
traiettoria = [x0.ravel().copy()]
# ... dentro il ciclo:
traiettoria.append(x.ravel().copy())
# ... dopo il ciclo:
traiettoria = np.array(traiettoria)     # -> shape (numero_iterate, 2)
```
Poi `traiettoria[:,0]` sono tutte le prime componenti e `traiettoria[:,1]` tutte le seconde.

**Scegliere i `levels`** — è la parte che rende il grafico leggibile o inutile:

| Situazione | `levels` |
|---|---|
| Vedere la forma generale | `np.linspace(Z.min(), Z.max(), 30)` |
| Funzione con variazioni enormi (tipo Rosenbrock) | `np.logspace(-2, 3, 30)` (livelli logaritmici) |
| **Vedere il percorso del metodo** (versioni `_CL`) | un livello per iterata: `levels = f(traiettoria)` ordinati |
| Trovare gli zeri di una funzione (Lab 8 Es 1) | `levels=[0]` |

> [!danger] `levels=[0]` è giusto solo per l'Esercizio 1 del Lab 8
> Lì cerchi dove due funzioni si annullano. Nell'Esercizio 2 (minimo) con `levels=[0]` ottieni una figura quasi vuota: ti servono molti livelli.

**Gli errori tipici di questa ricetta:**

| Messaggio | Causa |
|---|---|
| `AttributeError: 'Add' object has no attribute 'ndim'` | hai passato la funzione **simbolica** invece di quella numerica |
| `TypeError: Input z must be 2D, not 0D` | `Z` è uno scalare: hai valutato in un punto invece che sulla griglia |
| `ValueError: setting an array element with a sequence` | dentro il ciclo `Z[i,j] = f(...)` ma `f` restituisce un array `(1,1)` → aggiungi `.item()` **alla chiamata**, non modificare `f` |
| grafico bianco | `arange` con estremi uguali, oppure `levels` fuori dall'intervallo dei valori di `Z` |

### 6.6 RICETTA 4 — Superficie 3D

```python
fig = plt.figure(figsize=(8,6))
ax = fig.add_subplot(1, 1, 1, projection='3d')     # ← la riga da ricordare
ax.plot_surface(X, Y, Z, cmap='viridis')
ax.set_xlabel('x'); ax.set_ylabel('y'); ax.set_zlabel('f(x,y)')
plt.show()
```

`X`, `Y`, `Z` sono gli stessi della Ricetta 3. La superficie è **decorativa**: se hai poco tempo all'esame, fai le curve di livello (che servono a interpretare) e salta il 3D.

### 6.7 Quale scala

| Comando | Quando |
|---|---|
| `plt.plot` | funzioni, nodi, traiettorie |
| `plt.semilogy` | **errori per iterazione** (decadimento esponenziale) |
| `plt.loglog` | errore in funzione di $n$ o di $h$ (decadimento polinomiale: la pendenza è l'**ordine**) |
| `plt.contour` | curve di livello |

### 6.8 Le tre righe che salvano un grafico all'esame

```python
plt.legend()      # se hai messo delle label
plt.grid(True)
plt.title('...')  # dice al correttore cosa stai mostrando
```
Costano 3 secondi e in una prova con punteggio a commento valgono.

---

## Parte 7 — Catalogo degli errori: messaggio → causa → rimedio

### 7.1 Errori che si vedono

| Messaggio | Causa reale | Rimedio |
|---|---|---|
| `SyntaxError: invalid syntax` | manca il `:` dopo `if/while/for/def` | guarda la riga **sopra** a quella indicata |
| `IndentationError` | rientri incoerenti (tab vs spazi) | riscrivi il blocco con 4 spazi |
| `NameError: name 'x' is not defined` | variabile mai creata, o `import` con `as` diverso | controlla gli import in cima |
| `ModuleNotFoundError` | il file `.py` non è nella stessa cartella | metti `SolveTriangular.py` accanto al notebook |
| `TypeError: cannot unpack non-iterable NoneType` | manca il `return` nella funzione | ⚠️ *anche* `return None,None,None` si spacchetta: se non dà errore ma tutto è `None`, è quello |
| `ValueError: x and y must have same first dimension` | ascissa e ordinata di lunghezza diversa | `print(len(a), len(b))` |
| `ValueError: setting an array element with a sequence` | assegni un array `(1,1)` a una casella | `.item()` |
| `TypeError: 'float' object is not callable` | manca un `*`: hai scritto `0.001(x)` | metti l'asterisco |
| `numpy.linalg.LinAlgError: Singular matrix` | matrice singolare | è **informazione**, non un bug: commentala |
| `AttributeError: 'Add' object has no attribute 'ndim'` | oggetto sympy passato a matplotlib/numpy | `lambdify` |

### 7.2 Errori che NON si vedono (i pericolosi)

| Errore | Effetto | Come lo scopri |
|---|---|---|
| `np.tril(A,1)` invece di `np.triu(A,1)` | $F$ sbagliata, metodo converge a un valore sbagliato | `np.allclose(A, D+E+F)` |
| `r = r + alpha*p` invece di `alpha*A@p` | il residuo decade da solo: errore `1e-11` ma soluzione sbagliata | confronta con `np.linalg.solve` |
| `x0 = x` senza `.copy()` | errore 0 alla prima iterazione | `it` sospettosamente = 1 |
| `arange(1,1,0.1)` | array vuoto → grafico bianco | `print(len(...))` |
| colonna − vettore piatto | matrice `(n,n)` invece di vettore | `print(shape)` |
| `P` invece di `P.T` da `lu` | soluzione sbagliata solo su matrici > 2×2 | `np.allclose(P@A, L@U)` |

---

## Parte 8 — Le sei verifiche automatiche

Impara a **non fidarti** del fatto che il codice giri. Dopo ogni esercizio, una di queste:

```python
np.allclose(P @ A, L @ U)                    # LU con pivoting: deve essere True
np.allclose(A, D + E + F)                    # splitting corretto
np.allclose(L @ L.T, G)                      # Cholesky
np.linalg.norm(x - np.linalg.solve(A,b))     # confronto con la soluzione "vera"
# SOR con omega = 1 deve dare ESATTAMENTE Gauss-Seidel
# Gradiente coniugato su matrice n×n: deve finire in al più n iterazioni
```

Se una di queste fallisce, hai un bug **anche se il programma non ha dato errori**.

---

## Parte 9 — Il cheat sheet da riscrivere a memoria

Queste ~20 righe devi saperle scrivere **senza guardare**. Sono l'intestazione e lo scheletro di qualunque esercizio d'esame.

```python
# ---------- import ----------
import numpy as np
import matplotlib.pyplot as plt
import scipy.linalg as spLin
from scipy.linalg import lu, cholesky, qr, svd, hilbert
import sympy as sym
from sympy.utilities.lambdify import lambdify
from SolveTriangular import Lsolve, Usolve

# ---------- dati ----------
n = 4
A = np.array([[...]], dtype=float)
b = np.sum(A, axis=1).reshape(n, 1)      # soluzione esatta = tutti 1
x0 = np.zeros((n, 1))
toll = 1e-8
it_max = 500

# ---------- controlli PRIMA di partire ----------
print(A.shape, b.shape, x0.shape)
print('K2(A) =', np.linalg.cond(A))
print('autovalori =', np.linalg.eigvals(A))     # SPD? dominanza?

# ---------- risoluzione ----------
x, it, er_vet = jacobi(A, b, x0, toll, it_max)

# ---------- verifica ----------
print('iterazioni:', it)
print('errore vs solve:', np.linalg.norm(x - np.linalg.solve(A, b)))

# ---------- grafico ----------
plt.semilogy(np.arange(it), er_vet, 'bo-', label='Jacobi')
plt.xlabel('iterazione'); plt.ylabel('errore relativo')
plt.legend(); plt.grid(True); plt.show()
```

---

## Parte 10 — Il programma "foglio bianco"

> Il blocco non si scioglie leggendo: si scioglie **scrivendo male e correggendo**. Ma non si parte dal foglio completamente bianco: si sale una scala.

### La scala a 4 gradini

Per **ogni** esercizio, quattro passaggi. Non si salta un gradino, ma si sale in fretta.

| Gradino | Cosa fai | Quanto dura | Quando sei pronto per il successivo |
|---|---|---|---|
| **1. Ricopiare** | riscrivi il codice **guardandolo**, riga per riga, senza copia-incolla | 10 min | l'hai finito senza errori di sintassi |
| **2. Riempire** | apri lo scheletro con i buchi, riempili **senza guardare** la soluzione | 10 min | i buchi escono senza esitazione |
| **3. Dal commento** | cancella tutto il corpo, lascia solo `def` + commenti, riscrivilo | 15 min | ci riesci con al massimo 2 sbirciate |
| **4. Dal testo** | **foglio bianco**: solo il testo d'esame davanti, cronometro acceso | 25 min | il codice gira e le verifiche della [[00c Python e grafici - guida essenziale per l'esame#Parte 8 — Le sei verifiche automatiche|Parte 8]] passano |

> [!tip] La regola dei 10 minuti
> Al gradino 4, se sei bloccato **più di 10 minuti**, non insistere: guarda la riga che ti manca, poi **ricomincia l'esercizio da capo dall'inizio**. Ricominciare da capo è ciò che consolida; continuare dopo aver sbirciato no.

### Le 10 sessioni (una al giorno, 45–60 minuti)

Ordine pensato per farti incontrare **ogni ricetta grafica** almeno due volte.

| # | Esercizio dal foglio bianco | Ricetta grafica che alleni |
|---|---|---|
| 1 | Jacobi + Gauss-Seidel su una matrice 4×4, confronto | 2 (semilogy) |
| 2 | SOR: ciclo su $\omega$, trova $\omega_{ott}$ sperimentale | 2 + `plot` di $\omega$ vs iterazioni |
| 3 | LU con pivoting: risolvi, verifica `P@A == L@U`, calcola $\det$ | nessuna (respiro) |
| 4 | Gradiente vs gradiente coniugato su Hilbert 5×5 | 2 + 3 (curve di livello) |
| 5 | Metodo di Newton per il minimo (Lab 8 Es 2) | 3 + 4 (superficie) |
| 6 | Interpolazione di Lagrange: `plagr` + `InterpL` da zero | 1 |
| 7 | Runge: equispaziati vs Chebyshev al variare di $n$ | 1 + `semilogy` dell'errore |
| 8 | Minimi quadrati: `eqnorm`, `qrLS`, `SVDLS` sullo stesso problema | 1 (dati + retta di regressione) |
| 9 | Circonferenza per 3 e per 4 punti (7 maggio 2025) | 1 |
| 10 | **Simulazione completa cronometrata** | tutte |

### I tre trucchi anti-blocco

1. **Scrivi prima i commenti.** Sul foglio bianco non parti dal codice: parti da 5 righe di commento in italiano (`# 1. costruisco A`, `# 2. verifico se è SPD`, `# 3. chiamo jacobi`, `# 4. errore`, `# 5. grafico`). Poi riempi. Il blocco è quasi sempre *"non so da dove iniziare"*, non *"non so la sintassi"*.
2. **Parti dal cheat sheet.** Le 20 righe della [[00c Python e grafici - guida essenziale per l'esame#Parte 9 — Il cheat sheet da riscrivere a memoria|Parte 9]] vanno sempre bene, qualunque sia l'esercizio. Scriverle ti fa passare da "foglio bianco" a "foglio con qualcosa sopra" in 90 secondi — ed è il salto psicologico che conta.
3. **Il codice sbagliato vale più del codice assente.** All'esame un grafico brutto ma presente prende punti; un grafico mancante no. Scrivi la versione minima (`plt.plot(x,y); plt.show()`) e la abbellisci **dopo**, se avanza tempo.

---

## Riepilogo in 10 righe (da rileggere il 10 settembre)

1. `(n,)` ≠ `(n,1)`: se una funzione vuole colonne, `reshape(n,1)`.
2. `print(shape)` prima di ogni chiamata e di ogni grafico.
3. `@` è matriciale, `*` è elemento per elemento.
4. `tril` = giù, `triu` = su; l'offset `-1` / `+1` esclude la diagonale.
5. `x0 = x.copy()`, sempre.
6. `lu` restituisce $P^T$; `svd` restituisce $V^T$.
7. sympy → `lambdify` → numpy → matplotlib. Mai saltare un passaggio.
8. Errori per iterazione: **`semilogy`**, ascissa `np.arange(it)`.
9. Curve di livello: `meshgrid` → `Z` **matrice** → `contour(X,Y,Z,levels=...)`.
10. Il codice che gira non è il codice che funziona: fai una verifica della [[00c Python e grafici - guida essenziale per l'esame#Parte 8 — Le sei verifiche automatiche|Parte 8]].
