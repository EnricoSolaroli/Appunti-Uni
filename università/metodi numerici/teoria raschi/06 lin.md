**prerequisiti**: teoremi ridimostrati in questa sezione
- teo di Roucé-Capelli
- teo sul rango ed il numero di incognite

vedi [[unità 4]]

###### def matrice non singolare
una matrice $A \in \mathcal{M} _{ n \times n}(\mathbb{R})$ si dice _non-singolare_ se è invertibile.

**nota** si ha quindi
$$
\begin{align}
	A \text{ non singolare} & = A \text{ invertibile} \\
	&= \det A \ne 0\\
	&=  \mathrm{rg} A = n \\
	&= A x = b \text{ ha soluzione unica } \forall b
\end{align}
$$
in cui $b$ è il vettore dei termini noti nel sistema lineare $Ax = b$.

###### metodo di Cramer
risolvere un sistema lineare in cui la matrice dei termini noti $A$ risulta non-singolare usando la sua inversa $A ^{ -1}$ risulta generalmente poco efficiente.
questa strada richiederebbe la risoluzione di $\dim A$ sistemi lineari, e presenta una stabilità numerica generalmente bassa.
un metodo alternativo potrebbe essere derivato dalla _regola di Cramer_.

sia $A x  = b$ un sistema lineare con $A$ invertibile.
la regola di Cramer consente di calcolare la componente $x_j$ della soluzione via il rapporto tra i determinanti
$$
x _j = \frac {\det A_ j}{\det A} \qquad \text{con} \qquad j=1, \dots, n
$$
dove $A_j$ è la matrice ottenuta sostituendo alla $j$-esima colonna di $A$, il vettore dei termini noti $underline{ b}$.

**osservazione**: anche questo metodo risulta troppo lento, in quanto richiede il calcolo di $n+1$ determinanti di matrici con dimensione $n$.
questi determinanti sono calcolati via sviluppo di Laplace, la cui complessità di calcolo è fattoriale.

## condizionamento
si analizza ora il condizionamento del problema della risoluzione di un sistema lineare del tipo
$$
Ax =  b
$$
si ricorda che il condizionamento di un problema è una sua proprietà intrinseca e **non** dipende dall'algoritmo di risoluzione impiegato.

###### prop sul condizionamento con perturbazione solo sul termine noto
> sia $A \in \mathcal{M}_{ n \times n}(\mathbb{R})$ di rango massimo.
> sia $|| \cdot ||$ una norma su $\mathbb{R}^n$, quindi $||A||$ la norma indotto di $A$.
> sia inoltre il sistema lineare
> $$
> Ax = b
> $$
> e il sistema perturbato
> $$ A(x + \delta x) = b + \delta b$$
> allora l'indice di condizionamento $K$ del problema vale
> $$K(A) = ||A ^{ -1}|| \cdot || A||$$

**dimostrazione**: devo ricondurmi a
$$
\frac {||\delta x||}{||x||} \le K \cdot \frac {|| \delta b||}{|| b||}
$$
immediatamente ho
$$
\begin{rcases}
 	Ax = b \\
	A(x +\delta x) =  b + \delta b
\end{rcases} \Rightarrow 
A \delta x = \delta b
$$
da cui
$$
\delta x= A ^{ -1} \delta b
$$
prendendone la norma, per definizione di norma indotta, ho
$$
|| \delta x || = || A ^{ -1} \delta b || \le  || A || \cdot || \delta b || \qquad (\star)
$$
per lo stesso motivo
$$
\begin{align}
	Ax = b &\Rightarrow ||A|| \cdot ||x|| \ge ||b|| \\
	& \Rightarrow \frac 1{||x||} \le \frac {||A||}{||b||} \qquad (\star\star)
\end{align}
$$
concludo moltiplicando $(\star), (\star\star)$ membro a membro
$$
\begin{rcases}
	(\star)\\
	(\star\star)
\end{rcases} \Rightarrow 
\frac {||\delta x||}{||x||} \le ||A^{-1}|| \cdot ||A|| \frac {|| \delta b ||}{||b||} \qquad\boxed{\text{cvd}}
$$

###### prop sul condizionamento con perturbazione anche su $A$
> sia $A \in \mathcal{M}_{ n \times n}(\mathbb{R})$ di rango massimo tale che
> $$||A ^{ -1}|| \cdot || \delta A|| < 1 \Leftrightarrow A + \delta A \text{ invertibile}$$
> sia $|| \cdot ||$ una norma su $\mathbb{R}^n$, quindi $||A||$ la norma indotto di $A$.
> sia inoltre il sistema lineare
> $$
> Ax = b
> $$
> e il sistema perturbato
> $$ (A + \delta A)(x + \delta x) = b + \delta b$$
> posto l'indice di condizionamento $K$ del problema
> $$K(A) = ||A ^{ -1}|| \cdot || A||$$
> ottengo
> $$
> \frac {|| \delta x||}{||x||} \le \frac {K(A)}{1- K(A) \frac {|| \delta A||}{||A||}}
> 	\left( \frac {|| \delta b||}{||b||} + \frac {|| \delta A||}{||A||}  \right)
> $$

