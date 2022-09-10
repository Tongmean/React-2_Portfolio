import './App.css';
import Sidebar from './component/sideBar/Sidebar';
import About from './component/about/About';
import Techstack from './component/Tech-stack/Techstack';
function App() {
  return (
    <div >
      <Sidebar/>
      <About/>
      <Techstack/>
    </div>
  );
}

export default App;
