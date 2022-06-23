import { useState } from "react";
import WorkerForm from "./WorkerForm";


const Worker = ({id, f_name, l_name, picture, updateWorker}) =>{
 const [editing, setEdit] = useState(false)
 return (
  <>
    {editing ?
    <>
     <WorkerForm
     id={id}
     first_name={f_name}
     last_name={l_name}
     image={picture}
     updateWorker={updateWorker}
     setEdit={setEdit}
     
     
     />
     <button onClick={() => setEdit(false)}>Cancel</button>
    </>
   :
    <>
     <div>
       <img  src={picture} />
       <h3>{f_name}{l_name}</h3>
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