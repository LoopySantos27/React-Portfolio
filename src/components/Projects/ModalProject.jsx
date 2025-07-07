import React, { useState } from 'react'
import styles from './modal.module.css'

function ModalProject({project, onClose}) {
    if (!project) return null;

  return (
    <div className={styles.modalSection} >
      <section className={styles.modalContainer}  >
        <div className={styles.headers}>
            <h2 style={{color: '#e9f1fa',  marginBottom: '1vh'}}>{project.fullTitle}</h2>
            <p>{project.fullDescription}</p>
            <p style={{color: '#c44569', fontWeight:'bold'}}>{project.date}</p>
            {/**Imagen o video */}

            {
                project.video 
                ? 
                    <video className={styles.imgModal}  controls src={project.video} type="video/mp4" /> 
                :
                    <img className={styles.imgModal} src={project.image} />
            }
            <h3 style={{color: '#c44569'}}>{project.colaborators}</h3>
            <div className={styles.bottomContent}>
                <div style={{gap: 25, display: 'flex'}}>
                    <button className={styles.btn}>
                      {
                        project.source ?
                        <a style={{textDecoration: 'none', color: 'white'}} href={project.source}>Website</a>
                        : project.demo?
                          <a style={{textDecoration: 'none', color: 'white'}} href={project.demo}>Download</a>
                          :
                          <p>Unavailable</p>
                      }
                      
                      </button>
                      <button className={styles.btn2} onClick={onClose}>
                        Go Back</button>
                </div>
                <div className={styles.toolsSection}>
                    {
                      project.toolsUsed.map((tool)=>{
                        return(
                          <img className={styles.toolsIcon} key={tool} src={tool}  />
                        )
                      })
                    }
                </div>
            </div>  
        </div>
      </section>
    </div>
  )
}

export default ModalProject
