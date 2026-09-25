# Scheda operativa — Blocco A

> **A cosa serve**: i tre documenti precedenti sono la teoria. Questo è il filtro d'esame — cosa viene davvero chiesto, con quale formulazione, e quale teorema citare.
> Leggilo **all'inizio** del Blocco A per sapere dove guardare, e **alla fine** per verificare.

---

## 1. Quanto pesa davvero questo blocco

Sembrava materiale propedeutico. Non lo è.

| Prova | Dove compare | Punti |
|---|---|---|
| **4 luglio 2024 T2** | **Esercizio 2 intero**: equazione di II grado in aritmetica finita, analisi di stabilità, algoritmo alternativo, + ricavare $K$ per $f:\mathbb{R}\to\mathbb{R}$ | **13** |
| Simulazione I | Esercizio 1: perturbazione dello 0.1% su $b$, errore relativo su dati e soluzione, giustificazione teorica | 4 |
| 10 gennaio 2025 | Esercizio 1: perturbazione dell'1% su $b[0]$, idem | 3 |
| 4 luglio 2024 T2 | Esercizio 1: perturbazione 0.1%, idem | 2 |
| 12 giugno 2024 T2 | Esercizio 2: ordine di convergenza, radice multipla, Newton modificato | 8 su 14 |
| Simulazione II | Esercizio 2: ordine di convergenza, definizione teorica | 4 |

**In sintesi**: l'analisi di stabilità/condizionamento può valere un intero Esercizio 2 (13 punti), e comunque ricorre in ogni Esercizio 1 come giustificazione della perturbazione. Gli zeri di funzione sono uno dei cinque temi in rotazione per l'Esercizio 2.

---

## 2. ⭐ Le quattro derivazioni da saper fare su foglio bianco

Non "riconoscere": **scrivere**, senza appunti, in cinque minuti.

