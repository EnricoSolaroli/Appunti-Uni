# Numeri finiti e aritmetica di macchina

> **Blocco A · giorno 18 agosto** · Fonte: `Numeri Finiti.pdf`, `Numeri_Finiti_e_Aritmetica_in_Virgola_Mobile.pdf`, `Operazioni_Numeri_Finiti.pdf`, `DisastriNumerici.pdf`
> Laboratorio collegato: **Esercitazione 4 (10/3)**

---

## 0. Il problema, in una frase

Un calcolatore rappresenta i reali con un **numero finito di cifre**. Quindi (a) ogni reale che entra viene approssimato, (b) ogni operazione fra numeri approssimati produce un risultato a sua volta da approssimare. Gli errori si accumulano e si propagano: senza una stima della distanza fra risultato esatto e risultato calcolato, **il numero che leggi può essere completamente illusorio**.

L'errore di arrotondamento dipende da due cose soltanto:

- il **numero di cifre** $t$ usate (più cifre → meno errore);
- l'**ordine delle operazioni** (può amplificare o ridurre l'errore).

Il secondo punto è quello che l'esame chiede di sfruttare.

---

## 1. Rappresentazione posizionale

Ogni $\alpha \in \mathbb{R}$ ammette rappresentazione in base $\beta \ge 2$, eventualmente infinita nella parte frazionaria:

$$\alpha = \pm\left(a_n a_{n-1}\dots a_0 . b_1 b_2 \dots\right)_\beta = \pm\left(\sum_{k=0}^{n} a_k\beta^k + \sum_{k=1}^{\infty} b_k \beta^{-k}\right)$$

con $a_k, b_k \in \{0,1,\dots,\beta-1\}$.

Esempio: $823.421 = 8\cdot10^2 + 2\cdot10^1 + 3\cdot10^0 + 4\cdot10^{-1} + 2\cdot10^{-2} + 1\cdot10^{-3}$.

Due modi di rappresentare in modo **finito**: virgola fissa e virgola mobile.

### 1.1 Virgola fissa

Posizione della virgola **predefinita**: $I$ cifre per la parte intera, $f$ per la frazionaria.

$$x = \pm\sum_{i=-f}^{I-1} a_i \beta^i$$

In memoria è salvato come **intero**: $x = J\beta^{-f}$ con $J \in \mathbb{Z}$. La virgola è implicita, non memorizzata.

| Caratteristica | Conseguenza |
|---|---|
| Operazioni su interi scalati | semplici e veloci |
| Intervallo limitato dalla parte intera | non rappresenta numeri molto grandi né molto piccoli |
| **Precisione costante** | il numero di cifre frazionarie è fisso |

Esempio ($\beta=10$, $I=3$, $f=2$): rappresentabili $-999.99 \le x \le 999.99$. Il numero $1234.25$ **non** è rappresentabile (servono 4 cifre intere).

Somma: $0.12 + 12.15$ → in memoria $12\cdot10^{-2}$ e $1215\cdot10^{-2}$; stesso fattore di scala, quindi si sommano gli interi: $1227\cdot10^{-2} = 12.27$.

### 1.2 Virgola mobile — il teorema di rappresentazione normalizzata

Qui la posizione della virgola è determinata da un **esponente**: $x = \pm m\beta^p$.

> **Teorema (rappresentazione in virgola mobile normalizzata).**
> Sia $\alpha \in \mathbb{R}\setminus\{0\}$, $\beta \ge 2$. Allora esistono $p \in \mathbb{Z}$ e una successione di cifre $(a_i)_{i\ge1}$, $0 \le a_i \le \beta-1$, con
> $$\boxed{a_1 \neq 0} \quad \text{(condizione di normalizzazione)}$$
> tali che
> $$\alpha = \pm\, 0.a_1a_2a_3\dots \cdot \beta^p = \pm\left(\sum_{i=1}^{+\infty} a_i\beta^{-i}\right)\beta^p = \pm\, m\,\beta^p$$
> La **mantissa** $m$ soddisfa $\;\boldsymbol{\beta^{-1} \le m < 1}\;$ e **la rappresentazione è unica**.

$p$ è l'**esponente**. La condizione $a_1 \neq 0$ è ciò che rende la rappresentazione unica: senza di essa $0.1\cdot10^1$ e $0.01\cdot10^2$ sarebbero entrambe valide.

