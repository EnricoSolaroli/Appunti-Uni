# Metodi di discesa: dal sistema lineare al problema di minimo

> **Blocco C · giorno 5 di 6 — lunedi 31 agosto** (teoria + codice `steepestdescent` nella stessa giornata) · Fonte: `Metodi_di_discesa.pdf` (pp. 1–16)
> Materiali interattivi: `Metodo_del_GRADIENTE.html`, `geogebra_derivata_direzionale_completo.html`
> Laboratorio collegato: **Esercitazione 10 (5/5), Esercizi 1 e 1-bis** · Buchi: `steepestdescent` (9)

---

## 1. ⭐ L'idea: risolvere un sistema minimizzando una funzione

**Ipotesi obbligatoria: $A$ simmetrica e definita positiva.** Senza questa, tutto il capitolo cade.

Invece di risolvere $Ax=b$ direttamente, si costruisce la **funzione quadratica**

$$F(x) = \frac12\langle Ax,x\rangle - \langle b,x\rangle = \frac12 x^TAx - b^Tx$$

e si cerca il suo punto di minimo.

> ### Teorema 1
> Sia $A\in\mathbb{R}^{n\times n}$ simmetrica definita positiva. Allora la soluzione del sistema $Ax=b$ **coincide** con il punto di minimo di $F$:
> $$Ax=b \iff x^* = \arg\min_{x\in\mathbb{R}^n} F(x)$$

### Dimostrazione — *non richiesta all'esame*, ma i due risultati si'

> 📌 **Verificato sulle 8 prove**: il verbo usato per la teoria e' sempre *"richiamando"* o *"giustificando"*, **mai** *"dimostrare"*. Le uniche due richieste di *"ricavare"* riguardano $K=|f'(x)x/f(x)|$ (Blocco A, 4 luglio T2, 3 punti) e i pesi della rete MLP 1-1-1-1 (IA). E nelle slide l'espansione di $F(x)$ e' marcata dalla prof stessa come **"Facoltativo"**.
>
> Quello che serve sono i **due risultati** — $\nabla F = Ax-b = r$ e $H_F = A$ — perche' li usi: il primo spiega perche' nel codice `p = -r`, il secondo garantisce che il punto critico sia un minimo unico e che $\langle Ap,p\rangle>0$ (denominatore di $\alpha$). Se vuoi ricostruirli, bastano le tre righe qui sotto saltando l'espansione facoltativa.

**Primo passo: il gradiente.** Derivando $F$ rispetto a $x_k$ e usando la simmetria $a_{ij}=a_{ji}$:

$$\frac{\partial F}{\partial x_k} = \sum_{j=1}^{n} a_{kj}x_j - b_k \qquad\Longrightarrow\qquad \boxed{\nabla F(x) = Ax - b = r(x)}$$

**Il gradiente di $F$ è esattamente il residuo del sistema.** Questa identità è il cuore di tutto il capitolo: annullare il gradiente equivale ad annullare il residuo, cioè a risolvere il sistema.

**Secondo passo: l'Hessiana.** Derivando ancora:

$$\frac{\partial^2 F}{\partial x_i\partial x_j} = a_{ij} \qquad\Longrightarrow\qquad \boxed{H_F(x) = A}$$

L'Hessiana **è** $A$, costante in tutto lo spazio. Ed è definita positiva per ipotesi, quindi il punto critico è un **minimo**. $\blacksquare$

> 📌 **Collegamento con il Blocco A-bis.** Nel Lab 8 Es. 2 avevi verificato "a mano" che l'Hessiana fosse definita positiva per concludere che il punto trovato era un minimo. Qui la verifica è gratuita: l'Hessiana è $A$ ed è SDP per ipotesi. Ed è lo stesso motivo per cui il minimo è **unico**: la forma quadratica associata a una matrice SDP è **strettamente convessa**.

### Geometria in due dimensioni

Per $n=2$, le curve di livello $F(x)=\text{cost}$ sono **ellissi concentriche**, il cui centro è il minimo $x^*$, cioè la soluzione del sistema. L'eccentricità delle ellissi è legata al rapporto $\lambda_{max}/\lambda_{min}$, cioè a $K_2(A)$:

- $K(A)$ piccolo → ellissi quasi circolari
- $K(A)$ grande → ellissi molto allungate

Tienilo a mente: è la chiave visiva di tutto ciò che segue.

---

## 2. Lo schema generale di un metodo di discesa

$$x^{(k+1)} = x^{(k)} + \alpha^{(k)} p^{(k)}$$

