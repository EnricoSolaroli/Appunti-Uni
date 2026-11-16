---
tags: [esiot, embedded-systems, microcontrollers, arduino, atmega328p]
course: Embedded Systems and IoT (ESIOT)
lecturer: Prof. Alessandro Ricci (UNIBO)
source: "module-1.2 - Embedded systems based on microcontrollers (119 slides, v1.0.0)"
---

# Embedded Systems and IoT – Module 1.2: Embedded Systems Based on Microcontrollers

> [!info] Scope of the module
> Main components of a microcontroller (MCU) and basic MCU programming: **CPU and memory, GPIO, interrupts, timers, serial communication** (plus ADC/PWM and power management).
> Reference platform: **Arduino Uno** (MCU **ATmega328P**). Reference framework: **Wiring** (C/C++).
> At the end there is a cheat sheet of key facts and a list of typos/inconsistencies found in the slides.

---
## 1. Microcontroller elements
A microcontroller typically contains:
- **CPU**
- **Memory unit**
- **Ports for general-purpose Input/Output (GPIO)**
- **Analog/digital converters** (ADC)
- **Timers**
- **Bus for serial communication**
- **Clock**
- **Power circuit**
## 2. Reference platform: Arduino Uno

### 2.1 Main components

| Item | Value |
|---|---|
| MCU | **ATmega328P**, 8-bit, 16 MHz |
| Flash | 32 KB |
| SRAM | 2 KB |
| EEPROM | 1 KB |
| Digital I/O pins | 14 (6 usable as **PWM** outputs) |
| Analog inputs | 6 |
| Other | USB connector, power jack, ICSP header, reset button |
| Operating voltage | 5 V |
| Input voltage (recommended) | 7–12 V |
| DC current per I/O pin | 40 mA |
| DC current for 3.3 V pin | 50 mA |

### 2.2 The MCU: ATmega328P

- **AVR CPU**, 8 bits, 16 MHz, **32 registers**.
- Memory: Flash 32 KB (0.5 KB used by the **bootloader**), SRAM 2 KB, EEPROM 1 KB.

---

## 3. MCU programming

- Programming is done from an **external host system** (e.g. a PC): programs are **edited, compiled**, producing the **executable (binary)**.
- The executable is **uploaded** to the MCU either with specific hardware or directly through **serial communication** with the host PC.
- The MCU software stack has **no operating system**: the executable is copied directly into MCU memory and **executed by the CPU**.

### 3.1 The Arduino case

- Programs are developed on the host PC and uploaded via **USB cable**.
- An **ICSP** (In-Circuit Serial Programmer) interface is also available, to upload the executable using an external programmer device.
- Upload via USB works through a **bootloader**: a small program (~0.5 KiB) **pre-stored via ICSP**.
- Programming environment: **Wiring** and **Arduino IDE**.
  - **Wiring**: open-source **C/C++ framework**, available for different MCUs and SoCs.
  - **Arduino IDE**: simple IDE to edit sources, compile, upload binaries (works not only for Arduino).
  - Based on GNU tools and open-source projects: **avr-gcc** and open-source libraries (e.g. **AVR Libc**).

---

## 4. CPU and memory

### 4.1 CPU architecture recall: Von Neumann

- CPU behaviour follows the **Von Neumann model**: **fetch–decode–execute** cycle.
  1. **Fetch** the next instruction from memory into a specific register (the **instruction register**).
  2. **Decode** the instruction (may require fetching other operands from memory).
  3. **Execute** (may update registers and write register content to memory).

### 4.2 Harvard architecture

- Variant of Von Neumann in which **instructions and data are stored in physically separate memories**, using **distinct buses**.
- Name comes from the **Harvard Mark I** relay-based computer (instructions on punch cards, data in electro-mechanical devices).
- Typically used in **microcontrollers and DSPs** (e.g. **Atmel AVR**).
- The two memories usually have very different properties:
  - **code in Flash**: fast read, slow write;
  - **data in SRAM**: fast read and write, but higher power consumption and cost.

### 4.3 Memory in the ATmega328P (Harvard)

| Memory | Content | Volatile? | Size |
|---|---|---|---|
| **Flash** | code instructions (0.5 KB used by the bootloader) | non-volatile | 32 KiB |
| **SRAM** | variables and **stack** | volatile | 2 KiB |
| **EEPROM** | long-term / persistent data | non-volatile | 1 KiB |

> [!warning] Consequences of the small SRAM
> - Very little memory for variables → **disciplined use of data structures** (e.g. minimise the use of strings).
> - The **stack is in RAM** → constraints on the **level of call nesting and recursion**.

### 4.4 Comparison among memories

| | Flash | SRAM | EEPROM |
|---|---|---|---|
| Volatility | non-volatile | volatile | non-volatile |
| Read | fast | fast (~2 clock cycles on ATmega328P) | slow access |
| Write | slow, max ~100,000 write cycles | fast | slow access |
| Power / cost | low power consumption and cost | **higher power consumption** than Flash | – |
| Notes | – | – | on Arduino: read/written via the **EEPROM library** |

### 4.5 CPU: ISA, registers, bits

