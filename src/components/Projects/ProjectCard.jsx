import React, { useState } from 'react'
import styles from './ProjectCard.module.css';

import ModalProject from './ModalProject';

export const ProjectCard= ({
    /*Esto es para guardar las variables de la data extraida aqui */
    project, onSeeMore

    
}) => {
    
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
        
        <div className={styles.imageBg}>
            <img src={project.image} alt={` Image of ${project.title}`} 
            className={styles.image}/>
        </div>
        <h3 className={styles.title}>
            {project.title}
        </h3>
        <p className={styles.description}>
            {project.description}
        </p>
        <div className={styles.moreBtn} onClick={()=> onSeeMore(project.id)}>
            More
        </div>
       {/* <div className={styles.links}> 
            
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
            
        </div>*/}
            <div className={styles.modalContent}>
        {/*PARTE DEL MODAL */}
        
        </div>
        </div>
  )
}

export default ProjectCard
