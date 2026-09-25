## norma di vettore
intuitivamente, la norma di un vettore rappresenta la sua "lunghezza" o "grandezza" in uno spazio.

il concetto di norma rende possibile lo studio di distanze, proprietà geometriche e analitiche di spazi vettoriali.
##### def norma di un vettore
sia $|| \cdot || : \mathbb{R}^n \to \mathbb{R}^+ \cup \set{ 0}$ si chiama _norma_ su $\mathbb{R}^n$ se gode delle seguenti proprietà
- $||x|| \ge 0 \quad \forall x \in  \mathbb{R}^n$, inoltre $||x|| =0 \Leftrightarrow x=0$
- $||\lambda x|| = |\lambda | \cdot ||x|| \quad \forall \lambda \in \mathbb{R}, \forall x \in \mathbb{R}^n$
- $||x+y || \le ||x|| + ||y|| \quad \forall x, y \in \mathbb{R}^n$
###### prop continuità della funzione norma
>sia $||\cdot||$ una norma definita su uno spazio vettoriale $V$ di dimensione finita
>allora la funzione $f(x) = ||x||$ è continua

**dimostrazione**: usando la terza proprietà fondamentale della norma
$$
\begin{align}

&||x+y|| \leq ||x|| + ||y|| \\ \\
\Rightarrow \ & \mid ||x|| - ||y|| \mid~ \leq ||x -y||
\end{align}
 \qquad \forall x, y \in V
$$
questa proprietà si chiama _disuguaglianza triangolare inversa_.
definiamo una successione $(x_{n})$ tale che
$$
\lim _{  n \to \infty } x_{n} =x \in V
$$
allora
$$
\lim _{  n \to \infty } ||x - x_{n}|| = 0 \Rightarrow \lim _{  n \to \infty } ||x|| - ||x_{n}|| = 0 \qquad\boxed{\text{cvd}}
$$
###### norme fondamentali
alcune norme viste a lezione sono le seguenti
$$
\begin{gather}{}
||x||_1 = \sum ^n _{i=1} |x_i| & \qquad (1) \\
||x||_2 = \sqrt{ \sum ^n _{i=1} x_i^2 } & \qquad (2) \\
\end{gather}
$$
e la _norma infinito_
$$
\begin{align}
||x||_ \infty &= \underset{i\le n}\max\set{ |x_{i}| \in \mathbb{R} \mid x_i \text{ è componente di } x}\\
	&=  \underset{1 \le x \le n}\max \set{ |x_i|}
\end{align}
$$
##### def topologia
sia $X$ un insieme, $\mathcal{P} (X)$ il suo _insieme delle parti_.
una _topologia_ su $X$ è una famiglia, ergo insieme di sotto-insiemi
$$
\tau \subseteq \mathcal{P} (X)
$$
tale che
- $\varnothing \in \tau$ e $X \in \tau$
- l'unione arbitraria di insiemi in $\tau$, appartiene a $\tau$
	sia $(U_i)_{i \in |\tau|}$ una successione di insiemi in $\tau$, allora
	$$
	\forall i \text{ ho che }U_i \subseteq \tau \Rightarrow \bigcup ^k_i U_i \in \tau
	$$
- l'intersezione finita di insiemi in $\tau$, appartiene a $\tau$
	$$
	\forall U_1, \dots ,U_k \subseteq \tau \text{ ho che } \bigcap ^k_i U_i \in \tau
	$$

gli elementi di $\tau$ si chiamano _insiemi aperti_.
la coppia $(X, \tau)$ si chiama _spazio topologico_.
###### def equivalenza a livello topologico
due norme $||\cdot||_{a}, ||\cdot||_{b}$ sono _topologicamente equivalenti_ se generano la stessa _nozione di convergenza_, e quindi gli stessi insiemi aperti.

in altre parole se, data una successione $(x_n)$, ho che
$$
x _{n} \to x \text{ con } ||\cdot||_{a} \Leftrightarrow  x_{n} \to x \text{ con } ||\cdot||_{b}
$$

##### teo equivalenza tra norme
>$\forall ||x||_{a}, ||x||_b$ norme su uno spazio vettoriale $V$ di dimensione finita $\exists m, M \in \mathbb{R}$ tali che $\forall x \in \mathbb{R}^n$ ho
>$$m \cdot ||x||_a \le ||x||_{b} \le M \cdot ||x||_{a}$$

