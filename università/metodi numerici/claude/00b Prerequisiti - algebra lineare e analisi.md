# Prerequisiti — cosa serve davvero da algebra lineare e analisi

> **Non è un ripasso di algebra lineare.** È l'elenco chiuso dei prerequisiti che *questo corso* usa, ciascuno con **dove serve** e **a che livello**. Molto di ciò che hai studiato ad Algebra Lineare qui non serve: il [[00b Prerequisiti - algebra lineare e analisi#6. Cosa NON ti serve|§6]] dice cosa puoi tranquillamente lasciar perdere.
>
> **Come usarlo**: fai prima l'autotest del [[00b Prerequisiti - algebra lineare e analisi#1. ⚡ Autotest — 15 minuti|§1]] (15 minuti). Poi leggi **solo** i paragrafi corrispondenti alle domande che hai sbagliato. Con 19 giorni all'esame, ripassare tutto sarebbe uno spreco.

---

## 1. ⚡ Autotest — 15 minuti

Rispondi a voce. Segna quelle su cui esiti: sono le uniche che devi ripassare.

**Matrici e struttura**
1. Cosa vuol dire che $A$ è simmetrica? E ortogonale?
2. Come si estrae la diagonale di $A$? Come si costruisce $D+E+F=A$ con $E$ triangolare inferiore stretta e $F$ superiore stretta?
3. Cos'è una sottomatrice principale di testa di ordine $k$?
4. Cos'è la dominanza diagonale stretta per righe?

**Determinante, rango, inversa**
5. Quanto vale il determinante di una matrice triangolare?
6. Quanto vale $\det(AB)$? E $\det(A^T)$? Cosa succede al determinante scambiando due righe?
7. Tre condizioni equivalenti perché $A$ sia non singolare.
8. Cosa significa "$A$ ha rango massimo"?

**Autovalori**
9. Definizione di autovalore e autovettore. Cos'è il polinomio caratteristico?
10. Cos'è il raggio spettrale $\rho(A)$?
11. Quali sono gli autovalori di una matrice triangolare?
12. Se $\lambda$ è autovalore di $A$, qual è il corrispondente autovalore di $A^{-1}$?
13. Cosa sai dire sugli autovalori di una matrice **simmetrica**?

**Definita positiva**
14. Definizione di matrice definita positiva.
15. Due criteri operativi per verificarla.

**Prodotto scalare e ortogonalità**
16. Come si scrive $\|x\|_2$ usando il prodotto scalare?
17. Se $Q$ è ortogonale, quanto vale $\|Qx\|_2$? E $Q^{-1}$?

**Analisi**
18. Enuncia il polinomio di Taylor con resto di Lagrange.
19. Enuncia il teorema degli zeri (Bolzano).
20. Cosa vuol dire $f\in C^2[a,b]$?

---

## 2. Mappa: prerequisito → dove serve → a che livello

Tre livelli: **riconoscere** (guardo la matrice e lo vedo) · **calcolare** (so farlo a mano su $2\times2$/$3\times3$, o in Python) · **enunciare** (mi serve per giustificare a parole).

