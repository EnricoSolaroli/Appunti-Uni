[09-SQL](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/secondo anno/base dati/slide/09-SQL.pdf>)

indice:
> [!faq]- Indice degli Argomenti (Clicca per espandere)
> - [[#09-SQL]]
> 	- [[#Standard e dialetti]]
> - [[#DDL – Data Definition Language]]
> 	- [[#Creazione ed eliminazione di tabelle]]
> 	- [[#Modifica di tabelle]]
> 	- [[#I domini]]
> - [[#Vincoli]]
> 	- [[#Valori di default e NULL]]
> 	- [[#Chiavi]]
> 	- [[#Chiavi straniere (foreign key)]]
> 	- [[#Vincoli generici (check constraint)]]
> 	- [[#Politiche di "reazione"]]
> - [[#DML – L'istruzione SELECT]]
> 	- [[#Selezione e proiezione]]
> 	- [[#DISTINCT]]
> 	- [[#Clausola TOP]]
> - [[#Predicati nella clausola WHERE]]
> 	- [[#Espressioni complesse]]
> 	- [[#BETWEEN]]
> 	- [[#IN]]
> 	- [[#LIKE]]
> - [[#Colonne, alias e valori nulli]]
> 	- [[#Espressioni nella SELECT list]]
> 	- [[#Ridenominazione delle colonne (AS)]]
> 	- [[#Pseudonimi (alias di tabella)]]
> 	- [[#Valori nulli e logica a 3 valori]]
> - [[#Ordinamento]]
> 	- [[#ORDER BY]]
> 	- [[#Ordinamento e TOP]]
> - [[#Interrogazioni su più tabelle (join)]]
> 	- [[#Join implicito (nella WHERE)]]
> 	- [[#Self join]]
> 	- [[#Join espliciti (nella FROM)]]
> 	- [[#Outer join – esempio]]
> - [[#Operatori insiemistici]]
> - [[#Istruzioni di aggiornamento dei dati]]
> 	- [[#INSERT]]
> 	- [[#DELETE e UPDATE]]
> - [[#Raggruppamenti]]
> 	- [[#Funzioni aggregate]]
> 	- [[#COUNT e valori nulli]]
> 	- [[#Funzioni aggregate e tipo del risultato]]
> 	- [[#SELECT list e funzioni aggregate]]
> 	- [[#GROUP BY]]
> 	- [[#HAVING – condizioni sui gruppi]]
> 	- [[#Esempio completo (ordine delle clausole)]]
> - [[#Query innestate (subquery)]]
> 	- [[#Subquery scalari]]
> 	- [[#Caso generale (ANY / ALL)]]
> 	- [[#Livelli multipli di innestamento]]
> 	- [[#Quantificatore esistenziale (EXISTS)]]
> 	- [[#Subquery correlate]]
> 	- [[#Unnesting (da innestata a piatta)]]
> 	- [[#Un esempio complesso (max con GROUP BY)]]
> 	- [[#La divisione con le subquery]]
> 	- [[#Subquery per aggiornamenti e CHECK]]
> - [[#Viste e tabelle derivate]]
> 	- [[#Definizione di viste]]
> 	- [[#Query complesse con VIEW]]
> 	- [[#Aggiornabilità di viste]]
> 	- [[#WITH CHECK OPTION]]
> 	- [[#Table expressions]]
> 	- [[#Common table expressions (WITH)]]
> 	- [[#Interrogazioni ricorsive]]
> - [[#DML – riepilogo]]
> - [[#DB di riferimento per gli esempi]]
> 	- [[#Impiegati]]
> 	- [[#Sedi]]
> 	- [[#Progetti]]

**SQL (Structured Query Language)** è il linguaggio standard _de facto_ per DBMS relazionali. Riunisce in sé le funzionalità di:

- **DDL** = Data Definition Language;
- **DML** = Data Manipulation Language;
- **DCL** = Data Control Language.

SQL è nato come linguaggio **dichiarativo** (non-procedurale), ovvero non specifica la sequenza di operazioni da compiere per ottenere il risultato. È **"relazionalmente completo"**: ogni espressione dell'algebra relazionale può essere tradotta in SQL.

> Il modello dei dati di SQL è basato su **tabelle** anziché su relazioni: possono essere presenti <u>righe (tuple) duplicate</u> e in alcuni casi <u>l'ordine delle colonne ha rilevanza</u>. Il motivo è pragmatico (efficienza). SQL adotta la **logica a 3 valori** introdotta con l'AR.

#### Standard e dialetti:

La standardizzazione inizia nel 1986. Lo standard di riferimento è **SQL-2 (SQL-92)** di ISO e ANSI. Con **SQL:1999** SQL diventa un linguaggio **computazionalmente completo** (con istruzioni di controllo) per il supporto di oggetti persistenti; seguono standard nel 2003, 2006, 2008, 2011, 2016 (JSON, row pattern matching). SQL si sta trasformando in un linguaggio sempre più **procedurale**.

> ogni sistema ha ancora un suo **dialetto** che: è compatibile in larga parte con SQL-2; ha già elementi degli standard successivi; ha anche costrutti non standard.

## DDL – Data Definition Language

Permette di definire, modificare ed eliminare schemi di relazioni (**table**), specificare **vincoli** (a livello di riga o di tabella), definire nuovi **domini**, **viste** (tabelle virtuali) e **indici**.

#### Creazione ed eliminazione di tabelle:

`CREATE TABLE` definisce lo schema di una tabella e ne crea un'istanza vuota. Per ogni attributo va specificato il dominio, un eventuale valore di default ed eventuali vincoli; infine si possono esprimere altri vincoli a livello di tabella.

```sql
CREATE TABLE Impiegati (
  CodImp    char(4)       PRIMARY KEY,              -- chiave primaria
  CF        char(16)      NOT NULL UNIQUE,          -- chiave
  Cognome   varchar(60)   NOT NULL,
  Nome      varchar(30)   NOT NULL,
  Sede      char(3)       REFERENCES Sedi(Sede),    -- FK
  Ruolo     char(20)      DEFAULT 'Programmatore',
  Stipendio int           CHECK (Stipendio > 0),
  UNIQUE (Cognome, Nome)                            -- chiave
)
```

`DROP TABLE Impiegati` elimina lo schema di una tabella (e la corrispondente istanza).

#### Modifica di tabelle:

`ALTER TABLE` modifica lo schema di una tabella, in particolare **aggiungendo attributi** o **aggiungendo/rimuovendo vincoli**.

```sql
ALTER TABLE Impiegati
ADD COLUMN Sesso char(1) CHECK (Sesso in ('M','F'))
ADD CONSTRAINT StipendioMax CHECK (Stipendio < 4000)
DROP CONSTRAINT StipendioPositivo
DROP UNIQUE(Cognome,Nome);
```

> se si aggiunge un attributo con vincolo `NOT NULL` si deve prevedere un **valore di default** che il sistema assegnerà automaticamente a tutte le tuple già presenti: `ADD COLUMN Istruzione char(10) NOT NULL DEFAULT 'Laurea'`.

#### I domini:

- **Domini elementari (predefiniti)**: carattere (singoli o stringhe, anche a lunghezza variabile), bit (booleani/stringhe), numerici (esatti e approssimati), data/ora/intervalli.
- **Domini definiti dall'utente (semplici)**: utilizzabili con vincoli e valori di default.

```sql
CREATE DOMAIN Voto AS SMALLINT
  DEFAULT NULL
  CHECK ( value >= 18 AND value <= 30 )
```

## Vincoli

#### Valori di default e NULL:

- `NOT NULL` vieta la presenza di valori nulli: `Cognome varchar(60) NOT NULL`;
- `DEFAULT` specifica un valore di default: `Ruolo char(20) DEFAULT 'Programmatore'`.

#### Chiavi:

La definizione di una chiave avviene con il vincolo **`UNIQUE`**:

- in linea, se la chiave è un singolo attributo: `CF char(16) UNIQUE`;
- dopo aver dichiarato tutti gli attributi, se la chiave consiste di uno o più attributi: `UNIQUE(Cognome,Nome)`.

**`PRIMARY KEY`** definisce la chiave primaria: `CodImp char(4) PRIMARY KEY`.

> - la specifica di una chiave primaria <u>non è obbligatoria</u>;
> - si può specificare <u>al massimo una chiave primaria per tabella</u>;
> - <u>non è necessario</u> specificare `NOT NULL` per gli attributi della primary key.

#### Chiavi straniere (foreign key):

La definizione avviene con il vincolo **`FOREIGN KEY`**, indicando quale chiave viene referenziata. Le colonne di destinazione devono essere una **chiave** della tabella destinazione (non necessariamente la primaria):

```sql
FOREIGN KEY (Sede) REFERENCES Sedi(Sede)
```

#### Vincoli generici (check constraint):

Con la clausola **`CHECK (<condizione>)`** si esprimono vincoli di tupla arbitrari, sfruttando tutto il potere espressivo di SQL.

- il vincolo è **violato** se esiste almeno una tupla che rende <u>falsa</u> la condizione (esclusi i valori NULL): `Stipendio int CHECK (Stipendio > 0)`;
- se `CHECK` è espresso a **livello di tabella** può fare riferimento a più attributi: `CHECK (ImportoLordo = Netto + Ritenute)`.

#### Politiche di "reazione":

Anziché lasciare al programmatore il compito di garantire l'integrità referenziale a fronte di cancellazioni e modifiche, si possono specificare **politiche di reazione** in fase di definizione degli schemi.

```sql
FOREIGN KEY Sede REFERENCES Sedi
  ON DELETE CASCADE      -- cancellazione in cascata
  ON UPDATE NO ACTION    -- modifiche non permesse
```

> altre politiche: **`SET NULL`** e **`SET DEFAULT`**.

## DML – L'istruzione SELECT

`SELECT` è l'istruzione che permette di eseguire **interrogazioni (query)** sul DB. Realizza le operazioni di **selezione, proiezione, join, raggruppamento e ordinamento**.

```sql
SELECT [ALL|DISTINCT][TOP(n)[PERCENT][WITH TIES]] A1,A2,..,Am 
--fra [...] ci sono condizioni opzionali
FROM     R1,R2,..,Rn
[WHERE    <condizione>] --predicati di selezione 
[GROUP BY <listaAttributi>] --indica come raggruppare i dati per calcolare statistiche 
[HAVING   <condizione>] --esiste solo in presenza del "group by" e funzione come "where"
[ORDER BY <listaAttributi>] --definisce l'ordinamento in output
```

|clausola|significato|
|---|---|
|**SELECT** (o TARGET) list|che cosa si vuole come risultato|
|**FROM**|da dove si prende|
|**WHERE**|quali condizioni deve soddisfare (predicati di selezione)|
|**GROUP BY**|le colonne su cui raggruppare|
|**HAVING**|condizioni relative ai gruppi (esiste solo con `GROUP BY`)|
|**ORDER BY**|ordinamento in output|

> l'ordine delle clausole è **sempre** questo. Tutto ciò fra `[...]` è **opzionale**.

#### Selezione e proiezione:

Sono due operazioni **ortogonali**:

- **Selezione**: decomposizione _orizzontale_ -> il risultato contiene <u>tutti gli attributi</u> ma <u>solo alcune ennuple</u>;
- **Proiezione**: decomposizione _verticale_ -> il risultato ha <u>solo alcuni attributi</u> ma <u>tutte le ennuple</u> dell'operando.

```sql
SELECT CodImp, Nome, Ruolo   -- proiezione
FROM Impiegati
WHERE Sede = 'S01'           -- selezione
```

> equivale a $\pi_{CodImp,Nome,Ruolo}(\sigma_{Sede='S01'}(Impiegati))$.

- `SELECT *` -> tutti gli attributi (nessuna proiezione);
- omettere `WHERE` -> tutte le tuple (nessuna selezione), restituisce l'intera estensione.

> **ATTENZIONE**: il risultato di una proiezione in SQL <u>non è in generale una relazione</u> poiché può contenere **duplicati**.

#### DISTINCT:

Il risultato di una query SQL può contenere **righe duplicate**. Per eliminarle si usa l'opzione **`DISTINCT`** nella SELECT list.

```sql
SELECT DISTINCT Ruolo
FROM Impiegati
WHERE Sede = 'S01'
```

> p.s. è un'operazione <u>non banale, costosa</u>.

#### Clausola TOP:

Specifica **quante righe** deve restituire la query (numero o percentuale). Con **`WITH TIES`** si mantengono più record se hanno lo stesso valore per gli attributi di ordinamento.

> non tutti i DBMS supportano `TOP`, ciascuno usa la propria sintassi:

|DBMS|sintassi|
|---|---|
|SQLServer, Access|`SELECT TOP(n) [PERCENT] [WITH TIES] ...`|
|MySQL|`... LIMIT numero`|
|Oracle|`... AND ROWNUM <= numero`|

## Predicati nella clausola WHERE

#### Espressioni complesse:

All'interno di `WHERE` si inseriscono espressioni booleane con **`AND`**, **`OR`**, **`NOT`**.

#### BETWEEN:

Esprime condizioni di appartenenza a un **intervallo** (estremi inclusi), sia con numeri che con stringhe.

```sql
WHERE Stipendio BETWEEN 1300 AND 2000
-- equivale a:
WHERE Stipendio >= 1300 AND Stipendio <= 2000
```

#### IN:

Esprime condizioni di appartenenza a un **insieme** (valori ammissibili per l'attributo).

```sql
WHERE Sede IN ('S02','S03')
-- equivale a:
WHERE Sede = ANY ('S02','S03')
WHERE Sede = 'S02' OR Sede = 'S03'
```

> la vera utilità è quando si inseriscono <u>valori dinamici derivati da altre query</u> (subquery).

#### LIKE:

Esprime **pattern** su stringhe (all'interno di predicati di selezione) mediante le **wildcard**:

- **`_`** -> sostituisce un <u>singolo carattere</u> arbitrario;
- **`%`** -> sostituisce una <u>stringa arbitraria</u>.

```sql
-- nomi che terminano con 'i' e hanno una 'i' in seconda posizione
WHERE Nome LIKE '_i%i'
```

## Colonne, alias e valori nulli

#### Espressioni nella SELECT list:

La SELECT list può contenere non solo attributi ma anche **espressioni** (anche su più attributi): `SELECT CodImp, Stipendio*12`. In questo caso la colonna calcolata non ha un nome.

#### Ridenominazione delle colonne (AS):

A ogni elemento della SELECT list si può associare un nome a piacere (**alias**) con **`AS`** (opzionale):

```sql
SELECT CodImp AS Codice, Stipendio*12 AS StipendioAnnuo
-- AS può essere omesso: SELECT CodImp Codice, ...
```

#### Pseudonimi (alias di tabella):

Ogni nome di colonna può essere prefissato dal nome della tabella (**obbligatorio in caso di ambiguità**); si può usare uno **pseudonimo** in luogo del nome della tabella:

```sql
SELECT I.CodImp AS Codice, I.Stipendio*12 AS StipendioAnnuo
FROM Impiegati I           -- oppure Impiegati AS I
WHERE I.Sede = 'S01'
```

#### Valori nulli e logica a 3 valori:

Il trattamento dei nulli si basa su quanto visto in AR. In espressioni complesse SQL ricorre alla **logica a 3 valori**: vero (V), falso (F), **sconosciuto (?)**.

> `WHERE Stipendio > 1500 OR Stipendio <= 1500` <u>non</u> restituisce le tuple con `Stipendio` NULL, perché il predicato vale `?`.

Per verificare se un valore è NULL si usa l'operatore **`IS`**:

- `A IS NULL`;
- `NOT (A IS NULL)` = `A IS NOT NULL`.

## Ordinamento

#### ORDER BY:

Ordina il risultato secondo i valori di una o più colonne; per ogni colonna si specifica **`ASC`** (ascendente, default) o **`DESC`**(discendente).

```sql
SELECT Nome, Stipendio
FROM Impiegati
ORDER BY Stipendio DESC
```

> p.s. l'ordinamento crescente `ASC` è di default; `DESC` va specificato esplicitamente.

#### Ordinamento e TOP:

`TOP` è molto utile in combinazione con `ORDER BY` (le tuple sono ordinate in base all'`ORDER BY`).

```sql
-- programmatore con stipendio più basso (+ eventuali pari merito)
SELECT TOP(1) WITH TIES Nome, Stipendio
FROM Impiegati
WHERE Ruolo = 'Programmatore'
ORDER BY Stipendio
```

> **N.B.** `WITH TIES` si può usare <u>solo in presenza di `ORDER BY`</u> e i "pareggi" (TIES) si riferiscono alla **combinazione degli attributi di ordinamento**.

## Interrogazioni su più tabelle (join)

#### Join implicito (nella WHERE):

```sql
SELECT I.Nome, I.Sede, S.Città
FROM Impiegati I, Sedi S
WHERE I.Sede = S.Sede            -- predicato di join
  AND I.Ruolo = 'Programmatore'
```

Interpretazione: si esegue il **prodotto cartesiano** di Impiegati e Sedi -> si applicano i **predicati** della WHERE -> si estraggono le **colonne** della SELECT list. Il predicato `I.Sede = S.Sede` è il **predicato di join**.

> se la SELECT list contiene 2+ colonne con lo stesso nome è necessaria una **ridenominazione** per avere tutte le colonne con intestazione in output.

#### Self join:

	L'uso di alias è **forzato** quando si esegue un self-join.

```sql
-- Chi sono i nonni di Anna?
SELECT G1.Genitore AS Nonno
FROM Genitori G1, Genitori G2
WHERE G1.Figlio = G2.Genitore   -- predicato di join
  AND G2.Figlio = 'Anna'
```

#### Join espliciti (nella FROM):

Anziché scrivere i predicati di join nella `WHERE` (**forma implicita**), si può costruire una _joined table_ nella `FROM` (**forma esplicita**).

```sql
SELECT I.Nome, I.Sede, S.Città
FROM Impiegati I JOIN Sedi S ON (I.Sede = S.Sede)
WHERE I.Ruolo = 'Programmatore'
```

`JOIN` si può scrivere anche `INNER JOIN`. Altri tipi di join espliciti: **`LEFT [OUTER] JOIN`**, **`RIGHT [OUTER] JOIN`**, **`FULL [OUTER] JOIN`**, **`NATURAL JOIN`**.

> negli **outer join** la forma esplicita è <u>obbligatoria</u>.

#### Outer join – esempio:

```sql
-- per ciascuna sede: responsabile e numero di Analisti
SELECT S.Sede, S.Responsabile, COUNT(I.CodImp)
FROM Sedi S LEFT OUTER JOIN Impiegati I
  ON (S.Sede = I.Sede) AND (I.Ruolo = 'Analista')  -- predicato di join composto
GROUP BY S.Sede, S.Responsabile
```

> se in una sede non esistono Analisti gli attributi di Impiegato sono NULL. È importante applicare il `COUNT` a un **attributo di Impiegati** (`COUNT(I.CodImp)`) per ottenere **0** nelle sedi senza analisti.

## Operatori insiemistici

`SELECT` da sola non permette unione, intersezione e differenza. Si combinano i risultati di due `SELECT` con: **`UNION`**, **`INTERSECT`**, **`EXCEPT`**.

- gli elementi delle SELECT list devono avere **tipi compatibili** (e stessi nomi per un'intestazione definita);
- l'**ordine** degli elementi è importante (notazione posizionale);
- il risultato è **privo di duplicati**; per mantenerli si usa **`ALL`**: `UNION ALL`, `INTERSECT ALL`, `EXCEPT ALL`.

## Istruzioni di aggiornamento dei dati

- **`INSERT`** -> inserisce nuove tuple (può usare il risultato di una **query** per inserimenti multipli);
- **`DELETE`** -> cancella tuple (può usare **condizioni**);
- **`UPDATE`** -> modifica tuple (può usare **condizioni** ed **espressioni** per i nuovi valori).

> in ogni caso gli aggiornamenti riguardano una **sola relazione**.

#### INSERT:

```sql
-- caso singolo
INSERT INTO Sedi(Sede, Responsabile, Città)
VALUES ('S04','Bruni','Firenze')

-- caso multiplo (da query)
INSERT INTO SediBologna(SedeBO, Resp)
SELECT Sede, Responsabile FROM Sedi WHERE Città = 'Bologna'
```

> deve esservi **corrispondenza** tra attributi e valori. La lista di attributi si può omettere (vale l'ordine di definizione). Attributi non elencati assumono **NULL** (se ammesso) o il **default**. Negli inserimenti multipli gli schemi possono differire ma i **tipi** devono essere compatibili.

#### DELETE e UPDATE:

```sql
DELETE FROM Sedi WHERE Città = 'Bologna'   -- elimina le sedi di Bologna

UPDATE Sedi
SET Responsabile = 'Bruni', Città = 'Firenze'
WHERE Sede = 'S01'

UPDATE Impiegati
SET Stipendio = 1.1*Stipendio
WHERE Ruolo = 'Programmatore'
```

## Raggruppamenti

Fino a qui si estraggono informazioni relative a **singole tuple**. In molti casi servono **informazioni di sintesi** che caratterizzano _gruppi_ di tuple (es: numero di programmatori di 'S01', media stipendi a Bologna). SQL offre a tale scopo: **funzioni aggregate** e clausola **`GROUP BY`**.

#### Funzioni aggregate:

**`MIN`**, **`MAX`**, **`SUM`**, **`AVG`** (media), **`STDEV`** (deviazione standard), **`VARIANCE`**, **`COUNT`**.

- l'argomento è una **qualunque espressione** che può figurare nella SELECT list, **ma NON un'altra funzione aggregata**;
- tutte le funzioni, **eccetto `COUNT`, ignorano i valori nulli**; il risultato è NULL se tutti i valori sono NULL;
- **`DISTINCT`** considera solo i valori distinti di un attributo: `SUM(DISTINCT Stipendio)`.

#### COUNT e valori nulli:

- **`COUNT(*)`** -> conta **le tuple** del risultato;
- **`COUNT(Colonna)`** -> conta solo le tuple con valore <u>non nullo</u> in tale colonna.

#### Funzioni aggregate e tipo del risultato:

Per alcune funzioni può servire un **casting** dell'argomento per ottenere il risultato desiderato:

```sql
SELECT AVG(CAST(Stipendio AS Decimal(6,2))) AS AvgStip
FROM Impiegati    -- 1412.50 invece di 1412
```

#### SELECT list e funzioni aggregate:

> se si usano funzioni aggregate, la SELECT list **non può includere altri elementi** che non siano a loro volta funzioni aggregate. `SELECT Nome, MIN(Stipendio)` <u>non va bene</u>; `SELECT MIN(Stipendio), MAX(Stipendio)` è corretto.

Il motivo: una funzione aggregata restituisce **un singolo valore**, mentre il riferimento a una colonna è in generale un insieme di valori.

#### GROUP BY:

`GROUP BY` definisce i **gruppi** specificando una o più **colonne di raggruppamento**, sulla base delle quali le tuple sono raggruppate per **valori uguali**.

```sql
SELECT Sede, COUNT(*) AS NumProg
FROM Impiegati
WHERE Ruolo = 'Programmatore'
GROUP BY Sede
```

**Come ragiona il GROUP BY**: le tuple che soddisfano la `WHERE` -> vengono raggruppate per valori uguali delle colonne in `GROUP BY` -> a ciascun gruppo si applica la funzione aggregata.

> la SELECT list può includere **solo le colonne di raggruppamento** (+ funzioni aggregate), <u>ma non altre</u>.

Quando la SELECT list include **solo** le colonne di raggruppamento, il risultato equivale a omettere il `GROUP BY` e usare `DISTINCT`:

```sql
SELECT Sede FROM Impiegati GROUP BY Sede
-- equivale a:
SELECT DISTINCT Sede FROM Impiegati
```

#### HAVING – condizioni sui gruppi:

`HAVING` seleziona alcuni gruppi sulla base di loro **proprietà "complessive"**. Ha per i gruppi la stessa funzione che `WHERE` ha per le tuple (**attenzione a non confonderle!**). <u>Deve essere preceduto da un `GROUP BY`</u>.

```sql
SELECT Sede, COUNT(*) AS NumImp
FROM Impiegati
GROUP BY Sede
HAVING COUNT(*) > 2
```

Nella `HAVING` si hanno due tipi di predicati:

- predicati con **funzioni aggregate** (es. `COUNT(*) > 2`) -> **solo** in `HAVING`;
- predicati sulle **colonne di raggruppamento** (es. `Sede <> 'S01'`) -> si possono spostare in `WHERE` (equivalenti).

#### Esempio completo (ordine delle clausole):

```sql
-- per ogni sede di Bologna con >= 3 impiegati: stipendio medio,
-- ordinato per stipendio medio decrescente e poi per sede
SELECT I.Sede, AVG(Stipendio) AS AvgStipendio
FROM Impiegati I, Sedi S
WHERE I.Sede = S.Sede
  AND S.Città = 'Bologna'
GROUP BY I.Sede
HAVING COUNT(*) >= 3
ORDER BY AvgStipendio DESC, I.Sede
```

> l'ordine delle clausole è **sempre** questo. Si ricorda che il `GROUP BY` **non implica alcun ordinamento** del risultato.

## Query innestate (subquery)

Oltre alla forma "flat", SQL permette condizioni basate sul risultato di altre interrogazioni (**subquery** / query innestate / nidificate).

```sql
SELECT CodImp                       -- impiegati delle sedi di Milano
FROM Impiegati
WHERE Sede IN (SELECT Sede FROM Sedi WHERE Città = 'Milano')
```

#### Subquery scalari:

Gli operatori di confronto `=, <, ...` si usano **solo** se la subquery restituisce **non più di una tupla** (subquery "scalare"). La presenza di **vincoli** (es. una chiave) può garantirlo.

```sql
SELECT CodImp                       -- impiegati con stipendio minimo
FROM Impiegati
WHERE Stipendio = (SELECT MIN(Stipendio) FROM Impiegati)
```

#### Caso generale (ANY / ALL):

Se la subquery può restituire più valori si usano:

- **`<op> ANY`** -> la relazione vale per **almeno uno** dei valori;
- **`<op> ALL`** -> la relazione vale per **tutti** i valori.

> la forma **`= ANY` equivale a `IN`**.

#### Livelli multipli di innestamento:

Una subquery può usare altre subquery; si risolve a partire dal **blocco più interno**.

> **attenzione alle negazioni!** Con `NOT IN` i blocchi innestati **non sono** in generale equivalenti a un join sulla disuguaglianza (`<>`).

#### Quantificatore esistenziale (EXISTS):

**`EXISTS (SELECT * ...)`** verifica se la subquery restituisce **almeno una tupla**; **`NOT EXISTS`** è vero se non ne restituisce alcuna.

> senza correlazione non è "interessante": il risultato della subquery è sempre lo stesso, non dipende dalla tupla del blocco esterno.

#### Subquery correlate:

Se la subquery fa riferimento a **variabili definite in un blocco esterno**, è **correlata**.

```sql
SELECT Sede                         -- sedi con almeno un programmatore
FROM Sedi S
WHERE EXISTS (SELECT * FROM Impiegati
              WHERE Ruolo = 'Programmatore' AND Sede = S.Sede)
```

Semantica: **per ogni tupla del blocco esterno**, considera il valore di `S.Sede` e risolvi la query innestata.

#### Unnesting (da innestata a piatta):

Spesso ci si può ricondurre a una forma **piatta**, ma non è sempre ovvio.

```sql
-- forma piatta equivalente all'esempio precedente
SELECT DISTINCT Sede
FROM Sedi S, Impiegati I
WHERE S.Sede = I.Sede AND I.Ruolo = 'Programmatore'
```

> la forma innestata è **"più procedurale"**. In una subquery **non** si possono usare operatori insiemistici (`UNION`, `INTERSECT`, `EXCEPT`) e una subquery può comparire **solo come operando destro** in un predicato.

**Con la negazione** le cose si complicano (es. "sedi senza programmatori"): la forma con `NOT EXISTS` è diretta, ma un semplice join su `<>` restituisce un risultato **sbagliato** (le sedi in cui lavora almeno un non-programmatore). Una forma piatta corretta usa un **`LEFT OUTER JOIN` + `IS NULL`**:

```sql
SELECT DISTINCT Sede
FROM Sedi S LEFT OUTER JOIN Impiegati I
  ON (S.Sede = I.Sede) AND (I.Ruolo = 'Programmatore')
WHERE I.CodImp IS NULL
```

#### Un esempio complesso (max con GROUP BY):

```sql
-- sede con il numero maggiore di programmatori
SELECT Sede, COUNT(CodImp) AS NumProg
FROM Impiegati I1
WHERE I1.Ruolo = 'Programmatore'
GROUP BY I1.Sede
HAVING COUNT(CodImp) >= ALL
       (SELECT COUNT(CodImp) FROM Impiegati I2
        WHERE I2.Ruolo = 'Programmatore' GROUP BY I2.Sede)

-- in alternativa con TOP:
SELECT TOP(1) WITH TIES Sede, COUNT(CodImp)
FROM Impiegati WHERE Ruolo = 'Programmatore'
GROUP BY Sede ORDER BY COUNT(CodImp) DESC
```

> **N.B.** molte query innestate **non** si possono semplificare con `TOP` (es. "impiegati con stipendio superiore alla media del proprio ruolo").

#### La divisione con le subquery:

"**Sedi in cui sono presenti tutti i ruoli**" equivale a "**Sedi in cui non esiste un ruolo non presente**":

```sql
SELECT Sede FROM Sedi S
WHERE NOT EXISTS
  (SELECT Ruolo FROM Impiegati I1               -- divisore
   WHERE NOT EXISTS
     (SELECT * FROM Impiegati I2
      WHERE S.Sede = I2.Sede AND I1.Ruolo = I2.Ruolo))
```

**Formulazione alternativa (con conteggio)** – equivale a "sedi per cui il numero di ruoli distinti è uguale al numero totale di ruoli":

```sql
SELECT Sede FROM Impiegati I
GROUP BY Sede
HAVING COUNT(DISTINCT Ruolo) =
       (SELECT COUNT(DISTINCT Ruolo) FROM Impiegati)
```

> il semplice conteggio **non è sempre possibile**: "sedi con tutti i ruoli della sede 'S03'" richiede un **vincolo**aggiuntivo (`WHERE Ruolo IN (SELECT Ruolo FROM Impiegati WHERE Sede = 'S03')`), altrimenti non equivale al confronto dei conteggi.

#### Subquery per aggiornamenti e CHECK:

Le subquery si usano per aggiornare dati in base al contenuto di altre tabelle (in `DELETE`/`UPDATE ... WHERE ... IN (subquery)`) e nella clausola **`CHECK`** per esprimere vincoli arbitrariamente complessi (anche **correlati**, es. "ogni sede deve avere almeno due programmatori").

## Viste e tabelle derivate

#### Definizione di viste:

`CREATE VIEW` definisce una **vista** (tabella _virtuale_). Le tuple della vista sono il risultato di una query **valutata dinamicamente** ogni volta che si fa riferimento alla vista.

```sql
CREATE VIEW ProgSedi(CodProg, CodSede)
AS SELECT P.CodProg, S.Sede
   FROM Prog P, Sedi S
   WHERE P.Città = S.Città
```

**Scopi delle viste**: visione personalizzata del DB (astrae dalla struttura logica); far fronte a modifiche dello schema logico senza ricompilare le applicazioni (**indipendenza logica**); semplificare query complesse; meccanismo per il **controllo degli accessi**. Una vista può referenziare altre viste.

#### Query complesse con VIEW:

Utili per confrontare i risultati di funzioni aggregate (es. "il MAX dei COUNT(*)", che **non** si può scrivere come `MAX(COUNT(*))`):

```sql
CREATE VIEW NumImp(Sede, Nimp)
AS SELECT Sede, COUNT(*) FROM Impiegati GROUP BY Sede

SELECT Sede FROM NumImp
WHERE Nimp = (SELECT MAX(NImp) FROM NumImp)
```

#### Aggiornabilità di viste:

Una vista è una funzione $y = V(r)$. L'aggiornamento (da $y$ a $y'$) è possibile **se e solo se** è univocamente definita la nuova istanza $r'$ tale che $y' = V(r')$, cioè se la vista è **invertibile** ($r' = V^{-1}(y')$). Data la complessità, ogni DBMS pone dei **limiti**.

> più comuni restrizioni -> **non aggiornabili** le viste il cui **blocco più esterno** contiene: `GROUP BY`; funzioni aggregate; `DISTINCT`; **join** (espliciti o impliciti).

La precisazione "**blocco più esterno**" è importante: una vista con join esplicito non è aggiornabile, ma la stessa logica riscritta con una subquery `IN` (senza join nel blocco esterno) **lo è**.

#### WITH CHECK OPTION:

Per le viste aggiornabili: un `INSERT` che non rispetta la specifica della vista comporterebbe che una successiva query sulla vista **non** restituisce la tupla appena inserita (!?). La clausola **`WITH CHECK OPTION`** garantisce che ogni tupla inserita nella vista sia anche **restituita** dalla vista.

- **`WITH CASCADED CHECK OPTION`** (default): se `V1` è definita su `V2`, verifica che la tupla soddisfi **sia `V1` sia `V2`**, indipendentemente da come è definita `V2`;
- **`WITH LOCAL CHECK OPTION`**: verifica solo `V1` e le viste da cui `V1` dipende **per cui** è stata specificata `WITH CHECK OPTION`.

#### Table expressions:

Una subquery nella `FROM` (o nella SELECT list) che definisce **dinamicamente** una tabella derivata.

```sql
-- per ogni sede: stipendio massimo e quanti impiegati lo percepiscono
SELECT SM.Sede, SM.MaxStip, COUNT(*) AS NumImpMaxStip
FROM Impiegati I, (SELECT Sede, MAX(Stipendio)
                   FROM Impiegati GROUP BY Sede) AS SM(Sede, MaxStip)
WHERE I.Sede = SM.Sede AND I.Stipendio = SM.MaxStip
GROUP BY SM.Sede, SM.MaxStip
```

Possono essere **correlate** ad altre tabelle della `FROM` (anche usate nella SELECT list).

> **limite**: se la stessa table expression compare due volte (es. "la sede con somma stipendi massima"), viene **ripetuta** -> valutazione inefficiente e formulazione poco leggibile.

#### Common table expressions (WITH):

Definiscono una **"vista temporanea"** (valida all'interno di **una singola query**) usabile come una `VIEW`.

```sql
WITH SediStip(Sede, TotStip)
AS (SELECT Sede, SUM(Stipendio) FROM Impiegati GROUP BY Sede)
SELECT Sede FROM SediStip
WHERE TotStip = (SELECT MAX(TotStip) FROM SediStip)
```

> si può usare solo nel **blocco più esterno** di un `SELECT` (anche in `CREATE VIEW`/`INSERT`).

#### Interrogazioni ricorsive:

Una query **ricorsiva** (es. "tutti gli antenati di Anna") **non è esprimibile in AR**, perché richiede un numero di self-join non noto a priori. Con le common table expressions si definisce una vista temporanea **ricorsiva** come unione di:

- una **subquery base** (non ricorsiva) che inizializza;
- una **subquery ricorsiva** che a ogni iterazione aggiunge le tuple risultanti dal join.

```sql
WITH Antenati(Persona, Avo)
AS (
   (SELECT Figlio, Genitore FROM Genitori)          -- subquery base
   UNION ALL                                         -- sempre UNION ALL!
   (SELECT G.Figlio, A.Avo                           -- subquery ricorsiva
    FROM Genitori G, Antenati A
    WHERE G.Genitore = A.Persona)
)
SELECT Avo FROM Antenati WHERE Persona = 'Anna'
```

Come "ci si ferma": a ogni iterazione il DBMS aggiunge ad `Antenati` solo le tuple che risultano dal join tra `Genitori` e le **sole tuple aggiunte al passo precedente**; quando non se ne aggiungono più, termina.

> nelle subquery **ricorsive** ci sono restrizioni: <u>non</u> si possono usare funzioni aggregate, `GROUP BY`, `SELECT DISTINCT`. Va sempre usato `UNION ALL`.

---

## DML – riepilogo

|istruzione|funzione|
|---|---|
|**SELECT**|esegue interrogazioni (query) sul DB|
|**INSERT**|inserisce nuove tuple (può usare il risultato di una query)|
|**DELETE**|cancella tuple (può usare condizioni)|
|**UPDATE**|modifica tuple (può usare condizioni)|

## DB di riferimento per gli esempi

**Impiegati**

|CodImp|Nome|Sede|Ruolo|Stipendio|
|---|---|---|---|---|
|E001|Rossi|S01|Analista|2000|
|E002|Verdi|S02|Sistemista|1500|
|E003|Bianchi|S01|Programmatore|1000|
|E004|Gialli|S03|Programmatore|1000|
|E005|Neri|S02|Analista|2500|
|E006|Grigi|S01|Sistemista|1100|
|E007|Violetti|S01|Programmatore|1000|
|E008|Aranci|S02|Programmatore|1200|

**Sedi**

|Sede|Responsabile|Città|
|---|---|---|
|S01|Biondi|Milano|
|S02|Mori|Bologna|
|S03|Fulvi|Milano|

**Progetti**

|CodProg|Città|
|---|---|
|P01|Milano|
|P01|Bologna|
|P02|Bologna|
