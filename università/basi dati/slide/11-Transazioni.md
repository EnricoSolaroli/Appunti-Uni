[11-Transazioni](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/secondo anno/base dati/slide/11-Transazioni.pdf>)

Una **transazione** è un'unità logica di elaborazione che corrisponde a un insieme di operazioni fisiche elementari (letture R / scritture W) sul DB. Deve valere il principio del "tutto o niente": in un trasferimento di fondi (–50 su un conto, +50 sull'altro) o si eseguono **tutte** le operazioni elementari o **nessuna**.

## Proprietà ACID

Un DBMS deve garantire che ogni transazione sia **ACID**:

- **Atomicity**: la transazione è un'unità di elaborazione -> o tutti i suoi effetti sono registrati (**committed**) o nessuno (**aborted**);
- **Consistency**: porta il DB da uno stato consistente a un altro stato consistente, senza violare i vincoli d'integrità;
- **Isolation**: esegue indipendentemente dalle altre -> l'effetto di esecuzioni concorrenti è equivalente a un'**esecuzione seriale**;
- **Durability**: gli effetti di una transazione andata a buon fine sono **persistenti** nel tempo, anche a fronte di guasti.

**Moduli del DBMS coinvolti**:

| Modulo                     | Ruolo                                    | Proprietà             |
| -------------------------- | ---------------------------------------- | --------------------- |
| Query Manager              | analizza, autorizza, ottimizza ed esegue | —                     |
| Transaction Manager        | coordina l'esecuzione delle transazioni  | —                     |
| DDL Compiler               | genera i controlli sui vincoli           | Consistency           |
| Concurrency Manager        | gestisce accessi concorrenti             | Isolation             |
| Logging & Recovery Manager | protegge dai malfunzionamenti            | Atomicity, Durability |
| Storage Manager            | gestisce i dispositivi di storage        | —                     |

## Modello e esiti di una transazione

Una transazione è una sequenza di R/W che, da uno stato iniziale consistente, porta a uno stato finale consistente. <u>Gli stati intermedi non devono necessariamente essere consistenti</u>. Inizia con `BEGIN` (implicito in SQL) e ha **2 soli esiti**:

- **COMMIT** (`COMMIT WORK`): termina correttamente, comunica al TM la fine delle operazioni;
- **ROLLBACK** (`ROLLBACK WORK`): termina in modo anticipato/scorretto. Può essere deciso dalla transazione stessa o imposto dal sistema (guasto, violazione di vincolo, deadlock). Il DBMS deve **disfare** (UNDO) le modifiche apportate.

#### Savepoint:

Il modello reale è più articolato: i **savepoint** permettono a una transazione di **disfare solo parzialmente** il lavoro svolto.

```sql
SAVEPOINT identifier                          -- crea un savepoint
ROLLBACK [WORK] TO [SAVEPOINT] identifier      -- rollback parziale, senza terminare la transazione
RELEASE SAVEPOINT identifier                   -- rimuove il savepoint
```

## Esecuzione seriale vs concorrente

- **Serial execution**: le transazioni sono eseguite in sequenza, una dopo l'altra;
- **Interleaved execution**: si alternano operazioni di transazioni diverse.

> l'esecuzione concorrente è necessaria per le **prestazioni**: mentre una transazione attende un'operazione di I/O un'altra usa la CPU -> aumenta il **throughput** (n. transazioni per unità di tempo). Con una transazione "lunga" e una "breve" riduce anche il **tempo medio di risposta**.

## Problemi di concorrenza

Se le transazioni concorrenti interferiscono, si hanno **4 anomalie base**:

|Anomalia|Dipendenza|Descrizione|
|---|---|---|
|**Lost Update**|write -> write|una modifica viene persa a causa dell'aggiornamento di un'altra transazione|
|**Dirty Read** (Uncommitted Dependency)|write -> read|si legge un dato scritto da una transazione non ancora committata (poi annullata)|
|**Unrepeatable Read** (Inconsistent analysis)|read -> write|due letture dello stesso dato danno valori diversi (altra transazione ha modificato nel frattempo)|
|**Phantom Row**|—|caso particolare di dirty read: inserimenti/cancellazioni di tuple che un'altra transazione dovrebbe logicamente considerare|

