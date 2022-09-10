import './App.css';
import Sidebar from './component/sideBar/Sidebar';
import About from './component/about/About';
import Techstack from './component/Tech-stack/Techstack';
import Project from './component/project/Project';
function App() {
  return (
    <div >
      <Sidebar/>
      <About/>
      <Techstack/>
      <Project/>
    </div>
  );
}

export default App;
