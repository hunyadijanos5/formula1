import { FC } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const DriversList: FC = () => {
  return (
      <div className="App">
      <header className="App-header">
        <img src={"https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg"} className="App-logo" alt="logo" />
        <p>
          Welcome on Formula 1 driver's catalog.
        </p>
        <Link to={'/drivers'}><Button variant='info'>Open Drivers List</Button> </Link>
      </header>
    </div>
  )
}

export default DriversList;
