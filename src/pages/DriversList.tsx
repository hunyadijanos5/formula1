import { FC, useEffect, useState } from 'react';
import { iDriver } from '../utils/interfaces';
import DriverCard from './DriverCard';

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
        .catch(()=> console.log("cannot fetch drivers data"))
    }
  }, [drivers])  

  return (
    <div className='driverCards'>
      {drivers?.map((driver:iDriver) => <DriverCard driver={driver}/>)}
    </div>
  );
}

export default DriversList;
