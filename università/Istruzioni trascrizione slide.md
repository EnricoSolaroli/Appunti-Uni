# Istruzioni per Claude – Trascrizione delle slide dei corsi in Obsidian

> Da caricare all'inizio di una nuova chat. Contiene tutte le regole che ho dato finora per trascrivere le slide dei miei corsi nel vault Obsidian.

## 1. Dove sono i file

- **Slide (PDF)**: cartella iCloud `Universita` → `terzo anno` → `<corso>` → `slide/`
  (`/Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/<corso>/slide/`)
- **Vault Obsidian**: `/Users/enrico/Library/Mobile Documents/iCloud~md~obsidian/Documents/obsidian_sola/università/`
- **Cartella di destinazione**: una cartella per corso dentro `università/`, con il nome del corso. Se non esiste, creala tu.

| Corso | Cartella slide | Cartella nel vault |
|---|---|---|
| Ricerca Operativa | `ricerca operativa` | `ricerca operativa` |
| Reti di Telecomunicazione | `reti 2` | `reti di telecumunicazione` (il nome ha un refuso: lascialo così) |
| Embedded Systems and IoT | `iot` | `iot` |
| Tecnologie Web | `tecnologie web` | `tecnologie web` |
| Ingegneria del Software | `ingegneria del software` | `ingegneria del software` (ancora da fare) |

- Le immagini vanno nella sottocartella `immagini/` della cartella del corso.
- Salvo richiesta diversa, **salta la presentazione del corso** (es. "Course Presentation.pdf").
- Prima di iniziare controlla quali PDF sono **già stati trascritti**, per non rifarli.

## 2. Struttura della nota

- **Una nota per ogni file PDF** (non una per pagina). Nome: `NN - Titolo della lezione.md` (es. `02 - Supporto alle Decisioni.md`, `01.1 - Introduction to Embedded Systems.md`).
- Contenuto, in quest'ordine:
  1. Link al PDF originale: `[nome file](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/<corso>/slide/<file>.pdf>)`
  2. `# Titolo della lezione`
  3. `## Indice` (vedi §5)
  4. Una sezione per ogni slide:
     ```
     ---
     ## Slide N – Titolo della slide
     ```
  5. `## Riassunto` in fondo (vedi §6)

## 3. Regole di trascrizione

- **Riporta tutto il testo della slide**: elenchi puntati come liste markdown, sotto-punti indentati con TAB, didascalie e fonti comprese.
- **Non trascrivere** gli elementi irrilevanti per il contenuto: logo Unibo, bande "ALMA MATER STUDIORUM", footer (es. "ESIOT ISI-LT - UNIBO module-…"), numeri di pagina, date e versioni nei margini, badge Creative Commons, nome del professore. Salta anche le slide di chiusura con solo i contatti o "Domande?".
- **Formattazione**:
  - testo rosso, sottolineato o evidenziato → **grassetto**;
  - corsivo → *corsivo*;
  - formule in LaTeX (`$…$` e `$$…$$`, sistemi con `\begin{cases}`);
  - codice e output di comandi in blocchi di codice;
  - tabelle come tabelle markdown.
- **Lingua**: trascrivi nella lingua della slide, senza tradurre (le slide di IoT restano in inglese). Le mie aggiunte, indice e riassunto sono **sempre in italiano**.
- **Refusi ed errori delle slide**: lasciali come sono nel testo. Se c'è un errore concettuale o di calcolo, segnalalo in un blocco `>>`.
- **Marcatori del docente** (es. la grande "A" rossa nelle slide di reti): non trascriverli come testo, ma segnala sotto il titolo con `*(slide marcata "A")*`.

## 4. Immagini

- **Includi ogni immagine della slide**: figure, diagrammi, grafici, screenshot, tabelle-immagine. Ritagliale da un render della pagina a circa 150 dpi, senza titolo, logo o footer. Se il logo si sovrappone alla figura, coprilo di bianco solo se non tocca il contenuto.
- **Nome file**: `<PREFISSO>-sNNN-K.png`, dove NNN è il numero della slide a 3 cifre e K parte da 1 (serve se nella slide ci sono più immagini). Il prefisso identifica il corso e la lezione, per esempio:
  - `RO02` → Ricerca Operativa, lezione 2
  - `RT01` → Reti, lezione 1
  - `IOT11` / `IOT12` → IoT, moduli 1.1 e 1.2
  - `TW01` → Tecnologie Web, lezione 1
