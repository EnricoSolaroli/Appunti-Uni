###### def campo scalare
sia $V$ uno spazio vettoriale definito su un campo $\mathbb{K}$.
allora la funzione
$$
f: V \to \mathbb{K}
$$
è un _campo scalare_ su $V$, ergo una funzione che associa uno scalare ad ogni vettore dello spazio.

###### def grafico di un campo scalare
sia $f$ un campo scalare su $\mathbb{R}^n$.

definisco il _grafico_ di $f$ come segue
$$
G_f = \set{ (x_1, \dots, x_n, x_{n+1}) \in  \mathbb{R}^{n+1} \mid x_{n+1} = f(x_1, \dots, x_n)}
$$
in cui $x_{n+1} = f(x_1, \dots, x_n)$

**osservazione**: un campo scalare su $\mathbb{R}^n$ può essere rappresentato come un iperpiano su $\mathbb{R} ^{ n+1}$ di equazione
$$
x_{n+1} = f(x_1, \dots, x_n)
$$ 

## sistema di equazioni non lineari
un sistema di equazioni **non** lineari può essere scritto nella forma
$$
\begin{cases}

	f_1 (x_1, \dots, x_n)  & = 0 \\
	 & \vdots \\
	f_n (x_1, \dots, x_n)  & = 0 \\
\end{cases}
\qquad
(\star)
$$
in cui ogni $f_i: \mathbb{R}^n \to \mathbb{R}$ non lineare e derivabile.

si consideri la funzione $F: \mathbb{R}^n \to \mathbb{R}$ tale che
$$
X = 
\begin{bmatrix}
x_1 \\ \vdots \\ x_n
\end{bmatrix}
\in \mathbb{R}^n

\mapsto F(X) = 
\begin{bmatrix}
f_1(x_1, \dots, x_n) \\ \vdots \\ f_n(x_1, \dots, x_n) 
\end{bmatrix}
$$
calcolare la soluzione del sistema $(\star)$ equivale a calcolare il vettore $\alpha$ che annulla contemporaneamente tutte le equazioni, ergo il vettore $\alpha \in \mathbb{R}^n$ tale che 
$$
F(\alpha) = \underline{o}
$$
###### def gradiente
sia $f$ un campo scalare su $\mathbb{R}^n$, derivabile.
definisco il _gradiente_ di $f$ come la seguente matrice
$$
\nabla f(X) = 
\begin{bmatrix}
 \frac{\partial  f(X)}{\partial x_1} \\
 \vdots\\
 \frac{\partial  f(X)}{\partial x_n} \\
\end{bmatrix}
$$
in cui $\frac{\partial  f(X)}{\partial x_i}$ è la derivata parziale di $f$ in $x_i$.

###### def matrice Jacobiana
sia
$$
\begin{align}
F : \mathbb{R}^n \to \mathbb{R}^n \qquad F(X) = 
\begin{bmatrix}
 f_1(X) \\
 \vdots\\
 f_n(X) 
\end{bmatrix}
\end{align}
$$
la _matrice Jacobiana_ di $F$ è la matrice le cui entrate sono le derivate parziali di ciascuna $f_i$ rispetto a ciascuna componente di $\mathbb{R}^n$, $x_i$
$$
\begin{align}

J_F(X) &= 
\begin{bmatrix}	
	\frac{\partial  f_1(X)}{\partial x_1} & \dots & \frac{\partial  f_1(X)}{\partial x_n} \\
	\vdots & \ddots & \vdots \\
	\frac{\partial  f_n(X)}{\partial x_1} & \dots & \frac{\partial  f_n(X)}{\partial x_n}
\end{bmatrix} \\ \\

&= 
\begin{bmatrix}

	\frac{\partial  F(X)}{\partial x_1} & \dots & \frac{\partial  F(X)}{\partial x_n}
