# Scheda operativa — Blocco B

> **A cosa serve**: i tre documenti precedenti sono la teoria. Questo è il filtro d'esame.
> Leggilo **lunedì 24 agosto** per sapere dove guardare, e **venerdì 28** per verificare.
> ✅ Blocco chiuso il 26 agosto. ⚠️ La Prova #3 (12 giugno 2024 T2) era prevista come verifica ma **non e' stata svolta**: il 12 giugno si legge in modalita' diagnostica 🅑 **venerdi 4 settembre**.

---

## 1. Quanto pesa davvero questo blocco

**L'Esercizio 1 è sui sistemi lineari in tutte e 8 le prove.** Vale 11–12 punti, più di un terzo del voto. I metodi diretti non lo esauriscono (gli iterativi e i metodi di discesa arrivano nel Blocco C), ma governano la parte di *riconoscimento* e *giustificazione* che apre ogni esercizio.

| Prova                                      | Cosa chiede del Blocco B                                                                                                                                                                                                        | Punti |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **Simulazione II**                         | *"dire se è possibile applicare Cholesky **richiamando il Teorema** e **verificare sperimentalmente le ipotesi di applicabilità**"* + risolvere, o altrimenti scegliere un'altra fattorizzazione **spiegandone le motivazioni** | 2     |
| **Simulazione III** / **4 luglio 2024 T1** | fattorizzazione LU con `scipy.linalg.lu` → **determinante** (2 pt) e **inversa risolvendo $n$ sistemi** (2 pt), confrontando con `numpy.linalg.det`/`inv`                                                                       | 4     |
| **Simulazione I**                          | perturbazione dello 0.1% su $b[0]$, errore relativo su dati e soluzione, giustificazione con $K(A)$                                                                                                                             | 4     |
| **10 gennaio 2025**                        | perturbazione dell'1% su $b[0]$, idem                                                                                                                                                                                           | 3     |
| **4 luglio 2024 T2**                       | perturbazione dello 0.1%, idem                                                                                                                                                                                                  | 2     |
| **7 maggio 2025**                          | *"analizzare l'indice di condizionamento delle due matrici e richiamare teoricamente cosa questo implica in termini di velocità di convergenza"*                                                                                | 3     |
| **Tutte**                                  | *"individuare il metodo più adatto analizzando le caratteristiche delle matrici"*                                                                                                                                               | 2–8   |

> 🔑 Il singolo pattern più redditizio dell'intero esame è **perturbare il termine noto e giustificare con $K(A)$**: compare in 4 prove su 8, e la procedura è sempre identica. Se lo sai fare in 10 minuti senza pensarci, hai messo al sicuro 3–4 punti in ogni appello.

---

## 2. ⭐ Le derivazioni da saper fare su foglio bianco

Solo due, più una formula. Poche, perché in questo blocco l'esame chiede soprattutto di **citare e verificare**, non di dimostrare.

### D5 — $K(A)=\|A^{-1}\|\,\|A\|$ dalla perturbazione del termine noto

$A(x+\delta x)=b+\delta b$ → usa $Ax=b$ → $\delta x=A^{-1}\delta b$ → norme → $\|\delta x\|\le\|A^{-1}\|\|\delta b\|$; poi da $\|b\|\le\|A\|\|x\|$ ricavi $\frac1{\|x\|}\le\frac{\|A\|}{\|b\|}$ e **moltiplichi le due**.
*Il passaggio che si dimentica*: il secondo, quello che serve a passare agli errori **relativi**.

### D6 — determinante via LU

$\det(PA)=\det(L)\det(U)=\prod u_{ii}$ perché $\det L=1$; $\det(PA)=\det(P)\det(A)$ e $\det(P)=(-1)^s$ ⟹ $\det(A)=(-1)^s\prod u_{ii}$.

### F — $K_2(A)=\dfrac{\sqrt{\lambda_{\max}(A^TA)}}{\sqrt{\lambda_{\min}(A^TA)}}=\dfrac{\sigma_{\max}}{\sigma_{\min}}$, e $K_2(A^TA)=K_2(A)^2$