**nota**: l'indice di condizionamento della matrice identità vale
$$
K(I) =1
$$
mentre in generale, per ogni norma indotta, vale $K(A) \ge 1$.

###### def indice di condizionamento in norma 2
siano il sistema lineare e il suo corrispettivo sistema perturbato
$$Ax =b \qquad A(x +\delta x) = b + \delta b$$
l'indice di condizionamento $K(A)$  considerando la funzione di norma indotta $|| \cdot||_{2}$, si dice _indice di condizionamento in norma_ $2$, si scrive
$$
K _{2} (A) = ||A||_{2}\cdot ||A^{-1}||_{2}
$$

###### prop sull'indice di condizionamento in norma 2 con matrici ortogonali
> siano il sistema lineare e il suo corrispettivo sistema perturbato
> $$Ax =b \qquad A(x+ \delta x) = b + \delta b$$
> allora vale che l'indice di condizionamento in norma $2$ vale
> $$K_{2}(A)= \sqrt{ \frac{{\rho(A^TA)}}{\lambda_{min}(A^TA)}}$$
> in cui $\rho=\lambda_{max}$ è il raggio spettrale, mentre $\lambda_{min}$ è il minimo autovalore di $A$.
> segue subito che, se $A$ è una matrice _ortogonale_, ergo 
> $$A^TA=I$$
> allora ho
> $$K(A)_{2} =1$$

**lemma 1.** per una matrice quadrata $A$, si ha che $A^TA$ e $AA^{T}$ hanno gli stessi autovalori.

**dimostrazione**: sia $A$ quadrata, $\lambda$ autovalore di $A^TA$. relativo a $x$ autovettore.
per definizione
$$
A^TAx = \lambda x \Rightarrow AA^TA = \lambda Ax \qquad\boxed{\text{cvd}}
$$
allora $\lambda$ è autovalore anche per $AA^T$, relativo all'autovettore $Ax$.

**dimostrazione**: dimostriamo ora la proposizione.
per definizione di norma $2$ indotta
$$
||A||_2 = \sqrt{ \rho (A^TA)} \Rightarrow ||A^{-1}||_{2} =\sqrt{ \rho(A^{-T}A^{-1}) }
$$
ricordo che, per la proprietà inversa del prodotto, ho
$$
(BA)^{-1} = A^{-1}(B)^{-1} \Rightarrow A^{-T}A^{-1} = (AA^{T})^{-1}
$$
la matrice inversa di una matrice diagonale con autovalori $\lambda _i$ ha autovalori $\frac{1}{\lambda_{i}}$.
segue che, usando il lemma precedente
$$
\lambda_{max}((AA^{T}))^{-1}  = \lambda_{max}((A^{T}A)^{-1}) = \frac{1}{\lambda _{min}(A^{T}A)}
$$
quindi
$$
K _{2}(A) =\sqrt{ \lambda_{max}(A^TA) } \cdot\frac{1}{\sqrt{  \lambda _{min}(A^{T}A)}} \qquad\boxed{\text{cvd}}
$$


**nota**: per questa proposizione, la risoluzione del sistema lineare
$$
Ax= b \text{ con } A \text{ ortogonale}
$$
è _sempre_ un problema ben condizionato.

## metodi diretti
i metodi di risoluzione diretti trasformano, attraverso un numero _finito_ di passi, un sistema lineare generico in un sistema lineare equivalente dotato di una struttura tale da semplificarne la risoluzione.

dato un sistema lineare
$$
Ax =b
$$
questi metodi sono basati sulla _fattorizzazione_ di $A$ nel prodotto di due matrici $B,C$, e si adattano maggiormente a sistemi in cui la matrice dei termini noti $A$ è _densa_, ergo con pochi elementi nulli.

via fattorizzazione si ottiene il sistema equivalente
$$
BCx = b
$$
che si può scrivere come composizione di trasformazioni
$$
\begin{cases}
 Cx = y\\
 By = b
\end{cases}
$$
**osservazione**: se \in $Cx= y$, si avesse $C$ triangolare superiore, allora il sistema sarebbe facilmente risolvibile via sostituzione.

i metodi diretti fanno in modo da avere $B$ in una di due forme
- triangolare inferiore
- ortogonale

