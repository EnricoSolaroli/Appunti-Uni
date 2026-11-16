[pdf](https://virtuale.unibo.it/pluginfile.php/3134916/mod_label/intro/%5BLab%20Notes%5D%20Basic%20Electronics.pdf)
## PARTE 1 — ELETTRONICA DI BASE

### 1.1 Carica elettrica

- Modello elementare dell'atomo: **elettroni** (carica negativa), **protoni** (carica positiva), **neutroni** (nessuna carica).
- La carica si indica con **Q**, misurata in **Coulomb (C)**.
- 1 C = carica di 6,25 × 10¹⁸ elettroni.
- Gli atomi hanno normalmente lo stesso numero di elettroni e protoni; alcuni elettroni esterni possono diventare **elettroni liberi**.

### 1.2 Conduttori, semiconduttori, isolanti

|Tipo|Elettroni liberi|
|---|---|
|Conduttori (argento, rame)|molti|
|Semiconduttori (silicio)|pochi|
|Isolanti|pochissimi|

### 1.3 Elettricità statica

- Gli ioni (positivi/negativi) si formano quando un atomo perde o guadagna elettroni.
- Eccesso di elettroni → carica netta negativa; eccesso di protoni → carica netta positiva.

### 1.4 Campo elettrico

- Cariche opposte si attraggono, cariche uguali si respingono.
- Il campo elettrico **E** esercita una forza **F** tra le cariche: **E = lim(q→0) F/q**

### 1.5 Tensione (differenza di potenziale)

- Separare cariche opposte richiede energia (lavoro): **V = W/Q**
- **1 Volt** = differenza di potenziale tra due punti quando serve 1 Joule per spostare 1 Coulomb tra i due punti.

**Generatori di tensione (EMF)**: spostano cariche da potenziale basso ad alto.

- Batteria: chimica → elettrica
- Alimentatore: AC di rete → DC
- Cella solare: luce → elettrica (fotovoltaico)
- Generatore elettrico: meccanica → elettrica (induzione elettromagnetica)

### 1.6 Corrente elettrica (I)

- Gli elettroni liberi si muovono casualmente; applicando una tensione si genera un **moto ordinato** (dal terminale negativo al positivo).
- **I = Q/t**, misurata in **Ampere (A)**. 1 A = 1 C che attraversa un punto in 1 s.

> ⚠️ **Nota importante (verso della corrente vs verso degli elettroni)** Per **convenzione** si considera che la corrente scorra dal polo **positivo (+)** al polo **negativo (−)**. Il flusso fisico _reale_ degli elettroni va invece nella direzione **opposta**: dal negativo al positivo. Questa è una convenzione storica, non un errore nelle slide: entrambe le cose sono corrette, si riferiscono a due grandezze diverse (corrente convenzionale vs moto reale degli elettroni).

**Corrente continua (DC)**: scorre in una sola direzione (es. batterie). **Corrente alternata (AC)**: cambia direzione periodicamente. I = I₀·sin(2πft), f = 50 Hz (Europa), 60 Hz (USA).

### 1.7 Resistenza

- Gli elettroni in movimento urtano gli atomi, perdendo energia → **Resistenza (R)**, misurata in **Ohm (Ω)**. 1 Ω = 1 A con 1 V applicato.
- **Conduttanza (G) = 1/R**, misurata in **Siemens (S)**.

### 1.8 Analogia idraulica

|Grandezza elettrica|Analogia|
|---|---|
|Carica|Acqua|
|Tensione|Pressione|
|Corrente|Portata (flusso)|

### 1.9 Potenza

- **P = W/t**, misurata in **Watt (W)** = Joule/secondo.
- Energia: **W = P × t** (Ws, Wh, kWh). Es: lampada 100 W accesa 10h = 1 kWh.

### 1.10 Circuito elettrico

Composto da: generatore/i di tensione, componenti (carichi), collegamenti (fili).

- Il circuito deve essere **chiuso** perché scorra corrente.
- I componenti vanno collegati rispettando la **polarità**.

### 1.11 Legge di Ohm

**V = I × R**

- R dipende da materiale e geometria del conduttore.
- A R fissa: V ↑/↓ → I ↑/↓ (linearmente).
- A V fissa: R ↑/↓ → I ↓/↑ (linearmente, in senso inverso).

### 1.12 Potenza nei circuiti (Effetto Joule)

Calore generato dal passaggio di corrente in un resistore (urti tra elettroni e atomi): **P = V × I = I² × R = V²/R**

### 1.13 Componenti elettronici

- **Passivi** (non forniscono energia, detti anche impedenze): resistori, condensatori, induttori, diodi.
- **Attivi** (forniscono energia): transistor, circuiti integrati.

### 1.14 Resistori

- Provocano una caduta di tensione al passaggio di corrente; misurati in Ohm (Ω).
- Tipi: fissi, variabili (potenziometri, trimmer).
- **Codice colori** (4 o 5 bande): ogni banda = una cifra.
    - 4 bande: 1ª cifra, 2ª cifra, **moltiplicatore** (numero di zeri), tolleranza.

> ⚠️ **Nota / correzione importante** Il colore delle bande indica il valore della **resistenza in Ohm**, **non** i Volt. Il **moltiplicatore** (3ª banda) indica per quanto va moltiplicato il numero formato dalle prime due cifre: es. se la 3ª banda è **marrone**, il valore va moltiplicato per **×10** (non "sommato" o altro).

**Tabella colori (4 bande):**

|Colore|Cifra|Moltiplicatore|Tolleranza|
|---|---|---|---|
|Nero|0|×1|—|
|Marrone|1|×10|±1%|
|Rosso|2|×10²|±2%|
|Arancio|3|×10³|—|
|Giallo|4|×10⁴|—|
|Verde|5|×10⁵|±0,5%|
|Blu|6|×10⁶|±0,25%|
|Viola|7|×10⁷|±0,1%|
|Grigio|8|×10⁸|±0,05%|
|Bianco|9|—|—|
|Oro|—|×0,1|±5%|
|Argento|—|×0,01|±10%|

_Esempio: rosso-rosso-marrone = 22 × 10 = 220 Ω. Il resistore usato per i LED nel lab è appunto 220 Ω._

### 1.15 Condensatori e induttori

- **Condensatori**: immagazzinano carica/tensione; capacità in **Farad (F)** (tipicamente microfarad o meno).
- **Induttori**: generano un campo magnetico al passaggio di corrente; usati in trasformatori, relè, motori; lasciano passare la DC ma si oppongono alla AC (in base alla frequenza).

### 1.16 Diodi e LED

- **Diodo**: semiconduttore che fa passare corrente in una sola direzione; anodo (+), catodo (−); usato per raddrizzamento, rilevazione.
- **LED (Light Emitting Diode)**: diodo che emette luce.

> ⚠️ **Nota su polarità del LED (dai tuoi appunti, confermata)** Il LED ha un verso di inserimento obbligato:
> 
> - **Anodo** = piedino **più lungo** = polo **positivo (+)**
> - **Catodo** = piedino **più corto** = polo **negativo (−)**
> 
> Tensione operativa tipica: dipende dal colore (es. verde ≈ 2,0 V, rosso ≈ 1,3 V). Corrente tipica: 10–20 mA (max 30 mA).

**Come si calcola la resistenza di protezione per un LED** (esempio dal lab, LED rosso su pin a 5V):

1. Tensione da "assorbire" sul resistore = 5V − 2V (LED) = 3V
2. Corrente desiderata ≈ 20 mA = 0,02 A
3. R = V/I = 3 / 0,02 = **150 Ω** (minimo) → si usa **220 Ω** dal kit (più sicuro, LED leggermente meno luminoso).

### 1.17 Transistor

- Componente attivo a tre terminali: **collettore, base, emettitore**.
- Usato per amplificazione, commutazione (switching), pilotaggio di carichi di potenza.
- Una piccola corrente sulla base (I_be) permette il passaggio di una corrente maggiore tra collettore ed emettitore (I_ce).

### 1.18 Analisi dei circuiti

- La corrente convenzionale scorre dal potenziale più alto a quello più basso.
- Per un resistore che segue la legge di Ohm: **I = ΔV/R**
- Si assume resistenza dei fili e del generatore trascurabile (generatore ideale = resistenza interna nulla).

### 1.19 Leggi di Kirchhoff

- **Legge dei nodi (corrente)**: la somma algebrica delle correnti entranti in un nodo è zero → i1 + i2 = i3 + i4
- **Legge delle maglie (tensione)**: la somma algebrica delle tensioni lungo una maglia chiusa è zero → v1 + v2 + v3 − v4 = 0

### 1.20 Resistori e condensatori in serie/parallelo

||Serie|Parallelo|
|---|---|---|
|**Resistori**|R_eq = R₁ + R₂|R_eq = 1/(1/R₁+1/R₂) = R₁R₂/(R₁+R₂)|
|**Condensatori**|C_eq = 1/(1/C₁+1/C₂) = C₁C₂/(C₁+C₂)|C_eq = C₁ + C₂|

_Nota: i condensatori in serie si comportano come i resistori in parallelo, e viceversa._

### 1.21 Strumenti di misura

- **Amperometro**: misura la corrente; va collegato **in serie**; resistenza interna molto bassa (idealmente nulla).
- **Voltmetro**: misura la tensione; va collegato **in parallelo**; resistenza interna molto alta (idealmente infinita).
- **Multimetro/Tester**: combina entrambe le funzioni (+ ohmmetro, ecc.).

---

## PARTE 2 — PROGRAMMAZIONE MCU (ARDUINO)

### 2.1 Obiettivo del modulo

Panoramica pratica sulla programmazione di microcontrollori con Arduino/Wiring: I/O digitale, uscita PWM, ingresso analogico, interrupt, timer, seriale TTL.

### 2.2 Il progetto Arduino

- Nato nel 2005 all'Interaction Design Institute Ivrea (basato sulla piattaforma **Wiring**, creata da Hernando Barragán nel 2003, a sua volta basata su un microcontrollore ATmega128).
- Team: Massimo Banzi, David Cuartielles, Tom Igoe, Gianluca Martino, David Mellis.
- **Open-source**, hardware e software; filosofia "maker" (prototipazione, sperimentazione). Sito: arduino.cc

### 2.3 Arduino UNO — componenti principali

- MCU: **ATmega328P**, 8 bit, 16 MHz
- Memoria Flash: 32 KB; SRAM: 2 KB; EEPROM: 1 KB
- 14 pin digitali I/O (6 utilizzabili come uscita PWM)
- 6 ingressi analogici
- Connettore USB, jack di alimentazione, header ICSP, pulsante di reset

**Specifiche elettriche:**

- Tensione operativa: 5V
- Tensione di alimentazione consigliata: 7–12 V
- Corrente max per pin I/O: 40 mA
- Corrente max sul pin 3.3V: 50 mA

**Elementi sulla scheda:** LED onboard (collegato al pin 13), µC per conversione seriale TTL→USB, oscillatore al quarzo (clock 16 MHz), pin di riferimento tensione (GND, 5V, 3.3V), LED TX/RX (attività seriale), connettore ICSP.

### 2.4 Specifiche dei pin

- **Pin digitali 0–13**: tensione nominale 5V, possono fornire/assorbire fino a 40 mA.
- **Ingressi analogici A0–A5**: tensione nominale 5V, risoluzione **10 bit** → valore ADC 0–1023 (0–5V mappati su 0–1023).
- Pin **AREF**: permette di cambiare il valore di riferimento (max) dell'ADC.

### 2.5 Alimentazione esterna

Via USB (dal PC) oppure batterie/alimentatore esterno. **Esempio calcolo capacità batteria**: consumo stimato 150 mA, autonomia desiderata 8h → capacità ≥ 150 mA × 8h = **1200 mAh**.

### 2.6 Framework, IDE e strumenti

- **Wiring**: framework open-source cross-platform (AVR, TI MSP430, Microchip PIC24/32...), basato su GNU GCC + librerie custom, linguaggio C/C++. Toolchain avr-gcc.
- **Arduino IDE**: semplice, per piccoli progetti, scritto in Java.
- **PlatformIO + VS Code**: per progetti più complessi.
- **Simulatori**: Wokwi, Tinkercad.

### 2.7 Struttura del programma: il super loop

Due procedure principali:

- **setup()**: eseguita **una volta** all'avvio, per configurare lo stato iniziale.
- **loop()**: corpo del ciclo di controllo, eseguito **ripetutamente**.

### 2.8 Caricamento ed esecuzione del programma

Due modalità:

1. Direttamente dal PC, sfruttando il **bootloader** preinstallato sull'MCU (quella usata in laboratorio).
2. Tramite programmatore esterno via interfaccia ICSP.

**Boot:** al reset parte il bootloader; se riceve subito un comando dall'IDE (via seriale) carica il nuovo binario in Flash e lo esegue; altrimenti esegue l'ultimo eseguibile presente in memoria.

### 2.9 Mappa di memoria (runtime)

Segmenti creati dal compilatore avr-gcc: **.data** (variabili globali), **.bss** (costanti), **heap**, **stack**.

- Heap e stack crescono in direzioni opposte → possono collidere in caso di overflow di memoria.
- I registri interni (I/O, timer...) occupano lo spazio 0x00–0xFF → il primo indirizzo utile di RAM utente è 0x100 (256), l'ultimo 0x8FF (2303, cioè 256 + 2KiB).

### 2.10 Setup ambiente di laboratorio

- **Hardware**: PC + Arduino UNO + cavo, breadboard, resistori (220 Ω, 1 KΩ, 10 KΩ), LED, pulsante tattile, potenziometro.
- **Software**: Arduino IDE (Wiring); Tinkercad/Eagle/Fritzing per gli schemi.
- **Strumenti condivisi**: multimetro.

### 2.11 La breadboard (basetta sperimentale)

> 📝 **Note integrate (dai tuoi appunti, corrette e completate)**

**Struttura generale:**

- Useful per creare circuiti **senza saldature**.
- Ci sono due tipi di aree: **strisce terminali** (terminal strips) e **strisce di bus** (bus strips).

**Isolamento centrale e colonne (terminal strips):**

- La fessura (notch) al centro della basetta segna la linea centrale e **isola elettricamente** la metà superiore da quella inferiore.
- I fori di una stessa **colonna verticale** sono collegati elettricamente tra loro, tipicamente in gruppi di **5 fori** (5 clip) per lato della fessura.
- Colonne verticali **adiacenti** sono invece elettricamente **separate** (non comunicano tra loro).

**Linee di alimentazione (bus strips):**

- Le due file di fori più esterne (in alto e in basso sulla basetta, affiancate da linee colorate rosse/blu o nere) sono collegate elettricamente **in orizzontale** per tutta la loro lunghezza.
- Servono per distribuire comodamente **alimentazione (+)** e **massa/ground (−)** a tutti i componenti del circuito.

**Jumper:** cavi di collegamento, disponibili in versione **maschio-maschio** e **maschio-femmina**.

### 2.12 Attenzione! (sicurezza)

- Evitare i **cortocircuiti** (connessione tra 2 punti a resistenza zero con tensione > 0 → corrente ~infinita per la legge di Ohm) → possono bruciare componenti e la scheda Arduino stessa.
- Verificare sempre la corrente massima assorbibile da un componente e da un pin dell'MCU.
- Verificare sempre la **polarità** dei componenti (es. LED).

---

## 2.13 Attività pratiche di laboratorio (Step #1–#12)

|#|Attività|Hardware|Concetti chiave|
|---|---|---|---|
|1|LED interno lampeggiante|—|super loop, `pinMode`, `digitalWrite`, `delay`|
|2|LED esterno lampeggiante|LED, R 220Ω|polarità LED, calcolo del resistore|
|3|Lampeggio con log|LED, R 220Ω|libreria `Serial`, monitor seriale|
|4|Pulsante-LED|LED, R 220Ω, pulsante, R 10KΩ|I/O digitale, `digitalRead`, resistenza di pull-down|
|5|Dimmer controllato|potenziometro, LED, R 220Ω|`analogRead`, `analogWrite` (PWM)|
|6|Conteggio pressioni|pulsante, R 10KΩ|interrupt, bouncing, sezioni critiche|
|7|Lampeggio con Timer|LED, R 220Ω|libreria `Timer1`, interrupt a timer|
|8|Deep sleep|pulsante, R 10KΩ|modalità sleep, risveglio da interrupt|
|9|Light sleep|—|sleep con timer ancora attivi|
|10|Serial echo|—|`Serial.available`, `Serial.read`|
|11|Scansione bus I2C|LCD I2C|libreria `Wire.h`|
|12|Uso di un LCD I2C|LCD I2C|libreria device-specific (`LiquidCrystal_I2C`)|

### Step #1 — LED interno lampeggiante

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

### Step #2 — LED esterno lampeggiante

Circuito: pin 13 → resistore 220Ω → LED (anodo) → catodo → GND. (vedi §1.16 per il calcolo del resistore: R = (5V − 2V)/0,02A ≈ 150Ω, si usa 220Ω)

### Step #3 — Lampeggio con log seriale

```cpp
#define LED_PIN 13
void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}
void loop() {
  digitalWrite(LED_PIN, HIGH);
  Serial.println("ON");
  delay(1000);
  digitalWrite(LED_PIN, LOW);
  Serial.println("OFF");
  delay(1000);
}
```

> 📝 **Nota integrata sul monitor seriale (dai tuoi appunti, precisata)** Il **monitor seriale** permette di comunicare con Arduino: visualizzare messaggi inviati via seriale e, allo stesso tempo, inviarne di propri (comunicazione **bidirezionale**: Arduino può sia ricevere sia inviare dati, tramite `Serial.read/write` e `Serial.print/println`). Il **baud rate** (velocità di trasmissione) deve essere lo **stesso** sia sul lato Arduino (`Serial.begin(...)`) sia sul monitor seriale dell'IDE: se non coincide, i dati vengono interpretati male → messaggi corrotti ("errori"). Non è quindi tanto vero che "più la velocità è alta più aumenta la probabilità di errore" in assoluto, quanto che **un baud rate troppo alto rispetto a quanto il collegamento/cablaggio può sostenere in modo affidabile**, o una configurazione **non allineata** tra le due parti, aumenta il rischio di errori di trasmissione.

### Step #4 — Pulsante-LED

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
    Serial.println("ON");
  } else {
    digitalWrite(LED_PIN, LOW);
    Serial.println("OFF");
  }
}
```

**Resistenza di pull-down (10 KΩ)**: garantisce che, a pulsante non premuto, il pin di ingresso sia a livello LOW ("pull-down" = segnale forzato a GND; il contrario, "pull-up", forza a VCC/HIGH). Si usa un valore alto per minimizzare la corrente che scorre in quel ramo del circuito.

_Nota sul metodo: qui si usa il **polling** (lettura periodica dello stato del pin) → problema: se il pulsante viene premuto molto velocemente, la pressione potrebbe non essere rilevata._

### Step #5 — Dimmer controllato (PWM)

```cpp
#define POT_PIN A0
#define LED_PIN 9   // pin PWM
int current;
void setup() {
  pinMode(LED_PIN, OUTPUT);
}
void loop() {
  int newValue = analogRead(POT_PIN);       // 0..1023
  if (newValue != current) {
    current = newValue;
    int outputValue = map(current, 0, 1023, 0, 255);
    analogWrite(LED_PIN, outputValue);
  }
}
```

Pin PWM disponibili sull'Uno: 3, 5, 6, 9, 10, 11 (contrassegnati con `~`). La tensione ai capi del potenziometro varia tra 0 e VCC (5V) in base alla rotazione della manopola.

### Step #6 — Conteggio con interrupt

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
  int current = count;
  interrupts();
  if (current != prev) {
    Serial.println(current);
    prev = current;
  }
}
void inc() {
  count++;
}
```

