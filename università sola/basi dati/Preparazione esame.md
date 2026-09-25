## definizioni

### Modello Relazionale e Normalizzazione

* **==Superchiave==:** Insieme di attributi che identifica in modo univoco una tupla (riga) all'interno di una relazione. In altre parole, non possono esistere due righe distinte con gli stessi identici valori per quegli attributi. Una superchiave determina funzionalmente tutti gli altri attributi dello schema.
* **==Chiave==:** E definita come una superchiave minimale. Identificatore univoco dal quale non e possibile rimuovere alcun attributo senza fargli perdere la proprieta di essere una superchiave.
* **Dipendenza Funzionale (==FD==):** Dati uno schema R(T) e due sottoinsiemi di attributi X e Y, in un'istanza r vale la FD X -> Y se, per ogni coppia di tuple con gli stessi valori su X, risulta che hanno gli stessi valori anche su Y.
* **==Decomposizione senza perdita== (Lossless):** Il join naturale delle relazioni decomposte restituisce esattamente la relazione originaria, senza tuple spurie e senza perdere informazioni.
* ==**Decomposizione che preserva le dipendenze==:** L'insieme delle FD originali puo essere garantito controllando solo i vincoli interni alle singole relazioni decomposte, senza dover fare costosi join.
* **Prima Forma Normale (==1NF==):** Il dominio di ciascun attributo e costituito da valori atomici (indivisibili). Niente attributi multivalore o relazioni nidificate.
* **Seconda Forma Normale (==2NF==):** È in 1NF e ogni attributo non primo (che non fa parte di nessuna chiave) dipende in modo completo da ogni chiave candidata. Niente dipendenze parziali da chiavi composte.
* **Terza Forma Normale (==3NF==):** È in 2NF e per ogni FD non banale X -> Y, o X è una superchiave, oppure Y e un attributo primo. (Elimina le dipendenze transitive tra attributi non chiave).
* **Forma Normale di Boyce-Codd (==BCNF==):** Regola piu stringente della 3NF. Nella BCNF ogni determinante X deve essere una superchiave, senza l'eccezione dell'attributo primo.

### Gestione delle Transazioni (Concorrenza)

* **Proprieta ACID - ==Atomicity== (Atomicita):** Principio del "tutto o niente". O tutte le operazioni vengono eseguite e registrate (Commit), o nessuna (Rollback).
* **Proprieta ACID - ==Consistency== (Consistenza):** La transazione deve portare il DB da uno stato valido a un altro stato valido, rispettando i vincoli di integrita.
* **Proprieta ACID - ==Isolation== (Isolamento):** L'esecuzione concorrente produce un risultato equivalente a quello che si otterrebbe eseguendo le transazioni in modo seriale.
* **Proprieta ACID - ==Durability== (Durabilita):** Dopo il commit, gli effetti sono permanenti e sopravvivono ai guasti.
* ==**Lost Update== (Aggiornamento Perduto):** Due transazioni leggono e modificano lo stesso dato. L'ultima scrittura sovrascrive e fa "perdere" il lavoro della prima.
* ==**Dirty Read ==(Lettura Sporca):** Una transazione legge un dato modificato da un'altra che non ha ancora fatto commit. Se la seconda fa rollback, la prima ha letto un dato "fantasma".
* ==**Unrepeatable Read== (Lettura Non Ripetibile):** Una transazione legge lo stesso record due volte e trova valori diversi, perche un'altra transazione lo ha modificato nel frattempo.
* **==Phantom Read== (Lettura Fantasma):** Simile alla non ripetibile, ma riguarda nuove righe. T1 fa una query ("Tutti gli impiegati"), T2 inserisce un nuovo impiegato. Se T1 ripete la query, appare una "riga fantasma".

### Alberi B-Tree e B+-Tree

* **==B-Tree==:** I dati veri e propri (o i puntatori ai record) sono memorizzati in tutti i nodi (radice, intermedi, foglie).
* ==**B+-Tree==:** I dati si trovano solo nelle foglie. I nodi interni contengono solo le chiavi come "semafori" per la navigazione. Le foglie sono collegate in una lista sequenziale per velocizzare le query di range.

## risposte modello alle domande teoriche

La domanda teorica è sempre il **primo sotto-punto** dell'Es. 2 o dell'Es. 3 e vale pochi minuti: il testo dice "brevemente" e nelle soluzioni il prof risponde in una riga o due. Quindi ==5-10 righe mirate, non un tema==.
Regole di scrittura:
* se il testo dice "si definisca **formalmente**", serve la **notazione** (schema R(T), sottoinsiemi X e Y, quantificazione sulle tuple), non la spiegazione a parole;
* definisci **prima** il concetto, **poi** aggiungi la conseguenza pratica o l'esempio: è la riga finale che fa vedere che hai capito il perché;
* se una definizione ne richiama un'altra (la 2NF richiama "dipendenza completa"), definiscila la prima volta e poi richiamala: risparmi righe.

Quante volte è uscita ciascuna, sui 10 appelli con soluzione:

| Argomento | Volte |
|---|---|
| Dipendenza funzionale | 4 |
| B-tree vs B+-tree | 3 (+ negli esercizi di riepilogo) |
| 1NF / 2NF / 3NF formali | 3 |
| Decomposizione senza perdita + che preserva le dipendenze | 2 |
| Dirty read / lost update / unrepeatable read | 2 |

### Dipendenza funzionale

> Dato uno schema di relazione R(T) e due sottoinsiemi di attributi X, Y ⊆ T, si dice che su R vale la dipendenza funzionale X → Y se, per ogni istanza legale r di R e per ogni coppia di tuple t1, t2 ∈ r, da t1[X] = t2[X] segue t1[Y] = t2[Y]. I valori di X determinano quindi univocamente i valori di Y; X è detto **determinante**.
> La dipendenza è **non banale** se Y non è contenuto in X. È **completa** (o totale) se non esiste alcun sottoinsieme proprio X' ⊂ X tale che X' → Y; in caso contrario è **parziale**.

Righe di chiusura da aggiungere se c'è spazio:
* una FD è un **vincolo sullo schema**, non una proprietà della singola istanza: un'istanza può soddisfarla per caso, ma la dipendenza vale solo se deve valere per tutte le istanze legali;
* X è **superchiave** di R se e solo se X → T.

### Prima, seconda e terza forma normale

