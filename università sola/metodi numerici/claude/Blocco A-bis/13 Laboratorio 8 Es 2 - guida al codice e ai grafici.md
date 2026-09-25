# 13 — Laboratorio 8, Esercizio 2: minimo con Newton (guida al codice e ai grafici)

> Obiettivo: calcolare il punto di minimo di quattro funzioni non lineari in due variabili con il metodo di Newton, e saperlo **visualizzare**.
> Il file eseguibile è `esame_settembre/laboratorio8_es2.py`.

---

## 0. La cosa che ti blocca subito

Nel notebook del Lab 8 c'è `import scheletri_25_26 as scheletri`. **Oggi quell'import fallisce.**

```
SyntaxError: invalid syntax
  File "scheletri_25_26.py", line 536
    d=#to do
```

Perché `d = #to do` non è Python valido: dopo il segno `=` c'è solo un commento. Python **legge tutto il file prima di eseguirlo**, quindi finché resta anche un solo `#to do` sul lato destro di un'assegnazione, l'intero modulo non si importa — nemmeno le funzioni che hai già completato.

Due conseguenze pratiche:

- finché non hai riempito i 67 buchi rimasti (jacobi, gauss_seidel, sor, steepestdescent, conjugate_gradient, eqnorm, qrLS, SVDLS, plagr, InterpL) **incolla la funzione direttamente in una cella del notebook** invece di importarla;
- **all'esame** il file te lo consegnano con i buchi: se lo salvi a metà e provi a importarlo, non parte. Riempi sempre almeno con un placeholder sintatticamente valido (`d = 0`) le funzioni che non ti servono.

---

## 1. Lo schema mentale dell'esercizio

Cercare il minimo di $f(x,y)$ significa cercare gli **zeri del gradiente**:

$$\nabla f(X) = \mathbf{0}$$

Cioè: è di nuovo un **sistema non lineare** di 2 equazioni in 2 incognite, esattamente come l'Esercizio 1. Cambia solo chi gioca quale ruolo:

| Esercizio 1 (zeri di $F$) | Esercizio 2 (minimo di $f$) |
|---|---|
| $F(X) = \mathbf{0}$ | $\nabla f(X) = \mathbf{0}$ |
| Jacobiana $J(X)$ | Hessiana $H(X)$ |
| $J(X_k)\,s_k = -F(X_k)$ | $H(X_k)\,s_k = -\nabla f(X_k)$ |
| $X_{k+1} = X_k + s_k$ | $X_{k+1} = X_k + s_k$ |
| controllo: $J$ non singolare | controllo: $H$ non singolare |

**È lo stesso identico algoritmo.** Se sai scrivere `newton_raphson`, sai scrivere `newton_raphson_minimo`: sostituisci `F` con `grad_f` e `J` con `H`.

Attenzione a un punto che l'esame chiede spesso: Newton trova un punto **critico**, non necessariamente un minimo. Zeri del gradiente sono anche massimi e selle. Per concludere che è un minimo devi verificare che $H$ nel punto trovato sia **definita positiva** (tutti gli autovalori $>0$).

---

## 2. Il pezzo di codice che va imparato a memoria

Questo blocco è identico in tutti gli esercizi con funzioni simboliche, e all'esame lo devi saper riscrivere senza pensarci:

```python
x_sym, y_sym = sym.symbols('x_sym y_sym')

f_sym = 100*(y_sym - x_sym**2)**2 + (1 - x_sym)**2      # la funzione

grad_sym = sym.derive_by_array(f_sym, (x_sym, y_sym))   # gradiente  (2,)
H_sym    = sym.hessian(f_sym, (x_sym, y_sym))           # Hessiana   (2,2)

f_num    = sym.lambdify((x_sym, y_sym), f_sym,    np)   # da simbolico
grad_num = sym.lambdify((x_sym, y_sym), grad_sym, np)   # a numerico
H_num    = sym.lambdify((x_sym, y_sym), H_sym,    np)
```

Tre trappole:

- **`derive_by_array` vs `jacobian`.** `jacobian` è un metodo di `sym.Matrix` e si usa per una funzione **vettoriale** $F$; `derive_by_array` si usa per una funzione **scalare** $f$ e restituisce il gradiente. Nell'Es 1 usi il primo, nell'Es 2 il secondo.
- **`.squeeze()` sul gradiente.** `grad_num(x,y)` restituisce un array di forma `(1,2)` o `(2,1)` a seconda dei casi; `np.linalg.solve` vuole un vettore `(2,)`. Per questo nello scheletro c'è `gfx = gfx.squeeze()`. Se te lo dimentichi ottieni un errore di dimensioni difficile da leggere.
- **`np` come terzo argomento di `lambdify`.** Serve a far sì che la funzione accetti array numpy: senza, `f_num(Xg, Yg)` sulla griglia del grafico non funziona.

---

## 3. I grafici — la parte che conta

