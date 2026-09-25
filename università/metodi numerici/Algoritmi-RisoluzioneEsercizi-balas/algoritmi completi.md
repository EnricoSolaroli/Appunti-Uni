## Codici zeri funzioni

```python
import numpy as np
import utilities as util 

def metodo_bisezione(fname, a, b, tolx,tolf):
     """
     Implementa il metodo di bisezione per il calcolo degli zeri di un'equazione non lineare.
    
     Parametri:
      f: La funzione da cui si vuole calcolare lo zero.
      a: L'estremo sinistro dell'intervallo di ricerca.
      b: L'estremo destro dell'intervallo di ricerca.
      tol: La tolleranza di errore.
    
     Restituisce:
      Lo zero approssimato della funzione, il numero di iterazioni e la lista di valori intermedi.
     """
     fa=fname(a)
     fb=fname(b)
     if np.sign(fa)*np.sign(fb)>=0:
         print("Non è possibile applicare il metodo di bisezione \n")
         return None, None,None
    
     it = 0
     v_xk = []
    
     max_it=int(np.ceil(np.log2((b - a) / tolx))) -1
     print("Max_It ",max_it)
     while abs(b - a) > tolx and it < max_it:
            xk = a+(b-a)/2
            #if it <=4:
            #      util.plot_bisezione_step(fname, a, b, xk, it, "Bisezione")
            v_xk.append(xk)
            it += 1
            fxk=fname(xk)
            if np.abs(fxk)<tolf:
              return xk, it, np.array(v_xk)
        
            if np.sign(fa)*np.sign(fxk)<0:  #la radice si trova nell'intervallo [a, xk].
              b = xk
              fb=fxk
            elif np.sign(fxk)*np.sign(fb)<0:   #la radice si trova nell'intervallo [xk, b].
              a = xk
              fa=fxk
        
     
     return xk, it, np.array(v_xk)


def falsi(fname, a, b, maxit, tolx,tolf):
 """
 Implementa il metodo di falsa posizione per il calcolo degli zeri di un'equazione non lineare.

 Parametri:
  f: La funzione da cui si vuole calcolare lo zero.
  a: L'estremo sinistro dell'intervallo di ricerca.
  b: L'estremo destro dell'intervallo di ricerca.
  tol: La tolleranza di errore.

 Restituisce:
  Lo zero approssimato della funzione, il numero di iterazioni e la lista di valori intermedi.
 """
 fa=fname(a);
 fb=fname(b);
 if np.sign(fa)*np.sign(fb)>=0:
     print("Non è possibile applicare il metodo di falsa posizione \n")
     return None, None,None

 it = 0
 v_xk = []
 
 fxk=tolf+1

 errore=tolx+1
 xk=None
 xprec=a
 
 while it < maxit  and abs(fxk) > tolf and errore > tolx :
        xk = a-fa*(b-a)/(fb-fa)
        #if it <=4:
            #util.plot_bisezione_step(fname, a, b, xk, it, "Regula Falsi")
        fxk=fname(xk)
        if np.abs(fxk)<tolf:
          return xk, it, np.array(v_xk)
    
        if np.sign(fa)*np.sign(fxk)<0:  #la radice si trova nell'intervallo [a, xk].
          b = xk
          fb=fxk
        elif np.sign(fxk)*np.sign(fb)<0:   #la radice si trova nell'intervallo [xk, b].
          a = xk
          fa=fxk
    
        if xk!=0:
             errore=abs(xk-xprec)/abs(xk)
        else:
             errore=abs(xk-xprec)
        
        xprec=xk
        v_xk.append(xk)
        it += 1
 return xk, it, np.array(v_xk)

def corde(fname,a,b,coeff_ang,x0,tolx,tolf,nmax):
    
     # coeff_ang è il coefficiente angolare della retta che rimane fisso per tutte le iterazioni
        v_xk=[]
        xk=x0
        
        it=0
        errorex=1+tolx
        erroref=1+tolf
        xk1=None

        if abs(coeff_ang) <= np.spacing(1):
           print("Metodo delle corde: coefficiente angolare nullo")
           return None, None, None
                       
        while it<nmax and  erroref>=tolf and errorex>=tolx :
           
           fxk=fname(xk)

        
           d=fxk/coeff_ang
           '''
           #xk= ascissa del punto di intersezione tra  la retta che passa per il punto
           (xi,f(xi)) e ha pendenza uguale a coeff_ang  e l'asse x
           '''
           xk1=xk-d
           
           #if it <= 5:
           #     util.plot_corde_step(fname, a, b, xk, xk1, coeff_ang,it);
           fxk1=fname(xk1)
           if xk1!=0:
                errorex=abs(d)/abs(xk1)
           else:
                errorex=abs(d)
           
           erroref=np.abs(fxk1)
           
           xk=xk1
           it=it+1
           v_xk.append(xk1)
          
        if it==nmax:
            print('Corde : raggiunto massimo numero di iterazioni \n')
            
        
        return xk1,it,np.array(v_xk)

def newton(fname,fpname,x0,tolx,tolf,nmax):
    
     # fpname è la lambda function contenente la derivata prima di fname
        v_xk=[]
        xk=x0
        
        it=0
        xk1=None
        errorex=1+tolx
        erroref=1+tolf
        while it<nmax and  erroref>=tolf and errorex>=tolx :
           
           fxk=fname(xk)
           fpxk=fpname(xk)
           if abs(fpxk)<=np.spacing(1):  #Se la derivata prima e' più piccola della precisione di macchina stop
             print("Newton: La derivata prima si annulla ")
             return None,None,None
        
           d=fxk/fpxk
                    
           '''
           #xk1= ascissa del punto di intersezione tra  la retta che passa per il punto
           (xk,f(xk)) e ha pendenza uguale a quella della tangente nel punto  e l'asse x
           '''
           xk1=xk-d  
           
           fxk1=fname(xk1)
           #util.plot_step(fname, xk, xk1, fpxk, it, titolo="Newton")
           if xk1!=0:
                errorex=abs(d)/abs(xk1)
           else:
                errorex=abs(d)
           
           erroref=np.abs(fxk1)

           v_xk.append(xk1)
 
           xk=xk1
           it=it+1
          
        if it==nmax:
            print('Newton : raggiunto massimo numero di iterazioni \n')
            
        
        return xk1,it,np.array(v_xk)

def newton_modificato(fname,fpname,m,x0,tolx,tolf,nmax):
     #Il codice implementa il metodo di Newton modificato per radici multiple.
     #m è la molteplicità della radice
     # fpname è la lambda function contenente la derivata prima di fname
        v_xk=[]
        xk=x0
        
        xk1=None
        it=0
        errorex=1+tolx
        erroref=1+tolf
        while it<nmax and  erroref>=tolf and errorex>=tolx :
           
           fxk=fname(xk)
           fpxk=fpname(xk)
           if abs(fpxk)<=np.spacing(1):  #Se la derivata prima e' pià piccola della precisione di macchina stop
             print("Newton Modificato: La derivata prima si annulla ")
             return None,None,None
        
           d=fxk/fpxk
                    
           '''
           #xk1= ascissa del punto di intersezione tra  la retta che passa per il punto
           (xk,f(xk)) e ha pendenza uguale a quella della tangente nel punto  e l'asse x
           '''
           xk1=xk-m*d  
           fxk1=fname(xk1)
           if xk1!=0:
                errorex=abs(d)/abs(xk1)
           else:
                errorex=abs(d)
           
           erroref=np.abs(fxk1)
           v_xk.append(xk1)
           xk=xk1
           it=it+1
           
          
        if it==nmax:
            print('Newton Modificato : raggiunto massimo numero di iterazioni \n')
            
        return xk1,it,np.array(v_xk)

def secanti(fname,xm1,x0,tolx,tolf,nmax):
        #Metodo delle secanti per il calcolo degli zeri di un'equazione non lineare.
        #xm1, x0 due iterati iniziali
        
        v_xk=[]
        
        it=0
        errorex=1+tolx
        erroref=1+tolf
        xkm1=xm1
        xk=x0
        xk1=None #Inizializzare xk1 fa sì che se non si entra nel while la funzionenon dà errore, dovendo restituire xk1
        while it<nmax and erroref>=tolf and errorex>=tolx:
            
            fxkm1=fname(xkm1)
            fxk=fname(xk)
            c_ang_k=(fxk-fxkm1)/(xk-xkm1)
            if np.abs(c_ang_k)<=np.spacing(1):
                print("Coefficiente angolare secanti troppo piccolo")
                return None, None, None
                
            d=fxk/c_ang_k
            
            #xk1 è l'ascissa del punto di intersezione tra la retta che passa due iterati precedenti e l'asse x
            xk1=xk-d
            #util.plot_secanti_step(fname, xkm1, xk, xk1, it)
            fxk1=fname(xk1)
            v_xk.append(xk1);
            #Criteri di arresto
            if xk1!=0:
                errorex=abs(d)/abs(xk1)
            else:
                errorex=abs(d)
                
            erroref=np.abs(fxk1)
            #Aggiornamento di xkm1 ed xk
            xkm1 = xk
            xk = xk1
            
            it=it+1;
           
       
        if it==nmax:
           print('Secanti: raggiunto massimo numero di iterazioni \n')
        
        return xk1,it,np.array(v_xk)

def stima_ordine(xk,iterazioni):
     #Vedi dispensa allegata per la spiegazione

      k=iterazioni-4
      p=np.log(abs(xk[k+2]-xk[k+3])/abs(xk[k+1]-xk[k+2]))/np.log(abs(xk[k+1]-xk[k+2])/abs(xk[k]-xk[k+1]));
     
      ordine=p
      return ordine
```

