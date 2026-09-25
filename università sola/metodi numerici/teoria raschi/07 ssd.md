## sistemi sovra-determinati
sia $A \in \mathcal{M}_{n \times m}(\mathbb{R})$, $x \in \mathbb{R}^n$, $b \in \mathbb{R}^m$
sia il sistema 
$$
Ax = b
$$
tale che $m>n$, questo tipo di sistema si dice _sovra-determinato_. allora in accordo con Rouché-Capelli, se e solo se
$$
\mathrm{rg} A = \mathrm{rg} (A \mid b)
$$
il sistema ammette soluzione.

eppure, dato $m > n$ si hanno più equazioni rispetto al numero di incognite. ergo il sistema potrebbe **non** avere soluzione.
per questo, il problema **non** è propriamente ben posto nel senso di Hadamard.

per risolvere la questione, si riformula il problema richiedendo di determinare la migliore approssimazione $x \in \mathbb{R}^n$ che minimizza lo scostamento tra da $b$ secondo un dato criterio.

##### soluzione al senso dei minimi quadrati
sia il sistema sovra-determinato
$$
Ax =b
$$
in cui $A \in \mathcal{M}_{n \times m}(\mathbb{R})$, $x \in \mathbb{R}^n$, $b \in \mathbb{R}^m$, $m>n$.
si consideri il vettore residuo
$$
r(x) = Ax -b
$$
si vuole determinare la soluzione $x^* \in \mathbb{R}^n$ tale che rende minima la norma $2$ al quadrato del vettore residuo, ergo
$$
x^* \text{ tale che }  ||r(x^*)||^2_{2}= \underset{x \in \mathbb{R}^n}\min \set{||Ax - b||_2^2 } \qquad (\star)  
$$
questa soluzione è detta _al senso dei minimi quadrati_, o alternativamente problema dei _least squares_ (LS).

###### teo equazioni normali per LS
> sia il sistema lineare sovra-determinato
> $$
> Ax=b
> $$
> in cui $A \in \mathcal{M}_{n \times m}(\mathbb{R})$, $x \in \mathbb{R}^n$, $b \in \mathbb{R}^m$, $m>n$.
> allora vale
> $$
>  (\star) \Leftrightarrow  A^TAx^* =A^Tb
> $$
> inoltre
> $$
> x^* \text{ è unica } \Leftrightarrow  \mathrm{rg} A =n
> $$

**dimostrazione**: definisco
$$
\begin{align}
F(x)  & = ||r(x)||_{2}^2\\ \\
 & = ||Ax - b||^2_2  \\ \\
 & = (Ax -b)^T(Ax - b)   \\ \\
 & = x^TA^TAx-x^TA^Tb-\underbrace{ b^TAx }_{ x^TA^Tb }+b^Tb \\ 
 & = x^TA^TAx - 2x^TA^Tb + b^Tb
\end{align}
$$
usando la simmetria di $A$.
in modo da avere $x^*$ tale che
$$
\nabla F(x^*) = \underline{o}
$$
ed aver riformulato il problema come uno di minimo.

pongo $G= A^TA$. si ha che $G$, detta **matrice di Graam** è simmetrica, infatti
$$
G^T = (A^TA) ^T = A^TA
$$
quindi posso scrivere
$$
F(x) = x^TGx - 2x^TA^Tb + b^Tb
$$
da cui segue
$$
\frac {d}{dx}F(x) = \nabla F(x) = \cancel{ 2 }Gx - \cancel{ 2 }A^Tb \qquad (\star\star)
$$
per il corollario su teo forma quadratica e convessità.
per lo stesso teorema, $F$ è convessa ed ammette un unico punto critico, che è di minimo assoluto. per definizione di $F$, tale punto $x^*$ soddisfa $(\star)$.

allora il vettore soluzione $x^* \in \mathbb{R}^n$ che annulla il gradiente vale
$$
\nabla F(x^*) = \underline{o} \Rightarrow Gx^* = A^Tb \qquad (\star\star) \qquad\boxed{\text{cvd}}
$$
le due equazioni equivalenti $(\star\star)$ sono dette **equazioni normali**.

**nota**: la matrice $G=A^TA$ è simmetrica e definita positiva, quindi il sistema delle equazioni normali può essere risolto via il metodo di Cholesky.

