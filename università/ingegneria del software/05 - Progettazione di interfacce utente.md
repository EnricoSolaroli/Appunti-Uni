[5-GUI](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/ingegneria del software/slide/5-GUI.pdf>)

# Progettazione di interfacce utente

## Indice

1. **Che cos'è un'interfaccia** (slide 2–5)
	- [[#Slide 2 – Cos'è un'interfaccia?|Definizione: canale bidirezionale di dialogo]]
	- [[#Slide 3 – Tecnologia vs. ergonomia|Lato fisico (tecnologia) e lato cognitivo (ergonomia)]]
	- [[#Slide 4 – I paradigmi di interazione|I cinque paradigmi storici di interazione]]
	- [[#Slide 5 – Dalla parte dell'utente|Le GUI sfruttano riconoscimento e associazione]]
2. **Riconoscere o ricordare?** (slide 6–11)
	- [[#Slide 6 – Riconoscere o ricordare?|Test 1: rievocazione di codici alfabetici]]
	- [[#Slide 8 – Riconoscere o ricordare?|Test 2: rievocazione di icone familiari]]
	- [[#Slide 10 – Riconoscere o ricordare?|Test 3: riconoscimento icona–funzione]]
3. **Fattori chiave e scelta della tecnologia** (slide 12–13)
	- [[#Slide 12 – Fattori chiave nel progetto dell'interfaccia|Chi usa l'interfaccia e per cosa: persone, tecnologia, obiettivi]]
	- [[#Slide 13 – Scelta della tecnologia per l'interfaccia|Criteri in funzione di obiettivi e utenti]]
4. **Le tipologie di interfaccia a confronto** (slide 14–18)
	- [[#Slide 14 – Interfacce code-based|Interfacce a comandi (codici)]]
	- [[#Slide 15 – Interfacce 3270|Interfacce a caratteri per il data-entry]]
	- [[#Slide 16 – Pseudo-GUI|Pseudo-GUI: maschere strutturate con widget grafici]]
	- [[#Slide 17 – Standard GUI|Standard GUI e manipolazione diretta]]
	- [[#Slide 18 – Special GUI|Special GUI: autoesplicazione e self-service]]
5. **Strutturazione e modelli di finestre** (slide 19–23)
	- [[#Slide 19 – Strutturazione|Struttura bassa e larga vs alta e stretta]]
	- [[#Slide 20 – Strutture di riferimento|Le tre strutture di riferimento]]
	- [[#Slide 21 – Modello multi-window|Multi-window: massima flessibilità]]
	- [[#Slide 22 – Modello multi-document|Multi-document (MDI): un solo menu]]
	- [[#Slide 23 – Modello multi-paned|Multi-paned: pane monofunzionali e self-service]]
6. **Project standard** (slide 24–26)
	- [[#Slide 24 – Project standard|Standard di terminologia, metafore e finestre]]
	- [[#Slide 25 – Esempio|Caso del bottone con etichetta troppo lunga]]
	- [[#Slide 26 – Esempio|Priorità consigliate tra le soluzioni]]
7. **Comunicazione visiva nelle GUI** (slide 27–38)
	- [[#Slide 27 – Comunicazione visiva nelle GUI|I sei strumenti: affordance, metafora, layout, colori, icone, font]]
	- [[#Slide 28 – Affordance|Affordance: tridimensionalità, ombreggiatura, puntamento]]
	- [[#Slide 29 – Metafore|Metafore comuni e relative associazioni]]
	- [[#Slide 30 – Layout|Layout: distanze e grado di associazione]]
	- [[#Slide 31 – Colori|Significato culturale dei colori]]
	- [[#Slide 32 – Colori|Colore come decorazione o come codifica]]
	- [[#Slide 33 – Colori|Linee guida sull'uso del colore]]
	- [[#Slide 34 – Icone|Struttura, caratteristiche e linee guida delle icone]]
	- [[#Slide 35 – Icone|I tre tipi: desktop, menu/palette, button icon]]
	- [[#Slide 38 – Font|Font: serif, sans serif, maiuscolo e spaziatura]]
8. **Usabilità e i suoi criteri** (slide 39–45)
	- [[#Slide 39 – Usabilità|Definizione: efficacia, efficienza, soddisfazione]]
	- [[#Slide 40 – Criteri di usabilità|I sei criteri di usabilità]]
	- [[#Slide 41 – Apprendibilità|Apprendibilità: obiettivo e casi d'uso]]
	- [[#Slide 42 – Velocità / Soddisfazione|Velocità e soddisfazione]]
	- [[#Slide 43 – Facilità di navigazione|Navigabilità: flessibilità vs rigidità]]
	- [[#Slide 44 – Memorabilità|Memorabilità: riuso dopo lunga inattività]]
	- [[#Slide 45 – Prevenzione degli errori|Riduzione degli errori catastrofici]]
9. **Metodologia di progetto e test con l'utente** (slide 46–47)
	- [[#Slide 46 – Metodologia di progetto|Le nove attività dallo studio di fattibilità allo sviluppo]]
	- [[#Slide 47 – Test con l'utente|Simulatore, dimostratore, prototipo]]


---
## Slide 1 – Progettazione di interfacce utente

- **PROGETTAZIONE DI INTERFACCE UTENTE**

>> Slide di copertina del modulo dedicato alla progettazione delle GUI
>> (Graphical User Interface) all'interno del corso di Ingegneria del Software.

---
## Slide 2 – Cos'è un'interfaccia?

- Nel gergo generale...
	- *...permette il dialogo tra due entità (partner)*
- Nel gergo elettronico...
	- *...permette il transito di informazione tra due dispositivi o sistemi*

![[ISW5-s002-1.png|300]]

![[ISW5-s002-2.png|500]]

>> Nel diagramma il flusso è bidirezionale: l'utente agisce sul sistema tramite
>> i dispositivi di input (tastiera, mouse) e il sistema risponde attraverso i
>> dispositivi di output (monitor). L'interfaccia è esattamente questo canale
>> a due vie, non solo la "grafica" che si vede.

---
## Slide 3 – Tecnologia vs. ergonomia

- Sul lato fisico...
	- *... tecnologia*
- Sul lato cognitivo
	- *...ergonomia cognitiva*

![[ISW5-s003-1.png|500]]

>> Le due dimensioni vanno progettate insieme: la tecnologia stabilisce *cosa*
>> è fisicamente possibile fare (touch, voce, visore), l'ergonomia cognitiva
>> stabilisce *quanto costa* all'utente, in termini di attenzione e memoria,
>> usare quella tecnologia. Le icone in basso richiamano i canali sensoriali
>> coinvolti: vista, udito, voce, tatto.

---
## Slide 4 – I paradigmi di interazione

![[ISW5-s004-1.png|500]]

- TERMINALE SCRIVENTE: *SCRIVI E LEGGI*
- TERMINALE VIDEO: *SCEGLI E RIEMPI*
- PERSONAL COMPUTER: *WHAT IF*
- SISTEMI MULTIMEDIALI: *PARLA ED ASCOLTA*
- REALTÀ VIRTUALE: *ENTRA ED AGISCI*

>> I cinque paradigmi sono in ordine storico crescente di ricchezza
>> dell'interazione: si passa da un dialogo puramente testuale e sequenziale
>> (scrivi e leggi) a uno in cui l'utente è immerso nell'ambiente e agisce
>> direttamente sugli oggetti (entra ed agisci).

---
## Slide 5 – Dalla parte dell'utente

- Le GUI esaltano le potenzialità del cervello umano:
	- *riconoscere e associare*
	- *generalizzare e dedurre*
- Come:
	- *molte informazioni contemporaneamente*
	- *metafore*
	- *colore*

![[ISW5-s005-1.png|450]]

>> Il punto chiave è che il cervello umano riconosce molto meglio di quanto
>> ricordi: una GUI mostra le alternative disponibili (riconoscimento) invece
>> di obbligare l'utente a ricordarne i nomi (rievocazione). Le prossime slide
>> sono un esperimento che misura proprio questa differenza.

---
## Slide 6 – Riconoscere o ricordare?

- Lista di codici registrazione ordinazioni al ristorante, facili da ricordare e raggruppati per significato.
	1. Leggerli per 30 secondi
	2. Chiudere le dispense e cercare di riscriverli correttamente anche se in un qualunque ordine

---
## Slide 7 – Riconoscere o ricordare?

- Lista di codici registrazione ordinazioni al ristorante, facili da ricordare e raggruppati per significato.
	1. Leggerli per 30 secondi
	2. Chiudere le dispense e cercare di riscriverli correttamente anche se in un qualunque ordine

| | | | |
|---|---|---|---|
| FISS | SPAG | BRAC | ACQU |
| CART | RISO | POLL | VINO |
| SELF | BROD | PESC | |
| | LASA | BOLL | |
| | | CONI | |

PUNTEGGIO: \_\_\_ /14

>> I 14 codici sono raggruppati per significato: primi piatti a base di pasta
>> e riso, secondi di carne e pesce, bevande. Il raggruppamento aiuta, ma resta
>> un compito di **rievocazione** pura: bisogna riprodurre a memoria i codici.

---
## Slide 8 – Riconoscere o ricordare?

- Un insieme di icone d'aspetto familiare raggruppate per significato
	1. Osservarle per 30 secondi
	2. Chiudere le dispense e cercare di riscriverne i nomi (secondo la propria interpretazione) in un qualunque ordine

---
## Slide 9 – Riconoscere o ricordare?

- Un insieme di icone d'aspetto familiare raggruppate per significato
	1. Osservarle per 30 secondi
	2. Chiudere le dispense e cercare di riscriverne i nomi (secondo la propria interpretazione) in un qualunque ordine

![[ISW5-s009-1.png|500]]

PUNTEGGIO: \_\_\_ /14

>> Qui il compito è ancora di rievocazione, ma il materiale è pittorico e
>> familiare (stella, freccia, croce, computer, floppy, stampante, mouse,
>> fulmine, cuore, penna, lettere, siringa, schedario, cerotto): tipicamente
>> il punteggio sale rispetto ai codici alfabetici della slide 7.

---
## Slide 10 – Riconoscere o ricordare?

- Un insieme di icone che associano oggetti del mondo reale alle più diffuse funzioni computerizzate
	1. Osservarle per 30 secondi
	2. Voltare pagina e cercare di riscrivere il nome di ciascuna funzione accanto all'immagine dell'icona corrispondente

![[ISW5-s010-1.png|450]]

Testo delle etichette (14 funzioni):

| Icona | Funzione | Icona | Funzione | Icona | Funzione |
|---|---|---|---|---|---|
| spunta | Visto | chiave | Password | forbici | Taglia |
| freccia avanti | Avanti | agenda | Agenda elettronica | tubetto di colla | Incolla |
| freccia indietro | Indietro | busta | Posta elettronica | floppy disk | Salva |
| mano che indica | Seleziona | penna | Video scrittura | stampante | Stampa |
| lente | Zoom | barra | Aggiungi | | |

---
## Slide 11 – Riconoscere o ricordare?

- Un insieme di icone che associano oggetti del mondo reale alle più diffuse funzioni computerizzate
	1. Osservarle per 30 secondi
	2. Voltare pagina e cercare di riscrivere il nome di ciascuna funzione accanto all'immagine dell'icona corrispondente

![[ISW5-s011-1.png|450]]

PUNTEGGIO: \_\_\_ /14

>> Questo terzo test è di **riconoscimento**: l'icona è presente e va solo
>> associata al suo nome. È il compito in cui si ottengono i punteggi più alti,
>> ed è esattamente il modo in cui lavora una GUI: mostra gli oggetti e chiede
>> all'utente solo di riconoscerli.

---
## Slide 12 – Fattori chiave nel progetto dell'interfaccia

- *Chi* userà l'interfaccia?
- *Per cosa* l'interfaccia verrà usata?

![[ISW5-s012-1.png|500]]

Schema: **OBIETTIVI** (in alto) → **GUI**; **PERSONE** → **GUI** → **TECNOLOGIA**

>> La GUI sta al centro di un triangolo di vincoli: le persone che la usano, la
>> tecnologia disponibile e gli obiettivi di business. Cambiare uno dei tre
>> vertici cambia la soluzione corretta: non esiste "la" interfaccia migliore
>> in assoluto.

---
## Slide 13 – Scelta della tecnologia per l'interfaccia

![[ISW5-s013-1.png|400]]

| **...in funzione degli obiettivi:** | **...in funzione degli utenti:** |
|---|---|
| rapidità o efficacia | numero d'utenti |
| che cosa è la qualità e quanto è importante | esperienza nell'utilizzo della tecnologia |
| change management | età media |
| utilizzo di strumenti di produttività individuale | motivazione o scetticismo |
| strategie a lungo o a breve termine (elevato o modesto investimento) | eterogeneità dei gruppi d'appartenenza |
| | turnover |
| | utilizzatori assidui o saltuari |
| | versioni standard o ad hoc |

>> Nelle slide che seguono ogni tecnologia d'interfaccia viene valutata con la
>> stessa griglia a cinque criteri (mole di lavoro da svolgere, qualità,
>> facilità di apprendimento, riutilizzo della conoscenza, soddisfazione),
>> così da poterle confrontare direttamente: nessuna vince su tutti i fronti.

---
## Slide 14 – Interfacce code-based

- Interazione attraverso comandi (codici)
	- *Ottimale per moli di lavoro elevate che richiedono attenzione in punti lontani dal video (es. Check-In in aeroporto)*
	- *Occorre mantenere basso il numero di codici utilizzabili*
	- *Nessuna riusabilità delle conoscenze acquisite*

![[ISW5-s014-1.png|500]]

| Mole di lavoro da svolgere | Qualità | Facilità di apprendimento | Riutilizzo conoscenza | Soddisfazione |
|---|---|---|---|---|
| ☺ | 😐 | ☹ | ☹ | ☹ |

```
> copy utenti.txt D:
> print utenti.txt
> delete utenti.txt
```

>> Nella tabella ☺ = buono, 😐 = intermedio, ☹ = scarso. L'interfaccia a
>> comandi è velocissima per l'operatore esperto (può digitare senza guardare
>> lo schermo), ma ogni comando va imparato a memoria: pessima su
>> apprendimento, riuso e soddisfazione.

---
## Slide 15 – Interfacce 3270

- Interfaccia a caratteri
	- *Ottimale per data-entry ed editing di dati altamente strutturati*
	- *Workflow fortemente predefinito (bassa flessibilità)*
	- *Navigazione e tasti funzionali complicano apprendimento e riusabilità delle conoscenze acquisite*

![[ISW5-s015-1.png|500]]

| Mole di lavoro da svolgere | Qualità | Facilità di apprendimento | Riutilizzo conoscenza | Soddisfazione |
|---|---|---|---|---|
| ☺ | ☺ | 😐 | ☹ | ☹ |

```
NOME:    _________________
COGNOME: _________________
SESSO:   _

RESIDENZA: _______________
           _______________
```

>> "3270" è il nome del terminale IBM a caratteri usato per i mainframe: la
>> maschera a campi fissi con tasti funzione (F1...F12) è il modello di
>> interazione tipico del data-entry massivo.

---
## Slide 16 – Pseudo-GUI

- Interfaccia grafica che richiama la strutturazione di un'interfaccia a caratteri
	- *Ottimale per applicazioni che debbano gestire dati fortemente strutturati garantendo una buona flessibilità*
	- *Se standard consente riusabilità delle conoscenze acquisite*

![[ISW5-s016-1.png|500]]

| Mole di lavoro da svolgere | Qualità | Facilità di apprendimento | Riutilizzo conoscenza | Soddisfazione |
|---|---|---|---|---|
| ☺ | ☺ | 😐 | ☺ | 😐 |

![[ISW5-s016-2.png|450]]

>> La pseudo-GUI è il compromesso: usa i widget grafici standard (campi, radio
>> button, combo box, bottoni OK/Cancel) ma conserva la logica a maschera
>> dell'interfaccia a caratteri. Per questo eredita il buon rendimento sul
>> data-entry e guadagna il riutilizzo della conoscenza dato dagli standard.

---
## Slide 17 – Standard GUI

- Progettata e sviluppata per un ambiente grafico
	- *Esaltate le potenzialità di manipolazione diretta (cut & paste, drag & drop, etc.)*
	- *Ottimale per user-driven applications (flessibilità)*

![[ISW5-s017-1.png|500]]

| Mole di lavoro da svolgere | Qualità | Facilità di apprendimento | Riutilizzo conoscenza | Soddisfazione |
|---|---|---|---|---|
| ☺ | ☺ | 😐 | ☺ | ☺ |

![[ISW5-s017-2.png|450]]

>> "User-driven" significa che è l'utente a decidere la sequenza delle azioni,
>> non l'applicazione: il foglio di calcolo è l'esempio canonico, perché
>> l'utente costruisce il proprio percorso di lavoro manipolando direttamente
>> gli oggetti sullo schermo.

---
## Slide 18 – Special GUI

- Enfasi massima alla presentazione grafica
	- *Obiettivo prioritario è l'autoesplicazione (EIS, videogames)*
	- *Il cliente "si serve" da solo...*
	- *L'utente target potrebbe non avere esperienza sull'utilizzo dei computer*

![[ISW5-s018-1.png|500]]

| Mole di lavoro da svolgere | Qualità | Facilità di apprendimento | Riutilizzo conoscenza | Soddisfazione |
|---|---|---|---|---|
| 😐 | ☺ | ☺ | ☹ | ☺ |

![[ISW5-s018-2.png|450]]

>> EIS = *Executive Information System*. La special GUI è costruita su misura,
>> quindi si impara da sola (autoesplicazione) e piace, ma proprio perché non
>> segue gli standard la conoscenza acquisita non si trasferisce ad altre
>> applicazioni: riutilizzo scarso.

---
## Slide 19 – Strutturazione

- Una struttura "bassa e larga" fornisce all'utente una visione migliore delle possibilità offerte e facilita la navigazione

![[ISW5-s019-1.png|500]]

Le due alternative a confronto: **Alta e Stretta** – **Bassa e Larga**

>> Una struttura alta e stretta ha pochi rami per nodo ma molti livelli:
>> l'utente deve fare molti passi e perde l'orientamento. Una struttura bassa e
>> larga ha molte voci per livello ma pochi livelli: si vede subito tutto ciò
>> che è disponibile. È lo stesso principio dei menu applicativi, che sono
>> larghi (molte voci) e profondi solo due o tre livelli.

---
## Slide 20 – Strutture di riferimento

![[ISW5-s020-1.png|500]]

- Multi-Window
- Multi-Document (MDI)
- Multi-Paned

---
## Slide 21 – Modello multi-window

- *molte main window (ciascuna con un menu)*
- *rapporto 1:1 tra main window e business object*
- *molte child windows (senza menu) possibili per ciascuna main window*
- Più *main window* attivabili contemporaneamente: estrema flessibilità
- Navigazione complessa

![[ISW5-s021-1.png|450]]

>> Ogni *business object* (cliente, ordine, fattura...) ha la propria finestra
>> principale indipendente: massima libertà per l'utente esperto, ma con molte
>> finestre aperte contemporaneamente diventa facile perdersi.

---
## Slide 22 – Modello multi-document

- *una sola top window con menu*
- *la top window guida una serie di document window*
- *la top-window deve sempre rimanere aperta*
- Flessibilità inferiore a quella del multi-window model
- Vi sarà sempre un solo menu attivabile
- Ottimale anche per utenti inesperti

![[ISW5-s022-1.png|450]]

>> MDI (*Multiple Document Interface*): le finestre figlie vivono dentro la
>> finestra principale e ne condividono il menu. Chiudendo la top window si
>> chiude tutta l'applicazione. Il menu unico riduce le possibilità di errore,
>> ed è per questo che il modello funziona anche con utenti poco esperti.

---
## Slide 23 – Modello multi-paned

- *una "window" alla volta con o senza menù*
- *eventuale suddivisioni in aree (pane) monofunzionali e monoposizionali*
- Assenza di flessibilità
- Per special GUI in applicazioni self-service

![[ISW5-s023-1.png|450]]

>> "Monofunzionale e monoposizionale" significa che ogni pane ha una sola
>> funzione e una posizione fissa sullo schermo: l'utente ritrova sempre le
>> stesse cose nello stesso posto. È il modello dei chioschi self-service e,
>> oggi, delle app mobili.

---
## Slide 24 – Project standard

![[ISW5-s024-1.png|400]]

- Definizione degli standard per:
	- *terminologia*
	- *metafore, icone*
	- *caratteristiche delle finestre (menu, bottoni, dimensioni, posizione, ecc.)*
- Obiettivo prioritario: agevolare l'utilizzo da parte dell'utente
	- *consistenza esterna*
	- *i tool già utilizzati in azienda (standard de facto)*
	- *consistenza interna subordinata all'usabilità*

>> Consistenza **esterna** = coerenza con le altre applicazioni che l'utente
>> già conosce; consistenza **interna** = coerenza fra le diverse schermate
>> della stessa applicazione. La slide dice che, in caso di conflitto, vince
>> l'usabilità: è meglio "rompere" la coerenza interna che costringere
>> l'utente a disimparare ciò che già sa.

---
## Slide 25 – Esempio

![[ISW5-s025-1.png|550]]

Project standard | Situazione contingente
- `OK` / `Testo lunghissimo`
- `OK` / `Stampa bolla di accompagnamento`

>> Il problema: lo standard di progetto fissa la dimensione dei bottoni,
>> ma l'etichetta richiesta dalla situazione reale ("Stampa bolla di
>> accompagnamento") non ci sta dentro e trabocca. Ogni riga sotto è una
>> possibile soluzione, con il risultato che produce.

- Allargare tutti i bottoni della window
- Allargare solo il bottone "incriminato"
- Ridisegnare la window ed inserire la scelta nel menù
- Un simbolo al posto del testo

![[ISW5-s025-2.png|220]]

- Testo più corto compreso ed approvato dall'utente
- Abbreviazione compresa ed approvata dall'utente

![[ISW5-s025-3.png|380]]

Risultati corrispondenti (dall'alto in basso): `OK` → `Stampa bolla di accompagnamento` → menù `Stampa` con le voci **Bolla di accompagnamento** / **Bolla di trasferimento** → `Stampa bolla` → `Stampa B.A.M.`

---
## Slide 26 – Esempio

- Priorità consigliate
	1. Testo più corto compreso ed approvato dall'utente
	2. Abbreviazione compresa ed approvata dall'utente
	3. Allargare tutti i bottoni della window/gruppo
	4. Allargare solo il bottone "incriminato"
	5. Un simbolo al posto del testo
	6. Ridisegnare la window ed inserire la scelta nel menù

>> Logica dell'ordinamento: prima si prova a cambiare il *testo* (costo
>> nullo sul layout, purché l'utente approvi), poi si tocca il *layout*
>> in modo uniforme, poi in modo locale (che rompe l'omogeneità), e solo
>> come ultima risorsa si ridisegna la finestra: è la soluzione più
>> costosa e quella che più disorienta l'utente abituato.

---
## Slide 27 – Comunicazione visiva nelle GUI

- *Affordance*: enfatizza gli aspetti di un oggetto che invitano a manipolarlo in un certo modo
- *Metafora*: una parola, una frase o una figura che dipinge un oggetto o un concetto attraverso una somiglianza o un'analogia con un altro oggetto o concetto del mondo reale
- *Layout*: è determinato dalla posizione del testo, dei disegni e dei controlli all'interno di un'area considerata
- *Colori*: utili per focalizzare l'attenzione o per creare associazioni
- *Icone*: disegni piccoli, semplici e metaforici
- *Font*: leggibilità in relazione al tipo e alle caratteristiche del carattere

---
## Slide 28 – Affordance

- Tridimensionalità
- Ombreggiatura
- Puntamento

![[ISW5-s028-1.png|500]]

>> L'affordance è "l'invito all'uso" che l'oggetto grafico comunica da
>> solo: un bottone in rilievo chiede di essere premuto, un interruttore
>> ON/OFF chiede di essere fatto scorrere, un radio button chiede di
>> essere scelto in alternativa agli altri. Se l'affordance è corretta,
>> l'utente non ha bisogno di istruzioni.

---
## Slide 29 – Metafore

- La prima tra le scelte progettuali...

**simbolo di divieto**
**+**
**evocazione del fumo**

![[ISW5-s029-1.png|140]]

| Metafore comuni | Associazioni |
| --- | --- |
| Documento | File |
| Cartelletta | Directory |
| Schedario | Storage System |
| Scheda | Record |
| Lettera | E-mail |
| Taglia e cuci | Scrivi e leggi da un buffer |
| Cestino | Cancella |
| Bottone | Comando |
| Gomma | Undo |

>> La metafora funziona finché regge l'analogia: appena il sistema fa
>> qualcosa che l'oggetto reale non farebbe (un cestino che "svuota"
>> anche i file mai buttati) la metafora tradisce l'utente. Meglio una
>> metafora parziale ma coerente che una completa ma bugiarda.

---
## Slide 30 – Layout

- La posizione degli elementi è un importante strumento di comunicazione
	- Le distanze devono essere scelte in relazione al grado di associazione tra gli elementi
- Fra gli standard di progetto...
	- distanza tra campi correlati
	- distanza tra i gruppi
	- distanza (superiore, laterale, inferiore) tra riquadro ed elementi contenuti
	- distanza (superiore, laterale, inferiore) tra margine dell'area principale ed elementi contenuti

![[ISW5-s030-1.png|500]]

>> È il principio di prossimità della Gestalt: ciò che è vicino viene
>> percepito come un gruppo. Le due maschere della figura contengono gli
>> stessi campi, ma spaziature diverse suggeriscono raggruppamenti
>> logici diversi.

---
## Slide 31 – Colori

| Culture | Rosso | Blu | Verde | Bianco | Giallo |
| --- | --- | --- | --- | --- | --- |
| USA | Pericolo | Mascolinità | Sicurezza | Purezza | Codardia |
| Francia | Aristocrazia | Libertà, pace | Criminalità | Neutralità | Temporaneità |
| Egitto | Morte | Virtù, fede | Fertilità, forza | Gioia | Prosperità |
| India | Vita, creatività | Gioia, potenza | Prosperità | Purezza | Successo |
| Giappone | Pericolo | Malvagità | Futuro, energia | Morte | Nobiltà |
| Cina | Felicità | Paradiso | (Ming) Paradiso | Purezza | Nascita |

![[ISW5-s031-1.png|500]]

Il colore è comunicazione!
(*Jan B. White*)

>> Conseguenza pratica: il significato dei colori non è universale. Per
>> un'applicazione destinata a mercati diversi il colore non può essere
>> l'unico portatore di informazione (rosso = errore), va sempre
>> affiancato a testo o simbolo.

---
## Slide 32 – Colori

![[ISW5-s032-1.png|380]]

decorazione — codifica

>> Stessa lista, due usi opposti del colore. A sinistra i colori sono
>> arbitrari (decorazione): non dicono nulla e affaticano. A destra la
>> gradazione di uno stesso colore codifica un ordine/una gerarchia tra
>> le voci: qui il colore porta informazione.

---
## Slide 33 – Colori

- Non abusare dei colori in un "ambiente" monocromatico: il risalto è eccessivo
- Se il colore è usato come codice: solo 3-5 colori, ricordarsi la semantica
- Colori vivaci per aree piccole e neutri per aree grandi
- Ricercare un contrasto efficace tra testo e sfondo
- Sfondo chiaro (bianco, grigio, giallo) è ottimale per testi scuri
- I colori troppo brillanti causano alterazione visiva sui tempi lunghi: sono pertanto sconsigliabili per applicazioni gestionali, mentre risultano ottimali nelle applicazioni self-service

>> La distinzione gestionale/self-service è di durata d'uso: l'operatore
>> sta davanti allo schermo otto ore (servono colori riposanti), il
>> cliente di un chiosco pochi secondi (servono colori che attirino).

---
## Slide 34 – Icone

- Struttura
	- immagine
	- sfondo
	- testo (facoltativo)
- Caratteristiche
	- Facilmente distinguibili
	- Elevato valore informativo
	- Presentazione esplicita della metafora
	- Incrementano la velocità e la correttezza della selezione
	- Autoesplicative anche se prive di testo
- Linee guida
	- Disegni semplici e schematici
	- Colori differenti in icone differenti
	- Il testo è il titolo della finestra collegata
	- Evitare i puzzle!

![[ISW5-s034-1.png|300]]

Piscina — Servizio Elicotteri — Traghetti

![[ISW5-s034-2.png|320]]

---
## Slide 35 – Icone

1. *Desktop icon*
	- Obiettivo: partenza, riapertura
	- Per applicazioni collegate per l'utente, icone simili graficamente
	- Se minimize:
		- icone similari per finestre diverse della stessa applicazione
		- il testo è fondamentale per icone similari rappresentanti finestre diverse
		- testo = window title

![[ISW5-s035-1.png|450]]

---
## Slide 36 – Icone

2. *Menu icon - Palette Icon*
	- Sempre visibili accanto ai menu
		- overview di funzioni sempre attivabili
		- un modo veloce di selezionare
		- per comandi esprimibili più facilmente con disegni che con parole
		- invito alla sperimentazione

![[ISW5-s036-1.png|550]]

---
## Slide 37 – Icone

3. *Button icon*
	- In aggiunta al testo di un bottone
		- Rafforza graficamente la funzione del bottone

![[ISW5-s037-1.png|550]]

---
## Slide 38 – Font

- Linee guida:
	- Sans Serif per singole righe → *Questo è il font Helvetica*
	- Serif per testi articolati su molte righe → *Questo è il font Times, più adatto per coprire più righe*
	- Attenzione al maiuscolo → *ATTENZIONE non abusare del maiuscolo*
	- Spaziatura proporzionale → *Questo è il font Courier*

![[ISW5-s038-1.png|400]]

Evitare i puzzle di font diversi

![[ISW5-s038-2.png|400]]

>> Il maiuscolo continuo rallenta la lettura: si perde il profilo
>> (ascendenti/discendenti) delle parole, che è proprio ciò che l'occhio
>> usa per riconoscerle a colpo d'occhio. Va bene per una singola parola
>> di allerta, non per una frase.

---
## Slide 39 – Usabilità

- L'efficacia, efficienza e soddisfazione con cui determinati utenti eseguono determinati compiti in particolari ambienti
	- *Efficacia*: in che misura i compiti previsti dal funzionamento vengono eseguiti
	- *Efficienza*: risorse da impegnare per eseguire i compiti previsti
	- *Soddisfazione*: misura dell'accettabilità del funzionamento da parte dell'utente
- ...ma anche comprensibilità, apprendibilità, operabilità

![[ISW5-s039-1.png|450]]

>> Nota che l'usabilità non è una proprietà assoluta del software: è
>> definita rispetto a una terna (utenti, compiti, ambiente). La stessa
>> interfaccia può essere usabilissima per l'operatore esperto e
>> inutilizzabile per l'utente occasionale.

---
## Slide 40 – Criteri di usabilità

![[ISW5-s040-1.png|400]]

- Veloce da usare
- Facile da navigare
- Facile da memorizzare
- Facile da imparare
- Piacevole da utilizzare
- Riduce gli errori

>> I sei criteri sono in tensione tra loro: un'interfaccia velocissima
>> per l'esperto (scorciatoie, comandi criptici) è difficile da
>> imparare; una facilissima da imparare (wizard passo-passo) è lenta da
>> usare. Le slide seguenti fissano, per ciascun criterio, un obiettivo
>> misurabile e i casi in cui conviene privilegiarlo.

---
## Slide 41 – Apprendibilità

- Obiettivo
	- 80% dei nuovi utenti in grado di svolgere compiutamente una singola attività dell'applicazione in 30 minuti
- Quando
	- Turn-over alto
	- Utenti saltuari
	- Riduzione del training
	- Sistemi solitamente sottoutilizzati per mancanza di training
	- Breve ciclo di vita dei prodotti

![[ISW5-s041-1.png|300]]

---
## Slide 42 – Velocità / Soddisfazione

**VELOCITÀ**

![[ISW5-s042-1.png|250]]

- Obiettivo
	- 10 inserimenti ogni 2 minuti
- Quando
	- Utilizzo giornaliero e intensivo
	- Attività ripetitiva

**SODDISFAZIONE**

![[ISW5-s042-2.png|250]]

- Obiettivo
	- 9 su 10 dichiarano che è "bello da usare"
- Quando
	- Sistema self-service
	- Business Process Re-engineering incentrato sul nuovo sistema

---
## Slide 43 – Facilità di navigazione

- Obiettivo
	- Possibilità di innescare 6 diverse attività su un singolo oggetto senza ritornare al menu principale
- Quando
	- Il cliente "guida il gioco"
	- Richiami notevoli tra attività
	- Si attende una decisione... (ristorante)
	- Elevato turn-over
	- L'importante non è prendere decisioni ma seguire una procedura (mensa)

**FLESSIBILITÀ** (primi tre casi) — **RIGIDITÀ** (ultimi due casi)

![[ISW5-s043-1.png|500]]

![[ISW5-s043-2.png|300]]

>> La metafora è chiara: al ristorante il cliente decide quando e in che
>> ordine, quindi l'interfaccia deve permettere salti liberi tra le
>> attività; alla mensa il percorso è obbligato e il flusso guidato è un
>> pregio, non un limite.

---
## Slide 44 – Memorabilità

- Obiettivo
	- Riutilizzo, senza ulteriore training, di una applicazione inattiva da 12 mesi
- Quando
	- Utenti saltuari
	- Applicazioni per circostanze "eccezionali"
	- Applicazioni di utilizzo secondario
	- Applicazioni attivate in date precise (scadenze)

![[ISW5-s044-1.png|320]]

>> Memorabilità ≠ apprendibilità: la prima riguarda il *ri*-uso dopo una
>> lunga pausa, la seconda il primo uso. Il caso tipico è la dichiarazione
>> dei redditi, usata una volta l'anno.

---
## Slide 45 – Prevenzione degli errori

- Obiettivo
	- Riduzione della percentuale degli errori incorreggibili (catastrofici)
- Quando
	- Risultati/prodotti ottenuti "faticosamente"
	- Risultati correlati a fattori di sicurezza
	- Risultati immediatamente visibili al cliente esterno

![[ISW5-s045-1.png|400]]

>> L'obiettivo non è azzerare gli errori (impossibile) ma renderli
>> reversibili: conferme sulle operazioni distruttive, undo, salvataggi
>> automatici. Un errore recuperabile costa quasi nulla, uno
>> irreversibile può costare il lavoro di ore.

---
## Slide 46 – Metodologia di progetto

- Prima del termine dello studio di fattibilità
	1. *definire le attività legate alla realizzazione dell'interfaccia*
	2. *definire i parametri di riferimento ed i criteri di usabilità*
	3. *pianificare le attività di valutazione dell'usabilità*
	4. *realizzare il modello concettuale dell'interfaccia*
- Precocemente nella fase di analisi e progettazione
	5. *Definire e realizzare le strutture base (dialogo, look & feel)*
	6. *Stabilire gli standard di progetto per l'interfaccia*
	7. *Prototipare le parti ritenute critiche*
	8. *Verificare l'allineamento con modello concettuale e standard*
- Nella fase di sviluppo
	9. *Ultimare l'interfaccia in dettaglio legandola alla logica applicativa*

![[ISW5-s046-1.png|350]]

>> Il punto chiave è che i criteri di usabilità e il loro metodo di
>> valutazione vanno fissati **prima**, nello studio di fattibilità: se
>> si definiscono a posteriori, si finisce per "misurare" ciò che
>> l'interfaccia già fa, non ciò che serviva all'utente.

---
## Slide 47 – Test con l'utente

**Simulatore** (l'utente è passivo)
**Dimostratore** (l'utente agisce sulle parti critiche)
**Prototipo** (l'utente agisce sull'intero sistema in beta-release)

- Elementi da verificare:
	- *Il modello concettuale è sufficientemente rappresentato*
	- *Rispetto al progetto l'interfaccia è adatta e gli standard sono rispettati*
	- *Adeguato bilanciamento tra flusso predefinito e flessibilità*
	- *Possibilità d'utilizzo alternativo tra mouse e tastiera*
	- *Livello d'integrazione dell'utente con l'interfaccia*
	- *E' utilizzata la terminologia utente*

>> I tre strumenti sono in ordine crescente di fedeltà e di costo:
>> il simulatore mostra, il dimostratore fa provare le parti critiche,
>> il prototipo fa usare tutto. Si sale di livello solo quando il
>> precedente ha già eliminato i problemi grossolani.

---
## Riassunto

>> **Interfaccia e paradigmi**
>> - Interfaccia = canale **bidirezionale** tra utente e sistema (input tastiera/mouse, output video): non è solo "la grafica". Va progettata su due dimensioni: **tecnologia** (lato fisico) ed **ergonomia cognitiva**.
>> - Cinque paradigmi storici: *scrivi e leggi*, *scegli e riempi*, *what if*, *parla e ascolta*, *entra e agisci*.
>> - Principio fondante delle GUI: il cervello **riconosce** meglio di quanto **ricordi** → mostrare le alternative invece di farle rievocare.
>>
>> **Tipologie di interfaccia**
>> - Tre vincoli attorno alla GUI: **persone**, **tecnologia**, **obiettivi**; non esiste l'interfaccia migliore in assoluto. Griglia di confronto a cinque criteri: mole di lavoro, qualità, apprendibilità, riutilizzo della conoscenza, soddisfazione.
>> - **Code-based**: veloce per l'esperto, pessima su apprendimento/riuso. **3270** (caratteri): ottima per data-entry strutturato, workflow rigido. **Pseudo-GUI**: compromesso, dati strutturati + flessibilità + riuso. **Standard GUI**: manipolazione diretta, per *user-driven applications*. **Special GUI**: autoesplicativa (EIS, self-service) ma nessun riuso della conoscenza.
>>
>> **Struttura e standard**
>> - Struttura **bassa e larga** meglio di alta e stretta: migliore visione d'insieme.
>> - **Multi-window** (1:1 main window/business object, massima flessibilità), **multi-document/MDI** (una top window col solo menu, adatto anche a inesperti), **multi-paned** (pane monofunzionali e monoposizionali, self-service).
>> - **Project standard**: la consistenza **esterna** (con ciò che l'utente già conosce) prevale; quella **interna** è subordinata all'usabilità.
>>
>> **Comunicazione visiva**
>> - **Affordance** = invito all'uso (tridimensionalità, ombreggiatura, puntamento); **metafora** = analogia col mondo reale (cestino→cancella); **layout** = le distanze esprimono il grado di associazione; **icone** = semplici e autoesplicative (desktop, menu/palette, button icon).
>> - **Colori**: significato non universale; se usati come codice al massimo **3-5 colori**; vivaci per aree piccole, neutri per aree grandi; brillanti sconsigliati nel gestionale, ottimi nel self-service.
>> - **Font**: sans serif per righe singole, serif per testi lunghi, evitare maiuscolo prolungato e puzzle di font.
>>
>> **Usabilità e metodologia**
>> - Definizione: **efficacia, efficienza, soddisfazione** con cui *determinati utenti* svolgono *determinati compiti* in *determinati ambienti* (non è proprietà assoluta del software).
>> - Obiettivi misurabili dei sei criteri: apprendibilità (80% dei nuovi utenti opera in 30 minuti), velocità (10 inserimenti in 2 minuti), soddisfazione (9 su 10 dicono "bello da usare"), navigabilità (6 attività su un oggetto senza tornare al menu principale), memorabilità (riuso senza training dopo 12 mesi), prevenzione degli errori (riduzione di quelli incorreggibili).
>> - Criteri di usabilità e modello concettuale vanno fissati **prima della fine dello studio di fattibilità**; poi standard, prototipazione delle parti critiche, dettaglio in sviluppo.
>> - Test con l'utente, in ordine crescente di fedeltà e costo: **simulatore** (utente passivo), **dimostratore** (parti critiche), **prototipo** (intero sistema in beta).
