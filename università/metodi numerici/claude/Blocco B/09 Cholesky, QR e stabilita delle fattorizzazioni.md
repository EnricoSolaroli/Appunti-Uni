# Cholesky, QR e stabilità delle fattorizzazioni

> **Blocco B · giorno 4 di 5 — giovedì 27 agosto** · Fonte: `Sistemi Lineari_Metodi_Numerici_Diretti.pdf` (pp. 28–31)
> Laboratorio collegato: **Laboratorio 9 (23/4), Note 2–3 ed Esercizi 7–8**
> ⭐ Cholesky è caduto nella **Simulazione II** con la formula esatta: *"dire se è possibile applicare Cholesky richiamando il Teorema e **verificare sperimentalmente le ipotesi di applicabilità**"*.

---

## 1. ⭐ Fattorizzazione di Cholesky

> ### Teorema di Cholesky
> Sia $A$ di ordine $n$ **simmetrica e definita positiva**. Allora esiste una matrice triangolare inferiore $L$ con **elementi diagonali positivi** ($l_{ii}>0$, $i=1,\dots,n$) tale che
> $$A=L\,L^{T}$$

**Complessità**: $\approx\dfrac{1}{6}n^3$ — cioè **metà** di LU ($\frac13 n^3$). È il vantaggio: sfruttando la simmetria si calcola solo un fattore invece di due.

**Risoluzione del sistema**:

$$\begin{cases} Ly=b\\ L^{T}x=y \end{cases}$$

*(Variante equivalente: $A=R^TR$ con $R$ triangolare superiore a diagonale positiva.)*

### ⭐ Verificare sperimentalmente le ipotesi

Questa è la parte che vale i punti, e va scritta nel notebook. Le ipotesi sono **due**:

**1. Simmetria** — $A^T=A$:

```python
print("Simmetrica? ", np.allclose(A, A.T))
```

**2. Definita positiva** — tre criteri equivalenti, usane uno e citalo:

```python
# criterio (a): tutti gli autovalori reali e POSITIVI  (valido perché A è simmetrica)
autov = np.linalg.eigvalsh(A)          # eigvalsh: per matrici simmetriche
print("Autovalori:", autov, " tutti > 0? ", np.all(autov > 0))

# criterio (b): tutti i minori principali di testa hanno determinante positivo (Sylvester)
print([np.linalg.det(A[:k, :k]) for k in range(1, n+1)])

# criterio (c): "prova del nove" — se cholesky non solleva eccezione, A è SDP
try:
    L = spl.cholesky(A, lower=True)
    print("A è simmetrica definita positiva")
except np.linalg.LinAlgError:
    print("A NON è definita positiva → uso un'altra fattorizzazione")
```

> ⚠️ Il criterio (c) è comodo ma **non basta da solo** come risposta d'esame: ti chiedono di *richiamare il teorema* e verificarne le ipotesi, non di far girare la funzione e vedere se esplode. Usa (a) o (b) per la verifica esplicita, e (c) come conferma.

**Se $A$ non è SDP**, la risposta corretta è: *"non è possibile applicare Cholesky perché non sono soddisfatte le ipotesi del teorema (manca la simmetria / la definita positività); si ricorre quindi alla fattorizzazione LU con pivoting, che esiste per ogni matrice non singolare (Teorema 2)"*. La Simulazione II chiede letteralmente questo.

**In Python**: `scipy.linalg.cholesky(A, lower=True)` restituisce $L$ triangolare inferiore con $A=LL^T$. Se la matrice in input non è definita positiva, **solleva un errore**.

> 📌 **Attenzione a non confondere due cose.** La matrice di Hilbert è simmetrica e definita positiva — Cholesky **si applica** — eppure è pesantemente mal condizionata ($K_2(H_4)\approx1.55\cdot10^4$). *Applicabilità del metodo* e *condizionamento del problema* sono indipendenti: il primo dipende dalle ipotesi del teorema, il secondo da $K(A)$.

---

## 2. Fattorizzazione QR

> ### Teorema (fattorizzazione QR)
> Sia $A\in\mathbb{R}^{m\times n}$ con $m\ge n$ e $\text{rank}(A)=n$ (colonne linearmente indipendenti). Allora esistono
> - $Q\in\mathbb{R}^{m\times m}$ **ortogonale**,
> - $R=\begin{pmatrix}R_1\\ \mathbf{0}\end{pmatrix}\in\mathbb{R}^{m\times n}$, con $R_1\in\mathbb{R}^{n\times n}$ triangolare superiore **non singolare** e $\mathbf{0}\in\mathbb{R}^{(m-n)\times n}$ matrice di zeri,
>
> tali che $A=QR$.

