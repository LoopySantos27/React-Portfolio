
import styles from './App.module.css';
import { NavBar } from './components/NavBar/NavBar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import {Experience} from './components/Experience/Experience';
import {Projects} from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {

  return (
    /* llamamos a la variable App creada en App.modules.css */
    <div className={styles.App}>
      <NavBar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
