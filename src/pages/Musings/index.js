import React from 'react';
import styles from './Musings.module.css';
import NavBar from '../../components/Layout/NavBar';
import Heading from '../../components/Layout/Heading';
import Placeholder from '../../components/Placeholder';

function Musings() {
  document.title = 'Joy\'s Musings';
  return (
    <>
      <div className={styles.background}>
        <img src={require('../../assets/images/backgrounds/kitchen3.jpg')} />
      </div>
      <div className={styles.content}>
        <NavBar/>
        <Heading text={'MY MUSINGS'}/>
        <Placeholder text={'hah empty...'}/>
      </div>
    </>
  );
}

export default Musings;