| Prerequisito | Dove serve nel corso | Livello |
|---|---|---|
| Simmetria $A^T=A$ | Cholesky · Gauss-Seidel (2° teorema) · gradiente e CG · $\Vert A\Vert_1=\Vert A\Vert_\infty$ | riconoscere |
| **Definita positiva** | **Cholesky · gradiente · gradiente coniugato · Gauss-Seidel** | riconoscere + calcolare |
| Splitting $A=D+E+F$ | Jacobi, Gauss-Seidel, SOR | calcolare |
| Dominanza diagonale stretta | convergenza di Jacobi e Gauss-Seidel | riconoscere |
| Sottomatrici principali di testa | Teorema 1 (esistenza e unicità di LU) | riconoscere + calcolare |
| Determinante | non singolarità · $\det A=(-1)^s\prod u_{ii}$ · criterio dell'Hessiana · Sylvester | calcolare |
| Rango, rango massimo | Rouché-Capelli · Teorema 2 · QR · controllo della Jacobiana · SVD-LS | riconoscere |
| Inversa e non singolarità | $K(A)=\Vert A^{-1}\Vert \Vert A\Vert $ · perché *non* si usa per risolvere | enunciare |
| **Autovalori** | $\Vert A\Vert_2=\sqrt{\rho(A^TA)}$ · $K_2$ · **convergenza degli iterativi ($\rho(T)<1$)** · definita positiva · Hessiana | calcolare + enunciare |
| **Raggio spettrale** | criterio di convergenza di Jacobi/GS/SOR | calcolare |
| Ortogonalità $Q^TQ=I$ | QR · $K_2(Q)=1$ · perché QR è più stabile · $\Vert Qx\Vert_2=\Vert x\Vert_2$ | enunciare |
| Prodotto scalare $x^Ty$ | $\Vert x\Vert_2=\sqrt{x^Tx}$ · $\alpha=-\frac{r^Tp}{p^TAp}$ · $A$-coniugatezza | calcolare |
| Forma quadratica $x^TAx$ | definita positiva · $\Phi(x)=\frac12x^TAx-b^Tx$ nei metodi di discesa | enunciare |
| Valori singolari / SVD | SVD-LS · $K_2=\sigma_{\max}/\sigma_{\min}$ | enunciare |
| Matrici di permutazione | LU con pivoting, $PA=LU$ | riconoscere |
| **Taylor con resto** | **Newton · Newton-Raphson · condizionamento · errore di interpolazione** | enunciare + usare |
| Teorema degli zeri | bisezione, regula falsi | enunciare |
| Derivate parziali, gradiente, Jacobiana, Hessiana | tutto il Blocco A-bis | calcolare |
| Convessità | minimo relativo = assoluto | enunciare |
| Logaritmi e scale log | $k\ge\log_2\frac{b-a}{\varepsilon}-1$ · grafici semilog | calcolare |

---

## 3. I ripassi, in ordine di priorità

### 3.1 ⭐ Matrici particolari — riconoscerle a colpo d'occhio

È il prerequisito più redditizio in assoluto, perché il **primo punto di ogni Esercizio 1** è *"individuare il metodo più adatto analizzando le caratteristiche della matrice"*

| Tipo                                          | Definizione                                         | Come lo vedi                                                    |
| --------------------------------------------- | --------------------------------------------------- | --------------------------------------------------------------- |
| **Diagonale**                                 | $a_{ij}=0$ per $i\neq j$                            | tutto zero fuori dalla diagonale                                |
| **Triangolare inferiore** $L$                 | $a_{ij}=0$ per $j>i$                                | zeri sopra la diagonale                                         |
| **Triangolare superiore** $U$                 | $a_{ij}=0$ per $j<i$                                | zeri sotto la diagonale                                         |
| **Simmetrica**                                | $A^T=A$, cioè $a_{ij}=a_{ji}$                       | specchiata rispetto alla diagonale                              |
| **Ortogonale**                                | $Q^TQ=QQ^T=I$, cioè $Q^{-1}=Q^T$                    | colonne ortonormali                                             |
| **Di permutazione**                           | identità con righe scambiate                        | un solo 1 per riga e per colonna                                |
| **A dominanza diagonale stretta** (per righe) | $\Vert a_{ii}\Vert  > \sum_{j\neq i}\Vert a_{ij}\Vert $ $\forall i$ | ogni elemento diagonale batte la somma del resto della sua riga |
| **Sparsa**                                    | quasi tutti zeri                                    | → suggerisce metodi **iterativi**                               |

**Lo splitting $A=D+E+F$**, che serve in Jacobi/GS/SOR:

$$\underbrace{\begin{bmatrix}4&1&2\\3&5&1\\1&2&6\end{bmatrix}}_{A}= \underbrace{\begin{bmatrix}4&0&0\\0&5&0\\0&0&6\end{bmatrix}}_{D}+ \underbrace{\begin{bmatrix}0&0&0\\3&0&0\\1&2&0\end{bmatrix}}_{E}+ \underbrace{\begin{bmatrix}0&1&2\\0&0&1\\0&0&0\end{bmatrix}}_{F}$$

$E$ = parte **sotto** la diagonale (esclusa), $F$ = parte **sopra** (esclusa). In Python: `np.tril(A,-1)` e `np.triu(A,1)`.

> ⚠️ **Dominanza diagonale stretta ⟹ $A$ è non singolare** (teorema di Levy–Desplanques). Verificato: sulla matrice $\begin{bmatrix}8&1&3\\3&5&1\\1&1&17\end{bmatrix}$ la dominanza vale e $\det=616\neq0$.

