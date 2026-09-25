###### def problema matematico
un _problema matematico_ $f$ è una descrizione **non** ambigua di un legame tra i dati di _input_ ($x$) e i risultati in _output_ ($y$).
in altre parole è una funzione che trasforma i dati in risultati.

un problema è detto **ben posto** se la sua soluzione soddisfa le seguenti condizioni
- esiste
- è unica
- dipende in modo continuo dai dati del problema
	ergo, se i dati del problema cambiano in modo graduale, anche la soluzione deve cambiare in modo graduale a sua volta.

###### def funzione dati-risultato
una _funzione dati-risultato_ è una funzione che associa i dati del problema alla sua soluzione, del tipo
$$
f : \mathbb{R} ^n \to \mathbb{R} ^m
$$
###### eg problema radice quadrata
sia considerato il seguente problema della radice quadrata
>dato $c \in \mathbb{R} ^+$, trovare $x \in \mathbb{R}^+$ tale che $x^2 =c$.

**osservazione**: l'applicazione risolvente è un funzione
$$
f: \mathbb{R}^+ \to \mathbb{R}^+
$$
tale che $f(c)= \sqrt{ c}$

ora è necessario verificare lae condizione di buona posizione.
1. esistenza
	$\forall c>0$ ho che $\exists ! x=\sqrt{ c} \in \mathbb{R}^+$ per definizione.
2. unicità
	avendo ristretto il dominio della radice ai soli numeri positivi, la soluzione è unica.
3. dipendenza con continuità dei dati
	sia $c_0>0$ fissato, sia $c>0$ sufficientemente vicino a $c_0$, consideriamo
	$$
	|\sqrt{ c} - \sqrt{ c_0}|
	$$
	che razionalizzo
	$$
	|\sqrt{ c} - \sqrt{ c_0}|= \frac {|c-c_0|}{\sqrt{ c} +\sqrt{ c_0}}
	$$
	segue che
	$$
	\sqrt{ c} + \sqrt{ c_0} \ge \sqrt{ c_0} \Rightarrow 
	|\sqrt{ c} - \sqrt{ c_0}| \le \frac {|c-c_0|}{\sqrt{ c_0}}
	$$
	da cui dimostro che $f(c) = \sqrt{ c}$ è continua $\forall c_0>0$
	$$
	|c-c_0| \to 0 \Rightarrow |\sqrt{ c} - \sqrt{ c_0}| \to 0
	$$
	ergo
	$$
	\lim _{c \to c_0} \sqrt{ c} = \sqrt{ c_0} \qquad\boxed{\text{cvd}}
	$$
	inoltre vediamo che il problema è ben posto perché ho che $\forall c_0>0\quad \exists K= \frac 1{\sqrt{ c_0}}$ tale che
	$$
	|errore output| \le K \cdot |errore input|
	$$
	ergo le soluzione dipende continuamente dai dati

###### def condizionamento
dato un problema ben posto, il _condizionamento_ è una gradezza che misura che misura quanto la soluzione venga influenzata da una perturbazione dei dati.

**osservazione**: il condizionamento di un problema permette di misurare quanto la soluzine cambia in risposta a un cambiamento nei dati.

il condizionamento è importante per
- _affidabilità_
	un problema mal condizionato fornisce risultati poco affidabili, sensibili a piccoli errori nei dati
- _interpretazione_
	analogamente, un problema mal condizionato fornisce risultati più diffili da ricollegare agli input

###### def perturbazione
sia $x$ una misura reale, $\tilde{ x} = x + \delta x$ il dato a nostra disposizione.

dico che $\tilde{ x}$ è effetto da una _perturbazione_ $\delta x$
###### def indice di condizionamento
sia $\frac {|| f(x) - f(\tilde{ x})||}{||f(x)||}$ la misura dell'errore relativo commesso sui risultati,
sia $\frac {||x - \tilde{ x}||}{||x||}$ la misura dell'errore relativo commesso sui dati.

l'_indice di condizionamento_ $K$ mette in relazione questi due errori
$$
\frac {|| f(x) - f(\tilde{ x})||}{||f(x)||} \le K \cdot \frac {||x - \tilde{ x}||}{||x||}
$$
**osservazione**: $K$ quantifica quanto l'errore relativo sui risultati è amplificato rispetto all'errore relativo sui dati.

un $K$ "piccolo" corrisponde a un problema _ben condizionato_, nel quale la propagazione dell'errore è minima, viceversa un $K$ "grande" corrisponde a un problema _mal condizionato_.

**nota**: il condizionamento è legato al _problema numerico_ e **non** ha alcun legame con gli errori di arrotondamento delle operazioni macchina, né con il particolare algoritmo utilizzato.

##### eg condizionamento di una funzione differenziabile
sia
$$
f: \mathbb{R} \to \mathbb{R} 
$$
una funzione differenziabile in un punto $x \in \mathbb{R}$ della quale vogliamo studiare il condizionamento.

indichiamo con $\tilde{ x}= x + \delta x$ il dato affetto da una perturbazione $\delta x$ che immaginiamo piccola.

