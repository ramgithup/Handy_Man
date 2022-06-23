import { Container, Row, Col } from 'react-bootstrap';
const Prices = () => (
  <>
  
   <h1 style={{ justifyItems:'center', textAlign:"center" }}>services</h1>
   <h4 style={{ justifyItems:'center', textAlign:"center", paddingTop: '10px'}}> (123)123-1234</h4>
    <Container>
      <Row style={{paddingTop: '26px', margin: '20px', display: 'flex', gap: '20px'}}>
        <Col style={{paddingTop: '10px', border: '2px solid #000', padding: '10px'}}>
          <h4 style={{ justifyItems:'center', textAlign:"center", paddingTop: '10px'}}>Service 1</h4>
          <p>
          It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
           The point of using Lorem Ipsum is that it has a more-or-less normal 
           distribution of letters, as opposed to using 'Content here, content 
           here', making it look like readable English. Many desktop publishing packages
          and web page editors now use Lorem Ipsum as their default model text
          </p>
        </Col>
        <Col style={{paddingTop: '10px', border: '2px solid #000', padding: '10px'}}>
        <h4 style={{ justifyItems:'center', textAlign:"center", paddingTop: '10px'}}>Service 2</h4>
          <p>
          is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy 
           text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived not 
            only five centuries
          </p>
        </Col>
      </Row >
      <Row  style={{paddingTop: '26px', margin: '20px', display: 'flex', gap: '20px'}}>
        <Col style={{paddingTop: '10px', border: '2px solid #000', padding: '10px'}}>
        <h4 style={{ justifyItems:'center', textAlign:"center", paddingTop: '10px' }}>Service 3</h4>
          <p>
          printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy 
          text ever since the 1500s, when an unknown printer took a galley of
           type and scrambled it to make a type specimen book. It has survived not 
           only five centuries
          </p>
        </Col>
        <Col style={{paddingTop: '10px', border: '2px solid #000', padding: '10px'}}>
        <h4 style={{ justifyItems:'center', textAlign:"center", paddingTop: '10px'}}>Service 4</h4>
          <p>
          It is a long established fact that a reader will be distracted
           by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal 
            distribution of letters, as opposed to using 'Content here, content 
            here', making it look like readable English. Many desktop publishing packages
           and web page editors now use Lorem Ipsum as their default model text
          </p>
        </Col>
      </Row>
     </Container>
  
  </>
)

export default Prices;