dove $p^{(k)}$ è la **direzione di discesa** e $\alpha^{(k)}$ è il **passo** (step-size), scelti in modo che

$$F\!\left(x^{(k)}+\alpha^{(k)}p^{(k)}\right) < F\!\left(x^{(k)}\right)$$

```
1. parti da x⁽⁰⁾, k = 0
2. determina la direzione di discesa p⁽ᵏ⁾
3. scegli lo step-size α⁽ᵏ⁾ che fa diminuire F
4. aggiorna  x⁽ᵏ⁺¹⁾ = x⁽ᵏ⁾ + α⁽ᵏ⁾p⁽ᵏ⁾
5. k = k+1                                     fino a convergenza
```

**I diversi metodi di discesa si distinguono solo per come scelgono $p^{(k)}$.** Lo step-size, invece, si calcola sempre allo stesso modo.

---

## 3. ⭐ Il passo ottimo $\alpha^{(k)}$

Fissata la direzione, ci si chiede quanto conviene avanzare. Sviluppando $F(x^{(k)}+\alpha p^{(k)})$ e ponendo $r^{(k)}=Ax^{(k)}-b$:

$$F\!\left(x^{(k)}+\alpha p^{(k)}\right) = F\!\left(x^{(k)}\right) + \frac12\alpha^2\langle Ap^{(k)},p^{(k)}\rangle + \alpha\langle r^{(k)},p^{(k)}\rangle$$

È una **parabola in $\alpha$**. Derivando e annullando:

$$\frac{dF}{d\alpha} = \alpha\langle Ap^{(k)},p^{(k)}\rangle + \langle r^{(k)},p^{(k)}\rangle = 0 \;\Longrightarrow\; \boxed{\alpha^{(k)} = -\frac{\langle r^{(k)},p^{(k)}\rangle}{\langle Ap^{(k)},p^{(k)}\rangle} = -\frac{(r^{(k)})^Tp^{(k)}}{(p^{(k)})^TAp^{(k)}}}$$

Che sia un **minimo** e non un massimo si vede dalla derivata seconda:

$$\frac{d^2F}{d\alpha^2} = \langle Ap^{(k)},p^{(k)}\rangle > 0$$

strettamente positiva per ogni $p^{(k)}\ne0$ **perché $A$ è definita positiva**. Ecco un altro punto in cui l'ipotesi SDP serve davvero, non è decorativa.

> ⚠️ Questa formula vale quando $A$ è **nota**. Se si minimizza una funzione generale (come nel Lab 8 Es. 2) non c'è nessuna $A$ e il passo si trova risolvendo un problema di minimo monodimensionale in $\alpha$ (*line search*).

---

## 4. Due proprietà da sapere enunciare

### Ortogonalità del nuovo residuo

> **Teorema.** Nel punto $x^{(k+1)}=x^{(k)}+\alpha^{(k)}p^{(k)}$ ottenuto con il passo ottimo, il nuovo residuo è **ortogonale alla direzione appena percorsa**:
> $$\langle r^{(k+1)},p^{(k)}\rangle = 0$$

*Dimostrazione*: da $r^{(k+1)} = r^{(k)}+\alpha^{(k)}Ap^{(k)}$ (relazione che serve anche nel codice!),

$$\langle r^{(k+1)},p^{(k)}\rangle = \langle r^{(k)},p^{(k)}\rangle + \alpha^{(k)}\langle Ap^{(k)},p^{(k)}\rangle = 0$$

sostituendo l'espressione di $\alpha^{(k)}$. $\blacksquare$

**Significato geometrico**: poiché $\nabla F(x^{(k+1)}) = r^{(k+1)}$, la condizione dice che nel nuovo punto il gradiente è **perpendicolare** alla direzione lungo cui ci si è mossi. Equivalentemente, la derivata direzionale lungo $p^{(k)}$ è nulla: $x^{(k+1)}$ è il minimo di $F$ **lungo quella retta**. Ci si è spinti fino in fondo in quella direzione.

### Ammissibilità della direzione

Perché $F$ diminuisca serve, dallo sviluppo di Taylor,

$$D_{p^{(k)}}F(x^{(k)}) = \langle \nabla F(x^{(k)}), p^{(k)}\rangle < 0$$

cioè, scrivendo il prodotto scalare come $\|\nabla F\|\,\|p\|\cos\theta$:

$$\cos\theta < 0 \iff \frac{\pi}{2} < \theta < \frac{3\pi}{2}$$

**La direzione deve formare un angolo ottuso con il gradiente.** Da qui il nome alternativo di *metodi del gradiente*.