###### condizionamento
il sistema delle equazioni normali può risultare mal condizionato anche quando la matrice dei termini noti originale **non** lo era.
si consideri il seguente lemma.

**lemma 1.** vale la relazione
$$
K_{2}(A^TA) = K^2_{2}(A)
$$

**dimostrazione**: sia $A \in \mathcal{M}_{n \times m}(\mathbb{R})$, pongo $G=A^TA$.
allora $G$ è simmetrica, quindi
$$
\begin{align}
K _{2}(G) & = \sqrt{  \frac{{\lambda_{max}(G^TG)}}{\lambda_{min}(G^TG)} }\\ \\
& =\sqrt{ \frac{{\lambda _{max}(G^2)}}{\lambda_{min}(G^2)} } \\ \\
& = \frac{{\lambda _{max}(G)}}{\lambda_{min}(G)} \\ \\
& = \frac{{\lambda _{max}(A^TA)}}{\lambda_{min}(A^TA)}=K^2_{2}(A) \qquad\boxed{\text{cvd}}
\end{align}
$$
per questo motivo, la passaggio alla matrice di Graam quadra l'indice di condizionamento $K$.
segue che per la soluzione al senso dei minimi quadrati, il sistema delle equazioni normali è efficacie solo se la matrice dei coefficienti originale è molto ben condizionata.

##### metodo QR per LS
sia $Q \in \mathcal{M}_{m \times m}(\mathbb{R})$ ortogonale, ergo $Q^TQ=I$.
allora per teo matrice ortogonale $\Leftrightarrow$ isometria, $Q$ è la matrice di una isometria.
per la proposizione su isometrie e norma vale
$$
||y||_{2} =||Qy||_{2} = ||Q^Ty||_{2}
$$
**osservazione**: ricordo che una isometria è una trasformazione lineare che mantiene la norma e gli angoli relativi tra i vettori di base. in altre parole una isometria ruota solamente i vettori.

sia ora il sistema sovra-determinato
$$
Ax = b
$$
in cui  $A \in \mathcal{M}_{m \times n}(\mathbb{R})$, con $m>n$, di rango massimo.

la fattorizzazione applicata ad $A$ è espressa dal lemma seguente, che riprende il teo fattorizzazione QR per sistemi lineari.

> **lemma 2.** sia $A \in \mathcal{M}_{m \times n}(\mathbb{R})$, con $m>n$, di rango massimo.
> allora $A$ può essere fattorizzata, via successive trasformazioni ortogonali di Householder, come
> $$
> A=QR=Q \begin{bmatrix}
> R_{1}\\
> \mathbf{0}
> \end{bmatrix}
> $$
> in cui $Q \in \mathcal{M}_{m \times m}(\mathbb{R})$ ortogonale, $R_{1} \in \mathcal{M}_{n \times n}(\mathbb{R})$ triangolare superiore con tutti gli elementi sulla diagonale $\neq0$.

dalla definizione di matrice ortogonale, ho immediatamente
$$
Q \text{ ortogonale} \Leftrightarrow Q^T \text{ ortogonale} \Rightarrow Q^T = Q^{-1}
$$
quindi, usando la proprietà di isometria, vale
$$
\begin{align}
||r(x)||^2 _{2} & = ||Q^Tr(x)||_{2}^2 \\ \\
 &  =||Q^T(Ax-b)||^2_{2}  \\ \\
 & =||\underbrace{ Q^TA }_{ Q^{-1}A=R }x - Q^Tb||^2_{2}  \\  
 & = ||Rx-Q^Tb||^2_{2}
\end{align}
$$
pongo $h = \begin{bmatrix}h_{1}\\h_{2}\end{bmatrix}=Q^Tb~$ con $h_{1} \in \mathbb{R}^n$.
quindi noto
$$
Rx - h = \begin{bmatrix}
R_{1}\\ \mathbf{0}
\end{bmatrix}
x - \begin{bmatrix}
h_{1}\\h_{2}
\end{bmatrix}
=\begin{bmatrix}
R_{1}x- h_{1}
\\ -h_{2}
\end{bmatrix}
$$
ora usando la definizione di norma $2$ ho
$$
\left\| \begin{bmatrix}
 R _{1}x-h_{1}  \\