in modo da risolvere il sistema $By = b$ in modo agevole, calcolando quindi $y$, ergo il termine noto in $Cx =y$.

**esempio**: risoluzione del sistema $Lx =b$ in cui $L$ è triangolare inferiore.
si ha
$$
\begin{cases}
 	l_{11}x_1 &= b_1 \\
	&\vdots \\
	l_{n1}x_1 + \dots + l_{nn}x_n &= b_n
\end{cases}
$$
in cui $l _{ij}$ sono i coefficienti della matrice $L$.
posso invertire per $x_i$ ad ogni riga, ottenendo 
$$
\begin{dcases}
 	x_1 &= \frac {b_1}{n=l _{ 11}} \\
	&\vdots \\
	x_n &= \frac {b_n - \sum ^{ n} _{ i=1} l_{ni}x_i}{l_nn}
\end{dcases}
$$
come pseudocodice
```python
for j = 1 to n do:
	x[j] = b[j]
	for i = 1 to j -1 do:
		x[j] = x[j] - l[j][i] * x[i]
	done
	x[j] = x[j] / l[j][j]
done
```
**complessità**: vedremo che la complessità della fattorizzazione è dell'ordine di $O(n^3)$, mentre chiaramente la risoluzione dei sistemi da essa derivanti risulta essere di complessità $O(n^2)$.

##### fattorizzazione LU di Gauss
la fattorizzazione LU di Gauss viene sfruttata dal metodo diretto di eliminazione gaussiana.
dato un sistema lineare
$$
Ax =b
$$
si fattorizza $A$ in
$$
A = LU
$$
in cui $L$ è triangolare inferiore con elementi diagonali $1$, $U$ triangolare superiore.
la fattorizzazione è resa possibile dai seguenti teoremi

###### def sotto-matrice principale di testa
sia $A \in \mathcal{M}_{n \times n}(\mathbb{R})$.
una _sotto-matrice principale di testa_ $A_k$ di $A$ è una matrice
$$
A_k = (a_{ij}) \quad \text{con} \quad 1 \le i,j \le k \le n
$$
**osservazione**: $A_k$ risulta essere un "ritaglio" superiore sinistro della matrice $A$.

###### teo fattorizzazione LU semplice
> sia $A \in \mathcal{M}_{n \times n}(\mathbb{R})$
> sia $A_k$ la matrice principale di testa di $A$
> se tutte le sotto-matrici principali di testa
> $$
> A_k \text{ con } k = 1, \dots, n -1
> $$
> sono invertibili, allora
> $$
> \exists ! L, U \in \mathcal{M}_{ n \times n}(\mathbb{R}) \text{ tali che } A = LU
> $$
> in cui $L$ è triangolare inferiore con elementi diagonali uguali a $1$, e $U$ è triangolare superiore.

**nota**: **non** è necessario che $A$ sia invertibile perché esista la fattorizzazione $LU=A$, ma altrimenti il sistema originale **non** avrebbe soluzione unica. 

si ricorda che vale il seguente.

**lemma 2.** data una matrice $A$, l'operazione di sommare una riga ad un'altra, anche se moltiplicata per uno scalare, **non** modifica $\det A$.

**dimostrazione**: indico con $R_i, R_j$ righe della matrice di partenza $A$, svolgo l'operazione di Gauss
$$
R_i \leftarrow R_i - \lambda R_j
$$
chiamo $C$ la matrice risultante, $B$ la matrice in cui rimpiazzo la riga $R_i$ con $\lambda R_j$.
per _multilinearità_ del determinante, vale
$$
\det C = \det A - \lambda \det B
$$
ma allora poiché la riga $R_j$ compare in totale $2$ volte in $B$, ho
$$
\mathrm{rg} B \text{ non massimo } \Rightarrow \det B =0 
$$
da cui 
$$
\det C = \det A \qquad\boxed{\text{cvd}} 
$$

**dimostrazione**: ora dimostro la proposizione, mostrando che l'eliminazione di Gauss seza pivoting è sempre possibile, e che i moltiplicatori usati costituiscono $L$.

costruisco $U$ per induzione, dimostro che è possibile ridurre $A$ a scala via Gauss sono con operazioni di eliminazione, senza mai cambiare scambiare righe.
in altre parole, dopo $k-1$ operazioni di eliminazione, l'elemento $a_{kk}$ è diverso da $0$.
- passo base
	$A_1 = [a_{11}]$ è invertibile, allora
	$$
	\det A_1 \ne 0 \Rightarrow a_{11} \ne 0
	$$
	posso svolgere l'operazione
	$$
	R_i \leftarrow R_i - \frac {a_{i1}}{a_{11}} R_1
	$$
	per ogni riga $i>1$, annullando la prima colonna.
