import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TeamPosts = () => {
  return (
    <div>
      <Container>
        <Row style={{ display: "flex", gap: "15px" }}>
          <Col>
            <img src=" https://images.unsplash.com/photo-1505798577917-a65157d3320a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxYZllUTlF2VS1Id3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" />
            <h3 style={{ marginTop: " 40px", fontSize: " 22px", textAlign: 'center', color: '#2063d6'}}>Contrary to popular belief</h3>
          </Col>
          <Col>
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbmR5bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60 " />
            <h3 style={{ marginTop: " 40px", fontSize: " 22px", textAlign: 'center', color: '#2063d6'}}>combined with a handful</h3>
          </Col>
          <Col>
            <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmR5bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" />
            <h3 style={{ marginTop: " 40px", fontSize: " 22px", textAlign: 'center', color: '#2063d6'}}>classical Latin</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TeamPosts;
