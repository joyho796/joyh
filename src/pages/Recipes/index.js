import React from 'react';
import styles from './Recipes.module.css';
import NavBar from '../../components/Layout/NavBar';
import Heading from '../../components/Layout/Heading';
import { Outlet } from 'react-router-dom';

function Recipes() {
  return (
    <>
      <div className={styles.background}>
        <img src={require('../../assets/images/backgrounds/kitchen.jpg')} />
      </div>
      <div className={styles.content}>
        <NavBar/>
        <Outlet/>
      </div>
    </>
  );
}

export default Recipes;