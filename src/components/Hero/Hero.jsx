import React from 'react'
import { webPageImages } from '../../../DataPage/imagesData';
import styles from './Hero.module.css';
import { heroData } from '../../../DataPage/fullPageData';

export const Hero =() => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi I'm Gerardo Santos</h1>
        <h2 className={styles.subTitle}>Frontend Developer and Video Game Programmer.</h2>
        <p className={styles.description}>
            {heroData}
        </p>
        <a href='mailto:gerardodsc27@gmail.com' className={styles.contactInfo}>Contact me!</a>
    </div>
    <div className={styles.bottomBlur}/>
    <img src={webPageImages.heroImage} alt='MyImage' className={styles.heroImage}/>
    </section>
  );
};
