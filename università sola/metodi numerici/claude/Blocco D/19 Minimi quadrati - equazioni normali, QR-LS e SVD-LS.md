# Minimi quadrati: equazioni normali, QR-LS e SVD-LS

> **Blocco D · giorni 1-2 di 4 — mercoledi 2 settembre (teoria) e giovedi 3 (codice)**
> 📖 **Ordine di lettura**: questa nota viene **per prima**, poi la [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue|20]] (interpolazione) — e' l'ordine del corso: minimi quadrati (Lab 5 maggio) → interpolazione (Lab 12 maggio).
> Fonte: `SoluzioneSistemiSovradeterminati.pdf`
> Buchi: `eqnorm` (2), `qrLS` (1), `SVDLS` (5) = **8 su 116**
> 📌 **Laboratorio**: **Esercitazione 10 (5/5), Esercizi 6, 7 e 8**, piu' le celle 23-28 con i testi di `eqnorm`, `qrLS` e `svdLS` (`eqnorm` e' gia' svolta nel notebook). Nella cartella c'e' anche `Esercitazione_5Maggio_2026_Soluzione.ipynb` con le soluzioni.
> L'Esercizio 8 (compressione di immagini con SVD) e' bello ma **fuori programma d'esame**: nessuna delle 8 prove chiede niente di simile.
> 🎯 Compare nell'esame del **7 maggio 2025 (5 punti sul QR-LS)** e nella **Simulazione I (3+1+1 punti)**.

---

## 1. Sistemi sovradeterminati

$$Ax=b, \qquad A\in\mathbb{R}^{m\times n},\; x\in\mathbb{R}^n,\; b\in\mathbb{R}^m, \qquad \boxed{m>n}$$

Piu' equazioni che incognite. Per **Rouche'-Capelli** il sistema e' compatibile se e solo se

$$\text{rank}(A) = \text{rank}(A\mid b)$$

Con $m>n$ i vincoli sono molti, e in presenza di **dati affetti da errori** questa condizione e' generalmente violata: nella maggior parte dei casi applicativi **il sistema e' incompatibile**.

> 📌 **L'esempio intuitivo delle slide**: trovare una retta che passi esattamente per 10 punti sperimentali e' possibile solo se i 10 punti sono perfettamente allineati. Con dati reali, affetti da rumore, non succede mai.

Il problema quindi **non e' ben posto nel senso di Hadamard**: puo' non ammettere soluzione. Serve una riformulazione.

---

## 2. ⭐ La riformulazione

> 🖼️ La proiezione ortogonale in figura — da li' le equazioni normali escono in una riga: [[22 Blocco D in figure - i concetti chiave#5. ⭐ Tutto discende da una figura: la proiezione ortogonale|22 §5]].

Invece di pretendere che tutte le equazioni siano soddisfatte, si cerca il vettore che rende **piu' piccolo possibile lo scarto**. Definito il residuo $r(x) := Ax-b$:

$$\boxed{x^* = \arg\min_{x\in\mathbb{R}^n} \|r(x)\|_2^2 = \arg\min_{x\in\mathbb{R}^n} \|Ax-b\|_2^2}$$

Questo problema **ammette sempre soluzione**: si e' trasformato un problema mal posto in uno ben posto.

> 🔗 **Il filo con il Blocco C**: anche lì si trasformava un sistema lineare in un problema di minimo. Ma attenzione a non confonderli — nei metodi di discesa $A$ era **quadrata SDP** e si minimizzava $\frac12x^TAx-b^Tx$; qui $A$ e' **rettangolare** e si minimizza $\|Ax-b\|_2^2$. Il conto che segue e' comunque lo stesso: sviluppa, deriva, annulla il gradiente.

---

## 3. ⭐ Le equazioni normali

Sviluppiamo la funzione da minimizzare:

$$F(x)=\|Ax-b\|_2^2 = (Ax-b)^T(Ax-b) = x^TA^TAx - 2x^TA^Tb + b^Tb$$

Posto $G=A^TA$, si osserva subito che **$G$ e' simmetrica**:

$$G^T = (A^TA)^T = A^T A = G$$

Ricordando che il gradiente della forma quadratica $x^TGx$ con $G$ simmetrica vale $2Gx$:

