import express from "express";
import {createImage} from '../controllers/dalleController.js'
import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

router.use(requireAuth);

router.post('/', createImage);

export default router;