dico che le norme $||x||_{a}, ||x||_b$ sono _equivalenti_.

**nota**: un risultato ottenuto con una norma, è valido anche considerando tutte le altre norme equivalenti.

**dimostrazione**: sia $||\cdot||$ una norma qualsiasi si $V$, $e_{1},\dots,e_{n}$ la base canonica di V.
per il teorema delle coordinate
$$
x \in V = \sum^n_{i=1} x_{i}e_{i} 
$$
in cui $x_{i}$ sono le coordinate di $x$.
prendiamo come riferimento la norma infinito, che definiamo sulle coordinate
$$
||x||_{\infty} = \underset{1\leq i\leq n}\max \{  |x_{i}| \}
$$
dalla disuguaglianza triangolare
$$
||x|| = \left\lVert \sum x _{i} e_{i} \right\rVert \leq \sum |x _{i}| \lVert e_{i} \rVert
$$
usando $|x_{i}|\leq ||x||_{\infty}$ ottengo
$$
||x|| \leq ||x||_{\infty}\sum ||e _{i}|| \Rightarrow ||x|| \leq M\cdot||x||_{\infty} \qquad (\star)
$$
ora  si consideri l'insieme
$$
S = \{  x \in V \mid ||x||_{\infty} =1 \}
$$
posso dire che
- è chiuso e limitato
- la funzione $x \mapsto ||x||$ è continua

quindi esiste un minimo
$$
m = \underset{x \in S}\min \{  ||x|| \} > 0
$$
infatti $||x|| = 0 \Leftrightarrow x = 0 \Leftrightarrow ||x||_{\infty} = 0$.
ora, per un qualsiasi $x \in V$, pongo
$$
y = \frac{x}{||x||_{\infty}} \Rightarrow ||y||_{\infty}= \frac{||x||_{\infty}}{||x||_{\infty}} =1 \Rightarrow y \in S
$$
usando la seconda proprietà della norma.
ma allora vale $||y|| \geq m$, che sostituendo inverto come
$$
m||x||_{\infty} \leq ||x|| \qquad (\star \star)
$$
ora usando $(\star), (\star \star)$ possono dire che ogni norma è equivalente alla norma infinito.
$$
m \cdot ||x||_{\infty} \le ||x|| \le M \cdot ||x||_{\infty} \qquad\boxed{\text{cvd}}
$$
**osservazione**: posso scegliere una qualsiasi norma al posto della norma infinito ottenendo che ogni norma definita su uno spazio vettoriale di dimensione finita, è equivalente.
###### corollario equivalenza topologica tra norme
>sia $V$ uno spazio vettoriale di dimensione finita,
>allora tutte le norme su $V$ sono _equivalenti a livello topologico_, ergo inducono la stessa nozione di convergenza.

**dimostrazione**: usando
$$
m \cdot ||x||_{\infty} \le ||x|| \le M \cdot ||x||_{\infty}
$$
dimostro che per una successione $(x_{n})$
$$
x _{n} \to x \text{ con } ||\cdot||_{\infty} \Leftrightarrow  x_{n} \to x \text{ con } ||\cdot||
$$
$(\Rightarrow)$: supponendo $||x_{n}-x||_{\infty} \to 0$ allora per il teorema del singolo carabiniere
$$
0\leq ||x _{n}-x||\leq ||x_{n}-x||_{\infty}\Rightarrow ||x_{n}-x|| \to 0
$$
$(\Leftarrow)$: supponendo $||x_{n}-x|| \to 0$, analogamente a prima
$$
m||x _{n}-x||_{\infty} \leq ||x _{n}-x|| \Rightarrow ||x_{n}-x|| \leq \frac{1}{m} ||x_{n}-x|| \to 0
$$
da cui segue la tesi
$$
||x _{n} -x|| \to 0 \Leftrightarrow  ||x_{n} -x||_{\infty} \qquad\boxed{\text{cvd}}
$$
## norma di matrice
la norma di una matrice estende il concetto di norma, rendendo possibile misurare la "dimensione" o l'"intensità" di una matrice.

consentono di valutare la stabilità dei calcoli e trasformazioni lineari effettuate, quindi sono alla base dell'analisi della propagazione degli errori e dello studio di convergenza.
###### def norma di una matrice
l'applicazione 
$$
\begin{array}{crl}

