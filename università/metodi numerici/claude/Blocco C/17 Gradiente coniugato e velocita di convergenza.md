# Il gradiente coniugato e la velocità di convergenza

> **Blocco C · giorno 6 di 6 — martedi 1 settembre** (giornata piena: teoria, codice, laboratorio e prova) · Fonte: `Metodi_di_discesa.pdf` (pp. 17–23)
> Materiale interattivo: `Metodo_Gradiente_Coniugato.html`
> Laboratorio collegato: **Esercitazione 10 (5/5), Esercizi 2, 2-bis, 3, 4 e 5** · Buchi: `conjugate_gradient` (11)
> ⏱️ L'**Esercizio 1 del 7 maggio 2025** e' esattamente su questo argomento: lettura diagnostica 🅑 domenica 6 settembre.

---

## 1. Il problema da risolvere

Il metodo del gradiente sceglie $p^{(k)}=-r^{(k)}$, cioè usa **solo informazione locale**. Il teorema di ortogonalità garantisce che $r^{(k+1)}\perp p^{(k)}$, quindi le direzioni successive sono ortogonali e la traiettoria fa zig-zag: ogni passo, muovendosi in una direzione nuova, **disfa parte del progresso** fatto nella direzione precedente.

L'idea del gradiente coniugato (Hestenes e Stiefel, 1952) è costruire direzioni tali che **ogni nuova direzione riduca una componente dell'errore senza compromettere quanto ottenuto ai passi precedenti**.

---

## 2. ⭐ Direzioni coniugate

### L'osservazione geometrica

Data un'ellisse e fissata una direzione $p^{(0)}$, i **punti medi delle corde parallele** a quella direzione giacciono su una retta. La direzione di quella retta è detta **coniugata** alla prima — e punta verso il centro dell'ellisse, cioè verso il minimo.

### La definizione algebrica

$$\boxed{\langle Ap^{(k)}, p^{(k-1)}\rangle = 0}$$

Poiché $A$ è simmetrica definita positiva, essa definisce un **prodotto scalare**

$$\langle u,v\rangle_A = u^TAv$$

e la condizione di coniugazione si riscrive come

$$\langle p^{(k)},p^{(k-1)}\rangle_A = 0$$

**Direzioni coniugate = direzioni ortogonali rispetto al prodotto scalare indotto da $A$.** È ortogonalità, ma nella metrica "giusta" per il problema — quella che tiene conto della forma delle ellissi invece di ignorarla.

---

## 3. ⭐ Il metodo

La direzione si costruisce correggendo l'antigradiente con la direzione precedente:

$$\boxed{p^{(k)} = -r^{(k)} + \gamma_k\,p^{(k-1)}, \qquad k\ge1}$$

Il parametro $\gamma_k$ è scelto **imponendo la coniugazione** $\langle Ap^{(k)},p^{(k-1)}\rangle=0$. Nel caso quadratico il conto si semplifica moltissimo e dà la formula compatta

$$\boxed{\gamma_k = \frac{\langle r^{(k)},r^{(k)}\rangle}{\langle r^{(k-1)},r^{(k-1)}\rangle}}$$

**Non serve $A$ per calcolare $\gamma$**: è un rapporto di due norme di residui consecutivi. Questo è ciò che rende il metodo economico.

### Le due proprietà fondamentali

$$\langle r^{(k)},r^{(j)}\rangle = 0 \quad \forall j<k \qquad\qquad \langle Ap^{(k)},p^{(j)}\rangle = 0 \quad \forall j<k$$

I **residui** sono ortogonali fra loro (in senso ordinario), le **direzioni** sono $A$-coniugate fra loro. Non solo a due a due consecutivi: **tutte**.

### L'algoritmo

Dato $x^{(0)}$: $\;r^{(0)}=Ax^{(0)}-b$, $\;p^{(0)}=-r^{(0)}$. Per $k=0,1,2,\dots$

$$\alpha_k = -\frac{\langle r^{(k)},p^{(k)}\rangle}{\langle Ap^{(k)},p^{(k)}\rangle} \qquad x^{(k+1)} = x^{(k)}+\alpha_kp^{(k)} \qquad r^{(k+1)} = r^{(k)}+\alpha_kAp^{(k)}$$

$$\gamma_{k+1} = \frac{\langle r^{(k+1)},r^{(k+1)}\rangle}{\langle r^{(k)},r^{(k)}\rangle} \qquad p^{(k+1)} = -r^{(k+1)}+\gamma_{k+1}p^{(k)}$$

Criterio d'arresto: $\|r^{(k)}\|\le\varepsilon$ (nel laboratorio, $\|r^{(k)}\|_2/\|b\|_2 < tol$).

> 📌 **L'algoritmo richiede una sola moltiplicazione matrice-vettore per iterazione** — esattamente come il metodo del gradiente. Il costo per iterazione è lo stesso, ma le iterazioni sono molte meno. È un miglioramento gratuito.

