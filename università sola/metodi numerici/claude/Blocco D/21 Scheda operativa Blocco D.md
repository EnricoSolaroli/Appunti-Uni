# Scheda operativa — Blocco D

> **A cosa serve**: i documenti [[19 Minimi quadrati - equazioni normali, QR-LS e SVD-LS|19]] e [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue|20]] sono la teoria. Questo e' il filtro d'esame.
> Leggilo **mercoledi 2 settembre** per sapere dove guardare, e **sabato 5** per verificare.
> 📖 **Ordine**: prima la [[19 Minimi quadrati - equazioni normali, QR-LS e SVD-LS|19]] (minimi quadrati, Lab 5 maggio), poi la [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue|20]] (interpolazione, Lab 12 maggio) — e' l'ordine del corso.
> ✅ **Blocco chiuso il 2 settembre.** La verifica non e' piu' un singolo esercizio: il 10 gennaio 2025 si fa **per intero e cronometrato sabato 5** (vedi [[00 Piano esame settembre#🏁 RIPIANIFICAZIONE DEL 2 SETTEMBRE — la volata finale, 9 giorni|il calendario della volata finale]]).

---

## 1. Quanto pesa

> 🖼️ Le sette figure che riassumono il blocco: [[22 Blocco D in figure - i concetti chiave|22 Blocco D in figure]].


Sono **16 buchi su 116** — pochi — ma l'Esercizio 2 dell'esame vale 10-14 punti e ruota su cinque temi, di cui **due sono di questo blocco**. Nelle prove che hai:

| Prova | Cosa chiede del Blocco D | Punti |
|---|---|---|
| **10 gennaio 2025** | interpolazione di Lagrange + teorema dell'errore + **costante di Lebesgue** | **13** |
| **7 maggio 2025** | circonferenza: sistema quadrato + **QR-LS** su 4 punti | **14** |
| **Simulazione I** | interpolazione + QR-LS + teorema dell'errore + retta e cubica di regressione | **14** |

Tre prove su otto, e in tutte e tre e' **l'intero Esercizio 2**.

| Funzione | Buchi | Giorno |
|---|---:|---|
| `plagr` | 5 | mer 2 |
| `InterpL` | 3 | mer 2 |
| `eqnorm` | 2 | sab 5 |
| `qrLS` | 1 | sab 5 |
| `SVDLS` | 5 | sab 5 |

> 📌 **Dove sono i laboratori.** Interpolazione: **Esercitazione 12 (12/5)**, sei esercizi. Minimi quadrati: **Esercitazione 10 (5/5), Esercizi 6, 7 e 8** — gli ultimi tre di quel notebook, che per i primi cinque appartiene invece al Blocco C. Le celle 23-28 contengono i testi delle tre function, e `eqnorm` e' gia' svolta.
> L'**Esercizio 8** (compressione di immagini con SVD) e' fuori programma d'esame: falla dopo, se ti va.

---

## 2. I risultati da sapere a memoria

**① Esistenza e unicita'** — il polinomio interpolatore di $n+1$ punti a nodi distinti **esiste sempre ed e' unico** (Vandermonde ha sempre rango massimo).

**② Base di Lagrange** — $L_j^{(n)}(x)=\prod_{k\ne j}\dfrac{x-x_k}{x_j-x_k}$, con $L_j(x_i)=\delta_{ij}$, e $P_n(x)=\sum_j y_j L_j(x)$.

**③ ⭐⭐ Teorema dell'errore** — con $f\in C^{n+1}[a,b]$:
$$E(\bar x)=f(\bar x)-P_n(\bar x)=\frac{1}{(n+1)!}\,\omega_{n+1}(\bar x)\,f^{(n+1)}(\xi), \qquad \omega_{n+1}(\bar x)=\prod_{i=0}^n(\bar x-x_i)$$

**④ Nodi di Chebyshev** — $x_i=\cos\left(\dfrac{1+2i}{2(n+1)}\pi\right)$ minimizzano $\omega_{n+1}$ e danno convergenza.

**⑤ ⭐ Costante di Lebesgue** — $\Lambda_n=\max_x\sum_i|L_i(x)|$ e' il **condizionamento del problema di interpolazione**; $\Lambda_n\ge1$ sempre; cresce come $2^{n+1}/(e\,n\log n)$ con nodi equispaziati e come $(2/\pi)\log n$ con Chebyshev.

**⑥ ⭐ Equazioni normali** — $A^TAx=A^Tb$, con soluzione unica $\iff\text{rank}(A)=n$; $A^TA$ e' SDP quindi si risolve con **Cholesky**.

**⑦ ⚠️ $K_2(A^TA)=K_2(A)^2$**

**⑧ QR-LS** — $R_1x=h_1$ con $h=Q^Tb$; residuo minimo $\|h_2\|_2^2$.

**⑨ SVD** — $A=U\Sigma V^T$; $K_2(A)=\sigma_{max}/\sigma_{min}$; rango = numero di $\sigma_i\ne0$; soluzione di norma minima $x=\sum_{i=1}^k\frac{u_i^Tb}{\sigma_i}v_i$.

---

## 3. 🎯 La domanda che vale di piu': il teorema dell'errore

Formulazione del **10 gennaio 2025** (3 punti) e della **Simulazione I** (4 punti), praticamente identica:

> *"Si definisca teoricamente da cosa dipende l'errore che si compie quando al posto del polinomio interpolatore si considera la funzione che ha generato i dati, commentando opportunamente la formula."*

Non basta scrivere la formula: chiedono di **commentarla**. La risposta completa ha quattro pezzi.

1. **Le ipotesi**: $f\in C^{n+1}[a,b]$, nodi distinti in $[a,b]$, $\bar x\in[a,b]$.
2. **La formula**.
3. **I tre fattori**:
   - $f^{(n+1)}(\xi)$ → **regolarita' della funzione**: non e' sotto il nostro controllo;
   - $\omega_{n+1}(\bar x)$ → **disposizione dei nodi**: e' l'unica leva, e porta ai nodi di Chebyshev;
   - $1/(n+1)!$ → il grado.
4. **I due casi in cui l'errore e' nullo**: nei nodi ($\omega_{n+1}(x_i)=0$) e se $f$ e' un polinomio di grado $\le n$ ($f^{(n+1)}\equiv0$).

Se aggiungi che il fenomeno di Runge mostra come **aumentare $n$ non basti**, perche' $\omega_{n+1}$ puo' crescere piu' di quanto $(n+1)!$ smorzi, hai detto tutto.

---

## 4. Tabella decisionale — dati i dati, quale strumento

| Situazione | Metodo | Giustificazione |
|---|---|---|
| $n+1$ punti, dati **esatti**, si vuole passare per tutti | **interpolazione di Lagrange** | esiste ed e' unico |
| $m$ punti **rumorosi**, $m\gg n$ | **minimi quadrati** grado $n$ | l'interpolazione seguirebbe il rumore |
| Minimi quadrati, $A$ **ben condizionata** | `eqnorm` | efficiente; $A^TA$ e' SDP → Cholesky |
| Minimi quadrati, $A$ **moderatamente mal cond.** | `qrLS` | lavora su $A$, non su $A^TA$ |
| Minimi quadrati, **rango deficiente** o molto mal cond. | `SVDLS` | unico che non richiede rango massimo; da' la soluzione di norma minima |
| Interpolazione con **molti** nodi | nodi di **Chebyshev**, o **spline** | $\Lambda_n$ esplode con nodi equispaziati |
| Sistema **quadrato** $n\times n$ generico non simmetrico | **LU con pivoting** *(Blocco B)* | ⚠️ la trappola del 7 maggio |

---

## 5. Gli errori di codice del blocco

1. **`L` costruita con le dimensioni invertite** in `InterpL`: e' `(m, n)` — punti di valutazione per **righe**, nodi per **colonne**.
2. **Dimenticare `V = VT.T`** in `SVDLS`: `spLin.svd` restituisce $V^T$, come `lu` restituisce $P^T$.
3. **Trattare `s` come una matrice**: e' un **vettore** di valori singolari gia' ordinati.
4. **Usare `R` intera invece di `R[0:n,:]`** in `qrLS`: serve solo il blocco $R_1$, e $h_1=$ `h[0:n]`.
5. **Dimenticare il `.reshape(k,1)`** su `d1` e `s1` in `SVDLS`: la divisione `d1/s1` deve essere componente per componente fra due colonne.
6. **Usare Cholesky su una matrice non simmetrica** — la trappola del 7 maggio: verifica **sempre** `np.allclose(M, M.T)` prima di sceglierla.
7. **Costruire $b$ della circonferenza senza il segno meno**: i termini $x^2+y^2$ passano a destra **cambiati di segno**.

---

## 6. Le frasi pronte

> **Errore di interpolazione.** *"Per il teorema dell'errore, essendo $f\in C^{n+1}[a,b]$, si ha $E(\bar x)=\frac{1}{(n+1)!}\omega_{n+1}(\bar x)f^{(n+1)}(\xi)$ con $\xi\in(a,b)$. L'errore dipende quindi dalla regolarita' della funzione, tramite la derivata di ordine $n+1$, e dalla disposizione dei nodi, tramite il polinomio $\omega_{n+1}$. Il primo fattore e' un dato del problema; il secondo e' l'unico su cui si puo' agire, ed e' la ragione per cui si scelgono i nodi di Chebyshev."*

> **Costante di Lebesgue.** *"La costante di Lebesgue $\Lambda_n=\max_x\sum_i|L_i(x)|$ e' il coefficiente di amplificazione degli errori relativi sui dati e identifica quindi il numero di condizionamento del problema di interpolazione polinomiale. Dipende solo dalla scelta dei nodi. Vale sempre $\Lambda_n\ge1$ per la proprieta' di partizione dell'unita', e cresce esponenzialmente con nodi equispaziati, logaritmicamente con nodi di Chebyshev."*

> **Scelta fra interpolazione e minimi quadrati.** *"I dati sono sperimentali e quindi affetti da errori di misura: interpolarli produrrebbe un polinomio di grado elevato che segue il rumore anziche' la tendenza del fenomeno. Si sceglie percio' l'approssimazione ai minimi quadrati con un polinomio di grado basso."*

> **Perche' QR-LS e non equazioni normali.** *"Il metodo delle equazioni normali richiede di formare $A^TA$, la cui condizionamento e' il quadrato di quello di $A$: $K_2(A^TA)=K_2(A)^2$. Il metodo QR lavora direttamente su $A$ tramite trasformazioni ortogonali, che conservano la norma 2 e non amplificano gli errori, ed e' quindi numericamente piu' affidabile."*

> **Residuo.** *"Il residuo minimo vale $\|h_2\|_2^2$, dove $h_2$ sono le ultime $m-n$ componenti di $h=Q^Tb$: e' la parte del termine noto che nessuna scelta di $x$ puo' annullare, e misura di quanto il sistema sovradeterminato e' incompatibile."*

---

## 7. Le trappole teoriche

1. **"Aumentando il grado l'approssimazione migliora."** Falso: il fenomeno di Runge. E non e' un problema di arrotondamento, e' un fatto **teorico** sul polinomio esatto.
2. **"Con i nodi di Chebyshev il problema e' risolto."** Parziale: $\Lambda_n\to\infty$ **in entrambi i casi**, solo piu' lentamente. Gradi troppo alti restano mal condizionati; per molti nodi si usano le **spline**.
3. **"La costante di Lebesgue dipende dai dati."** Falso: dipende **solo dai nodi**. Si vede dal codice, dove i $y_i$ non compaiono.
4. **"$A^TA$ e' sempre risolubile."** Solo se $\text{rank}(A)=n$.
5. **"La SVD da' *la* soluzione."** Se il rango e' deficiente le soluzioni sono infinite: la SVD ne seleziona una, quella di **norma minima**, tramite una condizione aggiuntiva.
6. **"Se e' un esercizio di minimi quadrati, uso Cholesky."** Solo su $A^TA$, che e' SDP per costruzione. Sulla matrice $M$ del 7 maggio, che e' quadrata ma non simmetrica, serve LU.

---

## 8. Autotest di fine blocco — sabato 5 settembre

Rispondi **a voce, senza appunti**.

- [ ] Quanti punti servono per un polinomio di grado $n$? E perche' la soluzione e' unica?
- [ ] Perche' non si costruisce il polinomio risolvendo il sistema di Vandermonde?
- [ ] **Ricava** $L_j^{(n)}(x)$ dalla condizione $L_j(x_i)=\delta_{ij}$
- [ ] Cos'e' la partizione dell'unita' e a cosa serve?
- [ ] ⭐⭐ **Enuncia il teorema dell'errore e commenta i tre fattori**
- [ ] I due casi in cui l'errore di interpolazione e' esattamente nullo
- [ ] Descrivi il fenomeno di Runge. Perche' i nodi di Chebyshev lo risolvono?
- [ ] ⭐ **Definisci $\Lambda_n$ e di' che ruolo svolge.** Perche' $\Lambda_n\ge1$?
- [ ] Quando conviene interpolare e quando approssimare?
- [ ] Perche' un sistema sovradeterminato e' quasi sempre incompatibile?
- [ ] **Ricava** le equazioni normali
- [ ] Perche' $A^TA$ e' SDP, e sotto quale ipotesi?
- [ ] Quanto vale $K_2(A^TA)$ e che conseguenza ha?
- [ ] Perche' le trasformazioni ortogonali semplificano il problema?
- [ ] **Ricava** $R_1x=h_1$ e di' quanto vale il residuo minimo
- [ ] Cosa fa la SVD che gli altri due metodi non fanno?
- [ ] La tabella dei tre metodi: requisito, condizionamento, caso d'uso

---

## 9. Il ponte verso l'esame

Chiuso questo blocco hai visto **tutto il programma**. Restano tre giorni (8-10 settembre) per le due simulazioni complete e il ripasso.

Due fili che attraversano l'intero corso e che conviene saper raccontare per intero, perche' sono la struttura su cui l'esame e' costruito:

- **Il condizionamento**: $K=\left|\frac{f'(x)x}{f(x)}\right|$ per una funzione *(A)* → $K(A)=\|A^{-1}\|\|A\|$ per un sistema *(B)* → $\rho(T)$ e la sua dipendenza da $K(A)$ *(C)* → $\Lambda_n$ per l'interpolazione e $K_2(A^TA)=K_2(A)^2$ per i minimi quadrati *(D)*. **E' sempre la stessa domanda**: di quanto un errore sui dati si amplifica sul risultato?
- **La minimizzazione**: Newton per il minimo di $f$ *(A-bis)* → $Ax=b$ come minimo di $\frac12x^TAx-b^Tx$ *(C)* → minimi quadrati come minimo di $\|Ax-b\|_2^2$ *(D)*. **E' sempre lo stesso conto**: annulla il gradiente, verifica l'Hessiana.
