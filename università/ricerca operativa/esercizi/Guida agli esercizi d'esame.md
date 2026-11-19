[Cheat Sheet (PDF originale)](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/ricerca operativa/esercizi/Cheat Sheet.pdf>)

# Ricerca Operativa – Guida agli esercizi d'esame

>> Nota ricavata dal "Cheat Sheet" (appunti di un collega). Ho tenuto gli **screenshot delle soluzioni d'esame del prof** e ho **riscritto io le procedure**, correggendo gli errori dell'originale:
>> - artificiali messe nei vincoli ≤;
>> - definizione di ammissibilità duale;
>> - numero di variabili duali;
>> - complementarietà ("le altre uguali a 1");
>> - etichette di Dijkstra;
>> - parti frazionarie di Gomory;
>> - $w_1$ invece di $w_2$ nei costi ridotti;
>> - bozza sbagliata sull'MST.
>>
>> Le procedure seguono le convenzioni del corso (problema di **min**, riga 0 = costi ridotti $\mathbf{w}\mathbf{a}_j - c_j$). Per la teoria vedi [[03 - Introduzione Programmazione Lineare]] e [[04 - Programmazione Lineare Intera]]. Grafi, cammini minimi, MST e flussi arriveranno nelle prossime lezioni.

## Indice

1. [[#Com'è fatto l'esame|Com'è fatto l'esame]]
2. [[#1. Modellazione|Modellazione]]
3. [[#2. Simplesso primale (due fasi)|Simplesso primale]]
4. [[#3. Simplesso duale|Simplesso duale]]
5. [[#4. Scrivere il duale di P|Duale di P]]
6. [[#5. Verificare l'ottimalità con la complementarietà|Complementarietà]]
7. [[#6. Variabili duali dal tableau ottimo|Variabili duali dal tableau]]
8. [[#7. Sensitività – costo di una variabile non in base|Sensitività sul costo]]
9. [[#8. Branch and Bound – una iterazione|Branch and Bound]]
10. [[#9. Taglio di Gomory|Taglio di Gomory]]
11. [[#10. Rilassamento lagrangiano e subgradiente|Rilassamento lagrangiano]]
12. [[#11. Cammini minimi – Dijkstra|Dijkstra]]
13. [[#12. Albero di copertura minimo – Kruskal e Prim|MST]]
14. [[#13. Sensitività sull'MST e verifica di un albero|Sensitività sull'MST]]
15. [[#14. Grafo aciclico e distance label|Grafo aciclico e distance label]]
16. [[#15. Flusso massimo e taglio s-t|Flusso massimo]]
17. [[#16. Domande di teoria|Teoria]]

---
## Com'è fatto l'esame

>> Struttura ricavata dagli screenshot (non è un documento ufficiale):
>>
>> | Esercizio | Contenuto tipico | Punti |
>> |---|---|---|
>> | 1 | Modello di PL/PLI da un testo | 4 |
>> | 2 | Simplesso primale o duale (a); duale di P (b) oppure sensitività su un costo (b) | 6 + 2/3 |
>> | 3 | Complementarietà: verificare se una $\mathbf{x}$ è ottima | 5–6 |
>> | 4 | PLI: taglio di Gomory oppure una iterazione di Branch and Bound | 6 |
>> | 5 | Grafi: Dijkstra, MST, flusso massimo, taglio s-t, sensitività sull'MST, aciclicità, distance label | 3 + 3 + 3 |
>> | 6 | Teoria: enunciati e dimostrazioni | 2–3 |
>>
>> **Come leggere i tableau stampati nelle soluzioni del prof**: la **prima colonna** è quella dei termini noti $\bar b$ (nella riga 0 c'è il valore di $z$), poi seguono le colonne $x_1, x_2, \dots$. È l'ordine opposto rispetto alle slide, dove $\bar b$ è l'ultima colonna.

---
## 1. Modellazione

>> Procedura completa in [[Guida alla modellazione PL]]. Esempio d'esame (bin packing: attività da assegnare alle settimane):

![[ROCS-095-076.png|600]]
![[ROCS-096-077.png|400]]

---
## 2. Simplesso primale (due fasi)

>> **Tableau iniziale**
>> 1. Riga 0 $= -\mathbf{c}$ (problema di min), con $z = 0$.
>> 2. Ogni vincolo con $b_i < 0$ va **prima** moltiplicato per $-1$ (si inverte il verso).
>> 3. Vincolo $\le$: slack $+s$, che è già una variabile in base. Vincolo $\ge$: surplus $-s$, che **non** può stare in base. Vincolo $=$: niente.
>>
>> **Serve la fase 1?** Se fra le colonne c'è già una matrice identità $m \times m$ (una colonna unitaria per ogni riga), no: si parte con la fase 2. Altrimenti si aggiunge un'**artificiale** nelle righe che non hanno una colonna unitaria, cioè quelle dei vincoli $\ge$ e $=$.
>>
>> **Fase 1** ($\min \sum$ artificiali)
>> 1. Riga 0 $= (0,\dots,0,-1,\dots,-1 \mid 0)$, con $-1$ sotto le artificiali.
>> 2. Si sommano alla riga 0 le righe in cui c'è un'artificiale, così sotto le colonne in base la riga 0 diventa zero.
>> 3. Pivot: **colonna** con il costo ridotto positivo massimo (a parità, indice minore); **riga** con il minimo $\bar b_i / y_i^k$ fra le righe con $y_i^k > 0$ (si ignorano zeri **e negativi**).
>> 4. Ci si ferma quando la riga 0 è tutta $\le 0$:
>> 	- $z_{P'} > 0$: P non ha soluzioni ammissibili;
>> 	- $z_{P'} = 0$ e nessuna artificiale in base: si passa alla fase 2;
>> 	- $z_{P'} = 0$ con un'artificiale in base (degenere): la si fa uscire pivotando su un elemento non nullo della sua riga, oppure si elimina la riga se è ridondante.
>>
>> **Fase 2**
>> 1. Si cancellano le colonne delle artificiali e si rimette $-\mathbf{c}$ nella riga 0.
>> 2. Si azzera la riga 0 sotto le variabili in base, sommando i giusti multipli delle loro righe.
>> 3. Si pivota con le stesse regole finché la riga 0 è tutta $\le 0$.
>>
>> **Controlli**: dopo ogni pivot i termini noti devono restare $\ge 0$; se no hai sbagliato un rapporto o un conto. Alla fine sostituisci la soluzione nei vincoli e nell'obiettivo. Esercizi svolti passo per passo in [[03.1 - Programmazione Lineare - Esercizi]].

Esempi d'esame:

![[ROCS-005-000.png|450]]
![[ROCS-006-001.png|550]]
![[ROCS-007-002.png|450]]

---
## 3. Simplesso duale

>> **Quando si applica**: serve una base **duale ammissibile**, cioè con la riga 0 tutta $\le 0$. I termini noti invece **possono** essere negativi: se fossero già tutti $\ge 0$ la base sarebbe anche primale ammissibile, quindi già ottima.
>>
>> **Base iniziale**
>> - I vincoli $\ge$ si moltiplicano per $-1$ e si aggiunge la slack $+s$: si ottiene subito la colonna unitaria (con termine noto negativo).
>> - Per un vincolo $=$ senza colonna unitaria si pivota su un **qualunque elemento non nullo** della sua riga (non serve il rapporto minimo).
>>
>> **Se la riga 0 ha costi ridotti $> 0$: vincolo artificiale**
>> 1. Si aggiunge la riga $\sum_{j \in N} x_j + x_{n+1} = M$: coefficiente $1$ sulle variabili **non in base**, $0$ su quelle in base, $1$ sulla nuova slack $x_{n+1}$.
>> 2. Si pivota su questa riga, nella colonna con il costo ridotto **massimo**: la riga 0 diventa tutta $\le 0$.
>> 3. Nelle soluzioni stampate dal prof $M$ è un numero ($M = 10000$, da qui i valori come $-10006$); a mano si lascia il simbolo $M$.
>>
>> **Iterazione**
>> - **Riga**: quella con il termine noto più negativo.
>> - **Colonna**: fra gli elementi **negativi** di quella riga, il minimo di $\left|\frac{\text{costo ridotto}}{y_r^j}\right|$.
>> - Se nella riga non ci sono elementi negativi, P non ha soluzioni ammissibili.
>> - Fine: tutti i termini noti $\ge 0$. Se c'è il vincolo artificiale: $x_{n+1} > 0$ → ottimo; $x_{n+1} = 0$ → P illimitato.
>>
>> **Controllo**: nel duale i costi ridotti devono restare $\le 0$ a ogni passo; se ne compare uno positivo c'è un errore.

Esempio d'esame (base iniziale col pivot su $(1,3)$, poi vincolo artificiale):

![[ROCS-013-007.png|550]]
![[ROCS-014-008.png|550]]

Altro esempio:

![[ROCS-017-011.png|550]]

---
## 4. Scrivere il duale di P

>> 1. Una **variabile duale per ogni vincolo** (righe di $A$) e un **vincolo duale per ogni variabile primale** (colonne di $A$).
>> 2. Obiettivo: min ↔ max, con i coefficienti presi da $\mathbf{b}$. I termini noti dei vincoli duali sono i $c_j$. I coefficienti del vincolo duale $j$ sono la colonna $j$ di $A$.
>> 3. Segni, se **P è di min**:
>>
>> | Primale (min) | Duale (max) |
>> |---|---|
>> | vincolo $i$: $\ge$ | $w_i \ge 0$ |
>> | vincolo $i$: $\le$ | $w_i \le 0$ |
>> | vincolo $i$: $=$ | $w_i$ libera |
>> | $x_j \ge 0$ | vincolo $j$: $\mathbf{w}\mathbf{a}_j \le c_j$ |
>> | $x_j \le 0$ | vincolo $j$: $\mathbf{w}\mathbf{a}_j \ge c_j$ |
>> | $x_j$ libera | vincolo $j$: $\mathbf{w}\mathbf{a}_j = c_j$ |
>>
>> Se P è di **max** si legge la tabella al contrario (il duale di un max è un min). Controllo veloce: il duale del duale deve tornare P.

![[ROCS-022-015.png|450]]
![[ROCS-022-016.png|550]]

---
## 5. Verificare l'ottimalità con la complementarietà

>> 1. **Ammissibilità primale**: sostituisci $\mathbf{x}$ nei vincoli. Se ne viola uno, $\mathbf{x}$ non è ottima. Annota quali vincoli sono **saturi** (uguaglianza) e quali no.
>> 2. Scrivi il duale D (sezione 4).
>> 3. **Vincolo primale non saturo** ⇒ la sua $w_i = 0$. Un vincolo saturo invece **non dice niente** su $w_i$: non va messa a 1.
>> 4. **$x_j > 0$** ⇒ il vincolo duale $j$ è **saturo** (si scrive con $=$). Da $x_j = 0$ non si ricava nulla.
>> 5. Risolvi il sistema e trova $\mathbf{w}$.
>> 6. **Controllo decisivo**: $\mathbf{w}$ deve rispettare **i segni** e **tutti i vincoli duali rimasti** (quelli con $x_j = 0$, come disuguaglianze).
>> 	- Se rispetta tutto, $\mathbf{x}$ (e $\mathbf{w}$) sono ottime.
>> 	- Se viola qualcosa, o il sistema non ha soluzione, $\mathbf{x}$ non è ottima.
>> 7. Controprova: $\mathbf{c}\mathbf{x} = \mathbf{w}\mathbf{b}$.

Soluzione ottima:

![[ROCS-025-017.png|550]]

Soluzione **non** ottima (una $w$ ha il segno sbagliato):

![[ROCS-027-019.png|500]]
![[ROCS-028-020.png|500]]

---
## 6. Variabili duali dal tableau ottimo

>> Nel tableau ottimo, sotto la colonna di una slack la riga 0 vale $c'_{s} = \mathbf{a}_s \mathbf{w} - c_s = \mathbf{a}_s \mathbf{w}$, perché $c_s = 0$:
>> - slack $+s_i$ di un vincolo $\le$ (colonna $+\mathbf{e}_i$): $w_i = c'_{s_i}$;
>> - surplus $-s_i$ di un vincolo $\ge$ (colonna $-\mathbf{e}_i$): $-w_i = c'_{s_i}$, quindi $w_i = -c'_{s_i}$.
>>
>> Esempio sotto: $c'_4 = -1$ (vincolo $\le$) dà $w_1 = -1$; $c'_5 = -3$ (vincolo $\ge$) dà $-w_2 = -3$, cioè $w_2 = 3$. I segni tornano: in un min, $\le$ → $w \le 0$ e $\ge$ → $w \ge 0$.

![[ROCS-058-042.png|600]]

---
## 7. Sensitività – costo di una variabile non in base

>> 1. Variabile non in base: quella che nel tableau ottimo **non** ha una colonna unitaria.
>> 2. Il suo costo ridotto $c'_j = \mathbf{a}_j\mathbf{w} - c_j \le 0$ si legge nella riga 0.
>> 3. Se il costo diventa $c_j + \Delta c$, solo il suo costo ridotto cambia, perché $\mathbf{w}$ dipende dalle variabili in base: $c'_j(\text{nuovo}) = c'_j - \Delta c$.
>> 4. La soluzione cambia quando $x_j$ diventa conveniente: $c'_j - \Delta c > 0 \iff \Delta c < c'_j$.
>> 5. In parole: il costo deve **scendere di più di $|c'_j|$**, cioè $c_j^{new} < c_j + c'_j$. Per $\Delta c = c'_j$ ci sono ottimi alternativi con lo stesso valore.
>>
>> Esempio: $c'_3 = -1$ e $c_3 = 1$ ⇒ cambia se $\Delta c < -1$, cioè se $c_3^{new} < 0$.

![[ROCS-047-032.png|500]]
![[ROCS-047-033.png|500]]
![[ROCS-048-034.png|600]]

Altro esempio ($x_1$ fuori base):

![[ROCS-050-036.png|500]]

---
## 8. Branch and Bound – una iterazione

>> 1. Dal tableau ottimo del rilassamento scegli una variabile in base **frazionaria** $x_k = \bar b_r$.
>> 2. Figli: $P_1 = P \cap \{x_k \le \lfloor \bar b_r \rfloor\}$ e $P_2 = P \cap \{x_k \ge \lceil \bar b_r \rceil\}$.
>> 3. Per risolvere un figlio aggiungi il vincolo come nuova riga con una nuova slack:
>> 	- $x_k \le a$ diventa $x_k + s = a$;
>> 	- $x_k \ge a$ diventa $-x_k + s = -a$.
>> 4. $x_k$ è in base, quindi nella nuova riga la sua colonna non è unitaria: **ripristina la base** sottraendo, o sommando, la riga $r$ di $x_k$.
>> 5. La nuova riga ha termine noto negativo e la riga 0 è ancora $\le 0$: continua con il **simplesso duale**.
>> 6. Chiusura del nodo: inammissibile, oppure soluzione intera (aggiorna l'upper bound), oppure $LB \ge UB$.

![[ROCS-086-069.png|550]]
![[ROCS-087-070.png|500]]
![[ROCS-087-071.png|250]]

---
## 9. Taglio di Gomory

>> 1. Prendi la riga $r$ del tableau ottimo in cui è in base la variabile richiesta, con $\bar b_r$ frazionario: $x_r + \sum_{j \in N} y_r^j x_j = \bar b_r$.
>> 2. Per ogni coefficiente delle variabili **non in base** e per $\bar b_r$ calcola la parte frazionaria $F(a) = a - \lfloor a \rfloor$, sempre in $[0,1)$.
>> 	- Attenzione ai negativi: $F(-\tfrac{1}{3}) = -\tfrac{1}{3} - (-1) = \tfrac{2}{3}$, mentre $F(\tfrac{1}{3}) = \tfrac{1}{3}$ perché $\lfloor \tfrac{1}{3} \rfloor = 0$.
>> 	- Usa le **frazioni**, non i decimali.
>> 3. Taglio: $\sum_{j \in N} F(y_r^j)\, x_j \ge F(\bar b_r)$, cioè $-\sum_j F(y_r^j)\, x_j \le -F(\bar b_r)$.
>> 4. Nel tableau aggiungi la riga $-\sum_j F(y_r^j)\, x_j + s = -F(\bar b_r)$, con una nuova colonna per la slack $s$.
>> 5. Riottimizza con il **simplesso duale**: la riga del taglio è quella con il termine noto negativo.
>>
>> Esempio sotto: riga di $x_1$: $x_1 + \tfrac{1}{3}x_3 - \tfrac{1}{3}x_4 - \tfrac{2}{3}x_5 = \tfrac{4}{3}$, con parti frazionarie $\tfrac{1}{3}, \tfrac{2}{3}, \tfrac{1}{3}$ e $F_0 = \tfrac{1}{3}$. Taglio: $-\tfrac{1}{3}x_3 - \tfrac{2}{3}x_4 - \tfrac{1}{3}x_5 + x_6 = -\tfrac{1}{3}$.

![[ROCS-033-023.png|600]]
![[ROCS-035-025.png|600]]

Altro esempio (taglio sulla riga 2):

![[ROCS-038-028.png|500]]
![[ROCS-039-029.png|500]]

---
## 10. Rilassamento lagrangiano e subgradiente

>> 1. Porta il vincolo indicato nell'obiettivo, con il segno giusto (problema di **min**):
>> 	- vincolo $\mathbf{a}\mathbf{x} \ge b$: $+\lambda(b - \mathbf{a}\mathbf{x})$, con $\lambda \ge 0$;
>> 	- vincolo $\mathbf{a}\mathbf{x} \le b$: $+\lambda(\mathbf{a}\mathbf{x} - b)$, con $\lambda \ge 0$;
>> 	- vincolo $\mathbf{a}\mathbf{x} = b$: $\lambda$ libero.
>> 2. Raccogli per variabile: $z_{LR}(\lambda) = \min \sum_j (c_j - \lambda a_j)\, x_j + \lambda b$, con i vincoli rimasti.
>> 3. Risolvi per il $\lambda$ dato. Con variabili binarie e senza altri vincoli: $x_j = 1$ se il coefficiente è $< 0$, $x_j = 0$ se è $> 0$ (se è $0$ vanno bene entrambi). Altrimenti risolvi il sottoproblema rimasto.
>> 4. Subgradiente (vincolo $\ge$): $s = b - \mathbf{a}\mathbf{x}(\lambda)$, cioè di quanto il vincolo è violato.
>> 5. Aggiornamento: $\lambda^{new} = \max\{0,\ \lambda + \theta s\}$, con il passo $\theta$ **dato dal testo**, ad esempio Polyak: $\theta = \alpha \frac{z_{UB} - z_{LR}(\lambda)}{s^2}$.
>> 6. $z_{LR}(\lambda) \le z_P$ sempre (lower bound). Se $\mathbf{x}(\lambda)$ è ammissibile per P ($s \le 0$) e vale $\lambda s = 0$, allora $\mathbf{x}(\lambda)$ è ottima per P.
>>
>> Teoria ed esempi numerici in [[04 - Programmazione Lineare Intera#Slide 34 -> 37 – Rilassamento Lagrangiano|lezione 4]].

---
## 11. Cammini minimi – Dijkstra

>> Vale con **costi $\ge 0$**.
>> 1. $L(s) = 0$; $L(v) = \infty$ per gli altri vertici.
>> 2. Rendi **permanente** il vertice non permanente con $L$ minima.
>> 3. Per ogni arco $(v,u)$ uscente verso un $u$ non permanente: se $L(v) + c_{vu} < L(u)$, aggiorna $L(u) = L(v) + c_{vu}$ e $pred(u) = v$. L'etichetta è la **distanza da $s$**, non il costo del singolo arco.
>> 4. Ripeti dal punto 2 finché tutti i vertici sono permanenti.
>> 5. Risposta: per ogni vertice, il cammino si ricostruisce all'indietro con i $pred$, e il costo è $L$.

![[ROCS-077-058.png|550]]
![[ROCS-078-059.png|550]]

---
## 12. Albero di copertura minimo – Kruskal e Prim

>> Gli archi orientati si trattano come lati non orientati.
>> - **Kruskal**: ordina i lati per costo crescente; inserisci un lato se non crea un ciclo, altrimenti scartalo; fermati a $n-1$ lati.
>> - **Prim**: parti da un vertice (il prof usa il vertice 1); a ogni passo aggiungi il lato di costo minimo che collega l'albero a un vertice non ancora raggiunto.
>> - Scrivi l'elenco dei lati nell'ordine di inserimento e il costo totale. Con lati di costo uguale possono esistere più alberi ottimi, tutti con lo stesso costo.

![[ROCS-090-074.png|500]]

---
## 13. Sensitività sull'MST e verifica di un albero

>> **Aumento del costo di un lato dell'albero (Cut Optimality Conditions)**
>> - Togli il lato: l'albero si divide in $S$ e $V \setminus S$.
>> - Il lato resta ottimo finché costa al massimo quanto il lato più economico **del grafo** che attraversa lo stesso taglio.
>> - Procedura completa in [[Sensitività di un lato dell'MST]].
>>
>> **Diminuzione del costo di un lato fuori dall'albero (Path Optimality Conditions)**
>> - Aggiungendo il lato si forma un ciclo con il cammino dell'albero fra i suoi estremi.
>> - Il lato entra quando il suo costo scende fino al costo del lato **più costoso** di quel ciclo: con costo uguale c'è un albero alternativo, sotto diventa conveniente.
>>
>> **Verificare se un insieme $T$ è un MST**
>> 1. $T$ deve avere $n-1$ lati, essere connesso e senza cicli.
>> 2. Ogni lato fuori da $T$ deve costare almeno quanto ogni lato del ciclo che crea (oppure si confronta il costo con quello dell'MST calcolato).

Aumento del costo di $\{2,4\}$:

![[ROCS-091-075.png|500]]

Diminuzione del costo di $\{3,4\}$:

![[ROCS-081-062.png|500]]
![[ROCS-081-063.png|500]]

Verifica di due insiemi di lati:

![[ROCS-065-046.png|600]]
![[ROCS-065-047.png|600]]

---
## 14. Grafo aciclico e distance label

>> **Il grafo è aciclico?** Si cerca un ordinamento topologico.
>> 1. Togli tutti i vertici senza archi entranti e i loro archi uscenti.
>> 2. Ripeti sul grafo che resta.
>> 3. Se rimangono vertici ma nessuno è privo di archi entranti, c'è un ciclo; se si eliminano tutti, il grafo è aciclico.
>>
>> **Le distance label sono distanze minime?**
>> - Devono valere $L_s = 0$ e, per **ogni** arco $(i,j)$, $L_j \le L_i + c_{ij}$ (condizioni di Bellman).
>> - Basta un arco che viola la disuguaglianza per dire "no".
>> - Per il "sì" serve anche che ogni vertice sia raggiunto da un arco "saturo" ($L_j = L_i + c_{ij}$), cioè che le etichette siano costi di cammini veri.

![[ROCS-061-044.png|550]]
![[ROCS-063-045.png|550]]

---
## 15. Flusso massimo e taglio s-t

>> **Ford-Fulkerson con etichettatura**
>> 1. Etichetta $s$ con $[-,\infty]$ (nelle stampe del prof $\infty = 1000$).
>> 2. Da un vertice etichettato $i$, con etichetta $[\cdot, \delta_i]$:
>> 	- arco **diretto** $(i,j)$ non saturo ($x_{ij} < u_{ij}$): $j \leftarrow [i,\ \min(\delta_i,\ u_{ij} - x_{ij})]$;
>> 	- arco **inverso** $(j,i)$ con flusso ($x_{ji} > 0$): $j \leftarrow [-i,\ \min(\delta_i,\ x_{ji})]$.
>> 3. Se si etichetta $t$: aumenta il flusso di $\delta_t$ lungo il cammino trovato (ricostruito all'indietro), cancella le etichette e riparti.
>> 4. Se $t$ non si può etichettare, il flusso è massimo.
>>
>> **Taglio s-t minimo**: $S$ = vertici etichettati nell'ultima iterazione, $\bar S$ = gli altri. La capacità del taglio (somma delle $u_{ij}$ degli archi da $S$ a $\bar S$) è uguale al flusso massimo.
>>
>> **Quali archi aumentare per avere più flusso**: quelli del taglio minimo, perché tutti saturi. Funziona solo se non esiste un altro taglio minimo con la stessa capacità; per verificarlo si rifà Ford-Fulkerson con la capacità aumentata.

![[ROCS-074-056.png|550]]
![[ROCS-075-057.png|550]]
![[ROCS-052-037.png|550]]

---
## 16. Domande di teoria

>> Enunciati e dimostrazioni chiesti negli esami degli screenshot:
>> - **Lemma della dualità debole** (enunciato e dimostrazione) e **teorema della dualità forte** (enunciato).
>> - **Corollario della complementarietà** (enunciato e dimostrazione).
>> - **Teorema della rappresentazione** (enunciato).
>> - **Dualità lagrangiana debole** (significato, enunciato e dimostrazione) e **concavità di $z_{LR}(\lambda)$** (dimostrazione).
>> - **Knapsack 0-1**: modello e algoritmo di programmazione dinamica.

Dualità debole e forte:

![[ROCS-067-049.png|550]]
![[ROCS-068-050.png|550]]

Corollario della complementarietà:

![[ROCS-085-067.png|550]]
![[ROCS-085-068.png|450]]

Teorema della rappresentazione:

![[ROCS-072-055.png|550]]

Dualità lagrangiana debole e concavità:

![[ROCS-067-048.png|550]]
![[ROCS-069-052.png|550]]
![[ROCS-083-064.png|550]]

Knapsack e programmazione dinamica:

![[ROCS-084-065.png|550]]
![[ROCS-084-066.png|450]]
