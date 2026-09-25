[1-IngegneriaSW](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/ingegneria del software/slide/1-IngegneriaSW.pdf>)

# Ingegneria del Software – 1

## Indice

1. **Introduzione e definizioni** (slide 2–3)
	- [[#Slide 2 – Introduzione|Nascita dell'ingegneria del software e timeline storica]]
	- [[#Slide 3 – Definizioni|Le tre definizioni di ingegneria del software]]
2. **La qualità del software** (slide 4–6)
	- [[#Slide 4 – La qualità del software|Classificazione: interne/esterne, prodotto/processo]]
	- [[#Slide 5 – La qualità del software|Correttezza, affidabilità, robustezza, efficienza, portabilità]]
	- [[#Slide 6 – La qualità del software|Manutenibilità, interoperabilità e qualità di processo]]
3. **Il ciclo di vita dei sistemi informatici** (slide 7–9)
	- [[#Slide 7 – 1. Il ciclo di vita dei sistemi informatici|Elenco delle attività del ciclo di vita]]
	- [[#Slide 8 – Il ciclo di vita|Dalla definizione strategica al collaudo in fabbrica]]
	- [[#Slide 9 – Il ciclo di vita|Dalla certificazione all'evoluzione e ai tipi di manutenzione]]
4. **Definizione strategica, pianificazione e studio di fattibilità** (slide 10–13)
	- [[#Slide 10 – 2. Definizione strategica e pianificazione|Definizione degli interventi e valutazione dei costi]]
	- [[#Slide 11 – Studio di fattibilità|Scopo e contenuti dello studio di fattibilità]]
	- [[#Slide 12 – Studio di fattibilità|Fattibilità tecnica, economica, temporale e obiettivi]]
	- [[#Slide 13 – Studio di fattibilità|Struttura in 7 punti: AS-IS, TO-BE, rischi, costi-benefici]]
5. **Analisi dei requisiti** (slide 14–18)
	- [[#Slide 14 – 3. Analisi dei requisiti|Scopo e oggetto dell'analisi]]
	- [[#Slide 15 – Specifica dei requisiti|Specifica come accordo: chiarezza, non ambiguità, consistenza]]
	- [[#Slide 16 – Importanza dei requisiti|Costo relativo della correzione degli errori]]
	- [[#Slide 17 – Alcune definizioni|Definizioni di analisi: De Marco, Coad, Davis]]
	- [[#Slide 18 – Cosa e come modellare|Processo incrementale e aspetti statici, dinamici, funzionali]]
6. **I metodi di analisi** (slide 19–26)
	- [[#Slide 19 – Metodi di analisi|I tre approcci: oggetti, funzioni, stati]]
	- [[#Slide 20 – Analisi orientata agli oggetti|Oggetti e interrelazioni, stabilità delle strutture]]
	- [[#Slide 22 – Analisi orientata alle funzioni|Flussi informativi, processi e gerarchia funzionale]]
	- [[#Slide 24 – Analisi orientata agli stati|Stati operativi e transizioni di stato]]
	- [[#Slide 26 – Uso dei metodi d'analisi|Integrazione dei metodi secondo la tipologia di applicazione]]
7. **L'astrazione e i suoi meccanismi** (slide 27–32)
	- [[#Slide 27 – Il ruolo dell'astrazione|Livelli di dettaglio per oggetti, funzioni e stati]]
	- [[#Slide 28 – Meccanismi di astrazione|I quattro meccanismi di astrazione]]
	- [[#Slide 29 – Classificazione|Classificazione (istanza-di)]]
	- [[#Slide 30 – Generalizzazione|Generalizzazione (è-un) e superclassi]]
	- [[#Slide 31 – Aggregazione|Aggregazione (parte-di)]]
	- [[#Slide 32 – Associazioni|Associazioni fra classi]]
8. **Linguaggi per la specifica dei requisiti** (slide 33)
	- [[#Slide 33 – Linguaggi per la specifica dei requisiti|Linguaggi informali, semiformali e formali]]
9. **La progettazione** (slide 34–35)
	- [[#Slide 34 – 4. Progettazione|Dal "che cosa" al "come": ponte tra specifica e codifica]]
	- [[#Slide 35 – Obiettivi della progettazione|Obiettivi di qualità e peso della manutenzione]]
10. **Principi di progettazione** (slide 36–43)
	- [[#Slide 36 – Principi di progettazione|Dai principi agli strumenti; architettura del software]]
	- [[#Slide 37 – Principi di progettazione: formalità|Formalità]]
	- [[#Slide 38 – Principi di progettazione: anticipazione dei cambiamenti|Anticipazione dei cambiamenti]]
	- [[#Slide 39 – Principi di progettazione: separazione degli argomenti|Separazione degli argomenti]]
	- [[#Slide 40 – Principi di progettazione: modularità|Modularità: benefici e linee guida]]
	- [[#Slide 41 – Principi di progettazione: modularità|Interfacce e information hiding]]
	- [[#Slide 42 – Principi di progettazione: astrazione|Astrazione]]
	- [[#Slide 43 – Principi di progettazione: generalità|Generalità e software off-the-shelf]]


---

## Slide 1 – Ingegneria del Software - 1

---

## Slide 2 – Introduzione

- L'**ingegneria del software** tratta la realizzazione di sistemi software (sw) di dimensioni e complessità talmente elevate da richiedere uno o più team di persone per la loro costruzione
- La nascita e lo sviluppo del settore è una conseguenza diretta dell'aumento di complessità dei programmi

![[ISW1-s002-1.png|600]]

| Anno | Evento |
|---|---|
| 1940 | I programmi sono sviluppati e utilizzati da una sola persona |
| 1950 | Nasce la figura del programmatore, sono realizzati i primi grandi sistemi commerciali |
| 1960 | La complessità dei sistemi è tale da richiedere metodologie che vedono il prodotto software come il risultato di un'opera ingegneristica |
| 1980 | Il tempo dedicato alla progettazione supera il tempo dedicato alla programmazione |
| 1990 | Nasce la certificazione del software (ISO-9000) |
| 2000 | ISO-9000 si trasforma in Vision 2000 |

>> Il filo conduttore della timeline è uno solo: al crescere della dimensione del
>> software il collo di bottiglia si sposta dalla scrittura del codice al
>> *coordinamento* (progettazione, processo, certificazione). L'ingegneria del
>> software nasce esattamente per gestire questo spostamento.

---

## Slide 3 – Definizioni

![[ISW1-s003-1.png|600]]

- L'ingegneria del software è l'approccio *sistematico* allo sviluppo, all'operatività, alla manutenzione e al ritiro del software
- L'ingegneria del software è la disciplina *tecnologica* e *manageriale* che riguarda la produzione sistematica e la manutenzione dei prodotti software che vengono sviluppati e modificati entro i tempi e i costi preventivati
- L'ingegneria del software è un corpus di teorie, metodi e strumenti, sia di tipo tecnologico che organizzativo, che consentono di produrre applicazioni con le desiderate caratteristiche di *qualità*

>> Le tre definizioni sono progressivamente più ricche: la prima fissa l'ambito
>> (tutto il ciclo di vita, ritiro compreso), la seconda aggiunge il vincolo
>> economico (tempi e costi preventivati), la terza aggiunge l'obiettivo finale
>> (le caratteristiche di qualità).

---

## Slide 4 – La qualità del software

- Le qualità su cui si basa la valutazione di un sw possono essere classificate in:
	- **Interne**: riguardano le caratteristiche legate allo sviluppo del sw; non sono visibili agli utenti (I)
	- **Esterne**: riguardano le funzionalità fornite dal prodotto; sono visibili agli utenti (E)
- Le due categorie sono ovviamente strettamente legate: non è possibile ottenere le qualità esterne se il sw non gode delle proprietà interne
	- **Relative al prodotto**: riguardano le caratteristiche stesse del sw e sono sempre valutabili (P)
	- **Relative al processo**: riguardano i metodi utilizzati durante lo sviluppo del sw (PC)

>> Le due classificazioni sono ortogonali: ogni qualità si colloca su entrambi
>> gli assi (interna/esterna × prodotto/processo). Per questo nelle slide
>> successive ogni voce porta due o più marcatori, ad es. (E, P) oppure (I, P, PC).

---

## Slide 5 – La qualità del software

- **Correttezza**: un sw è corretto se rispetta le specifiche di progetto (E, P)
- **Affidabilità**: un sw è affidabile se l'utente può dipendere da esso (E, P)
- **Robustezza**: un sw è robusto se si comporta in modo ragionevole anche in circostanze non previste dalle specifiche di progetto (es. input incorretti, rotture di dischi) (E, P, PC)
	- N.B. La valutazione della correttezza e dell'affidabilità è basata sulle specifiche di progetto, mentre la robustezza riguarda tutti i casi non trattati.
- **Efficienza**: un sw è efficiente se usa intelligentemente le risorse di calcolo (E, P)
- **Facilità d'uso**: un sw è facile da usare se l'interfaccia che presenta all'utente gli permette di esprimersi in modo naturale (E, P)
- **Verificabilità**: un sw è verificabile se le sue caratteristiche (correttezza, performance, ecc.) sono facilmente valutabili (I, P, PC)
- **Riusabilità**: un sw è riusabile se può essere usato, in tutto o in parte, per costruire nuovi sistemi (I, P)
- **Portabilità**: un sw è portabile se può funzionare su più piattaforme (es. *Java*) (E, P)

>> Correttezza e affidabilità non coincidono: la correttezza è binaria e assoluta
>> rispetto alle specifiche, l'affidabilità è statistica (probabilità di
>> funzionare senza guasti in un intervallo di tempo). Un sw scorretto in un caso
>> raro può essere comunque molto affidabile nell'uso reale.

---

## Slide 6 – La qualità del software

- **Facilità di manutenzione**: un sw è facile da manutenere non solo se è strutturato in modo tale da facilitare la ricerca degli errori (*modifiche correttive*) ma anche se la sua struttura permette di aggiungere nuove funzionalità al sistema (*modifiche perfettive*) o di adattarlo ai cambiamenti del dominio applicativo (*modifiche adattative*) (I, P)

![[ISW1-s006-1.png|500]]

*Costo del Software*

| m. perfettive | m. adattative | m. correttive | altri costi |
|---|---|---|---|
| 30% | 15% | 15% | 40% |

- **Interoperabilità**: fa riferimento all'abilità di un sistema di coesistere e cooperare con altri sistemi (es. un word processor in cui possono essere creati grafici) (E, P)
- **Produttività**: misura l'efficienza del processo di produzione del software in termini di velocità di consegna del sw (PC)
- **Tempestività**: misura la capacità del processo di produzione del software di valutare e rispettare i tempi di consegna del prodotto (PC)
- **Trasparenza**: un processo di produzione del software si dice trasparente se permette di capire il suo stato attuale e tutti i suoi passi (PC)

>> Il grafico dice una cosa forte: il 60% del costo totale è manutenzione, e di
>> questo solo un quarto (15% sul totale) serve a correggere errori. La maggior
>> parte della spesa serve a far *evolvere* il software, non a ripararlo: per
>> questo la manutenibilità è una qualità economica, non solo tecnica.

---

## Slide 7 – 1. Il ciclo di vita dei sistemi informatici

- Comprende le attività svolte durante il periodo di esistenza di un sistema informatico
	- definizione strategica
	- pianificazione
	- controllo di qualità
	- analisi dei requisiti
	- progettazione
		- del sistema
		- esecutiva
	- realizzazione e collaudo in fabbrica
	- certificazione
	- installazione
	- collaudo del sistema installato
	- esercizio
	- diagnosi e manutenzione
	- evoluzione
	- messa fuori servizio

![[ISW1-s007-1.png|300]]

---

## Slide 8 – Il ciclo di vita

**Definizione strategica**
- Vengono prese decisioni sull'area aziendale che deve essere oggetto di automazione

**Pianificazione**
- Vengono definiti gli obiettivi, evidenziati i fabbisogni e viene condotto uno *studio di fattibilità* per individuare possibili strategie di attuazione e avere una prima idea dei **costi**, dei **benefici** e dei **tempi**.

**Controllo di qualità**
- Viene predisposto un *piano di controllo di qualità* per il progetto, allo scopo di garantire il rispetto delle specifiche e di controllare che il sistema realizzato si comporti come previsto

**Analisi dei requisiti**
- Formalizza i requisiti avvalendosi di tecniche di modellazione della realtà e produce macro-specifiche per la fase di progettazione

**Progettazione del sistema**
- Interpreta i requisiti in una soluzione architetturale di massima. Produce specifiche indipendenti dai particolari strumenti che saranno usati per la costruzione del sistema

**Progettazione esecutiva**
- Vengono descritti struttura e comportamento dei componenti dell'architettura, producendo specifiche che possano dar luogo, attraverso il ricorso a strumenti di sviluppo opportuni, a un prodotto funzionante

**Realizzazione e collaudo in fabbrica**
- Il sistema viene implementato sulla piattaforma prescelta e viene testato internamente ($\alpha$-*test*) sulla base dei casi prova definiti durante la fase di analisi

---

## Slide 9 – Il ciclo di vita

**Certificazione**
- L'attività di certificazione del software ha lo scopo di verificare che esso sia stato sviluppato secondo i criteri previsti dal metodo tecnico di progetto, in conformità alle specifiche di sistema e a tutta la documentazione di progetto

**Installazione**
- Il sistema viene installato e configurato, e vengono recuperati gli eventuali dati pregressi

**Collaudo del sistema installato**
- Gli utenti testano "in vitro" il prodotto installato ($\beta$-*test*). Si possono evidenziare *errori bloccanti* (malfunzionamenti che pregiudicano l'attività di collaudo), *errori non bloccanti* (malfunzionamenti che non pregiudicano l'attività di collaudo), problemi di *operatività* (una funzionalità richiesta non viene attuata adeguatamente) e *funzionali* (una funzionalità richiesta non è implementata)

**Esercizio**
- Quando il collaudo dà esito positivo il sistema viene avviato ("*messo in produzione*"), inizialmente affiancando e poi sostituendo gradualmente l'eventuale sistema preesistente

**Diagnosi**
- Durante l'esercizio gli utenti rilevano eventuali errori

**Manutenzione**
- Gli errori che si manifestano durante il funzionamento vengono segnalati e corretti (**manutenzione correttiva**). Può inoltre essere necessario intervenire sul software per adattarlo ai cambiamenti del dominio applicativo (**manutenzione adattativa**)

**Evoluzione**
- Si valutano le possibilità di far evolvere il sistema incorporando nuove funzionalità o migliorandone l'operatività (**manutenzione evolutiva** o **perfettiva**)

>> Riassunto delle tre manutenzioni: *correttiva* = il sw non fa ciò che doveva;
>> *adattativa* = il mondo esterno è cambiato (normative, formati, piattaforme);
>> *perfettiva/evolutiva* = si vuole che faccia di più o meglio.

---

## Slide 10 – 2. Definizione strategica e pianificazione

- Definizione degli interventi (su un arco di alcuni anni, ad esempio 3-5)
	- che massimizzano gli obiettivi dell'azienda o amministrazione
	- a partire dalla situazione attuale e con riferimento alle risorse disponibili
- Coinvolge aspetti non solo informatici, ma anche informativi e organizzativi
- Deve portare ad individuare priorità e interventi realizzabili

**richiede una valutazione dei costi**

---

## Slide 11 – Studio di fattibilità

- Nasce in presenza di un'idea progettuale già esistente che comprende gli elementi essenziali dell'individuazione del problema e dell'area di intervento, le principali linee di intervento previste, una definizione preliminare del progetto
- E' volto a determinare la convenienza della realizzazione di un intervento, ossia a fornire ai responsabili le informazioni necessarie alla decisione per l'effettivo avvio della realizzazione di un progetto e quindi sull'investimento necessario
	- *obiettivi*
	- *ambito e attori del progetto*
	- *benefici attesi*
	- *caratteristiche della soluzione*
	- *progetto di massima*
	- *stima dell'impegno e dei costi*
	- *definizione dei tempi di realizzazione e delle modalità operative*

---

## Slide 12 – Studio di fattibilità

- **Fattibilità tecnica**
	- *Esistono strumenti idonei? La proposta è realizzabile nell'ambito dell'organizzazione esistente? Il sistema sarà accettato e utilizzato?*
- **Fattibilità economica**
	- *I costi economici e le altre risorse necessarie per la realizzazione sono giustificati dai benefici attesi?*
- **Fattibilità temporale**
	- *La realizzabilità si può concretizzare in tempi "accettabili" (rispetto ai quali il sistema continua ad essere utile)?*
- Obiettivi
	- Aumentare la consapevolezza nelle decisioni di investimento
	- Consentire di valutare i benefici attesi a fronte dei costi richiesti
	- Diminuire l'incertezza dei progetti e fornire strumenti per governarne la complessità e ridurre i rischi
	- Dare concretezza al progetto, fornendo tutti gli elementi per l'avvio della fase realizzativa

---

## Slide 13 – Studio di fattibilità

1. **Situazione AS-IS**: contesto, problema, analisi e diagnosi, vincoli, definizione obiettivi
2. **Progetto di massima della soluzione TO-BE**: requisiti, specifiche, modalità di realizzazione
3. **Modalità di attuazione del progetto**: segmentazione, specifiche globali, acquisizioni e realizzazioni previste, piano temporale di massima
4. **Analisi del rischio**: fattori di rischio, modalità di gestione
5. **Analisi di impatto costi-benefici**: valutazione dei benefici (monetizzabili, intangibili, misurabili), stima dei costi (sviluppo vs gestione, diretti vs indiretti, fissi vs variabili, interni vs esterni), analisi dell'investimento
6. **Gestione del cambiamento**: strategia, strumenti, azioni
7. **Raccomandazioni per le fasi realizzative**: per l'approvvigionamento (forma di acquisizione), per la gestione del progetto, per la stesura del capitolato e/o del contratto

>> AS-IS e TO-BE sono i due poli di ogni studio di fattibilità: si descrive come
>> si lavora oggi e come si lavorerebbe dopo l'intervento; la differenza fra i due
>> scenari è ciò che va monetizzato nell'analisi costi-benefici.

---

## Slide 14 – 3. Analisi dei requisiti

- Scopo dell'analisi è produrre, utilizzando tecniche di modellazione della realtà, un documento di ***specifica dei requisiti*** che diventi l'input per le successive fasi di progettazione e realizzazione
- Oggetto dell'analisi è l'organizzazione nel suo complesso:
	- sottosistemi aziendali
	- risorse
	- processi
	- flussi informativi
	- ...

![[ISW1-s014-1.png|400]]

---

## Slide 15 – Specifica dei requisiti

- La specifica dei requisiti è un accordo tra il produttore di un servizio e il suo consumatore
- In questa fase del ciclo di vita, attraverso la specifica dei requisiti l'utente finale e il progettista si accordano sulle funzionalità messe a disposizione dal software
- La difficoltà per questo tipo di specifica è data dalla diversità dei linguaggi usata dalle due parti
- Qualità per la specifica dei requisiti:
	- **Chiarezza**: ogni specifica deve indicare quanto più chiaramente possibile le operazioni e i soggetti del processo che descrive
	- **Non ambiguità**: il processo descritto dalla specifica deve essere definito in modo completo e dettagliato
	- **Consistenza**: le specifiche non devono contenere punti contraddittori

---

## Slide 16 – Importanza dei requisiti

| Stadio | Costo relativo per la correzione |
|---|---|
| Requisiti | 0.1 - 0.2 |
| Progettazione | 0.5 |
| Codifica | 1 |
| Test | 2 |
| Accettazione | 5 |
| Manutenzione | 20 |

***Più tardi viene scoperto un errore nel ciclo di sviluppo del software, maggiore è il costo di riparazione***

![[ISW1-s016-1.png|350]]

>> La tabella è normalizzata sulla codifica (costo = 1). Il rapporto fra i due
>> estremi è di circa due ordini di grandezza: $20 / 0.1 = 200$. Un errore di
>> requisiti scoperto in manutenzione costa fino a 200 volte quello che sarebbe
>> costato correggerlo subito: è la giustificazione economica dell'analisi.

---

## Slide 17 – Alcune definizioni

| De Marco: | Coad: | Davis: |
|---|---|---|
| l'analisi è lo studio di un problema, *prima* di intraprendere qualche azione | l'analisi è lo studio del dominio di un problema, che porta a una specifica del comportamento *esternamente osservabile*; una descrizione *completa*, *coerente* e *fattibile* di ciò che occorre realizzare; una trattazione quantitativa delle caratteristiche operazionali (cioè *affidabilità*, *disponibilità*, *prestazioni*) | l'analisi del problema è il momento in cui viene definito lo spazio del prodotto; la descrizione del prodotto comporta la scelta di una soluzione e l'esplicitazione del comportamento esterno del prodotto dimostrando che *esso soddisfa i requisiti* |

---

## Slide 18 – Cosa e come modellare

![[ISW1-s018-1.png|350]]

- Il processo di analisi è **incrementale** e porta per passi successivi alla stesura di un insieme di documenti in grado di **rappresentare un modello dell'organizzazione** e comunicare, in modo **non ambiguo**, una descrizione **esauriente**, **coerente** e **realizzabile** dei vari aspetti **statici**, **dinamici** e **funzionali** di un sistema informatico

>> I tre aggettivi finali anticipano i tre tipi di modello che si useranno:
>> *statico* (le entità e le loro relazioni), *dinamico* (gli stati e le
>> transizioni nel tempo), *funzionale* (le trasformazioni dei dati).

---

## Slide 19 – Metodi di analisi

Differenti problemi richiedono differenti approcci e differenti strumenti di analisi

![[ISW1-s019-1.png|600]]

- ANALISI ORIENTATA AGLI **==OGGETTI==** -> rappresenta gli aspetti ==statici==
- ANALISI ORIENTATA ALLE **==FUNZIONI==** -> rappresenta gli aspetti ==funzionali==
- ANALISI ORIENTATA AGLI **==STATI==** -> rappresenta gli aspetti ==dinamici==

---

## Slide 20 – Analisi orientata agli oggetti (statica)

- L'enfasi è posta:
	- sull'identificazione degli **==oggetti==**
	- sulle **==interrelazioni** tra oggetti==
	faccio una fotografia, perché tendono a rimanere ==stabili==.

![[ISW1-s020-1.png|450]]

- *Nel tempo le proprietà strutturali degli oggetti osservati restano abbastanza stabili, mentre l'uso che degli oggetti si fa può mutare in modo sensibile*

>> È l'argomento principe a favore dell'approccio a oggetti: si sceglie come
>> scheletro del modello la parte del dominio che cambia meno (le entità:
>> clienti, prodotti, fatture), lasciando ai metodi e ai processi la parte
>> volatile.

---

## Slide 21 – es di modellazione statica

![[ISW1-s021-1.png|600]]

Diagramma statico delle classi (esempio: biblioteca)

- **Libro** — attributi: `cod_libro`, `titolo`, `data edizione`, `ISBN`, `data acquisizione`; operazioni: `richiesta( )`, `restituzione( )`, `create( )`
- **Libro prezioso** (specializzazione di *Libro*) — attributi: `valore : lire = 0`; operazioni: `valorizza( )`
- **Editore** — attributi: `ragione sociale`, `nome breve`, `indirizzo sede`, `telefono`; operazioni: `variazione dati editore( )`
- **Autore** — attributi: `nome : type = initval`, `cognome : type = initval`, `anno nascita`, `anno morte`; operazioni: `variazione anagrafica( )`
- **Utente** — operazioni: `variazione anagrafica( )`
- **Prestito** (classe di associazione tra *Libro* e *Utente*)
- Associazioni: *Libro* `0..*` — `1` *Editore* ("pubblicato da"); *Libro* `1..*` — `0..*` *Autore* ("scritto da"); *Libro* `0..*` — `0..*` *Utente*

---

## Slide 22 – Analisi orientata alle funzioni (funzionale)

- L'obiettivo è rappresentare un sistema come:
	- un insieme di **==flussi informativi==** (es: documenti cartacei)
	- una rete di **==processi==** che trasformano flussi informativi

![[ISW1-s022-1.png|450]]

- Ciò corrisponde alla progressiva costruzione di una ==gerarchia== ==funzionale==: una macro funzione si compone da varie sotto funzioni.
- def(==Gerarchia==):  struttura ad albero ("part of" o  anche "is a"). Gerarchia non implica per forza specializzazione.

>> "Gerarchia funzionale" significa che un processo di alto livello viene
>> esploso in sotto-processi, ciascuno a sua volta esplodibile: è la
>> decomposizione top-down tipica dei Data Flow Diagram.

---
## Slide 23 – Analisi orientata alle funzioni

- **1 : Creazione_Vendita_Produzione**
	- 201 : Progettazione campionario
		- 3011 : Indagine di mercato
		- 3012 : Creazione stilistica
		- 3013 : Creazione prototipi
			- 40131 : Creazione cartamodello
			- 40132 : Realizzazione prototipo
		- 3014 : Definizione modelli campionario
			- 40141 : Scelta prototipi
				- 501411 : Riunione prima selezione
				- 501412 : Evidenziazione difficoltà realizzative
				- 501413 : Produzione schizzo
			- 40142 : Definizione tecnica modelli
			- 40143 : Codifica modelli
		- 3015 : Produzione campionario
			- 40151 : Lancio in produzione del campionario
			- 40152 : Produzione campionario
			- 40153 : Rientro e controllo
	- 202 : Pianificazione operativa
		- 3021 : Definizione obiettivi
		- 3022 : Elaborazione delle previsioni di vendita
		- 3023 : Stesura piano operativo
	- 203 : Vendita
		- 3031 : Presentazione campionario
		- 3032 : Acquisizione ordini e controllo campagna vendita
		- 3023 : Revisione previsioni di vendita
	- 204 : Produzione
		- 3041 : Approvvigionamento materie prime e prodotti finiti
		- 3042 : Ciclo di produzione
			- 40421 : Programmazione produzione
			- 40422 : Confezione
			- 40423 : Rientro e controllo della produzione

![[ISW1-s023-1.png|500]]

- rettangoli -> agenti
- fra due righe -> deposito dati
- ... le altre figure che mi sono perso
- ogni bolla si può esplodere in un sotto diagramma.

- un tempo questa era la prima tecnica che si utilizzava per descrivere la struttura del software, problema: struttura dinamica e bisogna aggiornarla ogni volta. 

>> La slide mostra i due volti dell'analisi funzionale: a sinistra la
>> **decomposizione funzionale** (albero di attività numerate gerarchicamente,
>> dove il numero iniziale indica il livello: 1 → 201 → 3011 → 40131 → 501411),
>> a destra il **DFD** (Data Flow Diagram), che rappresenta gli stessi processi
>> come bolle numerate (1.0 … 8.0) collegate da flussi di dati, con entità
>> esterne nei rettangoli (Supervisor, Manager, Maintenance).

---
## Slide 24 – Analisi orientata agli stati (modellazione dinamica)

- Per alcune categorie di applicazioni può essere utile pensare fin dall'inizio in termini di **==stati==** operativi, in cui si può trovare gli oggetti analizzati, e **==transizioni di stato==** causati da eventi esterni.

![[ISW1-s024-1.png|500]]

Stati dell'ORDINE mostrati nella figura: *incompleto*, *completo*, *contabilizzato*, *fatturato*, *chiuso*, *annullato*.

>> La metafora del labirinto rende l'idea: l'ordine "attraversa" una sequenza di
>> stati e non tutti i percorsi sono ammessi. Modellare gli stati significa dire
>> quali configurazioni sono legali e quali transizioni le collegano.

---
## Slide 25 – Analisi orientata agli stati

![[ISW1-s025-1.png|500]]

Diagramma degli stati della carriera di uno studente:

- Stato iniziale → **In corso** (evento: *iscrizione*)
- **In corso** → **Ritirato** (*non si iscrive*)
- **Ritirato** → **In corso** (*recupera*)
- **In corso** → **In corso** (*superato esame*)
- **In corso** → **Laureato** (*superato esame laurea*)
- **In corso** → **Fuori corso** (*nr. esami insufficiente*)
- **Fuori corso** → **Ritirato** (*non si iscrive*)
- **Fuori corso** → **Fuori corso** (*superato esame*)
- **Fuori corso** → **Laureato** (*superato esame laurea*)

>> È un tipico diagramma a stati UML: il pallino nero è lo pseudo-stato iniziale,
>> i rettangoli arrotondati sono gli stati, le frecce etichettate sono le
>> transizioni scatenate da eventi. Gli "autoanelli" (superato esame) descrivono
>> eventi che non cambiano lo stato.

---
## Slide 26 – Uso dei metodi d'analisi

- La tendenza attuale è integrare metodi dei tre tipi, tenendo però conto della tipologia di applicazione
	- ==**Applicazioni orientate agli oggetti**== (aspetto statico preponderante, es: database)
		- l'aspetto più significativo è costituito dalle informazioni, le funzioni svolte sono relativamente semplici
	- ==**Applicazioni orientate alle funzioni**== (es: compilatore)
		- la complessità risiede nel tipo di trasformazione input-output operata
	- ==**Applicazioni orientate al controllo**== (es: interfaccia utente, scheduler di un O.S.)
		- l'aspetto più significativo da modellare è la sincronizzazione fra diverse attività cooperanti nel sistema

---
## Slide 27 – Il ruolo dell'==astrazione==

- Molteplici sono le relazioni in gioco fra oggetti, funzioni e stati e molteplici i livelli di possibile dettaglio:
	- Gli **oggetti** possono essere descritti a partire da termini molto generici (*edificio, strada*) fino ad arrivare a livello di dettaglio specifici (*la torre degli Asinelli, via Saragozza*)
	- Le **funzioni** possono essere espresse inizialmente in modo vago (*controllare il livello di gas nocivi nell'aria*) e successivamente precisate (*la programmazione del livello di soglia per l'allarme della centralina viene attivata premendo il pulsante P*)
	- Gli **stati** possono essere decritti a un elevato livello di astrazione (*la centralina è in stato di errore*) o specificati in maggior dettaglio (*è acceso il segnalatore di errore nel sensore S*)

---
## Slide 28 – Meccanismi di astrazione

- I principali ==meccanismi di astrazione== usati durante il processo di analisi per costruire una base di conoscenza sul problema sono classificazione, generalizzazione, aggregazione e associazione

---
## Slide 29 – Classificazione

- La ==classificazione== consente di raggruppare in classi oggetti, funzioni, o stati in base alle loro proprietà
- input: oggetti, output: classi.

![[ISW1-s029-1.png|450]]

>> La classificazione è il passo che porta dagli *esemplari* (questo PC, quel
>> portatile) al *concetto* (la classe "computer"): si tiene ciò che accomuna gli
>> individui e si scarta ciò che li distingue. È la relazione "istanza-di".

---
## Slide 30 – Generalizzazione 

- La ==generalizzazione== cattura le relazioni **<u>è-un</u>** "is a", ovvero permette di astrarre le caratteristiche comuni fra più classi definendo *superclassi* (dall'alto verso il basso si chiama specializzazione)
- input: classi, output: classi
- studente e docente sono sottoinsiemi dell'insieme persona, un prof si trova sia nell'insieme docente sia nell'insieme persona. questa caratteristica è unica in questi 4 meccanismi solo per la generalizzazione.

![[ISW1-s030-1.png|450]]

Nella figura: **STUDENTE** e **DOCENTE** sono entrambi *è-un* **PERSONA**.

>> Attenzione a non confondere con la classificazione: lì si passa da oggetti a
>> classi (istanza-di), qui si passa da classi a classi più generali (è-un).
>> La superclasse eredita le proprietà comuni; le sottoclassi aggiungono le
>> proprie specificità.

---
## Slide 31 – Aggregazione

- L'==aggregazione== esprime le relazioni **parte-di**, "part of", che sussistono tra oggetti, tra funzioni, tra stati
- in UML al contrario di ER ce un costrutto apposta per l'aggregazione.

![[ISW1-s031-1.png|450]]

Nella figura: l'automobile è aggregazione di ruota, ..., candela, volante.

>> Terza relazione distinta dalle precedenti: non "istanza-di" né "è-un", ma
>> "parte-di" (composizione). Una ruota non è un'auto e non è un tipo di auto:
>> è un suo componente.

---
## Slide 32 – Associazioni

- Oltre ai meccanismi citati è importante modellare le ==associazioni== che sussistono fra le varie classi

![[ISW1-s032-1.png|450]]

>> L'associazione è una relazione "orizzontale" fra classi diverse, con una
>> molteplicità: più persone possono lavorare per la stessa azienda e (in
>> generale) una persona può lavorare per più aziende.

---
## Slide 33 – Linguaggi per la specifica dei requisiti

- **Linguaggi informali**
	- Il linguaggio naturale, alla base della comunicazione durante le interviste tra analista e utente, non può essere adottato come unico mezzo per produrre documenti di specifica per le innumerevoli ambiguità di significato
- **Linguaggi ==semiformali==**
	- notazione grafica, che presenta una semantica sfumata, accoppiata con descrizioni in linguaggio naturale (esempi : E/R, DFD)
- **Linguaggi formali**
	- linguaggi di specifica basati sulla logica dei predicati
	- linguaggi di specifica algebrici
	- linguaggi concettuali per basi di dati

>> Il compromesso è sempre lo stesso: più il linguaggio è formale, meno è
>> ambiguo e più è verificabile automaticamente, ma meno è comprensibile al
>> committente. Per questo nella pratica si usano notazioni semiformali (UML,
>> E/R, DFD) corredate da testo in linguaggio naturale.

---
## Slide 34 – 4. <u>Progettazione</u>

- Riguarda tutte quelle attività che permettono di passare dalla raccolta ed elaborazione dei requisiti di un sistema software alla sua effettiva realizzazione, pertanto fa da ponte tra la fase di specifica e la fase di codifica
- Durante la fase di progettazione si decidono le modalità di passaggio da "*che cosa*" deve essere realizzato (specifica dei requisiti) a "*come*" la realizzazione deve avere luogo
- Due esigenze contrastanti:
	- progetto sufficientemente astratto per poter essere agevolmente confrontato con le specifiche da cui viene derivato
	- progetto sufficientemente dettagliato in modo tale che la codifica possa avvenire senza ulteriori necessità di chiarire le operazioni che devono essere realizzate
	- <u>morale -> via di mezzo a mio piacimento, in base alle circostanze</u>
- A una stessa specifica possono corrispondere più progetti, ossia più metodi di soluzione diversi

---
## Slide 35 – Obiettivi della progettazione

- Produrre software con le caratteristiche di qualità che sono state dettagliate nella fase di analisi e specifica dei requisiti. Ad esempio:
	- **affidabilità**
	- **modificabilità**
	- **comprensibilità**
	- **riusabilità**
- ...obiettivi che si possono riassumere nella diminuzione dei *costi* e *tempi* di produzione e nell'aumento della *qualità* del software

<u>I costi maggiori riguardano la fase di manutenzione del software</u>

far fronte a modifiche da effettuare senza che l'intera struttura dell'applicazione già costruita debba essere messa nuovamente in discussione ed elaborata

>> È l'argomento economico che giustifica tutti i principi di progettazione che
>> seguono: poiché la manutenzione assorbe la quota maggiore del costo del ciclo
>> di vita, conviene investire in fase di design per rendere il sistema
>> modificabile, anche a costo di più lavoro iniziale.
>
>>in java: polimorfismo e interfacce permetto una migliore manubilità

---
## Slide 36 – Principi di progettazione

![[ISW1-s036-1.png|350]]

Livelli (dal più esterno al più interno): strumenti → metodologie → metodi e tecniche → **principi**

| | | |
|---|---|---|
| La progettazione trasforma le specifiche dell'utente in un insieme di specifiche direttamente utilizzabili dai programmatori | Il risultato del processo di progettazione è l'architettura del software, ossia l'insieme dei moduli che compongono il sistema, la descrizione della loro funzione, e delle relazioni esistenti tra di essi | Tutte le fasi della progettazione sono ispirate a un insieme di principi su cui si basano le tecniche e i metodi utilizzati nelle fasi operative |

>> La piramide va letta dal basso: i **principi** (formalità, anticipazione dei
>> cambiamenti, separazione degli argomenti, modularità, astrazione, generalità)
>> sono il nucleo concettuale; da essi discendono metodi e tecniche, poi le
>> metodologie che li organizzano in un processo, e infine gli strumenti che li
>> automatizzano.

---
## Slide 37 – Principi di progettazione: <u>formalità</u>

![[ISW1-s037-1.png|450]]

- L'utilizzo di formalismi e di metodologie standardizzate nelle fasi di progettazione, implementazione e documentazione del sistema permette di ridurre fortemente gli errori di progetto (es. incompletezza, inconsistenza, ambiguità)

---
## Slide 38 – Principi di progettazione: <u>anticipazione dei cambiamenti</u>

- La progettazione di un sistema informatico non deve mirare a soddisfare solo le specifiche attuali ma deve prevedere anche quelle future, poiché la capacità di prevedere i cambiamenti a cui il software sarà sottoposto durante il suo ciclo di vita determina la sua semplicità di manutenzione e la sua riusabilità
- I cambiamenti possono essere:
	- *Noti a priori*: ogni software segue un cammino evolutivo rispetto alla sua prima release. Anche i servizi che non verranno inizialmente implementati devono comunque essere presi in considerazione durante la fase progettuale
	- *Non noti a priori*: al fine di poter affrontare anche modifiche non prevedibili durante la fase di design, la progettazione deve cercare di rendere il progetto facilmente modificabile
- I cambiamenti possono riguardare:
	- *Periferiche e hardware*
	- *Dominio di applicazione*
	- *Algoritmi e strutture dati*: accade spesso che nelle prime versioni del software si utilizzino algoritmi e strutture dati semplici al fine di velocizzare il completamento del sistema

---
## Slide 39 – Principi di progettazione: <u>separazione degli argomenti</u>

Indica la necessità di individuare i diversi aspetti di un problema complesso e di trattarli separatamente al fine di semplificare la soluzione

**La suddivisione può essere fatta sulla base del:**

- **Tempo** (alla base dei modelli di ciclo di produzione del software, che identificano e separano le attività da svolgere)
- **Livello di qualità** (dapprima si progetta il software in modo corretto quindi lo si ristruttura parzialmente al fine di aumentarne l'efficienza)
- **Vista** (nella fase di analisi dei requisiti può essere conveniente analizzare distintamente i flussi di dati tra le diverse attività e il flusso di controllo che le governa)
- **Livello di astrazione** (le specifiche vengono progressivamente raffinate) -> *astrazione*
- **Dimensione** -> *modularizzazione*

>> *Separation of concerns*: affrontare insieme tutti gli aspetti di un problema
>> complesso fa esplodere la combinatoria delle decisioni; separandoli si
>> risolvono sottoproblemi indipendenti. Le ultime due righe anticipano i due
>> principi trattati nelle slide successive: separare per livello di astrazione
>> porta all'astrazione, separare per dimensione porta alla modularità.

---
## Slide 40 – Principi di progettazione: <u>modularità</u>

- Con il termine **modulo** si indica il componente di base di un sistema software che raccoglie un insieme di funzionalità tra loro strettamente legate
- Benefici
	- capacità di scomporre un sistema complesso in parti più semplici
	- capacità di comporre un sistema complesso a partire dai moduli esistenti
	- capacità di capire un sistema in funzione delle sue parti
	- capacità di modificare un sistema modificando soltanto un piccolo insieme delle sue parti
- Linee guida per la modularizzazione
	- Tutti i servizi strettamente connessi devono appartenere allo stesso modulo
	- Ogni modulo deve essere realizzato in modo indipendente da ogni altro
	- I programmatori devono essere in grado di operare su un modulo avendo una conoscenza minima del contenuto degli altri

>> Le linee guida sono la formulazione "a parole" delle due metriche classiche:
>> alta **coesione** interna al modulo (i servizi correlati stanno insieme) e
>> basso **accoppiamento** fra moduli (ognuno dipende il meno possibile dagli
>> altri).

---
## Slide 41 – Principi di progettazione: modularità

- La definizione dell'**interfaccia** dei moduli deve rispettare il concetto di **information hiding**: l'interfaccia deve cioè contenere tutte le informazioni necessarie ad un corretto utilizzo del modulo evitando di mostrarne i dettagli implementativi
- Questo principio permette ai progettisti di modificare l'implementazione del modulo senza che ciò incida sulle altre componenti del sistema
	- **Funzionalità a disposizione**: deve essere ben chiaro quali servizi sono realizzati dal modulo
	- **Modalità di fruizione di un servizio**: per ogni servizio è necessario indicare la sequenza di routine da chiamare
	- **Definizione dei parametri di input**: il tipo, il numero e la semantica dei parametri di input devono essere specificati in modo chiaro
	- **Descrizione dell'output**: semantica e tipologia dei valori restituiti dalle routine devono essere completamente specificati

---
## Slide 42 – Principi di progettazione: <u>astrazione</u>

|                                                                                                                                                                              |                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| E' uno strumento fondamentale per capire e analizzare problemi complessi, poiché consente di identificare gli aspetti fondamentali di un fenomeno e ignorare i suoi dettagli | I modelli che vengono costruiti per i fenomeni sono sempre astrazioni della realtà, che trascurano alcuni aspetti ritenuti meno importanti per concentrarsi su altri |

![[ISW1-s042-1.png|250]]

>> La sequenza di ritratti (dalla fotografia alla figura geometrica) illustra
>> proprio l'astrazione progressiva: a ogni passo si perdono dettagli e si
>> conservano solo le caratteristiche ritenute essenziali. Nessun modello è
>> "il" modello giusto: dipende da quali aspetti servono al problema in esame.

---
## Slide 43 – Principi di progettazione: <u>generalità</u>

| | | |
|---|---|---|
| **Ogni volta che si deve risolvere un problema, si cerca di capire qual è il problema più generale che gli si nasconde dietro** | **Il problema generale:**<br>può essere più semplice di quello specifico<br>la sua soluzione può essere più riusabile<br>può essere già risolto in un'applicazione commerciale | **Importante per la realizzazione di software *off-the-shelf*** |
es: design pattern, un problema standard di ricerca operativa. 

>> Generalità e astrazione sono in tensione con l'efficienza: una soluzione
>> generale è più riusabile ma spesso più costosa da realizzare e più lenta di
>> una soluzione ad hoc. Il principio va applicato con giudizio, quando il
>> problema generale è davvero ricorrente.

---
## Riassunto

>> **Che cos'è l'ingegneria del software**
>> - Disciplina che tratta la realizzazione di sistemi software così grandi e complessi da richiedere uno o più team; nasce come risposta all'aumento di complessità dei programmi (1940 singolo programmatore → 1960 metodologie ingegneristiche → 1980 progettazione > programmazione → 1990 ISO-9000 → 2000 Vision 2000).
>> - Le tre definizioni classiche aggiungono progressivamente: l'ambito (tutto il ciclo di vita, ritiro compreso), il vincolo economico (tempi e costi preventivati), l'obiettivo di qualità.
>>
>> **Qualità del software** (classificazione doppia e ortogonale)
>> - Interne (I) / Esterne (E) e relative al Prodotto (P) / al Processo (PC); le esterne non si ottengono senza le interne.
>> - Correttezza (rispetto delle specifiche), affidabilità (dipendibilità, nozione statistica), robustezza (comportamento ragionevole fuori specifica), efficienza, facilità d'uso, verificabilità, riusabilità, portabilità, manutenibilità, interoperabilità; produttività, tempestività e trasparenza sono qualità di processo (PC).
>> - Costi del software: manutenzione perfettiva 30%, adattativa 15%, correttiva 15%, altri 40% → circa il 60% del costo è manutenzione, e solo un quarto di essa è correzione di errori.
>>
>> **Ciclo di vita**
>> - Definizione strategica, pianificazione (studio di fattibilità: costi, benefici, tempi), controllo di qualità, analisi dei requisiti, progettazione del sistema ed esecutiva, realizzazione e collaudo in fabbrica (α-test), certificazione, installazione, collaudo del sistema installato (β-test), esercizio, diagnosi e manutenzione, evoluzione, messa fuori servizio.
>> - Tre manutenzioni: correttiva (errori), adattativa (cambia il dominio/contesto), perfettiva-evolutiva (nuove funzionalità).
>> - Studio di fattibilità: fattibilità tecnica, economica e temporale; struttura in 7 punti con AS-IS, progetto di massima TO-BE, analisi del rischio e analisi costi-benefici.
>>
>> **Requisiti**
>> - La specifica dei requisiti è un accordo produttore-consumatore; qualità richieste: chiarezza, non ambiguità, consistenza.
>> - Costo relativo di correzione di un errore: requisiti 0.1–0.2, progettazione 0.5, codifica 1, test 2, accettazione 5, manutenzione 20 → fino a ~200 volte più caro se scoperto tardi.
>> - Linguaggi di specifica: informali (linguaggio naturale, ambiguo), semiformali (E/R, DFD), formali (logica dei predicati, algebrici).
>>
>> **Metodi di analisi e astrazione**
>> - Tre orientamenti: agli oggetti (le strutture cambiano meno dell'uso che se ne fa), alle funzioni (flussi informativi e gerarchia di processi, DFD), agli stati (stati e transizioni). Si integrano secondo il tipo di applicazione (informativa, trasformazionale, di controllo).
>> - Meccanismi di astrazione: classificazione (istanza-di), generalizzazione (è-un), aggregazione (parte-di), associazione (relazione fra classi).
>>
>> **Progettazione**
>> - Ponte fra specifica e codifica: dal "che cosa" al "come"; deve essere insieme astratta (confrontabile con le specifiche) e dettagliata (codificabile). A una specifica corrispondono più progetti possibili.
>> - Principi: formalità, anticipazione dei cambiamenti (noti e non noti a priori), separazione degli argomenti (per tempo, qualità, vista, astrazione, dimensione), modularità, astrazione, generalità.
>> - Modularità: alta coesione dentro il modulo, basso accoppiamento fra moduli; l'interfaccia rispetta l'information hiding (servizi offerti, modalità d'uso, parametri di input, output) nascondendo i dettagli implementativi.
