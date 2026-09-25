# Metodi Numerici per l'IA — Piano d'esame

> **Esame: venerdì 11 settembre 2026** · Primo tentativo
> **Riorganizzato il 21 agosto**: l'ordine ora segue quello del corso — dopo le equazioni non lineari vengono i **sistemi** di equazioni non lineari, per vedere Newton-Raphson in continuità.
> **20 giorni**, da sabato 22 agosto a giovedì 10 settembre.

> ### 📍 Aggiornamento del 27 agosto — riorganizzazione
> **Blocco B chiuso il 26 agosto**, in 3 giorni invece di 5. Il Blocco C parte **oggi, giovedì 27**: due giorni di anticipo sul binario numerico.
> **I due giorni guadagnati diventano un blocco IA dedicato (6–7 settembre)**, al posto dei 35–40 minuti quotidiani che non stavano funzionando.
> Mancano **15 giorni** all'esame. Scheletro: **67 buchi su 116**, tutti nei Blocchi C e D.
>
> ⚠️ **I due giorni di anticipo vanno verificati, non dati per acquisiti.** Il Blocco B è stato compresso saltando la prova cronometrata: la Prova #3 di oggi serve proprio a stabilire se sono reali.

## ✅ La riorganizzazione non costa nulla

Il timore era di spezzare gli undici giorni consecutivi sui sistemi lineari. **Non succede**: i sistemi non lineari si infilano *prima* del Blocco B invece che dopo il C, e i Blocchi B e C restano contigui (24 agosto – 1 settembre, **9 giorni** dopo la compressione del 27).

Il conto torna grazie a una scoperta: **tre dei cinque esercizi del Laboratorio 8 sono identici agli Esercizi 1–3 del Laboratorio 9** (Vandermonde, la matrice $[[6,63,662.2],\dots]$, Hilbert di ordine 4). La prof ha ripetuto la parte sul condizionamento il 23 aprile. Quindi del Lab 8 servono **solo gli Esercizi 1 e 2**, ed è un blocco da 2 giorni, non da 3.

| | Prima | Adesso |
|---|---|---|
| Sistemi non lineari | 2 giorni (2–3 set) | 2 giorni (22–23 ago) |
| Sistemi lineari B+C | 11 giorni consecutivi | **11 giorni consecutivi** |
| Interpolazione + minimi quadrati | 4 giorni | 4 giorni |
| Simulazioni complete | 2 | 2 |

---

## 1. Com'è fatta la prova

Ricostruita su **8 prove**: 4 esami reali (12 giugno 2024 T2, 4 luglio 2024 T1 e T2, 10 gennaio 2025, 7 maggio 2025) + 3 simulazioni + `DomandeIA_25_26.pdf`.

| Parte | Punti | Contenuto |
|---|---|---|
| **Esercizio 1** | 11–12 | **Sempre sistemi lineari** |
| **Esercizio 2** | 10–14 | A rotazione: zeri di funzione · sistemi non lineari · interpolazione · minimi quadrati QR · stabilità e condizionamento |
| **Domande IA chiuse** | 5 × 0.5 | Esatta +0.5, **errata −0.5**, non data 0 |
| **Domande IA aperte** | 1.5 + 3 | Backpropagation, gradient descent, momentum, LR scheduling, Adagrad/RMSProp/Adam |

### I pattern che si ripetono

1. **"Giustificare teoricamente, richiamando il teorema opportuno"** — in *ogni* esercizio di *ogni* prova
2. **Perturbazione del termine noto** + errore relativo + $K(A)$ — in **4 prove su 8**
3. **"Verificare senza calcolare il raggio spettrale che Gauss-Seidel converge"** — in 2 prove, con matrici che richiedono **teoremi diversi**
4. **"Il metodo più adatto in base alle caratteristiche della matrice"**, senza dirti quali
5. **Newton che degrada a ordine 1 su radice multipla** → riportarlo a 2
6. Domande chiuse IA **con penalità**

---

## 2. Le prove a disposizione

