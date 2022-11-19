import { FC, useEffect, useRef, useState } from 'react';
import { iDriver } from '../utils/interfaces';
import DriverCard from './DriverCard';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'

import './DriversList.css'

const DriversList: FC = () => {
  const [drivers, setDrivers] = useState<iDriver[]|null>(null)

  useEffect(() => {
    if (drivers === null) {
      axios.get("http://localhost:9997/api/drivers")
        .then(res => {
            setDrivers(res?.data)
            console.log("Drivers Data loaded")
          })
        .catch(()=> console.log("cannot fetch drivers data first load"))
    }
  }, [drivers])

  const overtake = (id: number, move?: number) => {
    console.log("moved", move)
    axios.post(`http://localhost:9997/api/drivers/${id}/overtake`, { move })
    .then(res => setDrivers(res?.data))
    .catch((e)=> console.error(e))
  }

  //save reference for dragItem and dragOverItem
	const dragItem = useRef<any>(null)
	const dragOverItem = useRef<any>(null)

	//const handle drag sorting
	const handleSort = () => {
    // skip sort if no item in the list or nothing change
		if (!drivers || dragOverItem.current === dragItem.current) return

    //duplicate items
		let _driverItems = [...drivers]
    
		//remove and save the dragged item content
		const draggedItemContent = _driverItems.splice(dragItem.current, 1)[0]
    
		//switch the position
		_driverItems.splice(dragOverItem.current, 0, draggedItemContent)
    
    overtake(
      drivers[dragItem.current].id, 
      dragOverItem.current - dragItem.current
    )

		//reset the position ref
		dragItem.current = null
		dragOverItem.current = null
	}

  return (
    <div className='driverCards'>
      <ListGroup as="ol">
        {drivers?.map((driver:iDriver, i:number) => 
          <div
            key={i}
            draggable
            onDragStart={(e) => (dragItem.current = i)}
            onDragEnter={(e) => (dragOverItem.current = i)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <DriverCard driver={driver} overtake={overtake} />
          </div>
        )}
      </ListGroup>
    </div>
  );
}

export default DriversList;