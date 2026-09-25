# Scheda operativa — Blocco A-bis · Sistemi non lineari

> Leggila **sabato 22 mattina** per sapere dove guardare, e **domenica sera** per verificare.
> Blocco da 2 giorni: 22–23 agosto.

---

## 1. Quanto pesa

| Prova | Cosa chiede | Punti |
|---|---|---|
| **4 luglio 2024 T1** | Implementare NR, corde e Shamanskii; risolvere il sistema con i tre metodi; **confrontare il grafico dell'errore relativo fra iterati successivi giustificando alla luce della teoria**; descrivere teoricamente la variante per il minimo | **12** |
| **Simulazione III** | Identico (è la stessa prova) | 10 |

Su 8 prove compare in 2 — **una frequenza in linea con gli altri quattro temi** che ruotano nell'Esercizio 2. Non è più probabile degli altri, ma non è nemmeno meno probabile: vale un intero Esercizio 2.

**Il testo tipo, parola per parola:**

> *"Implementare il metodo di Newton Raphson, la variante delle corde e la variante di Shamanskii per la soluzione di un sistema di equazioni non lineari [punti 5-7]. Risolvere il sistema … con ciascuno dei tre metodi e confrontare per ciascun metodo il grafico dell'errore relativo tra due iterati successivi, giustificando i risultati alla luce della teoria [punti 3]. Descrivere teoricamente la variante del Metodo di Newton-Raphson per calcolare il minimo di una funzione non lineare in più variabili [punti 2]."*

Con la **Nota Bene** che accompagna sempre il testo:

> *"Servirsi del metodo grafico per individuare un iterato iniziale $X^{(0)}$ nell'intorno della soluzione … visualizzare le curve di livello corrispondenti a $z=0$ delle due superfici e definire come iterato iniziale un vettore le cui componenti appartengono a un intorno della soluzione (cioè dei punti di intersezione tra le curve di livello)."*

> 🔑 **Tre punti su dodici sono per la giustificazione teorica del grafico**, e due per una domanda puramente teorica sul minimo. Cinque punti su dodici **non sono codice**.

---

## 2. ⭐ Le derivazioni da saper fare

### D7 — Newton-Raphson per sistemi

Taylor **di grado 1** di ciascuna $f_i$ centrato in $X_k$ (= i piani tangenti) → imponi che si annullino entrambi ($x_3=0$) → riscrivi in forma matriciale $0=F(X_k)+J(X_k)(X-X_k)$ → poni $s_k=X-X_k$ → $J(X_k)s_k=-F(X_k)$.

### D8 — Newton-Raphson per il minimo

Identica, con **due sostituzioni**: Taylor di grado 1 applicato a **ciascuna componente del gradiente** → l'Hessiana prende il posto della Jacobiana → $H(X_k)s_k=-\nabla f(X_k)$.
*Motivo di fondo da dire a voce*: i punti stazionari risolvono il sistema non lineare $\nabla f(X)=0$, e $H$ **è** la Jacobiana di $\nabla f$.

> 💡 Se sai fare D7, D8 viene gratis. Studiale insieme.

---

## 3. La procedura operativa completa

Questo è l'ordine in cui svolgere l'esercizio all'esame. Ogni passo è un pezzo di punteggio.

**1. Definisci il sistema simbolicamente e ricava la Jacobiana con sympy**

```python
import sympy as sym
import numpy as np

x_sym, y_sym = sym.symbols('x_sym y_sym')
f1_sym = lambda x_sym, y_sym: x_sym*y_sym + x_sym - 1
f2_sym = lambda x_sym, y_sym: x_sym**2 + y_sym**2 - 9

def F_sym(f1_sym, f2_sym):
    return sym.Matrix([[f1_sym(x_sym, y_sym)], [f2_sym(x_sym, y_sym)]])

J_sym = F_sym(f1_sym, f2_sym).jacobian(sym.Matrix([x_sym, y_sym]))

F_numerical = sym.lambdify([x_sym, y_sym], F_sym(f1_sym, f2_sym), np)
J_numerical = sym.lambdify([x_sym, y_sym], J_sym, np)
```

**2. Localizza graficamente le soluzioni** — è il passo che il testo impone

```python
import matplotlib.pyplot as plt
x = np.arange(-4, 4, 0.1);  y = np.arange(-4, 4, 0.1)
X, Y = np.meshgrid(x, y)
superfici = F_numerical(X, Y).squeeze()

plt.contour(X, Y, superfici[0,:,:], levels=[0], colors='black')
plt.contour(X, Y, superfici[1,:,:], levels=[0], colors='red')
plt.grid(True); plt.axis('equal'); plt.show()
```

