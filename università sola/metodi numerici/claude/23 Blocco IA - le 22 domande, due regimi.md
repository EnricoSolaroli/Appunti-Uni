	# Blocco IA: le 22 domande, due regimi diversi

> [!info] La distinzione che cambia tutto
> Le 22 voci di `DomandeIA_25_26.pdf` **non si studiano allo stesso modo**:
> - **1–12** → argomenti testati con le **crocette**. Servono a *riconoscere*, non a produrre.
> - **13–22** → domande **aperte**, che possono capitare **esattamente come sono scritte**. Vanno sapute scrivere.
>
> Informazione confermata dal docente il 3 settembre 2026, e verificata contro le 8 prove.

---

## 1. La verifica: la divisione regge sui dati

Ho cercato **tutte** le domande aperte di IA nelle 8 prove disponibili e le ho mappate sull'elenco.

> ✅ **Ogni singola domanda aperta trovata appartiene alle voci 15–22. Nessuna proviene dalle voci 1–12.**

Non è una conferma da poco: significa che metà dell'elenco — proprio la metà più lunga da scrivere (storia dell'IA, CNN, pooling, clustering…) — **non va mai prodotta a parole tue**.

---

## 2. Voci 1–12 — regime "crocette": riconoscere

| # | Argomento |
|---|---|
| 1 | IA, ML, DL: differenze e relazioni |
| 2 | Tappe storiche, i due inverni, il DL dal 2011 |
| 3 | Programmazione tradizionale vs ML |
| 4 | Classificazione, regressione, clustering |
| 5 | Neurone biologico e artificiale: input, pesi, bias, somma pesata, attivazione |
| 6 | Funzioni di attivazione: soglia, sigmoide, tanh, ReLU |
| 7 | Struttura di una rete: input, hidden, output layer |
| 8 | MLP: perché più layer + non linearità battono il percettrone |
| 9 | Training / validation / testing set |
| 10 | Architettura CNN: parte convoluzionale e fully-connected |
| 11 | Convoluzione, filtri, feature map, ReLU, pooling |
| 12 | Loss function e funzione costo: regressione vs classificazione |

**Come si studiano.** Leggere, non memorizzare. L'obiettivo è **accorgersi che un'affermazione è falsa**, che è un compito molto più facile del ricostruire la definizione. Un giro di lettura ad alta voce + il drill sulle domande vere (§5) bastano.

> [!warning] La penalità cambia la strategia
> Le chiuse hanno **−0.5 per risposta errata**. Quindi:
> - se riesci a **escludere** anche solo due alternative su quattro, rispondi: il valore atteso è positivo;
> - se sei nel buio totale, **lascia in bianco**. Zero batte −0.5.
> - Attenzione alle domande formulate al negativo (*"quale delle seguenti è FALSA"*): sono frequenti, e si sbagliano per fretta, non per ignoranza. Rileggi la domanda prima di crocettare.

---

## 3. Voci 13–22 — regime "aperte": saper scrivere

Queste dieci vanno sapute **produrre**. Ecco quante volte ciascuna è comparsa come domanda aperta nelle 8 prove:

| # | Domanda | In quante prove | Priorità |
|---|---|---|---|
| 15 | Processo di training: forward propagation, calcolo dell'errore, backward propagation | **3** | 🔴 |
| 16 | Algoritmo di backpropagation per le derivate parziali rispetto ai pesi | **3** | 🔴 |
| 19 | Gradient Descent con **Momentum** (ruolo della velocità, parametro, oscillazioni) | **3** | 🔴 |
| 22 | **Adagrad, RMSProp, Adam**: idea e formula di aggiornamento | **3** | 🔴 |
| 17 | ⭐ **Ricavare** la formula di aggiornamento dei pesi, MLP **1-1-1-1** | **2** *(fino a 3 punti)* | 🔴🔴 |
| 21 | Learning rate **scheduling**: step decay, esponenziale, temporale | **2** | 🟠 |
| 18 | Batch GD / Stochastic GD / Mini-Batch GD | 1 | 🟠 |
| 20 | Learning rate troppo alto e troppo basso | 1 | 🟠 |
| 13 | Non convessità della funzione costo | 0 | 🟡 |
| 14 | Definire gli iperparametri | 0 | 🟡 |

**Dove sono comparse:**

- **15 + 16 arrivano quasi sempre insieme**, in un'unica domanda da ~1.5 punti: 7 maggio 2025, Simulazione II, 4 luglio T2 — con la stessa formulazione quasi identica.
- **17** (la sola che si *ricava*): Simulazione III e 4 luglio Turno II. Vale **3 punti**, il doppio delle altre.
- **19**: Simulazione II, 10 gennaio 2025, 12 giugno 2024 T2.
- **22**: 7 maggio 2025, Simulazione I, 4 luglio T1.
- **21**: Simulazione III, 4 luglio T1.

