# Condizionamento di un problema e stabilità dell'algoritmo

> **Blocco A · giorni 19–20 agosto** · Fonte: `Condizionamento_e_stabilità.pdf`
> Laboratori collegati: **Esercitazione 5 (17/3)**, **Esercitazione 24/3**, `Prove_per_Esame/esercizio_condizionamento_*`, `esercizio_stabilita_*`

---

## 0. La distinzione da cui dipende tutto

![[condizionamento_vs_stabilita.png]]

> **Sinistra**: il condizionamento è del *problema* — $K$ esplode dove $f$ si annulla, e nessun algoritmo può rimediare. **Centro**: la stabilità è dell'*algoritmo* — qui $K=0$ (problema perfetto) eppure l'errore arriva al 100%. **Destra**: al calare di $h$ l'errore prima scende (meno troncamento) poi risale (più cancellazione): il minimo della V è il compromesso fra i due effetti.

Due cose diverse, che l'esame chiede sempre di distinguere:

| | Riguarda | Dipende da |
|---|---|---|
| **Condizionamento** | il **problema** | solo i dati e la funzione. **Non** dall'algoritmo né dall'aritmetica finita |
| **Stabilità** | l'**algoritmo** | numero, ordine e tipo delle operazioni eseguite |

Se il risultato è impreciso, la causa è l'una o l'altra — e la diagnosi cambia il rimedio. Un problema mal condizionato non si cura con un algoritmo migliore: va **riformulato**.

---

## 1. Problema ben posto

Un **problema matematico** $f$ è una descrizione non ambigua del legame fra i dati $x$ (input) e i risultati $y$ (output). La funzione che associa i dati alla soluzione si chiama **funzione dato-risultato** (o applicazione risolvente).

> **Problema ben posto (Hadamard)** — la soluzione:
> 1. **esiste**
> 2. è **unica**
> 3. **dipende con continuità dai dati** (se i dati cambiano di poco, la soluzione cambia di poco)

Se un problema ammette una e una sola soluzione, la funzione dato-risultato è **biiettiva**; perché sia ben posto serve in più che sia **continua**.

### Esempio svolto: la radice quadrata

*Dato $c>0$, trovare $x>0$ con $x^2=c$.* Applicazione risolvente $f:\mathbb{R}^+\to\mathbb{R}^+$, $f(c)=\sqrt c$.

1. **Esistenza**: $\forall c>0\;\exists\,x=\sqrt c\in\mathbb{R}^+$.
2. **Unicità**: restringendo a $x>0$, se $x^2=z^2$ con $x,z>0$ allora $x=z$.
3. **Continuità**: razionalizzando,
$$|\sqrt c - \sqrt{c_0}| = \frac{|c-c_0|}{\sqrt c + \sqrt{c_0}} \le \frac{|c-c_0|}{\sqrt{c_0}}$$
quindi $|c-c_0|\to0 \Rightarrow |\sqrt c-\sqrt{c_0}|\to0$. Inoltre esiste $K=\frac{1}{\sqrt{c_0}}$ con $|\text{err. output}|\le K\,|\text{err. input}|$. ∎

Numericamente: $c=9\to y=3$; $c=9.1\to y\approx3.01662$. Variazione relativa sui dati $\approx1.11\%$, sui risultati $\approx0.554\%$: **l'errore non viene amplificato**.

### Esempi di problemi mal posti

| Violazione | Problema |
|---|---|
| **Esistenza** | trovare $x\in\mathbb{R}$ con $x^2=-4$: non esiste |
| **Unicità** | trovare $x\in\mathbb{R}$ con $x^2=4$ senza vincoli di segno: $x=\pm2$, quale restituire? |
| **Continuità** | valutare $f(x)=\dfrac{1}{x-3}$ vicino a $x=3$: esistenza e unicità ok, continuità no |

---

## 2. Indice di condizionamento

Per un problema **ben posto** si misura quanto la soluzione risente di una perturbazione dei dati. Sia $\tilde x = x+\delta x$ il dato perturbato.