- The CPU executes instructions encoded in **machine language**.
- Characterised by its own **Instruction Set Architecture (ISA)**:
  - the set of instructions recognised by the CPU;
  - the set of **registers**:
    - **general-purpose registers (GPR)**, e.g. accumulator;
    - **special-purpose registers (SFR)**: **Program Counter (PC)** = address of next instruction; **Program Status Word (PS)** = information about processor state.
- **XX-bit CPU** (8, 16, 32, 64) = number of bits used in registers, to specify memory addresses and values.

### 4.6 AVR8 architecture (inside the ATmega328P)

- **RISC** architecture, 16 MHz.
- **32 general-purpose 8-bit registers (R0–R31)**:
  - all **arithmetic and boolean operations** involve these registers;
  - only **load and store** operations access RAM.
- Small set of **special-purpose registers**:
  - **PC**: 16- or 22-bit program counter;
  - **SP**: 8- or 16-bit stack pointer;
  - **SREG**: 8-bit status register, among the bits:
    - **C** – Carry flag;
    - **Z** – Zero flag (set when an arithmetic result is zero);
    - **I** – Interrupt flag (set when interrupts are enabled).

### 4.7 Memory addressing

- **General-purpose CPU registers** and **I/O registers** are **mapped into low memory** → accessible with memory addresses in that range.
- Data memory map (from the figure):

| Address range | Content |
|---|---|
| `0x0000–0x001F` | 32 general-purpose registers |
| `0x0020–0x005F` | 64 I/O registers |
| `0x0060–0x00FF` | 160 extended I/O registers |
| `0x0100–…` | Internal SRAM |

- ATmega328P: `F_END` = 32 KiB (Flash), `RAM_END` = 2 KiB, `E_END` = 1 KiB (EEPROM).

### 4.8 AVR assembly

- Instruction categories: **arithmetic, bit manipulation, memory/register transfer, jump, test/branch, call**.
- References given: Wikipedia page on the Atmel AVR instruction set, and the full Atmel AVR Instruction Set Manual.

### 4.9 Performance

- Clock **16 MHz** → period = 0.0625 µs = **62.5 ns**.
- Most instructions take **1 or 2 clock cycles**, i.e. ~60 ns or ~125 ns (precise data in the CPU datasheet).
- This allows **accurate predictions of execution time**, especially in the **worst case** → important for **real-time systems**.

---

## 5. Basic control architecture: the super loop

### 5.1 Super loop

- Simplest control architecture (a framework) for MCU programming; very widespread because it **needs no specific HW support** (e.g. interrupts).
- Features: **initialisation** + **infinite loop** repeatedly executing a task.

```c
/* Main.c */
#include "X.h"
void main(void){
  X_Init();      // prepare for task X
  while (1)      // forever: the "super loop"
  {
    X();         // perform the task
  }
}
```

| Pros | Cons |
|---|---|
| simplicity (no OS needed) | **timing not accurate** |
| portability | fragility and low flexibility |
| reliability and safety | basic version is "full-power" → **high power consumption** |
| efficiency | |

### 5.2 Super loop in Wiring

- **Wiring**: open-source framework for programming MCUs; language **C/C++** (subset of standard ANSI C++).
- Control architecture = super loop with **`setup()`** and **`loop()`**, which the programmer **must implement**; a **hidden `main`** calls them.
- Wiring also provides a basic **API** (classes, procedures, functions).
- Compilation and linking through **avr-gcc** (GNU). The Arduino distribution also includes **avr-objdump** to **disassemble** an executable.

### 5.3 From Wiring to the executable

Compiling an **empty program** produces (disassembly with `avr-objdump -d`): `setup`, `loop`, `initVariant` (each just `ret`), and a `main` that does:

```c
int main(void)
{
    init();
    initVariant();
    setup();
    for (;;) {
        loop();
        if (serialEventRun) serialEventRun();
    }
}
```

- Example `c = 100;` in `setup()` and `c = c + 1;` in `loop()` compile to AVR instructions such as `ldi`, `sts` (store to SRAM), `lds` (load from SRAM), `adiw` (add immediate to word), `ret`. The variable `c` lives at SRAM address `0x0100`.

---

## 6. GPIO (General-Purpose I/O)

### 6.1 Basic concepts

- MCUs have a set of **pins** that can directly drive input/output.
- Pins are **general-purpose**: programmable as **input** (value read by the program) or **output** (value controlled by the program).
- Pins can be **digital** (only HIGH/LOW, i.e. 1/0) or **analog** (any value in a range, e.g. 0–5 V).
- Arduino Uno: **14 digital pins** (input or output), **6 analog pins** (**input only**).
- Some pins are **multiplexed** (serve multiple functions), e.g. pins 0 and 1 are also the serial port (RX/TX).

### 6.2 Operating parameters

- **Voltage**: applied to the pin (input) or produced by it (output). Examples: **5 V** (Arduino), **3.3 V** (Raspberry Pi, ESP).
- **Current**: that can be received (input) or produced (output). Examples: Arduino **40 mA**, ESP8266 **12 mA**.
- **Pull-up circuits/resistors**:
  - pins can have internal pull-up circuits that fix the voltage at the max value (**+VCC**) even when an **input** pin is not connected to any circuit (open circuit), avoiding malfunctions due to **signal floating**;
  - resistors of **tens of kΩ** are used (clarified in lab slides).

### 6.3 Ports and registers

