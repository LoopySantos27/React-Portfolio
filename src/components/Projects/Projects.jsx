import React, { useEffect, useState } from 'react'
import projectsData, {headersProjects} from '../../../DataPage/projectsData';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css'
import ModalProject from './ModalProject';

export const Projects =()=> {

  //Los proyectos filtrados son los que se van a mostrar, pueden ser todos o cada uno con su tag
  const [filterProject, setFilterProject] = useState(projectsData);
  const [tagProject, setTagProject] = useState('All');
  const [headers, setHeaders] = useState(headersProjects)
  //Modal Section
  const[modal, setModal] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpenModal = (projectId) =>{
    const project = projectsData.find(p => p.id === projectId);
    setSelectedProject(project)
    setModal(true);
    //Lock Scroll page
    document.body.style.overflow = 'hidden';
  }

  const handleCloseModal=() => {
    setSelectedProject(null)
    setModal(false)
    //Unlock scroll page
    document.body.style.overflow = '';
  }
  
 useEffect(()=>{
  if(tagProject == 'All'){
      setFilterProject(projectsData)
      setHeaders(prev =>prev.map(
        h=> ({
          ...h, 
          isActive: h.header === 'All'
          
        })
    ))
    }else{
      //Filtrar todos los proyectos con la etiqueta que le pasaron
      const filtered = projectsData.filter((project)=> project.tag == tagProject)
      setFilterProject(filtered);
      
      setHeaders(prev =>prev.map(
        h=> ({
          ...h, 
          isActive: h.header === tagProject
        })
      ))
    }
    
 },[tagProject])

  const filterProjects = (tag) =>{
    setTagProject(tag)
    
  }

  return (
    <section className={styles.container} id='Projects'>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.navProjects}>
          {
            headers.map((head)=>{
              return(
                <button key={head.header} onClick={()=>filterProjects(head.header) }
                className={ !head.isActive ? styles.navHeader : styles.navPressed}> 
                  {head.header}
                </button>
              )
            })
          }
            
        </div>
        {
          modal &&(
            <ModalProject  project={selectedProject} onClose = {handleCloseModal} />
          )
        }
        <div className={styles.projects}>{
            filterProject.map((project, id) =>{
                return <ProjectCard key={id} project={project} onSeeMore={handleOpenModal} />;
            })}</div>
    </section>
  );
}


