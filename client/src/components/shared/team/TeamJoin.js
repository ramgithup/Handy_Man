import React from 'react'
import {Button,Container, Row, Col} from 'react-bootstrap';

const TeamJoin = () => {
  return (
    <>
    <Container>
      <Row style={{ margin: '60px 0', display: 'flex', gap:'450px', background: '#dbcccc' }}>
        <Col style={{  alignItems: 'flex-start '}} >
        <h1 style={{ fontSize: '42px', textAlign: 'left', alignItems: 'flex-start '}}> Want to join the Team</h1>
        <p style={{ fontSize: '32px', textAlign: 'left', fontWeight: '300', display: 'flex', alignItems: 'flex-end'}}> Services or Contact us</p>
        </Col>
        <Col style={{alignItems: 'center', margin:'40px 0', marginLeft: '60px' }}>
        <Button   variant="light"> (123) 123-1234</Button>{' '}
        </Col>
      </Row>
    </Container>
      
    </>
  )
}

export default TeamJoin;
