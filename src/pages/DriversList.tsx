import { FC, useEffect, useState } from 'react';
import { iDriver } from '../utils/interfaces';
import DriverCard from './DriverCard';
import ListGroup from 'react-bootstrap/ListGroup';

import './DriversList.css'

const DriversList: FC = () => {
  const [drivers, setDrivers] = useState<iDriver[]|null>(null)

  useEffect(() => {
    if (drivers === null) {
      fetch("http://localhost:9997/api/drivers")
        .then(res => res.json())
        .then(d => {
            setDrivers(d)
            console.log("Drivers Data loaded")
          })
        .catch(()=> console.log("cannot fetch drivers data first load"))
    }
  }, [drivers])

  const overtake = (id: number) => {
    fetch(`http://localhost:9997/api/drivers/${id}/overtake`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
        'Access-Control-Allow-Origin': "*",
      },
      mode: "no-cors"
    })
    .then(res => res.text())
    .then(json => {
      const newDrivers = JSON.parse(json)
      setDrivers(newDrivers)
    })
    .catch((e)=> console.error(e))
  }

  return (
    <div className='driverCards'>
      <ListGroup as="ol">
        {drivers?.map((driver:iDriver, i:number) => <DriverCard key={i} driver={driver} overtake={overtake} />)}
      </ListGroup>
    </div>
  );
}

export default DriversList;