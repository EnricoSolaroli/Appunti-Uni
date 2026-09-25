[16-Indici](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/secondo anno/base dati/slide/16-Indici.pdf>)

Un **indice** è una struttura dati che rende disponibile un "cammino d'accesso" per localizzare efficientemente i record che soddisfano un predicato di selezione. Concettualmente è una mappa di entry `[valore di chiave di ricerca, riferimento al/ai record]`. Due famiglie:

- **ordered index**: i valori di chiave sono mantenuti **ordinati**, a uno o più livelli (es. B+-tree);
- **hash index**: le entry sono in **bucket** il cui indirizzo è dato da una funzione hash -> efficientissimo per ricerche su **singolo valore**, è sempre un'organizzazione **secondaria**.

> l'indice occupa **meno spazio** del file dati, perché la chiave è solo una parte dell'informazione contenuta in un record.

p.s. un **hash file** (dati allocati tramite hashing) è invece un'organizzazione **primaria**; allo stesso modo un B+-tree che memorizza i record nelle foglie **è** l'organizzazione primaria.

## Classificazione degli indici

| Criterio | Tipo | Significato |
| --- | --- | --- |
| Unicità dei valori di chiave | **Primary (unique)** | attributo (o combinazione) a valori **unici** |
| | **Secondary** | attributo a valori **ripetibili** |
| Ordinamento del file dati | **Clustered** | il file dati **è ordinato** secondo quell'attributo |
| | **Unclustered** | il file dati **non è ordinato** secondo quell'attributo |
| N. di coppie nell'indice | **Dense** | n. coppie $(k_i,p_i)$ **=** n. record |
| | **Sparse** | n. coppie **<** n. record |
| N. di livelli | **Single-level** | organizzazione "flat" |
| | **Multi-level** | organizzazione ad albero |

Quasi tutte le combinazioni sono possibili. L'unica incompatibile in principio è **sparse & unclustered**: non permetterebbe di reperire i record i cui riferimenti non sono nell'indice.