$$\boxed{\;\frac{\|f(x)-f(\tilde x)\|}{\|f(x)\|} \le K\,\frac{\|x-\tilde x\|}{\|x\|}\;}$$

$K$ è l'**indice di condizionamento**: quantifica **di quanto l'errore relativo sui dati si amplifica sull'errore relativo sui risultati**.

- $K$ piccolo → **ben condizionato**: l'errore non viene amplificato
- $K$ grande → **mal condizionato**: l'errore viene amplificato in modo incontrollato, i risultati sono inaffidabili

> ⚠️ Due osservazioni che vanno citate all'esame:
> 1. **Uno stesso problema può essere mal condizionato per certi dati e ben condizionato per altri.** Il condizionamento è locale.
> 2. **Il condizionamento è legato al problema numerico**, non ha alcun legame con gli errori di arrotondamento delle operazioni di macchina né con il particolare algoritmo usato.

---

## 3. ⭐ La derivazione da saper fare a memoria

> **"Ricavare la formula che quantifica l'indice di condizionamento del problema di valutare una funzione $f:\mathbb{R}\to\mathbb{R}$ in un punto $x$."**
> — Esame 4 luglio 2024 Turno II, **3 punti**

Sia $f$ differenziabile e $\tilde x = x+\delta x$ con $\delta x$ piccola. Sviluppo in serie al primo ordine:

$$f(x+\delta x) = f(x)+\delta x\,f'(x)+o(\delta x)$$

Essendo $\delta x$ piccola si trascura $o(\delta x)$:

$$f(\tilde x)-f(x) \approx (\tilde x - x)\,f'(x)$$

Si divide per $f(x)$ per passare all'errore **relativo**:

