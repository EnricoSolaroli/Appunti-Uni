### 1. Gestione degli Interrupt

Per gestire gli interrupt (anche su simulatori virtuali), devi scegliere l'approccio da utilizzare.

- **Libreria EnableInterrupt:** Per aggiungerla, vai sull'IDE di Arduino in _Manage Libraries_ (Gestione Librerie) -> _Include Library_ e verifica se la libreria `EnableInterrupt` è già installata.

- **Regola d'oro:** Usa le normali funzioni di base di Arduino (come `attachInterrupt()`) **OPPURE** la libreria `EnableInterrupt`. Non usarle mai entrambe nello stesso sketch per evitare conflitti a livello di codice.
    

### 2. I Timer di Arduino

Le schede Arduino basate su ATmega328P (come Arduino Uno) hanno tre timer hardware integrati: **Timer 0**, **Timer 1** e **Timer 2**.

- **Architettura a 16 bit:** Il Timer 1 è a 16 bit (mentre Timer 0 e Timer 2 sono a 8 bit). Il numero di bit è un fattore chiave: un timer a 16 bit permette di contare fino a numeri molto più alti, rendendolo ideale per gestire e misurare periodi di tempo più lunghi.
    
- **Timer 0:** Gestisce le funzioni temporali di base di Arduino (come `millis()`, `micros()` e `delay()`). È intoccabile se non vuoi compromettere queste funzioni, ma offre flessibilità standard.
    
- **Timer 1:** Viene sfruttato da moltissime librerie (come la libreria `Servo`). Presta molta attenzione quando lo programmi manualmente, perché potresti causare conflitti con le librerie incluse.
    
- **Event-Driven Blinking:** È una tecnica di programmazione che permette di far lampeggiare un LED sfruttando gli interrupt del Timer 1. Questo approccio è "a eventi" e permette al microcontrollore di fare altre operazioni nel frattempo, al contrario dell'uso bloccante della funzione `delay()`.
    

### 3. Comunicazione Seriale

- **Lettura dei dati:** Quando scrivi codice per ricevere messaggi, devi sempre usare la condizione `if (Serial.available() > 0)` per far sì che Arduino controlli se ci sono effettivamente dati disponibili nel buffer prima di tentare di leggerli.
    
- **Pin di comunicazione:** I pin dedicati alla comunicazione seriale hardware (UART) sono:
    
    - **Pin 0:** RX (Linea di ricezione dati)
        
    - **Pin 1:** TX (Linea di trasmissione dati)
        
- **Comunicazione tra due Arduino:** Puoi far comunicare due schede collegando i pin seriali incrociati: il TX (Pin 1) del primo Arduino va all'RX (Pin 0) del secondo, e viceversa (ricordati di collegare sempre insieme i pin GND di entrambe le schede).
    
- **Gestione della velocità:** Fai attenzione se invii dati troppo velocemente ("sending data too fast"). La seriale ha un buffer di memoria limitato (di solito 64 byte); se lo riempi troppo in fretta, Arduino perderà i pacchetti di dati in arrivo. Utilizza un baud rate adeguato e, se necessario, dei piccoli ritardi di sincronizzazione.

DISPLAY LCD = composed by two part, the normal display with lots of pins, the adapter that is turnig the displayy in how to see?

if everything in the lcd display is working but you can't see the dispaly try to sisytemare il trimmer

whne you've the deepest sleep, when you exit from the deep sleep it takes soemtime

we attach to the pin two to wake up arduino by using an the interrupt

### Assignemnt
#### main logic
game with 2 players
2 green led
2 red led
2 buttons
1 lcd
potentiometer used to chenge the difficiulty level
the ide a is that the sistem periodically show a number in the lcd, compreswo tra 1 e 3, in un random time
you've to press the number a number of time on the lcd
players have a score starting from 0, everytime one is starter he gain a point, if press the button befor the number - 1 (o se spingi il pulsante un  umero sbagliato di volte)
ther'es also time-out
the system says that both palyers have a maximum time, if non si spinge il pulsante nel tempo amssimo: game over

green led to notify the fastest
red light for penality

initial state

use an algorithm to scroll to the left welcome...

when both the buttons are pressed means that both players are available

if in 10 sec playes dont press -< sistem go to sleep

when game over it shoul be written the winner is..

is not specified how to reduce it
the point is the potentiometer at the beginning

based on super loop 
written on c, procedural progrsamming
work in group

suggestion:
arduino docs

usa il string wrapper per store la memoria non nella ram ma in 1kb di eprom -> miglior uso di memoria

a common way to do superloop is identify states.
good design matter.

in every state you can take different state directions in base allo stato in cui ti trovi

purely procedural

>for first assignemt pay attention to bouncing when pressing buttons!!!

the core parte is the business logic

clean and very short main .ino
not all code in teh same source
