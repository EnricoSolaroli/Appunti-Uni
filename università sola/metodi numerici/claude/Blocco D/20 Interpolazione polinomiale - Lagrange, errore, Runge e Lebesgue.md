# Interpolazione polinomiale: Lagrange, errore, Runge e Lebesgue

> **Blocco D · ✅ chiuso il 2 settembre.** Il 10 gennaio 2025 si svolge **per intero e cronometrato sabato 5**.
> 📖 **Ordine di lettura**: questa nota viene **dopo** la [[19 Minimi quadrati - equazioni normali, QR-LS e SVD-LS|19]] (minimi quadrati) — e' l'ordine del corso: minimi quadrati (Lab 5 maggio) → interpolazione (Lab 12 maggio).
> Fonte: `LezioneInterpolazionePolinomiale.pdf` · Laboratorio: **Esercitazione 12 (12/5)**, Esercizi 1-6
> Buchi: `plagr` (5), `InterpL` (3) = **8 su 116**
> ⭐⭐ **Il Teorema dell'errore ([[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue#6. ⭐⭐ Il Teorema dell'errore|§6]]) e' la singola voce di teoria piu' redditizia del blocco**: e' stato chiesto nell'esame del **10 gennaio 2025 (3 punti)** e nella **Simulazione I (4 punti)**, con la stessa formulazione.

---

## 1. Il problema

Date $n+1$ coppie $(x_i,y_i)$, $i=0,\dots,n$, con **nodi distinti** $x_i \ne x_k$ per $i\ne k$, si cerca il polinomio

$$P_n(x) = \alpha_0 + \alpha_1 x + \dots + \alpha_n x^n \;\in\; \mathbb{P}_n[x]$$

tale che valgano le **condizioni di interpolazione**

$$P_n(x_i) = y_i, \qquad i=0,\dots,n$$

Le $x_i$ sono i **nodi**, le $y_i$ le valutazioni del fenomeno in quei punti.

> 📌 **Interpolazione contro estrapolazione.** Se il punto $\bar{x}$ in cui valuti sta dentro $[\min x_i, \max x_i]$ si parla di **interpolazione**; se sta fuori, di **estrapolazione** — e lì il polinomio non ha nessuna garanzia, perche' il teorema dell'errore richiede $\bar{x}\in[a,b]$.

**Conta il numero**: $n+1$ punti danno un polinomio di grado esattamente $n$. Tre punti → parabola, quattro punti → cubica.

---

## 2. La prima strada: Vandermonde (e perche' si abbandona)

Imporre le $n+1$ condizioni genera un sistema lineare quadrato $A\alpha=y$ con

$$A=\begin{bmatrix}1 & x_0 & x_0^2 & \dots & x_0^n\\ 1 & x_1 & x_1^2 & \dots & x_1^n\\ \vdots & & & & \vdots\\ 1 & x_n & x_n^2 & \dots & x_n^n\end{bmatrix}$$

che e' la **matrice di Vandermonde** — la stessa dell'Esercizio 1 del Laboratorio 9.

> ### Esistenza e unicita'
> La matrice di Vandermonde ha **sempre rango massimo**, purche' i nodi siano distinti. Quindi:
> **il polinomio interpolatore esiste sempre ed e' unico.**

Questo e' il risultato teorico da citare, e ha una conseguenza pratica che l'esame ha gia' usato: se costruisci il polinomio in due modi diversi (risolvendo il sistema, oppure con la forma di Lagrange) **devi trovare lo stesso polinomio**.

**Ma la strada di Vandermonde non si usa.** Il motivo e' il condizionamento:

| $n$ | nodi | $K_2(A)$ |
|---|---|---|
| 3 | equidistanti in $[0,1]$ | $\approx 10^2$ |
| 7 | equidistanti in $[0,1]$ | $\approx 2.7\cdot10^5$ |

La crescita e' rapidissima: risolvere quel sistema e' un **problema mal condizionato**, quindi molto sensibile alle inevitabili perturbazioni sui dati.