Esempi: $\pi = +(0.314159\dots)10^1$ · $0.0333\dots = +(0.3333\dots)10^{-1}$.

---

## 2. L'insieme dei numeri di macchina $F(\beta,t,L,U)$

Nel calcolatore la mantissa ha solo $t$ cifre. Fissati base $\beta$, cifre $t$, ed $L<0<U$ interi:

$$F(\beta,t,L,U)=\left\{\alpha \in \mathbb{R}\setminus\{0\}\;:\;\alpha = \text{sign}(\alpha)\,0.a_1a_2\dots a_t\,\beta^p = \text{sign}(\alpha)\left(\sum_{i=1}^{t}a_i\beta^{-i}\right)\beta^p\right\}\cup\{0\}$$

con $a_1 \neq 0$ e $L \le p \le U$.

$F$ è un insieme **finito** di reali: quelli rappresentabili **esattamente**.

### Cosa succede quando inserisci un reale $\alpha$

**Caso 1 — $p \notin [L,U]$**: il numero non è rappresentabile.

- $p < L$ → **underflow**: $|\alpha|$ è più piccolo del minimo rappresentabile (di norma approssimato a 0)
- $p > U$ → **overflow**: $|\alpha|$ è più grande del massimo rappresentabile (arresto del calcolo o $\infty$)

**Caso 2 — $p \in [L,U]$**:

- (a) le cifre $a_i$ per $i>t$ sono tutte nulle → $\alpha$ è rappresentabile esattamente, $fl(\alpha)=\alpha$
- (b) altrimenti → $\alpha$ viene approssimato con $fl(\alpha) = \pm\, 0.a_1a_2\dots\tilde a_t\,\beta^p$

### Troncamento, arrotondamento, rounding to even

$$\tilde a_t = a_t \quad\text{(troncamento)} \qquad\qquad \tilde a_t = \begin{cases} a_t & \text{se } a_{t+1} < \beta/2\\[2pt] a_t + 1 & \text{se } a_{t+1} \ge \beta/2\end{cases} \quad\text{(arrotondamento)}$$

Esempio: $\alpha=0.54361$, $t=3$, $\beta=10$ → troncamento $0.543$, arrotondamento $0.544$.

**Rounding to even.** Regola speciale che si applica **solo** quando $\alpha$ è esattamente a metà fra due numeri di $F$ consecutivi, cioè $a_{t+1} = \beta/2$ e $a_i = 0\;\forall i>t+1$. In quel caso si sceglie il numero di $F$ con **ultima cifra di mantissa pari**:

- se $a_t$ è pari → non si incrementa
- se $a_t$ è dispari → si incrementa di 1

| $\alpha$ | $t$ | troncamento | arrotondamento | round to even |
|---|---|---|---|---|
| $0.185$ | 2 | $0.18$ | $0.19$ | $0.18$ (8 è pari) |
| $0.37975$ | 4 | $0.3797$ | $0.3798$ | $0.3798$ (8 è pari) |
| $(0.101110)_2$ | 4 | — | — | $(0.1100)_2$ |

**Perché esiste**: se nei casi ambigui si arrotondasse sempre per eccesso, si introdurrebbe una distorsione sistematica (**bias**) — la media degli arrotondati sarebbe più alta della media reale. Il rounding to even manda metà dei casi in su e metà in giù, e l'errore medio si compensa.

### Estremi e cardinalità

Mantissa più piccola: $\beta^{-1}$. Mantissa più grande: $1-\beta^{-t}$. Quindi

$$\alpha_{\min} = \beta^{L-1} \qquad\qquad \alpha_{\max} = (1-\beta^{-t})\,\beta^{U}$$

