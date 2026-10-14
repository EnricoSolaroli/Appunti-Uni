[8_js_intro_sintassi](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/8_js_intro_sintassi.pdf>)

# JavaScript – Introduzione e sintassi

## Indice

1. **Introduzione a JavaScript** (slide 1–5)
	- [[#Slide 1 – JavaScript|Apertura della lezione e argomenti]]
	- [[#Slide 3 – Che cos’è JavaScript?|Definizione: tipizzazione dinamica e debole, prototype-based, multi-paradigma]]
	- [[#Slide 4 – Che cos’è JavaScript?|Single thread, Web API, coda dei callback ed event loop]]
	- [[#Slide 5 – JavaScript nel Web|Ruoli di HTML, CSS e JavaScript nella pagina]]
2. **Storia ed ECMAScript** (slide 6–10)
	- [[#Slide 6 – JavaScript: nascita ed evoluzione|Nascita: Mocha, LiveScript, JavaScript (1995)]]
	- [[#Slide 7 – ECMAScript|Standard ECMAScript (ECMA-262, ISO/IEC 16262)]]
	- [[#Slide 8 – Top Programming Languages|Diffusione tra i linguaggi di programmazione]]
	- [[#Slide 9 – L’evoluzione di Javascript|Timeline delle versioni e JavaScript oggi (server side, AJAX, JSON)]]
3. **JavaScript vs Java: classi e prototipi** (slide 11–16)
	- [[#Slide 11 – JavaScript vs Java|Nessuna vera relazione tra Java e JavaScript; principali differenze]]
	- [[#Slide 13 – Linguaggi class-based|Linguaggi class-based]]
	- [[#Slide 14 – Linguaggi prototype based|Linguaggi prototype-based]]
	- [[#Slide 15 – Sostanzialmente…|Confronto riassuntivo e tabella delle differenze con Java/C/C#]]
4. **Tipi di dato, array e oggetti** (slide 17–24)
	- [[#Slide 17 – Tipi di dato|Tipizzazione dinamica: tipi associati ai valori]]
	- [[#Slide 18 – Tipi primitivi|I sette tipi primitivi]]
	- [[#Slide 19 – Array|Array: indici, tipi misti, lunghezza dinamica]]
	- [[#Slide 21 – Oggetti in JS|Oggetti come collezioni dinamiche di proprietà]]
	- [[#Slide 23 – Oggetti in JS|Riferimenti, prototipi e differenza tra oggetti e JSON]]
	- [[#Slide 24 – Flessibilità: potenza e rischio|Flessibilità: potenza e rischio]]
5. **Type coercion e verifica dei tipi** (slide 25–31)
	- [[#Slide 25 – Type coercion|Coercizione implicita, == vs ===]]
	- [[#Slide 27 – Type coercion per gli oggetti|Confronto degli oggetti per identità]]
	- [[#Slide 28 – Operatore `typeof`|Operatore typeof]]
	- [[#Slide 29 – Operatore `Array.isArray()`|Array.isArray()]]
	- [[#Slide 30 – Prima domanda|Domanda bonus 1: array vuoto == false]]
	- [[#Slide 31 – Type coercion|Spiegazione passo per passo della coercizione]]
6. **Variabili, scope e hoisting** (slide 32–40)
	- [[#Slide 32 – Dichiarazione delle variabili|let e const; const rende costante il riferimento]]
	- [[#Slide 34 – `var`: se lo conosci lo eviti|var: function scope e ridichiarazione]]
	- [[#Slide 35 – `var`: REGOLA DEL CORSO!|Regola del corso: niente var]]
	- [[#Slide 36 – Block scope|Block scope]]
	- [[#Slide 37 – Block scope e Shadowing|Shadowing e scope lessicale]]
	- [[#Slide 39 – Hoisting|Hoisting di var, let e const]]
	- [[#Slide 40 – Hoisting e Temporal Dead Zone|Temporal Dead Zone]]
7. **Funzioni** (slide 41–49)
	- [[#Slide 41 – Funzioni|Funzioni come valori di prima classe]]
	- [[#Slide 42 – Definire una funzione|Declaration, expression e arrow function]]
	- [[#Slide 43 – Arrow functions|Sintassi delle arrow function]]
	- [[#Slide 44 – Callback|Callback: passare greet vs greet(), callback sincrone e per eventi]]
	- [[#Slide 48 – Higher-order function|Higher-order function e closure]]
	- [[#Slide 49 – `map()`|Il metodo map()]]
8. **Oggetti, this e prototipi** (slide 50–55)
	- [[#Slide 50 – Oggetti e metodi|Proprietà e metodi]]
	- [[#Slide 51 – `this`|La parola chiave this]]
	- [[#Slide 52 – Ereditarietà basata sui prototipi|Ereditarietà basata sui prototipi con Object.create]]
	- [[#Slide 53 – Relazione tra oggetto e prototipo|Collegamento interno tra oggetto e prototipo]]
	- [[#Slide 54 – Prototype chain|Prototype chain]]
	- [[#Slide 55 – Prototype chain: esempio|Esempio di ricerca lungo la catena; prototipo interno vs proprietà .prototype]]
9. **Classi** (slide 56–65)
	- [[#Slide 56 – Classi|Sintassi class come (quasi) zucchero sintattico]]
	- [[#Slide 57 – Classi: esempio|Esempio: constructor, new e Student.prototype]]
	- [[#Slide 58 – Classi: un altro esempio|Metodi condivisi in Student.prototype, verifica con Object.hasOwn]]
	- [[#Slide 62 – Classi e prototipi|Object.create vs class; perché «quasi» zucchero sintattico]]
	- [[#Slide 64 – Seconda domanda|Domanda bonus 2: dove è definito greet()]]
	- [[#Slide 65 – Domande?|Domande finali]]

---
## Slide 1 – JavaScript

![[TW09-s001-1.png|200]]

*2 domande bonus*

---
## Slide 2 – Argomenti

- JavaScript:
	- Obiettivi e Standardizzazione
	- Caratteristiche generali
		- tipizzazione dinamica
		- variabili
		- funzioni
		- oggetti, classi e prototipi

![[TW09-s002-1.png|250]]

*2 punti bonus*

---
## Slide 3 – Che cos’è JavaScript?

- JavaScript è un linguaggio **dinamicamente tipizzato, weakly typed, prototype-based e multi-paradigma**, standardizzato come ECMAScript
- Nel browser consente di aggiungere comportamento alle pagine Web, reagire agli eventi, modificare il DOM e comunicare in modo asincrono con server e servizi remoti
- Il browser comprende nativamente HTML per la struttura, CSS per la presentazione e JavaScript per il comportamento e l’interattività della pagina.

![[TW09-s003-1.png|500]]

(HTML – *structure*; CSS – *presentation/appearance*; JavaScript – *dynamism/action*)

>> - **Dinamicamente tipizzato**: il tipo è legato al valore e viene controllato a runtime, non in compilazione (`let x = 42; x = "ciao";` è lecito).
>> - **Weakly typed**: il linguaggio converte implicitamente i tipi quando servono (type coercion), es. `"4" + 2` → `"42"`, `"4" - 2` → `2`.
>> - **Multi-paradigma**: supporta stile imperativo, a oggetti (basato su prototipi) e funzionale (funzioni come valori di prima classe).

---
## Slide 4 – Che cos’è JavaScript?

- Javascript viene eseguito in un unico thread (**single-threaded**) a livello del linguaggio: c’è una sola call stack che esegue il codice JavaScript istruzione per istruzione
- Per operazioni che richiedono tempo (es. richieste HTTP, timer, eventi dell’utente), il browser offre delle Web API che eseguono queste operazioni in maniera asincrona
- Quando una operazione è completata, il relativo callback viene messo in coda e verrà eseguito dall’event loop quando la call stack è libera

![[TW09-s004-1.png|600]]

Testo del diagramma:

- **Codice JavaScript**:

```js
console.log("Inizio");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("Fine");
```

- **Call stack** (un solo thread): `console.log("Fine")`, `setTimeout(...)`, `console.log("Inizio")` → *delega* → **Web APIs** (nel browser): Timer (setTimeout, setInterval), Richieste HTTP (fetch), Eventi DOM (click, input, …), …
- *quando termina* → **Coda dei callback** (task queue): `() => { console.log("Timer"); }`
- **Event loop**: *aggiunge il callback alla coda*; *se la call stack è vuota, preleva il prossimo callback dalla coda*
	1. **Esecuzione del codice** – Il codice JavaScript viene eseguito in ordine nella call stack.
	2. **Operazioni asincrone** – Per operazioni potenzialmente lunghe, JavaScript le delega alle Web APIs del browser (es. timer, fetch, eventi).
	3. **Completamento** – Quando l’operazione termina, il browser aggiunge il relativo callback alla coda dei task (task queue).
	4. **Event loop** – L’event loop controlla se la call stack è vuota e, in tal caso, preleva il prossimo callback dalla coda ed lo esegue.

>> Output effettivo dell'esempio (verificato con node): `Inizio`, `Fine`, `Timer`. Il callback del timer non interrompe mai il codice in corso: viene eseguito solo dopo che lo script principale ha svuotato la call stack. Per lo stesso motivo anche `setTimeout(cb, 0)` esegue `cb` *dopo* il codice sincrono che lo segue.
>> Le Web API (timer, fetch, DOM) non fanno parte del linguaggio ma dell'ambiente ospite (il browser; in Node.js l'analogo è fornito da libuv).

---
## Slide 5 – JavaScript nel Web

![[TW09-s005-1.png|600]]

- **HTML** – struttura: *Definisce gli elementi della pagina.*

```html
<button id="mioBottone">
  Clicca qui!
</button>
```

- **CSS** – presentazione: *Controlla l’aspetto degli elementi della pagina.*

```css
#mioBottone {
   background-color: #007bff;
   color: white;
   padding: 10px 20px;
   border: none;
   border-radius: 6px;
}
```

- **JavaScript** – comportamento: *Aggiunge interattività alla pagina.*

```js
const bottone =
  document.querySelector("#mioBottone");

bottone.addEventListener("click", () => {
  alert("Hai cliccato sul bottone!");
});
```

Risultato: bottone “Clicca qui!” → “Hai cliccato sul bottone!”

HTML → “marca” il bottone, definite con il suo id e con la sua scritta
CSS → il bottone è rappresentato con sfondo blu, testo bianco, etc
JavaScript → qualcosa accade quando l’utente clicca il bottone

>> `document.querySelector` accetta un selettore CSS (lo stesso `#mioBottone` usato nel foglio di stile) e restituisce il primo elemento che lo soddisfa; `addEventListener` registra una callback che l'event loop eseguirà a ogni click.

---
## Slide 6 – JavaScript: nascita ed evoluzione

- Fu originariamente sviluppato dalla Netscape come Mochan prima e come **LiveScript** poi
- Il nome fu poi cambiato in **JavaScript** nel 1995 (attraverso un accordo Netscape con Sun) nello stesso periodo in cui Netscape iniziò a includere nel proprio browser il supporto per Java

![[TW09-s006-1.png|350]]

(*When the world still made sense* – JavaScript first appeared in 1995 – Programmers in 1994:)

>> Il primo nome in codice era **Mocha** (scritto da Brendan Eich in circa 10 giorni nel maggio 1995). Il nome "JavaScript" fu una scelta di marketing per sfruttare la popolarità di Java.

---
## Slide 7 – ECMAScript

- Nel 1997 una versione standardizzata di JavaScript alla specifica di **ECMAScript**, uno standard ECMA (European Computer Manufactures Association) (ECMA-262)
	- È anche uno standard ISO (ISO/IEC 16262)
	- È arrivato alla versione 17 ECMAScript 2026 (ES2026) del Giugno 2026: https://262.ecma-international.org/
	- è implementato come linguaggio embedded nei browser da JavaScript o, nel caso di Internet Explorer, da JScript.
- Le implementazioni (a volte) introducono delle **estensioni del linguaggio** o della libreria standard e delle relative API

>> Il nome corretto dell'acronimo storico è *European Computer Manufacturers Association*; dal 1994 l'ente si chiama semplicemente **Ecma International**.
>> Distinzione utile: **ECMAScript** è la specifica del linguaggio (sintassi, tipi, oggetti built-in); **JavaScript** è il linguaggio implementato dai motori (V8, SpiderMonkey, JavaScriptCore) più le API dell'ambiente (DOM, fetch, timer…), che *non* fanno parte di ECMA-262. Dal 2015 (ES6/ES2015) esce una nuova edizione ogni anno, a giugno.

---
## Slide 8 – Top Programming Languages

Gli ultimi dati disponibili si riferiscono al 2025
https://spectrum.ieee.org/top-programming-languages/

![[TW09-s008-1.png|250]]

![[TW09-s008-2.png|500]]

| Linguaggio | Punteggio |
|---|---|
| Python | 1 |
| Java | 0.4986 |
| C++ | 0.3669 |
| SQL | 0.3293 |
| C# | 0.2888 |
| **JavaScript** | **0.2872** |
| TypeScript | 0.2807 |
| C | 0.2767 |
| Shell | 0.2096 |
| Go | 0.1866 |
| R | 0.1814 |
| PHP | 0.1568 |
| Kotlin | 0.1316 |
| Rust | 0.1301 |
| Dart | 0.1257 |
| Swift | 0.1172 |
| Ruby | 0.1165 |
| HTML | 0.1113 |
| Objective-C | – |
| Matlab | – |
| Lua | – |

>> I punteggi sono normalizzati rispetto al primo classificato (Python = 1). TypeScript, subito sotto, è un superset tipizzato di JavaScript che viene compilato in JavaScript: sommandoli, l'ecosistema JS risulta tra i più diffusi.

---
## Slide 9 – L’evoluzione di Javascript

![[TW09-s009-1.png|650]]

Timeline:
- 1995 – **JavaScript** is born as LiveScript
- 1997 – **ECMAScript** standard is established
- 1999 – **ES3** comes out and IE5 is all the rage
- 2000 – XMLHttpRequest, a.k.a. AJAX, gains popularity
- 2009 – **ES5** comes out and standard JSON
- 2015 – **ES6**/ECMAScript2015 comes out
- 2016 – **ES7**/ECMAScript2016 comes out
- 2017 – ES.Next

- Javascript nasce come linguaggio client side interpretato dal browser per realizzare semplici script nella pagina (in origine erano spesso usati per inserire effetti grafici e per dare dinamismo al contenuto Web)

>> ES6/ES2015 è la revisione più importante: ha introdotto `let`/`const`, arrow function, `class`, moduli, Promise, template literal, destructuring. "ES.Next" indica le funzionalità in arrivo nelle edizioni annuali successive.

---
## Slide 10 – L’evoluzione di Javascript

![[TW09-s010-1.png|300]]

- Ma cosa è diventato Javascript ora?
	1. Un **linguaggio server side**, che concorre con PHP
	2. La tecnologia di base di una metodologia di sviluppo software per la realizzazione di applicazioni web interattive (**AJAX**)
	3. La tecnologia di base per un formato di interscambio di dati fra applicazioni client-server (**JSON**) che concorre con XML
		- La tecnologia alla base di DB no SQL come Mongo DB

>> - Lato server JavaScript gira tipicamente su **Node.js** (motore V8 fuori dal browser), oppure Deno/Bun.
>> - **AJAX** = *Asynchronous JavaScript And XML*: la pagina scambia dati col server in background (oggi con `fetch`) e aggiorna solo una parte del DOM, senza ricaricarsi.
>> - **JSON** = *JavaScript Object Notation*: sintassi derivata dai letterali oggetto/array di JS, es. `{"name": "Alice", "age": 20}`; MongoDB memorizza documenti in un formato binario derivato (BSON).

---
## Slide 11 – JavaScript vs Java

![[TW09-s011-1.png|300]]

(*JAVA is to JAVASCRIPT as HAM is to HAMSTER*)

- La scelta di questo nome è ancora oggi fonte di **grande** confusione:
	- **Non c'è una vera relazione tra Java e JavaScript**
	- Le somiglianze sono soprattutto sintattiche (causate dal fatto che entrambi i linguaggi si ispirano al C)
	- In particolare gli object model non hanno relazione e sono ampiamente incompatibili

---
## Slide 12 – JavaScript vs Java

- PRINCIPALI differenze tra Java e Javascript
	- JavaScript è **interpretato** non compilato
	- JavaScript è **object-based** o meglio **prototype-based** ma **NON** class-based
		- Esiste il concetto di oggetto
		- Non esiste il concetto di classe
	- JavaScript è debolmente tipizzato (**weakly typed**): Non è necessario definire il tipo di una variabile
- **SI USANO IN CONTESTI DIVERSI!**

![[TW09-s012-1.png|250]]

>> "Interpretato" va inteso come: non c'è una fase di compilazione separata dallo sviluppatore verso un eseguibile/bytecode. I motori moderni (V8, SpiderMonkey) in realtà compilano il codice **JIT** (just-in-time) in codice macchina durante l'esecuzione (vedi slide 16).
>> Da ES2015 esiste la parola chiave `class`, ma è *zucchero sintattico* sopra il meccanismo dei prototipi: il modello sottostante resta prototype-based.

---
## Slide 13 – Linguaggi class-based

- I linguaggi object-oriented che avete visto fino ad ora sono linguaggi **class-based** (C++, Java, C#, ecc).
- Nei linguaggi class-based: la classe esiste come concetto esplicito e primario:
	- le classi formano una gerarchia di tipi, l'ereditarietà avviene tra classi, gli oggetti sono istanze pure delle classi (non hanno metodi propri).
	- Il design delle interfacce precede ed è strumentale alla creazione degli algoritmi per la esecuzione dei compiti dell'applicazione.

![[TW09-s013-1.png|300]]

---
## Slide 14 – Linguaggi prototype based

- JavaScript (e ovviamente anche ECMAScript e i linguaggi derivati) è **prototype-based**
- Nei linguaggi prototype-based:
	- non esiste il concetto di classe, ma quello di **prototipo**, **una istanza primaria, astratta, sempre accessibile e modificabile, di cui le singole istanze clonano (e, se serve, modificano) sia membri sia metodi**
	- Il design delle interfacce è contemporaneo e indipendente dalla creazione degli algoritmi, **e può essere modificato in qualunque momento**, anche a run-time per garantire massima flessibilità

>> Precisazione su come funziona in JS: le istanze non *copiano* fisicamente i membri del prototipo, ma vi sono **collegate** (link interno `[[Prototype]]`). Se una proprietà non è trovata sull'oggetto, la ricerca prosegue sul prototipo e poi lungo la *prototype chain*. Per questo, aggiungendo un metodo al prototipo a runtime, esso diventa subito disponibile a tutte le istanze esistenti.
>>
>> ```js
>> const animale = { saluta() { return "ciao da " + this.nome; } };
>> const gatto = Object.create(animale); // gatto ha come prototipo animale
>> gatto.nome = "Tom";
>> gatto.saluta(); // "ciao da Tom"
>> ```

---
## Slide 15 – Sostanzialmente…

![[TW09-s015-1.png|100]]

- In Java si definisce una classe e da questa si dichiara un oggetto
- In JavaScript ogni oggetto è creato direttamente, senza bisogno di definire prima una classe.

- In Java si possono avere sottoclassi definite a partire da una classe
- In JavaScript è possibile definire un prototipo con il quale un oggetto prende a modello un altro oggetto condividendone le caratteristiche

- In Java la classe definisce tutte le caratteristiche che può avere un oggetto
- In JavaScript è possibile specificare le caratteristiche di un oggetto anche aggiungendo proprietà e metodi a runtime

---
## Slide 16 – Differenze rispetto a Java/C/C#

| Java/C/C# | JavaScript |
|---|---|
| Tipizzazione statica | Tipizzazione dinamica |
| Il tipo viene verificato staticamente e/o a runtime, a seconda del linguaggio | Il tipo di un valore è determinato a runtime |
| Programmazione OO centrata sulle classi | Programmazione OO basata sui prototipi |
| Overloading dei metodi | Nessun overloading classico dei metodi |
| Fase di compilazione | Tipicamente esecuzione/JIT compilation a runtime |
| Struttura degli oggetti più rigida | Gli oggetti possono essere modificati dinamicamente |

>> Niente overloading: se si definiscono due funzioni con lo stesso nome, l'ultima sovrascrive la prima. Si ottiene un effetto simile controllando a runtime numero e tipo degli argomenti (`arguments.length`, `typeof`) o usando parametri di default/rest (`function f(a, b = 0, ...altri)`).

---
## Slide 17 – Tipi di dato

- JavaScript è un linguaggio dinamicamente tipizzato: i tipi sono associati ai valori, non alle variabili
- Una stessa variabile può quindi contenere valori di tipi diversi durante l'esecuzione
- JavaScript distingue tra tipi primitivi e oggetti

>> Esempio (verificato con node):
>>
>> ```js
>> let x = 42;      // typeof x → "number"
>> x = "ciao";      // typeof x → "string"
>> ```
>>
>> I primitivi sono immutabili e passati per valore; tutto ciò che non è primitivo (oggetti, array, funzioni, date…) è un **oggetto**, gestito per riferimento.

---
## Slide 18 – Tipi primitivi

| Tipi primitivi | Descrizione |
|---|---|
| number | Numeri, sia interi sia decimali (normalmente IEEE 754 a 64 bit) |
| string | Sequenze di caratteri |
| boolean | Valori logici: true e false |
| undefined | Valore non definito, ad esempio di una variabile dichiarata ma non inizializzata |
| null | Valore che rappresenta intenzionalmente l'assenza di un oggetto o valore |
| bigint | Numeri interi di precisione arbitraria |
| symbol | Valori primitivi univoci, utilizzabili anche come chiavi di proprietà |

>> Dettagli utili (verificati con node):
>> - Essendo `number` un double IEEE 754, `0.1 + 0.2` → `0.30000000000000004` e gli interi sono esatti solo fino a `Number.MAX_SAFE_INTEGER` $= 2^{53}-1 = 9007199254740991$: `2**53 + 1` → `9007199254740992`. Con bigint (suffisso `n`): `2n**53n + 1n` → `9007199254740993n`.
>> - `NaN` è di tipo `number` (`typeof NaN` → `"number"`).
>> - Stranezza storica: `typeof null` → `"object"` (bug mantenuto per compatibilità), anche se `null` è un primitivo.
>> - `typeof 10n` → `"bigint"`, `typeof Symbol("a")` → `"symbol"`, `typeof undefined` → `"undefined"`.

---
## Slide 19 – Array

- Rappresentano collezioni ordinate di elementi, accessibili attraverso un indice numerico a partire da zero
- A differenza degli array di molti linguaggi staticamente tipizzati, possono contenere valori di tipi diversi e modificare dinamicamente la propria lunghezza

```js
const values = [10, "hello", true];

console.log(values[0]);  // 10
console.log(values.length); // 3

values.push(42);     // aggiunge un elemento
values[1] = "world"; // modifica un elemento
```

- `const` impedisce di riassegnare la variabile `values`, ma non impedisce di modificare gli elementi dell'array

>> Verificato con node: dopo le modifiche `values` vale `[10, "world", true, 42]` e `values.length` è `4`; invece `values = []` lancia `TypeError: Assignment to constant variable.`. `const` rende costante il *riferimento*, non il contenuto; per rendere immutabile l'array serve `Object.freeze(values)`.

---
## Slide 20 – Array

![[TW09-s020-1.png|600]]

- **Array `values` – versione iniziale**: `const values = [10, "hello", true];`

| Indice | [0] | [1] | [2] |
|---|---|---|---|
| Valore | 10 | "hello" | true |
| Tipo | number | string | boolean |

- **Array `values` – dopo le modifiche**: `values.push(42);   values[1] = "world";`

| Indice | [0] | [1] | [2] | [3] |
|---|---|---|---|---|
| Valore | 10 | "world" | true | 42 |
| Tipo | number | string | boolean | number |

---
## Slide 21 – Oggetti in JS

- Collezioni dinamiche di proprietà, rappresentate da coppie chiave–valore
- Una proprietà può contenere un valore primitivo, un altro oggetto oppure una funzione (metodo)
- A differenza di quanto avviene normalmente in Java, non è necessario definire una classe prima di creare un oggetto

![[TW09-s021-1.png|600]]

```js
const student = {
    name: "Alice",
    age: 20,
    courses: "Computer Science and Engineering"
};

console.log(student.name);     // "Alice"
console.log(student["age"]);   // 20

student.city = Cesena;

student.age = 21;
```

Annotazioni: le due `console.log` → *Accesso alle proprietà*; `student.city = Cesena;` → *Aggiunta dinamica di una proprietà*; `student.age = 21;` → *Modifica di una proprietà*

>> Attenzione: così com'è scritto, `student.city = Cesena;` (senza virgolette) lancia `ReferenceError: Cesena is not defined` (verificato con node), perché `Cesena` viene interpretato come nome di variabile. La forma corretta è `student.city = "Cesena";`, come nella slide successiva (dove la proprietà si chiama anche `course` e non `courses`).
>> Le due notazioni di accesso sono equivalenti, ma quella a parentesi quadre accetta qualsiasi espressione come chiave: `const k = "age"; student[k]` → `20`. Leggere una proprietà inesistente non dà errore ma restituisce `undefined`.

---
## Slide 22 – Oggetti in JS

![[TW09-s022-1.png|650]]

**Oggetto `student` – versione iniziale**

```js
const student = {
  name: "Alice",
  age: 20,
  course: "Computer Science and Engineering"
};
```

Rappresentazione dell’oggetto (iniziale):

| student | |
|---|---|
| name | "Alice" |
| age | 20 |
| course | "Computer Science and Engineering" |

**Oggetto `student` – dopo le modifiche**

```js
const student = {
  name: "Alice",
  age: 20,
  course: "Computer Science and Engineering"
};
// modifica di una proprietà esistente
student.age = 21;
// aggiunta di una nuova proprietà
student.city = "Cesena";
```

Rappresentazione dell’oggetto (dopo le modifiche):

| student | | |
|---|---|---|
| name | "Alice" | |
| age | 21 | *proprietà modificata (valore aggiornato)* |
| course | "Computer Science and Engineering" | |
| city | "Cesena" | *nuova proprietà aggiunta dinamicamente* |

>> Come per gli array, `const student` impedisce solo di riassegnare `student` a un altro oggetto: le proprietà possono essere aggiunte, modificate o rimosse (`delete student.city`). Con `Object.freeze(student)` le modifiche successive vengono ignorate (o lanciano `TypeError` in strict mode).
---
## Slide 23 – Oggetti in JS

- Proprietà fondamentali
	- Le proprietà possono essere aggiunte, modificate o eliminate a runtime.
	- Gli oggetti sono gestiti attraverso riferimenti: due variabili possono riferirsi allo stesso oggetto.
	- L'ereditarietà è basata sui **prototipi**, anche quando si utilizza la sintassi class
- Attenzione: **gli oggetti JavaScript e JSON sono concetti distinti!**
  JSON è un formato testuale per rappresentare e scambiare dati, con una sintassi ispirata agli oggetti JavaScript.

>> Esempio della differenza: `{ name: "Alice" }` è un oggetto JS (vive in memoria, le chiavi possono non avere virgolette, i valori possono essere funzioni, `undefined`, ecc.), mentre `'{"name":"Alice"}'` è una **stringa** JSON (chiavi obbligatoriamente tra doppi apici, niente funzioni né `undefined`).
>> Si passa da uno all'altro con `JSON.stringify(obj)` (oggetto → testo) e `JSON.parse(testo)` (testo → oggetto).

---
## Slide 24 – Flessibilità: potenza e rischio

```js
let x = 10;
x = "hello";
x = true;
```

```js
const user = {
    name: "Alice"
};

user.age = 20;
```

- JS permette di modificare dinamicamente sia il tipo dei valori associati alle variabili sia la struttura degli oggetti durante l'esecuzione
- Questa flessibilità è uno dei principali punti di forza di JavaScript, ma anche una delle sue principali fonti di errori

>> Nel primo esempio la stessa variabile contiene in sequenza un `number`, una `string` e un `boolean` (tipizzazione dinamica: il tipo è dei valori, non delle variabili).
>> Nel secondo, l'oggetto `user` acquisisce a runtime una nuova proprietà `age`: notare che è lecito anche se `user` è `const` (vedi slide 33).

---
## Slide 25 – Type coercion

- In JS il risultato di una operazione dipende dal tipo effettivo del valore e dalle regole di coercizione applicate dagli operatori

```js
5 == "5"     // true
5 === "5"    // false
```

- Molte «*stranezze*» di JS non sono casuali ma derivano da precise regole del linguaggio
- Conviene comprendere e distinguere bene tra flessibilità e prevedibilità

![[TW09-s025-1.png|400]]

>> Il meme mostra la console del browser: con `var x = "42";` si ottiene `x + 1` → `"421"` (concatenazione di stringhe) ma `x - 1` → `41` (sottrazione numerica). Verificato con node.

---
## Slide 26 – Type coercion

- JavaScript può convertire implicitamente i valori da un tipo all'altro durante la valutazione delle espressioni
- La **type coercion** permette a JS di convertire automaticamente i valori tra tipi diversi, ma può produrre risultati inattesi
- Per i confronti di uguaglianza è generalmente preferibile utilizzare **`===`** e **`!==`**

![[TW09-s026-1.png|600]]

```js
"5" + 1      // "51"
"5" - 1      // 4
5 == "5"     // true
5 === "5"    // false
true + 1     // 2
```

- `"5" + 1` → ***L'operatore "+" in presenza di una stringa converte il numero 1 in stringa ed esegue una concatenazione***
- `"5" - 1` → ***L'operatore "-" esegue una sottrazione numerica, quindi converte implicitamente la stringa "5" nel numero 5***
- `5 == "5"` → ***L'operatore "==" confronta i valori applicando, se necessario, una conversione implicita dei tipi***
- `5 === "5"` → ***L'operatore "===" esegue un confronto stretto, senza conversioni implicite: numero e stringa sono tipi diversi***
- `true + 1` → ***In un'operazione aritmetica il valore booleano true viene convertito nel numero 1 (false diventa 0)***

>> Regola pratica: `+` è "ambiguo" (somma o concatenazione) e basta un operando stringa perché vinca la concatenazione; gli altri operatori aritmetici (`-`, `*`, `/`, `%`) convertono sempre a numero.
>> Esempi extra (verificati con node): `[1, 2] + [3]` → `"1,23"` (gli array vengono convertiti in stringa), `"abc" - 1` → `NaN`.

---
## Slide 27 – Type coercion per gli oggetti

```js
const a = { value: 10 };
const b = { value: 10 };

console.log(a === b);   // false

const c = a;
console.log(a === c);   // true
```

- Gli oggetti in JS sono confrontati per identità, non confrontando automaticamente il contenuto delle loro proprietà

>> `a` e `b` hanno lo stesso contenuto ma sono due oggetti distinti in memoria (due riferimenti diversi), quindi `===` (e anche `==`) restituisce `false`. `c = a` copia il **riferimento**, non l'oggetto: `a` e `c` puntano allo stesso oggetto, e una modifica tramite `c` (es. `c.value = 99`) è visibile anche da `a`.
>> Per confrontare il contenuto serve un confronto "profondo" scritto a mano o tramite librerie (o, per oggetti semplici, `JSON.stringify(a) === JSON.stringify(b)`, che però dipende dall'ordine delle chiavi).

---
## Slide 28 – Operatore `typeof`

- **`typeof`** restituisce una stringa che indica il tipo di un valore o di un'espressione JavaScript, permettendo di verificarne il tipo a runtime

| Espressione | Risultato | Note |
|---|---|---|
| `Typeof "hello"` | `"string"` | stringa |
| `Typeof 42` | `"number"` | numero |
| `Typeof true` | `"boolean"` | booleano |
| `Typeof []` | `"object"` | gli array sono oggetti |
| `Typeof null` | `"object"` | mantenuto per ragioni storiche |

>> Attenzione: l'operatore si scrive tutto minuscolo, `typeof` (la maiuscola nella tabella è un refuso: `Typeof` darebbe errore).
>> Altri casi utili (verificati con node): `typeof undefined` → `"undefined"`, `typeof function(){}` → `"function"` (le funzioni sono oggetti, ma `typeof` le distingue).
>> `typeof null === "object"` è un bug storico della prima implementazione di JS, mai corretto per compatibilità: per testare `null` si usa `x === null`.

---
## Slide 29 – Operatore `Array.isArray()`

- **`Array.isArray()`** permette di verificare se un valore è un array, dato che **`typeof`** restituisce **`"object"`** anche per gli array

```js
Array.isArray([])        // -> true

Array.isArray([1, 2])    // -> true

Array.isArray({})        // -> false

Array.isArray(null)      // -> false
```

>> A rigore `Array.isArray` non è un operatore ma un metodo statico dell'oggetto globale `Array`.

---
## Slide 30 – Prima domanda

*BONUS*

- **DOMANDA 1**:
  Quale risultato viene restituito dalla valutazione della seguente espressione JavaScript?

```js
[] == false
```

- [ ] `true`
- [ ] `false`
- [ ] `TypeError`
- [ ] `undefined`

![[TW09-s030-1.png|300]]

>> **Risposta corretta: `true`** (verificato con node: `[] == false` → `true`).
>> Motivazione: con `==` il booleano `false` viene convertito nel numero `0`; l'array, essendo un oggetto, viene convertito in primitivo tramite `toString()`, ottenendo la stringa vuota `""`; infine `""` viene convertita in numero, cioè `0`. Il confronto finale è `0 == 0` → `true` (vedi slide successiva).
>> Curiosità: eppure `[]` è un valore *truthy* (`!![]` → `true`), e quindi anche `[] == ![]` → `true`.

---
## Slide 31 – Type coercion

![[TW09-s031-1.png|700]]

1. **Type coercion in JavaScript (1/4)** – La domanda: perché `[] == false` ?
	- `[] == false // → true`
	- Come è possibile che un array vuoto sia uguale a `false`?
2. **Type coercion in JavaScript (2/4)** – Passo 1: l'array viene convertito in una stringa
	- Per l'operatore `==`, se un operando è un oggetto (inclusi gli array), viene prima convertito in una stringa tramite il metodo `toString()`.
	- `[].toString() // → "" (stringa vuota)`
	- `[]` (array vuoto) —`toString()`→ `""` (stringa vuota)
3. **Type coercion in JavaScript (3/4)** – Passo 2: la stringa viene convertita in numero
	- Ora l'operatore `==` confronta una stringa con un booleano. Il booleano `false` viene convertito in numero: `0`. La stringa `""` viene a sua volta convertita in numero.
	- `Number("") // → 0`
	- `Number(false) // → 0`
	- `""` (stringa vuota) —`Number()`→ `0` (numero)
	- `false` (booleano) —`Number()`→ `0` (numero)
4. **Type coercion in JavaScript (4/4)** – Passo 3: confronto finale
	- Alla fine, l'operatore `==` confronta i due numeri risultanti.
	- `0 == 0 // → true`
	- Quindi `[] == false` restituisce `true`.

>> Precisazione sull'ordine reale previsto dalla specifica (Abstract Equality Comparison): prima viene convertito il booleano (`false` → `0`), poi l'oggetto viene ridotto a primitivo (`[]` → `""`), infine la stringa viene convertita in numero (`""` → `0`). Il risultato non cambia.
>> Per lo stesso motivo `[0] == false` → `true` e `[1] == 1` → `true`, mentre `null == false` → `false` (`null` è uguale con `==` solo a `null` e `undefined`). Tutti verificati con node.

---
## Slide 32 – Dichiarazione delle variabili

- Le variabili vengono dichiarate principalmente utilizzando **`let`** e **`const`**
- Entrambe hanno *block scope*, ma differiscono per la possibilità di riassegnare un valore alla variabile

```js
let score = 18;
score = 25;           //OK
score = "passed";     //OK
```

***Il valore può essere modificato e può anche cambiare il tipo***

```js
const maxScore = 30;
maxScore = 35; //TypeErorr
```

***Il valore associato alla variabile non può essere riassegnato***

![[TW09-s032-1.png|300]]

>> Il commento corretto è `TypeError` (verificato con node: `TypeError: Assignment to constant variable.`). Inoltre una `const` va inizializzata nella dichiarazione stessa: `const k;` è un `SyntaxError`.

---
## Slide 33 – Dichiarazione delle variabili

- **`const`** non rende necessariamente immutabile il valore a cui fa riferimento!

```js
const student = { name: "Alice" };

student.name = "Bob";   // OK
student.age = 23;       // OK

student = {}; // TypeError (tenta di
              assegnare un nuovo oggetto
              alla variabile)
```

***Regola pratica:*** ***preferire*** `const` ***per impostazione predefinita e usare*** `let` ***quando è necessario riassegnare la variabile***

- **`const`** rende costante il riferimento associato alla variabile, non necessariamente il valore o il contenuto dell'oggetto referenziato
- Quindi è possibile modificare le proprietà di un oggetto dichiarato con `const`, ma non riassegnare la variabile ad un altro oggetto

>> Se si vuole davvero impedire la modifica delle proprietà si può usare `Object.freeze(student)`: dopo il freeze, le assegnazioni alle proprietà vengono ignorate (o generano `TypeError` in strict mode). Il freeze è comunque "superficiale": gli oggetti annidati restano modificabili.

---
## Slide 34 – `var`: se lo conosci lo eviti

- Prima dell'introduzione di **`let`** e **`const`** con ECMAScript 2015 (ES6), le variabili JavaScript venivano comunemente dichiarate utilizzando **`var`**
- **`var`** è ancora supportato e compare frequentemente nel codice legacy, ma presenta comportamenti che possono favorire errori difficili da individuare

```js
if (true) {
    var x = 10;
};

console.log(x); //10
```

```js
if (true) {
    let x = 10;
};

console.log(x); //ReferenceError
```

- **`var`** non rispetta il *block scope*: la variabile rimane accessibile fuori dal blocco; **`let`** rispetta il *block scope*: la variabile esiste solo all'interno del blocco
- **`var`** presenta altre particolarità, es. la possibilità di ridichiarare una variabile nello stesso scope e un comportamento differente rispetto all'***hoisting***

>> `var` ha *function scope*: è visibile in tutta la funzione che la contiene (o globalmente se dichiarata fuori da funzioni), indipendentemente dai blocchi `{ }`.
>> Ridichiarazione: `var a = 1; var a = 2;` è lecito, mentre `let a = 1; let a = 2;` dà `SyntaxError: Identifier 'a' has already been declared`.
>> Il caso classico che mostra il problema: `for (var i = 0; i < 3; i++) setTimeout(() => console.log(i));` stampa `3 3 3`, mentre con `let i` stampa `0 1 2` (con `let` ogni iterazione ha la propria `i`).

---
## Slide 35 – `var`: REGOLA DEL CORSO!

***`var` esiste e postreste incontrarlo nel codice JavaScript più vecchio***

***Dovete sapere che cosa fa, ma NON VOGLIO VEDERLO NEI VOSTRI ELABORATI NE' NEL CODICE CHE CONSEGNERETE ALL'ESAME IN LABORATORIO***

---
## Slide 36 – Block scope

- Lo *scope* definisce la porzione di codice in cui una variabile è accessibile
- Le variabili dichiarate con `let` e `const` hanno **block scope**: sono visibili soltanto all'interno del blocco `{ }` in cui vengono dichiarate e negli eventuali blocchi annidati

![[TW09-s036-1.png|650]]

```js
let score = 18;
If (score >= 18) {
    const message = "Exam passed!";
    console.log(message);         //OK
};
console.log(score);          //18
console.log(message);        //ReferenceError
```

- `score` ***dichiarata nello scope esterno e quindi accessibile anche dentro il blocco*** `if`
- `message` ***dichiarata all'interno del blocco*** `if` ***e quindi non può essere usata all'esterno***

>> Nel codice reale la parola chiave va scritta minuscola: `if`. Con `If` maiuscolo JS non riconosce il costrutto (errore di sintassi).
>> L'errore dell'ultima riga è, più precisamente, `ReferenceError: message is not defined`.

---
## Slide 37 – Block scope e Shadowing

```js
let name = "Alice";
If (true) {
    let name = "Bob";
    console.log(name);     //Bob
};
console.log(name);    //Alice
```

***All'interno del blocco viene dichiarata una nuova variabile con lo stesso nome, che nasconde temporaneamente quella dello scope esterno (variabile shadowing). Le due variabili sono distinte***

![[TW09-s037-1.png|450]]

- **Scope esterno**: `name = "Alice"` → Scope esterno `name = "Alice"`
	- **Scope interno — if**: `name = "Bob"` → La dichiarazione interna nasconde quella esterna, senza modificarla.
	- Terminato il blocco, **name** nello scope esterno vale ancora `"Alice"`.
- Lo scope è lessicale: dipende alla struttura del codice, non dal percorso seguito durante l'esecuzione

>> Anche qui `If` va letto come `if`.
>> Lo shadowing è diverso dalla riassegnazione: se nel blocco si scrivesse `name = "Bob";` (senza `let`) si modificherebbe la variabile esterna, e l'ultima riga stamperebbe `Bob`.
>> "Scope lessicale" significa che per sapere a quale variabile si riferisce un nome basta guardare dove è scritto nel codice (in quali blocchi/funzioni è annidato), non da dove viene chiamato a runtime.

---
## Slide 38 – Block scope e Shadowing

![[TW09-s038-1.png|700]]

- Lo **scope** definisce la porzione di codice in cui una variabile è accessibile.
- Le variabili dichiarate con `let` e `const` hanno **block scope**: sono visibili soltanto all'interno del blocco `{ }` in cui vengono dichiarate e negli eventuali blocchi annidati.

```js
{
  let name = "Alice";
  console.log(name); // "Alice"

  if (true) {
    let name = "Bob";
    console.log(name); // "Bob"
  }

  console.log(name); // "Alice"
}

// name qui non è accessibile
```

- **Scope esterno** (righe 2–3): La variabile **name** è dichiarata nello scope esterno del blocco ed è inizializzata con "Alice".
- **Scope interno — if** (righe 6–7): All'interno del blocco if viene dichiarata una nuova variabile **name**, che nasconde quella esterna. Qui **name** vale "Bob".
- **Dopo il blocco if** (riga 10): Terminato il blocco if, la variabile **name** nello scope esterno vale ancora "Alice". La dichiarazione interna non ha modificato quella esterna: le due variabili esistono in scope diversi.
- Schema degli scope: Scope esterno → `name` = `"Alice"`; Scope interno (if) → `name` = `"Bob"` (*nasconde la variabile esterna*); all'uscita dal blocco → `name` = `"Alice"`.

---
## Slide 39 – Hoisting

- In Javascript, le dichiarazioni vengono elaborate durante la creazione dello scope, prima dell'esecuzione delle istruzioni
- Questo comportamento è chiamato ***hoisting***
- L'effetto osservabile dipende dal tipo di dichiarazione

```js
console.log(x);        //undefined
var x = 10;
console.log(x);        //10
```

***var: accessibile prima della dichiarazione***

La dichiarazione di **x** viene elaborata prima dell'esecuzione, ma l'assegnazione del valore 10 avviene solo quando viene raggiunta l'istruzione corrispondente

```js
console.log(y);        //ReferenceError
let y = 20;
console.log(y);        //20
```

***let e const: Temporal Dead Zone***

Anche `let` e `const` vengono registrate durante la creazione dello *scope*, ma non possono essere usate prima dell'inizializzazione

>> Verificato con node: il primo `console.log(y)` genera `ReferenceError: Cannot access 'y' before initialization` (e quindi interrompe l'esecuzione: la terza riga verrebbe raggiunta solo se l'errore fosse gestito).
>> Notare la differenza di messaggio: una variabile mai dichiarata dà `... is not defined`, una variabile `let`/`const` in TDZ dà `Cannot access ... before initialization`: la variabile "esiste" già nello scope, ma non è ancora utilizzabile.

---
## Slide 40 – Hoisting e Temporal Dead Zone

***Temporal Dead Zone (TDZ)***: Intervallo tra inizio dello scope e inizializzazione

***Hoisting*** non significa che il browser sposti fisicamente le istruzioni all'inizio del codice. È una conseguenza di come JavaScript gestisce le dichiarazioni e gli ambienti lessicali prima di eseguire le istruzioni

![[TW09-s040-1.png|650]]

- **Hoisting — `var x`**
	- Prima dell'assegnazione: `x` → `undefined`
	- Dopo l'assegnazione: `x` → `10`
	- Le variabili dichiarate con `var` vengono "sollevate" (hoisted) all'inizio dello scope e inizializzate con `undefined`. Prima dell'assegnazione il loro valore è `undefined`.
- **Temporal Dead Zone — `let y` / `const y`**
	- Temporal Dead Zone: `y` → `ReferenceError`
	- Dopo l'inizializzazione: `y` → `20`
	- Le variabili dichiarate con `let` e `const` **non** sono inizializzate durante l'hoisting. Prima dell'inizializzazione si trovano nella **Temporal Dead Zone** e non possono essere accedute: l'accesso genera un `ReferenceError`. Dopo l'inizializzazione il loro valore è `20`.

>> La TDZ è "temporale" e non "spaziale": conta il momento in cui avviene l'accesso, non la posizione nel codice. Ad esempio una funzione definita prima di `let y = 20;` può leggere `y` senza errori, purché venga *chiamata* dopo l'inizializzazione.

---
## Slide 41 – Funzioni

- In JavaScript, le funzioni sono **valori di prima classe** (**first-class values**): possono essere assegnate a variabili, passate come argomenti ad altre funzioni e restituite come risultati
- Questa caratteristica rende JavaScript particolarmente adatto alla programmazione basata su eventi e alla gestione di operazioni asincrone

![[TW09-s041-1.png|650]]

```js
function add(a, b) {
    return a + b;
}
console.log(add(3, 5)); //8
```

```js
const operation = add;
console.log(operation(3, 5)); //8
```

`add` ***identifica la funzione come valore, mentre*** `add(3, 5)` ***ne invoca l'esecuzione***

```js
button.addEventListener("click", handleClick)
```

`handleClick` ***viene passata come parametro***

>> Errore tipico: scrivere `button.addEventListener("click", handleClick())`. In quel caso la funzione viene eseguita subito, e al listener viene passato il suo valore di ritorno (spesso `undefined`) invece della funzione stessa.
>> Esempio di funzione restituita come risultato: `function moltiplicatore(k) { return x => x * k; }` → `const doppio = moltiplicatore(2); doppio(5)` vale `10`.

---
## Slide 42 – Definire una funzione

```js
function add(a, b) {
    return a + b;
}
```

***Function Declaration:*** ***una dichiarazione con un nome, utilizzabile anche prima della sua posizione nel codice, grazie all'hoisting***

```js
const add = function(a, b) {
    return a + b;
}
```

***Function Expression:*** ***una funzione viene creata come espressione e assegnata alla variabile*** **`add`**

```js
const add = function(a, b) => a + b;
```

***Arrow Function:*** ***sintassi compatta per definire una funzione; in questo esempio il risultato dell'espressione viene restituito implicitamente***

- Queste tre forme possono produrre lo stesso risultato, ma non sono completamente equivalenti: differiscono, tra le altre cose, per hoisting e gestione di `this`

>> Attenzione: la riga dell'arrow function sulla slide contiene un refuso. Scritta così (`function(a, b) => ...`) è un errore di sintassi (verificato con node). La forma corretta è `const add = (a, b) => a + b;`.
>> Differenza di hoisting (verificata con node): una function declaration si può chiamare prima della riga in cui è definita. Una function expression o arrow assegnata a `const` invece no: chiamarla prima dà `ReferenceError` (TDZ), e con `var` si otterrebbe `TypeError: ... is not a function`, perché la variabile vale ancora `undefined`.

---
## Slide 43 – Arrow functions

- Le ***arrow functions***, introdotte con ECMAScript 2015, permettono di definire funzioni attraverso una sintassi più compatta basata sull'operatore =>
- Sono particolarmente utilizzate come callback e nelle operazioni sugli array

```js
//un solo parametro: parentesi opzionali
const square = x => x*x;

//Più parametri
const add = (a, b) => a + b;

//Più istruzioni: blocco e return esplicito
const max = (a, b) => {
    if (a > b) {
        return a;
    }
    return b;
}
```

***Se il corpo contiene una sola espressione, il valore viene restituito implicitamente. Se si utilizzano { } per delimitare il corso della funzione, occorre un*** `return` ***esplicito per restituire un valore. Le arrow function non definiscono un proprio*** `this`***, ma usano quello del contesto lessicale esterno.***

>> "corso della funzione" va letto come "corpo della funzione".
>> Altri casi particolari: senza parametri servono le parentesi vuote, `const saluta = () => "ciao";`. Per restituire implicitamente un oggetto letterale bisogna racchiuderlo tra parentesi tonde, `const crea = n => ({ name: n });`, altrimenti le graffe vengono interpretate come blocco del corpo.
>> Uso tipico come callback: `[1, 2, 3].map(x => x * 2)` → `[2, 4, 6]`.
---
## Slide 44 – Callback

- Una ***callback*** è una funzione passata come argomento ad un'altra funzione, affinché quest'ultima possa richiamarla quando necessari
- Le callback sono alla base di molti meccanismi JavaScript, tra cui la gestione degli eventi, le operazioni sugli array e numerose API sincrone

```js
function greet(name){
	console.log("Hello, " + name);
}

function processUser(callback){
	const user = "Alice";
	callback(user);
}

processUser(greet);
```

***Risultato:***

```
Hello, Alice
```

>> `processUser` non sa nulla di `greet`: riceve "qualcosa da chiamare" nel parametro `callback` e lo invoca passandogli `user`. Cambiando la callback (es. una funzione che scrive su file o mostra un alert) si cambia il comportamento di `processUser` senza toccarne il codice.

---
## Slide 45 – Callback

![[TW09-s045-1.png|450]]

- `processUser(greet)` – Passaggio della funzione come argomento
- ↓ `callback(user)` – La funzione ricevuta viene invocata
- ↓ `greet("Alice")` – Esecuzione della callback

---
## Slide 46 – Callback

```js
processUser(greet);   // Passa la funzione

processUser(greet()); // Esegue subito greet e passa il suo risultato
```

- Nel secondo caso `greet()` viene invocata senza argomenti e restituisce `undefined`; quindi `processUser` riceve `undefined` e genera un errore quando tenta di chiamarlo come funzione
- Attenzione! **Una callback non è necessariamente asincrona!** Nell'esempio viene eseguita immediatamente, durante l'esecuzione di `processUser`

>> Eseguendo davvero il secondo caso con node si ottiene prima la stampa di `greet()` (chiamata senza argomenti, quindi `name` vale `undefined`) e poi l'errore:
>> ```
>> Hello, undefined
>> TypeError: callback is not a function
>> ```
>> Regola pratica: senza parentesi (`greet`) passi la funzione come valore; con le parentesi (`greet()`) la esegui subito e passi il suo valore di ritorno.

---
## Slide 47 – Callback

```js
button.addEventListener("click", () => ){
	console.log("Button clicked!");
});
```

- La funzione viene passata al **browser**, che la invocherà quando si verificherà l'evento ***click*** per il bottone in questione
- In JavaScript le funzioni non sono soltanto blocchi di codice da eseguire: sono valori che possono essere passati, restituiti e utilizzati per definire il comportamento del programma.

>> Attenzione: nel codice della slide c'è un refuso (la `)` dopo `=>`), che lo rende un errore di sintassi. La forma corretta è:
>> ```js
>> button.addEventListener("click", () => {
>> 	console.log("Button clicked!");
>> });
>> ```
>> Qui, a differenza della slide 46, la callback viene eseguita "più tardi" (quando l'utente clicca), cioè in modo asincrono rispetto al codice che registra il listener.

---
## Slide 48 – Higher-order function

- Le funzioni possono restituire altre funzioni
- Una funzione che riceve altre funzioni come argomenti oppure restituisce una funzione è detta ***higher-order function***
- Questo permette di costruire comportamenti riutilizzabili e parametrizzabili

```js
function multiplyBy(factor){
   return function(number){
      return number * factor;
   };
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5));       // 10
console.log(triple(5));       // 15
```

*La funzione interna mantiene accesso alle variabili del contesto lessicale in cui è stata creata, anche dopo la conclusione della funzione esterna. Questo meccanismo prende il nome di* ***closure***

>> `multiplyBy` è una "fabbrica di funzioni": ogni chiamata crea una nuova funzione interna che "ricorda" il proprio `factor`. `double` ricorda `factor = 2`, `triple` ricorda `factor = 3`, anche se `multiplyBy` è già terminata (risultati verificati con node: `10` e `15`).
>> `addEventListener` (slide 47) e `map` (slide 49) sono higher-order function perché ricevono una funzione come argomento.

---
## Slide 49 – `map()`

- Il metodo `map()` applica una funzione a ciascun elemento di un array e restituisce un nuovo array contenente i risultati, senza modificare l'array originale

```js
const number = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);
console.log(doubled); // [2, 4, 6, 8]
console.log(numbers); // [1, 2, 3, 4]
```

```js
const doubled = [];
for (const n of numbers) {
	doubled.push(n * 2);
}
```

![[TW09-s049-1.png|500]]

- `numbers.map(x => x * 2)`
- ↓ Applicazione di `x => x * 2` a ogni elemento: 1 → 2, 2 → 4, 3 → 6, 4 → 8
- ↓ Viene creato un nuovo array. `[ 2, 4, 6, 8 ]`

>> Refuso nella slide: l'array è dichiarato come `number` ma poi usato come `numbers` (così com'è darebbe `ReferenceError: numbers is not defined`); va dichiarato `const numbers = [1, 2, 3, 4];`. Con il nome corretto, node stampa `[ 2, 4, 6, 8 ]` e `[ 1, 2, 3, 4 ]`.
>> Il riquadro di destra è l'equivalente "imperativo" con un ciclo `for...of`: `map` è più conciso e dichiarativo (dici *cosa* trasformare, non *come* iterare). La callback di `map` riceve in realtà anche indice e array: `arr.map((x, i, a) => ...)`.

---
## Slide 50 – Oggetti e metodi

- Gli oggetti in JS sono collezioni dinamiche di ***proprietà***
- Le ***proprietà*** possono contenere **dati**, **altri oggetti** o **funzioni**, che, quando associate ad un oggetto e usate come operazioni su di esso, sono chiamate ***metodi***
- In JS un oggetto può essere creato e modificato senza definire preventivamente una classe
- L'ereditarietà è basata sui prototipi e sulla delega della ricerca delle proprietà
- La sintassi `class` rende il codice più famigliare a chi conosce la programmazione OO tradizionale, ma non sostituisce il modello basato sui prototipi

---
## Slide 51 – `this`

![[TW09-s051-1.png|600]]

```js
const user = {
   name: "Alice",
   age: 20,
   greet() {
      return ‘Hello, ${this.name}!’;
   }
};
console.log(user.name);       // "Alice"
console.log(user.greet());    // "Hello, Alice!"
```

*Forma abbreviata per dichiarare un metodo all'interno di un oggetto*

- All'interno di un metodo, `this` permette di accedere all'oggetto utilizzato per invocare il metodo. Il suo valore dipende dalla modalità di invocazione della funzione
- In questo esempio, **`user.greet()`** viene invocato attraverso **`user`**, quindi **`this`** fa riferimento a **`user`**
- **Attenzione!** A differenza di molti linguaggi OO tradizionali, in JavaScript `this` non è necessariamente legato in modo permanente all'oggetto in cui una funzione è stata definita

>> Nella slide la stringa è racchiusa tra apici tipografici `‘…’`: in JS è un errore di sintassi (`SyntaxError: Invalid or unexpected token`). Per l'interpolazione `${...}` servono i backtick: `` `Hello, ${this.name}!` `` (template literal).
>> `greet() { ... }` equivale a `greet: function() { ... }`.
>> Esempio di `this` "staccato" dall'oggetto (verificato con node):
>> ```js
>> const g = user.greet;
>> g(); // "Hello, undefined!" in modalità non strict (this = oggetto globale);
>>      // TypeError in strict mode / moduli (this = undefined)
>> ```
>> Il valore di `this` si decide quindi al momento della chiamata, guardando ciò che sta a sinistra del punto.

---
## Slide 52 – Ereditarietà basata sui prototipi

- JS utilizza un modello di ereditarietà ***prototype-based***: ogni oggetto può avere un collegamento interno ad un altro oggetto, chiamato ***prototipo***
- Attraverso questo collegamento, un oggetto può accedere a proprietà e metodi definiti nel proprio prototipo, senza doverli possedere direttamente

![[TW09-s052-1.png|650]]

```js
const person = {
   greet() {
      return ‘Hello, ${this.name}!’;
   }
};
const student = Object.create(person);
student.name = "Alice";
console.log(student.name);    // "Alice"
console.log(student.greet()); // "Hello, Alice!"
```

- *`person` definisce un metodo `greet()`*
- *`Object.create(person)` crea un nuovo oggetto `student` il cui prototipo è `person`*
- *`student` possiede direttamente la proprietà `name` ma non il metodo `greet()`*
- *Quando invochiamo `student.greet()` JS trova il metodo nel prototipo `person`*

>> Anche qui gli apici `‘…’` vanno letti come backtick (template literal). Nota che dentro `greet`, `this` è `student` (l'oggetto usato per l'invocazione), non `person`: per questo stampa `"Hello, Alice!"` anche se il metodo è definito in `person` (verificato con node).

---
## Slide 53 – Relazione tra oggetto e prototipo

![[TW09-s053-1.png|300]]

(`student` con `name: "Alice"` → `[[Prototype]]` → `person` con `greet()`)

- L'ereditarietà in JS si basa sulla condivisione e sulla ricerca delle proprietà attraverso una catena di oggetti, non sulla necessità di definire una gerarchia di classi

---
## Slide 54 – Prototype chain

![[TW09-s054-1.png|300]]

(`student` – `name: "Alice"` – Oggetto corrente → `[[Prototype]]` → `person` – `greet()` – Prototipo di student → `[[Prototype]]` → `Object.prototype` – `toString()`, `hasOwnProperty()`, … → `[[Prototype]]` → `null` – Fine della catena)

- Quando si accede a una proprietà, JS la cerca inizialmente nell'oggetto stesso
- Se non la trova, prosegue la ricerca nel suo prototipo e, se necessario, nei prototipi successivi
- Questa sequenza di collegamenti prende il nome di ***prototype chain***
- La ricerca termina quando la proprietà viene trovata oppure quando si raggiunge un prototipo `null`

>> Se la ricerca arriva a `null` senza trovare nulla, il risultato è `undefined` (nessun errore). Si può verificare che la catena finisce davvero lì: `Object.getPrototypeOf(Object.prototype)` restituisce `null`.

---
## Slide 55 – Prototype chain: esempio

```js
student.name;         // trovato in student
student.greet();      // trovato in person
student.toString();   // trovato in Object.prototype
student.unknown;      // undefined

console.log(Object.getPrototypeOf(student) === person);   // true
```

- **Attenzione**! La proprietà interna `[[Prototype]]` non deve essere confusa con la proprietà `.prototype` delle funzioni costruttrici, che incontreremo indirettamente parlando delle ***classi***

>> Verificato con node: `student.toString()` restituisce `"[object Object]"`, `student.unknown` è `undefined`, il confronto stampa `true`.
>> Differenza chiave: `[[Prototype]]` è il collegamento *di ogni oggetto* verso il suo prototipo (si legge con `Object.getPrototypeOf(obj)`, o col vecchio `obj.__proto__`); `.prototype` è una normale proprietà *delle funzioni costruttrici/classi*, che indica l'oggetto da usare come `[[Prototype]]` delle istanze create con `new`. Quindi `Object.getPrototypeOf(new F()) === F.prototype`.

---
## Slide 56 – Classi

- A partire da ECMAScript 2015, JavaScript mette a disposizione la sintassi `class`, che permette di definire costruttori, metodi ed ereditarietà attraverso una notazione simile a quella dei linguaggi OO tradizionali
- **Le classi JavaScript non sostituiscono il modello prototype-based**: rappresentano una sintassi più strutturata costruita sopra il meccanismo dei prototipi
- Di fatto, le classi JavaScript sono **QUASI** zucchero sintattico: rendono più familiare la programmazione orientata agli oggetti, ma sotto il cofano continua a funzionare la **prototype chain**

>> Prova che una classe è "sotto" una funzione: `typeof Student` restituisce `"function"` (verificato con node).

---
## Slide 57 – Classi: esempio

![[TW09-s057-1.png|650]]

```js
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
}
const alice = new Student("Alice", 23);
console.log(alice.name);     // "Alice"
console.log(alice.greet()); // "Hello, Alice!"
console.log(
    Object.getPrototypeOf(alice) ===
Student.prototype
);    // true
```

- *Definisce una classe* (`class Student`)
- *`constructor()` inizializza le nuove istanze*
- *`this` è il riferimento all'istanza durante questa invocazione*
- *`new Student(…)` crea una nuova istanza*
- *`greet()` è il metodo condiviso attraverso `Student.prototype`*
- *Il prototipo di `alice` è `Student.prototype`*

>> Cosa fa `new Student("Alice", 23)`, in sintesi: (1) crea un oggetto vuoto; (2) imposta il suo `[[Prototype]]` a `Student.prototype`; (3) esegue `constructor` con `this` = il nuovo oggetto; (4) restituisce l'oggetto. Ecco perché il confronto finale dà `true` (verificato con node).

---
## Slide 58 – Classi: un altro esempio

```js
class Student {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
}
const alice = new Student("Alice");
const bob = new Student("Bob");
```

*Quando eseguiamo `new Student("Alice")`, JavaScript crea un nuovo oggetto e inizializza la proprietà `name` attraverso il costruttore.*
*Ma il metodo `greet()` non viene inserito direttamente nell'oggetto `alice`: è definito in `Student.prototype`, che viene condiviso dalle istanze.*

---
## Slide 59 – Classi: un altro esempio

```js
console.log(Object.hasOwn(alice, "name"));  // true
console.log(Object.hasOwn(alice, "greet")); // false
console.log(Object.hasOwn(Student.prototype, "greet")); // true
```

*Queste istruzioni verificano rispettivamente che:*
- *`name` è una proprietà direttamente posseduta dall'istanza `alice`;*
- *`greet` non è una proprietà direttamente posseduta da `alice`;*
- *`greet` è una proprietà direttamente posseduta da `Student.prototype`*

*Eppure …*

```js
console.log(alice.greet());  // "Hello, Alice!"
```

*… funziona perfettamente: Perché?*
*Perché JS cerca `greet` nella* ***prototype chain***

>> `Object.hasOwn(obj, prop)` (ES2022) controlla solo le proprietà *proprie* dell'oggetto, senza risalire la catena; è l'alternativa moderna a `obj.hasOwnProperty(prop)`. Al contrario, l'operatore `in` risale la catena: `"greet" in alice` è `true`.

---
## Slide 60 – Classi: un altro esempio

![[TW09-s060-1.png|350]]

- **Istanza `alice`**: `name: "Alice"` – `Object.hasOwn(alice, "greet") → false`
- ↓ `[[Prototype]]`
- **`Student.prototype`**: `greet()` – `Object.hasOwn(Student.prototype, "greet") → true`
- ↓ `[[Prototype]]`
- **`Object.prototype`**: `toString()`, `hasOwnProperty()`, …

---
## Slide 61 – Classi: un altro esempio

```js
const alice = new Student("Alice");
const bob = new Student("Bob");
Object.hasOwn(alice, "name");                // true
Object.hasOwn(alice, "greet");               // false
Object.hasOwn(Student.prototype, "greet");   // true
alice.greet === bob.greet;                   // true
```

*I metodi dichiarati nel corpo di una classe vengono normalmente definiti nel prototipo della classe (`Student.prototype`), non nelle singole istanze*
*Le istanze possono accedervi attraverso la* ***prototype chain****, condividendo così la stessa funzione*

>> `alice.greet === bob.greet` è `true` perché entrambe le ricerche finiscono sullo *stesso* oggetto funzione in `Student.prototype` (verificato con node): una sola copia in memoria, qualunque sia il numero di istanze. Se invece nel costruttore si scrivesse `this.greet = () => ...`, ogni istanza avrebbe la propria copia e il confronto darebbe `false`.

---
## Slide 62 – Classi e prototipi

- JavaScript permette di creare oggetti sia direttamente, collegandoli ad altri oggetti attraverso i prototipi, sia attraverso la sintassi `class`
- In entrambi i casi, la condivisione dei metodi e la ricerca delle proprietà si basano sulla ***prototype chain***

```js
const person = {
    greet() {
        return "Hello!";
    }
};
const alice =
    Object.create(person);
```

*Il prototipo viene specificato direttamente*

```js
class Person {
    greet() {
        return "Hello!";
    }
}
const alice =
    new Person();
```

*Il prototipo viene gestito attraverso la classe e il costruttore*

- In entrambi questi esempi, `alice.greet()` restituisce `"Hello!"`, ma `greet` non è una proprietà direttamente posseduta dall'istanza

```js
console.log(alice.greet()); // "Hello!"
```

>> Nel primo caso il prototipo di `alice` è l'oggetto `person`; nel secondo è `Person.prototype`. La catena ha la stessa forma: istanza → oggetto con `greet` → `Object.prototype` → `null`.

---
## Slide 63 – Classi e prototipi

- Le classi JavaScript offrono una sintassi più familiare e strutturata, ma l'ereditarietà e la condivisione dei metodi continuano a basarsi sui prototipi
- Tecnicamente le classi moderne introducono anche semantiche specifiche, come campi privati, regole di inizializzazione e modalità di invocazione differenti
- Per questo motivo abbiamo detto che sono «**QUASI** zucchero sintattico»: non sono equivalenti in ogni dettaglio alle funzioni costruttrici degli oggetti

>> Esempi concreti di differenze rispetto alle funzioni costruttrici:
>> - una classe non può essere chiamata senza `new`: `Student("x")` dà `TypeError: Class constructor Student cannot be invoked without 'new'` (verificato con node), mentre una funzione costruttrice "classica" sì;
>> - il corpo di una classe è sempre in strict mode;
>> - i metodi di classe non sono enumerabili (non compaiono in un `for...in`);
>> - i campi privati `#campo` non hanno un equivalente diretto con le funzioni costruttrici;
>> - le dichiarazioni `class` sono soggette a TDZ come `let`/`const` (non si possono usare prima della dichiarazione).

---
## Slide 64 – Seconda domanda

*BONUS*

- **DOMANDA 2**: Consideriamo il codice

```js
class Student {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return `Hello, ${this.name}!`;
    }
}
const alice = new Student("Alice");
```

- [ ] Il metodo `greet()` viene copiato all'interno di ogni nuova istanza della classe `Student`
- [ ] Il metodo `greet()` è definito in `Student.prototype` ed è accessibile alle istanze attraverso la prototype chain
- [ ] Il metodo `greet()` appartiene direttamente a `Object.prototype`
- [ ] Il metodo `greet()` può essere invocato soltanto attraverso `Student.prototype`, non attraverso le istanze

>> **Risposta corretta: la seconda** (`greet()` è definito in `Student.prototype` ed è accessibile alle istanze tramite la prototype chain). Verificato con node:
>> ```js
>> Object.hasOwn(alice, "greet");             // false -> non è copiato nell'istanza (esclude la 1ª)
>> Object.hasOwn(Student.prototype, "greet"); // true
>> Object.hasOwn(Object.prototype, "greet");  // false -> esclude la 3ª
>> alice.greet();                             // "Hello, Alice!" -> esclude la 4ª
>> ```

---
## Slide 65 – Domande?

![[TW09-s065-1.png|300]]

![[TW09-s065-2.png|250]]

![[TW09-s065-3.png|300]]

>> Il primo meme ("NULL+TRUE EQUALS 1? THIS IS MADNESS!" / "THIS IS JAVASCRIPT!") richiama la type coercion: `null + true` vale davvero `1`, perché entrambi sono convertiti a numero (`null` → `0`, `true` → `1`).

---
## Riassunto

>> **Cos'è JavaScript**
>> - Linguaggio **dinamicamente tipizzato** (il tipo è dei valori, non delle variabili), **weakly typed** (coercizione implicita), **prototype-based**, multi-paradigma; standard **ECMAScript** (ECMA-262, anche ISO/IEC 16262), dal 2015 un'edizione all'anno.
>> - Storia: Mocha → LiveScript → JavaScript (1995, Netscape); ES3 1999, ES5 2009, **ES6/ES2015** (`let`/`const`, arrow function, `class`, moduli, Promise).
>> - **Single-threaded**: una sola call stack; le operazioni lunghe vanno alle Web API, il callback finisce nella coda e l'**event loop** lo esegue a stack vuoto. `log("Inizio"); setTimeout(...); log("Fine")` stampa `Inizio`, `Fine`, `Timer`.
>> - Con Java c'è solo una somiglianza sintattica: in JS non c'è overloading, gli oggetti si modificano a runtime e l'esecuzione è interpretata/JIT.
>>
>> **Tipi e coercizione**
>> - 7 primitivi: `number` (double IEEE 754), `string`, `boolean`, `undefined`, `null`, `bigint`, `symbol`; tutto il resto è oggetto (gestito per riferimento).
>> - `"5" + 1` → `"51"`, `"5" - 1` → `4`, `true + 1` → `2`, `5 == "5"` → `true`, `5 === "5"` → `false`: usare sempre `===`/`!==`.
>> - `[] == false` → `true` (`false` → `0`, `[]` → `""` → `0`).
>> - Gli oggetti si confrontano per **identità**: `{v:10} === {v:10}` → `false`.
>> - `typeof null` e `typeof []` → `"object"`; per gli array si usa `Array.isArray()`.
>>
>> **Variabili e scope**
>> - `let` e `const` hanno **block scope**; `const` blocca il *riferimento*, non il contenuto (`push` o la modifica di proprietà sono ammessi, la riassegnazione dà `TypeError`).
>> - `var` ha function scope e si può ridichiarare: nel corso è **vietato**.
>> - **Shadowing**: un `let` interno con lo stesso nome nasconde quello esterno senza modificarlo; lo scope è lessicale.
>> - **Hoisting**: prima della dichiarazione `var` vale `undefined`; `let`/`const` sono in **TDZ**, quindi l'accesso dà `ReferenceError: Cannot access ... before initialization`.
>>
>> **Funzioni**
>> - Sono valori di prima classe. Le function declaration sono hoisted; expression e arrow assegnate a `const` no.
>> - Arrow `(a, b) => a + b`: return implicito, e non ha un proprio `this`.
>> - **Callback**: si passa `greet`, non `greet()`. Una callback non è per forza asincrona.
>> - **Higher-order** e **closure**: `multiplyBy(2)(5)` → `10`. `map` restituisce un nuovo array: `[1,2,3,4].map(x => x*2)` → `[2,4,6,8]`.
>>
>> **this, prototipi e classi**
>> - `this` dipende da *come* si invoca la funzione (`user.greet()` → `this = user`).
>> - **Prototype chain**: la ricerca parte dall'oggetto, poi passa a `[[Prototype]]` e a `Object.prototype`, fino a `null`; se la proprietà non c'è, il risultato è `undefined`. `Object.create(proto)` imposta il prototipo direttamente.
>> - `class` è **quasi** zucchero sintattico (`typeof Student` → `"function"`): i metodi stanno in `Student.prototype` e sono condivisi tra le istanze. Per esempio `Object.hasOwn(alice, "greet")` → `false` e `alice.greet === bob.greet` → `true`.
>> - Differenze rispetto ai costruttori: chiamare la classe senza `new` dà `TypeError`, il corpo è in strict mode e ci sono i campi privati `#x`.
