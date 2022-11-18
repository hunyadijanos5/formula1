import { FC } from 'react';
import { iDriver } from '../utils/interfaces';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './DriverCard.css'
interface Props {
  driver: iDriver
}

const DriverCard: FC<Props> = ({ driver }) => {
  const { firstname, lastname, country, team, place, imgUrl } = driver
  const flagUri = "https://countryflagsapi.com/png/" + country

  return (
    <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >  
      <div className='container'>
        <div>#{place}</div>
        <div className="cardImg"> <img src={imgUrl} /> </div>
        <div className='flagContainer'> 
          <img className='flag' src={flagUri} alt={country} />
          <br/>
          <span>({country})</span>
        </div>
        <div className='title'> {firstname} {lastname} </div>
        <div className='text'> {team}</div>
        <div>
          <Button className="driverCardButton" variant="primary">Place Overtake</Button>
        </div>
      </div>   
    </ListGroup.Item>
  );
}

export default DriverCard;