- The MCU interacts with pins (and external devices) through **ports**; a port can be configured as input or output.
- A port is managed by one or more **special-purpose registers** connected to the pins, keeping the **current value** and the **configuration** (input/output).

**ATmega328P:**

- **23 I/O lines** grouped in **3 eight-bit ports: B, C, D**.
  - Port **D** → pins 0..7; port **B** → pins 8..13; port **C** → analog pins.
- Pin labels such as `PD0`, `PC1`, `PB2` (e.g. `PD0` = pin 0 of port D).
- Each port is managed by **3 registers** `DDRx`, `PORTx`, `PINx` (x = port name):

| Register | Access | Meaning |
|---|---|---|
| `DDRx` | R/W | **direction**: bit 0 → INPUT, bit 1 → OUTPUT |
| `PORTx` | R/W | **state**: for INPUT pins, bit 1 activates the **pull-up** (0 deactivates); for OUTPUT pins, bit 1 = HIGH, bit 0 = LOW |
| `PINx` | **read-only** | for INPUT pins, the value read on the pin: 1 if HIGH, 0 if LOW |

- To set an **OUTPUT pin to HIGH**: (1) write `DDRx` to set direction OUTPUT; (2) write `PORTx` to set state HIGH.
- I/O registers are **memory-mapped** (in ATmega328P starting from address `0x20`, just after the general-purpose registers), so they can be accessed with ordinary reads/writes at those addresses.

### 6.4 Wiring API for pins

| Function | Purpose |
|---|---|
| `pinMode()` | set pin direction (`INPUT`/`OUTPUT`) |
| `digitalWrite()` | set value of an OUTPUT pin |
| `digitalRead()` | read value of an INPUT pin |

(Internally they work with the port registers described above.)

### 6.5 Examples

**Blinking LED (output):**

```cpp
#define LED_PIN 13
void setup() { pinMode(LED_PIN, OUTPUT); }
void loop() {
  digitalWrite(LED_PIN, HIGH);
  delay(1000);
  digitalWrite(LED_PIN, LOW);
  delay(1000);
}
```

**How `delay()` works:**

```c
void delay(unsigned long ms) {
  unsigned long start = millis();
  while (millis() - start <= ms) ;   // busy waiting
}
```

- `delay()` is a **busy wait** (from `wiring.c`).
- `millis()` returns the **milliseconds elapsed since power on**; it uses variables managed by a **timer**.

> [!warning] Important remark
> `delay()` and busy waiting **block the loop**, hurting the **reactivity** of the system.

**Button–LED (input + output):** `pinMode(buttonPin, INPUT)`, `pinMode(ledPin, OUTPUT)`; in `loop()`: `buttonState = digitalRead(buttonPin)`; if `HIGH` → `digitalWrite(ledPin, HIGH)`, else `LOW` (button on pin 2, LED on pin 13). The circuit is discussed in lab.

### 6.6 Multiplexed pin functions (Arduino Uno)

| Pins | Function |
|---|---|
| 0, 1 | TTL serial interface |
| 2, 3 | external interrupts |
| 3, 5, 6, 9, 10, 11 | PWM |
| 10, 11, 12, 13 | SPI bus |
| 13 | built-in LED |
| A4, A5 (analog) | I2C bus |

### 6.7 Analog signals and the ADC

- A **digital** signal: only HIGH (= VCC) or LOW (= GND). An **analog** signal: any value between GND and VCC (e.g. 0–5 V).
- To process an analog signal with a digital computer it must be **converted** by an **ADC (Analog-to-Digital Converter)**, which maps a continuous voltage value in GND..VCC to a **discrete value** in a range depending on the **resolution** (number of bits).
  - Example: **10 bits** → values **0…1023**. The resolution defines the **precision** of the ADC.
- Arduino Uno: up to **6 analog inputs** (A0–A5), each using a **10-bit ADC**.
- Wiring: `int analogRead(int PIN)` (internally accesses the registers of port C).
- Utility `map(value, fromLow, fromHigh, toLow, toHigh)` converts a value from one range to another (e.g. 0…1023 → 0…255).

**Potentiometer example:**

```cpp
sensorValue = analogRead(A0);                   // 0..1023
outputValue = map(sensorValue, 0, 1023, 0, 255);
analogWrite(9, outputValue);                    // PWM on pin 9 (LED)
Serial.print("sensor = "); Serial.print(sensorValue);
Serial.print("\t output = "); Serial.println(outputValue);
delay(2);   // let the ADC settle after the last reading
```

- `Serial.println` sends text through the serial port to the host PC (visible in the Arduino IDE **Serial Monitor**; details in section 9).

### 6.8 PWM (Pulse Width Modulation)

- Method to **emulate an analog output on digital pins** by generating a **periodic square wave** (signal periodically HIGH and LOW).
- The emulated voltage is set by the **duty cycle**: percentage of time the signal is HIGH.
- **Average voltage = duty cycle × VCC** (value in 0…VCC). E.g. **50% duty cycle → 0.5 × VCC = 2.5 V** with VCC = 5 V.
- Doesn't work with every analog actuator; it works for **LEDs** (intensity) and **DC motors** (speed).
- On Arduino: pins **3, 5, 6, 9, 10, 11**, **8-bit** resolution (values 0..255); API `analogWrite()`.
- **Fading LED example**: `analogWrite(led, brightness)`; `brightness += fadeAmount` (5); invert `fadeAmount` when `brightness` is 0 or 255; `delay(30)`.

