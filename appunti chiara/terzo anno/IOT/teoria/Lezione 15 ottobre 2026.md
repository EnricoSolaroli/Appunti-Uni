## Sensori e Attuatori (Sensors and Actuators)

Il principio base di questi sistemi è che possiamo misurare fenomeni fisici (come il suono, il movimento, la temperatura) e trasformare queste misurazioni in **segnali**.

- **Segnale (Signal):** Un segnale non è altro che _informazione codificata_. Rappresenta l'andamento nel tempo di una grandezza fisica.
    

### Proprietà Elettriche (Fili e Resistenza)

Per trasmettere questi segnali usiamo i cavi (wires).

- **Conduttori:** I nostri cavi sono ottimi conduttori e presentano una bassissima resistenza al passaggio della corrente.
    
- **Legge della Resistenza:** Esiste una legge (la Seconda Legge di Ohm / Legge di Pouillet) che collega la resistenza ($R$) alla resistività ($\rho$) del materiale.
    
- **Effetto della Temperatura:** La resistività non è fissa, ma cambia in base alla temperatura del materiale.
    

### Tassonomia dei Segnali (Types of Signals)

Le informazioni associate alle grandezze fisiche vengono chiamate segnali e si dividono in due categorie principali:

1. **Segnali Analogici (Analog signals):** Variano in modo continuo nel tempo e assumono infiniti valori.
    
2. **Segnali Discreti (Discrete signals):** Assumono valori solo in determinati istanti o livelli. Si dividono ulteriormente in:
    
    - _Segnali Logici (Logic signals):_ Assumono solo due stati (es. Acceso/Spento, 1/0).
        
    - _Segnali Codificati (Codified/Digital signals):_ Informazioni rappresentate tramite un codice (es. sequenze di bit).
        

### Tassonomia dei Sensori (Sensor Taxonomy)

I sensori si classificano in base al tipo di segnale che restituiscono:

- **Sensori Analogici:** Forniscono in output un segnale elettrico continuo (es. una tensione che varia in proporzione alla temperatura).
    
- **Sensori Digitali:** Restituiscono un segnale già convertito in formato numerico/digitale.
    

### Elaborazione del Segnale

Per passare dal mondo analogico (continuo) a quello digitale (per essere elaborato da un computer), entrano in gioco due concetti chiave:

- **Campionamento (Signal Sampling):** Indica come vengono acquisite le misure in ingresso. Invece di misurare il segnale costantemente, la misurazione viene effettuata a intervalli di tempo regolari (un "tot" di tempo prestabilito, detto tempo di campionamento).
    
- **Risoluzione (Resolution):** È definita dal numero di _bit_ usati per rappresentare il segnale campionato. Più bit ci sono, più accurata sarà la lettura della misura originale.

## Caratteristiche Statistiche e Tipologie di Sensori

**Caratteristiche statiche (Static characteristics):** Sono i parametri che descrivono il comportamento di un sensore a regime (quando la grandezza misurata è stabile nel tempo). Includono fattori come il _range_ di misura, la sensibilità, l'accuratezza e la precisione.

### Sensori di Movimento e Inerziali

- **Sensore PIR (Passive Infrared):** Rileva la presenza o il movimento misurando la variazione dei raggi infrarossi emessi dai corpi.
    
    - Restituisce un segnale logico (On/Off).
        
    - Ha 3 pin (gambe): due servono per l'alimentazione (VCC per la corrente e GND per la messa a terra) e uno per trasmettere il segnale (OUT).
        
- **MPU-6050:** È un modulo inerziale che contiene un accelerometro (per misurare l'accelerazione su 3 assi) e un giroscopio _(nota: hai appuntato che attualmente non lo avete a disposizione)_.
    

### Sensori Ottici e Acustici

- **Sensori ottici (es. Fotoresistenza / LDR):** Rilevano e misurano il livello di luminosità di un ambiente (per capire se è buio o illuminato).
    
    - Sfruttano la correlazione tra **resistenza elettrica e quantità di luce**: quando la luce colpisce il sensore, la sua resistenza interna cambia (solitamente diminuisce all'aumentare della luce).
        
- **Microfoni (Sound sensors):** Trasducono le variazioni di pressione acustica (il suono) in un segnale elettrico.
    

### Sensori Ambientali e di Posizionamento

- **Sensori di gas/inquinamento (Pollution sensors):** Rilevano la concentrazione di specifici gas (es. CO2, metano, fumi) o inquinanti presenti nell'aria.
    
- **GPS e Tempo Atomico:** I sensori GPS calcolano la posizione geografica. Alcuni moduli (come quelli della _Parallax_) o i segnali GPS stessi vengono utilizzati per ricavare **data e ora di altissima precisione**, basandosi sugli orologi atomici presenti a bordo dei satelliti.

### Tecnologie di Identificazione Wireless (Memorie senza contatti)

- **RFID (Radio-Frequency Identification):**
    
    - **Cos'è:** Può essere visto come una piccola memoria portatile in grado di memorizzare dati che possono essere letti o scritti a distanza.
        
    - **Come funziona (Batteryless):** I tag (o etichette) RFID sono detti _passivi_ perché non hanno una batteria interna. Si accendono e funzionano sfruttando l'energia del campo elettromagnetico generato dal lettore (reader) quando si avvicinano.
        
    - **Esempio pratico:** Il badge dell'università o le tessere apriporta degli hotel.
        
- **NFC (Near Field Communication):**
    
    - È una tecnologia derivata dall'RFID, ma progettata per funzionare a **distanze molto più brevi** (pochi centimetri). È quella che usiamo comunemente per i pagamenti con carta o smartphone (Apple Pay, Google Pay).
        

### Attuatori: Servomotori vs Motori DC

La differenza fondamentale tra questi due riguarda _come_ si muovono e _quanta corrente_ richiedono per funzionare in un circuito base.

- **Servomotori (Servo motors):**
    
    - **Funzionamento:** Non ruotano all'infinito, ma si muovono verso un angolo preciso (solitamente tra 0° e 180°) e mantengono quella posizione. Hanno un circuito di controllo integrato.
        
    - **Alimentazione (Il tuo appunto "we don't need an external battery"):** Questo è vero nei piccoli progetti da laboratorio (es. i micro-servo SG90). Essendo ottimizzati e avendo il controllo integrato, spesso possono essere alimentati direttamente dai pin a 5V della scheda (come Arduino) senza bruciarla. _(Attenzione: i servomotori più grandi richiedono comunque un'alimentazione separata)._
        
- **Motori DC (Direct Current motors):**
    
    - **Funzionamento:** Ruotano in modo continuo finché ricevono corrente. La loro velocità di rotazione dipende dalla tensione (Voltage) applicata, mentre la "forza" (coppia) dipende dalla corrente (Current) assorbita.
        
    - **Alimentazione ("we need battery"):** Richiedono molta potenza e generano "rumore" elettrico. Per questo motivo **non possono mai** essere collegati direttamente ai pin del microcontrollore, altrimenti lo distruggerebbero. Hanno sempre bisogno di un'alimentazione esterna dedicata (batteria) e di un componente intermedio chiamato _Driver_ (o ponte H) per essere controllati in sicurezza.

