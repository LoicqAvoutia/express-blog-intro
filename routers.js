import express from "express";
import { postdb } from "./db/post.js";
import { getposts, getpostbyid, deletepostbyid} from "./controllers/controllerposts.js";

export const router = express.Router();

router.get("/posts",getposts);

router.get("/posts/:id",getpostbyid);

router.post("/posts", (req, res) => {
  return res.send('creazione nuovo post');
});

router.put("/posts/:id", (req, res) => {
  return res.send('modifica totale del post');
});

router.patch("/posts/:id", (req, res) => {
  return res.send('modifica parziale del post');
});

router.delete("/posts/:id",deletepostbyid)