- passo induttivo
	consideriamo il blocco principale
	$$
	A_k =
	\begin{bmatrix}
 		A_{k-1} & * \\
		* 		& a_{kk}
	\end{bmatrix}
	\quad \text{con} \quad \det A_k \ne 0
	$$
	al passo $k-1$ l'eliminazione di Gauss ha prodotto una matrice equivalente ad $A_k$
	$$
	A'_k = \begin{bmatrix}
		U_{k-1} & * \\
		0 & a'_{kk}
	\end{bmatrix}
	$$
	per ipotesi induttiva, il blocco $U_{k-1}$ è triangolare superiore.
	poiché per il lemma precedente $\det A_k = \det A'_k$, allora, usando lo sviluppo di Lagrange
	$$
	\det A_k = \det U_{k-1} \cdot a'_{kk} \Rightarrow a'_{kk} \ne 0
	$$
	ergo il $k$-esimo pivot **non** è nullo.
- conclusione
	dopo $n-1$ passi si ottiene una matrice triangolare superiore in $U$, senza mai scambiare righe
	
chiamo inoltre $E_k$ la matrice corrispondente alla $k$-esima eliminazione effettuata, quindi
$$
E_n \cdots E_1 A = U \Rightarrow A = (E_n \cdots E_1) ^{ -1} U
$$
scelgo semplicemente $L = (E_n \cdots E_1)$

dimostro l'unicità per assurdo, supponendo esistano $L', U'$ tali che
$$
L'U' = A
$$
allora sarebbe
$$
L'U' = LU \Rightarrow L^{-1}L' = U U'^{-1}
$$
poiché a sinistra abbiamo matrici triangolari inferiori, la loro composizione è sempre una matrice triangolare inferiore. analogamente per $UU'^{-1}$.
segue che 
$$
L^{-1}L' = U U'^{-1} = I \Rightarrow L = L' \wedge U = U' \qquad\boxed{\text{cvd}} 
$$
**nota**: si realizza l'algoritmo di fattorizzazione di Gauss seguendo la formula
$$
\forall k = 1,\dots, n-1 \quad 
\begin{dcases}
l _{ik} = \frac{a_{ik}}{a_{kk}}\\
a _{ij} = a_{ij} - l _{ik} a_{kj} 
\end{dcases}\quad i, j = k+1,\dots, n
$$
in pratica svolgendo gli stessi passaggi della dimostrazione, ergo calcolando i moltiplicatori ed effettuando le relative eliminazioni fino a ridurre $A$ a scala.

###### def matrice di permutazione
sia $P$ la matrice ottenuta scambiando due righe (o colonne equivalentemente) tra loro, a partire dalla matrice identità

$P$ è detta _matrice di permutazione_.

**osservazione**: sia $A \in \mathcal{M}_{n \times n}(\mathbb{R})$, allora
- effettuare il prodotto $PA$ equivale a scambiare le stesse due righe in $A$.
- effettuare il prodotto $AP$ equivale a scambiare le stesse due colonne in $A$.

inoltre il prodotto di matrici di permutazione è una matrice di permutazione.

###### teo fattorizzazione LU con permutazione
> sia $A \in \mathcal{M}_{n \times n}(\mathbb{R})$ tale che $\det A \neq 0$, allora
> $$
> \exists P \text{ matrice di permutazione tale che } PA=LU
> $$
> in cui $L, U$ sono matrici triangolari come descritte nel teo di fattorizzazione semplice.

**nota**: $P$ **non** è necessariamente unica.

su questo teorema si basa l'algoritmo di Gauss _con pivoting_, e le sue varianti.
- variante classica
	al passo $k$, prima di calcolare il moltiplicatore $l_{ik}$, se $a_{kk}=0$ allora si scambia la riga $k$ con la riga $s>k$ in cui risiede il primo elemento $a_{sk} \neq 0$.
	si scambiano le righe $s,k$ anche nel vettore dei termini noti $b$, o equivalentemente si registra il cambiamento nella matrice $P$.
- variante a pivoting per colonne a pivot massimo
	$P$ viene inizializzata come $P=I$.
	al passo $k$, prima di calcolare il moltiplicatore $l_{ik}$, si scambia la riga $k$ con la riga $s>k$ in cui si trova l'elemento $a_{sk}$ di modulo massimo.
	```python
	for k = 1 to n -1 do:
		s = indice tale che a[s][k] è l'elemento massimo sulla colonna k e s > k
		Swap-Rows(A, s, k)
		Swap-Rows(P, s, k)
		for i = k +1 to n do:
			l[i][k] = a[i][k] / a[k][k]
			for j = k +1 to n do:
				a[i][j] = a[i][j] - l[i][k] * a[k][j]
	```