$$\nabla F(x) = 2Gx - 2A^Tb = 0 \qquad\Longrightarrow\qquad \boxed{A^TA\,x = A^Tb}$$

Queste sono le **equazioni normali**. Il problema sovradeterminato $m\times n$ e' diventato un sistema **quadrato $n\times n$**.

### Perche' e' davvero un minimo

L'Hessiana e' $\nabla^2 F(x) = 2G = 2A^TA$, e serve che sia **definita positiva**. La verifica e' elegante:

$$x^TA^TAx = (Ax)^T(Ax) = \|Ax\|_2^2 \;\ge\; 0$$

ed e' **strettamente** positivo per $x\ne0$ se e solo se $Ax\ne0$ per $x\ne0$, cioe' se e solo se le colonne di $A$ sono **linearmente indipendenti**, cioe' $\text{rank}(A)=n$.

> 📌 **La stessa ipotesi fa due lavori**: rango massimo garantisce sia che $A^TA$ sia invertibile (quindi il sistema si risolve) sia che la soluzione trovata sia un minimo. Le slide lo sottolineano: *"la condizione che garantisce la risolubilita' del sistema delle equazioni normali garantisce anche che la soluzione trovata sia un minimo"*.

> ### TEOREMA
> Dato $Ax=b$ sovradeterminato con $A\in\mathbb{R}^{m\times n}$, $m>n$:
> $$x^*=\arg\min\|Ax-b\|_2^2 \iff x^* \text{ e' soluzione di } A^TAx=A^Tb$$
> La soluzione e' **unica se e solo se** $\text{rank}(A)=n$.

Poiche' $G=A^TA$ e' **simmetrica definita positiva**, il sistema si risolve con **Cholesky** — ed e' esattamente quello che fa `eqnorm`.

---

## 4. ⚠️ Il problema: $K_2(A^TA)=K_2(A)^2$

> 🖼️ L'errore vero dei tre metodi al crescere di $K_2(A)$, con la pendenza 2 contro la pendenza 1: [[22 Blocco D in figure - i concetti chiave#6. ⭐ $K_2(A^TA) = K_2(A)^2$: perché non si usano le equazioni normali|22 §6]].

$$\boxed{K_2(A^TA) = \left(K_2(A)\right)^2}$$

Il passaggio a $A^TA$ **eleva al quadrato** il numero di condizionamento. Se $K_2(A)=100$, allora $K_2(A^TA)=10\,000$: il sistema delle equazioni normali e' cento volte piu' sensibile agli errori di arrotondamento del problema originale.

![[minimi_quadrati.png]]

Il pannello di destra lo mostra su matrici di regressione polinomiale: la curva verde e' $K_2(B)$, quella rossa $K_2(B^TB)$. La retta punteggiata e' $1/u\approx4.5\cdot10^{15}$, la soglia oltre la quale la soluzione non ha piu' **nessuna** cifra corretta: le equazioni normali la superano a grado 8, mentre $B$ da sola e' ancora a $10^8$.

**Le tre righe da ricordare**, testuali dalle slide:

- se $A$ e' **ben condizionata**, le equazioni normali sono efficienti e affidabili;
- se $A$ e' **anche solo moderatamente mal condizionata**, possono produrre soluzioni inaccurate o del tutto errate;
- in quel caso servono metodi che lavorino **direttamente su $A$, senza formare $A^TA$**.

> 🔗 Questa relazione l'avevi gia' incontrata nel documento [[07 Sistemi lineari - generalita e condizionamento|07]] del Blocco B, dove era annotata come "tienila da parte per il Blocco D". Eccoci.

---

## 5. ⭐ Il metodo QR-LS

### L'idea: le trasformazioni ortogonali conservano la norma 2

Se $Q\in\mathbb{R}^{m\times m}$ e' ortogonale ($Q^TQ=I$), allora per ogni $y$:

$$\|Qy\|_2^2 = (Qy)^T(Qy) = y^TQ^TQy = y^Ty = \|y\|_2^2$$

Moltiplicare per $Q$ **ruota o riflette** i vettori senza cambiarne la lunghezza. Possiamo quindi cambiare sistema di riferimento per semplificare il problema **senza alterarne la soluzione** — perche' la quantita' da minimizzare, che e' una norma 2, resta la stessa.

### La costruzione

Fattorizziamo $A=QR$ con Householder, dove $R$ ha la struttura

$$R = \begin{bmatrix} R_1 \\ 0\end{bmatrix}, \qquad R_1\in\mathbb{R}^{n\times n} \text{ triangolare superiore},\; r_{ii}\ne0$$

Poiche' $Q$ e' ortogonale:

$$\|Ax-b\|_2^2 = \|Q^T(Ax-b)\|_2^2 = \|Rx - Q^Tb\|_2^2$$

Posto $h=Q^Tb = \begin{bmatrix}h_1\\h_2\end{bmatrix}$ con $h_1\in\mathbb{R}^n$ e $h_2\in\mathbb{R}^{m-n}$, e sfruttando la struttura a blocchi:

$$\|Rx-h\|_2^2 = \underbrace{\|R_1x-h_1\|_2^2}_{\text{dipende da } x} + \underbrace{\|h_2\|_2^2}_{\text{NON dipende da } x}$$

**Il secondo termine non si puo' toccare.** Il minimo si ottiene annullando il primo, cioe' risolvendo il sistema **triangolare**

$$\boxed{R_1x = h_1} \qquad\text{e il residuo minimo vale}\qquad \boxed{\min\|Ax-b\|_2^2 = \|h_2\|_2^2}$$

Un problema di minimo e' diventato **una sostituzione all'indietro**.

### I quattro passi

1. fattorizza $A=QR$ con Householder
2. calcola $h=Q^Tb$, separa $h_1$ (prime $n$ componenti) da $h_2$ (restanti $m-n$)
3. risolvi $R_1x=h_1$ per sostituzione all'indietro
4. il residuo minimo e' $\|h_2\|_2^2$

### I due vantaggi da citare

1. **Lavora sempre e solo su $A$**, senza mai formare $A^TA$: il condizionamento resta $K_2(A)$, non il suo quadrato.
2. La fattorizzazione QR e', se pur non stabile in senso forte, **abbastanza stabile**: gli elementi di $Q$ sono limitati da 1 in modulo (perche' ortogonale) e quelli di $R$ crescono al massimo come $\sqrt n$.

