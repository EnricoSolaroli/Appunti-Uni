[3-UML](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/ingegneria del software/slide/3-UML.pdf>)

# UML

## Indice

1. **Introduzione a UML** (slide 2–6)
	- [[#Slide 2 – 1. Introduzione|Nascita di UML, i tres amigos e lo standard OMG]]
	- [[#Slide 3 – UML …|È un linguaggio, non un metodo: notazione e metamodello]]
	- [[#Slide 4 – Generalità|Fasi dello sviluppo coperte e ruolo dei diagrammi]]
	- [[#Slide 5 – Diagramma vs. modello|Differenza tra modello e diagramma]]
	- [[#Slide 6 – Il metamodello di UML|Un frammento del metamodello UML 2]]
2. **La struttura di UML** (slide 7–20)
	- [[#Slide 7 – 2. La struttura di UML|Costituenti fondamentali, meccanismi comuni, architettura]]
	- [[#Slide 8 – Entità|Strutture, comportamenti, raggruppamenti, informazioni]]
	- [[#Slide 9 – Relazioni|Le sette relazioni e la loro notazione grafica]]
	- [[#Slide 10 – Diagrammi|Elenco dei diagrammi statici e dinamici]]
	- [[#Slide 11 – Diagrammi (diagramma delle classi)|Descrizione uno a uno dei singoli diagrammi (slide 11–20)]]
3. **Meccanismi comuni e architettura** (slide 21–25)
	- [[#Slide 21 – Specifiche|Le specifiche: la semantica testuale di un elemento]]
	- [[#Slide 22 – Ornamenti|Ornamenti, visibilità e membri di classe]]
	- [[#Slide 23 – Distinzioni comuni|Classificatore/istanza e interfaccia/implementazione]]
	- [[#Slide 24 – Meccanismi di estendibilità|Stereotipi, proprietà, vincoli, profili]]
	- [[#Slide 25 – Architettura|Le cinque viste architetturali (modello 4+1)]]
4. **Diagrammi dei casi d'uso** (slide 26–37)
	- [[#Slide 26 – 3. Diagrammi dei casi d'uso|Ruoli di utilizzo del sistema e attori]]
	- [[#Slide 27 – Attore vs. caso d'uso|Definizioni di attore e di caso d'uso]]
	- [[#Slide 28 – I casi d'uso di una banca|Esempio e notazione del diagramma]]
	- [[#Slide 29 – Relazioni nei diagrammi dei casi d'uso|Inclusione, estensione, generalizzazione]]
	- [[#Slide 30 – Punti di vista|Punto di vista dell'utilizzatore vs. del progettista]]
	- [[#Slide 31 – Ruolo dei casi d'uso|A cosa servono nel progetto di sviluppo]]
	- [[#Slide 32 – Identificare i casi d'uso|Il procedimento in quattro passi]]
	- [[#Slide 33 – Scenari|Scenario base e varianti]]
	- [[#Slide 35 – Specifiche del caso d'uso|Come si documenta un caso d'uso e template]]
	- [[#Slide 37 – Realizzare i casi d'uso|Collaborazioni che realizzano un caso d'uso]]
5. **Diagrammi delle classi: notazione e relazioni** (slide 38–61)
	- [[#Slide 38 – Diagrammi delle classi|Classe, attributo, operazione]]
	- [[#Slide 39 – Notazione|Attributi: visibilità, tipo, molteplicità, ambito]]
	- [[#Slide 40 – Notazione|Operazioni, signature, direzione dei parametri]]
	- [[#Slide 41 – Diversi livelli di astrazione|Rappresentare la stessa classe a dettaglio variabile]]
	- [[#Slide 42 – Le relazioni tra classi|Elenco e notazione grafica delle relazioni]]
	- [[#Slide 43 – Associazione|Associazioni e molteplicità]]
	- [[#Slide 44 – Associazione|Verso di lettura, navigabilità, ruoli]]
	- [[#Slide 45 – Associazione|Vincoli e classi associative]]
	- [[#Slide 46 – Associazione|Associazioni qualificate]]
	- [[#Slide 47 – Associazione|Associazioni n-arie]]
	- [[#Slide 48 – Elementi derivati|Attributi e associazioni derivate]]
	- [[#Slide 49 – Aggregazione|Part-of per riferimento (rombo vuoto)]]
	- [[#Slide 50 – Composizione|Part-of per valore (rombo pieno)]]
	- [[#Slide 51 – Generalizzazione|Ereditarietà degli attributi e delle operazioni]]
	- [[#Slide 52 – Generalizzazione|Ereditarietà multipla, insiemi di generalizzazione e vincoli]]
	- [[#Slide 53 – Classi astratte|Classi non istanziabili come radici di gerarchie]]
	- [[#Slide 55 – Powertyping|Powertype: classi che sono anche istanze]]
	- [[#Slide 56 – Dipendenza|Dipendenza e stereotipo di uso]]
	- [[#Slide 57 – Template|Classi parametrizzate e bound element]]
	- [[#Slide 58 – Raffinamento|Descrizioni dello stesso concetto a livelli diversi]]
	- [[#Slide 59 – Interfaccia|Interfacce: notazione estesa e lollypop]]
	- [[#Slide 61 – Interfaccia vs. ereditarietà|Quando usare un'interfaccia al posto dell'ereditarietà]]
6. **Dalle classi d'analisi alle classi di progettazione** (slide 62–78)
	- [[#Slide 62 – Analisi vs. progettazione|Caratteristiche delle classi di analisi e di progettazione]]
	- [[#Slide 63 – Identificare le classi d'analisi|Regole per individuare buone classi d'analisi]]
	- [[#Slide 67 – Identificare le associazioni d'analisi|Regole per le associazioni d'analisi]]
	- [[#Slide 70 – Identificare gli attributi|Regole per gli attributi e attributi derivati]]
	- [[#Slide 72 – Raffinamenti|Raffinamento iterativo del modello]]
	- [[#Slide 74 – Identificare le classi di progettazione|Completezza, sufficienza, coesione, accoppiamento]]
	- [[#Slide 75 – Identificare le associazioni di progettazione|Navigabilità e trasformazione delle associazioni]]
	- [[#Slide 78 – Identificare le associazioni di progettazione|Reificazione delle classi associative]]
7. **Diagrammi degli oggetti e dei package** (slide 79–84)
	- [[#Slide 79 – 5. Diagrammi degli oggetti|Oggetti, oggetti composti, forme abbreviate]]
	- [[#Slide 80 – Diagrammi degli oggetti|Istanza di un diagramma delle classi]]
	- [[#Slide 81 – 6. Diagrammi dei package|Package, contenimento e spazi dei nomi]]
	- [[#Slide 82 – Diagrammi dei package|I quattro tipi di dipendenza tra package]]
	- [[#Slide 83 – Diagrammi dei package|Generalizzazione tra package]]
	- [[#Slide 84 – Individuare i package d'analisi|Criteri di raggruppamento e dipendenze circolari]]
8. **Diagrammi di interazione e di sequenza** (slide 85–95)
	- [[#Slide 85 – 7. Diagrammi di interazione|I quattro tipi di diagramma di interazione]]
	- [[#Slide 86 – Terminologia|Interazione, contesto, linea di vita, messaggio]]
	- [[#Slide 87 – Linee di vita|Sintassi delle linee di vita]]
	- [[#Slide 88 – Messaggi|Messaggi sincroni, asincroni, di ritorno, create e destroy]]
	- [[#Slide 89 – Diagrammi di sequenza|Dimensioni, attivazioni, note]]
	- [[#Slide 90 – Richiesta prestito|Esempi svolti di diagramma di sequenza]]
	- [[#Slide 93 – Invarianti di stato e vincoli|Invarianti di stato e vincoli temporali]]
	- [[#Slide 94 – Frammenti combinati|Frammenti opt, alt e loop]]
9. **Diagrammi di stato** (slide 96–104)
	- [[#Slide 96 – Diagrammi di stato|Notazione di Harel ed esempio dello studente]]
	- [[#Slide 97 – Stati ed eventi|Stati, azioni, attività, entry/do/exit]]
	- [[#Slide 98 – Transizioni|Evento, condizione, azione]]
	- [[#Slide 99 – La linea telefonica|Esempio completo di automa]]
	- [[#Slide 100 – Pseudo-stato di selezione|Il rombo di scelta]]
	- [[#Slide 101 – Tipi di eventi|Variazione, segnale, chiamata, temporale]]
	- [[#Slide 102 – Stati compositi|Stati compositi semplici e ortogonali]]
	- [[#Slide 104 – Comunicazione tra automi|Sincronizzazione tramite variabile condivisa]]
10. **Diagrammi di attività** (slide 105–111)
	- [[#Slide 105 – Diagrammi di attività|Semantica basata sulle reti di Petri]]
	- [[#Slide 106 – Preparazione di una bevanda|Esempio svolto]]
	- [[#Slide 107 – Attività|Categorie di nodi e di archi]]
	- [[#Slide 108 – Nodi azione|Nodi azione di chiamata e di evento temporale]]
	- [[#Slide 109 – Nodi controllo|Decisione, fusione, biforcazione, ricongiunzione]]
	- [[#Slide 110 – Nodi oggetto|Nodi oggetto e flussi di oggetti]]
	- [[#Slide 111 – Corsie|Partizionamento in corsie e dimensioni]]
11. **Componenti e deployment** (slide 112–118)
	- [[#Slide 112 – Diagramma dei componenti|Componenti, interfacce fornite e richieste]]
	- [[#Slide 113 – Componenti|Dipendenze tra componenti tramite interfacce]]
	- [[#Slide 115 – Diagramma di deployment|Forma descrittore e forma istanza]]
	- [[#Slide 116 – Nodi|Nodi: periferiche e ambienti di esecuzione]]
	- [[#Slide 117 – Manufatti|Manufatti, deploy e manifest]]
12. **Benefici e limiti di UML** (slide 119–122)
	- [[#Slide 119 – Benefici di UML|Superamento della guerra dei metodi]]
	- [[#Slide 120 – Complessità|Complessità del metamodello e numero di diagrammi]]
	- [[#Slide 121 – Personalizzazioni|Adattare UML al contesto e al progetto]]
	- [[#Slide 122 – Quindi:|Sintesi conclusiva]]


---
## Slide 1 – Unified Modeling Language (UML)

**UNIFIED MODELING LANGUAGE (UML)**

---
## Slide 2 –  Introduzione

- UML nasce come *standard aperto* dalla collaborazione fra tre dei massimi esperti di OOA: **Grady Booch**, **Ivar Jacobson** e **Jim Rumbaugh** (i *tres amigos*), ed è inteso come sintesi dei molti metodi attualmente usati
- È stato accettato da molti altri esperti del settore, tra cui Coad, Yourdon e Odell, e da tutte le grandi compagnie dell'informatica (tra cui Compaq-Digital, Ericsson, Hewlett-Packard, IBM, Microsoft, Rational Software, …)
- E' uno **standard dell'OMG** dal <u>1997</u>
- Esistono potenti strumenti **CASE** per UML. Da un modello UML è possibile generare automaticamente lo "scheletro" del codice di un sistema (le strutture dati complete e i prototipi delle funzioni)
- **Microsoft** ha adottato UML come linguaggio standard per la sua libreria di componenti

>> OOA = Object Oriented Analysis. Il punto chiave è che UML è una *notazione*, non un processo: standardizza il "come si disegna", lasciando libero il "quando e in che ordine si disegna".

---
## Slide 3 – UML …

- è un **==linguaggio==**, non un metodo (come quelli di Yourdon e DeMarco, o di Rumbaugh o Jacobson)
- definisce una notazione standard, basata su un **metamodello** integrato degli "oggetti" che compongono un sistema software
- non prescrive una sequenza di processo, cioè non dice "prima bisogna fare questa attività, poi quest'altra"
- quindi può essere (ed è) utilizzato da persone e gruppi che seguono metodi diversi (è "indipendente dai metodi")
- è un linguaggio non proprietario, standard; i suoi autori non hanno il copyright su UML
- la versione diventata standard OMG ha ricevuto i contributi di molti altri metodologi e delle più importanti società di software mondiali
- la sua **evoluzione** è a carico dell'OMG, e soggetta a procedure ben definite per ogni cambiamento. Versione attuale: 2.5 (2013)

>> "Metamodello" significa che UML è definito descrivendo in UML stesso quali elementi esistono (classi, associazioni, proprietà…) e come si combinano: è un modello del linguaggio, un livello sopra i modelli che scriviamo noi.

---
## Slide 4 – Generalità

- UML fornisce i costrutti per le seguenti fasi dello sviluppo dei sistemi software:
	- Analisi dei requisiti tramite i casi d'uso
	- Analisi e progetto OO
	- Modellazione dei componenti
	- Modellazione della struttura e della configurazione
- Il **modello** OOA/OOD viene espresso tramite dei **diagrammi** grafici
- Ogni entità del modello può comparire in uno o più diagrammi, che ne rappresentano una proiezione
- A ogni entità si possono anche associare vari tipi di documentazione testuale
- Nei vari diagrammi, tutti i concetti e le entità che presentano similitudini sono espressi con la medesima notazione

---
## Slide 5 – Diagramma vs. modello

- In UML c'è distinzione fra i concetti di modello e di diagramma:
	- Un **modello** contiene elementi di informazione circa il sistema sotto osservazione
	- Un **diagramma** è una particolare visualizzazione di alcuni tipi di elementi di un modello
- Un certo elemento può comparire in più diagrammi ma è univoca la sua definizione all'interno del modello

>> Analogia: il modello è il "database" del progetto, i diagrammi sono le *query* grafiche su di esso. Rinominare una classe in un diagramma la rinomina ovunque, perché l'elemento è uno solo nel modello.

---
## Slide 6 – Il metamodello di UML

Una piccola porzione del metamodello UML 2 ...

![[ISW3-s006-1.png|600]]

>> Nel frammento si vede che *Class*, *Property*, *Association*, *Operation*, *Type* sono a loro volta classi del metamodello, legate da associazioni con molteplicità e vincoli (`{subsets …}`, `{redefines …}`): è così che lo standard definisce formalmente la sintassi astratta di UML.

---
## Slide 7 – 2. La struttura di UML

- La struttura di UML è composta da:
	- **costituenti fondamentali**: gli elementi di base
		- entità
		- relazioni
		- diagrammi
	- **meccanismi comuni**: tecniche comuni per raggiungere specifici obiettivi
		- specifiche
		- ornamenti
		- distinzioni comuni
		- meccanismi di estendibilità
	- **architettura**: l'espressione dell'architettura del sistema

---
## Slide 8 – Entità

*Sono gli elementi di modellazione*

![[ISW3-s008-1.png|600]]

>> Le quattro famiglie corrispondono a quattro domande diverse: *com'è fatto* il sistema (strutture), *cosa fa nel tempo* (comportamenti), *come si organizza* il modello (raggruppamenti), *cosa annotiamo* a margine (informazioni).

---
## Slide 9 – Relazioni

*Legano tra loro le entità*

![[ISW3-s009-1.png|600]]

>> Regola mnemonica: rombo **vuoto** = aggregazione (la parte può sopravvivere al tutto), rombo **pieno** = composizione (la parte muore col tutto); triangolo vuoto = "è un tipo di", e se la linea è tratteggiata diventa "realizza un'interfaccia".

---
## Slide 10 – Diagrammi

*Sono viste sul modello UML*

- **Statici**:
	- Diagramma delle classi
	- Diagramma degli oggetti
	- Diagramma dei package
	- Diagramma dei componenti
	- Diagramma di deployment
	- Diagramma delle strutture composite
- **Dinamici**:
	- Diagramma dei casi d'uso
	- Diagramma degli stati
	- Diagramma di attività
	- Diagramma di interazione
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

>> Nelle slide le voci "Diagramma delle strutture composite", "Diagramma di sintesi dell'interazione" e "Diagramma dei tempi" sono scritte in grigio: sono elencate per completezza ma non vengono approfondite nel corso.
>>
>> Le slide 11–20 ripetono questo stesso elenco aggiungendo, una alla volta, una nota esplicativa (fumetto) sul diagramma di volta in volta evidenziato.

 diagrammi che possono essere chiesti come esercizio da disegnare all'esame: classi, casi d'uso, stati, attività, sequenza
 [registrazione sull'esame]![[Recording 20260922115827.m4a]]
  
---
## Slide 11 – Diagrammi (diagramma delle classi)

- **Statici**:
	- Diagramma delle classi
		- *descrive la struttura dati degli oggetti del sistema e le loro relazioni; è il diagramma più importante, da cui si può generare il codice*
	- Diagramma degli oggetti
	- Diagramma dei package
	- Diagramma dei componenti
	- Diagramma di deployment
	- Diagramma delle strutture composite
- **Dinamici**:
	- Diagramma dei casi d'uso
	- Diagramma degli stati
	- Diagramma di attività
	- Diagramma di interazione
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

---
## Slide 12 – Diagrammi (diagramma degli oggetti)

*Sono viste sul modello UML*

- **Statici**:
	- Diagramma delle classi
	- Diagramma degli oggetti
		- *mostra un insieme di oggetti di interesse e le loro relazioni*
	- Diagramma dei package
	- Diagramma dei componenti
	- Diagramma di deployment
	- Diagramma delle strutture composite
- **Dinamici**:
	- Diagramma dei casi d'uso
	- Diagramma degli stati
	- Diagramma di attività
	- Diagramma di interazione
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

>> Il diagramma degli oggetti è una "fotografia" (*snapshot*) del sistema in un istante: le istanze concrete con i valori dei loro attributi, mentre il diagramma delle classi ne descrive lo schema generale.

---
## Slide 13 – Diagrammi (diagramma dei package)

*Sono viste sul modello UML*

- **Statici**:
	- Diagramma delle classi
	- Diagramma degli oggetti
	- Diagramma dei package
		- *mostra i package e le loro relazioni di dipendenza, contenimento e specializzazione*
	- Diagramma dei componenti
	- Diagramma di deployment
	- Diagramma delle strutture composite
- **Dinamici**:
	- Diagramma dei casi d'uso
	- Diagramma degli stati
	- Diagramma di attività
	- Diagramma di interazione
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

---
## Slide 14 – Diagrammi (diagramma dei componenti)

*Sono viste sul modello UML*

- **Statici**:
	- Diagramma delle classi
	- Diagramma degli oggetti
	- Diagramma dei package
	- Diagramma dei componenti
		- *descrive l'architettura software del sistema*
	- Diagramma di deployment
	- Diagramma delle strutture composite
- **Dinamici**:
	- Diagramma dei casi d'uso
	- Diagramma degli stati
	- Diagramma di attività
	- Diagramma di interazione
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

---
## Slide 15 – Diagrammi (diagramma di deployment)

*Sono viste sul modello UML*

- **Statici**:
	- Diagramma delle classi
	- Diagramma degli oggetti
	- Diagramma dei package
	- Diagramma dei componenti
	- Diagramma di deployment
		- *descrive la struttura del sistema hardware e l'allocazione dei vari moduli software*
	- Diagramma delle strutture composite
- **Dinamici**:
	- Diagramma dei casi d'uso
	- Diagramma degli stati
	- Diagramma di attività
	- Diagramma di interazione
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

>> Componenti vs. deployment: il primo dice *quali* moduli software esistono e come si incastrano, il secondo su *quale macchina/nodo fisico* ciascun modulo viene installato ed eseguito.

---
## Slide 16 – Diagrammi (diagramma delle strutture composite)

*Sono viste sul modello UML*

- **Statici**:
	- Diagramma delle classi
	- Diagramma degli oggetti
	- Diagramma dei package
	- Diagramma dei componenti
	- Diagramma di deployment
	- Diagramma delle strutture composite
		- *mostra la struttura interna di classificatori strutturati*
- **Dinamici**:
	- Diagramma dei casi d'uso
	- Diagramma degli stati
	- Diagramma di attività
	- Diagramma di interazione
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

---
## Slide 17 – Diagrammi (diagramma dei casi d'uso)

*Sono viste sul modello UML*

- **Statici**:
	- Diagramma delle classi
	- Diagramma degli oggetti
	- Diagramma dei package
	- Diagramma dei componenti
	- Diagramma di deployment
	- Diagramma delle strutture composite
- **Dinamici**:
	- Diagramma dei casi d'uso
		- *elenca i casi d'uso del sistema e le loro relazioni*
	- Diagramma degli stati
	- Diagramma di attività
	- Diagramma di interazione
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

---
## Slide 18 – Diagrammi (diagramma degli stati)

*Sono viste sul modello UML*

- **Statici**:
	- Diagramma delle classi
	- Diagramma degli oggetti
	- Diagramma dei package
	- Diagramma dei componenti
	- Diagramma di deployment
	- Diagramma delle strutture composite
- **Dinamici**:
	- Diagramma dei casi d'uso
	- Diagramma degli stati
		- *usa la notazione degli automi di Harel per descrivere gli stati degli oggetti di una classe*
	- Diagramma di attività
	- Diagramma di interazione
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

>> Gli *statecharts* di Harel estendono gli automi a stati finiti con stati annidati, stati concorrenti (ortogonali) e memoria (*history*): servono a evitare l'esplosione combinatoria degli stati di un automa piatto.

---
## Slide 19 – Diagrammi (diagramma di attività)

*Sono viste sul modello UML*

- **Statici**:
	- Diagramma delle classi
	- Diagramma degli oggetti
	- Diagramma dei package
	- Diagramma dei componenti
	- Diagramma di deployment
	- Diagramma delle strutture composite
- **Dinamici**:
	- Diagramma dei casi d'uso
	- Diagramma degli stati
	- Diagramma di attività
		- *descrive le sequenze eventi-azioni-transizioni di una funzione*
	- Diagramma di interazione
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

---
## Slide 20 – Diagrammi (diagramma di interazione)

*Sono viste sul modello UML*

- **Statici**:
	- Diagramma delle classi
	- Diagramma degli oggetti
	- Diagramma dei package
	- Diagramma dei componenti
	- Diagramma di deployment
	- Diagramma delle strutture composite
- **Dinamici**:
	- Diagramma dei casi d'uso
	- Diagramma degli stati
	- Diagramma di attività
	- Diagramma di interazione
		- *mostra le interazioni tra gli oggetti durante scenari di funzionamento del sistema*
		- Diagramma di sequenza
		- Diagramma di comunicazione
		- Diagramma di sintesi dell'interazione
		- Diagramma dei tempi

---
## Slide 21 – Specifiche

- Sono la descrizione testuale della semantica di un elemento

![[ISW3-s021-1.png|600]]

Contenuto della specifica mostrata in figura:

Caso d'uso: "APRI CONTO CORRENTE BANCARIO"

Scenario base:
1. il cliente si presenta in banca per aprire un nuovo c/c
2. l'addetto riceve il cliente e fornisce spiegazioni
3. se il cliente accetta fornisce i propri dati
4. l'addetto verifica se il cliente è censito in anagrafica
5. l'addetto crea il nuovo conto corrente
6. l'addetto segnala il numero di conto al cliente

Varianti:
- 3(a) se il cliente non accetta il caso d'uso termina
- 3(b) se il conto va intestato a più persone vanno forniti i dati di tutte
- 4(a) se il cliente (o uno dei diversi intestatari) non è censito l'addetto provvede a registrarlo, richiede al cliente la firma dello specimen e ne effettua la memorizzazione via scanner

>> L'ellisse (l'elemento grafico "caso d'uso") è solo il nome: tutta la semantica vera sta nel testo della specifica associata. Il diagramma è un indice, la specifica è il contenuto.

---
## Slide 22 – Ornamenti

- Rendono visibili gli aspetti particolari della specifica dell'elemento

![[ISW3-s022-1.png|600]]

La classe `Finestra`, "ornata", mostra il valore etichettato `{autore = Smith}`, gli attributi `+dimensioni: Rettangolo=(100,100)`, `#visibile: Booleano=falso`, `+dimensioniPredefinite: Rettangolo` (sottolineato perché di classe) e le operazioni `+crea()` (sottolineata) e `+nascondi()`.

>> Convenzioni di visibilità: `+` pubblico, `#` protetto, `-` privato; il **sottolineato** indica un membro *statico* (di classe, non di istanza).

---
## Slide 23 – Distinzioni comuni

- **Classificatore/istanza**
	- Separa la nozione astratta di un'entità dalle sue concrete istanze
	- Un'istanza ha di solito la stessa forma del classificatore, ma con il nome sottolineato

![[ISW3-s023-1.png|600]]

- **Interfaccia/implementazione**
	- Separa "cosa" un oggetto fa da "come" lo fa
	- Un'interfaccia definisce un contratto che ciascuna sua implementazione garantisce di rispettare

![[ISW3-s023-2.png|450]]

Nella figura: l'interfaccia `«interface» Stack` (nome in corsivo perché astratta) con `+pop :Obj` e `+push(Obj)`, realizzata (freccia tratteggiata a triangolo vuoto) dalla classe `ArrayStack`, che aggiunge l'attributo `elementi: array of Obj` e implementa `+pop :Obj` e `+push(Obj)`.

---
## Slide 24 – Meccanismi di estendibilità

- Uno **stereotipo** rappresenta una variazione di un elemento di modellazione esistente, con la stessa forma ma diverso scopo. Permette quindi di introdurre nuovi elementi di modellazione a partire da quelli esistenti
	- predefiniti
	- introdotti dall'utente

![[ISW3-s024-1.png|400]]

- Una **proprietà** è un valore associato a un elemento del modello, espresso da una stringa associata all'elemento

`{ author = "Joe Smith", status = analysis }`   `{ abstract }`

- Un **vincolo** è una frase di testo che definisce una condizione o una regola che riguarda un elemento del modello e deve risultare sempre vera

`{ disjoint, complete }`   `{ subset }`

- Un **profilo** è un insieme di stereotipi, valori etichettati (che definiscono proprietà) e vincoli, usato per personalizzare UML

>> In figura lo stesso concetto "attore" è reso in due modi equivalenti: la classe con lo stereotipo testuale `«attore» Utente` oppure l'icona dell'omino. Uno stereotipo può infatti portare con sé anche una notazione grafica propria.

---
## Slide 25 – Architettura

- **Vista dei casi d'uso**
	- *Descrive le funzionalità del sistema come vengono percepite dagli utenti, dagli analisti e dagli esecutori del testing. Non specifica l'organizzazione del software ma è la base per le altre viste*
- **Vista logica**
	- *Stabilisce la terminologia del dominio del problema sotto forma di classi e oggetti, illustrando come essi implementano il comportamento richiesto*
- **Vista dei processi**
	- *È una variante orientata ai processi della vista logica; modella i thread e i processi sotto forma di classi attive*
- **Vista di implementazione**
	- *Descrive i moduli implementativi e le loro dipendenze, illustrandone la configurazione così da definire il concetto di versione del sistema*
- **Vista di deployment**
	- *Mostra la distribuzione fisica del sistema software sull'architettura hardware*

>> È il modello "4+1 viste" di Kruchten: quattro viste tecniche (logica, processi, implementazione, deployment) tenute insieme e giustificate dalla vista dei casi d'uso, che fa da "+1".

---
## Slide 26 – 3. Diagrammi dei casi d'uso

- Rappresentano i *ruoli* di utilizzo del sistema da parte di uno o più utilizzatori (**attori**):
	- esseri umani (dipendenti, clienti)
	- organizzazioni, enti, istituzioni
	- altre applicazioni o sistemi (hardware e software), sottosistemi
- Descrivono l'**interazione** tra attori e sistema, non la logica interna della funzione né la struttura del sistema
- Sono espressi in forma **testuale**, comprensibile anche per i non "addetti ai lavori"
- Possono essere definiti a livelli diversi (l'intero sistema o parti del sistema), ma sempre dal punto di vista dell'utente

---
## Slide 27 – Attore vs. caso d'uso

- Un **attore** identifica il ruolo che un'entità esterna assume quando interagisce direttamente con il sistema
	- … è sempre esterno al sistema, anche se il sistema ne può mantenere una rappresentazione interna
	- … spedisce o riceve messaggi dal sistema, o scambia informazioni con esso
	- … esegue i casi d'uso
	- … è modellato con una classe, non un oggetto
- Un **caso d'uso** è la specifica di una sequenza di azioni che un sistema, un sottosistema o una classe può eseguire interagendo con attori esterni
	- … è una funzionalità come percepita da un attore
	- … produce un risultato osservabile utile all'attore
	- … viene sempre attivato da un attore
	- … è completo

>> "Attore = ruolo, non persona": la stessa persona fisica può essere Cliente in un caso d'uso e Impiegato in un altro; per questo l'attore si modella con una classe (il ruolo) e non con un oggetto (l'individuo).

---
## Slide 28 – I casi d'uso di una banca

![[ISW3-s028-1.png|600]]

Elementi indicati nel diagramma: **attore** (l'omino, es. Cliente, Impiegato, Cassiere, Ispettore, Direttore), **confine del sistema** (il rettangolo "Agenzia bancaria"), **associazione di comunicazione** (la linea attore–caso d'uso), **caso d'uso** (le ellissi: Rilascio libretto assegni, Prelievo, Apertura C/C, Ispezione, Stampa rapporto).

---
## Slide 29 – Relazioni nei diagrammi dei casi d'uso

![[ISW3-s029-1.png|600]]

- **generalizzazione tra attori**: Utente registrato è un Utente
- **comunicazione unidirezionale**: Stampa estratto conto → Cliente
- **inclusione tra casi d'uso** (il caso d'uso principale non è completo senza il caso d'uso incluso): Prelievo bancomat `«include»` Verifica identità
- **estensione di casi d'uso** (il caso d'uso principale è completo anche senza il caso d'uso d'estensione): Liberatoria per libri rari `«extend»` Richiesta prestito
- **generalizzazione tra casi d'uso**: Controllo password e Controllo impronta sono specializzazioni di Verifica identità

>> Verso delle frecce: in `«include»` la freccia va dal caso d'uso *base* a quello *incluso*; in `«extend»` va, al contrario, dall'*estensione* al caso d'uso *base* (è l'estensione che "sa" dove agganciarsi, tramite un punto di estensione).

---
## Slide 30 – Punti di vista

![[ISW3-s030-1.png|200]]

| UTILIZZATORE | PROGETTISTA |
| --- | --- |
| **Casi d'uso** | **Funzionalità interne** |
| telefonare | trasmissione / ricezione |
| ricevere telefonate | alimentazione (batteria) |
| inviare messaggi | I/O (display, tasti, ...) |
| memorizzare un numero | gestione rubrica |
| …. | ….. |

>> Esempio del telefono cellulare: l'utilizzatore ragiona per obiettivi ("telefonare"), il progettista per sottosistemi ("trasmissione/ricezione"). I casi d'uso devono stare rigorosamente sulla colonna di sinistra, altrimenti si smette di raccogliere requisiti e si inizia a progettare.

---
## Slide 31 – Ruolo dei casi d'uso

- **Nelle fasi iniziali della progettazione servono per chiarire cosa dovrà fare il sistema**
	- Ragionare sui casi d'uso con il committente è uno dei modi più efficaci ed efficienti per scoprire ed analizzare i requisiti ai quali il sistema dovrà fornire un'implementazione
	- Dialogare su come il sistema verrà utilizzato, nella comunicazione con persone non esperte nella progettazione, è certamente più facile che non guardare a come dovrà essere costruito
	- Raggiungere un accordo con il committente sulle modalità di utilizzo del sistema consente al progettista di affrontare con maggiore tranquillità il suo mestiere specifico di progettazione
- **I casi d'uso guidano l'intero progetto di sviluppo**
	- Costituiscono il punto di partenza per la progettazione del sistema
	- Sono il riferimento primario per la definizione, la progettazione, l'esecuzione dei test per la verifica di quanto prodotto
	- Rappresentano delle naturali unità di rilascio, per i progetti che seguono un approccio incrementale alla pianificazione della realizzazione e dei rilasci

---
## Slide 32 – Identificare i casi d'uso

1. Individuare i confini del sistema
2. Identificare tutte le tipologie di utilizzatori del sistema (esseri umani o altri sistemi), che verranno modellati come attori
3. Per ogni tipologia di attore, rilevare in quale modo utilizzerà il sistema, partendo dagli obiettivi che egli deve raggiungere. A ogni modalità di utilizzo corrisponde un caso d'uso
4. Per ogni caso d'uso, descrivere lo scenario base (la sequenza di passi più semplice possibile che conduce al successo del caso d'uso, le risposte attese dal sistema), e le principali varianti a tale scenario. Così facendo, tipicamente, possono emergere necessità di interazione del sistema con altri soggetti (esseri umani o altri sistemi), che verranno rappresentati nel modello come attori aggiuntivi

>> Il procedimento è deliberatamente "dall'esterno verso l'interno": prima si fissa il confine
>> (cosa è dentro il sistema e cosa fuori), poi chi sta fuori (attori), poi cosa chiedono
>> (casi d'uso), e solo alla fine come avviene l'interazione (scenari). Gli attori scoperti al
>> passo 4 sono tipicamente sistemi di supporto (es. un servizio di pagamento) che non
>> avviano nulla ma vengono invocati durante lo scenario: sono gli attori secondari.

---
## Slide 33 – Scenari

- Ogni specifica esecuzione (istanza) di un caso d'uso è detta **scenario**
	- Ad esempio, in un caso d'uso "acquisto di un prodotto", ogni specifico acquisto effettuato da uno specifico cliente in uno specifico momento costituisce uno scenario particolare
- Esistono scenari di **successo** e scenari di **fallimento**
- Gli scenari possibili sono innumerevoli
- La prassi più diffusa per la descrizione degli scenari di un caso d'uso è quella di definire uno **scenario base**, cioè lo scenario più semplice possibile che porta al successo del caso d'uso
- Allo scenario base vengono quindi agganciate le **varianti**, che lo rendono più complesso e possono portare al successo o al fallimento del caso d'uso

>> Relazione caso d'uso ↔ scenario = relazione classe ↔ oggetto: il caso d'uso è la
>> descrizione generale, lo scenario una sua istanza concreta. Poiché gli scenari sono
>> potenzialmente infiniti, non si enumerano: si descrive un "cammino felice" e si elencano
>> i punti di diramazione (le varianti), esattamente come i rami di un albero di esecuzione.

---
## Slide 34 – Scenari

**Caso d'uso**: "APRI CONTO CORRENTE BANCARIO"

**Scenario base**:
1. il cliente si presenta in banca per aprire un nuovo c/c
2. l'addetto riceve il cliente e fornisce spiegazioni
3. se il cliente accetta fornisce i propri dati
4. l'addetto verifica se il cliente è censito in anagrafica
5. l'addetto crea il nuovo conto corrente
6. l'addetto segnala il numero di conto al cliente

**Varianti**:
- 3(a) se il cliente non accetta il caso d'uso termina
- 3(b) se il conto va intestato a più persone vanno forniti i dati di tutte
- 4(a) se il cliente (o uno dei diversi intestatari) non è censito l'addetto provvede a registrarlo, richiede al cliente la firma dello specimen e ne effettua la memorizzazione via scanner

>> Da notare la convenzione di numerazione delle varianti: `3(a)`, `3(b)`, `4(a)` indicano il
>> passo dello scenario base da cui la variante si dirama. Questo rende la specifica
>> compatta (non si riscrive tutto il flusso) e tracciabile in fase di test: ogni variante
>> diventa un caso di test distinto.

---
## Slide 35 – Specifiche del caso d'uso

- UML non suggerisce il modo per specificare un caso d'uso, lasciando spazio libero a tutte le possibili forme di documentazione testuale
- La specifica del caso d'uso, comunque effettuata, ha un ruolo centrale nella comunicazione tra i diversi soggetti coinvolti nello sviluppo di un sistema, dal committente agli utilizzatori, dai progettisti agli specialisti di test
- Un caso d'uso può essere anche descritto da un **diagramma di attività** o **di sequenza**

---
## Slide 36 – Specifiche del caso d'uso

| Nome | |
|---|---|
| Identificatore | |
| Breve descrizione | *fissa l'obiettivo del caso d'uso* |
| Attori primari | *avviano il caso d'uso* |
| Attori secondari | *interagiscono con il caso d'uso dopo che è stato avviato* |
| Precondizioni | *condizioni che devono essere vere prima che il caso d'uso possa essere eseguito* |
| Sequenza principale degli eventi | *i passi che costituiscono il caso d'uso* |
| Postcondizioni | *condizioni che devono essere vere quando il caso d'uso termina* |
| Sequenze alternative degli eventi | *un elenco di alternative alla sequenza principale* |

>> Questo è un template di "caso d'uso strutturato" (stile Cockburn). Precondizioni e
>> postcondizioni sono la parte contrattuale: dicono cosa il sistema può assumere prima
>> e cosa garantisce dopo, e sono direttamente traducibili in asserzioni di test.

---
## Slide 37 – Realizzare i casi d'uso

- La realizzazione dei casi d'uso può essere espressa con una **collaborazione** costituita da classi che interagendo tra loro svolgono i passi specificati nel caso d'uso
- La collaborazione che realizza un caso d'uso può essere descritta:
	- a livello **statico** mediante un diagramma delle classi che evidenzi le classi o gli oggetti coinvolti nella collaborazione
	- a livello **dinamico** mediante un diagramma di interazione che evidenzi i messaggi che gli oggetti si scambiano nell'ambito della collaborazione

![[ISW3-s037-1.png|500]]

Apri conto corrente — Collaborazione apri conto corrente

>> La freccia tratteggiata con punta a triangolo vuoto è la *realizzazione*: la
>> collaborazione (ellisse tratteggiata) realizza il caso d'uso (ellisse continua).
>> È il ponte tra il modello dei requisiti e il modello di progetto.

---
## Slide 38 – Diagrammi delle classi

**4**

- Sono il nucleo fondamentale di UML
- Descrivono la struttura statica del sistema in termini di classi e loro relazioni reciproche
	- Una ***classe*** descrive un gruppo di oggetti con proprietà, comportamento e relazioni comuni
	- Un ***attributo*** è un valore che caratterizza gli oggetti di una classe
	- Un'***operazione*** è una trasformazione che può essere applicata a (o invocata da) gli oggetti di una classe. Ogni operazione ha come argomento implicito l'oggetto destinazione

![[ISW3-s038-1.png|500]]

Nell'esempio: stereotipo `«entità»`, nome della classe `Persona`, proprietà `{Abstract}`; attributi `-nome: String`, `-cognome: String`, `-dataNascita: Date`, `-numeroPersone: Integer=0` (sottolineato = ambito di classe); operazioni `+create(nome,cognome,data)`, `#leggiNome(): String`, `+mostraDati(OutputDevice)`, `+etàInAnni(): Integer`.

---
## Slide 39 – Notazione

- Per gli **attributi** della classe:

`visibilità nome : tipo molteplicità = valoreDefault`

- Visibilità
	- pubblica `+`
	- privata `-`
	- protetta `#`
	- package `~`
- Molteplicità
	- per esempio: `String [5]`, `Real [2..*]`, `Boolean [0..1]`
- Tipo
	- `Integer`, `UnlimitedNatural`, `Real`
	- `Boolean`
	- `String`
- Ambito
	- istanza
	- **classe**

>> L'ambito "classe" (quello che in Java è `static`) si indica graficamente sottolineando
>> l'attributo: il valore è condiviso da tutte le istanze, non replicato in ciascuna.

---
## Slide 40 – Notazione

- Per le **operazioni** della classe:

`visibilità nome (parametro, ...): tipoRestituito`

La parte `nome (parametro, ...): tipoRestituito` costituisce la *signature*.

- Parametri

	`direzione nomeParametro: tipoParametro=valoreDefault`

- Direzione
	- `in`
	- `out`
	- `inout`
	- `return` (si usa quando l'operazione restituisce più valori)
- Ambito
	- istanza
	- **classe**

>> La *signature* non comprende la visibilità: due operazioni con stessa signature ma
>> visibilità diversa sarebbero comunque in conflitto. È proprio la signature a essere
>> usata per risolvere l'overloading e per verificare la compatibilità in caso di override.

---
## Slide 41 – Diversi livelli di astrazione

![[ISW3-s041-1.png|600]]

La stessa entità `Cliente` può essere rappresentata con dettaglio crescente/decrescente: classe con stereotipo `«attore»` completa di attributi (`nome`, `cognome`) e operazioni (`acquista`, `vende`); poi senza operazioni; poi solo nome e stereotipo; poi solo nome; infine con la notazione iconica dell'attore (omino).

>> Il livello di dettaglio non è una proprietà del modello ma una scelta comunicativa:
>> si mostra solo ciò che serve al lettore di quel diagramma. È l'applicazione del
>> principio di astrazione alla notazione stessa.

---
## Slide 42 – Le relazioni tra classi

- **Generalizzazione**
- **Associazione**
- **Dipendenza**
- **Aggregazione**
- **Composizione**
- **Raffinamento**

![[ISW3-s042-1.png|500]]

Notazione: generalizzazione = linea continua con punta a triangolo vuoto; associazione = linea continua semplice; dipendenza = linea tratteggiata con punta a freccia aperta; aggregazione = linea continua con rombo vuoto; composizione = linea continua con rombo pieno; raffinamento = linea tratteggiata con punta a triangolo vuoto.

---
## Slide 43 – Associazione

- E' una connessione tra classi, tipicamente bidirezionale
- **Molteplicità**:
	- Esattamente 1 → `1`
	- Opzionale 1 → `0..1`
	- Da x a y inclusi → `x..y`
	- Solo i valori a,b,c → `a,b,c`
	- 1 o più → `1..*`
	- 0 o più → `*`

![[ISW3-s043-1.png|550]]

Esempi: `Persona 1..* — possiede — * Casa`, `Casa 1..* — in — 0..1 Città`; `Poligono * — haLati — 3..* Linea`, `Linea * — haEstremi — 2 Punto`.

>> Attenzione al verso di lettura delle molteplicità: il numero scritto vicino a una classe
>> dice quante istanze di *quella* classe sono collegate a una istanza dell'altra. In
>> `Poligono * — 3..* Linea`, ogni poligono ha almeno 3 linee, e ogni linea può essere
>> lato di un numero qualsiasi di poligoni.

---
## Slide 44 – Associazione

- E' possibile indicare il **verso di lettura** di una associazione, definire associazioni **monodirezionali**, specificare **ruoli**

![[ISW3-s044-1.png|600]]

Esempi: `PaginaWeb — puntaA → * Immagine` (monodirezionale); `Società 1 (datoreLavoro) ◀ lavoraPer * (impiegato) Persona`; associazioni riflessive su `Persona`: `sposa` (ruoli *marito* 0..1 / *moglie* 0..1) e `dirige` (ruoli *dirigente* 0..1 / *sottoposto* \*).

>> I ruoli sono indispensabili nelle associazioni riflessive: senza le etichette *dirigente* e
>> *sottoposto* non si saprebbe quale estremità dell'associazione `dirige` rappresenti il capo.

---
## Slide 45 – Associazione

- E' possibile specificare **vincoli** e **classi associative**

![[ISW3-s045-1.png|650]]

*l'identità delle istanze della classe associativa è stabilita solo dalle identità degli oggetti alle sue estremità*

Esempi: classe associativa `Posizione` (con attributo `stipendio`) sull'associazione `Azienda * (datore) ◀ lavora per 1..* (impiegato) Persona`; vincolo `{or}` su `Conto — Intestato a → Azienda / Privato`; vincolo `{subset}` tra `a capo di` e `membro di` su `persona`/`comitato`; vincolo espresso con nota `{persona.datore = persona.capo.datore}`.

>> La classe associativa serve quando un attributo non appartiene né all'una né all'altra
>> classe ma alla *coppia*: lo stipendio non è della persona né dell'azienda, ma del
>> rapporto di lavoro. Conseguenza dell'identità "per estremità": tra una data persona e
>> una data azienda può esistere al più una istanza di `Posizione`.

---
## Slide 46 – Associazione

- Le **associazioni qualificate** riducono un'associazione molti-a-molti a una del tipo uno-a-uno, specificando un attributo che permette di selezionare un unico oggetto destinazione svolgendo il ruolo di identificatore o chiave di ricerca

![[ISW3-s046-1.png|400]]

A sinistra `Club * — * Socio`; a destra la stessa associazione qualificata con `idSocio`, che diventa `Club[idSocio] * — 0..1 Socio`.

>> Il qualificatore si comporta come la chiave di un dizionario: fissato il club e il valore
>> di `idSocio`, si ottiene al più un socio. La molteplicità `0..1` (invece di `1`) indica che
>> non tutti i valori possibili della chiave sono necessariamente associati a un oggetto.

---
## Slide 47 – Associazione

- E' possibile definire **associazioni n-arie** (cioè tra n classi)
	- Ogni istanza dell'associazione è una tupla formata da n oggetti delle rispettive classi
	- La molteplicità di un ruolo rappresenta il numero di istanze dell'associazione quando sono stati fissati n-1 oggetti
	- I numeri di istanze dell'associazione quando è fissato un solo oggetto sono implicitamente assunti essere tutti a "molti"

![[ISW3-s047-1.png|550]]

Associazione ternaria tra `Aula` (1), `Corso` (1) e `GiornoEOra` (\*), con classe associativa `Lezione` (attributo `argomento`).

>> Il rombo indica l'associazione n-aria. Letta l'associazione: fissati un'aula e un giorno/ora
>> si ha esattamente 1 corso; fissati corso e giorno/ora si ha esattamente 1 aula; fissati
>> aula e corso si hanno molti giorni/ore. È esattamente la semantica di una tabella con
>> chiave composta.

---
## Slide 48 – Elementi derivati

- Un **elemento derivato** può essere calcolato a partire da un altro ma viene mostrato, per motivi di chiarezza o per scelte di progettazione, nonostante non aggiunga alcuna ulteriore informazione semantica
	- viene indicato posizionando uno slash prima del suo nome
	- i dettagli su come calcolarlo possono essere inseriti in una nota o essere rappresentati con una stringa di vincoli

![[ISW3-s048-1.png|600]]

Esempi: attributo derivato `/age` in `Person` con nota `{age = currentDate – birthDate}`; associazione derivata `/worksForCompany` con vincolo `{Person.employer = Person.department.employer}`.

>> Un elemento derivato è ridondanza *dichiarata*: si documenta che il dato esiste nel
>> modello ma che la sua unica fonte di verità è la formula. In implementazione diventa
>> tipicamente un metodo calcolato (o una vista), non un campo memorizzato.

---
## Slide 49 – Aggregazione

- E' un caso speciale di associazione con semantica *part-of*
	- Sia il tutto che le parti esistono indipendentemente

![[ISW3-s049-1.png|600]]

Esempi: `Squadra` 1 aggrega `Giocatore` (10), `Portiere` (1), `Riserva` (\*); `SequenzaVideo * ◇— * Scena {ordered}`.

**connessione per riferimento**

>> "Connessione per riferimento" significa che il tutto possiede solo un puntatore alle parti:
>> distruggere la squadra non distrugge i giocatori. È l'analogo di un campo che contiene
>> un riferimento a oggetti condivisi.

---
## Slide 50 – Composizione

- E' un'aggregazione in cui il tutto "possiede" le sue parti
	- Le parti esistono solo in relazione al tutto
	- Ogni parte appartiene a esattamente un tutto

![[ISW3-s050-1.png|650]]

Esempi: `Poligono 1 ◆— contiene —3..* Punto {ordered}`, con nota "Questo è un commento associato alla classe Poligono."; `EDIFICIO 1 ◆— 1..* STANZA`; scomposizione di `Finestra` in `BarraTitolo` (che contiene `Etichetta` e `Pulsante Chiusura`), `Pannello` (1..\*) e `Bordo`; composizione del database `school.db` nelle tabelle `course`, `department`, `instructor`, `school`, `student`.

**connessione per valore**

>> Regola pratica per distinguere: se cancellando il tutto devo per forza cancellare le parti,
>> è composizione (rombo pieno); se le parti sopravvivono o possono essere condivise,
>> è aggregazione (rombo vuoto). Il vincolo "esattamente un tutto" implica che la
>> molteplicità dal lato del contenitore è sempre 1 (o 0..1).

---
## Slide 51 – Generalizzazione

- Tutti gli attributi, le operazioni e le relazioni della superclasse vengono **ereditati** dalle sottoclassi

![[ISW3-s051-1.png|650]]

`Figura {abstract}` con attributi `posizione`, `colore` e operazione `display {abstract}`; sottoclassi `Arco` (`raggio`, `angoloIniziale`, `angoloFinale`, `display`), `Segmento` (`estremo`, `spessore`, `display`), `Rettangolo` (`vertice`, `tessitura`, `display`). Le due notazioni mostrate (frecce separate oppure frecce raggruppate in un unico tronco) sono equivalenti.

---
## Slide 52 – Generalizzazione

- E' supportata l'**ereditarietà multipla**
- Possono essere indicati **insiemi di generalizzazione** e **vincoli** (*overlapping*, *disjoint*, *complete*, *incomplete*)

![[ISW3-s052-1.png|600]]

`Veicolo` è specializzato secondo due insiemi di generalizzazione: `propulsione {overlapping}` → `VeicoloAVento`, `VeicoloAMotore`; `utilizzo {overlapping}` → `VeicoloDiTerra`, `VeicoloDiAcqua`. `Camion` eredita da `VeicoloAMotore` e `VeicoloDiTerra`; `Barca` eredita da `VeicoloAVento`, `VeicoloAMotore` e `VeicoloDiAcqua`.

>> I quattro vincoli vanno a coppie su due dimensioni indipendenti:
>> *disjoint/overlapping* dice se un oggetto può appartenere a più sottoclassi
>> dello stesso insieme; *complete/incomplete* dice se le sottoclassi elencate
>> esauriscono tutti i casi possibili della superclasse.

---
## Slide 53 – Classi astratte

- Sono classi che non possono essere istanziate da oggetti
- Sono utili come radici di **gerarchie di specializzazione**

![[ISW3-s053-1.png|350]]

`Figura {abstract}` con sottoclassi `Ellisse` e `Poligono`.

---
## Slide 54 – Un esempio

![[ISW3-s054-1.png|600]]

Elementi principali: `Dipartimento 1 — afferisceA — * Docente`; `Corso * — insegna — 1 Docente`; `Docente * — di — 1 SSD`; associazione riflessiva `mutuatoDa` su `Corso` (0..1 / 0..1); `Corso 1..* ◆— 1 CorsoDiStudio`; `CorsoDiStudio 1..* ◇— 1..* Facoltà`; `Facoltà 1 — incardinatoIn — * Docente`; generalizzazione `{disjoint}` di `Docente` in `ProfOrdinario`, `ProfAssociato`, `Ricercatore`.

---
## Slide 55 – Powertyping

- Un ***powertype*** è una (meta)classe le cui istanze sono classi che specializzano un'altra classe

![[ISW3-s055-1.png|550]]

*in UML 2*: `Articolo * — di — 1 TipoArticolo`, con l'insieme di generalizzazione `:TipoArticolo` che raggruppa le sottoclassi `HiFi`, `Telefonia`, `PC`.
*in UML 1.4*: la stessa struttura con lo stereotipo `<<powertype>>` sulla classe `TipoArticolo`.

>> Il punto chiave è il salto di livello: `HiFi`, `Telefonia`, `PC` sono contemporaneamente
>> *sottoclassi* di `Articolo` e *istanze* di `TipoArticolo`. Il powertype serve quando la
>> classificazione stessa deve essere un dato manipolabile a runtime (per esempio per
>> aggiungere una nuova categoria di articoli senza ricompilare).

---
## Slide 56 – Dipendenza

- In generale, *A dipende da B quando una variazione in B può comportare una variazione in A*
- Nel caso delle classi, una dipendenza indica che una classe cliente dipende da alcuni servizi di una classe fornitore, ma non ha una struttura interna che dipende da quest'ultima
	- Lo stereotipo più comunemente usato è `«use»`

![[ISW3-s056-1.png|350]]

- (segue) Più specificamente, si può rappresentare il fatto che un'operazione della classe cliente ha argomenti che appartengono al tipo di un'altra classe

![[ISW3-s056-2.png|350]]

>> La differenza rispetto all'associazione è la persistenza del legame: nella dipendenza la
>> classe cliente non conserva un riferimento al fornitore (lo usa come parametro, variabile
>> locale o valore di ritorno), quindi il legame è transitorio.

---
## Slide 57 – Template

- Un ***template*** (o ***classe parametrizzata***) è utilizzato per descrivere una classe in cui uno o più parametri formali non sono istanziati
	- Un template definisce una famiglia di classi in cui ogni classe è specificata istanziando i parametri con i valori attuali
	- Un template non è utilizzabile direttamente
- Un ***bound element*** è una classe che istanzia i parametri di un template, e può essere utilizzato esattamente come una classe

![[ISW3-s057-1.png|600]]

`Array` con parametri formali `T, k:Integer=5` (**tipo default: classificatore**); i bound element `Array <T->Point k->3>` e `AddressList`, quest'ultimo legato tramite `«bind» <T->Address k->24>`.

>> Due notazioni equivalenti per il bound element: scrivere esplicitamente i valori attuali
>> nel nome (`Array <T->Point k->3>`) oppure dare un nome proprio alla classe e collegarla
>> al template con una dipendenza `«bind»` (`AddressList`).

---
## Slide 58 – Raffinamento

- Esprime una relazione tra due descrizioni dello stesso concetto a diversi livelli di astrazione
	- Tra un tipo astratto e una classe che lo realizza (*realizzazione*)
	- Tra una classe di analisi e una di progetto
	- Tra una implementazione semplice e una complessa della stessa cosa

![[ISW3-s058-1.png|450]]

`Classe di progetto ⇢▷ Classe di analisi`; `Stack ◁⇠ ArrayStack`.

---
## Slide 59 – Interfaccia

- Una ***interfaccia*** è un insieme di funzionalità pubbliche identificate da un nome
- Specifica le operazioni pubbliche di una classe, di un componente, di un pacchetto o di altre entità, separandone le specifiche dall'implementazione
- Un'interfaccia non ha alcuna specifica di struttura interna (attributi, stato o associazioni); è una classe astratta, senza attributi né associazioni e con solo operazioni astratte (senza implementazione)
	- La notazione estesa prevede una rappresentazione simile a quella delle classi, con `«interface»` come stereotipo e senza compartimento per gli attributi; la notazione minimizzata prevede un piccolo cerchio collegato all'entità (classe, componente o package) che la supporta, col nome dell'interfaccia vicino (*lollypop notation*)
	- Un'altra classe che usa l'interfaccia può essere collegata ad essa da una freccia di dipendenza, eventualmente con lo stereotipo `«use»`

---
## Slide 60 – Interfaccia

![[ISW3-s060-1.png|650]]

In alto, notazione estesa: `Calcolatrice ⇢ «interface» Stackable` (operazioni `+pop :Obj`, `+push(Obj)`, `+empty():Boolean`), realizzata da `ArrayStack` (`elementi: array of Obj`, `+pop:Obj`, `+push(Obj)`, `+empty():Boolean`).
In basso, notazione minimizzata (*lollypop*): `Calcolatrice ⇢ ○ Stackable — ArrayStack`.

---
## Slide 61 – Interfaccia vs. ereditarietà

![[ISW3-s061-1.png|650]]

A sinistra, soluzione con ereditarietà: `Biblioteca ◆— ElementoBiblioteca`, specializzato in `ElementoPrestabile` (→ `Libro`, `CD`) ed `ElementoNonPrestabile` (→ `Rivista`).
A destra, soluzione con interfaccia: `Biblioteca ◆— ElementoBiblioteca`, specializzato direttamente in `Libro`, `CD`, `Rivista`; `Libro` e `CD` supportano l'interfaccia `prestito`.

>> La versione a destra evita di far dipendere la gerarchia (che modella *cosa è* un
>> elemento) da una capacità accessoria (*cosa sa fare*): aggiungere un nuovo elemento
>> prestabile non richiede di rivedere l'albero di ereditarietà. È lo stesso motivo per cui,
>> in Java, la prestabilità si modella come `interface` e non come classe intermedia.

---
## Slide 62 – Analisi vs. progettazione

- **Classi di analisi**
	- rappresentano un'astrazione nel dominio del problema
	- corrispondono chiaramente a concetti concreti del mondo del business
	- escludono tutti i dettagli implementativi
	- hanno un insieme ridotto, coeso e ben definito di responsabilità
	- indicano gli attributi che saranno *probabilmente* inclusi nelle classi di progettazione
	- le loro operazioni specificano i principali servizi offerti dalla classe
- **Classi di progettazione**
	- le loro specifiche sono complete per cui possono essere direttamente implementate
	- nascono dal domino del problema per raffinamento delle classi di analisi, oppure dal dominio della soluzione

>> Le classi di progettazione che nascono "dal dominio della soluzione" sono quelle che non
>> hanno alcun corrispettivo nel mondo del committente: controller, DAO, factory, classi di
>> utilità. Le classi di analisi, invece, devono restare comprensibili a chi non programma.

---
## Slide 63 – Identificare le classi d'analisi

- Le classi corrispondono a **entità fisiche** e a **concetti** del dominio applicativo
	- Evitare di rappresentare soluzioni implementative

![[ISW3-s063-1.png|500]]

Nel primo caso (NO) la classe `Elenco` è solo una struttura dati: `Banchetto —1— ha —1— Elenco —1— di —1..*— Invitato`. Nel secondo (preferibile): `Banchetto —1— ha —1..*— Invitato`.

>> `Elenco` non è un concetto del dominio "banchetto": è il modo in cui un programmatore
>> memorizzerebbe gli invitati (una lista). In analisi si modella *cosa* esiste nel dominio,
>> non *come* lo si realizzerà: la molteplicità `1..*` esprime già la stessa informazione.

- Evitare le classi ridondanti, irrilevanti, vaghe
- Evitare le classi "onnipotenti"

![[ISW3-s063-2.png|350]]

Classi come `Sistema` o `Controllore` sono troppo vaghe/onnipotenti: NO.

---
## Slide 64 – Identificare le classi d'analisi

- Una classe è associata a un piccolo e ben definito insieme di responsabilità (normalmente tra 3 e 5)

![[ISW3-s064-1.png|500]]

| SI – `CarrelloSpesa` | NO – `CarrelloSpesa` |
| --- | --- |
| aggiungiProdotto | aggiungiProdotto |
| rimuoviProdotto | rimuoviProdotto |
| mostraProdotti | mostraProdotti |
| | verificaCartaCredito |
| | accettaPagamento |
| | stampaRicevuta |

>> Le tre operazioni di destra (pagamento, carta di credito, ricevuta) appartengono ad altri
>> concetti (`Pagamento`, `Ordine`): metterle nel carrello ne rompe la coesione e lo rende
>> una classe "onnipotente".

- Nessuna classe può essere isolata
- Evitare di avere poche classi troppo complesse, ma anche tante classi troppo semplici

---
## Slide 65 – Identificare le classi d'analisi

- I nomi delle classi devono riflettere la loro natura intrinseca e non il ruolo giocato nelle associazioni

![[ISW3-s065-1.png|500]]

- NO: `Marito —1— sposa —1— Moglie`
- SI: `Uomo —0..1— sposa —0..1— Donna`, con i ruoli `marito` e `moglie` sugli estremi dell'associazione

>> "Marito" e "moglie" non sono ciò che una persona *è*, ma il ruolo che assume in una
>> particolare associazione: un uomo non sposato smetterebbe di essere istanza della classe.
>> Per questo la molteplicità corretta è `0..1` e i nomi dei ruoli vanno sull'associazione.

- Evitare le gerarchie di specializzazione profonde

---
## Slide 66 – Identificare le classi d'analisi

- I nomi che descrivono oggetti dovrebbero essere espressi come attributi

![[ISW3-s066-1.png|400]]

Invece di `Auto —*— di —1— Colore`, si scrive la classe `Auto` con l'attributo `colore`.

- Se una proprietà esiste indipendentemente, o compare più volte all'interno del diagramma, dovrebbe essere espressa come classe

![[ISW3-s066-2.png|400]]

- NO: `Auto` con attributo `proprietario`
- SI: `Auto —*— di —1— Persona`

---
## Slide 67 – Identificare le associazioni d'analisi

- Le associazioni sono tipicamente indicate da **verbi** che esprimono collocazione fisica (*contenuto in*), azioni (*gestisce*), comunicazioni (*parla a*), proprietà (*possiede*), soddisfacimento di condizioni (*sposato a*)
	- Ogni riferimento da una classe a un'altra è un'associazione

![[ISW3-s067-1.png|400]]

- NO: `CartaCredito` con attributo `proprietario` e classe `Persona` separata
- SI: `CartaCredito —*— di —1— Persona`

	- Un'aggregazione è un'associazione con semantica *part-of*

![[ISW3-s067-2.png|400]]

- NO: `Auto —0..1— contiene —4— Ruota` (associazione ordinaria con nome "contiene")
- SI: `Auto —0..1—◇——4— Ruota` (rombo vuoto dell'aggregazione)

	- Evitare le associazioni irrilevanti o che esprimono soluzioni implementative

>> Il rombo vuoto (aggregazione) dice già "part-of": scriverlo anche come verbo *contiene*
>> è ridondante. Il rombo pieno sarebbe invece composizione (parte non condivisa e con
>> vita legata al tutto).

---
## Slide 68 – Identificare le associazioni d'analisi

- Un'associazione deve descrivere una proprietà strutturale del dominio, non un evento transitorio

![[ISW3-s068-1.png|550]]

- NO: `Biblioteca —0..1— presta —*— Libro`
- preferibile: `Biblioteca —1— contiene —1..*— Libro —*— inPrestitoA —0..1— Cliente`

>> "Prestare" è un evento che accade in un istante; "contenere" ed "essere in prestito a"
>> sono invece stati strutturali che valgono nel tempo. Il diagramma delle classi descrive
>> la struttura, non la cronologia.

- Molte associazioni ternarie possono essere scomposte in due associazioni binarie

![[ISW3-s068-2.png|400]]

- NO: associazione ternaria `Squadra (1) – Squadra (1) – Partita (1)` con rombo
- SI: due associazioni binarie `Squadra —1— giocaInCasa —15— Partita` e `Squadra —1— giocaFuoriCasa —15— Partita`

---
## Slide 69 – Identificare le associazioni d'analisi

- Evidenziare le associazioni derivate, che cioè possono essere espresse in termini di altre associazioni

![[ISW3-s069-1.png|550]]

`Conferenza —*— organizzataDa —1— GruppoLavoro —*— siOccupaDi —1— Tema`; l'associazione diretta `Conferenza —*— su —*— Tema` è derivata (barrata nella slide).

>> Derivata significa che il suo valore si ricava componendo le altre due: la conferenza è
>> "su" il tema di cui si occupa il gruppo di lavoro che la organizza. Va marcata (in UML
>> con `/`) o eliminata, per non duplicare informazione.

- Quando appropriato, specificare i ruoli

![[ISW3-s069-2.png|550]]

Auto-associazioni su `Prestazione`: `propedeuticaA` con ruoli `daFarePrima` / `daFareDopo`, e `incompatibileCon`.

---
## Slide 70 – Identificare gli attributi

- Le **proprietà** di classi e associazioni sono attributi
- Gli attributi spesso corrispondono a nomi seguiti da possessivi (ad esempio, *il colore della macchina*)
	- Omettere o evidenziare gli attributi derivati

![[ISW3-s070-1.png|550]]

| NO | SI | SI |
| --- | --- | --- |
| `Persona`: dataNascita, età | `Persona`: dataNascita | `Persona`: dataNascita, `/ età` |

>> L'età si calcola dalla data di nascita: tenerla come attributo normale significa avere
>> due dati che possono diventare incoerenti. La barra `/` è la notazione UML per
>> "attributo derivato".

	- Se una proprietà dipende dalla presenza di un'associazione, rappresentarla con un attributo dell'associazione

![[ISW3-s070-2.png|550]]

- `Esperto —3 (revisore)— *— Libro` con classe associativa `Revisione` (attributo `giudizio`)
- `Cliente —0..1— inPrestitoA —*— Libro` con classe associativa `Prestito` (attributo `data`)

---
## Slide 71 – Identificare gli attributi

- Non aggiungere agli attributi gli identificatori degli oggetti, a meno che non risultino esplicitamente dalle specifiche

![[ISW3-s071-1.png|550]]

| NO | SI | SI |
| --- | --- | --- |
| `Prodotto`: idProgressivo, nome | `Prodotto`: nome | `Prodotto`: codProdotto, nome |

>> L'identità dell'oggetto in UML è implicita: un `idProgressivo` inventato è una scelta
>> implementativa (la chiave primaria del DB). Un `codProdotto` invece è accettabile se è
>> un codice che esiste davvero nel dominio ed è richiesto dalle specifiche.

- Quando gli attributi di una classe possono essere raggruppati in due o più insiemi, probabilmente la classe dovrebbe essere suddivisa in due o più classi

![[ISW3-s071-2.png|600]]

`Persona` (nome, cognome, dataNascita, indirizzo, redditoLordo, redditoNetto, aliquotaMax) → preferibile: `PersonaAnagrafica` (nome, cognome, dataNascita, indirizzo) `—1——1—` `PersonaFiscale` (redditoLordo, redditoNetto, aliquotaMax)

---
## Slide 72 – Raffinamenti

- La possibilità di raffinare il modello deriva dalla natura iterativa dell'approccio a oggetti
- I raffinamenti tramite ereditarietà possono avvenire top-down (definizione di specializzazioni di classi esistenti) o bottom-up (generalizzazione di due o più classi con caratteristiche comuni)
	- Valutare l'utilità di aggiungere nuove classi in caso di asimmetrie in associazioni o generalizzazioni

![[ISW3-s072-1.png|600]]

Da `A —0..*— B` con `C` sottoclasse di `A` e `C —m— D`, si passa a una struttura in cui si introduce la classe `E` (sottoclasse di `A`, associata a `B` con molteplicità `1..*`) e `C` resta legata a `D` con `m`.

	- In caso di difficoltà nel generalizzare, forse una classe sta giocando due ruoli differenti: può convenire spezzarla in due classi

![[ISW3-s072-2.png|500]]

Le classi `A` e `B` non generalizzabili diventano `C`, superclasse di `A'`, `A''` e `B`.

>> L'asimmetria è un campanello d'allarme: se un'associazione parte dalla superclasse ma
>> "in realtà" riguarda solo alcune sottoclassi, conviene rendere esplicita con una nuova
>> classe intermedia la parte di gerarchia che quell'associazione riguarda davvero.

---
## Slide 73 – Raffinamenti

- Se esistono più associazioni con lo stesso nome e scopo, conviene generalizzare per creare la superclasse che le unisce

![[ISW3-s073-1.png|600]]

Da `A —n— B`, `A —n— C`, `C —m— D`, `B —m— D` si passa a una gerarchia in cui `B` e `A` generalizzano in `E`, con `E —n— C` ed `E —m— D`.

- Se un ruolo incide sostanzialmente sulla semantica della classe, può convenire trasformarlo in una nuova classe

![[ISW3-s073-2.png|550]]

`A —r— 0..*— B` diventa `A —0..*— R —1— B`, dove `R` è la reificazione del ruolo.

- Una classe senza attributi, né operazioni, né associazioni può essere eliminata
- Se nessuna operazione usa un'associazione, forse quella associazione è inutile

---
## Slide 74 – Identificare le classi di progettazione

- Con le classi di progettazione si specifica esattamente **come le classi assolveranno le loro responsabilità**
- Ciascuna classe deve essere:
	- **completa**, ossia fornire ai suoi clienti tutti i servizi che essi si aspettano
	- **sufficiente**, ossia i suoi metodi devono essere esclusivamente finalizzati allo scopo della classe
	- **essenziale**, ossia non mettere a disposizione più di un modo per effettuare la stessa operazione
	- **massimamente coesa**, ossia modellare un unico concetto astratto
	- **minimamente interdipendente**, ossia essere associata all'insieme minimo di classi che le consente di realizzare le proprie responsabilità

>> Completezza e sufficienza sono duali: la prima chiede "c'è tutto quello che serve?",
>> la seconda "c'è solo quello che serve?". Coesione alta e accoppiamento basso sono le
>> due metriche classiche di qualità del progetto a oggetti.

---
## Slide 75 – Identificare le associazioni di progettazione

- Costrutti come le associazioni bidirezionali o le classi associative non sono direttamente implementabili
- Le associazioni di progettazione si ottengono da quelle di analisi attraverso una trasformazione basata principalmente sul carico di lavoro cui ciascuna associazione è sottoposta
- Le associazioni di progettazione *devono* specificare:
	- il nome
	- il verso di navigabilità
	- la molteplicità a entrambi gli estremi
	- il nome del ruolo destinazione

>> "Carico di lavoro" significa: in quale verso e con quale frequenza il codice percorrerà
>> l'associazione. Si rende navigabile solo il verso effettivamente usato, perché ogni
>> verso navigabile costa un attributo/riferimento da mantenere aggiornato.

---
## Slide 76 – Identificare le associazioni di progettazione

- Associazioni molti-a-uno o molti-a-molti

![[ISW3-s076-1.png|650]]

**monodirezionali** — dall'analisi `Persona —1..*— lavoraPer —1— Azienda` si ottiene, tramite «trace»:
- `Persona —1..*—◇———1— Azienda` con ruolo destinazione `datore` (navigabile verso l'azienda)
- oppure `Persona —1..*—◇———1— Azienda` con ruolo `impiegati` (navigabile verso le persone)
- oppure, esplicitando la struttura dati: `Persona —1..*(impiegati)— Collezione —1——1— Azienda` (rombo pieno lato azienda)

![[ISW3-s076-2.png|400]]

**bidirezionale** — entrambi i versi sono navigabili: ruolo `datore` verso `Azienda` e ruolo `impiegati` verso `Persona`.

>> Il verso di navigabilità si implementa con un riferimento: `datore` diventa un campo in
>> `Persona`, `impiegati` una collezione in `Azienda`. La versione bidirezionale è comoda
>> ma obbliga a tenere sincronizzate le due estremità a ogni modifica.

---
## Slide 77 – Identificare le associazioni di progettazione

- Associazioni uno-a-uno

![[ISW3-s077-1.png|600]]

- `Iscritto —1— ha —1— Tessera` diventa, tramite «trace», `Iscritto —1—◆———1— Tessera` (composizione monodirezionale)
- oppure, se la tessera non ha vita propria, si assorbe come attributo: `Iscritto` con `numeroTessera`

- Associazioni ternarie

![[ISW3-s077-2.png|700]]

L'associazione ternaria `Corso – Aula – Orario` (rombo) si trasforma («trace») nella classe `Lezione`: `Corso —1—◆———1..*— Lezione —*——1— Aula` e `Lezione —*——1— Orario`; nella variante a destra la navigabilità è esplicitata su entrambi i versi tra `Lezione` e `Aula`.

---
## Slide 78 – Identificare le associazioni di progettazione

- Classi associative

![[ISW3-s078-1.png|650]]

La classe associativa `Fornitura` (attributo `quantità`) su `Fornitore —*——*— Parte` si trasforma («trace») in una classe ordinaria interposta: `Fornitore —1——1..*— Fornitura —*——1— Parte` (a destra la versione con navigabilità in entrambi i versi tra `Fornitura` e `Parte`).

>> Nessun linguaggio implementa direttamente una classe associativa: la si "reifica" in una
>> classe normale collegata alle due estremità, esattamente come si fa con la tabella di
>> associazione in un database relazionale.

---
## Slide 79 – 5. Diagrammi degli oggetti

- Un *oggetto* rappresenta una particolare istanza di una classe.
- Un *oggetto composto* è un oggetto di alto livello che contiene altri oggetti.

![[ISW3-s079-1.png|650]]

- `triangolo : Poligono` con `centro = (0,0)`, `vertici = ((0,0),(4,0),(4,3))`, `coloreBordo = nero`, `coloreRiempimento = bianco`; relazione «instance» verso la classe `Poligono` (centro, vertici, coloreBordo, coloreRiempimento)
- Forme abbreviate: `triangolo : Poligono`, `triangolo`, `: Poligono`
- Oggetto composto `awindow : Window` che contiene `horizontalBar:ScrollBar`, `verticalBar:ScrollBar`, `surface:Pane`, `title:TitleBar`, con i collegamenti `moves`

---
## Slide 80 – Diagrammi degli oggetti

- E' un grafo di istanze di elementi, e rappresenta un'istanza di un diagramma delle classi
	- Il suo utilizzo è limitato principalmente a mostrare esempi di strutture dati
	- Poiché un diagramma delle classi può contenere anche istanze, un diagramma degli oggetti può essere considerato come un caso particolare di diagramma delle classi in cui compaiono solo oggetti

![[ISW3-s080-1.png|550]]

`Rotary:Club` è collegato a `Jill : Persona` (età=35) con i ruoli `ufficiale` e `membro`, a `Joe : Persona` (età=28) con il ruolo `membro`, a `Chris : Persona` (età=57) con i ruoli `membro` e `ufficiale`; i ruoli sul lato club sono `tesoriere` e `presidente`.

---
## Slide 81 – 6. Diagrammi dei package

- Un package è un raggruppamento di elementi del modello semanticamente correlati
- Relazioni tra package:
	- Si possono rappresentare relazioni di **contenimento**; si consiglia di mostrare massimo due livelli. I package annidati vedono lo spazio dei nomi dei package che li contengono, il contrario non è vero

![[ISW3-s081-1.png|600]]

- Notazione "ad albero" con il simbolo ⊕: `Specifica dei requisiti` contiene `Modello dei requisiti` e `Modello dei casi d'uso`; `Modello dei requisiti` contiene `Requisiti funzionali` e `Requisiti non funzionali`
- Notazione per annidamento grafico: `Biblioteca` contiene `Utenti`, che contiene `Bibliotecario` e `Tesserato`

---
## Slide 82 – Diagrammi dei package

- Esistono quattro tipi principali di **dipendenza** tra package
	- «use» (default), quando un elemento del package cliente usa in qualche modo un elemento del package fornitore
	- «import», quando gli elementi pubblici dello spazio dei nomi del package fornitore vengono aggiunti come elementi pubblici allo spazio dei nomi del package cliente
	- «access», quando gli elementi privati dello spazio dei nomi del package fornitore vengono aggiunti come elementi privati allo spazio dei nomi del package cliente
	- «trace» rappresenta l'evoluzione di un elemento in un altro elemento più dettagliato

![[ISW3-s082-1.png|650]]

`Modello di analisi` ◄--«trace»-- `Modello di progettazione`  ·  `Nucleo grafico` --«use»--► `Sistema finestre`

>> La freccia tratteggiata della dipendenza punta sempre dal **cliente** al **fornitore**:
>> chi sta alla coda è quello che "soffre" se il fornitore cambia.

---
## Slide 83 – Diagrammi dei package

- Esiste una **generalizzazione** tra due package quando il package specifico si deve conformare all'interfaccia del package generale

![[ISW3-s083-1.png|500]]

Nel package `Editor`: `Nucleo Motif` e `Nucleo Windows` sono specializzazioni di `Nucleo grafico`; `Motif` e `Windows` sono specializzazioni di `Sistema finestre`; `Nucleo grafico` dipende da `Sistema finestre`, `Nucleo Motif` da `Motif`, `Nucleo Windows` da `Windows`.

>> È il meccanismo che permette di scrivere il resto dell'editor contro il solo
>> `Nucleo grafico` e di sostituire a tempo di configurazione l'implementazione Motif o
>> quella Windows: è il polimorfismo applicato alla granularità del package.

---
## Slide 84 – Individuare i package d'analisi

- I package d'analisi sono gruppi di elementi del modello accomunati da forti correlazioni semantiche
- La fonte migliore per individuarli è il **diagramma delle classi**. I migliori candidati per essere raggruppati nello stesso package sono:
	- le classi appartenenti a **gerarchie di composizione**
	- le classi appartenenti a **gerarchie di specializzazione**
- Anche il **diagramma dei casi d'uso** può servire: uno o più casi d'uso che supportano un processo aziendale o un attore potrebbero indicare un package
- Per minimizzare le interdipendenze si possono poi spostare classi tra package, aggiungere package, eliminare package
- Numero ideali di classi per package: tra 4 e 10
- Conviene evitare la dipendenze circolari

>> Le dipendenze circolari tra package rendono impossibile compilarli, testarli e
>> rilasciarli separatamente: due package che si citano a vicenda sono di fatto un
>> package solo.

---
## Slide 85 – 7. Diagrammi di interazione

- Rappresentano la struttura dell'interazione tra oggetti durante uno scenario
- Esistono quattro tipi di diagrammi di interazione, ognuno rivolto a un particolare aspetto:
	- *Diagramma di sequenza*: enfatizza la sequenza temporale degli scambi di messaggi
	- *Diagramma di comunicazione*: enfatizza le relazioni strutturali tra gli oggetti che interagiscono
	- *Diagramma di sintesi dell'interazione*: illustra come un comportamento complesso viene realizzato da un insieme di interazioni più semplici
	- *Diagramma di temporizzazione*: enfatizza gli aspetti real-time di un'interazione

---
## Slide 86 – Terminologia

- Una **interazione** è un'unità di comportamento di un classificatore che ne costituisce il contesto; essa comprende un insieme di messaggi scambiati tra linee di vita all'interno del contesto per ottenere un obiettivo
- Il **contesto** può essere dato dall'intero sistema, da un sottosistema, da un caso d'uso, da un'operazione, da una classe
- Una **linea di vita** rappresenta come un'istanza di un classificatore partecipa all'interazione
- Un **messaggio** rappresenta un tipo specifico di comunicazione istantanea tra due linee di vita in un'interazione, e trasporta informazione nella prospettiva che seguirà una attività

---
## Slide 87 – Linee di vita

- Sintassi:

![[ISW3-s087-1.png|650]]

Sintassi: `nome [selettore] : tipo`, per esempio `contoDiGianni [id="333"] : Conto`; altri esempi: `gianni : Persona`, `:ElaborazioneOrdine`, il componente `ORDINI.EXE`.

- Sono disegnate con lo stesso simbolo del loro classificatore
- Possono avere una "coda" a forma di riga verticale tratteggiata
- Non rappresentano specifiche istanze del classificatore, ma *modi* in cui le istanze partecipano all'interazione

---
## Slide 88 – Messaggi

- **messaggi di chiamata**
- **messaggi di creazione**
- **messaggi di distruzione**
- **invio di segnali**
- Per ogni messaggio di chiamata ricevuto da una linea di vita, deve esistere un'operazione corrispondente nel classificatore di quella linea di vita

![[ISW3-s088-1.png|650]]

- freccia con punta piena, `msg(par)` → **messaggio sincrono** (il mittente aspetta che il destinatario ritorni)
- freccia con punta aperta, `msg(par)` → **messaggio asincrono** (il mittente continua l'esecuzione)
- freccia tratteggiata → **messaggio di ritorno** (il destinatario restituisce il controllo al mittente)
- freccia «create»`msg()` verso il box `:A` → **creazione di un oggetto** (si crea un'istanza del classificatore destinatario)
- freccia «destroy» terminata da una X → **distruzione di un oggetto** (il mittente distrugge il destinatario)

---
## Slide 89 – Diagrammi di sequenza

- Mostrano le interazioni tra linee di vita come una sequenza di messaggi ordinati temporalmente
- Sono la forma più ricca e flessibile di diagramma di interazione
	- Hanno due **dimensioni**: la dimensione verticale rappresenta il tempo mentre quella orizzontale rappresenta le linee di vita
	- Un'**attivazione** mostra il periodo durante il quale una linea di vita esegue un'azione o direttamente o attraverso una procedura subordinata; rappresenta sia la durata dell'azione nel tempo sia la relazione di controllo tra l'attivazione e i suoi chiamanti
	- Si possono specificare **nodi decisionali**, **iterazioni**, **attivazioni annidate**
	- È consigliato descrivere il flusso tramite un'insieme di **note** poste accanto agli elementi

---
## Slide 90 – Richiesta prestito

![[ISW3-s090-1.png|700]]

Diagramma di sequenza annotato. Elementi evidenziati: **tempo** (asse verticale), **note**, **linea di vita**, **messaggio**, **attivazione**, **attivazione annidata**, **messaggio di ritorno**.

Linee di vita: `:Utente`, `:RichiestaPrestito`, `[titolo="UML"]:Libro`, `:Prestito`.

Flusso e note:
- L'utente richiede un libro → `richiedi("UML")`
- Il libro viene cercato → `trova("UML")`
- Si verifica che il libro sia disponibile → `inPrestito()` (attivazione annidata, auto-chiamata)
- Si crea un nuovo prestito → «create» `:Prestito`
- ritorno del controllo con messaggi di ritorno tratteggiati

---
## Slide 91 – Richiesta prestito

![[ISW3-s091-1.png|700]]

Stesso scenario della slide precedente, ma senza le barre di attivazione:

- L'utente richiede un libro → `richiedi("UML")`
- Il libro viene cercato → `trova("UML")`
- Si verifica che il libro sia disponibile → `inPrestito()`
- Si crea un nuovo prestito → «create» `:Prestito`

**molti analisti preferiscono non mostrare le attivazioni...**

---
## Slide 92 – Gestione undo/redo

![[ISW3-s092-1.png|700]]

Linee di vita: `:SchemeDoc`, `:UndoRedoManager`, `UndoList: ObjList`, `RedoList: ObjList`, `next:Scheme`.

Flusso con note:
- *sta per essere eseguita un'operazione su Scheme* → «create» `copy(current)` che crea `old:Scheme`
- *la vecchia versione viene duplicata e aggiunta a UndoList* → `addToHistory(old)` a `:UndoRedoManager`
- `clear()` su `RedoList` — *la RedoList viene resettata* (e `next:Scheme` viene distrutto, X sulla linea di vita)
- `push(old)` su `UndoList`
- *viene richiesto un Undo* → `undo(current)` a `:UndoRedoManager`
- `pop()` su `UndoList`
- `push(current)` su `RedoList`
- `updateView(old)` (auto-chiamata su `:SchemeDoc`)

>> È il pattern Command/Memento: `UndoList` e `RedoList` sono due pile. Ogni nuova
>> operazione impila lo stato precedente su UndoList e svuota RedoList (la storia "in
>> avanti" non è più valida); un undo sposta un elemento da UndoList a RedoList.

---
## Slide 93 – Invarianti di stato e vincoli

- Quando un'istanza riceve un messaggio, il suo stato può cambiare
- Lo **stato** delle istanze può essere mostrato sulla linea di vita
- Un **vincolo** posto sulla linea di vita indica una condizione sulle istanze che deve essere vera da lì in avanti

![[ISW3-s093-1.png|650]]

Linee di vita: `:Cliente`, `:GestoreOrdini`, `:GestoreConsegne`, `:Ordine`.
Messaggi: `avviaOrdine()` → «create» `:Ordine` → invariante `nonpagato`; `riceviPagamento()` (Cliente → GestoreOrdini) e `riceviPagamento()` (GestoreOrdini → Ordine) → invariante `pagato`; `consegna()` (GestoreOrdini → GestoreConsegne) e `consegna()` (GestoreConsegne → Ordine) → invariante `consegnato`.
Annotazioni: **vincolo** `{B–A <= 28 giorni}` tra gli istanti `A` e `B` sulla linea di vita del Cliente; **invariante di stato** sui riquadri posti sulla linea di vita di `:Ordine`.

>> L'invariante di stato (il riquadro sulla linea di vita) è un'asserzione: "da questo punto
>> in poi l'oggetto si trova in questo stato". Il vincolo temporale `{B–A <= 28 giorni}`
>> vincola invece la distanza fra due istanti marcati sulla stessa linea di vita: dal
>> pagamento alla consegna non devono passare più di 28 giorni.

---
## Slide 94 – Frammenti combinati

![[ISW3-s094-1.png|650]]

Linee di vita: `:A`, `:B`, `:C`, `:D`.

- Frammento `opt [condiz]`: contiene `msg ()` da `:A` a `:B`
- Frammento `alt`, diviso in tre partizioni da linee tratteggiate:
	- `[condiz] msg()` da `:A` a `:B`
	- `[condiz] msg()` da `:B` a `:C`
	- `[else] msg()` da `:A` a `:D`

>> `opt` è un blocco eseguito solo se la condizione è vera (equivale a un `alt` con un solo
>> ramo); `alt` è la scelta fra rami mutuamente esclusivi, con il ramo `[else]` eseguito
>> quando nessuna delle altre guardie è vera.

---
## Slide 95 – Frammenti combinati

![[ISW3-s095-1.png|650]]

Linee di vita: `:Order`, `careful : Distributor`, `regular : Distributor`, `:Messenger`.
Struttura: frammento `loop [for each line item]` che contiene un frammento `alt` con guardia `[value > $10000]` → `dispatch` verso `careful : Distributor`, e ramo `[else]` → `dispatch` verso `regular : Distributor`; segue un frammento `opt [needsConfirmation]` con `confirm` verso `:Messenger`.
Etichette di annotazione: `operator` (indica l'operatore del frammento), `guard` (indica la guardia), `frame` (indica il riquadro del frammento).

>> Questo esempio mostra l'annidamento: un `alt` dentro un `loop`. Il `loop` viene ripetuto
>> per ogni riga d'ordine, e ogni volta si sceglie il distributore in base al valore.

---
## Slide 96 – Diagrammi di stato

**8**

- I diagrammi di stato descrivono in modo esaustivo l'evoluzione temporale delle istanze di un classificatore (classe, caso d'uso, sottosistema) in risposta alle interazioni con altri oggetti
- Ogni classe può avere associato un diagramma di stato
	- UML adotta la **notazione di Harel**, che può esprimere sottostati, stati composti, parallelismo, stati storici, gestione eventi, operazioni, creazione e distruzione di oggetti, marcamenti temporali, ecc.

![[ISW3-s096-1.png|600]]

Stati: `In corso`, `Ritirato`, `Fuori corso`, `Laureato`. Transizioni: `iscrizione` (stato iniziale → In corso); `superato esame` (autotransizione su In corso); `superato esame laurea` (In corso → Laureato); `non si iscrive` (In corso → Ritirato); `nr. esami insufficiente` (In corso → Fuori corso); `recupera` (Fuori corso → In corso); `superato esame` (autotransizione su Fuori corso); `superato esame laurea` (Fuori corso → Laureato); `non si iscrive` (Fuori corso → Ritirato).

---
## Slide 97 – Stati ed eventi

- Lo *stato* di un oggetto in un certo istante è un'astrazione dell'insieme dei valori dei suoi attributi e dei suoi collegamenti
	- Le differenti configurazioni di valori e collegamenti vengono raggruppate in stati a seconda di come incidono sul comportamento macroscopico dell'oggetto
- Un *evento* provoca la transizione tra uno stato e l'altro; un oggetto rimane in uno stato per un tempo finito non istantaneo corrispondente all'intervallo tra due eventi
- Uno stato può contenere azioni e attività:
	- Le *azioni* sono operazioni istantanee, atomiche e non interrompibili; sono associate a transizioni attivate da eventi
	- Le *attività* sono operazioni che richiedono un certo tempo per essere completate e possono quindi essere interrotte da un evento

![[ISW3-s097-1.png|380]]

Notazione di uno stato:

```
NomeStato
-----------------------------------------
entry / azione
do / attività
exit / azione
evento(parametri) [condizione] / azione
```

>> `entry` si esegue all'ingresso nello stato, `exit` all'uscita, `do` per tutta la
>> permanenza (ed è interrompibile); l'ultima riga è una transizione interna: l'azione
>> viene eseguita senza uscire e rientrare nello stato (quindi senza `exit`/`entry`).

---
## Slide 98 – Transizioni

- Una *transizione* marca il passaggio di un oggetto da uno stato a un altro, ed è associata a uno o più eventi e, opzionalmente, a condizioni e azioni
- Un *evento* avviene a un preciso istante di tempo, e si assume che abbia durata nulla
	- Gli eventi possono essere raggruppati in classi, eventualmente descritte da attributi
- Una *condizione* è un'espressione booleana che deve risultare vera affinché la transizione possa avvenire
- Un'*azione* è un'operazione istantanea, atomica e non interrompibile che viene eseguita all'atto della transizione

`evento(parametri) [condizione] / azione`

- Una transizione che esce da uno stato e non riporta alcun evento indica che la transizione avviene al termine dell'attività

![[ISW3-s098-1.png|450]]

Stato `InSalita` con `do / sali`, transizione `/ apriPorta` verso lo stato `AlSecondoPiano`.

---
## Slide 99 – La linea telefonica

![[ISW3-s099-1.png|700]]

Stati e transizioni principali:

- Stato iniziale → `Agganciato`
- `Agganciato` --`sgancia`--> `InAttesa` (`do/suonaTonoChiamata`)
- `InAttesa` --`timeOut`--> `TimeOut` (`do/suonaTonoContinuo`)
- `InAttesa` --`cifra(n)`--> `ComposizioneNumero`; `ComposizioneNumero` --`cifra(n)`--> se stesso
- `TimeOut` --`timeOut`--> `MessaggioRegistrato` (`do/riproduciMessaggio`)
- `ComposizioneNumero` --`numeroNonValido`--> `MessaggioRegistrato`
- `ComposizioneNumero` --`numeroValido`--> `InConnessione` (`do/connetti`)
- `InConnessione` --`[numero occupato]`--> `NumeroOccupato` (`do/suonaTonoLento`)
- `InConnessione` --`[linea occupata]`--> `LineaOccupata` (`do/suonaTonoVeloce`)
- `InConnessione` --`[libero]`--> `Suona` (`do/azionaSuoneria`)
- `Suona` --`ilChiamatoRisponde / connetti`--> `Connesso`
- `Connesso` --`ilChiamatoRiaggancia / sconnetti`--> `Disconnesso` (`do/suonaTonoContinuo`)
- Da tutti gli stati, l'evento `riaggancia` riporta ad `Agganciato`; da `Agganciato` si può raggiungere lo stato finale

>> Le numerose transizioni `riaggancia` che tornano ad `Agganciato` sono proprio il caso in
>> cui conviene usare uno stato composito: raggruppando tutti questi stati in un unico
>> stato contenitore basta una sola transizione `riaggancia` uscente dal contenitore
>> (è quello che mostra la slide 102).

---
## Slide 100 – Pseudo-stato di selezione

- Consente di dirigere il flusso nell'automa secondo le condizioni specificate sulle sue transizioni di uscita

![[ISW3-s100-1.png|650]]

Da `InConnessione` (`do/connetti`) si arriva al rombo di selezione, da cui escono `[numero occupato]` → `NumeroOccupato` (`do/suonaTonoLento`) e `[linea occupata]` → `LineaOccupata` (`do/suonaTonoVeloce`).

>> Il rombo (choice) valuta le guardie *dopo* aver eseguito l'attività dello stato
>> precedente: è una decisione dinamica, diversa dalla semplice etichettatura con guardie
>> di più transizioni uscenti, che invece viene valutata al momento dell'evento.

---
## Slide 101 – Tipi di eventi

- *Evento di variazione*: si verifica nel momento in cui una condizione diventa vera
	- è denotato da un'espressione booleana, ad esempio: `bilancio<0`
	- può essere considerato come una condizione verificata continuamente sebbene in realtà verrà controllata solo al variare dei parametri coinvolti
- *Evento di segnale*: si verifica nel momento in cui un oggetto riceve un *oggetto segnale* da un altro oggetto
- *Evento di chiamata*: è l'invocazione di una specifica operazione nell'istanza del classificatore che fa da contesto al diagramma
	- è denotato dalla signature dell'operazione
	- può essere associato a una sequenza di azioni separate da ";"
- *Evento temporale*: si verifica allo scadere di un periodo di tempo
	- **when**(data=01/01/2008): specifica il momento della transizione
	- **after**(10 seconds): specifica che la transizione deve avvenire dopo 10 secondi dall'entrata dell'automa nello stato attuale; è anche possibile specificare il momento in cui inizia a decorrere il periodo aggiungendo una frase del tipo "since…"

---
## Slide 102 – Stati compositi

- Uno stato composito è uno stato che contiene altri stati annidati, organizzati in uno o più automi
- Ogni stato annidato eredita tutte le transizioni dello stato che lo contiene

![[ISW3-s102-1.png|650]]

**stato composito semplice**

Vista compressa: stato `ComposizioneNumero` (con l'icona di stato annidato) con transizione uscente `riaggancia`.
Vista espansa: dentro `ComposizioneNumero`, stato iniziale → `Inizio` (`entry / inizioTono`, `exit / fineTono`) --`cifra(n)`--> `NumeroParziale` (`entry / appendi(n)`), con autotransizione `cifra(n)`, e uscita `numeroValido` verso lo stato finale.

---
## Slide 103 – Stati compositi

- Lo pseudo-stato finale di un automa viene applicato solo a quell'automa

![[ISW3-s103-1.png|600]]

**stato composito ortogonale**

Stato composito `InCorsoDiSuperamento`, che contiene lo stato `Incompleto` suddiviso in tre regioni concorrenti:

- `Lab1` --`labSvolto`--> `Lab2` --`labSvolto`--> finale della regione
- `Progetto` --`fattoProgetto`--> finale della regione
- `ProvaFinale` --`superata`--> finale della regione

Quando tutte le regioni terminano si passa a `Superato`; la transizione `fallita`, uscente da `ProvaFinale`, porta a `Fallito`.

>> Le regioni separate dalle linee tratteggiate sono concorrenti: l'oggetto è
>> contemporaneamente in uno stato per ciascuna regione. Lo stato finale di una regione
>> chiude solo quella regione; si esce dallo stato composito solo quando tutte le regioni
>> hanno raggiunto il proprio stato finale (ricongiunzione implicita).

---
## Slide 104 – Comunicazione tra automi

- Si fanno comunicare in modo asincrono i due automi attraverso la variabile "pagato"

![[ISW3-s104-1.png|600]]

Stato composito ortogonale `ProcessoOrdini` con due regioni:

- `VerificaPagamento` (`do/verificaPagamento`) → `Pagato` (`entry/pagato=TRUE`) → finale
- `PreparazioneOrdine` (`do/preparaOrdine`) --`[pagato]`--> `ConsegnaOrdine` → finale

>> La seconda regione resta bloccata sulla guardia `[pagato]` finché la prima non ha
>> impostato la variabile: è una sincronizzazione realizzata tramite stato condiviso,
>> non tramite un evento esplicito.

---
## Slide 105 – Diagrammi di attività

**9**

- Modellano un processo come un'attività costituita da un insieme di nodi connessi da archi
- In UML 2 hanno una nuova semantica basata sulle reti di Petri, differenziandosi completamente dai diagrammi degli stati
- Un'attività può essere associata a qualunque elemento di modellazione, che ne diviene il contesto:
	- caso d'uso
	- operazione
	- classe
	- interfaccia
	- componente
	- collaborazione
- I diagrammi di attività possono anche essere usati per modellare efficacemente processi di business e workflow

>> La semantica "a reti di Petri" significa che il flusso è modellato con *token* che
>> viaggiano lungo gli archi: un nodo si attiva quando ha token su tutti gli archi in
>> ingresso richiesti. Questo permette di rappresentare naturalmente la concorrenza,
>> a differenza dei diagrammi di stato dove l'oggetto è in un solo stato per regione.

---
## Slide 106 – Preparazione di una bevanda

![[ISW3-s106-1.png|520]]

Attività `Preparazione bevanda`: dal nodo iniziale a `Cerca bevanda`; decisione con guardie `[trovatoCaffe]`, `[nonTrovatoCaffe]`, `[trovataCola]`, `[nonTrovataCola]`.
Ramo caffè: biforcazione verso `Metti caffè nel filtro` → `Metti filtro nella macchina`, `Aggiungi acqua al recipiente`, `Prendi le tazze`; ricongiunzione → `Accendi macchina` → `Miscelazione`; l'evento `LaLuceSiSpegne` porta a `Versa caffè` → `Bevi`.
Ramo cola: `Prendi lattine` → `Bevi`. Da `Bevi` si va al nodo finale.

---
## Slide 107 – Attività

- Sono modellate come reti di **nodi** connessi da **archi**
- Categorie di nodi:
	- **nodi azione**, che rappresentano compiti atomici all'interno dell'attività
	- **nodi controllo**, che controllano il flusso all'interno dell'attività
	- **nodi oggetto**, che rappresentano oggetti usati nell'attività
- Categorie di archi:
	- **flussi di controllo**, che rappresentano il flussi di controllo attraverso l'attività
	- **flussi di oggetti**, che rappresentano il flusso di oggetti attraverso l'attività

---
## Slide 108 – Nodi azione

- **Nodo azione di chiamata**
	- chiama un comportamento
	- chiama un'attività
	- chiama un'operazione

![[ISW3-s108-1.png|220]]

I tre riquadri: `Crea ordine` (chiamata di comportamento), `Crea ordine` con l'icona del "rastrello" (chiamata di attività), `Stampa ordine (Ordine::stampa)` (chiamata di operazione).

- **Nodo azione di accettazione evento temporale**
	- produce un evento temporale ogni volta che la condizione temporale diventa vera
	- diventa attivo solo quando si attiva l'arco

![[ISW3-s108-2.png|420]]

Esempi: `Apri porta` → clessidra `aspetta 10 sec` → `Chiudi porta`; clessidra `fine anno fiscale` → `Invia dichiarazione redditi`.

---
## Slide 109 – Nodi controllo

- **Nodo iniziale**: indica l'inizio del flusso
- **Nodo finale dell'attività**: termina un'attività
- **Nodo finale del flusso**: termina uno specifico flusso
- **Nodo decisione**: divide il flusso in più flussi alternativi
- **Nodo fusione**: ricongiunge i flussi a valle di un nodo decisione
- **Nodo biforcazione**: divide il flusso in più flussi concorrenti
- **Nodo ricongiunzione**: sincronizza flussi concorrenti

![[ISW3-s109-1.png|250]]

Simboli, nell'ordine: cerchio pieno; cerchio pieno dentro un cerchio; cerchio con la X; rombo con guardie `[condizione1]`, `[condizione2]`, `else`; rombo con più archi entranti e uno uscente; barra spessa con un arco entrante e più uscenti; barra spessa con più archi entranti e uno uscente.

>> Decisione e fusione usano lo stesso simbolo (il rombo), biforcazione e ricongiunzione la
>> stessa barra: a distinguerli è solo il numero di archi entranti e uscenti. Il nodo
>> finale dell'attività termina *tutti* i flussi, quello finale del flusso solo il
>> proprio token.

---
## Slide 110 – Nodi oggetto

- I nodi oggetto indicano che sono disponibili istanze di una data classe in un punto specifico dell'attività
- Gli archi in entrata e uscita dai nodi oggetto rappresentano flussi di oggetti creati e consumati da nodi azione
- E' possibile rappresentare esplicitamente lo stato di un oggetto

![[ISW3-s110-1.png|500]]

Attività `Vendita`: nodo iniziale → `Richiedi servizio` → biforcazione verso `Paga` e verso il nodo oggetto `Ordine [effettuato]` → `Ricevi ordine` → `Ordine [inserito]` → `Completa ordine` → `Ordine [completato]` → ricongiunzione con `Paga` → `Spedisci merce` → `Ordine [spedito]` → `Ricevi merce` → nodo finale.

---
## Slide 111 – Corsie

- Le attività possono essere partizionate in *corsie* che raggruppano insiemi di azioni correlate
- Le corsie possono corrispondere a
	- casi d'uso
	- classi
	- componenti
	- unità organizzative
	- ruoli
- La semantica di ogni insieme di corsie è descritta da una *dimensione*

![[ISW3-s111-1.png|500]]

Attività `Vendita` con dimensione `Ruolo` e corsie `Cliente`, `Ufficio vendite`, `Magazzino`. Nella corsia Cliente: nodo iniziale → `Richiedi servizio` → biforcazione → `Paga` e `Ricevi merce`; nella corsia Ufficio vendite: `Ricevi ordine` e `Spedisci merce`; nella corsia Magazzino: `Completa ordine`. Annotazioni: **dimensione** (la riga `Ruolo`) e **corsia** (le colonne).

---
## Slide 112 – Diagramma dei componenti

**10**

- Mostra i componenti e le loro interdipendenze
- Un **componente** è una parte modulare di un sistema che incapsula i suoi contenuti (black box)
- I componenti possono avere attributi e operazioni, e possono partecipare ad associazioni e generalizzazioni

![[ISW3-s112-1.png|650]]

A sinistra, **in UML 1**: `database server` contenente i componenti `<<Table>> Ordini` e `<<Table>> Clienti`, con dipendenza da `Form Inserimento Ordine` e la nota *"Il Form conosce il DataBase Server, e può essere coinvolto da ogni suo cambiamento"*.
A destra, **in UML 2**: il componente `«component» C` con `InterfacciaFornita` (pallino, lollipop) e `InterfacciaRichiesta` (semicerchio, socket).

>> In UML 2 il componente non dipende direttamente da un altro componente, ma dalle
>> *interfacce*: questo è ciò che lo rende sostituibile (black box). L'accoppiamento è
>> verso il contratto, non verso l'implementazione.

---
## Slide 113 – Componenti

- I componenti possono contenere oggetti, ad indicare che essi ne sono parte integrante
- I componenti sono connessi tra loro mediante **dipendenze**, possibilmente tramite **interfacce**, ad indicare che un componente usa i servizi di un altro componente

![[ISW3-s113-1.png|400]]

Componenti `Scheduler`, `Planner`, `GUI` con le interfacce `reservations` e `update`.

![[ISW3-s113-2.png|650]]

Secondo esempio: `Dizionario` fornisce le interfacce `controllo ortografico` e `sinonimi`; `Elaborazioni Periodiche`, `Interfaccia con DBMS`, `Gestione Anagrafica`, `Applicazioni` (contenente `Contabilità` e `Personale`), `Libreria VB` e `GUI`, connessi da dipendenze.

---
## Slide 114 – Esempio

![[ISW3-s114-1.png|700]]

Componenti di UI: `Seminar Management <<UI>>` e `Student Administration <<UI>>`, che dipendono (tramite le interfacce `DataAccess`, `Facilities`, `Student`, `Seminar`, `Schedule`) dai componenti `Facilities`, `Student`, `Seminar`, `Schedule` (`<<component>>`). Questi usano le interfacce `Encryption` e `Access Control` di `Security <<infrastructure>>` e l'interfaccia `Persistence` di `Persistence <<infrastructure>>`, che a sua volta ha una dipendenza `<<requires>>` verso `University DB <<database>>` attraverso `JDBC`.

---
## Slide 115 – Diagramma di deployment

**11**

- Specifica l'hardware su cui verrà eseguito il software e il modo in cui il software è dislocato sull'hardware
- Può avere due forme:
	- **descrittore**, che contiene nodi, relazioni tra nodi e manufatti; modella *tipi* di architetture
	- **istanza**, che contiene istanze di nodi, di relazioni tra nodi e di manufatti; modella un deployment dell'architettura su un particolare sito

![[ISW3-s115-1.png|600]]

Forma **descrittore**: `«device» PCWindows` con `«executionEnvironment» Firefox`, collegato con molteplicità `*`—`*` tramite **associazione di comunicazione** `«http»` a `«device» PCLinux` con `«executionEnvironment» Apache`.
Forma **istanza**: `«device» MioPC:PCWindows` e `«device» TuoPC:PCWindows`, ciascuno con `«executionEnvironment» :Firefox`, collegati via `«http»` a `«device» Server:PCLinux` con `«executionEnvironment» :Apache`.

---
## Slide 116 – Nodi

- Un *nodo* rappresenta un tipo di risorsa computazionale su cui i manufatti possono essere dislocati per l'esecuzione
- Due stereotipi standard:
	- `«device»` rappresenta un tipo di periferica fisica, per esempio un PC
	- `«executionEnvironment»` rappresenta un tipo di ambiente software di esecuzione, per esempio un web server
- I nodi possono essere annidati in nodi
- Un'associazione tra nodi rappresenta un canale di comunicazione tra di essi
- Si possono usare ulteriori stereotipi e icone per aumentare la leggibilità del diagramma

---
## Slide 117 – Manufatti

- Un manufatto rappresenta un'entità concreta del mondo reale, per esempio:
	- **file sorgenti**
	- **file eseguibili**
	- **script**
	- **tabelle di database**
	- **documenti**
	- **modelli UML**
- I manufatti vengono dislocati sui nodi

![[ISW3-s117-1.png|550]]

A sinistra: `«artifact» libreriaSistema.jar` con dipendenza `«deploy»` verso `«device» Server` e dipendenza `«manifest»` verso `«component» Libreria`.
A destra: notazione alternativa, il `«device» Server` che contiene direttamente `«artifact» libreriaSistema.jar`.

>> `«manifest»` dice che il manufatto *realizza* (è la forma concreta di) un componente del
>> modello; `«deploy»` dice su quale nodo quel manufatto viene installato.

---
## Slide 118 – Esempio

![[ISW3-s118-1.png|420]]

- `«device» ClientPC` —`*`……`1`— `«device» Server`
- `«device» AdminPC` —`1`……`1`— `«device» BackUpStation`
- `AdminPC` è una specializzazione (generalizzazione) di `ClientPC`

---
## Slide 119 – Benefici di UML

**12**

- Superamento della "guerra dei metodi"
	- decine di metodi di analisi e disegno proposti e praticati
	- difficoltà per chi vuole passare all'approccio object-oriented: qual è il metodo migliore?
	- quale strumento scegliere, se non c'è chiarezza nel campo dei metodi?
- Risposta ai problemi legati allo sviluppo di sistemi complessi con ambienti visuali
	- ritorno di attenzione sul processo di lavoro e sugli approcci utilizzati, non solo sulle tecnologie
	- il metamodello comune favorisce le possibilità di comunicazione tra strumenti di supporto alla progettazione, e più in generale tra i diversi ambienti utilizzabili dai progettisti nello sviluppo

---
## Slide 120 – Complessità

- Il metamodello di UML è molto complesso, perché ha l'ambizione di poter rappresentare qualunque tipo di sistema software, a livelli di astrazione differenziati
- Il numero dei diagrammi è elevato, e per molti diagrammi è possibile scegliere tra forme di rappresentazione leggermente diverse tra loro
- UML non suggerisce, né tantomeno prescrive una sequenza di utilizzo dei diversi diagrammi, lascia anzi molte strade aperte, tra le quali i progettisti sono liberi di scegliere

---
## Slide 121 – Personalizzazioni

- Le realtà che sviluppano software sono molto eterogenee: chi sviluppa per conto proprio non ha le stesse esigenze di documentazione e comunicazione di chi opera in un gruppo di lavoro all'interno di un'azienda
- Tra aziende diverse possono esserci differenze anche notevoli nel livello di formalizzazione richiesto ai progettisti, nelle tecniche da adottare, negli approcci da seguire, nel tipo di documentazione da produrre
- I progetti non sono tutti uguali: variano per dimensioni, per tipologia, per criticità, e per molti altri fattori
- UML può essere utilizzato da tutti, perché è sufficientemente complesso per potersi adattare a tutte le esigenze….
- …ma non ha senso che tutti utilizzino UML esattamente nello stesso modo: per scegliere il percorso "ottimale", e quali diagrammi utilizzare davvero tra tutti quelli che UML mette a disposizione, è necessario verificare quali siano le esigenze da soddisfare

---
## Slide 122 – Quindi:

- UML è uno **standard**, e questo è un bene (uniformità nei concetti e nelle notazioni utilizzate, interoperabilità tra strumenti di sviluppo, indipendenza dai produttori, dalle tecnologie, dai metodi)
- UML è **articolato**: può rappresentare qualunque sistema software, a diversi livelli di astrazione
- UML è **complesso**: va adattato ("ritagliato") in base alle specifiche esigenze dei progettisti e dei progetti, utilizzando solo ciò che serve nello specifico contesto

---
## Riassunto

>> **Cos'è UML**
>> - Un *linguaggio* (notazione) standard, non un metodo: non prescrive una sequenza di processo. Nato dai *tres amigos* (Booch, Jacobson, Rumbaugh), standard OMG dal 1997, versione 2.5.
>> - Il **modello** contiene l'informazione sul sistema, il **diagramma** ne è una vista: un elemento può comparire in più diagrammi ma ha una sola definizione.
>> - Struttura: entità, relazioni, diagrammi + meccanismi comuni (specifiche, ornamenti, distinzioni, estendibilità) + architettura (le 4+1 viste: casi d'uso, logica, processi, implementazione, deployment). Estendibilità = stereotipi, proprietà, vincoli, profili.
>>
>> **Casi d'uso**
>> - **Attore** = ruolo di un'entità esterna, modellato con una classe non con un oggetto. **Caso d'uso** = funzionalità percepita dall'attore, da lui sempre attivata, completa e con risultato osservabile.
>> - `«include»`: il base non è completo senza l'incluso (freccia base → incluso). `«extend»`: il base è completo anche senza (freccia estensione → base).
>> - **Scenario** = istanza di un caso d'uso (come oggetto sta a classe): si descrive lo scenario base e le varianti numerate 3(a), 4(a)… Template con pre/postcondizioni, attori primari e secondari, sequenze alternative.
>>
>> **Diagrammi delle classi**
>> - Attributo: `visibilità nome : tipo molteplicità = default`; `+` pubblico, `-` privato, `#` protetto, `~` package; sottolineato = ambito di classe. Operazione: `visibilità nome(par): tipo`; la *signature* esclude la visibilità.
>> - Molteplicità: `1`, `0..1`, `x..y`, `1..*`, `*`.
>> - **Aggregazione** rombo vuoto (per riferimento, le parti sopravvivono); **composizione** rombo pieno (per valore, ogni parte appartiene a esattamente un tutto). Generalizzazione = triangolo vuoto; realizzazione/raffinamento = triangolo vuoto tratteggiato; dipendenza = freccia aperta tratteggiata, dal cliente al fornitore.
>> - Classe associativa (attributo della coppia), associazione qualificata (chiave: da `*—*` a `0..1`), associazioni n-arie, elementi derivati con `/`.
>> - Vincoli di generalizzazione su due dimensioni indipendenti: *disjoint/overlapping* e *complete/incomplete*.
>> - **Interfaccia**: classe astratta senza attributi né associazioni, sole operazioni astratte (`«interface»` o lollypop).
>>
>> **Analisi vs. progettazione**
>> - Classi d'analisi: concetti del dominio, 3–5 responsabilità, nessun dettaglio implementativo. Classi di progettazione: complete, sufficienti, essenziali, massimamente coese, minimamente interdipendenti.
>> - Le associazioni di progettazione specificano nome, navigabilità, molteplicità ai due estremi e ruolo destinazione; classi associative e associazioni ternarie si reificano in classi ordinarie.
>>
>> **Diagrammi dinamici**
>> - Sequenza: messaggi sincroni (punta piena), asincroni (punta aperta), di ritorno (tratteggiato), `«create»`/`«destroy»`, attivazioni, frammenti `opt`, `alt`, `loop`.
>> - Stati (Harel): `entry/`, `do/` (interrompibile), `exit/`; transizione `evento(par) [condizione] / azione`; eventi di variazione, segnale, chiamata, temporali (`when`, `after`); stati compositi anche ortogonali (si esce quando tutte le regioni terminano).
>> - Attività: semantica a reti di Petri; nodi azione, controllo (decisione/fusione = rombo, biforcazione/ricongiunzione = barra) e oggetto; corsie.
>>
>> **Componenti e deployment**
>> - Componente = parte modulare black box con interfacce fornite (lollipop) e richieste (socket): la dipendenza è verso il contratto.
>> - Deployment: nodi `«device»` e `«executionEnvironment»`; `«deploy»` dice su quale nodo, `«manifest»` quale componente il manufatto realizza; forma descrittore (tipi) e forma istanza.
