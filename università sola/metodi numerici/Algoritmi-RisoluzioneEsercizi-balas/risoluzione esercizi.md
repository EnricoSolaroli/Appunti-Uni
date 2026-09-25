## Perturbare una matrice

## Eq non lineari

```python
def molteplicita_zero(f,x0,max_order=10):
    x=sym.symbols('x')
    for m in range(0,max_order):
        df = sym.diff(f,x,m) #m stabilisce l'ordine della derivata crazy
        if df.subs(x,x0) != 0:
            return m

    return None
```

```python
fs=x**4-9*x**2+4*x+12 #funzione definita con sympy usando symbols
a=-4
b=4
xx1 = np.linspace(a,b,100)
f1=sym.lambdify(x,fs,np) # da funzione analitica a funzione numerica
plt.plot(xx1,f1(xx1),xx1,np.zeros_like(xx1)) #x, funzione e x con y=0 cosi da tracciare retta

#poi controlli i zero che vedi nel grafico...
alpha1=-3
m1 = molteplicita_zero(fs,alpha1)
print("Molteplicità della radice ",alpha1, "-->",m1)

alpha2=-1
m2 = molteplicita_zero(fs,alpha2)
print("Molteplicità della radice ",alpha2, "-->",m2)

alpha3=2
m3 = molteplicita_zero(fs,alpha3)
print("Molteplicità della radice ",alpha3, "-->",m3)
```

![[Pasted image 20260603163234.png]]

```python
#primo intervallo di studio, dedotto dal grafico
a1=-4
b1=-2.3
tolx=1e-12
tolf=1e-12
maxit = 100
```

```python
zero_b,it,v_xk = zeri.metodo_bisezione(f1,a1,b1,tolx,tolf)

if zero_b is not None and it is not None and v_xk is not None:
    print("Soluzione bisezione ",zero_b,"n iterazioni",it)
    if it>4:
        print("Ordine bisezione --> ",zeri.stima_ordine(v_xk,it)) #lista iterati e numero iterazioni

zero_f,it_f,v_xkf = zeri.falsi(f1,a1,b1,maxit,tolx,tolf)
if zero_f is not None and it_f is not None and v_xkf is not None:
    print("Soluzione falsi ",zero_f,"n iterazioni",it_f)
    if it_f>4:
        print("Ordine falsi --> ",zeri.stima_ordine(v_xkf,it_f)) #lista iterati e numero iterazioni

#tocca a corde
#definisco coefficiente angolare
#definisco punto innesco guardando grafico

coeff_ang=(f1(b1)-f1(a1))/(b1-a1)
x0c = -3.5 #punto di innesco

zero_c,it_c,v_xkc = zeri.corde(f1,a1,b1,coeff_ang,x0c,tolx,tolf,maxit)
if zero_c is not None and it_c is not None and v_xkc is not None:
    print("Soluzione corde ",zero_c,"n iterazioni",it_c)
    if it_c>4:
        print("Ordine corde --> ",zeri.stima_ordine(v_xkc,it_c)) #lista iterati e numero iterazioni


#newton
#definisco la sua derivata e punto innesco

x0n= -4.0
dfs1=sym.diff(fs,x,1) #derivo sulla funzione analitica
df1=sym.lambdify(x,dfs1,np)

zero_n,it_n,v_xkn = zeri.newton(f1,df1,x0n,tolx,tolf,maxit)
if zero_n is not None and it_n is not None and v_xkn is not None:
    print("Soluzione newton ",zero_n,"n iterazioni",it_n)
    if it_n>4:
        print("Ordine newton --> ",zeri.stima_ordine(v_xkn,it_n)) #lista iterati e numero iterazioni


#secanti
#due punti vicini per secanti

xm1s= -4
x0s= -3.8

zero_s,it_s,v_xks = zeri.secanti(f1,xm1s,x0s,tolx,tolf,maxit)
if zero_s is not None and it_s is not None and v_xks is not None:
    print("Soluzione secanti ",zero_s,"n iterazioni",it_s)
    if it_s>4:
        print("Ordine secanti --> ",zeri.stima_ordine(v_xks,it_s)) #lista iterati e numero iterazioni
```

#### Problema
Utilizzare il metodo di bisezione ed il metodo di Newton per calcolare la radice quadrata di 5.  Analizzate i risultati.