> ### ⚠️ Due convenzioni per la mantissa — non mescolarle
>
> Queste formule valgono nella convenzione **del corso** ($m = 0.a_1a_2\dots a_t$). Lo standard IEEE usa invece $M=1.m$ con l'**hidden bit**, e le formule cambiano. **L'Esercitazione 4 chiede esplicitamente la seconda** (vedi il N.B. del testo).
>
> | | Corso: $m=0.a_1\dots a_t$ | IEEE: $M=1.m$ (hidden bit) |
> |---|---|---|
> | Mantissa min / max | $\beta^{-1}$ / $1-\beta^{-t}$ | $1.0$ / $2-\beta^{-t}$ |
> | $\alpha_{\min}$ | $\beta^{L-1}$ | $\beta^{L}$ |
> | $\alpha_{\max}$ | $(1-\beta^{-t})\beta^{U}$ | $\big(1+(1-\beta^{-t})\big)\beta^{U}$ |
> | **Per i double** | $t=53$, $L=-1021$, $U=1024$ | $t=52$, $L=-1022$, $U=1023$ |
>
> Le due danno **gli stessi numeri** ($2.2250738585072014\cdot10^{-308}$ e $1.7976931348623157\cdot10^{308}$), ma **$t$, $L$ e $U$ hanno valori diversi**: scegli una convenzione e usa i suoi tre parametri. Mettere $L=-1022$ dentro $\beta^{L-1}$ dà $2^{-1023}$, sbagliato.
>
> **Cosa resta invariato**: la larghezza dell'intervallo di esponenti, $U-L+1 = 2046$ in entrambe. Quindi nella formula della cardinalità l'unico parametro critico è $t$.
>
> **Nello spacing e nella cardinalità serve $t$ = cifre significative totali, cioè $t=53$.**
> Verifica: spacing in $[2^{52},2^{53}]$ $= 2^{52+1-53}=1$ ✓ (con $t=52$ verrebbe 2, sbagliato).
> Cardinalità: $2\cdot1\cdot2^{52}\cdot2046+1 = 1.842873\cdot10^{19}$, che coincide col conteggio diretto dai bit IEEE ($2$ segni $\times\,2046$ esponenti $\times\,2^{52}$ mantisse $+$ lo zero). Con $t=52$ si ottiene la metà.
>
> *(Il conteggio riguarda i soli numeri normalizzati, coerentemente con $a_1\neq0$. Python ha anche i denormali — vero minimo `5e-324` — che stanno fuori da $F$.)*

> **Teorema (cardinalità).**
> $$\#F = 2\,(\beta-1)\,\beta^{\,t-1}\,(U-L+1) + 1$$

*Dimostrazione (per i positivi).* Con $t$ cifre in base $\beta$ si formano $\beta^t$ mantisse; vanno escluse quelle con prima cifra nulla, che sono $\beta^{t-1}$. Restano $\beta^t - \beta^{t-1} = (\beta-1)\beta^{t-1}$ mantisse. Ogni mantissa ammette $(U-L+1)$ esponenti. Quindi $(\beta-1)\beta^{t-1}(U-L+1)$ positivi, altrettanti negativi, più lo zero. ∎

**Esempio $\beta=2$, $t=3$, $L=-1$, $U=2$**: mantisse $\{.100,.101,.110,.111\}$ (4), esponenti $\{2^{-1},2^0,2^1,2^2\}$ (4) → 16 positivi, 16 negativi, lo 0 → $\#F=33$.

---

## 3. Spacing e precisione di macchina

![[numeri_macchina_distribuzione.png]]

> Con $\beta=2$, $t=3$, $L=-1$, $U=2$: **4 mantisse** possibili in ogni intervallo fra due potenze di $\beta$, e lo **spacing raddoppia a ogni ottava**. La densità dei numeri di macchina decresce al crescere del valore assoluto — ed è per questo che l'errore **relativo** è la misura giusta, non l'assoluto.

Distanza fra due numeri consecutivi di $F$ nell'intervallo $[\beta^p, \beta^{p+1}]$:

$$s = \left(1\cdot\beta^{-1}+1\cdot\beta^{-t}\right)\beta^{p+1} - \left(1\cdot\beta^{-1}\right)\beta^{p+1} = \boxed{\beta^{\,p+1-t}}$$

Esempi con $\beta=2$, $t=53$ (doppia precisione):

- in $[2^{52},2^{53}]$: $p=52 \Rightarrow s = 2^{52+1-53}=1$ → **ci sono solo gli interi**
- in $[2^{53},2^{54}]$: $p=53 \Rightarrow s = 2$ → **solo gli interi pari**

> ⚠️ **$F$ non è una buona simulazione di $\mathbb{R}$:**
> 1. i numeri di $F$ **non** sono uniformemente distribuiti sull'asse reale;
> 2. sono uniformi solo **fra due potenze consecutive** di $\beta$;
> 3. la loro **densità decresce** al crescere del valore assoluto.

