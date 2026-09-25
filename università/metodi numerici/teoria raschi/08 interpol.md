## interpolazione polinomiale
sia $\mathbb{R}_{n}[x]$ lo spazio dei polinomi a coefficienti reali di grado $\leq n$
$$
\mathbb{R}_{n}[x]= \{ \alpha _{0}+\alpha_{1}x+ \dots + \alpha _{n}x^n \mid a_{i} \in \mathbb{R}\}
$$
 la base canonica di $\mathbb{R}_{n}[x]$ è composta dalle funzioni elementari
 $$
\phi_{0}=1, \phi_{1}=x,\dots, \phi_{n}=x^n
$$
allora, note $n+1$ coppie $(x_{i}, y_{i})$ tali che
$$
x _{j} \neq x_{i} \quad \forall j \neq i
$$
il problema dell'interpolazione polinomiale consiste nel determinare il polinomio
$$
p_{n}(x) \in \mathbb{R}_{n}[x]
$$
tale che
$$
p _{n}(x_{i}) = y_{i} \quad \forall i =0,\dots,n
$$
ergo, che rispetti tutti i _vincoli di interpolazione_.
inoltre
- $x_{i}$ sono i _nodi di interpolazione_
- $y_{i}$ sono le _valutazioni del fenomeno_ nei relativi nodi

**nota**: determinato $p_{n}(x)$, si può valutare il fenomeno in un altro nodo $\tilde{ x}$. si parla di
- _interpolazione_, se $\tilde{x}$ è compreso tra il minimo $x_{i}$ ed il massimo $x_{i}$
-  _estrapolazione_ in caso contrario.

sia quindi $p_{n}(x)$, siano $n+1$ coppie $(x_{i}, y_{i}) \in \mathbb{R}^2$.
imponendo il passaggio di $p_{n}$ per tali coppie ottengo il sistema
$$
\begin{dcases}
\alpha _{0}+\alpha_{1}x _{0} + \dots + \alpha_{n}x _{0}^n  & = y_{0} \\
 & \vdots \\
\alpha _{0}+\alpha_{1}x _{n} + \dots + \alpha_{n}x_{n}^n  & = y_{n}
\end{dcases}
$$
allora riscrivo il sistema in forma di matrice
$$
\boxed{
V\alpha = y
}
$$
in cui
$$
V = \begin{bmatrix}
1 & x_{0} & \dots & x_{0}^n \\
1 & x _{1} & \dots & x_{1}^n  \\
 \vdots & \vdots & \ddots & \vdots \\
1 & x_{n} & \dots & x^n_{n}
\end{bmatrix}
\quad \alpha=\begin{bmatrix}
\alpha_{0} \\ 
\alpha_{1} \\
\vdots \\
\alpha_{n}
\end{bmatrix}
\quad y = \begin{bmatrix}
y_{0} \\
y_{1} \\
\vdots \\
y_{n}
\end{bmatrix}
$$
$V\in \mathcal{M}_{(n+1)\times(n+1)}(\mathbb{R})$ è detta **matrice di Vandermonde**.

**osservazione**: per ipotesi del problema, $x_{i}\neq x_{j}$ per ogni $i\neq j\Rightarrow \mathrm{rg}V =n+1$ ergo $V$ ha sempre rango massimo, e per teo Rouché-Capelli ammette una ed una sola soluzione
$$
\alpha= V^{-1}y
$$
segue che
$$
\exists! p _{n}(x) \text{ tale che } p_{n}(x _{i}) =y_{i} \quad \forall i=0,\dots,n
$$
**nota**: come conseguenza dell'unicità del polinomio di interpolazione, se
$$
p(x), q(x) \in \mathbb{R}_{n}[x]
$$
hanno $n+1$ punti di intersezione, allora essi sono _lo stesso_ polinomio
$$
p(x)=q(x)
$$

###### condizionamento per matrice di Vandermonde
data la matrice di Vandermonde
$$
V = \begin{bmatrix}
1 & x_{0} & \dots & x_{0}^n \\
1 & x _{1} & \dots & x_{1}^n  \\
 \vdots & \vdots & \ddots & \vdots \\
1 & x_{n} & \dots & x^n_{n}
\end{bmatrix}
$$
si osserva subito come i suoi elementi siano del tipo
$$
V_{ij} = x^j_{i}
$$
allora se 
- $|x_{i}|>1$, l'elemento $x^j_{i}$ cresce molto rapidamente rispetto a $j$
- $|x_{i}|<1$, l'elemento $x^j_{i}$ decade molto rapidamente verso $0$, rispetto a $j$

