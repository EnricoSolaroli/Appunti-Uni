**Fonte:** [10_js_async_ajax.pdf](./10_js_async_ajax.pdf)

27/10
## Premessa

Questa lezione affronta uno dei punti più importanti di JavaScript nel browser: **come gestire le operazioni il cui completamento richiede tempo**, senza bloccare la pagina. Gli argomenti dichiarati nella slide iniziale sono tre: **asincronia**, **AJAX** e **Fetch**. Il percorso è però molto più ricco di quel che sembra, perché per arrivare a `fetch()` bisogna prima capire come il browser pianifica l'esecuzione del codice (main thread, task, event loop), poi come si organizza il codice quando un'operazione dipende dal risultato di un'altra (callback, Promise, `async`/`await`), e infine come tutto questo si applica alla comunicazione con un server tramite richieste HTTP.

La lezione si apre con una **domanda bonus da 2 punti**, che riporto nella prima sezione con la risposta. Un filo conduttore da tenere a mente: *registrare* una funzione da eseguire più tardi è un momento, *eseguirla* è un altro, e quasi tutti gli equivoci sull'asincronia nascono dal confondere i due.

## 1. In quale ordine viene eseguito il codice? (domanda bonus)

La lezione parte da un piccolo programma e da due domande:

> **Domanda bonus (2 punti):** *In quale ordine viene eseguito il codice?*

```javascript
> console.log("A");
> setTimeout(() => {
>     console.log("B");
> }, 0);
> console.log("C");
```


> - In quale ordine vengono stampate le tre lettere?
> - Che cosa significa il valore `0` passato a `setTimeout()`?

**Risposta (indicata nella slide):** le lettere vengono stampate in ordine **A, C, B**. Il valore `0` **non provoca l'esecuzione immediata della callback**: dobbiamo distinguere la chiamata a `setTimeout()` dall'esecuzione della funzione che gli passiamo.

Il ragionamento è il seguente. La prima istruzione stampa A. La seconda, `setTimeout()`, non esegue subito la funzione che riceve: chiede al browser di programmare l'esecuzione di quella funzione dopo un certo intervallo (qui 0 millisecondi) e termina immediatamente. L'esecuzione prosegue allora con la terza istruzione, che stampa C. Soltanto dopo, a codice corrente concluso, la callback del timer viene eseguita e stampa B. **Anche un ritardo di zero millisecondi significa dunque "non prima che abbia finito quello che sto facendo", non "adesso".**

### Registrare una callback non significa eseguirla
La slide successiva generalizza il punto, ed è forse la frase più importante dell'intera lezione:

- la chiamata a `setTimeout()` **richiede al browser di programmare** l'esecuzione di una callback dopo un intervallo di tempo;
- JavaScript **prosegue con le istruzioni successive**, senza aspettare quell'intervallo;
- anche con un ritardo di 0 millisecondi, la callback **non interrompe il codice attualmente in esecuzione**: viene eseguita successivamente.

La tabella della slide ricostruisce la sequenza dell'esempio:

| Passaggio | Che cosa accade |
|---|---|
| `console.log("A")` | Viene stampata A |
| `setTimeout(...)` | Il browser programma la callback |
| `console.log("C")` | Viene stampata C |
| Successiva esecuzione della callback | Viene stampata B |

A margine, in rosso, due richiami a quello che si è già visto: *abbiamo già passato funzioni come callback ai listener degli eventi: registrazione ed esecuzione della callback sono momenti distinti* (quando facciamo `addEventListener("click", ...)` la funzione non parte in quell'istante, ma più tardi, quando l'evento si verifica). Inoltre, *il ritardo di un timer non è una pausa nell'esecuzione del programma*: il programma non si ferma ad aspettare.

## 2. Perché il Web ha bisogno di asincronia
Un'applicazione Web deve gestire operazioni il cui completamento richiede tempo:

- attendere una **risposta HTTP**;
- attendere la **scadenza di un timer**;
- leggere dati attraverso **API asincrone**.