> due casi in cui di fatto **esiste** uno sparse & unclustered: il **partial index** (si escludono dall'indice i valori troppo ripetuti, es. `CREATE INDEX ... WHERE NOT (ClientIP BETWEEN ...)` in PostgreSQL) e un secondary index su attributo che ammette **NULL** se il DBMS non indicizza i NULL.

#### Tipi di puntatore:

- **RID** (Record IDentifier, detto anche TID): coppia (n° pagina, n° record nella pagina) -> punta al **singolo record**;
- **PID** (Page IDentifier): punta al **blocco** che contiene almeno un record con quel valore di chiave.

## Indici multilivello

Un indice mono-livello, pur occupando meno del file dati, può diventare grande (50K record, chiavi da 20 byte + puntatori da 4 byte -> ~1.2 MB) -> in memoria secondaria si organizza su **più livelli**.

Gli AVL (usati in memoria centrale) **non** vanno bene: bilanciano rispetto ai **nodi**, non ai **blocchi**, e non danno garanzie sull'utilizzazione minima. Un indice multilivello per memoria secondaria deve soddisfare 3 requisiti:

- **bilanciamento** rispetto ai **blocchi** (è il numero di blocchi letti a determinare il costo di I/O);
- **occupazione minima** dei blocchi (evitare spreco di memoria);
- **efficienza di aggiornamento** (costo limitato per insert/delete).

La famiglia che li soddisfa tutti e tre è quella dei **B-tree** (Bayer & McCreight, 1972); varianti principali: B-tree, **B\*-tree**, **B+-tree**.

## B-tree

Un **B-tree** è un albero a più vie **perfettamente bilanciato**, i cui nodi corrispondono a **blocchi/pagine** del dispositivo di memoria.

#### Definizione:

Siano $g$ (**ordine**) e $h$ (**altezza**) due numeri naturali. L'ordine $g$ è il **numero minimo di chiavi in un nodo non radice**. Un B-tree $T$ della classe $\tau(g,h)$ ha 3 proprietà:

1. **ogni percorso** dalla radice a una foglia ha la **stessa lunghezza** $h$ ($h$ = numero di nodi nel percorso);
2. ogni nodo, **eccetto radice e foglie**, ha almeno $g+1$ figli. La radice o è una foglia ($h=1$) o ha **almeno 2 figli**;
3. radice e nodi intermedi hanno **al più** $2g+1$ figli.

#### Formato del nodo (index page):

Ogni nodo intermedio o foglia memorizza **da $g$ a $2g$ chiavi**; la **radice** da **1 a $2g$** chiavi (quindi da 0 a $2g+1$ puntatori a figli). Un nodo con $l$ chiavi ha $l+1$ puntatori a figli, e le chiavi sono in **ordine crescente**:

$$q_0,\ (k_1,p_1,q_1),\ (k_2,p_2,q_2),\ \dots,\ (k_l,p_l,q_l)$$

- $k_i$: valore di chiave;
- $p_i$: puntatore (**RID**) al **record** con valore di chiave $k_i$ -> <u>i puntatori ai record stanno in tutti i nodi</u>;
- $q_i$: puntatore (**PID**, `null` nelle foglie) al figlio che contiene chiavi con $k_i < k < k_{i+1}$; $q_0$ punta a chiavi $< k_1$, $q_l$ a chiavi $> k_l$.

#### Ricerca:

Si scende dalla radice confrontando $y$ con le chiavi del nodo. Il costo, in numero di nodi letti, è $1 \le C(search) \le h$. Al termine: se trovata, $q$ punta al nodo con $y$; altrimenti $s$ punta al nodo **dove $y$ andrebbe inserito**.

#### Pregi e difetti:

- efficientissimo per **ricerca e modifica di singoli record**; un nodo contiene molte chiavi -> pochi I/O (es. ordine $m=1001$: 3 livelli indicizzano già ~1 miliardo di chiavi);
- utilizzazione della memoria: limite inferiore **50%**, media solo **69%**;
- <u>poco adatto a elaborazioni sequenziali e a query di range</u>, perché i **RID sono dentro i nodi**: cercare il successore di una chiave può richiedere di scandire molti nodi, e la chiave più piccola sta nella foglia più a sinistra (serve percorrere tutto il cammino).

#### B\*-tree:

Variante in cui l'utilizzazione dei nodi è almeno **2/3** anziché 1/2: lo splitting è ritardato finché **due fratelli adiacenti sono entrambi pieni**; a quel punto da **2 nodi se ne derivano 3**, ciascuno riempito per 2/3.

## B+-tree

In un B-tree i valori di chiave hanno una **doppia funzione**: fanno da **separatori** (guidano la ricerca) e da **valori di chiave** (danno accesso al record). Nel **B+-tree** le due funzioni sono **separate**:

- le **foglie** contengono **tutti** i valori di chiave, con i puntatori ai record (RID) o ai blocchi (PID);
- **radice e nodi interni** sono organizzati come un B-tree e costituiscono solo una **"mappa"** di **separatori** di cammino: non memorizzano puntatori a record;
- a parità di dimensione del nodo, l'ordine della mappa è quindi **più grande** che in un B-tree;
- le **foglie sono concatenate in una lista** (nelle implementazioni attuali **doubly-linked**), con un puntatore alla testa -> elaborazioni **sequenziali** e **query di range** efficienti.

#### Differenze B-tree vs B+-tree:

| | **B-tree** | **B+-tree** |
| --- | --- | --- |
| Dove stanno i valori di chiave | in **tutti** i nodi | **tutti nelle foglie** (i livelli superiori li ripetono solo come separatori) |
| Puntatori ai record (RID) | in **tutti** i nodi | **solo nelle foglie** |
| Nodi interni | chiavi + RID + PID | **solo separatori + PID** |
| Ordine a parità di nodo | minore | **maggiore** (nodi interni più "leggeri") |
| Foglie collegate | no | **sì**, lista (doppiamente) concatenata |
| Ricerca singolo valore | può terminare **prima** di $h$ | costa **sempre** $h$ (+1 se i record non sono nelle foglie) |
| Query di range / scansione ordinata | **inefficiente** | **efficiente** (si scorre la lista delle foglie) |

#### Separatori:

L'unica funzione del separatore è determinare il cammino giusto -> <u>un separatore può anche non essere un valore di chiave presente nel file dati</u>. Con ordinamento crescente: sottoalbero **sinistro** $\le$ separatore, sottoalbero **destro** $>$ separatore.

> con chiavi alfanumeriche conviene **comprimere** i separatori (usare prefissi corti): si risparmia spazio e si può ridurre l'altezza. Varianti: **Simple Prefix B+-tree** e **Prefix B+-tree**.

#### Clustered vs unclustered:

- **clustered**: le foglie contengono (o puntano ordinatamente a) i record ordinati per valore di chiave;
- **unclustered**: le foglie puntano a record sparsi nelle pagine dati.

#### Secondary B+-tree (chiavi con valori ripetuti):

Per ogni valore di chiave la foglia gestisce una **lista di puntatori**:

- **a RID** (soluzione detta anche **inverted index**): la lista contiene un RID per ogni record con quel valore. La lista è mantenuta **ordinata per valori crescenti** (sia clustered che unclustered) per minimizzare i costi d'accesso alle pagine dati;
- **a PID**: tanti PID quante sono le **pagine** che contengono almeno un record con quel valore -> conveniente quando molti record con la stessa chiave stanno nella **stessa pagina** (tipicamente indice **clustered**).

## Esercizi: operazioni sul B-tree

#### Regole da tenere sempre a mente:

- nodo non radice: **min $g$, max $2g$ chiavi**; radice: **min 1, max $2g$ chiavi**;
- **tutte le foglie allo stesso livello**, sempre;
- i nodi interni **non devono essere pieni**, basta rispettare il minimo $g$;
- <u>segui rigorosamente l'ordine cronologico di inserimento dato dal testo</u>;
- **le modifiche partono sempre dalle foglie**: l'albero cresce e si accorcia **verso l'alto**, non si "appendono" mai nuovi nodi sotto le foglie.

#### Inserimento:

1. cerca la chiave: se già presente (e non si ammettono duplicati) non si inserisce nulla;
2. l'inserimento avviene **sempre in una foglia**;
3. **foglia non piena** -> inserisci $(k,p)$ nella posizione ordinata e riscrivi la foglia;
4. **foglia piena** -> **split**.

#### Split:

Nel nodo pieno $P$ si considera la sequenza ordinata delle $2g+1$ entry che si verrebbe a creare:

$$q_0,(k_1,q_1),\dots,(k_g,q_g),\ \mathbf{(k_{g+1},q_{g+1})},\ (k_{g+2},q_{g+2}),\dots,(k_{2g+1},q_{2g+1})$$

- la **chiave mediana** $k_{g+1}$ **sale** nel padre $Q$ (insieme al puntatore al nuovo nodo);
- si alloca un nuovo nodo $P'$: le prime $g$ chiavi restano in $P$, le ultime $g$ vanno in $P'$ (entrambi con $g+1$ puntatori);
- se anche $Q$ è pieno lo split **si propaga** verso l'alto; se si sdoppia la **radice**, la nuova radice contiene la sola $k_{g+1}$ e <u>l'altezza aumenta di 1</u>.

> **Esempio** ($g=2$, inserire **9**). Prima, $T \in \tau(2,2)$: radice `5 11 16 21`, foglie `1 2 3 4` / `6 7 8 10` / `12 13 14 15` / `17 18 19 20` / `22 23 24 25`.
> La foglia `6 7 8 10` è piena: sequenza `6 7 8 9 10`, mediana $k_3 = 8$ -> sale; restano `6 7` e `9 10`.
> Ma la radice `5 11 16 21` è a sua volta piena: sequenza `5 8 11 16 21`, mediana $k_3 = 11$ -> nuova radice `11`, con figli `5 8` e `16 21`.
> Risultato: $T \in \tau(2,3)$.

#### Gestione dell'overflow (per evitare split):

Due nodi $P$ e $P^*$ sono **adiacenti** se figli dello stesso padre $Q$ e indirizzati da puntatori adiacenti in $Q$. Invece di splittare $P$ pieno, si **ridistribuiscono le chiavi tra $P$, $P^*$ e $Q$** (la chiave di confine di $P$ sale in $Q$, il vecchio separatore scende in $P^*$).

> **Esempio** ($g=2$, inserire **60**). Prima: $Q =$ `16 42 75 142`, $P =$ `45 52 59 73` (pieno), $P^* =$ `81 87`.
> Dopo: $Q =$ `16 42 73 142`, $P =$ `45 52 59 60`, $P^* =$ `75 81 87`. Nessuno split: **73** è salito in $Q$ e **75** è sceso in $P^*$.

p.s. un B-tree che adotta questa strategia è detto **B-tree che gestisce l'overflow**: genera alberi con nodi **più pieni** ma ha **costi di inserimento maggiori**. Si può generalizzare a 3 o più fratelli.

#### Cancellazione:

1. se la chiave $y$ è in una **foglia** -> si rimuove direttamente;
2. se $y$ è in un **nodo interno** -> si sostituisce con il **valore di chiave più piccolo del suo sottoalbero destro** (si scende seguendo la catena dei puntatori $q_0$ fino a una foglia), poi si cancella **quella** chiave dalla foglia;
3. in entrambi i casi la cancellazione avviene di fatto in una foglia $L$: se $L$ resta con **meno di $g$ chiavi**, si attivano **catenation** o **underflow**.

#### Catenation (fusione):

Possibile se i due nodi adiacenti $P$ e $P'$ contengono **complessivamente meno di $2g$ chiavi** -> si attiva quando $P$ ha $g-1$ chiavi e $P'$ esattamente $g$. Si fondono i due nodi **tirando giù il separatore** dal padre $Q$. Poiché $Q$ perde un'entrata, può a sua volta scendere sotto $g$ -> il processo **si propaga** fino alla radice e <u>l'altezza può diminuire</u>.

> **Esempio** ($g=2$, cancellare **9**), esattamente l'inverso dell'esempio di split. Prima, $T \in \tau(2,3)$: radice `11`, interni `5 8` e `16 21`, foglie `1 2 3 4` / `6 7` / `9 10` / `12 13 14 15` / `17 18 19 20` / `22 23 24 25`.
> `9 10` scende a 1 chiave ($g-1$), il fratello `6 7` ne ha 2 ($g$): $1+2 = 3 < 2g$ -> catenation con il separatore `8` -> `6 7 8 10`.
> Ora `5 8` resta con la sola `5` -> si propaga: fusione con `16 21` tirando giù `11` -> `5 11 16 21`, che diventa la nuova radice.
> Risultato: $T \in \tau(2,2)$.

#### Underflow (ridistribuzione / prestito):

Se **prima** della cancellazione la somma delle chiavi in $P$ e $P'$ è **maggiore di $2g$**, non si può fondere: le chiavi vengono **ridistribuite** tra $P$, $P'$ e il padre $Q$. <u>L'underflow non si propaga</u>: $Q$ viene modificato ma il **numero** delle sue chiavi non cambia.

> **Esempio** ($g=2$, cancellare **52**). Prima: $Q =$ `16 42 73 142`, $P =$ `45 52`, $P' =$ `75 81 87` ($2+3 = 5 > 2g$).
> Dopo: il separatore **73** scende in $P$ e **75** sale da $P'$ in $Q$ -> $Q =$ `16 42 75 142`, $P =$ `45 73`, $P' =$ `81 87`.

#### Errori frequenti:

- **attenzione al nome**: qui **"underflow"** indica la **ridistribuzione** (il prestito dal fratello), non la condizione di nodo sotto-pieno. La fusione si chiama **catenation**;
- **$g$ è il minimo, $2g$ il massimo**: se il testo dà l'ordine come *Max. Degree* $m$ (numero massimo di figli, come nel tool di visualizzazione USF), allora $g = (m-1)/2$ e il massimo numero di chiavi per nodo è $m-1$;
- lo split usa la **mediana** $k_{g+1}$ della sequenza da $2g+1$ elementi, non "l'ultima" o "la prima metà";
- cancellando da un nodo interno si prende il **minimo del sottoalbero destro** (non il massimo del sinistro);
- a parità di $g$, $h$ e di valori di chiave, esistono **più B-tree validi**: dipende dalla sequenza di inserimento e dagli algoritmi usati.

## Formulario

#### B-tree $T \in \tau(g,h)$:

| Grandezza | Formula |
| --- | --- |
| N. **minimo** di nodi | $IP_{min} = 1 + \dfrac{2}{g}\left((g+1)^{h-1} - 1\right)$ |
| N. **massimo** di nodi | $IP_{max} = \dfrac{1}{2g}\left((2g+1)^{h} - 1\right)$ |
| N. **minimo** di chiavi | $NK_{min} = 1 + g\,(IP_{min}-1) = 2(g+1)^{h-1} - 1$ |
| N. **massimo** di chiavi | $NK_{max} = 2g \cdot IP_{max} = (2g+1)^{h} - 1$ |
| **Altezza** con $NK$ chiavi | $\left\lceil \log_{2g+1}(NK+1) \right\rceil \le h \le \left\lfloor 1 + \log_{g+1}\!\left(\dfrac{NK+1}{2}\right) \right\rfloor$ |

- caso **peggiore** (pochi nodi, $IP_{min}$): ogni nodo tranne la radice ha $g$ chiavi, la radice 1;
- caso **migliore** (molti nodi, $IP_{max}$): ogni nodo, radice compresa, ha $2g$ chiavi.

#### B+-tree:

Ordine, con nodi di $D$ byte, puntatori di $len(q)$ byte e separatori di $len(k)$ byte. Da $2g\,len(k) + (2g+1)\,len(q) \le D$:

$$g = \left\lfloor \frac{D - len(q)}{2\,(len(k) + len(q))} \right\rfloor$$

> es. $D = 4096$, $len(q) = 4$: con chiavi da 10 caratteri -> $g = 146$; con chiavi da 40 caratteri -> $g = 46$.

Numero di foglie ($u \approx \ln 2 \approx 0.69$ = utilizzazione media delle foglie, $NR$ = n. record, $NK$ = n. valori di chiave distinti, $len(p)$ = lunghezza del RID):

| Caso | Formula |
| --- | --- |
| **Primary** B+-tree | $NL = \left\lceil \dfrac{NR \times (len(k) + len(p))}{D \times u} \right\rceil$ |
| **Secondary** B+-tree (a RID) | $NL = \left\lceil \dfrac{NK \times len(k) + NR \times len(p)}{D \times u} \right\rceil$ |

Altezza di un primary B+-tree di ordine $g$:

$$1 + \left\lceil \log_{2g+1} NL \right\rceil \le h \le 2 + \left\lfloor \log_{g+1} \frac{NL}{2} \right\rfloor$$

- il minimo si ha con tutti i nodi intermedi (radice compresa) **pieni**: $(2g+1)^{h-1} \ge NL$;
- il massimo si ha con radice a 2 soli puntatori e nodi intermedi a $g+1$: $2(g+1)^{h-2} \le NL$;
- **costo di ricerca** di un singolo valore = $h$ nodi visitati, **+1** se i record non stanno nelle foglie;
- p.s. per un **secondary** B+-tree, nel calcolo dell'altezza si usa $\min\{NK, NL\}$ al posto di $NL$, perché una foglia va indirizzata dal livello superiore <u>solo se contiene RID di un "nuovo" valore di chiave</u>.
