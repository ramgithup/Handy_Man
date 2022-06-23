import Worker from "./Worker";
import { Container } from "react-bootstrap";
const AllWorker = ({ workers, updateWorker }) => (
  <>
    <h1>All Workers</h1>
    {workers.map((w) => (
      <Container
        style={{
          
          padding: '30px',
          margin: "30px auto",
          border: "2px solid #000",
          width: "30%",
          height:"30%",
          textAlign: "center",
          borderRadius: "20px"
        }}
      >
        <Worker key={w.id} {...w} updateWorker={updateWorker} />
      </Container>
    ))}
  </>
);

export default AllWorker;
