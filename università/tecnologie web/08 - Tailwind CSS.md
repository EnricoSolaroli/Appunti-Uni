[Tailwind-CSS_Tecnologie-Web_2026-2027](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/Tailwind-CSS_Tecnologie-Web_2026-2027.pdf>)

# Tailwind CSS

## Indice

1. **Introduzione: il CSS e i framework tradizionali** (slide 1–9)
	- [[#Slide 1 – Tailwind CSS|Presentazione della lezione ed esempi di utility]]
	- [[#Slide 2 – Indice|Percorso della lezione]]
	- [[#Slide 4 – «Devo scrivere tutto quel CSS a mano…»|CSS scritto a mano con convenzione BEM]]
	- [[#Slide 5 – Il ruolo del CSS|Ruolo del CSS e separazione HTML/CSS/JS]]
	- [[#Slide 6 – I problemi del CSS su larga scala|Problemi del CSS nei grandi progetti]]
	- [[#Slide 7 – Cos'è un framework CSS|Definizione di framework CSS]]
	- [[#Slide 8 – I framework tradizionali|Bootstrap, Bulma, Foundation]]
	- [[#Slide 9 – I limiti dei framework tradizionali|Limiti dei framework tradizionali]]
2. **Il paradigma utility-first** (slide 10–13)
	- [[#Slide 10 – Il paradigma utility-first|Tailwind come framework utility-first]]
	- [[#Slide 11 – Il principio utility-first|Una classe = una singola proprietà CSS]]
	- [[#Slide 12 – CSS tradizionale e Tailwind a confronto|Confronto CSS tradizionale vs Tailwind]]
	- [[#Slide 13 – Cos'è una utility class|Definizione di utility class]]
3. **Storia ed ecosistema** (slide 14–19)
	- [[#Slide 14 – Parte 02: Storia ed ecosistema|Introduzione alla parte]]
	- [[#Slide 15 – Adam Wathan, il creatore|Adam Wathan e Tailwind Labs]]
	- [[#Slide 16 – Le versioni|Cronologia delle versioni e ingresso in Shopify]]
	- [[#Slide 17 – Perché Tailwind si è diffuso|Motivi della diffusione]]
	- [[#Slide 18 – L'ecosistema|Tailwind Plus e Headless UI]]
	- [[#Slide 19 – Il compilatore Just-In-Time|Compilatore Just-In-Time]]
4. **Installazione: CDN e pipeline con Vite** (slide 20–28)
	- [[#Slide 20 – Parte 03: Installazione e integrazione|Introduzione alla parte]]
	- [[#Slide 21 – Due modi per usare Tailwind|CDN o pipeline avanzata]]
	- [[#Slide 22 – Installazione via CDN|Installazione via CDN]]
	- [[#Slide 23 – Una pagina completa con il CDN|Esempio di pagina completa con il CDN]]
	- [[#Slide 24 – La pipeline avanzata|Pipeline Node.js, npm, Vite]]
	- [[#Slide 25 – Setup con Vite: progetto e dipendenze|Setup con Vite: creazione progetto e installazione]]
	- [[#Slide 26 – Setup con Vite: plugin e CSS|Plugin Vite e `@import "tailwindcss"`]]
	- [[#Slide 27 – Configurazione con `@theme`|Configurazione nel CSS con @theme]]
	- [[#Slide 28 – CDN o pipeline?|Confronto CDN vs pipeline]]
5. **Utility classes: layout e dimensioni** (slide 29–34)
	- [[#Slide 29 – Parte 04: Utility classes|Introduzione alla parte]]
	- [[#Slide 30 – Display, flexbox e grid|Display, flexbox e grid]]
	- [[#Slide 31 – Position e offset|Position e offset]]
	- [[#Slide 32 – Margin e padding|Margin, padding e scala delle spaziature]]
	- [[#Slide 33 – Larghezza e altezza|Larghezza e altezza]]
	- [[#Slide 34 – Da CSS a Tailwind: un layout con sidebar|Esempio: layout con sidebar]]
6. **Utility classes: tipografia, colori e bordi** (slide 35–37)
	- [[#Slide 35 – Tipografia|Dimensione, peso e allineamento del testo]]
	- [[#Slide 36 – Colori|Palette di colori e tonalità]]
	- [[#Slide 37 – Bordi e arrotondamenti|Bordi e arrotondamenti]]
7. **Responsive design mobile first** (slide 38–40)
	- [[#Slide 38 – Mobile first|Approccio mobile first]]
	- [[#Slide 39 – I breakpoint|I cinque breakpoint predefiniti]]
	- [[#Slide 40 – Responsive senza media query|Prefissi responsive al posto delle media query]]
8. **Tips: valori arbitrari, centratura e strumenti** (slide 41–44)
	- [[#Slide 41 – Parte 05: Tips|Introduzione alla parte]]
	- [[#Slide 42 – Valori arbitrari|Valori arbitrari tra parentesi quadre]]
	- [[#Slide 43 – Centrare un elemento con flexbox|Centrare un elemento con flexbox]]
	- [[#Slide 44 – Strumenti per lo sviluppo|IntelliSense e plugin Prettier]]
9. **Tailwind su misura con il CDN** (slide 45–50)
	- [[#Slide 45 – Parte 06: Tailwind su misura|Introduzione alla parte]]
	- [[#Slide 46 – Il blocco di stile di Tailwind|Blocco `<style type="text/tailwindcss">`]]
	- [[#Slide 47 – Colori personalizzati|Colori personalizzati con --color-*]]
	- [[#Slide 48 – Font personalizzati|Font personalizzati con --font-*]]
	- [[#Slide 49 – Non solo colori e font|Altri namespace del tema: text, radius, shadow, breakpoint, spacing]]
	- [[#Slide 50 – Una pagina su misura, solo con il CDN|Esempio di pagina personalizzata]]
10. **Il problema: struttura e stile mescolati** (slide 51–53)
	- [[#Slide 51 – Parte 07: Il problema|Introduzione alla parte]]
	- [[#Slide 52 – Svantaggi e vantaggi|Svantaggi e vantaggi di Tailwind]]
	- [[#Slide 53 – Il problema in pratica|Esempio: 38 classi per tre card]]
11. **L'approccio purista: @apply, variabili del tema e CLI** (slide 54–60)
	- [[#Slide 54 – Parte 08: Per i puristi|Introduzione alla parte]]
	- [[#Slide 55 – HTML semantico, stile nel CSS|HTML semantico e @apply in @layer components]]
	- [[#Slide 56 – Stati e breakpoint dentro `@apply`|Varianti hover, focus-visible e md dentro @apply]]
	- [[#Slide 57 – Oppure CSS classico, con le variabili del tema|CSS classico con var() e --spacing()]]
	- [[#Slide 58 – E se volessi un file .css separato?|File CSS separato con la CLI di Tailwind]]
	- [[#Slide 59 – Come evitare le ripetizioni|Strumenti contro le ripetizioni (@theme, @apply, @utility)]]
	- [[#Slide 60 – Purista o utility-first?|Confronto purista vs utility-first]]
12. **Altre utility e approfondimenti** (slide 61)
	- [[#Slide 61 – C'è molto altro|Altre utility e documentazione ufficiale]]

---
## Slide 1 – Tailwind CSS

**Lezione · Framework CSS utility-first**

**Tailwind *CSS***

Architettura · Integrazione · Utilizzo avanzato

- `md:grid-cols-3`
- `flex`
- `p-4`
- `bg-teal-700`
- `rounded-lg`
- `text-center`
- `shadow-md`
- `hover:scale-105`

>> Le "pillole" sono già esempi di utility classes Tailwind (v4), ognuna corrisponde a una piccola regola CSS:
>> - `flex` → `display: flex`
>> - `p-4` → `padding: 1rem` (16px: la scala di spaziatura di default è `--spacing: 0.25rem`, quindi 4 × 0.25rem)
>> - `bg-teal-700` → `background-color` con il colore teal, tonalità 700 della palette
>> - `rounded-lg` → `border-radius: 0.5rem`
>> - `text-center` → `text-align: center`
>> - `shadow-md` → `box-shadow` di media intensità
>> - `hover:scale-105` → al passaggio del mouse (pseudo-classe `:hover`) l'elemento viene scalato al 105%
>> - `md:grid-cols-3` → da 48rem (768px) in su (media query) `grid-template-columns: repeat(3, minmax(0, 1fr))`, cioè griglia a 3 colonne

---
## Slide 2 – Indice

**Il percorso**

| | Parte | Contenuto |
|---|---|---|
| 01 | **Introduzione** | Framework CSS e approccio utility-first |
| 02 | **Storia ed ecosistema** | Versioni, diffusione e strumenti |
| 03 | **Installazione** | CDN, pipeline con Vite e configurazione |
| 04 | **Utility classes** | Layout, tipografia, colori e responsive |
| 05 | **Tips** | Valori arbitrari, flexbox e strumenti utili |
| 06 | **Tailwind su misura** | Colori, font e tema, solo con il CDN |
| 07 | **Il problema** | Struttura e stile nello stesso file |
| 08 | **Per i puristi** | HTML e CSS separati, senza ripetizioni |

---
## Slide 3 – Parte 01: Introduzione

Dal CSS scritto a mano al paradigma utility-first

---
## Slide 4 – «Devo scrivere tutto quel CSS a mano…»

*«Devo scrivere tutto quel CSS a mano…»*

```css
.header { display: flex; }
.header__logo { width: 120px; }
.nav { display: flex; gap: 24px; }
.nav__link { color: #334155; }
.nav__link:hover { color: #0f766e; }
.hero { padding: 96px 24px; }
.hero__title { font-size: 3rem; }
.hero__text { max-width: 60ch; }
.btn { padding: .5rem 1rem; }
.btn--primary { color: #fff; }
.btn--primary:hover { opacity: .9; }
.card { border-radius: 8px; }
.card__title { font-weight: 600; }
.card__body { padding: 1.5rem; }
.grid-3 { display: grid; gap: 2rem; }
.badge { font-size: .75rem; }
.footer { margin-top: 4rem; }
.footer__link { color: #64748b; }
.modal { position: fixed; }
```

>> Il codice (che nella slide sfuma verso il basso, a suggerire che "non finisce mai") usa la convenzione di nomi **BEM** (Block__Element--Modifier): `.card__title` è l'elemento `title` del blocco `card`, `.btn--primary` è la variante `primary` del blocco `btn`. È un modo ordinato di scrivere CSS a mano, ma in un sito reale le regole diventano centinaia e ogni nuovo componente richiede di inventare nomi e scrivere nuove regole.

---
## Slide 5 – Il ruolo del CSS

Il **CSS** (Cascading Style Sheets) è il linguaggio che definisce l'aspetto grafico delle pagine web.

**Con il CSS controlliamo**
- layout
- colori
- tipografia
- dimensioni
- posizionamento
- animazioni e transizioni

**Nel modello classico del web**

| Linguaggio | Ruolo |
|---|---|
| `HTML` | Struttura della pagina |
| **`CSS`** | **Stile e layout della pagina** |
| `JS` | Comportamento dinamico della pagina |

>> È il principio di **separazione delle responsabilità** (separation of concerns): contenuto/struttura in HTML, presentazione in CSS, comportamento in JavaScript. Tailwind, come si vedrà, mette parzialmente in discussione questa separazione, spostando lo stile nel markup tramite classi.

---
## Slide 6 – I problemi del CSS su larga scala

Nei **progetti di grandi dimensioni**, la gestione del CSS può diventare complessa. I problemi più comuni:

1. Fogli di stile molto grandi
2. Classi CSS difficili da mantenere
3. Regole duplicate
4. Conflitti tra stili
5. Codice difficile da riutilizzare
6. Coerenza visiva difficile da mantenere

>> I "conflitti tra stili" nascono dalla **cascata** e dalla **specificità**: tutte le regole vivono in uno spazio di nomi globale, quindi una regola scritta per un componente può sovrascriverne involontariamente un'altra (o essere sovrascritta da un selettore più specifico). Spesso si finisce per aggiungere `!important` o selettori sempre più lunghi, peggiorando la manutenibilità.

>> **Vedi anche** → [[06 - CSS intro, box model e flexbox#Slide 20 – Specificità del selettore|nota 06, slide 20–22: specificità e cascata, all'origine dei conflitti tra regole]]

---
## Slide 7 – Cos'è un framework CSS

Una **libreria di stili predefiniti**, progettata per semplificare la costruzione delle interfacce web.

**Di solito fornisce**
- sistemi di griglia
- componenti grafici predefiniti
- classi per layout e tipografia
- **sistemi responsive** — *IMPORTANTE*
- componenti UI comuni

**Obiettivo principale**

*Ridurre il tempo necessario per sviluppare interfacce web.*

---
## Slide 8 – I framework tradizionali

![[TW08-s008-1.png]]

| Framework | Sito | Un bottone si scrive così: |
|---|---|---|
| **Bootstrap** | getbootstrap.com | `class="btn btn-primary"` |
| **Bulma** | bulma.io | `class="button is-primary"` |
| **Foundation** | get.foundation | `class="button primary"` |

**Componenti già pronti:** navbar · bottoni · modali · tabelle · form · sistemi di griglia

>> Nei framework tradizionali le classi sono **semantiche a livello di componente**: `btn-primary` significa "bottone principale" e porta con sé un intero pacchetto di proprietà (padding, colore, bordo, hover…) decise dal framework. Si usa il componente così com'è, e per cambiarlo bisogna sovrascrivere le regole del framework con altro CSS.

---
## Slide 9 – I limiti dei framework tradizionali

1. **Design** spesso molto simile tra siti diversi
2. Difficoltà di **personalizzazione**
3. Grande quantità di **CSS inutilizzato**
4. **Componenti** difficili da adattare a design personalizzati
5. File CSS spesso **molto pesanti**

*Questi problemi hanno portato alla ricerca di approcci alternativi.* →

---
## Slide 10 – Il paradigma utility-first

**Tailwind CSS** è un framework CSS **utility-first**: le interfacce si costruiscono direttamente nel markup HTML.

| Framework tradizionali | Tailwind CSS |
|---|---|
| Componenti grafici completi, da adattare al proprio design. | Molte piccole classi atomiche, combinate direttamente nell'HTML. |
| `class="btn btn-primary"` | `class="p-4 bg-blue-500 text-white rounded-lg"` |

Combinando le utility classes si costruiscono layout complessi, **senza scrivere CSS personalizzato**.

---
## Slide 11 – Il principio utility-first

*Ogni classe controlla una **singola** proprietà CSS.*

>> Le classi si dicono "atomiche": come atomi, non sono ulteriormente scomponibili e si combinano tra loro. Lo stile di un elemento è la **composizione** di tante classi, invece di un'unica classe che le contiene tutte.

---
## Slide 12 – CSS tradizionale e Tailwind a confronto

**CSS tradizionale**

*style.css + index.html*
```css
.card {
  padding: 1rem;
  background-color: #2b7fff;
  color: white;
  border-radius: 0.5rem;
}
```
```html
<div class="card">Ciao!</div>
```

**Tailwind CSS**

*index.html*
```html
<div class="p-4 bg-blue-500 text-white rounded-lg">
  Ciao!
</div>
```

**Risultato**

![[TW08-s012-1.png]]

Stesso risultato, con **4 classi** e nessuna regola CSS da scrivere.

>> Corrispondenza uno a uno tra classi e dichiarazioni della regola `.card`: `p-4` ↔ `padding: 1rem`, `bg-blue-500` ↔ `background-color: #2b7fff`, `text-white` ↔ `color: white`, `rounded-lg` ↔ `border-radius: 0.5rem`. In Tailwind v4 i colori sono definiti in `oklch(...)`; `#2b7fff` è l'equivalente esadecimale di `blue-500`.

---
## Slide 13 – Cos'è una utility class

Una **utility class** è una classe CSS che rappresenta **una singola regola CSS**.

| Classe | Cosa fa | Proprietà CSS | Valore |
|---|---|---|---|
| `p-4` | spaziatura interna | `padding` | `1rem` |
| `text-white` | colore del testo | `color` | `#fff` |
| `bg-blue-500` | colore di sfondo | `background-color` | blu 500 |
| `rounded-lg` | bordi arrotondati | `border-radius` | `0.5rem` |

>> Il nome segue quasi sempre lo schema **proprietà-valore**: il prefisso indica la proprietà (`p` = padding, `bg` = background, `text` = colore/dimensione del testo, `rounded` = border-radius) e il suffisso il valore su una scala predefinita. Per la spaziatura il numero è un multiplo di `0.25rem` (4px): `p-1` = 4px, `p-2` = 8px, `p-4` = 16px, `p-8` = 32px. Per i colori il numero (50, 100, …, 900, 950) è la tonalità: più alto = più scuro.

---
## Slide 14 – Parte 02: Storia ed ecosistema

Chi ha creato Tailwind, come è cresciuto e cosa gli ruota attorno

---
## Slide 15 – Adam Wathan, il creatore

Sviluppatore e imprenditore specializzato nello sviluppo web moderno: ha creato **Tailwind CSS** e fondato **Tailwind Labs**.

**È noto anche per**
- contenuti educativi: corsi e screencast
- libri sullo sviluppo web, come *Refactoring UI*
- strumenti per sviluppatori

> *“Quando ho iniziato a lavorare su Tailwind, oltre nove anni fa, il mio unico obiettivo era creare qualcosa che rendesse più facile costruire interfacce belle per i miei progetti.”*
> — Adam Wathan, settembre 2026 (trad.)

Tra gli autori originali anche Jonathan Reinink, David Hemphill e Steve Schoger · adamwathan.me

---
## Slide 16 – Le versioni

Lo sviluppo continuo ha reso Tailwind uno standard del frontend moderno.

![[TW08-s016-1.png]]

| Versione | Data |
|---|---|
| v1.0 | mag 2019 |
| v2.0 | nov 2020 |
| v3.0 | dic 2021 |
| v3.4 | dic 2023 |
| v4.0 | gen 2025 |
| v4.1 | apr 2025 |
| v4.2 | feb 2026 |
| **v4.3** | mag 2026 — **ATTUALE** |

*9 settembre 2026* — **Tailwind Labs entra in Shopify.** Il framework resta open source con licenza MIT ed è ancora sviluppato dal team originale.

>> Le tappe principali: la v3.0 ha reso il motore Just-In-Time (slide 19) il comportamento predefinito; la v4.0 ha riscritto il motore e spostato la configurazione dal file JavaScript `tailwind.config.js` direttamente nel CSS (direttiva `@theme`, vista più avanti). La licenza MIT è una licenza open source permissiva: il codice si può usare, modificare e ridistribuire liberamente, anche in progetti commerciali.

---
## Slide 17 – Perché Tailwind si è diffuso

**110M**
**installazioni ogni settimana**
Fonte: Tailwind Labs, settembre 2026

Oggi è uno dei framework CSS **più utilizzati** nel frontend moderno.

**Merito di**
1. Documentazione estremamente chiara
2. Community attiva
3. Forte integrazione con i framework JavaScript moderni
4. Grande flessibilità nella progettazione delle interfacce

---
## Slide 18 – L'ecosistema

**Componenti pronti · ex Tailwind UI**

**Tailwind Plus**
Libreria ufficiale di componenti professionali costruiti con Tailwind CSS.
- navbar
- dashboard
- modali
- form complessi
- layout completi

**Da settembre 2026 non accetta nuove iscrizioni: chi l'ha già acquistato mantiene l'accesso.**

**Componenti accessibili · React e Vue**

**Headless UI**
Componenti accessibili **senza stile predefinito**.
- la logica del componente è già implementata
- lo stile si personalizza interamente con Tailwind

headlessui.com

>> "Headless" (senza testa) significa che il componente fornisce solo il **comportamento** (apertura/chiusura di un menu, navigazione da tastiera, attributi ARIA per l'accessibilità) ma nessun aspetto grafico: l'aspetto lo decide lo sviluppatore con le classi Tailwind. È l'opposto dei componenti di Bootstrap, che arrivano già con uno stile.

---
## Slide 19 – Il compilatore Just-In-Time

Una delle innovazioni più importanti: il CSS viene generato **solo per le classi effettivamente usate** nel progetto, e la dimensione del file finale si riduce drasticamente.

![[TW08-s019-1.png]]

1. **Sorgenti** — I file del progetto: `index.html`, `App.vue`, `main.js`
2. **Scansione** — Le classi trovate: `flex`, `p-4`, `bg-blue-500`, `text-white`, `rounded-lg`
3. **Output** — Il CSS generato:

```css
.flex { display: flex }
.p-4 { padding: 1rem }
… e nient'altro
```

In Tailwind v4 il motore è stato riscritto: trova da solo i file del progetto, senza configurazione, e le build incrementali si misurano in microsecondi.

>> È la risposta al limite n. 3 dei framework tradizionali (slide 9, "grande quantità di CSS inutilizzato"): Bootstrap fornisce l'intero foglio di stile anche se si usano tre componenti, mentre Tailwind, potendo generare migliaia di utility possibili, produce solo quelle che compaiono nei sorgenti.
>>
>> Conseguenza pratica: lo scanner cerca le classi come **testo completo** nei file. Una classe costruita dinamicamente, ad esempio `'bg-' + colore + '-500'` in JavaScript, non viene trovata e quindi il suo CSS non viene generato; bisogna scrivere i nomi delle classi per intero (`bg-red-500`, `bg-blue-500`).

---
## Slide 20 – Parte 03: Installazione e integrazione

Dal CDN a una pipeline con Vite

---
## Slide 21 – Due modi per usare Tailwind

Esistono diversi metodi per utilizzare Tailwind CSS: la scelta dipende dal tipo di progetto.

**Metodo 1 — CDN**
Uno script nel file HTML: nessuna installazione, nessuna build.

```html
<script src="…/@tailwindcss/browser@4">
```

**Metodo 2 — Pipeline avanzata**
Tailwind entra nel processo di build del progetto, insieme agli strumenti di sviluppo.

`Node.js` → `npm` → `Vite`

>> Con il CDN la generazione del CSS avviene **nel browser**, a ogni caricamento della pagina: comodo per prototipi ed esercizi, ma sconsigliato in produzione. Con la pipeline, invece, il CSS viene generato **una volta in fase di build** sul computer dello sviluppatore e il browser riceve un normale file `.css` già ottimizzato. Node.js è l'ambiente che esegue JavaScript fuori dal browser, npm è il gestore di pacchetti con cui si installa Tailwind, Vite è lo strumento di build/server di sviluppo che integra Tailwind tramite un plugin.
---
## Slide 22 – Installazione via CDN

Il metodo più semplice: **basta aggiungere uno script** all'interno del file HTML.

**Cos'è un CDN**
Una **Content Delivery Network** è un sistema di server distribuiti che permette di caricare librerie direttamente da internet, senza installarle localmente.

*index.html · dentro il `<head>` della pagina*
```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

- ✓ Tutte le utility classes subito disponibili
- ✓ Nessuna dipendenza da installare
- ✓ Nessuno strumento di build da configurare

**Attenzione: il CDN è pensato per lo sviluppo e i prototipi, non per i siti in produzione.**

>> Lo script `@tailwindcss/browser@4` gira nel browser: legge le classi presenti nella pagina e genera al volo il CSS corrispondente, iniettandolo in un tag `<style>`. Per questo funziona senza build, ma ogni visitatore paga il costo di scaricare ed eseguire il generatore a ogni caricamento: ecco perché non va usato in produzione.
>> `@4` indica la major version: si ottiene sempre l'ultima release 4.x.

---
## Slide 23 – Una pagina completa con il CDN

*index.html*
```html
<!DOCTYPE html>
<html>
<head>
  <title>Tailwind Example</title>
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="bg-white p-8 rounded-lg shadow-md">
    <h1 class="text-2xl font-bold text-blue-500">Hello Tailwind</h1>
  </div>
</body>
</html>
```

*Anteprima*

![[TW08-s023-1.png|300]]

Le classi Tailwind vengono applicate **direttamente agli elementi HTML**.

>> Lettura delle classi:
>> - `bg-gray-100` → sfondo grigio chiarissimo; `h-screen` → `height: 100vh` (il body occupa tutto lo schermo).
>> - `flex items-center justify-center` → il body diventa un contenitore flex che centra il figlio sia sull'asse principale (`justify-content: center`) sia su quello trasversale (`align-items: center`): il classico "centraggio perfetto" con flexbox.
>> - `p-8` → `padding: 2rem` (32px); `rounded-lg` → `border-radius: 0.5rem`; `shadow-md` → ombra media (`box-shadow`).
>> - `text-2xl` → `font-size: 1.5rem`; `font-bold` → `font-weight: 700`; `text-blue-500` → colore del testo blu tonalità 500.

---
## Slide 24 – La pipeline avanzata

Nelle applicazioni web moderne, Tailwind si usa insieme a strumenti di sviluppo avanzati.

![[TW08-s024-1.png]]

- **Node.js** – ambiente di esecuzione
- **npm** – gestore dei pacchetti
- **Vite** – build e server di sviluppo
- **Vue** – o un altro framework JS

**Questo ambiente permette di**
- **Ottimizzare il CSS** – solo le classi usate, file finale più piccolo
- **Migliorare le performance** – meno CSS da scaricare, pagine più veloci
- **Automatizzare la build** – ogni modifica viene ricompilata da sola

>> Il punto chiave è che in questa pipeline Tailwind lavora **a tempo di build**: scansiona i file sorgente (HTML, `.vue`, `.js`…) alla ricerca dei nomi delle classi e genera un file CSS statico che contiene solo quelle effettivamente usate. Al browser arriva quindi un normale foglio di stile, senza nessun lavoro da fare a runtime (al contrario del CDN).
>> Vite inoltre offre l'*hot module replacement*: salvando un file, la pagina nel browser si aggiorna subito senza ricaricare tutto.

---
## Slide 25 – Setup con Vite: progetto e dipendenze

**1 – Crea il progetto con Vite**
```bash
$ npm create vite@latest my-project
$ cd my-project
```
Vite chiede quale template usare: per iniziare vanno bene **Vanilla** oppure **Vue**.

**2 – Installa Tailwind e il suo plugin per Vite**
```bash
$ npm install tailwindcss @tailwindcss/vite
```
Il comando installa anche le dipendenze già previste dal progetto.

>> Il `$` è solo il prompt del terminale: non va digitato.
>> `npm install <pacchetti>` aggiunge i pacchetti a `package.json` (sezione `dependencies`) e, essendo la prima installazione nel progetto appena creato, scarica anche tutte le dipendenze già elencate lì (es. `vite`) nella cartella `node_modules`.

---
## Slide 26 – Setup con Vite: plugin e CSS

**3 – Aggiungi il plugin in vite.config.js**

*vite.config.js*
```js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```
Con il template Vue l'array diventa **`[vue(), tailwindcss()]`**.

**4 – Importa Tailwind nel CSS**

*src/style.css*
```css
@import "tailwindcss";
```
Nel template di Vite questo file è già importato da `src/main.js`.

**5 – Avvia il server di sviluppo**
```bash
$ npm run dev
```
Se le classi funzionano, Tailwind è integrato correttamente.

>> Nel template Vue, `vue()` arriva da `import vue from '@vitejs/plugin-vue'` (già presente nel file generato): si aggiunge solo `tailwindcss()` accanto.
>> La singola riga `@import "tailwindcss";` sostituisce le tre direttive `@tailwind base; @tailwind components; @tailwind utilities;` della v3: importa il reset (Preflight), il tema di default e tutte le utility.
>> `npm run dev` esegue lo script `dev` di `package.json` (cioè `vite`), che avvia un server locale (di default su `http://localhost:5173`).

---
## Slide 27 – Configurazione con `@theme`

*src/style.css*
```css
@import "tailwindcss";

@theme {
  --color-brand-500: oklch(0.62 0.14 175);
  --font-display: "Instrument Serif", serif;
  --spacing: 0.25rem;
  --breakpoint-3xl: 120rem;
}

@plugin "@tailwindcss/typography";
```

In Tailwind v4 la configurazione vive **direttamente nel CSS**: ogni variabile di **@theme** diventa una nuova utility class.

| | |
|---|---|
| COLORI | `bg-brand-500` · `text-brand-500` |
| FONT | `font-display` |
| SPAZIATURE | `p-4 = 4 × 0.25rem` |
| BREAKPOINT | `3xl:grid-cols-4` |
| PLUGIN | `prose` |

Così Tailwind si adatta al **design system** del progetto. Lo stesso @theme funziona anche con il CDN (Parte 06), i plugin invece no.

>> Il meccanismo è basato sui *namespace* delle variabili: il prefisso decide quali utility vengono generate. `--color-*` genera `bg-*`, `text-*`, `border-*`…; `--font-*` genera `font-*`; `--breakpoint-*` genera il prefisso responsive `*:`. `--spacing` è la **unità base** della scala: ogni utility numerica di spaziatura/dimensione vale `n × --spacing` (es. `p-4` = `calc(var(--spacing) * 4)` = 1rem).
>> Le variabili di `@theme` diventano anche normali custom properties CSS su `:root`, quindi si possono usare ovunque con `var(--color-brand-500)`.
>> `oklch(L C H)` è uno spazio colore percettivo: luminosità (0–1), croma (saturazione), tinta in gradi (175 ≈ verde acqua). È lo stesso formato con cui sono definiti i colori di default di Tailwind v4.
>> Il plugin `@tailwindcss/typography` aggiunge la classe `prose`, che dà uno stile tipografico curato a un blocco di HTML "grezzo" (es. testo generato da Markdown).

---
## Slide 28 – CDN o pipeline?

| | CDN | PIPELINE AVANZATA |
|---|---|---|
| **Setup** | immediato | più articolato |
| **Build** | nessuna | automatica |
| **Personalizzazione** | @theme nella pagina, niente plugin | completa, con @theme e plugin |
| **CSS finale** | generato nel browser a ogni caricamento | ottimizzato, solo le classi usate |
| **Ideale per** | prototipi ed esercizi | **applicazioni reali** |

Nei progetti professionali si usa quasi sempre **una pipeline di sviluppo**.

---
## Slide 29 – Parte 04: Utility classes

Layout, spaziature, tipografia, colori e responsive

---
## Slide 30 – Display, flexbox e grid

**Display**

![[TW08-s030-1.png|300]]

`block` `inline` `inline-block` `hidden`

```html
<div class="hidden">
```

**Flexbox**

![[TW08-s030-2.png|300]]

`flex` `inline-flex`

```html
<div class="flex">
```

**Grid**

![[TW08-s030-3.png|300]]

`grid` `inline-grid`

```html
<div class="grid grid-cols-3">
```

>> Ogni classe corrisponde a un valore della proprietà `display`: `block` → `display: block`, `inline-block` → `display: inline-block`, `flex` → `display: flex`, `grid` → `display: grid`, ecc. `hidden` → `display: none` (l'elemento sparisce e non occupa spazio, diverso da `invisible` = `visibility: hidden`, che lo nasconde ma ne mantiene lo spazio).
>> `grid-cols-3` → `grid-template-columns: repeat(3, minmax(0, 1fr))`: tre colonne di uguale larghezza; i 6 figli dell'esempio si dispongono quindi su 2 righe.
>> Come nel CSS visto in precedenza, `flex`/`grid` vanno sul **contenitore**: sono i figli a essere disposti in riga o in griglia.

>> **Vedi anche** → [[06 - CSS intro, box model e flexbox#Slide 55 – FlexBox|nota 06, slide 55 e seguenti: flexbox in CSS puro]]

---
## Slide 31 – Position e offset

**Proprietà position**

`static` `relative` `absolute` `fixed` `sticky`

**Posizionamento**

`top-0` `right-0` `bottom-0` `left-0` `inset-0`

**inset-0** azzera i quattro offset in un colpo solo.

*index.html*
```html
<div class="relative">
  <img src="foto.jpg" alt="Paesaggio">
  <span class="absolute top-0 right-0">Nuovo</span>
</div>
```

![[TW08-s031-1.png|450]]

In verde le classi usate nell'esempio (`relative`, `absolute`, `top-0`, `right-0`).

>> È il classico schema "badge sopra un'immagine": il contenitore `relative` (→ `position: relative`) diventa il riferimento per i figli posizionati; lo `span` con `absolute top-0 right-0` (→ `position: absolute; top: 0; right: 0`) si ancora quindi all'angolo in alto a destra del contenitore e non della pagina.
>> `inset-0` → `inset: 0`, cioè `top`, `right`, `bottom` e `left` tutti a 0: con `absolute` fa coprire all'elemento l'intero contenitore (utile per overlay).

---
## Slide 32 – Margin e padding

![[TW08-s032-1.png|300]]

| MARGIN (ESTERNO) | | PADDING (INTERNO) | |
|---|---|---|---|
| `m-4` | margin | `p-4` | padding |
| `mt-4` | margin-top | `px-4` | sinistra e destra |
| `mb-4` | margin-bottom | `py-4` | sopra e sotto |
| `ml-4` | margin-left | `pt-4` | padding-top |
| `mr-4` | margin-right | `pb-4` | padding-bottom |

**LA SCALA** 1 unità = 0.25rem (4px), quindi `p-4` = 1rem = 16px

>> È il box model già visto: il padding è lo spazio tra contenuto e bordo, il margin lo spazio esterno al bordo verso gli altri elementi.
>> Lo schema dei nomi è sempre `{proprietà}{lato}-{valore}`: `t`/`r`/`b`/`l` = top/right/bottom/left, `x` = orizzontale (sinistra+destra), `y` = verticale (sopra+sotto). Quindi esistono anche `mx-4`, `my-4`, `pr-4`, `pl-4`, ecc.
>> Esempi con la scala: `p-2` = 0.5rem = 8px, `m-6` = 1.5rem = 24px, `p-8` = 2rem = 32px. `mx-auto` → `margin-left: auto; margin-right: auto` (centra orizzontalmente un blocco con larghezza definita). Sono ammessi anche margini negativi: `-mt-4` → `margin-top: -1rem`.

>> **Vedi anche** → [[06 - CSS intro, box model e flexbox#Slide 28 – Box Model|nota 06, slide 28: il box model]]

---
## Slide 33 – Larghezza e altezza

**Larghezza**

![[TW08-s033-1.png|400]]

**Altezza**

![[TW08-s033-2.png|400]]

| Classe | CSS | Classe | CSS |
|---|---|---|---|
| `w-full` | `width: 100%` | `h-full` | `height: 100%` |
| `w-screen` | `width: 100vw` | `h-screen` | `height: 100vh` |
| `w-1/2` | `width: 50%` | `h-1/4` | `height: 25%` |

Da conoscere anche: **`size-16`** imposta larghezza e altezza insieme, **`h-dvh`** usa l'altezza dinamica dello schermo (comoda su mobile).

>> Le frazioni (`w-1/4`, `w-3/4`, `h-1/2`…) sono percentuali **rispetto al contenitore**, mentre `w-screen`/`h-screen` si riferiscono alla viewport. Le percentuali di altezza funzionano solo se il genitore ha un'altezza definita.
>> I valori numerici seguono la scala delle spaziature: `w-16` = 4rem = 64px, quindi `size-16` → `width: 4rem; height: 4rem`.
>> `h-dvh` → `height: 100dvh`: su mobile `100vh` non tiene conto delle barre del browser che compaiono/scompaiono, mentre `dvh` (*dynamic viewport height*) si adatta all'area realmente visibile.

---
## Slide 34 – Da CSS a Tailwind: un layout con sidebar

*CSS tradizionale · style.css*
```css
.container { display: flex; width: 100%; }
.sidebar {
  width: 25%;
  background: #e5e7eb;
  padding: 1rem;
}
.content {
  width: 75%;
  background: white;
  padding: 1rem;
}
```

*Tailwind CSS · index.html*
```html
<div class="flex w-full">
  <aside class="w-1/4 bg-gray-200 p-4">
    Sidebar
  </aside>
  <main class="w-3/4 bg-white p-4">
    Contenuto principale
  </main>
</div>
```

**Risultato**

![[TW08-s034-1.png|450]]

>> Corrispondenze 1:1: `flex` = `display: flex`, `w-full` = `width: 100%`, `w-1/4` = `width: 25%`, `w-3/4` = `width: 75%`, `p-4` = `padding: 1rem`, `bg-white` = `background: white`. `bg-gray-200` era `#e5e7eb` nella palette della v3; in v4 i colori sono definiti in `oklch`, con una tinta quasi identica.
>> Con Tailwind non serve inventare nomi di classi (`.sidebar`, `.content`) né tenere sincronizzati due file: lo stile si legge direttamente nel markup.

---
## Slide 35 – Tipografia

**Dimensione**

![[TW08-s035-1.png|450]]

| Classe | Anteprima |
|---|---|
| `text-sm` | Utility classes |
| `text-base` | Utility classes |
| `text-xl` | Utility classes |
| `text-3xl` | Utility classes |
| `text-5xl` | Utility |

**Peso**

![[TW08-s035-2.png|300]]

| Classe | Anteprima |
|---|---|
| `font-light` | Tailwind |
| `font-normal` | Tailwind |
| `font-semibold` | **Tailwind** |
| `font-bold` | **Tailwind** |

**Allineamento**

`text-left` `text-center` `text-right`

Anteprime in scala ×2: text-sm = 14px, text-base = 16px, text-5xl = 48px.

>> Valori di default (v4): `text-sm` = 0.875rem (14px), `text-base` = 1rem (16px), `text-xl` = 1.25rem (20px), `text-3xl` = 1.875rem (30px), `text-5xl` = 3rem (48px). Ogni classe `text-*` di dimensione imposta anche un `line-height` adeguato.
>> Pesi: `font-light` = 300, `font-normal` = 400, `font-semibold` = 600, `font-bold` = 700 (proprietà `font-weight`).
>> Allineamento: `text-left`/`text-center`/`text-right` → `text-align: left | center | right`. Attenzione: il prefisso `text-` è condiviso da dimensione, colore e allineamento; Tailwind li distingue dal valore.

---
## Slide 36 – Colori

Tailwind offre una palette pronta all'uso: ogni colore ha **11 tonalità**, da 50 a 950, utilizzabili per testi, sfondi, bordi…

![[TW08-s036-1.png]]

Tonalità: 50 · 100 · 200 · 300 · 400 · **500** · 600 · 700 · 800 · 900 · 950

![[TW08-s036-2.png|500]]

**Per i testi**: `text-blue-500` `text-red-600` `text-gray-800`

**Per gli sfondi**: `bg-blue-500` `bg-gray-200` `bg-black`

>> Lo schema è `{proprietà}-{colore}-{tonalità}`: lo stesso colore si applica a proprietà diverse cambiando solo il prefisso (`text-` → `color`, `bg-` → `background-color`, `border-` → `border-color`). Più il numero è alto, più il colore è scuro; 500 è la tonalità "centrale".
>> Si può aggiungere l'opacità con lo slash: `bg-blue-500/50` = blu 500 al 50% di opacità. `black` e `white` non hanno tonalità.

---
## Slide 37 – Bordi e arrotondamenti

![[TW08-s037-1.png]]

- `border` – bordo di 1px, nel colore del testo
- `border-blue-500` – bordo colorato di blu
- `border-gray-300` – bordo colorato di grigio
- `rounded-md` – angoli arrotondati di 6px
- `rounded-lg` – angoli arrotondati di 8px
- `rounded-full` – forma a pillola, o cerchio se l'elemento è quadrato

>> `border` → `border-width: 1px; border-style: solid`; in Tailwind v4 il colore di default è `currentColor` (quello del testo), mentre in v3 era un grigio. Spessori diversi: `border-2`, `border-4`…; solo un lato: `border-t`, `border-b`…
>> `rounded-md` = `border-radius: 0.375rem` (6px), `rounded-lg` = `0.5rem` (8px). `rounded-full` imposta un raggio "infinito": su un rettangolo i lati corti diventano semicerchi (pillola), su un quadrato (es. `size-16 rounded-full`) si ottiene un cerchio.

---
## Slide 38 – Mobile first

Tailwind adotta l'approccio **mobile first**: si progetta prima per lo schermo più piccolo, poi si aggiungono le regole per adattare gli elementi ai dispositivi più grandi.

![[TW08-s038-1.png]]

| Dispositivo | Prefisso |
|---|---|
| Smartphone | senza prefisso |
| Tablet | `md:` |
| Laptop | `lg:` |
| TV | `2xl:` |

>> Le classi **senza prefisso** valgono per tutte le larghezze; quelle con prefisso le sovrascrivono solo da una certa larghezza in su. Esempio coerente con la figura: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4` → 1 colonna su smartphone, 2 su tablet, 3 su laptop, 4 su schermi molto larghi.
>> "Smartphone/tablet/laptop" sono solo indicativi: i prefissi dipendono dalla larghezza della finestra, non dal tipo di dispositivo.

>> **Vedi anche** → [[07 - CSS testo, colori e responsiveness#Slide 33 – Organizzazione dei layout|nota 07, slide 33–34: desktop first e mobile first in CSS]] · [[07 - CSS testo, colori e responsiveness#Slide 23 – Media Query|slide 23–28: le media query]]

---
## Slide 39 – I breakpoint

Cinque soglie predefinite: ogni prefisso si attiva **da quella larghezza in su**.

![[TW08-s039-1.png]]

| PREFISSO | LARGHEZZA MINIMA | CSS GENERATO |
|---|---|---|
| `sm` | 40rem (640px) | `@media (width >= 40rem)` |
| `md` | 48rem (768px) | `@media (width >= 48rem)` |
| `lg` | 64rem (1024px) | `@media (width >= 64rem)` |
| `xl` | 80rem (1280px) | `@media (width >= 80rem)` |
| `2xl` | 96rem (1536px) | `@media (width >= 96rem)` |

>> `(width >= 40rem)` è la *range syntax* moderna delle media query, equivalente a `(min-width: 40rem)`. Nelle media query `rem` si riferisce alla dimensione del font di default del browser (normalmente 16px), quindi 40rem = 640px.
>> Poiché le soglie sono tutte `min-width`, più prefissi si sommano: a 1100px sono attivi `sm:`, `md:` e `lg:`, e vince il breakpoint più grande (Tailwind genera le media query in ordine crescente, quindi a parità di specificità prevale quella che viene dopo nel CSS).
>> Per applicare uno stile **solo sotto** una soglia esistono le varianti `max-*`, es. `max-md:hidden` → `@media (width < 48rem)`. Nuovi breakpoint si aggiungono con `--breakpoint-*` in `@theme` (slide 27).

---
## Slide 40 – Responsive senza media query

Niente media query da riscrivere ogni volta: basta anteporre alla utility class il **prefisso del breakpoint**.

**Con Tailwind**
```html
<div class="text-center md:text-left"></div>
```

**Equivalente in CSS**
```css
.box { text-align: center; }
@media (width >= 48rem) {
  .box { text-align: left; }
}
```

![[TW08-s040-1.png|400]]

| Sotto i 768px | Da 768px in su |
|---|---|
| `text-center` | `md:text-left` |

>> Si legge così: "testo centrato di base (mobile), allineato a sinistra da `md` in su". È esattamente il pattern mobile first del CSS classico — regola base fuori dalla media query, override dentro una `min-width` — solo scritto inline sulla classe.
>> Errore tipico: usare `sm:` pensando "solo smartphone". `sm:text-center` significa invece "da 640px in su"; per il mobile si usa la classe senza prefisso.

---
## Slide 41 – Parte 05: Tips

Piccoli trucchi per il lavoro di tutti i giorni
---
## Slide 42 – Valori arbitrari

**Domanda:** e se servisse un valore preciso, che non è nella scala di Tailwind? Ogni utility accetta un valore libero tra parentesi quadre.

`utility-[valore]`

**Dimensioni in pixel**
Un valore esatto, fuori dalla scala standard

```html
<p class="text-[46px]">Hello, World</p>
<div class="w-[146px]"></div>
```

**Colori personalizzati**
Se un colore si ripete, meglio definirlo nel tema con @theme (Parte 06)

```html
<div class="bg-[#1e293b] text-white p-4">
```

**Font**
Il nome della famiglia, con _ al posto degli spazi

```html
<p class="font-[Open_Sans]">Hello, World</p>
```

>> Tailwind genera al volo una regola con il valore indicato: `text-[46px]` → `font-size: 46px`, `w-[146px]` → `width: 146px`, `bg-[#1e293b]` → `background-color: #1e293b`, `font-[Open_Sans]` → `font-family: Open Sans`.
>> Il trattino basso sostituisce lo spazio perché nell'attributo `class` lo spazio separa una classe dall'altra: `font-[Open Sans]` verrebbe letto come due classi distinte.
>> Sono una "via di fuga" utile per casi isolati; se lo stesso valore compare più volte conviene metterlo nel tema, così resta un solo punto da modificare.

---
## Slide 43 – Centrare un elemento con flexbox

*index.html*
```html
<div class="flex items-center justify-center h-screen bg-gray-100">
  <div class="bg-white p-8 rounded-lg shadow">
    Contenuto centrato
  </div>
</div>
```

- `flex` – attiva flexbox sul contenitore
- `items-center` – centra in verticale
- `justify-center` – centra in orizzontale
- `h-screen` – altezza pari a quella dello schermo

![[TW08-s043-1.png|400]]

Anteprima: il riquadro resta al centro, in entrambe le direzioni.

>> In CSS: `display: flex; align-items: center; justify-content: center; height: 100vh;`. Con la direzione di default (`flex-direction: row`) l'asse principale è orizzontale, quindi `justify-content` agisce in orizzontale e `align-items` (asse trasversale) in verticale. Se si usasse `flex-col` i due ruoli si invertirebbero.
>> Senza `h-screen` il contenitore sarebbe alto solo quanto il suo contenuto, e la centratura verticale non si vedrebbe.

---
## Slide 44 – Strumenti per lo sviluppo

*index.html · Visual Studio Code*

![[TW08-s044-1.png|450]]

```html
<div class="bg-te|
```
Suggerimenti: `bg-teal-50`, `bg-teal-100`, `bg-teal-500`, `bg-teal-700`

```css
background-color: oklch(70.4% 0.14 182.503);
```

**Domanda: esistono strumenti che facilitano lo sviluppo?**

Sì: in Visual Studio Code, ad esempio, l'editor può suggerire le utility class mentre scriviamo.

**Tailwind CSS IntelliSense**
Estensione ufficiale: autocompletamento, anteprima del CSS al passaggio del mouse e segnalazione degli errori.

**`prettier-plugin-tailwindcss`**
Plugin ufficiale per Prettier: ordina le classi automaticamente, sempre nello stesso ordine.

>> La riga in fondo all'immagine è l'anteprima mostrata da IntelliSense: in Tailwind v4 la palette predefinita è definita nello spazio colore `oklch` (luminosità, croma, tonalità) invece che in esadecimale.

---
## Slide 45 – Parte 06: Tailwind su misura

Colori, font e tema personalizzati, usando solo il CDN

---
## Slide 46 – Il blocco di stile di Tailwind

*index.html · dentro la `<head>`*
```html
<script src="…/browser@4"></script>
<style type="text/tailwindcss">
  @theme {
    --color-brand-500: #0f766e;
  }
</style>
```

![[TW08-s046-1.png|40]]

Nasce il colore **brand-500**, subito pronto da usare con classi come bg-brand-500.

Con il CDN le personalizzazioni si scrivono in un blocco **`<style>`** speciale, nella `<head>` della pagina.

**`type="text/tailwindcss"`**
Senza questo attributo il blocco è CSS normale e Tailwind lo ignora.

Accetta tutte le funzioni CSS di Tailwind: `@theme` `@layer` `@apply` `@utility` `@custom-variant`

**Limiti del CDN: niente plugin, e il blocco va scritto nella pagina. Un file .css esterno non viene elaborato da Tailwind.**

>> Il browser non riconosce il tipo `text/tailwindcss`, quindi non applica il blocco come CSS: è lo script del CDN che lo legge, lo elabora e inserisce nella pagina il CSS risultante.
>> Dentro `@theme` si dichiarano custom properties CSS (le stesse variabili `--nome: valore` del CSS standard): Tailwind le usa sia per generare le classi sia come variabili disponibili in `:root`.

---
## Slide 47 – Colori personalizzati

*`<style type="text/tailwindcss">`*
```css
@theme {
  --color-brand-100: #ccfbf1;
  --color-brand-500: #0f766e;
  --color-brand-900: #134e4a;
}
```

Cambiare un colore che esiste già
```css
--color-blue-500: #1d4ed8;
```

Togliere la palette predefinita e tenere solo la propria
```css
--color-*: initial;
```

Ogni variabile **--color-\*** diventa una famiglia di classi, come quelle della palette predefinita:

`bg-brand-500` `text-brand-900` `border-brand-100` `bg-brand-500/50`

![[TW08-s047-1.png|450]]

>> Una sola variabile `--color-brand-500` genera tutte le utility che accettano un colore: `bg-`, `text-`, `border-`, `ring-`, `fill-`, ecc.
>> Il suffisso `/50` indica l'opacità: `bg-brand-500/50` è il colore brand-500 al 50% di opacità (solo lo sfondo, non il contenuto, a differenza di `opacity-50`).
>> I numeri 100/500/900 sono solo una convenzione (chiaro → scuro) copiata dalla palette di Tailwind: si potrebbe chiamare il colore anche `--color-brand`, e la classe sarebbe `bg-brand`.

---
## Slide 48 – Font personalizzati

1. **Carica il font nella `<head>`, per esempio da Google Fonts**

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=DM+Sans">
```

2. **Registralo nel tema**

```css
@theme {
  --font-display: "Instrument Serif", serif;
  --font-sans: "DM Sans", sans-serif;
}
```

**--font-display** crea la classe font-display; ridefinire **--font-sans** cambia il font predefinito di tutta la pagina.

![[TW08-s048-1.png|450]]

>> `font-display` corrisponde a `font-family: "Instrument Serif", serif;`. Il secondo valore (`serif`, `sans-serif`) è il font generico di riserva, usato se il primo non è disponibile o non è ancora stato scaricato.
>> Il `<link>` serve solo a scaricare il font; `@theme` serve a dare un nome alla famiglia per usarla con le classi. Servono entrambi.
>> `--font-sans` è speciale perché Tailwind lo applica di default all'elemento `html`: per questo cambiarlo modifica tutto il testo senza aggiungere classi.

---
## Slide 49 – Non solo colori e font

Ogni gruppo di variabili genera le sue classi: **il nome dopo il prefisso diventa il nome della classe**.

| Variabile | Nel blocco `@theme` | Classi generate |
|---|---|---|
| `--text-*` | `--text-huge: 5rem;` | `text-huge` |
| `--radius-*` | `--radius-blob: 2rem;` | `rounded-blob` |
| `--shadow-*` | `--shadow-soft: 0 10px 30px rgb(0 0 0 / .15);` | `shadow-soft` |
| `--breakpoint-*` | `--breakpoint-3xl: 120rem;` | `3xl:grid-cols-4` |
| `--spacing` | `--spacing: 0.25rem;` | `p-4` · `gap-6` · `w-80` … |

L'elenco completo delle variabili è nella documentazione: tailwindcss.com/docs/theme

>> Nota che il prefisso della variabile non coincide sempre con quello della classe: `--radius-*` genera classi `rounded-*`.
>> `--breakpoint-3xl: 120rem` crea una nuova variante responsive: `3xl:` equivale a `@media (width >= 120rem)` (1920px con il font di base a 16px).
>> `--spacing` è un'unica unità di base: ogni classe di spaziatura è un multiplo, ad es. `p-4` = 4 × 0.25rem = 1rem = 16px, `w-80` = 80 × 0.25rem = 20rem. Cambiando `--spacing` si riscala in un colpo solo tutta la spaziatura del sito.

---
## Slide 50 – Una pagina su misura, solo con il CDN

*index.html · … = indirizzi completi visti prima*
```html
<head>
  <script src="…/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" href="…/css2?family=Instrument+Serif">
  <style type="text/tailwindcss">
    @theme {
      --color-brand-500: #0f766e;
      --font-display: "Instrument Serif", serif;
    }
  </style>
</head>
<body class="bg-stone-100 p-10 space-y-6">
  <h1 class="font-display text-5xl text-brand-500">Benvenuti</h1>
  <button class="bg-brand-500 text-white px-5 py-2">Inizia</button>
</body>
```

*Anteprima*

![[TW08-s050-1.png|350]]

>> `space-y-6` aggiunge un margine verticale di 1.5rem tra i figli diretti del `body` (non prima del primo), `text-5xl` imposta `font-size: 3rem`, `px-5 py-2` = padding orizzontale 1.25rem e verticale 0.5rem.
>> Le classi `font-display`, `text-brand-500` e `bg-brand-500` esistono solo grazie al blocco `@theme`: senza di esso non avrebbero alcun effetto.

---
## Slide 51 – Parte 07: Il problema

Struttura e stile tornano nello stesso file

---
## Slide 52 – Svantaggi e vantaggi

**Svantaggi**
- − Markup HTML più lungo
- − Molte classi sullo stesso elemento
- − Curva di apprendimento iniziale
- − Tante utility class da conoscere

**Struttura e stile non sono più separati**
È il problema principale: interi file HTML pieni di classi, con il rischio di perdersi all'interno del file.

**Spesso compensati da**
- \+ Niente nomi di classi da inventare
- \+ Modifiche sicure: una classe tocca solo il suo elemento
- \+ Progetti vecchi più facili da mantenere
- \+ Codice portabile: struttura e stile viaggiano insieme

Fonte: documentazione ufficiale di Tailwind CSS

>> "Modifiche sicure": nel CSS tradizionale cambiare una regola come `.card { … }` può avere effetti su tutte le pagine che usano quella classe (anche per via della cascata e della specificità); con le utility si modifica solo l'elemento su cui si sta lavorando.

---
## Slide 53 – Il problema in pratica

*index.html · tre card con Tailwind*
```html
<section class="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
    <h3 class="text-xl font-semibold mb-2">Sviluppo rapido</h3>
    <p class="text-gray-600">Interfacce costruite in fretta.</p>
  </div>
  <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
    <h3 class="text-xl font-semibold mb-2">Design responsive</h3>
    <p class="text-gray-600">Layout adattivi con i breakpoint.</p>
  </div>
  <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
    <h3 class="text-xl font-semibold mb-2">Utility first</h3>
    <p class="text-gray-600">Stile nel markup, senza CSS custom.</p>
  </div>
</section>
```

**38**
**classi per tre semplici card**

Struttura e stile mescolati: è facile perdersi.

**Soluzione: Parte 08.**

>> Il conto: 8 classi sulla `<section>` + 3 card × (6 sul `div` + 3 sull'`h3` + 1 sul `p`) = 8 + 30 = 38. Le stesse 10 classi sono ripetute identiche tre volte: per cambiare l'ombra delle card bisogna modificare tre punti.

---
## Slide 54 – Parte 08: Per i puristi

Separare HTML e CSS ed evitare le ripetizioni

---
## Slide 55 – HTML semantico, stile nel CSS

Le card del problema, riscritte: nell'HTML solo i nomi, nel CSS lo stile composto con **@apply**.

*HTML · solo la struttura*
```html
<section class="cards">
  <div class="card">
    <h3 class="card-title">Sviluppo rapido</h3>
    <p class="card-text">Interfacce in fretta.</p>
  </div>
  <!-- le altre card sono uguali -->
</section>
```

*CSS · nel `<style type="text/tailwindcss">`*
```css
@layer components {
  .cards {
    @apply grid grid-cols-1 md:grid-cols-3 gap-6
           max-w-6xl mx-auto py-12 px-4;
  }
  .card {
    @apply bg-white p-6 rounded-lg shadow
           hover:shadow-lg transition;
  }
  .card-title { @apply text-xl font-semibold mb-2; }
  .card-text { @apply text-gray-600; }
}
```

- **4** – nomi semantici nell'HTML, invece di 38 utility class
- **18** – utility nel CSS: ognuna è scritta una volta sola

>> `@apply` copia dentro una regola CSS normale le dichiarazioni delle utility indicate: ad esempio `.card-text { @apply text-gray-600; }` diventa `.card-text { color: var(--color-gray-600); }`.
>> `@layer components` mette queste classi nel livello dei "componenti", che viene prima di quello delle utility: a parità di specificità, una utility scritta nell'HTML (es. `class="card p-2"`) vince comunque sul padding definito in `.card`, perché i layer successivi prevalgono nella cascata.
>> 18 = 8 (`.cards`) + 6 (`.card`) + 3 (`.card-title`) + 1 (`.card-text`).

---
## Slide 56 – Stati e breakpoint dentro `@apply`

*CSS · nel `<style type="text/tailwindcss">`*
```css
@layer components {
  .btn {
    @apply px-5 py-2.5 rounded-full font-semibold
           bg-brand-500 text-white
           hover:bg-brand-700
           focus-visible:outline-2;
  }
  .cards {
    @apply grid gap-6 md:grid-cols-3;
  }
}
```

Le varianti funzionano anche dentro **@apply**: Tailwind scrive da solo le regole per gli stati e le media query.

| Variante | Regola generata |
|---|---|
| `hover:` | `.btn:hover { … }` |
| `focus-visible:` | `.btn:focus-visible { … }` |
| `md:` | `@media (width >= 48rem) { … }` |

![[TW08-s056-1.png|400]]

>> `hover:bg-brand-700` diventa una regola separata con la pseudo-classe `:hover`; `md:grid-cols-3` diventa una media query (48rem = 768px) che contiene `grid-template-columns: repeat(3, minmax(0, 1fr))`.
>> `:focus-visible` si attiva quando l'elemento riceve il focus da tastiera (es. con Tab), non al clic del mouse: utile per l'accessibilità senza mostrare il contorno a ogni clic. `outline-2` imposta lo spessore del contorno a 2px.
>> In Tailwind v4, `hover:` si applica solo sui dispositivi che supportano davvero il passaggio del mouse (è racchiuso in `@media (hover: hover)`).

---
## Slide 57 – Oppure CSS classico, con le variabili del tema

*CSS · nel `<style type="text/tailwindcss">`*
```css
.card {
  padding: --spacing(6);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
.card-title {
  font-family: var(--font-display);
  color: var(--color-brand-700);
}
```

Ogni valore del tema è anche una **variabile CSS**: chi preferisce il CSS classico può usarle direttamente e restare coerente con il design system.

| Variabile | Significato |
|---|---|
| `--spacing(6)` | 6 × 0.25rem = 1.5rem, come p-6 |
| `var(--radius-lg)` | lo stesso raggio di rounded-lg |
| `var(--shadow-md)` | la stessa ombra di shadow-md |
| `var(--color-brand-700)` | il colore definito in @theme |

**`--spacing()` è una funzione di Tailwind: funziona solo nel CSS elaborato da Tailwind, cioè nel blocco `<style type="text/tailwindcss">`.**

>> `var()` è la funzione standard del CSS per leggere una custom property, quindi funziona anche fuori da Tailwind (purché la variabile sia definita, come fa Tailwind in `:root`). `--spacing(6)` invece viene tradotta da Tailwind in `calc(var(--spacing) * 6)`.
>> Nota: nel codice compare `--color-brand-700`, che va definito in `@theme` come visto nella slide 47 (dove erano definite solo le tonalità 100, 500 e 900).

---
## Slide 58 – E se volessi un file .css separato?

Con il CDN, **@theme** e **@apply** funzionano solo nel blocco dentro la pagina: un file .css esterno viene letto come CSS normale. Per separare davvero HTML e CSS basta la **CLI di Tailwind**.

1. **Scrivi il CSS in input.css**

```css
@import "tailwindcss";
@theme { --color-brand-500: #0f766e; }
@layer components { .card { @apply p-6 rounded-lg shadow; } }
```

2. **Avvia la CLI dal terminale**

```bash
$ npx @tailwindcss/cli -i input.css -o output.css --watch
```

3. **Collega il CSS generato**

```html
<link rel="stylesheet" href="output.css">
```

La CLI richiede Node.js; esiste anche un eseguibile standalone che funziona senza Node. Con --watch il file output.css si aggiorna a ogni modifica.

>> `-i` indica il file di input (sorgente con le direttive Tailwind), `-o` il file di output (CSS normale, comprensibile dal browser). La CLI analizza i file del progetto e inserisce in `output.css` solo le classi effettivamente usate, quindi il file finale è piccolo.
>> A differenza del CDN, il lavoro di compilazione avviene una volta sola sul computer dello sviluppatore e non nel browser di ogni visitatore: è l'approccio adatto alla produzione.

---
## Slide 59 – Come evitare le ripetizioni

Ogni tipo di ripetizione ha il suo strumento. Conviene partire sempre da quello più semplice.

| Cosa si ripete | Strumento | Esempio |
|---|---|---|
| Un valore: colore, font, raggio | **`@theme`** | `--color-brand-500` |
| Un gruppo di utility: bottoni, card | **`@layer` + `@apply`** | `.btn` · `.card` |
| Una proprietà che Tailwind non ha | **`@utility`** | `content-auto` |
| Lo stesso markup più volte | **Cicli e componenti** | `v-for` · componenti Vue |
| Righe simili nello stesso file | **Modifica multi-cursore** | `Alt + clic in VS Code` |

Le classi create con **@utility** funzionano anche con le varianti, per esempio **hover:content-auto**. Fonte: documentazione ufficiale di Tailwind CSS.

>> Esempio di utility personalizzata (dalla documentazione):
>> ```css
>> @utility content-auto {
>>   content-visibility: auto;
>> }
>> ```
>> A differenza di una classe scritta in `@layer components`, una classe definita con `@utility` è trattata come una utility vera: finisce nel layer delle utility e accetta varianti come `hover:`, `md:`, `dark:`.
>> Se lo stesso blocco HTML si ripete (es. tante card con dati diversi), la soluzione migliore è non ripetere il markup: con un framework come Vue si scrive il componente una volta e lo si genera con `v-for`, così anche le classi compaiono una volta sola.

---
## Slide 60 – Purista o utility-first?

**Con l'approccio purista guadagni**
- \+ HTML pulito e semantico
- \+ Lo stile di un elemento sta in un solo punto
- \+ Un metodo familiare per chi viene dal CSS

**Ma perdi**
- − Si torna a inventare nomi per le classi
- − Il CSS ricomincia a crescere
- − Lo stile non si legge più direttamente nel markup

**Il consiglio della documentazione**
*Per un singolo elemento, come un bottone, una classe CSS va benissimo. Per tutto ciò che è più complesso, meglio i componenti.*

**Un buon compromesso**
Utility nell'HTML per imparare e prototipare, @apply per ciò che si ripete davvero.

---
## Slide 61 – C'è molto altro

Tantissime utility class non sono state citate in questo materiale. Qualche esempio:

![[TW08-s061-1.png|600]]

- **Animazioni** – `animate-spin`
- **Ombre** – `shadow-xl`
- **Effetti** – `opacity-50` · `blur-sm`
- **Object-fit** – `object-cover`
- **Background-position** – `bg-center`

**Per approfondire**
La documentazione ufficiale, completa ed esaustiva
tailwindcss.com

>> Corrispondenze CSS: `animate-spin` applica un'animazione di rotazione continua (`@keyframes spin`, utile per gli indicatori di caricamento); `opacity-50` → `opacity: 0.5` (rende semitrasparente l'intero elemento, contenuto compreso); `blur-sm` → `filter: blur(…)`; `object-cover` → `object-fit: cover` (l'immagine riempie il riquadro ritagliandosi senza deformarsi); `bg-center` → `background-position: center`.

---
## Riassunto

>> **Perché un framework utility-first**
>> - Il CSS scritto a mano su larga scala porta a fogli enormi, regole duplicate e conflitti (cascata e specificità globali).
>> - I framework tradizionali (Bootstrap, Bulma, Foundation) offrono componenti pronti (`btn btn-primary`), ma producono siti simili, sono difficili da personalizzare e contengono molto CSS inutilizzato.
>> - **Tailwind CSS** è **utility-first**: ogni classe atomica controlla una **singola** proprietà CSS e lo stile si compone nel markup (`p-4 bg-blue-500 text-white rounded-lg`).
>>
>> **Storia e motore**
>> - Creato da **Adam Wathan** (Tailwind Labs); v1.0 nel 2019, **v4.0 a gennaio 2025** (configurazione spostata nel CSS); open source con licenza MIT.
>> - Compilatore **Just-In-Time**: scansiona i sorgenti e genera solo il CSS delle classi usate. I nomi di classe vanno scritti per intero (non costruiti dinamicamente).
>> - Ecosistema: Tailwind Plus (componenti), Headless UI (logica e accessibilità senza stile).
>>
>> **Installazione**
>> - **CDN**: `<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4">`; CSS generato nel browser, solo per prototipi, niente plugin.
>> - **Pipeline**: Node.js → npm → Vite; `npm install tailwindcss @tailwindcss/vite`, plugin `tailwindcss()` in `vite.config.js`, `@import "tailwindcss";` nel CSS. CSS ottimizzato in fase di build: adatto alla produzione.
>>
>> **Utility da ricordare**
>> - Scala: 1 unità = **0.25rem (4px)** → `p-4` = 1rem = 16px; `m`/`p` + lato (`t r b l x y`).
>> - `flex`, `grid grid-cols-3`, `hidden` (`display: none`); `relative`/`absolute top-0 right-0`, `inset-0`.
>> - `w-full` (100%), `w-1/2` (50%), `h-screen` (100vh), `h-dvh`, `size-16`.
>> - Colori `{prefisso}-{colore}-{tonalità}`: **11 tonalità da 50 a 950**; opacità con `/50`.
>> - Centratura: `flex items-center justify-center h-screen`.
>> - Valori arbitrari: `w-[146px]`, `bg-[#1e293b]`, `font-[Open_Sans]` (`_` al posto dello spazio).
>>
>> **Responsive mobile first**
>> - Classi senza prefisso = tutte le larghezze; i prefissi valgono **da quella larghezza in su**.
>> - `sm` 40rem (640px), `md` 48rem (768px), `lg` 64rem (1024px), `xl` 80rem (1280px), `2xl` 96rem (1536px).
>> - `text-center md:text-left`; `sm:` non significa "solo smartphone".
>>
>> **Personalizzazione con `@theme`**
>> - Ogni variabile del tema genera classi: `--color-brand-500` → `bg-brand-500`; `--font-display` → `font-display`; `--radius-*` → `rounded-*`; `--breakpoint-3xl` → `3xl:`; `--spacing` = unità base.
>> - Con il CDN va in `<style type="text/tailwindcss">`; i valori sono anche variabili CSS (`var(--color-brand-500)`).
>>
>> **Svantaggi e approccio purista**
>> - Problema principale: struttura e stile non più separati, markup lungo (38 classi per tre card).
>> - Soluzione: nomi semantici nell'HTML e `@apply` dentro `@layer components` (le varianti `hover:`, `md:` funzionano anche lì); `@utility` per nuove utility; CLI (`npx @tailwindcss/cli -i input.css -o output.css --watch`) per un file CSS separato.
>> - Compromesso consigliato: utility nell'HTML, `@apply` o componenti solo per ciò che si ripete davvero.
