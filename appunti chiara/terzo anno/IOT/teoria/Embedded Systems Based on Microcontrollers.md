<div style="text-align: right;">
17/09/26 - 24/09/26 - 01/10/2026
</div>
# Componenti Principali di un Microcontroller

Un microcontroller (MCU) è un sistema completo su un singolo chip che contiene:

- **CPU**: il processore centrale che esegue istruzioni
- **Memoria**: Flash (programmi), SRAM (dati), EEPROM (dati persistenti)
- **GPIO**: porte per input/output generale
- **Convertitori Analogico-Digitali (ADC)**: per leggere segnali analogici
- **Timer**: contatori programmabili per temporizzazione
- **Interfacce di comunicazione**: UART, I2C, SPI
- **Circuito di clock**: oscilla per sincronizzare le operazioni
- **Circuito di alimentazione**: gestisce la potenza

A differenza di un microprocessore tradizionale, un MCU integra tutti questi componenti in un unico chip.

---
## CPU e Architetture

### Modello Von Neumann
Il comportamento della CPU segue il modello Von Neumann, basato su tre operazioni fondamentali:

1. **Fetch**: prelevare l'istruzione successiva dalla memoria e metterla nel registro delle istruzioni
2. **Decode**: decodificare l'istruzione, che può comportare il prelievo di operandi dalla memoria
3. **Execute**: eseguire l'istruzione, che può comportare aggiornamenti ai registri e scritture in memoria

### Architettura Harvard
Diversa da Von Neumann, l'architettura Harvard separa **fisicamente** le memorie di istruzioni e dati:

**Vantaggi:**
- Istruzioni e dati in bus separati → velocità maggiore
- Proprietà diverse: codice in Flash (lettura veloce, scrittura lenta), dati in SRAM (accesso veloce)

**Usata in:** microcontroller (es. ATmel AVR) e DSP

**Caratteristiche:**
- Memoria istruzioni: tipicamente non volatile (Flash)
- Memoria dati: volatile (SRAM) per velocità e non volatile (EEPROM) per persistenza
### AVR8 - ATMega328P
L'ATMega328P è basato sull'architettura AVR8 (RISC):

**Caratteristiche:**
- Frequenza: 16 MHz
- Word size: 8 bit
- 32 registri general-purpose (R0-R31): tutti gli operandi aritmetici usano questi
- Solo le istruzioni load/store accedono alla RAM
- Registri speciali:
  - **PC** (Program Counter): indirizzo della prossima istruzione (16-22 bit)
  - **SP** (Stack Pointer): puntatore dello stack (8-16 bit)
  - **SREG** (Status Register): flag dello stato CPU (8 bit)

**Flag importanti in SREG:**
- **C** (Carry flag): usato nelle operazioni di sottrazione
- **Z** (Zero flag): settato quando il risultato aritmetico è zero
- **I** (Interrupt flag): abilita/disabilita gli interrupt

---
## Memoria

### Flash Memory
- **Tipo:** Non volatile (retiene dati senza alimentazione)
- **Velocità:** Lettura veloce, scrittura lenta
- **Cicli di scrittura:** max ~100.000
- **Consumo:** Basso
- **Uso:** Memorizzazione del codice programma
- **Capacità ATMega328P:** 32 KB (0.5 KB usati dal bootloader)

### SRAM (Static RAM)
- **Tipo:** Volatile (perde dati senza alimentazione)
- **Velocità:** Lettura e scrittura veloce (~2 cicli di clock su ATMega328P)
- **Consumo:** Più alto di Flash
- **Uso:** Variabili, stack, dati temporanei durante l'esecuzione
- **Capacità ATMega328P:** 2 KB

**Critica:** La SRAM è molto piccola. Bisogna:
- Minimizzare l'uso di stringhe
- Stare attenti alla profondità di nesting delle funzioni (lo stack è in SRAM)
- Evitare la ricorsione profonda

### EEPROM
- **Tipo:** Non volatile
- **Velocità:** Accesso lento
- **Uso:** Dati persistenti (es. configurazioni, calibrazioni)
- **Capacità ATMega328P:** 1 KB
- **Accesso in Arduino:** libreria EEPROM
### Indirizzamento della Memoria
Sia i registri general-purpose che i registri I/O sono mappati in memoria:

```
0x0000 - 0x001F: Registri general-purpose (R0-R31)
0x0020 - 0x005F: Registri I/O
0x0060 - 0x00FF: Memoria estesa I/O (se disponibile)
0x0100 - RAM_END: SRAM per dati e stack
```

---
## Arduino UNO e ATMega328P

### Architettura Arduino UNO
**Microcontroller:** ATMega328P (8-bit, 16 MHz)

**Memoria:**
- Flash: 32 KB (codice)
- SRAM: 2 KB (variabili, stack)
- EEPROM: 1 KB (dati persistenti)

**Interfacce:**
- 14 pin GPIO digitali (6 possono fare PWM)
- 6 ingressi analogici
- USB (per programmazione e comunicazione seriale)
- Connettore di alimentazione
- Header ICSP (In-Circuit Serial Programmer)
- Pulsante di reset

**Specifiche Elettriche:**
- Tensione di lavoro: 5V
- Tensione di ingresso consigliata: 7-12V
- Corrente per pin I/O: 40 mA
- Corrente per pin 3.3V: 50 mA

### Bootloader
Il bootloader è un piccolo programma (~0.5 KB) pre-memorizzato in Flash che:
- Permette di caricare il programma via USB senza un programmatore esterno
- Si esegue all'avvio, controlla se ci sono dati da ricevere via USB
- Se no, esegue il programma principale

