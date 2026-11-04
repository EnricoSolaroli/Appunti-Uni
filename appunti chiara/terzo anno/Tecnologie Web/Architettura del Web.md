<div style="text-align: right;">
15/09/26
</div>
### Il web
WWW: The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet.

**Tecnologie fondamentali**
- HTML: Formato per le pagine 
- URI: Identificazione delle risorse
- HTTP: Interazione C/S sopra TCP

**Principi architetturali**

# Architettura del Web — Appunti (Lezione 1)

**Fonte:** [1_architettura.pdf](./1_architettura.pdf)

## Cos'è il Web

Prima di dare una definizione formale, è utile pensare al Web attraverso l'esperienza che ne abbiamo tutti i giorni: come lo usiamo, come funziona, cosa fa. Questo aiuta a costruire un'intuizione prima di arrivare alla definizione tecnica.

La definizione più citata è quella ripresa da Wikipedia, che a sua volta deriva da un documento del **W3C**, il consorzio che standardizza il Web:

> "The World Wide Web (abbreviated WWW or the Web) is an information space where documents and other web resources are identified by Uniform Resource Locators (URLs), interlinked by hypertext links, and can be accessed via the Internet."

In pratica il Web è uno **spazio informativo**: un insieme di documenti e risorse, identificati da URL, collegati tra loro tramite link ipertestuali e raggiungibili attraverso Internet.

### Un po' di storia

La data che convenzionalmente si considera la **nascita del WWW** è il **6 agosto 1991**, giorno in cui viene pubblicata la prima pagina web. Quella pagina insiste su tre concetti chiave che sono rimasti centrali per tutta la storia del Web: **ipermedialità** (hypermedia), **accesso universale** (universal access) e la possibilità di raggiungere un **grande universo di documenti** (large universe of documents).

Il progetto in sé, però, è precedente: risale al **1989**. E già entro l'**ottobre del 1990** erano pronte le **tre tecnologie fondamentali** su cui il Web si basa ancora oggi (per quanto molto evolute e integrate da altre nel frattempo):

- **HTML** (HyperText Markup Language): il _formato_ con cui si scrivono le pagine.
- **URI** (Uniform Resource Identifier): il meccanismo di _identificazione_ delle risorse.
- **HTTP** (Hypertext Transfer Protocol): il _protocollo_ che permette l'_interazione_ tra client e server sopra TCP.

Insieme a queste tre tecnologie furono realizzati anche i primi strumenti concreti per usarle: un primo editor/browser, **WorldWideWeb.app**, e il primo server web, **httpd**.

## I tre principi architetturali del WWW

Le tre tecnologie viste sopra non sono scelte a caso: corrispondono esattamente ai tre problemi che un'architettura come il Web deve risolvere.

Il primo problema è quello del **formato**: per poter leggere il contenuto di una risorsa in modo chiaro e non ambiguo, il computer che la riceve deve avere l'applicazione giusta e deve sapere con quale formato dati la risorsa è stata comunicata. I formati sono tanti — HTML, PNG, RDF e così via — ma è indispensabile che ci sia un accordo su come interpretarli.

Il secondo problema è quello dell'**identificazione**: il Web è uno spazio informativo, pensato sia per gli utenti umani sia per le applicazioni, in cui ogni elemento di interesse viene chiamato **risorsa**. Ogni risorsa deve avere un identificatore globale e univoco, e questo identificatore è l'**URI**.

Il terzo problema è quello dell'**interazione**: serve un protocollo di comunicazione che permetta di scambiare messaggi su una rete, in particolare su TCP/IP. Questo protocollo è **HTTP**.

### HTML: il linguaggio del formato

