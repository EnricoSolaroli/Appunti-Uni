# Blocco D in figure: i concetti che l'esame chiede davvero

> [!info] A cosa serve
> Le note [[19 Minimi quadrati - equazioni normali, QR-LS e SVD-LS|19]] e [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue|20]] sono la teoria completa; la [[21 Scheda operativa Blocco D|21]] è il filtro d'esame. **Questa nota è il ponte visivo**: sette concetti, sette figure, e per ciascuno la frase da scrivere all'esame.
>
> Tutte le figure sono calcolate, non disegnate a mano: i numeri che leggi sono veri.
> Creata il 3 settembre 2026.

---

## Come sono pesati i concetti

Dalle 8 prove che hai:

| Concetto | Quante volte | Punti |
|---|---|---|
| ⭐⭐ **Teorema dell'errore** | 2 (10 gennaio, Simulazione I) | 3 + 4 |
| ⭐ **QR-LS** | 1 (7 maggio) | 5 |
| ⭐ **Costante di Lebesgue** | 1 (10 gennaio) | 3 |
| $K_2(A^TA)=K_2(A)^2$ | come giustificazione, ricorrente | — |
| Runge / Chebyshev | come commento, ricorrente | — |

---

# PARTE I — INTERPOLAZIONE

## 1. ⭐⭐ Il teorema dell'errore: leggerlo, non recitarlo

$$E(\bar x) = f(\bar x) - p_n(\bar x) = \frac{\omega_{n+1}(\bar x)}{(n+1)!}\, f^{(n+1)}(\xi), \qquad \omega_{n+1}(x) = \prod_{i=0}^{n}(x - x_i)$$

con $\xi$ in $[a,b]$ ma **incognito**. Tre fattori, e sono di natura completamente diversa:

| Fattore | Chi lo decide | Puoi agirci? |
|---|---|---|
| $f^{(n+1)}(\xi)$ | **la funzione** | ❌ no, te la danno |
| $(n+1)!$ | il **grado** | ⚠️ sì, ma cresce anche il numeratore |
| $\omega_{n+1}(\bar x)$ | **dove metti i nodi** | ✅ **sì, ed è l'unica leva vera** |

Ecco $\omega_{n+1}$ disegnato:

![[D_omega.png]]

**Cosa mostra.** A sinistra ($n=8$): con nodi equispaziati $\omega_{n+1}$ ha gobbe piccole al centro e gobbe enormi vicino agli estremi. Con i nodi di Chebyshev le gobbe hanno **tutte la stessa altezza** — si dice che $\omega$ *equioscilla*.

A destra ($n=20$, scala logaritmica): il massimo di $|\omega_{21}|$ vale $2.3\cdot10^{-4}$ con nodi equispaziati e $9.5\cdot10^{-7}$ con Chebyshev. **245 volte meno**, e la differenza sta tutta agli estremi.

> [!tip] La frase da scrivere all'esame
> *"L'errore è il prodotto di tre fattori. Il primo, $f^{(n+1)}(\xi)$, dipende solo dalla funzione e non è controllabile — inoltre $\xi$ è incognito, e per questo il teorema si usa **maggiorandolo** con $\max_{[a,b]}|f^{(n+1)}|$. Il secondo, $(n+1)!$, cresce con il grado ma non basta a garantire la convergenza, perché anche $\max|f^{(n+1)}|$ può crescere altrettanto in fretta. Il terzo, $\omega_{n+1}$, dipende **solo dalla scelta dei nodi**: è l'unico su cui si può agire, e minimizzarne il massimo porta ai nodi di Chebyshev."*

