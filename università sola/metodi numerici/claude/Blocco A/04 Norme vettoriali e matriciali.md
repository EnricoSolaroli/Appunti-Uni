# Norme vettoriali e matriciali

> **Blocco A · giorno 20 agosto (~1 h)** · Fonte: `Norme_vettoriali_e_matriciali.pdf`
> Nessun laboratorio dedicato. È il ponte verso il Blocco B: senza norme non puoi definire $K(A)$.

---

## 0. Perché servono

Finora l'errore relativo era definito per **scalari**: $\frac{|x-\tilde x|}{|x|}$. Ma i dati di un problema sono in generale **vettori** di $\mathbb{R}^n$ o **matrici** di $\mathbb{R}^{m\times n}$. Serve uno strumento che estenda la nozione di "grandezza" a questi oggetti: la **norma**.

Tutto il condizionamento dei sistemi lineari ($K(A)=\|A\|\,\|A^{-1}\|$) poggia su questo capitolo.

---

## 1. Norma vettoriale

> **Definizione.** Un'applicazione $\|\cdot\| : \mathbb{R}^n \to \mathbb{R}^+\cup\{0\}$ è una **norma** se:
> 1. $\|x\| > 0\;\;\forall x \in \mathbb{R}^n$, e $\|x\|=0 \iff x=0$
> 2. $\|\lambda x\| = |\lambda|\cdot\|x\|\;\;\forall\lambda\in\mathbb{R},\forall x\in\mathbb{R}^n$ *(omogeneità)*
> 3. $\|x+y\| \le \|x\|+\|y\|\;\;\forall x,y\in\mathbb{R}^n$ *(disuguaglianza triangolare)*

### Le tre norme di uso comune

$$\|x\|_\infty = \max_i |x_i| \qquad\qquad \|x\|_1 = \sum_{i=1}^{n}|x_i| \qquad\qquad \|x\|_2 = \left[\sum_{i=1}^{n}x_i^2\right]^{1/2}$$

Poiché il prodotto scalare canonico è la somma dei prodotti delle componenti:

$$\boxed{\;\|x\|_2 = \sqrt{x^T x}\;}$$

### Matrici ortogonali conservano la norma 2

Se $A$ è **ortogonale** ($A^TA=AA^T=I$, cioè $A^{-1}=A^T$):

$$\|Ax\|_2 = \sqrt{(Ax)^T(Ax)} = \sqrt{x^T(A^TA)x} = \sqrt{x^Tx} = \|x\|_2 \qquad \forall x\in\mathbb{R}^n$$

> 🔑 Questa proprietà è il motivo per cui la **fattorizzazione QR** è numericamente stabile: moltiplicare per una matrice ortogonale **non amplifica** gli errori in norma 2. Tienila da parte per il Blocco B e per i minimi quadrati.

### Equivalenza delle norme

![[norme_palle_unitarie.png]]

> Le tre palle unitarie $\{x:\|x\|=1\}$. L'inclusione è visibile a occhio: il quadrato ($\infty$) contiene il cerchio (2), che contiene il rombo (1) — ed è esattamente la catena $\|x\|_\infty \le \|x\|_2 \le \|x\|_1$.

> **Teorema.** Per ogni coppia di norme $\|x\|$ e $\|x\|_*$ esistono costanti $m,M>0$ tali che
> $$m\|x\|_* \le \|x\| \le M\|x\|_* \qquad \forall x\in\mathbb{R}^n$$
> Le due norme si dicono **equivalenti**. Tutte le norme su $\mathbb{R}^n$ sono equivalenti.

Serve perché **garantisce che un risultato ottenuto con una norma resta valido nelle altre**: se una successione converge in una norma, converge in tutte.

Disuguaglianze esplicite:

$$\|x\|_\infty \le \|x\|_2 \le \sqrt n\,\|x\|_\infty \qquad \|x\|_\infty \le \|x\|_1 \le n\,\|x\|_\infty \qquad \|x\|_2 \le \|x\|_1 \le \sqrt n\,\|x\|_2$$

da cui la catena da ricordare:

