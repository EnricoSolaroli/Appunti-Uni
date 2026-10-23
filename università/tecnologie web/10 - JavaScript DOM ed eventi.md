[9_js_DOM_eventi](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/9_js_DOM_eventi.pdf>)

# JavaScript – DOM ed eventi

## Indice

1. **JavaScript nel browser** (slide 1–11)
	- [[#Slide 1 – JavaScript|Apertura della lezione e argomenti]]
	- [[#Slide 3 – Javascript nel browser|Motore JavaScript e ambiente del browser]]
	- [[#Slide 4 – JS nel browser: linguaggio e ambiente di esecuzione|ECMAScript, JavaScript engine e Web API]]
	- [[#Slide 5 – Browser e JavaScript|Rendering engine, JavaScript engine e Web API]]
	- [[#Slide 6 – Architettura Browser|Architettura del browser]]
	- [[#Slide 7 – Call Stack e Heap|Call stack e heap]]
	- [[#Slide 8 -> 9 – Esempio|Esempio: call stack durante greet()]]
	- [[#Slide 10 – Web API|Le principali Web API]]
	- [[#Slide 11 – Esempio|setTimeout ed event loop]]
2. **Il DOM: struttura e selezione degli elementi** (slide 12–19)
	- [[#Slide 12 – DOM|Che cos'è il DOM]]
	- [[#Slide 13 – DOM: esempio|Dal codice HTML all'albero DOM]]
	- [[#Slide 14 – Accedere al DOM|document, element e node]]
	- [[#Slide 15 – Accedere al DOM: esempio|querySelector restituisce un riferimento]]
	- [[#Slide 16 -> 19 – Selezionare gli elementi del DOM|querySelector e querySelectorAll]]
3. **Modificare il DOM** (slide 20–31)
	- [[#Slide 20 – Leggere e modificare contenuto|textContent e innerHTML (attenzione a XSS)]]
	- [[#Slide 21 -> 22 – Leggere e modificare: esempi|Esempi: testo contro markup]]
	- [[#Slide 23 – Modificare classi e attributi|classList, getAttribute e setAttribute]]
	- [[#Slide 24 – Esempio con `class`|Esempio con classList]]
	- [[#Slide 25 – Esempio con attributi|Esempio con gli attributi]]
	- [[#Slide 26 – Creare e aggiungere nuovi elementi|createElement e append]]
	- [[#Slide 27 -> 28 – Esempio|Esempio: aggiungere un elemento alla lista]]
	- [[#Slide 29 – Rimuovere elementi|remove()]]
	- [[#Slide 30 – Riepilogo DOM|Tabella riepilogativa delle API del DOM]]
	- [[#Slide 31 – Concludendo il DOM|Il DOM come rappresentazione dinamica]]
4. **Domanda bonus 1** (slide 32)
	- [[#Slide 32 – Prima domanda|Domanda 1: append di una cella in una tabella]]
5. **Programmazione event-driven e listener** (slide 33–43)
	- [[#Slide 33 – Programmazione event-driven|Programmazione event-driven]]
	- [[#Slide 34 – Alcuni eventi|Eventi principali: click, input, submit, keydown]]
	- [[#Slide 35 – Registrare un listener con `addEventListener()`|addEventListener()]]
	- [[#Slide 36 -> 37 – Esempio|Esempio di listener]]
	- [[#Slide 38 – Eventi e accessibilità: indipendenza dal dispositivo|Eventi e accessibilità]]
		- Azione legata solo al puntatore contro controllo HTML nativo
	- [[#Slide 42 -> 43 – L'oggetto evento|L'oggetto evento: type, target, currentTarget]]
6. **Propagazione degli eventi** (slide 44–55)
	- [[#Slide 44 – Propagazione degli eventi|Capturing, target e bubbling]]
	- [[#Slide 47 – `target` e `currentTarget`|target e currentTarget]]
	- [[#Slide 50 – `preventDefault()`|preventDefault()]]
	- [[#Slide 53 – `stopPropagation()`|stopPropagation()]]
7. **Event delegation** (slide 56–59)
	- [[#Slide 56 – Event delegation|Un solo listener sul contenitore]]
	- [[#Slide 57 -> 58 – Esempio|Esempio: pulsanti "Rimuovi" con closest()]]
8. **Form e validazione** (slide 60–73)
	- [[#Slide 60 – Form e Validazione|Perché validare i dati]]
	- [[#Slide 62 – Form e DOM: leggere i valori dei campi|Leggere i campi con value]]
	- [[#Slide 65 – Validazione dichiarativa con HTML|Vincoli HTML: required, minlength, type, min/max]]
	- [[#Slide 67 – Gestire l'invio: l'evento `submit`|L'evento submit]]
	- [[#Slide 69 -> 70 – Validazione e submit: in quale ordine?|Prima la validazione nativa, poi submit]]
	- [[#Slide 71 – Constraint Validation API|Constraint Validation API e setCustomValidity()]]
	- [[#Slide 73 – Validazione lato client e lato server|Validazione lato client e lato server]]
9. **Domanda bonus 2** (slide 74–75)
	- [[#Slide 74 -> 75 – Seconda domanda|Domanda 2: validazione nativa e listener submit]]

---
## Slide 1 – JavaScript

![[TW10-s001-1.png|200]]

---
## Slide 2 – Argomenti

- JavaScript:
	- Javascript nel browser
	- DOM
	- Eventi
	- Form e Validazione
---
## Slide 3 – Javascript nel browser

- Il ***motore JavaScript*** esegue il codice, ma è il ***browser*** che fornisce l'ambiente e le API attraverso cui JavaScript interagisce con la pagina Web e con il mondo esterno

![[TW10-s003-1.png|700]]

***ECMAScript*** definisce il linguaggio Il motore Javascript lo esegue. Il browser fornisce l'ambiente in cui quel codice può interagire con il Web.

>differenza fra session e local storage potrebbe essere una papabile domanda di teoria all'esame.

---
## Slide 4 – JS nel browser: linguaggio e ambiente di esecuzione

- JavaScript viene eseguito all'interno del browser grazie a un componente dedicato, il JavaScript engine, che interpreta e compila il codice per eseguirlo
	- **ECMAScript** definisce il linguaggio: tipi, oggetti, funzioni, operatori e meccanismi di esecuzione.
	- Il **JavaScript engine** implementa il linguaggio ed esegue il codice.
	- Il **browser** fornisce ulteriori funzionalità, attraverso le Web API, per interagire con documenti HTML, eventi, rete e altre risorse.

```js
// Funzionalità del linguaggio ECMAScript
const numbers = [1, 2, 3];
const doubled = numbers.map(x => x * 2);

// Funzionalità fornite dal browser
const title = document.querySelector("h1");
window.setTimeout(() => { console.log("Hello!"); }, 1000);
```

***Il metodo*** `map()` ***appartiene al linguaggio JS;*** `document`, `window` ***e*** `setTimeout()` ***sono messi a disposizione dall'ambiente browser***, in particolare document mi permette di andare a modificare il doc html.

---
## Slide 5 – Browser e JavaScript

- Un browser è un sistema software composto da diversi sottosistemi che collaborano per interpretare, eseguire e visualizzare una pagina Web.
- Tra i principali componenti troviamo:
	- ***Rendering engine***: elabora HTML e CSS, costruisce DOM e CSSOM e gestisce layout e rendering della pagina
	- ***JavaScript engine***: esegue il codice JavaScript, gestendo le chiamate alle funzioni e gli oggetti in memoria
	- ***Web API***: forniscono al codice JavaScript le interfacce necessarie per interagire con il browser e le sue funzionalità

>> Esempi concreti: Chrome usa Blink (rendering) + V8 (JavaScript); Firefox usa Gecko + SpiderMonkey; Safari usa WebKit + JavaScriptCore.

---
## Slide 6 – Architettura Browser

![[TW10-s006-1.png|600]]

Il DOM è una struttura gestita dal browser e accessibile tramite API, non un componente interno al motore JavaScript

Le Web API non sono necessariamente un sottosistema fisicamente separato dal rendering engine, e l'architettura interna varia tra browser e browser

---
## Slide 7 – Call Stack e Heap

- Durante l'esecuzione del codice, il JavaScript engine utilizza principalmente due strutture:
	- ***Call Stack***: memorizza i contesti di esecuzione delle funzioni attive, seguendo una politica LIFO (Last In, First Out). Quando una funzione viene chiamata, il relativo contesto viene aggiunto allo stack; quando termina, viene rimosso
	- ***Heap***: è l'area di memoria utilizzata per allocare dinamicamente oggetti e altre strutture dati. La memoria non più raggiungibile può essere recuperata automaticamente dal ***garbage collector***

>> Il contesto di esecuzione contiene, tra l'altro, le variabili locali della funzione e il punto da cui riprendere al ritorno. Gli oggetti invece stanno nello heap: nello stack resta solo il riferimento.
>> Una ricorsione senza caso base riempie lo stack: `RangeError: Maximum call stack size exceeded` (lo "stack overflow").

---
## Slide 8 -> 9 – Esempio

```js
function greet(name) {
    return "Hello, " + name;
}
function welcome() {
    const message = greet("Alice");
    console.log(message);
}
welcome();
```

***Quando*** `greet()` ***termina, il suo contesto viene rimosso; l'esecuzione riprende all'interno di*** `welcome()`

- Nel normale contesto JavaScript della pagina, una sola funzione JavaScript viene eseguita alla volta sul thread principale
- Questo non significa che il browser sia complessivamente single-threaded: il browser può utilizzare altri thread e processi per rendering, rete e altre attività

>> Il codice stampa `Hello, Alice` (verificato con node).

![[TW10-s009-1.png|700]]

>> Dopo il passo 4, anche `console.log(message)` viene momentaneamente aggiunto allo stack e poi rimosso; quando `welcome()` termina lo stack torna a contenere solo lo script globale, che a sua volta viene rimosso alla fine.

---
## Slide 10 – Web API

- Il JavaScript engine, da solo, non offre tutte le funzionalità necessarie a un'applicazione Web
- Il browser mette a disposizione numerose Web API, che consentono al codice JavaScript di interagire con la pagina, rispondere agli eventi, effettuare richieste HTTP e utilizzare altre funzionalità del dispositivo

| API | Funzione | Esempio |
|---|---|---|
| DOM API | Accedere e modificare il documento HTML | `document.querySelector()` |
| Event API | Gestire eventi dell'utente e del browser | `addEventListener()` |
| Timer API | Pianificare operazioni temporizzate | `setTimeout()` |
| Fetch API | Effettuare richieste HTTP | `fetch()` |
| Web Storage API | Memorizzare dati nel browser | `localStorage()` |

>> Attenzione: `localStorage` non è una funzione ma un oggetto, quindi `localStorage()` darebbe `TypeError`. Si usa con i suoi metodi, es. `localStorage.setItem("theme", "dark")` e `localStorage.getItem("theme")`.

---
## Slide 11 – Esempio

```js
console.log("Start");
setTimeout(() => {
    console.log("Timer completed");
}, 1000);
console.log("End");
```

Risultato

```
Start
End
Timer completed
```

- **`setTimeout()`** utilizza una funzionalità fornita dal browser. La callback viene resa eseguibile dopo la scadenza del timer, ma non interrompe il codice JavaScript già in esecuzione
- La sua esecuzione viene gestita attraverso il meccanismo dell'event loop (lo approfondiremo successivamente)
- **JavaScript esegue la logica applicativa**
- **le Web API consentono di interagire con l'ambiente browser**
- **l'event loop coordina l'esecuzione delle attività asincrone**

>> Output verificato con node. L'ordine sarebbe lo stesso anche con `setTimeout(..., 0)`: la callback entra in coda e può essere eseguita solo quando il call stack è vuoto, cioè dopo che lo script ha stampato `End`.
>> Il ritardo indicato è un tempo *minimo*, non garantito: se il thread principale è occupato, la callback parte più tardi.

---
## Slide 12 – DOM

- Il **Document Object Model (DOM)** è una rappresentazione strutturata del documento HTML sotto forma di un albero di nodi, accessibile attraverso un'interfaccia di programmazione
- Il browser costruisce il DOM durante il parsing del documento HTML
- Attraverso le DOM API, JavaScript può accedere agli elementi della pagina, leggerne e modificarne le proprietà, aggiungere nuovi nodi o rimuovere quelli esistenti
- ***Il DOM non coincide con il codice HTML sorgente***: rappresenta lo stato corrente del documento e può cambiare dinamicamente durante l'esecuzione della pagina

>> Esempi di differenze tra sorgente e DOM: il parser corregge l'HTML malformato (chiude tag lasciati aperti, aggiunge `<tbody>` nelle tabelle, `<head>`/`<body>` se mancano) e JavaScript può aggiungere o togliere nodi. "Visualizza sorgente" mostra l'HTML originale, il pannello *Elements* dei DevTools mostra il DOM corrente.

---
## Slide 13 – DOM: esempio

![[TW10-s013-1.png|500]]

>> Nel DOM reale, oltre ai nodi elemento, esistono anche i nodi di testo per gli spazi e gli a capo tra i tag (qui omessi dal disegno), e la radice dell'albero è l'oggetto `document`, di cui `html` è figlio.

---
## Slide 14 – Accedere al DOM

- Nel browser, l'oggetto globale **`document`** rappresenta il documento HTML corrente e costituisce il principale punto di accesso al DOM
- Attraverso le sue API possiamo individuare gli elementi presenti nella pagina e ottenere riferimenti agli oggetti che li rappresentano:
	- **`document`** rappresenta il documento nel suo complesso
	- **`element`** rappresenta un elemento del documento, come `<p>`, `<div>` o `<button>`
	- **`node`** è un'interfaccia più generale che comprende elementi, nodi di testo e altri tipi di nodi

>> Gerarchia: ogni `Element` è un `Node`, ma non ogni `Node` è un `Element` (es. i nodi di testo e i commenti). Anche `document` è un `Node`.

---
## Slide 15 – Accedere al DOM: esempio

```html
<h1 id="title">Welcome!</h1>
<p class="message">Hello, Alice!</p>
```

```js
const title = document.querySelector("#title"); //resituisce il primo elemento corrispondente
console.log(title.tagName);     // "H1"
console.log(title.textContent); // "Welcome!"
```

`querySelector()` ***restituisce un riferimento all'elemento del DOM, non una copia del codice HTML***

>> `tagName` restituisce il nome del tag in maiuscolo per i documenti HTML (per questo `"H1"` e non `"h1"`).
>> Essendo un riferimento, modificare `title` (es. `title.textContent = "Ciao"`) cambia subito la pagina.
>> Se nessun elemento corrisponde, `querySelector()` restituisce `null` e `title.tagName` genera `TypeError: Cannot read properties of null`.

---
## Slide 16 -> 19 – Selezionare gli elementi del DOM

- Per interagire con un elemento, JavaScript deve prima individuarlo nel DOM
- I metodi **`querySelector()`** e **`querySelectorAll()`** permettono di selezionare elementi utilizzando la stessa sintassi dei selettori CSS

| Metodo | Risultato |
|---|---|
| `document.querySelector` | Primo elemento corrispondente, oppure `null` |
| `document.querySelectorAll` | `NodeList` degli elementi corrispondenti, eventualmente vuota |

>> Esistono anche i metodi più vecchi `getElementById("menu")` (senza `#`), `getElementsByClassName("item")` e `getElementsByTagName("li")`. Questi ultimi due restituiscono una `HTMLCollection` *live*, che a differenza della NodeList di `querySelectorAll` si aggiorna da sola quando il DOM cambia.

```html
<ul id="menu">
    <li class="item">Home</li>
    <li class="item">Courses</li>
    <li class="item">Contacts</li>
</ul>
```

![[TW10-s017-1.png|450]]

```js
const menu = document.querySelector("#menu");
```

***restituisce un riferimento all'elemento*** `<ul id="menu">`***, dal quale è possibile accedere anche a tutti i nodi del suo sottoalbero DOM; quindi restituisce un singolo oggetto*** `Element`***, non una collezione di elementi e nemmeno una copia dell'intero sottoalbero; attraverso quel riferimento è possibile accedere a tutti i nodi discendenti, ad esempio usando*** `menu.children`, `menu.childNodes` ***oppure*** `menu.querySelectorAll("li")`

>> Differenza: `menu.children` contiene solo gli elementi figli (i 3 `<li>`), mentre `menu.childNodes` contiene tutti i nodi figli, compresi i nodi di testo degli spazi/a capo tra i tag (qui 7 nodi: 4 di testo + 3 `<li>`).

```html
<ul id="menu">
    <li class="item">Home</li>
    <li class="item">Courses</li>
    <li class="item">Contacts</li>
</ul>
```

![[TW10-s018-1.png|450]]

```js
const firstItem = document.querySelector(".item");
```

***restituisce un riferimento al primo elemento del DOM che corrisponde al selettore*** `.item` ***ovvero*** `<li class="item">Home</li>`***; anche in questo caso viene restituito un singolo oggetto*** `Element` ***attraverso il quale è possibile accedere agli eventuali nodi discendenti dell'elemento selezionato***

```html
<ul id="menu">
    <li class="item">Home</li>
    <li class="item">Courses</li>
    <li class="item">Contacts</li>
</ul>
```

![[TW10-s019-1.png|450]]

```js
const allItems = document.querySelectorAll(".item");
```

***restituisce una*** `NodeList`***, che contiene i riferimenti agli elementi del DOM che corrispondono al selettore*** `.item` ***ovvero i tre*** `<li class="item">…</li>`***; la*** `NodeList` ***restituita è statica (static NodeList): rappresenta gli elementi selezionati al momento della chiamata e non si aggiorna automaticamente se e quando vengono aggiunti o rimossi elementi dal DOM***

>> Una `NodeList` non è un array: ha `length`, l'accesso per indice (`allItems[0]`) e `forEach()`, ma non `map()`/`filter()`. Per usarli: `Array.from(allItems)` oppure `[...allItems]`.
>> "Statica" riguarda l'*elenco*, non gli elementi: se si modifica il testo di `allItems[0]`, la modifica si vede nella pagina, perché è un riferimento all'elemento vero.

---
## Slide 20 – Leggere e modificare contenuto

- Una volta selezionato un elemento del DOM, JavaScript può leggerne e modificarne il contenuto
- Due proprietà particolarmente utilizzate sono:
	- **`textContent`**: legge o imposta il contenuto testuale dell'elemento
	- **`innerHTML`**: legge o imposta il markup HTML contenuto nell'elemento, che viene interpretato dal browser.

***ATTENZIONE!***
L'utilizzo di `innerHTML` con contenuti provenienti da utenti o fonti non attendibili ***può introdurre vulnerabilità di tipo Cross-Site Scripting (XSS)***
Per inserire semplice testo è preferibile utilizzare `textContent`

>> Esempio di XSS: se il nome inserito dall'utente è `<img src="x" onerror="alert('XSS')">` e lo si inserisce con `innerHTML`, il browser crea l'immagine, il caricamento fallisce e il codice in `onerror` viene eseguito. Un `<script>` inserito con `innerHTML` invece non viene eseguito, ma gli attributi evento sì. Con `textContent` la stessa stringa viene solo mostrata come testo.

---
## Slide 21 -> 22 – Leggere e modificare: esempi

```html
<p id="message">Original text</p>
```

```js
const message = document.querySelector("#message");
message.textContent = "Hello, Alice!";
```

```html
<p id="message">Hello, Alice!</p>
```

```js
const message = document.querySelector("#message");
message.innerHTML = "Hello, Alice!";
```

```html
<p id="message">Hello, Alice!</p>
```

>> Con semplice testo (senza tag) le due proprietà danno lo stesso risultato.

```html
<p id="message">Original text</p>
```

```js
const message = document.querySelector("#message");
message.textContent = "<strong>Hello Alice!</strong>";
```

```html
<p id="message">
    &lt;strong&gt;Hello!&lt;/strong&gt;
</p>
```

```js
const message = document.querySelector("#message");
message.innerHTML = "<strong>Hello Alice!</strong>";
```

```html
<p id="message">
    <strong>Hello, Alice!</strong>
</p>
```

`textContent` → ***inserisce la stringa come testo, senza interpretarne il markup***
`innerHTML` → ***interpreta la stringa come markup HTML***

>> Refuso nella slide: la stringa assegnata è `"<strong>Hello Alice!</strong>"`, quindi i risultati sarebbero `&lt;strong&gt;Hello Alice!&lt;/strong&gt;` e `<strong>Hello Alice!</strong>` (non `Hello!` e non `Hello, Alice!` con la virgola).
>> Con `textContent` nel DOM c'è un unico nodo di testo che contiene letteralmente i caratteri `<strong>…`; la forma con `&lt;` e `&gt;` è come quel testo viene serializzato in HTML (es. leggendo `message.innerHTML`), e sulla pagina si vedono i tag come testo. Con `innerHTML` si crea invece un vero elemento `<strong>` e il testo appare in grassetto.
>> Entrambe le proprietà, in scrittura, sostituiscono tutto il contenuto precedente dell'elemento.

---
## Slide 23 – Modificare classi e attributi

- Le DOM API permettono di modificare dinamicamente gli attributi degli elementi HTML e le classi CSS loro associate
- In particolare, la proprietà `classList` consente di aggiungere, rimuovere o alternare classi senza modificare direttamente l'intero attributo `class`
- In pratica: JavaScript può modificare la struttura e gli attributi degli elementi, mentre CSS continua a controllarne la presentazione

>> Metodi principali di `classList`: `add("c")`, `remove("c")`, `toggle("c")` (aggiunge se manca, toglie se c'è), `contains("c")` (restituisce `true`/`false`), `replace("old", "new")`.
>> In alternativa esiste `element.className`, una stringa con tutto l'attributo `class`: assegnandola si sovrascrivono tutte le classi esistenti, per questo `classList` è più comodo.

---
## Slide 24 – Esempio con `class`

```html
<p id="message">Important message</p>
```

```css
.highlight {
    background-color: yellow;
    font-weight: bold;
}
```

```js
const message = document.querySelector("#message");
message.classList.add("highlight");
```

```html
<p id="message" class="highlight">Important message</p>
```

>> È preferibile a scrivere direttamente `message.style.backgroundColor = "yellow"`: lo stile resta nel CSS e JavaScript si limita a cambiare lo stato (la classe).

---
## Slide 25 – Esempio con attributi

```html
<img src="logo.png" alt=""/>
```

```js
const image = document.querySelector("img");
image.setAttribute("alt", "University logo");
console.log(image.getAttribute("alt"));
```

```html
<img src="logo.png" alt="University logo"/>
```

***Possiamo usare direttamente le proprietà DOM corrispondenti, quando disponibili:***

```js
image.alt = "University logo";
```

>> Il `console.log` stampa `University logo`. Esistono anche `hasAttribute("alt")` e `removeAttribute("alt")`.
>> Attributo e proprietà non sempre coincidono: ad esempio la proprietà `image.src` restituisce l'URL assoluto (`http://…/logo.png`), mentre `getAttribute("src")` restituisce il valore scritto nell'HTML (`logo.png`); l'attributo `class` corrisponde alla proprietà `className`.

---
## Slide 26 – Creare e aggiungere nuovi elementi

- JavaScript può creare dinamicamente nuovi nodi e inserirli nel DOM, modificando la struttura del documento senza dover ricaricare la pagina
- Il metodo `document.createElement()` crea un nuovo elemento, inizialmente non inserito nel documento
- Il metodo `append()` permette di aggiungerlo come ultimo figlio di un elemento esistente

>> Finché non viene inserito con `append()` (o metodi simili), l'elemento creato esiste solo in memoria e non è visibile nella pagina.
>> `append()` accetta anche più argomenti e stringhe (che diventano nodi di testo); il più vecchio `appendChild()` accetta un solo nodo. Per inserire come primo figlio c'è `prepend()`.
---
## Slide 27 -> 28 – Esempio

```html
<ul id="courses">
    <li>HTML</li>
    <li>CSS</li>
</ul>
```

```js
const list = document.querySelector("#courses");
// Creazione di un nuovo elemento
const li = document.createElement("li");
// Impostazione del contenuto
li.textContent = "JavaScript";
// Inserimento nel DOM
list.append(li);
```

```html
<ul id="courses">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

![[TW10-s028-1.png|700]]

1. `document.createElement("li")` – Crea un elemento non ancora inserito nel DOM → Elemento creato (in memoria, non nel DOM): `<li></li>`
2. `li.textContent = "JavaScript"` – Imposta il contenuto → Elemento creato (in memoria, non nel DOM): `<li>JavaScript</li>`
3. `list.append(li)` – Inserisce l'elemento nel DOM → Nel DOM (in pagina): la `<ul id="courses">` contiene ora anche `<li>JavaScript</li>`
- HTML iniziale → *Dopo l'esecuzione delle tre istruzioni* → HTML risultante (DOM aggiornato)

>> Finché non viene chiamato `append()` (o un metodo equivalente) l'elemento creato con `createElement()` esiste solo in memoria e non compare nella pagina.
>> `append()` aggiunge il nodo come **ultimo figlio** del genitore; esiste anche `prepend()` per inserirlo come primo figlio. Il file sorgente HTML non cambia: cambia solo il DOM in memoria (lo si vede in DevTools → Elements, non con "Visualizza sorgente").

---
## Slide 29 – Rimuovere elementi

- Oltre a creare e modificare elementi, JavaScript permette di rimuoverli dal documento
- Il metodo `remove()` elimina l'elemento dal DOM, mentre altre API consentono di sostituire o spostare nodi esistenti

```js
const firstItem = document.querySelector("#courses li");
firstItem.remove();
```

***Il primo elemento della lista viene rimosso dal documento***

>> `querySelector()` restituisce solo il **primo** elemento che corrisponde al selettore, quindi viene rimosso `<li>HTML</li>`. Se nessun elemento corrisponde restituisce `null` e `firstItem.remove()` genera un `TypeError`.
>> Esempi delle "altre API": `replaceWith()` per sostituire un nodo; per spostarlo basta fare `append()` di un nodo già presente nel DOM, che viene tolto dalla posizione precedente (un nodo non può stare in due punti contemporaneamente).

---
## Slide 30 – Riepilogo DOM

| Operazione | API |
|---|---|
| Selezionare | `querySelector()`, `querySelectorAll()` |
| Leggere/modificare testo | `textContent` |
| Modificare markup | `innerHTML` |
| Gestire classi CSS | `classList` |
| Gestire attributi | `getAttribute()`, `setAttribute()` |
| Creare elementi | `createElement()` |
| Inserire elementi | `append()` |
| Rimuovere elementi | `remove()` |

---
## Slide 31 – Concludendo il DOM

- Il DOM è una rappresentazione dinamica del documento HTML: JavaScript può modificarne contenuto, attributi e struttura durante l'esecuzione della pagina, senza richiedere necessariamente un nuovo caricamento del documento

![[TW10-s031-1.png|700]]

- **HTML** – Struttura iniziale: `<ul id="courses">` con `<li>HTML</li>` e `<li>CSS</li>`
- **DOM** – Rappresentazione modificabile: nodo `ul` (`id="courses"`) con figli `li` (HTML) e `li` (CSS)
- **JavaScript** – Lettura e modifiche (lettura ← DOM, modifiche → DOM):

```js
const list = document.
  querySelector("#courses");

// legge elementi dal DOM
const items = list.children;

// modifica il DOM
const li = document.
  createElement("li");
li.textContent = "JavaScript";
list.append(li);
```

---
## Slide 32 – Prima domanda

**BONUS**

- **DOMANDA 1:**

Dato il codice HTML, quale delle seguenti affermazioni descrive correttamente il risultato dell'esecuzione del codice JS?

```html
<table id="grades">
  <tr>
    <td>Alice</td>
    <td>28</td>
  </tr>
</table>
```

```js
const row = document.querySelector("#grades tr");
const cell = document.createElement("td");
cell.textContent = "Passed";
row.append(cell);
```

- [ ] Viene creata una nuova riga `<tr>` contenente la cella "*Passed*"
- [ ] Il contenuto della seconda cella della riga viene sostituito con "*Passed*"
- [ ] Viene aggiunta una nuova cella `<td>` contenente "*Passed*" come ultima cella della riga esistente
- [ ] La nuova cella viene creata, ma non viene inserita nel DOM perché `append()` può essere utilizzato soltanto con gli elementi `<ul>` e `<ol>`

>> **Risposta corretta: la terza.** `querySelector("#grades tr")` seleziona la riga esistente, `createElement("td")` crea una cella nuova (non una riga), e `append()` la aggiunge come ultimo figlio della riga: la riga diventa `Alice | 28 | Passed`. Nessuna cella esistente viene sostituita e `append()` funziona su qualunque elemento, non solo su liste.
>> Verificato con node (jsdom): il risultato è `<tr><td>Alice</td><td>28</td><td>Passed</td></tr>`.
>> Dettaglio: il parser HTML inserisce automaticamente un `<tbody>` tra `<table>` e `<tr>`, ma il selettore `#grades tr` (discendente, non figlio diretto) trova comunque la riga.

---
## Slide 33 – Programmazione event-driven

- Nelle applicazioni Web, molte istruzioni vengono eseguite in risposta a un ***evento***:
	- attivazione di un pulsante
	- modifica di un campo
	- invio di una form
	- completamento di un'operazione
	- …
- Per reagire a un evento, registriamo una funzione attraverso un ***event listener***
- Quando l'evento viene gestito, il browser invoca la funzione associata, detta ***event handler***
- La funzione può leggere dati, modificare lo stato dell'applicazione e aggiornare il DOM

>> Nel linguaggio comune "listener" e "handler" vengono spesso usati come sinonimi; qui la distinzione è: il *listener* è la registrazione (evento + funzione su un elemento), l'*handler* è la funzione che viene eseguita.

---
## Slide 34 – Alcuni eventi

| Evento | Quando si verifica |
|---|---|
| `click` | Attivazione di un elemento, ad esempio un pulsante |
| `input` | Modifica del valore di un campo da parte dell'utente |
| `submit` | Invio di una form |
| `keydown` | Pressione di un tasto |

***Registriamo il comportamento da eseguire quando si verifica un evento***

![[TW10-s034-1.png|700]]

- Evento → Listener registrato → Esecuzione della callback → Aggiornamento del DOM
- Attivazione del pulsante → esecuzione della funzione → aggiunta di un corso alla lista

- Nota Bene! `click` non significa necessariamente uso del mouse: un pulsante può essere attivato anche da tastiera. E' necessario fare attenzione ad usare eventi senza che questi siano necessariamente legati ad un solo dispositivo

>> Differenza utile: `input` scatta a ogni modifica del valore (ogni carattere digitato), mentre `change` scatta solo quando la modifica è "confermata" (es. il campo perde il focus). L'evento `submit` è generato sull'elemento `<form>`, non sul pulsante.

---
## Slide 35 – Registrare un listener con `addEventListener()`

- Il metodo `addEventListener()` associa una funzione alla gestione di un determinato tipo di evento
- Gli argomenti fondamentali sono:
	- Il nome dell'evento, ad esempio "`click`"
	- La funzione da eseguire quando l'evento viene gestito
- La registrazione non esegue immediatamente la funzione
- Sullo stesso elemento possono essere registrati più *listener*

>> Il nome dell'evento si scrive senza il prefisso `on` (`"click"`, non `"onclick"`).
>> Con più listener sullo stesso elemento e per lo stesso evento, vengono eseguiti tutti, nell'ordine di registrazione. Al contrario, assegnare `button.onclick = f` sostituisce l'eventuale handler precedente.
>> Per rimuovere un listener si usa `removeEventListener()` con **la stessa** funzione: per questo una funzione con nome è più comoda di una arrow function anonima.

---
## Slide 36 -> 37 – Esempio

```html
<button id="addCourse" type="button">Aggiungi corso</button>
<ul id="courses">
    <li>HTML</li>
    <li>CSS</li>
</ul>
```

```js
const button = document.querySelector("#addCourse");
const list = document.querySelector("#courses");
function addCourse() {
    const item = document.createElement("li");
    item.textContent = "JavaScript";
    list.append(item);
}
button.addEventListener("click", addCourse);
```

***Passiamo la funzione*** `addCourse` ***come valore***

***Scrivere*** `addCourse()` ***significherebbe invocarla subito e passare il suo risultato***

```js
button.addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = "JavaScript";
    list.append(item);
});
```

***La stessa registrazione può utilizzare una arrow function***

>> Errore tipico: `button.addEventListener("click", addCourse());` esegue `addCourse` subito (aggiungendo un corso al caricamento della pagina) e registra come listener il suo valore di ritorno, cioè `undefined`: i click successivi non fanno nulla.
>> Ogni attivazione del pulsante aggiunge un nuovo `<li>JavaScript</li>` in fondo alla lista.

![[TW10-s037-1.png|650]]

- `button.addEventListener("click", addCourse);`
	- `button` – Elemento su cui si registra il listener
	- `"click"` – Tipo di evento
	- `addCourse` – Callback da eseguire

***Passiamo una funzione da eseguire in seguito, non il risultato di una chiamata***

---
## Slide 38 – Eventi e accessibilità: indipendenza dal dispositivo

![[TW10-s038-1.png|300]]

- Gli utenti possono interagire con una pagina attraverso mouse, tastiera, comandi vocali, sensori o altre tecnologie assistive
- Una funzionalità associata esclusivamente a eventi legati al puntatore, come `mousedown` o `mouseover`, può risultare inutilizzabile dagli utenti che non riescono ad usare quel dispositivo (non solo utenti con tecnologie assistive ma anche utenti con device mobili, dotati di touch screen)
- Le funzionalità devono essere disponibili anche attraverso un'interfaccia da tastiera, utilizzabile direttamente oppure tramite tecnologie assistive che producono input equivalenti (principio alla base delle linee guida WCAG, che vedremo in una lezione dedicata all'accessibilità del Web)

>> WCAG = *Web Content Accessibility Guidelines* (W3C). Il requisito citato è il criterio 2.1.1 "Tastiera": tutte le funzionalità devono essere utilizzabili da tastiera.

---
## Slide 39 – Esempio: azione legata esclusivamente al puntatore

```html
<div id="save">Salva</div>
```

```js
const save = document.querySelector("#save");

save.addEventListener("mousedown", saveDocument);
```

***Il*** `div` ***non è normalmente raggiungibile con Tab e la sua attivazione da tastiera non è implementata: l'azione dipende dalla pressione di un pulsante del mouse***

>> Il `div` non ha nemmeno semantica: un lettore di schermo non lo annuncia come pulsante. Renderlo accessibile "a mano" richiederebbe `tabindex="0"`, `role="button"` e la gestione di Invio/Spazio con `keydown`: molto più semplice usare un `<button>` (slide successiva).

---
## Slide 40 – Esempio: controllo HTML nativo e suo evento di attivazione

```html
<button id="save" type="button">Salva</button>
```

```js
const save = document.querySelector("#save");

save.addEventListener("click", saveDocument);
```

***Nonostante il nome,*** `click` ***non è riservato al mouse: su un pulsante HTML nativo viene generato anche dall'attivazione da tastiera, con Invio o Spazio***

***Il controllo nativo offre inoltre semantica e comportamenti riconoscibili dalle tecnologie assistive***

>> Il `<button>` è raggiungibile con Tab senza attributi aggiuntivi e viene annunciato come "pulsante". `type="button"` evita che, se il pulsante si trova dentro una `<form>`, si comporti come pulsante di invio (il `type` predefinito è `submit`).

---
## Slide 41 – Eventi e accessibilità: indipendenza dal dispositivo

![[TW10-s041-1.png|650]]

- Mouse / Tastiera / Tecnologia assistiva → Attivazione del pulsante → Handler click

***Best practice: scegliere insieme l'elemento HTML e l'evento: per un'azione usare un pulsante nativo e gestirne l'attivazione***

***Un pulsante HTML nativo permette di gestire la st4essa azione con input diversi***

---
## Slide 42 -> 43 – L'oggetto evento

- Quando il browser invoca un ***event handler***, passa alla funzione un oggetto che descrive l'evento. La funzione può accedere a questo oggetto attraverso il proprio parametro (in questo esempio chiamato `event`).
- Il parametro può chiamarsi `event`, `evt` oppure in qualunque altro modo: è un normale parametro della funzione
- Tutti gli eventi espongono alcune informazioni comuni; i tipi specifici ne aggiungono altre, come il tasto premuto per un evento di tastiera.

```js
button.addEventListener("click", event => {
    console.log(event);
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
});
```

>> Esempio di informazione specifica: in un evento `keydown` la proprietà `event.key` contiene il tasto premuto (es. `"Enter"`, `"a"`).

| Proprietà | Significato |
|---|---|
| `type` | Tipo di evento, ad esempio "`click`" |
| `target` | Oggetto a cui è indirizzato l'evento |
| `currentTarget` | Oggetto su cui è registrato il listener attualmente in esecuzione |

- Negli esempi DOM che stiamo considerando:
	- `target` identifica l'elemento su cui è avvenuta l'interazione
	- `currentTarget` identifica l'elemento che sta gestendo l'evento
- `target` e `currentTarget` possono essere diversi
- La stessa funzione può decidere cosa fare usando le informazioni contenute nell'evento

>> Se si clicca un pulsante, `target` e `currentTarget` coincidono quando il listener è sul pulsante stesso; sono diversi quando il listener è su un antenato (es. il contenitore) e l'evento ci arriva per propagazione (slide successive).
>> Attenzione: `currentTarget` vale solo durante l'esecuzione dell'handler; facendo `console.log(event)` e ispezionando l'oggetto più tardi nella console, `currentTarget` risulta `null`.

---
## Slide 44 – Propagazione degli eventi

- Un evento DOM può essere gestito anche da listener registrati sugli antenati dell'elemento interessato
- La propagazione comprende tre fasi:
	1. ***Capturing***: l'evento attraversa gli antenati dall'esterno verso il target
	2. ***Target***: vengono eseguiti i listener previsti sull'elemento target
	3. ***Bubbling***: se l'evento lo prevede, la propagazione prosegue dal target verso gli antenati
- Per impostazione predefinita, `addEventListener()` registra un listener che, sugli antenati, interviene durante il ***bubbling***
- Per usare il capturing si specifica `{ capture: true }`
- Non tutti gli eventi fanno *bubbling*: `click` lo fa, mentre `focus`, per esempio, no

>> Il terzo argomento di `addEventListener()` può essere un oggetto di opzioni (`{ capture: true }`, `{ once: true }` per eseguire il listener una sola volta, …) oppure, nella forma storica, un booleano: `addEventListener("click", f, true)` equivale a `{ capture: true }`.
>> Per `focus` esiste la variante `focusin`, che invece fa bubbling.

---
## Slide 45 – Esempio

```html
<div id="panel">
    <button id="action" type="button">Premi</button>
</div>
```

```js
const panel = document.querySelector("#panel");
const action = document.querySelector("#action");
panel.addEventListener("click", () => {
    console.log("Panel: capturing");
}, { capture: true });
action.addEventListener("click", () => {
    console.log("Button: target");
});
panel.addEventListener("click", () => {
    console.log("Panel: bubbling");
});
```

Output, attivando il pulsante

```
Panel: capturing
Button: target
Panel: bubbling
```

>> Verificato con node (jsdom): l'ordine è proprio questo. L'ordine dipende dalle fasi, non dall'ordine di registrazione: il listener di capturing del `div` scatta per primo (discesa verso il target), poi quello sul pulsante (fase target), infine quello normale del `div` (risalita, bubbling).
>> Per fermare la propagazione verso gli antenati si usa `event.stopPropagation()`.

---
## Slide 46 – Propagazione degli eventi

![[TW10-s046-1.png|550]]

- **1. Capturing** – Verso il target: `document` → `html` → `body` → `div` → `button`
- **2. Target** – `button`
- **3. Bubbling** – Verso gli antenati: `button` → `div` → `body` → `html` → `document`
- Percorso semplificato nel documento · Esempio: evento click
- L'evento può essere gestito anche dai listener degli antenati.

>> "Semplificato" perché in realtà il percorso parte (e termina) da `window`, che sta sopra `document`.

---
## Slide 47 – `target` e `currentTarget`

- Durante la propagazione, occorre distinguere:
	- `target`: l'elemento a cui è indirizzato l'evento.
	- `currentTarget`: l'elemento il cui listener è attualmente in esecuzione.
- Nel normale albero DOM dell'esempio:
	- `target` rimane lo stesso durante la propagazione;
	- `currentTarget` cambia in base al listener eseguito

>> Dentro un handler definito con `function` (non arrow), `this` coincide con `event.currentTarget`. Nelle arrow function `this` non è legato all'elemento: meglio usare sempre `event.currentTarget`.

---
## Slide 48 – Esempio

```html
<div id="panel">
    <button id="action" type="button">Premi</button>
</div>
```

```js
function describeEvent(event) {
    console.log(
        "target:", event.target.id,
        "currentTarget:", event.currentTarget.id
    );
}
action.addEventListener("click", describeEvent);
panel.addEventListener("click", describeEvent);
```

Output, attivando il pulsante

```
target: action currentTarget: action
target: action currentTarget: panel
```

| Listener in esecuzione | `target` | `currentTarget` |
|---|---|---|
| Listener del pulsante | `button#action` | `button#action` |
| Listener del contenitore | `button#action` | `div#panel` |

>> Verificato con node (jsdom). Le variabili `action` e `panel` sono quelle ottenute con `querySelector()` nell'esempio della slide 45.
>> Questo è il principio della **event delegation**: un solo listener sul contenitore può gestire i click su tutti i figli (anche quelli aggiunti dopo), usando `event.target` per capire quale elemento è stato attivato.

---
## Slide 49 – `target` e `currentTarget`

![[TW10-s049-1.png|700]]

- **1. Listener del pulsante**: dentro `div#panel`, `target` → `button#action` e `currentTarget` → `button#action`
- **2. Listener del contenitore**: `target` → `button#action`, `currentTarget` → `div#panel`
- target resta il pulsante; currentTarget dipende dal listener in esecuzione.
- Esempio: attivazione del pulsante e propagazione per bubbling.

---
## Slide 50 – `preventDefault()`

- Alcuni eventi sono associati a un comportamento predefinito del browser:
	- L'attivazione di un link può avviare una navigazione
	- L'invio di una form può avviare una richiesta e una navigazione
- Il metodo `event.preventDefault()` annulla il comportamento predefinito, se l'evento è annullabile
- Non interrompe la propagazione dell'evento
- **Nota bene**: Useremo spesso questo metodo quando gestiremo l'invio delle form con JavaScript

>> Da non confondere: `preventDefault()` blocca l'azione predefinita del browser ma l'evento continua a propagarsi agli antenati; `stopPropagation()` fa il contrario (ferma la propagazione ma non l'azione predefinita).
>> Se un evento sia annullabile si vede da `event.cancelable`.

---
## Slide 51 – Esempio

```html
<a id="helpLink" href="/help">Apri la guida</a>
<p id="message"></p>
```

```js
const link = document.querySelector("#helpLink");
const message =
document.querySelector("#message");

link.addEventListener("click", event => {
    event.preventDefault();
    message.textContent = "La guida verrà
mostrata nella pagina.";
});
```

***Risultato:***
***il listener viene eseguito e aggiorna il paragrafo, ma il browser non segue il link***

>> Nel codice reale la stringa va scritta su una sola riga: `"La guida verrà mostrata nella pagina."`. Una stringa tra virgolette doppie non può andare a capo (darebbe `SyntaxError`); l'a capo nella slide è solo dovuto all'impaginazione.

---
## Slide 52 – `preventDefault()`

![[TW10-s052-1.png|700]]

- click sul link → Esecuzione del listener → Aggiornamento del messaggio
- Il listener chiama `event.preventDefault()` → la Navigazione non avviene (*Comportamento predefinito annullato*)
- Gestire un evento non annulla automaticamente il comportamento del browser.
---
## Slide 53 – `stopPropagation()`

- Il metodo `event.stopPropagation()` impedisce all'evento di proseguire lungo il percorso di propagazione.
- Se viene chiamato nel listener del pulsante, l'evento non raggiunge i successivi listener di bubbling sugli antenati.
- Questo metodo ***non annulla il comportamento predefinito e non blocca gli altri listener sullo stesso elemento***. Inoltre, non annulla i listener già eseguiti durante il capturing.

>> Per bloccare anche gli altri listener registrati sullo stesso elemento esiste `event.stopImmediatePropagation()`: ferma la propagazione e impedisce l'esecuzione dei listener successivi sullo stesso nodo.
>> Se `stopPropagation()` viene chiamato in un listener di capturing su un antenato, l'evento non arriva nemmeno al target.

---
## Slide 54 – Esempio

```html
<div id="panel">
    <button id="action" type="button">Premi</button>
</div>
```

```js
action.addEventListener("click", event => {
    console.log("Button");
    event.stopPropagation();
});
panel.addEventListener("click", () => {
    console.log("Panel");
});
```

***Output, attivando il pulsante***

```
Button
```

| Metodo | Effetto |
|---|---|
| `preventDefault()` | Annulla il comportamento predefinito |
| `stopPropagation()` | Interrompe l'ulteriore propagazione |

>> Senza la chiamata a `stopPropagation()` l'output sarebbe `Button` seguito da `Panel` (il click risale per bubbling fino a `div#panel`).
>> Il codice usa `action` e `panel` senza selezionarli: funziona perché il browser espone gli elementi con un `id` come variabili globali (proprietà di `window`). È una scorciatoia comoda negli esempi, ma nel codice reale conviene usare `document.querySelector("#action")`.

---
## Slide 55 – `stopPropagation()`

![[TW10-s055-1.png|550]]

- Percorso: `document` → `html` → `body` → `div#panel` → `button#action`
- `event.stopPropagation()` chiamato nel listener del pulsante → **Bubbling interrotto**: i **listener degli antenati** non vengono raggiunti nel bubbling
- Interrompe la propagazione; non annulla il comportamento predefinito.
- Esempio con listener in bubbling · Percorso semplificato nel documento

---
## Slide 56 – Event delegation

- Grazie al bubbling, possiamo gestire gli eventi di più elementi attraverso un solo listener registrato su un antenato comune
- Questo approccio si chiama ***event delegation***:
	1. Registriamo il listener sul contenitore
	2. Individuiamo l'elemento interessato usando `event.target`
	3. Eseguiamo l'operazione appropriata
- Il listener gestisce anche gli eventi provenienti da elementi aggiunti successivamente al contenitore

>> Vantaggi: un solo listener invece di uno per elemento (meno memoria, meno codice) e nessun bisogno di registrare listener sugli elementi creati dinamicamente.
>> Limite: funziona solo con eventi che fanno bubbling (es. `click`, `input`, `submit`); eventi come `focus`/`blur` non risalgono (si usano le varianti `focusin`/`focusout`).

---
## Slide 57 -> 58 – Esempio

```html
<ul id="courses">
    <li>
        HTML
        <button type="button" class="remove">
            <span>Rimuovi</span>
        </button>
    </li>
    <li>
        CSS
        <button type="button" class="remove">
            <span>Rimuovi</span>
        </button>
    </li>
</ul>
```

```js
const list = document.querySelector("#courses");
list.addEventListener("click", event => {
    const removeButton =
event.target.closest("button.remove");
    if (!removeButton || !list.contains(removeButton)) {
        return;
    }
    const item = removeButton.closest("li");
    item.remove();
});
```

`closest("button.remove")` ***cerca il pulsante corrispondente partendo dal target e risalendo tra i suoi antenati***
***Funziona quindi anche se si fa clic sullo*** `<span>` ***contenuto nel pulsante***
***Se non trova una corrispondenza, restituisce*** `null`

***Il controllo successivo verifica che il pulsante trovato appartenga alla lista***
***Infine, individuiamo e rimuoviamo il relativo*** `<li>`

>> Perché serve `closest()`: cliccando sulla scritta "Rimuovi", `event.target` è lo `<span>`, non il `<button>`; `closest()` parte dall'elemento stesso e risale gli antenati finché trova un match.
>> Il controllo `list.contains(removeButton)` serve perché `closest()` può risalire anche oltre la `<ul>`: se la lista fosse contenuta in un `button.remove` esterno, verrebbe trovato quello. Così si accettano solo pulsanti interni alla lista.
>> Verificato con node (jsdom): un click sullo `<span>` del secondo pulsante rimuove solo il `<li>` "CSS".

---
## Slide 59 – Event delegation

![[TW10-s059-1.png|650]]

- `ul#courses` con tre `li` (HTML, CSS, JavaScript), ognuno con un pulsante "Rimuovi"
- Il click sul pulsante "Rimuovi" risale per **Bubbling** fino a **Un solo listener: click** registrato sulla lista
	- target: pulsante
	- currentTarget: ul
- Anche un nuovo li usa il listener già registrato sulla lista.
- **Il contenitore gestisce gli eventi dei figli, compresi quelli aggiunti dinamicamente.**

>> `event.target` è l'elemento su cui è avvenuto il click (il più interno), mentre `event.currentTarget` è l'elemento su cui è registrato il listener che sta girando (qui sempre la `ul`).

---
## Slide 60 – Form e Validazione

- Le form sono uno dei principali strumenti attraverso cui gli utenti forniscono dati a un'applicazione Web: registrazione, autenticazione, acquisti e inserimento di contenuti
- ***Validare i dati significa verificare che rispettino i vincoli previsti prima di utilizzarli o accettarli***. Segnalare tempestivamente campi mancanti, formati errati o valori incoerenti aiuta l'utente a completare correttamente l'operazione
- La validazione delle form è un tipico ambito di utilizzo di JavaScript nel browser, in cui si integrano struttura HTML, DOM ed eventi:
	- **HTML** definisce i campi, la loro semantica e i vincoli standard, come obbligatorietà e formato
	- Il **browser** interpreta questi vincoli ed esegue i controlli nativi
	- **JavaScript** legge i valori attraverso il DOM, reagisce agli eventi e aggiunge controlli e feedback personalizzati

---
## Slide 61 – Form e Validazione: esempio

- In una form di registrazione, HTML può richiedere un indirizzo email e una password; JavaScript può verificare che il campo "***Conferma password***" coincida con la password inserita

![[TW10-s061-1.png|650]]

- **HTML**: Campi e vincoli → **Browser**: Controlli nativi → **JavaScript**: Controlli e interazioni personalizzati
- **HTML e JavaScript collaborano per raccogliere dati e guidare l'utente.**
- La validazione lato client non sostituisce i controlli sul server.

---
## Slide 62 – Form e DOM: leggere i valori dei campi

- Gli elementi di una form sono oggetti del DOM. JavaScript può selezionarli e leggere o modificare il loro stato
- Per un campo di testo, la proprietà `value` contiene il valore corrente inserito dall'utente
- La proprietà `textContent` riguarda invece il contenuto testuale dei nodi e non rappresenta il valore corrente del campo

>> Un `<input>` è un elemento vuoto (non ha figli testuali), quindi il suo `textContent` è sempre `""`. Il testo digitato è solo in `value`, che è sempre una **stringa** (anche per `type="number"`: per avere un numero si usa `Number(...)` oppure `valueAsNumber`).
>> Attenzione anche alla differenza fra proprietà e attributo: `input.value` è il valore corrente, mentre `getAttribute("value")` restituisce il valore iniziale scritto nell'HTML.

---
## Slide 63 -> 64 – Esempio

```html
<form id="courseForm">
    <label for="courseName">Nome del corso</label>
    <input id="courseName" name="courseName" type="text">
    <button type="submit">Aggiungi corso</button>
</form>
<ul id="courses">
    <li>HTML</li>
    <li>CSS</li>
</ul>
<p id="message" role="status"></p>
```

```js
const form = document.querySelector("#courseForm");
const courseInput = document.querySelector("#courseName");
const list = document.querySelector("#courses");
const message = document.querySelector("#message");
```

***Per leggere il valore corrente***

```js
const courseName = courseInput.value;
```

***La lettura restituisce il valore presente in quel momento: per ottenere il testo aggiornato, dovremo eseguirla quando gestiremo l'interazione***

>> `value` non è un collegamento "vivo": la variabile `courseName` contiene una copia della stringa al momento della lettura. Se la lettura avviene al caricamento della pagina, il campo è ancora vuoto e `courseName` vale `""`.
>> `role="status"` rende il paragrafo una *live region* ARIA: i lettori di schermo annunciano automaticamente i cambiamenti del suo testo (utile per il messaggio di conferma).

![[TW10-s064-1.png|650]]

- **Campo di testo** (Nome del corso: "Tecnologie Web") → **Proprietà value** (`courseInput.value`) → **Stringa restituita** (`"Tecnologie Web"`)
- **Per leggere il valore corrente di un campo, usiamo la sua proprietà value.**

```js
const courseInput = document.querySelector("#courseName");
```

---
## Slide 65 – Validazione dichiarativa con HTML

- HTML permette di esprimere molti vincoli direttamente sugli elementi della form
- Il browser usa questi vincoli per controllare i dati prima dell'invio e segnalare eventuali errori, senza richiedere codice JavaScript per ogni verifica

---
## Slide 66 – Esempio

```html
<label for="courseName">Nome del corso</label>
<input
    id="courseName"
    name="courseName"
    type="text"
    required
    minlength="3"
    aria-describedby="courseHint"
>
<p id="courseHint">Campo obbligatorio: inserire almeno 3 caratteri.</p>
```

| Attributo | Vincolo |
|---|---|
| `required` | Il campo deve essere compilato |
| `minlength` | Lunghezza minima per un campo testuale |
| `type="email"` | Formato compatibile con un indirizzo email |
| `min, max` | Limiti, ad esempio per un campo numerico |

>> `aria-describedby="courseHint"` collega il campo al paragrafo di aiuto: i lettori di schermo leggono il suggerimento insieme all'etichetta del campo.
>> Altri attributi utili: `maxlength`, `pattern` (espressione regolare che il valore deve rispettare), `step`, e `type` come `url`, `number`, `date`. Con l'attributo `novalidate` sulla `<form>` la validazione nativa viene disattivata.

---
## Slide 67 – Gestire l'invio: l'evento `submit`

- Per gestire una form registriamo il listener dell'evento `submit` sulla **form**, anziché limitarci al `click` del pulsante
- In questo modo intercettiamo l'operazione di invio anche quando viene attivata da tastiera, ad esempio premendo Invio in un campo quando previsto dal browser
- Nel nostro esempio usiamo `preventDefault()` per impedire l'invio con navigazione e aggiornare direttamente la pagina

>> Il comportamento predefinito di `submit` è inviare i dati all'URL indicato in `action` (di default la pagina stessa) e caricare la risposta: senza `preventDefault()` la pagina verrebbe ricaricata e le modifiche fatte al DOM andrebbero perse.

---
## Slide 68 – Esempio

```js
form.addEventListener("submit", event => {
    event.preventDefault();
    const courseName = courseInput.value.trim();
    const item = document.createElement("li");
    item.textContent = courseName;
    list.append(item);
    message.textContent = `Corso aggiunto: ${courseName}.`;
    form.reset();
    courseInput.focus();
});
```

***Gestiamo l'operazione della form attraverso*** `submit`***, indipendentemente da come è stata attivata***

- ***Leggiamo il valore dentro la callback, al momento dell'invio***
- `trim()` ***elimina gli spazi all'inizio e alla fine della stringa***
- ***Creiamo il nuovo elemento usando*** `textContent`
- `reset()` ***ripristina i valori iniziali della form***
- ***Riportiamo il focus sul campo per consentire un nuovo inserimento***

>> Usare `textContent` (e non `innerHTML`) è importante per la sicurezza: se l'utente scrive `<img src=x onerror=...>`, con `textContent` viene mostrato come testo, mentre con `innerHTML` verrebbe interpretato come HTML (rischio XSS).

---
## Slide 69 -> 70 – Validazione e submit: in quale ordine?

- Nel normale invio di una form con validazione nativa abilitata, il browser verifica i vincoli prima di generare l'evento `submit`
	- Se un campo non rispetta i vincoli, il browser segnala il problema e blocca l'invio
	- Se i controlli vengono superati, viene generato `submit` e il nostro listener può essere eseguito
- Quindi, quando la validazione nativa fallisce, **il listener `submit` non viene eseguito**

***Il controllo nativo precede l'esecuzione del nostro handler*** `submit`

![[TW10-s070-1.png|600]]

- **Tentativo di invio** → **Verifica dei vincoli HTML**
	- **Dati non validi** → Segnalazione dell'errore → Invio bloccato → **Nessun evento submit**
	- **Dati validi** → Evento submit → Esecuzione dell'handler → `event.preventDefault()` (Annulla l'invio standard con navigazione)
- **La validazione nativa precede l'evento submit.**
- Flusso dell'esempio: validazione nativa abilitata e aggiornamento del DOM lato client.

>> Quando la validazione fallisce, sui campi non validi viene generato l'evento `invalid` (che non fa bubbling), al posto di `submit` sulla form.
>> Eccezione: `form.submit()` chiamato da JavaScript invia la form **senza** validazione e **senza** generare `submit`; invece `form.requestSubmit()` si comporta come un click sul pulsante (valida e genera `submit`).

---
## Slide 71 – Constraint Validation API

- Quando un vincolo non è esprimibile con i soli attributi HTML, JavaScript può integrarlo attraverso la ***Constraint Validation API***
- Nel nostro esempio, un nome composto soltanto da spazi può superare il vincolo sulla lunghezza
- Vogliamo invece richiedere almeno tre caratteri dopo la rimozione degli spazi iniziali e finali

>> Esempio: con `required minlength="3"`, il valore `"   "` (tre spazi) è non vuoto e lungo 3, quindi è valido per HTML, ma dopo `trim()` diventa `""`.
>> La Constraint Validation API comprende tra l'altro: `setCustomValidity(msg)`, `checkValidity()`, `reportValidity()` e la proprietà `validity` (con flag come `valueMissing`, `tooShort`, `rangeOverflow`, `customError`).

---
## Slide 72 – Esempio

```js
function validateCourseName() {
    const name = courseInput.value.trim();
    const tooShort =
        courseInput.value.length > 0 && name.length < 3;
    courseInput.setCustomValidity(
        tooShort
            ? "Inserire almeno 3 caratteri, esclusi gli spazi iniziali e finali."
            : ""
    );
}
courseInput.addEventListener("input", validateCourseName);
validateCourseName();
```

- ***Un messaggio non vuoto passato a*** `setCustomValidity()` ***rende il campo non valido***
- ***La stringa vuota*** `""` ***rimuove l'errore personalizzato; gli altri vincoli HTML continuano a valere***
- ***Ricalcoliamo il controllo a ogni evento*** `input`***, così l'errore viene rimosso quando l'utente corregge il valore***

>> La condizione `courseInput.value.length > 0` evita di segnalare l'errore personalizzato quando il campo è vuoto: in quel caso interviene già `required` con il suo messaggio.
>> La chiamata iniziale `validateCourseName()` allinea lo stato di validità al valore presente al caricamento (es. un valore precompilato).
>> L'errore impostato con `setCustomValidity()` resta finché non viene richiamato con `""`: per questo il controllo va ripetuto a ogni modifica.

---
## Slide 73 – Validazione lato client e lato server

- La validazione nel browser offre un feedback immediato e aiuta l'utente a correggere i dati
- Tuttavia, il codice della pagina e le richieste possono essere modificati: il server deve sempre verificare autonomamente i dati ricevuti, anche quando il browser li ha già controllati
- La validazione nel browser migliora l'interazione; quella sul server verifica se l'operazione può essere accettata

| Dove | Responsabilità |
|---|---|
| **Client** | Guidare l'utente e segnalare subito gli errori |
| **Server** | Verificare i dati e le regole applicative prima di accettare l'operazione |

>> Esempi di aggiramento: disattivare JavaScript, rimuovere gli attributi con gli strumenti per sviluppatori, oppure inviare la richiesta direttamente (es. con `curl`) senza passare dalla pagina.

---
## Slide 74 -> 75 – Seconda domanda

**BONUS**

- **DOMANDA 2**:

Una pagina contiene la seguente form per prenotare posti a un seminario. La validazione nativa del browser è abilitata e lo script viene eseguito dopo la creazione degli elementi HTML

```html
<form id="bookingForm">
    <label for="seats">Numero di posti</label>
    <input id="seats" name="seats"
           type="number" min="1" max="5" required>
    <button type="submit">Prenota</button>
</form>
<p id="message" role="status">In attesa</p>
```

```js
const form = document.querySelector("#bookingForm");
const message = document.querySelector("#message");
form.addEventListener("submit", event => {
    event.preventDefault();
    message.textContent = "Dati elaborati";});
```

- **DOMANDA 2 ( … continua)**:

L'utente inserisce **8** nel campo e attiva il pulsante "**Prenota**". Che cosa accade?

- [ ] Il listener viene eseguito e il messaggio diventa "*Dati elaborati*", perché `preventDefault()` disattiva la validazione nativa
- [ ] Il browser segnala il valore non valido e blocca l'invio; il listener `submit` non viene eseguito e il messaggio rimane "In attesa"
- [ ] Il browser segnala il valore non valido, ma esegue comunque il listener `submit`; il messaggio diventa "*Dati elaborati*"
- [ ] Il browser invia il valore al server affinché venga verificato; il listener `submit` viene eseguito dopo la risposta

>> **Risposta corretta: la seconda.** 8 supera `max="5"` (`validity.rangeOverflow` è `true`), quindi la validazione nativa fallisce: il browser mostra l'errore, blocca l'invio e **non genera** l'evento `submit`. Il messaggio resta "In attesa".
>> La prima è sbagliata perché `preventDefault()` sta dentro il listener di `submit`, che viene eseguito solo *dopo* una validazione superata: non può disattivarla (per farlo servirebbe `novalidate` sulla form). La terza contraddice l'ordine visto a slide 69–70; la quarta è falsa perché nulla viene inviato al server.
>> Verificato con node (jsdom): con valore `8` il campo riceve l'evento `invalid` e il messaggio resta `"In attesa"`; con valore `3` il messaggio diventa `"Dati elaborati"`.

---
## Riassunto

>> **JavaScript nel browser**
>> - **ECMAScript** definisce il linguaggio, il **JavaScript engine** lo esegue, il **browser** fornisce l'ambiente: le **Web API** (DOM, eventi, timer, fetch, storage).
>> - Componenti del browser: **rendering engine** (HTML e CSS → DOM e CSSOM, layout), **JavaScript engine** (call stack e heap), **Web API**.
>> - **Call stack**: contesti delle funzioni attive, gestiti LIFO. **Heap**: memoria per oggetti, liberata dal garbage collector.
>> - Il codice JS della pagina gira su un solo thread. Le operazioni asincrone (es. `setTimeout`) sono affidate alle Web API; la callback torna in esecuzione tramite l'**event loop**, solo quando lo stack si è svuotato.
>>
>> **DOM**
>> - Rappresentazione ad albero del documento, costruita durante il parsing e **modificabile**: non coincide con il codice HTML sorgente.
>> - `document` è il punto di accesso; un **element** è un nodo elemento; **node** è più generale (comprende anche testo, commenti…).
>> - `querySelector(sel)` restituisce il **primo** elemento oppure `null`. `querySelectorAll(sel)` restituisce una **NodeList statica**, che non si aggiorna se il DOM cambia. Si usano i selettori CSS.
>> - Si ottengono **riferimenti** agli oggetti del DOM, non copie dell'HTML.
>>
>> **Modificare il DOM**
>> - `textContent` scrive testo senza interpretarlo; `innerHTML` interpreta markup. Con input dell'utente `innerHTML` espone a **XSS**: per il testo usare `textContent`.
>> - Classi: `classList.add/remove/toggle/contains`. Attributi: `getAttribute`/`setAttribute`.
>> - Creare un elemento: `createElement` (in memoria, non ancora nel DOM) → impostare il contenuto → `append` (inserisce come ultimo figlio). Rimuovere: `elemento.remove()`.
>>
>> **Eventi**
>> - Programmazione **event-driven**: si registra un **listener** con `elemento.addEventListener("tipo", callback)`.
>> - Eventi tipici: `click`, `input`, `submit`, `keydown`.
>> - **Accessibilità**: `click` su un controllo nativo (`<button>`) si attiva anche da tastiera e con tecnologie assistive. Meglio un elemento nativo che un `div` cliccabile.
>> - **Oggetto evento** (parametro della callback): `type`, `target` (dove è avvenuto l'evento), `currentTarget` (elemento del listener in esecuzione).
>>
>> **Propagazione**
>> - Tre fasi: **capturing** (dagli antenati verso il target), **target**, **bubbling** (dal target risalendo agli antenati).
>> - `addEventListener` registra di default in bubbling; con `{ capture: true }` in capturing. Alcuni eventi, come `focus`, non fanno bubbling.
>> - Durante la propagazione `target` resta lo stesso, `currentTarget` cambia.
>> - `preventDefault()` annulla il comportamento predefinito (navigazione del link, invio della form) ma **non** ferma la propagazione.
>> - `stopPropagation()` ferma la propagazione ma **non** annulla il comportamento predefinito, né gli altri listener sullo stesso elemento.
>>
>> **Event delegation**
>> - Grazie al bubbling basta un solo listener sul contenitore. Si individua l'elemento con `event.target.closest(selettore)` e si verifica che appartenga al contenitore.
>> - Funziona anche per gli elementi aggiunti dopo.
>>
>> **Form e validazione**
>> - Il valore corrente di un campo si legge con `campo.value` (non `textContent`), dentro la callback, al momento dell'uso.
>> - Validazione **dichiarativa** con attributi HTML: `required`, `minlength`, `type="email"`, `min`/`max`.
>> - Il listener va su `submit` della **form**, non su `click` del pulsante: intercetta l'invio anche da tastiera. Dentro: `preventDefault()`, `value.trim()`, `createElement` più `textContent`, `form.reset()`, `focus()`.
>> - **Ordine**: il browser valida i vincoli **prima** di generare `submit`. Se i dati non sono validi, l'invio è bloccato e il listener `submit` **non viene eseguito** (domanda bonus 2).
>> - **Constraint Validation API**: `setCustomValidity("msg")` rende il campo non valido; con `""` l'errore si rimuove. Va ricalcolata a ogni evento `input`.
>> - La validazione lato client guida l'utente; il **server** deve sempre riverificare i dati.
