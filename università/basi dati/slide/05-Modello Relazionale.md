[05-ModelloRelazionale](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/secondo anno/base dati/slide/05-ModelloRelazionale.pdf>)

introdotto nel 1970 da E.F. Codd per favorire l'indipendenza dai dati. Rispetto ai modelli precedenti (gerarchico e relazionale) si caratterizzava per:
- assenza di legami costruiti con puntatori, si fa uso solo di valori;
- la presenza di una teoria utile per la progettazione di DB.

richiami di concetti matematici: prodotto cartesiano, relazione matematica n-aria.

rappresentazione di relazioni attraverso tabelle: efficace e intuitiva.

A ogni occorrenza di dominio di associa un nome univoco nella relazione, detto attributo, il cui compito è specificare il ruolo che quel dominio svolge nella relazione. Nella rappresentazione tabellare gli attributi sono le intestazioni delle colonne. In questo caso l'ordine degli attributi non ha più rilevanza (si supera il problema della non commutatività del prodotto cartesiano).

===*def (Relazione)*===: si indichi con dom{A} il dominio dell'attributo A e si consideri un insieme di attributi X = {A1, A2, A3, ..., An}; una tupla t su X è una funzione che associa a ogni Ai appartenente a X un valore di dom{Ai}; uno schema di relazione su X è definito da un nome R e dall'insieme di attributi X con relativo dominio di definizione, e si indica con R(X); uno stato di relazione su X è un insieme r di tuple su X in un determinato momento essendo un elemento estremamente dinamico.![[Screenshot 2026-07-06 at 11.59.44.png]]

- se t è una tupla su X e A appartiene a X, allora t[A] o t.A è il valore di t su A.

## Livello intensionale ed estensionale:
Uno schema R(X) definisce a livello intensionale una relazione, es: PARTITE(TeamCasa, Team Ospite, PuntiCasa, PuntiOspiti);
se è necessario a livello estensionale, per riferirsi a un generico stato di relazione con lo schema R(X) si usa semplicemente il nome dello schema in minuscolo, ovvero r.

- il termine "istanza" è sinonimo di "estensione" o "stato" di relazione e non di tupla. per questo si preferiscono questi ultimi due termini.

## Data Base relazionale:
Lo schema di un DB relazionale è un insieme di schemi di relazioni con nomi distinti che lo compongono: 

