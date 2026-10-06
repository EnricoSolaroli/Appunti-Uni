[7_css_visualeffect_responsiveness](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/7_css_visualeffect_responsiveness.pdf>)

# CSS – Testo, colori ed effetti visivi, Responsiveness

## Indice

1. **Introduzione e argomenti della lezione** (slide 1–2)
	- [[#Slide 1 – CSS: Gestione di testo e colori, Responsiveness|Titolo della lezione]]
	- [[#Slide 2 – CSS|Panoramica degli argomenti]]
2. **Colori e notazioni** (slide 3–4)
	- [[#Slide 3 – Colore - Valori|Keyword, esadecimale, rgb/rgba e opacity]]
	- [[#Slide 4 – Colore - Valori|Spazio colore HSL e HSLA]]
3. **Sfondi, bordi e ombre** (slide 5–9)
	- [[#Slide 5 – Sfondo|Proprietà background e forma abbreviata]]
	- [[#Slide 6 – Sfondo|Immagini multiple, background-size e blend mode]]
	- [[#Slide 7 – Bordi|border-image e border-radius]]
	- [[#Slide 8 – Ombreggiatura|box-shadow e text-shadow]]
	- [[#Slide 9 – Prima domanda|Domanda bonus su bordi, ombre e sfondi]]
4. **Gestione del testo e liste** (slide 10–14)
	- [[#Slide 10 – Gestione del testo|Panoramica delle proprietà del testo]]
	- [[#Slide 11 – Aspetto dei caratteri|Proprietà font (family, style, weight, size)]]
	- [[#Slide 12 – Formattazione del testo|Colore, allineamento, decorazione, trasformazione]]
	- [[#Slide 13 – Formattazione del testo (2)|white-space, word-wrap, vertical-align]]
	- [[#Slide 14 – Liste|Proprietà list-style]]
5. **Filtri per immagini** (slide 15–17)
	- [[#Slide 15 – Filtri per immagini|La proprietà filter]]
	- [[#Slide 16 – Filter – Possibili valori|Funzioni di filtro disponibili]]
	- [[#Slide 17 – Seconda domanda|Domanda bonus su filtri e opacità]]
6. **Transizioni e animazioni** (slide 18–20)
	- [[#Slide 18 – Transizioni|Transizioni e proprietà transition]]
	- [[#Slide 19 – Animazioni - Keyframes|Regola @keyframes e proprietà animation]]
	- [[#Slide 20 – Animazioni - Proprietà|Sotto-proprietà delle animazioni]]
7. **Media query e breakpoint** (slide 21–29)
	- [[#Slide 21 – Ancora sui layout|Limiti del layout fluido]]
	- [[#Slide 23 – Media Query|Media query: definizione e sintassi]]
	- [[#Slide 24 – Media Query – Media Type|Media type]]
	- [[#Slide 25 – Media Query – Media Features|Media feature: width e orientation]]
	- [[#Slide 26 – Breakpoints|Breakpoint standard]]
	- [[#Slide 27 – Media Query – Esempi|Esempi di media query]]
	- [[#Slide 29 – Media Query – Esercizio|Esercizio sull'immagine flottante]]
8. **Viewport virtuale e meta tag viewport** (slide 30–32)
	- [[#Slide 30 – Viewport Virtuale|Il viewport virtuale]]
	- [[#Slide 31 – Viewport Virtuale - Esempio|Effetto sulle media query]]
	- [[#Slide 32 – Meta tag viewport|Meta tag viewport]]
9. **Organizzazione dei layout responsive** (slide 33–35)
	- [[#Slide 33 – Organizzazione dei layout|Desktop first vs mobile first]]
	- [[#Slide 34 – Desktop First vs Mobile First - Esempi|Esempi dei due approcci]]
	- [[#Slide 35 – Responsive Design – Scrolling|Evitare lo scrolling orizzontale]]
10. **Conclusioni e riferimenti** (slide 36–37)
	- [[#Slide 36 – Conclusioni|Conclusioni su CSS e Bootstrap]]
	- [[#Slide 37 – Riferimenti|Standard e bibliografia]]

---
## Slide 1 – CSS: Gestione di testo e colori, Responsiveness

**CSS**
Gestione di testo e colori
Responsiveness

---
## Slide 2 – CSS

- Colori
- Sfondo
- Bordi
- Testo, Liste e Immagini
- Transizioni e Animazioni
- Responsive Design e Media Query

*2 punti bonus* – *BONUS*

---
## Slide 3 – Colore - Valori

- I colori possono essere specificati nei seguenti modi:
	- Keyword (es: **red**, **green**, …). Lista completa: https://www.w3.org/wiki/CSS/Properties/color/keywords
	- Notazione esadecimale: `#RRGGBB` (che è possibile abbreviare nella forma `#RGB` in caso di valori duplicati)
	- Notazione decimale: `rgb(val, val, val)` dove `val` è un valore tra 0 e 255
	- Notazione decimale con trasparenza: `rgba(val, val, val / opa)` dove `val` è un valore tra 0 e 255 e `opa` è un valore tra 0 e 1 (o in %):
		- 0 (o 0%) indica la trasparenza totale
		- 1 (o 100%) l'assenza totale di trasparenza (stesso effetto di rbg).
	- `opacity`: proprietà che può essere usata in combinazione con un colore definito in **rgb** (con uno qualsiasi dei metodi precedenti) e che gestisce la trasparenza sia dello sfondo che del testo di un elemento.

>> Esempi equivalenti dello stesso rosso: `red`, `#ff0000`, `#f00`, `rgb(255, 0, 0)`. L'abbreviazione `#RGB` funziona solo se ogni coppia ha cifre uguali: `#ffcc00` → `#fc0`, mentre `#ffcc01` non si può abbreviare.
>> Sintassi del canale alpha: quella "classica" usa le virgole, `rgba(255, 0, 0, 0.5)`; quella moderna (CSS Colors 4) usa gli spazi e la barra, `rgb(255 0 0 / 50%)`, e in essa `rgb` e `rgba` sono sinonimi. La forma con le virgole + `/` della slide va presa come notazione schematica.
>> Differenza chiave: `rgba(...)` rende trasparente solo quel colore (es. solo lo sfondo), mentre `opacity: 0.5` rende semitrasparente l'intero elemento, testo e figli compresi.

---
## Slide 4 – Colore - Valori

- HSL (Hue, Saturation e Lightness) rappresenta uno spazio colorimetrico diverso. Specificato come
  `hsl(h, s, l)`
  I tre valori indicano:
	- **h**: grado di angolazione del cerchio cromatico (ammette quindi valori da 0 a 360)
	- **s**: saturazione del colore (in percentuale)
	- **l**: luminosità (in percentuale)

![[TW07-s004-1.png]]

![[TW07-s004-2.png]]

```css
hsl(0, 100%, 30%);
hsl(0, 100%, 50%);
hsl(0, 100%, 70%);
hsl(0, 100%, 90%);
```

- HSLA: estensione di HSL che include il canale alpha.

>> Sul cerchio cromatico: 0° = rosso, 120° = verde, 240° = blu (360° torna al rosso). Con $l = 50\%$ si ha il colore "puro", $l = 0\%$ è sempre nero e $l = 100\%$ sempre bianco; $s = 0\%$ dà un grigio indipendentemente da $h$.
>> HSL è comodo per creare varianti più chiare/scure dello stesso colore cambiando solo $l$, come nell'esempio (rosso scuro → rosa chiaro). Esempio HSLA: `hsla(0, 100%, 50%, 0.5)` = rosso al 50% di opacità.

---
## Slide 5 – Sfondo

- È possibile gestire lo sfondo di un elemento usando le seguenti proprietà:
	- `background-color`: permette di specificare il colore di sfondo.
	- `background-image`: permette di specificare l'url di un immagine di sfondo (es: `url("..img/prova.png")`).
	- `background-repeat`: permette di specificare se e come l'immagine deve essere ripetuta. Valori: `repeat`, `repeat-x`, `repeat-y`, `no-repeat`.
	- `background-position`: permette di specificare la posizione dell'immagine. Accetta due valori: posizione orizzontale e verticale. È possibile specificarli in lunghezza, percentuale o con una keyword (`top`, `bottom`, `right`, `left` e `center`).
- Esiste la proprietà abbreviata `background`

>> Esempio di forma abbreviata (l'ordine è flessibile):
>> ```css
>> body {
>>   background: #eee url("img/prova.png") no-repeat right top;
>> }
>> ```
>> equivale a `background-color: #eee; background-image: url(...); background-repeat: no-repeat; background-position: right top;`. Le sotto-proprietà non indicate tornano al valore iniziale.

---
## Slide 6 – Sfondo

***Sfondi con immagini multiple***: è possibile dichiarare più immagini come sfondo.
Il risultato è la sovrapposizione di tutte le immagini

`background-size`: stabilisce quanto deve essere grande l'immagine di sfondo rispetto all'elemento che la contiene (`cover`: ridimensiona l'immagine fino a coprire l'area disponibile; `contain`: ridimensiona l'immagine in modo che sia interamente visibile)

`background-blend-mode`: stabilisce come devono essere mescolati (blended) tra loro i diversi livelli dello sfondo (colori e immagini)

![[TW07-s006-1.png|500]]

```html
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <style>

      .container {
        width: 250px;
        height: 300px;
        background-size:
          cover,
          cover;
        background-image:
          url("https://i.ibb.co/vdghxsz/pexels-paul-ijsendoorn-33041.jpg"),
          url("https://i.ibb.co/RP7ndmm/pexels-wings-of-freedom-3867210.jpg");

        /* 😮😮😮 */
        background-blend-mode: overlay;
      }

    </style>

    <div class="container">
      &nbsp;
    </div>

  </body>
</html>
```

Tomasz Smykowski – source code: https://git.io/JG57F

>> Con più immagini, la prima della lista è quella disegnata più "in alto" (sopra le altre). I valori di `background-size` (e delle altre proprietà background) separati da virgola si applicano nello stesso ordine alle immagini corrispondenti.
>> Differenza `cover`/`contain`: `cover` riempie tutto il box mantenendo le proporzioni, eventualmente tagliando parte dell'immagine; `contain` mostra l'immagine intera, eventualmente lasciando spazi vuoti. `overlay` è una modalità di fusione (come nei programmi di grafica) che combina i livelli aumentando il contrasto.

---
## Slide 7 – Bordi

- `border-image`: permette di specificare una immagine che viene usata come bordo.
  Esempio: `div {border-image: url(border.png) 30 30 round;}`

![[TW07-s007-1.png]]

  Dove `border.png` è ![[TW07-s007-2.png]]

- `border-radius`: permette di specificare bordi arrotondati.
  Proprietà estese: `border-top-left-radius`, `border-top-right-radius`, `border-bottom-right-radius` e `border-bottom-left-radius`
  Esempio: `div {border: 2px solid; border-radius: 25px;}`

![[TW07-s007-3.png]]

```css
div {border-image: url(border.png) 30 30 round;}
div {border: 2px solid; border-radius: 25px;}
```

>> In `border-image`, i numeri (`30 30`) indicano come "affettare" l'immagine (slice: 30px dall'alto/basso e da destra/sinistra): gli angoli dell'immagine finiscono negli angoli del bordo, i lati vengono ripetuti lungo i lati. `round` ripete i pezzi ridimensionandoli in modo che entrino un numero intero di volte (alternative: `stretch`, `repeat`, `space`). Perché si veda, l'elemento deve avere un bordo (es. `border: 10px solid transparent`).
>> `border-radius` con più valori segue l'ordine orario a partire dall'angolo in alto a sinistra: `top-left top-right bottom-right bottom-left`; con due valori, il primo vale per top-left e bottom-right, il secondo per top-right e bottom-left.

---
## Slide 8 – Ombreggiatura

- `box-shadow`: ombreggiatura del box
- `text-shadow`: ombreggiatura del testo

![[TW07-s008-1.png|500]]

```css
h1{
	color: darkred;
	text-shadow: 5px 5px 3px rgb(0 0 0 / .3);
}
```

- `5px` → **Offset x**
- `5px` → **Offset y**
- `3px` → **Sfocatura**
- `rgb(0 0 0 / .3)` → **Colore+trasparenza**

>> Offset positivi spostano l'ombra a destra (x) e in basso (y); valori negativi a sinistra/in alto. La sfocatura è opzionale (default 0 = ombra netta).
>> `box-shadow` ha la stessa logica ma accetta anche un quarto valore di lunghezza, lo *spread* (espansione dell'ombra), e la keyword `inset` per un'ombra interna: es. `box-shadow: inset 2px 2px 5px 1px grey;`. Il colore può stare prima o dopo le lunghezze.

---
## Slide 9 – Prima domanda

*BONUS*

- **DOMANDA 1:**
  Quale insieme di regole di stile consente al browser di rendere un testo come quello mostrato qui a lato?

![[TW07-s009-1.png]]

- [ ]
```css
border-radius: 30px 30px;
border: 3px blue solid;
box-shadow: grey 15px 15px 0px;
background-color: rgba(0, 0, 255, 0.2);
color: blue;
```
- [ ]
```css
border-radius: 0px 30px;
border: 3px blue solid;
box-shadow: grey 5px 5px;
background-color: rgba(0, 0, 255, 0.2);
color: blue;
```
- [ ]
```css
border-radius: 0px 30px;
border: 3px blue solid;
box-shadow: grey 15px 15px 10px;
background-color: rgba(0, 0, 255, 0.2);
color: blue;
```
- [ ]
```css
border-radius: 0px 0px;
border: 3px blue solid;
box-shadow: 15px 15px 10px;
background-color: rgb(0, 0, 255);
color: blue;
```

>> Risposta corretta: la **terza opzione** (in basso a sinistra nella slide).
>> - Il box ha angoli arrotondati solo in alto a destra e in basso a sinistra → `border-radius: 0px 30px` (il primo valore va a top-left/bottom-right, il secondo a top-right/bottom-left). Esclude la prima opzione (tutti arrotondati) e la quarta (nessuno arrotondato).
>> - L'ombra è grigia, spostata di parecchio e sfumata → `grey 15px 15px 10px`; la seconda opzione ha un'ombra piccola (5px) e senza sfocatura.
>> - Lo sfondo è un azzurro chiaro (blu semitrasparente `rgba(0, 0, 255, 0.2)`), non blu pieno come nella quarta opzione, dove il testo blu non si leggerebbe.

---
## Slide 10 – Gestione del testo

- Esistono diverse proprietà per la gestione del testo che si occupano:
	- Dell'aspetto dei caratteri
	- Della formattazione del testo

---
## Slide 11 – Aspetto dei caratteri

```css
#tower-of-pisa {
font-style: italic;
}
```

![[TW07-s011-1.png|100]]

- Un font è insieme completo di caratteri contraddistinti da un particolare disegno.
- È possibile specificare le seguenti proprietà:
	- `font-family`: specifica il nome di uno o più font (es: *Verdana* e *Helvetica*) o un font generico (*serif, sans-serif, monospace, cursive* e *fantasy*).
	- `font-style`: specifica lo stile: *normal*, *oblique*, *italic*.
	- `font-variant`: applica l'effetto maiuscoletto (*small-caps*), di default *normal*.
	- `font-weight`: specifica il peso, in diversi modi:
		- Valori numerici: da *100* a *900*
		- Parole chiave: assolute (*normal* e *bold*) e relative (*bolder* e *lighter*).
	- `font-size`: specifica la dimensione dei caratteri, espressa come:
		- Dimensione assoluta: pixel, punti o keyword (*xx-small*, *x-small*, *small*, *medium*, *large*, *x-large*, *xx-large*).
		- Dimensione relativa: em, ex, percentuale o keyword (*smaller*, *larger*).
- Esiste la proprietà abbreviata `font` che comprende tutte le precedenti

>> Il "font-stack" in `font-family` è una lista di fallback: il browser usa il primo font disponibile, quindi conviene terminare sempre con un font generico, es. `font-family: Verdana, Helvetica, sans-serif;` (i nomi con spazi vanno tra virgolette: `"Times New Roman"`).
>> `normal` = 400 e `bold` = 700. `1em` = dimensione del font dell'elemento padre (per `font-size`), `1ex` ≈ altezza della lettera "x". La battuta della slide: la Torre di Pisa è "in corsivo" perché pende.
>> Nella forma abbreviata `font`, dimensione e famiglia sono obbligatorie e vanno in fondo, es. `font: italic bold 16px/1.5 Verdana, sans-serif;` (`/1.5` è la `line-height`).

---
## Slide 12 – Formattazione del testo

- `color`: colore del testo espresso con: nome del colore (es: red) o valori esadecimali (es: #rrggbb) o rgb (es: rgb(0,255,2).
- `letter-spacing`: *normal* o valore in pixel.
- `line-height`: interlinea espresso in lunghezza o percentuale.
- `text-align`: *left, right, center* o *justify*.
- `text-decoration`: *none, underline, overline* o *line-through*.
- `text-direction`: da destra a sinistra (*rtl)* o viceversa (*ltr).*
- `text-indent`: indentazione della prima riga di testo, espressa come lunghezza o in percentuale.
- `text-overflow`: permette di specificare il comportamento nel caso in cui porzioni di testo fuoriescano dal box che lo contiene.
- `text-transform`: *none, capitalize, uppercase* o *lowercase.*

>> Nota: in CSS la proprietà per la direzione del testo si chiama in realtà `direction` (`direction: rtl;`), non `text-direction`.
>> `text-overflow` funziona solo se il testo non va a capo e il contenitore taglia l'eccedenza; l'esempio tipico dei "puntini di sospensione":
>> ```css
>> p { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
>> ```
>> `line-height` può anche essere un numero senza unità (es. `1.5`), moltiplicato per il font-size: è la forma consigliata perché si eredita bene.

---
## Slide 13 – Formattazione del testo (2)

- `white-space`: specifica come sono gestiti spazi bianchi e andate a capo. Possibili valori:
	- *normal*: sequenze di spazi bianchi collassati in uno solo, il testo va a capo quando necessario.
	- *nowrap*: sequenze di spazi bianchi collassati in uno solo, il testo andrà a capo solo in corrispondenza di un br.
	- *pre*: sequenze di spazi bianchi saranno mantenute, il testo andrà a capo solo in corrispondenza di un br o un line break.
	- *pre-line*: sequenze di spazi bianchi collassati in uno solo, il testo andrà a capo se necessario o in corrispondenza di un line break.
	- *Pre-wrap*: sequenze di spazi bianchi saranno mantenute, il testo andrà a capo solo in corrispondenza di un `<br/>` o un line break.
- `word-wrap`: permette di forzare l'andata a capo per le parole molto lunghe che non rispettano i bordi dell'elemento contenitore.
- `word-spacing`: *normal* o valore in pixel.
- `vertical-align`: allineamento degli elementi inline. Possibili valori: *baseline, sub, super, top, text-top, middle, bottom, text-bottom*, o percentuale (riferita all'interlinea).

>> Tabella riassuntiva di `white-space` ("line break" = a capo presente nel sorgente HTML):
>>
>> | valore | spazi multipli | a capo del sorgente | a capo automatico |
>> |---|---|---|---|
>> | `normal` | collassati | ignorati | sì |
>> | `nowrap` | collassati | ignorati | no |
>> | `pre` | mantenuti | mantenuti | no |
>> | `pre-line` | collassati | mantenuti | sì |
>> | `pre-wrap` | mantenuti | mantenuti | sì |
>>
>> Attenzione: secondo la specifica `pre-wrap` va a capo **anche** quando necessario (è come `pre` ma con a capo automatico), a differenza di quanto scritto nella slide.
>> `word-wrap: break-word` (oggi chiamato anche `overflow-wrap`) spezza le parole troppo lunghe, es. URL lunghissimi.

---
## Slide 14 – Liste

- `list-style-position`: specifica la posizione del marker, se dentro al testo (*inside*) o fuori (*outside*).

![[TW07-s014-1.png]]

- `list-style-image`: specifica un'immagine come marker.
- `list-style-type`: specifica il tipo di marker. Ne esistono tantissimi sia per `ul` (disc, circle, square, …) che `ol` (upper-roman, lower-alpha, …).
- `list-style`: proprietà abbreviata.

>> Nella figura: a sinistra `outside` (default, il pallino resta fuori dal box del `<li>` e le righe successive sono allineate al testo), a destra `inside` (il pallino fa parte del contenuto e le righe successive ripartono sotto il marker).
>> Esempio di forma abbreviata: `ul { list-style: square inside; }`; `list-style: none;` rimuove i marker (tipico per i menu di navigazione).

---
## Slide 15 – Filtri per immagini

- Con la proprietà `filter` è possibile applicare alle immagini effetti visivi di vario genere.
- Esempio:

```css
img{
	filter: grayscale(100%);
}
```

![[TW07-s015-1.png]]

---
## Slide 16 – Filter – Possibili valori

- `blur(px)`: applica una sfocatura
- `brightness(%)`: regola la luminosità.
- `contrast(%)`: regola il contrasto
- `drop-shadow(hs vs b s c)`: specifica un'ombreggiatura
- `grayscale(%)`: converte l'immagine in bianco e nero
- `hue-rotate(deg)`: applica una rotazione di deg gradi della tonalità rispetto al cerchio cromatico
- `invert(%)`: inverte i colori dell'immagine
- `opacity(%)`: regola il livello di opacità dell'immagine
- `saturate(%)`: regola la saturazione dell'immagine
- `sepia(%)`: converte l'immagine in seppia
- …

>> In `drop-shadow`: hs = offset orizzontale, vs = offset verticale, b = blur, c = colore (s = spread, che però molti browser non supportano). A differenza di `box-shadow`, `drop-shadow` segue la forma reale dell'immagine (es. le parti trasparenti di un PNG).
>> Più filtri si possono combinare separandoli con spazi, applicati nell'ordine: `filter: sepia(60%) blur(2px) brightness(120%);`. Per `brightness`, `contrast`, `saturate` il valore 100% (o 1) lascia l'immagine invariata; valori oltre 100% amplificano l'effetto.

---
## Slide 17 – Seconda domanda

*BONUS*

- **DOMANDA 2:**
  Considerando la foto nelle slide precedenti (con l'ananas), con quali regole css posso ottenere l'effetto riportato qui a lato?

![[TW07-s017-1.png|200]]

- [ ]
```css
filter: sepia(100%);
border-radius: 150px;
opacity: 0.5;
```
- [ ]
```css
filter: saturate(10);
border-radius: 0px;
opacity: 0.5;
```
- [ ]
```css
filter: blur(10px);
border: 5px solid grey;
opacity: 0.5;
```
- [ ]
```css
filter: sepia(50%);
border-radius: 0px;
opacity: 1;
```

>> Risposta corretta: la **prima opzione** (in alto a sinistra nella slide).
>> - L'immagine è circolare → serve un `border-radius` grande (≥ metà del lato): `150px`. La seconda e la quarta opzione hanno `0px` (immagine quadrata), la terza non arrotonda e aggiunge un bordo grigio.
>> - I colori sono interamente virati in seppia → `sepia(100%)`; `saturate(10)` renderebbe invece i colori più accesi, `blur(10px)` sfocherebbe la foto (che invece è nitida).
>> - L'aspetto sbiadito/chiaro deriva da `opacity: 0.5` (l'immagine lascia trasparire lo sfondo bianco).

---
## Slide 18 – Transizioni

- Le transizioni sono effetti che permettono di applicare passaggi graduali da uno stile all'altro per un determinato elemento.
- Gestibile tramite le seguenti proprietà:
	- `transition-property`: proprietà che viene modificata (richiesta)
	- `transition-duration`: durata della transizione (richiesta)
	- `transition-timing-function`: velocità di esecuzione della transizione
	- `transition-delay`: indica quando la transizione inizia
- Esiste la proprietà abbreviata `transition`.
- Usando `transition` è possibile anche specificare più transizioni per elementi diversi. È sufficiente separarli con una "**,**".

>> Esempio: un pulsante che al passaggio del mouse cambia colore e si allarga gradualmente:
>> ```css
>> button {
>>   background-color: steelblue;
>>   width: 100px;
>>   transition: background-color 0.5s ease-in-out, width 1s linear 0.2s;
>> }
>> button:hover {
>>   background-color: darkred;
>>   width: 150px;
>> }
>> ```
>> Ordine nella forma abbreviata: proprietà, durata, timing-function, delay (il primo tempo è la durata, il secondo il ritardo). Valori comuni della timing-function: `ease` (default), `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(...)`. La transizione parte quando il valore della proprietà cambia (es. con `:hover` o aggiungendo una classe via JavaScript).

---
## Slide 19 – Animazioni - Keyframes

- Con la regola `@keyframe` è possibile definire delle animazioni, che coinvolge una o più proprietà.
- Sintassi:

```css
@keyframes nome{
	selettoreKeyFrame{ …}
}
```

  dove
	- *nome*: sarà il nome della nostra animazione.
	- *selettoreKeyFrame*: è la percentuale dell'animazione. Consistono in valori da 0% a 100% o nelle keyword from(0%) e to(100%).
- Una volta definita una animazione è necessario definire a quale elemento applicarla usando la proprietà `animation`.
- Sintassi:

```css
animation: nome durata;
```

>> Il nome corretto della at-rule è `@keyframes` (con la "s"). A differenza delle transizioni, le animazioni non hanno bisogno di un cambio di stato per partire e possono avere più passaggi intermedi e ripetersi.
>> Esempio:
>> ```css
>> @keyframes lampeggia {
>>   0%   { background-color: red;    opacity: 1; }
>>   50%  { background-color: yellow; opacity: 0.5; }
>>   100% { background-color: red;    opacity: 1; }
>> }
>> div {
>>   animation: lampeggia 2s infinite;
>> }
>> ```
>> Altre sotto-proprietà utili: `animation-iteration-count` (es. `infinite`), `animation-direction` (es. `alternate`), `animation-delay`, `animation-timing-function`, `animation-fill-mode` (es. `forwards` per mantenere lo stile finale).
---
## Slide 20 – Animazioni - Proprietà

- Proprietà per le animazioni:
	- `animation-name`: nome dell'animazione
	- `animation-duration`: durata dell'animazione
	- `animation-timing-function`: velocità di esecuzione dell'animazione
	- `animation-delay`: indica quando l'animazione inizia
	- `animation-iteration-count`: indica quante volte deve essere ripetuta l'animazione
	- `animation-direction`: indica se l'animazione deve essere eseguita al contrario oppure no
	- `animation-play-state`: indica se e quando l'animazione deve essere eseguita oppure deve essere messa in pausa
	- `animation-fill-mode`: indica lo stato finale dell'elemento animato, una volta terminata l'animazione

>> Esempio completo: si definiscono i fotogrammi chiave con `@keyframes` e li si collega all'elemento tramite `animation-name`. Tutte le proprietà possono essere scritte anche nella forma abbreviata `animation`.
>> ```css
>> @keyframes pulsa {
>>   from { transform: scale(1); }
>>   to   { transform: scale(1.2); }
>> }
>> .box {
>>   animation-name: pulsa;
>>   animation-duration: 1s;
>>   animation-timing-function: ease-in-out;
>>   animation-delay: 0.5s;
>>   animation-iteration-count: infinite;   /* oppure un numero, es. 3 */
>>   animation-direction: alternate;        /* normal | reverse | alternate | alternate-reverse */
>>   animation-play-state: running;         /* running | paused */
>>   animation-fill-mode: forwards;         /* none | forwards | backwards | both */
>> }
>> /* equivalente abbreviato (senza play-state, che resta running di default): */
>> .box { animation: pulsa 1s ease-in-out 0.5s infinite alternate forwards; }
>> ```
>> Nella forma abbreviata il primo valore temporale è sempre la durata, il secondo il ritardo. `forwards` fa sì che, a fine animazione, l'elemento mantenga lo stile dell'ultimo fotogramma invece di tornare allo stato iniziale.

---
## Slide 21 – Ancora sui layout

- Ritorniamo sull'esempio di layout della lezione precedente.
- Perché secondo voi non è sufficiente impostare un layout fluido?

>> **Vedi anche** → [[06 - CSS intro, box model e flexbox#Slide 46 – Layout multi colonna liquido - Display|nota 06, slide 46–50: il layout multi colonna liquido della lezione precedente]]

---
## Slide 22 – Ancora sui layout

- Ritorniamo sull'esempio di layout della lezione precedente.
- Perché secondo voi non è sufficiente impostare un layout fluido?
- Se si prova a restringere la finestra del browser, si può notare che con il layout fluido tutti gli elementi contenuti si restringeranno in maniera appropriata fino ad un **certo punto** (che, dipendendo dai contenuti del sito, varia da sito a sito).
- Oltre questo punto è necessario cambiare la disposizione degli elementi all'interno della pagina. Questo può essere fatto con le **media query**.

>> Un layout fluido (larghezze in percentuale) mantiene le *proporzioni* ma non la *disposizione*: tre colonne al 33% su uno schermo di 360px diventano colonne da circa 120px, troppo strette per contenere testo leggibile. Sotto una certa larghezza conviene quindi cambiare struttura (ad esempio impilare le colonne una sotto l'altra), e questo è proprio il compito delle media query.

---
## Slide 23 – Media Query

- Le media query permettono di applicare (o meno) delle regole CSS in base al tipo e alle caratteristiche del dispositivo su cui si visualizza la pagina Web.
- È possibile specificarle in due modi:
	- Direttamente nell'attributo *media* nel tag link che importa il foglio di stile
	  ```html
	  <link rel="stylesheet" media="media-query" href="style.css"/>
	  ```
	- Con il costrutto `@media` direttamente nel codice CSS.
- Sintassi:
  ```css
  @media not|only mediatype and (mediafeature and|or|not mediafeature) { codice css }
  ```
- In pratica, viene associata un'espressione ad un insieme di regole CSS. Se quest'espressione risulta vera, le regole vengono applicate, altrimenti no.

>> Esempio dei due modi equivalenti:
>> ```html
>> <link rel="stylesheet" media="screen and (max-width: 767px)" href="mobile.css"/>
>> ```
>> ```css
>> @media screen and (max-width: 767px) {
>>   nav { display: none; }
>> }
>> ```
>> - `not` nega l'intera media query (es. `not print` = tutto tranne la stampa).
>> - `only` serve solo a nascondere il foglio di stile ai browser molto vecchi che non supportano le media query (che leggerebbero solo `screen` ignorando il resto); nei browser moderni non cambia nulla.
>> - Più media query separate da virgola sono in OR tra loro (vedi slide 28).

>> **Vedi anche** → [[06 - CSS intro, box model e flexbox#Slide 97 – Responsive flexbox|nota 06, slide 97: flexbox responsive]] · [[08 - Tailwind CSS#Slide 40 – Responsive senza media query|nota 08: in Tailwind le media query diventano prefissi come `md:`]]

---
## Slide 24 – Media Query – Media Type

- **All**: indica tutti i media type per tutti i tipi di dispositivi. È il valore di default.
- **Print**: serve per specificare le stampanti.
- **Screen**: serve per specificare uno schermo generico(desktop, tablet, smartphone,…).
- **Speech**: serve per specificare gli screen reader, dispositivi che utilizzano la sintesi vocale per «leggere» il contenuto della pagina

>> Nel codice i media type si scrivono in minuscolo: `all`, `print`, `screen`, `speech`. Un uso tipico di `print` è nascondere menu e pubblicità quando si stampa la pagina:
>> ```css
>> @media print {
>>   nav, aside { display: none; }
>> }
>> ```

---
## Slide 25 – Media Query – Media Features

- Ne esistono tante, a cui ne saranno aggiunte altre con CSS 4.
- Le più utilizzate sono:
	- `width`: indica la larghezza della finestra del browser (il viewport). Accetta i prefissi *min-* e *max-*
	- `orientation`: indica l'orientamento del dispositivo, *landscape* o *portrait*.
- Attenzione ad utilizzare `device-width` al posto di `width`! Infatti, `device-width` indica la larghezza del dispositivo. Se ridimensionate la finestra del browser, la larghezza del dispositivo rimane invariata! Per questo motivo è preferibile utilizzare `width`.

>> `min-width: 768px` significa "larghezza $\ge 768$px", mentre `max-width: 767px` significa "larghezza $\le 767$px": entrambi gli estremi sono **inclusi**. `device-width` è oggi deprecata.

---
## Slide 26 – Breakpoints

- «Si restringeranno in maniera appropriata fino ad un **certo punto**»
- Come faccio ad identificare il punto giusto?
- In generale, esistono dei *breakpoints* che sono utilizzati generalmente per identificare smartphone, tablet e pc.
- I range sono:
	- < 768 per smartphone
	- >= 768 e <1024 per tablet
	- >= 1024 per desktop
- Ma possono essere usati anche più range! Esempio:
	- < 576 extra small device
	- >= 576 e < 768 small device
	- >= 768 e < 992 medium device
	- >= 992 e <1200 large device
	- >= 1200 extra large device

>> Il secondo insieme di range è quello usato da Bootstrap (classi `sm`, `md`, `lg`, `xl`). Tradotto in media query, ad esempio la fascia tablet diventa:
>> ```css
>> @media screen and (min-width: 768px) and (max-width: 1023px) { ... }
>> ```
>> In pratica, più che dal dispositivo, il breakpoint "giusto" dipende dai contenuti: si mette dove il layout comincia a rompersi.

---
## Slide 27 – Media Query – Esempi

- `@media print{ }`
- `@media screen and (min-width: 480px) { }`
- `@media screen and (max-width: 699px) and (min-width: 520px) {}`
- `@media screen and (max-width: 699px) and (min-width: 520px), (min-width: 1151px) { }`
- `@media only screen and (orientation: landscape) { }`

---
## Slide 28 – Media Query – Esempi

- `@media print{ }`
  Le regole vengono applicate se il dispositivo di riferimento è la stampante.
- `@media screen and (min-width: 480px) { }`
  Le regole vengono applicate se il dispositivo di riferimento è uno schermo e la sua dimensione è almeno 480px.
- `@media screen and (max-width: 699px) and (min-width: 520px) {}`
  Le regole vengono applicate se il dispositivo di riferimento è uno schermo, la sua dimensione è almeno 520px ma minore di 700px.
- `@media screen and (max-width: 699px) and (min-width: 520px), (min-width: 1151px) { }`
  Le regole vengono applicate se il dispositivo di riferimento è uno schermo, la sua dimensione è almeno 520px ma minore di 700px OPPURE la sua dimensione è almeno 1151px.
- `@media only screen and (orientation: landscape) { }`
  Le regole vengono applicate se il dispositivo di riferimento è uno schermo e la larghezza del documento è maggiore dell'altezza dello stesso.

>> Nel quarto esempio la virgola separa due media query indipendenti, in OR: la seconda, `(min-width: 1151px)`, non specifica un media type e quindi vale per `all` (anche per la stampa, non solo per lo schermo). In formula: $(\text{screen} \land 520 \le w \le 699) \lor (w \ge 1151)$.

---
## Slide 29 – Media Query – Esercizio

- Dato il sito riportato in figura, si vuole fare in modo che quando la dimensione dello schermo è inferiore a 768px, l'immagine non sia più floating ma segua il normale flusso della pagina.

![[TW07-s029-1.png|450]]

>> Possibile soluzione (supponendo che l'immagine sia resa flottante con `float: left`):
>> ```css
>> img {
>>   float: left;
>>   margin-right: 10px;
>> }
>> @media screen and (max-width: 767px) {
>>   img {
>>     float: none;      /* torna nel normale flusso */
>>     display: block;
>>     max-width: 100%;  /* evita lo scrolling orizzontale */
>>   }
>> }
>> ```
>> La media query va scritta **dopo** la regola generale: a parità di specificità vince l'ultima dichiarata.

---
## Slide 30 – Viewport Virtuale

- In alcuni casi, i dispositivi con schermo piccolo (come gli smartphone) renderizzano la pagina in una finestra (viewport) virtuale più grande dello schermo e poi restringono il risultato della renderizzazione in modo che tutto il contenuto sia visibile.
- Esempio: se lo schermo di un dispositivo è largo 640px, le pagine vengono renderizzate con una finestra virtuale di 980px e poi viene ristretta in modo che si adatti ad uno spazio di 640px.
- Questo succede perché molte pagine non sono ottimizzate per i dispositivi mobili e si vedevano male in schermi così piccoli.

>> Nell'esempio il fattore di riduzione è $640/980 \approx 0{,}65$: tutto (testo compreso) appare circa al 65% della dimensione prevista, ed è per questo che su molti siti "non mobile" bisogna zoomare per leggere.

---
## Slide 31 – Viewport Virtuale - Esempio

- Nel caso in cui il **viewport** virtuale sia di **980px**, allora la media query potrebbe non essere mai usata perché la condizione `max-width: 768px` potrebbe risultare sempre falsa!
- Per ovviare a questo problema è possibile utilizzare il metatag **viewport**.

>> La media query valuta `width` sul viewport (virtuale) e non sullo schermo fisico: con un viewport di 980px risulta sempre $980 > 768$, quindi le regole per smartphone non scattano mai, anche su un telefono.

---
## Slide 32 – Meta tag viewport

- Il meta tag **viewport** è stato introdotto con HTML5 proprio per ovviare a questo tipo di problemi.
- Il meta tag **viewport** di un sito ottimizzato per mobile ha solitamente il seguente contenuto:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  ```
- Dove:
- `width=device-width`: imposta la larghezza del viewport in modo tale che segua la larghezza del display del device
- `initial-scale=1.0`: imposta il livello di zoom iniziale quando la pagina viene caricata per la prima volta dal browser

>> Il meta tag va inserito nell'`<head>`. `device-width` è espresso in pixel CSS e non in pixel fisici: uno smartphone con display da 1080 pixel fisici e rapporto 3:1 (device pixel ratio 3) ha `device-width` pari a 360px. Di conseguenza `max-width: 767px` diventa vera e la media query funziona.

---
## Slide 33 – Organizzazione dei layout

- Due possibili approcci al Web Design:
	- Desktop First
	  ![[TW07-s033-1.png|500]]
	- Mobile First
	  ![[TW07-s033-2.png|500]]

>> - **Desktop First**: il CSS di base descrive il layout per desktop; le media query con `max-width` lo modificano man mano che lo schermo si restringe.
>> - **Mobile First**: il CSS di base descrive il layout per smartphone (di solito il più semplice, a una colonna); le media query con `min-width` aggiungono complessità man mano che lo schermo si allarga. È l'approccio oggi consigliato (ad es. da Bootstrap): i dispositivi mobili caricano solo le regole essenziali e si progetta partendo dai contenuti indispensabili.

>> **Vedi anche** → [[08 - Tailwind CSS#Slide 38 – Mobile first|nota 08, slide 38–39: Tailwind è mobile first e ha i breakpoint predefiniti]]

---
## Slide 34 – Desktop First vs Mobile First - Esempi

- A partire dal layout di esempio presentato nella scorsa lezione, si vuole fare in modo che:
	- Quando la larghezza dello schermo è compresa tra 768px e 1024px il menù deve occupare il 100% della pagina, i relativi link devono essere disposti orizzontalmente, l'`article` deve occupare il 70% della pagina mentre il restante spazio dovrà essere occupato dall'`aside`.
	- Quando la larghezza dello schermo è inferiore a 768px, l'`article` dovrà occupare il 100% della pagina mentre l'`aside` non dovrà essere visualizzato.

>> Schema delle due soluzioni (i selettori sono indicativi, da adattare al layout della lezione precedente):
>> ```css
>> /* DESKTOP FIRST: base = desktop, poi max-width */
>> /* ... regole del layout desktop ... */
>> @media screen and (max-width: 1023px) {
>>   nav { width: 100%; }
>>   nav ul { display: flex; flex-direction: row; }
>>   article { width: 70%; }
>>   aside { width: 30%; }
>> }
>> @media screen and (max-width: 767px) {
>>   article { width: 100%; }
>>   aside { display: none; }
>> }
>> ```
>> ```css
>> /* MOBILE FIRST: base = smartphone, poi min-width */
>> article { width: 100%; }
>> aside { display: none; }
>> @media screen and (min-width: 768px) {
>>   nav { width: 100%; }
>>   nav ul { display: flex; flex-direction: row; }
>>   article { width: 70%; }
>>   aside { display: block; width: 30%; }
>> }
>> @media screen and (min-width: 1024px) {
>>   /* ... regole del layout desktop ... */
>> }
>> ```
>> L'ordine delle media query è importante: nel desktop first vanno dalla più larga alla più stretta, nel mobile first dalla più stretta alla più larga, così la regola più specifica per la larghezza corrente è l'ultima e vince.

---
## Slide 35 – Responsive Design – Scrolling

- L'utente è abituato a fare lo scrolling verticale, sia su PC sia su device mobile
- Lo scrolling orizzontale invece è **SEMPRE SCONSIGLIATO** in termini di user experience!
- Alcune regole per evitare lo scrolling orizzontale
	1. Non usare elementi con larghezza prefissata, soprattutto se di grandi dimensioni. Ad esempio, se una immagine è mostrata ad una larghezza maggiore rispetto a quella del **viewport**, allora ci sarà scrolling orizzontale.
	2. Non basarsi solo sulla larghezza di un unico **viewport**. Con **viewport** di altre dimensioni si potrebbe avere un effetto totalmente differente, soprattutto nel caso di elementi con larghezze espresse in pixel o in unità di misura assolute.
	3. Usare le media query per offrire layout adeguati e adatti a display di diverse dimensioni.
	4. Accertarsi che la somma di spazio occupata da elementi inline (o inline-block) non sia mai superiore al 100%, facendo attenzione anche agli spazi bianchi e alle andate a capo nel codice HTML.

>> - Per il punto 1 una regola molto diffusa è `img { max-width: 100%; height: auto; }`: l'immagine non supera mai la larghezza del contenitore e mantiene le proporzioni.
>> - Per il punto 4: due elementi `inline-block` con `width: 50%` separati da un a capo nell'HTML non stanno sulla stessa riga, perché l'a capo viene reso come uno spazio (circa 4px) e il totale supera il 100%. Va considerato anche il box model: padding e bordi si sommano alla larghezza, a meno di usare `box-sizing: border-box`.

---
## Slide 36 – Conclusioni

- CSS vuole risolvere la separazione tra contenuto (HTML) e presentazione.
- Usa una sintassi tutta sua, usabile sia all'interno del documento che in un documento autonomo
- Le implementazioni di CSS sono quanto di più variabile si possa trovare. Non esiste un browser che implementi tutto CSS esattamente, ci sono differente tra SO e SO, versione e versione, browser e browser.
- Bootstrap è un framework che vi faciliterà la vita nello sviluppo del CSS.

>> Per verificare se una proprietà è supportata dai vari browser è utile il sito caniuse.com. Bootstrap fornisce già una griglia responsive (basata sui breakpoint della slide 26) e componenti pronti, scritti con approccio mobile first.

---
## Slide 37 – Riferimenti

- Standard completi:
	- CSS1, https://www.w3.org/TR/CSS1/
	- CSS2, http://www.w3.org/TR/CSS2
	- CSS3, https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/
- Approfondimenti su «CSS3 Guida completa per lo sviluppatore», Peter Gasston, 2011. Disponibile in biblioteca

---
## Riassunto

>> **Colori**
>> - Notazioni: keyword (`red`), esadecimale `#RRGGBB` (abbreviabile in `#RGB` se le coppie hanno cifre uguali), `rgb(r, g, b)` con valori 0–255, `rgba` con alpha tra 0 (trasparente) e 1 (opaco).
>> - `hsl(h, s, l)`: tonalità in gradi 0–360 (0° rosso, 120° verde, 240° blu), saturazione e luminosità in %; HSLA aggiunge l'alpha.
>> - `rgba` rende trasparente solo quel colore, `opacity` l'intero elemento (testo e figli compresi).
>>
>> **Sfondi, bordi, ombre**
>> - `background-color/-image/-repeat/-position`, abbreviata `background`; più immagini separate da virgola (la prima sta sopra); `background-size: cover` (copre, può tagliare) vs `contain` (intera, può lasciare vuoti); `background-blend-mode` per la fusione dei livelli.
>> - `border-radius` con due valori: il primo va a top-left/bottom-right, il secondo a top-right/bottom-left; `border-image` usa un'immagine come bordo.
>> - `text-shadow`/`box-shadow`: offset x, offset y, sfocatura, colore (`box-shadow` ammette anche spread e `inset`).
>>
>> **Testo e liste**
>> - `font-family` (lista di fallback che termina con un font generico), `font-style`, `font-variant`, `font-weight` (100–900, normal = 400, bold = 700), `font-size` (assoluta o relativa: em, ex, %).
>> - `white-space`: `normal`, `nowrap`, `pre`, `pre-line`, `pre-wrap` (differiscono per spazi collassati e a capo); `text-overflow: ellipsis` richiede `nowrap` + `overflow: hidden`.
>> - `list-style-type/-image/-position` (`inside`/`outside`).
>>
>> **Filtri, transizioni, animazioni**
>> - `filter`: `blur`, `brightness`, `contrast`, `grayscale`, `sepia`, `hue-rotate`, `invert`, `saturate`, `drop-shadow`, combinabili.
>> - Transizioni: passaggio graduale tra due stati; richieste `transition-property` e `transition-duration`, poi timing-function e delay.
>> - Animazioni: `@keyframes nome { from/0% … to/100% }` + `animation: nome durata`; non serve un cambio di stato, possono ripetersi (`iteration-count`, `direction`, `fill-mode`, `play-state`).
>>
>> **Responsive design**
>> - Il layout fluido regge solo fino a un certo punto: oltre si cambia disposizione con le media query (`@media` o attributo `media` di `<link>`).
>> - Media type: `all` (default), `print`, `screen`, `speech`; feature principali `width` (con `min-`/`max-`, estremi inclusi) e `orientation`; usare `width` e non `device-width`.
>> - Breakpoint: < 768 smartphone, 768–1023 tablet, ≥ 1024 desktop (variante Bootstrap: 576, 768, 992, 1200).
>> - La virgola tra media query equivale a OR, `and` combina le condizioni.
>> - Viewport virtuale: i telefoni renderizzano a circa 980px e poi riducono, quindi `max-width: 767px` non scatterebbe mai; si risolve con `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
>> - Desktop first: CSS base desktop + `max-width`; mobile first: CSS base mobile + `min-width` (approccio consigliato).
>> - Lo scrolling orizzontale va sempre evitato: niente larghezze fisse grandi, `img { max-width: 100%; }`, somma degli elementi inline ≤ 100%.
