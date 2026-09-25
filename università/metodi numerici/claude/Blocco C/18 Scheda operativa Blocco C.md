# Scheda operativa — Blocco C

> **A cosa serve**: i documenti [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)|14-15]], [[16 Metodi di discesa - dal sistema lineare al problema di minimo|16]] e [[17 Gradiente coniugato e velocita di convergenza|17]] sono la teoria. Questo è il filtro d'esame.
> Leggilo **giovedi 27 agosto** per sapere dove guardare, e **martedi 1 settembre** per verificare.
> ✅ Blocco chiuso il 1 settembre. ⚠️ La Prova #4 (7 maggio 2025) era prevista come verifica ma **non e' stata svolta**: il 7 maggio si legge in modalita' diagnostica 🅑 **domenica 6 settembre**.
> *Date riviste il 27 agosto: il Blocco B e' stato chiuso in anticipo di due giorni.*

---

## 0. Come leggere le slide

La nota [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)|14-15]] segue **esattamente l'ordine delle slide**, da 1.1 a 1.8 (le vecchie note 14 e 15 sono state fuse il 27 agosto). Corrispondenza fra capitoli del PDF e sezioni:

| Slide | Argomento | Nota |
|---|---|---|
| **1.1** | splitting $A=M-N$, $T=M^{-1}N$ | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#2. ⭐ Lo splitting: l'idea che genera tutti i metodi   *· slide §1.1*|14-15 §2]] |
| **1.2** | $A=D+E+F$, Jacobi, Gauss-Seidel | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#3. La decomposizione $A = D + E + F$   *· slide §1.2*|14-15 §3–5]] |
| **1.3** | definizione di convergenza, il limite e' la soluzione | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#6. Le due domande da porsi   *· slide §1.3*|14-15 §6]] |
| **1.4** | $e^{(k)}=T^ke^{(0)}$, $\rho(T)<1$, velocita' | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#7. ⭐ Errore, residuo, e la relazione che li lega   *· slide §1.4*|14-15 §7–8]] |
| **1.5** | condizioni sufficienti: norma, dominanza, SDP | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#9. 🎯 Le condizioni sufficienti — il drill dell'esame   *· slide §1.5*|14-15 §9]] · **[[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#10. 🎯🎯 Il drill: la stessa domanda, due teoremi diversi   *· slide §1.5*|§10]] (drill)** · [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#11. Sufficiente ≠ necessario: il Laboratorio 28/4|§11]] |
| **1.6** | condizionamento e velocita' di convergenza | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#12. Condizionamento e convergenza — l'esempio delle slide   *· slide §1.6*|14-15 §12]] |
| **1.7** | rilassamento, SOR, $\omega_{ott}$ | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#13. Rilassamento e metodo SOR   *· slide §1.7*|14-15 §13]] |
| **1.8** | criterio d'arresto | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#14. Criterio d'arresto   *· slide §1.8*|14-15 §14]] |

> ⚠️ **L'ordine di lettura e' libero, quello del codice no.** I 31 buchi di `jacobi`, `gauss_seidel` e `gauss_seidel_sor` vanno chiusi **entro venerdi 28**, a memoria, il giorno stesso in cui studi i metodi. Quel codice non si ricorda: si ricostruisce dalla teoria ($M=D+E$ ⟹ `Lsolve(M, b - F@x0)`). Scriverlo a distanza di giorni significa memorizzare righe invece di derivarle — ed e' cosi' che all'esame ci si blocca.

---

## 1. Perché è il blocco da non sacrificare

**51 dei 116 buchi dello scheletro — il 44% — stanno qui.**

| Funzione | Buchi | Giorno |
|---|---:|---|
| `jacobi` | 11 | ven 28 |
| `gauss_seidel` | 10 | ven 28 |
| `gauss_seidel_sor` | 10 | ven 28 |
| `steepestdescent` | 9 | lun 31 |
| `conjugate_gradient` | 11 | mar 1 set |
| **Totale** | **51** | |

E l'Esercizio 1 dell'esame è **sempre** sui sistemi lineari. Nelle prove che hai, i metodi di questo blocco compaiono così:

| Prova | Cosa chiede del Blocco C | Punti |
|---|---|---|
| **4 luglio 2024 T2** | GS converge senza calcolare $\rho$ + implementarlo | 4 |
| **10 gennaio 2025** | GS converge senza calcolare $\rho$ + implementarlo | 4 |
| **7 maggio 2025** | gradiente + CG + GS, confronto e analisi di $K(A)$ | ~9 |
| **12 giugno 2024 T2** | "almeno due metodi adatti alle caratteristiche" | parziale |

