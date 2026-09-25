# AI nonnina — versione Gemini

> **Cos'è.** Le stesse dieci domande aperte di [[IA nonnina]], risposte da Gemini a partire dai PDF della prof. Tienile come **seconda formulazione**: rileggere lo stesso contenuto detto in parole diverse è uno dei modi più efficaci per consolidare, e dove le due versioni divergono vale la pena capire perché.
>
> **Numerazione**: quella del foglio della prof (voci **13-22**), la stessa di `IA nonnina`.

---

## 13. Non convessità della funzione costo e difficoltà nell'ottimizzazione

L'introduzione della non linearità nella rete, tramite l'aggiunta di strati nascosti, rende la funzione costo **non convessa**. Le conseguenze sul processo di ottimizzazione sono quattro:

- **Minimi locali.** I pesi possono rimanere bloccati in un minimo locale sub-ottimale, impedendo il raggiungimento del minimo globale.
- **Plateau (vanishing gradient).** La funzione costo può presentare regioni estremamente piatte, dove il gradiente si annulla e il processo si ferma senza aver raggiunto il minimo.
- **Punti sella.** Nelle superfici multidimensionali compaiono punti in cui il gradiente è zero ma che non sono né minimi né massimi.
- **Valli ripide e zone piatte.** Le forti non linearità generano una superficie d'errore molto irregolare, che rende la minimizzazione un difficile problema non lineare.

---

## 14. Gli iperparametri di una rete neurale

Gli **iperparametri** sono parametri **esterni** al modello, che devono essere definiti **prima** dell'avvio dell'addestramento. A differenza dei **parametri** del modello — pesi e bias — che vengono *appresi*, gli iperparametri influenzano il comportamento del processo di training e la configurazione strutturale della rete.

| Categoria | Esempi |
|---|---|
| **Ottimizzazione** | learning rate, numero di epoche, dimensione del mini-batch |
| **Architettura** | numero di strati, numero di unità per strato |
| **Regolarizzazione** | peso della penalità L1 o L2 |
| **Inizializzazione** | tecnica di inizializzazione dei pesi |
| **Attivazione** | scelta della funzione di attivazione |
| **Parametri dell'ottimizzatore** | momentum, tasso di decadimento per lo scheduling, coefficienti $\beta_1$ e $\beta_2$ di Adam |

---

## 15. Il processo di training: forward, errore, backward

Il processo di training è **iterativo** e il suo scopo è determinare i pesi della rete in modo da minimizzare la funzione di perdita. Si articola in tre fasi.

**1. Forward propagation.** I dati di addestramento partono dal layer di input, vengono elaborati attraversando gli hidden layer fino al layer di output. Il segnale viene propagato in avanti producendo una **predizione**.

**2. Calcolo dell'errore.** La predizione ottenuta dalla rete viene confrontata con il **target** desiderato. Il divario è quantificato tramite una **funzione di perdita** (loss function).

**3. Backward propagation.** L'errore viene propagato **all'indietro** nella rete. I parametri vengono aggiornati iterativamente in modo da ridurre progressivamente l'errore e produrre previsioni più accurate.

---

## 16. L'algoritmo di backpropagation

La backpropagation sfrutta la **regola di derivazione delle funzioni composte** (chain rule) per calcolare le derivate parziali della loss function rispetto ai pesi.

**La forma della derivata.** La derivata rispetto a uno specifico peso $w_{ji}^{(l)}$ si fattorizza nel prodotto fra l'errore locale del neurone di arrivo e l'uscita del neurone di partenza:

$$\frac{\partial L}{\partial w_{ji}^{(l)}} = \delta_i^{(l)}\,z_j^{(l-1)}$$

**Errore locale nel layer di uscita.** Se il neurone $i$ appartiene al layer finale $L$, il termine $\delta_i^{(L)}$ si ricava moltiplicando la derivata della loss rispetto all'output per la derivata della funzione di attivazione:

$$\delta_i^{(L)} = f'\big(a_i^{(L)}\big)\,\frac{\partial L}{\partial \hat y_i}$$

**Errore locale nei layer nascosti.** Se il neurone $i$ appartiene a un layer nascosto $l$, il termine $\delta_i^{(l)}$ dipende dai $\delta$ del layer successivo e dai pesi che li collegano:

$$\delta_i^{(l)} = f'\big(a_i^{(l)}\big)\sum_{k=1}^{N^{(l+1)}} \delta_k^{(l+1)}\,w_{ik}^{(l+1)}$$

---

## 17. ⭐ Aggiornamento dei pesi in una MLP 1 → 1 → 1 → 1

> Vale **3 punti**, il doppio delle altre: è l'unica domanda che si **ricava** invece di ripetersi.