Le intersezioni fra la curva nera e quella rossa **sono** le soluzioni. Leggi le coordinate a occhio e usale come $X^{(0)}$. **Scrivi in una cella markdown perché hai scelto quel punto.**

**3. Applica i tre metodi**

```python
X1, it1, err1 = newton_raphson(X0, F_numerical, J_numerical, 1e-12, 1e-12, 500)
X2, it2, err2 = newton_raphson_corde(X0, F_numerical, J_numerical, 1e-12, 1e-12, 500)
X3, it3, err3 = newton_raphson_sham(X0, F_numerical, J_numerical, 1e-12, 1e-12, 3, 500)
```

**4. Grafica l'errore in scala logaritmica**

```python
plt.semilogy(range(len(err1)), err1, 'o-', label=f'Newton-Raphson ({it1} it)')
plt.semilogy(range(len(err2)), err2, 's-', label=f'corde ({it2} it)')
plt.semilogy(range(len(err3)), err3, '^-', label=f'Shamanskii ({it3} it)')
plt.xlabel('iterazione'); plt.ylabel(r'$\|s_k\|_1/\|X_{k+1}\|_1$')
plt.legend(); plt.grid(True, which='both'); plt.show()
```

**5. Scrivi la giustificazione** — 3 punti, vedi [[12 Scheda operativa Blocco A-bis#4. ⭐ La giustificazione teorica del grafico|§4]]

---

## 4. ⭐ La giustificazione teorica del grafico

È la parte che vale i punti e che quasi nessuno scrive per intero. Il modello:

> Newton-Raphson ha **ordine di convergenza 2**: la Jacobiana viene ricalcolata a ogni iterazione, quindi l'approssimazione lineare è sempre quella corretta nel punto corrente. Nel grafico in scala semilogaritmica questo si vede come una **curva che precipita**, perché il numero di cifre corrette raddoppia a ogni passo.
>
> Il metodo delle **corde** congela la Jacobiana in $X^{(0)}$: l'approssimazione lineare diventa via via meno accurata man mano che gli iterati si allontanano da $X^{(0)}$, e l'ordine scende a **1**. Nel grafico è una **retta**, perché l'errore si riduce di un fattore costante a ogni passo.
>
> Il metodo di **Shamanskii** aggiorna la Jacobiana ogni $m$ iterazioni: il comportamento è **intermedio**, con tratti quasi lineari fra un aggiornamento e il successivo.
>
> Il costo per iterazione va in senso opposto: NR richiede $n^2$ derivate parziali **e** la risoluzione di un nuovo sistema lineare a ogni passo, mentre le corde riusano la stessa matrice.

**Numeri di riferimento**, verificati sul sistema $\{x_0x_1+x_0=1,\;x_0^2+x_1^2=9\}$ partendo da $X_0=(1,3)$:

| Metodo | Iterazioni | $\Vert F(X)\Vert $ finale |
|---|---|---|
| Newton-Raphson | **4** | $5.9\cdot10^{-13}$ |
| Shamanskii ($m=3$) | **7** | $1.8\cdot10^{-15}$ |
| Corde | **23** | $1.4\cdot10^{-12}$ |

> 📌 **Come leggere il grafico semilog**, in una riga: *retta = ordine 1, curva che si piega verso il basso = ordine 2.* È la stessa lettura del confronto corde/Newton in 1D (`Blocco A/metodo_corde.png`).

---

## 5. Il ponte con il Laboratorio 8

### Esercizio 1 — cinque sistemi, tre metodi, errore in scala log

| # | Sistema | Nota |
|---|---|---|
| 1 | $2x_0-\cos x_1=0$, $\;\sin x_0+2x_1=0$ | soluzione vicino all'origine |
| 2 | $x_0^2+x_1^2-4=0$, $\;x_0^2-x_1^2-1=0$ | circonferenza ∩ iperbole → **4 soluzioni** |
| 3 | $x_0^2+x_1^2-2=0$, $\;e^{x_0-1}+x_1^3-3=0$ | |
| 4 | $4x_0^2+x_1^2-4=0$, $\;x_0+x_1-\sin(x_0-x_1)=0$ | ellisse |
| 5 | $x_0+x_1-3=0$, $\;x_0^2+x_1^2-9=0$ | **è l'esempio delle slide**: retta ∩ circonferenza |

> ⚠️ **Il sistema 2 ha quattro soluzioni**: è quello che allena il punto vero dell'esercizio — a soluzioni diverse si arriva partendo da $X^{(0)}$ diversi. Se cambi quadrante di partenza, Newton converge a un'altra intersezione. È la dimostrazione pratica della **convergenza locale**.

### Esercizio 2 — Newton-Raphson per il minimo, quattro funzioni

| Funzione | Minimo $\alpha$ | $X_0$ |
|---|---|---|
| $\frac12\big(0.001(x-1)^2+(x^2-y)^2\big)$ | $[1,1]$ | $[-3,-3]$ |
| $(x-2)^4+(x-2)^2y^2+(y+1)^2$ | $[2,-1]$ | $[1,1]$ |
| $x^4+(x+y)^2y^2+(e^x-1)^2$ | $[0,0]$ | $[-1,3]$ |
| $100(y-x^2)^2+(1-x)^2$ | $[1,1]$ | $[-1.9,\,2]$ |

> L'ultima è la **funzione di Rosenbrock**, il banco di prova classico dell'ottimizzazione: una valle stretta e curva. Serve a mostrare che Newton, usando la curvatura (l'Hessiana), la attraversa in pochi passi — mentre i metodi del primo ordine ci arrancano. È lo stesso fenomeno che ritroverai nel **Blocco C** (gradiente contro gradiente coniugato) e nel **binario IA** (perché serve il momentum).

Per gradiente e Hessiana simbolici:

```python
f_sym = 100*(y_sym - x_sym**2)**2 + (1 - x_sym)**2
grad_f = sym.derive_by_array(f_sym, (x_sym, y_sym))
H      = sym.hessian(f_sym, (x_sym, y_sym))
grad_f_func = sym.lambdify((x_sym, y_sym), grad_f, np)
H_func      = sym.lambdify((x_sym, y_sym), H, np)
```

### ⏭️ Esercizi 3–4–5: **salta**

Sono identici agli Esercizi 1–2–3 del Laboratorio 9 (Vandermonde, la matrice $[[6,63,662.2],\dots]$, Hilbert di ordine 4), che fai lunedì 24 nel Blocco B.

---

## 6. 🪤 Trappole di codice

1. **`newton_raphson_minimo` non è nello scheletro d'esame.** Se la chiedono implementata, la scrivi da zero: è `newton_raphson` con `Hessian_func` al posto di `J_numerical` e `grad_func` al posto di `F_numerical`.
2. **`.squeeze()` sui risultati di `F_numerical` e `J_numerical`.** `lambdify` su una `sym.Matrix` restituisce array con dimensioni spurie: senza `squeeze` gli shape non tornano e `np.linalg.solve` fallisce o restituisce risultati sbagliati silenziosamente.
3. **Il controllo sulla Jacobiana usa `matrix_rank`, non `det == 0`.** In aritmetica finita un determinante non è mai esattamente zero: `np.linalg.matrix_rank(jx) < jx.shape[0]` è più robusto.
4. **Nelle corde la Jacobiana si calcola PRIMA del `while`**, non dentro. Se la lasci dentro hai riscritto Newton.
5. **In Shamanskii, `if it % update == 0`**: con `update=1` torni a Newton classico — è un buon test di correttezza.
6. **`np.linalg.solve(jx, -fx)`, non `inv(jx) @ (-fx)`.** Stessa ragione del Blocco B: più stabile e più veloce.
7. **`utilities.py` non è un modulo importabile**: è un file di ricette da cui **copiare**. Non fare `import utilities`, aprilo e prendi i pezzi che servono.
8. **`X0` come lista o array di float**, e `X = np.array(initial_guess, dtype=float)` dentro la funzione: se passi interi, gli aggiornamenti vengono troncati.

---

## 7. Domande tipo → cosa citare

| Se ti chiedono… | Rispondi con… |
|---|---|
| "descrivere il metodo di Newton-Raphson" | piani tangenti → si intersecano in una retta → intersezione con $x_3=0$ → $J(X_k)s_k=-F(X_k)$, $X_{k+1}=X_k+s_k$; **convergenza locale, ordine 2** |
| "giustificare il grafico degli errori" | il testo del [[12 Scheda operativa Blocco A-bis#4. ⭐ La giustificazione teorica del grafico|§4]] |
| "descrivere teoricamente la variante per il minimo" | i punti stazionari risolvono $\nabla f(X)=0$; si applica NR a quel sistema; $H$ è la Jacobiana di $\nabla f$ ⟹ $H(X_k)s_k=-\nabla f(X_k)$; poi si classifica il punto con $\det H$ e $H_{11}$ |
| "come scegli l'iterato iniziale" | metodo grafico: curve di livello a quota $z=0$ delle due superfici, le intersezioni sono le soluzioni; **serve perché NR ha convergenza locale** |
| "perché le corde sono più lente" | la Jacobiana congelata in $X_0$ diventa un'approssimazione sempre peggiore man mano che ci si allontana ⟹ ordine 1 anziché 2 |
| "che vantaggio hanno allora" | non richiedono $n^2$ derivate a ogni passo né una nuova fattorizzazione: costo per iterazione molto minore |
| "cos'è il passo di Newton" | $s_k=X-X_k$, lo spostamento che porta dal punto corrente al punto in cui le approssimazioni lineari si annullano |
| "perché non $s_k=-J^{-1}F$" | numericamente non si calcola l'inversa: si **risolve** il sistema lineare (più stabile, meno operazioni) |
| "classificare un punto stazionario" | $\det H>0$ e $H_{11}>0$ → minimo · $\det H>0$ e $H_{11}<0$ → massimo · $\det H<0$ → sella · $\det H=0$ → nessuna informazione |
| "quando basta annullare il gradiente" | se $f$ è **convessa** e differenziabile: minimo $\iff\nabla f=0$, e il minimo relativo coincide con l'assoluto |

---

## 8. Il piano dei due giorni

### Sabato 22 — teoria e codice

- [ ] Richiami: curve di livello, derivate parziali, piano tangente, gradiente *([[12 Scheda operativa Blocco A-bis#1. Quanto pesa|§1]] del doc 11)*
- [ ] Taylor bivariato di grado 1 e 2 *([[12 Scheda operativa Blocco A-bis#2. ⭐ Le derivazioni da saper fare|§2]])*
- [ ] Jacobiano, $\nabla F=J^T$ *([[12 Scheda operativa Blocco A-bis#3. La procedura operativa completa|§3]])*
- [ ] **Derivazione D7**: Newton-Raphson per sistemi, su foglio bianco *([[12 Scheda operativa Blocco A-bis#4. ⭐ La giustificazione teorica del grafico|§4]])*
- [ ] Le due varianti e il loro trade-off *([[12 Scheda operativa Blocco A-bis#4. ⭐ La giustificazione teorica del grafico|§4]])*
- [ ] Massimi/minimi, Hessiana, criterio di classificazione, convessità *([[12 Scheda operativa Blocco A-bis#6. 🪤 Trappole di codice|§6]])*
- [ ] **Derivazione D8**: NR per il minimo *([[12 Scheda operativa Blocco A-bis#7. Domande tipo → cosa citare|§7]])*, e scrivi `newton_raphson_minimo`
- [ ] `sympy`: Jacobiana, gradiente, Hessiana simbolici + `lambdify` *([[12 Scheda operativa Blocco A-bis#3. La procedura operativa completa|§3]] di questa scheda)*
- [ ] 🔍 **Riverifica i 26 buchi che avevi chiuso ad aprile** confrontandoli con `01 Formulario dei buchi.md` [[12 Scheda operativa Blocco A-bis#4. ⭐ La giustificazione teorica del grafico|§4]]

### Domenica 23 — laboratorio e prova

- [ ] **Lab 8 Esercizio 1**: i cinque sistemi, tre metodi, grafico semilog. Sul sistema 2 prova **due $X^{(0)}$ in quadranti diversi** e verifica che converge a soluzioni diverse
- [ ] **Lab 8 Esercizio 2**: le quattro funzioni, incluso Rosenbrock
- [ ] ⏱️ **4 luglio 2024 Turno I — Esercizio 2** — non svolto ad agosto; ora in lettura diagnostica 🅑 venerdi 4 settembre
- [ ] Correzione ragionata: hai scritto la giustificazione teorica del grafico? Vale 3 punti su 12

---

## 9. Autotest di fine blocco

- [ ] Cos'è una curva di livello, e perché quelle a $z=0$ localizzano le soluzioni
- [ ] Derivate parziali continue ⟹ differenziabile: vale il viceversa?
- [ ] Scrivi il piano tangente a $z=f(x,y)$ in $(x_0,y_0)$
- [ ] Taylor bivariato di grado 1 — e cosa rappresenta geometricamente
- [ ] Definisci lo Jacobiano; cosa sono le sue righe? e le colonne? quanto vale $\nabla F$?
- [ ] **Ricava** $J(X_k)s_k=-F(X_k)$ partendo dai piani tangenti *(D7)*
- [ ] Ordine e tipo di convergenza di Newton-Raphson
- [ ] Le due varianti: cosa cambia, che ordine hanno, cosa fanno risparmiare
- [ ] Come scegli $X^{(0)}$ e perché è indispensabile
- [ ] Cos'è un punto sella
- [ ] Criterio di classificazione con $\det H$ e $H_{11}$ — tutti e quattro i casi
- [ ] Cosa garantisce la convessità
- [ ] **Ricava** $H(X_k)s_k=-\nabla f(X_k)$ *(D8)*
- [ ] Guardando un grafico semilog dell'errore: come distingui ordine 1 da ordine 2
