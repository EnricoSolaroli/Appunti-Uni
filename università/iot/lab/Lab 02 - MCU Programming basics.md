[\[Lab Notes\] MCU Programming basics](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/iot/lab/%5BLab Notes%5D MCU Programming basics.pdf>)

# Lab – MCU Programming basics

>> Note di laboratorio collegate alla teoria di [[01.2 - Embedded systems based on microcontrollers]] (super-loop, GPIO, ADC, PWM, interrupt, timer, sleep, seriale e I2C). Il laboratorio successivo è [[Lab 03 - Sensors and Actuators - Typologies and Examples]].

## Indice

1. **Obiettivi e piattaforma Arduino UNO** (slide 1–10)
	- [[#Slide 2 – Objective|Obiettivi del laboratorio]]
	- [[#Slide 3 – Arduino - Intro|Il progetto Arduino e Wiring]]
	- [[#Slide 6 -> 8 – Arduino UNO|Componenti e specifiche di Arduino UNO]]
	- [[#Slide 9 – Pin specs|Specifiche dei pin digitali e analogici]]
	- [[#Slide 10 – Esternal power|Alimentazione esterna e capacità della batteria]]
2. **Programmazione: Wiring, IDE e super-loop** (slide 11–14)
	- [[#Slide 11 – Programming|Framework Wiring e toolchain avr-gcc]]
	- [[#Slide 12 – IDE and tools|IDE, PlatformIO e simulatori]]
	- [[#Slide 14 – Wiring program structure: super loop|Super-loop: setup() e loop()]]
3. **Upload, boot e mappa della memoria** (slide 15–18)
	- [[#Slide 15 – Program upload and execution|Upload via bootloader o ICSP]]
	- [[#Slide 16 – Booting - details|Sequenza di boot]]
	- [[#Slide 17 -> 18 – Runtime - memory map|Segmenti .data, .bss, heap e stack]]
		- Registri mappati e indirizzi della SRAM
4. **Ambiente di laboratorio e componenti** (slide 19–23)
	- [[#Slide 19 – Lab work environment setup|Hardware e software del laboratorio]]
	- [[#Slide 20 – Material: the breadboard|La breadboard]]
	- [[#Slide 21 – Jumpers|Cavetti jumper]]
	- [[#Slide 22 – Warning|Cortocircuiti, correnti massime e polarità]]
	- [[#Slide 23 – First activities in lab|Elenco dei 12 step]]
5. **Step 1–2: LED lampeggiante interno ed esterno** (slide 24–30)
	- [[#Slide 25 – Code|Step 1: blink con pinMode, digitalWrite e delay]]
	- [[#Slide 27 – What's a LED|Step 2: il LED e la sua polarità]]
	- [[#Slide 28 – Circuits|Circuito LED più resistenza]]
	- [[#Slide 29 – Why choosing that resistor?|Calcolo della resistenza]]
	- [[#Slide 30 – 220 Ohm resistor|Codice colori delle resistenze]]
6. **Step 3: log sulla seriale** (slide 31–34)
	- [[#Slide 32 – Code|Blink con log seriale]]
	- [[#Slide 33 – DETAILS: SERIAL OUTPUT|Libreria Serial]]
	- [[#Slide 34 – SERIAL MONITOR|Serial Monitor e baud rate]]
7. **Step 4: pulsante-LED e polling** (slide 35–39)
	- [[#Slide 36 – CIRCUITS|Circuito pulsante e LED]]
	- [[#Slide 37 – PULL-DOWN RESISTOR|Resistenza di pull-down]]
	- [[#Slide 38 – CODE|Codice con digitalRead]]
	- [[#Slide 39 – ABOUT POLLING|Limiti del polling]]
8. **Step 5: fading con potenziometro e PWM** (slide 40–42)
	- [[#Slide 41 – A POTENTIOMETER|Il potenziometro come partitore]]
	- [[#Slide 42 – CODE|analogRead, map e analogWrite]]
9. **Step 6: conteggio con interrupt** (slide 43–48)
	- [[#Slide 44 – CIRCUITS|Circuito del pulsante su pin 2]]
	- [[#Slide 45 – CODE|attachInterrupt e versione con debounce]]
	- [[#Slide 46 – BOUNCING PROBLEM|Problema del bouncing]]
	- [[#Slide 47 – ATOMICITY/CRITICAL SECTIONS|Atomicità e sezioni critiche]]
	- [[#Slide 48 – FURTHER REMARKS|Log asincrono e incrementi non stampati]]
10. **Step 7–9: timer e modalità sleep** (slide 49–55)
	- [[#Slide 50 – CODE|Step 7: blink event-driven con TimerOne]]
	- [[#Slide 52 – CIRCUITS|Step 8: deep sleep con risveglio da pulsante]]
	- [[#Slide 53 – CODE|Codice power-down]]
	- [[#Slide 55 – CODE|Step 9: light sleep (idle) con timer]]
11. **Step 10–12: seriale, bus I²C e LCD** (slide 56–64)
	- [[#Slide 57 – CODE|Step 10: echo seriale]]
	- [[#Slide 59 – DISPLAY LCD|Step 11: display LCD]]
	- [[#Slide 60 – PARALLEL LCD SCREEN|LCD parallelo 16x2 e versione I²C]]
	- [[#Slide 61 – CONNECTING A I²C-BASED LCD TO BE DISCOVERED|Collegamento dell'LCD I²C]]
	- [[#Slide 62 – CODE|Scanner del bus I²C con Wire]]
	- [[#Slide 64 – CODE|Step 12: libreria LiquidCrystal_I2C]]

---
## Slide 1 – [Lab Notes] MCU Programming Basics

Embedded Systems and IoT
Ingegneria e Scienze Informatiche - UNIBO
a.a 2026/2027

**[Lab Notes]**
MCU PROGRAMMING BASICS

---
## Slide 2 – Objective

- This lab module provides a practical overview of main aspects related to microcontroller programming, based on Arduino and Wiring
- In particular:
	- digital I/O
	- output PWM
	- analog input
	- interrupt
	- timer
	- serial TTL

>> Mappa rapida dei temi: *digital I/O* = leggere/scrivere livelli logici (0 V / 5 V) sui pin; *PWM* (Pulse Width Modulation) = simulare un'uscita "analogica" variando il duty cycle di un'onda quadra; *analog input* = conversione A/D di una tensione; *interrupt* = reazione asincrona a eventi HW; *timer* = periferiche che contano cicli di clock per generare eventi periodici; *serial TTL* = UART a livelli logici 0/5 V (convertita in USB sulla scheda).

---
## Slide 3 – Arduino - Intro

- The Arduino project (https://en.wikipedia.org/wiki/Arduino)
	- *…The Arduino project began in 2005 as a tool for students at the Interaction Design Institute Ivrea, Italy, aiming to provide a low-cost and easy way for novices and professionals to create devices that interact with their environment using sensors and actuators...*
	  *…The Arduino project was started at the Interaction Design Institute Ivrea (IDII) in Ivrea, Italy.[2] At that time, the students used a BASIC Stamp microcontroller at a cost of $50. In 2003 Hernando Barragán created the development platform Wiring as a Master's thesis project at IDII, under the supervision of Massimo Banzi and Casey Reas. Casey Reas is known for co-creating, with Ben Fry, the Processing development platform. The project goal was to create simple, low cost tools for creating digital projects by non-engineers. The Wiring platform consisted of a printed circuit board (PCB) with an ATmega128 microcontroller, an IDE based on Processing and library functions to easily program the microcontroller.[4] In 2005, Massimo Banzi, with David Mellis, another IDII student, and David Cuartielles, extended Wiring by adding support for the cheaper ATmega8 microcontroller. The new project, forked from Wiring, was called Arduino.*
	- *team: Massimo Banzi, David Cuartielles, Tom Igoe, Gianluca Martino, e David Mellis*
- **Open-source**
	- hardware and software
- **Makers** vision - prototyping, tinkering, inventing
- Web site: http://arduino.cc

---
## Slide 4 – Arduino - Team (pre 2015)

![[IOTL02-s004-1.png|600]]

---
## Slide 5 – In lab: Arduino UNO

![[IOTL02-s005-1.png|600]]

>> Etichette della figura: Digital Ground, Analog Reference Pin (AREF), Digital I/O Pins (2-13), Serial Out (TX), Serial In (RX), USB Plug, Reset Button, In-Circuit Serial Programmer (ICSP), ATmega328 Microcontroller, External Power Supply, Reset Pin, 3.3 Volt Power Pin, 5 Volt Power Pin, Ground Pins, Voltage In (Vin), Analog In Pins (0-5).
>> Nota: i pin digitali 0 e 1 sono RX/TX della seriale (condivisi con il convertitore USB), per questo la figura indica come I/O "liberi" i pin 2-13.

---
## Slide 6 -> 8 – Arduino UNO

- Main components
	- MCU ATMega 328P
		- 8 bit, 16 MHz
		- Flash memory: 32 KB
		- SRAM memory: 2 KB, EEPROM: 1 KB
	- 14 digital input/output pins
		- 6 can be used as PWM output
	- 6 analog input
	- USB connector
	- power jack
	- ICSP header
	- reset button

Further specs
- Operating voltage: 5V
- Input voltage (recom.): 7-12 V
- DC current per I/O pin: 40 mA
- DC current per 3.3V: 50mA

https://docs.arduino.cc/hardware/uno-rev3

>> Le tre memorie hanno ruoli diversi: **Flash** (32 KB, non volatile) contiene il programma (e il bootloader, ~0.5 KB); **SRAM** (2 KB, volatile) contiene variabili, heap e stack a runtime; **EEPROM** (1 KB, non volatile) serve per dati da conservare tra un riavvio e l'altro (es. configurazioni).
>> I pin PWM sull'UNO sono 3, 5, 6, 9, 10, 11 (marcati con `~` sulla scheda).
>> 40 mA per pin è il limite *assoluto* (absolute maximum) del datasheet: in pratica conviene restare intorno ai 20 mA per pin.

![[IOTL02-s007-1.png|600]]

- µC to convert serial TTL into USB
- PC connection via USB (power + serial)
- Quartz oscillator for the 16 MHz clock
- External power/batteries (6-20 Volt)
- Pins that provide the reference voltage for circuits: GND, 5 V (3.3V also available)

>> Il "µC to convert serial TTL into USB" sull'UNO R3 è un secondo microcontrollore (ATmega16U2) che fa da ponte USB↔UART: il PC vede una porta seriale virtuale, l'ATmega328P vede una normale seriale TTL sui pin 0/1.
>> 6-20 V è il range ammesso dal regolatore di tensione sul jack; quello raccomandato è 7-12 V (sotto i 7 V il regolatore potrebbe non garantire 5 V stabili, sopra i 12 V scalda troppo).

![[IOTL02-s008-1.png|600]]

- Onboard led, connected to pin 13
- 14 line strip connector => 14 GPIO pins
- power on led
- reset button
- Led signalling TX and RX activities (serial)
- ICSP connector
- 6 analog input strip connector

---
## Slide 9 – Pin specs

- **Digital pins 0..13**
	- nominal voltage: 5V
	- can supply or draw current up to 40mA
- **Analog input A0…A5**
	- nominal voltage: 5V
	- 10-bit resolution
		- 0-5 Volt value => converted by the ADC into a 10-bit value [0..1023 ($2^{10}-1$) ]
		- AREF pin (pin 21) makes it possible to change the reference value (max value) for the ADC

>> Conversione ADC: con riferimento $V_{ref}$ (di default 5 V) il valore letto è $N = \left\lfloor \dfrac{V_{in}}{V_{ref}} \cdot 1023 \right\rfloor$ (circa), e viceversa $V_{in} \approx N \cdot \dfrac{V_{ref}}{1023}$. La risoluzione è $5\,\text{V}/1024 \approx 4.9\,\text{mV}$ per step.
>> Esempio: $V_{in} = 2.5\,\text{V} \Rightarrow N \approx 511$.
>> Usare AREF con una tensione più bassa (es. 1.1 V interno o un riferimento esterno) aumenta la risoluzione per segnali piccoli: AREF non deve mai superare 5 V.

---
## Slide 10 – Esternal power

- Through the PC via USB
- Through batteries or a power supply
	- battery capacity depends on desired battery life, the current drawn
	- Example:
		- If we have an estimated power consumption of 150mA
		- ..and we want a battery life of 8 hours
		=> then the battery capacity should be >=150mA*8 = 1200mAh

>> In formula: $C\,[\text{mAh}] \geq I\,[\text{mA}] \cdot t\,[\text{h}] = 150 \cdot 8 = 1200\,\text{mAh}$. In pratica conviene prendere un margine (es. +20-30%), perché la capacità reale cala con la temperatura, l'età della batteria e correnti elevate, e il regolatore ha perdite.
>> Tecniche di risparmio energetico (sleep mode, step #8 e #9) servono proprio a ridurre la corrente media e quindi allungare la durata.

---
## Slide 11 – Programming

- Reference framework used here: **Wiring**
	- open-source framework for microcontrollers
		- cross-platform, numerose piattaforme supportate - AVR Xmega, AVR Tiny, TI MSP430, Microchip PIC24/32...
	- based on **GNU GCC**, with a set of custom libraries
		- C/C++ language
			- AVR gcc tool chain - avr-gcc compiler
		- libc customized to access and interact with the HW
			- http://www.nongnu.org/avr-libc/
	- large documentation and community
		- http://wiring.org.co/learning/tutorials/
	- link: http://arduino.cc/en/Reference/HomePage, http://wiring.org.co/
- Directly supported by **Arduino IDE**
- Large set of available libraries
	- https://www.arduino.cc/reference/en/libraries/

>> In pratica uno "sketch" Arduino è C++: l'IDE aggiunge automaticamente `#include <Arduino.h>` e un `main()` nascosto che chiama `setup()` una volta e poi `loop()` all'infinito; poi compila con avr-gcc e linka con avr-libc + core Arduino.

---
## Slide 12 – IDE and tools

- Every Integrated Development Environment is meant to be installed on some host PC, connected to Arduino via USB
- **Arduino IDE**
	- very simple and effective for small-size projects
	- based on Wiring framework
	- implemented in Java
	- http://arduino.cc/en/Main/Software
- **PlatformIO** and **Visual Studio Code**
	- for more complex projects
	- PlatformIO - https://platformio.org/
	- Visual Studio code: https://code.visualstudio.com/
		- Arduino plugin extension to be installed
		- PlatformIO extension
- **Simulators**/Emulators
	- https://wokwi.com/
	- An open-source one: Tinkercad - https://www.tinkercad.com/

---
## Slide 13 – Arduino IDE

![[IOTL02-s013-1.png|500]]

>> Lo screenshot mostra l'esempio "Blink" in Arduino IDE 1.0.5: dopo la compilazione l'IDE riporta la dimensione del binario ("Binary sketch size: 1,084 bytes (of a 32,256 byte maximum)"). Il massimo è 32 256 byte e non 32 768 perché 512 byte di Flash sono riservati al bootloader.

---
## Slide 14 – Wiring program structure: super loop

- Wiring adopts the **superloop** as control architecture
- Two main procedures
	- **setup()**
		- instructions to be executed at the program boot, to setup and configure the initial state
		- executed once
	- **loop()**
		- body of the control loop
		- executed repeatedly

>> Equivalente concettuale del `main()` generato dal framework:
>> `int main() { init(); setup(); for (;;) { loop(); } }`
>> Nel super loop non c'è sistema operativo né scheduler: tutto ciò che sta in `loop()` viene eseguito in sequenza, quindi una chiamata bloccante (es. `delay()`) blocca l'intero sistema.

---
## Slide 15 – Program upload and execution

- Two ways to upload a program on Arduino
	- directly by a connected PC, exploiting the **bootloader** preloaded on the MCU
		- http://arduino.cc/en/Tutorial/Bootloader
	- using an external In-System Programmer device, that allows to program the microcontroller through the ICSP (In-Circuit-Serial-Programming) interface
		- http://arduino.cc/en/Main/ArduinoISP
- We are going to used the first one.

>> Il bootloader è un piccolo programma residente in Flash che, all'avvio, ascolta la seriale per un nuovo firmware e lo scrive in Flash (auto-programmazione). Con l'ICSP invece si scrive direttamente la Flash via SPI, senza bisogno del bootloader (ed è anche il modo per installare/ripristinare il bootloader stesso).

---
## Slide 16 – Booting - details

- Once Arduino is reset (either through the button, or the pin, or USB), the bootloader program is executed
- If the bootloader receives immediately a proper command by the IDE (via serial), then it tries to upload the binary sent by the IDE
	- the binary (executable) is downloaded in memory (FLASH) and then executed
	- this occurs each time we select UPLOAD from the IDE => a reset signal is sent to Arduino, starting then the upload protocol
- If the bootloader does not receive any command, them the last executable in memory is executed

>> Il reset "via USB" avviene perché l'apertura della porta seriale da parte del PC fa commutare la linea DTR, collegata (tramite un condensatore) al pin RESET dell'ATmega328P. Conseguenza pratica: anche aprire il Serial Monitor resetta la scheda e fa ripartire lo sketch da `setup()`.

---
## Slide 17 -> 18 – Runtime - memory map

- Memory map made by the compiler avr-gcc / segments:
	- .data (global vars), .bss (constants), heap, stack
- Note
	- heap and stack grows in opposite directions
		- can collide in the case of memory overflow

![[IOTL02-s017-1.png|600]]

>> Precisazione: in avr-gcc `.data` contiene le variabili globali/statiche **inizializzate** (i valori iniziali sono copiati dalla Flash alla RAM all'avvio), mentre `.bss` contiene le variabili globali/statiche **non inizializzate** (azzerate all'avvio), non le costanti.
>> Nel diagramma: lo heap (gestito da `malloc`) cresce verso indirizzi alti a partire da `__malloc_heap_start` (= fine di `.bss`); lo stack parte da `RAMEND` e cresce verso il basso (SP = stack pointer). `__brkval` è l'attuale fine dello heap; `malloc` rifiuta di allocare oltre `SP - __malloc_margin`, ma lo stack non ha controlli: una ricorsione profonda o array locali grandi possono sovrascrivere lo heap.
>> La parte "external RAM" (0x1100-0xFFFF) riguarda MCU AVR con bus di memoria esterna (es. ATmega128): l'ATmega328P non ce l'ha.

- Internal registers (including I/O, timer..) are mapped onto 0..0xFF address space
	- so the first useful memory address is 0x100 ($100) i.e. 256 and the last is 0x8FF ($8FF) i.e. 2303 (256 + 2KiB)

![[IOTL02-s018-1.png|600]]

>> Conto: $0\text{x}100 = 256$, la SRAM è 2 KiB $= 2048$ byte, quindi gli indirizzi validi vanno da 256 a $256 + 2048 - 1 = 2303 = 0\text{x}8\text{FF}$ (quindi `RAMEND` = 0x8FF sull'ATmega328P).
>> I registri mappati in memoria (32 registri generali + 64 registri I/O + 160 registri I/O estesi = 256 byte) permettono di controllare le periferiche semplicemente leggendo/scrivendo a indirizzi fissi.

---
## Slide 19 – Lab work environment setup

- Hardware
	- host computer + Arduino UNO + cable
	- basic electronic components
		- breadboard
		- resistors: 220 Ω, 1KΩ, 10 KΩ
		- led, tactile button, potentiometer
- Software
	- **Arduino IDE**
		- framework Wiring
	- to draw circuit parts:
		- **Tinkercad (open source)**
		- Eagle, *Fritzing*
- Shared instruments
	- tester (multimeter)

>> Uso tipico delle resistenze del kit: 220 Ω in serie ai LED (limitazione di corrente), 10 kΩ come pull-down/pull-up per il pulsante, 1 kΩ per usi generici (es. in serie a una base di transistor).

---
## Slide 20 – Material: the breadboard

- Useful for creating circuits without soldering
	- https://en.wikipedia.org/wiki/Breadboard

![[IOTL02-s020-1.png|350]]

- Main points
	- terminal strips - the main areas, to hold most of the electronic components.
		- In the middle of a terminal strip of a breadboard, one typically finds a notch running in parallel to the long side. The notch is to mark the centerline of the terminal strip. The clips on the right and left of the notch are each connected in a radial way; typically five clips (i.e., beneath five holes) in a row on each side of the notch are electrically connected.
	- Bus strips - To provide power to the electronic components
		- connected horizontally

>> In pratica: nella zona centrale ogni colonnina di 5 fori (perpendicolare alla scanalatura) è un unico nodo elettrico, e le due metà ai lati della scanalatura sono isolate tra loro (per questo i circuiti integrati DIP si piazzano a cavallo della scanalatura). Le bus strip ai bordi (linee rossa `+` e blu `-`) corrono per tutta la lunghezza e si usano per distribuire 5 V e GND.
>> Errore classico: inserire entrambi i piedini di un componente nella stessa colonnina di 5 fori, cortocircuitandolo.

---
## Slide 21 – Jumpers

![[IOTL02-s021-1.png|300]]
(male-male)

![[IOTL02-s021-2.png|300]]
(male-female)

---
## Slide 22 – Warning

- **Avoid short circuits**
	- short circuit = connection between 2 points of a circuit with resistance zero and imposing an electric voltage to the ends > 0 => ~infinite current (Ohm law)
	- can burn components and Arduino as well
- Check the **max current** that be absorbed by a component
	- too much current => damages
- Check the **max current** to be absorbed by a pin of the MCU
- Check the component **polarity**
	- e.g. leds

>> Legge di Ohm: $I = V/R$; con $R \to 0$ e $V > 0$ si ha $I \to \infty$ (in realtà la corrente è limitata dalla resistenza interna della sorgente, ma è comunque abbastanza alta da danneggiare componenti o la porta USB).
>> Esempio tipico: collegare un pin configurato come `OUTPUT` a `HIGH` direttamente a GND, oppure 5 V direttamente a GND sulla breadboard.

---
## Slide 23 – First activities in lab

- Step #1 - Blinking internal led
- Step #2 - Blinking external led
- Step #3 - Blinking with log
- Step #4 - Button-Led
- Step #5 - Controlled Fading
- Step #6 - Counting (about interrupts)
- Step #7 - Event-driven blinking with Timers
- Step #8 - Deep sleep with interrupts
- Step #9 - Light sleep with timers
- Step #10 - Asynchronous serial: Serial echo
- Step #11 - Discovering I²C devices
- Step #12 - Using an I²C LCD

---
## Slide 24 – Step #1 - Blinking internal led

- **Description**
	- The system must blink the on-board led periodically, with a 1000 ms period
- **Highlights**
	- how the super loop works
	- digital I/O - output
	- Wiring API
		- **pinMode**, **digitalWrite**
		- **delay**

>> API usate: `pinMode(pin, mode)` configura il pin come `INPUT`, `OUTPUT` o `INPUT_PULLUP`; `digitalWrite(pin, value)` porta il pin a `HIGH` (5 V) o `LOW` (0 V); `delay(ms)` blocca l'esecuzione (busy waiting) per il numero di millisecondi indicato.

---
## Slide 25 – Code

```cpp
#define LED_PIN 13

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(1000);
  digitalWrite(LED_PIN, LOW);
  delay(1000);
}
```

>> Attenzione al significato di "period": con questo codice il LED resta acceso 1000 ms e spento 1000 ms, quindi un ciclo completo dura 2000 ms (frequenza 0.5 Hz). Per un periodo complessivo di 1000 ms servirebbero due `delay(500)`.
>> `LED_PIN 13` è il LED on-board (in alternativa si può usare la costante predefinita `LED_BUILTIN`).

---
## Slide 26 – Step #2: Blinking an external led

- **Description**
	- Blinking an external led, with a 1000 ms period
- HW
	- led, 220 Ohm resistor
- **Highlights**
	- HW
		- led - polarity
	- how to compute the resistance needed

---
## Slide 27 – What's a LED

- LED (Light Emitting Diode)
	- optoelectronic devices — a diode that produces light when a current passes through
	- has a polarity
	- https://en.wikipedia.org/wiki/Light-emitting_diode
- It has an operating voltage, that depends on the color
	- examples
		- green: 2.0 V
		- red: 1.3 V
- Current consumption: 10..20 mA

![[IOTL02-s027-1.png|150]]

>> Nella figura: **anodo** (+, gamba più lunga) e **catodo** (−, gamba più corta, lato piatto del bordo del LED); in basso il simbolo circuitale del diodo con le frecce di emissione di luce. La corrente scorre dall'anodo al catodo: se il LED è montato al contrario non si accende (è polarizzato inversamente).
>> I valori tipici di forward voltage sono più spesso indicati come ~1.8-2.2 V per il rosso, ~2-3 V per il verde, ~3-3.4 V per blu/bianco: fa fede il datasheet del componente.

---
## Slide 28 – Circuits

![[IOTL02-s028-1.png|500]]

![[IOTL02-s028-2.png|300]]

>> Collegamento (breadboard Fritzing e schema elettrico): pin digitale D13 → resistenza 220 Ω → anodo del LED (LED1) → catodo → GND di Arduino. L'ordine resistenza/LED in serie è indifferente, conta solo il verso del LED.
>> Sul pin 13 è collegato anche il LED on-board: con questo circuito lampeggiano entrambi.

---
## Slide 29 – Why choosing that resistor?

- The resistor makes it possible to have the right current quantity flowing through the LED, according its specs on the data sheet
	- https://learn.adafruit.com/all-about-leds/the-led-datasheet
- In order to work properly a LED should have a tension between + and - terminal (Forward Voltage) of about 2 Volt (between 1.8 and 3, depending on the color). 5 V are too much => going to break the LED if used for long time
- Given the 5V (when the pin is HIGH), we want 2V on the LED, then we need a resistor to make a voltage drop of 3 volts (3 - 2)
- Besides the tension, the LED datasheet reports that a LED works properly with a current (DC Forward Current) about 20 mA (30 mA max)
	- Arduino can supply max 40mA in output on a pin, so 20mA are ok
- Applying Ohm's law: the resistance R to be chosen to have a voltage drop of 3V and a current of 20mA is R = V / I = 3 / 0.02 = 150 Ohm
	- the greater is the R value, less luminous is the LED
- We use a 220 Ohm resistor from our kit

>> Il calcolo in forma generale: $R = \dfrac{V_{pin} - V_F}{I_F} = \dfrac{5 - 2}{0.02} = 150\,\Omega$ (la caduta sulla resistenza è $5 - 2 = 3$ V; il "(3 - 2)" della slide va letto come $5 - 2$).
>> Con la 220 Ω del kit: $I = \dfrac{5 - 2}{220} \approx 13.6\,\text{mA}$, sotto i 20 mA nominali → LED leggermente meno luminoso ma più margine di sicurezza sia per il LED sia per il pin.
>> Potenza dissipata dalla resistenza: $P = R I^2 = 220 \cdot (0.0136)^2 \approx 41\,\text{mW}$, ben sotto i 250 mW di una resistenza da 1/4 W.

---
## Slide 30 – 220 Ohm resistor

- Resistance bands to compute the value of resistance
	- e.g. 4-bands resistors
- 220 Ohm => red-red-brown

![[IOTL02-s030-1.png|250]]![[IOTL02-s030-2.png|400]]

| Colore | Cifre significative | Moltiplicatore | Tolleranza |
|---|---|---|---|
| Argento | | 0,01 | 10% |
| Oro | | 0,1 | 5% |
| Nero | 0 | 1 | |
| Marrone | 1 | 10 | 1% |
| Rosso | 2 | 100 | 2% |
| Arancio | 3 | 1K | |
| Giallo | 4 | 10K | |
| Verde | 5 | 100K | |
| Blu | 6 | 1M | |
| Viola | 7 | 10M | |
| Grigio | 8 | | |
| Bianco | 9 | | |

>> Lettura di una resistenza a 4 bande: 1ª e 2ª banda = cifre significative, 3ª = moltiplicatore, 4ª (spesso oro/argento, distanziata) = tolleranza.
>> 220 Ω: rosso (2), rosso (2), marrone (×10) → $22 \cdot 10 = 220\,\Omega$. Per confronto: 1 kΩ = marrone-nero-rosso ($10 \cdot 100$), 10 kΩ = marrone-nero-arancio ($10 \cdot 1000$).

---
## Slide 31 – Step #3: Blinking with log

- **Description**
	- Blinking + logging using the serial connection
- HW
	- led, 220 Ohm resistor
- **Highlights**
	- how to use the serial line and the serial monitor to print and visualise messages — good for debugging

---
## Slide 32 – Code

```cpp
#define LED_PIN 13

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  digitalWrite(LED_PIN, HIGH);
  Serial.println(“ON”);
  delay(1000);
  digitalWrite(LED_PIN, LOW);
  Serial.println(“OFF”);
  delay(1000);
}
```

>> Nella slide le stringhe hanno virgolette "tipografiche" (“ ”): nel codice reale vanno usate le virgolette dritte `"ON"` / `"OFF"`, altrimenti il compilatore dà errore.
>> `Serial.begin(9600)` inizializza la UART a 9600 baud (bit/s): il Serial Monitor dell'IDE deve essere impostato sullo stesso baud rate, altrimenti si vedono caratteri spazzatura. Con il formato 8N1 ogni carattere occupa 10 bit, quindi a 9600 baud si trasmettono ~960 caratteri/s.
>> `Serial.println` aggiunge in coda `\r\n` (a capo); `Serial.print` no.
---
## Slide 33 – DETAILS: SERIAL OUTPUT

- Exploiting the serial connection with the PC to send messages that are displayed on PC window
	- useful for logging e for debugging
- In Wiring: **Serial library**
	- http://arduino.cc/en/reference/serial
	- class **Serial**
		- among the methods (static):
			- **begin**
				- to initialize a serial communication session, specifying the baud rate
			- **print/println**
				- to send string messages
			- write/read - per send/receive byte blocks

>> Su Arduino UNO la seriale è la UART dell'ATmega328P (pin 0 = RX, 1 = TX), collegata al PC tramite il convertitore USB-seriale della scheda: per questo, mentre si usa `Serial`, i pin digitali 0 e 1 non vanno usati per altro.
>> `print` invia il testo così com'è, `println` aggiunge in coda `\r\n` (a capo). `write` invece invia byte grezzi (es. `Serial.write(65)` invia il byte 65, che il monitor mostra come `A`, mentre `Serial.print(65)` invia i caratteri `6` e `5`).
>> Baud rate = simboli al secondo; con la configurazione standard 8N1 ogni byte costa 10 bit (start + 8 dati + stop), quindi a 9600 baud si trasmettono circa 960 byte/s: stampare molto rallenta il loop.

---
## Slide 34 – SERIAL MONITOR

- Feature provided by Arduino IDE to:
	- visualise messages sent through the serial connection
	- send messages as well
- It uses a configurable baud rate
	- which must be the same used on the Arduino side

>> Se il baud rate del Serial Monitor è diverso da quello passato a `Serial.begin(...)` si vedono caratteri "spazzatura": i due lati campionano i bit a velocità diverse.

---
## Slide 35 – STEP #4 - BUTTON-LED

- **Description**
	- system with a tactile button + led. The led must be on when the button is pressed and off when the button is released
- HW
	- led, 1 resistor 220 Ω, tactile button, 1 resistor 10 KΩ
- **Highlights**
	- digital I/O - input e output
		- Wiring API:
			- **digitalRead**
	- pull-down resistance

---
## Slide 36 – CIRCUITS

![[IOTL02-s036-1.png|500]]

![[IOTL02-s036-2.png|500]]

>> Lettura dello schema: un lato del pulsante S1 è collegato a VCC (5V), l'altro al pin D2 e, tramite R3 (10 kΩ), a GND (resistenza di pull-down). Il LED verde D1 è collegato al pin D13 in serie con R2 (220 Ω) verso GND.
>> Corrente nel LED: $I = \frac{V_{CC} - V_f}{R} \approx \frac{5\,V - 2\,V}{220\,\Omega} \approx 13.6\,mA$, sotto il limite di circa 20 mA consigliato per pin.

---
## Slide 37 – PULL-DOWN RESISTOR

- pull-down resistor (10 KΩ) is used to make sure that — when the button is not pressed — the voltage level on the input pin would be LOW
	- "pull-down" because the signal is forced to LOW (GND)
	- "pull-up" instead => forced to HIGH (VCC)
- Big resistance value (es: 10 KΩ)
	- to minimise the current that flows in that part of the circuit

>> Senza resistenza, a pulsante aperto il pin sarebbe "flottante" (non collegato a nulla): l'ingresso ad alta impedenza capta rumore e `digitalRead` restituirebbe valori casuali.
>> A pulsante premuto il pin è collegato direttamente a VCC e nella pull-down scorre $I = \frac{5\,V}{10\,k\Omega} = 0.5\,mA$: piccola, ed è il motivo per cui si usa un valore grande. Con un valore piccolo (es. 100 Ω) si avrebbero 50 mA sprecati, praticamente un corto.
>> L'ATmega328P ha anche pull-up interne (circa 20–50 kΩ) attivabili con `pinMode(pin, INPUT_PULLUP)`: in quel caso il pulsante va verso GND e la logica si inverte (premuto = LOW).

---
## Slide 38 – CODE

```cpp
#define BUTTON_PIN 2
#define LED_PIN 13

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);
  Serial.begin(9600);
}

void loop() {
  int buttonState = digitalRead(BUTTON_PIN);
  if (buttonState == HIGH) {
    digitalWrite(LED_PIN, HIGH);
    Serial.println(“ON”);
  } else {
    digitalWrite(LED_PIN, LOW);
    Serial.println(“OFF”);
  }
}
```

>> Attenzione: sulla slide le stringhe hanno le virgolette "tipografiche" (`“ON”`); per compilare vanno sostituite con le virgolette dritte `"ON"`.
>> Nota: così il messaggio viene stampato a ogni iterazione del loop (migliaia di volte al secondo, limitate solo dalla seriale); per stampare solo i cambi di stato si confronta con lo stato precedente.

---
## Slide 39 – ABOUT POLLING

- The approach used here to detect the button pressed is based on *polling*
	- *periodical read of the state of the pin*
- Problem
	- if the button is pressed too fast, it could happen that it is not detected..

>> Il polling funziona solo se il periodo del loop è più breve della durata dell'evento: se nel loop ci sono operazioni lente (es. `delay(500)`), una pressione di 100 ms può cadere interamente tra due letture e andare persa. L'alternativa è l'approccio a interruzioni (Step #6), dove è l'hardware a segnalare l'evento.

---
## Slide 40 – STEP #5 - CONTROLLED FADING

- **Description**
	- Fading a led by means of a potentiometer.
- HW
	- 1 potentiometer
	- 1 led, 220 Ω resistor
- **Highlights**
	- analog pin reading
	- analog output using **PWM**
		- pins marked with ~
			- 3,5,6,9,10,11
	- Wiring API
		- **analogRead**
		- **analogWrite**

>> PWM (Pulse Width Modulation): il pin resta digitale (0 o 5V) ma commuta velocemente (circa 490 Hz, 980 Hz sui pin 5 e 6) con un duty cycle variabile. `analogWrite(pin, v)` con $v \in [0, 255]$ dà duty cycle $v/255$ e tensione media $V_{avg} = 5\,V \cdot \frac{v}{255}$ (es. $v = 128 \Rightarrow \approx 2.5\,V$). L'occhio integra il lampeggio e percepisce una luminosità intermedia.
>> `analogRead` usa l'ADC a 10 bit dell'ATmega328P: restituisce $0..1023$, con risoluzione $5\,V/1024 \approx 4.9\,mV$.

---
## Slide 41 – A POTENTIOMETER

![[IOTL02-s041-1.png|200]]

The voltage across the potentiometer (the two legs) varies between zero and VCC (5 volts), depending on the rotation of the knob

![[IOTL02-s041-2.png|400]]

![[IOTL02-s041-3.png|500]]

>> Il potenziometro è un partitore di tensione regolabile: il cursore divide la resistenza totale in $R_1$ e $R_2$ (con $R_1 + R_2$ costante), e la tensione sul cursore è $V_{out} = V_S \cdot \frac{R_2}{R_1 + R_2}$. Ruotando la manopola si passa da $R_2 = 0$ ($V_{out} = 0$) a $R_1 = 0$ ($V_{out} = V_S$).
>> Collegamento: i due estremi a 5V e GND, il piedino centrale (cursore) ad A0. $R_L$ nello schema è il carico: l'ingresso analogico ha impedenza alta, quindi altera poco il partitore.

---
## Slide 42 – CODE

```cpp
#define POT_PIN A0
// one supporting PWM
#define LED_PIN 9

int current;

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  /* reading the potentiometer: 0..5V mapped into 0..1023 */
  int newValue = analogRead(POT_PIN);
  if (newValue != current){
     current = newValue;
     /* map it to the range of the analog out: 0..255 */
     int outputValue = map(current, 0, 1023, 0, 255);
     analogWrite(LED_PIN, outputValue);
 }
}
```

>> `map(x, inMin, inMax, outMin, outMax)` calcola in aritmetica intera $out = (x - inMin)\cdot\frac{outMax - outMin}{inMax - inMin} + outMin$; qui equivale a $current \cdot 255 / 1023$ (circa una divisione per 4, cioè `current >> 2`).
>> Il controllo `newValue != current` evita di riscrivere il PWM se il valore non cambia; in pratica l'ADC ha rumore di ±1 LSB, quindi il valore cambia spesso comunque.

---
## Slide 43 – STEP #6 - "COUNTING"

- **Description**
	- system that visualizes a count, which is incremented each time a button is pressed
- HW
	- a tactile button, a 10 KΩ resistor
- **Highlights**
	- interrupt
- **Problems**
	- bouncing problem
	- concurrency problems

---
## Slide 44 – CIRCUITS

![[IOTL02-s044-1.png|500]]

>> Stesso collegamento del pulsante con pull-down dello Step #4 (pulsante tra 5V e pin 2, 10 kΩ verso GND), senza LED. Il pin 2 non è casuale: su Arduino UNO solo i pin 2 e 3 supportano le interruzioni esterne (INT0 e INT1) usabili con `attachInterrupt`.

---
## Slide 45 – CODE

```cpp
#define BUTTON_PIN 2
volatile int count = 0;
int prev = 0;

void setup(){
  Serial.begin(9600);
  attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), inc, RISING);
}

void loop(){
  noInterrupts();
  int current = count;
  interrupts();
  if (current != prev){
    Serial.println(current);
    prev = current;
  }
}

void inc(){
  count++;
}
```

```cpp
// versione che conta bene il count del buttone
#define BUTTON_PIN 2
#define DEBOUNCING_INTERVAL 200

volatile int count; //lo mettiamo volatile in modo che non venga messo nella cash
int lastCountPrinted;
unsigned long previousPressedTime;

void setup(){
  pinMode(BUTTON_PIN, INPUT);
  count = 0;
  lastCountPrinted = 0;
  previousPressedTime = 0;
  Serial.begin(9600);
  attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), inc, RISING);
  //RISING triggera quando il pin passa da LOW to HIGH
}
void loop(){
  noInterrupts();
  int currentCount = count;
  interrupts();
  if(currentCount != lastCountPrinted) {
    Serial.println(String("count: ") + currentCount + " - " + previousPressedTime);
    lastCountPrinted = currentCount;
  }
}
void inc(){
  unsigned long currentTime = millis();
  if (currentTime - previousPressedTime > DEBOUNCING_INTERVAL) {
    count++;
    previousPressedTime = currentTime;
  }
 delay(1000) //questo delay aggisce sul loop quindi il bottone riceve comunque l'incremento
ma il superloop con questo delay non arriva a stampare ogni volta i singoli incrementi
}
```

>> `attachInterrupt(n, isr, mode)`: `digitalPinToInterrupt(2)` traduce il pin nel numero di interrupt (0 per il pin 2 su UNO); `mode` può essere `RISING`, `FALLING`, `CHANGE` o `LOW`. Con la pull-down, premere il pulsante porta il pin da LOW a HIGH, quindi `RISING` = "pressione".
>> `volatile` dice al compilatore che la variabile può cambiare "fuori" dal flusso normale (nell'ISR), quindi deve rileggerla dalla memoria ogni volta invece di tenerla in un registro (più che di "cache", sull'AVR si tratta di registri: l'ATmega328P non ha cache).
>> Nella versione con debounce, dentro l'ISR `millis()` non avanza (gli interrupt sono disabilitati durante l'ISR) ma restituisce comunque il valore corretto al momento dell'ingresso, quindi è usabile per confrontare i tempi. `delay()` invece dentro un'ISR non va usato (si basa sugli interrupt del Timer0): l'annotazione finale va letta come un `delay(1000)` messo nel `loop()`.

---
## Slide 46 – BOUNCING PROBLEM

- **Bouncing** - physical phenomenon affecting tactile buttons
	- when pressed, there could be multiple internal mechanical rebounds before stabilising (in some milliseconds)
- These rebounds can generate a sequence of spurious interrupts
	- the counter is incremented more than 1 time
- Solutions (at the code level):
	- **we can solve the problem by ignoring all the impulses that arrive shortly after the first one** (e.g. 20-30 milliseconds)

>> Il debouncing software è proprio la logica della versione annotata della slide precedente: si salva l'istante dell'ultimo impulso accettato e si scartano quelli che arrivano entro `DEBOUNCING_INTERVAL` ms. Esiste anche il debouncing hardware (es. filtro RC + trigger di Schmitt) che pulisce il segnale prima che arrivi al pin.
>> Il confronto `currentTime - previousPressedTime > INTERVAL` con `unsigned long` funziona correttamente anche quando `millis()` va in overflow (dopo circa 49,7 giorni), grazie all'aritmetica modulare degli unsigned.

---
## Slide 47 – ATOMICITY/CRITICAL SECTIONS

- In the control loop, the assignment of the count variable (that could be concurrently accessed by the interrupt handler too) must be atomic, i.e. should not be interruptible — to avoid race conditions
	- critical section
- To this purpose we can disable (and reenable) interrupts
	- **noInterrupts**()/**interrupts**()
- When interrupts are disabled, the MCU does is *not reactive* to external events (that are lost) => we should minimise the period of time in which interrupts are disabled
	- short-time interrupt handlers

>> Perché serve anche per una semplice lettura: sull'AVR (8 bit) un `int` è a 16 bit, e leggerlo richiede due istruzioni (byte basso e byte alto). Se l'ISR interviene tra le due e incrementa `count` da 255 a 256, il loop può leggere un byte "vecchio" e uno "nuovo", ottenendo un valore sbagliato (es. 511 o 0).
>> Più precisamente, un evento che arriva a interrupt disabilitati di solito non si perde subito: il flag dell'interrupt resta pendente e l'ISR parte appena si riabilitano. Si perdono però gli eventi multipli dello stesso tipo arrivati nel frattempo (il flag è uno solo).

---
## Slide 48 – FURTHER REMARKS

- Not all increments are printed…
- The reason is that logging is done asynchronously with respect to increment => there could be more than one increment between two logs

>> Esempio: se il loop è occupato a trasmettere sulla seriale (a 9600 baud circa 1 ms per carattere) e nel frattempo arrivano due pressioni, alla lettura successiva `count` è salito di 2 e si stampa solo l'ultimo valore. Il conteggio resta corretto, è solo la stampa a "saltare" dei valori.

---
## Slide 49 – STEP #7 - EVENT-DRIVEN BLINKING

- **Description**
	- blinking the led by means of timer interrupts
- HW
	- led, 220 Ohm resistor
- **Highlights**
	- timer, library Timer1
		- [https://www.arduino.cc/reference/en/libraries/timerone/](https://www.arduino.cc/reference/en/libraries/timerone/)
	- how to install a library on the IDE

>> Per installare la libreria: nell'IDE, Library Manager (Sketch → Include Library → Manage Libraries…), cercare "TimerOne" e installarla.
>> Timer1 è il timer a 16 bit dell'ATmega328P (Timer0 è usato da `millis()`/`delay()`, Timer2 da `tone()`). Usare Timer1 disabilita il PWM sui pin 9 e 10, che dipendono da quel timer.

---
## Slide 50 – CODE

```cpp
#include "TimerOne.h"

#define LED_PIN 13

boolean flagState = false;

void blinky(){
  if (!flagState){
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }
  flagState = !flagState;
}

void setup()
{
  pinMode(LED_PIN,OUTPUT);
  /* set period timer 1000000 usec = 1 sec */
  Timer1.initialize(1000000);
  Timer1.attachInterrupt(blinky);
}

void loop(){}
```

>> Il `loop()` è vuoto: tutto il comportamento è guidato dall'evento "scadenza del timer" (approccio event-driven). `blinky` viene chiamata ogni secondo, quindi il LED cambia stato ogni 1 s e il periodo completo di lampeggio è 2 s (frequenza 0,5 Hz).
>> A rigore, `flagState` andrebbe dichiarata `volatile` se fosse letta anche nel loop; qui è usata solo nell'ISR, quindi non è necessario.

---
## Slide 51 – STEP #8 - DEEP SLEEPING

- **Description**
	- testing sleep modes for low power consumption
		- Start with deep sleep
- HW
	- tactile button and 10 KΩ resistor
- **Highlights**
	- events that break the sleep and trigger restarting
	- time needed to restart

---
## Slide 52 – CIRCUITS

![[IOTL02-s052-1.png|500]]

>> Stesso circuito dello Step #6: pulsante con pull-down sul pin 2 (INT0). Qui l'interrupt del pulsante serve a risvegliare il microcontrollore.

---
## Slide 53 – CODE

```cpp
#include <avr/sleep.h>

void wakeUp(){}

void setup(){
  Serial.begin(9600);
  pinMode(2,INPUT);
  attachInterrupt(digitalPinToInterrupt(2), wakeUp, RISING);
}

void loop(){
  Serial.println("POWER DOWN IN 1s ...");
  Serial.flush();
  delay(1000);

  set_sleep_mode(SLEEP_MODE_PWR_DOWN);
  sleep_enable();
  sleep_mode();
  /** The program will continue from here. **/
  Serial.println("WAKE UP");
  /* First thing to do is disable sleep. */
  sleep_disable();
}
```

>> `SLEEP_MODE_PWR_DOWN` è la modalità più profonda: si fermano clock della CPU, dei periferici e quasi tutti gli oscillatori (anche i timer, quindi `millis()` si ferma). Può risvegliare la MCU solo un evento asincrono: interrupt esterno, pin change, watchdog o riconoscimento dell'indirizzo TWI (I2C).
>> `Serial.flush()` attende che tutti i byte in uscita siano trasmessi: senza, la MCU si addormenterebbe a messaggio non ancora inviato. `wakeUp` è vuota perché all'ISR non serve fare nulla: basta che l'interrupt arrivi per uscire dallo sleep, e l'esecuzione riprende dall'istruzione successiva a `sleep_mode()`.
>> `sleep_mode()` equivale a `sleep_enable()` + istruzione `SLEEP` + `sleep_disable()`; il bit di enable serve a evitare di addormentarsi per errore.

---
## Slide 54 – STEP #9: LIGHT SLEEPING

- **Description**
	- testing light sleep mode in which timers go on working
- **Highlights**
	- disabling selectively the components that are not needed
	- useful approach for implementing schedulers (future modules)

---
## Slide 55 – CODE

```cpp
#include <avr/sleep.h>
#include <avr/power.h>
#include "Timer.h"
Timer* timer;

void setup(){
  Serial.begin(9600);
  timer = new Timer(); /* timer 1 */
  timer->setupPeriod(5000);
}

void sleep(void)
{
  set_sleep_mode(SLEEP_MODE_IDLE);
  sleep_enable();
  power_adc_disable();
  power_spi_disable();
  power_timer0_disable(); // only timer 1
  power_timer2_disable(); // on
  power_twi_disable();
  sleep_mode();
  /* back */
  sleep_disable();
  power_all_enable();
}
```

```cpp
void loop(){
  Serial.println("GOING TO SLEEP");
  Serial.flush();
  sleep();
  Serial.println("WOKE UP");
}
```

>> In `SLEEP_MODE_IDLE` si ferma solo la CPU; periferiche e timer continuano a funzionare, quindi l'interrupt periodico del Timer1 (ogni 5000 ms impostati con `setupPeriod`) risveglia la MCU. Per risparmiare ancora si spengono con le funzioni `power_*_disable()` i moduli non necessari: ADC, SPI, Timer0, Timer2, TWI (I2C). Resta acceso il Timer1 ("only timer 1 on") e la USART per la seriale.
>> Disabilitando Timer0 si ferma anche `millis()`. `Timer.h` qui è una piccola classe del corso che incapsula il Timer1, non una libreria standard.
>> Questo schema (dormi fino al prossimo tick del timer, poi esegui i task) è la base degli scheduler a tempo dei moduli successivi.

---
## Slide 56 – STEP #10 - SERIAL ECHO

- **Description**
	- reading messages sent from the serial line and send them back
- **Highlights**
	- library Serial

---
## Slide 57 – CODE

```cpp
void setup()
{
  Serial.begin(9600);
}

void loop()
{
  if (Serial.available()){
    char data = Serial.read();
    Serial.print(data);
  }
}
```

>> `Serial.available()` restituisce il numero di byte già ricevuti e in attesa nel buffer di ricezione (64 byte su UNO, riempito dall'ISR della UART); `Serial.read()` ne estrae uno (o restituisce -1 se il buffer è vuoto). Il loop rimanda indietro un carattere alla volta, quindi il Serial Monitor mostra esattamente ciò che si è inviato.

---
## Slide 58 – STEP #11 - DISCOVERING I²C DEVICES

- **Description**
	- Scanning the I²C bus for discovering the devices
- **Highlights**
	- Wire.h library
	- I²C device used: an LCD

>> I²C è un bus seriale sincrono a due fili: SDA (dati) e SCL (clock), entrambi con pull-up. Ogni dispositivo secondario ha un indirizzo a 7 bit; il primario avvia ogni trasferimento inviando l'indirizzo, e il dispositivo che lo riconosce risponde con un ACK. Su Arduino UNO SDA = A4 e SCL = A5.

---
## Slide 59 – DISPLAY LCD

- Display based on the optical properties of liquid crystals
	- trapped between two glass surfaces, equipped with many electrical contacts that can generate an electric field affecting the liquid
	- each electric contact control a small portion of the panel that corresponds to a pixel (or a subpixel in a color screen)
- Small power consumption
	- very good for embedded systems

>> I cristalli liquidi non emettono luce: modulano (ruotandone la polarizzazione) la luce che li attraversa, proveniente dalla retroilluminazione o riflessa. Per questo consumano poco; nei moduli 16x2 la parte che consuma di più è proprio la retroilluminazione.

---
## Slide 60 – PARALLEL LCD SCREEN

- A very common example is the parallel LCD screen 16x2 (16 colums, 2 rows), characterised by a single line of 16 pins
- All parallel LCD screen have the same pinout and can be connected to Arduino in different ways:
	- 4 pins or 8 pins
		- 8 pins mode: 6 pins must be connected to digital pins + 2 for VCC and GND
		- 6 pins mode: 4 pins are used to send the data and the other 2 for control
	- **via I2C**
		- **es: [http://www.robot-italy.com/it/display-lcd-16-x-2-blu-i2c.html](http://www.robot-italy.com/it/display-lcd-16-x-2-blu-i2c.html)**
- Programming
	- LiquidCrystal Library provided with Arduino IDE (with I2C version)
	- many functionalities
		- cursor blinking, scrolling, customised chars creation, etc.

>> Questi moduli usano il controller HD44780. Nel modo a 4 bit (il più usato) servono 6 pin digitali: 4 di dati (D4–D7) + RS (dato/comando) + E (enable), più alimentazione; nel modo a 8 bit servono 8 linee dati + RS + E.
>> La versione I2C aggiunge sul retro un "backpack" (tipicamente un expander PCF8574) che converte I2C nel bus parallelo: bastano 4 fili (VCC, GND, SDA, SCL) invece di 6+.

---
## Slide 61 – CONNECTING A I²C-BASED LCD TO BE DISCOVERED

![[IOTL02-s061-1.png|500]]

- Arduino is the primary (master) device
- The LCD is a secondary (slave)

>> Collegamenti in figura: GND → GND, VCC → 5V, SDA → A4, SCL → A5.

---
## Slide 62 – CODE

```cpp
#include <Wire.h>

void setup() {
  Wire.begin();
  Serial.begin(9600);
  while (!Serial);
  Serial.println("\nI2C Scanner");
}

void loop() {
  byte error, address; int nDevices;
  Serial.println("Scanning...");
  nDevices = 0;
  for (address = 1; address < 127; address++ ) {
    Wire.beginTransmission(address);
    error = Wire.endTransmission();
    if (error == 0) {
      Serial.print("I2C device found at address 0x");
      if (address < 16) Serial.print("0");
      Serial.print(address, HEX);
      Serial.println("  !");
      nDevices++;
    } else if (error == 4) {
      Serial.print("Unknown error at address 0x");
      if (address < 16)
        Serial.print("0");
      Serial.println(address, HEX);
    }
  }
  …
```

```cpp
  …

  if (nDevices == 0)
    Serial.println("No I2C devices found\n");
  else
    Serial.println("done\n");

  delay(5000);
}
```

>> Lo scanner prova tutti gli indirizzi a 7 bit da 1 a 126: `beginTransmission` + `endTransmission` inviano solo l'indirizzo, senza dati. `endTransmission` restituisce 0 se un dispositivo ha risposto con ACK, 2 se l'indirizzo non ha ricevuto risposta (NACK), 4 per altri errori: per questo si stampa solo il caso 0 (trovato) e il caso 4.
>> `if (address < 16) Serial.print("0")` serve solo a stampare sempre due cifre esadecimali (es. `0x0A` invece di `0xA`). Per l'LCD con backpack PCF8574 l'indirizzo tipico è `0x27` (o `0x3F`).

---
## Slide 63 – STEP #12 - USING AN I²C LCD

- **Description**
	- Using a I²C-based LCD
- **Highlights**
	- Abstracting from I²C specific code by means of device-specific libraries

---
## Slide 64 – CODE

```cpp
#include <LiquidCrystal_I2C.h>

/* Wiring: SDA => A4, SCL => A5  */
/* I2C address of the LCD: 0x27  */
/* Number of columns: 20 rows: 4 */

LiquidCrystal_I2C lcd = LiquidCrystal_I2C(0x27,20,4);

void setup() {
  lcd.init();
  lcd.backlight();
}

void loop() {
  /* Set the cursor on the third column and first row. */
  lcd.setCursor(2, 1);
  lcd.print("Hello World!");
}
```

>> Il costruttore prende l'indirizzo trovato con lo scanner (0x27) e le dimensioni del display (qui 20x4; per un 16x2 si userebbe `(0x27,16,2)`). La libreria nasconde completamente i dettagli I2C: si usano solo metodi di alto livello come `setCursor` e `print`.
>> `setCursor(col, row)` usa indici che partono da 0: `(2, 1)` è la terza colonna della **seconda** riga (la prima riga sarebbe `row = 0`), quindi il commento nel codice è impreciso.
>> Riscrivere il testo a ogni iterazione del loop è inutile (il display lo mantiene): basterebbe farlo una volta in `setup()`.

---
## Riassunto

>> **Piattaforma, toolchain e memoria**
>> - Arduino UNO monta un ATmega328P a 8 bit e 16 MHz, con Flash da 32 KB (0,5 KB al bootloader), SRAM da 2 KB ed EEPROM da 1 KB.
>> - Ha 14 pin digitali, con PWM su 3, 5, 6, 9, 10 e 11. Gli ingressi A0–A5 usano un ADC a 10 bit (0–1023, circa 4,9 mV per step). Massimo 40 mA per pin, meglio circa 20 mA.
>> - Wiring (C/C++ con avr-gcc) usa un super-loop: `setup()` gira una volta, `loop()` all'infinito. Una chiamata bloccante ferma tutto.
>> - Al reset parte il bootloader, che attende l'upload dall'IDE; se non arriva nulla, esegue l'ultimo sketch. L'alternativa è ICSP.
>> - I registri occupano 0x00–0xFF e la SRAM va da 0x100 a 0x8FF (256–2303). Heap e stack crescono uno verso l'altro e possono collidere.
>> - Capacità della batteria: C ≥ I·t, per esempio 150 mA · 8 h = 1200 mAh.
>>
>> **Step 1–3: output e log**
>> - Blink con `pinMode`, `digitalWrite` e `delay`, che è busy waiting. Con due `delay(1000)` il periodo reale è 2 s.
>> - LED esterno: attenzione alla polarità (anodo sulla gamba lunga). R = (5 − 2) V / 20 mA = 150 Ω; con la 220 Ω del kit passano circa 13,6 mA.
>> - `Serial.begin(9600)` e `println` per il log. Il Serial Monitor va impostato allo stesso baud rate. In 8N1 passano circa 960 byte/s.
>>
>> **Step 4–5: input**
>> - Pulsante con pull-down da 10 kΩ (0,5 mA quando è premuto). Senza la resistenza il pin è flottante. `INPUT_PULLUP` inverte la logica.
>> - Il polling con `digitalRead` perde gli eventi più brevi del periodo del loop.
>> - Fading: potenziometro su A0, poi `analogRead` (0–1023), `map` a 0–255 e `analogWrite` su un pin `~`.
>>
>> **Step 6: interrupt**
>> - `attachInterrupt(digitalPinToInterrupt(2), isr, RISING)` funziona solo sui pin 2 e 3.
>> - Le variabili condivise con l'ISR sono `volatile` e si leggono in una sezione critica breve (`noInterrupts()`/`interrupts()`), perché un `int` a 16 bit si legge in due accessi.
>> - Bouncing: i rimbalzi meccanici generano interrupt spuri. Il debounce software con `millis()` scarta gli impulsi entro 20–30 ms dall'ultimo accettato. Non usare `delay()` nelle ISR.
>> - Il log asincrono può saltare valori, ma il conteggio è corretto.
>>
>> **Step 7–9: timer e sleep**
>> - TimerOne: `Timer1.initialize(1000000)` (in µs) e `attachInterrupt(blinky)`, loop vuoto (event-driven). Usare Timer1 toglie il PWM ai pin 9 e 10.
>> - `SLEEP_MODE_PWR_DOWN`: la MCU si risveglia solo con eventi asincroni (interrupt esterno, watchdog). Prima di dormire serve `Serial.flush()`. L'esecuzione riprende dopo `sleep_mode()`.
>> - `SLEEP_MODE_IDLE`: si ferma solo la CPU e Timer1 la risveglia. `power_*_disable()` spegne ADC, SPI, Timer0, Timer2 e TWI. È la base degli scheduler.
>>
>> **Step 10–12: seriale e I²C**
>> - Echo seriale: `Serial.available()`, `read()` e `print()`.
>> - I²C: SDA su A4 e SCL su A5, con Arduino come master. Lo scanner `Wire` prova gli indirizzi 1–126 (`endTransmission()` restituisce 0 se c'è ACK). L'LCD risponde tipicamente a 0x27.
>> - `LiquidCrystal_I2C(0x27, col, righe)`, poi `init()` e `backlight()`. In `setCursor(col, row)` gli indici partono da 0.