```python
f5= lambda x: x**2-5
f5p= lambda x: 2*x
import utilities as util
a5=2.0
b5=5.0
xx=np.linspace(a5,b5,100)
plt.plot(xx,f5(xx),xx,np.zeros_like(xx))
plt.show()
tolx = 1e-10
tolf=1e-10
maxit=1000
x05=4.5
zero_b_4,it_b_4,xk_b_4 = zeri.metodo_bisezione(f5, a5, b5, tolx,tolf)
zero_n_4,it_n_4,xk_n_4 = zeri.newton(f5, f5p, x05,tolx, tolf,100)
alpha=np.sqrt(5.0)
ekb_sqrt=np.abs(xk_b_4-alpha)
ekn_sqrt=np.abs(xk_n_4-alpha)

plt.semilogy(np.arange(it_b_4),ekb_sqrt,'gd--',np.arange(it_n_4),ekn_sqrt,'ro-')
```

## Sistemi eq non lineari

```python
#definiamo le funzioni
x_sym, y_sym = sym.symbols('x_sym y_sym')
```

```python
def F_sym(f1_sym,f2_sym):
    return sym.Matrix([[f1_sym(x_sym,y_sym)], [f2_sym(x_sym,y_sym)]])
```

```python
#Fase 1: Definizione Simbolica e Calcolo dello Jacobiano

f1_sym = lambda x_sym,y_sym: 2*x_sym - sym.cos(y_sym)   
f2_sym= lambda x_sym,y_sym: sym.sin(x_sym) + 2*y_sym

#Fase 2

# Calcolo della matrice Jacobiana simbolicamente
J_sym = F_sym(f1_sym,f2_sym).jacobian(sym.Matrix([x_sym, y_sym]))

# Converte la matrice jacobiana Simbolica in una funzione che può essere valutata numericamente mediante lambdify
J_numerical = sym.lambdify([x_sym, y_sym], J_sym, np)

# Converte il vettore di funzioni Simbolico in una funzione che può essere valutata numericamente mediante lambdify
F_numerical = sym.lambdify([x_sym, y_sym], F_sym(f1_sym,f2_sym), np)
```

```python
#Fase 3: Localizzazione Grafica dell'Iterato Iniziale
x = np.arange(-4,4,0.1)
y = np.arange(-4,4,0.1)

#creo la griglia 2d con mesh con i punti x,y, contiene tutte le comb di x,y
X,Y = np.meshgrid(x,y)

Z=np.zeros_like(X) #creo piano stessa dim X

superfici = F_numerical(X,Y).squeeze()

fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')

# Plot della prima superficie z = f1(x,y)
ax.plot_surface(X, Y, superfici[0,:,:], cmap='viridis', alpha=0.5)

# Plot della seconda superficie z = f2(x,y)
ax.plot_surface(X, Y, superfici[1,:,:], cmap='Reds', alpha=0.5)

# Plot del piano z = 0 (serve per visualizzare dove le superfici si annullano)
ax.plot_surface(X, Y, Z, cmap='gray', alpha=0.5)

# Curve di livello z = 0 della prima funzione (f1(x,y) = 0)
plt.contour(X, Y, superfici[0,:,:], levels=[0], colors='black')

# Curve di livello z = 0 della seconda funzione (f2(x,y) = 0)
plt.contour(X, Y, superfici[1,:,:], levels=[0], colors='red')

# Mostra il grafico
plt.show()

# Curve di livello z = 0 della prima funzione (f1(x,y) = 0)
plt.contour(X, Y, superfici[0,:,:], levels=[0], colors='black')

# Curve di livello z = 0 della seconda funzione (f2(x,y) = 0)
plt.contour(X, Y, superfici[1,:,:], levels=[0], colors='red')

# Mostra il grafico
plt.show()

#Fase 4, guarda grafico e scegli punti di innesco

initial_guess = [-1,1]
tolX=1e-10
tolF=1e-10
max_iterations=100
update=8

Xs_N,it_N,errore_N=newton_raphson(initial_guess, F_numerical, J_numerical, tolX, tolF, max_iterations)
Xs_NC,it_NC,errore_NC=newton_raphson_corde(initial_guess, F_numerical, J_numerical, tolX, tolF, max_iterations)
Xs_NS,it_NS,errore_NS=newton_raphson_sham(initial_guess, F_numerical, J_numerical, tolX, tolF, update, max_iterations)

print("Soluzione Newton-Raphson ",Xs_N, "Numero di iterazioni Newton-Raphson ",it_N)
print("Soluzione Newton-Raphson Corde ",Xs_NC, "Numero di iterazioni Newton-Raphson Corde ",it_NC)
print("Soluzione Newton-Raphson Shamanskii ",Xs_NS, "Numero di iterazioni Newton-Raphson Shamanski ",it_NS, "con matrice jacobiana aggiornata ogni", update ,"iterazioni")


```