---

## 2. I teoremi da sapere a memoria

Sono **sei**, e cinque si enunciano in una riga.

**① Condizione necessaria e sufficiente** — il metodo $x^{(k)}=Tx^{(k-1)}+q$ converge per ogni $x^{(0)}$ ⟺ $\rho(T)<1$.

**② Condizione sufficiente sulla norma** — se esiste una norma matriciale con $\|T\|<1$, il metodo converge. *(perché $\rho(T)\le\|T\|$)*

**③ Dominanza diagonale stretta** — se $|a_{ii}|>\sum_{j\ne i}|a_{ij}|$ per ogni $i$, allora **Jacobi e Gauss-Seidel convergono entrambi**, con $\|T_G\|\le\|T_J\|<1$.

**④ Simmetrica definita positiva** — se $A$ è SDP, **Gauss-Seidel converge**. Per Jacobi **non è garantito**.

**⑤ Convergenza di SOR** — se $A$ è SDP, SOR converge per ogni $0<\omega<2$.

**⑥ Teorema 1 dei metodi di discesa** — se $A$ è SDP, risolvere $Ax=b$ equivale a minimizzare $F(x)=\frac12x^TAx-b^Tx$, perché $\nabla F=Ax-b$ e $H_F=A$.

Più due **formule** che vanno ricavate, non citate:

- il passo ottimo $\alpha^{(k)}=-\dfrac{\langle r^{(k)},p^{(k)}\rangle}{\langle Ap^{(k)},p^{(k)}\rangle}$, derivando la parabola in $\alpha$;
- l'errore $e^{(k)}=T^ke^{(0)}$, sottraendo $Mx=Nx+b$ da $Mx^{(k)}=Nx^{(k-1)}+b$.

---

## 3. 🎯 Il drill del 30 agosto

La domanda *"verificare senza calcolare il raggio spettrale che Gauss-Seidel converge"* è caduta **due volte** con matrici che richiedono **teoremi diversi**. Devi saper decidere in 60 secondi.

```python
n = A.shape[0]
sim = np.allclose(A, A.T)
dom = all(abs(A[i,i]) > sum(abs(A[i,j]) for j in range(n) if j != i) for i in range(n))
autov = np.linalg.eigvalsh(A) if sim else None
print("simmetrica:", sim, " dominante:", dom, " autovalori:", autov)
```

| Matrice | Simm. | Dominante | Def. pos. | Teorema |
|---|:--:|:--:|:--:|---|
| $\begin{bmatrix}8&0&1\\0&12&2\\1&2&-14\end{bmatrix}$ *(10 gen 2025)* | ✅ | ✅ | ❌ | **③ dominanza** |
| $\begin{bmatrix}8&0&1&1\\0&0.8&1&0\\1&1&2&0\\1&0&0&2\end{bmatrix}$ *(4 lug 2024 T2)* | ✅ | ❌ | ✅ | **④ SDP** |

> ⚠️ La prima è **simmetrica ma indefinita** (autovalore $-14.2$): rispondere "SDP" perché si vede la simmetria è l'errore che l'esercizio è costruito per far commettere.
> ⚠️ La seconda **non è dominante** (righe 2 e 3): rispondere "dominanza diagonale" senza controllare è l'altro errore.

**Ordine di verifica**: prima la dominanza (è immediata e copre entrambi i metodi); se fallisce, simmetria + autovalori.

---

## 4. Tabella decisionale — dati $A$ e $b$, quale metodo

| Caratteristica di $A$ | Metodo | Giustificazione da citare |
|---|---|---|
| Grande e **sparsa**, generica | Gauss-Seidel / SOR | niente fill-in; $O(kn^2)$ contro $O(n^3)$ |
| Grande e sparsa, **SDP** | **Gradiente coniugato** | $\le n$ iterazioni; velocità $\sim\sqrt K$ |
| SDP, iterativo elementare | Gradiente | velocità $\sim K$ |
| Diagonale strettamente dominante | Jacobi **o** Gauss-Seidel | teorema ③ |
| Simmetrica definita positiva | Gauss-Seidel (non Jacobi) | teorema ④ |
| GS converge ma lento ($\rho\approx1$) | **SOR** con $\omega>1$ | teorema ⑤, over-relaxation |
| GS non converge | SOR con $0<\omega<1$ | under-relaxation |
| Densa, dimensioni moderate | metodi **diretti** *(Blocco B)* | $O(n^3)$ una volta sola |

