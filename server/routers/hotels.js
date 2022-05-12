import { addHotel, getHotel, getAllHotel, updateHotel, deleteHotel } from "../controllers/hotel.js";
import { verifyAdmin } from './../utils/verifyToken.js';
import express from "express";

const router = express('router');


router.get('/', getAllHotel);
router.get('/:id', getHotel);
router.post('/', verifyAdmin, addHotel);
router.put('/:id', verifyAdmin, updateHotel);
router.delete('/:id', verifyAdmin, deleteHotel);


export default router;