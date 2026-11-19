[13_webdesign](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/13_webdesign.pdf>)

# Web design

>> Fin qui si è visto *come* costruire una pagina (HTML, CSS, JavaScript, Vue, PHP). Qui si vede *come progettarla*: tipografia, colore, layout e gerarchia visiva, responsive design. Riprende il CSS di [[06 - CSS intro, box model e flexbox]] e [[07 - CSS testo, colori e responsiveness]], e serve direttamente per la fase di design del progetto ([[Progetto - Specifiche]]).

## Indice

1. **Web design e il nostro esempio** (slide 1–8)
	- [[#Slide 2 – Argomenti|Argomenti]]
	- [[#Slide 3 – Web Design|Web Design]]
	- [[#Slide 4 – Web Design: un esempio|Web Design: un esempio]]
	- [[#Slide 5 – Il nostro esempio|Il nostro esempio]]
	- [[#Slide 6 – Qualità del progetto e compromessi|Qualità del progetto e compromessi]]
	- [[#Slide 7 – Il nostro esempio|Il nostro esempio]]
	- [[#Slide 8 – Un sito evolve nel tempo|Un sito evolve nel tempo]]
2. **Tipografia** (slide 9–23)
	- [[#Slide 9 – La tipografia nel Web|La tipografia nel Web]]
	- [[#Slide 10 – Carattere, glifo e font|Carattere, glifo e font]]
	- [[#Slide 11 -> 12 – Famiglie, varianti e classificazioni|Famiglie, varianti e classificazioni]]
	- [[#Slide 13 – Collegamento al CSS|Collegamento al CSS]]
	- [[#Slide 14 – Criteri per scegliere un font|Criteri per scegliere un font]]
	- [[#Slide 15 – Il tono della tipografia|Il tono della tipografia]]
	- [[#Slide 16 – Abbinamenti e gerarchia tipografica|Abbinamenti e gerarchia tipografica]]
	- [[#Slide 17 – Dimensioni e unità CSS|Dimensioni e unità CSS]]
	- [[#Slide 18 -> 19 – Interlinea, lunghezza delle righe e spazi bianchi|Interlinea, lunghezza delle righe e spazi bianchi]]
	- [[#Slide 20 – Disponibilità dei font e fallback|Disponibilità dei font e fallback]]
	- [[#Slide 21 – Esempio|Esempio]]
	- [[#Slide 22 – Strumenti e verifica sulla pagina|Strumenti e verifica sulla pagina]]
	- [[#Slide 23 – Prima domanda|Prima domanda]]
3. **Colore** (slide 24–52)
	- [[#Slide 24 -> 25 – Il colore nell'interfaccia|Il colore nell'interfaccia]]
	- [[#Slide 26 -> 27 – RGB e rappresentazione dei colori|RGB e rappresentazione dei colori]]
	- [[#Slide 28 – La codifica RGB: pixel e subpixel|La codifica RGB: pixel e subpixel]]
	- [[#Slide 29 -> 30 – Percezione umana del colore|Percezione umana del colore]]
	- [[#Slide 31 – Quanto occupa un'immagine raster?|Quanto occupa un'immagine raster?]]
	- [[#Slide 32 – Compressione|Compressione]]
	- [[#Slide 33 – Compressione e sensibilità visiva|Compressione e sensibilità visiva]]
	- [[#Slide 34 -> 35 – Sottocampionamento|Sottocampionamento]]
	- [[#Slide 36 – Percezione dei colori|Percezione dei colori]]
	- [[#Slide 37 -> 38 – Tonalità, saturazione e luminosità|Tonalità, saturazione e luminosità]]
	- [[#Slide 39 – Schemi di abbinamento cromatico|Schemi di abbinamento cromatico]]
	- [[#Slide 40 – Cerchio cromatico|Cerchio cromatico]]
	- [[#Slide 41 – Schema di colore|Schema di colore]]
	- [[#Slide 42 – Colore: significato e contesto|Colore: significato e contesto]]
	- [[#Slide 43 – Dalla palette ai ruoli dell'interfaccia|Dalla palette ai ruoli dell'interfaccia]]
	- [[#Slide 44 – Dal colore al ruolo|Dal colore al ruolo]]
	- [[#Slide 45 – Colori coerenti attraverso le custom properties|Colori coerenti attraverso le custom properties]]
	- [[#Slide 46 – Contrasto tra testo e sfondo|Contrasto tra testo e sfondo]]
	- [[#Slide 47 – Daltonismo|Daltonismo]]
	- [[#Slide 48 – Principali tipi di daltonismo|Principali tipi di daltonismo]]
	- [[#Slide 49 – Percezione dei colori e daltonismo|Percezione dei colori e daltonismo]]
	- [[#Slide 50 – Informazioni riconoscibili anche senza colore|Informazioni riconoscibili anche senza colore]]
	- [[#Slide 51 – Esplorazione, applicazione e verifica|Esplorazione, applicazione e verifica]]
	- [[#Slide 52 – Seconda domanda|Seconda domanda]]
4. **Layout e gerarchia visiva** (slide 53–78)
	- [[#Slide 53 – Il layout organizza le informazioni|Il layout organizza le informazioni]]
	- [[#Slide 54 – Contenuti, obiettivi e priorità|Contenuti, obiettivi e priorità]]
	- [[#Slide 55 – Contenuti, obiettivi e priorità: un esempio|Contenuti, obiettivi e priorità: un esempio]]
	- [[#Slide 56 – La gerarchia visiva|La gerarchia visiva]]
	- [[#Slide 57 – Prossimità: lo spazio suggerisce relazioni|Prossimità: lo spazio suggerisce relazioni]]
	- [[#Slide 58 – Somiglianza e regione comune|Somiglianza e regione comune]]
	- [[#Slide 59 – Allineamento e spazi bianchi|Allineamento e spazi bianchi]]
	- [[#Slide 60 – Wireframe, Mockup e prototipo|Wireframe, Mockup e prototipo]]
	- [[#Slide 61 – Il wireframe della pagina|Il wireframe della pagina]]
	- [[#Slide 62 – Come esploriamo una pagina: evidenze dall'eye-tracking|Come esploriamo una pagina: evidenze dall'eye-tracking]]
	- [[#Slide 63 – Heatmap e Gaze plot|Heatmap e Gaze plot]]
	- [[#Slide 64 -> 65 – Lo sguardo segue il layout o il layout segue lo sguardo?|Lo sguardo segue il layout o il layout segue lo sguardo?]]
	- [[#Slide 66 – Altre lingue e altri alfabeti|Altre lingue e altri alfabeti]]
	- [[#Slide 67 -> 68 – Struttura della pagina e ordine del documento|Struttura della pagina e ordine del documento]]
	- [[#Slide 69 -> 70 – Dalle scelte di layout a Grid e Flexbox|Dalle scelte di layout a Grid e Flexbox]]
	- [[#Slide 71 -> 72 – Valutare il layout con contenuti realistici|Valutare il layout con contenuti realistici]]
	- [[#Slide 73 – 1. Distinguere titolo, intestazioni e dettagli|1. Distinguere titolo, intestazioni e dettagli]]
	- [[#Slide 74 – 2. Avvicinare gli elementi dello stesso gruppo|2. Avvicinare gli elementi dello stesso gruppo]]
	- [[#Slide 75 – 3. Aumentare la distanza fra gruppi|3. Aumentare la distanza fra gruppi]]
	- [[#Slide 76 – 4. Rendere coerenti gli allineamenti|4. Rendere coerenti gli allineamenti]]
	- [[#Slide 77 – 5. Sostituire un titolo breve con uno lungo e aggiungere un intervento|5. Sostituire un titolo breve con uno lungo e aggiungere un intervento]]
	- [[#Slide 78 – Valutare il layout con contenuti realistici|Valutare il layout con contenuti realistici]]
5. **Responsive design e mobile first** (slide 79–94)
	- [[#Slide 79 -> 80 – Responsive design|Responsive design]]
	- [[#Slide 81 – Mobile first|Mobile first]]
	- [[#Slide 82 – Mobile first: esempio|Mobile first: esempio]]
	- [[#Slide 83 – Layout Liquido|Layout Liquido]]
	- [[#Slide 84 – Viewport e dimensioni flessibili|Viewport e dimensioni flessibili]]
	- [[#Slide 85 – Esempio CSS|Esempio CSS]]
	- [[#Slide 86 -> 87 – Breakpoint guidati dal contenuto|Breakpoint guidati dal contenuto]]
	- [[#Slide 88 – Flessibilità anche senza breakpoint|Flessibilità anche senza breakpoint]]
	- [[#Slide 89 – Progressive Enhancement|Progressive Enhancement]]
	- [[#Slide 90 – Progressive Enhancement: esempio|Progressive Enhancement: esempio]]
	- [[#Slide 91 -> 92 – Dimensione dello schermo e modalità di interazione|Dimensione dello schermo e modalità di interazione]]
	- [[#Slide 93 – Verificare l'adattamento della pagina|Verificare l'adattamento della pagina]]
	- [[#Slide 94 – Terza domanda|Terza domanda]]
6. **Riferimenti** (slide 95–100)
	- [[#Slide 96 – Riferimenti: tipografia, CSS e accessibilità|Riferimenti: tipografia, CSS e accessibilità]]
	- [[#Slide 97 – Riferimenti: percezione e immagini digitali|Riferimenti: percezione e immagini digitali]]
	- [[#Slide 98 – Riferimenti: layout ed esplorazione visiva|Riferimenti: layout ed esplorazione visiva]]
	- [[#Slide 99 – Riferimenti: mobile first e responsive|Riferimenti: mobile first e responsive]]
	- [[#Slide 100 – Strumenti e crediti delle immagini|Strumenti e crediti delle immagini]]

---
## Slide 1 – Web Design

![[TW14-s001-1.png|250]]

---
## Slide 2 – Argomenti

- Web Design
- Font e tipografia
- Colori e color scheme
- Layout e gerarchia visiva
- Mobile first e responsiveness

![[TW14-s002-1.png|150]]

**3 punti bonus**

---
## Slide 3 – Web Design

- Il Web design comprende le decisioni che definiscono come un sito presenta i contenuti e rende disponibili le proprie funzionalità
- La progettazione tiene conto di:
	- Obiettivi degli utenti: quali informazioni cercano e quali attività vogliono svolgere
	- Obiettivi del sito: quali servizi, contenuti o risultati deve offrire
	- Contesto d'uso: con quali dispositivi, capacità e condizioni le persone lo utilizzano
- Tipografia, colori e layout contribuiscono a rendere riconoscibili le informazioni, comprensibili le relazioni e individuabili le azioni disponibili

>> Il Web design non è solo "rendere bello" un sito: è l'insieme delle scelte di presentazione (tipografia, colore, layout) che servono a far trovare le informazioni e a far capire cosa si può fare. Le tre prospettive (utenti, sito, contesto d'uso) vanno bilanciate: un sito che soddisfa solo gli obiettivi del committente ma ignora come e dove viene usato funziona male.

---
## Slide 4 – Web Design: un esempio

- Durante questa lezione teniamo in considerazione il seguente esempio, che andremo a costruire man mano:
	- *Nella pagina di un evento universitario, un utente potrebbe voler conoscere programma e luogo, verificare il costo oppure iscriversi*
	- *Queste esigenze guidano la scelta delle informazioni da evidenziare e la posizione dell'azione di iscrizione*

![[TW14-s004-1.png|600]]

- Obiettivi degli utenti – Informarsi e iscriversi
- Obiettivi del sito – Presentare l'evento e raccogliere iscrizioni
- Contesto d'uso – Dispositivi, capacità e condizioni d'uso
- → Pagina dell'evento: "Web Design Day", Programma · Luogo · Iscrizione, Data e luogo, pulsante "Iscriviti"

---
## Slide 5 – Il nostro esempio

- Un pulsante "***Iscriviti***" deve restare individuabile quando la finestra si restringe, il titolo dell'evento occupa tre righe o l'utente ingrandisce il testo

![[TW14-s005-1.png|650]]

- Finestra ampia → Più spazio disponibile
- Finestra stretta → Contenuti ridisposti
- Testo ingrandito → Testo più grande, layout adattato
- **Stessi contenuti, stessa azione principale**

>> L'idea anticipa il responsive design: il layout può cambiare (menu in colonna, titolo su più righe), ma contenuti e azione principale restano gli stessi e sempre raggiungibili. "Testo ingrandito" ricorda che l'utente può aumentare la dimensione del font dal browser: per questo le dimensioni vanno espresse in unità relative (`rem`, `em`, vedi slide 17).

---
## Slide 6 – Qualità del progetto e compromessi

- Le scelte di Web design devono soddisfare più esigenze contemporaneamente

| Esigenza | Domanda progettuale |
|---|---|
| Chiarezza | L'utente distingue le informazioni principali da quelle secondarie? |
| Coerenza | Elementi con lo stesso ruolo hanno una presentazione riconoscibile? |
| Accessibilità | Le persone possono percepire i contenuti e utilizzare le funzionalità? |
| Adattabilità | La pagina funziona con spazi e contenuti differenti? |
| Prestazioni | Le risorse necessarie sono proporzionate al beneficio che offrono? |

>> Queste esigenze spesso sono in conflitto (da qui "compromessi"): un'immagine enorme o tre web font migliorano l'identità visiva ma peggiorano le prestazioni; un layout molto denso mostra tutto subito ma riduce la chiarezza. La slide successiva ne è un esempio concreto.

---
## Slide 7 – Il nostro esempio

- Un'immagine di apertura molto grande può comunicare l'identità dell'evento, ma richiede tempo per essere scaricata e può spostare programma e iscrizione fuori dall'area inizialmente visibile.
- ***Domanda***: quali informazioni vorreste vedere per prime se doveste decidere se partecipare?

![[TW14-s007-1.png|600]]

- **Stessi contenuti, priorità diverse**
	- Impatto visivo: la foto occupa la parte alta, titolo, data e "Iscriviti" finiscono sotto il limite della schermata iniziale → La fotografia guida l'attenzione
	- Informazioni e iscrizione: titolo "Design per il Web", 18 novembre · ore 14:00, Campus universitario e "Iscriviti" in alto, foto sotto → I dettagli e l'azione guidano l'attenzione
- La scelta dipende dagli obiettivi della pagina

>> Il "limite della schermata iniziale" è la parte di pagina visibile senza scorrere (in gergo *above the fold*). Mettere le informazioni decisive (cosa, quando, dove, come iscriversi) sopra questo limite aiuta chi deve decidere in fretta. La foto non è sbagliata: cambia la priorità.

---
## Slide 8 – Un sito evolve nel tempo

- Un sito cambia con i contenuti, le funzionalità e le esigenze delle persone che lo utilizzano
- Il progetto va verificato con contenuti realistici e condizioni d'uso differenti. Le osservazioni raccolte permettono di correggere le scelte e migliorare le versioni successive
- Oggi vediamo come costruire la presentazione della pagina e adattarla alle diverse condizioni
- Nelle prossime lezioni approfondiremo l'accessibilità e il modo in cui gli utenti comprendono e utilizzano l'interfaccia

![[TW14-s008-1.png|350]]

- "WEBSITE IS DONE!" – "FALSE. A WEBSITE IS NEVER "DONE.""

---
## Slide 9 – La tipografia nel Web

- La tipografia riguarda la scelta dei caratteri e l'organizzazione visiva del testo
- In una pagina Web contribuisce a:
	- rendere leggibili i contenuti
	- distinguere titoli, testo corrente e informazioni secondarie
	- comunicare relazioni e priorità
	- dare coerenza e identità al sito
- La ***leggibilità*** dipende dall'interazione fra font, dimensioni, lunghezza delle righe e spaziatura, oltre che dalle condizioni di visualizzazione

![[TW14-s009-1.png|550]]

- Testo uniforme: stesse dimensioni e peso per titolo, descrizione, "Quando" e "Dove"
- Gerarchia tipografica: titolo "Web Design Day" grande e in grassetto, etichette "Quando:" e "Dove:" in grassetto colorato

>> Il contenuto dei due riquadri è identico: cambia solo la presentazione. Con la gerarchia tipografica l'occhio trova subito il titolo e le informazioni pratiche, senza dover leggere tutto.

---
## Slide 10 – Carattere, glifo e font

- Un ***carattere*** è un'unità astratta del testo, come una lettera, una cifra o un segno di punteggiatura
- Un ***glifo*** è una forma grafica utilizzata per rappresentare uno o più caratteri. Lo stesso carattere può apparire con forme diverse a seconda del font
- Un ***font*** contiene le forme dei glifi, le loro metriche e le informazioni necessarie alla composizione del testo
- La relazione fra caratteri e glifi non è necessariamente uno a uno: per esempio, una **legatura** può rappresentare la sequenza di caratteri "***fi***" con un unico glifo

![[TW14-s010-1.png|600]]

- Dal carattere ai glifi
	- Carattere: A, U+0041, lettera latina maiuscola A
	- Glifi in font diversi: Serif, Sans-serif, Serif a contrasto, Monospace
- Una sequenza di caratteri, un unico glifo: f + i (due caratteri) → fi (un glifo: legatura "fi")
	- *La composizione può sostituire la sequenza f + i con una legatura.*

>> Il **carattere** è ciò che c'è nel testo (in HTML/Unicode: il code point `U+0041`); il **glifo** è il disegno con cui viene mostrato; il **font** è il file che contiene i glifi e le metriche (larghezze, spaziature, regole di composizione come le legature). Cambiando font cambia l'aspetto, non il testo: copiando "fi" scritto con la legatura si ottengono comunque i due caratteri `f` e `i`.
>> Il caso opposto esiste anche: un solo carattere può richiedere più glifi, oppure un carattere accentato può essere composto da lettera + accento.

---
## Slide 11 -> 12 – Famiglie, varianti e classificazioni

- Una **famiglia tipografica** raccoglie varianti con un disegno coerente, che possono differire per peso, larghezza e inclinazione
- Possiamo classificare i font secondo caratteristiche indipendenti

| Caratteristica | Distinzione |
|---|---|
| Presenza delle grazie | Serif e sans-serif |
| Larghezza di avanzamento | Proporzionale e monospace |
| Peso | Per esempio regular e bold |
| Stile | Per esempio normale e corsivo |

- In un font monospace i glifi occupano la stessa larghezza di avanzamento. In un font proporzionale questa può variare

![[TW14-s012-1.png|600]]

- Proporzionale e monospace: "iiiii WWWWW" (in quello proporzionale le "i" sono strette e le "W" larghe) vs "i i i i WWWWW" (in quello monospace ogni glifo occupa una casella uguale)
- Serif e sans-serif: "Tipografia" con le grazie (indicate dalle frecce) e senza
- Varianti della stessa famiglia: Regular, Bold, Corsivo

>> Le **grazie** (*serif*) sono i piccoli tratti alle estremità delle aste (es. Times New Roman, Georgia); i font **sans-serif** ne sono privi (es. Arial, Helvetica). I font **monospace** (es. Courier, Consolas) si usano per il codice perché allineano i caratteri in colonna.
>> Le caratteristiche sono indipendenti: esistono font serif monospace (Courier) e sans-serif monospace (Consolas), ognuno con le sue varianti di peso e stile.
>> In CSS le corrispondenti famiglie generiche sono `serif`, `sans-serif` e `monospace` (vedi [[07 - CSS testo, colori e responsiveness]]).

---
## Slide 13 – Collegamento al CSS

- La distinzione fra famiglia e varianti corrisponde al meccanismo con cui CSS seleziona il font

**CSS**
```css
body {
  font-family: Arial, sans-serif;
  font-weight: 400;
  font-style: normal;
}
```

- In CSS:
	- `font-family` indica la famiglia da utilizzare (nell'esempio: `Arial`, con una famiglia generica `sans-serif` come alternativa)
	- `font-weight` specifica una variante: in questo esempio il peso è regolare (400)
	- `font-style` specifica un'altra variante: in questo esempio lo stile è normale, senza corsivo

>> `font-weight` accetta valori numerici da 100 a 900: `400` equivale a `normal` e `700` a `bold`. Se la famiglia non ha il peso richiesto, il browser usa quello disponibile più vicino (o lo simula, con risultati peggiori).
>> `font-style` può valere `normal`, `italic` (usa il corsivo disegnato apposta) o `oblique` (testo inclinato).

---
## Slide 14 – Criteri per scegliere un font

- La scelta parte dal ruolo del testo e dai contenuti che dovrà rappresentare
- Per il testo corrente valutiamo la leggibilità di paragrafi estesi. Per titoli ed etichette valutiamo anche riconoscibilità e ingombro nello spazio disponibile
- È utile verificare:
	- la distinzione fra caratteri simili, come I, l, 1, O e 0
	- la disponibilità di lettere accentate, simboli e lingue necessarie
	- la presenza dei pesi e degli stili richiesti
	- la resa alle dimensioni effettive della pagina
	- la licenza e le condizioni di utilizzo sul Web

![[TW14-s014-1.png|550]]

- Confrontare due font: Font serif / Font sans-serif
	- "Il laboratorio inizierà alle 10:30. Iscrizione: 15 € — disponibilità limitata."
	- "I l 1 O 0 à è é ì ò ù"
- Stesso testo · stessa dimensione CSS · stessa larghezza del contenitore
- **Quali differenze notate nelle forme e nello spazio occupato?**

>> A parità di `font-size`, font diversi occupano spazi diversi: la dimensione CSS fissa l'altezza del "corpo" del font, non la larghezza dei glifi né l'altezza delle minuscole (*x-height*). In molti sans-serif `I` maiuscola e `l` minuscola sono quasi identiche: un problema per codici, password o targhe.

---
## Slide 15 – Il tono della tipografia

- La forma dei caratteri contribuisce a comunicare un tono, evocando emozioni e associazioni che accompagnano il significato delle parole
- Un font può suggerire formalità, familiarità, eleganza o tensione. Queste impressioni dipendono anche dal contesto, dalle convenzioni culturali e dagli altri elementi visivi della pagina
- La scelta tipografica deve quindi essere coerente con il messaggio, il pubblico e la funzione del contenuto

**Che cosa cambia nella vostra interpretazione di questa frase?**

![[TW14-s015-1.png|300]]

- "I will always find you" scritto in corsivo calligrafico con un cuore (tono romantico) e in lettere "insanguinate" su carta strappata (tono minaccioso)

---
## Slide 16 – Abbinamenti e gerarchia tipografica

- Quando abbiniamo più font, dobbiamo considerare anche se i loro toni sono coerenti con il messaggio della pagina
- Una sola famiglia può costruire una gerarchia chiara attraverso dimensioni, pesi e spaziatura
- Quando usiamo più famiglie, assegniamo loro ruoli coerenti: per esempio, una per i titoli e una per il testo corrente
- L'abbinamento deve:
	- rendere distinguibili i ruoli
	- mantenere leggibili i contenuti
	- funzionare nelle diverse dimensioni previste

![[TW14-s016-1.png|550]]

- Proposta A: Una famiglia sans-serif, Titoli in bold, Testo in regular
- Proposta B: Serif per i titoli, Sans-serif per il testo, Pesi coerenti nei rispettivi ruoli

>> Regola pratica: due famiglie al massimo (spesso ne basta una). Ogni famiglia in più è un ruolo da mantenere coerente e, se è un web font, una risorsa in più da scaricare.

---
## Slide 17 – Dimensioni e unità CSS

- La ***gerarchia visiva*** deve accompagnare la ***struttura HTML***: un titolo conserva il suo ruolo semantico anche se ne cambiamo la presentazione con CSS
- Le dimensioni tipografiche devono mantenere una gerarchia coerente e adattarsi alle preferenze dell'utente
	- `rem`: relativo alla dimensione del font dell'elemento radice
	- `em`: nella proprietà font-size, relativo alla dimensione ereditata dal genitore
	- `px`: pixel CSS, che non coincide necessariamente con un singolo pixel fisico dello schermo

**CSS**
```css
html {
  font-size: 100%; }
body {
  font-size: 1rem; }
h1 {
  font-size: 2rem; }
.dettagli {
  font-size: 0.875rem;}
```

![[TW14-s017-1.png|550]]

| | Base: 16 px (`html { font-size: 16px; }`) | Base: 20 px (`html { font-size: 20px; }`) |
|---|---|---|
| Titolo | 2rem = 32px | 2rem = 40px |
| Testo del paragrafo | 1rem = 16px | 1rem = 20px |
| Informazione di dettaglio | 0.875rem = 14px | 0.875rem = 17.5px |

- **Cambia la dimensione di base, si adatta tutta la scala.**
	- rem è relativo alla dimensione del font dell'elemento radice (html).

>> I calcoli tornano: $0{,}875 \times 16 = 14$ px e $0{,}875 \times 20 = 17{,}5$ px.
>> `html { font-size: 100%; }` significa "usa la dimensione scelta dall'utente nel browser" (di solito 16px). È meglio di `html { font-size: 16px; }` mostrato nella figura solo a scopo illustrativo: un valore in `px` sulla radice ignorerebbe la preferenza dell'utente, mentre con `100%` + `rem` chi imposta 20px nel browser ottiene esattamente la scala di destra.
>> Differenza `rem`/`em`: `rem` si riferisce sempre alla radice, quindi non si accumula; `em` in `font-size` si moltiplica a ogni annidamento (un `1.2em` dentro un `1.2em` dà $1{,}44\times$ il font del nonno). Nelle altre proprietà (padding, margin) `1em` è il font-size dell'elemento stesso.
>> Un "pixel CSS" è un'unità di riferimento: su uno schermo ad alta densità (es. `devicePixelRatio` = 2) 1px CSS corrisponde a 2×2 pixel fisici. Vedi anche [[07 - CSS testo, colori e responsiveness]]; in [[Lab 02 - Tailwind CSS]] le classi `text-sm`, `text-base`, `text-4xl` sono proprio una scala in `rem` (0.875rem, 1rem, 2.25rem).

---
## Slide 18 -> 19 – Interlinea, lunghezza delle righe e spazi bianchi

- Il testo deve permettere al lettore di seguire le righe e riconoscere i gruppi di informazioni
	- L'**interlinea** separa le righe dello stesso blocco
	- La **larghezza del testo** determina quanto sono lunghe le righe
	- Lo **spazio fra paragrafi** rende riconoscibili blocchi e passaggi del discorso
- Questi valori vanno valutati insieme, in relazione al font e alla dimensione del testo

**CSS**
```css
.descrizione {
  max-inline-size: 65ch;
  font-size: 1rem;
  line-height: 1.5; }
.descrizione p {
  margin-block: 0 1em; }
```

***`ch` è un'unità basata sulla larghezza di avanzamento del glifo "0" del font: `65ch` non garantisce righe di esattamente 65 caratteri***

***Il valore senza unità di `line-height` permette di mantenere una proporzione con la dimensione del testo***

![[TW14-s019-1.png|600]]

- Interlinea: Righe troppo ravvicinate vs Interlinea equilibrata
- Spazi bianchi: Contenuto compresso vs Spaziatura equilibrata
- **Stesso testo e stesso font: cambia l'organizzazione dello spazio.**

>> Righe troppo lunghe fanno perdere l'inizio della riga successiva, righe troppo corte spezzano continuamente la lettura: la misura consigliata è di circa **45–75 caratteri** per riga, da qui `65ch`. Poiché i caratteri reali hanno larghezze diverse dallo "0", il numero effettivo di caratteri per riga varia.
>> `max-inline-size` è la versione "logica" di `max-width`: in scrittura orizzontale coincide con la larghezza massima. Allo stesso modo `margin-block: 0 1em` imposta margine superiore 0 e inferiore 1em (qui $1\text{em} = 16$px, il font-size del paragrafo).
>> Perché `line-height: 1.5` e non `1.5em`: il valore senza unità viene ereditato come **fattore**, ricalcolato su ogni elemento figlio; `1.5em` viene invece ereditato come valore già calcolato in px (es. 24px), troppo stretto per un titolo figlio a 32px. Per il testo corrente si usano tipicamente valori fra 1.4 e 1.6.

---
## Slide 20 – Disponibilità dei font e fallback

- Il font scelto potrebbe non essere installato sul dispositivo dell'utente. Con `font-family` definiamo una sequenza di alternative

**CSS**
```css
body {
  font-family: "Source Sans 3", Arial, sans-serif; }
```

- Il browser cerca un font disponibile che possa rappresentare i caratteri necessari. Nella stessa pagina può quindi utilizzare font differenti anche per singoli caratteri
- Un ***web font*** viene fornito come risorsa del sito. Il suo caricamento richiede tempo e può modificare l'aspetto e l'ingombro del testo

>> La lista si legge da sinistra a destra: prima "Source Sans 3", se manca Arial, altrimenti il sans-serif predefinito del sistema. L'ultima voce dovrebbe sempre essere una **famiglia generica** (`serif`, `sans-serif`, `monospace`…), che esiste sempre.
>> Le virgolette servono per i nomi con spazi e sono obbligatorie qui perché "3" inizia con una cifra; le famiglie generiche invece non vanno mai tra virgolette (`"sans-serif"` cercherebbe un font chiamato così).
>> Il fallback avviene **per carattere**: se il font scelto non ha un glifo (es. un'emoji o un carattere cinese), il browser lo prende dal font successivo che lo possiede.

---
## Slide 21 – Esempio

**CSS**
```css
@font-face {
  font-family: "FontEvento";
  src: url("fonts/evento-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap; }
```

***Con `swap`, il browser usa un font di fallback dopo un brevissimo periodo iniziale e lo sostituisce quando il web font è disponibile. La sostituzione può cambiare gli a capo e spostare i contenuti***

![[TW14-s021-1.png|600]]

- Font di fallback: "Progettare esperienze per il Web" su 2 righe → Caricamento del font → Web font caricato: lo stesso titolo su 3 righe, il contenuto si sposta
- **Stesso contenuto e stessa larghezza: cambiano le metriche del font.**

>> `@font-face` *dichiara* un web font (nome, file, variante a cui corrisponde), ma non lo applica: per usarlo serve `font-family: "FontEvento", Arial, sans-serif;` su un selettore, sempre con fallback. Il file viene scaricato solo se qualche elemento lo usa davvero. WOFF2 è il formato compresso raccomandato per il Web.
>> Valori principali di `font-display`: `block` (testo invisibile fino a ~3 s in attesa del font, poi fallback), `swap` (testo subito visibile col fallback, sostituito appena il font arriva), `fallback` e `optional` (se il font non arriva in fretta si tiene il fallback). Con `swap` il testo è leggibile subito, ma lo spostamento dei contenuti mostrato in figura peggiora la stabilità del layout: per ridurlo conviene scegliere un fallback con metriche simili.

---
## Slide 22 – Strumenti e verifica sulla pagina

- Gli strumenti aiutano a esplorare alternative. La scelta va poi verificata con i contenuti e nelle condizioni del sito
	- ***Google Fonts***: ricerca e confronto delle famiglie
	- ***Fontpair***: proposte di abbinamento
	- ***DevTools*** del browser: ispezione degli stili e dei font effettivamente utilizzati
- Nella pagina dell'evento controlliamo che:
	- titoli, descrizioni e dettagli abbiano ruoli riconoscibili
	- accenti e simboli siano rappresentati correttamente
	- titoli lunghi e testo ingrandito trovino spazio
	- il contenuto rimanga utilizzabile con il font di fallback

![[TW14-s022-1.png|600]]

- Gerarchia: Titoli, informazioni e azioni hanno priorità riconoscibili
- Leggibilità: Testo chiaro, righe contenute e spaziatura adeguata
- Adattamento: La pagina si riorganizza quando cambiano spazio e dimensioni del testo (Spazio ridotto, Testo ingrandito)

>> Nei DevTools di Chrome/Firefox, selezionando un elemento, la scheda "Computed" (Chrome) o "Fonts" (Firefox) mostra il font **effettivamente** usato per il rendering ("Rendered Fonts"), che può essere diverso dal primo della lista `font-family` se il web font non è stato caricato.

---
## Slide 23 – Prima domanda

**BONUS**

**DOMANDA 1:**
Per il sito di un evento universitario è stato scelto un font decorativo che richiama efficacemente il tema dell'iniziativa, ma rende faticosa la lettura dei paragrafi. Quale scelta concilia meglio identità visiva e leggibilità?

- [ ] Utilizzare il font decorativo per tutti i testi, aumentando la dimensione dei paragrafi per compensarne la difficoltà di lettura
- [ ] Utilizzare il font decorativo per brevi titoli, dopo averne verificato la leggibilità, e una famiglia adatta alla lettura prolungata per i paragrafi
- [ ] Sostituire il font decorativo con un font serif in tutta la pagina, perché la presenza delle grazie garantisce la leggibilità sullo schermo
- [ ] Utilizzare un font diverso per ogni sezione, così da rendere immediatamente riconoscibile l'argomento di ciascun paragrafo

>> **Risposta corretta: la seconda.** Si assegnano ruoli diversi alle famiglie (slide 16): il font decorativo conserva l'identità nei titoli brevi, dove la fatica di lettura è minima, mentre i paragrafi usano un font pensato per la lettura prolungata.
>> La prima non risolve: ingrandire un font poco leggibile non lo rende adatto a paragrafi lunghi e aumenta l'ingombro. La terza sbaglia due volte: perde l'identità visiva e le grazie non "garantiscono" la leggibilità (dipende da font, dimensione, interlinea, schermo: slide 9). La quarta rompe la coerenza: troppi font rendono i ruoli irriconoscibili.

---
## Slide 24 -> 25 – Il colore nell'interfaccia

- Il colore contribuisce a costruire l'identità visiva del sito e a organizzare le informazioni
- Nell'interfaccia può:
	- evidenziare azioni e contenuti prioritari
	- distinguere elementi e gruppi
	- comunicare stati, come errore, selezione o completamento
	- creare continuità fra pagine e componenti
- La scelta va valutata considerando il ruolo del colore e la sua relazione con gli elementi circostanti

![[TW14-s025-1.png|650]]

- A: barra blu, "Evento universitario" viola, titolo "Progettare il Web" arancione, riquadri "Quando" verde acqua e "Dove" viola, pulsante "Iscriviti all'evento" rosso, "Il programma" fucsia, righe del programma gialla, azzurra e rosa
- B: stessi contenuti con un solo colore d'accento bordeaux (barra, titolo, pulsante "Iscriviti all'evento") e toni neutri/rosati per il resto

>> In A ogni elemento ha un colore diverso e saturo: tutto "grida" allo stesso modo, quindi il colore non comunica più priorità né ruoli e il pulsante di iscrizione non spicca. In B il colore d'accento è usato con parsimonia e legato a un ruolo (identità e azione principale), così l'occhio va subito al pulsante "Iscriviti all'evento". Il colore funziona per **contrasto con ciò che lo circonda**, non in assoluto.
---
## Slide 26 -> 27 – RGB e rappresentazione dei colori

- Nel modello RGB, un colore è descritto mediante componenti di **rosso**, **verde** e **blu**
- La ***sintesi è additiva***: la combinazione delle componenti luminose produce il colore risultante
- Nella rappresentazione **RGB** a 8 bit per componente, ogni valore intero varia da 0 a 255

| Colore | RGB | Esadecimale |
|---|---|---|
| Nero | `rgb(0, 0, 0)` | `#000000` |
| Bianco | `rgb(255, 255, 255)` | `#FFFFFF` |
| Rosso | `rgb(255, 0, 0)` | `#FF0000` |
| Bordeaux dell'esempio | `rgb(128, 0, 32)` | `#800020` |

>> Sintesi **additiva**: si parte dal nero (nessuna luce) e si aggiunge luce; tutte le componenti al massimo danno il bianco. È il modello degli schermi, che emettono luce. La sintesi **sottrattiva** (CMY/CMYK, stampa) parte invece dal bianco della carta e gli inchiostri tolgono luce.
>> 8 bit per componente danno $2^8 = 256$ livelli (0–255), quindi $256^3 = 2^{24}$ colori in totale.

- Nella notazione **#RRGGBB**, ogni coppia di cifre esadecimali rappresenta una componente (**RR** rappresenta la quantità di rosso, **GG** la quantità di verde, **BB** la quantità di blu)

![[TW14-s027-1.png|500]]

- Dal codice esadecimale al colore: `#80 00 20`
	- R · ROSSO: $80_{16} = 128_{10}$ → R: 128
	- G · VERDE: $00_{16} = 0_{10}$ → G: 0
	- B · BLU: $20_{16} = 32_{10}$ → B: 32
	- → Bordeaux `rgb(128, 0, 32)`
- Ogni coppia esadecimale rappresenta una componente RGB.

>> Conversione: $80_{16} = 8 \cdot 16 + 0 = 128$, $20_{16} = 2 \cdot 16 + 0 = 32$. Ogni cifra esadecimale vale 4 bit, quindi due cifre = 1 byte = 0–255 ($FF_{16} = 255$).
>> In CSS esistono anche la forma breve `#RGB` (ogni cifra viene raddoppiata: `#F00` = `#FF0000`) e le forme con trasparenza `#RRGGBBAA` / `rgb(128 0 32 / 50%)`. Le cifre esadecimali non distinguono maiuscole e minuscole. Vedi [[07 - CSS testo, colori e responsiveness]].

---
## Slide 28 – La codifica RGB: pixel e subpixel

- Un pixel, tre componenti luminose: i subpixel rossi, verdi e blu contribuiscono a produrre il colore percepito
- In RGB, ogni terna è la codifica numerica di tre colori primari, detti componenti RGB del colore
- Sulla base di questo effetto, monitor e televisori producono il colore di ogni singolo punto dello schermo, sfruttando la mescolanza additiva in media spaziale di tre emettitori monocromatici contigui, uno per il **rosso**, uno per il **verde** e uno per il **blu**

![[TW14-s028-1.png|250]]

>> "Media spaziale": i subpixel sono così piccoli e vicini che, alla normale distanza di visione, l'occhio non riesce a risolverli separatamente e ne percepisce solo la somma, cioè un unico colore. Avvicinando una lente allo schermo si vedono invece le singole strisce R, G, B, come nella foto.

---
## Slide 29 -> 30 – Percezione umana del colore

- Nella visione diurna, la percezione del colore dipende da tre tipi di coni, sensibili prevalentemente a lunghezze d'onda:
	- corte (**S**)
	- medie (**M**)
	- Lunghe (**L**)

![[TW14-s029-1.png|600]]

- Tre tipi di coni, sensibilità sovrapposte (S · lunghezze d'onda corte, M · medie, L · lunghe; asse x: lunghezza d'onda in nm, 400–750; asse y: sensibilità relativa)
- Il colore deriva dal confronto delle risposte dei tre tipi di coni.
- *Schema qualitativo: curve indicative, normalizzate separatamente; non dati sperimentali.*

- Le sensibilità si sovrappongono: il sistema visivo ricava il colore confrontando le risposte dei diversi tipi di coni
- La **natura tricromatica della visione umana** permette di riprodurre molte sensazioni cromatiche combinando opportunamente tre primari luminosi, come rosso, verde e blu
- Il monitor emette luce attraverso i suoi primari RGB; l'occhio risponde a quella luce attraverso i coni. Le componenti RGB del monitor e le risposte dei coni sono grandezze differenti

![[TW14-s030-1.png|600]]

- Dal monitor alla percezione del colore
	- Primari del monitor: R · G · B → luce emessa → retina
	- Risposte dei coni: S · M · L (sensibilità ampie e sovrapposte)
- Componenti RGB e risposte dei coni sono grandezze differenti.

>> Le curve hanno picchi indicativi intorno a ~445 nm (S), ~535 nm (M) e ~565 nm (L): i coni "rossi" (L) in realtà hanno il picco nel giallo-verde, ed è proprio la forte sovrapposizione fra M e L a rendere possibile la distinzione rosso/verde tramite il loro confronto.
>> Il tricromatismo spiega perché bastano tre primari: due luci con spettri diversi ma che producono le stesse tre risposte S, M, L appaiono identiche (metameria). Lo schermo non riproduce lo spettro dell'oggetto, solo una luce che "inganna" i coni allo stesso modo.
>> Il valore RGB è un comando al dispositivo, non una misura di ciò che l'occhio percepisce: per questo uguali differenze numeriche non corrispondono a uguali differenze percepite.

---
## Slide 31 – Quanto occupa un'immagine raster?

- Un'immagine raster rappresenta il contenuto mediante una griglia di punti (pixel)
- Con una rappresentazione RGB a 8 bit per componente, ogni pixel richiede:

***8 bit R + 8 bit G + 8 bit B = 24 bit = 3 Byte***

![[TW14-s031-1.png|500]]

- Griglia di pixel → 1 pixel RGB: R, G, B da 8 bit (1 byte) ciascuno; 24 bit = 3 byte

- Per un'immagine di 1920 × 1080 pixel, i soli dati dei pixel richiedono:

***1920 X 1080 X 3 = 6,220,800 byte***

ovvero circa 6,22 MB, senza compressione e senza considerare metadati o altre informazioni

>> Verifica: $1920 \times 1080 = 2\,073\,600$ pixel, $\times 3 = 6\,220\,800$ byte. La virgola in "6,220,800" è il separatore delle migliaia all'inglese (in italiano 6.220.800).
>> "6,22 MB" usa i megabyte decimali ($10^6$ byte); in mebibyte ($2^{20}$ byte) sono circa 5,93 MiB. Per un video a 30 fotogrammi al secondo sarebbero circa 187 MB/s non compressi: ecco perché la compressione è indispensabile.

---
## Slide 32 – Compressione

- La compressione riduce lo spazio di memorizzazione e la quantità di dati da trasferire:
	- senza perdita (***lossless***): permette di ricostruire esattamente i dati originali
	- con perdita (***lossy***): elimina parte dell'informazione per ottenere una rappresentazione più compatta

![[TW14-s032-1.png|600]]

- Immagine originale
	- Compressione lossless (meno dati da memorizzare) → Decompressione → Identica all'originale: tutta l'informazione viene recuperata
	- Compressione lossy (parte dell'informazione viene eliminata) → Decompressione → Ricostruzione con perdita: l'informazione eliminata non si recupera
- *Perdita di qualità accentuata a scopo illustrativvo.*

>> Formati tipici sul Web: lossless → PNG, GIF, WebP lossless (adatti a loghi, icone, screenshot, testo); lossy → JPEG, WebP, AVIF (adatti alle fotografie). Per la grafica vettoriale si usa SVG, che non è raster.
>> La perdita è cumulativa: riaprire e risalvare più volte un JPEG peggiora ogni volta la qualità. Il refuso "illustrativvo" è nella slide.

---
## Slide 33 – Compressione e sensibilità visiva

- Il sistema visivo umano distingue generalmente dettagli spaziali più fini nelle variazioni di luminanza che nelle variazioni di colore
- Rappresentazioni come **Y′CbCr**, usata comunemente nella compressione **JPEG**, separano:
	- **Y′**: componente di ***luma***, legata all'informazione di chiaro-scuro
	- **Cb** e **Cr**: componenti di differenza cromatica
- Questa separazione permette di rappresentare le componenti cromatiche con meno campioni rispetto alla luma: è il ***sottocampionamento cromatico***
- La perdita di dettaglio cromatico può risultare meno evidente, soprattutto nelle fotografie

>> Y′ è circa una somma pesata delle componenti (per JPEG/BT.601: $Y' = 0{,}299R' + 0{,}587G' + 0{,}114B'$, il verde pesa di più perché l'occhio è più sensibile a esso); Cb ≈ B′ − Y′ e Cr ≈ R′ − Y′, opportunamente scalate. L'apice indica che si lavora su valori con correzione gamma, per questo si dice *luma* e non luminanza.
>> Schema semplificato di JPEG: RGB → Y′CbCr → sottocampionamento di Cb e Cr → trasformata DCT a blocchi 8×8 → quantizzazione (il passo davvero lossy) → codifica entropica (lossless).

---
## Slide 34 -> 35 – Sottocampionamento

![[TW14-s034-1.png|650]]

- **Sottocampionamento 4:2:0**: la stessa area di 2 × 2 pixel, rappresentata nelle tre componenti
	- Luma Y′ (Y′₁, Y′₂, Y′₃, Y′₄): 4 campioni, uno per pixel
	- Crominanza Cb: 1 campione, uno per il blocco
	- Crominanza Cr: 1 campione, uno per il blocco

| Su 4 pixel | Y′ | Cb | Cr | Totale |
|---|---|---|---|---|
| 4:4:4 | 4 | 4 | 4 | 12 campioni |
| **4:2:0** | **4** | **1** | **1** | **6 campioni** |

- Stesso dettaglio di luma · Meno dettaglio cromatico
- A parità di bit per campione: metà dei dati, prima delle ulteriori operazioni di compressione.

- Il confronto riguarda i campioni prima delle ulteriori operazioni di compressione, non la dimensione finale del file JPEG
- La trasformazione da RGB a Y′CbCr non riduce necessariamente i dati. Il risparmio dell'esempio nasce dal sottocampionamento: conserviamo più campioni di luma rispetto a quelli cromatici
- Y′CbCr e YUV (rappresentazione cromatica affine, nata per il video analogico): i nomi vengono spesso usati in modo intercambiabile, ma indicano di fatto rappresentazioni differenti
- Il sottocampionamento può essere adatto alle fotografie, mentre sui bordi di testo e grafica colorata può produrre artefatti visibili

>> Verifica: 4:4:4 → 4 + 4 + 4 = 12 campioni; 4:2:0 → 4 + 1 + 1 = 6 campioni, cioè il 50%. Con 8 bit per campione si passa da 24 a 12 bit per pixel in media.
>> La notazione J:a:b si riferisce a un blocco largo J pixel (di solito 4) e alto 2 righe: *a* = campioni di crominanza nella prima riga, *b* = campioni aggiuntivi nella seconda. In 4:2:0 ci sono 2 campioni cromatici nella prima riga e 0 nuovi nella seconda, quindi la crominanza è dimezzata sia in orizzontale sia in verticale (1 campione Cb e 1 Cr per ogni 2×2). Esiste anche 4:2:2 (dimezzata solo in orizzontale, 8 campioni su 4 pixel).
>> Conseguenza pratica: screenshot con testo colorato, loghi e icone conviene salvarli in PNG (niente sottocampionamento), non in JPEG, altrimenti compaiono aloni di colore sui bordi.

---
## Slide 36 – Percezione dei colori

- La visione umana permette di distinguere milioni di colori; il numero stimato dipende dalle condizioni di osservazione e dal criterio adottato
- Una codifica RGB a 8 bit per componente rappresenta **16.777.216 combinazioni numeriche**. Non tutte corrispondono a differenze percepibili, ma questo non garantisce che lo spazio colore utilizzato copra tutti i colori visibili
- *Distinguere due colori non significa necessariamente conoscere due nomi diversi per indicarli!*

![[TW14-s036-1.png|400]]

- La donna della vignetta indica una lunga lista di nomi (Maraschino, Cayenne, Maroon, Plum, Eggplant, Grape, Orchid, Lavender, Carnation, Strawberry, Bubblegum, Magenta, Salmon, Tangerine, Cantaloupe, Banana, Lemon, Honeydew, Lime, Spring, Clover, Fern, Moss, Flora, Seam Foam, Spindrift, Teal, Sky, Turquoise), lui solo sette (Red, Purple, Pink, Orange, Yellow, Green, Blue)

>> $16.777.216 = 2^{24} = 256^3$. Sono due limiti diversi: (1) molte terne vicine (es. `#800020` e `#800021`) sono indistinguibili a occhio; (2) lo spazio sRGB, usato di default sul Web, copre solo una parte dei colori visibili (il suo *gamut*), quindi alcuni colori percepibili non sono rappresentabili, per quanti codici si abbiano.

---
## Slide 37 -> 38 – Tonalità, saturazione e luminosità

- Per esplorare variazioni di colore è utile distinguere:
	- ***Tonalità (hue)***: identifica la posizione sul cerchio cromatico
	- ***Saturazione***: descrive quanto il colore si discosta da un grigio
	- ***Luminosità HSL (lightness)***: varia dal nero al bianco, passando attraverso il colore
- CSS permette di esprimere i colori anche con `hsl()`:

**CSS**
```css
.titolo {
  color: hsl(345 100% 25%);
}
```

>> `hsl(H S L)`: H è un angolo in gradi sul cerchio cromatico (0 = rosso, 120 = verde, 240 = blu), S e L in percentuale. L = 0% è sempre nero, L = 100% sempre bianco, L = 50% il colore "pieno".
>> Verifica: `hsl(345 100% 25%)` = `rgb(128, 0, 32)` = `#800020`, cioè proprio il bordeaux dell'esempio. La sintassi con spazi è quella moderna; è valida anche quella storica con virgole, `hsl(345, 100%, 25%)`. Vedi [[07 - CSS testo, colori e responsiveness]].

- In **HSL**, tonalità, saturazione e luminosità permettono di modificare separatamente questi parametri
- La luminosità HSL non coincide con la luminanza usata per calcolare il contrasto

![[TW14-s038-1.png|600]]

- **TONALITÀ (H)**: cambiano le tonalità; saturazione e luminosità restano costanti.
- **SATURAZIONE (S)**: stessa tonalità e luminosità; saturazione crescente (0% → 100%).
- **LUMINOSITÀ HSL (L)**: stessa tonalità e saturazione; luminosità crescente (0% · nero → 100% · bianco).
- La luminosità HSL non coincide con la luminanza percettiva.

>> Il vantaggio pratico di HSL: per creare varianti di un colore (hover, sfondi chiari, bordi) basta cambiare L o S tenendo fissa H, es. `hsl(345 100% 25%)` → `hsl(345 100% 35%)` per un hover più chiaro.
>> Esempio del tranello: giallo `hsl(60 100% 50%)` e blu `hsl(240 100% 50%)` hanno la stessa L = 50%, ma luminanza relativa ~0,93 e ~0,07: su sfondo bianco il giallo ha contrasto 1,07:1 (illeggibile), il blu 8,59:1. Il contrasto va sempre misurato, non dedotto da L.

---
## Slide 39 – Schemi di abbinamento cromatico

- Il ***cerchio cromatico*** aiuta a esplorare relazioni fra tonalità

| Schema | Relazione |
|---|---|
| Monocromatico | Una tonalità con variazioni di saturazione e luminosità |
| Analogo | Tonalità vicine sul cerchio |
| Complementare | Tonalità opposte sul cerchio |
| Triadico | Tre tonalità equidistanti sul cerchio |

![[TW14-s039-1.png|250]]

- Questi schemi forniscono **punti di partenza**. La palette va poi verificata nell'interfaccia
- Le relazioni dipendono dal modello cromatico adottato: occorre usare una ruota coerente con lo strumento e con gli esempi

>> In termini di tonalità HSL: analoghi ≈ H ± 30°, complementare = H + 180°, triadico = H, H + 120°, H + 240°.
>> Perché serve una ruota coerente: nella ruota tradizionale dei pittori (RYB: rosso, giallo, blu) il complementare del blu è l'arancione e quello del rosso è il verde; nella ruota RGB/HSL usata da CSS e dagli strumenti digitali il complementare del blu è il giallo e quello del rosso è il ciano.

---
## Slide 40 – Cerchio cromatico

- Il ***cerchio cromatico*** (o ***color wheel***) è formato da 12 colori:
	- **3 primari di sintesi additiva**, rosso, verde e blu
	- **3 secondari** (primari di sintesi sottrattiva), ciano, magenta e giallo
	- **6 colori terziari** posti tra ogni primario e il successive secondario
- Su questa ruota possiamo identificare:
	- colori **vicini** (**analoghi**) come per esempio giallo e arancione e
	- colori **opposti** (**complementari**), come per esempio blu e giallo

![[TW14-s040-1.png|130]]![[TW14-s040-2.png|250]]

>> Su questa ruota RGB ogni secondario è la somma di due primari (rosso + verde = giallo, verde + blu = ciano, blu + rosso = magenta) e sta di fronte al primario mancante: rosso ↔ ciano, verde ↔ magenta, blu ↔ giallo. I terziari sono arancione, verde-giallo (chartreuse), verde primavera, azzurro, violetto e rosa. In HSL i 12 colori sono a passi di 30° di tonalità.
>> "successive" è un refuso per "successivo".

---
## Slide 41 – Schema di colore

- Lo schema di colore definito sul **cerchio cromatico**) e può essere:
	- **Monocromatico**: fissata la tonalità si variano saturazione e luminosità
	- Con colori **analoghi**: prese due tonalità analoghe (vicine), si scelgono colori tra le due
	- Con colori **complementari**: si fissano due tonalità opposte
	- Con colori **complementare triadico**: si fissano tre colori equidistanti tra di loro sul cerchio cromatico, 120°

![[TW14-s041-1.png|350]]

>> Lo schema triadico di solito si chiama semplicemente "triadico", come nella tabella della slide 39: le tre tonalità sono a 120° l'una dall'altra e nessuna coppia è complementare (che richiede 180°). Da non confondere con il "complementare diviso" (*split complementary*): una tonalità più le due vicine al suo complementare (H, H + 150°, H + 210°).
>> Lo schema monocromatico è il più sicuro per l'armonia, ma da solo rende difficile distinguere i ruoli: di solito si aggiunge almeno un colore di accento per le azioni principali.

---
## Slide 42 – Colore: significato e contesto

- I colori possono evocare associazioni e aspettative, influenzate da cultura, esperienza e contesto
- Nelle interfacce, alcune convenzioni sono frequenti: per esempio, il rosso può segnalare un errore oppure un'azione distruttiva
- Lo stesso colore può però svolgere altri ruoli, come identificare un marchio o evidenziare un'azione principale

![[TW14-s042-1.png|600]]

- Tre usi dello stesso rosso: marchio ("EVENTO"), errore ("Iscrizione non riuscita"), azione distruttiva (pulsante "Elimina iscrizione")

- La progettazione deve mantenere coerente il significato dei colori all'interno del sito

>> Il problema nasce quando lo stesso colore ha più significati nella stessa pagina: se il marchio è rosso e anche gli errori sono rossi, l'utente non capisce subito se un elemento rosso segnala un problema. Le soluzioni sono differenziare le tonalità (es. bordeaux per il marchio, rosso vivo per gli errori) e accompagnare sempre gli stati con icone e testo (vedi slide 50).

---
## Slide 43 – Dalla palette ai ruoli dell'interfaccia

- Una palette diventa utilizzabile quando assegniamo ai colori ruoli precisi

| Ruolo | Esempio nella pagina dell'evento |
|---|---|
| Sfondo | Area generale della pagina |
| Superficie | Sezione con informazioni pratiche |
| Testo | Titoli e contenuti |
| Azione principale | Pulsante di iscrizione |
| Stato | Conferma o errore nell'invio |

- Un colore può avere varianti per condizioni diverse, come passaggio del puntatore, focus o selezione
- Ogni variante deve mantenere riconoscibili il componente e il suo stato

>> È l'idea dei **design token** semantici: invece di ragionare per "rosa" o "#800020", si ragiona per "colore dell'azione principale", "colore della superficie". Il valore concreto può cambiare (rebranding, tema scuro) senza toccare i componenti. Tailwind fa lo stesso con i colori definiti nel tema: vedi [[Lab 02 - Tailwind CSS]].
>> Le varianti corrispondono in CSS alle pseudo-classi `:hover`, `:focus-visible`, `:active`, `:disabled`, ecc. Anche le varianti devono rispettare il contrasto.

---
## Slide 44 – Dal colore al ruolo

![[TW14-s044-1.png|650]]

- Una palette prende significato nel suo impiego nell'interfaccia
	1. Bordeaux · identità e azione: intestazione, titolo e pulsante di iscrizione.
	2. Rosa chiaro · informazioni di supporto: raggruppa data e luogo senza competere con il pulsante.
	3. Grigio scuro · testi: contenuti e gerarchia tipografica.
	4. Grigio chiaro · superfici secondarie: organizza le righe del programma.
	5. Bianco · sfondo: separa i contenuti e lascia spazio visivo.
- Definisci prima il ruolo, poi scegli e verifica il colore.

>> Notare la proporzione: il colore forte (bordeaux) occupa poche aree ma importanti (identità e azione), mentre la maggior parte della pagina è neutra (bianco e grigi). Una regola empirica diffusa è la "60-30-10": circa 60% colore dominante neutro, 30% secondario, 10% accento.

---
## Slide 45 – Colori coerenti attraverso le custom properties

- Le ***custom properties CSS*** permettono di centralizzare i valori e assegnare nomi legati alla loro funzione

**CSS**
```css
:root {
  --color-background: #ffffff; /*5*/
  --color-surface: #fcecef; /*2*/
  --color-text: #252025; /*3*/
  --color-action: #800020; /*1*/
  --color-on-action: #ffffff;
  --color-surface-secondary: #f5f5f5; /*4*/
}
body {
  color: var(--color-text);
  background-color: var(--color-background);
}
.iscrizione {
  color: var(--color-on-action);
  background-color: var(--color-action);
}
```

![[TW14-s045-1.png|350]]

***Nomi come*** `--color-action` ***rendono esplicito il ruolo progettuale e permettono di modificare il valore senza rinominare la variabile***

>> I numeri nei commenti corrispondono ai ruoli della slide 44 (1 bordeaux, 2 rosa chiaro, 3 grigio scuro, 4 grigio chiaro, 5 bianco). `--color-on-action` è il colore del contenuto *sopra* il colore d'azione: definirlo a parte garantisce che testo e sfondo del pulsante restino una coppia verificata.
>> Le custom properties si dichiarano con `--nome`, si leggono con `var(--nome)` (anche con fallback: `var(--color-action, #800020)`), si ereditano e sono definite su `:root` per valere in tutta la pagina. Si possono ridefinire in un contesto, es. dentro `@media (prefers-color-scheme: dark) { :root { --color-background: #121212; ... } }`, per ottenere un tema scuro senza toccare le regole dei componenti. Vedi [[07 - CSS testo, colori e responsiveness]].
>> Contrasti verificati: `#252025` su `#ffffff` ≈ 16:1, su `#fcecef` ≈ 14:1, su `#f5f5f5` ≈ 14,7:1; `#ffffff` su `#800020` ≈ 10,83:1. Tutti superano 4,5:1 (e anche 7:1).

---
## Slide 46 – Contrasto tra testo e sfondo

- Il contrasto dipende dalla ***luminanza relativa*** dei colori del testo e dello sfondo
- Due colori con tonalità molto diverse possono comunque avere un contrasto insufficiente
- Per il testo, il criterio ***WCAG*** di ***livello AA*** (vedi prossima lezione su Accessibilità del Web) richiede almeno:

| Tipo di testo | Rapporto minimo |
|---|---|
| Testo normale | 4,5:1 |
| Testo grande | 3:1 |

***Per "testo grande" si intende almeno 18 pt, circa 24 CSS px, oppure 14 pt in grassetto, circa 18,7 CSS px (il criterio prevede specifiche eccezioni, per esempio per i logotipi)***

![[TW14-s046-1.png|450]]

- Stesso testo, diverso contrasto
	- Sfondo `#E8A0B0`, testo `#FFFFFF`: contrasto ≈ 2,08:1
	- Sfondo `#800020`, testo `#FFFFFF`: contrasto ≈ 10,83:1

>> Formula WCAG: rapporto $= \dfrac{L_1 + 0{,}05}{L_2 + 0{,}05}$, con $L_1$ la luminanza relativa del colore più chiaro e $L_2$ di quello più scuro; $L = 0{,}2126R + 0{,}7152G + 0{,}0722B$ calcolata sui valori linearizzati (senza gamma). Va da 1:1 (stesso colore) a 21:1 (nero su bianco).
>> Verifica: bianco ($L = 1$) su `#E8A0B0` ($L \approx 0{,}454$) → $1{,}05 / 0{,}504 \approx 2{,}08$; su `#800020` ($L \approx 0{,}047$) → $1{,}05 / 0{,}097 \approx 10{,}83$. I valori della slide tornano.
>> Conversioni: 1 pt = 4/3 px, quindi 18 pt = 24 px e 14 pt ≈ 18,67 px. Il livello AAA chiede 7:1 (normale) e 4,5:1 (grande); per componenti dell'interfaccia e grafica (bordi dei campi, icone) WCAG chiede almeno 3:1.

---
## Slide 47 – Daltonismo

- Col termine **daltonismo** si intende la cecità ai colori (**colorblindness**), ovvero l'inabilità a percepire (del tutto o in parte) i colori
- Le persone quindi possono distinguere i colori in modi differenti
- Le alterazioni della visione cromatica possono rendere difficili alcune distinzioni, in particolare fra determinate tonalità rosse e verdi

![[TW14-s047-1.png|500]]

- E' una condizione prevalentemente di origine genetica:
	- Circa l'8% della popolazione maschile è daltonico
	- Lo 0,4% della popolazione femminile è daltonico

>> Le immagini sono tavole di Ishihara: chi ha una visione normale legge il numero (es. 25, 45, 6, 8), chi ha un deficit rosso-verde può non vederlo o leggerne un altro.
>> La differenza fra maschi e femmine si spiega perché i geni dei pigmenti L e M sono sul cromosoma X: ai maschi (XY) basta una copia alterata, alle femmine (XX) servono entrambe. Le percentuali sono stime tipiche per popolazioni di origine nord-europea.

---
## Slide 48 – Principali tipi di daltonismo

![[TW14-s048-1.png|600]]

| | VISIONE NORMALE (Normal Vision) | PROTANOPIA (L-cone defect) | DEUTERANOPIA (M-cone defect) | TRITANOPIA (S-cone defect) |
|---|---|---|---|---|
| Men | 91.4% | 2.45% | 6.1% | 0.011% |
| Women | 99.6% | 0.04% | 0.36% | 0.04% |
| Overall | 95.5% | 1.25% | 3.24% | 0.025% |

- Sotto ogni colonna, le parole Red, Orange, Yellow, Green, Blue, Magenta come appaiono con quel tipo di visione

>> Protan = difetto dei coni L (rosso), deutan = coni M (verde), tritan = coni S (blu). Le percentuali della tabella comprendono sia l'assenza del tipo di cono (*-anopia*) sia la sua alterazione più lieve (*-anomalia*): ad esempio la deuteranopia vera riguarda circa l'1% dei maschi, la deuteranomalia circa il 5%. La somma dei deficit nei maschi (2,45 + 6,1 + 0,011 ≈ 8,6%) è coerente con l'8% della slide precedente.
>> Nelle simulazioni si vede che con protanopia e deuteranopia rosso, arancione, giallo e verde collassano su tonalità giallo-oliva simili: un pulsante verde "OK" e uno rosso "Annulla" distinti solo dal colore diventano indistinguibili.

---
## Slide 49 – Percezione dei colori e daltonismo

- Un'interfaccia che comunica informazioni soltanto attraverso queste differenze di colore può quindi renderle difficili da riconoscere

![[TW14-s049-1.png|550]]

- World Incidence of Color Blindness (legenda: High, Middle, Low)

>> L'incidenza varia fra popolazioni: è più alta (circa 8% dei maschi) in Europa, Nord America e Australia, più bassa in molte popolazioni africane e asiatiche. Per un sito pubblico conviene comunque assumere che una parte non trascurabile degli utenti abbia un deficit cromatico.

---
## Slide 50 – Informazioni riconoscibili anche senza colore

- Quando il colore comunica un'informazione, è quindi necessario affiancare un altro indizio visivo, come testo, forma o simbolo
- Esempi:
	- un errore comprende un messaggio che descrive il problema
	- i campi obbligatori hanno un'indicazione esplicita
	- una categoria in un grafico può essere identificata anche da etichette o tratteggi
	- la selezione di un elemento ha un indicatore aggiuntivo
- Questo principio è previsto dal criterio ***WCAG*** sull'uso del colore

![[TW14-s050-1.png|500]]

- Solo colore: campo Email "silvia@" con bordo rosso. Il colore è l'unico indizio
- Colore, simbolo e testo: campo Email "silvia@" con bordo rosso, icona di avviso e messaggio "Inserisci un indirizzo email valido". L'errore è descritto esplicitamente

>> È il criterio WCAG 1.4.1 "Uso del colore" (livello A). Il messaggio testuale aiuta anche chi usa uno screen reader, che non "vede" il bordo rosso: in HTML lo si collega al campo con `aria-describedby` e si marca il campo con `aria-invalid="true"`.
>> Test pratico: visualizzare la pagina in scala di grigi (o con un simulatore di daltonismo negli strumenti per sviluppatori del browser) e verificare che ogni informazione resti comprensibile.

---
## Slide 51 – Esplorazione, applicazione e verifica

- La scelta dei colori procede attraverso prove successive:
	1. individuare una palette iniziale
	2. assegnare ruoli ai colori
	3. applicarli a contenuti realistici
	4. verificare contrasto e riconoscibilità degli stati
	5. correggere le combinazioni problematiche

| Strumento | Attività |
|---|---|
| [Adobe Color](https://color.adobe.com/create/color-wheel) | Esplorare armonie |
| [Coolors](https://coolors.co/) | Generare alternative |
| [Realtime Colors](https://www.realtimecolors.com/) | Osservare colori applicati a una pagina, consente di assegnare colori a testo, sfondo e accenti, osservandoli nella composizione di una pagina |
| [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) | Verificare coppie testo/sfondo |

>> Anche gli strumenti per sviluppatori del browser aiutano: in Chrome e Firefox il selettore colore dell'ispettore mostra il rapporto di contrasto del testo selezionato, e si possono emulare i deficit della visione cromatica (Chrome: pannello Rendering → "Emulate vision deficiencies").

---
## Slide 52 – Seconda domanda

**BONUS**

**DOMANDA 2:**
Una pagina utilizza una palette armonica. Il testo del pulsante «**Iscriviti**» ha però un contrasto di 2,08:1 rispetto allo sfondo. Quale intervento soddisfa il requisito minimo **WCAG AA** per questo testo, mantenendone la dimensione?

![[TW14-s052-1.png|300]]

- [ ] Usare un colore complementare al rosa: l'opposizione delle tonalità garantisce un contrasto sufficiente
- [ ] Applicare lo stesso rosa agli altri pulsanti: la coerenza cromatica rende il testo sufficientemente leggibile
- [ ] Sostituire lo sfondo con un bordeaux che, rispetto al testo bianco, raggiunge un contrasto di 10,83:1
- [ ] Impostare il testo in grassetto: a 16 CSS px il rapporto di 2,08:1 diventa sufficiente

>> Risposta corretta: la **terza**, sostituire lo sfondo con il bordeaux (10,83:1 ≥ 4,5:1; supera anche il livello AAA di 7:1).
>> - Complementare: il contrasto dipende dalla luminanza, non dalla distanza fra tonalità; due colori opposti sul cerchio possono avere luminanza simile (es. rosso `#FF0000` e ciano `#00FFFF` hanno contrasto solo ~3,2:1).
>> - Coerenza: usare lo stesso rosa ovunque replica il problema su tutti i pulsanti, senza cambiare il rapporto.
>> - Grassetto: 16 px = 12 pt, sotto la soglia di 14 pt (≈ 18,7 px) per il testo grande in grassetto; quindi resta "testo normale" e servono 4,5:1. E anche se fosse testo grande, 2,08:1 è sotto 3:1.
---
## Slide 53 – Il layout organizza le informazioni

- Il layout definisce la disposizione degli elementi e la distribuzione dello spazio nella pagina
- La sua organizzazione aiuta l'utente a:
	- riconoscere le informazioni principali
	- individuare gruppi e relazioni
	- trovare le azioni disponibili
	- orientarsi fra le diverse sezioni
- La posizione di un elemento contribuisce al suo significato: una descrizione vicina a un'immagine o un pulsante accanto a un prodotto suggeriscono una relazione

![[TW14-s053-1.png|600]]

- Due versioni della stessa scheda "Web Design Day", con gli stessi contenuti ("18 novembre · ore 14:00", "Un incontro sulla progettazione web", "Aula Magna", "Iscriviti", "Partecipazione gratuita", "Iscrizioni entro il 15 novembre"):
	- a sinistra gli elementi sono sparsi senza un ordine preciso;
	- a destra seguono un ordine chiaro: titolo e sottotitolo, poi data e luogo, poi il pulsante "Iscriviti" con sotto le condizioni.

>> Nella versione a sinistra non si capisce a cosa si riferisca ogni informazione (per esempio, "Partecipazione gratuita" è lontana dal pulsante). A destra la vicinanza crea dei gruppi: *quando e dove* stanno insieme, *azione e condizioni* stanno insieme.

---
## Slide 54 – Contenuti, obiettivi e priorità

- Prima di disporre gli elementi, occorre stabilire quali contenuti servono all'utente e quale priorità assegnare loro
- Per ciascuna pagina chiediamoci:
	- Quale attività deve supportare?
	- Quali informazioni servono per svolgerla?
	- Quali contenuti sono principali e quali di approfondimento?
	- Quali elementi devono essere consultati insieme?
- Le priorità guidano le scelte di posizione, dimensione ed evidenza visiva

>> Prima si decide *cosa* mostrare e in che ordine di importanza (architettura dei contenuti), solo dopo *come* disporlo. Senza priorità chiare il layout tende a dare la stessa enfasi a tutto (vedi la slide 56).

---
## Slide 55 – Contenuti, obiettivi e priorità: un esempio

- Per decidere se partecipare a un evento, l'utente potrebbe cercare:

| Esigenza | Informazioni necessarie |
|---|---|
| Capire se è interessante | Tema, destinatari e programma |
| Verificare se può partecipare | Data, orario e luogo |
| Iscriversi | Costo, disponibilità e modalità |

![[TW14-s055-1.png|550]]

- **Contenuti da organizzare**: Tema, Data e orario, Costo, Programma, Luogo, Destinatari, Modalità di iscrizione, Disponibilità, Scadenza iscrizioni
- → **Contenuti raggruppati**:
	- **È interessante per me?** Tema, Destinatari, Programma
	- **Posso partecipare?** Data e orario, Luogo
	- **Come mi iscrivo?** Costo, Disponibilità, Modalità di iscrizione, Scadenza iscrizioni

***La priorità dipende dalla pagina: chi sta già compilando il modulo ha esigenze diverse da chi scopre l'evento per la prima volta***

>> L'elenco "piatto" di informazioni diventa una struttura quando lo si organizza intorno alle **domande dell'utente**. Ogni gruppo diventerà poi una sezione della pagina con un proprio titolo.

---
## Slide 56 – La gerarchia visiva

- La gerarchia visiva rende percepibile la diversa importanza degli elementi
- Possiamo costruirla attraverso:
	- **dimensione e peso**: distinguono titoli, testo e dettagli
	- **contrasto**: fa emergere alcuni elementi rispetto agli altri
	- **posizione**: colloca le informazioni nei punti in cui risultano rilevanti
	- **spaziatura e raggruppamento**: rendono riconoscibili blocchi e livelli
- Questi indizi lavorano insieme e orientano l'attenzione, senza determinare un percorso di lettura identico per tutti

![[TW14-s056-1.png|550]]

- **Gerarchia chiara**: tre livelli distinti
	1. Titolo e informazioni essenziali ("Web Design Day", "18 novembre · ore 14:00 · Aula Magna", descrizione)
	2. Sezioni e azioni ("Programma", "14:00 — Introduzione", "15:00 — Laboratorio", pulsante "Iscriviti")
	3. Dettagli di supporto ("Partecipazione gratuita · Posti limitati", "Informazioni: eventi@universita.it")
- **Tutto in evidenza**: stessi contenuti, tutti in grassetto e con sfondo colorato
	- La stessa enfasi rende le priorità meno riconoscibili

>> Se tutto è evidenziato, niente lo è: l'enfasi funziona solo per **contrasto** con elementi più neutri. Per questo i dettagli di supporto vanno resi più piccoli e meno contrastati, non eliminati.

---
## Slide 57 – Prossimità: lo spazio suggerisce relazioni

- Gli elementi vicini tendono a essere percepiti come appartenenti allo stesso gruppo
- La distanza aiuta quindi a distinguere:
	- le parti di uno stesso contenuto
	- contenuti diversi
	- un titolo dalla sezione precedente e da quella che introduce
- In genere, lo spazio fra gruppi diversi dovrebbe risultare maggiore dello spazio fra gli elementi dello stesso gruppo

![[TW14-s057-1.png|550]]

- **Spaziatura problematica**: "Relatrice: Anna Rossi, Ore 14:00" è più vicina al titolo successivo "Interfacce accessibili" che al proprio ("Progettare per il Web")
	- Le distanze rendono ambigue le relazioni
- **Gruppi riconoscibili**: titolo, relatore e orario di ciascun intervento sono vicini; fra i due interventi c'è più spazio
	- Ogni intervento forma un gruppo

>> È la **legge della prossimità**, uno dei principi della *Gestalt* (psicologia della percezione: tendiamo a vedere insiemi organizzati, non elementi isolati). Insieme a somiglianza, regione comune (slide 58), continuità e chiusura descrive come raggruppiamo ciò che vediamo.
>> Regola pratica in CSS: il `margin-top` di un titolo dovrebbe essere più grande del suo `margin-bottom`, così il titolo "si attacca" alla sezione che introduce (vedi [[06 - CSS intro, box model e flexbox]]).

---
## Slide 58 – Somiglianza e regione comune

- Altri elementi aiutano a riconoscere i gruppi:
	- **Somiglianza**: elementi con un aspetto simile tendono a essere associati
	- **Regione comune**: elementi contenuti nella stessa area delimitata tendono a essere percepiti come un insieme
- Questi principi guidano l'interpretazione dell'interfaccia. Elementi simili possono suggerire anche funzioni simili

![[TW14-s058-1.png|420]]![[TW14-s058-2.png|500]]

- Esempio "Web Design Day":
	- **Somiglianza**: Lo stesso stile identifica elementi con lo stesso ruolo (i tre interventi del "PROGRAMMA" hanno orario, titolo rosso e descrizione con lo stesso aspetto)
	- **Regione comune**: Una stessa area riunisce informazioni e azioni correlate (il riquadro "ISCRIZIONE" con "Partecipazione gratuita", "Iscrizioni entro il 15 novembre" e il pulsante "Iscriviti")
- **Aspetto ambiguo**: "Partecipazione gratuita" ha la stessa forma del pulsante "Iscriviti" → *Sembra cliccabile, ma è solo un'informazione*
	- Stessa forma → stessa aspettativa
- **Ruoli riconoscibili**: "Partecipazione gratuita" è testo semplice, solo "Iscriviti" è un pulsante
	- Informazione e azione si distinguono

>> La somiglianza vale anche per le **funzioni**: se un'informazione ha l'aspetto di un pulsante, l'utente si aspetta di poterla cliccare (e resta deluso). Viceversa, tutti i link e i pulsanti dello stesso tipo dovrebbero avere lo stesso stile in tutto il sito.

---
## Slide 59 – Allineamento e spazi bianchi

- Gli allineamenti creano riferimenti visivi condivisi e rendono riconoscibile la struttura
- Gli spazi bianchi separano i contenuti e ne chiariscono le relazioni. Possono avere qualunque colore di sfondo
- Per organizzare la pagina:
	- allineiamo elementi che condividono un ruolo
	- manteniamo distanze coerenti fra elementi equivalenti
	- distinguiamo lo spazio interno ai gruppi da quello fra sezioni
	- valutiamo bordi e sfondi quando la sola spaziatura non chiarisce il raggruppamento

![[TW14-s059-1.png|600]]

- **PRIMA** – Allineamenti e distanze irregolari: nel "Programma" (09:00 Accoglienza, 09:30 Introduzione al Web design, 10:30 Pausa, 10:45 Laboratorio di layout, 12:00 Discussione finale) orari e titoli partono da posizioni diverse e le righe hanno distanze variabili
- **DOPO** – Allineamenti e intervalli coerenti: orari in una colonna, titoli in un'altra, righe equidistanti

>> "Spazio bianco" (*white space* o spazio negativo) significa spazio vuoto, non necessariamente bianco: anche un'area vuota su sfondo scuro è spazio bianco.
>> Un elenco come quello del "DOPO" è un caso tipico in cui servono riferimenti comuni a righe e colonne: si ottiene facilmente con CSS Grid (slide 69–70).

---
## Slide 60 – Wireframe, Mockup e prototipo

- Wireframe e mockup sono strumenti molto vicini, si distingue il loro livello di definizione:

| Strumento | Che cosa rappresenta | Domanda principale |
|---|---|---|
| **Wireframe** | Struttura essenziale: contenuti, gruppi, spazi e posizione delle azioni | «Come organizziamo la pagina?» |
| **Mockup** | Aspetto visivo più definito: font, colori, immagini e dettagli dei componenti | «Come apparirà la pagina?» |
| **Prototipo** | Una simulazione che permette di provare interazioni e percorsi | «Come funzionerà?» |

- Il wireframe può essere visto come un abbozzo strutturale del mockup
- Se mostriamo riquadri essenziali, titoli, testi e pulsanti appena delineati, allora definirlo «wireframe» è appropriato. Se scegliamo già tipografia, palette e resa dei componenti, ci avviciniamo a un «mockup»
- Il wireframe mette a fuoco la struttura della pagina; il mockup ne definisce anche l'aspetto visivo.

>> In sintesi: **wireframe** = struttura (bassa fedeltà, scala di grigi, testo segnaposto); **mockup** = aspetto (alta fedeltà visiva, ma statico); **prototipo** = comportamento (cliccabile, può essere a bassa o alta fedeltà).
>> Si procede di solito in quest'ordine perché correggere la struttura su un wireframe costa molto meno che rifare un mockup già rifinito o del codice.

---
## Slide 61 – Il wireframe della pagina

- Un wireframe rappresenta la struttura della pagina attraverso una composizione essenziale
- Permette di discutere:
	- ordine e priorità dei contenuti
	- gruppi e sezioni
	- collocazione delle azioni
	- distribuzione dello spazio
- Si può realizzare su carta o con strumenti digitali, usando contenuti realistici e un livello di dettaglio sufficiente per valutare le scelte

![[TW14-s061-1.png|500]]

- Wireframe in scala di grigi della pagina "Web Design Day":
	- intestazione con "LOGO" e navigazione "Evento", "Programma", "Iscrizione"
	- "Web Design Day – Titolo e presentazione" (righe di testo segnaposto)
	- due riquadri affiancati "Data e orario" e "Luogo", con icone
	- "Programma" con tre righe "HH:MM – HH:MM"
	- "Iscrizione e condizioni" con il pulsante "Iscriviti" e "Condizioni di partecipazione"
	- "Footer": Contatti · Informazioni · Privacy

>> Si noti che i gruppi del wireframe corrispondono alle domande dell'utente della slide 55 ("Posso partecipare?" → Data e orario, Luogo; "Come mi iscrivo?" → Iscrizione e condizioni).

---
## Slide 62 – Come esploriamo una pagina: evidenze dall'eye-tracking

- L'***eye tracking*** registra la posizione dello sguardo nel tempo. Permette di osservare le **fissazioni**, durante le quali gli occhi sostano su un'area, e le **saccadi** (ovvero gli spostamenti fra fissazioni)
- Gli studi sulle pagine Web hanno individuato diverse modalità di esplorazione del testo:

![[TW14-s062-1.png|300]]

| Pattern | Comportamento osservato |
|---|---|
| **A F** | Scansione della parte alta e degli inizi delle righe, con esplorazione progressivamente più selettiva (riguarda soprattutto l'area testuale) |
| **Layer-cake** | Scansione di titoli e sottotitoli, seguita dalla lettura delle sezioni pertinenti |
| **Spotted** | Ricerca di elementi specifici distribuiti nella pagina, come cifre, parole o link |
| **Commitment** | Lettura estesa del contenuto, associata a maggiore interesse o motivazione |

Questi pattern descrivono comportamenti osservati in determinate condizioni, **non percorsi obbligatori né caratteristiche fisse degli utenti**

>> "A F" sta per "pattern **a F**" (*F-shaped pattern*), descritto da Nielsen Norman Group: due passate orizzontali in alto (le "barre" della F), poi una scansione verticale lungo il margine sinistro. Dipende da testo poco strutturato: titoli, elenchi e parole chiave all'inizio delle righe lo attenuano.
>> *Layer-cake* ("torta a strati"): l'occhio salta da un titolo all'altro come fra gli strati di una torta; è il comportamento favorito da una buona struttura a sezioni.
>> Durante le saccadi la visione è praticamente "sospesa": l'informazione si acquisisce durante le fissazioni.

---
## Slide 63 – Heatmap e Gaze plot

- **Heatmap**: mostra dove si concentrano le ***fissazioni***; non mostra da sola la sequenza
- **Gaze plot**: mostra posizioni e ordine delle **fissazioni**

![[TW14-s063-1.png|600]]

- **Due modi di osservare lo sguardo**
	- **Heatmap · pattern a F** – sotto "Titolo dell'articolo" le zone più calde (scala da "Meno fissazioni" a "Più fissazioni") formano una F
		- Dove si concentra lo sguardo – Non indica l'ordine delle fissazioni
	- **Gaze plot · pattern layer-cake** – fissazioni numerate da 1 a 8 che seguono i titoli "Introduzione", "Metodologia", "Risultati e conclusioni"
		- Dove guarda e in quale ordine – Titoli e sezioni guidano la scansione
- *Esempi schematici illustrativi: non sono dati sperimentali*

>> Heatmap = dato aggregato (spesso su molti utenti), dice *dove* ma non *in che ordine*; gaze plot = percorso di un singolo utente, con l'ordine e (di solito) la durata delle fissazioni indicata dalla grandezza dei cerchi.

---
## Slide 64 -> 65 – Lo sguardo segue il layout o il layout segue lo sguardo?

- L'esplorazione visiva nasce dall'interazione fra:
	- **obiettivo**: cercare un prezzo, confrontare alternative o approfondire un testo
	- **presentazione**: titoli, immagini, contrasto, raggruppamenti e posizione degli elementi
	- **esperienza**: convenzioni conosciute, familiarità con il sito e abitudini di lettura
- La struttura della pagina contribuisce quindi a generare il comportamento che osserviamo. Il pattern a F è solo una delle possibilità; una buona organizzazione può favorire una scansione guidata dai titoli e dai contenuti rilevanti

![[TW14-s065-1.png|600]]

- **Stessi contenuti, diversa organizzazione**
	- **A · Testo continuo**: tutte le informazioni in un unico paragrafo sotto "Web Design Day"
	- **B · Titoli e gruppi**: le stesse informazioni divise nelle sezioni "Quando e dove", "Programma", "Iscrizione e condizioni" (quest'ultima su sfondo evidenziato)
	- Domanda: "Entro quando bisogna iscriversi? La partecipazione è gratuita?"

***Se tutti guardano un elemento, significa necessariamente che è utile o progettato bene?***

***Una fissazione prolungata potrebbe indicare interesse, ma anche difficoltà di comprensione***: l'eye tracking va interpretato insieme al compito, agli errori e agli altri dati raccolti. La discussione in aula serve a formulare ipotesi, non sostituisce una misurazione dello sguardo.

>> Nella versione A, per rispondere alla domanda bisogna leggere tutto il paragrafo (comportamento *commitment* forzato o pattern a F); nella B basta scorrere i titoli fino a "Iscrizione e condizioni" (*layer-cake*).
>> Risposta alla domanda in rosso: no. Molte fissazioni su un elemento possono significare che è ambiguo o difficile da capire; servono anche tempi di completamento, errori e interviste.
>> Oltre al pattern a F si cita spesso lo **Z-pattern**: in pagine con poco testo (landing page, banner) lo sguardo va da in alto a sinistra a in alto a destra, scende in diagonale e attraversa la parte bassa. Anche questo è una tendenza, non una regola.

---
## Slide 66 – Altre lingue e altri alfabeti

- Queste osservazioni non si trasferiscono automaticamente a tutte le lingue e impaginazioni:
	- Nelle lingue scritte con direzione da destra a sinistra (arabo, ebraico, persiano, etc.) sono stati osservati anche pattern a F specchiati
	- In alcune lingue asiatiche (cinese, giapponese, coreano, etc.) i testi possono essere disposti orizzontalmente o verticalmente
	- l'esperienza nella direzione di lettura può influenzare l'elaborazione del testo

![[TW14-s066-1.png|550]]

- **Scrittura e percorsi dello sguardo**
	- **Testo orizzontale LTR** – Esempio: italiano – Direzione di lettura → – Possibile scansione a F
	- **Testo orizzontale RTL** – Esempio: arabo – Direzione di lettura ← – Possibile scansione a F specchiata
	- **Testo verticale** – Cinese e giapponese: disposizione tradizionale – Colonne da destra a sinistra, dall'alto al basso – Esiste anche la disposizione orizzontale.
- **La direzione della scrittura non determina un percorso unico dello sguardo.** I pattern dipendono anche da obiettivo, layout ed esperienza di lettura.

>> In HTML la direzione si indica con l'attributo `dir="rtl"` (e la lingua con `lang`); in CSS esiste `writing-mode: vertical-rl` per il testo verticale. Per questo conviene usare le **proprietà logiche** (`margin-inline`, `padding-block`, `inset-inline-start`…) invece di `left`/`right`: si adattano da sole alla direzione del testo (vedi anche la slide 70).

---
## Slide 67 -> 68 – Struttura della pagina e ordine del documento

- Il layout visivo deve accompagnare una struttura HTML comprensibile
- Prima di disporre i contenuti in colonne, definiamo una sequenza del documento che abbia senso anche nella lettura lineare

**HTML**
```html
<main>
  <header>
    <h1>Web Design Day</h1>
    <p>Un incontro sulla progettazione del Web.</p>
  </header>
  <section aria-labelledby="programma">
    <h2 id="programma">Programma</h2>
    <!-- Interventi dell'evento -->
  </section>
  <section aria-labelledby="iscrizione">
    <h2 id="iscrizione">Iscrizione</h2>
    <!-- Condizioni e modulo -->
  </section>
</main>
```

***CSS può cambiare la disposizione visiva, ma il riordinamento grafico non modifica necessariamente l'ordine di lettura delle tecnologie assistive o la navigazione da tastiera***

>> `aria-labelledby="programma"` dà alla `<section>` come nome accessibile il testo dell'elemento con `id="programma"` (cioè l'`<h2>`): in questo modo la sezione diventa una *region* navigabile con lo screen reader.
>> Proprietà come `order` (Flexbox), `flex-direction: row-reverse`, `grid-area` o il posizionamento esplicito nella griglia cambiano solo l'ordine **visivo**: screen reader e tasto Tab seguono l'ordine del **DOM**. Se le due sequenze divergono, l'utente da tastiera vede il focus "saltare" in giro per la pagina (criteri WCAG 1.3.2 *Meaningful Sequence* e 2.4.3 *Focus Order*).

- Quando la sequenza influisce sul significato, deve essere possibile ricavare dal codice un ordine corretto

![[TW14-s068-1.png|600]]

- **Dal documento al layout** – Le stesse sezioni: ordine di lettura e disposizione visiva
	- **Ordine nel documento**: 1 · Intestazione → 2 · Navigazione → 3 · Contenuto principale → 4 · Informazioni correlate → 5 · Piè di pagina
	- **Wireframe della pagina**: le stesse sezioni disposte nello spazio, con "3 · Contenuto principale" e "4 · Informazioni correlate" affiancati in due colonne
- Il documento definisce una sequenza; il layout dispone le sezioni nello spazio.

>> Nell'esempio l'ordine visivo e quello del DOM coincidono (da sinistra a destra, dall'alto in basso): è il caso ideale. In HTML le cinque sezioni corrispondono tipicamente a `<header>`, `<nav>`, `<main>`, `<aside>` e `<footer>`.

---
## Slide 69 -> 70 – Dalle scelte di layout a Grid e Flexbox

- Gli strumenti CSS realizzano le relazioni stabilite durante la progettazione
	- **Grid** permette di organizzare righe e colonne con riferimenti condivisi
	- **Flexbox** distribuisce gli elementi prevalentemente lungo una direzione ed è utile anche per gruppi che possono andare a capo
- La scelta dipende dalle relazioni da ottenere. Entrambi possono essere utilizzati in parti diverse della stessa pagina

>> Regola pratica: **Grid** è *bidimensionale* (righe e colonne allineate fra loro, come il programma "DOPO" della slide 59); **Flexbox** è *monodimensionale* (una fila di elementi, come una barra di pulsanti o di navigazione). Spesso si usa Grid per la struttura della pagina e Flexbox dentro i singoli componenti. Vedi [[06 - CSS intro, box model e flexbox]] e, per l'equivalente con classi di utilità, [[Lab 02 - Tailwind CSS]].

***Larghezza del contenuto***

**CSS**
```css
.contenitore {
  max-inline-size: 70rem;
  margin-inline: auto;
  padding-inline: 1rem;
}
```

***Gruppi e azioni***

**CSS**
```css
.programma {
  display: grid;
  gap: 1.5rem;
}

.azioni {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}
```

![[TW14-s070-1.png|550]]

- **Dal contenitore ai gruppi** (pagina "Web Design Day")
	1. Contenitore generale
	2. Sequenza degli interventi ("Programma": 14:00 Apertura, 14:30 Progettare le interfacce, 15:30 Discussione)
	3. Gruppo dei pulsanti ("Iscriviti", "Scopri di più")

>> `.contenitore`: sono **proprietà logiche**. Con testo orizzontale `max-inline-size: 70rem` equivale a `max-width: 70rem` (circa 1120 px con font base di 16 px), `margin-inline: auto` equivale a `margin-left: auto; margin-right: auto` e centra il blocco, `padding-inline: 1rem` evita che il testo tocchi i bordi sugli schermi stretti. Il contenitore si allarga fino a 70rem e poi resta centrato.
>> `.programma`: senza `grid-template-columns` la griglia ha **una sola colonna**; qui Grid serve soprattutto per lo spazio uniforme fra gli interventi tramite `gap` (niente margini da gestire sul primo/ultimo elemento). Per affiancare orario e titolo come nel "DOPO" della slide 59 si aggiungerebbe, per esempio, una sottogriglia con `grid-template-columns: auto 1fr`.
>> `.azioni`: i pulsanti stanno su una riga, vanno a capo se non c'è spazio (`flex-wrap: wrap`), sono distanziati di 0,75rem sia in orizzontale sia in verticale e centrati verticalmente fra loro (`align-items: center`).

---
## Slide 71 -> 72 – Valutare il layout con contenuti realistici

- Per verificare il layout osserviamo se le relazioni progettate rimangono chiare quando i contenuti cambiano
- Controlliamo:
	- titolo lungo e descrizioni di lunghezza differente
	- numero variabile di elementi
	- immagini mancanti o con proporzioni diverse
	- messaggi di errore e informazioni aggiuntive
- Le modifiche devono conservare priorità, raggruppamenti e accesso alle azioni (`demo_webdesign_layout.html`)

![[TW14-s072-1.png|700]]

- Due stati della demo `demo_webdesign_layout.html` (pagina "ATENEO · INCONTRI APERTI – Design e tecnologie per il Web", "SEMINARIO · APERTO A STUDENTI E STUDENTESSE"):
	- **Punto di partenza** · Gerarchia, prossimità e allineamenti da correggere: titolo "Web Design Day" piccolo come il testo, "Quando"/"Dove" impilati, orari, titoli e relatori degli interventi distanziati in modo uniforme e con allineamenti diversi
	- → **Versione finale** · Titolo lungo e un intervento aggiuntivo: titolo "Web Design Day: progettare pagine chiare, leggibili e facili da esplorare", "Quando: 18 novembre · 14:00–17:00" e "Dove: Aula Magna · Campus universitario" affiancati, "Programma" con 14:00 Progettare a partire dai contenuti (Giulia Rossi), 14:45 Tipografia e colore nell'interfaccia (Marco Conti), 15:30 Dal contenuto al layout (Sara Bianchi), 16:15 Progettare per schermi e contenuti diversi (Luca Ferri), riquadro "Partecipa all'evento" con "Iscriviti all'evento" e "Partecipazione gratuita · Iscrizioni entro il 16 novembre · Posti limitati"
	- Nel piè di pagina: "Esempio didattico · Evento immaginario"

>> Il test con contenuti realistici (o "estremi") serve a scoprire layout fragili: un titolo che va su tre righe, un nome lunghissimo, una lista vuota o con 20 elementi. Il *lorem ipsum* di lunghezza fissa nasconde questi problemi.
>> Le slide 73–77 mostrano i passaggi dalla versione iniziale a quella finale, uno alla volta.

---
## Slide 73 – 1. Distinguere titolo, intestazioni e dettagli

![[TW14-s073-1.png|700]]

- **Punto di partenza** · Gerarchia, prossimità e allineamenti da correggere → versione con la sola modifica: "Cambia solo la gerarchia tipografica."
	- "Web Design Day" diventa un titolo grande e colorato, "Programma" e "Partecipa all'evento" diventano intestazioni evidenti, i titoli degli interventi sono in grassetto, orari e relatori più piccoli

>> Primo intervento: la **gerarchia visiva** (slide 56) con dimensione e peso del testo. Le distanze e gli allineamenti sono ancora quelli iniziali, quindi i gruppi restano poco chiari.

---
## Slide 74 – 2. Avvicinare gli elementi dello stesso gruppo

![[TW14-s074-1.png|700]]

- "Cambia solo la gerarchia tipografica." → "aggiunge la prossimità all'interno dei gruppi."
	- Orario, titolo e relatore di ogni intervento sono ora vicini fra loro; anche "Quando"/"Dove" e i relativi valori

>> Applicazione della **prossimità** (slide 57): si riduce lo spazio *interno* ai gruppi.

---
## Slide 75 – 3. Aumentare la distanza fra gruppi

![[TW14-s075-1.png|700]]

- "aggiunge la prossimità all'interno dei gruppi." → "Si aggiunge una separazione più chiara fra le sezioni."
	- Più spazio prima di "Programma", fra un intervento e l'altro e prima di "Partecipa all'evento"

>> Il complemento del passo precedente: lo spazio **fra** gruppi deve essere maggiore di quello **dentro** i gruppi (slide 57).

---
## Slide 76 – 4. Rendere coerenti gli allineamenti

![[TW14-s076-1.png|700]]

- "Si aggiunge una separazione più chiara fra le sezioni." → "Layout organizzato · Contenuti identici alla versione iniziale."
	- Titolo e sezioni allineati allo stesso margine sinistro, "Quando" e "Dove" affiancati, orari in una colonna e titoli degli interventi in un'altra, "Partecipa all'evento" in un riquadro (regione comune)

>> I contenuti sono **identici** a quelli della slide 72 a sinistra: è cambiata solo l'organizzazione visiva (gerarchia, prossimità, allineamento, regione comune).

---
## Slide 77 – 5. Sostituire un titolo breve con uno lungo e aggiungere un intervento

![[TW14-s077-1.png|700]]

- "Si aggiunge una separazione più chiara fra le sezioni." → "Versione finale · Titolo lungo e un intervento aggiuntivo."
	- Titolo "Web Design Day: progettare pagine chiare, leggibili e facili da esplorare" su due righe e quarto intervento "16:15 Progettare per schermi e contenuti diversi – Luca Ferri"

>> È il test con contenuti realistici della slide 71: il layout regge, perché gerarchia, gruppi e allineamenti non dipendono dalla lunghezza del titolo né dal numero di interventi (la griglia del programma accoglie una riga in più senza modifiche al CSS).
>> Nota: la versione "di partenza" a sinistra in questa slide è quella del passo 3, non quella del passo 4.

---
## Slide 78 – Valutare il layout con contenuti realistici

![[TW14-s078-1.png|700]]

- **Punto di partenza** · Gerarchia, prossimità e allineamenti da correggere → **Versione finale** · Titolo lungo e un intervento aggiuntivo

>> La slide è identica alla 72: riepiloga il percorso dalla versione iniziale a quella finale.
---
## Slide 79 -> 80 – Responsive design

- Una pagina può essere visualizzata in finestre di dimensioni diverse, anche sullo stesso dispositivo
- Il ***responsive design*** permette alle pagine Web di adattarsi allo spazio disponibile, mantenendone i contenuti leggibili e le funzionalità utilizzabili
- L'adattamento può riguardare:
	- numero e dimensione delle colonne
	- disposizione dei gruppi
	- spaziatura e dimensioni tipografiche
	- presentazione delle immagini e della navigazione

- Il risultato deve funzionare anche nelle dimensioni intermedie fra quelle dei prototipi

![[TW14-s080-1.png|650]]

- **Spazio ridotto**: Evento universitario, Data e luogo, Programma, Iscrizione (pulsante "Iscriviti") uno sotto l'altro – *Contenuti in sequenza*
- **Spazio intermedio**: Programma e Iscrizione sulla stessa riga – *Programma e iscrizione affiancati*
- **Spazio ampio**: stessa disposizione, ma con una "Larghezza massima" – *Contenitore centrato con margini*

>> Responsive design (termine di Ethan Marcotte, 2010) = una sola pagina, con lo stesso HTML, che si adatta a qualunque larghezza grazie a tre ingredienti: layout fluido (dimensioni relative), media query (breakpoint) e immagini flessibili. Non si tratta di creare un sito "mobile" separato.
>> I prototipi (mockup) di solito si disegnano per poche larghezze tipiche, ma l'utente può avere qualunque larghezza intermedia (finestra ridimensionata, tablet in verticale, schermo diviso): il layout va verificato su tutto l'intervallo, non solo nei punti disegnati. Le media query sono già state viste in [[07 - CSS testo, colori e responsiveness]].

---
## Slide 81 – Mobile first

- L'approccio ***mobile first*** parte dalla progettazione per uno spazio ridotto
- Questo vincolo aiuta a stabilire:
	- quali informazioni presentare per prime
	- come organizzare una sequenza comprensibile
	- quali azioni rendere facilmente individuabili
- Quando lo spazio aumenta, possiamo affiancare contenuti e arricchire la composizione
- ***Mobile first e responsive sono compatibili***: il primo descrive l'*approccio di partenza*, il secondo il *comportamento di adattamento*

>> In CSS mobile first significa: le regole **di base** (fuori da ogni media query) descrivono il layout per lo schermo stretto, e le media query `min-width` **aggiungono** regole quando lo spazio cresce. L'approccio opposto (desktop first) parte dal layout largo e lo "smonta" con `max-width`.
>> È anche la logica dei prefissi di Tailwind ([[Lab 02 - Tailwind CSS]]): una classe senza prefisso vale sempre, `md:grid-cols-2` vale da `md` (48rem = 768px) in su.

---
## Slide 82 – Mobile first: esempio

![[TW14-s082-1.png|650]]

- **Mobile first: dagli stessi contenuti a una nuova composizione**
	- *Spazio ridotto*: 1 Presentazione, 2 Informazioni pratiche, 3 Programma, 4 Iscrizione in colonna – **Una sequenza chiara**
	- *Spazio più ampio*: 1 e 2 a tutta larghezza, 3 Programma e 4 Iscrizione affiancati ("Programma e iscrizione si affiancano.") – **Più spazio, diversa disposizione**
- Stessi contenuti e priorità; la composizione si adatta allo spazio disponibile.

>> L'ordine numerato è l'ordine del documento HTML: resta lo stesso in entrambe le versioni, cambia solo la disposizione visiva. Così l'ordine di lettura per screen reader e tastiera rimane sensato anche con il layout a più colonne.

---
## Slide 83 – Layout Liquido

- Un ***layout liquido***, o ***fluido***, utilizza dimensioni flessibili: gli elementi possono espandersi, restringersi e andare a capo in funzione dello spazio disponibile
- Il contenuto mantiene una struttura comprensibile in contenitori di dimensioni differenti, pur adattandosi allo spazio
- La ***flessibilità*** può essere accompagnata da **limiti minimi e massimi**, per evitare colonne troppo strette o righe di testo troppo lunghe: la ***fluidità*** permette variazioni continue delle dimensioni; i ***breakpoint*** introducono cambiamenti nella composizione

![[TW14-s083-1.png|450]]

- CONTENT IS LIKE WATER
- "You put water into a cup it becomes the cup. You put water into a bottle it becomes the bottle. You put it in a teapot, it becomes the teapot."
- Josh Clark (*originally Bruce Lee*) - Seven deadly mobile myths
- Illustration by Stéphanie Walter

>> Layout fluido = dimensioni espresse in unità relative (`%`, `fr`, `vw`, flex/grid) invece che in `px` fissi, così gli elementi seguono la larghezza disponibile in modo **continuo**. I breakpoint invece producono cambiamenti **a gradino** (es. da una a due colonne).
>> I limiti si ottengono con `min-width`/`max-width`, `minmax()` in Grid o `clamp()`. Esempio: `max-width: 65ch` su un paragrafo mantiene la misura della riga nell'intervallo consigliato di circa 45–75 caratteri anche su schermi larghi.

---
## Slide 84 – Viewport e dimensioni flessibili

- Il ***viewport*** è l'area in cui il browser visualizza la pagina. Le sue dimensioni CSS possono essere diverse dalla risoluzione fisica dello schermo
- Nel documento HTML impostiamo:

**HTML**

```html
<meta name="viewport“ content="width=device-width, initial-scale=1">
```

- Questo permette ai browser mobili di utilizzare una larghezza del viewport coerente con il dispositivo, evitando il comportamento predefinito che può simulare una pagina desktop e ridurla. Il tag, da solo, non rende il layout responsive

>> Refuso: dopo `viewport` la slide ha una virgoletta tipografica `“` invece di `"`. Copiato così il valore dell'attributo non si chiude bene e il tag non funziona. La forma corretta è `<meta name="viewport" content="width=device-width, initial-scale=1">`, da mettere nell'`<head>`.
>> Senza questo tag i browser mobili impaginano la pagina come se fosse larga circa 980 px e poi la rimpiccioliscono: le media query non scattano e il testo risulta minuscolo. `width=device-width` fa sì che il viewport sia largo quanto lo schermo **in pixel CSS** (es. 390 px su uno smartphone che ha 1170 pixel fisici, con `devicePixelRatio` = 3). `initial-scale=1` imposta lo zoom iniziale al 100%.
>> Non aggiungere `user-scalable=no` o `maximum-scale=1`, perché impediscono lo zoom e peggiorano l'accessibilità.

---
## Slide 85 – Esempio CSS

**CSS**

```css
* {
  box-sizing: border-box;
}
.contenitore {
  width: 100%;
  max-width: 70rem;
  margin-inline: auto;
  padding-inline: 1rem;
}
img {
  max-width: 100%;
  height: auto;
}
```

***Il contenitore utilizza lo spazio disponibile fino a un limite massimo***

***Le immagini possono restringersi mantenendo le proporzioni***

![[TW14-s085-1.png|600]]

- **Un contenitore flessibile con un limite massimo**
	- *Finestra stretta*: Occupa la larghezza disponibile
	- *Finestra ampia*: `max-width: 70rem` – Raggiunge il limite e resta centrato (Margini automatici)

>> - `box-sizing: border-box`: `width` e `max-width` comprendono anche padding e bordo, quindi `width: 100%` con `padding-inline: 1rem` non sfora ([[06 - CSS intro, box model e flexbox]]).
>> - `margin-inline: auto` è la proprietà logica che corrisponde a `margin-left: auto; margin-right: auto`: quando il contenitore è più stretto del genitore, lo spazio avanzato viene diviso a metà e il blocco risulta centrato.
>> - `padding-inline: 1rem` evita che il testo tocchi i bordi dello schermo su mobile.
>> - `70rem` = 1120 px con la dimensione del font predefinita di 16 px. Usando `rem`, il limite cresce se l'utente aumenta la dimensione del testo.
>> - `img { max-width: 100%; height: auto; }`: l'immagine non supera mai il contenitore. Se il contenitore è più largo, l'immagine non viene ingrandita oltre la sua dimensione naturale. `height: auto` ricalcola l'altezza in proporzione, anche quando nell'HTML sono presenti gli attributi `width`/`height`.

---
## Slide 86 -> 87 – Breakpoint guidati dal contenuto

- Un ***breakpoint*** è una **soglia** alla quale cambiano alcune regole di presentazione
- La soglia si sceglie osservando quando il contenuto richiede una diversa organizzazione, per esempio quando:
	- due colonne diventano troppo strette
	- la navigazione non trova più spazio
	- informazioni collegate risultano eccessivamente distanti
- Le categorie "*telefono*", "*tablet*" e "*desktop*" non identificano tutte le possibili dimensioni di visualizzazione

**CSS**

```css
.layout-evento {
  display: grid;
  gap: 2rem;
}
@media (min-width: 50rem) {
  .layout-evento {
    grid-template-columns:
      minmax(0, 2fr) minmax(0, 1fr);
    align-items: start;
  }
}
```

***La base dispone gli elementi in una colonna. Da*** `50rem` ***il programma e l'iscrizione si affiancano***

`50rem` ***è una soglia di esempio, da scegliere dopo aver verificato i contenuti reali***

***L'approccio consigliato è ampliare il layout finché emerge la necessità di un cambiamento***

![[TW14-s087-1.png|600]]

- **Breakpoint: quando cambia la composizione**
	- La soglia dipende dallo spazio richiesto dai contenuti.
	- *Prima della soglia* (Una colonna) → Breakpoint → *Dalla soglia in poi* (Due colonne leggibili)
	- C'è spazio sufficiente per due colonne leggibili

>> - Base: `display: grid` senza `grid-template-columns` crea una sola colonna, quindi i figli stanno uno sotto l'altro separati da `gap`. Da 50rem (800 px a 16 px) in su la griglia passa a due colonne in proporzione 2:1.
>> - Il codice rispecchia la figura solo se Programma e Iscrizione sono figli di `.layout-evento` e Presentazione e Informazioni pratiche si trovano fuori (o occupano tutta la riga con `grid-column: 1 / -1`). Altrimenti i quattro blocchi verrebbero distribuiti a coppie sulle due colonne.
>> - `minmax(0, 2fr)` invece di `2fr`: una traccia `fr` ha come minimo implicito `auto` (la larghezza min-content), quindi un contenuto lungo e non spezzabile (URL, `<pre>`, tabelle) allargherebbe la colonna e romperebbe la proporzione o farebbe uscire la pagina dallo schermo. Con minimo `0` le colonne restano sempre in rapporto 2:1.
>> - `align-items: start`: ogni elemento è alto quanto il proprio contenuto, invece di allungarsi (`stretch`, il valore predefinito) fino all'altezza della riga.
>> - `em`/`rem` nelle media query fanno riferimento alla dimensione del font **iniziale** del browser, non a quella impostata su `html`. Se l'utente ingrandisce il testo predefinito, il breakpoint si sposta di conseguenza, ed è proprio ciò che serve, perché a parità di pixel ci stanno meno caratteri.
>> - Metodo pratico: allargare lentamente la finestra (o usare i DevTools) partendo dal layout a una colonna e fissare la soglia nel punto in cui due colonne diventano davvero leggibili. Non si parte dalle misure di dispositivi famosi.

---
## Slide 88 – Flessibilità anche senza breakpoint

- Non ogni adattamento richiede una ***media query***
- Gli strumenti di layout possono distribuire gli elementi in base allo spazio disponibile. Un gruppo di pulsanti può, per esempio, andare a capo automaticamente

**CSS**

```css
.azioni {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
```

***In uno spazio ampio, i pulsanti possono stare sulla stessa riga. Quando lo spazio diminuisce, quelli che non entrano passano alla riga successiva***

![[TW14-s088-1.png|600]]

- **Stessi contenuti, disposizione adattata allo spazio**
	- *Contenitore ampio*: Iscriviti, Consulta il programma, Come arrivare sulla stessa riga
	- *Contenitore stretto*: gli stessi pulsanti uno sotto l'altro
- Il gruppo mantiene contenuti e ordine; cambia la disposizione.

>> `flex-wrap: wrap` consente agli elementi flex di andare su più righe invece di comprimersi o uscire dal contenitore ([[06 - CSS intro, box model e flexbox]]). `gap` vale sia tra le colonne sia tra le righe.
>> A differenza di una media query, che guarda la larghezza del **viewport**, qui il comportamento dipende dallo spazio del **contenitore**: lo stesso componente funziona sia in una colonna stretta sia in una larga. Un'altra tecnica senza breakpoint è `grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr))`, che crea tante colonne quante ne entrano.
>> Per avere i pulsanti a tutta larghezza quando vanno a capo, come nella figura, si può aggiungere ad esempio `flex: 1 1 12rem` agli elementi figli.

---
## Slide 89 – Progressive Enhancement

- Il ***progressive enhancement*** parte da contenuti e funzionalità di base disponibili, aggiungendo miglioramenti quando l'ambiente li supporta
- È un principio più ampio del ***mobile first***: riguarda anche tecnologie, risorse e funzionalità, oltre alla presentazione

![[TW14-s089-1.png|650]]

- **Progressive enhancement e mobile first**

| | Progressive enhancement | Mobile first |
|---|---|---|
| Domanda | Quali capacità sono disponibili? | Quanto spazio è disponibile? |
| 1 | Contenuti e funzioni essenziali | Progetto per uno spazio ridotto |
| 2 | L'ambiente supporta altre capacità? | Lo spazio disponibile aumenta? |
| 3 | Aggiungo miglioramenti | Espando la composizione |
| Esempio | HTML: il modulo funziona. JavaScript: aggiunge suggerimenti. | Una colonna; con più spazio, alcuni campi si affiancano. |

- Due approcci complementari, utilizzabili insieme

>> A strati: prima HTML semantico che funziona da solo, poi CSS per la presentazione, infine JavaScript per migliorare l'interazione. Se uno strato superiore manca (JS disattivato o fallito per un errore o una rete lenta, CSS non caricato, browser datato), la funzione essenziale resta disponibile.
>> L'approccio opposto è la *graceful degradation*: si progetta per l'ambiente più avanzato e poi si cerca di "degradare" con dignità negli ambienti meno capaci.
>> Nell'esempio della figura il campo Città funziona come normale `<input>`. Con JS (o con `<datalist>`) si aggiungono i suggerimenti.

---
## Slide 90 – Progressive Enhancement: esempio

- Il modulo di iscrizione:
	- utilizza un form HTML e un'elaborazione sul server
	- con JavaScript disponibile, può inviare la richiesta con Fetch
	- può mostrare la conferma nella pagina, senza una navigazione completa

![[TW14-s090-1.png|600]]

- **Due percorsi per la stessa iscrizione**
	- La funzione resta disponibile; cambia il modo di mostrare la conferma.
	- **BASE HTML**: Form HTML (Invio del modulo) → *Richiesta HTTP* → Server (Elabora l'iscrizione) → *Risposta HTML* → Pagina di conferma (Nuova pagina HTML)
	- **CON JAVASCRIPT**: Form + JavaScript (Gestisce l'invio) → Fetch (Invia la richiesta) → Server (Elabora l'iscrizione) → Conferma nel DOM (Aggiorna la pagina)
	- **Il percorso HTML è la base; JavaScript migliora l'interazione.**
	- Con Fetch, la conferma compare nella pagina corrente, senza una nuova navigazione.

***Due percorsi per la stessa iscrizione:***

***- Form HTML → server → pagina di conferma***

***- Form con JavaScript → Fetch → server → conferma nel DOM***

- La versione di base deve essere stata effettivamente implementata: la presenza del tag `<form>` da sola non garantisce il funzionamento

>> In pratica il form ha `action` e `method` reali, gestiti dal server (es. uno script PHP che risponde con una pagina di conferma). Lo script JS si aggancia all'evento `submit`, chiama `event.preventDefault()` e invia gli stessi dati con `fetch(form.action, { method: "POST", body: new FormData(form) })`, poi inserisce la conferma nel DOM.
>> Il server deve saper rispondere a entrambe le richieste (pagina HTML completa oppure, ad esempio, JSON/frammento HTML). Si possono distinguere con l'header `Accept`.
>> Il "tranello" dell'ultimo punto: un `<form>` senza `action` utile, oppure con un pulsante `type="button"` che funziona solo via JS, sembra a posto ma senza JavaScript non fa nulla.

---
## Slide 91 -> 92 – Dimensione dello schermo e modalità di interazione

- La larghezza della finestra non identifica il modo in cui l'utente interagisce
- Un dispositivo può offrire touch, mouse, tastiera o più modalità contemporaneamente
- Nella progettazione:
	- le informazioni necessarie devono essere raggiungibili anche senza hover
	- i controlli devono avere dimensioni e distanze adeguate
	- la navigazione da tastiera deve rimanere utilizzabile
	- gli adattamenti devono considerare le capacità disponibili, senza dedurle soltanto dalla larghezza

**CSS**

```css
.pulsante:focus-visible {
  outline: 3px solid #800020;
  outline-offset: 3px;
}

@media (hover: hover) and (pointer: fine) {
  .pulsante:hover {
    text-decoration: underline;
  }
}
```

***L'effetto hover aggiunge un riscontro visivo; il pulsante rimane riconoscibile e utilizzabile anche senza quell'effetto***

![[TW14-s092-1.png|600]]

- **Stessa pagina, diverse modalità di interazione** (pagina "Web Design Day": Programma, Informazioni, "Un incontro sul design per il Web", pulsante Iscriviti)
	- *Tastiera*: Tab: sposta il focus; Invio: attiva il pulsante
	- *Mouse*: Punta e fai clic
	- *Touch*: Tocca il pulsante
- La stessa azione deve essere disponibile con tutte e tre le modalità.

>> Esempi: un laptop con touchscreen è largo ma si usa anche con il dito, mentre un tablet con tastiera è stretto ma si usa con la tastiera. Ecco perché la larghezza da sola non basta.
>> - `:focus-visible` mostra il contorno quando il browser ritiene utile evidenziare il focus (tipicamente con la navigazione da tastiera) e non dopo un clic del mouse. Il colore `#800020` su bianco ha un contrasto di circa 10,8:1, ben oltre il 3:1 richiesto per gli indicatori non testuali. Non bisogna mai togliere il focus con `outline: none` senza un'alternativa.
>> - `(hover: hover)` indica che il dispositivo di input **principale** può passare sopra gli elementi, mentre `(pointer: fine)` indica che è preciso (mouse, trackpad). Sui touch screen la regola non si applica, così si evita l'hover "appiccicoso" dopo un tocco. Per considerare un qualsiasi dispositivo collegato esistono `any-hover` e `any-pointer`.
>> - Dimensioni dei controlli: WCAG 2.2 chiede almeno 24×24 px CSS (SC 2.5.8, livello AA) e consiglia 44×44 (SC 2.5.5, livello AAA).

---
## Slide 93 – Verificare l'adattamento della pagina

- La verifica deve includere larghezze diverse e contenuti realistici
- Osserviamo se:
	- il testo rimane leggibile senza sovrapposizioni o tagli
	- le informazioni collegate mantengono un raggruppamento chiaro
	- le azioni rimangono raggiungibili
	- l'ordine del documento conserva significato
	- titoli lunghi e messaggi aggiuntivi trovano spazio
- L'emulazione nei DevTools aiuta a individuare problemi, ma va affiancata, quando possibile, a prove sui dispositivi reali (`demo_mobile_first_responsive.html`)

>> In Chrome/Edge la modalità dispositivo dei DevTools si apre con `Ctrl+Shift+M` (`Cmd+Shift+M` su Mac). Permette di trascinare la larghezza in modo continuo, ed è il modo più rapido per trovare dove il layout "si rompe".
>> L'emulazione non riproduce tutto: prestazioni e rete reali, comportamento del touch, tastiera virtuale che riduce il viewport, barre del browser che compaiono e scompaiono, resa effettiva dei font.
>> Per verificare anche il testo ingrandito (WCAG 1.4.4/1.4.10), si fa uno zoom al 200% e al 400%: a 320 px CSS di larghezza la pagina non dovrebbe richiedere lo scorrimento orizzontale.

---
## Slide 94 – Terza domanda

**BONUS**

- **DOMANDA 3:**
	State sviluppando una pagina con approccio mobile first. La versione a una colonna funziona correttamente. Ampliando la finestra, volete affiancare programma e iscrizione.
	Qual è il criterio più appropriato per scegliere il breakpoint?
	- [ ] Utilizzare sempre 768px, perché identifica il passaggio universale fra smartphone e tablet
	- [ ] Usare la risoluzione fisica dello smartphone più diffuso fra gli utenti
	- [ ] Affiancare sempre le sezioni e ridurne progressivamente il testo finché entrano nella finestra
	- [ ] Individuare una larghezza alla quale entrambe le sezioni dispongano di spazio sufficiente, verificando anche il comportamento vicino alla soglia

>> Risposta corretta: la **quarta**. Il breakpoint deve essere guidato dal contenuto: si allarga il layout finché le due sezioni affiancate risultano leggibili e poi si controlla cosa succede poco sopra e poco sotto la soglia.
>> Le altre sono sbagliate: 768px è solo una convenzione (la larghezza dell'iPad in verticale), non un confine universale, perché i dispositivi coprono con continuità tutte le larghezze. La risoluzione **fisica** non corrisponde ai pixel CSS (conta il `devicePixelRatio`) e comunque non dice nulla sullo spazio di cui ha bisogno il contenuto. Ridurre il testo per farlo entrare peggiora la leggibilità, cioè il contrario dello scopo del responsive design.

---
## Slide 95 – Domande?

---
## Slide 96 – Riferimenti: tipografia, CSS e accessibilità

Titoli cliccabili per aprire le fonti

- [W3C — CSS Fonts Module Level 4](https://www.w3.org/TR/css-fonts-4/) – Famiglie, varianti, selezione e caricamento dei font
- [W3C — CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/) – Rappresentazioni del colore, HSL e gamut
- [W3C — A Standard Default Color Space: sRGB](https://www.w3.org/Graphics/Color/sRGB) – Specifica e codifica dello spazio sRGB
- [web.dev — Typography](https://web.dev/learn/design/typography) – Dimensioni, lunghezza delle righe e interlinea
- [MDN — font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@font-face/font-display) – Comportamento del testo durante il caricamento dei font
- [W3C WAI — Contrast (Minimum), SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) – WCAG 2.2: contrasto fra testo e sfondo
- [W3C WAI — Use of Color, SC 1.4.1](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) – WCAG 2.2: informazioni distinguibili anche senza colore
- [W3C WAI — Meaningful Sequence, SC 1.3.2](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html) – WCAG 2.2: sequenza significativa dei contenuti

---
## Slide 97 – Riferimenti: percezione e immagini digitali

Titoli cliccabili per aprire le fonti

- [Thoreson e Dacey (2019)](https://doi.org/10.1152/physrev.00027.2018) – Diverse Cell Types, Circuits, and Mechanisms for Color Vision in the Vertebrate Retina. Physiological Reviews, 99, 1527–1573.
- [NCBI Bookshelf — Neuroscience](https://www.ncbi.nlm.nih.gov/books/NBK11059/) – Cones and Color Vision: coni e visione tricromatica
- [Pointer e Attridge (1998)](<https://onlinelibrary.wiley.com/doi/abs/10.1002/(SICI)1520-6378(199802)23:1%3C52::AID-COL8%3E3.0.CO;2-2>) – The number of discernible colours. Color Research & Application, 23(1), 52–54.
- [Masaoka et al. (2013)](https://doi.org/10.1364/JOSAA.30.000264) – Number of discernible object colors is a conundrum. JOSA A, 30(2), 264–277.
- [Brown — Image Capture Beyond 24-Bit RGB](https://www.imaging.org/IST/IST/Resources/Tutorials/Image_Capture.aspx) – Society for Imaging Science and Technology
- [Apple — Converting chroma-subsampled images](https://developer.apple.com/documentation/accelerate/converting-chroma-subsampled-images) – Separazione delle componenti e sottocampionamento cromatico
- [libjpeg-turbo — TurboJPEG API](https://github.com/libjpeg-turbo/libjpeg-turbo/blob/main/src/turbojpeg.h) – Documentazione: opzioni di sottocampionamento cromatico
- [MedlinePlus Genetics — Color vision deficiency](https://medlineplus.gov/genetics/condition/color-vision-deficiency/) – Forme ereditarie e frequenza nelle diverse popolazioni
- [NEI — Causes of Color Vision Deficiency](https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/color-blindness/causes-color-vision-deficiency) – Ereditarietà delle alterazioni della visione rosso-verde

---
## Slide 98 – Riferimenti: layout ed esplorazione visiva

Titoli cliccabili per aprire le fonti

- [Gordon (2021) — Nielsen Norman Group](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/) – Visual Hierarchy in UX: Definition
- [Harley (2020) — Nielsen Norman Group](https://www.nngroup.com/articles/gestalt-proximity/) – Proximity Principle in Visual Design
- [Pernice (2017) — Nielsen Norman Group](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) – F-Shaped Pattern of Reading on the Web: Misunderstood, But Still Relevant (Even on Mobile)
- [Pernice (2019) — Nielsen Norman Group](https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/) – Text Scanning Patterns: Eyetracking Evidence
- [Yan, Kliegl e Pan (2024)](https://doi.org/10.1037/xlm0001340) – Direction-specific reading experience shapes perceptual span. J. Exp. Psychol.: Learning, Memory, and Cognition, 50(11), 1740–1748.
- [W3C Internationalization](https://www.w3.org/International/articles/vertical-text/) – Styling vertical Chinese, Japanese, Korean and Mongolian text

---
## Slide 99 – Riferimenti: mobile first e responsive

Titoli cliccabili per aprire le fonti

- [LePage e Andrew — web.dev](https://web.dev/articles/responsive-web-design-basics) – Responsive web design basics: viewport, dimensioni flessibili e breakpoint
- [web.dev — Learn Responsive Design](https://web.dev/learn/design/macro-layouts) – Macro layouts: struttura della pagina, Grid e Flexbox
- [web.dev — Learn Responsive Design](https://web.dev/learn/design/micro-layouts) – Micro layouts: componenti che si adattano al contenitore
- [web.dev — Learn Responsive Design](https://web.dev/learn/design/interaction) – Interaction: modalità di input, hover e puntatori
- [MDN — Progressive enhancement](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) – Funzionalità di base e miglioramenti progressivi

---
## Slide 100 – Strumenti e crediti delle immagini

Titoli cliccabili per aprire le fonti

- [Google Fonts e Fonts Knowledge](https://fonts.google.com/) – Ricerca dei font e criteri di scelta
- [Fontpair](https://fontpair.co/) – Proposte di abbinamenti tipografici
- [Adobe Color](https://color.adobe.com/create/color-wheel) – Ruota cromatica e armonie
- [Coolors](https://coolors.co/) – Esplorazione e generazione di palette
- [Realtime Colors](https://www.realtimecolors.com/) – Colori e font applicati a una pagina
- [WebAIM — Contrast Checker](https://webaim.org/resources/contrastchecker/) – Verifica delle coppie testo/sfondo
- [Google Fonts — Choosing type](https://fonts.google.com/knowledge/choosing_type) – Approfondimenti sulla scelta dei caratteri

- [Stéphanie Walter (2013) — Content is like water](https://commons.wikimedia.org/wiki/File:Content_is_like_water.png) – Illustrazione ispirata alla metafora di Bruce Lee, ripresa da Josh Clark in Seven Deadly Mobile Myths. Versione su Wikimedia Commons: CC BY-SA 3.0.
	- [Licenza CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

---
## Riassunto

>> **Web design**
>> - Progettare un sito vuol dire decidere come presentare i contenuti perché gli utenti raggiungano i propri obiettivi (nell'esempio: trovare le informazioni sull'evento e iscriversi). Si cercano compromessi fra chiarezza, coerenza, accessibilità, adattabilità e prestazioni. Il sito evolve nel tempo, quindi le scelte devono reggere contenuti che cambiano.
>>
>> **Tipografia**
>> - Carattere ≠ glifo ≠ font. Una famiglia raccoglie le varianti di peso e stile. Classificazioni principali: serif, sans-serif, monospace (più script e decorativi).
>> - Il font si sceglie per leggibilità, tono e lingue supportate. Si abbinano poche famiglie e si crea la **gerarchia** con dimensione, peso e spaziatura. I font decorativi vanno solo sui titoli brevi.
>> - Si usano unità relative (`rem`, `em`) con la radice al 100%, per rispettare le preferenze dell'utente. `line-height` senza unità (circa 1.5 per i paragrafi) e righe di circa 45–75 caratteri.
>> - Web font con `@font-face`/`<link>`, una **catena di fallback** in `font-family` che finisce con una famiglia generica, e `font-display: swap`.
>>
>> **Colore**
>> - **RGB** additivo: tre canali da 8 bit, scritto in esadecimale `#RRGGBB`. Un'immagine raster non compressa occupa larghezza × altezza × 3 byte (1920×1080 → circa 6,2 MB). Da qui la compressione: lossy (JPEG) e lossless, con sottocampionamento della crominanza (Y′CbCr 4:2:0), perché l'occhio è più sensibile alla luminanza che al colore.
>> - **HSL** (tonalità, saturazione, luminosità) è più intuitivo per costruire palette. Gli schemi si costruiscono sul cerchio cromatico: monocromatico, analogo, complementare, triadico.
>> - Il colore ha significati che dipendono dal contesto. Si passa dalla palette ai **ruoli** (sfondo, testo, primario, accento, errore…), gestiti con le **custom properties** CSS.
>> - **Contrasto** WCAG: almeno 4,5:1 per il testo normale, 3:1 per il testo grande e per gli elementi grafici. Daltonismo (circa 8% degli uomini, 0,4% delle donne): l'informazione non deve dipendere **solo** dal colore, servono anche testo, icone o forme.
>>
>> **Layout e gerarchia visiva**
>> - Il layout si progetta partendo da contenuti, obiettivi e priorità. La gerarchia visiva guida lo sguardo con dimensione, contrasto e posizione.
>> - Principi della Gestalt: **prossimità**, somiglianza, regione comune, **allineamento**; lo spazio bianco separa i gruppi.
>> - Si procede per gradi: wireframe (struttura) → mockup (aspetto) → prototipo (interazione). L'eye-tracking (heatmap, gaze plot) mostra come si esplora una pagina, per esempio con il pattern a F, e il layout può guidare lo sguardo. L'ordine di lettura dipende anche dalla lingua.
>> - L'ordine del documento HTML deve restare logico anche quando l'ordine visivo cambia con Grid o Flexbox, per l'accessibilità. Il layout va verificato con **contenuti realistici** (titoli lunghi, testi variabili).
>>
>> **Responsive design**
>> - **Mobile first**: si parte dalla versione più piccola e si aggiungono regole con `@media (min-width: …)`. Layout liquido con dimensioni flessibili (`%`, `fr`, `minmax`, `clamp`) e `<meta name="viewport" content="width=device-width, initial-scale=1">`.
>> - I breakpoint si scelgono **dove il contenuto si rompe**, non in base ai modelli di dispositivo. Molta flessibilità si ottiene anche senza breakpoint (Grid con `auto-fit`, `flex-wrap`).
>> - **Progressive enhancement**: prima un nucleo che funziona ovunque, poi i miglioramenti dove il browser li supporta. Bisogna considerare anche la modalità di interazione (touch o mouse, area minima dei bersagli, focus visibile) e verificare la pagina a più dimensioni.