---

## 7. Interrupts

### 7.1 Concept

- **Interrupts** are the fundamental mechanism used by the MCU to **react to events** triggered by external devices (including sensors and **timers**).
- A CPU has one or more **IRQ (Interrupt Request)** pins. On an interrupt request, the CPU:
  1. **suspends** the current execution (e.g. the super loop);
  2. **saves on the stack** the address of the next instruction;
  3. **jumps** to the routine configured for the event: **interrupt handler / ISR (Interrupt Service Routine)**.
- ISR addresses are stored in the **interrupt table (interrupt vectors)**.
- In MCUs, IRQs are typically connected to one or more GPIO.

### 7.2 ATmega328P

- **Pins 2 and 3** can generate **external interrupts** to the CPU, on different conditions:
  - **RISING** or **FALLING** edge;
  - **CHANGE**;
  - signal **LOW**.
- Actually interrupts can be enabled on **all pins**, but only of the **PIN CHANGE** kind (vs. EXTERNAL) (library `EnableInterrupt`).
- **Interrupt vectors** (from the table in the slides):

| Vector | Address | Source | Definition |
|---|---|---|---|
| 1 | `0x0000` | RESET | external pin, power-on, brown-out, watchdog reset |
| 2 | `0x0002` | INT0 | external interrupt request 0 |
| 3 | `0x0004` | INT1 | external interrupt request 1 |
| 4 | `0x0006` | PCINT0 | pin change interrupt request 0 |
| 5 | `0x0008` | PCINT1 | pin change interrupt request 1 |
| 6 | `0x000A` | PCINT2 | pin change interrupt request 2 |
| 7 | `0x000C` | WDT | watchdog time-out interrupt |
| 8 | `0x000E` | TIMER2 COMPA | Timer/Counter2 compare match A |
| 9 | `0x0010` | TIMER2 COMPB | Timer/Counter2 compare match B |
| 10 | `0x0012` | TIMER2 OVF | Timer/Counter2 overflow |
| 11 | `0x0014` | TIMER1 CAPT | Timer/Counter1 capture event |

(the table in the slide continues beyond vector 11.)

### 7.3 Handling interrupts in Wiring

```cpp
attachInterrupt(intNum, ISR, mode);
```

- `intNum`: interrupt number; `ISR`: pointer to the handler (`void (*func)(void)`); `mode`: when to generate the interrupt:
  - `CHANGE` / `FALLING` / `RISING`: at every change, HIGH→LOW, LOW→HIGH;
  - `LOW` / `HIGH`: when the state is LOW or HIGH.
- `digitalPinToInterrupt(numPin)` gives the interrupt number for a pin.

**Example (counter) and its problem:**

```cpp
volatile int count = 0;
void setup() { attachInterrupt(0, inc, CHANGE); Serial.begin(9600); }
void loop()  { Serial.println(count); }
void inc()   { count++; }
```

> [!warning] Concurrency problems
> **Race conditions** between the ISR and the main loop accessing `count`. Variables shared with the ISR must be declared **`volatile`**.

### 7.4 Disabling interrupts

- Interrupts can be disabled/enabled by user programs (typically to avoid concurrency problems) by setting a **bit in the CPU status register**.
- Instructions: `STI` = set interrupt (enable), `CLI` = clear interrupt (disable).
- In Wiring/Arduino: **`noInterrupts()`** and **`interrupts()`**.

**Revised example** (atomic copy of the shared variable):

```cpp
#define BUTTON_PIN 2
volatile int count = 0;
int prev = 0;

void setup() {
  Serial.begin(9600);
  attachInterrupt(digitalPinToInterrupt(BUTTON_PIN), inc, RISING);
}
void loop() {
  noInterrupts();
  int current = count;     // critical section
  interrupts();
  if (current != prev) { Serial.println(current); prev = current; }
}
void inc() { count++; }
```

### 7.5 Interrupt handler design

- While interrupts are disabled the system is **not reactive** to external events → handlers need a careful discipline:
  - handlers must be **short**;
  - they **cannot block** or run infinite loops;
  - we want **low interrupt latency** (time to react to an interrupt) → **minimise the time interrupts are disabled**;
  - for long/heavy work use **buffers and a producer/consumer strategy**: the ISR (**producer**) puts a task in a buffer, later fetched and executed by the **main/super loop** (consumer).

### 7.6 Interrupts FAQ

| Question | Answer |
|---|---|
| Can a CPU be interrupted in the middle of a single instruction? | **No**, instructions are typically **atomic** (modulo complex instructions with multiple memory transfers). |
| Two interrupts at the same time? | CPUs assign **priorities**; the higher priority is served first. |
| Can an interrupt interrupt an ISR (**nesting**)? | Most processors **yes** (so interrupts must be disabled inside the handler and re-enabled). **AVR8 / ATmega328P: NO**, no nesting. |
| What happens to requests while interrupts are disabled? | Typically the CPU **keeps track** of them and serves them when re-enabled. **AVR8 does not** track them. |
| Disabled interrupts and never re-enabled? | System **malfunction / crash**. |
| Interrupts disabled multiple times before re-enabling? | Nothing: the operation is **idempotent**. |

### 7.7 Interrupts on Arduino: notes

