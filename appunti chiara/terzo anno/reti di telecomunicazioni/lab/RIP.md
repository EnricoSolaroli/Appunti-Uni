<div style="text-align: right;">
12/10/26
</div>
[pdf](file:///C:/Users/chiar/OneDrive/Desktop/UNIBO/terzo%20anno/Tecnologie%20Web/lab/RIP.pdf)
### Protocollo di Routing RIP (Routing Information Protocol)
- Il RIP è un protocollo di routing dinamico basato su un algoritmo di distanza-vettore.
- È considerato uno dei protocolli più semplici e viene utilizzato prevalentemente in reti di piccole o medie dimensioni per distribuire le tabelle di routing.

**Come funziona l'algoritmo (Distanza-Vettore)**
- Ogni router mantiene una propria tabella di routing che contiene le reti conosciute e il numero di salti (distanze) necessari per raggiungerle.    
- Periodicamente (ogni 30 secondi), il router invia messaggi di aggiornamento contenenti l'intera tabella di routing ai propri vicini direttamente connessi.
- Quando un router riceve la tabella da un vicino, aggiorna la propria aggiungendo 1 alla distanza per tenere conto del salto aggiuntivo.
- Per ogni rete di destinazione, il router seleziona sempre il percorso che presenta il minor numero di salti.

**Metrica e Scalabilità**
- La metrica utilizzata dal RIP per determinare il percorso migliore è l'hop-count (il numero di salti, ovvero i router intermedi tra sorgente e destinazione).
- La metrica massima supportata dal protocollo è di 15 hop.
- Se una rete si trova a più di 15 hop (metrica 16), viene considerata irraggiungibile
- A causa di questo limite, l'algoritmo funziona bene su reti di piccole dimensioni ma non è scalabile per reti grandi, per le quali si preferiscono protocolli come OSPF o EIGRP.

**Convergenza e Problemi Noti**
- La convergenza è il tempo necessario affinché tutte le tabelle di routing si aggiornino correttamente e raggiungano una configurazione stabile dopo che la rete ha subito una modifica. Nel RIP, questo processo può essere lento e richiedere tempo.

- Un problema tipico di questo algoritmo è il cosiddetto _count-to-infinity_ (conteggio verso l'infinito), che genera loop di pacchetti che continuano a rimbalzare tra i router incrementando la distanza fino a 16.

**Il problema: Count-to-Infinity (Conteggio verso l'infinito)** Il _count-to-infinity_ è un grave problema di routing che si verifica quando i router continuano ad aggiornare ciclicamente la distanza di una rete irraggiungibile, incrementandola fino all'infinito (che per il RIP è 16), creando così un loop. 

Si prende in esempio questa topologia: `[Rete X] --- [R1] --- [R2]`.

- R1 ha la rete X direttamente collegata (distanza 0).
    
- R2 impara da R1 che la rete X si trova a 1 salto di distanza.
    
- Se la rete X si guasta (o cade il collegamento), R1 se ne accorge e imposta la distanza per X a 16 (irraggiungibile).
    
- Tuttavia, se prima che R1 faccia in tempo a comunicare il guasto, riceve un aggiornamento da R2 che dice "Posso raggiungere X in 1 salto", R1 pensa erroneamente: "Ottimo, R2 ha una via alternativa per arrivare a X!".
    
- R1 aggiorna la sua tabella impostando la distanza a 2 salti (passando da R2).
    
- Al ciclo successivo, R1 comunicherà a R2 che X è a 2 salti. R2 aggiornerà la sua tabella a 3 salti (passando da R1).
    
- Questo rimpallo continua (4, 5, 6...) fino ad arrivare a 16, facendo girare a vuoto i pacchetti tra R1 e R2 in un loop continuo.

**Le Soluzioni al Count-to-Infinity**

Per prevenire questo fenomeno, il protocollo RIP implementa due meccanismi combinati:

**1. Split Horizon (Orizzonte diviso)**

- **Come funziona:** La regola impone che se un router impara una rotta da una certa interfaccia, non deve riannunciare quella stessa rotta indietro su quella medesima interfaccia.
    
- **Esempio:** Poiché R2 ha imparato la rotta verso X tramite l'interfaccia collegata a R1, con lo Split Horizon attivato R2 semplicemente nasconderà (non annuncerà) la rotta per X nei suoi aggiornamenti diretti a R1. In questo modo, R1 non potrà mai cadere nell'equivoco che R2 offra una via alternativa.
    
- **Limite:** Lo Split Horizon è perfetto per risolvere i loop tra 2 router, ma non basta per topologie più complesse (ad esempio, reti ad anello con 3 o più router). Per questo gli viene affiancato il Poison Reverse.


**2. Poison Reverse (Inversione avvelenata)**

- **Come funziona:** Ha lo stesso scopo dello Split Horizon, ma si comporta in modo opposto: invece di non annunciare la rotta, la annuncia esplicitamente al vicino da cui l'ha appresa, ma "avvelenandola", ovvero forzando la metrica a 16 (infinito/irraggiungibile).
    
- **Esempio:** R2 ha imparato la rotta per X da R1 (distanza 1). R2 annuncerà a R1: "Conosco la rete X, ma attraverso di me dista 16 salti".
    
- **Vantaggio:** Ricevendo questa metrica, R1 capisce in modo esplicito e inequivocabile che R2 non rappresenta una strada valida per X, mantenendo la sua rotta diretta o cercando vere alternative.

**Le Versioni di RIP**

- **RIP v1:** Supporta esclusivamente il routing _classful_. Questo significa che non invia le informazioni sulle subnet mask, non supporta il CIDR e tutte le reti devono avere la stessa subnet mask (non supporta il VLSM).

- **RIP v2:** Miglioramento della prima versione. Supporta il routing _classless_ e trasmette le informazioni sulle subnet mask, integrando quindi il supporto al VLSM.

- **RIPng (next generation):** È la versione del protocollo progettata appositamente per le reti IPv6.

**Vantaggi e Svantaggi (Riassunto)**

- **Vantaggi:** È un protocollo molto semplice, facile da configurare e da capire, e gode di un ampio supporto su moltissimi dispositivi di rete.

- **Svantaggi:** Scarsa scalabilità dovuta al limite di 15 hop, lenta convergenza nelle reti complesse e, nel caso della v1, assenza del supporto per le reti senza classi (classless).

### Configurazione gns3
Per accedere alla modalità di configurazione del protocollo RIP, si utilizza il comando `router rip`. Al suo interno, è necessario dichiarare le reti direttamente connesse tramite il comando `network` seguito dall'indirizzo della rete. Dopo aver inserito tutte le reti, si esegue il comando `no auto-summary` per disabilitare l'aggregazione automatica delle rotte. Infine, per salvare la configurazione, si utilizza il comando `write memory` (spesso abbreviato in `wr mem`). Con questi passaggi il protocollo RIP è configurato sul dispositivo; il procedimento deve poi essere ripetuto per ogni router presente nell'infrastruttura di rete.

**Versione schematica** 
Per configurare il protocollo RIP su un router, la procedura è la seguente:

1. **`router rip`**: per entrare nella modalità di configurazione del protocollo.
    
2. **`network [indirizzo_rete]`**: per dichiarare ogni singola rete direttamente connessa.
    
3. **`no auto-summary`**: per disabilitare la sumarizzazione automatica al termine dell'inserimento delle reti.
    
4. **`write memory`** (o **`wr mem`**): per salvare la configurazione in memoria.
    
>Questa configurazione va ripetuta per ogni singolo router appartenente alla rete.

Successivamente, si imposta la versione del protocollo tramite il comando `version 2`. In precedenza questo comando non era stato inserito perché la caratteristica principale della versione 2 è il supporto al subnetting (indirizzamento _classless_). Di conseguenza, non avendo reti suddivise in sottoreti nel caso precedente, l'utilizzo della versione 1 era più che sufficiente.

**Nel caso in cui i router utilizzino versioni differenti del protocollo RIP, le tabelle di routing non vengono generate allo stesso modo.** Questo accade perché RIPv1 è un protocollo _classful_ (non invia le informazioni sulla subnet mask negli aggiornamenti), mentre RIPv2 è _classless_ (include le subnet mask negli aggiornamenti), influenzando direttamente il livello di dettaglio e il modo in cui le rotte vengono memorizzate.