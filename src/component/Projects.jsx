import ProjectCard from "./ProjectCard"
import './Projects.css'


function Projects(){
  return(
    <div className="project-container">
      <h4 className="project-label">PROJECTS:</h4>
      <div className="project-column">
        <ProjectCard name="Travel Agency" img="src/assets/952456172.webp" path= "/travelagency" />
        <ProjectCard name="Memory Game" img="src/assets/milad-fakurian-unsplash-1200x628.jpg" path = "/memorygame" />
        <ProjectCard name="Ecommerce" img="src/assets/shopping_2.jpg" path = "/ecommerce" />
        <ProjectCard name="Analytics" img="src/assets/herramientas-de-big-data.jpeg" path= "/analytics"/>


      </div>
    </div>
  )
}

export default Projects