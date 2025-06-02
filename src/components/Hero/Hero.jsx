import React from 'react'
import { webPageImages } from '../../../DataPage/imagesData';
import styles from './Hero.module.css';

export const Hero =() => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}> Hi I'm Gerardo Santos</h1>
        <p className={styles.description}>
            I'm a Front end developer / Video Game Developer
            with more than 2 working years of experience in Unity C# and 1 year with React NodeJS
            I'm on my way to be a FullStack Developer
        </p>
        <a href='mailto:gerardodsc27@gmail.com' className={styles.contactInfo}>Contact me!</a>
    </div>
    <img src={webPageImages.heroImage}
    alt='MyImage' className={styles.heroImage}
    />
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
  );
};