HTML è un **linguaggio di markup**, nato per dare struttura a documenti scientifici con contenuto ipertestuale. L'idea di base è che il contenuto del documento venga "inframezzato" da elementi di markup, chiamati **tag**, che ne definiscono struttura e semantica; i tag sono semplicemente stringhe racchiuse tra `<` e `>`. Un esempio minimale di documento HTML è:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<title>Story</title>
</head>
<body>
<h1>My Story</h1>
<p>Once upon a time, …</p>
</body>
</html>
```

Il linguaggio si è evoluto molto dal 1998 (anno dello standard W3C 5.3) fino ad oggi.

Un aspetto importante, che riguarda più la presentazione che il contenuto, è il **CSS** (Cascading Style Sheets): un linguaggio a parte, pensato apposta per gestire gli aspetti presentazionali della pagina. L'idea centrale è la **separazione tra contenuto (HTML) e presentazione (CSS)**: HTML dice _cosa_ c'è nella pagina, CSS dice _come_ deve apparire. CSS1 è del 1996, e il supporto dei browser è partito quasi subito, con Internet Explorer 3 (1996) e Netscape Communicator 4 (1997); oggi si lavora con CSS3, la versione che verrà usata nel corso.

### URI: il meccanismo di identificazione

L'URI è ciò che permette di dare un nome univoco e globale a ogni risorsa del Web, in modo che possa essere richiesta e raggiunta indipendentemente da dove si trovi fisicamente.

### HTTP: il protocollo di interazione, modello client-server

Il Web si basa su un **protocollo di livello applicazione**, HTTP, costruito secondo il modello **client-server**. Il client (il **browser**) invia una richiesta HTTP specificando l'URI della risorsa desiderata; il server risponde restituendo il contenuto (tipicamente HTML).

Vale la pena distinguere bene i ruoli:

- Il **browser** è il client: è lui che **inizia sempre l'interazione**. È un visualizzatore di documenti ipertestuali e multimediali, capace di mostrare testo, immagini e semplici interfacce grafiche, e può anche funzionare da editor, ma solo localmente. Per estendere le proprie capacità, il browser può appoggiarsi a **plug-in** (per visualizzare formati speciali che non sa gestire nativamente) e ha un linguaggio di programmazione interno, **Javascript**.
- Il **server** è l'applicazione che **risponde alle richieste**: la sua funzione primaria è restituire le pagine richieste dai client, ma può anche fare da tramite verso applicazioni server-side, in modo che il browser diventi semplicemente l'interfaccia di un'applicazione che in realtà gira altrove.

Per la cronaca, la diffusione dei server web nel settembre 2026 vede **Nginx** al 31,0%, **Cloudflare Server** al 30,7%, **Apache** al 22,0%, **LiteSpeed** al 14,6%, seguiti a distanza da Node.js (7,2%), Microsoft-IIS (3,0%) e altri server minori (Google Servers, Caddy, Envoy, ecc., tutti sotto l'1%). Nota: uno stesso sito può usare più di un web server.

> **Domanda bonus della lezione:** _Nell'architettura del Web..._
> 
> - le applicazioni web sono eseguite solo sui server? **No**, vengono eseguite anche sui client.
> - **il client inizia sempre l'interazione con i server**? **Vero**, è questa l'affermazione corretta.
> - i client sono in grado di visualizzare autonomamente tutti i formati? **No**, per alcuni formati servono i plug-in.
> - il server inizia sempre l'interazione con i client? **No**, è il server che risponde alle richieste dei client, non il contrario.

### Pull e push: due modi di far arrivare l'informazione

Il modello di funzionamento "puro" di HTTP prevede che l'interazione sia **sempre iniziata dal client**: è il client (più precisamente, l'utente) che deve richiedere ogni volta l'informazione, "attirandola a sé". Questo modello si chiama **pull**.

In molti casi però si preferirebbe che l'informazione arrivasse subito, anche senza che l'utente la richieda esplicitamente: in questo caso è il server a "spingere" i contenuti verso il client, ed è il modello **push**, tipico delle applicazioni di _casting_(webcasting, podcasting, streaming) e dei sistemi di _instant messaging_.

Esiste anche una via di mezzo, molto usata nella pratica: il modello **pseudo-push**, basato sul **polling**. Un processo automatico interroga il server a intervalli regolari (fa "poll") per controllare se ci sono nuovi contenuti: è il meccanismo tipico di RSS e della posta elettronica.

### I cookie e la gestione delle sessioni

Poiché HTTP di per sé è un protocollo "senza stato" (ogni richiesta è indipendente dalle altre), serve un meccanismo per far sì che il server possa "ricordare" un client tra una richiesta e l'altra. Questo meccanismo è il **cookie**: un blocco di dati opaco, cioè non interpretabile dal client, che il server lascia in consegna a chi ha effettuato una richiesta, in modo da poter poi ristabilire il suo diritto alla risorsa. I cookie sono usati soprattutto nella **gestione delle sessioni**: ogni server associa ai propri cookie delle informazioni sulla transazione, e ogni volta che il browser torna su quel server, restituisce i dati del cookie, permettendo al server di riconoscere il richiedente e costruirne un profilo specifico.

## Programmare il Web: lato client e lato server

Le applicazioni web si possono realizzare programmando in due modi diversi e complementari: **lato client** (codice che viene eseguito dentro il browser dell'utente) oppure **lato server** (codice eseguito sul server, il cui risultato — tipicamente HTML — viene poi inviato al client).

### Javascript

**Javascript** è il linguaggio di scripting per eccellenza lato client: è orientato agli oggetti e agli eventi. Storicamente nasce in Netscape con il nome di _LiveScript_, per poi essere rinominato Javascript (che oggi è un marchio Oracle); lo standard vero e proprio del linguaggio si chiama **ECMAScript** ed è mantenuto da ECMA (l'ultima edizione, la 15, è di luglio 2024). Dal punto di vista tecnico è un linguaggio interpretato, debolmente tipizzato e debolmente orientato agli oggetti. È interessante notare che Javascript non è nato solo per il client: fin dalle prime implementazioni sui server Netscape esiste anche una versione lato server, e questo uso è stato "rivitalizzato" negli anni più recenti — è proprio su questa idea che si basa lo stack **MEAN**, che usa Javascript sia lato client che lato server.

### AJAX

**AJAX** (Asynchronous JavaScript and XML) non è un singolo linguaggio, ma un **gruppo di tecnologie** usate per costruire le cosiddette **RIA** (Rich Internet Application), cioè applicazioni web fortemente interattive sia lato client che lato server. L'idea di fondo è lo **scambio di dati in background** tra browser e server: questo permette di aggiornare dinamicamente una pagina web senza che l'utente debba ricaricarla esplicitamente. Nonostante il nome, l'uso di XML non è affatto obbligatorio: oggi si usa molto più spesso **JSON** (in questo caso si parla a volte di _AJAJ_), e per inciso nemmeno l'asincronia della richiesta è strettamente necessaria.

### Tecnologie ormai superate: applet, Flash, Silverlight

Storicamente, il browser è stato esteso anche con altri meccanismi per eseguire codice lato client, oggi però considerati obsoleti.

Le **applet Java**, introdotte nel 1995, erano applicazioni scritte in Java, incapsulate dentro le pagine web tramite il tag `<object>` ed eseguite direttamente nel browser. Hanno avuto grande diffusione in passato, ma oggi sono completamente abbandonate: sono state dichiarate deprecate a partire da Java 9 (2017) e rimosse del tutto da Java SE 11 (2018).

Un altro meccanismo era quello dei **plug-in del browser** dedicati a oggetti dinamici specifici, come **Adobe Flash** e **Microsoft Silverlight**, usati a lungo per realizzare player di streaming audio/video. Entrambi offrivano un linguaggio di scripting interno per creare applicazioni interattive: Flash usava **ActionScript** (ispirato a Javascript), mentre Silverlight usava Javascript stesso. Con l'arrivo di HTML5, questi strumenti sono progressivamente caduti in disuso. Un esempio concreto: **YouTube ha sostituito il player Flash con uno in HTML5 nel gennaio 2015**, e Flash è stato definitivamente rimosso da Chrome nel 2021, anche a causa di vulnerabilità e attacchi noti legati a questa tecnologia. I dati parlano chiaro: la percentuale di utenti Chrome che caricava quotidianamente almeno una pagina con contenuti Flash è passata da oltre l'80% nel 2014 a solo l'8% nel 2018.

### I framework

Un **framework** è una libreria che rende più ricco, sofisticato e semplice l'uso di una tecnologia — che sia un linguaggio server-side, un linguaggio client-side, o le specifiche grafiche di una pagina. I framework **server-side** esistono fin dalla fine degli anni '90 e hanno reso la programmazione a tre livelli (client, logica applicativa, dati) molto più semplice; i framework **client-side**, basati su CSS e Javascript, si sono sviluppati più tardi, a partire dal 2002, e hanno finalità piuttosto diverse tra loro. In generale si può scegliere tra un **full-stack framework**, che offre una piattaforma completamente integrata, oppure un **glue-framework**, che invece mette insieme strumenti diversi non completamente integrati tra loro.

## I solution stack

Un **solution stack** è l'insieme di componenti software necessari per costruire una piattaforma completa, tale per cui non serva aggiungere altro software per sviluppare applicazioni. Nel caso dello sviluppo Web, uno stack tipico è composto da quattro elementi: **sistema operativo**, **web server**, **database** e **linguaggio di programmazione**.

### LAMP e WAMP

Lo stack più conosciuto è **LAMP**, il cui nome è un acronimo dei suoi componenti:

- **L**inux come sistema operativo;
- **A**pache come server web;
- **M**ySQL come DBMS;
- **P**HP come linguaggio di programmazione (anche se in alternativa si usano spesso **P**erl o **P**ython).

Un elemento importante di LAMP è che è **interamente open source**.

**WAMP** è semplicemente la variante "Windows" dello stesso stack: cambia solo il sistema operativo (**W**indows al posto di Linux), mentre Apache, MySQL e PHP/Perl/Python restano gli stessi. È lo stack che verrà usato durante il corso.

### WISA

Se invece si vuole uno stack costruito interamente su tecnologie **Microsoft**, si parla di **WISA**:

- **W**indows come sistema operativo;
- **I**nternet Information Services (IIS) come server web;
- **S**QL Server come DBMS (da cui il gioco di parole "SeQueL");
- **A**SP.NET come linguaggio/framework di programmazione.

### MEAN

**MEAN** è uno stack con una logica diversa dai precedenti: non specifica un sistema operativo (è pensato per essere **multipiattaforma**), ma in compenso definisce esplicitamente anche i componenti per lo sviluppo **client-side**, cosa che LAMP/WAMP/WISA non fanno. I suoi componenti sono:

- **M**ongoDB, come database — ma stavolta **NoSQL**, non relazionale;
- **E**xpress.js, framework di sviluppo Javascript **lato server**;
- **A**ngular (JS), framework di sviluppo Javascript **lato client**;
- **N**ode.js, l'ambiente di esecuzione che permette di eseguire codice Javascript **lato server**, cioè al di fuori del browser.

### Confrontando MEAN e L(W)AMP

Mettendo a confronto i due approcci emergono differenze piuttosto profonde:

- LAMP e WAMP sono legati a uno specifico sistema operativo; MEAN, invece, nasce pensato per essere multipiattaforma, quindi è concettualmente più moderno.
- MEAN introduce Node.js, cioè un vero e proprio ambiente di esecuzione per il codice server-side, che permette di eseguire Javascript fuori dal browser: è il paradigma che spesso viene riassunto con lo slogan **"JavaScript everywhere"**.
- MEAN adotta un database **non relazionale** (MongoDB), al contrario di MySQL, che è relazionale ed è usato in L(W)AMP.
- MEAN fornisce **due ambienti di programmazione distinti ma basati sullo stesso linguaggio** (Javascript): uno per il client (Angular) e uno per il server (Express). L(W)AMP, invece, si preoccupa di definire solo lo stack lato server, lasciando il client-side fuori dalla propria definizione, e usa linguaggi diversi come PHP, Python o Perl.

## Per concludere: quali tecnologie servono davvero
Volendo tirare le somme, ci sono alcune tecnologie che sono **indispensabili per creare pagine web**: **HTML5**, che serve a strutturare la pagina e a definirne il contenuto, e **CSS3**, che ne definisce il layout e l'aspetto grafico.

Per quanto riguarda invece la **programmazione** vera e propria, le due tecnologie di riferimento restano **Javascript lato client** e **PHP lato server** — e i dati confermano questa centralità. Secondo le statistiche W3Techs del 15 settembre 2026:

- lato client, **Javascript è usato dal 98,9%** dei siti web (mentre Flash, ormai residuale, è solo al 2,8%, e appena l'1,1% dei siti non usa nessuna tecnologia client-side);
- lato server, **PHP domina nettamente con il 69,9%**, seguito da Javascript (7,5%), Ruby (7,1%), Java (5,4%), Scala (5,1%), ASP.NET (4,2%), file statici (2,1%), Python (1,1%), e per finire ColdFusion (0,2%) e Perl (0,1%).

Al di là di queste tecnologie "core", esistono naturalmente moltissime altre tecnologie e strumenti di supporto (come Tailwind per lo styling, o risorse didattiche come W3Schools) che verranno incontrate via via durante il corso.

18/09
JS è il linguaggio principe per l'elaborazione lato client, perchè nativamente supportato dal browser.
Il browser è un oggetto complesso, fa parsing di html ed ha un motore di rendering, ovvero recupera una serie di infromazioni che servono a effettuare il rendering, fa anche il painting della pagina, e ha un motore js.
le tecnologie che il browser supporta a lato client sono html, js e css.
JS è un linguaggio di scripting che permette di dare all'utente..
oggi c'è la possibilità di usa js anche lato server, non solo lato client, nasce il paradigma js everywhere, perchè si può utilizzare sia lato client che lato server.
Tecnologie che oggi sono state superate ma oggi superate:
Applet Java: coidce java lato client che permetteva di scrivere quelle che si chiamano applet, incapsulate all'interno della pgine web con un tag noto come object, necessaria una java virtual machine, molto note e diffuse.
Deprecate dal 2017 e rimosse dal 2018.

Il superamento della tecnologia flash? ha portato ad html 5 perchè servì per sostituire il player di youtube.

I framework hanno un ruolo fondamentale nell'ambito dello sviluppo per il web, sono librerie sofisticate che danno supporto allo sviluppo di una tecnologuia, sia per strumenti client side che server side che per supporto dell'otganizzazione del layout (quindi per css).
I framework per supporto servverside sono i più antichi e rivolti a supporto di php e 
I framework di tipo client side nascono nel 200 per dare supporto a js e css.

++
php è un lignuaggio soggeto a una forte voluzione e che oggi ci permette di avere funzionalità simili a programmazione ad oggetti, profonda capacità di interagire con db e genera pagine html cpaci di interagire condb, ancora oggi una delle tecnlogie server suide + uitilizzate in assoluto.
Mediawiki è inphp.

Come funziona un architettura php, cosa abbiamo nei file php lato server? abbiamo codice hatml mistoa  codice php, si ha un elaborazione che sulla abse di query eseguite dal client inviate tramite riocheista http, il server elabora le richeiste e ottiene una oagina html generata in the fly e rimandata al client.

ci sono anche tipologie di stack non open source+++

Ad oggi è obsoleto far riferimento al s.o., ci si basa su xampp, per questo motivo e per rispondere all'evoluzione delle tecnologie web ci sono altgri tipi di solution stack, varianti di mean.
Mean abdica a definire qual è il s.o., si basa su un db di tipo nosql e sul apradigma js everywhere, lo stck di default è mean, ma si può lavorare con le varinati:
- mongo db
- express
- angular, si basa su typescript (superset di linguaggio che consnete di espndere le funzionalità di js, andandoa  colmare i limiti, fortemente tipizzato, quello che ottengo è codice js) lato client anche react, view js
- node

mean usa nodejs, gli viene quindi consentito di usare js al di fuori del server, usa inoltre un db no sql, invece xampp usa un db relazionale. Mean supporta due supporti uno lato client e uno server, invece xampp solo server?

ajax+++

co  js e ajax il modello normale(?) inizia a cambiare, succede ceh viene mantenuto aperto una sorta di canale e man mani che ci sonoa ggironamneti viene fatta una richiesta in bg di quelli che sono i dati dia ggiornamneto, in modo dinamico, senza un reload vero e proprio (questo garzie a aajax), questa modalità veiend etta client consuma servizi.

+++

metodi http
get
post
put: 
delete: elimina la risorsa

http è stateless, e restituisce semrpe una risposta, le risposte sono corredate dasllo status code, codice di 3 cifre:
prima cifra: come stanno andando le cose: 2 ok, 4 male x client, 5 male x server

json = definisce unasorta di linguaggio noto a tutti e fa aprte del contratto tra client e server, ovvero l'api. E' la rappresentazione di una risorsa.

++++

Rest
Modlelo stateless e client-server.

Se una rest api restituisc ejson invece html stiamo usando ancora gli stessi porincipi architetturali del web perchè è sempre client-server, ho una computazione lato client e una lato server e utilizzo gli stessi standard:
- risorse identificate con uri
- interazioni tramite http
- jsn diventa formato principale di rappresentazione.

HTML5
che cos'è il markup? serve per dare una struttura/enfasi a del contenuto, 
html è un linguaggio di amrkup, perchè permette di strutturare e dare enfasi alla apgina.
I doversi tipi di markup vengono classificati in modi differenti, il markup viene utilizzato per daer una certa resa presentazionale all'editor, questo è il caso di amrkup procedurale, altriemnti c'è il tipo di markup descrittivo.
xml è il linguaggio di markup più utilizzato:
la differenza con html è che html ha un standard predefinito di vocabolario e tag+++

la prima versione di html nasce con la anscita del web, la prima versione del linguaggio di markup era molto complicata e strutturata.

Mosaic è il primo browser grafico che ottiene un successo su larga scala, rispetto alle interfacce di tipo testuale diventa molto di siccesso. Mosaic è il padre di Netscape navigator, che diventa il browser + usato a aprtire dal 94.
la microsoft inizia a guardare al web e relaizza internet explorer.
Inizia così al rpima guerra dei browser, ceh verrà vinta da microsoft.
Entrmabi i browser iniziano a introdurre dei tag proprietari che apparetenvano solo a quel browser++
Dopo la prima guerra nasce mozilla firefox e si afermano browser gratuiti e innovativi, invece internet explorer non si innova più e dal 2008 si afferma chrome, che dal 2016 è il browser + utilizzato al mondo.
internet explore viene ritirato a giugno 2022, a favore di edge.

++

W3C 

### **1. Evoluzione dei Linguaggi di Markup: HTML, XML e Living Standard**

Un **linguaggio di markup** utilizza tag per annotare un testo e definirne la struttura o l'interpretazione. I linguaggi di markup si dividono principalmente in due categorie:

- **Procedurali**: specificano le istruzioni esplicite che il programma deve eseguire per formattare e visualizzare il testo (ad esempio TeX).
- **Descrittivi**: identificano il ruolo strutturale e semantico di ogni elemento all'interno del documento (come titolo, paragrafo o citazione), senza vincolarlo a uno specifico effetto grafico (ad esempio HTML, XML, SGML).

A differenza di **XML** (che è un meta-linguaggio estensibile progettato per definire vocabolari personalizzati e scambiare dati strutturati), **HTML** possiede un vocabolario predefinito di tag ed è stato concepito specificamente per definire la struttura e la semantica dei documenti sul Web.

Inizialmente, il W3C tentò di far confluire HTML all'interno della rigida sintassi XML creando **XHTML**. Tuttavia, l'evoluzione reale del Web ha preso una strada diversa: nel 2004, le aziende produttrici di browser hanno fondato il **WHATWG** (_Web Hypertext Application Technology Working Group_). Il WHATWG ha sviluppato le specifiche di **HTML5** proponendo il concetto di **Living Standard**: HTML non viene più inteso come una specifica statica contrassegnata da continui numeri di versione, ma come uno standard continuamente aggiornato e in costante evoluzione reale.

---

### **2. Storia dei Browser e le due "Guerre dei Browser"**

L'evoluzione della fruizione dei contenuti web è strettamente legata alla storia dei browser:

1. **La nascita e Mosaic**: Dopo le prime definizioni di HTTP, URI e HTML sviluppate al CERN da Tim Berners-Lee, il primo browser grafico a raggiungere un successo su larga scala fu **Mosaic**. Da esso nacque **Netscape Navigator** (1994), che divenne rapidamente il browser più diffuso.
2. **La Prima Guerra dei Browser**: Microsoft entrò nel settore rilasciando **Internet Explorer** (1995) e bundling lo stesso all'interno di Windows 95. Entrambe le aziende introdussero tag proprietari non standardizzati per conquistare quote di mercato. La vittoria di Microsoft portò Netscape a cedere e a rilasciare il proprio codice sorgente nel 1998, dando vita alla comunità **mozilla.org** e successivamente a **Mozilla Firefox** (2002).
3. **La Seconda Guerra dei Browser e il declino di IE**: Dal 2004 sono emersi nuovi browser gratuiti e a sorgente aperto, caratterizzati da un più rigoroso rispetto degli standard. L'uscita di **Google Chrome** nel 2008 ha segnato una svolta: dal 2016 Chrome è diventato il browser più utilizzato al mondo. Internet Explorer, non più al passo con l'innovazione, è stato progressivamente dismesso fino al ritiro definitivo da parte di Microsoft nel giugno 2022 a favore di **Microsoft Edge**

---

### **3. Superamento delle Tecnologie Obsolete (Applet Java e Flash)**

In passato il browser necessitava di estensioni esterne o plug-in per eseguire contenuti dinamici e multimediali:

- **Applet Java**: Introdotte nel 1995 ed eseguite all'interno della pagina tramite il tag `