![[Pasted image 20260603165558.png]]


famo vede il punto trovato nel grafico a liv 0

```python
# Curve di livello z = 0 della prima funzione (f1(x,y) = 0)
plt.contour(X, Y, superfici[0,:,:], levels=[0], colors='black')

# Curve di livello z = 0 della seconda funzione (f2(x,y) = 0)
plt.contour(X, Y, superfici[1,:,:], levels=[0], colors='red')

plt.plot(Xs_N[0],Xs_N[1],'ro')

# Mostra il grafico
plt.show()
```

![[Pasted image 20260603165613.png]]

#### Problema del minimo 

```python
scelta_m=int(input("Scegli funzione di cui il minimo"))
match scelta_m:
    case 1:
        F_sym=0.5*(0.001*(x_sym-1)**2+(x_sym**2-y_sym)**2)
        initial_guess_m=[-3.0,-3.0]
    case 2:
        F_sym= (x_sym-2)**4 +(( x_sym-2)**2)*y_sym**2 + (y_sym+1)**2
        initial_guess_m=[1.0,1.0]
    case 3:
        F_sym= x_sym**4 +( x_sym+y_sym)**2*y_sym**2 + (sym.exp(x_sym)-1)**2
        initial_guess_m=[-1.0,3.0]
    case 4:
        F_sym=100*(y_sym-x_sym**2)**2+(1-x_sym)**2
        initial_guess_m=[-1.0,2.0]

#Calcolo simbolico del vettore gradiente        
grad_f = sym.derive_by_array(F_sym, (x_sym,y_sym))
print("Gradiente:", grad_f)
# Calcolo simbolico della matrice Hessiana con sympy.hessian
H = sym.hessian(F_sym, (x_sym,y_sym))
print("Hessiana:", H)

# Conversione delle espressioni simboliche in funzioni numeriche
grad_f_numerical = sym.lambdify((x_sym,y_sym), grad_f, 'numpy')
H_numerical = sym.lambdify((x_sym,y_sym), H, 'numpy')
F_numerical=sym.lambdify((x_sym,y_sym), F_sym, 'numpy')
```

```python
# Creazione dei vettori x e y nell'intervallo [-4, 4] con passo 0.1
x = np.arange(-4, 4, 0.1)
y = np.arange(-4, 4, 0.1)

# Creazione della griglia 2D di punti (X, Y)
# X e Y contengono tutte le combinazioni possibili di x e y
X, Y = np.meshgrid(x, y)
Z=F_numerical(X,Y)
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
ax.plot_surface(X, Y, Z, cmap='viridis', alpha=0.5)
```
![[Pasted image 20260605103710.png]]

```python
#Individuo con il metodo di Newton Raphson un punto critico della funzione in due variabili
Xs_min,it_min,errore_m=newton_raphson_minimo(initial_guess_m, grad_f_numerical, H_numerical, tolX, tolF, max_iterations)
print("Minimo ",Xs_min,"Numero di iterazioni ",it_min)
plt.semilogy(np.arange(it_min),errore_m,'r-o')
```
![[Pasted image 20260605103736.png]]

disegno sul grafico il punto minimo
```python
fig = plt.figure()
ax = fig.add_subplot(111, projection='3d')
# Plotta la superficie
ax.plot_surface(X, Y, Z, cmap='viridis',alpha=0.5)
plt.plot(Xs_min[0],Xs_min[1],'ro')
```
![[Pasted image 20260605103756.png]]

# Sistemi lineari
### Metodi diretti (fattorizzazione A)

**nota 1**: La funzione *scipy.linalg.lu(A)*  , presa in input una matrice A a rango massimo, restituisce in output le matrici $P^T$,L,U,  della fattorizzazione di LU della matrice A in maniera tale che PA=LU (restituisce la matrice di permutazione trasposta)

