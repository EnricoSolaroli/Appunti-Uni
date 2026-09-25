 ou# Le maggiorazioni: come si leggono

> [!info] Perché una nota a parte
> "Maggiorazione" non è un argomento del programma: è **la forma che ha quasi ogni risultato del corso**. Il condizionamento, la convergenza degli iterativi, il teorema dell'errore dell'interpolazione, la stabilità delle fattorizzazioni, la costante di Lebesgue — sono tutte maggiorazioni. Capito il meccanismo una volta, li leggi tutti allo stesso modo.
>
> Creata il 1° settembre 2026.

---

## 1. Che cos'è, in una riga

**Maggiorare una quantità significa trovare un numero che sicuramente non viene superato.**

$$X \le M$$

$M$ si chiama **maggiorante** (o *limite superiore*). La disuguaglianza non dice quanto vale $X$: dice soltanto che $X$ **non sta sopra** $M$.

L'immagine giusta è un **tetto**: sai che la testa non batte contro il soffitto, ma questo non ti dice quanto sei alto.

> [!example] Fuori dalla matematica
> "Il viaggio dura **al massimo** 3 ore." È una maggiorazione. È vera anche se ci metti 40 minuti. Ti serve per **organizzarti**, non per sapere quando arrivi.

---

## 2. Perché in analisi numerica si fa *sempre* così

Qui c'è il punto che sblocca tutto. Prendi l'errore di un metodo:

$$\text{errore} = \|x_{\text{calcolato}} - x_{\text{esatto}}\|$$

Per calcolarlo davvero **ti servirebbe $x_{\text{esatto}}$**. Ma se conoscessi la soluzione esatta non staresti risolvendo il problema. L'errore vero, nella pratica, **non è calcolabile**.

Quindi si rinuncia a calcolarlo e si ripiega su un obiettivo più modesto ma raggiungibile: **garantire un tetto**. Da qui in poi tutti i teoremi del corso hanno la stessa forma:

> *l'errore che non puoi calcolare* $\;\le\;$ *una quantità che puoi calcolare*

La maggiorazione è la traduzione matematica della frase **"nel caso peggiore va così"**.

---

## 3. Le tre proprietà da avere in testa

### 3.1 È sempre vera, quasi mai stretta

$X \le M$ **non** significa $X \approx M$. Il valore di una maggiorazione sta in **quanto è aderente**: una maggiorazione lascissima è vera e inutile allo stesso tempo.

### 3.2 L'asimmetria logica — l'errore più comune

Questo è il punto che vale punti all'esame:

| Se il maggiorante $M$ è… | Concludi… |
|---|---|
| **piccolo** | ✅ $X$ è piccolo. **Garantito.** |
| **grande** | ❌ **niente.** $X$ potrebbe essere piccolissimo lo stesso. |

Una maggiorazione funziona **in una sola direzione**. Ti dà certezze quando è soddisfatta, e ti lascia nell'ignoranza quando non lo è.

**È esattamente da qui che nasce l'espressione "condizione sufficiente ma non necessaria"** che trovi in tutti i teoremi di convergenza. Non è un tecnicismo: è la conseguenza diretta di aver maggiorato.

### 3.3 Si costruisce buttando via informazione

Una maggiorazione si ottiene sostituendo, passo dopo passo, ogni pezzo con **qualcosa di più grande e più semplice**. Le mosse del corso sono sempre le stesse tre:

| Mossa | Cosa perdi |
|---|---|
| Disuguaglianza triangolare $\Vert a+b\Vert  \le \Vert a\Vert  + \Vert b\Vert $ | le cancellazioni: se $a$ e $b$ hanno segni opposti, la somma vera è molto più piccola |
| Submoltiplicatività $\Vert AB\Vert  \le \Vert A\Vert \,\Vert B\Vert $ e $\Vert Ax\Vert  \le \Vert A\Vert \,\Vert x\Vert $ | la direzione di $x$: $\Vert A\Vert $ è l'amplificazione **massima**, quasi mai quella che capita |
| Sostituire una funzione col suo massimo, $\vert f(\xi)\vert  \le \max\vert f\vert $ | il punto $\xi$: non sai dov'è, quindi prendi il caso peggiore su tutto l'intervallo |

Ogni passaggio allarga il tetto. Per questo il maggiorante finale è tipicamente **molto** più grande della realtà.

---

## 4. Il caso in cui si vede tutto