- On AVR/Arduino, **interrupts are disabled while a handler runs** (no nesting).
- **Consequence:** library functions that depend on interrupts **cannot be used in handlers**.
  - Example: **`delay()`** → based on `millis()`, which uses **timer interrupts**.
  - **`delayMicroseconds()`** works, since it is based on **executing instructions of known duration in clock cycles**, not on timers.

---

## 8. Timers

### 8.1 Concept

- Timers are fundamental for **time-oriented behaviour**. A timer can be used to:
  - **measure time intervals**;
  - create **PWM signals**;
  - create **timeouts and alarms**;
  - create **multitasking based on preemptive scheduling**.
- A timer is a simple **counter incremented at HW level at some frequency**.
- **Programmable timers** allow to: configure the frequency; access/read the current counter value; attach **interrupts** to implement time-triggered behaviours.

### 8.2 ATmega328 timers

- **3 internal timers**: `timer0`, `timer1`, `timer2`.
- Each has a counter incremented at each (timer) clock cycle.
  - `timer0` and `timer2`: **8-bit** counters; `timer1`: **16-bit** counter.

### 8.3 API using timers

- Timers implement high-level Wiring functionalities:
  - **`millis()`** uses **timer0**: it reads `timer0_millis` with **interrupts disabled** (`cli()` … restore `SREG`) to **avoid race conditions**;
  - **`analogWrite()`** for PWM.

### 8.4 Timer interrupts: CTC mode and formulas

- Several modes manage timer interrupts; one is **CTC (Clear Timer on Compare Match)**:
  - an interrupt is generated when the counter reaches a value stored in the **compare match register**;
  - then the counter is **reset** and restarts counting;
  - choosing the register value fixes the **interrupt frequency**.
- Counters are updated at 16 MHz: one tick every 1/16,000,000 s (~63 ns).
  - `timer0`/`timer2` (8 bit): 256 × 63 ns ≈ **16.1 µs** to overflow.
  - `timer1` (16 bit): 65536 × 63 ns ≈ **4.1 ms** to overflow.
- A **prescaler** divides the frequency; allowed values: **1, 8, 64, 256, 1024**.

$$
\text{timer speed (Hz)} = \frac{16\,\text{MHz}}{\text{prescaler}}
$$

(prescaler 1 → 16 MHz; 8 → 2 MHz; …; 1024 → 16 kHz)

$$
f_{\text{int}} = \frac{16{,}000{,}000}{\text{prescaler}\cdot(\text{compare match register}+1)}
\qquad
\text{compare match register} = \frac{16{,}000{,}000}{\text{prescaler}\cdot f_{\text{int}}}-1
$$

(the "+1" because value 0 in the CTC register is the first significant value)

- **Overflow check:** for timers 0 and 2 the value must be **< 256**; for timer 1 **< 65536**. If it overflows, **increase the prescaler**.
- **Worked example:** 1 interrupt per second (1 Hz) with prescaler 1024 → $16{,}000{,}000/(1024\cdot1)-1 = 15{,}624$; since $256<15624<65536$, use **timer1**.

### 8.5 Registers configuration

- Each timer has 2 8-bit configuration registers **`TCCRxA`, `TCCRxB`**; the most important bits are the 3 least significant ones **`CSx2`, `CSx1`, `CSx0`**, which set the **timer clock** (prescaler).
- **CTC mode** is enabled by a specific bit in `TCCRxB` (`WGM12`).
- The CTC (compare match) register is **`OCRxA`**.

### 8.6 Raw Arduino example (timer1 + ISR)

```cpp
volatile boolean timerFlag = false;
ISR(TIMER1_COMPA_vect){ timerFlag = true; }

void setupTimer(int freq){
  cli();                       // disable interrupts
  TCCR1A = 0; TCCR1B = 0; TCNT1 = 0;
  OCR1A = 16*1024/freq;        // compare match register
  TCCR1B |= (1 << WGM12);                    // CTC mode
  TCCR1B |= (1 << CS12) | (1 << CS10);       // prescaler 1024
  TIMSK1 |= (1 << OCIE1A);                   // enable compare interrupt
  sei();                       // enable interrupts
}
void loop(){ while(!timerFlag){}  timerFlag = false;  step(); }
```

- `ISR(...)` is a **macro** to declare the interrupt handler directly; `timerFlag` is **`volatile`**.
- The slide describes it as timer1 generating a tick **100 times per second (100 Hz)**; every 100 increments a message is sent over serial (one message per second).

### 8.7 Timer libraries

- Libraries ease timer management; a main one is **TimerOne** (classes to configure the timer and attach the interrupt routine).

**Time-driven blinking:**

```cpp
#include <TimerOne.h>
void blinkHandler(){ /* toggle LED_PIN with flagState */ }
void setup(){
  pinMode(LED_PIN, OUTPUT);
  Timer1.initialize(1000000);            // 10^6 µs = 1 s
  Timer1.attachInterrupt(blinkHandler);  // run handler at each timer interrupt
}
void loop(){}
```

### 8.8 Watchdog timer

- A timer that **counts up to a specified value**, after which a **reset signal** is produced to **reboot the system**.
- In normal operation the program **periodically resets the counter** before the threshold.
- If the signal doesn't arrive on time, the MCU has hit a problem (e.g. **deadlock**) and it is **reset**.
- **Widespread** in embedded systems.

