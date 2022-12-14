import './App.css';
//Homepage components
import Navbar from './components/home/Navbar';
import About from './components/home/About';
import Rounded from './components/home/Rounded';
import Reasons from './components/home/Reasons';
import Services from './components/home/Services';
import Portfolio from './components/home/Portfolio';
import Footer from './components/home/Footer';
//hook
import { useTheme } from "./hooks/useTheme"
import {Route,Routes} from "react-router-dom"


function App() {  
  const { mode } = useTheme()
  // let id = Math.random()*100;

  return (
  <div className={`App ${mode}`}>
    <Navbar/>
    <Routes>
      <Route  path="/" element={[<About key={Math.random()  *100} />,
      <Rounded key={Math.random()  *100}/>,
      <Reasons key={Math.random()  *100}/>,
      <Services  key={Math.random()} />,
      <Portfolio  key={Math.random()}/>] }/>

      <Route  path="/services" element={[<About key={Math.random()  *100} />,
      <Rounded key={Math.random()  *100}/>,
      <Reasons key={Math.random()  *100}/>,
      <Services  key={Math.random()} />,
      <Portfolio  key={Math.random()}/>] }/>
      
      <Route path="/projects" element={<Services/> }/>
      <Route path="/contacts" element={<Services/> }/>
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