> **Regola pratica delle slide**: se $A$ e' ben condizionata, equazioni normali e QR danno risultati equivalenti. Se $A$ e' moderatamente mal condizionata, QR e' piu' affidabile. Se $A$ e' fortemente mal condizionata **o non ha rango massimo**, serve la SVD.

---

## 6. SVD-LS

### Perche' serve

Sia le equazioni normali sia il QR richiedono $\text{rank}(A)=n$. Se le colonne sono **linearmente dipendenti**, il problema ammette **infinite soluzioni**, e servono due cose: un criterio per sceglierne una, e uno strumento che gestisca il rango deficiente. La SVD risponde a entrambe.

### Il teorema

> Sia $A\in\mathbb{R}^{m\times n}$ di rango $k\le\min(m,n)$. Esistono due matrici ortogonali $U\in\mathbb{R}^{m\times m}$ e $V\in\mathbb{R}^{n\times n}$ tali che
> $$U^TAV=\Sigma \qquad\Longleftrightarrow\qquad A=U\Sigma V^T$$
> con $\Sigma=\text{diag}(\sigma_1,\dots,\sigma_k,0,\dots,0)$ e $\sigma_1\ge\sigma_2\ge\dots\ge\sigma_k>0$.

**Interpretazione geometrica**: ogni matrice e' la composizione di tre operazioni — $V^T$ ruota nel dominio, $\Sigma$ scala lungo gli assi, $U$ ruota nel codominio.

### Le proprieta' dei valori singolari

- sono sempre **reali e $\ge0$**
- $\sigma_1=\sigma_{max}$, e il piu' piccolo non nullo e' $\sigma_{min}$
- $\;K_2(A) = \dfrac{\sigma_{max}}{\sigma_{min}}\;$ — **e' cosi' che si definisce il condizionamento di una matrice rettangolare**
- il **numero di valori singolari non nulli e' il rango** di $A$
- $\;\sigma_i(A)=\sqrt{\lambda_i(A^TA)}\;$ — da cui, per inciso, si vede subito perche' $K_2(A^TA)=K_2(A)^2$

