[12_php_sintassi_sicurezza](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/slide/12_php_sintassi_sicurezza.pdf>)

# PHP: sintassi, HTTP, database e sicurezza

>> Finora il backend era una scatola nera: in [[11 - JavaScript asincrono, Promise e Fetch]] e [[12 - Introduzione a Vue]] il frontend chiedeva i dati con `fetch`. Qui si scrive quel backend in PHP: endpoint che leggono la richiesta, interrogano MySQL e rispondono in JSON, più sessioni, login e sicurezza (SQL injection, CSRF, cookie).
>> Le tre slide "domanda" (41, 58, 80) sono le domande bonus annunciate in copertina.

## Indice

1. **PHP nel Web moderno** (slide 1–10)
	- [[#Slide 3 – PHP: il ruolo del backend|PHP: il ruolo del backend]]
	- [[#Slide 4 – PHP è ancora così diffuso?|PHP è ancora così diffuso?]]
	- [[#Slide 5 – PHP è morto. Lunga vita a PHP!|PHP è morto. Lunga vita a PHP!]]
	- [[#Slide 6 – Dal browser al server: il ciclo di una richiesta|Dal browser al server: il ciclo di una richiesta]]
	- [[#Slide 7 – PHP genera risposte|PHP genera risposte]]
	- [[#Slide 9 – Architettura|Architettura]]
	- [[#Slide 10 – Un primo script: esecuzione server-side|Un primo script: esecuzione server-side]]
2. **Sintassi e concetti principali** (slide 11–19)
	- [[#Slide 11 – Variabili, tipi e stringhe|Variabili, tipi e stringhe]]
	- [[#Slide 13 – Variabili, tipi e stringhe: PHP vs JS|Variabili, tipi e stringhe: PHP vs JS]]
	- [[#Slide 14 – Array indicizzati e associativi|Array indicizzati e associativi]]
	- [[#Slide 16 – Array associativi|Array associativi]]
	- [[#Slide 17 – Funzioni, inclusione di file e organizzazione del codice|Funzioni, inclusione di file e organizzazione del codice]]
3. **PHP, HTTP e API REST** (slide 20–41)
	- [[#Slide 20 – Le superglobali: PHP e le richieste HTTP|Le superglobali: PHP e le richieste HTTP]]
	- [[#Slide 23 – Richiesta HTTP vista dal backend|Richiesta HTTP vista dal backend]]
	- [[#Slide 25 – GET, POST e dati della richiesta|GET, POST e dati della richiesta]]
	- [[#Slide 28 – Dal form HTML alla Fetch API|Dal form HTML alla Fetch API]]
	- [[#Slide 31 -> 32 – Che cos'è una API REST?|Che cos'è una API REST?]]
	- [[#Slide 33 – Endpoint, risorse e metodi HTTP|Endpoint, risorse e metodi HTTP]]
	- [[#Slide 34 – PHP restituisce JSON|PHP restituisce JSON]]
	- [[#Slide 37 – Status code e gestione degli errori|Status code e gestione degli errori]]
	- [[#Slide 39 -> 40 – JavaScript interroga PHP|JavaScript interroga PHP]]
	- [[#Slide 41 – Prima domanda|Prima domanda]]
4. **PHP e database** (slide 42–58)
	- [[#Slide 42 -> 43 – Dall'array associativo al DB|Dall'array associativo al DB]]
	- [[#Slide 44 – PHP e MySQL|PHP e MySQL]]
	- [[#Slide 46 – Eseguire una query e recuperare i risultati|Eseguire una query e recuperare i risultati]]
	- [[#Slide 48 – Prepared statement|Prepared statement]]
	- [[#Slide 50 – SQL injection|SQL injection]]
	- [[#Slide 53 -> 54 – Dalla query SQL alla risposta JSON|Dalla query SQL alla risposta JSON]]
	- [[#Slide 57 – Ricapitolando …|Ricapitolando …]]
	- [[#Slide 58 – Seconda domanda|Seconda domanda]]
5. **Cookie, sessioni e autenticazione** (slide 59–80)
	- [[#Slide 59 -> 60 – Come riconosciamo un utente?|Come riconosciamo un utente?]]
	- [[#Slide 61 – Cookie: informazioni nel browser|Cookie: informazioni nel browser]]
	- [[#Slide 63 – Cookie: informazioni nel browser|Cookie: informazioni nel browser]]
	- [[#Slide 64 -> 65 – Cookie Law|Cookie Law]]
	- [[#Slide 66 -> 67 – Session ID e sessione server-side|Session ID e sessione server-side]]
	- [[#Slide 68 – Come PHP gestisce una sessione|Come PHP gestisce una sessione]]
	- [[#Slide 70 -> 71 – Dalle credenziali alla sessione autenticata|Dalle credenziali alla sessione autenticata]]
	- [[#Slide 72 – Password hashing|Password hashing]]
	- [[#Slide 75 – Logout e invalidazione sessione|Logout e invalidazione sessione]]
	- [[#Slide 77 – Proteggere i cookie di sessione|Proteggere i cookie di sessione]]
	- [[#Slide 80 – Terza domanda|Terza domanda]]
6. **Sicurezza: CSRF e JWT** (slide 81–86)
	- [[#Slide 81 – CSRF: quando una richiesta sfrutta una sessione autenticata|CSRF: quando una richiesta sfrutta una sessione autenticata]]
	- [[#Slide 83 -> 84 – Come prevenire gli attacchi CSRF?|Come prevenire gli attacchi CSRF?]]
	- [[#Slide 85 -> 86 – JWT e sessioni server-side|JWT e sessioni server-side]]
7. **Il caso PHP2Shell** (slide 87–102)
	- [[#Slide 87 – PHP2Shell: vulnerabilità nel runtime|PHP2Shell: vulnerabilità nel runtime]]
	- [[#Slide 88 – PHP2Shell: cosa è successo?|PHP2Shell: cosa è successo?]]
	- [[#Slide 89 – Dov'è la vulnerabilità?|Dov'è la vulnerabilità?]]
	- [[#Slide 90 -> 91 – Da dove derivano le vulnerabilità|Da dove derivano le vulnerabilità]]
	- [[#Slide 92 -> 93 – Perché l'impatto è stato così esteso?|Perché l'impatto è stato così esteso?]]
	- [[#Slide 94 – A due settimane dall'evento|A due settimane dall'evento]]
	- [[#Slide 95 -> 96 – Il ruolo dell'AI in PHP2Shell|Il ruolo dell'AI in PHP2Shell]]
	- [[#Slide 97 – Come proteggere un'applicazione PHP|Come proteggere un'applicazione PHP]]
	- [[#Slide 98 – Versioni corrette il 21 ottobre 2026|Versioni corrette il 21 ottobre 2026]]
	- [[#Slide 99 -> 100 – Cosa ci insegna PHP2Shell?|Cosa ci insegna PHP2Shell?]]
	- [[#Slide 101 – PHP2Shell: riferimenti e fonti|PHP2Shell: riferimenti e fonti]]

---
## Slide 1 – PHP

![[TW13-s001-1.png|200]]

---
## Slide 2 – Argomenti

- PHP:
	- PHP nel Web moderno
	- PHP sintassi e concetti principali
	- PHP, HTTP e API REST
	- PHP e database
	- Cookie, sessioni e autenticazione
	- Sicurezza: CSRF e JWT
	- Il caso PHP2Shell
---
## Slide 3 – PHP: il ruolo del backend

- **PHP** (PHP: Hypertext Preprocessor) è un linguaggio di scripting general-purpose, per lo sviluppo Web lato server
	- Il codice PHP viene eseguito sul server, non nel browser
	- Può elaborare richieste HTTP, accedere a database e gestire la logica applicativa
	- Produce dati o contenuti che vengono restituiti al client attraverso una risposta HTTP
	- Il browser riceve il risultato dell'elaborazione, non il codice PHP che lo ha generato

![[TW13-s003-1.png|600]]

- **Browser** (HTML · CSS · JavaScript) → **Richiesta HTTP** (es. `GET /products.php`) → **Server** (PHP · Logica applicativa)
- **Server** → **Risposta HTTP** (es. HTML oppure JSON) → **Browser**

>> "PHP: Hypertext Preprocessor" è un acronimo ricorsivo: la sigla compare dentro sé stessa. In origine (1994-95) PHP stava per "Personal Home Page".

---
## Slide 4 – PHP è ancora così diffuso?

- **~69%** dei siti Web con linguaggio server-side identificabile utilizza PHP
- PHP continua a essere alla base di numerose piattaforme e applicazioni Web, tra cui WordPress, Wikipedia e servizi sviluppati con Laravel
- Una diffusione così ampia rende particolarmente rilevanti le vulnerabilità che interessano il runtime

![[TW13-s004-1.png|243]]

---
## Slide 5 – PHP è morto. Lunga vita a PHP!

- PHP è stato dichiarato «morto» molte volte, mentre nuovi linguaggi e framework guadagnavano popolarità
- Dopo oltre trent'anni, continua a essere ampiamente utilizzato: Perché? Software esistente, ecosistemi consolidati, compatibilità e costi di migrazione

![[TW13-s005-1.png|548]]

---
## Slide 6 – Dal browser al server: il ciclo di una richiesta

- Quando un client richiede una risorsa gestita da PHP:
	1. Il browser invia una richiesta HTTP al server Web
	2. Il **server Web**(apache) inoltra la richiesta al runtime PHP, secondo la propria configurazione
	3. PHP esegue il codice applicativo ed eventualmente accede a risorse esterne, come un database
	4. Il risultato viene restituito al client in una risposta HTTP
- Il codice PHP viene eseguito lato server; il client riceve soltanto la risposta

![[TW13-s006-1.png|650]]

>> "Secondo la propria configurazione": in XAMPP Apache esegue PHP tramite un modulo caricato nel server stesso (`mod_php`); in altre configurazioni (es. Nginx) il server Web inoltra la richiesta a un processo separato, PHP-FPM, tramite il protocollo FastCGI. Di norma sono i file con estensione `.php` a essere passati al runtime PHP.

---
## Slide 7 – PHP genera risposte

- Tradizionalmente PHP è stato utilizzato per generare dinamicamente pagine HTML
- Oggi può essere utilizzato anche per implementare il backend di applicazioni Web che comunicano con il server attraverso API
- Lo stesso linguaggio può quindi produrre:
	- HTML, per generare pagine Web sul server
	- JSON, per fornire dati a un frontend JavaScript
	- Altri tipi di risposta, a seconda delle esigenze dell'applicazione

---
## Slide 8 – Esempio

**Risposta HTML**

PHP genera markup

```php
<?php
echo "<h1>Ciao!</h1>";
```

Risultato nel browser

Ciao!

**Risposta JSON**

PHP genera dati

```php
<?php
header("Content-Type: application/json");
echo json_encode(["msg" => "Ciao!"]);
```

Corpo nella risposta

```json
{"msg":"Ciao!"}
```

***Abbiamo visto come*** `fetch()` ***in JS consenta di inviare richieste HTTP e ricevere risposte asincrone***

***Ora vedremo come costruire il componente server-side che produce quelle risposte***

>per continuare a validare la pagina devo validare il codice del validator W3C che prendi in input un file HTML, che otteniamo nell'output dell'interprete.

>> Se non si chiama `header()`, PHP invia di default `Content-Type: text/html; charset=UTF-8`: per questo il primo esempio viene interpretato come HTML e il browser mostra il titolo "Ciao!".
>> `header()` deve essere chiamata **prima** di produrre qualsiasi output (anche uno spazio o una riga vuota fuori da `<?php`): gli header della risposta vengono inviati insieme al primo byte del corpo, dopo non si possono più modificare (avviso "headers already sent").
>> Lato JS, `await response.json()` sul secondo endpoint restituisce l'oggetto `{ msg: "Ciao!" }`.

---
## Slide 9 – Architettura

- Useremo PHP per implementare il backend di un'applicazione Web che
	- Riceve ed elabora richieste HTTP
	- Espone endpoint per l'accesso ai dati
	- Interagisce con un database MySQL
	- Gestisce utenti, autenticazione e sessioni
	- Restituisce risposte che il frontend JavaScript può elaborare
- Il frontend gestisce la presentazione e le interazioni
- Il backend applica la logica dell'applicazione, controlla gli accessi e gestisce i dati

![[TW13-s009-1.png|650]]

- **Frontend** (HTML · CSS · JavaScript · Fetch): Interfaccia utente; Gestione delle interazioni; Richieste HTTP con Fetch; Elaborazione delle risposte JSON
- Frontend → Backend: **HTTP / JSON** (es. `GET /api/products` (JSON)); Backend → Frontend: **JSON** (Dati, es. prodotti)
- **Backend PHP** (API): Logica applicativa; Autenticazione (es. verifica token, controllo permessi); API (Endpoint che restituiscono JSON)
- Backend ↔ **Database MySQL**: **SQL**; il database contiene Dati applicativi, Utenti, Prodotti, …

---
## Slide 10 – Un primo script: esecuzione server-side

- Il codice PHP viene eseguito sul server e può essere incorporato in un documento HTML utilizzando i delimitatori `<?php` e `?>`
	- Solo il codice compreso tra i delimitatori viene interpretato come PHP
	- L'istruzione `echo` permette di produrre contenuto nella risposta HTTP
	- Il browser riceve l'output dell'esecuzione, non il codice sorgente PHP

**PHP**

```php
<!DOCTYPE html>
<html lang="it">
<body>
    <h1>Benvenuti!</h1>
    <p>
        <?php
          echo "Pagina generata
           dal server";
        ?>
    </p>
</body>
</html>
```

***Codice HTML+PHP lato server; l'esecuzione PHP produce il contenuto della risposta (solo HTML), che viene inviata al client e gestita dal browser***

**HTML**

```html
<!DOCTYPE html>
<html lang="it">
<body>
    <h1>Benvenuti!</h1>
    <p>
        Pagina generata
        dal server
    </p>
</body>
</html>
```

>> Tutto ciò che sta fuori dai delimitatori viene copiato così com'è nella risposta. Con "Visualizza sorgente" nel browser si vede solo l'HTML di destra.
>> Perché il codice venga eseguito il file deve avere estensione `.php` ed essere richiesto attraverso il server Web (es. `http://localhost/...`): aprendolo direttamente dal disco (`file://`) il browser riceverebbe il sorgente, non il risultato.

---
## Slide 11 – Variabili, tipi e stringhe

- PHP utilizza una sintassi simile a quella dei linguaggi della famiglia C, ma presenta alcune caratteristiche specifiche:
	- Le variabili sono identificate dal prefisso **`$`**
	- PHP è un linguaggio a ***tipizzazione dinamica***: il tipo è associato al valore, non dichiarato obbligatoriamente per la variabile
	- Le stringhe possono essere delimitate da apici singoli o doppi
	- L'operatore **`.`** concatena le stringhe

---
## Slide 12 – Esempio

**PHP**

```php
<?php
$nome = "Alice";
$eta = 22;

echo "Ciao $nome!";             // Ciao Alice!
echo 'Ciao $nome!';             // Ciao $nome!
echo 'Ciao ' . $nome . '!';     // Ciao Alice!

$messaggio = "Età: " . $eta;
echo $messaggio;      // Età: 22
?>
```

- ***In PHP, le stringhe delimitate da doppi apici supportano l'interpolazione delle variabili; quelle delimitate da apici singoli no***
- ***PHP è dinamicamente tipizzato, ma supporta dichiarazioni esplicite di tipo per parametri, valori restituiti e proprietà***
- ***Con*** `declare(strict_types=1)` ***si limitano le conversioni implicite dei tipi scalari nelle chiamate alle funzioni***
- ***PHP è sintatticamente familiare, ma non dobbiamo presumere che le sue regole di conversione e confronto coincidano con quelle di JavaScript***

>> Output verificati con PHP 8.3: corrispondono ai commenti. Nota che gli `echo` non vanno a capo: eseguito così, lo script stampa tutto su una riga (`Ciao Alice!Ciao $nome!Ciao Alice!Età: 22`).
>> Nella concatenazione `"Età: " . $eta` l'intero `22` viene convertito automaticamente in stringa.
>> `declare(strict_types=1)` deve essere la **prima istruzione** del file e vale per le chiamate fatte da quel file: con esso `f("100")` verso un parametro `int`/`float` lancia `TypeError`, mentre senza viene convertito. Unica eccezione ammessa: un `int` passato a un parametro `float`.
>> Esempi di differenze nei confronti: in PHP `"1e3" == "1000"` è `true` (due stringhe numeriche vengono confrontate come numeri); in PHP 8 `"abc" == 0` è `false` (in PHP 7 era `true`). Per evitare sorprese si usa `===`, come in JS.

---
## Slide 13 – Variabili, tipi e stringhe: PHP vs JS

**PHP**

```php
<?php
$nome = "Alice";
$eta = 22;

echo "Ciao $nome!";             // Ciao Alice!
echo 'Ciao $nome!';             // Ciao $nome!
echo 'Ciao ' . $nome . '!';     // Ciao Alice!

$messaggio = "Età: " . $eta;
echo $messaggio;      // Età: 22
?>
```

| Concetto | JavaScript | PHP |
|---|---|---|
| Variabile | `let nome = "Alice";` | `$nome = "Alice";` |
| Concatenazione | `"Ciao " + nome` | `"Ciao " . $nome` |
| Interpolazione | `` `Ciao ${nome}` `` | `"Ciao $nome"` |
| Uguaglianza stretta | `===` | `===` |

>> Tranello: in PHP `+` è **solo** somma aritmetica. `"Ciao " + $nome` non concatena: in PHP 8 lancia `TypeError: Unsupported operand types: string + string`.
>> Per interpolare elementi di array o espressioni si usano le graffe: `"Prodotto: {$prodotto["name"]}"`.

---
## Slide 14 – Array indicizzati e associativi

- In PHP gli array sono strutture ordinate che associano chiavi a valori
- Le chiavi possono essere interi o stringhe
- Gli array possono quindi essere utilizzati come:
	- ***Array indicizzati***, per rappresentare sequenze di valori
	- ***Array associativi***, per rappresentare dati identificati da una chiave
- La sintassi moderna utilizza le parentesi quadre **`[ ]`**

>> La sintassi "vecchia" è `array("rosso", "verde")`, equivalente a `["rosso", "verde"]`.
>> In PHP esiste un solo tipo `array`: un array indicizzato è semplicemente un array con chiavi intere 0, 1, 2, … (a differenza di JS, dove array e oggetti sono tipi distinti).

---
## Slide 15 – Esempio

**PHP**

```php
<?php
// Array indicizzato
$colori = ["rosso", "verde", "blu"];
echo $colori[0];  // rosso
// Array associativo
$prodotto = [
    "id" => 1,
    "name" => "Notebook",
    "price_cents" => 89900
];
echo $prodotto["name"];  // Notebook
?>
```

![[TW13-s015-1.png|400]]

>> Output verificati: `rosso` e `Notebook`.
>> `echo $colori;` (l'array intero) non stampa il contenuto: produce `Array` con un warning "Array to string conversion". Per il debug si usano `print_r($colori)` o `var_dump($colori)`.
>> Il prezzo è in centesimi (`price_cents`) come intero: si evitano gli errori di arrotondamento dei `float` (es. `0.1 + 0.2 == 0.3` è `false`).

---
## Slide 16 – Array associativi

- Gli array associativi ricorreranno spesso …

**PHP**

```php
echo json_encode($prodotto);
```

***produce***

**JSON**

```json
{"id":1,"name":"Notebook","price_cents":89900}
```

- `json_encode()` serializza un valore PHP in JSON
- Un array associativo con chiavi stringa, come quello dell'esempio, viene rappresentato come oggetto JSON
- Gli array associativi sono uno strumento fondamentale per rappresentare i dati elaborati dal backend e prepararli per lo scambio con il frontend

>> Output verificato. Un array con chiavi 0, 1, 2, … consecutive diventa invece un **array** JSON: `json_encode($colori)` → `["rosso","verde","blu"]`. Se le chiavi intere non partono da 0 o hanno buchi, diventa un oggetto: `json_encode([1 => "a", 2 => "b"])` → `{"1":"a","2":"b"}`.
>> Tranello: un array vuoto `[]` diventa sempre `[]`, anche se "concettualmente" era un oggetto.

---
## Slide 17 – Funzioni, inclusione di file e organizzazione del codice

- Come negli altri linguaggi di programmazione, le funzioni permettono di organizzare e riutilizzare il codice
- PHP consente di suddividere un'applicazione in più file:
	- **`function`** definisce una funzione, eventualmente con parametri e tipo restituito
	- **`require`** include un file necessario all'esecuzione
	- **`include`** include un file, ma in caso di errore non interrompe necessariamente l'esecuzione
	- **`require_once`** evita che lo stesso file venga incluso più volte

>> Se il file manca, `require` produce un errore fatale e lo script si ferma; `include` emette solo un warning e prosegue. Esiste anche `include_once`.
>> `require_once` è utile soprattutto per i file che definiscono funzioni o classi: includerli due volte causerebbe l'errore fatale "Cannot redeclare function".

---
## Slide 18 -> 19 – Esempio

**functions.php**

```php
<?php
function calcolaSconto(
    float $prezzo,
    float $percentuale
): float {
    return $prezzo * (1 - $percentuale / 100);
}
```

**products.php**

```php
<?php
require_once "functions.php";
$prezzoFinale = calcolaSconto(100, 20);
echo $prezzoFinale; // 80
```

***Nelle applicazioni reali è opportuno separare la gestione delle richieste HTTP dalla logica applicativa e dall'accesso al database***

>> Output verificato: `80`. Il risultato è il `float` `80.0`, ma `echo` lo stampa come `80`.
>> `100` e `20` sono interi passati a parametri `float`: la conversione `int` → `float` è ammessa anche con `strict_types=1`.
>> In un file che contiene solo PHP (come `functions.php`) è buona pratica **omettere** il `?>` finale: eventuali spazi o righe vuote dopo il tag verrebbero inviati come output e impedirebbero di usare `header()` in seguito.

![[TW13-s019-1.png|600]]

---
## Slide 20 – Le superglobali: PHP e le richieste HTTP

- PHP mette a disposizione alcune variabili predefinite, chiamate ***superglobali***, accessibili da qualsiasi scope
- Consentono di recuperare informazioni sulla richiesta HTTP e sul contesto di esecuzione

| Superglobale | Contenuto |
|---|---|
| `$_GET` | Parametri della query string |
| `$_POST` | Dati di form inviati con POST |
| `$_SERVER` | Informazioni sulla richiesta e sull'ambiente server |
| `$_COOKIE` | Cookie ricevuti dal browser |
| `$_SESSION` | Dati della sessione server-side, dopo la sua inizializzazione |

>> "Accessibili da qualsiasi scope" significa che si possono usare anche dentro una funzione senza dichiararle `global`, a differenza delle normali variabili globali.
>> Altre superglobali: `$_FILES` (file caricati), `$_REQUEST` (unione di GET, POST e cookie, sconsigliata perché non si sa da dove arriva il dato), `$_ENV`, `$GLOBALS`.
>> `$_SESSION` è disponibile solo dopo `session_start()`: è questa l'"inizializzazione" della tabella.

---
## Slide 21 -> 22 – Esempio

**saluto.php**

```php
<?php
$nome = $_GET["nome"] ?? "visitatore";
echo "Ciao " . htmlspecialchars(
    $nome,
    ENT_QUOTES,
    "UTF-8"
);
```

**Richiesta HTTP**

```http
GET
/saluto.php?nome=Alice
HTTP/1.1
Host: localhost
```

**Risposta (corpo)**

```
Ciao Alice
```

- ***L'operatore*** `??` ***consente di utilizzare un valore predefinito quando la chiave non è presente o vale*** `null`
- ***I parametri ricevuti dal client non devono essere considerati affidabili***
- `htmlspecialchars()` ***esegue l'escaping dei caratteri speciali per l'inserimento in HTML, contribuendo a prevenire vulnerabilità XSS in quel contesto***
- `$_POST` ***non contiene automaticamente qualsiasi body di una richiesta POST: per esempio, un body JSON viene normalmente letto attraverso*** `php://input` ***e decodificato con*** `json_decode()`

>> La richiesta è spezzata su più righe solo per motivi di spazio: la request line reale è `GET /saluto.php?nome=Alice HTTP/1.1`.
>> Verificato: senza parametro la risposta è `Ciao visitatore`; con `?nome=<b>Alice</b>'` è `Ciao &lt;b&gt;Alice&lt;/b&gt;&#039;`, che il browser mostra come testo invece di interpretarlo come HTML. `ENT_QUOTES` fa convertire anche l'apice singolo (necessario se il valore finisce in un attributo delimitato da `'`).
>> `??` non genera warning se la chiave manca, a differenza di `$_GET["nome"]` letto direttamente ("Undefined array key").
>> "Non affidabili" anche nel tipo: con `?nome[]=x` `$_GET["nome"]` è un array e `htmlspecialchars()` lancia `TypeError`. Conviene verificare il tipo (es. `is_string()`).

![[TW13-s022-1.png|650]]

- **Browser** (client) – `http://localhost/saluto.php?nome=Alice`
- **HTTP GET** – `/saluto.php?nome=Alice`, Query string: `nome=Alice`
- **Server PHP — saluto.php** (esecuzione server-side) – Elaborazione del parametro: `$_GET["nome"]` → `"Alice"`
- **Risposta HTTP** – HTTP 200 OK · HTML (testo): `Ciao Alice`

>> Nello schema il codice è abbreviato e contiene un refuso: si legge `htmlspecialchrs($nome)`, ma la funzione è `htmlspecialchars()`. Senza gli ultimi due argomenti, da PHP 8.1 i default sono comunque `ENT_QUOTES | ENT_SUBSTITUTE | ENT_HTML401` e `UTF-8`.

---
## Slide 23 – Richiesta HTTP vista dal backend

- Quando una richiesta HTTP raggiunge il server, PHP può accedere alle informazioni necessarie per elaborarla:
	- ***Metodo HTTP***: indica l'operazione richiesta (`GET`, `POST`, ecc.)
	- ***URL e query string***: identificano la risorsa e gli eventuali parametri
	- ***Header***: trasportano metadati sulla richiesta
	- ***Body***: può contenere dati inviati dal client
- PHP rende disponibili queste informazioni attraverso variabili superglobali e altri meccanismi di accesso al corpo della richiesta

---
## Slide 24 – Esempio

**Richiesta HTTP**

```http
GET /api/products.php?category=tech HTTP/1.1
Host: localhost
Accept: application/json
```

***PHP non riceve genericamente una stringa contenente l'intera richiesta HTTP: il server Web e il runtime espongono al codice applicativo le informazioni già elaborate***

**PHP**

```php
<?php
$method = $_SERVER["REQUEST_METHOD"];
$category = $_GET["category"] ?? null;
```

![[TW13-s024-1.png|699]]

>> Qui `$method` vale `"GET"` e `$category` vale `"tech"`.
>> Incoerenza nello schema: la richiesta è per `/api/products.php`, ma sotto Apache compare `saluto.php` (residuo dell'esempio precedente).
>> I singoli header si trovano anche in `$_SERVER`, con il prefisso `HTTP_`, in maiuscolo e con `_` al posto di `-`: `Accept` → `$_SERVER["HTTP_ACCEPT"]`. `getallheaders()` è disponibile con Apache e, da PHP 7.3, anche con PHP-FPM.

---
## Slide 25 – GET, POST e dati della richiesta

- PHP offre modalità differenti per accedere ai dati inviati dal client, a seconda di come sono trasmessi.

| Dati ricevuti | Accesso in PHP |
|---|---|
| Parametri nella query string | `$_GET` |
| Dati di un form con `application/x-www-form-urlencoded` | `$_POST` |
| Dati di un form con `multipart/form-data` | `$_POST` e `$_FILES` |
| Body JSON | `php://input` e `json_decode()` |

- ***Attenzione!*** `$_GET` e `$_POST` non rappresentano genericamente tutti i dati delle richieste con quei metodi HTTP

>> I nomi ingannano: `$_GET` contiene i parametri della **query string** qualunque sia il metodo (anche in una `POST /x.php?id=3`, `id` finisce in `$_GET`). `$_POST` viene riempito **solo** se il body è `application/x-www-form-urlencoded` o `multipart/form-data` (e il metodo è POST); un body JSON lascia `$_POST` vuoto.
>> In `multipart/form-data` i campi di testo vanno in `$_POST`, i file caricati in `$_FILES` (nome, tipo, dimensione, percorso temporaneo).

---
## Slide 26 – Esempio: query string

**Richiesta HTTP**

```http
GET /api/products.php?id=12 HTTP/1.1
```

**PHP**

```php
$id = $_GET["id"] ?? null;
```

***PHP recupera il valore del parametro id dalla query string attraverso*** `$_GET`***; se il parametro non è presente, l'operatore*** `??` ***assegna*** `null` ***alla variabile*** `$id`

>> `$id` vale la **stringa** `"12"`, non l'intero 12: i parametri della query string arrivano sempre come stringhe (o array). Per ottenere un intero validato: `filter_var($id, FILTER_VALIDATE_INT)`, che restituisce `false` se il valore non è un intero valido.

---
## Slide 27 – Esempio: body JSON

**Richiesta HTTP**

```http
POST /api/products.php HTTP/1.1
Content-Type: application/json

{"name":"Notebook","price_cents":89900}
```

**PHP**

```php
$data = json_decode(
    file_get_contents("php://input"),
    true
);

$name = $data["name"] ?? null;
```

***PHP legge il body della richiesta attraverso*** `php://input` ***e converte il JSON ricevuto in un array associativo tramite*** `json_decode()`***; successivamente recupera il valore di*** `name`***, oppure*** `null` ***se assente***

>> Il secondo argomento `true` chiede un array associativo; senza, `json_decode()` restituisce un oggetto `stdClass` e si accede con `$data->name`.
>> Verificato: qui `$name` vale `"Notebook"`. Se il body non è JSON valido, `json_decode()` restituisce `null` e `$data["name"] ?? null` dà comunque `null` senza errori; per distinguere i due casi si può usare `json_decode(..., true, 512, JSON_THROW_ON_ERROR)`, che lancia un'eccezione.

---
## Slide 28 – Dal form HTML alla Fetch API

- Un'applicazione Web può inviare dati al backend in modi differenti:
	- ***Form HTML tradizionale***: il browser invia la richiesta e normalmente naviga verso il documento restituito dal server
	- ***Fetch API***: JavaScript invia una richiesta HTTP e gestisce la risposta senza richiedere una navigazione della pagina. ***Fetch non richiede un backend scritto in JavaScript***: il server può essere implementato in PHP, Java, Python o altri linguaggi
- Entrambi utilizzano HTTP e possono comunicare con lo stesso backend PHP

>> Lato PHP cambia solo il modo di leggere i dati, in base al `Content-Type` (slide 25): un form `method="post"` arriva in `$_POST`; `fetch` con `body: JSON.stringify(...)` e header `Content-Type: application/json` va letto da `php://input`; `fetch` con `body: new FormData(form)` invia `multipart/form-data` e quindi riempie di nuovo `$_POST`.
---
## Slide 29 -> 30 – Esempio

***Form HTML***

**HTML**
```html
<form action="search.php"
      method="get">
  <input name="category">
  <button>Cerca</button>
</form>
```

***Invio gestito dal browser, con navigazione predefinita***

***Fetch API***

**JS**
```js
const response = await fetch(
"/api/products.php?category=tech"
);
const products = await response.json();
```

***Invio e gestione della risposta tramite JavaScript***

![[TW13-s030-1.png|700]]

>> In entrambi i casi parte una richiesta `GET` con la stessa query string (`?category=tech`): con il form è il browser a costruirla dal `name` dell'`<input>` e a sostituire l'intera pagina con l'HTML ricevuto; con `fetch()` la pagina resta quella corrente e JavaScript decide cosa fare dei dati (tipicamente JSON) aggiornando il DOM.
>> Un `<button>` dentro un `<form>` senza `type` è di tipo `submit`: per questo basta a inviare il form.

---
## Slide 31 -> 32 – Che cos'è una API REST?

- Un'API (Application Programming Interface) definisce come un componente software può interagire con un altro
- ***REST (Representational State Transfer)*** è uno stile architetturale per sistemi distribuiti, basato su alcuni principi:
	- Le ***risorse*** sono identificate tramite URI
	- Il client interagisce con le risorse attraverso rappresentazioni, ad esempio JSON
	- Le richieste sono ***stateless***: ogni richiesta contiene le informazioni necessarie alla sua elaborazione
	- Le interazioni utilizzano un'interfaccia uniforme, sfruttando la semantica dei metodi HTTP
- Le API REST possono essere implementate in PHP senza utilizzare necessariamente un framework

![[TW13-s032-1.png|500]]

>> La risorsa (il prodotto 12 nel DB) e la sua rappresentazione (il JSON che viaggia nella risposta) sono cose distinte: la stessa risorsa potrebbe essere restituita anche come XML o HTML.
>> *Stateless* significa che il server non deve ricordare nulla delle richieste precedenti di quel client per capire quella attuale: ad esempio, le credenziali o il token di autenticazione vanno inviati a ogni richiesta.

---
## Slide 33 – Endpoint, risorse e metodi HTTP

- Le API orientate alle risorse utilizzano i metodi HTTP per esprimere le operazioni richieste

| Metodo | Endpoint | Operazione |
|---|---|---|
| `GET` | `/api/products` | Recupera i prodotti |
| `GET` | `/api/products/12` | Recupera il prodotto 12 |
| `POST` | `/api/products` | Crea un prodotto |
| `PUT` | `/api/products/12` | Sostituisce il prodotto 12 |
| `DELETE` | `/api/products/12` | Elimina il prodotto 12 |

- L'URI identifica la risorsa; il metodo HTTP indica la semantica dell'operazione
	- GET è pensato per recuperare informazioni, senza richiedere modifiche dello stato applicativo
	- PUT e DELETE hanno semantica idempotente; POST non è necessariamente idempotente

>> *Idempotente* = ripetere la stessa richiesta N volte lascia il server nello stesso stato in cui lo lascia una sola richiesta: due `DELETE /api/products/12` eliminano comunque solo il prodotto 12, due `PUT` con lo stesso corpo producono lo stesso prodotto; due `POST /api/products` invece creano di solito due prodotti. `GET` è sia *sicuro* (non modifica lo stato) sia idempotente.
>> Con PHP "puro" un URI come `/api/products/12` non corrisponde a un file: serve una riscrittura degli URL (es. `mod_rewrite` di Apache) verso un unico script, oppure si usa la forma `/api/products.php?id=12`, come negli esempi successivi.

---
## Slide 34 – PHP restituisce JSON

- PHP può produrre risposte JSON utilizzando `json_encode()`
- Per costruire correttamente una risposta HTTP occorre:
	- Impostare il tipo di contenuto con l'header `Content-Type`
	- Convertire i dati PHP in JSON
	- Restituire uno status code appropriato

>> `header()` va chiamata prima di qualsiasi output (anche uno spazio prima di `<?php`), altrimenti gli header sono già stati inviati e PHP emette il warning "headers already sent". Se non si imposta `Content-Type`, PHP usa di default `text/html`.

---
## Slide 35 -> 36 – Esempio

-***array associativi PHP → JSON***:

**api/products.php**
```php
<?php
header("Content-Type: application/json; charset=utf-8");
$products = [
    ["id" => 1, "name" => "Notebook", "price_cents" => 89900],
    ["id" => 2, "name" => "Monitor", "price_cents" => 24900]
];
echo json_encode($products, JSON_THROW_ON_ERROR);
```

**Risposta HTTP**
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
[
  {"id":1,"name":"Notebook","price_cents":89900},
  {"id":2,"name":"Monitor","price_cents":24900}
]
```

`json_encode()` ***serializza i dati***

`response.json()` ***interpreta il corpo della risposta ricevuta dal browser***

![[TW13-s036-1.png|550]]

>> Output reale (verificato con PHP 8.3): `json_encode()` produce una sola riga senza spazi, `[{"id":1,"name":"Notebook","price_cents":89900},{"id":2,"name":"Monitor","price_cents":24900}]`; l'andata a capo della slide serve solo alla leggibilità (per ottenerla davvero c'è il flag `JSON_PRETTY_PRINT`). Inoltre in una risposta HTTP reale fra header e corpo c'è sempre una riga vuota.
>> Regola di conversione: un array PHP con chiavi 0, 1, 2, … consecutive diventa un array JSON `[...]`; un array associativo diventa un oggetto JSON `{...}`.
>> `JSON_THROW_ON_ERROR`: in caso di errore (es. stringa non UTF-8 valida) `json_encode()` lancia una `JsonException` invece di restituire silenziosamente `false`.
>> Il prezzo è salvato in centesimi interi (`price_cents`) per evitare gli errori di arrotondamento dei numeri in virgola mobile.

---
## Slide 37 – Status code e gestione degli errori

- Un endpoint non deve soltanto restituire dati: deve anche comunicare l'esito dell'operazione

| Status code | Significato |
|---|---|
| `200 OK` | Operazione completata |
| `201 Created` | Risorsa creata |
| `400 Bad Request` | Richiesta non valida |
| `401 Unauthorized` | Autenticazione necessaria o non valida |
| `403 Forbidden` | Accesso non consentito |
| `404 Not Found` | Risorsa non trovata |
| `500 Internal Server Error` | Errore interno del server |

>> Classi: 2xx successo, 4xx errore del client, 5xx errore del server.
>> Tranello 401 vs 403: nonostante il nome, `401 Unauthorized` significa "non autenticato" (non so chi sei, o le credenziali non sono valide); `403 Forbidden` significa "autenticato ma senza permesso" (so chi sei, ma non puoi farlo).

---
## Slide 38 – Esempio

**PHP**
```php
<?php
header("Content-Type: application/json; charset=utf-8");
$id = filter_input(INPUT_GET, "id", FILTER_VALIDATE_INT);
if ($id === null || $id === false || $id <= 0) {
    http_response_code(400);

    echo json_encode([
        "error" => "ID prodotto non valido"
    ]);
    exit;
}
```

`http_response_code()` ***permette a PHP di impostare lo status code della risposta***

***Una risposta HTTP con status 404 o 500 non provoca automaticamente il rigetto della Promise restituita da*** `fetch()`***, per questo JavaScript deve verificare*** `response.ok` ***quando vuole distinguere le risposte di successo dagli errori HTTP***

>> I tre controlli hanno ruoli diversi (verificato): `filter_input()` restituisce `null` se il parametro `id` manca, `false` se c'è ma non è un intero valido (es. `"abc"` o `"0 OR 1=1"`), altrimenti l'intero; `$id <= 0` scarta gli id non positivi. Per `?id=12` si ottiene `int(12)`.
>> `exit` interrompe lo script dopo aver inviato l'errore; senza, il codice successivo continuerebbe a cercare il prodotto. In un endpoint completo seguirebbe la query e, se il prodotto non esiste, un `404`.
>> `response.ok` è `true` per gli status 200–299. La Promise di `fetch()` viene rigettata solo per errori di rete (server irraggiungibile, CORS, richiesta annullata).

---
## Slide 39 -> 40 – JavaScript interroga PHP

**backend `api/products.php`**
```php
<?php
header("Content-Type: application/json; charset=utf-8");
$products = [
    ["id" => 1, "name" => "Notebook", "price_cents" => 89900],
    ["id" => 2, "name" => "Monitor", "price_cents" => 24900]
]; echo json_encode($products, JSON_THROW_ON_ERROR);
```

***Un frontend JavaScript può recuperare dati da un endpoint PHP attraverso Fetch e utilizzarli per aggiornare il DOM***

**frontend `index.html`**
```html
<ul id="products"></ul>
<script>
async function loadProducts() {
    const response = await fetch("/api/products.php");
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    const products = await response.json();
    const list = document.querySelector("#products");
    for (const product of products) {
        const item = document.createElement("li");
        item.textContent = product.name;
        list.appendChild(item);
    }
}
loadProducts().catch(console.error);
</script>
```

![[TW13-s040-1.png|700]]

>> Il risultato è una lista `<ul>` con due `<li>`: "Notebook" e "Monitor".
>> `"/api/products.php"` (slide 39) è un percorso assoluto rispetto alla radice del sito; `"./api/products.php"` (schema) è relativo all'URL della pagina corrente. Coincidono solo se `index.html` sta nella radice.
>> Usare `textContent` (e non `innerHTML`) fa sì che i dati ricevuti vengano inseriti come testo e non interpretati come HTML: è una protezione contro l'XSS.
>> `loadProducts()` è `async` e quindi restituisce una Promise: `.catch(console.error)` intercetta sia gli errori di rete sia l'`Error` lanciato quando `response.ok` è `false`. `showProducts(products)` nello schema è una funzione illustrativa che sostituisce il ciclo `for`.

---
## Slide 41 – Prima domanda

- **DOMANDA 1**: Un frontend JavaScript esegue `fetch("./api/products.php")`. Quale delle seguenti affermazioni è corretta?
	- [ ] Il browser esegue il codice PHP e riceve i risultati
	- [ ] Il server esegue il codice PHP e restituisce una risposta HTTP, che può contenere JSON
	- [ ] La Fetch API richiede che il backend sia implementato in JavaScript
	- [ ] PHP può restituire soltanto pagine HTML

>> Risposta corretta: la seconda. PHP viene eseguito sul server, che restituisce al browser solo la risposta HTTP prodotta (qui JSON con `Content-Type: application/json`): il browser non vede mai il codice PHP.
>> Le altre sono false: il browser non esegue PHP; `fetch()` parla HTTP e non sa in che linguaggio sia scritto il backend; PHP può restituire qualunque contenuto (HTML, JSON, immagini, file…) impostando l'header `Content-Type`.

---
## Slide 42 -> 43 – Dall'array associativo al DB

- Finora il nostro endpoint PHP ha restituito dati definiti direttamente nel codice:

**PHP**
```php
$products = [
    ["id" => 1, "name" => "Notebook", "price_cents" => 89900],
    ["id" => 2, "name" => "Monitor", "price_cents" => 24900]
];
echo json_encode($products);
```

- Questa soluzione è utile per i primi esempi, ma presenta alcuni limiti:
	- I dati sono incorporati nel codice applicativo
	- Ogni modifica richiede un intervento sul codice
	- Non offre una soluzione adeguata per la persistenza e la gestione condivisa dei dati
- Introduciamo un database relazionale, mantenendo invariata l'interfaccia HTTP utilizzata dal frontend

![[TW13-s043-1.png|700]]

- **Prima: dati definiti nel codice PHP** – Frontend JavaScript (Fetch API, `fetch("/api/products.php")`) ⇄ Backend PHP (Array `$products`, `echo json_encode($products);`)
- **Dopo: dati recuperati dal database** – Frontend JavaScript (stessa `fetch`) ⇄ Backend PHP (Query SQL: `$conn->query(...)`, `$result->fetch_all(MYSQLI_ASSOC)`) ⇄ MySQL (Dati persistenti), con SQL in andata e Risultati in ritorno
- In entrambi i casi: richiesta `GET /api/products.php`, risposta `HTTP 200 OK`, `Content-Type: application/json`, `[ { ... }, { ... } ]`

>> Il punto chiave: l'URL dell'endpoint e la struttura del JSON restano identici, quindi il frontend non va modificato. Cambia solo da dove il backend prende i dati.
>> Nello schema la query è scritta `SELECT id, name, price FROM products`, mentre la colonna negli esempi successivi si chiama `price_cents`: è solo una semplificazione grafica.

---
## Slide 44 – PHP e MySQL

- PHP può interagire con un database MySQL/MariaDB attraverso diverse API, tra cui MySQLi e PDO
- Utilizzeremo MySQLi, che consente di:
	- Stabilire una connessione con il DBMS
	- Eseguire istruzioni SQL
	- Recuperare e manipolare i risultati
	- Gestire errori ed eccezioni
- La connessione richiede i parametri necessari per identificare il server, l'utente e il database

>> MySQLi ("MySQL improved") funziona solo con MySQL/MariaDB e offre sia un'interfaccia a oggetti (`$conn->query(...)`, usata nelle slide) sia una procedurale (`mysqli_query($conn, ...)`). PDO è un'interfaccia unica per molti DBMS (MySQL, PostgreSQL, SQLite, …) e supporta anche i placeholder con nome (`:id`).

---
## Slide 45 – Esempio

**db.php**
```php
<?php
$host = "localhost";
$user = "catalog_app";
$password = "password_locale";
$database = "catalogo";
$conn = new mysqli(
    $host,
    $user,
    $password,
    $database
);
$conn->set_charset("utf8mb4");
```

![[TW13-s045-1.png|400]]

`new mysqli()` ***apre una connessione verso il DBMS***

`set_charset("utf8mb4")` ***imposta il set di caratteri utilizzato nella comunicazione***

***La connessione può fallire e il backend deve gestire l'errore senza esporre al client credenziali o dettagli interni del database***

Le credenziali sono illustrative: in un'applicazione reale vanno protette e non pubblicate nel repository.

>> Da PHP 8.1 MySQLi segnala gli errori con eccezioni per impostazione predefinita (verificato su PHP 8.3: con server irraggiungibile `new mysqli(...)` lancia `mysqli_sql_exception: Connection refused`). Per questo si usa un `try/catch`, come nella slide 55: l'errore dettagliato va nei log, al client arriva solo un messaggio generico.
>> In MySQL `utf8` è in realtà un UTF-8 limitato a 3 byte (`utf8mb3`) che non rappresenta, ad esempio, le emoji; `utf8mb4` è l'UTF-8 completo.
>> Un utente dedicato all'applicazione (`catalog_app`) invece di `root` serve ad applicare il principio del minimo privilegio: gli si danno solo i permessi strettamente necessari sul database `catalogo`.

---
## Slide 46 – Eseguire una query e recuperare i risultati

- Una volta stabilita la connessione, PHP può eseguire istruzioni SQL e recuperare i risultati
- Per una query `SELECT`, MySQLi permette di ottenere le righe come array associativi, utilizzando i nomi delle colonne come chiavi

**Tabella `products`**

| id | name | price_cents |
|:---:|---|---:|
| 1 | Notebook | 89900 |
| 2 | Monitor | 24900 |

---
## Slide 47 – Esempio

**PHP**
```php
<?php
require_once "db.php";
$result = $conn->query(
    "SELECT id, name, price_cents FROM products"
);
$products = $result->fetch_all(MYSQLI_ASSOC);
header("Content-Type: application/json; charset=utf-8");
echo json_encode($products, JSON_THROW_ON_ERROR);
```

***SQL recupera i dati; PHP li organizza e li restituisce al client attraverso HTTP***

`fetch_all(MYSQLI_ASSOC)`***: ogni riga del risultato SQL viene rappresentata come un array associativo PHP, utilizzando i nomi delle colonne come chiavi***

**Risultato JSON**
```json
[
  {"id":1,"name":"Notebook","price_cents":89900},
  {"id":2,"name":"Monitor","price_cents":24900}
]
```

***La query mostrata è sicura rispetto alla SQL injection perché è fissa e non incorpora dati provenienti dall'utente***

>> `fetch_all(MYSQLI_ASSOC)` restituisce un array di righe, ciascuna come `["id" => ..., "name" => ..., "price_cents" => ...]`: è la stessa struttura dell'array scritto a mano nelle slide precedenti, per questo il JSON non cambia.
>> Attenzione: con `$conn->query()` (protocollo testuale) MySQLi restituisce di default anche le colonne numeriche come **stringhe**, quindi il JSON reale sarebbe `{"id":"1","name":"Notebook","price_cents":"89900"}`. Per avere numeri si può attivare l'opzione `MYSQLI_OPT_INT_AND_FLOAT_NATIVE` (con `mysqli_init()` + `options()` + `real_connect()`), usare un prepared statement con `get_result()` (che restituisce tipi nativi) oppure convertire i valori con `(int)`. In JavaScript `"89900" / 100` vale comunque `899`, per cui l'esempio della slide 56 funziona lo stesso.

---
## Slide 48 – Prepared statement

- Quando una query SQL utilizza valori provenienti dal client, è fondamentale evitare di inserirli direttamente nella stringa SQL
- I ***prepared statement*** separano la struttura dell'istruzione SQL dai valori dei parametri
- Il procedimento prevede tre passaggi:
	1. Preparazione della query con placeholder
	2. Associazione dei valori ai parametri
	3. Esecuzione della query

---
## Slide 49 – Esempio: recuperare un prodotto

**PHP**
```php
<?php
require_once "db.php";
$id = 12;
$stmt = $conn->prepare(
    "SELECT id, name, price_cents
     FROM products
     WHERE id = ?"
);
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();
$product = $result->fetch_assoc();
```

`?` ***è un placeholder***

`"i"` ***indica che il parametro è di tipo intero; il valore del parametro viene trattato come dato, non come parte della sintassi SQL***

![[TW13-s049-1.png|650]]

1. **Preparazione della query** – Il DBMS analizza la struttura della query e la prepara, lasciando un segnaposto per il parametro.
2. **Binding del parametro** – Il valore del parametro viene associato al segnaposto, specificando il tipo di dato.
3. **Esecuzione** – La query viene eseguita con il parametro associato e il DBMS restituisce il risultato.

>> Tipi di `bind_param()`: `i` intero, `d` double, `s` stringa, `b` blob; serve una lettera per ogni `?`, nell'ordine (es. `"si"` per una stringa e un intero).
>> `bind_param()` lega le variabili *per riferimento*: il valore viene letto al momento di `execute()`, quindi si può cambiare `$id` e rieseguire lo stesso statement.
>> `fetch_assoc()` restituisce una sola riga come array associativo, oppure `null` se non ci sono righe: è il caso in cui l'endpoint dovrebbe rispondere `404`.
>> Il placeholder `?` sostituisce solo **valori**: non si può usare per nomi di tabelle o colonne né per `ASC`/`DESC`, che vanno controllati con una whitelist.

---
## Slide 50 – SQL injection

- Una vulnerabilità di SQL injection si verifica quando dati controllati da un attaccante vengono incorporati in un'istruzione SQL in modo da poterne alterare la struttura o il significato
- Questo può consentire, a seconda dei privilegi del database e della query vulnerabile, di leggere, modificare o cancellare dati non autorizzati

---
## Slide 51 – Esempio vulnerabile

**PHP**
```php
$id = $_GET["id"];
$sql = "SELECT * FROM products WHERE id = $id";
$result = $conn->query($sql);
```

***Se il parametro*** `id` ***contiene "***`0 OR 1=1`***" la query risultante diventa:***

**SQL**
```sql
SELECT * FROM products WHERE id = 0 OR 1=1
```

***La condizione*** `1=1` ***è sempre vera: la query può quindi restituire tutti i prodotti, anziché quello richiesto***

>> Basta una richiesta come `products.php?id=0%20OR%201=1` (`%20` è lo spazio codificato nell'URL). Qui l'effetto è "solo" leggere tutti i prodotti, ma con la stessa tecnica un attaccante può ad esempio aggiungere `UNION SELECT ...` per leggere altre tabelle (utenti, password hash).
>> Le virgolette non salvano: anche con `WHERE name = '$name'` l'attaccante può chiudere l'apice da sé (`' OR '1'='1`).

---
## Slide 52 – Esempio corretto

**PHP**
```php
$stmt = $conn->prepare(
    "SELECT * FROM products WHERE id = ?"
);
$stmt->bind_param("i", $id);
$stmt->execute();
```

***Un valore ricevuto dal client può cambiare il significato della query quando viene concatenato direttamente alla stringa SQL***

***Con un prepared statement, invece, il parametro non viene interpretato come sintassi SQL***

***I prepared statement proteggono i valori parametrizzati, ma non sostituiscono la validazione degli input, i controlli di autorizzazione o l'applicazione del principio del minimo privilegio***

>> Se `$id` è ancora la stringa `"0 OR 1=1"` presa da `$_GET`, con il tipo `"i"` viene convertita nell'intero `0` (come `(int)"0 OR 1=1"`, verificato): la query cerca il prodotto con id 0 e non restituisce nulla. Meglio comunque validare prima l'input con `filter_input(..., FILTER_VALIDATE_INT)` come nella slide 38, così da rispondere `400`.

---
## Slide 53 -> 54 – Dalla query SQL alla risposta JSON

- Il backend PHP collega il livello di persistenza dei dati con l'interfaccia HTTP dell'applicazione
- Il flusso è il seguente:
	1. PHP riceve la richiesta HTTP
	2. Esegue una query SQL sul database
	3. Recupera i risultati come array PHP
	4. Serializza i dati in JSON
	5. Restituisce la risposta al client

![[TW13-s054-1.png|700]]

- **Frontend JavaScript** → `GET /api/products.php` (HTTP) → **Backend PHP** → SQL / Risultati ⇄ **Database MySQL**
- Backend PHP – Esecuzione query: `fetch_all()`, `json_encode()`
- **Risposta JSON** – Array di prodotti (stessa struttura del blocco precedente)
- La risposta JSON mantiene la stessa struttura utilizzata nel blocco precedente.

***Il DB si inserisce nella comunicazione tra frontend e backend***

***Il DB non viene interrogato direttamente dal browser: l'accesso avviene attraverso il backend, che applica la logica applicativa e i controlli necessari***

>> Il browser non potrebbe comunque parlare con MySQL (non usa HTTP) e, anche potendo, dovrebbe conoscere le credenziali del DB, visibili a chiunque apra il codice della pagina. Il backend fa da intermediario: valida l'input, verifica i permessi ed espone solo le operazioni previste.

---
## Slide 55 -> 56 – Esempio: endpoint REST con DB

***Vecchio***

**backend `./api/products.php` con dati recuperati da un array PHP**
```php
<?php
header("Content-Type: application/json; charset=utf-8");
$products = [
    ["id" => 1, "name" => "Notebook", "price_cents" => 89900],
    ["id" => 2, "name" => "Monitor", "price_cents" => 24900]
];
echo json_encode($products, JSON_THROW_ON_ERROR);
```

***Nuovo***

**backend `./api/products.php` con dati recuperati dal DB**
```php
<?php
header("Content-Type: application/json; charset=utf-8");
try {
    require_once __DIR__ . "/../db.php";
    $result = $conn->query(
        "SELECT id, name, price_cents FROM products"
    );
    $products = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($products, JSON_THROW_ON_ERROR);
} catch (Throwable $e) {
    error_log($e->getMessage());
    http_response_code(500);
    echo json_encode([
        "error" => "Errore interno del server"
    ]);
}
```

>> `__DIR__` è la cartella dello script corrente (`api/`): `__DIR__ . "/../db.php"` punta a `db.php` nella cartella superiore, indipendentemente dalla directory di lavoro. Tenere `db.php` fuori dalla cartella `api/` evita anche di esporlo come endpoint.
>> `catch (Throwable $e)` intercetta sia le eccezioni (`mysqli_sql_exception`, `JsonException`) sia gli `Error` di PHP (verificato su PHP 8.3: anche un `require_once` di un file inesistente viene catturato come `Error`). Il dettaglio finisce nel log del server con `error_log()`, il client riceve `500` e `{"error":"Errore interno del server"}`: nessuna informazione interna esposta.

**Risposta JSON**
```json
[
  {"id":1,"name":"Notebook","price_cents":89900},
  {"id":2,"name":"Monitor","price_cents":24900}
]
```

***Risultato nel browser***

![[TW13-s056-1.png|300]]

**Frontend JS**
```js
const response = await fetch("./api/products.php");
if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
}
const products = await response.json();
const formatter = new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR"
});
const list = document.querySelector("#products");
for (const product of products) {
    const item = document.createElement("li");
    item.textContent =
        `${product.name}:
${formatter.format(product.price_cents / 100)}`;
    list.appendChild(item);
}
```

`response.json()` ***Trasforma il JSON ricevuto in valori JavaScript***

***Converte i centesimi in euro e formatta il numero secondo le convenzioni italiane***

>> `formatter.format(89900 / 100)` produce `"899,00 €"` (verificato): virgola decimale, due cifre e simbolo dell'euro dopo il numero, separato da uno spazio non separabile. Per 24900 si ottiene `"249,00 €"`.
>> L'andata a capo dentro il template literal fa parte della stringa (`"Notebook:\n899,00 €"`), ma in un `<li>` gli spazi bianchi vengono compressi e si vede "Notebook: 899,00 €". La schermata "Risultato nel browser" è una resa grafica con un layout più curato.
>> Il frontend è lo stesso di prima (slide 39): passare dall'array al DB non ha richiesto modifiche lato client, perché l'interfaccia HTTP e la struttura del JSON sono rimaste invariate.

---
## Slide 57 – Ricapitolando …

![[TW13-s057-1.png|700]]

- **Frontend (JavaScript)** – Catalogo prodotti (Notebook 899,00 €, Monitor 249,00 €). JavaScript riceve il JSON, converte i prezzi in euro e aggiorna il DOM.
- `GET /api/products.php` (HTTP) → **Backend (PHP)**
	- **PHP** – Elaborazione della richiesta: Esecuzione query, Costruzione array associativo, `json_encode()`
	- **Database (MySQL)** – Memorizzazione dei dati (Query SQL / Risultati)
- **Risposta JSON** → Frontend

***Il backend restituisce dati indipendenti dalla presentazione***

***Il frontend decide come visualizzarli***

>> Esempio concreto della separazione: il backend fornisce `price_cents: 89900` (un dato), il frontend decide di mostrarlo come "899,00 €" (una presentazione). Lo stesso endpoint potrebbe servire anche un'app mobile o un altro sito che formatta i prezzi in modo diverso.
---
## Slide 58 – Seconda domanda

**BONUS**

- **DOMANDA 2:**
	Perché è preferibile utilizzare i prepared statement quando una query SQL contiene dati provenienti dall'utente?
	- [ ] Perché rendono sempre più veloce l'esecuzione delle query
	- [ ] Perché separano la struttura della query SQL dai valori forniti dall'utente
	- [ ] Perché cifrano automaticamente i dati memorizzati nel database
	- [ ] Perché impediscono qualsiasi tipo di attacco all'applicazione

>> Risposta corretta: la **seconda**. Con un prepared statement la struttura della query (`SELECT ... WHERE email = ?`) viene inviata e analizzata separatamente dai valori, che vengono legati ai segnaposto come dati: un input come `' OR '1'='1` resta una stringa da confrontare e non può modificare la query (SQL injection).
>> Le altre sono false: il vantaggio di prestazioni c'è solo in alcuni casi (stessa query eseguita più volte) e non "sempre"; non cifrano nulla; proteggono dalla SQL injection, non da qualsiasi attacco (XSS, CSRF, password deboli, ecc. restano possibili).

---
## Slide 59 -> 60 – Come riconosciamo un utente?

- HTTP è un protocollo ***stateless***: ogni richiesta è indipendente dalle precedenti e il protocollo non prevede, di per sé, il mantenimento dello stato applicativo tra richieste successive
- Consideriamo il catalogo degli esempi precedenti:
	- Un utente effettua il login
	- Successivamente richiede l'elenco dei propri prodotti preferiti
	- Il server deve riconoscere che le due richieste appartengono allo stesso utente
- Come possiamo mantenere questa informazione tra richieste HTTP differenti?

![[TW13-s060-1.png|450]]

- **Browser — Alice**: L'utente inserisce le proprie credenziali e invia la richiesta di login.
	- `POST /login.php` – Email + password
- **Backend PHP**: Verifica le credenziali. Login riuscito: crea una sessione e imposta un cookie con il Session ID.
- **Browser — Alice**: Effettua una nuova richiesta, ad esempio per ottenere i propri preferiti.
	- `GET /api/favorites.php` – Il browser invia automaticamente il cookie di sessione.
- **Backend PHP**: Come riconosce che la richiesta proviene da Alice? **?**

>> La connessione TCP o l'indirizzo IP non bastano a riconoscere l'utente: più utenti possono condividere lo stesso IP (NAT, proxy) e richieste dello stesso utente possono viaggiare su connessioni diverse. Serve un dato che il client ripresenta a ogni richiesta: è il ruolo del cookie con il Session ID (o, in alternativa, di un token come vedremo con JWT).

---
## Slide 61 – Cookie: informazioni nel browser

- Un cookie HTTP è una coppia nome-valore che il server può chiedere al browser di memorizzare e re-inviare nelle richieste successive, secondo le regole di validità del cookie
- Il meccanismo utilizza due header HTTP:
	- ***Set-Cookie***: inviato dal server nella risposta
	- ***Cookie***: inviato dal browser nelle richieste successive
- I cookie possono essere utilizzati per preferenze, identificatori di sessione e altre informazioni

---
## Slide 62 – Esempio HTTP

**Risposta del server**
```http
HTTP/1.1 200 OK
Set-Cookie: theme=dark; Path=/; SameSite=Lax
```

**Richiesta successiva del browser**
```http
GET /api/products.php HTTP/1.1
Host: localhost
Cookie: theme=dark
```

![[TW13-s062-1.png|600]]

- **Browser**: Memorizza il cookie nel proprio dispositivo. Cookie nel browser: `theme = dark`
- **Risposta HTTP** `Set-Cookie: theme=dark` – Il server imposta il cookie nella risposta.
- **Richiesta HTTP** `Cookie: theme=dark` – Il browser reinvia il cookie nelle richieste successive.
- **Server PHP**: Imposta il cookie nella risposta HTTP.

>> Gli attributi (`Path`, `SameSite`, `Expires`, ...) compaiono solo in `Set-Cookie`: nella richiesta il browser invia soltanto le coppie `nome=valore` (più cookie separati da `; `, es. `Cookie: theme=dark; PHPSESSID=abc123`).
>> Senza `Expires`/`Max-Age` il cookie è un *cookie di sessione del browser*: viene eliminato alla chiusura del browser (o quando il browser considera terminata la sessione di navigazione).
>> In PHP il cookie si imposta con `setcookie("theme", "dark", ["path" => "/", "samesite" => "Lax"]);` (prima di qualsiasi output) e si legge nelle richieste successive con `$_COOKIE["theme"]`.

---
## Slide 63 – Cookie: informazioni nel browser

- Il cookie viene conservato dal browser, ma il server ne determina inizialmente nome, valore e attributi attraverso `Set-Cookie`
- Il browser applica le regole relative a dominio, percorso, scadenza e sicurezza prima di decidere se reinviarlo
- Un cookie può trasportare un identificatore, ma non è necessariamente una sessione

![[TW13-s063-1.png|300]]

>> Poiché il cookie è conservato dal client, l'utente (o uno script, se il cookie non è `HttpOnly`) può leggerlo e modificarlo: il server non deve mai fidarsi del suo valore. Per questo nel cookie si mette un identificatore casuale e i dati veri restano sul server (slide successive).

---
## Slide 64 -> 65 – Cookie Law

- La ***Cookie Law*** è l'insieme delle disposizioni europee e nazionali che regolano l'utilizzo dei cookie e di altri strumenti di tracciamento, tutelando la riservatezza degli utenti

![[TW13-s064-1.png|700]]

| Periodo | Tappa | Contenuto |
|---|---|---|
| 2002 – 2009 | Direttiva ePrivacy | Direttiva 2002/58/CE, modificata dalla 2009/136/CE: disciplina l'accesso alle informazioni memorizzate nei dispositivi degli utenti. |
| 2014 – 2015 | Attuazione italiana | Provvedimento del Garante dell'8 maggio 2014, con adeguamento entro il 2 giugno 2015. |
| 2018 | GDPR | Piena applicazione del Regolamento (UE) 2016/679: rafforzamento dei requisiti del consenso e della tutela dei dati personali. |
| 2021 – 2022 | Nuove linee guida italiane | Provvedimento del Garante del 10 giugno 2021, con adeguamento richiesto entro il 9 gennaio 2022. |

Direttiva 2002/58/CE, art. 5(3); Direttiva 2009/136/CE; D.lgs. 196/2003, art. 122; Regolamento (UE) 2016/679 (GDPR); Garante Privacy, [Linee guida cookie e altri strumenti di tracciamento (2021)](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677876)

![[TW13-s065-1.png|550]]

| Tipo | Obblighi |
|---|---|
| Cookie tecnici | Informativa, senza consenso preventivo se strettamente necessari. |
| Cookie di profilazione | Informativa e consenso preventivo. |

- I cookie strettamente necessari al funzionamento del servizio non richiedono consenso preventivo, mentre quelli di profilazione e gli altri strumenti di tracciamento non tecnici richiedono, di regola, un consenso informato prima dell'attivazione
- Un cookie utilizzato esclusivamente per mantenere la sessione di login può essere un ***cookie tecnico***: non è necessario chiedere il consenso per ogni ***cookie di sessione***, ma resta necessario fornire l'informativa appropriata

![[TW13-s065-2.png|250]]

>> In pratica: il banner dei cookie serve per i cookie/tracker non tecnici (profilazione, molti analytics e pubblicità di terze parti), che non devono essere attivati prima del consenso. Il cookie `PHPSESSID` usato solo per il login o per il carrello è tecnico: basta l'informativa.
>> La "Cookie Law" non riguarda solo i cookie ma qualsiasi informazione letta o scritta sul dispositivo dell'utente (es. `localStorage`, fingerprinting).

---
## Slide 66 -> 67 – Session ID e sessione server-side

- Una sessione server-side permette di associare informazioni applicative a un identificatore di sessione (***Session ID***)
- Il funzionamento tipico è il seguente:
	1. Il server crea una sessione e genera un identificatore casuale difficile da indovinare
	2. Il browser conserva il Session ID in un cookie
	3. Nelle richieste successive, il browser reinvia il cookie
	4. Il server utilizza il Session ID per recuperare i dati associati alla sessione
- **Il cookie contiene normalmente l'identificatore, non i dati della sessione**

![[TW13-s067-1.png|450]]

- **Browser**: Conserva il Session ID in un cookie. `Cookie: PHPSESSID=abc123...`
	- **Richiesta HTTP + Cookie**: `GET /api/favorites.php` – `Cookie: PHPESSSID=abc123...`
- **Backend PHP**: Recupera il Session ID dal cookie e lo utilizza per accedere ai dati di sessione.
	- **Ricerca dello stato associato**: Utilizza il Session ID per recuperare i dati della sessione sul server.
- **Session storage — Server**: Dati della sessione memorizzati sul server.

| Session ID | Dati associati |
|---|---|
| abc123... | `user_id = 42` |

***Session ID è un valore opaco: il client non deve conoscerne il significato, ma soltanto conservarlo e reinviarlo***

***Il possesso di un Session ID valido può consentire di utilizzare la sessione associata, per questo motivo la protezione dei cookie di sessione è così importante***

>> Refuso nello schema: nella richiesta compare `PHPESSSID`, ma il nome del cookie è `PHPSESSID` (come nel riquadro "Browser").
>> Il Session ID funziona come una "chiave" temporanea: chi lo ottiene (furto tramite XSS, rete non cifrata, ecc.) può impersonare l'utente senza conoscerne la password (*session hijacking*). Per questo deve essere casuale e lungo, e il cookie va protetto con `HttpOnly`, `Secure` e `SameSite` (slide 77).

---
## Slide 68 – Come PHP gestisce una sessione

- PHP offre un meccanismo integrato per la gestione delle sessioni
	- `session_start()` avvia o riprende una sessione
	- `$_SESSION` permette di leggere e modificare i dati associati
	- Il Session ID viene normalmente scambiato tramite un cookie, spesso denominato `PHPSESSID`
	- I dati della sessione sono conservati sul server, secondo il gestore di sessione configurato

>> `session_start()` va chiamata in ogni script che usa la sessione e **prima di qualsiasi output**, perché può dover inviare l'header `Set-Cookie`.
>> Il gestore predefinito (`session.save_handler = files`) salva i dati serializzati in un file per sessione (es. `/tmp/sess_<id>`); si può configurare un gestore diverso (database, Redis, ...). Il nome del cookie è dato da `session_name()`, di default `PHPSESSID`.

---
## Slide 69 – Esempio

**favorites.php**
```php
<?php
session_start();
$_SESSION["user_id"] = 42;
echo "Utente: " . $_SESSION["user_id"];
```

![[TW13-s069-1.png|450]]

- **PHP — `session_start()`**: Avvio o ripristino della sessione. PHP legge il Session ID dal cookie (se presente) o ne crea uno nuovo.
- **`$_SESSION`**: Variabile globale associativa che contiene i dati della sessione per la richiesta corrente. `["user_id" => 42]`
	- Lettura e scrittura dei dati di sessione
- **Session storage — Server**: Dati persistenti tra richieste, fino a scadenza o invalidazione.

| Session ID | Dati associati |
|---|---|
| abc123... | `user_id = 42` |

***Nelle richieste successive, dopo*** `session_start()`***, PHP può recuperare il valore associato alla sessione, purchè il browser presenti un identificatore valido e i dati siano ancora disponibili***

***Questo codice è un esempio del meccanismo di memorizzazione: non costituisce un login sicuro, perché assegna direttamente un identificatore utente senza verificarne le credenziali***

***La sessione non termina necessariamente quando il browser viene chiuso: il browser e il server gestiscono separatamente la durata del cookie e la conservazione dei dati di sessione***

>> Output: `Utente: 42` (verificato con PHP 8.3).
>> I dati di `$_SESSION` vengono scritti nello storage alla fine dello script (o con `session_write_close()`), non a ogni assegnazione.
>> Sulla durata: il cookie `PHPSESSID` ha di default `lifetime = 0` (sparisce alla chiusura del browser), mentre i dati sul server vengono eliminati dal garbage collector dopo `session.gc_maxlifetime` secondi di inattività (default 1440 = 24 minuti). Le due scadenze sono indipendenti.

---
## Slide 70 -> 71 – Dalle credenziali alla sessione autenticata

- L'autenticazione permette al server di verificare l'identità dichiarata da un utente
- In una tipica applicazione PHP con sessioni server-side:
	1. Il browser invia le credenziali attraverso HTTPS
	2. Il backend recupera dal database l'utente corrispondente
	3. Verifica la password confrontandola con l'hash memorizzato
	4. Se la verifica ha successo, rigenera il Session ID
	5. Memorizza nella sessione l'identificatore dell'utente autenticato

***Autenticazione: chi è l'utente? Autorizzazione: quali operazioni può effettuare?***

![[TW13-s071-1.png|500]]

- **Browser — Form di login**: L'utente inserisce le proprie credenziali. Email: `alice@example.com`, Password: `•••••••••`
	- `POST /login.php` · HTTPS – Invio sicuro delle credenziali.
- **Backend PHP**: Ricerca l'utente nel database e verifica la password.
	1. Recupera l'utente (es. tramite email)
	2. Verifica la password (`password_verify`)
	3. Se la verifica ha successo, crea la sessione autenticata
	- Query al database – Ricerca utente e recupero dell'hash della password.
- **Database utenti**: Ricerca il record dell'utente e restituisce l'hash della password.
- **Login riuscito**: Rigenera il Session ID e memorizza l'utente nella sessione.

| id | email | password_hash | ... |
|---|---|---|---|
| 42 | alice@example.com | `$2y$10$...` | ... |

```php
session_regenerate_id(true);
$_SESSION["user_id"] = 42;
```

>> Perché rigenerare il Session ID al login: protegge dalla *session fixation*. Se un attaccante riesce a far usare alla vittima un Session ID che conosce (es. impostato prima del login), dopo il login quell'ID sarebbe autenticato; con `session_regenerate_id(true)` la sessione autenticata riceve un ID nuovo e il vecchio viene eliminato (`true` = cancella i dati della vecchia sessione).
>> La query del passo 2 va fatta con un prepared statement (es. `SELECT id, password_hash FROM users WHERE email = ?`): non si cerca "email AND password", perché l'hash bcrypt è diverso a ogni generazione e va confrontato con `password_verify()`.
>> In caso di errore conviene un messaggio generico ("credenziali non valide"), senza distinguere tra email inesistente e password errata.

---
## Slide 72 – Password hashing

- Le password non devono essere memorizzate in chiaro nel database
- È necessario utilizzare un algoritmo di hashing specificamente progettato per le password, come ***bcrypt***
	- L'hashing è un'operazione unidirezionale, non una cifratura reversibile
	- bcrypt utilizza un salt e un costo computazionale configurabile
	- PHP mette a disposizione funzioni dedicate alla generazione e alla verifica degli hash

>> **Salt**: valore casuale diverso per ogni password, combinato con essa prima dell'hashing. Due utenti con la stessa password hanno hash diversi e le tabelle precalcolate (*rainbow table*) diventano inutili.
>> **Costo**: numero di iterazioni (in bcrypt $2^{\text{cost}}$); aumentandolo di 1 il calcolo raddoppia di durata. È trascurabile per un singolo login ma rende molto più lenti i tentativi a forza bruta su milioni di password.
>> Le funzioni PHP sono `password_hash()`, `password_verify()` e `password_needs_rehash()` (per aggiornare l'hash quando si cambia algoritmo o costo).

---
## Slide 73 -> 74 – Esempio

**PHP: registrazione dell'utente**
```php
$passwordHash = password_hash(
    $password,
    PASSWORD_BCRYPT
);
```

***Nel DB memorizziamo*** `$passwordHash`***, non*** `$password`

**PHP: login**
```php
if (password_verify($password, $passwordHash)) {
    session_regenerate_id(true);
    $_SESSION["user_id"] = $userId;
}
```

***Non basta utilizzare un hash generico come SHA-256: gli algoritmi progettati per le password introducono un costo computazionale che rende più onerosi i tentativi di individuare le password a partire dagli hash sottratti***

***Il salt viene gestito automaticamente da*** `password_hash()`***; l'hash risultante contiene le informazioni necessarie alla verifica***

>> Esempio reale (PHP 8.3): `password_hash("segreta", PASSWORD_BCRYPT)` produce una stringa di 60 caratteri come `$2y$10$qdUvtYXBdk/UZ.rkUDYozOQCDUDu7iHeHfv2ZVI59mpFsWAZZGmii`: `$2y$` = algoritmo bcrypt, `10$` = costo, poi 22 caratteri di salt e 31 di hash vero e proprio. Per questo `password_verify()` non ha bisogno di ricevere salt e costo a parte.
>> Rieseguendo `password_hash()` sulla stessa password si ottiene un hash **diverso** (salt nuovo), ma `password_verify()` restituisce `true` per entrambi. Al contrario SHA-256 è deterministico e velocissimo (miliardi di tentativi al secondo su GPU).
>> Nel login, `$passwordHash` e `$userId` sono quelli letti dal database con la query sull'email; `$password` è quella appena inviata dal form.
>> In alternativa a `PASSWORD_BCRYPT` si può usare `PASSWORD_DEFAULT` (oggi bcrypt, ma può cambiare nelle versioni future): la colonna del DB va dimensionata almeno `VARCHAR(255)`. Bcrypt considera solo i primi 72 byte della password.

![[TW13-s074-1.png|700]]

- **Registrazione (o modifica password)**: La password inserita dall'utente viene trasformata in un hash e salvata nel database.
	- **Browser**: Password inserita dall'utente. Valore in chiaro, ricevuto tramite HTTPS.
	- `POST /register.php` HTTPS
	- **Backend PHP**: Genera un hash sicuro della password utilizzando bcrypt.
	- **Database utenti**: Viene memorizzato solo l'hash della password (non la password originale).
- **Login**: La password inserita dall'utente viene verificata confrontandola con l'hash memorizzato.
	- **Browser**: Password inserita dall'utente. Valore in chiaro, ricevuto tramite HTTPS.
	- `POST /login.php` HTTPS
	- **Backend PHP**: Verifica la password confrontandola con l'hash memorizzato.
	- **Database utenti**: Recupera l'hash della password per l'utente (in base all'email o username).

```php
$hash = password_hash(
    $password,
    PASSWORD_BCRYPT
);
```

```php
if (password_verify(
    $password, $hash
)) {
    // login riuscito
} else {
    // password non valida
}
```

| id | email | password_hash |
|---|---|---|
| 42 | alice@example.com | `$2y$10$...` |

---
## Slide 75 – Logout e invalidazione sessione

- Il logout deve terminare la sessione autenticata, impedendo che il Session ID precedentemente utilizzato continui a consentire l'accesso
- In PHP è necessario:
	1. Avviare la sessione esistente
	2. Rimuovere i dati associati alla sessione
	3. Invalidare la sessione sul server
	4. Eliminare il cookie di sessione dal browser (anche se questo non equivale automaticamente a invalidare la sessione sul server)

![[TW13-s075-1.png|250]]

>> Il punto chiave è il 3: se si cancella solo il cookie nel browser, chi ha copiato in precedenza il Session ID (es. un attaccante) può continuare a usarlo finché i dati restano sul server. Viceversa, se si distrugge solo la sessione sul server, il browser continua a inviare un ID ormai inutile: innocuo, ma poco pulito.

---
## Slide 76 – Esempio

**logout.php**
```php
<?php
session_start();
$_SESSION = [];
$params = session_get_cookie_params();
setcookie(session_name(), "", [
    "expires" => time() - 3600,
    "path" => $params["path"],
    "domain" => $params["domain"],
    "secure" => $params["secure"],
    "httponly" => $params["httponly"],
    "samesite" => $params["samesite"] ?? "Lax"
]);
session_destroy();
http_response_code(204);
```

`session_destroy()` ***non elimina da solo il cookie memorizzato nel browser***

***In un'applicazione reale il logout dovrebbe essere invocato attraverso una richiesta che modifica lo stato, tipicamente POST, con le opportune protezioni CSRF***

>> Corrispondenza con la slide precedente: `session_start()` = passo 1, `$_SESSION = []` = passo 2, `session_destroy()` = passo 3 (elimina i dati sul server), `setcookie(...)` con scadenza nel passato = passo 4 (il browser cancella il cookie). Il cookie va "sovrascritto" con gli stessi `path` e `domain` con cui era stato creato, altrimenti il browser lo considera un cookie diverso e non lo elimina: per questo si leggono da `session_get_cookie_params()`.
>> Dettaglio su `?? "Lax"`: da PHP 7.3 `session_get_cookie_params()` contiene sempre la chiave `"samesite"`, che di default vale `""` (stringa vuota, verificato con PHP 8.3). Poiché `??` sostituisce solo `null` o chiavi assenti, il fallback `"Lax"` in pratica non scatta (servirebbe `?:`). Per la cancellazione del cookie non cambia nulla.
>> `http_response_code(204)` = *No Content*: logout riuscito, risposta senza corpo (adatto a una chiamata `fetch()` da JavaScript).
>> Perché POST + CSRF: se il logout fosse una GET, un sito esterno potrebbe sloggare l'utente semplicemente includendo `<img src="https://sito/logout.php">`.

---
## Slide 77 – Proteggere i cookie di sessione

- Un Session ID valido può consentire l'accesso alla sessione di un utente. È quindi fondamentale proteggerne la riservatezza e limitarne l'utilizzo
- Tra gli attributi più importanti dei cookie:

| Attributo | Funzione |
|---|---|
| `HttpOnly` | Impedisce l'accesso al cookie attraverso JavaScript |
| `Secure` | Limita l'invio del cookie alle connessioni HTTPS, con particolarità per localhost |
| `SameSite` | Limita l'invio del cookie in determinati contesti cross-site |
| `Path` | Limita il percorso per cui il cookie viene inviato |
| `Max-Age / Expires` | Definiscono la durata del cookie |

>> "Particolarità per localhost": i browser moderni trattano `http://localhost` come contesto sicuro, quindi accettano e inviano cookie `Secure` anche senza HTTPS durante lo sviluppo locale.
>> Valori di `SameSite`: `Strict` (mai inviato da richieste partite da altri siti), `Lax` (inviato solo nelle navigazioni di primo livello con metodi "sicuri" come GET, es. clic su un link; non in POST cross-site, iframe, immagini, `fetch`), `None` (sempre, ma richiede `Secure`). Alcuni browser (es. Chrome) applicano `Lax` di default quando l'attributo manca: meglio impostarlo sempre in modo esplicito.
>> `Max-Age` (secondi) prevale su `Expires` (data) se sono presenti entrambi; se mancano tutti e due il cookie dura fino alla chiusura del browser.

---
## Slide 78 -> 79 – Esempio

**PHP**
```php
<?php
session_set_cookie_params([
    "lifetime" => 0,
    "path" => "/",
    "secure" => true,
    "httponly" => true,
    "samesite" => "Lax"
]);
session_start();
```

`HttpOnly` ***non impedisce al browser di inviare il cookie nelle richieste HTTP: impedisce agli script JavaScript di leggerne il valore***

`SameSite` ***contribuisce alla protezione contro alcuni attacchi CSRF, ma non sostituisce necessariamente altre misure come i token anti-CSRF***

***Proteggere il Session ID significa proteggere l'accesso alla sessione autenticata***

>> `session_set_cookie_params()` va chiamata **prima** di `session_start()` (e in ogni script, oppure si impostano le direttive `session.cookie_*` in `php.ini`). `"lifetime" => 0` = cookie valido fino alla chiusura del browser.
>> Con `"secure" => true` su un sito servito in HTTP (non localhost) il browser non memorizza/invia il cookie: la sessione sembra "perdersi" a ogni richiesta.
>> `HttpOnly` limita i danni di un XSS (lo script iniettato non può leggere `document.cookie` e rubare il Session ID), ma lo script può comunque fare richieste a nome dell'utente dalla stessa pagina: la difesa vera contro l'XSS resta l'escaping dell'output.

![[TW13-s079-1.png|700]]

- **Backend PHP**: Crea la sessione e imposta il cookie di sessione.
- **Risposta HTTP**:
```http
Set-Cookie:
  PHPSESSID=abc123...;
  HttpOnly;
  Secure;
  SameSite=Lax
```
- **Browser**: Memorizza il cookie e lo invia a ogni richiesta successiva. `Cookie: PHPSESSID=abc123...`
- **Cookie di sessione**: Il Session ID è un identificatore opaco che viene memorizzato nel browser come cookie.

| Attributo | Descrizione | Valore | Effetto |
|---|---|---|---|
| `PHPSESSID` | | `PHPSESSID=identificatore_opaco` | Identificatore univoco e opaco della sessione. Non contiene informazioni sull'utente. |
| `HttpOnly` | Protezione dall'accesso JS. | `HttpOnly` | Il cookie non è accessibile dal codice JavaScript (`document.cookie`). |
| `Secure` | Trasmissione HTTPS. | `Secure` | Il cookie viene inviato solo su connessioni HTTPS. |
| `SameSite` | Limitazione cross-site. | `SameSite=Lax` | Limita l'invio del cookie in richieste cross-site, riducendo il rischio di attacchi CSRF. |

>> Nell'header reale tutto sta su una riga: `Set-Cookie: PHPSESSID=abc123...; path=/; secure; HttpOnly; SameSite=Lax` (PHP aggiunge anche `path=/` dato dal parametro `"path"`). Nella richiesta successiva il browser invia solo `Cookie: PHPSESSID=abc123...`, senza attributi.
---
## Slide 80 – Terza domanda

**BONUS**

- **DOMANDA 3:**
Se un attaccante ottiene il Session ID valido di un utente autenticato, cosa può accadere?

- [ ] L'attaccante deve comunque conoscere la password dell'utente per accedere alla sessione
- [ ] L'attaccante può utilizzare il Session ID per impersonare l'utente, finché la sessione rimane valida e utilizzabile
- [ ] L'attaccante può accedere alla sessione soltanto se conosce anche l'indirizzo IP dell'utente
- [ ] L'attaccante non può utilizzare il Session ID perché i dati della sessione sono memorizzati sul server

>> **Risposta corretta: la seconda.** Il Session ID è l'unica credenziale che il browser presenta dopo il login: chi lo possiede (es. inviando `Cookie: PHPSESSID=...`) viene riconosciuto come l'utente, senza password (*session hijacking*).
>> Il server di norma non lega la sessione all'IP (e comunque l'IP può cambiare o essere condiviso), e il fatto che i dati stiano sul server non protegge: il server li associa proprio a quell'ID.
>> L'attacco funziona finché la sessione non scade o non viene invalidata (logout, `session_regenerate_id()` dopo il login, timeout).

---
## Slide 81 – CSRF: quando una richiesta sfrutta una sessione autenticata

- Un attacco ***CSRF*** (***Cross-Site Request Forgery***) induce il browser di un utente autenticato a inviare una richiesta indesiderata a un'applicazione Web, sfruttando le credenziali che il browser può allegare automaticamente, come i cookie di sessione
- Il problema nasce quando il server considera sufficiente la presenza di un cookie di sessione valido per autorizzare un'operazione che modifica lo stato
- Quindi, nel CSRF non è necessario conoscere il Session ID: l'attaccante cerca di sfruttare il fatto che il browser può inviare automaticamente il cookie: l'attacco riesce soltanto se le condizioni di invio delle credenziali e i controlli del server lo consentono (es: `SameSite` può impedire l'invio del cookie in molti scenari cross-site)
- ***Una richiesta autenticata non è necessariamente una richiesta intenzionalmente autorizzata dall'utente***

>> Differenza con la domanda precedente: nel *session hijacking* l'attaccante **ruba** il Session ID e lo usa lui; nel CSRF non lo vede mai, ma fa in modo che sia il **browser della vittima** a inviare la richiesta (con il cookie allegato).
>> L'attaccante di solito non può leggere la risposta (Same-Origin Policy): il CSRF serve a far **eseguire azioni** (cambio email, acquisto, aggiunta ai preferiti), non a rubare dati.

---
## Slide 82 – Esempio

Alice ha effettuato il login e sta navigando su un sito controllato da un attaccante che tenta di indurre il browser a inviare una richiesta che aggiunge un prodotto ai preferiti di Alice, senza che lei lo abbia richiesto

![[TW13-s082-1.png|700]]

- **Browser di Alice**: sessione autenticata su catalogo.example; cookie `PHPSESSID=abc123...` (inviato automaticamente dal browser)
- **Sito controllato dall'attaccante** (attacker.example): induce una richiesta verso catalogo.example ("Click qui!")
- `POST /api/favorites.php` (verso catalogo.example) + cookie di sessione `PHPSESSID=abc123...` (incluso automaticamente dal browser, se consentito)
- **Backend PHP**: riceve la richiesta con un cookie di sessione valido, se le regole del browser ne consentono l'invio

```http
POST /api/favorites.php HTTP/1.1
Host: catalogo.example
Cookie: PHPSESSID=abc123...
...
```

- La richiesta viene elaborata come se fosse stata inviata da Alice autenticata.
- **Ma Alice ha davvero richiesto l'operazione?**

>> Tipicamente la pagina dell'attaccante contiene un form nascosto con `action="https://catalogo.example/api/favorites.php"` e `method="post"`, inviato con un click o automaticamente via JavaScript. Il backend vede una richiesta con un cookie valido e non ha modo di distinguerla da una fatta da Alice dal sito vero.
>> Con un cookie `SameSite=Lax` (default dei browser moderni quando l'attributo manca) una `POST` cross-site come questa **non** porta con sé il cookie; con `SameSite=None` sì. Ecco perché la slide dice "se consentito".

---
## Slide 83 -> 84 – Come prevenire gli attacchi CSRF?

- Per proteggere le operazioni che modificano lo stato dell'applicazione, il backend deve verificare che la richiesta provenga da un contesto autorizzato, non limitandosi a riconoscere la sessione
- Tra le principali contromisure:
	- ***Token anti-CSRF***: valore imprevedibile associato alla sessione e verificato dal server
	- ***Attributo*** `SameSite`: limita l'invio automatico dei cookie in determinati contesti cross-site
	- ***Verifica dell'origine***: controllo degli header `Origin` e, quando appropriato, `Referer`
	- ***Uso corretto dei metodi HTTP***: le richieste GET non devono modificare lo stato applicativo

>> `SameSite` ha tre valori: `Strict` (cookie mai inviato da contesti cross-site), `Lax` (inviato solo nelle navigazioni top-level con metodi "sicuri", es. click su un link → `GET`), `None` (sempre, ma richiede `Secure`).
>> La regola sui GET è il presupposto di `Lax`: se un `GET` modifica lo stato, basta un link o un `<img src="...">` per fare CSRF.

- Il server genera un valore imprevedibile e lo associa alla sessione. Il frontend legittimo lo include nelle richieste che modificano lo stato; il backend verifica che corrisponda al valore atteso
- Un sito esterno, pur potendo tentare di indurre il browser a inviare una richiesta, normalmente non può leggere il token dell'applicazione protetta, grazie alla Same-Origin Policy
- `SameSite` è una difesa aggiuntiva, non una garanzia universale contro il CSRF

![[TW13-s084-1.png|600]]

- **Richiesta legittima**: Browser di Alice (Cookie + token anti-CSRF) → Backend PHP (Verifica token e sessione) → **Richiesta accettata** (L'operazione può essere eseguita.)
- **Tentativo CSRF**: Sito dell'attaccante (Non dispone del token valido) → Backend PHP (Rifiuta la richiesta) → **Richiesta negata** (Il token non è valido o manca.)

>> Schema minimo in PHP (*synchronizer token*):
>> ```php
>> session_start();
>> if (empty($_SESSION['csrf_token'])) {
>>     $_SESSION['csrf_token'] = bin2hex(random_bytes(32)); // 64 caratteri esadecimali
>> }
>> // nel form: <input type="hidden" name="csrf_token" value="<?= $_SESSION['csrf_token'] ?>">
>> // (o in un header, es. X-CSRF-Token, per le chiamate fetch)
>>
>> // nell'endpoint che modifica lo stato:
>> $sent = $_POST['csrf_token'] ?? '';
>> if (!hash_equals($_SESSION['csrf_token'], $sent)) {
>>     http_response_code(403);
>>     exit;
>> }
>> ```
>> `random_bytes` è un generatore crittograficamente sicuro (da non sostituire con `rand()` o `uniqid()`); `hash_equals` confronta in tempo costante.

---
## Slide 85 -> 86 – JWT e sessioni server-side

- Un JWT (JSON Web Token) è un formato standardizzato per rappresentare informazioni (claim) in un token JSON, generalmente protetto mediante firma digitale o MAC
- Un JWT firmato può essere verificato dal server senza dover necessariamente recuperare uno stato di sessione centralizzato
- Un JWT compatto firmato (JWS) è composto da tre parti: `header.payload.signature`
- Le informazioni nel payload sono codificate, non cifrate: possono essere lette da chi possiede il token
- JWT non è necessariamente una soluzione migliore o più moderna delle sessioni tradizionali: è una scelta architetturale differente
- Una sessione server-side è spesso semplice da gestire e revocare. Un JWT firmato può essere utile in architetture distribuite, ma introduce problemi di gestione della scadenza, della revoca e delle chiavi crittografiche
- Utilizzare JWT non elimina automaticamente il rischio CSRF: se il token viene trasportato in un cookie inviato automaticamente dal browser, possono ripresentarsi condizioni favorevoli a questo attacco

![[TW13-s086-1.png|650]]

- **Sessione server-side**: lo stato dell'utente è mantenuto sul server e identificato da un Session ID.
	- Browser: Session ID (nel cookie) `PHPSESSID=abc123...` → Server: ricerca lo stato associato al Session ID ↔ Stato di sessione (sul server): `abc123...` → `utente: Alice`
- **JWT firmato**: le informazioni sull'utente sono contenute in un token (firmato) che il server verifica.
	- Client: JWT (nel header o in un cookie) `Authorization: Bearer eyJhbGciOiJIUzI1NiIs...` → Server: verifica la firma del token e i claim (es. utente, scadenza)
	- Struttura del JWT (compatto, firmato): `header` . `payload` . `signature`
		- **Header**: tipo di token e algoritmo
		- **Payload**: claim (es. utente, ruoli, scadenza)
		- **Signature**: firma che ne garantisce l'integrità

| Aspetto | Sessione server-side | JWT firmato |
|---|---|---|
| Informazioni | Conservate sul server | Claim nel token |
| Credenziale del client | Session ID | JWT |
| Verifica | Ricerca dello stato | Firma e validità dei claim |
| Revoca | Generalmente immediata lato server | Più complessa senza stato aggiuntivo |

>> Le tre parti sono JSON codificati in **Base64URL**, non cifrati: il pezzo `eyJhbGciOiJIUzI1NiIs` dello schema si decodifica in `{"alg":"HS256",`, cioè l'inizio dell'header (HMAC con SHA-256). Chiunque abbia il token può leggere il payload: non metterci dati riservati.
>> La firma garantisce solo che il contenuto non sia stato modificato da chi non ha la chiave. Il server deve verificare firma, algoritmo atteso (mai accettare `"alg":"none"`) e claim come `exp` (scadenza).
>> Revoca: un JWT resta valido fino a `exp` anche dopo il logout, a meno di mantenere una *blacklist* lato server, il che reintroduce lo stato. Per questo si usano token di accesso a breve durata + *refresh token*.
>> CSRF: se il JWT viaggia nell'header `Authorization` (impostato a mano dal JavaScript), il browser non lo allega da solo e il CSRF classico non funziona; in compenso un token salvato in `localStorage` è esposto a XSS.

---
## Slide 87 – PHP2Shell: vulnerabilità nel runtime

- PHP2Shell è il nome utilizzato per indicare ***due vulnerabilità critiche del motore PHP***, corrette il ***21 ottobre 2026***:
	- **CVE-2026-109618**: corruzione della memoria durante la gestione di condizioni *out-of-memory*
	- **CVE-2026-109619**: riutilizzo di stato interno non più valido tra richieste
- Entrambe hanno severità **CVSS v4.0 pari a 9,2/10** e possono consentire esecuzione remota di codice senza autenticazione
- Le vulnerabilità interessano il runtime, non soltanto specifiche applicazioni PHP
- Questo incidente ci permette anche di riprendere alcuni concetti: gestione delle richieste HTTP, esecuzione lato server, sessioni e ciclo di vita dei processi

![[TW13-s087-1.png|300]]

>> **CVE** (*Common Vulnerabilities and Exposures*): identificatore pubblico univoco di una vulnerabilità, nel formato `CVE-anno-numero`.
>> **CVSS** (*Common Vulnerability Scoring System*): punteggio di gravità da 0 a 10 che tiene conto di vettore d'attacco (es. via rete), complessità, privilegi e interazione utente richiesti, impatto su riservatezza/integrità/disponibilità. Nella scala qualitativa, 9,0–10,0 è "Critical".
>> Il "runtime" (o motore, *Zend Engine* + interprete) è il programma, scritto in C, che esegue gli script `.php`: un bug lì colpisce qualunque applicazione PHP, anche scritta in modo corretto.

---
## Slide 88 – PHP2Shell: cosa è successo?

- Ottobre 2026 sono state divulgate due vulnerabilità critiche nel runtime PHP, potenzialmente sfruttabili per eseguire codice sul server senza autenticazione (Remote Code Execution, RCE)

![[TW13-s088-1.png|650]]

| Data | Cronologia dell'incidente PHP2Shell |
|---|---|
| 20 ottobre | PHP annuncia l'imminente rilascio di aggiornamenti di sicurezza critici. |
| 21 ottobre | Vengono pubblicate le **patch** e gli **advisory** per le due vulnerabilità. |
| 23 ottobre | Emerge una **terza vulnerabilità**, con condizioni di sfruttamento molto più particolari. |
| 26 ottobre | Le due vulnerabilità principali vengono inserite nel catalogo **CISA** delle vulnerabilità sfruttate. |

- La pubblicazione di una vulnerabilità non significa che tutti i sistemi interessati siano stati compromessi: significa che esiste una condizione di rischio che deve essere valutata e corretta
- Una vulnerabilità nel runtime può mettere a rischio applicazioni differenti, anche quando il loro codice non contiene direttamente l'errore

>> **Advisory**: bollettino di sicurezza che descrive la vulnerabilità, le versioni colpite e come correggerla.
>> **CISA** è l'agenzia statunitense per la cybersicurezza; il suo catalogo KEV (*Known Exploited Vulnerabilities*) elenca le vulnerabilità per cui ci sono evidenze di sfruttamento reale, da correggere con priorità.

---
## Slide 89 – Dov'è la vulnerabilità?

- In alcuni scenari documentati, una richiesta HTTP può raggiungere il percorso vulnerabile prima dell'esecuzione del codice applicativo
- Il problema coinvolge diverse modalità di esecuzione PHP, tra cui `mod_php`, PHP-FPM e php-cgi, anche se il rischio e le condizioni di sfruttamento non sono identici.
- PHP considera particolarmente critica la configurazione con Apache e `mod_php`

![[TW13-s089-1.png|600]]

- **Browser** – Richiesta HTTP: `GET /api/products.php`
- ↓ **Web server — Apache**
- ↓ **Runtime PHP — area vulnerabile**: Gestione memoria, Stato delle richieste
- ↓ **Codice applicativo PHP**: Endpoint · Login · Query SQL
- **Il punto chiave**: La vulnerabilità si trova nel runtime PHP, in componenti che gestiscono la memoria, gli errori e lo stato delle richieste.
- **Non è un errore dell'applicazione**: A differenza di SQL injection, XSS o CSRF, il problema non dipende dal codice dell'applicazione, ma dal modo in cui il runtime PHP gestisce le richieste.

>> Le tre modalità di esecuzione:
>> - `mod_php`: l'interprete PHP è un modulo caricato **dentro** i processi di Apache; gli stessi processi servono molte richieste di fila.
>> - PHP-FPM (*FastCGI Process Manager*): un pool separato di processi PHP worker, a cui il web server (Apache o Nginx) inoltra le richieste via FastCGI; anche qui ogni worker serve più richieste.
>> - php-cgi: modello CGI, in cui tipicamente si avvia un processo per richiesta.
>>
>> In generale, un difetto che lascia stato "sporco" tra una richiesta e l'altra ha effetto dove lo stesso processo serve più richieste di seguito: per questo rischio e condizioni di sfruttamento cambiano con la modalità di esecuzione.

---
## Slide 90 -> 91 – Da dove derivano le vulnerabilità

- Le due vulnerabilità derivano da errori differenti nella gestione dello stato interno del runtime

| Vulnerabilità | Meccanismo |
|---|---|
| CVE-2026-109618 | Un errore di allocazione può interrompere l'inizializzazione di strutture interne; la successiva fase di cleanup può operare su dati non validi |
| CVE-2026-109619 | Informazioni interne appartenenti a una richiesta possono sopravvivere alla liberazione della memoria e venire utilizzate da una richiesta successiva |

- In entrambi i casi, il runtime può utilizzare memoria in uno stato non valido, creando condizioni potenzialmente sfruttabili per l'esecuzione di codice

![[TW13-s091-1.png|650]]

- **Errore durante l'inizializzazione** – Corruzione dello stato per un errore di memoria.
	1. Inizializzazione di una struttura
	2. Errore di memoria (es. out-of-memory)
	3. Cleanup su stato incompleto
	- → **Memoria in stato non valido**
- **Stato residuo tra richieste** – Riutilizzo di memoria dopo la sua liberazione.
	1. Richiesta A usa memoria
	2. Memoria liberata, riferimento residuo
	3. Richiesta B riutilizza il riferimento
	- → **Possibile use-after-free**

- In un runtime implementato con gestione esplicita della memoria, un riferimento a un'area già liberata può diventare pericoloso se viene successivamente utilizzato
- Un errore di memoria non implica automaticamente una ***RCE*** (***Remote Code Execution***: vulnerabilità che può consentire l'esecuzione di codice da remoto su un sistema vulnerabile), ma può causare un crash o un comportamento indefinito; in determinate condizioni, un attaccante può riuscire a trasformarlo in una primitiva sfruttabile
- **Use-after-free**: vulnerabilità che si verifica quando un programma continua a utilizzare un riferimento a un'area di memoria già liberata, causando comportamenti imprevedibili e potenzialmente sfruttabili da un attaccante

>> "Gestione esplicita della memoria" = il runtime è scritto in C, dove la memoria si alloca e si libera a mano (`malloc`/`free` o equivalenti). Nel codice PHP che scriviamo noi la memoria è gestita automaticamente, ma l'interprete che lo esegue no.
>> Idea di use-after-free in C:
>> ```c
>> char *p = malloc(32);
>> free(p);          // l'area torna libera e può essere riassegnata
>> char *q = malloc(32); // può ricevere la stessa area di p
>> strcpy(q, dati_controllati_dall_attaccante);
>> use(p);           // p "punta" ora ai dati di q: comportamento indefinito
>> ```
>> Se l'attaccante riesce a far finire dati scelti da lui nell'area riutilizzata (ad esempio puntatori a funzione), l'errore diventa una **primitiva** (lettura/scrittura arbitraria, controllo del flusso) e da lì si può arrivare all'RCE.

---
## Slide 92 -> 93 – Perché l'impatto è stato così esteso?

- PHP è utilizzato da una quota molto significativa dei siti Web. Una vulnerabilità del runtime può quindi interessare applicazioni, framework e servizi molto diversi
- L'incidente PHP2Shell ha provocato:
	- Una corsa agli aggiornamenti di sicurezza
	- Tentativi di sfruttamento automatizzati su larga scala
	- Interruzioni precauzionali di alcuni servizi Web
	- La necessità di verificare anche installazioni legacy e software che incorpora PHP

- **ATTENZIONE!** sistemi potenzialmente vulnerabili, tentativi di attacco e compromissioni riuscite sono tre misure differenti

![[TW13-s093-1.png|650]]

- **Esposizione**: Sistemi con versioni vulnerabili. → **Tentativi**: Richieste potenzialmente malevole. → **Compromissioni**: Attacchi riusciti e verificati.
- Un numero elevato di tentativi non equivale a un numero equivalente di sistemi compromessi.

---
## Slide 94 – A due settimane dall'evento

- Le fonti confermano tentativi di sfruttamento diffusi e alcuni servizi temporaneamente sospesi per precauzione
- CISA ha inserito entrambe le vulnerabilità nel catalogo delle vulnerabilità sfruttate, ma le evidenze pubbliche non permettono di concludere che il 70% dei siti Web sia stato compromesso
- La diffusione di PHP amplifica la superficie potenzialmente esposta, ma non significa che tutti i siti utilizzino la stessa versione o la stessa configurazione
- Alcuni servizi sono stati messi offline per prevenire una compromissione, non necessariamente perché fossero già stati attaccati con successo
- Alcune segnalazioni iniziali di compromissione sono state successivamente ritirate o ridimensionate

![[TW13-s094-1.png|350]]

- **7 OUT OF 10 WEBSITES\***: palazzi WooCommerce, WordPress (~42% of all sites), Magento, Wikipedia, Laravel, Your uncle's B&B, tutti appoggiati su un unico pilastro "PHP – do not remove"
	- **Microservices.** Decorative. Not load-bearing.
	- **PHP.** Started in 1994 as one guy's script for counting visits to his online CV. Declared dead by developers every year since.
	- Data: W3Techs, Oct 2026 · PHP on 69.3% of sites with a known server-side language · WordPress on ≈42% of all sites

>> Il "7 su 10" dell'immagine dice quanti siti (fra quelli con linguaggio server-side noto) **usano** PHP, cioè misura al più l'esposizione potenziale. Leggerlo come "il 70% dei siti è stato compromesso" confonde le tre misure della slide precedente.

---
## Slide 95 -> 96 – Il ruolo dell'AI in PHP2Shell

- PHP2Shell è anche un caso significativo di utilizzo dell'intelligenza artificiale nella ricerca di vulnerabilità software
- Nel corso del 2026, diversi gruppi di ricerca hanno individuato indipendentemente problemi nel runtime PHP, utilizzando strumenti di analisi assistiti dall'AI, tra cui Calif, OpenAI e Wiz
- Le ricostruzioni indicano un ruolo importante dell'AI nell'esplorazione del codice e nell'individuazione di possibili vulnerabilità, affiancata dal lavoro dei ricercatori umani

![[TW13-s095-1.png|650]]

- **L'AI nella scoperta delle vulnerabilità**: **AI-assisted discovery** (Analisi del codice e identificazione di possibili vulnerabilità.) → **Validazione e patch** (Verifica dei problemi, correzione e test di regressione.) → **Deployment** (Distribuzione delle patch e aggiornamento dei sistemi.)
- **La velocità di scoperta non coincide con quella di correzione e aggiornamento.**

- Se l'AI accelera la scoperta delle vulnerabilità, siamo in grado di correggerle e distribuire le patch altrettanto rapidamente?
- E chi trae maggiore vantaggio da questa accelerazione: chi difende i sistemi o chi cerca di comprometterli?
- Nel caso PHP2Shell, le scoperte e le segnalazioni dei ricercatori sono iniziate già in agosto, mentre la distribuzione delle patch è avvenuta il 21 ottobre. Nel frattempo sono stati necessari analisi, validazione, coordinamento e test
- L'AI non sostituisce automaticamente il ricercatore di sicurezza. Nel caso PHP2Shell il contributo umano alla verifica e al coordinamento è stato fondamentale
	- Scoperta: l'AI può aiutare a esplorare grandi codebase e individuare condizioni problematiche
	- Validazione: un possibile bug deve essere verificato, caratterizzato e corretto senza introdurre regressioni
	- Distribuzione: anche una patch disponibile non protegge i sistemi finché non viene effettivamente installata
- L'AI può accelerare sia la ricerca difensiva sia l'individuazione di vulnerabilità da parte di attaccanti, mentre la capacità di applicare tempestivamente le correzioni rimane un problema organizzativo oltre che tecnico

>> Il periodo fra segnalazione e patch pubblica segue la prassi della *coordinated (responsible) disclosure*: i ricercatori avvisano in privato i manutentori, che preparano la correzione prima che i dettagli diventino pubblici. Dopo la pubblicazione inizia la corsa: chi attacca può studiare la patch per capire il bug, mentre chi difende deve ancora installarla.

---
## Slide 97 – Come proteggere un'applicazione PHP

- Quando una vulnerabilità interessa il runtime, correggere il codice dell'applicazione non è sufficiente
- È necessario intervenire sull'ambiente di esecuzione

| Intervento | Obiettivo |
|---|---|
| Aggiornare PHP | Correggere le vulnerabilità note |
| Verificare tutte le installazioni | Individuare runtime vulnerabili, anche in container e software di terze parti |
| Riavviare i processi PHP | Assicurarsi che venga caricato il runtime aggiornato |
| Verificare log e indicatori di compromissione | Identificare eventuali attacchi già avvenuti |
| Applicare privilegi minimi e isolamento | Limitare le conseguenze di un'eventuale compromissione |

>> Il riavvio serve perché i processi già in esecuzione (worker di PHP-FPM, processi Apache con `mod_php`) hanno in memoria il vecchio binario: aggiornare il pacchetto su disco non basta finché non vengono riavviati (es. `systemctl restart php8.3-fpm` o `apache2`). Nei container bisogna ricostruire l'immagine con la base aggiornata e ridistribuirla.
>> Privilegi minimi: se il processo PHP gira con un utente dedicato senza permessi di scrittura sul codice e senza accesso al resto del sistema, un'eventuale RCE fa meno danni.

---
## Slide 98 – Versioni corrette il 21 ottobre 2026

Versioni upstream pubblicate dal progetto PHP.
Le distribuzioni possono applicare patch di backport senza cambiare il numero di versione principale

| Ramo PHP | Prima versione corretta |
|---|---|
| 8.5 | 8.5.12 |
| 8.4 | 8.4.27 |
| 8.3 | 8.3.36 |
| 8.2 | 8.2.35 |
| 8.1 e precedenti | Rami EOL: aggiornamento o patch del fornitore |

- L'installazione di una versione corretta del runtime, o di una patch equivalente fornita dal distributore, è necessaria per eliminare le vulnerabilità note
- Le mitigazioni temporanee, come la disabilitazione di alcune funzionalità coinvolte nei percorsi vulnerabili, possono ridurre l'esposizione ma non garantiscono la sicurezza del sistema.
- Una patch, inoltre, non elimina automaticamente eventuali compromissioni già avvenute

>> **EOL** (*End Of Life*): ramo non più supportato dal progetto, che non riceve più correzioni ufficiali.
>> **Backport**: la correzione viene riportata dal fornitore (es. una distribuzione Linux) sulla versione che già distribuisce. Per questo `php -v` può mostrare un numero "vecchio" anche su un sistema corretto: va controllata la versione del **pacchetto** del distributore e il suo advisory, non solo il numero upstream.

---
## Slide 99 -> 100 – Cosa ci insegna PHP2Shell?

- La sicurezza di un'applicazione Web dipende da più livelli, non è una proprietà di un singolo componente, ma dell'intero sistema
- Un'applicazione può essere corretta e sicura a livello di codice, ma rimanere vulnerabile a causa dell'ambiente in cui viene eseguita

![[TW13-s099-1.png|650]]

- **Sicurezza applicativa**: SQL injection, XSS, CSRF, autenticazione, autorizzazione e gestione delle sessioni. → **Responsabilità** di chi progetta e sviluppa l'applicazione.
- **Sicurezza della piattaforma**: Runtime (es. PHP), server Web (es. Apache), librerie, dipendenze, configurazione (es. hardening) e aggiornamenti (patch). → **Responsabilità** di chi sviluppa, distribuisce e gestisce il sistema.

- Riprendendo l'architettura iniziale

![[TW13-s100-1.png|700]]

**La sicurezza di un'applicazione Web: una responsabilità condivisa**

| Componente | Ruolo | Rischi principali |
|---|---|---|
| Browser | Interfaccia utente | XSS, manipolazione del DOM, dati non fidati. |
| JavaScript | Logica lato client e interazioni | XSS, gestione insicura di dati sensibili (es. token, sessioni). |
| HTTP | Protocollo di comunicazione | Intercettazione dei dati (senza HTTPS), manipolazione delle richieste (es. CSRF). |
| PHP | Logica applicativa (lato server) | SQL injection, CSRF, errori di autenticazione e autorizzazione, gestione insicura delle sessioni. |
| MySQL | Persistenza dei dati | Accessi non autorizzati, query insicure, configurazioni deboli. |

**La sicurezza non è una proprietà di un singolo componente, ma dell'intero sistema.**

>> Il principio collegato è la **difesa in profondità** (*defense in depth*): più livelli di protezione indipendenti (codice sicuro, runtime aggiornato, configurazione restrittiva, privilegi minimi, monitoraggio), così che il cedimento di uno non comprometta tutto.

---
## Slide 101 – PHP2Shell: riferimenti e fonti

**FONTI UFFICIALI**

- PHP.net — Security release, 21 ottobre 2026 2026 – Versioni corrette, raccomandazioni e aggiornamenti
- Advisory CVE-2026-109618 – RCE via out-of-memory corruption
- Advisory CVE-2026-109619 – RCE via stale global state
- CERT-EU — Advisory 2026-018 – Impatto, versioni vulnerabili e remediation

**ANALISI E APPROFONDIMENTI**

- Cisco Talos — Two critical RCEs in PHP core – Threat intelligence, tentativi di sfruttamento e difese
- Calif Research — PHP2Shell – Ricerca originale, scoperta e AI-assisted analysis
- NHS England — Critical vulnerabilities in PHP – Allerta operativa e aggiornamenti sulle minacce
- NCSC-NL — PHP2Shell – Monitoraggio dei prodotti e componenti interessati

Fonti consultate: 1 novembre 2026 • Per aggiornamenti successivi, verificare gli advisory ufficiali

---
## Slide 102 – Domande?

![[TW13-s102-1.png|200]]

---
## Riassunto

>> **PHP nel Web moderno**
>> - PHP è un linguaggio di scripting **eseguito sul server**: il browser riceve solo il risultato (HTML, JSON…), mai il codice.
>> - Ciclo di una richiesta: browser → web server (Apache) → runtime PHP (eventuale accesso al DB) → risposta HTTP al client.
>> - Ieri generava soprattutto pagine HTML; oggi fa anche da **backend di API** per frontend JavaScript (Fetch, Vue). È ancora molto diffuso (circa 69% dei siti con linguaggio server-side noto, WordPress, Laravel…), quindi le sue vulnerabilità hanno grande impatto.
>>
>> **Sintassi**
>> - Codice tra `<?php` e `?>`; variabili con prefisso `$`; tipizzazione dinamica (con `declare(strict_types=1)` si limitano le conversioni implicite negli argomenti scalari).
>> - Stringhe: `"..."` interpola le variabili, `'...'` no; si concatena con **`.`** (non con `+`).
>> - Array indicizzati `["a","b"]` e **associativi** `["name" => "Notebook"]`. `json_encode()` trasforma un array associativo in un oggetto JSON e uno indicizzato in un array JSON.
>> - Funzioni (anche con tipi su parametri e ritorno). Si divide il codice in più file con `require`, `include` e `require_once`.
>>
>> **PHP, HTTP e API REST**
>> - **Superglobali**: `$_GET` (query string), `$_POST` (form urlencoded o multipart), `$_FILES`, `$_SERVER` (es. `REQUEST_METHOD`), `$_COOKIE`, `$_SESSION`.
>> - Un body JSON **non** finisce in `$_POST`: si legge con `file_get_contents("php://input")` + `json_decode(..., true)`.
>> - Operatore **`??`** per i valori di default se la chiave manca. I dati del client non sono affidabili: si validano, e prima di stamparli in HTML si passano a **`htmlspecialchars`** (contro l'XSS).
>> - **REST**: risorse identificate da URI (`/api/products/12`), rappresentazioni JSON, richieste **stateless**, metodi con semantica precisa (GET legge; POST crea; PUT e DELETE sostituiscono ed eliminano e sono idempotenti).
>> - Un endpoint JSON imposta `header("Content-Type: application/json; charset=utf-8")`, stampa `json_encode(...)` e comunica l'esito con lo **status code** (`http_response_code`: 200, 201, 400, 401, 403, 404, 500).
>> - Lato client: `fetch(url)` → `response.ok` / `status` → `await response.json()`.
>>
>> **PHP e database**
>> - I dati passano dall'array nel codice a MySQL senza cambiare l'interfaccia HTTP: il frontend non se ne accorge.
>> - **MySQLi**: `new mysqli(...)`, `$conn->query(...)`, `fetch_all(MYSQLI_ASSOC)` → array associativi → `json_encode`.
>> - **SQL injection**: mai concatenare l'input nella stringa SQL. Si usano i **prepared statement**: `prepare` con `?`, poi `bind_param` (tipi `"i"`, `"s"`…), poi `execute` e `get_result`. Così la struttura della query resta separata dai valori.
>>
>> **Cookie, sessioni e autenticazione**
>> - HTTP è **stateless**: per riconoscere l'utente tra richieste diverse il server invia un cookie (`Set-Cookie`), che il browser poi rimanda da solo (`Cookie`). La Cookie Law impone il consenso per i cookie non tecnici.
>> - **Sessione**: il cookie contiene solo un **Session ID** (`PHPSESSID`), mentre i dati restano sul server. In PHP si usano `session_start()` e `$_SESSION`.
>> - **Login**: le password si salvano come hash con `password_hash()` (bcrypt, con salt e costo) e si controllano con `password_verify()`. Dopo il login si chiama `session_regenerate_id(true)` (contro la session fixation) e si salva `$_SESSION["user_id"]`.
>> - **Logout**: svuotare `$_SESSION`, far scadere il cookie con `setcookie(...)` e chiamare `session_destroy()`. Meglio farlo con una richiesta POST.
>> - Chi ruba il Session ID **impersona l'utente** (domanda 3). Per proteggere il cookie si usano gli attributi `HttpOnly` (JS non lo legge), `Secure` (solo HTTPS), `SameSite`, `Path` e `Max-Age`/`Expires`.
>>
>> **CSRF e JWT**
>> - **CSRF**: un sito esterno fa partire dal browser della vittima una richiesta autenticata, perché il cookie viene allegato in automatico. Difese: **token anti-CSRF** legato alla sessione, `SameSite`, controllo degli header `Origin`/`Referer`, nessuna modifica di stato con GET.
>> - **JWT** (`header.payload.signature`): i claim stanno nel token firmato, codificati ma **non cifrati**. Il server verifica la firma invece di cercare lo stato. Non è "migliore" delle sessioni: rende più difficile la revoca, e se viaggia in un cookie il rischio CSRF resta.
>>
>> **PHP2Shell (caso di studio)**
>> - Secondo le slide: due vulnerabilità del **runtime** PHP (corruzione di memoria in condizioni out-of-memory e riuso di stato interno tra richieste), con CVSS 9,2 e possibile **RCE** senza autenticazione, corrette il 21 ottobre 2026.
>> - Lezione principale: un'applicazione scritta bene resta vulnerabile se lo è l'ambiente su cui gira. Bisogna aggiornare PHP ovunque (anche nei container), **riavviare i processi**, controllare i log e applicare privilegi minimi e isolamento.
>> - Esposizione, tentativi e compromissioni sono cose diverse. L'AI accelera la scoperta delle vulnerabilità, ma correzione e aggiornamento restano un problema organizzativo.