> 🔑 **La diagnosi che porta alla soluzione**: il problema e' che le funzioni base $\phi_j(x)=x^j$ **non sono legate ai nodi**. L'idea e' cambiare base, costruendone una a partire dai nodi stessi, in modo che la matrice del sistema diventi l'**identita'**.

---

## 3. ⭐ La base di Lagrange

Si cercano $n+1$ polinomi di grado $n$, $L_j^{(n)}(x)$, che soddisfino

$$\boxed{L_j^{(n)}(x_i) = \delta_{ij} = \begin{cases}1 & \text{se } i=j\\ 0 & \text{se } i\ne j\end{cases}}$$

Con questa base, la matrice del sistema di interpolazione **diventa l'identita'** e il vettore dei coefficienti coincide con il termine noto: $\alpha = y$. Niente sistema da risolvere.

### Come si costruiscono

$L_j^{(n)}$ deve annullarsi in **tutti** i nodi tranne $x_j$: deve quindi contenere i fattori $(x-x_k)$ per ogni $k\ne j$.

$$L_j^{(n)}(x) = c\,(x-x_0)(x-x_1)\cdots(x-x_{j-1})(x-x_{j+1})\cdots(x-x_n)$$

La costante $c$ si determina imponendo $L_j^{(n)}(x_j)=1$:

$$c\prod_{k\ne j}(x_j-x_k) = 1 \;\Longrightarrow\; c = \frac{1}{\prod_{k\ne j}(x_j-x_k)}$$

e quindi

$$\boxed{L_j^{(n)}(x) = \prod_{\substack{k=0\\k\ne j}}^{n}\frac{x-x_k}{x_j-x_k}}$$

**Numeratore**: il prodotto degli $(x-x_k)$, cioe' un polinomio che ha per zeri tutti i nodi tranne $x_j$.
**Denominatore**: lo stesso prodotto valutato in $x_j$, cioe' un numero.

![[base_lagrange.png]]

A sinistra i quattro polinomi base per i nodi $\{0,1,2,3\}$: ciascuno vale **1 nel proprio nodo e 0 in tutti gli altri**. A destra la conseguenza che serve piu' avanti.

### La proprieta' di partizione dell'unita'

$$\sum_{j=0}^{n} L_j^{(n)}(x) = 1 \qquad \forall x\in[x_0,x_n]$$