$$\boxed{\;\|x\|_\infty \le \|x\|_2 \le \|x\|_1\;}$$

**Verifica** con $x=[1,\,-4,\,2]^T$:
$\|x\|_\infty = \max(1,4,2)=4$ · $\|x\|_1 = 1+4+2=7$ · $\|x\|_2=\sqrt{1+16+4}=\sqrt{21}\approx4.583$
$$4 \le 4.583 \le 7 \;\checkmark$$

---

## 2. Norma matriciale

> **Definizione.** $\|A\|$ da $M(m\times n)$ a $\mathbb{R}^+\cup\{0\}$ è una **norma matriciale** se:
> 1. $\|A\|>0$ per $A\neq0$, e $\|A\|=0 \iff A=0$
> 2. $\|\alpha A\| = |\alpha|\,\|A\|$
> 3. $\|A+B\| \le \|A\|+\|B\|$
> 4. $\;\boldsymbol{\|A\cdot B\| \le \|A\|\cdot\|B\|}\;$ *(submoltiplicatività — la proprietà in più rispetto alle norme vettoriali)*

**Norme compatibili.** $\|\cdot\|_M$ è compatibile con la norma vettoriale $\|\cdot\|_v$ se

$$\|Ax\|_v \le \|A\|_M\cdot\|x\|_v \qquad \forall A,\forall x$$

### Norme indotte (o naturali)

Si definisce $\|A\|_v$ come **la più piccola costante $C$** per cui vale $\|Ax\|_v \le C\|x\|_v$. Equivalentemente:

$$\boxed{\;\|A\|_v = \sup_{x\neq0}\frac{\|Ax\|_v}{\|x\|_v} = \max_{\|x\|=1}\|Ax\|_v\;}$$

Interpretazione: **il massimo fattore di allungamento** che $A$ applica a un vettore.

### Le tre norme indotte

$$\|A\|_1 = \max_{j=1,\dots,n}\sum_{i=1}^{m}|a_{ij}| \qquad\quad \text{massimo fra le somme dei moduli \textbf{per colonne}}$$

$$\|A\|_\infty = \max_{i=1,\dots,m}\sum_{j=1}^{n}|a_{ij}| \qquad\quad \text{massimo fra le somme dei moduli \textbf{per righe}}$$

