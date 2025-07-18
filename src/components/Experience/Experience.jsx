import React from 'react'

import styles from './Experience.module.css';
import experienceData from '../../../DataPage/experienceData';
import { HistoryExperience } from '../../../DataPage/experienceData';


export const Experience= ()=> {
  return <section className={styles.container} id='Experience'> 
  <h2 className={styles.title}>Work Experience</h2>
  <div className={styles.content}>
    <div className={styles.skills}>{
      experienceData.map((skill, id)=>{
        return <div key ={id} className={styles.skill}>
           <div className={styles.skillImageContainer}>
            <img src={skill.imageSrc} alt={skill.title}/> </div>
           <p>{skill.title}</p>
           </div>
      })
      }</div>
      <ul className={styles.history}>
        {HistoryExperience.map((historyItem, id)=>{
          return(
            <li key={id} className={styles.historyItem} >
              <img style={{width:'100px'}}
                src={historyItem.imageSrc}
                alt={`${historyItem.organisation} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3 className={styles.historyTitle}>
  {`${historyItem.role} - ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>{historyItem.experiences.map((experience, id)=>{
                    return <li key={id}>{experience}</li>
                })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
  </div>
  </section>
}

export default Experience
