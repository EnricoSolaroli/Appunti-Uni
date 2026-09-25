[03-ModelloER](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/secondo anno/base dati/slide/03-ModelloER.pdf>)

Il Modello Entity-Relationship (E/R), proposto da Peter Chen nel 1976, è uno standard de facto per la progettazione concettuale di database relazionali. Permette di schematizzare la realtà di interesse in modo indipendente dal sistema di gestione del database (DBMS), utilizzando una rappresentazione grafica intuitiva. Le note seguenti coprono i concetti fondamentali, i vincoli e i pattern di modellazione ricorrenti, inclusi gli identificatori e le gerarchie.

1. Modelli dei Dati: Logici vs Concettuali:
    - Modelli Logici: utilizzati nei DBMS per l'organizzazione dei dati.
    - Modelli Concettuali: permettono di rappresentare i dati in modo indipendente da ogni sistema particolare, cercando di descrivere i concetti del mondo reale. Vengono utilizzati nelle fasi preliminari di progettazione. Il modello E/R è il più noto fra i modelli concettuali nel ambito DB.

2. Costrutti del Modello E/R:
	concetti fondamentali:
     - **Entità**: rappresenta una classe di oggetti che possiedono caratteristiche comuni e che hanno esistenza autonoma (concetti molto rilevanti all'interno del dominio applicativo che a priori del modello hanno una rilevanza), graficamente è rappresentata da un rettangolo. 
       Un'istanza di un'entità è uno specifico oggetto appartenente all'insieme che quella
       entità rappresenta
     - **Associazione**: rappresenta un legame logico tra entità, graficamente è rappresentata con un rombo. Ogni legame rappresenta una coppia di istanze e la stessa coppia non può essere ripetuta + volte. Il nome di un'associazione deve essere univoco all'interno dello schema ed è preferibile usare un sostantivo al singolare.
       Per definizione l'insieme delle istanze di un'associazione è un sottoinsieme del prodotto cartesiano, quindi non possono esservi istanze ripetute di un'associazione.
       Un'associazione n-aria coinvolge n entità:
       ![[Pasted image 20260703095819.png|454]]  
      Esistono diversi tipi di associazione:
            - **Associazioni ad anello**: legano un'entità con se stessa. possono essere: Simmetriche, Riflessive e Transitive. In quelle non simmetriche è necessario specificare per ogni ramo dell'associazione il suo relativo ruolo.
             è possibile avere anelli anche in relazioni n-arie generiche:![[Pasted image 20260703100647.png]]
            - Associazioni XOR/AND:
     - **Attributo**: proprietà elementare di un'entità o di un'associazione, denotato con un nome deve essere univoco all'interno dell'entità o della associazione alla quale si riferisce. Ogni attributo è definito su un dominio di valori e associa a ogni istanza dell'entità che rappresenta un valore del suo corrispondente dominio (non è indicato nello schema E/R)
        - attributi composti: si ottengono aggregando altri sotto-attributi, i quali presentno una forte affinità nel loro uso e significato (es: indirizzo: N ind, nome ind, numcivico, città, cap)
    
    costrutti secondari: 
      - Vincolo di cardinalità
      - Identificatore
      - Gerarchia di generalizzazione
  
3. Vincoli nel  modello E/R:
     - vincoli impliciti:
	     - ogni istanza di un'associazione deve riferirsi a istanze di entità;
	     - istanze diverse della stessa associazione devono riferirsi a differenti combinazioni di istanze delle entità partecipanti all'associazione.
	 - vincoli espliciti: definiti da chi progetto lo schema E/R
		- vincoli di cardinalità:
			- per un attributo è possibile specificare il numero minimo e il numero massimo (il valore di default è 1-1), gli attributi in questo senso si distinguono in: opzionali (cardinalità minima è 0), monovalore (cardinalità massima è 0) e multivalore (cardinalità massima è N);
			![[Pasted image 20260703103400.png|420]]
			- nel caso specifico in cui ho più attributi multivalore che sono semanticamente correlati, è necessaria la creazione di un attributo composto multivalore.
			![[Pasted image 20260703103749.png]]
			- nel caso delle associazioni sono coppie di valori (min-card, max-card)
				- associazioni binarie uno a uno:![[Pasted image 20260703104108.png]]
				- associazioni binarie uno a molti: ![[Pasted image 20260703104200.png]]
				- associazioni binarie molti a molti: ![[Pasted image 20260703104224.png]]
		- vincoli di d'identificazione
		
4. Identificatori
	- ha lo scopo di permettere l'individuazione univoca delle istanze di un'entità, vale la proprietà di minimalità: nessun sottoinsieme proprio dell'identificatore deve essere a suo volta un identificatore.
		- identificatore interno: si usano uno o più attributo dell'entità in questione;
		- identificatore esterno: si usano altre entità, che sono collegate tramite associazioni, più eventuali attributi propri dell'entità (in questo caso viene indicato come misto).
		- vi è anche distinzione negli identificatori semplici (1 solo attributo o entità)/composti.
		- es: ![[Pasted image 20260703110501.png]]
		- ogni entità deve avere ALMENO un identificatore, ma ne può avere anche più di uno (quello in più può anche essere marcato come opzionale). ![[Pasted image 20260703110924.png|576]]

5. Entità Deboli: 
	- entità che contengono istanze la cui presenza è accettata solo se sono presenti determinata istanze di altre entità da cui queste dipendono.
	- identificatore dell'entità debole deve contenere l'identificatore dell'entità da cui dipende. ![[Pasted image 20260703111534.png]]

6. Generalizzazione:
	- entità/sotto-entità
	- proprietà di coperatura: totale/parziale, esclusiva/sovrapposta.![[Pasted image 20260703115544.png]]
	- un entità può essere madre di diverse entità in diverse generalizzazioni, al contrario una sotto-classe può avere solo una superclasse (eriditarietà singola).
	- subset: caso particolare di gerarchia in cui si evidenzia una sola classe specializzata.
	- non sono state pensate per modellare aspetti dinamici della realtà di interesse.
	- errori classici: interpretare come tipologie quelle che in realtà sarebbero solo istanze di un entità oppure modellare attraverso le gerarchie i ruoli che un'entità assume in diversi periodi temporali o in relazioni ad altre entità.

7. Relazioni Ternarie:
	- quando in un'associazione ternaria esistono dipendenze funzionali tra le entità in gioco è preferibile sostituire la ternaria con associazioni binarie.![[Pasted image 20260703120905.png|326]]![[Pasted image 20260703120930.png|204]]
		ulteriore semplificazione tenendo conto che GIORNO ha un solo attributo:![[Pasted image 20260703121101.png|212]]
	- se una o più entità partecipano con cardinalità massima 1 a un'associazione ternaria siamo in presenza di una 'falsa ternaria' che può essere modellata in modo equivalente attraverso associazioni binarie (non sempre solo 2).
	- ci sono tanti es da analizzare meglio, slide 92/96
	- se uno schema è effettivamente rappresentabile con una relazione ternaria non è possibile scomporre la relazione e ottenere schemi equivalenti, es: birreria slide 102-103

8. note sull'effetto del tempo:
	- ![[Pasted image 20260703121630.png]]
	- esempio ritardo treni: ![[Pasted image 20260703121718.png]]![[Pasted image 20260703121750.png]]
	- es dei libri slide 100/101

9. Soluzioni a problemi comuni:
	- si ritrovono dei "pattern" comuni, ovvero soluzioni a problemi che si presentano di frequente. e per questi pattern non esiste una codifica standard.
	- ![[Pasted image 20260703122253.png]]