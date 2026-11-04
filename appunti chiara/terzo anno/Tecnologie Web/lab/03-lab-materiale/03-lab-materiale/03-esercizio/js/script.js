const jsonAutori = `[
    {
        "nome": "Gino",
        "cognome": "Pino",
        "email": "gino.pino@blogtw.com",
        "argomenti": "HTML, CSS, JavaScript"
    },
    {
        "nome": "Cippa",
        "cognome": "Lippa",
        "email": "cippa.lippa@blogtw.com",
        "argomenti": "PHP"
    },
    {
        "nome": "Mario",
        "cognome": "Rossi",
        "email": "mario.rossi@blogtw.com",
        "argomenti": "HTML, CSS, Accessibilità"
    },
    {
        "nome": "Anna",
        "cognome": "Bianchi",
        "email": "anna.bianchi@blogtw.com",
        "argomenti": "Vue.js, JavaScript, CSS"
    }
]`;

class Autore {
    constructor(nome , cognome , email , argomenti) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.argomenti = argomenti;
    }

    getNomeCompleto() {
        return this.nome + " " + this.cognome;
    }

    toConsole(){
        console.log("Nome: " + this.nome);
        console.log("Cognome: " + this.cognome);
        console.log("Email: " + this.email);
        console.log("Argomenti: " + this.argomenti);
    }

    toDom(){
        const autore = document.createElement("tr");

        const nome = document.createElement("td");
        nome.textContent = this.nome;
        //nome.setAttribute("scope", "col");

        const cognome = document.createElement("td");
        cognome.textContent = this.cognome;
        //cognome.setAttribute("scope", "col");

        const email = document.createElement("td");
        email.textContent = this.email;
        //email.setAttribute("scope", "col");

        const argomenti = document.createElement("td");
        argomenti.textContent = this.argomenti;
        //argomenti.setAttribute("scope", "col");

        autore.append(nome, cognome, email, argomenti);

        return autore;
    }
}

const dati = JSON.parse(jsonAutori); // il metodo parse di json prende la stringa jsonarticolo e la trasforma in array
const arrayAutori = dati.map(a => new Autore(a.nome, a.cognome, a.email, a.argomenti)); 

class Autori {
    constructor(autori){
        this.autori = autori;
    }

    toConsole() {
        this.autori.forEach(a => {
            a.toConsole();
        });
    }

    toDom(){
        const tabella = document.createElement("table");

        const head = document.createElement("thead");
        head.innerHTML = `
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Cognome</th>
                <th scope="col">Email</th>
                <th scope="col">Argomenti</th>
            </tr>
        `

        const body = document.createElement("tbody");
        this.autori.forEach(a => {
            body.appendChild(a.toDom());
        });

        tabella.append(head, body);

        return tabella;
    }
}

const gestoreAutori = new Autori(arrayAutori);
document.querySelector("main section").append(gestoreAutori.toDom());

/*<table>
                    <thead>
                        <tr><th scope="col">Autore</th><th scope="col">Email</th><th scope="col">Argomenti</th></tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Gino Pino</th><td>ginopino@blogtw.com</td><td>HTML, CSS, JS</td></tr>
                        <tr><th scope="row">Cippa Lippa</th><td>cippalippa@blogtw.com</td><td>PHP</td></tr>
                    </tbody>
                </table> 
                
*/
//per rendere tabella accessibile usa scope!!!