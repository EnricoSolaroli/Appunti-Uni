[5_html_form](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/5_html_form.pdf>)

# HTML5 – Form

## Indice

1. **Introduzione alle form HTML** (slide 1–4)
	- [[#Slide 1 – HTML5|Presentazione della lezione]]
	- [[#Slide 2 – Argomenti|Argomenti: elementi interattivi, Web API, validazione]]
	- [[#Slide 3 – Cosa sono le form?|Cosa sono le form e flusso dei dati]]
	- [[#Slide 4 – Come progettare una form|Come progettare una form]]
2. **L'elemento form e l'invio dei dati** (slide 5–10)
	- [[#Slide 5 – `<form>`|Elemento `<form>` e famiglie di controlli]]
	- [[#Slide 6 – `<form>`|Attributi `action` e `method`]]
	- [[#Slide 7 – `GET` e `POST`|Confronto GET vs POST e ruolo di HTTPS]]
	- [[#Slide 8 – Attributo `name`|Attributo `name` e coppie nome=valore]]
	- [[#Slide 9 – Altri attributi comuni|`required`, `autofocus`, `autocomplete`]]
	- [[#Slide 10 – Prima domanda|Domanda 1: trasmettere una password in sicurezza]]
3. **Etichette e raggruppamento dei controlli** (slide 11–12)
	- [[#Slide 11 – `<label>`|`<label>` e i due modi di associarla]]
	- [[#Slide 12 – `<fieldset>`|`<fieldset>` e `<legend>`]]
4. **I tipi di `<input>`** (slide 13–25)
	- [[#Slide 13 – `<input>`|Elemento `<input>` e attributo `type`]]
	- [[#Slide 14 – `reset`, `submit` e `button`|Bottoni: `reset`, `submit`, `button`]]
	- [[#Slide 15 – `text`|Input testuali: `text`, `password`, `hidden`, `search`]]
	- [[#Slide 18 – `tel`, `url`, `email`|Dati personali: `tel`, `url`, `email`]]
	- [[#Slide 19 – `radio`|Scelte: `radio` e `checkbox`]]
	- [[#Slide 21 – `number` e `range`|Numeri: `number` e `range`]]
	- [[#Slide 22 – Data e ora|Data e ora: `time`, `week`, `date`, `datetime-local`]]
	- [[#Slide 24 – `color`|Altri tipi: `color` e `file`]]
5. **Textarea e menu a tendina** (slide 26–29)
	- [[#Slide 26 – `<textarea>`|`<textarea>` per testo multilinea]]
	- [[#Slide 27 – `<select>` e `<option>`|`<select>` e `<option>`]]
	- [[#Slide 28 – `<select>` e `<option>`|Attributi `multiple`, `size`, `selected`, `value`]]
	- [[#Slide 29 – Seconda domanda|Domanda 2: scegliere una quantità da 1 a 5]]
6. **Esercizio: form accessibile** (slide 30–33)
	- [[#Slide 30 – Esempio|Testo dell'esercizio]]
	- [[#Slide 31 – Soluzione|Soluzione: struttura del documento]]
	- [[#Slide 32 – Soluzione|Fieldset anagrafica]]
	- [[#Slide 33 – Soluzione|Fieldset tipo elaborato]]
7. **Web API e Web Storage** (slide 34–42)
	- [[#Slide 34 – HTML e Web API|Web API del browser]]
	- [[#Slide 35 – Web Storage|Web Storage: coppie chiave-valore]]
	- [[#Slide 36 – Due tipi di Web storage|`sessionStorage` vs `localStorage`]]
	- [[#Slide 37 – Quale storage usereste?|Casi d'uso]]
	- [[#Slide 38 – Come vengono gestiti i dati?|`setItem` e `getItem`]]
	- [[#Slide 39 – Form e Web Storage|Form vs Web Storage]]
	- [[#Slide 40 – Web Storage vs Cookie|Web Storage vs Cookie]]
	- [[#Slide 41 – Limiti di Web Storage|Limiti del Web Storage]]
	- [[#Slide 42 – Terza domanda|Domanda 3: ricordare il tema scelto]]
8. **Scrivere e validare il codice** (slide 43–46)
	- [[#Slide 43 – Scrivere il codice|I 4 requisiti del codice per le consegne]]
	- [[#Slide 44 – Controllare con validator|Validatore W3C]]
	- [[#Slide 45 – Controllare con Achecker|AChecker per l'accessibilità]]
	- [[#Slide 46 – Controllo manuale|Controllo manuale]]
9. **Esercizio d'esame: tabella accessibile** (slide 47–51)
	- [[#Slide 47 – Esempio di ESERCIZIO (compito)|Testo dell'esercizio]]
	- [[#Slide 48 – Esempio|Soluzione errata: mancano `<thead>`, `<tbody>`, `scope`]]
	- [[#Slide 50 – Esempio|Soluzione corretta con `scope` e `headers`]]
10. **Conclusione** (slide 52)
	- [[#Slide 52 – Concludendo …|HTML non è un linguaggio di programmazione]]
---
## Slide 2 – Argomenti

- HTML:
	- Elementi
		- Interactive
	- Web API
	- Come validare il codice
---
## Slide 3 – Cosa sono le form?

- Le form HTML sono il principale meccanismo con cui una pagina Web raccoglie i dati inseriti o selezionati dall'utente
- Una form contiene controlli interattivi (es. campi di testo, pulsanti, checkbox e radio button, menu a tendina, selettori di data, numeri, ecc …)
- I dati raccolti possono essere:
	- Inviati a un server per essere elaborati
	- Elaborati nel browser tramite JavaScript
- ==Una form è l'interfaccia tra l'utente e il sistema che deve elaborare i dati inseriti==
- Appartengono alla categoria Interactive

![[TW05-s003-1.png|450]]

Schema: UTENTE → Controlli della form (Nome…, Scelta, Opzione 1 / Opzione 2, Seleziona…, Invia) → Dati (nome = Alice, scelta = si, opzione = 1, categoria = web) → Browser / Server

>> Il flusso è sempre lo stesso: l'utente agisce sui controlli, il browser costruisce un insieme di coppie nome=valore (una per ogni controllo con attributo `name`) e queste coppie vengono inviate al server oppure lette da uno script lato client.

---
## Slide 4 – Come progettare una form

- Una form consente all'utente di inserire o selezionare dati che possono essere inviati ad una applicazione per essere elaborati
	- Quale dato voglio raccogliere? Ogni controllo rappresenta un dato: `<input name="email" type="email">`
	- Come identifico il dato? L'attributo `name` associa un **nome** al **valore** inserito: `email = alice@example.com`
	- Qual è il controllo più adatto? Il tipo di controllo deve riflettere la natura del dato e dell'interazione: `text`, `email`, `number`, `radio`, `checkbox`, `select`, ecc …
	- Come lo rendo comprensibile e accessibile? Ogni controllo deve avere una descrizione associata
- Una buona form usa il controllo **semanticamente più adatto**, associa correttamente **nome e valore** e rende chiaro a tutti gli utenti **quale informazione deve essere inserita**

>> Scegliere il tipo giusto non è solo estetica: con `type="email"` il browser valida automaticamente il formato dell'indirizzo e sugli smartphone mostra una tastiera con `@`; con `type="number"` mostra il tastierino numerico. La "descrizione associata" di cui si parla è l'elemento `<label>` (vedi slide 11).

---
## Slide 5 – `<form>`

- Le form sono realizzate dall'elemento `<form>`
- In HTML5 la form può anche avere campi per l'output
- Tipi di elementi all'interno delle form:

| Famiglia | Tipi |
|---|---|
| Input testuale | `text`, `password`, `search`, `email`, `tel`, `url` |
| Scelta | `radio`, `checkbox` |
| Numeri | `number`, `range` |
| Data/Ora | `date`, `time`, `datetime-local`, `week` |
| Altro | `color`, `file`, `hidden` |
| Azioni | `submit`, `reset`, `button` |

>> Il "campo per l'output" è l'elemento `<output>`, che mostra il risultato di un calcolo (tipicamente fatto via JavaScript) sui valori degli altri controlli, es. `<output name="somma" for="a b"></output>`.
>> Tutti i tipi in tabella sono valori dell'attributo `type` di `<input>`; oltre a `<input>` una form può contenere anche `<select>`, `<textarea>`, `<button>`, `<fieldset>`, `<label>`, ecc.

---
## Slide 6 – `<form>`

- Attributi di `<form>` sono:
	- `action`: specifica l'URL dell'applicazione server-side che riceverà i dati.
	- `method`: specifica il metodo HTTP che deve essere usato per i dati, può essere:
		- `GET`: richiede di processare i dati a una specifica applicazione server.
		- `POST`: sottomette (invia) i dati da processare ad una specifica applicazione server.

```html
<form action="http://www.google.com/search"
    method="get">
</form>
```

>> Se `method` è omesso il default è `get`; se `action` è omesso i dati vengono inviati all'URL della pagina corrente. Con questo esempio, un campo `<input name="q">` contenente "tecnologie web" produrrebbe la richiesta `http://www.google.com/search?q=tecnologie+web`.

---
## Slide 7 – `GET` e `POST`

| GET | POST |
|---|---|
| Dati nell'URL/query string | Dati nel body della richiesta HTTP |
| Adatto a richieste recuperabili/condivisibili | Adatto ad invio/modifica di dati |
| Può essere «*bookmarkato*» | Non viene «*bookmarkato*» come richiesta |
| **Non usare per dati sensibili!** | I dati non sono visibili nell'URL |

- **Né GET né POST garantiscono di per sé la confidenzialità dei dati: è necessario usare HTTPS!**
- ==POST non rende i dati visibili nell'URL, HTTPS li protegge durante la trasmissione==

>> Esempio GET: `https://www.google.com/search?q=tecnologie+web` (i dati `q=tecnologie+web` sono in chiaro nell'URL, quindi finiscono in cronologia, nei log del server, nei segnalibri).
>> Esempio POST: la richiesta ha URL "pulito" e i dati viaggiano nel corpo, es.
>>
>> `POST /login HTTP/1.1`
>> `Content-Type: application/x-www-form-urlencoded`
>>
>> `user=alice&pwd=segreta`
>>
>> Senza HTTPS anche il body è leggibile da chi intercetta il traffico: POST nasconde i dati alla vista, non li cifra.

---
## Slide 8 – Attributo `name`

- Quali dati sono sottomessi?

![[TW05-s008-1.png]]

>> Un controllo **senza** attributo `name` non viene inviato al server, anche se l'utente lo ha compilato. Con più campi le coppie vengono concatenate con `&`, es. `nome=Alice&email=alice%40example.com` (i caratteri speciali sono codificati: `@` → `%40`, spazio → `+`).

---
## Slide 9 – Altri attributi comuni

- `required` è un attributo booleano dei controlli che indica che è obbligatorio inserire un valore per quel campo
- `autofocus` mette il focus su questo controllo
- `autocomplete` può assumere valore `on`, `off` oppure token più specifici (name, email, current-password, ecc)

>> "Booleano" significa che basta la presenza dell'attributo: `<input name="email" type="email" required>` equivale a `required="required"`; scrivere `required="false"` lo attiva comunque. Se un campo `required` è vuoto il browser blocca l'invio e mostra un messaggio. `autofocus` dovrebbe comparire al più su un controllo per pagina.

---
## Slide 10 – Prima domanda

**DOMANDA 1:**
Per trasmettere in modo sicuro una password è opportuno usare
- [ ] `HTTP e GET`
- [ ] `HTTPS e GET`
- [ ] `HTTP e POST`
- [x] `HTTPS e POST`

>> Risposta: **HTTPS e POST**. HTTPS cifra la comunicazione (la confidenzialità dipende da lui); POST evita che la password compaia nell'URL e quindi in cronologia, segnalibri e log del server. HTTPS e GET cifrerebbe comunque il traffico, ma la password resterebbe salvata nell'URL.

---
## Slide 11 – `<label>`

- Ogni controllo deve avere una `<label>` che descriva il controllo all'utente:
	- La presenza di `<label>` è fondamentale per l'accessibilità, se non si vuole che sia visibile, va resa invisibile ma senza rimuoverla.
	- La label può essere associata al controllo:
		- Annidando il controllo nella `<label>`.

```html
// controllo implicita
<form>
    <p><label>Customer name:
    <input....../></label></p>
</form>
```

- Mettendo un `id` nel controllo e relazionandolo alla `<label>` mediante l'attributo `for`.

```html
// controllo esplicito
<form>
    <p><label for="CN">Customer name: </label>
    <input .... id="CN" /></p>
</form>
```

>> Oltre ad essere letta dagli screen reader, la label associata rende cliccabile il suo testo: cliccando su "Customer name:" il focus va sul campo (molto utile per checkbox e radio, che sono piccoli). Nel secondo metodo il valore di `for` deve coincidere con l'`id` del controllo (non con il `name`).

---
## Slide 12 – `<fieldset>`

- L'elemento `<fieldset>` raggruppa più controlli che hanno semantica comune.
- Esempio:

```html
<form>
 <fieldset> <legend>dati personali:</legend>
    <label>Nome:
     <input type="text" name="nome"/></label><br/>
    <label>Email:
     <input type="email" name="mail"/> </label ><br/>
    <label>Data di nascita:
      <input type="date" name="date"/></label >
     </fieldset><br/>
    <input type="submit"
      value="Invia"/>
</form>
```

![[TW05-s012-1.png|400]]

>> `<legend>` fornisce il titolo del gruppo e il browser lo disegna "sopra" il bordo del riquadro, come nella figura. Gli screen reader leggono la legend prima di ciascun campo del gruppo (es. "dati personali, Nome").

---
## Slide 13 – `<input>`

- L'elemento `<input>` consente di inserire nella pagina molti tipi diversi di controllo (alcuni introdotti da HTML5).
	- Il **tipo** è specificato mediante l'attributo `type` che può assumere i valori `hidden`, `text`, `search`, `tel`, `url`, `email`, `password`, `date`, `time`, `number`, `range`, `color`, `checkbox`, `radio`, `file`, `submit`, `image`, `reset` , `button`.
	- Visualizzazione e modalità di interazione variano da browser a browser.
	- Per provare singolarmente tutti i tipi su w3school:
		- http://www.w3schools.com/tags/att_input_type.asp

>> `<input>` è un elemento vuoto (senza tag di chiusura). Se `type` manca o ha un valore non supportato dal browser, il controllo viene trattato come `text`: per questo i tipi HTML5 degradano bene sui browser vecchi.

---
## Slide 14 – `reset`, `submit` e `button`

- Il valore `reset` per l'attributo `type` genera un bottone per ripristinare i valori di default della form
- Il valore `submit` per l'attributo `type` genera un bottone per sottomettere la form
- Il valore `button` per l'attributo `type` genera un bottone a cui può essere associato uno script Javascript attraverso l'attributo `onclick`.
- In tutti e tre gli elementi, attraverso l'attributo `value` viene modificato il testo sul bottone.

```html
</form>
  <input type="button" value="Bottone" onclick="…"/>
  <input type="reset" value="Reimposta"/>
  <input type="submit" value="Invia"/>
</form>
```

![[TW05-s014-1.png|350]]

>> Il primo tag del codice sulla slide dovrebbe essere `<form>` (apertura), non `</form>`.
>> Un `type="button"` senza script non fa nulla quando viene premuto. Esiste anche l'elemento `<button>` (es. `<button type="submit">Invia</button>`), che può contenere HTML (icone, testo formattato); attenzione: un `<button>` dentro una form senza `type` si comporta come `submit`.

---
## Slide 15 – `text`

- Gli input di tipo `text` sono utilizzati come controlli per l'input di testo (generico). Per tipi particolari di testo (per esempio mail, colori o date), esistono controlli specifici.

```html
<form action="demo_form.asp"/>
  <label>First name:
    <input type="text" name="fname"/>
  </label><br/>
  <label>Last name:
    <input type="text" name="lname"/>
  </label><br/>
  <input type="submit" value="Invia richiesta"/>
</form>
```

![[TW05-s015-1.png|300]]

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_text

>> Nel codice il tag di apertura `<form action="demo_form.asp"/>` non dovrebbe avere la `/` finale (`<form>` non è un elemento vuoto). Attributi utili per `text`: `placeholder` (testo di suggerimento), `maxlength`, `size`, `value` (valore iniziale). Compilando "Mario" e "Rossi" e premendo il bottone, il browser invia `fname=Mario&lname=Rossi` a `demo_form.asp` (con GET, il default).

---
## Slide 16 – `Password` e `hidden`

- Input di tipo `password`: permettono di una associazione variabile valore invisibile all'utente
- Quando l'utente riempie il controllo, la visualizzazione della password viene oscurata

```html
<label>Password:
  <input type="password" name="pwd"
   maxlength="8" />
</label>
```

![[TW05-s016-1.png|350]]

- Input di tipo `hidden`: creano una associazione variabile-valore invisibile all'utente
- Il controllo `<input>` con `type="hidden"` non viene visualizzato

```html
<input type="hidden" name="country" value="Italy"/>
<input type="submit" value="Invia"/>
```

![[TW05-s016-2.png|120]]

>> Differenza: nel campo `password` il valore lo inserisce l'utente ma viene mascherato a video (pallini); nel campo `hidden` il valore è deciso dallo sviluppatore e non è mostrato affatto, ma viene comunque inviato (`country=Italy`). Nessuno dei due è "segreto": il valore di un hidden si legge nel sorgente della pagina e la password viaggia in chiaro se non si usa HTTPS. `maxlength="8"` limita a 8 i caratteri inseribili.

---
## Slide 17 – `search`

- Il tipo `search` consente di inserire testi che diventano chiavi di ricerca.
	- Come nel tipo testo, si può inserire un testo qualunque (senza pattern specifici).
	- In alcuni browser (es. Safari) il campo è visualizzato in modo da evidenziare la sua funzione.

![[TW05-s017-1.png|250]]

- Esempio

```html
<form action="demo_form.asp">
  <label>Search Google:
  <input type="search" name="googlesearch"/>
  </label><br/>
  <input type="submit"
    value="Invia richiesta"/>
</form>
```

![[TW05-s017-2.png|300]]

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_search

>> Rispetto a `text`, `search` è soprattutto una indicazione semantica: molti browser aggiungono una "x" per cancellare il contenuto e l'icona della lente (come nella prima figura), e i lettori di schermo annunciano il campo come campo di ricerca.

---
## Slide 18 – `tel`, `url`, `email`

- Per inserire dati personali (e non solo) sono previsti tipi specifici per `tel`, `url` e `email`
- Esempio:

```html
<form action="demo_form.asp">
  <p> Inserisci i tuoi dati </p>
  <label> e-mail: <input type="email"
    name="usremail"/></label><br/><br/>
  <label> telefono: <input type="tel"
     name="usrtel"/></label><br/><br/>
  <label>homepage: <input type="url"
     name="homepage"/></label><br/><br/>
  <input type="submit" value="Invia"/>
</form>
```

![[TW05-s018-1.png|300]]

>> Comportamento dei tre tipi: `email` e `url` vengono validati dal browser all'invio (es. `alice@example` è accettato, `alice` no; un URL deve avere lo schema, es. `https://...`). `tel` invece **non** viene validato, perché i formati dei numeri variano da paese a paese: per imporne uno si usa l'attributo `pattern` (es. `pattern="[0-9]{10}"`). Su mobile tutti e tre attivano una tastiera adatta.

---
## Slide 19 – `radio`

- Gli input di tipo **`radio`** realizzano un radio button. Le diverse opzioni possibili sono definite inserendo più **`radio`** con lo stesso **`name`**.
- Esempio:

```html
<form action="demo_form.asp">
  <label>
    <input type="radio" name="gender" value="male"/>
    Male</label> <br/>
  <label>
    <input type="radio" name="gender" value="female"/>
    Female</label> <br/>
  <label>
    <input type="radio" name="gender" value="other"/>
    Other</label> <br/>

  <input type="submit" value="Submit"/>
</form>
```

![[TW05-s019-1.png|166]]

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_radio

>> È lo stesso `name` a creare il "gruppo": fra i radio con lo stesso `name` se ne può selezionare **uno solo**. All'invio viene spedita una sola coppia, es. `gender=female` (il `value` del radio scelto); se nessuno è selezionato, il campo non viene inviato affatto.
>> Avvolgere l'input nella `<label>` rende cliccabile anche il testo ("Male"), a vantaggio di usabilità e accessibilità.

---
## Slide 20 – `checkbox`

- Gli input di tipo **`checkbox`** realizzano una checkbox. Le diverse opzioni possibili sono definite inserendo più **`checkbox`** con lo stesso **`name`**.
- Esempio:

```html
<form action="demo_form.asp">
  <label><input type="checkbox" name="vehicle1"
    value="Bike"/>I have a bike</label><br/>
  <label><input type="checkbox" name="vehicle2"
    value="Car"/> I have a car</label><br/>
  <label><input type="checkbox" name="vehicle3"
    value="Boat"/> I have a boat</label><br/>
  <input type="submit" value="Submit"/>
</form>
```

![[TW05-s020-1.png|214]]

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_checkbox

>> A differenza dei radio, le checkbox sono indipendenti: se ne possono spuntare zero, una o più. Vengono inviate **solo quelle spuntate** (es. `vehicle1=Bike&vehicle3=Boat`); una checkbox senza `value` invia il valore di default `on`.
>> Nota: nell'esempio i `name` sono diversi (`vehicle1`, `vehicle2`, `vehicle3`); usando lo stesso `name` (es. `vehicle`) si ottiene invece una query string con la chiave ripetuta: `vehicle=Bike&vehicle=Boat`.

---
## Slide 21 – `number` e `range`

- Tipi di controllo per i numeri sono:
	- **`number`**: consente di inserire un numero
	- **`range`**: consente di scegliere in un range
- Per entrambi si possono definire:
	- **`min`**: specifica il valore minimo
	- **`max`**: specifica il valore massimo
- Esempio:

```html
<form action="demo_form.asp">
<label>range (0-10)
  <input type="range" name="points"
min="0" max="10"/></label><br/><br/>
<label>numero (1-5):
  <input type="number" name="quantity"
min="1" max="5"/></label><br/><br/>
<input type="submit" value="Invia"/>
</form>
```

![[TW05-s021-1.png|348]]![[TW05-s021-2.png|309]]

![[TW05-s021-3.png|187]]

>> Nella seconda figura il browser rifiuta il testo "paola" in un campo `number` mostrando il messaggio "Inserire un numero": la validazione è fatta lato client prima dell'invio.
>> Oltre a `min` e `max` esiste `step` (passo, default 1). Il `range` è adatto quando il valore esatto conta poco (volume, luminosità); per valori precisi è meglio `number`, come mostra ironicamente la vignetta "When UI designer go crazy..." (numero di telefono inserito con uno slider).
>> Attenzione: la validazione del browser non sostituisce quella lato server, perché la richiesta può essere costruita a mano.

---
## Slide 22 – Data e ora

- Per codificare data e ora sono disponibili vari tipi di **`input`**:
	- **`time`**: orario
	- **`week`**: settimana dell'anno
	- **`date`**: data
	- **`datetime-local`**: data e orario locali
- Vengono selezionati in modo diverso da browser a browser, in alcuni casi (negli esempi è Chrome) l'immissione è più efficace.

![[TW05-s022-1.png]]

![[TW05-s022-2.png|333]]![[TW05-s022-3.png|336]]

>> Qualunque sia l'aspetto grafico, il valore inviato ha un formato standard indipendente dalla lingua: `time` → `14:30`, `date` → `2015-08-30`, `week` → `2015-W35`, `datetime-local` → `2015-08-30T14:30`. Anche qui si possono usare `min` e `max` (es. `min="2015-01-01"`).

---
## Slide 23 – Data e ora

- Esempio:

```html
<form action="demo_form.asp">
  <label> time: <input type="time"
     name="usr_time"/></label><br/><br/>
  <label> week: <input type="week"
     name="week_year"/></label><br/><br/>
  <label> date: <input type="date"
     name="day"/></label> <br/><br/>
<label>local date and time:
     <input type="datetime-local"
     name="ldt"/></label> <br/><br/>
 <input type="submit" value="Invia"/>
</form>
```

![[TW05-s023-1.png|332]]

>> Nella figura compare anche un campo "date and time" che non è nel codice: corrisponde al vecchio tipo `datetime`, rimosso dallo standard (e reso dai browser come un semplice campo di testo). Va usato `datetime-local`.

---
## Slide 24 – `color`

- Il tipo **`color`** consente di scegliere un colore, attraverso un color picker che consente di selezionarlo.

![[TW05-s024-1.png|347]]

- Esempio:

```html
<form action="demo_form.asp">
  <label>Select your favorite color:
  <input type="color" name="favcolor"/>
  <label><br/>
  <input type="submit" value="Invia richiesta"/>
</form>
```

- PROVA!

![[TW05-s024-2.png|444]]

>> Il valore inviato è il colore in esadecimale a 7 caratteri, es. `favcolor=%23ff0000` (cioè `#ff0000`, con `#` codificato come `%23` nell'URL); il default è nero `#000000`.
>> Nel codice della slide la seconda `<label>` dovrebbe essere la chiusura `</label>`.

---
## Slide 25 – `file`

- Il tipo **`file`** consente di selezionare un file:
	- Possono essere caricati più file ma il **`name`** deve essere senza path (anche se si carica una directory).
	- Esiste uno stato che consente di monitorare l'upload
- Esempio:

```html
<form action="demo_form.asp">
  <label>Selezionare file:
    <input type="file"
            name="file1"/>
    </label><br/><br/>
  <input type="submit"
    value="Invia richiesta"/>
</form>
```

![[TW05-s025-1.png|469]]

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_type_file

>> Per caricare più file serve l'attributo booleano `multiple`; con `accept` si filtrano i tipi ammessi (es. `accept="image/*"` o `accept=".pdf"`).
>> Per inviare davvero il **contenuto** del file la form deve usare `method="post"` ed `enctype="multipart/form-data"`: con la codifica di default (`application/x-www-form-urlencoded`) viene inviato solo il nome del file.

---
## Slide 26 – `<textarea>`

- L'elemento **`<textarea>`** definisce un controllo di input per testi multilinea.
	- Gli attributi **`cols`** e **`rows`** specificano la dimensione della **`<textarea>`**.
- Esempio:

```html
<form>
<label>testo libero
<br/><textarea rows="4" cols="50">
il testo inserito tra inizio e fine
elemento è il valore di default della textarea
</textarea></label><br/><br/>
<input type="submit" value="Submit"/>
</form>
```

![[TW05-s026-1.png|512]]

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_textarea

>> A differenza di `<input>`, `<textarea>` non è un elemento vuoto: il valore iniziale è il **contenuto** tra i tag, non un attributo `value`. Per un suggerimento che sparisce quando si scrive si usa invece `placeholder`. Per essere inviata, come ogni controllo, deve avere un `name` (nell'esempio manca).

---
## Slide 27 – `<select>` e `<option>`

- L'elemento **`<select>`** è usato per realizzare menù a tendina.
- Le diverse opzioni sono introdotte attraverso l'elemento **`<option>`**.
- Esempio:

```html
<form>
<label> scegli un insegnamento<br/>
<select name="insegnamento">
  <option value="SO">Sistemi Operativi</option>
  <option value="TW">Tecnologie Web</option>
  <option value="SM">Sistemi Multimediali</option>
</select></label>
</form>
```

![[TW05-s027-1.png]]

http://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select

>> L'utente vede il testo dell'opzione ("Tecnologie Web"), ma al server viene inviato il `value`: `insegnamento=TW`. Il `name` va sulla `<select>`, non sulle singole `<option>`.

---
## Slide 28 – `<select>` e `<option>`

- Attributi per **`<select>`** sono:
	- **`multiple`**, booleano per effettuare selezioni multiple
	- **`size`**, definisce le opzioni da mostrare all'utente
- Attributi per **`<option>`** sono:
	- **`selected`**, booleano è true se quella **`<option>`** è il valore di default, altrimenti la prima option è il default. Se si vuole un default nullo, si deve aggiungere una **`<option>`** vuota.
	- **`value`**, indica il valore quando diverso dal testo della opzione, per esempio un codificato o abbreviato.

![[TW05-s028-1.png|232]]

>> Le tre figure mostrano: una `<select multiple>` con due opzioni selezionate (con Ctrl/Cmd+clic), una lista con `size="2"` (due righe visibili invece della tendina) e una tendina con una `<option>` vuota iniziale come default nullo.
>> Con `multiple` vengono inviate più coppie con la stessa chiave, es. `insegnamento=TW&insegnamento=SM`. Opzioni correlate si possono raggruppare con `<optgroup label="...">`.

---
## Slide 29 – Seconda domanda

**DOMANDA 2**:
L'utente deve poter scegliere una quantità da 1 a 5. Quale soluzione NON risponde alla richiesta?

- [ ] **select con opzioni da 1 a 5**
- [x] **checkbox da 1 a 5**
- [ ] **range da 1 a 5**
- [ ] **number limitato da 1 a 5**

>> Risposta: **checkbox da 1 a 5**. Le checkbox sono indipendenti e permettono di selezionare più valori contemporaneamente (o nessuno), quindi non rappresentano una singola quantità. `select`, `range` (con `min="1" max="5"`) e `number` (con `min="1" max="5"`) producono invece un unico valore nell'intervallo richiesto. (Cinque `radio` con lo stesso `name` sarebbero stati invece accettabili.)

---
## Slide 30 – Esempio

- **ESERCIZIO 1:**
Scrivere il codice HTML5 accessibile e semanticamente corretto per realizzare una form che invia con metodo GET i seguenti dati:
	- Gruppo di campi di anagrafica: Nome, cognome, email del referente del gruppo
	- Gruppo di campi per la scelta del tipo di elaborato, con cui si specificano: il tipo di elaborato, a scelta alternativa tra semplice, medio, complesso; il numero di membri del gruppo, con quantità tra 1 e 4

>> Traduzione dei requisiti in elementi HTML: "gruppo di campi" → `<fieldset>` con `<legend>`; "accessibile" → ogni controllo associato a una `<label>`; email → `type="email"`; "scelta alternativa" → `<select>` (o `radio` con lo stesso `name`); "quantità tra 1 e 4" → `type="number"` con `min="1" max="4"`; metodo GET → `method="GET"` sulla `<form>`.

---
## Slide 31 – Soluzione

```html
<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="utf-8"/>
    <title>Primo esercizio</title>
  </head>
  <body>
    <form action="script.php" method="GET">
      <fieldset>
         … Primo fieldset
      </fieldset>
      <fieldset>
         … Secondo fieldset
      </fieldset>
       <input type="submit" value="Invia"/>
    </form>
  </body>
</html>
```

>> `lang="it"` serve anche all'accessibilità (i lettori di schermo scelgono la pronuncia corretta). Con GET i dati finiranno nella query string, es. `script.php?nome=Mario&cognome=Rossi&...`.

---
## Slide 32 – Soluzione

```html
<fieldset>
        <legend>Anagrafica</legend>
        <label>Nome:
              <input type="text" name="nome"
              autocomplete="on" placeholder="nome.."
              required/></label>
        <label>Cognome:
               <input type="text" name="cognome"
               autocomplete="on" placeholder="cognome.."
               required/></label>
        <label>Email referente:
               <input type="email" name="email"
               autocomplete="on" placeholder="email.."
               required/></label>
</fieldset>
```

>> `type="email"` fa sì che il browser verifichi il formato dell'indirizzo (e sui dispositivi mobili mostri una tastiera con `@`); `required` impedisce l'invio se il campo è vuoto. Il `placeholder` è solo un suggerimento e non sostituisce la `<label>`.

---
## Slide 33 – Soluzione

```html
<fieldset>
        <legend>Tipo elaborato</legend>
        <label>Tipo elaborato:
          <select name="tipoElaborato">
            <option value="semplice">Semplice</option>
            <option value="medio">Medio</option>
            <option value="complesso">Complesso</option>
          </select>
         </label>
        <label>Numero membri:
          <input type="number" name="nrMembri" min="1"
           max="4" required/>
        </label>
</fieldset>
```

>> Esempio di URL generato all'invio: `script.php?nome=Mario&cognome=Rossi&email=mario%40esempio.it&tipoElaborato=medio&nrMembri=3` (la `@` viene codificata come `%40`).

---
## Slide 34 – HTML e Web API

- I browser moderni mettono a disposizione delle applicazioni Web diverse API per accedere a funzionalità del browser
- Esempi:
	- **Web storage**
	- Geolocation
	- History
	- Drag and Drop
	- Multimedia
- Le Web API sono utilizzate attraverso Javascript, per ora ci concentriamo sul loro scopo e il loro funzionamento generale

>> Alcuni esempi del loro scopo: Geolocation fornisce la posizione dell'utente (previo suo consenso), History permette di manipolare la cronologia di navigazione e l'URL senza ricaricare la pagina, Drag and Drop gestisce il trascinamento di elementi, Multimedia (`<audio>`/`<video>`) controlla la riproduzione dei contenuti.

---
## Slide 35 – Web Storage

- Una applicazione Web può avere bisogno di ricordare alcune informazioni lato client, per esempio:
	- Lingua preferita dall'utente
	- Tema chiaro/scuro
	- Punto raggiunto in una procedura composta da più passi
	- Alcune preferenze dell'utente
- La Web Storage API consente di memorizzare nel browser semplici coppie **`chiave->valore`** (**`theme->dark`**; **`language->it`**)
- I dati vengono memorizzati in un apposito storage nel browser, non sul server

>> Chiavi e valori sono sempre **stringhe** (per oggetti si serializza con `JSON.stringify`). A differenza dei cookie, questi dati non vengono inviati automaticamente al server a ogni richiesta e lo spazio disponibile è maggiore (tipicamente circa 5 MB per origin). Non vanno usati per dati sensibili, perché sono leggibili da qualunque script della pagina.
>> Uso tipico in JavaScript: `localStorage.setItem("theme", "dark")`, `localStorage.getItem("theme")`, `localStorage.removeItem("theme")`, `localStorage.clear()`.

---
## Slide 36 – Due tipi di Web storage

- **`sessionStorage`** è legato alla sessione della singola scheda
- **`localStorage`** persiste anche tra diverse sessioni del browser

| | `sessionStorage` | `localStorage` |
|---|---|---|
| *Dove sono memorizzati i dati?* | Browser | Browser |
| *Ambito* | Origin + singola scheda | Origin |
| *Ricaricando la pagina* | Rimangono | Rimangono |
| *Chiudendo la scheda* | Vengono rimossi | Rimangono |
| *Chiudendo e riaprendo il browser* | Vengono rimossi | persistono tra diverse sessioni del browser, finché non vengono esplicitamente cancellati o rimossi dal browser/utente |
| *Caso d'uso* | Stato temporaneo | Preferenze persistenti |

>> L'**origin** è la terna schema + host + porta: `https://esempio.it` e `http://esempio.it` (schema diverso) o `https://esempio.it:8080` (porta diversa) hanno storage separati. Due schede sulla stessa origin condividono il `localStorage` ma ognuna ha il proprio `sessionStorage`.
>> Esempi: il passo raggiunto in una procedura guidata → `sessionStorage`; il tema chiaro/scuro o la lingua → `localStorage`.

---
## Slide 37 – Quale storage usereste?

- Caso 1: l'utente sceglie il tema scuro e vuole ritrovarlo anche il giorno successivo
	- **`localStorage`**
- Caso 2: l'utente sta compilando una procedura in più passi e apre la stessa applicazione in due schede diverse. Le due procedure devono rimanere indipendenti
	- **`sessionStorage`**
- Caso 3: l'utente sceglie la lingua italiana e il sito deve ricordarla anche dopo la chiusura del browser
	- **`localStorage`**

>> Criterio pratico: se il dato deve sopravvivere alla chiusura del browser ed essere condiviso tra tutte le schede della stessa origin → `localStorage`; se deve vivere solo finché resta aperta quella scheda (ed essere separato per ogni scheda) → `sessionStorage`.

---
## Slide 38 – Come vengono gestiti i dati?

```js
localStorage.setItem("theme", "dark");
```
memorizza nello storage:
```
theme → dark
```
Per recuperare il valore:
```js
localStorage.getItem("theme");
```

Analogamente:
```js
sessionStorage.setItem("step", "2");
```

*Studieremo questa sintassi quando introdurremo JavaScript*

>> Lo storage è un semplice dizionario chiave → valore. Altri metodi utili: `removeItem("theme")` elimina una singola chiave, `clear()` svuota tutto lo storage di quella origin. Se la chiave non esiste, `getItem` restituisce `null`.

---
## Slide 39 – Form e Web Storage

- Con le form i dati possono essere inviati al server
- Con Web Storage i dati vengono memorizzati localmente nel broswer

![[TW05-s039-1.png|600]]

---
## Slide 40 – Web Storage vs Cookie

- Entrambi permettono di mantenere informazioni lato client, ma hanno scopi e comportamenti diversi

| Web Storage | Cookie |
| --- | --- |
| Dati memorizzati nel browser | Dati memorizzati nel browser |
| Accessibili da JavaScript | Possono essere letti/impostati da Javascript, salvo restrizioni |
| Non vengono inviati automaticamente al server | Possono essere inviati automaticamente al server con le richieste HTTP |
| Adatti a stato/preferenze lato client | Utili anche per sessioni, autenticazione e stato lato server |
| **`localStorage`/`sessionStorage`** | Cookie con attributi come **`Secure`**, **`HttpOnly`**, **`SameSite`** |

- Web storage conserva i dati per il browser; i cookie possono partecipare direttamente alla comunicazione HTTP con il server
- Web Storage non sostituisce i cookie: risponde ad esigenze diverse

>> Significato degli attributi dei cookie: `Secure` → il cookie viene inviato solo su connessioni HTTPS; `HttpOnly` → il cookie non è leggibile da JavaScript (protegge ad es. i cookie di sessione da furti via XSS; è questa la "restrizione" citata in tabella); `SameSite` → limita l'invio del cookie nelle richieste provenienti da altri siti (difesa contro CSRF).
>>
>> Altra differenza pratica: i cookie hanno dimensioni molto piccole (circa 4 KB ciascuno), mentre il Web Storage offre tipicamente qualche MB per origin.

---
## Slide 41 – Limiti di Web Storage

- I dati sono associati ad una specifica origin
- Chiavi e valori vengono memorizzati come stringhe
- Lo spazio disponibile è limitato
- L'utente o il browser possono cancellare i dati
- Web storage non è un luogo sicuro per memorizzare informazioni sensibili
- I dati memorizzati non vengono automaticamente inviati al server

- Web storage è utile per mantenere stato e preferenze lato client, ma non sostituisce database o meccanismi di memorizzazione lato server

>> Origin = schema + host + porta: `https://example.com` e `http://example.com` (o `https://example.com:8080`) sono origin diverse e non condividono lo storage.
>>
>> Poiché si salvano solo stringhe, per memorizzare oggetti o array si usa di solito `JSON.stringify(...)` in scrittura e `JSON.parse(...)` in lettura. Qualunque script in esecuzione nella pagina (anche uno iniettato con un attacco XSS) può leggere lo storage: per questo non ci vanno messi token o password.

---
## Slide 42 – Terza domanda

**DOMANDA 3**:
Un sito deve ricordare il tema chiaro/scuro scelto dall'utente anche dopo la chiusura del browser.
Quale soluzione è più adatta?
- [x] `localStorage`
- [ ] `sessionStorage`
- [ ] attributo `method="POST"`
- [ ] `input type="hidden"`

>> Risposta: `localStorage`, l'unico che persiste dopo la chiusura del browser (è esattamente il Caso 1 della slide 37). `sessionStorage` si perde alla chiusura della scheda; `method="POST"` indica solo come inviare i dati di una form al server; un `input type="hidden"` è un campo nascosto della form, che non conserva nulla tra una visita e l'altra.

---
## Slide 43 – Scrivere il codice -> regole esame e elaborato 

- Per le consegne di TW il codice HTML deve essere:
	1. **Valido rispetto ad HTML Living Standard**
	2. **Basato sulla semantica degli elementi e degli attributi**
	3. **Con presentazione separata dal contenuto**
	4. **Accessibile (livello WCAG AA)**
- Per farlo, si possono seguire queste indicazioni:
	- Scrivere usando la **corretta semantica, senza elementi** o **attributi presentazionali**
	- Controllare con **Validator**
	- Controllare con **ACheker** (disponibile durante la prova pratica in laboratorio, anche se non è l'unico validatore di accessibilità)
	- **Controllare a mano**

>> Esempi di elementi/attributi presentazionali da evitare: `<font>`, `<center>`, `<big>`, attributi come `align`, `bgcolor`, `border` sulle tabelle, oppure usare `<b>`/`<i>` solo per l'aspetto grafico. L'aspetto va definito nel CSS, mentre l'HTML descrive il significato del contenuto (es. `<strong>`, `<em>`, `<th>`, `<caption>`).

---
## Slide 44 – Controllare con validator

- Per validare il codice usiamo il validatore del W3C, https://validator.w3.org/

![[TW05-s044-2.png|100]]

![[TW05-s044-1.png|600]]

- **ATTENZIONE**, è valido ma non è detto che sia accessibile e quindi lo strumento non è sufficiente a dire che le consegne del compito sono giuste!

>> Il validatore offre tre modalità (visibili nello screenshot): *Validate by URI* (pagina già online), *Validate by File Upload* (file locale) e *Validate by Direct Input* (codice incollato direttamente). Controlla solo la conformità sintattica allo standard (tag chiusi, annidamenti corretti, attributi ammessi, id unici, ecc.).

---
## Slide 45 – Controllare con Achecker

- Dobbiamo ancora introdurre bene l'accessibilità del Web (nelle prossime settimane), ma intanto introduciamo lo strumento di validazione: Acheker.

![[TW05-s045-1.png|600]]

>> Nello screenshot si vede che AChecker permette di scegliere le linee guida da verificare (es. WCAG 2.0 livello A, AA o AAA): per le consegne di TW va selezionato **WCAG 2.0 (Level AA)**, coerente con il punto 4 della slide 43.

---
## Slide 46 – Controllo manuale

- Ogni volta che si fa una correzione, le validazioni automatiche vanno rifatte entrambe!
- La validazione automatica:
	- A volte ha dei bug
	- Non può controllare tutto (le figure e la necessità di alternative testuali, per esempio)
- Alla fine va riverificato manualmente che il codice rispetti tutti e 4 i punti.

>> Esempio: un validatore verifica che un `<img>` abbia l'attributo `alt`, ma non può capire se `alt="immagine"` descrive davvero il contenuto della figura, né se una figura puramente decorativa dovrebbe avere `alt=""`. Questo giudizio è solo umano.

---
## Slide 47 – Esempio di ESERCIZIO (compito)

- Scrivere un documento HTML valido con codice HTML5 accessibile e semanticamente corretto per realizzare la tabella seguente, con *caption* «Valutazione Esercizi»:

![[TW05-s047-1.png|400]]

---
## Slide 48 – Esempio

```html
<!DOCTYPE html>
<html>
<head>
   <link href="fogliostile.css" rel="stylesheet" />
   <title>Esercizio</title>
 </head>
<body>
<table>
<caption> Valutazione esercizi </caption>
<tr>
  <th rowspan="2"> Esercizio </th>
  <th colspan="2" id="val">Valutazione</th>
</tr>
<tr>
  <th id="min"> minimo </th>
  <th id="max"> massimo </th>
</tr>
...
```

- **Mancano `<thead>` e `<tbody>`!** (freccia rivolta verso `<table>` / `<caption>`)
- **Mancano scope e colgroup!** (freccia rivolta verso le intestazioni `minimo` / `massimo`)

>> Nota: nel codice mostrato manca anche l'attributo `lang` su `<html>` (es. `<html lang="it">`) e la dichiarazione `<meta charset="utf-8">` nell'`<head>`: sono dettagli richiesti per un documento corretto e accessibile (la lingua serve, ad esempio, agli screen reader per la pronuncia).

---
## Slide 49 – Esempio

```html
<tr>
  <th id="es1">Esercizio 1</th>
  <td headers="val min es1">3</td>
  <td headers="val max es1">5</td>
</tr>
<tr>
  <th id="es2">Esercizio 2</th>
  <td headers="val min es2">5</td>
  <td headers="val max es2">7</td>
</tr>
<tr>
  <th id="es3">Esercizio 3</th>
  <td headers="val min es3">7</td>
  <td headers="val max es3">9</td>
</tr>
</table>
</body>
</html>
```

>> L'attributo `headers` elenca gli `id` di tutte le celle di intestazione che si riferiscono a quella cella di dati: ad es. la cella "3" è associata a "Valutazione" (`val`), "minimo" (`min`) ed "Esercizio 1" (`es1`), così uno screen reader può leggere "Valutazione, minimo, Esercizio 1: 3".

---
## Slide 50 – Esempio

```html
<!DOCTYPE html>
<html>
<head>
   <link href="fogliostile.css" rel="stylesheet" />
   <title>Esercizio</title>
 </head>
<body>
<table>
<caption> Valutazione esercizi </caption>
  <thead>
    <tr>
     <th rowspan="2"> Esercizio </th>
     <th colspan="2" scope="colgroup" id="val">Valutazione</th>
    </tr>
    <tr>
      <th id="min" scope="col"> minimo </th>
      <th id="max" scope="col"> massimo </th>
    </tr>
  </thead>
```

>> `scope="col"` indica che l'intestazione vale per l'intera colonna sottostante; `scope="colgroup"` che vale per un gruppo di colonne (qui le due colonne "minimo" e "massimo" coperte dal `colspan="2"`); `scope="row"` (slide successiva) che vale per la riga. `scope` e `headers` sono due modi complementari di collegare dati e intestazioni: `headers` è più esplicito ed è utile nelle tabelle con intestazioni su più livelli come questa.

---
## Slide 51 – Esempio

```html
<tbody>
  <tr>
    <th id="es1" scope="row">Esercizio 1</th>
    <td headers="val min es1">3</td>
    <td headers="val max es1">5</td>
  </tr>
  <tr>
    <th id="es2" scope="row">Esercizio 2</th>
    <td headers="val min es2">5</td>
    <td headers="val max es2">7</td>
  </tr>
  <tr>
    <th id="es3" scope="row">Esercizio 3</th>
    <td headers="val min es3">7</td>
    <td headers="val max es3">9</td>
  </tr>
</tbody>
</table>
</body>
</html>
```

---
## Riassunto

>> **Form e invio dei dati**
>> - `<form>` raccoglie dati dall'utente; `action` = URL dell'applicazione server-side, `method` = `GET` (default) o `POST`.
>> - Vengono inviati solo i controlli con attributo `name`, come coppie `nome=valore` unite da `&`.
>> - GET: dati nella query string dell'URL (bookmarkabile, visibile in cronologia/log), mai per dati sensibili. POST: dati nel body della richiesta.
>> - Né GET né POST cifrano: la confidenzialità la dà solo HTTPS. Password → **HTTPS + POST**.
>> - `required`, `autofocus`, `autocomplete` (`on`/`off`/token); gli attributi booleani valgono per la sola presenza.
>>
>> **Accessibilità dei controlli**
>> - Ogni controllo deve avere una `<label>`: annidando il controllo, oppure con `for` uguale all'`id` del controllo.
>> - `<fieldset>` + `<legend>` raggruppano controlli semanticamente affini.
>>
>> **Tipi di controllo**
>> - `<input type=...>`: `text`, `password`, `hidden`, `search`, `email`, `tel`, `url`, `number`/`range` (`min`, `max`, `step`), `date`, `time`, `week`, `datetime-local`, `color`, `file`, `checkbox`, `radio`, `submit`, `reset`, `button`.
>> - Tipo non supportato → trattato come `text`. `email`/`url` validati dal browser, `tel` no (si usa `pattern`).
>> - `radio` con lo stesso `name` = scelta esclusiva; `checkbox` = scelte indipendenti (inviate solo se spuntate).
>> - `file` richiede `method="post"` ed `enctype="multipart/form-data"`.
>> - `<textarea>`: valore iniziale = contenuto tra i tag; `cols`, `rows`.
>> - `<select>`/`<option>`: si invia il `value`; `multiple`, `size`, `selected`.
>> - La validazione lato client non sostituisce quella lato server.
>>
>> **Web Storage**
>> - API del browser (via JavaScript) per coppie chiave→valore di sole **stringhe**, salvate nel browser e per **origin** (schema + host + porta).
>> - `sessionStorage`: singola scheda, cancellato alla chiusura della scheda. `localStorage`: persiste tra sessioni del browser (es. tema, lingua).
>> - Metodi: `setItem`, `getItem` (`null` se assente), `removeItem`, `clear`.
>> - Rispetto ai cookie: non inviato automaticamente al server, più spazio (MB vs ~4 KB); cookie con `Secure`, `HttpOnly`, `SameSite`.
>> - Non sicuro per dati sensibili, spazio limitato, cancellabile dall'utente.
>>
>> **Requisiti del codice per le consegne**
>> - HTML valido (Living Standard), semantico, presentazione separata (CSS), accessibile **WCAG AA**.
>> - Verificare con Validator W3C (validità ≠ accessibilità), AChecker e controllo manuale; rifare entrambe le validazioni dopo ogni correzione.
>> - Tabelle accessibili: `<caption>`, `<thead>`/`<tbody>`, `scope` (`col`, `colgroup`, `row`) e/o `headers` che elenca gli `id` delle intestazioni.