> **1NF** — Uno schema è in prima forma normale se il dominio di ciascun attributo è costituito da valori **atomici**, cioè indivisibili: non sono ammessi attributi multivalore o composti né relazioni nidificate. Tutte le tuple hanno lo stesso numero di componenti ed esiste una chiave.
> **2NF** — Uno schema è in seconda forma normale se è in 1NF e ogni attributo **non primo** (che non appartiene ad alcuna chiave candidata) dipende funzionalmente in modo **completo** da ogni chiave candidata. Equivalentemente: non esistono dipendenze **parziali** di attributi non primi da una parte di una chiave composta.
> **3NF** — Uno schema è in terza forma normale se è in 2NF e, per ogni dipendenza funzionale non banale X → A che vale sullo schema, o X è una **superchiave**, oppure A è un attributo **primo**. Equivalentemente: non esistono dipendenze **transitive** di attributi non primi dalla chiave.

Se chiedono anche la **BCNF**: è la 3NF **senza l'eccezione dell'attributo primo** — ogni determinante di una FD non banale deve essere superchiave. È più restrittiva e non sempre raggiungibile preservando le dipendenze.

### Decomposizione senza perdita e che preserva le dipendenze

> **Senza perdita (lossless join)** — Sia R(T) decomposto in R1(T1) e R2(T2), con T1 ∪ T2 = T. La decomposizione è senza perdita se, per ogni istanza legale r di R, vale π T1(r) ⊳⊲ π T2(r) = r: il join naturale delle proiezioni restituisce **esattamente** la relazione di partenza, senza generare **tuple spurie** e senza perdere informazione.
> Condizione sufficiente: l'insieme degli attributi comuni T1 ∩ T2 è **superchiave di almeno una** delle due relazioni.
> **Che preserva le dipendenze** — La decomposizione preserva le dipendenze se ogni dipendenza funzionale dello schema originario è deducibile dall'unione delle dipendenze proiettate sui singoli schemi decomposti. In pratica: ogni vincolo può essere verificato **all'interno di una sola relazione**, senza dover ricostruire l'originale con un join costoso.

Riga di chiusura: le due proprietà sono **indipendenti** fra loro; la sintesi in 3NF le garantisce entrambe, mentre la decomposizione in BCNF garantisce sempre l'assenza di perdita ma può costringere a rinunciare alla conservazione delle dipendenze.

### B-tree e B+-tree

La consegna dice "evidenziandone le principali **differenze**": due definizioni separate senza confronto valgono metà risposta.

> Entrambi sono alberi a più vie **perfettamente bilanciati** (tutte le foglie allo stesso livello) pensati per la memoria secondaria: ogni nodo corrisponde a un blocco e contiene da g a 2g chiavi (la radice da 1 a 2g). Garantiscono bilanciamento rispetto ai blocchi, occupazione minima del 50% e costo di aggiornamento limitato.
> La differenza sta nel **ruolo dei valori di chiave**. Nel **B-tree** ogni chiave ha doppia funzione: fa da separatore per guidare la ricerca *e* dà accesso al record, perché i puntatori ai record (RID) sono presenti in tutti i nodi. Di conseguenza la ricerca di un singolo valore può terminare prima di raggiungere le foglie, ma le elaborazioni sequenziali e le query di range sono inefficienti, perché per trovare il successore di una chiave si può dover risalire e ridiscendere l'albero.
> Nel **B+-tree** le due funzioni sono separate: tutti i valori di chiave, con i relativi puntatori ai record, stanno **nelle foglie**; radice e nodi interni contengono soltanto separatori e puntatori ai figli, e costituiscono una "mappa" dei cammini. Ne derivano tre conseguenze: i nodi interni sono più leggeri, quindi a parità di dimensione del blocco l'ordine è maggiore e l'albero più basso; le **foglie sono concatenate in una lista**, per cui scansioni ordinate e query di range sono efficienti; il costo di ricerca è uniforme e pari all'altezza h. Un separatore, inoltre, non deve necessariamente corrispondere a un valore di chiave presente nel file dati.
> È per questo che il B+-tree è la struttura di indicizzazione standard nei DBMS reali.

Le sei righe da non dimenticare se rispondi in forma di tabella: dove stanno i valori di chiave / dove stanno i RID / cosa contengono i nodi interni / ordine a parità di blocco / foglie collegate sì-no / efficienza delle query di range.

### Dirty read, lost update, unrepeatable read

> **Lost update (aggiornamento perduto)** — Due transazioni leggono lo stesso dato X prima che una delle due lo riscriva: T1 legge X, T2 legge X, T1 scrive X, T2 scrive X. L'aggiornamento di T1 viene sovrascritto da quello di T2 e va perso, benché entrambe le transazioni terminino correttamente.
> **Dirty read (lettura sporca)** — Una transazione legge un dato scritto da un'altra transazione che non ha ancora eseguito il commit. Se quest'ultima esegue un rollback, la prima ha letto un valore che non è mai appartenuto a uno stato consistente della base di dati, e può averlo già propagato ad altri dati.
> **Unrepeatable read (lettura non ripetibile)** — Una transazione legge due volte lo stesso dato nel corso della propria esecuzione e ottiene valori diversi, perché fra le due letture un'altra transazione lo ha modificato ed ha eseguito il commit: la lettura non è ripetibile.
> **Phantom read** — variante della precedente che riguarda un **insieme** di tuple: fra due esecuzioni della stessa interrogazione un'altra transazione inserisce o cancella righe che soddisfano il predicato, e compaiono tuple "fantasma".

Se poi il testo mostra uno schedule e chiede quale problema si verifica, rispondi in **una riga**. Discriminanti rapidi: c'è un ==ROLLBACK== → dirty read; due letture dello stesso dato con una scrittura committata in mezzo → unrepeatable read; due letture che precedono **entrambe** le scritture → lost update.

### Domande meno probabili ma possibili