**Sono OTTO prove complete** (il 7 maggio compare in due cartelle: e' lo stesso file). Piu' `Prove_per_Esame/Varie.ipynb` (6 esercizi sciolti), quattro mini-esercizi su condizionamento e stabilita', e `Miscellanea`.

| Prova | Esercizio 1 | Esercizio 2 | Uso (dal 2 settembre) |
|---|---|---|---|
| **12 giugno 2024 T2** | 2 sistemi, "almeno due metodi adatti" | Zeri: radice multipla, ordine 1 → 2 | 🅑 lettura diagnostica · ven 4 |
| **4 luglio 2024 T1** | 1 sistema + LU per det. e inversa | **NR / corde / Shamanskii + minimo** | 🅑 lettura diagnostica · ven 4 |
| **4 luglio 2024 T2** | 2 sistemi + perturb. 0.1% + GS senza $\rho$ | Stabilità: eq. di II grado + ricavare $K$ | 🅐 **completa cronometrata · lun 7** |
| **10 gennaio 2025** | 2 sistemi + perturb. 1% + GS senza $\rho$ | Interpolazione + **costante di Lebesgue** | 🅐 **completa cronometrata · sab 5** |
| **7 maggio 2025** | Gradiente + CG + GS, confronto $K(A)$ | Circonferenza: sistema quadrato + **QR-LS** | 🅑 lettura diagnostica · dom 6 |
| **Simulazione I** | 3 sistemi + perturb. 0.1% | Interpolazione + QR-LS | 🅐 **completa cronometrata · gio 3** |
| **Simulazione II** | 2 sistemi + Cholesky | Zeri: Newton + regula falsi, ordine | 🅑 lettura diagnostica · lun 7 |
| **Simulazione III** | ≈ 4 luglio T1 | ≈ 4 luglio T1 | 🔒 **SIGILLATA fino a mercoledi 9** |

> 🔒 **Perche' la Simulazione III resta chiusa.** Dopo che ne hai viste sette, l'ottava e' l'unica che puo' ancora dirti come te la cavi davanti a un testo **davvero nuovo**. Aprirla prima significa arrivare al 9 settembre senza nessuna misura onesta, solo memoria.

### 🧠 Le ~40 domande chiuse di IA nascoste nelle prove

Ogni prova contiene domande a risposta multipla di IA — **stesso formato dell'esame, penalita' compresa**. Ricontate una per una il 6 settembre: sono **circa 40**, piu' del doppio di quanto avevo stimato la prima volta.

| Prova | Quante |
|---|---|
| Simulazione I · Simulazione II · 10 gennaio 2025 · 4 luglio T1 · 12 giugno 2024 T2 | **5 ciascuna** |
| 7 maggio 2025 · 4 luglio 2024 T2 | 4 ciascuna |
| Simulazione III | 3 |
| `Varie` · `Miscellanea` | 2 ciascuna |

> ⚠️ Le prove d'esame **vere** (7 maggio, 4 luglio T1 e T2, 12 giugno, 10 gennaio) hanno crocette **tutte a risposta singola**. Il formato "quali di queste affermazioni sono vere" compare quasi solo nelle simulazioni.

**Non consumarle dentro le simulazioni**: estraile e usale come drill quotidiano sul Binario IA. Sono l'unico materiale di allenamento che riproduce esattamente il formato con penalita'.

---

## 3. Mappa del materiale

| Cartella | Ruolo |
|---|---|
| `iCloud/…/slide virtuale` | **Teoria** — le slide della prof |
| `Documents/lab/metodi` | **Codice** — `lezioni/` e `esami/` |
| `Obsidian/…/metodi numerici` | **Appunti** — `Blocco A/`, `Blocco B/`, `teoria raschi/`, `ia rebe/` |

| # | Argomento | Slide | Laboratorio | Miei appunti |
|---|---|---|---|---|
| 1–4 | Numeri finiti · condizionamento · norme · zeri 1D | `Numeri finiti*/`, `Norme…`, `LezioneEquazioniNonLineari` | Es. 4 (10/3), 5 (17/3), 24/3, Lab 7 (31/3) | **Blocco A** 02–06 ✅ |
| 5 | **Sistemi non lineari** | `Sistemi di equazioni non lineari`, `Polinomio_taylor` | **Lab 8 (14/4), Es. 1–2** | **Blocco A-bis** 11–13 ✅ |
| 6 | Sistemi lineari — diretti | `…Metodi_Numerici_Diretti` | Lab 9 (23/4) | **Blocco B** 07–10 ✅ |
| 7 | Sistemi lineari — iterativi | `…Metodi_Numerici_Iterativi` | Lab 28/4 | **Blocco C** 14–15 ✅ |
| 8 | Metodi di discesa | `Metodi_di_discesa` + 2 html | Lab 10 (5/5) | **Blocco C** 16–18 ✅ |
| 9 | Minimi quadrati | `SoluzioneSistemiSovradeterminati` | **Lab 10 (5/5), Es. 6–8** | **Blocco D** 20–21 ✅ |
| 10 | Interpolazione | `LezioneInterpolazionePolinomiale` | Es. 12/5 | **Blocco D** 19 ✅ |
| 11 | Intelligenza Artificiale | slide 1, 2, 3, `Training I e II`, **`Rete_2_3_1.pdf`** | 🆕 **Lab 19/5** (`rete_neurale_notazione_lezione.ipynb`) | `ia rebe/` + **[[23 Blocco IA - le 22 domande, due regimi|23]]** |

> 📘 **Ripasso da un file unico**: [[24 Compendio unico - tutto l'esame in un file|24]]. Formulario denso (15-20 min) + compendio esteso di tutti i blocchi + i testi modello gia' pronti per le giustificazioni scritte. E' il file da usare per il ripasso finale e la mattina dell'11.

> 📐 **Concetto trasversale**: [[00d Le maggiorazioni - come si leggono|00d]]. Condizionamento, convergenza degli iterativi, teorema dell'errore, stabilita', costante di Lebesgue sono tutte maggiorazioni: la nota spiega come si leggono e cosa **non** si puo' concludere da un maggiorante grande.

> 🐍 **Python e grafici**: [[00c Python e grafici - guida essenziale per l'esame|00c]]. Sostituisce integralmente `LezionePython` e `Lezione_Numpy` delle slide: contiene solo quello che serve a questa prova.

**Non studiare**: `LezionePython`, `Lezione_Numpy` · `.ipynb_checkpoints`, `__pycache__` · `Risoluzione Esercizi.pdf` (duplicato) · Lab 8 Es. 3–5 (duplicano Lab 9 Es. 1–3).

---

## 4. Setup e scheletri — stato

- `scheletri_VERGINE.py` — **116 buchi**, copia fedele di quella d'esame. **Non toccarla mai**: serve per allenarsi da vuoto
- `scheletri_25_26.py` — il tuo file di lavoro: ✅ **116/116 completato il 2 settembre**, tutte le funzioni verificate numericamente (zeri, sistemi non lineari, iterativi, discesa, minimi quadrati, interpolazione)
- `scheletri_RISOLTI.py` — riferimento completo e **verificato numericamente**
- `01 Formulario dei buchi.md` — tutti i 116 slot con codice e matematica

⚠️ **Lo scheletro importa solo `numpy`.** All'esame la prima riga da scrivere è:
```python
import scipy.linalg as spLin
from scipy.linalg import cholesky, lu, qr
from SolveTriangular import Lsolve, Usolve
```

⚠️ **`newton_raphson_minimo` non è in `scheletri_VERGINE.py`**, cioè non compare nel file che riceverai all'esame: se la chiedono, la scrivi da zero. Nel tuo `scheletri_25_26.py` c'è ed è completata (23 agosto).

⚠️ **Cosa ti danno e cosa NO.** Verificato su tutte le copie dei file di supporto:

| Ti danno | Devi scriverla tu |
|---|---|
| `Lsolve`, `Usolve` *(in `SolveTriangular.py`)* | **`LUsolve(P,L,U,b)`** — 8 righe, serve in ogni esercizio con LU |
| `lu`, `cholesky`, `qr`, `svd`, `solve` *(scipy)* | `solve_nsis(A,B)` per l'inversa |
| lo scheletro con i 22 metodi a buchi | determinante via LU: $(-1)^s\prod u_{ii}$ |
| | `creaPoisson`, `Hankel`, `rho_T_Jac` se il testo le richiede |

`LUsolve` **non** e' in `SolveTriangular.py`, ne' in `Utilities.py` della cartella ufficiale, ne' nello scheletro: esiste solo nel notebook del Lab 9, dove l'hai scritta tu. All'esame del **4 luglio 2024 T1** servono `LUsolve` *e* `solve_nsis`, entrambe da zero.

⚠️ **I buchi non si contano con Ctrl+F su `#to do`.** In `gauss_seidel_sor` la riga `raggiospettrale=` e' un buco **senza** marcatore: nella sezione iterativi i `#to do` sono 31 ma i buchi veri sono 32. Il controllo affidabile e' provare a importare il file.

⚠️ **Finché resta anche un solo `#to do`, `import scheletri_25_26` fallisce con `SyntaxError`**: `d = #to do` non è Python valido e il modulo non si carica, nemmeno per le funzioni già pronte. Per usare una funzione singola prima di aver finito, incollala in una cella del notebook.

### Dove stanno i buchi

| Gruppo | Buchi | Stato |
|---|---|---|
| Zeri 1D | 23 | ✅ chiusi |
| Sistemi non lineari | 26 | ✅ chiusi e riverificati (22 ago) |
| Iterativi | 31 | ✅ chiusi e verificati (30 ago) |
| Discesa | 20 | ✅ chiusi e verificati (31 ago) |
| Minimi quadrati | 8 | ✅ chiusi e verificati (31 ago) |
| Interpolazione | 8 | ✅ chiusi e verificati (2 set) |

✅ **116 su 116.** Da qui in avanti lo scheletro non si completa: si **riscrive da zero** partendo da `scheletri_VERGINE.py`, che per questo non va mai toccata.

> ⚠️ **Non fidarti del conteggio dei `#to do`.** In `eqnorm` mancano 5 righe sotto il commento sulla fattorizzazione di Cholesky **senza nessun marcatore**; in `qrLS` il marcatore e' uno solo ma le righe da scrivere sono 3 (manca anche `Q, R = spLin.qr(A)`). I 9 marcatori del gruppo minimi quadrati corrispondono a **16 righe** vere.

---

## 5. Il calendario

**Struttura rivista il 27 agosto.** Il binario IA quotidiano è stato sostituito da un **blocco IA dedicato** (6–7 settembre), più il ripasso a voce nei giorni delle simulazioni. Unico impegno giornaliero residuo sull'IA: **10 minuti di lettura ad alta voce** dell'elenco delle 22 domande, per non arrivare al 6 settembre a freddo.

### ✅ BLOCCO A — 18–21 agosto · *fatto*

Numeri finiti · condizionamento e stabilità · norme · zeri di funzioni 1D · ⏱️ Prova #1 (4 luglio T2 Es. 2).

---

### ✅ BLOCCO A-bis — 22–23 agosto · *sistemi di equazioni non lineari* · *fatto*

*In continuità con Newton 1D, come da ordine del corso.*
Appunti: [[11 Sistemi di equazioni non lineari|Blocco A-bis/11]], [[12 Scheda operativa Blocco A-bis|12]], **[[13 Laboratorio 8 Es 2 - guida al codice e ai grafici|13]] (guida al codice e ai grafici del Lab 8 Es. 2)**.

| Giorno | Binario A | Binario B (IA) |
|---|---|---|
| **Sab 22** | Teoria: **Newton-Raphson** per sistemi ($Js=-F$), varianti **corde** (Jacobiana congelata) e **Shamanskii** (aggiornata ogni `update` passi) · polinomio di Taylor bivariato · Jacobiana · `sympy` (`PacchettoSympy.ipynb`) · **riverifica i 26 buchi già scritti ad aprile** · `newton_raphson_minimo`: teoria ($\nabla f=0$, Hessiana) e codice | Definizione di rete neurale: input, hidden, output layer |
| **Dom 23** | **Lab 8 (14/4) Es. 1** — cinque sistemi con i tre metodi, errore relativo fra iterati in scala logaritmica · **Es. 2** — Newton-Raphson per il minimo su tre funzioni · ⏱️ **Prova #2: 4 luglio 2024 T1 — Esercizio 2** (50 min) | MLP: perché più layer + non linearità battono il percettrone |

> ⏭️ **Salta Lab 8 Es. 3–4–5**: sono identici a Lab 9 Es. 1–2–3, che fai lunedì.
> 🔗 Il filo con il Blocco A: corde 1D ↔ `newton_raphson_corde` sono la **stessa idea** (pendenza congelata, ordine 1 invece di 2). Shamanskii è il compromesso.

---

### ✅ BLOCCO B — 24–26 agosto · *sistemi lineari, metodi diretti* · *fatto in 3 giorni*

Appunti già pronti: [[07 Sistemi lineari - generalita e condizionamento|Blocco B/07]], [[08 Metodi diretti - sistemi triangolari e fattorizzazione LU|08]], [[09 Cholesky, QR e stabilita delle fattorizzazioni|09]], [[10 Scheda operativa Blocco B|10]].
⭐ **È il blocco dell'Esercizio 1**, che c'è in tutte e 8 le prove. Qui non si taglia niente.

| Giorno     | Binario A                                                                                                                                                                                                                    | Appunti                                                        | Binario B (IA) |                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | -------------- | -------------------------------------------------------------- |
| **Lun 24** | Condizionamento **dei sistemi lineari**: $K(A)=\Vert A^{-1}\Vert \Vert A\Vert $, perturbazione su $b$ e **derivazione** della maggiorazione (pattern in 4 prove su 8) · **Lab 9 Es. 1–3** (Vandermonde, $3\times3$, Hilbert) | [[07 Sistemi lineari - generalita e condizionamento            | 07]]           | Preparazione dei dati: training / validation / testing set     |
| **Mar 25** | Teoria: **LU**, minori principali di testa (Teorema 1), **pivoting**, matrici di permutazione (Teorema 2)                                                                                                                    | [[08 Metodi diretti - sistemi triangolari e fattorizzazione LU | 08]]           | Iperparametri di una rete neurale                              |
| **Mer 26** | Codice: `Lsolve`/`Usolve` da zero · `scipy.linalg.lu` (⚠️ restituisce $P^T$: `P = PT.T`) · `LUsolve` · **determinante** e **inversa** via LU                                                                                 | [[08 Metodi diretti - sistemi triangolari e fattorizzazione LU | 08]]           | Loss function e funzione costo: regressione vs classificazione |
| **Gio 27** | **Cholesky**: teorema + verifica sperimentale delle ipotesi (simmetria, autovalori) · **QR** e riflettori di Householder · stabilità forte/debole                                                                            | [[09 Cholesky, QR e stabilita delle fattorizzazioni            | 09]]           | Non convessità della funzione costo                            |
| **Mer 26** | **Lab 9 Es. 4–8**, incluso il confronto **LU contro QR** in `loglog`                                                                                                                                                         | [[10 Scheda operativa Blocco B                                 | 10]]           | —                                                              |

> ⏱️ **Prova #3 (12 giugno 2024 T2, Esercizio 1) non svolta** → spostata a giovedì 27 come verifica di chiusura del blocco.

> 🔗 **Il filo con quello che hai appena fatto.** Nel Lab 8 Es. 2 hai verificato che l'Hessiana fosse definita positiva con `np.linalg.cholesky`: giovedì scoprirai *perché* quel test funziona — la fattorizzazione $LL^T$ esiste **se e solo se** la matrice è simmetrica definita positiva. È lo stesso teorema, visto dai due lati.
> Analogamente, ogni passo di Newton risolveva $H s = -\nabla f$ con `np.linalg.solve`: da domani vedi cosa fa davvero quella chiamata (LU con pivoting) e quanto costa ($\frac13 n^3$).

> ⚠️ **Il buco più probabile del blocco.** Il pattern #2 (perturbazione del termine noto) non chiede di *calcolare* $K(A)$ ma di **ricavare** la maggiorazione
> $$\frac{\|\delta x\|}{\|x\|} \le K(A)\,\frac{\|\delta b\|}{\|b\|}$$
> partendo da $A(x+\delta x) = b + \delta b$. Falla oggi su carta, non solo in Python: è la giustificazione teorica che chiedono in 4 prove su 8.

---

### ✅ BLOCCO C — 27 agosto – 1 settembre · *iterativi e metodi di discesa* · *fatto*

⭐ **51 buchi su 116 e il cuore dell'Esercizio 1.** Se qualcosa deve saltare, non è questo.

Appunti già pronti: [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)|Blocco C/14-15]] (**teoria completa degli iterativi, nell'ordine delle slide 1.1–1.8**) · [[16 Metodi di discesa - dal sistema lineare al problema di minimo|16]] (metodi di discesa) · [[17 Gradiente coniugato e velocita di convergenza|17]] (gradiente coniugato) · [[18 Scheda operativa Blocco C|18]] (scheda operativa).
Le vecchie note 14 e 15 sono state **fuse il 27 agosto** in un unico documento che segue la successione del PDF.

| Giorno | Binario A | Appunti |
|---|---|---|
| **← Gio 27 (oggi)** | ⏱️ **Prova #3: 12 giugno 2024 T2 — Esercizio 1** (50 min) come **verifica del Blocco B** · poi teoria iterativi: **splitting** $A=M-N$, $T=M^{-1}N$, convergenza $\iff\rho(T)<1$ | [[18 Scheda operativa Blocco C#0. Come leggere le slide|18 §0]] poi [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#1. Perché esistono i metodi iterativi|14-15 §1–9]] |
| **Ven 28** | Jacobi ($M=D$), Gauss-Seidel ($M=D+E$), SOR ($M_\omega=D+\omega E$) · criterio d'arresto · **i 31 buchi di `jacobi`, `gauss_seidel`, `gauss_seidel_sor` scritti da zero** | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#13. Rilassamento e metodo SOR   *· slide §1.7*|14-15 §13–15]] |
| **Sab 29** | Convergenza: $e^{(k)}=T^ke^{(0)}$, condizione necessaria e sufficiente, i tre teoremi sufficienti · **Lab 28/4 Es. 1–2** | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#11. Sufficiente ≠ necessario: il Laboratorio 28/4|14-15 §11–12]] |
| **Dom 30** ☕ | *Mezza giornata.* 🎯 **Drill "Gauss-Seidel senza raggio spettrale"**: entrambe le versioni (10 gennaio e 4 luglio T2) — richiedono **teoremi diversi** | [[14-15 Metodi iterativi - teoria completa (slide 1.1-1.8)#10. 🎯🎯 Il drill: la stessa domanda, due teoremi diversi   *· slide §1.5*|14-15 §10]] |
| **Lun 31** | Teoria metodi di discesa: Teorema 1, $\nabla F=Ax-b$, $H_F=A$, passo ottimo, zig-zag · i due `.html` interattivi · codice `steepestdescent` da zero (⚠️ `r = A@x-b` è il **gradiente**) | [[16 Metodi di discesa - dal sistema lineare al problema di minimo|16]] |
| **Mar 1 set** | Gradiente coniugato: direzioni $A$-coniugate, terminazione in $\le n$ passi · codice `conjugate_gradient` (⚠️ `rtr_old` **prima** di aggiornare `r`) · **Lab 10 Es. 1–5** (gli Es. 6–8 sono minimi quadrati → sabato 5) · stime $\sim K$ contro $\sim\sqrt K$ · ⏱️ **Prova #4: 7 maggio 2025 — Esercizio 1** (50 min) | [[17 Gradiente coniugato e velocita di convergenza|17]] |

> ⚠️ Il blocco si chiude con l'**autotest [[18 Scheda operativa Blocco C#9. Autotest di fine blocco — martedi 1 settembre|§9 della scheda 18]]**, a voce e senza appunti. Se non sai rispondere a metà delle domande, il blocco non è finito — indipendentemente dalla data.

---

### 🐍 BINARIO PYTHON — 31 agosto → 2 settembre · *assorbito dalle prove cronometrate*

**Diagnosi del 30 agosto:** teoria solida, buchi dello scheletro gestibili (anche mnemonicamente), ma **il codice scritto da zero — e soprattutto i grafici — è la parte scoperta.** Da qui alla fine si aggiunge un terzo binario, che gira in parallelo a A (numerico) e B (IA).

📌 Riferimento unico: **[[00c Python e grafici - guida essenziale per l'esame|00c]]** — Parte 6 (le 4 ricette grafiche), Parte 9 (cheat sheet da memoria), Parte 10 (la scala a 4 gradini e le 10 sessioni).

**Regola:** ogni sessione parte dal **gradino 4** (foglio bianco, cronometro). Se ti blocchi più di 10 minuti, guardi la riga che manca e **ricominci l'esercizio da capo**.

| # | Sessione dal foglio bianco | Ricetta grafica |
|---|---|---|
| 1 | Jacobi + Gauss-Seidel 4×4, confronto | 2 · `semilogy` |
| 2 | SOR: ciclo su ω, ω ottimo sperimentale | 2 + `plot` ω/iterazioni |
| 3 | LU con pivoting: `P@A == L@U`, determinante | — |
| 4 | Gradiente vs CG su Hilbert 5×5 | 2 + 3 · curve di livello |
| 5 | Newton per il minimo (Lab 8 Es. 2) | 3 + 4 · superficie |
| 6 | `eqnorm`, `qrLS`, `SVDLS` sullo stesso problema | 1 |
| 7 | Circonferenza per 3 e 4 punti (7 maggio 2025) | 1 |
| 8 | `plagr` + `InterpL` da zero | 1 |
| 9 | Runge: equispaziati vs Chebyshev | 1 + `semilogy` |

> 🔄 **Aggiornamento del 2 settembre.** Da qui in avanti il foglio bianco non ha piu' bisogno di un binario separato: **le prove cronometrate 🅐 sono il foglio bianco**, e sono piu' realistiche perche' aggiungono il vincolo di tempo e la richiesta di giustificare teoricamente.
>
> Queste 9 sessioni diventano il **magazzino delle riparazioni mirate**: quando la correzione di una simulazione segnala una debolezza di Python, si pesca la sessione corrispondente e si fa quella. Esempio: se in Simulazione I il grafico delle curve di livello non e' uscito → sessione 4 o 5.

> ⚠️ **Il principio resta valido**: la teoria in piu' non compensa un esercizio che non riesci a scrivere. Per questo nella volata finale le prove 🅐 non si degradano prima di aver tagliato tutto il resto ([[00 Piano esame settembre#6. Se resti indietro|§6]]).

---

### ✅ BLOCCO D — *chiuso il 2 settembre, con 3 giorni di anticipo* · minimi quadrati e interpolazione

Appunti già pronti: [[19 Minimi quadrati - equazioni normali, QR-LS e SVD-LS|Blocco D/19]] (minimi quadrati: equazioni normali, QR-LS, SVD-LS) · [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue|20]] (interpolazione: Lagrange, errore, Runge, Lebesgue) · [[21 Scheda operativa Blocco D|21]] (scheda operativa).
> 📌 **Ordine**: prima i **minimi quadrati** (slide `SoluzioneSistemiSovradeterminati`, Lab **5 maggio** Es. 6–8), poi l'**interpolazione** (slide `LezioneInterpolazionePolinomiale`, Lab **12 maggio**). È l'ordine del corso: i minimi quadrati sono la continuazione diretta di QR e SVD del Blocco B, l'interpolazione apre un argomento nuovo. Le note seguono lo stesso ordine: prima la [[19 Minimi quadrati - equazioni normali, QR-LS e SVD-LS|19]], poi la [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue|20]].

⭐ **In 3 prove su 8 questo blocco è l'INTERO Esercizio 2** (10 gennaio, 7 maggio, Simulazione I): 13-14 punti ciascuna.

| Giorno | Binario A | Appunti |
|---|---|---|
| **Mer 2** | Minimi quadrati, teoria — sistemi sovradeterminati, equazioni normali e $K_2(A^TA)=K_2(A)^2$, QR-LS, SVD-LS · celle 23–28 del **Lab 10** con i testi delle tre function | [[21 Scheda operativa Blocco D|21 §0]] poi [[19 Minimi quadrati - equazioni normali, QR-LS e SVD-LS#1. Sistemi sovradeterminati|19 §1–7]] |
| **Gio 3** | Codice `eqnorm`, `qrLS`, `SVDLS` da zero (⚠️ i `#to do` sono 9 ma le righe da scrivere sono **16**: `eqnorm` e `qrLS` hanno pezzi mancanti senza marcatore) · **Lab 10 Es. 6 e 7** · l'esercizio della circonferenza del 7 maggio | [[19 Minimi quadrati - equazioni normali, QR-LS e SVD-LS#8. Il codice|19 §8–10]] |
| **Ven 4** | Teoria interpolazione: forma di Lagrange, **teorema sull'errore**, unicità del polinomio, **costante di Lebesgue**, Runge, nodi di Chebyshev · codice `plagr`, `InterpL` da zero | [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue#1. Il problema|20 §1–6]] |
| **Sab 5** | **Esercitazione 12/5 completa** — ⚠️ **non saltare l'Es. 5 sulla costante di Lebesgue**, è caduto il 10 gennaio 2025 · ⏱️ **Prova #5: 10 gennaio 2025 — Esercizio 2** (50 min) | [[20 Interpolazione polinomiale - Lagrange, errore, Runge e Lebesgue#7. Convergenza e il fenomeno di Runge|20 §7–9]] |

---

### 🧠 BLOCCO IA — *ridistribuito su 8 giorni: vedi la ripianificazione* · le 22 domande → [[23 Blocco IA - le 22 domande, due regimi|nota 23]]

**I due giorni guadagnati anticipando il Blocco B.** Vale **~7 punti su ~31, cioè il 22% del voto**, e le domande chiuse hanno **penalità −0.5 per risposta errata**: non è una parte su cui si possa tirare a indovinare.

| Giorno | Contenuto |
|---|---|
| **Dom 6** | **Domande 1–11**: IA/ML/DL e differenze · tappe storiche e i due inverni · programmazione tradizionale vs ML · classificazione, regressione, clustering · neurone biologico e artificiale · funzioni di attivazione (soglia, sigmoide, tanh, ReLU) · struttura di una rete · MLP e non linearità · training/validation/testing · architettura CNN · convoluzione, filtri, feature map, pooling |
> 🆕 **Trovato il 2 settembre: il Laboratorio del 19 maggio** (`lezioni/Laboratorio 19 Maggio 2026 + Soluzione`). Non e' analisi numerica: e' una **rete MLP 2→3→1 costruita da zero in numpy**, con forward e backward propagation nella **notazione esatta delle slide** ($a_i^{(\ell)}$, $z_i^{(\ell)}$, $\delta_i^{(\ell)}$, $w_{ji}^{(\ell)}$). Copre da solo le domande **15, 16 e 17**, ed e' il testo migliore che hai per la 17. Il notebook e' **gia' completo** (zero buchi) e gira: leggilo il 7, prima di provare la derivazione su foglio bianco.

| **Lun 7** | **Domande 12–22**: loss function e funzione costo (regressione vs classificazione) · non convessità · iperparametri · forward e backward propagation · algoritmo di backpropagation · ⭐ **derivazione dei pesi per MLP 1-1-1-1** · batch / SGD / mini-batch · momentum · learning rate alto e basso · LR scheduling (step, esponenziale, temporale) · Adagrad, RMSProp, Adam |

> 📌 **In sospeso (concordato il 2 settembre)**: quando arriva il momento del Blocco IA, chiedere a Claude (a) come impostare la preparazione della parte di IA nel suo complesso e (b) la **nota con la derivazione completa per la rete 1-1-1-1**, costruita sulla notazione delle slide `Rete_2_3_1.pdf` del Lab 19/5.

> ⭐ **La domanda 17 (derivazione MLP 1-1-1-1) è l'unica che si "fa" invece di raccontarla.** Vale come le altre ma costa dieci volte tanto: falla per prima il 7, e rifalla su foglio bianco l'8, il 9 e il 10.
> 📌 Materiale: `DomandeIA_25_26.pdf` per l'elenco, `ia rebe/` per gli appunti, slide 1–2–3 e `Training I e II`.
> ⚠️ **Questo blocco non è il cuscinetto.** Se il Blocco D sfora, si taglia dentro il Blocco D, non qui.

---

### 🎯 BLOCCO E — *assorbito nella ripianificazione qui sotto* · simulazioni · esame venerdì 11

| Giorno | Binario A | Binario B (IA) |
|---|---|---|
| **Mar 8** | ⏱️ **Simulazione I** completa, cronometrata, condizioni d'esame + correzione | Ripasso IA domande 1–11 a voce + MLP 1-1-1-1 su foglio bianco |
| **Mer 9** | ⏱️ **Simulazione II** completa + correzione | Ripasso IA domande 12–22 a voce + MLP 1-1-1-1 |
| **Gio 10** | **Niente di nuovo.** Tabella decisionale ([[00 Piano esame settembre#7. Tabella decisionale — da mandare a memoria|§7]]) fino all'automatismo + `teoremi utili.md` + mappa concettuale sistemi lineari · ⏱️ **Prova #6: 7 maggio 2025 — Esercizio 2** se serve ancora allenamento su QR-LS | Tutte e 22 le domande a voce, senza appunti |
| **Ven 11** | 🎓 **ESAME** | |

**Totale: 8 sessioni cronometrate** (6 esercizi singoli + 2 simulazioni complete). Riserva: `Simulazione III`.

> 📌 **Chiarimento importante.** Le sei "Prove" #1–#6 sono **singoli esercizi tratti da appelli passati** (4 luglio T1 e T2, 12 giugno, 10 gennaio, 7 maggio). Le due **simulazioni complete** (`SimulazioneI`, `SimulazioneII`) sono file **diversi**, mai toccati, e restano intatti per l'8 e il 9 settembre — più `SimulazioneIII` di riserva. Fare le Prove durante i blocchi **non consuma** il materiale che serve alla fine.

---

### 🏁 RIPIANIFICAZIONE DEL 2 SETTEMBRE — la volata finale, 9 giorni

**Stato**: teoria **completa** (A, A-bis, B, C, D), scheletro **116/116**, laboratori analizzati fino al 12 maggio (piu' il 19/5 di IA, ancora da leggere).

> 🔴 **Confermato il 2 settembre: NESSUNA prova e nessuna simulazione ancora svolta.** Le "Prove #1–#6" citate nei blocchi A–D qui sopra erano **pianificate ma mai fatte** — vanno lette come storia del piano, non come lavoro compiuto. Tutte e **otto** le prove sono quindi materiale intatto.
>
> Conseguenza: **giovedi 3 e' la prima volta in assoluto sotto cronometro**. E' normale che la prima vada peggio delle successive — non e' un segnale sul tuo livello, e' il costo fisso della prima volta. Quello che conta e' il confronto fra la prima e la terza.

> ⚠️ **Principio 1 — la diagnosi viene prima della terapia.** Un ripasso generale fatto adesso spenderebbe le stesse ore su tutto uniformemente, comprese le cose che sai gia'. Una simulazione cronometrata ti dice in due ore **dove** sei scoperto, e da li' il ripasso diventa mirato. Il ripasso non si salta: si rimanda di un giorno e si punta.
>
> ⚠️ **Principio 2 — la IA si fa ogni giorno, poco, e in DUE regimi.** Confermato dal docente il 3 settembre: le voci **1–12** sono argomenti da **crocette** (riconoscere, non produrre), le voci **13–22** sono **domande aperte che possono capitare testualmente**. Verificato contro le 8 prove: **ogni** domanda aperta di IA trovata appartiene alle voci 15–22, **nessuna** alle 1–12. Dettaglio, frequenze e piano: [[23 Blocco IA - le 22 domande, due regimi|23]].
>
> ⚠️ **Principio 3 — usare tutto il materiale, ma non tutto allo stesso modo.** Vedi le tre modalita' qui sotto.

#### Le tre modalita' di uso di una prova

| | Modalita' | Costo | A cosa serve |
|---|---|---|---|
| 🅐 | **Completa cronometrata** — condizioni d'esame, poi correzione seria | ~2 h + ~1,5 h | calibrare **tempo** e resistenza; scoprire cosa non sai fare |
| 🅑 | **Lettura diagnostica** — leggi il testo e dici **a voce**, per ogni punto, cosa faresti: quale matrice costruisci, quale metodo scegli e perche', quale grafico, quale teorema citi. **Non scrivi codice.** | ~25 min | allenare il **riconoscimento del pattern**, che e' il rischio vero. Se ti blocchi su un punto, *quello* lo svolgi per intero |
| 🅒 | **Miniera IA** — estrai le domande chiuse e usale come drill | ~15 min | l'unico allenamento nel formato d'esame con penalita' |

#### Il calendario

| Giorno     | Binario A — numerico                                                                                                                                                | Binario B — IA (45-60 min)                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Mer 2**  | Niente di nuovo: chiuso il Lab 12. Preparare l'ambiente                                                                                                             | ✅ voci **1–6** lette                                                              |
| **Gio 3**  | 📖 **Simulazione I in modalita' studio**, senza cronometro: capire e rispondere bene, non correre · **annotare comunque orario di inizio e fine di ogni esercizio** | voci **7–12** lette → **finisce il lavoro sulle crocette**                        |
| **Ven 4**  | Ripasso **mirato** sui buchi della Sim. I · 🅑 **12 giugno 2024 T2** e **4 luglio T1**                                                                              | 🔴 **15+16** scritte per intero · 🅒 le 4 chiuse del 4 luglio T2                  |
| **Sab 5**  | 🅐 ⏱️ **10 gennaio 2025** — **prima prova davvero cronometrata**                                                                                                    | 🔴🔴 **voce 17: MLP 1-1-1-1** su foglio bianco                                    |
| **Dom 6**  | Ripasso mirato · 🅑 **7 maggio 2025** e **Simulazione II**                                                                                                          | **Lab 19 maggio** + `Rete_2_3_1.pdf` — e' il testo della prof per le voci 16 e 17 |
| **Lun 7**  | 🅐 ⏱️ **4 luglio 2024 T2** completa + correzione — ⚠️ è l'unica cronometrata che contiene **stabilità/cancellazione** e la **derivazione di $K$**                   | 🔴 **19 + 22** partendo dallo zig-zag del Blocco C · poi **18, 20, 21**           |
| **Mar 8**  | Svolgimento **integrale** solo dei punti deboli emersi dalle letture diagnostiche                                                                                   | 🟡 **13 + 14** (10 min) · 🅒 le chiuse rimaste (~40 in tutto), cronometrate       |
| **Mer 9**  | 🅐 ⏱️ **Simulazione III** — 🔒 l'unica mai vista: prova generale vera                                                                                               | Le **10 aperte a voce**, senza appunti · seconda passata sulle chiuse sbagliate   |
| **Gio 10** | **Niente di nuovo.** Schede operative (`06`, `10`, `12`, `18`, `21`, `22`), formulario `01`, tabella decisionale §7                                                 | Solo ripasso · **voce 17 su foglio bianco** un'ultima volta                       |
| **Ven 11** | 🎓 **ESAME**                                                                                                                                                        |                                                                                   |

**Bilancio: 4 prove complete cronometrate + 4 in lettura diagnostica + 18 domande chiuse di IA.** Tutto il materiale usato, niente sprecato, e la correzione ha lo spazio che merita.

> ⏱️ **Cronometro come MISURA, non come giudizio** *(concordato il 3 settembre)*. Una prima passata senza pressione, per capire, e' legittima e utile. Il rischio non e' quello: e' **rimandare il cronometro a "quando saro' piu' preparato"**, perche' quella soglia non arriva mai e la gestione del tempo e' una **competenza separata** dal sapere gli argomenti — si puo' sapere tutto e non finire.
>
> Il compromesso che costa zero: **lavora come stai lavorando, ma segna l'ora di inizio e di fine di ogni esercizio.** Nessuna pressione, nessuno stop al suono. Servono solo i numeri: se l'Esercizio 1 ti prende 80 minuti, e' molto meglio scoprirlo il 3 che l'8.

> 📌 **La correzione conta quanto la prova.** Dopo ogni 🅐, tre liste **separate**, perche' si curano in tre modi diversi:
> 1. cosa **non hai iniziato** → problema di tempo o di riconoscimento del pattern
> 2. dove hai **sforato** → problema di fluidita': serve ripetizione, non studio
> 3. errori di **teoria** contro errori di **Python** → i primi si rileggono, i secondi si riscrivono

---

## 6. Se resti indietro

Il piano ha ora **due mezze giornate di slack** (mar 8 e mer 9 pomeriggio). L'ordine di sacrificio, dal primo all'ultimo:

1. Le **letture diagnostiche 🅑** di domenica 6 → si accorciano o si saltano
2. Lo **svolgimento integrale** di martedi 8 → si riduce ai due punti peggiori
3. Il **4 luglio T2** di lunedi 7 → si degrada da 🅐 a 🅑, ma **l'Esercizio 2 va svolto comunque per intero**: stabilità e derivazione di $K$ non compaiono in nessun'altra prova cronometrata
4. **Mai la Simulazione III del 9.** E' l'unica misura onesta rimasta
5. **Mai il Binario IA.** Vale il 22% del voto e le chiuse hanno penalita' −0.5
6. **Mai un argomento intero.** L'Esercizio 2 ruota su cinque temi con frequenza quasi identica: non esiste quello improbabile

### Perche' non si rimandano le prove alla fine

Le prove servono a **scoprire cosa non sai mentre c'e' ancora tempo per rimediare**. Concentrarle negli ultimi tre giorni significa scoprire i buchi quando non resta slack per chiuderli.

C'e' anche una ragione che vale la pena dire ad alta voce: **il ripasso e' confortevole, la simulazione no**. A pochi giorni dall'esame la tentazione di stare nel confortevole e' forte, e va riconosciuta per quello che e'.

I laboratori, da soli, non bastano: non allenano il pattern piu' frequente dell'esame — *"giustificare teoricamente, richiamando il teorema opportuno"*, presente in **ogni esercizio di ogni prova** — perche' nei laboratori quella richiesta non c'e'.

---

## 7. Tabella decisionale — da mandare a memoria

### Sistemi lineari: caratteristiche di $A$ → metodo

| Caratteristica | Metodo | Teorema / motivo | Costo |
|---|---|---|---|
| Triangolare | sostituzione avanti / indietro | diretta | $O(n^2/2)$ |
| **Simmetrica definita positiva**, densa | **Cholesky** $LL^T$ | Teorema di Cholesky | $\frac16n^3$ |
| Piena, non singolare, generica | **LU con pivoting** | Teorema 2 | $\frac13n^3$ |
| Mal condizionata / massima stabilità | **QR** | $Q$ ortogonale ⟹ $K_2(Q)=1$ | $\frac23n^3$ |
| **Ortogonale** | $x=Q^Tb$ | $K_2=1$ | $O(n^2)$ |
| SDP, grande e sparsa | **Gradiente coniugato** | $\le n$ iterazioni; velocità $\sim\sqrt{K}$ | |
| SDP, iterativo semplice | **Gradiente** | velocità $\sim K$ | |
| **Dominanza diagonale stretta** | Jacobi / **Gauss-Seidel** | convergenza senza calcolare $\rho$ | |
| **Simmetrica definita positiva** | Gauss-Seidel | teorema alternativo — il drill del 31/8 | |
| Rettangolare $m>n$ | **QR-LS** | $K_2(A^TA)=K_2(A)^2$ | |
| Rettangolare non a rango pieno | SVD-LS | | |

### Zeri e sistemi non lineari

| Situazione | Metodo | Ordine |
|---|---|---|
| $f$ continua, $f(a)f(b)<0$, no derivata | Bisezione | 1 ($c=\frac12$) |
| Cambio di segno, più veloce | Regula falsi | superlineare |
| Pendenza fissa, no derivata | Corde | 1, $c=\Vert 1-\frac{f'(\alpha)}{m}\Vert $ |
| Due iterati iniziali | Secanti | $\approx1.618$ |
| $f$ derivabile, radice **semplice** | Newton | 2 |
| Radice **multipla** di molteplicità $m$ | Newton modificato | 2 (senza $m$: 1, $c=\frac{m-1}{m}$) |
| Sistema non lineare | Newton-Raphson | 2 |
| Sistema, Jacobiana costosa | corde / Shamanskii | 1 / intermedio |
| Minimo in più variabili | NR sul minimo ($Hs=-\nabla f$) | 2 |

---

## 8. Come studiare

1. **Mai leggere senza codice aperto.**
2. **Riscrivi ogni algoritmo da zero almeno una volta.** All'esame ricevi il file a buchi: il codice di contorno c'è, manca **la matematica**.
3. **Riempi i buchi la sera del giorno in cui studi quel metodo**, a memoria, e usa il formulario solo per correggerti.
4. **Per ogni metodo, 4 caselle**: ipotesi · costo · convergenza/ordine · come lo riconosci dai dati.
5. **Le prove cronometrate si fanno, non si leggono.**
6. **Le giustificazioni vanno scritte nel notebook**, in celle markdown, mentre risolvi.
7. **Non sforare la giornata.** Se un blocco sbrodola, tagli dentro il blocco.

---

## 9. Checklist finale

- [x] eps macchina, cancellazione numerica *(A)*
- [x] condizionamento del problema vs stabilità dell'algoritmo, con esempi *(A)*
- [x] **ricavare** $K=\left\|\frac{f'(x)x}{f(x)}\right\|$ *(A)*
- [x] da formula instabile a formula stabile *(A)*
- [x] ordini e ipotesi dei metodi per zeri 1D; rimedio su radice multipla *(A)*
- [x] Newton-Raphson per sistemi: $Js=-F$; corde e Shamanskii; il minimo con la Hessiana *(A-bis)*
- [ ] Data una matrice, in 60 secondi: simmetrica? definita positiva? dominanza diagonale? quale metodo? *(B–C)*
- [ ] **ricavare** $K(A)=\|A^{-1}\|\|A\|$ dalla perturbazione di $b$ *(B)*
- [ ] Teorema 1, Teorema 2, Teorema di Cholesky — enunciati e verifica sperimentale delle ipotesi *(B)*
- [ ] Stabilità forte/debole: LU, Cholesky, QR con le maggiorazioni *(B)*
- [ ] **ricavare** $\det(A)=(-1)^s\prod u_{ii}$ *(B)*
- [ ] Splitting di Jacobi, GS, SOR; $\rho(T)<1$ *(C)*
- [ ] **Quale teorema garantisce GS senza calcolare $\rho$, in entrambi i casi** *(C)*
- [ ] $K(A)$ e velocità di convergenza di gradiente e CG *(C)*
- [ ] Teorema sull'errore di interpolazione; **costante di Lebesgue** *(D)*
- [ ] Perché le equazioni normali sono peggiori del QR *(D)*
- [ ] **derivare** la formula dei pesi per MLP 1-1-1-1 *(IA)*
- [ ] Adagrad, RMSProp, Adam: formule e pro/contro *(IA)*
- [ ] 8 prove cronometrate svolte senza sbirciare
