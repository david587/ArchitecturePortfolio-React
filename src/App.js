import './App.css';
//Homepage components
import Navbar from './components/home/Navbar';
import About from './components/home/About';
import Rounded from './components/home/Rounded';
import Reasons from './components/home/Reasons';
import Services from './components/home/Services';
import Portfolio from './components/home/Portfolio';
import Footer from './components/home/Footer';
//Contact Components
import Touch from "./components/contacts/Touch";
import Form from "./components/contacts/Form";

//hook
import { useTheme } from "./hooks/useTheme"
import {Route,Routes} from "react-router-dom"
import { useRef } from 'react';

export default function App() {  
  const { mode } = useTheme()

  const ref = useRef(null);
  console.log(ref);

  return (
  <div className={`App ${mode}`}>
    <Navbar Appref={ref}/>
    <Routes>
      <Route  path="/" element={[<About key={Math.random()  *100} />,
      <Rounded key={Math.random()  *100}/>,
      <Reasons key={Math.random()  *100}/>,
      <Services ref={ref} key={Math.random()} />,
      <Portfolio  key={Math.random()}/>] }/>

      <Route  path="/services" element={[<About key={Math.random()  *100} />,
      <Rounded key={Math.random()  *100}/>,
      <Reasons key={Math.random()  *100}/>,
      <Services ref={ref} text="hello" key={Math.random()} />,
      <Portfolio  key={Math.random()}/>] }/>
      
      {/* <Route path="/projects" element={<Services/> }/> */}
      
      <Route path="/contacts" element={[<Touch key={Math.random()  *100}/>,
      <Form key={Math.random()  *100}/>] }/>
    </Routes>
    <Footer/>
  </div>
  );
}