22/09

## Elementi HTML (slide 29)

![[Pasted image 20260922132840.png]]

### Struttura e Sintassi (HTML / Linguaggi di Markup)
**1. La Struttura ad Albero (Gerarchia dei Tag)** I documenti sono organizzati come un albero genealogico o strutturale:
- **Tag radice (Root):** L'elemento principale e contenitore globale di tutto il documento (< html> e < /html>).
- **Tag rami (Branches):** I tag intermedi che si trovano all'interno della radice e contengono a loro volta altri elementi.
- **Foglie (Leaves):** L'ultimo livello della struttura, ovvero il **contenuto vero e proprio** (come il testo), che non contiene ulteriori tag al suo interno.

**2. Tipologie di Tag**
- **Tag classici:** Hanno un'apertura e una chiusura per racchiudere un contenuto (es. `<titolo>...</titolo>`).
- **Tag puntuali (o vuoti / self-closing):** Si utilizzano per elementi che **non hanno un inizio e una fine** da marcare, poiché non devono racchiudere un testo o altri tag al loro interno (es. un'immagine o un'interruzione di riga).

**3. Gli Attributi** Gli attributi sono dettagli aggiuntivi inseriti nel tag di apertura che permettono di specificare informazioni o comportamenti extra in merito a quel determinato tag.