> [!note] 13 e 14 non compaiono, ma non si saltano
> Zero occorrenze **nelle prove che hai**, non zero probabilità. Sono le due più corte da preparare (poche righe ciascuna): si fanno per ultime, in dieci minuti, non si sacrificano del tutto.

---

## 4. 🌉 Il ponte con il Blocco C — l'asset che non stai usando

**Cinque delle dieci domande aperte (18, 19, 20, 21, 22) parlano di discesa del gradiente.** Cioè dell'argomento su cui hai appena passato una settimana, con lo stesso identico paesaggio geometrico. Cambia il vocabolario, non la sostanza.

| Nel linguaggio IA | Nel Blocco C |
|---|---|
| learning rate $\eta$ | il passo $\alpha^{(k)}$ del metodo di discesa |
| discesa del gradiente | `steepestdescent` |
| oscillazioni durante il training | lo **zig-zag** su curve di livello ellittiche |
| Momentum: attenua le oscillazioni | risponde **allo stesso problema geometrico** dello zig-zag |
| funzione costo **non convessa**, minimi locali | l'opposto di $F(x)=\frac12x^TAx-b^Tx$ con $A$ SPD, che è **strettamente convessa** e ha **un solo** minimo |
| metodi a learning rate adattivo | l'idea di scegliere il passo invece di fissarlo |

Due differenze da saper dire, perché sono proprio il punto:

1. Nel Blocco C il passo ottimo $\alpha^{(k)}$ si **calcola in forma chiusa**, perché $F$ è quadratica. Nelle reti neurali la funzione costo non è quadratica: il passo si **sceglie** (learning rate) e si adatta.
2. Nel Blocco C, con $A$ SPD, il minimo è **unico e globale**. Nelle reti la non convessità (voce 13) introduce minimi locali, punti di sella, plateau — ed è da lì che nascono momentum e metodi adattivi.

**Se imposti la 19 e la 20 partendo dallo zig-zag che hai già disegnato, le scrivi in cinque minuti.**

---

## 5. Le ~40 domande chiuse già pronte

Le prove d'esame contengono domande a crocette di IA nello **stesso formato del compito**, penalità compresa. Ricontate una per una il 6 settembre: sono **circa 40** (la stima iniziale di 18 era sbagliata per difetto).

| Prova | Quante |
|---|---|
| Simulazione I · Simulazione II · 10 gennaio 2025 · 4 luglio T1 · 12 giugno 2024 T2 | **5 ciascuna** |
| 7 maggio 2025 · 4 luglio 2024 T2 | 4 ciascuna |
| Simulazione III | 3 |
| `Varie` · `Miscellanea` | 2 ciascuna |

> [!tip] Il formato cambia fra prove vere e simulazioni
> Nelle prove d'esame **realmente somministrate** (7 maggio, 4 luglio T1 e T2, 12 giugno, 10 gennaio) le crocette sono **tutte a risposta singola**. Il formato "quali di queste affermazioni sono vere", a risposta multipla, compare quasi solo nelle simulazioni. È una buona notizia: sulle singole vai molto meglio che sulle multiple.

Sono **l'unico allenamento realistico per le voci 1–12**. Non consumarle dentro una simulazione: estraile e usale come drill.

---

## 6. Il piano rivisto

| Giorno | Cosa |
|---|---|
| **Mer 2** | ✅ voci 1–6 lette ad alta voce |
| **Gio 3** | Voci 7–12 lette. **Qui finisce il lavoro sulle crocette**: da domani solo drill |
| **Ven 4** | 🔴 **15 + 16** scritte per intero (arrivano insieme) · 🅒 le 4 chiuse del 4 luglio T2 |
| **Sab 5** | 🔴🔴 **17: MLP 1-1-1-1**, la derivazione completa, su foglio bianco |
| **Dom 6** | Lab 19 maggio (rete 2→3→1) + `Rete_2_3_1.pdf` — è il testo della prof per la 16 e la 17 |
| **Lun 7** | 🔴 **19 + 22**, partendo dallo zig-zag del Blocco C · poi 18, 20, 21 |
| **Mar 8** | 🟡 **13 + 14** (dieci minuti) · 🅒 le chiuse rimaste (~40 in tutto), cronometrate |
| **Mer 9** | Le 10 aperte a voce, senza appunti · seconda passata sulle chiuse sbagliate |
| **Gio 10** | Solo ripasso · **17 su foglio bianco un'ultima volta** |

---

## 7. In cinque righe

1. **1–12: riconoscere.** Leggere, non memorizzare. Il drill sono le ~40 chiuse.
2. **13–22: produrre.** Sono dieci, e possono capitare **testualmente**.
3. La più redditizia in assoluto: **15+16** (3 prove) — e arrivano in un'unica domanda.
4. La più costosa: **17**, la derivazione MLP 1-1-1-1, fino a **3 punti**.
5. **Metà delle aperte è discesa del gradiente**: la sai già, in un'altra lingua.
