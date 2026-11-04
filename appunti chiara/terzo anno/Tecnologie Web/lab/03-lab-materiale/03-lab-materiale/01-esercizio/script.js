console.log("Hello World"); /*pe vederlo sa ispezine console*/

const messaggio = document.querySelector("p"); //di default usiamo sempre const per una variabile, a meno che non sappiamo che dovremo modificarla

console.log(messaggio.innerText);
console.log(messaggio.innerHTML);
document.querySelector("button").addEventListener("click", () => {
    messaggio.innerHTML = messaggio.innerHTML.toUpperCase();
}) 
//posso selezioneare l'elemento tramite id o tramite button

//per slavare l'elemento e o selezinarlo sempre dal dom posso salvarlo in una const(?) 

document.querySelectorAll("button")[1].
addEventListener("click", () => {
messaggio.innerText = messaggio.innerText.
toLowerCase();
});

document.querySelector("#sposta").addEventListener(
    "click", () => {
        const primaParte = messaggio.innerText.substring(0, 5);
        const secondaParte = messaggio.innerText.substring(5);

        messaggio.innerText = secondaParte + primaParte;
    }
);