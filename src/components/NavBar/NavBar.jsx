import React, {useState} from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-scroll';
import { navBarData } from '../../../DataPage/fullPageData';

import  navBarImages  from '../../../DataPage/imagesData';
export const NavBar = () => {
  //Este valor es para apagar y prender el icono del menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      Portfolio
      </a>
      <div className={styles.menu}>
          <img 
              className={styles.menuBtn} 
              src={ menuOpen
                  ? navBarImages.closeIcon 
                  : navBarImages.menuIcon}
              alt='HamMenuButton'
              onClick={()=> setMenuOpen(!menuOpen)}
          />
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} 
            >
          {
            navBarData.map((nav)=>{
              return(
                <li key={nav}>
                  <button className={styles.navBarItem} >
                    {console.log(menuOpen)}
                    <Link to={nav} spy ={true} smooth={true} offset={-50} duration={300} onClick={()=> setMenuOpen(false)}> 
                      {nav}
                    </Link>
                  </button>
                </li>
                );
              })
          }
          </ul>
      </div>
  </nav>
  )
}