---

## 4. Il codice, e l'unico punto in cui si sbaglia

```python
def conjugate_gradient(A, b, x0, itmax, tol):
    n, m = A.shape
    if n != m:
        print("Matrice non quadrata"); return [], []
    x = x0
    r = A @ x - b
    p = -r
    it = 0
    nb = np.linalg.norm(b)
    errore = np.linalg.norm(r) / nb
    vec_sol = [];  vec_sol.append(x.copy())
    vet_r  = [];   vet_r.append(errore)

    while errore >= tol and it < itmax:
        it = it + 1
        Ap = A @ p
        alpha = -(r.T @ p) / (p.T @ Ap)
        x = x + alpha * p
        vec_sol.append(x.copy())

        rtr_old = r.T @ r                 # ⚠️⚠️ PRIMA di aggiornare r
        r = r + alpha * Ap
        gamma = (r.T @ r) / rtr_old       # gamma = ||r_nuovo||² / ||r_vecchio||²

        errore = np.linalg.norm(r) / nb
        vet_r.append(errore)
        p = -r + gamma * p                # unica differenza dal gradiente
    return x, vet_r, np.array(vec_sol).squeeze(), it
```

Rispetto a `steepestdescent` cambiano **due sole righe**: il calcolo di `gamma` e l'aggiornamento di `p`. Tutto il resto è identico.

> ⚠️⚠️ **`rtr_old = r.T @ r` va salvato PRIMA della riga `r = r + alpha*Ap`.** Il denominatore di $\gamma$ è la norma del residuo **vecchio**: se lo calcoli dopo l'aggiornamento ottieni $\gamma=1$ costante, le direzioni non sono più coniugate e il metodo degenera in qualcosa di peggiore del gradiente semplice. È l'errore più insidioso del blocco, perché il codice gira e converge lo stesso — solo molto più lentamente.
>
> ⚠️ `p = -r + gamma*p` e non `p = -r - gamma*p`. Il segno è quello della definizione.

---

## 5. ⭐⭐ La proprietà di terminazione finita

> **Osservazione.** Per $A\in\mathbb{R}^{n\times n}$ simmetrica definita positiva, il gradiente coniugato in **aritmetica esatta** determina la soluzione esatta di $Ax=b$ in **al più $n$ iterazioni**.

*Perché*: i residui sono ortogonali fra loro e le direzioni $A$-coniugate. In $\mathbb{R}^n$ non si possono costruire più di $n$ vettori linearmente indipendenti, quindi dopo al più $n$ passi si è generata una **base** $A$-coniugata dello spazio, lungo la quale $F$ è stata minimizzata completamente in ogni componente.

**In pratica**, l'aritmetica finita degrada l'ortogonalità e la coniugazione, quindi il metodo non termina esattamente in $n$ passi. Ma il numero di iterazioni necessarie per una buona approssimazione è spesso **molto inferiore a $n$**, soprattutto se $A$ è ben condizionata o se si usa un **precondizionatore**.

> 📌 Questo cambia la natura del metodo: il CG è formalmente un metodo **diretto** (termina in $n$ passi) ma si usa come **iterativo** (lo si ferma molto prima). È un ottimo punto da citare.

### La dimostrazione visiva

![[discesa_zigzag_vs_coniugato.png]]

Su $A=\begin{bmatrix}8&4\\4&3\end{bmatrix}$, $b=\begin{bmatrix}8\\10\end{bmatrix}$, $x^{(0)}=0$: il gradiente impiega **99 iterazioni**, il gradiente coniugato ne impiega **2**. E 2 è esattamente $n$. Il pannello centrale mostra la traiettoria: nessuno zig-zag, due segmenti e si è arrivati.

Il grafico del residuo a destra rende visibile la differenza fra le due nature: il gradiente scende lungo una **retta** (convergenza lineare, pendenza $\log q$), il CG **crolla** verticalmente.

---

## 6. ⭐ Velocità di convergenza: il confronto che l'esame chiede

Con la norma $\|x\|_A=\sqrt{x^TAx}$ ed errore $e^{(k)}=x^{(k)}-x^*$:

| Metodo | Maggiorazione | Fattore $q$ |
|---|---|---|
| **Gradiente** | $\Vert e^{(k)}\Vert_A \le \left(\dfrac{K(A)-1}{K(A)+1}\right)^{k}\Vert e^{(0)}\Vert_A$ | $\dfrac{K-1}{K+1}$ |
| **Gradiente coniugato** | $\Vert e^{(k)}\Vert_A \le \left(\dfrac{\sqrt{K(A)}-1}{\sqrt{K(A)}+1}\right)^{k}\Vert e^{(0)}\Vert_A$ | $\dfrac{\sqrt K-1}{\sqrt K+1}$ |

