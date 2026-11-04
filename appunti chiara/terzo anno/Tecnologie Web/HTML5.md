22/09

### Elementi di Sezionamento (Sectioning Elements in HTML5)

Questi tag servono a dare un significato logico (semantico) alle diverse parti della pagina. Non servono per creare il layout grafico, ma per spiegare al browser e ai motori di ricerca cos'è quel contenuto.

- **`<header>` (Intestazione):** Funge da contenitore per elementi introduttivi (titoli, loghi) o di navigazione.
    
    - _Regola importante:_ Può avere cardinalità maggiore di 1. Non esiste solo l'header globale della pagina web, ma puoi inserire un `<header>` all'interno di ogni singola sezione o articolo.
        
- **`<footer>` (Piè di pagina):** Contiene le informazioni conclusive di una pagina o di una sezione (es. copyright, autore, contatti, link di servizio). Anche il footer, come l'header, può avere cardinalità maggiore di 1.
    
- **`<nav>` (Navigazione):** Si usa per racchiudere un gruppo di link principali o strumenti di navigazione.
    
    - _Breadcrumb (menù a briciole di pane):_ Il `<nav>` è ideale per contenere i _breadcrumb_, ovvero quei menù (ispirati alla fiaba di Pollicino) che mostrano all'utente il percorso gerarchico fatto per arrivare a quella specifica pagina (es. _Home > Informatica > Portatili_).
        