## Sistemi eq Non lineari
![[Pasted image 20260605103153.png]]

![[Pasted image 20260605103218.png]]

![[Pasted image 20260605103300.png]]

minimo
![[Pasted image 20260605103334.png]]


## iterativi

![[Pasted image 20260605102410.png]]

![[Pasted image 20260605102444.png]]

![[Pasted image 20260605102514.png]]

### extra
![[Pasted image 20260605102638.png]]

risolvere n sistemi $AX=B$ -> terra terra... per ogni colonna di X ci sta una colonna di B

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

    PT, L, U = lu(A)
    # Calcola la fattorizzazione LU con pivoting della matrice A.
    # La funzione lu(A) restituisce le matrici PT, L, U tali che:
    # A = PT @ L @ U
    # oppure, in base alla convenzione usata, P @ A = L @ U.

    P = PT.T.copy()
    # Calcola la trasposta di PT.
    # Serve per ottenere la matrice di permutazione P coerente
    # con la forma P A = L U.

    if flag == 0:
        # Se non sono stati rilevati errori, procede alla risoluzione.

        for i in range(n):
            # Ciclo sulle colonne di B.
            # Ogni colonna B[:, i] rappresenta un diverso termine noto.

            y, flag = ST.Lsolve(L, P @ B[:, i])
            # Risolve il sistema triangolare inferiore:
            # L y = P b_i
            # dove b_i è la i-esima colonna di B.

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