### 8.9 Timers and PWM

- In Wiring's GPIO library, **timers generate PWM output**:
  - **Timer0** → pins 5 and 6;
  - **Timer1** → pins 9 and 10;
  - **Timer2** → pins 11 and 3.
- **Watch out for interference**: using Timer1 directly means pins 9 and 10 can't be used for PWM. It can happen unexpectedly with libraries that use PWM (e.g. **servo motor** libraries).

---

## 9. Serial communication (buses and protocols)

### 9.1 Buses and protocols

- Exchanging data through single pins can get complex depending on the external device → specific **communication interfaces, buses and protocols**.
- Two kinds:
  - **parallel**: several bits at the same time on multiple lines (8-, 16-, 32-bit bus);
  - **serial**: a **stream of bits in sequence** on a single line/channel.

### 9.2 Serial: two main categories

| | **Asynchronous** | **Synchronous** |
|---|---|---|
| Clock line | **none** | **clock signal** shared to synchronise |
| Lines | 2: **TX** (transmit), **RX** (receive) | clock + one or more data lines |
| Examples | USB, **RS-232**, **TTL** | **I2C**, **SPI** |
| Notes | oldest and simplest | more complex but typically **higher speed** |

### 9.3 Asynchronous serial

- With no clock line, synchronisation is achieved through a **protocol**; both parts must agree on: **baud rate, data frame, synchronisation bits, parity bit**.

**Baud rate**

- Transmission speed in **bits per second**. Typical: **9600 bps**; others: 1200, 2400, 4800, 19200, 38400, 57600, **115200**.
- Higher baud = higher speed, but there is a limit (typically 115200) tied to MCU capabilities; higher values may cause **transmission errors**.

**Data frame**

- Each data block (typically one byte) travels in a **frame**: `Start (1 bit)` + `Data (5–9 bits, typically 8)` + `Parity (0–1 bit)` + `Stop (1–2 bits)`.
- **Endianness**: order in which bits are sent (MSB or LSB first); **default if not specified: least significant first**.
- **Synchronisation bits**: a **start bit** (always one) and a **stop bit** (can be 2) mark the beginning and end of the packet.
- **Parity bit** (optional): simple low-level **error checking**.

**Concrete example: 9600 8N1**

- 9600 baud, **8** data bits, **N**o parity, **1** stop bit; one of the most used configurations.
- Example: ASCII `'O'` = 79 = `01001111`, `'K'` = `01001011`; bits are sent **least significant first**.
- Time per bit at 9600 bps = 1/9600 ≈ **104 µs**.
- Each byte = **10 bits** (1 start + 8 data + 1 stop) → **960 bytes/s** at 9600 bps.

**Hardware**

- Two lines/pins: **RX** (receive) and **TX** (transmit); the names refer to the **device itself** → **RX of one device connects to TX of the other**.
- HW implementations:
  - **RS-232**: first HW serial protocol, widely used on computer serial ports;
  - **TTL** (Transistor–Transistor Logic): serial communication found in **UART** transmission, very common in MCUs (**used in Arduino**).

**UART (Universal Asynchronous Receiver/Transmitter)**

- Circuit block that manages data to/from the serial interface; **converter between the parallel interface (data bus) and the serial interface** (an 8-bit or wider data bus on one side, the 2 serial lines on the other).
- Exists as stand-alone IC but is typically **embedded in MCUs**. Arduino Uno (ATmega328) has **1 UART**; Arduino Mega (ATmega2560) has **4**.

**Other aspects**

- **Full-duplex**: both devices transmit and receive **simultaneously** (different data lines). **Half-duplex**: devices **take turns**.
- **Single-wire**: some serial buses have one wire, between a device that always sends and one that always receives (e.g. Serial Enable LCD).

### 9.4 Async serial on Arduino (Serial library)

- Arduino Uno has **one hardware TTL serial port**, multiplexed on **GPIO 0 (RX) and 1 (TX)**.
- These pins connect to the **ATmega8U2 USB-to-TTL-serial chip**, which converts TTL serial to USB and vice versa.
- Pins serve both serial and GPIO, **mutually exclusive**: while used for one function, the other doesn't work.
- The **`Serial`** class (extension of `Stream`) offers full control of the async serial:

| Group | Methods |
|---|---|
| session | `begin()`, `end()` |
| receive | `read()`, `readBytes()`, `readBytesUntil()`, `peek()`, `available()` |
| parse | `parseFloat()`, `parseInt()` |
| transmit | `write()`, `flush()` |
| text | `print()`, `println()` |
| other | `setTimeout()`, `serialEvent()` |

**Echo program:**

```cpp
char data;
void setup() { Serial.begin(9600); }
void loop() {
  if (Serial.available()) { data = Serial.read(); Serial.print(data); }
}
```

### 9.5 Synchronous serial

- Use a **clock signal** to synchronise plus one or more data lines. More complex than async but typically **faster**. Main examples: **I2C** and **SPI**.

### 9.6 I2C

- Standard bus/protocol, "eye-squared-see". **Good speed, minimising pins: only 2**. Introduced by **Philips** in the '80s, standardised in the '90s. Also called **Two-Wire (TW)**.
- Specs: **7-bit or 10-bit** (as stated in the slide); speeds: **100 kbit/s** standard mode, **10 kbit/s** low-speed mode; newer versions: **fast mode 400 kbit/s**, **fast mode plus 1 Mbit/s**, **high-speed 3.4 Mbit/s**.