**Entrambi hanno convergenza lineare**, ma il CG lavora con $\sqrt{K}$ invece di $K$. Tradotto in numero di iterazioni: il gradiente ne richiede $\sim K$, il gradiente coniugato $\sim\sqrt{K}$.

![[velocita_gradiente_vs_CG.png]]

> ⚠️ **Non dire "il CG converge quadraticamente".** L'ordine di convergenza resta **lineare** per entrambi; quello che cambia è il *fattore* $q$. La differenza è nella costante, non nell'ordine. È un errore frequente e all'orale si nota.

### La verifica sperimentale — Esercizio 3 del Lab 10

La matrice di Poisson di ordine $n$ è simmetrica definita positiva, sparsa, e il suo condizionamento cresce con $n$. Risolvendo $Ax=b$ con $b$ tale che $x=[1,\dots,1]^T$, tolleranza $10^{-10}$:

| $n$ | $K_2(A)$ | gradiente | gradiente coniugato |
|---:|---:|---:|---:|
| 10 | 11.9 | 111 | **5** |
| 20 | 39.9 | 406 | **9** |
| 40 | 144.6 | 1 484 | **20** |
| 60 | 314.1 | 3 172 | **25** |
| 80 | 548.5 | 5 446 | **30** |
| 100 | 847.8 | 8 296 | **34** |

Da leggere così: passando da $n=10$ a $n=100$, il condizionamento cresce di **71 volte** e le iterazioni del gradiente crescono di **75 volte** — cioè linearmente in $K$, come previsto. Quelle del CG crescono di **7 volte**, contro un $\sqrt{K}$ che cresce di 8.5 — cioè come la radice. E in ogni riga il CG rispetta $it \le n$.

> 📌 **La frase da scrivere nella cella markdown**: *"il numero di iterazioni del metodo del gradiente cresce linearmente con $K(A)$, mentre quello del gradiente coniugato cresce come $\sqrt{K(A)}$; questo è coerente con le stime teoriche $q_G=\frac{K-1}{K+1}$ e $q_{CG}=\frac{\sqrt K-1}{\sqrt K+1}$."*

---

## 6-bis. La mappa degli otto esercizi del Laboratorio 10

Il notebook del 5 maggio copre **due blocchi**: i primi cinque esercizi sono metodi di discesa, gli ultimi tre sono minimi quadrati (Blocco D, sabato 5 settembre).

| # | Contenuto | Blocco |
|---|---|---|
| 1 · 1-bis | `steepestdescent` e la variante `_CL` con le curve di livello | **C** |
| 2 · 2-bis | `conjugate_gradient` e la variante `_CL` | **C** |
| 3 | matrice di **Poisson**, gradiente contro CG al variare di $n$ | **C** |
| 4 | matrice di **Hilbert** $5\times5$ | **C** |
| 5 | matrici `creaG`, $m=16$ e $m=400$ (grandi e sparse) | **C** |
| 6 · 7 · 8 | minimi quadrati, regressione, SVD per immagini | **D** |

### Le varianti `_CL`

**CL = Curve di Livello.** Stesso algoritmo, con quattro argomenti in piu' (`X, Y, Z, f`) e due `plot` dentro il ciclo:

```python
plt.contour(X, Y, Z, levels=f(x, A, b).flatten())   # la curva di livello che passa per x
plt.plot(x[0], x[1], 'r-o')                          # l'iterato
```

Il trucco e' nei `levels`: si disegna la curva di livello **alla quota dell'iterato corrente**, cosi' si vede l'iterato scendere. `.flatten()` serve perche' `f` restituisce un array $(1,1)$.

> ⚠️ Si usano **solo per $n=2$** e **non sono nello scheletro d'esame**: `scheletri_VERGINE.py` contiene solo `steepestdescent` e `conjugate_gradient`. Se all'esame serve la traiettoria, la disegni **fuori** dalla funzione usando `iterates_array` che gia' restituisce.
> ⚠️ La firma nel testo dell'Es. 1-bis (9 argomenti) non coincide con quella implementata (10, con `tol` **e** `toll`, quest'ultima mai usata). Segui il codice.

### I risultati dei tre problemi di test

| problema | $K_2(A)$ | gradiente | CG |
|---|---:|---:|---:|
| Poisson $m=16$ | 26.8 | 211 it | 8 it |
| Poisson $m=400$ | 13 118 | **> 50 000 it** | **102 it** ($\sqrt K=114$) |
| **Hilbert $5\times5$** | $4.8\cdot10^{5}$ | **16 467 it, non converge** | **4 it** |

La riga di Hilbert e' il caso limite da citare: matrice SDP ma pessimamente condizionata, il gradiente e' **inutilizzabile** mentre il gradiente coniugato chiude in quattro passi. La riga $m=400$ conferma la stima $\sim\sqrt{K}$ con due cifre.

