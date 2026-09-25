# Sistemi di equazioni non lineari

> **Blocco A-bis · 22–23 agosto** · Fonte: `Sistemi di equazioni non lineari.pdf`, `Polinomio_taylor.pdf`, `Polinomio di Taylor di una funzione bivariata.pdf`, `Cenni_CalcoloDifferenziale_Più_Variabili.pdf`
> Laboratorio collegato: **Laboratorio 8 (14/4), Esercizi 1–2** · Scheletri: `newton_raphson`, `newton_raphson_corde`, `newton_raphson_sham` (26 buchi, già chiusi ad aprile)

---

## 0. Il ponte con il Blocco A

Tutto questo capitolo è **Newton 1D portato in $\mathbb{R}^n$**. La corrispondenza è esatta:

| 1D (Blocco A) | $n$ dimensioni |
|---|---|
| $f(x)=0$ | $F(X)=0$, $F:\mathbb{R}^n\to\mathbb{R}^n$ |
| derivata $f'(x)$ | **Jacobiana** $J(X)$ |
| retta **tangente** in $x_k$ | **piani tangenti** alle superfici in $X_k$ |
| $x_{k+1}=x_k-\dfrac{f(x_k)}{f'(x_k)}$ | $J(X_k)\,s_k=-F(X_k)$, $\;X_{k+1}=X_k+s_k$ |
| dividere per $f'(x_k)$ | **risolvere un sistema lineare** |
| corde: $m$ costante | corde: $J(X_0)$ congelata |
| — | Shamanskii: $J$ aggiornata ogni $m$ passi |

> 🔑 **La differenza operativa più importante**: in 1D dividevi per uno scalare, qui **risolvi un sistema lineare a ogni iterazione**. È da lì che nasce tutto il risparmio delle varianti: congelare $J$ significa non rifare la fattorizzazione.

---

## 1. Richiami: calcolo differenziale in più variabili

### Campo scalare e grafico

$f:\mathbb{R}^2\to\mathbb{R}$ è un **campo scalare**: associa uno scalare a un punto del piano. Il suo grafico è la superficie

$$G_f=\{(x,y,z)\in\mathbb{R}^3 \;|\; z=f(x,y)\}$$

Esempio: $z=x^2+y^2$ è un paraboloide. Intersecandolo con $y=0$ si ottiene la parabola $z=x^2$; con $x=0$, la parabola $z=y^2$; con piani orizzontali $z=z_c$, circonferenze $x^2+y^2=z_c$ di raggio $\sqrt{z_c}$.

### ⭐ Curve di livello

> Sia $f:\text{dom}(f)\subset\mathbb{R}^2\to\mathbb{R}$ e $k\in\mathbb{R}$. La **curva di livello** $L(f,k)$ è l'insieme dei punti del dominio che soddisfano $f(x,y)=k$:
> $$L(f,k)=\{(x,y)\in\text{dom}(f)\;:\;f(x,y)=k\}$$

Geometricamente sono le **proiezioni ortogonali sul piano $Oxy$** delle curve che si ottengono intersecando il piano $z=k$ con il grafico di $f$. Tutti i punti di una stessa curva di livello hanno immagine alla stessa quota $z=k$.

Se $k\notin\text{Im}(f)$ allora $L(f,k)=\emptyset$.

> 📌 Le curve di livello **a quota $k=0$** sono lo strumento con cui si localizzano graficamente le soluzioni del sistema. Torna al [[11 Sistemi di equazioni non lineari#5. ⭐ Localizzare le soluzioni: il metodo grafico|§5]] — è l'unica parte "geometrica" che l'esame chiede sempre.

### Derivate parziali

$f$ è derivabile rispetto a $x$ in $(x_0,y_0)$ se esiste finito

$$\frac{\partial f}{\partial x}(x_0,y_0)=\lim_{h\to0}\frac{f(x_0+h,\,y_0)-f(x_0,y_0)}{h}$$

e analogamente rispetto a $y$ con l'incremento $k$ sulla seconda variabile.

**Interpretazione geometrica**: per derivare rispetto a $x$ si **fissa** $y=y_0$, cioè si taglia la superficie con il piano $y=y_0$; la derivata parziale è il **coefficiente angolare della retta tangente** alla curva così ottenuta. Le due rette tangenti (una per $x$, una per $y$) definiscono il **piano tangente** alla superficie in $P$.

### Differenziabilità e piano tangente

> ⚠️ Se $f$ è differenziabile in un punto allora tutte le derivate parziali esistono — **ma non vale il viceversa**: l'esistenza delle derivate parziali non garantisce la differenziabilità.

> **Teorema.** Sia $A\subseteq\mathbb{R}^2$ aperto, $f:A\to\mathbb{R}$. Se tutte le derivate parziali prime **esistono e sono continue**, allora $f$ è differenziabile.

Se $f$ è differenziabile ammette **piano tangente**:

$$z=f(x_0,y_0)+\frac{\partial f}{\partial x}(x_0,y_0)(x-x_0)+\frac{\partial f}{\partial y}(x_0,y_0)(y-y_0)$$

### Gradiente

$$\nabla f(x_0,y_0)=\begin{bmatrix}\dfrac{\partial f}{\partial x}(x_0,y_0)\\[8pt] \dfrac{\partial f}{\partial y}(x_0,y_0)\end{bmatrix}$$

Applicando $\nabla$ (nabla) a un **campo scalare** si ottiene un **campo vettoriale**.

---

## 2. Polinomio di Taylor

### Caso 1D — formula con resto di Lagrange

> **Teorema.** Sia $f$ derivabile $n+1$ volte in un intervallo $I$ contenente $x_0$. Allora per ogni $x\in I$ esiste $c$ compreso fra $x_0$ e $x$ tale che
> $$f(x)=P_n(x)+R_n(x)$$
> con
> $$P_n(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2!}(x-x_0)^2+\dots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n$$
> $$R_n(x)=\frac{f^{(n+1)}(c)}{(n+1)!}(x-x_0)^{n+1} \qquad\text{(resto di Lagrange)}$$

In un intorno di $x_0$, una funzione derivabile $n$ volte si approssima con un polinomio di grado $n$; l'errore è il resto, che tende a zero al crescere di $n$.

*(Esempio classico: $f(x)=e^x$ in $x_0=0$ → $P_1=1+x$, $P_2=1+x+\frac{x^2}{2}$, $P_3=1+x+\frac{x^2}{2}+\frac{x^3}{6}$.)*

### ⭐ Caso bivariato

$$P_n(x,y)=f(x_0,y_0)+\sum_{i,j\,:\;i+j\le n}\frac{1}{i!\,j!}\frac{\partial^{\,i+j}f(x_0,y_0)}{\partial x^i\,\partial y^j}(x-x_0)^i(y-y_0)^j$$

**Grado 1** — è il **piano tangente**, ed è quello che serve per Newton-Raphson:

$$\boxed{P_1(x,y)=f(x_0,y_0)+(x-x_0)\frac{\partial f}{\partial x}(x_0,y_0)+(y-y_0)\frac{\partial f}{\partial y}(x_0,y_0)}$$

**Grado 2** — serve per il metodo del minimo:

$$P_2(x,y)=P_1(x,y)+\frac{1}{2!}\left[(x-x_0)^2\frac{\partial^2f}{\partial x^2}+2(x-x_0)(y-y_0)\frac{\partial^2f}{\partial x\partial y}+(y-y_0)^2\frac{\partial^2f}{\partial y^2}\right]$$

*(tutte le derivate valutate in $(x_0,y_0)$; nota il **2** nel termine misto — viene dal fatto che $i=j=1$ compare due volte)*

---

## 3. Il problema

Un sistema di equazioni non lineari si scrive

$$\begin{cases} f_1(x_1,\dots,x_n)=0\\ f_2(x_1,\dots,x_n)=0\\ \dots\\ f_n(x_1,\dots,x_n)=0\end{cases} \qquad f_i:\mathbb{R}^n\to\mathbb{R}\ \text{continue e differenziabili}$$

Raccogliendo in una funzione **a valori vettoriali** $F:\mathbb{R}^n\to\mathbb{R}^n$:

$$X=\begin{bmatrix}x_1\\ \vdots\\ x_n\end{bmatrix} \longmapsto F(X)=\begin{bmatrix}f_1(X)\\ \vdots\\ f_n(X)\end{bmatrix}$$

risolvere il sistema equivale a trovare $\alpha=[\alpha_1,\dots,\alpha_n]^T$ tale che $F(\alpha)=0$.

### ⭐ Lo Jacobiano

Matrice le cui entrate sono le derivate parziali di **ciascuna** $f_i$ rispetto a **ciascuna** variabile $x_j$:

$$J(X)=\begin{bmatrix} \dfrac{\partial f_1}{\partial x_1} & \dfrac{\partial f_1}{\partial x_2} & \dots & \dfrac{\partial f_1}{\partial x_n}\\[8pt] \dfrac{\partial f_2}{\partial x_1} & \dfrac{\partial f_2}{\partial x_2} & \dots & \dfrac{\partial f_2}{\partial x_n}\\ \vdots & \vdots & & \vdots\\[4pt] \dfrac{\partial f_n}{\partial x_1} & \dfrac{\partial f_n}{\partial x_2} & \dots & \dfrac{\partial f_n}{\partial x_n}\end{bmatrix}$$

**Riga $i$** = gradiente di $f_i$. **Colonna $j$** = $\dfrac{\partial F}{\partial x_j}$.

Vale la relazione da citare:

$$\boxed{\nabla F(X)=J^T(X)}$$

### Esempio guida

$$\begin{cases} f_1(x_1,x_2)=x_1^2+x_2^2-9=0\\ f_2(x_1,x_2)=x_1+x_2-3=0\end{cases} \qquad\Longrightarrow\qquad J(X)=\begin{bmatrix}2x_1 & 2x_2\\ 1 & 1\end{bmatrix}$$

Geometricamente: il punto di intersezione fra la circonferenza di centro l'origine e raggio 3, e la retta $x_1+x_2=3$.

---

## 4. ⭐ Il metodo di Newton-Raphson

### L'idea geometrica (caso $n=2$)

Le due funzioni si interpretano come **superfici** in $\mathbb{R}^3$: $x_3=f_1(x_1,x_2)$ e $x_3=f_2(x_1,x_2)$. Le soluzioni sono i punti in cui **entrambe** intersecano il piano $x_3=0$.

Il metodo procede così:

1. da $X_k$, le due superfici vengono approssimate localmente dai rispettivi **piani tangenti**;
2. i due piani tangenti si intersecano in una **retta** nello spazio;
3. il nuovo punto $X_{k+1}$ è dove quella retta interseca il piano $x_3=0$;
4. si ripete da $X_{k+1}$.

Il problema non lineare viene sostituito **localmente** da uno lineare.

### La costruzione analitica

Sviluppo di Taylor **del primo ordine** di $f_1$ e $f_2$ centrato in $X_k$ — cioè i due piani tangenti:

$$x_3=P_1(x_1,x_2)=f_1(X_k)+\frac{\partial f_1}{\partial x_1}(X_k)(x_1-x_1^{(k)})+\frac{\partial f_1}{\partial x_2}(X_k)(x_2-x_2^{(k)})$$
$$x_3=Q_1(x_1,x_2)=f_2(X_k)+\frac{\partial f_2}{\partial x_1}(X_k)(x_1-x_1^{(k)})+\frac{\partial f_2}{\partial x_2}(X_k)(x_2-x_2^{(k)})$$

Si impone che **entrambe** si annullino ($x_3=0$):

$$\begin{cases} 0=f_1(X_k)+\frac{\partial f_1}{\partial x_1}(X_k)(x_1-x_1^{(k)})+\frac{\partial f_1}{\partial x_2}(X_k)(x_2-x_2^{(k)})\\[4pt] 0=f_2(X_k)+\frac{\partial f_2}{\partial x_1}(X_k)(x_1-x_1^{(k)})+\frac{\partial f_2}{\partial x_2}(X_k)(x_2-x_2^{(k)})\end{cases}$$

In forma matriciale:

$$0=F(X_k)+J(X_k)(X-X_k) \qquad\Longrightarrow\qquad J(X_k)(X-X_k)=-F(X_k)$$

Ponendo $s_k=X-X_k$ (**passo di Newton**):

$$\boxed{\;J(X_k)\,s_k=-F(X_k), \qquad X_{k+1}=X_k+s_k\;}$$

> ⚠️ Se $J(X_k)$ è invertibile si potrebbe scrivere $s_k=-J^{-1}(X_k)F(X_k)$, **ma numericamente non si fa**: si risolve il sistema lineare, non si calcola l'inversa. (È lo stesso argomento del Blocco B: $n$ sistemi in più e meno stabilità.)

### L'algoritmo

> Dato $X_0\in\mathbb{R}^n$ ed $F$, per ogni iterazione $k$:
> 1. valutare $J(X_k)$
> 2. risolvere il sistema lineare $J(X_k)s_k=-F(X_k)$
> 3. porre $X_{k+1}=X_k+s_k$

**È un metodo a convergenza locale e ordine di convergenza quadratico** — esattamente come Newton 1D, e per la stessa ragione (approssimazione al primo ordine di una funzione regolare vicino a uno zero semplice).

### Le due varianti

Valutare lo Jacobiano richiede $n^2$ derivate parziali a ogni passo. Due varianti riducono il costo:

**1. Metodo delle corde.** Si usa **lo stesso $J(X_0)$** (o una sua approssimazione $A(X_0)$) per **tutte** le iterazioni.

**2. Metodo di Shamanskii.** Si valuta lo Jacobiano **ogni $m$ iterazioni** e lo si riusa per le $m$ successive: $J_{k+i}=J_i$, $i=1,\dots,m$. Arrivati a $x_{k+m+1}$ si rivaluta.

| Variante | Jacobiana | Ordine | Costo per iterazione |
|---|---|---|---|
| Newton-Raphson | ricalcolata sempre | **2** | alto |
| Corde | $J(X_0)$ congelata | **1** | minimo |
| Shamanskii | ogni $m$ passi | intermedio | intermedio |

> 🔗 **È la stessa struttura del Blocco A**: corde 1D ↔ corde $n$-D. Lì risparmiavi una valutazione di $f'$, qui risparmi $n^2$ derivate **più** la fattorizzazione della matrice. Il guadagno è molto maggiore, e per questo la variante ha più senso in $\mathbb{R}^n$ che in $\mathbb{R}$.
> *Verificato sul sistema dell'esame*: Newton 4 iterazioni, Shamanskii ($m=3$) 7, corde 23.

---

## 5. ⭐ Localizzare le soluzioni: il metodo grafico

![[curve_livello_soluzioni.png]]

> Le curve di livello a quota $z=0$ delle due superfici: le loro **intersezioni sono le soluzioni** del sistema. A destra il sistema 2 del Laboratorio 8, che ne ha **quattro**.

![[bacini_attrazione.png]]

>  partendo da punti diversi Newton-Raphson converge a **soluzioni diverse**. Il colore indica quale. È la convergenza **locale** resa visibile.

**Serve sempre**, perché Newton-Raphson ha convergenza **locale**: senza un buon $X^{(0)}$ non converge.

Considerando $f_1$ ed $f_2$ come superfici $x_3=f_1(x_1,x_2)$ e $x_3=f_2(x_1,x_2)$:

- $f_1(x_1,x_2)=0$ è la **curva di livello a quota zero** della prima superficie: tutti i punti del piano dove la prima superficie tocca il piano $x_1x_2$
- $f_2(x_1,x_2)=0$ è la curva di livello a quota zero della seconda
- i punti che stanno **sull'intersezione delle due curve** annullano contemporaneamente $f_1$ ed $f_2$: **sono le soluzioni del sistema**

**La procedura**: si tracciano le due curve di livello $z=0$, si legge dal grafico una stima delle coordinate di un punto di intersezione, e si usa quella stima come iterato iniziale. Partendo vicino alla soluzione vera, Newton-Raphson converge rapidamente.

### Come si fa in Python

> 🐍 Da `sympy` a `matplotlib`: [[00c Python e grafici - guida essenziale per l'esame#Parte 4 — sympy: solo il minimo che serve (metodi di Newton / minimo)|00c · Parte 4 — sympy e lambdify]].


```python
x = np.arange(-4, 4, 0.1);  y = np.arange(-4, 4, 0.1)
X, Y = np.meshgrid(x, y)
superfici = F_numerical(X, Y).squeeze()     # superfici[0]=f1(X,Y), superfici[1]=f2(X,Y)

plt.contour(X, Y, superfici[0,:,:], levels=[0], colors='black')   # curva f1 = 0
plt.contour(X, Y, superfici[1,:,:], levels=[0], colors='red')     # curva f2 = 0
plt.grid(True); plt.show()
# le intersezioni fra la curva nera e quella rossa sono le soluzioni: leggi le coordinate a occhio
```

*(Per la versione 3D con le superfici e il piano $z=0$: `ax.plot_surface(X, Y, superfici[0,:,:], ...)` più `Z = np.zeros_like(X)` per il piano. Il codice pronto sta in `utilities.py`.)*

### Un esempio applicativo: cinematica inversa

Un braccio meccanico piano con segmenti $l_1,l_2$ e angoli $\alpha_1$ (rispetto al riferimento fisso) e $\alpha_2$ (rispetto al primo braccio). L'estremo $O_2$ ha coordinate

$$x_2=l_1\cos\alpha_1+l_2\cos(\alpha_1+\alpha_2), \qquad y_2=l_1\sin\alpha_1+l_2\sin(\alpha_1+\alpha_2)$$

**Cinematica diretta**: noti gli angoli, trova la posizione — è una semplice valutazione.
**Cinematica inversa**: nota la posizione desiderata, trova gli angoli — è un **sistema non lineare**:

$$\begin{cases} f_1(\alpha_1,\alpha_2)=l_1\cos\alpha_1+l_2\cos(\alpha_1+\alpha_2)-x_2=0\\ f_2(\alpha_1,\alpha_2)=l_1\sin\alpha_1+l_2\sin(\alpha_1+\alpha_2)-y_2=0\end{cases}$$

---

## 6. Massimi e minimi di funzioni di due variabili

### Definizioni

$P_0=(x_0,y_0)$ è **massimo relativo** (locale) se $f(x_0,y_0)\ge f(x,y)$ per tutti i punti di **un intorno** $\mathcal{N}$ di $P_0$ contenuto nel dominio; **minimo relativo** se vale $\le$.

È **massimo assoluto** (globale) se la disuguaglianza vale per **tutti** i punti del dominio; analogamente per il minimo assoluto.

### Punti critici e Hessiana

![[punti_critici.png]]

> I tre casi del criterio. Il segno di $\det H$ separa sella (negativo) da massimo/minimo (positivo); fra questi due decide il segno di $H_{11}$.

I punti in cui si annulla il gradiente si chiamano **punti critici** o **punti stazionari**.

$$\big(H(X)\big)_{ij}=\frac{\partial^2f(X)}{\partial x_i\,\partial x_j}, \qquad i,j=1,\dots,n$$

> ### ⭐ Criterio di classificazione
> Calcolato $\det H$ **nel punto di stazionarietà**:
>
> | $\det H$ | $H_{11}$ | Natura del punto |
> |---|---|---|
> | $>0$ | $>0$ | **minimo locale** |
> | $>0$ | $<0$ | **massimo locale** |
> | $<0$ | — | **punto sella** |
> | $=0$ | — | nessuna informazione |

Un **punto sella** è un punto critico dove la funzione ha un minimo locale in una direzione e un massimo locale nella direzione perpendicolare.

### Funzioni convesse

$f:A\subseteq D\to\mathbb{R}$, definita su un insieme convesso $A$, è **convessa** se

$$f\big(t\,x+(1-t)\,x'\big)\le t\,f(x)+(1-t)\,f(x')$$

Geometricamente: ogni segmento che congiunge due punti del grafico sta **al di sopra** del grafico (o coincide con esso).

> **Per una funzione convessa il minimo relativo coincide con il minimo assoluto.**
>
> **Teorema.** Se $f$ è convessa e differenziabile, allora $(x_0,y_0)$ è un minimo $\iff \nabla f(x_0,y_0)=0$.

Questo teorema è il ponte con il [[11 Sistemi di equazioni non lineari#7. ⭐ Newton-Raphson per il calcolo del minimo|§7]]: per una funzione convessa basta annullare il gradiente, senza controllare l'Hessiana.

---

## 7. ⭐ Newton-Raphson per il calcolo del minimo

> Data $f:\mathbb{R}^n\to\mathbb{R}$, $f\in C^2$, trovare $X^*=\arg\min_{X\in\mathbb{R}^n}f(X)$.

**L'idea in una riga**: i punti di stazionarietà sono le soluzioni del **sistema non lineare** $\nabla f(X^*)=0$, quindi si applica Newton-Raphson a quel sistema.

$$\nabla f(X)=0 \;\Longleftrightarrow\; \begin{cases}\dfrac{\partial f}{\partial x_1}=0\\ \vdots\\ \dfrac{\partial f}{\partial x_n}=0\end{cases}$$

### La derivazione

Si applica Taylor di grado 1 a **ciascuna componente del gradiente**, centrato in $X_k$ (caso $n=2$):

$$x_3=P_1=\frac{\partial f}{\partial x_1}(X_k)+\frac{\partial^2f}{\partial x_1^2}(X_k)(x_1-x_1^{(k)})+\frac{\partial^2f}{\partial x_1\partial x_2}(X_k)(x_2-x_2^{(k)})$$
$$x_3=Q_1=\frac{\partial f}{\partial x_2}(X_k)+\frac{\partial^2f}{\partial x_2\partial x_1}(X_k)(x_1-x_1^{(k)})+\frac{\partial^2f}{\partial x_2^2}(X_k)(x_2-x_2^{(k)})$$

Imponendo $x_3=0$ per entrambe e riscrivendo in forma matriciale:

$$0=\nabla f(X_k)+H(X_k)(X-X_k) \qquad\Longrightarrow\qquad H(X_k)(X-X_k)=-\nabla f(X_k)$$

$$\boxed{\;H(X_k)\,s_k=-\nabla f(X_k), \qquad X_{k+1}=X_k+s_k\;}$$

> 🔑 **È esattamente Newton-Raphson con due sostituzioni**: il **gradiente** al posto di $F$, l'**Hessiana** al posto della Jacobiana. Coerente, perché $H$ **è** la Jacobiana di $\nabla f$.
> $s_k$ definisce una **direzione di discesa** da $X_k$ a $X_{k+1}$.

### L'algoritmo

> Dato $X_0\in\mathbb{R}^n$, per ogni iterazione $k$:
> 1. valutare $H(X_k)$
> 2. risolvere $H(X_k)s_k=-\nabla f(X_k)$
> 3. porre $X_{k+1}=X_k+s_k$

Il **criterio di arresto** è sulla norma del gradiente: quando $\|\nabla f\|$ scende sotto la tolleranza, si è in un punto di stazionarietà. Poi si classifica con l'Hessiana ([[11 Sistemi di equazioni non lineari#6. Massimi e minimi di funzioni di due variabili|§6]]).

### Esempio svolto

$$f(x_1,x_2)=x_1^2+x_2^2-4x_1-2x_2$$

Funzione **convessa**, quindi il minimo relativo coincide con quello assoluto.

$$\nabla f=\begin{bmatrix}2x_1-4\\ 2x_2-2\end{bmatrix}, \qquad H=\begin{bmatrix}2&0\\ 0&2\end{bmatrix}$$

Partendo da $X_0=(-2,1)$: $\;\nabla f(X_0)=\begin{bmatrix}-8\\ 0\end{bmatrix}$, e

$$\begin{bmatrix}2&0\\ 0&2\end{bmatrix}s_0=-\begin{bmatrix}-8\\ 0\end{bmatrix} \;\Longrightarrow\; s_0=\begin{bmatrix}4\\ 0\end{bmatrix} \;\Longrightarrow\; X_1=\begin{bmatrix}-2\\ 1\end{bmatrix}+\begin{bmatrix}4\\ 0\end{bmatrix}=\begin{bmatrix}2\\ 1\end{bmatrix}$$

In $X_1$: $\nabla f(X_1)=\begin{bmatrix}0\\ 0\end{bmatrix}$ → il criterio d'arresto scatta, $X_1$ è stazionario.
$\det H=4>0$ e $H_{11}=2>0$ ⟹ **è un minimo**.

*(Una iterazione sola: normale, perché $f$ è quadratica e Taylor di grado 2 la rappresenta esattamente.)*

---

## 8. Da ricordare

| | |
|---|---|
| Curva di livello | $L(f,k)=\{(x,y):f(x,y)=k\}$; a $k=0$ localizza le soluzioni |
| Differenziabilità | derivate parziali continue ⟹ differenziabile (non il viceversa) |
| Piano tangente | $z=f(x_0,y_0)+f_x(x_0,y_0)(x-x_0)+f_y(x_0,y_0)(y-y_0)$ |
| Taylor 1D con resto | $R_n=\frac{f^{(n+1)}(c)}{(n+1)!}(x-x_0)^{n+1}$ |
| Taylor bivariato grado 1 | = il piano tangente |
| Jacobiano | $J_{ij}=\partial f_i/\partial x_j$; riga $i$ = $\nabla f_i$; $\nabla F=J^T$ |
| **Newton-Raphson** | $J(X_k)s_k=-F(X_k)$, $X_{k+1}=X_k+s_k$ — locale, **ordine 2** ⭐ |
| Corde | $J(X_0)$ congelata — ordine 1 |
| Shamanskii | $J$ ogni $m$ passi — ordine intermedio |
| Localizzazione | curve di livello a $z=0$, intersezioni = soluzioni |
| Punti critici | $\nabla f=0$ |
| Classificazione | $\det H>0$ e $H_{11}>0$ → min · $\det H>0$ e $H_{11}<0$ → max · $\det H<0$ → sella · $=0$ → nulla |
| Convessità | minimo relativo = assoluto; convessa+differenziabile ⟹ min $\iff\nabla f=0$ |
| **NR per il minimo** | $H(X_k)s_k=-\nabla f(X_k)$ ⭐ |
