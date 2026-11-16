**1. Introduzione agli Embedded System e Ingegnerizzazione del Sistema (Teoria - Modulo 1.1)**

- **1.1 Concetti Fondamentali e Caratteristiche degli Embedded System**
    - Definizione di sistemi di elaborazione a scopo specifico (special-purpose) integrati in contesti fisici.
    - Pervasività delle applicazioni (elettronica di consumo, domotica, automazione industriale, automotive).
    - Requisiti e metriche di progetto (_design metrics): vincoli stringenti di risorse, dimensioni, prestazioni, consumi energetici, costi NRE (Non-Recurring Engineering_) ed efficienza complessiva.
    - Sistemi critici (_critical systems_): requisiti di affidabilità (_dependability_), disponibilità e sicurezza.
- **1.2 Architettura Hardware Generale**
    - Schema a blocchi hardware: CPU, memoria ROM/RAM, interfacce d'ingresso/uscita, bus di comunicazione, circuiti applicativi.
    - Tecnologie dei processori:
        - Processori _general-purpose_.
        - Processori _single-purpose_ e logiche programmabili: ASIC, PLA, PAL, FPGA e linguaggi Hardware Description (VHDL/Verilog).
        - Processori per applicazioni specifiche (_ASIP_): Microcontrollori (MCU), System-on-Chip (SoC) e Digital Signal Processors (DSP).
    - Trasduttori del mondo fisico:
        - **Sensori**: trasduttori analogici (con Convertitore Analogico-Digitale ADC) e digitali.
        - **Attuatori**: dispositivi per produrre effetti misurabili sull'ambiente esterno.
- **1.3 Processo di Ingegnerizzazione e Sviluppo**
    - Fasi del ciclo di vita: Modellazione (_modeling_), Progettazione (_design_) e Analisi/Verifica (_analysis_).
    - Modellazione delle dinamiche a tempo discreto: macchine a stati, task e modelli di concorrenza.
    - Toolchain di sviluppo: ambienti di sviluppo su _host_, compilazione incrociata (_avr-gcc_), caricamento del firmware e debugging (via log seriale o JTAG).

---

**2. Elettronica di Base per Microcontrollori (Laboratorio - Lab Notes)**

- **2.1 Grandezze Elettriche e Leggi Fondamentali**
    - Modello atomico elementare, carica elettrica ($Q$) e corrente elettrica ($I$).
    - Tensione/Differenza di potenziale ($V$) e circuito elettrico chiuso16.
    - **Legge di Ohm**: $V = I \cdot R$.
    - Potenza elettrica ed effetto Joule: $P = V \cdot I = I^2 \cdot R = V^2 / R$.
- **2.2 Componenti Elettronici Passivi e Attivi**
    - **Resistori**: fissi e variabili (potenziometri, trimmer, fotoresistenze/LDR), codice a colori a bande per il valore di resistenza e tolleranza17more_horiz.
    - **Condensatori** e **Induttori**: accumulo di carica e campi magnetici.
    - **Diodi e LED**: giunzione a semiconduttore, polarità (anodo/catodo), tensione di soglia (_Forward Voltage_) e consumo di corrente19more_horiz.
    - Calcolo della resistenza di limitazione del LED: $R = (V_{pin} - V_{LED}) / I_{LED}$.
    - **Transistori (BJT)**: terminali (collettore, base, emettitore) e funzionamento come interruttore (_switching_) o amplificatore.
- **2.3 Strumenti di Prototipazione di Laboratorio**
    - Uso della _breadboard_ (strip terminali e linee di alimentazione).
    - Piattaforme di simulazione/disegno schemi (Tinkercad, Fritzing, Eagle) e uso del multimetro/tester.
    - Sicurezza nei circuiti: prevenzione dei cortocircuiti e limiti di assorbimento di corrente dei pin MCU.

---

**3. Architettura dei Microcontrollori e Piattaforma Reference (Teoria - Modulo 1.2)**

- **3.1 Architettura Interna della MCU (Focus: ATmega328P / Arduino Uno)**
    - Integrazione _single-chip_ delle componenti (CPU, memorie, timer, I/O).
    - Modello di esecuzione di Von Neumann: ciclo _fetch-decode-execute_ e set di istruzioni (ISA).
    - Gestione e tipi di memoria:
        - **Flash**: memoria non volatile per il codice di programma.
        - **SRAM**: memoria volatile ad accesso rapido per dati temporanei.
        - **EEPROM**: memoria non volatile per dati persistenti ad accesso lento.
    - Piattaforma Arduino Uno: architettura a 8 bit / 16 MHz, bootloader e framework C/C++ Wiring.
