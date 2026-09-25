## equazioni non lineari

*definizione ordine di convergenza*
Sia data una successione di iterati $x_{k}$ generata da un metodo numerico convergente ad un limite $a$ e sia $e_{k}=x_{k}-a$.

se esistono due numeri reali $p\geq1$ e $c>0$ tali che 
$$
\lim_{ k \to \infty } \frac{\lvert e_{k+1} \rvert }{\lvert e_{k} \rvert^{p} }=c
$$
si dice che il metodo ha ordine di convergenza p e fattore di convegenza c.

*ordine convergenza newton*
se la radice trovata è una radice semplice allora newton ha ordine p = 2 e fattore $c=\frac{1}{2} \frac{f^{''}(a)}{f^{'}(a)}$

se $a$ è una radice di molteplicità $m$ allora ha ordine di convergenza lineare $p=1$ e fattore $c=\frac{m-1}{m}$


**Teorema di convergenza locale**
se $f:[a:b]\longrightarrow\mathbb{R}$ soddisfa le seguenti ipotesi
1. $f(a)f(b)<0$
2. $f,f',f''$ sono continue 
3. $f'(x) \neq 0 \forall x \in  [a:b]$

**Teorema di convergenza globale**
se $f:[a:b]\longrightarrow\mathbb{R}$ soddisfa le seguenti ipotesi
1. $f(a)f(b)<0$
2. $f'(x) \neq 0 \forall x \in  [a:b]$
3. convessità $f''(x)>0 \text{ oppure } f''(x)<0 \forall x \in  [a:b]$
4. tangenti agli estremi intersecano asse x internamente ad (a,b)


## sistemi lineari
- *teorema* rouche capelli
- matrice *non singolare*
	- Teorema: soluzione unica $\iff$ $A$ rango massimo
- metodo cramer costa troppo!! 
- condizionamento matrice $K(A)$, proprietà intrinseca della matrice
	- proprietà indice condizionamento norma2
	- $K_{2}(A)=\frac{\sqrt{ \lambda_{max}(A^{T}A) }}{\sqrt{ \lambda_{min}(A^{T}A) }}$
- vandermonde e hilbert matrici mal condizionate

### metodi diretti
l'idea è risolvere

$$
BCx=b
$$
spezziamo in
$$
\begin{cases}
By=b \\
Cx=y
\end{cases}
$$

complessita risoluzione matrici triangolari
$$
O\left( \frac{n^{2}}{2} \right)
$$

Teorema 1
- Se tutte le sottomatrici principali di testa sono _non singolari_ $\implies$ $\exists!$ fattorizzazione $LU$ di $A$ 
Teorema 2
- Se $A$ _non singolare_ $\implies$  $\exists~P$ tc $PA=LU$ 
	- LU pivottaggio massimo $PAx=Pb$
	- $$\begin{cases}
Ly=Pb \\
Ux=y
\end{cases}$$
costo computazionale  $O(\frac{2}{3}n^{3})$
si ricava sfruttando metodo eliminazione di gauss

Teorema Cholesky
La matrice $A$ *simmetrica e definita positiva* $\implies$ $A=L\cdot L^{T}$
costo computazionale  $O(\frac{1}{6}n^{3})$

Fattorizzazione QR
$\implies$ vuole $A$ rank max
costo computazionale  $O(\frac{4}{3}n^{3})$

#### Stabilita di un algoritmo di fattorizzazione
- senso debole
- forte

### metodi iterativi
basati sulla decomposizione di $A$ in $A=M-N$
$\implies$ $Mx=Nx+b$ $\implies$ $x=M^{-1}Nx+M^{-1}b$
si introduce quindi la matrice di iterazione $T=M^{-1}N$ e $q=M^{-1}b$
$$
x^{k}=Tx^{k-1}+q
$$
metodo di *Jacobi*
$M=D$ 
$N=-(E+F)$

**oss**: jacobi è definito se gli elementi diagonali di $A$ sono diversi da 0 altrienti tocca permutare.

convergenza...

metodi di *Gauss-seidel*
$M=(D+E)$ 
$N=-F$

**oss**
- usa componenti dell'iterato precedente (componenti aggiornate)
	- introdotta dipendenza quindi non facile da parallelizzare
- ad ogni iterazione bisogna risolvere un sistema lineare triangolare inferiore

*definizione convergenza*
il processo iterativo $x^{k}=Tx^{k-1}+q$ si dice convergente se per ogni "$x^{0}$" la successione $x^{k}$ converge ad un vettore limite $y$
$$
\lim_{ k \to \infty }x^{x}=y 
$$
in computer traduciamo che se per ogni $\epsilon>0$ esiste un indice $v$ tale che per ogni $k>v$ si ha:
$$
\lvert \lvert x^{k}-y \rvert  \rvert \leq \epsilon
$$

*Teorema*:
Se il $Ax=b$ ammette un'unica soluzione $x$ e il processo iterativo $x^{k}=Tx^{k-1}+q$ è convergente, allora il vettore limite $y$ coincide con la soluzione $x$
$$
\lim_{ k \to \infty }x^{k}=x 
$$
#### convergenza metodi iterativi
lo studio della convergenza segue i seguenti passaggi
1. definisce l'errore e il residuio al passo $k$
2. seguendo dei passaggi si osserva che $r^{k}=Ae^{k}$
3. seguendo altri passaggi $\implies e^{k}=Te^{k-1}=\dots=T^{k}e^{0}$
4. quindi affinche il procedimento converga allora $\lim_{ k \to \infty }T^{k}e^{0}=0$

*Teorema condizione necessarie e suffuciente di convergenza*
condizione necessarie e sufficiente affinchè il metodo iterativo converga alla soluzione $x$ per ogni scelta di $x^{0}$ è
$$
p(T)<1
$$

*velocità convergenza*
$$
\lvert \lvert e^{k} \rvert  \rvert \leq \lvert \lvert T \rvert  \rvert^{k} ~\lvert \lvert e^{0} \rvert  \rvert   
$$

$\implies \lvert \lvert e^{k} \rvert \rvert$ circa $Cp(T)^{k}$, $\lvert \lvert e^{k+1} \rvert \rvert$ circa $Cp(T)^{k+1}$

$$
\frac{\lvert \lvert e^{k+1} \rvert  \rvert}{\lvert \lvert e^{k} \rvert  \rvert } \approx p(T)
$$
*Teorema*
se esiste
$$
\lvert \lvert T \rvert  \rvert <1
$$
ricordiamo gli autovalori: $Tx=\lambda$ --> $\lvert \lambda \rvert\leq \lvert \lvert T \rvert \rvert$

per ipotesi quindi abbiamo che $\lvert \lvert T \rvert  \rvert <1$ percio
$$
\lvert \lambda \rvert \leq \lvert \lvert T \rvert  \rvert <1 \text{  per ogni autovalore}
$$
sta di fatto che $p(T)<1$

*Teorema*
Se la matrice $A$ è a **diagonale strettamente dominante**
$$
\lvert \lvert T_{G} \rvert  \rvert \leq \lvert \lvert T_{J} \rvert  \rvert <1
$$

*Teorema*
sia $A$ una matrice simmetrica definita positiva
$\implies$ gauss converge jacobi non è detto.

**oss**: un cattivo condizionamento porta ad un raggio spettrale vicino ad 1

##### SOR
teorema convergenza
1. $0<\omega<2$ è convergente per ogni scelta di $\omega$ in quel range
2. esiste un $\omega$ ottimo

#### criterio di arresto
si tiene una tolleranza 


### metodi di discesa
Teorema 1
Sia $A\in \mathbb{R}^{n\times n}$ matrice simmetrica e definita positiva allora la soluzione del sistema lineare
$$
Ax=b
$$
coincide con i punto di minimo della funzione quadratica $F(x)=\frac{1}{2} \langle Ax,x \rangle-\langle b,x \rangle$

dimo:
1. vettore residuo
2. soluzione sistema annulla residuo
3. cerchiamo il punti di minimo di F dato che dovrebbe coincidere con la soluzione...
4. calcolando il gradiente $\nabla F$ che coincide con $Ax-b=r$ 
5. verifichiamo che il punto sia un minimo $H$ di $F$ $\implies H_{F}(x)=A$
	1. $A$ è definita positiva allora $x^{*}$ e pe forza punto di minimo


*Teorema*
nel punto $x^{k+1}=x^{k}+a^{k}p^{k}$ il vettore residuo $r^{k+1}=Ax^{k+1}-b$ risulta ortogonale alla direzione $p^{k}$
$$
\langle r^{k+1},p^{k} \rangle = 0
$$
but la relazione appena scritta equivale a
$$
\langle \nabla F(x^{k+1}),p^{k} \rangle = 0
$$
significato: la direzione di massima crescita è ortogonale alla direzione nella quale ci siamo mossi


oss: $p^{k}$ deve formare un angolo ottuso con il gradiente

**Stepdescendet**
convergenza raggiunta quando il *norma residuo* a raggiunto la tolleranza

*velocita di convergenza*
ha ordine di convergenza lineare

$$
\frac{\lvert \lvert e^{k+1} \rvert  \rvert }{\lvert \lvert e^{k} \rvert  \rvert }\approx q
$$
q dipende dal condizionamento
$$
q=\frac{K(A)-1}{K(A)+1}
$$
dove ricordiamo $K(A)=\lvert \lvert A \rvert \rvert \cdot \lvert \lvert A^{-1} \rvert \rvert$

$\implies$ più $K(A)$ è grande più lenta è la convergenza

**Coniugate-Gradient**
in aritmetica esatta $A\in \mathbb{R}^{n \times n}$ simmetrica e definita positiva il Grad-Con determina la soluzione del sistema lineare $Ax=b$ in al più $n$ iterazioni
- poiche $r^{k}$ sono ortogonali tra loro
- le direzioni $p^{k}$ sono tra loro A-coniugate

*velocita di convergenza*
lineare ma piu veloce 
$$
ssd
$$
## Interpolazione

**Teorema dell'errore**
Siano assegnate le coppie $(x_{1},y_{i})$ con $i=0\dots n$
siano $y_{i}=f(x_{i})$ valori assunti in quesit punti da una funzione $f(x)$ definita in $[a,b]$ e continua insieme alle sue derivate fino alla $n+1$.
sia $P_{n}(x)$ il polinomio di grado $n$ che interpola tali coppie di dati

sia $\bar{x}\in[a,b]$
$$
E(\bar{x})=f(\bar{x})-P_{n}(\bar{x})
$$
risulta che 
$$
E(\bar{x})=\frac{1}{(n+1)!}\cdot \omega_{n+1}(\bar{x})\cdot f^{(n+1)}(\xi)
$$
- risulta chiaro che se $\bar{x}=x_{i}$ allora l'errore è nullo
- riusulta chiaro anche che i dati provenienti da polinomi di grado $n$ hanno la derivata $n+1$ nulla quindi l'errore è nullo

**convergenza del polinomio interpolante**
dalla formula deduciamo che al crescere del numero di punti di interpolazione, nel caso i punti sono scelti equidistanti, non si ha una convergenza alla funzione che ha generato i dati.
In particolare sono presenti forti oscillazioni agli estremi e una buona approssimazione al centro.

questo problema viene mitigato facendo uso dei zeri di chebichev, questo perchè l'errore di interpolazione dipende dalla regolarità della funzione e dalla dispozione dei punti.
questo perchè il polinomio $\omega_{n+1}$ con punti equidistanti fa esplodere l'errore agli estremi poiche se prendiamo un intervallo $[-1,1]$ se consideriamo un punto vicino a -1 allora la distanza dai punti vicini ad 1 si aggira a 2, difatti gli zeri di chebischev cercano di attenurare questa disparita sacrificando un po di precisione al centro, avremo quindi piu punti vicini agli estremi e meno punti in centro cosi da bilanciare.

per un intervallo da $[-1,1]$ gli zeri di chebichev sono
$$
\cos\left( \frac{1+2i}{2n+1}\cdot \pi \right)
$$
- $n$ grado polinomio
- $i$ indice punto

**condizionamento e costante di lebesgue**
consideriamo la perturabazione sui dati $\tilde{y}$ e $y$ dati esatti.
consideriamo quindi $P_{n}(x)=\sum_{0}^{n}L_{i}*y_{i}$ e $\tilde{P}_{n}(x)=\sum_{0}^{n}L_{i}*y_{i}$

consideriamo la differenza tra polinomio costruito da dati perturbati e non
$$
\tilde{P}_{n}(x) -P_{n}(x)=\sum_{i=0}^{n}L_{i}(x)\cdot(\tilde{y}-y)
$$
applicando la norma...
$$
\lvert  \tilde{P}_{n}(x) -P_{n}(x) \rvert \leq max \lvert \tilde{y_{i}} -y_{i} \rvert \cdot \sum_{i=0}^{n}\lvert L_{i}(x)  \rvert 
$$
definiamo $\lambda_{n}(x):=\sum_{i=0}^{n}\lvert L_{i}(x) \rvert$ *funzione di lebesgue*

passando alle norme infinito
$$
\max_{x \in [a,b]} \lvert \tilde{P}_{n}(x) -P_{n}(x) \rvert \leq \lvert    \lvert \tilde{y_{i}} -y_{i} \rvert \rvert_{\infty} \cdot \max_{x \in [a,b]}\lambda_{n}(x)
$$

da cui deduciamo
$$
\lvert \lvert \tilde{P}_{n}(x) -P_{n}(x) \rvert  \rvert_{\infty}\leq \lvert \lvert \lambda_{n}(x) \rvert  \rvert_{\infty} \cdot  \lvert \lvert \tilde{y_{i}} -y_{i} \rvert \rvert_{\infty}
$$
quindi la costante di lebesgue risulta essere il coefficiente di amplificazione degli errori sui dati e pertanto identifica il numero di condizionamento del propblema.

risulta che $\Lambda_{n}\geq1$ poiche
$$
\sum_{i=0}^{n}\lvert L_{i}(x) \rvert \geq \sum_{i=0}^{n} L_{i}(x)=1
$$

con nodi equispaziati, crescita esponenziale
$$\Lambda_{n} \approx \frac{2^{n+1}}{en\log_{e}(n)}$$

con zeri di chebichev, crescita logaritmica
$$
\Lambda_{n} \approx \frac{1}{2} \log_{e}(n)
$$