### D1 — Indice di condizionamento di $f:\mathbb{R}\to\mathbb{R}$ in un punto
*Chiesta esplicitamente il 4 luglio 2024 T2, 3 punti.*
Taylor al primo ordine → dividi per $f(x)$ → **moltiplica e dividi per $x$** → $K=\left|\frac{f'(x)x}{f(x)}\right|$.
Il passaggio che si dimentica è l'ultimo.

### D2 — Errore totale = inerente + algoritmico
$E_{tot}=E_{alg}E_{in}+E_{alg}+E_{in}\approx E_{in}+E_{alg}$.
Trucco della dimostrazione: $\frac{\Psi(\tilde x)}{f(x)}-1$, poi **moltiplica e dividi per $f(\tilde x)$**.

### D3 — Condizionamento del calcolo di uno zero
$\tilde f = f+\varepsilon g$, Taylor di $\tilde f$ attorno ad $\alpha$, usa $f(\alpha)=0$, trascura $\varepsilon\delta$ → $K=\frac{1}{|f'(\alpha)|}$.

### D4 — Ordine 2 del metodo di Newton
Taylor di $f$ attorno a $x_k$ valutato in $\alpha$, dividi per $f'(x_k)$, riconosci $x_{k+1}$ → $e_{k+1}=e_k^2\frac{f''(\zeta)}{2f'(x_k)}$.

---

## 3. Pattern di riconoscimento — la diagnosi

Il cuore dell'esercizio-tipo è: *"osservando i grafici ottenuti, si dica se le formule utilizzate hanno dato luogo ad algoritmi stabili, motivando la risposta alla luce della teoria."* Serve saper **diagnosticare**, non solo definire.

### Il problema è mal condizionato o l'algoritmo è instabile?

| Sintomo | Diagnosi | Come lo verifichi |
|---|---|---|
| $K$ grande **e** risultato impreciso | **problema mal condizionato** | calcoli $K=\left\Vert \frac{f'(x)x}{f(x)}\right\Vert $ e vedi che esplode |
| $K$ piccolo (o nullo) **ma** risultato impreciso | **algoritmo instabile** | è il caso di $\frac{(1+x)-1}{x}$: $K=0$, errore enorme |
| L'errore **cresce con $n$** (numero di operazioni) | instabilità algoritmica | grafico dell'errore vs $n$: lineare = stabile, esponenziale = instabile |
| **Riordinando** le operazioni l'errore sparisce | instabilità algoritmica | il problema è lo stesso, quindi $K$ è lo stesso |
| L'errore c'è **anche** con formula alternativa | mal condizionamento | nessun algoritmo lo cura |

> 🔑 **La prova del nove**: se cambiando algoritmo (a parità di dati e precisione) l'errore crolla, il problema era **ben condizionato** e l'algoritmo instabile. Se non cambia nulla, il problema è **mal condizionato** e va riformulato.

### Dove nasce l'instabilità, in pratica

Quasi sempre da **una sola cosa**: la sottrazione fra numeri quasi uguali (**cancellazione numerica**). Cerca nella formula:

- una differenza $x-y$ con $x\approx y$
- una somma di numeri di **segno opposto e modulo simile**
- un denominatore che tende a zero

E ricorda la condizione che rende la cancellazione **innocua**: se $x,y$ sono **esattamente rappresentabili** in $F$, allora $\varepsilon_x=\varepsilon_y=0$ e non c'è errore da amplificare. Il danno lo fa la cancellazione **di errori preesistenti**, non la cancellazione di cifre in sé.

### Quando $K$ esplode

$K=\left|\frac{f'(x)x}{f(x)}\right|$ ha $f(x)$ al **denominatore**:

- **vicino a uno zero di $f$** → $K\to\infty$: valutare una funzione vicino a un suo zero è intrinsecamente mal condizionato
- $f'(x)$ molto grande → $K$ grande

E per gli zeri, $K=\frac{1}{|f'(\alpha)|}$ ha $f'(\alpha)$ al denominatore:

- **radice multipla** ⟹ $f'(\alpha)=0$ ⟹ $K=\infty$: sempre mal condizionato

---

## 4. 🧰 Catalogo degli algoritmi alternativi stabili

*"Proporre e implementare un algoritmo alternativo stabile per il calcolo della soluzione per cui la formula classica si è dimostrata non stabile"* — 4 luglio 2024 T2, **2 punti**.

È una domanda a risposta chiusa: le riscritture sono sempre le stesse cinque idee.

| Formula instabile | Dove cancella | Riscrittura stabile | Idea |
|---|---|---|---|
| $\sqrt{x+1}-\sqrt x$ per $x$ grande | i due radicandi si avvicinano | $\dfrac{1}{\sqrt{x+1}+\sqrt x}$ | **razionalizzazione** |
| $x_{1,2}=\frac{-b\mp\sqrt{b^2-4ac}}{2a}$ | il ramo in cui $-b$ e $\sqrt{\cdot}$ hanno segno opposto | calcola la radice "sicura" (in base al **segno di $b$**), poi $x_{\text{altra}}=\dfrac{c}{a\,x_{\text{sicura}}}$ | **relazione fra le radici** |
| $1-\cos x$ per $x\to0$ | $\cos x\to1$ | $2\sin^2\!\frac{x}{2}$, oppure $\dfrac{\sin^2 x}{1+\cos x}$ | **identità trigonometrica** |
| $\dfrac{(1+x)-1}{x}$ per $x$ piccolo | $1+x\to1$ | non c'è riscrittura: la formula *è* $\equiv1$ | mostra che l'errore è $3\varepsilon+\frac{\varepsilon}{x}$ |
| $\sum_{i=1}^n x_i$ | addendi di segno opposto e modulo simile | sommare in **ordine crescente di modulo** | **riordino** |
| Serie a segni alterni (es. $\ln 2$) | termini consecutivi quasi uguali | sommare dalla coda, o raggruppare a coppie | **riordino** |
| $a_0+a_1x+\dots+a_nx^n$ ingenuo | accumulo su $2n$ moltiplicazioni | **Ruffini–Horner**: $a_0+x(a_1+x(a_2+\dots))$ | **meno operazioni** |
| $\frac{a+b}{2}$ come punto medio | può uscire dall'intervallo | $a+\frac{b-a}{2}$ | **riscrittura algebrica** |

> Regola generale per riconoscere la mossa: **fai sparire la differenza**. Razionalizzando, usando un'identità, o passando per una relazione algebrica che eviti quel particolare ramo del calcolo.

---

## 5. Il ponte teoria ↔ laboratorio

Ogni esercizio di laboratorio del Blocco A allena esattamente un concetto. Se lo sai, l'esercizio si fa in cinque minuti; se non lo sai, non basta il codice.

### Esercitazione 4 — 10 marzo · *i numeri macchina esistono davvero*

| Es. | Concetto |
|---|---|
| 0 | `sys.float_info`: leggere $t$, $L$, $U$, $\beta$, eps dal sistema reale |
| 1 | **spacing** $s=\beta^{p+1-t}$: in $[2^{52},2^{53}]$ ci sono solo gli interi |
| 2 | **cardinalità** $\#F=2(\beta-1)\beta^{t-1}(U-L+1)+1$ |
| 3 | **eps**: il più piccolo $x$ con $fl(1+x)\neq1$ — la caratterizzazione operativa |
| 4 | **non associatività**: $(a+b)+c \ne a+(b+c)$ con $a,b$ quasi opposti |
| 5 | somma di 8 volte $0.1$: $0.1\notin F$ in binario, gli errori si accumulano |

### Esercitazione 5 — 17 marzo · *condizionamento e stabilità in azione*

| Es. | Concetto | Rimedio stabile |
|---|---|---|
| 1 | $\sqrt{x+1}-\sqrt x$: $K$ + cancellazione | razionalizzazione |
| 2 | $x^2+2px-q=0$: **è l'equazione di II grado dell'esame** | $x_1 = -q/x_2$ |
| 3 | serie armonica in `float32`: somma diretta vs inversa | ordine crescente |
| 4 | $\frac{(1+x)-1}{x}$: **ben condizionato, algoritmo instabile** | — |
| 5 | serie alternante per $\ln 2$ | riordino |
| 6 | rapporto incrementale $\frac{f(x+h)-f(x)}{h}$ per $h\to0$ | compromesso fra errore di troncamento e cancellazione |

> L'esercizio 6 è concettualmente il più ricco: al calare di $h$ l'errore **prima scende** (approssimazione migliore) **poi risale** (cancellazione). Il grafico a "V" dell'errore in scala log-log è la firma visiva di questo compromesso. Se te lo chiedono, sai riconoscerlo.

### Esercitazione 24 marzo · *calcolo di $K$ su casi concreti*

| Es. | Concetto |
|---|---|
| 1 | $1-\cos x$ per $x\to0$: $K$ + cancellazione + identità trigonometrica |
| 2 | $e^x$ con Taylor troncata: per $x<0$ i termini alternano segno ⟹ instabile; rimedio $e^{-\vert x\vert}=1/e^{\vert x\vert}$ |
| 3 | $f(x)=x^n$ in $x_0=0.999$, $n=1..200$: $K=\left\Vert \frac{nx^n}{x^n}\right\Vert =n$ — **cresce linearmente con $n$** |
| 4 | $f(x)=\ln x$ per $x\to1$: $K=\left\Vert \frac{x\cdot\frac1x}{\ln x}\right\Vert =\frac{1}{\Vert \ln x\Vert}\to\infty$ |

Gli esercizi 3 e 4 sono i più utili: si calcola $K$ **simbolicamente** e si vede subito perché esplode. Falli a mano prima che in Python.

### Laboratorio 7 — 31 marzo · *i cinque metodi*

Implementa bisezione, regula falsi, corde, secanti, Newton + `stima_ordine`, e li confronta sulle funzioni test. Casi da non saltare:

- $f(x)=x^3-6x^2-4x+24$ in $[-3,8]$ — confronto fra tutti i metodi
- radice quadrata di 5 con bisezione e Newton — quante iterazioni servono a ciascuno
- una funzione con **radice multipla**, per vedere Newton degradare a $p=1$

### `Prove_per_Esame` — gli esercizi in stile esame

`esercizio_condizionamento_1.ipynb`, `_2`, `esercizio_stabilita_1.ipynb`, `_2`. Sono già formulati come i quesiti d'esame: falli **dopo** i laboratori, come verifica.

---

## 6. Domande tipo → cosa citare

| Se ti chiedono… | Cita… |
|---|---|
| "giustificare l'errore sulla soluzione rispetto all'errore sui dati" | definizione di **indice di condizionamento**: $\frac{\Vert f(x)-f(\tilde x)\Vert}{\Vert f(x)\Vert}\le K\frac{\Vert x-\tilde x\Vert}{\Vert x\Vert}$ |
| "ricavare l'indice di condizionamento della valutazione di $f$" | **D1** ([[06 Scheda operativa Blocco A#2. ⭐ Le quattro derivazioni da saper fare su foglio bianco|§2]]) |
| "dire se l'algoritmo è stabile, motivando" | $\Vert E_{alg}\Vert \approx g(n)\varepsilon$: stabile se $g$ **lineare**, instabile se **esponenziale** + dove sta la cancellazione |
| "spiegare perché il risultato è inaccurato" | $E_{tot}\approx E_{in}+E_{alg}$, poi **quale dei due domina** |
| "proporre un algoritmo alternativo stabile" | catalogo [[06 Scheda operativa Blocco A#4. 🧰 Catalogo degli algoritmi alternativi stabili|§4]] |
| "perché usare l'errore relativo e non l'assoluto" | l'assoluto dipende dall'ordine di grandezza, il relativo **dice quante cifre significative sono corrette** (esempio $1000/1000.5$ vs $0.01/0.51$) |
| "perché il rounding to even" | evita il **bias** sistematico negli arrotondamenti ripetuti |
| "definizione di ordine di convergenza" | $\lim\frac{\Vert e_{k+1}\Vert}{\Vert e_k\Vert^p}=c$ + i decimali corretti si moltiplicano per $p$ |
| "Newton ha ordine 1, perché e come si rimedia" | radice **multipla** ⟹ $f'(\alpha)=0$ ⟹ lineare con $c=\frac{m-1}{m}$ ⟹ **Newton modificato** $x_{k+1}=x_k-m\frac{f(x_k)}{f'(x_k)}$ |
| "quale metodo usare senza derivata / con garanzia" | **bisezione** (globale, $f$ continua, $f(a)f(b)<0$) o regula falsi |
| "quante iterazioni servono" | solo per la bisezione: $k=\lceil\log_2\frac{b-a}{\varepsilon}-1\rceil$ |
| "perché il criterio d'arresto sull'ampiezza non va bene per regula falsi" | l'ampiezza $[a_i,b_i]$ **non tende a zero**: un estremo può restare bloccato |

---

## 7. Errori classici da non fare

1. **Confondere condizionamento e stabilità.** Il condizionamento è del *problema* e non dipende dall'algoritmo né dall'aritmetica; la stabilità è dell'*algoritmo*. Tienili separati anche nel linguaggio: "il problema è mal condizionato", "l'algoritmo è instabile" — mai "il problema è instabile".
2. **Dire che la cancellazione è sempre un disastro.** Se gli operandi sono esattamente in $F$, l'errore è **nullo**. Serve un errore preesistente da amplificare.
3. **Dimenticare il "moltiplica e dividi per $x$"** nella derivazione di $K$: senza, la formula è sbagliata.
4. **Nella regula falsi, usare l'ampiezza dell'intervallo come criterio d'arresto.** Non converge a zero.
5. **Applicare Newton modificato senza giustificare $m$.** Devi dire *come* hai capito che la radice è multipla e di quale molteplicità (da `stima_ordine`: $p\approx1$ e $c\approx\frac{m-1}{m}$).
6. **Implementare senza scrivere le giustificazioni.** In ogni prova, metà dei punti dell'esercizio sta nelle celle markdown, non nel codice.

---

## 8. Autotest di fine blocco — 21 agosto

Rispondi **a voce, senza appunti**. Se inciampi su una, torna al documento corrispondente prima di passare al Blocco B.

- [ ] Definisci eps e $u$, e di' qual è la caratterizzazione operativa di eps
- [ ] Scrivi la formula dello spacing e di' quanti numeri di $F$ ci sono in $[2^{53},2^{54}]$
- [ ] Enuncia il teorema sull'errore di rappresentazione, con i due valori di $K$
- [ ] Perché l'errore relativo e non l'assoluto — con un esempio numerico
- [ ] Quando la somma floating point è pericolosa, e **quando invece non lo è**
- [ ] Perché il prodotto è sempre stabile
- [ ] Le tre condizioni di Hadamard, con un esempio di violazione per ciascuna
- [ ] **Ricava** $K$ per la valutazione di $f$ in $x$ *(D1)*
- [ ] **Ricava** $E_{tot}\approx E_{in}+E_{alg}$ *(D2)*
- [ ] Definisci algoritmo stabile in termini di $g(n)$
- [ ] Dammi un esempio di problema **ben condizionato** con algoritmo **instabile**
- [ ] Riscrivi in forma stabile: $\sqrt{x+1}-\sqrt x$, $1-\cos x$, le radici di II grado
- [ ] In che ordine sommare $n$ numeri, e perché
- [ ] Le tre norme vettoriali e le tre matriciali indotte; la catena $\|x\|_\infty\le\|x\|_2\le\|x\|_1$
- [ ] Perché $A$ ortogonale conserva la norma 2, e perché questo conta
- [ ] **Ricava** $K=\frac{1}{|f'(\alpha)|}$ per il calcolo di uno zero *(D3)*
- [ ] Ordine e ipotesi di bisezione, regula falsi, corde, secanti, Newton
- [ ] **Dimostra** che Newton ha ordine 2 *(D4)*
- [ ] Cosa succede a Newton su una radice multipla, e come si rimedia
- [ ] Le 4 condizioni del teorema di convergenza globale di Newton e cosa garantisce ciascuna
