import { useState, useEffect } from "react";
import {Container, Form , Button} from 'react-bootstrap';

const WorkerForm = ({addWorker, id, f_name, l_name, picture, updateWorker, setEdit}) => {
  const [worker, setWorker] = useState ({ f_name: '', l_name: '', picture: ''})

  useEffect( () => {
    if (id) {
      setWorker({ f_name, l_name, picture})
    }
  },[])

 const handleSubmit = (e) => {
   e.preventDefault()

   if(id) {
     console.log (id)
    updateWorker(id,worker)
    setEdit(false)
  }
     

   else {

     addWorker(worker)
     setWorker({ f_name: '', l_name: '', picture: ''})
   }
  }

  return (
    <>
  <Container>


  <Form style={{ margin: ' 90px', width: '30%'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>first name:</Form.Label>
    <Form.Control type="Text" placeholder="Enter First name"
      name='f_name'
      value={worker.f_name}
      onChange= { (e) => setWorker({...worker, f_name: e.target.value })}
      required
     />
    <Form.Label>last name:</Form.Label>
    <Form.Control type="Text" placeholder="Enter last name"
    ame='l_name'
    value={worker.l_name}
    onChange= { (e) => setWorker({...worker, l_name: e.target.value })}
    required
     
    />
    <Form.Label>image url:</Form.Label>
    <Form.Control type="Text" placeholder="Enter img  url" 
    name='picture'
      value={worker.picture}
      onChange= { (e) => setWorker({...worker, picture: e.target.value })}
      required
      palceholder='picture'
    />
    
  </Form.Group>
  <Button variant="primary" type="submit" >
   {id? "Update" : "Submit"}
  </Button>
</Form>





    <h1>{id ? "Edit" : "Create"} Worker </h1>
    
    </Container>
    </>
  )
}








export default WorkerForm;