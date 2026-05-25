import './About.css'
import aboutPhoto from '../assets/1712713512559.jpeg'

function About(){
    return(
        <section className="about">
            <div className='about-content'>
                <img src={aboutPhoto} className='about-photo'/>
                <div className='about-text'>
                    <p>Hi, I'm Patrick, a third year student studying a Bachelor's of Commerce and minoring in Computer Science at the University of Ottawa.</p>
                </div>
            </div>
        </section>
)
}

export default About