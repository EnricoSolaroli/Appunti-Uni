# 25 Autotest di richiamo — le cose che all'esame non hanno alcun aiuto

> **Come si usa.** Non è un riassunto: è un test. Copri tutto, leggi **una** domanda, **produci la risposta a voce o su carta**, poi controlla sul riferimento indicato. Se la risposta non arriva entro ~20 secondi, segnala la domanda e vai avanti: non fermarti a rileggere.
>
> **Tre passate distanziate**, non una lunga: martedì sera, mercoledì dopo la simulazione, giovedì. Alla seconda e terza passata fai **solo le domande segnalate** più un campione casuale delle altre.
>
> **Perché queste domande e non altre.** All'esame lo scheletro ti dà i commenti sopra ogni riga: il codice è richiamo *assistito*. Qui dentro c'è solo ciò che all'esame è richiamo **libero** — nessun cue, nessun suggerimento. È l'unica parte che deve stare davvero in testa.

---

## A. Scelta del metodo — la tabella decisionale

Per ciascun caso: **quale metodo scegli** e **con quale giustificazione in una frase**.

1. $A$ è $600\times600$, sparsa, non simmetrica, a dominanza diagonale stretta per righe.
2. $A$ è $20\times20$, sparsa, simmetrica definita positiva, $K_2 = 10^4$.
3. $A$ è $500\times500$, sparsa, SDP, **non** a dominanza diagonale.
4. $A$ è $20\times15$, rango 13.
5. $A$ è $26\times3$, rango pieno, $K_2 = 17$.
6. $A$ è $4\times4$, densa, non simmetrica, $K_2 = 8$.
7. $A$ è $4\times4$, densa, $K_2 = 10^{12}$.
8. $A$ è $3\times3$, simmetrica, con un autovalore negativo.
9. Ti chiedono di risolvere lo **stesso** sistema con 5 termini noti diversi.
10. Ti chiedono l'**inversa** di $A$ sfruttando la fattorizzazione.

