
1. **Spiegare che cosa si intende per non convessità della funzione costo nelle reti neurali e quali difficoltà introduce nel processo di ottimizzazione.**
Le funzioni di attivazione in una rete neurale devono essere non-lineari e derivabili. L'introduzione della non-linearità è essenziale perché permette alla rete di analizzare e apprendere relazioni molto complesse tra i dati. Tuttavia, dal punto di vista matematico, questo comporta che la funzione di costo diventi **non convessa**.

Nel caso di funzioni convesse, abbiamo una forma a "ciotola" regolare e prevedibile, caratterizzata da un unico minimo globale. Nel caso invece di funzioni non convesse, la superficie si deforma causando la comparsa di **minimi locali** (e zone piatte chiamate plateau).

Queste irregolarità introducono forti difficoltà nel processo di ottimizzazione: l'algoritmo di discesa del gradiente potrebbe infatti bloccarsi all'interno di uno di questi minimi locali (dove la pendenza si annulla), non riuscendo quindi a raggiungere il vero obiettivo dell'addestramento, ovvero il minimo globale assoluto della funzione di costo."

**Cosa si intende:** In una rete neurale, l'introduzione di funzioni di attivazione non lineari (aggiungendo strati nascosti) trasforma la funzione di costo in una funzione matematica **non convessa**.   A differenza di una funzione convessa (che ha la forma di una semplice "ciotola" con un solo punto più basso assoluto), una funzione non convessa ha una superficie complessa fatta di molte valli e colline.

**Difficoltà introdotte:** Questa forma complessa presenta forti non linearità che creano "valli ripide" e "zone piatte". La difficoltà maggiore è la presenza di **minimi locali non globali**. Durante l'ottimizzazione, l'algoritmo potrebbe "incastrarsi" nel fondo di un avvallamento che sembra il punto più basso (minimo locale), senza riuscire a raggiungere il vero punto di errore minimo assoluto (minimo globale).

---

2. **Definire gli iperparametri di una rete neurale.**
Gli iperparametri sono parametri "esterni" al modello di Machine Learning che l'utente deve impostare manualmente _prima_ di iniziare l'addestramento. A differenza dei parametri del modello che vengono appresi durante il processo di addestramento stesso, gli iperparametri influenzano il comportamento del processo di addestramento. Es:

-       Learning rate: In termini matematici, è il numero che moltiplica il gradiente nella formula di aggiornamento dei pesi. In termini pratici, se immaginiamo l'addestramento come la discesa bendata da una montagna verso la valle dell'errore zero, il Learning Rate rappresenta la **lunghezza del passo** che decidi di compiere.

-       numero di epoche: numero di volte in cui l’intero set di dati viene utilizzato per addestrare il modello. Un numero insufficiente di epoche può portare a un modello non addestrato correttamente, mentre un numero eccessivo può portare ad overfitting -> La macchina impara a memoria gli esempi su cui si allena, senza essere in grado di generalizzare.

- dimensione del mini-batch, influenza la velocità di apprendimento e la stabilità
- architettura del modello
- regolarizzazione (???)
- inizzializzazione dei pesi
- funizioni di attivazione
---
3. **Spiegare il processo di training di una rete neurale, descrivendo le fasi di forward propagation, calcolo dell’errore e backward propagation.**
Il processo di apprendimento avviene iterativamente in due fasi principali:
- **Forward Propagation:** I dati di addestramento entrano dal layer di input, attraversano i layer nascosti (venendo elaborati tramite somme e funzioni di attivazione) fino a raggiungere il layer di output, producendo una "predizione".
- **Calcolo dell'errore:** La predizione viene confrontata con il valore target (l'etichetta reale) usando una funzione di perdita (Loss function), per quantificare quanto il modello abbia sbagliato.
- **Backward Propagation:** L'errore viene propagato all'indietro nella rete. I pesi vengono aggiornati tramite la discesa del gradiente in modo da ridurre progressivamente la Loss nelle iterazioni successive.
---
4. **Descrivere l’algoritmo di backpropagation per il calcolo delle derivate parziali della funzione costo rispetto ai pesi dei diversi layer.**
È uno dei primi algoritmi utilizzati per il calcolo dei pesi in una rete neurale.

