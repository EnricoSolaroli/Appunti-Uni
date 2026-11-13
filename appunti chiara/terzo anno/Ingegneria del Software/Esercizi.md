Progetto delle associazioni. 

![[Pasted image 20261112200208.png]]

Creo il contenitore ovvero lo studio medico. 
Punto di ingresso la d che è la più frequente. 
Un'impegnativa include una prestazione, una prestazione può stare in tante impegnative. 

Collego paziente ad impegnative. Da paziente a fascia di esenzione. Per rappresentare la classe associativa, è saltare direttamente da una classe all'altra di quelle che partecipano all'associazione. Devo per forza passare dalla classe associativa. 
- o da prestazione vado a tariffario e da tariffario vado alla fascia o viceversa. 
finisce martedi

Continuo
Passo alla b. Il punto di entrata è impegnativa, abbinato a paziente, prestazione e aggiungo il medico.
Passo alla c. Entro dalle prestazioni, e lo faccio rosso perchè posso ottimizzarla. Dalla prestazione risalgo alle impegnative che la icludono.
Passo all'ultima query. Se la volessi ottimizzare dal contenitore entro nelle fasce e da qui vado al tariffario. 
Per le cardinalità di tariffario prendo quella che c'è nell'imamgine iniziale tra fascia e prestazione invertite. 

Prima di togliere le associazioni rosse, verifico se ho progettato tutte le associazioni, e faccio il check della raggiungibilità. 
Dal contenitore raggiungo tutti i pazienti? no ci sono pazienti senza impegnativa. Quindi aggiungo un'entrata diretta dal contenitore al paziente. Potrei da fascia esenzione ma il percorso è in rosso, quindi se posso evito. 

Stessa cosa con medico. lE PRESTAZIONI A PARTIRE DALL'IMPEGNATIVA, LE RAGGIUNGO TUTTE? No. Trasformo quindi il ramo in nero. 

Tolgo il ramo rosso verso fascia esenzione perchè non mi serve. 

Se tolgo ramo rosso posso comunque fare la c enrtando su prestazioni, e vado in impegnativa. Posso decidere io se metterla o no. 

Attività - Scrittura di un libro, con nodi oggetto
Faccio le corsie: autori, casa editrice, revisore, tipografo
La prima azione è svolta dagli autori, che preparano la proposta. Uso i nodi oggetto, ovvero faccio vedere in che modo ognuna di queste azioni usa oggetti, modificandoli e generandone degli altri. 
Ho quindi libro in uno stato [proposta]. I nodi oggetto li posso mettere nella cosia che voglio.
Questo materiale viene mandato alla casa editrice che deve valutare il progetto usando revisori esterni. 

In uscit ail revisore produce un giudizio. (sempre nodo oggetto Revisione). Che viene mandato alla casa editrice che esprime il giudizio. 
Dal di li esco in due modi, Rifiutato chiudo. Accettato, faccio l'azione scrivono, e mostro con un nodo oggetto articoli e testi. E altro nodo oggetto è Libro [manoscritto]. Il manoscritto va al tipografo che fa le bozze, le prepara, le formatta ecc. 

Lo stato del libro si trasforma sempre. Ora va in stato bozza. Rimando la bozza agli autori che la devono correggere. per mostrare che devono avere anche il manoscritto aggiungo l'entrata da libro[manostritto]. Esco di nuovo con il libro in stato bozza corretta. Infine la casa editrice stampa el copie. Esco con il libro in stato copia. 

Infine la casa editrice spedisce le copie. 

Es su comprensorio sciistico, classi
Gerarchia: impianto con funivia, seggiovia, skilift (complete, disjoint tra {}). Non ha fatto la classe comprensorio sciistico come contenitore, se la faccio collego con part of, rombo nero. 
Ad impianto collego pista, con attributi lunghezza colore. 
Classe skipass, importante chiedersi quali sono le istanze della classe.Le istanze di skipass non sono 3 (sono n una per ogni skipass venduto). Non sono 3 perchè a punti, settimanale, giornaliero sono i tipi. Sono quelli che vendo a tutti gli sciatori. 

Creo la tipologia con i vari tipi ({complete, disjoint}). Il fatto che i punti vengano scalati è una specifica funzionale e non ci interessa. Quindi metto solo punti in impianto. 

Classe biglietto, che lego all'impianto, perchè è specifico. Vale solo per un determinato impianto. Nel biglietto metto l'importo, stessa cosa per skipass. Aggiungo nome e cognome a settimanale e giornaliero, come attributo. 

Poi possono essere ridotti. Creo quindi un attributo booleano. 

Aggiungo hotel convenzionato come classe e collego a settimanale e giornaliero. Posso anche creare la classe sciatore con i dati, che ha uno skipass e a quel punto è lo sciatore che è residente in un determinato hotel. 
Ultimo pezzo la risalita. Creo la classe con data e ora, la devo legare a skipass e biglietto. Una risalita è collegata a 0..1, biglietto, e una risalita è fatta con un biglietto. Per porre il vincolo e dire che posso risalire solo con uno skipass o biglietto. Faccio la riga del vincolo (riga tratteggiata) e sopra ci scrivo {or}. La risalita la lego anche all'impianto. Una risalita riguarda un impianto e su un impianto faccio tante risalite. 
Foto 11.43

Casi d'uso - sempre lo sci
Attore principale: sciatore. 
Metto come casi d'uso: acquista skipass, acquista biglietto. Metto in extend Acquista con riduzione a partire da skipass. 
Poi metto effettua risalita. Potrei aver già finito almeno che non voglio mostrare esplicitamente il meccanismo della cauzione. 

A quel punto metto con include paga cauzione a partire da acquista skipass. Aggiungo il recupero, quindi avrò recupera cauzione, che viene fatto al momento in cui restituisco lo skipass, che include anche recupero della cauzione. Volwndo posso aggiungere l'operatore che vende, e mostrare che gli acquisti ecc sono collegati a lui, ma non viene nominato quindi posso non metterlo. 
Posso mettere in extend rimozione dei punti. 

quiz 11.52
Prima query parto da missione, vedo i certificati richiesti e vedo quali sono gli utenti che hanno quei certificati. quella in basso a destra non va bene. In alto a sinistra sembra corretta. Verifico se fa risolvere anche la altre query. 

Regola: parto dalla query più frequente e la ottimizzo.