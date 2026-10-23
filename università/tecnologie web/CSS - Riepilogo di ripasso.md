# CSS – Riepilogo di ripasso

Teoria completa: [[06 - CSS intro, box model e flexbox]] · [[07 - CSS testo, colori e responsiveness]]

## Indice

1. [[#1. Collegare il CSS e struttura di una regola|Collegare il CSS e struttura di una regola]]
2. [[#2. Selettori|Selettori]]
3. [[#3. Cascata, specificità ed ereditarietà|Cascata, specificità ed ereditarietà]]
4. [[#4. Unità di misura e colori|Unità di misura e colori]]
5. [[#5. Box model|Box model]]
6. [[#6. Testo e font|Testo e font]]
7. [[#7. Sfondi, bordi, ombre|Sfondi, bordi, ombre]]
8. [[#8. Display, liste, link e immagini|Display, liste, link e immagini]]
9. [[#9. Flexbox|Flexbox]]
10. [[#10. Responsive: mobile first e media query|Responsive: mobile first e media query]]
11. [[#11. Tabelle|Tabelle]]
12. [[#12. Form|Form]]
13. [[#13. Errori tipici e debug|Errori tipici e debug]]

---
## 1. Collegare il CSS e struttura di una regola

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- indispensabile per il responsive -->
  <link rel="stylesheet" href="./css/style.css" />
</head>
```

```css
selettore {
  proprietà: valore;   /* ogni dichiarazione finisce con ; */
}
/* commento */
```

- Più selettori con le stesse regole: `header, footer { … }`.
- Il CSS esterno (`<link>`) è la soluzione da usare. Evita `style="…"` inline: ha specificità altissima e mescola struttura e stile.

---
## 2. Selettori

| Selettore | Esempio | Seleziona |
|---|---|---|
| Universale | `*` | tutti gli elementi |
| Tipo | `article` | tutti gli `<article>` |
| Classe | `.card` | elementi con `class="card"` |
| ID | `#main` | l'elemento con `id="main"` (unico nella pagina) |
| Discendente | `nav a` | `a` dentro `nav`, a qualsiasi profondità |
| Figlio diretto | `nav > ul` | `ul` figli diretti di `nav` |
| Fratello adiacente | `h3 + p` | il `p` subito dopo un `h3` |
| Fratelli successivi | `h3 ~ p` | tutti i `p` dopo un `h3` (stesso genitore) |
| Attributo | `input[type="submit"]` | input con quel valore di attributo |
| Attributo presente | `a[aria-current]` | `a` che hanno l'attributo |

**Pseudo-classi** (stato o posizione):

| | |
|---|---|
| `a:hover` | al passaggio del mouse |
| `a:focus` / `:focus-visible` | elemento con il focus (tastiera) – metti lo stesso stile di `:hover` per l'accessibilità |
| `a:visited` | link già visitati |
| `li:first-child` / `:last-child` | primo / ultimo figlio |
| `li:nth-child(2)` / `(odd)` / `(even)` | n-esimo figlio, dispari, pari |
| `:not(.x)` | negazione |

**Pseudo-elementi**: `p::first-line`, `p::first-letter`, `a::before` / `::after` (con `content: "…"`).

---
## 3. Cascata, specificità ed ereditarietà

**Quale regola vince** quando due regole assegnano la stessa proprietà allo stesso elemento:
1. `!important` (da evitare)
2. **specificità** più alta
3. a parità di specificità, la regola **scritta dopo**

**Specificità** come terna (ID, classi/attributi/pseudo-classi, tipi/pseudo-elementi):

| Selettore | Specificità |
|---|---|
| `p` | (0,0,1) |
| `nav a` | (0,0,2) |
| `nav ul li a` | (0,0,4) |
| `.card` / `[type="text"]` / `:hover` | (0,1,0) |
| `nav a:hover` | (0,1,2) |
| `#main` | (1,0,0) |
| `style="…"` inline | batte tutto (tranne `!important`) |

- Si confronta da sinistra: `(0,1,0)` batte `(0,0,9)`.
- Se una regola "non funziona", di solito c'è un'altra regola più specifica: controlla in DevTools quale è barrata.
- **Ereditarietà**: le proprietà di testo (`color`, `font-*`, `line-height`, `text-align`) passano ai figli; quelle di box (`margin`, `padding`, `border`, `background`, `width`) no. Per questo `font-family` si mette su `body`.
- I link **non** ereditano il colore del genitore (il browser imposta il suo blu): per cambiarlo devi selezionare `a`. Se vuoi che lo erediti: `color: inherit;`.

---
## 4. Unità di misura e colori

| Unità | Significato | Uso tipico |
|---|---|---|
| `px` | pixel CSS | bordi, ombre, dimensioni fisse |
| `%` | percentuale del **contenitore** | larghezze, margini laterali (`margin: 0 5%`) |
| `em` | rispetto al font-size dell'elemento (o del padre per `font-size`) | padding legati al testo |
| `rem` | rispetto al font-size di `<html>` (di solito 16px) | font-size, spaziature coerenti |
| `vw` / `vh` | 1% della larghezza / altezza della finestra | sezioni a tutto schermo |

> Margini e padding verticali in `%` si calcolano sulla **larghezza** del contenitore, non sull'altezza.

**Colori**: nome (`red`), esadecimale `#2563eb` (o abbreviato `#fff`), `rgb(37, 99, 235)`, `rgba(0, 0, 0, 0.1)` (con trasparenza), `hsl(220, 83%, 53%)`.

---
## 5. Box model

Dall'interno verso l'esterno: **content → padding → border → margin**.

```css
* { box-sizing: border-box; }  /* width e height comprendono padding e border: molto più comodo */
```

| Proprietà | Valori |
|---|---|
| `width`, `height` | `200px`, `50%`, `auto` |
| `max-width`, `min-width`, `max-height` | limiti (es. `max-height: 200px`) |
| `padding` | spazio **interno**, prende il colore di sfondo |
| `margin` | spazio **esterno**, sempre trasparente; può essere negativo |
| `border` | `1px solid #d1d5db` (spessore, stile, colore) |

**Forme abbreviate** (valgono per `margin` e `padding`):

| Scrittura             | Significato                                  |
| --------------------- | -------------------------------------------- |
| `10px`                | tutti e 4 i lati                             |
| `10px 5%`             | alto/basso 10px, destra/sinistra 5%          |
| `10px 5% 20px`        | alto, destra/sinistra, basso                 |
| `10px 20px 30px 40px` | alto, destra, basso, sinistra (senso orario) |

- `margin: 0 auto;` + una `width`/`max-width` → centra un blocco orizzontalmente.
- **Margin collapsing**: i margini **verticali** di due blocchi adiacenti non si sommano, vince il più grande (non succede in un contenitore flex).
- `overflow: hidden | auto | scroll` → cosa fare se il contenuto esce dal box.

---
## 6. Testo e font

```css
body {
  font-family: Arial, Helvetica, sans-serif; /* lista di fallback, ultima una famiglia generica */
  font-size: 16px;   /* o 1rem */
  line-height: 1.5;  /* interlinea, senza unità = multiplo del font-size */
  color: #1f2937;
}
```

| Proprietà | Valori utili |
|---|---|
| `font-weight` | `normal`, `bold`, `400`, `700` |
| `font-style` | `normal`, `italic` |
| `text-align` | `left`, `center`, `right`, `justify` |
| `text-decoration` | `none` (togli la sottolineatura), `underline` |
| `text-transform` | `uppercase`, `lowercase`, `capitalize` |
| `letter-spacing`, `word-spacing` | spaziatura |
| `white-space` | `nowrap` (niente a capo) |

---
## 7. Sfondi, bordi, ombre

```css
div {
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 8px;                          /* angoli arrotondati */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);    /* x y sfocatura colore → ombra leggera */
}
```

- `box-shadow: x y blur [spread] colore [inset]`; `text-shadow: x y blur colore`.
- `border-radius: 50%` su un quadrato → cerchio.
- Bordi singoli: `border-bottom: 2px solid #2563eb;`.
- Sfondi immagine: `background-image: url("../img/x.png"); background-size: cover; background-repeat: no-repeat; background-position: center;`. Il percorso è **relativo al file CSS** (da `css/style.css` alle immagini serve `../img/`).

---
## 8. Display, liste, link e immagini

| `display` | Comportamento |
|---|---|
| `block` | va a capo, occupa tutta la larghezza, accetta width/height (`div`, `p`, `h1`, `ul`, `li`) |
| `inline` | nel flusso del testo, **ignora width/height** e i margini verticali (`a`, `span`, `img`) |
| `inline-block` | nel testo ma accetta width/height/padding |
| `none` | non viene mostrato |
| `flex` | contenitore flexbox (vedi sotto) |

**Liste senza marcatori** (menu, sidebar, form):
```css
ul { list-style-type: none; margin: 0; padding: 0; }  /* il rientro della lista è un padding-left */
```

**Link**:
```css
a { color: #2563eb; text-decoration: none; }
a:hover, a:focus { text-decoration: underline; }
```

**Link come pulsante**:
```css
a.bottone {
  display: inline-block;      /* serve per padding e margini verticali */
  padding: 8px 16px;
  background-color: #2563eb;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
}
```

**Voce di menu cliccabile su tutta l'area**: `nav ul li a { display: block; padding: 5px 0; }`. In questo modo l'`:hover` colora tutta la voce, non solo il testo.

**Immagini**:
```css
img { max-width: 100%; }               /* non escono mai dal contenitore */
figure img { max-height: 300px; }    /* limite di altezza */
.avatar { width: 64px; }             /* larghezza fissa, altezza proporzionale */
```
Se imposti solo una delle due dimensioni (`width` o `height`), l'altra segue le proporzioni. Se le imposti entrambe l'immagine si deforma, a meno di usare `object-fit: cover;`.

---
## 9. Flexbox

Si applica al **contenitore** con `display: flex;`. I figli diretti diventano *item* e si dispongono lungo l'**asse principale** (main axis); l'asse perpendicolare è il *cross axis*.

**Proprietà del contenitore**

| Proprietà | Valori | Effetto |
|---|---|---|
| `flex-direction` | `row` (default), `column`, `row-reverse`, `column-reverse` | direzione dell'asse principale |
| `flex-wrap` | `nowrap` (default), `wrap` | gli item vanno a capo se non ci stanno |
| `justify-content` | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | distribuzione lungo l'asse **principale** |
| `align-items` | `stretch` (default), `flex-start`, `center`, `flex-end`, `baseline` | allineamento lungo l'asse **trasversale** |
| `align-content` | come `justify-content` | spazio tra le **righe** (solo con `wrap` e più righe) |
| `gap` | `20px`, `10px 20px` | spazio tra gli item (non ai bordi) |

**Proprietà degli item**

| Proprietà | Effetto |
|---|---|
| `flex-grow: 1` | prende lo spazio libero in proporzione |
| `flex-shrink: 0` | non si restringe |
| `flex-basis: 50%` | dimensione di partenza lungo l'asse principale |
| `flex: 1` | abbreviazione di `1 1 0` |
| `align-self` | `align-items` solo per quell'item |
| `order: -1` | cambia l'ordine visivo (non quello nell'HTML) |
| `width: 50%` | in una riga funziona anche la larghezza in % |

> Con `flex-direction: column` gli assi si scambiano: `justify-content` lavora in verticale, `align-items` in orizzontale.

**Schemi ricorrenti**

```css
/* voci su più righe, 2 per riga */
nav ul { display: flex; flex-wrap: wrap; justify-content: space-between; }
nav ul li { width: 48%; }

/* voci tutte su un'unica riga, larghe uguali */
nav ul { display: flex; }
nav ul li { flex: 1; }

/* due colonne affiancate (es. contenuto 70% + barra laterale 25%) */
.contenitore { display: flex; justify-content: space-between; align-items: flex-start; }
.contenuto { width: 70%; }
.laterale { width: 25%; }

/* centrare un elemento */
.box { display: flex; justify-content: center; align-items: center; }
```

> `align-items: flex-start` evita che la colonna più corta si allunghi fino all'altezza dell'altra (il default `stretch` la allungherebbe).

---
## 10. Responsive: mobile first e media query

**Mobile first**: scrivi prima le regole per lo schermo piccolo, senza media query. Poi **aggiungi** quelle per gli schermi larghi dentro una `min-width`.

```css
/* 1. stile base = mobile: blocchi uno sotto l'altro */
.contenuto, .laterale { width: 100%; }

/* 2. dagli schermi di 768px in su: due colonne */
@media screen and (min-width: 768px) {
  .contenitore { display: flex; justify-content: space-between; }
  .contenuto { width: 70%; }
  .laterale { width: 25%; }
}
```

| Media query | Si applica quando |
|---|---|
| `(min-width: 768px)` | larghezza **≥ 768px** (mobile first) |
| `(max-width: 767px)` | larghezza ≤ 767px (desktop first) |
| `(orientation: landscape)` | dispositivo in orizzontale |
| `print` | in stampa |

- Breakpoint tipici: 576 / **768** / 992 / 1200 px.
- Le media query **non aumentano la specificità**. Mettile **in fondo** al file, così a parità di selettore vincono.
- Senza `<meta name="viewport" …>` lo smartphone simula uno schermo largo circa 980px e la media query mobile non scatta.
- Prova in DevTools → modalità dispositivo, oppure restringendo la finestra.

---
## 11. Tabelle

```css
table {
  width: 100%;
  border-collapse: collapse;   /* un solo bordo tra celle adiacenti */
}
th, td {
  border: 1px solid #d1d5db;
  padding: 10px;
  text-align: center;
}
th { background-color: #f3f4f6; }   /* intestazioni con sfondo diverso */
```

- `thead th` = intestazioni di colonna, `tbody th` = intestazioni di riga (`scope="row"`).
- Righe alternate: `tbody tr:nth-child(even) { background-color: #f9fafb; }`.
- Su mobile una tabella larga può uscire dal box: avvolgila in un contenitore con `overflow-x: auto;`.

---
## 12. Form

```css
form ul { list-style-type: none; padding: 0; }
form li { margin-bottom: 10px; }

label {
  display: inline-block;   /* così accetta una larghezza */
  width: 100px;            /* tutte le label larghe uguali → campi allineati */
}
input[type="text"], input[type="password"] {
  padding: 6px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
}
input[type="submit"] {
  background-color: #2563eb;
  color: #fff;
  border: none;            /* i bottoni hanno un bordo di default */
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;         /* manina al passaggio del mouse */
}
```

**Alternativa con flexbox** per allineare label e campo sulla stessa riga:
```css
form li { display: flex; align-items: center; gap: 10px; }
form label { width: 100px; }
```

> Per dare lo **stesso stile** a un pulsante e a un link puoi scrivere una sola regola con entrambi i selettori, es. `a.bottone, input[type="submit"] { … }`.

---
## 13. Errori tipici e debug

- **Regola ignorata** → controlla in DevTools (tasto destro → Ispeziona) se è barrata: c'è un selettore più specifico o scritto dopo.
- **Manca un `;` o una `}`** → anche le regole successive smettono di funzionare.
- **Percorso sbagliato** → `href="./css/style.css"` nell'HTML; da dentro `css/` le immagini sono in `../img/`.
- **Cache del browser** → ricarica forzata (Cmd+Shift+R).
- **`width` su un `<a>` non ha effetto** → è inline: serve `display: block` o `inline-block`.
- **Il menu va a capo su desktop** → controlla che `width` + margini non superino il 100%, o usa `flex: 1`.
- **La media query non scatta** → manca il meta viewport, oppure la regola base è più specifica di quella nella media query.
- **Colonne flex di altezza uguale non volute** → `align-items: flex-start`.
- **Trucco per vedere i box**: `* { outline: 1px solid red; }` (togli la riga a fine debug).
- **Validatore CSS**: https://jigsaw.w3.org/css-validator/