- **Sintassi:** Si scrivono sempre come coppie **nome-valore**, separate dal carattere uguale (`=`). Il valore va inserito tra virgolette.
    - _Regola:_ `nome="valore"`

**Esempi pratici di attributi:**
- **L'attributo `src` (Source):** È fondamentale quando si vogliono inserire delle immagini. Specifica il percorso o il nome del file da caricare.
    - _Uso corretto:_ Si usa con il **tag `<img>`** (es. `<img src="foto.png">`).
- **L'attributo `href` (Hypertext Reference):** Serve per specificare l'URL di destinazione di un link.
    - _Uso corretto:_ Si usa sempre insieme al **tag `<a>`** (es. `<a href="[https://www.google.it](https://www.google.it)">Vai a Google</a>`).

## l Comportamento degli Elementi (Block vs Inline)
Ogni elemento HTML ha un proprio comportamento di visualizzazione di default fornito dal browser. La distinzione fondamentale è tra:
- **Elementi di Blocco (Block-level):** Vengono rappresentati visivamente come delle "scatole" che occupano tutta la larghezza disponibile della pagina. Sono sempre preceduti e seguiti da un'andata a capo (es. `<div>`, `<p>`, `<h1>`).
- **Elementi In-linea (Inline):** Sono tipicamente "figli" degli elementi di blocco e si trovano al loro interno. Occupano solo lo spazio orizzontale strettamente necessario al loro contenuto e **non** generano un'andata a capo (es. `<a>`, `<span>`, `<strong>`, `<img>`).
## Categorie di Contenuto (HTML5 Content Models)
In HTML5, gli elementi sono raggruppati in categorie basate sul loro scopo:
- **Flow content (Contenuto di flusso):** È la categoria più ampia; contiene la maggior parte degli elementi che possono essere inseriti all'interno del tag `<body>`.
- **Sectioning content (Contenuto di sezionamento):** Sono elementi strutturali che dividono il documento in macro-parti o sezioni logiche (es. `<section>`, `<article>`, `<nav>`, `<aside>`).

