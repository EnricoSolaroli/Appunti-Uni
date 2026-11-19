[Cheat Sheet Ricerca Operativa](<file:///Users/enrico/Library/Mobile Documents/iCloud~md~obsidian/Documents/obsidian_sola/università/ricerca operativa/appunti whatsApp/Cheat Sheet Ricerca Operativa.pdf>)

# Sensitività di un lato dell'MST – Cut Optimality Conditions

>> Nota ricavata dal PDF "Cheat Sheet Ricerca Operativa" (appunti WhatsApp, non materiale del prof). Ho tenuto solo la parte corretta, cioè la procedura finale. La prima metà del PDF conteneva ipotesi sbagliate: un lato {1,4} che nel grafo non esiste, e $c_{24} = 2$, da cui un aumento massimo di 3 invece di 4. Ho ricontrollato tutti i numeri sul grafo, anche ricalcolando l'albero con Kruskal.

## Indice

1. [[#Il testo dell'esercizio|Il testo dell'esercizio]]
2. [[#Il risultato teorico|Cut Optimality Conditions]]
3. [[#Procedura passo per passo|Procedura passo per passo]]
4. [[#Risposta|Risposta e soluzione ufficiale]]
5. [[#Procedura generale|Procedura generale]]

---
## Il testo dell'esercizio

![[ROWA-mst-1.png|600]]

Punto (b): albero di copertura minimo (Minimum Spanning Tree, MST), costo 24. Le direzioni degli archi si ignorano.

![[ROWA-mst-2.png|600]]

Punto (c): *considerando la soluzione ottima ottenuta al punto (b), indicare qual è il massimo aumento di costo che può essere applicato al lato {2,4} prima di dover modificare la soluzione. Motivare la risposta in modo dettagliato indicando i risultati teorici utilizzati.* (3 punti)

---
## Il risultato teorico

**Cut Optimality Conditions.** Se si toglie un lato $\{i,j\}$ dall'albero, l'albero si spezza in due componenti $S$ (che contiene $i$) e $V \setminus S$ (che contiene $j$). Il **taglio** $(S, V\setminus S)$ è l'insieme di **tutti** i lati del grafo, non solo quelli dell'albero, con un estremo in $S$ e l'altro in $V \setminus S$.

Un albero ricoprente è minimo **se e solo se** ogni suo lato ha costo **minore o uguale** a quello di ogni altro lato del taglio che genera.

Se così non fosse, si potrebbe scambiare quel lato con uno più economico dello stesso taglio: le due componenti resterebbero collegate e il costo totale scenderebbe. È lo stesso principio su cui si basa Prim.

---
## Procedura passo per passo

**Passo 1 – Lati dell'albero ottimo** (dal punto b):
{1,2}, {2,4}, {3,4}, {4,5}, {3,6}, {5,7}, {5,8}, {7,9}, {8,10}

**Passo 2 – Togli {2,4} e trova i due gruppi**, usando solo i lati dell'albero. Da 2 si arriva a 1 tramite {1,2} e da 1 non si va oltre, quindi:
$S = \{1,2\}$ e $V \setminus S = \{3,4,5,6,7,8,9,10\}$.

**Passo 3 – Lati del grafo che attraversano il taglio**, cioè con un estremo in $S$ e l'altro fuori:
{1,3}, {2,3}, {2,4}, {2,5}.

**Passo 4 – Costi**, letti dalla figura:

| Lato | Costo |
|---|---|
| {2,4} | 1 |
| {1,3} | 6 |
| {2,3} | 5 |
| {2,5} | 9 |

>> I costi si possono ricavare anche dalle etichette di Dijkstra del punto (a): $c_{24} = 7 - 6 = 1$, $c_{13} = 6$, $c_{25} = 15 - 6 = 9$. Ma dalla figura si fa prima, e {2,3} si legge solo lì.

**Passo 5 – Minimo fra gli altri lati del taglio** (escluso {2,4}): $\min\{6, 5, 9\} = 5$, il lato {2,3}.

**Passo 6 – Applica le Cut Optimality Conditions.** {2,4} resta nell'albero ottimo finché $c_{24} \le 5$.

---
## Risposta

- Il costo di {2,4} può salire **fino a 5** senza cambiare la soluzione.
- Poiché ora costa 1, l'**aumento massimo è 5 − 1 = 4**.
- Se supera 5 (per esempio 6), {2,4} esce dall'albero e al suo posto entra {2,3}.
- Nella risposta va citato il risultato usato, **Cut Optimality Conditions**: il testo lo chiede esplicitamente.

Soluzione ufficiale:

![[ROWA-mst-3.png|650]]

>> La soluzione ufficiale scrive $S \setminus V$, ma intende $V \setminus S$: è un refuso.
>> La soluzione ufficiale dice "fino al valore 5". Se la domanda chiede l'**aumento**, la risposta è 4. In caso di dubbio scrivi entrambe le cose, come sopra.
>> Con $c_{24} = 5$ esistono due alberi ottimi di pari costo (28), uno con {2,4} e uno con {2,3}: la soluzione attuale resta ottima. Con $c_{24} = 6$ conviene solo lo scambio. Verificato ricalcolando l'MST con Kruskal.
>> Il grafo ha anche altri alberi ottimi di costo 24, per esempio con {5,6} invece di {3,6}, perché ci sono molti lati di costo 2. La risposta non cambia: il taglio generato togliendo {2,4} è lo stesso.

---
## Procedura generale

Da applicare ogni volta che l'esame chiede il massimo aumento di costo di un lato dell'MST:

1. Togli il lato dall'albero e ottieni due componenti $S$ e $V \setminus S$, usando solo i lati dell'albero.
2. Elenca **tutti** i lati del grafo che collegano $S$ a $V \setminus S$.
3. Trova il costo minimo fra questi, escluso il lato in esame.
4. Quel costo è la soglia: il lato può crescere fino a lì (compreso) restando ottimo. Oltre, va sostituito con il lato più economico del taglio.
5. Aumento massimo = soglia − costo attuale. Cita le **Cut Optimality Conditions**.

>> Il caso opposto, cioè di quanto può **diminuire** il costo di un lato che **non** è nell'albero, si risolve con le *Path Optimality Conditions*. Si aggiunge il lato all'albero: si forma un ciclo, e il lato entra nell'albero quando il suo costo scende sotto quello del lato più costoso di quel ciclo.
