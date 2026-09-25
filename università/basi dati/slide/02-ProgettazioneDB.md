[02-ProgettazioneDB](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/secondo anno/base dati/slide/02-ProgettazioneDB.pdf>)

Le note coprono i principali concetti di modellazione in ingegneria del software, concentrandosi sulla modellazione dei dati tramite il formalismo Entity-Relationship (E/R), e illustrano i meccanismi di astrazione e le associazioni con vincoli di cardinalità.

**Panoramica sui Formalismi di Modellazione:**
La progettazione di sistemi complessi spesso richiede l'uso di molteplici strumenti di modellazione per catturare diversi aspetti: oggetti, funzioni, associazioni e stati.

- Modeling Language (UML): in UML la modellazione concettuale dei dati sfrutta i diagrammi delle classi nati per rappresentare sia le proprietà strutturali degli oggetti sia i metodi che si possono invocare. Alcuni costrutti del modello E/R non sono contemplati negli schemi UML, ha infatti dei formalismi dedicati all'entità nel contesto specifico.

- Analisi Orientata agli Oggetti (descritti da proprietà): Enfasi sull'identificazione e classificazione degli oggetti e sulle loro interrelazioni, Le proprietà strutturali degli oggetti rimangono stabili nel tempo

- Modello Entity-Relationship (E/R):
![[Pasted image 20260702182425.png|599]]
figura: Rappresenta le entità fondamentali e le associazioni che le legano senza modellare aspetti funzionali o dinamici.

- Analisi Orientata alle Funzioni

- Analisi Orientata agli Stati

- Meccanismi di Astrazione: Strumenti per organizzare e strutturare le informazioni sul dominio applicativo. I principale strumenti di astrazione sono:
    - **classificazione** -> raggruppa gli oggetti in classi in base alle loro proprietà
    - **generalizzazione** -> meccanismo che cattura le relazioni di tipo "è un", permette di astrarre le caratteristiche comuni fra le classi in superclassi, Le sottoclassi ereditano attributi dalla superclasse e possono avere attributi aggiuntivi; 2 proprietà: totale/parziale e esclusiva/sovrapposta.
    - **aggregazione** -> descrive il concetto di composizione o relazioni "parti di"
    - **proiezione** -> cattura il punto di vista degli utenti diversi del nostro dominio

- Associazioni: descrivono un legame tra oggetti, entità o classi, modellando le interrelazioni tra concetti, sono presenti dei vincoli di cardinalità che definiscono la molteplicità con la quale ogni classe può partecipare a un'associazione.

    - min-card(C, A): Cardinalità minima della classe C nell'associazione A. Il numero minimo di corrispondenze a cui ogni istanza di C deve partecipare; con 'min-card = 0' la partecipazione è opzionale, con 'min-card > 0' la partecipazione è obbligatoria

    - max-card(C, A): Cardinalità massima della classe C nell'associazione A. Il numero massimo di corrispondenze a cui ogni istanza di C può partecipare. Generalmente si usa 1 o N (oppure un numero fisso).

es: associazione binaria uno a uno
![[Pasted image 20260703093127.png]]

es: associazione binaria uno a molti
![[Pasted image 20260703093226.png]]

es: associazione binaria molti a molti
![[Pasted image 20260703093311.png]]
