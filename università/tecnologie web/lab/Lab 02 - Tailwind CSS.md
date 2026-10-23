[Tailwind-CSS-Laboratorio-Slides](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/lab/Tailwind-CSS-Laboratorio-Slides.pdf>)

# Laboratorio – Tailwind CSS

>> Esercizi guidati sulla lezione [[08 - Tailwind CSS]].

## Indice

1. **Presentazione e organizzazione del laboratorio** (slide 1–4)
	- [[#Slide 1 – Laboratorio Tailwind CSS|Tailwind CSS: approccio utility-first]]
	- [[#Slide 2 – Come funziona il laboratorio|Regole: 11 esercizi, 5 livelli, solo CDN]]
	- [[#Slide 3 – Il kit del laboratorio|Kit: script CDN di Tailwind v4, cartelle, DevTools]]
	- [[#Slide 4 – Da spartano a purista|Il percorso: fasi, esercizi e tempi]]
2. **Livello 1 – Spartano: utility di base** (slide 5–7)
	- [[#Slide 5 – Spartano|Colori, spaziature e tipografia]]
	- [[#Slide 6 – 01 · Primo contatto|Preflight e prime utility]]
	- [[#Slide 7 – 02 · La card dello speaker|Card centrata: max-w, mx-auto, bordi, ombre, rounded-full]]
3. **Livello 2 – Layout** (slide 8–10)
	- [[#Slide 8 – Layout|Flexbox, grid e posizionamento]]
	- [[#Slide 9 – 03 · La navbar|Navbar con flex, gap e sticky]]
	- [[#Slide 10 – 04 · La griglia del programma|Grid a tre colonne, overflow-hidden, relative/absolute]]
4. **Livello 3 – Responsive e stati** (slide 11–13)
	- [[#Slide 11 – Responsive e stati|Breakpoint, varianti e valori arbitrari]]
	- [[#Slide 12 – 05 · Mobile first|Mobile first e prefissi sm:/md:/lg:]]
	- [[#Slide 13 – 06 · Il form: stati e valori arbitrari|Varianti hover/focus/active/disabled e valori tra parentesi quadre]]
5. **Livello 4 – Tema su misura con @theme** (slide 14–16)
	- [[#Slide 14 – Su misura|Colori, font e token dal CDN]]
	- [[#Slide 15 – 07 · I colori del tema|Palette personalizzata con --color-*]]
	- [[#Slide 16 – 08 · Font e token|Font, dimensioni, raggi e ombre come token]]
6. **Livello 5 – Per i puristi: componenti e CSS separato** (slide 17–20)
	- [[#Slide 17 – Per i puristi|Componenti con @apply e CSS a parte]]
	- [[#Slide 18 – 09 · Da utility a componenti|Nomi semantici e @layer components]]
	- [[#Slide 19 – 10 · Bottoni: stati e varianti|Pattern classe base + modificatore, utility vs componente]]
	- [[#Slide 20 – 11 · Il CSS in un file a parte|style.css esterno, @theme static e cascade layer]]
7. **Confronto finale tra gli approcci** (slide 21)
	- [[#Slide 21 – Tre modi, lo stesso risultato|Utility, @apply e CSS esterno: pro e contro]]

---
## Slide 1 – Laboratorio Tailwind CSS

*LABORATORIO · MINI ESERCIZI GUIDATI*

`text-teal-700` `flex` `p-8` `md:grid-cols-3` `@theme` `@apply`

**Laboratorio *Tailwind CSS***

11 mini esercizi · 2 ore · da spartano a purista

>> Tailwind è un framework CSS *utility-first*: invece di scrivere regole CSS con selettori propri, si compongono nell'HTML tante classi piccole, ognuna corrispondente (quasi sempre) a una sola dichiarazione CSS. Le "etichette" in alto riassumono il percorso: utility semplici (`text-teal-700`, `p-8`), layout (`flex`), responsive (`md:grid-cols-3`), tema personalizzato (`@theme`) e componenti (`@apply`).

---
## Slide 2 – Come funziona il laboratorio

*PRIMA DI INIZIARE*

- **11 mini esercizi** – Uno per cartella, ognuno con il suo file di partenza
- **5 livelli** – Dal Tailwind più spartano fino all'approccio dei puristi
- **2 h di laboratorio** – Ogni esercizio indica i minuti a disposizione
- **0 installazioni** – Sempre e solo il CDN: bastano browser ed editor

**COME SI LAVORA**

- **Leggi la consegna** – È nella slide e nel commento in cima al file di partenza.
- **Riparti quando vuoi** – Le cartelle sono indipendenti: se resti indietro, apri l'esercizio successivo.
- **Ispeziona il risultato** – Con i DevTools (F12) vedi le classi applicate e il CSS generato da Tailwind.

>> Nei DevTools, selezionando un elemento, il pannello *Styles* mostra per ogni classe Tailwind la regola CSS reale generata (es. `.p-10 { padding: calc(var(--spacing) * 10); }`): è il modo più rapido per imparare cosa fa ogni utility.

---
## Slide 3 – Il kit del laboratorio

*PRIMA DI INIZIARE*

*index.html · dentro la `<head>`: Tailwind v4 dal CDN, in tutti gli esercizi*
```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

*La cartella che ricevete*
```text
laboratorio-tailwind/
  esercizi/
    01-primo-contatto/
      index.html
    02-card-speaker/
    …
    11-css-separato/
      index.html
      style.css
```

- **Un editor** – Visual Studio Code, o quello che usate di solito.
- **Il browser, con i DevTools** – F12 per ispezionare gli elementi, Ctrl+Shift+M per la vista da telefono.
- **Live Server, se vi va** – L'estensione di VS Code ricarica la pagina a ogni salvataggio.

Promemoria: il CDN è pensato per esercizi e prototipi, non per i siti in produzione.

>> Lo script `@tailwindcss/browser` legge le classi presenti nella pagina e genera il CSS direttamente nel browser, a ogni caricamento (e osserva il DOM per le modifiche). Comodo per sperimentare, ma pesante e lento per un sito vero: in produzione si usa la build (CLI, plugin di Vite/PostCSS) che produce un file CSS statico contenente solo le classi usate.

---
## Slide 4 – Da spartano a purista

*IL PERCORSO*

![[TWL02-s004-1.png]]

| Fase | Contenuto | Esercizi | Tempo |
|---|---|---|---|
| Avvio | Regole, kit e percorso | – | 10 min |
| 01 · Spartano | Colori, spaziature, tipografia | Es. 01–02 | 15 min |
| 02 · Layout | Flexbox, grid e position | Es. 03–04 | 18 min |
| 03 · Responsive e stati | Breakpoint, varianti, valori arbitrari | Es. 05–06 | 18 min |
| 04 · Su misura | @theme: colori, font, token | Es. 07–08 | 15 min |
| 05 · Per i puristi | HTML con soli nomi semantici: componenti con @apply, poi il CSS in un file a parte | Es. 09–11 | 34 min |
| Chiusura | Confronto finale | – | 10 min |

Lo stile sta nelle classi dell'HTML → Lo stile sta in un file CSS a parte

---
## Slide 5 – Spartano

*LIVELLO 01 · ESERCIZI 01–02 · 15 MINUTI*

**01**

Solo utility di base: colori, spaziature e tipografia

---
## Slide 6 – 01 · Primo contatto

*LIVELLO 1 · SPARTANO · 7 minuti*

**CONSEGNA**

1. Aggiungi lo script del CDN nella `<head>`.
	- Ricarica: titoli e link perdono lo stile del browser. È il Preflight, il reset di Tailwind.
2. Applica a ogni elemento le sue classi.

| Elemento | Classi |
|---|---|
| pagina | `bg-stone-100 p-10` |
| data | `text-sm font-semibold uppercase tracking-widest text-teal-700` |
| titolo | `text-5xl font-bold text-stone-900` |
| testo | `mt-2 text-lg text-stone-600` |
| link | `inline-block mt-6 px-5 py-2 rounded-lg bg-teal-700 text-white font-semibold` |

**RISULTATO ATTESO** (*01-primo-contatto/index.html*)

![[TWL02-s006-1.png|500]]

>> Il **Preflight** azzera gli stili predefiniti del browser: `h1` ha la stessa dimensione del testo normale, i link non sono più blu e sottolineati, i margini spariscono. Tutto lo stile va quindi dichiarato con le classi.
>>
>> Corrispondenze principali (Tailwind v4, con `--spacing: 0.25rem`, quindi `p-N` = $N \cdot 0.25$ rem):
>> - `p-10` → `padding: 2.5rem`; `mt-2` → `margin-top: 0.5rem`; `mt-6` → `1.5rem`; `px-5` → padding orizzontale `1.25rem`; `py-2` → padding verticale `0.5rem`
>> - `text-sm` → `font-size: 0.875rem`; `text-lg` → `1.125rem`; `text-5xl` → `3rem` (ogni `text-*` imposta anche un `line-height` adeguato)
>> - `font-semibold` → `font-weight: 600`; `font-bold` → `700`
>> - `uppercase` → `text-transform: uppercase`; `tracking-widest` → `letter-spacing: 0.1em`
>> - `rounded-lg` → `border-radius: 0.5rem`
>> - `inline-block` serve perché un link è *inline*: senza, margini verticali e padding non spingerebbero gli elementi vicini.
>> - I colori seguono lo schema `proprietà-colore-tonalità` (`bg-`, `text-`, `border-` + `stone`, `teal`… + 50–950): più alto il numero, più scuro il colore.

---
## Slide 7 – 02 · La card dello speaker

*LIVELLO 1 · SPARTANO · 8 minuti*

**CONSEGNA**

1. Pagina grigio chiaro, con spazio intorno
	- `bg-stone-100 p-10`
2. Card bianca, larga al massimo 24rem e centrata
	- `max-w-sm mx-auto bg-white p-8 text-center`
3. Bordo sottile, angoli arrotondati e ombra
	- `border border-stone-200 rounded-2xl shadow-md`
4. Foto rotonda e centrata nella card
	- `size-24 rounded-full mx-auto`
5. Ruolo in maiuscolo, bottone con solo il bordo
	- `uppercase tracking-wide · border-2 rounded-full`

**RISULTATO ATTESO** (*02-card-speaker/index.html*)

![[TWL02-s007-1.png|500]]

>> - `max-w-sm` → `max-width: 24rem`; `mx-auto` → `margin-left/right: auto`, che centra un blocco con larghezza limitata.
>> - `border` → bordo di `1px` (stile `solid`); `border-2` → `2px`. Il colore si dà a parte con `border-stone-200`.
>> - `rounded-2xl` → `border-radius: 1rem`; `rounded-full` → raggio "infinito", che rende cerchio un elemento quadrato e "pillola" un rettangolo.
>> - `size-24` imposta insieme `width` e `height` a `6rem`.
>> - `tracking-wide` → `letter-spacing: 0.025em`.
>> - Per centrare la foto con `mx-auto` serve che sia un elemento di blocco: un `<img>` è inline di default, ma il Preflight di Tailwind lo rende già `display: block`.

---
## Slide 8 – Layout

*LIVELLO 02 · ESERCIZI 03–04 · 18 MINUTI*

**02**

Flexbox, grid e posizionamento

---
## Slide 9 – 03 · La navbar

*LIVELLO 2 · LAYOUT · 8 minuti*

**CONSEGNA**

1. Logo, menu e bottone sulla stessa riga
	- `flex`
2. Centrati in verticale e spinti agli estremi
	- `items-center justify-between`
3. Link del menu affiancati e distanziati
	- `flex gap-8`
4. Sfondo bianco, bordo in basso e padding
	- `bg-white border-b border-stone-200 px-8 py-4`
5. La barra resta in alto quando scorri
	- `sticky top-0`

**RISULTATO ATTESO** (*03-navbar/index.html*)

![[TWL02-s009-1.png|500]]

*Il contenuto scorre sotto la barra, che resta in alto.*

>> - `flex` → `display: flex`: i figli diretti si dispongono in riga (asse principale orizzontale).
>> - `items-center` → `align-items: center` (asse trasversale, verticale); `justify-between` → `justify-content: space-between` (primo e ultimo elemento agli estremi, lo spazio libero distribuito in mezzo).
>> - `gap-8` → `gap: 2rem` tra gli elementi flex, senza margini sui singoli link.
>> - `border-b` → `border-bottom-width: 1px`.
>> - `sticky top-0` → `position: sticky; top: 0`: l'elemento scorre normalmente finché non raggiunge il bordo superiore della viewport, poi resta "incollato" lì (finché il suo contenitore è visibile). Se il contenuto la copre, può servire anche uno `z-index` (es. `z-10`).

---
## Slide 10 – 04 · La griglia del programma

*LIVELLO 2 · LAYOUT · 10 minuti*

**CONSEGNA**

1. Sezione centrata, con spazio intorno
	- `max-w-5xl mx-auto px-8 py-12`
2. Tre colonne, con spazio tra le card
	- `grid grid-cols-3 gap-6`
3. Card bianca: la copertina non esce dagli angoli
	- `bg-white rounded-xl shadow overflow-hidden`
4. Badge «Nuovo» nell'angolo in alto a destra
	- `card: relative · badge: absolute top-3 right-3`
5. Orario e aula ai due lati della card
	- `flex justify-between`

**RISULTATO ATTESO** (*04-griglia-programma/index.html*)

![[TWL02-s010-1.png|500]]

>> - `max-w-5xl` → `max-width: 64rem`; `py-12` → padding verticale `3rem`.
>> - `grid grid-cols-3` → `display: grid; grid-template-columns: repeat(3, minmax(0, 1fr))`: tre colonne di uguale larghezza; `gap-6` → `1.5rem` tra righe e colonne.
>> - `overflow-hidden` taglia i figli che sporgono dal box: così la copertina colorata, che è rettangolare, segue gli angoli arrotondati (`rounded-xl` → `0.75rem`) della card.
>> - `relative` sulla card la rende il *containing block* del badge: `absolute top-3 right-3` posiziona il badge a `0.75rem` dal bordo superiore e destro **della card**, non della pagina.

---
## Slide 11 – Responsive e stati

*LIVELLO 03 · ESERCIZI 05–06 · 18 MINUTI*

**03**

Breakpoint mobile first, varianti e valori arbitrari

---
## Slide 12 – 05 · Mobile first

*LIVELLO 3 · RESPONSIVE E STATI · 10 minuti*

**CONSEGNA**

1. Guarda la pagina in vista telefono
	- `DevTools: F12, poi Ctrl+Shift+M`
2. Griglia: una colonna, poi due, poi tre
	- `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`
3. Menu nascosto sul telefono, visibile da 768px
	- `hidden md:flex`
4. Titolo più piccolo e centrato sul telefono
	- `text-3xl md:text-5xl text-center md:text-left`
5. Meno spazio ai lati sugli schermi piccoli
	- `px-4 md:px-8`

**RISULTATO ATTESO**

![[TWL02-s012-1.png|500]]

- Telefono: una colonna, menu nascosto
- Da 1024px: tre colonne, menu visibile

>> **Mobile first**: una classe senza prefisso vale per *tutte* le larghezze; un prefisso come `md:` significa "da questa larghezza in su" (media query `min-width`). Si scrive quindi prima lo stile per il telefono e poi si "sovrascrive" per gli schermi più grandi.
>>
>> Breakpoint predefiniti di Tailwind v4:
>>
>> | Prefisso | Da | Media query |
>> |---|---|---|
>> | `sm:` | 640px | `@media (width >= 40rem)` |
>> | `md:` | 768px | `@media (width >= 48rem)` |
>> | `lg:` | 1024px | `@media (width >= 64rem)` |
>> | `xl:` | 1280px | `@media (width >= 80rem)` |
>> | `2xl:` | 1536px | `@media (width >= 96rem)` |
>>
>> `hidden md:flex` → `display: none` sotto i 768px, `display: flex` da 768px in su. Errore tipico: usare `sm:` pensando "sul telefono", mentre `sm:` si applica dai 640px in su.

---
## Slide 13 – 06 · Il form: stati e valori arbitrari

*LIVELLO 3 · RESPONSIVE E STATI · 8 minuti*

**CONSEGNA · RENDI INTERATTIVO IL FORM**

| Variante | Quando | Classi |
|---|---|---|
| `hover:` | al passaggio del mouse | `hover:bg-teal-800 transition` |
| `focus:` | campo attivo | `focus:outline-none focus:ring-2 focus:ring-teal-500` |
| `active:` | mentre clicchi | `active:scale-95` |
| `disabled:` | bottone disattivato | `disabled:opacity-50 disabled:cursor-not-allowed` |
| `placeholder:` | testo segnaposto | `placeholder:text-stone-400` |
| `[ … ]` | valori fuori scala | titolo `text-[28px]` · testo `max-w-[45ch]` |

**RISULTATO ATTESO** (*06-form-e-stati/index.html*)

![[TWL02-s013-1.png|500]]

>> - Ogni variante corrisponde a una pseudo-classe/pseudo-elemento CSS: `hover:` → `:hover`, `focus:` → `:focus`, `active:` → `:active`, `disabled:` → `:disabled`, `placeholder:` → `::placeholder`. Es. `hover:bg-teal-800` genera `.hover\:bg-teal-800:hover { background-color: … }` (in v4 l'hover si applica solo su dispositivi che supportano davvero il passaggio del mouse).
>> - `transition` anima i cambi di colore, ombre, trasformazioni ecc. (durata predefinita 150ms).
>> - `focus:ring-2` disegna un anello di `2px` con un `box-shadow`; dato che `focus:outline-none` toglie il contorno del browser, l'anello è necessario per l'accessibilità (chi naviga da tastiera deve vedere quale campo è attivo).
>> - `active:scale-95` → rimpicciolisce l'elemento al 95% mentre si tiene premuto: effetto "pressione".
>> - Valori arbitrari: tra parentesi quadre si scrive un qualsiasi valore CSS fuori dalla scala del tema. `text-[28px]` → `font-size: 28px`; `max-w-[45ch]` → `max-width: 45ch` (circa 45 caratteri per riga, una misura comoda per la leggibilità).

---
## Slide 14 – Su misura

*LIVELLO 04 · ESERCIZI 07–08 · 15 MINUTI*

**04**

Colori, font e token con @theme, sempre dal CDN

---
## Slide 15 – 07 · I colori del tema

*LIVELLO 4 · SU MISURA · 7 minuti*

*07-colori-del-tema/index.html · nella `<head>`*
```html
<style type="text/tailwindcss">
  @theme {
    --color-brand-50:  #f0fdfa;
    --color-brand-100: #ccfbf1;
    --color-brand-500: #14b8a6;
    --color-brand-700: #0f766e;
    --color-brand-800: #115e59;
  }
</style>
```

Ogni variabile `--color-*` diventa una famiglia di classi: `bg-brand-700`, `text-brand-800`, `border-brand-100`…

**CONSEGNA**

1. Copia il blocco nella `<head>`, sotto lo script del CDN.
2. Sostituisci **`teal-`** con **`brand-`** in tutto il file (Ctrl+H): il sito resta uguale, ma ora i colori sono tuoi.
3. Prova a mettere **`#7c3aed`** in **`--color-brand-700`**: cambi un valore, cambia tutto il sito.

![[TWL02-s015-1.png|400]]

*Iscriviti `#0f766e` → Iscriviti `#7c3aed`*

>> - `type="text/tailwindcss"` dice allo script del CDN di elaborare quel blocco come sorgente Tailwind (dove valgono `@theme`, `@apply`, ecc.); un normale `<style>` verrebbe letto dal browser come CSS puro.
>> - In v4 il tema si configura in CSS, non più in un `tailwind.config.js`: ogni variabile in `@theme` è un *design token*. Il prefisso (`--color-`) dice a Tailwind che tipo di utility generare, il resto (`brand-700`) diventa il nome usato nelle classi.
>> - I valori sono anche vere variabili CSS: `bg-brand-700` produce `background-color: var(--color-brand-700)`, per questo cambiando il valore in un solo punto cambia tutto il sito.
>> - I valori riportati sono proprio quelli della palette `teal` di Tailwind v3 (`#0f766e` = teal-700): per questo, dopo la sostituzione, il sito resta (quasi) identico.

---
## Slide 16 – 08 · Font e token

*LIVELLO 4 · SU MISURA · 8 minuti*

*08-font-e-token/index.html · nella `<head>`*
```html
<link rel="stylesheet" href="…fonts.googleapis.com…">
<!-- indirizzo completo nel file di partenza -->

<style type="text/tailwindcss">
  @theme {
    /* …i colori dell'esercizio 07… */
    --font-sans: "DM Sans", sans-serif;
    --font-display: "Instrument Serif", serif;
    --text-hero: 4.5rem;
    --radius-card: 1.25rem;
    --shadow-soft: 0 10px 30px rgb(0 0 0 / 0.12);
  }
</style>
```

**OGNI VARIABILE, LA SUA CLASSE**

| Variabile | Classe | Dove usarla |
|---|---|---|
| `--font-sans` | *nessuna classe* | diventa il font di tutta la pagina |
| `--font-display` | `font-display` | titoli e logo; togli `font-bold`, il font ha un solo peso |
| `--text-hero` | `md:text-hero` | titolo principale, da tablet in su |
| `--radius-card` | `rounded-card` | card del programma e box della newsletter |
| `--shadow-soft` | `shadow-soft` | al posto di `shadow`, sugli stessi elementi |

Il nome dopo il prefisso diventa il nome della classe.

>> - Ogni prefisso del tema corrisponde a una famiglia di utility: `--font-*` → `font-*` (`font-family`), `--text-*` → `text-*` (`font-size`), `--radius-*` → `rounded-*` (`border-radius`), `--shadow-*` → `shadow-*` (`box-shadow`), `--color-*` → `bg-*`, `text-*`, `border-*`…
>> - `--font-sans` non ha bisogno di classi perché il Preflight imposta il font dell'`html` proprio con questa variabile: ridefinendola cambia il font predefinito di tutta la pagina (la classe `font-sans` esiste comunque, ma non serve applicarla).
>> - Se un font ha un solo peso (come Instrument Serif, solo 400), chiedendo `font-bold` il browser lo "ingrassa" artificialmente (*faux bold*), con un risultato brutto: da qui il consiglio di togliere `font-bold`.
>> - `4.5rem` = 72px con la dimensione base di 16px.

---
## Slide 17 – Per i puristi

*LIVELLO 05 · ESERCIZI 09–11 · 34 MINUTI*

**05**

Componenti con @apply e CSS in un file a parte

---
## Slide 18 – 09 · Da utility a componenti

*LIVELLO 5 · PER I PURISTI · 12 minuti*

**CONSEGNA**

1. Nella sezione Programma sostituisci le utility con nomi che descrivono il contenuto.
	- `program · program-title · talks · talk`
	- `talk-cover · talk-badge · talk-body`
	- `talk-title · talk-text · talk-meta`
2. Sposta le stesse utility nel blocco di stile, dentro **`@layer components`**, con **`@apply`**.
3. Ricarica: la pagina deve restare identica.

> **Due trappole**
> **`@apply`** accetta solo utility: **`@apply talk`** dà errore. E un errore nel blocco ferma tutto Tailwind: controlla la console.

*09-componenti-apply/index.html · prima*
```html
<article class="relative bg-white rounded-card
                shadow-soft overflow-hidden">
```

*index.html · dopo*
```html
<article class="talk">
```

*nel `<style type="text/tailwindcss">` · dopo*
```css
@layer components {
  .talk {
    @apply relative bg-white rounded-card
           shadow-soft overflow-hidden;
  }
}
```

>> - `@apply` copia nella regola le dichiarazioni CSS delle utility indicate: `.talk` diventa equivalente alla somma di `relative`, `bg-white`, `rounded-card`, ecc. Funziona anche con le utility create dal tema (`rounded-card`, `shadow-soft`) e con le varianti (es. `@apply hover:bg-brand-800`).
>> - `@layer components` mette queste classi nel layer dei componenti, che nell'ordine dei *cascade layer* di Tailwind viene **prima** di quello delle utility: in caso di conflitto vince sempre l'utility scritta nell'HTML (lo si verifica nell'esercizio 10, punto 4).
>> - I nomi "semantici" (`talk`, `talk-title`…) descrivono *che cosa* è l'elemento, non *come* appare: è l'approccio del CSS tradizionale.

---
## Slide 19 – 10 · Bottoni: stati e varianti

*LIVELLO 5 · PER I PURISTI · 10 minuti*

**CONSEGNA**

1. Crea **`.btn`**: la forma comune a tutti i bottoni, con **`focus-visible:`** e **`disabled:`**.
	- `px-5 py-2.5 rounded-full font-semibold transition`
2. Crea **`.btn-primary`** (pieno) e **`.btn-outline`** (solo bordo), ognuno con il suo **`hover:`**.
3. Nell'HTML combina le classi. Niente **`@apply btn`**: non funziona.
	- `class="btn btn-primary"`
4. Prova ad aggiungere **`rounded-lg`** a un bottone: la utility vince sul componente.

*10-bottoni-varianti/index.html*
```html
<a class="btn btn-primary">Iscriviti</a>
<a class="btn btn-outline">Vedi il programma</a>
<button class="btn btn-primary" disabled>
  Workshop al completo
</button>
```

![[TWL02-s019-1.png|450]]

- Iscriviti – `btn btn-primary` · Iscriviti – `hover:`
- Vedi il programma – `btn btn-outline` · Workshop al completo – `disabled:`

>> - È il pattern "classe base + modificatore" (simile a BEM o Bootstrap): `.btn` contiene ciò che hanno in comune tutti i bottoni, `.btn-primary`/`.btn-outline` solo ciò che cambia (colori, bordo). Così non si duplica la forma in ogni variante.
>> - `py-2.5` → padding verticale `0.625rem` (2,5 × 0.25rem): la scala ammette anche i mezzi passi.
>> - `focus-visible:` → `:focus-visible`: l'anello di focus compare quando si arriva al bottone con la tastiera, ma non dopo un clic del mouse.
>> - Il punto 4 funziona perché `rounded-lg` sta nel layer `utilities`, che viene dopo `components`: la regola del layer successivo vince indipendentemente dalla specificità.

---
## Slide 20 – 11 · Il CSS in un file a parte

*LIVELLO 5 · PER I PURISTI · 12 minuti*

**CONSEGNA**

1. Collega **`style.css`** nella `<head>`, dopo lo script del CDN.
	- `<link rel="stylesheet" href="style.css">`
2. Cambia **`@theme`** in **`@theme static`**: così Tailwind genera tutte le variabili del tema.
3. Riscrivi ogni regola **`@apply`** in CSS classico, con le variabili del tema.
	- `var(--color-brand-100) · var(--radius-card)`
4. Media query a mano, e nell'HTML nessuna utility: anche il body si stila in style.css.
	- `@media (width >= 40rem) { … }`

*11-css-separato/style.css*
```css
.talk {
  position: relative;
  background: white;
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-soft);
  overflow: hidden;
}
```

- ⚠ Nel file esterno **`@apply`** e **`--spacing()`** non funzionano: è CSS normale.
- ⚠ Il CSS esterno non sta in un layer: vince anche sulle utility.

>> - Perché `@theme static`: normalmente Tailwind v4 emette in `:root` solo le variabili del tema effettivamente usate da qualche classe. Se l'HTML non contiene più utility, nessuna variabile verrebbe generata e `var(--radius-card)` nel file esterno non avrebbe valore; `static` le genera tutte comunque.
>> - Il file `style.css` è collegato con un normale `<link>`: il browser lo legge direttamente, senza passare da Tailwind, quindi le direttive di Tailwind (`@apply`, `@theme`, la funzione `--spacing()`) non vengono interpretate. Le variabili CSS (`var(--…)`) invece sì, perché sono CSS standard.
>> - Nei *cascade layer* gli stili **fuori da ogni layer** hanno la precedenza su quelli dentro un layer, a prescindere dalla specificità: per questo una regola di `style.css` batte anche un'utility scritta nell'HTML.
>> - `@media (width >= 40rem)` usa la sintassi a intervalli (*range syntax*) delle media query, equivalente a `(min-width: 40rem)`; 40rem è il breakpoint `sm` di Tailwind.

---
## Slide 21 – Tre modi, lo stesso risultato

*CHIUSURA*

**ESERCIZI 01–08 · Utility nell'HTML**
```html
class="relative bg-white
rounded-card shadow-soft
overflow-hidden"
```
- \+ Veloce, tutto sotto gli occhi
- − Markup lungo e ripetuto

**ESERCIZI 09–10 · Componenti con @apply**
```css
class="talk"
.talk { @apply relative
  bg-white rounded-card … }
```
- \+ HTML pulito, stile in un punto
- − Nomi di classi da inventare

**ESERCIZIO 11 · CSS in un file a parte**
```css
class="talk"
.talk { border-radius:
  var(--radius-card); … }
```
- \+ Separazione totale, CSS classico
- − Varianti e valori scritti a mano

**UN BUON COMPROMESSO:** Utility nell'HTML per imparare e prototipare, **@apply** per ciò che si ripete davvero.

>> Riassunto in tabella:
>>
>> | Approccio | Dove sta lo stile | Pro | Contro |
>> |---|---|---|---|
>> | Utility nell'HTML | attributo `class` | veloce, tutto visibile | markup lungo e ripetuto |
>> | `@apply` | blocco `text/tailwindcss` | HTML pulito, stile centralizzato | nomi da inventare |
>> | CSS esterno | `style.css` | separazione totale | varianti e media query a mano |
>>
>> Nei progetti con framework a componenti (React, Vue, Svelte…) la ripetizione delle utility si risolve spesso con un componente del framework (es. un `<Button>`), riducendo ulteriormente il bisogno di `@apply`.

---
## Riassunto

>> **Struttura del laboratorio**
>> - Tailwind v4 *utility-first*: ogni classe ≈ una dichiarazione CSS; caricato solo via CDN (`@tailwindcss/browser@4`), adatto a prototipi, non alla produzione (lì si usa la build).
>> - 11 esercizi in 5 livelli: dallo stile nelle classi dell'HTML ("spartano") allo stile in un file CSS separato ("purista").
>> - Il **Preflight** azzera gli stili del browser: tutto va dichiarato con le classi.
>>
>> **Livello 1 – Spartano (es. 01–02)**
>> - Scala di spaziatura: `p-N` = N × 0.25rem (`p-10` = 2.5rem); colori `proprietà-colore-tonalità` (`bg-teal-700`, 50–950).
>> - Tipografia: `text-sm/lg/5xl`, `font-semibold/bold`, `uppercase`, `tracking-widest`.
>> - Card: `max-w-sm mx-auto` (centratura), `border`, `rounded-2xl`, `rounded-full`, `shadow-md`, `size-24`.
>>
>> **Livello 2 – Layout (es. 03–04)**
>> - Flexbox: `flex items-center justify-between gap-8`; barra fissa con `sticky top-0`.
>> - Grid: `grid grid-cols-3 gap-6`; `overflow-hidden` per gli angoli arrotondati.
>> - Posizionamento: `relative` sul contenitore + `absolute top-3 right-3` sul badge.
>>
>> **Livello 3 – Responsive e stati (es. 05–06)**
>> - **Mobile first**: classe senza prefisso = tutte le larghezze; `sm:` 640px, `md:` 768px, `lg:` 1024px valgono "da lì in su" (`min-width`). Es. `hidden md:flex`.
>> - Varianti = pseudo-classi: `hover:`, `focus:`, `active:`, `disabled:`, `placeholder:`; `focus:ring-2` sostituisce l'outline (accessibilità).
>> - Valori arbitrari: `text-[28px]`, `max-w-[45ch]`.
>>
>> **Livello 4 – Su misura (es. 07–08)**
>> - `@theme` in `<style type="text/tailwindcss">`: ogni variabile è un design token; il prefisso decide la famiglia di utility (`--color-*` → `bg-/text-/border-*`, `--font-*` → `font-*`, `--text-*`, `--radius-*` → `rounded-*`, `--shadow-*`).
>> - Le utility usano `var(--…)`: si cambia un valore, cambia tutto il sito. `--font-sans` cambia il font predefinito.
>>
>> **Livello 5 – Per i puristi (es. 09–11)**
>> - `@layer components { .talk { @apply …; } }`: nomi semantici; `@apply` accetta solo utility, non altre classi.
>> - Pattern `.btn` + `.btn-primary`/`.btn-outline`; `focus-visible:` per il focus da tastiera.
>> - Ordine dei cascade layer: `utilities` dopo `components` (l'utility vince); CSS fuori layer vince su tutto.
>> - File esterno `style.css`: CSS puro, niente `@apply`; serve `@theme static` per generare tutte le variabili.
>>
>> **Confronto finale**: utility (veloce, markup lungo), `@apply` (HTML pulito, nomi da inventare), CSS esterno (separazione totale, tutto a mano).