\end{bmatrix}
\\ \\
&=
\left(\nabla F(X)   \right)^T
\end{align}
$$
in quanto
$$
\frac{\partial  F(X)}{\partial x_i} = 
\begin{bmatrix}
 \frac{\partial  f_1(X)}{\partial x_i} \\ \vdots \\ \frac{\partial  f_n(X)}{\partial x_i}
\end{bmatrix}

\quad \text{inoltre} \quad 

\nabla F(X) = \begin{bmatrix}
 \frac{\partial  F(X)}{\partial x_1} \\ \vdots \\ \frac{\partial  F(X)}{\partial x_n}
\end{bmatrix}
$$

## metodo di Newton Raphson
il metodo di Newton Raphson è una estensione del metodo di Newton per uno spazio $n$-dimensionale.
in particolare vediamo in $\mathbb{R}^3$.

si consideri $F: \mathbb{R}^2 \to \mathbb{R}^2$ la funzione
$$
F(X) = F(x_1, x_2) = \begin{bmatrix}
 f_1(x_1, x_2) \\ f_2(x_1, x_2)
\end{bmatrix}
$$
e la sua radice $\alpha \in \mathbb{R}^2$ tale che $F(\alpha)=\underline{o}$.

come già visto, questo equivale ad interpretare le funzioni come piani in $\mathbb{R}^3$ del tipo
$$
x_3 = f_1(x_1, x_2) \qquad x_3 = f_2(x_1, x_2)
$$
allora $\alpha$ è il punto in cui i due piani intersecano il piano di equazione $x_3=0$.

si costruisce il seguente metodo iterativo.
- dato $X^{(k)} \in \mathbb{R}^2$, le due superfici $f_1, f_2$ sono approssimate localmente mediante i rispettivi piani tangenti in tale punto.
	di seguito il polinomio di Taylor in due variabile, espanso fino al primo ordine.
	$$
	\begin{align}
	f(x, y) = f(x_0, y_0) & +   (x-x_0) \frac{\partial  f}{\partial x}(x_0, y_0)\\
	 & + (y - y_0) \frac{\partial  f}{\partial y}(x_0, y_0)
	\end{align}
	$$
- i due piani sono tangenti in una retta
- il nuovo punto della successione, $X^{(k+1)}$, è il punto in cui questa retta interseca il piano $x_3 =0$

più formalmente, sia $X^{(k)}= [x_1^{(k)}, x_2^{(k)}] \in \mathbb{R}^2$ una approssimazione della soluzione $\alpha$.
considerando lo sviluppo di Taylor di primo ordine, riferito a $f_1$, e centrato in $X^{(k)}$, ottengo
$$
\begin{align}

x _3 = f_ 1(X^{(k)})  & + \frac{\partial  f_ 1}{\partial x _1} (X^{(k)}) (x _1 - (x_ 1)_k) \\ & +
	\frac{\partial  f_1}{\partial x_2} (X^{(k)}) (x_2 - x_2^{(k)})
\end{align}
$$
questa rappresenta l'approssimazione di $f_1$ tramite un piano ad essa tangente nel punto $X^{(k)}$.
analogamente per $f_2$.

a questo punto è necessario determinare $X ^{( k+1)}$ tale che le approssimazioni lineari di $f_1, f_2$ si annullino, ergo $x_3= 0$.
ottengo il sistema
$$
\begin{dcases} \\
\begin{aligned}

 	0 = f _1(X^{(k)})  & +   \frac{\partial  f _ 1}{\partial x _ 1} (X^{(k)}) (x_ 1 - x _1^ {(k)})   \\& +
	\frac{\partial  f _1}{\partial x_ 2} (X^{(k)}) (x_ 2 - x _2 ^{(k)}) 
\end{aligned} \\ \\
\begin{aligned}

	0 = f _2(X^{(k)}) &+ \frac{\partial  f_ 2}{\partial x _1} (X^{(k)}) (x_ 1 - x_1^{(k)}) \\&+
	\frac{\partial  f_2}{\partial x_2} (X^{(k)}) (x_2 - x_2^{(k)})