---
## Programmazione MCU 

### Flusso di Sviluppo
1. **Editing:** Scrivi il codice in un IDE (es. Arduino IDE)
2. **Compilazione:** Il compilatore C/C++ (avr-gcc) converte il codice in linguaggio macchina AVR8
3. **Linking:** Il linker crea l'eseguibile binario
4. **Upload:** Il binario viene trasferito sulla MCU via USB (bootloader) o ICSP
### Architettura Super-Loop
Il pattern più semplice per programmazione embedded:

```c
#include "X.h"

void main(void) {
  X_Init();        // Inizializzazione
  while (1) {      // Super-loop infinito
    X();           // Esegui il task
  }
}
```

**Vantaggi:**
- Semplicità: niente OS richiesto
- Portabilità
- Affidabilità e sicurezza
- Efficienza

**Svantaggi:**
- Timing non accurato
- Bassa flessibilità
- Alto consumo energetico (versione base)

### Wiring Framework
Wiring è un framework open-source per programmare microcontroller:
- **Linguaggio:** Subset di C/C++ ANSI
- **Architettura:** Super-loop
- **Due procedure obbligatorie:**
  - `setup()`: eseguita una volta all'avvio
  - `loop()`: eseguita ripetutamente

**Procedura main nascosta:**

```c
int main(void) {
  init();            // Inizializzazione HW
  setup();           // Funzione utente
  for (;;) {         // Super-loop
    loop();          // Funzione utente
    if (serialEventRun) serialEventRun();
  }
}
```

### Arduino IDE
- IDE semplice ma efficace per editare, compilare e caricare
- Basato su GNU tools (avr-gcc, binutils)
- Include la libreria AVR Libc
- Strumento `avr-objdump` per disassemblare eseguibili

---

## GPIO - Input/Output Generale 
### Concetti Base
Ogni pin GPIO può essere configurato come:
- **Input:** per leggere il valore da un circuito esterno
- **Output:** per controllare il valore su un circuito esterno

I pin possono essere:
- **Digitali:** assumono solo due valori (HIGH=1 o LOW=0, corrispondenti a VCC e GND)
- **Analogici:** assumono qualsiasi valore nel range 0-VCC
### Arduino Uno - Configurazione Pin
- **14 pin digitali:** configurabili come input o output
- **6 pin analogici:** solo ingresso (A0-A5)
- **Alcuni pin sono multiplexati:**
  - Pin 0 (RX) e 1 (TX): serial communication
  - Pin 2 e 3: interrupt esterni
  - Pin 3,5,6,9,10,11: PWM
  - Pin 10,11,12,13: SPI
  - Pin A4 e A5: I2C
### Parametri Operativi
**Voltaggio:**
- Arduino: 5V
- Raspberry Pi, ESP: 3.3V
- Bisogna verificare il datasheet del componente

**Corrente:**
- Corrente massima per pin: 40 mA (Arduino)
- Corrente massima totale I/O: ~200 mA
- Molti sensori/attuatori richiedono circuiti di interfacciamento

**Pull-up/Pull-down:**
- I pin di ingresso possono avere resistenze di pull-up interne (~20-50 kΩ)
- Mantengono il pin a VCC quando non connesso a nulla (evita floating)
- Attivabili via software
### ATMega328P - Registri dei Port
L'ATMega328P ha 23 linee I/O raggruppate in 3 port di 8 bit:
- **Port D:** pin 0-7
- **Port B:** pin 8-13
- **Port C:** pin analogici (A0-A5)

Ogni pin è identificato come Px0, Px1, ecc. (es. PD0 = Pin 0 di Port D)
#### Registri di Controllo (DDRx, PORTx, PINx)
Per ogni port **x** (B, C, D) ci sono tre registri:

**DDRx (Data Direction Register)** - Read/Write
- Determina la direzione di ogni pin
- Bit = 0 → INPUT
- Bit = 1 → OUTPUT

**PORTx (Port Data Register)** - Read/Write
- Per pin OUTPUT: 1 = HIGH, 0 = LOW
- Per pin INPUT: 1 = attiva pull-up, 0 = disattiva pull-up

**PINx (Port Input Pins)** - Read Only
- Legge il valore del segnale sui pin di ingresso
- 1 = HIGH, 0 = LOW
- Solo per pin configurati come INPUT
#### Sequenza di Configurazione di un Pin
Per configurare un pin in OUTPUT a HIGH:

```c
// Passo 1: Impostare la direzione in DDR
DDRD |= (1 << PD0);  // Setta il bit 0 di DDRD a 1 (OUTPUT)

// Passo 2: Impostare lo stato in PORT
PORTD |= (1 << PD0);  // Setta il bit 0 di PORTD a 1 (HIGH)
```

### Wiring API per GPIO
Wiring fornisce funzioni di alto livello:

```c
// Configurare la direzione
pinMode(pin, INPUT);  // o OUTPUT
pinMode(pin, INPUT_PULLUP);  // Abilita pull-up interno

// Scrivere su un pin di output
digitalWrite(pin, HIGH);  // o LOW

// Leggere da un pin di input
int value = digitalRead(pin);  // Restituisce HIGH o LOW
```

### Esempio: LED Lampeggiante

```c
#define LED_PIN 13

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);  // Accendi LED
  delay(1000);                  // Aspetta 1 secondo
  digitalWrite(LED_PIN, LOW);   // Spegni LED
  delay(1000);                  // Aspetta 1 secondo
}
```

