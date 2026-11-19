[11_vue](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/11_vue.pdf>)

# Introduzione a Vue

>> Dopo il DOM "a mano" di [[10 - JavaScript DOM ed eventi]] e il caricamento dei dati con `fetch` di [[11 - JavaScript asincrono, Promise e Fetch]], qui si passa a un framework: Vue aggiorna il DOM da solo a partire dallo stato (rendering dichiarativo e reattività).

## Indice

1. **Dalle applicazioni web tradizionali alle SPA** (slide 1–12)
	- [[#Slide 2 – Programma della lezione|Programma della lezione]]
	- [[#Slide 4 – Dalle pagine web alle applicazioni web|Dalle pagine alle applicazioni web]]
	- [[#Slide 5 – Architettura delle applicazioni web tradizionali|Architettura tradizionale]]
	- [[#Slide 6 – Multi-Page Application|Multi-Page Application (MPA) e suoi limiti]]
	- [[#Slide 8 – Single Page Application|Single Page Application (SPA)]]
	- [[#Slide 9 – Come funziona una SPA?|Come funziona una SPA]]
	- [[#Slide 10 – Vantaggi e criticità delle SPA|Vantaggi e criticità]]
	- [[#Slide 11 – SPA: quali responsabilità rimangono al server?|Ruolo del server]]
	- [[#Slide 12 – Una SPA senza framework: quali difficoltà?|Una SPA senza framework]]
2. **Dai pattern architetturali ai framework frontend** (slide 13–25)
	- [[#Slide 14 – Separazione delle responsabilità|Separazione delle responsabilità]]
	- [[#Slide 15 – Richiamo: Model-View-Controller (MVC)|MVC]] e [[#Slide 16 – MVC nelle applicazioni web|MVC nel Web]]
	- [[#Slide 17 – Model-View-ViewModel (MVVM)|MVVM]] e [[#Slide 18 – Come funziona MVVM?|come funziona]]
	- [[#Slide 19 – Dal DOM imperativo al rendering dichiarativo|Dal DOM imperativo al rendering dichiarativo]]
	- [[#Slide 20 – Reattività e data binding|Reattività e data binding]]
	- [[#Slide 21 – Perché utilizzare un framework frontend?|Perché un framework]]
	- [[#Slide 22 – Angular, React e Vue|Angular, React e Vue a confronto]]
	- [[#Slide 25 – Perché abbiamo scelto Vue?|Perché Vue]]
3. **Introduzione a Vue 3** (slide 26–38)
	- [[#Slide 27 – Vue 3: un framework progressivo|Framework progressivo]]
	- [[#Slide 28 – Utilizzare Vue tramite CDN|Vue tramite CDN]]
	- [[#Slide 29 – La prima applicazione Vue|La prima applicazione]]
	- [[#Slide 30 – Come Vue gestisce il template|Template e montaggio]]
	- [[#Slide 31 – Interpolazione dei dati|Interpolazione]]
	- [[#Slide 32 – Le direttive di Vue|Direttive]]
	- [[#Slide 33 – Binding degli attributi HTML|v-bind]]
	- [[#Slide 34 – Gestione degli eventi|v-on]] e [[#Slide 35 – Modificatori degli eventi|modificatori]]
	- [[#Slide 36 – Two-way binding con `v-model`|v-model]]
	- [[#Slide 38 – Dallo stato al DOM: il ciclo di aggiornamento|Il ciclo di aggiornamento]]
4. **Reattività e rendering** (slide 39–53)
	- [[#Slide 40 – Dati e valori derivati|Dati e valori derivati]]
	- [[#Slide 41 – Computed properties|Computed]], [[#Slide 42 – Methods o computed?|methods o computed]], [[#Slide 43 – Osservare i cambiamenti: watch|watch]]
	- [[#Slide 44 – Rendering condizionale con `v-if`|v-if]] e [[#Slide 45 – `v-if` oppure `v-show`?|v-show]]
	- [[#Slide 46 – Rendering di liste con `v-for`|v-for]] e [[#Slide 47 – Perché usare `:key` nelle liste?|:key]]
	- [[#Slide 48 – `v-if` e `v-for` sullo stesso elemento|v-if e v-for insieme]]
	- [[#Slide 50 – Binding dinamico delle classi CSS|Classi CSS dinamiche]] e [[#Slide 52 – Binding degli stili inline|stili inline]]
5. **Componenti** (slide 54–67)
	- [[#Slide 55 – Cosa sono i componenti Vue?|Che cosa sono i componenti]]
	- [[#Slide 56 – Definire e registrare un componente|Definire e registrare un componente]]
	- [[#Slide 57 – Stato locale e istanze indipendenti|Stato locale]]
	- [[#Slide 58 – Il ciclo di vita di un componente|Ciclo di vita]] e [[#Slide 59 – Lifecycle hooks|lifecycle hooks]]
	- [[#Slide 61 – Le props: dati dal padre al figlio|Props]] e [[#Slide 63 – One-way data flow|one-way data flow]]
	- [[#Slide 64 – Eventi custom con `$emit`|Eventi custom con $emit]]
	- [[#Slide 66 – Gli slot: personalizzare il contenuto|Slot]]
	- [[#Slide 67 – Progettare componenti riutilizzabili|Componenti riutilizzabili]]
6. **Architettura delle applicazioni: router e dati** (slide 68–79)
	- [[#Slide 70 – Perché serve un router?|Perché serve un router]]
	- [[#Slide 71 – Vue Router 4 tramite CDN|Vue Router 4]] e [[#Slide 72 – Definire le rotte|le rotte]]
	- [[#Slide 73 – Navigare tra le viste: `router-link` e `router-view`|router-link e router-view]]
	- [[#Slide 74 – Rotte dinamiche e parametri nell'URL|Rotte dinamiche]] e [[#Slide 75 – Navigazione programmatica|navigazione programmatica]]
	- [[#Slide 76 – Stato locale e stato condiviso|Stato locale e condiviso]]
	- [[#Slide 77 – Recuperare dati tramite API|Dati da API]] e [[#Slide 78 – Gestire caricamento ed errori|caricamento ed errori]]
	- [[#Slide 79 – Vue: dalla navigazione ai dati|Riepilogo]]

---
## Slide 1 – Introduzione a Vue

---
## Slide 2 – Programma della lezione

1. Dalle applicazioni web tradizionali alle SPA
2. Dai pattern architetturali ai framework frontend
3. Introduzione a Vue 3
4. Reattività e rendering
5. Componenti Vue
6. Architettura delle applicazioni Vue

---
## Slide 3 – Sezione 1: Dalle applicazioni web tradizionali alle SPA

Architetture client/server, MPA e Single Page Applications

---
## Slide 4 – Dalle pagine web alle applicazioni web

Le prime applicazioni del Web erano prevalentemente orientate alla **consultazione di documenti**, collegati tra loro tramite hyperlink.

Con l'evoluzione delle tecnologie web, il browser è diventato un ambiente in cui eseguire applicazioni sempre più complesse.

- **HTML**: definisce la struttura e il contenuto della pagina.
- **CSS**: gestisce la presentazione grafica.
- **JavaScript**: permette di introdurre comportamenti dinamici e interattivi.

Oggi un'applicazione web può offrire funzionalità simili a quelle di un'applicazione desktop, pur essendo accessibile attraverso un browser.

---
## Slide 5 – Architettura delle applicazioni web tradizionali

![[TW12-s005-1.png|412]]

- Nelle applicazioni web tradizionali, il **server** svolge un ruolo centrale nella generazione delle pagine HTML.
	- Il browser invia una richiesta HTTP al server.
	- Il server elabora la richiesta, eventualmente accedendo a dati e servizi.
	- Il server restituisce un documento HTML.
	- Il browser interpreta il documento, carica le risorse necessarie e visualizza la pagina.
- Quando il server genera dinamicamente l'HTML richiesto, si parla di ~~**server-side rendering (SSR)**. -> la pagina web viene costruita ogni volta da zero lato server e poi viene restituita completa al client.~~

>> Il contrario è il *client-side rendering* (CSR): il server invia un HTML quasi vuoto più il JavaScript, ed è il codice nel browser a costruire il DOM a partire dai dati. È il modello tipico delle SPA (slide 8–9).

---
## Slide 6 – Multi-Page Application

- Una **Multi-Page Application (MPA)** è un'applicazione web in cui la navigazione tra le diverse pagine comporta normalmente il caricamento di un nuovo documento HTML. Per esempio, in un sito di commercio elettronico:
	- L'utente apre il catalogo dei prodotti.
	- Seleziona un prodotto per visualizzarne i dettagli.
	- Accede alla pagina del carrello.
	- Procede alla pagina di checkout.
- Ogni navigazione può comportare una nuova richiesta HTTP e il caricamento di un nuovo documento.
- **Attenzione:** il browser può riutilizzare risorse già scaricate attraverso la cache, senza richiedere nuovamente tutti i file CSS, JavaScript e le immagini.

---
## Slide 7 – Limiti delle MPA

- Le **MPA** sono una soluzione consolidata, ma il caricamento di un nuovo documento durante la navigazione può introdurre alcune difficoltà.
	- **Continuità dell'interazione:** il passaggio tra pagine può interrompere temporaneamente l'esperienza dell'utente.
	- **Aggiornamento dell'interfaccia:** anche una modifica limitata può richiedere la navigazione verso un nuovo documento.
	- **Gestione dello stato:** informazioni come filtri, selezioni e dati temporanei devono essere conservate tra navigazioni.
	- **Interattività complessa:** per aggiornamenti frequenti, la combinazione di pagine server e JavaScript può diventare difficile da coordinare.
- Le MPA non sono necessariamente lente: cache, JavaScript e tecniche di aggiornamento parziale possono mitigare questi limiti.

>> Ad ogni nuovo documento lo stato JavaScript in memoria viene perso: per conservare filtri o selezioni tra le pagine servono URL (query string), cookie, `sessionStorage`/`localStorage` o lo stato sul server (sessione).
>> "Aggiornamento parziale" = per esempio `fetch()` che recupera dati e modifica solo una parte del DOM, senza cambiare pagina.

---
## Slide 8 – Single Page Application

- Una **Single Page Application (SPA)** è un'applicazione web in cui la navigazione e molte interazioni vengono gestite nel browser, **senza caricare un nuovo documento HTML a ogni cambio di vista**.
	- Il browser carica inizialmente il documento che ospita l'applicazione e le risorse necessarie.
	- JavaScript gestisce le interazioni e modifica dinamicamente l'interfaccia.
	- L'applicazione può richiedere nuovi dati al server senza ricaricare l'intera pagina.
	- La stessa pagina può mostrare viste differenti, anche associate a URL differenti.
- **SPA non significa applicazione senza server:** il backend può continuare a gestire dati, autenticazione e logica applicativa. -> cambia la funzione del server, ci fornisce solo i dati che ci servono tramite un API.

>> Le "viste associate a URL differenti" si ottengono senza ricaricare la pagina modificando l'URL via JavaScript (History API: `history.pushState()` e l'evento `popstate`, oppure il frammento `#...`). È ciò che fa un router lato client come Vue Router.

---
## Slide 9 – Come funziona una SPA?

![[TW12-s009-1.png|241]]

- **Avvio:** il browser carica l'applicazione e le risorse iniziali.
- **Interazione:** JavaScript gestisce gli eventi dell'utente.
- **Dati:** quando necessario, l'applicazione comunica con il server tramite API.
- **Rendering:** il browser aggiorna la vista interessata, senza richiedere un nuovo documento HTML.

**Attenzione:** non ogni interazione richiede una chiamata al server.

>> Differenza chiave rispetto alla slide 5: dopo l'avvio il server non restituisce più HTML ma **dati** (tipicamente JSON), e l'HTML corrispondente viene prodotto nel browser.

---
## Slide 10 – Vantaggi e criticità delle SPA

**Vantaggi potenziali**
- **Fluidità:** passaggi tra viste senza ricaricare l'intero documento.
- **Interattività:** aggiornamenti mirati dell'interfaccia -> cambi per ogni operazione meno porzione di pagina
- **Separazione:** frontend e servizi backend possono evolvere indipendentemente -> comunicano solo attraverso il JSON che si scambiano.
- **Riutilizzo:** componenti e logica condivisi tra viste.

**Criticità**
- **Avvio:** JavaScript e risorse iniziali possono incidere sul caricamento.
- **Complessità:** stato, navigazione e aggiornamenti devono essere coordinati.
- **Accessibilità e SEO:** richiedono attenzione nella progettazione.
- **Dipendenza da JavaScript:** senza JavaScript funzionalità limitate.

**Importante:** una SPA non è automaticamente più veloce, accessibile o utilizzabile offline di una MPA.

>> SEO: se il contenuto è generato solo da JavaScript, l'HTML iniziale è quasi vuoto e non tutti i crawler lo eseguono. Accessibilità: cambiando vista senza nuovo documento, il browser non annuncia la "nuova pagina" né sposta il focus; va gestito a mano (titolo, focus, regioni aggiornate).

---
## Slide 11 – SPA: quali responsabilità rimangono al server?

Una SPA **non elimina il backend**: cambia soprattutto il modo in cui viene costruita e aggiornata l'interfaccia.

![[TW12-s011-1.png|192]]

- Browser
	- Presentazione e interazioni dell'utente.
	- Stato dell'interfaccia e navigazione client.
	- Richieste di dati tramite API.
- Server
	- Accesso e modifica dei dati.
	- Verifica dell'identità e controllo delle autorizzazioni.
	- Regole applicative e controlli di sicurezza.

>> Il codice nel browser è interamente visibile e modificabile dall'utente: validazioni e controlli fatti nella SPA servono solo all'esperienza d'uso, quelli di sicurezza e di autorizzazione vanno **sempre** ripetuti sul server.

---
## Slide 12 – Una SPA senza framework: quali difficoltà?

Con JavaScript possiamo già modificare il DOM, gestire eventi e recuperare dati da un server. Ma cosa succede quando l'applicazione cresce?

- **Stato**
	- Come mantenere coerenti il modello e la vista?
- **DOM ed eventi**
	- Come aggiornare l'interfaccia senza moltiplicare manipolazioni e listener?
- **Navigazione**
	- Come coordinare URL, viste e pulsanti Indietro/Avanti?
- **Organizzazione**
	- Come suddividere e riutilizzare il codice in parti indipendenti?

**Domanda:** quali modelli architetturali e strumenti ci aiutano a gestire questa complessità?

---
## Slide 13 – Sezione 2: Dai pattern architetturali ai framework frontend

MVC, MVVM e reattività

---
## Slide 14 – Separazione delle responsabilità

Quando un'applicazione cresce, concentrare dati, interfaccia e comportamento nello stesso codice rende più difficili **manutenzione, test e riutilizzo**.

![[TW12-s014-1.png|500]]

- **Dati:** rappresentare e aggiornare le informazioni dell'applicazione.
- **Presentazione:** definire ciò che viene mostrato all'utente.
- **Interazioni:** interpretare gli eventi e coordinare le operazioni.

**Principio:** separare le responsabilità, mantenendo esplicite le relazioni tra le parti.

---
## Slide 15 – Richiamo: Model-View-Controller (MVC)

Il pattern **MVC** propone di distinguere tre responsabilità.

![[TW12-s015-1.png|144]]

- **Model:** dati, stato e logica del dominio.
- **View:** rappresentazione delle informazioni.
- **Controller:** interpreta le richieste o interazioni e coordina le operazioni.

**Attenzione:** il flusso esatto varia tra le diverse implementazioni di MVC.

>> Nel diagramma: l'Utente agisce sul Controller, che aggiorna il Model e/o seleziona la View; la freccia tratteggiata Model → View indica che la View legge i dati del Model (o ne riceve le notifiche di modifica). Nell'MVC "classico" la View osserva il Model; in quello web lato server (slide 16) è il Controller a passare i dati alla View.

---
## Slide 16 – MVC nelle applicazioni web

Nelle applicazioni web con rendering lato server, MVC può organizzare l'elaborazione di una richiesta HTTP.

![[TW12-s016-1.png|481]]

- Il **Controller** riceve la richiesta e coordina l'elaborazione.
- Il **Model** gestisce dati e regole del dominio.
- La **View** produce la rappresentazione da restituire al browser.

Questo è **un esempio di MVC lato server**, non l'unico modo di applicare il pattern.

>> Qui la View è tipicamente un template lato server (es. PHP, EJS, Thymeleaf) che, ricevuti i dati dal Controller, genera l'HTML: è il server-side rendering della slide 5.

---
## Slide 17 – Model-View-ViewModel (MVVM)

Il pattern **Model-View-ViewModel (MVVM)** separa i dati dell'applicazione dalla loro rappresentazione e dalla logica necessaria a gestire l'interfaccia.

- **Model**
	- Rappresenta i **dati** e le regole del dominio applicativo.
- **ViewModel**
	- Espone **stato e operazioni** in una forma utilizzabile dalla vista.
- **View**
	- Presenta i dati e raccoglie le **interazioni** dell'utente.

Il ViewModel costituisce il collegamento tra Model e View, senza richiedere alla vista di conoscere i dettagli del modello.

---
## Slide 18 – Come funziona MVVM?

![[TW12-s018-1.png|222]]

- Il **Model** rappresenta i dati e le regole del dominio.
- Il **ViewModel** espone informazioni e comportamenti necessari all'interfaccia.
- La **View** mostra tali informazioni e raccoglie gli input.
- Il **data binding** collega la vista allo stato esposto dal ViewModel.

**Attenzione:** Vue non impone rigidamente l'architettura MVVM.

>> Differenza rispetto a MVC: non c'è un Controller che aggiorna "a mano" la vista; il collegamento View ↔ ViewModel è automatico grazie al data binding.
>> In Vue la View è il template, mentre il ruolo del ViewModel è svolto dall'istanza del componente (`data`, `computed`, `methods`); per questo nella documentazione di Vue l'istanza è spesso chiamata `vm`.

---
## Slide 19 – Dal DOM imperativo al rendering dichiarativo

**Approccio imperativo**: si descrive **come** aggiornare l'interfaccia:
- Individuare gli elementi del DOM.
- Modificarne contenuti e attributi.
- Coordinare gli aggiornamenti dopo gli eventi.

**Approccio dichiarativo**: si descrive **cosa** visualizzare in funzione dello stato:
- Definire una relazione tra dati e vista.
- Modificare lo stato dell'applicazione.
- Lasciare al framework l'aggiornamento del DOM.

**Idea chiave:** descriviamo come deve apparire l'interfaccia in base allo stato dell'applicazione, lasciando al framework il compito di aggiornare il DOM quando lo stato cambia.

>> Esempio: per mostrare un contatore, in modo imperativo si scrive `counter++; span.textContent = counter;` in ogni punto in cui il valore cambia; in modo dichiarativo si scrive una volta nel template `<span>{{ counter }}</span>` e poi basta fare `counter++`.

---
## Slide 20 – Reattività e data binding

- **Reattività:** il sistema tiene traccia delle dipendenze tra dati e operazioni, reagendo alle modifiche dello stato.
- **One-way binding:** lo stato determina il valore rappresentato nella vista.
- **Two-way binding:** le modifiche apportate attraverso un controllo dell'interfaccia possono aggiornare lo stato associato.

![[TW12-s020-1.png|550]]

>> In Vue: interpolazione `{{ }}` e `v-bind` (`:attr`) realizzano il one-way binding (stato → vista); `v-model` sui controlli di un form realizza il two-way binding (vista ↔ stato).

---
## Slide 21 – Perché utilizzare un framework frontend?

JavaScript permette di costruire interfacce dinamiche anche senza framework. Un framework fornisce però **strumenti e convenzioni** per gestire applicazioni più articolate.

- **Rendering dichiarativo:** descrivere la vista in funzione dello stato.
- **Reattività:** aggiornare l'interfaccia quando cambiano i dati rilevanti.
- **Componenti:** suddividere l'interfaccia in parti riutilizzabili.
- **Organizzazione:** separare responsabilità e rendere il codice più manutenibile.

**Attenzione:** un framework non elimina la complessità, ma offre strumenti per gestirla.

---
## Slide 22 – Angular, React e Vue

Tre soluzioni molto diffuse per costruire interfacce web moderne, con **approcci e livelli di integrazione differenti**.

- **Angular**
	- Framework completo, con un insieme integrato di strumenti e convenzioni per sviluppare applicazioni.
- **React**
	- Libreria focalizzata sulla costruzione di interfacce tramite componenti, spesso affiancata da altre librerie.
- **Vue**
	- Framework progressivo: si può adottare gradualmente, da una piccola interfaccia a un'applicazione articolata.

**In comune:** componenti, gestione dello stato e aggiornamento dichiarativo dell'interfaccia.

>> "Progressivo" significa che si può partire includendo Vue con un `<script>` da CDN per rendere interattiva una parte di una pagina esistente, e aggiungere solo in seguito router, gestione dello stato globale e strumenti di build.

---
## Slide 23 – Tre approcci all'ecosistema frontend

| | Angular | React | Vue |
|---|---|---|---|
| **Ambito** | Framework applicativo | Libreria per interfacce | Framework progressivo |
| **Organizzazione** | Struttura e convenzioni integrate | Composizione con librerie e strumenti | Core essenziale ed ecosistema ufficiale |
| **Template** | HTML con sintassi Angular | Generalmente JSX | Template HTML con direttive |
| **Routing** | Router integrato nell'ecosistema Angular | Soluzioni aggiuntive | Vue Router |

Non esiste una scelta universalmente migliore: contano **requisiti, competenze del gruppo e complessità del progetto**.

>> JSX = estensione della sintassi JavaScript che permette di scrivere markup simile all'HTML direttamente nel codice JS (es. `<h1>{title}</h1>`); deve essere trasformato in JavaScript da uno strumento di build.

---
## Slide 24 – Requisiti e curva di apprendimento

**Tecnologie e strumenti**
- **Angular:** sviluppo normalmente basato su TypeScript e strumenti di progetto.
- **React:** JavaScript o TypeScript, spesso JSX e strumenti di build.
- **Vue:** JavaScript o TypeScript; si può iniziare con HTML, CSS e JavaScript tramite CDN.

**Impatto didattico**
- Angular richiede di assimilare più convenzioni iniziali.
- React introduce comunemente JSX e un diverso modo di descrivere la UI.
- Vue permette di riutilizzare direttamente le conoscenze di HTML, CSS e JavaScript.

**La curva di apprendimento non è assoluta**.

---
## Slide 25 – Perché abbiamo scelto Vue?

- **Curva di apprendimento:** una sintassi accessibile permette di concentrarsi su stato, reattività e componenti.
- **Tecnologie già note:** possiamo utilizzare HTML, CSS e JavaScript, senza introdurre TypeScript o JSX.
- **Avvio semplice:** Vue può essere caricato tramite CDN, senza ulteriori strumenti.
- **Concetti trasferibili:** rendering dichiarativo, data binding e componenti sono utili anche per comprendere altri framework.

**Obiettivo:** imparare i principi dei framework frontend attraverso Vue, non sostenere che Vue sia sempre la scelta migliore.
---
## Slide 26 – Sezione 3: Introduzione a Vue 3

Sezione 3

**Introduzione a Vue 3**

Applicazioni reattive con JavaScript e Options API

---
## Slide 27 – Vue 3: un framework progressivo

**Vue** è un framework JavaScript per costruire interfacce utente attraverso un approccio **dichiarativo e basato su componenti**.

- **Reattività:** le modifiche allo stato possono aggiornare automaticamente l'interfaccia.
- **Template HTML:** descrivono cosa visualizzare in funzione dei dati.
- **Componenti:** permettono di organizzare l'interfaccia in parti riutilizzabili.
- **Adozione progressiva:** Vue può gestire una parte di una pagina esistente oppure un'applicazione completa.

**Nel corso:** useremo Vue 3 con JavaScript, **Options API** e caricamento tramite **CDN**.

>> *Dichiarativo* = descriviamo **che cosa** deve mostrare la pagina in funzione dei dati; il **come** (creare, modificare, rimuovere nodi del DOM) lo gestisce Vue. È l'opposto dell'approccio *imperativo* visto finora con `querySelector`, `createElement`, `textContent`, `append`.
>> L'**Options API** organizza il componente in un oggetto con opzioni separate (`data`, `methods`, `computed`, `watch`, …); l'alternativa di Vue 3 è la *Composition API* (`setup()`, `ref()`), che nel corso non si usa.

---
## Slide 28 – Utilizzare Vue tramite CDN

Per iniziare non sono necessari npm, Vite o strumenti di compilazione: possiamo includere Vue in una normale pagina HTML.

```html
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>Prima applicazione Vue</title>
</head>
<body>
  <div id="app"></div>

  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <script src="app.js"></script>
</body>
</html>
```

- Il primo script carica la versione **globale** di Vue 3.
- Il secondo contiene il nostro codice JavaScript.
- L'elemento `#app` sarà gestito da Vue.

**Nota**: per un progetto reale è preferibile specificare una versione precisa di Vue, evitando aggiornamenti imprevisti.

>> "Versione globale" significa che lo script definisce la variabile globale `Vue` (da cui `Vue.createApp(...)` nelle slide successive), senza bisogno di `import`.
>> `vue@3` indica "l'ultima 3.x": per fissare la versione si scrive ad esempio `vue@3.5.13`. Inoltre `vue.global.js` è la build di sviluppo (con avvisi in console); in produzione si usa `vue.global.prod.js`.
>> L'ordine dei due `<script>` conta: `app.js` usa `Vue`, quindi va caricato dopo; stando in fondo al `<body>`, trova anche il `<div id="app">` già presente nel DOM.

---
## Slide 29 – La prima applicazione Vue

**HTML (`index.html`)**

```html
<div id="app">
  <h2>{{ message }}</h2>
</div>
```

**JavaScript (`app.js`)**

```js
Vue.createApp({
  data() {
    return {
      message: 'Hello Vue!'
    };
  }
}).mount('#app');
```

- `Vue.createApp(...)` : crea un'istanza dell'applicazione.
- `data()` : restituisce le proprietà che costituiscono lo stato reattivo.
- `mount('#app')` : collega l'applicazione Vue all'elemento HTML identificato da `app`.
- `{{ message }}` : mostra nel template il valore della proprietà `message`.

**Risultato visualizzato:** Hello Vue!

>> Verificato (Vue 3 + jsdom): il DOM risultante è `<div id="app"><h2>Hello Vue!</h2></div>`.
>> `data` deve essere una **funzione** che restituisce un oggetto nuovo (non un oggetto direttamente): così ogni istanza di componente ha il proprio stato.
>> Il contenuto del `<div id="app">` nella pagina viene usato come template: prima del montaggio il browser mostra per un attimo il testo grezzo `{{ message }}`.

---
## Slide 30 – Come Vue gestisce il template

![[TW12-s030-1.png|400]]

- Il **template** definisce la struttura e le espressioni da visualizzare.
- Lo **stato** fornisce i valori utilizzati dal template.
- Vue crea e aggiorna il **DOM** quando cambiano le dipendenze reattive rilevanti.

**Idea chiave:** descriviamo il risultato desiderato, senza scrivere manualmente le operazioni di aggiornamento del DOM.

>> Le *dipendenze reattive* di una parte del template sono le proprietà dello stato che essa legge durante il rendering: Vue le registra e, quando una di esse cambia, aggiorna solo le parti che ne dipendono.

---
## Slide 31 – Interpolazione dei dati

L'**interpolazione** permette di visualizzare nel template il valore di una proprietà dello stato, utilizzando la sintassi `{{ }}`.

**HTML**

```html
<div id="app">
  <p>Ciao, {{ nome }}!</p>
  <p>Hai {{ messaggi }} messaggi.</p>
</div>
```

**JavaScript (Options API)**

```js
Vue.createApp({
  data() {
    return { nome: 'Anna', messaggi: 3 };
  }
}).mount('#app');
```

**Risultato:** Ciao, Anna! Hai 3 messaggi.

L'interpolazione riguarda il **contenuto testuale**, non i valori degli attributi HTML.

>> Verificato: si ottengono due paragrafi, `<p>Ciao, Anna!</p><p>Hai 3 messaggi.</p>`.
>> Dentro `{{ }}` si può scrivere una singola **espressione** JavaScript (es. `{{ messaggi + 1 }}`, `{{ nome.toUpperCase() }}`), non istruzioni come `if` o `let`.
>> Il valore viene inserito come testo (come con `textContent`): eventuali tag HTML non vengono interpretati.
>> Per gli attributi non funziona `href="{{ indirizzo }}"`: serve `v-bind` (slide 33).

---
## Slide 32 – Le direttive di Vue

Le **direttive** sono attributi speciali del template, riconoscibili dal prefisso `v-`, che aggiungono comportamenti dichiarativi agli elementi HTML.

- `v-bind` : collega un attributo HTML a un'espressione JavaScript.
- `v-on` : associa un comportamento a un evento.
- `v-model` : sincronizza il valore di un controllo con lo stato.
- `v-if` **e** `v-for` : controllano rispettivamente condizioni e ripetizioni, che vedremo più avanti.

La sintassi generale è `v-direttiva[:argomento][.modificatore]`, ma **non tutte le direttive** richiedono argomenti o modificatori.

>> Esempio completo: in `v-on:submit.prevent="invia"` la direttiva è `v-on`, l'argomento è `submit` (l'evento), il modificatore è `.prevent` e il valore è `invia`.
>> Le parentesi quadre nella sintassi indicano parti opzionali: `v-model="nome"` non ha argomento né modificatori.

---
## Slide 33 – Binding degli attributi HTML

Con `v-bind` possiamo assegnare dinamicamente il valore di un attributo HTML in base allo stato dell'applicazione.

**HTML**

```html
<div id="app">
  <a v-bind:href="indirizzo">Sito web</a>
  <button :disabled="bloccato">Invia</button>
</div>
```

**JavaScript**

```js
Vue.createApp({
  data() {
    return {
      indirizzo: 'https://vuejs.org',
      bloccato: true
    };
  }
}).mount('#app');
```

- `v-bind:href="indirizzo"` legge il valore della proprietà `indirizzo`.
- `:disabled` è la forma abbreviata di `v-bind:disabled`.

>> Verificato: il risultato è `<a href="https://vuejs.org">Sito web</a><button disabled="">Invia</button>`.
>> Il valore di `v-bind` è un'**espressione JavaScript**, non una stringa: `:href="indirizzo"` usa la proprietà `indirizzo`, mentre `href="indirizzo"` (senza `:`) imposterebbe letteralmente il testo "indirizzo".
>> Per gli attributi booleani come `disabled`, se il valore è falsy (`false`, `null`, `undefined`) Vue rimuove l'attributo: con `bloccato: false` il pulsante torna cliccabile.

---
## Slide 34 – Gestione degli eventi

- La direttiva `v-on` permette di reagire agli eventi del browser richiamando un metodo definito nell'applicazione.
	- `@click` è la forma abbreviata di `v-on:click`.
	- `methods` raccoglie i metodi richiamabili dal template.
	- `this.count` accede allo stato dell'istanza del componente.

**HTML**

```html
<div id="app">
  <p>Conteggio: {{ count }}</p>
  <button @click="incrementa">+1</button>
</div>
```

**JavaScript** (Options API)

```js
Vue.createApp({
  data() {
    return { count: 0 };
  },
  methods: {
    incrementa() {
      this.count++;
    }
  }
}).mount('#app');
```

>> Verificato: all'inizio si vede "Conteggio: 0"; dopo due click "Conteggio: 2". Il paragrafo si aggiorna da solo, senza toccare il DOM nel metodo.
>> Equivale a `addEventListener("click", ...)` della lezione sugli eventi, ma dichiarato nel template. Come lì, si passa il **nome** del metodo (`@click="incrementa"`); in Vue è ammesso anche `@click="incrementa()"` o un'espressione breve come `@click="count++"`.
>> I metodi in `methods` non vanno scritti come arrow function (`incrementa: () => { this.count++ }`): in una arrow function `this` non è l'istanza del componente.

---
## Slide 35 – Modificatori degli eventi

I **modificatori** permettono di gestire alcuni comportamenti degli eventi direttamente nel template, senza scrivere codice aggiuntivo nei metodi.

- `.prevent` : impedisce il comportamento predefinito del browser, ad esempio l'invio tradizionale di un form.
- `.stop` : interrompe la propagazione dell'evento verso gli elementi antenati.
- `.once` : esegue il gestore soltanto alla prima occorrenza dell'evento.

**HTML**

```html
<div id="app">
  <form @submit.prevent="invia">
    <button type="submit">Invia</button>
  </form>
</div>
```

**JavaScript (Options API)**

```js
Vue.createApp({
  methods: {
    invia() {
      console.log('Form inviato');
    }
  }
}).mount('#app');
```

**Nota:** i modificatori si concatenano, ad esempio `@click.stop.prevent`.

>> La "Nota" è presente nel testo del PDF ma finisce sotto la barra in fondo alla slide, quindi non è visibile nella proiezione.
>> I modificatori corrispondono ai metodi visti con gli eventi nativi: `.prevent` → `event.preventDefault()`, `.stop` → `event.stopPropagation()`, `.once` → opzione `{ once: true }` di `addEventListener`.
>> Con `.prevent` la pagina non viene ricaricata: cliccando "Invia" in console compare solo `Form inviato`.

---
## Slide 36 – Two-way binding con `v-model`

La direttiva `v-model` collega il valore di un controllo HTML a una proprietà dello stato.

- Lo **stato** determina il valore mostrato nel controllo.
- L'**input dell'utente** aggiorna la proprietà associata.
- Gli elementi che dipendono da quella proprietà vengono aggiornati da Vue.

**HTML**

```html
<div id="app">
  <input v-model="nome">
  <p>Ciao, {{ nome }}!</p>
</div>
```

**JavaScript**

```js
Vue.createApp({
  data() {
    return { nome: 'Anna' };
  }
}).mount('#app');
```

**Idea chiave:** non serve leggere manualmente il valore dell'input né aggiornare il testo con `textContent`.

>> All'avvio il campo contiene "Anna" e sotto compare "Ciao, Anna!"; mentre si digita, il paragrafo cambia a ogni carattere.
>> Su un input di testo, `v-model="nome"` è una scorciatoia per `:value="nome"` (stato → controllo) più `@input="nome = $event.target.value"` (controllo → stato): da qui il nome *two-way*.

---
## Slide 37 – `v-model`: non solo campi di testo

`v-model` si adatta al tipo di controllo e consente di collegare allo stato anche selezioni e valori booleani.

**HTML**

```html
<div id="app">
  <label>
    <input type="checkbox" v-model="attivo">
    Attivo
  </label>
  <p>Attivo: {{ attivo }}</p>
</div>
```

**JavaScript**

```js
Vue.createApp({
  data() {
    return { attivo: false };
  }
}).mount('#app');
```

- Su un **input di testo**, `v-model` gestisce il valore testuale.
- Su una **checkbox singola**, può gestire un valore booleano.

>> Verificato: all'avvio la checkbox non è spuntata e il paragrafo mostra "Attivo: false"; spuntandola diventa "Attivo: true".
>> Per i radio button e i `<select>` `v-model` contiene il `value` dell'opzione scelta; con più checkbox legate allo stesso array contiene l'elenco dei valori spuntati.

---
## Slide 38 – Dallo stato al DOM: il ciclo di aggiornamento

Quando cambia lo stato reattivo, Vue programma l'aggiornamento delle parti dell'interfaccia che dipendono dai dati modificati.

![[TW12-s038-1.png|202]]

- Un evento o un'operazione modifica lo **stato**.
- Vue rileva il cambiamento delle dipendenze reattive.
- Vue programma gli **aggiornamenti necessari** del DOM.
- La vista riflette il nuovo stato senza manipolazioni manuali.

**Attenzione:** Vue ottimizza gli aggiornamenti del DOM, raggruppando le modifiche dello stato ed evitando rendering intermedi non necessari.

>> "Programma" significa che l'aggiornamento non è immediato: se un metodo modifica lo stato più volte di seguito, Vue aggiorna il DOM **una sola volta** alla fine, con i valori finali (nel *tick* successivo). Per questo, subito dopo `this.count++`, il DOM non è ancora aggiornato; per attendere l'aggiornamento esiste `this.$nextTick()`.

---
## Slide 39 – Sezione 4: Reattività e rendering

Sezione 4

**Reattività e rendering**

Proprietà calcolate, osservazione dello stato e visualizzazione dinamica

---
## Slide 40 – Dati e valori derivati

- Con `data()` definiamo lo **stato reattivo** del componente.
- Spesso la vista deve mostrare valori **calcolati a partire dallo stato**.
- Possiamo calcolarli direttamente nel template, ma le espressioni complesse rendono il codice meno leggibile.

**Stato**

```js
data() {
  return {
    prezzo: 50,
    quantita: 3
  };
}
```

**Valore derivato nella vista**

```html
<p>Totale: {{ prezzo * quantita }} €</p>
```

Il totale dipende da **prezzo** e **quantità**.

>> Risultato: "Totale: 150 €". Se cambia `prezzo` o `quantita`, il totale si aggiorna automaticamente.

---
## Slide 41 – Computed properties

Le **computed properties** definiscono valori derivati dallo stato, disponibili nel template come normali proprietà.

**JavaScript (Options API)**

```js
computed: {
  totale() {
    return this.prezzo * this.quantita;
  }
}
```

**HTML**

```html
<p>Totale: {{ totale }} €</p>
```

- `totale` viene **ricalcolato quando necessario**, se sono cambiate le dipendenze reattive.
- Il risultato viene **memorizzato** e riutilizzato finché le dipendenze rimangono invariate.

>> Nota che `totale` si **definisce** come funzione ma nel template si **usa** senza parentesi: `{{ totale }}`, non `{{ totale() }}`. Allo stesso modo nel codice si legge `this.totale`.
>> Una computed deve solo calcolare e restituire un valore, senza effetti collaterali (niente modifiche allo stato o richieste HTTP: per quello c'è `watch`, slide 43).
>> Attenzione alla cache: una computed che usa qualcosa di non reattivo, come `Date.now()`, non viene ricalcolata perché Vue non vede cambiare nessuna dipendenza.

---
## Slide 42 – Methods o computed?

Entrambi possono produrre un valore, ma hanno finalità differenti.

| | `methods` | `computed` |
|---|---|---|
| **Uso tipico** | Azioni e operazioni | Valori derivati dallo stato |
| **Nel template** | `calcolaTotale()` | `totale` |
| **Valutazione** | A ogni invocazione | Risultato in cache finché le dipendenze non cambiano |
| **Parametri** | Possono ricevere argomenti | Non si usano come funzioni parametrizzate nel template |

**Regola pratica:** per un valore derivato da dati reattivi, preferire `computed`; per gestire un'azione, usare `methods`.

>> Un metodo usato nel template (`{{ calcolaTotale() }}`) produce lo stesso risultato della computed, ma viene rieseguito a **ogni** nuovo rendering del componente, anche se è cambiato un dato che non lo riguarda; la computed invece restituisce il valore in cache.

---
## Slide 43 – Osservare i cambiamenti: watch

- Le proprietà `computed` **derivano valori** dallo stato.
- Con `watch` possiamo **eseguire operazioni quando cambia una proprietà reattiva**, ad esempio richieste HTTP o salvataggi.

**JavaScript (Options API)**

```js
data() {
  return {
    ricerca: ''
  };
},
watch: {
  ricerca(nuovoValore) {
    console.log('Ricerca:', nuovoValore);
  }
}
```

**Quando usarlo?**

- Per attivare un'operazione quando cambia un dato.
- Non per calcolare un valore che può essere espresso con `computed`.
- Il callback riceve il nuovo valore; può ricevere anche il precedente.

>> Il nome della funzione in `watch` deve coincidere con quello della proprietà osservata (`ricerca`). La firma completa è `ricerca(nuovoValore, vecchioValore)`.
>> Il watcher non scatta al caricamento della pagina ma solo ai cambiamenti successivi (salvo l'opzione `immediate: true`); per osservare le modifiche interne a un oggetto o array serve `deep: true`.
>> Verificato: assegnando di seguito `ricerca = 'vue'` e poi `ricerca = 'vue3'`, il watcher viene eseguito **una sola volta**, con nuovo valore `'vue3'` e precedente `''` (stesso raggruppamento degli aggiornamenti visto a slide 38).

---
## Slide 44 – Rendering condizionale con `v-if`

- `v-if` inserisce un elemento nel DOM **solo quando la condizione è vera**.
- `v-else-if` e `v-else` permettono di gestire condizioni alternative.
- I rami devono essere consecutivi nel template.

**HTML**

```html
<div id="app">
  <p v-if="voto >= 18">Esame superato</p>
  <p v-else>Esame non superato</p>
</div>
```

**JavaScript**

```js
Vue.createApp({
  data() {
    return { voto: 24 };
  }
}).mount('#app');
```

**Nota:** quando la condizione cambia, Vue può creare o rimuovere gli elementi interessati.

>> Verificato: con `voto: 24` il DOM contiene solo `<p>Esame superato</p>`; l'altro paragrafo non esiste proprio.
>> "Consecutivi" significa che l'elemento con `v-else` (o `v-else-if`) deve seguire **subito** quello con `v-if`: se in mezzo c'è un altro elemento, il `v-else` non viene riconosciuto e Vue segnala un errore di compilazione del template.

---
## Slide 45 – `v-if` oppure `v-show`?

Entrambe permettono di controllare ciò che l'utente vede, ma **agiscono in modo diverso**.

| | `v-if` | `v-show` |
|---|---|---|
| **Condizione falsa** | Contenuto assente dal DOM | Elemento presente ma nascosto |
| **Meccanismo** | Crea/rimuove il contenuto | Modifica `display` |
| **Uso tipico** | Condizioni che cambiano raramente | Visibilità che cambia spesso |

```html
<p v-if="mostra">Visibile con v-if</p>
<p v-show="mostra">Visibile con v-show</p>
```

**Attenzione:** `v-show` non elimina l'elemento dal DOM; `v-if` gestisce anche la creazione e la distruzione dei componenti condizionali.

>> Verificato con `mostra: false`: al posto del primo paragrafo resta solo un commento segnaposto `<!--v-if-->`, mentre il secondo diventa `<p style="display: none;">Visibile con v-show</p>`.
>> Il motivo della regola d'uso: `v-show` costa di più all'avvio (l'elemento viene sempre creato) ma poco a ogni cambio; `v-if` è il contrario. `v-show` inoltre non supporta `v-else` e non funziona su `<template>`.

---
## Slide 46 – Rendering di liste con `v-for`

La direttiva `v-for` permette di **generare elementi HTML a partire da un array**.

**HTML**

```html
<div id="app">
  <ul>
    <li v-for="prodotto in prodotti"
        :key="prodotto.id">
      {{ prodotto.nome }}
    </li>
  </ul>
</div>
```

**JavaScript**

```js
Vue.createApp({
  data() {
    return {
      prodotti: [
        { id: 1, nome: 'Mouse' },
        { id: 2, nome: 'Tastiera' }
      ]
    };
  }
}).mount('#app');
```

**Sintassi:** `v-for="elemento in array"`. È possibile accedere anche all'indice con `(elemento, indice) in array`.

>> Risultato: una lista con due voci, "Mouse" e "Tastiera". L'elemento che porta `v-for` (qui `<li>`) viene ripetuto una volta per ogni elemento dell'array; `prodotto` esiste solo all'interno di quell'elemento.
>> Aggiungendo un oggetto a `prodotti` (es. con `this.prodotti.push(...)`) la lista si aggiorna da sola.

---
## Slide 47 – Perché usare `:key` nelle liste?

- Quando un array cambia, Vue deve capire **quali elementi corrispondono agli elementi precedenti**.
- `:key` fornisce un'identità stabile a ciascun elemento renderizzato.
- È particolarmente importante se la lista viene riordinata o contiene componenti e input con stato.

**Consigliato**

```html
<li v-for="p in prodotti" :key="p.id">
  {{ p.nome }}
</li>
```

**Da evitare se la lista cambia ordine**

```html
<li v-for="(p, i) in prodotti" :key="i">
  {{ p.nome }}
</li>
```

**Regola pratica:** preferire un identificatore univoco e stabile dei dati, anziché l'indice dell'array.

>> Perché l'indice è un problema: se si inserisce un prodotto in testa, tutti gli indici scalano di uno, quindi per Vue l'elemento con chiave `0` è "lo stesso" di prima ma con dati diversi. Vue riusa i nodi esistenti cambiandone il testo, e lo stato interno legato al nodo (es. testo digitato in un `<input>`, checkbox spuntata) resta sulla riga sbagliata. Con `p.id` la chiave segue il dato.

---
## Slide 48 – `v-if` e `v-for` sullo stesso elemento

In **Vue 3**, quando `v-if` e `v-for` sono applicati allo stesso elemento, `v-if` **ha la precedenza**: la condizione non può utilizzare la variabile introdotta dal ciclo.

**Da evitare**

```html
<li v-for="p in prodotti" v-if="p.disponibile">
  {{ p.nome }}
</li>
```

`p` non è ancora disponibile quando viene valutata la condizione.

**Soluzione consigliata**

```js
computed: {
  disponibili() {
    return this.prodotti.filter(p => p.disponibile);
  }
}
```

```html
<li v-for="p in disponibili" :key="p.id">
  {{ p.nome }}
</li>
```

**Regola pratica:** filtrare i dati con una proprietà `computed`, poi visualizzarli con `v-for`.

>> Verificato: la versione "da evitare" genera l'avviso `Property "p" was accessed during render but is not defined on instance` e poi l'errore `Cannot read properties of undefined (reading 'disponibile')`.
>> In Vue 2 la precedenza era opposta (`v-for` prima di `v-if`): per questo molti esempi trovati online, scritti per Vue 2, in Vue 3 non funzionano.
>> In alternativa alla computed si può spostare il `v-for` su un `<template>` esterno e lasciare il `v-if` sul `<li>` interno (slide 49).

---
## Slide 49 – Il tag `<template>` in Vue

Il tag HTML `<template>` permette di **raggruppare più elementi** e applicare direttive strutturali senza creare un contenitore aggiuntivo nel DOM finale.

**`<template v-if>`**

```html
<template v-if="autenticato">
  <h3>Benvenuto!</h3>
  <p>Accesso effettuato.</p>
</template>
```

La condizione controlla **entrambi gli elementi**.

**`<template v-for>`**

```html
<template v-for="p in prodotti" :key="p.id">
  <h3>{{ p.nome }}</h3>
  <p>{{ p.prezzo }} €</p>
</template>
```

Ogni iterazione genera **un gruppo di elementi**.

>> Verificato: con un prodotto `{ nome: 'Mouse', prezzo: 10 }` il DOM finale contiene solo `<h3>Mouse</h3><p>10 €</p>`, senza alcun tag `<template>` né `<div>` contenitore.
>> In Vue 3 il `:key` va messo sul `<template>` stesso, come nella slide (in Vue 2 andava sugli elementi figli).

---
## Slide 50 – Binding dinamico delle classi CSS

Con `:class` possiamo **aggiungere o rimuovere classi CSS** in base allo stato dell'applicazione.

**HTML**

```html
<div id="app">
  <p :class="{ evidenziato: importante }">
    Messaggio
  </p>
</div>
```

**JavaScript**

```js
Vue.createApp({
  data() {
    return { importante: true };
  }
}).mount('#app');
```

**CSS**

```css
.evidenziato { color: red; font-weight: bold; }
```

- La chiave `evidenziato` indica la classe CSS.
- La classe viene applicata soltanto se `importante` ha un valore `truthy`.

>> Verificato: si ottiene `<p class="evidenziato">Messaggio</p>`, quindi il testo è rosso e in grassetto; con `importante: false` l'attributo `class` sparisce.
>> *Truthy* = qualunque valore che in un `if` vale come vero: tutto tranne `false`, `0`, `''`, `null`, `undefined` e `NaN`.
>> L'oggetto può avere più chiavi (`{ evidenziato: importante, errore: haErrori }`), e se le classi contengono un trattino vanno tra apici (`{ 'testo-grande': grande }`). Un normale attributo `class="..."` statico sullo stesso elemento viene unito a quelle dinamiche.

---
## Slide 51 – Classi CSS con array

La direttiva `:class` accetta anche un **array**, per combinare classi CSS fisse e dinamiche.

**HTML**

```html
<div id="app">
  <p :class="['messaggio',
              classeStato,
              classeDimensione]">
    Operazione completata
  </p>
</div>
```

**JavaScript**

```js
Vue.createApp({
  data() {
    return {
      classeStato: 'successo',
      classeDimensione: 'grande'
    };
  }
}).mount('#app');
```

- `messaggio` è una classe fissa.
- `classeStato` e `classeDimensione` sono classi dinamiche.
- **Risultato:** `class="messaggio successo grande"`.

**Idea chiave**: Vue utilizza i valori degli elementi dell'array come nomi delle classi CSS.

>> Verificato: il risultato è proprio `<p class="messaggio successo grande">`.
>> La differenza fra fissa e dinamica sta negli apici: `'messaggio'` è una stringa letterale, mentre `classeStato` (senza apici) è il nome di una proprietà dello stato, di cui si usa il valore (`'successo'`).

---
## Slide 52 – Binding degli stili inline

Con `:style` possiamo collegare le **proprietà CSS** a un oggetto JavaScript.

**HTML**

```html
<div id="app">
  <p :style="stileMessaggio">
    Messaggio personalizzato
  </p>
</div>
```

**JavaScript**

```js
Vue.createApp({
  data() {
    return {
      stileMessaggio: {
        color: 'red',
        fontSize: '20px'
      }
    };
  }
}).mount('#app');
```

- Le chiavi dell'oggetto identificano le proprietà CSS.
- **Nota**: le proprietà CSS composte possono essere scritte in camelCase, ad esempio fontSize.
- Modificando i valori reattivi, Vue aggiorna gli stili applicati.

>> Verificato: il risultato è `<p style="color: red; font-size: 20px;">`; Vue converte `fontSize` nella proprietà CSS `font-size`.
>> In alternativa al camelCase si può usare il nome CSS originale tra apici: `{ 'font-size': '20px' }`. I valori con unità di misura vanno scritti come stringhe complete (`'20px'`, non `20`).

---
## Slide 53 – Classi CSS o stili inline?

Entrambi gli approcci permettono di modificare la presentazione in base allo stato, ma hanno **scopi differenti**.

| `:class` | `:style` |
|---|---|
| Aggiunge o rimuove classi CSS associate all'elemento. | Imposta direttamente proprietà CSS sull'elemento. |
| Favorisce la separazione tra struttura e presentazione. | È utile per valori calcolati o molto variabili. |
| Generalmente preferibile per stati visivi ricorrenti. | Da usare quando serve un valore dinamico specifico. |

**Buona pratica:** preferire le classi CSS per gli stati dell'interfaccia; usare gli stili inline quando il valore deve essere calcolato dinamicamente.

>> Esempi tipici: `:class` per stati come "selezionato", "errore", "disabilitato" (l'aspetto è definito una volta nel CSS); `:style` per valori numerici che cambiano di continuo, come la larghezza di una barra di avanzamento (`:style="{ width: percentuale + '%' }"`).
---
## Slide 54 – Sezione 5: Componenti Vue

Sezione 5

**Componenti Vue**

Organizzazione, riutilizzo e comunicazione tra componenti

---
## Slide 55 – Cosa sono i componenti Vue?

Un **componente** è un'unità riutilizzabile dell'interfaccia, con un proprio template e, quando necessario, stato e comportamento.

- **Modularità:** suddivide l'interfaccia in parti più semplici da gestire.
- **Riutilizzo:** lo stesso componente può comparire più volte.
- **Incapsulamento:** ogni componente organizza la propria logica e i propri dati.
- **Composizione:** componenti più complessi possono contenere altri componenti.

![[TW12-s055-1.png|450]]

>> L'interfaccia diventa un albero di componenti: la radice è l'applicazione creata con `Vue.createApp()`, i nodi sono i componenti annidati. Lo stesso componente (qui `Prodotto`) compare più volte, ogni volta come istanza separata.

---
## Slide 56 – Definire e registrare un componente

Un componente Vue si definisce tramite un oggetto che ne descrive il **template** e il comportamento. Per utilizzarlo, possiamo registrarlo nell'applicazione.

**JavaScript (`app.js`)**

```js
const app = Vue.createApp({});

app.component('mio-messaggio', {
  template: '<p>Ciao dal componente!</p>'
});

app.mount('#app');
```

**HTML (`index.html`)**

```html
<div id="app">
  <mio-messaggio></mio-messaggio>
</div>
```

- `app.component()` registra il componente.
- `template` ne definisce il contenuto.
- Il tag personalizzato lo inserisce nella vista.

**Nota:** la registrazione tramite `app.component()` rende il componente disponibile in tutta l'applicazione.

>> L'ordine conta: `app.component()` va chiamato **prima** di `app.mount()`, altrimenti al montaggio Vue non conosce ancora `<mio-messaggio>`.
>> Quando il template sta direttamente nell'HTML della pagina (come qui), usare nomi in kebab-case con almeno un trattino e il tag di chiusura esplicito: il browser fa il parsing dell'HTML prima di Vue, non distingue maiuscole e minuscole e non accetta tag personalizzati auto-chiusi (`<mio-messaggio />`).
>> Output: `Ciao dal componente!` in un paragrafo, al posto del tag `<mio-messaggio>`.

---
## Slide 57 – Stato locale e istanze indipendenti

Ogni istanza di un componente dispone del **proprio stato reattivo**, restituito dalla funzione `data()`.

**JavaScript**

```js
app.component('contatore', {
  data() {
    return { count: 0 };
  },
  template: `
    <button @click="count++">
      {{ count }}
    </button>`
});
```

**HTML**

```html
<div id="app">
  <contatore></contatore>
  <contatore></contatore>
</div>
```

- Ogni contatore parte da `0`.
- Un click modifica soltanto l'istanza selezionata.
- `data()` restituisce un nuovo oggetto di stato per ogni istanza.

>> Per questo `data` deve essere una **funzione** e non un oggetto: se fosse un unico oggetto condiviso, tutti i contatori mostrerebbero sempre lo stesso valore.
>> Verificato (Vue 3 + jsdom): dopo un click sul primo pulsante il risultato è `<button>1</button><button>0</button>`.

---
## Slide 58 – Il ciclo di vita di un componente

Ogni componente Vue attraversa diverse **fasi**, dalla creazione fino alla rimozione dall'interfaccia.

![[TW12-s058-1.png|500]]

- Creazione: `beforeCreate` → `created`
- Montaggio: `beforeMount` → `mounted`
- Montaggio → (Modifica reattiva rilevante) → Aggiornamento: `beforeUpdate` → `updated` (ripetuto a ogni nuovo aggiornamento)
- Montaggio / Aggiornamento → (Smontaggio) → Smontaggio: `beforeUnmount` → `unmounted`

- **Creazione:** Vue inizializza stato e funzionalità del componente.
- **Montaggio:** Vue crea e inserisce il DOM del componente.
- **Aggiornamento:** modifiche reattive possono aggiornare la vista.
- **Smontaggio:** il componente viene rimosso dall'applicazione.

>> Creazione e montaggio avvengono una sola volta, l'aggiornamento può ripetersi molte volte (una per ogni modifica dello stato che cambia la vista), lo smontaggio avviene una sola volta alla fine.
>> Uno smontaggio tipico: un componente dentro un `v-if` che diventa falso, oppure la vista del router che cambia (slide 72–73).

---
## Slide 59 – Lifecycle hooks

Gli **hook del ciclo di vita** sono metodi che Vue richiama automaticamente in determinate fasi.

| Hook | Quando viene eseguito | Utilizzo tipico |
|---|---|---|
| `created()` | Stato reattivo inizializzato, prima del montaggio | Inizializzazioni senza accesso al DOM |
| `mounted()` | Dopo il montaggio del DOM del componente | Accesso al DOM, integrazione con librerie esterne |
| `updated()` | Dopo un aggiornamento del DOM del componente | Operazioni che richiedono il DOM aggiornato |
| `unmounted()` | Dopo lo smontaggio del componente | Rimozione di listener, timer e altre risorse |

**Attenzione:** non è necessario definire tutti gli hook. Si implementano soltanto quelli utili al componente.

>> Gli hook si scrivono come metodi allo stesso livello di `data()` e `methods` (non dentro `methods`), e al loro interno `this` è l'istanza del componente.
>> In `created()` i dati di `data()` sono già leggibili, ma `this.$el` e gli elementi del template non esistono ancora: per toccare il DOM serve `mounted()`.

---
## Slide 60 – Esempio: `mounted()` e `unmounted()`

Un componente può registrare un listener esterno quando viene montato e rimuoverlo quando non serve più.

```js
app.component('misura-finestra', {
  data() {
    return { larghezza: window.innerWidth };
  },
  methods: {
    aggiorna() {
      this.larghezza = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener('resize', this.aggiorna);
  },
  unmounted() {
    window.removeEventListener('resize', this.aggiorna);
  },
  template: '<p>Larghezza: {{ larghezza }} px</p>'
});
```

- `mounted()` registra il listener sull'oggetto `window`.
- `aggiorna()` modifica lo stato quando cambia la dimensione della finestra.
- `unmounted()` rimuove il listener per evitare che rimanga attivo inutilmente.

**Nota:** il componente è registrato su `app`, creato precedentemente con `Vue.createApp(...)`.

>> Funziona perché nella Options API i metodi in `methods` sono già legati all'istanza: `this.aggiorna` è sempre la **stessa** funzione e al suo interno `this` resta il componente. Quindi `removeEventListener` riceve lo stesso riferimento passato ad `addEventListener` e il listener viene davvero rimosso (con una arrow function scritta al volo, `() => this.aggiorna()`, non sarebbe possibile).
>> Senza `unmounted()`, dopo la rimozione del componente il listener resterebbe su `window` (memory leak) e continuerebbe ad aggiornare un componente non più visibile.

---
## Slide 61 – Le props: dati dal padre al figlio

Le **props** permettono a un componente padre di fornire dati a un componente figlio, senza duplicarne la definizione.

**JavaScript**

```js
app.component('saluto-utente', {
  props: ['nome'],
  template: '<p>Ciao, {{ nome }}!</p>'
});
```

**HTML**

```html
<div id="app">
  <saluto-utente nome="Anna"></saluto-utente>
  <saluto-utente nome="Luca"></saluto-utente>
</div>
```

- `props` dichiara i dati che il componente può ricevere.
- `nome="Anna"` passa un valore testuale statico.
- Lo stesso componente viene **riutilizzato** con valori differenti.

**Risultato:** Ciao, Anna! / Ciao, Luca!

**Idea chiave:** il componente figlio riceve dati dal padre attraverso un'interfaccia esplicita.

>> Dentro il figlio una prop si usa come una proprietà di `data`: `{{ nome }}` nel template, `this.nome` nei metodi.

---
## Slide 62 – Props statiche e dinamiche

Le **props** permettono al componente padre di configurare un componente figlio, passando valori fissi oppure espressioni JavaScript.

**HTML del padre**

```html
<div id="app">
  <saluto nome="Anna"></saluto>
  <saluto :nome="utente"></saluto>
</div>
```

- `nome="Anna"`: stringa statica.
- `:nome="utente"`: valore della proprietà `utente` del padre.

**JavaScript**

```js
const app = Vue.createApp({
  data() {
    return { utente: 'Luca' };
  }
});

app.component('saluto', {
  props: ['nome'],
  template: '<p>Ciao, {{ nome }}!</p>'
});
app.mount('#app');
```

**Attenzione:** per passare numeri, booleani e oggetti come valori JavaScript, usare `v-bind` (`:`).

>> Verificato (Vue 3 + jsdom): il risultato è `Ciao, Anna!` e `Ciao, Luca!`. Se poi `utente` cambia nel padre, il secondo saluto si aggiorna da solo.
>> Il tranello: `eta="42"` passa la **stringa** `"42"`, mentre `:eta="42"` passa il **numero** 42; allo stesso modo `attivo="false"` è la stringa `"false"` (che è truthy), `:attivo="false"` è il booleano.
>> Errore tipico opposto: `:nome="Anna"` cerca una proprietà JavaScript chiamata `Anna` (che non esiste); per una stringa letterale con `:` servono gli apici interni, `:nome="'Anna'"`.

---
## Slide 63 – One-way data flow

In Vue le **props seguono un flusso monodirezionale**, dal componente padre verso il figlio.

![[TW12-s063-1.png|250]]

- Il **padre** possiede e aggiorna il dato.
- Il **figlio** riceve il valore attraverso una prop.
- Se il padre cambia il dato, la prop del figlio viene aggiornata.
- Il figlio **non deve assegnare direttamente** un nuovo valore alla prop.

**Idea chiave:** il componente che possiede lo stato ne controlla le modifiche.

>> Le props sono in sola lettura: se il figlio prova ad assegnarle (es. `this.nome = 'x'` o `@click="valore++"` su una prop) Vue non modifica il valore e in sviluppo stampa in console `[Vue warn]: Attempting to mutate prop "...". Props are readonly.` (verificato).
>> Per cambiare il dato il figlio deve chiederlo al padre con un evento (slide 64–65); se gli serve solo un valore iniziale da modificare localmente, può copiarlo nel proprio `data()`, es. `data() { return { locale: this.valore }; }`.

---
## Slide 64 – Eventi custom con `$emit`

Un componente figlio può **comunicare un evento al padre** senza modificarne direttamente lo stato.

**HTML del padre**

```html
<div id="app">
  <p>{{ messaggio }}</p>
  <pulsante-azione
    @conferma="conferma">
  </pulsante-azione>
</div>
```

**Metodo del padre**

```js
data() {
  return { messaggio: 'In attesa'};
},
methods: {
  conferma() { this.messaggio = 'Confermato'; }
}
```

**Componente figlio**

```js
app.component('pulsante-azione', {
  emits: ['conferma'],
  template: `
    <button @click="$emit('conferma')">
      Conferma
    </button>`
});
```

![[TW12-s064-1.png|500]]

Componente figlio → Evento: conferma → Componente padre

**Nota:** `emits` dichiara gli eventi che il componente può generare; il padre li ascolta con `v-on` (`@`).

>> In `@conferma="conferma"` i due nomi sono cose diverse: a sinistra c'è il nome dell'**evento** emesso dal figlio, a destra il **metodo** del padre da eseguire. Qui coincidono solo per scelta.
>> Verificato (Vue 3 + jsdom): prima del click il paragrafo mostra `In attesa`, dopo il click sul pulsante mostra `Confermato`.
>> `$emit` può passare anche dati: `$emit('conferma', 42)` e nel padre `conferma(valore) { ... }` riceve 42 come argomento.

---
## Slide 65 – Comunicazione tra padre e figlio

Le **props** trasferiscono dati verso il figlio; gli **eventi custom** comunicano al padre le azioni del figlio.

**HTML del padre**

```html
<contatore-figlio
  :valore="conteggio"
  @incrementa="conteggio++">
</contatore-figlio>
```

**Definizione del figlio**

```js
app.component('contatore-figlio', {
  props: ['valore'],
  emits: ['incrementa'],
  template: `
    <button @click="$emit('incrementa')">
      {{ valore }} (+1)
    </button>`
});
```

**Nel padre:** `conteggio` è definito in `data()`. Il figlio mostra il valore e richiede l'incremento, ma non modifica la prop.

>> Il giro completo: click nel figlio → evento `incrementa` → il padre esegue `conteggio++` → la prop `valore` del figlio si aggiorna → il pulsante si ridisegna.
>> Verificato (Vue 3 + jsdom, con `data() { return { conteggio: 0 }; }` nel padre): il pulsante mostra `0 (+1)`, dopo due click `2 (+1)`.

---
## Slide 66 – Gli slot: personalizzare il contenuto

Gli **slot** permettono al componente padre di inserire contenuto HTML in una posizione definita dal componente figlio.

**JavaScript: componente figlio**

```js
app.component('riquadro', {
  template: `
    <section class="riquadro">
      <slot>Contenuto predefinito</slot>
    </section>`
});
```

- `<slot>` indica dove inserire il contenuto.
- Il testo interno è usato se il padre non fornisce contenuto.

**HTML: componente padre**

```html
<div id="app">
  <riquadro>
    <strong>Avviso importante</strong>
  </riquadro>
  <riquadro></riquadro>
</div>
```

- Il primo mostra il contenuto del padre.
- Il secondo mostra il contenuto predefinito.

**Idea chiave:** le props passano **dati**, gli slot permettono di passare **contenuto da visualizzare**.

>> Verificato (Vue 3 + jsdom), HTML generato:
>> `<section class="riquadro"><strong>Avviso importante</strong></section><section class="riquadro">Contenuto predefinito</section>`
>> Il contenuto passato nello slot viene compilato nel contesto del **padre**: lì `{{ ... }}` può usare i dati del padre, non quelli del figlio.

---
## Slide 67 – Progettare componenti riutilizzabili

Un buon componente ha una **responsabilità chiara** e un'interfaccia esplicita per interagire con il resto dell'applicazione.

- **Props:** ricevono dati e configurazioni dal componente padre.
- **Eventi custom:** comunicano azioni o richieste di modifica al padre.
- **Slot:** permettono al padre di personalizzare il contenuto visualizzato.
- **Stato locale:** gestisce informazioni interne alle singole istanze.

![[TW12-s067-1.png|600]]

- Componente padre → Props e contenuto slot → Componente figlio
- Componente figlio → Eventi custom → Componente padre

**Buona pratica:** mantenere i componenti piccoli e comprensibili, evitando dipendenze non necessarie dal contesto esterno.

>> Riassunto rapido: verso il basso (padre → figlio) passano props e slot, verso l'alto (figlio → padre) passano solo eventi; lo stato locale (`data()`) resta dentro la singola istanza.

---
## Slide 68 – Sezione 6: Architettura delle applicazioni Vue

Sezione 6

**Architettura delle applicazioni Vue**

Navigazione SPA, Vue Router e comunicazione con il backend

---
## Slide 69 – Dai componenti alle applicazioni

Una SPA può essere organizzata in **componenti riutilizzabili** e **viste**, cioè componenti associati alle diverse schermate dell'applicazione.

![[TW12-s069-1.png|450]]

- Applicazione
	- Navigazione
	- Vista corrente
		- Componenti riutilizzabili

- **Applicazione:** coordina l'interfaccia e le sue funzionalità.
- **Viste:** rappresentano schermate come Home o Catalogo.
- **Componenti:** costruiscono le viste con elementi riutilizzabili.
- **Navigazione:** determina quale vista mostrare in base all'URL.

**Idea chiave:** cambiare vista in una SPA non richiede necessariamente il caricamento di un nuovo documento HTML.

>> SPA = *Single Page Application*: il browser carica una sola pagina HTML e poi JavaScript sostituisce solo la parte di interfaccia che cambia, invece di chiedere al server un nuovo documento a ogni link.

---
## Slide 70 – Perché serve un router?

Nelle SPA, la navigazione tra schermate deve essere coordinata con l'**URL** e la **cronologia del browser**.

- Associare un **percorso** a una vista dell'applicazione.
- Consentire la navigazione tramite link e pulsanti **Indietro/Avanti**.
- Permettere di aprire direttamente o condividere l'URL di una vista.
- Cambiare il componente visualizzato **senza ricaricare l'intero documento**.

![[TW12-s070-1.png|450]]

URL → Router → Vista Home / Vista Prodotti

**Vue Router** è il router ufficiale dell'ecosistema Vue.

>> Senza router si potrebbe cambiare vista con un semplice `v-if` su una variabile, ma l'URL resterebbe sempre lo stesso: niente pulsante Indietro, niente link da condividere, e ricaricando la pagina si torna alla schermata iniziale.

---
## Slide 71 – Vue Router 4 tramite CDN

Possiamo usare **Vue Router 4** con Vue 3 anche senza strumenti di compilazione, caricando le versioni globali delle librerie.

**HTML (`index.html`)**

```html
<div id="app">
  <!-- Qui verrà mostrata la vista -->
  <router-view></router-view>
</div>

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<script src="https://unpkg.com/vue-router@4/dist/vue-router.global.js"></script>
<script src="app.js"></script>
```

- Carichiamo prima **Vue**, poi **Vue Router**.
- La libreria espone l'oggetto globale `VueRouter`.
- `<router-view>` è il punto in cui comparirà la vista corrente.
- La configurazione del router sarà nel file `app.js`.

**Nota:** negli esempi del corso usiamo CDN e JavaScript, senza npm, Vite o TypeScript.

>> L'ordine degli script è obbligato: Vue Router usa `Vue`, e `app.js` usa sia `Vue` sia `VueRouter`, quindi ciascuno deve essere caricato dopo quelli da cui dipende.
>> Nella slide la seconda riga `<script>` è tagliata dal riquadro scorrevole; qui è riportata per intero.
>> `vue.global.js` è la build di sviluppo (con i warning in console); per la produzione esiste `vue.global.prod.js`.

---
## Slide 72 – Definire le rotte

Ogni **rotta** associa un percorso URL a un componente. Per iniziare usiamo la **navigazione hash**, che non richiede configurazioni del server per gestire i percorsi.

**JavaScript (`app.js`)**

```js
const Home = { template: '<h2>Home</h2>' };
const Prodotti = { template: '<h2>Prodotti</h2>' };

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/prodotti', component: Prodotti }
  ]
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');
```

- `routes` definisce l'associazione tra percorsi e componenti.
- `createWebHashHistory()` usa la parte dell'URL dopo `#`.
- `app.use(router)` installa il router nell'applicazione.

**Esempi di URL:**

- `/#/` → Home
- `/#/prodotti` → Prodotti

>> Perché l'hash non richiede configurazioni del server: la parte dopo `#` non viene mai inviata al server. Che l'URL sia `index.html#/` o `index.html#/prodotti`, il server riceve sempre la richiesta della stessa pagina e il percorso lo legge Vue Router nel browser.
>> Con `createWebHistory()` gli URL sarebbero "puliti" (`/prodotti`), ma ricaricando la pagina il browser chiederebbe davvero `/prodotti` al server, che va configurato per rispondere sempre con `index.html`.
>> `Home` e `Prodotti` sono semplici oggetti-componente, non registrati con `app.component()`: vengono usati solo dal router.

---
## Slide 73 – Navigare tra le viste: `router-link` e `router-view`

Vue Router mette a disposizione due componenti per collegare la **navigazione** alla vista visualizzata.

**HTML**

```html
<div id="app">
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/prodotti">Prodotti</router-link>
  </nav>
  <router-view></router-view>
</div>
```

- `router-link` genera un collegamento per navigare tra le rotte dell'applicazione.
- `to` indica la destinazione, definita nella configurazione del router.
- `router-view` visualizza il componente associato alla rotta corrente.
- La navigazione avviene **senza caricare un nuovo documento HTML**.

**Nota:** con `createWebHashHistory()`, il router gestisce URL come `/#/prodotti` anche se nel template scriviamo `to="/prodotti"`.

>> `router-link` produce un normale `<a href="#/prodotti">`, ma intercetta il click: aggiorna URL e cronologia e cambia la vista senza ricaricare. Al link della rotta attiva aggiunge la classe CSS `router-link-active` (utile per evidenziare la voce del menu).
>> Il `<nav>` resta sempre visibile; cambia solo ciò che sta dentro `<router-view>`.

---
## Slide 74 – Rotte dinamiche e parametri nell'URL

Le **rotte dinamiche** permettono di utilizzare lo stesso componente per risorse diverse, identificandole tramite un parametro nell'URL.

```js
const DettaglioProdotto = {
  template: `
    <p>Prodotto: {{ $route.params.id }}</p>
  `
};
```

- `:id` indica un **segmento dinamico** della rotta.
- `$route.params.id` contiene il valore presente nell'URL.
- Il parametro è inizialmente una **stringa**.

```js
const routes = [
  {
    path: '/prodotti/:id',
    component: DettaglioProdotto
  }
];
```

**Esempi di URL**

- `/#/prodotti/12`
- `/#/prodotti/25`

**Attenzione:** il parametro identifica una risorsa, ma non ne recupera automaticamente i dati dal server.

>> Con `/#/prodotti/12` la vista mostra `Prodotto: 12`. Il valore è la stringa `"12"`: per usarlo come numero serve una conversione, es. `Number(this.$route.params.id)`.
>> Il nome dopo i due punti è libero: con `path: '/utenti/:nome'` il valore sarebbe in `$route.params.nome`.
>> Tranello: passando da `/prodotti/12` a `/prodotti/25` Vue Router **riusa** la stessa istanza di `DettaglioProdotto`, quindi `mounted()` non viene richiamato. Il template si aggiorna da solo, ma un caricamento dati fatto in `mounted()` (slide 77) andrebbe ripetuto osservando `$route.params.id` (es. con `watch`).

---
## Slide 75 – Navigazione programmatica

Oltre ai collegamenti nel template, Vue Router permette di **cambiare rotta dal codice JavaScript**, per esempio dopo un'azione dell'utente.

**JavaScript**

```js
methods: {
  apriProdotto(id) {
    this.$router.push({
      path: `/prodotti/${id}`
    });
  }
}
```

- `this.$router` consente di controllare la navigazione.
- `push()` aggiunge una nuova voce alla cronologia.
- `replace()` cambia rotta sostituendo la voce corrente.
- `this.$route` contiene invece le informazioni sulla rotta attuale.

**Esempio:** `this.$router.push('/prodotti/12')` apre la vista del prodotto 12 senza ricaricare il documento.

>> Attenzione a non confondere `$router` (il router, con i metodi per navigare: `push`, `replace`, `back`…) e `$route` (la rotta corrente, da leggere: `path`, `params`…).
>> Differenza pratica: dopo `push()` il pulsante Indietro riporta alla pagina precedente; dopo `replace()` no, perché la voce precedente è stata sovrascritta (utile ad esempio dopo un login).
>> `push()` accetta sia una stringa (`'/prodotti/12'`) sia un oggetto (`{ path: ... }`), come nel codice della slide.

---
## Slide 76 – Stato locale e stato condiviso

- **Stato locale:** appartiene a un componente, ad esempio il valore di un campo o l'apertura di un menu.
- **Stato condiviso:** deve essere utilizzato da più componenti, ad esempio il carrello o l'utente autenticato.
- Se due componenti fratelli usano lo stesso dato, possiamo **spostare lo stato nel loro antenato comune** e comunicarlo tramite props ed eventi.
- Quando l'applicazione cresce, questa gestione può diventare complessa: esistono strumenti dedicati come **Pinia**.

![[TW12-s076-1.png|450]]

- Padre: stato condiviso → Props → Componente A / Componente B
- Componente A / Componente B → Eventi → Padre: stato condiviso

>> Il problema nasce quando l'antenato comune è molto in alto nell'albero: il dato va passato come prop attraverso componenti intermedi che non lo usano (*prop drilling*). Pinia è la libreria ufficiale di Vue per la gestione dello stato: tiene lo stato condiviso in uno *store* centrale a cui i componenti accedono direttamente.

---
## Slide 77 – Recuperare dati tramite API

In Vue possiamo utilizzare `fetch()` per ottenere dati da un server e memorizzarli nello **stato reattivo** del componente.

```js
Vue.createApp({
  data() {
    return { prodotti: [] };
  },
  async mounted() {
    const risposta = await fetch('/api/prodotti');
    if (!risposta.ok) throw new Error('Errore HTTP');
    this.prodotti = await risposta.json();
  }
}).mount('#app');
```

```html
<div id="app">
  <ul>
    <li v-for="p in prodotti" :key="p.id">
      {{ p.nome }}
    </li>
  </ul>
</div>
```

**Nota**: `/api/prodotti` è un endpoint di esempio. Il caricamento può essere avviato in `mounted()` oppure in risposta ad altre interazioni.

- `mounted()` avvia la richiesta dopo il montaggio.
- La risposta JSON aggiorna `prodotti`.
- Vue aggiorna automaticamente la lista.

>> All'inizio `prodotti` è `[]` e la lista è vuota; quando arriva la risposta l'assegnazione `this.prodotti = ...` è reattiva e Vue disegna un `<li>` per ogni prodotto. Il codice presuppone che il server risponda con un array di oggetti con almeno `id` e `nome`.
>> `fetch()` fallisce (rigetta la Promise) solo per errori di rete: una risposta 404 o 500 arriva normalmente, per questo serve il controllo `risposta.ok`.
>> Qui l'errore lanciato non è gestito da nessuno (finisce in console) e l'utente non vede niente: la slide successiva aggiunge la gestione di caricamento ed errori.

---
## Slide 78 – Gestire caricamento ed errori

Una richiesta HTTP è **asincrona**: l'interfaccia deve distinguere caricamento, successo ed errore.

**Stato e richiesta (frammento Options API)**

```js
data() {
  return {
    prodotti: [], loading: false, error: ''
  };
},
async mounted() {
  this.loading = true;
  try {
    const r = await fetch('/api/prodotti');
    if (!r.ok) throw new Error('Errore HTTP');
    this.prodotti = await r.json();
  } catch (e) { this.error = e.message;
  } finally { this.loading = false;}
}
```

**Template**

```html
<p v-if="loading">Caricamento...</p>
<p v-else-if="error">{{ error }}</p>
<ul v-else>
  <li v-for="p in prodotti" :key="p.id">
    {{ p.nome }}
  </li>
</ul>
```

- `loading` segnala la richiesta in corso.
- `error` conserva l'eventuale messaggio di errore.
- `finally` termina lo stato di caricamento.

>> I tre casi visibili: durante la richiesta `Caricamento...`; se il server risponde con errore (es. 404) `Errore HTTP`; se la rete non risponde il messaggio dell'eccezione di `fetch` (in Chrome `Failed to fetch`); altrimenti la lista.
>> `finally` viene eseguito sia in caso di successo sia di errore: così `loading` torna a `false` in ogni caso e il messaggio di caricamento non resta bloccato a schermo.
>> `error: ''` funziona con `v-else-if` perché la stringa vuota è falsy, mentre un messaggio non vuoto è truthy.

---
## Slide 79 – Vue: dalla navigazione ai dati

In una SPA, **routing, componenti e stato reattivo** collaborano per mostrare le informazioni richieste dall'utente.

![[TW12-s079-1.png|250]]

URL e navigazione → Vue Router → Componente vista → (Se necessario) API / fetch → Stato reattivo → DOM aggiornato

- **Vue Router** seleziona la vista associata all'URL.
- Il **componente** gestisce interazioni e dati necessari alla vista.
- Le **API** forniscono informazioni dal backend, quando necessario.
- Lo **stato reattivo** determina ciò che viene visualizzato.

**Conclusione:** Vue permette di costruire SPA modulari mantenendo separati navigazione, dati e presentazione, senza dover gestire manualmente ogni aggiornamento del DOM.

>> Esempio del giro completo: l'utente apre `/#/prodotti/12` → Vue Router mostra `DettaglioProdotto` → in `mounted()` il componente chiama `fetch('/api/prodotti/12')` → la risposta finisce in `data()` → Vue aggiorna il DOM da solo. Il componente può anche passare direttamente allo stato senza API, se i dati sono già disponibili (la freccia diretta nel diagramma).

---
## Riassunto

>> **MPA e SPA**
>> - **MPA**: ogni azione chiede al server una nuova pagina HTML completa, con ricaricamento e perdita dello stato in pagina.
>> - **SPA**: si carica una pagina sola. Poi JavaScript chiede **dati** (JSON) al server e aggiorna solo le parti di DOM che servono; anche la navigazione (URL) la gestisce il client.
>> - Vantaggi delle SPA: fluidità, meno traffico. Criticità: caricamento iniziale, SEO, accessibilità, gestione dello stato e della cronologia.
>> - Il server resta responsabile di dati, autenticazione e **validazione**, che va sempre ripetuta lato server.
>>
>> **Pattern e framework**
>> - **MVC**: Model (dati), View (presentazione), Controller (gestisce l'input). **MVVM**: il ViewModel espone lo stato alla View tramite **data binding**; in Vue il template è la View e l'istanza del componente è il ViewModel.
>> - **Rendering dichiarativo**: si descrive *come deve apparire* l'interfaccia in funzione dello stato, invece di modificare il DOM a mano. Con la **reattività**, quando lo stato cambia Vue aggiorna il DOM da solo.
>> - Angular (framework completo, TypeScript), React (libreria per la UI, JSX), Vue (**progressivo**: si può adottare un pezzo alla volta, anche via CDN).
>>
>> **Sintassi di base (Options API via CDN)**
>> - `Vue.createApp({ data() { return {...} }, methods: {...} }).mount('#app')`.
>> - `{{ espressione }}` per il testo. `v-bind:attr` (`:attr`) per gli attributi. `v-on:evento` (`@evento`) per gli eventi, con modificatori come `.prevent` e `.stop`. **`v-model`** per il binding bidirezionale con i campi delle form.
>> - **computed**: valori derivati, ricalcolati solo quando cambiano le dipendenze (cache). **methods**: ricalcolati a ogni chiamata. **watch**: esegue codice in risposta a un cambiamento (effetti collaterali).
>> - `v-if` crea o distrugge l'elemento; `v-show` lo nasconde con CSS (meglio se cambia spesso). `v-for="x in lista"` sempre con **`:key`** univoca. Mai `v-if` e `v-for` sullo stesso elemento: si filtra con una computed oppure si usa `<template>`.
>> - `:class` e `:style` accettano oggetti o array.
>>
>> **Componenti**
>> - Un componente è un pezzo di interfaccia riutilizzabile, con template, stato (`data` locale a ogni istanza) e logica propri.
>> - **Ciclo di vita**: hook come `created`, `mounted` (DOM disponibile: avvio di timer e fetch) e `unmounted` (pulizia).
>> - **Props**: dati dal padre al figlio, a sola lettura (**one-way data flow**). **`$emit`**: eventi dal figlio al padre. **Slot**: il padre inserisce contenuto dentro il figlio.
>>
>> **Router e dati**
>> - **Vue Router** associa le rotte (URL) ai componenti: `<router-link>` per navigare, `<router-view>` dove compare la vista. Rotte dinamiche come `/prodotti/:id` (parametro in `$route.params`), navigazione da codice con `$router.push()`.
>> - Lo stato condiviso fra più viste va tenuto in un posto comune. I dati da API si caricano con `fetch` (spesso in `mounted`), gestendo gli stati "caricamento" ed "errore".