> 🐍 Versione generale di queste ricette (valida per tutti i blocchi): [[00c Python e grafici - guida essenziale per l'esame#Parte 6 — I grafici|00c · Parte 6 — I grafici]].


### 3.1 La ricetta base delle curve di livello

Quattro righe, sempre le stesse:

```python
xx = np.linspace(a, b, 400)          # 1. campiona l'asse x
yy = np.linspace(c, d, 400)          #    campiona l'asse y
Xg, Yg = np.meshgrid(xx, yy)         # 2. griglia 2D: Xg e Yg hanno forma (400,400)
Zg = f_num(Xg, Yg)                   # 3. valuta f su TUTTA la griglia in un colpo
plt.contour(Xg, Yg, Zg, levels=...)  # 4. disegna
```

Cosa fa `meshgrid`: da due vettori di lunghezza $n$ e $m$ costruisce due matrici $m\times n$ tali che `(Xg[i,j], Yg[i,j])` è il punto $(x_j, y_i)$. Serve perché `contour` vuole tre matrici della stessa forma.

Perché `f_num(Xg, Yg)` funziona su matrici: `lambdify(..., np)` traduce le operazioni simboliche in operazioni numpy, che agiscono **elemento per elemento**. Non serve nessun ciclo `for`.

### 3.2 La scelta dei `levels` — qui si sbaglia sempre

Se scrivi `plt.contour(Xg, Yg, Zg)` senza specificare i livelli, matplotlib ne mette 8 **equispaziati** fra il minimo e il massimo. Per la funzione di Rosenbrock il massimo sulla finestra vale qualche migliaio e il minimo vale 0: gli 8 livelli equispaziati cadono tutti nella zona alta e la valle attorno al minimo resta completamente vuota. Vedi un grafico che sembra corretto ma non mostra proprio la cosa che ti interessa.

Due rimedi, entrambi legittimi all'esame:

**(a) livelli logaritmici** — quando $f$ varia di ordini di grandezza:

```python
livelli = np.logspace(np.log10(max(Zg.min(), 1e-3)), np.log10(Zg.max()), 20)
plt.contour(Xg, Yg, Zg, levels=livelli, cmap='viridis')
```

`logspace(p, q, n)` genera `n` valori fra $10^p$ e $10^q$ spaziati **moltiplicativamente**. Il `max(..., 1e-3)` evita `log10(0) = -inf` quando il minimo della funzione è zero.

**(b) il trucco del prof** — un livello per ogni iterato, cioè disegnare la curva di livello che passa esattamente per il punto in cui ti trovi:

```python
plt.contour(Xg, Yg, Zg, levels=[f_num(x[0], x[1])])
plt.plot(x[0], x[1], 'r-o')
```

È quello che fa in `steepestdescent_CL`: dentro il ciclo, a ogni iterazione. Il risultato mostra visivamente "sto scendendo di quota". Vantaggio: i livelli sono automaticamente quelli giusti, non devi scegliere niente.

### 3.3 Disegnare la traiettoria

`newton_raphson_minimo` restituisce solo `X, it, errore`: **la traiettoria si perde**. Per disegnarla serve una variante che accumuli gli iterati, esattamente come fa il prof con `vec_sol` in `steepestdescent`:

```python
vec_sol = [X.copy()]        # prima del ciclo
...
    vec_sol.append(X.copy())   # dentro il ciclo, dopo X = Xnew
...
iterates_array = np.array(vec_sol)      # forma (it+1, 2)
```

Poi:

```python
plt.plot(iterates_array[:, 0], iterates_array[:, 1], 'r.-')
```

`[:, 0]` prende tutte le ascisse, `[:, 1]` tutte le ordinate. Il `.copy()` è essenziale: senza, se `X` viene modificato in place tutti gli elementi della lista puntano allo stesso array e alla fine hai *it+1* copie dell'ultimo punto.

### 3.4 La stringa di formato

`'r.-'` si legge come tre campi indipendenti:

| carattere | significato |
|---|---|
| `r` | colore rosso (`g` verde, `b` blu, `k` nero, `m` magenta) |
| `.` | marcatore punto (`o` cerchio, `s` quadrato, `d` rombo, `*` stella, `^` triangolo) |
| `-` | linea continua (`--` tratteggiata, `:` puntinata, niente = solo marcatori) |

Quindi `'ro-'` = cerchi rossi uniti da linea, `'gs-'` = quadrati verdi con linea, `'bd'` = rombi blu senza linea.

### 3.5 La scala logaritmica dell'errore

```python
plt.semilogy(np.arange(1, it+1), errore, 'ro-')
```

`semilogy` mette in scala logaritmica **solo l'asse y**. È la scelta giusta per gli errori, perché passano da $10^0$ a $10^{-16}$: in scala lineare vedresti una curva che crolla a zero e poi resta piatta sull'asse, senza distinguere $10^{-3}$ da $10^{-15}$.

Come si leggono le pendenze:

- retta **discendente** in `semilogy` → convergenza **lineare** (l'errore si moltiplica per una costante $<1$ a ogni passo);
- curva che **piega sempre più in giù** (le distanze verticali raddoppiano) → convergenza **quadratica**: il numero di cifre corrette raddoppia a ogni iterazione;
- retta **orizzontale** → non converge, o converge con rapporto ≈1.

Attenzione alla lunghezza degli array: `errore` ha `it` elementi (uno per iterazione eseguita), quindi l'ascissa è `np.arange(1, it+1)` oppure `np.arange(it)`. Se sbagli di uno, matplotlib dà `x and y must have same first dimension`.

---

## 4. I risultati delle quattro funzioni

![[lab8_es2_curve_livello.png]]

| # | $f(x,y)$ | $X^{(0)}$ | $\alpha$ atteso | trovato | it |
|---|---|---|---|---|---|
| 1 | $\tfrac12\!\left(0.001(x-1)^2+(x^2-y)^2\right)$ | $[-3,-3]$ | $[1,1]$ | $[1,1]$ esatto | 5 |
| 2 | $(x-2)^4+(x-2)^2y^2+(y+1)^2$ | $[1,1]$ | $[2,-1]$ | $[2,-1]$ esatto | 7 |
| 3 | $x^4+(x+y)^2y^2+(e^x-1)^2$ | $[-1,3]$ | $[0,0]$ | $[0,\;2.2\cdot10^{-4}]$ | 23 |
| 4 | $100(y-x^2)^2+(1-x)^2$ | $[-1.9,2]$ | $[1,1]$ | $[1,1]$ esatto | 6 |

### Due osservazioni che valgono punti all'orale

**Newton "sbanda" prima di convergere.** Guarda la traiettoria della 1 e della 4: dal punto iniziale il metodo fa un salto enorme ($y$ arriva a $-15$ nella prima, a $-7.2$ nella quarta), completamente fuori dalla zona del minimo, e **solo dopo** rientra e converge in due passi. Non è un bug. Newton approssima $f$ con la sua **parabola tangente** (sviluppo di Taylor al second'ordine): lontano dal minimo quell'approssimazione è pessima e il vertice della parabola può cadere ovunque. La convergenza quadratica è una proprietà **locale**: vale solo una volta che sei entrato nell'intorno buono. Questo è anche il motivo per cui esistono le versioni con *line search* (si accetta solo una frazione del passo $s_k$).

**La funzione 3 è il caso patologico.** 23 iterazioni contro 5-7 delle altre, e il risultato non è esattamente $(0,0)$.

![[lab8_es2_errore.png]]

Il grafico dell'errore lo spiega in un colpo d'occhio: le curve di f1, f2, f4 **precipitano** (convergenza quadratica), mentre quella di f3 è una **retta orizzontale a quota $0.5$**. L'errore si dimezza ogni volta: convergenza **lineare** con rapporto $1/2$.

Il motivo è che nel punto di minimo

$$H(0,0)=\begin{bmatrix}2 & 0\\ 0 & 0\end{bmatrix}, \qquad \det H = 0$$

l'Hessiana è **singolare**. È l'analogo multidimensionale della **radice multipla** per il Newton scalare: anche lì $f'(\alpha)=0$ fa scendere l'ordine da 2 a 1, con rapporto asintotico $1-1/m = 1/2$ per una radice doppia. Esattamente lo $0.5$ che si legge sul grafico.

Nota che il codice **non** si ferma con il messaggio "Hessiana non a rango massimo": `matrix_rank` lavora con una tolleranza numerica, e negli iterati $H$ è singolare solo *nel limite* — ha un autovalore piccolo ($5.6\cdot10^{-7}$ alla fine) ma non nullo in aritmetica finita. Il metodo quindi non si blocca, semplicemente rallenta e si arresta quando l'incremento relativo scende sotto `tolX`.

---

## 5. Checklist per l'esame

1. `derive_by_array` per il gradiente, `hessian` per l'Hessiana, `lambdify(..., np)` per entrambi.
2. Risolvi $H(X_k)\,s_k=-\nabla f(X_k)$ con `np.linalg.solve`, **mai** con `np.linalg.inv(H) @ (-g)`.
3. `.squeeze()` sul gradiente prima di `solve`.
4. Verifica a posteriori: `np.linalg.eigvalsh(H(Xs))` tutti positivi → è un minimo.
5. Grafico: `meshgrid` → valuta → `contour` con `levels` **scelti** (logspace o valori lungo la traiettoria).
6. Traiettoria: accumula gli iterati in una lista con `.copy()`, poi `np.array(...)` e slicing `[:,0]`, `[:,1]`.
7. Errore: `semilogy`, ascissa di lunghezza pari a `len(errore)`.
8. Commenta l'ordine di convergenza leggendo la **forma** della curva, non solo il numero di iterazioni.