- **3.2 General-Purpose I/O (GPIO) e Segnali Analogici**
    - Programmazione dei pin digitali in modalità INPUT/OUTPUT27.
    - Gestione degli ingressi analogici tramite ADC.
    - Generazione di segnali PWM (_Pulse Width Modulation_) per uscite analogiche equivalenti.
- **3.3 Meccanismo delle Interruzioni (Interrupts)**
    - Definizione di IRQ (_Interrupt Request_) e ISR (_Interrupt Service Routine_).
    - Sospensione del ciclo principale e salvataggio dello stato sullo stack.
    - Abilitazione e disabilitazione delle interruzioni (`interrupts()`, `noInterrupts()`, istruzioni STI/CLI).
    - Sezioni critiche, problematiche di corsa (_race condition_) e uso del qualificatore `volatile` per variabili condivise.
    - Vincoli e regole per le ISR: divieto di interruzioni annidate su AVR e incompatibilità con `delay()` (uso di `delayMicroseconds()`).
- **3.4 Timer e Moduli HW Correlati**
    - Ruolo dei timer: misurazione del tempo, generazione di segnali PWM, timeout e multitasking.
    - Timer hardware del microcontrollore ATmega328P (Timer0 a 8-bit, Timer1 a 16-bit, Timer2 a 8-bit).
    - Configurazione dei registri (TCCRxA, TCCRxB, OCRxA) e modalità CTC (_Clear Timer on Compare_).
    - Implementazione HW della funzione `millis()` tramite Timer030.
    - **Watchdog Timer**: timer di sicurezza per rilevare blocchi del sistema (_deadlock_) e provocare il reset automatico.
- **3.5 Comunicazione Seriale e Gestione dell'Energia**
    - **Seriale Asincrona (UART)**: comunicazione tramite linea seriale, impostazione del baud rate e l'uso del Serial Monitor per debugging e logging.
    - **Seriale Sincrona (I2C e SPI)**:
        - Bus I2C: libreria `Wire`, architettura master/slave a 2 linee (SDA, SCL).
        - Bus SPI: architettura a 4 linee per trasferimenti ad alta velocità.
        - Confronto tra i bus I2C e SPI.
    - **Power Management**: modalità di risparmio energetico (_Light sleep_ / _Idle_ gestito da timer, _Deep sleep_ / _Power-down_ risvegliato da interruzioni).

---

**4. Modelli di Programmazione e Attività Pratiche (Lab Activities 01-03)**

- **4.1 Pattern Software e Architettura a Superloop**
    - Struttura del programma a _superloop_ (`setup()` + `loop()` e architettura interna del `main.cpp` di Arduino).
    - Organizzazione del codice su file sorgente multipli.
    - Disciplina _Sense-Plan-Act_ per l'interazione con l'ambiente.
    - Organizzazione di programmi a stati integrando superloop, interruzioni e temporizzazioni.
- **4.2 Laboratorio Pratico: Input/Output e Animazioni (Lab #01 e #02)**
    - Step 1-3: Lampeggio di LED interno ed esterno, calcolo delle resistenze e logging seriale.
    - Animazione sequenziale su 3 LED (esercizio pratico).
    - Step 4: Gestione del pulsante e LED con I/O digitale (`digitalRead`).
    - Step 5: _Controlled Fading_ e variazione della luminosità tramite PWM e lettura da potenziometro (`analogRead` / `analogWrite`).
- **4.3 Laboratorio Pratico: Interruzioni e Timer (Lab #02 e #03)**
    - Step 6: Conteggio di eventi tramite `attachInterrupt()`.
    - Risoluzione del fenomeno del rimbalzo meccanico (_bouncing_) tramite _debouncing_ software.
    - Utilizzo di librerie per la gestione estesa degli interrupt (es. `EnableInterrupt`).
    - Step 7: _Event-driven blinking_ con timer hardware e uso delle librerie dedicate (`TimerOne`, `TimerTwo`, `MsTimer2`).
- **4.4 Laboratorio Pratico: Periferiche Avanzate e Gestione Memoria (Lab #03)**
    - Step 8-9: Risparmio energetico applicato (_Deep sleep_ con interruzioni ed _Idle sleep_ con timer).
    - Step 10: Eco seriale asincrono per l'invio/ricezione di messaggi.
    - Step 11-12: Rilevamento dei dispositivi I2C (_I2C Scanner_) e gestione di display LCD I2C.
    - Ottimizzazione della RAM: utilizzo della macro `F()` per memorizzare le stringhe costanti nella memoria Flash anziché nella SRAM