> ⚠️ Corollario pratico: $p^{(k)}$ **non deve essere ortogonale al residuo**. Se lo fosse, $\alpha^{(k)}=0$ e l'iterazione non avanzerebbe.

---

## 5. ⭐ Il metodo del gradiente (steepest descent)

La scelta più naturale: la direzione di massima decrescita, cioè l'**antigradiente**.

$$\boxed{p^{(k)} = -\nabla F(x^{(k)}) = -r^{(k)} = b - Ax^{(k)}}$$

Con questa scelta il passo ottimo diventa

$$\alpha^{(k)} = -\frac{\langle r^{(k)},p^{(k)}\rangle}{\langle Ap^{(k)},p^{(k)}\rangle} = \frac{\langle r^{(k)},r^{(k)}\rangle}{\langle Ar^{(k)},r^{(k)}\rangle}$$

### Il codice

```python
def steepestdescent(A, b, x0, itmax, tol):
    n, m = A.shape
    if n != m:
        print("Matrice non quadrata"); return [], []
    x = x0
    r = A @ x - b                    # ⚠️ il residuo È il gradiente
    p = -r                           # antigradiente
    it = 0
    nb = np.linalg.norm(b)
    errore = np.linalg.norm(r) / nb
    vec_sol = [];  vec_sol.append(x.copy())
    vet_r  = [];   vet_r.append(errore)

    while errore >= tol and it < itmax:
        it = it + 1
        Ap = A @ p                                  # UNA sola moltiplicazione matrice-vettore
        alpha = -(r.T @ p) / (p.T @ Ap)             # passo ottimo
        x = x + alpha * p
        vec_sol.append(x.copy())
        r = r + alpha * Ap                          # aggiornamento incrementale del residuo
        errore = np.linalg.norm(r) / nb
        vet_r.append(errore)
        p = -r                                      # nuova direzione
    return x, vet_r, np.array(vec_sol).squeeze(), it
```

**I tre punti in cui si sbaglia:**

> ⚠️ **`r = A@x - b` e non `b - A@x`.** Il residuo è definito come $Ax-b$ perché deve coincidere con il gradiente $\nabla F = Ax-b$. La direzione è poi $p=-r$. Se inverti i segni in un solo posto il metodo *sale* invece di scendere.
>
> ⚠️ **`r = r + alpha*Ap` invece di ricalcolare `r = A@x - b`.** Le due formule sono equivalenti in aritmetica esatta, ma quella incrementale riusa `Ap` già calcolato e risparmia una moltiplicazione matrice-vettore per iterazione — il costo dominante del metodo. È il motivo per cui `Ap` viene salvato in una variabile.
>
> ⚠️ **`vec_sol.append(x.copy())`.** Senza `.copy()` tutti gli elementi della lista puntano allo stesso array e la traiettoria che disegni è un punto solo.

Criterio d'arresto: $\dfrac{\|r^{(k)}\|_2}{\|b\|_2} < tol$, cioè il **residuo relativo**. Nota che è diverso dal criterio usato in Jacobi/Gauss-Seidel (incremento fra iterati): qui il residuo è disponibile gratis a ogni passo.

---

## 6. ⭐⭐ Lo zig-zag, e perché il gradiente è lento

![[discesa_zigzag_vs_coniugato.png]]

Il pannello di sinistra è il metodo del gradiente su

$$A=\begin{bmatrix}8&4\\4&3\end{bmatrix}, \qquad b=\begin{bmatrix}8\\10\end{bmatrix}, \qquad x^{(0)}=\begin{bmatrix}0\\0\end{bmatrix}, \qquad x^*=\begin{bmatrix}-2\\6\end{bmatrix}$$

**99 iterazioni** per una matrice $2\times2$ con $K_2(A)=13$.