si consideri uno sviluppo in serie del primo ordine di $f(x)$ in un intorno di $x$
$$
f(\tilde{ x})=f(x + \delta x)= f(x) + \delta x f'(x) + o(\delta x)
$$
ricordo la definizione di _o-piccolo_
$$
\lim _{ \delta x \to 0} \frac {o(\delta x)}{ \delta x} =0
$$
usando lo sviluppo in serie ottengo
$$
\begin{gather}

f(\tilde{ x}) - f(x)= \delta x f'(x) + o(\delta x) \approx (\tilde{ x} - x) \cdot f'(x) \\ \\
\frac {f(\tilde{ x}) - f(x)} {f(x)} \approx \frac { (\tilde{ x} - x) \cdot f'(x) }{f(x)} \\ \\
\left |\frac {f(\tilde{ x}) - f(x)} {f(x)} \right | \approx \left |\frac {xf'(x)} {f(x)} \right | \left | \frac {\tilde{ x} - x}{x} \right |
\end{gather}
$$
ponendo quindi $K = |\frac {xf'(x)} {f(x)}|$ ho che
$$
\left| \frac { f(x+ \delta x) - f(x)}{f(x)} \right | \approx K \cdot \left | \frac {\tilde{ x} - x}x \right|
$$
e che $K$ è l'_indice di condizionamento_ di $f$.

## algoritmi
sia $\Psi$ un algoritmo, inteso come una sequenza di istruzioni macchina che sono eseguite in tempo finito, per ottenere un output, dato un _vettore di numeri macchina_ $\tilde{ x}$.
indico l'output dell'algoritmo come segue
$$
\Psi (\tilde{ x}) = \tilde{ y}
$$
###### def errore algoritmico
la _stabilità_ è la proprietà di un algoritmo che ne esprime il comportamento rispetto alla propagazione degli errori.

sia $f: \mathbb{R}^n \to \mathbb{R} ^m$ una funzione dati-risultato.
sia $\Psi$ un algoritmo che approssima $f$, ergo tale che $\Psi (\tilde{ x}) \approx f(x)$ in cui
- $x$ è un dato
- $\tilde{ x}$ la sua rappresentazione aritmetica finita

allora per analizzare la stabilità di $\Psi$ confrontiamo il risultato dell'algoritmo con quello ottenuto tramite la funzione dati-risultato.

definisco l'_errore algoritmico_
$$
E_{alg} = \frac { \Psi(\tilde{ x}) - f(\tilde{ x})}{f(\tilde{ x})}
$$
l'errore algoritmico dipende da
- numero di operazioni
- l'ordine delle operazioni
- il tipo di operazioni
###### def errore inerente
definisco _errore inerente_ l'errore che deriva dalla rappresentazione finita dei numeri nel sistema di calcolo.
questo valore è legato al _condizionamento_ del problema.
$$
E_{in} = \frac {f(\tilde{ x}) - f(x)}{ f(x)}
$$
###### def accuratezza
sia $f$ una funzione dati-risultato, $\Psi$ un algoritmo che approssima $f$.
sia inoltre $x$ un dato e $\tilde{ x}$ una sua rappresentazione in aritmetica finita.

l'_accuratezza_ della soluzione numerica misura quanto la soluzione algoritmica $\Psi (\tilde{ x})$ si discosta da $f(x)$, ed è espressa dall'_errore relativo totale_
$$
E_{tot} = \frac { \Psi (\tilde{ x}) - f(x)}{ f(x)}
$$
l'errore relativo totale dipende da
- il condizionamento del problema
	che misura la sensibilità di $f(x)$ a perturbazioni del dato $x$
- la sensibilità dell'algoritmo
	che misura la capacità di $\Psi$ di limitare la propagazione degli errori causati dalla rappresentazione finita dei dati e dagli arrotondamenti
###### proposizione sull'errore relativo totale
>sia $f$ una funzione dati-risultato, $\Psi$ un algoritmo tale che $\Psi(\tilde{ x}) \approx f(x)$ per qualsiasi dato $x$ e la sua corrispondente rappresentazione finita $\tilde{ x}$
>allora vale
>$$E_{tot} \approx E_{in} + E_{alg}$$

**dimostrazione**: dalla definizione
$$
\begin{align}
\frac { \Psi (\tilde{ x}) - f(x) }{ f(x)} &= \Psi (\tilde{ x}) - 1\\
&= \frac { \Psi (\tilde{ x}) f(\tilde{ x}) }{f (\tilde{ x}) f(x) } -1\\
&= \frac { \Psi (\tilde{ x})+ f(\tilde{ x}) - f( \tilde{ x}) }{f (\tilde{ x}) } 
 \frac { f(\tilde{ x}) - f(x) + f(x)}{f(x)} 
-1\\
&=\left( \frac { \Psi (\tilde{ x}) - f(\tilde{ x}) }{f(\tilde{ x})} +1  \right) 
\left( \frac {f(\tilde{ x}) - f(x)}{f(x)} +1  \right) -1\\
&= \left( E_{alg} +1 \right) \left( E_{in} +1  \right) -1\\
&=E_{alg} \cdot E_{in} + E_{alg} + E_{in}
\end{align}
$$
possiamo trascurare i prodotti degli errori relativi perché solitamente molto piccoli, ottenendo
$$
E_{tot} \approx E_{in} + E_{alg} \qquad\boxed{\text{cvd}} 
$$
###### def stabilità numerica
sia $f: \mathbb{R}^n \to \mathbb{R}^m$ una funzione dati-risultato, $\Psi$ un algoritmo che approssima $f$.
sia $x$ un dato e $\tilde{ x}$ la sua rappresentazione macchina tale che $\Psi(\tilde{ x})$ è il risultato numerico.
allora $\Psi$ è detto _numericamente stabile_ se l'errore algoritmico può essere controllato in termini della _precisione di macchina_ $u$, ergo se
$$
|E_{alg} |= \left|\frac { \Psi (\tilde{ x}) - f(x)}{f(x)}\right| \le c \cdot u
$$
per una certa costante $c$ "moderata", che dipende _al più debolmente_ dalla dimensione del problema.
equivalentemente
$$
|E_{alg}| \approx g(n) \varepsilon \quad | \varepsilon | \le u
$$
in cui $\varepsilon$ è un errore elementare di arrotondamento, $g(n)$ è una funzione che dipende dal numero di operazioni effettuate, ergo dalla dimensione $n$ del problema.

###### eg stabilità nella somma di numeri finiti
studiamo qual è l'errore commesso da un algoritmo che somma $n$ numeri finiti.

sia $S$ la reale somma di $n$ numeri finiti $x_1, \dots, x_n$.
si considera il seguente algoritmo $\Psi$
```bash
S = x[1]
for i = 2 to n do:
	S = S + x[i]
end
```
segue che ad ogni iterazione
$$
S_i = fl(S_{i-1}+ x_i)
$$
in cui $fl$ è la funzione di conversione floating-point.

per questo motivo $S_n \ne S$, e l'errore algoritmico vale
$$
\left | \frac { \Psi (\tilde{ x}) - f(\tilde{ x})} {f(\tilde{ x})} \right | =
\left | \frac {S_n -S}S \right |
$$
ora studio $S_n$
$$
S_n \approx \sum ^n _i x_i(1 + \sum ^i _j \delta x_j)
$$
sia allora $\theta _i = \sum ^i_j \delta x_j \le (n-i+1)u$ in cui $u$ è l'errore macchina.
ho quindi
$$
S_n \le \sum ^n _i x_i(1 + \theta _i) =  \sum ^n_i x_i( n - i + 2)
$$
allora
$$
|S_n - S| \le u \sum ^n _i |x_i| (n - i + 1)
$$
da cui
$$
\begin{align}
 \left | \frac {S_n - S}S \right | &\le u \frac{ \sum ^n _i |x_i| (n - i + 1) }{|S|} \quad (\star)\\
 & \le u\frac { |x_{max}|}{S} \cdot \frac {n(n+1)}{2} \\
 & \le \frac { |x_{max}|}{S} \cdot \frac {n(n+1)}{2} \cdot 1.01\varepsilon \quad \text{con} \quad \varepsilon \le |u| 
\end{align}
$$
**osservazione**: da $(\star)$ osservo che ogni numero $x_i$ è moltiplicato per un fattore decrescente, segue che l'errore relativo minore è associato ai numeri con valore assoluto maggiore, così da minimizzare l'errore relativo finale.

concludiamo che l'errore dipende dal quadrato del numero degli elementi da sommare, inoltre se $|x_{max}| \gg |S|$ l'errore relativo è massimo.
questo potrebbe avvenire sommando ad esempio addendi di segno opposto ma modulo simile.
###### eg stabilità nella moltiplicazione di numeri finiti
studiamo qual è l'errore commesso da un algoritmo che moltiplica $n$ numeri finiti.

siano $x_1, \dots, x_n$ numeri finiti, $P = \prod _i^n x_i$ la reale produttoria.
si considera il seguente algoritmo
```bash
P = x[1]
for i = 2 to n do:
	P = P * x[i]
end
```
segue che ad ogni iterazione ho
$$
P _i = fl(P_{i-1} \cdot x_i)
$$
quindi l'errore relativo commesso vale
$$
\begin{align}
	\left | \frac {P-P_n}P \right | &\approx \left | \frac { P( \prod ^n _i (1+ \delta x_i) -1 )}P \right |\\
	&= \left| \prod ^n _i (1+ \delta x_ i) -1 \right|\\
	&\le (1+ \varepsilon ) ^{n-1} -1 \quad \text{con} \quad| \delta x_i | \le \varepsilon \le u \\
\end{align}
$$
per valori di $\varepsilon$ piccoli (come in aritmetica floating point) si usa
$$
(1+ \varepsilon ) ^{n-1} -1 \le 1.01(n-1)\varepsilon
$$
quindi abbiamo stimato $E_{alg}$ come $O(n\varepsilon)$, e **non** dipende dai valori $x_1, \dots, x_n$.