- **Lost Update**: $T_i$ legge $[O,v]$ e produce $[O,v+1]$; $T_j$ legge la vecchia versione $[O,v]$ e produce $[O,v+2]$ -> la modifica di $T_i$ è persa.
- **Dirty Read**: $T_i$ produce $[O,v+1]$, letta da $T_j$, ma $[O,v+1]$ non permane (rollback di $T_i$).
- **Unrepeatable Read**: $T_i$ legge $[O,v]$, $T_j$ produce $[O,v+1]$ e committa, poi $T_i$ rilegge trovando un valore diverso.
- **Phantom Row**: `T1` fa un `UPDATE ... WHERE Sede='Bologna'` mentre `T2` fa `INSERT` di una nuova tupla con Sede='Bologna' -> `T1` "non vede" la tupla fantasma.

## Cascading Abort e Recoverability

Quando una transazione T fallisce, il Recovery Manager deve annullare anche gli effetti delle transazioni che hanno letto dati scritti da T (**dirty read**) -> **cascading abort**, una catena di fallimenti.

> il problema si aggrava se il cascading abort coinvolge transazioni che hanno **già eseguito commit**: entrambe le soluzioni sarebbero scorrette (lasciare gli effetti viola la semantica di read, annullarli viola quella di commit).

#### Recoverability (ripristinabilità):

Una transazione è **recoverable** se le è impedito di eseguire commit prima che tutte le transazioni da cui legge abbiano fatto commit o abort.

- $T_j$ **legge da** $T_i$ se legge un dato scritto da $T_i$;
- un'esecuzione è **recoverable** se, per ogni T che committa, il suo commit segue quello di ogni transazione da cui T legge.

p.s. la recoverability evita di far fallire transazioni committate, ma <u>non rimuove il cascading abort per le transazioni attive</u>.

#### Avoiding Cascading Abort (ACA):

Per **evitare del tutto** il cascading abort basta impedire le dirty read -> ritardare ogni `read[x]` finché tutte le transazioni che hanno fatto `write[x]` sono state committate o abortite.

## Isolation tramite Lock

I **lock** ("blocchi") disciplinano l'accesso a risorse condivise (tupla, relazione, indice, …). Per operare bisogna prima **acquisire** il lock; la richiesta è **implicita** (non visibile a livello SQL). Tipi base:

- **S (Shared)**: necessario per **leggere**;
- **X (eXclusive)**: necessario per **scrivere/modificare**.

**Tabella di compatibilità**: il **Lock Manager (LM)** accorda o meno il lock:

|T richiede \ altra detiene|S|X|
|---|---|---|
|**S**|OK|NO|
|**X**|NO|NO|

> Lo **Scheduler** estende il TM con il LM. Il TM invia a LM richieste `LOCK(tid, item, mode)` / `UNLOCK(tid, item)`; solo dopo la conferma del LM inoltra la richiesta al **Data Manager (DM)**.

#### Strict 2PL:

Il **two phase locking** è il protocollo più usato; nei DBMS centralizzati si usa la variante **Strict 2PL**:

- il lock è assegnato a T solo se non vi sono lock incompatibili detenuti da altre;
- un lock acquisito non può essere rilasciato prima della conferma dell'operazione da parte del DM;
- <u>tutti i lock vengono rilasciati in una volta sola al termine della transazione</u> (COMMIT o ABORT).

> se una transazione prima acquisisce tutti i lock e li rilascia solo al termine -> **isolamento completo garantito**. Effetto collaterale: possibili **deadlock** (stallo), risolti facendo abortire una transazione.

#### 2PL (versione base):

