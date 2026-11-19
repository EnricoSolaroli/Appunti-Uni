[Guida_Modellazione_PL](<file:///Users/enrico/Library/Mobile Documents/iCloud~md~obsidian/Documents/obsidian_sola/università/ricerca operativa/appunti whatsApp/Guida_Modellazione_PL.pdf>)

# Guida alla modellazione di Programmazione Lineare (intera)

>> Nota ricavata dal PDF "Guida_Modellazione_PL" (appunti WhatsApp, non materiale del prof). Rispetto al PDF ho corretto:
>> - il vincolo di domanda del trasporto nella tabella finale: era $\le b_j$, deve essere $\ge b_j$;
>> - la frase sull'albero ricoprente minimo, che diceva che non ha una funzione obiettivo "classica";
>> - la regola dell'"indice libero sempre", che non vale per i vincoli globali;
>> - il segnale "almeno un/una", spostato dalle variabili binarie ai vincoli di copertura;
>> - la frase confusa del passo 4.
>>
>> Le aggiunte mie sono nei blocchi `>>`. Prima dell'esame confronta i pattern con i testi d'esame del prof: alcuni (scheduling, ritardi) potrebbero non uscire mai.

## Indice

1. [[#Passo 0 – Leggi il testo due volte|Passo 0: lettura del testo]]
2. [[#Passo 1 – Variabili decisionali|Passo 1: variabili decisionali]]
3. [[#Passo 2 – Funzione obiettivo|Passo 2: funzione obiettivo]]
4. [[#Passo 3 – Vincoli, una frase alla volta|Passo 3: vincoli]]
5. [[#Passo 4 – Dominio delle variabili|Passo 4: dominio delle variabili]]
6. [[#Passo 5 – Checklist finale|Passo 5: checklist finale]]
7. [[#Esempi rapidi|Esempi rapidi]]
8. [[#Errori più comuni|Errori più comuni]]

Procedura fissa da seguire sempre nello stesso ordine: Passo 0 → 1 → 2 → 3 → 4 → 5.

---
## Passo 0 – Leggi il testo due volte

- **Prima lettura:** capisci solo la storia (cosa succede, chi sono gli attori). Non scrivere nulla.
- **Seconda lettura:** individua sempre le stesse 4 cose:
	- **dati**: capacità, costi, disponibilità, richieste, tempi, anche se generici ($a_i$, $c_{ij}$);
	- **verbo di ottimizzazione**: "minimizzare", "massimizzare", "il meno/il più possibile";
	- **parole di decisione**: "scegliere", "assegnare", "decidere quanti/quali/se";
	- **frasi con "deve", "non può", "al massimo", "almeno"**: sono i vincoli.

---
## Passo 1 – Variabili decisionali

Domanda guida: *cosa deve decidere chi risolve il problema?*

**Tipo di variabile**

| Segnale nel testo | Tipo |
|---|---|
| "quanto", "quanta merce/tempo" (grandezza divisibile) | continua $\ge 0$ |
| "quanti pezzi/persone/camion" (non divisibile) | intera $\ge 0$ |
| "se… oppure no", "usare o non usare", "aprire o no", "assegnare o no" | binaria $\in \{0,1\}$ |

- Regola pratica: se il testo usa "se" riferito a un **evento** (non a una quantità), quasi sicuramente serve una variabile binaria in più, anche se non è quella principale.

>> "Almeno un/una" di solito **non** indica una variabile binaria: indica un **vincolo di copertura** ($\ge 1$, vedi passo 3).

**Indici**

- Decisione su un solo elemento ("quanto produco del prodotto $j$") → un indice: $x_j$.
- Decisione che collega due insiemi ("quanto spedisco dal deposito $i$ alla destinazione $j$", "assegno il lavoratore $i$ al turno $j$") → due indici: $x_{ij}$.
- Un terzo insieme (es. il tempo) → tre indici: $x_{ijk}$.

***Trucco:*** scrivi a parole cosa rappresenta la variabile **prima** del simbolo, es. "$x_{ij}$ = quantità spedita dal deposito $i$ alla destinazione $j$". Se la frase non viene naturale, probabilmente gli indici sono sbagliati.

---
## Passo 2 – Funzione obiettivo

Domanda guida: *cosa sto sommando per ottenere il totale da minimizzare o massimizzare?*

**Costi e profitti**

| Il testo dice | Obiettivo |
|---|---|
| "minimizzare il costo totale" (proporzionale alla quantità) | $\min \sum_i \sum_j c_{ij} x_{ij}$ |
| "massimizzare il profitto/ricavo" | $\max \sum_j p_j x_j$ |
| "massimizzare il valore totale" (zaino: scegliere oggetti) | $\max \sum_j v_j x_j$, $x_j$ binaria |
| "costo con parte fissa e parte variabile" | $\min \sum c_{ij} x_{ij} + \sum f_{ij} y_{ij}$ |
| "costo di apertura + assegnamento" (facility location) | $\min \sum_j f_j y_j + \sum_i \sum_j c_{ij} x_{ij}$ |

**Contare le risorse usate**

| Il testo dice | Obiettivo |
|---|---|
| "minimizzare il numero di … usati/aperti/necessari" (veicoli, turni, persone, contenitori) | $\min \sum_j y_j$ ($y_j$ binaria = 1 se la risorsa $j$ è usata) |

**Tempo e scheduling**

| Il testo dice | Obiettivo |
|---|---|
| "minimizzare il tempo totale di completamento" | $\min \sum_j C_j$ ($C_j$ = completamento del job $j$, definito da altri vincoli) |
| "minimizzare il tempo di completamento massimo" (makespan) | $\min T$ con $T \ge C_j \ \forall j$ |
| "minimizzare il ritardo" | $T_j = \max(0, C_j - d_j)$, linearizzato con $T_j \ge C_j - d_j$ e $T_j \ge 0$ |
| "massimizzare i job completati in tempo" | $\max \sum_j y_j$, $y_j$ = 1 se il job $j$ rispetta la scadenza |

>> La linearizzazione del ritardo funziona solo perché si **minimizza**: l'ottimo spinge $T_j$ al valore più piccolo ammesso, cioè $\max(0, C_j - d_j)$.

**Copertura e assegnamento**

| Il testo dice | Obiettivo |
|---|---|
| "minimo numero di risorse per coprire tutto" (set covering) | $\min \sum_j y_j$ con vincoli di copertura |
| "massimizzare gli elementi coperti con risorse limitate" (max coverage) | $\max \sum_i z_i$, $z_i$ = 1 se $i$ è coperto |
| "minimizzare il costo di assegnamento" | $\min \sum_i \sum_j c_{ij} x_{ij}$, $x_{ij}$ binaria |

>> Max coverage: serve anche il vincolo che lega $z_i$ alle risorse, $z_i \le \sum_{j \text{ che coprono } i} y_j \ \forall i$, altrimenti $z_i$ si mette a 1 da sola.

**Bilanciamento, min-max, max-min**

| Il testo dice | Obiettivo |
|---|---|
| "minimizzare il carico massimo" | $\min T$ con $T \ge$ (carico della risorsa $j$) $\forall j$ |
| "massimizzare il valore minimo garantito" | $\max U$ con $U \le$ (valore dell'agente $i$) $\forall i$ |
| "minimizzare lo scostamento da un obiettivo" | $\min \sum_i (d_i^+ + d_i^-)$, con $d_i^+, d_i^- \ge 0$ |

>> Scostamento: serve il vincolo (valore ottenuto) $- \text{obiettivo}_i = d_i^+ - d_i^- \ \forall i$.

**Reti e flussi**

| Il testo dice | Obiettivo |
|---|---|
| "flusso massimo da $s$ a $t$" | $\max v$, $v$ = flusso uscente da $s$ (si risolve con l'algoritmo di etichettatura) |
| "costo minimo di trasporto su una rete" (min cost flow) | $\min \sum_{(i,j)} c_{ij} x_{ij}$ sugli archi del grafo |
| "albero ricoprente di costo minimo" | $\min \sum_{e} c_e x_e$, $x_e$ binaria (si risolve con Kruskal o Prim) |

>> L'albero ricoprente minimo ha un obiettivo lineare del tutto normale. La parte difficile sono i vincoli: $\sum_e x_e = n - 1$ più i vincoli che vietano i cicli (o impongono la connessione), che sono in numero esponenziale. Per questo non si risolve col simplesso. Se all'esame chiedono solo di calcolarlo bastano Kruskal o Prim; se chiedono il modello, va scritto.

**Come riconoscere il pattern**

- Quantità che si sommano (costi, profitti, tempi cumulati) → sommatoria diretta $\sum c_j x_j$.
- Un valore che è il peggiore o il migliore fra tanti ("il massimo", "il più lungo", "il minimo garantito") → **variabile ausiliaria** ($T$ o $U$) con un vincolo per ogni elemento: pattern min-max / max-min.
- Due tipi di costo (fisso + variabile, apertura + assegnamento) → due sommatorie, una per famiglia di variabili.

***Trucco:*** l'obiettivo usa solo le variabili definite al passo 1. Se serve un simbolo nuovo, torna al passo 1 e aggiungilo.

---
## Passo 3 – Vincoli, una frase alla volta

Non cercare di "vedere" tutti i vincoli insieme: rileggi il testo frase per frase e chiediti se impone un limite.

| Frase-spia | Vincolo | Significato |
|---|---|---|
| "ciascun … assegnato a uno e un solo …" | $\sum_j x_{ij} = 1 \ \forall i$ | assegnamento esatto |
| "ciascun … coperto da almeno un …" | $\sum_j x_{ij} \ge 1 \ \forall i$ | copertura |
| "non si può superare la capacità/disponibilità" | $\sum_i x_{ij} \le u_j \ \forall j$ | capacità |
| "bisogna soddisfare almeno la domanda" | $\sum_i x_{ij} \ge d_j \ \forall j$ | domanda minima |
| "… se viene usato/aperto …" (costo fisso) | $x_{ij} \le M_{ij}\, y_{ij} \ \forall i,j$ | Big-M: se $y = 0$ allora $x = 0$ |
| "non si possono fare insieme A e B" | $y_A + y_B \le 1$ | mutua esclusione |
| "se si fa A si deve fare anche B" | $y_A \le y_B$ | implicazione |
| "servono almeno $k$ delle opzioni" | $\sum_i y_i \ge k$ | soglia minima |
| "il carico di un contenitore non supera la capacità, e conta solo se è usato" | $\sum_i w_i x_{ij} \le W\, y_j \ \forall j$ | capacità + Big-M insieme |

>> Big-M: scegli $M$ il più piccolo possibile che non tagli soluzioni ammissibili, es. $M_{ij} = \min(a_i, b_j)$ nel trasporto con costo fisso. Un $M$ enorme è corretto ma peggiora il rilassamento continuo.
>> Facility location: il vincolo che lega assegnamento e apertura è $x_{ij} \le y_j \ \forall i,j$ (non puoi servire il cliente $i$ da un impianto chiuso).

***Indici:***
- Se il vincolo vale "per ogni" elemento (ogni oggetto, ogni contenitore), l'indice resta **libero** fuori dalla sommatoria e si scrive $\forall i$.
- Se riguarda il totale su tutti (un budget $\sum_j c_j x_j \le B$, "almeno $k$ opzioni"), l'indice va **dentro** la sommatoria e il vincolo è uno solo.

---
## Passo 4 – Dominio delle variabili

Ultima riga del modello, da non dimenticare mai:

- continue: $x_{ij} \ge 0$
- intere: $x_{ij} \ge 0$ intere (oppure $x_{ij} \in \mathbb{Z}_+$)
- binarie: $x_{ij} \in \{0,1\}$

>> Scrivere "$0 \le x_{ij} \le 1$, intera" è equivalente a $x_{ij} \in \{0,1\}$, ma la notazione $\{0,1\}$ è più chiara ed è quella usata di solito.

---
## Passo 5 – Checklist finale

1. Ogni simbolo nell'obiettivo e nei vincoli è stato definito al passo 1?
2. Ogni dato del testo ($a_i$, $c_{ij}$, $W$…) compare almeno una volta? Un dato mai usato di solito indica un vincolo dimenticato.
3. Ogni frase con "deve / non può / almeno / al massimo" ha il suo vincolo?
4. Gli indici sono coerenti? (vincoli con $i$ libero ripetuti $\forall i$, con $j$ libero $\forall j$)
5. C'è la riga del dominio delle variabili?
6. Se c'è un costo fisso o una decisione sì/no legata a una quantità, c'è il vincolo Big-M? (è il più dimenticato)

---
## Esempi rapidi

| Caso | Variabili | Obiettivo | Vincoli chiave |
|---|---|---|---|
| Bin packing (oggetti in contenitori) | $x_{ij}$, $y_j$ binarie | $\min \sum_j y_j$ | $\sum_j x_{ij} = 1 \ \forall i$; $\sum_i w_i x_{ij} \le W y_j \ \forall j$ |
| Trasporto | $x_{ij} \ge 0$ continue | $\min \sum_i \sum_j c_{ij} x_{ij}$ | $\sum_j x_{ij} \le a_i \ \forall i$; $\sum_i x_{ij} \ge b_j \ \forall j$ |
| Trasporto con costo fisso | $x_{ij} \ge 0$, $y_{ij}$ binarie | $\min \sum c_{ij} x_{ij} + \sum f_{ij} y_{ij}$ | vincoli del trasporto + $x_{ij} \le M_{ij} y_{ij} \ \forall i,j$ |

>> Nel PDF originale il vincolo di domanda del trasporto era scritto $\sum_i x_{ij} \le b_j$: è sbagliato. Con il segno $\le$ e un obiettivo di minimo costo, la soluzione ottima sarebbe non spedire niente.

---
## Errori più comuni

- ❌ Dimenticare il dominio delle variabili.
- ❌ Usare $\le$ dove serve $=$: "ciascun oggetto in un solo contenitore" è $= 1$; con $\le 1$ un oggetto potrebbe restare non assegnato.
- ❌ Dimenticare il Big-M quando c'è un costo fisso o un'attivazione condizionata.
- ❌ Mescolare gli indici: $\sum_i x_{ij} \le a_i$ invece di $\sum_j x_{ij} \le a_i$ (attenzione a quale indice resta libero e quale si somma).
- ❌ Dimenticare di ripetere un vincolo anche sull'altro indice, quando il testo lo richiede.
- ❌ Definire una variabile che non compare mai né nell'obiettivo né nei vincoli.