### La soluzione

Per invarianza della norma 2 sotto $U^T$, e ponendo $c=V^Tx$, $d=U^Tb$:

$$\|Ax-b\|_2^2 = \|\Sigma c - d\|_2^2 = \underbrace{\|\Sigma c - d_1\|_2^2}_{\text{minimizzabile}} + \underbrace{\|d_2\|_2^2}_{\text{fisso}}$$

Da $\Sigma c = d_1$ si ricava $c_i = d_i/\sigma_i$ per $i=1,\dots,k$.

**Le componenti libere.** Le componenti $c_{k+1},\dots,c_n$ moltiplicano valori singolari **nulli**: qualunque valore assegni loro, la funzione obiettivo non cambia. Sono "libere", ed e' questo a generare le infinite soluzioni. Ponendole **a zero** si ottiene la soluzione di **norma minima**:

$$\boxed{x = \sum_{i=1}^{k}\frac{u_i^Tb}{\sigma_i}\,v_i} \qquad\qquad \min\|Ax-b\|_2^2 = \|d_2\|_2^2 = \sum_{i=k+1}^{m}(u_i^Tb)^2$$

> 📌 **La frase da dire**: *porre a zero le componenti libere e' una **condizione aggiuntiva** che seleziona, fra le infinite soluzioni ottimali, quella di norma minima.* Il minimo del residuo e' lo stesso per tutte; e' la scelta di norma minima a renderla unica.

---

## 7. ⭐ Il confronto — la tabella da sapere

| Metodo | Requisito su $A$ | Condizionamento con cui lavora | Caso d'uso |
|---|---|---|---|
| **Equazioni normali** | $\text{rank}(A)=n$ | $K_2(A^TA)=K_2(A)^2$ | $A$ **ben** condizionata |
| **QR-LS** | $\text{rank}(A)=n$ | $K_2(A)$ | $A$ **moderatamente** mal condizionata |
| **SVD-LS** | **nessuno** | $K_2(A)$ | caso generale, **rango deficiente** |

---

## 8. Il codice

