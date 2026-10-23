[\[Lab Notes\] Sensors and Actuators - Typologies and Examples](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/iot/lab/%5BLab Notes%5D Sensors and Actuators - Typologies and Examples.pdf>)

# Lab – Sensors and Actuators: Typologies and Examples

>> Note di laboratorio collegate alla teoria del modulo [[01.3 - Sensors, Actuators and Measurements - Basics]] (misure, caratteristica statica, accuratezza) e all'uso di GPIO, ADC, PWM e bus seriali visto in [[01.2 - Embedded systems based on microcontrollers]].

## Indice

1. **Introduzione e tipologie di sensori** (slide 2–6)
	- [[#Slide 2 – Outline|Struttura del modulo]]
	- [[#Slide 4 – Sensors: Typologies|Classificazione dei sensori]]
	- [[#Slide 5 – Large Market|Mercato e cataloghi di sensori]]
	- [[#Slide 6 – Wiring Libraries and Arduino Playground/Wiki|Librerie Wiring e Arduino Project Hub]]
2. **Sensori di prossimità e sonar** (slide 7–15)
	- [[#Slide 7 – Proximity|Sensori di prossimità: tecnologie]]
	- [[#Slide 8 – Ultrasonic Proximity Sensors|Sensori a ultrasuoni: pro e contro]]
	- [[#Slide 9 – HC-SR04 Example|Sonar HC-SR04]]
	- [[#Slide 10 -> 11 – Usage Example in Arduino|Calcolo della distanza e velocità del suono]]
	- [[#Slide 12 – Program|Sketch Arduino per l'HC-SR04]]
	- [[#Slide 13 – The Routine pulseIn|La funzione pulseIn]]
	- [[#Slide 14 – Optical Proximity Sensors|Sensori di prossimità ottici (IR Sharp)]]
3. **Sensori di movimento, posizione angolare e accelerazione** (slide 16–22)
	- [[#Slide 16 – Movement Sensors|Sensori di movimento]]
	- [[#Slide 17 – PIR - Infrared Passive Sensor|Sensore PIR]]
	- [[#Slide 19 – Angular Position Transducers|Inclinometri ed encoder]]
	- [[#Slide 20 – Acceleration Sensors|Accelerometri e giroscopi]]
	- [[#Slide 21 – Example|Esempio MPU-6050]]
	- [[#Slide 22 – MEMS Technology|Tecnologia MEMS]]
4. **Sensori di contatto, pressione e ottici** (slide 23–29)
	- [[#Slide 23 – CONTACT SENSORS|Pulsanti, potenziometri e sensori capacitivi]]
	- [[#Slide 24 – EXAMPLES|Esempi: potenziometro e TTP223B]]
	- [[#Slide 25 – PRESSURE SENSOR|Sensore di forza FSR]]
	- [[#Slide 26 – OPTICAL SENSORS|Sensori d'immagine]]
	- [[#Slide 27 – PHOTODETECTORS|Fotorivelatori: tecnologie]]
	- [[#Slide 28 -> 29 – EXAMPLE: PHOTORESISTOR|Fotoresistenza: parametri]]
		- Collegamento con partitore di tensione
5. **Sensori elettrici, ambientali, chimici e sonori** (slide 30–34)
	- [[#Slide 30 – ELECTRICITY AND MAGNETISM|Tensione, corrente, magnetometro e bussola]]
	- [[#Slide 31 -> 32 – WEATHER AND CLIMA|Sensori di temperatura TMP36 e TC74]]
		- Umidità (DHT11) e pressione barometrica (BMP085)
	- [[#Slide 33 – SENSORS DETECTING CHEMICALS|Sensori di gas e di polveri]]
	- [[#Slide 34 – SOUND|Microfoni]]
6. **Localizzazione e dispositivi di input** (slide 35–39)
	- [[#Slide 35 – GLOBAL LOCALISATION|GPS e trilaterazione]]
	- [[#Slide 36 – EXAMPLE|Modulo GPS PAM-7Q]]
	- [[#Slide 37 – LOCAL LOCALISATION|RFID, NFC, iBeacon, UWB]]
	- [[#Slide 38 – LOCALISATION TECHS OVERVIEW|Confronto costo/precisione]]
	- [[#Slide 39 – FOR DATA INPUT|Keypad]]
7. **Attuatori e interfacciamento** (slide 40–44)
	- [[#Slide 40 – ACTUATORS AND OUTPUT DEVICES|Attuatori e dispositivi di output]]
	- [[#Slide 41 – OUTPUT TRANSDUCERS (ACTUATORS)|Trasduttori di uscita]]
	- [[#Slide 42 – INTERFACING|Pilotaggio diretto da GPIO o tramite circuito esterno]]
	- [[#Slide 43 – RESISTIVE VS. INDUCTIVE LOADS|Carichi resistivi e induttivi]]
	- [[#Slide 44 – ACTUATOR EXAMPLES|Esempi di attuatori]]
8. **LED e display LCD** (slide 45–50)
	- [[#Slide 45 – LEDS|LED]]
	- [[#Slide 46 – DISPLAY LCD|Display a cristalli liquidi]]
	- [[#Slide 47 -> 48 – EXAMPLE|LCD 16x2: modalità di collegamento e libreria LiquidCrystal]]
		- Pinout, schema di collegamento e codice
9. **Motori elettrici: DC, stepper e servo** (slide 51–67)
	- [[#Slide 51 -> 52 – ELECTRIC MOTORS|Statore, rotore e tipi di motori]]
		- Motori brushed e brushless
	- [[#Slide 53 – DIRECT CURRENT MOTORS (DC)|Motori in corrente continua]]
	- [[#Slide 54 – DC MOTORS: OPERATING PRINCIPLE|Principio di funzionamento del motore DC]]
	- [[#Slide 56 – STEPPER MOTOR|Motori passo-passo]]
	- [[#Slide 57 -> 58 – SERVO MOTOR|Servomotori]]
		- Controllo del servo con impulsi a 50 Hz
	- [[#Slide 60 -> 61 – EXAMPLE IN ARDUINO|Esempio Arduino con impulsi generati a mano]]
	- [[#Slide 62 – HOW IT WORKS|Temporizzazione e calibrazione]]
	- [[#Slide 63 – SERVO LIBRARY|Libreria Servo]]
	- [[#Slide 64 -> 65 – KNOB|Esempio Knob]]
	- [[#Slide 66 -> 67 – SWEEP|Esempio Sweep]]
10. **Pilotaggio di motori DC: transistor, PWM e ponte H** (slide 68–79)
	- [[#Slide 68 – DC MOTORS|Controllo di velocità e verso]]
	- [[#Slide 69 – EXAMPLE IN ARDUINO|Alimentazione separata del motore]]
	- [[#Slide 70 – SCHEMA|Schema con transistor NPN, diodo e condensatore]]
	- [[#Slide 71 – HOW IT WORKS|Transistor come interruttore e duty cycle]]
	- [[#Slide 72 – SKETCH|Montaggio e verifiche]]
	- [[#Slide 73 – PROGRAMMING|Controllo di velocità con analogWrite]]
	- [[#Slide 74 – ADDING A POTENTIOMETER|Velocità regolata da potenziometro]]
	- [[#Slide 75 – H-BRIDGE FOR DIRECTION CONTROL|Ponte H: stati operativi]]
	- [[#Slide 77 – H-BRIDGE: EXAMPLE|Driver SN754410]]
	- [[#Slide 78 – SKETCH WITH H-BRIDGE|Montaggio con ponte H]]
	- [[#Slide 79 – PROGRAMMING|Codice: avanti, indietro e frenata]]
11. **Controllo di circuiti esterni: relè e optoisolatori** (slide 80–82)
	- [[#Slide 80 – CONTROLLING EXTERNAL CIRCUITS|Relè e optoisolatori]]
	- [[#Slide 81 – RELAY SWITCH|Struttura del relè]]
	- [[#Slide 82 – RELAY WIRING|Collegamento di un relè con transistor]]
12. **Interfacciamento tra livelli di tensione diversi** (slide 83–87)
	- [[#Slide 83 – ABOUT INTERFACING COMPONENTS USING DIFFERENT VOLTAGE LEVELS|Introduzione]]
	- [[#Slide 84 – DIFFERENT VOLTAGE LEVELS PROBLEM|Il problema 5 V e 3,3 V]]
	- [[#Slide 85 – VOLTAGE DIVIDER|Partitore di tensione]]
	- [[#Slide 86 – BI-DIRECTIONAL LOGIC LEVEL CONVERTER|Convertitore di livello bidirezionale]]
	- [[#Slide 87 – REFERENCES|Riferimenti]]

---
## Slide 1 – [Lab Notes] Sensors and Actuators – Typologies and Examples

Embedded Systems and IoT
Ingegneria e Scienze Informatiche - UNIBO
a.y. 2026/2027

**[Lab Notes]**
SENSORS AND ACTUATORS
TYPOLOGIES AND EXAMPLES

---
## Slide 2 – Outline

- Sensors and input devices - typologies
- Actuators and output devices - typologies
- Driving devices of external circuits

---
## Slide 3 – Sensors - Some Typologies

SENSORS
- SOME TYPOLOGIES

---
## Slide 4 – Sensors: Typologies

- Proximity sensors
- Movement detection sensors
- Angular position transducers
- Acceleration sensor
- Contact sensors
- Optical sensors
- Electricity and magnetism sensors
- Environmental parameter sensors
- Physiological/vital parameter sensors
- Sound sensors
- Localisation sensors
- Identity detection sensors

---
## Slide 5 – Large Market

- Large availability on the marker
- E.g. Adafruit sensor list
	- https://www.adafruit.com/category/35

---
## Slide 6 – Wiring Libraries and Arduino Playground/Wiki

- **Wiring libraries about sensors and actuators**
	- http://wiring.org.co/learning/libraries/
- **Arduino project hub**
	- examples, projects
	- https://create.arduino.cc/projecthub

>> Wiring è il framework/linguaggio da cui deriva l'API di Arduino (`digitalWrite`, `pinMode`, `pulseIn`, ...): per questo le librerie Wiring per sensori e attuatori sono in gran parte riutilizzabili su Arduino.

---
## Slide 7 – Proximity

- **Proximity sensors** can detect the presence of some object at some distance
	- max distance = rated or nominal distance or range
- Based on different technologies
	- ultrasonic sensors (sonars)
	- optical sensors
	- inductive sensors
	- magnet sensors
	- …
- Typically proximity sensors just detect an object
	- without measuring the distance

>> Un sensore di prossimità "puro" ha un'uscita essenzialmente binaria (oggetto presente / assente entro la portata nominale). Alcuni dispositivi, come il sonar HC-SR04 visto dopo, permettono invece anche di *misurare* la distanza: in quel caso si parla più propriamente di sensori di distanza (rangefinder).
>> Gli induttivi rilevano solo oggetti metallici (variazione del campo di una bobina); i magnetici (es. reed switch, effetto Hall) rilevano un magnete montato sull'oggetto.

---
## Slide 8 – Ultrasonic Proximity Sensors

- Sonar operating principle
	- they emit an sonar impulse (240 KHz), and detect the echo back — in the case of an object in the nominal range
- Pros
	- quite long nominal distances (up to 10 m);
	- no affected by electromagnetic interference
	- can detect object of different materials (but sound-adsorbing material)
	- can detect objects without any specific setup or marks on the object side
- Cons
	- slow response time
	- can be affected by the object surfaces (orientation)

>> Ultrasuoni = frequenze sopra la soglia udibile (~20 kHz). Nota: l'HC-SR04 dei lucidi successivi lavora a 40 kHz.
>> Il tempo di risposta è "lento" perché il suono viaggia a ~343 m/s: per un oggetto a 3 m l'eco torna dopo $2\cdot 3/343 \approx 17.5$ ms, e tra una misura e l'altra bisogna attendere che gli echi residui si smorzino (si consigliano ~60 ms tra due trigger).
>> Superfici inclinate riflettono l'onda lontano dal ricevitore (eco perso); materiali morbidi/porosi (tessuti, spugne) *assorbono* il suono.

---
## Slide 9 – HC-SR04 Example

- **HC-SR04** sensor
	- datasheet and docs: https://docs.google.com/document/d/1Y-yZnNhMYy7rwhAgyL_pfa39RsB-x2qR4vP8saG73rE/edit

![[IOTL03-s009-1.png|285]]

>> I due "cilindri" sono un trasmettitore (T) e un ricevitore (R) a ultrasuoni. I 4 pin sono: VCC (5 V), Trig, Echo, GND.

---
## Slide 10 -> 11 – Usage Example in Arduino

- HC-SR04 - Characteristics
	- detection distance: from 3 cm to 6 meters
	- 2 control pins: **Echo** and **Trig**
- Usage strategy / operating principles:
	- *an impulse is sent on the Trig pin and we measure time elapsed to receive the echo on Echo pin (if an object is present)*
	- *given that time => we can compute the distance, knowing the speed of sound (330 m/s)*
- Calculation
	- vs * dt = 2 * d
	- d = (vs*dt)/2
	- dt = 2 * d / vs
- So an object at a distance of 50 cm = 0.5 m is detected in dt = 1/330 = 0.003030 s = 3.030 ms = 3030 us
- The speed of sound depends on different enviromental factors, such as the temperature: vs = (331.3 + 0.606*T)
	- At 20 C degrees => 343 m/s.

$$v_s \cdot \Delta t = 2d \quad\Rightarrow\quad d = \frac{v_s\,\Delta t}{2}, \qquad \Delta t = \frac{2d}{v_s}$$

$$v_s \approx 331.3 + 0.606\,T \;\; [\text{m/s}],\ T \text{ in } ^\circ\text{C}$$

>> Il fattore 2 c'è perché il suono fa andata e ritorno: percorre $2d$ nel tempo $\Delta t$.
>> Esempio della slide: $\Delta t = \frac{2\cdot 0.5}{330} = \frac{1}{330} \approx 3.03$ ms. Con il valore più realistico $v_s = 343$ m/s a 20 °C si otterrebbe $\Delta t = 1/343 \approx 2.92$ ms: usare 330 m/s invece di 343 m/s introduce un errore di circa il 4% sulla distanza.
>> Regola pratica molto usata: a 20 °C il suono impiega circa $29\ \mu s$ per fare 1 cm, quindi andata+ritorno $\approx 58\ \mu s/\text{cm}$, cioè $d[\text{cm}] \approx \Delta t[\mu s]/58$.
>> Verifica: $331.3 + 0.606 \cdot 20 = 343.42$ m/s.

- [example from Make:Sensors]
	- Trig/echo connected to pin 8/7

![[IOTL03-s011-1.png|600]]

>> Collegamenti: VCC del sensore al 5V di Arduino (filo rosso), GND a GND (filo nero), Trig al pin digitale 8 e Echo al pin digitale 7 (fili giallo/verde).

---
## Slide 12 – Program

```cpp
const int trigPin = 8;
const int echoPin = 7;
/* supposing to have a temperature
   of 20 °C */
const float vs = 331.5 + 0.6*20;

void setup()
{
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

float getDistance()
{
    /* sending impulse */
    digitalWrite(trigPin,LOW);
    delayMicroseconds(3);
    digitalWrite(trigPin,HIGH);
    delayMicroseconds(5);
    digitalWrite(trigPin,LOW);

    /* receiving the eco */
    float tUS = pulseIn(echoPin, HIGH);
    float t = tUS / 1000.0 / 1000.0 / 2;
    float d = t*vs;
    return d;
}
…
```

```cpp
…

void loop()
{
  float d = getDistance();
  Serial.println(d);
  delay(200);
}
```

>> Passi di `getDistance()`:
>> 1. si porta Trig a LOW per "pulire" la linea, poi si genera un breve impulso HIGH su Trig (il datasheet raccomanda almeno $10\ \mu s$; qui ne vengono usati 5);
>> 2. il sensore emette il burst ultrasonico e alza Echo per un tempo pari al tempo di volo andata+ritorno;
>> 3. `pulseIn(echoPin, HIGH)` restituisce la durata in $\mu s$ di quell'impulso HIGH;
>> 4. `tUS / 1000.0 / 1000.0` converte in secondi, il `/ 2` prende solo l'andata; quindi `d = t*vs` è in **metri**.
>> Con `vs = 331.5 + 0.6*20 = 343.5` m/s. Esempio: `tUS = 2915` → $t = 0.0014575$ s → $d \approx 0.50$ m.
>> Se nessun eco arriva entro il timeout (default 1 s), `pulseIn` restituisce 0 e quindi `d = 0`: conviene trattare questo caso come "nessun oggetto".

---
## Slide 13 – The Routine pulseIn

- **pulseIn**
	- efficient routine part of Wiring libreria
	- monitoring the input pin where to receive the impulse, tracking the time
	- timings can be quite small (microseconds)
		- must be very efficient
- Source code
	- https://github.com/arduino/Arduino/blob/master/hardware/arduino/avr/cores/arduino/wiring_pulse.c

>> Firma: `unsigned long pulseIn(uint8_t pin, uint8_t state, unsigned long timeout = 1000000L)`. Attende che il pin passi allo stato `state`, misura quanto ci resta e restituisce la durata in microsecondi (0 se scatta il timeout). È una funzione *bloccante* (busy waiting): durante la misura il loop non fa altro.

---
## Slide 14 – Optical Proximity Sensors

- Based on light
	- also called photoelectric sensors
- Normally infrared light is used
	- typically not influenced by environment light
- Operating principle based on light reflection
	- strongly affected by surface orientation
	- typical distance range: from 10 to 100 cm
	- by mounting *a reflex reflector* on the object to be detected, the nominal range can arrive up to 50 m

>> Un emettitore IR (LED) invia luce, un ricevitore rileva quella riflessa dall'oggetto. Il catarifrangente ("reflex reflector") rimanda la luce verso la sorgente in modo molto efficiente, aumentando enormemente la portata.

---
## Slide 15 – Example

- Sharp GP2Y0A41SK0F IR
	- infrared sensor
	- http://www.alldatasheet.com/view.jsp?Searchword=Gp2y0a41sk0f

![[IOTL03-s015-1.png|339]]

>> Questo sensore Sharp (portata circa 4–30 cm) fornisce un'uscita **analogica**: una tensione che dipende (in modo non lineare, circa inversamente) dalla distanza; si legge con `analogRead` e si converte in distanza con la curva del datasheet. Funziona per triangolazione dell'angolo del raggio riflesso, quindi dipende poco dal colore/riflettività dell'oggetto.

---
## Slide 16 – Movement Sensors

- PIR
- Angular position transducers
- till-ball switch
- vibration detectors

>> "till-ball" sta per *tilt-ball switch*: un interruttore con una pallina metallica interna che chiude/apre il contatto a seconda dell'inclinazione del sensore.

---
## Slide 17 – PIR - Infrared Passive Sensor

- Electronic sensor which measures the *quantity of infrared radiation* radiated from objects in the sensor field of view — useful to detect movement
	- actually a PIR detects radiation/temperature abrupt *variations,* compared to a reference situation that the PIR takes as reference state
	- importance of calibration
- So when some object with a certain temperature enters in an (colder) zone that was previously taken as reference by the PIR, the sensor detects the variation and then the presence of the entity
	- the entrance of an object with the same temperature of the background does not trigger any detection

>> "Passivo" perché non emette nulla: si limita a ricevere la radiazione IR emessa dai corpi caldi (es. una persona). Tipicamente ha un'uscita digitale (HIGH quando rileva movimento) e richiede alcuni secondi dopo l'accensione per calibrarsi sullo stato di riferimento dell'ambiente.

---
## Slide 18 – Example

- PIR sensor
	- https://learn.adafruit.com/pir-passive-infrared-proximity-motion-sensor/

![[IOTL03-s018-1.png|285]]

>> La cupola bianca è una lente di Fresnel che concentra la radiazione IR proveniente da più zone del campo visivo sul sensore piroelettrico. I 3 pin sono tipicamente VCC, OUT (digitale), GND.

---
## Slide 19 – Angular Position Transducers

- Two types
	- one detects the position without having any specific mechanical constraint, just exploiting the gravity force
		- e.g. inclinometer
	- one detects the position given a mechanical constraint => **encoder**
		- the encoder is an electromechanical device that converts the angular position of its rotating axis into electrical pulses, further processed and converted into a digital numerical signal
- Various technologies
	- capacitative/inductive, magnetic, optical

>> Gli encoder possono essere *incrementali* (generano impulsi durante la rotazione: contandoli si ricava lo spostamento; con due canali sfasati, A e B, si ricava anche il verso) o *assoluti* (forniscono direttamente un codice univoco per ogni posizione angolare).

---
## Slide 20 – Acceleration Sensors

- **Accelerometer**
	- sensor measuring the acceleration of a moving object (equipped with the sensor)
	- different types, based on different physical operating principles
- **Gyroscope**
	- rotating device that preserves a fixed direction for its rotating axis
	- can be used for different purposes
		- e.g. as compass, pointing to north

>> Un accelerometro a riposo misura anche l'accelerazione di gravità ($\approx 9.81\ \text{m/s}^2$): per questo può essere usato anche come inclinometro. I giroscopi elettronici (MEMS) non sono dispositivi rotanti ma misurano la **velocità angolare** (°/s); integrandola nel tempo si stima l'angolo di rotazione (con deriva accumulata).

---
## Slide 21 – Example

- MPU-6050 - accelerometer + gyroscope
	- http://playground.arduino.cc/Main/MPU-6050

![[IOTL03-s021-1.png|248]]

>> L'MPU-6050 integra un accelerometro a 3 assi e un giroscopio a 3 assi (6 DOF) e comunica con Arduino via bus **I2C** (pin SDA/SCL, indirizzo 0x68 o 0x69 a seconda del pin AD0).

---
## Slide 22 – MEMS Technology

- Electronic accelerometers and gyroscopes are based on **MEMS** technology
	- Micro Electro-Mechanical Systems
	- system of micro devices (size ~micro-meter) of different nature (mechanical, electrical and electronic) strongly integrated in the same chip/substrate (silicon)
- Very important for modern embedded systems

>> Esempio: in un accelerometro MEMS una micro-massa sospesa su molle di silicio si sposta sotto accelerazione; lo spostamento varia una capacità tra elettrodi, che l'elettronica integrata converte in un valore numerico. Sono presenti in smartphone, airbag, droni, controller di gioco.
---
## Slide 23 – CONTACT SENSORS

- **Tactile buttons and microswitch**
- **Potentiometer**
	- it allows for changing the resistance of a component — and then the voltage level at the terminals — in a mechanical way
	- electrical device which is equivalent to a *voltage divider*, with a variable resistance
- **Linear potentiometer**
	- output voltage is a linear function of the input voltage
- **Capacitative sensor**
	- based on the principle of detecting the electrical capacity of the capacitor
		- a nearby object creates a capacity detected by internal cicuits

>> Il potenziometro ha 3 piedini: i due estremi vanno a $V_{in}$ e GND, il cursore centrale (wiper) divide la resistenza totale $R$ in $R_1$ e $R_2 = R - R_1$. La tensione sul cursore è quella di un partitore:
>> $$V_{out} = V_{in}\cdot\frac{R_2}{R_1+R_2}$$
>> Con Arduino si legge il cursore con `analogRead()`, che restituisce un valore 0–1023 (ADC a 10 bit) proporzionale a $V_{out}/5\,\text{V}$.
>>
>> "Lineare" (taper lineare) significa che $R_2$ cresce linearmente con l'angolo/posizione del cursore, quindi $V_{out}$ è proporzionale alla posizione; esistono anche potenziometri logaritmici (es. per il volume audio).
>>
>> Sensore capacitivo: il dito (conduttivo) avvicinandosi all'elettrodo aggiunge capacità verso massa; il circuito interno misura la variazione e commuta un'uscita digitale (come un pulsante, ma senza parti meccaniche).

---
## Slide 24 – EXAMPLES

- Potentiometer ALPS 10KOhm

![[IOTL03-s024-1.png]]

- Capacitive sensor AllLife TTP223B
	- http://www.datasheet4u.com/share_search.php?sWord=TTP223B

![[IOTL03-s024-2.png|259]]

>> Il modulo TTP223B ha 3 pin (VCC, GND, I/O/SIG): l'uscita è digitale (HIGH quando viene toccato, nella configurazione di default), quindi si legge con `digitalRead()` esattamente come un pulsante.

---
## Slide 25 – PRESSURE SENSOR

- Measuring the force exerted on the sensor
	- e.g.: Round Force-Sensitive Resistor (FSR)
		- https://www.adafruit.com/products/166

![[IOTL03-s025-1.png|360]]

>> L'FSR è un resistore la cui resistenza diminuisce all'aumentare della forza applicata (da >1 MΩ a riposo fino a poche centinaia di Ω premendo forte). Si collega come la fotoresistenza: in un partitore di tensione con una resistenza fissa, leggendo il punto centrale con `analogRead()`. È adatto a rilevare "quanto si preme", non a misure di peso precise.

---
## Slide 26 – OPTICAL SENSORS

- Optical sensors or image sensors are devices converting an optical image into an electrical signal
	- e.g. in digital camera.
- Different kinds, depending on the method and technology adopted to detect colours
	- basic classification: either detecting colors or black & white (e.g. night vision)
- Operating principle
	- the image is focused on a grid of many small punctiform sensors
	- those small sensors convert light into a signal

>> Ogni "sensore puntiforme" è un pixel: l'immagine digitale è la matrice dei valori misurati. Per ottenere i colori si mette di solito davanti ai pixel un filtro a mosaico (es. filtro di Bayer, R/G/B), poi si ricostruisce il colore per interpolazione.

---
## Slide 27 – PHOTODETECTORS

- Device detecting the electromagnetic radiation, providing a signal (current or voltage level) proportional to the intensity of the radiation
	- Different types, related to the radiation spectrum detected, minimum quantity perceived (some: single photons..)
	- also called photocells
- Various technologies
	- photoresistors — based on electrons on semiconductors excited by light
	- photodiodes — based on photogenerated charge on a P-N junction
	- photovoltaic cell — similar to photodiodes but with no polarisation
	- Charge Coupled Device (CCD), Charge Injection Device (CID) e CMOS: integrate circuits based on photo generated charge in a semiconductor

>> Differenze pratiche: la fotoresistenza (LDR) è economica ma lenta (tempi di risposta di decine di ms); il fotodiodo è molto più veloce e lineare, ed è usato polarizzato inversamente; la cella fotovoltaica è un fotodiodo usato senza polarizzazione esterna, che genera essa stessa energia (pannelli solari). CCD e CMOS sono le matrici di pixel delle fotocamere.

---
## Slide 28 -> 29 – EXAMPLE: PHOTORESISTOR

- **Photoresistor**
	- arduino.cc/documents/datasheets/LDR-VT90N2.pdf
	- resistance depends on the quantity of light perceived (inversely proportional)
		- strong light => small resistance

![[IOTL03-s028-1.png]]

- Parameters
	- R10 and R100: resistance under 10 and 100 lux
	- R05: resistance being in the dark for 5 seconds

![[IOTL03-s028-2.png]]

- circuit
	- voltage divider

>> Il grafico del datasheet è in scala log-log (resistenza in kΩ vs illuminamento in lux): la retta decrescente indica una legge di potenza $R \approx A\cdot L^{-\gamma}$, quindi "inversamente proporzionale" va inteso in senso qualitativo (più luce, meno resistenza), non esattamente $R\propto 1/L$. La banda grigia rappresenta la tolleranza tra esemplari diversi.
>>
>> La resistenza non si può leggere direttamente con Arduino (che misura tensioni): per questo serve il partitore di tensione della slide successiva.

- connecting schema: voltage divider
	- using  a resistance of a known value in serie

![[IOTL03-s029-1.png|600]]

Schematic: +5V — PH1 PHOTORESISTOR — (Analog Pin 0) — R 1K — GND

>> Partitore: la fotoresistenza $R_{LDR}$ sta tra +5 V e il pin A0, la resistenza nota $R = 1\,\text{k}\Omega$ tra A0 e GND. Quindi
>> $$V_{A0} = 5\,\text{V}\cdot\frac{R}{R + R_{LDR}}$$
>> Più luce → $R_{LDR}$ più piccola → $V_{A0}$ più alta. Esempio: con $R_{LDR}=1\,\text{k}\Omega$ si ha $V_{A0}=2{,}5\,\text{V}$ (`analogRead` ≈ 512); al buio con $R_{LDR}=100\,\text{k}\Omega$ si ha $V_{A0}\approx 0{,}05\,\text{V}$ (≈ 10).
>> Scambiando le due resistenze si inverte il comportamento (tensione alta al buio). Il valore di $R$ conviene sceglierlo dello stesso ordine di grandezza di $R_{LDR}$ nelle condizioni di luce che interessano, per avere la massima sensibilità.

---
## Slide 30 – ELECTRICITY AND MAGNETISM

- **Electric voltage and current**
	- sensors detecting the voltage level between two points of the circuit or the current flowing
	- useful whenever measuring the energy consumed by a device
		- e.g.: project http://www.openenergymonitor.org
- **Magnetometer**
	- measuring the magnetic field
	- either scalar (measuring only the intensity) or vectorial (measuring the intensity along a specific spatial direction)
- **Compass**
	- measuring the angle wrt magnetic north

>> Potenza ed energia: $P = V\cdot I$ ed $E = \int P\,dt$; misurando tensione e corrente nel tempo si stima il consumo (es. in kWh). Per la corrente si usano sensori a effetto Hall (es. ACS712) o trasformatori amperometrici non invasivi (pinze CT, come in OpenEnergyMonitor).
>>
>> Una bussola elettronica è tipicamente un magnetometro a 3 assi: dalle componenti orizzontali del campo $B_x, B_y$ si ottiene la direzione con $\theta = \operatorname{atan2}(B_y, B_x)$ (con sensore in piano; altrimenti serve compensare l'inclinazione con un accelerometro).

---
## Slide 31 -> 32 – WEATHER AND CLIMA

- **Temperature sensor**
	- e.g.
		- analog sensor analogico TMP36
			- https://learn.adafruit.com/tmp36-temperature-sensor
		- digital sensor TC74
			- http://www.microchip.com/wwwproducts/Devices.aspx?product=TC74

![[IOTL03-s031-1.png]]![[IOTL03-s031-2.png|377]]

![[IOTL03-s031-3.png|500]]

>> TMP36 (pin: 2.7–5.5 V in, Analog voltage out, Ground): l'uscita è lineare con 10 mV/°C e offset di 500 mV a 0 °C, quindi
>> $$T\,[^\circ\text{C}] = (V_{out} - 0{,}5\,\text{V})\cdot 100$$
>> Con Arduino a 5 V: $V_{out} = \text{analogRead}\cdot 5/1024$. Es. lettura 153 → $V\approx 0{,}747\,\text{V}$ → $T\approx 24{,}7\,^\circ\text{C}$.
>>
>> TC74: sensore digitale su bus I²C (SMBus). Nello schema tre TC74 con indirizzi diversi (varianti A0, A1, A2) condividono le stesse due linee collegate ad A4 (SDA) e A5 (SCL) di Arduino Uno, con le due resistenze di pull-up da 4.7 kΩ verso 5 V richieste dal bus I²C. Il vantaggio rispetto all'analogico: il valore arriva già convertito in °C, senza errori dovuti all'ADC o ai cavi.

- Humidity sensors
	- example: DHT11 Digital Temperature Humidity Sensor
		- http://www.dx.com/p/arduino-digital-temperature-humidity-sensor-module-121350

![[IOTL03-s032-1.png]]

- Barometric sensor
	- example: BMP085 SparkFun Electronics
		- http://www.robotstore.it/product/504/Sensore-di-Pressione-Barometrica-BMP085.html

![[IOTL03-s032-2.png|302]]

>> Il DHT11 usa un protocollo seriale proprietario su un singolo filo dati (si legge con una libreria, es. `DHT.h`); misura umidità relativa (20–90%, ±5%) e temperatura (0–50 °C, ±2 °C) con al più circa una lettura al secondo.
>> Il BMP085 comunica via I²C e misura pressione e temperatura; dalla pressione si può stimare anche l'altitudine (circa −12 Pa per metro vicino al livello del mare).

---
## Slide 33 – SENSORS DETECTING CHEMICALS

- GAS sensors
	- MQ Gas Sensor
		- http://playground.arduino.cc/Main/MQGasSensors

![[IOTL03-s033-1.png|253]] ![[IOTL03-s033-2.png]]

https://www.mixsensors.com/combustible/MIX2111D_CH4_Digital_Output_Natural_Gas_Detection_Module_56.html

- dust sensors | for air quality
	- e.g. Gravity: PM2.5 Air Quality Sensor

![[IOTL03-s033-3.png|274]]

>> I sensori MQ (MQ-2, MQ-7, …) contengono un elemento di ossido di stagno riscaldato da una resistenza interna: in presenza del gas la sua resistenza cala, e si legge ancora con un partitore + `analogRead()`. Richiedono un tempo di preriscaldamento e consumano parecchio (~150 mA per il riscaldatore). Danno una misura relativa: per avere ppm servono calibrazione e curve del datasheet.
>> PM2.5 = particolato con diametro ≤ 2,5 µm; questi sensori usano tipicamente un laser e la luce diffusa dalle particelle.

---
## Slide 34 – SOUND

- Microphones
	- example
		- https://www.adafruit.com/products/1713

![[IOTL03-s034-1.png|363]]

>> Sulla scheda (Adafruit MAX9814, microfono con amplificatore e controllo automatico del guadagno) si legge: Gain float → 60 dB, G=Gnd → 50 dB, G=Vdd → 40 dB; Output 2 Vpp max; DC Offset 1.25 V. Quindi l'uscita analogica oscilla attorno a 1,25 V: leggendola con `analogRead()` il silenzio corrisponde a circa $1{,}25/5\cdot 1023\approx 256$, e l'ampiezza del suono è lo scostamento da quel valore.

---
## Slide 35 – GLOBAL LOCALISATION

- **GPS Global Positioning System (GPS)**
	- positioning system and navigation based on a satellite network (32 satellites)
	- sending to GPS receivers info about coordinates and time, everywhere on earth
		- to receive info, 4 satellites must be visible
	- managed by USA
	- **accuracy level: ~meters**
		- depends on meteo condition, availability of satellites, quality of the receiver, effects on the propagation of the radio waves
- Operating principle
	- based on trilateration
		- measuring time elapsed to receive the signal from the satellites

>> Trilaterazione: ogni satellite trasmette la propria posizione e l'istante di invio; il ricevitore calcola la distanza come $d_i = c\cdot(t_{ricezione} - t_{invio})$, con $c\approx 3\cdot 10^8$ m/s. Le incognite sono 4: le coordinate $x, y, z$ e l'errore $\Delta t$ dell'orologio del ricevitore (non atomico), per questo servono almeno 4 satelliti:
>> $$\sqrt{(x-x_i)^2+(y-y_i)^2+(z-z_i)^2} = c\,(t_i - \Delta t),\quad i=1,\dots,4$$
>> Si vede anche perché il tempo conta tanto: un errore di 1 µs corrisponde a circa 300 m di errore sulla distanza.

---
## Slide 36 – EXAMPLE

- Parallax PAM-7Q GPS Module
	- http://www.parallax.com/product/28509
	- “it provides all of the standard services like location fix, speed, heading, altitude measurements, and atomic date and time”

![[IOTL03-s036-1.png|274]]

>> Il modulo (basato su chip u-blox) espone i pin GND, TP, RXD, TXD, VDD, SCL, SDA: si collega tipicamente via seriale (UART) e invia frasi di testo in formato NMEA (es. `$GPGGA`, `$GPRMC`) contenenti posizione, velocità, ora, che si decodificano con librerie come TinyGPS++.

---
## Slide 37 – LOCAL LOCALISATION

- **RFID**
	- small tags storing data that can be read/write at distance (from centimetres to meters) by tag reader
	- use the energy from the reader, they don't need a battery
	- example: AZDelivery Kit RFID RC522
- **NFC**
	- similar to RFID, but working on very small distance / contact
	- example. NFC/RFID: http://www.adafruit.com/product/789
- **iBeacon**
	- devices exploiting the  Bluetooth technology BLE (Bluetooth low energy) to transmit a UUID in the nearby, to be received by BLE receiver
	- example: http://www.seeedstudio.com/depot/blebee-v100-p-1632.html
- **UWB**
	- based on Ultra Wide Band technology — very accurate, expensive

>> I tag RFID passivi non hanno batteria: vengono alimentati dal campo elettromagnetico del lettore. L'RC522 lavora a 13,56 MHz (la stessa frequenza dell'NFC) e si collega ad Arduino via SPI.
>> Con i beacon BLE la posizione si stima in modo approssimato dalla potenza del segnale ricevuto (RSSI): vicino/lontano più che coordinate precise. UWB invece misura il tempo di volo di impulsi molto brevi e raggiunge precisioni dell'ordine di 10 cm.

---
## Slide 38 – LOCALISATION TECHS OVERVIEW

![[IOTL03-s038-1.png|470]]

- from : https://www.instructables.com/10-CM-Accurate-Ultra-wide-Band-UWB-Positioning-for/

>> Il grafico mette a confronto costo unitario (€, asse verticale, *not at scale*) ed errore di posizionamento (asse orizzontale): camera-based e RTK GPS sono molto precisi ma costosissimi (20.000–100.000 €), LIDAR e VLP (Visible Light Positioning) intermedi; WiFi, BLE, GPS ed RFID costano poco (<100 €) ma hanno errori di metri. Pozyx (UWB) è nella zona "buona": errore ~10 cm a costo contenuto.

---
## Slide 39 – FOR DATA INPUT

- **Keypad**
	- example: ADAFruit
		- http://www.adafruit.com/products/419

>> Un keypad a matrice (es. 4×4 = 16 tasti) usa solo 8 pin (4 righe + 4 colonne) invece di 16: il microcontrollore pilota una riga alla volta e legge le colonne (scansione); un tasto premuto collega la riga attiva a una colonna, e l'incrocio identifica il tasto. La libreria `Keypad.h` gestisce scansione e debouncing.

---
## Slide 40 – ACTUATORS AND OUTPUT DEVICES

---
## Slide 41 – OUTPUT TRANSDUCERS (ACTUATORS)

- Transducers
	- convert one kind of energy into another kind
- **Output transducers (actuators)**
	- allow embedded systems to do and control actions on the physical environment where they are embedded
	- simplest action: switching on or off a device
		- examples:
			- led, piezo buzzer, relays (switch)..

>> Simmetria con i sensori: un sensore (trasduttore di ingresso) converte una grandezza fisica in segnale elettrico; un attuatore (trasduttore di uscita) converte un segnale elettrico in un'azione fisica (luce, suono, movimento, calore). Es.: LED → energia elettrica in luce; buzzer piezo → in vibrazione/suono; motore → in energia meccanica.

---
## Slide 42 – INTERFACING

- Two main cases
	- the current/voltage provided by GPIO to power the transducer is enough (i.e. 5 Volt - 20mA)
		- e.g. led, piezo
	- if it is not enough, then the device must be powered by an external circuit
		- in this case, the GPIO is used to open/close the external circuit, by means of **transistors** and **relays,** functioning as switches

![[IOTL03-s042-1.png|325]] ![[IOTL03-s042-2.png|299]]

>> Su Arduino Uno ogni pin regge 20 mA in modo consigliato (40 mA è il massimo assoluto, oltre si danneggia l'MCU), e c'è anche un limite complessivo sul chip (~200 mA). Un LED con resistenza da 220 Ω assorbe circa $(5 - 2)/220 \approx 14\,\text{mA}$: OK. Un motore o una lampada no.
>>
>> Schema a sinistra (transistor come interruttore, "low side"): il carico è tra VCC e il collettore di un transistor NPN, l'emettitore va a GND; il GPIO pilota la base tramite R1 = 1 kΩ. GPIO HIGH → il transistor conduce e il carico si accende; la corrente forte scorre da VCC a GND passando per il carico, non per il pin. Con 5 V e 1 kΩ la corrente di base è $\approx (5-0{,}7)/1000 \approx 4{,}3\,\text{mA}$, sufficiente a saturare il transistor per carichi di qualche centinaio di mA (con guadagno $h_{FE}\approx 100$).
>> Schema a destra (relè): il GPIO (eventualmente tramite transistor) eccita la bobina del relè, il cui contatto chiude un circuito completamente separato, anche in AC da rete (AC plug → LOAD). Il relè isola galvanicamente la parte a bassa tensione dall'alta tensione.

---
## Slide 43 – RESISTIVE VS. INDUCTIVE LOADS

- From an electronically point of view, a controlled load can be classified in two basic categories:
	- **resistive loads**
		- can be likened to a component offering a resistance to the passage of the current, resulting in a variation of the voltage level
	- **inductive loads**
		- devices that work by inducing some current on a wire by means of the current passing on another wire or by placing the wire in a magnetic field
			- e.g.: motors, solenoids
		- *These loads generate an inverse current*
			- it is necessary to equip the circuit with protection, forcing the current to flow only in one direction

>> Perché la "corrente inversa": un'induttanza si oppone alle variazioni di corrente, $V = L\,\dfrac{dI}{dt}$. Quando il transistor/relè spegne il carico, la corrente cala bruscamente e si genera un picco di tensione di polarità opposta (forza controelettromotrice, *back-EMF* / *flyback*) che può raggiungere centinaia di volt e distruggere il transistor o il pin.
>> La protezione tipica è un **diodo di ricircolo (flyback diode)**, es. 1N4001, montato in parallelo al carico e polarizzato inversamente rispetto all'alimentazione: in funzionamento normale non conduce, allo spegnimento offre alla corrente un percorso chiuso finché l'energia si dissipa.

---
## Slide 44 – ACTUATOR EXAMPLES

- Leds
- Display LCD
- Electric motors
	- direct current, stepper, servo motor
- Speakers
	- can reproduce sounds
	- see cap. 5 [EA]
- Devices to drive power loads
	- e.g. relays, optocouplers

>> Un optoaccoppiatore contiene un LED e un fototransistor nello stesso package: il segnale passa sotto forma di luce, quindi i due circuiti restano elettricamente isolati (come un relè, ma senza parti mobili, più veloce e senza usura; adatto però a correnti piccole, spesso usato per pilotare a sua volta un transistor o un relè).
---
## Slide 45 – LEDS

- **Light Emitting Diode**
- Opto-electronical device which exploit the optical properties of some semiconductor materials to generate photons when powered by some current
- Very widespread for their high lighting efficiency, reliability, long duration, reduced power consumption

![[IOTL03-s045-1.png|500]]

*Forme diverse di led commerciali* – *Led da 8, 5 e 3 mm* – *Un esempio di led alta potenza*

>> Il LED è un diodo: conduce solo se polarizzato direttamente (anodo, gamba lunga, verso il +) e ai suoi capi cade una tensione quasi costante $V_F$ (≈ 1,8–2 V per rosso/giallo, ≈ 3 V per blu/bianco). Per questo va sempre messo in serie a una resistenza che limita la corrente:
>> $$R = \frac{V_{cc} - V_F}{I_F}$$
>> Esempio: con un pin Arduino a 5 V, LED rosso $V_F \approx 2$ V e corrente desiderata 15 mA → $R = 3/0{,}015 = 200\ \Omega$ (si usa il valore commerciale 220 Ω, che dà ≈ 13,6 mA).

---
## Slide 46 – DISPLAY LCD

- Display based on the optical properties of liquid crystals
	- trapped between two glass surfaces, equipped with many electrical contacts that can generate an electric field affecting the liquid
	- each electric contact control a small portion of the panel that corresponds to a pixel (or a subpixel in a color screen)
- Small power consumption
	- very good for embedded systems

>> L'LCD non emette luce: i cristalli liquidi, orientati dal campo elettrico, ruotano o meno la polarizzazione della luce lasciandola passare o bloccandola tra due polarizzatori. La luce viene da una retroilluminazione (backlight, pin A/K nella slide successiva) o dall'ambiente: per questo consuma poco.

---
## Slide 47 -> 48 – EXAMPLE

- A very common example is the parallel LCD screen 16x2 (16 colums, 2 rows), characterised by a single line of 16 pins
- All parallel LCD screen have the same pinout and can be connected to Arduino in different ways:
	- 4 pins or 8 pins
		- 8 pins mode: 6 pins must be connected to digital pins + 2 for VCC and GND
		- 6 pins mode: 4 pins are used to send the data and the other 2 for control
	- via I2C
		- es: http://www.robot-italy.com/it/display-lcd-16-x-2-blu-i2c.html
- Programming
	- LiquidCrystal Library provided with Arduino IDE (with I2C version)
	- many functionalities
		- cursor blinking, scrolling, customised chars creation, etc.

>> Il controller standard (HD44780) accetta dati a 8 bit (D0–D7) oppure in modalità a 4 bit (solo D4–D7, ogni byte inviato in due "nibble"): la modalità a 4 bit risparmia pin ed è quella usata di solito, con RS ed EN come linee di controllo → 6 pin digitali in totale. RW si collega a GND (si scrive soltanto). Con un adattatore I2C bastano invece 2 fili di segnale (SDA, SCL) più alimentazione.

![[IOTL03-s048-1.png|537]]

>> Nella tabella originale la riga del pin 12 (D5) riporta "Data line 3": è un refuso, si tratta della Data line 5.
>> RS = 0 → il byte inviato è un comando (es. pulisci schermo, sposta cursore); RS = 1 → è un carattere da visualizzare. EN è l'impulso di "strobe" che fa leggere al display i dati presenti sulle linee. V0 si collega al cursore di un potenziometro (partitore tra 5 V e GND) per regolare il contrasto.

---
## Slide 49 – EXAMPLE - FROM [EA]

![[IOTL03-s049-1.png|500]]

(p. 203, [EA])

>> Schema Fritzing: l'Arduino alimenta la breadboard (5 V e GND), il potenziometro regola il contrasto (V0) e i fili gialli collegano RS, EN, D4–D7 ai pin digitali 2–7, come nella dichiarazione `LiquidCrystal lcd(2, 3, 4, 5, 6, 7)` della slide successiva.

---
## Slide 50 – EXAMPLE - FROM [EA] - CODE

```cpp
#include <LiquidCrystal.h>

int time = 0

/* sequenza dei pin: RS EN D4 D5 D6 D7 */
LiquidCrystal lcd(2, 3, 4, 5, 6, 7);

void setup()
{
  lcd.begin(16, 2); // display 16 caratteri per 2 righe
  lcd.print(“Cesena”);
}

void loop()
{
  lcd.setCursor(0,1);
  lcd.print(time);
  delay(1000);
  time++;
}
```

>> Attenzione: il codice così com'è sulla slide non compila: manca il `;` dopo `int time = 0` e le virgolette di `“Cesena”` sono tipografiche (vanno usate quelle dritte `"Cesena"`).
>> Il programma scrive "Cesena" sulla prima riga e, sulla seconda (`setCursor(0,1)`: colonna 0, riga 1, contando da 0), un contatore che aumenta di 1 ogni secondo.

---
## Slide 51 -> 52 – ELECTRIC MOTORS

- **Electric motors** are electric machines that convert the input electric power into an output effect which is mechanical
- An electric motor has two main parts
	- *stator*
		- fixed/static part
	- *rotor*
		- moving part, including the shaft
- How it works
	- these two components generate a magnetic field that causes the rotor to move
- Types of electric motors used in embedded:
	- **direct current motors**
	- **stepper motors**
	- **servo motors** -> can control the position not the velocity

>> Shaft = albero motore (l'asse che ruota e trasmette il moto all'esterno).

![[IOTL03-s052-1.png|277]] ![[IOTL03-s052-2.png|377]]

brushless

https://www.electricaltechnology.org/2016/05/bldc-brushless-dc-motor-construction-working-principle.html

>> A sinistra un motore DC a spazzole (brushed): Commutator, Rotor Coils, Stator Magnets, Brushes, Shaft. Qui le bobine sono sul rotore e la corrente arriva tramite spazzole (brushes) che strisciano sul commutatore.
>> A destra un motore brushless (BLDC): i magneti permanenti sono sul rotore e gli avvolgimenti sullo statore (Permanent Magnet, Stator Winding, Hall IC Sensors, Rotor, Bearing, Shaft, Front/Rear End Cap, Stator, Frame Cover). La commutazione è fatta elettronicamente, usando i sensori di Hall per sapere la posizione del rotore: niente usura delle spazzole, meno attrito e scintille.

---
## Slide 53 – DIRECT CURRENT MOTORS (DC)

- Useful in projects in which motors must have
	- continuous rotation
	- full 360° movement range
	- high speed or torque
	- angular speed control
- Example
	- Robot wheels

>> Torque = coppia. In un motore DC la velocità è circa proporzionale alla tensione applicata e il verso dipende dalla polarità: con Arduino la velocità si regola con il PWM (variando il duty cycle cambia la tensione media) e il verso con un ponte H. Il motore non va mai alimentato direttamente da un pin (assorbe troppa corrente): serve un transistor o un driver.

---
## Slide 54 – DC MOTORS: OPERATING PRINCIPLE

A coil of wire with a current running through it generates an electromagnetic field aligned with the center of the coil. The direction and magnitude of the magnetic field produced by the coil can be changed with the direction and magnitude of the current flowing through it. A simple DC motor has a stationary set of magnets in the stator and an armature with one or more windings of insulated wire wrapped around a soft iron core that concentrates the magnetic field. The windings usually have multiple turns around the core, and in large motors there can be several parallel current paths. The ends of the wire winding are connected to a commutator. The commutator allows each armature coil to be energized in turn and connects the rotating coils with the external power supply through brushes. (Brushless DC motors have electronics that switch the DC current to each coil on and off and have no brushes.) The total amount of current sent to the coil, the coil's size, and what it is wrapped around dictate the strength of the electromagnetic field created. The sequence of turning a particular coil on or off dictates what direction the effective electromagnetic fields are pointed. By turning on and off coils in sequence, a rotating magnetic field can be created. These rotating magnetic fields interact with the magnetic fields of the magnets (permanent or electromagnets) in the stationary part of the motor (stator) to create a torque on the armature which causes it to rotate. In some DC motor designs, the stator fields use electromagnets to create their magnetic fields which allows greater control over the motor.

![[IOTL03-s054-1.png|265]] ![[IOTL03-s054-2.png|331]]

*When electric current passes through a coil in a magnetic field, the magnetic force produces a torque which turns the DC motor*
*Electric current supplied externally through a commutator*
*The commutator reverses the current each half revolution to keep the torque turning the coil in the same direction.*

>> Armature = indotto (la parte avvolta che ruota); nella figura di sinistra "Polo induttore" = polo dello statore che genera il campo, "Spazzola" = spazzola.
>> Intuizione: su un conduttore percorso da corrente $I$ immerso in un campo $B$ agisce la forza di Lorentz $F = I\,L\,B$; sui due lati della spira le forze sono opposte e generano una coppia. Dopo mezzo giro la coppia si invertirebbe: il commutatore inverte allora il verso della corrente nella spira, così la coppia mantiene sempre lo stesso verso e la rotazione continua.

---
## Slide 55 – DC MOTOR: EXAMPLE

- For Arduino projects
	- 711696 Hobby Motor - Gear
		- http://www.robot-italy.com/it/hobby-motor-gear.html

![[IOTL03-s055-1.png|185]]

---
## Slide 56 – STEPPER MOTOR

- Brushless dc motors in which rotation is divided in a large number of steps
	- precise control of the position of the motor shaft / rotor
- Usage
	- 3D printers
	- numerical control machines
	- arms control in robots
	- …

![[IOTL03-s056-1.png|368]]

https://www.electricaltechnology.org/2016/12/stepper-motor-construction-types-and-modes-of-operation.html

>> Il passo è un angolo fisso: un tipico stepper da 200 passi/giro ha $360°/200 = 1{,}8°$ per passo. Il controllo è ad anello aperto: si conta il numero di impulsi inviati e si conosce la posizione senza bisogno di sensori (purché il motore non "perda passi" per un carico eccessivo). Si pilota con un driver (es. A4988, ULN2003) che eccita le fasi in sequenza.

---
## Slide 57 -> 58 – SERVO MOTOR

- Like stepper motor, they allow for fine control of the shaft.
- Two main differences:
	- the position is absolute, not relative to the current one
	- the range is 180°, not 360°
- Pros and Cons
	- easier programming
	- but limited range
- Examples (cheap)
	- 31053 HS-53 Microservo
		- http://www.robot-italy.com/it/hs-53-microservo.html

![[IOTL03-s057-1.png|350]] ![[IOTL03-s057-2.png|220]]

>> Un servo è un motore DC con riduttore, potenziometro di retroazione ed elettronica di controllo integrati: è un sistema ad anello chiuso che porta e mantiene l'albero all'angolo richiesto. Per questo la posizione è assoluta (si comanda "vai a 30°", non "fai 10 passi").

- Servo motors can be controlled by specifying the angle of the shaft
	- between -90° and 90°
- On the device: 3 wires
	- 2 for power (nero => GND, rosso => +5V)
	- 1 for digital control
		- typically white or yellow
- **How to control a servo motor**
	- The control is done by sending a stream of digital pulses at a specified frequency
		- typically 50 pulsed per second (50 Hz)
	- the duration of the pulses determines the rotation angle
		- pulses typically go from 1 ms (-90) to 2 ms (+90)
			- the larger is the pulse, the larger is the angle
		- linear scale — so 1.5 ms pulse => 0 degree
		- actually the real duration can greatly vary from servo to servo (to be calibrated/checked)

>> A 50 Hz il periodo è $T = 1/50\ \text{s} = 20$ ms: in ogni periodo c'è un impulso alto di 1–2 ms e il resto è basso. Con la scala lineare tipica:
>> $$\theta = (t_{pulse} - 1{,}5\ \text{ms}) \cdot \frac{180°}{1\ \text{ms}}$$
>> es. $t_{pulse} = 1{,}25$ ms → $\theta = -45°$; $t_{pulse} = 2$ ms → $\theta = +90°$.

---
## Slide 59 – EXAMPLE: SERVO MOTOR HS-53

- Cheap servo motor

![[IOTL03-s059-1.png|300]]

- http://hitecrcd.com/products/servos/micro-and-mini-servos/analog-micro-and-mini-servos/hs-53-super-economy-feather-nylon-gear-servo/product

---
## Slide 60 -> 61 – EXAMPLE IN ARDUINO

![[IOTL03-s060-1.png|550]]

>> Collegamenti: filo rosso del servo → 5V, filo nero → GND, filo giallo (segnale) → pin digitale 2 dell'Arduino UNO (come in `int servoPin = 2;` nella slide successiva).

- In this case we can power directly the motor with Arduino power lines
- To control the servo we can use a digital pin
- Program example: continuous rotation from -90 to 90 and back

```cpp
int servoPin = 2;

void pulseServo(int servoPin, int pulseLen)
{
  digitalWrite(servoPin, HIGH);
  delayMicroseconds(pulseLen);
  digitalWrite(servoPin,LOW);
  delay(15);
}

int c;
enum { MINUS_90, PLUS_90 } state;

void setup()
{
   pinMode(servoPin, OUTPUT);
   state = MINUS_90;
   Serial.begin(9600);
   c = 0;
}
```

```cpp
void loop(){
  c++;
  switch (state) {
    case MINUS_90:
      pulseServo(servoPin, 250);
      if (c > 100){
        Serial.println("--> +90");
        state = PLUS_90;
        c = 0;
      }
      break;
    case PLUS_90:
      pulseServo(servoPin, 2250);
      if (c > 100){
        Serial.println("--> -90");
        state = MINUS_90;
        c = 0;
      }
  }
}
```

>> Il servo è alimentato direttamente dall'Arduino perché è un microservo che assorbe poca corrente; servi più grandi richiedono un'alimentazione separata (con GND in comune).
>> Il `loop` è una piccola macchina a stati a 2 stati: in ogni stato si inviano impulsi della durata corrispondente all'angolo; dopo 101 impulsi (≈ 101 · ~17 ms ≈ 1,7 s, tempo sufficiente al servo per arrivare a posizione) si cambia stato e si stampa sulla seriale la nuova direzione.

---
## Slide 62 – HOW IT WORKS

- `pulseServo` sends a pulse of the specified duration and then waits for 15 ms
	- actually, to have 50 Hz, the waiting time should be 1000/50 = 20ms
	- the difference is for taking into account the instruction execution time and the pulse time
		- empirical value
- Empirical tests for this servo
	- pulse duration for -90 is about 250 us (0.25 ms), while +90 is 2250 us (2.25 ms)

>> Per questo servo l'escursione è quindi di 2000 µs per 180°, cioè ≈ 11,1 µs per grado, con centro (0°) a circa $(250 + 2250)/2 = 1250$ µs, diverso dal valore "teorico" di 1,5 ms: ecco perché serve calibrare. In realtà il periodo di 20 ms non è critico: i servi analogici tollerano bene periodi tra ~15 e ~25 ms, conta soprattutto la durata dell'impulso.

---
## Slide 63 – SERVO LIBRARY

- Reference library to control servos: Servo
	- https://www.arduino.cc/en/Reference/Servo
	- using PWM
- Library API
	- **attach**(pin)
		- attach the servo to a specified pin
		- on Arduino UNO before 0017 version => 9 and 10 only
	- **write**(angle)
		- to specify the angle of the shaft, from 0 to 180
- Examples
	- *"Knob"*
		- control by means of a potentiometer
		- https://www.arduino.cc/en/Tutorial/Knob
	- *"Sweep"*
		- continuous rotation forward and back

>> Nota: con la libreria l'angolo va da 0 a 180 (non da -90 a +90): 90 corrisponde alla posizione centrale. La libreria genera gli impulsi in background tramite un timer, quindi il `loop` non deve occuparsi della temporizzazione come nell'esempio manuale. Esiste anche `writeMicroseconds(us)` per impostare direttamente la durata dell'impulso (utile per la calibrazione).

---
## Slide 64 -> 65 – KNOB

- https://www.arduino.cc/en/Tutorial/Knob

![[IOTL03-s064-1.png|300]] ![[IOTL03-s064-2.png|240]]

>> Il potenziometro è collegato tra 5 V e GND con il cursore sull'ingresso analogico A0 (partitore di tensione regolabile); il segnale del servo va al pin D9, alimentazione del servo su 5 V e GND.

```cpp
/*
 Controlling a servo position using a potentiometer (variable resistor)
 by Michal Rinott <http://people.interaction-ivrea.it/m.rinott>

 modified on 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Knob
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int potpin = 0;  // analog pin used to connect the potentiometer
int val;    // variable to read the value from the analog pin

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
  val = analogRead(potpin);    // reads the value of the potentiometer (value between 0 and 1023)
  val = map(val, 0, 1023, 0, 180); // scale it to use it with the servo (value between 0 and 180)
  myservo.write(val);                  // sets the servo position according to the scaled value
  delay(15);                           // waits for the servo to get there
}
```

>> `analogRead` restituisce un valore a 10 bit (0–1023, con 0 V → 0 e 5 V → 1023); `map` lo riscala linearmente in 0–180 con aritmetica intera: $val' = val \cdot 180 / 1023$. Es. potenziometro a metà corsa → $512 \cdot 180/1023 \approx 90$ → servo in posizione centrale.

---
## Slide 66 -> 67 – SWEEP

- https://www.arduino.cc/en/Tutorial/Sweep

![[IOTL03-s066-1.png|350]] ![[IOTL03-s066-2.png|229]]

>> Lo sketch Sweep (negli esempi dell'IDE) fa ruotare il servo avanti e indietro tra 0° e 180° con due cicli `for`, incrementando l'angolo di 1° alla volta con `myservo.write(pos)` e `delay(15)` tra un passo e l'altro. Collegamento: segnale su D9, alimentazione su 5 V e GND.

```cpp
/* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.
 modified 8 Nov 2013
 by Scott Fitzgerald
 http://www.arduino.cc/en/Tutorial/Sweep
*/

#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
}
```

>> `myservo.write(pos)` imposta l'**angolo** (0–180°), non la velocità: la libreria Servo genera internamente un impulso ogni ~20 ms la cui larghezza (circa 1 ms → 0°, circa 2 ms → 180°, valori tipici) codifica la posizione.
>> Un'escursione completa dura circa $181 \cdot 15\,\text{ms} \approx 2{,}7\,\text{s}$ per verso.

---
## Slide 68 – DC MOTORS

- Two types
	- brushless (stepper)
	- brushed
		- cheaper but last less
- Control => on the speed of the shaft
	- by changing the voltage at the terminals, we change the rotation speed of the shaft
	- by inverting the voltage, we invert the rotation direction
		- use of the H-bridge circuit

>> *Shaft* = albero motore. Nei motori *brushed* le spazzole (brush) strisciano sul commutatore per invertire la corrente negli avvolgimenti: si consumano, per questo durano meno. Nei *brushless* la commutazione è fatta elettronicamente.
>> In prima approssimazione la velocità di un motore DC è proporzionale alla tensione media applicata: per questo il PWM (che varia la tensione media) permette di regolarla.

---
## Slide 69 – EXAMPLE IN ARDUINO

- In general, **a DC motor needs a separate power line**
	- Arduino does not give enough current to power the motor
	- besides, when operating a motor can generate current spikes in the opposite direction => can damage the micro
	- For these reasons, a separate circuit is used to power the motor DC and Arduino is used only for control
- In the next example
	- the motor is powered by a separate battery
	- the speed control is done by means of a PWM signal
	- a transistor (electronic component) is used as switch

Example taken from[EA, cap. 4]

>> Ordine di grandezza: un pin I/O di Arduino UNO fornisce al massimo ~20 mA (40 mA assoluti), mentre anche un piccolo motorino DC assorbe centinaia di mA (e molto di più allo spunto). Il motore è un carico induttivo: interrompendo la corrente si genera una sovratensione (*back-EMF* / *flyback*) che può danneggiare l'elettronica.

---
## Slide 70 – SCHEMA

![[IOTL03-s070-1.png|413]]

Components
- 9V battery
- Q1 is a NPN BJT (Bipolar-junction transistor) used as a switch
- 1 KOhm is used to separate the base terminal of the transistor from the Arduino control pin
- U1 is the motor
- C1 is a capacitor used to filter the noice generated by the motor
- D1 is a diode that protects the common power supply of the battery from invert current generated by the motor

>> Il motore sta "sopra" il transistor (lato alto, verso +9V) e il transistor NPN chiude il collegamento verso GND (*low-side switch*). Quando il pin 9 è HIGH scorre corrente di base attraverso R1, il transistor va in saturazione e il motore è alimentato.
>> Corrente di base indicativa: $I_B \approx \dfrac{5\,\text{V} - 0{,}7\,\text{V}}{1\,\text{k}\Omega} \approx 4{,}3\,\text{mA}$, ben sotto il limite del pin.
>> Il diodo D1 (1N4004) è montato in antiparallelo al motore (*flyback diode*): normalmente è polarizzato inversamente e non conduce; quando il transistor si spegne, la sovratensione indotta dal motore lo polarizza direttamente e la corrente "ricircola" nel diodo invece di danneggiare il transistor.

---
## Slide 71 – HOW IT WORKS

- A transistor is used to modulate the speed of the motor by means of a PWM signal switches on/off the power
	- Transistors are widely used in electronics for many different purposes
		- amplifiers, logical ports, switches
	- The current flows from the collector to the emitter of the transistor
	- Modulation occurs on the base B pin
		- when a specific voltage is applied to B, the circuit is closed and the current flows, the shaft moves
		- if/when the power is stopped abruptly, then motor energy is dissipated as a voltage peak generating current in the opposite direction
			- for this reason a protection diode (diode of recycle) is used
- The PWM duty cycle => speed of the motor
	- duty cycle = 100% max speed
	- duty cycle = 0% speed = 0
	- linear pattern

![[IOTL03-s071-1.png|300]]

>> Nella figura: package TO-92 con piedini 1E (emettitore), 2B (base), 3C (collettore) e simbolo dell'NPN (la freccia sull'emettitore punta verso l'esterno).
>> "Diode of recycle" = diodo di ricircolo (o *flyback*). "Logical ports" = porte logiche.
>> Con il PWM la tensione media sul motore è $V_{media} = D \cdot V_{alim}$ (con $D$ duty cycle): con 9V e $D=50\%$ il motore "vede" in media 4,5V. Il legame velocità–duty cycle è solo approssimativamente lineare (attriti e soglia di spunto fanno sì che a duty cycle bassi il motore resti fermo).

---
## Slide 72 – SKETCH

[EA, cap. 4]

![[IOTL03-s072-1.png|492]]

CHECKS | WARNING
- same common GND must be used
- 9V should **not** be connected to 5 V
- both the transistor and the diode must be oriented in the proper way

>> GND comune: la tensione di base del transistor è riferita alla massa di Arduino; se le masse di batteria e Arduino non sono collegate, il segnale di controllo non ha un riferimento comune e il circuito non funziona.

---
## Slide 73 – PROGRAMMING

- Speed control through a PWM signal with a specific duty cycle

```cpp
const int MOTOR = 9;

void setup()
{
  pinMode(MOTOR, OUTPUT);
}

void loop()
{
  for (int i = 0; i < 256; i++)
  {
    analogWrite(MOTOR,i);
    delay(10);
  }

  delay(2000);

  for (int i = 255; i >= 0; i--)
  {
    analogWrite(MOTOR,i);
    delay(10);
  }
  delay(2000);
}
```

>> `analogWrite(pin, v)` con $v \in [0,255]$ genera un PWM con duty cycle $v/255$ (sul pin 9 di Arduino UNO la frequenza è ~490 Hz). Ogni rampa (accelerazione o decelerazione) dura $256 \cdot 10\,\text{ms} \approx 2{,}56\,\text{s}$, seguita da 2 s di pausa.

---
## Slide 74 – ADDING A POTENTIOMETER

[EA, cap. 4]

![[IOTL03-s074-1.png|426]]

```cpp
const int MOTOR = 9;
const int POT = 0;

int val = 0;

void setup()
{
  pinMode(MOTOR, OUTPUT);
}

void loop()
{
  val = analogRead(POT);
  val = map(val,0,1023,0,255);
  analogWrite(MOTOR,val);
}
```

>> `analogRead` restituisce un valore a 10 bit (0–1023), mentre `analogWrite` accetta 0–255 (8 bit): `map` riscala linearmente l'intervallo, in pratica equivale (a meno di arrotondamenti) a dividere per 4. Il potenziometro è collegato come partitore tra 5V e GND, con il cursore sul pin analogico A0.

---
## Slide 75 – H-BRIDGE FOR DIRECTION CONTROL

- It is possible to change movement direction by inverting the voltage at the terminals
- An H-bridge component is used for this purpose.
	- it integrates 4 switches (realised by transistors) and all the protection circuits
- 4 operational states
	- **open**
		- all switches open and motor is off
	- **forward**
		- 2 switches are open on the opposite diagonal, the current flows and the motor rotates in one direction
	- **backward**
		- the other 2 switches are open, the current flows in the opposite direction, the motor rotates in the opposite direction
	- **braking**
		- slowing down the motor until stop

>> Attenzione al termine: negli stati *forward*/*backward* i 2 interruttori sulla diagonale sono in realtà **chiusi** (conducono), gli altri due aperti; "open" qui va inteso come "attivati". Mai chiudere contemporaneamente i due interruttori dello stesso lato (alto e basso): si cortocircuita l'alimentazione (*shoot-through*).
>> Nel *braking* i due morsetti del motore vengono collegati tra loro (es. entrambi a GND): la f.e.m. generata dal motore che gira produce una corrente che si oppone al moto, frenandolo più rapidamente rispetto al semplice stato "open" (in cui il motore si ferma per inerzia).

---
## Slide 76 – H-BRIDGE OPERATING STATES

![[IOTL03-s076-1.png|600]]

[EA, cap. 4]

>> Lettura della figura: **Open** = 4 interruttori aperti; **Forward** = chiusi alto-destra e basso-sinistra, la corrente attraversa M in un verso; **Backward** = chiusi alto-sinistra e basso-destra, verso opposto; **Braking** = chiusi i due interruttori bassi, il motore è cortocircuitato verso massa.

---
## Slide 77 – H-BRIDGE: EXAMPLE

- Example: SN754410 Quadruple Half-H driver
	- can drive 2 motors

![[IOTL03-s077-1.png|371]]![[IOTL03-s077-2.png|278]]

*Image used with permission courtesy of Texas Instruments.*

- VCC2 => motor power line - 9V
- VCC1 => Arduino/logic circuit power - 5V
- 1Y e 2Y - output for left motor
- 1A e 2A - switch state for left motor, to be wired to Arduino I/O pins
- 1,2EN - pin to enable/disable left motor - to be wired to PWM Arduino pin
- 3Y e 4Y - output for right motor
- 3A e 4A - switch state for right motor, to be wired to Arduino I/O pins
- 3,4EN -pin to enable/disable right motor - to be wired to PWM Arduino pin

>> Un "half-H" è mezzo ponte: un'uscita Y che può essere collegata a VCC2 (H) o a GND (L). Due half-H (es. 1Y e 2Y) con il motore in mezzo formano un ponte H completo.
>> Quindi: 1A=H, 2A=L → corrente da 1Y a 2Y (un verso); 1A=L, 2A=H → verso opposto; 1A=2A → i due morsetti allo stesso potenziale → frenata. Con EN=L le uscite sono in alta impedenza (Z) → motore libero. Mettendo un PWM su EN si regola la velocità.

---
## Slide 78 – SKETCH WITH H-BRIDGE

![[IOTL03-s078-1.png|500]]

![[IOTL03-s078-2.png|250]]

[EA, cap. 4]

---
## Slide 79 – PROGRAMMING

- Using a potentiometer, to change the rotation from one direction to the other one

```cpp
const int EN = 9;  // Half bridge1 Enable
const int MC1 = 3; // Motor Control 1
const int MC2 = 2; // Motor Control 2
const int POT = 9; // POT on Analog pin 0

int val = 0; // memorizza valore potenziometro
int velocity = 0; // velocità desiderata (0-255)

void forward(int rate)
{
  digitalWrite(EN, LOW)
  digitalWrite(MC1, HIGH)
  digitalWrite(MC2, LOW)
  analogWrite(EN, rate)
}

void backward(int rate)
{
  digitalWrite(EN, LOW)
  digitalWrite(MC1, LOW)
  digitalWrite(MC2, HIGH)
  analogWrite(EN, rate)
}
```

```cpp
void brake()
{
  digitalWrite(EN, LOW)
  digitalWrite(MC1, LOW)
  digitalWrite(MC2, LOW)
  digitalWrite(EN, HIGH)
}

void loop()
{
  val = analogRead(POT);

  if (val > 562){
    velocity = map(val, 563, 1023, 0, 255);
    forward(velocity);
  } else if (val < 462) {
    velocity = map(val, 0, 461, 0, 255);
    forward(velocity);
  } else {
    brake();
  }
}
```

>> Idea: il potenziometro al centro (~512) corrisponde a motore frenato, con una "zona morta" 462–562 per evitare oscillazioni; ruotandolo da un lato si va avanti, dall'altro indietro, con velocità crescente allontanandosi dal centro.
>> Il codice della slide contiene alcuni errori (va corretto per compilare/funzionare):
>> - mancano i `;` dopo le chiamate dentro `forward`, `backward` e `brake`, e manca `setup()` (con `pinMode` di EN, MC1, MC2 come OUTPUT);
>> - `POT` dovrebbe essere `0` (come dice il commento, pin analogico A0), non `9`;
>> - nel ramo `val < 462` va chiamata `backward(velocity)`, non `forward`;
>> - nello stesso ramo la mappatura andrebbe invertita, `map(val, 461, 0, 0, 255)`, così che la velocità cresca allontanandosi dal centro (con `map(val, 0, 461, 0, 255)` si avrebbe velocità massima vicino al centro e nulla all'estremo).
>> In `forward`/`backward` EN viene prima messo LOW per cambiare MC1/MC2 a ponte disabilitato, poi riattivato con il PWM. In `brake` MC1=MC2=LOW con EN=HIGH: entrambi i morsetti a GND → frenata.

---
## Slide 80 – CONTROLLING EXTERNAL CIRCUITS

- Microcontrollers can be used to external circuits, powered with a different power — including alternating current circuits (AC)
	- To this purpose we need electronic devices functioning as switches, like transistors
- Electronic components functioning as switches:
	- **relay**
		- open/close a circuit by means of an electromagnet, that can be controlled by the microcontroller
		- Example in Arduino
			- http://www.instructables.com/id/Arduino-Controlled-Relay-Box/
	- **optocoupler**
		- based on an internal led, controlled by the micro
		- when the led is switched on, a photocell is activated and the second circuit is closed

>> Vantaggio comune di relè e optoisolatori (*optocoupler*): **isolamento galvanico**, cioè i due circuiti non hanno collegamenti elettrici diretti (nel relè il legame è magnetico/meccanico, nell'optoisolatore è luminoso). Il relè è meccanico (lento, si usura, ma commuta carichi in AC ad alta tensione); l'optoisolatore è statico e veloce, ma gestisce correnti piccole.

---
## Slide 81 – RELAY SWITCH

- Internally it has 2 circuits — the one with small current (where the micro is connected) and the one with big voltage and currents (e.g. 220 V AC)

![[IOTL03-s081-1.png|250]]

![[IOTL03-s081-2.png|500]]

>> Funzionamento: quando la bobina (*coil*, elettromagnete) è percorsa da corrente, attira l'armatura (*armature*) che sposta il contatto comune (COM) dal contatto NC (*normally closed*) al contatto NO (*normally open*); togliendo corrente la molla (*spring*) riporta l'armatura nella posizione di riposo.

---
## Slide 82 – RELAY WIRING

![[IOTL03-s082-1.png|500]]

*circuit for controlling an AC or other high-current device from a microtroller by using a relay*

relay:
- NC = normally closed
- C = common
- NO = normally open

transistor:
- B = base
- C = collector
- E = transmitter

>> Schema: i/o pin → resistenza da 100–1K ohm → base B del transistor NPN; collettore C → bobina del relè (con diodo in parallelo) → +5V; emettitore E → GND. Lato potenza: la lampadina AC (*ac bulb*) e la sorgente AC (*ac current*) sono in serie attraverso i contatti C e NO del relè.
>> Anche qui il pin di Arduino non pilota direttamente la bobina (che richiede tipicamente 50–100 mA) ma un transistor NPN usato come interruttore lato basso. Il diodo in parallelo alla bobina è il diodo di ricircolo, come per il motore: la bobina è un induttore.
>> Nella figura "E = transmitter" va letto come **emitter** (emettitore); "microtroller" = microcontroller. Usando il contatto NO la lampadina si accende solo quando il relè è eccitato (pin HIGH).

---
## Slide 83 – ABOUT INTERFACING COMPONENTS USING DIFFERENT VOLTAGE LEVELS

---
## Slide 84 – DIFFERENT VOLTAGE LEVELS PROBLEM

- Sensors/actuators can operate at 2 different voltage levels
	- 5 V (e.g.: Arduino) and 3.3 Volt (e.g. ESP32, Raspberry PI,..)
- In order to interface/use sensors/actuators that work at 3.3V into MCU boards that work at 5V we need to adopt specific strategies not to damage the components
- This is true also when connecting systems through serial buses
	- e.g. by connecting an Arduino and ESP by means of the asynchronous serial or the synchronous one
	- for the asynchronous serial
		- TX (ESP) => RX (Arduino): no problem
			- 3.3V level is enough to be interpreted as HIGH in Arduino
		- **TX (Arduino) => RX (ESP): problem!**
			- 5V in input for ESP can damage the board
- Solutions
	- using **voltage dividers**
	- using **bi-directional logic level converter**

>> Perché 3,3V basta ad Arduino: per l'ATmega328P alimentato a 5V la soglia minima per riconoscere un HIGH è $V_{IH} = 0{,}6 \cdot V_{CC} = 3\,\text{V}$, quindi 3,3V è (di poco) sufficiente. Al contrario, gli ingressi dell'ESP32 accettano al massimo circa $V_{CC} + 0{,}3\,\text{V} \approx 3{,}6\,\text{V}$: 5V li sovraccarica.

---
## Slide 85 – VOLTAGE DIVIDER

- It can be used to produce an output voltage Vout (e.g.: 3.3V) starting from a higher voltage Vin (e.g. 5V)
- The clue is the ratio between the resistances (not their absolute values)
- However, the absolute value impacts on the circuit current
	- $I_1 = I_{out} + I_2$, $I_{out} = I_1 - I_2$

![[IOTL03-s085-1.png|200]]

$$\alpha = \frac{R_2}{R_1 + R_2}$$
$$V_{out} = \alpha V_{in}$$

Typical value used:

**R1** = 1 KOhm
**R2** = 2 KOhm

>> Con i valori tipici: $\alpha = \dfrac{2}{1+2} = \dfrac{2}{3}$, quindi $V_{out} = \dfrac{2}{3} \cdot 5\,\text{V} \approx 3{,}33\,\text{V}$.
>> La formula vale se il carico su $V_{out}$ assorbe una corrente trascurabile ($I_{out} \approx 0$, vero per un ingresso digitale ad alta impedenza). La corrente nel partitore è $I = \dfrac{V_{in}}{R_1 + R_2} = \dfrac{5\,\text{V}}{3\,\text{k}\Omega} \approx 1{,}67\,\text{mA}$: resistenze più grandi (es. 10k/20k) danno lo stesso rapporto con meno consumo, ma rendono il nodo più "lento" (capacità parassite), per cui il partitore va bene solo per segnali non troppo veloci e solo in un verso (da 5V a 3,3V, es. TX Arduino → RX ESP).

---
## Slide 86 – BI-DIRECTIONAL LOGIC LEVEL CONVERTER

- The Bi-Directional Logic Level Converter (LCC) is a module that reduces the voltage from a signal.
	- recommended method to level shift signals that require high-speed communication (e.g. synchronous serials such as I2C…)

![[IOTL03-s086-1.png|250]]

![[IOTL03-s086-2.png|500]]

[https://randomnerdtutorials.com/how-to-level-shift-5v-to-3-3v/](https://randomnerdtutorials.com/how-to-level-shift-5v-to-3-3v/)
https://community.blynk.cc/t/using-logic-level-converter-to-connect-esp-and-l298/15323

>> Collegamento (figura): LV ← 3,3V (lato basso, 1,5–7V), HV ← 5V (lato alto, LV–18V), GND comune; ogni coppia Ln ↔ Hn è un canale bidirezionale tra un GPIO del dispositivo a 3,3V e uno del dispositivo a 5V.
>> Internamente ogni canale usa tipicamente un MOSFET (es. BSS138) con resistenze di pull-up verso LV e HV: funziona in entrambi i versi, ed è quindi adatto a bus bidirezionali come I2C (linea SDA), dove il partitore resistivo non basterebbe.

---
## Slide 87 – REFERENCES

- [IES] Introduction to Embedded Systems - A Cyber-Physical Approach. Lee, Seshia
- Fondamenti della Misurazione. E.Bava et al. Esculapio
- [EA] *“Exploring Arduino”*, Jeremy Bloom, Wiley
- *“Make: Sensor - Projects and Experiments to measure the world with Arduino and Raspberry Pi”* (Karvinen et al). Maker-Media

---
## Riassunto

>> **Sonar HC-SR04**
>> - Si invia un impulso su Trig (≥ 10 µs). Echo resta alto per il tempo di volo andata e ritorno, che si misura con `pulseIn(echoPin, HIGH)`. La funzione è bloccante, restituisce µs e dà 0 al timeout.
>> - d = v_s·Δt/2, con v_s ≈ 331,3 + 0,606·T, cioè circa 343 m/s a 20 °C. Servono circa 58 µs per cm, e a 50 cm Δt ≈ 2,9 ms.
>>
>> **Sensori analogici e digitali**
>> - LDR, FSR e sensori MQ variano la resistenza. Si mettono in un partitore con una R nota e si legge il nodo con `analogRead()` (0–1023 per 0–5 V).
>> - Il partitore dà V = 5·R/(R + R_sens). Con R = R_sens = 1 kΩ si ha 2,5 V, cioè circa 512. Conviene una R dello stesso ordine del sensore.
>> - TMP36: T = (V − 0,5)·100, con V = lettura·5/1024. Una lettura di 153 dà circa 24,7 °C.
>> - PIR e touch TTP223B hanno uscita digitale (`digitalRead`).
>> - MPU-6050, TC74 e BMP085 usano I2C (A4/A5). Il DHT11 usa un filo singolo con la libreria `DHT.h`, il GPS la seriale (NMEA), l'RC522 la SPI.
>>
>> **Pilotare gli attuatori**
>> - Un pin regge 20 mA (40 mA massimi). LED e piezo si collegano diretti. Per motori, relè e lampade servono un transistor o un relè e un'alimentazione separata, con GND comune.
>> - LED: R = (V_cc − V_F)/I. Con 5 V, V_F = 2 V e 15 mA si ottiene 200 Ω; con 220 Ω scorrono circa 13,6 mA.
>> - NPN low-side con 1 kΩ sulla base: I_B ≈ 4,3 mA.
>> - I carichi induttivi (motori, bobine) richiedono un diodo di ricircolo in antiparallelo contro la sovratensione allo spegnimento.
>>
>> **Display e motori**
>> - LCD 16x2 in modalità a 4 bit: RS, EN e D4–D7 (6 pin), RW a GND, un potenziometro su V0. Libreria `LiquidCrystal`: `begin(16,2)`, `setCursor(col,riga)`, `print`.
>> - Motore DC: velocità con `analogWrite(pin, 0–255)` sui pin PWM 3, 5, 6, 9, 10, 11. Tensione media = D·V. Con `map(val,0,1023,0,255)` si passa dal potenziometro al PWM.
>> - Ponte H SN754410: con 1A/2A = H/L il motore gira in un verso; invertendoli gira nell'altro. Con 1A = 2A ed EN alto frena; con EN basso è libero. Il PWM va su EN.
>> - Stepper: anello aperto, i passi si contano (200 passi/giro = 1,8° per passo).
>> - Servo: posizione assoluta, impulsi da 1–2 ms ogni 20 ms (50 Hz), da calibrare. Libreria `Servo`: `attach(pin)`, `write(0–180)`.
>>
>> **Relè e livelli di tensione**
>> - Relè: pilotato da un transistor, con un diodo sulla bobina. I contatti COM/NO/NC commutano carichi AC con isolamento galvanico.
>> - Da 3,3 V verso Arduino non serve nulla, perché V_IH = 3 V. Da 5 V verso ESP32 serve un partitore 1 kΩ/2 kΩ (≈ 3,33 V, solo in un verso, per segnali lenti) oppure un convertitore di livello bidirezionale, necessario per I2C.