Prendi il metodo di Jacobi applicato a
$$A = \begin{pmatrix} 5 & 1 & 5 \\ 4 & 4 & 7 \\ -2 & 1 & 1\end{pmatrix}$$

La legge di propagazione dell'errore è un'**uguaglianza esatta**:
$$e^{(k)} = T^k e^{(0)}$$

Passando alle norme e usando la submoltiplicatività si ottiene la **maggiorazione**:
$$\|e^{(k)}\| \le \|T\|^k \,\|e^{(0)}\|$$

Da cui il teorema: **se $\|T\| < 1$ allora il metodo converge.** Qui però

$$\|T\|_\infty = 3, \qquad \|T\|_1 = 3, \qquad \|T\|_2 = 2.6$$

tutte $> 1$. La maggiorazione dice: *"l'errore potrebbe arrivare fino a $3^k$"*. E infatti:

![[maggiorazione.png]]

Il tetto rosso sale fino a $10^{12}$. L'errore vero (blu) **scende**, perché $\rho(T) = 0.68 < 1$.

**Non c'è nessuna contraddizione.** La maggiorazione è vera in ogni singolo punto: l'errore blu sta sempre sotto la linea rossa. Solo che il tetto è così alto da non contenere alcuna informazione.

> [!tip] Le tre frasi da distinguere, in ordine di forza
> 1. $\|T\| < 1$ → converge. **Sufficiente, non necessario.** (maggiorazione)
> 2. $\rho(T) < 1$ → converge. **Necessario e sufficiente.** (il teorema vero)
> 3. $\|e^{(k)}\| \approx C\rho^k$ → il tasso **effettivo**, quello che vedi nel grafico in `semilogy`.
>
> La riga verde tratteggiata nella figura è la 3, e ci si appoggia davvero. La rossa è la 1, ed è solo un tetto.

E questo spiega anche perché il tuo drill del Laboratorio 28/4 aveva senso: lì trovavi matrici con $\rho(T) < 1$ ma norme $\ge 1$. Non erano casi patologici — sono **la norma**, e mostrano perché il raggio spettrale è il criterio giusto e la norma solo un surrogato comodo.

---

## 5. La distinzione che vale punti: uguaglianza contro maggiorazione

Molti teoremi del corso nascono come **uguaglianze esatte** e diventano maggiorazioni solo all'ultimo passaggio, quando si butta via il pezzo incalcolabile. Saper dire *dove* avviene il passaggio è quello che il professore chiede quando scrive "**giustificando**".

| Teorema | Prima: uguaglianza | Dopo: maggiorazione | Cosa si è buttato via |
|---|---|---|---|
| Errore di interpolazione | $E(\bar x) = \dfrac{\omega_{n+1}(\bar x)}{(n+1)!}\, f^{(n+1)}(\xi)$ | $\vert E(\bar x)\vert  \le \dfrac{\vert \omega_{n+1}(\bar x)\vert}{(n+1)!} \max_{[a,b]}\vert f^{(n+1)}\vert $ | il punto $\xi$, che esiste ma è **ignoto** |
| Propagazione dell'errore | $e^{(k)} = T^k e^{(0)}$ | $\Vert e^{(k)}\Vert  \le \Vert T\Vert^k \Vert e^{(0)}\Vert $ | la direzione di $e^{(0)}$ |
| Condizionamento | $A\,\delta x = \delta b$ | $\dfrac{\Vert \delta x\Vert}{\Vert x\Vert} \le K(A)\,\dfrac{\Vert \delta b\Vert}{\Vert b\Vert}$ | quale perturbazione specifica hai |

**La forma tipica della domanda d'esame** non è "dimostra", è: *enuncia il teorema dell'errore e commenta la formula*. Commentare la formula vuol dire proprio leggere la maggiorazione: quali fattori la fanno crescere, su quali puoi agire, e cosa **non** puoi concludere.

---

## 6. Dove compare, in tutto il programma

