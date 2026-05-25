import About from "../component/About"
import HowYouWork from "../component/HowYouWork"
import Projects from "../component/Projects"
import Hairline from "../component/Hairline"


function HomePage(){
  return (
    <>
    <About/>
    <Hairline />
    <HowYouWork />
    <Hairline />
    <Projects />
    </>
  )
}

export default HomePage