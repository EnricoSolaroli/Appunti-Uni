# 24 — Compendio unico: tutto l'esame in un file

> [!info] Come si usa
> Questo file ha **tre parti**, pensate per momenti diversi:
> - **[[#PARTE I — FORMULARIO|Parte I · Formulario]]** — 15-20 minuti. Tabelle, criteri, formule. Da rileggere più volte, anche la mattina dell'11.
> - **[[#PARTE II — COMPENDIO ESTESO|Parte II · Compendio]]** — 1-2 ore. La teoria di tutti i blocchi, autosufficiente.
> - **[[#PARTE III — PATTERN DI CODICE DA SAPERE A MEMORIA|Parte III · Pattern di codice]]** — i frammenti che ricorrono nelle prove, con la frequenza con cui compaiono. Da riscrivere a memoria, non da rileggere.
> - **[[#PARTE IV — TESTI MODELLO|Parte IV · Testi modello]]** — le giustificazioni scritte già pronte, da adattare invece di reinventare sotto pressione.
>
> Ogni sezione rimanda alla nota di dettaglio con un link: se un punto non è chiaro, apri quella.

---

# PARTE I — FORMULARIO

## F1. La tabella decisionale unica

Il cuore dell'esame: **dato il problema, quale metodo**. Questa tabella copre l'Esercizio 1 di ogni prova.

| Cosa hai davanti | Metodo | Perché |
|---|---|---|
| $A$ **rettangolare** ($m>n$) | minimi quadrati → **QR-LS** | il sistema non ha soluzione esatta, si minimizza $\Vert Ax-b\Vert_2^2$ |
| $A$ rettangolare **e rango non massimo** | **SVD-LS** | l'unico che gestisce colonne dipendenti; dà la soluzione di norma minima |
| $A$ quadrata, **grande e sparsa**, dominanza diagonale stretta o SDP | **Gauss-Seidel** (o Jacobi) | i diretti costerebbero troppo; la dominanza garantisce convergenza |
| $A$ quadrata, **simmetrica definita positiva**, grande | **gradiente coniugato** | termina in al più $n$ iterazioni; sfrutta la struttura SDP |
| $A$ quadrata, **piccola/densa**, $K_2(A)$ basso | **LU** (fattorizzazione di Gauss) | metodo diretto standard, il più economico |
| $A$ quadrata, piccola/densa, **simmetrica definita positiva** | **Cholesky** | metà del costo di LU, stabilità forte |
| $A$ quadrata, piccola/densa, **$K_2(A)$ alto** | **QR** | più stabile di LU: gli elementi di $R$ crescono come $\sqrt n$, quelli di $U$ come $2^{n-1}$ |

→ dettaglio: [[10 Scheda operativa Blocco B#4. Tabella decisionale — parte "metodi diretti", completata|scheda B]] · [[18 Scheda operativa Blocco C#4. Tabella decisionale — dati $A$ e $b$, quale metodo|scheda C]] · [[21 Scheda operativa Blocco D#4. Tabella decisionale — dati i dati, quale strumento|scheda D]]

---

## F2. Le cinque domande davanti a una matrice

Da fare **in quest'ordine**, sono cinque righe di codice e determinano tutto il resto:

```python
m, n = A.shape                                   # 1. quadrata o rettangolare?
np.count_nonzero(A)/(m*n)                        # 2. sparsa (<33%) o densa?
np.allclose(A, A.T)                              # 3. simmetrica?
np.linalg.eigvals(A)                             # 4. tutti > 0 -> SDP (solo se simmetrica)
np.linalg.cond(A)                                # 5. K2: ben o mal condizionata?
2*np.abs(np.diag(A)) - np.sum(np.abs(A), axis=1) # 6. tutti > 0 -> dominanza stretta
```

L'ultima riga è la traduzione algebrica di $|a_{ii}| > \sum_{j\neq i}|a_{ij}|$: sommando $|a_{ii}|$ a entrambi i membri si ottiene $2|a_{ii}| > \sum_j |a_{ij}|$.

> [!warning] La trappola classica
> `np.sum(np.abs(A[i,:]) - np.abs(A[i,i]))` è **sbagliato**: sottrae l'elemento diagonale da *ogni* termine. La parentesi va chiusa prima: `np.sum(np.abs(A[i,:])) - np.abs(A[i,i])`.

→ dettaglio: [[10 Scheda operativa Blocco B#3. 🎯 Il pezzo più redditizio: le cinque domande|scheda B §3]]

---

## F3. Convergenza dei metodi iterativi

| Serve garantire | Condizione | Tipo |
|---|---|---|
| Jacobi e Gauss-Seidel convergono | $A$ a **dominanza diagonale stretta** per righe | sufficiente, non necessaria |
| Gauss-Seidel converge | $A$ **simmetrica definita positiva** | sufficiente |
| Jacobi converge | $A$ SDP **e** $2D-A$ SDP | sufficiente |
| Qualunque metodo iterativo converge | $\rho(T) < 1$, con $T = M^{-1}N$ | **necessaria e sufficiente** |
| SOR converge | necessario $0 < \omega < 2$ | necessaria |

**$\omega$ ottimale per SOR.** `gauss_seidel_sor` riceve $\omega$ in input: se il testo chiede la scelta ottimale, si calcola

$$\omega_{\text{ott}} = \frac{2}{1+\sqrt{1-\rho(T_J)^2}}$$

dove $\rho(T_J)$ è il raggio spettrale della matrice di iterazione di **Jacobi**. Si ottiene con `rho_T_Jac(A)`, che è semplicemente `jacobi` troncata subito dopo il calcolo del raggio spettrale:

```python
def rho_T_Jac(A):
    M = np.diag(np.diag(A))
    E = np.tril(A, -1);  F = np.triu(A, 1)
    T = np.linalg.inv(M) @ (-(E + F))
    return np.max(np.abs(np.linalg.eigvals(T)))

omega_ott = 2.0 / (1 + np.sqrt(1 - rho_T_Jac(A)**2))
```


$$\text{errore} \approx C\,\rho(T)^k \qquad\Longrightarrow\qquad \frac{\|e^{(k+1)}\|}{\|e^{(k)}\|} \longrightarrow \rho(T)$$

Il rapporto fra errori consecutivi (`er_vet[1:]/er_vet[:-1]`) converge numericamente a $\rho(T)$: è la verifica sperimentale del teorema fondamentale.

**Jacobi o Gauss-Seidel?** A parità di ipotesi si sceglie **Gauss-Seidel**, perché usa le componenti già aggiornate nella stessa iterazione. Per matrici **tridiagonali** vale esattamente $\rho(T_{GS}) = \rho(T_J)^2$. L'unico vantaggio di Jacobi: è **parallelizzabile**, Gauss-Seidel no.

→ dettaglio: [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#9. 🎯 Le condizioni sufficienti — il drill dell'esame   *· slide §1.5*|nota 14-15 §9]]

---

## F4. Zeri di funzioni — ordini e ipotesi

| Metodo                         | Ipotesi                             | Convergenza | Ordine $p$                        |
| ------------------------------ | ----------------------------------- | ----------- | --------------------------------- |
| Bisezione                      | $f$ continua, $f(a)f(b)<0$          | **globale** | 1                                 |
| Regula falsi                   | $f$ continua, $f(a)f(b)<0$          | **globale** | 1 (lineare)                       |
| Corde                          | pendenza fissa $\neq 0$             | locale      | 1                                 |
| Secanti                        | due innesti vicini ad $\alpha$      | locale      | $\frac{1+\sqrt5}{2}\approx 1.618$ |
| **Newton**                     | $\alpha$ **semplice**, $x_0$ vicino | locale      | **2**                             |
| Newton su radice multipla $m$  | —                                   | locale      | 1, $c=\frac{m-1}{m}$              |
| Newton modificato ($\times m$) | $m$ nota                            | locale      | **2**                             |

Bisezione: numero di iterazioni noto **a priori**, $\;\text{max\_it} = \lceil \log_2\frac{b-a}{tolx}\rceil - 1$.

**Bisezione e regula falsi sono entrambe globalmente convergenti** (sono metodi di *bracketing*: stessa ipotesi $f(a)f(b)<0$, e la radice resta sempre in gabbia). Cio' che distingue la bisezione e' la **maggiorazione a priori** $|x_k-\alpha|\le\frac{b-a}{2^k}$, da cui il numero di iterazioni noto prima di partire.

La regula falsi **non** ha quella garanzia: l'ampiezza dell'intervallo non tende a zero, perche' **un estremo puo' restare fermo indefinitamente** (stagnazione, tipica quando $f''$ ha segno costante vicino alla radice). Verificato su $f(x)=x^3-2$ in $[1,2]$: dopo 37 iterazioni l'estremo destro e' ancora $b=2.0$, l'intervallo e' ampio $0.74$, e il rapporto fra errori consecutivi e' costante a $0.4126$ — convergenza **lineare**. Conseguenza pratica: **con la regula falsi non si puo' usare $|b-a|$ come criterio d'arresto**, servono $|f(x_k)|$ e l'incremento relativo fra iterati.

Condizionamento del problema: $K \approx \dfrac{1}{|f'(\alpha)|}$ → **le radici multiple sono mal condizionate** ($f'(\alpha)=0$).

 → dettaglio: [[05 Zeri di funzioni non lineari#6. Tabella riassuntiva — da sapere a memoria|nota 05 §6]]
---
## F5. Le formule in una riga

**Condizionamento**

$$K(A) = \|A\|\,\|A^{-1}\|, \qquad K_2(A) = \frac{\sigma_{max}}{\sigma_{min}} \;\;\Big(=\frac{|\lambda|_{max}}{|\lambda|_{min}} \text{ se } A \text{ simmetrica}\Big)$$

$$\frac{\|\delta x\|}{\|x\|} \le K(A)\,\frac{\|\delta b\|}{\|b\|} \qquad\qquad K(A)\approx 10^k \Rightarrow \text{perdi } \approx k \text{ cifre}$$

**Minimi quadrati**

$$A^TA\,x = A^Tb \quad\text{(eq. normali)}, \qquad K_2(A^TA) = K_2(A)^2 \;\;\text{← il motivo per cui si evitano}$$

$$\text{QR-LS: } R_1x = h_1, \quad h=Q^Tb, \quad \text{residuo} = \|h_2\|_2^2$$

**Interpolazione**

$$f(\bar x)-p_n(\bar x) = \frac{\omega_{n+1}(\bar x)}{(n+1)!}f^{(n+1)}(\xi), \qquad \omega_{n+1}(x)=\prod_{i=0}^n (x-x_i)$$

$$\text{Chebyshev: } x_i = \cos\frac{(1+2i)\pi}{2(n+1)} \;\Rightarrow\; \max|\omega_{n+1}| = 2^{-n} \quad\text{(minimo possibile)}$$

$$\Lambda_n = \max_{x\in[a,b]} \sum_j |L_j(x)| \quad\text{(costante di Lebesgue — \textbf{dire sempre su quale } [a,b])}, \qquad \|f-p_n\| \le (1+\Lambda_n)E_n^*(f)$$

**Discesa**

$$F(x) = \tfrac12 x^TAx - b^Tx, \qquad \nabla F(x) = Ax-b = r, \qquad \alpha^{(k)} = -\frac{r^Tp}{p^TAp}$$

---

## F6. Il pattern di codice unico

Ogni esercizio dell'Esercizio 1 segue questa sequenza:

```python
# --- import ---
import numpy as np
import scipy.linalg as spLin
from scipy.io import loadmat
from SolveTriangular import Lsolve, Usolve
import matplotlib.pyplot as plt

# --- dati ---
dati = loadmat('test.mat')
A = dati["A"].astype(float);  b = dati["b"].astype(float)

# --- diagnosi (le cinque domande di F2) ---

# --- risoluzione ---
# LU:
PT, L, U = spLin.lu(A);  P = PT.T
y, flag = Lsolve(L, P@b)
x, flag = Usolve(U, y)
# QR:
Q, R = spLin.qr(A);  n = A.shape[1]
x, flag = Usolve(R[:n,:n], (Q.T@b)[:n])
# Cholesky:
L = spLin.cholesky(A, lower=True)
y, flag = Lsolve(L, b);  x, flag = Usolve(L.T, y)
# iterativo:
x, it, er_vet = gauss_seidel(A, b, np.zeros_like(b), 1e-8, 1000)

# --- verifica (sempre) ---
print("residuo: ", np.linalg.norm(A@x - b)/np.linalg.norm(b))
```

> [!warning] Non esiste `LUsolve`
> Né in `SolveTriangular.py`, né in `utilities.py`, né nello scheletro. Il pattern manuale `lu` → `P=PT.T` → `Lsolve` → `Usolve` **è** la soluzione attesa.

→ dettaglio: [[00c Python e grafici - guida essenziale per l'esame#Parte 9 — Il cheat sheet da riscrivere a memoria|00c · cheat sheet]]

---

## F7. Soglie e costanti

| Quantità | Valore | Uso |
|---|---|---|
| $\varepsilon_{mach}$ (doppia precisione) | $\approx 2.2\cdot10^{-16}$ | `np.spacing(1)` |
| sparsa | non-zeri < 33% | scelta iterativo vs diretto |
| ben condizionata | $K_2$ fra $1$ e $10^3$ | LU va bene |
| mal condizionata | $K_2 \gtrsim 10^6$ | QR / SVD |
| singolare (numericamente) | $K_2 > 1/\varepsilon_{mach}$ | **non** `det(A)≈0`, che è inaffidabile |
| rango numerico | $\#\{s_i > \varepsilon\, m\, s_0\}$ | in `SVDLS` |

---

# PARTE II — COMPENDIO ESTESO

## A. Aritmetica di macchina, condizionamento, stabilità

**I numeri di macchina.** L'insieme $F(\beta,t,L,U)$ è finito: un numero reale viene rappresentato con $t$ cifre di mantissa in base $\beta$ ed esponente fra $L$ e $U$. Conseguenze immediate: esistono un massimo e un minimo rappresentabili (overflow/underflow), e i numeri **non sono equispaziati** — sono fitti vicino a zero e radi lontano.

La **precisione di macchina** $\varepsilon = \beta^{1-t}$ è il più piccolo numero tale che $1+\varepsilon \neq 1$. In doppia precisione IEEE 754 ($t=53$): $\varepsilon \approx 2.2\cdot10^{-16}$. L'errore relativo di rappresentazione è $\le \varepsilon/2$ con arrotondamento.

**La cancellazione numerica** è il fenomeno più importante del blocco: sottraendo due numeri quasi uguali, le cifre significative comuni si elidono e l'errore relativo esplode. L'esempio-tipo è l'equazione di secondo grado con $b^2 \gg 4ac$: la formula standard cancella, la formula razionalizzata $x = \frac{-2c}{b+\sqrt{b^2-4ac}}$ no. **Stesso problema, due algoritmi, stabilità diversa.**

**Condizionamento ≠ stabilità.** È la distinzione che regge tutto il corso:
- il **condizionamento** è una proprietà del **problema**: quanto la soluzione è sensibile a perturbazioni sui dati. Non dipende da come lo risolvi.
- la **stabilità** è una proprietà dell'**algoritmo**: quanto amplifica gli errori di arrotondamento durante l'esecuzione.

Un problema ben condizionato risolto con un algoritmo instabile dà risultati pessimi (è il caso della matrice di Wilkinson: $K_2\approx23$, quindi ben condizionata, ma LU sbaglia del 13% mentre QR resta a $10^{-15}$).

Indice di condizionamento di una funzione: $K = \left|\dfrac{x f'(x)}{f(x)}\right|$.

→ [[02 Numeri finiti e aritmetica di macchina|nota 02]] · [[03 Condizionamento e stabilita|nota 03]]

---

## A2. Norme

| Norma    | Vettore                 | Matrice (indotta)                         |
| -------- | ----------------------- | ----------------------------------------- |
| 1        | $\sum_i \vert x_i\vert$ | massima somma per **colonne**             |
| 2        | $\sqrt{\sum_i x_i^2}$   | $\sigma_{max}$ (massimo valore singolare) |
| $\infty$ | $\max_i \vert x_i\vert$ | massima somma per **righe**               |

Proprietà chiave: $\rho(A) \le \|A\|$ per ogni norma indotta — il raggio spettrale è minorato da qualunque norma, ed è il motivo per cui $\|T\|<1$ **implica** convergenza ma non è necessaria.

→ [[04 Norme vettoriali e matriciali|nota 04]]

---

## A3. Zeri di funzioni non lineari

Tutti i metodi hanno la forma $x_{k+1} = x_k - \dfrac{f(x_k)}{m_k}$: cambia solo **chi è $m_k$**.

- **Bisezione**: non usa $m_k$, dimezza l'intervallo. Convergenza **globale**, ed e' l'unico metodo con **numero di iterazioni noto a priori** e maggiorazione dell'errore $\frac{b-a}{2^k}$. Lenta ma sempre affidabile.
- **Regula falsi**: $m_k$ = pendenza della secante per gli estremi correnti. Mantiene la radice in gabbia, quindi anch'essa **globalmente convergente** — ma di ordine **1**, e senza garanzia che l'intervallo si restringa (un estremo puo' stagnare).
- **Corde**: $m_k$ = costante. Nessuna derivata da ricalcolare, ordine 1.
- **Secanti**: $m_k$ = rapporto incrementale fra gli ultimi due iterati. Ordine 1.618 senza derivate. **Non** e' di bracketing: convergenza solo locale.
- **Newton**: $m_k = f'(x_k)$. Ordine 2 su radici semplici, ma solo **localmente**.
- **Newton modificato**: $x_{k+1} = x_k - m\frac{f(x_k)}{f'(x_k)}$ per radici di molteplicità $m$: recupera l'ordine 2.

**Criteri di arresto** (sempre due, in `and`): $|f(x_k)| < tolf$ (residuo) e $\frac{|x_{k+1}-x_k|}{|x_{k+1}|} < tolx$ (incremento relativo).

→ [[05 Zeri di funzioni non lineari|nota 05]]

---

## A-bis. Sistemi di equazioni non lineari

Si passa da $f(x)=0$ a $F(X)=0$ con $F:\mathbb{R}^n\to\mathbb{R}^n$. La derivata diventa la **Jacobiana**, e la divisione diventa la **risoluzione di un sistema lineare**:

$$J(X^{(k)})\,s^{(k)} = -F(X^{(k)}), \qquad X^{(k+1)} = X^{(k)} + s^{(k)}$$

Le tre varianti differiscono solo per **quando si ricalcola $J$**:

| Variante | Jacobiana | Ordine |
|---|---|---|
| Newton-Raphson | a ogni iterazione | 2 |
| **corde** | una sola volta, in $X^{(0)}$ | 1 |
| **Shamanskii** | ogni `update` iterazioni | intermedio |

Per il **minimo** di $f(x,y)$: si annulla il gradiente, quindi $H(X^{(k)})s^{(k)} = -\nabla f(X^{(k)})$ — l'Hessiana prende il posto della Jacobiana (ed è la Jacobiana del gradiente). Attenzione: annullare il gradiente dà un punto **stazionario**; serve $H$ definita positiva per garantire che sia un minimo.

> [!warning] `newton_raphson_minimo` NON è nello scheletro 25/26
> Verificato sulle tre copie che accompagnano le simulazioni e sulla copia vergine: **zero occorrenze**. L'unico posto dove esiste è il tuo `scheletri_25_26.py`, dove l'hai aggiunta tu. Quindi **non ci sono buchi da riempire** per questa funzione: non studiarne il codice.
>
> Viene però chiesta in **2 prove** (Simulazione III *2 punti*, 4 luglio 2024 T1), sempre con la stessa formula: *"**Descrivere teoricamente** la variante del metodo di Newton-Raphson per calcolare il minimo di una funzione non lineare in più variabili"*. È una **domanda di teoria**, non di codice — coerente col fatto che la funzione non ti sia stata data. → testo pronto in [[#T10. Newton-Raphson per il minimo (domanda teorica)|T10]]

Il **metodo grafico** per localizzare le soluzioni (curve di livello a quota 0 delle due componenti, le intersezioni sono le soluzioni) serve a scegliere $X^{(0)}$: Newton converge solo localmente.

→ [[11 Sistemi di equazioni non lineari|nota 11]]

---

## B. Sistemi lineari — metodi diretti

**Non si usano mai**: la regola di Cramer (costo $O(n!)$) e il calcolo esplicito di $A^{-1}$ (costo e instabilità inutili).

**L'idea della fattorizzazione**: scomporre $A$ in fattori triangolari, perché i sistemi triangolari costano $O(n^2)$ invece di $O(n^3)$.

$$PA = LU \quad\Longrightarrow\quad Ly = Pb, \quad Ux = y$$

> [!warning] La convenzione di scipy
> `PT, L, U = spLin.lu(A)` restituisce $A = P^T L U$, quindi la $P$ del corso si ottiene con `P = PT.T`. È l'errore più frequente su questo blocco.

**Il pivoting** (scambio di righe per portare in diagonale l'elemento di modulo massimo) serve sia quando un perno è nullo (necessario) sia quando è piccolo (stabilità: divide gli errori per un numero grande invece che piccolo).

**Le tre fattorizzazioni:**

| | Quando | Costo | Stabilità |
|---|---|---|---|
| **LU** | caso generale | $\frac{2}{3}n^3$ | debole ($\vert u_{ij}\vert \le 2^{\,n-1}\max\vert a_{ij}\vert$) |
| **Cholesky** $A=LL^T$ | $A$ **SDP** | $\frac13 n^3$ | **forte** ($\max\vert l_{ij}\vert \le\sqrt{\max\vert a_{ij}\vert}$, non dipende da $n$) |
| **QR** | mal condizionata, o LS | $\frac43 n^3$ | debole ma migliore di LU ($\vert r_{ij}\vert \le\sqrt n\max\vert a_{ij}\vert$) |

Confronto immediato per $n=30$: $\sqrt{30}\approx5.5$ contro $2^{29}\approx5.4\cdot10^8$.

**Determinante via LU**: $\det A = (-1)^{\#scambi}\prod u_{ii}$.

→ [[08 Metodi diretti - sistemi triangolari e fattorizzazione LU|nota 08]] · [[09 Cholesky, QR e stabilita delle fattorizzazioni|nota 09]]

---

## C. Sistemi lineari — metodi iterativi

**Lo splitting** genera tutti i metodi: si scrive $A = M - N$ con $M$ facile da invertire, e si itera

$$M x^{(k+1)} = N x^{(k)} + b \qquad\Longleftrightarrow\qquad x^{(k+1)} = T x^{(k)} + M^{-1}b, \quad T = M^{-1}N$$

Con la decomposizione $A = D + E + F$ ($D$ diagonale, $E$ triangolare inferiore stretta, $F$ superiore stretta):

| Metodo | $M$ | $N$ |
|---|---|---|
| **Jacobi** | $D$ | $-(E+F)$ |
| **Gauss-Seidel** | $D+E$ | $-F$ |
| **SOR** | $D+\omega E$ | $(1-\omega)D-\omega F$ |

**Il teorema fondamentale**: il metodo converge per ogni $x^{(0)}$ **se e solo se** $\rho(T)<1$. Tutto il resto (dominanza diagonale, SDP) sono **condizioni sufficienti** che permettono di concludere senza calcolare $\rho$.

**Errore e residuo** non sono la stessa cosa: $r^{(k)} = b - Ax^{(k)}$ è calcolabile, $e^{(k)} = x - x^{(k)}$ no. Li lega $e = A^{-1}r$, da cui

$$\frac{\|e\|}{\|x\|} \le K(A)\frac{\|r\|}{\|b\|}$$

**un residuo piccolo non garantisce un errore piccolo se $K(A)$ è grande**.

**Criterio d'arresto**: incremento relativo fra iterati successivi, $\frac{\|x^{(k+1)}-x^{(k)}\|}{\|x^{(k+1)}\|} < toll$.

→ [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)|nota 14-15]]

---

## C2. Metodi di discesa

**L'equivalenza di partenza**: se $A$ è **simmetrica definita positiva**, risolvere $Ax=b$ equivale a minimizzare

$$F(x) = \tfrac12 x^TAx - b^Tx, \qquad \nabla F(x) = Ax - b = r$$

$F$ è strettamente convessa, quindi ha **un solo** minimo, che è globale. Il gradiente coincide col residuo: ecco perché "andare in discesa" e "ridurre il residuo" sono la stessa cosa.

**Schema generale**: $x^{(k+1)} = x^{(k)} + \alpha^{(k)}p^{(k)}$, dove $p$ è la direzione e $\alpha$ il passo. Il **passo ottimo** si calcola in forma chiusa proprio perché $F$ è quadratica:

$$\alpha^{(k)} = -\frac{(r^{(k)})^Tp^{(k)}}{(p^{(k)})^TAp^{(k)}}$$

| Metodo | Direzione | Comportamento |
|---|---|---|
| **Steepest descent** | $p = -r$ | **zig-zag** su curve di livello ellittiche: lento se $K_2(A)$ è grande |
| **Gradiente coniugato** | $p = -r + \gamma p_{prec}$, $\;\gamma = \frac{r_{new}^Tr_{new}}{r_{old}^Tr_{old}}$ | direzioni $A$-ortogonali: **termina in al più $n$ iterazioni** |

Lo zig-zag nasce dal fatto che direzioni successive dello steepest descent sono ortogonali fra loro, quindi si torna ripetutamente su direzioni già percorse. Il gradiente coniugato "chiude" definitivamente una direzione per passo.

> 🌉 **Il ponte con l'IA**: questo è lo stesso paesaggio delle reti neurali. Learning rate ↔ $\alpha^{(k)}$; momentum ↔ risposta allo zig-zag; funzione costo non convessa ↔ l'opposto del caso SDP con minimo unico. Metà delle domande aperte di IA parla di questo. → [[23 Blocco IA - le 22 domande, due regimi#4. 🌉 Il ponte con il Blocco C — l'asset che non stai usando|nota 23 §4]]

**Velocità di convergenza — le formule da citare.** Entrambi i metodi convergono linearmente nella norma dell'energia $\|v\|_A=\sqrt{v^TAv}$, ma con fattori diversi:

$$\|e^{(k)}\|_A \le q_{SD}^{\,k}\,\|e^{(0)}\|_A,\qquad q_{SD}=\frac{K_2(A)-1}{K_2(A)+1}$$

$$\|e^{(k)}\|_A \le 2\,q_{CG}^{\,k}\,\|e^{(0)}\|_A,\qquad q_{CG}=\frac{\sqrt{K_2(A)}-1}{\sqrt{K_2(A)}+1}$$

**È la radice quadrata a fare tutta la differenza**: per $K_2=500$ si ha $q_{SD}=0.996$ contro $q_{CG}=0.914$. Il gradiente coniugato è robusto al malcondizionamento, lo steepest descent no.

**Chi governa la velocità di quale metodo** — la tabella da avere in testa:

| Metodo | La velocità dipende da |
|---|---|
| Jacobi, Gauss-Seidel, SOR | $\rho(T)$, raggio spettrale della matrice di iterazione |
| Steepest descent | $K_2(A)$, tramite $\frac{K_2-1}{K_2+1}$ |
| Gradiente coniugato | $\sqrt{K_2(A)}$, tramite $\frac{\sqrt{K_2}-1}{\sqrt{K_2}+1}$ — più al più $n$ passi |

**La stima del numero di iterazioni.** Da $q^k \le toll$ si ricava

$$k \approx \frac{\log(toll)}{\log q}$$

dove $q$ è $\rho(T)$ oppure $q_{SD}$ oppure $q_{CG}$ secondo il metodo. Serve per **verificare** i risultati sperimentali: le iterazioni osservate devono essere **minori** della stima, perché è una maggiorazione. Se ne osservi di più, c'è un bug.

> **Esempio verificato** (esame 7 maggio 2025, $A$ con $K_2=500$, $A_1$ con $K_2=10$, $toll=10^{-6}$):
>
> | | previste | osservate |
> |---|---|---|
> | GS su $A$ ($\rho=0.975$) | 545 | 319 |
> | SD su $A$ ($q=0.9960$) | 3454 | 1715 |
> | CG su $A$ ($q=0.9144$) | 154 | 117 |
> | GS su $A_1$ ($\rho=0.594$) | 27 | 21 |
> | SD su $A_1$ ($q=0.8182$) | 69 | 55 |
> | CG su $A_1$ ($q=0.5195$) | 21 | 21 |

→ [[16 Metodi di discesa - dal sistema lineare al problema di minimo|nota 16]] · [[17 Gradiente coniugato e velocita di convergenza|nota 17]]

---

## D. Minimi quadrati

**Il problema**: $m$ dati, $n$ incognite, $m>n$. Il sistema $Ax=b$ **non ha soluzione** (più equazioni che incognite), quindi si cerca la $x$ che minimizza $\|Ax-b\|_2^2$.

**La costruzione della matrice** (è la parte che si sbaglia). La regola è **una sola**, e vale sempre:

> La **colonna $j$** di $A$ contiene la **funzione che moltiplica l'incognita $j$**, valutata su tutti i dati. La **riga $i$** è un dato. A destra, in $b$, va ciò che resta **senza incognite**.

Il polinomio è solo il **caso particolare** in cui quelle funzioni sono $1, x, x^2, \dots$ — e allora la matrice ha un nome (**Vandermonde**) e una scorciatoia (`np.vander(x, g+1)`, colonne in potenze decrescenti, stessa convenzione di `np.polyval`). Ma `np.vander` **non è "la matrice dei minimi quadrati"**: è una comodità che vale solo per le basi polinomiali. → i tre casi in [[#P8. Minimi quadrati: i tre modi di costruire la matrice · *9/15, il pattern piu' redditizio*|P8]]

| Metodo | Idea | Quando | Trappola |
|---|---|---|---|
| **eqnorm** | $A^TAx=A^Tb$, risolto con Cholesky | solo se $A$ ben condizionata | $K_2(A^TA)=K_2(A)^2$ |
| **qrLS** | $R_1x=h_1$, $h=Q^Tb$; residuo $=\Vert h_2\Vert^2$ | **scelta standard** | serve la QR **completa**, non `mode='economic'` |
| **SVDLS** | $x = V_k(d_1/s_1)$, $d=U^Tb$ | rango non massimo | soglia sul rango numerico |

**Perché $K_2(A^TA)=K_2(A)^2$ è decisivo**: se $K_2(A)=10^5$, la matrice delle equazioni normali ha $K_2=10^{10}$ e Cholesky può fallire. Con QR-LS si lavora **direttamente su $A$**, senza mai formare $A^TA$.

**La geometria** (spiega tutto): le prime $n$ colonne di $Q$ generano lo spazio delle colonne di $A$, le restanti il suo complemento ortogonale. $h=Q^Tb$ riscrive $b$ in quella base: $h_1$ è la parte **raggiungibile** da $Ax$, $h_2$ la parte **fuori**. Nessuna $x$ può toccare $h_2$: è il residuo irriducibile. Da qui

$$\|Ax-b\|^2 = \|R_1x-h_1\|^2 + \underbrace{\|h_2\|^2}_{\text{non dipende da } x}$$

→ [[19 Minimi quadrati - equazioni normali, QR-LS e SVD-LS|nota 19]] · [[22 Blocco D in figure - i concetti chiave#5. ⭐ Tutto discende da una figura: la proiezione ortogonale|figure §5]]

---

## D2. Interpolazione polinomiale

**Il problema**: trovare il polinomio di grado $\le n$ che passa **esattamente** per $n+1$ punti. Esiste ed è unico.

**La base di Lagrange** evita di risolvere il sistema di Vandermonde (mal condizionato):

$$L_j(x) = \prod_{i\neq j}\frac{x-x_i}{x_j-x_i}, \qquad L_j(x_j)=1,\;\; L_j(x_i)=0 \;(i\neq j)$$

$$p_n(x) = \sum_{j=0}^n y_j L_j(x)$$

**⭐⭐ Il teorema dell'errore** — la domanda che vale di più:

$$f(\bar x)-p_n(\bar x) = \frac{\omega_{n+1}(\bar x)}{(n+1)!}\,f^{(n+1)}(\xi), \qquad \omega_{n+1}(x)=\prod_{i=0}^n(x-x_i)$$

I tre fattori:
1. $\omega_{n+1}$ dipende **solo dai nodi**. Si annulla nei nodi (errore nullo lì). Con nodi equispaziati esplode agli estremi → **Runge**. È **l'unico fattore controllabile**.
2. $(n+1)!$ cresce rapidamente, tende a ridurre l'errore.
3. $f^{(n+1)}(\xi)$ non è controllabile e **può crescere più del fattoriale** → alzare il grado non garantisce niente.

**I nodi di Chebyshev** $x_i=\cos\frac{(1+2i)\pi}{2(n+1)}$ minimizzano $\max|\omega_{n+1}|$, portandolo al valore ottimo $2^{-n}$. Geometricamente: proiezioni sull'asse di punti equispaziati sulla semicirconferenza — più fitti agli estremi, dove serve.

**La costante di Lebesgue** $\Lambda_n=\max_{x\in[a,b]}\sum_j|L_j(x)|$ è il **condizionamento dell'interpolazione**: dipende **solo dai nodi e dall'intervallo**, non dalla funzione. Vale sempre $\Lambda_n\ge1$ e

$$\|f-p_n\|_\infty \le (1+\Lambda_n)\,E_n^*(f)$$

dove $E_n^*$ è l'errore della migliore approssimazione possibile. Stime asintotiche, da citare perché sono la lettura quantitativa di Runge:

$$\text{equispaziati: } \Lambda_n \sim \frac{2^{\,n+1}}{e\,n\log n} \;\;\text{(esponenziale)} \qquad \text{Chebyshev: } \Lambda_n \sim \frac{2}{\pi}\log n + 0.9625 \;\;\text{(logaritmica)}$$

> [!warning] ⚠️ Su quale intervallo si cerca il massimo
> **$\Lambda_n$ dipende dall'intervallo tanto quanto dai nodi**, e la differenza può essere di ordini di grandezza. Sul 10 gennaio 2025 (nodi $1,\,1.5,\,1.75$, funzione dichiarata su $[0,2]$):
>
> | Intervallo | $\Lambda_n$ | Massimo in | Che cosa misura |
> |---|---|---|---|
> | $[0,\,2]$, dichiarato dal testo | **29.0** | $x=0$ | stabilità su tutto l'intervallo, **estrapolazione inclusa** |
> | $[1,\,1.75]$, inviluppo dei nodi | **5/3 = 1.667** | $x=1.25$ | stabilità dove si **interpola** davvero |
>
> Sono **entrambi corretti**: rispondono a domande diverse. La prof, nell'Esercizio 5 del Lab 12/5, usa l'**intervallo dichiarato** (`xv = np.linspace(-1,1,200)`), quindi quello è il valore principale. **La cosa che ti mette al riparo è dire su quale intervallo l'hai calcolata**, e possibilmente riportare entrambi con una riga di spiegazione.

> 📐 **Il valore esatto senza campionare**, quando i nodi sono pochi: $\lambda(x)$ è **polinomiale a tratti** — fra due nodi consecutivi i segni degli $L_j$ non cambiano, quindi lì è un normale polinomio e il massimo si trova annullando la derivata. Sui tre nodi del 10 gennaio: $5/3$ su $[1,1.5]$ e $13/12$ su $[1.5,1.75]$, da cui $\Lambda_n=5/3$ esatta. Non esiste invece una formula chiusa nel caso generale: $\Lambda_n$ è un massimo, e si approssima campionando.

**Interpolazione o minimi quadrati?** Interpolazione se i dati sono **esatti** e pochi; minimi quadrati se sono **sperimentali** (rumore) o molti: l'interpolazione forza il polinomio a passare per punti già sbagliati, amplificando il rumore.

→ [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue|nota 20]] · [[22 Blocco D in figure - i concetti chiave|figure]]

---

## IA. Le 22 domande, due regimi

- **Voci 1–12** → testate con le **crocette**. Obiettivo: *riconoscere*, non produrre. Penalità $-0.5$ per errore: se escludi due opzioni su quattro rispondi, se sei al buio lascia in bianco.
- **Voci 13–22** → **domande aperte**, possono capitare **testualmente**. Vanno sapute scrivere.

Le più frequenti nelle 8 prove: **15+16** (training e backpropagation, arrivano insieme, 3 prove), **19** (momentum, 3), **22** (Adagrad/RMSProp/Adam, 3), **17** (⭐ ricavare l'aggiornamento pesi per MLP 1-1-1-1, **fino a 3 punti**).

→ [[23 Blocco IA - le 22 domande, due regimi|nota 23]]

---

# PARTE III — PATTERN DI CODICE DA SAPERE A MEMORIA

> [!info] Da dove viene questa lista
> Ho analizzato le **15 prove** disponibili (8 complete + le prove tematiche su condizionamento e stabilita') contando quali richieste ricorrono. Questi sono i pattern che compaiono davvero, con la loro frequenza:
>
> | Richiesta | In quante prove |
> |---|---|
> | Un **grafico** di qualche tipo | **13/15** |
> | Calcolare un **errore relativo** | **10/15** |
> | Minimi quadrati / regressione | 9/15 |
> | Indice di **condizionamento** | 7/15 |
> | Zeri di funzione | 6/15 |
> | Iterazioni / convergenza | 6/15 |
> | **Perturbazione** del termine noto | 5/15 |
> | Interpolazione di Lagrange | 4/15 |
> | Curve di livello (sistemi non lineari) | 3/15 |
> | Ordine di convergenza · costante di Lebesgue | 2/15 ciascuno |
>
> Tutti i frammenti qui sotto sono stati **eseguiti e verificati**: non sono pseudocodice.

---

## P0. L'intestazione — sempre la stessa

```python
import numpy as np
import scipy.linalg as spLin
import matplotlib.pyplot as plt
from scipy.io import loadmat
from SolveTriangular import Lsolve, Usolve
import sympy as sym
```

Scrivila **per prima**, in una cella tutta sua, prima ancora di leggere il testo. Costa dieci secondi ed elimina la categoria di errori piu' stupida (`NameError: name 'spLin' is not defined` a meta' esercizio).

---

## P1. Caricare i dati e costruire un problema di test

```python
dati = loadmat('test.mat')
A = dati["A"].astype(float)        # .astype(float) SEMPRE: MATLAB puo' salvare interi
b = dati["b"].astype(float)
```

Quando la prova chiede di **costruirsi** il termine noto in modo che la soluzione esatta sia nota:

```python
xesatta = np.ones((n, 1))
b = A @ xesatta                    # cosi' la soluzione del sistema e' (1,1,...,1)
err = np.linalg.norm(x - xesatta) / np.linalg.norm(xesatta)
```

---

## P2. I quattro modi di risolvere un sistema

```python
# --- LU (metodo diretto standard) ---
PT, L, U = spLin.lu(A);  P = PT.T          # scipy: A = PT @ L @ U
y, flag = Lsolve(L, P@b)
x, flag = Usolve(U, y)

# --- QR (piu' stabile, per A mal condizionata) ---
Q, R = spLin.qr(A)
x, flag = Usolve(R, Q.T@b)

# --- Cholesky (solo A simmetrica definita positiva) ---
L = spLin.cholesky(A, lower=True)
y, flag = Lsolve(L, b)
x, flag = Usolve(L.T, y)

# --- iterativo (grande e sparsa) ---
x, it, er_vet = gauss_seidel(A, b, np.zeros_like(b), 1e-8, 1000)

# --- verifica, sempre ---
print("residuo relativo: ", np.linalg.norm(A@x - b)/np.linalg.norm(b))
```

---

## P3. Perturbazione e i due errori relativi · *5/15 prove*

```python
b_pert = b.copy()
b_pert[0] = b[0] * 1.001                  # +0.1% sulla componente 0

y, flag = Lsolve(L, P@b_pert)             # STESSA fattorizzazione: non rifattorizzare
x_pert, flag = Usolve(U, y)

err_dati = np.linalg.norm(b_pert - b) / np.linalg.norm(b)
err_sol  = np.linalg.norm(x_pert - x)  / np.linalg.norm(x)

print("errore sui dati:      ", err_dati)
print("errore sulla soluzione:", err_sol)
print("amplificazione:", err_sol/err_dati, " vs K(A):", np.linalg.cond(A))
```

> L'amplificazione osservata deve risultare **minore** di $K(A)$. Se e' maggiore, e' un bug. → testo pronto in [[#T2. Analisi della perturbazione|T2]]

---

## P4. Grafico dell'errore in scala logaritmica · *il piu' richiesto dopo i dati*

Compare come *"rappresentare in scala logaritmica l'errore a ogni iterazione"* e *"confrontare i grafici dell'errore relativo per i tre metodi"*.

```python
plt.semilogy(range(1, len(er_vet_J)+1), er_vet_J, 'b-o', label='Jacobi')
plt.semilogy(range(1, len(er_vet_G)+1), er_vet_G, 'r-s', label='Gauss-Seidel')
plt.xlabel('iterazione'); plt.ylabel('errore relativo')
plt.legend(); plt.grid(True); plt.title('Confronto della convergenza')
plt.show()
```

`semilogy` e non `plot`: l'errore scende di ordini di grandezza, in scala lineare vedresti solo una curva schiacciata sullo zero. **In scala logaritmica una convergenza lineare e' una retta**, e la pendenza e' $\log\rho(T)$: piu' ripida = piu' veloce. E' esattamente cio' che il testo chiede di "giustificare alla luce della teoria".

Verifica sperimentale del teorema fondamentale, se la chiedono:

```python
er = np.array(er_vet)
print("rapporti errori consecutivi:", er[1:]/er[:-1], " -> rho(T) =", raggiospettrale)
```

---

## P5. Grafico di una funzione per localizzare gli zeri · *6/15*

Compare come *"si rappresenti il grafico della funzione in [-1,2] e si determini in quanti punti si annulla"*, seguito da *"si identifichi per ogni zero un intervallo che lo contenga"* (che serve poi per la bisezione).

```python
f = lambda x: x**3 - 2*x - 5
xv = np.linspace(-1, 3, 200)
plt.plot(xv, f(xv), 'b-')
plt.axhline(0, color='k', lw=0.8)          # l'asse x: senza, non "vedi" gli zeri
plt.grid(True); plt.xlabel('x'); plt.ylabel('f(x)'); plt.show()
```

Poi si leggono a occhio gli intervalli con cambio di segno e si giustifica: *"dal grafico la funzione si annulla in [1] punto; l'intervallo [2,3] contiene lo zero e in esso f(a)f(b)<0, quindi sono soddisfatte le ipotesi del metodo di bisezione"*.

---

## P6. Curve di livello a quota 0 · *sistemi non lineari, 3/15*

Il testo lo chiede cosi': *"servirsi del metodo grafico, disegnando le curve di livello corrispondenti a z=0 delle due superfici, per individuare un intorno della soluzione"*.

```python
f1 = lambda x, y: x**2 + y**2 - 4
f2 = lambda x, y: x - y

xg = np.linspace(-3, 3, 200)
yg = np.linspace(-3, 3, 200)
X, Y = np.meshgrid(xg, yg)                 # X e Y sono MATRICI (200,200)

plt.contour(X, Y, f1(X,Y), levels=[0], colors='b')
plt.contour(X, Y, f2(X,Y), levels=[0], colors='r')
plt.xlabel('x0'); plt.ylabel('x1'); plt.grid(True); plt.show()
```

`levels=[0]` e' il punto chiave: disegna **solo** la curva a quota zero, cioe' il luogo dove quella componente si annulla. **Le intersezioni fra la curva blu e quella rossa sono le soluzioni del sistema**: da li' si leggono le coordinate a occhio e si usano come $X^{(0)}$ per Newton-Raphson.

---

## P7. Interpolazione: nodi, griglia fitta, polinomio, errore · *4/15*

```python
# 1. i nodi (pochi) e i valori nei nodi
x = np.linspace(-5, 5, 9)
y = f(x)

# 2. la griglia fitta per il disegno (SEMPRE piu' fitta dei nodi)
xx = np.linspace(x.min(), x.max(), 200)

# 3. il polinomio valutato sulla griglia fitta
pol = InterpL(x, y, xx)

# 4. il disegno: funzione, polinomio, nodi
plt.plot(xx, f(xx), 'k--', label='f(x)')
plt.plot(xx, pol, 'b-', label='polinomio interpolatore')
plt.plot(x, y, 'ro', label='nodi di interpolazione')
plt.legend(); plt.show()

# 5. l'errore assoluto, quando lo chiedono (spesso in semilogy)
plt.semilogy(xx, np.abs(f(xx) - pol)); plt.title('errore assoluto |f - p|'); plt.show()
```

**Nodi di Chebyshev**, se richiesti (su $[a,b]$ generico serve la trasformazione):

```python
i = np.arange(n+1)
t = np.cos((2*i + 1)*np.pi / (2*(n+1)))     # nodi su [-1,1]
x = (a+b)/2 + (b-a)/2 * t                   # riportati su [a,b]
```

**La verifica che vale sempre**: il polinomio interpolatore passa per i nodi, quindi

```python
print("scarto nei nodi:", np.max(np.abs(InterpL(x, y, x) - y)))   # deve essere ~1e-15
```

---

## P8. Minimi quadrati: i tre modi di costruire la matrice · *9/15, il pattern piu' redditizio*

Il metodo di risoluzione **non cambia mai**: costruisci $A$ e $b$, calcoli $K_2(A)$, chiami `qrLS`. Cambia **solo come si riempiono le colonne di $A$**, e i casi sono tre.

### Caso 1 — base polinomiale (il piu' frequente)

Modello $y = a_0 + a_1x + \dots + a_gx^g$: le funzioni che moltiplicano le incognite sono $1, x, \dots, x^g$, cioe' una Vandermonde.

```python
for grado in [1, 2, 3]:
    A = np.vander(xdati, grado+1)        # numero di colonne = grado + 1
    a, residuo = qrLS(A, ydati)
    print(f"grado {grado}: residuo = {residuo}")
    plt.plot(xx, np.polyval(a, xx), label=f'grado {grado}')
```

### Caso 2 — base NON polinomiale

Esempio reale (`Varie` Es. 5): $y = a + b\,e^{-x} + c\,e^{-2x}$. Le funzioni che moltiplicano $a,b,c$ sono $1,\ e^{-x},\ e^{-2x}$: **le colonne si costruiscono a mano**.

```python
A = np.column_stack([np.ones(m), np.exp(-x), np.exp(-2*x)])
alpha, residuo = qrLS(A, y)
a, b, c = alpha.ravel()
```

> [!warning] Le due trappole del caso 2
> - **`np.vander` non si usa**: non e' un polinomio.
> - **`np.polyval` non si usa** per il grafico, per lo stesso motivo. I coefficienti che ottieni non sono coefficienti di un polinomio: valuta l'espressione a mano, `a + b*np.exp(-xv) + c*np.exp(-2*xv)`. E' l'errore in cui si cade per inerzia venendo dal caso 1.

**I numeri di quell'esercizio**, che mostrano perche' la domanda "quale approssimazione e' la migliore" ha una risposta non ovvia:

| Modello | $\Vert r\Vert_2^2$ |
|---|---|
| retta | $4.848\cdot10^{-4}$ |
| parabola | $2.365\cdot10^{-4}$ |
| **base esponenziale** | $\mathbf{1.225\cdot10^{-5}}$ |

La base esponenziale vince di **19 volte** *a parita' di numero di parametri* (tre, come la parabola). Motivo da scrivere nel commento: i dati **saturano** (da $x=2$ a $x=8$ la $y$ passa da $0.0309$ a $0.0310$), e un polinomio per $x\to\infty$ diverge sempre, mentre $a+be^{-x}+ce^{-2x}$ tende ad $a$ — infatti il valore stimato $a=0.0297$ e' proprio il plateau dei dati. **La qualita' dell'approssimazione dipende piu' dalla scelta della base che dal numero di parametri.**

### Caso 3 — curva in forma implicita (circonferenza, iperbole)

Il testo da' una curva con parametri incogniti e chiede di **imporre il passaggio** per $m$ punti. Esempi: circonferenza $x^2+y^2+a_1x+a_2y+a_3=0$ (7 maggio 2025) e iperbole $9x^2-4y^2+a_1x+a_2y+a_3=0$ (`Varie` Es. 6).

Qui la novita' e' che compaiono **termini senza incognite** ($x^2+y^2$, oppure $9x^2-4y^2$). La procedura:

1. si scrive l'equazione per il punto $i$-esimo;
2. si portano a sinistra i termini **con** le incognite, a destra quelli **senza** — cambiando loro il segno;
3. la riga $i$ di $A$ e' fatta dai coefficienti delle incognite, e $b_i$ e' il termine noto spostato.

Per l'iperbole: $9x_i^2-4y_i^2+a_1x_i+a_2y_i+a_3=0$ diventa $a_1x_i+a_2y_i+a_3 = -9x_i^2+4y_i^2$, quindi

$$\text{riga } i \text{ di } A = [\,x_i,\ y_i,\ 1\,], \qquad b_i = -9x_i^2+4y_i^2$$

```python
A = np.column_stack([x, y, np.ones(m)])
b = -9*x**2 + 4*y**2
a_star, residuo = qrLS(A, b)
```

> Il grafico di queste curve si fa in **forma parametrica**, non con `plot(x, f(x))`: la curva non e' il grafico di una funzione. Il testo di solito fornisce la parametrizzazione (per l'iperbole: $x(t)=C_0+2/\cos t$, $y(t)=C_1+3\tan t$, $t\in[-1.5,1.5]$).

### In ogni caso, il finale e' lo stesso

```python
print("norma 2 al quadrato del residuo: ", residuo)   # e' gia' il 2o output di qrLS
```

---

## P9. Stima dell'ordine di convergenza · *2/15*

```python
xk, it, v_xk = newton(f, fp, x0, 1e-6, 1e-6, 100)
print("ordine stimato:", stima_ordine(v_xk, it))     # ~2 per Newton, ~1.6 secanti, ~1 corde
```

> [!warning] Se esce `nan` o `inf`
> Verificato: con Newton su $x^3-2x-5$, **4 iterazioni danno esattamente 2.00**, ma da 5 in poi esce `inf` e poi `nan`. Il motivo: il metodo ha gia' raggiunto la precisione di macchina e le differenze fra iterati consecutivi diventano **esattamente zero**, quindi la formula calcola $\log(0/0)$. Rimedio: usare una **tolleranza piu' larga** (es. `1e-6` invece di `1e-12`) cosi' il metodo si ferma prima. Servono comunque **almeno 4 iterati**.

---

## P10. Matrice sparsa: percentuale e struttura

```python
print("non nulli: %.2f%%" % (np.count_nonzero(A)/(A.shape[0]*A.shape[1]) * 100))
plt.spy(A); plt.title('struttura di A'); plt.show()      # se chiedono di "visualizzare la struttura"
```

---

## P11. sympy: derivate per Newton e per il minimo

```python
x = sym.symbols('x')
fx = x**3 - 2*x - 5
fpx = sym.diff(fx, x)
f  = sym.lambdify(x, fx,  np)          # da espressione simbolica a funzione numerica
fp = sym.lambdify(x, fpx, np)
```

Per i sistemi non lineari (due variabili) e per il minimo:

```python
x0, x1 = sym.symbols('x0 x1')
F  = sym.Matrix([f1_sym, f2_sym])
J  = F.jacobian([x0, x1])                      # Jacobiana per newton_raphson
H  = sym.hessian(f_sym, (x0, x1))              # Hessiana per newton_raphson_minimo
F_num = sym.lambdify((x0,x1), F, np);  J_num = sym.lambdify((x0,x1), J, np)
```

---

## P13. Condizionamento e stabilita': lo schema unico degli esercizi · *5 prove*

> Gli esercizi `esercizio_condizionamento_1/_2`, `esercizio_stabilita_1/_2` e l'Esercizio 2 del **4 luglio 2024 Turno II** hanno **la stessa struttura in 6 punti**. Cambia solo la funzione. La teoria da scrivere sta in [[#T8. ⭐ Ricavare l'indice di condizionamento di una funzione|T8]] (condizionamento) e [[#T9. ⭐ Stabilita' e cancellazione numerica|T9]] (stabilita').

### Come riconoscere quale dei due hai davanti

| Il testo dice… | E' un esercizio di… | La derivazione da fare |
|---|---|---|
| "perturbare i dati", "ricavare l'indice di condizionamento" | **condizionamento** (proprieta' del **problema**) | $K=\left\vert\frac{xf'(x)}{f(x)}\right\vert$ → T8 |
| "formula piu' stabile", "cancellazione", "spacing" | **stabilita'** (proprieta' dell'**algoritmo**) | soglia con lo spacing + riscrittura algebrica → T9 |

Il discriminante concettuale: nel primo l'errore nasce **dai dati** e nessun algoritmo puo' salvarti; nel secondo il problema e' ben condizionato e l'errore lo introduce **la formula**, quindi cambiando formula sparisce.

### Lo schema in 6 punti

```python
import numpy as np
import sympy as sym
import matplotlib.pyplot as plt

k = np.arange(1, 17)

# --- 1. formula ingenua (quella del testo) --------------------------------
xk  = 1 + 10.0**(-k)                 # i dati assegnati
val = 1/(xk - 1)                     # <-- la formula diretta

# --- 2. riferimento accurato in ALTA PRECISIONE ---------------------------
#     sympy lavora in aritmetica esatta/arbitraria: e' il "valore vero"
rif = np.array([float(sym.N(1/(1 + sym.Rational(1, 10**int(kk)) - 1), 40))
                for kk in k])

# --- 3. errore relativo + grafico in scala LOGARITMICA --------------------
err = np.abs(val - rif)/np.abs(rif)

plt.semilogy(k, err, 'r-o', label='errore relativo')
plt.xlabel('k'); plt.legend(); plt.grid(True); plt.show()

# --- 4. la teoria: K oppure la soglia con lo spacing ----------------------
print("eps di macchina:", np.spacing(1.0))     # 2.22e-16
#     spacing(y) = distanza dal numero di macchina successivo ~ eps*|y|
#     cancellazione catastrofica quando  |risultato| / |termine sottratto| < eps

# --- 5. formula equivalente ma stabile ------------------------------------
val_stab = ...        # razionalizzazione, identita' trigonometrica, x1*x2 = c/a

# --- 6. confronto dei due errori sullo stesso grafico ---------------------
err_stab = np.abs(val_stab - rif)/np.abs(rif)
plt.semilogy(k, err,      'r-o', label='formula diretta')
plt.semilogy(k, err_stab, 'b-s', label='formula stabile')
plt.legend(); plt.grid(True); plt.show()
```

### I tre pezzi di codice che non hai mai usato

**Il valore di riferimento in alta precisione** — serve nel punto 2 di *tutti* questi esercizi:

```python
sym.N(espressione_sympy, 40)     # 40 cifre significative
float(sym.N(...))                # poi si riporta a float per il confronto
```
Usa `sym.Rational(1, 10**k)` e non `10.0**-k`, altrimenti il "valore vero" e' gia' un float e non e' piu' un riferimento.

**Lo spacing** — richiesto **esplicitamente** dal testo nel punto da 4 punti:

```python
np.spacing(1.0)     # 2.22e-16 : la precisione di macchina
np.spacing(y)       # la distanza fra y e il numero di macchina successivo, ~ eps*|y|
```

**La verifica sperimentale del condizionamento** (punto 4 degli esercizi di condizionamento):

```python
delta = 1e-12
xt = xk*(1 + delta)                       # dato perturbato
amplificazione = (np.abs(f(xt) - f(xk))/np.abs(f(xk))) / delta
# deve risultare  amplificazione <= K   e dello stesso ordine di grandezza
```

> [!warning] Un limite da conoscere
> Per $k$ molto grande ($x_k = 1+10^{-15}$) l'amplificazione osservata resta **molto sotto** $K$: il dato perturbato non e' piu' rappresentabile distintamente e la verifica perde senso. Non e' un errore tuo — commentalo, e' esattamente il tipo di osservazione che il punto "commentare i risultati" premia.

### La scaletta dei punti — dove conviene spendere il tempo

| Punto | Che cosa | Peso tipico |
|---|---|---|
| 1 | implementare la formula diretta | 0.5-1 |
| 2 | riferimento in alta precisione + errore relativo | 1 |
| 3 | grafico in scala logaritmica | 0.5-1 |
| **4** | **la derivazione** ($K$, oppure cancellazione + spacing) | **4** ⭐ |
| **5** | **la formula stabile, con la motivazione algebrica** | **2** ⭐ |
| 6 | reimplementare e confrontare | 1-3 |

**Piu' della meta' dei punti sta in due derivazioni su carta.** Il codice e' contorno: se il tempo stringe, scrivi prima i punti 4 e 5 in markdown e poi torni sul codice.

---

## P12. Le trappole che si ripetono

| Sintomo | Causa | Rimedio |
|---|---|---|
| `NameError: name 'spLin' is not defined` | import mancante, o `from scheletri import *` (i nomi si risolvono nel namespace del file) | scrivi P0 in cima; incolla il corpo della funzione nel notebook |
| residuo dei minimi quadrati **esce 0.0** | `spLin.qr(A, mode='economic')`: `h[n:]` e' vuoto | QR **completa**, senza `mode` |
| matrice n×n al posto di un vettore | manca `.reshape(n,1)` con vettori colonna (in `jacobi`) | controlla sempre `.shape` |
| il grafico ha l'asse y con etichette di testo | `plt.plot(x, y, 'g*', 'etichetta')`: il 4° argomento posizionale diventa una serie di dati | usa `label='etichetta'` |
| `AttributeError: 'function' object has no attribute 'val'` | `np.poly.val` invece di `np.polyval` | `np.polyval`, tutto attaccato |
| errore di dimensioni in `Lsolve`/`Usolve` | termine noto del sistema sbagliato (`b` invece di `b1`) | controlla i pedici quando ripeti lo stesso blocco |
| il grafico esce assurdo senza errori | `np.polynomial.polynomial.polyval` (potenze **crescenti**) | usa `np.polyval` |

→ catalogo completo: [[00c Python e grafici - guida essenziale per l'esame#Parte 7 — Catalogo degli errori: messaggio → causa → rimedio|00c · Parte 7]]

---

# PARTE IV — TESTI MODELLO

> [!tip] Come usarli
> Sono giustificazioni **già scritte**, da adattare ai numeri che ti escono. Sotto pressione non si inventa una frase teorica: si adatta una che si conosce. Sostituisci i valori fra parentesi quadre.

---

## T1. Scelta del metodo per un sistema lineare

**Caso iterativo** (grande, sparsa, dominanza diagonale)

> La matrice è quadrata di ordine [600], quindi non si tratta di un problema ai minimi quadrati. È grande e sparsa (elementi non nulli: [7.76%]), quindi un metodo diretto sarebbe troppo costoso e si preferisce un metodo iterativo. Non è simmetrica, ma è a **dominanza diagonale stretta per righe**: per il teorema relativo, sia Jacobi sia Gauss-Seidel convergono. Scelgo **Gauss-Seidel** perché utilizza le componenti già aggiornate nella stessa iterazione ed è quindi più veloce. Il raggio spettrale della matrice di iterazione vale [0.073] e la convergenza è avvenuta in [9] iterazioni.

**Caso diretto ben condizionato**

> La matrice è quadrata [30×30], piccola e densa: si usa un metodo diretto. Non è simmetrica, quindi Cholesky non è applicabile. L'indice di condizionamento vale $K_2(A)=[1.25]$, quindi il problema è **ben condizionato** e la fattorizzazione **LU** con pivoting è adeguata: non serve la maggiore stabilità della QR, che costerebbe il doppio.

**Caso diretto mal condizionato**

> La matrice è quadrata [30×30], piccola e densa e non simmetrica. L'indice di condizionamento vale $K_2(A)=[2\cdot10^4]$, quindi il problema è **mal condizionato**. Scelgo la fattorizzazione **QR**, numericamente più stabile della LU: gli elementi di $R$ crescono al più come $\sqrt n$, mentre quelli di $U$ possono crescere come $2^{n-1}$.

---

## T2. Analisi della perturbazione

> Ho perturbato dello 0.1% la componente 0-esima del termine noto e risolto nuovamente il sistema con lo stesso metodo, riutilizzando la fattorizzazione già calcolata. L'errore relativo sui dati è $\frac{\|\delta b\|}{\|b\|}=[1.7\cdot10^{-4}]$, mentre l'errore relativo sulla soluzione è $\frac{\|\delta x\|}{\|x\|}=[0.387]$: l'amplificazione osservata vale quindi [2298].
>
> Il risultato è coerente con il **teorema di perturbazione** per i sistemi lineari
> $$\frac{\|\delta x\|}{\|x\|} \le K(A)\,\frac{\|\delta b\|}{\|b\|}$$
> che fornisce una **maggiorazione**: l'amplificazione osservata resta infatti al di sotto del limite teorico $K(A)=[2\cdot10^4]$. Il fatto che sia sensibilmente minore non è un'anomalia: $K(A)$ corrisponde al caso peggiore, ottenuto per perturbazioni nella direzione più sfavorevole, mentre la perturbazione applicata agisce su una sola componente.

**Variante per il caso ben condizionato**: *"…l'amplificazione osservata vale [1.11], prossima a $K(A)=[1.25]$ e comunque inferiore: essendo la matrice ben condizionata, l'errore sui dati non viene amplificato in modo significativo e la soluzione resta affidabile."*

> [!warning] Il controllo da fare sempre
> Se l'amplificazione osservata risultasse **maggiore** di $K(A)$, non è un risultato da commentare: è un **bug**. Il teorema garantisce che non possa succedere.

---

## T3. Teorema dell'errore di interpolazione

> **Teorema.** Sia $f\in C^{n+1}[a,b]$ e sia $p_n$ il polinomio che interpola $f$ su $n+1$ nodi distinti $x_0,\dots,x_n\in[a,b]$. Allora per ogni $\bar x\in[a,b]$ esiste $\xi\in(a,b)$ tale che
> $$f(\bar x)-p_n(\bar x)=\frac{\omega_{n+1}(\bar x)}{(n+1)!}f^{(n+1)}(\xi), \qquad \omega_{n+1}(x)=\prod_{i=0}^n(x-x_i)$$
>
> **Commento.** L'errore dipende da tre fattori:
> - $\omega_{n+1}(\bar x)$ dipende **solo dalla posizione dei nodi** e dal punto di valutazione. Si annulla nei nodi, quindi l'errore è nullo sui dati; con nodi equispaziati cresce molto agli estremi dell'intervallo (**fenomeno di Runge**). È l'unico fattore controllabile e si minimizza scegliendo i **nodi di Chebyshev**.
> - $(n+1)!$ cresce rapidamente e tende a ridurre l'errore all'aumentare del grado.
> - $f^{(n+1)}(\xi)$ dipende dalla funzione e non è controllabile; può crescere **più rapidamente del fattoriale**, quindi aumentare il grado **non garantisce** una diminuzione dell'errore.
>
> Poiché $\xi$ non è noto, in pratica si sostituisce con il caso peggiore ottenendo la **maggiorazione**
> $$|f(\bar x)-p_n(\bar x)|\le\frac{|\omega_{n+1}(\bar x)|}{(n+1)!}\max_{x\in[a,b]}|f^{(n+1)}(x)|$$
>
> **Nel caso in esame** i dati sono sperimentali: la funzione $f$ che li ha generati non è nota, quindi $f^{(n+1)}$ non è calcolabile e la stima, pur valida, non è utilizzabile in pratica. Inoltre i dati sono affetti da errori di misura e l'interpolazione forza il polinomio a passare esattamente per essi, amplificando il rumore: per questo, con dati sperimentali, è preferibile un'approssimazione ai minimi quadrati.

---

## T4. Interpolazione contro minimi quadrati

> Il polinomio interpolatore di grado [15] passa esattamente per tutti i [16] dati, ma questo è un vantaggio solo se i dati sono esatti. Trattandosi di misure sperimentali, affette da errore, l'interpolazione riproduce anche il rumore. L'approssimazione ai minimi quadrati, al contrario, non passa per i punti ma coglie l'andamento complessivo, ed è quindi più adatta a un modello predittivo. Il confronto fra i residui conferma il miglioramento passando dalla retta ($\|r\|^2=[418.05]$) alla cubica ($\|r\|^2=[103.63]$), coerentemente con il fatto che i dati mostrano una crescita non lineare che una retta non può descrivere.

---

## T5. Perché non le equazioni normali

> Le equazioni normali richiedono di formare la matrice $A^TA$, il cui indice di condizionamento è il **quadrato** di quello di $A$: $K_2(A^TA)=K_2(A)^2$. In questo caso $K_2(A)=[8.9\cdot10^9]$, quindi $K_2(A^TA)\approx[8\cdot10^{19}]$, ben oltre il reciproco della precisione di macchina: la fattorizzazione di Cholesky risulterebbe inaffidabile o fallirebbe. Il metodo **QR-LS** opera direttamente su $A$ senza mai formare $A^TA$, e per questo è numericamente stabile anche in presenza di forte malcondizionamento.

---

## T6. Confronto Jacobi / Gauss-Seidel

> Entrambi i metodi convergono, essendo la matrice a dominanza diagonale stretta. **Gauss-Seidel è più veloce** perché nel calcolo della componente $i$-esima utilizza le componenti $1,\dots,i-1$ già aggiornate nella stessa iterazione, anziché quelle del passo precedente. Per matrici tridiagonali vale esattamente $\rho(T_{GS})=\rho(T_J)^2$, quindi Gauss-Seidel dimezza il numero di iterazioni. L'unico vantaggio di Jacobi è di essere **parallelizzabile**: ogni componente si calcola indipendentemente dalle altre, cosa impossibile in Gauss-Seidel per via della dipendenza sequenziale.

---

## T7. Verifica della soluzione (da aggiungere sempre)

> La correttezza della soluzione è confermata dal residuo relativo $\frac{\|Ax-b\|}{\|b\|}=[2.7\cdot10^{-16}]$, dell'ordine della precisione di macchina.

Ricorda però: **residuo piccolo non implica errore piccolo** se $K(A)$ è grande, perché $\frac{\|e\|}{\|x\|}\le K(A)\frac{\|r\|}{\|b\|}$. Se il sistema è mal condizionato, aggiungi: *"…tuttavia, essendo $K(A)$ elevato, un residuo piccolo non garantisce di per sé un errore piccolo sulla soluzione."*

---

## T8. ⭐ Ricavare l'indice di condizionamento di una funzione

> **Richiesto in 3 prove** — 4 luglio 2024 Turno II (**3 punti**, esame vero), `esercizio_condizionamento_1` (**4 punti**) e `_2`. La formulazione e' sempre *"**ricavare** la formula"*: non basta scriverla, va derivata.

> Sia $f$ differenziabile e sia $\tilde x = x+\delta x$ una perturbazione dei dati, con $\delta x$ piccola. Sviluppando in serie di Taylor al primo ordine:
> $$f(x+\delta x) = f(x) + \delta x\, f'(x) + o(\delta x)$$
> Trascurando $o(\delta x)$ perche' $\delta x$ e' piccola:
> $$f(\tilde x) - f(x) \approx (\tilde x - x)\,f'(x)$$
> Si divide per $f(x)$ per passare all'errore **relativo sul risultato**:
> $$\frac{f(\tilde x)-f(x)}{f(x)} \approx \frac{(\tilde x - x)\,f'(x)}{f(x)}$$
> Si moltiplica e divide il membro destro per $x$, in modo da far comparire l'errore relativo **sui dati**:
> $$\left|\frac{f(\tilde x)-f(x)}{f(x)}\right| \approx \underbrace{\left|\frac{x\,f'(x)}{f(x)}\right|}_{K}\cdot\left|\frac{\tilde x - x}{x}\right|$$
> Il fattore che moltiplica l'errore relativo sui dati e' per definizione l'indice di condizionamento:
> $$K = \left|\frac{x\,f'(x)}{f(x)}\right|$$
> Se $K$ e' grande il problema e' **mal condizionato**: piccole perturbazioni sui dati producono grandi variazioni sul risultato, **indipendentemente dall'algoritmo** usato per calcolarlo.

**Il passaggio che quasi tutti saltano** e' l'ultimo: moltiplicare e dividere per $x$. Senza, ottieni un legame fra errore relativo sull'output ed errore **assoluto** sull'input, che non e' l'indice di condizionamento. E' li' che si perde il punto.

**La regola generale da aggiungere**, se c'e' spazio: $f(x)$ sta al denominatore, quindi **valutare una funzione vicino a un suo zero e' intrinsecamente mal condizionato**. E' il caso di $\cos x$ vicino a $\pi/2$ (esempio svolto con i numeri in [[03 Condizionamento e stabilita#3. ⭐ La derivazione da saper fare a memoria|nota 03 §3]]).

---

## T9. ⭐ Stabilita' e cancellazione numerica

> **Richiesto in 3 prove** — `esercizio_stabilita_1`, `esercizio_stabilita_2`, 4 luglio 2024 Turno II. La richiesta e' sempre in **tre parti**, e vanno fatte tutte e tre.

### Lo schema in tre parti

**(1) Dove avviene la cancellazione.**

> La cancellazione di cifre significative si verifica quando si **sottraggono due numeri quasi uguali**: le cifre significative comuni si elidono, il risultato conserva solo le poche cifre in cui i due numeri differivano, e l'errore relativo sul risultato viene amplificato enormemente. Non e' un problema di condizionamento del problema, ma di **stabilita' dell'algoritmo**: la formula scelta introduce l'errore, non i dati.

**(2) Per quali valori — la derivazione con lo spacing.**

Il criterio: la cancellazione diventa catastrofica quando il **risultato esatto** scende sotto la precisione con cui e' rappresentato il termine da cui si sottrae. Cioe' quando

$$\frac{|\text{risultato}|}{|\text{termine sottratto}|} \lesssim \varepsilon_{mach}$$

**(3) La formula stabile, con la motivazione algebrica.**

> Si riscrive l'espressione in una forma **matematicamente equivalente** che **elimina la sottrazione fra numeri vicini** (tipicamente razionalizzando, o usando un'identita' trigonometrica). Il risultato matematico e' identico, ma il calcolo non contiene piu' la sottrazione critica, quindi l'algoritmo diventa stabile.

### I due casi che ricorrono, con le soglie verificate

**Caso A — equazione di secondo grado** $x^2-2kx+1=0$, radici $x_\pm = k \pm \sqrt{k^2-1}$.

La radice **piccola** $x_- = k-\sqrt{k^2-1}$ e' instabile: per $k$ grande $\sqrt{k^2-1}\approx k-\frac{1}{2k}$, quindi si sottraggono due numeri entrambi $\approx k$ per ottenere un risultato $\approx\frac{1}{2k}$.

$$\frac{1/(2k)}{k} = \frac{1}{2k^2} \lesssim \varepsilon_{mach} \quad\Longrightarrow\quad k \gtrsim \sqrt{\frac{1}{2\varepsilon_{mach}}} \approx 4.7\cdot10^{7}$$

**Formula stabile**: dal prodotto delle radici $x_+x_-=1$ (termine noto diviso coefficiente direttivo), si ricava
$$x_- = \frac{1}{k+\sqrt{k^2-1}}$$
che contiene solo una **somma** fra numeri positivi. Equivalente e' razionalizzare moltiplicando per $\frac{k+\sqrt{k^2-1}}{k+\sqrt{k^2-1}}$.

| $k$ | errore relativo formula diretta | formula stabile |
|---|---|---|
| $10^4$ | $8.6\cdot10^{-9}$ | $1.6\cdot10^{-16}$ |
| $10^6$ | $7.6\cdot10^{-6}$ | $4.1\cdot10^{-17}$ |
| $10^7$ | $5.8\cdot10^{-3}$ | $1.0\cdot10^{-16}$ |
| $10^8$ | **1.0** (risultato 0.0) | $4.1\cdot10^{-18}$ |

**Caso B — calcolo di** $1-\cos(x)$ **per $x$ piccolo.**

Per $x\to0$ si ha $\cos x\to1$: si sottraggono due numeri quasi uguali. Il risultato esatto vale $\approx\frac{x^2}{2}$, quindi

$$\frac{x^2/2}{1} \lesssim \varepsilon_{mach} \quad\Longrightarrow\quad x \lesssim \sqrt{2\varepsilon_{mach}} \approx 2.1\cdot10^{-8}$$

**Formula stabile**: dall'identita' di bisezione $1-\cos x = 2\sin^2\!\big(\frac{x}{2}\big)$, che non contiene sottrazioni.

| $x$ | errore relativo formula diretta | $2\sin^2(x/2)$ |
|---|---|---|
| $10^{-4}$ | $5.2\cdot10^{-9}$ | $1.7\cdot10^{-16}$ |
| $10^{-6}$ | $8.9\cdot10^{-5}$ | $9.1\cdot10^{-17}$ |
| $10^{-7}$ | $8.0\cdot10^{-4}$ | $1.1\cdot10^{-16}$ |
| $10^{-8}$ | **1.0** (risultato 0.0) | $1.1\cdot10^{-16}$ |

> [!note] Le soglie sono verificate
> In entrambi i casi la soglia teorica ricavata con lo spacing coincide con quella osservata numericamente: la formula diretta collassa esattamente a $k=10^8$ (previsto $4.7\cdot10^7$) e a $x=10^{-8}$ (previsto $2.1\cdot10^{-8}$). Se all'esame ricavi la soglia e poi la ritrovi nel grafico, dillo esplicitamente: e' la chiusura che il testo chiede con *"giustificare i risultati"*.

### La frase che lega tutto

> Il problema e' **ben condizionato** (l'indice di condizionamento resta modesto), ma l'algoritmo basato sulla formula diretta e' **instabile**, perche' introduce una sottrazione fra numeri quasi uguali. La formula alternativa e' matematicamente equivalente ma numericamente stabile: essendo il problema lo stesso, tutta la differenza osservata negli errori e' imputabile all'**algoritmo**, non al condizionamento del problema.

E' la distinzione condizionamento/stabilita' del Blocco A applicata a un caso concreto: la stessa che compare, sui sistemi lineari, nel confronto LU contro QR sulla matrice di Wilkinson.

---

## T10. Newton-Raphson per il minimo (domanda teorica)

> **Richiesta in 2 prove** — Simulazione III (**2 punti**) e 4 luglio 2024 Turno I, sempre come *"descrivere **teoricamente** la variante"*. Non serve scrivere codice: la funzione non è nello scheletro d'esame.

> Per calcolare il minimo di una funzione non lineare $f:\mathbb{R}^n\to\mathbb{R}$ si sfrutta il fatto che nei punti di minimo il gradiente si annulla: il problema di minimizzazione si riconduce quindi alla **soluzione del sistema non lineare** $\nabla f(X)=0$, al quale si applica il metodo di Newton-Raphson.
>
> Nella trasposizione, il **gradiente prende il posto di $F$** e la **matrice Hessiana prende il posto della Jacobiana** — il che è naturale, poiché l'Hessiana è per definizione la Jacobiana del gradiente. L'iterazione diventa
> $$H\big(X^{(k)}\big)\,s^{(k)} = -\nabla f\big(X^{(k)}\big), \qquad X^{(k+1)} = X^{(k)} + s^{(k)}$$
> cioè a ogni passo si risolve un sistema lineare di matrice $H(X^{(k)})$ e termine noto $-\nabla f(X^{(k)})$, e si aggiorna l'iterato sommando il passo $s^{(k)}$.
>
> Va osservato che annullare il gradiente individua un punto **stazionario**, che può essere un minimo, un massimo o un punto di sella. Per garantire che si tratti di un minimo occorre che l'**Hessiana sia definita positiva** nel punto trovato: è l'analogo, in più variabili, della condizione sulla derivata seconda positiva nel caso scalare. La condizione serve anche all'algoritmo, perché con $H$ definita positiva il sistema lineare è ben posto e la direzione $s^{(k)}$ è effettivamente di discesa.

**Il collegamento da aggiungere se c'è spazio.** Nel caso quadratico $F(x)=\tfrac12x^TAx-b^Tx$ con $A$ simmetrica definita positiva — cioè il problema del Blocco C — l'Hessiana è **costante** e vale $A$, e il gradiente è il residuo $Ax-b$. L'iterazione si riduce a $A\,s = -(Ax^{(0)}-b)$, che fornisce direttamente la soluzione esatta: **Newton converge in un solo passo**. È la conferma che i metodi iterativi di discesa servono proprio quando la funzione **non** è quadratica.

---

## In dieci righe

1. **Ogni Esercizio 1 comincia con le cinque domande** ([[#F2. Le cinque domande davanti a una matrice|F2]]): forma, sparsità, simmetria, condizionamento, dominanza.
2. Rettangolare → minimi quadrati. Quadrata grande sparsa → iterativo. Quadrata piccola → diretto, e $K_2$ decide LU o QR.
3. $\rho(T)<1$ è **necessaria e sufficiente**; dominanza e SDP sono solo **sufficienti**.
4. Gauss-Seidel batte Jacobi in velocità, Jacobi batte Gauss-Seidel in parallelizzabilità.
5. $K(A)$ è una **maggiorazione**: l'amplificazione osservata deve starci sotto, non uguagliarla.
6. $K_2(A^TA)=K_2(A)^2$ è il motivo per cui esiste QR-LS.
7. Il residuo dei minimi quadrati è $\|h_2\|^2$, la parte di $b$ fuori dallo spazio delle colonne.
8. Il teorema dell'errore di interpolazione ha **tre fattori**, e solo $\omega_{n+1}$ è controllabile.
9. Con dati sperimentali si approssima, non si interpola.
10. Metà delle domande aperte di IA è discesa del gradiente: la sai già, in un'altra lingua.
