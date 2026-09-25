
### 1. Creazione di Array

| **Operazione**                                   | **Descrizione**                                                                   |
| ------------------------------------------------ | --------------------------------------------------------------------------------- |
| `np.array()`                                     | Converte liste o tuple in un array NumPy.                                         |
| `np.arange(start, stop, step)`                   | Crea un array di valori equidistanti con uno step specificato.                    |
| `np.linspace(start, stop, num)`                  | Crea un array di `num` valori equidistanti in un intervallo.                      |
| `np.zeros(shape)` / `np.zeros_like(arr)`         | Crea un array (o una matrice) riempito di zeri.                                   |
| `np.ones(shape)` / `np.ones_like(arr)`           | Crea un array riempito di uni.                                                    |
| `np.full(shape, val)` / `np.full_like(arr, val)` | Crea un array riempito con un valore costante specificato.                        |
| `np.repeat(arr, reps)`                           | Ripete ogni singolo elemento di un array per `reps` volte.                        |
| `np.tile(arr, reps)`                             | Ripete l'intero array per `reps` volte.                                           |
| `np.eye(N, k)`                                   | Crea una matrice identità con la diagonale eventualmente shiftata (`k`).          |
| `np.identity(N)`                                 | Crea una matrice identità quadrata.                                               |
| `np.diag(arr)`                                   | Estrae la diagonale da una matrice o crea una matrice diagonale da un vettore 1D. |

### 2. Attributi degli Array

|**Attributo**|**Descrizione**|
|---|---|
|`.ndim`|Restituisce il numero di dimensioni (assi) dell'array.|
|`.shape`|Restituisce una tupla con le dimensioni dell'array (righe, colonne, ecc.).|
|`.size`|Restituisce il numero totale di elementi presenti nell'array.|
|`.dtype`|Restituisce il tipo di dato degli elementi (es. `int64`, `float32`, `bool`, `complex128`).|
|`.itemsize`|Restituisce la dimensione in byte di ciascun singolo elemento.|
|`.nbytes`|Restituisce lo spazio di memoria totale occupato dall'array in byte.|
|`.flags`|Fornisce informazioni sulla disposizione in memoria (es. C-contiguous o F-contiguous).|
|`.base`|Punta all'array originale se l'oggetto è una "view", altrimenti restituisce `None`.|

### 3. Numeri Casuali (Sub-modulo `np.random`)

|**Operazione**|**Descrizione**|
|---|---|
|`np.random.seed(seed)`|Imposta il seme per garantire la riproducibilità della generazione casuale.|
|`np.random.rand(m, n)`|Genera numeri casuali con distribuzione uniforme nell'intervallo [0, 1).|
|`np.random.randn(m, n)`|Genera numeri casuali campionati da una distribuzione normale standard.|
|`np.random.randint(low, high, size)`|Genera numeri interi casuali in un intervallo [low, high).|
|`np.random.shuffle(arr)`|Mescola gli elementi di un array _in-place_.|
|`np.random.permutation(arr)`|Restituisce una copia dell'array con gli elementi permutati casualmente.|

### 4. Operazioni Matematiche Element-wise (u-functions)

|**Operazione**|**Descrizione**|
|---|---|
|`+`, `-`, `*`, `/`|Addizione, sottrazione, moltiplicazione (Hadamard) e divisione elemento per elemento.|
|`np.exp(arr)`|Esponenziale naturale elemento per elemento.|
|`np.log(arr)`|Logaritmo naturale.|
|`np.log2(arr)`|Logaritmo in base 2.|
|`np.log10(arr)`|Logaritmo in base 10.|
|`np.sqrt(arr)`|Radice quadrata.|
|`np.sin(arr)`, `np.cos(arr)`|Funzioni trigonometriche (seno e coseno).|
|`np.radians(arr)`|Converte gli angoli da gradi a radianti.|

### 5. Statistiche e Aggregazione

_Queste operazioni supportano il parametro `axis` (es. `axis=0` per colonne, `axis=1` per righe)._

|**Operazione**|**Descrizione**|
|---|---|
|`np.sum(arr)`|Somma degli elementi.|
|`np.mean(arr)`|Media aritmetica degli elementi.|
|`np.median(arr)`|Mediana degli elementi.|
|`np.min(arr)`, `np.max(arr)`|Valore minimo e massimo.|
|`np.argmin(arr)`|Indice dell'elemento con il valore minimo.|

### 6. Confronto e Boolean Indexing

|**Operazione**|**Descrizione**|
|---|---|
|`np.minimum(arr1, arr2)`|Minimo elemento per elemento tra due array.|
|`np.maximum(arr1, arr2)`|Massimo elemento per elemento tra due array.|
|`==`, `<`, `>`, `|`,` ~`|
|`np.where(cond, true_val, false_val)`|Sostituisce i valori di un array basandosi su una condizione booleana.|
|`np.argwhere(cond)`|Restituisce gli indici degli elementi che soddisfano una data condizione.|

### 7. Ordinamento

|**Operazione**|**Descrizione**|
|---|---|
|`np.sort(arr, axis)`|Ordina un array lungo un asse e restituisce una **copia**.|
|`arr.sort(axis)`|Ordina un array _in-place_ (modifica l'originale).|
|`np.argsort(arr, axis)`|Restituisce gli indici che permettono di ordinare l'array.|

### 8. Viste e Copie (Condivisione Memoria)

|**Operazione**|**Descrizione**|
|---|---|
|`np.copy(arr)` / `arr.copy()`|Crea una "deep copy" (copia profonda) indipendente dall'array originale.|
|`arr.view()`|Crea una vista che condivide la stessa memoria dell'array originale.|
|`np.shares_memory(a, b)`|Verifica se due array condividono la stessa area di memoria (ritorna `True` o `False`).|

### 9. Manipolazione di Struttura e Dimensioni

|**Operazione**|**Descrizione**|
|---|---|
|`arr.T`|Restituisce la matrice trasposta (è una vista).|
|`arr.reshape(shape)`|Cambia la shape dell'array restituendo una vista (supporta `-1` per il calcolo automatico).|
|`arr.resize(shape)`|Modifica la shape dell'array _in-place_.|
|`arr.flatten()`|Appiattisce una matrice in un array 1D restituendo una **copia**.|
|`arr.ravel()`|Appiattisce una matrice in un array 1D restituendo una **vista** (se possibile).|
|`np.append(arr, val, axis)`|Aggiunge elementi alla fine di un array.|
|`np.insert(arr, pos, val)`|Inserisce elementi in una specifica posizione.|
|`np.delete(arr, pos, axis)`|Rimuove uno o più elementi agli indici specificati.|
|`np.concatenate((a, b), axis)`|Unisce due o più array lungo un asse esistente.|
|`np.vstack((a, b))` / `np.r_[a, b]`|Impila array verticalmente (sulle righe).|
|`np.hstack((a, b))` / `np.c_[a, b]`|Impila array orizzontalmente (sulle colonne).|
|`np.newaxis`|Aumenta la dimensionalità di un array (es. trasforma 1D in colonna o riga 2D).|
|`np.unique(arr)`|Trova e restituisce gli elementi unici in un array, opzionalmente con il conteggio delle occorrenze (`return_counts=True`).|

### 10. Algebra Lineare

|**Operazione**|**Descrizione**|
|---|---|
|`np.dot(a, b)` / `a.dot(b)`|Calcola il prodotto scalare tra vettori o la moltiplicazione tra matrici.|
|`a @ b`|Operatore Python per la moltiplicazione matriciale (equivalente a `.dot` in contesti 2D).|