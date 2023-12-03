import React from 'react';
import styles from '../../styles/common.module.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

function NavLink({ to, name, className }) {
    const location = useLocation();
    return (
      <div className={className}>
        <Link to={to} >
          <span style={location.pathname === to ? {fontWeight: 600} : null}>
              {name}
          </span>
        </Link>
      </div>
    );
  }
  

function NavBar({onBack}) {
  const navigate = useNavigate();

  return (
    <div className={styles.navBar}>
      <div to='/'className={styles.back} onClick={onBack ? onBack : ()=> navigate(-1)}>
          <IoChevronBack size={40} style={{color: 'white', paddingLeft: '20px'}}/>
          <span style={{fontWeight: 600}}>Back</span>
      </div>

      <div className={styles.nav}>
          <NavLink to='/' name={'Home'}/>
          <NavLink to='/Recipes' name={'Recipes'} className={styles.desktopOnly}/>
          <NavLink to='/Eats' name={'Eats'} className={styles.desktopOnly}/>
          <NavLink to='/Musings' name={'Musings'} className={styles.desktopOnly}/>
      </div>
    </div>

  );
}

export default NavBar;