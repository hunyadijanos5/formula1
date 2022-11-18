import React from 'react';
import styles from './NotFound.module.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC<{}> = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className={styles.row}>
        <span className={styles.value}>PAGE NOT FOUND</span>
        <Button variant="info" onClick={() => navigate('/')}/>
      </div>
    </div>
  );
}
export default NotFound