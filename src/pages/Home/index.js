import React from 'react';
import styles from './Home.module.css';
import {Link} from 'react-router-dom';

function PageLink({name}) {
  return (
    <div className={styles.link}>
      <div  className={styles.container}>
      <span>{name}</span>
      </div>
    </div>
    )
}

function Home() {
  document.title = 'Joy\'s Eats';
  return (
    <div className={styles.background}>
    <div>
    <div className={styles.title}>
      <div className={styles.container}>
        <span>RECIPE COLLECTION</span>
      </div>
    </div>
    <div className={styles.subtitle}>
      <div>
        <span>JOY'S</span>
      </div>
    </div>
    <div className={styles.subsubtitle}>
      <span>amongst other things</span>
    </div>
  </div>

  <div className={styles.links}>
    <Link to='/Recipes'><PageLink name={'Recipes'} /></Link>
    <Link to='/Eats'><PageLink name={'Eats'} /></Link>
    <Link to='/Musings'><PageLink name={'Musings'} /></Link>
  </div>
  
  </div>
  );
}

export default Home;