- **Bouncing**: fenomeno meccanico per cui, alla pressione, il pulsante genera più rimbalzi/interrupt spuri prima di stabilizzarsi → soluzione software: ignorare gli impulsi che arrivano subito dopo il primo (es. entro 20–30 ms).
- **Atomicità/sezioni critiche**: l'assegnazione della variabile `count` (condivisa con l'interrupt handler) va resa atomica con `noInterrupts()`/`interrupts()`, per evitare race condition. Va minimizzato il tempo con interrupt disabilitati, perché in quel periodo l'MCU non è reattivo agli eventi esterni (che vengono persi).
- Non tutti gli incrementi vengono stampati: il logging è asincrono rispetto all'incremento, quindi tra due stampe possono avvenire più incrementi.

### Step #7 — Lampeggio event-driven con Timer

```cpp
#include "TimerOne.h"
#define LED_PIN 13
boolean flagState = false;
void blinky() {
  if (!flagState) digitalWrite(LED_PIN, HIGH);
  else digitalWrite(LED_PIN, LOW);
  flagState = !flagState;
}
void setup() {
  pinMode(LED_PIN, OUTPUT);
  Timer1.initialize(1000000);   // 1.000.000 µs = 1 sec
  Timer1.attachInterrupt(blinky);
}
void loop() {}
```