Il motivo è il teorema di ortogonalità del [[16 Metodi di discesa - dal sistema lineare al problema di minimo#4. Due proprietà da sapere enunciare|§4]]: ogni nuovo gradiente è perpendicolare alla direzione precedente, quindi le direzioni successive sono **a due a due ortogonali** e la traiettoria rimbalza avanti e indietro. Ogni passo minimizza $F$ solo lungo una direzione, **senza tenere conto dell'informazione accumulata nei passi precedenti**: il passo $k+1$ rovina in parte il lavoro fatto al passo $k$.

Il fenomeno peggiora quanto più le ellissi sono allungate, cioè quanto più $A$ è mal condizionata.

### Velocità di convergenza

Si misura l'errore nella **norma indotta da $A$**:

$$\|x\|_A = \sqrt{x^TAx}$$

(è una norma proprio perché $A$ è SDP). Definito $e^{(k)}=x^{(k)}-x^*$, il metodo ha convergenza **lineare** con fattore

$$\frac{\|e^{(k+1)}\|_A}{\|e^{(k)}\|_A} \approx q, \qquad \boxed{q = \frac{K(A)-1}{K(A)+1}} \qquad\Longrightarrow\qquad \|e^{(k)}\|_A \le \left(\frac{K(A)-1}{K(A)+1}\right)^k\|e^{(0)}\|_A$$

Per $A$ simmetrica definita positiva, $K_2(A) = \dfrac{\lambda_{max}(A)}{\lambda_{min}(A)}$ — formula da ricordare, perché rende il calcolo immediato.

> 📌 **Il legame geometria–algebra**: $K(A)$ grande ⟺ ellissi molto allungate ⟺ $q\to1$ ⟺ convergenza lenta. $K(A)=1$ (ellissi = cerchi) ⟺ $q=0$ ⟺ convergenza in **una** iterazione. Sono tre modi di dire la stessa cosa, e all'esame conviene dirli tutti e tre.

---

## 7. La versione con le curve di livello

> 🐍 `meshgrid`, la scelta dei `levels` e la traiettoria: [[00c Python e grafici - guida essenziale per l'esame#Parte 6 — I grafici|00c · Parte 6, Ricetta 3]].


Per il caso $n=2$ il laboratorio chiede una variante `steepestdescent_CL` che disegna mentre itera:

```python
def steepestdescent_CL(A, b, x0, itmax, tol, X, Y, Z, f, toll):
    x = x0
    plt.contour(X, Y, Z, levels=f(x, A, b).flatten())   # curva di livello passante per x
    plt.plot(x[0], x[1], 'r-o')
    ...
    while errore >= tol and it < itmax:
        ...
        x = x + alpha * p
        plt.contour(X, Y, Z, levels=f(x, A, b).flatten())
        plt.plot(x[0], x[1], 'r-o')
        ...
```

> 📌 **Il trucco dei `levels`**, già visto nel documento 13: invece di scegliere a mano i livelli, si disegna **la curva di livello che passa per l'iterato corrente**, `levels=[f(x)]`. Così i livelli sono automaticamente quelli giusti e si vede l'iterato scendere di quota. `.flatten()` serve perché `f` restituisce un array $(1,1)$ e `levels` vuole una sequenza 1D.

La griglia si costruisce come sempre:

```python
def f(x, A, b):
    return 0.5 * (x.T @ (A @ x)) - b.T @ x       # ⚠️ nel notebook del prof c'è un refuso: "bx"

x = np.linspace(-7, 3, 100); y = np.linspace(-5, 14, 100)
X, Y = np.meshgrid(x, y)
Z = np.zeros_like(X)
for i in range(X.shape[0]):
    for j in range(X.shape[1]):
        Z[i, j] = f(np.array([[X[i, j]], [Y[i, j]]]), A, b)
```

> ⚠️ Qui il doppio ciclo `for` è necessario, perché $F$ prende un **vettore** e restituisce uno **scalare**: non si vettorializza come le funzioni del Lab 8. In alternativa, per $n=2$ si può espandere a mano:
> $$F(x_1,x_2)=\tfrac12\left(a_{11}x_1^2+2a_{12}x_1x_2+a_{22}x_2^2\right)-(b_1x_1+b_2x_2)$$
> e allora `Z = 0.5*(A[0,0]*X**2 + 2*A[0,1]*X*Y + A[1,1]*Y**2) - (b[0]*X + b[1]*Y)` funziona sulla griglia in una riga sola.

---

## 8. Checklist

- [ ] Enunciare il **Teorema 1** e dire perché serve $A$ simmetrica definita positiva
- [ ] Ricavare $\nabla F = Ax-b = r$ e $H_F = A$
- [ ] Ricavare il passo ottimo $\alpha^{(k)}$ derivando la parabola in $\alpha$
- [ ] Dimostrare $\langle r^{(k+1)},p^{(k)}\rangle=0$ e spiegarne il significato geometrico
- [ ] Condizione di ammissibilità: angolo ottuso col gradiente, $\langle\nabla F,p\rangle<0$
- [ ] Spiegare lo **zig-zag** a partire dall'ortogonalità dei residui successivi
- [ ] Scrivere `steepestdescent` da zero, con i segni giusti
- [ ] $q=\frac{K-1}{K+1}$ e il legame con l'eccentricità delle ellissi
