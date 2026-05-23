import './ProjectCard.css'
import { Link } from 'react-router'

function ProjectCard(props){
  return(
    <Link to={props.path}>
      <div className='container'>
          <img src={props.img} className='project-image' />
          <p className='text'>{props.name}</p>
      </div>
    </Link>
  )
}

export default ProjectCard 