|| \cdot || :& M_{m \times n} ( \mathbb{R})& \to \mathbb{R}^+ \cup \set{ 0}\\
& A& \mapsto ||A||
\end{array}
$$
è una _norma_ per la matrice $A$ se gode delle seguenti proprietà
- $||A|| \ge 0 \quad \forall A \in  M_{m \times n}(\mathbb{R})$, inoltre $||A|| =0 \Leftrightarrow A=0$
- $||\lambda A|| = |\lambda | \cdot ||A|| \quad \forall \lambda \in \mathbb{R}, \forall A M_{m \times n}(\mathbb{R})$
- $||A+B || \le ||A|| + ||B|| \quad \forall A, B \in M_{m \times n}(\mathbb{R})$
- _sub-moltiplicatività_, $||A\cdot B || \le ||A|| \cdot ||B|| \quad \forall A \in M_{m \times n}(\mathbb{R}), B \in M_{n \times k}(\mathbb{R})$
	viene utilizzata nelle trasformazioni per avere un upper-bound sull'errore
	PROB DA TOGLIERE!

##### def norma compatibile
sia $X$ uno spazio vettoriale dotato di una topologia $\tau$,
una norma $|| \cdot ||$ su $X$ si dice _compatibile_ con $\tau$ se la topologia indotta dalla norma coincide con $\tau$, ergo se
$$
 \tau = \tau _{|| \cdot ||}
$$
in cui $\tau_{|| \cdot ||}$ è la topologia generata dalle _palle aperte_
$$
B(x, r) = \set{ y \in X \mid ||y - x|| < r}
$$
in altre parole, una successione converge rispetto alla norma $\Leftrightarrow$ converge nella topologia originale $\tau$.
###### def norma compatibile con il prodotto
sia $M_{m \times n}(\mathbb{R})$ lo spazio delle matrici $m \times n$.
una norma $|| \cdot ||$ si dice _compatibile con il prodotto riga per colonna_ se soddisfa la proprietà di _sub-moltiplicatività_.
$$
||A\cdot B || \le ||A|| \cdot ||B|| \quad \forall A \in M_{m \times n}(\mathbb{R}), B \in M_{n \times k}(\mathbb{R})
$$
##### def norma indotta
siano $V,W$ spazi vettoriali con rispettivamente norme $|| \cdot ||_V, || \cdot ||_W$.
sia $T: V \to W$ una applicazione lineare.

la _norma indotta_ di $T$ è definita come
$$
||T|| = \underset{x \ne 0 \in V} \sup \left\{  \frac {||Tx||_W}{||x||_V} \right \}
$$
equivalentemente
$$
||T|| = \underset{||x||_V = 1} \sup \set{ || Tx||_W}
$$
ancora equivalentemente, possiamo considerare norma indotta la più piccola costante $C$ tale che
$$
||Tx||_W \le C \cdot ||x||_V
$$
**osservazione**: basta usare il fatto che una matrice è una applicazione lineare per definire la norma indotta sulle matrici.

**nota**: intuitivamente, la norma indotta misura quanto una traformazione può "allungare" un vettore, al massimo.

per una norma indotta valgono le proprietà seguenti
- _sub-moltiplicatività_
- $||Tx|| \le ||T|| \cdot ||x|| \quad \forall x \in V$

###### norme fondamentali indotte
vediamo la versione indotta delle norme fondamentali precedenti.
sia $A \in M_{m \times n}(\mathbb{R})$
$$
	\begin{align}
		 & ||x||_1 = \sum ^n_{i=1} |x_i| \\
		 \Rightarrow\ & ||A||_1 = \underset{j=1, \dots, n} \max \set{ \sum ^m _{i=1} |a_{i,j}|} \quad (1) \\
	& ||A||_2 = \sqrt{ \rho(A^T A)} \quad (2)
	\end{align} 
$$
in cui $\rho$ è il _raggio spettrale_, ergo l'autovalore di modulo massimo della matrice $A^TA$
$$
\begin{align}
	& ||x||_ \infty = \underset{1 \le x \le n}\max \set{ |x_i|} \\
	\Rightarrow & ||A||_ \infty  = \underset{1 \le i \le n} \max \left\{ 
		\sum ^m _{j=1} |a_{i,j}|
	\right \}
\end{align}
$$
**osservazione**: possiamo vedere
- la norma $1$ come la massima somma sulla colonna
	si considera la norma $1$ di ogni colonna e si prende il massimo.
- la norma $\infty$ come la massima somma sulla riga
	si considera la norma $1$ di ogni riga e si prende il massimo.