ne segue che le ultime colonne, ergo quelle per $j$ maggiore, diventano quasi proporzionali tra loro.
questo implica che il minimo valore singolare $\sigma_{min} = \sigma_{n}$ diventa molto piccolo, mentre il massimo $\sigma_{max}=\sigma_{1}$ cresce.
usando SVD, esprimo l'indice di condizionamento di $V$ come
$$
K(V) = \frac{\sigma_{max}}{\sigma_{min}}
$$
il quale tende a crescere molto velocemente, per il fenomeno descritto prima.
in altre parole, all'aumentare di $n$, il condizionamento della matrice di Vandermonde peggiora molto velocemente.

##### basi di Lagrange
il problema della matrice di Vandermonde sta nel fatto che le funzioni di base canonica per $\mathbb{R}_{n}[x]$
$$
\phi_{j} = x^j
$$
**non** sono legate ai nodi di interpolazione.
scegliamo quindi una base diversa, in modo tale che la matrice dei termini noti del sistema, diventi l'identità.

siano quindi
$$
L_{0}(x),\dots, L_{n}(x) \in \mathbb{R}_{n}[x]
$$
_polinomi di base di Lagrange_, tali che essi formino una base di $\mathbb{R}_{n}[x]$, inoltre
$$
L _{j}(x_{i}) =  \begin{cases}
1  & \text{se } x=j \\
0 & \text{altrimenti}
\end{cases}\qquad (\star)
$$
allora ogni polinomio $p_{n}(x) \in \mathbb{R}_{n}[x]$ si esprime come
$$
p _{n}(x)= \alpha_{0}L_{0}(x) +\dots\alpha_{n}L_{n}(x)
$$
ed imponendo le condizioni di interpolazione, ottengo il sistema
$$
\begin{cases}
\alpha _{0}L_{0}(x _{0}) +\dots\alpha_{n}L _{n}(x_{0})  & = y_{0}  \\
\alpha _{0}L_{0}(x _{1}) +\dots\alpha_{n}L _{n}(x_{1})  &  = y_{1}\\
 & \vdots \\
\alpha _{0}L_{0}(x _{n}) +\dots\alpha_{n}L _{n}(x_{n})  & =y_{n} \\
\end{cases}
$$
in forma matriciale
$$
\begin{align}
\begin{bmatrix}
L _{0}(x_{0})  & L _{1}(x_{0})  & \dots & L_{n}(x_{0}) \\
L _{0}(x_{1})  & L _{1}(x_{1})  & \dots & L_{n}(x_{1}) \\
\vdots & \vdots & \ddots & \vdots \\
L _{0}(x_{n})  & L _{1}(x_{n})  & \dots & L_{n}(x_{n}) \\
\end{bmatrix}
\begin{bmatrix}
\alpha_{0} \\ 
\alpha_{1}\\
\vdots \\
\alpha_{n}
\end{bmatrix}
 & =
\begin{bmatrix}
y_{0} \\
y_{1} \\
\vdots \\
y_{n}
\end{bmatrix}
\\ \\ 
\begin{bmatrix}
1 & 0 & \dots & 0 \\
0 & 1 & \dots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
 0 & 0 & \dots & 1
\end{bmatrix}
\begin{bmatrix}
\alpha_{0} \\
\alpha_{1} \\
\vdots \\
\alpha_{n}
\end{bmatrix}
 & =\begin{bmatrix}
y_{0} \\
y_{1} \\
\vdots \\
y_n
\end{bmatrix}
\\
\\
\boxed{I \alpha   = y}
\end{align}  \qquad(\star \star)
$$
usando $(\star)$ abbiamo ottenuto che il vettore dei coefficienti incogniti $\alpha$ coincide con il termine noto $y$.