\end{aligned}
\end{dcases}
\qquad (\star\star)
$$
i due piani si intersecano in una retta per il teorema del rango, determiniamo ora il punto in questa retta interseca il piano $x_3= 0$.

possiamo riscrivere il sistema $(\star\star)$ in forma matriciale, usando le definizioni
$$
\begin{gather}

J_F(X^{(k)}) =  \begin{bmatrix}
 \frac{\partial  f_1}{\partial x_1} (X^{(k)}) & \frac{\partial  f_1}{\partial x_2} (X^{(k)}) \\
 \frac{\partial  f_2}{\partial x_1} (X^{(k)}) & \frac{\partial  f_2}{\partial x_2} (X^{(k)})
\end{bmatrix}
\\ \\
X - X^{(k)} =  \begin{bmatrix}
 x_1 - x_1^{(k)} \\
 x_2 - x_2^{(k)}
\end{bmatrix}
\end{gather}
$$
da cui ottengo
$$
\begin{align}
(\star\star)   & \Rightarrow 0 = F(X^{(k)}) + J_F(X^{(k)}) (X-X^{(k)})  \\
 & \Rightarrow J_K(X^{(k)})(X-X^{(k)})= -F(X^{(k)})
\end{align}
$$
sia il vettore
$$
s^{(k)} = X - X^{(k)}
$$
allora $s^{(k)}$ è detto **passo di Newton** e rappresenta lo _spostamento_ dal punto corrente $X^{(k)}$, al punto in cui le approssimazioni lineari si annullano.

se $J_F(X^{(k)})$ è invertibile, il sistema
$$
J_F(X^{(k)})s^{(k)}  = -F(X^{(k)})
$$
ammette una sola soluzione, che vale $s^{(k)} = - J_F ^{-1} F(X^{(k)})$.
a questo punto vale
$$
X ^{ (k+1)} = X^{(k)} + s^{(k)}
$$
**redux**: ad ogni passo si risolve un sistema lineare $-J_F(X^{(k)})F(X^{(k)})$ che fornisce direttamente $s^{(k)}$, il passo di avanzamento.

###### convergenza
> il metodo di Newton Raphson è a convergenza locale di ordine quadratico.

###### varianti
la valutazione della matrice Jacobiana richiede di conoscere o poter valutare $n^2$ derivate parziali in $\mathbb{R}^n$.
si presentano alcune varianti al metodo per migliorarne l'efficienza in questo ambito
- _metodo delle corde_
	consiste nell'utilizzare sempre la stessa matrice Jacobiana $J_F(X^{(0)})$ o una sua approssimazione $\forall k$
- _metodo di Shamanskii_
	consiste nel valutare la matrice Jacobiana ogni $m$ iterazioni.

###### teo sul calcolo di punti di minimo
> sia $f: \mathbb{R}^n \to \mathbb{R} \in C^2(\mathbb{R}^n)$, per trovarne i _punti critici_ è possibile usare il metodo di Newton Raphson, usando la successione
> $$
> X^{(k+1)} = X^{(k)} + s^{(k)}
> $$
> in cui
> $$s^{(k)} = -H ^{ -1} \nabla f(X^{(k)})$$

**dimostrazione**: sia $f: \mathbb{R}^n \to \mathbb{R} \in C^2(\mathbb{R}^n)$.
determinare i punti critici significa risolvere il sistema di equazioni **non** lineari seguente
$$
\nabla f(X) = 0
$$
a cui applicheremo il metodo di Newton Raphson.

definisco
$$
F(X) : \mathbb{R}^n \to \mathbb{R}^n \qquad F(X) = \nabla f(X)
$$
in questo modo posso applicare ad $F$ il metodo di Newton Raphson, usando la successione
$$
X^{(k+1)} = X^{(k)} - J_F(X^{(k)}) ^{ -1} F(X^{(k)}) \qquad (\star\star\star)
$$
valutiamo la Jacobiana di $F$ in $X^{(k)}$.
per definizione, questa la matrice le cui entrate sono le derivate parziali di ciascuna componente di $F$, rispetto ad ogni componente di $\mathbb{R}^n$.
$$
\begin{align}
 