Sia $x_1$ l'input e sia $L(\hat y_1)$ la loss function, dove $\hat y_1 = z_1^{(3)}$ è l'output finale.

### Layer di output ($l=3$)

$$\frac{\partial L}{\partial w_{11}^{(3)}} = \frac{\partial L}{\partial \hat y_1}\,f'\big(a_1^{(3)}\big)\,z_1^{(2)}$$

Ponendo $\;\delta_1^{(3)} = \dfrac{\partial L}{\partial \hat y_1}f'\big(a_1^{(3)}\big)\;$ si ottiene

$$\frac{\partial L}{\partial w_{11}^{(3)}} = \delta_1^{(3)} z_1^{(2)}$$

### Secondo hidden layer ($l=2$)

$$\frac{\partial L}{\partial w_{11}^{(2)}} = \delta_1^{(3)}\,w_{11}^{(3)}\,f'\big(a_1^{(2)}\big)\,z_1^{(1)}$$

Ponendo $\;\delta_1^{(2)} = \delta_1^{(3)}w_{11}^{(3)}f'\big(a_1^{(2)}\big)\;$ si ottiene

$$\frac{\partial L}{\partial w_{11}^{(2)}} = \delta_1^{(2)} z_1^{(1)}$$

### Primo hidden layer ($l=1$)

$$\frac{\partial L}{\partial w_{11}^{(1)}} = \delta_1^{(2)}\,w_{11}^{(2)}\,f'\big(a_1^{(1)}\big)\,x_1$$

Ponendo $\;\delta_1^{(1)} = \delta_1^{(2)}w_{11}^{(2)}f'\big(a_1^{(1)}\big)\;$ si ottiene

$$\frac{\partial L}{\partial w_{11}^{(1)}} = \delta_1^{(1)} x_1$$

### Le formule di aggiornamento

Con learning rate $\eta$:

$$w_{11}^{(3)} \leftarrow w_{11}^{(3)} - \eta\,\delta_1^{(3)} z_1^{(2)}$$
$$w_{11}^{(2)} \leftarrow w_{11}^{(2)} - \eta\,\delta_1^{(2)} z_1^{(1)}$$
$$w_{11}^{(1)} \leftarrow w_{11}^{(1)} - \eta\,\delta_1^{(1)} x_1$$

---

## 18. Discesa del gradiente: Batch, SGD e Mini-Batch

Il metodo del gradiente aggiorna i parametri seguendo la direzione **opposta** al gradiente, per minimizzare la funzione costo:

$$w^{(k)} = w^{(k-1)} - \eta\,\nabla C\big(w^{(k-1)}\big)$$

| Variante | Dati usati per un aggiornamento | Vantaggi | Svantaggi |
|---|---|---|---|
| **Batch GD** | **tutti** i campioni; un aggiornamento per epoca | riduzione della loss fluida e stabile | computazionalmente molto costoso sui grandi dataset |
| **SGD** | **un solo** campione; $n_T$ iterazioni per epoca | elaborazione rapida | loss molto rumorosa, rischio di apprendere anche il rumore |
| **Mini-Batch** | un sottoinsieme fra $1$ e $n_T$ | compromesso: meno tempo del Batch, più stabile di SGD | richiede di tarare la dimensione del batch |

---

## 19. Gradient Descent con Momentum

Il gradient descent standard può **oscillare** nelle direzioni molto ripide e **rallentare** in quelle piatte. Il momentum si introduce per smorzare le oscillazioni e accelerare la convergenza.

**La velocità** $v^{(k)}$ si comporta analogamente a una palla che rotola: è una **somma pesata di tutti i gradienti passati**, con peso maggiore ai più recenti.

$$v^{(k)} = \beta\,v^{(k-1)} + \nabla C\big(w^{(k)}\big)$$

**Il parametro di momentum** $\beta$ (di solito fra $0.8$ e $0.9$) regola quanta **inerzia** — cioè memoria dei gradienti — viene conservata dai passi precedenti.

**Il comportamento nei due casi:**

| Situazione | Effetto |
|---|---|
| il gradiente mantiene lo **stesso segno** per più iterazioni | la velocità si **accumula** e il passo di avanzamento aumenta |
| il gradiente **cambia segno** di frequente | i contributi si **compensano** e l'effetto zigzag si riduce |

---

## 20. Il ruolo del learning rate $\eta$

Il learning rate definisce lo **step-size**, cioè la lunghezza del passo impiegato nella modifica dei pesi. Determinarne il valore ottimale può richiedere molta sperimentazione.