a questo punto è sufficiente costruire i polinomi di base di Lagrange in modo da rispettarne le proprietà.
da $(\star)$ so che $L_{j}(x_{i})$ si annulla $\forall x_{i}$ tale che $i\neq j$.
in altre parole, $L_{j}(x)$ ha esattamente $n-1$ zeri, i quali sono $x_{0},\dots, x_{j-1}, x_{j+1}, \dots ,x_{n}$, quindi un polinomio del tipo
$$
L _{j}(x) = c(x-x_{0}) \cdots(x-x _{j-1})(x-x_{j+1}) \cdots(x-x_{n})
$$
in cui $c \in \mathbb{R}$ è determinata in modo tale da avere $L_{j}(x_{j})= 1$, ergo
$$
L _{j}(x_{j}) = c \prod^n _{i\neq j}(x_{j} - x _{i}) = 1 \Rightarrow c = \frac{1}{\prod^n _{i\neq j}(x _{j} - x_{i}) }
$$
da cui quindi
$$
\boxed{
L _{j}(x) = \prod^n_{i\neq j} \frac{(x-x_{i})}{(x_{j}-x_{i})}
}
$$
###### prop partizione dell'unità per polinomi base di Lagrange
> in $\mathbb{R}_{n}[x]$, vale $\forall x \in[x_{0}, x_{n}]$
> $$
> \sum^n_{i=0} L_{j}(x)=1
> $$

**dimostrazione**: sia
$$
S(x) =\sum^n_{i=0} L_{j}(x)
$$
allora $S(x) \in \mathbb{R}_{n}[x]$.
a questo punto considero $n+1$ punti $x_{0},\dots,x_{n}$, per definizione di polinomio di base di Lagrange ho
$$
S(x_{i})= 1 \qquad\forall i=0,\dots,n
$$
sia il polinomio costante $k = 1 \in \mathbb{R}_{n}[x]$.
allora $S(x)$ e $k$ hanno $n+1$ punti di intersezione, ergo
$$
S(x)=\sum^n _{i=0} L_{j}(x)=1 \qquad\boxed{\text{cvd}}
$$

###### def polinomio interpolatore in forma di Lagrange

da $(\star \star)$, segue immediatamente che, dati
$$
L_{0}(x),\dots, L_{n}(x) \text{ base di } \mathbb{R}_{n}[x]
$$
per un qualsiasi
$$
p _{n}(x) \in \mathbb{R}_{n}[x] \qquad 
\begin{array}{}
x_{0},\dots,x_{n}\in \mathbb{R}\\
y _{0}=p_{n}(x_{0}),\dots,y_{n}=p_{n}(x_{n})
\end{array}
$$
vale per teo coordinate
$$
p _{n}(x)=p_{n}(x _{0})L_{0}(x_{0})+\dots+p_{n}(x_{n})L_{n}(x_{n})
$$
in altre parole, date le $n+1$ coppie
$$
(x_{i}, y _{i}) \text{ tali che } x_{i}\neq x_{j} \text{ se } i\neq j
$$
il polinomio $p_{n}(x) \in \mathbb{R}_{n}[x]$ soluzione del problema di interpolazione può essere espresso nella forma seguente, detta _forma di Lagrange_
$$
\boxed{
p_{n}(x) = \sum^n_{j=0}y_{j}L_{j}(x)
}
$$
###### complessità
sia il problema di interpolazione polinomiale definito per le $n+1$ coppie $(x_{i}, y_{i})$ tali che $x_{i}\neq x_{j}$ per ogni $i\neq j$.
siano inoltre
$$
p _{n}(x) =\sum^n_{j=0}y _{j}L_{j}(x) \qquad L_{j}(x)= \prod_{i\neq j}^n\frac{x-x_{i}}{x_{j}-x_{i}}
$$
allora, a meno di pre-processing
- valutare un polinomio di base di Lagrange in un punto ha complessità dell'ordine
	$$
	O(n)
	$$
	infatti vengono svolte $2n$ moltiplicazioni, più la divisione finale.
- calcolare il polinomio interpolatore richiede di valutare $n$ polinomi di base di Lagrange, quindi il problema ha complessità
	$$
	O(n^2)
	$$
- valutare il polinomio interpolatore in $m$ punti ha complessità dell'ordine
	$$
	O(mn^2)
	$$
	questo può essere richiesto nel caso il polinomio debba essere comparato con altre funzioni, oppure il polinomio debba essere rappresentato graficamente

**nota**: una volta costruito il polinomio interpolatore, supponendo di aggiungere una coppia
$$
(x_{n+1}, y_{n+1})
$$
sarebbe necessario ricalcolare ogni polinomio di base $L_{j}(x)$, infatti ogni polinomio di base dipende da tutti i nodi $x_{i}$.

##### errore per interpolazione polinomiale
sia
$$
f:\mathbb{R} \to \mathbb{R}
$$
la quale viene valutata in $n+1$ punti, ottenendo le coppie di valori
$$
(x_{0}, f(x _{0})=y_{0}),\dots, (x_{n}, f(x_{n})=y_{n})
$$
sia quindi $p_{n}(x) \in \mathbb{R}_{n}[x]$ il polinomio di grado $n$ che interpola le coppie definite prima.
sia inoltre $\tilde{ x} \in \mathbb{R}$.

