import { useState, useEffect } from "react";

const WorkerForm = ({addWorker, id, first_name, last_name, image, updateWorker, setEdit}) => {
  const [worker, setWorker] = useState ({ first_name: '', last_name: '', image: ''})

  useEffect( () => {
    if (id) {
      setWorker({ first_name, last_name, image})
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
     setWorker({ first_name: '', last_name: '', image: ''})
   }
  }

  return (
    <>
    <h1>{id ? "Edit" : "Create"} Worker </h1>
    <form onSubmit={handleSubmit}>
      
      <input 
      name='first name'
      value={worker.first_name}
      onChange= { (e) => setWorker({...worker, first_name: e.target.value })}
      required
      palceholder='first name'
      />

      <input 
      name='last name'
      value={worker.last_name}
      onChange= { (e) => setWorker({...worker, last_name: e.target.value })}
      required
      palceholder='last name'
      />
      <input 
      name='image'
      value={worker.image}
      onChange= { (e) => setWorker({...worker, image: e.target.value })}
      required
      palceholder='image'
      />
      <button type='submit'>{id? "Update" : "Submit"}</button>
    </form>
    </>
  )
}








export default WorkerForm;