**complessità**: la complessità dell'algoritmo risulta $O(n^3)$, sia che per la versione con permutazione che per quella semplice.

##### fattorizzazione di Cholesky
per la fattorizzazione delle matrici di prodotti scalari, ergo simmetriche definite positive, è stato studiato un algoritmo di fattorizzazione, detto di Cholesky, che deriva dal seguente teorema.

###### teo di Cholesky
> sia $A$ matrice $n \times n$ simmetrica definita positiva, allora
> $$
> \exists L \text{ triangolare inferiore tale che } l_{ii} > 0 \quad \forall i 
> $$
> tale che
> $$
> A = L L^T
> $$

**complessità**: la complessità dell'algoritmo di fattorizzazione di Cholesky è $O(n^3)$

##### fattorizzazione QR
dato un sistema lineare
$$
Ax =b
$$
si fattorizza $A \in \mathcal{M}_{m\times n}(\mathbb{R}), m\geq n$ in
$$
A = QR
$$
in cui $Q$ è ortogonale, mentre $R$ triangolare superiore.

**nota**: il metodo di fattorizzazione QR è più rilevante nel contesto di sistemi sovra-determinati, in quanto rende possibile anche la fattorizzazione di matrici **non** quadrate.
per matrici quadrate è solitamente preferibile la fattorizzazione LU.

###### def riflettore di Householder
sia $u \in \mathbb{R}^n, u \neq0$
si definisce _riflettore di Householder_ la matrice
$$
H = I - 2 \frac{uu^T}{u^Tu}
$$
**nota**: il riflettore di Householder è lo strumento che rende possibile la fattorizzazione QR, possiede diverse proprietà, dimostrate di seguito.

###### prop simmetria per riflettori di Householder
> $H$ riflettore di Householder è simmetrica, ergo
> $$
> H^T=H
> $$

**dimostrazione**: sia $u \in \mathbb{R}^n, u \neq0$, poiché vale
$$
(uu^T)^T = \left( u^T \right) ^Tu^T=uu^T
$$
segue che
$$
H^{T} = \left( I - 2 \frac{uu^T}{u^Tu} \right)^T = I - 2 \frac{uu^T}{u^Tu} =H \qquad\boxed{\text{cvd}}
$$

###### prop ortogonalità per riflettori di Householder
> $H$ riflettore di Householder è ortogonale, ergo
> $$
> H^TH=I
> $$

**dimostrazione**: dalla proposizione precedente vale
$$
H^T=H
$$
allora è sufficiente dimostrare
$$
H^2= I
$$
calcolo quindi
$$
\begin{align}
H^2  & = \left( I - 2 \frac{uu^T}{u^Tu}\right) ^2  \\
 & =I - 4 \frac{uu^T}{u^Tu} +4 \frac{(uu^T)^2}{(u^Tu)^2} \\
 & =I - 4 \frac{uu^T}{u^Tu} +4 \frac{uu^Tuu^T}{(u^Tu)^2} \\
 & =I - 4 \frac{uu^T}{u^Tu} +4 \frac{u\cancel{ (u^Tu) }u^T}{(u^Tu)^\cancel{ 2 }} \\
 & = I \qquad\boxed{\text{cvd}}
\end{align}
$$

###### prop involutività per riflettore di Householder
> sia $H$ riflettore di Householder, allora
> $$
> H^{-1} =H
> $$

**dimostrazione**: dalla proposizione precedente
$$
H^2 = HH=I \Rightarrow H=H^{-1} \qquad\boxed{\text{cvd}}
$$

###### prop interpretazione geometrica per riflettori di Householder
> sia $u \in \mathbb{R}^n, u \neq0$.
> allora il riflettore di Householder, definito via $u$, rappresenta la trasformazione di riflessione rispetto all'iperpiano ortogonale a $u$.

**dimostrazione**: sia $x \in \mathbb{R}^n$. 
sia $V^\perp$ sotto-spazio ortogonale a $V=\text{Span}\{ u \} \subseteq \mathbb{R}^n$
per definizione di sotto-spazio ortogonale vale
$$
V\oplus V^\perp = \mathbb{R}^n
$$
da cui segue che $\dim V^\perp = n-1$, ergo $V^\perp$ è un iperpiano di $\mathbb{R}^n$

usando la definizione di somma diretta, scompongo $x$ nelle componenti ortogonali
$$
x = \underbrace{ x_{\parallel} }_{ \in V }+ \underbrace{ x_{\perp} }_{ \in V^\perp }
$$
allora posso dire che
- $x_{\perp} \perp u$
- $x_{\parallel} \in\text{Span}\{ u \}\Rightarrow x_{\parallel}=\lambda u$ con $\lambda \in \mathbb{R}$