(J_F(X)) _{ ij} &= \frac{\partial  }{\partial x_j} \left( \frac{\partial  f}{\partial x_i}  \right)
\qquad \forall i,j = 1, \dots, n \\
 & = \frac{\partial  ^2 f}{\partial x_i\partial x_j } 
\end{align}
$$
ma allora la matrice Jacobiana di $F$ è la matrice Hessiana di $f$
$$
J_F(X) = \nabla ^2 f(X) = H_f(X)
$$
ora è sufficiente sostituire in $(\star\star\star)$
$$
(\star\star\star) \Rightarrow X^{(k+1)} = X^{(k)} - H_f(X^{(k)}) ^{ -1} \nabla f(X^{(k)}) \qquad\boxed{\text{cvd}} 
$$
**dimostrazione alternativa**: il teorema è dimostrato anche a partire da uno studio del polinomio di Taylor, invece che da una valutazione della Jacobiana.

si presenta una versione della dimostrazione in $\mathbb{R}^2$ per semplicità.

viene considerata la prima componente di $\nabla f(X)$ come una superficie in $\mathbb{R}^3$ del tipo
$$
x_3 = \frac{\partial  f}{\partial x_1}(X)
$$
per questa funzione si considera il polinomio di Taylor di grado $1$, centrato in $X^{(k)} \in \mathbb{R}^2$
$$
\begin{align}
x _3 = \frac{\partial  f}{\partial x_ 1} (X^{(k)})  & +
	\frac{\partial  ^2 f}{\partial x _1^2} (X^{(k)})(x _1 - x_1^{(k)}) \\ & +
	\frac{\partial ^2 f}{\partial x_1 \partial x_2}(X^{(k)}) (x_2 - x_2^{(k)})
\end{align}
$$
analogamente per l'altra componente.

i polinomi ottenuti rappresentano le approssimazioni come piano, delle componenti del gradiente in un intorno di $X^{(k)} = \begin{bmatrix} x_1^{(k)}, x_2^{(k)}\end{bmatrix} \in \mathbb{R}^2$.
valutiamo quindi l'intersezione dei piani con il piano $x_3 = 0$ per trovare un punto $X^{(k+1)}$ in cui le approssimazioni delle componenti si annullino contemporaneamente.
$$
\begin{dcases}
	x_3 = 0 \\
	\begin{aligned}
	x_3 =  \frac{\partial  f}{\partial x_1} (X^{(k)}) &+
	\frac{\partial  ^2 f}{\partial x_1^2} (X^{(k)})(x_1 - x_1^{(k)}) \\&+
	\frac{\partial ^2 f}{\partial x_1 \partial x_2}(X^{(k)}) (x_2 - x_2^{(k)})
	\end{aligned}
\\
\ \vdots
\end{dcases}
$$
osservo che
$$
H(X^{(k)}) = 
\begin{bmatrix}
 \frac{\partial  ^2 f}{\partial x^2_1}(x_1^{(k)}, x_2^{(k)}) & \frac{\partial  ^2 f}{\partial x_1 \partial x_2}
 	(x_1^{(k)}, x_2^{(k)}) \\
 \frac{\partial  ^2 f}{\partial x_2 \partial x_1}(x_1^{(k)}, x_2^{(k)}) & \frac{\partial  ^2 f}{\partial x_2^2}
 	(x_1^{(k)}, x_2^{(k)}) \\
\end{bmatrix}
$$
allora sostituendola nel sistema precedente ottengo
$$
0 = \nabla f(X^{(k)}) + H(X^{(k)})(X-X^{(k)}) \qquad\boxed{\text{cvd}} 
$$

###### criterio di arresto
la norma del vettore gradiente si annulla e questo è usato come criterio di arresto, dovrebbe essere visto in seguito pare
