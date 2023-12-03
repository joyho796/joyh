import React from 'react';
import styles from './components.module.css'
import { Link, useLocation } from 'react-router-dom';

  

function Placeholder({text}) {
  return (
    <div className={styles.placeholderContainer}>
      <span className={styles.placeholderText}>{text}</span>
    </div>

  );
}



export default Placeholder;