$$
R = \{ R_{1}(X_{1}), R_{m}(X_{m}), \dots, R_{m}(X_{m})~~~(Ri\neq Ri ~~~ \forall i\neq j)
$$

uno stato di un DB con questo tipo di schema è un insieme di stati di relazioni $r=\{ ri, r_{2},\dots,rm \}$ con $ri$ stato di relazione su $Ri(Xi)$.

> La definizione di uno schema di relazione e di uno schema di DB comprende anche l'indicazione di un insieme di vincoli d'integrità.

### modello basato sui valori
l'utilizzo del modello relazionare comporta diversi vantaggi:
- indipendenza dalle strutture fisiche;
- si rappresenta solo ciò che è rilevante;
- maggiore portabilità;
- i puntatori sono direzionali e pertanto stabiliscono un percorso di navigazione all'interno dei dati.

### tabelle vs relazioni
"tabella" e "relazione" non sono propriamente sinonimi, una relazione nel modello relazionare può essere vista come un particolare tipo di tabella. 
Una tabella rappresenta una relazione se:
- i valori di ciascuna colonna sono tra loro omogenei (definiti sullo stesso dominio di definizione);
- le righe sono tra loro diverse;
- le intestazioni delle colonne sono diverse tra loro.
> l'ordinamento di righe e colonne è irrilevante, e nei DBMS SQL permette di gestire tabelle che non sono relazioni e che quindi ammettono righe duplicate.

## 1NF:
nei modelli relazionari non è in generale possibile usare domini strutturati (eccezione di: date e stringhe), una relazione in cui ogni dominio è "atomico" si dice che è in **Prima Forma Normale** o 1NF. 
(in molti casi è richiesta preliminarmente un'attività di normalizzazione dei dati che dia luogo a relazioni in 1NF e che preservi l'informazione originale):
![[Pasted image 20260707094924.png]]

> il fatto che una rappresentazione normalizzata sia adeguata o meno di pende dal contesto, ogni caso presenta una sua specificità e pertanto non deve essere trattato "automaticamente".

Normalizzare in 1NF è un'attività di progettazione logica che è oggetto di "regole guida" che però non hanno validità assoluta.

### informazione incompleta (valore nullo):
le informazioni che si vogliono rappresentare mediante relazione non sempre corrispondono pienamente allo schema prescelto, per alcune tuple e per alcuni attributi potrebbe non essere possibile specificare un valore del dominio. In molti casi, in mancanza di informazione, si tende a usare un "valore speciale" del domini (es: 0, "", -1, ecc.) che non si utilizza per altri scopi. Questa pratica è fortemente sconsigliata!!
Nel modello relazionare di adotta il concetto di valore null (==NULL==):
$$t[A] \in dom(A) \cup {NULL}$$
la presenza di un valore NULL non fornisce alcuna informazione sull'applicabilità o meno, infatti NULL non è un valore del dominio: $NULL \neq NULL$. 

>N.B. ai fine della verifica di assenza di tuple duplicate è opportuno che i NULL siano considerati come gli altri valori e quindi uguali tra loro.

è necessario imporre delle restrizioni all'uso dei valori nulli -> non in tutti i contesti sono accettabili.

### vincoli:
- **vincoli di integrità**: è una proprietà che deve essere soddisfatta da ogni possibile stato osservabile di una relazione, infatti la "correttezza sintattica" di uno stato di una relazione non è condizione sufficiente affinché i dati rappresentino un'informazione possibile nel contesto reale considerato. Ogni vincolo può essere descritto da una funzione booleana che associa a ogni stato il valore VERO o FALSO.
- **vincolo di dominio**: si riferisce ai valori ammissibili per un singolo attributo, sono un caso particolare dei vincoli di tupla. (es: un voto deve essere compreso fra 18 e 30).
- **vincoli di tupla**: esprimono condizioni su ciascuna tupla.
- **vincoli di chiave**: vietano la presenza di tuple distinte che hanno lo stesso valore su uno o più attributi.

### chiavi e superchiavi:
Sia $R(X)$ uno schema di relazione su un insieme di attributi $X$, sia $\mathcal{B}_{R(X)}$ l'insieme di tutti gli stati ammissibili per $R(X)$, e sia $K \subseteq X$. 

- $K$ è una **superchiave** $\iff$ $\forall r \in \mathcal{B}_{R(X)}, \quad \forall t_1, t_2 \in r: \left( t_1[K] = t_2[K] \implies t_1 = t_2 \right)$;
- $K$ è una **chiave** $\iff$ $\left( \forall K' \subset K \implies \neg\text{Superchiave}(K') \right)$ ovvero è una superchiave minimale.

==def (chiave)==: identificatore minimale per ogni r su R(X).

L'insieme X di tutti gli attributi dello schema è senz'altro una superchiave per R(X) e essendo il numero di attributi finito, è sempre possibile individuare (almeno) una chiave.

L'esistenza delle chiavi garantisce l'accessibilità a ciascun dato del DB, ogni singolo valore è univocamente individuato da: nome della relazione, valore della chiave, nome dell'attributo.

Per evitare i problemi con i NULL, è necessario scegliere una **chiave primaria** sulla quale non si ammettano valori nulli (convenzionalmente gli attributi che costituiscono la chiave primaria si sottolineano). Nei casi in cui per nessuna chiave si possa garantire la disponibilità di valori, è necessario introdurre un "codice" che svolga il ruolo di chiave primaria.

- **vincoli di integrità referenziale**: sono importanti tipi di vincoli inter-relazionali che enfatizzano come le correlazioni tra le tuple siano spesso ottenute usando i valori delle chiavi.

es: due schemi $R_{1}(X_{1}) ~ e ~R_{2}(X_{2})$  di un DB $R$ e sia $Y$ un insieme di attributi in $X_{2}$. Un vincolo di integrità referenziale su $Y$ impone che in ogni stato $r=\{ r_{1},r_{2},\dots \}$ del DB l'insieme dei valori di $Y$ in $r_{2}$ sia un sottoinsieme dell'insieme dei valore della chiave primaria di $R_{1}(x_{1})$ presenti nello stato di $r_{1}$. L'insieme $Y$ viene detto una **foreign key** ("chiave importata").
 ![[Pasted image 20260707110329.png]]

Notazioni per indicare nella definizione di uno schema la foreign key:
![[Pasted image 20260707110532.png|457]]
per denotare che una foreign key ammette valore nullo si usa '\*', oppure per denotare che un attributo A ammette solo valori unici, si usa scrivere Unique(A).