Richiede solo che, dopo il rilascio di un lock, T non ne possa acquisire altri -> due fasi:

- **growing phase**: la transazione può solo **acquisire** lock;
- **shrinking phase** (dal primo rilascio): può solo **rilasciare** lock.

p.s. il 2PL base garantisce isolamento <u>solo in assenza di malfunzionamenti</u>: permette dirty read (esecuzioni non ripristinabili). Lo **Strict 2PL** risolve invece Lost Update, Dirty Read e Unrepeatable Read.

#### Phantom Row (soluzioni):

Il problema più difficile; soluzioni in ordine di concorrenza decrescente:

- **S-lock sull'intera tabella** + X-lock sulle tuple da modificare;
- **predicate lock**: lock su tutte le tuple che soddisfano un predicato (es. `Sede='Bologna'`);
- se esiste un indice su `Sede`, lock sulla **foglia** che contiene 'Bologna'.

## Livelli di isolamento in SQL

Operare a un livello meno stringente **aumenta la concorrenza** (migliori prestazioni) a costo di ammettere alcune anomalie. Lo standard SQL definisce **4 livelli**:

|Isolation Level|Phantom|Unrepeatable Read|Dirty Read|Lost Update|
|---|---|---|---|---|
|**Serializable**|NO|NO|NO|NO|
|**Repeatable Read**|SÌ|NO|NO|NO|
|**Read Committed**|SÌ|SÌ|NO|NO|
|**Read Uncommitted**|SÌ|SÌ|SÌ|NO|

```sql
SET [GLOBAL | SESSION] TRANSACTION ISOLATION LEVEL <level>
```

## Transazioni e Locking in MySQL

- inizio con `BEGIN WORK`, fine con `COMMIT`/`ROLLBACK`;
- variabile `AUTOCOMMIT`: se `=1` (default) ogni comando è una transazione con commit automatico; se `=0` i comandi operano come un'unica transazione fino a `COMMIT` esplicito;
- serve creare le tabelle con `TYPE = InnoDB`.

#### InnoDB – Shared vs Exclusive:

Row-level locking con lock **S** (lettura) e **X** (aggiornamento/cancellazione). Se $T_1$ detiene S su una riga: un S di $T_2$ è concesso subito, un X di $T_2$ deve attendere. Se $T_1$ detiene X: qualsiasi richiesta di $T_2$ deve attendere il rilascio.

#### InnoDB – Intention Locks:

Lock **a livello di tabella** che indicano quale lock una transazione richiederà su una riga -> supporto al locking a **granularità multiple**:

- **IS (Intention Shared)**: intende richiedere S su singole righe (`SELECT ... FOR SHARE`);
- **IX (Intention Exclusive)**: intende richiedere X su singole righe (`SELECT ... FOR UPDATE`).

Protocollo: per un S su una riga serve prima IS (o IX) sulla tabella; per un X su una riga serve prima IX sulla tabella. Gli intention lock bloccano solo le richieste a livello di intera tabella (es. `LOCK TABLES ... WRITE`).

|Table lock|X|IX|S|IS|
|---|---|---|---|---|
|**X**|Conflict|Conflict|Conflict|Conflict|
|**IX**|Conflict|Compatible|Conflict|Compatible|
|**S**|Conflict|Conflict|Compatible|Compatible|
|**IS**|Conflict|Compatible|Compatible|Compatible|

#### Livelli di isolamento in MySQL (esempio con P_QTADISP inizialmente 100, T1 fa –10):

- **READ_UNCOMMITTED**: T2 legge il valore aggiornato (**90**) anche se non committed;
- **READ_COMMITTED**: T2 legge l'ultimo valore **committed** (100 finché T1 non committa, poi 90);
- **REPEATABLE_READ** (*default InnoDB*): T2 legge sempre il valore della **prima lettura** (100), letture consecutive consistenti nella stessa transazione;
- **SERIALIZABLE**: T1 va in **WAIT** finché T2 non committa -> massimo isolamento.

