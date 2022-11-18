import { initDrivers, sortDrivers } from "../utils";
import { Request, Response } from "express";

const router = require('express').Router();
const drivers = initDrivers()

router.get('/drivers', (req:Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Headers', '*');
    res.header('Content-Type', 'application/json');

    res.send(drivers)
});
router.post('/drivers/:id/overtake', (req:Request, res: Response) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Headers', '*');
    res.header('Content-Type', 'application/json');
    
    const DriverId:number = parseInt(req.params.id)
    const ind = drivers.findIndex(driver => driver.id === DriverId)
    if (ind > 0){
        drivers[ind].place = (drivers[ind].place || 0) - 1;
        drivers[ind - 1].place = (drivers[ind].place || 0) + 1;
    }
    
    res.send(drivers.sort(sortDrivers))
});


export default router