### Step #8 — Deep sleep

```cpp
#include <avr/sleep.h>
void wakeUp() {}
void setup() {
  Serial.begin(9600);
  pinMode(2, INPUT);
  attachInterrupt(digitalPinToInterrupt(2), wakeUp, RISING);
}
void loop() {
  Serial.println("POWER DOWN IN 1s ...");
  Serial.flush();
  delay(1000);
  set_sleep_mode(SLEEP_MODE_PWR_DOWN);
  sleep_enable();
  sleep_mode();               // il programma riprende da qui al risveglio
  Serial.println("WAKE UP");
  sleep_disable();
}
```

### Step #9 — Light sleep (timer ancora attivi)

Idea chiave: in `SLEEP_MODE_IDLE` si disabilitano selettivamente solo i componenti non necessari (ADC, SPI, Timer0, Timer2, TWI), lasciando **Timer1** attivo → utile per implementare scheduler.

### Step #10 — Serial echo

```cpp
void setup() {
  Serial.begin(9600);
}
void loop() {
  if (Serial.available()) {
    char data = Serial.read();
    Serial.print(data);
  }
}
```

### Step #11 — Scansione bus I2C

- Libreria `Wire.h`; Arduino è il dispositivo **primario (master)**, l'LCD è **secondario (slave)**.
- Collegamento I2C: SDA → A4, SCL → A5.
- Il codice scandisce gli indirizzi 1–126 e segnala quelli che rispondono (es. LCD trovato a 0x27).