## metodi di discesa
![[Pasted image 20260626225719.png]]

![[Pasted image 20260626225833.png]]

```python
import scipy.linalg as spLin
from SolveTriangular import *
import matplotlib.pyplot as plt
```

eq normali

```python
def eqnorm(A, b):
    # Costruisce la matrice G = A^T A delle equazioni normali.
    # Il problema ai minimi quadrati min ||Ax - b||_2 viene trasformato
    # nel sistema lineare quadrato:
    #
    #       A^T A x = A^T b
    #
    # cioè:
    #
    #       G x = f
    #
    G = A.T @ A

    # Calcola l'indice di condizionamento della matrice G.
    # Questo valore misura quanto la soluzione del sistema sia sensibile
    # a piccoli errori nei dati o agli errori di arrotondamento.
    #
    # Un valore elevato di cond(G) indica un problema mal condizionato.
    # Inoltre, usando le equazioni normali, il condizionamento peggiora
    # perché generalmente vale:
    #
    #       cond(A^T A) ≈ cond(A)^2
    #
    condG = np.linalg.cond(G)
    print("Indice di condizionamento di G ", condG)

    # Costruisce il termine noto delle equazioni normali:
    #
    #       f = A^T b
    #
    f = A.T @ b

    # Applica la fattorizzazione di Cholesky alla matrice G.
    # Poiché G = A^T A è simmetrica e, se A ha colonne linearmente indipendenti,
    # definita positiva, può essere scritta come:
    #
    #       G = L L^T
    #
    # dove L è una matrice triangolare inferiore.
    L = spLin.cholesky(G, lower=True)

    # La matrice U è la trasposta di L.
    # Quindi U è triangolare superiore e si ha:
    #
    #       G = L U
    #
    # con LT = L^T.
    LT= L.T

    # Risolve il primo sistema triangolare:
    #
    #       L z = f
    #
    # tramite sostituzione in avanti.
    z, flag = Lsolve(L, f)

    # Se la soluzione del primo sistema è andata a buon fine,
    # risolve il secondo sistema triangolare:
    #
    #       U x = z
    #
    # tramite sostituzione all'indietro.
    if flag == 0:
        x, flag = Usolve(LT, z)

    # Restituisce il vettore x dei coefficienti della soluzione
    # ai minimi quadrati.
    return x
```

