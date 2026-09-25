# Sistemi lineari: generalità e condizionamento

> **Blocco B · giorno 1 di 5 — lunedì 24 agosto** · Fonte: `Sistemi Lineari_Metodi_Numerici_Diretti.pdf` (pp. 1–16), `MappaConcettuale_SistemiLineari_.pdf`
> Laboratorio collegato: **Laboratorio 9 (23/4), Esercizi 1–3**
> ⭐ È il capitolo più redditizio dell'esame: la perturbazione del termine noto con giustificazione teorica compare in **4 prove su 8**.

---
![[Screenshot 2026-08-24 at 10.42.40.png]]
## 1. Il problema

$$A x = b, \qquad A\in\mathbb{R}^{m\times n},\; x\in\mathbb{R}^{n},\; b\in\mathbb{R}^{m}$$

Un sistema è **compatibile** se ammette almeno una soluzione, **incompatibile** altrimenti.

### Interpretazione geometrica ($2\times2$)

Ogni equazione è una retta nel piano; la soluzione è l'intersezione.

| Situazione | Sistema |
|---|---|
| Rette incidenti → **una** soluzione | $3x+2y=7$, $x+y=3$ |
| Rette coincidenti → **infinite** soluzioni | $3x+2y=7$, $6x+4y=14$ |
| Rette parallele → **nessuna** soluzione | $3x+2y=7$, $6x+4y=5$ |

### Teorema di Rouché–Capelli

> $Ax=b$ ammette soluzioni **se e solo se** $\text{rank}(A)=\text{rank}([A\,|\,b])$.
> Se $\text{rank}(A)\neq\text{rank}([A\,|\,b])$ il sistema è **incompatibile**.

Posto $k=\text{rank}(A)=\text{rank}([A|b])$:

| Caso | Nome | Esito |
|---|---|---|
| $m<n$ (più incognite che equazioni) | **sottodeterminato** | se $k<n$: compatibile indeterminato, $\infty$ soluzioni dipendenti da $n-k$ parametri liberi |
| $m>n$ (più equazioni che incognite) | **sovradeterminato** | una sola soluzione se $k=n$; infinite se $k<n$; nessuna se i ranghi differiscono → *è il caso dei minimi quadrati, Blocco D* |
| $m=n$ | **normale** | se $\text{rank}(A)=n$: una e una sola soluzione |

Nel Blocco B ci occupiamo dei **sistemi normali** ($m=n$).

### Matrice non singolare

> $A\in\mathbb{R}^{n\times n}$ è **non singolare** se vale una delle tre condizioni **equivalenti**:
> 1. $\det(A)\neq0$
> 2. esiste $A^{-1}$
> 3. $\text{rank}(A)=n$

> **Teorema (esistenza e unicità).** Condizione necessaria e sufficiente affinché $Ax=b$ ammetta una e una sola soluzione **comunque si scelga $b$** è che $A$ sia a rango massimo (invertibile). Si ha $x=A^{-1}b$.
> Se il sistema è omogeneo ($b=0$) e $A$ è non singolare, l'unica soluzione è $x=0$.

---

## 2. Due metodi da NON usare (e perché)

### L'inversa

$x=A^{-1}b$ è la formula teorica, ma numericamente è una cattiva idea: richiede di risolvere $n$ sistemi lineari, ed è **meno stabile** dei metodi diretti.

Basta una singola equazione per vederlo: $7x=21$.

$$x = 7^{-1}\cdot21 \approx 0.142857\cdot21 = 2.99997 \qquad\text{contro}\qquad x=\frac{21}{7}=3$$

Calcolare l'inverso e poi moltiplicare introduce un arrotondamento che la divisione diretta non ha.

### La regola di Cramer

$$x_j=\frac{\det(A_j)}{\det(A)},\qquad j=1,\dots,n$$

dove $A_j$ è $A$ con la $j$-esima colonna sostituita da $b$. Richiede $n+1$ determinanti di ordine $n$: con lo sviluppo di Laplace il costo cresce **fattorialmente**. Per $n=20$:

