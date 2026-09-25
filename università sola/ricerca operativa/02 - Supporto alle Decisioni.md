[2 - Supporto alle Decisioni - Ver.2.2](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/ricerca operativa/slide/2 - Supporto alle Decisioni - Ver.2.2.pdf>)

# Ricerca Operativa – Supporto alle Decisioni: Introduzione all'Ottimizzazione

## Indice

1. **Introduzione al supporto alle decisioni** (slide 1–7)
	- [[#Slide 1 – Ricerca Operativa – Supporto alle Decisioni: Introduzione all'Ottimizzazione|Titolo e inquadramento del corso]]
	- [[#Slide 2 – Introduzione|Metodi di ottimizzazione e supporto alle decisioni]]
	- [[#Slide 4 – Introduzione|Quanta matematica c'è dietro l'Intelligenza Artificiale]]
	- [[#Slide 6 – Introduzione|I livelli degli analytics: da descriptive a prescriptive (Gartner)]]
	- [[#Slide 7 – Introduzione|I tre passi: modellare, valutare la complessità, scegliere l'algoritmo]]
2. **Problemi, modelli e algoritmi** (slide 8–11)
	- [[#Slide 8 – Problema, Istanza, Modello e Algoritmo|Definizioni di problema, istanza, modello e algoritmo]]
	- [[#Slide 9 – Modelli|Cosa sono i modelli e a cosa servono]]
	- [[#Slide 10 – Modello Matematico|Modello matematico: semplificazioni, parametri e variabili]]
	- [[#Slide 11 – Modello Matematico|Modelli deterministici e stocastici, scenari, analisi numerica]]
3. **Approssimazione ed errori di calcolo** (slide 12–22)
	- [[#Slide 12 – Approssimazione di un Modello|Approssimazioni prima e durante il calcolo]]
	- [[#Slide 13 – Errori di Troncamento e Arrotondamento|Errore di troncamento ed errore di arrotondamento]]
	- [[#Slide 15 – Approssimazione di un Modello|Esempio: superficie della Terra e stima del raggio (Eratostene)]]
	- [[#Slide 17 – Errori di Calcolo: un Esempio|Esempio: la formula ricorsiva x(i+1) = 11x(i) - 10x(0) in Excel]]
	- [[#Slide 20 – Errori: un esempio|Perché non è un bug: 0,2 in binario e il formato IEEE 754]]
	- [[#Slide 21 – Malcondizionamento di un'Istanza|Malcondizionamento di un'istanza: sistemi lineari e rette quasi parallele]]
4. **Tipologie di problemi e complessità computazionale** (slide 23–34)
	- [[#Slide 23 – Tipologie di Problemi|Problemi di decisione, ricerca, enumerazione e ottimizzazione]]
	- [[#Slide 24 – Tipologie di Problemi|Le quattro tipologie sull'esempio del TSP]]
	- [[#Slide 26 – Tipologie di Problemi|Esplosione combinatoria: n! soluzioni alternative]]
	- [[#Slide 27 – Tipologie di Problemi|Problemi non decidibili e paradosso del mentitore]]
	- [[#Slide 28 – Complessità Computazionale|Teoria della complessità: problemi facili e difficili]]
	- [[#Slide 30 – Complessità Computazionale|Le classi P e NP]]
	- [[#Slide 31 – Complessità Computazionale|Riduzione polinomiale, problemi NP-Completi e NP-Hard]]
	- [[#Slide 32 – Complessità Computazionale|P vs NP tra i problemi del millennio]]
	- [[#Slide 33 – Problemi vs Algoritmi|Prestazioni degli algoritmi: esatti ed euristici]]
	- [[#Slide 34 – Modelli vs Algoritmi|Come la scelta del modello condiziona l'algoritmo]]
5. **Dall'ottimizzazione non vincolata alla programmazione lineare** (slide 35–64)
	- [[#Slide 35 – Ricerca Operativa|La ricerca operativa e i suoi ambiti di applicazione]]
	- [[#Slide 36 – Ottimizzazione Non-Vincolata|Esempio non vincolato: domanda, prezzo e massimo ricavo]]
	- [[#Slide 38 – Ottimizzazione Non-Vincolata|Vertice della parabola e soluzione ottima]]
	- [[#Slide 39 – Ottimizzazione Non-Vincolata|Minimi e massimi relativi e assoluti, algoritmi per il caso non vincolato]]
	- [[#Slide 40 – Ottimizzazione Vincolata|Esempio vincolato: miscelazione di succhi (sistema lineare)]]
	- [[#Slide 43 – Ottimizzazione Vincolata|Esempio: flussi di traffico e conservazione del flusso]]
	- [[#Slide 46 – Ottimizzazione Vincolata|Equazioni ridondanti e soluzioni infinite]]
	- [[#Slide 47 – Ottimizzazione Vincolata|Esempio: trasporto di auto tra sedi con vincolo di budget]]
	- [[#Slide 53 – Ottimizzazione Vincolata|Sostituzione nella funzione di costo e soluzione ottima]]
	- [[#Slide 54 – Ottimizzazione Vincolata|Esempio Acme: dalle equazioni alla regione ammissibile]]
	- [[#Slide 57 – Ottimizzazione Vincolata|Da equazioni a disequazioni e vincoli di non negatività]]
	- [[#Slide 58 – Ottimizzazione Vincolata|Variabili di scarto]]
	- [[#Slide 60 – Ottimizzazione Vincolata|Regione ammissibile e programmazione matematica]]
	- [[#Slide 61 – Ottimizzazione Vincolata|Funzione obiettivo, vincoli e metodo del simplesso]]
	- [[#Slide 62 – Ottimizzazione Vincolata|L'ottimo si trova in un vertice della regione ammissibile]]
	- [[#Slide 63 – Ottimizzazione Vincolata|Generalizzazione: il problema di produzione con n prodotti e m materie prime]]
6. **Modelli matematici per l'ottimizzazione: bound e algoritmi esatti** (slide 65–69)
	- [[#Slide 65 – Modelli Matematici per l'Ottimizzazione|Forma generale di un modello: obiettivo, vincoli, variabili]]
	- [[#Slide 66 – Modelli Matematici per l'Ottimizzazione|PL intera e mista intera; lower bound, upper bound ed euristici]]
	- [[#Slide 67 – Modelli Matematici per l'Ottimizzazione|Problema di minimo: LB da bounding, UB da soluzione ammissibile]]
	- [[#Slide 68 – Modelli Matematici per l'Ottimizzazione|Problema di massimo: i ruoli di LB e UB si invertono]]
	- [[#Slide 69 – Modelli Matematici per l'Ottimizzazione|Algoritmi esatti e introduzione al problema dello zaino]]
7. **Knapsack Problem (problema dello zaino)** (slide 70–80)
	- [[#Slide 70 – Knapsack Problem|Definizione del knapsack 0-1 e istanza di esempio]]
	- [[#Slide 71 – Knapsack Problem|Rappresentazione a segmenti e soluzione ottima]]
	- [[#Slide 73 – Knapsack Problem|Formulazione matematica con variabili binarie]]
	- [[#Slide 74 – Knapsack Problem|Euristica greedy sul rapporto profitto/peso]]
	- [[#Slide 75 – Knapsack Problem|Rilassamento frazionario: upper bound e lower bound]]
	- [[#Slide 76 – Knapsack Problem|Rilassamento lineare e splitting item]]
	- [[#Slide 77 – Knapsack Problem|Branch and bound e albero di ricerca]]
	- [[#Slide 78 – Knapsack Problem|Potatura dei nodi e scelta del nodo da espandere]]
	- [[#Slide 79 – Knapsack Problem|Programmazione dinamica: stadi e stati]]
	- [[#Slide 80 – Knapsack Problem|Ricorsione e complessità pseudopolinomiale O(nW)]]
8. **Travelling Salesman Problem** (slide 81–89)
	- [[#Slide 81 – Travelling Salesman Problem|Modellazione su grafo orientato e TSP asimmetrico]]
	- [[#Slide 83 – Travelling Salesman Problem|Formulazione del TSP e problema dell'assegnamento]]
	- [[#Slide 84 – Travelling Salesman Problem|Soluzioni con subtour]]
	- [[#Slide 85 – Travelling Salesman Problem|Vincoli di subtour elimination e tagli]]
	- [[#Slide 86 – Travelling Salesman Problem|Disuguaglianze valide e branch and cut]]
	- [[#Slide 87 – Travelling Salesman Problem|Istanze record risolte all'ottimo]]
	- [[#Slide 89 – Travelling Salesman Problem|Confronto con i metodi dell'intelligenza artificiale (SOM)]]
9. **Metodi di soluzione, risolutori e linguaggi di modellazione (AMPL)** (slide 90–118)
	- [[#Slide 90 – Metodi di soluzione|Algoritmi per la PL continua e per la PL intera]]
	- [[#Slide 91 – Metodi di soluzione|Programmazione non lineare e risolutori commerciali e open source]]
	- [[#Slide 92 – Linguaggi di Modellazione|A cosa servono i linguaggi di modellazione]]
	- [[#Slide 93 – Linguaggi di Modellazione|AMPL e le alternative disponibili]]
	- [[#Slide 94 – Linguaggi di Modellazione|Primo esempio: portafoglio di prodotti finanziari]]
	- [[#Slide 97 – Linguaggi di Modellazione|Separazione tra dati e modello: insiemi, parametri, variabili, vincoli]]
	- [[#Slide 98 – Linguaggi di Modellazione|Il file del modello bonds.mod]]
	- [[#Slide 99 – Linguaggi di Modellazione|Il file dei dati bonds.dat]]
	- [[#Slide 104 – Linguaggi di Modellazione|Variabili duali e prezzi ombra (shadow prices)]]
	- [[#Slide 106 – Linguaggi di Modellazione|Esercizio 1: problema di produzione in AMPL]]
	- [[#Slide 110 – Linguaggi di Modellazione|Esercizi 2 e 3: trasporti, con e senza costi fissi]]
	- [[#Slide 112 – Linguaggi di Modellazione|Modello del problema dei trasporti e condizione di bilanciamento]]
	- [[#Slide 116 – Linguaggi di Modellazione|Costi fissi, capacità dei mezzi e modello misto intero]]
10. **Algoritmi euristici, ricerca locale e metaeuristiche** (slide 119–138)
	- [[#Slide 119 – Algoritmi euristici e metaeuristici|Problema di ottimizzazione generale, soluzioni ammissibili e minimo globale]]
	- [[#Slide 120 – Algoritmi euristici e metaeuristici|Perché servono le euristiche e quali garanzie non danno]]
	- [[#Slide 121 – Algoritmi euristici e metaeuristici|Classificazione: costruttivi, metaeuristiche, matheuristics]]
	- [[#Slide 122 – Metaeuristiche|Tipologie di metaeuristiche: single solution, population based, matheuristics]]
	- [[#Slide 123 – Ricerca Locale|Ricerca locale: neighborhood, mosse e algoritmo]]
	- [[#Slide 124 – Ricerca Locale|Minimi locali e strategia multi-start]]
	- [[#Slide 125 – Ricerca Locale|Ricerca locale per il TSP: nearest neighbor e scambi]]
	- [[#Slide 126 – Ricerca Locale|Intorni per il TSP: 3-opt]]
	- [[#Slide 127 – Ricerca Locale|Intorni per il TSP: Or-opt]]
	- [[#Slide 128 – Tabu Search|Tabu Search: uscire dai minimi locali con la tabu list]]
	- [[#Slide 129 – Tabu Search|Schema dell'algoritmo Tabu Search]]
	- [[#Slide 131 – Simulated Annealing|Simulated Annealing: analogia termodinamica e temperatura]]
	- [[#Slide 132 – Simulated Annealing|Pseudocodice e probabilità di accettare un peggioramento]]
	- [[#Slide 134 – Quantum Computing|Quantum Computing e Quantum Annealing]]
	- [[#Slide 135 – Algoritmi Genetici|Algoritmi genetici: popolazione, crossover e mutazione]]
	- [[#Slide 136 – Algoritmi Genetici|Schema dell'algoritmo genetico e funzione di fitness]]
	- [[#Slide 137 – Algoritmi Genetici|Single crossover e double crossover]]
	- [[#Slide 138 – Algoritmi Genetici|Operatore di mutazione e selezione della popolazione]]
11. **Set Covering Problem** (slide 139–148)
	- [[#Slide 139 – Set Covering Problem|Definizione e formulazione del SCP]]
	- [[#Slide 140 – Set Covering Problem|Esempio numerico con soluzione ottima]]
	- [[#Slide 141 – Set Covering Problem|Algoritmo genetico di Beasley e Chu]]
	- [[#Slide 142 – Set Covering Problem|Rappresentazione binaria della soluzione e funzione di fitness]]
	- [[#Slide 143 – Set Covering Problem|Selezione dei genitori: binary tournament selection]]
	- [[#Slide 144 – Set Covering Problem|Fusion crossover]]
	- [[#Slide 146 – Set Covering Problem|Operatore di ammissibilità (repair): insiemi e parametri]]
	- [[#Slide 147 – Set Covering Problem|Algoritmo dell'operatore di ammissibilità]]
	- [[#Slide 148 – Set Covering Problem|Aggiornamento della popolazione]]
12. **Vehicle Routing Problem** (slide 149–161)
	- [[#Slide 149 – Vehicle Routing Problem|Definizione del VRP: deposito, clienti, domande, capacità]]
	- [[#Slide 150 – Vehicle Routing Problem|Obiettivo e costo delle route]]
	- [[#Slide 153 – Vehicle Routing Problem|Tabu Search per il VRP: funzioni obiettivo F1 e F2 con penalità]]
	- [[#Slide 154 – Vehicle Routing Problem|Costruzione della soluzione iniziale]]
	- [[#Slide 155 – Vehicle Routing Problem|Inserimento di un cliente e extra-mileage]]
	- [[#Slide 156 – Vehicle Routing Problem|Mosse del Tabu Search e aggiornamento adattivo di alpha]]
	- [[#Slide 158 – Vehicle Routing Problem|Schema generale: inizializzazione, miglioramento, intensificazione]]
	- [[#Slide 159 – Vehicle Routing Problem|Post-ottimizzazione: scambi (1-0) e (1-1) fra route]]
	- [[#Slide 160 – Vehicle Routing Problem|Scambi (2-0) e (2-1) fra route]]
13. **Intelligenza artificiale e machine learning** (slide 162–169)
	- [[#Slide 162 – Intelligenza Artificiale|Relazione tra ottimizzazione e intelligenza artificiale]]
	- [[#Slide 163 – Intelligenza Artificiale|Esempi di applicazioni dell'AI]]
	- [[#Slide 164 – Intelligenza Artificiale|Apprendimento supervisionato e non supervisionato]]
	- [[#Slide 165 – Intelligenza Artificiale|Il processo di apprendimento: regressione e classificazione]]
	- [[#Slide 166 – Intelligenza Artificiale|Regressione e rischio di overfitting]]
	- [[#Slide 168 – Intelligenza Artificiale|Classificazione con Support Vector Machine]]
	- [[#Slide 169 – Intelligenza Artificiale|Clustering non supervisionato: k-Means]]
14. **Regressione lineare, minimi quadrati e conclusioni** (slide 170–181)
	- [[#Slide 170 – Regressione Lineare|Costruire un modello lineare a partire dai dati osservati]]
	- [[#Slide 171 – Regressione Lineare|Esempio: vendite di case e prezzi espressi in intervalli]]
	- [[#Slide 173 – Regressione Lineare|Valore osservato, valore previsto ed errore]]
	- [[#Slide 174 – Regressione Lineare|Le formule della retta dei minimi quadrati]]
	- [[#Slide 175 – Regressione Lineare|Definizione dell'errore per ciascun punto]]
	- [[#Slide 176 – Regressione Lineare|Perché si usa il quadrato al posto del valore assoluto]]
	- [[#Slide 177 – Regressione Lineare|Condizioni del primo ordine: gradiente della funzione errore]]
	- [[#Slide 179 – Regressione Lineare|Risoluzione del sistema lineare in m e b]]
	- [[#Slide 180 – Regressione Lineare|Espressioni finali del coefficiente angolare e dell'intercetta]]
	- [[#Slide 181 – Conclusioni|Conclusioni: modello, algoritmo, complessità e ricerca operativa]]


## Slide 1 – Ricerca Operativa – Supporto alle Decisioni: Introduzione all'Ottimizzazione

---
## Slide 2 – Introduzione

- I **metodi di ottimizzazione** hanno un'ampia gamma di applicazioni e tra i diversi ambiti abbiamo il **Supporto alle Decisioni**.
- In questa introduzione forniremo il contesto generale e degli esempi di **applicazioni**. Lo scopo è quello di motivare quanto vedremo nelle lezioni successive, che saranno necessariamente più impegnative.
- Il corso si concentrerà sui metodi dell'ottimizzazione, ma in questa introduzione proveremo a definire le possibili interrelazioni con altri ambiti.
- Dobbiamo ricordate che la matematica non è una punizione per chi si è iscritto a un scorso di laurea scientifico, ma uno **strumento di lavoro** molto prezioso. La ricerca operativa non fa eccezione.

---
## Slide 3 – Introduzione

- Il supporto alle decisioni è un ambito aziendale strategico.

![[RO02-s003-1.png|500]]

---
## Slide 4 – Introduzione

- Dietro all'Intelligenza Artificiale c'è tanta matematica… e molta ottimizzazione.

![[RO02-s004-1.png|500]]

>> Nella figura: neurone reale e neurone artificiale ($y = f\left(\sum_i w_i x_i + b\right)$), clustering, PCA, regressione e varie metriche (MAE, MSE, $R^2$, sensitivity, F1, teorema di Bayes). L'addestramento di un modello di machine learning è esso stesso un problema di ottimizzazione: si cercano i parametri (es. i pesi $w$) che minimizzano una funzione di perdita, ad esempio $\min_w \frac{1}{N}\sum_{i=1}^N (y_i - \hat y_i(w))^2$.

---
## Slide 5 – Introduzione

- Il processo di **Trasformazione Digitale** ha pervaso l'intera società e le aziende, per cui il ruolo dell'ICT è diventato centrale.
- Chi progetta e sviluppa soluzioni ICT è prima di tutto un consulente che deve saper **risolvere problemi**.
- Uno degli ambiti di applicazione dell'ICT è il **supporto alle decisioni**, che consiste nel realizzare soluzioni software che aiutano manager, operatori finanziari, medici, etc., a individuare la "miglior" decisione in ambito aziendale, finanziario, medico, etc.
- I metodi utilizzati per sviluppare soluzioni software per il supporto alle decisioni spaziano dall'**ottimizzazione** all'**intelligenza artificiale** e richiedono una conoscenza approfondita della matematica.
- L'ottimizzazione e l'intelligenza artificiale sono settori strettamente legati e spesso sovrapponibili, ma non coincidono.

---
## Slide 6 – Introduzione

- Fondamentale per il supporto alle decisioni è la relazione tra dati e ottimizzazione.

![[RO02-s006-1.png|500]]

Source: Gartner (March 2012)

>> Il diagramma (Gartner) ordina i livelli di analytics per valore e difficoltà crescenti:
>> - **Descriptive Analytics** – *What happened?* (Hindsight)
>> - **Diagnostic Analytics** – *Why did it happen?* (Insight)
>> - **Predictive Analytics** – *What will happen?* (Foresight)
>> - **Prescriptive Analytics** – *How can we make it happen?* (Optimization)
>>
>> L'ottimizzazione (ricerca operativa) si colloca al livello più alto: non si limita a descrivere o prevedere, ma suggerisce la decisione migliore da prendere.

---
## Slide 7 – Introduzione

- In questo corso dimostreremo che per sviluppare una soluzione per il supporto alle decisioni sono necessari i seguenti passi:
	- **modellare matematicamente il problema** che si vuole risolvere;
	- identificare la sua **complessità**;
	- **progettare l'algoritmo più adatto**, usando le tecniche di soluzione in relazione al modello e alla complessità del problema.
- Mostreremo come problemi molto semplici da formulare possono risultare molto difficili da risolvere e come problemi molto complessi da descrivere possono essere in realtà molto facili da risolvere.
- Partiremo definendo cosa è un **problema**, un **modello** e un **algoritmo**.

---
## Slide 8 – Problema, Istanza, Modello e Algoritmo

- **Problema**, *[pro-blè-ma] s.m. (pl. -mi)*
	- **Garzanti**: "*quesito con cui si chiede di trovare, con un procedimento di calcolo, uno o più dati sconosciuti, partendo dai dati noti contenuti nell'enunciato del quesito stesso.*"
	- **Coletti**: "*in matematica e in altre scienze, domanda con cui si chiede di trovare, sulla base di dati noti ed enunciati, dati non noti, logicamente deducibili dai primi.*"
- Una **istanza** rappresenta i dati noti del problema.
- Per esempio, "*calcolare l'area di un triangolo conoscendo l'altezza e la base*" è il problema, mentre il triangolo di altezza 20 cm e base 30 cm è l'istanza.
- Nel nostro contesto per **risolvere un problema** è necessario costruire un **modello** e definire un **algoritmo** di soluzione.

>> Nell'esempio: il modello è la formula $A = \frac{b \cdot h}{2}$, l'algoritmo è "moltiplica base per altezza e dividi per 2"; sull'istanza $b = 30$ cm, $h = 20$ cm si ottiene $A = 300\ \text{cm}^2$.

---
## Slide 9 – Modelli

- I **modelli** sono una rappresentazione, spesso semplificata, di concetti, fenomeni, relazioni, strutture, processi, sistemi, etc.
- I modelli possono riguardare sia aspetti puramente teorici che del mondo reale.
- I modelli sono di tipo **verbale**, **grafico**, **fisico**, **matematico**, etc.
- I modelli consentono di perseguire i seguenti obiettivi:
	- **facilitare la comprensione**, identificando le componenti fondamentali e i meccanismi di funzionamento;
	- **spiegare, controllare e predire eventi**, anche sulla base delle osservazioni passate;
	- **supportare i processi decisionali**.

---
## Slide 10 – Modello Matematico

- Molto spesso ciò che deve essere rappresentato nel modello può essere composto da molte componenti le cui interrelazioni possono essere anche molto complesse. In questo caso è fondamentale applicare delle ***semplificazioni*** al modello, che possibilmente non "*interferiscano*" con l'utilizzo che se ne vuole fare.
- Il processo di semplificazione deve identificare le componenti di interesse e definire eventuali approssimazioni.
- Lo strumento di modellazione a cui siamo interessati è il **modello matematico**, che consente di rappresentare la realtà di interesse con un alto grado di astrazione per mezzo di simboli, equazioni, etc.
- Per scrivere i modelli matematici, come per analizzarli e risolverli, bisogna conoscere **il linguaggio e i metodi della matematica**.
- I modelli matematici che utilizzeremo prevedono l'uso di **parametri** che rappresentano l'input e di **variabili** che rappresentano l'output.

>> Esempio: nel modello $q = -2000p + 150000$ (slide 36) i coefficienti $-2000$ e $150000$ sono parametri (dati noti), mentre il prezzo $p$ è la variabile decisionale il cui valore costituisce l'output del modello.

---
## Slide 11 – Modello Matematico

- Nel caso in cui i parametri possono essere definiti con esattezza a priori parleremo di **modelli deterministici**, mentre nel caso in cui i parametri non sono certi a priori parleremo di **modelli stocastici**.
- In molte applicazioni, come in economia e finanza, molto spesso i modelli sono di tipo stocastico.
- I modelli di tipo stocastico sono solitamente difficili da risolvere e spesso ci si riporta a modelli deterministici, ad esempio enumerando sottoinsiemi di **scenari** rappresentativi della realtà di interesse.
- Nella definizione e nell'uso dei modelli non bisogna dimenticarsi dell'**aspetto numerico**, perché l'approssimazione dei parametri e gli errori nel calcolo possono inficiare la validità dell'output.
- La matematica permette di prevedere anche la precisione con cui sarà fornito l'output. Di questo tema se ne occupa l'**analisi numerica**.

>> Esempio di approccio a scenari: se la domanda futura può valere 100, 150 o 200 con probabilità note, si risolve un modello deterministico che considera contemporaneamente i tre scenari (ad es. massimizzando il profitto atteso), invece di trattare direttamente la variabile aleatoria.

---
## Slide 12 – Approssimazione di un Modello

- **Prima del calcolo:**
	- modello;
	- misure empiriche;
	- precedenti calcoli.
- **Durante il calcolo:**
	- troncamento o discretizzazione;
	- arrotondamento.

**NOTA:** l'accuratezza del risultato finale dipende da tutti questi aspetti.

---
## Slide 13 – Errori di Troncamento e Arrotondamento

- **Errore di Troncamento**
	L'errore di troncamento è dato dalla differenza tra il "*risultato reale*" e quello prodotto dall'algoritmo. Per esempio, può essere dovuto alla terminazione di un algoritmo di soluzione di tipo iterativo prima del raggiungimento del valore reale.
- **Errore di Arrotondamento**
	L'errore di arrotondamento è dato dalla differenza tra il risultato prodotto da un dato algoritmo usando un'aritmetica esatta e il risultato prodotto dallo stesso algoritmo usando un'aritmetica approssimata. L'aritmetica del "*computer*" è approssimata a causa dell'inesatta rappresentazione dei numeri reali e dall'applicazione degli operatori aritmetici ad essi.

**NOTA:** gli errori di calcolo sono la somma di errori di troncamento e di arrotondamento.

>> Esempio di troncamento: approssimare $e^x$ con i primi termini della serie di Taylor $1 + x + \frac{x^2}{2}$ trascura il resto $\sum_{k\ge 3} \frac{x^k}{k!}$. Esempio di arrotondamento: in doppia precisione `0.1 + 0.2` restituisce `0.30000000000000004` invece di `0.3`.

---
## Slide 14 – Approssimazione Durante il Calcolo

- L'approssimazione durante il calcolo spesso è inevitabile.

Ieri… Oggi…

![[RO02-s014-1.png|500]]

---
## Slide 15 – Approssimazione di un Modello

**Esempio**
- Il calcolo della superficie della terra usando la formula $A = 4\pi r^2$ implica le seguenti approssimazioni:
	- la terra viene modellata (o modellizzata) come una sfera;
	- il valore del raggio $r$ è dato da misure empiriche e precedenti calcoli (come?);
	- il valore di $\pi$ richiede un troncamento;
	- i valori dei dati in input e i risultati delle operazioni aritmetiche sono arrotondati dal computer.

>> Con $r \approx 6371$ km si ottiene $A \approx 5{,}1 \times 10^8\ \text{km}^2$. Si noti che l'errore relativo su $r$ viene raddoppiato: poiché $A \propto r^2$, si ha $\frac{\Delta A}{A} \approx 2\,\frac{\Delta r}{r}$.

---
## Slide 16 – Approssimazione di un Modello

**Il calcolo del raggio terrestre:**
- Eratostene (Cirene, 276 A.C. – Alessandria d'Egitto, 194 A.C.) riuscì a stimare con buona precisione il raggio terrestre:

![[RO02-s016-1.png|450]]

Fonte: https://en.wikipedia.org/wiki/Eratosthenes

>> Testo della figura: 1/50 of a circle ↔ 5 000 stadia (~800 km); ∴ 1 circle ↔ 50 × 5 000 stadia = 250 000 stadia (~40 000 km).
>>
>> Idea: a mezzogiorno del solstizio a Siene il Sole era allo zenit (illuminava il fondo di un pozzo), mentre ad Alessandria un'asta proiettava un'ombra corrispondente a un angolo di circa $7{,}2° = 360°/50$. Essendo i raggi solari paralleli, lo stesso angolo è quello al centro della Terra tra le due città, quindi la circonferenza è $C = 50 \times 5000$ stadi e il raggio $r = C/(2\pi) \approx 40000/(2\pi) \approx 6370$ km.

---
## Slide 17 – Errori di Calcolo: un Esempio

- Gli errori di calcolo possono "*propagarsi*" in modo inaspettato e a volte disastroso. Il risultato potrebbe essere inutilizzabile.
- Vediamo un esempio molto semplice utilizzando un "*foglio elettronico*", uno strumento di lavoro molto usato in ambito scientifico/economico.
- Vogliamo calcolare con Excel (o una applicazione analoga) la seguente "*formula ricorsiva*":
	- **Passo base**: $x_0 = 0.2$
	- **Passo ricorsivo**: $x_{i+1} = 11x_i - 10x_0$
- Per **induzione** possiamo dedurre che $x_i = x_0$ per ogni $i$:
	- **Passo base**: $x_1 = 11x_0 - 10x_0 = x_0$.
	- **Passo induttivo**: se è vero fino a $i$, allora $x_{i+1} = 11x_0 - 10x_0 = x_0$.
- Ma cosa accade se calcolo la formula ricorsiva usando Excel? Otterremo $x_i = x_0 = 0.2$ per ogni $i$?

---
## Slide 18 – Errori: un esempio

![[RO02-s018-1.png|550]]

---
## Slide 19 – Errori: un esempio

![[RO02-s019-1.png|550]]

>> Perché l'errore esplode: se il valore memorizzato è $\tilde x_i = x_0 + \varepsilon_i$, allora $\tilde x_{i+1} = 11(x_0 + \varepsilon_i) - 10x_0 = x_0 + 11\varepsilon_i$, cioè $\varepsilon_{i+1} = 11\,\varepsilon_i$ e quindi $\varepsilon_i = 11^i \varepsilon_0$. Anche un errore iniziale dell'ordine di $10^{-17}$ viene moltiplicato per $11^{24} \approx 10^{25}$, producendo valori completamente sbagliati (come $14460033{,}26$ alla 24ª iterazione).

---
## Slide 20 – Errori: un esempio

- **Non è un bug** e il motivo è piuttosto semplice.
- Il numero decimale "**0,2**" non ha una rappresentazione binaria finita, proprio come $1/3$ non ha una rappresentazione decimale finita.
- La conversione in base 2 è:
$$(0{,}2)_{10} = (0{,}00110011001100110011\ldots)_2$$
	La sequenza "**0011**" continua indefinitamente.
- Poiché un computer dispone di un numero finito di bit, deve troncare e arrotondare questa rappresentazione.
- Nel formato IEEE 754 a 64 bit, usato normalmente per il **tipo double**, viene memorizzato il valore:
$$0{,}2000000000000000111022302462515654\ldots$$

>> La conversione si ottiene moltiplicando ripetutamente per 2 la parte frazionaria e prendendo la parte intera: $0{,}2 \to 0{,}4\,(0) \to 0{,}8\,(0) \to 1{,}6\,(1) \to 1{,}2\,(1) \to 0{,}4\,(0) \ldots$, e il ciclo si ripete. In generale una frazione ha rappresentazione binaria finita solo se, ridotta ai minimi termini, il denominatore è una potenza di 2 ($0{,}2 = 1/5$ non lo è).

---
## Slide 21 – Malcondizionamento di un'Istanza

- Consideriamo il problema della soluzione di un sistema di equazioni lineari:
$$\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ \quad\vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}$$
- Una particolare istanza può essere:
$$\begin{cases} x_1 + x_2 = 1 \\ x_1 - x_2 = 2 \end{cases}$$
	Questo sistema lineare ha un'unica soluzione che rappresenta l'intersezione delle rette rappresentate dalle due equazioni.
- Questo problema è semplice, ma per alcune istanze può essere difficile ottenere una soluzione sufficientemente accurata.

>> Sommando e sottraendo le equazioni si ottiene $x_1 = 3/2$, $x_2 = -1/2$. Le due rette sono perpendicolari: istanza ben condizionata.

---
## Slide 22 – Malcondizionamento di una Istanza

- Più le rette tendono a essere parallele e più vengono amplificati gli errori (peggiora il "*condizionamento*" dell'istanza di un problema).

![[RO02-s022-1.png|500]]

>> Esempio numerico: $\begin{cases} x_1 + x_2 = 2 \\ x_1 + 1{,}0001\,x_2 = 2 \end{cases}$ ha soluzione $(2, 0)$; cambiando il secondo termine noto in $2{,}0001$ la soluzione diventa $(1, 1)$. Una perturbazione di $10^{-4}$ sui dati sposta la soluzione di una quantità dell'ordine di 1. Il grado di malcondizionamento si misura con il numero di condizionamento della matrice, $\kappa(A) = \|A\|\,\|A^{-1}\|$.

---
## Slide 23 – Tipologie di Problemi

- Distinguiamo le seguenti tipologie di problemi:
	- Problema di "***Decisione***" (o problema decisionale): data un'istanza si vuole determinare se esiste o meno una certa soluzione;
	- Problema di "***Ricerca***": data un'istanza si vuole determinare una possibile soluzione;
	- Problema di "***Enumerazione***": data un'istanza si vuole determinare tutte le possibili soluzioni;
	- Problema di "***Ottimizzazione***": data un'istanza si vuole determinare la "migliore soluzione" possibile rispetto ad una misura fissata.
- **Quali sono dei possibili esempi?**

---
## Slide 24 – Tipologie di Problemi

**Esempio: Traveling Salesman Problem (TSP)**

A un mezzo di un corriere sono stati assegnati dei pacchi da consegnare.

![[RO02-s024-1.png|400]] ![[RO02-s024-2.png|200]]

---
## Slide 25 – Tipologie di Problemi

**Esempio: Traveling Salesman Problem (TSP)**

A un mezzo di un corriere sono stati assegnati dei pacchi da consegnare:
- Problema di "***Decisione***": si vuole sapere se è possibile svolgere tutte le consegne in una giornata lavorativa (e.g., entro le 9 ore di lavoro);
- Problema di "***Ricerca***": si vuole determinare una sequenza di visite che consente di consegnare tutti i pacchi entro la giornata lavorativa;
- Problema di "***Enumerazione***": si vogliono enumerare tutte le possibili soluzioni che consentono la consegna di tutti i pacchi;
- Problema di "***Ottimizzazione***": si vuole determinare la sequenza delle visite che minimizza una funzione obiettivo (e.g., tempo impiegato, chilometri percorsi, etc.).

>> I quattro problemi sono legati: se sappiamo risolvere l'ottimizzazione, rispondiamo anche alla decisione (basta confrontare il tempo ottimo con le 9 ore) e alla ricerca (la soluzione ottima, se rispetta il limite, è una soluzione ammissibile).

---
## Slide 26 – Tipologie di Problemi

**Esempio: Traveling Salesman Problem (TSP)**

Una soluzione del TSP è definita dall'ordine con cui si dovrà visitare le $n$ fermate (per esempio, per permettere al corriere di consegnare i pacchi).

Il numero delle possibili soluzioni alternative per un TSP che prevede $n$ fermate potrebbe essere pari a:
$$n! = 1 \times 2 \times 3 \times 4 \times 5 \times \cdots \times n$$

**Esempi:**

$$\begin{aligned}
n = 5 &\implies 5! = 1 \times 2 \times 3 \times 4 \times 5 = 120 \\
n = 10 &\implies 10! = 1 \times 2 \times \cdots \times 9 \times 10 = 3.628.800 \\
n = 20 &\implies 20! = 1 \times 2 \times \cdots \times 19 \times 20 = 2.432.902.008.176.640.000 \\
n = 100 &\implies 100! = 1 \times 2 \times \cdots \times 99 \times 100 = 9{,}33262 \times 10^{157} \\
n = 200 &\implies 200! = 1 \times 2 \times \cdots \times 199 \times 200 = 7{,}88658 \times 10^{374}
\end{aligned}$$

>> Per dare un'idea: anche valutando $10^9$ soluzioni al secondo, enumerare le $20! \approx 2{,}4 \times 10^{18}$ sequenze richiederebbe circa $2{,}4 \times 10^9$ secondi, cioè circa 77 anni. Per $n = 100$ il numero supera di gran lunga il numero stimato di atomi nell'universo osservabile (circa $10^{80}$). L'enumerazione completa è quindi impraticabile già per istanze di dimensione modesta.
>>
>> Il "potrebbe" è dovuto al fatto che, fissando il deposito come punto di partenza, le sequenze distinte sono $n!$ se il deposito non è tra le $n$ fermate, mentre se lo è diventano $(n-1)!$ (e $(n-1)!/2$ se le distanze sono simmetriche, perché un giro e il suo inverso hanno lo stesso costo).

---
## Slide 27 – Tipologie di Problemi

**Problemi non decidibili**
- Se consideriamo i soli problemi decisionali, che richiedono un Si o un No come risposta, tra questi ve ne sono alcuni che non sono decidibili.
- Per esempio, non riusciamo a decidere se le seguente frase è vera:
	"Questa frase è falsa"
- Questa frase deriva dal "paradosso di Epimenide", noto anche come "paradosso del mentitore".
- In origine l'affermazione di Epimenide, che era cretese, era:
	"Tutti i Cretesi sono bugiardi"
	Essendo Epimenide cretese avrebbe dovuto essere bugiardo e perciò la frase dovrebbe essere falsa poiché pronunciata da un bugiardo.

>> In informatica l'esempio classico di problema indecidibile è il **problema della fermata** (*halting problem*, Turing 1936): non esiste alcun algoritmo che, dato un qualsiasi programma e un suo input, decida sempre correttamente se il programma termina. La dimostrazione usa proprio un argomento autoreferenziale simile al paradosso del mentitore.

---
## Slide 28 – Complessità Computazionale

- La **teoria della complessità computazionale** è un ambito di ricerca della matematica, oggi spesso denotato come "*informatica teorica*", che ha l'obiettivo di classificare i problemi secondo la loro intrinseca complessità.
- Banalizzando, la teoria della complessità ci consente di determinare se un problema è "**facile**" o "**difficile**".
- La difficoltà di un problema è una sua caratteristica generale che non è associata a una particolare istanza. Ricordiamo che un problema è un'entità astratta, mentre un'istanza è un caso particolare.
- Potremo dire che **un algoritmo risolve un problema se è in grado di generare una soluzione per ogni possibile istanza**.
- Se un **problema è semplice** possiamo garantire la sua soluzione in un tempo e una quantità di risorse (e.g., memoria) "**ragionevole**".
- Se un **problema è difficile** non possiamo garantire la sua soluzione.

---
## Slide 29 – Complessità Computazionale

- Funzioni polinomiali, esponenziali e fattoriali…

![[RO02-s029-1.png|550]]

>> Funzioni rappresentate: $f(x) = x^2$, $g(x) = x^3$, $h(x) = x^4$, $p(x) = 2^x$, $q(x) = x!$. Per $x$ piccolo i polinomi possono essere più grandi, ma al crescere di $x$ si ha sempre $x^k \ll 2^x \ll x!$. Ad esempio per $x = 20$: $20^4 = 160.000$, $2^{20} \approx 10^6$, $20! \approx 2{,}4 \times 10^{18}$.

---
## Slide 30 – Complessità Computazionale

- Volendo semplificare un argomento in verità molto più complesso, potremo dire che:
	- I **problemi semplici** sono quelli polinomiali (insieme $\boldsymbol{P}$).
	- I **problemi difficili** sono quelli "non-polinomiali" (che si trovano nell'insieme $\boldsymbol{NP}$), tra cui ci sono i problemi **$\boldsymbol{NP}$-Completi**.
- Si noti che $\boldsymbol{NP}$ significa Nondeterministic Polynomial time.
- $\boldsymbol{NP}$ è l'insieme dei problemi decisionali in cui se la risposta è "Si" lo si può verificare in tempo polinomiale utilizzando una **macchina di Turing deterministica**, o in modo equivalente possiamo dire che il problema può essere risolto in tempo polinomiale da una **macchina di Turing non-deterministica**.
- Al momento possiamo facilmente dimostrare che $\boldsymbol{P} \subseteq \boldsymbol{NP}$, ma non sappiamo se $\boldsymbol{P} \neq \boldsymbol{NP}$.

>> Attenzione: $NP$ **non** significa "non polinomiale". La versione decisionale del TSP ("esiste un giro di lunghezza $\le K$?") è in $NP$: dato un giro candidato (il *certificato*), si verifica in tempo polinomiale che visiti tutte le fermate e che la sua lunghezza sia $\le K$. Trovare tale giro, invece, per quanto ne sappiamo può richiedere tempo esponenziale.
>>
>> $P \subseteq NP$ è immediato: se un problema si risolve in tempo polinomiale, la risposta "Sì" si verifica semplicemente risolvendolo.

---
## Slide 31 – Complessità Computazionale

- Un problema decisionale $f: \mathbb{I} \longrightarrow \{0, 1\}$ è *riducibile polinomialmente* a $g: \mathbb{I} \longrightarrow \{0, 1\}$, i.e. $f \propto g$, se esiste una funzione $h$, calcolabile in tempo polinomiale, tale che per ogni $x$:
$$f(x) = g(h(x))$$
- Un problema decisionale $p: \mathbb{I} \longrightarrow \{0, 1\}$ è definito **$\boldsymbol{NP}$-Completo** se e solo se:
	- $p \in \boldsymbol{NP}$;
	- per ogni $f \in \boldsymbol{NP}$ si ha $f \propto p$.
- Fino ad oggi non è stato dimostrato che l'insieme dei problemi $\boldsymbol{P}$ e l'insieme dei problemi $\boldsymbol{NP}$-Completi sono disgiunti. Se così non fosse, allora $\boldsymbol{P} = \boldsymbol{NP}$.
- Un problema di ottimizzazione è **$\boldsymbol{NP}$-Hard** se esiste un problema $\boldsymbol{NP}$-Completo che può essere ridotto ad esso in tempo polinomiale. Inoltre, i problemi $\boldsymbol{NP}$-Hard possono non appartenere a $\boldsymbol{NP}$.

>> Intuizione: $f \propto g$ significa "$f$ non è più difficile di $g$": per risolvere un'istanza $x$ di $f$ basta trasformarla (in tempo polinomiale) nell'istanza $h(x)$ di $g$ e risolvere quest'ultima. Quindi, se un solo problema $NP$-Completo ammettesse un algoritmo polinomiale, tutti i problemi di $NP$ sarebbero risolvibili in tempo polinomiale, cioè $P = NP$.
>>
>> Il TSP in versione di ottimizzazione è $NP$-Hard; la sua versione decisionale è $NP$-Completa. Il TSP di ottimizzazione non appartiene a $NP$, perché $NP$ contiene solo problemi decisionali.

---
## Slide 32 – Complessità Computazionale

**Millennium Prize Problems**

Il Clay Mathematics Institute lo ha incluso tra i 7 problemi matematici del millennio per i quali è previsto un premio di **1,000,000 di dollari** per chi fornirà la dimostrazione corretta per primo.

![[RO02-s032-1.png|350]]

>> Il diagramma rappresenta la situazione nell'ipotesi (ritenuta più probabile ma non dimostrata) $P \neq NP$: $P$ e $NP$-Complete sono sottoinsiemi disgiunti di $NP$. Se invece fosse $P = NP$, i tre insiemi coinciderebbero (a parte casi banali). Dei 7 problemi del millennio, finora è stato risolto solo la congettura di Poincaré (Perelman, 2003).

---
## Slide 33 – Problemi vs Algoritmi

- In letteratura può capitare che per un dato problema siano proposti più algoritmi. **Perché?**
- Le **prestazioni di un algoritmo** possono essere misurate con:
	- il **tempo di calcolo** richiesto per ottenere la soluzione;
	- la **qualità della soluzione** (i.e., quanto il risultato ottenuto approssima il risultato corretto).
- Per ogni istanza di un problema esistono algoritmi che forniscono prestazioni migliori di altri.
- Per i **problemi difficili** c'è un ulteriore opzione:
	- **Algoritmi euristici**, che trovano soluzioni di "**buona qualità**";
	- **Algoritmi esatti**, che trovano le soluzioni "**ottime**".
- Per la scelta dell'algoritmo è determinante definire la **complessità computazionale** del problema. **Perché?**

>> Esempio di euristica per il TSP: *nearest neighbor* (dalla fermata corrente vai sempre alla fermata non visitata più vicina). Costa $O(n^2)$ operazioni ed è quindi velocissima, ma non garantisce l'ottimo. Un algoritmo esatto (es. branch-and-bound) garantisce l'ottimo, ma nel caso peggiore può richiedere tempo esponenziale.
>>
>> La complessità è determinante perché, se il problema è in $P$, conviene usare direttamente un algoritmo esatto polinomiale; se è $NP$-Hard, bisogna valutare se le istanze sono abbastanza piccole per un metodo esatto oppure se serve un'euristica.

---
## Slide 34 – Modelli vs Algoritmi

- Il modello scelto per un dato problema ha un impatto determinante sulla scelta dell'algoritmo più adatto.
- Si potrebbe scegliere un modello che approssima maggiormente il problema che può essere risolto in modo molto efficiente/efficace.
- Mentre modelli che descrivono in modo molto preciso il problema potrebbero essere troppo difficili da risolvere.
- **Come si fa a scegliere?**
- **Quali dovrebbero essere i criteri di scelta?**
- La stragrande maggioranza degli algoritmi di soluzione nell'ambito dell'**Intelligenza Artificiale** (AI) sono classificabili come **algoritmi euristici**.
- Nell'ambito dell'**ottimizzazione** molti modelli possono essere risolti in modo esatto (**algoritmi esatti**).

>> Esempio tipico: un modello di programmazione lineare con variabili continue si risolve in tempo polinomiale, mentre lo stesso modello con variabili intere (più fedele se, ad esempio, si producono pezzi indivisibili) è in generale $NP$-Hard. Tra i criteri di scelta: la precisione richiesta, il tempo di calcolo disponibile, la dimensione delle istanze e l'affidabilità dei dati (è inutile un modello molto preciso se i parametri sono stime grossolane).

---
## Slide 35 – Ricerca Operativa

- Quando dobbiamo risolvere un problema dobbiamo costruire un **modello** che sia risolvibile da un **algoritmo** adeguato alla **complessità del problema** e alla tipologia di **istanze** che dobbiamo risolvere.
- La disciplina che si occupa dei problemi di ottimizzazione è nota come **operations research** (ricerca operativa) e fa parte del settore **decision science** (scienze decisionali).
- Le keyword di moda oggi che identificano i campi di applicazione sono **business analytics**, **data science**, **machine learning**, etc.
- Uno degli ambiti tradizionali di applicazione della ricerca operativa è la gestione aziendale (**management science**).
- In questa prima introduzione vedremo alcuni esempi molto semplici di applicazione della **programmazione matematica** e **ottimizzazione combinatoria**, argomenti che poi approfondiremo meglio durante il corso.

---
## Slide 36 – Ottimizzazione Non-Vincolata

**Esempio: Domanda e Ricavo**

- Una casa editrice prevede che l'equazione della domanda relativa alle vendite del suo ultimo romanzo sia:
$$q = -2000p + 150000$$
	dove $q$ è il numero di libri che si prevede di vendere ogni anno se il prezzo di vendita è di $p$ Euro (**come è stato costruito il modello?**).
- **Quale prezzo deve applicare la casa editrice per ottenere il massimo del ricavo annuo?**
- Il ricavo è dato dal prodotto tra il prezzo e la quantità venduta:
$$R = pq$$
	che sostituendo l'equazione relativa alla domanda diventa:
$$R = pq = p(-2000p + 150000) = -2000p^2 + 150000p$$

>> Un modello del genere si costruisce tipicamente con una regressione lineare su dati storici (o da indagini di mercato) di coppie prezzo–quantità venduta.
>>
>> $R(p)$ è una parabola concava (coefficiente di $p^2$ negativo), quindi il massimo si trova dove la derivata si annulla: $R'(p) = -4000p + 150000 = 0 \Rightarrow p^* = 37{,}5$ €. Si ottengono $q^* = 75000$ copie e $R^* = 2.812.500$ €. Il problema si dice "non vincolato" perché non ci sono vincoli su $p$ oltre a quelli impliciti ($p \ge 0$ e $q \ge 0$, cioè $0 \le p \le 75$), che qui non sono attivi all'ottimo.

---
## Slide 37 – Ottimizzazione Non-Vincolata

- Il ricavo è in funzione del prezzo ed è dato da:
$$R(p) = -2000p^2 + 150000p$$
- Per cui, dobbiamo trovare il prezzo $p$ che massimizza il ricavo $R(p)$.
- Possiamo notare che si tratta dell'equazione di una parabola e che il coefficiente del termine quadratico è $-2000$, ossia è negativo. Quindi la funzione è concava.

![[RO02-s037-1.png|450]]

>> Concava significa che la derivata seconda è negativa ovunque ($R''(p) = -4000 < 0$): ogni punto stazionario è quindi un massimo **globale**.

---
## Slide 38 – Ottimizzazione Non-Vincolata

- Il prezzo che bisogna applicare per ottenere il massimo ricavo annuo corrisponde al **vertice della parabola** (si potevano usare le derivate).
- Per cui, se l'equazione è:
$$R = ap^2 + bp + c = -2000p^2 + 150000p$$
abbiamo che $a = -2000$, $b = +150000$ e $c = 0$.
- L'ascissa del vertice è data da:
$$p = -\frac{b}{2a} = -\frac{150000}{2(-2000)} = +\frac{150000}{4000} = 37.5$$
Quindi il prezzo che consente il massimo ricavo è 37.50 Euro.
- Se vogliamo conoscere il corrispondente ricavo è sufficiente calcolare:
$$R = -2000p^2 + 150000p = -2000(37.5)^2 + 150000(37.5)$$
- La **soluzione ottima** del problema è $p = 37.5$ e il corrispondente ricavo $R = 2812500$. Si noti che è il massimo della funzione $R(p)$.

>> Con le derivate: $R'(p) = -4000p + 150000 = 0 \Rightarrow p = 37.5$. Calcolo esplicito: $-2000 \cdot 1406.25 + 5625000 = -2812500 + 5625000 = 2812500$.

---
## Slide 39 – Ottimizzazione Non-Vincolata

- In generale cosa significa il termine "**ottimizzazione non-vincolata**"?
- Che cosa è il **minimo relativo** (o massimo relativo) di una funzione?
- Che cosa è il **minimo assoluto** (o massimo assoluto) di una funzione?
- Data una generica funzione $f: \mathbb{R}^n \longrightarrow \mathbb{R}$ come faccio a trovare il suo minimo/massimo relativo/assoluto?
- Il metodo da impiegare dipende dalla funzione $f$?
- **Quale algoritmo suggerite di utilizzare per risolvere un problema di ottimizzazione non-vincolata?**

![[RO02-s039-1.png|250]]

>> - Ottimizzazione non vincolata: si cerca l'ottimo di $f$ su tutto $\mathbb{R}^n$, senza restrizioni sulle variabili.
>> - Minimo relativo (locale): $\mathbf{x}^*$ tale che $f(\mathbf{x}^*) \le f(\mathbf{x})$ per ogni $\mathbf{x}$ in un intorno di $\mathbf{x}^*$; minimo assoluto (globale): la disuguaglianza vale per ogni $\mathbf{x} \in \mathbb{R}^n$.
>> - Se $f$ è differenziabile, un ottimo locale soddisfa $\nabla f(\mathbf{x}^*) = \mathbf{0}$ (condizione necessaria); con Hessiana definita positiva (negativa) si ha un minimo (massimo) locale. Se $f$ è convessa, ogni minimo locale è globale.
>> - Algoritmi tipici: discesa del gradiente, metodo di Newton, metodi quasi-Newton (es. BFGS); per funzioni non differenziabili, metodi senza derivate (es. Nelder-Mead).

---
## Slide 40 – Ottimizzazione Vincolata

**Esempio: Miscelazione**
- L'azienda Artic Juice Company produce tre miscele di succo che per ogni litro richiedono la seguente composizione:
	- **PineOrange**: 2 parti di succo d'ananas e 2 parti di succo d'arancia;
	- **PineKiwi**: 3 parti di succo d'ananas e 1 parte di succo di kiwi;
	- **OrangeKiwi**: 3 parti di succo d'arancia e 1 parte di succo di kiwi.
- L'azienda dispone ogni giorno di 800 parti di succo d'ananas, 650 parti di succo d'arancia e 350 parti di succo di kiwi.
- Quanti litri di ciascuna miscela deve produrre per utilizzare **tutte** le materie prime?
- Vogliamo modellare il problema e risolverlo.

---
## Slide 41 – Ottimizzazione Vincolata

- Il primo passaggio è l'identificazione delle variabili decisionali:
	- $x_1$: numero di litri di PineOrange prodotti in un giorno;
	- $x_2$: numero di litri di PineKiwi prodotti in un giorno;
	- $x_3$: numero di litri di OrangeKiwi prodotti in un giorno.
- Le informazioni che abbiamo a disposizione sono le seguenti:

|  | $x_1$ | $x_2$ | $x_3$ | Totale disponibile |
|---|:---:|:---:|:---:|:---:|
| Succo Ananas (parti) | 2 | 3 | 0 | 800 |
| Succo Arancia (parti) | 2 | 0 | 3 | 650 |
| Succo Kiwi (parti) | 0 | 1 | 1 | 350 |
- Ora bisogna scrivere il sistema lineare e risolverlo.

>> Ogni riga della tabella diventa un'equazione (consumo totale della materia prima = disponibilità), ogni colonna contiene i coefficienti di una variabile: la tabella è di fatto la matrice aumentata del sistema.

---
## Slide 42 – Ottimizzazione Vincolata

- Il sistema lineare risultante è:
$$\begin{cases} 2x_1 + 3x_2 \phantom{{}+3x_3} = 800 \\ 2x_1 \phantom{{}+3x_2} + 3x_3 = 650 \\ \phantom{2x_1} + 1x_2 + 1x_3 = 350 \end{cases}$$
- Si può risolvere il sistema lineare con il metodo di eliminazione di Gauss-Jordan oppure uno dei tanti algoritmi alternativi.
- La soluzione del sistema lineare è:
$$(x_1, x_2, x_3) = (100, 200, 150)$$
che suggerisce di produrre ogni giorno 100 litri di PineOrange, 200 litri di PineKiwi e 150 litri di OrangeKiwi per riuscire a consumare tutte le materie disponibili. Esiste una soluzione più "***conveniente***"?
- Come può essere modellato il problema per un generico numero di materie prime e di prodotti (ognuno con la sua ricetta specifica)?

>> Verifica: $2\cdot100 + 3\cdot200 = 800$, $2\cdot100 + 3\cdot150 = 650$, $200 + 150 = 350$.
>> "Più conveniente" ha senso solo introducendo un criterio (es. profitto) e rinunciando a consumare *tutte* le materie prime: si passa da equazioni a disequazioni (vedi slide 57 e seguenti). Il caso generale con $n$ prodotti e $m$ materie prime è il problema di produzione delle slide 63–64.

---
## Slide 43 – Ottimizzazione Vincolata

**Esempio: Flussi di Traffico**
- Il traffico che attraversa un quartiere del centro di una cittadina rispetta il seguente sistema di sensi unici:

![[RO02-s043-1.png|500]]

(Nella figura: Strada A, Strada B, Strada C, "Contatore del traffico" (T), "Senso unico".)

si vuole capire quante auto transito per le strade A, B e C.

---
## Slide 44 – Ottimizzazione Vincolata

- I tre contatori del traffico rilevano i seguenti dati:
	- Contatore a Ovest: 200 automobili in entrata ogni ora;
	- Contatori a Est: 100 automobili in uscita ogni ora ciascuno.
- Si può notare che il numero di automobili entrante nel quartiere (contatore a ovest) è pari al numero di automobili uscenti (somma dei contatori a est).
- Possiamo ipotizzare che il numero di auto che entrano nel quartiere e parcheggiano è compensato dal numero di auto che lasciano i parcheggi ed escono dal quartiere (è ragionevole?).
- In una rete stradale si applica il <u>principio della conservazione del flusso</u>: il numero di auto entranti in un incrocio e pari al numero delle auto uscenti (è ragionevole?).

>> La conservazione del flusso è l'analogo della legge di Kirchhoff sulle correnti: in ogni nodo (incrocio) ciò che entra è uguale a ciò che esce. È ragionevole in media su un intervallo di tempo (es. un'ora) e in un regime stazionario, non istante per istante.

---
## Slide 45 – Ottimizzazione Vincolata

- **Con le informazioni a disposizione è possibile stabilire quante auto transitano ogni ora nelle strade A, B e C?**
- Il primo passaggio è l'identificazione delle variabili decisionali:
	- $x_1$: numero di auto che transitano ogni ora nella Strada A;
	- $x_2$: numero di auto che transitano ogni ora nella Strada B;
	- $x_3$: numero di auto che transitano ogni ora nella Strada C.
- Applicando il principio di conservazione del flusso possiamo scrivere le seguenti equazioni:
	- $x_1 + x_2 = 200$
	- $x_1 - x_3 = 100$
	- $x_2 + x_3 = 100$

![[RO02-s045-1.png|350]]

- Tutte queste equazioni devono essere soddisfatte.

>> Le tre equazioni corrispondono ai tre incroci: quello a ovest (i 200 in ingresso si dividono tra A e B), quello in alto a destra (le $x_1$ auto di A escono per 100 verso est oppure scendono per C: $x_1 = 100 + x_3$) e quello in basso a destra (B e C confluiscono nei 100 in uscita).

---
## Slide 46 – Ottimizzazione Vincolata

- Il sistema lineare risultante è:
$$\begin{cases} 1x_1 + 1x_2 \phantom{{}-1x_3} = 200 \\ 1x_1 \phantom{{}+1x_2} - 1x_3 = 100 \\ \phantom{1x_1} + 1x_2 + 1x_3 = 100 \end{cases}$$
- Se risolviamo il sistema lineare (e.g., con il metodo di eliminazione di Gauss-Jordan) scopriremo che una delle tre equazioni è ridondante (i.e., è combinazione lineare delle altre 2). **Cosa significa?**
- La soluzione del sistema lineare è:
	- $x_1 = x_3 + 100$
	- $x_2 = -x_3 + 100$
	- $x_3$ arbitrario
- I tre contatori non ci permettono di conoscere il flusso esatto sulle tre strade. **Cosa potremo fare per riuscire a conoscere il flusso?**

>> Infatti la prima equazione è la somma delle altre due: $(x_1 - x_3) + (x_2 + x_3) = x_1 + x_2 = 200$. Il rango è 2 con 3 incognite, quindi ci sono $\infty^1$ soluzioni (un grado di libertà).
>> Vincoli fisici restringono comunque l'intervallo: $x_1, x_2, x_3 \ge 0$ e $x_2 = 100 - x_3 \ge 0$ danno $0 \le x_3 \le 100$. Un vincolo aggiuntivo è che deve essere un numero intero, quindi alla fine si arriva a conoscere un numero finito di soluzioni plausibili per il problema. Per conoscere il flusso esatto basta un contatore in più su una delle tre strade (es. sulla Strada C, che fissa $x_3$).

---
## Slide 47 – Ottimizzazione Vincolata

**Esempio: Trasporti**
- Un'azienda di noleggio di automobili ha quattro sedi in città:
	- **Sede A:** che ha 20 auto più del necessario;
	- **Sede B:** che necessita di 10 auto in più di quelle di cui dispone;
	- **Sede C:** che ha 15 auto più del necessario;
	- **Sede D:** che necessita di 25 auto in più di quelle di cui dispone.

![[RO02-s047-1.png|350]]

---
## Slide 48 – Ottimizzazione Vincolata

- Per spostare le auto da una sede all'altra si incorre in un **costo** dovuto al tempo speso da un dipendente alla guida e i costi di carburante e manutenzione per ogni chilometro percorso.
- I costi per spostare un'auto tra le diverse sedi sono i seguenti (**come devono essere calcolati?**):
	- Dalla Sede A alla Sede B costa complessivamente 10 Euro;
	- Dalla Sede C alla Sede B costa complessivamente 5 Euro;
	- Dalla Sede A alla Sede D costa complessivamente 20 Euro;
	- Dalla Sede C alla Sede D costa complessivamente 10 Euro.
- L'azienda di noleggio ha un budget per gli spostamenti di 475 Euro.
- **Con il budget a disposizione è possibile spostare le auto tra le 4 sedi?**

>> Un modo naturale per calcolare il costo unitario di un arco: (costo orario del dipendente × tempo di percorrenza) + (costo per km di carburante e manutenzione × km percorsi), più eventualmente il costo del rientro del dipendente.
>> Si noti che l'offerta totale (20 + 15 = 35) coincide con la domanda totale (10 + 25 = 35): il problema è "bilanciato".

---
## Slide 49 – Ottimizzazione Vincolata

- Per modellare il problema possiamo definire le variabili decisionali:
	- $x_{AB}$: numero di auto spostate dalla Sede A alla sede B;
	- $x_{AD}$: numero di auto spostate dalla Sede A alla sede D;
	- $x_{CB}$: numero di auto spostate dalla Sede C alla sede B;
	- $x_{CD}$: numero di auto spostate dalla Sede C alla sede D;

![[RO02-s049-1.png|400]]

>> Nel grafo i numeri sui nodi indicano l'offerta (positiva: A $+20$, C $+15$) o la domanda (negativa: B $-10$, D $-25$); le variabili sono associate agli archi.

---
## Slide 50 – Ottimizzazione Vincolata

- Sappiamo che la Sede A ha una disponibilità di 20 auto:
$$x_{AB} + x_{AD} = 20$$
- La Sede B richiede 10 auto:
$$x_{AB} + x_{CB} = 10$$
- La Sede C ha una disponibilità di 15 auto:
$$x_{CB} + x_{CD} = 15$$
- La Sede D richiede 25 auto:
$$x_{AD} + x_{CD} = 25$$
- Infine c'è il vincolo relativo al budget disponibile:
$$10x_{AB} + 20x_{AD} + 5x_{CB} + 10x_{CD} = 475$$
- Abbiamo 4 variabili e 5 equazioni. 

>> Un sistema con più equazioni che incognite è sovradeterminato: in generale può non avere soluzione, a meno che alcune equazioni siano ridondanti (dipendenti dalle altre) e il sistema resti compatibile.

---
## Slide 51 – Ottimizzazione Vincolata

- Il sistema lineare risultante è:
$$\begin{cases} 1x_{AB} + 1x_{AD} = 20 \\ 1x_{AB} + 1x_{CB} = 10 \\ 1x_{CB} + 1x_{CD} = 15 \\ 1x_{AD} + 1x_{CD} = 25 \\ 10x_{AB} + 20x_{AD} + 5x_{CB} + 10x_{CD} = 475 \end{cases}$$
- Se risolviamo il sistema lineare, scopriremo che una equazione è <u>ridondante</u> e la soluzione è:
$$(x_{AB}, x_{AD}, x_{CB}, x_{CD}) = (5, 15, 5, 10)$$
- **Nel caso la soluzione fosse frazionaria (possibilità causata dall'aggiunta del budget), come possiamo utilizzarla?**
- **Cosa potrebbe accadere se il budget fosse diverso?**
- **Come potremo risolvere il problema se volessimo spostare tutte le auto, ma minimizzando il budget necessario?**

>> La ridondanza nasce dal bilanciamento offerta = domanda: (eq. A) + (eq. C) − (eq. B) = (eq. D). Verifica del budget: $10\cdot5 + 20\cdot15 + 5\cdot5 + 10\cdot10 = 50 + 300 + 25 + 100 = 475$.

---
## Slide 52 – Ottimizzazione Vincolata

- **Se il budget fosse diverso,** la soluzione sarebbe cambiata e qualche variabile sarebbe potuta diventare frazionaria o negativa.
- **Nel caso la soluzione fosse frazionaria,** le auto non possono essere frazionate, per cui la soluzione non sarebbe applicabile. **E quindi?**
- **Se volessimo spostare tutte le auto, ma minimizzando il budget necessario,** dovremo eliminare il vincolo di budget e risolvendo otterremo la soluzione:
	- $x_{AB} = x_{CD} - 5$
	- $x_{AD} = 25 - x_{CD}$
	- $x_{CB} = 15 - x_{CD}$
	- $x_{CD}$ è arbitrario.

	Questa soluzione può essere sostituita nella funzione di costo.

>> Per avere soluzioni con senso fisico servono anche $x \ge 0$: da $x_{AB} \ge 0$ segue $x_{CD} \ge 5$, da $x_{CB} \ge 0$ segue $x_{CD} \le 15$. Quindi $5 \le x_{CD} \le 15$.
>> Se la soluzione fosse frazionaria bisognerebbe imporre esplicitamente l'interezza delle variabili (programmazione lineare intera, slide 66); arrotondare può produrre soluzioni non ammissibili o non ottime.

---
## Slide 53 – Ottimizzazione Vincolata

- Siccome la funzione di costo è la seguente:
$$c(\mathbf{x}) = 10x_{AB} + 20x_{AD} + 5x_{CB} + 10x_{CD}$$
Se sostituiamo la $\mathbf{x}$ con la soluzione $\mathbf{x}'$ del sistema lineare:
$$\mathbf{x}' = (x_{AB}, x_{AD}, x_{CB}, x_{CD}) = (x_{CD} - 5,\ 25 - x_{CD},\ 15 - x_{CD},\ x_{CD})$$
Ottenendo la seguente espressione:
$$\begin{aligned} c(\mathbf{x}') &= 10(x_{CD} - 5) + 20(25 - x_{CD}) + 5(15 - x_{CD}) + 10x_{CD} \\ c(\mathbf{x}) &= (10 - 20 - 5 + 10)x_{CD} + (-50 + 500 + 75) \\ c(\mathbf{x}) &= -5x_{CD} + 525 \end{aligned}$$
- Il costo diminuisce all'aumentare di $x_{CD}$. Siccome il massimo valore di $x_{CD}$ è 15 (il numero di auto in più presso la Sede C), allora la "**soluzione ottima**" sarà $\mathbf{x}^* = (10, 10, 0, 15)$ e il costo corrispondente è $c(\mathbf{x}^*) = 100 + 200 + 0 + 150 = 450$ Euro.

>> Con il budget di 475 Euro si ottiene $-5x_{CD} + 525 = 475 \Rightarrow x_{CD} = 10$, cioè esattamente la soluzione della slide 51. Il costo minimo è invece 450 Euro, ottenuto nell'estremo $x_{CD} = 15$ dell'intervallo ammissibile $[5, 15]$: con un obiettivo lineare l'ottimo cade sempre su un estremo (vertice) della regione ammissibile.

---
## Slide 54 – Ottimizzazione Vincolata

- **Esempio:** L'azienda Acme produce succo di mela in due diverse concentrazioni:
	- **Tipo 1:** un litro è composto da 30 parti di acqua e 2 parti di succo di mela concentrato;
	- **Tipo 2:** un litro è composto da 20 parti di acqua e 12 parti di succo di mela concentrato.

	Ogni giorno l'azienda dispone di 30000 parti d'acqua e di 3600 parti di concentrato.
	**Se l'azienda vuole usare tutta l'acqua e tutto il concentrato, quanti litri di ciascun tipo di succo deve produrre?**
- **Primo passo:** dobbiamo identificare le incognite (i.e., le variabili).
	$x_1$: litri di succo di tipo 1 prodotti ogni giorno.
	$x_2$: litri di succo di tipo 2 prodotti ogni giorno.

---
## Slide 55 – Ottimizzazione Vincolata

- **Secondo passo:** dobbiamo definire i **vincoli** (in forma di equazioni) a cui sono soggette le variabili $x_1$ e $x_2$ utilizzando tutte le informazioni fornite nel testo:
	- Le parti d'acqua complessivamente disponibili sono 30000. Per ogni litro di succo di tipo 1 se ne usano 30 e per ogni litro di succo di tipo 2 se ne usano 20:
$$30x_1 + 20x_2 = 30000$$
	- Le parti succo di mela concentrato complessivamente disponibili sono 3600. Per ogni litro di succo di tipo 1 se ne usano 2 e per ogni litro di succo di tipo 2 se ne usano 12:
$$2x_1 + 12x_2 = 3600$$

	Il sistema di equazioni lineari risultante è il seguente:
$$\begin{cases} 30x_1 + 20x_2 = 30000 \\ 2x_1 + 12x_2 = 3600 \end{cases}$$

---
## Slide 56 – Ottimizzazione Vincolata

- Per risolvere il sistema di equazioni lineari:
$$\begin{cases} 30x_1 + 20x_2 = 30000 \\ 2x_1 + 12x_2 = 3600 \end{cases}$$
possiamo iniziare svolgendo delle "***normalizzazioni***" dividendo il primo vincolo per 10 e il secondo per 2:
$$\begin{cases} 3x_1 + 2x_2 = 3000 \\ x_1 + 6x_2 = 1800 \end{cases}$$
- La soluzione è:
$$\begin{cases} x_2 = 150 \\ x_1 = 900 \end{cases}$$
che possiamo "*leggere*" come segue:
	- In un giorno devono essere prodotti 900 litri di succo di tipo 1;
	- In un giorno devono essere prodotti 150 litri di succo di tipo 2.

>> Passaggio: dalla seconda $x_1 = 1800 - 6x_2$; sostituendo nella prima $3(1800 - 6x_2) + 2x_2 = 3000 \Rightarrow 5400 - 16x_2 = 3000 \Rightarrow x_2 = 150$, quindi $x_1 = 1800 - 900 = 900$.

---
## Slide 57 – Ottimizzazione Vincolata

- **Cosa sarebbe accaduto se avessimo ammesso la possibilità di non consumare tutta l'acqua e tutto il succo di mela concentrato?**
- Il sistema di equazioni sarebbe diventato un sistema di disequazioni:
$$\begin{cases} 30x_1 + 20x_2 \le 30000 \\ 2x_1 + 12x_2 \le 3600 \end{cases}$$
- Il sistema di disequazioni:
$$\begin{cases} 30x_1 + 20x_2 \le 30000 \\ 2x_1 + 12x_2 \le 3600 \end{cases}$$
Richiede l'ulteriore vincolo di "**non negatività**" delle variabili $x_1$ e $x_2$, $x_1 \ge 0$ e $x_2 \ge 0$. Perché?
- Come lo si risolve?

>> Senza non negatività, valori negativi (es. $x_1 = -1000$) soddisferebbero le disequazioni pur non avendo senso fisico: non si possono produrre litri negativi. Con le equazioni questo problema non emergeva perché la soluzione era unica e già positiva.

---
## Slide 58 – Ottimizzazione Vincolata

- Le **operazioni elementari** utilizzate per risolvere i sistemi lineari possono essere usate per un **sistema di disequazioni**?
	La risposta è **NO**.
- Può essere trasformato in un sistema di equazioni aggiungendo delle "**variabili di scarto**" $s_1$ e $s_2$:
$$\begin{cases} 30x_1 + 20x_2 + s_1 = 30000 \\ 2x_1 + 12x_2 + s_2 = 3600 \end{cases}$$
Anche per le variabili di scarto $s_1$ e $s_2$ è necessario il vincolo di non negatività, $s_1 \ge 0$ e $s_2 \ge 0$. **Perché?**
- **Ma i vincoli di non negatività non complicano le cose?**
	La risposta è **NO**.

>> Ad esempio, moltiplicare una disequazione per un numero negativo ne inverte il verso, e sommare/sottrarre disequazioni non preserva l'insieme delle soluzioni come accade per le equazioni.
>> La variabile di scarto misura la risorsa non utilizzata: $s_1 = 30000 - 30x_1 - 20x_2$. Imporre $s_1 \ge 0$ equivale esattamente a imporre il vincolo originale $30x_1 + 20x_2 \le 30000$; se $s_1$ potesse essere negativa, il vincolo sarebbe violato.
>> Il metodo del simplesso gestisce la non negatività in modo naturale, perché lavora solo su soluzioni con tutte le variabili $\ge 0$.

---
## Slide 59 – Ottimizzazione Vincolata

- Il sistema di disequazioni:
$$\begin{cases} 30x_1 + 20x_2 \le 30000 \\ 2x_1 + 12x_2 \le 3600 \\ x_1 \ge 0 \\ x_2 \ge 0 \end{cases}$$

![[RO02-s059-1.png|500]]

>> La regione ammissibile è il quadrilatero di vertici $(0,0)$, $(1000,0)$, $(900,150)$, $(0,300)$: la retta ripida è $30x_1 + 20x_2 = 30000$ (intercette $1000$ e $1500$), quella poco inclinata è $2x_1 + 12x_2 = 3600$ (intercette $1800$ e $300$). La soluzione del sistema di equazioni è il vertice in cui le due rette si incontrano. Quindi ottengo un numero infinito di soluzioni.

---
## Slide 60 – Ottimizzazione Vincolata

- Il sistema di disequazioni definisce l'insieme delle "**soluzioni ammissibili**" del problema, che chiameremo "**Regione Ammissibile**".
- In altri termini, tutti i punti (soluzioni) della regione ammissibile soddisfano i vincoli del problema.
- Potremo stabilire un criterio per decidere quale punto della regione ammissibile scegliere.
- Per esempio, se associamo al succo di mela di tipo 1 e tipo 2 due profitti diversi, allora potremo pensare di scegliere la soluzione ammissibile che massimizza il profitto.
- Questo ambito è noto come "**Programmazione Matematica**".
- **Quali sono gli strumenti matematici necessari per affrontare questo argomento?**

>> Strumenti principali: algebra lineare (sistemi lineari, eliminazione di Gauss-Jordan, rango, basi), geometria dei poliedri convessi (vertici, direzioni), analisi (convessità, gradienti) e teoria della dualità.

---
## Slide 61 – Ottimizzazione Vincolata

- Se ipotizziamo che il profitto per ogni litro di succo di mela di tipo 1 è 0.25 Euro e per quello di tipo 2 è 0.75, il corrispondente problema di "***programmazione lineare***" si potrebbe scrivere come segue:

$$\begin{aligned} z = \text{Max}\ & 0.25x_1 + 0.75x_2 && \leftarrow \textit{Funzione Obiettivo} \\ \text{tale che:}\ & \\ & 30x_1 + 20x_2 \le 30000 \\ & 2x_1 + 12x_2 \le 3600 && \leftarrow \textit{Vincoli} \\ & x_1 \ge 0 \\ & x_2 \ge 0 \end{aligned}$$

- Per risolvere i problemi di programmazione lineare possono essere applicati numerosi algoritmi. Il più noto è il ***Metodo del Simplesso***.
- Il "***metodo del simplesso formato tableau***" usa le operazioni elementari come quelle usate per la soluzione dei sistemi lineari, per esempio, dal Metodo di Eliminazione di Gauss-Jordan.

---
## Slide 62 – Ottimizzazione Vincolata

- La ***soluzione ottima*** del problema di programmazione lineare è $(x_1, x_2) = (900,150)$, dove la funzione obiettivo è $z = 337.5$:
$$z = \text{Max}\ 0.25x_1 + 0.75x_2 = 337.5$$
Perché?

![[RO02-s062-1.png|450]]

>> Per il teorema fondamentale della PL, se esiste un ottimo finito almeno un vertice della regione ammissibile è ottimo. Valutando $z$ sui vertici: $z(0,0) = 0$, $z(1000,0) = 250$, $z(0,300) = 225$, $z(900,150) = 225 + 112.5 = 337.5$. Il massimo è quindi in $(900,150)$.
>> Geometricamente: le rette di livello $0.25x_1 + 0.75x_2 = k$ traslate nella direzione del gradiente $(0.25, 0.75)$ lasciano la regione per ultimo in quel vertice.

---
## Slide 63 – Ottimizzazione Vincolata

**Esempio: Problema di produzione**
- Come possiamo generalizzare il modello per un generico problema in cui un'azienda deve produrre $n$ prodotti con a disposizione $m$ materie prime in un dato orizzonte temporale?
- Ogni prodotto $i$ ha una ricetta che indica per ogni materia prima $j$ la quantità $a_{ij}$ da utilizzare per produrre una unità.
- Ogni unità di prodotto $i$ genera un profitto $p_i$ e la disponibilità di ogni materia prima $j$ è pari a $b_j$.
- Se vogliamo trovare le quantità di prodotto che dobbiamo produrre per **massimizzare il profitto**, come possiamo scrivere un modello di programmazione lineare?
- Quali sono i parametri e quali sono le variabili?
- Come costruisco la funzione obiettivo e i vincoli?

---
## Slide 64 – Ottimizzazione Vincolata

- Per ogni prodotto $i$ definiamo una variabile decisionale $x_i$ che indica le unità prodotte.
- Il corrispondente problema di "***programmazione lineare***" si potrebbe scrivere come segue:
$$\begin{aligned} z = \max\ & \sum_{i=1}^{n} p_i x_i \\ s.t.\ & \sum_{i=1}^{n} a_{ij} x_i \le b_j, && j = 1, \dots, m \\ & x_i \ge 0, && i = 1, \dots, n \end{aligned}$$
- Per ogni istanza dobbiamo definire i parametri $p_i$, $a_{ij}$ e $b_j$.
- La soluzione è data dai valori $x_i$.
- Il problema di programmazione lineare continua è "facile".

>> "Facile" nel senso della complessità computazionale: la PL continua è risolubile in tempo polinomiale (metodo dell'ellissoide, metodi a punto interno); il simplesso, pur esponenziale nel caso peggiore, è molto efficiente in pratica.
>> L'esempio Acme è il caso $n = 2$, $m = 2$ con $p = (0.25, 0.75)$, $b = (30000, 3600)$, $a_{11} = 30$, $a_{12} = 2$, $a_{21} = 20$, $a_{22} = 12$.

---
## Slide 65 – Modelli Matematici per l'Ottimizzazione

- Il primo passo per determinare l'algoritmo di ottimizzazione per un problema consiste nel definire il modello matematico.
- Un modello matematico si può rappresentare come segue:
$$(P) \qquad \begin{aligned} z_P = \min\ & f(\mathbf{x}) \\ s.t.\ & g_i(\mathbf{x}) \le b_i, && i = 1, \dots, n \\ & h_j(\mathbf{x}) = d_j, && j = 1, \dots, m \\ & \mathbf{x} \ge \mathbf{0} \end{aligned}$$
- La funzione $f(\mathbf{x})$ è detta funzione obiettivo, le espressioni $g_i(\mathbf{x}) \le b_i$ e $h_j(\mathbf{x}) = d_j$ rappresentano i vincoli e $\mathbf{x} = (x_1, \dots, x_\ell)$ sono le variabili.
- L'espressione $\mathbf{x} \ge \mathbf{0}$ rappresenta i vincoli di non negatività.
- Se le funzioni $f(\mathbf{x})$, $g_i(\mathbf{x}) \le b_i$ e $h_j(\mathbf{x}) = d_j$ sono lineari parliamo di **programmazione lineare continua**.

>> Un problema di massimo si riconduce a uno di minimo: $\max f(\mathbf{x}) = -\min\,(-f(\mathbf{x}))$. Per questo basta studiare una sola delle due forme. stessa cosa con $>$ che si riconduce sempre al $<$.

---
## Slide 66 – Modelli Matematici per l'Ottimizzazione

- Se abbiamo il vincolo aggiuntivo che la soluzione $\mathbf{x}$ debba avere le componenti intere, allora parliamo di **programmazione lineare intera**.
- Se solo alcune componenti di $\mathbf{x}$ devono essere intere, parliamo di **programmazione lineare mista intera**.
- Dato un problema di programmazione lineare $P$ di "*minimo*", un valido **lower bound** $z_{LB}$ è una stima per difetto del valore della soluzione ottima $z_P$ (i.e., $z_{LB} \le z_P$). Le procedure per calcolare i lower bound sono dette **procedure di bounding**.
- Dato un problema di programmazione lineare $P$ di "*minimo*", una soluzione ammissibile corrisponde a un valido **upper bound** $z_{UB}$ ed è, quindi, una stima per eccesso del valore della soluzione ottima $z_P$ (i.e., $z_P \le z_{UB}$). Le procedure per calcolare soluzioni ammissibili sono dette **euristici**.

>> Si ha quindi $z_{LB} \le z_P \le z_{UB}$. Il gap $z_{UB} - z_{LB}$ misura quanto, al massimo, la soluzione euristica può distare dall'ottimo: se il gap è zero la soluzione euristica è ottima. Un lower bound tipico è il valore del **rilassamento continuo** (si eliminano i vincoli di interezza).
>> Per un problema di *massimo* i ruoli si invertono: una soluzione ammissibile dà un lower bound e le procedure di bounding forniscono upper bound.

---
## Slide 67 – Modelli Matematici per l'Ottimizzazione

![[RO02-s067-1.png|600]]

---
## Slide 68 – Modelli Matematici per l'Ottimizzazione

![[RO02-s068-1.png|600]]

>> Le due slide dicono la stessa cosa a ruoli invertiti: chi produce il bound "facile" cambia a seconda del verso dell'ottimizzazione. In un problema di **minimo** una soluzione ammissibile qualsiasi è già un upper bound, mentre il lower bound va costruito (di solito con un rilassamento); in un problema di **massimo** succede il contrario. In entrambi i casi vale $z_{LB} \le z_P \le z_{UB}$ e la distanza $z_{UB}-z_{LB}$ (il *gap*) certifica quanto si è lontani dall'ottimo: gap nullo significa soluzione ottima.

---
## Slide 69 – Modelli Matematici per l'Ottimizzazione

- Dato un problema di programmazione lineare $P$, un **algoritmo esatto** "garantisce" (compatibilmente con le risorse di memoria e tempo calcolo disponibili) la determinazione della soluzione ottima di $P$.
- Per capire che cosa sono gli algoritmi di bounding, euristiche ed esatti, consideriamo l'esempio del **problema dello zaino** (**Knapsack Problem**).

---
## Slide 70 – Knapsack Problem

- Il problema del knapsack (i.e., "dello zaino") consiste nel determinare quale degli $n$ oggetti di peso $w_i$ e profitto $p_i$ devono essere inseriti nel knapsack di capacità $W$, per massimizzare il profitto complessivo.
- Se si ipotizza che per ogni oggetto si ha una sola copia, allora si parla del problema del knapsack (0–1).
- **E' un problema facile o difficile?**
- **Come si risolve?**
- Considerate la seguente istanza:
	- $n = 4$ e $W = 10$
	- $w_1 = 6, w_2 = 4, w_3 = 5, w_4 = 2$.
	- $p_1 = 12, p_2 = 4, p_3 = 15, p_4 = 3$.

	Qual è la soluzione ottima?

>> Il knapsack 0–1 è NP-difficile, ma solo in senso debole: la programmazione dinamica lo risolve in tempo pseudo-polinomiale $O(nW)$. Con $n$ oggetti i sottoinsiemi possibili sono $2^n$ (qui $2^4 = 16$), quindi per istanze piccole si può enumerare tutto.
>> Sottoinsiemi ammissibili migliori: $\{2,3\}$ (peso 9, profitto 19), $\{3,4\}$ (peso 7, profitto 18), $\{1,2\}$ (peso 10, profitto 16), $\{1,4\}$ (peso 8, profitto 15). L'ottimo è $\{2,3\}$ con profitto 19.

---
## Slide 71 – Knapsack Problem

![[RO02-s071-1.png|600]]

(Figura: "0–1 Knapsack Problem: rappresentazione a segmenti" – "Quali oggetti conviene selezionare?". Oggetti disponibili ($n = 4$): Oggetto 1 $p_1 = 12$, $w_1 = 6$; Oggetto 2 $p_2 = 4$, $w_2 = 4$; Oggetto 3 $p_3 = 15$, $w_3 = 5$; Oggetto 4 $p_4 = 3$, $w_4 = 2$. Contenitore: capacità $W = 10$; Peso $\le 10$, Profitto $\to$ max.)

---
## Slide 72 – Knapsack Problem

![[RO02-s072-1.png|600]]

(Figura: "0–1 Knapsack Problem: rappresentazione a segmenti" – "La lunghezza di ogni segmento rappresenta il peso dell'oggetto". Oggetti 2 e 3 selezionati, oggetti 1 e 4 non selezionati. Contenitore: capacità $W = 10$, riempito con Oggetto 2 · $w_2=4$ · $p_2=4$ e Oggetto 3 · $w_3=5$ · $p_3=15$, 1 unità libera. Soluzione ottima: $\{2, 3\}$; Peso: $9 \le 10$; Profitto: 19.)

---
## Slide 73 – Knapsack Problem

- Il problema del knapsack può essere modellato matematicamente (formulato) come segue:
$$\begin{aligned} \max z_{KP} = & \sum_{i=1}^{n} p_i x_i \\ s.t.\ & \sum_{i=1}^{n} w_i x_i \le W \\ & x_i \in \{0,1\}, \qquad i = 1, \dots, n \end{aligned}$$
- Che per la nostra istanza di esempio diventa:
$$\begin{aligned} \max z_{KP} = &\ 12x_1 + 4x_2 + 15x_3 + 3x_4 \\ s.t.\ &\ 6x_1 + 4x_2 + 5x_3 + 2x_4 \le 10 \\ &\ x_1, x_2, x_3, x_4 \in \{0,1\} \end{aligned}$$
- Come faccio a scegliere gli oggetti di peso complessivo minore o uguale di 10 che massimizzano il profitto?

>> $x_i = 1$ significa "l'oggetto $i$ è nello zaino", $x_i = 0$ "non c'è". È un problema di programmazione lineare intera (binaria): la soluzione ottima $\{2,3\}$ corrisponde a $\mathbf{x}^* = (0, 1, 1, 0)$ con $z_{KP} = 19$.

---
## Slide 74 – Knapsack Problem

- Calcoliamo per ogni oggetto $i$ il suo profitto per unità di capacità:
$$r_i = \frac{p_i}{w_i}$$
- L'oggetto che ha il valore $r_i$ più alto è quello che ci fa guadagnare di più per ogni unità di capacità impiegata.
- Per cui, potremo ordinare gli oggetti per valori di $r_i$ decrescenti:
$$r_3 = \frac{15}{5} = 3, \qquad r_1 = \frac{12}{6} = 2, \qquad r_4 = \frac{3}{2} = 1.5, \qquad r_2 = \frac{4}{4} = 1$$
- Se inseriamo nel knapsack il primo oggetto della lista ordinata (il 3) otteniamo un profitto di $p_3 = 15$ e occupiamo $w_3 = 5$ unità di peso.
- Il secondo più conveniente è l'oggetto 1, ma siccome pesa 6 unità non ci sta nelle 5 unità residue.
- Cosa faccio?

>> Proseguendo con l'euristica greedy si scarta l'oggetto 1 e si passa ai successivi: entra l'oggetto 4 (peso residuo $5 - 2 = 3$), poi l'oggetto 2 non entra ($4 > 3$). Si ottiene $\{3,4\}$ con profitto 18: una soluzione ammissibile ma **non** ottima (l'ottimo è 19), cioè un lower bound per questo problema di massimo.
>> Se invece si potesse prendere una frazione dell'oggetto 1 (rilassamento continuo), si inserirebbero $5/6$ dell'oggetto 1: $15 + \frac{5}{6}\cdot 12 = 25$, che è un upper bound valido: $18 \le 19 \le 25$.

---
## Slide 75 – Knapsack Problem

- Se l'oggetto 1 fosse divisibile (per esempio, è una partita di grano) posso prenderne solo la frazione che ci sta (5 unità su 6) ottenendo l'occupazione di tutto il knapsack con il profitto "**ottimo**" pari a:

$$z'_{KP} = 12x_1 + 4x_2 + 15x_3 + 3x_4 = 12 \times \frac{5}{6} + 0 + 15 \times 1 + 0 = 25$$

- Se però gli oggetti non sono divisibili, allora il valore $z'_{KP} = 25$ è solo una **stima per eccesso** (**upper bound**) al valore della soluzione ottima.
- Potevamo scegliere di inserire il primo oggetto più conveniente tra i rimanenti che ci stava. Sarebbe stato il 4, ottenendo una soluzione di profitto $z''_{KP} = p_3 + p_4 = 18$ e che occupa $w_3 + w_4 = 7$ unità di peso.
- Quella ottenuta è una soluzione ammissibile del problema e $z''_{KP}$ è una **stima per difetto** (**lower bound**) al valore della soluzione ottima.
- Ora sappiamo che il valore della soluzione ottima è compreso tra 18 e 25. Ma come possiamo determinare la soluzione ottima?

>> Intuizione: l'upper bound viene da un problema "più facile e più permissivo" (si possono frazionare gli oggetti), quindi il suo ottimo non può essere peggiore di quello intero; il lower bound viene da una qualsiasi soluzione ammissibile, che non può essere migliore dell'ottimo. L'ottimo $z^*$ è quindi "stretto" tra i due: $18 \le z^* \le 25$.
>> Poiché i profitti sono interi, si potrebbe anche arrotondare l'upper bound per difetto: $z^* \le \lfloor 25 \rfloor = 25$ (qui già intero).

---
## Slide 76 – Knapsack Problem

- Il problema in cui ammettiamo anche una soluzione frazionaria, è detto **rilassamento lineare** (sostituiamo $x_i \in \{0,1\}$ con $0 \le x_i \le 1$).
- Quando risolviamo il rilassamento lineare del problema del knapsack abbiamo **sempre** una soluzione in cui avremo **al più una sola variabile frazionaria**, che chiameremo "**splitting item**".
- Se la soluzione è intera, allora non potremo mai trovare una soluzione migliore.
- Nel caso una variabile $x_i$ sia frazionaria, allora possiamo generare due nuovi problemi e la soluzione ottima sarà la migliore delle due:
	- Un problema in cui **si impone l'oggetto $i$ in soluzione**: $x_i = 1$.
	- Un problema in cui **si vieta l'oggetto $i$ in soluzione**: $x_i = 0$.
- A loro volta i nuovi problemi possono generare soluzioni frazionarie, quindi a loro volta genereranno due nuovi problemi.

>> Perché al più una variabile frazionaria? Il rilassamento lineare si risolve in modo greedy: si ordinano gli oggetti per rapporto $r_i = p_i/w_i$ decrescente e si inseriscono interi finché ci stanno; il primo oggetto che non ci sta per intero (lo splitting item) viene preso solo per la frazione di capacità residua, e tutti i successivi restano a 0.
>> Se la soluzione del rilassamento è intera, essa è ammissibile per il problema originale e ha valore pari all'upper bound: dunque è ottima.

---
## Slide 77 – Knapsack Problem

- L'approccio appena descritto è noto come **<u>branch and bound</u>**.

![[RO02-s077-1.png]]

- Quando in un nodo dell'**albero di ricerca** (**tree search**) la soluzione è intera ci fermiamo e se migliora la soluzione ottima emergente la sostituisce.

>> "Branch" = suddividere il problema in sottoproblemi fissando una variabile (qui $x_1=1$ / $x_1=0$, poi $x_2=1$ / $x_2=0$ nel nodo 2); "bound" = usare il valore del rilassamento lineare di ciascun nodo come upper bound per decidere se vale la pena esplorarlo.
>> La "soluzione ottima emergente" (incumbent) è la migliore soluzione intera trovata finora: fornisce il lower bound corrente.

---
## Slide 78 – Knapsack Problem

- L'**upper bound** calcolato per ciascun nodo è utilizzato anche per:
	- **Eliminare i nodi** che sicuramente non conducono alla soluzione ottima (**se l'upper bound è minore del lower bound**).
	- **Scegliere il nodo da espandere** (esistono strategie alternative).
- Il problema del knapsack corrisponde a molti problemi reali o a loro approssimazioni. Esistono varianti del problema del knapsack.
- Molti modelli e algoritmi per risolvere altri problemi decisionali hanno il problema del knapsack come sottoproblema.
- Quando tutti gli oggetti hanno i profitti $p_i$ uguali ai pesi $w_i$, allora tutti i rapporti $r_i$ sono uguali a 1 e il branch and bound è poco efficiente.
- Per risolvere il problema del knapsack esistono anche altri algoritmi alternativi.
- Una delle alternative più efficienti è la **programmazione dinamica**.

>> Strategie tipiche di scelta del nodo: *best-first* (si espande il nodo con upper bound più alto, tende a esplorare meno nodi) e *depth-first* (si scende in profondità, trova presto soluzioni intere e usa poca memoria).
>> Nel caso $p_i = w_i$ (subset-sum) l'upper bound del rilassamento vale quasi sempre esattamente $W$: non discrimina tra i nodi e quasi nessun nodo viene potato.

---
## Slide 79 – Knapsack Problem

- La **<u>Programmazione Dinamica</u>** per risolve il problema del knapsack (0–1) prevede $n$ stadi (quanti sono gli oggetti) e ad ogni stadio un numero di stati pari a $W$ (la capacità del knapsack).
- Ad ogni stadio $j \in \{1, \dots, n\}$ e per ogni stato $w \in \{0, \dots, W\}$ si risolve il seguente sottoproblema:

$$\big(KP_j(w)\big) \quad \begin{aligned} z_j(w) = \max\ & \sum_{i=1}^{j} p_i x_i \\ s.t.\ & \sum_{i=1}^{j} w_i x_i \le w \\ & x_i \in \{0,1\}, \qquad i = 1, \dots, j \end{aligned}$$

- La Programmazione Dinamica di fatto è una enumerazione parziale delle soluzioni (i.e., considera solo un sottoinsieme delle soluzioni), tra le quali però c'è quella ottima.

>> In parole: $z_j(w)$ è il massimo profitto ottenibile usando solo i primi $j$ oggetti e un knapsack di capacità $w$. La risposta al problema originale è $z_n(W)$. Gli stati sono in realtà $W+1$ (da $0$ a $W$).

---
## Slide 80 – Knapsack Problem

- Risolvere per ogni stato $w$ dello stadio $j$ i problemi $KP_j(w)$ equivale a utilizzare la seguente recursione:
	- (a) Inizializza $KP_0(w) = 0$, per ogni $w \in \{0, \dots, W\}$;
	- (b) Ad ogni stadio $j \in \{1, \dots, n\}$ e per ogni stato $w \in \{0, \dots, W\}$, calcola la seguente recursione:

$$z_j(w) = \begin{cases} z_{j-1}(w), & \text{se } w < w_j \\ \max\{z_{j-1}(w),\ z_{j-1}(w - w_j) + p_j\}, & \text{se } w \ge w_j \end{cases}$$

- L'algoritmo di programmazione dinamica qui proposto ha complessità $O(nW)$. Quindi si dice che è "==pseudopolinomiale==".
- Un algoritmo di programmazione dinamica alternativo per il knapsack (0–1) poteva essere ottenuto definendo uno stadio per ogni $w \in \{0, \dots, W\}$ e uno stato per ogni $j \in \{1, \dots, n\}$.

>> Significato della recursione: con l'oggetto $j$ ho due scelte. Se non lo prendo, il meglio è $z_{j-1}(w)$; se lo prendo (possibile solo se $w \ge w_j$), guadagno $p_j$ e mi resta capacità $w - w_j$ per i primi $j-1$ oggetti.
>> "Pseudopolinomiale": $O(nW)$ è polinomiale nel *valore* di $W$, ma non nella lunghezza del suo input, che è $O(\log W)$ bit. Se $W$ è enorme (es. $10^{15}$) l'algoritmo diventa impraticabile.
>> Esempio minimo: oggetti $(p,w) = (3,2), (4,3)$, $W=4$. Stadio 1: $z_1 = [0,0,3,3,3]$ per $w=0..4$. Stadio 2: $z_2(3) = \max\{3, z_1(0)+4\} = 4$, $z_2(4) = \max\{3, z_1(1)+4\} = 4$. Ottimo $z_2(4) = 4$ (i due oggetti insieme pesano 5 e non ci stanno).

---
## Slide 81 – Travelling Salesman Problem

- Consideriamo il problema di un autista che deve fare delle consegne visitando una e una sola volta ciascun cliente (**cosa significa?**).
- Possiamo rappresentare il problema utilizzando un **grafo orientato** $G = (V, A)$, dove $V$ è l'insieme dei vertici e $A$ è l'insieme degli archi.
- I **vertici $i \in V$** rappresentano i **clienti** da visitare e il deposito da cui partire e rientrare.
- Gli **archi $(i, j) \in A$** rappresentano il **tragitto** dal vertice $i$ al vertice $j$, a cui è associato un **costo $c_{ij}$** (e.g., i chilometri da percorrere, il tempo di guida, etc.). Per semplicità consideriamo il grafo completo (cosa significa?).
- Si noti che in genere si ha che $c_{ij} \ne c_{ji}$ (**perché?**), per cui parleremo di **Asymmetric Travelling Salesman Problem** (ATSP, Problema del Commesso Viaggiatore Asimmetrico).

>> Risposte alle domande: "una e una sola volta" significa che la soluzione è un **ciclo hamiltoniano**, cioè un circuito che passa per ogni vertice esattamente una volta e torna al punto di partenza. Il grafo è **completo** se esiste un arco tra ogni coppia ordinata di vertici distinti ($|A| = |V|(|V|-1)$). In genere $c_{ij} \ne c_{ji}$ per sensi unici, pendenze, traffico diverso nei due sensi, ecc.

---
## Slide 82 – Travelling Salesman Problem

![[RO02-s082-1.png|500]]

- **Grafo e soluzione del TSP**: ogni vertice viene visitato esattamente una volta, con ritorno al vertice iniziale. (Legenda: altri archi / tour TSP)

>> Il tour evidenziato è A → B → C → D → E → F → G → A: 7 vertici, 7 archi, un unico ciclo.

---
## Slide 83 – Travelling Salesman Problem

- Siano $x_{ij}$ delle variabili binarie che sono uguali a 1 se l'arco $(i, j)$ è nella soluzione ottima, 0 altrimenti.
- Un modello molto noto per il TSP asimmetrico è il seguente:

$$\begin{aligned} \min\ z_{TSP} = & \sum_{(i,j) \in A} c_{ij} x_{ij} \\ s.t.\ & \sum_{j \in V} x_{ij} = 1, && i \in V \\ & \sum_{j \in V} x_{ji} = 1, && i \in V \\ & \sum_{i \in S} \sum_{j \in S'} x_{ij} \ge 1, && \forall S \subset V,\ S' = V \setminus S \\ & x_{ij} \in \{0,1\}, && (i,j) \in A \end{aligned}$$

- I vincoli evidenziati (funzione obiettivo, i due vincoli di grado e i vincoli di interezza) costituiscono il **Problema dell'assegnamento** -> problema semplice (polinomiale), se viene risolto con rilassamento continuo la soluzione viene sempre intera.

>> Lettura dei vincoli: il primo impone che da ogni vertice esca esattamente un arco, il secondo che in ogni vertice entri esattamente un arco. Il terzo (per ogni sottoinsieme proprio e non vuoto $S$) impone che almeno un arco "esca" da $S$ verso il resto del grafo: il tour deve essere connesso.

---
## Slide 84 – Travelling Salesman Problem

![[RO02-s084-1.png|500]]

- **Soluzione con subtour**: ogni vertice ha grado 2, ma la soluzione è formata da due cicli disgiunti. (Legenda: archi non scelti / subtour)

>> Questa soluzione soddisfa i vincoli di assegnamento (un arco entrante e uno uscente per vertice) ma è composta da Subtour 1 = {A, B, G} e Subtour 2 = {C, D, E, F}. Il vincolo con $S = \{A, B, G\}$ è violato: nessun arco va da $S$ a $S' = \{C, D, E, F\}$, quindi $\sum_{i \in S}\sum_{j \in S'} x_{ij} = 0 < 1$.

---
## Slide 85 – Travelling Salesman Problem

- I vincoli $\sum_{i \in S} \sum_{j \in S'} x_{ij} \ge 1, \forall S \subset V, S' = V \setminus S$, sono detti ==**subtour elimination**==, perché eliminano i sottocicli e possono essere definiti anche in modo diverso.
- L'insieme degli archi $A(S, S') = \{(i, j) \in A : i \in S, j \in S'\}$ è detto **taglio** determinato dagli insiemi $S$ e $S'$.
- I vincoli per eliminare i cicli sono in un numero esponenziale, per cui si può risolvere il **problema dell'assegnamento** ottenuto ignorando questi vincoli (la soluzione sarà sicuramente intera… perché?).
- Una volta risolto il problema dell'assegnamento, basta **identificare se esiste un sottociclo**. I vertici visitati dal sottociclo rappresentano un insieme $S$ il cui corrispondente vincolo è violato.
- **Si aggiunge il vincolo e si riottimizza il problema**, che ora non è più un semplice assegnamento e il suo rilassamento lineare può avere soluzioni frazionarie.

>> Formulazione alternativa (Dantzig-Fulkerson-Johnson): $\sum_{i \in S}\sum_{j \in S} x_{ij} \le |S| - 1$ per ogni $S \subset V$ con $2 \le |S| \le |V|-1$, cioè dentro $S$ non si possono scegliere tanti archi da chiudere un ciclo.
>> Numero esponenziale: i sottoinsiemi di $V$ sono $2^{|V|}$ (esclusi $\emptyset$ e $V$, ne restano $2^{|V|}-2$).
>> Perché l'assegnamento ha soluzione intera: la sua matrice dei vincoli è quella di incidenza di un grafo bipartito, che è **totalmente unimodulare**; con termini noti interi tutti i vertici del poliedro sono interi, quindi il simplesso restituisce una soluzione intera.

---
## Slide 86 – Travelling Salesman Problem

- Anche **se le soluzioni sono frazionarie**, è possibile determinare se un vincolo di eliminazione dei cicli è stato violato e identificare l'insieme $S$ corrispondente.
- Purtroppo, anche per trovare l'ottimo del rilassamento lineare della formulazione **può essere necessario generare molti vincoli**.
- Inoltre, la soluzione del rilassamento continuo può essere molto frazionaria e può avere un **valore molto distante dal valore della soluzione ottima intera**.
- Per cui, è necessario aggiungere anche altri vincoli (**disuguaglianze valide**) ridondanti nella formulazione intera originaria, ma che eliminano molte soluzioni frazionarie.
- Se aggiungiamo disuguaglianze valide durante la soluzione con un metodo branch and bound, diremo che stiamo usando un metodo **branch and cut**.

>> Con soluzioni frazionarie $x^*$ il problema di "separazione" si risolve con un taglio di capacità minima: si pesano gli archi con $x^*_{ij}$ e si cerca $S$ con $\sum_{i\in S}\sum_{j\in S'} x^*_{ij}$ minimo; se questo minimo è $< 1$ si è trovato un vincolo violato. È un problema polinomiale (max-flow/min-cut).
>> Una disuguaglianza è "valida" se è soddisfatta da tutte le soluzioni intere ammissibili: non elimina nessuna soluzione intera, ma "taglia via" porzioni del poliedro rilassato, avvicinando il valore del rilassamento a quello intero.

---
## Slide 87 – Travelling Salesman Problem

- Gli strumenti matematici sviluppati hanno permesso la soluzione di TSP di enormi dimensioni:

![[RO02-s087-1.png|300]] ![[RO02-s087-2.png|320]]

*Istanza D15112 della TSPLIB, costituita da 15.112 vertici, risolta nel 2001 da David Applegate, Robert Bixby, Vašek Chvátal e William Cook.*

*Istanza SW24978, chiamata anche Sweden TSP, costituita da 24.978 vertici, risolta nel 2004 da Concorde TSP Solver, il solver LP di CPLEX e la metaeuristica LKH.*

>> Per dare un'idea: il numero di tour distinti di un TSP simmetrico con $n$ città è $(n-1)!/2$; già per $n = 25$ è circa $3 \cdot 10^{23}$. Risolvere all'ottimo istanze da decine di migliaia di vertici è possibile solo grazie a bound molto stretti (tagli) e non all'enumerazione.

---
## Slide 88 – Travelling Salesman Problem

Per l'istanza **World TSP**, costituita da 1.904.711 vertici, nel dicembre 2003 Keld Helsgaun ha trovato una soluzione con un costo distante al massimo lo 0.076% dal costo del tour ottimo (lo ha dimostrato utilizzando un lower bound fornito dal **Concorde TSP Solver**). Nel 2025 Yuichi Nagata ne ha trovata una distante al massimo lo 0.0471% dall'ottimo.

![[RO02-s088-1.png|600]]

>> Il "gap" si calcola come $(UB - LB)/LB$, dove $UB$ è il costo del tour trovato e $LB$ il lower bound: garantisce che il tour ottimo non può essere migliore di quella percentuale, anche senza conoscerlo.

---
## Slide 89 – Travelling Salesman Problem

- I risultati mostrati sono stati ottenuti con algoritmi di ottimizzazione "tradizionali" (programmazione lineare, euristiche e meta-euristiche)… **Come si comportano gli "altri" metodi dell'intelligenza artificiale?**

![[RO02-s089-1.png|570]]

| Instance | Iterations | Time (s) | Length | Quality |
|---|---|---|---|---|
| Qatar | 14690 | 14.3 | 10233.89 | 9.4% |
| Uruguay | 17351 | 23.4 | 85072.35 | **7.5%** |
| Finland | 37833 | 284.0 | 636580.27 | 22.3% |
| Italy | 39368 | 401.1 | 723212.87 | 29.7% |

**Fonte:** Using Self-Organizing Maps to solve the TSP (https://diego.codes/post/som-tsp/)

>> "Quality" è lo scostamento percentuale dall'ottimo, es. Qatar: $10233.89/9352 - 1 \approx 9.4\%$. Le reti neurali (SOM) danno tour con errori del 10–30%, mentre i metodi di ricerca operativa arrivano a scarti inferiori allo 0.1% su istanze molto più grandi.

---
## Slide 90 – <u>Metodi di soluzione</u>

- I problemi di **programmazione lineare (LP) continua** possono essere risolti con diverse tecniche:
	- Simplesso Primale;
	- Simplesso Duale;
	- Simplesso per le reti -> si applica ai flussi a costo minimo;
	- Metodo Barrier -> passano in mezzo al poliedro, partendo dalla zona ammissibile si garantisce di rimanere al suo interno (non li vediamo);
	- Etc...
- I problemi di **programmazione lineare intera o mista intera (PLI)** possono essere risolti utilizzando i seguenti algoritmi:
	- Branch & Bound;
	- Branch & Cut -> genero le variabili in modo dinamico;
	- Branch & Price (poco presente nel mondo commerciale);
	- Branch & Price & Cut;
	- Programmazione Dinamica;
	- Etc...

>> Il metodo Barrier è un metodo "a punti interni": invece di muoversi tra i vertici del poliedro come il simplesso, attraversa l'interno della regione ammissibile e ha complessità polinomiale. "Price" si riferisce alla generazione di colonne (variabili) aggiunte dinamicamente, così come "Cut" si riferisce all'aggiunta dinamica di vincoli.

---
## Slide 91 – Metodi di soluzione

- Per risolvere i problemi di **programmazione non-lineare**, si possono usare metodi come il Barrier, che in alcuni risolutori commerciali consente di trattare sia funzioni obiettivo che vincoli quadratici.
- I problemi di **programmazione quadratica intera o mista intera** possono essere risolti utilizzando metodi di tipo Branch & Bound.
- Esistono diversi **risolutori sia commerciali che open source** che permettono il loro impiego a vari livelli: console interattiva, librerie da integrare in software scritto in C, C++, JAVA, etc...
- I risolutori commerciali più noti sono: IBM Cplex, Gurobi, LINDO, FICO XPRESS, etc...
- I risolutori open source più noti sono: HiGHS, GLPK, SoPlex, Coin-OR (progetti CLP, CBC e BCP), etc...

---
## Slide 92 – Linguaggi di Modellazione

- I linguaggi di modellazione servono per descrivere un problema di ottimizzazione con un buon livello di astrazione e semplicità.
- Sarà compito del linguaggio di modellazione interfacciarsi con il solutore per caricare e risolvere il problema e per accedere ai dati e alle soluzioni.
- In alternativa all'uso dei linguaggi di modellazione si potrebbero utilizzare i seguenti approcci:
	- si preparano i dati in file di formato standard (e.g., LP, MPS, etc.), che poi vengono caricati nei risolutori per mezzo della "console" (che qualche risolutore mette a disposizione degli utenti).
	- si utilizzano le librerie di un solutore che vengono "linkate" con i linguaggi di programmazione (C, C++, JAVA, Python, etc.).
	- si utilizza uno spreadsheet in cui è integrato un risolutore (Excel).

>> Esempio in Python: librerie come Pyomo o PuLP permettono di scrivere il modello in modo simile a un linguaggio di modellazione e di passarlo a solutori diversi (HiGHS, CBC, Gurobi...).

---
## Slide 93 – Linguaggi di Modellazione

- Sul mercato esistono diversi linguaggi di modellazione: AMPL, OPL, GAMS, LINGO, etc.
- Tra i diversi linguaggi disponibili si è scelto di usare AMPL, che però non differisce molto dagli altri.
- AMPL si può interfacciare con numerosi risolutori.
- AMPL è una soluzione commerciale.
- Sul sito web **www.ampl.com** è disponibile una versione "studente" che può essere scaricata gratuitamente. Include anche alcuni solutori, che però hanno alcune limitazioni, in particolare nelle dimensioni dei problemi che possono risolvere.

---
## Slide 94 – Linguaggi di Modellazione

- Impariamo a usare AMPL utilizzando degli esempi.
- Consideriamo il seguente problema di programmazione lineare relativo a un'applicazione in ambito finanziario:

$$\begin{aligned} z = \text{Max}\ & 3x_1 + 4x_2 && \textit{Rendimento} \\ \text{tale che:}\ & \\ & x_1 + x_2 \le 100 && \textit{Capitale} \\ & 2x_1 + x_2 \le 150 && \textit{Rating medio} \\ & 3x_1 + 4x_2 \le 360 && \textit{Scadenza media} \\ & x_1, x_2 \ge 0 && \textit{Non negatività} \end{aligned}$$

- Il modello può essere inserito direttamente utilizzando la console "ampl" (eseguibile) richiamabile da linea di comando Linux digitando quanto segue:

```
./ampl
```

>> Attenzione: nella slide successiva il codice AMPL usa come obiettivo $4x_1 + 3x_2$ (non $3x_1 + 4x_2$). La soluzione $x_1 = x_2 = 50$ mostrata è ottima per $4x_1 + 3x_2$ (valore 350). Con $3x_1 + 4x_2$ l'obiettivo è parallelo al vincolo di scadenza: gli ottimi sono tutti i punti del segmento tra $(40, 60)$ e $(0, 90)$, con valore 360.

---
## Slide 95 – Linguaggi di Modellazione

- Per inserire il problema in AMPL dobbiamo fare quanto segue:

```
ampl: option solver "./cplex";
ampl: var X1;
ampl: var X2;
ampl: maximize yield: 4*X1 + 3*X2;
ampl: subject to cash: X1 + X2 <= 100;
ampl: subject to rating: 2*X1 + X2 <= 150;
ampl: subject to maturity: 3*X1 + 4*X2 <= 360;
ampl: subject to X1_limit: X1 >= 0;
ampl: subject to X2_limit: X2 >= 0;
ampl: solve;
...
ampl: display X1;
X1 = 50
ampl: display X2;
X2 = 50
```

>> Verifica: in $(50, 50)$ i vincoli cash ($100 \le 100$) e rating ($150 \le 150$) sono attivi, maturity no ($350 < 360$). I vincoli di non negatività si possono scrivere anche direttamente nella dichiarazione: `var X1 >= 0;`.

---
## Slide 96 – Linguaggi di Modellazione

- Invece di inserire il modello direttamente da console lo si può salvare su un file.
- Questo consente di salvare il lavoro fatto per poter riutilizzare e modificare il modello.
- Per esempio, possiamo salvare il modello nel file "bonds_opt.mod". Dopodiché, per risolverlo digiteremo quanto segue:

```
ampl: option solver "./cplex";
ampl: model bonds_opt.mod;
ampl: solve;
...
ampl: display X1;
X1 = 50
ampl: display X2;
X2 = 50
```

>> Nel file `bonds_opt.mod` vanno le stesse righe della slide precedente senza il prompt `ampl:` (dichiarazioni `var`, `maximize`, `subject to`).

---
## Slide 97 – Linguaggi di Modellazione

- Se ora si vuole generalizzare il modello dell'esempio precedente a più di due prodotti finanziari e con dati diversi.
- AMPL consente di separare il modello dai dati.
- Gli elementi fondamentali di un problema LP sono:

**Dati**
- **Insiemi:** liste di prodotti, risorse, etc.
- **Parametri:** input numerici come costi, consumo di risorse, etc.

**Modello**
- **Variabili:** valori che devono essere definiti dal risolutore.
- **Funzione obiettivo:** funzione delle variabili decisionali da minimizzare o massimizzare.
- **Vincoli:** funzioni delle variabili decisionali che devono rimanere entro certi limiti.

---
## Slide 98 – Linguaggi di Modellazione

- Possiamo salvare il modello generale nel file "bonds.mod":

```
set bonds; # bonds disponibili
param yield {bonds}; # rendimenti
param rating {bonds}; # ratings
param maturity {bonds}; # scadenze
param max_rating; # Massimo rating medio ammesso
param max_maturity; # Massima scadenza media ammessa
param max_cash; # Capitale massimo disponibile per l'investimento
var buy {bonds} >= 0; # Quantità da investire per ciascun prodotto contenuto nell'insieme bonds
maximize total_yield : sum {i in bonds} yield[i] * buy[i];
subject to cash_limit : sum {i in bonds} buy[i] <= max_cash;
subject to rating_limit :
sum {i in bonds} rating[i]*buy[i] <= max_rating;
subject to maturity_limit :
sum {i in bonds} maturity[i]*buy[i] <= max_maturity;
```

>> In forma matematica, con $B$ = insieme dei bond: $\max \sum_{i \in B} y_i x_i$ s.t. $\sum_{i\in B} x_i \le C$, $\sum_{i\in B} r_i x_i \le R$, $\sum_{i\in B} m_i x_i \le M$, $x_i \ge 0$. Il `#` introduce un commento.

---
## Slide 99 – Linguaggi di Modellazione

- Per una particolare istanza possiamo salvare il dati nel file "bonds.dat":

```
set bonds := A B;

param : yield rating maturity :=
    A         4       2       3
    B         3       1       4;

param max_cash := 100;
param max_rating := 150;
param max_maturity := 360;
```

>> La sintassi `param : yield rating maturity :=` permette di definire più parametri indicizzati sullo stesso insieme in un'unica tabella: ogni riga è un elemento di `bonds`, ogni colonna un parametro. Con questi dati si ritrova esattamente il modello delle slide 93–94 (A ↔ X1, B ↔ X2).

---
## Slide 100 – Linguaggi di Modellazione

- Per risolvere il modello definito nel file "bonds.mod" con i dati salvati nel file "bonds.dat" basta digitare quanto segue dalla console:

```
ampl: model bonds.mod;
ampl: data bonds.dat;
ampl: solve;
...
ampl: display buy;
buy [*] :=
A 50
B 50
```

---
## Slide 101 – Linguaggi di Modellazione

- Si possono anche modificare i dati direttamente da console:

```
ampl: reset data max_cash;
ampl: data;
ampl data: param max_cash := 150;
ampl data: param max_rating := 225;
ampl data: param max_maturity := 540;
ampl data: solve;
...
ampl: display buy;
buy [*] :=
A 45
B 105
```

>> Nota di verifica: con i dati `max_cash = 150`, `max_rating = 225`, `max_maturity = 540` (tutti i termini noti moltiplicati per 1.5) l'ottimo dell'LP è semplicemente quello precedente scalato: $A = 75$, $B = 75$, rendimento 525. La soluzione riportata $(45, 105)$ viola il vincolo di scadenza ($3 \cdot 45 + 4 \cdot 105 = 555 > 540$), quindi l'output va preso come illustrativo della sintassi.
>> Inoltre `reset data max_cash;` azzera solo `max_cash`: per ridefinire anche `max_rating` e `max_maturity` conviene usare `reset data max_cash, max_rating, max_maturity;` (oppure `update data`).

---
## Slide 102 – Linguaggi di Modellazione

- Si possono aggiungere nuovi prodotti (bonds) nell'istanza e salvare i dati nel file "bonds_ext.dat":

```
set bonds := A B C;
param : yield rating maturity :=
    A     4      2       3
    B     3      1      4
    C     5      3      2;
param max_cash := 100;
param max_rating := 150;
param max_maturity := 360;
```

>> Il file del modello `bonds.mod` non cambia: basta cambiare i dati. È proprio il vantaggio della separazione modello/dati.

---
## Slide 103 – Linguaggi di Modellazione

- Per risolvere la nuova istanza basterà ricaricare i dati:

```
ampl: reset data;
ampl: data bonds_ext.dat;
ampl: solve;
..
ampl: display buy;
buy [*] :=
A 0
B 85
C 15
```

>> Nota di verifica: con questi dati la soluzione $(0, 85, 15)$ viola il vincolo di scadenza ($4 \cdot 85 + 2 \cdot 15 = 370 > 360$). Risolvendo l'LP si ottiene $A = 50$, $B = 50$, $C = 0$ con rendimento 350: il bond C, pur rendendo 5, ha rating 3 e "consuma" troppo del vincolo sul rating medio. Anche qui l'output va preso come esempio di sintassi.

---
## Slide 104 – Linguaggi di Modellazione

- Nella programmazione lineare abbiamo a disposizione un ulteriore strumento: le **variabili duali** (shadow prices).
- Consideriamo il seguente problema di produzione:

```
ampl: var X1;
ampl: var X2;
ampl: maximize profit: 3*X1 + 3*X2;
ampl: subject to hours: 3*X1 + 4*X2 <= 120000;
ampl: subject to cash: 3*X1 + 2*X2 <= 90000;
ampl: subject to X1_limit: X1 >= 0;
ampl: subject to X2_limit: X2 >= 0;
ampl: solve;
...
ampl: display X1;
X1 = 20000
ampl: display X2;
X2 = 15000
```

>> Verifica: in $(20000, 15000)$ entrambi i vincoli sono attivi ($60000 + 60000 = 120000$ e $60000 + 30000 = 90000$); il profitto ottimo è $3 \cdot 35000 = 105000$.

---
## Slide 105 – Linguaggi di Modellazione

- Per visualizzare variabili duali ottime:

```
...
ampl: display hours, cash;
hours = 0.5
cash = 0.5
```

- La soluzione duale ci dice che aumentando le ore di lavorazione di 2000 unità si aumenterà il profitto di 2000 × 0.5 = 1000 Euro.
- Per cui potremo decidere di pagare fino a 0.50 Euro all'ora per il lavoro in più necessario per aumentare le ore di lavorazione disponibili.
- Inoltre, si può notare che la disponibilità di denaro e ore/uomo contribuiscono equamente al costo/profitto di ogni prodotto.

>> Da dove vengono i duali: con entrambi i vincoli attivi, i prezzi ombra $y_h, y_c$ risolvono $3y_h + 3y_c = 3$ (prodotto 1) e $4y_h + 2y_c = 3$ (prodotto 2), da cui $y_h = y_c = 0.5$. Per il teorema della dualità forte: $120000 \cdot 0.5 + 90000 \cdot 0.5 = 105000$, pari al profitto ottimo del primale.
>> Il prezzo ombra è valido solo finché la base ottima non cambia: aumentando le ore oltre una certa soglia (qui fino a 180000, dove $X_1$ si annullerebbe) il valore marginale cambia.

---
## Slide 106 – Linguaggi di Modellazione

**Esercizio 1**
- Un'azienda deve produrre $n$ prodotti con a disposizione $m$ materie prime in un dato orizzonte temporale (e.g., giorno, settimana, etc.).
- Ogni prodotto $i$ ha una ricetta che indica per ogni materia prima $j$ la quantità $a_{ij}$ da utilizzare per produrre una unità.
- Ogni unità di prodotto $i$ genera un profitto $p_i$ e la disponibilità di ogni materia prima $j$ è pari a $b_j$.
- Vogliamo trovare le quantità di prodotto che dobbiamo produrre per **massimizzare il profitto**.
- Usare AMPL per risolvere il problema.

---
## Slide 107 – Linguaggi di Modellazione

- Il corrispondente problema di "***programmazione lineare***" si potrebbe scrivere come segue:

$$\begin{aligned} z = \text{Max}\ & \sum_{i=1}^{n} p_i x_i \\ s.t.\ & \sum_{i=1}^{n} a_{ij} x_i \le b_j, && j = 1, \dots, m \\ & x_i \ge 0, && i = 1, \dots, n \end{aligned}$$

- I dati dell'istanza sono i seguenti:
	- Materie prime $m = 2$: $b_1 = 30000$ e $b_2 = 3600$
	- Prodotto $n = 2$:
		- $p_1 = 0{,}25$, $a_{11} = 30$, $a_{12} = 2$
		- $p_2 = 0{,}75$, $a_{21} = 20$, $a_{22} = 12$

>> Soluzione dell'istanza: $\max\ 0.25x_1 + 0.75x_2$ con $30x_1 + 20x_2 \le 30000$ e $2x_1 + 12x_2 \le 3600$. Intersecando i due vincoli attivi si ottiene $x_1 = 900$, $x_2 = 150$, profitto $z = 225 + 112.5 = 337.5$ (confrontare con i vertici $(1000, 0) \to 250$ e $(0, 300) \to 225$).

---
## Slide 108 – Linguaggi di Modellazione

- La soluzione prevede il modello definito nel file "esercizio1.mod" :

```
set prod; # prodotti
set raw; # materie prime disponibili
param profit {prod}; # profitti
param qnt {raw}; # quantita' materie prime disponibili
param recipe {prod,raw}; # ricetta
var x {prod} >= 0; # quantita' da produrre
maximize tot_prof : sum {i in prod} profit[i] * x[i];
subject to raw_limit {j in raw}: sum {i in prod}
recipe[i,j] * x[i] <= qnt[j];
```

>> `subject to raw_limit {j in raw}` definisce una *famiglia* di vincoli, uno per ogni materia prima: corrisponde a "$j = 1, \dots, m$" nella formulazione matematica.

---
## Slide 109 – Linguaggi di Modellazione

- La soluzione prevede i dati salvati nel file "esercizio1.dat" :

```
set prod := T1 T2;
set raw := water apple;
param : profit :=
    T1 0.25
    T2 0.75;
param : qnt :=
    water 30000
    apple   3600;
param recipe : water apple :=
    T1     30      2
    T2     20     12;
```

>> `param recipe : water apple :=` è la sintassi a tabella per un parametro a due indici: righe = elementi di `prod`, colonne = elementi di `raw`. Risolvendo si dovrebbe ottenere `x[T1] = 900`, `x[T2] = 150`, `tot_prof = 337.5`.

---
## Slide 110 – Linguaggi di Modellazione

**Esercizio 2**
- Un'azienda ha $n$ depositi e $m$ punti vendita.
- Da ogni deposito $i = 1, \dots, n$ deve trasferire $a_i$ unità di merce.
- A ogni punto vendita $j = 1, \dots, m$ devono arrivare $b_j$ unità di merce.
- Trasportare una unità di merce dal deposito $i$ al punto vendita $j$ costa $c_{ij}$.
- Vogliamo determinare come rifornire i punti vendita dai depositi **minimizzando il costo di trasporto**.
- Usare AMPL per risolvere il problema.

**Esercizio 3**
- Come cambia il problema e il modello dell'esercizio 2 se per essere abilitato a trasportare una qualche quantità di merce dal deposito $i$ al punto vendita $j$ bisogna pagare un costo fisso $f_{ij}$?

>> Traccia Esercizio 2 (problema del trasporto), con $x_{ij} \ge 0$ = quantità spedita da $i$ a $j$:
>> $$\min \sum_{i=1}^{n}\sum_{j=1}^{m} c_{ij}x_{ij} \quad s.t. \quad \sum_{j=1}^{m} x_{ij} = a_i\ (i=1,\dots,n), \quad \sum_{i=1}^{n} x_{ij} = b_j\ (j=1,\dots,m), \quad x_{ij} \ge 0$$
>> Il problema è ammissibile solo se $\sum_i a_i = \sum_j b_j$ (altrimenti si usano vincoli $\le$ / $\ge$).
>>
>> Traccia Esercizio 3 (trasporto con costi fissi): si aggiungono variabili binarie $y_{ij} \in \{0,1\}$ (1 se la tratta $i \to j$ è attivata), l'obiettivo diventa $\sum_{i,j}(c_{ij}x_{ij} + f_{ij}y_{ij})$ e si aggiungono i vincoli di collegamento $x_{ij} \le \min\{a_i, b_j\}\, y_{ij}$. Il problema diventa di programmazione lineare **mista intera** (non più un LP), da risolvere ad esempio con branch and bound.

---
## Slide 111 – Linguaggi di Modellazione

**Esercizio 2**

![[RO02-s111-1.png|500]]

*Problema dei trasporti* – Rappresentazione mediante un grafo bipartito orientato: $n$ ORIGINI (offerta disponibile $a_i$) e $m$ DESTINAZIONI (domanda richiesta $b_j$); ogni arco $(i,j)$ porta un flusso $x_{ij}$ con costo $c_{ij}$. -> se a e b sono interi si garantisce una soluzione intera

>> Il problema dei trasporti: $n$ depositi (origini) con disponibilità $a_i$ devono rifornire $m$ punti vendita (destinazioni) con richiesta $b_j$, minimizzando il costo totale di trasporto, dove spedire un'unità da $i$ a $j$ costa $c_{ij}$.

---
## Slide 112 – Linguaggi di Modellazione

- Il modello di "*programmazione lineare*" potrebbe essere il seguente:

$$
\begin{aligned}
z = \text{Min} \ & \sum_{i=1}^{n} \sum_{j=1}^{m} c_{ij} x_{ij} \\
s.t. \ & \sum_{j=1}^{m} x_{ij} = a_i, && i = 1, \dots, n \\
& \sum_{i=1}^{n} x_{ij} = b_j, && j = 1, \dots, m \\
& x_{ij} \ge 0, && i = 1, \dots, n, \ j = 1, \dots, m
\end{aligned}
$$

- In questo caso la soluzione è una matrice $n \times m$.
- Si noti che è necessario che $\sum_{i=1}^{n} a_i = \sum_{j=1}^{m} b_j$ (perché?). Come si risolve il problema se la condizione non è rispettata?

>> Perché: sommando i primi $n$ vincoli si ottiene $\sum_i\sum_j x_{ij} = \sum_i a_i$, sommando gli altri $m$ si ottiene $\sum_j\sum_i x_{ij} = \sum_j b_j$; il membro sinistro è lo stesso, quindi se le due somme differiscono il problema è non ammissibile.
>>
>> Come risolvere: se l'offerta supera la domanda ($\sum a_i > \sum b_j$) si aggiunge un punto vendita fittizio con domanda $\sum a_i - \sum b_j$ e costi nulli (rappresenta la merce che resta nei depositi); in alternativa si trasformano i vincoli dei depositi in $\le a_i$. Se la domanda supera l'offerta si aggiunge un deposito fittizio (eventualmente con costi pari a una penalità per domanda non soddisfatta), oppure si rendono $\le b_j$ i vincoli dei punti vendita.

---
## Slide 113 – Linguaggi di Modellazione

- I dati dell'istanza da risolvere sono i seguenti:
	- Depositi $n = 2$: $a_1 = 10$ e $a_2 = 15$
	- Punti vendita $m = 3$: $b_1 = 5$, $b_2 = 12$ e $b_3 = 8$
	- Costi trasporti:
		- Deposito 1: $c_{11} = 100$, $c_{12} = 300$, $c_{13} = 500$
		- Deposito 2: $c_{21} = 200$, $c_{22} = 400$, $c_{23} = 600$

>> Qui $\sum a_i = 25 = \sum b_j$, quindi l'istanza è bilanciata. Si noti che $c_{2j} - c_{1j} = 100$ per ogni $j$: il costo totale è $\sum_j c_{1j}\sum_i x_{ij} + 100\cdot\sum_j x_{2j} = (100\cdot5 + 300\cdot12 + 500\cdot8) + 100\cdot15 = 8100 + 1500 = 9600$ per **ogni** soluzione ammissibile, quindi tutte le soluzioni ammissibili sono ottime.

---
## Slide 114 – Linguaggi di Modellazione

- La soluzione prevede il modello definito nel file "esercizio2.mod" :

```
set depot; # depositi
set pdv; # punti di vendita

param disp {depot}; # disponibilita' ai depositi
param req {pdv}; # richieste punti di ventida
param cost {depot,pdv}; # costi di trasporto

var x {depot,pdv} >= 0; # quantità trasportata dal
deposito i al punto vendita j;

minimize tot_cost : sum {i in depot} sum {j in pdv}
cost[i,j] * x[i,j];

subject to depot_limit {i in depot}: sum {j in pdv}
x[i,j] = disp[i];

subject to pdv_limit {j in pdv}: sum {i in depot}
x[i,j] = req[j];
```

>> Nel file reale il commento dopo `var x` deve stare su una sola riga (in AMPL `#` commenta solo fino a fine riga): qui è andato a capo solo per l'impaginazione della slide.

---
## Slide 115 – Linguaggi di Modellazione

- La soluzione prevede i dati salvati nel file "esercizio2.dat" :

```
set depot := depBO depMI;
set pdv := pdvFI pdvRM pdvNA;

param : disp :=
    depBO  10
    depMI  15;

param : req :=
    pdvFI  5
    pdvRM  12
    pdvNA  8;

param cost : pdvFI pdvRM pdvNA :=
    depBO     100   300   500
    depMI     200   400   600;
```

>> La sintassi `param cost : col1 col2 ... :=` permette di dare un parametro a due indici in forma tabellare: le righe sono gli elementi di `depot`, le colonne quelli di `pdv`.

---
## Slide 116 – Linguaggi di Modellazione

- Se aggiungiamo un costo fisso per usare ciascun arco, il modello di "*programmazione lineare*" potrebbe essere il seguente:

$$
\begin{aligned}
z = \text{Min} \ & \sum_{i=1}^{n} \sum_{j=1}^{m} c_{ij} x_{ij} + f_{ij} y_{ij} \\
s.t. \ & \sum_{j=1}^{m} x_{ij} = a_i, && i = 1, \dots, n \\
& \sum_{i=1}^{n} x_{ij} = b_j, && j = 1, \dots, m \\
& 0 \le x_{ij} \le u_{ij} y_{ij}, && i = 1, \dots, n, \ j = 1, \dots, m \\
& y_{ij} \ge 0 \ \text{intero}, && i = 1, \dots, n, \ j = 1, \dots, m
\end{aligned}
$$

dove $u_{ij}$ è un limite a quanto può essere trasportato da un mezzo.

>> $y_{ij}$ conta i mezzi usati sull'arco $(i,j)$: ognuno costa $f_{ij}$ e trasporta al massimo $u_{ij}$ unità. Avendo variabili intere, il modello è in realtà di **programmazione lineare intera mista** (MILP). Se $y_{ij}$ fosse binaria, si tratterebbe del classico costo fisso di "apertura" dell'arco.

---
## Slide 117 – Linguaggi di Modellazione

- La soluzione prevede il modello definito nel file "esercizio3.mod" :

```
set depot; # depositi
set pdv; # punti di vendita

param disp {depot}; # disponibilita' ai depositi
param req {pdv}; # richieste punti di ventida
param cost {depot,pdv}; # costi di trasporto
param fixcost {depot,pdv}; # costi fissi di trasporto
param cap {depot,pdv}; # capacita' di trasporto

var x {depot,pdv} >= 0; # quantita' trasportata da i a j;
var y {depot,pdv} integer >= 0; # quantita' di mezzi da i a j;

minimize tot_cost : sum {i in depot} sum {j in pdv} (cost[i,j] * x[i,j]
+ fixcost[i,j] * y[i,j]);

subject to depot_limit {i in depot}: sum {j in pdv} x[i,j] = disp[i];

subject to pdv_limit {j in pdv}: sum {i in depot} x[i,j] = req[j];

subject to cap_limit {i in depot,j in pdv}: x[i,j] <= cap[i,j] * y[i,j];
```

---
## Slide 118 – Linguaggi di Modellazione

- La soluzione prevede i dati salvati nel file "esercizio3.dat" :

```
set depot := depBO depMI;
set pdv := pdvFI pdvRM pdvNA;

param : disp :=
    depBO  10
    depMI  15;

param : req :=
    pdvFI  5
    pdvRM  12
    pdvNA  8;

param cost : pdvFI pdvRM pdvNA :=
    depBO     100   300   500
    depMI     200   400   600;

param fixcost : pdvFI pdvRM pdvNA :=
    depBO       1000  1000  1000
    depMI       1000  1000  1000;

param cap : pdvFI pdvRM pdvNA :=
    depBO     8     8     8
    depMI     8     8     8;
```

>> Con capacità 8 per mezzo, servono almeno $\lceil 5/8\rceil + \lceil 12/8\rceil + \lceil 8/8\rceil = 1 + 2 + 1 = 4$ mezzi in totale. Poiché i costi variabili totali valgono sempre 9600 (vedi slide 111), conviene usare il minor numero di mezzi, e 4 bastano: $x_{BO,FI}=5$, $x_{BO,RM}=5$, $x_{MI,RM}=7$, $x_{MI,NA}=8$ (un mezzo per arco, disponibilità $10$ e $15$ rispettate). Quindi $z^* = 9600 + 4\cdot1000 = 13600$.

---
## Slide 119 – Algoritmi euristici e metaeuristici

- Si consideri un generico problema di **ottimizzazione**:

$$\min_{\mathbf{x} \in X} f(\mathbf{x})$$

- La funzione $f: \mathbb{R}^n \longrightarrow \mathbb{R}$ è detta ==**funzione obiettivo**==.
- Il vettore delle ==**variabili decisionali**== è $\mathbf{x} = [x_1, x_2, \dots, x_n]^T \in \mathbb{R}^n$.
- L'insieme $X$ rappresenta le ==**soluzioni ammissibili**==, che sono quelle che soddisfano i "vincoli del problema".
- Ogni soluzione ammissibile $\mathbf{x} \in X$ ha un costo $f(\mathbf{x})$.
- Se esiste una soluzione $\mathbf{x}^* \in X$ tale che:

$$f(\mathbf{x}^*) < f(\mathbf{x}), \qquad \forall \mathbf{x} \in X$$

allora $\mathbf{x}^* \in X$ è la soluzione ottima (o minimo globale).

>> A rigore la disuguaglianza va intesa per $\mathbf{x} \ne \mathbf{x}^*$; con $<$ l'ottimo è unico (minimo globale stretto). In generale si usa $f(\mathbf{x}^*) \le f(\mathbf{x})$ per ogni $\mathbf{x} \in X$, ammettendo più soluzioni ottime.

---
## Slide 120 – Algoritmi euristici e metaeuristici

- L'obiettivo è quello di determinare tra le soluzioni ammissibili una **soluzione ottima** o una **soluzione di "buona qualità"**.
- Molti problemi di ottimizzazione sono ==**NP-difficili**== e spesso le istanze di interesse pratico hanno **dimensioni** tali da rendere proibitivo l'uso di algoritmi esatti di soluzione.
- Per risolvere quei problemi dove non si possono usare metodi esatti si possono utilizzare **algoritmi euristici**, che permettono di ottenere buone soluzioni in tempi di calcolo ridotti (e l'uso della memoria?).
- In generale, gli algoritmi euristici **non garantiscono l'ottimalità** della soluzione prodotta e di norma non sono in grado di fornire neanche una **stima della distanza dalla soluzione ottima**.
- L'**uso della matematica nelle euristiche** potrebbe consentire di avere una stima della distanza dalla soluzione ottima e/o fornire strumenti utili a migliorarne le prestazioni.

>> Esempio di stima: se si dispone di un lower bound $LB$ (es. dal rilassamento lineare) e l'euristica trova una soluzione di valore $UB$, allora l'ottimo $z^*$ soddisfa $LB \le z^* \le UB$ e il gap $(UB - LB)/UB$ limita superiormente l'errore relativo della soluzione euristica.

---
## Slide 121 – Algoritmi euristici e metaeuristici

- Gli algoritmi euristici possono essere classificati come segue:
	a) **Algoritmi costruttivi e di ricerca locale**: sfruttano le proprietà strutturali delle soluzioni ammissibili per ottenere rapidamente una soluzione di buona qualità.
	b) **Metaeuristiche**: gestiscono il trade-off tra **diversificazione** della ricerca, quando la ricerca è effettuata in regioni dello spazio di ricerca poco promettenti, e **intensificazione** nella regione dello spazio più promettente.
	c) **Algoritmi basati sulla programmazione matematica**: sfruttano alcuni risultati della programmazione matematica (per esempio, **metodi di decomposizione**, **lower/upper bounds**, etc.).
- Caratteristica fondamentale degli algoritmi metaeuristici è quella di fornire un **framework generale** che può essere facilmente utilizzato (e adattato) per risolvere problemi di tipo diverso.

>> Intuizione: *diversificare* significa esplorare zone nuove dello spazio delle soluzioni (per non restare intrappolati), *intensificare* significa esaminare a fondo i dintorni delle soluzioni migliori già trovate.

---
## Slide 122 – Metaeuristiche

- Gli **algoritmi costruttivi** e di **ricerca locale** possono spesso funzionare molto bene, ma possono "bloccarsi" in soluzioni di scarsa qualità.
- A partire dalla metà degli anni '70 sono stati proposti nuovi approcci, chiamati metaeuristici, che possono guidare gli algoritmi costruttivi e di ricerca locale per trovare soluzioni di migliore qualità.
- In letteratura sono state proposte diverse **tipologie di metaeuristiche**:
	- **Single Solution Metaheuristics**: Simulated Annealing, Tabu Search, Iterated Local Search, Variable Neighborhood Search, GRASP, etc.
	- **Population Based Metaheuristics**: Algoritmi Genetici, Ant Colony Optimization (ACO, ANTS), Scatter Search, etc.
	- **Matheuristics**: Diving Heuristics, Very Large-Scale Neighborhood Search, Decomposition-Based Heuristics, etc.
- Anche le metaeuristiche "tradizionali" possono usare la matematica.

---
## Slide 123 – Ricerca Locale

**Ricerca Locale**

- Per ogni soluzione $\mathbf{x} \in X$, si definisce l'insieme di vicinanza $N(\mathbf{x}) \subset X$, (noto anche come **neighborhood**), che rappresenta le soluzioni vicine alla soluzione $\mathbf{x}$.

**Algoritmo Ricerca Locale**

**Step 1.** Genera una soluzione iniziale $\mathbf{x} \in X$.
**Step 2.** Trova $\mathbf{x}' \in N(\mathbf{x})$ tale che $f(\mathbf{x}') = \min\{f(\mathbf{x}'') : \forall \mathbf{x}'' \in N(\mathbf{x})\}$.
**Step 3.** Se $f(\mathbf{x}') < f(\mathbf{x})$, allora $\mathbf{x} = \mathbf{x}'$ e vai allo Step 2.
**Step 4.** La miglior soluzione trovata è $\mathbf{x}^* = \mathbf{x}$.

**Nota:** L'aggiornamento della soluzione allo Step 3 è detto **spostamento** o **mossa** da $\mathbf{x}$ a $\mathbf{x}'$. Le mosse possibili dipendono da come è stato definito il neighborhood, ossia il concetto di "**soluzioni vicine**".

>> Questa versione è detta *best improvement* (si esplora tutto l'intorno e si sceglie il migliore). L'alternativa *first improvement* accetta il primo vicino che migliora: ogni iterazione è più veloce, ma i passi sono meno "profondi". L'algoritmo termina perché $f$ decresce strettamente e (nei problemi combinatori) le soluzioni sono in numero finito.

---
## Slide 124 – Ricerca Locale

- L'algoritmo può facilmente terminare in un minimo locale $\mathbf{x}^*$:

$$f(\mathbf{x}^*) < f(\mathbf{x}), \qquad \forall \mathbf{x} \in N(\mathbf{x}^*)$$

che può essere migliorato semplicemente applicando l'algoritmo di ricerca locale a diverse soluzioni iniziali.

![[RO02-s124-1.png|600]]

*Figura: a sinistra lo spazio di ricerca con Global optimum, High quality area e Low quality area; a destra le traiettorie di diverse esecuzioni (Iteration 1 … Iteration 7) della ricerca locale partendo da punti iniziali diversi.*

>> Questa strategia è detta *multi-start*: si ripete la ricerca locale da più soluzioni iniziali (casuali o costruite) e si tiene la migliore. Il minimo locale dipende dal neighborhood: un intorno più grande ha meno minimi locali ma è più costoso da esplorare.

---
## Slide 125 – Ricerca Locale

**Esempio: Travelling Salesman Problem (TSP)**

- Un possibile algoritmo di ricerca locale per il TSP può svolgere i seguenti due passi principali:
	1) **Costruzione di una soluzione iniziale:** per esempio applicando un algoritmo "**nearest neighbor**" (i.e., parte da un nodo iniziale e mette in soluzione l'arco che lo congiunge al nodo più vicino, poi il principio viene riapplicato all'ultimo nodo inserito finché non si sono visitati tutti i nodi).
	2) **Miglioramento della soluzione:** per migliorare una soluzione $\mathbf{x}$, partendo da quella iniziale, si potrebbero applicare degli scambi. Gli scambi che vengono considerati definiscono il **neighborhood** e lo spostamento viene svolto utilizzando lo scambio "migliore".
- Lo scambio migliore potrebbe essere quello che riduce il costo della nuova soluzione risultante (vi sono alternative?).

>> L'intorno più classico è il **2-opt**: si rimuovono due archi $(a,b)$ e $(c,d)$ del tour e si ricollegano come $(a,c)$ e $(b,d)$ (invertendo il tratto intermedio); la mossa conviene se $c_{ac} + c_{bd} < c_{ab} + c_{cd}$. Il costo della nuova soluzione si valuta quindi in $O(1)$, e l'intorno ha $O(n^2)$ elementi.
>>
>> Alternative allo "scambio migliore": il primo scambio migliorante (first improvement), uno scambio casuale tra quelli miglioranti, oppure accettare anche scambi peggioranti (come in Tabu Search e Simulated Annealing).

---
## Slide 126 – Ricerca Locale

![[RO02-s126-1.png|500]]

**3-opt** (Lin and Kernighan (1973))

>> Nel 3-opt si rimuovono tre archi del tour (in figura $(j,k)$, $(l,m)$, $(n,i)$, tratteggiati) e si ricollegano i tre segmenti ottenuti in modo diverso (in figura con $(j,l)$, $(k,n)$, $(i,m)$). L'intorno ha $O(n^3)$ elementi: più potente del 2-opt ma più costoso da esplorare.

---
## Slide 127 – Ricerca Locale

![[RO02-s127-1.png|500]]

**Or-opt** (Or (1976))

>> L'Or-opt sposta un segmento di nodi consecutivi (in figura $m$–$n$–$p$, tipicamente lungo 1, 2 o 3 nodi) in un'altra posizione del tour: il segmento viene tolto tra $a$ e $b$ (che vengono ricollegati) e inserito tra $i$ e $j$. È un caso particolare di 3-opt, ma con un intorno di dimensione $O(n^2)$.

---
## Slide 128 – Tabu Search

- Il **Tabu Search** è stato proposto originariamente da Glover (1986).
- Il Tabu Search ad ogni iterazione, si muove nella migliore soluzione disponibile nell'intorno della soluzione corrente:

$$f(\mathbf{x}') = \min\{f(\mathbf{x}'') : \ \forall \mathbf{x}'' \in N(\mathbf{x})\}$$

- Il Tabu search consente di uscire dai minimi locali muovendosi anche in soluzioni peggiori di quella corrente.
- Una struttura di memoria chiamata **Tabu List** impedisce di tornare su soluzioni già visitate.
- La ricerca locale si modifica come segue:

$$f(\mathbf{x}') = \min\{f(\mathbf{x}'') : \ \forall \mathbf{x}'' \in N(\mathbf{x}), \mathbf{x}'' \notin TL\}$$

dove l'insieme $TL$ rappresenta la tabu list.
La **tabu list ha una lunghezza massima**, per cui dopo un certo numero di iterazioni alcune soluzioni potrebbero essere riconsiderate.

>> Senza la tabu list, dopo essersi spostato da un minimo locale $\mathbf{x}$ a un vicino peggiore $\mathbf{x}'$, l'algoritmo tornerebbe subito in $\mathbf{x}$ (che è il migliore nell'intorno di $\mathbf{x}'$), ciclando. In pratica spesso non si memorizzano soluzioni intere ma *attributi delle mosse* (es. "arco appena rimosso"), e si usa un *criterio di aspirazione*: una mossa tabu è comunque ammessa se porta a una soluzione migliore della migliore trovata finora.

---
## Slide 129 – Tabu Search

**Algoritmo Tabu Search**

**Step 1.** Genera una soluzione iniziale $\mathbf{x} \in X$.
Poni $\mathbf{x}^* = \mathbf{x}$ e inizializza la Tabu List vuota $TL = \emptyset$.
**Step 2.** Trova $\mathbf{x}' \in N(\mathbf{x})$, tale che:

$$f(\mathbf{x}') = \min\{f(\mathbf{x}'') : \ \forall \mathbf{x}'' \in N(\mathbf{x}), \mathbf{x}'' \notin TL\}$$

**Step 3.** Poni $\mathbf{x} = \mathbf{x}'$, $TL = TL \cup \{\mathbf{x}\}$.
Se $f(\mathbf{x}) < f(\mathbf{x}^*)$ allora $\mathbf{x}^* = \mathbf{x}$.
**Step 4.** Se la **condizione di terminazione** non è soddisfatta goto Step 2.

>> Condizioni di terminazione tipiche: numero massimo di iterazioni, tempo massimo, numero di iterazioni senza miglioramento di $\mathbf{x}^*$, oppure intorno interamente tabu. A differenza della ricerca locale, qui la soluzione corrente $\mathbf{x}$ e la migliore $\mathbf{x}^*$ sono distinte, perché $f(\mathbf{x})$ può peggiorare.

---
## Slide 130 – Tabu Search

**Ricerca Locale vs Tabu Search**

![[RO02-s130-1.png|600]]

*Figura: a sinistra (Ricerca Locale) più esecuzioni indipendenti (Iteration 1 … Iteration 7) che si fermano in minimi locali; a destra (Tabu Search) un'unica traiettoria che, partendo da Start, esce dai minimi locali e visita più regioni promettenti.*

---
## Slide 131 – Simulated Annealing

- Il **Simulated Annealing** è stato proposto da Kirkpatrick et al. (1983) ed è basato sul metodo Monte Carlo di Metropolis et al. (1953).
- L'annealing corrisponde al **processo termico** che raggiunge stati di bassa energia libera in un materiale solido mediante ripetute fasi di riscaldamento e lento raffreddamento controllato.
- Il simulated annealing è un algoritmo che "**imita**" questo processo termodinamico per minimizzare una funzione obiettivo.
- Il simulated annealing è un algoritmo di "**ricerca globale**" che impiega un parametro "temperature" in modo tale che alle "**alte temperature**" la ricerca è "**diversificata**", mentre alle "**basse temperature**" la ricerca è "intensificata".
- L'algoritmo parte da una temperatura alta, che **consente di peggiorare la soluzione con alta probabilità**, per poi diminuire progressivamente la temperatura e **ridurre la probabilità di accettare peggioramenti**.

---
## Slide 132 – Simulated Annealing

![[RO02-s132-1.png|600]]

**Algorithm 6:** Generic Simulated Annealing
1. **function** SimulatedAnnealing($T$);
	**Input** : temperature $T$
	**Output:** A feasible solution $\mathbf{x}^*$
2. Generate a feasible solution $\mathbf{x}$; Set $\mathbf{x}^* = \mathbf{x}$;
3. Generate a feasible solution $\mathbf{x}' \in \mathcal{N}(\mathbf{x})$;
4. **if** $(z(\mathbf{x}') < z(\mathbf{x}))$ **then**
5. 	Set $\mathbf{x} = \mathbf{x}'$;
6. 	**if** $(z(\mathbf{x}^*) > z(\mathbf{x}))$ **then** $\mathbf{x}^* = \mathbf{x}$;
7. **else**
8. 	Set $\mathbf{x} = \mathbf{x}'$ with probability $p = e^{-(z(\mathbf{x}') - z(\mathbf{x}))/(kT)}$;
9. **end**
10. **if** *(annealing condition)* **then** decrease $T$;
11. **if** *not(terminating condition)* **then go to** 3;
12. **return** $\mathbf{x}^*$;

Fonte: https://link.springer.com/book/10.1007/978-3-030-70277-9

>> Il vicino $\mathbf{x}'$ è scelto **a caso** (non il migliore). Con $\Delta = z(\mathbf{x}') - z(\mathbf{x}) \ge 0$, la probabilità di accettare il peggioramento è $e^{-\Delta/(kT)}$: vicina a 1 quando $T$ è alta, tende a 0 quando $T \to 0$ (e l'algoritmo diventa una ricerca locale). Esempio: con $\Delta = 10$ e $kT = 100$ si ha $p = e^{-0.1} \approx 0.90$; con $kT = 1$, $p = e^{-10} \approx 4.5 \cdot 10^{-5}$. Uno schema di raffreddamento tipico è quello geometrico $T \leftarrow \alpha T$ con $\alpha \in [0.8, 0.99]$.

---
## Slide 133 – Simulated Annealing

![[RO02-s133-1.png|550]]

*Figura: a sinistra un tour del TSP (Chain number: 51); a destra l'andamento del costo (score) in funzione di log10(temperature).*

Fonte: https://biostat.jhsph.edu/~iruczins/teaching/misc/annealing/animation.html

>> Il grafico va letto da destra a sinistra (la temperatura diminuisce): ad alta temperatura il costo resta alto (si accettano quasi tutte le mosse, la ricerca è diversificata), poi cala rapidamente e a bassa temperatura si stabilizza su un valore basso (ricerca intensificata).

---
## Slide 134 – Quantum Computing

- Negli ultimi anni la ricerca scientifica sta lavorando intensamente nell'ambito del **Quantum Computing** sperando di ottenere una svolta epocale sulle capacità di calcolo utilizzando risultati della **meccanica quantistica**.
- Tra i risultati finora ottenuti possiamo citare il **Quantum Annealing** che rappresenta una **generalizzazione del Simulated Annealing**.
- L'industria ha già prodotto dei **dispositivi hardware** che eseguono algoritmi di Quantum Annealing.

![[RO02-s134-1.png|300]]

Fonte: https://en.wikipedia.org/wiki/D-Wave_Systems

>> Nel quantum annealing, invece delle fluttuazioni termiche si sfrutta l'effetto tunnel quantistico per attraversare le "barriere" tra minimi locali. I problemi vanno di solito formulati come QUBO (Quadratic Unconstrained Binary Optimization): $\min_{\mathbf{x} \in \{0,1\}^n} \mathbf{x}^T Q \mathbf{x}$, con i vincoli portati nell'obiettivo tramite penalità.

---
## Slide 135 – Algoritmi Genetici

- Gli **algoritmi genetici** sono stati proposti per la prima volta da Holland (1992) e si ispirano al processo evolutivo degli organismi in natura.
- Questi algoritmi definiscono un **insieme di soluzioni** (detti **individui**), che costituiscono la **popolazione** che ad ogni iterazione è "aggiornata".
- La popolazione è aggiornata ricombinando sottoinsiemi di individui (**parent set**) per ottenere nuove soluzioni. L'operazione che permette di generare un nuovo individuo è chiamata **crossover**.
- Sui nuovi individui è effettuata una operazione di **mutazione** al fine di diversificare la popolazione.
- Al termine di ogni iterazione si **selezionano gli individui** che faranno parte della popolazione nella prossima iterazione.
- Le soluzioni sono codificate utilizzando delle "stringhe" (**cromosomi**), il cui formato dipende dall'applicazione (e.g., stringhe di bit).

>> Il lavoro originale di Holland è del 1975 (*Adaptation in Natural and Artificial Systems*); il 1992 è l'anno della seconda edizione. Il crossover realizza l'intensificazione (combina caratteristiche di buone soluzioni), la mutazione la diversificazione.

---
## Slide 136 – Algoritmi Genetici

**Algoritmo Genetico**

**Step 1.** Genera una popolazione $P$ di soluzioni iniziali.
**Step 2.** Valuta il costo $f(\mathbf{x})$, $\forall \mathbf{x} \in P$ (**funzione di fitness**).
**Step 3.** **Selezione dei genitori**: seleziona un sottoinsieme $G$ di soluzioni dall'insieme $P$.
**Step 4.** **Crossover**: costruisci un insieme $P_G$ di soluzioni combinando fra loro i genitori in $G$.
**Step 5.** **Mutazione**: modifica casualmente alcune soluzioni in $P_G$.
**Step 6.** **Selezione della popolazione**: la nuova popolazione è selezionata sostituendo tutti o alcuni individui della popolazione $P$ con gli individui nel nuovo insieme $P_G$ utilizzando la funzione di fitness.
**Step 7.** Se la **condizione di terminazione** non è soddisfatta vai allo Step 3.

---
## Slide 137 – Algoritmi Genetici

![[RO02-s137-1.png|450]]

**Single Crossover**

$$
\begin{matrix} (0\ 0\ 0\ 0 \mid 1\ 1\ 1) \\ (0\ 1\ 0\ 1 \mid 0\ 1\ 0) \end{matrix}
\ \Rightarrow \
\begin{matrix} (0\ 0\ 0\ 0\ 0\ 1\ 0) \\ (0\ 1\ 0\ 1\ 1\ 1\ 1) \end{matrix}
$$

**Double Crossover**

$$
\begin{matrix} (0\ 0 \mid 0\ 0 \mid 1\ 1\ 1) \\ (0\ 1 \mid 0\ 1 \mid 0\ 1\ 0) \end{matrix}
\ \Rightarrow \
\begin{matrix} (0\ 0\ 0\ 1\ 1\ 1\ 1) \\ (0\ 1\ 0\ 0\ 0\ 1\ 0) \end{matrix}
$$

>> Nel *single (one-point) crossover* si sceglie un punto di taglio (qui dopo il 4° bit) e i due figli si ottengono scambiando le "code" dei genitori. Nel *double (two-point) crossover* si scelgono due punti di taglio (qui dopo il 2° e il 4° bit) e si scambia il segmento centrale: il primo figlio è $(0\ 0 \mid 0\ 1 \mid 1\ 1\ 1)$, il secondo $(0\ 1 \mid 0\ 0 \mid 0\ 1\ 0)$.

---
## Slide 138 – Algoritmi Genetici

- L'**operatore di mutazione** consente di introdurre nella popolazione delle nuove caratteristiche che possono essere utili all'evoluzione, generando nelle future generazioni individui con fitness migliore.

![[RO02-s138-1.png|300]]

**Mutazione**: $(0\ 1\ 0\ 0\ 0\ 1\ 0) \ \downarrow \ (0\ 1\ 1\ 0\ 0\ 1\ 0)$

- La **selezione della popolazione** può essere svolta seguendo numerosi schemi che comunque dipendono dalla funzione di fitness (perché?).
- La **funzione di fitness** deve valutare sia il **"costo" della soluzione** che il suo **"grado" di non ammissibilità** (aggiungendo una penalità).

>> La mutazione in figura inverte il 3° bit (bit-flip); tipicamente ogni bit viene invertito con una piccola probabilità (es. $1/n$).
>>
>> Perché dipende dalla fitness: la fitness è l'unica misura della "qualità" di un individuo, quindi qualunque schema (elitismo, torneo, roulette wheel con probabilità proporzionale alla fitness, ranking) deve basarsi su di essa per favorire la sopravvivenza delle soluzioni migliori.
>>
>> Esempio di fitness penalizzata (minimizzazione): $F(\mathbf{x}) = f(\mathbf{x}) + M \cdot v(\mathbf{x})$, dove $v(\mathbf{x})$ misura la violazione dei vincoli (es. numero di vincoli violati) e $M > 0$ è un peso grande.

---
## Slide 139 – Set Covering Problem

- Il Set Covering Problem (SCP) è il problema di coprire le righe di una matrice $A = (a_{ij})$ di dimensioni $m \times n$ con coefficienti 0 ed 1, con un sottoinsieme di colonne di costo minimo.
- Sia $x_j$ una variabile binaria 0-1 definita per ogni colonna come segue:

$$
x_j = \begin{cases} 1, & \text{se la colonna } j \text{ di costo } c_j \text{ è in soluzione} \\ 0, & \text{altrimenti} \end{cases}
$$

- Una formulazione matematica per il problema SCP è la seguente:

$$
(SCP) \qquad
\begin{aligned}
z_{SCP} = \min \ & \sum_{j=1}^{n} c_j x_j \\
s.t. \ & \sum_{j=1}^{n} a_{ij} x_j \ge 1, && i = 1, \dots, m \\
& x_j \in \{0,1\}, && j = 1, \dots n
\end{aligned}
$$

>> Una riga $i$ è "coperta" dalla colonna $j$ se $a_{ij} = 1$; il vincolo impone che ogni riga sia coperta da almeno una colonna scelta. Esempio applicativo: righe = quartieri da servire, colonne = possibili sedi di ambulanze (con $a_{ij}=1$ se la sede $j$ raggiunge il quartiere $i$ in tempo utile), $c_j$ = costo di apertura. Il problema è NP-difficile.

---
## Slide 140 – Set Covering Problem

**Esempio**

- Si consideri il problema di Set Covering definito dai parametri che sono riassunti qui di seguito:
	- Il numero di colonne è pari a $n = 6$ e il numero di righe è $m = 3$.
	- Il vettore dei costi è $\mathbf{c} = [1 \quad 2 \quad 3 \quad 4 \quad 5 \quad 6]$.
	- La matrice dei vincoli è:

$$
A = \begin{bmatrix} 1 & 0 & 1 & 0 & 1 & 0 \\ 0 & 0 & 1 & 1 & 0 & 1 \\ 0 & 1 & 0 & 0 & 1 & 1 \end{bmatrix}
$$

- In questo caso la soluzione ottima è $\mathbf{x}^* = [0 \quad 1 \quad 1 \quad 0 \quad 0 \quad 0]$, ossia include la colonna 2 e la colonna 3.
- Il costo della soluzione ottima è $z^*_{SCP} = 5$.

>> Verifica: la colonna 3 copre le righe 1 e 2, la colonna 2 copre la riga 3, costo $2 + 3 = 5$. Altre coperture: $\{1,6\}$ costa 7, $\{3,5\}$ costa 8, $\{1,4,2\}$ costa 7, $\{3,6\}$ costa 9. Nessuna colonna da sola copre tutte le righe, e con due colonne l'unica copertura di costo $< 5$ dovrebbe usare coppie tra $\{1,2,3\}$ (costi 3 o 4): $\{1,2\}$ non copre la riga 2, $\{1,3\}$ non copre la riga 3. Quindi 5 è ottimo.

---
## Slide 141 – Set Covering Problem

**Algoritmo Genetico per il Set Covering (Beasley and Chu, 1995)**

**Step 1.** Genera in modo casuale una popolazione di $N$ soluzioni iniziali.
**Step 2.** **Seleziona due genitori**: seleziona due soluzioni $P_1$ e $P_2$.
**Step 3.** **Crossover**: combina $P_1$ e $P_2$ per formare una nuova soluzione $C$.
**Step 4.** **Mutazione**: modifica $k$ colonne di $C$ in modo casuale.
**Step 5.** **Repair:** Rendi ammissibile la soluzione $C$.
**Step 5.** Se la soluzione $C$ è già presente nella popolazione torna a Step 2.
**Step 6.** Sostituisci una soluzione della popolazione con la soluzione $C$.
**Step 7.** Se non è stato raggiunto il numero massimo di iterazioni, torna allo Step 2; altrimenti la soluzione è quella con il valore di fitness più piccolo.

>> È uno schema *steady-state*: a ogni iterazione nasce un solo figlio che sostituisce un individuo (in Beasley e Chu, tipicamente uno con fitness peggiore della media, scelto a caso), invece di rigenerare l'intera popolazione. Il controllo sui duplicati mantiene la diversità della popolazione.

---
## Slide 142 – Set Covering Problem

**Rappresentazione di una soluzione**

- Una soluzione è rappresentata da una stringa binaria di $n$ bit, dove un valore a 1 del $j$-esimo bit indica che la colonna $j$ è in soluzione.

![[RO02-s142-1.png|500]]

| 1 | 2 | 3 | 4 | 5 | $\cdots$ | $n-1$ | $n$ |
|---|---|---|---|---|---|---|---|
| 1 | 0 | 1 | 1 | 0 | $\cdots$ | 1 | 0 |

**Definizione della funzione di fitness**

- La funzione di fitness $f_{P_k}$ di una soluzione $P_k$ è data da:

$$f_{P_k} = \sum_{j=1}^{n} c_j s_{ij}$$

dove $s_{ij}$ è il valore del $j$-esimo bit nella stringa corrispondete alla soluzione $P_k$.

>> La fitness coincide con il costo della soluzione (da minimizzare); non serve una penalità di non ammissibilità perché l'operatore di Repair rende sempre ammissibili le soluzioni. Nell'esempio della slide 138, la stringa $(0\,1\,1\,0\,0\,0)$ ha fitness $2 + 3 = 5$.

---
## Slide 143 – Set Covering Problem

**Selezione dei genitori**

- La tecnica utilizzata per selezionare i genitori è la **binary tournament selection**.
- Dalla popolazione vengono selezionati in modo casuale due gruppi di soluzioni di una cardinalità prestabilita. Poi, a turno, vengono estratte due soluzioni $P_1$ e $P_2$ con fitness migliore.
- Esistono molte altre tecniche per selezionare i genitori da utilizzare nel crossover.
- **Cosa proporreste come criterio di selezione?**

>> In pratica: da ciascuno dei due gruppi (tornei) si prende il vincitore, cioè l'individuo con fitness migliore (più piccola), ottenendo $P_1$ dal primo e $P_2$ dal secondo. Alternative: *roulette wheel* (probabilità di scelta proporzionale alla "bontà", es. a $1/f$ in minimizzazione), *ranking selection* (probabilità in base alla posizione in classifica), selezione casuale uniforme, oppure scegliere il secondo genitore in modo che sia il più "diverso" possibile dal primo (per favorire la diversità).

---
## Slide 144 – Set Covering Problem

**Operazione di crossover**

- Viene utilizzato un operatore di crossover, chiamato **fusion crossover**, che tiene conto sia della struttura sia della fitness delle soluzioni del parent set.
- L'operatore di crossover produce, a differenza degli operatori classici, una sola soluzione.
- Siano $f_{P_1}$ e $f_{P_2}$ i valori di fitness delle soluzioni $P_1$ e $P_2$ e sia $C$ la nuova soluzione costruita come segue, per ogni $i = 1, \dots, n$:
	1) Se $P_1[i] = P_2[i]$, allora $C[i] = P_1[i] = P_2[i]$;
	2) Se $P_1[i] \ne P_2[i]$, allora
		a) $C[i] = P_1[i]$ con probabilità $p = f_{P_2}/(f_{P_1} + f_{P_2})$,
		b) $C[i] = P_2[i]$ con probabilità $1 - p$.

>> Poiché la fitness è un costo da minimizzare, il genitore con fitness più **bassa** (migliore) ha più probabilità di trasmettere i propri bit: se $f_{P_1} < f_{P_2}$ allora $p = f_{P_2}/(f_{P_1}+f_{P_2}) > 1/2$.

---
## Slide 145 – Set Covering Problem

**Esempio di operazione di crossover**

![[RO02-s145-1.png|450]]

| | 1 | 2 | 3 | 4 | 5 | $\dots$ | $n-1$ | $n$ | |
|---|---|---|---|---|---|---|---|---|---|
| $P_1 =$ | 1 | **0** | **0** | 1 | 0 | $\dots$ | 0 | 0 | $f_{P_1}$ |
| $P_2 =$ | 1 | **1** | **1** | 1 | 0 | $\dots$ | 0 | 0 | $f_{P_2}$ |
| $C =$ | 1 | **1** | **0** | 1 | 0 | $\dots$ | 0 | 0 | $F_C$ |

- Nel caso in cui $f_{P_1} = 4$ e $f_{P_2} = 6$, se $P_1[i] \ne P_2[i]$, la probabilità che $C[i] = P_1[i]$ è $p = \frac{6}{4+6} = 0.6$, mentre la probabilità che $C[i] = P_2[i]$ è $1 - p = 1 - 0.6 = 0.4$.

>> I genitori differiscono solo nei bit 2 e 3 (in grassetto): negli altri $C$ copia il valore comune. Nel bit 2 il figlio ha preso il valore di $P_2$ (probabilità 0.4), nel bit 3 quello di $P_1$ (probabilità 0.6). La probabilità di ottenere esattamente questo $C$ è quindi $0.4 \cdot 0.6 = 0.24$.

---
## Slide 146 – Set Covering Problem

**Operazione di ammissibilità (Repair)**

- La soluzione $C$ generata dopo l'applicazione dell'operatore di fusion crossover può risultare non ammissibile.
- Nel caso la soluzione $C$ non sia ammissibile possiamo applicare un operatore di ammissibilità per renderla ammissibile.
- Consideriamo i seguenti parametri:
	- $I$ = insieme di tutte le righe;
	- $J$ = insieme di tutte le colonne;
	- $\alpha_i$ = insieme delle colonne che coprono la riga $i \in I$;
	- $\beta_j$ = insieme delle righe coperte dalla colonna $j \in J$;
	- $S$ = insieme delle colonne in una soluzione;
	- $U$ = insieme delle righe non coperte dalla soluzione;
	- $w_i$ = numero di colonne che coprono la riga $i \in I$ in $S$.

>> In formule: $\alpha_i = \{j \in J : a_{ij} = 1\}$, $\beta_j = \{i \in I : a_{ij} = 1\}$, $w_i = |S \cap \alpha_i|$ e $U = \{i \in I : w_i = 0\}$. La soluzione $S$ è ammissibile se e solo se $U = \emptyset$. Nell'esempio della slide 138: $\alpha_1 = \{1,3,5\}$, $\beta_3 = \{1,2\}$.

---
## Slide 147 – Set Covering Problem

**Algoritmo Operatore di Ammissibilità**

- **Step 1.** Inizializza $w_i = |S \cap \alpha_i|, \ \forall i \in I$.
- **Step 2.** Inizializza $U = \{i : w_i = 0, \forall i \in I\}$.
- **Step 3.** Per ogni riga $i \in U$:
	- a) Trova la prima colonna $j$ in $\alpha_i$ che minimizza $c_j / |U \cap \beta_j|$;
	- b) Aggiungi $j$ a $S$ e poni $w_i = w_i + 1, \ \forall i \in \beta_j$, e $U = U \setminus \beta_j$.
- **Step 4.** Per ogni colonna $j \in S$, considerati per costo $c_j$ decrescente, se $w_i \ge 2, \ \forall i \in \beta_j$, poni $S = S \setminus \{j\}$ e $w_i = w_i - 1, \ \forall i \in \beta_j$.

>> Qui $\alpha_i$ è l'insieme delle colonne che coprono la riga $i$ e $\beta_j$ l'insieme delle righe coperte dalla colonna $j$; $w_i$ conta quante colonne di $S$ coprono la riga $i$.
>> Lo Step 3 rende la soluzione ammissibile (copre le righe scoperte scegliendo la colonna con minor costo per riga nuova coperta), lo Step 4 la rende "minimale" eliminando le colonne ridondanti, partendo da quelle più costose.

---
## Slide 148 – Set Covering Problem

**Aggiornamento della popolazione**

- Dopo che una nuova soluzione $C$ è stata prodotta, la popolazione viene aggiornata rimuovendo dalla popolazione una soluzione scelta casualmente fra le soluzioni con valore di fitness inferiore al valore medio (below-average fitness) ed inserendo $C$ nella popolazione.
- **Quali alternative potevano esserci?**

>> Possibili alternative: sostituire sempre la soluzione peggiore (steady-state "replace worst"); sostituire un genitore; rimpiazzare l'intera popolazione a ogni generazione (generational replacement), eventualmente con elitismo; scartare $C$ se è un duplicato di una soluzione già presente (per preservare la diversità).

---
## Slide 149 – Vehicle Routing Problem

- Dato un grafo $G = (V, A)$, dove il vertice $0$ rappresenta il **deposito** e i vertici $V' = \{1, \dots, n\}$ rappresentano i **clienti**.
- Ad ogni cliente $i \in V'$ è associata una **domanda** positiva $q_i$.
- Ad ogni arco $(i, j) \in A$ è associato un **costo** non negativo $c_{ij}$.
- Presso il deposito sono disponibili $M$ **veicoli identici** di capacità $Q$.
- Il costo di un **viaggio** (o **route**) è dato dalla somma dei costi degli archi che compongono il viaggio.
- Ogni veicolo deve effettuare un viaggio (route) partendo (o tornando) con un **carico minore o al più uguale alla capacità $Q$**.
- Ogni viaggio deve **iniziare e terminare al deposito**.
- Ogni cliente deve essere **visitato una ed una sola volta** (e da un solo veicolo).

>> Il VRP generalizza il TSP (caso $M = 1$, $Q = \infty$) ed è quindi NP-hard: per istanze reali si usano spesso metaeuristiche come il Tabu Search presentato nelle slide successive.

---
## Slide 150 – Vehicle Routing Problem

**Obiettivo**

- Disegnare $M$ route, una per ogni veicolo, in modo da visitare tutti i clienti una e una sola volta e **minimizzare la somma dei costi delle route**.
- Il **costo di ciascuna route** è data dalla somma dei costi $c_{ij}$ degli archi percorsi.
- Possiamo denotare una route come:
	- Insieme dei vertici visitati $R = \{0, i_1, i_2, \dots, i_{|R|-1}, 0\}$;
	- Insieme degli archi visitati $R = \{(0, i_1), (i_1, i_2), \dots, (i_{|R|-1}, 0)\}$.
- Il costo della route $R$ è dato da $c(R) = \sum_{(i,j) \in R} c_{ij}$.

---
## Slide 151 – Vehicle Routing Problem

**Esempio**

![[RO02-s151-1.png|450]]

$n = 30$ - $M = 3$ - $Q = 200$ (accanto a ogni cliente è indicata la sua domanda; il quadrato nero è il deposito).

>> Domanda totale / capacità dà un limite inferiore al numero di veicoli necessari: $\lceil \sum_i q_i / Q \rceil$; con $M = 3$ e $Q = 200$ la domanda totale deve essere al massimo $600$ perché l'istanza sia ammissibile.

---
## Slide 152 – Vehicle Routing Problem

**Esempio**

![[RO02-s152-1.png|600]]

Legenda: Vehicle 1, Vehicle 2, Vehicle 3; DEPOT a Cesena (località: Ravenna, Faenza, Forlì, Cervia, Rimini).

---
## Slide 153 – Vehicle Routing Problem

**Tabu Search per il Vehicle Routing Problem (Gendreau, Hertz e Laporte (1994))**

- Si suppone che al deposito siano disponibili un numero infinito di veicoli.
- Sia $S = (R_1, R_2, \dots, R_k)$ una soluzione per il VRP di $k$ route.
- Ad ogni soluzione $S$ si possono associare le seguenti due funzioni obiettivo (funzioni di fitness):

$$F_1(S) = \sum_{r \in S} \sum_{(i,j) \in R_r} c_{ij}$$

$$F_2(S) = F_1(S) + \alpha \left( \sum_{r \in S} \max\left\{0, \sum_{i \in R_r} q_i - Q\right\} \right)$$

- La funzione $F_2(S)$ include una penalizzazione nel caso sia violato il vincolo di capacità.

>> $F_2$ permette alla ricerca di attraversare soluzioni non ammissibili (con route sovraccariche), pagando un costo proporzionale all'eccesso di carico: se la soluzione è ammissibile, $F_2(S) = F_1(S)$. Questo "rilassamento" aiuta a uscire da minimi locali difficili da raggiungere restando sempre nella regione ammissibile.

---
## Slide 154 – Vehicle Routing Problem

**Costruzione della soluzione iniziale**

- La soluzione iniziale è costituita da $n$ route del tipo $R_r = (0, r, 0)$, per $r = 1, \dots, n$.

![[RO02-s154-1.png|350]]

>> È una soluzione banale ma sempre ammissibile (se $q_i \le Q$ per ogni $i$): ogni cliente è servito da un veicolo dedicato. Sarà il Tabu Search a fondere progressivamente le route.

---
## Slide 155 – Vehicle Routing Problem

**Inserimento di un cliente in una route**

- Un cliente può essere inserito in una route emergente utilizzando l'**extra-mileage** per valutare la miglior posizione d'inserimento.

![[RO02-s155-1.png|450]]

(A. Route iniziale – B. Route finale)

**Extra Mileage**

$$em(i, k, j) = c_{ik} + c_{kj} - c_{ij}$$

>> Inserire $v_k$ tra $v_i$ e $v_j$ sostituisce l'arco $(i,j)$ con i due archi $(i,k)$ e $(k,j)$: $em$ è proprio l'aumento del costo della route. La miglior posizione è la coppia di vertici consecutivi $(i,j)$ che minimizza $em(i,k,j)$.

---
## Slide 156 – Vehicle Routing Problem

- Sia $S$ la soluzione corrente a una data iterazione $k$.
- Indichiamo con $(i, r)$ l'operazione (mossa) di inserimento del cliente $i$ nella route $r$ della soluzione $S$.
- Ora definiamo le mosse che il tabu search esegue ad ogni iterazione $k$, dopodiché definiremo lo schema di funzionamento generale.

**Algoritmo 1: Tabu Search all'iterazione $k$**

- **Step 1.** Se $\text{mod}(k, 10) = 0$ (i.e., esegue questo step ogni 10 iterazioni):
	- Se le precedenti 10 soluzioni sono ammissibili, $\alpha = \alpha / 2$;
	- Se le precedenti 10 soluzioni sono non ammissibili, $\alpha = \alpha * 2$.
	- (Nota: il parametro $\alpha$ è il peso della componente che misura la non ammissibilità di una soluzione).
- **Step 2.** Sia $W$ un insieme di $q$ clienti scelti casualmente dall'insieme $V'$.

>> L'aggiornamento di $\alpha$ è auto-adattivo: se la ricerca resta sempre nella regione ammissibile la penalità viene ridotta (per esplorare di più), se resta sempre fuori viene aumentata (per riportarla verso soluzioni ammissibili).

---
## Slide 157 – Vehicle Routing Problem

- **Step 3.** Per ogni cliente $i \in W$:
	- Considera tutte le mosse non tabu $(i, r)$, dove $r$ è una route di $S$ che contiene almeno uno dei $p$ clienti più vicini ad $i$. Sia $\Phi$ l'insieme delle soluzioni prodotte.
	- Determina la soluzione $S'$ tale che $F_2(S') = \min_{S'' \in \Phi} \{F_2(S'')\}$. Sia $(i, r^*)$, con $r^* \in S$, la mossa che produce $S'$.
	- Se $F_2(S') < F_2(S^*)$, allora $S^* = S'$.
	- Poni $S = S'$.
	- Dichiara tabu per $\theta$ iterazioni la mossa $(i, r^*)$, dove $\theta$ è scelto nell'intervallo $[5, 10]$.

>> Si noti che $S$ viene sostituita con $S'$ anche se $S'$ è peggiore di $S$: è ciò che permette al Tabu Search di uscire dai minimi locali; la lista tabu impedisce di tornare subito indietro (ciclare). Limitarsi alle route che contengono i $p$ clienti più vicini riduce drasticamente il vicinato da valutare.

---
## Slide 158 – Vehicle Routing Problem

**Algoritmo Tabu Search (schema generale)**

- **Step 1.** **Inizializzazione**
	- Sia $m = \left\lceil \sum_{i=1}^{n} q_i / Q \right\rceil$.
	- Sia $S$ la soluzione iniziale.
	- Poni $S^* = S$, dove $S^*$ rappresenta la miglior soluzione prodotta.
	- Poni $\alpha = 1$ e poni $k = 0$.
- **Step 2.** **Miglioramento della soluzione**
	- Esegui $k_{max} = 50n$ iterazioni dell'Algoritmo 1 con $p = \min\{n, 5\}$ e $q = \min\{n, m\}$.
- **Step 3.** **Intensificazione**
	- Esegui $k_{max} = 100$ iterazioni dell'Algoritmo 1 con $p = \min\{n, 10\}$ e $q = n$.
- **Step 3.** **Post-ottimizzazione della miglior soluzione**
	- Migliora $S^*$ con una procedura 3-opt (scambi di clienti tra route).

>> $m$ è un limite inferiore al numero di veicoli necessari. Nella fase di intensificazione si considerano più vicini ($p$ più grande) e tutti i clienti ($q = n$): il vicinato è più ampio e la ricerca più accurata attorno alle soluzioni buone già trovate.

---
## Slide 159 – Vehicle Routing Problem

**Post-Ottimizzazione: scambi fra route**

![[RO02-s159-1.png|500]]

Scambio (1-0) e Scambio (1-1) tra le route $R_{r'}$ e $R_{r''}$.

>> Scambio (1-0): il cliente $v_i$ viene spostato da una route all'altra. Scambio (1-1): $v_i$ e $v_j$, appartenenti a route diverse, vengono scambiati tra loro.

---
## Slide 160 – Vehicle Routing Problem

**Post-Ottimizzazione: scambi fra route**

![[RO02-s160-1.png|500]]

Scambio (2-0) e Scambio (2-1) tra le route $R_{r'}$ e $R_{r''}$.

>> Scambio (2-0): una coppia di clienti consecutivi ($v_i, v_j$) viene spostata in un'altra route. Scambio (2-1): la coppia ($v_i, v_j$) viene scambiata con un singolo cliente $v_k$ dell'altra route.

---
## Slide 161 – Vehicle Routing Problem

**Post-Ottimizzazione: scambi fra route**

![[RO02-s161-1.png|500]]

Scambio (2-2) tra le route $R_{r'}$ e $R_{r''}$.

**Quale altra mossa si potrebbe implementare?**

>> Esempi: scambi $(\lambda, \mu)$ con sequenze più lunghe (es. 3-0, 3-1, ...); la mossa **2-opt\*** che taglia due route in un punto e ne scambia le "code"; mosse intra-route come 2-opt/3-opt/Or-opt per migliorare l'ordine di visita di ogni singola route; la fusione di due route in una sola (riduce il numero di veicoli).

---
## Slide 162 – Intelligenza Artificiale

- Al giorno d'oggi, quando si parla di supporto alle decisioni, la mente va subito all'**Intelligenza Artificiale** (AI).
- Come abbiamo visto finora, molti problemi relativi al supporto alle decisioni possono essere risolti con la **programmazione matematica** e l'**ottimizzazione combinatoria**.
- Ora vogliamo ricordare in cosa consiste l'Intelligenza Artificiale oggi per comprendere meglio la relazione tra ottimizzazione e AI.
- Abbiamo già detto che oggi l'AI copre l'area degli **algoritmi euristici**, consentendo di determinare delle soluzioni di un problema, senza riuscire a dimostrare che le soluzioni trovate siano ottime oppure fornire delle stime della distanza dalla soluzione ottima.
- Non solo, **molti algoritmi di AI spesso non danno neppure la garanzia che la soluzione trovata sia "corretta"**.

>> Il legame è anche inverso: l'addestramento della maggior parte dei modelli di machine learning è esso stesso un problema di ottimizzazione (minimizzare una funzione di errore/perdita), come si vedrà con la regressione lineare.

---
## Slide 163 – Intelligenza Artificiale

**Alcuni esempi di applicazioni**

- **Diagnosi medica:** definire se un paziente è affetto da una patologia, etc.
- **Previsioni del tempo:** stabilire le condizioni meteo per domani, etc.
- **Spam filtering:** identificare quali messaggi sono spam oppure no.
- **Riconoscimento scrittura:** per digitalizzare un testo scritto a mano, etc.
- **Face detection:** riconoscere un volto tra quelli in un archivio, etc.
- **Riconoscimento vocale:** riconoscimento di un comando vocale, etc.
- **Topic spotting:** classificare articoli, etc.
- **Customer segmentation:** predire il comportamento dei clienti a fronte di una promozione, di determinati prodotti, etc.
- **Fraud detection:** identificare comportamenti fraudolenti, etc.
- Etc.

---
## Slide 164 – Intelligenza Artificiale

- Nel contesto del **machine learning** abbiamo due possibili approcci: **supervisionato** e **non-supervisionato**.
- Un algoritmo di apprendimento supervisionato usa un insieme di dati di input di cui è noto il corrispondente output corretto e "**impara**" a rispondere in modo "**autonomo**" quando poi si avranno nuovi dati in input.

![[RO02-s164-1.png|400]]

1. Known Data + Known Responses → Model
2. Model + New Data → Predicted Responses

>> Nell'apprendimento non-supervisionato, invece, non si dispone delle risposte corrette: l'algoritmo cerca da solo una struttura nei dati (ad esempio gruppi di elementi simili, come nel clustering).

---
## Slide 165 – Intelligenza Artificiale

- Il processo di apprendimento può essere riassunto come segue:

![[RO02-s165-1.png|350]]

(Training set → Learning algorithm → $h$; $x \to h \to$ predicted $y$)

- Quando le variabile che forniscono la previsione sono continue, siamo solitamente di fronte a un problema di "**regressione**".
- Quando l'output può assumere solo un insieme discreto di valori è probabile che ci troviamo di fronte a un problema di "**classificazione**".

>> $h$ (da *hypothesis*) è la funzione appresa dall'algoritmo a partire dal training set, che associa a un nuovo input $x$ la previsione $y = h(x)$. Esempio: prevedere il prezzo di una casa è regressione; decidere se una mail è spam è classificazione.

---
## Slide 166 – Intelligenza Artificiale

- Una **regressione** ci permette di costruire quelle funzioni che meglio dovrebbero approssimare il comportamento del fenomeno di nostro interesse.
- Per costruire la funzione possiamo usare i dati a nostra disposizione.
- Quando il modello sarà definito potremo svolgere delle previsioni rispetto ad altri possibili input.

![[RO02-s166-1.png|600]]

>> Le tre figure mostrano modelli di complessità crescente sugli stessi dati: una retta, una curva "morbida" e un polinomio di grado elevato. Il terzo passa vicinissimo ai punti ma oscilla molto (overfitting): approssima bene i dati noti ma prevede male i nuovi input.

---
## Slide 167 – Intelligenza Artificiale

- Quando dobbiamo svolgere una **classificazione**, dobbiamo definire a quale elemento dell'insieme discreto di output deve corrispondere un certo input (quindi a quale "categoria" appartiene).

![[RO02-s167-1.png|350]]

---
## Slide 168 – Intelligenza Artificiale

- Tra i metodi di classificazione dell'AI uno dei più efficaci è noto come **Support Vector Machine** (SVM), che è un metodo supervisionato.
- Le SVMs sono basate sulla definizione di iperpiani di separazione.

![[RO02-s168-1.png|550]]

>> Molti iperpiani possono separare le due classi (figura a destra); la SVM sceglie quello con **margine massimo**, cioè a distanza massima dai punti più vicini delle due classi (i *support vector*). Trovarlo è un problema di ottimizzazione quadratica convessa: un altro punto di contatto tra AI e ricerca operativa.

---
## Slide 169 – Intelligenza Artificiale

- Tra i metodi di classificazione non-supervisionato possiamo citare l'algoritmo **k-Means Clustering**.

![[RO02-s169-1.png|500]]

>> Le figure (a)–(f) mostrano k-Means con $k = 2$: (a) dati iniziali; (b) scelta di 2 centroidi (croci); (c) ogni punto è assegnato al centroide più vicino; (d) i centroidi sono ricalcolati come media dei punti assegnati; (e)–(f) si ripetono assegnazione e aggiornamento finché i cluster non cambiano più. L'algoritmo è un'euristica di ricerca locale che minimizza la somma dei quadrati delle distanze dai centroidi (converge a un minimo locale).

---
## Slide 170 – Regressione Lineare

- Vediamo come possiamo costruire un semplice modello lineare.
- Possiamo ricavare un modello lineare "***interpolando***" due punti, ossia trovando l'equazione della retta passante per i due punti dati.
- Normalmente, però, si hanno più di due punti a disposizione e non sono quasi mai "***allineati***". In alcuni casi lo sono quasi, mentre in altri sono ben lontani dall'esserlo. In tutti questi casi, il problema è trovare l'equazione della retta che "***meglio approssima***" i punti dati.
- Perché **dobbiamo** avere più di due punti?
- Perché non sono allineati?
- Cosa significa che "***meglio approssima***" i punti dati? Perché ci interessa tanto calcolare questa funzione?
- Qualche idea su come determinare l'equazione della retta che "*meglio approssima*" i punti dati?

>> Due punti determinano sempre una retta, ma non dicono nulla sulla bontà del modello: servono più osservazioni per stimare una tendenza affidabile. I punti non sono allineati perché i dati reali contengono rumore, errori di misura e fattori non considerati dal modello.

---
## Slide 171 – Regressione Lineare

- **Esempio:** Supponiamo di avere i dati sulle vendite di case nuove in una determinata regione nel corso di un anno, che riassumiamo nella seguente tabella:

| Prezzo Vendita (migliaia di Euro) | 150-169 | 170-189 | 190-209 | 210-229 | 230-249 | 250-269 | 270-289 |
|---|---|---|---|---|---|---|---|
| Numero di case vendute | 126 | 103 | 82 | 75 | 82 | 40 | 20 |

Vorremo utilizzare questi dati per costruire una funzione lineare che "***meglio approssima***" i punti dati. Perché una funzione lineare?

Un primo problema da risolvere riguarda i prezzi di vendita, che sono espressi in termini di "***intervalli***". Qual è il problema? Come lo si risolve?

Il metodo più semplice ed efficace consiste nel sostituire ciascun intervallo con un singolo prezzo, che possiamo far corrisponde al valore al centro dell'intervallo.

>> Il problema è che un punto nel piano richiede un valore numerico singolo per ciascuna coordinata, mentre un intervallo non lo è. Una funzione lineare si usa perché è il modello più semplice e i dati mostrano un andamento approssimativamente decrescente in modo regolare.

---
## Slide 172 – Regressione Lineare

- La nuova tabella è la seguente:

| Prezzo Vendita (migliaia di Euro) | 160 | 180 | 200 | 220 | 240 | 260 | 280 |
|---|---|---|---|---|---|---|---|
| Numero di case vendute | 126 | 103 | 82 | 75 | 82 | 40 | 20 |

Con un Excel possiamo "disegnare" i punti su un piano cartesiano.

![[RO02-s172-1.png|450]]

>> Attenzione: nel grafico le etichette degli assi risultano invertite rispetto ai dati. Sull'asse orizzontale (100–300) ci sono in realtà i prezzi di vendita, sull'asse verticale (0–140) il numero di case vendute.

---
## Slide 173 – Regressione Lineare

- Vorremo che la retta fosse il più vicina possibile ai dati di vendita reali (**dati osservati**). In altre parole, vogliamo minimizzare la differenza "complessiva" tra i valori previsti (sulla retta) e quelli osservati.

![[RO02-s173-1.png|500]]

(Valore osservato, Valore previsto, Errore)

---
## Slide 174 – Regressione Lineare

- Una possibile **retta di regressione** può essere calcolata con il metodo dei **minimi quadrati**.
- Siano dati $n$ punti (dati osservati): $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$
- La retta che meglio approssima i dati osservati in base al metodo dei minimi quadrati ha la forma:

$$y = mx + b$$

dove

$$m = \frac{n\left(\sum_{i=1}^{n} x_i y_i\right) - \left(\sum_{i=1}^{n} x_i\right)\left(\sum_{i=1}^{n} y_i\right)}{n\left(\sum_{i=1}^{n} x_i^2\right) - \left(\sum_{i=1}^{n} x_i\right)^2}$$

$$b = \frac{\sum_{i=1}^{n} y_i - m\left(\sum_{i=1}^{n} x_i\right)}{n}$$

- **Come sono state derivate queste formule? E perché funzionano?**

>> Applicando le formule ai dati della slide 170 ($n = 7$, $\sum x_i = 1540$, $\sum y_i = 528$, $\sum x_i y_i = 107280$, $\sum x_i^2 = 350000$):
>> $m = \dfrac{7 \cdot 107280 - 1540 \cdot 528}{7 \cdot 350000 - 1540^2} = \dfrac{-62160}{78400} \approx -0{,}793$, $\quad b = \dfrac{528 + 0{,}793 \cdot 1540}{7} \approx 249{,}9$.
>> Quindi (numero di case vendute) $\approx -0{,}793 \cdot$ prezzo $+ 249{,}9$: circa 0,8 case vendute in meno per ogni mille euro di prezzo in più.

---
## Slide 175 – Regressione Lineare

- **La buona/cattiva notizia:** per poter derivare la retta di regressione dei minimi quadrati dobbiamo conoscere il **calcolo differenziale**.
- Ricordiamo che i metodi di regressione sono una delle metodologie di base utilizzate nell'ambito "***Data Science***" e, in particolare, nell'ambito "***Machine Learning***".
- Per determinare la retta di regressione si vuole minimizzare l'errore tra i punti forniti dalla retta e i punti relativi alle osservazioni.
- Quindi, la retta di regressione che meglio approssima i dati osservati in base al metodo dei minimi quadrati ha la forma:

$$y = mx + b \quad \Longrightarrow \quad \bar{y}_i = m x_i + b$$

- L'errore $e_i$ per ciascun punto $(x_i, y_i)$ relativo alle osservazioni è:

$$e_i = |\bar{y}_i - y_i| = |m x_i + b - y_i|$$

---
## Slide 176 – Regressione Lineare

- L'errore complessivo è dato dalla somma degli errori $e_i$:

$$Errore = \sum_{i=1}^{n} |\bar{y}_i - y_i| = \sum_{i=1}^{n} |m x_i + b - y_i|$$

- Il problema consiste nel determinare il coefficiente angolare $m$ e l'intercetta $b$, che consentono di minimizzare l'errore. Per cui dobbiamo trovare il minimo della seguente funzione:

$$e(m, b) = \sum_{i=1}^{n} |m x_i + b - y_i|$$

- Siccome il valore assoluto rende più difficile la soluzione del problema si è preferito usare il "quadrato" (**perché?**):

$$e(m, b) = \sum_{i=1}^{n} (m x_i + b - y_i)^2$$

>> Il valore assoluto non è derivabile nello zero, quindi non si possono usare direttamente le condizioni sul gradiente; il quadrato invece è derivabile ovunque e convesso, e porta a un sistema lineare con soluzione in forma chiusa. Inoltre il quadrato penalizza di più gli errori grandi.
>>
>> Nota: anche la versione con il valore assoluto si può risolvere, ma con la programmazione lineare: minimizzare $\sum_i t_i$ con $t_i \ge m x_i + b - y_i$ e $t_i \ge -(m x_i + b - y_i)$.

---
## Slide 177 – Regressione Lineare

- Per cui vogliamo trovare il punto $(m, b)$ in cui la funzione $e(m, b)$ ha un minimo:

$$e(m, b) = \sum_{i=1}^{n} (m x_i + b - y_i)^2$$

- Si noti che la funzione $e(m, b)$ è una funzione quadratica. Per cui se ha un minimo relativo, questo è anche minimo globale.
- Per trovare il punto di minimo applichiamo le condizioni necessarie del primo ordine (i.e., trovare il punto in cui $\nabla f = \mathbf{0}$):

$$\nabla e = \begin{bmatrix} \dfrac{\partial e}{\partial m} \\[2mm] \dfrac{\partial e}{\partial b} \end{bmatrix} = \begin{bmatrix} \displaystyle\sum_{i=1}^{n} 2(m x_i + b - y_i)\, x_i \\ \displaystyle\sum_{i=1}^{n} 2(m x_i + b - y_i) \end{bmatrix}$$

>> Più precisamente, $e(m,b)$ è una somma di quadrati, quindi una quadratica convessa (la sua matrice hessiana $2\begin{bmatrix} \sum x_i^2 & \sum x_i \\ \sum x_i & n \end{bmatrix}$ è semidefinita positiva): per questo il punto stazionario è un minimo globale. Se gli $x_i$ non sono tutti uguali, l'hessiana è definita positiva e il minimo è unico.
>> Le derivate si ottengono con la regola della catena: $\frac{\partial}{\partial m}(m x_i + b - y_i)^2 = 2(m x_i + b - y_i)\, x_i$.

---
## Slide 178 – Regressione Lineare

- Per trovare il punto di minimo dobbiamo risolvere il seguente sistema lineare:

$$\nabla e = \begin{bmatrix} \displaystyle\sum_{i=1}^{n} 2(m x_i + b - y_i)\, x_i \\ \displaystyle\sum_{i=1}^{n} 2(m x_i + b - y_i) \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$

- Il sistema lo possiamo scrivere anche come segue:

$$\begin{cases} \displaystyle\sum_{i=1}^{n} m x_i^2 + b x_i - x_i y_i = 0 \\ \displaystyle\sum_{i=1}^{n} m x_i + b - y_i = 0 \end{cases} \quad \Longrightarrow \quad \begin{cases} \displaystyle\sum_{i=1}^{n} m x_i^2 + \sum_{i=1}^{n} b x_i - \sum_{i=1}^{n} x_i y_i = 0 \\ \displaystyle\sum_{i=1}^{n} m x_i + \sum_{i=1}^{n} b - \sum_{i=1}^{n} y_i = 0 \end{cases}$$

>> Il fattore $2$ si elimina dividendo entrambe le equazioni per $2$. Si osservi che $\sum_{i=1}^{n} b = nb$.

---
## Slide 179 – Regressione Lineare

- Semplificando la notazione e ricavando $b$, abbiamo:

$$\begin{cases} m\sum x_i^2 + b\sum x_i = \sum x_i y_i \\ m\sum x_i + nb = \sum y_i \end{cases} \quad \Longrightarrow \quad \begin{cases} m\sum x_i^2 + b\sum x_i = \sum x_i y_i \\ b = \dfrac{\sum y_i - m\sum x_i}{n} \end{cases}$$

- Se sostituiamo $b$ nella prima equazione abbiamo:

$$\begin{cases} m\sum x_i^2 + \dfrac{1}{n}\sum x_i \sum y_i - \dfrac{1}{n} m \left(\sum x_i\right)^2 = \sum x_i y_i \\ b = \dfrac{\sum y_i - m\sum x_i}{n} \end{cases}$$

- Moltiplicando la prima equazione per $n$ e raccogliendo $m$, si ha:

$$\begin{cases} m\left(n\sum x_i^2 - \left(\sum x_i\right)^2\right) = n\sum x_i y_i - \sum x_i \sum y_i \\ b = \dfrac{\sum y_i - m\sum x_i}{n} \end{cases}$$

>> La seconda equazione dice che $b = \bar{y} - m\bar{x}$ (con $\bar{x}, \bar{y}$ medie dei dati): la retta dei minimi quadrati passa sempre per il baricentro $(\bar{x}, \bar{y})$ dei punti.

---
## Slide 180 – Regressione Lineare

- Dal seguente sistema:

$$\begin{cases} m\left(n\sum x_i^2 - \left(\sum x_i\right)^2\right) = n\sum x_i y_i - \sum x_i \sum y_i \\ b = \dfrac{\sum y_i - m\sum x_i}{n} \end{cases}$$

si ricavano facilmente le espressioni per calcolare il coefficiente angolare $m$ e l'intercetta $b$:

$$\begin{cases} m = \dfrac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - \left(\sum x_i\right)^2} \\[4mm] b = \dfrac{\sum y_i - m\sum x_i}{n} \end{cases}$$

>> La divisione è lecita se $n\sum x_i^2 - (\sum x_i)^2 \neq 0$; questa quantità vale $n^2$ volte la varianza degli $x_i$, quindi è nulla solo se tutti gli $x_i$ coincidono (punti su una retta verticale, per cui non esiste una retta $y = mx + b$ adatta).
>> Equivalentemente: $m = \dfrac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sum (x_i - \bar{x})^2}$ (covarianza / varianza).

---
## Slide 181 – Conclusioni

- Quando dobbiamo risolvere un problema dobbiamo costruire un **modello** che sia risolvibile da un **algoritmo** adeguato alla **complessità del problema** e alla tipologia di **istanze** che dobbiamo risolvere.
- Il problema del knapsack è solo uno degli esempi più semplici di applicazione della programmazione matematica e ottimizzazione combinatoria a problemi di ottimizzazione.
- Nell'ambito della gestione aziendale (**management science**) l'uso della matematica consente di definire degli algoritmi per il supporto alle decisioni.
- Le keyword di moda oggi che identificano i campi di applicazione sono **business analytics**, **data science**, etc.
- La disciplina è nota come **operations research** (ricerca operativa) e fa parte del settore **decision science** (scienze decisionali).

---

## Riassunto

>> **Concetti di base**
>> - **Problema**: domanda astratta. **Istanza**: i dati concreti del problema. Per risolvere un problema servono un **modello** e un **algoritmo**.
>> - Modelli **deterministici** (parametri noti con certezza) e **stocastici** (parametri incerti, spesso trattati con scenari).
>> - Errore di calcolo = errore di **troncamento** + errore di **arrotondamento**. 0,2 non ha una rappresentazione binaria finita: nella ricorsione $x_{i+1} = 11x_i - 10x_0$ l'errore cresce come $11^i$.
>> - Un'istanza è **malcondizionata** quando piccole variazioni dei dati cambiano molto la soluzione (ad esempio con rette quasi parallele).
>>
>> **Complessità**
>> - I problemi possono essere di decisione, ricerca, enumerazione o ottimizzazione. Il TSP ha fino a $n!$ soluzioni.
>> - $P \subseteq NP$. NP (tempo polinomiale non deterministico) è la classe dei problemi decisionali in cui una risposta "sì" si verifica in tempo polinomiale. Non si sa se $P = NP$.
>> - **NP-Completo**: sta in NP e ogni problema di NP si riduce polinomialmente a esso. **NP-Hard**: vi si riduce un problema NP-Completo, ma può anche non stare in NP.
>>
>> **Programmazione matematica**
>> - Forma generale: $\min f(\mathbf{x})$ con vincoli $g_i \le b_i$, $h_j = d_j$ e $\mathbf{x} \ge 0$. Si distinguono PL continua (facile), PL intera e PL mista intera.
>> - Con le disequazioni servono le **variabili di scarto** $\ge 0$. Se c'è un ottimo finito, almeno un **vertice** della regione ammissibile è ottimo.
>> - Nei problemi di minimo vale $z_{LB} \le z^* \le z_{UB}$: una soluzione ammissibile dà l'UB, il rilassamento dà il LB. Nei problemi di massimo i ruoli si invertono.
>> - I **prezzi ombra** (variabili duali) indicano quanto migliora l'obiettivo per ogni unità in più di risorsa.
>>
>> **Knapsack 0–1**
>> - Il problema è $\max \sum p_i x_i$ con $\sum w_i x_i \le W$ e $x_i \in \{0,1\}$.
>> - **Rilassamento lineare**: si ordinano gli oggetti per $p_i/w_i$ e al più una variabile risulta frazionaria (lo splitting item). Il suo valore è un upper bound.
>> - **Branch and bound**: si ramifica con $x_i = 0$ e $x_i = 1$ e si pota un nodo quando UB < LB.
>> - La **programmazione dinamica** risolve il problema in $O(nW)$, cioè in tempo pseudopolinomiale.
>>
>> **TSP**
>> - Il modello è formato dai vincoli di assegnamento più i vincoli di **subtour elimination**, che sono in numero esponenziale e si aggiungono solo quando risultano violati.
>> - Aggiungere disuguaglianze valide durante il branch and bound porta al **branch and cut**.
>>
>> **Metaeuristiche**
>> - La **ricerca locale** si ferma nei minimi locali. Gli intorni classici per il TSP sono 2-opt, 3-opt e Or-opt.
>> - **Tabu Search**: si passa sempre al miglior vicino non tabu, anche se è peggiore. La tabu list impedisce di ciclare.
>> - **Simulated Annealing**: un peggioramento $\Delta$ viene accettato con probabilità $e^{-\Delta/(kT)}$, mentre la temperatura $T$ diminuisce progressivamente.
>> - **Algoritmi genetici**: si basano su selezione, crossover (che intensifica) e mutazione (che diversifica). Nel Set Covering si usano il fusion crossover e un operatore di repair.
>> - **VRP con Tabu Search**: la penalità $\alpha$ sul sovraccarico è auto-adattiva e l'inserimento dei clienti si valuta con l'extra-mileage $c_{ik}+c_{kj}-c_{ij}$.
>>
>> **Regressione lineare**
>> - Si minimizza $\sum (mx_i+b-y_i)^2$. Si ottengono $m = \frac{n\sum x_iy_i - \sum x_i\sum y_i}{n\sum x_i^2 - (\sum x_i)^2}$ e $b = \frac{\sum y_i - m\sum x_i}{n}$.
>> - Si usa il quadrato invece del valore assoluto perché è derivabile e convesso.
