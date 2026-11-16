## Cosa sono i sistemi embedded

**Definizione:** sistemi di calcolo _special-purpose_, cioè progettati per svolgere una funzione o un compito specifico, incorporati (_embedded_) in dispositivi e sistemi fisici/elettronici di dimensioni e scopi diversi.

- Il compito del sistema embedded richiede **interazione con il mondo fisico** tramite **sensori** e **attuatori**.
- Sono tipicamente composti da **hardware + software**, ma a volte la parte software può mancare.
- **Embedded software** => la parte software di un sistema embedded.

### Dove si trovano (pervasività)

|Ambito|Esempi|
|---|---|
|Elettronica di consumo|smartphone, fotocamere, wearable|
|Elettrodomestici|termostati, illuminazione smart, frigoriferi, robot aspirapolvere, allarmi|
|Automazione ufficio|fotocopiatrici, stampanti|
|Business equipment|ATM, registratori di cassa|
|Automotive|sistemi di guida, navigazione|
|Avionica|controllo volo/motore, navigazione, cabina|
|Industria|generazione/distribuzione energia, robotica|
|Sanità|dispositivi diagnostici, monitoraggio pazienti|
|Mobile & wearable|smartwatch, smartglasses, fitness tracker|

> **IoT e Smart Things**: esempi come Nest (termostato smart), Kevo (serratura smart), WeMo (prese/luci smart) rappresentano l'evoluzione degli embedded system verso oggetti connessi.

---

## EMBEDDED SYSTEM EMBEDDING

%%concetto chiave%%
Un sistema embedded si trova "incapsulato" tra:

- il **processo esterno** (external process / physical world),
- l'**interfaccia utente** (human interface),
- **sensori e attuatori** che lo collegano al mondo fisico.

![[Pasted image 20260922135017.png|617]]

---

## Caratteristiche fondamentali

1. **Scopo specifico / funzionalità dedicata**
    
    - Esegue tipicamente una specifica (sola) applicazione.
    - "*Never-ending program*": un processo eseguito ripetutamente.
    - Progettato per robustezza e minimizzazione delle risorse usate.
    - Interfaccia utente ad hoc (specifica per il dispositivo).
2. **Vincoli stretti di risorse ed efficienza**
    
    - Limiti più stringenti su CPU/memoria/potenza rispetto a sistemi desktop/server.
    - Uso di *design (progetto) metrics*: costo (incluso NRE — _non-recurring engineering_ -- sviluppo), dimensione, prestazioni, consumo energetico.
    - Design orientato all'efficienza: energetica, di codice, run-time, di peso, di costo.
3. **Sistemi critici**
    
    - Spesso hanno ruolo critico in base al contesto (healthcare devices, sanità, trasporti, industria).
    - Richiedono: **dependability, reliability, availability** (alta probabilità di funzionamento corretto e continuo) e **safety & security** (mai danneggiare utenti/ambiente, norme di sicurezza e privacy).
4. **Reattività e Real-Time**
    
    - Devono *reagire prontamente a stimoli* dall'ambiente fisico, con calcoli/azioni entro una **deadline**.
    - **Hard real-time**: la violazione della deadline è considerata un **fallimento del sistema**.

---

## Cyber-Physical Systems (CPS)