## Atomicity e Durability: gestione dei guasti

Tre tipi di **malfunzionamenti**:

- **Transaction failure**: una transazione abortisce (violazione vincoli, accesso a dati protetti, deadlock) -> nessuna perdita di dati in memoria;
- **System failure**: anomalia HW/SW dell'unità centrale (es. interruzione alimentazione) -> **sopravvive la memoria permanente**, si **perde la temporanea**;
- **Media failure**: il contenuto **persistente** del DB viene danneggiato.

**Azioni di ripristino**:

|Azione|Quando|Interessa|
|---|---|---|
|**Transaction Undo**|abort di una transazione|la singola transazione|
|**Global Undo**|system failure|transazioni non completate al guasto|
|**Partial Redo**|system failure|transazioni completate al guasto|
|**Global Redo**|media failure (da dump)|ridondanza completa|

## Strumenti: Dump e Log

- **Database Dump**: copia di archivio del DB;
- **Log file** ("giornale"): registra le operazioni di modifica. Per ogni pagina P modificata da T:

`(LSN, T, PID, before(P), after(P), prevLSN)`

- **LSN**: Log Sequence Number (progressivo del record);
- **T**: identificatore della transazione;
- **PID**: identificatore della pagina;
- **before(P)** / **after(P)**: contenuto di P **prima** / **dopo** la modifica;
- **prevLSN**: LSN del record precedente relativo a T.

> il Log contiene anche record di `BEGIN`, `COMMIT`, `ABORT`. Le pure letture **non** generano record.

#### Transaction Abort (UNDO):

Il rollback scrive prima un abort record, poi **disfa** le azioni di T scandendo il Log **a ritroso** (via `prevLSN`) e ripristinando le **before image**.

## Write Ahead Log (WAL)

> **WAL Protocol**: se una transazione deve essere disfatta, le **before image** devono essere nel Log **prima** che le pagine del DB siano modificate -> <u>si scrive prima sul Log e poi sul DB</u>.

- forzare il log record prima della pagina dati su disco garantisce **Atomicity**;
- forzare tutti i log record prima del commit garantisce **Durability**.

In caso di fallimento la lettura del Log avviene **a ritroso** e termina al **begin record** di T. La responsabilità del WAL è del **Buffer Manager** (gestisce sia i buffer del DB sia quelli del Log). Ordine delle operazioni: `setDirty` -> genera log record -> scrive log record su disco -> scrive P su disco.

## Gestione dei buffer: STEAL / NO STEAL

Quando T modifica una pagina P, il Buffer Manager può:

- **NO-STEAL**: scrive P su disco **solo dopo il COMMIT** di T -> mai bisogno di UNDO, ma rischio di **esaurire la memoria centrale**. La after image resta solo nel Log fino al commit, poi copiata nel DB. Anche detta **update ritardato / a 2 fasi**;
- **STEAL**: scrive P **quando conviene**, anche prima della terminazione di T -> può servire l'UNDO. Anche detta **update immediato / a 1 fase**.

## Recovery per tipo di guasto

- **Transaction failure**: con STEAL alcune pagine di T potrebbero già essere su disco -> UNDO scandendo il Log a ritroso e ripristinando le before image;
- **System failure**: il Recovery Manager avvia la procedura di **restart**. `If (T,commit) non è nel Log then Undo(T)`. Con politica **NO STEAL** si evita l'Undo (**NoUndo**);
- **Media failure**: ripristino dal **Dump** + Log -> **redo** delle transazioni committed e **undo** di quelle senza commit record.

#### Checkpoint:

Per ridurre i tempi di restart si esegue periodicamente un **checkpoint**: scrittura forzata su disco delle pagine modificate, registrata con un record **CKP** sul Log.

> se T ha eseguito COMMIT **prima** del checkpoint si è certi che T **non deve essere rifatta**.

p.s. se il **Log si corrompe** il ripristino fallisce -> è comune mantenerlo in **duplice copia**.
