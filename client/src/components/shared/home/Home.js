import HomeTitle from './HomeTitle';
import Features from './Features';
import Services from './Services';
import {Container} from 'react-bootstrap';

const Home = () => (
  <>
  <Container>
    <HomeTitle />
    <Features />
    <Services />
  </Container>
  </> 
  
)

export default Home;