usando la definizione di vettori ortogonali, dalla prima affermazione ho
$$
\begin{align}
(x_{\perp}, u)=0  & \Rightarrow (x - x_{\parallel}, u) = 0 \\ \\
 & \Rightarrow (x - \lambda u, u) = 0 \\ \\
 & \Rightarrow(x, u) - \lambda(u, u)=0 \\ \\
 & \Rightarrow \lambda= \frac{(x, u)}{(u, u)}= \frac{u^Tx}{u^Tu}
\end{align}
$$
quindi
$$
x _{\parallel } = \lambda u \Rightarrow x_{\parallel }=\frac{u^Tx}{u^Tu}u
$$
applico $H$ ad $x$
$$
\begin{align}
Hx  & = \left( I-2 \frac{uu^T}{u^Tu} \right)x  \\ \\
 & =x - 2 \underbrace{ \frac{uu^Tx}{u^Tu}  }_{ x_{\parallel} } \\
 & =x -2 x_{\parallel} \\ \\
 & =-x _{\parallel} + x_{\perp} \qquad\boxed{\text{cvd}}
\end{align}
$$
quindi la componente parallela ad $u$ viene riflessa rispetto all'iperpiano $V^\perp$, perpendicolare ad $u$.

###### teo fattorizzazione QR
> sia $A \in \mathcal{M}_{m \times n}(\mathbb{R})$ con $m \geq n, \mathrm{rg}A=n$ ergo con le colonne linearmente indipendenti,
> allora esistono
> $$
> \begin{gather}
> Q \in \mathcal{M}_{m \times m}(\mathbb{R}) \text{ ortogonale} \\
> R= \begin{bmatrix}
> R_{1} \\  \mathbf{0}
> \end{bmatrix}
> \end{gather}
> $$
> in cui
> $$
> \begin{gather}
> R _{1}\in  \mathcal{M}_{n \times n}(\mathbb{R}) \text{ triangolare superiore}\\
> \mathbf{0} \in \mathcal{M}_{(m-n) \times n} (\mathbb{R}) \text{ la matrice nulla}
> \end{gather}
> $$
> tali che
> $$
> A = QR
> $$

per questa dimostrazione, viene usato il seguente lemma fondamentale sui riflettori di Householder.

**lemma 3.** sia $x \in \mathbb{R}^n, x \neq 0$, allora
$$
\exists H \text{ tale che } Hx = \pm ||x||_{2}e_{1}
$$
in cui $H$ è un riflettore di Householder, $e_{1}$ è il primo vettore della base canonica.

**dimostrazione**: vogliamo costruire un riflettore tale da trasformare $x$ in un multiplo del primo vettore della base canonica.
per comodità, sia $\lambda = \pm||x||_{2}$, definiamo
$$
u = x - \lambda e_{1}
$$
consideriamo il riflettore di Householder definito rispetto ad $u$, calcoliamo $Hx$
$$
\begin{align}
Hx  &  = x -2u \frac{u^Tx}{u^Tu}\\  \\
 & =x -2 u \frac{{(x - \lambda e _{1})^Tx}}{{(x - \lambda e_{1})^T(x-\lambda e_{1})}}   \\ \\
 & =x -2 u \frac{||x||_{2}^2 -\lambda x _{1}  }{ ||x||_{2}^2 +\underbrace{ \lambda^2 }_{ ||x||^2 _{2} } - 2\lambda x_{1}} \\  \\
 & = x -\cancel{ 2 } u \frac{||x||_{2}^2-\lambda x _{1}}{\cancel{ 2 }(||x||_{2}^2 -\lambda x_{1})} \\  \\
 & = x - (x - \lambda e _{1}) = \lambda e_{1} \qquad\boxed{\text{cvd}}
\end{align}
$$
**osservazione**: visualmente, questo significa che possiamo riflettere un vettore $x$, rispetto ad un iperpiano opportuno, per allinearlo al primo vettore della base canonica.

**dimostrazione**: si dimostra la fattorizzazione QR in modo costruttivo.
si consideri la prima colonna della matrice $A$
$$
a_{1} = \begin{bmatrix}
a_{11} \\
\vdots \\
a_{m_{1}}
\end{bmatrix}
$$
per il lemma precedente, esiste un riflettore di Householder $H_{1}$ tale che
$$
H _{1}a_{1} = \lambda_{1} e_{1} =\begin{bmatrix}
\lambda_{1} \\
\vdots \\
0
\end{bmatrix}
$$
in cui $\lambda_{1} = \pm||a_{1}||_{2}$.