Il passaggio da **uguaglianza** a **maggiorazione** è quello che vale i punti: vedi [[00d Le maggiorazioni - come si leggono#5. La distinzione che vale punti: uguaglianza contro maggiorazione|00d §5]].

---

## 2. I nodi di Chebyshev: da dove viene quella formula

$$x_i = \cos\left(\frac{(1+2i)\pi}{2(n+1)}\right), \qquad i = 0,\dots,n$$

La formula sembra arbitraria. Non lo è, e la costruzione geometrica la rende ovvia:

![[D_nodi_chebyshev.png]]

Prendi $n+1$ punti **equispaziati sulla semicirconferenza** e **proiettali sull'asse orizzontale**. Il coseno è esattamente quella proiezione. Poiché vicino a $\pm1$ la circonferenza è quasi verticale, le proiezioni si **addensano agli estremi** — proprio dove $\omega_{n+1}$ farebbe danni.

> [!note] Il risultato da citare
> Con i nodi di Chebyshev su $[-1,1]$ si ha **esattamente**
> $$\max_{[-1,1]} |\omega_{n+1}(x)| = 2^{-n}$$
> ed è il **minimo possibile** su tutte le scelte di nodi (proprietà di minimax). Verificato: per $n=20$, $2^{-20} = 9.54\cdot10^{-7}$, che è il numero nella figura precedente.
>
> Su un intervallo generico $[a,b]$ si riscala: $x_i \to \frac{b-a}{2}x_i + \frac{a+b}{2}$.

---

## 3. Runge: perché alzare il grado non è la soluzione

![[D_runge.png]]

Su $f(x) = \dfrac{1}{1+25x^2}$ in $[-1,1]$:

| $n$ | equispaziati | Chebyshev |
|---|---|---|
| 14 | oscillazioni visibili agli estremi | indistinguibile da $f$ |
| 40 | $\max\vert f-p_n\vert  = 1.0\cdot10^{5}$ | $2.9\cdot10^{-4}$ |

**Il punto concettuale**: con nodi equispaziati l'errore **diverge** al crescere di $n$; con i nodi di Chebyshev converge. Stessa funzione, stesso grado, stessa formula di Lagrange — cambia solo *dove* stanno i nodi.

> [!tip] La frase da scrivere
> *"Il fenomeno di Runge mostra che l'interpolazione polinomiale su nodi equispaziati non converge uniformemente, nemmeno per funzioni analitiche: al crescere di $n$ il fattore $\max|f^{(n+1)}|$ cresce più in fretta di $(n+1)!$, e $\omega_{n+1}$ amplifica l'errore agli estremi. La soluzione non è abbassare il grado ma **ridistribuire i nodi**, infittendoli agli estremi."*

---

## 4. ⭐ La costante di Lebesgue: il condizionamento dell'interpolazione

Finora l'errore era dovuto al fatto che $f$ non è un polinomio. Ma c'è un secondo errore, indipendente: **i dati $y_i$ sono perturbati** (misure, arrotondamenti). Quanto quella perturbazione si amplifica sul polinomio?

$$\Lambda_n = \max_{x\in[a,b]} \sum_{i=0}^{n} |L_i(x)| \qquad \text{(costante di Lebesgue)}$$

La quantità dentro il massimo si chiama **funzione di Lebesgue** $\lambda(x)$, ed eccola:

![[D_lebesgue.png]]

**Cosa mostra.** Con nodi equispaziati $\lambda(x)$ ha picchi enormi **fra gli ultimi nodi**, e crescono in modo esplosivo con $n$: $\Lambda_{10} = 30$, $\Lambda_{20} = 10\,987$. Con Chebyshev resta piatta e cresce lentissimamente: $2.49$ e $2.90$.

Due fatti da sapere:

1. **$\Lambda_n \ge 1$ sempre**, con qualunque scelta di nodi. Segue dalla partizione dell'unità $\sum_i L_i(x) = 1$: il massimo di $\sum|L_i|$ non può stare sotto 1. È la linea tratteggiata nella figura.
2. La disuguaglianza di Lebesgue: $\;\|f - p_n\|_\infty \le (1+\Lambda_n)\, E_n^*(f)$, dove $E_n^*$ è l'errore del **miglior** polinomio di grado $n$. Cioè: $\Lambda_n$ misura **quanto il tuo polinomio interpolante può essere peggiore del migliore possibile**.

> [!tip] La frase da scrivere
> *"$\Lambda_n$ è il numero di condizionamento del problema dell'interpolazione: amplifica sia le perturbazioni sui dati $y_i$ sia la distanza dal miglior polinomio. Vale sempre $\Lambda_n \ge 1$ per la partizione dell'unità. Cresce esponenzialmente sui nodi equispaziati e solo logaritmicamente sui nodi di Chebyshev — ed è **la seconda ragione**, indipendente dal teorema dell'errore, per preferirli."*

---

# PARTE II — MINIMI QUADRATI

## 5. ⭐ Tutto discende da una figura: la proiezione ortogonale

$Ax = b$ con $A \in \mathbb{R}^{m\times n}$, $m > n$: più equazioni che incognite. In generale $b \notin \mathcal{R}(A)$ e **nessuna** $x$ risolve. Si cerca allora la $x$ che rende $\|Ax - b\|_2$ minimo.

![[D_proiezione.png]]

$\mathcal{R}(A)$ — lo spazio generato dalle colonne di $A$ — è un piano dentro $\mathbb{R}^m$. Il vettore $b$ sta fuori. Il punto del piano più vicino a $b$ è la sua **proiezione ortogonale**, e questo è tutto il metodo.

**Da qui escono le equazioni normali in una riga.** Il residuo dev'essere perpendicolare al piano, cioè ortogonale a ogni colonna di $A$:

$$A^T r = 0 \quad\Longleftrightarrow\quad A^T(b - Ax^*) = 0 \quad\Longleftrightarrow\quad \boxed{A^TA\,x^* = A^Tb}$$

> [!note] Perché è davvero un minimo
> $\varphi(x) = \|Ax-b\|_2^2$ ha gradiente $2(A^TAx - A^Tb)$ e hessiana $2A^TA$. Se $\operatorname{rank}(A)=n$, allora $A^TA$ è **simmetrica definita positiva**, quindi $\varphi$ è strettamente convessa e il punto stazionario è il minimo globale, unico. Se il rango non è pieno, $A^TA$ è solo semidefinita: le soluzioni sono infinite.

---

## 6. ⭐ $K_2(A^TA) = K_2(A)^2$: perché non si usano le equazioni normali

Le equazioni normali sono eleganti e si risolvono con Cholesky. Ma passare da $A$ ad $A^TA$ **eleva al quadrato il condizionamento**:

$$K_2(A) = \frac{\sigma_{\max}}{\sigma_{\min}} \quad\Longrightarrow\quad K_2(A^TA) = \frac{\sigma_{\max}^2}{\sigma_{\min}^2} = K_2(A)^2$$

Non è un dettaglio teorico. Ecco l'errore vero dei tre metodi al crescere del condizionamento:

![[D_condizionamento.png]]

**Come si legge.** In log-log una potenza è una retta e **l'esponente è la pendenza**. La curva rossa (equazioni normali) sale con pendenza **2**, le curve blu e verde con pendenza **1**. Concretamente:

| $K_2(A)$ | equazioni normali | QR-LS | SVD-LS |
|---|---|---|---|
| $10$ | $7\cdot10^{-15}$ | $4\cdot10^{-16}$ | $2\cdot10^{-15}$ |
| $4.6\cdot10^{3}$ | $2\cdot10^{-9}$ | $2\cdot10^{-13}$ | $3\cdot10^{-13}$ |
| $2.1\cdot10^{6}$ | $3.6\cdot10^{-4}$ | $2\cdot10^{-11}$ | $4\cdot10^{-11}$ |
| $10^{9}$ | **`cholesky` fallisce** | $7\cdot10^{-9}$ | $2\cdot10^{-8}$ |

Oltre $K_2(A) \approx 2\cdot10^{8}$ la fattorizzazione di Cholesky **solleva un errore**: $K_2(A^TA) > 1/u$, quindi $A^TA$ non è più numericamente definita positiva. Il metodo non peggiora: smette proprio di funzionare.

> [!tip] La frase da scrivere
> *"Le equazioni normali richiedono $\operatorname{rank}(A)=n$ e sono numericamente sconsigliate perché $K_2(A^TA)=K_2(A)^2$: il condizionamento viene elevato al quadrato e l'errore cresce come $u\,K_2(A)^2$ invece di $u\,K_2(A)$. QR-LS lavora direttamente su $A$ senza mai formare $A^TA$, e conserva quindi il condizionamento originale."*

---

## 7. ⭐ QR-LS e SVD-LS: cosa fanno, e quando servono

### QR-LS — il metodo di riferimento

L'idea in una riga: **le trasformazioni ortogonali conservano la norma 2**, quindi si può cambiare sistema di riferimento senza cambiare il problema.

$$\|Ax-b\|_2 = \|Q^T(Ax-b)\|_2 = \left\| \begin{bmatrix} R_1 \\ 0\end{bmatrix}x - \begin{bmatrix} h_1 \\ h_2\end{bmatrix} \right\|_2, \qquad h = Q^Tb$$

$$\|Ax-b\|_2^2 = \underbrace{\|R_1x - h_1\|_2^2}_{\text{si può annullare}} + \underbrace{\|h_2\|_2^2}_{\text{non dipende da }x}$$

Quindi: **risolvi $R_1x = h_1$** (triangolare, con `Usolve`) e **il residuo minimo è $\|h_2\|_2^2$**, che ti viene regalato senza calcolare $Ax-b$. Nel codice sono le fette `R[0:n,:]`, `h[0:n]`, `h[n:]`.

### SVD-LS — quando il rango non è pieno

Se $\operatorname{rank}(A) = k < n$, le soluzioni sono **infinite** (differiscono per un elemento del nucleo). La SVD sceglie fra tutte quella di **norma minima**:

$$x^* = \sum_{i=1}^{k} \frac{u_i^Tb}{\sigma_i}\, v_i, \qquad \text{residuo} = \sum_{i>k}(u_i^Tb)^2$$

Il rango numerico $k$ si conta con la soglia `np.spacing(1)*m*s[0]`: i valori singolari sotto quella soglia sono indistinguibili da zero, e includerli farebbe esplodere la divisione per $\sigma_i$.

| Metodo | Costo | Serve rango pieno? | Quando lo usi |
|---|---|---|---|
| Equazioni normali | il più basso | ✅ sì | solo se $A$ è ben condizionata |
| **QR-LS** | medio | ✅ sì | **la scelta di default** |
| SVD-LS | il più alto | ❌ no | rango deficiente o dubbio, o massima accuratezza |

---

## 8. Interpolazione o minimi quadrati? La decisione

![[D_interp_vs_ls.png]]

Stessi 12 punti, due strategie opposte:

- **Interpolazione** (sinistra): $n+1$ dati, polinomio di grado $n$, passa per **tutti**. Con dati rumorosi insegue il rumore e oscilla in modo selvaggio — è "esatto" sui dati e inutile fra i dati.
- **Minimi quadrati** (destra): 12 dati, **2 sole incognite**, non passa per nessun punto e minimizza la somma dei quadrati dei residui (i segmenti arancioni).

> [!tip] La regola
> | I dati sono… | Usa |
> |---|---|
> | pochi ed **esatti** (valori di una funzione nota, tabulazioni) | **interpolazione** |
> | tanti e **rumorosi** (misure sperimentali) | **minimi quadrati** |
> | tanti ed esatti | minimi quadrati con grado alto, o interpolazione a tratti |
>
> Il criterio non è quanti dati hai: è **se ti fidi dei dati**. Interpolare significa dichiarare che ogni $y_i$ è esatto.

---

## In dieci righe

1. Teorema dell'errore: tre fattori, **solo $\omega_{n+1}$ è tuo**.
2. È un'**uguaglianza** con $\xi$ ignoto; diventa maggiorazione col $\max|f^{(n+1)}|$.
3. Chebyshev = punti equispaziati sul cerchio, **proiettati**; si infittiscono agli estremi.
4. Con Chebyshev $\max|\omega_{n+1}| = 2^{-n}$, ed è il minimo possibile.
5. Runge: con nodi equispaziati alzare $n$ fa **divergere** l'errore.
6. $\Lambda_n \ge 1$ sempre (partizione dell'unità); è il **condizionamento** dell'interpolazione.
7. Minimi quadrati = **proiezione ortogonale**; da $A^Tr=0$ escono le equazioni normali.
8. $K_2(A^TA)=K_2(A)^2$: pendenza 2 invece di 1, e oltre $K\approx10^{8}$ Cholesky si rifiuta.
9. QR-LS: $R_1x=h_1$, residuo $=\|h_2\|_2^2$ **gratis**.
10. SVD-LS: unico che regge il rango non pieno, e dà la soluzione di **norma minima**.