È un metodo iterativo, basato sul calcolo differenziale, fondamentale per addestrare le reti multistrato. Serve a calcolare le derivate parziali della funzione di costo rispetto a ciascun peso presente nei vari layer della rete. Il calcolo si basa sulla "Chain Rule" (la regola di derivazione delle funzioni composte): si parte calcolando l'errore rispetto all'output e si va a ritroso moltiplicando le derivate locali di ogni nodo, permettendo così di scoprire come aggiornare un peso in base all'errore finale.

Ecco i passaggi matematici che dovresti integrare per rendere la risposta completa al 100%:

1. **La formula generale della derivata parziale**

Puoi aggiungere che, in base alla regola della catena, la derivata della funzione di loss $L$ rispetto a un generico peso $w_{ji}^{(l)}$ (che connette il neurone $j$ del layer $l-1$ al neurone $i$ del layer $l$) è calcolata come:

- $\frac{\partial L}{\partial w_{ji}^{(l)}} = \delta_i^{(l)} z_j^{(l-1)}$ (Dove $z_j^{(l-1)[cite_start]}$ è l'output del neurone del layer precedente e $\delta_i^{(l)}$ è il termine d'errore locale del neurone $i$ ).
    

2. **Il calcolo dell'errore $\delta$ nel layer di Output ($L$)** Devi specificare come si inizializza il calcolo all'indietro. Se il neurone $i$ appartiene al layer finale di uscita, il suo $\delta$ dipende direttamente dalla derivata della loss function rispetto alla predizione $\hat{y}_i$:

- $\delta_i^{(L)} = f'(a_i^{(L)}) \frac{\partial L(\hat{y}_i)}{\partial \hat{y}_i}$
    

3. **Il calcolo dell'errore $\delta$ negli Hidden Layer ($l$)** Questo è il cuore vero e proprio della "retropropagazione". Se il neurone $i$ appartiene a un layer nascosto $l$, il suo errore viene calcolato raccogliendo (sommando) gli errori propagati all'indietro dai neuroni $k$ del layer successivo $l+1$:

- $\delta_i^{(l)} = f'(a_i^{(l)}) \sum_{k=1}^{N^{(l+1)}} \delta_k^{(l+1)} w_{ik}^{(l+1)}$ (Dove $N^{(l+1)[cite_start]}$ indica il numero di neuroni nel layer $l+1$ e $f'$ è la derivata della funzione di attivazione ).
    

4. L'aggiornamento finale del peso (Discesa del Gradiente) Per chiudere perfettamente il discorso, puoi mostrare come la derivata appena trovata venga effettivamente impiegata per aggiornare il peso da un'epoca $k$ alla successiva $k+1$ tramite la discesa del gradiente:

- $w^{(k+1)} = w^{(k)} - \eta \nabla L(w^{(k)})$ (Sottolineando che $\eta$ rappresenta il learning rate ).