Due proprietà da citare:

- **La fattorizzazione QR esiste sempre** (a differenza di LU senza pivoting e di Cholesky)
- **Non è unica** (a differenza di LU e $LL^T$)

### Risoluzione del sistema

Per $A$ quadrata a rango massimo:

$$Ax=b \;\Longrightarrow\; QRx=b$$

Moltiplicando entrambi i membri per $Q^T$ e sfruttando l'ortogonalità ($Q^{-1}=Q^T$, quindi $Q^TQ=I$):

$$\boxed{\begin{cases} y=Q^{T}b\\ Rx=y\end{cases}}$$

> 🔑 **Nota la differenza rispetto a LU e Cholesky**: qui il primo passo **non è un sistema da risolvere**, è un semplice **prodotto matrice–vettore**. Solo il secondo è una sostituzione all'indietro. È una conseguenza dell'ortogonalità di $Q$.

**Complessità**:

| Caso | Costo |
|---|---|
| $m-1\ge n$ (rettangolare) | $\approx mn^2-\dfrac{n^3}{3}$ |
| $m=n$ (quadrata) | $\approx\dfrac{2}{3}n^3$ |

Quindi QR quadrata costa **il doppio** di LU ($\frac13n^3$) e **quattro volte** Cholesky ($\frac16n^3$). Si paga in operazioni ciò che si guadagna in stabilità.

**In Python**: `Q, R = scipy.linalg.qr(A)`.

---

## 3. Stabilità di un algoritmo di fattorizzazione

Gli algoritmi lavorano in aritmetica finita, quindi i fattori calcolati non coincidono con quelli teorici:

$$\tilde B = B+\delta B, \qquad \tilde C = C+\delta C$$

Secondo l'**analisi all'indietro** di Wilkinson (la tecnica introdotta nel Blocco A), i fattori calcolati si interpretano come la fattorizzazione **esatta di una matrice perturbata**:

$$A+\delta A=\tilde B\,\tilde C=(B+\delta B)(C+\delta C)=BC+B\,\delta C+\delta B\,C+\delta B\,\delta C$$

e poiché $A=BC$:

$$\boxed{\;\delta A = B\,\delta C+\delta B\,C+\delta B\,\delta C\;}$$

> 🔑 **La lettura che conta**: $\delta A$ dipende non solo dalle perturbazioni $\delta B$, $\delta C$, ma anche dalla **grandezza degli elementi dei fattori $B$ e $C$**. Se i fattori contengono elementi enormi, anche perturbazioni minuscole su di essi producono un $\delta A$ grande. Ecco perché la definizione di stabilità che segue riguarda proprio *quanto crescono gli elementi dei fattori*.

### Definizione

Data $A$ con elementi limitati, la fattorizzazione $A=BC$ è:

- **numericamente stabile in senso forte** se esistono costanti $a,b>0$ **indipendenti da $A$** (e quindi dalla sua dimensione) tali che
$$|b_{ij}|\le a\max|a_{ij}|, \qquad |c_{ij}|\le b\max|a_{ij}|$$
- **stabile in senso debole** se tali costanti **dipendono dalla dimensione** della matrice.

---

## 4. ⭐ La classifica di stabilità delle tre fattorizzazioni