```python
import numpy as np
import scipy as sp
from scipy.linalg import lu
A=np.array([[2,1],[3,4]])
PT,L,U=lu(A)  #Restituisce in output la trasposta della matrice di Permutazione
P=PT.copy()   #P è la matrice di permutazione
print("A=",A)
print("L=",L)
print("U=",U)
print("P=",P)
#LU è la fattorizzazione di P*A (terorema 2)
A1=P@A # equivale al prodotto matrice x matrice np.dot(P,A)
A1Fatt=L@U # equivale a np.dot(L,U)
print("Matrice P*A \n", A1)
print("Matrice ottenuta moltipicando L ed U \n",A1Fatt)
```
-> out
 ```
A= [[2 1]
 [3 4]]
L= [[1.         0.        ]
 [0.66666667 1.        ]]
U= [[ 3.          4.        ]
 [ 0.         -1.66666667]]
P= [[0. 1.]
 [1. 0.]]
Matrice P*A 
 [[3. 4.]
 [2. 1.]]
Matrice ottenuta moltipicando Le ed U 
 [[3. 4.]
 [2. 1.]]
 ```

**nota 2**: La funzione *scipy.linalg.cholesky(a, lower=True)*, presa in input una matrice simmetrica e definta positiva restituisce in output la matrice L triangolare inferiore tale che $A=L \cdot L^T$. Se la matrice in input non è definita positiva, restituisce un errore.

```python
from scipy.linalg import cholesky
A=np.array([[2,1,3],[1,5,7],[3,7,12]])
print(A)

L=cholesky(A,lower=True)
print(L)
A1=L@L.T
print("A1=\n",A1)
```

**nota 3**:La funzione *scipy.linalg.qr(a)*, presa in input una matrice A (nxn)  a rango massimo, restituisce in output le matrici Q (ortogonale di dimensione nxn) ed una matrice R (nxn) triangolare superiore tale che $A=Q \cdot R$
```python
from scipy.linalg import qr
A=np.array([[2,1,3],[1,5,7],[3,7,12]])
Q,R=qr(A)
print("Q=",Q)
print("R=",R)
A1=Q@R
print(A1)
```

#### implementazione di LU solve

**!!** la fattorizzazione LU richiede che A sia quadrata.

Definisce una funzione per risolvere il sistema lineare Ax = b
```python
def LUsolve(P,L,U,b):
    # utilizzando la fattorizzazione LU già calcolata (con pivoting).

    pb = P@b

    y,flag = ST.Lsolve(L,pb)
    # Risolve il sistema triangolare inferiore:
    # L y = P b
    # Restituisce y e un flag che segnala eventuali problemi (es. elemento diagonale nullo)

    if flag == 0:
        x,flag = ST.Usolve(U,y)
        # Risolve il sistema triangolare superiore:
        # U x = y
        # ottenendo la soluzione finale x.
    else:
        return [],flag

    return x, flag
```

**esercizio**
```python
from SolveTriangular import *

A = np.array([[2, 5, 8, 7], [5, 2, 2, 8], [7, 5, 6, 6], [5, 4, 4, 8]],dtype=float) #array
print("A=",A)
b=np.sum(A,axis=1).reshape(4,1)  # b scelto in modo che x risulti 1,1,...
print("b=",b)

PT,L,U = scipy.linalg.lu(A)
P=PT.T.copy() #copio la trasposta di PT, uso poi su b per sistemare i termini noti.

print("P= \n",P)
print("L=\n",L)
print("U=\n",U)

#Le permutazioni di righe fatte sulla matrice vengono effettuate anche sul termine noto
x,flag = LUsolve(P,L,U,b)
print("flag= \n", flag, "\n x= \n",x)
```

in 23 aprile troviamo anche la funzione nsolve... che risolvere piu sistemi lineari aventi la stessa matrice di coefficienti