---
5. **Ricavare la formula di aggiornamento dei pesi nel caso di una rete MLP con un nodo di input, due layer nascosti ciascuno con un solo nodo e un nodo di output.**
---
6. **Descrivere il metodo di discesa del gradiente e confrontare Batch Gradient Descent, Stochastic Gradient Descent e Mini-Batch Gradient Descent, spiegando come viene calcolato il gradiente, quali dati vengono usati a ogni aggiornamento e quali sono vantaggi e svantaggi di ciascun metodo.**
Il metodo di discesa del gradiente è un algoritmo iterativo di ottimizzazione utilizzato per addestrare le reti neurali. Il suo scopo è trovare l'insieme dei pesi ottimali che rende minimo l'errore della rete (minimizzando la Funzione di Costo). Funziona calcolando il gradiente (le derivate parziali) della funzione di costo rispetto a ciascun peso; successivamente, aggiorna i pesi muovendosi nella direzione _opposta_ al gradiente (l'anti-gradiente), compiendo "passi" la cui lunghezza è determinata dal parametro _learning rate_.

**Il problema di partenza (La Non-Convessità):** A causa dell'introduzione delle funzioni di attivazione non lineari, la funzione di costo di una rete neurale complessa diventa **non convessa**. Questo significa che il suo "paesaggio" è pieno di avvallamenti e zone piatte, introducendo due grandi difficoltà:
1.     **Minimi locali:** La rete rischia di bloccarsi in una buca che sembra il punto più basso, ma non è il minimo globale (l'errore zero).
2.     **Plateau (zone piatte):** Il gradiente si annulla quasi del tutto, rendendo l'apprendimento estremamente lento.
Il metodo base per aggiornare i pesi è la discesa del gradiente, che può essere calcolata in tre modi diversi:

**Batch Gradient Descent**
La funzione di costo (errore totale) viene calcolato solo dopo aver considerato l’intero set di apprendimento. E dopo questo vengono aggiornati i vari pesi.
-       Vantaggio: La discesa verso il minimo è molto fluida
-       Svantaggio: richiede un'enorme potenza di calcolo e tantissima memoria ad ogni singolo passo.

**Stochastic Gradient Descent**
I campioni del set di addestramento vengono analizzati uno alla volta, viene calcolato il costo e vengono aggiornati i pesi.
-       Vantaggio: Il tempo di calcolo e la memoria richiesta per compiere un _singolo_ passo sono bassissimi, perché la macchina deve tenere in memoria un solo dato alla volta anziché tutto il dataset.
-       Svantaggio: La discesa è molto instabile e la curva del costo presenta moltissime variazioni a "zig-zag". Poiché i pesi si adattano a ogni singolo dato, c'è il forte rischio che l'algoritmo inizi a imparare anche il "rumore" o le anomalie dei singoli esempi. Inoltre, essendoci un aggiornamento per ogni dato, il numero totale di iterazioni è altissimo, facendo salire il tempo di calcolo complessivo rispetto alle altre varianti.

**Mini-Batch Gradient Descent**
Si tratta di una via di mezzo tra i due precedenti. Prende in input un batch (piccoli gruppi di dati), lo elabora, viene prodotta la funzione di costo, e si fa backpropagation per l’aggiornamento dei pesi.
**Vantaggi**: Prende il meglio degli altri due metodi.
1.     Rispetto al Batch: È più veloce nel fare i singoli calcoli perché non deve caricare l'intero dataset contemporaneamente in memoria.
2.     Rispetto all'SGD: Richiede meno iterazioni totali, abbassando notevolmente il tempo di calcolo complessivo. Inoltre, basandosi su un gruppo di dati anziché su uno solo, garantisce un aggiornamento della funzione di costo molto più fluido e stabile rispetto all'SGD. Per questi motivi è solitamente il metodo preferito nella pratica.
---
7. **Descrivere il Gradient Descent con Momentum, spiegando il ruolo del termine di velocità, il significato del parametro di momentum e in che modo questo metodo permette di ridurre le oscillazioni e accelerare la convergenza rispetto al Gradient Descent classico.**

**Il Gradient Descent** aggiorna i parametri seguendo la direzione opposta al gradiente (direzione dell’anti gradiente). Ma quando la funzione costo ha direzioni con curvature molto diverse il metodo può: 
- zone piatte: convergere lentamente, avanza di passi molto piccoli essendo il gradiente molto vicino a 0. 
- **Zone ripide (Canaloni):** La pendenza laterale è fortissima. L'algoritmo "rimbalza" da una parete all'altra (oscillazioni a zig-zag), perdendo tempo senza avanzare efficacemente verso il minimo. 
Per risolvere questi problemi si introduce il *Momentum (o velocità) v* (funziona come da memoria dei passi precedenti). Invece di basare il passo _solo_ sulla pendenza esatta in cui si trova in quel momento, la rete calcola una **velocità ($v$)** che simula l'inerzia fisica di una palla che rotola. In questo modo, l'algoritmo non è guidato solo dal gradiente istantaneo, ma da una combinazione tra la spinta del passato e la pendenza del presente.

Al passo k, la velocità combina due informazioni: 
- $v^{(k-1)}$: velocità del passo precedente (rappresenta l'inerzia del momento)
- $\nabla C(w^{(k)})$: gradiente corrente, che indica la direzione di discesa
La formula è: $$v^{(k)} = \beta v^{(k-1)} + \nabla C(w^{(k)})$$ 
L'aggiornamento dei pesi diventa: $$w^{(k+1)} = w^{(k)} - \eta v^{(k)}$$
$\beta$ è il coefficiente del momentum ed è compreso tra 0 e 1 (valore tipico tra $0.8$ e $0.9$) e controlla quanta memoria dei gradienti passati viene conservata.
### Analisi Comportamentale (I due scenari)
Studiando matematicamente la formula della velocità ($v^{(k)} = \beta v^{(k-1)} + \nabla C$), notiamo come l'algoritmo si adatti automaticamente al terreno:
- **Scenario A: Direzione Costante (Pianure)**
    - _Condizione:_ I gradienti hanno tutti lo stesso segno (es. sempre positivi).
    - _Effetto:_ La formula somma iterazione dopo iterazione valori concordi.
    - _Risultato pratico:_ Accumulo di **maggiore slancio**. L'algoritmo accelera, compiendo passi via via più lunghi e attraversando i plateau molto velocemente.
        
- **Scenario B: Rimbalzi laterali (Canaloni ripidi)**
    - _Condizione:_ I gradienti hanno segni alterni (es. un passo spinge a $+2$, quello dopo a $-2$).
    - _Effetto:_ La formula somma valori discordi, che si sottraggono e si annullano a vicenda matematicamente ($+2 - 2 = 0$).
    - _Risultato pratico:_ Le forze trasversali vengono **mitigate (smorzate)**. I rimbalzi a zig-zag si azzerano, permettendo alla rete di scendere dolcemente e dritta verso il minimo globale.

### L'Analisi della "Memoria a Breve Termine"
Per capire quanto il passato influenzi le decisioni presenti, possiamo "srotolare" iterativamente la formula della velocità, ottenendo la sua versione teorica:

$$v^{(k)} = \sum_{j=1}^{k} \beta^{k-j} \nabla C(w^{(j)})$$

Questa equazione dimostra che la velocità attuale è la somma di _tutti_ i gradienti passati, ma ciascun gradiente è moltiplicato per un peso: $\beta^{k-j}$.
- Essendo $\beta < 1$ (es. $0.9$), elevandolo a una potenza alta diventa un numero quasi nullo.
- L'esponente $(k - j)$ rappresenta "quanti passi fa" è stato calcolato quel gradiente.
    

**Conclusione:** I gradienti **più recenti** (esponente basso) vengono moltiplicati per un numero vicino a $1$, mantenendo quasi tutta la loro importanza.
I gradienti **più vecchi** (esponente alto) vengono moltiplicati per potenze altissime di $\beta$, svanendo gradualmente fino a zero.

Questo decadimento esponenziale permette all'algoritmo di avere l'inerzia necessaria per superare i minimi locali, ma anche l'agilità di "dimenticare" le curve fatte chilometri prima, adattandosi sempre all'ultimo tratto di strada percorso.

**Analisi del comportamento matematico di quella specifica formula**
### Caso 1: Direzione costante (Gradienti con lo stesso segno)
**Situazione:** La rete sta attraversando una "pianura" (plateau) o una discesa lunga e costante. Il gradiente punta sempre nella stessa direzione (ad esempio, è sempre un numero positivo).
- **Comportamento matematico:** Poiché i gradienti hanno tutti lo stesso segno, l'equazione $v^{(k)} = \beta v^{(k-1)} + \nabla C$ continua a sommare tra loro numeri positivi iterazione dopo iterazione.
- **Esempio:** Se il gradiente è sempre $+2$, la formula farà: $2$, poi $2+2=4$, poi $4+2=6$, ecc. La componente della velocità cresce continuamente.
- **Risultato pratico:** La rete accumula inerzia. Si genera un **maggiore slancio** verso quella direzione, compiendo passi via via più lunghi e decisi, permettendo di superare velocemente le zone piatte.

### Caso 2: Rimbalzi a zig-zag (Gradienti con segni alterni)
**Situazione:** La rete sta scendendo in un "canalone" stretto e ripido. Il gradiente normale la farebbe rimbalzare violentemente da una parete all'altra, cambiando continuamente direzione (es. un passo a destra col segno $+$, il passo dopo a sinistra col segno $-$).

- **Comportamento matematico:** Quando i gradienti hanno segni alterni, l'equazione somma un numero positivo con uno negativo. Di conseguenza, i valori **si sottraggono e si annullano a vicenda**.
    
- **Esempio:** Se il gradiente alterna $+2$ e $-2$, la formula sommerà il $+2$ attuale con il $-2$ che aveva in memoria dal passo precedente. Il risultato della velocità si avvicinerà a zero!
    
- **Risultato pratico:** La velocità in quella specifica direzione di "rimbalzo" viene **mitigata (smorzata)**. I passi laterali diventano piccolissimi, azzerando le oscillazioni inutili a zig-zag e costringendo la rete a scendere dritta verso il minimo.
    

### Conclusione: Il ruolo dell'Eta ($\eta$)
Nel Momentum, **il Learning Rate ($\eta$) è fisso**.
La lunghezza del passo di aggiornamento non cambia perché modifichiamo l'Eta, ma perché cambia la "velocità" $v^{(k)}$ calcolata dalla formula. È la componente del gradiente (e la sua memoria storica) a decidere se compiere passi grandi (slancio) o passi piccoli (smorzamento).

---
8. **Spiegare l’importanza del learning rate nei metodi di discesa, descrivendo cosa accade quando il learning rate è troppo alto o troppo basso.**
*La scelta del learnin rate ( quindi del passo da compiere) è fondamentale.
- **Valori di learning rate bassi:** possono far si che sia richiesto un numero elevato di passi prima che l’allenamento sia completato. Inoltre, aumenta il rischio che i pesi rimangano bloccati in un "minimo locale" sub-ottimale o in zone piatte (plateau), senza riuscire a raggiungere il minimo globale.
- **Valori di learning rate alti:** Permette di procedere più velocemente e superare i minimi locali. Tuttavia, i pesi possono finire per superare (overshoot) il minimo desiderato.
---
9. **Spiegare che cosa si intende per learning rate scheduling, perché è utile durante l’addestramento di una rete neurale e descrivere le principali strategie: step decay, decadimento esponenziale e decadimento dipendente dal tempo.**
È la pratica di ridurre gradualmente il learning rate durante l'allenamento in accordo a uno schema predefinito. È auspicabile avere un $\eta$ alto all'inizio (quando i pesi sono lontani dal minimo) e un $\eta$ basso nella fase finale per non "rimbalzare" intorno al minimo.
    
- **Step decay:** Il LR viene ridotto di un fattore $\delta$ ogni $s$ epoche predefinite. Il LR rimane costante e poi fa salti bruschi verso il basso. Formula: $\eta = \eta_0 \cdot \delta^{\lfloor n/s \rfloor}$.
    
- **Decadimento esponenziale:** Il LR diminuisce in modo continuo e non lineare (veloce all'inizio, poi rallenta man mano che l'addestramento procede). Formula: $\eta = \eta_0 \cdot e^{-\delta n}$.
    
- **Decadimento basato sul tempo (Time decay):** Modifica il LR iniziale in funzione del numero di iterazioni $n$ eseguite. è più rapido all'inizio quando n è piccolo, e rallenta man mano che n aumenta. Formula: $\eta = \frac{\eta_0}{1 + \delta \cdot n}$.
    
- _(Nota extra: Il Warm-up)_: Si inizia con un LR bassissimo che sale gradualmente verso $\eta_0$ nelle prime iterazioni, per poi iniziare il decadimento. Serve a evitare la divergenza causata dall'inizializzazione casuale dei pesi.

---
10. **Descrivere i principali metodi di learning rate adattivo, come Adagrad, RMSProp ed Adam, evidenziando l’idea alla base di ciascun metodo e la formula di aggiornamento dei pesi.**
Nel Gradient Descent classico e nel Momentum, l'iperparametro **$\eta$ (Learning Rate)** è **uniforme**: viene utilizzato lo stesso identico valore per aggiornare tutti i pesi della rete neurale contemporaneamente.

Questo approccio presenta due gravi problemi fondamentali:

##### 1. Il Problema Geometrico (Valli Asimmetriche)
La "montagna" della funzione di costo non ha quasi mai una pendenza uniforme in tutte le direzioni. Spesso assume la forma di un lungo "canalone" stretto, il che significa che pendenze diverse sono associate a pesi diversi:
- **Asse Piatto (Pianura):** Rispetto ad alcuni pesi, la pendenza è bassissima. Richiederebbero un Learning Rate **molto alto** per poter avanzare e non metterci un'eternità.
- **Asse Ripido (Burrone):** Rispetto ad altri pesi, la pendenza è fortissima. Richiederebbero un Learning Rate **molto basso** per evitare di fare balzi enormi e divergere (oscillando a zig-zag).
(Il trucco per capirlo è questo: la rete neurale si trova in **un unico punto** della montagna, ma la montagna curva in modo diverso a seconda della **direzione** verso cui guardi. Ogni "direzione" è un peso diverso.)

**Il limite:** Avendo a disposizione un solo LR per tutti i pesi, non esiste un valore di compromesso perfetto. Qualsiasi valore di $\eta$ si scelga, sarà troppo lento per i pesi nelle zone piatte o troppo instabile per i pesi nelle zone ripide.

##### Il Problema dei Dati (Frequenza delle Caratteristiche)
Nei dati reali (specialmente nel testo o in dati sparsi), alcune caratteristiche si presentano con frequenze estremamente diverse:
- **Caratteristiche (dati che la rete legge) Frequenti:** (Es. parole comuni come "il", "un"). La rete le vede continuamente. I pesi associati a queste dovrebbero ricevere aggiornamenti **piccoli** (LR basso), altrimenti la rete diventerebbe troppo instabile cambiando drasticamente idea ad ogni iterazione.
- **Caratteristiche Rare:** (Es. una parola chiave rarissima ma fondamentale per capire una frase). La rete le vede pochissimo. Quando capitano, i pesi associati dovrebbero ricevere aggiornamenti **grandi** (LR alto) per impararle il più in fretta possibile in quelle rare occasioni.
**Il problema del LR uniforme:** Se usi lo stesso Learning Rate per entrambe le parole, l'addestramento fallisce.
- Quando la rete incontra la rarissima parola "intossicazione" (che è fondamentale per capire che la recensione è super negativa!), se il LR è basso, il peso si modificherà solo di un millimetro. La rete non farà in tempo a "imparare" davvero quella parola prima che sparisca di nuovo nei meandri del dataset.
    
- Al contrario, se tieni il LR alto per imparare subito le parole rare, le parole frequenti come "il" faranno impazzire la rete, perché ad ogni iterazione subiranno balzi giganteschi.

**Il limite:** Un LR uniforme è costretto a trattare le caratteristiche rare e quelle frequenti nello stesso identico modo, rendendo l'apprendimento sbilanciato.

Questi metodi modificano dinamicamente e _separatamente_ il learning rate per ciascun peso durante l'allenamento, superando il limite del LR uniforme.

- **Adagrad:** Tiene traccia della _somma dei quadrati dei gradienti passati_ ($s_j^{(k)}$). I parametri aggiornati di frequente ricevono un LR più piccolo, quelli aggiornati di rado un LR più grande. Formula di aggiornamento: $w_j^{(k+1)} = w_j^{(k)} - \frac{\eta}{\sqrt{s_j^{(k)}} + \epsilon} \nabla C(w_j^{(k)})$. _Limite:_ la somma cresce continuamente, portando il LR a diventare infinitesimamente piccolo e bloccando l'apprendimento.
    
- **RMSProp:** Nasce per risolvere il limite di Adagrad. Invece di una somma cumulativa, calcola una _media mobile esponenziale_ dei quadrati dei gradienti. Formula: $s_j^{(k)} = \gamma s_j^{(k-1)} + (1-\gamma)(\nabla C(w_j^{(k)}))^2$. In questo modo dà più peso ai gradienti recenti, offrendo una maggiore stabilità ed evitando un decadimento troppo aggressivo del LR.
    
- **ADAM (Adaptive Moment Estimation):** È il metodo più robusto perché combina i vantaggi di RMSprop e del Momentum. Utilizza una *media pesata esponenziale dei gradienti passati* (per stimare il "momento", $v_j^{(k)}$) e la media *pesata esponenziale dei gradienti al quadrato* ($s_j^{(k)}$). Dopo aver normalizzato questi valori (correzione dello sbilanciamento iniziale), la formula di aggiornamento diventa: $w_j^{(k+1)} = w_j^{(k)} - \frac{\eta}{\sqrt{\hat{s}_j^{(k)}} + \epsilon} \hat{v}_j^{(k)}$. Consente una convergenza veloce e robusta. (prende la direzione intelligente stabilita dal momentum tramite la velocità che è la somma pesata dei vari gradienti e poi prende la lunghezza del passo intelligente stabilita dal RMS tramite la media pesata del quadrato dei gradienti)
- convergenza veloce e robusta
#### Differenza tra le varie funzioni. 
**1. Funzione di Attivazione (L'interruttore interno)**
- **Dove si trova:** All'interno di _ogni singolo neurone_ della rete (nei layer nascosti e in quello di output).
- **Cosa fa:** È come una "porta" o un "interruttore". Dopo che il neurone ha sommato gli input moltiplicati per i pesi, la funzione di attivazione prende questo numero e decide se e quanto "far passare" il segnale al livello successivo.
- **A cosa serve:** Serve a introdurre la **non-linearità**, permettendo alla rete di imparare cose complesse (invece di tracciare solo linee dritte).
- **Esempi:** ReLU, Sigmoide, Softmax.

**2. Loss Function / Funzione di Perdita ($L$) (L'errore sul singolo pezzo)**
- **Dove si trova:** Alla fine di tutta la rete, dopo che l'output è uscito.
- **Cosa fa:** Misura l'errore commesso dalla rete su un **singolo esempio** (es. una singola foto). Valuta la distanza tra l'output previsto per quella foto e l'etichetta vera (il target).
- **Esempio pratico:** "Sulla foto numero 5, la rete ha detto Gatto, ma era un Cane. La Loss (il danno) per questa specifica foto è 2.5."
- **Esempi:** Categorical Cross-Entropy, Binary Cross-Entropy.

**3. Funzione di Costo / Cost Function ($C$) (L'errore globale della fabbrica)**
- **Dove si trova:** Sempre alla fine, ma guarda l'intero quadro.
- **Cosa fa:** È letteralmente la **media (o la somma) di tutte le singole Loss** calcolate su tutto l'insieme dei dati di addestramento (o su un batch).
- **A cosa serve:** È il "voto finale" della rete alla fine di un'epoca. L'obiettivo dell'addestramento (la discesa del gradiente) è proprio trovare i pesi che minimizzano questa funzione globale.
- **Esempio pratico:** "Ho testato 1000 foto. Ho sommato tutte le 1000 Loss singole e fatto la media. Il Costo totale di questa fabbrica oggi è 1.8. Cerchiamo di abbassarlo."

**⚠️** **Il Trucco per gli Esami:**
Mentre la Funzione di Attivazione è una cosa fisicamente e matematicamente diversissima, **Loss Function** e **Funzione di Costo** sono molto simili.
Rigorosamente parlando: la _Loss_ è l'errore su **1** esempio, il _Costo_ è l'errore totale su **tutti** gli esempi.
Tuttavia, molto spesso i professori e le domande dei test usano "Loss" e "Costo" come sinonimi interscambiabili per indicare semplicemente "l'errore da minimizzare".