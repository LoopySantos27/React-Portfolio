import React from 'react'

import styles from './About.module.css' 
import { webPageImages } from '../../../DataPage/imagesData'

export const About = ()=> {
  return (
    <section className={styles.aboutSection} id='/about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={webPageImages.aboutImg} alt='About Image '/>
            
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={webPageImages.cursorImg} alt='Cursor Img' className={styles.iconList}/>
                        <div className={styles.aboutItemText}>
                            <h4 className={styles.titleList}>Videogame Developer</h4>
                            <p className={styles.listDescription}>I'm a Unity developer who has done multiple games;
                                 Mobile, VR, PC games. I like to develop useful tools and mechanics to provide a great user experience     
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={webPageImages.serverImg} alt='pc Img' className={styles.iconList}/>
                        <div className={styles.aboutItemText}>
                            <h4 className={styles.titleList}>Frontend Developer</h4>
                            <p className={styles.listDescription}>  I have experience developing responsive web pages
                                and starting to gain experience in the backend area.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={webPageImages.uiIcon} alt='Testing Img' className={styles.iconList}/>
                        <div className={styles.aboutItemText}>    
                            <h4 className={styles.titleList}>QA Tester</h4>
                            <p className={styles.listDescription}> I have experience in testing and providing feedback
                                in the software production, specially on C#  
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
    </section>
  );
};

