import { postdb } from "../db/post.js";

export const getposts = (req, res) => {
    return res.json(postdb);
};

export const getpostbyid = (req, res) => {
    return res.json(postdb.find(post=>req.params.id===post.id));
}

export const deletepostbyid = (req, res) => {
    const e = postdb.find(post=>req.params.id===post.id);
    postdb.splice(postdb.indexOf(e), 1);
    return res.json(postdb);
}