```python
def solve_nsis(A, B):
    # Definisce una funzione che risolve più sistemi lineari
    # aventi la stessa matrice dei coefficienti A e diversi termini noti colonne della matrice B.
    
    m, n = A.shape
    # Estrae le dimensioni della matrice A:
    # m = numero di righe, n = numero di colonne.
    
    flag = 0
    # Inizializza una variabile flag per segnalare eventuali problemi numerici,
    # ad esempio elementi diagonali nulli durante la risoluzione triangolare.
    
    if n != m:
        # Controlla che A sia quadrata.
        # La fattorizzazione LU per risolvere Ax=b richiede A quadrata.
        
        print("Matrice non quadrata")
        # Stampa un messaggio di errore se A non è quadrata.
        
        return []
        # Interrompe la funzione.
        
    X = np.zeros((n, n))
    # Inizializza la matrice X che conterrà le soluzioni.
    # Ogni colonna di X sarà la soluzione di un sistema lineare.
    
    PT, L, U = scipy.linalg.lu(A)
    # Calcola la fattorizzazione LU con pivoting della matrice A.
    # La funzione lu(A) restituisce le matrici PT, L, U tali che:
    # A = PT @ L @ U
    # oppure, in base alla convenzione usata, P @ A = L @ U.
    
    P = PT.T.copy()
    # Calcola la trasposta di PT.
    # Serve per ottenere la matrice di permutazione P coerente
    # con la forma P A = L U.
    
	for i in range(n):
		# Ciclo sulle colonne di B.
		# Ogni colonna B[:, i] rappresenta un diverso termine noto.
		
		y, flag = ST.Lsolve(L, P @ B[:, i]) #prende la colonna i
		# Risolve il sistema triangolare inferiore:
		# L y = P b_i
		# dove b_i è la i-esima colonna di B.
		if flag == 0:
			# Se non sono stati rilevati errori, procede alla risoluzione.
			x, flag = ST.Usolve(U, y)
			# Risolve il sistema triangolare superiore:
			# U x = y
			# ottenendo la soluzione del sistema A x = b_i.
			X[:, i] = x.reshape(n,)
			# Inserisce la soluzione x nella i-esima colonna della matrice X.
		else:
			# Questo ramo verrebbe eseguito se flag fosse diverso da zero.
			
			print("Elemento diagonale nullo")
			# Segnala la presenza di un elemento diagonale nullo,
			# che impedisce la risoluzione triangolare.
			
			X = []
	# In caso di errore, restituisce una lista vuota al posto della matrice soluzione.
    return X
    # Restituisce la matrice X contenente tutte le soluzioni. 
```


##### matrice inversa con metodo LU

```python
#CALCOLO DELL'INVERSA
A_2=np.array([[1, 2, 3, 4], [2, -4, 6, 8],[-1, -2, -3, -1],[ 5, 7, 0 ,1]],dtype=float)
m,n=A_2.shape
B=np.eye(m) #Si da come matrice B l'identità: così si ottiene per X l'inversa
X=solve_nsis(A_2,B) 
print("my inversa \n",X)
print("Inversa con linalg \n ",np.linalg.inv(A_2))  
```

##### calcolo del determinante sfruttando LU
Sfruttando la fattorizzazione PA=LU  di una delle matrici del punto precedente, calcolarne il determinante.

```python
PT, L_1, U_1 = scipy.linalg.lu(A_2)
# Calcola la fattorizzazione LU con pivoting della matrice A_2.
# La funzione lu restituisce matrici tali che:
# P @ A_2 = L_1 @ U_1 (oppure A_2 = P^T @ L_1 @ U_1 a seconda della convenzione).
# Qui PT rappresenta la matrice di permutazione (o la sua trasposta).

P = PT.copy()
# Copia la matrice di permutazione PT in P.
# Serve per utilizzare P nel calcolo del determinante.

deterA2 = np.prod(np.diag(U_1)) * np.linalg.det(P)
# Calcola il determinante di A_2 sfruttando la fattorizzazione LU.
# Infatti:
# det(A) = det(P) * det(L) * det(U)
# Poiché L è triangolare inferiore con diagonale unitaria → det(L) = 1
# Quindi:
# det(A) = det(P) * det(U)
# e det(U) = prodotto degli elementi diagonali di U_1.

# Nota teorica:
# In teoria, det(P) = (-1)^s, dove s è il numero di scambi di righe effettuati
# durante il pivoting. Qui però si usa direttamente np.linalg.det(P)
# per comodità, senza ricostruire esplicitamente s.

print("determinante sfruttando fattorizzazione LU", deterA2,
      "determinante sfruttando la funzione np.linalg.det ", np.linalg.det(A_2))
# Stampa il determinante calcolato tramite LU e quello calcolato
# direttamente con la funzione numpy.
# Serve per verificare la correttezza del calcolo teorico.
```

Per qualsiasi matrice triangolare (sia superiore che inferiore), **il determinante è semplicemente il prodotto degli elementi sulla sua diagonale principale**. Questo abbatte drasticamente il costo computazionale.
L per definizione ha la diagonale di 1, mentre U il suo det è `np.prod(np.diag(U_1))`.