-h_{2}
\end{bmatrix}\right \|^2_{2}= \left \| \begin{bmatrix}
R_{1}x-h_{1}
\end{bmatrix}
\right \|^2_{2}
+ \left \| h_{2} \right \|^2_{2}
$$
allora ho riscritto il problema
$$
||r(x)||^2_{2} = \left \| \begin{bmatrix}
R_{1}x-h_{1}
\end{bmatrix}
\right \|^2_{2}
+ \left \| h_{2} \right \|^2_{2}
$$
in cui il secondo termine **non** dipende da $x$. di conseguenza, il minimo si raggiunge annullando il primo termine, ergo risolvendo il sistema
$$
R _{1}x^*-h_{1}= \underline{o} \Rightarrow \boxed{R _{1}x^*=h_{1}} \qquad(\star \star \star)
$$
tale sistema è triangolare superiore per definizione di $R_{1}$, si può quindi risolvere facilmente per sostituzione.

**nota**: dalla risoluzione del sistema $(\star \star \star)$ si deduce che per la soluzione $x^* \in \mathbb{R}^n$ vale
$$
||r(x^*)||^2_{2} =||h_{2}||^2_{2}
$$
in altre parole, $||h_{2}||^2_{2}$ rappresenta l'errore minimo ottenibile.

###### stabilità
> ricordo che la fattorizzazione QR è stabile in senso debole con
> $$
> |q _{ij}| \leq 1 \qquad |r_{ij}| \leq \sqrt{ m }\cdot \underset{i, j}\max\{ |a_{ij}| \} \qquad \forall i,j
> $$
> quindi generalmente accettabile in quanto la crescita del fattore $\sqrt{ m }$ è relativamente lenta.

**dimostrazione**: sia la fattorizzazione QR per $A \in \mathcal{M}_{m \times n}(\mathbb{R})$
$$
A=QR\quad\text{con}\quad Q^TQ=I
$$
ed $R$ triangolare superiore.
indico
- con $a_{j}$ la $j$-esima colonna di $A$
- con $r_{j}$ la $j$-esima colonna di $R$
- con $q_{j}$ la $j$-esima colonna di $Q$

si consideri inizialmente l'affermazione su $Q$, ho che
$$
Q^TQ \Leftrightarrow  q_{1},\dots,q_{m} \text{ base ortonormale}
$$
da teo matrice ortogonale $\Leftrightarrow$ base ortonormale.
per definizione, ho vettore ortonormale $\Rightarrow$ versore, ergo
$$
||q _{j}||_{2} = 1 \quad \forall j
$$
ora per definizione di norma $2$ ho
$$
|q _{ij}| \leq ||q_{j}||_{2} =1 \quad\forall i,j
$$
spostandoci su $R$, ho che
$$
R=Q^TA\Rightarrow r_{j} =Q^Ta_{j}
$$
poiché $Q$ è la matrice associata ad una isometria, in quanto ortogonale, vale
$$
||r _{j}||_{2} = ||Qa _{j}||_{2}=||a_{j}||_{2}
$$
per definizione di norma $2$
$$
||a _{j}||_{2}= \sqrt{ \sum^{m}_{i=1}|a_{ij}|^2 }
$$
poniamo $M = \underset{i,j}\max\{ |a_{ij}| \}$, quindi
$$
|a_{ij}|\leq M\Rightarrow 
||a _{j}||_{2}\leq \sqrt{ \sum^{m}_{i=1}M^2 } = M\sqrt{ m }
$$
sempre per definizione di norma $2$ ho
$$
|r _{ij}| \leq ||r_{j}||_{2} \quad\forall i,j
$$
concludo che
$$
|r _{ij}| \leq ||r_{j}||_{2} = ||a _{j}||_{2}\leq M\sqrt{ m } \qquad\boxed{\text{cvd}}
$$

##### singular value decomposition
sia il sistema lineare sovra-determinato
$$
Ax= b
$$
con $A \in \mathcal{M}_{m \times n}(\mathbb{R})$, $x \in \mathbb{R}^n$, $b \in \mathbb{R}^m$, $m>n$.
sia il metodo delle equazioni normali che quello della decomposizione QR richiedono rango di $A$ sia massimo, ergo
$$
\mathrm{rg}A = n
$$
se questa condizione **non** fosse soddisfatta, una soluzione unica al senso dei minimi quadrati **non** sarebbe determinabile.
vogliamo sviluppare
- un criterio per selezionare una soluzione significativa
- uno strumento che gestisca il caso $\mathrm{rg}A<n$

