# Formulario dei buchi — cosa va in ogni `#to do`

> Generato dallo **scheletro vergine** (`scheletri_VERGINE.py`, copiato da `esami/SimulazioneI/`): **116 `#to do` in 20 funzioni**.
> Tutte le formule qui sotto sono state **eseguite e verificate**: ogni metodo converge alla soluzione corretta sui casi di prova (§10).
>
> ⚠️ **Come usarlo.** All'esame ricevi il file a buchi: il codice di contorno (cicli, liste, `return`, stampe) è già scritto, **manca solo la matematica**. Questo documento è il riferimento — ma il valore non sta nel leggerlo, sta nel **riempire i buchi da vuoto, a cronometro**, e usare questo solo per correggerti dopo.
>
> Duplica sempre `scheletri_VERGINE.py`, non modificarlo.

---

## ⚠️ 0. Tre cose da sapere prima di iniziare

**1. Lo scheletro importa solo `numpy`.** Ma il codice usa `spLin.svd`, `cholesky`, `Lsolve`, `Usolve`. **Le import le devi aggiungere tu**, ed è la prima riga da scrivere all'esame:

```python
import numpy as np
import scipy.linalg as spLin
from scipy.linalg import cholesky, lu, qr
from SolveTriangular import Lsolve, Usolve
```