**Definizione:** sistemi che integrano _computazione_ con _processi fisici_ (a differenza dei semplici sistemi di elaborazione dell'informazione).

I CPS richiedono di superare i confini tra discipline: **Software**, **Controllo/Fisica**, **Sistemi**.
### Aspetti caratterizzanti rispetto a -- information processing systems

- **Forte dipendenza temporale**: il tempo non è solo questione di prestazioni ma di **correttezza**.
- **Concorrenza**: i *processi fisici* avvengono tipicamente in parallelo.
- **Reattività, eventi asincroni**: sistemi reattivi vs. sistemi trasformazionali.

### tre sottosistemi di un CPS

| Parte                                 | Contenuto                                                                   |
| ------------------------------------- | --------------------------------------------------------------------------- |
| **Fisica**                            | dispositivi, sistemi meccanici/biologici, processi chimici, operatori umani |
| **Computazionale/embedded** _(cyber)_ | una o più piattaforme di calcolo, ciascuna con sensori, attuatori, computer |
| **network** _(cyber)_                 | meccanismi per connettere le piattaforme di calcolo                         |
![[Pasted image 20260922141125.png]]

> Esempio pratico: i **droni** — combinano LIDAR, telecamere stereo, GPS, IMU, controllori low-level (Robostix/Atmega128) e computer di bordo (PC/104, Stargate) connessi via UART, I²C, WiFi.
> 
> ![[Pasted image 20260922141346.png|495]]


---

## Industry 4.0

Detta **smart factory**.

![[Pasted image 20260922141751.png|376]]

- La trasformazione digitale delle fabbriche integra: **CPS**, **IoT industriale (IIoT)**, **cloud computing**, **big data**, **collaborative robotics**, **augmented reality**.
    - I CPS monitorano i processi fisici creando una **rappresentazione virtuale** (digital twin-like) che abilita decisioni remote/distribuite.
    - Tramite IoT, i CPS comunicano e cooperano via Internet, anche con operatori umani in tempo reale.
	 ![[Pasted image 20260922141943.png|423]]

---

## "Physical Computing"

Termine che indica sistemi computazionali che interagiscono col mondo fisico, focalizzati sulla costruzione/esplorazione di framework di interazione uomo-macchina.

Componenti tipici: **transducer** ↔ **circuito** ↔ **microcontrollore** ↔ **comunicazione seriale** ↔ **programmazione (host PC)**.

![[Pasted image 20260922142326.png|601]]

### Wearable Computing

- Esempi: smart wrist, smartwatch, smartglasses.
- **Eyewear computing**: basato su smartglasses.
- **Spatial computing**: basato su sistemi di realtà mista/aumentata.
- Tecnologia abilitante per sistemi **hands-free**.

---

## Architettura di un sistema embedded

```
Application Software
Operating System        (questi livelli software possono anche mancare)
Hardware
```

### Architettura hardware (schema generale)

![[Pasted image 20260922142551.png|579]]

---

## Tecnologie di processore (CPU)

Tre categorie principali:

1. **General-purpose processors**
    
    - Architettura predefinita + instruction set (ISA); il comportamento è definito dal software in esecuzione.
2. **Single-purpose processors**
    
    - Circuiti digitali progettati per una funzione/programma specifico.
    - **ASIC** = Application-Specific Integrated Circuit.
    - Implementazioni single-purpose processor:
      
        - **Full-Custom/VLSI**: progettazione completamente custom, ottimizzata a tutti i livelli.
        - **Semi-custom (ASIC)**: si parte da livelli predefiniti su cui si implementa il processore.
        - **PLD** (Programmable Logic Device): livelli già presenti ma configurabili/programmabili (creazione/distruzione di connessioni, gate, ecc.)
            - **PLA** (Programmable Logic Array): array programmabile di porte AND + OR.
            - **PAL** (Programmable Array Logic): un solo tipo di array.
            - **FPGA** (Field Programmable Gate Array): circuiti integrati con funzioni programmabili via software; livello di programmabilità più generale; milioni di gate per singolo dispositivo. Linguaggi: **Verilog, VHDL**; anche linguaggi visuali (es. LabView).
        
	        con array si indica una **griglia regolare a matrice (linee orizzontali e verticali che si incrociano)** di collegamenti e porte logiche.
              
        per livelli si intende proprio il processo fisico di fabbricazione a strati di un circuito integrato in silicio
        
1. **Application-Specific Processors (ASIP)** — caso intermedio
    
    - Processori programmabili ottimizzati per una classe di applicazioni con caratteristiche comuni.
    - Esempi: **microcontrollori (MCU)**, **SoC**, **DSP** (Digital Signal Processors).
    - Anche qui la logica applicativa è definita a livello software.

Trade-off: Performance/Power Efficiency vs. Flessibilità

```
General-purpose processors        ↑ flessibilità, ↓ efficienza/prestazioni
ASIP (Microcontroller, DSP)
Programmable hardware (FPGA)
ASIC                               ↓ flessibilità, ↑ efficienza/prestazioni
```

![[Pasted image 20260922150313.png|606]]

---

## Microcontrollori (MCU)

A differenza dei microprocessori tradizionali, i **microcontrollori integrano su un singolo chip** tutti i componenti necessari per l'autonomia funzionale del task:

- CPU, memoria persistente, memoria volatile, canali I/O (pin), unità di controllo interrupt, altri componenti specializzati.
- Architetture: sia **CISC** (Von Neumann) sia **RISC** (es. TI MSP430).
- Word size: 8, 16, 32 bit.

##### Esempi storici e recenti

| Storici (8 bit)                                          | Più recenti                                                                 |
| -------------------------------------------------------- | --------------------------------------------------------------------------- |
| Motorola 68000, Intel 8080 (1975), Zilog Z80, Intel 8051 | Atmel AVR, TI MSP430, Microchip PIC16C84, ARM (32 bit), Hitachi H8, PowerPC |

Mercato molto frammentato, molti produttori (OEM) e architetture, nessuno dominante.

### Confronto Microcontroller vs Microprocessor (valori indicativi)

|Caratteristica|Microcontroller|Microprocessor|
|---|---|---|
|Max clock speed|200 MHz|4 GHz|
|Max MegaFLOPS|200|5000|
|Potenza (W)|1|50|
|Prezzo minimo (USD)|50|—|
|Unità vendute|11000|1000|

##### Esempi di microcontrollori

- **TI MSP430**: 16 bit, ultra-low-power; LaunchPad da 16–25 MHz, 32KB–512KB Flash, 2–66KB SRAM.
- **PIC16C505** (Microchip): 8 bit CMOS, 5 MIPS, 1,5 KB memoria programmi, fino a 72 byte RAM, clock 4 MHz.
- **ATMega328P**: 8 bit, istruzioni a 16 bit, 2KB SRAM, 32KB Flash, 16 MHz.

---

## Single-board microcontroller

Soluzioni che integrano su una singola board un microcontrollore con tutta la circuiteria necessaria per il controllo → pronte all'uso per sviluppare/eseguire embedded software senza progettare hardware.

- **Consumer/maker**: **Arduino**
- **Industria**: famiglia **XMC**


foto su slide 1.1 da pag 38...
### Famiglia Arduino

|Modello|Specifiche|
|---|---|
|Uno|8 bit, 16 MHz, 2+32KB, 14+6 pin|
|Mega|8 bit, 16 MHz, 8+256KB, 54+16 pin|
|M0|32 bit, 48 MHz, 32+256KB|
|Yun|32 bit, 400 MHz, 64+16MB|
|UNO R4 Minima|Cortex-M4 32-bit, DAC 12-bit, per prototipazione|
|UNO R4 WiFi|ESP32-S3 per WiFi/BLE, matrice LED 12x8|

### Esempio industriale — famiglia Infineon

- **XMC1000**: ARM Cortex-M0, fino a 48 MHz, Flash 8–200 kB.
- **XMC4000**: ARM Cortex-M4F, fino a 144 MHz, Flash 64k–2MB.
- **AURIX (TriCore)** 1ª/2ª gen: fino a multicore, CPU fino a 300 MHz, Flash 0,5–16 MB.

---

## SoC e Single-board CPU

**SoC (System-on-a-Chip)**: chip che integra un sistema completo — CPU, memoria, controller I/O, controller di rete — simile al microcontrollore ma tipicamente più potente (32/64 bit, clock centinaia di MHz–GHz, memoria centinaia di MB).

Esempi:

- **Broadcom BCM2837** (ARMv8 Cortex A53 quad-core, 1.2GHz) → **Raspberry Pi 3**
- **ARM Sitara AM335x** (Cortex-A8) → **BeagleBone, Arduino Tre**
- **TI OMAP3530**

### Famiglia Raspberry Pi

|Modello (anno)|SoC|CPU|RAM|
|---|---|---|---|
|Raspberry Pi (2012)|BCM2835|700 MHz single-core ARM1176JZF-S|256 MB|
|Raspberry Pi 2 (2015)|BCM2836|900 MHz quad-core Cortex-A7|1 GB|
|Raspberry Pi 3 (2016)|BCM2837|1.2 GHz quad-core Cortex-A53 (64-bit)|1 GB|
|Raspberry Pi 4 (2019)|BCM2711|4× Cortex-A72 1.5 GHz|1/2/4 GB|
|Raspberry Pi 5 (2023)|BCM2712|2.4GHz quad-core Cortex-A76, GPU VideoCore VII|4/8 GB|

### SoC per IoT: ESP8266 vs ESP32

|Caratteristica|ESP8266|ESP32|
|---|---|---|
|Processore|L106 32-bit RISC, 80 MHz|Xtensa dual/single-core LX6, 160/240 MHz|
|RAM|64 KiB istruzioni + 96 KiB dati|520 KiB RAM|
|ROM|—|448 KiB|
|GPIO|16 pin (SPI, I²C, I²S, UART, ADC 10-bit)|34 pin (SPI, I²C, I²S, UART, ADC 12-bit)|
|Wi-Fi|IEEE 802.11 b/g/n|IEEE 802.11 b/g/n|
|SDK/firmware|GCC, Arduino, NodeMCU (Lua), MicroPython, ESP-Open-RTOS|stesse opzioni|

### Trend

- L'uso di MCU/SoC (e relative single-board) è sempre più diffuso perché:
    - Facilita famiglie di prodotti con diverse funzionalità/costi (flessibilità, efficienza, scalabilità).
    - Processori con instruction set predefinito → sviluppo più rapido rispetto a logica custom.
- La programmabilità di MCU/SoC porta benefici concreti al processo di design/sviluppo.

---

## 12. Sensori e Attuatori

Un sistema embedded interagisce con l'ambiente tramite:

- **Sensori**: transducer che misurano un fenomeno fisico (temperatura, umidità, accelerazione, distanza) o rilevano una concentrazione chimica (es. fumo).
    - Forniscono una rappresentazione misurabile del fenomeno in una scala/intervallo specifico.
    - **Analogici**: il valore elettrico in output (tensione/corrente) varia con continuità in base al fenomeno misurato → richiede un **ADC** (analog-digital converter) sul microcontrollore.
    - **Digitali**: il valore elettrico è mappato su un insieme discreto di valori (es. HIGH/LOW).
- **Attuatori**: dispositivi che producono un effetto misurabile sull'ambiente.

### Esempi di sensori

![[Pasted image 20260922150513.png]]

---

## Bus e protocolli di comunicazione

L'interazione tra MCU/microprocessore e sensori/attuatori avviene tramite **bus** basati su protocolli specifici, tipicamente **seriali** (parole multi-bit inviate/ricevute come flusso sequenziale di bit).

### UART — Universal Asynchronous Receiver-Transmitter

- Protocollo seriale più antico, supportato da qualunque MCU.
- Converte flussi di bit paralleli in flusso sequenziale asincrono e viceversa.
- Non genera/riceve direttamente i segnali da convertire: questo è delegato a interfacce come RS-232, Bluetooth, USB.
- **USART** = estensione con linea di clock per la sincronizzazione.

### I2C (Inter-Integrated Circuit)

- Bus seriale sincrono molto diffuso.
- Molto semplice: **solo 2 linee** — 1 per il clock, 1 per i dati.

### SPI (Serial Peripheral Interface)

- Altro bus/protocollo sincrono, **più complesso** dell'I2C.

### JTAG

- Protocollo standard per il testing dei dispositivi, utile per il **debug** dell'embedded software.

### CAN-bus (Controller Area Network)

- Protocollo seriale standard usato in **automotive**, introdotto da **Bosch**.
- Progettato per connettere **molteplici unità di controllo**.
- Robusto rispetto a interferenze elettromagnetiche.
- Basato su **message multicast**.
- Un nodo CAN può essere anche un sensore/attuatore + processore host (con CAN Controller + CAN Transceiver).

### Tecnologie di comunicazione wireless

- **Bluetooth** e **BLE** (Bluetooth Low-Energy)
- **ZigBee**
- **Z-Wave**
- **LoRaWAN**
- **WiFi**

---

## Processo di sviluppo di sistemi embedded

### Embedded System Engineering — processo iterativo

```
-- ⇄ Modeling  ⇄  Design  ⇄  Analysis ⇄ --
```

(le tre fasi si alimentano e ricontrollano a vicenda in modo iterativo)

|Fase|Descrizione|Domanda a cui risponde|
|---|---|---|
|**Modeling**|Comprensione approfondita del sistema; produce modelli|_Cosa_ fa il sistema|
|**Design**|Creazione di artefatti che rappresentano il sistema|_Come_ il sistema fa ciò che fa|
|**Analysis**|Comprensione approfondita del comportamento del sistema|_Perché_ il sistema fa (o non fa) ciò che dovrebbe|

### Modeling

- **Modello** = descrizione rigorosa degli aspetti rilevanti di un sistema, utile a specificare/capire proprietà e dinamiche (evoluzione temporale).
- Un CPS/embedded system integra parti fisiche + computazionali + di rete → il modello può includere tutte e tre.
- **Modellazione della dinamica**:
    - **Parte fisica** → dinamiche a tempo continuo (modelli matematici, teoria del controllo — argomento di automazione/controlli).
    - **Parte logica** → dinamiche a tempo discreto (macchine a stati e loro composizione, task & modelli concorrenti — **oggetto di questo corso**).

### Design and Development

Consiste nello scegliere:

- l'architettura HW e la tecnologia appropriate, **+**
- l'architettura SW appropriata.

### Analysis / Verification

- Ogni sistema è progettato per soddisfare requisiti specifici (fondamentale per sistemi safety-critical).
- I requisiti vanno espressi rigorosamente come proprietà/specifiche, in un linguaggio formale.
    
    > _"a design without specification cannot be right or wrong, it can be only surprising!"_ (Young et al., 1985)
    
- Strumenti: linguaggi formali per specificare proprietà (es. **logiche temporali**), tecniche per analizzarle/verificarle sul modello (es. **model-checking**).

### Top-down e bottom-up design

Livelli di progettazione (percorribili in entrambe le direzioni):

```
Requirements → Specification → Architecture → Components → System Integration
```

#### Requirements

- Raccolta requisiti da clienti/esperti di dominio.
- **Funzionali**: funzioni/task che il sistema deve svolgere.
- **Non funzionali**: prestazioni, costo (produzione e NRE), dimensioni fisiche, peso, consumo energetico.
- Uso di **requirement forms**: nome, obiettivo, input, output, funzioni, prestazioni, costo, consumo, dimensioni.

#### Specification

- Descrizione rigorosa dei requisiti — è un **contratto** tra cliente e progettisti.
- Deve essere chiara, dettagliata, non ambigua, per poter verificare requisiti/aspettative.
- Strumenti: linguaggio **UML**, linguaggi formali (es. logiche temporali).

#### Design & Architecture

- Descrive **come** il sistema implementa le funzioni della specifica.
- **Architettura**: piano della struttura complessiva, guida lo sviluppo dei componenti; descrive quali componenti fanno parte del sistema e come interagiscono.
- Rappresentata tramite **Block Diagram** (hardware e software) — es. lavastoviglie o Telehealth Gateway.

![[Pasted image 20260922151252.png|459]]

#### From Component Design to System Integration

- **Component design**: sviluppo dei singoli componenti HW e SW (es. FPGA, board, moduli software).
    - Alcuni componenti possono essere già pronti (_ready-made_): CPU, ricevitori GPS, database, servizi.
- **System integration**: integrazione dei componenti secondo l'architettura definita — è una parte **critica** del design.

### Programming, Development and Debugging

- Sviluppo embedded software: tradizionale o **model-driven**.
- Tipicamente su **host computer**, con toolchain per creare eseguibili da caricare/eseguire sul sistema embedded.
- **Linguaggi/piattaforme ad alto livello**:
    - **C/C++** + librerie di sistema → pervasivi nelle soluzioni basate su microcontrollore.
    - Sistemi embedded con OS → linguaggi/piattaforme con runtime: C/C++, ma anche **JavaScript, Java, C#, Python, Rust**; piattaforme come Embedded Java, Android.
- **Debugging**:
    - Connessione seriale per logging su host PC.
    - Interfaccia/protocollo **JTAG**.
