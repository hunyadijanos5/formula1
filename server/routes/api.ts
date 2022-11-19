import { initDrivers, sortDrivers } from "../utils";
import { Request, Response } from "express";

const router = require('express').Router();
const drivers = initDrivers()

router.get('/drivers', (req:Request, res: Response) => {
    res.header('Access-Control-Request-Headers', '*');
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
    res.header('Access-Control-Allow-Origin', '*');

    res.send(drivers)
});
router.post('/drivers/:id/overtake', (req:any, res: any) => {
    res.header('Content-Type', 'application/x-www-form-urlencoded');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, CREATE');
    res.header('Access-Control-Allow-Origin', '*');

    const DriverId:number = parseInt(req.params.id)

    // Finding the index of the driver in the array
    const ind = drivers.findIndex(driver => driver.id === DriverId)
    
    let move = req.body?.move || 0;
    
    console.log('Drivers before move',drivers.map(d => d.code))
    console.log("Moving", drivers[ind].code, "by", move)

    drivers[ind].place += move;

    for(let i = 1; i <= Math.abs(move); i++) {
        const driverIterator = move < 0 ? ind - i : ind + i;

        drivers[driverIterator].place = (drivers[driverIterator].place || 0) + (move < 0 ? 1 : -1);
    }

    drivers.sort(sortDrivers)

    console.log('Drivers after move',drivers.map(d => d.code))    
    res.send(drivers)
});


export default router