 # Metodi iterativi per sistemi lineari — teoria completa

> **Blocco C · giorni 1-2 di 6 — giovedi 27 agosto ([[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#1. Perché esistono i metodi iterativi|§1-9]]) e venerdi 28 ([[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#13. Rilassamento e metodo SOR   *· slide §1.7*|§13-14]], poi i 31 buchi)**
> Fonte: `Sistemi Lineari_Metodi_Numerici_Iterativi.pdf`, **capitoli 1.1 - 1.8 nell'ordine delle slide**
> Laboratorio collegato: **Esercitazione 9 (28/4)** · Buchi da riempire **venerdi 28**: `jacobi` (11), `gauss_seidel` (10), `gauss_seidel_sor` (10) = **31 su 116**
> 🎯 Il **[[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#10. 🎯🎯 Il drill: la stessa domanda, due teoremi diversi   *· slide §1.5*|§10]]** e' il drill piu' redditizio del blocco: la domanda *"verificare senza calcolare il raggio spettrale che Gauss-Seidel converge"* e' caduta in **2 prove su 8**, con matrici che richiedono **teoremi diversi**.

> 📌 **Nota**: questo documento nasce dalla fusione delle vecchie note 14 e 15, riordinate secondo la successione delle slide. Nessun contenuto e' stato tolto.

| Slide | Argomento | Sezione |
|---|---|---|
| **1.1** | splitting $A=M-N$, $T=M^{-1}N$ | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#2. ⭐ Lo splitting: l'idea che genera tutti i metodi   *· slide §1.1*|§2]] |
| **1.2** | $A=D+E+F$, Jacobi, Gauss-Seidel | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#3. La decomposizione $A = D + E + F$   *· slide §1.2*|§3–5]] |
| **1.3** | definizione di convergenza, il limite e' la soluzione | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#6. Le due domande da porsi   *· slide §1.3*|§6]] |
| **1.4** | $e^{(k)}=T^ke^{(0)}$, $\rho(T)<1$, velocita' | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#7. ⭐ Errore, residuo, e la relazione che li lega   *· slide §1.4*|§7–8]] |
| **1.5** | condizioni sufficienti: norma, dominanza, SDP | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#9. 🎯 Le condizioni sufficienti — il drill dell'esame   *· slide §1.5*|§9]] · [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#10. 🎯🎯 Il drill: la stessa domanda, due teoremi diversi   *· slide §1.5*|§10]] (drill) · [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#11. Sufficiente ≠ necessario: il Laboratorio 28/4|§11]] |
| **1.6** | condizionamento e velocita' di convergenza | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#12. Condizionamento e convergenza — l'esempio delle slide   *· slide §1.6*|§12]] |
| **1.7** | rilassamento, SOR, $\omega_{ott}$ | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#13. Rilassamento e metodo SOR   *· slide §1.7*|§13]] |
| **1.8** | criterio d'arresto | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#14. Criterio d'arresto   *· slide §1.8*|§14]] |

---

## 1. Perché esistono i metodi iterativi

| | Diretti (Blocco B) | Iterativi (questo blocco) |
|---|---|---|
| Cosa fanno di $A$ | la **fattorizzano**, quindi la modificano | la **decompongono**, non la toccano |
| Costo | $O(n^3)$, una volta sola | $O(kn^2)$, con $k$ = numero di iterazioni |
| Risultato in aritmetica esatta | soluzione esatta in un numero **finito** di passi | soluzione esatta come **limite** |
| Matrici adatte | dense, dimensioni moderate | **grandi e sparse** |

Il vantaggio decisivo è la **sparsità**. Applicando l'eliminazione di Gauss a una matrice sparsa si verifica il **fill-in**: compaiono elementi non nulli in posizioni che erano nulle, e la matrice fattorizzata occupa molta più memoria dell'originale. I metodi iterativi non hanno questo problema, perché operano solo con prodotti matrice-vettore e non alterano la struttura di sparsità.

> 📌 Confronto di costo da citare: se $k \ll n$, allora $kn^2 \ll n^3$. Per una matrice $10^6\times10^6$ sparsa, un metodo diretto è impraticabile e uno iterativo no.

---

---

## 2. ⭐ Lo splitting: l'idea che genera tutti i metodi   *· slide §1.1*

Si scrive $A$ come differenza di due matrici

$$A = M - N, \qquad \det M \ne 0$$

L'unica richiesta su $M$ è che sia **facilmente invertibile**. Sostituendo:

$$Ax=b \;\Longrightarrow\; (M-N)x=b \;\Longrightarrow\; Mx = Nx+b \;\Longrightarrow\; x = M^{-1}Nx + M^{-1}b$$

L'ultima è un'equazione di **punto fisso**, e come tale suggerisce l'iterazione

$$\boxed{x^{(k)} = T\,x^{(k-1)} + q}, \qquad T = M^{-1}N, \quad q = M^{-1}b$$

$T$ si chiama **matrice di iterazione** ed è l'oggetto che governa tutto: convergenza, velocità, tutto dipende da $T$ e non da $A$ direttamente.

I metodi di questa forma si dicono **stazionari** perché $T$ e $q$ non dipendono da $k$.

> ⚠️ Attenzione ai segni: $A = M - N$ significa $N = M - A$. Con $A = D+E+F$ e $M=D$ si ha $N = D - (D+E+F) = -(E+F)$. Il segno meno è quello che nel codice compare come `N = -(E+F)`.

---

---

## 3. La decomposizione $A = D + E + F$   *· slide §1.2*

Tutti i metodi di questo blocco partono dalla stessa scomposizione:

- $D$ = la **diagonale** di $A$
- $E$ = la parte **strettamente triangolare inferiore** (sotto la diagonale)
- $F$ = la parte **strettamente triangolare superiore** (sopra la diagonale)

![[splitting_M_N.png]]

Ipotesi comune a tutti: $a_{ii} \ne 0$ per ogni $i$, altrimenti $D$ non è invertibile.

> **Cosa fare se un elemento diagonale è nullo.** Se $A$ è non singolare si possono **riordinare equazioni e incognite** per portare elementi non nulli sulla diagonale. Esempio delle slide:
> $$A=\begin{bmatrix}2&1&3\\3&0&2\\6&0&0\end{bmatrix} \;\longrightarrow\; \text{scambiando le colonne} \;\longrightarrow\; \begin{bmatrix}1&3&2\\0&2&3\\0&0&6\end{bmatrix}, \quad x = \begin{bmatrix}x_2\\x_3\\x_1\end{bmatrix}$$
> Scambiando **colonne** si riordinano le **incognite**, quindi il vettore soluzione va riletto nell'ordine giusto.

### Nel codice

```python
d = np.diag(A)        # vettore 1D con la diagonale
D = np.diag(d)        # matrice diagonale costruita da quel vettore
E = np.tril(A, -1)    # -1 = sotto la diagonale, ESCLUSA
F = np.triu(A,  1)    #  1 = sopra la diagonale, ESCLUSA
```

> ⚠️ `np.diag` fa due cose opposte a seconda dell'input: se riceve una **matrice** ne estrae la diagonale come vettore; se riceve un **vettore** costruisce la matrice diagonale. Ecco perché servono entrambe le righe.
> ⚠️ Gli offset $-1$ e $+1$ sono obbligatori: `np.tril(A)` includerebbe la diagonale e avresti $D$ contata due volte.

---

---

## 4. Metodo di Jacobi   *· slide §1.2*

$$M = D, \qquad N = -(E+F), \qquad \boxed{T_J = -D^{-1}(E+F)}$$

**Forma matriciale** (quella da implementare):

$$x^{(k)} = D^{-1}\left(b - (E+F)\,x^{(k-1)}\right)$$

**Forma per componenti** (quella da scrivere all'orale):

$$x_i^{(k)} = \frac{b_i - \sum_{j\ne i} a_{ij}\,x_j^{(k-1)}}{a_{ii}}, \qquad i=1,\dots,n$$

**L'osservazione che conta**: ogni componente di $x^{(k)}$ dipende **esclusivamente** dall'iterato precedente $x^{(k-1)}$. Le $n$ componenti si possono calcolare in qualsiasi ordine, o tutte insieme: il metodo è **naturalmente parallelizzabile**. Per questo si chiama anche *metodo degli spostamenti simultanei*.

```python
def jacobi(A, b, x0, toll, it_max):
    errore = 1 + toll
    d = np.diag(A); D = np.diag(d)
    n = A.shape[0]
    E = np.tril(A, -1); F = np.triu(A, 1)
    M = D
    N = -(E + F)
    T = np.dot(np.linalg.inv(M), N)
    autovalori = np.linalg.eigvals(T)
    raggiospettrale = np.max(np.abs(autovalori))
    print("raggio spettrale jacobi", raggiospettrale)
    it = 0
    er_vet = []
    while it <= it_max and errore >= toll:
        x = (b + N @ x0) / d.reshape(n, 1)      # divisione componente per componente
        errore = np.linalg.norm(x - x0) / np.linalg.norm(x)
        er_vet.append(errore)
        x0 = x.copy()
        it = it + 1
    return x, it, er_vet
```

> ⚠️ **`d.reshape(n,1)`**: `b` e `x0` sono colonne $(n,1)$, mentre `d` è un array 1D di forma $(n,)$. Senza il reshape numpy fa broadcasting per righe e ottieni una matrice $n\times n$ invece di un vettore, senza dare errore.
> ⚠️ **`x0 = x.copy()`**: senza `.copy()` le due variabili puntano allo stesso array, l'errore risulta sempre 0 e il ciclo si ferma alla prima iterazione.

---

---

## 5. Metodo di Gauss-Seidel   *· slide §1.2*

$$M = D+E, \qquad N = -F, \qquad \boxed{T_G = -(D+E)^{-1}F}$$

**Forma matriciale**: da $Mx^{(k)} = Nx^{(k-1)}+b$ si ottiene

$$(D+E)\,x^{(k)} = b - F\,x^{(k-1)}$$

che è un **sistema triangolare inferiore** da risolvere a ogni iterazione — con `Lsolve`, la funzione del Blocco B. Questo è il collegamento fra i due blocchi: Gauss-Seidel *usa* i metodi diretti come mattone.

**Forma per componenti**:

$$x_i^{(k)} = \frac{b_i - \sum_{j=1}^{i-1} a_{ij}\,x_j^{\color{red}{(k)}} - \sum_{j=i+1}^{n} a_{ij}\,x_j^{(k-1)}}{a_{ii}}$$

**La differenza con Jacobi è tutta nell'apice rosso**: per calcolare la componente $i$-esima, Gauss-Seidel usa le componenti **già aggiornate** dello stesso iterato $x^{(k)}$ (quelle con $j<i$), invece di quelle vecchie. Intuitivamente: appena hai un'informazione migliore, la usi subito.

Conseguenza: le componenti vanno calcolate **in ordine**, $1,2,\dots,n$. Il metodo introduce una dipendenza sequenziale e **non è parallelizzabile**. Si chiama anche *metodo degli spostamenti successivi*.

```python
def gauss_seidel(A, b, x0, toll, it_max):
    errore = 1 + toll
    d = np.diag(A); D = np.diag(d)
    E = np.tril(A, -1); F = np.triu(A, 1)
    M = D + E
    N = -F
    T = np.linalg.inv(M) @ N
    raggiospettrale = np.max(np.abs(np.linalg.eigvals(T)))
    print("raggio spettrale Gauss-Seidel ", raggiospettrale)
    it = 0
    er_vet = []
    while it <= it_max and errore >= toll:
        x, flag = Lsolve(M, b - F @ x0)          # risolve (D+E)x = b - F x0
        errore = np.linalg.norm(x - x0) / np.linalg.norm(x)
        er_vet.append(errore)
        x0 = x.copy()
        it = it + 1
    return x, it, er_vet
```

> ⚠️ `Lsolve` va importata: `from SolveTriangular import *`. Lo scheletro d'esame importa solo `numpy`.
> ⚠️ Il calcolo esplicito di `np.linalg.inv(M)` serve **solo** per stampare il raggio spettrale a scopo didattico. Nell'iterazione non si inverte mai: si risolve il sistema triangolare.

---

---

## 6. Le due domande da porsi   *· slide §1.3*

Dato un metodo iterativo $x^{(k)} = Tx^{(k-1)}+q$:

1. la successione $\{x^{(k)}\}$ **converge**?
2. se converge, il limite è **la soluzione** di $Ax=b$?

La seconda ha risposta affermativa e la dimostrazione è breve — vale la pena saperla, perché è un classico da orale.

> **Teorema.** Se $Ax=b$ ammette un'unica soluzione $x$ e il processo iterativo converge a un vettore $y$, allora $y=x$.
>
> *Dimostrazione.* Da $Mx^{(k)} = Nx^{(k-1)}+b$, passando al limite per $k\to\infty$ e sfruttando $x^{(k)}\to y$:
> $$My = Ny + b \;\Longrightarrow\; (M-N)y = b \;\Longrightarrow\; Ay=b$$
> Poiché la soluzione è unica, $y=x$. $\blacksquare$

La prima domanda è quella vera, e si risponde studiando **la propagazione dell'errore**.

---

---

## 7. ⭐ Errore, residuo, e la relazione che li lega   *· slide §1.4*

Al passo $k$ si definiscono

$$e^{(k)} = x^{(k)} - x \qquad\text{(errore)}, \qquad r^{(k)} = Ax^{(k)} - b \qquad\text{(residuo)}$$

e valgono legati da

$$r^{(k)} = Ax^{(k)} - b = Ax^{(k)} - Ax = A\left(x^{(k)}-x\right) = A\,e^{(k)}$$

> 📌 **Questa relazione è più importante di quanto sembri.** Il residuo è calcolabile (conosci $A$, $b$, $x^{(k)}$), l'errore no (non conosci $x$). La formula dice che residuo piccolo **non** implica errore piccolo: se $A$ è mal condizionata, $e^{(k)} = A^{-1}r^{(k)}$ può essere enorme anche con $r^{(k)}$ minuscolo. È la stessa lezione del condizionamento del Blocco B, vista dal lato iterativo.

### La legge di propagazione

Sottraendo $Mx = Nx+b$ da $Mx^{(k)} = Nx^{(k-1)}+b$:

$$M e^{(k)} = N e^{(k-1)} \;\Longrightarrow\; e^{(k)} = M^{-1}N e^{(k-1)} = T e^{(k-1)}$$

e iterando all'indietro:

$$\boxed{e^{(k)} = T^{k}\,e^{(0)}}$$

**L'errore iniziale viene moltiplicato per $T$ a ogni passo.** Convergere per ogni scelta di $x^{(0)}$ significa quindi $T^k e^{(0)} \to 0$ per ogni $e^{(0)}$, cioè

$$\lim_{k\to\infty} T^k = 0$$

---

---

## 8. ⭐⭐ Il teorema fondamentale   *· slide §1.4*

> 📐 Perche' la condizione sulla norma e' **sufficiente ma non necessaria**, e cosa si puo' (e non si puo') concludere quando $\|T\|\ge1$: [[00d Le maggiorazioni - come si leggono#4. Il caso in cui si vede tutto|00d · Le maggiorazioni]].

> **Teorema (condizione necessaria e sufficiente).** Sia $A=M-N$ con $\det A\ne0$ e $T=M^{-1}N$. Il metodo iterativo $x^{(k)}=Tx^{(k-1)}+q$ converge alla soluzione di $Ax=b$ **per ogni scelta** di $x^{(0)}$ **se e solo se**
> $$\rho(T) < 1$$
> dove $\rho(T) = \max_i |\lambda_i(T)|$ è il **raggio spettrale** di $T$.

Questo è il teorema da citare per primo in qualunque esercizio sui metodi iterativi. Due precisazioni che l'esame apprezza:

- è **necessaria e sufficiente**: non c'è niente di più forte da dire;
- la condizione riguarda $T$, non $A$. Matrici $A$ perfettamente rispettabili possono dare $\rho(T)>1$, e viceversa.

### Velocità di convergenza

Da $e^{(k)}=T^ke^{(0)}$ si ottiene la maggiorazione $\|e^{(k)}\| \le \|T\|^k\|e^{(0)}\|$, che garantisce la convergenza se $\|T\|<1$ ma non descrive bene la velocità. Il comportamento **asintotico** vero è

$$\|e^{(k)}\| \approx C\,\rho(T)^k \qquad\Longrightarrow\qquad \frac{\|e^{(k+1)}\|}{\|e^{(k)}\|} \approx \rho(T)$$

Quindi la convergenza è **lineare**, con fattore $\rho(T)$: a ogni iterazione l'errore si riduce all'incirca di quel fattore.

- $\rho(T)$ piccolo → convergenza veloce
- $\rho(T)$ vicino a 1 → convergenza lenta

### Perché il grafico dell'errore è una retta

Questo passaggio è nelle slide e vale punti, perché spiega *cosa guardare* nel grafico che l'esame chiede di produrre:

$$\|e^{(k)}\| \approx C\rho(T)^k \;\Longrightarrow\; \log\|e^{(k)}\| \approx \log C + k\log\rho(T)$$

Il logaritmo trasforma l'esponenziale in una **retta** di pendenza $\log\rho(T)$, negativa perché $\rho(T)<1$.

![[raggio_spettrale_pendenza.png]]

La curva verde è l'errore effettivo di Gauss-Seidel sulla matrice $\begin{bmatrix}9&1&16\\1&11&1\\16&1&29\end{bmatrix}$; la tratteggiata è la retta teorica $C\rho^k$ con $\rho=0.98283$. Combaciano. Ecco perché nel laboratorio si usa `plt.semilogy` e non `plt.plot`: in scala lineare vedresti una curva che precipita e poi si appiattisce, senza poter leggere nessuna pendenza.

> **Cosa dire all'esame guardando il grafico**: *"l'andamento rettilineo in scala semilogaritmica conferma la convergenza lineare; la pendenza vale $\log\rho(T)$, quindi il metodo con la retta più ripida è quello con il raggio spettrale più piccolo."*

---

---

## 9. 🎯 Le condizioni sufficienti — il drill dell'esame   *· slide §1.5*

Calcolare $\rho(T)$ richiede gli autovalori di $T$, che costa. E soprattutto: **l'esame chiede esplicitamente di NON farlo.** Servono quindi condizioni verificabili a occhio.

### Teorema A — la norma

> Se esiste **una** norma matriciale con $\|T\|<1$, allora il metodo converge per ogni $x^{(0)}$.

*Dimostrazione*: sia $\lambda$ autovalore di $T$ con autovettore $x\ne0$, $Tx=\lambda x$. Con una norma compatibile:
$$\|Tx\| = |\lambda|\,\|x\| \le \|T\|\,\|x\| \;\Longrightarrow\; |\lambda| \le \|T\| < 1$$
Vale per ogni autovalore, quindi anche per quello di modulo massimo: $\rho(T)<1$. $\blacksquare$

> ⚠️ È **solo sufficiente**: $\rho(T)\le\|T\|$ sempre, ma può accadere $\rho(T)<1\le\|T\|$. Se la norma non è minore di 1 non puoi concludere niente.

### Teorema B — dominanza diagonale stretta

> Se $A$ è a **diagonale strettamente dominante per righe**, cioè
> $$|a_{ii}| > \sum_{j\ne i} |a_{ij}| \qquad \text{per ogni } i=1,\dots,n$$
> allora **sia Jacobi sia Gauss-Seidel convergono**, e vale $\|T_G\|_\infty \le \|T_J\|_\infty < 1$.

### Teorema C — simmetrica definita positiva

> Se $A$ è **simmetrica e definita positiva**, allora **Gauss-Seidel converge** per ogni $x^{(0)}$.
> Per **Jacobi la convergenza NON è garantita** dalle sole ipotesi di simmetria e definita positività: servono condizioni più restrittive, come la dominanza diagonale.

> ⚠️ **L'asimmetria fra i due metodi in questo teorema è la cosa da ricordare.** Simmetria + definita positività bastano per Gauss-Seidel, non per Jacobi. È esattamente il caso della matrice 5 del laboratorio.

---

---

## 10. 🎯🎯 Il drill: la stessa domanda, due teoremi diversi   *· slide §1.5*

Il testo è **identico** nelle due prove:

> *"Verificare senza calcolare il raggio spettrale della matrice di iterazione che il metodo di Gauss-Seidel converge, richiamando il teorema che garantisce la convergenza di Gauss-Seidel per classi particolari di matrici"* — **punti [1]**

Ma le matrici sono costruite per richiedere **teoremi diversi**. Verificato numericamente:

### Caso 1 — esame del 10 gennaio 2025

$$A_3=\begin{bmatrix}8&0&1\\0&12&2\\1&2&-14\end{bmatrix}, \qquad b_3=\begin{bmatrix}9\\14\\-11\end{bmatrix}$$

| verifica | esito |
|---|---|
| simmetrica | ✅ sì |
| definita positiva | ❌ **NO** — autovalori $\{-14.20,\;8.04,\;12.15\}$, ce n'è uno negativo |
| diagonale strettamente dominante | ✅ **SÌ**: $8>0+1$, $12>0+2$, $14>1+2$ |

→ **Teorema B (dominanza diagonale stretta).** Il Teorema C non si può usare: la matrice è simmetrica ma **indefinita**. Chi risponde "è simmetrica definita positiva" perché vede la simmetria prende zero.

*(controprova: $\rho(T_G)=0.033$, converge in pochissime iterazioni)*

### Caso 2 — esame del 4 luglio 2024, Turno II

$$A_3=\begin{bmatrix}8&0&1&1\\0&0.8&1&0\\1&1&2&0\\1&0&0&2\end{bmatrix}, \qquad b_3=\begin{bmatrix}10\\1.8\\4\\3\end{bmatrix}$$

| verifica | esito |
|---|---|
| simmetrica | ✅ sì |
| diagonale strettamente dominante | ❌ **NO** — riga 2: $0.8 < 1$; riga 3: $2 < 1+1$ |
| definita positiva | ✅ **SÌ** — autovalori $\{0.199,\;1.813,\;2.469,\;8.320\}$, tutti positivi |

→ **Teorema C (simmetrica definita positiva).**

*(controprova: $\rho(T_G)=0.694$, converge)*

### La procedura in 60 secondi

```python
# 1. simmetrica?
print(np.allclose(A, A.T))

# 2. diagonale strettamente dominante per righe?
n = A.shape[0]
print(all(abs(A[i,i]) > sum(abs(A[i,j]) for j in range(n) if j != i) for i in range(n)))

# 3. definita positiva? (solo se simmetrica)
print(np.linalg.eigvalsh(A))              # tutti > 0 ?
# oppure, più robusto:
try:
    np.linalg.cholesky(A); print("definita positiva")
except np.linalg.LinAlgError:
    print("non definita positiva")
```

**L'ordine in cui verificare**: prima la dominanza diagonale, che è immediata e copre *entrambi* i metodi; se fallisce, prova simmetria + definita positiva, che copre **solo Gauss-Seidel**.

> ⚠️ Nota che i due teoremi sono **indipendenti**: nessuno implica l'altro. Il caso 1 è dominante ma non definito positivo, il caso 2 è definito positivo ma non dominante. Ecco perché servono entrambi.
>
> ⚠️ La verifica va **scritta**: il punto assegnato è per la giustificazione teorica, non per il codice. Una cella markdown con "la matrice è simmetrica con autovalori tutti positivi, quindi definita positiva; per il teorema di convergenza di Gauss-Seidel per matrici simmetriche definite positive il metodo converge per ogni scelta di $x^{(0)}$" vale il punto intero.

---

---

## 11. Sufficiente ≠ necessario: il Laboratorio 28/4

L'Esercizio 1 del laboratorio testa Jacobi e Gauss-Seidel su cinque matrici, con $b$ tale che la soluzione esatta sia $[1,1,\dots,1]^T$ e $x^{(0)}=0$.

![[jacobi_vs_gs_convergenza.png]]

| # | $\rho(T_J)$ | $\rho(T_G)$ | $K(A)$ | Cosa succede |
|---|---|---|---|---|
| 1 | 0.384 | **0.076** | 4.3 | entrambi convergono, GS molto più veloce |
| 2 | **1.375** | 0.125 | 10.6 | **Jacobi diverge, Gauss-Seidel converge** |
| 3 | **2.524** | **4.676** | 12.9 | divergono entrambi |
| 4 | 0.529 | **0.129** | 3.9 | entrambi convergono, GS più veloce |
| 5 | **1.003** | 0.983 | 321.5 | Jacobi diverge, GS converge lentissimo |

Le conclusioni da saper enunciare:

1. **La dominanza diagonale è sufficiente ma non necessaria.** La matrice 2 non è dominante e Gauss-Seidel converge comunque. Dalla non-dominanza non si deduce nulla.
2. **Gauss-Seidel non è sempre migliore di Jacobi.** Nella matrice 3 ha addirittura raggio spettrale peggiore ($4.68$ contro $2.52$). Non esiste un ordinamento universale: il confronto va fatto caso per caso su $\rho$.
3. **Il condizionamento influisce.** La matrice 5 ha $K(A)=321$ e $\rho(T_G)=0.983$: converge, ma servono centinaia di iterazioni. Convergenza teorica ≠ efficienza pratica.

---

---

## 12. Condizionamento e convergenza — l'esempio delle slide   *· slide §1.6*

$$A=\begin{bmatrix}0.96326 & 0.81321\\ 0.81321 & 0.68685\end{bmatrix}, \qquad b=\begin{bmatrix}0.88824\\0.74988\end{bmatrix}, \qquad K(A) = 8936$$

La matrice è **simmetrica definita positiva**, quindi per il Teorema C Gauss-Seidel converge. Ma $\rho(T_{GS}) = 0.99954$, e la tabella delle slide è impietosa:

| $k$ | $\Vert x^{(k)}-x^*\Vert $ |
|---|---|
| 0 | 0.687662 |
| 10 | 0.684503 |
| 100 | 0.656711 |
| 1 000 | 0.433878 |
| 10 000 | 0.006875 |

**Diecimila iterazioni per due cifre corrette.** È l'Esercizio 2 del laboratorio, dove infatti si chiede `it_max=30000`.

> 📌 **La frase da portare all'orale**: *un cattivo condizionamento di $A$ si trasferisce sulla matrice di iterazione $T$, che risulta avere raggio spettrale vicino a 1 (convergenza lentissima) o maggiore di 1 (mancata convergenza). La convergenza teorica non garantisce l'efficienza pratica.*

Su questa stessa matrice, applicando SOR con un $\omega$ opportuno il raggio spettrale si riduce e la convergenza diventa accettabile: è la motivazione dei metodi di rilassamento.

---

---

## 13. Rilassamento e metodo SOR   *· slide §1.7*

### Da dove nasce

L'idea è: la velocità dipende da $\rho(T)$, quindi introduciamo un parametro che permetta di **ridurre** $\rho(T)$.

Chiamiamo $\tilde{x}^{(k)}$ l'iterato che darebbe Gauss-Seidel. Si può scrivere

$$\tilde{x}^{(k)} = x^{(k-1)} + r^{(k)}, \qquad r^{(k)} = \tilde{x}^{(k)} - x^{(k-1)}$$

dove $r^{(k)}$ è la **correzione**: di quanto Gauss-Seidel sposta l'iterato. Il metodo di rilassamento si muove nella **stessa direzione**, ma scala lo spostamento:

$$x^{(k)} = x^{(k-1)} + \omega\, r^{(k)} \qquad\Longleftrightarrow\qquad \boxed{x^{(k)} = (1-\omega)\,x^{(k-1)} + \omega\,\tilde{x}^{(k)}}$$

La seconda forma è una **media pesata** fra il vecchio iterato e quello di Gauss-Seidel, ed è quella da implementare.

| $\omega$ | nome | effetto |
|---|---|---|
| $\omega = 1$ | — | **è esattamente Gauss-Seidel** |
| $0<\omega<1$ | under-relaxation | smorza la correzione; può far convergere metodi che divergono |
| $\omega>1$ | over-relaxation (**SOR**) | amplifica la correzione; accelera metodi lenti |

Matrice di iterazione:

$$T_\omega = (D+\omega E)^{-1}\left[(1-\omega)D - \omega F\right]$$

### I due teoremi su SOR

> **Teorema (convergenza di SOR).** Se $A$ è **simmetrica definita positiva**, allora SOR converge per ogni $\omega$ con
> $$0 < \omega < 2$$

> **Teorema (parametro ottimo).** Se $A$ è simmetrica definita positiva **e** il metodo di Jacobi converge (per esempio perché $A$ è a diagonale strettamente dominante), allora
> $$\omega_{\text{ott}} = \frac{2}{1+\sqrt{1-\rho(T_J)^2}}$$

![[sor_omega_ottimo.png]]

Il grafico è su una matrice di Poisson $4\times4$. Si legge tutto: la curva $\rho(T_\omega)$ resta sotto 1 nell'intervallo $(0,2)$ come promette il teorema, ha un **minimo netto**, e la formula del parametro ottimo lo centra ($\omega_{\text{ott}}=1.0718$, minimo sperimentale $1.070$). Il guadagno è concreto: $\rho$ passa da $0.277$ con Gauss-Seidel a $0.173$ con SOR ottimo.

> ⚠️ Nota che $\omega_{\text{ott}}$ richiede $\rho(T_J)$, cioè proprio il calcolo che si voleva evitare. Per questo **in pratica si va per tentativi**: si prova una griglia di $\omega$ e si tiene il migliore. Le slide lo dicono esplicitamente ("il calcolo di $\omega_{ott}$ è un problema molto laborioso").

```python
def gauss_seidel_sor(A, b, x0, toll, it_max, omega):
    errore = 1 + toll
    d = np.diag(A); D = np.diag(d)
    E = np.tril(A, -1); F = np.triu(A, 1)
    Momega = D + omega * E
    Nomega = (1 - omega) * D - omega * F
    T = np.dot(np.linalg.inv(Momega), Nomega)
    raggiospettrale = np.max(np.abs(np.linalg.eigvals(T)))
    M = D + E
    N = -F
    it = 0; er_vet = []; x = x0
    while it <= it_max and errore >= toll:
        xtilde, flag = Lsolve(M, b - F @ x0)          # il passo di Gauss-Seidel
        x = (1 - omega) * x0 + omega * xtilde          # la media pesata
        errore = np.linalg.norm(x - x0) / np.linalg.norm(x)
        er_vet.append(errore)
        x0 = x.copy()
        it = it + 1
    return x, it, er_vet
```

> ⚠️ **Il trabocchetto**: la matrice $M_\omega = D+\omega E$ serve **solo** per calcolare $T_\omega$ e il raggio spettrale. Nell'iterazione il sistema triangolare da risolvere è quello di Gauss-Seidel, con $M = D+E$ **senza** $\omega$. Se usi $M_\omega$ dentro `Lsolve` il metodo non converge alla soluzione giusta.

---

---

## 14. Criterio d'arresto   *· slide §1.8*

Le slide danno due criteri:

$$\|x^{(k)} - x^{(k-1)}\| \le \varepsilon \qquad \text{(assoluto)}$$

$$\frac{\|x^{(k)} - x^{(k-1)}\|}{\|x^{(k)}\|} \le \varepsilon \qquad \text{(relativo, se } x^{(k)}\ne 0\text{)}$$

Nei laboratori si usa sempre il **relativo**, che è adimensionale e non dipende dalla scala del problema. La tolleranza si sceglie in base alla **percentuale d'errore da cui sono affetti i dati iniziali**: non ha senso chiedere $10^{-12}$ se i dati sono noti al 1%.

Le norme usate abitualmente sono la $\infty$ e la 2.

> ⚠️ Il ciclo si arresta **anche** per numero massimo di iterazioni. Nel codice le due condizioni sono in `and`:
> ```python
> while it <= it_max and errore >= toll:
> ```
> Dopo il ciclo dovresti sempre chiederti *quale* delle due condizioni ha fermato il metodo: se è `it_max`, il risultato non ha raggiunto la tolleranza e non va usato.

---

---

## 15. Riepilogo delle tre matrici di iterazione

| Metodo | $M$ | $N$ | $T$ | Aggiornamento |
|---|---|---|---|---|
| **Jacobi** | $D$ | $-(E+F)$ | $-D^{-1}(E+F)$ | divisione componente per componente |
| **Gauss-Seidel** | $D+E$ | $-F$ | $-(D+E)^{-1}F$ | sistema triangolare inferiore (`Lsolve`) |
| **SOR** | $D+\omega E$ | $(1-\omega)D-\omega F$ | $(D+\omega E)^{-1}[(1-\omega)D-\omega F]$ | Gauss-Seidel + media pesata |

Questi tre blocchi valgono **31 dei 116 buchi** dello scheletro. Sono lo stesso schema ripetuto tre volte: se impari a ricostruire $M$, $N$ e $T$ dalla teoria, il codice viene da sé.

---

---

## 16. Checklist per l'esame

- [ ] Ricavare $e^{(k)} = T^k e^{(0)}$ partendo da $Mx^{(k)}=Nx^{(k-1)}+b$
- [ ] Enunciare la condizione **necessaria e sufficiente**: $\rho(T)<1$
- [ ] Spiegare perché il grafico semilogaritmico dell'errore è una **retta di pendenza $\log\rho(T)$**
- [ ] Elencare le tre condizioni sufficienti: norma, dominanza diagonale, simmetrica definita positiva
- [ ] Sapere che il teorema SDP vale per **Gauss-Seidel ma non per Jacobi**
- [ ] Dire quale teorema serve per $\begin{bmatrix}8&0&1\\0&12&2\\1&2&-14\end{bmatrix}$ (dominanza) e quale per $\begin{bmatrix}8&0&1&1\\0&0.8&1&0\\1&1&2&0\\1&0&0&2\end{bmatrix}$ (SDP)
- [ ] Spiegare perché "non dominante" non permette di concludere che il metodo non converge
- [ ] Legare $K(A)$ grande a $\rho(T)$ vicino a 1

---

## 17. Il collegamento con il resto del programma

- **Con il Blocco B**: Gauss-Seidel risolve un sistema triangolare inferiore a ogni iterazione, quindi *usa* `Lsolve`. E la scelta fra diretti e iterativi è la prima riga della tabella decisionale dell'Esercizio 1.
- **Con il Blocco A**: il criterio d'arresto sull'incremento relativo fra iterati successivi è lo stesso dei metodi per zeri di funzione, e ha lo stesso limite (misura quanto ci si muove, non quanto si è lontani dalla soluzione).
- **Con i documenti [[16 Metodi di discesa - dal sistema lineare al problema di minimo|16]] e [[17 Gradiente coniugato e velocita di convergenza|17]]**: i metodi di discesa e il gradiente coniugato risolvono lo stesso problema per via completamente diversa, trasformandolo in un problema di minimo. Il confronto fra le due famiglie e' la tabella decisionale della scheda [[18 Scheda operativa Blocco C|18]].