Non solo nei nodi: **per ogni $x$**. Serve nel [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue#9. ⭐ La costante di Lebesgue|§9]] per dimostrare che $\Lambda_n\ge1$.

---

## 4. Il polinomio interpolatore in forma di Lagrange

$$\boxed{P_n(x) = \sum_{j=0}^{n} y_j\,L_j^{(n)}(x)}$$

I coefficienti **sono i dati stessi**. La verifica e' immediata: valutando in $x_i$, l'unico termine che sopravvive e' quello con $j=i$, che vale $y_i\cdot 1$.

$$P_n(x_i) = y_0 L_0(x_i) + \dots + y_i\underbrace{L_i(x_i)}_{=1} + \dots + y_n L_n(x_i) = y_i$$

### Costo computazionale

Ogni $L_j^{(n)}$ richiede $n$ moltiplicazioni per il numeratore e $n$ per il denominatore: $2n$. Ce ne sono $n+1$, piu' $n+1$ moltiplicazioni per la sommatoria. Valutare $P_n$ **in un punto** costa dunque $O(2n^2)$; in $M$ punti, $O(2n^2M)$.

> ⚠️ **Il limite della forma di Lagrange**: se dopo aver costruito il polinomio aggiungi una coppia $(x_{n+1},y_{n+1})$, devi **ricostruire da zero tutte** le funzioni base, perche' ciascuna dipende da *tutti* i nodi. Il polinomio di **Newton** risolve questo problema, con costo $O(n^2/2 + nM)$. E' l'unica cosa da sapere su Newton: esiste e serve a questo.

---

## 5. Il codice

> 🐍 Il grafico curva + nodi + polinomio, passo per passo: [[00c Python e grafici - guida essenziale per l'esame#Parte 6 — I grafici|00c · Parte 6, Ricetta 1]].


### `plagr(xnodi, j)` — i coefficienti di $L_j$

```python
def plagr(xnodi, j):
    xzeri = np.zeros_like(xnodi)
    n = xnodi.size
    if j == 0:
        xzeri = xnodi[1:n]                            # tutti tranne il primo
    else:
        xzeri = np.append(xnodi[0:j], xnodi[j+1:n])   # tutti tranne il j-esimo
    num = np.poly(xzeri)              # polinomio che ha per zeri xzeri
    den = np.polyval(num, xnodi[j])   # quel polinomio valutato in x_j
    p = num/den
    return p
```

Le due funzioni numpy sono **l'una l'inversa dell'altra** rispetto al ruolo:

- `np.poly(zeri)` → dati gli **zeri**, restituisce i **coefficienti** del polinomio monico che li ha per radici;
- `np.polyval(p, x)` → dati i **coefficienti** e un punto, restituisce il **valore**.

Sono le due funzioni che il testo del laboratorio suggerisce esplicitamente.

> ⚠️ **Perche' il caso `j == 0` e' separato**: `np.append(xnodi[0:0], xnodi[1:n])` funzionerebbe comunque, perche' `xnodi[0:0]` e' vuoto. Il ramo separato e' cosmetico, ma e' nello scheletro e va rispettato.
> ⚠️ `xzeri = np.zeros_like(xnodi)` all'inizio e' inutile — viene sovrascritto subito. Anche questo e' codice della prof: non toccarlo.

### `InterpL(x, y, xx)` — il polinomio valutato in `xx`

```python
def InterpL(x, y, xx):
    n = x.size          # numero di nodi
    m = xx.size         # numero di punti di valutazione
    L = np.zeros((m, n))
    for j in range(n):
        p = plagr(x, j)                  # coefficienti di L_j
        L[:, j] = np.polyval(p, xx)      # L_j valutato in TUTTI i punti xx
    pol = L @ y
    return pol
```

**La struttura da capire**: `L` e' una matrice $m\times n$ in cui la colonna $j$ contiene $L_j$ valutato in tutti gli `xx`. Il prodotto `L @ y` esegue in un colpo solo la sommatoria $\sum_j y_j L_j(x)$ per **ogni** punto di valutazione. E' la traduzione matriciale esatta della formula.

> ⚠️ La forma di `L` e' `(m, n)` — **punti di valutazione per righe, nodi per colonne**. Invertirle e' l'errore piu' facile: `L @ y` fallirebbe con un errore di dimensioni, quindi almeno te ne accorgi.

---

## 6. ⭐⭐ Il Teorema dell'errore

> 🖼️ I tre fattori disegnati, e perche' $\omega_{n+1}$ e' l'unica leva: [[22 Blocco D in figure - i concetti chiave#1. ⭐⭐ Il teorema dell'errore: leggerlo, non recitarlo|22 §1]].

> 📐 Il teorema e' un'**uguaglianza** con $\xi$ ignoto: diventa maggiorazione solo quando sostituisci $f^{(n+1)}(\xi)$ col massimo. Il passaggio, e come commentarlo: [[00d Le maggiorazioni - come si leggono#5. La distinzione che vale punti: uguaglianza contro maggiorazione|00d · Le maggiorazioni]].

**Questa e' la voce da 3-4 punti che compare in due prove su otto.**

> ### Teorema dell'errore
> Siano date le coppie $(x_i,y_i)$, $i=0,\dots,n$, con
> $$a\equiv x_0 < x_1 < \dots < x_n \equiv b$$
> e $y_i = f(x_i)$ valori assunti da una funzione $f$ definita in $[a,b]$ e **continua insieme alle sue derivate fino all'ordine $n+1$**, cioe' $f\in C^{n+1}[a,b]$.
> Sia $P_n$ il polinomio di grado $n$ che interpola tali coppie e sia $\bar x\in[a,b]$. Allora
> $$\boxed{E(\bar x) = f(\bar x) - P_n(\bar x) = \frac{1}{(n+1)!}\,\omega_{n+1}(\bar x)\,f^{(n+1)}(\xi)}$$
> con $\xi\in(a,b)$ e $\;\omega_{n+1}(\bar x) = (\bar x - x_0)(\bar x - x_1)\cdots(\bar x - x_n)$.

### Come commentare la formula — e' questo che vale i punti

Il testo d'esame dice *"si definisca teoricamente da cosa dipende l'errore ... commentando opportunamente la formula"*. La risposta ha **tre fattori**, e vanno commentati tutti e tre:

| fattore | da cosa dipende | cosa puoi farci |
|---|---|---|
| $f^{(n+1)}(\xi)$ | dalla **regolarita' della funzione** che ha generato i dati | **niente**: e' un dato del problema |
| $\omega_{n+1}(\bar x)$ | dalla **disposizione dei nodi** sull'asse delle ascisse | **tutto**: e' l'unica leva → [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue#8. I nodi di Chebyshev|§8]], Chebyshev |
| $\frac{1}{(n+1)!}$ | dal **grado** | cresce con $n$ e tende a smorzare, ma non basta da solo |

### Le due conseguenze immediate

**L'errore e' nullo nei nodi.** Se $\bar x = x_i$, allora $\omega_{n+1}(x_i)$ contiene il fattore $(x_i - x_i)=0$. Coerente con le condizioni di interpolazione.

**L'errore e' nullo se $f$ e' un polinomio di grado $\le n$.** In quel caso $f^{(n+1)}\equiv 0$. E' esattamente l'**Esercizio 2 del Laboratorio 12/5**: interpolare $f(x)=3x^3+2x^2+2x-1$ con 4 nodi ($n=3$) restituisce $f$ stessa, a meno degli errori di arrotondamento. Il testo dice *"giustificare i risultati ottenuti"*: la giustificazione e' questa riga.

> 📌 **L'ipotesi $f\in C^{n+1}$ non e' decorativa.** Se $f$ non e' abbastanza derivabile — per esempio $f(x)=|x|$, uno dei casi test dell'Esercizio 4 — il teorema **non si applica** e non hai nessuna stima dell'errore. Citare questo quando la funzione test non e' liscia e' il genere di dettaglio che distingue una risposta completa.

---

## 7. Convergenza e il fenomeno di Runge

La domanda naturale e': aumentando il numero di nodi, e quindi il grado, il polinomio si avvicina alla funzione?

**In generale no**, se i nodi sono equidistanti.

![[runge_equi_vs_chebyshev.png]]

Sulla **funzione di Runge**

$$f(x)=\frac{1}{1+25x^2}, \qquad x\in[-1,1]$$

con nodi equidistanti si ha una buona approssimazione **al centro** dell'intervallo e **fitte oscillazioni ai bordi**, che peggiorano al crescere di $n$:

| $n$ | $\Vert f-p_n\Vert_\infty$ equispaziati | $\Vert f-p_n\Vert_\infty$ Chebyshev |
| --: | ------------------------------: | ---------------------------: |
|   5 |                           0.433 |                        0.556 |
|  10 |                            1.92 |                        0.109 |
|  15 |                            2.11 |                        0.083 |
|  20 |                            59.8 |                       0.0153 |
|  30 |                        **2389** |                   **0.0028** |

Da leggere così: a $n=5$ i due sono equivalenti, anzi Chebyshev e' leggermente peggio. Da $n=10$ in poi le strade divergono, e a $n=30$ ci sono **sei ordini di grandezza** di differenza. Il polinomio su nodi equidistanti **non converge**.

---

## 8. I nodi di Chebyshev

Dei tre fattori del teorema dell'errore, l'unico su cui hai controllo e' $\omega_{n+1}$. L'idea e' scegliere i nodi che lo rendono **minimo in modulo** su tutto l'intervallo.

> Si dimostra che se i nodi si scelgono come **zeri dei polinomi di Chebyshev**
> $$x_i = \cos\!\left(\frac{1+2i}{2(n+1)}\pi\right), \qquad i=0,\dots,n$$
> allora $\omega_{n+1}$ risulta minimo e, al crescere del numero di nodi, si ha la **convergenza** del polinomio interpolatore alla funzione.

Su un intervallo generico $[a,b]$ la formula del laboratorio è la traslazione della precedente:

$$x_i = \frac{a+b}{2} + \frac{b-a}{2}\cos\!\left(\frac{(2i+1)\pi}{2(n+1)}\right)$$

```python
i = np.arange(n+1)
xcheb = (a+b)/2 + (b-a)/2*np.cos((2*i+1)*np.pi/(2*(n+1)))
```

**Perche' funzionano, in una frase**: i nodi di Chebyshev sono le proiezioni di punti equispaziati su una semicirconferenza, quindi si **infittiscono verso gli estremi** dell'intervallo — proprio dove le oscillazioni si formano.

---

## 9. ⭐ La costante di Lebesgue

> 🖼️ La funzione di Lebesgue disegnata, con i picchi agli estremi: [[22 Blocco D in figure - i concetti chiave#4. ⭐ La costante di Lebesgue: il condizionamento dell'interpolazione|22 §4]].

**Chiesta esplicitamente il 10 gennaio 2025, 3 punti**: *"si calcoli la costante di Lebesgue per il problema di interpolazione in esame e si dica che ruolo svolge"*.

### Da dove nasce

Si perturbano i dati: $\tilde y_i = y_i + \epsilon_i$. Il polinomio costruito sui dati perturbati e' $\tilde P_n(x)=\sum_i \tilde y_i L_i(x)$, e la differenza fra i due polinomi e'

$$\tilde P_n(x) - P_n(x) = \sum_{i=0}^{n} L_i(x)\,(\tilde y_i - y_i)$$

Passando ai valori assoluti e maggiorando:

$$|\tilde P_n(x) - P_n(x)| \le \max_i|\tilde y_i - y_i| \sum_{i=0}^n |L_i(x)| = \|\tilde y - y\|_\infty\,\lambda_n(x)$$

dove

$$\lambda_n(x) := \sum_{i=0}^{n}|L_i(x)| \qquad\text{(\textbf{funzione} di Lebesgue)}$$

Passando alle norme infinito:

$$\boxed{\Lambda_n := \|\lambda_n\|_\infty = \max_{x\in[a,b]}\sum_{i=0}^{n}|L_i(x)| \qquad\text{(\textbf{costante} di Lebesgue)}}$$

e si ricava

$$\frac{\|\tilde P_n - P_n\|_\infty}{\|P_n\|_\infty} \le \Lambda_n\,\frac{\|\tilde y - y\|_\infty}{\|y\|_\infty}$$

> ### 🎯 Il ruolo — questa e' la frase che vale i 3 punti
> *"La costante di Lebesgue e' il **coefficiente di amplificazione degli errori relativi sui dati**, e pertanto identifica il **numero di condizionamento del problema di interpolazione polinomiale**. Dipende **solo dalla scelta dei nodi**, non dai dati $y_i$."*

Confrontala con $K(A)$ del Blocco B: stessa struttura, *errore relativo sui risultati $\le$ costante $\times$ errore relativo sui dati*.

### $\Lambda_n \ge 1$ sempre

Dalla partizione dell'unita' del [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue#3. ⭐ La base di Lagrange|§3]]:

$$\sum_i |L_i(x)| \;\ge\; \left|\sum_i L_i(x)\right| = 1 \qquad \Longrightarrow \qquad \Lambda_n \ge 1$$

Un'interpolazione non puo' mai **ridurre** l'errore sui dati. Nel migliore dei casi lo lascia inalterato.

### Quanto vale

![[costante_lebesgue.png]]

$$\text{equispaziati: } \Lambda_n \approx \frac{2^{n+1}}{e\,n\log_e n} \qquad\qquad \text{Chebyshev: } \Lambda_n \approx \frac{2}{\pi}\log_e n$$

Valori misurati su $[-1,1]$ — sono quelli dell'**Esercizio 5 del Laboratorio 12/5**:

| $n$ | equispaziati | Chebyshev |
|---:|---:|---:|
| 5 | 3.11 | 2.10 |
| 10 | 29.9 | 2.49 |
| 15 | 512 | 2.73 |
| 20 | **10 987** | **2.90** |

Con 21 nodi equispaziati un errore dello $0.01\%$ sui dati puo' diventare **piu' del 100%** sul polinomio. Con Chebyshev resta dello stesso ordine.

> ⚠️ **La precisazione che conta**: in **entrambi** i casi $\Lambda_n\to\infty$ per $n\to\infty$. La differenza e' che con Chebyshev la crescita e' **logaritmica** invece che esponenziale. Quindi anche con i nodi migliori, **gradi troppo elevati rendono il problema sensibile alle perturbazioni**. Per interpolare molti nodi si usano le **spline**, non un unico polinomio di grado alto.

### Nel codice

```python
def lebesgue(xnodi, xx):
    lam = np.zeros_like(xx)
    for j in range(xnodi.size):
        lam += np.abs(np.polyval(plagr(xnodi, j), xx))
    return lam            # poi:  Lambda = lam.max()
```

E' `InterpL` con due modifiche: il valore assoluto, e la somma invece della combinazione con i $y_j$. Nota che **non compaiono i dati**: conferma che $\Lambda_n$ dipende solo dai nodi.

---

## 10. Interpolazione o minimi quadrati?

Le slide danno la tabella di confronto, ed e' la premessa al documento [[19 Minimi quadrati - equazioni normali, QR-LS e SVD-LS|19]]:

| | **Interpolazione** | **Minimi quadrati** |
|---|---|---|
| Punti e grado | $n+1$ punti, grado **esattamente** $n$ | $m$ punti, grado $n \ll m$ |
| Residuo sui dati | **zero per definizione** | non zero: si minimizza $\Vert B\alpha-y\Vert_2^2$ |
| Sistema lineare | quadrato $(n+1)\times(n+1)$, soluzione unica | sovradeterminato $m\times(n+1)$ |
| Sensibilita' al rumore | **alta**: passa per ogni dato, rumore compreso | **bassa**: media i dati, filtra il rumore |
| Uso tipico | dati esatti o quasi (tabelle di funzioni note) | dati sperimentali con errori di misura |

> **Regola pratica delle slide**: *dati pochi e precisi → interpolazione; dati molti e rumorosi → minimi quadrati. Usare l'interpolazione su dati rumorosi produce un polinomio che segue il rumore, non la tendenza reale del fenomeno.*

La **Simulazione I** chiede entrambe le cose sugli stessi dati, proprio per far vedere la differenza.

---

## 11. Checklist

- [ ] Enunciare esistenza e unicita' del polinomio interpolatore (Vandermonde a rango massimo con nodi distinti)
- [ ] Spiegare perche' si abbandona Vandermonde (condizionamento) e cosa risolve il cambio di base
- [ ] Scrivere $L_j^{(n)}(x)=\prod_{k\ne j}\frac{x-x_k}{x_j-x_k}$ e **ricavarla** dalla condizione $L_j(x_i)=\delta_{ij}$
- [ ] Partizione dell'unita' e la sua conseguenza $\Lambda_n\ge1$
- [ ] Scrivere `plagr` e `InterpL` da zero, sapendo cosa fanno `np.poly` e `np.polyval`
- [ ] ⭐⭐ **Enunciare il teorema dell'errore e commentare i tre fattori**
- [ ] I due casi in cui l'errore e' nullo (nei nodi; $f$ polinomio di grado $\le n$)
- [ ] Descrivere il fenomeno di Runge e dire perche' NON e' un problema di arrotondamento
- [ ] La formula dei nodi di Chebyshev e perche' riducono $\omega_{n+1}$
- [ ] ⭐ **Definire $\Lambda_n$ e dire che e' il condizionamento del problema di interpolazione**
- [ ] Le due crescite, esponenziale contro logaritmica, e il fatto che entrambe divergono
- [ ] Quando conviene interpolare e quando approssimare