vogliamo quindi valutare l'errore commesso valutando $p_{n}(\tilde{x})$, rispetto che $f(\tilde{x})$.
definisco l'errore di valutazione come
$$
E(\tilde{x}) = f(\tilde{x}) - p_{n}(\tilde{x})
$$

###### teo errore per polinomio interpolatore
> sia
> $$
> f: [a, b]\to \mathbb{R} \qquad f\in C^{n+1}([a,b])
> $$
> siano inoltre le coppie
> $$
> (x_{0}, f(x _{0})=y_{0}),\dots, (x_{n}, f(x_{n})=y_{n})
> $$
> con $a=x_{0}$ e $b=x_{n}$.
> sia $p_{n}(x)\in \mathbb{R}_{n}[x]$ il polinomio che interpola le coppie $(x_{i}, y_{i})$.
> allora $\forall  \tilde{x} \in [a,b]$ vale
> $$
> E(\tilde{x} )=f(\tilde{x})- p_{n}(\tilde{x}) = \frac{1}{(n+1)!}\omega_{n+1}(\tilde{x})f^{(n+1)}(\xi)
> $$
> in cui
> $$
> \omega _{n+1}(x) = \prod^n_{j=0}(x-x_{j}) \qquad \xi \in\  ]a,b[
> $$

**osservazione**: se $\tilde{x}$ è uno dei nodi di interpolazione, allora l'errore è nullo, infatti ogni nodo annulla $\omega_{n+1}$.

**dimostrazione**: fissiamo $\tilde{x}\in[a,b]$.
inizialmente, se $\tilde{x}=x_{i}$ per un qualche $i$, allora
$$
f(\tilde{x}) - p_{n}(\tilde{x})=0
$$
poiché vale $p_{n}(x_{i}) = f(x_{i})$ per ogni $x_{i}$.
inoltre, dall'osservazione precedente
$$
\exists i\text{ tale che } x _{i}=\tilde{x} \Rightarrow \omega_{n+1}(\tilde{x}) =0
$$
quindi la formula sarebbe banalmente dimostrata.

ora si assuma $\tilde{ x}\neq x_{i}$ per ogni $i$.
definisco la funzione ausiliaria
$$
\phi(x)= f(x) - p_{n}(x) - K\omega_{n+1}(x)
$$
dove $K \in \mathbb{R}$ è scelta in modo tale che
$$
\phi(\tilde{x}) =0
$$
quindi, imponendo tale condizione ho
$$
0 = f(\tilde{x})-p _{n}(\tilde{x}) -K\omega_{n+1}(\tilde{x})\Rightarrow K = \frac{f(\tilde{x} )-p_{n}(\tilde{x})}{\omega_{n+1}(\tilde{x})}
$$
per costruzione, ho subito
$$
\begin{dcases}
\phi(x_{i}) =0 \qquad \forall i = 0,\dots, n\\ \\
\phi(\tilde{x}) =0
\end{dcases}
$$
dunque $\phi$ possiede almeno $n+2$ zeri, dato che abbiamo supposto $\tilde{x}\neq x_{i}$ per ogni $i$.
poiché valgono
$$
f \in C^{n+1}([a, b]) \quad\wedge \quad p_{n}(x) \in C^\infty(\mathbb{R})
$$
segue che $\phi$, come composizione di funzioni di classe almeno $n+1$ su $[a,b]$, è di classe $n+1$, ergo
$$
\phi \in C^{n+1} ([a,b])
$$
applicando ripetutamente il corollario per teo Rolle si ha
- $\phi'$ ha almeno $n+1$ zeri
- $\phi''$ ha almeno $n$ zeri
- $\dots$
- $\phi^{(n+1)}$ ha almeno uno zero

sia $\xi \in~]a,b[$ uno zero per $\phi^{(n+1)}$, ergo
$$
\phi^{(n+1)}(\xi) =0
$$
calcoliamo ora $\phi^{(n+1)}$.
- poiché $p_{n}$ ha grado al più $n$, ho subito
	$$
	p_{n}^{(n+1)}(x) = 0
	$$
- poiché $\omega_{n+1}$ è un polinomio di grado $n+1$, la $(n+1)$-esima derivata annulla tutti i termini meno che quello di grado massimo. inoltre il coefficiente del termine $x^{n+1}$ in $\omega_{n+1}$ vale $1$.
	ricordando
	$$
	\begin{gather}
	\frac{d}{dx}x^{n+1}=(n+1)x^{n} \\
	\frac{d^{2}}{d^{2}x}(n+1)x^{n} = (n+1)nx^{n-1}
	\end{gather}
	$$
	dopo $n+1$ derivate ho che
	$$
	\omega_{n+1}^{(n+1)}(x) = \frac{d^{n+1}}{d^{n+1}x}x^{n+1}=(n+1)n\cdots 1 = (n+1)!
	$$

di conseguenza ho
$$
\phi^{(n+1)} (x) = f^{(n+1)}(x) -K(n+1)!
$$
valutando $\phi^{(n+1)}$ nel suo zero $\xi$ ottengo
$$
\phi^{(n+1)}(\xi) = 0 = f^{(n+1)}(\xi) - K(n+1)!
$$
da cui
$$
K = \frac{f^{(n+1)}(\xi)}{(n+1)!} \Rightarrow \frac{f(\tilde{x} )-p _{n}(\tilde{x})}{\omega_{n+1}(\tilde{x})}= \frac{f^{(n+1)}(\xi)}{(n+1)!}
$$
ergo
$$
f(\tilde{x})- p _{n}(\tilde{x}) = \frac{1}{(n+1)!}\omega_{n+1}(\tilde{x})f^{(n+1)}(\xi) \qquad\boxed{\text{cvd}}
$$

###### corollario (criterio sufficiente di convergenza)
> sia $f \in C^{n+1}([a,b])$, $p_{n}(x) \in \mathbb{R}_{n}[x]$ il polinomio che interpola $f$ nei nodi distinti
> $$
> x_{0},\dots,x_{n}
> $$
> supponiamo valga
> $$
> \lim _{ n \to \infty } \frac{\|\omega_{n+1}\|_{\infty}}{(n+1)!}\|f^{(n+1)}\|_{\infty} =0
> $$
> dove
> $$
> \omega _{n+1} (x) = \prod^n_{j=0} (x-x_{j})
> $$
> allora il polinomio interpolatore e la funzione interpolata convergono, ergo vale
> $$
> \lim_{ n \to \infty } \|f-p_{n}\|_{\infty}=0
> $$

**osservazione**: da questo criterio segue che la qualità dell'interpolazione è fortemente legata al comportamento del polinomio $\omega_{n+1}$, detto _polinomio nodale_.
in altre parole, per garantire una buona approssimazione della funzione originale, vogliamo minimizzare il fattore
$$
\|\omega_{n+1}\|_{\infty}
$$
il quale dipende dai nodi stessi.

**dimostrazione**: dal te dell'errore per polinomio interpolatore, vale
$$
\forall x \in[a, b] \quad \exists \xi_{x} \in~]a,b[
$$
tale che
$$
f(x)- p_{n}(x) = \frac{1}{(n+1)!}\omega_{n+1}(x)f^{(n+1)}(\xi_{x})
$$
prendo il valore assoluto
$$
|f(x) - p_{n}(x)| =\frac{1}{(n+1)!}|\omega_{n+1}(x)|\cdot|f^{(n+1)}(\xi_{x})|
$$
per definizione di norma $\infty$ ho che
$$
\begin{gather}
|f^{(n+1)}(\xi _{x})| \le \|f^{(n+1)}\|_{\infty}  \\
  \\
|\omega_{n+1}(x)| \le \|\omega_{n+1}\|_{\infty}
\end{gather}
$$
segue subito
$$
|f(x) - p_{n}(x) | \le \frac{\|f^{(n+1)}\|_{\infty}}{(n+1)!}\|\omega_{n+1}\|_{\infty}
$$
ma poiché la stima è valida $\forall x \in[a,b]$, ho che vale anche per il valore per cui $|f(x)-p_{n}(x)|$ è massimo, ergo
$$
0\le \| f(x) - p _{n}(x) \|_{\infty} \le \frac{\|f^{(n+1)}\|_{\infty}}{(n+1)!}\|\omega_{n+1}\|_{\infty}
$$
usando l'ipotesi iniziale e il teo del singolo carabiniere, concludo che
$$
\lim _{ n \to \infty }\|f-p_{n}\|_{\infty} =0  \qquad\boxed{\text{cvd}}
$$
ergo
$$
p_{n}  \xrightarrow[n \to \infty]{} f \text{ uniformemente in }[a,b] 
$$


###### eg di Runge per nodi equidistanti
sia $f:[-1,1]\to \mathbb{R}$ con
$$
f(x) = \frac{1}{1+25x^2}
$$
questa funzione è nota come _funzione di Runge_.
si supponga di voler interpolare polinomialmente $f$ sul suo dominio utilizzando nodi equidistanti
$$
x_{j}= -1 + \frac{2 j}{n} \text{ con }j =0,\dots,n
$$
valutiamo in senso qualitativo il comportamento di
$$
\|\omega _{n+1}\|_{\infty} = \left\| \prod^n_{j=0}(x-x_{j})\right\|_{\infty}
$$
avvicinandoci agli estremi dell'intervallo $[-1, 1]$.

notiamo che per
$$
x \approx 1
$$
tutti i fattori $(x-x_{j})$ hanno segno positivo, inoltre hanno quasi tutti modulo significativamente maggiore di zero.
in altre parole vicino all'estremo $x =1$
- **non** avviene compensazione di segno
- il prodotto dei termini cresce più rapidamente che al centro

lo stesso accade in modo analogo all'estremo $x=-1$.
in altre parole, l'utilizzo di nodi equidistanti _peggiora l'approssimazione_ della funzione vicino agli estremi, creando picchi, quando invece $f$ tende a $0$.

###### def polinomio di Chebyshev (prima specie)
per ogni $n \in \mathbb{N}$, si definisce il _polinomio di Chebyshev_ di prima specie di grado $n$ come
$$
T_{n}: [-1, 1] \to \mathbb{R}
$$
dato da
$$
T_{n}(x) = \cos(n \arccos x)
$$
per ogni $x \in[-1, 1]$

**nota**: ponendo
$$
x = \cos \theta \qquad \theta \in[0, \pi]
$$
si ottiene la rappresentazione equivalente
$$
T_{n}(\cos \theta) = \cos(n \theta )
$$
questa forma viene usata per dimostrare molte delle proprietà dei polinomio di Chebyshev.

###### prop sul grado del polinomio di Chebyshev
> $\forall n \in \mathbb{N} \geq 0$, ho che $T_{n}$ è effettivamente un polinomio di grado $n$.

**dimostrazione**: per induzione, valuto $T_{0}, T_{1}$ come passo base
$$
\begin{gather}
T_{0}(\cos \theta) = \cos 0 = 1 \\  \\
T_{1}(x) = x
\end{gather}
$$
come passo induttivo dimostro che $T_{n+1}$ è un polinomio di grado $n+1$, supponendo $T_{n}$ sia un polinomio di grado $n$.
valuto $T_{n+1}$
$$
\begin{align}
T_{n+1}(\cos \theta) &  = \cos((n+1)\theta)  \\ \\
 & =\cos(n \theta + \theta) \\ \\
 T_{n+1}(\cos \theta) +\cos(n\theta-\theta)& =\cos(n \theta + \theta) + \cos(n\theta-\theta) \\ \\
 & =2\cos n\theta \cos \theta \\ \\
T _{n+1}(\cos \theta) & =2\underbrace{ \cos n\theta }_{ T _{n}(\cos \theta) } \cos \theta - \underbrace{ \cos(n\theta-\theta) }_{ \cos((n-1)\theta)} \\  \\
\end{align}
$$
ora, sostituendo $x=\cos \theta$, ottengo
$$
T _{n+1}(x)= 2xT_{n}(x) - T_{n-1}(x) \qquad\boxed{\text{cvd}}
$$
quindi $T_{n+1}$ è un polinomio di grado di uno maggiore rispetto a $T_{n}$

###### teo proprietà minimax di Chebyshev
> sia $T_{n}(x)$ il polinomio di Chebyshev di grado $n$.
> allora nell'intervallo $[-1, 1]$, ergo il dominio di $T_{n}$, vale
> $$
> \|2^{1-n}T _{n}\|_{\infty} =\min\{\| p _{n}\|_{\infty} \mid p \in \mathbb{R}_{n}[x]\text{ è monico} \}
> $$
> in cui un polinomio _monico_ è un polinomio il cui termine di grado massimo ha coefficiente $1$.
> inoltre vale
> $$
> \|2^{n-1}T _{n}\|_{\infty}= 2^{n-1}
> $$

**dimostrazione**: dalla proposizione sul grado del polinomio di Chebyshev ho che
$$
T_{n}(x) = 2^{n-1}x^{n} + \dots
$$
in cui $\dots$ rappresentano termini di grado inferiore.
di conseguenza il polinomio
$$
2^{1-n}T_{n}(x)
$$
è effettivamente monico.
inoltre noto subito che
$$
|T _{n}(x)| = |\cos(n\arccos x)| \leq 1 \Rightarrow \|2^{1-n}T_{n}(x)\|_{\infty} = 2^{1-n}
$$
ora, per assurdo, supponiamo esista un polinomio
$$
p _{n}(x) \in \mathbb{R}_{n}[x] \text{ monico}
$$
tale che
$$
\|p _{n}\|_{\infty} <2^{1-n}
$$
definisco inoltre
$$
q_{n}(x) = 2^{1-n} T _{n}(x)\qquad r(x) =q_{n}(x) -p_{n}(x)
$$
poiché $q_{n}, p_{n}$ sono entrambi monici, il termine di grado $n$ si cancella, quindi $r$ ha grado al massimo$n-1$.

consideriamo ora tutti i punti
$$
x_{k} = \cos \left( \frac{k \pi}{n} \right)  \qquad \forall k=0,\dots, n
$$
per definizione di polinomio di Chebyshev vale
$$
T _{n}(x_{k})= \cos\left(n \arccos\cos \left( \frac{k \pi}{n} \right)\right)=\cos(k\pi) =(-1)^k
$$
quindi
$$
q _{n}(x_{k}) = 2^{1-n}(-1)^{k}
$$
ma usando l'ipotesi su $p_{n}$ noto
$$
\|p _{n}\|_{\infty} < 2^{1-n} \Rightarrow |p _{n}(x_{k})|< 2^{1-n}
$$
da cui segue che
$$
r(x _{k}) = 2^{1-k}(-1)^{k}- \underbrace{ p_{n}(x _{k}) }_{ <2^{1-k} }\Rightarrow \text{sgn}\left( r(x_{k}) \right) = (-1)^{k}
$$
in cui $\text{sgn}$ è la funzione del segno.
in altre parole, per i vari $n+1$ valori di $k$, si ha che
- $r(x_{0})>0$
- $r(x_{1})<0$
- ...

per il teo degli zeri, il polinomio $r(x)$ ha uno zero per ognuno degli $n$ intervalli
$$
[x_{0}, x_1],\dots, [x_{n-1}, x_{n}]
$$
quindi in totale dovrebbe possedere almeno $n$ zeri.
ma per il teo fondamentale dell'algebra, l'equazione
$$
r(x) =0
$$
**non** può avere più di $n-1$ soluzioni, essendo questo il grado di $r$.

abbiamo raggiunto un assurdo, quindi concludo che effettivamente
$$
\|2^{1-n}T _{n}\|_{\infty} = \underset{ p \in \mathbb{R}_{n}[x]\text{ monico} }{ \min }\{ \|p\|_{\infty} \}=2^{1-n} \qquad\boxed{\text{cvd}}
$$

###### zeri del polinomio nodale come zeri del polinomio di Chebyshev
ricollegandoci al problema di minimizzare $\|\omega_{n+1}\|_{\infty}$, poiché $\omega_{n+1}$ è anch'esso un polinomio monico, mi basta porre
$$
\omega_{n+1} = 2^{-n}T_{n+1}(x)
$$
ed il teo proprietà minimax di Chebyshev garantisce che
$$
\boxed{
\|\omega _{n+1}\|_{\infty}= \|2^{-n}T _{n+{1}}\|_{\infty} =2^{-n}
}
$$
sia il minor valore possibile.

per fare questo sfrutto il principio di interpolazione polinomiale stesso.
individuo inizialmente gli zeri del polinomio di Chebyshev
$$
\begin{align}
T_{n}(x) = 0 & \Rightarrow \cos(n \arccos x) =0 \\ \\
 & \Rightarrow n\arccos x=\frac{\pi}{2}+ k\pi \\ \\
 & \Rightarrow \arccos x = \frac{1+2 k}{n}\pi \\ \\
 & \Rightarrow x = \cos \left( \frac{1+2 k}{n}\pi \right)  \qquad k\in \mathbb{Z}
\end{align}
$$
quindi per $T_{n+1}$ vale
$$
T_{n+1} (x)=0 \Rightarrow x = \cos \left( \frac{1+2 k}{n+1}\pi \right)  \qquad k\in \mathbb{Z}
$$
che uso per scegliere gli $n+1$ zeri del polinomio nodale, in altre parole
$$
\omega _{n+1} (x)= \prod^n_{j=0}(x-x _{j})\qquad x_{j}=\cos \left( \frac{1+2 j}{n+1}\pi \right) 
$$
in questo modo, $\omega_{n+1}$ ed il polinomio $2^{-n}T_{n+1}$ hanno $n+1$ punti in comune, infatti
$$
\omega _{n+1}(x_{j})=0 =2^{-n}\underbrace{ T_{n+1}(x_{j}) }_{ 0 }
$$
ergo, per definizione di interpolazione polinomiale, essi sono _lo stesso_ polinomio.

##### condizionamento
siano le coppie
$$
(x_{i}, y_{i}) \in[a, b] \quad \forall i=0,\dots,n
$$
siano le perturbazioni sui dati
$$
\tilde{y}_{i} =y _{i}+\varepsilon_{i} \quad \forall i =0,\dots,n
$$
sia l'errore relativo sui dati
$$
\frac{||\tilde{y}-y||_{\infty}}{||y||_{\infty}}
$$
in cui
$$
\tilde{ y} = \begin{bmatrix}
\tilde{y_{0}}\\ \vdots \\\tilde{y_{n}}
\end{bmatrix}
\qquad y=\begin{bmatrix}
y_{0}\\\vdots \\y_{n}
\end{bmatrix}
$$
siano rispettivamente
$$
\begin{gather}
p _{n}(x) = \sum^n_{j=0}y _{j}L_{j}(x) \\
\tilde{p} _{n}(x) = \sum^n_{j=0}\tilde{y _{j}}L_{j}(x) 
\end{gather}
$$
i polinomi interpolatori per le $n+1$ coppie $(x_{i},y_{i})$ e $(x_{i}, \tilde{y_{i}})$.

consideriamo la differenza tra il polinomio costruito a partire dai dati perturbati e quello costruito a partire dai dati esatti.
$$
\tilde{p}_{n}(x) - p _{n}(x) = \sum^n_{j=0} L _{j}(x) (\tilde{y_{j}} - y_{j})
$$
passando al valore assoluto
$$
\begin{align}
|\tilde{p}_{n}(x)-p _{n}(x)| &  \leq \underbrace{ \underset{ j }{ \max } |\tilde{y_{j}}-y _{j}|}_{ ||\tilde{y}-y ||_{\infty}} \sum^n _{j=0}|L_{j}(x)|  \\
 & =||\tilde{y}-y||_{\infty}\lambda_{n}(x)
\end{align}
$$
in cui ho posto
$$
\lambda_{n}(x) = \sum ^n_{j=0}|L_{j}(x)|
$$
questa funzione è definita **funzione di Lebesgue**.

passando alle norme infinito ottengo
$$
\begin{align}
||\tilde{p}_{n}(x) - p _{n}(x)|| & \le \| \|\tilde{y}-y\|_{\infty} \cdot \lambda_{n}(x)\|_{\infty} \\
 & \leq | \|\tilde{y} - y\|_{\infty}|\cdot \|\lambda_{n}(x)\|_{\infty} \\
 & \leq \|\tilde{y} - y\|_{\infty} \cdot \|\lambda_{n}(x)\|_{\infty} \\
\end{align}
$$
inoltre ho che
$$
\|y\|_{\infty} = \underset{ i=0,\dots, n }{ \max }\{ |p _{n}(x_{i})| \} \leq\underset{ x \in[a,b] }{ \max }\{ |p_{n}(x)| \}=\|p_{n}(x)\|_{\infty}
$$
quindi
$$
\begin{align}
\frac{{\|\tilde{p}_{n}(x) - p _{n}(x)\|}}{\|p_{n}(x)\|_\infty} &  \leq \|\lambda _{n}(x)\|_{\infty} \frac{{\|\tilde{y}-y\|_{\infty}}}{\|y\|_{\infty}}  \\
 & \leq   \Lambda_{n} \frac{{\|\tilde{y}-y\|_{\infty}}}{\|y\|_{\infty}} 
\end{align}
$$
in cui ho posto
$$
\Lambda_{n} = \|\lambda_{n}(x)\|_{\infty}
$$
questa costante è detta **costante di Lebesgue**, e risulta essere l'indice di condizionamento del problema.

la costante di Lebesgue varia a seconda dalla modalità con cui sono scelti i nodi di interpolazione, in particolare
- con nodi equidistanti si ha
	$$
	\Lambda_{n} \approx \frac{2^{n+1}}{en\ln(n)}
	$$
- con nodi scelti come zeri dei polinomi di Chebichev si ha
	$$
	\Lambda_{n}\approx \frac{2}{\pi} \ln(n)
	$$

per $n$ sufficientemente grandi.