[01-lab-html-css](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/lab/01-lab-html-css.pdf>)

# Laboratorio 1 – HTML e CSS

>> Esercitazione sugli argomenti delle note [[02 - HTML5]], [[03 - HTML5 struttura]], [[04 - HTML5 link, tabelle e liste]], [[05 - HTML5 form]] (parte HTML) e [[06 - CSS intro, box model e flexbox]], [[07 - CSS testo, colori e responsiveness]] (parte CSS).

## Indice

1. **Presentazione e organizzazione del laboratorio** (slide 1–4)
	- [[#Slide 1 – Esercitazione HTML|Introduzione all'esercitazione]]
	- [[#Slide 2 – Outline|Scaletta del laboratorio]]
	- [[#Slide 3 – Laboratorio - Organizzazione|Turni e contatti]]
	- [[#Slide 4 – Laboratorio - Esercitazioni|Svolgimento e soluzioni delle esercitazioni]]
2. **Strumenti di sviluppo: editor e XAMPP** (slide 5–9)
	- [[#Slide 5 – Strumenti di sviluppo – Visual Studio Code|Editor ammessi (VS Code, Atom, Notepad++)]]
	- [[#Slide 6 – Strumenti di sviluppo - Xampp|XAMPP: cos'è e a cosa serve]]
	- [[#Slide 8 – Xampp – Pannello di controllo|Pannello di controllo, Apache e MySQL]]
	- [[#Slide 9 – Xampp – Eventuali errori|Errore "port already in use" e porta 8080]]
3. **Validatori HTML e di accessibilità** (slide 10–11)
	- [[#Slide 10 – Strumenti di sviluppo – Validatore HTML|Validatore W3C]]
	- [[#Slide 11 – Strumenti di sviluppo – Validatore Accessibilità|Validatore di accessibilità (MAUVE, AChecker)]]
4. **Esercizi HTML** (slide 12–16)
	- [[#Slide 12 – Parte 1 - HTML|Parte 1: HTML]]
	- [[#Slide 13 – Esercizio 01|Analisi del codice generato da un LLM]]
	- [[#Slide 14 – Esercizio 02|Pagina contatti]]
	- [[#Slide 15 – Esercizio 03|Pagina di login]]
	- [[#Slide 16 – Esercizio 04|Pagina archivio]]
5. **CSS della home con approccio mobile first** (slide 17–22)
	- [[#Slide 17 – Parte 2 - CSS|Parte 2: CSS]]
	- [[#Slide 18 -> 22 – Esercizio 05|Esercizio 05: foglio di stile mobile first]]
		- Colori, font e menu
		- Stile degli articoli e pulsante "Leggi tutto"
		- Sidebar, link e liste senza marcatori
		- Layout desktop con media query e Flexbox
6. **CSS di tabella e form** (slide 23–24)
	- [[#Slide 23 – Esercizio 06|Stile della tabella contatti]]
	- [[#Slide 24 – Esercizio 07|Stile del form di login]]
7. **Domanda bonus e riferimenti** (slide 25–27)
	- [[#Slide 25 – Domanda 1|Quale codice HTML è valido (opzioni 1–2)]]
	- [[#Slide 26 – Domanda 1 (segue)|Opzioni 3–4 e risposta]]
	- [[#Slide 27 – Riferimenti|Riferimenti]]

---
## Slide 1 – Esercitazione HTML

*1 punto bonus* — *BONUS*

*lab uno*

---
## Slide 2 – Outline

- Laboratorio:
	- Organizzazione
	- Esercitazioni
- Strumenti di sviluppo:
	- Xampp
	- Editor (eg: Visual Studio Code)
	- Validatore HTML
	- Validatore di accessibilità
- Esercizi
	- Struttura HTML

---
## Slide 3 – Laboratorio - Organizzazione

- Divisione del laboratorio in due turni:
	- Primo turno dalle 9 alle 11
	- Secondo turno dalle 11 alle 13
- Ogni giovedì pubblicheremo i due turni su Virtuale, indicando il turno assegnato ad entrambi i gruppi (A-L e M-Z)
- Per qualsiasi domanda potete scrivere a:
	- giovanni.delnevo@unibo.it , kelvin.olaiya@unibo.it

---
## Slide 4 – Laboratorio - Esercitazioni

- Le esercitazioni riguarderanno gli argomenti trattati a lezione.
- Ogni esercitazione è composta da un insieme di esercizi che svolgeremo insieme.
- Faremo delle pause durante lo svolgimento in modo da correggere eventuali errori.
- Le soluzioni delle esercitazioni saranno pubblicate a partire dal giorno successivo sulla piattaforma Virtuale.
- Le esercitazioni sono calibrate per essere completate entro le ore di laboratorio. Nel caso in cui non riusciste a terminarle, è **caldamente** consigliato terminarle a casa, **prima** del laboratorio successivo.

---
## Slide 5 – Strumenti di sviluppo – Visual Studio Code

- Visual Studio Code è un editor di testo sviluppato da Microsoft, rilasciato nel 2015.
- In alternativa, è possibile utilizzare Atom o Notepad++.
- Consigliamo l'utilizzo di uno di questi tre strumenti in quanto saranno le uniche opzioni durante l'esame.

>> Conviene quindi abituarsi fin da subito a scrivere HTML/CSS "a mano" senza estensioni di autocompletamento avanzato o assistenti AI: all'esame si avrà solo l'editor.

---
## Slide 6 – Strumenti di sviluppo - Xampp

- XAMPP è un solution stack free, open source e cross-platform.
- Lo useremo **nelle prossime esercitazioni** per eseguire codice PHP in locale.
- Potete scaricarlo al seguente link https://www.apachefriends.org/it/index.html
- Nelle macchine di laboratorio è già installato. Se volete usare i vostri pc, installatelo, **NON ORA**, ma per le prossime lezioni.

>> L'acronimo XAMPP sta per: X (cross-platform), **A**pache (web server), **M**ariaDB/MySQL (DBMS), **P**HP, **P**erl. In pratica fornisce in un unico pacchetto tutto lo stack server necessario per sviluppare e provare in locale applicazioni web dinamiche.

---
## Slide 7 – Xampp - Installazione

- Una volta installato, lanciate l'applicazione e dovrebbe aprirsi il pannello di controllo.

![[TWL01-s007-1.png|550]]

---
## Slide 8 – Xampp – Pannello di controllo

- Dal pannello di controllo è possibile gestire tutti i moduli installati all'interno di XAMPP.
- Ci sono diversi moduli installati, noi useremo soltanto:
	- Apache: come webserver;
	- MySQL: come DBMS.
- Provate ad avviare sia Apache che MySQL e, a visitare i seguenti link:
	- http://localhost/
	- http://localhost/phpmyadmin/

>> I file serviti da Apache all'indirizzo `http://localhost/` si trovano nella cartella `htdocs` dell'installazione di XAMPP (es. `C:\xampp\htdocs`): una cartella `htdocs/lab1` sarà raggiungibile come `http://localhost/lab1/`. phpMyAdmin è l'interfaccia web per gestire i database MySQL.

---
## Slide 9 – Xampp – Eventuali errori

- L'errore più frequente è quello di «*port already in use*»
- In questo caso è necessario andare a modificare il file `httpd.conf` di Apache.
- Dal pannello di controllo di XAMPP è sufficiente cliccare su «`config`» in corrispondenza di Apache e selezionare dal menù «`httpd.conf`»
- Una volta aperto il file, è necessario cambiare la direttiva *Listen* inserendo `8080` al posto di `80`.
- NB: tutte le volte che si accederà a `localhost` sarà necessario specificare la porta. Ad esempio, i link precedenti diventeranno:
	- http://localhost:8080
	- http://localhost:8080/phpmyadmin/

>> La modifica in `httpd.conf` è la riga:
>>
>> ```apache
>> Listen 8080
>> ```
>>
>> (al posto di `Listen 80`). Conviene aggiornare anche `ServerName localhost:8080`. L'errore nasce perché un altro programma (es. Skype, IIS, un altro web server) occupa già la porta 80; su Windows si può verificare chi la usa con il pulsante *Netstat* del pannello.

---
## Slide 10 – Strumenti di sviluppo – Validatore HTML

- All'indirizzo https://validator.w3.org/ trovate il validatore html del W3C.
- È buona norma utilizzarlo per validare **ogni** pagina `html` che scrivete in quanto una pagina visualizzata correttamente, potrebbe comunque non essere valida.
- Sarà disponibile anche durante l'esame. Verranno tolti punti per codice non valido.

>> I browser sono molto tolleranti: correggono silenziosamente tag non chiusi, annidamenti errati, attributi mancanti. Per questo "si vede bene" non implica "è valido". Il validatore permette di caricare il file (*Validate by File Upload*) o incollare direttamente il codice (*Validate by Direct Input*).

---
## Slide 11 – Strumenti di sviluppo – Validatore Accessibilità

- All'indirizzo https://mauve.isti.cnr.it/ trovate il validatore per l'accessibilità.
- È buona norma utilizzarlo per controllare l'accessibilità di **ogni** pagina `html` che scrivete.
- Durante l'esame, vi metteremo a disposizione Achecker. Poi vedremo anche quello. Verranno tolti punti per codice non valido.

>> Errori di accessibilità tipici: immagini senza attributo `alt`, campi di form senza `<label>` associata (`for`/`id`), mancanza dell'attributo `lang` su `<html>`, gerarchia dei titoli (`h1`…`h6`) che salta livelli, contrasto insufficiente tra testo e sfondo.

---
## Slide 12 – Parte 1 - HTML

---
## Slide 13 – Esercizio 01

- Abbiamo usato un LLM, dando in input il file `screen/mobile/home.png`, chiedendo il relativo codice HTML, che trovate nel materiale dell'esercitazione.
- Lo analizzeremo insieme, cercando di capire eventuali errori o imprecisioni.
- Il codice deve essere ovviamente valido ed accessibile!

>> Cose da controllare nel codice generato: presenza di `<!DOCTYPE html>`, `lang` su `<html>`, `<meta charset>` e `<title>`; uso corretto dei tag semantici (`header`, `nav`, `main`, `article`, `aside`, `footer`); `alt` significativi sulle immagini; titoli in ordine gerarchico; nessun `id` duplicato. Poi passare tutto al validatore W3C e a quello di accessibilità.

---
## Slide 14 – Esercizio 02

- Dato il file `contatti.png`, scrivere il relativo codice HTML nel file `contatti.html` e collegarlo alla pagina principale dell'***esercizio1***

>> Il collegamento si fa aggiungendo una voce al menu di navigazione della pagina principale, es. `<a href="contatti.html">…</a>`, e (per coerenza) lo stesso menu nella nuova pagina. Se nel mockup compare una tabella, usare `<table>` con `<caption>`/`<th scope="col">` per le intestazioni, in modo che sia accessibile.

---
## Slide 15 – Esercizio 03

- Dato il file `login.png`, scrivere il relativo codice HTML nel file `login.html` e collegarlo alla pagina principale.

>> Per il form: `<form>` con `action`/`method`, ogni `<input>` con un `id` e una `<label for="...">` corrispondente; usare i `type` appropriati (`email`/`text`, `password`, `submit`).

---
## Slide 16 – Esercizio 04

- Dato il file `archivio.png`, scrivere il relativo codice HTML nel file `archivio.html` e collegarlo alla pagina principale.

---
## Slide 17 – Parte 2 - CSS

---
## Slide 18 -> 22 – Esercizio 05

- A partire dal file `index.html`, aggiungere un foglio di stile in modo da ottenere il layout e lo stile riportati negli screenshot `screen/mobile/home.png` e `screen/desktop/home.png`.
- Utilizzare un approccio mobile first.
- Nelle slide successive sono riportate alcune indicazioni di massima.

>> *Mobile first* significa: le regole "base" del CSS descrivono il layout per schermi piccoli; le modifiche per schermi più grandi si aggiungono dopo, dentro media query con `min-width`, es. `@media screen and (min-width: 768px) { ... }`. Il foglio va collegato nell'`<head>` con `<link rel="stylesheet" href="...">`, e serve `<meta name="viewport" content="width=device-width, initial-scale=1">` perché il layout mobile funzioni sui dispositivi reali.

- Il body deve avere come colore di sfondo #f3f4f6, mentre header e footer devono avere sfondo #1f2937.
- Utilizzare Arial come font principale.
- Il menu deve avere margini orizzontali del 5%. Le relative voci devono occupare il 45% dello spazio disponibile.
- Le voci del menu devono avere sfondo #374151, mentre al passaggio del mouse e per la pagina corrente lo sfondo deve diventare #2563eb.

>> Proprietà utili: `background-color`, `font-family: Arial, sans-serif` (sempre con un font generico di fallback), `margin: 0 5%`. Per le voci al 45% si può rendere la lista un contenitore flex (`display: flex; flex-wrap: wrap;`) e dare ai `li` `width: 45%` (o `flex-basis: 45%`). Per lo stato: `nav a:hover` e una classe per la pagina corrente (es. `.active`/`.current`, oppure `aria-current="page"` selezionabile con `[aria-current="page"]`).

- Il contenuto principale deve avere margini orizzontali del 5%.
- Ogni articolo deve avere:
	- sfondo bianco;
	- bordo #d1d5db;
	- angoli arrotondati;
	- una leggera ombra;
	- un'immagine di anteprima alta al massimo 200px.
- Titoli e testo devono utilizzare colori coerenti con quelli mostrati nello screenshot.
- In fondo all'articolo deve essere presente il link Leggi tutto, visualizzato come un pulsante blu.

>> Proprietà utili: `border: 1px solid #d1d5db`, `border-radius`, `box-shadow` (es. un'ombra con offset piccolo e colore semi-trasparente `rgba(...)`), `max-height: 200px` sull'immagine (insieme a `width: 100%` e `object-fit: cover` per non deformarla). Il link "pulsante" si ottiene con `display: inline-block`, `padding`, `background-color` blu, testo bianco, `text-decoration: none` e `border-radius`.

- La sidebar deve avere lo stesso stile generale degli articoli.
- I link devono essere blu e sottolinearsi al passaggio del mouse.
- Nei post popolari le immagini devono essere larghe 50px.
- Le liste di navigazione, sidebar e form non devono mostrare i marcatori.

>> Per riusare lo stile degli articoli basta raggruppare i selettori nella stessa regola (es. `article, aside { ... }`). Link: `a { text-decoration: none; }` e `a:hover { text-decoration: underline; }`. Marcatori: `list-style-type: none` (spesso insieme a `padding-left: 0` per eliminare il rientro).

- Per schermi con larghezza maggiore o uguale a 768px, il layout deve cambiare e diventare come quello mostrato nello screenshot desktop.
- Il contenuto principale e la sidebar devono essere affiancati utilizzando Flexbox.
- Il contenuto principale deve occupare il 50% della pagina e la sidebar il 25%.
- La sidebar deve iniziare in corrispondenza del primo contenuto del main.
- Il menu deve essere disposto su un'unica riga.

>> Impostazione: `@media screen and (min-width: 768px) { ... }`; il contenitore comune di `main` e `aside` diventa `display: flex`, con `main { width: 50%; }` e `aside { width: 25%; }` (o `flex-basis`). Per allineare l'inizio della sidebar al primo articolo occorre che i margini verticali coincidano: attenzione a `align-items` (di default `stretch`) e ai margini del primo elemento/titolo del main. Per il menu su una riga basta che le voci non vadano più a capo (es. `flex-wrap: nowrap` o larghezze dei `li` ridotte/`flex: 1`).

---
## Slide 23 – Esercizio 06

- A partire dal file `contatti.html`, aggiungere nel foglio di stile le regole necessarie per ottenere il layout e lo stile riportati nello screenshot.
- La tabella deve occupare il 100% dello spazio disponibile.
- I bordi delle celle devono essere collassati.
- Le intestazioni devono avere uno sfondo leggermente diverso dalle altre celle.

>> Proprietà chiave: `table { width: 100%; border-collapse: collapse; }`, bordi su `th, td` (es. `border: 1px solid ...`) con un po' di `padding`, e un `background-color` diverso per `th`.

---
## Slide 24 – Esercizio 07

- A partire dal file `login.html`, aggiungere nel foglio di stile le regole necessarie per ottenere il layout e lo stile riportati nello screenshot.
- Le label e i campi di input devono essere allineati come mostrato nell'immagine.
- Il pulsante di invio deve avere lo stesso stile dei link Leggi tutto.

>> Per l'allineamento label/input si possono usare `display: block` (label sopra il campo) oppure un contenitore flex per affiancarli, dando alle label una larghezza fissa. Per riutilizzare lo stile del pulsante conviene definire una classe comune (es. `.button`) applicata sia ai link "Leggi tutto" sia all'`input type="submit"`, ricordando di azzerare il `border` di default del pulsante e impostare `cursor: pointer`.

---
## Slide 25 – Domanda 1

*BONUS*

Quale tra questi genera codice valido:

- [ ] Opzione 1

```html
<html>
  <head>
    <title>1</title>
  </head>
  <body>
    <div id="titolo">
      <h1>Titolo 1</h1>
    </div>

    <div id="centro">
      <ul>
        <li>item</li>
      </ul>
    </div>
  </body>
</html>
```

- [ ] Opzione 2

```html
<html lang="it">
  <head>
  </head>
  <body>
    <div id="titolo">
      <h1>Titolo 1</h1>
    </div>

    <div id="centro">
      <ul>
        <li>item</li>
      </ul>
    </div>
  </body>
</html>
```

>> Entrambe le opzioni di questa slide **non** sono valide: manca la dichiarazione `<!DOCTYPE html>` (il validatore W3C la richiede; senza di essa il browser entra in *quirks mode*). La seconda, inoltre, ha un `<head>` privo di `<title>`, che è obbligatorio.

---
## Slide 26 – Domanda 1 (segue)

*BONUS*

Quale tra questi genera codice valido:

- [ ] Opzione 3

```html
<!DOCTYPE html>
<html lang="it">
  <head>
    <title>1</title>
  </head>
  <body>
    <div id="titolo">
      <h1>Titolo 1</h1>
    </div>

    <div id="centro">
      <ul>
        <li>item</li>
      </ul>
    </div>
  </body>
</html>
```

- [ ] Opzione 4

```html
<!DOCTYPE html>
<html lang="it">
  <head>
  </head>
  <body>
    <div id="titolo">
      <h2>Titolo 1</h2>
    </div>

    <div id="centro">
      <ul>
        <li>item</li>
      </ul>
    </div>
  </body>
</html>
```

>> **Risposta corretta: l'opzione 3** (la prima di questa slide). È l'unica con `<!DOCTYPE html>` **e** con il `<title>` dentro `<head>`, che in HTML5 è obbligatorio. L'opzione 4 non è valida perché il `<head>` è vuoto (manca `<title>`); il fatto che usi `<h2>` invece di `<h1>` non è di per sé un errore di validità.
>>
>> Buona pratica in ogni caso: inserire `<meta charset="utf-8">` come primo elemento di `<head>`.

---
## Slide 27 – Riferimenti

- Vedi piattaforma
- https://code.visualstudio.com/
- https://www.apachefriends.org/it/index.html

---
## Riassunto

>> **Organizzazione del laboratorio**
>> - Due turni (9–11 e 11–13); ogni giovedì su Virtuale si indica il turno dei gruppi A-L e M-Z.
>> - Esercizi svolti insieme con pause di correzione; soluzioni su Virtuale dal giorno dopo; ciò che non si finisce va completato a casa prima del lab successivo.
>>
>> **Strumenti**
>> - Editor: VS Code, Atom o Notepad++, gli unici disponibili all'esame (niente assistenti AI).
>> - XAMPP (Apache, MariaDB/MySQL, PHP, Perl): servirà nei prossimi lab per PHP. Si usano Apache (web server) e MySQL (DBMS), su `http://localhost/` e `/phpmyadmin/`; i file stanno in `htdocs`.
>> - Errore "port already in use": in `httpd.conf` si cambia `Listen 80` in `Listen 8080`, poi si usa `localhost:8080`.
>> - Validatore W3C (validator.w3.org) e validatore di accessibilità (MAUVE; AChecker all'esame): una pagina che si vede bene può non essere valida. All'esame si perdono punti per codice non valido o non accessibile.
>>
>> **Esercizi HTML (01–04)**
>> - 01: correggere l'HTML generato da un LLM a partire da `home.png`, rendendolo valido e accessibile.
>> - 02–04: scrivere `contatti.html` (tabella), `login.html` (form con `label`/`for`/`id`) e `archivio.html` partendo dai mockup e collegarli alla home.
>>
>> **Esercizi CSS (05–07)**
>> - 05: stile della home **mobile first** (regole base per il mobile e `@media (min-width: 768px)` per il desktop); colori dati (#f3f4f6, #1f2937, #374151, hover/pagina corrente #2563eb), font Arial, menu con margini del 5% e voci al 45%, articoli con bordo, `border-radius`, `box-shadow`, immagine alta al massimo 200px, "Leggi tutto" come pulsante blu, liste senza marcatori.
>> - Su desktop main al 50% e sidebar al 25% affiancati con Flexbox, menu su una riga.
>> - 06: tabella al 100% con `border-collapse: collapse` e intestazioni con uno sfondo diverso. 07: form allineato con il pulsante di invio nello stile di "Leggi tutto".
>>
>> **Domanda bonus**
>> - Il codice valido è l'**opzione 3**, l'unica con `<!DOCTYPE html>` e `<title>` dentro `<head>`. Le opzioni 1–2 non hanno il DOCTYPE e le opzioni 2 e 4 non hanno il `<title>`. Usare `<h2>` al posto di `<h1>` non rende il codice non valido.
