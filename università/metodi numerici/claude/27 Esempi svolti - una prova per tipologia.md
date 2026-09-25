# 27 — Esempi svolti: una prova per tipologia

> **Cos'è.** Per ognuna delle sei famiglie, **un esercizio vero** preso dai testi d'esame o dai laboratori, con il codice che lo risolve, l'**output effettivamente prodotto** e il grafico. Tutto il codice qui dentro è stato eseguito: i numeri sono quelli veri, non stime.
>
> Complemento operativo di [[24 Compendio unico - tutto l'esame in un file|24]] (teoria), [[26 Playbook per tipologia di esercizio|26]] (procedura) e [[25 Autotest di richiamo - le cose senza cue|25]] (autotest).

---

# 1. Sistemi lineari

## 1A. Metodi iterativi e di discesa — *esame 7 maggio 2025, Es. 1*

> Nel file `test_7_maggio_2025.mat` sono memorizzate le matrici di due sistemi lineari. Verificare che sia possibile utilizzare i due metodi di discesa **e** Gauss-Seidel, richiamando i risultati teorici. Implementarli, dire quante iterazioni servono con `toll=1e-6` e `maxit=2000`, e visualizzare l'errore in scala logaritmica. Analizzare $K_2$ e cosa implica sulla velocità.

### La diagnosi — sempre queste cinque stampe

```python
m, n = A.shape
print("dimensioni:", m, n)
print("densita': %.2f%%" % (np.count_nonzero(A)/(m*n)*100))
print("simmetrica:", np.allclose(A, A.T))
print("autovalori > 0:", np.all(np.linalg.eigvalsh(A) > 0))
print("K2(A) = %.4f" % np.linalg.cond(A))
dom = np.all(np.abs(np.diag(A)) > np.sum(np.abs(A),axis=1) - np.abs(np.diag(A)))
print("dominanza diagonale stretta:", dom)
```

```
dimensioni: 500 500
densita': 7.64%
simmetrica: True
autovalori > 0: True
K2(A) = 500.0000
dominanza diagonale stretta: False
```

> [!warning] Il tranello
> **Non c'è dominanza diagonale.** La scorciatoia abituale non funziona: la giustificazione deve passare per la **SDP**, e sono due giustificazioni distinte — Gauss-Seidel converge perché $A$ è SDP; i metodi di discesa perché, essendo $A$ SDP, risolvere $Ax=b$ equivale a minimizzare $\Phi(x)=\frac12x^TAx-b^Tx$, strettamente convessa con **un unico** minimo globale.

### L'esecuzione

```python
toll = 1e-6;  maxit = 2000;  x0 = np.zeros_like(b)     # colonna (n,1)!
xg, itg, erg = gauss_seidel(A, b, x0.copy(), toll, maxit)
xs, ers, its = steepestdescent(A, b, x0.copy(), maxit, toll)   # <-- ordine INVERTITO
xc, erc, itc = conjugate_gradient(A, b, x0.copy(), maxit, toll)
```

```
rho(T_GS) = 0.974968
Gauss-Seidel:         319 iterazioni   residuo 4.76e-06
Steepest descent:    1715 iterazioni   residuo 5.93e-06
Gradiente coniugato:  119 iterazioni   residuo 4.81e-06
```

![[es_lineari_convergenza.png]]

### Il commento sulla velocità *(3 punti)*

| Metodo | $q$ teorico | iterazioni previste | osservate |
|---|---|---|---|
| Gauss-Seidel | $\rho(T)=0.9750$ | 545 | **319** |
| Steepest descent | $\frac{K_2-1}{K_2+1}=0.9960$ | 3454 | **1715** |
| Gradiente coniugato | $\frac{\sqrt{K_2}-1}{\sqrt{K_2}+1}=0.9144$ | 154 | **119** |

Le osservate sono **sempre minori** delle previste: sono maggiorazioni, non uguaglianze. La radice quadrata in $q_{CG}$ è ciò che rende il gradiente coniugato robusto al malcondizionamento.

---

## 1B. Determinante e inversa dalla LU — *`Miscellanea` A · Sim. III · 4 luglio T1*

```python
PT, L, U = spLin.lu(A);  P = PT.T.copy()          # scipy: A = PT @ L @ U
detA = np.linalg.det(PT) * np.prod(np.diag(U))    # det(L)=1, det(U)=prod diagonale
Ainv = solve_nsis(A, np.eye(4))                   # A X = I  ->  n sistemi
```

```
minori principali di testa: [4.5, -37.0, 97.0, 58.0]
diag(U) = [ 4.5  -8.222222  -2.621622  0.597938]
det via LU   = 58.00000000000001
det numpy    = 57.99999999999999
differenza   = 2.132e-14

A^-1 =
 [[ 0.586207 -0.362069  0.344828 -0.465517]
  [-0.017241 -0.077586 -0.068966  0.043103]
  [ 0.172414 -0.224138 -0.310345 -0.431034]
  [-1.068966  1.189655 -0.275862  1.672414]]
||A @ A^-1 - I|| = 7.712e-16
```

**Da commentare**: i minori di testa sono tutti non nulli, quindi la LU **senza** pivoting esisterebbe (teorema di esistenza); si usa comunque il pivoting per stabilità. I due determinanti coincidono a meno di $10^{-14}$: **nessuno dei due è "più esatto"**, sono entrambi approssimazioni del valore vero 58.

---

# 2. Equazioni non lineari

## *Esame 12 giugno 2024 Turno II, Es. 2* — $f(x)=2x^4-\frac72x^3+\frac34x^2+x-\frac14$

```python
x = sym.symbols('x')
fx  = 2*x**4 - sym.Rational(7,2)*x**3 + sym.Rational(3,4)*x**2 + x - sym.Rational(1,4)
dfx = sym.diff(fx, x, 1)
f  = lambdify(x, fx,  np)
df = lambdify(x, dfx, np)
print("fattorizzazione:", sym.factor(fx))
```

```
f'(x) = 8*x**3 - 21*x**2/2 + 3*x/2 + 1
fattorizzazione: (x - 1)**2*(2*x + 1)*(4*x - 1)/4
```

![[es_zeri_grafico.png]]

### Bisezione — e il punto teorico da 2 punti

```
intervallo [-0.80, -0.30]:  f(a)=+2.0412  f(b)=-0.3718  -> zero -0.5000000001 in 32 iterazioni
intervallo [ 0.05,  0.42]:  f(a)=-0.1986  f(b)=+0.0839  -> zero  0.2500000000 in 29 iterazioni
intervallo [ 0.80,  1.20]:  f(a)=+0.0572  f(b)=+0.1292  -> Non applicabile: f(a)f(b) >= 0
```

> Il terzo zero **non è calcolabile con la bisezione**: $x=1$ ha molteplicità **pari**, quindi $f$ è tangente all'asse senza attraversarlo e non esiste alcun $[a,b]$ con $f(a)f(b)<0$. L'ipotesi del teorema degli zeri è violata. Ciò **non** significa che lo zero non esista: il teorema è una condizione *sufficiente* per l'esistenza, non necessaria.

> [!tip] Scegli intervalli asimmetrici
> Con $[0,0.5]$ il punto medio è **esattamente** $0.25$: la bisezione becca lo zero al primo colpo e il metodo non dimostra nulla. Meglio $[0.05,\,0.42]$ → 29 iterazioni, un risultato leggibile.

### Newton e l'ordine

```
x0=-0.75 -> -0.5000000000   it=  5   ordine stimato = 2.0068
x0= 0.10 ->  0.2500000000   it=  4   ordine stimato = 1.9924
x0= 0.90 ->  0.9999951386   it= 14   ordine stimato = 1.0000
```

### La molteplicità, nei due modi

```
f^(0)(1) = 0        <-- si annulla
f^(1)(1) = 0        <-- si annulla
f^(2)(1) = 9/2      <-- prima non nulla  =>  m = 2
f^(3)(1) = 27

C sperimentale = 0.499986  ->  m = 1/(1-C) = 1.9999  ->  m = 2
```

### La correzione

```python
rm, itm, vm = newton_modificato(f, df, 2, 0.6, tolx, tolf, 100)
```

```
NEWTON MODIFICATO (m=2, x0=0.6): 1.0000000033   it=6   ordine = 1.9902
```

> [!warning] Perché $x_0=0.6$ e non $0.9$
> Da $0.9$ il metodo modificato converge in **3 iterazioni**, e `stima_ordine` (che usa `k = it-4`) prende un indice **negativo**: numpy non protesta, riavvolge gli indici e restituisce un numero grande e plausibile ma privo di senso. Servono almeno **4 iterati**.

**Da 14 iterazioni con $p=1$ a 6 con $p=2$**: è il confronto da scrivere.

---

# 3. Sistemi non lineari

## *`Miscellanea` E* — $\begin{cases}x_0^2+x_0x_1=10\\ x_1+3x_0x_1^2=57\end{cases}$

```python
x_sym, y_sym = sym.symbols('x_sym y_sym')
def F_sym(f1, f2): return sym.Matrix([[f1(x_sym,y_sym)], [f2(x_sym,y_sym)]])
f1_sym = lambda a,b: a**2 + a*b - 10           # tutto a sinistra!
f2_sym = lambda a,b: b + 3*a*b**2 - 57
J_sym = F_sym(f1_sym,f2_sym).jacobian(sym.Matrix([x_sym, y_sym]))
J_numerical = sym.lambdify([x_sym,y_sym], J_sym, np)
F_numerical = sym.lambdify([x_sym,y_sym], F_sym(f1_sym,f2_sym), np)
```

```
Jacobiana simbolica:
⎡2⋅x + y        x      ⎤
⎢                      ⎥
⎣  3⋅y²    6⋅x⋅y + 1   ⎦
```

### Il metodo grafico per $X_0$ — copiato da `utilities.py`

```python
xg = np.arange(-8,8,0.05);  yg = np.arange(-8,8,0.05)     # NON x, y!
X, Y = np.meshgrid(xg, yg)
superfici = F_numerical(X, Y).squeeze()
plt.contour(X, Y, superfici[0], levels=[0], colors='black')
plt.contour(X, Y, superfici[1], levels=[0], colors='red')
```

![[es_nonlin_contour.png]]

Dalle intersezioni si legge $X_0=(1,3)$.

### I tre metodi — cambia solo *dove* sta `jx = ...`

```
Newton-Raphson    [2. 3.]                   it =   5
Corde             [1.99999972 2.99999362]   it = 101   (raggiunto nmax)
Shamanskii(u=8)   [2. 3.]                   it =  17

errori Newton: 3.43e-01  1.31e-01  5.17e-03  2.16e-05  4.36e-11
errori corde : 3.43e-01  2.69e-01  3.92e-01  2.65e-01  3.12e-01  2.21e-01
rapporti finali corde: 0.8913  0.8914  0.8913  0.8914
```

![[es_nonlin_errori.png]]

> Newton usa $J$ esatta a ogni passo ed eredita la convergenza **quadratica** (l'errore va $10^{-3}\to10^{-5}\to10^{-11}$). Le corde congelano $J$ in $X^{(0)}$: la matrice di iterazione non si annulla nella soluzione, quindi convergenza **lineare** — il rapporto fra errori consecutivi si stabilizza a $0.8913$ — e in 100 iterazioni non si raggiunge la tolleranza. Shamanskii è il compromesso: **superlineare**, con l'andamento a gradini visibile nel grafico in corrispondenza dei ricalcoli.
>
> Il confronto va letto per **costo complessivo**: le corde riutilizzano una sola fattorizzazione, Newton paga $O(n^3)$ a ogni passo.

---

# 4. Minimi quadrati

## 4A. Tre basi sugli stessi dati — *`Varie` Es. 5*

```python
x = np.array([0.0004, 0.2507, 0.5008, 2.0007, 8.0013])
y = np.array([0.0007, 0.0162, 0.0288, 0.0309, 0.0310])
m = x.size

A1 = np.vander(x, increasing=True)[:, :2]                        # retta
A2 = np.vander(x, increasing=True)[:, :3]                        # parabola
A3 = np.column_stack([np.ones(m), np.exp(-x), np.exp(-2*x)])     # base esponenziale
# in TUTTI e tre i casi:  b = y
```

```
retta              K2 =    4.663   coeff = [0.016909  0.002144]              residuo^2 = 4.848e-04
parabola           K2 =   65.675   coeff = [0.010327  0.015411 -0.001606]    residuo^2 = 2.365e-04
base esponenziale  K2 =   18.458   coeff = [0.029690  0.032582 -0.061764]    residuo^2 = 1.225e-05
```

![[es_ls_tremodelli.png]]

**La migliore è la base esponenziale**, con residuo 40 volte più piccolo della retta.

> [!danger] Le due trappole del grafico
> Per i modelli polinomiali: `np.polyval(np.flip(alpha), xv)` — il **flip** serve perché `np.vander(increasing=True)` produce potenze crescenti mentre `polyval` le vuole decrescenti.
> Per la base esponenziale **`np.polyval` non si può usare**: non è un polinomio. Si valuta l'espressione a mano: `a + b*np.exp(-xv) + c*np.exp(-2*xv)`.

## 4B. Curva implicita, quadrato contro sovradeterminato — *7 maggio 2025, Es. 2*

$x^2+y^2+a_1x+a_2y+a_3=0$: si isolano le incognite e il resto passa a destra **cambiato di segno**.

```python
M = np.column_stack([x3, y3, np.ones(3)])      # SOLO le colonne delle incognite
b = -(x3**2 + y3**2)                           # il resto a destra
```

```
M = [[1. 1. 1.]      b = [ -2. -16. -16.]
     [4. 0. 1.]
     [0. 4. 1.]]
simmetrica: False    K2 = 10.4039       ->  non Cholesky: LU con pivoting

a = [-7. -7. 12.]    centro = (3.5, 3.5)    raggio = 3.535534
residuo = 0.00e+00
distanze dal centro: [3.53553391 3.53553391 3.53553391]      <-- tutte uguali a r

--- con 4 punti (sovradeterminato, QR-LS) ---
a* = [-6.514019 -6.503338 10.419226]     ||Aa*-c||^2 = 0.683578
centro* = (3.257009, 3.251669)           raggio* = 3.280585
distanze dal centro*: [3.188119 3.335474 3.341872 3.254434]  <-- tutte diverse
```

![[es_circonferenza.png]]

**La frase da 1 punto**: con 3 punti la circonferenza **passa esattamente per** i punti (sistema quadrato, residuo nullo, distanze tutte uguali al raggio); con 4 **approssima** nel senso dei minimi quadrati. È la distinzione interpolazione / minimi quadrati applicata a una curva.

---

# 5. Interpolazione

## *Esame 10 gennaio 2025, Es. 2* — $f(x)=\cos(\pi x)+\sin(\pi x)$, nodi $1,\ 1.5,\ 1.75$

```python
def plagr(xnodi, j):
    n = xnodi.size
    xzeri = xnodi[1:n] if j == 0 else np.append(xnodi[0:j], xnodi[j+1:n])
    num = np.poly(xzeri)                    # polinomio con quegli zeri
    den = np.polyval(num, xnodi[j])         # normalizzazione: L_j(x_j) = 1
    return num/den

def InterpL(x, y, xx):
    n = x.size;  m = xx.size;  L = np.zeros((m, n))
    for j in range(n):
        L[:, j] = np.polyval(plagr(x, j), xx)
    return L @ y                            # p(x) = sum_j y_j L_j(x)
```

```
nodi   = [1.   1.5  1.75]
f(nodi) = [-1.  1.  0.3826834324]

E(0.75) = |f(0.75) - p(0.75)| = 2.2204e-16
  f(0.75) = 0.0000000000     p(0.75) = 0.0000000000

p(x) = 5.3333 x^2 - 13.3333 x + 7.0000
radici di p: [1.75  0.75]

Lebesgue su [1, 1.75] (intervallo dei nodi)   = 1.6667   (max in x = 1.2499)
Lebesgue su [0, 2]   (intervallo dichiarato)  = 29.0000  (max in x = 0.0000)
```

![[es_interpolazione.png]]

### La spiegazione corretta di $E(0.75)\approx0$

> [!warning] La direzione logica
> **Sbagliato**: *"l'errore è nullo perché esiste un $\xi$ in cui $f'''$ si annulla"*. Il teorema dà $\xi$ **come funzione di** $\bar x$: è un teorema di **esistenza**, $\xi$ non si sceglie.
> **Giusto**: $\bar x = 0.75$ è una radice di $p$ (lo si vede dalla fattorizzazione: le radici sono $1.75$ e $0.75$) ed è anche uno zero di $f$, perché $\cos(0.75\pi)+\sin(0.75\pi)=0$. Le due funzioni si annullano entrambe lì, quindi l'errore è nullo — a meno della precisione di macchina.

### Lebesgue dipende da **due** cose

Sugli stessi 3 nodi: $\Lambda_n=1.67$ su $[1,\,1.75]$ e $\Lambda_n=29$ su $[0,2]$. **Entrambi corretti**, per problemi diversi. Si usa l'intervallo **dichiarato dal testo** — qui $[0,2]$ — e si dichiara quale si è usato. Il massimo cade in $x=0$, cioè all'estremo, dove si sta di fatto **estrapolando**.

---

# 6. Condizionamento e stabilità

## 6A. Condizionamento — $f(x)=\dfrac{1}{x-1}$ vicino a 1

**La derivazione** *(4 punti)*: da Taylor al primo ordine, dividendo per $f(x)$ e **moltiplicando e dividendo per $x$**,

$$\left|\frac{f(\tilde x)-f(x)}{f(x)}\right| \approx \underbrace{\left|\frac{x f'(x)}{f(x)}\right|}_{K}\cdot\left|\frac{\tilde x - x}{x}\right| \qquad\Longrightarrow\qquad K_f(x)=\left|\frac{x}{x-1}\right|$$

```python
delta = 1e-12                      # NON 10e-12, che vale 1e-11
xk_pert = xk*(1 + delta)
err_dati = np.abs(xk_pert - xk)/np.abs(xk)          # np.abs, NON np.linalg.norm:
err_ris  = np.abs(f(xk_pert) - f(xk))/np.abs(f(xk)) # sono 15 problemi SCALARI
amplificazione = err_ris/err_dati
```

```
  k     K_f(x_k)       amplificazione
  1    1.1000e+01    1.1000e+01
  5    1.0000e+05    1.0000e+05
  9    1.0000e+09    9.9900e+08
 11    1.0000e+11    9.0908e+10
 12    9.9991e+11    4.9996e+11
 15    9.0072e+14    9.9880e+11
```

![[es_condizionamento.png]]

> Il problema è mal condizionato perché $f$ ha un **polo** in 1: $K_f(x_k)\approx10^k$, si perdono circa $k$ cifre. È una proprietà del **problema**: nessuna riformulazione può ridurla.
>
> Le due curve coincidono fino a $k\approx11$ e poi si separano: da lì $\delta x\approx10^{-12}$ non è più piccola rispetto alla distanza $x_k-1=10^{-k}$ dalla singolarità, e l'ipotesi di perturbazione infinitesima dello sviluppo al primo ordine cade.

## 6B. Stabilità — $x^2-2kx+1=0$

```python
# riferimento in ALTA PRECISIONE: interi ESATTI di sympy, non float!
rif2 = np.array([float(sym.N(sym.Integer(10)**h - sym.sqrt(sym.Integer(10)**(2*h) - 1), 40))
                 for h in esponenti])
x2_stabile = 1/(k + np.sqrt(k**2 - 1))      # parentesi al denominatore!
```

```
  h    err x1      err x2 diretta   err x2 stabile
  3   1.14e-16     8.73e-11         0.00e+00
  5   1.46e-16     1.12e-06         0.00e+00
  7   1.86e-16     5.83e-03         1.32e-16
  8   0.00e+00     1.00e+00         0.00e+00
  9   0.00e+00     1.00e+00         0.00e+00
 16   0.00e+00     1.00e+00         0.00e+00

soglia: eps*k^2 > 1  ->  k > 1/sqrt(eps) = 6.711e+07   (h ~ 7.8)
spacing(k^2) a h=8: 2.0000   ->  k^2-1 == k^2 ? True
```

![[es_stabilita.png]]

> **Dove**: $x_2=k-\sqrt{k^2-1}$ sottrae due numeri entrambi $\approx k$ per ottenere $\approx\frac{1}{2k}$ → cancellazione. $x_1=k+\sqrt{k^2-1}$ è una somma → stabile.
>
> **Per quali $k$**: lo spacing di $k^2$ supera 1 quando $\varepsilon k^2>1$, cioè $k>1/\sqrt{\varepsilon}\approx6.7\cdot10^7$. Da lì $k^2-1$ arrotonda **esattamente** a $k^2$, $\sqrt{k^2-1}$ restituisce **esattamente** $k$, e la differenza vale **esattamente 0**: errore relativo 1. Previsione $h\approx7.8$, collasso osservato a $h=8$.
>
> **La formula stabile**: dal prodotto delle radici $x_1x_2=c/a=1$ segue $x_2=\frac{1}{k+\sqrt{k^2-1}}$ — solo una somma, nessuna cancellazione. Errore $\lesssim10^{-16}$ per ogni $k$.
>
> **La chiusura**: il problema è **ben condizionato**; la differenza fra i due comportamenti è imputabile unicamente all'**algoritmo**.

---

# Riepilogo: dove stanno i punti

| Famiglia | Il codice vale | La prosa vale | La riga che salva |
|---|---|---|---|
| Sistemi lineari | ~60% | ~40% | `np.linalg.norm(A@x - b)` |
| Zeri | ~50% | ~50% | verifica a quale zero sei arrivato |
| Sistemi non lineari | ~60% | ~40% | grafico dell'errore in `semilogy` |
| Minimi quadrati | ~70% | ~30% | residuo, e distanze dal centro |
| Interpolazione | ~40% | ~60% | $E(\bar x)$ e l'intervallo di Lebesgue |
| Condizionamento / stabilità | ~30% | **~70%** | soglia derivata **e** osservata |

**Regola d'oro**: la giustificazione si scrive in cinque minuti e spesso vale più del codice. Se il tempo stringe, scrivi prima le celle markdown.