### Esempio: Bottone e LED

```c
const int buttonPin = 2;
const int ledPin = 13;
int buttonState = 0;

void setup() {
  pinMode(ledPin, OUTPUT);
  pinMode(buttonPin, INPUT);
}

void loop() {
  buttonState = digitalRead(buttonPin);
  
  if (buttonState == HIGH) {
    digitalWrite(ledPin, HIGH);  // Bottone premuto: LED acceso
  } else {
    digitalWrite(ledPin, LOW);   // Bottone non premuto: LED spento
  }
}
```

### delay() e Busy Waiting
La funzione `delay()` esegue un'attesa attiva (busy waiting):
```c
void delay(unsigned long ms) {
  unsigned long start = millis();
  while (millis() - start <= ms)
    ;  // Aspetta... ma il processore è occupato!
}
```

**Problema:** Blocca il super-loop, rendendo il sistema non reattivo ad altri eventi.

---
## Segnali Analogici e ADC 

### Concetti Base
Un segnale **digitale** su un pin digitale può assumere solo due valori: HIGH o LOW (1 o 0).

Un segnale **analogico** può assumere qualsiasi valore nel range 0-VCC (es. 0-5V).

Per processare segnali analogici con un computer digitale, bisogna convertirli in valori discreti usando un **ADC (Analog-to-Digital Converter)**.
### ADC - Convertitore Analogico-Digitale
L'ADC mappa un valore di tensione continuo (0-VCC) in un valore discreto (0 a 2^n - 1), dove n è la risoluzione in bit.

**Arduino Uno:**
- 6 ingressi analogici (A0-A5)
- Risoluzione: 10 bit
- Range: 0-1023 (quindi 0.00 V = 0, 5.00 V = 1023)
- Precisione: 5V / 1024 ≈ 4.88 mV per step

**Risoluzione:** Definisce la precisione della conversione. Con 10 bit, il valore minimo distinguibile è 5V/1024 ≈ 5 mV.
### Leggere un Pin Analogico

```c
int value = analogRead(A0);  // Restituisce 0-1023
```

Internamente, `analogRead()` accede ai registri dell'ADC per:
1. Selezionare il canale
2. Iniziare la conversione
3. Attendere il completamento
4. Leggere il risultato

### Funzione map()
Spesso il valore grezzo (0-1023) deve essere mappato in un range diverso:

```c
int sensorValue = analogRead(A0);        // 0-1023
int outputValue = map(sensorValue, 0, 1023, 0, 255);  // Mappa in 0-255
```

Utile per compatibilità con altre funzioni o per normalizzazione.
### Esempio: Potenziometro

```c
const int potPin = A0;       // Ingresso potenziometro
const int ledPin = 9;        // Pin PWM per LED

void setup() {
  Serial.begin(9600);
}

void loop() {
  int sensorValue = analogRead(potPin);  // 0-1023
  int brightness = map(sensorValue, 0, 1023, 0, 255);  // Mappa in 0-255
  
  analogWrite(ledPin, brightness);  // Controlla luminosità LED
  
  Serial.print("Sensore: ");
  Serial.print(sensorValue);
  Serial.print(" Luminosità: ");
  Serial.println(brightness);
  
  delay(2);  // Lascia tempo all'ADC di stabilizzarsi
}
```

---
## PWM - Pulse Width Modulation

### Principio
PWM è una tecnica per emulare un segnale analogico su un pin digitale, generando un'onda quadra periodica (periodically switching between HIGH e LOW).

La **tensione media** emulata è controllata dal **duty cycle** (percentuale di tempo in cui il segnale è HIGH).

**Formula:**
```
Tensione media = Duty Cycle × VCC
```

**Esempi:**
- Duty cycle 0% → Tensione media = 0V
- Duty cycle 50% → Tensione media = 2.5V (per VCC=5V)
- Duty cycle 100% → Tensione media = 5V
### Funziona con LED e Motori
PWM non funziona con tutti i dispositivi di output:

**Funziona con:**
- LED (controlla la luminosità osservando la luminosità media)
- Motori DC (controlla la velocità media)

**Non funziona direttamente con:**
- Dispositivi che hanno bisogno di un valore analogico istantaneo
- Altoparlanti ad alta fedeltà (servirebbe un filtro RC)

### Arduino - PWM
**Pin con supporto PWM:** 3, 5, 6, 9, 10, 11 (8-bit PWM)
**Frequenza PWM predefinita:** 490 Hz (pin 3,9,10 su Timer1/2) e 980 Hz (pin 5,6 su Timer0)

```c
void analogWrite(int pin, int value)  // value: 0-255
```

- 0 = 0% duty cycle
- 127 ≈ 50% duty cycle
- 255 = 100% duty cycle
### Esempio: LED Sfumatura

```c
int led = 9;          // Pin PWM
int brightness = 0;
int fadeAmount = 5;

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  analogWrite(led, brightness);   // Imposta luminosità
  brightness += fadeAmount;
  
  // Inverti direzione ai limiti
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount;
  }
  
  delay(30);  // Pausa per effetto sfumatura
}
```

![[Pasted image 20261002095823.png]]
#define PIN_LED 9

#define PIN_POT A0

  

int valPot;

  

void setup() {

  // put your setup code here, to run once:

    pinMode(PIN_LED, OUTPUT);

    pinMode(PIN_POT, INPUT);

    valPot = 0;

}

  

void loop() {

  // put your main code here, to run repeatedly:

  digitalWrite(PIN_LED, HIGH);

  valPot = analogRead(PIN_POT);

  delay(valPot);

  digitalWrite(PIN_LED, LOW);

  delay(valPot);

}
#SISTEMA
---
## Interrupts

