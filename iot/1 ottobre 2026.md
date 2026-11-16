(slide 69)
`ISR` $\to$ **Interrupt Service Routine**. It is a function that is executed automatically when a specific **interrupt** occurs.
![[Screenshot 2026-10-01 alle 09.30.16.png]]

`TCCR1B |= (1 << WGM12);` this is a mask - all 0 and only 1 bit (OR) 

(slide 73)
superloop is empty - because everything is done by the interrupt 
![[Pasted image 20261001093218.png]]

the timer is very important -how can you do a periodic behavior without a timer ? using _superloop_ and _delay_ $\to$ when you delay and you want to have an exact period 
```
c <- 0
LOOP {
	delay(1s)
	c <- c+1 # ΔT
}
```
does the delay really take 1 second ? NO cause you need to take some time in order to do what happens next. so the time should be:
```
c <- 0
p <- 1s
LOOP {
	delay(p-ΔT)
	c <- c+1 # ΔT
}
```

==**The watch dog timer**== - it is used for safety parts. If there's a bug we should have a way to start again or debug. 

#def It is a timer that counts until some specified value, after than a reset signal is produced to reboot the system. 

- in _normal functioning_, the watch dog periodically receives a signal before reaching the threshold, resetting the counter;
- if _no signal is received on time_, than it means that the microprocessor encountered a problem (e.g. deadlock) and it is reset;

(🙀 apollo11 story with the watch dog)

==**Timers and PWM**== - In the lib implementation managing the GPIO in Wiring for Arduino, timers are used to realise PWM output signals.
- Timer0 is used for pin 5 and 6
- Timer1 is used for pins 9 and 10
- Timer2 is used for pins 11 e 3 

> [!note] PWM - Pulse Width Modulation instead of continuously changing the voltage, you turn a signal ON and OFF very quickly and control how long it stays ON.

```
5V  ┌───┐     ┌───┐     ┌───┐
    │   │     │   │     │   │
0V  ┘   └─────┘   └─────┘   └─────
        ← period →

        ↑
    pulse width
```
If you use PWM to control a LED: 
```
100%  ████████████████████  → maximum brightness
 50%  █████░░░░█████░░░░░  → roughly half brightness
 10%  █░░░░░░░░░░░░░░░░░░░  → very dim
```

PWM is commonly used for **LED brightness, motor speed, fans, power supplies, and servo control**.
PWM doesn't necessarily change the voltage — it changes the amount of time the voltage is ON.

==**Buses and Protocols**== (slide 77 - )
Protocols to exchange data through single pins can become complex depending on the external communicating I/O device. To this purpose specific communication interfaces, buses and protocols have been introduced:
![[Screenshot 2026-10-01 alle 09.50.19.png]]
- Serial
	- Serial Interfaces/Buses
		- Asynchronous (USB, TTL, RS-232)
			- Baud rate
			- Data frame 
			- Synchronous bits 
			- Parity bit 
		- Synchronous (SPI, $I^2C$(slide 94))
	- Serial Hardware
- Parallel 