$$\frac{f(\tilde x)-f(x)}{f(x)} \approx \frac{(\tilde x-x)\,f'(x)}{f(x)}$$

e si moltiplica e divide per $x$ a destra, per far comparire l'errore relativo **sui dati**:

$$\left|\frac{f(\tilde x)-f(x)}{f(x)}\right| \approx \left|\frac{f'(x)\,x}{f(x)}\right|\cdot\left|\frac{\tilde x-x}{x}\right|$$

$$\boxed{\;K=\left|\frac{f'(x)\,x}{f(x)}\right|\;}$$

**Il passaggio-chiave da non saltare** è l'ultimo: moltiplicare e dividere per $x$. Senza, ottieni un legame fra errore relativo sull'output ed errore *assoluto* sull'input, che non è l'indice di condizionamento.

### Esempio: $f(x)=\cos x$ vicino a $\pi/2$

$x=1.57079$, $\cos(1.57079)=6.32679489\cdot10^{-6}$, $f'(x)=-\sin x$.

$$K=\left|\frac{\sin(1.57079)\cdot1.57079}{\cos(1.57079)}\right| = \frac{0.99999999998\cdot1.57079}{6.32679489\cdot10^{-6}} \approx 2.48\cdot10^{5}$$

$K$ enorme ⟹ **mal condizionato** per $x$ vicino a $\pi/2$ (e ai suoi multipli). Verifica: con $\tilde x=1.57078$, cioè $\delta x\approx10^{-5}$:

$$\left|\frac{\tilde x-x}{x}\right|=\frac{10^{-5}}{1.57079}\approx6.37\cdot10^{-6} = 0.00064\,\%$$
$$\left|\frac{f(\tilde x)-f(x)}{f(x)}\right| \approx 2.48\cdot10^{5}\cdot 6.37\cdot10^{-6} \approx 1.58 = 158\,\%$$

Un errore dello $0.00064\%$ sui dati diventa un errore del $158\%$ sul risultato.

> 📌 *Nota sulle slide*: nell'ultimo passaggio è riportato "$=1.581 = 150.81\%$". Il valore $1.581$ è corretto, la conversione in percentuale è un refuso: $1.581 = 158.1\%$. Se all'esame ti trovi a fare questo conto, fidati del rapporto, non della percentuale scritta.

**Perché $\cos$ è mal condizionato lì**: $K$ ha $f(x)$ al denominatore. Vicino a uno zero della funzione, $f(x)\to0$ e $K$ esplode. **Valutare una funzione vicino a un suo zero è intrinsecamente mal condizionato** — vale la pena ricordarlo come regola generale.

---

## 4. Altri due esempi classici di mal condizionamento

**Zeri del polinomio di Wilkinson.** $p(x)=(x-1)(x-2)\cdots(x-20)=x^{20}-210x^{19}+\dots$, con zeri $1,2,\dots,20$. Si perturba **solo** il coefficiente di $x^{19}$: $-210 \to -210+2^{-23}$. Le radici cambiano drasticamente: alcune diventano complesse. Perturbazione dell'ordine di $10^{-7}$ su un coefficiente ⟹ stravolgimento delle radici.

**Sistema lineare.**
$$\begin{cases} x+y=2\\ 1001x+1000y=2001\end{cases} \qquad \text{soluzione } x=1,\;y=1$$

Si perturba dell'$1\%$ il coefficiente di $x$ nella prima equazione:

$$\begin{cases} (1+\tfrac{1}{100})x+y=2\\ 1001x+1000y=2001\end{cases} \qquad \Longrightarrow \qquad x=-\tfrac19\approx-0.1111,\quad y=\tfrac{1901}{900}\approx2.1122$$

**Errore sulla soluzione ≈ 110%** a fronte di un errore dell'1% sui dati. È l'anticipazione dell'indice di condizionamento $K(A)$ delle matrici, che studierai nel Blocco B.

### Cosa fare con un problema mal condizionato

1. **Cambiare la formulazione** del problema per aggirare l'ostacolo
2. Usare **precisione multipla** nei calcoli
3. Usare tecniche di **regolarizzazione**: si sostituisce al problema di partenza un problema leggermente modificato ma ben condizionato

---

## 5. Algoritmi e stabilità

Un **algoritmo** $\Psi$ è una sequenza di operazioni di macchina che, in un numero finito di passi, produce da un vettore di numeri di macchina $\tilde x$ un output $\Psi(\tilde x)=\tilde y$.

La **stabilità** esprime il comportamento dell'algoritmo rispetto alla **propagazione degli errori**: come reagisce all'introduzione di perturbazioni nei dati iniziali.

### I tre errori

$$\textbf{Errore inerente:}\quad E_{in}=\frac{f(\tilde x)-f(x)}{f(x)} \qquad \text{(dovuto alla rappresentazione finita — legato al \textbf{condizionamento})}$$

$$\textbf{Errore algoritmico:}\quad E_{alg}=\frac{\Psi(\tilde x)-f(\tilde x)}{f(\tilde x)} \qquad \text{(introdotto dalle operazioni in aritmetica finita)}$$

$$\textbf{Errore totale:}\quad E_{tot}=\frac{\Psi(\tilde x)-f(x)}{f(x)} \qquad \text{(accuratezza della soluzione numerica)}$$

Sull'errore algoritmico influiscono: il **numero** di operazioni, l'**ordine** in cui vengono eseguite, il **tipo** di operazioni.

### ⭐ La relazione fondamentale

$$\boxed{\;E_{tot}=E_{alg}\cdot E_{in}+E_{alg}+E_{in} \;\approx\; E_{in}+E_{alg}\;}$$

*Dimostrazione.*
$$\frac{\Psi(\tilde x)-f(x)}{f(x)} = \frac{\Psi(\tilde x)}{f(x)}-1 = \frac{\Psi(\tilde x)}{f(\tilde x)}\cdot\frac{f(\tilde x)}{f(x)}-1$$
$$= \left(\frac{\Psi(\tilde x)-f(\tilde x)}{f(\tilde x)}+1\right)\left(\frac{f(\tilde x)-f(x)}{f(x)}+1\right)-1 = E_{alg}E_{in}+E_{alg}+E_{in}$$
Trascurando il prodotto di due errori relativi (di ordine superiore): $E_{tot}\approx E_{in}+E_{alg}$. ∎

**Conseguenze da citare:**

- La bassa accuratezza di un risultato è imputabile **o** al mal condizionamento intrinseco del problema **o** all'instabilità dell'algoritmo.
- **La stabilità dell'algoritmo non garantisce che il risultato sia accurato.** Per un problema mal condizionato la distinzione fra algoritmo stabile e instabile è poco significativa, perché $E_{tot}$ è dominato da $E_{in}$: lì serve **riformulare il problema**, non cambiare algoritmo.

### Definizione formale di stabilità

$$|E_{alg}| \approx g(n)\cdot\varepsilon, \qquad |\varepsilon|\le u,\quad n=\text{numero di operazioni}$$

- $g(n)=cn$ con $c>0$ → crescita **lineare** dell'errore
- $g(n)=c^n$ con $c>1$ → crescita **esponenziale**

> Un algoritmo è **stabile** se $g(n)$ è lineare, cioè se l'errore algoritmico resta dell'ordine di grandezza della precisione di macchina. **Instabile** altrimenti.

---

## 6. ⭐ L'esempio-tipo: ben condizionato ma instabile

Valutare $f(x)=\dfrac{(1+x)-1}{x}$ in $x=10^{-15}$, mediante l'algoritmo $\Psi(x)=\big((1+x)-1\big)/x$.

In Python si ottiene $y = 1.11022302462516$ invece di $y=1$.

**Il problema è ben condizionato**: $f(x)=1$ per ogni $x\neq0$, quindi $f'(x)=0$ e

$$K=\left|\frac{f'(x)\,x}{f(x)}\right|=0$$

**L'algoritmo è instabile.** Traducendo in operazioni di macchina:

$$fl(1+x)=(1+fl(x))(1+\varepsilon_s), \qquad fl(1+x)-1=\big[(1+x(1+\varepsilon))(1+\varepsilon)-1\big](1+\varepsilon) \approx x(1+3\varepsilon)+\varepsilon$$

$$\tilde\Psi(x) \approx \frac{x(1+3\varepsilon)+\varepsilon}{x}$$

$$E_{alg}=\left|\frac{\tilde\Psi(x)-f(\tilde x)}{f(\tilde x)}\right| = \left|\frac{x+3\varepsilon x+\varepsilon-x}{x}\right| = \boxed{\left|3\varepsilon+\frac{\varepsilon}{x}\right|}$$

Se $x$ è piccolo, il termine $\varepsilon/x$ esplode: **l'algoritmo è instabile per $x$ più piccoli dell'unità di arrotondamento**.

> Questo è *il* caso da avere in testa: **condizionamento perfetto ($K=0$), risultato sbagliato**. Dimostra che le due nozioni sono indipendenti, ed è la risposta pronta alla domanda "distingui condizionamento e stabilità con un esempio".

---

## 7. Stabilità di due algoritmi elementari

### Somma di $n$ numeri finiti

```
S := x₁
for i = 2,…,n
    S := S + xᵢ
endfor
```

$$\left|\frac{S-S_n}{S}\right| \le \frac{|x_1|n+|x_2|(n-1)+\dots+|x_n|}{|S|}\cdot 1.01\,\varepsilon$$

**Ogni addendo è moltiplicato per un peso decrescente**: $x_1$ pesa $n$, $x_2$ pesa $n-1$, …, $x_n$ pesa $1$. Ne segue la regola pratica:

> 🔑 **La maggiorazione dell'errore è minima se si sommano i numeri in ordine crescente di modulo**: $|x_1|\le|x_2|\le\dots\le|x_n|$. Così i pesi più grandi si associano ai numeri più piccoli.

Riscrivendo:

$$\left|\frac{S-S_n}{S}\right| \le \frac{|x_{\max}|}{|S|}\cdot 1.01\,\varepsilon\,\frac{n(n+1)}{2}$$

Due letture: l'errore **dipende dal quadrato di $n$**, e il fattore $|x_{\max}|/|S|$ è grande quando $S$ è piccola pur essendoci addendi grandi — cioè quando si sommano **addendi di segno opposto e modulo simile**. Di nuovo la cancellazione.

### Prodotto di $n$ numeri finiti

$$\left|\frac{P-P_n}{P}\right| \le 1.01\,(n-1)\,\varepsilon$$

Cresce **linearmente** con $n$ e **non dipende dai valori** dei fattori: il prodotto è stabile.

---

## 8. Analisi in avanti e all'indietro

Iniziata da Von Neumann e Goldstine (1947), l'analisi della stabilità si fa in due modi:

- **Analisi in avanti**: si stimano le variazioni sulla soluzione dovute sia alle perturbazioni nei dati sia agli errori intrinseci del metodo numerico.
- **Analisi all'indietro**: si considera la soluzione calcolata come la **soluzione esatta di un problema perturbato**, e si studia a quale perturbazione sui dati corrisponde la soluzione trovata. *(La ritroverai nel Blocco B, per la stabilità delle fattorizzazioni di matrici.)*

---

## 9. Bontà di un algoritmo e complessità

Un algoritmo è "buono" se è **generale**, **robusto** (applicabile a qualunque insieme di dati del dominio), **stabile**, e richiede il **minimo numero di operazioni** e la **minima memoria**.

**Complessità computazionale** = numero di operazioni aritmetiche floating point richieste. Unità: il **flop** (1 operazione elementare $+,-,\times,/$).

| Problema | Algoritmo | Complessità |
|---|---|---|
| Sistema lineare $n\times n$ | **Cramer** | $O\big((n+1)!\big)$ — inutilizzabile |
| Sistema lineare $n\times n$ | **Gauss** | $O(n^3)$ |
| Prodotto matrice–vettore $(m\times n)$ | | $2nm$, cioè $O(n^2)$ se $m=n$ |
| Valutare $p(x)$ di grado $n$ | ingenuo | $2n$ moltiplicazioni + $n$ somme |
| Valutare $p(x)$ di grado $n$ | **Ruffini–Horner** | $n$ moltiplicazioni + $n$ somme |

**Ruffini–Horner**: $p(x)=a_0+x\big(a_1+x(a_2+\dots)\big)$.
Esempio: $6+12x+15x^2-12x^3 \;=\; 6+x\big(12+x(15-12x)\big)$.

```
p = aₙ
for i = 1,…,n
    p = a_{n-i} + p·x
end
```

Si dimostra che **Horner è anche più stabile** dell'algoritmo ingenuo: meno operazioni, meno errore accumulato.

---

## 10. Da ricordare

| | |
|---|---|
| Ben posto (Hadamard) | esistenza + unicità + dipendenza continua |
| Indice di condizionamento | $\frac{\Vert f(x)-f(\tilde x)\Vert}{\Vert f(x)\Vert}\le K\frac{\Vert x-\tilde x\Vert}{\Vert x\Vert}$ |
| **$K$ per $f:\mathbb{R}\to\mathbb{R}$ in $x$** | $K=\left\Vert \frac{f'(x)x}{f(x)}\right\Vert $ ⭐ |
| Errore inerente | $E_{in}=\frac{f(\tilde x)-f(x)}{f(x)}$ — dipende dal **condizionamento** |
| Errore algoritmico | $E_{alg}=\frac{\Psi(\tilde x)-f(\tilde x)}{f(\tilde x)}$ — dipende dalla **stabilità** |
| Errore totale | $E_{tot}\approx E_{in}+E_{alg}$ ⭐ |
| Stabilità | $\vert E_{alg}\vert \approx g(n)\varepsilon$; stabile se $g$ lineare |
| Somma di $n$ numeri | sommare in **ordine crescente di modulo**; errore $\propto n^2$ |
| Prodotto di $n$ numeri | errore $\le1.01(n-1)\varepsilon$, lineare, sempre stabile |
| Cramer vs Gauss | $O((n+1)!)$ vs $O(n^3)$ |