la soluzione è rappresentata dalla decomposizione in valori singolari (singular value decomposition).

###### teo SVD
> sia $A \in \mathcal{M}_{m \times n}$ tale che $k=\mathrm{rg}A< \min(m,n)$, allora
> $$
> \begin{gather}
> \exists U \in \mathcal{M}_{m \times m}(\mathbb{R}), V \in \mathcal{M}_{n \times n}(\mathbb{R}) \text{ ortogonali} \\
>  \\
> \text{tali che} \\  \\
> U^TAV = \Sigma \Leftrightarrow A=U\Sigma V^T
> \end{gather}
> $$
> con $\Sigma \in \mathcal{M}_{m \times n}(\mathbb{R})$ matrice diagonale del tipo
> $$
> \Sigma= \begin{bmatrix}
> \begin{array}{ccc}
> \sigma_{1} \\
>  &  \ddots \\
>  &  & \sigma _{k}
> \end{array}
> \\
> \underbrace{ \begin{array}{ccc}
>  &  &   &  &  \\
>  &  &  &  \\
>  &  &  &  \  \\ 
> \end{array} }_{  ~k~}
>  & \underbrace{
> \begin{array}{ccc}
> 0 \\
>  &  \ddots \\
>  &  & 0
> \end{array}
> }_{ n-k }
> \end{bmatrix}
> 
> \begin{array}{l}
> \begin{rcases}
> \\ \\ \\  \\
> \end{rcases}\left._{k} \right. \\ 
> \begin{rcases}
> \\ \\  \\ \\
> \end{rcases}\left._{m-k} \right.\\~
> \end{array}
> $$
> in cui $\sigma_{1} \geq \dots\geq \sigma_{k}>0$.

le colonne di $U, V$ sono dette rispettivamente _vettori singolari sinistri_ e _vettori singolari destri_ di $A$.

**osservazione**: $A$ è una trasformazione lineare $\mathbb{R}^n \to \mathbb{R}^m$. il teorema afferma che tale trasformazione è equivalente ad una composizione di tre trasformazioni
- $V^T$ una rotazione o riflessione in $\mathbb{R}^n$
- $\Sigma$ una scalatura lungo gli assi
- $U$ una rotazione o riflessione in $\mathbb{R}^m$

dall'enunciato, sono dedotte le seguenti proprietà
- $\sigma_{i}>0\in \mathbb{R}$ per ogni $i$
- $\sigma_{1}$ è il massimo valore singolare, detto anche $\sigma_{max}$. $\sigma_{k}$ è il più piccolo, detto anche $\sigma_{min}$
- $k = \mathrm{rg}\Sigma=\mathrm{rg}A$

%% 
- $K(A)= \frac{\sigma_{max}}{\sigma_{min}}$
- i valori singolari sono gli autovalori della matrice $A$
%%

###### prop SVD per l'indice di condizionamento in norma 2
> sia $A \in \mathcal{M}_{n\times n}(\mathbb{R})$ invertibile, e siano
> $$
> \sigma _{max}=\sigma_{1}\qquad \sigma_{min}=\sigma_{n}
> $$
> rispettivamente il massimo e minimo valore singolare di $A$.
> allora l'indice di condizionamento in norma $2$ vale
> $$
> K_{2}(A)= \frac{\sigma_{max}}{\sigma_{min}}
> $$

**dimostrazione**: usando la definizione di norma indotta generica
$$
\|A\|_{2} = \underset{ \|x\|_{2}=1 }{ \max }\{ \|Ax\|_{2} \}
$$
usando SVD ottengo
$$
\|Ax\|_{2} =\|U\Sigma V^Tx\|_{2}=\|\Sigma V^Tx\|_{2}
$$
in cui ho usato l'ortogonalità di $U$, che rappresenta una isometria.