#### implementazione di QR
```python
    Q,R=sp.linalg.qr(A)

    yqr = Q.T @ b
    xqr,flag = Usolve(R,yqr)

    err_relativoQR.append(np.linalg.norm(xqr-xesatta,2)/np.linalg.norm(xesatta,2))
```

### Metodi iterativi
```python
A=np.array([[8,1,3],[3,5,1],[1,1,17]],dtype=float)

print("Indice di condizionamento di A ",np.linalg.cond(A))
toll=1e-8
it_max=100
n=A.shape[0]
x0=np.zeros(A.shape[0]).reshape(n,1)
b=np.sum(A,axis=1).reshape(n,1) # b somma delle colonne cosi che risultato x venga 1

#jacobi
sol,it,err_vet=jacobi(A,b,x0,toll,it_max)
plt.semilogy(np.arange(it),err_vet)
print("sol=\n ",sol,"\n it ",it)

solgs,itgs,err_vet_gs=gauss_seidel(A,b,x0,toll,it_max)
print("solgs= \n",solgs,"\n it ",itgs)
plt.semilogy(np.arange(itgs),err_vet_gs)

plt.show()
```

##### per gauss seidel sor
Si utilizza il metodo di Gauss-Seidel con rilassamento (SOR) scegliendo un parametro ottimale ω per accelerare la convergenza rispetto al metodo di Gauss-Seidel standard.

In pratica, il metodo viene reso dipendente da un parametro ω, determinato in modo tale che il raggio spettrale della matrice di iterazione del metodo SOR sia minore di quello del metodo di Gauss-Seidel. Questo comporta una riduzione più rapida dell’errore e quindi una maggiore velocità di convergenza.

```python
def rho_T_Jac(A):                      
	# Definisce una funzione che calcola il raggio spettrale della matrice di iterazione di Jacobi
	
    d=np.diag(A)                      # Estrae la diagonale della matrice A (vettore dei coefficienti diagonali)

    n=A.shape[0]                      # Salva la dimensione della matrice (numero di righe)
    
    M=np.diag(d)
    invM=np.linalg.inv(M)             # Costruisce la matrice diagonale inversa D^{-1}

    E=np.tril(A,-1)                   # Estrae la parte triangolare inferiore di A (senza diagonale)
    F=np.triu(A,1)                    # Estrae la parte triangolare superiore di A (senza diagonale)

    N=-(E+F)                          # Costruisce N = -(E + F), cioè l'opposto della parte non diagonale

    T=invM@N                          # Costruisce la matrice di iterazione di Jacobi: T = D^{-1}N

    autovalori=np.linalg.eigvals(T)   # Calcola gli autovalori della matrice di iterazione T

    raggiospettrale=np.max(np.abs(autovalori))  # Calcola il raggio spettrale (massimo modulo degli autovalori)

    return raggiospettrale            # Restituisce il raggio spettrale
```

```python
rho_TJ4=rho_T_Jac(A4)
omega_ott4=2.0/(1+np.sqrt(1-rho_TJ4**2))
print("Omega ottimo ", omega_ott4)

solgs_sor4,itgs_sor4,err_vet_gs_sor4=
		gauss_seidel_sor(A4,b4,x0,toll,it_max,omega_ott4)
print("solgs_sor=",solgs_sor4,"it ",itgs_sor4)
```

**ps**: riguardo ancora lab 28 aprile

### metodi discendenti
```python
# Parametri
A=np.array([[8,4],[4,3]]) 
print("--------",np.linalg.det(A))
b=np.array([[8.0],[10.0]])          
x0 = np.array([[0.0], [0.0]])      # Punto iniziale

toll = 1e-10
itmax = 500

x_G, vet_er, iterates, it = steepestdescent_CL(A,b,x0,itmax,toll)
```

un'altro esempio
```python
arr_itG = []
arr_itGC = []
arr_cond = []
for i in range(10,100,2):
    A = creaPoisson(i)

    arr_cond.append(np.linalg.cond(A))
    
    #parametri
    b = np.sum(A,axis=1).reshape(A.shape[0],1)
    x0 = np.zeros_like(b)
    xesatta = np.ones(i).reshape(i,1)
    itmax=10000
    toll=1e-8

    x_G, vet_erG, iteratesG, itG = steepestdescent(A,b,x0,itmax,toll)
    arr_itG.append(itG)

    x_GC, vet_erGC, iteratesGC, itGC = conjugate_gradient(A,b,x0,itmax,toll)
    arr_itGC.append(itGC)
```

