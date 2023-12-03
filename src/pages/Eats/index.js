import React from 'react';
import styles from './Eats.module.css';
import NavBar from '../../components/Layout/NavBar';
import Heading from '../../components/Layout/Heading';
import Placeholder from '../../components/Placeholder';

function Eats() {
  document.title = 'Joy\'s Eats';
  return (
    <>
      <div className={styles.background}>
        <img src={require('../../assets/images/backgrounds/kitchen2.jpg')} />
      </div>
      <div className={styles.content}>
        <NavBar/>
        <Heading text={'MY EATS'}/>
        <Placeholder text={'hah empty...'}/>
      </div>
    </>
  );
}

export default Eats;