ora, applicando $H_{1}$ prima di $A$ otteniamo
$$
H_{1}A = \begin{bmatrix}
\lambda_{1} & * & \dots & *  \\
0 &  \\
\vdots  &  & A_{1}\\
0
\end{bmatrix}
$$
in cui $A_{1}\in \mathcal{M}_{(m-1)\times(n-1)}(\mathbb{R})$

a questo punto esiste un secondo riflettore di Householder $\tilde{H_{2}} \in \mathcal{M}_{(m-1)\times(n-1)}$ ed il suo corrispettivo
$$
H_{2} = \begin{bmatrix}
1 & 0 \\
 0 & \tilde{H_{2}}
\end{bmatrix}
$$
che se applicato prima di $H_{1}A$, annulla la seconda colonna di $A$, lasciando invariata la prima
$$
H_{2}H_{1}A = \begin{bmatrix}
\lambda_{1} & * & \dots & *  \\
0 & \lambda_{2} & \dots & * \\
\vdots  & \vdots&   A_{2}\\
0 & 0
\end{bmatrix}
$$
iterando il processo esattamente $n$ volte, ho annullato tutti gli elementi sotto la diagonale principale, ottenendo
$$
H _{n} \cdots H_{1}A = \begin{bmatrix}
R_{1} \\
\mathbf{0}
\end{bmatrix}
$$
dove gli elementi di $R_{1} \in \mathcal{M}_{n\times n}(\mathbb{R})$ sono i vari $\lambda_{k}=\pm||a_{k}||_{2}$ quindi sono $>0$, infatti per ipotesi $\mathrm{rg}A=n$
inoltre, ponendo
$$
Q = (H _{n} \cdots H_{1})^T \qquad R = \begin{bmatrix}
R_{1} \\ \mathbf{0}
\end{bmatrix}
$$
ottengo che
$$
A = QR \qquad\boxed{\text{cvd}}
$$
con $Q$ ortogonale, infatti
$$
(H _{n}\cdots H_{1})^T(H _{n} \cdots H_{1}) = H _{1}^T \cdots \underbrace{ H_{n}^TH _{n} }_{ I } \cdots H_{1} = I
$$
in cui ho usato la proposizione sull'ortogonalità del riflettore di Householder

**nota**: sfruttando questo teorema, rimodello un sistema lineare del tipo
$$
Ax =b
$$
nel caso in cui la matrice $A$ sia quadrata e invertibile, come
$$
\begin{align}
QRx=b &\Rightarrow \underbrace{ Q^TQ }_{ I }Rx = Q^Tb \\ 
 & \Rightarrow Rx = Q^Tb \\ \\
 & \Rightarrow 
\boxed{ \begin{cases}
Q^Tb = y \\
Rx = y
\end{cases}}_{  }
\end{align}
$$
**complessità**: la fattorizzazione ha funzione di complessità 
$$T(m,n)=mn^2 - \frac{n^3}{3}$$
nello specifico, nel caso $m=n$, ho
$$
T(n)=\frac{2}{3} n^3=O(n^3)
$$
##### stabilità di un algoritmo di fattorizzazione
si consideri la fattorizzazione di una matrice $A$
$$
A = BC
$$
poiché gli algoritmi numerici operano in aritmetica floating point, possiamo scrivere i fattori $B,C$ come valori perturbati
$$
\begin{gather}
\tilde{B} =B +\delta B \\
\tilde{ C}=C + \delta C
\end{gather}
$$
i fattori calcolati possono essere interpretati come la fattorizzazione esatta di una matrice perturbata
$$
 \tilde{A} = A + \delta A = \tilde{B}\tilde{C} 
$$
sviluppando
$$
\begin{align}
A + \delta A & =(B+\delta B)(C+\delta C) \\
 & =\underbrace{ BC }_{ A }+C\delta B + B\delta C +\delta B\delta C 
\end{align}
$$
quindi
$$
\delta A=C\delta B + B\delta C +\delta B\delta C 
$$
**nota**: la perturbazione su $A$ **non** dipende solo da $\delta B,\delta C$, ma anche dalla grandezza dei fattori $B,C$.
###### def stabilità forte e debole per problemi di fattorizzazione
data una fattorizzazione di una matrice $A$ con elementi limitati, del tipo
$$
A= BC
$$
dico che il problema è
- numericamente stabile _in senso debole_
	se risulta verificata la disequazione che definisce la stabilità
	$$
	||\delta A|| \leq c\cdot u\cdot||A||
	$$
	in cui $u$ è l'errore di macchina.
	o equivalentemente, se esistono costanti $\mathbf{a},\mathbf{b}>0$ _dipendenti_ dalla dimensione $n$ di $A$ tali che
	$$
	|b_{ij}|\leq \mathbf{a} \cdot \underset{i, j}\max\{ |a_{ij} \} \qquad|c_{ij}|\leq \mathbf{b} \cdot \underset{i, j}\max\{ |a_{ij} \}
	$$
