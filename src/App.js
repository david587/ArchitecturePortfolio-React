import './App.css';
//components
import Navbar from './components/Navbar';
import About from './components/About';
import Rounded from './components/Rounded';
import Reasons from './components/Reasons';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';


function App() {
  return (
  <div>
  <Navbar/>
  <About/>
  <Rounded/>
  <Reasons/>
  <Services/>
  <Portfolio/>
  <Footer/>
  </div>
  );
}

export default App;
