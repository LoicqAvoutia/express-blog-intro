/*
Esercizio 1

Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo. 

Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
Testare su postman

Esercizio 2
Creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.

All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

Ad esempio:

Se viene chiamata /posts col verbo GET ci aspettiamo “Lista dei post”;

Se viene chiamato /posts/1 col verbo DELETE ci aspettiamo “Cancellazione del post 1”

e via dicendo…

Registrare il router dentro app.js con il prefisso posts/.

Nota:

Avete anche l’array dei post che vi abbiamo fornito, salvatelo da qualche parte.
Ci servirà per i prossimi step.
Per oggi vi può servire in caso vogliate provare i bonus.

Bonus
Provare a restituire la lista dei post dalla rotta index, in formato json
Provare a restituire un singolo post dalla rotta show, sempre in formato json

Esercizio 3
Milestone 1

Come prima cosa, creiamo un controller per i nostri post, in una cartella controllers. 

All’interno, prepariamo tutte le funzioni necessarie e copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).

Poi torniamo sul file delle rotte. Qui importiamo le funzioni dichiarate nel controller e le associamo alle varie rotte, come visto in classe.

Testiamo su postman se chiamando gli endpoint riceviamo effettivamente le stesse risposte che avevamo prima.

Se tutto funziona, passiamo alla prossima milestone

Milestone 2

Per iniziare, creiamo una cartella data in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato. Importiamo questo file in cima al controller.

Ora passiamo ad implementare le logiche delle nostre CRUD:

Index dovrà restituire la lista dei post in formato JSON
Show dovrà restituire un singolo post in formato JSON
Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.

Bonus
Implementare un filtro di ricerca nella index che mostri solo i post che hanno un determinato Tag
In Show e Destroy, controllare se il parametro si riferisce ad un post esistente, in caso contrario, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.

*/
import express from "express";
import { router } from "./routers.js";

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use("/bacheca", router);


app.listen(PORT, () => {
  console.log("Server avviato");
});