$$\|A\|_2 = \sqrt{\rho(A^TA)} \qquad\quad \rho = \textbf{raggio spettrale}, \text{ cioè l'autovalore di modulo massimo}$$

> 💡 **Mnemonico**: la norma **1** è quella con "1 colonna alla volta"; la norma **∞** guarda le righe. Se le confondi, ricorda che $\|A\|_1 = \|A^T\|_\infty$.

---

## 3. Richiami: simmetria, autovalori, definita positiva

- $A\in M(n\times n)$ è **simmetrica** se $A^T=A$
- $\lambda\in\mathbb{C}$ è **autovalore** di $A$ se esiste $x\neq0$ con $Ax=\lambda x$, equivalentemente $\det(A-\lambda I)=0$
- $A$ è **semidefinita positiva** se $x^TAx \ge 0\;\;\forall x\neq0$
- $A$ è **definita positiva** se $\;x^TAx > 0\;\;\forall x\neq0$

In particolare:

| $A$ | Autovalori |
|---|---|
| simmetrica e **semidefinita** positiva | reali e **non negativi** |
| simmetrica e **definita** positiva | reali e **positivi** |

### $A^TA$ è simmetrica e semidefinita positiva — sempre

*Simmetrica*: $(A^TA)^T = A^TA$.
*Semidefinita positiva*: $x^TA^TAx = (Ax)^T(Ax) = y^Ty = \sum_i y_i^2 \ge 0$.

Quindi $\rho(A^TA)$ è il massimo autovalore di $A^TA$ ed è **sempre non negativo**: la radice in $\|A\|_2=\sqrt{\rho(A^TA)}$ è sempre ben definita.

> 📌 **Se $A$ è simmetrica, allora $\|A\|_1 = \|A\|_\infty$.** (Ovvio: somme per righe e per colonne coincidono.) Utile per risparmiare conti.

### Equivalenza per le matrici

> **Teorema.** Per ogni coppia di norme matriciali $\|A\|$, $\|A\|_*$ esistono $m,M>0$ con $m\|A\|_*\le\|A\|\le M\|A\|_*$.

$$\frac{1}{\sqrt n}\|A\|_\infty \le \|A\|_2 \le \sqrt n\,\|A\|_\infty \qquad\qquad \frac{1}{\sqrt n}\|A\|_1 \le \|A\|_2 \le \sqrt n\,\|A\|_1$$

**A cosa servono in pratica**: calcolare $\|A\|_2$ richiede gli autovalori di $A^TA$ ed è costoso; $\|A\|_1$ e $\|A\|_\infty$ si leggono direttamente dalla matrice. Se basta una **stima** di $\|A\|_2$, si usano queste disuguaglianze.

---

## 4. Esempio completo

$$A=\begin{bmatrix} 4 & -1 & 6\\ 2 & 3 & -3\\ 1 & -2 & 9/2\end{bmatrix}$$

**Norma $\infty$** (somme per righe):
$$\|A\|_\infty = \max\{4+1+6,\;2+3+3,\;1+2+\tfrac92\} = \max\{11,\,8,\,\tfrac{15}{2}\} = \mathbf{11}$$

**Norma 1** (somme per colonne):
$$\|A\|_1 = \max\{4+2+1,\;1+3+2,\;6+3+\tfrac92\} = \max\{7,\,6,\,\tfrac{27}{2}\} = \tfrac{27}{2} = \mathbf{13.5}$$

**Norma 2**:
$$M = A^TA = \begin{bmatrix} 21 & 0 & 45/2\\ 0 & 14 & -24\\ 45/2 & -24 & 261/4\end{bmatrix}$$

$$\det(M-\lambda I) = -\lambda^3+\tfrac{401}{4}\lambda^2-\tfrac{2991}{2}\lambda = -\tfrac14\lambda\left(4\lambda^2-401\lambda+5982\right)$$

$$\lambda = 0,\qquad \lambda_1=\frac{401+\sqrt{65089}}{8}\approx82.0157,\qquad \lambda_2=\frac{401-\sqrt{65089}}{8}\approx18.2343$$

$$\rho(M)=82.0157 \qquad\Longrightarrow\qquad \|A\|_2=\sqrt{\rho(A^TA)}=\sqrt{82.0157}\approx\mathbf{9.0563}$$

Nota che $\|A\|_\infty = 11$ e $\|A\|_1=13.5$ si ottengono a occhio, mentre $\|A\|_2$ richiede il polinomio caratteristico di una $3\times3$: ecco perché in laboratorio si usa `np.linalg.norm(A, 2)` e a mano si preferiscono le altre.

---

## 5. Da ricordare

| | |
|---|---|
| Proprietà norma vettoriale | positività · omogeneità · triangolare |
| Proprietà norma matriciale | le 3 precedenti **+ submoltiplicatività** $\Vert AB\Vert \le\Vert A\Vert \Vert B\Vert $ |
| $\Vert x\Vert_2$ | $\sqrt{x^Tx}$ |
| Catena vettoriale | $\Vert x\Vert_\infty \le \Vert x\Vert_2 \le \Vert x\Vert_1$ |
| $\Vert A\Vert_1$ | max somma dei moduli **per colonne** |
| $\Vert A\Vert_\infty$ | max somma dei moduli **per righe** |
| $\Vert A\Vert_2$ | $\sqrt{\rho(A^TA)}$ |
| Norma indotta | $\Vert A\Vert =\sup_{x\ne0}\Vert Ax\Vert /\Vert x\Vert $ |
| $A$ ortogonale | $\Vert Ax\Vert_2=\Vert x\Vert_2$ → **base della stabilità di QR** |
| $A^TA$ | sempre simmetrica e semidefinita positiva |
| $A$ simmetrica | $\Vert A\Vert_1=\Vert A\Vert_\infty$ |