![[Pasted image 20260626230234.png]]

```python
def SVDLS(A, b):
    # La funzione risolve il problema ai minimi quadrati:
    #
    #       Ax ≈ b
    #
    # utilizzando la decomposizione ai valori singolari, cioè la SVD.
    # Questo metodo è particolarmente stabile dal punto di vista numerico,
    # soprattutto quando la matrice A è mal condizionata.

    # Si ricavano le dimensioni della matrice A.
    # m è il numero di righe, cioè il numero di dati disponibili.
    # n è il numero di colonne, cioè il numero di incognite del problema.
    m, n = A.shape

    # Si calcola la decomposizione ai valori singolari della matrice A:
    #
    #       A = U Σ V^T
    #
    # dove U e V sono matrici ortogonali, mentre Σ è una matrice diagonale
    # contenente i valori singolari.
    #
    # La funzione spLin.svd(A) restituisce:
    # - U: matrice dei vettori singolari sinistri;
    # - s: array monodimensionale contenente i valori singolari;
    # - VT: matrice V trasposta.
    U, s, VT = spLin.svd(A)

    # Poiché la funzione restituisce V trasposta, si ricostruisce V
    # calcolando la trasposta di VT.
    V = VT.T

    # Si definisce una soglia numerica per stabilire quali valori singolari
    # sono effettivamente significativi.
    #
    # np.spacing(1) rappresenta circa la precisione di macchina.
    # La soglia dipende anche dal numero di righe m e dal valore singolare
    # massimo s[0].
    thresh = np.spacing(1) * m * s[0]

    # Si calcola il rango numerico della matrice A contando quanti valori
    # singolari sono maggiori della soglia.
    #
    # I valori singolari troppo piccoli vengono trascurati perché potrebbero
    # causare instabilità numerica, amplificando gli errori di arrotondamento.
    k = np.count_nonzero(s > thresh)
    print("rango=", k)

    # Si proietta il vettore b sulla base ortonormale formata dalle colonne
    # della matrice U.
    #
    # In formule:
    #
    #       d = U^T b
    #
    # Questo rappresenta un cambio di coordinate del vettore b.
    d = U.T @ b

    # Si considerano solo le prime k componenti di d, cioè quelle associate
    # ai valori singolari significativi.
    d1 = d[:k].reshape(k, 1)

    # Si considerano allo stesso modo solo i primi k valori singolari.
    s1 = s[:k].reshape(k, 1)

    # Si risolve il sistema diagonale:
    #
    #       Σ c = d1
    #
    # Poiché Σ è diagonale, la soluzione si ottiene dividendo componente
    # per componente le componenti di d1 per i corrispondenti valori singolari.
    c = d1 / s1

    # Si ricostruisce la soluzione nel sistema di coordinate originale.
    #
    # In formule:
    #
    #       x = V_k c
    #
    # dove V_k contiene solo le prime k colonne di V.
    x = V[:, :k] @ c

    # Il residuo viene calcolato come la norma quadrata delle componenti
    # di d che non sono state utilizzate nella costruzione della soluzione.
    #
    # Queste componenti rappresentano la parte di b che non viene spiegata
    # dal modello ai minimi quadrati.
    residuo = np.linalg.norm(d[k:])**2

    # La funzione restituisce:
    # - x: il vettore dei coefficienti della soluzione;
    # - residuo: l'errore quadratico associato all'approssimazione.
    return x, residuo
```

## Interpolazione

![[Pasted image 20260626230455.png]]

![[Pasted image 20260626230518.png]]