> ⚠️ **Gradiente e gradiente coniugato richiedono $A$ SDP.** Se non lo è, vanno esclusi **e va detto perché**: $F$ non ha minimo e $\langle Ap,p\rangle$ può essere $\le0$, quindi $\alpha^{(k)}$ perde significato.

---

## 5. Gli otto errori di codice del blocco

1. **`d.reshape(n,1)` dimenticato in `jacobi`** → broadcasting silenzioso, ottieni una matrice $n\times n$ invece di un vettore.
2. **`x0 = x` invece di `x0 = x.copy()`** → errore sempre nullo, il ciclo esce alla prima iterazione.
3. **`np.tril(A)` invece di `np.tril(A,-1)`** → la diagonale finisce sia in $D$ sia in $E$.
4. **In SOR, usare $M_\omega=D+\omega E$ dentro `Lsolve`** → $M_\omega$ serve **solo** per $T_\omega$; il sistema triangolare da risolvere è quello di Gauss-Seidel, con $M=D+E$.
5. **`r = b - A@x` invece di `r = A@x - b`** → il residuo deve coincidere con il gradiente $\nabla F=Ax-b$; con il segno sbagliato il metodo sale.
6. **⚠️⚠️ In `conjugate_gradient`, `rtr_old` calcolato dopo l'aggiornamento di `r`** → $\gamma=1$ costante, direzioni non più coniugate, il metodo converge lo stesso ma male. È l'errore più insidioso perché non dà nessun segnale.
7. **`vec_sol.append(x)` senza `.copy()`** → la traiettoria da disegnare è un punto solo.
8. **`Lsolve` non importata** → lo scheletro importa solo `numpy`; serve `from SolveTriangular import *`.

---

## 6. I grafici che l'esame chiede

