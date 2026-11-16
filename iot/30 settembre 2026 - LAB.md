![[Screenshot 2026-09-30 alle 09.42.53.png]]

``` C++
#define BUTTON_PIN 2
#define LED_PIN 13

void setup() {
  pinMode(BUTTON_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);
}
# Se il pulsante è HIGH → accendi il LED. Altrimenti → spegnilo.
void loop() {
  int buttonState = digitalRead(BUTTON_PIN);

  if (buttonState == HIGH) {
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }
}
```

**Codice del prof**
``` C++
#define BUTTON_PIN 2
#define LED_PIN 13

# memorizza lo stato del LED con
bool ledAlreadyOn; 

void setup() {
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);
  ledAlreadyOn = false; 
  Serial.begin(9600);
}

void loop() {
  /* sense */
  int buttonState = digitalRead(BUTTON_PIN);

  /* plan */
  # controlla anche che lo stato sia cambiato
  if (buttonState == HIGH && !ledAlreadyOn) {
    Serial.println("PRESSED");
    digitalWrite(LED_PIN, HIGH);
    ledAlreadyOn = true;
  }
  else if (buttonState == LOW && ledAlreadyOn) {
    Serial.println("NOT PRESSED");
    digitalWrite(LED_PIN, LOW);
    ledAlreadyOn = false;
  }
}
```

_Nota bene_
- `#define PIN 2` creo un nome per un valore
- `pinMode(PIN, OUTPUT)` serve a dire ad Arduino **come deve essere utilizzato un pin**, in questo caso il pin 2 sarà in uscita. 
	- INPUT - riceve informazioni 
	- OUTPUT - manda informazioni 
	- INPUT_PULLUP - entrata con resistenza interna di Arduino
- `digitalRead()` serve a **leggere** un pin digitale. int buttonState = digitalRead(PIN); $\to$ arduino controlla il pin 2 e ottiene: 
	- HIGH se pulsante premuto 
	- LOW se pulsante NON premuto
- `digitalWrite()` serve a **scrivere** un valore su un'uscita digital
- `Serial` **serve per far comunicare Arduino con il computer**, principalmente per vedere informazioni nel **Serial Monitor**dell'Arduino IDE. È molto utile per capire cosa sta facendo il programma. 

Importante tenere a mente la sequenza
```
PULSANTE
   ↓
digitalRead()
   ↓
buttonState
   ↓
if (...)
   ↓
digitalWrite()
   ↓
LED
```


- `delay`is declared in Arduino.h so we need to include it while using it - `#include "lib.h"`