* **Superchiave / chiave** → «Una superchiave è un insieme di attributi che identifica univocamente ogni tupla della relazione, cioè che determina funzionalmente tutti gli attributi dello schema. Una chiave (candidata) è una superchiave **minimale**: non è possibile rimuoverne alcun attributo senza far perdere la proprietà di univocità.»
* **Proprietà ACID** → una riga ciascuna: atomicità (tutto o niente, commit/rollback), consistenza (da uno stato valido a un altro stato valido), isolamento (l'esecuzione concorrente è equivalente a una seriale), durabilità (dopo il commit gli effetti sopravvivono ai guasti).
* **Perché normalizzare** → per eliminare le anomalie di inserimento, cancellazione e aggiornamento causate dalla ridondanza, e non per motivi di efficienza: la normalizzazione può anzi rendere necessari più join.

## pattern/tecniche per risoluzione esercizi

### Progettazione Concettuale (E/R)

È **sempre l'Esercizio 1** (10 compiti su 10), e la consegna chiede sempre le stesse due cose in più rispetto al disegno — formulazione lunga (7 compiti su 10):
> «Si definisca il relativo schema E/R (nella metodologia proposta a lezione) e si indichino esplicitamente eventuali **attributi derivati** presenti nelle specifiche, commentandoli adeguatamente. Si evidenzino inoltre eventuali **vincoli inespressi**.»

oppure breve (i tre compiti del 2022): «Si evidenzino eventuali vincoli inespressi e attributi derivati».

Quindi la risposta completa ha ==tre pezzi, non solo il disegno==:
1. lo schema E/R;
2. elenco puntato "**Attributi derivati:**" con il commento su come si calcolano;
3. elenco puntato "**Vincoli inespressi:**".

Nelle soluzioni ufficiali il prof disegna e basta: i punti 2 e 3 sono i più facili da portare a casa, perché li chiede ogni volta e quasi nessuno li scrive.

Come smontare le specifiche:
* **Sostantivi con proprietà proprie → entità**; sostantivi semplici e senza proprietà → attributi.
* **I verbi sono le associazioni** (nome in minuscolo tra le due gambe).
* "identificato da un codice univoco" → è quello l'`id:`, che va come **ultima riga del box**.
* Un attributo che nasce dall'incontro di due entità (compenso, percentuale di responsabilità, quantità, voto) è attributo **dell'associazione**, non dell'entità.
* Se la stessa entità compare due volte con ruoli diversi (mittente/destinatario, partenza/arrivo, ritiro/consegna) → **associazione ricorsiva con i due ruoli nominati esplicitamente** sulle gambe.

Traduttore specifiche → costrutto (le formule ricorrono quasi identiche di appello in appello):

| Nel testo | Nello schema |
|---|---|
| "uno o più X" | cardinalità `1-N` |
| "può / eventualmente / alcuni" | cardinalità minima `0` |
| "esattamente due veicoli" | cardinalità esatta `2-2` |
| "è possibile inserire fino a 3 immagini" | attributo multivalore `immagine[0-3]` |
| elenco ripetibile (materiali, organizzatori, telefoni) | `Materiale[1-N]` |
| "…ma solo in sfilate/date diverse" | **identificazione esterna**: `id: assoc1.ENTITÀ + assoc2.ENTITÀ + data` |
| "di ogni X si memorizza…, di ogni Y oltre ai dati precedenti anche…" | **gerarchia IS-A** |
| il multivalore ha struttura propria (giorno + ora apertura + ora chiusura) | va bene sia `orario[1-N]` composto sia promuoverlo a **entità debole** |

**Vincoli inespressi** = quelli che il modello E/R *non riesce* a rappresentare. Le famiglie che ricorrono:
* **di dominio**: "voto da 1 a 5", "durata di uno, due o tre anni", "le percentuali sommano a 100";
* **temporali**: "ha 30 giorni per lasciare la recensione", "la data di fine è successiva a quella di inizio";
* **che legano due associazioni diverse**: "se un impiegato figura come sinistrato non può essere designato supervisore di quel sinistro", "la mail di risposta deve riferirsi allo stesso annuncio dell'originale";
* **di coerenza fra istanze**: "le figurine cedute da un utente sono quelle ricevute dall'altro";
* **di derivabilità**: "il totale è la somma dei …".

> ⚠️ Non elencare come "inespressi" i vincoli che invece **hai già espresso** nel disegno: cardinalità esatte (`2-2`), massimo del multivalore (`[0-3]`), identificazione esterna. Quelli citali come espressi — è un modo gratuito per far vedere che li hai visti.

**Se la specifica è ambigua** non tirare a indovinare in silenzio: metti una riga di ipotesi prima dello schema («Nell'ipotesi che una collezione possa essere presentata in più sfilate: …»). È esattamente ciò che fa il prof nelle soluzioni, e ti copre rispetto alla lettura alternativa.

**Attributi derivati**: nel disegno si scrivono come attributi normali (nessuna notazione speciale). A volte la scelta migliore è **non metterli** e modellare invece le entità da cui si ricavano (il prezzo di un noleggio non sta in PREVENTIVO: si ricava da TARIFFARIO e FASCE DISTANZA). Anche in quel caso scrivi che l'hai omesso e perché.

### Progettazione Logica: Associazioni e Attributi

Nella fase di ristrutturazione logica, gli attributi multivalore vanno sempre eliminati.
Tre strategie se si trovano su un'associazione 1:1:
1. **Nuova tabella dedicata:** Chiave = (PK dell'entita + Valore attributo/Numero d'ordine).
2. **Colonne multiple:** Se il limite massimo K e noto, aggiungi K colonne.
3. **Reificazione:** Trasforma l'associazione in entita debole. Genera due associazioni fisse (1,1) verso le entita originali, importandone le chiavi primarie a cascata per formare il proprio identificatore.

Come tradurre le associazioni in tabelle:
* **1:N (Uno a Molti):** Inglobata importando la PK del lato N come chiave esterna nella tabella del lato con cardinalita max 1 (insieme ad eventuali attributi dell'associazione).
* **1:1 (Uno a Uno):** Si importa la chiave di un'entita nell'altra (preferibilmente nel lato con cardinalita minima 1 per evitare NULL) o si fondono in un'unica tabella.
* **N:N (Molti a Molti) / n-arie:** Richiedono sempre la creazione di una nuova tabella separata (tabella ponte). Per le n-arie la nuova tabella importa le chiavi di **tutte** le entità collegate.

⚠️ Precisazione sui **multivalore** (correzione della lista qui sopra): la scelta **non dipende dal tipo di associazione**, dipende dall'attributo, e le opzioni delle slide sono queste tre:
* cardinalità `(1,N)` senza limite noto → **nuova entità/tabella**;
* cardinalità massima K nota → **K colonne** (quelle oltre il minimo ammettono NULL → asterisco);
* se lo stesso valore può ripetersi nella stessa istanza serve un **numero d'ordine** nella chiave; se invece compare una volta sola, il valore stesso può fare da identificatore.

La **reificazione** non è una strategia per i multivalore: è la traduzione di un'associazione N:M che ha identità propria (`CAPO_SFILATA`, `VEICOLO_IN_SINISTRO`), cioè il caso dell'entità associativa.

**Gerarchie IS-A** — compaiono quasi sempre negli schemi da tradurre, a volte annidate su due livelli:

| Copertura | Collasso verso il basso |
|---|---|
| totale + esclusiva `(t,e)` | ✅ possibile e consigliato — è l'unico caso in cui è la scelta migliore |
| totale + sovrapposta `(t,s)` | ⚠️ tecnicamente possibile ma **sconsigliato**: duplica gli attributi del padre nelle figlie |
| parziale `(p,e)` / `(p,s)` | ❌ ==impossibile==: le istanze del padre che non stanno in nessuna figlia andrebbero perse |

Le altre due opzioni (collasso verso l'alto, oppure mantenere tutte le entità collegate con associazioni 1-1 e identificazione esterna) sono **sempre possibili**, qualunque sia la copertura.
Il collasso verso l'alto richiede l'attributo selettore: N valori se `(t,e)`, N+1 se `(p,e)`, **un booleano per ogni sotto-entità** se sovrapposta (vanno dichiarati in nota sotto lo schema). Frase da riusare (è quella del prof, valida quando la copertura è parziale):
> «Essendo la copertura della gerarchia parziale e sovrapposta non è possibile operare un collasso verso il basso. Si opterà per un collasso verso l'alto; in alternativa sarebbe anche accettabile il mantenimento di tutte le entità, con collegamento delle sotto-entità all'entità padre tramite associazioni 1-1.»
Se invece è solo sovrapposta ma totale, scrivi "sconsigliato perché introdurrebbe ridondanza", non "impossibile".

**Entità con identificazione esterna** (`id: associazione.ENTITÀ + attributo`): la chiave importata ==entra nella chiave primaria==, non è una FK qualsiasi. Con identificazioni a cascata si parte dalle entità non identificate esternamente e si propaga.
es. `id: organizzazione.EDIZIONE + NumStand` → `STAND (DataInizio: EDIZIONI, NumStand, Posizione, Superficie)`

> Per non sbagliare il verso delle 1:N, usa la formulazione letterale del prof, che non si presta ad ambiguità: ==«la traduzione delle associazioni 1-N avviene importando la chiave nell'entità che partecipa all'associazione con cardinalità `1-1` o `0-1`»== (evita di ragionare in termini di "lato N", che è ambiguo).

**Come si scrive lo schema finale** (notazione del prof, riprodurla vale punti):
* nomi delle relazioni **MAIUSCOLI e al plurale** (l'entità E/R è singolare: RIVISTA → RIVISTE);
* chiave primaria **sottolineata**;
* chiave esterna: `attributo: RELAZIONE` → `codSocietà: SOCIETÀ`;
* chiave esterna **composta**: `(codCorso, dataInizio): EDIZIONICORSI`;
* attributo che ammette NULL: **asterisco subito dopo il nome**, sia che sia una FK (`CodComitiva*: COMITIVE`) sia che sia un attributo normale (`peso*`, `DataFine*`, `telefono2*`). Lo genera ogni partecipazione `0-1` importata e ogni colonna K-esima di un multivalore con minimo < K;
* vincoli extra su riga indentata sotto la relazione: `UNIQUE(codiceScheda, descrizione)`;
* note esplicative sotto lo schema, introdotte da `*`.

Prima dello schema metti **2-3 righe di motivazione** delle scelte non ovvie (multivalore, gerarchia, 1:1) e chiudi con "Lo schema relazionale risultante è:". Se il testo dice "motivando le scelte effettuate", quelle righe sono obbligatorie.

Varianti della consegna da leggere con attenzione:
* «utilizzando il **minor numero di relazioni possibili**» → accorpa in modo aggressivo: 1:1 fuse, 1:N sempre inglobate, nessuna tabella separata per le associazioni che si possono importare.
* «progettazione logica **delle sole** entità X, Y, Z» → traduci solo quelle, non tutto lo schema.

### Normalizzazione

Algoritmo in 4 Passaggi per esercizi:
1. **Individuare la Chiave e le FD:** Trova la PK e scrivi tutte le dipendenze X -> Y.
2. **Classificare le FD:**
   * Parziale: Un attributo dipende solo da una parte della chiave primaria composta.
   * Transitiva: Un attributo non chiave determina un altro non chiave.
3. **Dichiarare la Forma Normale (NF) attuale.**
4. **Scomporre lo schema (Sintesi in 3NF):** Per ogni FD problematica, crea una nuova tabella con X e Y. Il determinante X diventa la primary key. Nella tabella originale, elimina Y ma mantieni X come chiave esterna.

Dettagli che il prof si aspetta alla lettera:
* **Marca la tipologia di ogni FD problematica a fine riga**: il prof alterna `(P)`/`(T)`, `(DP)`/`(DT)` e `(parziale)` per esteso — va bene qualunque delle tre. Il testo lo chiede in 5 compiti su 7 ("specificandone il tipo in caso di dipendenze «problematiche»"), ma scriverlo comunque non costa nulla.
* ==Quando il testo chiede in quale forma normale si trova lo schema, la risposta è **1NF**== (4 volte su 4): le dipendenze parziali dalla chiave composta ci sono sempre. Motivala in una riga: «Lo schema è in 1NF a causa della presenza di dipendenze parziali dalla chiave della relazione».
* Se un determinante non porta con sé altri attributi, **crea comunque la relazione-lookup a un solo attributo** (`SQUADRE(squadra)`, `STAGIONI(stagione)`): serve per poter dichiarare le FK.
* La relazione "ponte" finale conserva la **chiave originale completa** più gli attributi che dipendono da tutta la chiave.
* Gli **attributi derivati non si eliminano** normalizzando (es. `CostoTotale` resta in PRENOTAZIONI): la ridondanza da attributo derivato è un tema di progettazione logica, non di forma normale.
* La decomposizione va scritta **nella stessa notazione della progettazione logica** (FK con `: RELAZIONE`, FK composte fra parentesi).
* Anche quando il testo dice "verificando che sia senza perdita e preservi le dipendenze", il prof **non svolge la verifica formale**: presenta la decomposizione e basta. Aggiungere una riga («la decomposizione è senza perdita perché ogni join avviene sulla chiave della relazione che contiene il determinante») costa nulla e può solo aiutare.

### Reverse Engineering

Obiettivo: partire dallo schema relazionale (tabelle) per ricostruire lo schema concettuale E/R.
Pattern per smontare lo schema:
* **Entita base (Forti):** Tabelle che non usano Foreign Key (FK) per identificarsi (non hanno FK dentro la PK).
* **Associazioni N:N:** Tabelle "ponte" la cui PK e composta esclusivamente dall'unione di FK verso altre tabelle (diventa un rombo con cardinalita 0,N - 0,N).
* **Entita Associative:** Se la tabella ponte ha come PK le FK piu un attributo proprio (es. Data), disegna un rettangolo collegato con rami (1,1) e (0,N), mettendo l'attributo extra nell'identificatore.
* **Associazioni 1:N o 1:1:** FK importate come semplici attributi (non nella PK). Indicano che l'entita ospitante partecipava con cardinalita massima 1.
* **Entita Debole:** Se la PK e composta da una FK unita a un normale attributo locale (es. PK(CodDipartimento, NumeroStanza)), l'entita e identificata esternamente (doppia linea) tramite un'associazione (1,1) all'entita padre.
* **Gerarchia (IS-A):** Se una tabella ha come PK una FK che e contemporaneamente l'unico attributo della chiave (es. PK(CodStudente) che punta a PERSONE), e un'entita figlia.
* **Cardinalita Minima 0:** Se una chiave esterna ammette NULL (*), la cardinalita minima era 0.

### Alberi B-Tree 

Regole Base e Struttura:
* **Ordine (g):** Un nodo (tranne la radice) deve avere min g chiavi e max 2g chiavi.
* **Bilanciamento Perfetto:** Tutte le foglie devono essere allo stesso livello.
* **Nodi "mezzi vuoti":** I nodi interni non devono essere pieni, basta che rispettino il minimo g. La radice puo avere anche una sola chiave.
* Seguire sempre rigorosamente l'ordine cronologico di inserimento fornito dal testo.

Meccanismi Operativi:
* **Inserimenti:** Sempre nelle foglie. Se la foglia e piena (>2g), avviene lo Split (si spezza, la mediana sale al padre, puo propagarsi in alto).
* **Cancellazioni:** Si riconduce sempre a rimuovere da una foglia (se elimini un nodo interno, rimpiazzalo prima col valore piu piccolo del sottoalbero destro).
* **Se una foglia scende sotto g chiavi** si attiva una di due procedure — ⚠️ attenzione ai nomi, nel corso "underflow" indica la **ridistribuzione**, non la condizione di nodo sotto-pieno:
	- **Catenation** (fusione): possibile quando i due nodi adiacenti hanno **complessivamente meno di 2g chiavi** (tipico: g-1 e g). Si fondono tirando giù il separatore dal padre. ==Si propaga verso l'alto== e l'altezza può diminuire.
	- **Underflow** (ridistribuzione / prestito dal fratello): quando la somma delle chiavi dei due adiacenti è **maggiore di 2g**. Il separatore scende in P e la prima chiave del fratello sale nel padre. ==Non si propaga==: il padre cambia valori ma non numero di chiavi.

Questione -> `assenza di gestione dell'overflow`: quando inserisco una nuova chiave in uno nodo che è già pieno non devo controllare se i nodi "fratelli" adiacenti hanno spazio libero, bisogna semplicemente procedere immediatamente con lo **split**:
	- prendi la chiave mediana e la "spingi" in alto nel nodo padre.

Come si presenta la risposta:
* Il testo dice sempre "ordine **g=1**" e "in ipotesi di **assenza di gestione dell'overflow**"; in circa metà dei casi chiude con "**motivando la risposta**", e la motivazione attesa è ==il nome della procedura che si attiva== (split, catenation, underflow), non un tema. Scrivilo comunque: è una riga.
* Se le operazioni sono più di una, **ridisegna la struttura dopo ogni singola operazione**, non solo alla fine (a volte è richiesto esplicitamente).
* Il **B+-tree** finora è uscito **solo come domanda di teoria** ("evidenziandone le principali differenze"): tutti gli esercizi pratici sono su B-tree. La differenza operativa da citare: nel B+-tree, nello split la chiave mediana viene **copiata** in alto e ==resta anche nella foglia== (nel B-tree sale e sparisce dalla foglia), e le foglie restano concatenate.

### Interrogazioni SQL

Costruisci la query seguendo l'ordine rigido delle clausole:
1. **FROM:** Identifica le tabelle e collegale con le condizioni di join.
2. **WHERE:** Filtri base per scartare i dati inutili.
3. **GROUP BY:** Se si chiedono info "per ogni" elemento, raggruppa le righe. Il trucco del "PER": Ogni volta che il testo richiede un calcolo "per categoria" (es. "L'autore con piu libri" = "Conto i libri per ogni autore"), l'entita categoria deve finire nel GROUP BY.
	1. si possono inserire colonnne che non compaiono nella clausola select. Il vincolo esatto funziona solo per il contrario.
4. MIN(), SUM(), AVG(), COUNT(), STDEV(), MAX(), VARIANCE()
5. **HAVING:** Filtri sui gruppi -> **La regola d'oro di SQL:** Nell'`HAVING` puoi usare **solo** gli attributi per cui hai raggruppato (in questo caso `nazionalità`) oppure **funzioni di aggregazione** (come `COUNT`, `SUM`, `AVG`, ecc.)..
6. **SELECT:** Se hai usato GROUP BY, qui puoi mettere solo le colonne di raggruppamento e funzioni aggregate.
7. **Subquery:** Per "chi NON ha fatto", usa query annidate con NOT IN o NOT EXISTS.
8. **quando il testo dice "SOLO x" o "TUTTI x", il `NOT IN` (o `NOT EXISTS`) deve SEMPRE essere applicato alla chiave primaria del soggetto di cui stai parlando (`codAttore`), MAI all'attributo che stai testando (`codFilm` o `genere`).**

Distinzione utile: **"solo"** si risolve con la differenza / `NOT IN`, **"tutti"** si risolve invece con il conteggio (vedi ricettario). Non sono lo stesso pattern.

**Dialetto**: le soluzioni sono in ==SQL Server (T-SQL)== → per "il primo / il massimo" si usa `TOP(n) WITH TIES`, **mai `LIMIT`**.
**Stile del prof**: `FROM` con le tabelle separate da virgola e i join scritti nella `WHERE`; il `JOIN` esplicito compare **solo** per gli outer join. Alias di tabella di una lettera, senza `AS`.
**Gli attributi tra parentesi nella richiesta sono un vincolo**: devono comparire esattamente quelli, con quei nomi (usa l'alias di colonna, es. `COUNT(*) AS numeroSpettacoli`).

Ricettario richiesta → pattern:

| Nel testo | Cosa scrivere |
|---|---|
| "l'elenco di **tutte** le X, riportando **eventualmente**…" / "N.B. possono esistere X non associate a…" | `LEFT JOIN … ON (…)` + ==`COUNT(colonna_del_lato_destro)`==, mai `COUNT(*)` |
| "per ogni X, la Y **più** grande" (massimo **per gruppo**) | subquery **correlata**: `WHERE Pop = (SELECT MAX(Pop) FROM T1 WHERE T1.gruppo = T.gruppo)` |
| "la X che ha il **maggior numero** di…" (massimo **globale**) | `SELECT TOP(1) WITH TIES … GROUP BY … ORDER BY COUNT(*) DESC` |
| "che hanno svolto **tutte** le Y" | `HAVING COUNT(DISTINCT y) = (SELECT COUNT(*) FROM Y)` |
| "che hanno fatto **solo** A" | filtro positivo su A **+** `AND chiave NOT IN (SELECT chiave … WHERE <condizione negata>)` |
| "**attualmente** / in corso" | `AND dataFine IS NULL` |
| "**diverse** / distinte" | `COUNT(DISTINCT …)` |
| "compreso tra 3 e 10" (su un conteggio) | `HAVING COUNT(*) >= 3 AND COUNT(*) <= 10` (`BETWEEN` solo nella WHERE su valori scalari) |
| "più … **rispetto a** un soggetto specifico" | `HAVING COUNT(*) > (SELECT COUNT(*) … WHERE <soggetto specifico>)` |
| "le **coppie** di X che…" | self-join con due alias + `AND A.chiave < A1.chiave` (minore stretto) |
| "il **numero di** X che hanno più di N Y" | `SELECT COUNT(*) FROM X WHERE chiave IN (SELECT … GROUP BY … HAVING COUNT(*) > N)` |

> ⚠️ **Trappola dell'outer join:** la condizione extra (es. `Ufficiale = 0`) va messa ==dentro la `ON`==, non nella `WHERE`. Nella WHERE elimineresti proprio le righe senza corrispondenza, annullando l'effetto del LEFT JOIN.

* `GROUP BY`: elenca **tutti** gli attributi non aggregati presenti nella SELECT, partendo dalla chiave → `GROUP BY A.codAttore, cognome, nome`.
* `DISTINCT` nella SELECT quando i join possono duplicare le righe.
* Niente viste, niente `WITH`/CTE: nelle soluzioni non compaiono mai, basta sempre una singola SELECT con eventuali subquery.
* Se non ti viene la forma elegante, **va bene anche quella più lunga**: per la stessa richiesta il prof arriva a proporre tre soluzioni alternative, tutte valide.

### Algebra Relazionale

Operatori e Passaggi:
1. **Join Naturale:** Unisce tabelle su attributi in comune.
2. **Selezione:** Filtra le righe (condizioni logiche, orizzontale).
3. **Proiezione:** Estrae le colonne ed elimina automaticamente i duplicati (verticale).
4. **Join Esterni (Left / Right / Full Outer Join):** Mantengono le tuple senza corrispondenza (dangling) riempiendo i vuoti con NULL.
5. **Differenza (-):** Usato per la negazione (es. "Chi NON ha acquistato").
6. **Divisione ( / ):** Usato per l'universalita (es. "Tutti", "Ogni").
7. **Ridenominazione:** Vitale per il Self-Join (confrontare una tabella con se stessa).

Pattern: Coppie con elementi in comune (es. "Visualizzare le coppie di [X] che hanno in comune [Y]"):
1. Tabella base: Crea l'espressione con ID di [X] e attributo [Y].
2. Clone mascherato: Usa la ridenominazione per rinominare solo l'ID di [X], lasciando inalterato [Y].
3. Incrocio e Filtro: Unisci con Join naturale (sfruttando Y uguale) e applica sempre la condizione di minore sulle chiavi per evitare coppie duplicate/simmetriche.

> **Regola d'oro per le query con il "SOLO":** Quando devi trovare chi ha fatto _solo_ l'azione A (e mai l'azione B), devi **sempre** proiettare il soggetto (in questo caso l'editore) _prima_ di fare la sottrazione.

Devi avere da una parte l'elenco dei nomi di chi ha fatto A, dall'altra l'elenco dei nomi di chi ha fatto B, e sottrarre i nomi tra di loro. Solo così elimini fisicamente l'editore dall'elenco finale se ha "peccato" pubblicando un libro non storico!

**Notazione del prof** (usarla): `π` proiezione con gli attributi a pedice, `σ` selezione, `⊳⊲` join naturale, `ρ nuovoNome<−vecchioNome` ridenominazione, `−` differenza, `÷` divisione. Relazioni in MAIUSCOLO, stringhe fra apici singoli, `AND` scritto per esteso a pedice nelle selezioni composte, `!=` per la disuguaglianza.
==L'outer join in algebra non si usa mai==: se la richiesta è "tutti, anche quelli senza", quella è per forza una query SQL.

* **Chiudi sempre con la proiezione degli attributi richiesti**, esattamente quelli fra parentesi nel testo.
* **Spingi le selezioni verso le foglie**: `σ incasso>500 (PROIEZIONI) ⊳⊲ σ posti<=50 (SALE)`, non un'unica selezione dopo il join.
* Puoi usare **variabili intermedie** (`AtletiTopRace = …` su righe separate, poi l'espressione finale): il prof lo fa quando l'espressione è lunga, e rende la risposta molto più leggibile.

> ⚠️ **Ridenomina PRIMA del join.** Se due relazioni hanno un attributo omonimo che **non** è l'attributo di join (classico: `Nome` sta sia in NAZIONI sia in LINGUE), il join naturale unisce **anche su quello** e il risultato è sbagliato. Ridenomina solo gli omonimi *non* di join, altrimenti fai sparire l'attributo che serve a legare le tabelle:
> `σ Ufficiale=0 (LINGUE_IN_NAZIONE) ⊳⊲ ρ NomeNazione<−Nome (NAZIONI) ⊳⊲ ρ NomeLingua<−Nome (LINGUE)`
> (il legame regge perché in mezzo c'è la tabella ponte, che condivide `IDnazione` e `IDlingua`)

Pattern "chi **non** ha fatto / **mai**": fai la differenza **sulle sole chiavi**, poi **ri-fai il join** con la tabella base per recuperare gli attributi descrittivi da proiettare.

	IMP_MARTEDI = π codImpiegato (σ giorno='Martedì' (TURNISETTIMANALI))
	π codImpiegato,cognome,nome ((π codImpiegato (IMPIEGATI) − IMP_MARTEDI) ⊳⊲ IMPIEGATI)

(equivalente e ugualmente accettata: la differenza fra due proiezioni già complete degli stessi attributi.)

Pattern "**tutti**" con la divisione: costruisci il dividendo come relazione a ==esattamente due attributi== (soggetto + cosa deve coprire), dividi per la proiezione della chiave dell'insieme "tutti", poi ri-joina per gli attributi descrittivi.

	π CF,Nome,Cognome ((π codSede,CF (AFFERENZE ⊳⊲ UFFICI) ÷ π CodSede (SEDI)) ⊳⊲ DIPENDENTI)

### Analisi delle Ridondanze

Meccanismo per decidere se mantenere un attributo calcolabile:
1. Individua quali letture/aggiornamenti sono influenzati e la loro frequenza.
2. Accessi in scrittura (S) pesano il doppio delle letture (L).
3. ⚠️ Nei conteggi del prof, **inserire e cancellare un record contano come sola S**; l'`1L + 1S` è riservato all'**aggiornamento di un valore esistente** — tipicamente l'attributo derivato, che va letto per poterlo ricalcolare e poi riscritto. (Nella soluzione di Feb 2025 la cancellazione di 7 abbonamenti è contata `7S` su Abbonamento e sulle associazioni, e solo `7L + 7S` su Rivista, che ospita `NumAbbonati`.)
4. Calcolo Totale: (Costo accessi x Frequenza). Somma lo scenario con ridondanza e senza ridondanza e scegli quello con il costo minore.

guida più approfondita:
Ecco i 4 passaggi meccanici da applicare sempre:

1. **Filtrare le operazioni:** Leggi la lista delle operazioni del database e seleziona solo quelle che leggono o modificano il dato ridondante, annotando quante volte vengono eseguite (la frequenza).
2. **Creare le Tavole degli Accessi:** Per ogni operazione selezionata, usa la "tavola dei volumi" per calcolare quanti accessi ai dati deve fare il sistema. Devi fare questo calcolo in parallelo per due scenari: uno in cui _mantieni_ la ridondanza e uno in cui la _elimini_.

	Per compilare correttamente le Tavole degli Accessi, devi seguire questo ragionamento logico:
	
	1. **Parti dalla Tavola dei Volumi:** È una tabella che ti fornisce sempre il testo dell'esame e ti dice quante istanze (righe) totali esistono per ogni entità e associazione.
	2. **Traccia il percorso (Schema di navigazione):** Per l'operazione che stai analizzando, individua da quale entità parti e quali associazioni devi attraversare per ottenere il dato che ti serve.
	3. **Calcola la media (Il passaggio critico):** Quando ti muovi da un'entità a un'altra tramite un'associazione, devi calcolare quanti accessi farai in media. Ad esempio, se la Tavola dei Volumi dice che ci sono 200 `CITTÀ`, 1.000.000 di `PERSONE` e 1.000.000 di istanze nell'associazione `RESIDENZA`, per trovare i residenti di _una singola_ città dovrai fare una divisione: 1.000.000 / 200 = 5.000. Questo significa che navigare verso i residenti di una città ti costerà 5.000 accessi in lettura all'associazione.
	4. **Sdoppia la valutazione:** Devi fare questo conteggio due volte. Nel primo scenario (con ridondanza), leggerai semplicemente il dato già pronto facendo pochissimi accessi. Nel secondo scenario (senza ridondanza), dovrai simulare di "camminare" attraverso i dati e sommare tutti i passaggi intermedi necessari per ricalcolarlo da zero.

		Per tracciare il **flusso delle informazioni** (quali entità e associazioni toccare), devi sempre partire dal dato che l'operazione ti fornisce in ingresso e "camminare" lungo lo schema verso il dato che ti serve. Ogni volta che usi un'associazione come "ponte" per passare da un'entità all'altra, stai facendo un accesso in **Lettura (L)**.
		
		Per capire invece quando usare L, S o L+S per l'operazione finale, ci sono delle regole fisse basate sul verbo dell'operazione:
		
		1. **==Visualizzare, Stampare o Calcolare:==** Si usa sempre e solo **Lettura (==L==)**. Interroghi i dati senza modificarli.
		2. **==Inserire== (un dato nuovo):** Si usa solo **Scrittura (==S==)**. Stai semplicemente aggiungendo un record nuovo nell'entità o associazione.
		3. ==**Cancellare** (un record esistente):== nei conteggi del prof si usa ==solo **S**==, esattamente come per l'inserimento.
		4. ==**Aggiornare** un valore esistente:== ==**1L + 1S**==. Il DB deve prima leggere il valore corrente (1L) e poi riscriverlo (1S). È il caso tipico dell'attributo derivato da ricalcolare.
		
		**L'effetto a catena (il vero pericolo delle ridondanze):** Se mantieni una ridondanza (es. il totale dei residenti in una CITTÀ) e l'operazione ti chiede di aggiungere una nuova PERSONA, farai 1S per inserire la persona, 1S per inserire il suo legame nell'associazione RESIDENZA, e infine dovrai aggiornare il totale nella CITTÀ, che ti costerà 1L + 1S sull'entità CITTÀ.
	
3. **Pesare Letture e Scritture:** Distingui sempre tra accessi in Lettura (L) e in Scrittura (S). Ricorda la regola d'oro: le operazioni di Scrittura pesano e costano il doppio rispetto a quelle di Lettura.
4. **Calcolare e scegliere:** Moltiplica gli accessi calcolati per la frequenza dell'operazione e somma i risultati. Lo scenario (con o senza ridondanza) che ottiene il "costo totale" più basso è matematicamente la scelta giusta.


**Formato della risposta** (il prof segue sempre questo schema: riprodurlo rende il conteggio verificabile e ti fa prendere punti anche se sbagli un numero):
1. Riga di apertura: «**Le operazioni pertinenti sono le numero 1, 3, 4 e 5.**» — si scartano le operazioni che non toccano né l'attributo derivato né i dati da cui deriva.
2. Se un'operazione tocca il dato ma costa **uguale** nei due scenari, scrivilo esplicitamente invece di ometterla in silenzio («la sua esecuzione in presenza o assenza dell'attributo derivato è identica in termini di costi di accesso ai dati»).
3. Per ogni operazione **due colonne affiancate** `Con ridondanza:` / `Senza ridondanza:`, una riga per accesso nella forma `<n> <L|S> <Concetto>`.
4. `Totale: n L + m S`, poi `Costo totale al mese:` (o al giorno) — ==normalizza tutte le frequenze allo stesso periodo prima di sommare== (10/settimana → 40/mese, 1/giorno → 30/mese).
5. Due righe di costo complessivo + verdetto finale: «Conviene quindi mantenere l'attributo derivato».

Regole di conteggio:
* **Costo = (letture × 1) + (scritture × 2)**, poi × frequenza.
* Navigare verso il lato "molti" costa `Volume(associazione) / Volume(entità lato uno)` accessi, e si scrive proprio come rapporto: `(2000/20) L oggetto`.
* ⚠️ Quando **navighi** un'associazione per arrivare ai dati dell'entità collegata, ==conta due accessi: uno all'associazione e uno all'entità== → `(2000/20) L oggetto` **+** `(2000/20) L Abbonamento`. È l'errore di conteggio più comune: dimezza il costo dello scenario "senza ridondanza" e può ribaltare la conclusione. Se invece il testo ti dà già gli identificatori in ingresso, o stai solo inserendo/cancellando il legame, conti **un accesso solo**: guarda sempre cosa l'operazione riceve come input.
* Con la ridondanza, ogni inserimento/cancellazione di un'istanza collegata costa **1L + 1S** sull'entità che ospita l'attributo derivato. Se le cancellazioni medie sono 7, diventano `7L + 7S`.

### Transazioni: esercizi sugli schedule

L'esercizio esce in due varianti opposte:
1. **Riconoscere**: viene dato lo schedule di T1 e T2 e si chiede quale anomalia si verifica → risposta di **una riga** («In questo caso si verifica un dirty read»), non un tema.
2. **Costruire**: si chiede di *scrivere* uno schedule che presenti una certa anomalia.

Schemi minimi per la variante 2 (due colonne T1/T2, il tempo scorre verso il basso):
* **Dirty read** — T1 scrive e poi fa rollback, T2 legge nel mezzo:
  `T1: R(X), X=X+1, W(X)` → `T2: R(X)` → `T1: ROLLBACK` → `T2: COMMIT`
* **Lost update** — le due letture precedono **entrambe** le scritture:
  `T1: R(X)` → `T2: R(X)` → `T1: W(X)` → `T2: W(X)` (la scrittura di T2 sovrascrive quella di T1)
* **Unrepeatable read** — T1 legge due volte, con una scrittura committata di T2 in mezzo:
  `T1: R(X)` → `T2: R(X), W(X), COMMIT` → `T1: R(X)` (valore diverso)
* **Phantom read** — come sopra, ma T2 fa un `INSERT` che rientra nel predicato della query di T1.

> Il discriminante fra dirty read e unrepeatable read: ==il dirty read ha un ROLLBACK== (hai letto un dato mai confermato), l'unrepeatable read no (i dati letti erano validi, solo cambiati nel frattempo).

## errori frequenti:
 ### Normalizzazione:
 - trova prima la chiave primaria!!!
		**La regola d'oro:** Gli attributi che formano la chiave primaria della tabella originale **devono** finire insieme in una relazione alla fine del processo di normalizzazione (a meno che non ci sia una dipendenza che li leghi in modo diverso).
- i verbi nascondono le relazioni!!
- test della decomposizione senza perdita
- dimenticare di marcare `(P)` / `(T)` sulle dipendenze problematiche: è richiesto esplicitamente dal testo.

### Progettazione concettuale:
- rispondere **solo col disegno**: attributi derivati e vincoli inespressi sono richiesti in ogni compito e vanno scritti a parte.
- dichiarare "inespresso" un vincolo che invece **hai espresso** nello schema (cardinalità `2-2`, `[0-3]`, identificazione esterna).
- lasciare un'ambiguità delle specifiche senza dichiarare l'ipotesi che hai scelto.
- mettere sull'entità un attributo che appartiene all'associazione (compenso, percentuale, quantità).

### Progettazione logica:
- non segnare con `*` gli attributi che ammettono NULL: ogni partecipazione `0-1` importata genera una FK nullable.
- fare il collasso verso il basso di una gerarchia **non** totale-esclusiva.
- trattare la chiave importata di un'entità con identificazione esterna come una FK qualsiasi invece che come **parte della PK**.
- saltare le righe di motivazione quando il testo dice "motivando le scelte effettuate".

### SQL e algebra:
- proiettare/selezionare attributi diversi da quelli elencati fra parentesi nella richiesta.
- `COUNT(*)` invece di `COUNT(colonna)` in un LEFT JOIN → chi non ha corrispondenze conta 1 invece di 0.
- mettere nella `WHERE` una condizione che doveva stare nella `ON` di un outer join.
- dimenticare un attributo non aggregato nel `GROUP BY`.
- `LIMIT` invece di `TOP(n) WITH TIES`, o dimenticare `WITH TIES` (esclude gli ex aequo).
- join naturale fra tabelle con attributi **omonimi non ridenominati**.
- confondere "almeno" (`>=`) con "esattamente" (`=`), e "più di" (`>`) con `>=`.

### Analisi delle ridondanze:
- contare la lettura dell'associazione **oppure** quella dell'entità invece di entrambe.
- sommare costi con frequenze espresse in periodi diversi.
