[10_js_async_ajax](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/10_js_async_ajax.pdf>)

# JavaScript – Asincronia, Promise e Fetch API

>> Continua [[10 - JavaScript DOM ed eventi]]: lì l'event loop e le Web API erano solo accennati, qui si vede come funzionano (task, microtask, Promise, async/await) e come si usano per chiedere dati al server con `fetch`.

## Indice

1. **Ordine di esecuzione e asincronia** (slide 1–13)
	- [[#Slide 1 – JavaScript|Apertura della lezione e argomenti]]
	- [[#Slide 3 – In quale ordine viene eseguito il codice?|In quale ordine viene eseguito il codice?]]
	- [[#Slide 4 – Registrare una callback non significa eseguirla|Registrare una callback non significa eseguirla]]
	- [[#Slide 5 -> 6 – Perché il Web ha bisogno di asincronia?|Perché serve l'asincronia]]
	- [[#Slide 7 – JavaScript sul main thread|Il main thread]]
	- [[#Slide 9 – Timer: il browser gestisce l’attesa|Timer: l'attesa la gestisce il browser]]
	- [[#Slide 11 – Task ed event loop|Task ed event loop]]
	- [[#Slide 13 – Perché l’output è A, C, B?|Perché l'output è A, C, B]]
2. **Asincrono non vuol dire non bloccante; callback** (slide 14–24)
	- [[#Slide 14 – Asincrono non significa Non Bloccante|Asincrono non significa non bloccante]]
	- [[#Slide 17 – Callback sincrone e asincrone|Callback sincrone e asincrone]]
	- [[#Slide 19 – Ricevere un risultato attraverso una callback|Ricevere un risultato con una callback]]
	- [[#Slide 22 – Operazioni dipendenti: callback annidate|Callback annidate]]
3. **Promise** (slide 25–31)
	- [[#Slide 25 – Promise: rappresentare un esito futuro|Che cos'è una Promise: pending, fulfilled, rejected]]
	- [[#Slide 27 – Utilizzare una Promise: then e catch|then e catch]]
	- [[#Slide 28 – Creazione della Promise ed esecuzione degli handler|Quando vengono eseguiti gli handler]]
	- [[#Slide 29 – Concatenazione e valori restituiti|Concatenazione]]
	- [[#Slide 30 – Operazioni dipendenti: una catena di Promise|Catena di Promise al posto delle callback annidate]]
	- [[#Slide 31 – Errori e operazioni conclusive|Errori e finally]]
4. **Event loop: task e microtask** (slide 32–34)
	- [[#Slide 32 – Event loop: task e microtask|Task e microtask]]
	- [[#Slide 33 – Esempio: un timer e una Promise già fulfilled|Esempio: timer contro Promise]]
	- [[#Slide 34 – Checkpoint delle microtask e interfaccia|Checkpoint delle microtask e rendering]]
5. **async e await** (slide 35–38)
	- [[#Slide 35 – async: il risultato è una Promise|async restituisce una Promise]]
	- [[#Slide 36 – await: sospensione e ripresa della funzione|await: sospensione e ripresa]]
	- [[#Slide 37 – Esempio: esecuzione durante await|Esempio di esecuzione]]
	- [[#Slide 38 – Gestire gli errori con try, catch e finally|try, catch e finally]]
6. **AJAX e Fetch API** (slide 39–44)
	- [[#Slide 39 – AJAX e Fetch API|AJAX e fetch]]
	- [[#Slide 40 – Fetch: risposta HTTP e lettura del body|Risposta HTTP e lettura del body]]
	- [[#Slide 41 – Errori HTTP: il controllo di response.ok|Il controllo di response.ok]]
	- [[#Slide 42 – Quali errori dobbiamo distinguere?|Errori di rete, HTTP e di formato]]
	- [[#Slide 43 – Inviare JSON con una richiesta POST|POST con un body JSON]]
	- [[#Slide 44 – Origine delle risorse e Developer Tools|Origine delle risorse e Developer Tools]]
7. **Demo: catalogo dei corsi** (slide 45–49)
	- [[#Slide 45 – Demo: caricare un catalogo di corsi|Caricare il catalogo]]
	- [[#Slide 46 – Demo: dai dati agli elementi del DOM|Dai dati al DOM]]
	- [[#Slide 47 – Demo: evento e caricamento asincrono (1/2)|Evento e caricamento]]
	- [[#Slide 48 – Demo: errore e ripristino dell'interfaccia (2/2)|Errori e ripristino dell'interfaccia]]
	- [[#Slide 49 – Interazione, HTTP e DOM|Riepilogo: interazione, HTTP e DOM]]

---
## Slide 1 – JavaScript

![[TW11-s001-1.png|200]]

---
## Slide 2 – Argomenti

- JavaScript:
	- Asincronia
	- AJAX
	- Fetch

![[TW11-s002-1.png|250]]

**2 punti bonus**

---
## Slide 3 – In quale ordine viene eseguito il codice?

```js
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");
```

- In quale ordine vengono stampate le tre lettere?
- Che cosa significa il valore `0` passato a `setTimeout()`?

```
A
C
B
```

***Il valore*** `0` ***non provoca l’esecuzione immediata della callback: dobbiamo distinguere la chiamata a*** `setTimeout()` ***dall’esecuzione della funzione che gli passiamo***

>> Il secondo argomento di `setTimeout()` è il ritardo **minimo** in millisecondi prima che la callback possa essere messa in coda, non il momento esatto in cui verrà eseguita. Con `0` la callback viene solo programmata: verrà eseguita dopo che il codice in corso (qui l’intero script, quindi anche `console.log("C")`) è terminato.

---
## Slide 4 – Registrare una callback non significa eseguirla

- La chiamata a `setTimeout()` richiede al browser di programmare l’esecuzione di una callback dopo un intervallo di tempo
- JavaScript prosegue con le istruzioni successive, senza aspettare quell’intervallo
- Anche con un ritardo di `0` millisecondi, la callback non interrompe il codice attualmente in esecuzione: viene eseguita successivamente

| Passaggio | Che cosa accade |
|---|---|
| `console.log("A")` | Viene stampata A |
| `setTimeout(...)` | Il browser programma la callback |
| `console.log("C")` | Viene stampata C |
| Successiva esecuzione della callback | Viene stampata B |

***Abbiamo già passato funzioni come callback ai listener degli eventi: registrazione e esecuzione della callback sono momenti distinti***

***Il ritardo di un timer non è una pausa nell’esecuzione del programma***

>> Errore tipico: pensare che `setTimeout(f, 1000)` "metta in pausa" il programma per un secondo, come uno `sleep`. In JavaScript non esiste una pausa bloccante di questo tipo: il codice successivo viene eseguito subito, e solo `f` viene rinviata.

---
## Slide 5 -> 6 – Perché il Web ha bisogno di asincronia?

- Un’applicazione Web deve gestire operazioni il cui completamento richiede tempo:
	- Attendere una risposta HTTP
	- Attendere la scadenza di un timer
	- Leggere dati attraverso API asincrone
- Durante queste attese, l’interfaccia deve poter continuare a rispondere alle interazioni dell’utente
- Le API asincrone permettono di avviare un’operazione e gestirne il completamento in seguito, senza mantenere il codice JavaScript bloccato nell’attesa

- Finora abbiamo letto i dati e aggiornato immediatamente il DOM (come nel caso della validazione della form nella precedente lezione)
- Se dovessimo inviarli a un server, dovremmo gestire anche:

![[TW11-s006-1.png|600]]

- Avvio della richiesta → Attesa della risposta → Aggiornamento dell’interfaccia

- Durante l’attesa potremmo mostrare “*Invio in corso…*” e consentire altre interazioni
- L’asincronia permette di gestire le attese: non rende automaticamente più veloce il codice JavaScript

>> Il vantaggio dell’asincronia è che il tempo di attesa (rete, timer, disco) non tiene occupato il main thread; il tempo di calcolo del codice JavaScript, invece, resta lo stesso.

---
## Slide 7 – JavaScript sul main thread

- Nel modello che consideriamo, il codice JavaScript della pagina viene eseguito sul main thread del browser
- Su questo thread, una sola sequenza di istruzioni JavaScript viene eseguita alla volta. Le chiamate di funzione sono gestite attraverso il call stack
- Il main thread partecipa anche alla gestione delle interazioni e agli aggiornamenti visivi della pagina: un’esecuzione JavaScript troppo lunga può quindi ritardare entrambi

>> Il call stack è la pila delle chiamate in corso: ogni chiamata di funzione aggiunge un frame in cima, ogni `return` lo rimuove. Finché lo stack non è vuoto, il codice corrente non è terminato e nessun altro task può partire.

---
## Slide 8 – Esempio

```js
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");
```

***La callback del timer non interrompe la sequenza di istruzioni che stampa A e C***

***Il browser svolge anche altre attività attraverso componenti e thread differenti. “Una sola esecuzione JavaScript alla volta” si riferisce qui al main thread, non all’intero browser***

![[TW11-s008-1.png|600]]

- Main thread
	- Call stack: `updatePage()` (in cima), `handleClick()`, contesto chiamante – In esecuzione: `updatePage()`
	- Gestione delle interazioni
	- Aggiornamenti visivi
- JavaScript e attività dell’interfaccia condividono il main thread.
- Uno script lungo può ritardare interazioni e aggiornamenti visivi.

---
## Slide 9 – Timer: il browser gestisce l’attesa

- `setTimeout()` è un’API fornita dall’ambiente browser
- Quando la chiamiamo:
	1. Il browser imposta il timer.
	2. La chiamata termina e JavaScript prosegue con le istruzioni successive
	3. Trascorso il ritardo previsto, il browser accoda un task che eseguirà la callback
- La scadenza del timer rende possibile una successiva esecuzione della callback: non garantisce che venga eseguita esattamente in quell’istante

>> `setTimeout()` non fa parte del linguaggio JavaScript (ECMAScript) ma dell’ambiente che lo ospita: nel browser è un’API Web, in Node.js è fornita dal runtime. Il conteggio del tempo avviene fuori dal codice JavaScript.
>> Il ritardo effettivo può essere maggiore di quello richiesto: per esempio se il main thread è occupato, se i timer sono annidati molte volte (il browser impone un minimo di circa 4 ms) o se la scheda è in background (i timer vengono rallentati).

---
## Slide 10 – Esempio

```js
setTimeout(() => {
    console.log("Timer eseguito");
}, 1000);
console.log("Il programma prosegue");
```

***Il programma stampa subito:***

```
Il programma prosegue
```

***La callback potrà essere eseguita successivamente, dopo l’attesa prevista e quando la pianificazione lo consentirà***

![[TW11-s010-1.png|600]]

- Main thread: chiama `setTimeout()` e prosegue → (Avvio) → Timer del browser: gestisce l’attesa → (Alla scadenza) → Task in attesa: il task che eseguirà la callback viene accodato
- Main thread → Esegue il codice successivo
- Successivamente: esecuzione della callback sul main thread
- Il browser gestisce l’attesa; JavaScript può proseguire.

>> L’output completo è `Il programma prosegue` e, dopo circa un secondo, `Timer eseguito`.

---
## Slide 11 – Task ed event loop

- Un task è un’unità di lavoro che il browser può pianificare, ad esempio per eseguire la callback di un timer o gestire un’interazione dell’utente
- L’***event loop*** coordina l’esecuzione di queste attività
- Nel modello semplificato che consideriamo:
	- Viene selezionato un task pronto per l’esecuzione
	- Il codice JavaScript associato viene eseguito attraverso il call stack
	- Il task successivo non interrompe quello attualmente in esecuzione
- Questo comportamento viene indicato come ***run-to-completion***
- Il browser dispone di più code di task e di regole di pianificazione
	- Negli schemi useremo una sola “task queue” per rappresentare i task in attesa, senza assumere un unico ordine globale tra tutte le sorgenti, come semplificazione!
- L’event loop coordina anche le opportunità di aggiornamento visivo della pagina

>> Run-to-completion: una volta iniziato, il codice di un task viene eseguito fino a quando il call stack non si svuota; solo allora l’event loop può scegliere il task successivo o aggiornare la pagina.
>> Oltre alle code dei task esiste la coda delle **microtask** (usata, per esempio, dalle callback delle Promise): viene svuotata completamente al termine di ogni task, prima di passare al task successivo. Per questo una callback di Promise già risolta viene eseguita prima di una callback di `setTimeout(..., 0)`.

---
## Slide 12 – Dall’esempio precedente

![[TW11-s012-1.png|650]]

- Main thread: chiama `setTimeout()` e prosegue → Esegue il codice successivo
	- Call stack: Funzione attiva (codice in esecuzione)
- Main thread → (Avvio) → Timer del browser: gestisce l’attesa → (Alla scadenza) → Task queue: task pronti, in attesa (Task 1, Task 2, Task 3)
- Task queue → Event loop: seleziona un task pronto quando il task in esecuzione è terminato → Call stack del main thread
- La callback sarà eseguita sul main thread
- Un task pronto non può interrompere il codice JavaScript in esecuzione.

---
## Slide 13 – Perché l’output è A, C, B?

```js
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");
```

***Il ritardo*** `0` ***non significa “esegui subito”. Il timer non permette alla callback di interrompere il codice corrente; L’esecuzione effettiva può avvenire più tardi***

| Step | Che cosa accade |
|---|---|
| 1 | Viene eseguito il primo `console.log()`: stampa `A` |
| 2 | `setTimeout()` imposta il timer e termina |
| 3 | L’esecuzione prosegue: viene stampata `C` |
| 4 | Terminata l’esecuzione corrente, il task del timer potrà essere selezionato quando pronto |
| 5 | La callback viene eseguita e stampa `B` |

![[TW11-s013-1.png|550]]

| | 1. Codice corrente | 2. Codice corrente | 3. Task del timer |
|---|---|---|---|
| Azioni | Stampa A, Imposta il timer | Stampa C (Task del timer in attesa) | Esegue la callback, Stampa B |
| Output | A | A, C | A, C, B |

- Un ritardo di 0 ms programma lavoro successivo.

---
## Slide 14 – Asincrono non significa Non Bloccante

- La callback di un timer viene eseguita successivamente, ma il suo codice occupa comunque il main thread
- Se una funzione esegue un calcolo lungo, ritarda la gestione delle altre interazioni e gli aggiornamenti visivi. Inserirla in `setTimeout()` ne rinvia l’esecuzione, senza ridurne il costo

>> Per non bloccare davvero l’interfaccia con un calcolo pesante, bisogna spezzarlo in parti brevi eseguite in task diversi, oppure spostarlo su un altro thread con un **Web Worker** (che però non può accedere al DOM).

---
## Slide 15 – Esempio

```html
<button id="busy" type="button">Avvia calcolo lungo</button>
<button id="test" type="button">Prova a interagire</button>
<p id="message" role="status">In attesa</p>
```

```js
const busyButton = document.querySelector("#busy");
const testButton = document.querySelector("#test");
const message = document.querySelector("#message");
busyButton.addEventListener("click", () => {
    const start = performance.now();
    // Attesa attiva, usata soltanto per la dimostrazione.
    while (performance.now() - start < 1500) {
    }
    message.textContent = "Calcolo terminato";
});
testButton.addEventListener("click", () => {
    message.textContent = "Interazione gestita";
});
```

>> `performance.now()` restituisce il tempo in millisecondi (con decimali) dall’apertura della pagina; il ciclo `while` resta quindi occupato per circa 1,5 secondi.
>> Se si attiva "Avvia calcolo lungo" e subito dopo "Prova a interagire", per circa 1,5 s la pagina non risponde: il secondo click resta in attesa come task e viene gestito solo quando il primo listener termina. Il paragrafo può quindi passare direttamente a "Interazione gestita", senza che "Calcolo terminato" venga mai mostrato a schermo.

---
## Slide 16 – Asincrono non significa Non Bloccante

![[TW11-s016-1.png|600]]

- Arriva un’interazione mentre JavaScript è in esecuzione → L’interazione resta in attesa → Handler dell’interazione (solo al termine)
- Tempo
- Anche le callback devono terminare in tempi brevi.

***Ora sappiamo quando può essere eseguita una callback asincrona***

***Come organizziamo il codice quando un’operazione deve usare il risultato di quella precedente?***

---
## Slide 17 – Callback sincrone e asincrone

- Una ***callback*** è una funzione passata come argomento a un’altra funzione, affinché venga invocata da quest’ultima
- Il fatto che una funzione sia usata come callback non implica che venga eseguita in modo asincrono: il momento dell’esecuzione dipende dall’API che la riceve

![[TW11-s017-1.png|600]]

- Sincrona: Chiamata → Esecuzione della callback → Ritorno dalla funzione
- Asincrona: Chiamata → Ritorno dalla funzione → Successiva esecuzione della callback

---
## Slide 18 – Esempi

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6]
```

**Callback SINCRONA**

`map()` ***esegue le callback durante la propria esecuzione***

***Quando restituisce il nuovo array, la trasformazione è già completata***

```js
setTimeout(() => {
    console.log("Dati disponibili");
}, 500);
console.log("Il programma prosegue");
```

**Callback ASINCRONA**

***La callback del timer viene eseguita successivamente, dopo la conclusione del codice corrente***

>> Altre callback sincrone: quelle di `forEach()`, `filter()`, `sort()`. Sono asincrone invece quelle dei timer e dei listener degli eventi (`addEventListener()`).
>> Output del secondo esempio: `Il programma prosegue`, poi dopo circa 500 ms `Dati disponibili`.

---
## Slide 19 – Ricevere un risultato attraverso una callback

- Quando un’operazione termina in seguito, il risultato non può essere restituito direttamente dalla chiamata che l’ha avviata
- Un’API basata su callback può ricevere una funzione da invocare quando il risultato è disponibile, passandoglielo come argomento

---
## Slide 20 – Esempio

***Simuliamo il caricamento di un corso***

```js
function loadCourse(callback) {
    setTimeout(() => {
        const course = {
            id: 1,
            title: "Tecnologie Web"
        };
        callback(course);
    }, 500);
}
```

***Utilizzo***

```js
loadCourse(course => {
    console.log("Corso:", course.title);
});
console.log("Caricamento avviato");
```

***Output***

```
Caricamento avviato
Corso: Tecnologie Web
```

***La funzione*** `loadCourse()` ***termina dopo aver impostato il timer***

***Successivamente, la callback del timer crea il dato e invoca la callback ricevuta attraverso*** `callback(course)`

>> Ci sono due callback: quella passata a `setTimeout()` (definita dentro `loadCourse`) e quella passata dall’utente a `loadCourse()` (il parametro `callback`). La prima, quando il timer scade, chiama la seconda passandole il corso.

---
## Slide 21 – Esempio

```js
const result = loadCourse(course => {
    console.log(course.title);
});
console.log(result); // undefined
```

***In questo esempio*** `result` ***vale*** `undefined`***:*** `loadCourse()` ***non restituisce un valore***

***Il corso viene consegnato alla callback, non alla variabile*** `result`

***anche un*** `return course` ***scritto dentro la callback del timer restituirebbe dalla callback stessa, non dalla chiamata a*** `loadCourse()` ***ormai terminata***

![[TW11-s021-1.png|600]]

- `loadCourse(callback)` (la chiamata termina; il programma prosegue) → Operazione in attesa → `callback(course)` → Utilizzo del corso
- Il codice che usa il risultato viene eseguito quando l’operazione lo rende disponibile.

>> Output: `undefined` subito, poi `Tecnologie Web` dopo circa 500 ms. Il valore restituito dalla callback del timer viene ignorato da `setTimeout()`.

---
## Slide 22 – Operazioni dipendenti: callback annidate

- Alcune operazioni possono iniziare soltanto dopo che una precedente ha prodotto il risultato necessario
- Per esempio:
	- Caricamento del corso → caricamento dei suoi argomenti → visualizzazione
- Con un’API basata su callback, possiamo esprimere questa dipendenza avviando la seconda operazione nella callback della prima

---
## Slide 23 – Esempio

```js
function loadTopics(courseId, callback) {
    const topicsByCourse = {
        1: ["DOM", "Eventi", "Asincronia"]
    };
    setTimeout(() => {
        callback(topicsByCourse[courseId]);
    }, 500);
}
```

***Eseguiamo le due operazioni in sequenza***

```js
loadCourse(course => {
    loadTopics(course.id, topics => {
        console.log(course.title);
        console.log(topics);
    });
});
```

- `loadTopics()` viene chiamata quando il corso è disponibile: solo allora possiamo usare il suo `id`
- All’aumentare delle operazioni dipendenti, l’annidamento può rendere più difficile seguire il flusso e organizzare la gestione degli errori. Questo problema viene spesso chiamato ***callback hell***
- Le ***Promise*** permetteranno di rappresentare l’esito delle operazioni e comporle attraverso catene, rendendo più espliciti i passaggi e la propagazione degli errori

>> Output, dopo circa 1 s (500 ms + 500 ms, perché le due operazioni sono in sequenza):
>> ```
>> Tecnologie Web
>> [ 'DOM', 'Eventi', 'Asincronia' ]
>> ```
>> La callback interna può usare sia `topics` sia `course`, perché `course` è visibile grazie alla closure della callback esterna.
>> Con le callback, gli errori vanno gestiti a mano a ogni livello (di solito con la convenzione `callback(err, result)`): un `try/catch` attorno a `loadCourse(...)` non cattura un errore lanciato dentro la callback, che viene eseguita più tardi in un altro task.

---
## Slide 24 – Operazioni dipendenti: callback annidate

![[TW11-s024-1.png|600]]

- Carica corso → (`course.id`) → Carica argomenti → Mostra risultato

***Le callback esprimono le dipendenze, ma molte operazioni concatenate richiedono una struttura più facile da comporre***

***Possiamo ottenere un oggetto che rappresenti il futuro esito dell’operazione, invece di passarle subito la funzione che userà il risultato?***
---
## Slide 25 – Promise: rappresentare un esito futuro

Una Promise rappresenta il futuro completamento di un'operazione, oppure il suo fallimento.

La funzione restituisce subito un oggetto Promise. Il risultato dell'operazione diventa disponibile successivamente.

![[TW11-s025-1.png|550]]

- pending: operazione in attesa
	- fulfilled: valore disponibile
	- rejected: motivo del fallimento

**Stati finali: una Promise può stabilizzarsi una sola volta.**

>> "Stabilizzarsi" traduce *settled*: una Promise è *settled* quando è fulfilled oppure rejected. Da quel momento lo stato e il valore non cambiano più: ulteriori chiamate a `resolve()` o `reject()` vengono ignorate.

---
## Slide 26 – Esempio: una funzione che restituisce una Promise

```js
function loadCoursePromise(fail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                 reject(new Error("Corso non disponibile"));
                 return;
            }
            resolve({ id: 1, title: "Tecnologie Web" });
        }, 500);
    });
}
```

`resolve(valore)`: in questo esempio completa con successo.
`reject(errore)`: segnala il fallimento.

**Il timer simula l'attesa. La Promise rappresenta l'esito.**

>> La funzione passata a `new Promise(...)` si chiama *executor* e riceve le due funzioni `resolve` e `reject`.
>> Il `return` dopo `reject` evita di eseguire anche `resolve`: la chiamata verrebbe comunque ignorata (la Promise è già rejected), ma il `return` rende esplicito che il codice si ferma lì.
>> Con `reject` conviene passare un oggetto `Error`, così chi gestisce l'errore trova `message` e lo stack.

---
## Slide 27 – Utilizzare una Promise: then e catch

```js
loadCoursePromise()
    .then(course => {
        console.log("Corso:", course.title);
    })
    .catch(error => {
        console.error(error.message);
    });

console.log("Caricamento avviato");
```

`.then()` registra il codice da eseguire quando il risultato è disponibile.
`.catch()` gestisce un rigetto propagato lungo la catena.

```
Caricamento avviato
Corso: Tecnologie Web
```

>> "Caricamento avviato" compare per primo perché è codice sincrono; "Corso: Tecnologie Web" arriva dopo circa 500 ms, quando il timer chiama `resolve`. Output verificato con node.
>> `.catch(f)` equivale a `.then(undefined, f)`.

---
## Slide 28 – Creazione della Promise ed esecuzione degli handler

```js
console.log("A");

const promise = new Promise(resolve => {
    console.log("B");
    resolve("C");
});

promise.then(value => console.log(value));
console.log("D");
```

Output
```
A
B
D
C
```

L'executor del costruttore viene eseguito subito. L'handler passato a `.then()` viene eseguito in seguito.

**Creare una Promise non rende asincrono tutto il suo contenuto.**

>> "B" esce subito dopo "A" perché l'executor è sincrono. La Promise è già fulfilled quando si chiama `.then()`, ma l'handler non parte subito: viene messo in coda come microtask e gira solo dopo che il codice sincrono (cioè "D") è terminato. Output verificato con node.

---
## Slide 29 – Concatenazione e valori restituiti

```js
Promise.resolve(10)
    .then(value => {
        return value * 2;
    })
    .then(result => {
        console.log(result); // 20
    });
```

![[TW11-s029-1.png|600]]

- Promise, valore 10 → `return value * 2` → Nuova Promise, valore 20

Ogni `.then()` restituisce una nuova Promise.
Il `return` dell'handler determina il risultato del passaggio successivo.

>> Cosa diventa la nuova Promise in base all'handler:
>> - restituisce un valore normale → fulfilled con quel valore;
>> - non ha `return` → fulfilled con `undefined`;
>> - restituisce una Promise → "segue" quella Promise e ne prende l'esito (vedi slide successiva);
>> - lancia un'eccezione (`throw`) → rejected con quell'errore.
>> `Promise.resolve(10)` crea una Promise già fulfilled con valore 10.

---
## Slide 30 – Operazioni dipendenti: una catena di Promise

```js
function loadTopicsPromise(courseId) {
    const topicsByCourse = {
        1: ["DOM", "Eventi", "Asincronia"]
    };
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(topicsByCourse[courseId] ?? []);
        }, 500);
    });
}
```

```js
loadCoursePromise()
    .then(course => {
        return loadTopicsPromise(course.id);
    })
    .then(topics => console.log(topics))
    .catch(error => console.error(error.message));
```

**Restituire la Promise collega la seconda operazione alla catena.**

>> Dopo circa 1 secondo (500 ms + 500 ms) stampa `[ 'DOM', 'Eventi', 'Asincronia' ]` (verificato con node).
>> Errore tipico: dimenticare il `return`. Senza, il secondo `.then()` parte subito con `undefined` e l'eventuale errore di `loadTopicsPromise` non arriva al `.catch()`.
>> `??` (nullish coalescing) restituisce `[]` se `topicsByCourse[courseId]` è `undefined` o `null`, cioè se il corso non ha argomenti.
>> Un solo `.catch()` in fondo gestisce gli errori di tutti i passaggi della catena.

---
## Slide 31 – Errori e operazioni conclusive

```js
loadCoursePromise(true)
    .then(course => {
        console.log(course.title); // Non eseguito
    })
    .catch(error => {
        console.error(error.message);
    })
    .finally(() => {
        console.log("Operazione conclusa");
    });
```

Un rigetto o un `throw` saltano i successivi handler di successo, fino a un gestore dell'errore.

`.finally()` esegue attività conclusive in entrambi gli esiti, ad esempio rimuovere un indicatore di caricamento.

>> Output (verificato con node): prima `Corso non disponibile` (su `console.error`), poi `Operazione conclusa`.
>> L'handler di `.finally()` non riceve argomenti e di norma non cambia il risultato della catena: lascia passare il valore o l'errore precedente. Se però lancia un'eccezione, la catena diventa rejected con quell'errore.
>> Dopo un `.catch()` che non rilancia l'errore, la catena torna fulfilled: un `.then()` successivo verrebbe eseguito.

---
## Slide 32 – Event loop: task e microtask

Le callback asincrone possono seguire regole di pianificazione diverse.

| TASK | MICROTASK |
|---|---|
| Callback di un timer | Handler di Promise |
| Interazioni utente pianificate | Continuazioni dopo await |

Al checkpoint, il browser esegue le microtask fino a svuotare la coda, comprese quelle aggiunte durante il processo.

**Le microtask non interrompono il codice sincrono in esecuzione.**

Task è il termine dello standard. "Macrotask" è un sinonimo informale frequente.

>> Regola pratica: l'event loop prende **un** task, lo esegue fino in fondo, poi svuota **tutta** la coda delle microtask; solo dopo passa al task successivo (ed eventualmente al rendering).
>> Si può accodare una microtask anche esplicitamente con `queueMicrotask(f)`.

---
## Slide 33 – Esempio: un timer e una Promise già fulfilled

```js
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

![[TW11-s033-1.png|600]]

- Codice sincrono: A, D → Microtask: C → Task del timer: B

**Output: A, D, C, B**

La Promise è già fulfilled: il suo handler è pronto prima del task successivo.

>> Output verificato con node. Anche con ritardo `0` la callback di `setTimeout` è un task: deve aspettare che finisca il codice sincrono **e** che si svuoti la coda delle microtask, quindi "C" precede sempre "B".

---
## Slide 34 – Checkpoint delle microtask e interfaccia

![[TW11-s034-1.png|600]]

- Task corrente termina → Checkpoint microtask → Successivo task quando selezionato

La coda delle microtask viene svuotata al checkpoint prima di passare al task successivo.

Il browser aggiorna la rappresentazione visiva nelle opportunità di rendering previste, non dopo ogni istruzione JavaScript.

**Anche molte microtask consecutive possono ritardare interazioni e aggiornamenti visivi.**

>> Caso estremo: una microtask che accoda sempre un'altra microtask non lascia mai svuotare la coda, quindi la pagina si blocca come con un ciclo infinito (niente click, niente rendering). Con `setTimeout` invece il browser riesce a fare altro tra un task e l'altro.
>> Di solito il browser aggiorna lo schermo circa 60 volte al secondo (ogni ~16 ms), e solo tra un task e l'altro.

---
## Slide 35 – async: il risultato è una Promise

```js
async function getCourseTitle() {
    return "Tecnologie Web";
}

const result = getCourseTitle();

result.then(title => console.log(title));
```

Una funzione `async` restituisce sempre una Promise, anche quando usa `return` con un valore ordinario.

**`result` è una Promise, non la stringa "Tecnologie Web".**

>> Verificato con node: `console.log(result)` stampa `Promise { 'Tecnologie Web' }`, mentre `.then()` stampa `Tecnologie Web`.
>> Allo stesso modo, un `throw` dentro una funzione `async` non esce come eccezione sincrona: la Promise restituita diventa rejected.

---
## Slide 36 – await: sospensione e ripresa della funzione

```js
async function showTopics() {
    const course = await loadCoursePromise();
    const topics = await loadTopicsPromise(course.id);

    console.log(course.title);
    console.log(topics);
}

showTopics().catch(error => {
    console.error(error.message);
});
```

La seconda operazione usa il risultato della prima.
Durante l'attesa, la funzione sospende la propria prosecuzione e restituisce il controllo al chiamante.

**`await` non blocca il browser: il codice successivo riprende in seguito.**

>> È la stessa catena della slide 30 scritta con `await`. Stampa `Tecnologie Web` e poi `[ 'DOM', 'Eventi', 'Asincronia' ]` dopo circa 1 secondo (verificato con node).
>> `await` si può usare solo dentro una funzione `async` (o al livello più alto di un modulo ES).
>> Qui le due attese sono in sequenza perché la seconda dipende dalla prima. Per operazioni indipendenti si possono avviare insieme e attenderle con `Promise.all([...])`.

---
## Slide 37 – Esempio: esecuzione durante await

```js
async function demo() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

console.log("A");
demo();
console.log("D");
```

Output
```
A
B
D
C
```

![[TW11-s037-1.png|600]]

- Il chiamante stampa A → demo stampa B e si sospende → Il chiamante stampa D

**La continuazione di `demo()` stampa C come microtask.**

>> Output verificato con node. Il corpo di una funzione `async` viene eseguito in modo sincrono fino al primo `await`: per questo "B" esce subito dopo "A". Il codice dopo l'`await` riprende come microtask, dopo la fine del codice sincrono (cioè dopo "D").

---
## Slide 38 – Gestire gli errori con try, catch e finally

```js
async function showCourse(fail = false) {
    try {
        const course = await loadCoursePromise(fail);
        console.log(course.title);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Operazione conclusa");
    }
}

showCourse(true);
```

Se la Promise attesa viene rejected, `await` genera un'eccezione gestibile dal `catch`.

**La scrittura cambia, il modello asincrono resta quello delle Promise.**

>> Output (verificato con node): `Corso non disponibile`, poi `Operazione conclusa`, come nella versione con `.catch()`/`.finally()` della slide 31.
>> Il `try` cattura l'errore solo se la Promise viene attesa con `await` dentro il blocco: una Promise creata senza `await` e poi rejected non finisce nel `catch`.

---
## Slide 39 – AJAX e Fetch API

AJAX indica l'approccio che permette di scambiare dati con il server e aggiornare parti della pagina senza ricaricarla completamente.

`XMLHttpRequest` è l'API storicamente associata a questo approccio. Fetch API offre un'interfaccia basata su Promise per effettuare richieste HTTP.

![[TW11-s039-1.png|600]]

- JavaScript `fetch()` → HTTP server → Risposta aggiornamento DOM

**Fetch collega la programmazione asincrona alle risorse del Web.** (API moderna molto più compatta e comprensibile)

>> AJAX = *Asynchronous JavaScript and XML*. Il nome viene dall'XML, ma oggi i dati scambiati sono quasi sempre in JSON.
>> `XMLHttpRequest` usa eventi e callback; `fetch()` restituisce una Promise, quindi si usa con `.then()` oppure con `await`.

---
## Slide 40 – Fetch: risposta HTTP e lettura del body

```js
async function readCourses() {
    const response = await fetch("/courses.json");
    const courses = await response.json();
    console.log(courses);
}
```

![[TW11-s040-1.png|600]]

- `fetch(url)`: `Promise<Response>` → `response`: status e header → `response.json()`: Promise dei dati

Le due attese hanno scopi distinti: ottenere la risposta HTTP e leggere il contenuto del body.

**JSON è un formato testuale. `response.json()` produce un valore JavaScript.**

>> La Promise di `fetch()` si risolve appena arrivano status e header; il body può arrivare dopo, per questo serve il secondo `await`.
>> Il body si può leggere una sola volta: dopo `response.json()`, chiamare anche `response.text()` dà errore. Altri metodi di lettura: `text()`, `blob()`, `arrayBuffer()`, `formData()`.

---
## Slide 41 – Errori HTTP: il controllo di response.ok

```js
async function fetchCourses(url = "/courses.json") {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const courses = await response.json();
    return courses;
}
```

Una risposta 404 o 500 è comunque una risposta HTTP: `fetch()` non rigetta automaticamente per questi status.

**`response.ok` è true per gli status HTTP da 200 a 299.**

>> Verificato con node su un server locale: con un file mancante la funzione lancia `Error: HTTP 404`. Senza il controllo su `response.ok`, il codice proverebbe a leggere come JSON la pagina d'errore del server.
>> Il `throw` dentro la funzione `async` rende rejected la Promise restituita da `fetchCourses()`, quindi chi la chiama può gestire l'errore con `try/catch` o `.catch()`.

---
## Slide 42 – Quali errori dobbiamo distinguere?

- **Rete o accesso bloccato**: `fetch()` può restituire una Promise rejected.
- **Status HTTP 404 o 500**: Verifichiamo `response.ok` e generiamo un errore.
- **Body non interpretabile come JSON**: La Promise di `response.json()` viene rejected.
- **JSON con struttura inattesa**: I dati richiedono ulteriori controlli applicativi.

**Una risposta HTTP riuscita non garantisce dati adatti all'applicazione.**

>> Verificato con node: errore di rete → `TypeError` ("fetch failed" in node, "Failed to fetch" in Chrome); 404 → nessun rigetto, `response.ok` vale `false`; JSON malformato → `SyntaxError` da `response.json()`; JSON valido ma con forma diversa (es. un oggetto invece di un array) → nessun errore automatico, va controllato a mano (vedi `renderCourses` nella slide 46).
>> Anche un blocco CORS si presenta come un `TypeError` generico: il dettaglio si vede solo nella console del browser.

---
## Slide 43 – Inviare JSON con una richiesta POST

```js
async function createCourse(title) {
    const response = await fetch("/api/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
    });

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
}
```

`JSON.stringify()` serializza i dati da inviare.
`Content-Type` descrive il formato del body della richiesta.

**Serve un endpoint server: il solo JavaScript non salva i dati sul server.**

>> `{ title }` è la forma abbreviata di `{ title: title }`: con `title = "Reti"` il body inviato è la stringa `{"title":"Reti"}`.
>> Il secondo argomento di `fetch()` è l'oggetto delle opzioni; senza `method` la richiesta è una GET.
>> `return response.json()` restituisce una Promise: essendo la funzione `async`, chi chiama `await createCourse(...)` riceve direttamente i dati (di solito il corso creato, con l'`id` assegnato dal server).

---
## Slide 44 – Origine delle risorse e Developer Tools

Una URL relativa come `/courses.json` usa la stessa origine della pagina. Per leggere risposte da un'altra origine, il server deve consentirlo attraverso CORS.

Per la demo serviamo pagina e JSON via HTTP dalla stessa origine, evitando l'apertura diretta del file HTML con `file://`.

**Developer Tools: Network**

Osserviamo URL, metodo, status, header e body della risposta.
La console aiuta a distinguere errori HTTP, CORS e parsing.

>> Origine = schema + host + porta: `http://localhost:8000` e `http://localhost:3000` sono origini diverse.
>> CORS (*Cross-Origin Resource Sharing*): il server autorizza le altre origini con header come `Access-Control-Allow-Origin`. Il blocco lo applica il browser: la richiesta può arrivare al server, ma la pagina non può leggerne la risposta.
>> Una pagina aperta con `file://` ha origine `null` e i browser bloccano `fetch()` verso file locali. Per servire la cartella via HTTP basta, ad esempio, `python3 -m http.server` (o l'estensione Live Server di VS Code).

---
## Slide 45 – Demo: caricare un catalogo di corsi

```html
<button id="loadCourses" type="button">Carica corsi</button>
<p id="status" role="status">Catalogo non caricato</p>
<ul id="courses"></ul>
```

**HTML**

```json
[
    { "id": 1, "title": "Tecnologie Web" },
    { "id": 2, "title": "Basi di dati" }
]
```

**courses.json**

Il pulsante avvia una GET. La pagina mostra caricamento, risultato oppure errore.

>> `role="status"` rende il paragrafo una *live region*: quando il suo testo cambia, i lettori di schermo lo annunciano senza spostare il focus.

---
## Slide 46 – Demo: dai dati agli elementi del DOM

```js
const button = document.querySelector("#loadCourses");
const list = document.querySelector("#courses");
const statusMessage = document.querySelector("#status");

function renderCourses(courses) {
    const valid = Array.isArray(courses) && courses.every(
        c => c !== null && typeof c === "object" &&
             typeof c.title === "string"
    );
    if (!valid) throw new Error("Formato del catalogo inatteso");

    list.replaceChildren();
    courses.forEach(course => {
        const li = document.createElement("li");
        li.textContent = course.title;
        list.append(li);
    });
}
```

**Controlliamo la struttura dei dati e inseriamo i titoli come testo.**

>> Il controllo `c !== null` serve perché `typeof null === "object"`. Un array vuoto `[]` è valido (`every` su un array vuoto restituisce `true`).
>> La validazione avviene **prima** di `list.replaceChildren()`: se i dati non vanno bene, la lista precedente resta com'è.
>> `replaceChildren()` senza argomenti svuota l'elemento, così un secondo caricamento non duplica le voci.
>> `textContent` inserisce il titolo come testo semplice: un titolo come `<img src=x onerror=...>` verrebbe mostrato così com'è e non interpretato come HTML, a differenza di `innerHTML` (rischio XSS).

---
## Slide 47 – Demo: evento e caricamento asincrono (1/2)

```js
async function loadCatalog() {
    button.disabled = true;
    statusMessage.textContent = "Caricamento in corso…";
    list.setAttribute("aria-busy", "true");

    try {
        const courses = await fetchCourses();
        renderCourses(courses);
        statusMessage.textContent = courses.length === 0
            ? "Nessun corso disponibile"
            : `Caricati ${courses.length} corsi`;

        // La funzione prosegue nella slide successiva
```

Durante l'attesa, il browser può gestire altro lavoro.
Quando arrivano dati validi, aggiorniamo lista e messaggio.

>> `fetchCourses()` è la funzione della slide 41. Disabilitare il pulsante evita richieste doppie se l'utente clicca più volte durante l'attesa.
>> `aria-busy="true"` segnala alle tecnologie assistive che la lista si sta aggiornando.
>> Se `renderCourses()` lancia l'errore di formato, il messaggio di successo non viene scritto e si passa al `catch` della slide successiva.
>> Con un solo corso il messaggio sarebbe "Caricati 1 corsi": per un testo corretto servirebbe un caso a parte.

---
## Slide 48 – Demo: errore e ripristino dell'interfaccia (2/2)

```js
    } catch (error) {
        statusMessage.textContent =
            "Caricamento non riuscito. Riprova.";
        console.error(error);
    } finally {
        button.disabled = false;
        list.setAttribute("aria-busy", "false");
    }
}

button.addEventListener("click", loadCatalog);
```

Il messaggio comunica l'esito anche alle tecnologie assistive.
Il pulsante torna utilizzabile sia dopo il successo sia dopo un errore.

**Test live: successo, file mancante, JSON malformato e secondo tentativo.**

>> Nei test: file mancante → `Error: HTTP 404` (da `fetchCourses`); JSON malformato → `SyntaxError` da `response.json()`; in entrambi i casi l'utente vede "Caricamento non riuscito. Riprova." e il dettaglio va in console. Al secondo tentativo, grazie al `finally`, il pulsante è di nuovo attivo.
>> Si passa `loadCatalog` senza parentesi: è la funzione da chiamare al click, non il risultato di una chiamata.

---
## Slide 49 – Interazione, HTTP e DOM

![[TW11-s049-1.png|600]]

- Attivazione del pulsante → Handler `loadCatalog()` → `fetch()` richiesta HTTP → Server risposta JSON → `await` riprende lettura dei dati → DOM aggiornato feedback all'utente

Il documento resta aperto: cambiano soltanto i contenuti necessari.
Il browser continua a usare HTTP per comunicare con il server.

**DOM, eventi, Promise e Fetch cooperano nella stessa interfaccia.**

---
## Riassunto

>> **Ordine di esecuzione**
>> - JavaScript gira su **un solo thread** (il main thread). Registrare una callback (`setTimeout`, `addEventListener`) non la esegue: la consegna al browser.
>> - Le attese (timer, rete, eventi) le gestisce il **browser**. Quando sono pronte, le callback finiscono nella **coda dei task**, e l'**event loop** ne esegue una solo quando lo stack è **vuoto**. Per questo `A; setTimeout(B, 0); C` stampa A, C, B.
>> - **Asincrono ≠ non bloccante**: una callback asincrona con un calcolo lungo blocca comunque il thread, e con lui l'interfaccia.
>>
>> **Callback, Promise, async/await**
>> - Un'operazione asincrona non può restituire subito il risultato: lo consegna a una callback. Più operazioni dipendenti portano alle callback annidate ("callback hell").
>> - Una **Promise** rappresenta un esito futuro: *pending*, poi *fulfilled* (con un valore) o *rejected* (con un errore). Si usa con `.then()`, `.catch()` e `.finally()`.
>> - Ogni `.then()` restituisce una nuova Promise. Il valore restituito, o la Promise restituita, passa al `.then()` successivo: le operazioni dipendenti diventano una catena piatta, con un solo `.catch()` in fondo.
>> - Gli handler delle Promise sono **microtask**: dopo ogni task si svuota **tutta** la coda delle microtask, prima del task successivo e del rendering. Quindi una Promise già risolta viene eseguita prima di un `setTimeout(…, 0)`.
>> - Una funzione `async` restituisce **sempre una Promise**. `await` sospende solo quella funzione (non il thread) fino all'esito della Promise; nel frattempo gira il resto del codice. Gli errori si gestiscono con `try`, `catch` e `finally`.
>>
>> **Fetch API (AJAX)**
>> - `fetch(url)` restituisce una Promise della **risposta**. Il body si legge con `await response.json()` o `.text()`, e una volta sola.
>> - `fetch` va in errore (rejected) **solo per errori di rete**: un 404 o un 500 arrivano come risposta normale, quindi bisogna controllare **`response.ok`** e lanciare l'errore a mano.
>> - Errori da distinguere: di rete (`TypeError`), HTTP (stato non 2xx), di formato (JSON non valido, `SyntaxError`), di contenuto (dati con una struttura inattesa).
>> - POST con JSON: `method: "POST"`, header `Content-Type: application/json`, `body: JSON.stringify(dati)`.
>> - Origine: per caricare dati serve una pagina servita via HTTP (non `file://`); le richieste verso altre origini sono soggette a **CORS**. Le richieste si controllano nella scheda Network dei Developer Tools.
>> - Nella demo: si disabilita il pulsante durante il caricamento, si costruisce il DOM con `textContent` (mai `innerHTML` con dati esterni) e in caso di errore si mostra un messaggio e si ripristina l'interfaccia.
