import './ProjectCard.css'
import { Link } from 'react-router'

function ProjectCard(props){
  const isExternal = props.path.startsWith('http')

  const card = (
    <div className='container'>
        <img src={props.img} className='project-image' />
        <p className='text'>{props.name}</p>
    </div>
  )

  if (isExternal) {
    return (
      <a href={props.path} target="_blank" rel="noopener noreferrer">
        {card}
      </a>
    )
  }

  return (
    <Link to={props.path}>
      {card}
    </Link>
  )
}

export default ProjectCard 