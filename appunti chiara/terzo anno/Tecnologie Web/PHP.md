Non serve mettere il tipo nelle variabili.
![[Pasted image 20261104122237.png]]

![[Pasted image 20261104122413.png]]
PHP mette a disposizione delle variabili speciali, chiamate **superglobali**, che sono sempre disponibili in qualsiasi parte del codice (in qualsiasi "scope"). Servono per recuperare informazioni sulla richiesta HTTP in arrivo. Le principali elencate sono:

- `$_GET`: contiene i parametri passati tramite l'URL (la _query string_).
    
- `$_POST`: contiene i dati inviati da un form HTML usando il metodo POST.
    
- `$_SERVER`: fornisce informazioni sul server e sulla richiesta (es. il metodo HTTP usato).
    
- `$_COOKIE`: contiene i cookie inviati dal browser.
    
- `$_SESSION`: permette di accedere ai dati della sessione dell'utente.

**L'operatore `??` (Null Coalescing)**: Viene usato così: `$nome = $_GET["nome"] ?? "visitatore";`. Significa: "usa il valore passato nell'URL, ma se non è stato passato nulla (o è null), usa il valore predefinito 'visitatore'".

slide 72-password hashing