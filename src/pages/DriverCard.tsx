import { FC } from 'react';
import { iDriver } from '../utils/interfaces';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import './DriverCard.css'
interface Props {
  driver: iDriver
  overtake: (id:number, move:number)=> void
}

const DriverCard: FC<Props> = ({ driver, overtake }) => {
  const { id, firstname, lastname, country, team, code, place = 1, imgUrl } = driver
  const flagUri = "https://countryflagsapi.com/png/" + country

  return (
    <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >  
      <div className='container'>
        <div>#{place} - ({code})</div>
        <div className="cardImg"> <img src={imgUrl} alt={country}/> </div>
        <div className='flagContainer'> 
          <img className='flag' src={flagUri} alt={country} />
          <br/>
          <span>({country})</span>
        </div>
        <div className='title'> {firstname} {lastname}</div>
        <div className='text'> {team}</div>
        <div>
            {place > 1 && 
              <Button className="driverCardButton" variant="primary" onClick={() => overtake(id, -1)}>Overtake</Button>
            }
        </div>
      </div>   
    </ListGroup.Item>
  );
}

export default DriverCard;