### Concetti Base
Un **interrupt** è un meccanismo che permette al MCU di reagire immediatamente a eventi esterni (sensori, timer, etc.), sospendendo l'esecuzione del codice principale.

**Flusso di esecuzione con interrupt:**
1. CPU esegue il codice del super-loop (main)
2. Arriva un segnale di interrupt su un pin IRQ
3. CPU:
   - Salva l'indirizzo della prossima istruzione nello stack
   - Legge l'indirizzo della routine di interrupt dall'**interrupt vector table**
   - Salta alla routine di interrupt (ISR - Interrupt Service Routine)
4. ISR esegue il codice di gestione dell'evento
5. ISR termina (istruzione RETI - return from interrupt)
6. CPU ripristina l'indirizzo precedente dallo stack
7. Continua l'esecuzione del super-loop da dove si era fermato
### Interrupt Vector Table
Tabella che memorizza gli indirizzi di memoria delle routine di interrupt per ogni sorgente di interrupt.

Ogni sorgente di interrupt ha un numero (0, 1, 2, ...) e un indirizzo corrispondente in ROM.
### ATMega328P - Pin di Interrupt
L'ATMega328P ha:
- **2 pin interrupt esterni:** pin 2 (INT0) e pin 3 (INT1)
- **Pin change interrupts:** tutti i pin possono generare interrupt, ma di tipo limitato
### Configurazione degli Interrupt
Gli interrupt su ATMega328P possono essere configurati per reagire a:
- **RISING:** transizione da LOW a HIGH
- **FALLING:** transizione da HIGH a LOW
- **CHANGE:** qualsiasi cambio di stato
- **LOW:** quando il segnale è LOW
### Wiring API - Interrupt

```c
attachInterrupt(intNum, ISR, mode);
```

**Parametri:**
- `intNum`: numero dell'interrupt (0 o 1 su Arduino Uno)
- `ISR`: puntatore alla funzione (void handler(void))
- `mode`: RISING, FALLING, CHANGE, LOW, HIGH

**Alternativa:** usare `digitalPinToInterrupt(pin)` per ottenere il numero di interrupt da un pin.
### Esempio di Utilizzo

```c
volatile int count = 0;

void setup() {
  Serial.begin(9600);
  attachInterrupt(0, increment, RISING);  // Interrupt su pin 2
}

void loop() {
  Serial.println(count);
  delay(1000);
}

void increment() {
  count++;  // ISR: eseguita quando pin 2 va da LOW a HIGH
}
```

