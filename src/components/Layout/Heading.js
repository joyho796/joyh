import React from 'react';
import styles from '../components.module.css';
import { Link, useLocation } from 'react-router-dom';

  

function Heading({text}) {
  return (
    <div className={styles.heading}>
      <span className={styles.headingText}>{text}</span>
    </div>

  );
}



export default Heading;