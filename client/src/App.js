import { Routes, Route } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Home from './components/shared/home/Home';
import NavBar from './components/shared/Navbar';
import Nomatch from './components/shared/NoMatch'
import Team from './components/shared/team/Team'
import Workers from './components/shared/workers/Workers';
//import About from './components/shared/about/About';

const App = () => (
  <>
  
    <NavBar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/team' element={<Team />} />
    <Route path='/Workers' element={<Workers />} />
    <Route path='/*' element={<Nomatch />} />
  </Routes>

  

  </>
)

export default App;
