import { Button } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

const Features = () => (
  <>
    <Container>
      <Row>
        <Col>
          <img
            src="https://images.unsplash.com/photo-1613214043850-9d78a94ec90b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            width="600px"
            height="400px"
          ></img>
        </Col>
        <Col>
          <div>
            <h3> Features that is amazing</h3>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries
            </p>
          </div>
          <div style={{ marginTop: "100px", justifyContent: "center", textAlign: 'center', display: 'flex', gap: '30px'}}>
            <Button variant="dark">Meet the Team</Button>{" "}
            <Button variant="light">123-123-3123</Button>
          </div>
        </Col>
      </Row>
    </Container>
    
  </>
);

export default Features;