Durante queste attese, **l'interfaccia deve poter continuare a rispondere** alle interazioni dell'utente. Le API asincrone permettono di **avviare un'operazione e gestirne il completamento in seguito**, senza mantenere il codice JavaScript bloccato nell'attesa.

Finora abbiamo letto i dati e aggiornato immediatamente il DOM (come nella validazione della form della lezione precedente), dove tutto accadeva subito. Se invece dovessimo inviare i dati a un server, dovremmo gestire anche una sequenza di tre fasi, rappresentata nella slide da tre riquadri collegati da frecce: **Avvio della richiesta → Attesa della risposta → Aggiornamento dell'interfaccia**. Durante l'attesa potremmo mostrare un messaggio come "Invio in corso…" e consentire altre interazioni.

Una precisazione da non dimenticare, perché è un errore concettuale comune: **l'asincronia permette di gestire le attese, ma non rende automaticamente più veloce il codice JavaScript**. Non accelera niente: evita soltanto di restare fermi mentre si aspetta.

## 3. JavaScript sul main thread
Nel modello che la lezione considera, il codice JavaScript della pagina viene eseguito sul **main thread** del browser. Tre punti:

- su questo thread **una sola sequenza di istruzioni JavaScript viene eseguita alla volta**; le chiamate di funzione sono gestite attraverso il **call stack**;
- il main thread partecipa anche alla **gestione delle interazioni** e agli **aggiornamenti visivi** della pagina;
- di conseguenza, **un'esecuzione JavaScript troppo lunga può ritardare entrambi**.

Il diagramma di questa parte ("Main thread") mostra un riquadro che contiene il *call stack* (con, dall'alto, le funzioni in esecuzione: `updatePage()`, `handleClick()` e il "contesto chiamante") affiancato da due blocchi, la **gestione delle interazioni** e gli **aggiornamenti visivi**. La didascalia dice: *JavaScript e attività dell'interfaccia condividono il main thread. Uno script lungo può ritardare interazioni e aggiornamenti visivi.*

### Esempio
```javascript
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
console.log("C");
```

La slide commenta: la callback del timer non interrompe la sequenza di istruzioni che stampa A e C. Inoltre:

> Il browser svolge anche altre attività attraverso componenti e thread differenti. "Una sola esecuzione JavaScript alla volta" si riferisce qui al main thread, non all'intero browser.

Quindi non va detto che il browser è single-thread in assoluto: lo è, in questo modello, l'esecuzione del codice JavaScript della pagina.

## 4. Timer: il browser gestisce l'attesa
`setTimeout()` è un'API fornita dall'ambiente browser (non dal linguaggio JavaScript). Quando la chiamiamo accade questo:
1. il browser **imposta il timer**;
2. la chiamata **termina** e JavaScript prosegue con le istruzioni successive;
3. trascorso il ritardo previsto, il browser **accoda un task** che eseguirà la callback.

Un punto sottile: la scadenza del timer **rende possibile** una successiva esecuzione della callback, ma **non garantisce** che venga eseguita esattamente in quell'istante. Il ritardo indicato è quindi un minimo, non una promessa di puntualità, perché la callback deve aspettare il proprio turno.

### Esempio
```javascript
setTimeout(() => {
    console.log("Timer eseguito");
}, 1000);
console.log("Il programma prosegue");
```

Il programma stampa subito `Il programma prosegue`. La callback potrà essere eseguita successivamente, dopo l'attesa prevista e quando la pianificazione lo consentirà. Il diagramma di questa slide ha tre blocchi: **Main thread** (chiama `setTimeout()` e prosegue), **Timer del browser** (gestisce l'attesa), **Task in attesa** (il task che eseguirà la callback quando la scadenza è arrivata). Una freccia riporta dal task al main thread, con l'etichetta "esecuzione della callback sul main thread", e sotto è scritto che *il browser gestisce l'attesa; JavaScript può proseguire*.

## 5. Task ed event loop
Due definizioni da imparare:
- un **task** è un'unità di lavoro che il browser può pianificare, per esempio per eseguire la callback di un timer o per gestire un'interazione dell'utente;
- l'**event loop** coordina l'esecuzione di queste attività.