impongo la sostituzione
$$
y=V^Tx \Rightarrow\|y\|_{2}=\|x\|_{2}
$$
in cui ho usato l'ortogonalità di $V$.
segue quindi
$$
\|A\|_{2} = \underset{ \|y\|_{2}=1 }{ \max }\{ \|\Sigma y\|_{2} \}
$$
ma, usando $\sigma_{1}> \dots> \sigma_{n}$
$$
\begin{align}
\| \Sigma y\|^2_{2} & =\sigma _{1}^2y_{1}^2 + \dots+ \sigma^2 _{n}y_{n}^2 \\ \\
 & \leq \sigma^2 _{1}(\underbrace{ y_{1}^2 + \dots + y _{n}^2 }_{ \|y\|^2_{2} })  \\
\|\Sigma y\|_{2} & \leq \sigma_{1}\|y\|_{2}
\end{align}
$$
in cui l'uguaglianza è ottenuta per $y = e_{1}$.

ora, tornando all'equazione precedente
$$
\|A\|_{2}   = \underset{ \|y\|_{2}=1 }{ \max }\{ \|\Sigma y\|_{2} \} = \sigma_{1}\|e _{1}\|_{2} = \sigma_{max}
$$
analogamente, ho per $A^{-1}$
$$
A^{-1} = (U\Sigma V^T)^{-1} = V\Sigma^{-1} U^T
$$
questa fattorizzazione possiede le stesse proprietà usate per $A$, con l'unica differenza che l'autovalore massimo di $\Sigma^{-1}$ è $\frac{1}{\sigma_{min}}$.
di conseguenza ho
$$
\|A^{-1}\|_{2} = \frac{1}{\sigma_{min}}
$$
concludo usando la definizione di indice di condizionamento in norma $2$
$$
K(A)_{2} = \|A\|_{2} \|A^{-1}\|_{2} = \sigma _{max}\cdot \frac{1}{\sigma_{min}} \qquad\boxed{\text{cvd}}
$$
**nota**: si parla di norma $2$, ergo la norma descritta la dal prodotto scalare standard, perché è per essa che valgono le proprietà delle isometrie.

###### prop definizione equivalente per valori singolari
> i valori singolari di $A\in \mathcal{M}_{n\times n}(\mathbb{R})$ possono essere alternativamente definiti come
> $$
> \sigma_{i}^2 = \lambda_{i}(A^TA)
> $$
> dove $\lambda_{i}(A^TA)$ indica l'autovalore di $A^TA$.

**dimostrazione**: dalla SVD per $A$ ho
$$
A= U\Sigma V^T
$$
quindi calcolo
$$
\begin{align}
A^TA & =(U\Sigma V^T)^T(U\Sigma V^T) \\
 \\
 & =V\Sigma^T\underbrace{ U^TU }_{ I }\Sigma V^T \\
&=V\Sigma^T\Sigma V^T
\end{align}
$$
ma poiché $\Sigma$ è diagonale, ottengo
$$
\Sigma^T=\Sigma\Rightarrow \Sigma^T\Sigma=\Sigma^2
$$
ponendo $T=\Sigma^2$ ottengo che
$$
A^TA= VTV^T \qquad T=\begin{bmatrix}
\sigma_{1}^2 \\
&\ddots \\
&&\sigma_{n}^2
\end{bmatrix}
$$
è, per teo Spettrale, effettivamente una decomposizione spettrale della matrice
$$
A^TA
$$
in cui i suoi autovalori sono gli elementi della matrice diagonale $T$, ergo
$$
\lambda _{i}(A^TA)=\sigma_{i}^{2} \qquad\boxed{\text{cvd}}
$$

###### decomposizione spettrale
SVD permette di scrivere $A$ come somma di matrici di rango $1$
$$
A=U\Sigma V^T\Rightarrow
A = \sum^n_{j=1}\sigma_{j}u_{j}v_{j}^T
$$
questa approssimazione è importante nel caso in cui fosse necessario approssimare $A$ con rango $r<k$, rispetto alla norma $2$.

###### teo SVD per LS
> si consideri il sistema sovra-determinato
> $$
> Ax =b \qquad
> \begin{array}{}
> A \in \mathcal{M}_{m \times n}(\mathbb{R})\\ b \in \mathbb{R}^m
> \end{array}
> $$
> tale che, risolvendo al senso dei minimi quadrati, si debba determinare
> $$
> x^* \text{ tale che }r(x^*) = \underset{x \in \mathbb{R}^n}\min\{ ||Ax-b||^2_{2} \}
> $$
> sia la decomposizione SVD
> $$
> A= U\Sigma V^T
> $$
> allora vale
> $$
> \boxed{x^*=V\Sigma^+U^Tb}
> $$
> in cui $\Sigma^+$ è la matrice diagonale di autovalori $\frac{1}{\sigma_{1}}, \dots, \frac{1}{\sigma_{k}}$.

