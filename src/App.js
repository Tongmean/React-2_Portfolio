import './App.css';
import Sidebar from './component/sideBar/Sidebar';
import About from './component/about/About';
import Techstack from './component/Tech-stack/Techstack';
import Project from './component/project/Project';
import WorkExperience from './component/workExerience/WorkExperience';
import Education from './component/education/Education';
import Testimonial from './component/testimonial/Testimonial';
import Contact from './component/contact/Contact';
function App() {
  return (
    <div >
      <Sidebar/>
      <About/>
      <Techstack/>
      <Project/>
      <WorkExperience/>
      <Education/>
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