**Attenzione:** Race conditions se `count` viene acceduto sia dalla ISR che dal main loop.
### Race Conditions e Sincronizzazione
Se una variabile è condivisa tra ISR e main loop, possono verificarsi **race conditions** (errore informatico che si verifica quando due o più processi o thread accedono contemporaneamente a una risorsa condivisa e il risultato finale dipende dall'ordine esatto con cui vengono eseguiti).

**Soluzione 1: Disabilitare interrupt temporaneamente**

```c
noInterrupts();      // Disabilita interrupt globali
int current = count;
interrupts();        // Riabilita interrupt globali
```

Questo disabilita temporaneamente tutti gli interrupt, evitando l'accesso contemporaneo.

**Soluzione 2: Usare volatile**

```c
volatile int count = 0;
```

`volatile` dice al compilatore di non ottimizzare accessi a questa variabile. Comunque non risolve completamente le race conditions in questo caso.
### Esempio Corretto

```c
#define BUTTON_PIN 2
volatile int count = 0;
int prev = 0;

void setup() {
  Serial.begin(9600);
  attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), increment, RISING);
}

void loop() {
  noInterrupts();
  int current = count;
  interrupts();
  
  if (current != prev) {
    Serial.println(current);
    prev = current;
  }
}

void increment() {
  count++;
}
```

### Disabilitare/Abilitare Interrupt

```c
noInterrupts();   // Disabilita tutti gli interrupt
// Codice critico
interrupts();     // Riabilita interrupt
```

A basso livello, queste funzioni settano il bit I nel register SREG (Status Register).
### Progettazione di ISR Efficace
Le routine di interrupt devono essere:
1. **Veloci:** eseguire il minimo codice necessario
2. **Non bloccanti:** niente cicli infiniti, niente delay()
3. **Sincrone con il resto:** coordinare con il main loop

**Pattern Raccomandato: Producer-Consumer**
L'ISR (producer) prepara un task e lo mette in un buffer. Il main loop (consumer) estrae compiti dal buffer ed esegue il lavoro pesante.

```c
volatile boolean taskFlag = false;

void setup() {
  attachInterrupt(0, eventHandler, RISING);
}

void loop() {
  if (taskFlag) {
    taskFlag = false;
    doHeavyWork();  // Nel main loop, non nella ISR
  }
}

void eventHandler() {
  taskFlag = true;  // ISR: solo setta il flag
}
```
### Limitazioni su Arduino/AVR
**AVR non supporta interrupt nesting:** quando una ISR è in esecuzione, gli interrupt sono disabilitati. Niente interrupt dentro un'interrupt.

**Conseguenze:**
- Funzioni che dipendono da interrupt non funzionano dentro ISR
- Esempio: `delay()` usa il timer (interrupt), quindi non funziona in ISR
- Alternativa: `delayMicroseconds()` usa cicli di clock, funziona in ISR
### FAQ su Interrupt
**P: La CPU può essere interrotta durante l'esecuzione di una singola istruzione?**  
R: No, le istruzioni macchina sono atomiche (modulo istruzioni complesse con accessi multipli alla memoria).

**P: Se due interrupt occorrono simultaneamente, cosa succede?**  
R: La CPU ha una priorità per ogni interrupt. Esegue sempre l'interrupt con priorità più alta.

**P: Su AVR, può un interrupt essere interrotto?**  
R: No, AVR non supporta interrupt nesting. Gli interrupt sono disabilitati durante la gestione di un interrupt.

**P: Cosa accade ai segnali di interrupt quando gli interrupt sono disabilitati?**  
R: Su AVR, i segnali non vengono tracciati. Vengono persi se arrivano mentre gli interrupt sono disabilitati.

**P: Se disabilito gli interrupt e dimentico di abilitarli?**  
R: Malfunzionamento sistema, crash. Sistema non reattivo.

---
## Timers

### Ruolo dei Timer
I timer sono componenti hardware essenziali per sistemi embedded che devono essere reattivi al tempo:

- Misurare intervalli di tempo
- Generare segnali PWM
- Creare timeout e allarmi
- Implementare multi-tasking con scheduling preemptivo
- Fornire una base di tempo per il sistema
### Struttura Base di un Timer
Un timer è essenzialmente un **contatore (counter)** che viene incrementato a una frequenza fissa (determinata dalla frequenza di clock e da un prescaler).
### ATMega328P - Timers
L'ATMega328P ha **3 timer interni:**
- **Timer0:** 8-bit, usato per millis() e PWM (pin 5,6)
- **Timer1:** 16-bit, per PWM (pin 9,10) e temporizzazione generale
- **Timer2:** 8-bit, usato per PWM (pin 3,11) e AsyncIO

**Caratteristiche:**
- Contatori incrementati ad ogni ciclo di clock (16 MHz)
- Timer0 e Timer2: contatori a 8 bit (overflow dopo 256 incrementi)
- Timer1: contatore a 16 bit (overflow dopo 65536 incrementi)
### Frequenza di Incremento
Senza prescaler:
- Incremento ogni 1/(16 MHz) = 62.5 ns
- Timer0/2 overflow: 256 × 62.5 ns = 16.128 µs
- Timer1 overflow: 65536 × 62.5 ns ≈ 4.096 ms

Con prescaler (divisore):
```
Frequenza timer = 16 MHz / prescaler
```

Prescaler disponibili: 1, 8, 64, 256, 1024
### Modalità CTC (Clear Timer on Compare Match)
Modalità di funzionamento in cui il timer genera un interrupt quando raggiunge un valore specifico (compare match value).

**Sequenza:**
1. Counter incrementa
2. Quando counter == compare_match_register:
   - Interrupt generato
   - Counter resettato a 0
   - Ciclo ricomincia

**Uso:** Generare interrupt a frequenza precisa.
### Calcolo della Frequenza di Interrupt
Data una frequenza desiderata:

```
Compare Match Register = (16,000,000 Hz / (prescaler × frequenza_desiderata)) - 1
```

**Vincoli:**
- Per Timer0/2: < 256
- Per Timer1: < 65536
- Se il valore supera il limite, aumentare il prescaler
### Esempio: 1 Hz con Timer1

Vogliamo 1 interrupt al secondo:
```
CMR = (16,000,000 / (1024 × 1)) - 1 = 15,624
```

Poiché 15,624 < 65,536, possiamo usare Timer1 con prescaler 1024.
### Registri di Configurazione
Ogni timer ha registri di controllo TCCRxA e TCCRxB (x = numero timer):

**TCCRxA / TCCRxB:**
- Registri di 8 bit
- Bit 6-4 (TCCRxB): SM2, SM1, SM0 → selezionano la modalità di sleep
- Bit 3-1 (TCCRxB): WGM → Waveform Generation Mode (per CTC, Fast PWM, ecc.)
- Bit 2-0 (TCCRxB): CS2, CS1, CS0 → clock select (prescaler)

**Abilitazione interrupt:**
- TIMSK0/1/2: registri di maschera interrupt
- Bit OCIE1A/OCIE0A/OCIE2A: abilita interrupt su compare match per channel A

**Registro di confronto:**
- OCR1A/OCR0A/OCR2A: valore di compare match
### Interrupt di Timer
Quando il counter raggiunge il valore di compare match, viene generato un interrupt.

In Wiring, la ISR è dichiarata con la macro `ISR()`:

```c
ISR(TIMER1_COMPA_vect) {
  // Codice eseguito quando Timer1 raggiunge OCR1A
}
```

### Esempio Raw: Timer1 a 1 Hz

```c
volatile boolean timerFlag = false;

void setup() {
  Serial.begin(9600);
  setupTimer(1000);  // 1000 interrupt al secondo
}

void setupTimer(int freq) {
  cli();  // Disabilita interrupt
  
  TCCR1A = 0;      // Azzera registri di controllo
  TCCR1B = 0;
  TCNT1 = 0;       // Azzera contatore
  
  // Calcola e imposta compare match register
  // OCR1A = (16*2^10)/freq = 16384/freq
  // Per 1000 Hz: OCR1A = 16
  OCR1A = 16*1024/freq;
  
  TCCR1B |= (1 << WGM12);         // CTC mode
  TCCR1B |= (1 << CS12) | (1 << CS10);  // Prescaler 1024
  TIMSK1 |= (1 << OCIE1A);        // Abilita interrupt
  
  sei();  // Abilita interrupt
}

ISR(TIMER1_COMPA_vect) {
  timerFlag = true;
}

void loop() {
  if (timerFlag) {
    timerFlag = false;
    Serial.println(millis());
  }
}
```

### Librerie Timer Semplicate
Librerie come **TimerOne** semplificano l'utilizzo:

```c
#include <TimerOne.h>

void timerHandler() {
  // Eseguita ogni volta che il timer scade
}

void setup() {
  Timer1.initialize(1000000);      // 1 secondo (in microsecondi)
  Timer1.attachInterrupt(timerHandler);
}

void loop() {
  // Super loop continua
}
```

### Watch Dog Timer
Un timer speciale che conta fino a un valore e poi genera un segnale di reset.

**Uso:** Rilevare deadlock o malfunction.

- In funzionamento normale: il software periodicamente "accarezza" (resetta) il watchdog
- Se il watchdog raggiunge il timeout: hardware reset del sistema

Molto utile in sistemi che devono essere sempre affidabili.
### Timer e PWM - Interazioni
Attenzione: i timer sono usati anche per generare PWM:

- **Timer0:** pin 5 e 6 (PWM)
- **Timer1:** pin 9 e 10 (PWM)
- **Timer2:** pin 3 e 11 (PWM)

Se usi un timer direttamente (configurando i registri), puoi interferire con il PWM:
- Configurare Timer1 → PWM su pin 9 e 10 non funzionano più
- Librerie che usano PWM (servo) possono interferire con timer custom

Sempre controllare la documentazione quando usi timer e PWM insieme.

---
## Comunicazione Seriale
### Interfacce di Comunicazione
Ci sono due categorie principali:
**Seriali:**
- Un bit alla volta su una singola linea (o poche linee)
- Più lente, ma richiedono meno pin
- Esempi: UART, I2C, SPI

**Parallele:**
- Più bit contemporaneamente su linee separate
- Più veloci, ma richiedono molti pin
- Esempi: bus 8-bit, 16-bit
### Serial Asincrono
**Caratteristiche:**
- Niente clock condiviso tra i dispositivi
- Sincronizzazione tramite protocollo e timing noto
- Due linee separate: TX (trasmissione) e RX (ricezione)
- Esempi: RS-232, TTL, USB
### Parametri del Protocollo Asincrono
Tutti i dispositivi devono concordare su:

1. **Baud Rate:** velocità di trasmissione in bit per secondo
2. **Data Frame:** quanti bit di dati per pacchetto (5-9, tipico 8)
3. **Bit di Sincronizzazione:** start bit e stop bit per delimitare i pacchetti
4. **Bit di Parità:** facoltativo, per rilevamento di errori
### Baud Rate
Velocità di trasmissione in bits per second (bps).

**Valori standard:** 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200

**Considerazioni:**
- Più veloce = più dati al secondo
- Arduino ha un limite (tipicamente 115200 max)
- Valori più alti → possibilità di errori di trasmissione
### Data Frame (Formato del Pacchetto)
Ogni pacchetto (tipicamente un byte) è trasmesso così:
```
[Start][Bit7][Bit6][Bit5][Bit4][Bit3][Bit2][Bit1][Bit0][Parity][Stop]
  1      LSB                              MSB      opt      1
```

**9600 8N1** è lo standard più usato:
- 9600 baud
- 8 bit di dati
- No parity
- 1 stop bit

**Tempo di trasmissione per byte:**
- 10 bit totali (1 start + 8 data + 1 stop) a 9600 bps
- 10 / 9600 ≈ 1.04 ms per byte
- Throughput: ~960 byte/sec
### Endianness
L'ordine in cui i bit sono trasmessi:
- **LSB First (Little Endian):** bit meno significativo prima (default)
- **MSB First (Big Endian):** bit più significativo prima
Default Arduino: LSB first.
### Hardware Serial
**UART (Universal Asynchronous Receiver Transmitter):**
- Circuito hardware che gestisce la comunicazione seriale
- Converte tra interfaccia parallela (8-bit data bus) e seriale (TX/RX)
- Arduino Uno ha 1 UART; Arduino Mega ne ha 4

**Pin su Arduino Uno:**
- Pin 0 (RX): riceve dati
- Pin 1 (TX): trasmette dati

Questi pin sono condivisi con la comunicazione seriale via USB (attraverso il chip USB-TTL).
### Livelli di Segnale
**RS-232:** ±12V (standard vecchio, raro in Arduino)

**TTL (Transistor-Transistor Logic):** usato in Arduino
- LOW = 0V
- HIGH = 5V (Arduino)

**USB:** convertito automaticamente dal chip USB-TTL sull'Arduino
### Serial Library in Wiring
La classe `Serial` fornisce accesso alla comunicazione seriale:

```c
Serial.begin(baud);        // Inizializza seriale a baud rate
Serial.end();              // Termina comunicazione

// Trasmissione
Serial.write(byte);        // Invia un byte
Serial.print(value);       // Invia stringa/numero
Serial.println(value);     // Invia + newline

// Ricezione
Serial.read();             // Legge un byte (blocca se niente disponibile)
Serial.available();        // Quanti byte sono disponibili
Serial.readBytes(buffer, length);  // Legge più byte
Serial.peek();             // Legge senza rimuovere dal buffer
```
### Esempio: Echo Program
Legge caratteri dalla seriale e li rimanda indietro:

```c
char data;

void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available()) {
    data = Serial.read();
    Serial.print(data);
  }
}
```

Usa Arduino IDE Serial Monitor per inviare/ricevere caratteri.
### Serial Sincrono - I2C
**I2C (Inter-Integrated Circuit):**
- Introdotto da Philips negli anni '80
- Bus a 2 fili: SDA (data) e SCL (clock)
- Velocità: 100 kbit/s (standard), 400 kbit/s (fast), 1 Mbit/s (fast+)

**Architettura:**
- Master-Slave: un master (tipicamente il MCU) controlla la comunicazione
- Tutti i dispositivi condividono le 2 linee
- Ogni slave ha un indirizzo unico di 7 bit

**Vantaggi:**
- Solo 2 pin
- Adatto per connettere molti sensori/attuatori
- Protocollo standardizzato
### I2C - Protocollo Master-Slave
**Sequenza di comunicazione:**
1. Master invia START bit
2. Master invia indirizzo 7-bit dello slave
3. Master invia R/W bit (0 = write, 1 = read)
4. Slave risponde con ACK (active low)
5. Trasmissione di dati:
   - Write: Master invia byte, slave risponde con ACK
   - Read: Slave invia byte, master risponde con ACK
6. Master invia STOP bit

**Comportamento delle linee:**
- Idle: SDA e SCL sono alti (pull-up resistor)
- Active low: quando LOW, il dispositivo "tira" la linea

Servono resistori di pull-up (tipicamente 4.7 kΩ).
### Arduino/ATMega328P - I2C (Wire)
**Pin I2C:**
- A4 (SDA - data)
- A5 (SCL - clock)

Questi pin sono multiplexati con ingressi analogici.

**Wire Library:**

```c
#include <Wire.h>

Wire.begin();                      // Inizializza I2C come master
Wire.beginTransmission(address);   // Inizia comunicazione con slave
Wire.write(byte);                  // Invia byte
Wire.endTransmission();            // Termina comunicazione

Wire.requestFrom(address, length); // Richiedi byte dallo slave
Wire.available();                  // Quanti byte sono disponibili
Wire.read();                       // Leggi byte
```
### Esempio I2C: Sensore di Temperatura TC74
Sensore I2C semplice. Datasheet specifica 2 registri:
- Indirizzo 0: temperatura in Celsius
- Indirizzo 1: configurazione chip

```c
#include <Wire.h>

int tempAddress = 72;  // 1001000 in binario

void setup() {
  Serial.begin(9600);
  Wire.begin();
}

void loop() {
  // Richiedi lettura del registro temperatura
  Wire.beginTransmission(tempAddress);
  Wire.write(0);  // Registro 0 = temperatura
  Wire.endTransmission();
  
  // Richiedi 1 byte
  Wire.requestFrom(tempAddress, 1);
  
  // Attendi il dato
  while (Wire.available() == 0);
  
  // Leggi il byte
  int temperature = Wire.read();
  
  Serial.print("Temperatura: ");
  Serial.print(temperature);
  Serial.println(" C");
  
  delay(500);
}
```

### Serial Sincrono - SPI
**SPI (Serial Peripheral Interface):**
- Introdotto da Motorola
- 3-4 linee: SCK (clock), MOSI (master out), MISO (master in), SS (select slave)
- Full-duplex: master e slave trasmettono simultaneamente
- Più veloce di I2C (tipicamente 10 MHz+)
- Meno standardizzato di I2C

**Vantaggi rispetto a I2C:**
- Velocità superiore
- Niente resistori di pull-up richiesti
- Protocollo più semplice

**Svantaggi:**
- 4 pin (vs 2 di I2C)
- Niente indirizzamento integrato
### SPI - Architettura
**Pin SPI:**
- **SCK (Serial Clock):** linea di clock condivisa
- **MOSI (Master Out Slave In):** master trasmette, slave riceve
- **MISO (Master In Slave Out):** master riceve, slave trasmette
- **SS (Slave Select):** seleziona quale slave comunicare

Tutti condividono le 3 linee dati; ogni slave ha una linea SS separata.

**Multislave:**
- Con multipli SS: un SS per ogni slave
- Con daisy-chain: slave in cascata, riduce pin ma complicato
### Arduino - SPI (SPI Library)
**Pin SPI su Arduino Uno:**
- Pin 10: SS (Slave Select)
- Pin 11: MOSI
- Pin 12: MISO
- Pin 13: SCK

```c
#include <SPI.h>

SPI.begin();                       // Inizializza SPI
SPI.beginTransaction(settings);    // Inizia transazione
SPI.transfer(byte);                // Invia/ricevi byte
SPI.transfer16(word);              // Invia/ricevi word
SPI.transfer(buffer, size);        // Invia/ricevi buffer
SPI.endTransaction();              // Termina transazione
SPI.end();                         // Termina SPI
```
### SPI Settings
```c
SPI.beginTransaction(SPISettings(frequenza, byteOrder, mode));
```

- **Frequenza:** velocità clock (14 MHz è comune)
- **byteOrder:** MSBFIRST o LSBFIRST
- **Mode:** SPI_MODE0, SPI_MODE1, SPI_MODE2, SPI_MODE3
  - Determina fase e polarità del clock
### SPI - Protocollo Master-Slave

**Sequenza:**
1. Master imposta SS = LOW per selezionare lo slave
2. Master chiama SPI.transfer() per trasmettere/ricevere
3. Mentre master invia bit, slave riceve; simultaneamente slave invia e master riceve
4. Master imposta SS = HIGH per deselezionare lo slave

### I2C vs SPI

| Aspetto | I2C | SPI |
|---------|-----|-----|
| Pin | 2 | 4 |
| Velocità | 100-400 kbit/s | 1-100+ Mbit/s |
| Indirizzamento | Integrato (7/10 bit) | Nessuno (SS separato) |
| Complessità | Media | Semplice |
| Distanza | Breve | Breve |
| Dispositivi comuni | Sensori, display, EEPROM | SD card, Flash, Sensori speciali |

---
## Gestione dell'Energia 

### Consumo di Potenza nei Microcontroller
Il consumo di potenza è critico in applicazioni **battery-powered** (dispositivi a batteria, IoT, wearable).

**Fattori che influenzano il consumo:**
- Voltaggio di alimentazione
- Frequenza di clock
- Operazioni eseguite (calcoli vs idle)
- Periferiche attive (timer, ADC, comunicazione)
### Sleep Mode
Molti MCU (incluso ATMega328P) supportano diverse modalità di sleep a bassissimo consumo.

L'idea: quando il sistema non deve fare niente, metterlo in sleep per ridurre drasticamente il consumo.

**Sveglia da sleep:**
- Interrupt esterni
- Interrupt su timer
- Interrupt I2C
- Watchdog (opzionale)
### ATMega328P - Sleep Mode
5 modalità sleep, in ordine di risparmio energetico crescente:
1. **Idle Mode**
   - CPU ferma, periferiche continuano
   - Consumi: ridotti
   - Sveglia: veloce (~1 ciclo clock)

2. **ADC Noise Reduction Mode**
   - CPU e periferiche ferme tranne ADC
   - Consumi: ridotti
   - Sveglia: veloce
   - Uso: conversioni ADC precise

3. **Power-save Mode**
   - Come Power-down, ma Timer2 asincrono continua
   - Consumi: molto ridotti
   - Sveglia: veloce

4. **Standby Mode**
   - Oscillatore continua
   - Consumi: molto ridotti
   - Sveglia: veloce (~6 cicli clock)

5. **Power-down Mode**
   - Tutto spento tranne interrupt e watchdog
   - Consumi: minimi (µA)
   - Sveglia: lenta (~16 ms)
   - Uso: batteria a lunga durata
### Configurazione Sleep Mode su Arduino
Il MCU Control Register (MCUCR) contiene i bit per controllare lo sleep:

- **Bit 7 (SE):** Sleep Enable (deve essere 1 per andare in sleep)
- **Bit 6-4 (SM2-SM0):** Sleep Mode Select
### Esempio: Power-Down Sleep
```c
#include <avr/sleep.h>
#include <avr/interrupt.h>

void setup() {
  // Configura il pin di interrupt esterno
  attachInterrupt(0, wakeUp, RISING);
  
  // Configura sleep mode
  set_sleep_mode(SLEEP_MODE_PWR_DOWN);
}

void loop() {
  Serial.println("Mi addormento...");
  delay(100);  // Aspetta trasmissione seriale
  
  sleep_enable();      // Abilita sleep
  sleep_mode();        // ZZZZZZ... il MCU dorme
  // Quando si sveglia, l'esecuzione continua qui
  sleep_disable();     // Disabilita sleep
  
  Serial.println("Mi sono svegliato!");
}

void wakeUp() {
  // Interrupt handler - semplice, veloce
  // Non usare Serial qui
}
```
### Consumo Energetico ATMega8
**Consumo attivo (16 MHz, 5V):** ~15-20 mA

**Consumo in sleep:**
- Idle: ~5-10 mA
- Power-down: ~10-100 µA (dipende dalla temperatura)

**Differenza:** 100-1000x meno consumo in sleep!
### Strategie di Risparmio Energetico
1. **Usare sleep mode** quando il dispositivo non deve fare niente
2. **Ridurre la frequenza di clock** (es. 16 MHz → 8 MHz halve il consumo)
3. **Spegnere periferiche** non usate (ADC, timer, UART)
4. **Minimizzare le comunicazioni** (trasmissione dati è costosa)
5. **Usare pull-up/pull-down** per ridurre correnti di leakage
### Efficienza del Bootloader
Il bootloader (~0.5 KB) è pre-memorizzato in Flash e resiede permanentemente, riducendo lo spazio disponibile per il codice applicativo.

Trade-off: comodità di programmazione via USB vs spazio di memoria.

---
## Conclusioni e Suggerimenti per lo Studio

### Concetti Chiave da Ricordare
1. **Architettura Harvard:** istruzioni e dati in memorie separate → velocità, ma richiede disciplina nel gestire la memoria limitata
2. **GPIO e Registri:** i pin sono controllati tramite registri DDR, PORT, PIN - capire questo è fondamentale
3. **Interrupts:** mecanismo critico per reattività - disegnare ISR brevi e veloci
4. **Timer:** sono la base della temporizzazione - imparare a configurare clock e compare match
5. **Comunicazione seriale:** I2C e SPI sono protocolli essenziali per connettere sensori e attuatori
6. **Sleep mode:** cruciale per applicazioni battery-powered
### Pratica Consigliata
- Compilare e disassemblare semplici programmi (`avr-objdump -d`)
- Leggere i datasheet (es. ATMega328P manual)
- Sperimentare con interrupt e timer
- Misurare il consumo reale in diverse modalità
- Scrivere driver per sensori I2C/SPI comuni
### Risorse Utili
- **Arduino IDE:** editing, compilazione, caricamento
- **Wiring:** framework e librerie
- **avr-gcc:** compilatore (incluso in Arduino IDE)
- **Datasheet ATmega328P:** specifiche complete del chip
- **Libro di riferimento:** "Exploring Arduino" di Jeremy Blum

