i calcolatori sono costretti per natura ad operare su numeri _approssimati_.
per questo motivo anche i risultati delle operazioni sono soggetti ad approssimazione.

diciamo che un algoritmo accumula e _propaga_ errori.
###### def numero macchina
sia $x \in \mathbb{R}$, il numero macchina $\tilde{ x}$ è la rappresentazione finita usata dalla macchina per memorizzare $x$.

diciamo che $\tilde{ x} = x + \delta x$ in cui $\delta x$ è un **errore di arrotondamento** dovuto appunto alla limitazione della rappresentazione usata.
$\delta x$ dipende da
- numero di cifre (bit) usate nulla rappresentazione
- ordine delle operazioni

###### def operazioni macchina
una _operazione macchina_ è una operazione elementare svolta su numeri macchina, il suo risultato è anch'esso un numero macchina.

**nota**: causa gli errori di arrotondamento, le operazioni macchina **non** godono delle stesse proprietà delle operazioni elementari su numeri reali.

## rappresentazione
per ottenere una rappresentazione macchina di un numero reale viene mantenuto il _sistema posizionale_, il quale consiste nell'assegnare alle cifre un peso (potenza della base) diverso in base alla loro posizione.
###### def rappresentazione in base $\beta$
$\forall a \in \mathbb{R}$ esiste una rappresentazione di $a$ in una _base_ $\beta \ge 2$ del tipo
$$
|a| = \sum _i ^\infty  a_i \cdot \beta_{i}
$$
con ogni $a_i < \beta$ le cifre del numero $a$.
###### def rappresentazione a virgola fissa
nella rappresentazione in virgola fissa la posizione delle virgola è predefinita.
in altre parole sono fissati $I$ il numero di cifre riservate alla rappresentazione della parte intera e $f$ il numero di cifre riservate alla rappresentazione della parte frazionaria.

sia $x \in  \mathbb{R}$, posso rappresentarlo come
$$
|x| =  \sum _{i =-f}^{I-1} a_{i} \beta_{i}
$$
con ogni $a_i < \beta$ le cifre del numero $a$.

**nota**: il sistema salva il numero come un intero, la posizione della virgola è fissata a priori.
infatti, ogni $x \in \mathbb{R}$ con $f$ cifre dopo la virgola può essere rappresentato come
$$
x = J\cdot \beta^{-f} \quad J \in \mathbb{Z}
$$
principali caratteristiche del sistema a virgola fissa
- _pro_
	semplicità e velocità di calcolo grazie alla rappresentazione intera
- _contro_
	intervallo limitato e precisione costante
###### def rappresentazione a virgola mobile
nella rappresentazione a virgola mobile la posizione della virgola è determinata da un esponente.
sono fissati $m$ le cifre significative del numero, dette _mantissa_, e $p \in \mathbb{Z}$ l'esponente.

sia $x \in \mathbb{R}$, posso rappresentarlo come
$$
|x| = m \cdot \beta^p
$$
###### teo rappresentazione normalizzata
il teorema della rappresentazione normalizzata definisce il modello matematico per la rappresentazione _floating-point_ nei calcolatori.
fornisce una regola di standardizzazione per
- massimizzare la precisione
- assicurare unicità di rappresentazione
- separare mantissa ed esponente

>siano $a \in \mathbb{R} \smallsetminus \{  0 \}, \beta \ge 2$, allora
>$$\begin{align}\exists! p \in \mathbb{Z}, (a _{i})_{i\ge 1} \text{ successione con } 0\leq a_{i} < \beta \quad \forall i \\ \text{ tale che } |a| = \beta ^p \cdot \sum ^{+\infty }_{i=1} a_{i} \beta^{-i}= m\cdot \beta^p\end{align}$$
>in cui $a_{1} \ne 0$, questa è detta _condizione di normalizzazione_.
>il numero $\beta^p$ è detto _parte esponenziale_ mentre $p$ è detto _esponente_ di $a$.
>il numero $m=\sum^{+\infty}_{{i=1}} a_{i}\beta^{-i}$ è detto _mantissa_ di $a$, soddisfa la condizione
>$$\beta ^{-1} \le m <1$$
>questa rappresentazione è unica.
###### def insieme numeri macchina
un calcolatore che rappresenta numeri in virgola mobile ha a disposizione un numero limitato $t$ di cifre da assegnare alla rappresentazione della mantissa.
la rappresentazione approssimata ottenuta si costituisce i _numeri macchina_.

siano $\beta$ una base di rappresentazione, $t$ il numero di cifre usate per rappresentare la mantissa $m$.
siano inoltre $L,U \in \mathbb{Z}$ con $L<U$

