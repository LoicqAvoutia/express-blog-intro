import express from "express";
import { postdb } from "./db/post.js";

export const router = express.Router();

router.get("/", (req, res) => {
  return res.send('server del mio blog');
});

router.get("/posts", (req, res) => {
  return res.json(postdb);
});

router.get("/posts/:id", (req, res) => {
  return res.send(postdb.find(post=>req.params.id===post.id));
});

router.post("/posts", (req, res) => {
  return res.send('creazione nuovo post');
});

router.put("/posts/:id", (req, res) => {
  return res.send('modifica totale del post');
});

router.patch("/posts/:id", (req, res) => {
  return res.send('modifica parziale del post');
});

router.delete("/posts/:id", (req, res) => {
  return res.send('eliminazione del post');
})