| Dove | La maggiorazione | Cosa ti dice davvero |
|---|---|---|
| **Condizionamento di un sistema** — [[07 Sistemi lineari - generalita e condizionamento#3. ⭐ Condizionamento di un sistema lineare\|07 §3]] | $\frac{\Vert \delta x\Vert}{\Vert x\Vert} \le K(A) \frac{\Vert \delta b\Vert}{\Vert b\Vert}$ | l'amplificazione **non supera** $K(A)$. Con $K$ grande **non** è detto che sbaglierai tanto: dipende da $\delta b$ |
| **Regola delle cifre perse** — [[07 Sistemi lineari - generalita e condizionamento#4. ⭐ La regola pratica: quante cifre perdo\|07 §4]] | perdi $\approx \log_{10}K(A)$ cifre | è una stima **del caso peggiore** |
| **Convergenza degli iterativi** — [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#8. ⭐⭐ Il teorema fondamentale   *· slide §1.4*\|14-15 §8]] | $\Vert e^{(k)}\Vert  \le \Vert T\Vert^k\Vert e^{(0)}\Vert $ | vedi la §4 qui sopra |
| **Le tre condizioni sufficienti** — [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#9. 🎯 Le condizioni sufficienti — il drill dell'esame   *· slide §1.5*\|14-15 §9]] | norma, dominanza diagonale, SPD | ognuna è un modo per **garantire** $\rho(T)<1$ senza calcolarlo. Se nessuna si applica, **non hai concluso niente** |
| **Stabilità delle fattorizzazioni** — [[09 Cholesky, QR e stabilita delle fattorizzazioni#4. ⭐ La classifica di stabilità delle tre fattorizzazioni\|09 §4]] | LU: $2^{n-1}$ · QR: $\sqrt n$ | il $2^{n-1}$ è un tetto **saturato solo dalla matrice di Wilkinson**. Sulla Hankel il fattore di crescita vale $1.000$: LU si comporta come QR |
| **Errore di interpolazione** — [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue#6. ⭐⭐ Il Teorema dell'errore\|20 §6]] | $\Vert E\Vert_\infty \le \frac{\Vert \omega_{n+1}\Vert_\infty}{(n+1)!}\max\vert f^{(n+1)}\vert $ | alzare $n$ fa crescere $(n+1)!$ **ma anche** $\max\Vert f^{(n+1)}\Vert $: è da qui che nasce Runge |
| **Costante di Lebesgue** — [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue#9. ⭐ La costante di Lebesgue\|20 §9]] | $\Vert f - p_n\Vert  \le (1+\Lambda_n)\,E_n^*(f)$ | quanto il tuo polinomio può essere peggiore del **migliore possibile**. $\Lambda_{20}=10\,987$ sugli equispaziati contro $2.90$ su Chebyshev |
| **Condizionamento di una funzione** — [[03 Condizionamento e stabilita#2. Indice di condizionamento\|03 §2]] | $\frac{\Vert \Delta y\Vert}{\Vert y\Vert} \lesssim K \frac{\Vert \Delta x\Vert}{\Vert x\Vert}$ | l'amplificazione massima dell'errore in ingresso |

---

## 7. Le domande da farsi davanti a una maggiorazione

Ogni volta che ne incontri una, quattro domande. Sono sempre le stesse.

1. **Chi è $X$ e chi è $M$?** Cosa sto maggiorando, e con cosa.
2. **Perché non calcolo $X$ direttamente?** (Risposta quasi sempre: perché mi servirebbe la soluzione esatta, o un punto $\xi$ ignoto.)
3. **Cosa succede se $M$ è grande?** (Risposta sempre: **non concludo niente**.)
4. **Quanto è aderente?** Il tetto è a 10 cm dalla testa o a 30 metri?

> [!warning] Le due frasi da non dire mai all'esame
> - ❌ *"$K(A)$ è grande, quindi la soluzione sarà sbagliata."* → è grande **il tetto**, non necessariamente l'errore.
> - ❌ *"$\|T\| \ge 1$, quindi il metodo non converge."* → non hai concluso niente: devi passare a $\rho(T)$, o a un'altra condizione sufficiente.
>
> Le versioni corrette: *"$K(A)$ è grande, quindi il problema **è potenzialmente** mal condizionato: nel caso peggiore posso perdere fino a $\log_{10}K$ cifre"* e *"la condizione sulla norma non è soddisfatta, quindi **questo criterio non si applica**: verifico la dominanza diagonale / calcolo $\rho(T)$"*.

---

## 8. In tre righe

1. **Maggiorare = costruire un tetto** su una quantità che non sai calcolare.
2. **Vale in una sola direzione**: tetto basso ⟹ certezza; tetto alto ⟹ nessuna conclusione. Da qui "sufficiente ma non necessario".
3. **Commentare una maggiorazione** = dire quali fattori la gonfiano, su quali puoi agire, e su cosa resta muta.
