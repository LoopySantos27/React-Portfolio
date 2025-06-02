import React, {useState} from 'react';
import styles from './NavBar.module.css';
import { Link } from 'react-scroll';

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
                alt='menu-button'
                onClick={()=> setMenuOpen(!menuOpen)}
            />
            {/* Esto es para abrir el menu y que se muestre y darle más de una clase a esta seccion */}
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen }`}
                onClick={()=> setMenuOpen(false)}
            >
                <li>
                <button class={styles.navBarItem} onClick={()=>{handleScroll('/about')}} >
                <Link to='/about' spy={true} smooth={true} offset={50} duration={300}> About </Link>
                  
                  </button>
                </li>
                <li>
                <button class={styles.navBarItem} onClick={()=>{handleScroll('/experience')}} >
                <Link to='/experience' spy={true} smooth={true} offset={-10} duration={300}> Experience </Link>
                  
                  </button>
                </li>
                <li>
                <button class={styles.navBarItem} onClick={()=>{handleScroll('/projects')}} >
                <Link to='/projects' spy={true} smooth={true} offset={-10} duration={300}> Projects </Link>
                  { /* <a href='#about'>About</a>*/}
                  </button>
                </li>
                <li>
                <button class={styles.navBarItem} onClick={()=>{handleScroll('/contact')}} >
                <Link to='/contact' spy={true} smooth={true} offset={50} duration={300}> Contact</Link>
                  { /* <a href='#about'>About</a>*/}
                  </button>
                </li>
            </ul>
        </div>
    </nav>
    )
}