→ verifica: [[24 Compendio unico - tutto l'esame in un file#F1. La tabella decisionale unica|24 §F1]] · [[00 Piano esame settembre#7. Tabella decisionale — da mandare a memoria|00 §7]]

**Le cinque domande diagnostiche.** Sai elencarle nell'ordine giusto? (forma → dimensione → struttura → condizionamento → sparsità)

---

## B. Enunciati — ipotesi *e* tesi, nella forma "Sia… allora…"

11. Teorema di **esistenza della fattorizzazione LU** senza pivoting.
12. Teorema di **Cholesky**.
13. Teorema degli **zeri** (Bolzano) — e la maggiorazione dell'errore della bisezione.
14. Teorema di convergenza di **Gauss-Seidel** per matrici SDP — e perché la stessa ipotesi **non** basta per Jacobi.
15. Condizione **necessaria e sufficiente** di convergenza di un metodo iterativo.
16. Teorema di convergenza **locale di Newton**: ipotesi, ordine, e cosa succede se la radice ha molteplicità $m>1$.
17. Teorema dell'**errore di interpolazione**: enunciato completo e i **tre** fattori da commentare.
18. **Costante di Lebesgue**: definizione, che ruolo svolge, e da cosa dipende (attenzione: due cose, non una).
19. **Teorema della perturbazione**: la disuguaglianza, e perché l'amplificazione osservata deve essere $\le K(A)$ e mai uguale.
20. **Indice di condizionamento** del problema di valutare $f$ in un punto: sai *ricavarlo*, non solo enunciarlo?
21. Fattori di convergenza di **steepest descent** e **gradiente coniugato**, e perché la radice quadrata cambia tutto.
22. $\omega$ **ottimale** per SOR.

→ verifica: [[24 Compendio unico - tutto l'esame in un file#F3. Convergenza dei metodi iterativi|24 §F3]], §A3, §B, §C, §C2, §D2 · `teoremi utili.md`

---

## C. Codice senza scheletro — nessun cue, si scrive da zero

23. La **riga di import** completa da mettere per prima all'esame (lo scheletro importa solo `numpy`).
24. `LUsolve(P, L, U, b)` — per intero.
25. `solve_nsis(A, B)` — per intero. Quale trasposta serve e perché? Quale `reshape` e perché?
26. `rho_T_Jac(A)` — e da quale funzione dello scheletro è ritagliata.
27. Le tre righe che distinguono **Jacobi**, **Gauss-Seidel** e **SOR**: cosa valgono $M$ e $N$ per ciascuno.
28. La riga della **direzione** che distingue steepest descent da gradiente coniugato, e la formula di $\gamma$.
29. La differenza fra `newton_raphson`, `corde` e `shamanskii`: **una riga sola**, quale?
30. La costruzione della matrice nei minimi quadrati nei **tre** casi: base polinomiale, base non polinomiale, curva implicita. Cosa finisce nel termine noto e con quale segno?
31. In `qrLS`: perché il residuo è `h[n:]` e non `h[:n]`, e cosa succede con `mode='economic'`.
32. `stima_ordine`: quanti iterati servono come minimo, e cosa restituisce se sono meno.

→ verifica: [[24 Compendio unico - tutto l'esame in un file#PARTE III — PATTERN DI CODICE DA SAPERE A MEMORIA|24 Parte III]] · `scheletri_25_26.py`

---

## D. Le ricette grafiche — a memoria, nessun cue

33. Grafico di **convergenza** di più metodi iterativi a confronto: quale funzione, quale scala, e cosa si legge dalla pendenza.
34. **Interpolazione**: funzione, polinomio, nodi, più il grafico dell'errore assoluto.
35. **Minimi quadrati**: dati e modello — e la trappola quando la base **non** è polinomiale.
36. **Curva implicita** (circonferenza, iperbole): forma parametrica, il centro, e perché il centro non sta sulla curva.
37. **Curve di livello** per l'iterato iniziale di un sistema non lineare.
38. Come si mette una **label** in `plt.plot` senza distruggere il grafico (l'errore del 4° argomento posizionale).

→ verifica: [[00c Python e grafici - guida essenziale per l'esame|00c]] Parte 6

---

## E. Domande aperte di IA — voci 13-22

39. **13** — non convessità della funzione costo: cos'è e quali difficoltà introduce.
40. **14** — gli iperparametri di una rete: definizione e l'elenco.
41. **15** — le tre fasi del training.
42. **16** — backpropagation: le **tre** formule del nucleo, più la frase sul *perché* è importante.
43. **17** — MLP 1-1-1-1: la derivazione completa. ⭐ *è l'unica che si "fa": su foglio bianco, ogni giorno.*
44. **18** — Batch / SGD / Mini-batch: come si calcola il gradiente, quali dati, vantaggi e svantaggi.
45. **19** — Gradient descent con **momentum**: ruolo del termine di velocità e formula.
46. **20** — learning rate: effetto sulla convergenza, conseguenze se troppo alto o troppo basso.
47. **21** — learning rate **scheduling**: step decay, esponenziale, dipendente dal tempo.
48. **22** — learning rate **adattivo**: Adagrad, RMSProp, Adadelta, Adam.

→ verifica: `ia rebe/IA nonnina.md` · [[23 Blocco IA - le 22 domande, due regimi|23]]

---

## F. Le trappole — dille senza pensarci

49. Cosa restituiscono `Lsolve` e `Usolve` come **forma**, e che disastro provoca se il termine noto è 1-D.
50. Perché `np.all(np.linalg.eigvals(A)) > 0` è sbagliato, e come si scrive.
51. Perché lo scheletro non si importa finché resta un solo `#to do`.
52. `steepestdescent(A, b, x0, ?, ?)` e `gauss_seidel(A, b, x0, ?, ?)`: **l'ordine degli ultimi due argomenti è lo stesso?**
53. Perché `stima_ordine` può restituire un numero grande e plausibile ma privo di senso.
54. Perché una maggiorazione piccola dà certezza e una grande non dice niente.

→ verifica: [[24 Compendio unico - tutto l'esame in un file#PARTE III — PATTERN DI CODICE DA SAPERE A MEMORIA|24 Parte III]] · le correzioni delle prove svolte

---

> **Regola d'uso finale.** Se una domanda ti esce in meno di 20 secondi, è acquisita: non tornarci. Le ore che restano vanno **solo** sulle domande segnalate. Rileggere ciò che sai già è la forma più costosa di rassicurazione.