**Precisione di macchina**: lo spacing per $p=0$, cioè fra $\beta^0$ e $\beta^1$:

$$\text{eps} = \beta^{\,1-t} \qquad\qquad u = \tfrac12\,\text{eps} = \tfrac12\beta^{\,1-t} \quad(\textit{roundoff unit})$$

Caratterizzazione operativa: **eps è il più piccolo numero positivo di macchina tale che $fl(1+\text{eps})>1$**. È la definizione che si usa per cercarlo numericamente in laboratorio.

---

## 4. Errore di rappresentazione

$$E_a = |fl(\alpha)-\alpha| \qquad\qquad E_{rel} = \frac{|fl(\alpha)-\alpha|}{|\alpha|}$$

> **Teorema.** Sia $\alpha \ne 0$, $\alpha = \pm 0.a_1a_2\dots\beta^p$, $a_1\neq0$, $p\in[L,U]$. Se non c'è overflow:
> $$|fl(\alpha)-\alpha| \le K\beta^{\,p-t} \qquad\qquad \frac{|fl(\alpha)-\alpha|}{|\alpha|} \le K\beta^{\,1-t}$$
> con $K=1$ nel **troncamento**, $K=\tfrac12$ nell'**arrotondamento**.

*Dimostrazione (troncamento).*
$$|fl(\alpha)-\alpha| = 0.\underbrace{00\dots0}_{t}a_{t+1}a_{t+2}\dots\beta^p = 0.a_{t+1}a_{t+2}\dots\,\beta^{-t}\beta^p$$
Poiché $0.a_{t+1}a_{t+2}\dots < 1$, segue $|fl(\alpha)-\alpha| \le \beta^{p-t}$.
Per il relativo, essendo $0.a_1a_2\dots \ge \beta^{-1}$ (normalizzazione!):
$$\frac{|fl(\alpha)-\alpha|}{|\alpha|} = \frac{0.a_{t+1}\dots\beta^{-t}\beta^p}{0.a_1a_2\dots\beta^p} \le \frac{\beta^{-t}}{\beta^{-1}} = \beta^{1-t} \;\;∎$$

### Perché si usa l'errore relativo

$$\alpha=1000,\;\tilde\alpha=1000.5 \;\Rightarrow\; E_a = 5\cdot10^{-1},\quad E_{rel}=5\cdot10^{-4}$$
$$x=0.01,\;\tilde x=0.51 \;\Rightarrow\; E_a = 5\cdot10^{-1},\quad E_{rel}=5\cdot10^{1}$$

**Stesso errore assoluto**, ma $\tilde\alpha$ ha 4 cifre significative corrette e $\tilde x$ non ne ha nemmeno una. L'errore assoluto dipende dall'ordine di grandezza di $\alpha$, il relativo no: **il relativo dice quante cifre significative sono corrette**.

### Il modello di perturbazione

Ponendo $\varepsilon = \dfrac{fl(\alpha)-\alpha}{\alpha}$, dal teorema segue (caso arrotondamento):

$$|\varepsilon| \le u \qquad\text{e}\qquad \boxed{fl(\alpha)=\alpha(1+\varepsilon)}$$

**Il numero di macchina è una perturbazione relativa del reale.** Questa è la formula su cui si costruisce tutta l'analisi della propagazione degli errori.

In doppia precisione $t=53$ → $u = \tfrac12 2^{-52}=2^{-53}\approx 10^{-16}$, cioè **circa 16 cifre decimali significative**.

---

## 5. Standard IEEE 754

Base $\beta=2$, parole da 32 / 64 / 128 bit divise in: **segno** $s$ (1 bit), **esponente polarizzato** $p^*$, **mantissa** $m$.

| Precisione | bit tot | bit esp | bit mant | $L$ | $U$ | $t$ | cifre dec. |
|---|---|---|---|---|---|---|---|
| Singola | 32 | 8 | 23 | $-126$ | $127$ | 24 | ~7 |
| **Doppia** | **64** | **11** | **52** | $\mathbf{-1022}$ | $\mathbf{1023}$ | $\mathbf{53}$ | **~16** |
| Quadrupla | 128 | 15 | 112 | — | — | 113 | ~34 |

