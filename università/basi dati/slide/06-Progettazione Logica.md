[06-ProgettazioneLogica](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/secondo anno/base dati/slide/06-ProgettazioneLogica.pdf>)

![[Pasted image 20260707114637.png|266]]
Obbiettivo durante la fase di progettazione logica è, partendo da uno schema concettuale, realizzare uno schema logico che rappresenti in modo più fedele possibile i concetti e i requisiti analizzati e che sia anche "efficiente".
Con il termine "fedele" si intende che i due schemi sono equivalenti dal punto di vista della loro capacità informativa.

-es nel quale viene fatta una traduzione sbagliata.
![[Pasted image 20260707115125.png]]

La traduzione avviene operando una sequenza di trasformazioni/traduzioni semplici, per ognuna della quali è altrettanto semplice rispettare regole che garantiscono l'equivalenza: regole che preservano l'informazione (regole sulla "struttura") e regole che garantiscono l'equivalenza (regole sui "vincoli").

>l'equivalenza può comunque essere espressa solo in parte, ci sono infatti alcuni vincoli che non possono essere direttamente espressi in SQL.

La progettazione logica è articolata in due fasi:
1. [[#Ristrutturazione:]] eliminazione dallo schema E/R dei costrutti che non possono essere direttamente rappresentati nel modello relazionare:
	- [[#Attributi multivalore|attributi multivalore]];
	- [[#Eliminazione delle gerarchie|gerarchie di generalizzazione]];
	- [[#Partizionamenti e accorpamenti|partizionamento/accorpamento di entità e associazioni]];
	- [[#scelta degli identificatori principali]].
2. [[#Traduzione]]: seguendo le regole standard si mappano i costrutti residui in elementi del modello relazionale.

## Ristrutturazione:
Ci si pone l'obbiettivo di semplificare la traduzione e "ottimizzare" le prestazioni. Per confrontare tra loro le diverse alternative è fondamentale una fase in cui bisogna stimare i "carichi di lavoro" ovvero: capire quali saranno le principali operazioni che la DB dovrà supportare e i "volumi" dei dati in gioco.

>Regola 80-20: il 20% delle operazioni produce 80% del carico.

Gli indicatori che si individuano tengono in considerazione sia spazio (numero di istanze previste) che tempo (numero di istanze visitate durante l'operazione).

- **Tavola dei volumi**: specifica il numero stimato di istanze per ogni entità (E) e associazione(R)
#### descrizione delle operazioni:
analisi delle operazioni principali richiede la codifica di:
- **tipo dell'operazione**: Interattiva(I) o Batch(B) -> importante favorire le operazioni Interattive;
- **frequenza**: numero medio di esecuzioni in un determinato periodo;
- **schema di navigazione**: frammento di schema E/R sul quele viene evidenziato il "cammino logico" da percorrere per accedere alle informazioni di interesse.
Poi per ogni operazioni si costruisce **la tavola degli accessi** basata sullo schema di navigazione, costituita da tre campi: costrutto(entità o relazione), accessi e tipo (Scrittura o Lettura).

>il costo degli accessi in scrittura è in genere considerato doppio rispetto a quello delle letture.

#### analisi delle ridondanze:
una ridondanza è un'informazione significativa ma derivabile da altre, in questa fase bisogna decidere se conviene mantenerle o meno. Mantenere una ridondanza comporta appesantire gli aggiornamenti e occupare maggiore spazio, ma anche la semplificazione di alcune interrogazioni.
Le possibili ridondanze riguardano: attributi derivabili e associazioni derivabili.

es: per capire se mantenere o meno una ridondanza prima di tutto bisogna capire quali operazioni vengono influenzate da questa scelta, capire cosa succede se viene mantenuta o meno la ridondanza analizzando le tabelle di accesso delle operazioni e facendo un calcolo totale degli accessi per vedere quale delle due opzioni conviene considerare.

#### Eliminazione delle gerarchie:
Nel modello relazionale, le gerarchie vengono sostituite con entità e relazioni. Vi sono 3 possibilità:

Schema di riferimento:
![[Screenshot 2026-07-07 at 16.34.30.png|289]]

1. ***Collasso verso l'alto*** (accorpare le entità figlie nel genitore):
	![[Screenshot 2026-07-07 at 16.35.12.png|355]]
	"tipo" è un attributo selettore. 
	La specifica implementazione dipende dalla copertura della gerarchia:
	- totale esclusiva: Tipo assume N valori, quante sono le sotto-entità;
	- parziale esclusiva: Tipo assume N+1 valori;
	- sovrapposta: occorrono tanti selettori quante sono le sotto-entità.
	
	p.s. le eventuali associazioni connesse alle sotto-entità si trasportano su E, le eventuali cardinalità minime diventano 0.
	
2. Collasso verso il basso (accorpare il genitore nelle entità figlie): ![[Screenshot 2026-07-07 at 16.45.48.png|390]]
	Può essere fatto solo se la copertura è completa, invece se la copertura non 
	è esclusiva introduce ridondanza -> consigliato solo nel caso di <u>copertura tot. e esclusiva</u>!!
	 
3. ***sostituire la generalizzazione con associazioni***:![[Screenshot 2026-07-07 at 16.55.57.png|397]]
	Tutte le entità vengono mantenute: le entità figlie sono in associazione binaria con l'entità padre e sono identificate esternamente. <u>Questo tipo di soluzione è sempre possibile indipendentemente dal tipo di copertura</u>.

COME SCEGLIERE? -> considerando sia il numero degli accessi sia l'occupazione di spazio. Bisogna anche cercare di <u>mantenere insieme ciò che viene usato insieme.</u>
- verso l'alto: conviene se gli accessi all'entità padre e alle entità figlie sono contesutali;
- verso il basso: conviene se gli accessi sono al contrario distinti, ma è possibile solo con generalizzazioni totali;
- sostituzione: conviene se gli accessi rispetto padre e figlie sono distinti.
Possibili anche soluzioni "ibride", soprattuto in gerarchie a più livelli.

es di soluzione ibrida:
![[Screenshot 2026-07-07 at 17.04.55.png|310]]

#### Partizionamenti e accorpamenti:
Si può applicare come no, dipende dai casi. Se vengono fatte è sempre per rendere più efficienti le operazioni, seguendo sempre le stesse dinamiche: raggruppare ciò che viene usato insieme e separare i concetti che vengono acceduti separatamente.
I casi principali sono:
- partizionamento verticale di entità:
	![[Screenshot 2026-07-08 at 09.32.46.png|364]]
- partizionamento orizzontale di associazioni:
	![[Screenshot 2026-07-08 at 09.58.05.png|368]]
- accorpamenti di entità e associazioni:
	![[Screenshot 2026-07-08 at 09.57.26.png|366]]

#### Attributi multivalore:
Ci sono varie opzioni su come procedere all'eliminazione di un attributo multivalore:
- se la cardinalità dell'attributo è (1,N) -> si introduce una nuova entitá le cui istanze sono identificate dai valori dell'attributo:
	![[Screenshot 2026-07-08 at 09.36.48.png|211]]![[Screenshot 2026-07-08 at 09.37.12.png|372]]
- se è nota la caridinalità massima K di un attributo multivalore -> è possibile prevedere K attributi a singolo valore:
	![[Screenshot 2026-07-08 at 09.39.34.png|184]]
- se un valore dell'attributo multivalore compare una sola volta nella ripetizione esso può costituire l'identificatore della nuova entità:
	![[Screenshot 2026-07-08 at 09.41.29.png|194]]![[Screenshot 2026-07-08 at 09.41.48.png|340]]
- se invece può comparire più volte nella ripetizione occorre introdurre un <u>numero d'ordine</u>:
	![[Screenshot 2026-07-08 at 09.53.18.png|144]]![[Screenshot 2026-07-08 at 09.53.30.png|385]]

#### scelta degli identificatori principali:
Operazione indispensabile, corrisponde alla scelta della chiave primaria, deve rispettare i seguenti criteri: assenza di opzionalità, semplicità, utilizzo nelle operazioni più frequenti o importanti. Se nessuno degli identificatori dell'entità soddisfa queste caratteristiche si introducono nuovo attributi (codici).

## Traduzione:
- traduzione delle entità:
	ogni entità è tradotta con una relazione con gli stessi attributi:
	 - la <u>chiave primaria</u> -> coincide con l'identificatore principale dell'entità e viene sottolineata;
	 - gli attributi composti -> *suddivisi nei componenti* oppure *mappati in un singolo attributo* il cui dominio viene opportunamente definito.
	 - (\*) ->  indica la possibilità delle presenza di un valore nullo.
	
- traduzione delle associazioni:
	ogni associazione è tradotta con una relazione con gli stessi attributi, cui si aggiungono gli identificatori di tutte le entità che essa collega.
	- gli identificatori delle entità collegate (possono essere rinominati per essere più chiari) costituiscono una superchiave;
	- la chiave dipende dalle cardinalità massime delle entità nell'associazione;
	- le cardinalità minime determinano la presenza o meno di valori nulli.

	es vari:
	- associazioni ad anello molti a molti: ![[Screenshot 2026-07-08 at 10.15.57.png|388]]
	- associazioni ad anello uno a molti (niente di particolare):
		![[Screenshot 2026-07-08 at 10.24.36.png|235]]![[Screenshot 2026-07-08 at 10.24.52.png|272]]
	- associazione ad anello uno a uno:
		in questo caso la traduzione ad una relazione è problematica se entrambe le partecipazioni sono opzionali.
		![[Screenshot 2026-07-08 at 10.48.34.png|176]]![[Screenshot 2026-07-08 at 10.48.48.png|342]]
	- associazioni n-arie molti a molti:
		![[Screenshot 2026-07-08 at 10.17.14.png|396]]
	- associazioni uno a molti:
		![[Screenshot 2026-07-08 at 10.19.12.png|405]]
		in questo caso il nome della squadra non fa parte della chiave di contratto e poiché un giocatore può avere un contratto con una sola squadra, nella relazione Contratto un giocatore non può apparire in più tuple. Si può pertanto adottare una soluzione più compatta:![[Screenshot 2026-07-08 at 10.21.43.png]]
		se fosse min-card(Giocatore, Contratto) = 0, gli attributi Squadra e Ingaggio dovrebbero entrambi ammettere valore nullo.
	- associazioni uno a uno:
		![[Screenshot 2026-07-08 at 10.37.58.png|376]]
		si hanno a disposizione 3 possibilità:
			1. 
			![[Screenshot 2026-07-08 at 10.40.33.png|314]]
			2. 
			![[Screenshot 2026-07-08 at 10.39.54.png|250]]
			3. 
			![[Screenshot 2026-07-08 at 10.39.00.png|256]]
		nel particolare caso in cui si ha un'opzionalità le possibili soluzioni si restringono. Prendendo l'esempio di prima e sostituendo Direttore con Impiegato, se min-card(Impiegato-Direzione) = 0, tradurre l'associazione Direzioni in Impiegato non è una buona scelta, converrebbe mettere in Dipartimento il riferimento ad Impiegato.![[Screenshot 2026-07-08 at 10.47.00.png|400]]
	- entità con identificazione esterna:
		In questo caso la traduzione è obbligatoria, si deve importare l'identificatore della entità identificante:
		![[Screenshot 2026-07-08 at 10.27.02.png|440]]
		nel caso in cui ci sono identificazioni esterne in cascata bisogna partire dalle entità non identificate esternamente e propagare gli identificatori che si ottengono:
		![[Screenshot 2026-07-08 at 10.31.19.png|434]]

esempio finale:
![[Screenshot 2026-07-08 at 10.52.07.png|441]]
![[Screenshot 2026-07-08 at 10.52.19.png|443]]
![[Screenshot 2026-07-08 at 10.52.45.png|445]]