> 📐 Il $2^{n-1}$ di LU e' un **tetto**, saturato solo dalla matrice di Wilkinson: sulla Hankel il fattore di crescita vale $1.000$. Perche' un maggiorante pessimistico resta vero: [[00d Le maggiorazioni - come si leggono#3. Le tre proprietà da avere in testa|00d · Le maggiorazioni]].

![[crescita_LU_vs_QR.png]]

> La verifica sperimentale sulla matrice dell'**Esercizio 8 del Laboratorio 9**. A sinistra: gli elementi di $U$ crescono esattamente come $2^{\,n-1}$, quelli di $R$ restano sotto $\sqrt n$. A destra: la conseguenza. Fino a $n=54$ l'errore di LU è **esattamente nullo** (dati e fattori sono potenze di 2, l'aritmetica è esatta); a $n=55$ la crescita supera $2^{53}$ e l'errore salta al 13%, mentre QR resta a $10^{-15}$.
> ⚠️ Nota che $K_2(A)\approx23$: il problema è **ben condizionato**. Tutta la differenza è **stabilità dell'algoritmo**, non condizionamento — è la distinzione del Blocco A applicata ai sistemi lineari.

| Fattorizzazione | Maggiorazioni | Stabilità |
|---|---|---|
| **Gauss $A=LU$** (con pivoting a perno massimo) | $\;\vert l_{ij}\vert \le1\;$ · $\;\vert u_{ij}\vert \le 2^{\,n-1}\max\vert a_{ij}\vert $ | **debole** |
| **Cholesky $A=LL^T$** | $\;\max_{ij}\vert l_{ij}\vert \le\sqrt{\max_{ij}\vert a_{ij}\vert}$ | **forte** ✅ |
| **QR $A=QR$** | $\;\vert q_{ij}\vert \le1\;$ · $\;\vert r_{ij}\vert \le\sqrt{n}\max_{ij}\vert a_{ij}\vert $ | **debole**, ma migliore di LU |

**Le motivazioni da saper esporre:**

- **LU è stabile in senso debole** perché la costante che maggiora gli elementi di $L$ (cioè 1, grazie al pivoting a perno massimo) **non** dipende dall'ordine, ma quella che maggiora gli elementi di $U$ **sì**, e per giunta in modo **esponenziale**: $2^{n-1}$.
- **Cholesky è stabile in senso forte** perché $\sqrt{\max|a_{ij}|}$ non dipende in alcun modo da $n$.
- **QR è stabile in senso debole ma migliore di LU**: gli elementi di $R$ crescono al più come $\sqrt n$, contro il $2^{n-1}$ di $U$. Confronto immediato per $n=30$: $\sqrt{30}\approx5.5$ contro $2^{29}\approx5.4\cdot10^{8}$.

### Il fattore di crescita: la stessa cosa, scritta come rapporto

Dividendo la maggiorazione di LU per $\max_{ij}|a_{ij}|$ si ottiene una quantità **adimensionale**:

$$g_n = \frac{\max_{ij}|u_{ij}|}{\max_{ij}|a_{ij}|} \;\le\; 2^{\,n-1}$$

detta **fattore di crescita**. Misura di quanto sono cresciuti gli elementi passando da $A$ a $U$. È la quantità che i laboratori calcolano con `np.max(np.abs(U))/np.max(np.abs(A))`.

![[fattore_di_crescita.png]]

In alto: l'eliminazione passo per passo sulla **matrice di Wilkinson** ($a_{ii}=1$, $a_{in}=1$, $a_{ij}=-1$ per $i>j$), il caso peggiore. L'ultima colonna **raddoppia a ogni passo** — $1,2,4,8,16$ — e arriva esattamente a $2^{\,n-1}$, saturando la maggiorazione. È la matrice dell'Esercizio 8.

In basso a destra: il confronto fra tetto teorico e valore misurato. La curva rossa **giace esattamente sulla retta tratteggiata** (per questo la tratteggiata non si vede), mentre sulla matrice di Hankel dell'Esercizio 7 il fattore di crescita resta **pari a 1** per ogni $n$. La maggiorazione $2^{\,n-1}$ è del caso peggiore e quasi mai viene raggiunta: per questo il fattore di crescita si **misura**, invece di dedurlo dalla formula.

> 📌 Il rapporto è **invariante di scala**: moltiplicando $A$ per 1000, numeratore e denominatore si moltiplicano entrambi per 1000 e $g_n$ non cambia. Misura la crescita *relativa*, non la grandezza assoluta degli elementi — che è esattamente ciò che conta, perché gli errori di arrotondamento sono relativi.

> ### 🔑 Il motivo profondo per cui QR è più stabile
> $Q$ è **ortogonale**, quindi $\|Qx\|_2=\|x\|_2$ e $K_2(Q)=1$: moltiplicare per $Q$ **non amplifica nulla**, né i vettori né gli errori. La fattorizzazione QR costruisce la triangolarizzazione usando solo trasformazioni che conservano la norma 2 (i **riflettori di Householder**), mentre l'eliminazione gaussiana usa trasformazioni che possono far crescere gli elementi in modo incontrollato.
> **Questo è il ponte con il [[09 Cholesky, QR e stabilita delle fattorizzazioni#3. Stabilità di un algoritmo di fattorizzazione|§3]] del documento 07** ($K_2(A)=1$ per $A$ ortogonale) ed è la giustificazione teorica da citare.

---

## 5. Il confronto sperimentale — Laboratorio 9, Esercizi 7–8

Gli ultimi due esercizi del laboratorio sono la verifica numerica di tutto questo: si risolve lo stesso sistema con **LU** e con **QR**, al variare di $n$, e si confrontano gli errori relativi in scala logaritmica.

**Esercizio 7** — matrice di **Hankel** di ordine $n=10,\dots,30$, con $b$ scelto in modo che $x=[1,\dots,1]^T$.

**Esercizio 8** — matrice con $a_{ij}=1$ se $i=j$ o $j=n$, $-1$ se $i>j$, $0$ altrimenti, per $n=48,50,\dots,58$. *(È la classica matrice che fa esplodere il fattore di crescita di $U$: gli elementi dell'ultima colonna raddoppiano a ogni passo di eliminazione, arrivando esattamente a $2^{n-1}$ — il caso peggiore della maggiorazione in tabella.)*

**Cosa si osserva, e cosa scrivere**: l'errore della soluzione via LU cresce molto più rapidamente di quello via QR al crescere di $n$, coerentemente con il fattore $2^{n-1}$ contro $\sqrt n$. Un indicatore utile da calcolare esplicitamente è il **fattore di crescita**:

```python
fatt_crescita_U = np.max(np.abs(U)) / np.max(np.abs(A))
```

Se cresce esponenzialmente con $n$, hai la prova numerica della instabilità in senso debole di LU.

```python
import matplotlib.pyplot as plt
err_lu, err_qr, cond = [], [], []
for n in range(10, 31):
    A = Hankel(n)
    b = np.sum(A, axis=1).reshape((n, 1))
    x_esatta = np.ones((n, 1))
    cond.append(np.linalg.cond(A))

    PT, L, U = lu(A);  P = PT.T
    x_lu, _ = LUsolve(P, L, U, b)
    err_lu.append(np.linalg.norm(x_lu - x_esatta, 2) / np.linalg.norm(x_esatta, 2))

    Q, R = spl.qr(A)
    y = Q.T @ b
    x_qr, _ = ST.Usolve(R, y)
    err_qr.append(np.linalg.norm(x_qr - x_esatta, 2) / np.linalg.norm(x_esatta, 2))

plt.loglog(range(10,31), err_lu, 'o-', label='LU')
plt.loglog(range(10,31), err_qr, 's-', label='QR')
plt.xlabel('n'); plt.ylabel('errore relativo'); plt.legend(); plt.grid(True)
```

> ⚠️ Nella giustificazione **distingui due effetti**: parte dell'errore viene dal **condizionamento** della matrice (uguale per entrambi i metodi, perché è del problema), parte dalla **stabilità dell'algoritmo** (diversa fra LU e QR). Se i due errori divergono a parità di $K(A)$, la differenza è imputabile alla stabilità. È esattamente lo schema $E_{tot}\approx E_{in}+E_{alg}$ del Blocco A, applicato ai sistemi lineari.

---

## 6. Da ricordare

| | |
|---|---|
| **Teorema di Cholesky** | $A$ **simmetrica e definita positiva** ⟹ $\exists L$ triang. inf. con $l_{ii}>0$ e $A=LL^T$ |
| Costo Cholesky | $\approx\frac16 n^3$ (metà di LU) |
| Verifica ipotesi SDP | simmetria (`np.allclose(A,A.T)`) + autovalori positivi (`eigvalsh`) o minori di testa positivi |
| Se non è SDP | ripiega su LU con pivoting (Teorema 2: esiste per ogni $A$ non singolare) |
| **Teorema QR** | $m\ge n$, rank$(A)=n$ ⟹ $A=QR$, $Q$ ortogonale, $R$ triang. sup. |
| QR: esistenza / unicità | esiste **sempre** · **non** unica |
| Risoluzione QR | $y=Q^Tb$ (prodotto, non un sistema!), poi $Rx=y$ |
| Costo QR ($m=n$) | $\approx\frac23 n^3$ |
| Analisi all'indietro | $\delta A=B\,\delta C+\delta B\,C+\delta B\,\delta C$ |
| Stabile in senso **forte** | costanti indipendenti dalla dimensione |
| Stabile in senso **debole** | costanti dipendenti dalla dimensione |
| LU (perno massimo) | $\vert l_{ij}\vert \le1$, $\vert u_{ij}\vert \le2^{n-1}\max\vert a_{ij}\vert $ → **debole** |
| Cholesky | $\max\vert l_{ij}\vert \le\sqrt{\max\vert a_{ij}\vert}$ → **forte** |
| QR | $\vert q_{ij}\vert \le1$, $\vert r_{ij}\vert \le\sqrt n\max\vert a_{ij}\vert $ → **debole ma migliore di LU** |
| Perché QR è più stabile | $Q$ ortogonale ⟹ $K_2(Q)=1$: non amplifica gli errori |