> [!warning] Due precisazioni sulla riga di Hilbert (verificate a calcolatore, 2 settembre)
> I numeri **16 467** e **4** valgono con `tol = 1e-8`. Abbassando la tolleranza a `1e-10` il gradiente coniugato ne chiede **7**, cioe' **piu' di $n=5$**.
> Non e' un bug: la terminazione finita in $\le n$ passi vale in **aritmetica esatta**. Con $K_2 = 4.8\cdot10^{5}$ gli arrotondamenti distruggono l'$A$-coniugazione fra le direzioni e il metodo perde la proprieta'. Una implementazione di riferimento fa esattamente le stesse 7 iterazioni.
> Seconda precisazione: a `tol = 1e-8` il CG si ferma con un errore **vero** di $4.7\cdot10^{-3}$. Il criterio d'arresto guarda il **residuo**, e su una matrice mal condizionata residuo piccolo non implica errore piccolo — e' la maggiorazione $\|e\| \le K(A)\,\|r\|/\|A\|$ della [[00d Le maggiorazioni - come si leggono#3. Le tre proprietà da avere in testa|00d]].

---

## 7. Il quadro d'insieme: quando usare cosa

| Situazione | Metodo | Perché |
|---|---|---|
| $A$ densa, $n$ moderato, generica | **LU con pivoting** *(Blocco B)* | $\frac13n^3$, sempre applicabile |
| $A$ densa, SDP | **Cholesky** *(Blocco B)* | $\frac16n^3$, metà del lavoro |
| $A$ mal condizionata, massima stabilità | **QR** *(Blocco B)* | $K_2(Q)=1$ |
| $A$ grande e **sparsa**, generica | **Gauss-Seidel / SOR** | niente fill-in, $O(kn^2)$ |
| $A$ grande e sparsa, **SDP** | **Gradiente coniugato** | $\le n$ iterazioni, $\sim\sqrt K$ |
| $A$ SDP, metodo iterativo semplice | **Gradiente** | facile ma $\sim K$ |

> ⚠️ **Il gradiente e il gradiente coniugato richiedono $A$ simmetrica definita positiva.** Non è un dettaglio: senza quell'ipotesi $F$ non ha minimo, $\langle Ap,p\rangle$ può essere negativo e $\alpha^{(k)}$ perde significato. Se all'esame la matrice non è SDP, questi due metodi vanno **esclusi** e va detto perché.

---

## 8. Che cosa chiede la Prova #4 (7 maggio 2025, Esercizio 1)

Il testo chiede di risolvere due sistemi con **gradiente, gradiente coniugato e Gauss-Seidel**, e poi:

> *"analizzare l'indice di condizionamento delle due matrici e richiamare teoricamente cosa questo implica in termini di velocità di convergenza"* — **punti 3**

Quindi non basta far girare i tre metodi: bisogna **calcolare $K_2(A)$ per entrambe le matrici** e **collegarlo** al numero di iterazioni osservato, citando le due formule di $q$. Tre punti su dodici stanno tutti in quella frase.

Struttura della risposta:

1. verifica che $A$ sia simmetrica definita positiva (`np.allclose(A,A.T)` + `np.linalg.eigvalsh`), altrimenti gradiente e CG non sono applicabili;
2. calcola $K_2(A)=\lambda_{max}/\lambda_{min}$;
3. esegui i tre metodi, conta le iterazioni;
4. grafico `semilogy` dei tre residui relativi sovrapposti;
5. commenta: la matrice con $K$ maggiore richiede più iterazioni; il CG ne richiede $\sim\sqrt K$ contro $\sim K$ del gradiente; Gauss-Seidel ha velocità governata da $\rho(T_G)$, che a sua volta peggiora con $K$.

---

## 9. Checklist

- [ ] Definizione algebrica di direzioni coniugate e legame con il prodotto scalare $\langle\cdot,\cdot\rangle_A$
- [ ] $p^{(k)}=-r^{(k)}+\gamma_kp^{(k-1)}$ con $\gamma_k=\|r^{(k)}\|^2/\|r^{(k-1)}\|^2$
- [ ] Le due proprietà: residui ortogonali, direzioni $A$-coniugate
- [ ] Terminazione in al più $n$ iterazioni, e perché in aritmetica finita non accade
- [ ] Scrivere `conjugate_gradient` da zero ricordando `rtr_old` **prima** dell'aggiornamento di `r`
- [ ] Le due stime $q_G=\frac{K-1}{K+1}$ e $q_{CG}=\frac{\sqrt K-1}{\sqrt K+1}$
- [ ] Sapere che **entrambi** sono a convergenza lineare — cambia il fattore, non l'ordine
- [ ] Escludere gradiente e CG quando $A$ non è SDP, dicendo perché