La derivazione è facoltativa; **la formula e la conseguenza no** — quest'ultima è la ragione per cui nel Blocco D si usa QR-LS invece delle equazioni normali.

---

## 3. 🎯 Il pezzo più redditizio: le cinque domande

Il compito che ricorre di piu' **non** e' enunciare ne' dimostrare: e' *"analizzando le caratteristiche della matrice, individuare il metodo piu' adatto"*. E' il primo punto di ogni Esercizio 1 e vale 2 punti.

> ⚠️ **All'esame non porti nessuna funzione.** Non devi ricordare del codice: devi ricordare **cinque domande**. Il codice di ciascuna e' una sola riga ovvia.

### Le cinque righe da scrivere a memoria

```python
print(A.shape)                                              # 1. che forma ha?
print(np.allclose(A, A.T))                                  # 2. e' simmetrica?
print(np.linalg.eigvals(A))                                 # 3. autovalori
print(np.linalg.cond(A))                                    # 4. quanto e' condizionata?
print(2*np.abs(np.diag(A)) - np.sum(np.abs(A), axis=1))     # 5. dominanza: tutti > 0?
```

Tre delle cinque sono `np.linalg.` piu' la parola ovvia (`eigvals`, `cond`). Le altre due sono `shape` e `allclose`.

**La riga 5 spiegata**, perche' e' l'unica non ovvia: la dominanza diagonale stretta e' $|a_{ii}| > \sum_{j\ne i}|a_{ij}|$. Sommando $|a_{ii}|$ da entrambe le parti diventa $2|a_{ii}| > \sum_j |a_{ij}|$, cioe' **la riga 5 e' positiva ovunque**. Se non te la ricordi non e' un dramma: guardi la matrice a occhio, su un $3\times3$ o $4\times4$ si vede.

### Come si leggono, in ordine

