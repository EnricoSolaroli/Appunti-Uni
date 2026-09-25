[2-Oggetti](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/ingegneria del software/slide/2-Oggetti.pdf>)

[registrazione](obsidian://open?vault=obsidian_sola&file=universit%C3%A0%2Fingegneria%20del%20software%2FRecording%2020260922103747.m4a)
# Il paradigma a oggetti

## Indice

1. **Introduzione e concetti fondamentali** (slide 1–2)
	- [[#Slide 1 – Il paradigma a oggetti (copertina)|Copertina del modulo]]
	- [[#Slide 2 – 1. Il paradigma a oggetti|I sette concetti chiave del paradigma]]
2. **Oggetti: identità, stato e comportamento** (slide 3–4)
	- [[#Slide 3 – Oggetti|Definizione di oggetto, OID, attributi e operazioni]]
	- [[#Slide 4 – Oggetti (2)|Esempi di oggetti: attributi reali vs identificatori]]
3. **Operazioni, interfaccia e tipi di dati astratti** (slide 5–6)
	- [[#Slide 5 – Operazioni e interfaccia|Signature e interfaccia dell'oggetto]]
	- [[#Slide 6 – Tipo di dati astratto|ADT, sottotipo e supertipo]]
4. **La classe** (slide 7–8)
	- [[#Slide 7 – Classe|Classe come realizzazione di un tipo astratto]]
	- [[#Slide 8 – Classe|Esempi: ESAME, DOCENTE, STUDENTE]]
5. **Incapsulamento** (slide 9–10)
	- [[#Slide 9 – Incapsulamento|Principio di incapsulamento e interfaccia pubblica]]
	- [[#Slide 10 – Vantaggi dell'incapsulamento|Scatola nera, riduzione errori, debugging]]
6. **Operazioni e metodi** (slide 11)
	- [[#Slide 11 – Operazioni e metodi|Costruttori, distruttori, accessori, trasformatori e visibilità]]
7. **Ereditarietà** (slide 12–14)
	- [[#Slide 12 – Ereditarietà|Specializzazione/generalizzazione, superclasse e sottoclasse]]
	- [[#Slide 13 – Ereditarietà (2)|Esempio di gerarchia: PERSONA, DOCENTE, STUDENTE]]
	- [[#Slide 14 – Ereditarietà (3)|Ereditarietà multipla, gerarchie e relazione is-a]]
8. **Polimorfismo e late binding** (slide 15–17)
	- [[#Slide 15 – Polimorfismo|Overload: stesso nome, signature diverse]]
	- [[#Slide 16 – Polimorfismo (2)|Override in sottoclasse: esempio figure geometriche]]
	- [[#Slide 17 – Istanziamento dinamico (*late binding*)|Scelta dell'implementazione a run-time]]
9. **Delegazione** (slide 18)
	- [[#Slide 18 – Delegazione|Oggetti complessi e associazioni tra classi]]
10. **Dallo sviluppo funzionale allo sviluppo a oggetti** (slide 19–21)
	- [[#Slide 19 – 2. Lo sviluppo di sistemi a oggetti|Obiettivi dell'approccio OO]]
	- [[#Slide 20 – Dall'approccio funzionale…|Decomposizione funzionale e suoi limiti]]
	- [[#Slide 21 – …all'approccio a oggetti|Analisi, design, implementazione e modello a fontana]]
11. **Benefici dell'approccio a oggetti** (slide 22–23)
	- [[#Slide 22 – Benefici dell'approccio a oggetti|Decomposizione orientata alla modellazione]]
	- [[#Slide 23 – Benefici dell'approccio a oggetti|Stabilità, produttività, prototipi, costi di manutenzione]]
12. **Analisi e progettazione a oggetti** (slide 24–26)
	- [[#Slide 24 – Object-oriented analysis|Quali classi e quali responsabilità]]
	- [[#Slide 25 – Object-oriented design|Come le classi realizzano le responsabilità]]
	- [[#Slide 26 – Approcci object-oriented|I metodi storici e la convergenza in UML]]
	
---
## Slide 2 – 1. Il paradigma a oggetti

- I concetti fondamentali:
	- oggetto
	- astrazione
	- classe
	- incapsulamento
	- ereditarietà
	- polimorfismo - late binding
	- delegazione

>> Questi sette concetti sono l'ossatura del resto del corso: i primi tre dicono *di che cosa* è fatto un sistema a oggetti, gli altri quattro *come* si combinano e si riusano i pezzi.

---

## Slide 3 – <u>Oggetti</u>

- Sono gli elementi di base del paradigma, e corrispondono a entità (non necessariamente "fisiche") del dominio applicativo
	- **Esempi** (in un'aula universitaria): le sedie, gli studenti che le occupano, il professore che tiene la lezione, il corso seguito dagli studenti
- *Un ==oggetto== è un individuo sostanziale che possiede un identità e un insieme di proprietà, che ne rappresentano lo stato e il comportamento*
- Ogni oggetto è caratterizzato da:
	- una **<u>identità</u>** (**OID**, *Object IDentifier*) che gli viene associata all'atto della creazione, non può essere modificata ed è indipendente dallo stato corrente dell'oggetto
	- uno **<u>stato</u>** definito come l'insieme dei valori assunti a un certo istante da un insieme di **attributi**
	- un **<u>comportamento</u>** definito da un insieme di **operazioni**
	- ==Tripla di identità, stato e comportamento.==
	 
- Poiché un oggetto può anche includere riferimenti ad altri oggetti, risulta possibile creare *oggetti complessi*

>> L'identità è indipendente dal valore: due oggetti con esattamente gli stessi attributi restano oggetti distinti (due sedie identiche), mentre un oggetto che cambia tutti i suoi attributi resta lo stesso oggetto. È la differenza fra identità (`==` sui riferimenti) e uguaglianza di stato (`equals`).

---

## Slide 4 – Oggetti (2)

![[ISW2-s004-1.png|600]]

Esempi di oggetti con il loro stato e comportamento:
*gli attributi esistono nel mondo reale, gli identificatori no*, a livello di programmazione risulta invisibile.

>> Il numero di matricola è un attributo (esiste nel mondo reale, può cambiare, può essere sbagliato); l'OID invece è un artefatto del sistema, invisibile all'utente e immutabile. Per questo non si dovrebbe mai usare un attributo di dominio come identità dell'oggetto.

---

## Slide 5 – Operazioni e interfaccia

- Ogni operazione dichiarata da un oggetto specifica il **nome** dell'operazione, gli oggetti che prende come **parametri** e il **valore restituito** (*==signature==*)
	- L'oggetto su cui l'operazione opera è definito implicitamente
- L'insieme di tutte le signature delle operazioni di un oggetto sono dette *==interfaccia==* dell'oggetto
	- L'interfaccia specifica l'insieme completo di tutte le richieste che possono essere inviate all'oggetto

>tra i parametri  espliciti non figura mai oid dell'oggetto, quello figura come parametro implicito
>il metodo è l'implementazione dell'operazione, ogni operazione può avere più metodi.

>> "L'oggetto su cui l'operazione opera è definito implicitamente" significa che il ricevitore del messaggio è un parametro nascosto: `s.sostieneEsame(e)` corrisponde concettualmente a `sostieneEsame(s, e)`, ed è quello che nei linguaggi OO si chiama `this` (o `self`).

---

## Slide 6 – Tipo di dati astratto

- E' una rappresentazione di un insieme di oggetti "simili", caratterizzato da una **struttura** per i dati e da un'**interfaccia** che definisce quali sono le operazioni associate agli oggetti, ovvero l'insieme dei **servizi** implementati
- Un tipo è **==sottotipo==** di un **supertipo** se la sua interfaccia contiene quella del supertipo
	- Un sottotipo eredita l'interfaccia del suo supertipo
	- L'interfaccia non vincola l'implementazione del servizio offerto ovvero il comportamento effettivo
	- Oggetti con la stessa interfaccia possono avere implementazioni completamente diverse

>> Attenzione alla distinzione tipo/classe: il tipo è il "contratto" (che cosa si può chiedere), la classe è la realizzazione (come è fatto). Sottotipo vuol dire sostituibilità: ovunque serva un supertipo posso passare un sottotipo.

---

## Slide 7 – Classe

- Fornisce una realizzazione di un tipo di dati astratto, specifica cioè un'implementazione per i metodi a esso associati
	- **Esempi**: classe delle sedie, degli studenti, dei professori, dei corsi

> *Un oggetto è sempre istanza di esattamente una classe*

- Tutti gli oggetti di una classe hanno gli stessi attributi e metodi. Esistono <u>metodi di due tipi</u>: quelli che restituiscono <u>astrazioni</u> significative sullo stato dell'oggetto cui sono applicati, e quelli che ne <u>alterano lo stato</u>

>> I due tipi di metodi corrispondono ad *accessori* (o "osservatori": leggono e astraggono, non modificano) e *trasformatori* (modificano lo stato) — classificazione ripresa nella slide 11.

---

## Slide 8 – Classe

![[ISW2-s008-1.png|600]]

Le classi corrispondenti agli oggetti della slide 4:

- **ESAME** — *attributi*: corso, data, voto; *operazioni*: stampa verbale, trasmetti in segreteria
- **DOCENTE** — *attributi*: nome, data nascita, stato civile, ruolo; *operazioni*: mangia, dorme, tiene corso, tiene esami
- **STUDENTE** — *attributi*: nome, data nascita, stato civile, num. matricola; *operazioni*: mangia, dorme, si iscrive a corso, sostiene esami

>> Nel passaggio dagli oggetti (slide 4) alle classi spariscono i *valori* (Mark, 12.12.1980) e restano i *nomi* degli attributi: la classe è lo "stampo", l'oggetto il pezzo stampato con valori concreti.

---

## Slide 9 – Incapsulamento

- Protegge l'oggetto nascondendo lo stato dei dati e l'implementazione delle sue operazioni
- Un oggetto incapsula i dati (**attributi**) e le procedure (**operazioni**) che li possono modificare
- <u>l principio di incapsulamento sancisce che gli attributi di un oggetto possono essere letti e manipolati solo attraverso l'interfaccia che l'oggetto stesso mette a disposizione</u>
	- I dettagli dell'implementazione di una classe sono *privati*, cioè manipolabili direttamente solo dai metodi della classe e quindi protetti
	- L'accesso dall'esterno agli attributi della classe avviene attraverso una ristretta *interfaccia pubblica*, costituita da un sottoinsieme dei metodi della classe
	- Un oggetto esegue una operazione quando riceve una richiesta (**messaggio**) da un oggetto client

---

## Slide 10 – Vantaggi dell'incapsulamento

- Per l'**utilizzo** di una classe è sufficiente conoscerne l'interfaccia pubblica; i dettagli implementativi sono nascosti all'interno. La classe viene quindi vista come una "scatola nera"
- La modifica dell'**implementazione** di una classe non si ripercuote sull'applicazione, a patto che non ne venga variata l'interfaccia
- Poiché la manipolazione diretta degli attributi della classe avviene esclusivamente tramite i suoi metodi, viene fortemente ridotta la possibilità di commettere **errori** nella gestione dello stato degli oggetti
- Il **debugging** delle applicazioni è velocizzato, poiché l'incapsulamento rende più semplice identificare la sorgente di un errore

>> Conseguenza pratica: se uno stato è sbagliato, i "colpevoli" possibili sono solo i metodi della classe, non tutto il programma. L'incapsulamento riduce lo spazio di ricerca dei bug da globale a locale.

---

## Slide 11 – Operazioni e metodi

- Un **metodo** cattura l'implementazione di una operazione
- I metodi possono essere classificati in:
	- *<u>costruttori</u>*, per costruire oggetti a partire da parametri di ingresso restituendo l'OID dell'oggetto costruito
	- *<u>distruttori</u>*, per cancellare gli oggetti ed eventuali altri oggetti ad essi collegati
	- *<u>accessori</u>*, per restituire informazioni sul contenuto degli oggetti (proprietà derivate)
	- *<u>trasformatori</u>*, per modificare lo stato degli oggetti e di eventuali altri oggetti ad essi collegati
- I metodi possono essere:
	- *pubblici*
	- *protetti*
	- *privati* -> da visibilità dentro al package o per ereditarietà.

>in java non servono i distruttori perché c'è il garbage collector.

>> I tre livelli di visibilità corrispondono in UML ai simboli `+` (pubblico: accessibile a tutti), `#` (protetto: accessibile alla classe e alle sue sottoclassi) e `-` (privato: solo alla classe stessa).

---

## Slide 12 – Ereditarietà

- *Il meccanismo di ereditarietà permette di basare la definizione e implementazione di una classe su quelle di altre classi.*
- E' possibile definire relazioni di specializzazione/ generalizzazione tra classi: la classe generalizzante viene detta **superclasse**, la classe specializzante viene detta *sottoclasse* o *classe derivata*
	- **Esempio**: le classi studente e professore sono entrambe derivate dalla classe persona
- Ciascuna sottoclasse eredita dalla sua superclasse la struttura ed i comportamenti, ovvero gli attributi, i metodi e l'interfaccia; può però specializzare le caratteristiche ereditate e aggiungere caratteristiche specifiche non presenti nella superclasse

---

## Slide 13 – Ereditarietà (2)

![[ISW2-s013-1.png|600]]

Gerarchia di ereditarietà (DOCENTE **è un** PERSONA, STUDENTE **è un** PERSONA):

>> Nella figura le caratteristiche in corsivo rosso sono quelle ereditate da PERSONA, quelle in nero sono le aggiunte specifiche della sottoclasse: si "vede" così che l'ereditarietà evita di riscrivere la parte comune.

---

## Slide 14 – Ereditarietà (3)

- Si parla di ==*ereditarietà multipla*== quando una sottoclasse può essere derivata contemporaneamente da più superclassi
	- in caso di conflitti tra attributi o metodi ereditati da due superclassi, occorre individuare opportune strategie di risoluzione
- Poiché una classe derivata può essere ulteriormente specializzata, si vengono a formare *gerarchie* di classi, strutturate come **alberi** in caso di ereditarietà singola e come **reticoli** in caso di ereditarietà multipla

> grafo aciclico , DAG

- Date due classi A e B di cui B è una sottoclasse di A, esiste di fatto la relazione B *is-a* A (B *è un* A)
	- gli oggetti istanze di B possano a tutti gli effetti essere utilizzati al posto di oggetti istanze di A (ad esempio, uno studente è una persona)
	- *Non è vero il contrario* (non è detto che una persona sia uno studente)

>> Il caso classico di conflitto nell'ereditarietà multipla è il "problema del diamante": D eredita da B e C, entrambe derivate da A; se B e C ridefiniscono lo stesso metodo, quale versione vale per D? Java lo evita ammettendo ereditarietà multipla solo di interfacce, il C++ lo risolve con la qualificazione esplicita e l'ereditarietà virtuale.

---

## Slide 15 – Polimorfismo

> *capacità di assumere forme molteplici*

- Nel paradigma a oggetti si usa questo termine per alludere alla possibilità di creare metodi con lo stesso nome ma implementazioni differenti
- Tramite il meccanismo di *==overload==* è possibile definire, all'interno di una stessa classe, più metodi con lo stesso nome ma <u>signature</u> (insieme dei parametri) <u>differenti</u>
	- A fronte di un messaggio inviato per invocare il metodo, sarà il sistema a scegliere l'implementazione da considerare, sulla base della struttura del messaggio stesso

>> L'overload si risolve a *compile-time*, guardando i tipi statici degli argomenti (è quindi "polimorfismo apparente"); l'override della slide successiva si risolve invece a *run-time*, guardando la classe effettiva dell'oggetto ricevente.

---

## Slide 16 – Polimorfismo (2)

- Possibilità di ridefinire, all'interno di una sottoclasse, l'implementazione di un metodo ereditato (*==override==*)

![[ISW2-s016-1.png|550]]

```cpp
class figuraGeometrica
{   // attributi
    int posizioneX; int posizioneY;
    int coloreContorno;
    int coloreRiempimento;
    // metodi
    public:
    void trasla(int shiftX, int shiftY);
    void ruota(int angoloRotazione);
    . . . . . . . . . . . .
}
```

```cpp
class quadrato:figuraGeometrica     class cerchio:figuraGeometrica
{   int lato; int angolo            {   int raggio;
}                                   }
```

**ridefinizione di `trasla` e `ruota`**

>> Ogni sottoclasse ha bisogno di un proprio `trasla`/`ruota` perché il modo di disegnarsi e ruotare dipende dalla forma: il cerchio ignora la rotazione, il quadrato deve ruotare i vertici. L'interfaccia resta identica, cambia solo il corpo del metodo.

---

## Slide 17 – Istanziamento dinamico (*late binding*)

- Il polimorfismo, abbinato all'istanziamento dinamico, permette a ciascun oggetto di rispondere a uno stesso messaggio in modo appropriato a seconda della classe da cui deriva

![[ISW2-s017-1.png|550]]

>> Nella figura, a compile-time ogni riferimento punta a una figura "generica" (la sagoma gialla); solo a run-time si scopre che quelle istanze sono in realtà quadrati e cerchi, e la chiamata viene instradata sul metodo della classe effettiva.

---

## Slide 18 – Delegazione

- Si parla di delegazione quando un oggetto A contiene al suo interno un riferimento a un altro oggetto B, cosicché A (che risulta essere in questo caso un ==*oggetto complesso*==) può delegare alcune funzioni alla classe a cui appartiene B
	- **Esempio**: Dovendo definire una classe persona, gli attributi nome, cognome e indirizzo saranno dichiarati come puntatori a oggetti di classe stringa, <u>delegando</u> così a quest'ultima classe le operazioni di manipolazione
- La delegazione costituisce il meccanismo fondamentale per implementare ==**associazioni tra classi**==
	- **Esempio**: per rappresentare l'associazione di <u>inclusione</u> tra un aeroplano e il suo motore, si includerà in ogni oggetto di classe aeroplano un puntatore a un oggetto di classe motore

> delegazione  / inclusione

![[ISW2-s018-1.png|200]]

>> Delegazione ed ereditarietà sono le due vie per riusare codice: l'ereditarietà è un legame *is-a* fissato a tempo di compilazione, la delegazione un legame *has-a* che si può cambiare a run-time sostituendo l'oggetto puntato — più flessibile, ed è alla base di molti design pattern.

---

## Slide 19 – 2. Lo sviluppo di sistemi a oggetti

> *Imparare una nuova tecnica di progettazione è molto più difficile che imparare un nuovo linguaggio, poiché richiede di modificare sostanzialmente il nostro modo di pensare*

- Il bisogno di sviluppare e mantenere sistemi di grandi dimensioni e complessi in ambienti dinamici crea un forte interesse in nuovi approcci al problema del design
- L'obiettivo principale dell'approccio orientato agli oggetti (**OO**, *object-oriented*) è migliorare la produttività aumentando l'estendibilità e la riusabilità del software e controllando la complessità e i costi della manutenzione

---

## Slide 20 – Dall'approccio funzionale…

- La *decomposizione funzionale* è un'analisi di tipo top-down tradizionalmente impiegata nel paradigma procedurale, basata sui concetti di **procedura** e **flusso di dati**
	- La domanda fondamentale è: *cosa fa il sistema, qual è la sua funzione?*
	- Ad alto livello di astrazione, il sistema viene caratterizzato tramite *un'unica funzionalità*
	- I blocchi di base dell'applicazione sono i task (*compiti*), che durante l'implementazione daranno luogo a procedure, e sono legati alla specifica soluzione proposta
- Principali problemi:
	- Nessun modello unificante per integrare le diverse fasi: c'è una forte **discrepanza** tra concetto di flusso di dati utilizzato nell'analisi e concetto di gerarchia di compiti utilizzato nella progettazione
	- Mancanza di **iterazione** nella progettazione: si adotta il *modello a cascata*, in cui le attività sono viste come una progressione lineare
	- Mancanza di **estendibilità**: non si considerano le possibili evoluzioni del sistema
	- Poca attenzione al problema della **riusabilità**: ogni sistema viene ricostruito a partire da zero, per cui i costi di manutenzione sono alti
	- La progettazione dei **dati** viene trascurata, poiché le strutture dati sono determinate dalle strutture procedurali

---

## Slide 21 – …all'approccio a oggetti

- **ANALISI**: va dall'inizio del progetto fino all'analisi delle specifiche utente e allo studio di fattibilità (*cosa* il sistema deve fare)
- **DESIGN**: progettazione logica e fisica del sistema (*come* lo deve fare)
- **IMPLEMENTAZIONE**: scrittura del codice, test di verifica, validazione, manutenzione
	- I confini tra le fasi non sono più distinti, infatti il centro di interesse è lo stesso: **gli oggetti e le loro interrelazioni**
	- Il processo di sviluppo OO è iterativo: si adotta il *modello a fontana*, in cui lo sviluppo raggiunge un alto livello per poi ritornare a un livello precedente e risalire di nuovo
	- L'ereditarietà permette di aggiungere nuove caratteristiche a un sistema riducendo i costi di manutenzione (**estendibilità**), e di costruire nuove funzionalità a partire dall'esistente (**riusabilità**) riscrivendo solo quella parte di codice inadeguato e solo per gli oggetti che ne hanno bisogno

>> Il "modello a fontana" prende il nome dall'immagine dell'acqua che sale e poi ricade: le fasi si sovrappongono e si ritorna volutamente indietro, al contrario della cascata dove il flusso è a senso unico.

---

## Slide 22 – Benefici dell'approccio a oggetti

- La decomposizione è orientata alla modellazione
	- I blocchi di base dell'applicazione sono entità che interagiscono, modellate come classi di oggetti, e sono legate alla formulazione originale del problema
	- I risultati dell'analisi non sono un semplice input del design, ma ne sono parte integrante: analisi e design lavorano insieme per sviluppare un modello del dominio del problema
- Il progetto dettagliato è rimandato nel tempo e nascosto all'interno di ciascuna classe
	- Algoritmi e strutture dati non sono più "congelati" a un alto livello del progetto
	- Si ha più flessibilità, poiché un cambiamento nell'implemen-tazione non implica variazioni consistenti alla struttura del sistema

---

## Slide 23 – Benefici dell'approccio a oggetti

- I sistemi sviluppati a oggetti risultano più stabili nel tempo di quelli progettati per decomposizione funzionale
	- Le caratteristiche dei domini applicativi variano più lentamente nel tempo rispetto alle funzionalità richieste ai sistemi
- La produttività è alta
	- Fasi diverse dell'analisi dei requisiti e del ciclo di vita possono essere svolte contemporaneamente
- C'è la possibilità di sviluppare rapidamente **prototipi** che possono risultare di valido ausilio per la certificazione dell'analisi dei requisiti
- E' possibile che il design e l'implementazione a classi richiedano tempi elevati, volendo provvedere generalità e riusabilità; a fronte di ciò si ha però una drastica riduzione dei **costi di manutenzione**

>> Il punto chiave del primo bullet: gli studenti, i corsi e gli esami esistono da decenni, mentre le funzioni richieste al software di segreteria cambiano ogni anno. Modellare il dominio anziché le funzioni dà quindi strutture più durevoli.

---

## Slide 24 – Object-oriented analysis

> *"Di che cosa necessita il programma?"*
> *"Quali classi saranno presenti?"*
> *"Qual è la responsabilità di ciascuna classe?"*

- **Attività**:
	- determinare la funzionalità del sistema
	- creare una lista delle classi che sono parte del sistema
	- distribuire le funzionalità del sistema attraverso le classi individuate
- In una buona analisi …
	- le classi sono relativamente "piccole" e molte sono abbastanza generali da poter essere riusate in futuri progetti
	- le responsabilità e il controllo sono distribuiti, in altre parole il progetto non ha un "centro" esplicito
	- ci sono poche assunzioni riguardo al linguaggio di programmazione da usare

---

## Slide 25 – Object-oriented design

> *"Come gestirà la classe le sue responsabilità?"*
> *"Quali informazioni sono necessarie alla classe?"*
> *"Come comunicheranno le classi tra loro?"*

- **Attività**:
	- determinare metodi e attributi di ciascuna classe
	- progettare algoritmi per implementare le operazioni
	- progettare le associazioni
- In un buon design…
	- i percorsi di accesso ai dati sono ottimizzati
	- le classi sono raggruppate in moduli

>> Il confine analisi/design è nelle domande: l'analisi chiede *quali* classi e *quali* responsabilità (che cosa), il design chiede *come* quelle responsabilità vengono realizzate e come le classi collaborano.

---

## Slide 26 – Approcci object-oriented

- Booch OOD
- Coad-Yourdon OOA/OOD
- Jacobson OOSE
- Rubin-Goldberg OBA
- Rumbaugh OMT
- Shlaer-Mellor OOA
- ……..

>> La freccia della slide indica la convergenza di questi metodi in **UML**: Booch, Jacobson e Rumbaugh (i "tres amigos") unificarono le rispettive notazioni, ed è da lì che nasce il linguaggio trattato nel capitolo successivo.

---
## Riassunto

>> **I sette concetti**
>> - Oggetto, astrazione, classe, incapsulamento, ereditarietà, polimorfismo/late binding, delegazione.
>>
>> **Oggetto**
>> - Individuo sostanziale con *identità* (OID, assegnato alla creazione, immutabile, indipendente dallo stato), *stato* (valori degli attributi in un istante) e *comportamento* (insieme di operazioni).
>> - Gli attributi esistono nel mondo reale, gli identificatori no: la matricola è un attributo, l'OID un artefatto del sistema. Due oggetti con lo stesso stato restano distinti.
>> - Un oggetto che contiene riferimenti ad altri oggetti è un *oggetto complesso*.
>>
>> **Interfaccia, tipo, classe**
>> - *Signature* = nome + parametri + valore restituito; l'oggetto ricevente è implicito (`this`). L'*interfaccia* è l'insieme di tutte le signature, cioè tutte le richieste ammesse.
>> - Tipo di dati astratto = struttura dati + interfaccia (servizi). B è *sottotipo* di A se la sua interfaccia contiene quella di A; l'interfaccia non vincola l'implementazione.
>> - La classe realizza un ADT implementandone i metodi. Un oggetto è istanza di **esattamente una** classe.
>>
>> **Incapsulamento**
>> - Gli attributi si leggono e modificano solo tramite l'interfaccia che l'oggetto espone; i dettagli implementativi sono privati.
>> - Vantaggi: uso a "scatola nera", modifica dell'implementazione senza impatti se l'interfaccia non cambia, meno errori sullo stato, debugging più rapido.
>> - Metodi: costruttori, distruttori, accessori, trasformatori; visibilità pubblica, protetta, privata (`+`, `#`, `-` in UML).
>>
>> **Ereditarietà**
>> - La sottoclasse eredita attributi, metodi e interfaccia della superclasse, può specializzarli e aggiungerne di nuovi; vale la relazione *is-a* (B usabile al posto di A, non viceversa).
>> - Ereditarietà singola → gerarchie ad **albero**; multipla → **reticoli**, con possibili conflitti da risolvere (problema del diamante).
>>
>> **Polimorfismo e late binding**
>> - *Overload*: stesso nome, signature diverse, risolto a compile-time. *Override*: ridefinizione di un metodo ereditato in una sottoclasse, risolto a run-time.
>> - Con l'istanziamento dinamico ogni oggetto risponde allo stesso messaggio secondo la propria classe effettiva: fino a run-time non si è vincolati a una implementazione.
>>
>> **Delegazione**
>> - A contiene un riferimento a B e gli delega funzioni (legame *has-a*): è il meccanismo base per implementare le **associazioni tra classi**.
>>
>> **Sviluppo OO vs funzionale**
>> - Decomposizione funzionale: domanda "cosa fa il sistema?", blocchi = task, **modello a cascata**; problemi: discrepanza analisi/progetto, nessuna iterazione, scarsa estendibilità e riusabilità, dati trascurati.
>> - Approccio OO: fasi analisi–design–implementazione con confini sfumati attorno a oggetti e interrelazioni, **modello a fontana** (iterativo); obiettivi: estendibilità, riusabilità, controllo di complessità e costi di manutenzione.
>> - Benefici: sistemi più stabili (il dominio cambia più lentamente delle funzionalità richieste), prototipazione rapida, produttività alta; il design a classi può costare di più ma riduce drasticamente la manutenzione.
>> - OOA chiede *quali* classi e *quali* responsabilità; OOD chiede *come* le realizzano e comunicano. I metodi storici (Booch, Jacobson, Rumbaugh, Coad-Yourdon, OMT…) convergono in **UML**.
