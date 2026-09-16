import { postdb } from "../db/post.js";

export const index = (req, res) => {
    return res.json(postdb);
};

export const show = (req, res) => {
    return res.json(postdb.find(post=>req.params.id===post.id));
}

export const post = (req, res) => {
    const id = String(Number(postdb.at(-1).id) + 1);
    const newpost =
    {
      id: id,
      titolo: req.body.titolo,
      contenuto: req.body.contenuto,
      immagine: req.body.immagine,
      tags: req.body.tags
    }
    postdb.push(newpost);
    console.log(postdb);
    return res.send('testing');
}

export const Update = (req, res) => {
    const post = postdb.find(post=>req.params.id===post.id);
    
    if(post){
        post.titolo = req.body.titolo;
        post.contenuto = req.body.contenuto;
        post.immagine = req.body.immagine;
        post.tags = req.body.tags;
    }else{
        res.status(404).json(
        {
            status: "Bad request",
            message: "error"
        })
    }

    return res.send('testing');
}

export const destroy = (req, res) => {
    const e = postdb.find(post=>req.params.id===post.id);
    postdb.splice(postdb.indexOf(e), 1);
    res.status(204);
    return res.send('');
}