import express from "express";
import {getAllPosts, createAPost} from "../controllers/postController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.get('/', getAllPosts);

router.use(requireAuth);

router.post('/',createAPost);

export default router;