- **Inserimento nella nota**: `![[RO02-s014-1.png]]`, con eventuale larghezza, es. `![[RO02-s014-1.png|500]]`.
- **Diagrammi o tabelle con testo**: metti l'immagine e trascrivi anche il testo essenziale (per le tabelle, anche in markdown).
- **Formule**: se una "figura" è solo una formula o del testo formattato, scrivila in LaTeX invece di ritagliarla.
- Controlla sempre a occhio ogni ritaglio.

## 5. Le mie aggiunte: il marcatore `>>`

- Dove è utile, aggiungi spiegazioni, intuizioni, esempi svolti, calcoli di verifica o correzioni di errori delle slide. Aggiungi solo dove serve davvero, in modo conciso e corretto.
- Ogni riga aggiunta **deve iniziare con `>> `** (per le righe vuote nel blocco usa `>>`). In Obsidian compare la barra laterale, così capisco che quel pezzo non è nella slide.
- Non mischiare mai testo della slide con le aggiunte `>>`. Non aggiungere altro testo tuo fuori dai blocchi `>>`: nemmeno etichette tipo "Livelli:" o "Etichette:".

## 6. Indice iniziale (`## Indice`)

Va subito dopo il titolo `#`. Raggruppa le slide per argomento (di solito 4–12 gruppi, nell'ordine in cui compaiono), con link cliccabili alla slide in cui inizia ogni argomento e ogni sotto-argomento importante:

```
## Indice

1. **Nome argomento** (slide 2–7)
	- [[#Slide 2 – Titolo esatto della slide|Descrizione breve]]
	- [[#Slide 5 – Titolo esatto della slide|Sotto-argomento]]
2. **Altro argomento** (slide 8–15)
	- ...
```

- Il testo dopo `#` nel link deve essere **identico** al titolo della sezione, carattere per carattere. Verificalo con uno script.
- Non linkare titoli che contengono `[ ] | # ^`: usa la slide vicina.
- I nomi degli argomenti sono in italiano. Niente `>>` nell'indice.

## 7. Riassunto finale (`## Riassunto`)

In fondo alla nota:

```
---
## Riassunto

>> **Argomento chiave**
>> - definizione / concetto / formula da ricordare
>>
>> **Altro argomento**
>> - ...
```

- È un riassunto breve dei **concetti più importanti** per il ripasso: definizioni, formule e numeri da ricordare, probabili domande d'esame.
- In italiano, a punti, raggruppato con sottotitoli in grassetto. Lunghezza indicativa: 150–600 parole, in base alla lezione.
- Tutte le righe iniziano con `>> `, perché è contenuto aggiunto da te. Niente link.

## 8. Procedimento (note tecniche per Claude)

1. Elenca le cartelle del corso sul mio computer e controlla quali PDF mancano nel vault.
2. Porta i PDF nell'area di lavoro cloud e crea per ogni pagina:
   - un render piccolo da guardare (~800–940 px);
   - un render a 150 dpi da cui ritagliare;
   - il testo estratto con `pdftotext -layout`.
3. Per lezioni lunghe dividi il lavoro tra più sub-agenti in parallelo, circa 30–36 slide ciascuno, con un file di istruzioni comune. Poi unisci le parti.
4. Verifica:
   - numerazione delle slide continua;
   - ogni `![[…]]` corrisponde a un'immagine esistente;
   - link dell'indice validi;
   - righe `>>` corrette.
5. Scrivi note e immagini nella cartella del corso nel vault. Per più di 50 file, fallo in più blocchi.
6. **Rispetta le mie modifiche**: se una nota esiste già, ricaricala dal mio computer prima di modificarla e lavora su quella versione. Nel salvataggio usa il controllo sulla data di modifica, per non sovrascrivere mie modifiche più recenti.
7. Alla fine dammi un riepilogo breve:
   - quante slide e quante immagini;
   - le slide saltate;
   - gli errori delle slide segnalati con `>>`;
   - eventuali dubbi.
