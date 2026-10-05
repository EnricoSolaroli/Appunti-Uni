[6_css_intro_boxmodel_flexbox](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/6_css_intro_boxmodel_flexbox.pdf>)

# CSS – Introduzione, Box Model e Flexbox

## Indice

1. **Introduzione, origine e versioni del CSS** (slide 1–8)
	- [[#Slide 1 – CSS|Presentazione della lezione]]
	- [[#Slide 3 – L’origine|Origine: separazione contenuto/presentazione, cascata]]
	- [[#Slide 4 – Vantaggi|Vantaggi (CSS Zen Garden, dispositivi diversi)]]
	- [[#Slide 6 – Versioni|Versioni: Level 1, 2, 2.1 e moduli/snapshot]]
	- [[#Slide 7 – Supporto da parte dei browser|Supporto dei browser e verifica]]
2. **Sintassi e inclusione in HTML** (slide 9–11)
	- [[#Slide 9 – Come si applica CSS?|Struttura di una regola: selettore, proprietà, valore]]
	- [[#Slide 10 – Sintassi|Sintassi]]
	- [[#Slide 11 – Usare CSS con HTML|Fogli inline, interni ed esterni]]
3. **Selettori** (slide 12–16)
	- [[#Slide 12 – I selettori|Universale, di tipo, di prossimità]]
	- [[#Slide 13 – I selettori|Selettori di attributo, classe e id]]
	- [[#Slide 14 – Nota sui selettori di attributi|Attributi non validi]]
	- [[#Slide 15 – I selettori|Pseudo-classi e raggruppamento]]
	- [[#Slide 16 – I selettori|Pseudo-elementi]]
4. **Cascata e specificità** (slide 17–23)
	- [[#Slide 17 – Conflitti di stile|Conflitti di stile]]
	- [[#Slide 18 – La cascata – Ordinamento regole|Ordinamento delle regole nella cascata]]
	- [[#Slide 19 – Origine della dichiarazione|Origine: author, user, user agent]]
	- [[#Slide 20 – Specificità del selettore|Calcolo della specificità (x, y, w, z)]]
	- [[#Slide 21 – Specificità del selettore - Esempi|Esempi di specificità]]
	- [[#Slide 23 – Prima domanda|Domanda 1 sulla specificità]]
5. **Valori, unità di misura ed ereditarietà** (slide 24–27)
	- [[#Slide 24 – Valori|Unità relative e assolute (em, rem, px, pt)]]
	- [[#Slide 25 – Valori|Percentuali, URL, stringhe, colori]]
	- [[#Slide 26 – Valori assoluti e valori relativi|Riferimenti delle unità (viewport vw/vh)]]
	- [[#Slide 27 – Ereditarietà|Ereditarietà e inherit]]
6. **Box model** (slide 28–39)
	- [[#Slide 28 – Box Model|Il modello a scatola]]
	- [[#Slide 30 – Contenuto|Dimensioni del contenuto e overflow]]
	- [[#Slide 32 – Margin|Margin e forme abbreviate]]
	- [[#Slide 33 – Margin|Margin collapsing]]
	- [[#Slide 34 – Padding|Padding]]
	- [[#Slide 35 – Border|Border e relativi valori]]
	- [[#Slide 37 – Dimensioni del Box|Larghezza complessiva del box]]
	- [[#Slide 38 – `box-sizing`|box-sizing: content-box vs border-box]]
	- [[#Slide 39 – Seconda domanda|Domanda 2 sulle forme abbreviate]]
7. **Posizionamento e display** (slide 40–47)
	- [[#Slide 40 – Posizionamento|Il problema del posizionamento]]
	- [[#Slide 42 – Posizionamento – Comportamento 1|Elementi di blocco]]
	- [[#Slide 43 – Posizionamento – Comportamento 2|Elementi di linea]]
	- [[#Slide 45 – Display|La proprietà display]]
	- [[#Slide 46 – Layout multi colonna liquido - Display|Layout liquido a colonne con inline-block]]
8. **Float e clear** (slide 48–51)
	- [[#Slide 48 – Float|La proprietà float]]
	- [[#Slide 49 – Layout multi colonna liquido - Float|Layout liquido a colonne con float]]
	- [[#Slide 51 – Clear|La proprietà clear]]
9. **Position e z-index** (slide 52–54)
	- [[#Slide 52 – Position|static, fixed, sticky]]
	- [[#Slide 53 – `position`|relative e absolute]]
	- [[#Slide 54 – `position`|z-index]]
10. **Flexbox: concetti di base** (slide 55–62)
	- [[#Slide 55 – FlexBox|Introduzione ai flexbox]]
	- [[#Slide 57 – Concetti principali dei Flexbox|Flex container e flex item]]
	- [[#Slide 59 – Flexbox Model|Main axis e cross axis]]
	- [[#Slide 60 – `Display: block;` vs `Display: flex;`|display: block vs display: flex]]
	- [[#Slide 61 – Un esempio|Primo esempio]]
11. **Proprietà del flex container** (slide 63–80)
	- [[#Slide 63 – `flex-direction`|flex-direction]]
	- [[#Slide 67 – `justify-content`|justify-content]]
	- [[#Slide 71 – `align-items`|align-items]]
	- [[#Slide 75 – `flex-wrap`|flex-wrap]]
	- [[#Slide 78 – `align-content`|align-content]]
12. **Proprietà dei flex item, centering e gap** (slide 81–96)
	- [[#Slide 81 – `order`|order]]
	- [[#Slide 83 – `margin`|margin: auto negli item]]
	- [[#Slide 85 – Perfect Centering|Perfect centering]]
	- [[#Slide 87 – `gap`|gap (row-gap, column-gap)]]
	- [[#Slide 89 – `align-self`|align-self]]
	- [[#Slide 92 – `flex-grow`|flex-grow]]
	- [[#Slide 94 – `flex-shrink`|flex-shrink]]
	- [[#Slide 96 – Terza domanda|Domanda 3 sui flexbox]]
13. **Layout responsive con flexbox e riferimenti** (slide 97–103)
	- [[#Slide 97 – Responsive flexbox|Esempio di layout responsive]]
	- [[#Slide 101 – Riferimenti|Riferimenti e risorse]]
	
---
## Slide 2 – Premessa

- Tra tutte le tecnologie web è forse quella più odiata …
- Rimane un linguaggio FONDAMENTALE: tutti i siti contengono del CSS
- Non solo siti: Anche molte app!
- È necessario imparare le basi del linguaggio e comprendere il suo funzionamento
- Successivamente, vi mostreremo anche uno degli strumenti che offre supporto nello sviluppo del CSS

---
## Slide 3 – L’origine

- Il CSS (Cascading Style Sheets), proposto da Bert Bos e Håkon Lie, risponde all’esigenza di una tecnologia per la resa grafica degli ipertesti.
- Hanno lo scopo fondamentale di **separare contenuto** e **presentazione** nelle pagine Web.
	- **HTML** serve per definire il **contenuto** senza fornire indicazioni su come presentarlo.
	- **CSS** serve per definire **come** il contenuto deve essere presentato
- Prevista ed incoraggiata la presenza di fogli di stile **multipli**, che **agiscono uno dopo l'altro**, in **cascata**, per indicare come un documento HTML deve essere visualizzato.

>> "Cascading" si riferisce proprio a questo: più fogli di stile (del browser, dell'utente, dell'autore) e più regole possono riferirsi allo stesso elemento; un algoritmo preciso (la *cascata*, vedi slide 18–20) decide quale dichiarazione vince.

---
## Slide 4 – Vantaggi

- Lo stesso contenuto Web può essere presentato in modi diversi:
	- http://www.csszengarden.com/219/
	- http://www.csszengarden.com/221/

![[TW06-s004-1.png]]

![[TW06-s004-2.png]]

>> CSS Zen Garden usa sempre **lo stesso identico file HTML**: cambia solo il foglio di stile. È la dimostrazione pratica della separazione fra contenuto e presentazione.

---
## Slide 5 – Vantaggi

- Lo stesso contenuto può essere presentato *correttamente* su dispositivi diversi (pc, tablet e smartphone) o su media diversi (video o carta)
- Si può dividere il lavoro fra chi gestisce il contenuto e chi la presentazione
- Si riduce il tempo di scaricamento delle pagine

![[TW06-s005-1.png|500]]

>> Il tempo di scaricamento si riduce perché un foglio di stile esterno viene scaricato una sola volta e poi messo in cache dal browser, invece di ripetere le informazioni di stile in ogni pagina HTML.

---
## Slide 6 – Versioni

- CSS level 1 (W3C Rec. 1996, revisione 2008): ***linguaggio di formattazione visiva*** per specificare caratteristiche tipografiche e di presentazione per gli elementi di un documento HTML.
- CSS level 2 (W3C Rec. 1998) e CSS level 2.1 (W3C Rec. 2011, revisione 2014): introduce il supporto per media multipli e un layout più sofisticato
- Ad oggi lo standard CSS non evolve come un monolite (con versioni 3.0 o 4.0), CSS evolve per **moduli indipendenti** (tematici, che riguardano la gestione di testo, colori, media, ecc) e il W3C pubblica degli snapshot che raccolgono lo stato corrente: esiste il **CSS Snapshot 2026**

>> Per questo espressioni come "CSS3" sono solo etichette informali: ogni modulo (es. *Selectors Level 4*, *Flexbox Level 1*, *Color Level 4*) ha un proprio livello e un proprio stato di avanzamento.

---
## Slide 7 – Supporto da parte dei browser

- Il supporto dei vari browser a CSS è ancora oggi complesso e difficile: tutti i browser hanno supportato e supportano in modo diverso i CSS
	- Nessun browser ha mai supportato completamente Level 1, anche se già i primi browser che supportavano CSS avevano meccanismi per il posizionamento assoluto degli oggetti nella pagina Web (che fa parte di Level 2)
	- Ancora oggi nessun browser supporta completamente Level 2
	- Differenze sostanziali nel supporto dei moduli dello snapshot attuale

---
## Slide 8 – Verifica Supporto da parte dei browser

- È possibile controllare le funzionalità supportate dai diversi browser nelle seguenti pagine
	- https://caniuse.com
	- https://www.w3schools.com/css/
	- https://www.w3schools.com/css/css3_borders.asp

---
## Slide 9 – Come si applica CSS?

```css
Selettore {
     ProprietàX: ValoreY;
     ProprietàW: ValoreZ;
     …
}
```

https://codepen.io/editor/Silvia-Mirri/pen/01a0e7ea-3380-7516-99d0-56f13c69ceed

![[TW06-s009-1.png|500]]

```css
h1 { color : darkred ; }
```

>> La coppia `proprietà: valore;` si chiama **dichiarazione**; l'insieme di dichiarazioni fra graffe è il **blocco di dichiarazioni**; selettore + blocco formano una **regola**.

---
## Slide 10 – Sintassi

- Una regola CSS ha la seguente forma
	`Selettore { Proprietà: Valore;}`
- Un **selettore** consente di specificare un elemento o un insieme di elementi dell’albero HTML al fine di associarvi delle caratteristiche.
	Es: **`header`**, **`section`**, **`footer`**
- Una **proprietà** è una caratteristica di stile assegnabile ad un elemento.
	Es: **`background-color`**, **`width`**, **`height`**
- I **valori** dipendono ovviamente dalla proprietà.
	Es: *red*, *60%*, *100px*

---
## Slide 11 – Usare CSS con HTML

- HTML prevede l'uso di stili CSS in diversi modi:
	1. Foglio di stile ***inline***: Posizionato presso il tag di riferimento attraverso l’attributo `style` **[DA EVITARE!]**
	2. Foglio di stile ***interno***: posizionato nel tag `<style>` (nell’`header` del documento)
	3. Foglio di stile ***esterno***: Indicato dal tag `<link>` (nell’`header` del documento) **[MIGLIORE SOLUZIONE! DA ADOTTARE!]**

>> Esempi dei tre modi (qui "header" va inteso come l'elemento `<head>` del documento):
>> ```html
>> <!-- 1. inline -->
>> <p style="color: red;">Testo</p>
>>
>> <!-- 2. interno, dentro <head> -->
>> <style>
>>   p { color: red; }
>> </style>
>>
>> <!-- 3. esterno, dentro <head> -->
>> <link rel="stylesheet" href="stile.css">
>> ```
>> L'inline mescola contenuto e presentazione e non è riutilizzabile; il foglio esterno è condiviso da tutte le pagine del sito e viene messo in cache.

---
## Slide 12 – I selettori

- **Selettore universale** (**`*`**): fa match con qualsiasi elemento
- **Selettore di tipo** (**E**): fa match con gli elementi E

```css
body{ font-family: Arial; font-size: 12 pt; }
header { font-size: 18 pt; }
section { font-size: 10 pt; }
```

- **Selettori di prossimità** (**E F, E>F, …**): fanno match con elementi F che siano discendenti, figli diretti, immediatamente seguenti o fratelli successori di elementi E

```css
section p { font-size: 10 pt; }
p>strong { color: red; }
```

>> I combinatori sono: `E F` (F discendente a qualsiasi profondità di E), `E > F` (F figlio diretto di E), `E + F` (F fratello immediatamente successivo a E), `E ~ F` (F qualsiasi fratello successivo a E).
>> Attenzione: nel CSS reale fra numero e unità **non** ci va lo spazio: si scrive `12pt`, non `12 pt` (altrimenti la dichiarazione è invalida e viene ignorata).

---
## Slide 13 – I selettori

- **Selettori di attributi** (**E[foo], E[foo="bar"], …**): Fanno match con gli elementi E che possiedono l'attributo specificato o che ha un valore particolare.

```css
a[name] { color: red; }
```

- **Selettori di classe** (**E.bar   E#bar**): Il primo si usa solo per le classi, ed è equivalente a E[class="bar"]. Il secondo identifica gli elementi il cui attributo di tipo **`id`** vale "bar".

```css
h1.spiegazione { font-size: 24 px; }
.spiegazione { font-size: 12 px; }
p#note1 { font-size: 9 px; }
#note5 { color: red; }
```

>> Precisazione: `E.bar` equivale più esattamente a `E[class~="bar"]` (l'attributo `class` è una lista di parole separate da spazi e basta che una sia `bar`). Omettendo `E` (es. `.spiegazione`, `#note5`) il selettore vale per qualsiasi elemento con quella classe/id. Un `id` deve essere unico nella pagina, una classe può essere assegnata a molti elementi.

---
## Slide 14 – Nota sui selettori di attributi

Funzionano anche nel caso in cui l’attributo dichiarato non sia valido (codice HTML non valido rispetto alla grammatica dichiarata):

```html
<!DOCTYPE html>
<html lang="it">
<head>
    <style>
        div:first-of-type { margin-bottom: 5px;}
        div { padding: 10px; display: inline-block; }
        div[id] { background-color: lime; }
        div[attributo-inesistente] { background-color: yellow;}
    </style>
</head>
<body>
   <div id="div1"><p>Div con attributo valido.</p></div>
   <div attributo-inesistente><p>Questo con attributo non valido.</p>
   </div>
</body>
</html>
```

>> Risultato: il primo `div` ha sfondo verde lime, il secondo sfondo giallo. Il browser costruisce comunque il DOM includendo l'attributo sconosciuto, e il selettore lavora sul DOM, non sulla validità del documento. (Per attributi personalizzati "leciti" HTML5 prevede il prefisso `data-`, es. `data-stato`.)

---
## Slide 15 – I selettori

- **Selettori di pseudo-classi** (**E:link, E:visited, E:active, E:hover, E:focus, E:enabled, E:checked, E:lang(c)**):
	- **link, visited**: vero se l'elemento E è un link non ancora visitato o un link già visitato.
	- **hover, active, focus**: vero se sull'elemento E passa sopra il mouse, il mouse è premuto o il controllo è selezionato per accettare input.
	- **enabled, checked**: vero se elemento E è abilitato o «checked».
	- **lang(c)**: vero se l'elemento ha selezionata la lingua c.
- **,**: **raggruppamento di selettori** (selettori diversi possono usare lo stesso blocco se separati da virgola)

>> Esempi:
```css
a:hover { text-decoration: underline; }
input:focus { outline: 2px solid blue; }
h1, h2, h3 { font-family: Georgia, serif; }  /* raggruppamento */
```
>> Per i link si consiglia l'ordine `:link`, `:visited`, `:hover`, `:active` (regola mnemonica "LoVe HAte"): a parità di specificità vince l'ultima regola, quindi un ordine diverso può "nascondere" gli stati successivi.

---
## Slide 16 – I selettori

- **Selettori di pseudo-elementi** (**E::first-line  E::first-letter E::before  E::after**): Vengono attivati in corrispondenza di certe parti degli elementi E.
	- **before, after**: vero prima e dopo il contenuto dell'elemento E.
	- **first-line**: vero per la prima riga dell'elemento E.
	- **first-letter**: vero per la prima lettera di un elemento.

```css
p:first-letter {
     font-size: 300%;
     float: left;
}
```

![[TW06-s016-1.png|500]]

>> La sintassi moderna usa i doppi due punti (`::first-letter`) per distinguere gli pseudo-elementi dalle pseudo-classi; la forma con un solo `:` è accettata per compatibilità con CSS2. `::before` e `::after` generano contenuto solo se è presente la proprietà `content`, es. `p::before { content: "→ "; }`.

---
## Slide 17 – Conflitti di stile

- Nell’applicare il CSS possono nascere dei conflitti, ovvero ad uno stesso elemento sono applicate delle regole i cui valori sono in conflitto.
- Esempio:

```css
div#provaID{ background-color: red;}
div.provaClasse{ background-color: blue;}
div{background-color: green; }
```

```html
<div id=‘provaID’
class=‘provaClasse’></div>
```

- Di che colore sarà lo sfondo del `<div>`?

>> Risposta: **rosso**. Tutte e tre le regole selezionano il `div`, ma `div#provaID` ha specificità più alta (1 id + 1 elemento = 0,1,0,1) rispetto a `div.provaClasse` (0,0,1,1) e a `div` (0,0,0,1), vedi slide 20. Nota: nell'HTML reale gli attributi vanno fra apici dritti (`'` o `"`), non tipografici (`‘ ’`).

---
## Slide 18 – La cascata – Ordinamento regole

- Le dichiarazioni vengono ordinate in base ai seguenti fattori (ordinati dal più «fino» al meno importante):
	- Media
	- Importanza di una dichiarazione
	- Origine della dichiarazione
	- Specificità del selettore
	- Ordine delle dichiarazioni

>> In pratica: prima si scartano le regole non applicabili al media corrente (es. regole `@media print` quando si visualizza a schermo); poi le dichiarazioni marcate `!important` prevalgono sulle normali; poi conta l'origine (autore/utente/user agent); a parità, vince la specificità più alta; a parità anche di specificità, vince la dichiarazione che compare **per ultima**.

---
## Slide 19 – Origine della dichiarazione

- Un foglio di stile può avere 3 origini differenti, qui riportate in ordine decrescente di importanza:
	- ***Author:*** l'autore delle pagine fornisce i fogli di stile del documento specifico
	- ***User***: l'utente può fornire un ulteriore foglio di stile per indicare regole di proprio piacimento. Tipicamente è una funzione del browser
	- ***User Agent***: il browser definisce (esplicitamente o implicitamente, codificandole nel software) le regole di default per gli elementi dei documenti

>> Questo ordine vale per le dichiarazioni normali. Per quelle `!important` l'ordine si inverte: le regole `!important` dell'utente battono quelle `!important` dell'autore (così l'utente può imporre, ad esempio, font più grandi per esigenze di accessibilità).

---
## Slide 20 – Specificità del selettore

- La specificità di un selettore è data da una quadrupla **xywz** dove:
	- **x:** 1 se la dichiarazione è nell’attributo style, 0 altrimenti.
	- **y:** numero di ***id*** specificati nel selettore.
	- **w:** numero di classi, attributi e pseudo-classi specificati nel selettore.
	- **z:** numero di elementi e di pseudo-elementi specificati nel selettore.
- A parità di Media, Importanza e Origine, avrà precedenza la regola con specificità più alta.

>> Il confronto va fatto componente per componente, da sinistra a destra (ordine lessicografico), non come numero decimale: ad esempio 11 classi danno $(0,0,11,0)$, che resta **meno** specifico di un solo id $(0,1,0,0)$. Scrivere la quadrupla come numero (es. "23") funziona solo finché ogni componente è minore di 10. Il selettore universale `*` e i combinatori (spazio, `>`, `+`, `~`) non contano.

---
## Slide 21 – Specificità del selettore - Esempi

- **`li`** ?
- **`nav ul li:first-line`** ?
- **`nav.menu ul.sec li`** ?
- **`nav ul li a[href=‘/home’]`** ?
- **`nav#menu ul.sec li#st a`** ?
- **`style="li a"`** ?

---
## Slide 22 – Specificità del selettore - Esempi

- **`li`** /* x=0 y=0 w=0 z=1 => 1 */
- **`nav ul li:first-line`** /* x=0 y=0 w=0 z=4 => 4 */
- **`nav.menu ul.sec li`** /* x=0 y=0 w=2 z=3 => 23 */
- **`nav ul li a[href=‘/home’]`** /* x=0 y=0 w=1 z=4 => 14 */
- **`nav#menu ul.sec li#st a`** /* x=0 y=2 w=1 z=4 => 214 */
- **`style="li a"`** /* x=1 y=0 w=0 z=2 => 1002 */

>> Dettaglio di `nav#menu ul.sec li#st a`: id = `#menu`, `#st` → y=2; classi = `.sec` → w=1; elementi = `nav`, `ul`, `li`, `a` → z=4.
>> `:first-line` è uno pseudo-elemento, quindi conta in z (insieme a `nav`, `ul`, `li`), non in w.
>> Nell'ultimo caso il punto chiave è x=1: qualunque dichiarazione nell'attributo `style` batte qualsiasi selettore di un foglio di stile (salvo `!important`).

---
## Slide 23 – Prima domanda

*BONUS*

**DOMANDA 1:**
Qual è la specificità del seguente selettore
`aside#left p.first a img[src=‘logo.png’]`

- [ ] 1114
- [x] 124
- [ ] 34
- [ ] 214

>> Risposta: **124**. x=0 (non è in `style`); y=1 (`#left`); w=2 (la classe `.first` e l'attributo `[src=...]`); z=4 (`aside`, `p`, `a`, `img`).

---
## Slide 24 – Valori

- Grandezze: numeri seguiti da unità di misura
- Numeri interi e reali (il punto è il separatore dei decimali)
- Unità di misura:
	- Relative:
		- ***em***: relativa alla dimensione del font in uso (es: se il font ha corpo 12pt, 1em varrà 12pt, 2em varranno 24pt, …)
		- ***rem*** (root em): relativa alla dimensione del font dell’elemento `<html>` (es: se per il nodo radice abbiamo definito font-size: 16px, allora 1 rem = 16px, 2 rem = 32px, ecc)
		- ***px***: relativi al dispositivo di output e alle impostazione dell’utente (*il CSS pixel non corrisponde necessariamente al pixel fisico dello schermo!*)
	- Assolute:
		- ***in***: pollici (1in = 2.54cm)
		- ***pt***: punti tipografici (1/72 di pollice)

>> Differenza pratica fra `em` e `rem`: `em` si **compone** con l'annidamento. Se `html` ha `font-size: 16px` e sia `section` sia il `p` al suo interno hanno `font-size: 1.5em`, il paragrafo risulta $16 \cdot 1.5 \cdot 1.5 = 36\text{px}$; con `1.5rem` sarebbe sempre $16 \cdot 1.5 = 24\text{px}$.
>> In CSS le unità assolute sono legate fra loro in modo fisso: $1\text{in} = 96\text{px} = 72\text{pt}$, quindi $1\text{pt} = \tfrac{4}{3}\text{px}$. Su schermi ad alta densità un CSS pixel corrisponde a più pixel fisici (es. 2 o 3, il *device pixel ratio*).

---
## Slide 25 – Valori

- Percentuali: percentuale del valore che assume la proprietà stessa nell’elemento padre
- URL assoluti o relativi `url(path)`
- Stringhe
- Colori: possono essere specificati in diversi modi come esadecimale (`#RRGGBB`) o con una keyword (`black`, `silver`, `white`, `red`, …)

>> Il riferimento delle percentuali dipende dalla proprietà: per `font-size` è il font-size del padre, ma per `width` (e anche per `padding`/`margin`, persino verticali) è la **larghezza** del blocco contenitore.
>> Altri modi comuni per i colori: `#RGB` abbreviato (`#f00` = `#ff0000`), `rgb(255, 0, 0)`, `rgba(255, 0, 0, 0.5)` con trasparenza, `hsl(0, 100%, 50%)`.

---
## Slide 26 – Valori assoluti e valori relativi

**absolute-ish / relative to font / relative to container / relative to viewport**

- Le unità CSS possono essere riferite a grandezze diverse: alcune esprimono dimensioni pressoché fisse, altre dipendono dalla dimensione del testo, dalle dimensioni dell’elemento contenitore oppure da quelle dell’area visibile del browser (viewport)

| Riferimento | Esempi |
|---|---|
| Dimensione «pressochè fissa» | px |
| Dimensione del testo | em, rem |
| Elemento contenitore | % |
| Viewport | vw/vh<br>(corrispondono a 1% di larghezza/altezza del viewport) |

>> Esempio: con una finestra larga 1200px, `width: 50vw` vale 600px indipendentemente da quanto è grande il contenitore; `width: 50%` vale invece metà della larghezza del contenitore. `height: 100vh` è un modo comune per far occupare a una sezione tutta l'altezza visibile della finestra.

---
## Slide 27 – Ereditarietà

- Per poter essere visualizzato, ogni elemento DEVE avere uno stile «di base». Un elemento privo di stile non può essere rappresentato.
- Lo stile può essere applicato:
	- Direttamente: con l'attributo `style` o con regole.
	- Indirettamente: l'elemento eredità lo stile dal padre.
- Non tutte le proprietà sono soggette ad ereditarietà, ad esempio:
	- `display`: questa dipende intrinsecamente dall'elemento stesso.
	- `background`: è sempre trasparente.
	- Proprietà relative al box model…
	- …
- È possibile forzare l'ereditarietà usando come valore `inherit`.

>> In generale si ereditano le proprietà legate al **testo** (`color`, `font-family`, `font-size`, `line-height`, `text-align`, …), mentre non si ereditano quelle legate al **box** (`margin`, `padding`, `border`, `width`, `background`, …).
>> Esempio: se `div { color: red; border: 1px solid black; }`, un `<p>` al suo interno sarà rosso ma senza bordo; con `p { border: inherit; }` il paragrafo prende anche il bordo del padre.

---
## Slide 28 – Box Model

- Ogni elemento è definito da una scatola (box) all'interno della quale si trova il contenuto.
- La visualizzazione di un documento con CSS avviene identificando lo spazio di visualizzazione di ciascun box presente nella pagina.

---
## Slide 29 – Box Model

![[TW06-s029-1.png|346]]

https://bit.ly/2ZCj5uX

>> Dall'interno verso l'esterno: **content** (`width` × `height`) → **padding** → **border** → **margin**. Il padding è "dentro" al bordo (prende lo sfondo dell'elemento), il margin è "fuori" (è sempre trasparente).

---
## Slide 30 – Contenuto

- È possibile definire le dimensioni del contenuto con le proprietà `width` e `height`.
- È possibile definire:
	- una dimensione minima con le proprietà `min-width` e `min-height`
	- una dimensione massima con le proprietà `max-width` e `max-height`
- **NB:** Solitamente si specifica SOLO la larghezza e NON la l'altezza. In questo modo l'altezza di un elemento viene determinata dal suo contenuto.

>> Uso tipico: `img { max-width: 100%; }` fa sì che un'immagine non esca mai dal contenitore, ma resti alla sua dimensione naturale se c'è spazio.

---
## Slide 31 – Dimensioni del contenuto

- Cosa succede nel caso in cui vengano specificate larghezza e altezza di un elemento MA il suo contenuto richiede più spazio?
- È possibile gestire questa situazione con la proprietà `overflow` che può avere i seguenti valori:
	- `visible`: il contenuto eccedente viene mostrato
	- `hidden`: il contenuto eccedente viene nascosto
	- `scroll`: vengono mostrare le barre di scorrimento per visualizzare il contenuto eccedente
	- `auto`: il contenuto eccedente viene mostrato in base alle impostazioni del browser

>> `visible` è il valore di default: il contenuto "esce" dal box e può sovrapporsi agli elementi successivi. Con `auto` in pratica il browser mostra le barre di scorrimento solo se servono (a differenza di `scroll`, che le mostra sempre).
>> Esistono anche `overflow-x` e `overflow-y` per gestire separatamente le due direzioni.

---
## Slide 32 – Margin

- Permette di impostare lo spazio tra un elemento e gli altri elementi della pagina.
- Quattro proprietà singole: `margin-top`, `margin-right`, `margin-bottom`, e `margin-left`
- Possibili valori :
	- Valore numerico con unità di misura.
	- Valore in percentuale.
- È possibile utilizzare la proprietà abbreviata `margin`:

```css
p{margin: 5px 7px 8px 10px} /*top right bottom left*/
p{margin: 5px 7px 6px } /*top right-left bottom*/
p{margin: 5px 10%} /*top/bottom right-left*/
p{margin: 5px } /*all*/
```

>> Regola mnemonica: i valori vanno in senso **orario** partendo dall'alto (top → right → bottom → left, "TRouBLe"). Se un valore manca, si copia quello del lato opposto: left = right, bottom = top.
>> Nota: le percentuali di `margin` (anche verticali) sono calcolate rispetto alla **larghezza** del contenitore. Il valore `auto` sui lati (`margin: 0 auto`) è il modo classico per centrare orizzontalmente un blocco con `width` fissata.

---
## Slide 33 – Margin

- Nel caso in cui due elementi siano allineati **orizzontalmente**, la distanza tra i due è data dalla somma dei due margini (il margine destro del primo elemento e il margine sinistro del secondo).

![[TW06-s033-1.png|209]]

- Nel caso in cui due elementi siano allineati **verticalmente**, si ha il cosiddetto **margin collpasing**: la distanza tra i due è data dal valore massimo fra il margine inferiore del primo elemento e quello superiore del secondo.
- **NB**: stesso comportamento che ritroviamo anche in Word.

>> Esempio: `h2 { margin-bottom: 20px; }` seguito da `p { margin-top: 30px; }` → la distanza verticale è $\max(20, 30) = 30\text{px}$, non $50\text{px}$. Se invece fossero affiancati orizzontalmente con 20px e 30px, la distanza sarebbe $20 + 30 = 50\text{px}$.
>> Il collapsing riguarda solo i margini verticali di elementi di blocco nel normale flusso: non avviene per elementi float, posizionati in modo assoluto, `inline-block` o figli di un flex/grid container.

---
## Slide 34 – Padding

- Permette di impostare lo spazio fra il contenuto e il bordo. Al contrario dei margini, il `padding` ha lo stesso colore di sfondo dell'elemento.
- Quattro proprietà singole: `padding-top`, `padding-right`, `padding-bottom`, e `padding-left`.
- Possibili valori:
	- Valore numerico con unità di misura
	- Valore in percentuale
- Come per margin, anche per padding esiste la proprietà abbreviata `padding`.

>> Stessa sintassi di `margin` (1, 2, 3 o 4 valori in senso orario), ad es. `padding: 10px 20px;`. A differenza del margin, il padding non può essere negativo e non collassa mai.

---
## Slide 35 – Border

- Permette di impostare lo spessore, lo stile e il colore di ognuno dei quattro bordi.
- Esistono tre proprietà singole per ognuno dei quattro bordi (dodici in totale): `border-`*`position`*`-width`, `border-`*`position`*`-style` e `border-`*`position`*`-color` (dove *position* può essere `top`, `right`, `bottom`, `left`)
- Esistono 3 tipi di proprietà sintetiche:
	- `border-top`, `border-right`, `border-bottom`, `border-left`
	- `border-width`, `border-style`, `border-color`
	- `border`.

>> Esempi delle tre forme sintetiche:
>> - `border-top: 2px dashed red;` → spessore, stile e colore di un solo lato;
>> - `border-color: red blue;` → una sola caratteristica per i quattro lati (stessa logica 1–4 valori di `margin`);
>> - `border: 1px solid #333;` → tutto su tutti i lati.
>> Attenzione: se lo stile non è specificato vale `none`, quindi il bordo non si vede anche se spessore e colore sono impostati.

---
## Slide 36 – Border - Valori

- Spessore:
	- Valore numerico con unità di misura
	- Keyword (`thin`, `medium`, `thick`)
- Stile:
	- `none` o `hidden`: nessun bordo
	- `solid`: intero
	- `dotted`: a puntini
	- `dashed`: a trattini
	- `double`: doppio
	- …
- Colore

>> Altri stili disponibili: `groove`, `ridge`, `inset`, `outset` (effetti 3D). Il colore si esprime come per `color` (nome, `#rrggbb`, `rgb()`, …); se omesso, il bordo usa il valore di `color` dell'elemento (`currentColor`).

---
## Slide 37 – Dimensioni del Box

- La larghezza complessiva dei box è data dalla seguente formula (che considera il box-model):

```text
margin-left + border-left-width +
padding-left + width + padding-right +
border-right-width + margin-right
```

- Se `width` non è impostata, viene determinata in automatico dal browser.
- Per l'altezza complessiva dei box vale un discorso analogo MA bisogna tenere in considerazione il **margin collpasing**.

>> Esempio: `width: 300px; padding: 15px; border: 5px solid; margin: 20px;`
>> $$20 + 5 + 15 + 300 + 15 + 5 + 20 = 380\text{px}$$
>> di spazio orizzontale occupato; il box visibile (bordo incluso, margini esclusi) è largo $300 + 2\cdot15 + 2\cdot5 = 340\text{px}$ (vedi figura della slide successiva).

---
## Slide 38 – `box-sizing`

- Permette di far rientrare le dimensioni di padding e bordi nel computo di `width` e `height` (`border-box`).
- Valore di default: `content-box`

![[TW06-s038-1.png|700]]

>> Con `border-box` il contenuto si "restringe": $300 - 2\cdot15 - 2\cdot5 = 260\text{px}$ se padding e bordo valgono su entrambi i lati (la figura riporta 280px, valore che si otterrebbe sottraendo padding e bordo di un solo lato: $300 - 15 - 5$). Il margin resta comunque fuori dal computo in entrambi i casi.
>> Molti fogli di stile iniziano con un reset globale:
>> ```css
>> *, *::before, *::after { box-sizing: border-box; }
>> ```

---
## Slide 39 – Seconda domanda

*BONUS*

**DOMANDA 2**:
Quale di queste forme abbreviate non è equivalente alle altre:
- [ ] `margin: 20px 10px 20px 10px;`
- [x] `margin: 20px 10px 10px;`
- [ ] `margin: 20px 10px;`
- [ ] `margin: 20px 10px 20px;`

>> Risposta: `margin: 20px 10px 10px;`. Con tre valori si ha top = 20px, right/left = 10px, **bottom = 10px**. Le altre tre danno tutte top = bottom = 20px e right = left = 10px.

---
## Slide 40 – Posizionamento

- La disposizione degli elementi all'interno della pagina è una delle questione più complesse e che provocano più frustrazione negli sviluppatori!

![[TW06-s040-1.png|450]]

---
## Slide 41 – Posizionamento

- In base a cosa vengono disposti gli elementi?
- Quanti comportamenti diversi possiamo osservare?
- Identifichiamo 2 comportamenti diversi.

---
## Slide 42 – Posizionamento – Comportamento 1

- Relativo agli elementi `<h1>`, `<h2>`, `<p>`, `<div>`.
- Larghezza:
	- Se non specificata occupano il 100% di quella del padre.
	- È possibile specificare un valore con la proprietà `width`.
- Altezza:
	- L'altezza dipende dal contenuto dell'elemento.
	- È possibile specificare un valore con la proprietà `height`.
- A prescindere dalla larghezza, gli elementi sono disposti verticalmente, formando una nuova riga.
- Questi elementi sono chiamati **elementi di blocco**.

>> Corrisponde a `display: block`. Anche se imposti `width: 100px` a due `<div>` consecutivi, il secondo va comunque sotto al primo e non accanto.

---
## Slide 43 – Posizionamento – Comportamento 2

- Relativo agli elementi `<a>`, `<strong>`, `<em>`, `<span>`.
- Larghezza:
	- La larghezza dipende dal contenuto dell'elemento
	- Non è possibile specificare un valore con la proprietà `width`
- Altezza:
	- L'altezza dipende dal contenuto dell'elemento.
	- Non è possibile specificare un valore con la proprietà `height`
	- È possibile specificare l'altezza della linea con la proprietà `line-height`
- Gli elementi adiacenti sono disposti orizzontalmente.
- Questi elementi sono chiamati **elementi di linea**.

>> Corrisponde a `display: inline`: l'elemento scorre nel testo come una parola. Su di essi `width` e `height` vengono ignorate e margini/padding verticali non spostano le righe vicine (il padding verticale si vede sullo sfondo ma può sovrapporsi alle righe sopra/sotto).
>> Eccezione: `<img>` è inline ma "sostituito", quindi accetta `width` e `height`.

---
## Slide 44 – Posizionamento

- Problema molto dibattuto e con diverse soluzioni «truccologiche»: ***perfect centering*** …
  (si risolve in modo molto semplice con i `flexbox`)

![[TW06-s044-1.png|400]]

>> Con flexbox, centrare un elemento in orizzontale e verticale nel suo contenitore richiede solo:
>> ```css
>> .contenitore { display: flex; justify-content: center; align-items: center; }
>> ```

---
## Slide 45 – Display

- La proprietà `display` determina il tipo di elemento (e il relativo comportamento). Oltre a `inline` e `block`, questa proprietà può assumere i seguenti valori:
	- `none`: l'elemento non viene visualizzato.
	- `inline-block`: l'elemento può assumere dimensioni esplicite (come gli elementi blocco), ma si disporrà orizzontalmente (come gli elementi inline) e non verticalmente.
	- `list-item`: per fare in modo che un elemento si comporti come un `<li>`.
	- `grid`: trasforma un elemento in un grid container.
	- `flex`: trasforma un elemento in un flex container.

>> Differenza utile: `display: none` rimuove l'elemento dal layout (non occupa spazio), mentre `visibility: hidden` lo rende invisibile ma lascia lo spazio vuoto.
>> Con `display` si può cambiare il comportamento "naturale" di un tag, es. `li { display: inline-block; }` per fare un menù orizzontale.

---
## Slide 46 – Layout multi colonna liquido - Display

- Un layout liquido è un layout in cui la grandezza della pagina dipende dalla finestra del browser, adattandosi a tutte le risoluzioni.
- Può essere realizzato usando la proprietà `display` rendendo i contenitori delle 3 colonne di tipo `inline-block` e definendo la larghezza delle colonne in percentuale.
- Esempio: si vuole realizzare un layout a 3 colonne dove:
	- La colonna a sinistra contiene il menù e deve occupare il 15% della pagina.
	- La colonna a destra è una semplice sidebar e deve occupare il 20% della pagina.
	- La colonna centrale contiene un articolo e deve occupare il 65% della pagina.

>> Uno schema possibile (le percentuali sommano a $15 + 65 + 20 = 100\%$):
>> ```css
>> nav, article, aside { display: inline-block; vertical-align: top; box-sizing: border-box; }
>> nav     { width: 15%; }
>> article { width: 65%; }
>> aside   { width: 20%; }
>> ```

---
## Slide 47 – Layout con Display - Riassunto

- Le colonne devono essere elementi ibridi `inline-block`.
- Gli elementi di linea sono solitamente allineati in basso. Se le colonne sono di altezze diverse (molto probabile) è necessario specificare un allineamento a partire dall'alto usando la proprietà `vertical-align` con il valore `top`.
- Le tre colonne devono occupare in totale al massimo 100% tra `width`, `margin` e `padding`, altrimenti l'ultima andrà a capo.
- NON devono esserci spazi nel codice HTML tra una sezione e l'altra. Altrimenti l'ultima colonna andrà a capo.
- Siccome i bordi non possono essere specificati in percentuale (e non avrebbe neanche senso farlo), è necessario usare la proprietà `box-sizing` con valore `border-box` per fare in modo che la grandezza del bordo (E DEL PADDING!) sia inclusa nella larghezza.

>> Perché gli spazi danno problemi: essendo le colonne elementi "di linea", un a capo o uno spazio tra `</nav>` e `<article>` viene reso come un carattere di spazio (qualche pixel). Con colonne che sommano esattamente al 100%, quei pixel in più bastano a mandare a capo l'ultima colonna.
>> Esempio sul bordo: `width: 20%` + `border: 1px` con `content-box` occupa $20\% + 2\text{px}$, e la somma supera il 100%; con `border-box` resta esattamente 20%.

---
## Slide 48 – Float

- Abbiamo visto che gli elementi di blocco vengono disposti verticalmente, uno sotto l'altro.
- Float consente di estrarre un elemento dal normale flusso del documento e lo sposta su un lato, a destra o a sinistra (rispetto al suo contenitore).
- Gli elementi appartenenti al normale flusso del documento circonderanno gli elementi «floating».

>> L'uso originario è quello "da rivista": `img { float: left; margin-right: 10px; }` fa sì che il testo del paragrafo successivo scorra attorno all'immagine sul lato destro. Valori: `left`, `right`, `none` (default).

---
## Slide 49 – Layout multi colonna liquido - Float

- Un altro modo per realizzare un layout multi colonna liquido consiste nell'utilizzare la proprietà `float` e definendo la larghezza delle colonne in percentuale.
- Stesso esempio di prima: si vuole realizzare un layout a 3 colonne dove:
	- La colonna a sinistra contiene il menù e deve occupare il 15% della pagina.
	- La colonna a destra è una semplice sidebar e deve occupare il 20% della pagina.
	- La colonna centrale contiene un articolo e deve occupare il 65% della pagina.

>> Schema possibile (si veda il riassunto nella slide successiva):
>> ```css
>> nav     { float: left;  width: 15%; }
>> aside   { float: right; width: 20%; }
>> article { margin-left: 15%; margin-right: 20%; }
>> ```
>> Nell'HTML `nav` e `aside` devono precedere `article`, così i float si posizionano prima che il contenuto centrale scorra tra di essi.

---
## Slide 50 – Layout con Float - Riassunto

- Le colonne laterali devono essere float, quella centrale no.
- La colonna centrale deve avere dei margini laterali almeno delle dimensioni delle colonne laterali (maggiore se si vogliono distanziare le colonne).
- Le tre colonne devono occupare in totale al massimo 100%, altrimenti ci saranno delle sovrapposizioni.
- Abbiamo visto come gli `<h2>` presenti in `<nav>` e `<aside>` NON sono soggetti al **margin collapse**, in quanto con `float` sono fuori dal normale flusso della pagina, al contrario di article.
- Vale lo stesso discorso per i bordi anche se l'effetto non è che l'ultimo box va a capo ma che c'è una sovrapposizione.

>> Il margin collapse "tra padre e primo figlio": il `margin-top` dell'`<h2>` dentro `article` (nel flusso) "esce" dal contenitore e sposta in basso tutto l'article; negli elementi float questo non accade perché un float crea un nuovo contesto di formattazione (BFC) che contiene i margini dei figli.

---
## Slide 51 – Clear

- Abbiamo detto che `float` consente di estrarre un elemento dal normale flusso del documento e lo sposta su un lato, a destra o a sinistra. Può quindi capitare che questo venga a trovarsi a fianco di elementi successivi.
- La proprietà `clear` serve a disattivare l'effetto della proprietà `float` sugli elementi che lo seguono, ovvero a impedire che al fianco di un elemento floating compaiano altri elementi.
- Valori:
	- `none`: float consentito su entrambi i lati.
	- `left`: impedisce il posizionamento a sinistra.
	- `right`: impedisce il posizionamento a destra.
	- `both`: impedisce il posizionamento su entrambi i lati.

>> Caso tipico nel layout a colonne: il `footer` deve stare sotto a tutte le colonne, quindi `footer { clear: both; }` lo spinge sotto al float più basso.
>> Un contenitore che ha solo figli float "collassa" ad altezza zero: si risolve con `display: flow-root` sul contenitore (o con il vecchio trucco del *clearfix*, un `::after` con `clear: both`).

---
## Slide 52 – Position

- Un altro modo per gestire la disposizione degli elementi nella pagina è la proprietà `position` che consente di specificare il posizionamento dell'elemento rispetto al flusso del documento.
- Possibili valori (spesso usati):
	- `static`: valore di default, l'elemento è disposto secondo il normale flusso del documento
	- `fixed`: usando questo valore il box dell'elemento viene sottratto al normale flusso del documento. Il box non scorre con il resto del documento, ma rimane fisso
	- `sticky`: Si comporta inizialmente secondo il normale flusso, ma raggiunta una determinata soglia durante lo scrolling rimane "ancorato". Un elemento `fixed` è sottratto al normale flusso, mentre uno `sticky` parte dalla propria posizione nel flusso e diventa "sticky" quando viene raggiunta la soglia indicata, per esempio `top: 0`

>> La posizione effettiva si indica con le proprietà `top`, `right`, `bottom`, `left` (ignorate con `static`). Con `fixed` sono riferite alla finestra del browser: es. `header { position: fixed; top: 0; width: 100%; }` crea una barra sempre visibile.
>> Esistono anche `relative` (spostamento rispetto alla posizione normale, lasciando lo spazio originale occupato) e `absolute` (fuori dal flusso, posizionato rispetto al primo antenato con `position` diverso da `static`).

---
## Slide 53 – `position`

- Altri possibili valori (**usati per problemi specifici, non come tecnica primaria per costruire il layout generale**):
	- **`relative`**:
		- L'elemento NON viene rimosso dal flusso del documento.
		- A partire dalla posizione che avrebbe occupato, è possibile specificare lo spostamento con le proprietà `top`, `right`, `bottom` e `left` (accettano anche valori negativi).
	- **`absolute`**:
		- L'elemento viene rimosso dal flusso del documento.
		- Il posizionamento avviene rispetto al primo elemento antenato che ha un posizionamento diverso da `static` (se non esiste viene usata la radice `<html>`).
		- Il posizionamento è specificato sempre attraverso le proprietà `top`, `right`, `bottom` e `left`.

>> Uso tipico combinato: il genitore riceve `position: relative` (senza spostamenti, quindi resta dov'è) solo per diventare il riferimento, e il figlio `position: absolute` viene ancorato a un suo angolo.
>> ```css
>> .card  { position: relative; }
>> .badge { position: absolute; top: 0; right: 0; } /* angolo in alto a destra di .card */
>> ```
>> Con `relative` lo spazio originale dell'elemento resta "riservato" nel flusso (gli altri elementi non si spostano); con `absolute` invece gli altri elementi si comportano come se l'elemento non esistesse.

---
## Slide 54 – `position`

- In caso di elementi sovrapposti, è possibile gestire quale elemento deve essere visualizzato «sopra» con la proprietà `z-index`. Verrà visualizzato l'elemento con `z-index` maggiore (che si andrà a sovrapporre agli elementi con `z-index` inferiore).
- **NB**: `z-index` funziona SOLO con elementi che non abbiano `static` come posizione.

>> `z-index` accetta interi (anche negativi). A parità di `z-index`, l'elemento che compare dopo nel codice HTML viene disegnato sopra.
>> Nota: i figli dei flex container (flex item) sono un'eccezione, perché per loro `z-index` funziona anche se restano `static`.

---
## Slide 55 – FlexBox

- Modalità di layout introdotta con CSS3
- L'uso dei **Flexbox** garantisce un comportamento più predicibile e stabile degli elementi della pagina, soprattutto nel caso di layout liquido e responsive design, quando la pagina deve adattarsi a display di diversi device e diverse dimensioni
- Rappresenta una innovazione ed un notevole miglioramento nella gestione dei layout rispetto al box model tradizionale

---
## Slide 56 – Box Model

![[TW06-s056-1.png|470]]

>> Richiamo del box model tradizionale (dall'interno verso l'esterno): *content area* (`width` × `height`), `padding`, `border`, `margin`. Con il valore predefinito `box-sizing: content-box`, la larghezza effettivamente occupata è
>> $$L = \text{margin-left} + \text{border-left} + \text{padding-left} + \text{width} + \text{padding-right} + \text{border-right} + \text{margin-right}$$

---
## Slide 57 – Concetti principali dei Flexbox

- Gli elementi alla base del modello flexbox sono:
	- ***Flex container***: viene dichiarato impostando la proprietà "***display***" di un elemento, che potrebbe avere valore "***flex***" (reso come un elemento di blocco) o "***inline-flex***" (reso come un elemento inline)
	- ***Flex item***: all'interno di un ***flex container*** possono essere posizionati uno o più ***flex item***

>> Sono flex item solo i **figli diretti** del flex container: i "nipoti" non vengono disposti dal modello flexbox (a meno che il figlio non sia a sua volta dichiarato flex container).

---
## Slide 58 – Concetti principali

- Gli elementi all'esterno di un ***flex-container*** e gli elementi all'interno di un ***flex-item*** sono resi con il box model tradizionale
- Il modello ***flexbox*** definisce come i ***flex item*** si dispongono all'interno di un ***flex container***
- I ***flex item*** sono posizionati all'interno di un ***flex container*** lungo una ***flex line***
- La situazione di default consiste nell'avere una sola ***flex line*** per ogni ***flex container***

---
## Slide 59 – Flexbox Model

![[TW06-s059-1.png|500]]

- Etichette del diagramma: *flex container*, *flex item*, *main axis*, *main start*, *main end*, *main size*, *cross axis*, *cross start*, *cross end*, *cross size*.

>> Il **main axis** (asse principale) è la direzione lungo cui si dispongono gli item ed è stabilita da `flex-direction` (orizzontale con `row`, verticale con `column`). Il **cross axis** (asse trasversale) è sempre perpendicolare al main axis.
>> *main size* e *cross size* sono le dimensioni di un item misurate lungo i due assi: con `row` corrispondono a larghezza e altezza, con `column` si scambiano.
>> Molte proprietà si capiscono meglio così: `justify-content` agisce lungo il main axis, mentre `align-items` e `align-content` agiscono lungo il cross axis.

---
## Slide 60 – `Display: block;` vs `Display: flex;`

![[TW06-s060-1.png|500]]

>> Con `display: block;` sul contenitore, i figli (anch'essi blocchi) vanno uno sotto l'altro, come nella figura. Con `display: flex;` gli stessi figli diventano flex item e, per default, si dispongono **affiancati su una riga** (1 2 3 4 5 da sinistra a destra), senza float né altri accorgimenti.

---
## Slide 61 – Un esempio

- In questo esempio vediamo 3 ***flex item***
- Il loro posizionamento è quello di default: lungo la ***flex line*** orizzontale, da sinistra a destra

[Gli esempi di questa lezione sono raggruppati nello zip "`esempi_flexbox`" presente sulla piattaforma]

- **`flex_item_01.html`**

---
## Slide 62 – `flex_item_01.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
  <div class="flex-item">
       flex item 1
  </div>
  <div class="flex-item">
       flex item 2
  </div>
  <div class="flex-item">
       flex item 3
  </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;
}

.flex-container {
    display: flex;
    width: 50%;
    height: 250px;
    background-color: grey;
}

.flex-item {
    background-color: darkred;
    width: 30%;
    height: 100px;
    margin: 10px;
    padding: 10px;
}
```

(Evidenziato nella slide: la regola `.flex-container` con **`display: flex;`**.)

>> Ogni item occupa $30\%$ della larghezza del container più $2\cdot10\text{px}$ di padding e $2\cdot10\text{px}$ di margine, cioè $0{,}3W + 40\text{px}$ (con $W$ = larghezza del container). I tre item insieme richiedono $0{,}9W + 120\text{px}$, che supera $W$ quando $W < 1200\text{px}$. In quel caso, per default (`flex-shrink: 1`), gli item vengono **ristretti** per stare sulla singola flex line invece di andare a capo.

---
## Slide 63 – `flex-direction`

- La proprietà ***flex-direction*** permette di specificare la direzione dei ***flex item*** all'interno del ***flex container***
- Il valore di default per ***flex-direction*** è ***row*** (left-to-right, top-to-bottom)
- Altri valori:
	- **row-reverse**
	- **column**
	- **column-reverse**

---
## Slide 64 – `flex-direction`

![[TW06-s064-1.png|500]]

>> Con `column` e `column-reverse` il main axis diventa verticale. Da quel momento `justify-content` agisce in verticale e `align-items` in orizzontale.
>> I valori `-reverse` cambiano solo l'ordine visivo, non quello nel codice HTML (quindi nemmeno l'ordine letto da screen reader e tastiera).

---
## Slide 65 – `flex-direction: row-reverse`

- **row-reverse**: se la direzione della scrittura del testo (direction) è da sinistra a destra, allora il ***flex item*** sarà disposto nella direzione opposta, ovvero da destra a sinistra
- Il prossimo esempio mostra il risultato dell'uso del valore **row-reverse**: **`flex_direction_03.html`**

---
## Slide 66 – `flex_direction_03.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
  <div class="flex-item">
       flex item 1
  </div>
  <div class="flex-item">
       flex item 2
  </div>
  <div class="flex-item">
       flex item 3
  </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;
}

.flex-container {
    display: flex;
    flex-direction: row-reverse;
    width: 50%;
    height: 250px;
    background-color: grey;
}

.flex-item {
    background-color: darkred;
    width: 20%;
    height: 100px;
    margin: 10px;
    padding: 10px;
}
```

(Evidenziate nella slide: **`display: flex;`** e **`flex-direction: row-reverse;`**.)

>> Risultato: "flex item 1" è attaccato al bordo **destro** del container e alla sua sinistra seguono "flex item 2" e "flex item 3" (da sinistra a destra si legge quindi 3, 2, 1). Con `row-reverse` il *main start* è sulla destra, quindi anche lo spazio libero rimane a sinistra.

---
## Slide 67 – `justify-content`

- La proprietà ***justify-content*** allinea orizzontalmente gli elementi di un ***flexible container*** quando questi elmenti non utilizzano tutto lo spazio a disposizione lungo l'asse delle ascisse
- Il valore di default è ***flex-start***: gli elementi sono posizionati all'inizio del container
- Altri possibili valori sono i seguenti:
	- ***flex-end***
	- ***center***
	- ***space-between***
	- ***space-around***
	- ***space-evenly*** (simile a ***space-around*** ma lo spazio tra i flex-item e il bordo del container è distribuito in modo equilibrato)

>> Più precisamente, `justify-content` allinea lungo il **main axis**: è orizzontale con `flex-direction: row`, ma diventa verticale con `column`.
>> Con spazio libero $S$ e $n$ item:
>> - `space-between`: nessuno spazio ai bordi, spazio tra item consecutivi $= \frac{S}{n-1}$;
>> - `space-around`: ogni item riceve $\frac{S}{2n}$ per lato, quindi tra due item c'è $\frac{S}{n}$ e ai bordi solo $\frac{S}{2n}$ (la metà);
>> - `space-evenly`: tutti gli $n+1$ spazi (bordi inclusi) valgono $\frac{S}{n+1}$.

---
## Slide 68 – `justify-content`

![[TW06-s068-1.png|500]]

---
## Slide 69 – `justify-content: flex-end`

- **flex-end**: gli item sono posizionati alla fine del container
- ll prossimo esempio mostra il risultato dell'uso del valore **flex-end**: **`justify_content_04.html`**

---
## Slide 70 – `justify_content_04.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
  <div class="flex-item">
       flex item 1
  </div>
  <div class="flex-item">
       flex item 2
  </div>
  <div class="flex-item">
       flex item 3
  </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;
}

.flex-container {
    display: flex;
    justify-content: flex-end;
    width: 50%;
    height: 250px;
    background-color: grey;
}

.flex-item {
    background-color: darkred;
    width: 20%;
    height: 100px;
    margin: 10px;
    padding: 10px;
}
```

(Evidenziata nella slide: **`justify-content: flex-end;`**.)

>> Differenza rispetto a `row-reverse` (slide 66): anche qui gli item si raccolgono a destra, ma restano nell'ordine 1, 2, 3. `flex-end` sposta il gruppo di item senza invertirlo.

---
## Slide 71 – `align-items`

- La proprietà ***align-items*** allinea verticalmente gli elementi del ***flex container*** quando gli item non usano tutto lo spazio disponibile lungo l'asse delle ordinate
- Il valore di default è **stretch**: gli item vengono "stretchati" per riempire opportunamente il ***container***
- Gli altri valori ammessi sono i seguenti:
	- **flex-start**
	- **flex-end**
	- **center**
	- **baseline**

>> In generale `align-items` agisce lungo il **cross axis** (verticale con `row`, orizzontale con `column`).
>> `stretch` ha effetto solo se l'item **non** ha una dimensione fissata lungo il cross axis: con `height: 100px` esplicito (come negli esempi) l'item non viene allungato.
>> `baseline` allinea gli item in modo che la **prima riga di testo** di ciascuno stia sulla stessa linea di base, anche se gli item hanno altezze o font diversi.

---
## Slide 72 – `align-items`

![[TW06-s072-1.png|500]]

---
## Slide 73 – `align-items: center`

- **center**: gli item sono posizionati al centro del container (verticalmente)
- ll prossimo esempio mostra il risultato dell'uso del valore **center**: **`align_items_05.html`**

---
## Slide 74 – `align_items_05.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
  <div class="flex-item">
       flex item 1
  </div>
  <div class="flex-item">
       flex item 2
  </div>
  <div class="flex-item">
       flex item 3
  </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;
}

.flex-container {
    display: flex;
    align-items: center;
    width: 50%;
    height: 250px;
    background-color: grey;
}

.flex-item {
    background-color: darkred;
    width: 20%;
    height: 100px;
    margin: 10px;
    padding: 10px;
}
```

(Evidenziata nella slide: **`align-items: center;`**.)

>> Ogni item occupa in verticale $100 + 2\cdot10 = 120\text{px}$ (content + padding) e $140\text{px}$ contando i margini. Nel container alto $250\text{px}$ restano $110\text{px}$, divisi in $55\text{px}$ sopra e $55\text{px}$ sotto. Per centrare un elemento sia orizzontalmente sia verticalmente basta combinare `justify-content: center;` e `align-items: center;`.

---
## Slide 75 – `flex-wrap`

- La proprietà **flex-wrap** specifica se il ***flex items*** debba andare automaticamente a capo oppure no, nel caso in cui non ci sia spazio sufficiente su un'unica ***flex line***
- Il valore di default è **nowrap**: e corrisponde al non andare a capo automaticamente, comprimendo lo spazio
- Altri possibili valori sono:
	- **Wrap**: I flex item vengono mandati a capo automaticamente, se necessario (nell'esempio)
	- **wrap-reverse:** I flex item vanno a capo automaticamente, se necessario, ma in ordine inverso

>> Con `wrap-reverse` si inverte l'ordine delle **righe** (cross start e cross end si scambiano): la prima flex line viene disegnata in basso e le successive sopra. All'interno di ogni riga gli item restano nell'ordine 1, 2, 3…, come mostra la figura della slide successiva.
>> La scorciatoia `flex-flow` imposta insieme direzione e wrap, per esempio `flex-flow: row wrap;`.

---
## Slide 76 – `flex-wrap`

![[TW06-s076-1.png|500]]

---
## Slide 77 – `flex_wrap_06.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
  <div class="flex-item">
       flex item 1
  </div>
  <div class="flex-item">
       flex item 2
  </div>
  <div class="flex-item">
       flex item 3
  </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;
}

.flex-container {
    display: flex;
    flex-wrap: wrap;
    width: 450px;
    height: 400px;
    background-color: grey;
}

.flex-item {
    background-color: darkred;
    width: 150px;
    height: 100px;
    margin: 10px;
    padding: 10px;
}
```

(Evidenziata nella slide: **`flex-wrap: wrap;`**.)

>> Ogni item occupa $150 + 2\cdot10 + 2\cdot10 = 190\text{px}$ in orizzontale (width + padding + margin). Nel container da $450\text{px}$ ne stanno $\lfloor 450/190 \rfloor = 2$ ($380\text{px}$), quindi "flex item 3" va sulla seconda flex line. Con `nowrap` i tre item sarebbero invece stati compressi sulla stessa riga.
>> In verticale il container è alto $400\text{px}$ e le due righe si dividono lo spazio (`align-content: stretch`, default): ogni flex line è alta $200\text{px}$ e gli item stanno in cima alla propria riga.

---
## Slide 78 – `align-content`

- La proprietà **align-content** modifica il comportamento della proprietà **flex-wrap**
- E' simile a **align-items**, ma invece di allineare i ***flex item***, allinea le ***flex line***
- Il valore di default è **stretch**: le linee sono "stretchate" per occupare lo spazio restante
- Gli altri possibili valori sono:
	- **flex-start**
	- **flex-end**
	- **center** (**`align_content_07.html`**)
	- **space-between**
	- **space-around**

>> `align-content` ha effetto **solo se ci sono più flex line** (quindi con `flex-wrap: wrap` o `wrap-reverse` e item che vanno effettivamente a capo) e se il container ha spazio libero lungo il cross axis. Con una sola riga non fa nulla.
>> Sintesi: `align-items` posiziona gli item **dentro** la propria riga, `align-content` posiziona le **righe** dentro il container. Riprendendo l'esempio della slide 77 con `align-content: center`, le due righe (alte $140\text{px}$ ciascuna, margini inclusi, $280\text{px}$ in tutto) verrebbero raccolte al centro del container, lasciando $60\text{px}$ sopra e $60\text{px}$ sotto.

---
## Slide 79 – `align-content`

![[TW06-s079-1.png|600]]

>> `align-content` distribuisce lo spazio tra le **righe** (linee di flex item) lungo l'asse trasversale: ha effetto solo se il container è multi-riga, cioè con `flex-wrap: wrap` e più righe effettivamente presenti.
>> Non va confuso con `align-items`, che allinea i singoli item **all'interno** della propria riga.

---
## Slide 80 – `align_content_07.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
  <div class="flex-item">
       flex item 1
  </div>
  <div class="flex-item">
       flex item 2
  </div>
  <div class="flex-item">
       flex item 3
  </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;
}
.flex-container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    width: 450px;
    height: 400px;
    background-color: grey;
}
.flex-item {
    background-color: darkred;
    width: 150px;
    height: 100px;
    margin: 10px;
    padding: 10px;
}
```

>> Ogni item occupa $150 + 2\cdot 10 + 2\cdot 10 = 190$ px in larghezza (content + padding + margin), quindi in 450 px ne stanno 2 per riga: il terzo va a capo. Le due righe risultanti vengono raggruppate al centro verticale del container grazie ad `align-content: center`.

---
## Slide 81 – `order`

- La proprietà **order** specifica l'ordine di un ***flex item*** relativo al resto degli altri ***flex item*** all'interno dello stesso ***container***
- Valori ammessi: interi (positivi e negativi)
- Il prossimo esempio mostra il risultato dell'uso di **order** in un ***flex item***: **`order_08.html`**

>> Il valore di default di `order` è `0`; gli item vengono disposti in ordine crescente di `order` e, a parità di valore, secondo l'ordine nel sorgente HTML. Cambia solo l'ordine **visivo**, non quello del DOM (né quello di lettura per screen reader o della navigazione con Tab).

---
## Slide 82 – `order_08.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
  <div class="flex-item">
       flex item 1
  </div>
  <div class="flex-item first">
       flex item 2
  </div>
  <div class="flex-item">
       flex item 3
  </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;
}
.flex-container {
    display: flex;
    width: 400px;
    height: 250px;
    background-color: grey;
}
.flex-item {
    background-color: darkred;
    width: 100px;
    height: 100px;
    margin: 10px;
    padding: 10px;
}
.first {
    order: -1;
}
```

>> Gli item 1 e 3 hanno `order: 0` (default), l'item 2 ha `order: -1`, quindi viene visualizzato per primo: l'ordine a schermo diventa *flex item 2, flex item 1, flex item 3*.

---
## Slide 83 – `margin`

- **`margin: auto;`**
	assorbe lo spazio extra. Può essere usato per spingere i ***flex item*** verso posizioni diverse
- Nel prossimo esempio impostiamo
	**`margin-right: auto;`**

sul primo ***flex item***.
Questo causerà l'assorbimento dello spazio extra alla destra dell'elemento:
**`margin_09.html`**

>> In un flex container i margini `auto` si "mangiano" tutto lo spazio libero disponibile nella loro direzione. Con `margin-right: auto` sul primo item, tutto lo spazio libero finisce alla sua destra: l'item 1 resta a sinistra e gli item 2 e 3 vengono spinti in fondo a destra (tipico pattern "logo a sinistra, menu a destra").

---
## Slide 84 – `margin_09.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
  <div class="flex-item right">
       flex item 1
  </div>
  <div class="flex-item">
       flex item 2
  </div>
  <div class="flex-item">
       flex item 3
  </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;
}
.flex-container {
    display: flex;
    width: 500px;
    height: 250px;
    background-color: grey;
}
.flex-item {
    background-color: darkred;
    width: 100px;
    height: 100px;
    margin: 10px;
    padding: 10px;
}
.right {
    margin: auto;
}
```

>> Attenzione: nel codice la classe `.right` usa `margin: auto` (tutti e quattro i lati), non solo `margin-right: auto` come detto nella slide precedente. Con `margin: auto` lo spazio libero orizzontale si divide in parti uguali tra margine sinistro e destro dell'item 1 (che quindi si centra nello spazio rimasto a sinistra degli altri due, spinti a destra), e in più l'item 1 viene centrato anche verticalmente. Con il solo `margin-right: auto` l'item 1 resterebbe attaccato a sinistra e in alto.

---
## Slide 85 – Perfect Centering

- Nel prossimo esempio vedremo come posizionare un elemento perfettamente al centro del suo elemento contenitore
- Questa soluzione è nota come: *perfect centering*
- Finalmente con i flexbox è possibile e semplice:
	**`margin: auto;`**
- Questa regola permette di centrare perfettamente un elemento rispetto ad entrambi gli assi (**`centering_10.html`**)

>> Un'alternativa equivalente, impostata sul container invece che sull'item, è:
>> `display: flex; justify-content: center; align-items: center;`
>> Prima dei flexbox il centramento verticale richiedeva trucchi (tabelle, `position: absolute` + `transform`, `line-height`...).

---
## Slide 86 – `centering_10.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
  <div class="flex-item">
   flex item (perfect centering)
  </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;
}
.flex-container {
    display: flex;
    width: 400px;
    height: 250px;
    background-color: grey;
}
.flex-item {
    background-color: darkred;
    width: 100px;
    height: 100px;
    margin: auto;
    padding: 10px;
}
```

---
## Slide 87 – `gap`

- Definisce lo spazio tra gli elementi del container, senza dover assegnare manualmente dei `margin` ai singoli elementi
- `gap: 20px;` significa *"lascia 20 pixel di spazio tra un flex item e il successivo"*
- `gap` è una shorthand di due proprietà:

```css
row-gap: 20px;
column-gap: 30px;
```

oppure equivalentemente:

```css
gap: 20px 30px;
```

>> Nella forma a due valori il primo è `row-gap` (spazio tra le righe, cioè in verticale in un layout a righe) e il secondo è `column-gap` (spazio tra le colonne/item affiancati). Con un solo valore entrambi assumono lo stesso valore.
>> Differenza chiave rispetto ai margin: il gap viene inserito **solo tra** gli item, mai tra gli item e i bordi del container.

---
## Slide 88 – `gap`

![[TW06-s088-1.png|700]]

>> Nel confronto con i margin: con `margin: 10px` su ogni item tra due item adiacenti si ottengono comunque $10 + 10 = 20$ px (i margini orizzontali non collassano), ma compaiono anche 10 px ai bordi esterni. Con `wrap`, il gap si applica anche tra le righe (spazio verticale di 20 px).

---
## Slide 89 – `align-self`

- La proprietà **align-self** di un **flex item** sovrascrive la proprietà **align-items** del **flex container** per quell particolare ***item***
- Ammette gli stessi possibili valori della proprietà **align-items** (**stretch**, **flex-start**, **flex-end**, **center**, **baseline**)
- Il prossimo esempio mostra il risultato di differenti valori di **align-self** assegnati ad ogni flex item (**`align_self_11.html`**)

>> Il valore di default di `align-self` è `auto`, che significa "usa il valore di `align-items` del container". Serve quindi a trattare in modo diverso un singolo item lungo l'asse trasversale.

---
## Slide 90 – `align_self_11.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
  <div class="flex-item item1">flex-start</div>
  <div class="flex-item item2">flex-end</div>
  <div class="flex-item item3">center</div>
  <div class="flex-item item4">baseline</div>
  <div class="flex-item item5">stretch</div>
</div>

</body>
</html>
```

---
## Slide 91 – `align_self_11.html`

```css
body {
    font-family: arial;
    color: white;
}
.flex-container {
    display: flex;
    width: 600px;
    height: 250px;
    background-color: grey;
}
.flex-item {
    background-color: darkred;
    width: 100px;
    min-height: 100px;
    margin: 10px;
    padding: 10px;
    text-align: center;
}

.item1 {
    align-self: flex-start;
}
.item2 {
    align-self: flex-end;
}
.item3 {
    align-self: center;
}
.item4 {
    align-self: baseline;
}
.item5 {
    align-self: stretch;
}
```

>> Notare `min-height: 100px` al posto di `height`: se l'altezza fosse fissata con `height`, `stretch` non potrebbe allungare l'item 5 fino all'altezza del container. Con `min-height` invece l'item 5 si estende per tutta l'altezza (250 px meno i margini).

---
## Slide 92 – `flex-grow`

- La proprietà **flex-grow** definisce la capacità di un elemento di crescere, specificando la ***lunghezza*** del **flex item** relativa agli altri ***flex item*** all'interno dello stesso ***container***
- Si può specificare un valore unitario per alcuni elementi e un valore più elevato per altri
- Così se su tre elementi due hanno valore unitario 1 e uno ha valore 2, quest'ultimo cercherà di occupare il doppio dello spazio rispetto agli altri elementi
- Nel prossimo esempio, il primo ***flex item*** occuperà la metà dello spazio libero, mentre gli altri due ***flex item*** occuperanno 1/4 dello spazio libero ciascuno: **`flex_grow_12.html`**

>> `flex-grow` ripartisce lo **spazio libero** (quello avanzato dopo aver collocato gli item con la loro dimensione di base), non la larghezza totale. Ogni item riceve la quota
>> $$\text{extra}_i = \text{spazio libero} \cdot \frac{\text{grow}_i}{\sum_j \text{grow}_j}$$
>> Con valori 2, 1, 1 la somma è 4: il primo riceve $2/4 = 1/2$, gli altri $1/4$ ciascuno. La larghezza finale del primo item è quindi doppia di quella degli altri solo se le dimensioni di base sono nulle (es. `flex: 2` / `flex: 1`, che impostano `flex-basis: 0`).
>> Il default è `flex-grow: 0` (gli item non crescono).

---
## Slide 93 – `flex_grow_12.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
    <div class="flex-item double">
     flex item 1
    </div>
    <div class="flex-item single">
     flex item 2
    </div>
    <div class="flex-item single">
     flex item 3
    </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;}
.flex-container {
    display: flex;
    width: 600px;
    height: 250px;
    background-color: grey;}
.flex-item {
    background-color: darkred;
    margin: 10px;
    text-align: center;}
.double {
    flex-grow: 2;}
.single {
    flex-grow: 1;}
```

---
## Slide 94 – `flex-shrink`

- La proprietà **flex-shrink** definisce l'abilità di un elemento di contrarsi se necessario.
- Si applica ai **flex item**, ed è relativa agli altri ***flex item*** all'interno dello stesso ***container***
- Nel prossimo esempio, il secondo ***flex item*** occuperà la metà della larghezza occupata di default dagli altri ***flex item***: **`flex_shrink_13.html`**

>> Il default è `flex-shrink: 1` (tutti gli item si restringono in egual misura); `flex-shrink: 0` impedisce all'item di restringersi.
>> Il restringimento è pesato anche dalla dimensione di base: l'item $i$ perde
>> $$\text{riduzione}_i = \text{eccedenza} \cdot \frac{\text{shrink}_i \cdot \text{base}_i}{\sum_j \text{shrink}_j \cdot \text{base}_j}$$

---
## Slide 95 – `flex_shrink_13.html`

```html
<!DOCTYPE html>
<html>
<head>
</head>
<body>

<div class="flex-container">
    <div class="flex-item">
     flex item 1
    </div>
    <div class="flex-item shrink">
     flex item 2
    </div>
    <div class="flex-item">
     flex item 3
    </div>
</div>

</body>
</html>
```

```css
body {
    font-family: arial;
    color: white;}
.flex-container {
    display: flex;
    width: 600px;
    height: 250px;
    background-color: grey;}
.flex-item {
    background-color: darkred;
    margin: 10px;
    text-align: center;
    width: 300px;
}
.shrink {
    flex-shrink: 3;}
```

>> Calcolo: i tre item richiederebbero $3 \cdot (300 + 20) = 960$ px, ma il container è largo 600 px, quindi c'è un'eccedenza di 360 px. I pesi sono $1\cdot300,\ 3\cdot300,\ 1\cdot300$ (somma 1500):
>> - item 1 e 3: perdono $360 \cdot 300/1500 = 72$ px → larghi 228 px
>> - item 2: perde $360 \cdot 900/1500 = 216$ px → largo 84 px
>>
>> Il secondo item risulta quindi molto più stretto degli altri (circa il 37% della loro larghezza): il "metà" della slide è un'indicazione qualitativa, non un valore esatto.

---
## Slide 96 – Terza domanda

*BONUS*

**DOMANDA 3:**
Considerando questo CSS
Quale affermazione è corretta?

```css
.container {
    display: flex;
    justify-content: center;
    gap: 20px;}
```

- [x] I flex item sono centrati lungo l'asse principale e sono separati tra loro da 20px
- [ ] Ogni flex item ha un margine di 20px su tutti i lati
- [ ] I flex item sono centrati lungo l'asse trasversale e separati da 20px
- [ ] I flex item vanno automaticamente a capo quando non c'è spazio sufficiente

>> Risposta corretta: la **prima**. `justify-content` agisce sull'asse principale (main axis, orizzontale con il `flex-direction: row` di default) e `gap` inserisce 20 px solo *tra* gli item.
>> - La seconda è falsa: `gap` non è un margine e non aggiunge spazio verso i bordi del container.
>> - La terza è falsa: l'allineamento sull'asse trasversale si controlla con `align-items`.
>> - La quarta è falsa: il default è `flex-wrap: nowrap`, quindi gli item non vanno a capo (semmai si restringono).

---
## Slide 97 – Responsive flexbox

- Questo è un esempio di un layout responsive in cui vogliamo usare i flexbox per gli elementi:
	- `<header>`
	- `<main>`
	- `<nav>`
	- `<aside>`
	- `<footer>`
- **`Esempio.html`**

---
## Slide 98 – No CSS

![[TW06-s098-1.png|600]]


>> Senza CSS gli elementi semantici sono blocchi che si impilano verticalmente nell'ordine del sorgente, ciascuno a tutta larghezza (normal flow).

---
## Slide 99 – Risultato che vogliamo ottenere

![[TW06-s099-1.png|700]]

>> Un modo per ottenerlo: il contenitore di `<aside>` e `<main>` con `display: flex` (aside con larghezza fissa o `flex: 1`, main con `flex: 3`), `<nav>` con `display: flex` per affiancare i link; per renderlo *responsive*, una media query che su schermi stretti imposta `flex-direction: column`, rimettendo i blocchi uno sotto l'altro.

---
## Slide 100 – Responsive flexbox

- Lavoriamo insieme aggiungendo il foglio di stile interno per ottenere il risultato mostrato nella slide precedente e che troverete nel file **`esempio_completo.html`** su Virtuale

---
## Slide 101 – Riferimenti

- Standard completi:
	- CSS1, https://www.w3.org/TR/CSS1/
	- CSS2, http://www.w3.org/TR/CSS2
	- CSS3, https://www.w3.org/TR/2001/WD-css3-roadmap-20010523/
	- https://www.w3.org/TR/css-flexbox-1/

---
## Slide 102 – Approfondimenti

- «CSS3 Guida completa per lo sviluppatore», Peter Gasston, 2011. Disponibile in biblioteca
- Esercizi sui selettori https://flukeout.github.io/

---
## Slide 103 – Risorse online

- http://www.cssauthor.com/css-flexbox/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- http://learnlayout.com/flexbox.html
- Edutainment:
	- http://flexboxfroggy.com/
	- http://www.flexboxdefense.com/

---
## Riassunto

>> **Fondamenti**
>> - CSS (Cascading Style Sheets) separa la **presentazione** (CSS) dal **contenuto** (HTML); più fogli di stile agiscono "in cascata" sullo stesso documento.
>> - Regola: `selettore { proprietà: valore; }`. Tre modi di inclusione: inline (attributo `style`, da evitare), interno (`<style>`), esterno (`<link>`, soluzione migliore).
>> - Oggi CSS evolve per **moduli indipendenti** raccolti in snapshot, non per versioni monolitiche.
>>
>> **Selettori**
>> - Universale `*`, di tipo `E`, combinatori `E F` (F discendente di E, a qualsiasi profondità), `E>F` (F figlio diretto di E), `E+F` (F fratello **immediatamente successivo** a E), `E~F` (F **qualsiasi** fratello successivo a E).
>> - Attributo `E[foo]`, `E[foo="bar"]`; classe `.bar`; id `#bar` (unico nella pagina).
>> - Pseudo-classi (`:hover`, `:focus`, `:visited`, …), pseudo-elementi (`::before`, `::after`, `::first-line`, `::first-letter`); la virgola raggruppa selettori.
>>
>> **Cascata e specificità**
>> - Ordine dei criteri: media → importanza (`!important`) → origine (author > user > user agent) → specificità → ordine (vince l'ultima).
>> - Specificità = quadrupla **(x, y, w, z)**: x = 1 se nell'attributo `style`; y = n. di id; w = n. di classi, attributi, pseudo-classi; z = n. di elementi e pseudo-elementi. `*` e combinatori non contano.
>> - Si confronta componente per componente da sinistra: 1 id batte qualunque numero di classi. Es. `aside#left p.first a img[src='logo.png']` → (0,1,2,4) = 124.
>>
>> **Valori ed ereditarietà**
>> - Unità relative: `em` (font corrente, si compone con l'annidamento), `rem` (font di `<html>`), `px` (CSS pixel ≠ pixel fisico), `%` (rispetto al padre), `vw`/`vh` (1% del viewport). Assolute: `in`, `pt` (1/72 in).
>> - Si ereditano le proprietà del testo (`color`, `font-*`), non quelle del box (`margin`, `padding`, `border`, `background`, `display`); `inherit` forza l'ereditarietà.
>>
>> **Box model**
>> - Dall'interno: content (`width`/`height`) → padding (ha lo sfondo dell'elemento) → border → margin (trasparente).
>> - Shorthand in senso orario: 4 valori T R B L; 3 valori T, R=L, B; 2 valori T=B, R=L; 1 valore per tutti.
>> - **Margin collapsing**: tra blocchi verticali la distanza è il **massimo** dei due margini; in orizzontale è la **somma**. Non avviene con float, absolute, flex item.
>> - `overflow`: `visible` (default), `hidden`, `scroll`, `auto`.
>> - Larghezza occupata (`content-box`, default): margin-l + border-l + padding-l + **width** + padding-r + border-r + margin-r. Es. width 300, padding 15, border 5, margin 20 → box visibile 340 px, ingombro 380 px.
>> - Con `box-sizing: border-box`, `width` include padding e border (box visibile 300 px, contenuto 300 − 30 − 10 = 260 px); il margin resta sempre escluso.
>>
>> **Posizionamento**
>> - Elementi di **blocco** (`div`, `p`, `h1`): larghezza 100% del padre, vanno a capo, accettano `width`/`height`. Elementi di **linea** (`span`, `a`, `em`): affiancati, ignorano `width`/`height`.
>> - `display`: `block`, `inline`, `inline-block`, `none` (rimosso dal layout), `list-item`, `flex`, `grid`.
>> - Layout liquido con `inline-block` (serve `vertical-align: top`, niente spazi nell'HTML, `border-box`, somma ≤ 100%) o con `float` (colonne laterali float, colonna centrale con margini laterali); `clear: both` evita gli affiancamenti.
>> - `position`: `static` (default), `relative` (spostamento, resta nel flusso), `absolute` (fuori dal flusso, rispetto al primo antenato non static), `fixed` (rispetto alla finestra), `sticky`. `z-index` vale solo per elementi non `static`.
>>
>> **Flexbox**
>> - `display: flex` (o `inline-flex`) crea il **flex container**; i figli diretti sono **flex item**. Il **main axis** dipende da `flex-direction`, il **cross axis** è perpendicolare.
>> - Proprietà del container:
>>   - `flex-direction`: `row` (default), `row-reverse`, `column`, `column-reverse`;
>>   - `justify-content` (main axis): `flex-start` (default), `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`;
>>   - `align-items` (cross axis): `stretch` (default), `flex-start`, `flex-end`, `center`, `baseline`;
>>   - `flex-wrap`: `nowrap` (default, gli item si comprimono), `wrap`, `wrap-reverse`;
>>   - `align-content`: allinea le **righe**, ha effetto solo con più flex line (default `stretch`);
>>   - `gap` (= `row-gap column-gap`): spazio solo **tra** gli item, non verso i bordi.
>> - Proprietà degli item: `order` (default 0, cambia solo l'ordine visivo), `align-self` (sovrascrive `align-items`), `flex-grow` (default 0, divide lo spazio libero in proporzione), `flex-shrink` (default 1, restringimento pesato anche per la dimensione di base), `margin: auto` (assorbe lo spazio libero).
>> - **Perfect centering**: `margin: auto` sull'item, oppure `justify-content: center; align-items: center` sul container.
