import React, { useState } from 'react'
import styles from './ProjectCard.module.css';
import {modalProjectsData} from './../../../DataPage/projectsData';

export const ProjectCard= ({
    /*Esto es para guardar las variables de la data extraida aqui */
    project: {title, image, description, skills, demo, source}

    
}) => {
    const [currentIndex, setCurrentIndex] = useState(modalProjectsData[0])
    const [modal,setModal] = useState(false);

    const showModalData = (id) =>{
        console.log(id);

        const show = !modal;
        setModal(!modal)
        console.log(modal);
        if(show)
        {
            document.body.classList.add('active-modal');
        }else{
            document.body.classList.remove('active-modal');
        }
    }

  return (
    <div className={styles.container}>
        <img src={image} alt={` Image of ${title}`} 
        className={styles.image}/>
        <h3 className={styles.title}>
            {title}
        </h3>
        <p className={styles.description}>
            {description}
        </p>
        <ul className={styles.skills}>
            {skills.map((skill, id)=>{
                return(
                <li key={id} className={styles.skill}>
                    {skill}
                </li>
                )
            })}
        </ul>
        <div className={styles.links}> 
            
            { 
                source 
                ? <a href={source} className={styles.build} download target='_blank'>
                    Website
                </a >
                : demo ? 
                <a href={demo} className={styles.build} download target='_blank'>
                    Download
                </a >: <a></a>
            }
            
        </div>
            <div className={styles.modalContent}>
        {/*PARTE DEL MODAL */}
        {
            modal &&(
                <div className={styles.modalContainer}>
                    <div onClick={()=>{
                        showModalData();
                    }} className={styles.overlay}>
                        <div className={styles.modalContent}>
                            <h2>{currentIndex.title}</h2>
                            <h3>{currentIndex.date}</h3>
                            <p>{currentIndex.projectDescription}</p>
                            {
                                currentIndex.video &&(
                                <video width='600' height='320' 
                                controls src={currentIndex.video} type="video/mp4" />)
                            }
                            <h4>{currentIndex.toolsUsed}</h4>
                            <h4>Credits: {currentIndex.colaborators}</h4>
                            {
                                currentIndex.projectlink&&(
                                <a href={currentIndex.projectlink}
                                className={styles.link} target='_blank'> Download </a>)
                            }
                        </div>
                    </div>
                </div>
            )
        }
        </div>
        </div>
  )
}

export default ProjectCard
