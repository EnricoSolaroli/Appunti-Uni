[Strato Fisico](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/reti 2/slide/Strato Fisico.pdf>)

# Strato fisico e mezzi trasmissivi

>> Lezione sullo strato più basso: come si trasportano i bit su rame, radio e fibra ottica, e perché la fibra domina le reti moderne (amplificatori ottici, WDM, commutazione ottica, FTTH e PON). Fa da base a [[08 - Local Area Network e accesso multiplo]], dove si vedono gli standard fisici di Ethernet e Wi-Fi.

## Indice

1. **Introduzione: crescita della capacità e attenuazione** (slide 1–5)
	- [[#Slide 2 – Lo sviluppo della microelettronica|Lo sviluppo della microelettronica]]
	- [[#Slide 3 – La prima legge di Moore|La prima legge di Moore]]
	- [[#Slide 4 – Legge di Edholm|Legge di Edholm]]
	- [[#Slide 5 – Attenuazione|Attenuazione]]
2. **Mezzi trasmissivi in rame** (slide 6–13)
	- [[#Slide 7 – Attenuazione|Attenuazione]]
	- [[#Slide 8 – La rete telefonica di accesso|La rete telefonica di accesso]]
	- [[#Slide 9 – Coppie intrecciate o Twisted Pair|Coppie intrecciate o Twisted Pair]]
	- [[#Slide 10 – Twisted Pair|Twisted Pair]]
	- [[#Slide 11 – Categorie UTP e STP|Categorie UTP e STP]]
	- [[#Slide 12 – Linee in rame: cavi coassiali|Linee in rame: cavi coassiali]]
	- [[#Slide 13 – Cavi coassiali per reti telefoniche|Cavi coassiali per reti telefoniche]]
3. **Il mezzo radio** (slide 14–21)
	- [[#Slide 15 -> 16 – Radio comunicazioni|Radio comunicazioni]]
	- [[#Slide 17 – Comunicazioni Radio|Comunicazioni Radio]]
	- [[#Slide 18 – Servizi su comunicazioni radio|Servizi su comunicazioni radio]]
	- [[#Slide 19 – Grande distanza|Grande distanza]]
	- [[#Slide 20 – Sistemi cellulari|Sistemi cellulari]]
	- [[#Slide 21 – Osservazioni sulle reti radio|Osservazioni sulle reti radio]]
4. **Fibra ottica** (slide 22–44)
	- [[#Slide 23 – Comunicare con la luce?|Comunicare con la luce?]]
	- [[#Slide 24 – Nella storia|Nella storia]]
	- [[#Slide 25 – Il Fotofono (1880)|Il Fotofono (1880)]]
	- [[#Slide 26 – Problemi ?|Problemi ?]]
	- [[#Slide 27 – Guidare la luce|Guidare la luce]]
	- [[#Slide 28 – Dalla teoria alla pratica|Dalla teoria alla pratica]]
	- [[#Slide 29 – La fibra ottica|La fibra ottica]]
	- [[#Slide 30 – Dimensioni della fibra|Dimensioni della fibra]]
	- [[#Slide 31 – Quale vetro|Quale vetro]]
	- [[#Slide 32 – Come si costruisce la fibra|Come si costruisce la fibra]]
	- [[#Slide 33 – Fibre ottiche|Fibre ottiche]]
	- [[#Slide 34 – Alcune date|Alcune date]]
	- [[#Slide 35 – Come funziona|Come funziona]]
	- [[#Slide 36 – Tipi di fibre ottiche|Tipi di fibre ottiche]]
	- [[#Slide 37 – Il sistema di trasmissione|Il sistema di trasmissione]]
	- [[#Slide 38 – Il paradosso delle fibre ottiche|Il paradosso delle fibre ottiche]]
	- [[#Slide 39 – Ma qualche problema c'è?|Ma qualche problema c'è?]]
	- [[#Slide 40 – Giunto stabile|Giunto stabile]]
	- [[#Slide 41 – Fusion splicing machine|Fusion splicing machine]]
	- [[#Slide 42 – Allineamento|Allineamento]]
	- [[#Slide 43 – Giunti temporanei|Giunti temporanei]]
	- [[#Slide 44 – Fibra: dove e come|Fibra: dove e come]]
5. **Amplificatori ottici, WDM e commutazione ottica** (slide 45–60)
	- [[#Slide 45 – L'Amplificatore Ottico…|L'Amplificatore Ottico…]]
	- [[#Slide 46 – L'EDFA|L'EDFA]]
	- [[#Slide 47 – Evoluzione: sistemi amplificati|Evoluzione: sistemi amplificati]]
	- [[#Slide 48 – I collegamenti intercontinentali|I collegamenti intercontinentali]]
	- [[#Slide 49 – Il boom del WDM|Il boom del WDM]]
	- [[#Slide 50 – I principi del WDM|I principi del WDM]]
	- [[#Slide 51 – Un sistema WDM|Un sistema WDM]]
	- [[#Slide 52 – Le reti di oggi|Le reti di oggi]]
	- [[#Slide 53 – Cosa rimane?|Cosa rimane?]]
	- [[#Slide 54 – Commutazione WDM|Commutazione WDM]]
	- [[#Slide 55 – ROADM|ROADM]]
	- [[#Slide 56 – AWG|AWG]]
	- [[#Slide 57 – Funzionamento di AWG|Funzionamento di AWG]]
	- [[#Slide 58 – MEM|MEM]]
	- [[#Slide 59 – MEMs Switch Matrix|MEMs Switch Matrix]]
	- [[#Slide 60 – MEMs Switch|MEMs Switch]]
6. **Banda ultralarga e rete di accesso in fibra** (slide 61–71)
	- [[#Slide 61 – Aree bianche, grigie o nere|Aree bianche, grigie o nere]]
	- [[#Slide 62 – Banda Ultralarga?|Banda Ultralarga?]]
	- [[#Slide 63 – Strategia Italiana Banda Ultra-larga|Strategia Italiana Banda Ultra-larga]]
	- [[#Slide 64 – Piano Italia 1 Giga|Piano Italia 1 Giga]]
	- [[#Slide 65 – Come|Come]]
	- [[#Slide 66 – Nella rete di accesso|Nella rete di accesso]]
	- [[#Slide 67 – Alternative|Alternative]]
	- [[#Slide 68 – La tecnologia|La tecnologia]]
	- [[#Slide 69 – Passive Optical Network|Passive Optical Network]]
	- [[#Slide 70 – A Imola|A Imola]]
	- [[#Slide 71 – Lavori in corso|Lavori in corso]]

---
## Slide 1 – Breve introduzione ai mezzi trasmissivi

Breve introduzione ai mezzi trasmissivi

Franco CALLEGATI
Dipartimento di Informatica: Scienza e Ingegneria

---
## Slide 2 – Lo sviluppo della microelettronica

![[RT07-s002-1.png|250]]![[RT07-s002-2.png|250]]![[RT07-s002-3.png|250]]

| Anno | Transistor |
|---|---|
| 1978 | 29.000 |
| 1985 | 275.000 |
| 1993 | 3.100.000 |
| 2004 | 112.000.000 |
| 2011 | 1.160.000.000 |
| 2013 | 5.000.000.000 |

![[RT07-s002-4.png|250]]

Gordon Moore
https://it.wikipedia.org/wiki/Gordon_Moore

*Prima Legge di Moore*:
il numero di transistor per circuito integrato raddoppia ogni anno e mezzo circa

>> Le foto mostrano l'evoluzione: transistor discreti, una scheda con componenti discreti saldati, un circuito integrato (chip) con i fili di collegamento ai piedini.
>>
>> Precisazione sul periodo di raddoppio: Moore nel 1965 parlava di raddoppio ogni anno, nel 1975 corresse a ogni 2 anni; i "18 mesi" sono la versione divulgata in seguito (stima di David House di Intel, riferita alle prestazioni). Il grafico della slide successiva infatti usa "every two years".
>>
>> Verifica con la tabella: da 29.000 (1978) a 1,16 miliardi (2011) il fattore è circa 40.000 ≈ $2^{15,3}$ in 33 anni, cioè un raddoppio circa ogni 2,2 anni.

---
## Slide 3 – La prima legge di Moore

![[RT07-s003-1.png|600]]

Fonte: https://it.wikipedia.org/wiki/Legge_di_Moore

>> Il grafico (*Microprocessor transistor counts 1971-2011 & Moore's law*) ha l'asse verticale in scala **logaritmica**: una crescita esponenziale appare come una retta. Dal 4004 (2.300 transistor, 1971) ai processori multi-core del 2011 (oltre 2,6 miliardi) la retta indica un raddoppio ogni due anni circa ("curve shows transistor count doubling every two years").

---
## Slide 4 – Legge di Edholm

- Analoga alla legge di Moore: ogni circa 18 mesi la banda a disposizione dell'utente raddoppia, a costo circa costante

![[RT07-s004-1.png|600]]

Fonte: https://spectrum.ieee.org/ns/images/jul04/images/cellularf1.jpg

>> Il grafico (IEEE Spectrum, 2004) riporta in bit/s, in scala logaritmica, tre famiglie di tecnologie: **wireline** (Ethernet 2,94 Mb/s → 10 Mb/s → 100 Mb/s → 1 Gb/s), **nomadic** (modem 110 b/s → 9600 b/s → 28,8 kb/s → 56 kb/s, poi Wi-Fi 802.11b/802.11g) e **wireless** (paging, GSM, UMTS, MIMO). Le tre rette sono quasi parallele: crescono con lo stesso ritmo esponenziale, con le tecnologie senza fili che inseguono quelle cablate con un ritardo pressoché costante.

---
## Slide 5 – Attenuazione

- Qualunque mezzo trasmissivo degrada il segnale elettromagnetico mentre questo si sposta
- **Attenuazione** : misura di questo degrado, solitamente misurando la perdita di potenza del segnale
	- Solitamente l'attenuazione si misura in dB/km

>> Il decibel esprime un rapporto di potenze in scala logaritmica: $A_{dB} = 10\log_{10}(P_T/P_R)$. Valori da ricordare: 3 dB ≈ potenza dimezzata ($10\log_{10}2 = 3{,}01$), 10 dB = 1/10, 20 dB = 1/100, 30 dB = 1/1000.
>>
>> Il vantaggio dei dB è che le attenuazioni in cascata si **sommano**: con un'attenuazione specifica $\alpha$ in dB/km, un collegamento lungo $L$ km attenua $\alpha L$ dB. Esempio: 0,2 dB/km × 100 km = 20 dB, cioè arriva 1/100 della potenza trasmessa.

---
## Slide 6 – Mezzi trasmissivi in rame

Mezzi trasmissivi in rame

---
## Slide 7 – Attenuazione

$$A_{dB} = 10 \cdot \log_{10}\left(\frac{P_T}{P_R}\right) = \alpha \sqrt{f_{MHz}}\, L$$

- L'attenuazione cresce
	- Esponenzialmente con la lunghezza del collegamento
	- Esponenzialmente con la radice della frequenza del segnale
- In breve è molto difficile portare lontano segnali ad alta frequenza

>> "Esponenzialmente" va riferito al rapporto di potenze, non ai dB: in dB l'attenuazione è **lineare** in $L$ e in $\sqrt{f}$, mentre la potenza ricevuta cala in modo esponenziale: $P_R = P_T \cdot 10^{-\alpha\sqrt{f}\,L/10}$.
>>
>> La dipendenza da $\sqrt{f}$ nei conduttori in rame è dovuta soprattutto all'**effetto pelle**: ad alta frequenza la corrente scorre solo in uno strato superficiale del conduttore, la sezione utile si riduce e la resistenza cresce circa come $\sqrt{f}$.
>>
>> Esempio: se a 1 MHz un cavo attenua 2 dB/km, a 100 MHz attenua $2 \cdot \sqrt{100} = 20$ dB/km. Per un collegamento di 5 km si passa da 10 dB (arriva 1/10 della potenza) a 100 dB (arriva $10^{-10}$ della potenza).

---
## Slide 8 – La rete telefonica di accesso

- Si sviluppa utilizzando coppie bifilari in rame
	- Due fili di rame accoppiati

![[RT07-s008-1.png|350]]![[RT07-s008-2.png|280]]

Cavo telefonico urbano

>> A sinistra un cavo telefonico urbano con centinaia di coppie in un'unica guaina; a destra un armadio stradale di distribuzione, in cui le coppie del cavo che arriva dalla centrale vengono collegate (permutate) con quelle che vanno verso gli edifici. È il "doppino" usato dalla telefonia tradizionale e poi dall'ADSL/VDSL.

---
## Slide 9 – Coppie intrecciate o Twisted Pair

- Agli inizi degli anni '90 si approfondiscono gli studi sulle coppie bifilari in due varianti
	- **Shielded twisted pair STP**
		- Nel cavo ogni coppia è avvolta in un conduttore che fa da schermo
		- Maggiore costo del cavo
		- Lo schermo deve essere messo a massa
	- **Unshielded twisted pair UTP**
		- Meno costose e più semplici da posare
- Vengono studiati modi per migliorare le prestazioni
	- Aumentare il diametro dei conduttori e migliorare la qualità del dielettrico
	- Migliorare la regolarità e infittire il passo di avvolgimento
- Vengono definiti livelli di qualità detti Categorie
	- Standardizzate da Cat. 1 a Cat 7

>> Perché si intrecciano i fili: un disturbo esterno induce su due fili vicini e intrecciati circa la stessa tensione, e il ricevitore, che legge la **differenza** fra i due fili (trasmissione differenziale), lo cancella. Inoltre i campi emessi dai due fili, percorsi da correnti opposte, si compensano. Così si riducono sia le interferenze esterne sia la **diafonia** (crosstalk) fra coppie dello stesso cavo. Un passo di avvolgimento più fitto e regolare migliora la cancellazione e permette frequenze più alte.

---
## Slide 10 – Twisted Pair

![[RT07-s010-1.png|500]]

da Tanenbaum

(a) Category 3 UTP.
(b) Category 5 UTP.

| Categoria | Velocità (Mbit/s) |
|---|---|
| 1 | 2 |
| 2 | 4 |
| 3 | 10 |
| 4 | 16 |
| 5 | 100 |

>> La differenza visibile fra (a) e (b) è il passo di avvolgimento: la Cat. 5 ha molte più torsioni per unità di lunghezza, quindi minore diafonia e banda più ampia.
>>
>> La tabella riporta le velocità tipiche delle applicazioni storiche di ogni categoria (es. Cat. 3 → Ethernet 10 Mbit/s, Cat. 4 → Token Ring 16 Mbit/s, Cat. 5 → Fast Ethernet 100 Mbit/s). Velocità e frequenza non coincidono: con codifiche multilivello e usando 4 coppie insieme, su Cat. 5e si arriva a 1 Gbit/s (1000BASE-T) pur con una banda di 100 MHz.

---
## Slide 11 – Categorie UTP e STP

- Categoria 1: (TIA/EIA-568-B). Usato per la Rete telefonica generale, ISDN e per i citofoni.
- Categoria 3: (TIA/EIA-568-B). Usata per reti con frequenze fino a 16 MHz, molto diffusa per le reti Ethernet a 10 Mbit/s.
- Categoria 5 (non riconosciuta). Usata per reti con frequenze fino a 100 MHz; come ad esempio ethernet a 100 Mbit/s.
- Categoria 5e (TIA/EIA-568-B). Usata per reti con frequenze fino a 200 MHz, come ad esempio fast ethernet e gigabit ethernet.
- Categoria 6 (TIA/EIA-568-B). Usata per reti con frequenze minima per certificazione 250 MHz.
- Categoria 6a (TIA/EIA-568-B). Usata per reti con frequenze fino a 500 MHz.
- Categoria 7 (ISO/IEC 11801 Class F), nome informale. Lo standard specifica 4 STP all'interno di un unico cavo. Concepito per trasmissioni sino a 600 MHz.Categoria
- 7a (ISO/IEC 11801). Usata per reti con frequenze fino a 1 GHz.

![[RT07-s011-1.png|350]]

Da wikipedia

>> Correzione: la Cat. 5e è specificata fino a **100 MHz** come la Cat. 5 (non 200 MHz); è migliorata nei parametri di diafonia, ed è questo che le permette il Gigabit Ethernet. Le altre frequenze sono corrette: Cat. 3 16 MHz, Cat. 5 100 MHz, Cat. 6 250 MHz, Cat. 6a 500 MHz, Cat. 7 600 MHz, Cat. 7a 1000 MHz.
>>
>> "Non riconosciuta" significa che nello standard TIA/EIA-568-B la Cat. 5 è stata sostituita dalla 5e. Le Cat. 1 e 2 sono categorie storiche "per la voce", di fatto non incluse nel 568-B. Le Cat. 7 e 7a esistono solo nello standard ISO (Class F e FA) e hanno ogni coppia schermata singolarmente. Il "Categoria / 7a" spezzato fra due punti è un refuso di impaginazione.
>>
>> Esiste anche la Cat. 8 (fino a 2000 MHz, per 25/40GBASE-T su tratte brevi, max 30 m, tipicamente nei data center).
>>
>> Riferimenti utili per Ethernet: 100BASE-TX → Cat. 5; 1000BASE-T → Cat. 5e; 10GBASE-T → Cat. 6a (fino a 100 m; su Cat. 6 solo fino a circa 55 m).

---
## Slide 12 – Linee in rame: cavi coassiali

![[RT07-s012-1.png|600]]

da Tanenbaum

- Due conduttori cilindrici coassiali
	- D = diametro cavità conduttore esterno
	- d = diametro conduttore interno
- Quanto maggiore è D, tanto maggiore è il costo e tanto migliori sono le prestazioni
- Cavo coassiale normalizzato
  d = 2.6 mm            D = 9.5 mm     $A_{1\,MHz}$ = 2.35 dB/Km
- Multiplazione a divisione di frequenza (FDM)

>> Nella figura: Copper core (anima in rame), Insulating material (dielettrico), Braided outer conductor (conduttore esterno a calza, che fa anche da schermo), Protective plastic covering (guaina).
>>
>> Il conduttore esterno racchiude il campo elettromagnetico all'interno del cavo: il coassiale irradia poco ed è poco sensibile ai disturbi, quindi rispetto al doppino supporta frequenze molto più alte.
>>
>> Applicando la legge in $\sqrt{f}$ della slide 7 al coassiale normalizzato 2,6/9,5 mm: a 1 MHz 2,35 dB/km, a 4 MHz 4,7 dB/km, a 100 MHz 23,5 dB/km. Per questo nelle dorsali analogiche FDM servivano ripetitori ogni pochi km. Con la FDM si mettevano migliaia di canali telefonici da 4 kHz, ognuno spostato su una frequenza portante diversa, sullo stesso coassiale.

---
## Slide 13 – Cavi coassiali per reti telefoniche

![[RT07-s013-1.png|500]]

>> Sono cavi a più tubi coassiali: nella stessa guaina ci sono diversi coassiali (i tubi in rame) più alcune coppie di servizio. Erano usati per le dorsali telefoniche interurbane in FDM, prima di essere sostituiti dalla fibra ottica.

---
## Slide 14 – Il mezzo radio

Il mezzo radio

---
## Slide 15 -> 16 – Radio comunicazioni

- Mezzo naturalmente broadcast
	- Vantaggioso per i servizi diffusivi
- Mezzo adatto alla mobilità
	- Non esiste vincolo fisico
- Problema della condivisione dello spettro
	- Lo spettro radio è uno solo

- Attenuazione nei radiocollegamenti
	- Cresce con la distanza con legge polinomiale
	- Cresce con il quadrato della frequenza
	- Le antenne diventano più efficienti quando la frequenza cresce
- Le onde elettromagn. si propagano in linea retta
	- Sotto i 3 MHz: visibilità diretta o onda di terra
	- Fra 3 e 30 MHz: propagazione ionosferica
	- Sopra i 30 MHz: solo visibilità diretta (ponti radio)

>> Nello spazio libero (formula di Friis, antenne isotrope) l'attenuazione è $\left(\frac{4\pi d f}{c}\right)^2$, cioè cresce con $d^2$ e con $f^2$. In dB: $20\log_{10} d + 20\log_{10} f + \text{cost}$. Vicino al suolo, a causa delle riflessioni, l'esponente della distanza può arrivare a 3–4: da qui "legge polinomiale".
>>
>> Confronto con il cavo: nel rame i dB crescono **linearmente** con la lunghezza (slide 7), nella radio crescono con il **logaritmo** della distanza. Raddoppiare la distanza costa solo 6 dB in radio (con $d^2$), mentre su cavo raddoppia i dB. Per questo sulle lunghe distanze la radio può essere più conveniente.
>>
>> "Antenne più efficienti": a parità di dimensioni fisiche, un'antenna è più direttiva (ha più guadagno) quando la lunghezza d'onda è più piccola. Il guadagno cresce con $f^2$ e compensa in tutto o in parte la crescita dell'attenuazione: è il motivo per cui i ponti radio ad alta frequenza usano parabole molto direttive.
>>
>> Le bande citate: sotto 3 MHz (LF/MF, es. radio in onde medie) propagazione per onda di terra, che segue la curvatura terrestre; 3–30 MHz (HF, onde corte) riflessione sulla ionosfera, che permette collegamenti intercontinentali; sopra 30 MHz (VHF, UHF, microonde) le onde attraversano la ionosfera e serve visibilità diretta.

---
## Slide 17 – Comunicazioni Radio

- **1895: esperimento di Marconi** ed invenzione delle radio-comunicazioni
	- Pontecchio Marconi
- 1901 : Prima trasmissione transatlantica
- All'inizio viene usata per portare segnali telegrafici (**telegrafo senza fili**)
- Applicazione ai **mezzi mobili**, in particolare navi
	- 1912 : salvataggio passeggeri del Titanic
- In seguito ai progressi dell'elettronica diventano possibili trasmissioni analogiche
	- **Radiodiffusione** (voce e musica)
	- **Telediffusione** (immagini e suoni)
- Dagli anni '90 emergono i servizi di radiocomunicazione mobile per telefonia (telefono cellulare)

>> Pontecchio Marconi è una frazione di Sasso Marconi, vicino a Bologna: nel 1895, a Villa Griffone, Marconi trasmise un segnale oltre una collina, senza visibilità diretta. La trasmissione transatlantica del 1901 collegò Poldhu (Cornovaglia) con St. John's (Terranova).

---
## Slide 18 – Servizi su comunicazioni radio

- Sono possibili trasmissioni punto-multipunto
	- Servizi originali di diffusione (broadcasting)
- Mobilità
- Limitazione delle risorse (lo spettro radio è finito)

- Diffusione radiofonica/televisiva
	- Raggiungere la maggior quantità di utenti possibili con un solo segnale
	- Pianificazione della localizzazione delle emittenti

![[RT07-s018-1.png|400]]

- Sistemi **radiomobili**
	- Segnale confinato in un'area limitata per poter riutilizzate lo spettro radio

![[RT07-s018-2.png|300]]

>> Le due figure mostrano le due filosofie opposte. Nel broadcasting si usa un solo trasmettitore potente, in posizione elevata, che copre un'area di copertura il più ampia possibile. Nei sistemi radiomobili (cellulari) si usano tante stazioni a bassa potenza, ciascuna con la sua **cella**: la stessa frequenza può essere riusata in celle abbastanza lontane, e la capacità totale cresce con il numero di celle.

---
## Slide 19 – Grande distanza

- Propagazione ionosferica
	- Servizio di radiodiffusione ad onda corta

![[RT07-s019-1.png|400]]

- Radiocomunicazione via satellite
	- 1957 : **Sputnik** primo satellite artificiale
- Satelliti per TLC
	- Anni '60 : **Intelsat**
		- orbita geostazionaria (**GEO** = Geostationary Earth Orbit)
	- Anni '70-'80
		- Satelliti molto semplici e stazioni a terra sofisticate e costose
			- Collegamenti televisivi transatlantici e mondovisione
	- Anni '90
		- Satelliti sofisticati con buona potenza in trasmissione
			- La stazione a terra può diventare molto economica
				- Global Position System (**GPS**)
				- Diffusione diretta da satellite (**DBS**)
				- Accesso ad internet tramite satellite
	- Oggi
		- Costellazioni di satelliti sofisticati che formano una rete
		- **MEO**: Medium-Earth Orbit (da 10000 a 5000 Km di altezza)
		- **LEO**: Low-Earth Orbit (<5000 Km di altezza)

![[RT07-s019-2.png|350]]

>> **GEO**: orbita equatoriale a circa 35.786 km di quota, con periodo uguale a quello di rotazione terrestre, quindi il satellite appare fermo nel cielo e le antenne a terra possono essere fisse. Tre satelliti GEO coprono quasi tutta la Terra, poli esclusi. Svantaggio: il ritardo. Salita più discesa fanno circa 72.000 km, cioè circa 240 ms in un verso, quindi un RTT di circa 0,5 s.
>>
>> Correzione delle quote: le definizioni usuali sono **LEO** fino a circa 2.000 km (es. ISS circa 400 km, Starlink circa 550 km) e **MEO** fra circa 2.000 km e la quota GEO (es. GPS circa 20.200 km, O3b circa 8.000 km). L'intervallo "da 10000 a 5000 Km" della slide è scritto al contrario ed è molto più stretto di quello usato di solito.
>>
>> Le orbite basse hanno ritardo molto minore (pochi ms) e richiedono meno potenza, ma ogni satellite è visibile solo per pochi minuti: servono costellazioni di molti satelliti e il passaggio dei collegamenti da un satellite all'altro (handover).

---
## Slide 20 – Sistemi cellulari

- Principale applicazione: telefonia mobile
- Nuovo modo di usare i radiocollegamenti
	- La potenza trasmessa è piccola
	- I segnali interferiscono solamente fra celle adiacenti
	- Le frequenze possono essere riusate in celle non adiacenti
		- Gruppi di celle (**cell clusters**)
		- Con un centinaio di canali si può servire una quantità molto elevata di utenti
	- Sono necessari terminali molto sofisticati
		- Selezione del canale e segnalazione
		- **Hand-over** (mobilità fra celle)
		- **Roaming** (mobilità fra operatori)
- Sistema **ETACS** a 900 MHz (analogico, copertura nazionale)
- Global System Mobile (**GSM**): **digitale, a copertura mondiale**
- Sistemi di III, IV e V generazione
	- Terminali con capacità multimediali

>> Riuso delle frequenze: i canali disponibili si dividono fra le $K$ celle di un cluster (tipicamente $K = 7$ nei sistemi analogici e nel GSM) e lo schema si ripete. Ogni cella ha $1/K$ dei canali, ma il numero totale di utenti serviti cresce con il numero di cluster. Rimpicciolendo le celle si aumenta la capacità per km².
>>
>> Esempio: 140 canali, $K = 7$ → 20 canali per cella. Un'area con 70 celle (10 cluster) offre $70 \times 20 = 1400$ canali contemporanei, cioè 10 volte i canali disponibili.
>>
>> Nota sul nome: GSM sta per *Global System for Mobile communications* (in origine *Groupe Spécial Mobile*). Le generazioni: 1G analogica (TACS/ETACS), 2G GSM, 3G UMTS, 4G LTE, 5G NR.

---
## Slide 21 – Osservazioni sulle reti radio

- I ponti radio ed i satelliti sono il modo più economico e veloce per distribuire servizi di telecomunicazione in territori vasti e poco densamente popolati
- Il mezzo di propagazione radio è condiviso: ci sono forti problemi di banda, si può utilizzare solo un numero limitato di canali
- Il mezzo radio è vulnerabile ai disturbi
	- Molti collegamenti presentano una probabilità di fuori servizio per fenomeni atmosferici
	- Possibili sabotaggi

>> Fenomeni atmosferici: sopra circa 10 GHz la pioggia attenua molto il segnale (rain fade). Per questo i ponti radio e i satelliti in banda Ku/Ka si progettano con un margine di potenza e con una disponibilità dichiarata (es. 99,99% del tempo).

---
## Slide 22 – Fibra ottica

Fibra ottica

---
## Slide 23 – Comunicare con la luce?

- **Utilizzare la luce per trasportare l'informazione**
- In senso generale l'idea è ben nota agli esseri umani da moltissimo tempo

![[RT07-s023-1.png|600]]

http://www2.lbl.gov/MicroWorlds/ALSTool/EMSpec/EMSpec2.html

>> Le fibre per TLC lavorano nel **vicino infrarosso**, non nel visibile: finestre intorno a 850 nm, 1310 nm e 1550 nm. A 1550 nm corrisponde una frequenza $f = c/\lambda \approx 3\cdot10^8 / 1{,}55\cdot10^{-6} \approx 193$ THz, migliaia di volte più alta delle microonde: per questo la banda potenzialmente disponibile è enorme.

---
## Slide 24 – Nella storia

- Il sole o un fuoco generano la luce che porta un messaggio visibile da un osservatore lontano
	- Specchi sulle navi romane
	- Bandiere (Gengis Kan ≈1100)
	- Azthecs (Montezuma ≈1500)
	- Bandiere su torri (England ≈ 1600)

---
## Slide 25 – Il Fotofono (1880)

![[RT07-s025-1.png|600]]

N.B. Per la prima volta il ricevitore non e' l'occhio ma un dispositivo (in selenio).

(Copyright©,AT&T Corp., Riproduzione autorizzata)

>> Il fotofono fu inventato da Alexander Graham Bell e Charles Sumner Tainter. La voce faceva vibrare un sottile specchio che rifletteva la luce del sole, modulandone l'intensità. In ricezione, una cella al selenio (la cui resistenza varia con la luce che la colpisce) pilotava un ricevitore telefonico. È la prima trasmissione di voce su un fascio luminoso, ma in spazio libero.

---
## Slide 26 – Problemi ?

![[RT07-s026-1.png|300]]

- Comunicazione ottica nello spazio libero:
	- Non è segreta
	- Richiede visibilità
	- Sensibile alle condizioni climatiche

---
## Slide 27 – Guidare la luce

**John Tyndall's light fountain (1870) : light can travel though a curved jet of water**

![[RT07-s027-1.png|250]]![[RT07-s027-2.png|300]]

*Figure 1: John Tyndall's "light guiding" experiment (recreation from Daniel Colladon, "La Fontaine Colladon," La Nature 2nd half year 1884, p. 325).*

*http://www.i-fiberoptics.com/educ/Tyndall.pdf*

![[RT07-s027-3.png|300]]

>> Il getto d'acqua guida la luce grazie alla **riflessione totale interna**: l'acqua ha un indice di rifrazione maggiore dell'aria, e i raggi che colpiscono la superficie del getto con un angolo abbastanza radente vengono riflessi completamente verso l'interno. È lo stesso principio della fibra ottica (slide 35). Il fenomeno era stato mostrato per primo da Colladon (1841); Tyndall lo rese famoso nelle sue conferenze. "though" è un refuso per "through".

---
## Slide 28 – Dalla teoria alla pratica

- 1870 : Esperimento di Tyndall
- Circa 1960 : prime trasmissioni in fibra ottica
- Perché 100 anni?
	- Nelle realizzazioni tecnologiche spesso vi è un abisso fra la dimostrazione teorica e la realizzabilità pratica
		- Tecnologie abilitanti

>> Le tecnologie abilitanti furono soprattutto due. La prima è una **sorgente** adatta: il laser (1960) e poi i diodi laser a semiconduttore (slide 34). La seconda è il **vetro ultrapuro**: nel 1966 Kao e Hockham mostrarono che, eliminando le impurità, si poteva scendere sotto i 20 dB/km, soglia per l'uso nelle TLC, e nel 1970 Corning ci riuscì. Per questo "circa 1960" va inteso come inizio della sperimentazione: i primi collegamenti in campo sono del 1977 (slide 34).

---
## Slide 29 – La fibra ottica

- Filamento di vetro o plastica
	- Molto sottile
	- A densità differenziata

![[RT07-s029-1.png|500]]

>> Dalla figura: un **core** centrale con indice di rifrazione $n_1$, il **cladding** (mantello) con indice $n_2 < n_1$ e il **jacket** (rivestimento protettivo). "A densità differenziata" va inteso come a **indice di rifrazione** differenziato: è la differenza $n_1 > n_2$ che confina la luce nel core. Core e cladding sono entrambi di vetro (silice) e il core è leggermente drogato (es. con germanio) per alzarne l'indice.

---
## Slide 30 – Dimensioni della fibra

![[RT07-s030-1.png|300]]

- **human hair (mean diameter : 80 µm)**
- **optical fibre (diameter : 125 µm)**

From Tricker R.L., "Optoelectronic Line Transmission", Heinemann Newnes, 1989

>> I 125 µm sono il diametro del **cladding**, standard sia per le monomodo sia per le multimodo. Il core è molto più piccolo: circa 8–10 µm nelle monomodo, 50 o 62,5 µm nelle multimodo. Con il rivestimento primario si arriva tipicamente a 250 µm.

---
## Slide 31 – Quale vetro

- Il vetro comunque assorbe parte della luce che lo attraversa
- L'Intensità del raggio luminoso diminuisce mano a mano che questo attraversa il vetro
- Quanta strada può percorrere un raggio luminoso prima che la sua intensità dimezzi?
	- 3 cm nel vetro comune (100000 dB/km)
	- 3 m in un vetro di alta qualità (1000 dB/km)
	- 15 km in una fibra ottica di media qualità (0.2 dB/km)

>> Verifica: dimezzare la potenza significa perdere 3 dB. 100.000 dB/km = 100 dB/m, quindi 3 dB in 3 cm ✓. 1000 dB/km = 1 dB/m, quindi 3 dB in 3 m ✓. 0,2 dB/km → 3 dB in 15 km ✓.
>>
>> 0,2 dB/km è il valore tipico di una fibra monomodo standard a 1550 nm (la finestra di minima attenuazione): più che "media qualità", è la fibra normalmente posata oggi. A 1310 nm l'attenuazione è circa 0,35 dB/km, a 850 nm circa 2–3 dB/km.

---
## Slide 32 – Come si costruisce la fibra

![[RT07-s032-1.png|350]]![[RT07-s032-2.png|280]]

- ALIMENTAZIONE DEL PREFORMATO
- PREFORMATO
- FORNO PER LA FILATURA
- FIBRA
- MISURA E CONTROLLO DEL DIAMETRO DELLA FIBRA
- DEPOSIZIONE DEL RICOPRIMENTO PROTETTIVO
- SOLIDIFICAZIONE DEL RICOPRIMENTO (LAMPADA UV)
- SISTEMA PER TRAZIONE E AVVOLGIMENTO FIBRA
- SUPPORTO MECCANICO

Dal sito: http://www.heathway.com/

>> È la **torre di filatura** (drawing tower). Si parte da un *preformato*, una barra di vetro di qualche cm di diametro che ha già il profilo di indice di core e cladding. La sua punta viene fusa in un forno a circa 2000 °C e tirata verso il basso come un filo. Il diametro viene misurato di continuo (deve restare a 125 µm) e la velocità di trazione viene regolata di conseguenza. Subito dopo si applica il rivestimento polimerico, indurito con lampade UV, e la fibra viene avvolta su bobina. Da un solo preformato si ottengono centinaia di km di fibra.

---
## Slide 33 – Fibre ottiche

![[RT07-s033-1.png|650]]

- **In silice**
	- Nucleo (Core): SiO2+ GeO2
		- Ø 8-10 µm (MonoModo),
		- Ø 50, 62.5 µm (MultiModo),
		- n1 ~ 1.443
	- Mantello (Cladding): SiO2
		- Ø 125 µm
		- n2 ~ 1.44
	- Rivestimento primario
		- Ø 400 µm
	- Rivestimento secondario Ø 1 mm
- **In plastica**
	- Nucleo (Core):
		- PoliMetilMetaAcrilato (PMMA),
		- Polimero Perfluorinato (CYTOP), …
		- Ø 62.5 µm – 980 µm
		- n1 ~ 1.49
	- Mantello (Cladding):
		- Altro Materiale polimerico (tipicamente con parti di Fluorina)
		- Ø 250 µm – 1 mm
		- n2 ~ 1.41
	- Rivestimento esterno Ø ~ 2 mm

>> Nella silice la differenza di indice fra core e cladding è piccolissima (circa 0,2–0,3%), ma basta a guidare la luce. Nelle fibre in plastica (POF) la differenza è molto più grande e il core è enorme (fino a quasi 1 mm). Le POF sono facili da collegare ed economiche, ma attenuano molto (decine o centinaia di dB/km): si usano solo su tratte brevi (auto, casa, industria).
>>
>> Sul rivestimento primario: oggi lo standard più diffuso per le fibre in silice è 250 µm (o 200 µm nei cavi ad alta densità); il rivestimento secondario "stretto" (tight buffer) è tipicamente 900 µm.

---
## Slide 34 – Alcune date

- 1962: first GaAs laser diodes (General Electric: Robert Hall et al.)
- 1970: first true optical fibre (multimode) exhibiting 17 dB/km at 633 nm (CORNING)
- 1972: first CW laser diodes operating at room temperature
- 1974: fibre attenuation goes down to 3 dB/km at 0,85 µm (CORNING). 1975: FP laser diodes (GaAs) and APD photodiodes APD (Si) commercially available
- 70's : PDH standardisation : 1.5-2/6-8/34/140 Mbps Plesiochronous Digital Hierarchy
- 1977: First 6 Mbps link over MM fibre deployed in Long Beach Ca.

>> Sigle: CW = *continuous wave* (emissione continua, non impulsata); FP = laser Fabry-Pérot; APD = *avalanche photodiode*, fotodiodo a valanga con guadagno interno. Il primo funzionamento CW a temperatura ambiente di un diodo laser si fa risalire di solito al 1970 (Alferov; Hayashi e Panish ai Bell Labs).
>>
>> I valori PDH sono i livelli della gerarchia: in Europa E1 = 2,048, E2 = 8,448, E3 = 34,368, E4 = 139,264 Mbit/s; in Nord America T1 = 1,544 e T2 = 6,312 Mbit/s. Da qui le coppie "1.5-2" e "6-8".
>>
>> Si noti come l'attenuazione scende in pochi anni: 17 dB/km (1970) → 3 dB/km (1974) → circa 0,2 dB/km a 1550 nm (fine anni '70).

---
## Slide 35 – Come funziona

![[RT07-s035-1.png|600]]

- Core ha un indice di rifrazione più grande del cladding
- I raggi di luce che colpiscono la discontinuità ad un angolo inferiore a quello critico sono rilessi completamente

>> Dalla figura: *Geometry of optical fiber* (Light, Core, Cladding, Jacket) e *Total Internal Reflection in optical fiber*. Solo i raggi che entrano dentro l'*acceptance cone* (cono di accettazione) restano intrappolati nel core; quelli più inclinati passano nel cladding e si perdono. C indica l'angolo critico.
>>
>> Attenzione a come si misura l'angolo. Per la legge di Snell, misurando l'angolo di incidenza **rispetto alla normale** alla superficie, c'è riflessione totale quando l'angolo è **maggiore** dell'angolo critico $\theta_c = \arcsin(n_2/n_1)$. La slide dice "inferiore" perché misura l'angolo rispetto all'asse della fibra, cioè alla superficie: il raggio deve essere abbastanza radente. "rilessi" è un refuso per "riflessi".
>>
>> Apertura numerica: $NA = \sin\theta_{max} = \sqrt{n_1^2 - n_2^2}$, dove $\theta_{max}$ è il semiangolo del cono di accettazione in aria. Esempio: $n_1 = 1{,}48$, $n_2 = 1{,}46$ → $\theta_c \approx 80{,}6°$, $NA \approx 0{,}24$, cono di accettazione di circa ±14°. Con i valori della slide 33 ($n_1 = 1{,}443$, $n_2 = 1{,}44$) si ha $NA \approx 0{,}09$, cioè un cono di circa ±5°, tipico di una monomodo.

---
## Slide 36 – Tipi di fibre ottiche

![[RT07-s036-1.png|650]]

- Multimode fiber
	- Step index fiber (380µm / 200µm)
	- Graded index fiber (125µm / 50-100 µm)
- Singlemode fiber
	- Singlemode fiber (125µm / ~10µm)
- Index of refraction – Input pulse – Output pulse

>> Il confronto riguarda la **dispersione modale**. In una fibra multimodo *step index* (indice a gradino) i vari modi (raggi) percorrono cammini di lunghezza diversa e arrivano in tempi diversi: l'impulso in uscita si allarga, gli impulsi vicini si sovrappongono e questo limita il prodotto banda × distanza.
>>
>> Nella *graded index* l'indice decresce gradualmente (circa parabolico) dal centro verso il bordo. I raggi che si allontanano dall'asse fanno più strada, ma in un vetro con indice più basso, quindi più velocemente: i tempi di arrivo si equalizzano e l'impulso si allarga molto meno.
>>
>> Nella *monomodo* il core è così piccolo (circa 8–10 µm, cioè poche lunghezze d'onda) che si propaga un solo modo: la dispersione modale sparisce, resta solo quella cromatica, molto più piccola. Per questo è la fibra delle lunghe distanze. Condizione di monomodalità: $V = \frac{2\pi a}{\lambda} NA < 2{,}405$, con $a$ raggio del core.
>>
>> Le dimensioni della step index in figura (core 200 µm, esterno 380 µm) sono quelle di una fibra a core largo per tratte molto brevi. Le multimodo per TLC/LAN hanno core da 50 o 62,5 µm e cladding da 125 µm.
---
## Slide 37 – Il sistema di trasmissione

- I sistemi tradizionali in fibra utilizzano una tecnica detta On/Off Keying (OOK)
- La sorgente di luce (laser, LED) genera impulsi luminosi
- Gli impulsi
	- Si propagano nella fibra per grandi distanze (>1000 km)
	- Possono essere generati a grandissima velocità (>40 Gb/s/wavelength)
- Un rivelatore (fotodiodo) riceve gli impulsi
	- La propagazione è praticamente prima di errore (BER of 10-15)

![[RT07-s037-1.png|600]]

>> Refusi: "prima di errore" va letto "priva di errori", e "10-15" è $10^{-15}$, cioè in media un bit sbagliato ogni $10^{15}$ bit trasmessi.
>>
>> OOK è la modulazione più semplice: luce accesa = 1, luce spenta = 0 (modulazione di intensità con rivelazione diretta). I sistemi moderni a 100 Gb/s e oltre per lunghezza d'onda usano invece modulazioni coerenti (fase e ampiezza, es. QPSK, 16-QAM).
>>
>> I ">1000 km" vanno intesi con amplificazione lungo la linea (slide 45–47): senza amplificatori, con circa 0,2 dB/km a 1550 nm, una tratta arriva tipicamente a 80–100 km (circa 20 dB di perdita).

---
## Slide 38 – Il paradosso delle fibre ottiche

- In generale nella tecnologia
	- Un aumento di **prestazioni** *implica* un aumento di **costo**
- Le fibre ottiche aumentano moltissimo le prestazioni con un aumento di costo minimo se non nullo

>> Il motivo è che la capacità di una fibra già posata è limitata soprattutto dagli apparati alle estremità, non dal vetro. Per aumentare la capacità basta cambiare trasmettitori e ricevitori (più veloci, più lunghezze d'onda con il WDM). Il costo maggiore, cioè lo scavo e la posa, si paga una volta sola.

---
## Slide 39 – Ma qualche problema c'è?

- Rispetto ai cavi in rame le fibre ottiche sono più difficili da giuntare
- Si possono avere
	- Giunti stabili
		- Joints (loss < 0.01 dB)
	- Giunti temporanei
		- Connectors (loss < 0.1 dB)
- L'elemento critico è la stabilità dell'allineamento

>> Il problema è geometrico: in una fibra monomodo il core ha un diametro di circa 9 µm, quindi un disallineamento laterale di pochi µm o un piccolo angolo fra le due fibre fa già perdere una parte significativa della luce.
>>
>> I valori della slide sono quelli migliori. Nella pratica una giunzione a fusione perde in genere 0,02–0,1 dB e un connettore 0,2–0,5 dB. Nei calcoli di link budget si usano spesso 0,1 dB per giunto e 0,5 dB per connettore.

---
## Slide 40 – Giunto stabile

- Allineamento

![[RT07-s040-1.png|450]]

- Flash elettrico che fonde le due fibre in una

![[RT07-s040-2.png|400]]

>> È la giunzione a fusione (fusion splicing): le due fibre vengono spellate, tagliate con una taglierina di precisione (cleaver) per avere facce piane e perpendicolari, allineate con micro-movimenti sui tre assi (le frecce in alto) e poi saldate con un arco elettrico che fonde il vetro.

---
## Slide 41 – Fusion splicing machine

![[RT07-s041-1.png|350]]

http://www.thefoa.org/tech/ref/termination/fusion.html

>> Nella foto, oltre alla giuntatrice con il suo monitor, si vedono gli attrezzi di preparazione: la pinza spellafibra (verde) e la taglierina di precisione (cleaver, il blocchetto nero in basso a destra).

---
## Slide 42 – Allineamento

![[RT07-s042-1.png|600]]

http://www.thefoa.org/tech/ref/termination/fusion.html

>> La giuntatrice illumina le fibre da due direzioni perpendicolari (Light Sources) e le riprende con due telecamere (Video Cameras), così vede le fibre su due piani e può allinearle sia in orizzontale sia in verticale. Le quattro schermate mostrano le fasi: fibre distanti, avvicinate, allineate e infine fuse in una sola.

---
## Slide 43 – Giunti temporanei

![[RT07-s043-1.png|650]]

https://americantechsupply.com

>> I nomi sono i tipi di connettore più diffusi: SC (a innesto quadrato), LC (formato piccolo, oggi il più usato negli apparati), FC e ST (a vite e a baionetta), MU, D4. "Clipped" indica la versione duplex, con due connettori uniti.
>>
>> Il suffisso indica la lucidatura della ferula: PC (Physical Contact), U = UPC (Ultra Polish, di solito blu) e A = APC (Angle Polish, verde). Nell'APC la faccia è inclinata di 8°, così la luce riflessa esce dal core invece di tornare verso il trasmettitore. Per questo è usato nelle reti FTTH/PON. Connettori UPC e APC non vanno mai accoppiati fra loro.

---
## Slide 44 – Fibra: dove e come

- Nelle reti di telecomunicazioni la fibra ottica viene usata per i collegamenti a lunga distanza
	- Con cavi in rame si coprono distanze di circa 10Km
	- Con la fibra si coprono distanze molto superiori

![[RT07-s044-1.png|600]]

>> Lo schema mostra i primi sistemi in fibra, senza amplificatori ottici. Ogni tratta termina in un ricevitore, il segnale viene convertito in elettrico, rigenerato dall'elettronica e ritrasmesso da un nuovo laser (conversione O-E-O, rigenerazione "3R").
>>
>> Il limite è che i rigeneratori lavorano su un solo canale e a un bit rate fisso: per aumentare la velocità bisogna cambiarli tutti lungo la linea.

---
## Slide 45 – L'Amplificatore Ottico…

![[RT07-s045-1.png|600]]

☺
- Il segnale viene mantenuto a livello ottico: maggior banda trasmissibile
- In un segnale WDM tutti i canali vengono amplificati

☹
- L'amplificatore effettua solo il "Re-amplifying"
	- → necessario combattere gli effetti di dispersione e non linearità,
		- Introducendo comunque ogni tanto uno o più stadi "3R" ,
		- Prendendo contromisure contro la dispersione (Reticoli, Fibre compensatrici,…)

>> 3R = Re-amplifying (riporta la potenza al livello giusto), Re-shaping (ridà agli impulsi la loro forma) e Re-timing (risincronizza gli impulsi con il clock). L'amplificatore ottico fa solo la prima R. Rumore e dispersione quindi si accumulano da un amplificatore all'altro, e dopo un certo numero di tratte serve una rigenerazione elettronica.
>>
>> Verifica dell'ordine di grandezza: a 1550 nm la frequenza è $f = c/\lambda = 3\cdot10^8 / 1{,}55\cdot10^{-6} \approx 1{,}9\cdot10^{14}$ Hz (circa 193 THz).

---
## Slide 46 – L'EDFA

![[RT07-s046-1.png|650]]

- Drogaggio di erbio:
	- Alcuni livelli instabili (*800, 980, 1480 nm*) e un livello meta-stabile (*1550 nm*)
	- Laser di pompa (es. a *980 nm*) → elettroni al livello instabile,
	- Livello instabile → livello metastabile (inversione di popolazione)
	- Il segnale attraversa la fibra → amplificazione per emissione stimolata
- Amplificazione a $\lambda$ diverse tramite diversi drogaggi (Neodimio, Tullio, Itterbio,…)
- Tecnologia consolidata per $\lambda$ ~ 1550 nm → Soluzione più utilizzata per segnali WDM
- Guadagno *G* ~ decine di dB, Cifra di rumore *F < 10 dB*

>> EDFA = Erbium-Doped Fiber Amplifier. È un tratto di fibra (qualche metro) drogata con ioni di erbio, in cui si inietta la luce di un laser di pompa insieme al segnale.
>>
>> Sull'asse verticale c'è $hc/\Delta E$, cioè la lunghezza d'onda del fotone che corrisponde a ciascun salto di energia. La pompa a 980 nm porta gli elettroni sul livello alto. Da lì decadono velocemente sul livello metastabile (1550 nm), dove restano a lungo e si accumulano (inversione di popolazione). Ogni fotone del segnale a circa 1550 nm che passa provoca l'emissione di un fotone identico (emissione stimolata), quindi il segnale cresce mentre la pompa si consuma (frecce rossa e gialla).
>>
>> Perché è così importante: la banda di guadagno dell'EDFA (banda C, circa 1530–1565 nm) coincide con la finestra di minima attenuazione della fibra, e amplifica insieme tutti i canali WDM che vi cadono. Un solo EDFA sostituisce decine di rigeneratori.
>>
>> Una cifra di rumore tipica è 4–6 dB. Il limite teorico per un amplificatore ottico è 3 dB.

---
## Slide 47 – Evoluzione: sistemi amplificati

Primi amplificatori ottici sviluppati dal 1985

![[RT07-s047-1.png|600]]

>> Rispetto alla slide 44, l'elettronica resta solo alle estremità e lungo la linea ci sono soltanto amplificatori ottici. Le tratte fra due amplificatori sono tipicamente di 80–100 km.
>>
>> Per l'EDFA le date di riferimento sono la prima dimostrazione nel 1987 e i sistemi commerciali (anche transoceanici) a metà degli anni '90.

---
## Slide 48 – I collegamenti intercontinentali

![[RT07-s048-1.png|600]]

>> La mappa è la "2014 Submarine Cable Map" di TeleGeography, con i cavi sottomarini in fibra che collegano i continenti. Sono questi cavi a trasportare quasi tutto il traffico Internet intercontinentale, mentre i satelliti ne portano una parte minima. Lungo i cavi ci sono amplificatori ottici (ripetitori) sommersi, alimentati elettricamente attraverso il cavo stesso.

---
## Slide 49 – Il boom del WDM

- Wavelength Division Multiplexing
	- È un modo alternative per FDM
	- Multiplazione di diversi flussi su diversi ambiti di frequenze (o di lunghezze d'onda)
- WDM = flussi dati diversi vengono trasmessi su colori (lunghezze d'onda) diversi nella stessa fibra
- Richiede
	- Trasmettitori e ricevitori selettivi
- Inizia negli USA all'inizio degli anni 90
	- Deregulation
	- Abbassamento dei costi dell'elettronica
	- Aumento del traffico (esplosione di Internet)
- Permette di aumentare molto la capacità della rete senza installare nuove fibre

>> "Un modo alternative per FDM" va letto come "un modo alternativo di chiamare la FDM". Il WDM *è* una multiplazione a divisione di frequenza, solo che lavora in ottica: siccome $f = c/\lambda$, separare i canali in lunghezza d'onda equivale a separarli in frequenza.
>>
>> Le due varianti principali sono il CWDM (coarse, canali distanti 20 nm, pochi canali, componenti economici) e il DWDM (dense, griglia ITU-T a 100 o 50 GHz, cioè circa 0,8 o 0,4 nm in banda C, con 40–96 canali).
>>
>> Esempio: 80 canali da 100 Gb/s su una sola fibra danno 8 Tb/s.

---
## Slide 50 – I principi del WDM

- Si trasmettono più flussi di informazione utilizzando diversi colori della luce
- I vari flussi convivono senza danneggiarsi sulla stessa fibra
- Se uso n flussi moltiplico per n la quantità di informazione trasportata

![[RT07-s050-1.png|600]]

>> Il transponder riceve il segnale del cliente (Channel 1…n, ad esempio da un router) e lo ritrasmette su una lunghezza d'onda precisa della griglia WDM (conversione O-E-O). Il multiplexer ottico combina tutti i colori nella stessa fibra, e lo spettro trasmesso mostra un picco stretto per ogni canale. In ricezione un demultiplexer separa di nuovo i colori.
>>
>> I flussi "convivono senza danneggiarsi" perché la propagazione nella fibra è (quasi) lineare. Ad alte potenze però gli effetti non lineari, come il four-wave mixing, creano interferenza fra canali vicini.

---
## Slide 51 – Un sistema WDM

![[RT07-s051-1.png|600]]

- Transponders
- Line amplification nodes
- Optically amplified line
- Terminal nodes

>> I nodi terminali contengono transponder, mux/demux e amplificatori (booster in uscita, preamplificatore in ingresso). I nodi di amplificazione di linea amplificano tutti i canali insieme senza separarli, ed è questo che rende il WDM economico.

---
## Slide 52 – Le reti di oggi

![[RT07-s052-1.png|600]]

- Rete di accesso
- Rete di trasporto
- Rame
- Fibra
- ??

>> La rete di trasporto è già in fibra, la rete di accesso è ancora in parte in rame. I "??" segnano i due punti che la fibra non ha ancora raggiunto del tutto (slide successiva): i nodi di commutazione, dove il segnale torna elettrico, e l'ultimo tratto verso gli utenti.

---
## Slide 53 – Cosa rimane?

- Le tecnologie ottiche e in fibra devono ancora permeare
	- I nodi di commutazione della rete di trasporto
		- Commutazione ottica
	- La rete di accesso
		- Fiber to the X

---
## Slide 54 – Commutazione WDM

- Trasporto flussi informativi di diversi clienti su diversi colori:
	- Uso il colore per distinguere punto di partenza e punto di arrivo
- Sono necessari apparati capaci di selezionare il colore della luce in modo comandato (ROADM)

![[RT07-s054-1.png|550]]

>> Ogni colore realizza un *lightpath*, cioè un canale ottico fra due nodi che attraversa i nodi intermedi senza conversione elettrica. Nella figura il rosso va da terminale a terminale, il verde parte dal terminale di sinistra e viene estratto (drop) nel secondo nodo di linea, il blu viene inserito (add) nel primo nodo di linea ed estratto nel secondo.
>>
>> Lo stesso colore si può riusare su tratte che non si sovrappongono. In assenza di convertitori di lunghezza d'onda un lightpath deve invece usare lo stesso colore su tutto il percorso (vincolo di continuità).

---
## Slide 55 – ROADM

![[RT07-s055-1.png|600]]

Optics & Photonics News **26**(3), 36-43 (2015)

- ROADM - Reconfigurable Optical Add/Drop Multiplexer
- THE SWITCHING CORE: This is a route-and-select core, based on wavelength-selective switches (WSS).
- A MODULAR APPROACH: A setup with interconnected 1xN/Nx1 WSSs ensures that the failure of any single WSS will only impact one fiber route.
- LIGHTPATHS: Individual lightpaths can be routed through the system to other network nodes (red, green and pink lines), or can be 'dropped' from or 'added' to the stream (light blue lines).
- CLIENTS: The optical signal data are routed though banks of transponders (OT), processed electronically and then relayed on to client routers and other equipment.
- Switching core, ROUTE 1, ROUTE 2, ROUTE 3, DROP, ADD, Optical performance monitoring, Optical amplifiers, Colorless mux/demux, OT banks, Client-side cross-connect

>> Un ROADM è un nodo che, per ogni lunghezza d'onda in arrivo, decide via software se farla proseguire verso un'altra direzione (express), estrarla verso un cliente locale (drop) o inserirne una nuova (add). Il tutto senza conversione elettrica dei canali in transito.
>>
>> Il WSS (Wavelength Selective Switch) è il componente chiave: prende un ingresso con molti colori e manda ciascun colore, in modo indipendente, su una delle N uscite.

---
## Slide 56 – AWG

AWG =
Arrayed Waveguide Gratings

![[RT07-s056-1.png|650]]

>> L'AWG è un dispositivo passivo integrato (pochi cm, vedi le misure 2 cm × 1,5 cm) che fa da demultiplexer WDM. La luce entra in una regione di propagazione libera (FPR) e si distribuisce su un array di guide d'onda, ciascuna più lunga della precedente di una quantità fissa $\Delta L$. Lo sfasamento accumulato dipende dalla lunghezza d'onda, quindi nella seconda FPR i fronti d'onda dei diversi colori si ricombinano in punti diversi e ogni colore finisce in una guida d'uscita diversa. Funziona come un prisma o un reticolo di diffrazione.
>>
>> Nel grafico "b" i picchi numerati 2…14 sono i canali in uscita sulle diverse porte. FSR (Free Spectral Range) = 18,4 nm è l'intervallo dopo cui la risposta si ripete periodicamente.
>>
>> Errore nella figura: l'asse delle ascisse dice "Wavelength (µm)", ma i valori 1310–1335 sono in **nm** (1310 µm sarebbe 1,3 mm, nell'infrarosso lontano).

---
## Slide 57 – Funzionamento di AWG

![[RT07-s057-1.png|600]]

>> Le quattro figure mostrano lo stesso AWG percorso da quattro lunghezze d'onda diverse che entrano dalla stessa porta. Ogni colore esce da una porta d'uscita diversa (la freccia colorata a destra). Il dispositivo è reciproco: usato al contrario fa da multiplexer.

---
## Slide 58 – MEM

- Sposto la luce con piccoli specchi
	- Piccole dimensioni = brevi tempi di reazione

![[RT07-s058-1.png|250]]![[RT07-s058-2.png|280]]

>> MEMS = Micro-Electro-Mechanical Systems. Sono micro-specchi costruiti sul silicio con le tecniche dei circuiti integrati e inclinati da forze elettrostatiche. Nella foto a sinistra (microscopio elettronico) lo specchio è montato su un doppio telaio con cerniere che lo fanno ruotare su due assi. La scala è circa 1 mm.
>>
>> Spostano la luce in modo trasparente al bit rate e al formato del segnale. I tempi di commutazione sono dell'ordine dei millisecondi, adatti a riconfigurare i lightpath (commutazione di circuito ottica) ma non a commutare singoli pacchetti.

---
## Slide 59 – MEMs Switch Matrix

![[RT07-s059-1.png|600]]

4x4 switch = 16 mirrors. Each mirror can be moved independently

>> È una matrice MEMS "2D" (crossbar): $N$ ingressi e $N$ uscite richiedono $N^2$ specchi, ciascuno in posizione alzata (devia il fascio di 90° verso l'uscita) o abbassata (lascia passare). Con 4×4 servono 16 specchi. Siccome $N^2$ cresce in fretta, per matrici grandi si usano MEMS "3D" con specchi orientabili in modo continuo, che richiedono solo $2N$ specchi.

---
## Slide 60 – MEMs Switch

![[RT07-s060-1.png|600]]

>> Le foto mostrano un prototipo di switch MEMS: al centro la matrice di micro-specchi, intorno le piste di collegamento elettrico e le fibre di ingresso e uscita.

---
## Slide 61 – Aree bianche, grigie o nere

- Concetto di classificazione di un territorio in base alle potenzialità di investimento da parte degli operatori
	- introdotto dalla Commissione Europea nel 2013
- Distingue le aree geografiche sulla base degli investimenti previsti in infrastrutture a banda ultralarga
- Nere
	- Previsti investimenti di almeno due operatori
- Grigie
	- Previsti investimenti di un solo operatore
- Bianche
	- Non sono previsti investimenti

>> La classificazione serve per gli aiuti di Stato: nelle aree bianche (fallimento di mercato) l'intervento pubblico è ammesso, nelle grigie solo a condizioni particolari, nelle nere di norma no, perché altererebbe la concorrenza fra operatori privati.

---
## Slide 62 – Banda Ultralarga?

- Reti di tipo Next Generation Access (NGA)
	- Velocità di Download > 30 Mbit/s
- Next Generation Access Very High Capacity Networks (NGA-VHCN)
	- Velocità di download > 100Mbit/s

>> Queste soglie (30 e 100 Mbit/s) sono quelle dell'Agenda Digitale Europea per il 2020.

---
## Slide 63 – Strategia Italiana Banda Ultra-larga

- Approvata dal Governo il 3 Marzo 2015
	- Oggetto
		- aree a fallimento di mercato (*aree bianche*)
	- Obiettivo
		- ridurre il gap infrastrutturale e di mercato esistente
	- Metodologia
		- costruire una rete di proprietà pubblica che verrà messa a disposizione di tutti gli operatori che vorranno attivare servizi verso cittadini ed imprese
	- Finanziamento
		- fondi nazionali (FSC) e fondi comunitari (FESR e FEASR)
		- "intervento diretto", autorizzato dalla Commissione europea ai sensi della disciplina sugli aiuti di Stato

>> Sigle: FSC = Fondo per lo Sviluppo e la Coesione; FESR = Fondo Europeo di Sviluppo Regionale; FEASR = Fondo Europeo Agricolo per lo Sviluppo Rurale.
>>
>> Con l'"intervento diretto" lo Stato costruisce e resta proprietario della rete, che poi viene data in concessione e aperta a tutti gli operatori (modello wholesale only).

---
## Slide 64 – Piano Italia 1 Giga

- Approvato il 27 Luglio 2021
- Obiettivo
	- «... realizzare infrastrutture di rete a banda ultra larga che garantiscano la velocità di trasmissione di almeno 1 Gbit/s sull'intero territorio nazionale al 2026, collegando i civici delle unità immobiliari nei quali non è presente, né lo sarà entro i prossimi cinque anni, alcuna rete idonea a fornire velocità di almeno 300 Mbit/s in download nell'ora di picco del traffico. …»
- Mappatura che «… ha riguardato le sole aree originariamente incluse nel "Piano Aree bianche" del 2016.»

>> Attenzione, la citazione sembra troncata: nel [documento del Piano](https://assets.innovazione.gov.it/1628257690-piano-italia-1-giga-per-consultazione-pubblicapubblicato-060821.pdf) la mappatura riguarda l'intero territorio nazionale *ad esclusione* delle sole aree incluse nel Piano Aree bianche del 2016 (da ricontrollare sul documento). Quelle aree erano già coperte dalla strategia del 2015 (slide 63), quindi il Piano 1 Giga interviene sulle altre (grigie e nere) dove nessuno porterà almeno 300 Mbit/s. Così com'è riportata, la frase sembra dire il contrario.
>>
>> Il Piano Italia 1 Giga fa parte degli interventi finanziati dal PNRR.

---
## Slide 65 – Come

- Infratel
	- Pianifica la costruzione della rete pubblica a banda ultra-larga
	- Affida in appalto tale costruzione a soggetti di mercato
- Per la rete in fibra ottica
	- Strategia banda ultra larga 2015
		- OpenFiber ha avuto l'appalto per la realizzazione dell'infrastruttura
	- Piano Italia 1 Giga

![[RT07-s065-1.png|350]]

| LOTTO | OPERATORE AGGIUDICATARIO |
|---|---|
| Lotto 1: Sardegna | Tim |
| Lotto 2: Puglia | Open Fiber |
| Lotto 3: Abruzzo, Molise, Marche, Umbria | Tim |
| Lotto 4: Piemonte, Valle d'Aosta, Liguria | Tim |
| Lotto 5: Calabria Sud | Tim |
| Lotto 6: Toscana | Open Fiber |
| Lotto 7: Lazio | Open Fiber |
| Lotto 8: Sicilia | Open Fiber |
| Lotto 9: Emilia-Romagna | Open Fiber |
| Lotto 10: Campania | Open Fiber |
| Lotto 11: Calabria Nord | Tim |
| Lotto 12: Friuli-Venezia Giulia, Veneto | Open Fiber |
| Lotto 13: Lombardia | Open Fiber |
| Lotto 14: Basilicata | Tim |

>> Infratel Italia è la società in-house del Ministero che gestisce i piani pubblici per la banda ultralarga. Dalla tabella: nel Piano Italia 1 Giga 8 lotti sono andati a Open Fiber e 6 a Tim.

---
## Slide 66 – Nella rete di accesso

- Come sostituire le rete in rame?

![[RT07-s066-1.png|300]]![[RT07-s066-2.png|300]]

- Metallic Cables
- Optical Fibers
- FTTCab (>1000ft. (300m))
- FTTC (<1000ft. (300m))
- FTTB
- FTTH

>> Le foto mostrano un armadio stradale della rete telefonica in rame (armadio ripartilinea), da fuori e aperto con le coppie di rame attestate. È il punto dove, nel FTTCab, arriva la fibra e si installa l'apparato attivo (DSLAM/ONU) che serve i clienti in VDSL2 sul rame rimasto.
>>
>> Refuso della slide: "le rete" → "la rete".

---
## Slide 67 – Alternative

- Classificate in base alla localizzazione dell'interfaccia elettro/ottica (EOI)
	- Fiber To The Exchange (FTTE): EOI in centrale
	- Fiber To The Cab (FTTCab): EOI in the equivalent of the PSTN cabinet
	- Fiber To The Curb (FTTC): EOI in the equivalent of the PSTN distribution point
	- Fiber To The Building (FTTB): EOI at the basement
	- Fiber To The Home (FTTH): EOI in the NIU

![[RT07-s067-1.png|300]]

>> Più la EOI si avvicina all'utente, più corto è il tratto di rame e più alta è la velocità ottenibile: sul rame il VDSL2 arriva a circa 100 Mbit/s solo entro poche centinaia di metri, perché l'attenuazione cresce con la lunghezza e con la frequenza. 1000 ft corrispondono a circa 300 m, come in figura.
>>
>> NIU = Network Interface Unit, il terminale di rete in casa dell'utente. In FTTH la fibra arriva fino a lì e non resta rame.
>>
>> Tranello di nomenclatura: in Italia nel linguaggio commerciale "FTTC" indica di solito la fibra fino all'armadio stradale, che in questa classificazione si chiama FTTCab.

---
## Slide 68 – La tecnologia

- Fiber to the home – FTTH
- Tecnologia G-PON
	- Gigabit Passive Optical Network

![[RT07-s068-1.png|700]]

Dal sito web di OpenFiber

- PoP OF, Area Cavo, PFP, PFS, Segmento di aggregazione, Segmento di rilegamento, PTA, PTE, Rilegamento, Distribuzione, Verticale, Drop Utente, Borchia Ottica, Terminazione ottica
- Nell'abitazione viene predisposta una borchia ottica a cui saranno collegati i dispositivi che consentiranno al cliente di usufruire del servizio

>> Lo schema segue la fibra dal PoP (Point of Presence) di Open Fiber, dove si trova l'OLT, attraverso i punti di flessibilità primario e secondario (PFP, PFS), dove si trovano gli splitter e si smistano le fibre. Si arriva poi al PTE (Punto di Terminazione di Edificio), da cui la fibra sale lungo la verticale dell'edificio fino alla borchia ottica dentro casa. Qui si collega l'ONT/modem.
>>
>> G-PON (ITU-T G.984) ha 2,488 Gb/s in downstream e 1,244 Gb/s in upstream, condivisi fra gli utenti dello stesso albero, con splitting tipico fino a 1:64. Usa 1490 nm in downstream e 1310 nm in upstream sulla stessa fibra.

---
## Slide 69 – Passive Optical Network

![[RT07-s069-1.png|600]]

- Central Office: OLT, Voice, Video, ISP A, ISP B
- Downstream Traffic (DS)
- Upstream Traffic (US)
- Passive optical splitters
- ONU: Office building, Apartment building, Houses

>> "Passiva" significa che fra la centrale (OLT, Optical Line Terminal) e gli utenti (ONU/ONT) ci sono solo splitter ottici, senza alimentazione, quindi costi di gestione bassi e alta affidabilità.
>>
>> In downstream l'OLT trasmette in broadcast: ogni ONU riceve tutto e tiene solo i propri dati, che sono cifrati. In upstream le ONU condividono la fibra con un accesso a divisione di tempo (TDMA) regolato dall'OLT, per evitare collisioni sullo splitter.
>>
>> Lo splitter divide la potenza: uno splitter 1:N introduce circa $10\log_{10}N$ dB di perdita (1:32 → circa 15 dB, più le perdite in eccesso).

---
## Slide 70 – A Imola

![[RT07-s070-1.png|550]]

- Sei connesso!
- La città Imola è coperta
- Ora che ti abbiamo raggiunto, scopri le offerte commerciali dei partner che utilizzano la nostra rete 100% in fibra ottica.

>> Open Fiber è un operatore *wholesale only*: costruisce la rete e la affitta agli operatori commerciali ("partner"), che vendono il servizio ai clienti finali.

---
## Slide 71 – Lavori in corso

![[RT07-s071-1.png|550]]

---
## Riassunto

>> **Crescita della capacità e attenuazione**
>> - Legge di Moore: i transistor per chip raddoppiano a intervalli regolari. Legge di Edholm: allo stesso modo cresce la banda disponibile agli utenti.
>> - Ogni mezzo **attenua** il segnale. Si misura in dB, $A_{dB} = 10 \log_{10}(P_T/P_R)$, e per i cavi in dB/km. Nel rame l'attenuazione in dB cresce con la lunghezza e con $\sqrt{f}$: è difficile portare lontano segnali ad alta frequenza.
>>
>> **Rame**
>> - **Twisted pair**: coppie intrecciate per ridurre i disturbi. Esistono la versione schermata (STP) e quella non schermata (UTP), standardizzate in categorie (Cat. 3, 5, 5e, 6, 7…) con bande sempre più alte.
>> - **Coassiale**: conduttore interno e calza esterna. Più costoso, ma con prestazioni migliori, tanto più quanto è grande il diametro.
>>
>> **Radio**
>> - È un mezzo naturalmente **broadcast** e permette la mobilità, ma lo spettro è uno solo e va condiviso. Inoltre è soggetto a disturbi e intercettazioni.
>> - La propagazione dipende dalla frequenza: onda di terra, ionosferica, solo in visibilità. Satelliti GEO, MEO e LEO. Nei **sistemi cellulari** le frequenze si riusano in celle non adiacenti.
>>
>> **Fibra ottica**
>> - La luce resta nel **core** per **riflessione totale**, perché il core ha un indice di rifrazione maggiore del cladding. Il diametro esterno è 125 µm.
>> - Tipi di fibra: **multimodo** (step index o graded index, core grande, dispersione modale) e **monomodo** (core di pochi µm, per le lunghe distanze). Attenuazione bassissima, frazioni di dB/km.
>> - Trasmissione on/off (OOK) con laser o LED e fotorivelatore. "Paradosso": prestazioni enormemente più alte a un costo quasi uguale.
>> - I problemi pratici sono le **giunzioni**: fusione (perdite minime) o connettori, e tutto dipende dall'allineamento.
>>
>> **Amplificazione e WDM**
>> - Gli **amplificatori ottici (EDFA)** amplificano direttamente la luce, senza rigenerazione elettronica, e hanno permesso i collegamenti intercontinentali.
>> - Il **WDM** fa viaggiare molte lunghezze d'onda nella stessa fibra (è una FDM in ottica) e moltiplica la capacità.
>> - Commutazione nel dominio ottico: **ROADM** (inserisce ed estrae lunghezze d'onda), **AWG** (separa le lunghezze d'onda per interferenza), **MEMS** (microspecchi che deviano i fasci).
>>
>> **Banda ultralarga e accesso**
>> - Aree **bianche, grigie e nere** a seconda di quanti operatori sono presenti. Strategia italiana BUL e Piano Italia 1 Giga (almeno 1 Gbit/s dove nessuno porterà almeno 300 Mbit/s).
>> - Nella rete di accesso la fibra arriva sempre più vicino all'utente (FTTCab, FTTB, FTTH). La tecnologia tipica è la **PON**: una fibra condivisa con splitter passivi.
