import ProjectCard from "./ProjectCard"
import './Projects.css'
import travelImg from '../assets/952456172.webp'
import memoryImg from '../assets/milad-fakurian-unsplash-1200x628.jpg'
import ecommerceImg from '../assets/shopping_2.jpg'
import analyticsImg from '../assets/herramientas-de-big-data.jpeg'


function Projects(){
  return(
    <div className="project-container">
      <h4 className="project-label">PROJECTS:</h4>
      <div className="project-column">
        <ProjectCard name="Travel Agency" img={travelImg} path= "/travelagency" />
        <ProjectCard name="Memory Game" img={memoryImg} path = "/memorygame" />
        <ProjectCard name="Ecommerce" img={ecommerceImg} path = "/ecommerce" />
        <ProjectCard name="Analytics" img={analyticsImg} path= "/analytics"/>


      </div>
    </div>
  )
}

export default Projects