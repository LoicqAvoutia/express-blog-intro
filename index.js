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

