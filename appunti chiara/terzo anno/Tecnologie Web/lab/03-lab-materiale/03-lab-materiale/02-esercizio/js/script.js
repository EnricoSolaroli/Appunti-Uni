
const jsonArticoli = `[
    {
        "Autore": "Gino Pino",
        "Data": "23 Ottobre 2026",
        "Titolo": "Intro alle Tecnologie Web Client Side",
        "Immagine": "./img/html5-js-css3.png",
        "Testo": "\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\""
    },
    {
        "Autore": "Cippa Lippa",
        "Data": "23 Ottobre 2026",
        "Titolo": "Intro alle Tecnologie Web Server Side",
        "Immagine": "./img/php.png",
        "Testo": "\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\\""
    }
]`;

//per fare classe: costrutto prototipo o scriverla come siamo abituati
class Articolo {
    constructor(autore, data, titolo, immagine, testo) {
        this.autore = autore;
        this.data = data;
        this.titolo = titolo;
        this.immagine = immagine;
        this.testo = testo;
    }

    toConsole(){
        console.log("Autore: "+ this.autore);
        console.log("Data: "+ this.data);
        console.log("Titolo: "+ this.titolo);
        console.log("Immagine: "+ this.immagine);
        console.log("Testo: "+ this.testo);
    }

    toDom(){
        const articolo = document.createElement("article");

        const immagine = document.createElement("img");
        immagine.src = this.immagine;

        const titolo = document.createElement("h3");
        titolo.textContent = this.titolo;

        const dataAutore = document.createElement("p");
        dataAutore.textContent = this.data + " " + this.autore;

        const testo = document.createElement("p");
        testo.textContent = this.testo;

        const bottone = document.createElement("a");
        bottone.href = "#";

        bottone.textContent = "Leggi tutto";

        articolo.append(immagine, titolo, dataAutorea, testo, bottone);

        return articolo;

    }

}

const dati = JSON.parse(jsonArticoli); // il metodo parse di json prende la stringa jsonarticolo e la trasforma in array

//per ogni elemento del array json creo un articolo
const articoli = dati.map( a => new Articolo(a.autore, a.data, a.titolo, a.immagine, a.testo)); 

const contenitore = document.querySelector("main");
articoli.forEach(articolo => {
    articolo.toConsole;
    contenitore.append(articolo.toDom());
})
/*
Questa operazione si divide in 3 passaggi logici:

document.querySelector("main");
JavaScript guarda il tuo file HTML, cerca il tag <main> e lo "afferra". Lo salva nella variabile contenitore. Immagina che <main> sia una scatola vuota sulla tua pagina e tu ci abbia appena messo le mani sopra.

articoli.forEach(articolo => { ... })
Prende il tuo array di articoli (la lista che hai creato) e per ogni singolo articolo fa un giro di giostra ed esegue i comandi tra le parentesi graffe.

contenitore.append(articolo.toDom());
Qui succede la magia.

articolo.toDom(): dice all'articolo "costruiscimi il tuo quadratino HTML" (l'immagine, il titolo, il testo).

contenitore.append(...): prende quel quadratino appena costruito e lo "incolla" (append significa "aggiungi in fondo") dentro la scatola <main> che avevamo afferrato al punto 1.

Dato che è dentro un forEach, lo fa per il primo articolo, poi per il secondo, ecc., mettendoli in fila nella pagina.
*/
//voglio cancellare gli article dal main e generali co js

/*<article>
                <img src="./img/php.png" alt="" />
                <h3>Intro alle Tecnologie Web Server Side</h3>
                <p>2 Ottobre 2026 - Cippa Lippa</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="#">Leggi tutto</a>
            </article> 
*/