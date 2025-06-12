import React from 'react'
import { footerImages } from '../../../DataPage/imagesData'
import style from './Contact.module.css'

export const Contact = () => {
  return (
    <footer id ='/contact' className={style.container}>
        <div className={style.text}>
            <h2>Contact</h2>
            <p>Reach out!</p>
        </div>
        <ul className={style.links}>
            <li className={style.link}>
                <a href='mailto:gerardodsc27@gmail.com' target='_blank'>
                    <img  src={footerImages.emailImage} alt='Email'/>
                </a>
                <a href='mailto:gerardodsc27@gmail.com' target='_blank'>gerardodsc27@gmail.com</a>
            </li>
            <li className={style.link}>
                <a href='https://www.linkedin.com/in/gerardo-daniel-santos-cuevas-16382a1b8/' target='_blank'>
                    <img src={footerImages.linkedinIcon} alt='Linkedin Icon'/>
                </a>
                <a href='https://www.linkedin.com/in/gerardo-daniel-santos-cuevas-16382a1b8/' target='_blank'>
                Linkedin.com/GerardoSantos
                </a>
            </li>
            <li className={style.link}>
                <a href='https://github.com/LoopySantos27' target='_blank'>
                    <img src={footerImages.gitIcon} alt='github Icon'/>
                </a>
                <a href='https://github.com/LoopySantos27' target='_blank'>
                github.com/LoopySantos27</a>
            </li>
        </ul>
    </footer>
  )
}


