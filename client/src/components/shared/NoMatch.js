import { Link } from 'react-router-dom';
import {Container} from 'react-bootstrap';

const Nomatch = () => (
  <>
  <Container>
    <h1>404 - Page Not Found</h1>
    <h1>404 - Page Not Found</h1>
    
    <Link to='/'>
      Return home
    </Link>
  </Container>
  </>
)

export default Nomatch;