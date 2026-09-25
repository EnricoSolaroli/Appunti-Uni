[08-AlgebraRelazionale](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/secondo anno/base dati/slide/08-AlgebraRelazionale.pdf>)

indice:
> [!faq]- Indice degli Argomenti (Clicca per espandere)
> - [[#08-AlgebraRelazionale]]
> 	- [[#Premesse (limitazioni)]]
> - [[#Operatori]]
> 	- [[#Selezione]]
> 	- [[#Proiezione]]
> 	- [[#Join naturale]]
> 	- [[#Unione e differenza]]
> 	- [[#Il problema dei nomi]]
> 	- [[#Prodotto cartesiano]]
> 	- [[#Ridenominazione]]
> 	- [[#Self-join]]
> - [[#Operatori derivati]]
> 	- [[#Divisione]]
> 	- [[#Theta-join]]
> 	- [[#Semijoin]]
> - [[#Algebra con valori nulli]]
> 	- [[#Logica a tre valori]]
> 	- [[#Join ≠ intersezione con valori nulli]]
> 	- [[#Outer join]]
> - [[#Espressioni]]
> 	- [[#Viste]]
> 	- [[#Equivalenza di espressioni]]
> 	- [[#Regole di equivalenza]]
> - [[#Strumenti per AR]]

Un **linguaggio di manipolazione (DML)** permette di interrogare e modificare istanze di basi di dati. Oltre ai linguaggi utente (es. SQL) esistono linguaggi formali che enfatizzano gli aspetti "essenziali" dell'interazione con un DB relazionale. In particolare due linguaggi si concentrano sull'interrogazione:

- **calcolo relazionale**: linguaggio dichiarativo basato sulla logica dei predicati del primo ordine;
- **algebra relazionale (AR)**: linguaggio procedurale di tipo algebrico i cui operandi sono relazioni.

> calcolo e algebra relazionale sono **equivalenti** in termini di potere espressivo. L'AR costituisce le basi formali per le operazioni del modello relazionale e la loro implementazione in un RDBMS. SQL incorpora aspetti di entrambi.

#### Premesse (limitazioni):

Le limitazioni espressive sono in parte dettate dall'esigenza di garantire una soluzione efficiente all'ottimizzazione delle interrogazioni, che non sarebbe possibile con un linguaggio general-purpose -> <u>l'insieme delle operazioni dell'AR non è Turing-completo</u>. La principale limitazione è l'**impossibilità di esprimere interrogazioni ricorsive** (caso paradigmatico: il calcolo della chiusura transitiva di una relazione binaria).

> la relazione (Start, End), chiusura transitiva di (From, To), non è computabile né in algebra né in calcolo relazionale.

## Operatori

L'AR è costituita da un insieme di operatori di base che si applicano a una o più relazioni e producono una relazione:

- **operatori unari**: selezione $\sigma$, proiezione $\pi$, ridenominazione $\rho$;
- **operatori binari**: unione $\cup$, differenza $-$, join naturale $\bowtie$.

Altri operatori **derivati** si definiscono a partire da quelli di base. La semantica di ogni operatore si definisce specificando come lo schema del risultato dipende dagli operandi e come lo stato del risultato dipende dagli stati in ingresso. Gli operatori si compongono in espressioni di complessità arbitraria.

> **Completezza**: l'insieme ${\sigma, \pi, \rho, \cup, -, \bowtie}$ è completo, ogni altra operazione può essere espressa come composizione di queste. Alcuni testi usano ${\sigma, \pi, \rho, \cup, -, \times}$ (con $\times$ prodotto cartesiano); i join non sono strettamente necessari ma sono più "comodi" e frequenti nei RDBMS.

p.s. per ora si assume assenza di valori nulli.

#### Selezione:

L'operatore di selezione $\sigma_F(R)$ seleziona un <u>sottoinsieme delle tuple</u> di una relazione, applicando a ciascuna una formula booleana F. Lo **schema resta invariato**.

- $\sigma_F(r) = \{ t \mid t \in r \text{ AND } F(t) = vero \}$
- F si compone di predicati connessi da AND ($\wedge$), OR ($\vee$), NOT ($\neg$);
- ogni predicato è del tipo $A ; \theta ; c$ oppure $A ; \theta ; B$, dove A, B sono attributi, c è una costante, $\theta \in {=, \neq, <, >, \leq, \geq}$.

es: `ESAMI`

| Matricola | CodCorso | Voto | Lode |
| --------- | -------- | ---- | ---- |
| 29323     | 483      | 28   | no   |
| 39654     | 729      | 30   | sì   |
| 35467     | 913      | 30   | no   |

$\sigma_{(Voto=30) \wedge (Lode='no')}(ESAMI)$ -> restituisce solo la tupla (35467, 913, 30, no).

#### Proiezione:

L'operatore di proiezione $\pi_Y(R)$ è ortogonale alla selezione: seleziona un <u>sottoinsieme Y degli attributi</u> di una relazione.

- $\pi_Y(r) = \{ t[Y] \mid t \in r \}$

> il risultato è una relazione, dunque eventuali **duplicati vengono eliminati** (nell'algebra estesa ai multiset esiste anche la proiezione senza eliminazione di repliche).

**Cardinalità del risultato**: in generale $|\pi_Y(r)| \leq |r|$. L'uguaglianza è garantita <u>se e solo se Y è una superchiave</u> di R(X).

- (se Y è superchiave) non esistono due tuple distinte con lo stesso valore su Y;
- (se Y non è superchiave) è possibile costruire uno stato con due tuple che "collassano" dopo la proiezione.

p.s. può capitare che "per caso" la cardinalità non vari anche se Y non è superchiave.

#### Join naturale:

L'operatore $R_1 \bowtie R_2$ combina le tuple di due relazioni sulla base dell'**uguaglianza dei valori degli attributi comuni** ($X_1 \cap X_2$). Lo schema del risultato è l'unione $X_1 \cup X_2$ degli schemi degli operandi.

- $r_1 \bowtie r_2 = \{ t \mid t[X_1] \in r_1 \text{ AND } t[X_2] \in r_2 \}$
- ogni tupla del risultato è il "match" di una tupla di $r_1$ con una di $r_2$ sugli attributi comuni.

**Proprietà**: è commutativo e associativo: $$r_1 \bowtie r_2 = r_2 \bowtie r_1 \qquad r_1 \bowtie r_2 \bowtie r_3 = (r_1 \bowtie r_2) \bowtie r_3$$

Una tupla che non fa match con nessuna dell'altra relazione è detta **dangling**. Nel caso limite il risultato può essere vuoto, all'altro estremo ogni tupla di $r_1$ si combina con ogni tupla di $r_2$: $$0 \leq |r_1 \bowtie r_2| \leq |r_1| \cdot |r_2|$$

- se il join è su una **superchiave** di $R_1$ -> ogni tupla di $r_2$ fa match con al massimo una di $r_1$, quindi $|r_1 \bowtie r_2| \leq |r_2|$;
- se $X_1 \cap X_2$ è **chiave** di $R_1$ e **foreign key** in $R_2$ (vincolo d'integrità referenziale) -> $r_1 \bowtie r_2 = r_2$ (vero in assenza di valori nulli).

**Casi particolari**:

- se $X_1 = X_2$ (stesso schema) -> il join naturale equivale all'**intersezione** $\cap$;
- se $X_1 \cap X_2 = \emptyset$ (nessun attributo in comune) -> il join naturale equivale al **prodotto cartesiano**$\times$ (non ordinato, a differenza del caso matematico).

#### Unione e differenza:

Poiché le relazioni sono insiemi, sono ben definite unione $\cup$ e differenza $-$. Entrambe si applicano <u>solo a relazioni con lo stesso insieme di attributi</u>.

- $r_1 \cup r_2 = { t \mid t \in r_1 \text{ OR } t \in r_2 }$
- $r_1 - r_2 = { t \mid t \in r_1 \text{ AND } t \notin r_2 }$

> unione e intersezione sono **commutative**, la differenza **non** lo è: $R \cup S = S \cup R$; $R \cap S = S \cap R$; $R - S \neq S - R$.

L'**intersezione** è un operatore derivato, si esprime tramite la differenza: $$r_1 \cap r_2 = r_1 - (r_1 - r_2)$$

##### Il problema dei nomi:

Join naturale, unione e differenza operano sulla base degli attributi comuni ai due schemi -> se gli attributi hanno nomi diversi (ma stesso significato) o nomi uguali (ma significato diverso) le operazioni non funzionano come vorremmo. Serve la **ridenominazione**.

#### Prodotto cartesiano:

$R_1 \times R_2$ assume che gli schemi siano disgiunti ($X_1 \cap X_2 = \emptyset$), quindi coincide con il join naturale in questo caso.

> se $X_1 \cap X_2 \neq \emptyset$ e si vuole comunque un prodotto cartesiano occorre prima **ridenominare**gli attributi comuni per renderli diversi.

#### Ridenominazione:

L'operatore $\rho$ modifica lo schema di una relazione **cambiando i nomi di uno o più attributi**, lasciando invariati i valori delle tuple.

- $\rho_{Y \leftarrow X}(R)$ -> dato R(XZ) cambia lo schema in YZ;
- se si cambia il nome di più attributi, l'**ordine in cui si elencano è significativo**.

p.s. in alcuni testi $\rho$ ha anche una forma per cambiare il nome della relazione: $\rho_{S(Y \leftarrow X)}(R)$ modifica R(XZ) in S(YZ).

#### Self-join:

La ridenominazione permette di eseguire il join di una relazione con sé stessa (si ricordi che $r \bowtie r = r$).

es: data `GENITORI(Genitore, Figlio)`, per trovare nonni e nipoti: $$\rho_{Nonno,Genitore \leftarrow Genitore,Figlio}(GENITORI) \bowtie GENITORI$$ … poi si ridenomina Figlio in Nipote e si proietta su {Nonno, Nipote}.

## Operatori derivati

#### Divisione:

La divisione $R_1 \div R_2$ (con $r_1$ su $R_1(X_1 X_2)$ e $r_2$ su $R_2(X_2)$) è il **più grande insieme di tuple**$t \in \pi_{X_1}(r_1)$ (schema $X_1$) tale che, facendo il prodotto cartesiano con $r_2$, si ottiene una relazione contenuta in (o uguale a) $r_1$.

- $r_1 \div r_2 = { t \mid {t} \times r_2 \subseteq r_1 }$
- equivalente: $r_1 \div r_2 = \{ t \mid t \in \pi_{X_1}(r_1) \wedge \forall u \in r_2 ; (t u \in r_1) \}$

Si esprime tramite operatori di base come: $$R_1 \div R_2 = \pi_{X_1}(R_1) - \pi_{X_1}((\pi_{X_1}(R_1) \times R_2) - R_1)$$

> è utile per interrogazioni di tipo <u>"universale"</u> (es: "i tecnici che lavorano in **tutti** i reparti", "le date con voli effettuati da **tutte** le linee aeree").

![[Screenshot 2026-07-18 at 10.17.05.png|302]]![[Screenshot 2026-07-18 at 10.22.46.png|340]]
#### Theta-join:

$R_1 \bowtie_F R_2$ è la combinazione di **prodotto cartesiano e selezione**: $$r_1 \bowtie_F r_2 = \sigma_F(r_1 \times r_2)$$ con $R_1$ e $R_2$ senza attributi in comune e F composta da "predicati di join" del tipo $A ; \theta ; B$ (con $A \in X_1$, $B \in X_2$).

- se F è una congiunzione di **uguaglianze** -> si parla di **equijoin**;
- il join naturale si può simulare con ridenominazione + equijoin + proiezione;
- theta-join e join naturale sono detti anche **inner join**.

> precisazione: così definito il theta-join richiede schemi disgiunti. In molti testi/RDBMS invece accetta schemi arbitrari e "prende il posto" del join naturale (tutti i predicati di join sono esplicitati); per l'univocità degli attributi nel risultato si usa il nome dello schema come prefisso (es. `PARTECIPAZIONI.CodRicercatore`).
![[Screenshot 2026-07-18 at 10.31.05.png|646]]

esempio d'uso di self join:
![[Screenshot 2026-07-18 at 10.34.01.png|317]]![[Screenshot 2026-07-18 at 10.34.14.png|319]]
#### Semijoin:

Il semijoin $R \ltimes S$ (da S a R, detto **left semijoin**) è la **proiezione del natural join sugli attributi dello schema R**: $$r \ltimes s = \pi_X(r \bowtie s) = r \bowtie \pi_{X \cap Y}(s)$$

> utile in **ambiente distribuito**: se r ed s sono su nodi diversi, riduce la mole dei dati da trasferire. Vale: $s \bowtie r = (s \ltimes r) \bowtie r = r \bowtie s$.

p.s. <u>in generale non è simmetrico</u> ($R \ltimes S \neq R \rtimes S$). Il **right semijoin** $S \rtimes R$ equivale a $R \ltimes S$. La definizione si estende anche al theta-join.![[Screenshot 2026-07-18 at 10.41.59.png]]

## Algebra con valori nulli

La presenza di valori nulli richiede un'estensione della semantica degli operatori (gestione importante ai fini pratici). Esistono diversi approcci, nessuno completamente soddisfacente; qui si adotta quello "tradizionale", molto simile a quello di SQL.

- **Proiezione, unione, differenza** ($\pi$, $\cup$, $-$) -> continuano a comportarsi usualmente: due tuple sono uguali anche se contengono NULL.
- **Selezione** ($\sigma$) -> problema: in presenza di NULL un predicato può non essere valutabile -> serve la logica a tre valori.
- **Join naturale** ($\bowtie$) -> **non** combina due tuple se hanno entrambe valore nullo su un attributo comune (e valori uguali sugli altri comuni).

#### Logica a tre valori:

Oltre a Vero (V) e Falso (F) si introduce **Sconosciuto (?)**. Una selezione produce le sole tuple per cui l'espressione risulta **vera**. Per operare esplicitamente con i NULL si introduce l'operatore di confronto **IS**:

- `A IS NULL`;
- `NOT (A IS NULL)` = `A IS NOT NULL`.

| NOT |     |
| --- | --- |
| V   | F   |
| F   | V   |
| ?   | ?   |

| AND | V   | F   | ?   |
| --- | --- | --- | --- |
| V   | V   | F   | ?   |
| F   | F   | F   | F   |
| ?   | ?   | F   | ?   |

|OR|V|F|?|
|---|---|---|---|
|V|V|V|V|
|F|V|F|?|
|?|V|?|?|

#### Join ≠ intersezione con valori nulli:

In assenza di NULL l'intersezione si esprime in due modi: $r_1 \cap r_2 = r_1 \bowtie r_2$ oppure $r_1 \cap r_2 = r_1 - (r_1 - r_2)$. <u>Con i valori nulli i due modi danno risultati diversi</u>:

- col **join naturale** -> il risultato non contiene tuple con valori nulli;
- con la **differenza** -> tali tuple compaiono nel risultato.

#### Outer join:

In alcuni casi è utile che anche le tuple **dangling** compaiano nel risultato. L'operatore **outer join** (o external join) "completa" con valori nulli le tuple dangling. Tre varianti -> per mantenere le tuple dell'operando sx, dx o di entrambi:

- **Left outer join** ($⟕$): solo le tuple dangling dell'operando **sinistro**, completate con NULL;![[Screenshot 2026-07-18 at 10.57.45.png]]
- **Right outer join** ($⟖$): solo le tuple dangling dell'operando **destro**, completate con NULL;![[Screenshot 2026-07-18 at 10.57.58.png]]
- **Full outer join** ($⟗$): le tuple dangling di **entrambi** gli operandi, completate con NULL.![[Screenshot 2026-07-18 at 10.58.06.png]]

p.s. spesso il risultato di un outer join <u>non ammette una chiave primaria</u> sulla base degli attributi definiti (nei RDBMS si dispone comunque di un identificatore di riga).

## Espressioni

Gli operatori dell'AR si combinano liberamente, rispettando le regole di applicabilità. Oltre alla rappresentazione "lineare" si può usare una **rappresentazione grafica ad albero**. La valutazione procede **bottom-up**.

#### Viste:

Per "semplificare" espressioni complesse si possono usare le **viste**: espressioni a cui si assegna un nome e che si riutilizzano in altre espressioni.

- sintassi: **V := E** dove V è il nome della vista ed E è l'espressione.

#### Equivalenza di espressioni:

Un'interrogazione è una **funzione** che a ogni stato `db` associa una relazione risultato. Un'espressione E è una modalità per esprimere tale funzione ed E(db) è il risultato.

- due espressioni $E_1$, $E_2$ su schema DB sono **equivalenti** ($E_1 \equiv_{DB} E_2$) se e solo se per ogni stato db producono lo stesso risultato: $E_1(db) = E_2(db)$;
- se l'equivalenza non dipende dallo schema specifico si scrive $E_1 \equiv E_2$.

> due espressioni equivalenti danno lo stesso risultato, ma <u>non con lo stesso costo in risorse</u> -> fondamentale per l'**ottimizzazione delle interrogazioni** nei RDBMS. Interessano soprattutto le regole che riducono la cardinalità degli operandi e che semplificano l'espressione (es. $R \cup R \equiv R$ senza valori nulli).

#### Regole di equivalenza:

- **join naturale** commutativo e associativo: $$E_1 \bowtie E_2 \equiv E_2 \bowtie E_1 \qquad (E_1 \bowtie E_2) \bowtie E_3 \equiv E_1 \bowtie (E_2 \bowtie E_3)$$
- **raggruppamento** di selezione e proiezione: $$\sigma_{F_1}(\sigma_{F_2}(E)) \equiv \sigma_{F_1 \wedge F_2}(E) \qquad \pi_Y(\pi_{YZ}(E)) \equiv \pi_Y(E)$$
- **commutazione** selezione/proiezione (se F si riferisce solo ad attributi in Y): $$\pi_Y(\sigma_F(E)) \equiv \sigma_F(\pi_Y(E))$$
- **push-down della selezione** rispetto al join (se F è sullo schema di $E_1$): $$\sigma_F(E_1 \bowtie E_2) \equiv \sigma_F(E_1) \bowtie E_2$$
- **push-down delle proiezioni**: un RDBMS cerca di eliminare quanto prima gli attributi che non servono. Un attributo è utile solo se richiesto in output o necessario per un operatore non ancora eseguito.

## Strumenti per AR

- **RelaX** (Università di Innsbruck): servizio online per scrivere ed eseguire espressioni di AR, con DB di prova. Permette anche di scrivere query SQL e mostrarne l'albero equivalente in AR.
- **RAT**: free software didattico per convertire espressioni AR in SQL.
- **RA**: interprete di espressioni algebriche relazionali.