$$21! \approx 5.1\cdot10^{19} \;\text{operazioni} \;\longrightarrow\; \approx 1620\ \textbf{anni} \;\text{a } 10^{-9}\text{s per operazione}$$

Con la fattorizzazione LU lo stesso determinante costa $O(n^3)$. **Cramer ha interesse solo teorico.**

---

## 3. ⭐ Condizionamento di un sistema lineare

> 📐 $K(A)$ grande non significa "la soluzione sara' sbagliata": significa che il **tetto** e' alto. Come si legge una disuguaglianza di questo tipo: [[00d Le maggiorazioni - come si leggono#3. Le tre proprietà da avere in testa|00d · Le maggiorazioni]].

![[condizionamento_geometrico.png]]

> Cosa significa $K(A)$ **geometricamente**. Ogni equazione è una retta; la soluzione è l'intersezione. Se le rette sono quasi ortogonali l'intersezione è ben definita e una perturbazione dell'1% la sposta dello 0.5%. Se sono quasi parallele — è il sistema dell'esempio del [[07 Sistemi lineari - generalita e condizionamento#7. Esempio numerico completo|§7]], con $K_1(A)\approx2\cdot10^6$ — la stessa perturbazione la fa scivolare via del 111%.

Si analizza la sensibilità della soluzione $x$ rispetto a perturbazioni **nei dati**: negli elementi di $A$ e/o di $b$. Come sempre, **il condizionamento è proprietà intrinseca del problema e non dipende dall'algoritmo** usato per risolverlo.

### ⭐ Caso 1 — perturbazione solo sul termine noto

*(È la derivazione da saper rifare: dà origine a $K(A)$.)*

Sia $x$ la soluzione di $Ax=b$, e sia $x+\delta x$ la soluzione del sistema perturbato:

$$A(x+\delta x)=b+\delta b$$

**Passo 1.** Espandi e usa $Ax=b$:

$$Ax+A\,\delta x = b+\delta b \;\Longrightarrow\; A\,\delta x=\delta b \;\Longrightarrow\; \delta x = A^{-1}\delta b$$

**Passo 2.** Passa alle norme:

$$\|\delta x\| \le \|A^{-1}\|\,\|\delta b\| \tag{1}$$

**Passo 3.** Da $Ax=b$ segue $\|b\|=\|Ax\|\le\|A\|\,\|x\|$, quindi

$$\frac{1}{\|x\|}\le\frac{\|A\|}{\|b\|} \tag{2}$$

**Passo 4.** Moltiplica membro a membro (1) e (2):

$$\boxed{\;\frac{\|\delta x\|}{\|x\|}\;\le\;\underbrace{\|A^{-1}\|\,\|A\|}_{K(A)}\cdot\frac{\|\delta b\|}{\|b\|}\;}$$

$$K(A)=\|A^{-1}\|\cdot\|A\|$$

è l'**indice di condizionamento** del problema di risolvere un sistema lineare. Ritrovi esattamente la struttura del Blocco A: *errore relativo sui risultati $\le K\cdot$ errore relativo sui dati*.

> 💡 Il passo 3 è quello che si dimentica. Serve per far comparire $\|x\|$ al denominatore a sinistra e $\|b\|$ a destra, cioè per passare da errori assoluti a errori **relativi**.

### Caso 2 — perturbazione sia su $A$ che su $b$

$$(A+\delta A)(x+\delta x)=b+\delta b$$

Sotto l'ipotesi $\;\|A^{-1}\|\,\|\delta A\|<1\;$ (da cui si dimostra che $A+\delta A$ è non singolare):

$$\frac{\|\delta x\|}{\|x\|} \;\le\; \frac{K(A)\left(\dfrac{\|\delta A\|}{\|A\|}+\dfrac{\|\delta b\|}{\|b\|}\right)}{1-K(A)\dfrac{\|\delta A\|}{\|A\|}}$$

Stessa lettura, con in più un denominatore che **peggiora** la stima quando $K(A)\frac{\|\delta A\|}{\|A\|}$ si avvicina a 1.

### Proprietà di $K(A)$

- $K(I)=1$
- **$K(A)\ge1$ sempre**, per ogni norma matriciale indotta
- $K(A)$ vicino a 1 → **ben condizionato**; $K(A)$ grande → **mal condizionato**

> ### 🔑 Matrici ortogonali: $K_2(A)=1$
> Se $A$ è ortogonale ($A^TA=AA^T=I$, cioè $A^T=A^{-1}$):
> $$\|A\|_2=\sqrt{\rho(A^TA)}=\sqrt{\rho(I)}=1, \qquad \|A^{-1}\|_2=\|A^T\|_2=\sqrt{\rho(AA^T)}=1$$
> $$\Longrightarrow\quad K_2(A)=1$$
> **Risolvere $Ax=b$ con $A$ ortogonale è sempre un problema ben condizionato.** È la ragione profonda per cui la fattorizzazione QR è preferibile: introduce solo trasformazioni ortogonali, che non peggiorano il condizionamento.

---

## 4. ⭐ La regola pratica: quante cifre perdo

In aritmetica di macchina, $K(A)$ va letto **in relazione a $\varepsilon_{\text{mach}}$**. In prima approssimazione:

$$\frac{\|\delta x\|}{\|x\|}\approx K(A)\cdot\frac{\|\delta b\|}{\|b\|} \qquad\text{e, se gli errori sono dell'ordine della precisione di macchina,}\qquad \frac{\|\delta x\|}{\|x\|}\approx K(A)\cdot\varepsilon_{\text{mach}}$$

In doppia precisione $\varepsilon_{\text{mach}}\approx10^{-16}$:

| $K(A)$ | Errore relativo sulla soluzione | Cifre corrette perse |
|---|---|---|
| $10^{2}$ | $10^{-14}$ | 2 — soluzione ottima |
| $10^{12}$ | $10^{-4}$ | 12 — perdita significativa |
| $10^{16}$ | $\approx1$ | tutte — **soluzione inaffidabile** |

> **Regola mnemonica**: $K(A)\approx10^k$ ⟹ perdi circa $k$ cifre significative.
> In pratica $K(A)$ fra $10^0$ e $10^3$ = ben condizionato; molto più grande = mal condizionato (la soglia dipende dal contesto e dalla precisione).

Questa tabella è la risposta pronta alla domanda *"cosa implica il valore di $K(A)$ che hai calcolato?"*.

---

## 5. $K_2(A)$ tramite gli autovalori

$$K_2(A)=\|A\|_2\|A^{-1}\|_2 = \frac{\sqrt{\lambda_{\max}(A^TA)}}{\sqrt{\lambda_{\min}(A^TA)}}$$

*Derivazione.* $\|A\|_2=\sqrt{\lambda_{\max}(A^TA)}$ per definizione. Per l'inversa:

$$\|A^{-1}\|_2=\sqrt{\lambda_{\max}\big((A^{-1})^TA^{-1}\big)}, \qquad (A^{-1})^TA^{-1}=(AA^T)^{-1}$$

Per $A$ quadrata, $A^TA$ e $AA^T$ hanno gli **stessi autovalori**. Inoltre, se $\lambda_i$ sono gli autovalori di $M$, allora $1/\lambda_i$ sono quelli di $M^{-1}$, quindi

$$\lambda_{\max}\big((A^TA)^{-1}\big)=\frac{1}{\lambda_{\min}(A^TA)} \qquad\Longrightarrow\qquad \|A^{-1}\|_2=\frac{1}{\sqrt{\lambda_{\min}(A^TA)}} \;\;∎$$

In termini di **valori singolari** ($\sigma_i=\sqrt{\lambda_i(A^TA)}$): $\;K_2(A)=\sigma_{\max}/\sigma_{\min}$.

### ⚠️ La proprietà che conta per i minimi quadrati

$$\boxed{\;K_2(A^TA)=K_2(A)^2\;}$$

Elevare al quadrato il condizionamento è esattamente ciò che succede risolvendo un problema ai minimi quadrati con le **equazioni normali** $A^TAx=A^Tb$: se $K_2(A)=10^6$ (già discreto), $K_2(A^TA)=10^{12}$ e perdi 12 cifre. **È il motivo per cui si usa QR-LS.** Tienila da parte per il Blocco D.

---

## 6. Due matrici mal condizionate da conoscere

### Matrice di Vandermonde

Dato $x=(x_0,\dots,x_n)$, l'elemento di posto $(i,j)$ è $a_{ij}=(x_i)^j$:

$$A=\begin{bmatrix}1 & x_0 & x_0^2 & x_0^3\\ 1 & x_1 & x_1^2 & x_1^3\\ 1 & x_2 & x_2^2 & x_2^3\\ 1 & x_3 & x_3^2 & x_3^3\end{bmatrix}$$

In Python: `np.vander(x, increasing=True)`. Per $x=[1,2,\dots,6]$: $K_\infty(A)\approx1.20\cdot10^{6}$.

Compare naturalmente nell'**interpolazione polinomiale** (imporre il passaggio di un polinomio per $n+1$ punti): è il motivo per cui non si interpola risolvendo il sistema di Vandermonde.

### Matrice di Hilbert

$$h_{ij}=\frac{1}{i+j-1}, \qquad H_4=\begin{bmatrix}1 & \frac12 & \frac13 & \frac14\\ \frac12 & \frac13 & \frac14 & \frac15\\ \frac13 & \frac14 & \frac15 & \frac16\\ \frac14 & \frac15 & \frac16 & \frac17\end{bmatrix}$$

In Python: `scipy.linalg.hilbert(n)`. Per $n=4$: $K_2(H)\approx1.55\cdot10^{4}$ (in norma $\infty$: $2.84\cdot10^4$).

⚠️ Simmetrica e definita positiva — quindi Cholesky **si applica** — eppure mal condizionata. Ricorda che *applicabilità del metodo* e *condizionamento del problema* sono cose diverse.

---

## 7. Esempio numerico completo

Sistema:

$$\begin{cases} x+y=2\\ 1001x+1000y=2001 \end{cases} \qquad\text{soluzione esatta } x=1,\;y=1$$

$$A=\begin{bmatrix}1&1\\1001&1000\end{bmatrix}, \qquad A^{-1}=\begin{bmatrix}-1000&1\\1001&-1\end{bmatrix}$$

$$\|A\|_1=1002,\quad \|A^{-1}\|_1=2001 \qquad\Longrightarrow\qquad K_1(A)=1002\cdot2001=2.005002\cdot10^{6}$$

Perturbiamo il coefficiente di $x$ dell'1%: $\tilde A=\begin{bmatrix}1.01&1\\1001&1000\end{bmatrix}$, cioè $\delta A=\begin{bmatrix}0.01&0\\0&0\end{bmatrix}$.

**Errore relativo sui dati:**

$$\frac{\|\delta A\|_1}{\|A\|_1}=\frac{0.01}{1002}\approx9.98\cdot10^{-6}\approx0.001\%$$

**Soluzione perturbata:** $\tilde x=\left(-\tfrac19,\;\tfrac{1901}{900}\right)\approx(-0.1111,\;2.1122)$, quindi

$$\delta x = x-\tilde x = \left(\tfrac{10}{9},\;-\tfrac{1001}{900}\right), \qquad \|\delta x\|_1=\tfrac{10}{9}+\tfrac{1001}{900}=\tfrac{2001}{900}, \qquad \|x\|_1=2$$

$$\frac{\|\delta x\|_1}{\|x\|_1}=\frac{2001/900}{2}=\frac{2001}{1800}\approx1.1117\approx\mathbf{111.17\%}$$

**Lettura**: perturbazione dello $0.001\%$ sui dati → errore del $111\%$ sulla soluzione, coerente con $K_1(A)\approx2\cdot10^6$. È il mal condizionamento in azione.

---

## 8. Come si fa in Python (Laboratorio 9, Esercizi 1–3)

```python
import numpy as np, scipy.linalg as spl

# --- indice di condizionamento, a mano e con la funzione di libreria ---
K_manuale = np.linalg.norm(A, np.inf) * np.linalg.norm(np.linalg.inv(A), np.inf)
K_libreria = np.linalg.cond(A, np.inf)          # devono coincidere

# --- costruire b in modo che la soluzione esatta sia [1,1,...,1] ---
b = np.sum(A, axis=1).reshape(n, 1)             # b = A @ ones  ⟹  x_esatta = ones
x_esatta = np.ones((n, 1))

# --- perturbare il termine noto ---
b_pert = b.copy()
b_pert[0] = b_pert[0] + 0.025                   # perturbazione assoluta
# oppure, se chiedono una percentuale:  b_pert[0] = b[0] * (1 + 0.001)

x_pert = spl.solve(A, b_pert)

# --- i due errori relativi da confrontare ---
err_dati      = np.linalg.norm(b_pert - b,        np.inf) / np.linalg.norm(b,        np.inf)
err_soluzione = np.linalg.norm(x_pert - x_esatta, np.inf) / np.linalg.norm(x_esatta, np.inf)
```

> 🔑 **Il trucco di `b = np.sum(A, axis=1)`** vale la pena memorizzarlo: sommando le righe di $A$ ottieni $b=A\cdot[1,\dots,1]^T$, quindi la soluzione esatta è il vettore di tutti 1 e puoi calcolare l'errore vero senza conoscere altro. Compare in **quasi tutti** i testi d'esame.

**La conclusione da scrivere in markdown** dopo il conto (è quella che vale i punti):

> L'errore relativo sulla soluzione è circa $K(A)$ volte l'errore relativo sui dati, coerentemente con la maggiorazione $\frac{\|\delta x\|}{\|x\|}\le K(A)\frac{\|\delta b\|}{\|b\|}$. Essendo $K(A)\approx10^{k}$, il problema è mal condizionato e ci si attende la perdita di circa $k$ cifre significative.

---

## 9. Da ricordare

| | |
|---|---|
| Rouché–Capelli | soluzioni $\iff \text{rank}(A)=\text{rank}([A\Vert b])$ |
| $A$ non singolare | $\det A\neq0 \iff \exists A^{-1} \iff \text{rank}(A)=n$ |
| Perché non l'inversa | $n$ sistemi + meno stabile ($7x=21$) |
| Perché non Cramer | $O((n+1)!)$: per $n=20$, 1620 anni |
| **Indice di condizionamento** | $K(A)=\Vert A^{-1}\Vert \,\Vert A\Vert $ ⭐ |
| Maggiorazione (caso $\delta b$) | $\frac{\Vert \delta x\Vert}{\Vert x\Vert}\le K(A)\frac{\Vert \delta b\Vert}{\Vert b\Vert}$ ⭐ |
| Proprietà | $K(I)=1$, $K(A)\ge1$ sempre |
| $A$ ortogonale | $K_2(A)=1$ → sempre ben condizionato |
| Regola pratica | $\frac{\Vert \delta x\Vert}{\Vert x\Vert}\approx K(A)\varepsilon_{\text{mach}}$: $K\approx10^k$ ⟹ perdi $k$ cifre |
| $K_2$ | $\sqrt{\lambda_{\max}(A^TA)}/\sqrt{\lambda_{\min}(A^TA)}=\sigma_{\max}/\sigma_{\min}$ |
| **$K_2(A^TA)=K_2(A)^2$** | il motivo per cui QR batte le equazioni normali |
| Mal condizionate tipiche | Vandermonde, Hilbert |