**Architecture (master–slave)**

- Bus controlled by a **master** (typically the MCU), with one or more **slaves**.
- All devices share two lines: **SCL** (Serial Clock Line) and **SDA** (Serial Data Line, **bidirectional**).

**Protocol**

- Communication is **always started by the master**; slaves can only respond.
- Commands sent by the master are received by **all slaves**; each slave has a **unique 7-bit ID**, sent by the master at the start; only the target slave reacts.
- Typical sequence:
  1. master sends **start bit**;
  2. master sends the **7-bit slave ID**;
  3. master sends the **read/write bit**;
  4. slave answers with **ACK** (active when 0);
  5. **write mode**: master sends bytes, slave replies with ACKs; **read mode**: master receives bytes, sending an ACK after each one;
  6. at the end, master sends a **STOP** bit.

> [!warning] Check the R/W bit
> The slide writes "read (0) or write (1)". In the standard I2C protocol the R/W bit is **0 = write, 1 = read** (see the typos section).

**I2C on Arduino/ATmega328P (Wire library)**

- Native I2C on **2 pins: A4 (SDA) and A5 (SCL)**, multiplexed with analog reads (once `Wire` is initialised they can't be used for analog reads).
- `Wire` class (extension of `Stream`): `begin()`, `beginTransmission()`, `endTransmission()`, `write()`, `requestFrom()`, `read()`, `available()`, `onReceive()`, `onRequest()`.
- **Two pull-up resistors** are needed (e.g. 4.7 kΩ).

**Example: TC74 temperature sensor**

- The datasheet shows 2 registers to read: one with the **temperature in Celsius**, one with the **chip config**. Protocol to read the temperature:
  1. send the device address in write mode and send a **0** (selects the temperature register);
  2. send the device address in read mode and request **1 byte**;
  3. wait to receive all 8 bits.

```cpp
#include <Wire.h>
int temp_address = 72;               // 1001000 in binary
void setup() { Serial.begin(9600); Wire.begin(); }
void loop() {
  Wire.beginTransmission(temp_address);   // start session with the slave
  Wire.write(0);                          // select the data register
  Wire.endTransmission();                 // stop: finished writing
  Wire.requestFrom(temp_address, 1);      // ask for 1 byte
  while (Wire.available() == 0);          // wait until data arrives
  int c = Wire.read();
  Serial.print(c); Serial.print("C ");
  delay(500);
}
```

(Example from *Exploring Arduino* [EA], p. 171.)

- Other I2C devices: sensors **MPU6050** and **LSM330** (compass + accelerometer); actuators/output such as a **16×2 character LED display**.

### 9.7 SPI

- Introduced by **Motorola**; **full-duplex** serial protocol, bidirectional between master and slaves.
- Like I2C: serial, **synchronous**, **master–slave**. Unlike I2C: **separate lines for transmitting and receiving**, plus a line to **select the slave**.
- **Not an official formal standard** → small differences among implementations and commands.
- Lines (shared):

| Line | Role |
|---|---|
| **SCK** (SCLK) | shared serial clock, coordinates communication |
| **MOSI** | Master Out Slave In: master → slave |
| **MISO** | Master In Slave Out: slave → master |
| **SS** | Slave Select: selects the slave |

- **Multiple slaves**: either **multiple SS lines**, or a **daisy chain** connection.
- **Arduino/ATmega328P**: 4 multiplexed GPIOs: pin **10 = SS**, **11 = MOSI**, **12 = MISO**, **13 = SCK**.

**Wiring SPI library**

```cpp
SPI.beginTransaction(SPISettings(14000000, MSBFIRST, SPI_MODE0));
receivedVal   = SPI.transfer(val);
receivedVal16 = SPI.transfer16(val16);
SPI.transfer(buffer, size);
SPI.endTransaction();
```

- `beginTransaction` settings: **max speed**, **data format** (MSB or LSB first), **sampling mode**: 4 transmission modes defining the **clock edge** for sampling/sending (clock phase) and the **HIGH/LOW idle value** of the clock (clock polarity).
- `transfer()` sends **and receives simultaneously**, also multiple bytes with a buffer.
- **Protocol to talk to a slave:** (1) `digitalWrite(SS, LOW)`; (2) `SPI.transfer(...)`; (3) `digitalWrite(SS, HIGH)`.

### 9.8 I2C vs SPI

- Many devices (accelerometers, digital potentiometers, displays…) exist in **both** versions.

| I2C | SPI |
|---|---|
| only **2 lines** | can work at **higher speed** |
| more agile slave addressing | **no pull-up resistors** needed |

---

## 10. Power management

- Most MCUs support **power management** with **low-power (sleep) modes**.
- ATmega328P: **5 sleep modes** (increasing power reduction):

| Mode | What it does |
|---|---|
| **Idle** | stops the CPU but SPI, USART, analog comparator, ADC, two-wire interface, timers/counters, watchdog and interrupt system keep running; halts `clkCPU` and `clkFLASH` |
| **ADC Noise Reduction** | stops the CPU; ADC, external interrupts, TWI address watch, Timer/Counter2 and watchdog keep running (if enabled); halts `clkI/O`, `clkCPU`, `clkFLASH` |
| **Power-save** | identical to Power-down, except Timer/Counter2 runs if clocked asynchronously |
| **Standby** | identical to Power-down, but the **oscillator keeps running**; wakes up in **6 clock cycles** |
| **Power-down** | external oscillator stopped; only external interrupts, TWI address watch and watchdog keep running (if enabled); wake-up only by external reset, watchdog reset, brown-out reset, TWI address match, or external **level** interrupt on INT0/INT1; there is a **delay** for the clock to restart and stabilise |

- Sleep is controlled by the **MCUCR** register: **SE** (Sleep Enable) bit and **SM2..0** (Sleep Mode Select). Recommended to set `SE` **just before** executing the `SLEEP` instruction.

**Arduino example:**

```cpp
void sleepNow() {
  set_sleep_mode(SLEEP_MODE_PWR_DOWN);   // choose the sleep mode
  sleep_enable();                        // enable the sleep bit (safety)
  attachInterrupt(0, wakeUpNow, LOW);    // wake up on LOW on pin 2 (interrupt 0)
  sleep_mode();                          // the device goes to sleep here
                                         // program continues here after wake-up
  sleep_disable();                       // first thing after waking up
  detachInterrupt(0);                    // wakeUpNow won't run during normal operation
}
```

- **Consumption:** the slides show ATmega8 datasheet plots: active supply current ICC (mA) **increases with frequency** and **with VCC** (also depends on temperature). Reference: SparkFun tutorial on reducing Arduino power consumption.

---

## 11. References

- [EA] Jeremy Blum, *Exploring Arduino*, Wiley.
- Wiring: http://wiring.org.co/
- MikroElektronika books about microcontrollers (chapter "World of microcontrollers").

---

## Cheat sheet: key facts

| Topic | Fact |
|---|---|
| MCU | ATmega328P: 8-bit AVR, 16 MHz, Flash 32 KB / SRAM 2 KB / EEPROM 1 KB |
| Architecture | **Harvard** (code in Flash, data in SRAM) |
| Clock period | 62.5 ns; most instructions 1–2 cycles |
| Control architecture | super loop (`setup()` + `loop()` in Wiring) |
| Port registers | `DDRx` (direction), `PORTx` (state/pull-up), `PINx` (read-only input) |
| I/O mapping | I/O registers memory-mapped from `0x20` |
| ADC | 10 bits → 0…1023, 6 analog pins (A0–A5) |
| PWM | pins 3, 5, 6, 9, 10, 11; 8 bit (0…255); average V = duty × VCC |
| External interrupts | pins 2, 3; `attachInterrupt()`; modes RISING/FALLING/CHANGE/LOW |
| Interrupts on AVR | no nesting; disabled in ISR; pending requests not tracked when disabled |
| ISR rules | short, no blocking, shared variables `volatile`, low latency |
| Timers | timer0, timer2 (8 bit), timer1 (16 bit); prescaler 1/8/64/256/1024 |
| CTC register | $\frac{16\,\text{MHz}}{\text{prescaler}\cdot f}-1$ (< 256 or < 65536) |
| UART | Uno: 1 (pins 0 RX, 1 TX); Mega: 4 |
| 9600 8N1 | 104 µs/bit, 10 bits/byte, 960 byte/s |
| I2C | 2 wires (SDA = A4, SCL = A5), master–slave, 7-bit addresses, pull-ups needed |
| SPI | SS=10, MOSI=11, MISO=12, SCK=13, full-duplex, no pull-ups |
| Sleep modes | Idle, ADC Noise Reduction, Power-save, Standby, Power-down |

---

## Typos and inconsistencies found in the slides

> [!warning] Worth checking before studying
> - **Slide 17 (AVR8)**: "code: 8 bits, data: 16 bits". The disassembly in slides 24–26 shows **16-bit instruction words** (e.g. `08 95`) and 8-bit registers, so the two values are probably **swapped** (my observation, not stated in the slides).
> - **Slide 34**: the registers are called `DDRx`, `PORTx`, **`PINDx`**; the name used elsewhere for the input register is `PINx` (e.g. `PIND` for port D).
> - **Slide 56**: "`STI` = Set Interrupt"; on AVR the instruction is **`SEI`** (the code in slide 70 uses `sei()`).
> - **Slide 69**: "x = timer number 1..3"; the timers are **0, 1, 2**.
> - **Slide 70 vs 71**: `setupTimer(1000)` with `OCR1A = 16*1024/freq` gives $\approx 16$, i.e. $16\text{ MHz}/(1024\cdot17)\approx 919$ Hz, not the **100 Hz** claimed in the remarks (for 100 Hz with prescaler 1024 the formula of slide 67 gives 155). The comment in the code also uses a different formula (my calculation).
> - **Slide 95**: "read (0) or write (1)" bit; in the I2C standard it is **0 = write, 1 = read** (my knowledge, not from the slides).
> - **Slide 104**: "3 lines for communicating", but 4 are listed (SCK, MOSI, MISO, SS).
> - **Slide 7 / 14**: "0.5 used by the bootloader" is **0.5 KB**.
> - **Slides 114–116**: the power-management details come from the **ATmega8** datasheet, not the ATmega328P (the slide says so in the footnote).
