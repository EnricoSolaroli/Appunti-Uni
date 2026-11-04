Esecuzione passo dopo passo dell'algoritmo di Dijkstra (utilizzato nei protocolli di routing come OSPF) per determinare il percorso di lunghezza minima da un nodo sorgente, il nodo **a**, verso tutti gli altri nodi della rete.

**Struttura della Tabella**

- **Colonne (A-H):** Rappresentano i nodi di destinazione della rete.
    
- **Celle:** Contengono l'informazione nel formato "Predecessore Distanza" (es. **A 2** significa che il nodo si raggiunge provenendo da A con una distanza cumulativa pari a 2).
    
- **Righe grigio chiare:** Mostrano le distanze provvisorie calcolate a quel passo esplorando i nodi adiacenti.
    
- **Righe grigio scure:** Indicano il nodo che viene "confermato" (quello con la distanza minima assoluta tra i provvisori). Questo nodo diventa il nuovo punto di partenza per il passo successivo e la sua distanza non potrà più essere migliorata.
    

**Spiegazione dei Passaggi**

1. **Passo 1 (Analisi di a):** Dal nodo di partenza **a**, i collegamenti diretti sono verso **b** (costo 2), **e** (costo 3) e **d** (costo 6). Vengono scritti nella riga chiara come A 2, A 3, A 6. Il nodo con il costo minimo è **b** (A 2). Viene quindi riportato nella riga scura e confermato.
    
2. **Passo 2 (Espansione da b):** Partendo dal costo accumulato di b (che è 2), si valutano i suoi vicini. Si può arrivare a **c** con costo 2 (totale 2+2=4, quindi **B 4**) e a **e** con costo 1 (totale 2+1=3, quindi **B 3**). Tra tutti i nodi non ancora confermati in tabella, il minimo assoluto è **e** con costo 3. Il nodo **e** viene confermato nella riga scura successiva.
    
3. **Passo 3 (Espansione da e):** Dal nodo **e** (costo accumulato 3) si valutano i vicini.
    
    - Per **d**, il costo diventa 3+2=5. Poiché 5 è minore del precedente 6 (A 6), il percorso viene aggiornato a **E 5**.
        
    - Per **f**, il costo è 3+3=6 (**E 6**).
        
    - Per **h**, il costo è 3+4=7 (**E 7**).
        
    - Il minimo tra i percorsi non confermati ora è **c** (B 4). Viene quindi confermato.
        
4. **Passi Successivi:** Si prosegue con questa logica. Al passo successivo, espandendo da **c** (costo 4), si raggiunge **h** con un costo di 1 (totale 4+1=5). Questo aggiorna il percorso provvisorio per **h** da E 7 a un più efficiente **C 5**. L'algoritmo continua finché tutte le colonne non presentano un valore confermato nelle righe scure.
    

**Risultato Finale e Logica di Inoltro (Riga Gialla e Arancio)**

- **Riga Gialla (Soluzione dell'algoritmo):** Rappresenta la tabella di routing finale del nodo A. Per ogni destinazione indica la distanza totale minima e l'ultimo nodo attraversato (il predecessore). Ad esempio, per raggiungere **g** al minor costo (7), l'ultimo nodo prima di arrivare è **h** (**H 7**).
    
- **Riga Arancio (Gateway / Next Hop):** Indica a quale nodo adiacente ad A bisogna fisicamente inoltrare il pacchetto dati affinché segua il percorso ottimale verso la destinazione finale. Le frecce rosse nell'ultima immagine spiegano come si ricava questo dato: si parte dalla destinazione nella riga gialla e si risale "all'indietro" attraverso i predecessori finché non si arriva a un nodo direttamente collegato ad A (che sarà **b** oppure **e**). Nel caso della destinazione G, il percorso a ritroso è G → H → C → B → A. Il nodo a cui A deve inviare i dati (il gateway) è quindi **B**.