import { useState, useEffect } from "react";
import axios from 'axios';
import WorkerForm from './WorkerForm';
import AllWorker from './AllWorker';

const Workers = () => {
  const [workers,setWorkers] = useState([])

  useEffect( () => {
    axios.get('/api/works')
    .then( res => setWorkers(res.data))
    .catch( err => console.log(err))
  }, [])

  const addWorker = (worker) => {
   axios.post('/api/works',{ worker })
      .then( res => {
        setWorkers([...workers, res.data])
      })
      .catch( err => console.log(err))
  }

  const updateWorker = (id, worker) => {
    console.log (id)
    axios.put(`/api/works/${id}`,{ worker })
     .then( res =>{
       let newUpdatedWorkers = workers.map( w => {
         if (w.id === id) {
           return res.data
         }
         return w
           
       })
        setWorkers(newUpdatedWorkers)
     })
     .catch( err => console.log(err))


  }
return (
<>
<WorkerForm addWorker={addWorker} />
<AllWorker 
workers={workers}
updateWorker={updateWorker}
/>
</>
)
}
export default Workers;