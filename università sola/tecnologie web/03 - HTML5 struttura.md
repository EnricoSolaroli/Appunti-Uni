[3_html_struttura](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/3_html_struttura.pdf>)

# HTML5 – Struttura della pagina

## Indice

1. **Introduzione e categorie di contenuto** (slide 1–2)
	- [[#Slide 1 – HTML5|Apertura della lezione]]
	- [[#Slide 2 – Argomenti|Le tre categorie: sectioning, phrasing, embedded]]
2. **Elementi di sectioning: la struttura della pagina** (slide 3–8)
	- [[#Slide 3 – Sectioning|Elenco degli elementi con funzione strutturale]]
	- [[#Slide 4 – `<section>`|Sezione come raggruppamento tematico]]
	- [[#Slide 5 – `<article>`|Contenuto indipendente e auto-contenuto]]
	- [[#Slide 6 – `<header>` e `<footer>`|Intestazione e piè di pagina di documento o sezione]]
	- [[#Slide 7 – `<nav>`|Blocchi di link di navigazione]]
	- [[#Slide 8 – `<aside>`|Contenuto collaterale e sidebar]]
3. **Heading e gerarchia dei titoli** (slide 9–12)
	- [[#Slide 9 – Heading|Rank da h1 a h6 e corrispondenza con l'annidamento]]
	- [[#Slide 10 – `<h1><h2><h3><h4><h5><h6>`|Esempio di sezioni annidate con h1 e h2]]
	- [[#Slide 11 – Prima domanda|Domanda 1: quale struttura di sezioni è corretta]]
	- [[#Slide 12 – Prima domanda (segue)|Opzioni errate: attributo headers e heading che contengono sezioni]]
4. **Elementi phrasing: il testo** (slide 13–18)
	- [[#Slide 13 – Phrasing|Elenco degli elementi di testo]]
	- [[#Slide 14 – `<p>`|Paragrafo: l'andata a capo non basta]]
	- [[#Slide 15 – `<br/>`|Interruzione di linea come parte del contenuto]]
	- [[#Slide 16 – `<div>`|Contenitore di blocco senza semantica]]
	- [[#Slide 17 – `<span>`|Contenitore inline senza semantica]]
	- [[#Slide 18 – Seconda domanda|Domanda 2: come marcare le righe di un indirizzo]]
5. **Contenuto principale e ruolo semantico del testo** (slide 19–20)
	- [[#Slide 19 – `<main>`|Un solo main per documento, contenuto caratterizzante]]
	- [[#Slide 20 – Ruolo del testo|em, strong, abbr, code e gli elementi deprecati i e b]]
6. **Contenuti embedded e fallback** (slide 21)
	- [[#Slide 21 – Embedded|Risorse importate nel documento e contenuto di fallback]]
7. **Immagini e testo alternativo** (slide 22–25)
	- [[#Slide 22 – `<figure>` `<figcaption>`|Immagine e didascalia raggruppate]]
	- [[#Slide 23 – `<img>`|Attributi obbligatori src e alt, formati ammessi]]
	- [[#Slide 24 – Un ragionamento su img|Quattro casi d'uso dell'alt, immagini decorative e funzionali]]
	- [[#Slide 25 – Una prima indicazione|Albero decisionale per scegliere l'alt]]
8. **Immagini complesse e descrizioni lunghe** (slide 26–31)
	- [[#Slide 26 – Immagini complesse|Grafici e infografiche: alt breve più descrizione estesa]]
	- [[#Slide 27 – Esempio|Grafico delle quote di utilizzo dei browser]]
	- [[#Slide 28 – Possibili strategie|Quattro strategie per la descrizione lunga]]
	- [[#Slide 29 – Esempio con `<figcaption>`|Descrizione dei dati nella didascalia]]
	- [[#Slide 30 – Esempio con link a pagina esterna|Didascalia con link alla descrizione estesa]]
	- [[#Slide 31 – Terza domanda|Domanda 3: alt del logo usato come link alla home]]
9. **Audio e video** (slide 32–35)
	- [[#Slide 32 – `<video>`|Video nativo in HTML5 e fine dei plug-in]]
	- [[#Slide 33 – `<video>`|Attributi controls e autoplay, source multipli, fallback]]
	- [[#Slide 34 – `<audio>`|Inclusione standard di un file audio]]
	- [[#Slide 35 – `<audio>`|Attributi e formati alternativi dell'audio]]
10. **Contenuti incorporati: iframe, object ed embed** (slide 36–40)
	- [[#Slide 36 – `<iframe>`|Incorporare un documento o una risorsa esterna]]
	- [[#Slide 37 – `<iframe>` e Youtube|Perché `<video>` non riproduce YouTube e come usare l'iframe]]
	- [[#Slide 38 – `<object>`|Oggetti e plug-in con alternative annidate]]
	- [[#Slide 39 – `<embed/>`|Elemento vuoto, senza alternative]]
	- [[#Slide 40 – `<object>` e `<embed/>`|Esempio a confronto: data e fallback contro src]]
11. **Riferimenti** (slide 41)
	- [[#Slide 41 – Riferimenti|Specifiche W3C e Living Standard]]

---

## Slide 2 – Argomenti

- HTML:
	- Elementi:
		- Sectioning
		- Phrasing
		- Embedded

*3 punti bonus – BONUS*

>> La lezione percorre le tre grandi categorie di contenuto di HTML5: gli elementi
>> **sectioning** (struttura e semantica della pagina), gli elementi **phrasing**
>> (il testo e il suo ruolo) e gli elementi **embedded** (contenuti esterni come
>> immagini, audio, video).

---

## Slide 3 – Sectioning

- Gli elementi della categoria **Sectioning** hanno **funzione strutturale**, ovvero dividono la pagina in parti con semantica (ruolo) diverso a seconda dell'elemento usato:
	- `<article>`
	- `<aside>`
	- `<figcaption>`
	- `<figure>`
	- `<footer>`
	- `<header>`
	- `<nav>`
	- `<section>`

![[TW03-s003-1.png|400]]

>> Lo schema a destra è la "mappa" usata in tutte le slide successive: ogni volta
>> viene evidenziato in rosso l'elemento appena introdotto, per mostrarne la
>> posizione tipica dentro il layout di una pagina.

---

## Slide 4 – `<section>`

- Definisce una **sezione** del documento
- Nella recommendation HTML5 del W3C: "*A section is a thematic grouping of content, typically with a heading*"
- Una home page potrebbe essere suddivisa in 3 parti:
	- una per l'intestazione,
	- una per il contenuto vero e proprio
	- una per le informazioni sui contatti

![[TW03-s004-1.png|194]]

>> `<section>` è il contenitore generico "con significato": si usa quando il
>> contenuto forma un gruppo tematico con un proprio titolo. Se serve solo un
>> contenitore per applicare uno stile, l'elemento giusto è `<div>`, non `<section>`.

---

## Slide 5 – `<article>`

- Definisce informazioni indipendenti e auto-contenute:
	- Un **articolo** dovrebbe essere un elemento con un suo senso proprio, che potrebbe essere letto in modo indipendente dal resto della pagina Web.
- Esempi di elementi che potrebbero essere `<article>`:
	- Post su un blog, un forum o un social network
	- Articolo di un quotidiano online

![[TW03-s005-1.png|189]]

>> Test pratico: se il contenuto ha senso estratto dalla pagina (per esempio in un
>> feed RSS o condiviso da solo), allora è un `<article>`; altrimenti è più
>> probabilmente una `<section>`.

---

## Slide 6 – `<header>` e `<footer>`

- `<header>` definisce l'**intestazione** di un documento o di una sua sezione;
- Può essere usato come contenitore di un contenuto di tipo introduttivo
- Possono essere presenti più `<header>` in ogni pagina Web
- `<footer>` definisce il **footer** di un documento o di una sua sezione
- Solitamente contiene le informazioni sull'autore del documento, le informazioni sul copyright, link ai termini d'uso, informazioni sui contatti, ecc
- Possono essere presenti più `<footer>` in ogni pagina Web

![[TW03-s006-1.png|192]]

>> `<header>` e `<footer>` sono relativi al loro contenitore: ogni `<section>` o
>> `<article>` può avere la propria intestazione e il proprio piè di pagina, non
>> solo il documento nel suo complesso.

---

## Slide 7 – `<nav>`

- Definisce un insieme di link di **navigazione** (menù o toolbar o altri set di link)

```html
<!DOCTYPE html>
<html>
…
  <body>
    <nav>
       <a href="/html/">HTML</a> |
       <a href="/css/">CSS</a> |
       <a href="/js/">JavaScript</a> |
       <a href="/jquery/">jQuery</a>
    </nav>
  </body>
</html>
```

![[TW03-s007-1.png|222]]

http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_nav

- es: breadcrumb menu (menu a briciole di pane)

>> `<nav>` va riservato ai blocchi di navigazione principali: non serve marcare
>> come `<nav>` ogni gruppo di link (per esempio quelli dentro un paragrafo di
>> testo). Le tecnologie assistive lo usano per saltare direttamente al menù.

---

## Slide 8 – `<aside>`

- Definisce un **contenuto a latere** rispetto a quelli principali (ma comunque correlati).
- Può essere utilizzato per contenere i contenuti di una barra laterale (sidebar), ma anche per contenuti (separati da quello principale) che sono collaterali, ma non si posizionano necessariamente a lato (per esempio citazioni o banner pubblicitari).

![[TW03-s008-1.png|229]]

http://www.w3schools.com/html/tryit.asp?filename=tryhtml5_aside

>> "A lato" è una nozione semantica, non grafica: la posizione visiva la decide
>> il CSS. Un `<aside>` può benissimo essere renderizzato in fondo alla pagina.

---

## Slide 9 – Heading

- Gli heading introducono i **titoli** delle diverse sezioni del documento:
	- Gli heading vanno da `<h1>` a `<h6>` a seconda della loro rilevanza (rank)
	- `h1` è quello con maggiore rank e deve rappresentare il titolo principale della sezione.
	- I titoli di rank inferiore devono intestare sottosezioni.
- Sezioni e heading si possono far corrispondere in molti modi diversi, ma noi scegliamo quello che meglio rispetta i principi definiti all'inizio, ovvero:
	- usare sezioni esplicite (sempre con elemento di sezione e titolo, mai solo il titolo)
	- Far combaciare il grado dell'intestazione con il livello di nidificazione previsto.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

>> La convenzione adottata nel corso è quindi: sezione di primo livello → `<h1>`,
>> sezione annidata di secondo livello → `<h2>`, e così via. Il rank dell'heading
>> "racconta" la profondità di nidificazione, non la dimensione del carattere.

---

## Slide 10 – `<h1><h2><h3><h4><h5><h6>`

- Un esempio, con `<h1>` e `<h2>`:

```html
<section>
   <h1>Linguaggi di Markup</h1>
   <p>L'insegnamento di Tecnologie Web introduce
    diversi linguaggi di markup tra cui....</p>
   ...
<section>
   <h2>XML</h2>
   <p>(Extensible Markup Language) è un meta-
     linguaggio di markup, progettato per lo
     scambio e la interusabilità di documenti
     strutturati su Internet. </p>
 </section>
</section>
```

>> Nota: nella slide la `<section>` interna è aperta ma il tag di apertura è
>> scritto sulla stessa colonna di quello esterno; l'annidamento corretto è
>> `<section>` esterna (con `<h1>`) che contiene la `<section>` interna (con `<h2>`).

---

## Slide 11 – Prima domanda

**DOMANDA 1:**

Quale struttura descrive correttamente una sezione intitolata «Principale» con due sottosezioni intitolate «Uno» e «Due»:

- ❑
```html
<section>
<h1> Principale </h1>
<section> <h1> Uno </h1> </section>
<section> <h1> Due </h1> </section>
</section>
```
- ❑
```html
<section>
<h1> Principale </h1>
<section> <h2> Uno </h2> </section>
<section> <h2> Due </h2> </section>
</section>
```

>> Entrambe le strutture sono valide per il parser HTML5, ma secondo il criterio
>> enunciato nella slide 9 (far combaciare il rank con il livello di nidificazione)
>> la risposta corretta è la seconda: `<h1>` per la sezione principale e `<h2>`
>> per le due sottosezioni.

---

## Slide 12 – Prima domanda (segue)

**DOMANDA 1:**

Quale struttura descrive correttamente una sezione intitolata «Principale» con due sottosezioni intitolate «Uno» e «Due»:

- ❑
```html
<section headers = "Principale" >
  <section headers = "Uno" ></section>
  <section headers = "Due" ></section>
</section>
```
- ❑
```html
<h1> Principale <section>
<h2> <section> Uno </section> </h2>
<h2> <section> Due </section> </h2>
</section></h1>
```

>> Entrambe queste due opzioni sono sbagliate: `headers` non è un attributo di
>> `<section>` (esiste solo sulle celle di tabella `<td>`/`<th>`), e nella seconda
>> gli elementi di sezione sono annidati dentro gli heading, mentre deve valere
>> l'opposto: l'heading sta dentro la sezione.

---

## Slide 13 – Phrasing

- Nella categoria **Phrasing** rientra il contenuto che rappresenta il testo del documento.
- In particolare introduciamo gli elementi:
	- `<p>`
	- `<br/>`
	- `<div>`
	- `<span>`
	- `<main>`
	- Altri elementi che definiscono il ruolo del testo come: `<b>`, `<strong>`, `<em>`, `<abbr>`, `<code>`, `<var>`, etc …

---

## Slide 14 – `<p>`

- L'elemento inserisce un **paragrafo testuale**.
- **L'andata a capo non basta!**
- <u>Va utilizzato solo quando non esiste un elemento più specifico o semanticamente più idoneo per descrivere quel testo.</u>
- Esempio:

```html
<section>
   <p> Primo paragrafo di testo.</p>
   <p> Secondo paragrafo di testo.</p>
   <p> Terzo paragrafo di testo.</p>
</section>
```

>> "L'andata a capo non basta" significa che nel sorgente HTML gli a capo e gli
>> spazi multipli vengono collassati in un singolo spazio: per separare davvero
>> due paragrafi serve il markup `<p>`, non la formattazione del file.

---

## Slide 15 – `<br/>`

- L'elemento `<br/>` rappresenta una **interruzione di linea** (**line break**):
	- È un elemento vuoto, va scritto con /
	- Deve essere usato solo per interruzioni che sono effettivamente parte del contenuto, come negli indirizzi, nelle <u>poesie</u> o nel codice, NON per ottenere effetti grafici.
- Esempio

```html
<p>Nel mezzo del cammin di nostra vita<br/>
mi ritrovai per una selva oscura<br/>
ché la diritta via era smarrita.</p>
```

>> Differenza chiave rispetto a `<p>`: `<br/>` spezza una riga *dentro* lo stesso
>> blocco di testo, mentre `<p>` crea blocchi distinti. Usare `<br/>` ripetuti per
>> "fare spazio" è un uso presentazionale, che va lasciato al CSS.

---

## Slide 16 – `<div>`

- L'elemento `<div>` (elemento di blocco) <u>non ha alcun significato proprio</u> ma ha lo scopo di **rappresentare gli elementi in esso annidati e specificare per loro gli attributi** `class`, `lang` e `title`.
	- Viene usato soprattutto per definire l'attributo `class`, ovvero dare a un gruppo di elementi consecutivi uno stesso **stile di presentazione**.
	- La caratteristica presentazionale non deve avere una connotazione semantica (per esempio di sezione) perché in questo caso al posto di `div` dovrebbe essere usato un elemento con semantica (esempio `<section>`).

![[TW03-s016-1.png|125]]

>> La vignetta scherza proprio sulla mancanza di semantica del `<div>`:
>> «Did you hear the one about the &lt;div&gt; who sucked with women? – He had no .class!»
>> (gioco di parole fra "class" come attributo HTML e "class" come classe/stile personale).

---

## Slide 17 – `<span>`

- L'elemento `<span>` opera in modo simile all'elemento `<div>` ma a livello di testo (è un elemento inline).
	- Non ha alcun significato proprio ma ha lo scopo di **rappresentare il testo in esso contenuto e specificare per esso gli attributi** `class`, `lang` e `title`.
	- Viene usato soprattutto per definire l'attributo `class`, ovvero dare a una porzione di testo consecutivo uno stesso **stile di presentazione**.
	- La caratteristica prestazionale, non deve avere una connotazione semantica (per esempio di enfasi) perché in questo caso al posto di `span` dovrebbe essere usato un elemento con semantica (esempio `<em>`)

>> Regola mnemonica: `<div>` è il contenitore neutro di *blocco*, `<span>` è il
>> contenitore neutro *inline*. Entrambi si usano solo quando nessun elemento
>> semantico è appropriato.

---

## Slide 18 – Seconda domanda

**DOMANDA 2:**

Per inserire in una sezione l'indirizzo a lato, è opportuno utilizzare:

- ❑ delle andate a capo
- ❑ dei paragrafi con `<p></p>`
- ❑ delle andate a capo con `<br/>`
- ❑ una immagine

Indirizzo mostrato a lato:

```
Silvia Mirri
Alma Mater Studiorum – Università di Bologna
Campus di Cesena
Via dell'Università 50 – Cesena (FC)
Tel. +39 0547 338892
```

>> La risposta corretta è la terza: le righe di un indirizzo formano un unico
>> blocco di testo, quindi vanno separate con `<br/>` (interruzioni di linea che
>> fanno parte del contenuto) e non con paragrafi distinti; le semplici andate a
>> capo nel sorgente verrebbero ignorate, e un'immagine renderebbe il testo
>> inaccessibile e non selezionabile.

---

## Slide 19 – `<main>`

- l'elemento `<main>` raggruppa gli elementi di struttura (come `<section>` o `<article>`) che rappresentano il <u>contenuto principale del documento</u>:
	- il contenuto deve essere caratterizzante di quel documento, quindi vanno esclusi i contenuti che sono ripetuti in diverse pagine (come per esempio le barre di navigazione).
	- ogni documento deve avere un solo `<main>`.

>> `<main>` è il bersaglio tipico dei link "salta al contenuto": identificando in
>> modo univoco il corpo della pagina, permette a chi usa screen reader o
>> navigazione da tastiera di scavalcare header e menù ripetuti.

---

## Slide 20 – Ruolo del testo

- Elementi che attribuiscono **ruoli** al testo:
	- `<i>`, **testo in voce alternativa**: termini tecnici, frasi idiomatiche, pensieri, testo in altra lingua **[DEPRECATO!]** -> non si usa più!!! evitali!!
	- `<em>`, **stress emphasis**: un testo o una frase che si pronuncia in modo differente dal resto.
	- `<strong>`, **strong importance**: testo importante
	- `<b>`, **offset text (conventionally styled in bold)**: testo più visibile **[DEPRECATO!]**.
	- `<abbr>`, **abbreviazioni o acronimi**. L'attributo `title` è usato per inserire la versione espansa del termine.
	- `<code>`, **code, porzioni di codice** (anche HTML, ovviamente)
- Esistono altri elementi di questo tipo, che trovate nelle specifiche

>> `<i>` e `<b>` sono marcati come deprecati perché puramente presentazionali:
>> vanno sostituiti da `<em>` e `<strong>`, che esprimono il *significato*
>> (enfasi e importanza) lasciando al CSS la resa grafica. Nota che `<em>` e
>> `<strong>` sono anche interpretati dagli screen reader, che ne modificano
>> l'intonazione.

---
## Slide 21 – Embedded

- Il contenuto **Embedded** ha lo scopo di importare risorse o contenuto dentro il documento
- Gli embedded fanno riferimento all'area dei sistemi multimediali
- Alcuni elementi embedded prevedono un contenuto **fallback**, che viene usato quando la risorsa esterna non può essere utilizzata (e.g. se ha un formato non supportato).
- Vediamo:
	- `<img>`
	- `<audio>`
	- `<video>`
	- `<iframe>`
	- `<embed>`
	- `<object>`

>> Il "fallback" è il contenuto che il browser mostra quando non riesce a usare la risorsa: per `<video>`/`<audio>` è il testo scritto dentro l'elemento, per `<img>` è l'attributo `alt`, per `<object>` sono gli `<object>` annidati. `<embed>` e `<iframe>` non ne prevedono.

---
## Slide 22 – `<figure>` `<figcaption>`

- `<figcaption>` definisce la **didascalia** di una immagine
- `<figure>` raggruppa l'immagine e la sua didascalia
- Esempio

```html
<figure>
  <img src="pic_mountain.jpg" alt="Pulpit Rock" width="304" height="228"/>
  <figcaption>Fig.1 - Pulpit Rock, Norvegia.</figcaption>
</figure>
```

![[TW03-s022-1.png|257]]

https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_figcaption

>> Differenza chiave: `alt` è l'alternativa all'immagine (la sostituisce quando non è disponibile), mentre `figcaption` è una didascalia che accompagna l'immagine e resta visibile a tutti. Non sono la stessa cosa e non si escludono a vicenda.

---
## Slide 23 – `<img>`

- Le **immagini inline** sono definite attraverso l'elemento `<img>`.
- Gli attributi obbligatori sono:
	- `src`: specifica l'URL del **file contenente l'immagine**. L'URL deve fare riferimento a una "*non-interactive, optionally animated, image resource that is neither paged nor scripted*". Sono consentiti i formati PNG, GIF, JPEG e alcuni tipi (non paginati, non scriptati) di PDF, XML, SVG
	- `alt`: **testo alternativo**, viene visualizzato in caso il browser non riesca a mostrare l'immagine e in caso di immagini disabilitate. È indispensabile agli utenti non vedenti (ne riparleremo nella lezione sull'accessibilità). Il suo obiettivo è quello di fornire la stessa informazione che si vuole veicolare con l'immagine, quindi non deve necessariamente descrivere l'immagine ma il suo senso, la sua informazione

>> "Non paginato" significa che la risorsa non è divisa in pagine (un PDF multipagina non va bene come `src` di `<img>`); "non scriptato" significa che non deve contenere codice eseguibile (per questo un SVG usato in `<img>` non esegue il suo JavaScript).

---
## Slide 24 – Un ragionamento su img

- Facciamo un primo ragionamento sulle immagini.
- **Gli attributi `src` e `alt` sono OBBLIGATORI**
- Ma l'alternativa serve sempre? (**SI**)
	- ?
	  ![[TW03-s024-1.png|240]]
	  ```html
	  <img src="megaphone.gif" alt=""/>
	  ```
	- ?
	  ![[TW03-s024-2.png|262]]
	  ```html
	  <img src="megaphone.gif" alt="how can we help? 1.866.507.005"/>
	  ```
	- ?
	  ![[TW03-s024-3.png|164]]
	  **SONO LINK!**
	  ```html
	  <a href="…URL…"><img src="printer.gif" alt="stampa"/></a>
	  ```
	- ?
	  ![[TW03-s024-4.png|153]]
	  ```html
	  <img src="cat.gif" alt=""/>
	  ```

>> La logica dei quattro casi: nel primo il testo è già scritto accanto all'immagine, quindi l'immagine è ridondante e va marcata come decorativa con `alt=""`; 
>> nel secondo il testo è *dentro* l'immagine, quindi l'`alt` deve riportarlo;
>> nel terzo l'immagine è il contenuto di un link, quindi l'`alt` deve descrivere l'**azione** ("stampa"), non l'icona; 
>> nel quarto il gattino è puro ornamento, quindi `alt=""`.
>>
>> Attenzione: `alt=""` (vuoto) è diverso da `alt` assente. Con `alt=""` lo screen reader salta del tutto l'immagine; senza l'attributo, molti screen reader leggono il nome del file, che è la cosa peggiore.

---
## Slide 25 – Una prima indicazione

![[TW03-s025-1.png|358]]

>> Schema dell'albero decisionale: se l'immagine è **Decorative** si usa `alt=""` oppure la si sposta in CSS (background); se è **Informative** dipende dal tipo — *Picture*: un nome o una descrizione breve; *Text*: ripetere il testo parola per parola; *Complex Data*: fornire una panoramica (più la descrizione lunga altrove); *Symbol*: identificarne l'essenza o lo scopo; *Functional Image*: descrivere l'azione o la destinazione del link.

---
## Slide 26 – Immagini complesse

- Se l'immagine è complessa (come ad esempio grafici, diagrammi, infografiche o immagini che veicolano molte informazioni), va descritta in modo dettagliato e verboso che non possono essere riportate come contenuto dell'attributo `alt`
- Per questo motivo il W3C raccomanda sempre l'uso di `alt` per la descrizione breve e l'uso di strategie aggiuntive per una descrizione lunga che sia disponibile nella pagina oppure raggiungibile tramite un normale link

---
## Slide 27 – Esempio

![[TW03-s027-1.png|330]]

---
## Slide 28 – Possibili strategie

- Le possibili strategie sono basate su:
	- Uso di `<figcaption>`
	- Uso di testo affiancato all'immagine (magari con un `<p>`)
	- Uso di una tabella
	- Uso di un link che porti ad una pagina con la descrizione estesa del grafico

>> Tutte e quattro le strategie hanno un vantaggio comune: la descrizione lunga finisce nel testo della pagina, quindi è utile a chiunque (anche a chi cerca i dati o li vuole copiare), non solo a chi usa uno screen reader.

---
## Slide 29 – Esempio con `<figcaption>`

```html
<figure>
     <img src="browser-share.png"
     alt="Statistiche di uso dei
     browser"/>
     <figcaption>Percentuali di utilizzo dei
     browser: Chrome 57%, Safari 15%, IE 9%,
     Firefox 8%, Opera 5%, altro 6%.
     </figcaption>
</figure>
```

---
## Slide 30 – Esempio con link a pagina esterna

```html
<figure>
     <img src="browser-share.png"
     alt="Statistiche di uso dei
     browser"/>
     <figcaption>
          <a href="chart_description.html">
                Descrizione del grafico
          </a>
     </figcaption>
</figure>
```

---
## Slide 31 – Terza domanda

![[TW03-s031-1.png|500]]

**DOMANDA 3**:
Quale `alt` indichereste per il logo dell'Università di Bologna nell'intestazione delle pagine del sito Web dell'università? Il logo è associato ad un link che rimanda alla home pagine del sito:

- ❑ `""`
- ❑ `"Logo Unibo"`
- ❑ `"Università di Bologna"`
- ❑ `"Alma Mater Studiorum Università di Bologna"`

>> Qui l'immagine è *funzionale*: è il contenuto di un link verso la home page. L'`alt` deve quindi comunicare dove porta il link, non descrivere la grafica del logo. Per questo `""` e `"Logo Unibo"` non vanno bene (il link resterebbe senza testo accessibile o con un testo inutile), mentre l'ultima opzione è la denominazione completa dell'ateneo.

---
## Slide 32 – `<video>`

- L'elemento `<video>` definisce un modo standard per **includere un video** in una pagina Web
- Prima di HTML5, non esisteva uno standard per mostrare i video nelle pagine Web, che potevano essere mandati in play solo con un plug-in (come Flash)

```html
<video width="700px" controls>
   <source src="monster.mp4" type="video/mp4"/>
   <source src="monster.ogg" type="video/ogg"/>
   Il tuo browser non supporta il tag video
</video>
```

---
## Slide 33 – `<video>`

- L'attributo `controls` aggiunge i **controlli** per il video: play, pausa, volume, ecc
- L'attributo `autoplay` permette di far partire il video automaticamente
- L'attributo `width` definisce la larghezza del video; se non specificato il valore di `height` (altezza), viene calcolato mantenendo le proporzioni originali del video
- È possibile proporre il video in **diversi formati**, usando gli elementi `<source>`. Il browser utilizzerà il primo riconosciuto e supportato. **Tra i valori ammessi per l'attributo `src` del tag `<source>` NON ci sono i link ai video di YouTube**
- Il testo prima del tag di chiusura `</video>` viene mostrato nel **caso in cui il browser non supporti l'elemento** `<video>`

>> Per incorporare un video di YouTube non si usa `<video>` ma un `<iframe>` con l'URL di embed fornito da YouTube: `<video>` si aspetta un file video vero e proprio, non una pagina.

---
## Slide 34 – `<audio>`

- L'elemento `<audio>` definisce un modo standard per includere un audio in una pagina Web
- Anche per gli audio prima di HTML5 non esisteva uno standard per includerli nelle pagine Web, che potevano essere mandati in play solo con un plug-in (come Flash)

```html
<audio controls>
    <source src="loversroad.mp3"
     type="audio/mpeg"/>
    Il tuo browser non supporta il tag audio
</audio>
```

---
## Slide 35 – `<audio>`

- L'attributo `controls` aggiunge i **controlli** per l'audio: play, pausa, volume, ecc
- L'attributo `autoplay` permette di far partire l'audio automaticamente
- Il testo prima del tag di chiusura `</audio>` viene mostrato nel caso in cui il browser non supporti l'elemento `<audio>`
- È possibile proporre l'audio in diversi formati, usando gli elementi `<source>`. Il browser utilizzerà il primo riconosciuto e supportato

---
## Slide 36 – `<iframe>`

- L'elemento `<iframe>` incorpora nella pagina HTML un altro documento o una risorsa Web navigabile
- Viene comunemente usato per contenuti forniti da servizi esterni, come mappe e video

```html
<iframe
      src="https://www.example.com/page.html"
      title="Descrizione del contenuto incorporato">
</iframe>
```

>> L'`<iframe>` apre una "finestra" dentro la pagina in cui viene caricato un documento HTML completo e indipendente, con il suo DOM e i suoi script. L'attributo `title` non è decorativo: è ciò che lo screen reader annuncia per descrivere il contenuto incorporato, quindi va sempre messo.

---
## Slide 37 – `<iframe>` e Youtube

```html
<video controls>
       <source src="https://www.youtube.com/watch?v=VIDEO_ID">
</video>
```

- **Non funziona!** `<video>` richiede una risorsa video direttamente riproducibile dal browser, non una pagina/player YouTube

```html
<iframe width="560" height="315"
src="https://www.youtube.com/embed/VIDEO_ID"
title="YouTube video player"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" loading="lazy"
allowfullscreen>
</iframe>
```

- Permette di incorporare il player e il documento forniti dal servizio di YouTube

>> Il link `youtube.com/watch?v=…` è una **pagina web**, non un file video: per questo `<video>` non sa riprodurlo. L'URL `youtube.com/embed/…` è invece una pagina pensata apposta per stare dentro un `<iframe>` e contiene il player di YouTube. `loading="lazy"` rimanda il caricamento finché l'iframe non sta per entrare nella schermata; `allow` elenca le funzionalità del browser concesse al contenuto incorporato.

---
## Slide 38 – `<object>`

- Supportato da tutti i browser
- Definisce un oggetto incluso in un documento HTML
- Usato per includere audio, video, animazioni e plug-in (come applet Java, lettori PDF, player Flash) nelle pagine Web
- In modo simile a `<source>`, ammette versioni alternative dell'oggetto (con `<object>` annidati). Il primo formato riconosciuto e supportato è quello mandato in playout dal browser

---
## Slide 39 – `<embed/>`

- Supportato dalla maggior parte dei browser, è un elemento vuoto (non ha chiusura)
- Definisce un oggetto incluso in un documento HTML, come `<object>`
	- È stato supportato a lungo dai browser Web, anche se non è mai stato parte di uno standard HTML, prima di HTML5
	- Contrariamente a `<object>` non ammette alternative di alcun tipo

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_embed

---
## Slide 40 – `<object>` e `<embed/>`

```html
<object width="400px" height="300px"
    data="audio1.swf">
     <p>
          Il browser non supporta questo file
     </p>
  </object>
```

```html
 <embed width="400px" height="300px"
    src="audio1.swf"/>
```

>> Le due righe cerchiate nella slide mostrano la differenza chiave: `<object>` indica la risorsa con **`data`** e ha un tag di chiusura, perché quello che sta fra i tag (qui il `<p>`) è il **fallback** mostrato se il browser non supporta il file; `<embed/>` usa **`src`**, è un elemento vuoto e non ha fallback.
>> Nota: i file `.swf` sono animazioni Flash, non più supportate dai browser dal 2021; l'esempio serve solo a mostrare la sintassi.

---
## Slide 41 – Riferimenti

- Vedi piattaforma
- Standard W3C: https://html.spec.whatwg.org/multipage/
- Living Standard: http://www.w3.org/TR/html5/dom.html#kinds-of-content

---
## Riassunto

>> **Le tre categorie di contenuto**
>> - HTML5 organizza gli elementi in categorie: **sectioning** (struttura semantica), **phrasing** (testo) ed **embedded** (risorse importate).
>>
>> **Sectioning**
>> - `<section>`: raggruppamento tematico di contenuto, "*typically with a heading*". Se serve solo un contenitore per lo stile si usa `<div>`.
>> - `<article>`: contenuto indipendente e auto-contenuto, che ha senso anche estratto dalla pagina (post, articolo di giornale).
>> - `<header>`/`<footer>`: intestazione e piè di pagina **del documento o di una sua sezione**; possono essercene più di uno per pagina.
>> - `<nav>`: insieme di link di navigazione principali. `<aside>`: contenuto collaterale (nozione semantica, non di posizione grafica).
>> - `<main>`: contenuto caratterizzante del documento, **uno solo per pagina**, esclusi i contenuti ripetuti come i menù.
>>
>> **Heading**
>> - Sei livelli da `<h1>` a `<h6>`; il rank indica la rilevanza, non la dimensione del carattere.
>> - Regola del corso: sezioni **sempre esplicite** (elemento di sezione + titolo) e **rank che combacia con il livello di nidificazione** (sezione esterna `<h1>`, sezione annidata `<h2>`…). L'heading sta dentro la sezione, mai il contrario; `headers` non è un attributo di `<section>`.
>>
>> **Phrasing**
>> - `<p>`: paragrafo; nel sorgente HTML a capo e spazi multipli vengono collassati, quindi "l'andata a capo non basta".
>> - `<br/>`: elemento vuoto per interruzioni che fanno **parte del contenuto** (indirizzi, poesie), non per effetti grafici.
>> - `<div>` (blocco) e `<span>` (inline): nessuna semantica propria, servono per `class`, `lang`, `title`; da evitare quando esiste un elemento semantico.
>> - Ruolo del testo: `<em>` (stress emphasis), `<strong>` (importanza), `<abbr>` (con `title` per l'espansione), `<code>`. `<i>` e `<b>` sono **deprecati** perché solo presentazionali.
>>
>> **Embedded e accessibilità delle immagini**
>> - Molti elementi embedded prevedono un **fallback**: `alt` per `<img>`, il testo interno per `<video>`/`<audio>`, gli `<object>` annidati; `<embed/>` e `<iframe>` non prevedono alternative.
>> - `<img>` ha due attributi **obbligatori**: `src` (PNG, GIF, JPEG e risorse non paginate né scriptate) e `alt`, che deve veicolare **l'informazione** dell'immagine, non descriverla.
>> - Immagine decorativa → `alt=""` (diverso da `alt` assente, che fa leggere il nome del file); immagine dentro un link → l'`alt` descrive **l'azione o la destinazione**; testo nell'immagine → riportarlo parola per parola.
>> - Immagini complesse (grafici, infografiche): `alt` breve + descrizione lunga tramite `<figcaption>`, testo affiancato, tabella o link a pagina esterna. `<figure>` raggruppa immagine e didascalia; `figcaption` non sostituisce `alt`.
>>
>> **Multimedia e oggetti**
>> - `<video>` e `<audio>`: `controls`, `autoplay`, più `<source>` (il browser usa il primo formato supportato); **non accettano link a YouTube** (serve un `<iframe>`).
>> - `<iframe>`: incorpora un altro documento o risorsa navigabile (mappe, player YouTube tramite l'URL `/embed/`); va sempre dato un `title` descrittivo.
>> - `<object>`: supportato da tutti i browser, usa l'attributo **`data`**, ha tag di chiusura e il contenuto interno fa da fallback. `<embed/>`: elemento **vuoto**, usa `src`, nessuna alternativa.
