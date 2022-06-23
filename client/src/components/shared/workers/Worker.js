import { useState } from "react";
import WorkerForm from "./WorkerForm";

const Worker = ({id, first_name, last_name, image, updateWorker}) =>{
 const [editing,setEdit] = useState(false)
 return (
  <>
    {editing ?
    <>
     <WorkerForm
     id={id}
     first_name={first_name}
     last_name={last_name}
     image={image}
     updateWorker={updateWorker}
     setEdit={setEdit}
     
     
     />
     <button onClick={() => setEdit(false)}>Cancel</button>
    </>
   :
    <>
     <div>
       <img  src={image} />
       <h3>{first_name}{last_name}</h3>
       <button onClick={() => setEdit(true)}>Edit</button>
       <hr />
     </div>
     <br />
    </>
}
  </>

 )

}


export default Worker;