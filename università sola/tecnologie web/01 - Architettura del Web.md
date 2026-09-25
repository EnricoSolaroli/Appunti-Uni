[1_architettura](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/1_architettura.pdf>)

# Architettura del Web

## Indice

1. **Introduzione e nascita del Web** (slide 1–7)
	- [[#Slide 1 – Architettura del Web|Apertura della lezione]]
	- [[#Slide 2 – Argomenti|Argomenti trattati: principi, tecnologie, modelli, solution stack]]
	- [[#Slide 3 – Cosa è il web?|Definire il Web attraverso l'esperienza d'uso]]
	- [[#Slide 5 – Da Wikipedia|Definizione di WWW e ruolo del W3C]]
	- [[#Slide 6 – La prima pagina…|1989–1991: CERN, Berners-Lee e la prima pagina web]]
	- [[#Slide 7 – La nascita del web|Le tre tecnologie fondanti: HTML, URI, HTTP]]
2. **Principi architetturali e tecnologie di base** (slide 8–10)
	- [[#Slide 8 – Principi architetturali del WWW|Formato, Identificazione, Interazione]]
	- [[#Slide 9 – HTML|Linguaggio di markup: tag, struttura del documento]]
	- [[#Slide 10 – CSS|Separazione tra presentazione e contenuto]]
3. **Modello client-server** (slide 11–16)
	- [[#Slide 11 – Client e Server|HTTP come protocollo applicativo client/server]]
	- [[#Slide 12 – Browser|Il client: visualizzazione, plug-in, JavaScript]]
	- [[#Slide 13 – Server|Il server e il collegamento ad applicazioni server-side]]
	- [[#Slide 14 – Per la cronaca|Diffusione dei web server sul mercato]]
	- [[#Slide 16 – Prima domanda|Domanda bonus: chi inizia l'interazione]]
4. **Evoluzione del Web, pull/push e sessioni** (slide 17–19)
	- [[#Slide 17 – Evoluzione|Complessità, dinamicità, sicurezza, distribuzione]]
	- [[#Slide 18 – HTTP: PULL e PUSH|Pull, push e pseudo-push basato su polling]]
	- [[#Slide 19 – Cookies|Gestione delle sessioni su un protocollo stateless]]
5. **Programmazione lato client** (slide 20–24)
	- [[#Slide 20 – Programmare il web|Programmazione lato client e lato server]]
	- [[#Slide 21 – Javascript|Scripting nel browser, ECMAScript, uso server-side]]
	- [[#Slide 22 – Java client-side: le applet|Le applet Java e la loro obsolescenza]]
	- [[#Slide 23 – Altri oggetti dinamici|Plug-in: Flash e Silverlight, superati da HTML5]]
	- [[#Slide 24 – Flash|Declino e rimozione di Flash dai browser]]
6. **Framework e solution stack** (slide 25–34)
	- [[#Slide 25 – Framework di sviluppo|Framework client/server, full-stack e glue-framework]]
	- [[#Slide 26 – Web solution stack|I quattro livelli di uno stack: SO, web server, DBMS, linguaggio]]
	- [[#Slide 27 – LAMP|LAMP e la variante Windows WAMP]]
	- [[#Slide 29 – PHP|PHP: scripting interpretato lato server]]
	- [[#Slide 30 – Architettura PHP|Esecuzione dello script sul server e HTML generato]]
	- [[#Slide 32 – WISA|Lo stack interamente Microsoft]]
	- [[#Slide 33 – MEAN|MongoDB, Express, Angular, Node.js]]
	- [[#Slide 34 – Confronto MEAN-L(W)AMP|Differenze tra MEAN e L(W)AMP]]
7. **Da AJAX ai servizi: il Web moderno** (slide 35–39)
	- [[#Slide 35 – AJAX|Scambio dati in background e Rich Internet Application]]
	- [[#Slide 36 – Dalle pagine ai servizi|Dalle pagine generate dal server ai client che consumano servizi (esempio applicazione Meteo)]]
8. **Lo stile architetturale REST** (slide 40–45)
	- [[#Slide 40 – REST|REST come stile architetturale, non protocollo né framework]]
	- [[#Slide 41 – REST: resource-oriented architecture|URI che identificano risorse, non azioni]]
	- [[#Slide 43 – HTTP|Metodi HTTP: GET, POST, PUT, DELETE e status code]]
9. **JSON, API e separazione front-end/back-end** (slide 46–48)
	- [[#Slide 46 – JSON|JSON come rappresentazione della risorsa]]
	- [[#Slide 47 – Dal punto di vista del browser|Esempio di chiamata con fetch]]
	- [[#Slide 48 – Stessa API, diversi client|Un'unica API per web, mobile e altri servizi]]
10. **Vincoli REST e alternative** (slide 49–51)
	- [[#Slide 49 – REST e statelessness|Il vincolo di statelessness]]
	- [[#Slide 50 – JSON = REST ? No!|I sei architectural constraints di REST]]
	- [[#Slide 51 – Beyond REST|GraphQL, WebSocket, serverless, OpenAPI]]
11. **Riepilogo finale e tecnologie del corso** (slide 52–56)
	- [[#Slide 52 – Web tradizionale vs Web moderno|I principi originari sotto la complessità attuale]]
	- [[#Slide 53 – Ma quindi?|REST e JSON rispettano ancora i principi del Web]]
	- [[#Slide 55 – Seconda domanda|Domanda di verifica sulle REST API]]
	- [[#Slide 56 – Concludendo… quali tecnologie Web?|HTML5, CSS3, JavaScript e PHP]]


## Slide 1 – Architettura del Web

*1 domanda bonus*

![[TW01-s001-1.png|400]]

*lezione uno*

---
## Slide 2 – Argomenti

- Architettura del Web
	- Principi architetturali
	- Tecnologie in evoluzione
	- Modelli per il web dinamico
	- Solution Stack (piattaforme)

![[TW01-s002-1.png|250]]

*Architettura del Web* – *TW*

---
## Slide 3 – Cosa è il web?

![[TW01-s003-1.png|200]]

**Cosa è il Web?**

- Proviamo a definirlo attraverso l'esperienza
	- Come lo usiamo
	- Come funziona
	- Cosa fa
	- …

---
## Slide 4 – Tecnologie web

- Collochiamo anche le tecnologie e i tool che vedremo durante il corso:

![[TW01-s004-1.png|500]]

---
## Slide 5 – Da Wikipedia

- "*The **World Wide Web** (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet*"
- Questa definizione viene a sua volta da un documento del consorzio che standardizza il web, il **W3C**
- La prima definizione di WWW era contenuta nella **prima pagina web**, pubblicata il **6 agosto 1991**

>> In italiano: il Web è uno *spazio informativo* in cui le risorse sono identificate da URL, collegate tra loro da link ipertestuali e accessibili tramite Internet. Attenzione a non confondere Web e Internet: Internet è l'infrastruttura di rete (TCP/IP), il Web è uno dei servizi che ci girano sopra (come la posta elettronica o FTP).

---
## Slide 6 – La prima pagina…

- Il **6 agosto 1991** è il giorno in cui viene pubblicata la prima pagina ed è considerato come **data di nascita** del WWW
- Il progetto è ovviamente precedente, del **1989**.

![[TW01-s006-1.png|600]]

- **… Hypermedia**
- **… Universal access**
- **… Large universe of documents**

>> Il progetto nasce al CERN da Tim Berners-Lee: le tre parole evidenziate riassumono l'idea originale, cioè un sistema ipermediale che dia accesso universale a un grande insieme di documenti.

---
## Slide 7 – La nascita del web

- Le 3 tecnologie fondamentali che ancora oggi (ovviamente molto migliorate e integrate da altre) sono alla base del funzionamento del Web erano pronte entro l'ottobre del 1990:

![[TW01-s007-1.png|600]]

**URI:** Comprende sia gli URL (gli indirizzi web) sia gli URN (i nomi persistenti).
- Inoltre furono predisposti:
	- un primo editor/browser, WorldWideWeb.app,
	- ed il primo server Web, httpd.

---
## Slide 8 – Principi architetturali del WWW

![[TW01-s008-1.png|160]]

- **Formato**: la disponibilità di apposite **applicazioni** sul computer ricevente e la corretta identificazione del **formato** dati con cui la risorsa è stata comunicata permette di accedere al suo contenuto in maniera chiara e non ambigua. I formati sono molti, tra cui **HTML**, PNG, RDF, ecc.)
- **Identificazione**: Il WWW è uno spazio informativo (per umani e applicazioni) in cui ogni elemento di interesse è chiamato **risorsa** ed è identificato da un identificatore globale chiamato **URI**.
- **Interazione**: Un **protocollo** di comunicazione chiamato **HTTP** permette di scambiare messaggi su una rete informatica (in particolare TCP/IP)

- **HTML** – HyperText Markup Language – **Formato** per le pagine
- **URI** – Uniform Resource Identifier – **Identificazione** delle risorse
- **HTTP** – Hypertext Transfer Protocol, **Interazione** C/S sopra TCP

>> I tre principi sono ortogonali: *come* è scritta una risorsa (formato), *come* la si nomina (URI) e *come* la si trasferisce (HTTP). Ad esempio, lo stesso URI può restituire HTML o JSON, e HTTP trasporta indifferentemente qualunque formato (dichiarato nell'header `Content-Type`).

---
## Slide 9 – HTML

- **HTML** è un **linguaggio di markup** progettato per dare formato a documenti scientifici con struttura ipertestuale.
	- Il contenuto del documento è inframezzato da elementi di **markup** (chiamati **tag**) che ne definiscono struttura e semantica.
	- I tag sono stringhe contenute tra **<** e **>**.
	- Il linguaggio è evoluto dal 1998 (W3C standard 5.3).

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Story</title>
</head>
<body>
<h1>My Story</h1>
<p>Once upon a time,
  …</p>
</body>
</html>
```

>> Nell'esempio: `<head>` contiene metadati (come il titolo mostrato nella scheda del browser), `<body>` il contenuto visibile; la maggior parte dei tag va in coppia apertura/chiusura (`<p>` … `</p>`).

---
## Slide 10 – CSS

- Gli aspetti presentazionali della pagina sono gestiti attraverso un linguaggio specifico ne definisce gli **stili**, **CSS** (**Cascading Style Sheets**).
	- Separazione presentazione (CSS) e contenuto (HTML)
	- CSS permette di controllare le caratteristiche presentazionali dei documenti HTML.
	- La definizione di CSS1 è del 1996 e il supporto dei browser è iniziato da IE3 (1996) e Netscape Communicator 4 (1997).
	- Ora siamo alla versione 3, quella che vedremo insieme.

![[TW01-s010-1.png|120]]

>> Esempio minimo: `h1 { color: red; font-size: 2em; }` rende rossi e grandi tutti i titoli `<h1>`, senza toccare l'HTML. "Cascading" indica che più regole possono applicarsi allo stesso elemento e vengono combinate secondo regole di priorità (specificità, ordine, origine).

---
## Slide 11 – Client e Server

- Il web si basa su un protocollo Internet di livello applicazione (**HTTP**) basato sul modello **client** e **server**:

![[TW01-s011-1.png|600]]

Etichette del diagramma: URI, HTTP, HTML; **Browser** (Client HTTP) – **Server** (HTTP).

>> Lettura del diagramma: il browser invia, tramite HTTP, una richiesta per la risorsa identificata da un URI; il server la recupera (ad esempio un file HTML) e la restituisce nella risposta HTTP.

---
## Slide 12 – Browser

- Il **client** o **browser** è un visualizzatore di documenti ipertestuali e multimediali in HTML:
	- Inizia l'interazione (come client).
	- Può visualizzare testi, immagini e semplici interfacce grafiche.
	- Può agire da editor, ma solo localmente.
	- I browser hanno anche:
		- **plug-in** che permettono di visualizzare ogni tipo di formato speciale,
		- un linguaggio di programmazione interno (**Javascript**).

![[TW01-s012-1.png|120]]

---
## Slide 13 – Server

- Il **server** è una applicazione in grado di rispondere a richieste di risorse locali (file, record di database, ecc.) individuate da un identificatore univoco:
	- La funzione primaria del server web è rispondere alle richieste di pagine effettuate dai client.
	- Il server web può collegarsi ad applicazioni server-side ed agire da tramite tra il browser e l'applicazione in modo che il browser diventi l'interfaccia di una applicazione che gira altrove.

![[TW01-s013-1.png|130]]

---
## Slide 14 – Per la cronaca

- Diffusione dei server (settembre 2026, fonte [https://w3techs.com/technologies/overview/web_server](https://w3techs.com/technologies/overview/web_server)):

![[TW01-s014-1.png|400]]

>> La somma supera il 100% proprio perché un sito può usare più server (es. Cloudflare come proxy davanti a un Nginx o Apache).

---
## Slide 16 – Prima domanda

![[TW01-s016-1.png|500]]

>> La risposta corretta segue dal modello di HTTP (pull): il server non può "chiamare" il client, può solo rispondere. Le tecniche push/pseudo-push (slide 18) sono costruite sopra questo vincolo o con protocolli aggiuntivi (es. WebSocket, dopo un'apertura iniziata comunque dal client).

---
## Slide 17 – Evoluzione

- L'architettura del Web attuale è basata sulla struttura originaria ma nel tempo si è arricchita per fornire:
	- **servizi avanzati agli utenti** e
	- strumenti efficaci agli sviluppatori.
- L'evoluzione ha riguardato numerosi aspetti critici come la **complessità** (ricchezza) dei contenuti, la **dinamicità** dei contenuti, la **sicurezza** delle transazioni, la **distribuzione** dei servizi, l'**espressività** dei linguaggi, ecc.

![[TW01-s017-1.png|600]]

---
## Slide 18 – HTTP: PULL e PUSH

- **Modello di interazione C/S**:
	- il modello di funzionamento di HTTP prevede che l'interazione tra client e server **sia iniziata esclusivamente dal client**. Quindi il client attira a sé (**pull**) i contenuti richiesti. Questo impone che il client (o, più precisamente, l'utente) richieda ogni volta l'informazione.
	- In certi altri casi, invece, si vuole prediligere la immediata disponibilità di informazione anche se l'utente non le ha richieste. Quindi il server spinge al client (**push**) i contenuti. Questo è il funzionamento di molte applicazioni di **casting** (webcasting, podcasting, streaming, ecc.) e anche di tutti i sistemi di **instant messaging**.
	- Sistemi più recenti utilizzano un modello **pseudo-push** basato su polling (pool): un processo automatico, ad intervalli regolari, interroga il server (**poll**) per sapere se ci sono nuovi contenuti. Viene usato, per esempio da RSS o dalla mail.

![[TW01-s018-1.png|60]]

>> Il compromesso del polling: con intervallo $T$ il ritardo massimo con cui si scopre un nuovo contenuto è circa $T$, ma si fanno richieste anche quando non c'è nulla di nuovo. Ridurre $T$ migliora la reattività e aumenta il carico sul server.

---
## Slide 19 – Cookies

- Il termine **cookie** indica un blocco di dati opaco (cioè non interpretabile) lasciato dal server in consegna ad un richiedente per poter ristabilire in seguito il suo diritto alla risorsa richiesta:
	- I cookies sono usati nella gestione delle sessioni
	- Ogni server lascia in consegna suoi cookies e associa a questi dati ad informazioni sulla transazione.
	- Ogni volta che il browser accederà al server che ha lasciato i cookie, rifornirà i dati del cookie che permettono al server di identificare il richiedente, e creare così un profilo specifico.

![[TW01-s019-1.png|200]]

>> Servono perché HTTP è *stateless*: ogni richiesta è indipendente dalle precedenti. Il server invia `Set-Cookie: id=abc123` nella risposta e il browser lo rimanda con `Cookie: id=abc123` nelle richieste successive allo stesso sito, così il server "riconosce" l'utente (es. login, carrello).

---
## Slide 20 – Programmare il web

- Le applicazioni per il Web possono essere realizzate programmando **lato client** (codice che gira nel browser) o **lato server**.

![[TW01-s020-1.png|450]]

Java, JS, AJAX, activex, Silverlight, Flash – Java, ASP.net, perl, python, Ruby, php, JS

---
## Slide 21 – Javascript

- **JavaScript**, è un linguaggio di scripting orientato agli oggetti e agli eventi, comunemente utilizzato nella programmazione Web lato client:
	- È stato introdotto da Netscape come LiveScript, (poi rinominato Javascript)
	- è un marchio Oracle, il linguaggio standard è ECMAScript, standardizzato da ECMA
	- è un linguaggio interpretato debolmente tipizzato, debolmente orientato agli oggetti.
	- funziona anche lato server, sostanzialmente da sempre, le prime implementazioni sono sui server Netscape. L'uso lato server è stato *revitalizzato* (lo stack MEAN si basa su questo linguaggio sia a lato client che server).
	- l'ultima standardizzazione è di luglio 2024, ECMA-262 Edition 15.

![[TW01-s021-1.png|120]]

>> "Debolmente tipizzato" significa che le conversioni di tipo sono implicite: ad esempio `"5" + 1` dà la stringa `"51"`, mentre `"5" - 1` dà il numero `4`. Nonostante il nome, JavaScript non ha legami tecnici con Java.

---
## Slide 22 – Java client-side: le applet

![[TW01-s022-1.png|80]]

- Le **applet** Java sono applicazioni scritte in Java (introdotte nel 1995) che vengono incapsulate all'interno di pagine web (con `<object>`) e fatte eseguire nel browser.
- Hanno avuto grande sviluppo in passato ma ad oggi sono considerate obsolete:
	- Sono **deprecate** da Java 9 in (2017)
	- Sono state rimosse completamente a partire da Java SE 11 (18.9) nel 2018.

---
## Slide 23 – Altri oggetti dinamici

- Alcune plug-in del browser, ne estendono la funzionalità per inserire specifici oggetti dinamici.
	- Con questo meccanismo sono inclusi oggetti **Adobe Flash** o **MS Silverlight**, che sono stati usati per lungo tempo per realizzare player di streaming audio/video.
	- Questi strumenti consentono di creare applicazioni interattive lato client grazie alla presenza di un linguaggio di scripting interno.
	- In particolare Flash usa ActionScript, che è ispirato a Javascript mentre Silverlight usa proprio Javascript.
	- Questo tipo di strumenti sta andando in disuso con l'avvento di HTLM5.

![[TW01-s023-1.png|250]]

>> HTML5 ha reso superflui questi plug-in introducendo elementi nativi come `<video>`, `<audio>` e `<canvas>`, gestibili direttamente con JavaScript.

---
## Slide 24 – Flash

- YouTube ha sostituito il player Flash con uno HTML5 nel gennaio 2015
- A causa di attacchi e vulnerabilità note, alcuni browser hanno disabilitando il supporto automatico a Flash (rimosso da Chrome nel 2021)
- "*daily Chrome users who have loaded at least one page containing Flash content has gone down from over 80% in 2014 to 8% in 2018*".

![[TW01-s024-1.png|500]]

---
## Slide 25 – Framework di sviluppo

- I **framework** sono librerie che rendono più ricco, sofisticato e semplice l'uso di una tecnologia, come un linguaggio server-side, un linguaggio client-side o le specifiche grafiche di una pagina web.
	- **Server-side** esistono dalla fine degli anni novanta, e hanno reso la programmazione a tre livelli drasticamente più facile.
	- **Client-side** si sono sviluppate a partire dal 2002, su CSS e Javascript, con scopi molto difformi.
- Si può utilizzare un **full-stack framework** che fornisce piattaforme completamente integrate oppure un **glue-framework** che usa contestualmente strumenti non completamente integrati

![[TW01-s025-1.png|80]]

>> "Tre livelli" (three-tier) indica la separazione tra presentazione (browser), logica applicativa (server) e dati (database). Esempi di framework: lato server Laravel (PHP), Django (Python), Express (JS); lato client Bootstrap o Tailwind (CSS), React o Angular (JS).

---
## Slide 26 – Web solution stack

- Un **solution stack** è un insieme di componenti o sottosistemi software che sono necessari per creare una piattaforma completa in modo che nessun software aggiuntivo sia **indispensabile** allo sviluppo di applicazioni.
- Per esempio per lo sviluppo Web un solution stack è **solitamente** costituito da 4 elementi: sistema operativo, web server, database, e linguaggio di programmazione.

![[TW01-s026-1.png|220]]

Livelli dello stack (dall'alto in basso): LINGUAGGIO DI PROGRAMMAZIONE – DATA BASE MS – WEB SERVER – SISTEMA OPERATIVO

---
## Slide 27 – LAMP

- Uno dei solution stack più noti è LAMP, in cui:
	- **L**inux è il sistema operativo.
	- **A**pache è il server web.
	- Il DBMS è **M**ySQL.
	- Il linguaggio di programmazione comunemente è **P**HP ma vengono usati anche **P**erl e **P**ython.
- Tutto il solution stack è completamente opensource.

![[TW01-s027-1.png|220]]

Livelli: PHP – MySQL – Apache – Linux

---
## Slide 28 – WAMP

- Variante Windows di LAMP (che useremo anche noi):
	- **W**indows è il sistema operativo.
	- **A**pache è il server web.
	- Il DBMS è **M**ySQL.
	- Il linguaggio di programmazione comunemente è **P**HP ma vengono usati anche **P**erl e **P**yton.

![[TW01-s028-1.png|220]]

Livelli (WampServer): PHP – MySQL – Apache – Windows

---
## Slide 29 – PHP

![[TW01-s029-1.png|150]]

- PHP è un **linguaggio di scripting**, **interpretato**, originariamente concepito per la programmazione di pagine web dinamiche **lato server**.
	- L'interprete PHP è un software libero distribuito sotto la PHP License.
	- L'acronimo è attualmente espanso come nella forma ricorsiva **PHP Hypertext Preprocessor** (originariamente era inteso come acronimo di «Personal Home Page»)
	- Citando Wilkipedia «Un esempio di software scritto in PHP è MediaWiki, su cui si basano i progetti wiki della Wikimedia Foundation come Wikipedia»

>>con lo sviluppo le pagine statiche non erano più sufficienti, si vuole ottenere qualcosa di dinamico. Linguaggio soggetto ad una evoluzione incredibile, funzionalità molto simili alla programmazione d'oggetti. Alta integrazione con i database. 

---
## Slide 30 – Architettura PHP

![[TW01-s030-1.png|600]]

Etichette: **Browser** – HTTP request `http://server.it/myscript.php` – HTTP response – HTTP – **Server** (Apache).

File sul server `[myscript.php]`:

```php
<html>
 <head>
  <title>Test PHP</title>
 </head>
 <body>
  <?php echo "You are using ",
        $_SERVER["HTTP_USER_AGENT"]; ?>
 </body>
</html>
```

Dopo l'esecuzione dell'interprete PHP, HTML inviato al browser:

```html
<html>
 <head>
  <title>Test PHP</title>
 </head>
 <body>
  You are using Mozilla/5.0 (Windows NT 6.0)
  AppleWebKit/535.2 (KHTML, like Gecko)
  Chrome/15.0.874.106 Safari/535.2
 </body>
</html>
```

>> Punto chiave: il browser non vede mai il codice PHP. Il server esegue lo script, sostituisce il blocco `<?php ... ?>` con il suo output (qui la stringa User-Agent inviata dal browser nella richiesta) e restituisce HTML puro.

---
## Slide 31 – E se c'è anche JS?

![[TW01-s031-1.png|600]]

Etichette: **Browser** – HTTP request `http://server.it/myscript.php` – HTTP response – HTTP – **Server**.
- Sul server: File .php con codice PHP e codice JS embedded in codice HTML → Esecuzione PHP → Contenuto HTML con codice JS embedded
- Sul browser: Esecuzione codice JS

>> Quindi i due linguaggi girano in momenti e luoghi diversi: prima il PHP sul server (che può anche generare il codice JS), poi il JS nel browser, sulla pagina già ricevuta. Per questo il JS non può accedere direttamente alle variabili PHP, se non a quelle "stampate" nella pagina.

---
## Slide 32 – WISA (microsoft)

- L'architettura composta solo da prodotti Microsoft è:
	- **W**indows è il sistema operativo.
	- **I**nternet Information Services è il server web.
	- Il DBMS è Microsoft **S**QL Server.
	- Il linguaggio di programmazione è **A**SP.NET. (lato server)

![[TW01-s032-1.png|220]]

Livelli (WISA): ASP – SeQueL – IIS – Windows

---
## Slide 33 – MEAN (m. e. a. n.)

- **MEAN** è un solution stack con una struttura diversa.
- Non fa riferimento a sistema operativo ma in compenso specifica componenti per lo sviluppo client.
- In particolare:
	- **M**ongoDB, come data Base (NoSQL database).
	- **E**xpress.js, come framework di sviluppo JavaScript lato **server**.
	- **A**ngular JS, come framework di sviluppo JavaScript lato **client**.
	- **N**ode.js, ambiente di esecuzione per applicazioni **server-side** (permette di eseguire codice Javascript server-side all'esterno del browser), molto flessibile. Si basa su typescript, linguaggio fortemente tipizzato.

![[TW01-s033-1.png|250]]

Livelli: MongoDB – Express – Angular – Node

>> In Angular il livello è disegnato spostato perché è l'unico componente che gira nel browser (lato client); gli altri tre stanno sul server. MongoDB memorizza documenti in formato simile a JSON, quindi i dati mantengono la stessa rappresentazione dal database fino al browser.
>
>> non sono direttamente legato al framework lato client, si possono avere varie soluzioni. 

---
## Slide 34 – Confronto MEAN-L(W)AMP

- Il confronto tra **MEAN** e **L(W)AMP** evidenzia molte differenze:
	- LAMP e WAMP fanno riferimento a uno specifico sistema operativo. MEAN è più moderno, nasce **multipiattaforma**.
	- MEAN usa Node.js come **ambiente di esecuzione delle applicazioni server-side**, esegue codice JS al di fuori del browser (paradigma: «**JavaScript everywhere**»).
	- MEAN usa un DB **non relazionale** (MongoDB) al posto di MySQL, DB relazionale di L(W)AMP.
	- MEAN fornisce **due supporti di programmazione** (uno **client** e uno **server,** Angular e Express) basati sullo stesso linguaggio **Javascript**. L(W)AMP si occupano invece di definire solo lo stack a lato server, usando per programmare PHP/Python e Perl.

>> In sintesi: L(W)AMP = sistema operativo fisso + Apache + MySQL (relazionale) + PHP/Perl/Python solo lato server; MEAN = indipendente dal sistema operativo, Node.js + Express lato server, MongoDB (NoSQL), Angular lato client, tutto in JavaScript.

---
## Slide 35 – AJAX

![[TW01-s035-1.png|180]]

- **AJAX** (Asynchronous JavaScript and XML), un gruppo di tecnologie utilizzate per la realizzazione di **RIA** (Rich Internet Application) ovvero applicazioni web client-side e server-side fortemente interattive:
	- Lo sviluppo AJAX si basa su uno **scambio di dati in background** fra web browser e server, che consente l'aggiornamento dinamico di una pagina web senza esplicito ricaricamento da parte dell'utente.
	- Nonostante l'acronimo, l'uso di XML non è indispensabile, si usa per esempio **JSON** (in una variante che è chiamata AJAJ) e la richiesta al server non deve necessariamente essere asincrona.

![[TW01-s035-2.png|80]]

>> Esempio tipico: i suggerimenti mentre si digita in una casella di ricerca. A ogni tasto, JavaScript invia in background una richiesta (oggi di solito con `fetch()`), riceve i dati in JSON e aggiorna solo la lista dei suggerimenti, senza ricaricare la pagina.

---
## Slide 36 – Dalle pagine ai servizi

- Finora abbiamo descritto il Web secondo il suo modello originario: il client (il browser) richiede una risorsa identificata da un URI attraverso HTTP e il server Web restituisce una rappresentazione di quella risorsa

- Inizialmente, nella maggior parte dei casi, questa rappresentazione era una pagina HTML. Il browser chiedeva una pagina e il server restituiva un documento pronto per essere visualizzato

>> Punto chiave: la risorsa non coincide con il file che la rappresenta. L'URI identifica la risorsa (concetto astratto), mentre ciò che viaggia sulla rete è una *rappresentazione* (HTML, JSON, PNG...) scelta in base alla negoziazione del contenuto.

---

## Slide 37 – Dalle pagine ai servizi

- Finora abbiamo descritto il Web secondo il suo modello originario: il client richiede una risorsa identificata da un URI attraverso HTTP e il server Web restituisce una rappresentazione di quella risorsa
- Inizialmente, nella maggior parte dei casi, questa rappresentazione era una pagina HTML: Il browser chiedeva una pagina e il server restituiva un documento pronto per essere visualizzato

![[TW01-s037-1.png|500]]

Testo della figura:

- **Client** (Web browser) — *The client asks for a resource identified by a URI.*
- **HTTP request**

```http
GET /index.html HTTP/1.1
Host: www.example.com
Accept: text/html
...
```

- **Server** (Web server) — *The server processes the request and retrieves the resource.*
- **Resource** — URI: /index.html *(e.g., an HTML file on the server)*
- **HTTP response**

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1024
...

<html>
   <head>...</head>
   <body>...</body>
</html>
```

- **Representation of the resource** *(in this case HTML)*
- *The client receives the representation of the requested resource and renders it (e.g., as an HTML page).*

---

## Slide 38 – Dalle pagine ai servizi

- Con Javascript e con AJAX questo modello comincia a cambiare: il browser non deve più necessariamente chiedere al server una «*intera*» pagina HTML, ma può chiedere soltanto dei **dati**, riceverli in background e utilizzarli per aggiornare dinamicamente soltanto una parte dell'interfaccia (senza un esplicito reload)
- Da **pagine generate dal server** a **client che consumano servizi**

![[TW01-s038-1.png|700]]

Testo della figura:

**Traditional Web** — *Pages generated by the server*

- Client (Web browser) → Web server (generates pages)
- HTTP request: `GET /page.html`; HTTP response: HTML page — *Generated on the server*
- The client requests a page (e.g., /index.html)
- The server generates the HTML (often using server-side code)
- The server returns a complete HTML page
- The browser renders the page

**Modern Web Applications** — *Clients consuming services (APIs)*

- Client (Web or mobile app), HTML + CSS + JavaScript *(renders the UI and calls APIs)* → Backend server (exposes services / APIs): Application logic, Database, Other services
- HTTP request: `GET /api/items`; HTTP response: JSON data

```json
{
  "id": 1,
  "name": "Item",
  ...: ...
}
```

- The client loads a (usually static) web or mobile application
- The client requests data from server APIs (e.g., REST endpoints)
- The server returns data (typically in JSON)
- The client uses the data to dynamically update the user interface

>> AJAX (*Asynchronous JavaScript and XML*) è la tecnica che permette al codice JavaScript della pagina di fare richieste HTTP in background: la pagina resta la stessa, cambiano solo i dati e quindi i pezzi di DOM aggiornati. Da qui nasce la separazione tra front-end (presentazione) e back-end (servizi).

---

## Slide 39 – Dalle pagine ai servizi

- Esempio:
	- applicazione Meteo
	- Se cambio città non devo chiedere al server una intera nuova pagina HTML
	- Posso chiedere: dammi le previsioni di Cesena
	- Il server restituisce i dati e sarà Javascript nel browser a decidere come presentarli nell'interfaccia

![[TW01-s039-1.png|700]]

Testo della figura:

**Weather application:** changing city without **reloading the page**

- **HTTP request** (from browser):

```http
GET /api/weather?city=cesena
Host: api.meteoapp.it
Accept: application/json
...
```

- **Weather API** (server)
- **HTTP response** (with data):

```json
{
  "city": "Cesena",
  "temperature": 26,
  "condition": "Partly cloudy",
  "humidity": 48,
  "wind": 10,
  "forecast": [ ... ]
}
```

- (1) *The user **opens the application** and sees the weather for **Imola**.* — MeteoApp: Imola, oggi, 8 luglio 2026, 28°C Soleggiato, Umidità: 42%, Vento: 12 km/h, Min: 18°C Max: 30°C; previsioni Mer 30° 18°, Gio 29° 17°, Ven 31° 19°, Sab 27° 18°
- (2) *The UI is updated with the weather for **Cesena**, without **reloading** the page. Only new data is requested from the server.* — MeteoApp: Cesena, oggi, 8 luglio 2026, 26°C Parzialmente nuvoloso, Umidità: 48%, Vento: 10 km/h, Min: 17°C Max: 28°C; previsioni Mer 28° 17°, Gio 29° 18°, Ven 27° 17°, Sab 26° 16°

---

## Slide 40 – REST

- Una delle architetture che ha avuto maggiore successo per organizzare questo tipo di interazione è REST
- **Representational State Transfer (REST)**
	- **non** è un **protocollo**
	- **non** è un **linguaggio**
	- **non** è un **framework**
	- non invita un Web diverso
	- **È uno stile architetturale!**
	- parte dall'idea che il sistema sia costituito da **risorse** (identificate attraverso un URI) e che client e server si scambiano delle **rappresentazioni** di queste risorse

>> REST è stato definito da Roy Fielding nella sua tesi di dottorato (2000): non aggiunge nulla al Web, ma descrive i vincoli architetturali (client-server, stateless, cacheable, interfaccia uniforme, sistema a livelli, code-on-demand) che il Web già rispetta e che conviene rispettare anche quando si progetta una API. 
>> 
>> evuluzione verso una maggiore iterattivita e uno scambio di informazioni più iterativa

---

## Slide 41 – REST: resource-oriented architecture

- Esempio: in un sistema universitario possiamo avere i seguenti URI

| URI | Significato |
| --- | --- |
| `/students` | |
| `/students/123` | identifica lo studente 123 |
| `/courses` | |
| `/courses/456` | identifica il corso 456 |

Non descrivono azioni ma risorse!

- In una API RESTful cerchiamo di far esprimere all'URI **che cosa è la risorsa**, mentre usiamo HTTP per esprimere **che cosa vogliamo fare con quella risorsa**

>> `/students` e `/courses` sono *collection* (insiemi di risorse), mentre `/students/123` è un singolo *item* di quella collection: è la struttura gerarchica del path a esprimere la relazione di appartenenza.

---

## Slide 42 – REST: resource-oriented architecture

- Esempio:

| URI | Significato |
| --- | --- |
| `/getStudent?id=123` | URI che esprime una operazione: ***get student*** |
| `/students/123` | URI che identifica una risorsa: ***student 123*** |

- Il secondo URI esprime il modo di ragionare tipico del resource-oriented design di una REST API

>> Il primo stile (verbo nell'URI) è tipico delle vecchie API RPC-like: mette l'azione nel nome della risorsa, per cui servirebbe un URI diverso per ogni operazione (`/getStudent`, `/deleteStudent`, ...). Nel secondo l'URI resta uno solo e l'azione la sceglie il metodo HTTP.

---

## Slide 43 – HTTP

- GET

	`GET /students/123` → dammi una rappresentazione dello studente 123, si aggiungono informazioni esplicite all'URI è visibile.

- POST

	`POST /students` → sto inviando al server i dati necessari per (ad esempio) creare un nuovo studente nella collection

>> GET è *safe* (non modifica lo stato) e *idempotente*: ripeterlo non cambia nulla. POST non è idempotente: due POST su `/students` creano due studenti distinti.

---

## Slide 44 – HTTP

- PUT

	`PUT /students/123` → invio una rappresentazione destinata a sostituire lo stato della risorsa identificata da questo URI

- DELETE

	`DELETE /students/123` → elimina la risorsa studente 123

>> PUT e DELETE sono idempotenti: applicarli più volte con gli stessi dati lascia il sistema nello stesso stato finale. Nota la differenza con POST: PUT si rivolge a un URI di risorsa già noto (sostituzione totale dello stato), POST alla collection.

---

## Slide 45 – HTTP

- Ad ogni metodo HTTP viene mandata una risposta con un codice parlante (status code)
- Alcune risposte
	- 200 OK: tutto bene
	- 201 CREATE: risorsa creata
	- 204 NO CONTENT: operazione riuscita, nessun body
	- 400 BAD REQUEST: richiesta non valida
	- 401 UNATHORIZED: autenticazione richiesta/non valida
	- 403 FORBIDDEN: richiesta compresa ma non autorizzata
	- 404 NOT FOUND: risorsa non trovata
	- 500 INTERNAL SERVER ERROR: errore lato server 

>> I codici sono raggruppati per classe dalla prima cifra: <u>1xx informativi, 2xx successo, 3xx redirezione, 4xx errore del client, 5xx errore del server</u>. La differenza tra 401 e 403: nel primo caso il server non sa chi sei (o le credenziali non sono valide), nel secondo lo sa ma non hai i permessi.

---
## Slide 46 – JSON

- Nel Web «tradizionale» il server restituiva frequentemente HTML
- Ma se il client non è interessato alla presentazione e vuole solo i **dati**, allora HTML non è necessariamente la rappresentazione più conveniente
- Esempio

```json
{
    "id": 123,
    "name": "Matteo Casadei",
    "course": "Computer Science and Engineering"
}
```

- ***JSON (Javascript Object Notation)***: formato testuale, leggero e indipendente dal linguaggio usato dal server
- La computazione lato server potrebbe essere in PHP, Java, Javascript, Python, ecc, al client non interessa! Il «*contratto*» tra client e server è l'API
- Una risorsa e la sua rappresentazione non sono la stessa cosa!
- Lo studente 123 è concettualmente la risorsa: JSON è una possibile rappresentazione di questa risorsa

>> La distinzione risorsa/rappresentazione è la stessa vista per HTML: la risorsa
>> «studente 123» è un concetto identificato da un URI (es. `/api/students/123`),
>> mentre JSON, XML, HTML o CSV sono solo formati alternativi con cui il server
>> può trasferirne lo stato. Lo stesso URI può quindi restituire rappresentazioni
>> diverse a seconda di cosa il client chiede (content negotiation).

---
## Slide 47 – Dal punto di vista del browser

```javascript
fetch("/api/students/123")
    .then(response => response.json())
    .then(data => console.log(data));
```

- Esempio di codice Javascript, anche se lo vedremo più avanti cerchiamo comunque di capire che cosa sta succedendo:
	- Chi è il client: il browser
	- Chi inizia l'interazione: il client
	- Quale protocollo usiamo: HTTP
	- Cosa viene richiesto: una risorsa
	- Che cosa ritorna: una rappresentazione, in questo caso JSON
- L'architettura fondamentale del Web che abbiamo visto non è affatto scomparsa! Il principio è sempre lo stesso

>> `fetch` restituisce una Promise: il primo `.then` riceve la response HTTP e
>> ne interpreta il corpo come JSON (a sua volta asincrono), il secondo `.then`
>> riceve l'oggetto Javascript già deserializzato. Cambia solo il fatto che la
>> richiesta parte da codice invece che dalla navigazione dell'utente: sotto
>> resta una normale richiesta HTTP GET verso un URI.

---
## Slide 48 – Stessa API, diversi client

- Frontend e backend si separano nettamente
- Il backend non deve sapere necessariamente come verranno fruiti e visualizzati i dati, espone una API
- Il client prende i dati e costruire una interfaccia HTML
- Un'app mobile prende gli stessi dati e costruisce una interfaccia nativa Android o iOS, o una web app o una progressive web app, ecc
- Un altro ulteriore servizio potrebbe usare la stessa API senza avere alcuna interfaccia grafica, ma magari interfaccia vocale o altro

![[TW01-s048-1.png|600]]

>> Lo schema mostra tre tipi di client (web application nel browser, app mobile
>> nativa, altro servizio server-to-server) che parlano HTTP con la stessa REST
>> API (HTTP + JSON, endpoint `/api/items`, `/api/users`, `/api/courses`, …);
>> l'API richiama la business logic dell'Application, che a sua volta legge e
>> scrive sul Database. L'API è l'interfaccia ben definita (endpoint, metodi,
>> formato dei dati) che disaccoppia i client dai componenti di backend.

---
## Slide 49 – REST e statelessness

- REST introduce diversi vincoli architetturali: uno dei più importanti è **statelessness**
- Ogni richiesta dal client deve contenere le informazioni necessarie perché il server possa comprenderla: il server non dovrebbe dipendere dal contesto di una precedente richiesta per interpretare quella successiva
- **Stateless** non significa che l'applicazione non possa avere uno stato: **lo stato dell'interazione non deve essere mantenuto implicitamente dal server tra una richiesta e l'altra** secondo il vincolo REST
- Informazioni necessarie all'autenticazione, per esempio, possono essere trasmesse con ciascuna richiesta

>> Conseguenza pratica: lo stato applicativo «permanente» (i dati) sta nel
>> database lato server, mentre lo stato della sessione sta dal lato client, che
>> lo rispedisce a ogni richiesta (es. un token di autenticazione in un header).
>> Questo rende le richieste indipendenti fra loro e quindi facilmente
>> bilanciabili su più server: qualunque istanza può servire qualunque richiesta.

---
## Slide 50 – JSON = REST ? No!

- REST non significa «qualsiasi API HTTP» che restituisce JSON
- Potreste sentire fare riferimento a «REST API» per indicare praticamente qualsiasi API HTTP che scambia JSON: tecnicamente è un uso piuttosto rilassato del termine
- REST definire un insieme di architectural constraints:
	- Client-server
	- Stateless
	- Cacheable
	- Uniform interface
	- Layered system
	- Code-on-demand opzionale
- **Usare GET e POST e restituire JSON non basta automaticamente a rendere un sistema RESTful**

>> I vincoli sono quelli della tesi di Roy Fielding (2000): *code-on-demand*
>> (il server può inviare codice eseguibile al client, es. Javascript) è l'unico
>> opzionale. *Uniform interface* è il più caratterizzante e include
>> l'identificazione delle risorse tramite URI e la manipolazione tramite
>> rappresentazioni.

---
## Slide 51 – Beyond REST

- **GraphQL**: in una REST API è normalmente il server a definire la struttura delle rappresentazioni disponibili; GraphQL permette invece al client di esprimere in modo più preciso quali dati vuole ricevere
- **WebSocket**: per applicazioni che richiedono comunicazione bidirezionale persistente e real-time (ad esempio: chat, collaborative editing, multiplayer). Dopo l'apertura della connessione, client e server possono scambiarsi messaggi in entrambe le direzioni senza che ogni messaggio debba per forza corrispondere al classico ciclo request-response HTTP
- **Serverless/cloud functions**: con serverless architectures alcune funzioni backend vengono eseguite on demand sull'infrastruttura cloud (il nostro server applicativo è sempre attivo)
- **OpenAPI**: permette di documentare in modo machine-readable endpoint operazioni, parametri e risposte, dato che quando una API diventa il contratto tra sistemi diversi, è importante poterla descrivere formalmente

>> Con GraphQL il client evita *over-fetching* (ricevere più campi del
>> necessario) e *under-fetching* (dover fare più richieste per comporre una
>> vista), problemi tipici di una REST API con endpoint a granularità fissa.

---
## Slide 52 – Web tradizionale vs Web moderno

- Il Web attuale può sembrare molto diverso dal Web del 1991
- Abbiamo SPA, REST API, mobile client, cloud services, microservices, WebSocket, GraphQL...
- Ma guardando sotto tutti questi livelli di complessità ritroviamo ancora molti dei principi architetturali originari: **risorse**, **identificazione**, **rappresentazioni e interazione attraverso protocolli standard**
- Quello che è cambiato enormemente è **come combiniamo questi principi** per costruire applicazioni distribuite sempre più complesse
---
## Slide 54 – Ma quindi?

- Se una REST API restituisce JSON invece di HTML, stiamo ancora utilizzando i principi architetturali del Web?

	**SI!**

- Perché?
	- le risorse sono identificate tramite **URI**
	- le interazioni avvengono tramite **HTTP** e il server trasferisce una rappresentazione della risorsa
	- semplicemente, **JSON** è diventato il formato principe della rappresentazione, andando a sostituire in un certo qual modo **HTML**

---
## Slide 55 – Seconda domanda

**DOMANDA 2**:
In una REST API, quale delle seguenti affermazioni è corretta?

- ❑ REST è un protocollo alternativo a HTTP
- ❑ Le risorse sono identificate tramite URI e possono essere rappresentate, ad esempio, in JSON
- ❑ Una REST API può essere utilizzata solo da applicazioni Web eseguite nel browser
- ❑ In REST il server deve mantenere sempre lo stato della sessione tra una richiesta e la successiva

>> La risposta corretta è la seconda. REST non è un protocollo ma uno stile
>> architetturale che si appoggia a HTTP; una REST API è consumabile da
>> qualsiasi client (app native, altri server, script CLI); e il vincolo di
>> statelessness dice l'esatto contrario della quarta opzione.

---
## Slide 56 – Concludendo… quali tecnologie Web?

- Quelle indispensabili a **creare pagine**:
	- **HTML5**: per strutturare le pagine e definirne il contenuto
	- **CSS3**: per definirne il layout
- Tra le varie tecnologie per **programmare**:
	- **JS: client side**
	- **PHP: server side**
- Altre tecnologie e tool…

[http://w3techs.com/technologies/](http://w3techs.com/technologies/)

![[TW01-s056-1.png|400]]

---
## Riassunto

>> **Nascita e principi del Web**
>> - Web = spazio informativo di risorse identificate da URI/URL, collegate da link ipertestuali, accessibili via Internet (è un servizio *sopra* Internet). Berners-Lee al CERN (1989), prima pagina il **6 agosto 1991**, standard **W3C**.
>> - Tre principi ortogonali: **Formato** → HTML; **Identificazione** → URI; **Interazione** → HTTP su TCP/IP. **CSS** separa presentazione e contenuto.
>>
>> **Client/server, pull-push, stato**
>> - L'interazione è **sempre iniziata dal client** (**pull**); **push** = il server spinge (casting, messaging); **pseudo-push** = polling periodico (RSS, mail).
>> - HTTP è **stateless**: i **cookie** (dati opachi lasciati dal server e rimandati dal browser) gestiscono le sessioni.
>>
>> **Programmazione e solution stack**
>> - Client: **JavaScript** (standard ECMAScript); applet, Flash e Silverlight obsoleti, sostituiti da HTML5. Server: **PHP** interpretato, il browser riceve solo l'HTML prodotto, mai il codice.
>> - Stack = SO + web server + DBMS + linguaggio: **LAMP**, **WAMP**, **WISA**, **MEAN** (MongoDB, Express, Angular, Node.js: multipiattaforma, NoSQL, "JavaScript everywhere").
>>
>> **Dalle pagine ai servizi**
>> - Con **AJAX** il browser chiede solo **dati** in background e aggiorna parte dell'interfaccia senza reload: da pagine generate dal server a **client che consumano API**, con separazione front-end/back-end.
>>
>> **REST**
>> - REST (*Representational State Transfer*) **non** è un protocollo, un linguaggio o un framework: è uno **stile architetturale** basato su **risorse** identificate da URI e sulle loro **rappresentazioni**.
>> - Design *resource-oriented*: l'URI dice **che cosa è** la risorsa (`/students/123`, non `/getStudent?id=123`), il **metodo HTTP** che cosa farne: GET legge, POST crea nella collection, PUT sostituisce lo stato di una risorsa nota, DELETE elimina.
>> - Status code: **200** OK, **201** Created, **204** No Content, **400** Bad Request, **401** Unauthorized (non so chi sei), **403** Forbidden (so chi sei ma non puoi), **404** Not Found, **500** Internal Server Error.
>> - **Statelessness**: ogni richiesta contiene tutto il necessario per essere interpretata (es. token di autenticazione), il server non mantiene implicitamente lo stato tra richieste.
>> - I sei **constraint**: client-server, stateless, cacheable, uniform interface, layered system, code-on-demand (opzionale). **GET/POST + JSON non bastano a rendere RESTful un sistema.**
>>
>> **JSON e conclusione**
>> - **JSON**: formato testuale, leggero, indipendente dal linguaggio del server; il "contratto" client-server è l'**API**, e la stessa API serve web app, app native e altri servizi.
>> - Risorsa e rappresentazione **non** coincidono: lo stesso URI può restituire HTML, JSON o XML (content negotiation). `fetch("/api/students/123")` resta una normale GET HTTP, solo fatta da codice.
>> - Oltre REST: **GraphQL** (è il client a scegliere i dati), **WebSocket** (bidirezionale persistente), **serverless**, **OpenAPI** (documentazione machine-readable).
>> - Domanda 2: risposta corretta = le risorse sono identificate da URI e rappresentabili in JSON. I principi originari valgono ancora, è cambiato solo il formato dominante: JSON al posto di HTML.