- numericamente stabile _in senso forte_
	se risulta verificata la disequazione di stabilità per ogni componente di $A$
	$$
	|\delta a _{ij}| \leq c\cdot u\cdot|a_{ij}| \qquad \forall i,j
	$$
	o equivalentemente, se esistono costanti $\mathbf{a},\mathbf{b}>0$ _indipendenti_ da $A$
	$$
	|b_{ij}|\leq \mathbf{a} \cdot \underset{i, j}\max\{ |a_{ij} \} \qquad|c_{ij}|\leq \mathbf{b} \cdot \underset{i, j}\max\{ |a_{ij} \}
	$$
	questo significa che ogni elemento nei fattori $B,C$ è limitato in funzione del massimo elemento della matrice originale.

vediamo la stabilità per gli algoritmi di fattorizzazione presentati prima
- fattorizzazione di Gauss LU
	nel caso si usi il pivoting con pivot massimo per colonne, si ha
	$$
	|l _{ij}|\leq 1 \qquad |u_{ij}|\leq 2^{n-1}\cdot \underset{i, j}\max\{ |a_{ij}| \}
	$$
	quindi l'algoritmo risulta stabile debolmente, infatti la dipendenza da $n$ è esponenziale nel caso degli elementi di $U$.
- fattorizzazione di Cholesky
	l'algoritmo risulta stabile in senso forte, infatti
	$$
	|l_{ij} |\leq \sqrt{  \underset{i, j}\max\{ |a_{ij}| \} }
	$$
- fattorizzazione QR
	l'algoritmo risulta stabile in senso debole, infatti
	$$
	|q _{ij}|\leq 1 \qquad |r_{ij}|\leq \sqrt{ n }\cdot \underset{i, j}\max\{ |a_{ij}| \}
	$$
	seppure entrambi stabili in senso debole, la fattorizzazione QR dipende da $n$ in modo polinomiale, mentre quella LU in modo esponenziale, di conseguenza è più stabile.

## calcolo della matrice inversa
il problema di determinare la matrice inversa $A^{-1}$ di una matrice $A$ quadrata $n \times n$ non-singolare si riconduce al problema di risolvere $n$ sistemi lineari.

partendo dalla definizione
$$
AA^{-1} =A^{-1}A=I
$$
poiché l'$i$-esima colonna della matrice identità è l'$i$-esimo vettore della base canonica, indicando con $x_{i}$ l'$i$-esima colonna della matrice inversa $A^{-1}$, il calcolo dell'inversa equivale a risolvere $n$ sistemi lineari del tipo
$$
Ax_{i} =e_{i}
$$
in questo modo la soluzione di ogni sistema lineare rappresenta una colonna della matrice inversa.

si può applicare, ad esempio, la fattorizzazione LU sulla matrice $PA$ per risolvere questi sistemi.
si ottiene
$$
\boxed{
\begin{cases}
Ly_{i}=Pe_{i} \\
Ux_{i} = y_{i}
\end{cases}
}
$$
**nota**: la matrice $PA$ resta la stessa per ogni sistema.

## calcolo del determinante
sia $A \in \mathcal{M}_{n \times n}(\mathbb{R})$ matrice di cui vogliamo calcolare il determinante.

possiamo applicare la fattorizzazione LU sulla matrice $PA$ per ottenere
$$
\begin{align}
PA=LU  & \Rightarrow \det (PA) = \det(LU) \\
 & \Rightarrow \det P \cdot \det A = \det L \cdot \det U \\
\end{align}\qquad (\star)
$$
usando il teo Binet.
poiché $L,U$ sono triangolari, calcolando il loro determinante via lo sviluppo di Laplace ci restituisce
$$
\det U = \prod _{i}u_{ii} \qquad \det L = \prod_{i} l_{ii}
$$
$L$ inoltre ha tutti gli elementi sulla diagonale uguali a $1$, da cui $\det L=1$.
considerando che di $\det I=1$ per definizione, e che scambiare due righe (o colonne) cambia segno al determinante, dico che
$$
\det P=(-1)^S
$$
in cui indico con $S$ in numero di scambi effettuati.
riprendendo $(\star)$
$$
\begin{align}
(\star) & \Rightarrow \det P\cdot \det A= \underbrace{ \det L }_{ 1 } \cdot\det U \\
 & \Rightarrow \boxed{\det A = (-1)^S \prod_{i}u_{ii}}
\end{align}
$$
**nota**: $\mathrm{rg}A$ è invece il numero di elementi **non** nulli sulla diagonali di $U$.