Nel **modello semplificato** della lezione, l'event loop funziona così:

1. viene selezionato un **task pronto** per l'esecuzione;
2. il codice JavaScript associato viene eseguito attraverso il **call stack**;
3. il task successivo **non interrompe** quello attualmente in esecuzione.

Quest'ultimo comportamento si chiama **run-to-completion**: ogni task, una volta cominciato, va fino in fondo prima che ne venga selezionato un altro.

Due avvertenze sul modello, riportate nelle slide: il browser dispone di **più code di task** e di regole di pianificazione, ma negli schemi si usa **una sola "task queue"** per rappresentare i task in attesa, *senza assumere un unico ordine globale tra tutte le sorgenti, come semplificazione*. Inoltre l'event loop coordina anche le **opportunità di aggiornamento visivo** della pagina.

### Perché l'output è A, C, B?
La slide "Dall'esempio precedente" mostra lo stesso diagramma in due versioni (una semplificata e una con la task queue): **Main thread** (chiama `setTimeout()` e prosegue) → **Timer del browser** (gestisce l'attesa) → alla scadenza, il task finisce nella **Task queue** (con Task 1, Task 2, Task 3 in attesa); l'**Event loop** *seleziona un task pronto quando il task corrente è terminato* e lo manda a eseguire sul main thread, nel **call stack** ("funzione attiva — codice in esecuzione"). La conclusione scritta sotto: *un task pronto non può interrompere il codice JavaScript in esecuzione.*

Poi la tabella passo per passo:

| Step | Che cosa accade |
|---|---|
| 1 | Viene eseguito il primo `console.log()`: stampa A |
| 2 | `setTimeout()` imposta il timer e termina |
| 3 | L'esecuzione prosegue: viene stampata C |
| 4 | Terminata l'esecuzione corrente, il task del timer potrà essere selezionato quando pronto |
| 5 | La callback viene eseguita e stampa B |

Lo schema riassuntivo ha tre riquadri in sequenza: (1) *Codice corrente*: stampa A, imposta il timer → output A; (2) *Codice corrente*: stampa C (con il task del timer in attesa) → output A, C; (3) *Task del timer*: esegue la callback, stampa B → output A, C, B. Messaggio finale: **un ritardo di 0 ms programma lavoro successivo**. Il commento in rosso ripete che il ritardo 0 non significa "esegui subito": il timer non permette alla callback di interrompere il codice corrente, e l'esecuzione effettiva può avvenire più tardi.

## 6. Asincrono non significa non bloccante

Questo è un punto che la lezione sottolinea con un titolo dedicato. La callback di un timer viene eseguita successivamente, **ma il suo codice occupa comunque il main thread**. Se una funzione esegue un calcolo lungo, ritarda la gestione delle altre interazioni e gli aggiornamenti visivi. **Inserirla in `setTimeout()` ne rinvia l'esecuzione, senza ridurne il costo**: il calcolo lungo si sposta più avanti, ma quando arriva blocca la pagina esattamente come prima.

### Esempio
```html
<button id="busy" type="button">Avvia calcolo lungo</button>
<button id="test" type="button">Prova a interagire</button>
<p id="message" role="status">In attesa</p>
```

```javascript
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

Il primo pulsante esegue un ciclo `while` che gira per 1500 millisecondi senza fare nulla di utile (un'*attesa attiva*, "usata soltanto per la dimostrazione": non si scrive mai codice così nelle applicazioni reali). Per tutta la durata del ciclo il main thread è occupato, quindi se nel frattempo si prova a cliccare il secondo pulsante la pagina non reagisce. *(Nota mia, non scritta nella slide: il clic sul secondo pulsante non va perso, ma viene trattato come un'interazione in attesa e gestito soltanto quando il ciclo è finito.)*

Il diagramma della slide successiva lo visualizza con una barra del tempo: arriva un'**interazione**, ma "l'interazione resta in attesa" (freccia tratteggiata) mentre la barra lunga **"JavaScript in esecuzione"** occupa il thread; soltanto alla fine compare il blocco **"Handler dell'interazione"**. La didascalia: **anche le callback devono terminare in tempi brevi.**

La slide chiude il blocco con due frasi in rosso che introducono il resto della lezione:

> Ora sappiamo quando può essere eseguita una callback asincrona.
> Come organizziamo il codice quando un'operazione deve usare il risultato di quella precedente?

## 7. Callback

### Callback sincrone e asincrone
Una **callback** è una funzione passata come argomento a un'altra funzione, affinché venga invocata da quest'ultima. Il punto importante: **il fatto che una funzione sia usata come callback non implica che venga eseguita in modo asincrono**; il momento dell'esecuzione dipende dall'API che la riceve. Il diagramma lo mostra con due righe:
- **Sincrona:** Chiamata → Esecuzione della callback → Ritorno dalla funzione;
- **Asincrona:** Chiamata → Ritorno dalla funzione → Successiva esecuzione della callback.
Nel caso sincrono la callback viene eseguita *durante* la chiamata; in quello asincrono la funzione ritorna prima, e la callback viene eseguita dopo.

Gli esempi della lezione:

```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2);
console.log(doubled); // [2, 4, 6]
```

**Callback SINCRONA.** `map()` esegue le callback durante la propria esecuzione: quando restituisce il nuovo array, la trasformazione è già completata.

```javascript
setTimeout(() => {
    console.log("Dati disponibili");
}, 500);
console.log("Il programma prosegue");
```

**Callback ASINCRONA.** La callback del timer viene eseguita successivamente, dopo la conclusione del codice corrente.

### Ricevere un risultato attraverso una callback
Quando un'operazione termina in seguito, **il risultato non può essere restituito direttamente dalla chiamata che l'ha avviata** (la chiamata è già terminata da un pezzo quando il risultato esiste). Un'API basata su callback può allora ricevere una funzione da invocare quando il risultato è disponibile, **passandoglielo come argomento**.

```javascript
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
Gli passa una funziona per il paradigrma funzionale. 
La funzione `loadCourse()` simula il caricamento di un corso (il timer rappresenta l'attesa). Uso:

```javascript
loadCourse(course => {
    console.log("Corso:", course.title);
});
console.log("Caricamento avviato");
```

Output:

```
Caricamento avviato
Corso: Tecnologie Web
```

La funzione `loadCourse()` termina dopo aver impostato il timer; successivamente la callback del timer crea il dato e invoca la callback ricevuta attraverso `callback(course)`. Il diagramma: `loadCourse(callback)` → *Operazione in attesa* → `callback(course)` → *Utilizzo del corso*, con l'annotazione "la chiamata termina; il programma prosegue" e la frase finale: **il codice che usa il risultato viene eseguito quando l'operazione lo rende disponibile.**

#### Perché non si può usare `return`

```javascript
const result = loadCourse(course => {
    console.log(course.title);
});
console.log(result); // undefined
```

In questo esempio `result` vale **`undefined`**: `loadCourse()` non restituisce un valore, e il corso viene consegnato alla callback, non alla variabile `result`. Anche un `return course` scritto *dentro* la callback del timer restituirebbe dalla callback stessa, non dalla chiamata a `loadCourse()`, ormai terminata.

### Operazioni dipendenti: callback annidate
Alcune operazioni possono iniziare soltanto dopo che una precedente ha prodotto il risultato necessario. L'esempio della lezione: **caricamento del corso → caricamento dei suoi argomenti → visualizzazione** (il diagramma mostra i tre passaggi come "Carica corso", "Carica argomenti" con la freccia etichettata `course.id`, "Mostra risultato"). Con un'API basata su callback, questa dipendenza si esprime avviando la seconda operazione **nella callback della prima**.

```javascript
function loadTopics(courseId, callback) {
    const topicsByCourse = {
        1: ["DOM", "Eventi", "Asincronia"]
    };
    setTimeout(() => {
        callback(topicsByCourse[courseId]);
    }, 500);
}
```

Esecuzione in sequenza delle due operazioni:
```javascript
loadCourse(course => {
    loadTopics(course.id, topics => {
        console.log(course.title);
        console.log(topics);
    });
});
```

`loadTopics()` viene chiamata quando il corso è disponibile: soltanto allora possiamo usare il suo `id`. Il problema: **all'aumentare delle operazioni dipendenti, l'annidamento può rendere più difficile seguire il flusso e organizzare la gestione degli errori**. Questo problema è spesso chiamato **callback hell**. La soluzione, annunciata dalla slide, sono le **Promise**, che permettono di rappresentare l'esito delle operazioni e di comporle attraverso catene, rendendo più espliciti i passaggi e la propagazione degli errori.

La slide di raccordo lo formula come domanda: *le callback esprimono le dipendenze, ma molte operazioni concatenate richiedono una struttura più facile da comporre. Possiamo ottenere un oggetto che rappresenti il futuro esito dell'operazione, invece di passarle subito la funzione che userà il risultato?* La risposta è la Promise.

## 8. Promise

### Rappresentare un esito futuro

Una **Promise** rappresenta il futuro completamento di un'operazione, oppure il suo fallimento. La funzione restituisce **subito** un oggetto Promise; il risultato dell'operazione diventa disponibile successivamente. Quindi, a differenza delle callback, qui la funzione restituisce davvero qualcosa subito: non il risultato, ma un oggetto che rappresenta l'esito che arriverà.

Una Promise ha tre stati. Il diagramma parte da **pending** (*operazione in attesa*) e si dirama in due stati finali:

- **fulfilled** — *valore disponibile*;
- **rejected** — *motivo del fallimento*.

**Stati finali: una Promise può stabilizzarsi una sola volta.** Una volta passata a fulfilled o a rejected, non cambia più.

### Esempio: una funzione che restituisce una Promise

```javascript
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

Il costruttore `new Promise(...)` riceve una funzione (detta *executor*) che a sua volta riceve due funzioni:

- `resolve(valore)`: in questo esempio completa con successo;
- `reject(errore)`: segnala il fallimento.

Il parametro `fail = false` serve solo per scegliere, nell'esempio, se simulare un successo o un errore. Il timer simula l'attesa; la Promise rappresenta l'esito.

### Utilizzare una Promise: `then` e `catch`

```javascript
loadCoursePromise()
    .then(course => {
        console.log("Corso:", course.title);
    })
    .catch(error => {
        console.error(error.message);
    });

console.log("Caricamento avviato");
```

- `.then()` registra il codice da eseguire quando il risultato è disponibile;
- `.catch()` gestisce un rigetto propagato lungo la catena.

Output: prima `Caricamento avviato`, poi `Corso: Tecnologie Web`. Come per le callback, il codice dentro `.then()` non parte subito.

### Creazione della Promise ed esecuzione degli handler

```javascript
console.log("A");

const promise = new Promise(resolve => {
    console.log("B");
    resolve("C");
});

promise.then(value => console.log(value));

console.log("D");
```

Output: **A, B, D, C**. Il motivo: **l'executor del costruttore viene eseguito subito** (quindi B viene stampata subito dopo A, in modo sincrono), mentre **l'handler passato a `.then()` viene eseguito in seguito**, dopo che il codice sincrono (la stampa di D) è terminato. La morale riportata in rosso: *creare una Promise non rende asincrono tutto il suo contenuto.*

### Concatenazione e valori restituiti

```javascript
Promise.resolve(10)
    .then(value => {
        return value * 2;
    })
    .then(result => {
        console.log(result); // 20
    });
```

**Ogni `.then()` restituisce una nuova Promise.** Il `return` dell'handler determina il risultato del passaggio successivo: nel diagramma, *Promise con valore 10* → `return value * 2` → *Nuova Promise con valore 20*. `Promise.resolve(10)` serve a creare una Promise già fulfilled con il valore 10.

### Operazioni dipendenti: una catena di Promise

```javascript
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

```javascript
loadCoursePromise()
    .then(course => {
        return loadTopicsPromise(course.id);
    })
    .then(topics => console.log(topics))
    .catch(error => console.error(error.message));
```

Restituire la Promise (nel primo `.then()` si fa `return loadTopicsPromise(course.id)`) **collega la seconda operazione alla catena**: il passaggio successivo aspetta che quella Promise si stabilizzi e riceve il suo valore. Il risultato è la stessa sequenza di prima (corso, poi argomenti), ma scritta in linea, senza annidamento. *(Nota mia: `??` è l'operatore di coalescenza nulla: `topicsByCourse[courseId] ?? []` restituisce l'array degli argomenti se esiste, altrimenti, se il valore è `undefined` o `null`, un array vuoto.)*

### Errori e operazioni conclusive

```javascript
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

Qui la Promise viene rigettata (`fail = true`). Un **rigetto** o un `throw` **saltano i successivi handler di successo**, fino a un gestore dell'errore: per questo il `.then()` non viene eseguito e si passa direttamente al `.catch()`, che stampa "Corso non disponibile". Poi `.finally()` esegue **attività conclusive in entrambi gli esiti**, ad esempio rimuovere un indicatore di caricamento: stampa "Operazione conclusa" sia dopo un successo, sia dopo un errore.

## 9. Event loop: task e microtask

Fin qui si è parlato di task. Ma le callback asincrone **possono seguire regole di pianificazione diverse**. La slide distingue due categorie:

- **TASK:** callback di un timer, interazioni utente pianificate;
- **MICROTASK:** handler di Promise, continuazioni dopo `await`.

Al **checkpoint**, il browser esegue le microtask **fino a svuotare la coda, comprese quelle aggiunte durante il processo**. E soprattutto: **le microtask non interrompono il codice sincrono in esecuzione**. Una nota a piè di slide: *"Task" è il termine dello standard; "macrotask" è un sinonimo informale frequente.*

### Esempio: un timer e una Promise già fulfilled

```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");
```

Output: **A, D, C, B**. Lo schema della slide ha tre blocchi: *Codice sincrono* (A, D) → *Microtask* (C) → *Task del timer* (B). La Promise è già fulfilled: il suo handler è pronto prima del task successivo, e quindi viene eseguito prima della callback del timer, anche se il timer era stato impostato a 0 ms e per primo. In sintesi, **le microtask hanno la precedenza sui task**: dopo il codice sincrono vengono svuotate tutte le microtask, e solo dopo si passa al prossimo task.

### Checkpoint delle microtask e interfaccia
Il diagramma mostra la sequenza **Task corrente termina → Checkpoint microtask → Successivo task quando selezionato**. La coda delle microtask viene svuotata al checkpoint prima di passare al task successivo. Inoltre il browser aggiorna la rappresentazione visiva **nelle opportunità di rendering previste, non dopo ogni istruzione JavaScript**. L'avvertenza finale: **anche molte microtask consecutive possono ritardare interazioni e aggiornamenti visivi**, perché finché la coda non è vuota non si passa oltre.

## 10. `async` e `await`

### `async`: il risultato è una Promise

```javascript
async function getCourseTitle() {
    return "Tecnologie Web";
}

const result = getCourseTitle();

result.then(title => console.log(title));
```

Una funzione `async` **restituisce sempre una Promise**, anche quando usa `return` con un valore ordinario. Quindi `result` è una Promise, **non** la stringa `"Tecnologie Web"`; il valore si ottiene con `.then()`.

### `await`: sospensione e ripresa della funzione

```javascript
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

La seconda operazione usa il risultato della prima, ma ora il codice si legge dall'alto verso il basso come se fosse sincrono. Durante l'attesa, **la funzione sospende la propria prosecuzione e restituisce il controllo al chiamante**. L'avvertenza in rosso: **`await` non blocca il browser**: il codice successivo riprende in seguito. (Nota mia: `await` si può usare dentro una funzione `async`, ed è proprio quello che permette di sostituire la catena di `.then()` della sezione precedente con due righe.)

### Esempio: esecuzione durante `await`

```javascript
async function demo() {
    console.log("B");
    await Promise.resolve();
    console.log("C");
}

console.log("A");
demo();
console.log("D");
```

Output: **A, B, D, C**. Si procede così: il chiamante stampa A; `demo()` viene chiamata e **stampa B**, poi arriva ad `await` e **si sospende**, restituendo il controllo al chiamante; il chiamante stampa D; infine la continuazione di `demo()` stampa C **come microtask**. Notare che B viene stampata subito (la parte di `demo()` prima dell'`await` è sincrona), mentre ciò che sta dopo l'`await` è rinviato.

### Gestire gli errori con `try`, `catch` e `finally`

```javascript
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

Se la Promise attesa viene **rejected**, `await` genera un'**eccezione** gestibile dal `catch`. Il blocco `finally` si esegue in ogni caso. Il messaggio finale: **la scrittura cambia, il modello asincrono resta quello delle Promise**; `async`/`await` è un modo più leggibile di scrivere lo stesso meccanismo.

## 11. AJAX e Fetch API

**AJAX** indica l'approccio che permette di **scambiare dati con il server e aggiornare parti della pagina senza ricaricarla completamente**. **`XMLHttpRequest`** è l'API storicamente associata a questo approccio; la **Fetch API** offre un'interfaccia basata su **Promise** per effettuare richieste HTTP. Il diagramma: **JavaScript `fetch()` → HTTP server → Risposta, aggiornamento DOM**. La frase in rosso: *Fetch collega la programmazione asincrona alle risorse del Web.*

### Fetch: risposta HTTP e lettura del body

```javascript
async function readCourses() {
    const response = await fetch("/courses.json");
    const courses = await response.json();
    console.log(courses);
}
```

Ci sono **due attese distinte**, con scopi diversi: ottenere la risposta HTTP e leggere il contenuto del body. Lo schema: `fetch(url)` restituisce una `Promise<Response>` → `response` (status e header) → `response.json()` restituisce una Promise dei dati. **JSON è un formato testuale; `response.json()` produce un valore JavaScript.**

### Errori HTTP: il controllo di `response.ok`

```javascript
async function fetchCourses(url = "/courses.json") {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const courses = await response.json();
    return courses;
}
```

Un punto fondamentale: **una risposta 404 o 500 è comunque una risposta HTTP: `fetch()` non rigetta automaticamente per questi status.** Per questo bisogna controllare esplicitamente `response.ok`, che è `true` per gli status HTTP da **200 a 299**, e lanciare un errore se non lo è.

### Quali errori dobbiamo distinguere?

La slide elenca quattro situazioni diverse, con il comportamento corrispondente:

| Situazione | Che cosa succede |
|---|---|
| Rete o accesso bloccato | `fetch()` può restituire una Promise rejected |
| Status HTTP 404 o 500 | Verifichiamo `response.ok` e generiamo un errore |
| Body non interpretabile come JSON | La Promise di `response.json()` viene rejected |
| JSON con struttura inattesa | I dati richiedono ulteriori controlli applicativi |

La conclusione: **una risposta HTTP riuscita non garantisce dati adatti all'applicazione**. Il quarto caso è quello controllato nella demo con la funzione `renderCourses()`.

### Inviare JSON con una richiesta POST

```javascript
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

`JSON.stringify()` **serializza i dati da inviare** (trasforma l'oggetto JavaScript in una stringa JSON); `Content-Type` descrive il formato del body della richiesta. La precisazione in rosso: **serve un endpoint server: il solo JavaScript non salva i dati sul server.**

### Origine delle risorse e Developer Tools

Una URL **relativa** come `/courses.json` usa la **stessa origine** della pagina. Per leggere risposte da **un'altra origine**, il server deve consentirlo attraverso **CORS**. Per la demo si serve pagina e JSON via HTTP dalla stessa origine, **evitando l'apertura diretta del file HTML con `file://`**. Gli strumenti di sviluppo del browser (Developer Tools, scheda **Network**) permettono di osservare URL, metodo, status, header e body della risposta, e la console aiuta a distinguere errori HTTP, CORS e parsing.

## 12. Demo: caricare un catalogo di corsi

La demo mette insieme DOM, eventi, Promise e Fetch. Il pulsante avvia una richiesta **GET**; la pagina mostra caricamento, risultato oppure errore.

**HTML:**

```html
<button id="loadCourses" type="button">Carica corsi</button>
<p id="status" role="status">Catalogo non caricato</p>
<ul id="courses"></ul>
```

**`courses.json`:**

```json
[
    { "id": 1, "title": "Tecnologie Web" },
    { "id": 2, "title": "Basi di dati" }
]
```

### Dai dati agli elementi del DOM

```javascript
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

La funzione **controlla la struttura dei dati** (che siano un array di oggetti con un `title` di tipo stringa; altrimenti lancia un errore) e inserisce i titoli **come testo** con `textContent` (non con `innerHTML`, per le ragioni di sicurezza viste nella lezione sul DOM). `list.replaceChildren()` svuota la lista prima di riempirla, in modo che un secondo caricamento non aggiunga voci duplicate.

### Evento e caricamento asincrono

```javascript
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
```

Durante l'attesa il browser può gestire altro lavoro; quando arrivano dati validi, si aggiornano lista e messaggio. Il pulsante viene disabilitato per evitare più richieste contemporanee, e `aria-busy="true"` segnala alle tecnologie assistive che la lista è in aggiornamento.

### Errore e ripristino dell'interfaccia

```javascript
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

Il messaggio comunica l'esito **anche alle tecnologie assistive** (il paragrafo ha `role="status"`), e il pulsante torna utilizzabile **sia dopo il successo sia dopo un errore**, perché si trova nel `finally`. La slide indica anche come provare la demo dal vivo: **successo, file mancante, JSON malformato e secondo tentativo**.

### Riepilogo: interazione, HTTP e DOM

L'ultimo diagramma mostra il percorso completo come una sequenza: **attivazione del pulsante → handler `loadCatalog()` → `fetch()` (richiesta HTTP) → server (risposta JSON) → `await` riprende la lettura dei dati → DOM aggiornato, con feedback all'utente**. Il documento resta aperto: cambiano soltanto i contenuti necessari; il browser continua a usare HTTP per comunicare con il server. In una frase: **DOM, eventi, Promise e Fetch cooperano nella stessa interfaccia.**

## Riepilogo dei punti da ricordare

- **Registrare ≠ eseguire:** una callback passata a `setTimeout()` o a un listener non parte subito.
- Il codice JavaScript della pagina gira sul **main thread**, una sequenza alla volta (run-to-completion); un'esecuzione lunga ritarda interazioni e aggiornamenti visivi.
- **`setTimeout(f, 0)` non è "subito"**: `f` viene eseguita dopo il codice corrente.
- **Asincrono non significa non bloccante:** rinviare un calcolo lungo non ne riduce il costo.
- Una callback può essere **sincrona** (`map`) o **asincrona** (`setTimeout`); in quest'ultimo caso il risultato non si ottiene con `return`.
- Le **Promise** rappresentano un esito futuro: stati **pending → fulfilled / rejected**, una sola volta; `then` / `catch` / `finally`; ogni `then` restituisce una nuova Promise.
- Ordine di esecuzione: **codice sincrono → microtask (Promise, dopo `await`) → task (timer)**, quindi nell'esempio A, D, C, B.
- `async` restituisce sempre una Promise; `await` sospende la funzione, non il browser; gli errori si gestiscono con `try`/`catch`/`finally`.
- **`fetch()` non rigetta per 404 o 500:** si controlla `response.ok` (status 200–299); `response.json()` è una seconda attesa e può fallire a sua volta.
- Una risposta HTTP riuscita non garantisce dati nel formato atteso: vanno controllati.
- Per leggere risorse da un'altra origine serve **CORS**; per le demo si evita `file://`.