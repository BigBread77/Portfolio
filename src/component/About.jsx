import './About.css'
import aboutPhoto from '../assets/1712713512559.jpeg'

function About(){
    return(
        <section className="about">
            <div className='about-content'>
                <img src={aboutPhoto} className='about-photo'/>
                <div className='about-text'>
                    <p>Hi, I'm Patrick, a third year student at the University of Ottawa.</p>
                    <p>While I've done a little bit of UI/UX work in the past I'm excited to further develop my skills by taking Prof. Barriere's course on Analysis and Design of User Interfaces.</p>
                </div>
            </div>
        </section>
)
}

export default About