**Sottomatrice principale di testa** di ordine $k$: le **prime $k$ righe e le prime $k$ colonne**. Per una $3\times3$ sono tre: l'elemento $a_{11}$, il blocco $2\times2$ in alto a sinistra, e $A$ stessa.

---

### 3.2 ⭐ Determinante, rango, invertibilità

**Le proprietà che servono davvero:**

| Proprietà | |
|---|---|
| Triangolare | $\det = \prod_i a_{ii}$ — **è la base del calcolo del determinante via LU** |
| Prodotto | $\det(AB)=\det(A)\det(B)$ |
| Trasposta | $\det(A^T)=\det(A)$ |
| Scambio di due righe | il determinante **cambia segno** — da qui $\det(P)=(-1)^s$ |
| Inversa | $\det(A^{-1})=1/\det(A)$ |

Verificato: su $T=\begin{bmatrix}2&7&1\\0&3&5\\0&0&-4\end{bmatrix}$, $\det T = 2\cdot3\cdot(-4)=-24$ ✓

**Non singolarità** — tre condizioni **equivalenti**:

$$\det(A)\neq0 \quad\iff\quad \exists\,A^{-1} \quad\iff\quad \text{rank}(A)=n$$

**Rango** = numero massimo di righe (o colonne) linearmente indipendenti. "Rango massimo" per una $m\times n$ significa $\text{rank}=\min(m,n)$.

> 💡 **In pratica non calcolerai mai un determinante a mano oltre il $3\times3$.** Serve saperlo *interpretare*: `np.linalg.det` per la non singolarità, `np.linalg.matrix_rank` per il rango (più robusto del determinante in aritmetica finita — è il motivo per cui `newton_raphson` usa `matrix_rank` e non `det == 0`).

---

### 3.3 ⭐⭐ Autovalori e raggio spettrale

**Il prerequisito più usato del corso.** Compare in: norma 2, indice di condizionamento in norma 2, convergenza di *tutti* i metodi iterativi, definita positiva, classificazione dei punti critici.

