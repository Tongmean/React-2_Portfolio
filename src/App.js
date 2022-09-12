import './App.css';
import Sidebar from './component/sideBar/Sidebar';
import About from './component/about/About';
import Techstack from './component/Tech-stack/Techstack';
import Project from './component/project/Project';
import WorkExperience from './component/workExerience/WorkExperience';
import Education from './component/education/Education';
import Testimonial from './component/testimonial/Testimonial';
import Contact from './component/contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import Navbarmobile from './component/sideBar/Navbarmobile';
function App() {
  return (
    <div >
      <Navbarmobile/>
      <Sidebar/>
      <About/>
      <Techstack/>
      <Project/>
      <WorkExperience/>
      <Education/>
      <Testimonial/>
      <Contact/>

      <ScrollToTop
        smooth = {true}
        width="25"
        color='black'
        height='20'
        top='25'
        style={{borderRadius:"90px", backgroundColor:'#white'}}
      />
    </div>
  );
}

export default App;
