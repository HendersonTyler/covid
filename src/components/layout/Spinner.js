import Loader from "react-bootstrap/Spinner";

const Spinner = () => {
  return (
    <div>
      <Loader
        style={{ marginLeft: "auto", marginRight: "auto", display: "flex" }}
        animation="grow"
      />
    </div>
  );
};

export default Spinner;
