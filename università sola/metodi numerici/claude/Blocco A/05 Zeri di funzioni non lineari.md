# Soluzione numerica di equazioni non lineari

> **Blocco A · giorno 21 agosto** · Fonte: `LezioneEquazioniNonLineari.pdf`
> Laboratorio collegato: **Laboratorio 7 (31/3)** · Scheletri: `metodo_bisezione`, `falsi`, `corde`, `secanti`, `newton`, `newton_modificato`, `stima_ordine` — **0 buchi, sono già completi**

---

## 0. Il problema

Data $f:\mathbb{R}\to\mathbb{R}$ non lineare, trovare gli $\alpha\in\mathbb{R}$ tali che $f(\alpha)=0$ (**zeri** o **radici**).

Le radici in generale **non** si esprimono in forma chiusa; formule esplicite esistono solo per polinomi di grado $<5$, e già dal terzo grado sono impraticabili. Si ricorre quindi a **metodi iterativi**: si costruisce una successione $x_1,x_2,\dots,x_k,\dots$ con

$$\lim_{k\to+\infty}x_k=\alpha$$

⚠️ **Prima di applicare qualunque metodo bisogna rendere il problema ben posto**: individuare un intervallo $I$ che contenga **una sola** radice. Questa è la fase di *localizzazione* — all'esame si fa graficamente, ed è sempre il primo punto dell'esercizio.

### Radici semplici e multiple

> Se $f(\alpha)=0$ e $f'(\alpha)\neq0$, $\alpha$ è una **radice semplice**.
> Se $f^{(k)}(\alpha)=0$ per $k=0,\dots,m-1$ e $f^{(m)}(\alpha)\neq0$, $\alpha$ è **radice multipla di molteplicità $m$**.

Esempio: $f(x)=(x+2)^2$ ha in $x=-2$ uno zero di molteplicità 2 — infatti $f'(x)=2(x+2)$ si annulla in $-2$, mentre $f''(x)=2\ne0$ sempre.

---

## 1. ⭐ Condizionamento del problema del calcolo degli zeri

Sia $\alpha$ zero **semplice** di $f$. Il valore calcolato $\tilde\alpha=\alpha+\delta$ può essere visto come radice **esatta** di un'equazione perturbata:

$$\tilde f(x)=f(x)+\varepsilon g(x)=0, \qquad \varepsilon>0 \text{ piccolo},\; f,g \text{ differenziabili}$$

dove $|\tilde f(x)-f(x)|=|\varepsilon g(x)|$ è la perturbazione **sui dati** (sulla funzione) e $|\tilde\alpha-\alpha|=|\delta|$ è la perturbazione **sui risultati**. Si ha $\tilde f(\tilde\alpha)=0$.

**Derivazione.** Sviluppo di Taylor al primo ordine di $\tilde f$ in un intorno di $\alpha$:

$$0=\tilde f(\alpha+\delta)=\tilde f(\alpha)+\delta\,\tilde f'(\alpha)+\tfrac12\delta^2\tilde f''(\xi) \;\approx\; \tilde f(\alpha)+\delta\,\tilde f'(\alpha)$$

Sostituendo $\tilde f = f+\varepsilon g$:

$$0 \approx f(\alpha)+\varepsilon g(\alpha)+\delta\big(f'(\alpha)+\varepsilon g'(\alpha)\big)$$

Per ipotesi $f(\alpha)=0$; trascurando il termine $\varepsilon\delta$ (analisi al primo ordine):

$$\varepsilon g(\alpha)+\delta f'(\alpha)\approx0 \qquad\Longrightarrow\qquad \delta \approx -\frac{\varepsilon g(\alpha)}{f'(\alpha)}$$