## Struttura Base di un Documento HTML5
Un documento HTML5 standard deve essere strutturato in questo modo:
1. Inizia con la dichiarazione **`<!DOCTYPE html>`** per indicare al browser che si sta usando HTML5.
2. Tutto il documento è racchiuso all'interno del tag radice **`<html>`...`</html>`**.
3. All'interno del tag `<html>`, il file è diviso in due macro-aree:
    - **`<head>` (Intestazione):** Contiene informazioni sulla pagina (che non sono visibili direttamente nella pagina web) e relazioni con altri documenti. Qui troviamo il _charset_ (la codifica dei caratteri, solitamente UTF-8) e il `<title>` (che appare nel tab del browser).
    - **`<body>` (Corpo):** Racchiude il contenuto vero e proprio, ovvero tutto ciò che l'utente vedrà a schermo.

**Esempio di struttura:**
HTML
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Nome della Pagina</title>
</head>
<body>
    Contenuto del documento...
</body>
</html>
```

- **Cosa accade se non metto il tag `<title>` nell'`<head>`?** Se ometti il titolo, il documento HTML non è considerato valido secondo gli standard. A livello visivo, nel tab del browser verrà mostrato il nome del file (es. _index.html_) oppure l'URL della pagina, risultando poco professionale. Inoltre, la pagina verrà fortemente penalizzata dai motori di ricerca (SEO)
### Metadati e Fogli di Stile (CSS)

- **Metadata (Tag `<meta>`):** I metadati sono "dati che forniscono informazioni su altri dati". In HTML si usano per dare indicazioni al browser e ai motori di ricerca. Esempi tipici sono: l'autore della pagina (_author_), la descrizione per i risultati di ricerca (_description_), le parole chiave (_keywords_) o l'impostazione del _viewport_ per i dispositivi mobili.
    
- **Tag `<link>`:** Si usa per stabilire una relazione tra il documento HTML e una risorsa esterna. Il suo utilizzo più comune è **importare un foglio di stile CSS esterno** (es. `<link rel="stylesheet" href="style.css">`).
    
- **Tag `<style>`:** Si usa per inserire regole CSS (fogli di stile interni) direttamente dentro il documento HTML. Quando il browser legge questo tag, capisce che il contenuto non è più HTML, invoca il _parser_ dello styling (CSS), elabora la grafica e la applica alla struttura della pagina.