| Learning rate | Conseguenze |
|---|---|
| **troppo basso** | servono molti passi per completare l'ottimizzazione; il tempo di calcolo si allunga eccessivamente e aumenta la probabilità che i pesi restino intrappolati in un minimo locale |
| **troppo alto** | i passi sono troppo lunghi: questo permette di fuggire dai minimi locali, ma i parametri possono superare il minimo target, innescando movimenti instabili fino alla **divergenza** (aumento del valore della loss) |

---

## 21. Learning rate scheduling

Consiste nel **ridurre gradualmente** il valore di $\eta$ durante l'addestramento, secondo uno schema predefinito.

**Perché serve.** È essenziale un learning rate iniziale **elevato**, per allontanarsi da parametri iniziali non ottimali e sfuggire ai minimi locali; ed è necessario un valore **basso** negli stadi finali, per assestarsi stabilmente ed evitare di rimbalzare fuori dal minimo senza raggiungerlo.

| Strategia | Formula | Comportamento |
|---|---|---|
| **Step decay** | $\eta = \eta_0\cdot\delta^{\lfloor n/s\rfloor}$ | resta stabile per $s$ epoche, poi cala **bruscamente** di un fattore $\delta$ (divisione intera) |
| **Decadimento esponenziale** | $\eta = \eta_0\cdot e^{-\delta n}$ | riduzione costante ma **non lineare**: caduta ripida all'inizio, poi sempre più lenta |
| **Decadimento dipendente dal tempo** | $\eta = \dfrac{\eta_0}{1+\delta n}$ | decresce più repentinamente all'inizio e con minore rapidità man mano che l'addestramento matura |

---

## 22. Learning rate adattivo: Adagrad, RMSProp, Adam

I metodi adattivi superano il limite dello scheduling uniforme: regolano il learning rate **automaticamente e individualmente per ciascun parametro**, in base allo storico dei suoi gradienti.

### Adagrad

**L'idea**: abbassare il learning rate sui parametri aggiornati **più spesso**, aumentarlo su quelli processati **più di rado**. L'algoritmo accumula la somma dei gradienti passati al quadrato per ciascun peso, $s_j^{(k)}$:

$$w_j^{(k+1)} = w_j^{(k)} - \frac{\eta}{\sqrt{s_j^{(k)}}+\epsilon}\,\nabla C\big(w_j^{(k)}\big)$$

**Il difetto**: il denominatore cresce senza limite, quindi il learning rate effettivo può crollare a zero prima che l'addestramento sia concluso.

### RMSProp

Per ovviare al decadimento estremo di Adagrad, sostituisce l'accumulatore con una **media mobile esponenziale**, che scarta progressivamente l'effetto dei gradienti più vecchi:

$$s_j^{(k)} = \gamma\,s_j^{(k-1)} + (1-\gamma)\big(\nabla C(w_j^{(k)})\big)^2$$

L'aggiornamento usa poi la stessa frazione di Adagrad.

### Adam (Adaptive Moment Estimation)

**Combina Momentum e RMSProp.** Impiega la stima pesata esponenziale per ricavare:

- il **momento del primo ordine** $v_j^{(k)}$ — da Momentum
- il **momento del secondo ordine** $s_j^{(k)}$ — da RMSProp

Applicate le correzioni di bias iniziali $\hat v_j^{(k)}$ e $\hat s_j^{(k)}$, aggiorna i pesi con

$$w_j^{(k+1)} = w_j^{(k)} - \frac{\eta}{\sqrt{\hat s_j^{(k)}}+\epsilon}\,\hat v_j^{(k)}$$

---

## Note di raccordo con `IA nonnina`

> [!warning] Tre cose da tenere a mente confrontando le due versioni
>
> **1. La lettera $L$ è usata per due cose.** Nelle voci 16 e 17 qui sopra, $L$ indica sia la **loss function** sia l'**indice del layer di output**. In `IA nonnina` la loss è chiamata $C$ proprio per evitare la collisione. All'esame scegline una e sii coerente: sotto pressione, due significati per lo stesso simbolo è il modo più rapido per perdere il filo mentre scrivi.
>
> **2. Alla voce 19 manca il passo di aggiornamento.** È data la formula della velocità $v^{(k)}$, ma non quella che la usa: $w^{(k+1)} = w^{(k)} - \eta\,v^{(k)}$. Senza quella riga la risposta è incompleta.
>
> **3. La voce 17 va *ricavata*, non ricopiata.** È l'unica delle dieci in cui i punti stanno nei passaggi. Le tre catene qui sopra sono corrette: riscrivile su foglio bianco finché escono senza guardare.

→ versione principale: [[IA nonnina]] · elenco e regimi: [[23 Blocco IA - le 22 domande, due regimi|nota 23]]
