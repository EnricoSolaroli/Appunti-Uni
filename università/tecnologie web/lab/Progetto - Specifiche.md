[specifiche_progetto](<file:///Users/enrico/Library/Mobile Documents/com~apple~CloudDocs/Universita/terzo anno/tecnologie web/lab/specifiche_progetto.pdf>)

# Progetto – Specifiche

>> Specifiche del progetto d'esame. Le tecnologie sono quelle del corso: PHP ([[13 - PHP, backend e sicurezza]]) e Vue ([[12 - Introduzione a Vue]]); per la fase di design vedi [[14 - Web design]]. In fondo, nel Riassunto, c'è una checklist dei requisiti ricavata dalle slide.

## Indice

1. **Obiettivo, architettura e valutazione** (slide 1–6)
	- [[#Slide 2 – Introduzione|Introduzione]]
	- [[#Slide 3 – Obiettivo dell'elaborato|Obiettivo dell'elaborato]]
	- [[#Slide 4 – Architettura|Architettura]]
	- [[#Slide 5 – Valutazione elaborato|Valutazione elaborato]]
	- [[#Slide 6 – Esempi di Servizi|Esempi di Servizi]]
2. **Fase di design** (slide 7–11)
	- [[#Slide 7 – Il design verrà valutato|Il design verrà valutato]]
	- [[#Slide 8 – Obiettivi Design|Obiettivi Design]]
	- [[#Slide 9 -> 10 – Come fare il design?|Come fare il design?]]
	- [[#Slide 11 – Fase di design|Fase di design]]
3. **Tecnologie, consegna, GenAI e discussione** (slide 12–17)
	- [[#Slide 12 -> 13 – Tecnologie: Q&A|Tecnologie: Q&A]]
	- [[#Slide 14 – Consegna del progetto|Consegna del progetto]]
	- [[#Slide 15 – GenAI|GenAI]]
	- [[#Slide 16 – Discussione del progetto|Discussione del progetto]]

---
## Slide 1 – Specifiche Progetto

---
## Slide 2 – Introduzione

- Oggi introdurremo le specifiche dell'elaborato, nel quale è richiesta una fase di progettazione

---
## Slide 3 – Obiettivo dell'elaborato

- Scrivere una applicazione web accessibile e responsive che consenta di fornire un servizio generico agli studenti del nostro Campus
- Devono esserci:
	- Utente gestore del servizio
	- Utenti fruitori del servizio

>> In pratica servono almeno due ruoli con permessi diversi: un gestore (amministra il servizio: crea, modifica, approva, cancella contenuti) e dei fruitori (consultano e usano il servizio). Questo implica autenticazione e controllo dei ruoli lato server, in PHP: vedi [[13 - PHP, backend e sicurezza]].
>> *Responsive* = il layout si adatta alla larghezza dello schermo (smartphone, tablet, desktop); *accessibile* = usabile anche da chi usa tastiera, screen reader, ingrandimenti, ecc. (riferimento tipico: le linee guida WCAG). Vedi [[14 - Web design]].

---
## Slide 4 – Architettura

- Per realizzare l'elaborato si devono usare:
	- Lato server: PHP
	- Lato client:
		- Javascript
		- VueJS
- Non è possibile usare altri stack
- Si può usare Tailwind (consigliato) o altri framework CSS

>> Vincoli obbligatori: PHP sul server, JavaScript + Vue sul client. Libertà solo sulla parte CSS (Tailwind consigliato, ma anche altri framework). Il dettaglio di cosa è ammesso e cosa no è nelle slide 12–13.
>> Riferimenti: [[12 - Introduzione a Vue]] per il client, [[13 - PHP, backend e sicurezza]] per il server.

---
## Slide 5 – Valutazione elaborato

- Gruppi da 2 o 3 persone (organizzazione dei gruppi autonoma)
- Possibile esito:
	- **Non idoneo (0 punti): requisiti minimi non soddisfatti, la prova non è superata**
	- Idoneo (3 punti): requisiti minimi implementati, la prova è superata
	- Buono (4 punti): implementazione ben organizzata, la prova è superata
	- Ottimo (5 punti): implementazione solida e di alta qualità, la prova è superata con il massimo dei punti

>> Le slide non elencano i "requisiti minimi" in un unico punto, ma da questo deck risultano almeno: applicazione web accessibile e responsive con gestore e fruitori (slide 3), stack PHP + Vue (slide 4, 13), design fatto con un processo documentato (slide 7, 11), pagina sull'uso della GenAI (slide 15). Mancarne uno porta a "Non idoneo".
>> Il passaggio da 3 a 5 punti non dipende dall'aggiungere funzioni, ma dalla qualità: codice ben organizzato e implementazione solida.

---
## Slide 6 – Esempi di Servizi

- Affitti abitazioni
- Gruppi per elaborati
- Gruppi di studio
- Attività ricreative (calcetto, cineforum, ecc)
- Noleggio mezzi (bici, monopattini, ecc)
- Spotted

>> Sono solo esempi: il servizio è a scelta del gruppo, purché rivolto agli studenti del Campus e con i due ruoli (gestore e fruitori) della slide 3.

---
## Slide 7 – Il design verrà valutato

- Non solo nell'effetto che ha, ma soprattutto nel **processo** che lo ha prodotto
- ***Il design fa parte dei requisiti minimi***
- Come fare il design:
	- Siete utenti del servizio: potete fare focus group, experience prototyping o anche design partecipativo con gruppi di vs colleghi
	- Potete usare un tool per fare i mockup (Balsamiq o Adobe XD o altro) e valutare il design prima dell'implementazione.
	- Potete usare Personas e Scenarios

>> Glossario rapido delle tecniche (vedi [[14 - Web design]]):
>> - **Focus group**: discussione guidata con un piccolo gruppo di utenti, per raccogliere opinioni su un'idea o su dei mockup.
>> - **Experience prototyping**: far provare agli utenti un prototipo (anche finto o parziale) in una situazione realistica e osservare cosa succede.
>> - **Design partecipativo**: gli utenti progettano insieme a voi, ad esempio disegnando schermate o ordinando le funzioni per importanza.
>> - **Mockup**: bozza statica delle schermate (layout, contenuti, navigazione) fatta prima di scrivere codice.
>> - **Personas**: utenti tipo fittizi ma realistici (nome, età, obiettivi, frustrazioni); **Scenarios**: brevi storie in cui una persona usa il servizio per raggiungere un obiettivo.
>>
>> Conta il processo: tenete traccia di cosa avete fatto (sessioni, mockup prima e dopo, decisioni prese), perché va descritto nella relazione (slide 11).

---
## Slide 8 – Obiettivi Design

- La progettazione deve essere:
	- Mobile First
	- User Centered
	- Accessibile

>> - **Mobile First**: si progetta prima la versione per smartphone (schermo piccolo, contenuti essenziali) e poi la si estende al desktop. In CSS di solito vuol dire stili base per il mobile e media query `min-width` per gli schermi più grandi; con Tailwind i prefissi `sm:`, `md:`, `lg:` funzionano proprio così.
>> - **User Centered**: le scelte partono dai bisogni degli utenti reali, coinvolti durante il processo (personas, focus group, test), non dai gusti del gruppo.
>> - **Accessibile**: HTML semantico, testi alternativi per le immagini, contrasto sufficiente, navigazione da tastiera, form con `label`; riferimento: WCAG.

---
## Slide 9 -> 10 – Come fare il design?

**Esempio 1**

1. Faccio una sessione di design partecipativo con un gruppo di utenti
2. Creo i mockup
3. Faccio un focus group di controllo che valuta i mockup e modifico il design in base all'output del focus group.

**Esempio 2**

1. Creo personas e scenarios (almeno 3)
2. Produco un design centrato sull'utente del punto 1 e genero i mockup
3. Faccio un focus group di controllo che valuta i mockup e modifico il design in base all'output del focus group.

**Esempio 3**

1. Creo i mockup in base a linee guida di progettazione
2. Faccio una sessione di Experience prototyping provando l'applicazione con un gruppo di utenti
3. Produco un nuovo mockup in base ai risultati della fase 2

**Altri esempi….**

- Si possono avere altre sequenze efficaci che mescolano le tecniche viste.
- Avendo a disposizione molti potenziali utenti, siete avvantaggiati.
- …. **Decidete voi e alla fine producete almeno un mockup**

>> Tutti gli esempi hanno la stessa forma: una fase che coinvolge gli utenti o li modella (design partecipativo, personas e scenarios, linee guida), la produzione dei mockup, poi una verifica con utenti reali e una revisione. L'iterazione (mockup, valutazione, mockup corretto) è ciò che rende il processo "user centered".
>> L'unico vincolo esplicito è produrre almeno un mockup. Nell'esempio 2 ci sono almeno 3 personas/scenarios.

---
## Slide 11 – Fase di design

- Per descrivere la fase di design è **necessario** presentare una pagina di relazione
- In aggiunta a questa pagina testuale e descrittiva, potete presentare tutti i mockup che avete prodotto, (descrivendo eventuali cambiamenti che avete apportato durante la fase di design)
- La relazione va inclusa nella cartella di consegna
- La fase di progettazione viene pre-valutata, prima della discussione del progetto. ***Nel caso in cui non fosse presente, il gruppo non sarà ammesso alla prova di discussione***
- Il design deve essere responsivo, quindi deve riguardare sia la versione mobile sia la versione desktop

>> Da consegnare per il design: una pagina di relazione (obbligatoria) nella cartella di consegna, più i mockup (consigliati), con le modifiche fatte tra una versione e l'altra. I mockup vanno fatti sia per mobile sia per desktop.
>> Attenzione: senza relazione non si arriva nemmeno alla discussione.

---
## Slide 12 -> 13 – Tecnologie: Q&A

- «È possibile usare il framework Asp.net?»
	- No, lato server è possibile utilizzare solo PHP
- «È possibile usare Node.js?»
	- No, lato server è possibile utilizzare solo PHP
- «È possibile usare un framework PHP?»
	- Sì. Tuttavia se non ne conoscete già uno, lo sconsigliamo. Ci teniamo a precisare che il tempo impiegato per imparare un eventuale framework non dev'essere conteggiato nel carico di lavoro richiesto per il progetto

«In definitiva, quali tecnologie è possibile usare?»

- Lato server è OBBLIGATORIO l'utilizzo di PHP (non è quindi possibile usare Javascript, .NET, Java o altro).
- Lato client, per Javascript è OBBLIGATORIO l'utilizzo di framework come Vue (non è consentito l'uso di Angular o React).
- Per quanto riguarda infine CSS, potete usare framework come Tailwind o simili (Foundation, Skeleton, BootStrap, ecc).

>> Riassunto dei vincoli:
>>
>> | Livello | Ammesso | Non ammesso |
>> |---|---|---|
>> | Server | PHP (anche con un framework PHP, es. Laravel, sconsigliato se non lo conoscete già) | Node.js / JavaScript, ASP.NET / .NET, Java, altro |
>> | Client | JavaScript con Vue | Angular, React |
>> | CSS | Tailwind (consigliato), Foundation, Skeleton, Bootstrap, ecc. | — |
>>
>> "Framework come Vue" non apre ad altri framework JS: la slide 4 indica VueJS e dice che non si possono usare altri stack. Per qualunque alternativa conviene chiedere ai docenti.
>> Il tempo per imparare un framework PHP non riduce il resto del lavoro richiesto: è tempo in più a carico vostro.

---
## Slide 14 – Consegna del progetto

- La consegna avviene **prima** della discussione del progetto
- Dovete condividere con noi un repository o una cartella condivisa, qualche giorno **PRIMA** della discussione del progetto (riceverete istruzioni dettagliate su Virtuale con la deadline e la modalità per la consegna)
- **NON** inviateci il progetto per mail perché il mail server elimina tutti i file con estensione .js

>> La consegna (repository o cartella condivisa) deve contenere, oltre al codice, la pagina di relazione sul design (slide 11) e la pagina sull'uso della GenAI (slide 15). Deadline e modalità precise arrivano su Virtuale.

---
## Slide 15 – GenAI

- Nel repository dovete includere una pagina di descrizione dell'utilizzo di strumenti AI per design e implementazione dell'elaborato
- Dovete includere anche le parti più significative di prompt e discussione con il tool GenAI usato

>> Conviene salvare i prompt e le risposte più importanti man mano che si lavora (quale tool, per quale parte, cosa è stato preso o modificato), invece di ricostruirli alla fine. La pagina riguarda sia il design sia l'implementazione.

---
## Slide 16 – Discussione del progetto

- Tutti i membri del gruppo dovranno essere presenti alla discussione del progetto
- Tutti i membri del gruppo dovranno portare il proprio portatile (è necessaria una organizzazione preventiva, eventualmente tra colleghi di gruppi diversi; in casi estremi fateci sapere per tempo)
- La discussione prevede una fase di ***demo del progetto*** e una fase di ***modifica live del codice***

>> Per la modifica live ognuno deve conoscere tutto il codice, non solo la parte che ha scritto, e avere il progetto funzionante sul proprio portatile (server PHP, database, dipendenze), pronto da modificare.

---
## Slide 17 – Domande?

---
## Riassunto

>> **Checklist dei requisiti** (ricavata dalle slide; per i dettagli e le scadenze fanno fede le istruzioni che arriveranno su Virtuale)
>> - [ ] Applicazione web **accessibile** e **responsive**, che offre un servizio agli studenti del Campus (esempi: affitti, gruppi per elaborati o di studio, attività ricreative, noleggio mezzi, spotted).
>> - [ ] Due tipi di utente: **gestore** del servizio e **fruitori**.
>> - [ ] Lato server **solo PHP**, eventualmente con un framework PHP (sconsigliato se non lo si conosce già). Lato client JavaScript con **Vue** (niente Angular o React). CSS libero: Tailwind consigliato, oppure Foundation, Skeleton, Bootstrap…
>> - [ ] Gruppo di 2 o 3 persone.
>> - [ ] **Fase di design** obbligatoria (è requisito minimo): mobile first, user centered, accessibile. Va fatta con almeno una tecnica di coinvolgimento degli utenti (design partecipativo, focus group, experience prototyping, personas e scenarios), producendo **almeno un mockup**, e deve coprire sia la versione mobile sia quella desktop.
>> - [ ] **Pagina di relazione sul design** nella cartella di consegna: processo seguito, mockup ed eventuali cambiamenti fatti durante la fase di design. Senza la presentazione della fase di design non si è ammessi alla discussione.
>> - [ ] **Pagina sull'uso della GenAI** nel repository: per cosa è stata usata nel design e nell'implementazione, con i prompt e le discussioni più significative.
>> - [ ] Consegna **prima** della discussione, tramite repository o cartella condivisa. Le istruzioni e la scadenza arrivano su Virtuale. **Non** inviare il progetto per mail.
>> - [ ] Alla discussione ci sono tutti i membri del gruppo, ciascuno con il proprio portatile. È prevista una demo e una **modifica live del codice**.
>>
>> **Valutazione**: non idoneo (0 punti, requisiti minimi mancanti), idoneo (3), buono (4), ottimo (5). Il design è valutato soprattutto per il **processo** che lo ha prodotto, non solo per il risultato.
