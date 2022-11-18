import { shuffle } from "../utils";
import { Request, Response } from "express";

const router = require('express').Router();
const drivers = require('../drivers.json')

router.get('/drivers', (req:Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Headers', '*');
    res.header('Content-Type', 'application/json');
    
    res.send(shuffle(drivers))
});


export default router