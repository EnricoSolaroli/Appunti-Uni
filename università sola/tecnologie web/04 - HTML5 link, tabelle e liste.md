[4_html_tabelle](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/4_html_tabelle.pdf>)

# HTML5 – Link, Tabelle e Liste

## Indice

1. **Introduzione e commenti** (slide 1–3)
	- [[#Slide 1 – HTML5 – Link, Tabelle e Liste|Titolo della lezione]]
	- [[#Slide 2 – Argomenti|Argomenti trattati: link e flow]]
	- [[#Slide 3 – Commenti|Commenti HTML: `<!--` … `-->`]]
2. **Link e àncore** (slide 4–5)
	- [[#Slide 4 – `<a>`|L'elemento `<a>`: partenza con `href`, arrivo con `id`]]
	- [[#Slide 5 – `<a>`|Esempio di menu di navigazione e link interno]]
3. **URI: sintassi, caratteri e risoluzione** (slide 6–11)
	- [[#Slide 6 – URI|Definizione di Uniform Resource Identifier]]
	- [[#Slide 7 – Sintassi degli URI|schema, host, port, path, query, fragment]]
	- [[#Slide 8 – Caratteri riservati|Escape `%`, e ruolo di `/` `.` `..` `#` `?` `+`]]
	- [[#Slide 9 – URI assoluti e URI reference|URI assoluti, relativi e URI di base]]
	- [[#Slide 10 – Risolvere URI relativi|Regole di risoluzione di un URI relativo]]
	- [[#Slide 11 – Prima domanda|Domanda bonus: bersaglio di un frammento]]
4. **Struttura delle tabelle** (slide 12–16)
	- [[#Slide 12 – Struttura delle tabelle|`<table>`, `<tr>`, `<td>`, `<th>`]]
	- [[#Slide 13 – Struttura delle tabelle|Albero della tabella ed esempio completo]]
	- [[#Slide 14 – `<table>`|Intestazione orizzontale (`<th>` a inizio riga)]]
	- [[#Slide 15 – `<table>`|Intestazione verticale (prima riga di `<th>`)]]
	- [[#Slide 16 – `<caption>`|Titolo della tabella con `<caption>`]]
5. **Celle estese e accessibilità delle tabelle** (slide 17–21)
	- [[#Slide 17 – `<td><th>`|`rowspan` e `colspan`]]
	- [[#Slide 18 – `<td><th>`|`headers`, screen reader e elementi strutturali]]
	- [[#Slide 19 – tabelle|Esempio: rubrica con telefono ripetuto]]
	- [[#Slide 20 – `<table>`|Codice della rubrica con link `mailto:`]]
	- [[#Slide 21 – Versione senza ripetizioni|`rowspan="2"` con `headers` su due intestazioni]]
6. **Esercizio: orario delle lezioni accessibile** (slide 22–25)
	- [[#Slide 22 – Esempio|Traccia d'esame: tabella con caption e rowspan]]
	- [[#Slide 23 – Note|Indicazioni su caption, rowspan e celle mancanti]]
	- [[#Slide 24 – Soluzione|Soluzione: `<caption>` e `<thead>` con `id`]]
	- [[#Slide 25 – Soluzione|Soluzione: `<tbody>` con `rowspan` e `headers`]]
7. **Tabelle a doppia intestazione con `scope`** (slide 26–30)
	- [[#Slide 26 – Esempio con `scope`|Orario con due livelli di intestazione (giorno e aula)]]
	- [[#Slide 27 – Esempio con `scope`|Scheletro del documento e stile dei bordi]]
	- [[#Slide 28 – Esempio con `scope`|`scope="colgroup"` e `scope="col"` nel `<thead>`]]
	- [[#Slide 29 – Esempio con `scope`|`scope="row"` e celle dati con più coordinate]]
	- [[#Slide 30 – Esempio con `scope`|Ultima riga e chiusura del documento]]
8. **Liste** (slide 31–35)
	- [[#Slide 31 – Liste|I tre tipi di lista: `<ul>`, `<ol>`, `<dl>`]]
	- [[#Slide 32 – Struttura delle liste|Struttura ad albero lista → `<li>`]]
	- [[#Slide 33 – `<ul></ul>`|Esempio di lista non ordinata]]
	- [[#Slide 34 – `<ol></ol>`|Attributi `start`, `type`, `reversed`]]
	- [[#Slide 35 – Liste annidiate|Annidamento di una lista dentro un `<li>`]]
9. **Domanda bonus sulle liste annidate** (slide 36–37)
	- [[#Slide 36 – Seconda domanda|Codice `<ol>` con `<ul>` interni da interpretare]]
	- [[#Slide 37 – Seconda domanda|Rendering corretto della lista annidata]]


---
## Slide 1 – HTML5 – Link, Tabelle e Liste
---
## Slide 2 – Argomenti

- HTML:
	- Elementi:
		- Link
		- Flow
---
## Slide 3 – Commenti

- I commenti nel codice HTML sono inseriti tra `<!--` e `-->`
- Esempio:

```html
<!-- Questo è un commento. I commenti non
sono visualizzati dal browser -->
```

>> I commenti servono a documentare il sorgente: il parser li legge ma non
>> li rende a schermo. Attenzione: restano comunque visibili a chiunque
>> apra il "view source" della pagina, quindi non vanno usati per dati
>> riservati. Inoltre non si possono annidare (`--` dentro un commento
>> chiude il commento).

---
## Slide 4 – `<a>`

- L'elemento **`<a>`** consente di inserire àncore nel documento, ovvero **punti di partenza di un link**.
	- la destinazione si specifica con un URI attraverso l'attributo **`href`** .
	- Nelle precedenti versioni di HTML, con **`<a>`** si realizzavano anche **i punti di arrivo** di un link (raggiungibili con # come frammento interno di un URI), usando l'attributo **`name`**. Questa soluzione in HTML5 è stata **superata**: al suo posto si usa l'attributo **`id`**, associandolo a **qualunque elemento**.

>> In pratica: in HTML5 esiste una sola "metà" del link che ha bisogno di un
>> tag dedicato, la partenza (`<a href="...">`). L'arrivo non è più un tag
>> speciale, ma semplicemente un qualsiasi elemento dotato di `id`
>> (un `<section>`, un `<h2>`, un `<p>`, ...).

---
## Slide 5 – `<a>`

- Esempi:

```html
<nav>
 <ul>
  <li> <a href="/">Home</a> </li>
  <li> <a href="/news">News</a> </li>
  <li> <a href="http://www.google.it">Google</a> </li>
  <li> <a href="#articolo">Articolo</a> </li>
 </ul>
</nav>

<article id="articolo">
 <p> testo dell'articolo .... </p>
</article>
```

- `href="#articolo"` → **partenza**
- `id="articolo"` → **arrivo**

![[TW04-s005-1.png|550]]

---
## Slide 6 – URI

- Gli **URI** (**Uniform Resource Identifier**) sono una sintassi usata in WWW per definire i nomi e gli indirizzi di oggetti (risorse) su Internet.
	- Gli URI risolvono il problema di creare un meccanismo ed una sintassi di accesso **unificata** alle risorse di dati disponibili via rete.
	- Questi oggetti sono considerati accessibili tramite l'uso di **protocolli** esistenti, inventati appositamente, o ancora da inventare.
	- Tutte le istruzioni d'accesso ai vari specifici oggetti disponibili secondo un dato protocollo sono codificate come **una stringa di indirizzo**

---
## Slide 7 – Sintassi degli URI

```
URI→ schema:[// host:port] path [? query] [# fragment]
```

- **`schema`** (è il protocollo): stringa arbitraria usata come prefisso
- **`host`**: un nome di dominio o un indirizzo IP
- **`port`**: per http è la porta 80 e può essere omessa
- **`path`**: parte identificativa della risorsa all'interno dello spazio di nomi identificato da schema e host
- **`query`**: ulteriore specificazione della risorsa all'interno dello spazio di nomi identificato dallo schema
	- parametri passati all'URI per specificare un risultato dinamico, come l'output di una query su un motore di ricerca
	- è tutto quello che sta dopo "?" e prima di "#"
	- Tipicamente ha la forma: `nome1=valore1&nome2=valore+in+molte+parole`
- **`fragment`**: una risorsa secondaria (una risorsa associata, dipendente o un frammento) della risorsa primaria. E' tutta la parte che sta dopo "#"

>> Le parentesi quadre nella sintassi indicano le parti opzionali. Esempio
>> completo: in
>> `https://www.unibo.it:443/corsi/ricerca?anno=2026&cds=TW#risultati`
>> lo schema è `https`, l'host `www.unibo.it`, la porta `443`, il path
>> `/corsi/ricerca`, la query `anno=2026&cds=TW` e il fragment `risultati`.
>> Il fragment è l'unica parte che **non** viene inviata al server: la
>> gestisce solo il browser.

---
## Slide 8 – Caratteri riservati

- **`%`** é il **codice di escape**, e serve per l'utilizzo di caratteri particolari nell'URI, precedendone il codice esadecimale. Ad esempio, per utilizzare un carattere "%" nell'URI bisogna usare la stringa "%25". Alcuni caratteri speciali o riservati o in generale non sicuri (es. quelli superiori al codice ASCII 127) possono essere specificati tramite codifica esadecimale introdotta dal carattere di escape
- **`/`**, **`.`** e **`..`** Sono usati per l'identificazione di sottoparti di uno schema **gerarchico**
- **`#`** serve per delimitare l'URI di un oggetto da un identificatore di un **frammento** interno alla risorsa considerata
- **`?`** serve per separare l'URI di un oggetto su cui è possibile fare una **query** (un database, per esempio), dalla stringa usata per specificare la query
- **`+`** All'interno della query è usato al posto dello **spazio**

>> Il "%25" dell'esempio si spiega così: `%` vale 37 in decimale, cioè 0x25
>> in esadecimale; quindi il carattere `%` letterale si scrive `%25`.
>> Analogamente lo spazio (32 decimale = 0x20) diventa `%20`.

---
## Slide 9 – URI assoluti e URI reference

- Un **URI assoluto** contiene tutte le parti predefinite dal suo schema, esplicitamente precisate.
- Un **URI gerarchico** può però anche essere **==relativo==** (detto tecnicamente un ***URI reference***) ed in questo caso riportare solo una parte dell'URI assoluto corrispondente, tagliando progressivamente cose da sinistra.
- Un URI reference fa sempre riferimento ad un **URI di base** (ad esempio, l'URI assoluto del documento ospitante l'URI reference) rispetto al quale fornisce porzioni differenti.

Es.: l'*URL reference* **pippo.html** posto dentro al documento di URI
**http://www.sito.com/dir1/dir2/pluto.html**
fa riferimento al documento il cui URI assoluto è
**http://www.sito.com/dir1/dir2/pippo.html**

---
## Slide 10 – Risolvere URI relativi

- Risolvere un URI relativo significa identificare l'URI assoluto sulla base dell'URI relativo stesso e, di solito, dell'URI di base.
- Dato l'URI di base `http://www.sito.com/dir1/doc1.html`:
	- se l'URI inizia con uno **schema**, è URI assoluto: http://www.sito2.com/dir2/doc2.html porta a http://www.sito2.com/dir2/doc2.html
	- se l'URI inizia con "**#**", è un frammento interno allo stesso documento di base: #ancora1 porta a http://www.sito.com/dir1/doc1.html#ancora1
	- se l'URI inizia con "**/**", allora è un path assoluto all'interno della stessa autorità del documento di base, e gli va applicata la stessa parte autorità: /dir3/doc3.html porta a http://www.sito.com/dir3/doc3.html
	- se l'URI inizia con "**..**", (livello superiore di gerarchia): viene eliminato insieme all'elemento precedente ../doc6.html porta a http://www.sito.com/dir1/../doc4.html che è equivalente a http://www.sito.com/dir1/doc4.html
	- se l'URI inizia con "**.**", (stesso livello di gerarchia): ./doc7.html porta a http://www.sito.com/dir1/./doc5.html che è equivalente a httphttp://www.sito.com/doc5.html://www.sito.com/doc5.html
	- **Altrimenti**, si estrae il path assoluto dell'URI di base, meno l'ultimo elemento, e si aggiunge in fondo l'URI relativo: doc6.html porta a http://www.sito.com/dir1/doc6.html mentre dir7/doc7.html porta a http://www.sito.com/dir1/dir7/doc7.html

>> In sintesi: il path di base viene troncato all'ultimo "/", si concatena
>> l'URI relativo e poi si normalizzano i segmenti `.` e `..`.

---
## Slide 11 – Prima domanda

**DOMANDA 1:**
Quale elemento può essere correttamente raggiunto dal link `<a href="#primaparte">` ?

- ❑ `<span id="primaparte">`
- ❑ `<a name="primaparte">`
- ❑ `<section id="primaparte">`
- ❑ `<br name="primaparte"/>`

>> Risposta: `<section id="primaparte">` (ma anche `<span id="primaparte">`
>> è tecnicamente raggiungibile). In HTML5 il bersaglio di un frammento è
>> l'elemento il cui **`id`** coincide col frammento: `name` su `<a>` è
>> deprecato e `<br>` non può ospitare un ancoraggio sensato. La scelta
>> "giusta" è quella semanticamente corretta, cioè un elemento di blocco
>> che identifica davvero una parte del documento.

---
## Slide 12 – Struttura delle tabelle

- Le **tabelle** HTML5:
	- Sono realizzate attraverso l'elemento **`<table>`**
	- sono organizzate per righe, realizzate attraverso l'elemento **`<tr>`**, *table row*.
	- ciascuna riga è poi divisa in celle.
- Le celle possono essere:
	- Celle normali, in questo caso sono rese dall'elemento **`<td>`**, table data.
	- Celle di intestazione, che invece sono realizzate con l'elemento **`<th>`**, table header

---
## Slide 13 – Struttura delle tabelle

- Ogni tabella è composta di righe `<tr>`
	- Ogni riga è composta di celle di intestazione `<th>` o di contenuto `<td>`

![[TW04-s013-1.png|500]]

Struttura ad albero: `<table>` → due `<tr>`; il primo `<tr>` contiene `<th>`, `<td>`, `<td>`; il secondo `<tr>` contiene `<th>`, `<td>`, `<td>`.

```html
<table>
  <tr>
    <th>prof.</th>
    <td>Silvia Mirri</td>
    <td>Catia Prandi</td>
  </tr>
  <tr>
    <th>corso</th>
    <td>TW</td>
    <td>Mobile</td>
  </tr>
</table>
```

Risultato:

![[TW04-s013-2.png|400]]

| prof. | Silvia Mirri | Catia Prandi |
| ----- | ------------ | ------------ |
| corso | TW           | Mobile       |

---
## Slide 14 – `<table>`

- Esempio con intestazione orizzontale (**`<th>`** prima cella di ogni riga):

```html
<table>
   <tr>
      <th>Month</th>
      <td>January</td>
      <td>February</td>
   </tr>
   <tr>
      <th>Savings</th>
      <td>$100</td>
      <td>$80</td>
   </tr>
</table>
```

![[TW04-s014-1.png|400]]

| Month   | January | February |
| ------- | ------- | -------- |
| Savings | $100    | $80      |

---
## Slide 15 – `<table>`

- Esempio con intestazione verticale (prima riga con tutte le celle **`<th>`**):

```html
<table>
  <tr>
     <th>Month</th>
     <th>Savings</th>
  </tr>
  <tr>
     <td>January</td>
     <td>$100</td>
  </tr>
  <tr>
     <td>February</td>
     <td>$80</td>
  </tr>
</table>
```

![[TW04-s015-1.png|250]]

| Month    | Savings |
| -------- | ------- |
| January  | $100    |
| February | $80     |

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_table_test

---
## Slide 16 – `<caption>`

- Esempio:

```html
<table>
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th><th>Savings</th>
  </tr>
  <tr>
    <td>January</td><td>$100</td>
  </tr>
  <tr>
    <td>February</td><td>$50</td>
  </tr>
</table>
```

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_caption_test

>> `<caption>` è il titolo della tabella: deve essere il **primo figlio** di
>> `<table>` e viene reso (di default) centrato sopra la tabella. È anche
>> il modo corretto per dare un nome accessibile alla tabella, molto meglio
>> di un `<p>` messo lì sopra.

---
## Slide 17 – `<td><th>`

- Una cella di tipo **`<td>`** o **`<th>`** può occupare più righe o più colonne utilizzando rispettivamente l'attributo **`rowspan`** e **`colspan`**
- Esempio:

```html
<table>
  <tr>
     <th>Month</th>
     <th>Savings</th>
  </tr>
  <tr>
     <td>January</td>
     <td>$100</td>
  </tr>
  <tr>
     <td>February</td>
     <td>$80</td>
  </tr>
  <tr>
     <td colspan="2">Sum: $180</td>
 </tr>
</table>
```

![[TW04-s017-1.png|300]]

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_td_colspan

>> `colspan="2"` fa sì che quella singola cella occupi lo spazio di due
>> colonne: per questo l'ultima riga ha un solo `<td>` invece di due.
>> Regola pratica: in ogni riga la somma dei `colspan` delle celle deve
>> dare il numero di colonne della tabella, altrimenti il layout si
>> "sfalsa".

---
## Slide 18 – `<td><th>`

- Una cella di tipo **`<td>`** o **`<th>`** può fare riferimento (tramite l'attributo **`headers`**), ad altre celle, per specificare che queste rappresentano una intestazione della cella corrente:
	- Lo scopo di questo sistema di relazioni tra celle è quello di supportare gli screen reader usati dalle persone non vedenti nel riferire correttamente alle celle intestazione di una certa cella. Rivediamo questo attributo parlando di accessibilità.
	- **`headers`** deve avere come valore la lista degli **`id`** delle intestazioni per la cella **SEPARATI DA SPAZIO**
- Per migliorare la strutturazione semantica e quindi l'**accessibilità** della tabella si possono usare anche elementi strutturali **`<colgroup>`**, **`<thead>`**, **`<tfoot>`**, **`<tbody>`**.

>> Esempio minimo di `headers`: se l'intestazione è
>> `<th id="mese">Month</th>`, la cella corrispondente si scrive
>> `<td headers="mese">January</td>`. Con tabelle a doppia entrata si
>> elencano più id separati da spazio, es. `headers="mese anno"`.

---
## Slide 19 – tabelle

- Tabella con nome e cognome, mail e telefono

![[TW04-s019-1.png|500]]

| Nome           | Email                    | Telefono     |
| -------------- | ------------------------ | ------------ |
| Paola Salomoni | paola.salomoni@unibo.it  | 0547 338813  |
| Silvia Mirri   | silvia.mirri@unibo.it    | 0547 338892  |
| Catia Prandi   | catia.prandi2@unibo.it   | 0547 338892  |

- Potremmo anche compattare il telefono nelle ultime due righe?

![[TW04-s019-2.png|500]]

>> Sì: le ultime due righe hanno lo stesso numero, quindi basta una cella
>> con `rowspan="2"` nella riga di Silvia Mirri e nessuna cella telefono
>> nella riga di Catia Prandi:
>>
>> `<td rowspan="2">0547 338892</td>`

---

## Slide 20 – `<table>`

```html
<table>
<tr>
  <th>Nome</th>
  <th>mail</th>
  <th>Telefono</th>
</tr>
<tr>
  <th> Paola Salomoni </th>
  <td><a href="mailto:paola.salomoni@unibo.it">
        paola.salomoni@unibo.it</a></td>
  <td> 0547 338813 </td>
</tr>
<tr>
  <th> Silvia Mirri </th>
  <td> <a href="mailto:silvia.mirri@unibo.it">
        silvia.mirri@unibo.it</a></td>
  <td> 0547 338892 </td>
</tr>
<tr>
  <th> Catia Prandi </th>
  <td> <a href="mailto:catia.prandi2@unibo.it">
      catia.prandi2@unibo.it</a></td>
  <td> 0547 338892</td>
</tr>
</table>
```

>> Qui i `<th>` compaiono sia nella prima riga (intestazioni di colonna) sia
>> nella prima colonna (intestazioni di riga): una cella è "di intestazione"
>> per il suo significato, non per la sua posizione.
>> Si noti che il numero 0547 338892 è ripetuto in due righe: è proprio questa
>> ripetizione che la slide successiva elimina con `rowspan`.

---

## Slide 21 – Versione senza ripetizioni

```html
…
<tr>
  <th id="sm"> Silvia Mirri</th>
  <td> <a href="mailto:silvia.mirri@unibo.it">
        silvia.mirri@unibo.it</a></td>
  <td rowspan="2" headers="sm cp"> 0547 338892 </td>
</tr>
<tr>
  <th id="cp"> Catia Prandi</th>
  <td> <a href="mailto:catia.prandi2@unibo.it">
        catia.prandi2@unibo.it</a></td>
</tr>
…
```

>> Nella slide sono cerchiati in rosso i tre punti chiave: **`id="sm"`**,
>> **`rowspan="2" headers="sm cp"`** e **`id="cp"`**.
>> La logica: la cella del telefono viene scritta una volta sola e occupa due
>> righe (`rowspan="2"`); poiché però "appartiene" a due persone diverse,
>> l'attributo `headers` elenca gli `id` di *entrambe* le intestazioni di riga,
>> così lo screen reader annuncia il numero come associato sia a Silvia Mirri
>> sia a Catia Prandi. Nella seconda `<tr>` la cella del telefono non va
>> riscritta: è già coperta dal `rowspan`.

---

## Slide 22 – Esempio

- **ESERCIZIO 1 COMPITO**
  Scrivere il codice di un documento HTML accessibile il cui body contiene solo una sezione che include la seguente tabella con caption «orario delle lezioni»:

![[TW04-s022-1.png|560]]

| | **Lunedì** | **Martedì** | **Mercoledì** |
|---|---|---|---|
| **9-10** | Tecnologie Web *(rowspan 2)* | Analisi | Sistemi multimediali *(rowspan 2)* |
| **10-11** | | Sistemi multimediali *(rowspan 2)* | |
| **11-12** | Algebra | | Fisica |

---

## Slide 23 – Note

- Lasciate stare la presentazione, senza CSS non si vede il bordo (io l'ho messo solo per farvi vedere meglio la tabella).
- Esiste una caption (Orario delle lezioni) che inserita dentro la tabella, prima delle celle.
- Attenzione ai rowspan e agli attributi da inserire per garantire l'accessibilità
- La struttura ha sostanzialmente 4 righe e 4 colonne ma ci saranno delle celle mancanti dovute ai rowspan

>> Regola pratica per contare le celle da scrivere: in ogni riga si scrivono
>> solo le celle che *iniziano* in quella riga. Una cella con `rowspan="2"`
>> "consuma" una posizione anche nella riga successiva, dove quindi non va
>> ripetuta: 4×4 = 16 posizioni, ma i tre `rowspan` fanno sì che i `<td>`/`<th>`
>> effettivamente scritti siano 13.

---

## Slide 24 – Soluzione

```html
<!DOCTYPE html>
<html lang="it">
<head>
<title>Tabella accessibile</title>
</head>
<body>
<section>
 <table>
       <caption>Orario delle lezioni</caption>
       <thead>
         <tr>
           <th></th>
           <th id="lun">Lunedì</th>
           <th id="mar">Martedì</th>
           <th id="mer">Mercoledì</th>
         </tr>
       </thead>
```

>> La prima cella della riga di intestazione è un `<th>` vuoto: è l'angolo in
>> alto a sinistra, che non intesta né una riga né una colonna.
>> `<caption>` deve essere il primo figlio di `<table>`.

---

## Slide 25 – Soluzione

```html
      <tbody>
        <tr>
           <th id="9_10">9-10</th>
           <td rowspan="2" headers="lun 9_10 10_11">
              Tecnologie Web</td>
           <td headers="mar 9_10">Analisi</td>
           <td rowspan="2" headers="mer 9_10 10_11">
              Sistemi multimediali</td>
        </tr>
        <tr>
           <th id="10_11">10-11</th>
           <td rowspan="2" headers="mar 10_11 11_12 ">
               Sistemi multimediali</td>
        </tr>
        <tr>
           <th id="11_12">11-12</th>
           <td headers="lun 11_12">Algebra</td>
           <td headers="mer 11_12">Fisica</td>
        </tr>
      </tbody>
    </table>
</section>
</body>
</html>
```

>> Ogni `headers` elenca *tutte* le intestazioni che competono alla cella: la
>> colonna (`lun`, `mar`, `mer`) e tutte le fasce orarie che la cella copre.
>> Es.: "Tecnologie Web" sta nel lunedì e occupa 9-10 e 10-11, quindi
>> `headers="lun 9_10 10_11"`.
>> Nella seconda riga compaiono solo due celle (`<th>10-11</th>` e la cella di
>> Martedì che inizia lì): le altre due posizioni sono già occupate dai
>> `rowspan` della riga precedente.

---

## Slide 26 – Esempio con `scope`

![[TW04-s026-1.png|600]]

| | **Lunedì** *(colspan 2)* | | **Martedì** *(colspan 2)* | |
|---|---|---|---|---|
| | **Aula 2.1** | **Laboratorio 2.2** | **Aula 2.1** | **Laboratorio 2.2** |
| **9-10** | Sistemi multimediali *(rowspan 2)* | Programmazione | Analisi | Sistemi Multimediali *(rowspan 3)* |
| **10-11** | | Tecnologie Web *(rowspan 2)* | Programmazione | |
| **11-12** | Algebra | | Fisica | |

>> Rispetto all'esempio precedente la tabella ha ora **due livelli di
>> intestazione di colonna**: il giorno (che copre due colonne) e l'aula. È
>> esattamente il caso in cui `scope` da solo non basta e servono
>> `colgroup` + `id`/`headers`.

---

## Slide 27 – Esempio con `scope`

```html
<!DOCTYPE html>
<html lang="it">
<head>
<title>Tabella accessibile</title>
<style>
  table, td, th {
    border: solid black 1px;
    }
</style>
</head>
<body>
<section>
 <table>
       <caption>Orario delle lezioni</caption>
       …
```

---

## Slide 28 – Esempio con `scope`

```html
<thead>
   <tr>
     <th></th>
     <th id="lun" scope="colgroup" colspan="2">Lunedì</th>
     <th id="mar" scope="colgroup" colspan="2">Martedì</th>
   </tr>
   <tr>
     <th></th>
     <th id="aula21_l" headers="lun" scope="col">
             Aula 2.1</th>
     <th id="lab22_l" headers="lun" scope="col">
             Laboratorio 2.2</th>
     <th id="aula21_m" headers="mar" scope="col">
             Aula 2.1</th>
     <th id="lab22_m" headers="mar" scope="col">
             Laboratorio 2.2</th>
   </tr>
</thead>
```

>> `scope="colgroup"` dice che quel `<th>` intesta il *gruppo* di colonne che
>> `colspan="2"` abbraccia; `scope="col"` intesta invece la singola colonna.
>> Le intestazioni di secondo livello sono a loro volta "figlie" del giorno, e
>> lo dichiarano con `headers="lun"` / `headers="mar"`: si costruisce così la
>> gerarchia giorno → aula.

---

## Slide 29 – Esempio con `scope`

```html
<tbody>
  <tr>
     <th id="9_10" scope="row">9-10</th>
     <td rowspan="2" headers="lun 9_10 10_11 aula21_l">
        Sistemi multimediali</td>
     <td headers="lun 9_10 lab22_l">Programmazione</td>
     <td headers="mar 9_10 aula21_m">Analisi</td>
     <td headers="mar 9_10 10_11 11_12 lab22_m" rowspan="3">
        Sistemi Multimediali</td>
  </tr>
  <tr>
     <th id="10_11" scope="row">10-11</th>
     <td rowspan="2" headers="lun 10_11 11_12 lab22_l">
        Tecnologie Web</td>
     <td headers="mar 10_11 aula21_m">Programmazione</td>
  </tr>
```

>> Ogni cella dati elenca ora tre "coordinate": il giorno, l'orario (o gli
>> orari, se c'è `rowspan`) e l'aula. `scope="row"` sulle fasce orarie evita di
>> dover ripetere il loro `id` come intestazione di riga per ogni cella.

---

## Slide 30 – Esempio con `scope`

```html
        <tr>
          <th id="11_12" scope="row">11-12</th>
          <td headers="lun 11_12 aula21_l">Algebra</td>
          <td headers="mar 11_12 aula21_m">Fisica</td>
        </tr>
      </tbody>
    </table>
</section>
</body>
</html>
```

---

## Slide 31 – Liste

- In HTML5 sono previsti tre tipi di liste:
	- Liste non ordinate, definite da **`<ul></ul>`** (*unordered list*)
	- Liste ordinate, definite da **`<ol></ol>`** (*ordered list*)
	- Liste di definizioni, definite da **`<dl></dl>`** (*definition list*)
- Nelle liste ordinate e non ordinate ogni item è definito da **`<li></li>`**

---

## Slide 32 – Struttura delle liste

- Per liste ordinate (**`<ol>`**) e non ordinate (**`<ul>`**), ogni item è definito da un **`<li>`**

![[TW04-s032-1.png|420]]

![[TW04-s032-2.png|300]]

>> Il diagramma mostra la struttura ad albero: l'elemento lista (`<ol>` o
>> `<ul>`) è il padre e gli `<li>` sono i suoi figli diretti. Il markup è
>> identico nei due casi: cambia solo il tipo di marcatore (pallino o numero)
>> con cui il browser presenta gli item.

---

## Slide 33 – `<ul></ul>`

- Per ogni punto elenco, si deve annidare un elemento nella lista
- Esempio:

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

![[TW04-s033-1.png|300]]

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_lists4

---

## Slide 34 – `<ol></ol>`

- Nelle liste ordinate possono essere specificati:
	- start: il valore iniziale della numerazione
	- type: il tipo di numerazione utilizzata
	- reversed: la numerazione è inversa
- Esempio:

```html
<ol start="50">
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

![[TW04-s034-1.png|300]]

- http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_lists

>> `type` accetta `1` (numeri, default), `a`/`A` (lettere minuscole/maiuscole) e
>> `i`/`I` (numeri romani). `reversed` è un attributo booleano: basta scriverlo,
>> senza valore.

---

## Slide 35 – Liste annidiate

- Ovviamente le liste possono essere annidiate l'una nell'altra

```html
<ul>
 <li> primo
        <ul>
        <li>A</li>
         <li>B</li>
         <li>terzo</li>

   </ul>
    </li>
 <li>secondo</li>
 <li>terzo</li>
</ul>
```

![[TW04-s035-1.png|300]]

![[TW04-s035-2.png|450]]

>> Punto cruciale: la lista annidata va messa **dentro un `<li>`**, non
>> direttamente dentro `<ul>`/`<ol>`. Nell'albero a destra il secondo `<ol>` è
>> infatti figlio di un `<li>`, non fratello degli `<li>`.
>> Nel rendering il browser cambia automaticamente marcatore ai livelli
>> successivi (pallino pieno → cerchietto vuoto).

---

## Slide 36 – Seconda domanda

*BONUS*

**DOMANDA 2:**
Considerare il seguente codice. Come viene visualizzata la lista corrispondente dal browser?

```html
<ol>
   <li> Tecnologie Web
   <ul> <li> HTML </li>
           <li> URI </li>
   </ul> </li>
   <li> Reti
   <ul> <li> HTTP </li></ul> </li>
</ol>
```

---

## Slide 37 – Seconda domanda

*BONUS*

![[TW04-s037-1.png|600]]

>> La risposta corretta è la terza opzione (in basso a sinistra): la lista
>> esterna è un `<ol>`, quindi "Tecnologie Web" e "Reti" sono numerati 1. e 2.;
>> le liste interne sono `<ul>`, quindi HTML, URI e HTTP appaiono con il
>> cerchietto. Inoltre URI sta dentro il primo item (è nel `<ul>` di
>> "Tecnologie Web"), non sotto "Reti".

---
## Riassunto

>> **Link e àncore**
>> - `<a href="...">` è la **partenza** del link; in HTML5 l'**arrivo** non è più `<a name="...">` (deprecato) ma un qualunque elemento con attributo **`id`**.
>> - Un frammento `href="#nome"` raggiunge l'elemento il cui `id` vale `nome`.
>>
>> **URI**
>> - Sintassi: `schema:[//host:port] path [?query] [#fragment]`; le parentesi quadre indicano le parti opzionali.
>> - La **porta** di http (80) si può omettere; la **query** sta fra `?` e `#` nella forma `nome1=valore1&nome2=valore`; il **fragment** sta dopo `#` ed è l'unica parte **non inviata al server**.
>> - Caratteri riservati: `%` è l'escape esadecimale (`%25` = `%`, `%20` = spazio), `/` `.` `..` per la gerarchia, `#` per il frammento, `?` per la query, `+` per lo spazio dentro la query.
>> - Risoluzione di un URI relativo rispetto all'URI di base: se inizia con uno schema è assoluto; con `#` è un frammento dello stesso documento; con `/` è un path assoluto sulla stessa autorità; `.` viene rimosso, `..` risale di un livello eliminando anche il segmento precedente; altrimenti si tronca il path di base all'ultimo `/` e si concatena.
>>
>> **Tabelle**
>> - `<table>` contiene righe `<tr>`, che contengono celle di contenuto `<td>` o di intestazione `<th>`.
>> - `<caption>` è il titolo della tabella e deve essere il **primo figlio** di `<table>`.
>> - `colspan` estende una cella su più colonne, `rowspan` su più righe: le celle "coperte" non vanno riscritte nelle righe successive.
>> - Accessibilità: `headers` sulla cella elenca gli **`id`** delle intestazioni **separati da spazio**; `scope` vale `col`, `row` o `colgroup` (intestazione di un gruppo di colonne creato con `colspan`). Elementi strutturali: `<thead>`, `<tbody>`, `<tfoot>`, `<colgroup>`.
>> - Esercizio tipico d'esame: orario delle lezioni con `caption`, `rowspan` e `headers` corretti; con doppio livello di intestazione (giorno + aula) ogni cella dati elenca giorno, fascia oraria e aula.
>>
>> **Liste**
>> - Tre tipi: `<ul>` non ordinata, `<ol>` ordinata, `<dl>` di definizioni; gli item di `<ul>`/`<ol>` sono `<li>`.
>> - `<ol>` accetta `start` (valore iniziale), `type` (`1`, `a`/`A`, `i`/`I`) e `reversed` (booleano).
>> - Una lista annidata va inserita **dentro un `<li>`**, non direttamente dentro `<ul>`/`<ol>`.