allora l'_insieme dei numeri macchina_ (o insieme floating point) è definito come
$$
\mathbb{F}(\beta, t, L, U)=\left\{   a \in \mathbb{R}\smallsetminus \{ 0 \}  ~\middle|~ |a| = \beta^p\cdot \sum^t _{i}a_{i}\beta^{-1} \right\} \cup \{ 0 \}
$$
con $p \in [L, U]$.
ergo i numeri reali esattamente rappresentabili in virgola mobile con $t$ cifre alla mantissa.
$$
\mathbb{F}(\beta, t, L, U) = \{ a \in \mathbb{R}  \mid fl(a) = a\}
$$
in cui $fl(a)$ è la rappresentazione floating point di $a$.

**nota**: quando un numero $a \in \mathbb{R}$ è inserito nel calcolatore, avviene che
- se $p \not\in [L,U]$ si verifica un _overflow_ o _underflow_
- se $p  \in[L,U]$, inoltre
	- le cifre $a_{i}$ con $i>t$ sono tutte nulla, la rappresentazione è esatta e $a \in \mathbb{F}(\beta, t, L, U)$
	- altrimenti, la rappresentazione è data da $fl(a) = \pm 0.a_{1}a_{2}\dots \tilde{a}_{t}\cdot \beta^p$ in cui
	$$
	 \tilde{a}_{t}=\begin{cases} a _{t} &\text{ se }a_{t+1}< \frac{\beta}{2} \\ a _{t} + 1 &\text{ se }a_{t+1}\geq \frac{\beta}{2} \end{cases} 
	$$
###### def rounding to even
il _rounding to even_ è una regola di rappresentazione che consiste nell'arrotondare verso il numero pari in caso i due possibili arrotondamenti fossero equidistanti.