**Esponente polarizzato**: si memorizza $p^* = p + \text{bias}$ con $\text{bias}=2^{e-1}-1$ ($e$ = bit dell'esponente). Su 32 bit: $p^*=p+127$, $0\le p^*\le 255$. Il bias serve a rappresentare esponenti negativi come interi positivi, semplificando confronto e ordinamento.

**Valori speciali** (32 bit): $p^*=0$, $m=0$ → zero · $p^*=255$, $m=0$ → $\pm\infty$ · $p^*=255$, $m\neq0$ → NaN (forme indeterminate $0/0$, $\infty/\infty$).

**Hidden bit**: la mantissa è normalizzata, quindi il primo bit è certamente 1 e **non viene memorizzato**. Si guadagna un bit: la mantissa effettiva è $M = 1.m$.

**Esempio di decodifica (32 bit).**
`0 01111110 10000000000000000000000`
Segno $+$; $p^*=(01111110)_2=126 \Rightarrow p = 126-127=-1$; $M=1.1$.
$$N = +\,(1.1)_2\cdot2^{-1} = (0.11)_2 = 1\cdot2^{-1}+1\cdot2^{-2}=0.75$$

**In Python** (`sys.float_info`): `mant_dig=53` ($t$), `max_exp=1024` ($U=1023$), `min_exp=-1021` ($L=-1022$), `radix=2` ($\beta$), `epsilon=2.220446049250313e-16` (spacing in $[1,2]$), `dig=15`.

---

## 6. Aritmetica in virgola mobile

Il risultato di un'operazione fra numeri di macchina può non essere un numero di macchina. Si definiscono quindi le **operazioni di macchina**:

$$fl(x)\oplus fl(y)=fl\big(fl(x)+fl(y)\big) \qquad fl(x)\ominus fl(y)=fl\big(fl(x)-fl(y)\big)$$
$$fl(x)\otimes fl(y)=fl\big(fl(x)\times fl(y)\big) \qquad fl(x)\oslash fl(y)=fl\big(fl(x)/fl(y)\big)$$

e vale, per ciascuna,

$$fl(x)\oplus fl(y) = \big(fl(x)+fl(y)\big)(1+\varepsilon), \qquad |\varepsilon|\le u$$

cioè **il risultato di un'operazione floating point è una perturbazione del risultato reale**.

### Come si eseguono, in pratica

**Somma algebrica** ($x,y \in F$):
1. confronto degli esponenti;
2. **allineamento**: si scala la mantissa del numero con esponente minore;
3. somma delle mantisse;
4. normalizzazione del risultato;
5. arrotondamento a $t$ cifre.

*Esempio* in $F(10,5,L,U)$: $x=0.78546\cdot10^2$, $y=0.61332\cdot10^{-1}$.
$y = 0.00061332\cdot10^2$; somma $=0.78607332\cdot10^2$; già normalizzato; $fl(\cdot)=0.78607\cdot10^2$.

**Prodotto**: prodotto delle mantisse → arrotondamento a $t$ cifre → somma degli esponenti con normalizzazione.
**Divisione**: divisione delle mantisse → sottrazione degli esponenti → normalizzazione → arrotondamento.

### ⚠️ Proprietà che NON valgono in $F$

- ✗ associativa della somma: $(a\oplus b)\oplus c \neq a\oplus(b\oplus c)$
- ✗ associativa del prodotto
- ✗ distributiva: $a\otimes(b\oplus c)\neq(a\otimes b)\oplus(a\otimes c)$

*Controesempio ($\beta=10$, $t=8$)*: $a=0.23371258\cdot10^{-4}$, $b=0.33678429\cdot10^2$, $c=-0.33677811\cdot10^2$.

$$fl\big(fl(a+b)+c\big) = 0.6410000\cdot10^{-3} \qquad fl\big(a+fl(b+c)\big) = 0.64137126\cdot10^{-3}$$

Il valore reale è $0.641371258\cdot10^{-3}$: **il secondo ordine è quello giusto**. Nel primo, $a$ viene "assorbito" da $b$ (esponenti troppo distanti) e le sue cifre si perdono prima che la cancellazione fra $b$ e $c$ le renda significative.

---

## 7. Propagazione degli errori

### 7.1 Somma — l'operazione pericolosa

Siano $x,y\in\mathbb{R}$ ma $x,y\notin F$. Allora $fl(x)=x(1+\varepsilon_x)$, $fl(y)=y(1+\varepsilon_y)$ e

$$fl\big(fl(x)\oplus fl(y)\big) = \big[x(1+\varepsilon_x)+y(1+\varepsilon_y)\big](1+\varepsilon_s), \qquad |\varepsilon_x|,|\varepsilon_y|,|\varepsilon_s|\le u$$

Confrontando con $x+y$ e trascurando i prodotti $\varepsilon_x\varepsilon_s$, $\varepsilon_y\varepsilon_s$ (di ordine $u^2$):

$$\boxed{\;\text{Err}_{rel}^{s} \approx \left|\frac{x}{x+y}\varepsilon_x + \frac{y}{x+y}\varepsilon_y + \varepsilon_s\right| \le \left|\frac{x}{x+y}\right|u + \left|\frac{y}{x+y}\right|u + u\;}$$

I coefficienti $\left|\frac{x}{x+y}\right|$ e $\left|\frac{y}{x+y}\right|$ sono i **fattori di amplificazione**.

| Situazione | Conseguenza |
|---|---|
| $x,y$ **stesso segno** | i fattori sono $\le 1$ ⟹ $\;\text{Err}_{rel}^{s}\le 3u\;$ — **sicuro** |
| $x,y$ **segno opposto e modulo simile** | $\vert x+y\vert \approx0$: i fattori esplodono, errore **non controllabile a priori** — **cancellazione numerica** |

> 🔑 **Osservazione decisiva (chiesta all'esame).** I fattori di amplificazione moltiplicano $\varepsilon_x$ ed $\varepsilon_y$, che sono gli **errori di rappresentazione dei dati**. Se $x,y$ sono **già** numeri di macchina, allora $\varepsilon_x=\varepsilon_y=0$ e **il problema non si pone**: la cancellazione avviene ma non fa danno.

**Verifica numerica** in $F(10,5,L,U)$:

*Caso pericoloso* — $x=0.75868531\cdot10^2$, $y=0.75868100\cdot10^2$, **non** rappresentabili esattamente:
$fl(x)=0.75869\cdot10^2$, $fl(y)=0.75868\cdot10^2$ → differenza $=0.10000\cdot10^{-2}$.
Valore reale: $x-y = 0.431\cdot10^{-3}$. **Errore relativo ≈ 132%.**
Le prime 4 cifre si cancellano: da 5 cifre significative si passa a 1, e le altre 4 posizioni sono riempite da zeri **non informativi**.

*Caso innocuo* — $x=0.75869\cdot10^2$, $y=0.75868\cdot10^2$, **esattamente rappresentabili**:
differenza $=0.1000\cdot10^{-2}$, che è il valore esatto. **Errore relativo nullo.** Le cifre si cancellano lo stesso, ma non c'era errore da amplificare.

### 7.2 Moltiplicazione — l'operazione sicura

$$\text{Err}_{rel}^{p} = \left|(1+\varepsilon_x)(1+\varepsilon_y)(1+\varepsilon_p)-1\right| \approx |\varepsilon_x+\varepsilon_y+\varepsilon_p| \le 3u$$

**Qualunque siano $x,y$**: l'errore relativo sul prodotto è sempre $\le 3u$. Il prodotto è **sempre stabile**.

---

## 8. Il caso da studio: l'equazione di II grado

*(È l'esercizio del 4 luglio 2024 Turno II — 13 punti. Sapendo questo, sai anche l'esercizio.)*

$ax^2+bx+c=0$ con $a=1$, $b=-6.433$, $c=0.009474$, in $F(10,4,L,U)$ (troncamento).

$$x_{1,2}=\frac{-b \mp \sqrt{b^2-4ac}}{2a}$$

**Calcolo in aritmetica finita.** $fl(b^2)=0.4138\cdot10^2$, $fl(4ac)=0.3789\cdot10^{-1}$, da cui $\eta = fl\big(fl(b^2)-fl(4ac)\big)=0.4134\cdot10^2$ e $fl(\sqrt\eta)=0.6429\cdot10^1$.

- $x_1$: numeratore $-b-fl(\sqrt\eta) = 0.6433\cdot10^1 - 0.6429\cdot10^1 = 0.0004\cdot10^1$ ⟶ **differenza fra due numeri quasi uguali**. Risultato $fl(x_1)=0.2000\cdot10^{-2}$, contro il valore reale $0.1473056\dots\cdot10^{-2}$. **Errore relativo ≈ 36%.**
- $x_2$: numeratore $-b+fl(\sqrt\eta)$ ⟶ **somma di concordi**, nessuna cancellazione. $fl(x_2)=0.6430\cdot10^1$ contro $0.64315269\dots\cdot10^1$. **Errore relativo ≈ 0.024%.**

### L'algoritmo stabile alternativo

> **L'idea**: calcolare **prima** la radice che, **in base al segno di $b$**, non comporta differenza fra numeri vicini; ricavare l'altra dalla relazione fra le radici
> $$x_1x_2=\frac{c}{a} \qquad\Longrightarrow\qquad \boxed{x_1=\frac{c}{a\,x_2}}$$

Qui $b<0$, quindi $-b>0$ e la radice "sicura" è $x_2$ (somma di concordi). Poi:

$$fl(x_1)=fl\!\left(\frac{0.9474\cdot10^{-2}}{0.6430\cdot10^{1}}\right)=0.1473\cdot10^{-2}$$

**Errore relativo: $3.8\cdot10^{-7}$**, cioè $0.000038\%$. Da 36% a quasi zero, **senza cambiare precisione**: solo riordinando le operazioni.

⚠️ **Il segno di $b$ conta**: se $b>0$ la radice sicura è $x_1$ (quella con $-b-\sqrt{\cdot}$, entrambi negativi) e si ricava $x_2 = c/(a x_1)$. Non impararlo a memoria come "calcola sempre $x_2$": ragiona sul segno.

---

## 9. Due disastri veri

**Missile Patriot (1991, guerra del Golfo).** Il clock interno misurava il tempo in decimi di secondo; per convertirlo in secondi lo si moltiplicava per $1/10$, in un registro a **virgola fissa a 24 bit**. Ma $0.1 = (0.0\overline{0011})_2$ è periodico in binario, e troncato a 24 bit produce un errore assoluto $\approx 0.95\cdot10^{-7}$. Dopo **100 ore** di funzionamento (= $3\,600\,000$ decimi di secondo) l'errore accumulato sul tempo era

$$0.95\cdot10^{-7}\times 100\times60\times60\times10 \approx 0.34\ \text{s}$$

Uno Scud viaggia a $1676$ m/s: in $0.34$ s percorre **circa 570 metri**, abbastanza per uscire dalla finestra di intercettazione. Il missile cadde su una caserma americana.

**Ariane V (4 giugno 1996).** Un numero in virgola mobile a **64 bit** (velocità orizzontale rispetto alla piattaforma) fu convertito in un **intero con segno a 16 bit**. Il valore superava $32\,767$, massimo rappresentabile: **overflow**, spegnimento dei motori, esplosione 37 secondi dopo il lancio. Perdita: ~500 milioni di dollari su un progetto da 7 miliardi.

Morale, ed è quella che serve all'esame: *l'errore piccolo non è pericoloso di per sé — lo diventa quando viene **moltiplicato** (Patriot) o quando incontra un **limite di rappresentazione** (Ariane).*

---

## 10. Da ricordare

| Formula | |
|---|---|
| Mantissa normalizzata | $\beta^{-1}\le m<1$, $a_1\neq0$ |
| Cardinalità | $\#F = 2(\beta-1)\beta^{t-1}(U-L+1)+1$ |
| Estremi | $\alpha_{\min}=\beta^{L-1}$, $\alpha_{\max}=(1-\beta^{-t})\beta^U$ |
| Spacing in $[\beta^p,\beta^{p+1}]$ | $s=\beta^{p+1-t}$ |
| Precisione di macchina | $\text{eps}=\beta^{1-t}$, $u=\tfrac12\beta^{1-t}$ |
| Errore di rappresentazione | $\dfrac{\vert fl(\alpha)-\alpha\vert}{\vert \alpha\vert}\le K\beta^{1-t}$, $K=1$ tronc., $K=\tfrac12$ arrot. |
| Modello di perturbazione | $fl(\alpha)=\alpha(1+\varepsilon)$, $\vert \varepsilon\vert \le u$ |
| Errore somma | $\le\left\vert \tfrac{x}{x+y}\right\vert u+\left\vert \tfrac{y}{x+y}\right\vert u+u$ |
| Errore prodotto | $\le 3u$ sempre |
| Radici di II grado, stabile | $x_1=\dfrac{c}{a\,x_2}$ |
