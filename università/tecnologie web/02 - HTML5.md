[2_html_intro](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/2_html_intro.pdf>)

# HTML5

## Indice

1. **Markup, metamarkup e XML** (slide 3–6)
	- [[#Slide 3 – Markup|Che cos'è un linguaggio di markup]]
	- [[#Slide 4 – Tipi di markup|Markup procedurale vs descrittivo]]
	- [[#Slide 5 – Metamarkup e XML|Metalinguaggi di markup e nascita di XML]]
	- [[#Slide 6 – XML|XML vs HTML: vocabolario, regole, linguaggi XML-based]]
2. **Nascita di HTML e primo processo di standardizzazione** (slide 7)
	- [[#Slide 7 – Dal primo HTML a HTML5|CERN, IETF e la RFC 1866 (HTML 2.0, 1995)]]
3. **Le guerre dei browser** (slide 8–14)
	- [[#Slide 8 – Mosaic|Mosaic (1992), il primo browser di massa]]
	- [[#Slide 9 – Netscape|Netscape Navigator (1994) e il suo dominio]]
	- [[#Slide 10 – La prima guerra dei browser|Internet Explorer (1995) ed estensioni proprietarie]]
	- [[#Slide 11 – Fine della prima guerra|Vittoria di Microsoft e apertura del codice Netscape (1998)]]
	- [[#Slide 12 – Seconda guerra dei browser|Dal 2004 a Chrome (2008) e quote di mercato]]
	- [[#Slide 13 – La fine di un'era|Fine del supporto a Internet Explorer 11]]
	- [[#Slide 14 – Uso dei browser oggi|Quote d'uso attuali dei browser]]
4. **W3C, WHATWG e il Living Standard** (slide 15–21)
	- [[#Slide 15 – W3C|Frammentazione dello standard e fondazione del W3C]]
	- [[#Slide 16 – W3C e HTML|Stop a HTML, svolta su XHTML e XHTML2]]
	- [[#Slide 17 – WHAT WG|Nascita del WHATWG (2004) e Web Applications 1.0]]
	- [[#Slide 18 – HTML 5|Riapertura del WG (2007) e Recommendation HTML5 (2014)]]
	- [[#Slide 19 – HTML, the living standard|HTML come standard vivente]]
	- [[#Slide 21 – HTML, the living standard|Fork W3C/WHATWG e problema della conformità]]
5. **Eredità di XML: XHTML e JSON** (slide 22–23)
	- [[#Slide 22 – XML e HTML|Perché XHTML non ha vinto e cosa resta di XML]]
	- [[#Slide 23 – XML e JSON|JSON come formato dominante nelle Web API]]
6. **L'approccio del corso alla scrittura di HTML** (slide 24–27)
	- [[#Slide 24 – «Nostra» prospettiva|Criteri di qualità del codice HTML]]
	- [[#Slide 25 – Noi, separare|Separare contenuto e presentazione]]
	- [[#Slide 26 – Noi, strutturare|Usare gli elementi semantici di HTML5]]
	- [[#Slide 27 – Noi, accessibile|Accessibilità «by design»]]
7. **Elementi, tag e attributi** (slide 28–32)
	- [[#Slide 28 – Elementi HTML5|Categorie degli elementi e content model]]
	- [[#Slide 29 – Elementi HTML|Anatomia di un elemento: apertura, contenuto, chiusura]]
	- [[#Slide 30 – Tag e Attributi|Differenza tra tag, elemento e attributi]]
	- [[#Slide 31 – Attributi|Sintassi nome="valore" ed esempio con `<a href>`]]
	- [[#Slide 32 – Elementi di blocco e Elementi inline|Elementi di blocco e inline]]
8. **Categorie di contenuto HTML5** (slide 33)
	- [[#Slide 33 – Elementi e categorie|Flow, Phrasing, Embedded, Interactive, Metadata, Heading, Sectioning]]
9. **Struttura di una pagina HTML5** (slide 34)
	- [[#Slide 34 – Prima pagina|DOCTYPE, `<html>`, `<head>` e `<body>`]]
10. **Metadati nell'head** (slide 35–39)
	- [[#Slide 35 – Metadati|Elenco degli elementi di metadatazione]]
	- [[#Slide 36 – `<title>`|Titolo del documento e differenza da `<h1>`]]
	- [[#Slide 37 – `<link>`|Relazioni con altre risorse e collegamento al CSS]]
	- [[#Slide 38 – `<style>`|Stili interni al documento e cascata]]
	- [[#Slide 39 – `<meta>`|charset, description, keywords e SEO]]
11. **Verifica e riferimenti** (slide 40–41)
	- [[#Slide 40 – Domanda|Domanda bonus sui metadati]]
	- [[#Slide 41 – Riferimenti|Specifiche WHATWG e W3C]]


---
## Slide 1 – HTML5

HTML5

![[TW02-s001-1.png|200]]

*lezione due*

---
## Slide 2 – Argomenti

- HTML:
	- Definizione di Markup e XML
	- HTML e standardizzazione
	- Introduzione a HTML5
	- Categorie e content model HTML5
	- Metadata
---
## Slide 3 – Markup

- Un **linguaggio di markup** è un linguaggio (con una specifica **sintassi**) che consente di **annotare** un documento fornendone una interpretazione delle sue parti
- Il termine markup (o **marcatura**) deriva dal contesto della tipografia, dove si usava marcare con annotazioni le parti del testo che andavano evidenziate o corrette

![[TW02-s003-1.png|500]]

>> Nell'immagine si vede una bozza tipografica annotata a mano: i simboli a margine
>> (*Cap* = iniziale maiuscola, *less #* = ridurre lo spazio, *ital* = corsivo, *Bf* = grassetto)
>> non fanno parte del testo, ma dicono al tipografo come trattarlo. È esattamente
>> l'idea del markup: informazione *sul* contenuto, tenuta distinta dal contenuto stesso.

---
## Slide 4 – Tipi di markup

- Procedurale/descrittivo:
	- i linguaggi di markup di tipo **procedurale** indicano le **procedure di trattamento** del testo, il markup specifica le istruzioni che devono essere eseguite per visualizzare la porzione di testo referenziata (es. **TEX**)
	- i linguaggi di markup di tipo **descrittivo** identificano **strutturalmente il tipo di ogni elemento** del contenuto. Invece di specificare effetti grafici come l'allineamento o l'interlinea, ne individuo il **ruolo** all'interno del documento, per esempio specificando che un elemento è un titolo, un paragrafo, o una citazione, ecc. (es. **HTML, XML, SGML**, …)

>> Conseguenza pratica: con il markup descrittivo lo stesso documento può essere reso
>> in modi diversi (schermo, stampa, sintesi vocale) cambiando solo il foglio di stile,
>> perché il file dice *che cosa* è una parte e non *come* disegnarla.

---
## Slide 5 – Metamarkup e XML

- Il **metamarkup** consiste nel fornire regole di interpretazione del markup e permette di definire nuovi linguaggi di markup
- Un **metalinguaggio di markup**:
	- fornisce una sintassi definire le regole da applicare nella marcatura di un determinato tipo di documenti.
	- consente di **definire altri linguaggi di markup** descrivendone la grammatica.
- **XML** (Extensible Markup Language) è un linguaggio di markup, progettato per lo **scambio e la interusabilità di documenti strutturati su Internet**

---
## Slide 6 – XML

```html
<student id="123">
	<name>Matteo Casadei</name>
	<course>Computer Science and Engineering</course>
</student>
```

- HTML
	- ha un vocabolario predefinito (`<p>`, `<h1>`, `<article>`, ecc … )
	- Descrive la struttura e la semantica di documenti/applicazioni Web
- XML
	- Permette di definire elementi specifici per il dominio
	- Descrive dati/documenti strutturati
	- È stato fondamentale nello sviluppo degli standard Web degli anni 1990/2000
	- XML-based: un linguaggio di markup che segue le regole XML (tag correttamente annidati, ogni tag aperto deve essere chiuso, case-sensitive, valori degli attributi dichiarati tra le virgolette, un unico elemento radice).
	  Esempi: XHTML, SVG, SOAP

>> HTML5 è *permissivo* (il parser "ripara" tag non chiusi o annidati male), XML è
>> *rigido*: un solo errore di sintassi rende il documento non processabile
>> ("draconian error handling"). È proprio questa rigidità che XHTML voleva portare
>> nel Web e che, di fatto, ne ha decretato l'insuccesso.

---
## Slide 7 – Dal primo HTML a HTML5

- Quando nasce il WWW, Tim Berners Lee e gli altri ricercatori del CERN che ne definiscono il funzionamento mandano all'IETF le specifiche del **protocollo di livello applicazione** (HTTP, 1990) e del sistema di identificazione delle risorse (URI/URL, 1994).
- La prima versione di HTML viene anche essa proposta all'IETF che però produce il primo standard (**rfc1866, Hypertext Markup Language - 2.0**) solo nel 1995.
- Il processo di standardizzazione usato per Internet si dimostra poco inadeguato a seguire l'evoluzione di HTML ….

---
## Slide 8 – Mosaic

- Dopo il primo prototipo *presentato* dal CERN nel **1991**, nell'ottobre del **<u>1992</u>** il National Centre for Supercomputing Applications (NCSA) decise di realizzare una versione propria di WWW, **==Mosaic==**.
- Mosaic fu il primo browser a ottenere successo su larga scala e guidò lo sviluppo del web come killer application.
- Marc Andreessen, realizzatore del prototipo di Mosaic su Windows, fondò la Mosaic Corporation, poi rinominata **Netscape**, insieme a Jim Clark di Silicon Graphics.

![[TW02-s008-1.png|500]]

---
## Slide 9 – Netscape

- Nel 1994 esce **Netscape Navigator** che ha subito un successo assoluto e diventa rapidamente il browser più utilizzato:
	- La Netscape ha il passaggio più rapido tra la fondazione e la quotazione in borsa della storia, ed una delle quotazioni iniziali di maggior successo
	- Netscape diventa il browser più diffuso e lavora per mantenere competitività e controllo del mercato

![[TW02-s009-1.png|500]]

---
## Slide 10 – La prima guerra dei browser

- Microsoft, dopo una falsa partenza con Microsoft Network, abbraccia definitivamente e con energia la tecnologia Internet, e realizza un browser (**==Internet Explorer==, 1995**) ed un server (Microsoft Information Server)
- Sia Netscape che Microsoft introducono piccoli miglioramenti su HTML per migliorare l'esperienza dell'utente e diffondere maggiormente il proprio browser
- **Opera**, uscito anche esso nel 1994 resta sullo sfondo …

>> I "piccoli miglioramenti" erano ==tag proprietari== (es. `<blink>` di Netscape,
>> `<marquee>` di Microsoft): estensioni non standard che funzionavano solo su un
>> browser e che sono la causa diretta della frammentazione descritta nella slide 15.

---
## Slide 11 – Fine della prima guerra

- Alla fine dello scontro ==prevalse la **Microsoft**== perché scelse di distribuire il proprio browser, **Internet Explorer 3**, includendolo in Windows 95: cambiarlo diventò così un compito degli utenti, che nella maggior parte dei casi non lo fecero.
- Microsoft fu condannata nel 1997 per posizione dominante, continuando però a imporre precise specifiche che limitavano l'installazione di software di terze parti con il SO.
- Nel marzo **1998 Netscape ammette la disfatta**, rilasciando il codice sorgente della versione 5 di Navigator in open source e cercando di creare una comunità online.
- Nasce mozilla.org (prima versione di **Mozilla Firefox 2002**).

---
## Slide 12 – Seconda guerra dei browser

- A partire dal 2004 iniziarono ad affermarsi nuovi browser gratuiti (o addirittura open source) dotati di caratteristiche innovative e di un maggiore rispetto degli standard.
- Inizia la **seconda guerra dei browser**, che vede Explorer perdere completamente la propria egemonia a favore di **Google Chrome**, uscito nel **2008** è il browser più usato al mondo da aprile 2016.

| Browser                  | Quota |
| ------------------------ | ----- |
| Chrome                   | 66,1% |
| Safari                   | 13,0% |
| Internet Explorer & Edge | 4,6%  |
| Firefox                  | 3,9%  |
| Opera                    | 1,1%  |

https://www.w3counter.com/globalstats.php

---
## Slide 13 – La fine di un'era

- **Microsoft ha terminato il supporto a Internet Explorer 11** nelle app e nei servizi Microsoft 365 il **17 agosto 2021**, con ritiro definitivo a **giugno 2022**
- L'ultima versione di IE non è quindi più supportata dai servizi online di Microsoft (Office 365, OneDrive, Outlook)
- Il 30 novembre 2020 è **terminato il supporto di IE 11** sulla web app di Microsoft Teams

---
## Slide 15 – W3C

- L'effetto della battaglia sull'HTML nella prima guerra dei browser è una perdita di adesione allo **standard**:
	- Ci sono pagine compatibili solo con l'HTML di IE e altre solo con quello di Netscape
	- Il processo di standardizzazione è di importanza centrale e serve un presidio diverso da IETF
	- Berners-Lee e Cailliau fondano il **==W3C== (World Wide Web Consortium)**, con fondi della ricerca e dell'università. Berners-Lee viene nominato **presidente a vita.**
	- Successivamente, il W3C ha diretto lo sviluppo dei più importanti standard del Web: URI, HTTP, CSS, XML, WAI sull'accessibilità.
	- Tra il 1995 e il 1997 furono prodotte Recommendation che standardizzavano diverse estensioni dell'HTML originario, fino ad arrivare alla specifica di **HTML 4**.

	![[TW02-s015-1.png|200]]
		pop up presenti nei siti durante la guerra
---
## Slide 16 – W3C e HTML

- A quel punto il W3C decise di smettere di evolvere l'HTML e lavorare invece su linguaggi XML-based, a partire da XHTML 1.0 che era l'equivalente XML di HTML 4.
- Da quel momento l'interesse del W3C fu diretto a modifiche non particolarmente significative e a un lavoro di specifica (rivolto alla modularizzazione di XHTML, XHTML Modularization, e alla definizione di **XHTML2**) che non produsse nuovi standard di riferimento.

![[TW02-s016-1.png|700]]

---
## Slide 17 – WHAT WG

- Nel **2004**, Firefox e Opera proposero al W3C la riapertura del Working Group su HTML per lo sviluppo di nuove versioni del linguaggio. La proposta, ignorando volutamente XHTML e la rigida sintassi di XML, venne **bocciata dal W3C**.
- Venne allora formato un gruppo separato, chiuso e finanziato dalle società di software, il **Web Hypertext Application Technology (WHAT WG)** che sviluppò proposte (Web Application 1.0) che vennero effettivamente implementate da vari browser. Queste modifiche riguardavano HTML, CSS, DOM e Javascript, e cambiavano radicalmente alcuni aspetti di stretta competenza del W3C.

![[TW02-s017-1.png|400]]

Welcome to the WHATWG community — *Maintaining and evolving HTML since 2004*

---
## Slide 18 – HTML 5

- Nel **2007** il W3C dovette ammettere che queste modifiche avevano un impatto innegabile, riaprì il working group con tutti i membri del WHAT per creare una nuova versione di HTML, **HTML 5**.
- La Recommendation di specifica dell'HTML 5 (A vocabulary and associated APIs for HTML and XHTML) è stata pubblicata il 28 ottobre 2014 ora siamo alla specifica **5.3** del **28 Gennaio 2021** (ultimo aggiornamento del Living Standard: **11 Settembre 2023**)

![[TW02-s018-1.png|600]]

Cronologia (1990–2014):

| Ente | Tappe |
| --- | --- |
| CERN | HTML tags |
| IETF | HTML draft, HTML+ draft, HTML 2.0 WG, HTML3 proposal |
| W3C | HTML 3.2, HTML 4.01, XHTML draft, XHTML 1.0, XHTM 2.0 WG, HTML5 WG |
| WHATWG | WHATWG (dal 2004) |

---
## Slide 19 – HTML, the living standard

- Nonostante la presenza di una Recommendation (*This specification defines the 5th major revision of the core language of the World Wide Web: the Hypertext Markup Language, HTML*), la specifica di HTML è una attività che WHAT WG sta continuando definendo HTML come **standard vivente.**
- Il fatto che HTML non si stabilizzi è considerato **una feature, non un bug**.

![[TW02-s019-1.png|400]]

WHATWG — HTML: The Living Standard — *A technical specification for Web developers*

---
## Slide 20 – HTML, the living standard

- Il WHAT WG non si propone di stabilizzare una specifica:
	- *Because the specification is now a living document, we are today announcing two changes:*
		- *The HTML specification will henceforth just be known as "**HTML**".*
		- *The WHATWG HTML spec can now be considered a "**living standard**". It's more mature than any version of the HTML specification to date, so it made no sense for us to keep referring to it as merely a draft.*

---
## Slide 21 – HTML, the living standard

- La relazione tra lo sviluppo continuo del WHAT WG e la standardizzazione operata dal W3C non è semplice:
	- *The W3C also publishes parts of this specification as separate documents that are forked subsets of the "HTML Living Standard". There are numerous differences between the HTML Living Standard and the W3C forks; some minor, some major.*
- Così facendo **non c'è più una versione di riferimento** con cui confrontare le funzionalità dei browser e per gli sviluppatori verificare la conformità allo standard è molto complesso.
- Quello che si può verificare è che l'applicazione giri su tutti i browser …

>> Nota storica: dal 2019 W3C e WHATWG hanno firmato un accordo per cui il Living
>> Standard del WHATWG è l'unica versione autorevole di HTML e DOM; il W3C ha smesso
>> di pubblicare Recommendation HTML concorrenti. Resta però vero il punto della
>> slide: non esiste un numero di versione a cui ancorare i test di conformità.

---
## Slide 22 – XML e HTML

- **Non studieremo XML in questo corso**: è importante sapere che cos'è, dato che ha avuto un ruolo fondamentale nell'evoluzione del Web e incontrerete ancora tecnologie definite ***XML-based***
- L'idea era molto potente (e valida!): avere una sintassi generale con cui rappresentare in maniera rigorosa informazioni strutturate e definire vocabolari specifici
- Per questo motivo il W3C pensò che il futuro di HTML dovesse essere XML e si focalizzò su XHTML
- Ma il Web reale stava andando in una direzione differente che ha portato ad HTML5 e al concetto di Living Standard

>> XHTML è "HTML riscritto con le regole di XML": tag sempre chiusi (`<br/>`), minuscole obbligatorie, attributi sempre tra virgolette. Il problema pratico fu la severità di XML: un solo errore di sintassi avrebbe dovuto bloccare l'intero rendering della pagina ("draconian error handling"), cosa incompatibile con un Web pieno di pagine scritte a mano e imperfette. HTML5 sceglie la strada opposta: una specifica che definisce esattamente come il browser deve recuperare dagli errori.

---
## Slide 23 – XML e JSON

- **1990s/2000s:** XML sembrava destinato a diventare il formato universale per lo scambio di dati sul Web
- **Modern Web APIs:** per moltissimi casi JSON è diventato il formato dominante
- XML non è scomparso, ma attualmente JSON è di fatto diventato il formato dominante per lo scambio di dati nelle moderne API Web

>> Motivo pratico: JSON mappa direttamente sulle strutture dati dei linguaggi di programmazione (oggetti e array), è meno verboso e nel browser si analizza nativamente con `JSON.parse()`. XML resta però vivo dove serve validazione rigorosa, namespace o documenti misti testo/markup (SVG, MathML, RSS/Atom, SOAP, formati office).

---
## Slide 24 – «Nostra» prospettiva

- Noi scriveremo codice HTML:
	- Semanticamente corretto -> ogni tag ha un ruolo e un significato
	- Leggibile e consistente
	- Correttamente strutturato
	- Separando contenuto e presentazione
	- Accessibile
	- Conforme all'HTML Living standard
	
 > >più correttamente uso la semantica più il mio sito viene premiato, importante anche la concordanza fra metadati e contenuti.

---
## Slide 25 – Noi, separare

- **Separiamo** bene:
	- il contenuto (che è specificato dal markup HTML5)
	- dagli aspetti presentazionali, come la resa grafica (specificato dal foglio di stile, con CSS3)
- Esempio:
	- Si: Uso un elemento `<span>` per dare caratteristiche più evidenti ad una porzione di testo che non è titolo
	- No: uso un elemento `<h4>` per dare caratteristiche più evidenti a una porzione di testo che non è titolo
- Questo principio era applicabile anche con le precedenti versioni di HTML ma la maggiore strutturazione semantica del documento lo rende più agile

>> Il punto chiave: `<h4>` non è "testo un po' più grande e grassetto", è una *intestazione di quarto livello*. Se lo uso solo per l'effetto grafico sto mentendo al browser, agli screen reader e ai motori di ricerca sulla struttura del documento. `<span>` invece è semanticamente neutro: esiste proprio per agganciare uno stile CSS (o un attributo) a una porzione di testo senza attribuirle un ruolo.

---
## Slide 26 – Noi, strutturare

- HTML5 ha nuovi elementi:
	- che consentono di **strutturare** il contento attribuendo alle parti di documento una **semantica**. La pagina deve quindi essere divisa in parti a secondo del ruolo che queste hanno e questi ruoli (header, footer, ecc.) devono essere specificate.
	- che definiscono bene elementi di controllo, menù e strumenti di navigazione
- Noi li useremo più possibile:
	- Si: Uso un elemento `<article>` per indicare il contenuto specifico di un post di un blog
	- No: il contenuto specifico di un post di un blog lo inserisco in un paragrafo `<p>` generico, eventualmente distinto graficamente via CSS

>> Prima di HTML5 la struttura si faceva con `<div class="header">`, `<div class="nav">`, `<div class="footer">`: nomi di classe che significano qualcosa solo per chi ha scritto la pagina. Gli elementi semantici (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`) rendono quella stessa struttura leggibile in modo uniforme da browser, tecnologie assistive e crawler.

---
## Slide 27 – Noi, accessibile

- **Accessibilità** è "*la capacità dei sistemi informatici, nelle forme e nei limiti consentiti dalle conoscenze tecnologiche, di erogare servizi e fornire informazioni fruibili, senza discriminazioni, anche da parte di coloro che a causa di disabilità necessitano di tecnologie assistive o configurazioni particolari*"
- Ne parleremo meglio in future lezioni e in un seminario e specificheremo le linee guida per produrre pagine accessibili (i casi sì e no per l'accessibilità)
- **Introdurremo «by design» gli elementi e gli attributi HTML5 che consentono di realizzare pagine accessibili**

>> La definizione citata è quella della normativa italiana (Legge Stanca, 4/2004). "By design" significa che l'accessibilità non è una verniciatura finale ma una conseguenza dello scrivere markup semanticamente corretto: se uso gli elementi giusti, gran parte dell'accessibilità arriva gratis.

---
## Slide 28 – Elementi HTML5

- Ogni **elemento** HTML5 fa parte di una o più **categorie**, definiti per gruppi con caratteristiche simili:
	- Metadata, Flow, Sectioning, Heading, Phrasing, Embedded, Interactive.
- Le categorie per la Recommendation W3C sono riportati qui (con grafica interattiva): http://www.w3.org/TR/html5/dom.html#kinds-of-content
- Si noti che:
	- Altre categorie/sottocategorie possono essere usate per raggruppare elementi con scopi specifici (per esempio i controlli delle form).
	- Alcuni elementi possono avere caratteristiche uniche e non appartenere a nessuna categoria.
	- **Non usiamo la classificazione in modo rigido ma come strumento per introdurre i principali elementi**

>> Le categorie servono anche a un fine molto concreto: il *content model* di ogni elemento è espresso in termini di categorie (es. "`<p>` può contenere phrasing content"). Sono quindi le regole che dicono quali annidamenti sono validi e quali no.

---
## Slide 29 – Elementi HTML

- Un elemento HTML è definito da un tag di apertura, un contenuto e un tag di chiusura

![[TW02-s029-1.png|500]]

 cosa è il <u>markup</u> e cosa sono gli <u>ipertesti</u>? (possibile domande teorica esame)
- ipertesti: caratterizzati da link di collegamento fra varie pagine;
- markup: qualsiasi cosa che noi aggiungiamo ad un contenuto testuale per dare enfasi o aggiungere struttura.

>> Non tutti gli elementi hanno contenuto e tag di chiusura: gli elementi *void* (`<br>`, `<img>`, `<meta>`, `<link>`, `<input>`, `<hr>`) sono costituiti dal solo tag di apertura, perché il loro "contenuto" è interamente descritto dagli attributi.

---
## Slide 30 – Tag e Attributi

- I ==tag== sono il markup che aggiungiamo al contenuto per dare struttura, enfasi, per definire il ruolo che tale contenuto ricopre all'interno del documento Web (Es: `<p>`, `<h1>`, `<table>`)
- I tag possono essere corredati di uno o più ***==attributi==***, che servono per meglio specificare la funzione o la tipologia dell'elemento, per memorizzare dati o per arricchire di significato il contenuto

>> Attenzione alla distinzione di termini: il *tag* è la scrittura testuale (`<p>` … `</p>`), l'*elemento* è il nodo del documento che ne risulta (con il suo contenuto). Gli attributi si scrivono solo nel tag di apertura.

---
## Slide 31 – Attributi

- Sono coppie *nome-valore* separate dal carattere "**=**"
- I valori sono racchiusi tra virgolette ""
- Si scrivono lasciando uno spazio dopo il nome del tag di apertura (o dopo lasciando uno spazio dopo le virgolette di chiusura del valore del precedente attributo per lo stesso tag)
- Esempio:

```html
<a href="http://www.unibo.it">Università di Bologna</a>
```

>> Nella slide le virgolette appaiono "curve" (" ") per via della formattazione di PowerPoint: nel codice vero vanno usate le virgolette dritte (`"` oppure `'`), altrimenti diventano parte del valore dell'attributo. Alcuni attributi sono *booleani* (es. `disabled`, `checked`, `required`): la loro sola presenza vale "vero", non serve un valore.
>
>se non applico nessun codice css, il browser applica di default il suo foglio di stile

---
## Slide 32 – Elementi di blocco e Elementi inline

- ***Elementi di Blocco***: il loro comportamento di default nella finestra del browser è quello di essere preceduti e seguiti da una andata a capo, sono nativamente rappresentati come un box (esempi: tabelle, liste, heading, form, paragrafi)
- ***Elementi inline***: sono contenuti in un elemento di blocco e non ne intaccano il flusso, ovvero non implicano l'andata a capo, né prima né dopo (esempi: link ipertestuali, elementi per enfatizzare il testo, citazioni)

>> Blocco/inline è una distinzione **presentazionale** (di default CSS, proprietà `display`), non semantica: con `display: inline` un `<div>` si comporta da inline e con `display: block` uno `<span>` si comporta da blocco. In HTML5 la distinzione semantica corrispondente è quella tra *flow content* e *phrasing content*.

---
## Slide 33 – Elementi e categorie

![[TW02-s033-1.png|600]]

>> Il diagramma è un diagramma di Venn: le categorie si sovrappongono perché un elemento può appartenere a più categorie contemporaneamente. Si noti che *phrasing* è interamente contenuto in *flow* (ogni contenuto testuale è anche flow content), mentre *metadata* sta in gran parte fuori da flow, perché vive nell'`<head>`.

---
## Slide 34 – Prima pagina

- Un documento HTML5 è:
	- Definito dal `DOCTYPE` come html
	- Incluso tra elemento `<html>` e `</html>`
	- Strutturato in:
		- `<head></head>` intestazione del documento che riporta informazione sulla pagina o sulle relazioni con altri documenti. In questa parte è riportato il titolo che sarà mostrato nel tab della finestra del browser e il `charset` in uso.
		- `<body></body>` corpo del documento che racchiude il vero e proprio contenuto della pagina

```html
<!DOCTYPE html>
<html>

  <head>
    <title>Nome</title>
    <meta charset="UTF-8"/>
  </head>

  <body>
    Content of the document ...
  </body>

</html>
```

>> Il `<!DOCTYPE html>` di HTML5 non è più un riferimento a una DTD (come le lunghe dichiarazioni di HTML4/XHTML): serve soltanto a far entrare il browser in *standards mode* invece che in *quirks mode*, la modalità di compatibilità con le pagine degli anni '90. Per questo va sempre messo, come primissima riga.

---
## Slide 35 – Metadati

*HTML5*

- Gli elementi di **metadatazione** consentono di descrivere il documento specificandone caratteristiche, comportamento, presentazione, relazioni con altri documenti.
- I metadati sono inclusi nell'head del documento:
	- `<title>`,
	- `<base>`,
	- `<link>`,
	- `<meta>`,
	- `<style>`.

>> Alla categoria *metadata content* appartiene anche `<script>` (e `<noscript>`, `<template>`): non compare nell'elenco della slide ma è ammesso nell'head. `<base>` serve a dichiarare l'URL di base rispetto a cui si risolvono tutti i link relativi della pagina e può comparire al massimo una volta.

---
## Slide 36 – `<title>`

*SEO*

- L'elemento `<title>` rappresenta il **titolo** o il nome del documento.
	- Deve essere scritto tenendo conto che potrebbe essere usato fuori dal contesto (come per esempio accade nei bookmark) ovvero senza avere a corredo il contenuto del documento (cosa che lo differenzia da h1).
	- Ogni documento deve avere al massimo un elemento `<title>`.
- Esempio:

```html
<head>
  <title>Materiale dell'insegnamento di
    Tecnologie Web – CdS ISI Cesena</title>
</head>
```

>> Differenza pratica con `<h1>`: il `<title>` compare nella scheda del browser, nei preferiti, nella cronologia e come titolo cliccabile nei risultati di ricerca, quindi deve essere autoesplicativo anche da solo; `<h1>` è l'intestazione visibile *dentro* la pagina, dove il contesto è già dato dal resto del contenuto.

---
## Slide 37 – `<link>`

- L'elemento `<link>` viene usato per creare **relazioni** tra il documento e altri documenti o risorse.
- Ha molti utilizzi ma quello principale è creare la relazione con il CSS usato dal documento.
- Esempio:

```html
<head>
  <link rel="stylesheet" type="text/css"
      href="theme.css"/>
</head>
```

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_tag

>> L'attributo chiave è `rel`, che dichiara *che tipo* di relazione lega la pagina alla risorsa: oltre a `stylesheet` si usano per esempio `icon` (favicon), `canonical` (URL preferito per i motori di ricerca), `alternate`, `preload`. In HTML5 `type="text/css"` è il default e si può omettere.

---
## Slide 38 – `<style>`

- L'elemento style permette in includere stili all'interno del documento.
- Il rendering del documento sarà il risultato dei `<link>` a fogli di stile, degli elementi `<style>` e degli eventuali (meglio di no!) stili inline utilizzati a cui si aggiungono gli stili dell'utente.
- Per esempio:

```html
<style>
   h1 {color:red;}
   p {color:blue;}
</style>
```

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_style

>> "Stile inline" significa l'attributo `style="…"` scritto sul singolo elemento: è sconsigliato perché rimescola contenuto e presentazione e ha una specificità altissima, difficile da sovrascrivere. L'ordine con cui i vari contributi si combinano (cascata: stili dell'autore, dell'utente, del browser) è l'argomento centrale delle lezioni su CSS.

---
## Slide 39 – `<meta>`

*SEO*

- I `<meta>` vengono usati per aggiungere altri **metadati** al documento. Sono spesso usati dai motori di ricerca.
- Il tipo di metadati è specificato dall'attributo `name`. In particolare il meta `description` è usato per lo sniplet da Google.
- Esempio:

```html
<head>
  <meta charset="UTF-8"/>
  <meta name="description"
      content="Free Web tutorials"/>
  <meta name="keywords"
      content="HTML,CSS,XML,JavaScript"/>
  <meta name="author" content="Hege Refsnes"/>
</head>
```

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_meta

>> Il `<meta charset="UTF-8">` è un caso speciale: non usa `name`/`content` e va messo il prima possibile nell'`<head>` (entro i primi 1024 byte), perché il browser deve conoscere la codifica *prima* di interpretare il resto del testo. Il `meta keywords` invece oggi è di fatto ignorato dai principali motori di ricerca, mentre restano molto usati `description` e `viewport`.

---
## Slide 40 – Domanda

*BONUS*

**DOMANDA:**
Quale di questi elementi non indica un metadato:

- [ ] `<link>`
- [ ] `<title>`
- [ ] `<style>`
- [ ] `<head>`

>> La risposta è `<head>`: non è un metadato, è il *contenitore* in cui i metadati vengono inseriti. Gli altri tre appartengono tutti alla categoria *metadata content*.

---
## Slide 41 – Riferimenti

- Vedi piattaforma
- Standard W3C: https://html.spec.whatwg.org/multipage/
- Living Standard: http://www.w3.org/TR/html5/dom.html#kinds-of-content

![[TW02-s041-1.png|350]]

>> Nota: nella slide le due etichette sono scambiate rispetto ai link. `html.spec.whatwg.org` è il *Living Standard* del WHATWG, mentre `w3.org/TR/html5/` è la vecchia *Recommendation* del W3C (oggi non più aggiornata: dal 2019 il W3C ha adottato il Living Standard del WHATWG come riferimento unico).

---
## Riassunto

>> **Markup e metamarkup**
>> - Linguaggio di markup: sintassi per *annotare* un documento dandone un'interpretazione delle parti; il termine viene dalla tipografia.
>> - Markup **procedurale** (dice *come* trattare il testo, es. TeX) vs **descrittivo** (dice *che cosa* è un elemento, es. HTML, XML, SGML).
>> - **Metamarkup**: definisce nuovi linguaggi di markup descrivendone la grammatica. **XML** (Extensible Markup Language) serve allo scambio di documenti strutturati; regole: tag sempre chiusi e ben annidati, case-sensitive, attributi tra virgolette, un solo elemento radice. XML-based: XHTML, SVG, SOAP.
>> - HTML ha vocabolario **predefinito**, XML consente vocabolari di dominio. Oggi nelle Web API domina **JSON**.
>>
>> **Date e storia (probabili domande)**
>> - 1990 HTTP, 1991 prototipo WWW al CERN, 1994 URI/URL, **1995 RFC 1866 = HTML 2.0** (IETF).
>> - 1992 **Mosaic** (NCSA), 1994 **Netscape Navigator**, **1995 Internet Explorer**; IE vince includendosi in Windows 95; **1998** Netscape apre il codice → mozilla.org, Firefox 2002.
>> - Seconda guerra dei browser dal **2004**; **Chrome 2008**, il più usato dall'aprile 2016 (~66%). Supporto a IE 11 chiuso su Microsoft 365 il 17 agosto 2021.
>> - **W3C** fondato da Berners-Lee e Cailliau dopo la frammentazione dello standard; arriva a **HTML 4**, poi punta su **XHTML 1.0 / XHTML2** (fallimento).
>> - **WHATWG** nasce nel **2004** (proposta di Firefox e Opera bocciata dal W3C); il W3C riapre il WG nel **2007**; **Recommendation HTML5: 28 ottobre 2014**.
>>
>> **Living Standard**
>> - HTML non si stabilizza più: è uno **standard vivente**, "a feature, not a bug". Manca quindi una versione di riferimento per la conformità: l'unico test pratico è che l'applicazione giri su tutti i browser.
>>
>> **Principi di scrittura del markup**
>> - Separare **contenuto** (HTML) e **presentazione** (CSS): usare `<span>` per stilare, mai `<h4>` per fare testo grande.
>> - **Strutturare** con elementi semantici (`<header>`, `<nav>`, `<article>`, `<footer>`) invece di `<div>` generici.
>> - **Accessibilità by design**, non aggiunta a posteriori.
>>
>> **Elementi e categorie**
>> - Elemento = tag di apertura + contenuto + tag di chiusura (gli elementi *void* come `<br>`, `<img>`, `<meta>` hanno solo il tag di apertura). Attributi = coppie `nome="valore"`, solo nel tag di apertura.
>> - Categorie HTML5: **Metadata, Flow, Sectioning, Heading, Phrasing, Embedded, Interactive**; si sovrappongono (phrasing ⊂ flow) e definiscono il **content model**, cioè quali annidamenti sono validi.
>> - Blocco vs inline è una distinzione **presentazionale** (`display`), non semantica.
>>
>> **Struttura e metadati**
>> - Pagina: `<!DOCTYPE html>` (attiva lo *standards mode*), `<html>`, `<head>` (titolo, charset), `<body>`.
>> - Metadata content: `<title>` (al massimo uno, deve essere autoesplicativo fuori contesto, diverso da `<h1>`), `<base>`, `<link>` (attributo chiave `rel`, tipicamente `stylesheet`), `<meta>` (`charset`, `description` per lo snippet Google, `keywords` ormai ignorato), `<style>`.
>> - Attenzione: `<head>` **non** è un metadato, è il contenitore dei metadati.
