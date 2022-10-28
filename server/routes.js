import { Router } from "express";
import { deleteData, getData, postData, updateData } from "./controller.js";

const router = Router();


router.get('/', getData);
router.post('/', postData);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

export default router;