> 🐍 Le trappole di `lu`, `cholesky`, `qr` e `svd` (cosa restituisce davvero ciascuna): [[00c Python e grafici - guida essenziale per l'esame#Parte 3 — scipy.linalg: le fattorizzazioni e le loro trappole|00c · Parte 3 — scipy.linalg]].


### `eqnorm(A, b)` — 2 `#to do`, ma **7 righe** da scrivere

```python
def eqnorm(A, b):
    G = A.T@A
    f = A.T@b
    L = cholesky(G, lower=True)      # G e' SDP: Cholesky e' il metodo giusto
    LT = L.T
    z, flag = Lsolve(L, f)           # L z = f
    if flag == 0:
        x, flag = Usolve(LT, z)      # L^T x = z
    return x
```

Da $G=LL^T$ si ha $LL^Tx=f$, che si spezza in due sistemi triangolari. **Usare Cholesky e non LU e' una scelta da giustificare**: $G$ e' simmetrica definita positiva, quindi Cholesky costa la meta' ($\frac16n^3$ contro $\frac13n^3$) ed e' stabile in senso forte.

### `qrLS(A, b)` — 1 `#to do`, ma **3 righe** da scrivere

```python
def qrLS(A, b):
    n = A.shape[1]
    Q, R = spLin.qr(A)
    h = Q.T@b
    x, flag = Usolve(R[0:n, :], h[0:n])      # ← l'unica riga da scrivere
    residuo = np.linalg.norm(h[n:])**2
    return x, residuo
```

> ⚠️ **Non fidarti del conteggio dei `#to do`.** In `qrLS` il marcatore e' uno solo, ma nello scheletro mancano anche la riga della fattorizzazione (`Q, R = spLin.qr(A)`, c'e' solo il commento) e il placeholder `x= #`: sono **3 righe**. Stesso discorso per `eqnorm`, dove sotto al commento sulla fattorizzazione di Cholesky non c'e' nessun `#to do` ma manca tutto il blocco di risoluzione. Le fette sono la traduzione diretta della teoria: `R[0:n,:]` e' $R_1$, `h[0:n]` e' $h_1$, `h[n:]` e' $h_2$.
> ⚠️ `spLin.qr(A)` restituisce $Q$ di dimensione $m\times m$ e $R$ di dimensione $m\times n$ (fattorizzazione **completa**). Le prime $n$ righe di $R$ sono $R_1$.

### `SVDLS(A, b)` — 6 buchi

```python
def SVDLS(A, b):
    m, n = A.shape
    U, s, VT = spLin.svd(A)
    V = VT.T                              # ⚠️ svd restituisce V TRASPOSTA
    thresh = np.spacing(1)*m*s[0]         # soglia per decidere quali sigma sono "zero"
    k = np.count_nonzero(s > thresh)      # rango numerico
    d = U.T@b
    d1 = d[0:k].reshape(k, 1)
    s1 = s[0:k].reshape(k, 1)
    c = d1/s1                             # c_i = d_i/sigma_i
    x = V[:, 0:k]@c                       # x = somma c_i v_i
    residuo = np.linalg.norm(d[k:])**2
    return x, residuo
```

> ⚠️ **`spLin.svd` restituisce `VT`, non `V`** — stesso genere di trappola di `lu` che restituisce $P^T$. Serve `V = VT.T`.
> ⚠️ **`s` e' un vettore**, non una matrice: contiene solo i valori singolari, gia' ordinati in modo decrescente.
> ⚠️ **La soglia `thresh`**: in aritmetica finita un valore singolare "nullo" non e' mai esattamente zero. `np.spacing(1)` e' la precisione di macchina; la soglia scala con la dimensione e con $\sigma_1$. `k` e' il **rango numerico**, ed e' proprio la quantita' che permette alla SVD di gestire il rango deficiente.

---

## 9. Regressione: dai dati alla matrice

Dati $m$ punti sperimentali $(x_i,y_i)$, si cerca il polinomio di grado $n$ con $m>n$

$$P_n(x)=\sum_{j=0}^{n}\alpha_j x^j \qquad\text{tale che}\qquad P_n(x_i)\approx y_i$$

Imporre le $m$ condizioni genera il sistema sovradeterminato $B\alpha=y$ con

$$B = \begin{bmatrix}x_0^0 & x_0^1 & \dots & x_0^n\\ x_1^0 & x_1^1 & \dots & x_1^n\\ \vdots & & & \vdots\\ x_{m-1}^0 & x_{m-1}^1 & \dots & x_{m-1}^n\end{bmatrix} \in\mathbb{R}^{m\times(n+1)}, \qquad b_{ij}=x_i^{\,j}$$

**E' di nuovo una matrice di Vandermonde, ma rettangolare**: $m$ righe (i dati) e $n+1$ colonne (i coefficienti). In numpy:

```python
B = np.vander(x, n+1, increasing=True)
```

Il caso $n=1$ e' la **retta di regressione** $P_1(x)=\alpha_0+\alpha_1x$, per cui le equazioni normali danno il sistema $2\times2$

$$\begin{bmatrix} m & \sum x_i \\ \sum x_i & \sum x_i^2\end{bmatrix}\begin{bmatrix}\alpha_0\\ \alpha_1\end{bmatrix} = \begin{bmatrix}\sum y_i \\ \sum x_i y_i\end{bmatrix}$$

che e' la formula della regressione lineare che conosci dalla statistica — ricavata qui come caso particolare.

Il residuo si stampa **sempre**, ed e' $\|r(\alpha)\|_2^2 = \|y-B\alpha\|_2^2 = \sum_i (P_n(x_i)-y_i)^2$. Diminuisce all'aumentare del grado: nell'esempio delle slide, $0.1073$ con la retta e $0.0048$ con la parabola.

---

## 10. 🎯 L'esercizio della circonferenza — 7 maggio 2025

E' il modo migliore per capire la differenza fra i due casi, perche' l'esame chiede **lo stesso problema due volte**, con 3 punti e con 4.

![[circonferenza_qrls.png]]

### Parte 1 — 3 punti, sistema quadrato

Imponendo il passaggio di $x^2+y^2+a_1x+a_2y+a_3=0$ per $(1,1)$, $(4,0)$, $(0,4)$ si ottiene $M a = b$ con

$$M=\begin{bmatrix}1&1&1\\4&0&1\\0&4&1\end{bmatrix}, \qquad b = -\begin{bmatrix}x_i^2+y_i^2\end{bmatrix} = \begin{bmatrix}-2\\-16\\-16\end{bmatrix}$$

**La riga chiave della costruzione** e' che i termini $x^2+y^2$ sono **noti** e vanno al secondo membro con il segno cambiato; le incognite sono solo $a_1,a_2,a_3$, e i coefficienti sono $x_i$, $y_i$, $1$.

```python
M = np.column_stack([x, y, np.ones(3)])
b = -(x**2 + y**2)
```

> ⚠️ **"Il metodo di fattorizzazione adatto alle caratteristiche della matrice"** — 2 punti. Verificato: $M$ **non e' simmetrica** ($K_2=10.4$, $\det=8$). Quindi **LU con pivoting**, non Cholesky. Chi legge "$3\times3$, esercizio di minimi quadrati" e risponde Cholesky per riflesso perde i punti.

Soluzione: $a=(-7,-7,12)$, centro $C=(3.5,\,3.5)$, raggio $r=3.5355$. I tre punti distano dal centro **esattamente** $r$.

E la frase da completare — *"Abbiamo costruito la circonferenza ............ i punti del piano"* — e' **"passante per"**.

### Parte 2 — 4 punti, sistema sovradeterminato

Aggiungendo $(5,6)$ la matrice diventa $4\times3$: piu' equazioni che incognite, e i quattro punti **non stanno su una circonferenza**. Si risolve con QR-LS:

```python
A = np.column_stack([x4, y4, np.ones(4)])
c = -(x4**2 + y4**2)
astar, residuo = qrLS(A, c)
```

Risultato: $a^*=(-6.514,\,-6.503,\,10.419)$, residuo $\|Aa^*-c\|_2^2 = 0.6836$, centro $(3.257,\,3.252)$, raggio $3.2806$. Le distanze dei quattro punti dal centro sono $3.188$, $3.336$, $3.342$, $3.254$: **vicine a $r$ ma non uguali** — ed e' esattamente il senso dei minimi quadrati.

La frase, qui, e' **"che approssima nel senso dei minimi quadrati"**.

### Centro e raggio

$$C\equiv\left(-\frac{a_1}{2},\,-\frac{a_2}{2}\right), \qquad r=\sqrt{\frac{a_1^2}{4}+\frac{a_2^2}{4}-a_3}$$

e per disegnarla si usa la forma parametrica $x(t)=C_0+r\cos t$, $y(t)=C_1+r\sin t$ con $t\in[0,2\pi]$ — formule fornite dal testo, non da ricordare.

---

## 11. Checklist

- [ ] Definire un sistema sovradeterminato e dire perche' e' quasi sempre incompatibile (Rouche'-Capelli)
- [ ] La riformulazione $x^*=\arg\min\|Ax-b\|_2^2$ e perche' rende il problema ben posto
- [ ] ⭐ **Ricavare le equazioni normali** annullando il gradiente di $F(x)=\|Ax-b\|_2^2$
- [ ] Dimostrare che $A^TA$ e' simmetrica e che e' definita positiva $\iff \text{rank}(A)=n$
- [ ] Enunciare il teorema di equivalenza e la condizione di unicita'
- [ ] ⚠️ **$K_2(A^TA)=K_2(A)^2$** e le tre conseguenze pratiche
- [ ] Perche' le trasformazioni ortogonali conservano la norma 2 (con la dimostrazione, e' una riga)
- [ ] Ricavare $\|Rx-h\|_2^2=\|R_1x-h_1\|_2^2+\|h_2\|_2^2$ e concludere $R_1x=h_1$
- [ ] Sapere che il residuo minimo e' $\|h_2\|_2^2$
- [ ] Enunciare la SVD, dire cosa sono $\sigma_i$, il rango e $K_2(A)=\sigma_{max}/\sigma_{min}$
- [ ] Spiegare le componenti libere e la soluzione di norma minima
- [ ] **La tabella dei tre metodi**: requisito, condizionamento, caso d'uso
- [ ] Scrivere `eqnorm`, `qrLS`, `SVDLS` da zero
- [ ] Costruire la matrice $B$ della regressione e stampare il residuo
- [ ] L'esercizio della circonferenza in entrambe le versioni
