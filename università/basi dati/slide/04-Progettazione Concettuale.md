[04-ProgettazioneConcettuale](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/secondo anno/base dati/slide/04-ProgettazioneConcettuale.pdf>)

Fasi generali della progettazione di un DB:
![[Pasted image 20260703153232.png|229]] 
la fase di raccolta e analisi dei requisiti è svolta congiuntamente alla progettazione concettuale, fasi principali:
- costruzione di un **glossario dei termini**:
		raramente i requisiti espressi in linguaggio naturale sono privi di ambiguità, frequente il caso di amonimie e sinonimie. Un modo efficace per rappresentare i concetti più rilevanti è il glossario dei termini, che fornisce per ogni concetto rilevanti: una breve descrizione, eventuali sinonimi e relazioni con altri concetti del glossario stesso.
		-es: ![[Pasted image 20260703153956.png]]
- **tabella delle operazioni**:
		contiene le operazioni da effettuare sui dati e la frequenza con cui devono essere eseguite, opportuno utilizzare la stessa terminologia del glossario dei termini. Queste informazioni saranno poi molto rilevanti durante la fase di progettazione logica.
- creazione di **schemi E/R** parziali per la integrazione finale in uno schema completo finale:
		regole guide su come rappresentare i concetti in base al contesto:
			- entità: se ha proprietà significative e descrive oggetti con esistenza autonoma;
			- attributo: se è semplice e non ha proprietà;
			- associazione: se correla due o più concetti;
			- generalizzazione/specializzazione: se generalizza altri concetti/se è una specializzazione di un altro concetto.
		analizziamo varie strategie di progettazione:
			- strategia **top-down**: schema iniziale molto astratto ma completo, che viene successivamente raffinato fino ad arrivare allo schema finale.
			- strategia **botton-up**: suddividono le specifiche in modo da sviluppare semplici schemi parziali ma dettagliati, che poi vengono integrati tra loro
			- strategia **inside-out**: si sviluppa partendo dai concetti più importanti per poi svilupparsi aggiungendo quelli a essi correlati (caso particolare di botton-up).
			- l'approccio reale poi nella maggior parte dei casi è un approccio =="misto"==:
				- si individuano i concetti principali e si realizza uno schema scheletrico;
				- sulla base di quello di decompone;
				- successivamente poi si raffina, si espande e si integra.
		La qualità di uno schema concettuale si verifica tramite:
			- correttezza: né errori sintattici né semantici;
			- completezza: tutti i dati di interesse devono essere specificati;
			- leggibilità: riguarda anche aspetti prettamente estetici dello schema;
			- minimalità: evitare il più possibili elementi rindondanti.
> slide riassuntiva:
![[Pasted image 20260703160113.png]]