sia $x \in \mathbb{R}, fl(x)$ la sua rappresentazione macchina, $x_{1},x_{2}$ i due numeri macchina consecutivi più vicini a $x$, tali che $x_{1}<x_{2}$. sia inoltre
$$
x_{even} = \begin{cases}
x _{1} \text{ se $x_{1}$ ha l'ultimo bit a } 0\\
x _{2} \text{ se $x_{2}$ ha l'ultimo bit a } 0
\end{cases}
$$
allora ho che se esattamente $x = \frac{x_{1}+x_{2}}{2}$ viene assegnato $fl(x)=x_{even}$
###### teo cardinalità dei numeri macchina
sia $F(\beta, t, L, U)$ l'insieme dei numeri macchina (numeri floating point).
allora
- il numero di elementi positivi di $\mathbb{F}$ è
	$$
	(\beta -1)\cdot \beta^{t-1}\cdot(U-L+1)
	$$
	ed essi **non** sono uniformemente distribuiti
- il numero di elementi negativi di $\mathbb{F}$ è sempre
	$$
	(\beta -1)\cdot \beta^{t-1}\cdot(U-L+1)
	$$
	ed essi **non** sono uniformemente distribuiti
- $0 \in \mathbb{F}$

quindi ho che
$$
|\mathbb{F}| = 2(\beta -1)\cdot \beta^{t-1}\cdot(U-L+1) +1
$$
**dimostrazione**: è sufficiente enumerare tutti le mantisse possibili.
successivamente questo risulta essere un prodotto condizionato con i $(U-L+1)$ esponenti possibili.

con $t$ cifre posso creare $\beta^t$ mantisse, alle quali sottraggo quelle con prima cifra nulla.
$$
\beta^t - \beta^{t-1} = \beta^{t-1}(\beta-1) 
$$
segue che
$$
 |\mathbb{F}| = 2(\beta -1)\cdot \beta^{t-1}\cdot(U-L+1) +1 \qquad\boxed{\text{cvd}}
$$
## precisione
data una rappresentazione in base $\beta$ in virgola mobile, si rende necessario misurare la bontà di questa rappresentazione.
quanti e quali numeri possiamo effettivamente rappresentare e quali errori commettiamo nei nostri calcoli.
##### def spacing
sia $\mathbb{F}$ l'insieme dei numeri macchina.
per $x \in \mathbb{F}$ definisco lo _spacing_ di $x$ come la distanza tra $x$ ed il numero macchina ad esso più vicino
$$
\text{spacing}(x) = \min \{ |y - x|  \mid y \in \mathbb{F} \wedge y \ne x \}
$$
inoltre se $x$ è un numero _normalizzato_ scritto come
$$
x = \pm (1.m)\cdot \beta^p
$$
allora data $t$ numero delle cifre della mantissa $m$, ho che
$$
\text{spacing} (x) = \beta^{p-t+1}
$$
**nota**: $\mathbb{F}$ **non** è una perfetta rappresentazione di $\mathbb{R}$ ed i numeri sono sono equamente distribuiti sull'asse reale, eppure la distribuzione risulta uniforme tra potenze successive di $\beta$
inoltre la densità dei numeri $x \in \mathbb{F}$ diminuisce all'aumentare del valore assoluto.
##### def precisione macchina
sia $\mathbb{F}$ l'insieme dei numeri macchina.
definisco _precisione di macchina_ $\varepsilon$ come il più piccolo numero rappresentabile, ergo
$$
\varepsilon _{mach}= \min \set{ x \in \mathbb{F} > 0 \mid fl(1+ x) > 1}
$$
in altre parole $\varepsilon_{mach} = \text{spacing}(1)$.
usando la definizione di spacing ottengo
$$
\varepsilon_{mach} = \beta ^{p-t+1} = \beta ^{1-t}
$$
avendo la certezza che $p=0$

inoltre definisco il **unit round-off** $u$ come segue
%%u posto esattamente a meta tra due numeri rappresentabili.%%
$$
u = \frac 12 \varepsilon_{mach}
$$
questo rappresenta il *massimo errore di arrotondamento* che può essere commesso.

**convenzione**: dal momento che si lavora con stime e $O\left( \frac{1}{2} \varepsilon_{mach} \right)= O(\varepsilon_{mach})$, si consideri $u = \varepsilon_{mach}$ in assenza di precisazioni.
##### def errore assoluto di approssimazione
definisco _errore assoluto di approssimazione_ la quantità
$$
E_a = | fl(a) - a|
$$
dato un certo $a \in \mathbb{R}$
##### def errore relativo di approssimazione
definisco _errore relativo di approssimazione_ di $a \ne 0 \in \mathbb{R}$ la quantità
$$
E_{rel}  = \delta= \frac {|fl(a) -a|}{|a|}
$$
##### teo sul valore degli errori di approssimazione
sia $\mathbb{F}(\beta , t, L, U)$ l'insieme dei numeri macchina.
sia $a \ne 0 \in \mathbb{R}$, rappresentato in base $\beta$ come
$$
a = \pm 0.a_1a_2 \dots \beta ^p \quad \text{ con } a_1 \ne 0, p \in [L, U]
$$
allora, se **non** si verifica overflow, ho
$$
\begin{align}
| fl(a) - a| &\le K \cdot \beta ^{p-t} \\\\
\frac {|fl(a) - a|}{|a|} &\le K \cdot \beta ^{1-t}
\end{align}
$$
con $K=1$ nel caso di troncamento, $K = \frac 12$ nel caso di arrotondamento.

**dimostrazione**: considerando il caso di troncamento (l'altro è analogo) ho
$$
fl(a) = \pm 0.a_1a_2 \dots a_t \beta ^p
$$
per definizione. segue che
$$
|fl(a) - a| = 0.0 \dots 0a_{t+1} \dots \beta ^p < 1
$$
da cui concludo
$$
\begin{align}
|fl(a) - a| &\le \beta ^{p-t} \\

\frac {|fl(a) - a|}{|a|} &\le \frac {\beta^{-t}}{\beta ^{-1}} = \beta ^{1-t} = u
\end{align} \qquad\boxed{\text{cvd}} 
$$
in cui ho usato anche che $0.a_1a_2 \dots \ge \beta ^{-1}$, e la convenzione $u = \varepsilon _{mach}$

**osservazione**: l'errore assoluto è influenzato dall'ordine di grandezza di $a$, **non** l'errore relativo.
inoltre, l'errore relativo dipende dalla mantissa di $a$ e da una indicazione sulla bontà dell'approssimazione fatta.
per questo motivo si preferisce considerare l'errore relativo invece di quello assoluto.

**osservazione**: ponendo $\delta = \frac{{fl(a) -a}}{a}$ l'errore relativo commesso rappresentando $a$, noto che
$$
|\delta| \leq u
$$
inoltre
$$
fl(a)= a+ \delta a = a(1+ \delta)
$$
**nota**: $\delta a$ indica un errore assoluto commesso su $a$, mentre $\delta$ è l'errore relativo.
usando questa notazione risulta valido scrivere $\delta a= \delta \cdot a$ per definizione di errore relativo.
## operazioni floating point
le operazioni floating-point, definite all'interno dei numeri macchina $\mathbb{F}(\beta, t, L, U)$ sono
$$
\begin{gather}
fl(x) \oplus fl(y) = fl(fl(x) + fl(y)) = (fl(x)+fl(y))(1+\delta) \\ \\
fl(x) \ominus fl(y) = fl(fl(x) - fl(y)) = (fl(x)-fl(y))(1+\delta) \\ \\
fl(x) \oslash fl(y) = fl\left( \frac{fl(x)}{fl(y)} \right) = \left( \frac{fl(x)}{fl(y)} \right)(1+\delta) \\ \\
fl(x) \otimes fl(y) = fl(fl(x) \cdot fl(y)) = (fl(x)\cdot fl(y))(1+\delta) 
\end{gather}
$$
**osservazione**: il risultato di una operazione floating point è una perturbazione di quello della corrispondente operazione reale.