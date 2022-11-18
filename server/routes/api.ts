import { shuffle } from "../utils";
import { Request, Response } from "express";
import { iDriver } from "../interfaces";

const router = require('express').Router();
const drivers = require('../drivers.json')

router.get('/drivers', (req:Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Headers', '*');
    res.header('Content-Type', 'application/json');
    
    const places:number[] = []
    for (let i = 0; i < drivers.length; i++) {
        places.push(i + 1)
    }
    const randomPlaces = shuffle(places)
    
    res.send(drivers.map((d:iDriver, i:number) => ({
        ...d,
        imgUrl: `/images/${d.code.toLowerCase()}.png`,
        place: randomPlaces[i]
    })).sort((a:iDriver, b: iDriver) => (a?.place || 0) - (b?.place || 0)))
});


export default router