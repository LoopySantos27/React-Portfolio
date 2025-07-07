import React from 'react'

import styles from './About.module.css' 
import { webPageImages } from '../../../DataPage/imagesData'
import { aboutData } from '../../../DataPage/fullPageData';

export const About = ()=> {
  return (
    <section className={styles.aboutSection} id='About'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={webPageImages.aboutImg} alt='About Image '/>
            
                <ul className={styles.aboutItems}>
                    {
                        aboutData.map((about)=>{
                            return(
                                <li key={about.header} className={styles.aboutItem}>
                                    <img src={about.img} alt={about.alt} className={styles.iconList} />
                                    <div className={styles.aboutItemText}>
                                        <h4 className={styles.titleList}>{about.header}</h4>
                                        <p className={styles.listDescription}>{about.description}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
    </section>
  );
};