**2. `qrLS` ha un solo `#to do` ma tre cose da scrivere.** Mancano anche la riga della fattorizzazione QR (c'è solo il commento) e `x= #`. Non fidarti del conteggio dei marcatori: leggi il corpo.

**3. `newton_raphson_minimo` NON è nello scheletro 25/26.** Ce l'hai perché l'abbiamo recuperata dal vecchio `Scheletri_24_25.py`. All'esame non ci sarà: se te la chiedono implementata, la scrivi da zero (§4.4).

---

# 1 · Zeri di funzioni non lineari — Blocco A

*Struttura comune ai metodi di linearizzazione:* $x_{k+1}=x_k-\dfrac{f(x_k)}{m_k}$. Cambia solo $m_k$.
*Criterio d'arresto comune:* `errorex` = incremento **relativo**, `erroref` = $|f(x_{k+1})|$.

## 1.1 `metodo_bisezione(fname, a, b, tolx, tolf)` — 5 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `if …` (applicabilità) | `np.sign(fa)*np.sign(fb) >= 0` | teorema degli zeri: serve $f(a)f(b)<0$. Se il prodotto è $\ge0$ non si applica |
| `while …` | `abs(b-a) > tolx and it < max_it` | l'ampiezza dell'intervallo **tende a zero**: qui il criterio si può usare |
| `xk = …` | `a + (b-a)/2` | ⚠️ **non** `(a+b)/2`: forma stabile, resta dentro $[a,b]$ in aritmetica finita |
| `if …` (primo ramo) | `np.sign(fa)*np.sign(fxk) < 0` | cambio di segno in $[a,x_k]$ → la radice sta a sinistra → `b = xk` |
| `elif …` | `np.sign(fb)*np.sign(fxk) < 0` | cambio di segno in $[x_k,b]$ → radice a destra → `a = xk` |

> `max_it = int(np.ceil(np.log2((b-a)/tolx))) - 1` è **già scritto**: è la stima a priori $k\ge\log_2\frac{b-a}{\varepsilon}-1$. La bisezione è l'unico metodo che non prende `maxit` fra i parametri, proprio per questo.

## 1.2 `falsi(fname, a, b, maxit, tolx, tolf)` — 6 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `if …` | `np.sign(fa)*np.sign(fb) >= 0` | come bisezione |
| `while …` | `it < maxit and abs(fxk) > tolf and errore > tolx` | **tre** condizioni; qui serve `maxit` perché non c'è stima a priori |
| `xk = …` | `a - fa*(b-a)/(fb-fa)` | intersezione con l'asse della **secante** per $(a,f(a))$ e $(b,f(b))$ |
| `elif …` | `np.sign(fb)*np.sign(fxk) < 0` | scelta del sottointervallo |
| `errore = …` (se `xk!=0`) | `abs(xk-xprec)/abs(xk)` | incremento **relativo**: l'ampiezza $b-a$ **non** tende a zero (un estremo si blocca) |
| `errore = …` (else) | `abs(xk-xprec)` | forma assoluta se $x_k=0$ |

## 1.3 `corde(fname, a, b, coeff_ang, x0, tolx, tolf, nmax)` — 5 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `while …` | `it < nmax and erroref >= tolf and errorex >= tolx` | |
| `d = …` | `fxk/coeff_ang` | $d=\dfrac{f(x_k)}{m}$, con $m$ **costante** |
| `xk1 = …` | `xk - d` | $x_{k+1}=x_k-\dfrac{f(x_k)}{m}$ — rette tutte parallele |
| `errorex = …` (se `xk1!=0`) | `abs(d)/abs(xk1)` | l'incremento **è** $d$ |
| `errorex = …` (else) | `abs(d)` | |

> $m$ arriva già calcolato dal chiamante: `coeff_ang = (f(b)-f(a))/(b-a)`. Ordine 1, con fattore $c=\left\|1-\frac{f'(\alpha)}{m}\right\|$.

## 1.4 `newton(fname, fpname, x0, tolx, tolf, nmax)` — 6 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `while …` | `it < nmax and erroref >= tolf and errorex >= tolx` | |
| `if …` | `abs(fpxk) <= np.spacing(1)` | derivata nulla → tangente orizzontale → stop |
| `d = …` | `fxk/fpxk` | $d=\dfrac{f(x_k)}{f'(x_k)}$ |
| `xk1 = …` | `xk - d` | $x_{k+1}=x_k-\dfrac{f(x_k)}{f'(x_k)}$ — **tangente**, $m_k=f'(x_k)$ |
| `errorex = …` (se `xk1!=0`) | `abs(d)/abs(xk1)` | |
| `errorex = …` (else) | `abs(d)` | |

## 1.5 `newton_modificato(fname, fpname, m, x0, tolx, tolf, nmax)` — 5 buchi

Identico a `newton` **tranne una riga**:

| Slot | Codice | La matematica |
|---|---|---|
| `while …` | `it < nmax and erroref >= tolf and errorex >= tolx` | |
| `d = …` | `fxk/fpxk` | |
| `xk1 = …` | **`xk - m*d`** | $x_{k+1}=x_k-m\dfrac{f(x_k)}{f'(x_k)}$ — $m$ = **molteplicità** della radice: recupera l'ordine 2 |
| `errorex = …` ×2 | `abs(d)/abs(xk1)` · `abs(d)` | |

## 1.6 `secanti(fname, xm1, x0, tolx, tolf, nmax)` — 5 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `while …` | `it < nmax and erroref >= tolf and errorex >= tolx` | |
| `c_ang_k = …` | `(fxk-fxkm1)/(xk-xkm1)` | pendenza della secante fra gli **ultimi due iterati** |
| `if …` | `np.abs(c_ang_k) <= np.spacing(1)` | secante orizzontale → stop |
| `d = …` | `fxk/c_ang_k` | |
| `xk1 = …` | `xk - d` | $x_{k+1}=x_k-f(x_k)\dfrac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}$; ordine $\frac{1+\sqrt5}{2}\approx1.618$ |

## 1.7 `stima_ordine(xk, iterazioni)` — 0 buchi (già completa)

$$p=\frac{\ln\dfrac{|x_{k+2}-x_{k+3}|}{|x_{k+1}-x_{k+2}|}}{\ln\dfrac{|x_{k+1}-x_{k+2}|}{|x_k-x_{k+1}|}}, \qquad k=\text{iterazioni}-4$$

Serve per rispondere a *"calcolare l'ordine del metodo"*: se torna $\approx1$ su Newton, la radice è **multipla**.

---

# 2 · Sistemi lineari iterativi — Blocco C · 31 buchi

**Lo splitting è la chiave.** Si scrive $A=M-N$ e si itera $Mx^{(k+1)}=Nx^{(k)}+b$, cioè

$$x^{(k+1)}=T\,x^{(k)}+M^{-1}b, \qquad T=M^{-1}N \quad\text{(matrice di iterazione)}$$

Convergenza $\iff \rho(T)<1$. Le tre varianti differiscono **solo** nella scelta di $M$ e $N$.

Righe comuni a tutte e tre:

```python
d = np.diag(A)          # VETTORE della diagonale
D = np.diag(d)          # MATRICE diagonale (np.diag applicato a un vettore)
E = np.tril(A, -1)      # triangolare inferiore SENZA diagonale
F = np.triu(A,  1)      # triangolare superiore SENZA diagonale
```

> 💡 `np.diag` fa due cose opposte a seconda dell'input: su una **matrice** estrae il vettore diagonale, su un **vettore** costruisce la matrice diagonale. Per questo `d` e `D` sono due righe distinte.
> Vale sempre $A=D+E+F$.

## 2.1 `jacobi(A, b, x0, toll, it_max)` — 11 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `d = …` | `np.diag(A)` | vettore diagonale |
| `D = …` | `np.diag(d)` | matrice diagonale |
| `E = …` | `np.tril(A,-1)` | |
| `F = …` | `np.triu(A,1)` | |
| `M = …` | `D` | **$M=D$** |
| `N = …` | `-(E+F)` | **$N=-(E+F)$** |
| `T = …` | `np.dot(np.linalg.inv(M), N)` | $T_J=D^{-1}\big(-(E+F)\big)$ |
| `raggiospettrale = …` | `np.max(np.abs(autovalori))` | $\rho(T)=\max_i\vert \lambda_i\vert $ |
| `while …` | `it <= it_max and errore >= toll` | |
| `x = …` | `(b + N@x0)/d.reshape(n,1)` | $x^{(k+1)}=D^{-1}\big(b-(E+F)x^{(k)}\big)$ — divide per il **vettore** `d`, non usa `inv(D)` |
| `errore = …` | `np.linalg.norm(x-x0)/np.linalg.norm(x)` | incremento relativo in norma 2 |

## 2.2 `gauss_seidel(A, b, x0, toll, it_max)` — 10 buchi

Identico a Jacobi tranne $M$, $N$ e il passo:

| Slot | Codice | La matematica |
|---|---|---|
| `d`,`D`,`E`,`F` | come sopra | |
| `M = …` | **`D+E`** | $M=D+E$ (triangolare **inferiore**) |
| `N = …` | **`-F`** | $N=-F$ |
| `T = …` | `np.linalg.inv(M)@N` | $T_{GS}=(D+E)^{-1}(-F)$ |
| `raggiospettrale = …` | `np.max(np.abs(autovalori))` | |
| `while …` | `it <= it_max and errore >= toll` | |
| `x = …` | **`Lsolve(M, b - F@x0)`** ⟵ restituisce `x, flag` | risolve $(D+E)x^{(k+1)}=b-Fx^{(k)}$ per **sostituzione in avanti**: $M$ è triangolare inferiore, non serve invertirla |
| `errore = …` | `np.linalg.norm(x-x0)/np.linalg.norm(x)` | |

> ⚠️ Scrivi `x, flag = Lsolve(M, b-F@x0)`: la funzione restituisce **due** valori.
> Perché GS è più veloce di Jacobi: usa le componenti **già aggiornate** allo stesso passo, mentre Jacobi usa solo quelle vecchie.

## 2.3 `gauss_seidel_sor(A, b, x0, toll, it_max, omega)` — 10 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `d`,`D`,`E`,`F` | come sopra | |
| `M = …` | **`D + omega*E`** (nel codice: `Momega`) | $M_\omega=D+\omega E$ |
| `N = …` | **`(1-omega)*D - omega*F`** (`Nomega`) | $N_\omega=(1-\omega)D-\omega F$ |
| `while …` | `it <= it_max and errore >= toll` | |
| `xtilde = …` | `Lsolve(M, b - F@x0)` ⟵ `xtilde, flag` | passo di Gauss-Seidel classico ($M=D+E$, $N=-F$, già definite sotto) |
| `x = …` | **`(1-omega)*x0 + omega*xtilde`** | **rilassamento**: media pesata fra vecchio e nuovo |
| `errore = …` | `np.linalg.norm(x-x0)/np.linalg.norm(x)` | |

> $\omega=1$ ⟹ Gauss-Seidel. Condizione **necessaria** di convergenza: $0<\omega<2$.
> $\omega>1$ sovra-rilassamento (accelera), $\omega<1$ sotto-rilassamento (stabilizza).

---

# 3 · Metodi di discesa — Blocco C · 20 buchi

Risolvere $Ax=b$ con $A$ **simmetrica definita positiva** equivale a minimizzare
$$\Phi(x)=\tfrac12x^TAx-b^Tx, \qquad \nabla\Phi(x)=Ax-b=r \;\;(\text{il residuo})$$
Quindi l'**antigradiente** è $-r$: ci si muove lungo $p$ con passo ottimo $\alpha$.

⚠️ **Convenzione del corso**: `r = A@x - b` (il **gradiente**, non il residuo $b-Ax$). Da qui il segno meno in `p = -r` e in `alpha`. Se ti confondi sui segni, ricontrolla questa riga.

## 3.1 `steepestdescent(A, b, x0, itmax, tol)` — 9 buchi

| Slot         | Codice                 | La matematica                                                                   |
| ------------ | ---------------------- | ------------------------------------------------------------------------------- |
| `r = …`      | `A@x - b`              | gradiente di $\Phi$                                                             |
| `p = …`      | `-r`                   | direzione di **massima discesa** (antigradiente)                                |
| `errore = …` | `np.linalg.norm(r)/nb` | residuo relativo, con `nb = norm(b)` già calcolato                              |
| `Ap = …`     | `A@p`                  | si calcola **una volta**: serve due volte                                       |
| `alpha = …`  | `-(r.T@p)/(p.T@Ap)`    | $\alpha_k=-\dfrac{r^Tp}{p^TAp}$ — minimizza $\Phi$ lungo $p$                    |
| `x = …`      | `x + alpha*p`          |                                                                                 |
| `r = …`      | `r + alpha*Ap`         | aggiornamento **incrementale**: $r_{k+1}=r_k+\alpha Ap$, evita di rifare $Ax-b$ |
| `errore = …` | `np.linalg.norm(r)/nb` |                                                                                 |
| `p = …`      | `-r`                   | nuova direzione = antigradiente corrente                                        |

## 3.2 `conjugate_gradient(A, b, x0, itmax, tol)` — 11 buchi

Uguale al gradiente **fino a `x = x + alpha*p`**, poi cambia la direzione:

| Slot | Codice | La matematica |
|---|---|---|
| `r = …` · `p = …` · `errore = …` | `A@x-b` · `-r` · `norm(r)/nb` | identici |
| `while …` | `errore >= tol and it < itmax` | |
| `Ap = …` | `A@p` | |
| `alpha = …` | `-(r.T@p)/(p.T@Ap)` | |
| `x = …` | `x + alpha*p` | |
| `rtr_old = …` | `r.T@r` | ⚠️ **prima** di aggiornare `r` |
| `r = …` | `r + alpha*Ap` | |
| `gamma = …` | `(r.T@r)/rtr_old` | $\gamma_k=\dfrac{r_{k+1}^Tr_{k+1}}{r_k^Tr_k}$ — **Fletcher–Reeves** |
| `p = …` | **`-r + gamma*p`** | direzione **$A$-coniugata**: $p^{(k+1)T}Ap^{(k)}=0$ |

> **La differenza è tutta in `gamma`**: il gradiente riparte ogni volta dall'antigradiente puro e zigzaga; il CG corregge con un pezzo della direzione precedente ed elimina lo zigzag.
> Convergenza: gradiente $\sim K(A)$, CG $\sim\sqrt{K(A)}$, e in aritmetica esatta **al più $n$ iterazioni**.
> *Verificato*: $n=50$, $K(A)=100$ → gradiente **897** iterazioni, CG **43**.

---

# 4 · Sistemi di equazioni non lineari — Blocco D · 9 buchi (+26 già fatti)

Newton-Raphson: si linearizza $F(X)=0$ con la **Jacobiana** e si risolve a ogni passo

$$J(X^{(k)})\,s^{(k)}=-F(X^{(k)}), \qquad X^{(k+1)}=X^{(k)}+s^{(k)}$$

Righe comuni: `jx` = Jacobiana, `fx` = $F$ valutata, `s` = passo, `Xnew = X + s`.

## 4.1 `newton_raphson(...)` — 9 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `while …` | `it < max_iterations and erroreF >= tolF and erroreX >= tolX` | |
| `jx = …` | `np.array(J_numerical(X[0], X[1]), dtype=float)` | Jacobiana **ricalcolata a ogni passo** |
| `if …` | `np.linalg.matrix_rank(jx) < jx.shape[0]` | rango non massimo → il sistema lineare non è risolubile |
| `fx = …` | `np.array(F_numerical(X[0], X[1]), dtype=float).squeeze()` | `.squeeze()` per togliere dimensioni spurie |
| `s = …` | `np.linalg.solve(jx, -fx)` | $Js=-F$ |
| `Xnew = …` | `X + s` | |
| `erroreX = …` (se `normaXnew!=0`) | `np.linalg.norm(s,1)/normaXnew` | incremento relativo in **norma 1** |
| `erroreX = …` (else) | `np.linalg.norm(s,1)` | |
| `fxnew = …` | `np.array(F_numerical(Xnew[0], Xnew[1]), dtype=float).squeeze()` | |

## 4.2 `newton_raphson_corde(...)` — 9 buchi

Identico, **ma la Jacobiana si calcola una volta sola, PRIMA del ciclo**:

| Slot | Codice |
|---|---|
| `jx = …` (fuori dal while) | `np.array(J_numerical(X[0], X[1]), dtype=float)` |
| `if …` (fuori dal while) | `np.linalg.matrix_rank(jx) < jx.shape[0]` |
| `while …` | `it < max_iterations and erroreF > tolF and erroreX > tolX` |
| `fx`, `s`, `Xnew`, `erroreX`×2, `fxnew` | come `newton_raphson` |

> Stessa idea del metodo delle corde 1D: pendenza congelata. Ordine 1 invece di 2, ma niente rifattorizzazione a ogni passo. *Verificato*: 23 iterazioni contro le 4 di Newton sullo stesso sistema.

## 4.3 `newton_raphson_sham(...)` — 9 buchi

Il compromesso: Jacobiana aggiornata **ogni `update` iterazioni**.

| Slot | Codice |
|---|---|
| `while …` | `it < max_iterations and erroreF > tolF and erroreX > tolX` |
| `jx = …` (dentro `if it % update == 0`) | `np.array(J_numerical(X[0], X[1]), dtype=float)` |
| `if …` | `np.linalg.matrix_rank(jx) < jx.shape[0]` |
| `fx`, `s`, `Xnew`, `erroreX`×2, `fxnew` | come sopra |

> `update = 1` ⟹ Newton classico. *Verificato con update=3*: 7 iterazioni, fra le 4 di Newton e le 23 delle corde.

## 4.4 `newton_raphson_minimo(...)` — non presente nello scheletro d'esame

Per minimizzare $f$ si applica Newton-Raphson a $\nabla f(X)=0$: **gradiente al posto di $F$, Hessiana al posto della Jacobiana**.

```python
Hx  = np.array(Hessian_func(X[0], X[1]), dtype=float)
if np.linalg.matrix_rank(Hx) < Hx.shape[0]: return None, None, None
gfx = np.array(grad_func(X[0], X[1]), dtype=float).squeeze()
s   = np.linalg.solve(Hx, -gfx)          # H s = -∇f
Xnew = X + s
erroreF = np.linalg.norm(gfxnew.squeeze(), 1)   # qui il "residuo" è ‖∇f‖
```

---

# 5 · Minimi quadrati — Blocco D · 8 buchi

Problema: $\min_x\|Ax-b\|_2^2$ con $A\in\mathbb{R}^{m\times n}$, $m>n$. Tre metodi, stabilità crescente.

## 5.1 `eqnorm(A, b)` — 2 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `G = …` | `A.T@A` | matrice delle **equazioni normali** $A^TA$ |
| `f = …` | `A.T@b` | termine noto $A^Tb$ |

Poi (non marcato ma da scrivere): $A^TA$ è **simmetrica definita positiva** se $A$ ha rango pieno ⟹ si risolve con **Cholesky**:

```python
L = cholesky(G, lower=True); LT = L.T
z, flag = Lsolve(L, f)
if flag == 0: x, flag = Usolve(LT, z)
```

> ⚠️ **Il metodo peggiore dei tre**: $K_2(A^TA)=K_2(A)^2$ — il condizionamento si eleva al quadrato.

## 5.2 `qrLS(A, b)` — 1 `#to do`, ma **3 righe** da scrivere

```python
Q, R = spLin.qr(A)                    # ← manca la riga (c'è solo il commento)
h = Q.T @ b                           # già scritto
x, flag = Usolve(R[0:n, :], h[0:n])   # ← lo slot "x= #"
residuo = np.linalg.norm(h[n:])**2    # ← lo slot "#to do"
```

| Cosa | La matematica |
|---|---|
| $x$ | $Q$ ortogonale ⟹ $\Vert Ax-b\Vert_2=\Vert Rx-Q^Tb\Vert_2$. Si risolve $R_1x=h_{1:n}$ (triangolare superiore) |
| residuo | $\Vert h_{n+1:m}\Vert_2^2$ — le componenti che **non** si possono annullare: sono il minimo residuo |

> **Il metodo da preferire**: $Q$ ortogonale non amplifica gli errori ($K_2(Q)=1$).

## 5.3 `SVDLS(A, b)` — 6 buchi

$A=U\Sigma V^T$; `k` = rango numerico (già calcolato con la soglia `thresh`).

| Slot | Codice | La matematica |
|---|---|---|
| `d = …` | `U.T@b` | proiezione di $b$ sulla base $U$ |
| `d1 = …` | `d[0:k].reshape(k,1)` | solo le componenti dei valori singolari **significativi** |
| `s1 = …` | `s[0:k].reshape(k,1)` | primi $k$ valori singolari |
| `c = …` | `d1/s1` | $c_i=d_i/\sigma_i$ — divisione **componente per componente** |
| `x = …` | `V[:,0:k]@c` | $x=\sum_{i=1}^{k}\dfrac{u_i^Tb}{\sigma_i}v_i$ |
| `residuo = …` | `np.linalg.norm(d[k:])**2` | come in QR: la parte non annullabile |

> Serve quando $A$ **non è a rango pieno**: troncando a $k$ si scartano i $\sigma_i$ minuscoli che amplificherebbero gli errori.

---

# 6 · Interpolazione di Lagrange — Blocco D · 8 buchi

$$p(x)=\sum_{j=0}^{n} y_j\,L_j(x), \qquad L_j(x)=\prod_{\substack{i=0\\ i\neq j}}^{n}\frac{x-x_i}{x_j-x_i}$$

$L_j$ vale **1 nel nodo $j$** e **0 in tutti gli altri**.

## 6.1 `plagr(xnodi, j)` — 5 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `xzeri = …` (se `j==0`) | `xnodi[1:n]` | tutti i nodi **tranne** il $j$-esimo |
| `xzeri = np.append(…)` | `xnodi[0:j], xnodi[j+1:n]` | idem, caso generale |
| `num = …` | `np.poly(xzeri)` | coefficienti del polinomio con quelle radici: $\prod_{i\neq j}(x-x_i)$ |
| `den = …` | `np.polyval(num, xnodi[j])` | il numeratore **valutato nel nodo $j$**: $\prod_{i\neq j}(x_j-x_i)$ |
| `p = …` | `num/den` | normalizza in modo che $L_j(x_j)=1$ |

## 6.2 `InterpL(x, y, xx)` — 3 buchi

| Slot | Codice | La matematica |
|---|---|---|
| `p = …` | `plagr(x, j)` | $j$-esimo polinomio di base |
| `L[:, j] = …` | `np.polyval(p, xx)` | $L_j$ valutato in **tutti** i punti `xx` → colonna $j$ |
| `pol = …` | `L@y` | $p(x)=\sum_j y_jL_j(x)$, come prodotto matrice–vettore |

> ✅ Verifica utile: $\sum_j L_j(x)=1$ per ogni $x$. Testato: scarto massimo $2\cdot10^{-15}$.

---

# 7 · Riepilogo per blocco

| Gruppo | Buchi | Quando riempirli |
|---|---|---|
| Zeri 1D | 23 | Blocco A — *già fatti* |
| Sistemi non lineari | 26 | Blocco A-bis — *già fatti* |
| **Iterativi (Jacobi, GS, SOR)** | **31** | **Blocco C, 29–30 agosto** |
| **Discesa (gradiente, CG)** | **20** | **Blocco C, 1–2 settembre** |
| Minimi quadrati | 8 | Blocco D, 6–7 settembre |
| Interpolazione | 8 | Blocco D, 4 settembre |
| **Totale** | **116** | |

---

# 8 · Le trappole di sintassi

1. `Lsolve` / `Usolve` restituiscono **due** valori: `x, flag = Lsolve(M, ...)`
2. `np.diag` estrae **o** costruisce a seconda dell'input — servono entrambe le righe `d` e `D`
3. In Jacobi si divide per il **vettore** `d.reshape(n,1)`, non si usa `inv(D)`
4. In CG, `rtr_old = r.T@r` va calcolato **prima** di aggiornare `r`
5. Nei metodi di discesa `r = A@x - b` è il **gradiente**: da lì tutti i segni
6. `.squeeze()` sui valori di `F_numerical` e `J_numerical`, altrimenti gli shape non tornano
7. `x0.copy()` quando riusi lo stesso punto iniziale per più metodi: altrimenti il secondo parte già modificato
8. Le **import** non ci sono nello scheletro ([[01 Formulario dei buchi#⚠️ 0. Tre cose da sapere prima di iniziare|§0]])

---

# 9 · Formule d'appoggio

| | |
|---|---|
| Splitting | $A=D+E+F$; $A=M-N$; $T=M^{-1}N$; converge $\iff\rho(T)<1$ |
| Jacobi | $M=D$, $N=-(E+F)$ |
| Gauss-Seidel | $M=D+E$, $N=-F$ |
| SOR | $M_\omega=D+\omega E$, $N_\omega=(1-\omega)D-\omega F$; serve $0<\omega<2$ |
| Discesa | $\Phi(x)=\frac12x^TAx-b^Tx$, $\nabla\Phi=Ax-b$ |
| Passo ottimo | $\alpha=-\dfrac{r^Tp}{p^TAp}$ |
| Fletcher–Reeves | $\gamma=\dfrac{r_{k+1}^Tr_{k+1}}{r_k^Tr_k}$ |
| Newton-Raphson | $J s=-F$, $X_{k+1}=X_k+s$ |
| Minimo | $H s=-\nabla f$ |
| Equazioni normali | $A^TAx=A^Tb$; $K_2(A^TA)=K_2(A)^2$ |
| QR-LS | $R_1x=(Q^Tb)_{1:n}$; residuo $=\Vert (Q^Tb)_{n+1:m}\Vert^2$ |
| SVD-LS | $x=\sum_{i\le k}\frac{u_i^Tb}{\sigma_i}v_i$ |
| Lagrange | $L_j(x)=\prod_{i\neq j}\frac{x-x_i}{x_j-x_i}$; $p=\sum_j y_jL_j$ |

---

# 10 · Verifica eseguita

Tutte le formule sono state compilate in un modulo ed eseguite. Esiti:

| Test | Esito |
|---|---|
| bisezione / falsi / corde / newton / secanti su $x^3+4x^2-10$ | tutte → $1.365230013414$ ✅ |
| iterazioni: bisez. 39 · falsi 20 · corde 15 · secanti 7 · Newton 4 | coerente con gli ordini ✅ |
| Newton su radice tripla → `stima_ordine` $=1.000$ | conferma il degrado ✅ |
| `newton_modificato` con $m=3$ → radice esatta | ✅ |
| Newton su radice semplice → `stima_ordine` $=2.000$ | ✅ |
| NR / corde / Shamanskii sul sistema $x_0x_1+x_0=1$, $x_0^2+x_1^2=9$ | 4 / 23 / 7 iterazioni, $\Vert F\Vert <10^{-12}$ ✅ |
| Jacobi / GS / SOR su matrice a dominanza diagonale | 26 / 11 / 13 iterazioni, errore $<10^{-10}$ ✅ |
| gradiente vs CG, $n=50$, $K(A)=100$ | 897 vs **43** iterazioni ($\le n$) ✅ |
| eqnorm / qrLS / SVDLS vs `np.linalg.lstsq` | scarto $<10^{-13}$, residui identici ✅ |
| `InterpL` riproduce i nodi e coincide con `polyfit`/`polyval` | ✅ |
| $\sum_j L_j(x)=1$ | scarto $2\cdot10^{-15}$ ✅ |