> $\lambda\in\mathbb{C}$ è **autovalore** di $A$ se esiste $x\neq0$ (l'**autovettore**) con
> $$Ax=\lambda x \qquad\Longleftrightarrow\qquad \det(A-\lambda I)=0$$
> $\det(A-\lambda I)$ è il **polinomio caratteristico**; i suoi zeri sono gli autovalori.

**Raggio spettrale**: $\;\rho(A)=\max_i|\lambda_i|\;$ — l'autovalore di **modulo massimo**.

#### Le proprietà da sapere a memoria

| | Verificato |
|---|---|
| $A$ triangolare (o diagonale) ⟹ **gli autovalori sono gli elementi diagonali** | ✓ |
| $\lambda$ autovalore di $A$ ⟹ $1/\lambda$ autovalore di $A^{-1}$ | ✓ |
| $A$ **simmetrica** ⟹ autovalori **reali** | ✓ |
| $A$ simmetrica **semidefinita** positiva ⟹ autovalori $\ge0$ | ✓ |
| $A$ simmetrica **definita** positiva ⟹ autovalori $>0$ | ✓ |
| $A^TA$ è **sempre** simmetrica e semidefinita positiva | ✓ |

L'ultima è la ragione per cui $\|A\|_2=\sqrt{\rho(A^TA)}$ ha sempre senso: sotto radice c'è un numero non negativo.

#### Come si calcola su una $2\times2$ (l'unico caso che ti chiederanno a mano)

$$A=\begin{bmatrix}a&b\\c&d\end{bmatrix} \qquad \det(A-\lambda I)=\lambda^2-\underbrace{(a+d)}_{\text{traccia}}\lambda+\underbrace{(ad-bc)}_{\det}=0$$

$$\lambda_{1,2}=\frac{(a+d)\pm\sqrt{(a+d)^2-4(ad-bc)}}{2}$$

**In Python**: `np.linalg.eigvals(A)` in generale, `np.linalg.eigvalsh(A)` se $A$ è **simmetrica** (restituisce reali ordinati, senza parti immaginarie spurie).

> 🔑 **Dove ti serve davvero**: la convergenza dei metodi iterativi è $\rho(T)<1$ con $T=M^{-1}N$. Non devi calcolare $T$ a mano — lo fa il codice — ma devi **saper dire cos'è** e perché quella condizione garantisce la convergenza.

---

### 3.4 ⭐⭐ Matrici simmetriche definite positive

Gate di accesso a **Cholesky, gradiente, gradiente coniugato** e al secondo teorema di convergenza di Gauss-Seidel. Cioè: mezzo Esercizio 1.

> $A$ è **definita positiva** se $\;x^TAx>0\;$ per ogni $x\neq0$.
> È **semidefinita positiva** se vale $\ge0$.

La quantità $x^TAx$ si chiama **forma quadratica**: è uno scalare. Per una $2\times2$:

$$x^TAx=\begin{bmatrix}x_1&x_2\end{bmatrix}\begin{bmatrix}a&b\\b&d\end{bmatrix}\begin{bmatrix}x_1\\x_2\end{bmatrix}=a\,x_1^2+2b\,x_1x_2+d\,x_2^2$$

#### I due criteri operativi

La definizione è inutilizzabile in pratica (dovresti provare *tutti* gli $x$). Si usa uno di questi:

**(a) Autovalori** — valido perché $A$ è simmetrica: **tutti gli autovalori sono $>0$**.

**(b) Criterio di Sylvester**: **tutti i minori principali di testa hanno determinante $>0$**.

Verificato su $A=\begin{bmatrix}4&1&1\\1&3&-1\\1&-1&5\end{bmatrix}$:
- autovalori $\{1.786,\;4.539,\;5.675\}$ — tutti positivi ✓
- minori di testa: $\det[4]=4$, $\det\begin{bmatrix}4&1\\1&3\end{bmatrix}=11$, $\det A=46$ — tutti positivi ✓
- i due criteri **concordano**, come devono

> ⚠️ **Verifica sempre PRIMA la simmetria.** Il criterio degli autovalori positivi caratterizza la definita positività solo per matrici simmetriche.

#### Due conseguenze che il corso usa

- **SDP ⟹ Cholesky esiste** (teorema di Cholesky) — verificato
- **SDP ⟹ tutte le sottomatrici principali di testa sono non singolari ⟹ LU esiste senza pivoting**. Verificato: su quella $A$, `scipy.linalg.lu` restituisce $P=I$, nessuno scambio necessario.

---

### 3.5 ⭐ Ortogonalità

> $Q$ è **ortogonale** se $\;Q^TQ=QQ^T=I$, cioè $\;Q^{-1}=Q^T$.

Le colonne di $Q$ sono **ortonormali**: a due a due ortogonali ($q_i^Tq_j=0$) e di norma 1.

**La proprietà che vale i punti:**

$$\|Qx\|_2=\sqrt{(Qx)^T(Qx)}=\sqrt{x^T\underbrace{Q^TQ}_{=I}x}=\sqrt{x^Tx}=\|x\|_2$$

Moltiplicare per una matrice ortogonale **non cambia la lunghezza** — quindi non amplifica gli errori. Da qui:

$$\|Q\|_2=1, \qquad \|Q^{-1}\|_2=1 \qquad\Longrightarrow\qquad K_2(Q)=1$$

Verificato numericamente: $K_2(Q)=1.0000000000$ esatto.

> 🔑 **È la ragione profonda per cui QR è più stabile di LU**, ed è la giustificazione teorica da citare all'esame. Non "QR è più stabile perché sì": *QR usa solo trasformazioni ortogonali, che conservano la norma 2 e hanno condizionamento 1.*

---

### 3.6 Prodotto scalare e forme quadratiche

$$x^Ty=\sum_{i=1}^n x_iy_i \qquad\text{(uno scalare)} \qquad\qquad \|x\|_2=\sqrt{x^Tx}$$

Due vettori sono **ortogonali** se $x^Ty=0$.

**Dove serve**, oltre alle norme:

- il passo ottimo dei metodi di discesa: $\;\alpha=-\dfrac{r^Tp}{p^TAp}\;$ — numeratore e denominatore sono **scalari**
- Fletcher-Reeves: $\;\gamma=\dfrac{r_{k+1}^Tr_{k+1}}{r_k^Tr_k}$
- la **$A$-coniugatezza** del gradiente coniugato: $p^{(k+1)T}Ap^{(k)}=0$ — ortogonalità "pesata" da $A$
- la funzione da minimizzare: $\Phi(x)=\frac12x^TAx-b^Tx$, con $\nabla\Phi=Ax-b$

> 💡 In numpy, con vettori colonna $(n,1)$: `r.T@p` restituisce una matrice $1\times1$, non uno scalare puro. Funziona lo stesso nelle formule, ma se ti servisse il numero: `float(r.T@p)`.

---

### 3.7 ⭐ Taylor e i teoremi di analisi

**Taylor è il prerequisito che regge metà del corso**: Newton, Newton-Raphson, il condizionamento di $f$, l'errore di interpolazione — nascono tutti da uno sviluppo troncato.

> **Formula di Taylor con resto di Lagrange.** Se $f$ è derivabile $n+1$ volte in $I\ni x_0$, per ogni $x\in I$ esiste $c$ fra $x_0$ e $x$ tale che
> $$f(x)=\underbrace{\sum_{k=0}^{n}\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k}_{P_n(x)}+\underbrace{\frac{f^{(n+1)}(c)}{(n+1)!}(x-x_0)^{n+1}}_{R_n(x)}$$

Il caso che usi di più è $n=1$: $\;f(x)\approx f(x_0)+f'(x_0)(x-x_0)$, cioè **la retta tangente** — ed è esattamente il metodo di Newton.

> **Teorema degli zeri (Bolzano).** $f$ continua in $[a,b]$ con $f(a)\cdot f(b)<0$ ⟹ esiste almeno uno zero in $(a,b)$.
> È l'ipotesi di applicabilità di **bisezione** e **regula falsi**.

**Notazione $C^k$**: $f\in C^2[a,b]$ significa che $f$, $f'$ e $f''$ esistono e sono **continue** in $[a,b]$. Compare nelle ipotesi dei teoremi di convergenza di Newton.

**$o$-piccolo**: $o(\delta x)$ è un termine che tende a zero **più rapidamente** di $\delta x$. Serve per giustificare "trascuriamo i termini di ordine superiore" nelle derivazioni di $K$.

**Convessità**: $f$ è convessa se ogni corda sta sopra il grafico. Per una funzione convessa il minimo relativo **coincide** con quello assoluto, e (se differenziabile) $x_0$ è minimo $\iff\nabla f(x_0)=0$.

**Logaritmi**: $\log_2$ per il numero di iterazioni della bisezione; le scale semilogaritmiche dei grafici d'errore (una retta in semilog = decrescita **geometrica** = ordine 1; una curva che si piega = ordine 2).

---

### 3.8 Valori singolari — solo i cenni

Servono per `SVDLS` e per la formula di $K_2$. Non serve saper calcolare una SVD a mano.

$$A=U\Sigma V^T$$

con $U,V$ **ortogonali** e $\Sigma$ diagonale con elementi $\sigma_1\ge\sigma_2\ge\dots\ge0$, i **valori singolari**.

Il legame con gli autovalori — questo sì, va saputo:

$$\sigma_i=\sqrt{\lambda_i(A^TA)} \qquad\Longrightarrow\qquad \|A\|_2=\sigma_{\max}, \qquad K_2(A)=\frac{\sigma_{\max}}{\sigma_{\min}}$$

Verificato su una $2\times3$: valori singolari $\{9.508,\;0.773\}$ = radici degli autovalori non nulli di $A^TA$ ✓

Il **rango numerico** è il numero di $\sigma_i$ sopra una soglia — è esattamente ciò che fa la riga `k = np.count_nonzero(s > thresh)` in `SVDLS`.

---

## 4. Il verificatore in Python

Incollalo nel notebook: risponde in un colpo solo a tutte le domande di riconoscimento che l'Esercizio 1 richiede.

```python
import numpy as np, scipy.linalg as spl

def analizza(A, nome="A"):
    n = A.shape[0]
    print(f"--- {nome}: {A.shape} ---")
    print("quadrata          :", A.shape[0] == A.shape[1])
    print("det               :", np.linalg.det(A))
    print("rango             :", np.linalg.matrix_rank(A), f"(massimo = {min(A.shape)})")
    print("K_2(A)            : %.4e" % np.linalg.cond(A, 2))
    print("K_inf(A)          : %.4e" % np.linalg.cond(A, np.inf))

    sim = np.allclose(A, A.T)
    print("simmetrica        :", sim)
    if sim:
        av = np.linalg.eigvalsh(A)                    # eigvalsh: per matrici simmetriche
        print("  autovalori      :", np.round(av, 6))
        print("  DEFINITA POSITIVA:", np.all(av > 0), " → Cholesky, gradiente, CG applicabili" if np.all(av>0) else "")
        minori = [np.linalg.det(A[:k, :k]) for k in range(1, n+1)]
        print("  Sylvester (minori di testa):", np.round(minori, 6))

    d = np.abs(np.diag(A)); fuori = np.sum(np.abs(A), axis=1) - d
    print("dom. diag. stretta:", np.all(d > fuori), " → Jacobi e Gauss-Seidel convergono" if np.all(d>fuori) else "")

    minori_teo1 = [np.linalg.det(A[:k, :k]) for k in range(1, n)]   # k = 1..n-1
    print("Teorema 1 (LU)    :", np.all(np.abs(minori_teo1) > 1e-12))
    print("ortogonale        :", np.allclose(A.T @ A, np.eye(n)) if A.shape[0]==A.shape[1] else "—")
    print("densità           : %.1f%%" % (100 * np.count_nonzero(A) / A.size))
```

---

## 5. La sequenza di domande da farsi davanti a una matrice

L'ordine conta: le prime due si leggono a occhio, le altre richiedono un conto.

1. **È triangolare?** → sostituzione diretta, $O(n^2)$, hai finito
2. **È simmetrica?** → se no, salta al punto 4
3. **È definita positiva?** (autovalori o Sylvester) → **Cholesky**; se grande e sparsa, **gradiente coniugato**
4. **È grande e sparsa?** → metodi **iterativi**; controlla la dominanza diagonale per Jacobi/GS
5. **Quanto vale $K(A)$?** → se grande, **QR**; e comunque commenta quante cifre ti aspetti di perdere
6. Altrimenti → **LU con pivoting**, che funziona sempre per $A$ non singolare

---

## 6. Cosa NON ti serve

Altrettanto importante, perché ti fa risparmiare giorni. Di Algebra Lineare **puoi ignorare**:

- **spazi vettoriali astratti**, basi, cambi di base, applicazioni lineari, nucleo e immagine in forma teorica
- **diagonalizzazione**, matrici simili, forma canonica di Jordan
- **calcolo degli autovettori** — ti serve solo il raggio spettrale, cioè il modulo massimo degli autovalori, e lo calcola numpy
- **calcolo del determinante con Laplace** oltre il $3\times3$ — anzi, il corso lo usa proprio come esempio di algoritmo da evitare ($O((n+1)!)$)
- **Gram-Schmidt** nei dettagli — il corso costruisce QR con i riflettori di Householder, e comunque usa `scipy.linalg.qr`
- **prodotto vettoriale**, geometria analitica dello spazio
- **sistemi omogenei** e strutture dello spazio delle soluzioni oltre l'enunciato di Rouché-Capelli
- **decomposizione spettrale** e teorema spettrale in forma completa

Di Analisi puoi ignorare integrali, serie in forma teorica, successioni di funzioni, equazioni differenziali.

> **La regola generale**: il corso ti chiede di **riconoscere proprietà** e **citare teoremi**, non di dimostrare risultati di algebra lineare. Se un prerequisito serve solo a livello "riconoscere", non studiarne la teoria — impara a verificarlo in Python e a dire come si chiama.

---

## 7. Le cinque cose da sapere se hai solo un'ora

Se il tempo è pochissimo, questi cinque coprono la maggior parte dei punti in gioco:

1. **Simmetrica + definita positiva**, e i due criteri per verificarla → apre Cholesky, gradiente, CG
2. **Autovalori e raggio spettrale**, e che per una triangolare sono la diagonale → convergenza degli iterativi, $\|A\|_2$, $K_2$
3. **Dominanza diagonale stretta** → convergenza di Jacobi e Gauss-Seidel
4. **$Q$ ortogonale ⟹ $\|Qx\|_2=\|x\|_2$ ⟹ $K_2(Q)=1$** → perché QR è più stabile
5. **Taylor al primo ordine** = la retta tangente → Newton, Newton-Raphson, condizionamento