| Domanda | Se... | Allora |
|---|---|---|
| **1. forma** | $m \ne n$ | **minimi quadrati** — salta alle altre domande su rango e $K_2$ |
| **2. simmetrica** | `False` | niente Cholesky, niente metodi di discesa. Vai a **LU con pivoting** |
| **3. autovalori** | simmetrica **e** tutti $>0$ | **SDP** → **Cholesky** (unica con stabilita' forte) · Gauss-Seidel converge · gradiente e CG applicabili |
| | simmetrica ma segni misti | e' **indefinita**: LU con pivoting |
| **4. $K_2$** | $<10^3$ | ben condizionata, LU va benissimo |
| | $>10^8$ | mal condizionata: preferisci **QR**, e aspettati di perdere $\log_{10}K$ cifre |
| **5. dominanza** | tutti $>0$ | **Jacobi E Gauss-Seidel convergono** entrambi |
| | qualcuno $\le 0$ | **non concludi niente**: e' una condizione sufficiente |

> ⚠️ Gli autovalori servono per la definita positiva **solo se la matrice e' simmetrica**. Su una matrice non simmetrica `eigvals` puo' restituire numeri complessi: non guardarli, la domanda "e' SDP" e' gia' chiusa dalla riga 2.

### La frase che prende i 2 punti

Il codice da solo non basta. Il modello, da riempire con i tuoi numeri:

> *"$A_1$ e' quadrata, simmetrica e con tutti gli autovalori positivi, quindi definita positiva: si applica la fattorizzazione di **Cholesky**, l'unica fra le tre con stabilita' forte. $K_2(A_1)=2.4$, quindi il problema e' ben condizionato e non ci si aspetta perdita di cifre significative."*

### 🛠️ `diagnostica.py` — solo per allenarsi, non per l'esame

In `esame_settembre/diagnostica.py` c'e' una versione lunga che stampa direttamente il verdetto. **Non e' materiale d'esame**: serve adesso, in preparazione, per **controllare se hai interpretato bene** le cinque righe. Scrivi la tua conclusione, poi lanci `diagnostica(A)` e verifichi. Quando le due coincidono sempre, il file non ti serve piu'.

---

## 4. Tabella decisionale — parte "metodi diretti", completata

| Caratteristiche di $A$ | Metodo | Teorema / motivo | Costo |
|---|---|---|---|
| Triangolare (inf. o sup.) | sostituzione avanti / indietro | diretta, nessuna fattorizzazione | $O(n^2/2)$ |
| **Simmetrica e definita positiva**, densa | **Cholesky** $A=LL^T$ | Teorema di Cholesky; sfrutta la simmetria | $\frac16 n^3$ |
| Piena, non singolare, generica | **LU con pivoting** ($PA=LU$) | Teorema 2: esiste per ogni $A$ non singolare | $\frac13 n^3$ |
| Sottomatrici principali di testa non singolari | LU **senza** pivoting | Teorema 1 (esistenza e unicità) — ma il pivoting si usa comunque, per stabilità | $\frac13 n^3$ |
| **Mal condizionata** / si vuole massima stabilità | **QR** $A=QR$ | $Q$ ortogonale ⟹ $K_2(Q)=1$, non amplifica gli errori; $\vert r_{ij}\vert \le\sqrt n\max\vert a_{ij}\vert $ contro $2^{n-1}$ di LU | $\frac23 n^3$ |
| **Ortogonale** | $x=Q^Tb$ (nessuna fattorizzazione!) | $Q^{-1}=Q^T$; $K_2=1$, sempre ben condizionato | $O(n^2)$ |
| Rettangolare $m>n$ a rango pieno | **QR-LS** *(Blocco D)* | più stabile delle equazioni normali: $K_2(A^TA)=K_2(A)^2$ | — |
| Grande e **sparsa** | metodi **iterativi** *(Blocco C)* | non modificano $A$, sfruttano la sparsità | — |

> 💡 **La sequenza di domande da farsi**, in quest'ordine: è triangolare? → è simmetrica? → se sì, è definita positiva? → è grande e sparsa? → è mal condizionata?
> Le prime due si leggono a occhio, la terza con `eigvalsh`, la quarta con la densità, la quinta con `cond`.

---

## 5. Il ponte teoria ↔ Laboratorio 9 (23 aprile)

| Es. | Concetto allenato | Collegamento teorico |
|---|---|---|
| **1** | Vandermonde $6\times6$: $K_\infty$ calcolato **a mano** ($\Vert A\Vert_\infty\Vert A^{-1}\Vert_\infty$) e con `np.linalg.cond`; perturbazione $\delta b=0.025\,e_1$ | definizione di $K(A)$, doc 07 [[10 Scheda operativa Blocco B#3. 🎯 Il pezzo più redditizio: le cinque domande|§3]] |
| **2** | Matrice $3\times3$ mal condizionata, perturbazione **della matrice** $\delta A=0.01\,e_1e_1^T$ | caso 2 del condizionamento, doc 07 [[10 Scheda operativa Blocco B#3. 🎯 Il pezzo più redditizio: le cinque domande|§3]] |
| **3** | Hilbert di ordine 4, perturbazione $\delta b=0.01\,[1,-1,1,-1]^T$ | $K_2(H_4)\approx1.55\cdot10^4$, doc 07 [[10 Scheda operativa Blocco B#6. 🪤 Le trappole di codice|§6]] |
| **Note 1–3** | Convenzioni di `scipy.linalg.lu`, `cholesky`, `qr` | ⚠️ la trappola di $P$ vs $P^T$, doc 08 [[10 Scheda operativa Blocco B#6. 🪤 Le trappole di codice|§6]] |
| **4** | `LUsolve(P,L,U,b)` combinando `Lsolve` e `Usolve` | $Ly=Pb$, $Ux=y$, doc 08 [[10 Scheda operativa Blocco B#5. Il ponte teoria ↔ Laboratorio 9 (23 aprile)|§5]] |
| **5** | `solve_nsis(A,B)` → **inversa** risolvendo $n$ sistemi | doc 08 [[10 Scheda operativa Blocco B#7. Domande tipo → cosa citare|§7]] |
| **6** | **Determinante** da $PA=LU$ | $\det A=(-1)^s\prod u_{ii}$, doc 08 [[10 Scheda operativa Blocco B#8. Errori classici|§8]] |
| **7–8** | Hankel e matrice a crescita esponenziale: **LU contro QR**, errore in `loglog` | stabilità debole/forte, doc 09 [[10 Scheda operativa Blocco B#4. Tabella decisionale — parte "metodi diretti", completata|§4–5]] |

Gli esercizi 1–3 sono la palestra del pattern più redditizio dell'esame; il 4–6 sono letteralmente l'esercizio della Simulazione III; il 7–8 sono la verifica sperimentale della classifica di stabilità.

---

## 6. 🪤 Le trappole di codice

**1. `scipy.linalg.lu` restituisce $P^T$, non $P$.** Usa `P = PT.T`. Sul $2\times2$ della Nota 1 la permutazione è simmetrica e l'errore non si vede; su una $4\times4$ con più scambi sì. *(Verificato: `PT.T @ A == L @ U` → True; `PT @ A == L @ U` → False.)*

**2. Con $P$, permuta anche il termine noto.** $Ly=Pb$, non $Ly=b$.

**3. `b = np.sum(A, axis=1).reshape(n,1)`** costruisce $b$ tale che la soluzione esatta sia $[1,\dots,1]^T$. Serve in ogni esercizio in cui devi calcolare l'**errore vero**. Memorizzalo.

**4. Perturbazione assoluta vs percentuale.** *"Perturbare della quantità $\delta b=0.025\,e_1$"* → `b_pert[0] += 0.025`. *"Perturbare dello 0.1% la componente 0-esima"* → `b_pert[0] = b[0]*(1+0.001)`. Sono cose diverse: leggi il testo.

**5. `np.linalg.eigvalsh` per matrici simmetriche**, non `eigvals`: restituisce autovalori reali ordinati e non introduce parti immaginarie spurie.

**6. `cholesky` solleva un'eccezione** se la matrice non è definita positiva: mettila in `try/except` se non vuoi che il notebook si fermi a metà.

**7. Coerenza delle norme.** Se calcoli $K$ in norma $\infty$, usa la norma $\infty$ anche per gli errori relativi. Mescolare le norme non è un errore grave (sono equivalenti) ma rende il confronto con $K(A)$ meno pulito.

---

## 7. Domande tipo → cosa citare

| Se ti chiedono… | Cita… |
|---|---|
| "individuare il metodo più adatto alle caratteristiche della matrice" | la tabella decisionale [[10 Scheda operativa Blocco B#4. Tabella decisionale — parte "metodi diretti", completata|§4]] — e **mostra la verifica in Python** delle proprietà che invochi |
| "dire se è possibile applicare Cholesky" | **Teorema di Cholesky** (simmetrica + definita positiva ⟹ $\exists L$ con $l_{ii}>0$, $A=LL^T$), poi verifica simmetria e autovalori |
| "…altrimenti ricorrere a un altro metodo spiegandone le motivazioni" | **Teorema 2**: $A$ non singolare ⟹ $\exists P$ con $PA=LU$, quindi LU con pivoting è sempre applicabile |
| "giustificare l'errore sulla soluzione rispetto a quello sui dati" | $\frac{\Vert \delta x\Vert}{\Vert x\Vert}\le K(A)\frac{\Vert \delta b\Vert}{\Vert b\Vert}$ + la regola $K\approx10^k$ ⟹ perdi $k$ cifre |
| "cosa implica il valore di $K(A)$ calcolato" | tabella [[10 Scheda operativa Blocco B#4. Tabella decisionale — parte "metodi diretti", completata|§4]] del doc 07: $K\cdot\varepsilon_{\text{mach}}$ = errore relativo atteso |
| "quando esiste la fattorizzazione LU" | **Teorema 1** (sottomatrici principali di testa $A_k$, $k=1..n-1$, non singolari) per l'unicità senza $P$; **Teorema 2** con $P$ |
| "perché si usa il pivoting a perno massimo anche quando non serve" | perché garantisce $\vert l_{ij}\vert \le1$: è una scelta di **stabilità**, non di esistenza |
| "confrontare LU e QR" | LU $\frac13n^3$ ma $\vert u_{ij}\vert \le2^{n-1}\max\vert a_{ij}\vert $ (debole); QR $\frac23n^3$ ma $\vert r_{ij}\vert \le\sqrt n\max\vert a_{ij}\vert $ e $Q$ ortogonale ($K_2=1$) |
| "perché non usare l'inversa / Cramer" | inversa: $n$ sistemi + meno stabile ($7x=21$). Cramer: $O((n+1)!)$, per $n=20$ sono 1620 anni |
| "calcolare il determinante sfruttando LU" | $\det A=(-1)^s\prod u_{ii}$, con $s$ = numero di scambi |

---

## 8. Errori classici

1. **Confondere applicabilità e condizionamento.** Hilbert è SDP (Cholesky si applica) *ed* è mal condizionata. Le due cose non si escludono e vanno dette separatamente.
2. **Dire "il metodo è instabile"** invece di "l'algoritmo di fattorizzazione è stabile in senso debole". La terminologia forte/debole è precisa e la valutano.
3. **Dimenticare di permutare $b$** quando c'è pivoting.
4. **Verificare la definita positività su una matrice non simmetrica.** Il criterio degli autovalori positivi vale per matrici **simmetriche**: prima verifica la simmetria, poi gli autovalori.
5. **Rispondere "uso Cholesky perché è più veloce"** senza aver verificato le ipotesi. L'ordine è: verifico → cito il teorema → applico.
6. **Calcolare $K(A)$ e non commentarlo.** Il numero da solo non vale punti: vale la frase che lo lega alle cifre perse.

---

## 9. Autotest di fine blocco — venerdì 28 agosto

Rispondi **a voce, senza appunti**.

- [ ] Enuncia Rouché–Capelli e di' cosa distingue un sistema sottodeterminato da uno sovradeterminato
- [ ] Tre condizioni equivalenti perché $A$ sia non singolare
- [ ] Perché non si risolve $Ax=b$ con $x=A^{-1}b$, e perché non con Cramer (con i numeri)
- [ ] **Ricava** $K(A)=\|A^{-1}\|\|A\|$ dalla perturbazione del termine noto *(D5)*
- [ ] Quanto vale $K(I)$? E il minimo possibile di $K(A)$? Perché?
- [ ] Perché $K_2(A)=1$ se $A$ è ortogonale, e che conseguenza ha
- [ ] Se $K(A)\approx10^{9}$, quante cifre significative ti aspetti di perdere in doppia precisione?
- [ ] Cos'è $K_2(A^TA)$ in funzione di $K_2(A)$, e perché conta
- [ ] Due esempi di matrici notoriamente mal condizionate
- [ ] Costo di una sostituzione in avanti; costo di LU; di Cholesky; di QR
- [ ] **Enuncia il Teorema 1** e di' su quali indici $k$ agisce l'ipotesi
- [ ] **Enuncia il Teorema 2** e di' se $P$ è unica
- [ ] Perché si usa il perno massimo anche quando il Teorema 1 è soddisfatto
- [ ] Scrivi i due sistemi da risolvere quando $PA=LU$
- [ ] **Enuncia il Teorema di Cholesky** e di' come verifichi le sue ipotesi in Python
- [ ] La fattorizzazione QR esiste sempre? È unica?
- [ ] Come si risolve $Ax=b$ con QR — e perché il primo passo non è un sistema
- [ ] Definisci stabilità in senso forte e in senso debole
- [ ] Classifica LU, Cholesky e QR per stabilità, con le maggiorazioni
- [ ] Perché QR è più stabile di LU — la ragione profonda
- [ ] **Ricava** $\det(A)$ da $PA=LU$ *(D6)*
- [ ] Come si calcola l'inversa con una sola fattorizzazione
