import express from "express";
import { postdb } from "./db/post.js";
import { index, show, destroy, post, Update} from "./controllers/controllerposts.js";

export const router = express.Router();

router.get("/posts",index);

router.get("/posts/:id",show);

router.post("/posts", post);

router.put("/posts/:id", Update);

router.patch("/posts/:id", (req, res) => {
  return res.send('modifica parziale del post');
});

router.delete("/posts/:id",destroy)