- **`<article>` (Articolo):** _(L'avevi lasciato in sospeso!)_ Serve a definire un contenuto completamente indipendente e autonomo, che avrebbe senso anche se venisse letto da solo, scollegato dal resto del sito (es. un articolo di blog, una notizia di giornale, un post su un forum).
    
- **`<aside>` (Contenuto aggiuntivo / A margine):** Definisce un contenuto secondario, tangente o di approfondimento rispetto al contenuto principale della pagina.
    
    - _Nota fondamentale:_ Il nome "aside" non si riferisce all'organizzazione del layout visivo (non deve trovarsi per forza graficamente a destra o a sinistra), ma al fatto che il suo significato è "a lato", ovvero un'aggiunta rispetto al discorso principale (es. un glossario, un box pubblicitario, link correlati).
        

### 2. I Tag di Titolo (Headings: da `<h1>` a `<h6>`)

Gli "headings" indicano il livello di intestazione e servono a definire i titoli delle sezioni e sottosezioni della pagina. Creano una vera e propria gerarchia d'importanza: si parte dall'`<h1>` (il titolo principale, il più importante) per arrivare fino all'`<h6>` (il meno importante).

**Le Regole d'Oro degli Headings:**

1. **Non usarli per la resa visiva (presentazionale):** I tag `<h1>...<h6>` non si usano per rendere il testo più grande o in grassetto (per l'aspetto visivo si usa esclusivamente il CSS). Si usano **solo** per identificare logicamente la struttura del documento.
    
2. **Non saltare i livelli (Gerarchia logica):** Non si deve mai spezzare la gerarchia. È un errore inserire un tag `<h4>` subito dopo un `<h1>`. I livelli devono scendere gradualmente (`<h1>`, poi `<h2>`, poi se serve un sotto-paragrafo un `<h3>`, ecc.). Rispettare questa regola è fondamentale per la SEO (motori di ricerca) e per l'accessibilità (persone che usano screen reader).

## Phrasing
### Elementi di Testo (Phrasing Content)

- **`<p>` (Paragrafo):** È un elemento di blocco che definisce un paragrafo di testo. Il suo comportamento di default prevede un'andata a capo prima e dopo. Essendo un contenitore generico per il testo, la regola è: usalo quando non c'è un tag testuale semanticamente più idoneo per quel contenuto.
    
- **`<br>` (Line Break):** È un tag puntuale (vuoto, che non si chiude) che inserisce un'andata a capo singola.
    
    - _Regola d'oro:_ Non va **mai** usato per creare spazio visivo tra gli elementi (per fare spazio si usano i margini in CSS!). Si usa solo quando l'andata a capo ha un reale senso logico e strutturale all'interno del testo (es. per formattare una poesia o per scrivere un indirizzo postale riga per riga).
### 2. I Contenitori Generici (Block vs Inline)

Questi due tag non hanno un reale significato semantico (non dicono _cosa_ contengono), ma sono fondamentali per la grafica e la programmazione:

- **`<div>` (Division):** È un elemento di **blocco**. Si usa per raggruppare porzioni di contenuto quando non c'è un tag strutturale più specifico (come `<section>` o `<article>`). Si usa principalmente per creare contenitori a cui applicare stili grafici (CSS) o per identificarli e manipolarli tramite JavaScript (assegnando loro classi o ID).
    
- **`<span>`:** _(L'avevi lasciato vuoto!)_ È l'esatto equivalente del `<div>`, ma è un elemento **in-linea (inline)**. Si usa per raggruppare o isolare una piccola porzione di testo all'interno di un blocco più grande (es. una singola parola dentro un paragrafo `<p>`) per poterle applicare un colore diverso col CSS o intercettarla con JS, il tutto senza causare un'andata a capo.
### 3. Struttura Primaria del Documento

- **`<main>` (Contenuto Principale):** _(Anche questo era vuoto!)_ Definisce il contenuto predominante e centrale del `<body>`. Il suo contenuto dovrebbe essere unico per quella specifica pagina (escludendo quindi gli elementi che si ripetono in tutto il sito, come menù di navigazione, header, footer e sidebar). Di norma, dovrebbe esserci un solo tag `<main>` in un documento.
    
- **L'attributo `lang` nel tag `<html>`:** Il tag radice `<html>` deve sempre includere l'attributo `lang` (es. `<html lang="it">` per l'italiano). È un requisito fondamentale perché comunica la lingua del testo al browser, ai motori di ricerca e, cosa ancora più importante, ai software di sintesi vocale (screen reader) usati dalle persone non vedenti, garantendo l'accessibilità della pagina.

### Il Ruolo del Testo (Elementi Semantici)

È fondamentale ricordare che in HTML5 i tag testuali devono essere usati per il loro valore **semantico** (il significato logico) e non per la pura resa visiva (presentazionale).

- **`<em>` (Stress emphasis):** Indica un testo o una frase che si pronuncia in modo differente dal resto del discorso. Il browser, di default, lo rende in corsivo, ma il suo vero scopo è dare enfasi semantica alla pronuncia.
    
- **`<strong>` (Strong importance):** Serve a definire un testo importante. Visivamente appare in grassetto, ma l'obiettivo primario è segnalare l'importanza del contenuto.
    
- **`<abbr>`:** Utilizzato per definire abbreviazioni o acronimi. È necessario utilizzare l'attributo `title` all'interno del tag per inserire la versione espansa del termine (in questo modo, passando con il mouse sopra l'acronimo, l'utente leggerà il significato completo).
    
- **`<code>`:** Si utilizza per formattare porzioni di codice (incluso codice HTML stesso).
    
- **Tag DEPRECATI (Da non usare mai!):** Evita i tag nati con scopi puramente visivi. Tra questi ci sono il tag `<i>` (usato in passato per testo in voce alternativa, come termini tecnici o testo in un'altra lingua) e il tag `<b>` (usato per testo visivamente in grassetto, l'offset text).
### Contenuti Embedded (Risorse Multimediali)

Il contenuto di tipo **Embedded** ha lo scopo di importare risorse o contenuti esterni dentro il documento HTML. Questi elementi fanno principalmente riferimento all'area dei sistemi multimediali.

- **Contenuto Fallback:** Alcuni elementi embedded (come `<audio>`, `<video>`, `<embed>`, `<object>`) prevedono un contenuto di "fallback". Questo contenuto di emergenza viene mostrato all'utente quando la risorsa esterna non può essere utilizzata, ad esempio se ha un formato non supportato.
### Immagini e Didascalie

Tra gli elementi embedded troviamo anche le immagini (`<img>`).

**Le immagini inline (`<img>`)** Le immagini inline sono definite attraverso l'elemento `<img>`. Questo tag richiede due attributi obbligatori:

- **L'attributo `src`:** Specifica l'URL del file contenente l'immagine. I formati consentiti dai browser includono PNG, GIF, JPEG e persino formati vettoriali come SVG (questo permette ai browser moderni di fare il parsing di HTML e SVG contemporaneamente).
    
- **L'attributo `alt` (Testo alternativo):** Viene visualizzato nel caso in cui il browser non riesca a caricare l'immagine o se le immagini sono disabilitate. È un attributo **indispensabile** per gli utenti non vedenti. Il suo obiettivo è veicolare la stessa informazione e lo stesso senso che l'immagine vuole trasmettere, non limitandosi a una banale descrizione visiva.

**Immagini con didascalia (`<figure>` e `<figcaption>`)**

Ad oggi, per strutturare correttamente un'immagine accompagnata dal relativo testo esplicativo, si usano tag semantici specifici:

- **`<figure>`:** Questo tag funge da contenitore e raggruppa logicamente l'immagine e la sua didascalia.
    
- **`<figcaption>`:** Definisce la didascalia vera e propria dell'immagine e va inserito all'interno del tag `<figure>`.
    
- Per ridimensionare l'immagine vera e propria (`<img>`) all'interno del blocco, si possono utilizzare gli attributi `width` e `height` specificando le dimensioni.

I browser moderni sono in grado di fare parsing di tìhtml e svg contemporanemante.

![[Pasted image 20260922150627.png]]

In caso di testo complesso usare anche **alt**.
Non dire cosa rappresenta l'immagine, ma la sua funzionalità/scopo.

In caso di immagini complesse deve sempre essere presente e deve essere usato per la descrizione breve, che dia un overview breve dell'immagine.

Se voglio usare una didascalia è consigliabile usare figure con all'interno fig e figcaption per collegare il contenuto all'immagine, in caso di immaine semplice basta alt.

++parte che hai dormito

25/09

## Tabelle in HTML

- **Tipi di celle:** Le tabelle HTML utilizzano due tipi principali di celle: quelle di contenuto standard (`<td>`) e quelle di intestazione (`<th>`).
    
- **Posizionamento delle intestazioni:** A seconda di dove posizioniamo il tag `<th>`, possiamo definire le intestazioni per le colonne oppure per le righe.
    
- **Intestazioni multiple:** Possiamo avere più righe dedicate alle celle di intestazione. Inoltre, una singola cella di contenuto può far riferimento a più intestazioni contemporaneamente.
    
- **Il tag `<caption>`:** Questo tag permette di aggiungere una didascalia descrittiva alla tabella. È una pratica fondamentale per l'accessibilità (aiuta i software di lettura per non vedenti a contestualizzare i dati) e per la SEO (facilita il parsing da parte dei motori di ricerca).

- **Strutture flessibili:** Le tabelle HTML possono essere articolate in molti modi per adattarsi a layout complessi.
    
- **Espansione delle celle:** Non è obbligatorio che una singola cella (sia essa `<td>` o `<th>`) sia limitata allo spazio di una sola riga o di una sola colonna.
    
- **Gli attributi `colspan` e `rowspan`:** Per estendere le dimensioni di una cella, si utilizzano questi due attributi specifici all'interno del tag della cella:
    
    - **`colspan` (Column Span):** Permette a una cella di estendersi orizzontalmente su più colonne. Ad esempio, scrivere `<td colspan="2">` fa in modo che quella cella occupi lo spazio di due colonne adiacenti.
        
    - **`rowspan` (Row Span):** Permette a una cella di estendersi verticalmente su più righe. Ad esempio, scrivere `<td rowspan="3">` fa in modo che la cella occupi lo spazio di tre righe sottostanti.

>*mailto:* permette di creare un email vuota quando si clicca sull'indirizzo email di qualcuno

In caso di dubbio meglio abbondare con gli attributi di descrizione di celle/tabelle.

L'attributo `scope` in HTML si utilizza esclusivamente all'interno del tag `<th>` (le celle di intestazione) e serve a specificare in modo inequivocabile **a quali celle di contenuto (`<td>`) fa riferimento quell'intestazione**.

Anche se visivamente una tabella può sembrare chiara, per i software (come gli screen reader per non vedenti) non lo è. Lo `scope` crea un collegamento logico esplicito tra i titoli e i dati.

I quattro valori che puoi assegnare all'attributo `scope` sono:

- **`scope="col"`:** Indica che l'intestazione si applica a tutte le celle di quella specifica **colonna** (dall'alto verso il basso).
    
- **`scope="row"`:** Indica che l'intestazione si applica a tutte le celle di quella specifica **riga** (da sinistra verso destra).
    
- **`scope="colgroup"`:** Indica che l'intestazione si applica a un **gruppo di colonne**. Si usa in tabelle molto complesse, spesso in combinazione con l'attributo `colspan` e il tag `<colgroup>`.
    
- **`scope="rowgroup"`:** Indica che l'intestazione si applica a un **gruppo di righe**. Si usa in combinazione con l'attributo `rowspan` o con le sezioni strutturali della tabella (come `<tbody>`).
    

> **Nota sull'accessibilità:** Mentre `colspan` e `rowspan` cambiano la struttura _visiva_ della tabella allargando le celle, `scope` non cambia nulla visivamente, ma lavora "dietro le quinte" per rendere la tabella accessibile e semanticamente corretta.

LISTE IN HTML

Cosa sono le form
meccanismo principale per raccogliere i dati inseriti dall'utente.

FORM
Una form è una sorta di interfaccia tra l'utente e il sistema ched eve elaborare i dati.

Differenza tra radio button e checkbox: radio button è una scelta, checkbox posso fare più scelte.

FIELDSET e LABEL sono fonamentali per checkbox e radio buttton, perchè permette raggruppamenti.

Ho 3 tipi di azioni:
- reset
- submit
- button

text è un tipo di input generico, non vieen fatto alcun controllo
email = controlla ci sia almeno una @
url = è