### Sistemi sovradeterminati
risoluzione di un esercizio in cui ci vengono dati dei dati e dobbiamo trovare il l'approssimazione ai minimi quadrati

```python
scelta_m=int(input("Scegli set di dati"))

match scelta_m:
     case 1:
        x = np.array([-3.5,-3, -2, -1.5, -0.5, 0.5, 1.7, 2.5, 3]) 
        y = np.array([-3.9,-4.8,-3.3,-2.5, 0.3,1.8,4,6.9,7.1])
     case 2:
        x = np.array( [-3.14,  -2.4,  -1.57,  -0.7,  -0.3,  0,  0.4,  0.7,  1.57]  )
        y = np.array(  [0.02,  -1, -0.9,   -0.72,   -0.2,   -0.04,  0.65,   0.67,   1.1] )
     case 3:
        x = np.array([1.001, 1.004, 1.005,1.0012, 1.0013,   1.0014,   1.0015,  1.0016])
        y = np.array([-1.2,-1.0, -0.98,-0.95,-0.9, -1.15, -1.1, -1])

m = x.shape[0]
n=1 #grado del polinomio di regressione
n1=n+1 #gradi di liberta

A = np.vander(x,increasing=True)[:,:n1] #matrice di vandermonde x^0+x^1 ->  1 + x^1
print(A)

alpha_EQN=eqnorm(A,y) 
residuo_eqn=np.linalg.norm(A@alpha_EQN-y.reshape(m,1),2)**2

#il residuo e sempre ||Ax-b||

alpha_QR,residuo_QR=qrLS(A,y)
alpha_SVD,residuo_SVD=SVDLS(A,y)

print("Residuo EQN ",residuo_eqn)
print("residuo QR ",residuo_QR)
print("Residuo SVD ",residuo_SVD)

#abbiamo i coefficienti del polinomio quindi possiamo calcolarci i punti del polinomio y=a+bx alpha=[a,b]

xv=np.linspace(np.min(x),np.max(x),100)
pol_EQN=np.polyval(np.flip(alpha_EQN),xv) #vuole i coefficienti dal grado piu alto al piu basso, quindi flip per invertire

pol_EQR=np.polyval(np.flip(alpha_QR),xv) #parametri: matrice coefficienti e punti da valutare
pol_SVD=np.polyval(np.flip(alpha_SVD),xv)

plt.plot(x,y,"ro",xv,pol_EQR,xv,pol_EQN,xv,pol_SVD)
plt.show()


```

un'altro esempio interessante
```python
x2 = np.array([0.0004, 0.2507, 0.5008, 2.0007, 8.0013]);
y2 = np.array([0.0007, 0.0162, 0.0288, 0.0309, 0.0310]);

m2=x2.shape[0]
n2=1
n1=n2+1
A2 = np.vander(x2,increasing=True)[:,:n1]
condA2=np.linalg.cond(A2)
print("condizionamento di A2 ",condA2)
#Poichè la matrice A è ben condizionata uso il metodo delle equazioni normali,
#la matrice G=A.T@A avrà un indice di condizionamento K(A)^2 contenuto

alphaEQN = eqnorm(A2,y2)
residuoEQN = np.linalg.norm(A2@alphaEQN-y2.reshape(m,1))**2

print("Residuo EQN ",residuo_eqn)

xv = np.linspace(np.min(x2),np.max(x2),100)

polEQN = np.polyval(np.flip(alphaEQN),xv)

plt.plot(x2,y2,"ro",xv,polEQN)
plt.show()

n=2 #parabola di regressione: grado 2
n1=n+1  # gradi di libertà
A2=np.vander(x2,increasing=True)[:,:n1]
condA2=np.linalg.cond(A2)
print("condizionamento di A2 ",condA2)
#Poichè la matrice è mediamente ben condizionata (Ha un indice di condizionamento pari a  65.67493525624782
# (quinfi A.T@A avrà indice di condizionamento pari al quadrato dell'indice di condionamento di A)
#è quindi preferibile usare il metodo QR
alpha2,residuo_QR=qrLS(A2,y2)
xv=np.linspace(np.min(x2),np.max(x2),100)
pol2=np.polyval(np.flip(alpha2),xv)
plt.plot(xv,pol2,x2,y2,'ro')
plt.show()
print("residuo ",residuo_QR)

```
![[Pasted image 20260623120157.png]]