$$\boxed{\;|\tilde\alpha-\alpha|=|\delta|\approx K\,|\varepsilon g(\alpha)| \qquad\text{con}\qquad K=\frac{1}{|f'(\alpha)|}\;}$$

**Lettura**: se $|f'(\alpha)|$ è molto piccolo, $K$ è grande e il problema è **mal condizionato** — la funzione taglia l'asse x quasi orizzontalmente, e una minima perturbazione verticale sposta molto il punto d'intersezione. Se $|f'(\alpha)|$ è grande, la funzione taglia l'asse ripida e il problema è **ben condizionato**.

### Esempi

**Esempio 1.** $f(x)=\frac{x^2}{18}-\frac29$ in $[0,3]$, che si annulla in $x=2$. Perturbata: $\tilde f(x)=f(x)+0.01$, che si annulla in $x\approx1.945$.
$$f'(x)=\tfrac{x}{9},\quad f'(2)=\tfrac29 \qquad\Longrightarrow\qquad K=\frac{1}{|f'(2)|}=\frac92=4.5$$
Un errore assoluto dell'$1\%$ sulla funzione → errore di circa il $5\%$ sulla soluzione. **Ben condizionato.**

**Esempio 2.** $f(x)=\frac{x}{10}-\frac{\sin x}{10}$ in $[-\pi,\pi]$, che si annulla in $x=0$ — **radice di molteplicità 2**.
$$f'(x)=\tfrac{1}{10}-\tfrac{\cos x}{10},\quad f'(0)=0 \qquad\Longrightarrow\qquad K=\infty$$
La perturbata $\tilde f(x)=f(x)+0.01$ si annulla in $x\approx-0.8538$: un errore dell'$1\%$ sulla funzione produce un errore dell'$\mathbf{85\%}$ sulla soluzione. **Mal condizionato.**

> 🔑 **Conseguenza generale, da citare**: il calcolo di **radici multiple** ($m>1$) è un problema **numericamente molto difficile**, perché per definizione $f'(\alpha)=0$ e quindi $K=1/|f'(\alpha)|$ esplode.
> Esempio estremo: $F(x)=(x-1)^6 = x^6-6x^5+15x^4-20x^3+15x^2-6x+1$ ha in $\alpha=1$ una radice di molteplicità 6; il problema di determinarla è mal condizionato.

---

## 2. Le tre questioni dei metodi iterativi

1. **Scelta del valore iniziale $x_0$ e convergenza** della successione
2. **Ordine di convergenza** (velocità)
3. **Criteri di arresto** — problema puramente numerico: lavoriamo con numeri finiti e dobbiamo fermarci dopo un numero finito di passi

### Convergenza locale e globale

> Un metodo converge **localmente** ad $\alpha$ se la convergenza dipende in modo critico dalla vicinanza di $x_0$ ad $\alpha$. Converge **globalmente** se converge per **ogni** scelta di $x_0$ nell'intervallo.

Per i metodi a convergenza locale la scelta del punto di innesco è cruciale.

| Convergenza globale | Convergenza locale |
|---|---|
| Bisezione, Regula Falsi | Secanti, Newton |

### Ordine di convergenza

> **Definizione.** Sia $\{x_k\}$ convergente ad $\alpha$ e $e_k = x_k-\alpha$. Se esistono $p\ge1$ e $c>0$ con
> $$\lim_{k\to+\infty}\frac{|e_{k+1}|}{|e_k|^p}=c$$
> la successione ha **ordine di convergenza $p$** e **fattore di convergenza $c$**. Cioè, per $k$ grande, $|e_{k+1}|\approx c\,|e_k|^p$.

- $p=1$ → convergenza **lineare** (serve $c<1$ per avere convergenza); allora $|e_{k+1}|\approx c^{k+1}|e_0|$
- $1<p<2$ → **superlineare**
- $p=2$ → **quadratica**

**Significato pratico (spiegalo così all'esame).** Supponiamo $|e_k|\le\frac12 10^{-n}$, cioè $x_k$ ha $n$ decimali corretti. Se il metodo ha ordine $p$:

$$|e_{k+1}| \approx c\,|e_k|^p \le c\left(\tfrac12 10^{-n}\right)^p = \frac{c}{2^p}10^{-pn}$$

cioè $x_{k+1}$ ha circa $pn$ decimali corretti: **il numero di decimali esatti viene moltiplicato per $p$ a ogni passo** — asintoticamente, per $k\to\infty$, e a meno della costante $c$.

### Criteri di arresto

![[criteri_arresto.png]]

> I due modi in cui il test $|f(x_k)|<\varepsilon$ da solo fallisce, e dipendono entrambi da $|f'|$ vicino alla radice. Per questo si usano **due** criteri insieme.

Due possibilità:

1. sul **valore della funzione**: $|f(x_k)|<\varepsilon$
2. sull'**incremento**: $|x_k-x_{k-1}|<\varepsilon$

Il primo, da solo, ha due modi di fallire:

- **caso restrittivo**: $x_k$ è già vicino ad $\alpha$ ma $|f(x_k)|$ è grande → succede quando $f$ ha **derivata alta** vicino alla soluzione; ci si ferma troppo tardi
- **caso ottimistico**: $x_k$ è lontano da $\alpha$ ma $|f(x_k)|$ è piccolo → succede quando $f$ ha **derivata piccola**; ci si ferma troppo presto

> Un criterio che controlla **sia** il valore della funzione **sia** l'incremento è molto più affidabile. In pratica conviene usare l'incremento **relativo**:
> $$\frac{|x_k-x_{k-1}|}{|x_k|}<\varepsilon$$

*(È esattamente lo schema `tolx` / `tolf` che trovi negli scheletri.)*

---

## 3. Metodo di bisezione

![[bisezione_vs_falsi.png]]

> **Sinistra**: la bisezione usa solo i *segni* e dimezza l'intervallo a ogni passo. **Centro**: la regula falsi usa i *valori* tramite la secante — ma l'estremo destro resta inchiodato a 2.0 per sempre. **Destra**: la conseguenza — $b_k-a_k$ crolla per la bisezione e si ferma per la regula falsi. Ecco perché il criterio d'arresto sull'ampiezza vale solo per la prima.

> **Teorema degli zeri di funzioni continue (Bolzano).** Se $f$ è continua in $[a,b]$ e $f(a)\cdot f(b)<0$, allora $f$ ammette almeno uno zero in $(a,b)$.

Il metodo genera una successione di sottointervalli annidati che racchiudono sempre lo zero:

$$f(a_k)\cdot f(b_k)<0 \quad\text{e}\quad I_k\subset I_{k-1}$$

A ogni passo $c_k = \frac{a_{k-1}+b_{k-1}}{2}$; si calcola $f(c_k)$ e si sceglie il sottointervallo che mantiene il cambio di segno.

**Ampiezza dopo $k$ passi**: $(b_k-a_k)=\dfrac{b_0-a_0}{2^k}$.

### Ordine

$$|e_k|=|x_k-\alpha|\le\tfrac12|b_k-a_k|=\frac{|b_0-a_0|}{2^{k+1}} \;\;\Longrightarrow\;\; \lim_{k\to\infty}|e_k|=0 \quad\text{(convergenza)}$$

$$\frac{|e_{k+1}|}{|e_k|}\approx\frac12 \qquad\Longrightarrow\qquad \boxed{p=1,\quad c=\tfrac12}$$

**Convergenza globale** con la sola ipotesi che $f$ sia continua, e garantita **qualunque sia l'ampiezza** dell'intervallo iniziale. Ma è **molto lento**: servono circa **3.32 iterazioni per guadagnare una cifra significativa**. Infatti, imponendo $|e_{k+j}|\approx\frac{1}{10}|e_k|$ si ottiene $2^j\ge10$, cioè $j\ge\log_2 10\approx3.32$.

### Criterio di arresto e numero di iterazioni a priori

$$\left|\frac{b-a}{2^{k+1}}\right|\le\varepsilon \qquad\Longrightarrow\qquad k \ge \log_2\!\left(\frac{b-a}{\varepsilon}\right)-1 \qquad\Longrightarrow\qquad k=\left\lceil \log_2\!\left(\frac{b-a}{\varepsilon}\right)-1\right\rceil$$

Questo è l'unico metodo per cui **si sa in anticipo** quante iterazioni servono.

### ⚠️ Due accorgimenti di implementazione

**1. Usa `sign`, non il prodotto.** Per il test di segno conviene la funzione di libreria
$$\text{sign}(x)=\begin{cases}1 & x>0\\ 0 & x=0\\ -1 & x<0\end{cases}$$
perché il prodotto $f(a_k)\cdot f(c_k)$ può andare in overflow o underflow.

**2. Calcola il punto medio come $c_k = a_{k-1}+\frac{b_{k-1}-a_{k-1}}{2}$, non come $\frac{a_{k-1}+b_{k-1}}{2}$.**

*Perché*: operando con 3 cifre decimali sull'intervallo $[0.983,\,0.986]$, la formula ingenua dà
$$fl\!\left(\frac{fl(0.983+0.986)}{2}\right) = fl\!\left(\frac{0.197\cdot10^1}{2}\right)=0.980 \quad \textbf{fuori dall'intervallo!}$$
Con la formula corretta:
$$s_1=fl(0.986-0.983)=0.300\cdot10^{-2},\quad s_2=fl(s_1/2)=0.150\cdot10^{-2},\quad s_3=fl(0.983+s_2)=0.984$$
che è **interno** all'intervallo. È un caso concreto di cancellazione — collega questo punto al documento sulla stabilità.

### Pseudocodice

```
1. Se f(a)·f(b) < 0, poni a₀ := a, b₀ := b
2. Finché non è verificato il criterio di arresto:
     x_{k+1} := a_k + (b_k - a_k)/2
     a) se f(x_{k+1})·f(a_k) < 0  →  a_{k+1} := a_k;     b_{k+1} := x_{k+1}
     b) altrimenti se f(x_{k+1})·f(b_k) < 0  →  a_{k+1} := x_{k+1}; b_{k+1} := b_k
     c) altrimenti se f(x_{k+1}) = 0  →  x_{k+1} è la radice
     d) k := k+1
```

---

## 4. Metodo della regula falsi (falsa posizione)

La lentezza della bisezione si spiega così: il metodo **non usa i valori** della funzione, solo i loro segni, e non sfrutta derivabilità o forma di $f$.

Idea: come nuova approssimazione si prende l'intersezione con l'asse $x$ della **retta secante** per $(a,f(a))$ e $(b,f(b))$:

$$\begin{cases} y-f(a)=\dfrac{f(b)-f(a)}{b-a}(x-a)\\ y=0\end{cases} \qquad\Longrightarrow\qquad x = a-\frac{f(a)(b-a)}{f(b)-f(a)}$$

Formula iterativa:

$$\boxed{\;x_{k+1}=a_k-f(a_k)\,\frac{b_k-a_k}{f(b_k)-f(a_k)}\;}$$

La scelta del sottointervallo avviene in base al segno, come nella bisezione ⟹ **convergenza globale**, **superlineare** (più veloce della bisezione).

> ⚠️ **In generale l'ampiezza dell'intervallo $[a_i,b_i]$ NON tende a zero**: un estremo può restare bloccato. Quindi **il criterio di arresto basato sull'ampiezza dell'intervallo non è applicabile** — a differenza della bisezione.

Lo pseudocodice è identico a quello della bisezione, cambiata la formula di $x_{k+1}$.

---

## 5. Metodi di linearizzazione

Schema comune: dato $x_k$, si approssima $f$ con una retta per $(x_k, f(x_k))$ di coefficiente angolare $m_k$, e si prende l'intersezione con l'asse $x$:

$$\begin{cases}y=f(x_k)+m_k(x-x_k)\\ y=0\end{cases} \qquad\Longrightarrow\qquad \boxed{\;x_{k+1}=x_k-\frac{f(x_k)}{m_k}\;}$$

**A seconda della scelta di $m_k$ si ottengono tre metodi diversi.** Questa è la struttura da avere in testa: sono lo stesso metodo con tre scelte del coefficiente angolare.

### 5.1 Metodo delle corde — $m_k = m$ costante

Scelta classica: il coefficiente angolare della retta per $(a,f(a))$ e $(b,f(b))$:

$$m=\frac{f(b)-f(a)}{b-a} \qquad\Longrightarrow\qquad x_{k+1}=x_k-\frac{b-a}{f(b)-f(a)}\,f(x_k)$$

Ordine $p=1$. Vantaggio: $m$ si calcola **una volta sola**.

### 5.2 Metodo delle secanti — $m_k$ dalla secante fra gli ultimi due iterati

Servono **due** valori iniziali $x_0,x_1$:

$$m_k=\frac{f(x_k)-f(x_{k-1})}{x_k-x_{k-1}} \qquad\Longrightarrow\qquad x_{k+1}=x_k-f(x_k)\,\frac{x_k-x_{k-1}}{f(x_k)-f(x_{k-1})}$$

**Convergenza locale**: garantita solo se $x_0,x_1$ sono abbastanza vicini alla soluzione. **Superlineare** con

$$p=\frac{1+\sqrt5}{2}\approx1.618$$

> **Secanti vs regula falsi.** La formula è quasi la stessa, ma la regula falsi mantiene sempre il cambio di segno (e quindi la radice dentro l'intervallo), le secanti no: usano semplicemente gli ultimi due iterati. Le secanti possono essere **più veloci ma non convergono sempre**.

### 5.3 Metodo di Newton — $m_k = f'(x_k)$

Si usa la **retta tangente** in $(x_k,f(x_k))$, cioè il polinomio di Taylor di grado 1, che è la retta che meglio approssima $f$ in un intorno di $x_k$:

$$y=f(x_k)+f'(x_k)(x-x_k) \qquad\Longrightarrow\qquad \boxed{\;x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)}\;}$$

#### ⭐ Dimostrazione dell'ordine 2

Ipotesi: $\alpha$ **radice semplice**, cioè $f(\alpha)=0$ e $f'(\alpha)\neq0$. Sviluppo di $f$ in un intorno di $x_k$ valutato in $\alpha$:

$$0=f(\alpha)=f(x_k)+(\alpha-x_k)f'(x_k)+\tfrac12(\alpha-x_k)^2f''(\zeta)$$

Dividendo per $f'(x_k)$:

$$\frac{f(x_k)}{f'(x_k)}+(\alpha-x_k)+\tfrac12(\alpha-x_k)^2\frac{f''(\zeta)}{f'(x_k)}=0$$

Il primo termine più $-x_k$ è $-x_{k+1}$, quindi il tutto si riscrive come

$$(\alpha-x_{k+1})+\tfrac12(\alpha-x_k)^2\frac{f''(\zeta)}{f'(x_k)}=0$$

Ricordando $e_k=x_k-\alpha$:

$$-e_{k+1}+\tfrac12 e_k^2\frac{f''(\zeta)}{f'(x_k)}=0 \qquad\Longrightarrow\qquad e_{k+1}=e_k^2\,\frac{f''(\zeta)}{2f'(x_k)}$$

e poiché $x_k\to\alpha$ (e quindi $\zeta\to\alpha$):

$$\frac{e_{k+1}}{e_k^2}\;\xrightarrow[k\to\infty]{}\;\frac{f''(\alpha)}{2f'(\alpha)} \qquad\Longrightarrow\qquad \boxed{p=2,\quad c=\left|\frac{f''(\alpha)}{2f'(\alpha)}\right|}$$

#### ⭐ Radici multiple e Newton modificato

> Se $\alpha$ è zero di **molteplicità $m>1$**, il metodo di Newton **perde la convergenza quadratica** e diventa **lineare**:
> $$|x_{k+1}-\alpha|\approx c\,|x_k-\alpha| \qquad\text{con}\qquad c=\frac{m-1}{m}$$
> Per radici doppie ($m=2$): $c=\tfrac12$ — esattamente lento come la bisezione.

**Rimedio — metodo di Newton modificato:**

$$\boxed{\;x_{k+1}=x_k-m\,\frac{f(x_k)}{f'(x_k)}\;}$$

Si dimostra che l'ordine torna a essere **2**.

> 💡 **All'esame** (12 giugno 2024 T2, 3 punti) la domanda è formulata così: *"Nel caso in cui si verifichi che il metodo di Newton abbia ordine 1, spiegare il perché richiamando la teoria e modificare il metodo affinché il suo ordine sia 2."* La risposta completa è: applichi `stima_ordine` e trovi $p\approx1$ → la radice è multipla → $f'(\alpha)=0$ → il problema è mal condizionato e Newton degrada a lineare con $c=(m-1)/m$ → dal valore di $c$ ricavi $m$ (es. $c\approx0.5\Rightarrow m=2$) → applichi Newton modificato con quel $m$ e ritrovi $p=2$.

#### Teoremi di convergenza

> **Convergenza locale.** Se $f:[a,b]\to\mathbb{R}$ soddisfa
> 1. $f(a)f(b)<0$
> 2. $f,f',f''$ continue in $[a,b]$, cioè $f\in C^2[a,b]$
> 3. $f'(x)\neq0\;\;\forall x\in[a,b]$
>
> allora esiste un intorno $I\subset[a,b]$ dell'unica radice $\alpha\in(a,b)$ tale che, se $x_0\in I$, la successione di Newton converge ad $\alpha$.

> **Convergenza globale.** Sia $f\in C^2[a,b]$, $[a,b]$ chiuso e limitato. Se
> 1. $f(a)\cdot f(b)<0$
> 2. $f'(x)\neq0\;\;\forall x\in[a,b]$
> 3. $f''(x)\ge0$ **oppure** $f''(x)\le0\;\;\forall x\in[a,b]$ (segno costante)
> 4. $\left|\dfrac{f(a)}{f'(a)}\right|<b-a$ e $\left|\dfrac{f(b)}{f'(b)}\right|<b-a$
>
> allora Newton converge all'unica soluzione $\alpha$ in $[a,b]$ **per ogni scelta di $x_0\in[a,b]$**.

**Cosa garantisce ciascuna condizione** (chiedono anche questo):

| Cond. | Garantisce |
|---|---|
| 1 | che una radice in $(a,b)$ **esista** |
| 2 | che **non ci siano tangenti orizzontali**; insieme a 1, che la radice sia **unica** |
| 3 | che **concavità/convessità si mantengano** su tutto $[a,b]$; insieme a 2, che gli iterati siano **monotoni** per $k>1$ |
| 4 | che **le tangenti agli estremi intersechino l'asse $x$ dentro $(a,b)$**, quindi che tutti gli iterati (escluso al più $x_0$) restino interni |

### 5.4 Metodi ibridi

Newton e secanti sono a convergenza locale, e la difficoltà pratica è trovare $x_0$ nell'intervallo di convergenza. Rimedio: **far precedere il metodo locale da uno globale** (tipicamente la bisezione). Dopo alcuni passi di bisezione si innesca Newton; se non converge, si fanno altri passi del metodo globale.

---

## 6. Tabella riassuntiva — da sapere a memoria

| Metodo | $m_k$ | Ipotesi | Convergenza | Ordine $p$ |
|---|---|---|---|---|
| **Bisezione** | — | $f$ continua, $f(a)f(b)<0$ | **globale** | $1$ ($c=\frac12$) |
| **Regula falsi** | secante per $(a,f(a)),(b,f(b))$, aggiornata | $f$ continua, $f(a)f(b)<0$ | **globale** | superlineare |
| **Corde** | $m$ costante $=\frac{f(b)-f(a)}{b-a}$ | — | locale | $1$ |
| **Secanti** | $\frac{f(x_k)-f(x_{k-1})}{x_k-x_{k-1}}$ | $x_0,x_1$ vicini ad $\alpha$ | **locale** | $\frac{1+\sqrt5}{2}\approx1.618$ |
| **Newton** | $f'(x_k)$ | $\alpha$ semplice, $x_0$ vicino | **locale** (globale sotto le 4 cond.) | $2$ |
| **Newton su radice multipla $m$** | $f'(x_k)$ | $\alpha$ di molteplicità $m$ | locale | $1$, $c=\frac{m-1}{m}$ |
| **Newton modificato** | $f'(x_k)/m$ | $m$ noto | locale | $2$ |

### Le altre cose da ricordare

|                             |                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------- |
| Condizionamento di uno zero | $K=\dfrac{1}{\Vert f'(\alpha)\Vert}$ — radici multiple ⟹ mal condizionate                  |
| Ordine di convergenza       | $\lim \frac{\Vert e_{k+1}\Vert}{\Vert e_k\Vert^p}=c$; i decimali corretti si moltiplicano per $p$ |
| Criterio di arresto         | usarne **due** (valore + incremento); incremento **relativo**                       |
| Iterazioni bisezione        | $k=\left\lceil\log_2\frac{b-a}{\varepsilon}-1\right\rceil$; ~3.32 iter. per cifra   |
| Punto medio stabile         | $c_k=a_k+\frac{b_k-a_k}{2}$                                                         |
| Regula falsi                | ⚠️ non usare l'ampiezza dell'intervallo come criterio d'arresto                     |

---

## 7. Applicazioni (compaiono come "contesto" nei testi d'esame)

**Tasso medio di rendita di un fondo.** Investendo $v$ euro all'inizio di ogni anno, dopo $n$ anni il montante $M$ soddisfa
$$M=v\,\frac{1+r}{r}\big[(1+r)^n-1\big]$$
Il tasso $r$ è lo zero di $f(r)=M-v\frac{1+r}{r}\big[(1+r)^n-1\big]$.

**Volume molare di un gas reale (Beattie–Bridgeman).**
$$P=\frac{RT}{V}+\frac{\beta}{V^2}+\frac{\gamma}{V^3}+\frac{\delta}{V^4}$$
esplicita in $P$ ma **implicita in $V$**: per trovare $V$ dati $P$ e $T$ si risolve $f(V)=\frac{RT}{V}+\frac{\beta}{V^2}+\frac{\gamma}{V^3}+\frac{\delta}{V^4}-P=0$.
