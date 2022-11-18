import { FC } from 'react';
import { iDriver } from '../utils/interfaces';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Props {
  driver: iDriver
}

const DriverCard: FC<Props> = ({ driver }) => {
  const { firstname, lastname, country, team, place, imgUrl } = driver

  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imgUrl} />
    <Card.Body>
      <Card.Title>{firstname} {lastname} ({country}) <span className="pull-right">#{place}</span></Card.Title>
      <Card.Text>
        <div>{team}</div>
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  );
}

export default DriverCard;