> 🐍 Le ricette pronte, con il codice riga per riga: [[00c Python e grafici - guida essenziale per l'esame#Parte 6 — I grafici|00c · Parte 6 — I grafici]].


Sempre `semilogy`, mai `plot`.

```python
plt.semilogy(np.arange(it), err_vet, 'r.-', label='Jacobi')
plt.semilogy(np.arange(itgs), err_vet_gs, 'g.-', label='Gauss-Seidel')
plt.xlabel('iterazione k'); plt.ylabel('errore relativo')
plt.grid(True, which='both', alpha=0.3); plt.legend(); plt.show()
```

**Come si commenta**, in una cella markdown:

- l'andamento **rettilineo** conferma la convergenza lineare;
- la **pendenza** vale $\log\rho(T)$: la retta più ripida è il metodo con raggio spettrale minore;
- una retta quasi **orizzontale** significa $\rho\approx1$ e convergenza inutilizzabile in pratica;
- per il CG, il **crollo verticale** riflette la terminazione finita.

> ⚠️ Occhio alla lunghezza degli array: `err_vet` ha `it` elementi, quindi l'ascissa è `np.arange(it)` oppure `np.arange(1, it+1)`. Se sbagli di uno: `x and y must have same first dimension`.

---

## 7. Le frasi pronte

Da adattare e scrivere nelle celle markdown mentre risolvi.

> **Scelta del metodo.** *"La matrice $A$ è simmetrica (verificato con `np.allclose(A,A.T)`) e definita positiva (autovalori tutti positivi). Trattandosi inoltre di una matrice sparsa di grandi dimensioni, il metodo più adatto è il gradiente coniugato, che converge in al più $n$ iterazioni e non altera la struttura di sparsità."*

> **Convergenza di GS senza $\rho$.** *"La matrice è a diagonale strettamente dominante per righe, poiché $|a_{ii}|>\sum_{j\ne i}|a_{ij}|$ per ogni $i$. Per il teorema di convergenza dei metodi iterativi per matrici a diagonale strettamente dominante, sia Jacobi sia Gauss-Seidel convergono per ogni scelta dell'iterato iniziale, senza bisogno di calcolare il raggio spettrale della matrice di iterazione."*

> **Confronto Jacobi / Gauss-Seidel.** *"Il raggio spettrale della matrice di iterazione di Gauss-Seidel è minore di quello di Jacobi, il che giustifica la convergenza più rapida: per $k$ grande l'errore si riduce a ogni passo di un fattore circa pari a $\rho(T)$."*

> **Condizionamento e velocità.** *"L'elevato indice di condizionamento di $A$ si riflette sulla matrice di iterazione, il cui raggio spettrale risulta prossimo a 1: il metodo converge, ma la riduzione dell'errore per iterazione è lentissima. La convergenza teorica non garantisce l'efficienza pratica."*

> **Gradiente contro CG.** *"Entrambi hanno convergenza lineare, ma con fattori diversi: $q_G=\frac{K-1}{K+1}$ per il gradiente e $q_{CG}=\frac{\sqrt K-1}{\sqrt K+1}$ per il gradiente coniugato. Il numero di iterazioni cresce quindi come $K(A)$ nel primo caso e come $\sqrt{K(A)}$ nel secondo."*

---

## 8. Le cinque trappole teoriche

1. **"Non è dominante, quindi non converge."** Falso: la dominanza è **sufficiente**, non necessaria. La matrice 2 del Lab 28/4 non è dominante e Gauss-Seidel converge.
2. **"Gauss-Seidel è sempre meglio di Jacobi."** Falso: nella matrice 3 del laboratorio ha raggio spettrale **peggiore** ($4.68$ contro $2.52$). Non esiste ordinamento universale.
3. **"$A$ è SDP, quindi anche Jacobi converge."** Falso: il teorema ④ vale **solo** per Gauss-Seidel.
4. **"Il gradiente coniugato converge quadraticamente."** Falso: la convergenza è **lineare** per entrambi i metodi; cambia il fattore $q$, non l'ordine.
5. **"Residuo piccolo, quindi errore piccolo."** Falso: $e^{(k)}=A^{-1}r^{(k)}$, e con $A$ mal condizionata l'errore può essere enorme a residuo minuscolo.

---

## 9. Autotest di fine blocco — martedi 1 settembre

Rispondi **a voce, senza appunti**.

- [ ] Perché i metodi iterativi convengono su matrici sparse? Cos'è il fill-in?
- [ ] Costruisci lo splitting: $A=M-N$, $T=M^{-1}N$. Chi è $M$ per Jacobi, GS, SOR?
- [ ] **Ricava** $e^{(k)}=T^ke^{(0)}$
- [ ] Enuncia la condizione necessaria e sufficiente di convergenza
- [ ] Perché il grafico semilogaritmico dell'errore è una retta, e quanto vale la pendenza?
- [ ] Tre condizioni sufficienti di convergenza. Quale vale per GS ma non per Jacobi?
- [ ] Data $\begin{bmatrix}8&0&1\\0&12&2\\1&2&-14\end{bmatrix}$: quale teorema? E per $\begin{bmatrix}8&0&1&1\\0&0.8&1&0\\1&1&2&0\\1&0&0&2\end{bmatrix}$?
- [ ] Cosa cambia fra Jacobi e Gauss-Seidel nella formula per componenti? Quale dei due è parallelizzabile?
- [ ] Cos'è $\omega$ in SOR? Cosa succede per $\omega=1$, $\omega<1$, $\omega>1$? In che intervallo converge?
- [ ] **Ricava** $\nabla F=Ax-b$ e $H_F=A$, e concludi il Teorema 1
- [ ] **Ricava** il passo ottimo $\alpha^{(k)}$
- [ ] Perché il metodo del gradiente fa zig-zag?
- [ ] Cosa significa che due direzioni sono $A$-coniugate?
- [ ] Perché il CG termina in al più $n$ passi? E perché in pratica non succede?
- [ ] Le due stime di velocità in funzione di $K(A)$
- [ ] Quando **non** puoi usare gradiente e gradiente coniugato, e perché

---

## 10. Il ponte verso il Blocco D

Il Blocco D (interpolazione e minimi quadrati) riprende due fili di qui:

- il **condizionamento** come chiave di lettura: $K_2(A^TA)=K_2(A)^2$ è il motivo per cui le equazioni normali si scartano a favore di QR-LS;
- la **minimizzazione di una forma quadratica**: i minimi quadrati sono esattamente $\min\|Ax-b\|_2^2$, e le equazioni normali $A^TAx=A^Tb$ si ottengono annullando il gradiente — lo stesso conto del Teorema 1 di questo blocco.
