import Worker from './Worker';
const AllWorker = ({workers, updateWorker}) => (

<>
<h1>All Workers</h1>
{
  workers.map ( w =>
    <Worker 
     key={w.id}
     {...w}
     updateWorker={updateWorker}
    
    />

    

  )
}
</>
)

export default AllWorker;