**dimostrazione**: per teo matrice ortogonale $\Leftrightarrow$ isometria, usando le proprietà dell'isometria
$$
||r(x)||_{2}=||Ax -b||_{2} =||U^T(Ax-b)||_{2}
$$
sostituendo la SVD
$$
\begin{align}
||U^T(Ax-b)||_{2} &= ||\underbrace{ U^TU }_{ I }\Sigma V^Tx - U^Tb||_{2}  \\
&= ||\Sigma V^Tx - U^Tb||_{2}
\end{align}
$$
per ortogonalità di $U$.
pongo
$$
\begin{gather}
c  \in \mathbb{R}^m = U^Tb \\
y \in \mathbb{R}^n = V^Tx
\end{gather}
$$
dall'ortogonalità di $V$ segue
$$
\begin{rcases}
y = V^Tx\\
V^T = V^{-1}
\end{rcases} \Rightarrow x = Vy
$$
riscrivendo il problema ho ottenuto
$$
||Ax - b||_{2} = ||\Sigma y-c||_{2}
$$
a questo punto ci concentriamo sulla struttura dei due vettori che abbiamo introdotto, $y,c$.
scrivo
$$
y = \begin{bmatrix}
y_{1}\\y_{2}
\end{bmatrix}
\qquad c = \begin{bmatrix}
c_{1}\\c_{2}
\end{bmatrix}
$$
in cui, supponendo $\mathrm{rg}A=k$, ho
$$
\begin{gather}
y_{1}, c_{1} \in \mathbb{R}^k \\
y_{2} \in \mathbb{R}^{n-k} \\
c_{2} \in \mathbb{R}^{m-k}
\end{gather}
$$
sia inoltre $D \in \mathcal{M}_{k \times k}(\mathbb{R})$ la matrice diagonale dei valori singolari, ergo
$$
D = \begin{bmatrix}
\sigma_{1} \\
 & \ddots \\
 &  & \sigma_{k} 
\end{bmatrix}
\Rightarrow \Sigma = \begin{bmatrix}
D & \dots & 0 \\ 
\vdots & \ddots & \vdots\\
 0 & \dots & 0
\end{bmatrix}
$$
segue inoltre che
$$
\Sigma y = \begin{bmatrix}
Dy_{1} \\ 
\underline{o}
\end{bmatrix}
$$
ma allora
$$
||\Sigma y -c||_{2}^2 = \left\| \begin{bmatrix}
 D y_{1}-c_{1}  \\
-c_{2}
\end{bmatrix}\right \|^2_{2}= ||Dy_{1}-c_{1}||^2_{2}+||c_{2}||^2_{2}
$$
il secondo termine $||c_{2}||_{2}^2$ **non** dipende da $y$, quindi nemmeno da $x$, allora la soluzione del problema si limita ad annullare il primo termine.
dato che $D$ è diagonale invertibile, il minimo si ottiene facilmente
$$
Dy _{1} -c_{1} = \underline{o} \Rightarrow y_{1}=D^{-1}c_{1}
$$
**osservazione**: le componenti $y_{2}$ **non** influenzano il residuo.

ora facciamo la sostituzione inversa per riavere $x$.
$$
x = Vy \Rightarrow ||x||_{2}^2 = ||Vy||^2_{2} =||y_{1}||^2_{2}+||y_{2}||^2_{2}
$$
in cui ho usato le proprietà di isometria di $V$, e la definizione di norma $2$.
intendendo considerare la _soluzione di norma minima_, vogliamo minimizzare
$$
||y_{1}||^2_{2}+||y_{2}||^2_{2}
$$
quindi impongo $||y_{2}||^2_{2} = 0$.
di conseguenza ho
$$
y^* = \begin{bmatrix}
D^{-1}c_{1}\\ 
\underline{o}
\end{bmatrix} = \Sigma^{+}c
$$
tornando ad $x$
$$
x^* = Vy^*= V\Sigma^{+}\underbrace{ c }_{ U^Tb } = V\Sigma^{+}U^Tb \qquad\boxed{\text{cvd}}
$$