### Step #12 — Uso di un LCD I2C

```cpp
#include <LiquidCrystal_I2C.h>
// Wiring: SDA => A4, SCL => A5 — indirizzo I2C LCD: 0x27, 20 colonne x 4 righe
LiquidCrystal_I2C lcd = LiquidCrystal_I2C(0x27, 20, 4);
void setup() {
  lcd.init();
  lcd.backlight();
}
void loop() {
  lcd.setCursor(2, 1);
  lcd.print("Hello World!");
}
```

**Display LCD**: basato sulle proprietà ottiche dei cristalli liquidi, intrappolati tra due superfici di vetro con contatti elettrici che generano un campo elettrico; ogni contatto controlla un pixel (o subpixel a colori). Basso consumo → ottimo per sistemi embedded. Il classico LCD parallelo 16×2 può essere collegato a 8 pin, 4/6 pin, oppure via I2C (più semplice, meno pin usati).

---

## 2.14 Nota aggiuntiva: gestire più LED nel super loop senza bloccare

> 📝 **Appunto integrato (dai tuoi appunti sulla soluzione del prof)**

Per far lampeggiare **più LED in sequenza** dentro il super loop, conviene **evitare un ciclo `for` bloccante** (che fermerebbe l'esecuzione del `loop()` finché non finisce), e sfruttare invece il fatto che il super loop gira continuamente da solo: ad ogni passaggio si decide _quale_ LED accendere/spegnere, senza `delay()` bloccanti.

Approccio consigliato:

1. Dichiarare **`current`** come **variabile globale** (l'indice del LED attivo, o l'ultimo istante di cambiamento) — deve essere globale perché deve mantenere il proprio valore tra un'iterazione e l'altra del `loop()`.
2. Creare una funzione helper, es. **`blinkLed(pin)`**, che gestisce l'accensione/spegnimento di un singolo LED.
3. Usare `millis()` (tempo non bloccante) al posto di `delay()`, per decidere quando passare al LED successivo.

Esempio schematico:

```cpp
#define N_LED 3
int ledPins[N_LED] = {9, 10, 11};
int current = 0;               // indice del LED attivo (variabile globale)
unsigned long lastChange = 0;
const unsigned long INTERVAL = 500; // ms

void blinkLed(int pin) {
  digitalWrite(pin, HIGH);
}

void setup() {
  for (int i = 0; i < N_LED; i++) pinMode(ledPins[i], OUTPUT);
}

void loop() {
  unsigned long now = millis();
  if (now - lastChange >= INTERVAL) {
    digitalWrite(ledPins[current], LOW);      // spegni il LED corrente
    current = (current + 1) % N_LED;          // passa al successivo
    blinkLed(ledPins[current]);               // accendi il nuovo
    lastChange = now;
  }
}
```

Questo pattern (variabile di stato globale + confronto con `millis()`, invece di `delay()`) è alla base di molte tecniche di **scheduling cooperativo** che verranno riprese nei moduli successivi del corso.

---

## Riepilogo formule principali

|Formula|Significato|
|---|---|
|V = W/Q|Tensione = energia / carica|
|I = Q/t|Corrente = carica / tempo|
|V = I × R|Legge di Ohm|
|P = V×I = I²R = V²/R|Potenza (effetto Joule)|
|W = P × t|Energia|
|R_serie = R₁+R₂ ; R_parallelo = R₁R₂/(R₁+R₂)|Resistori|
|C_serie = C₁C₂/(C₁+C₂) ; C_parallelo = C₁+C₂|Condensatori|
iot di oggi