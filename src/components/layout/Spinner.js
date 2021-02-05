import Loader from "react-bootstrap/Spinner";

const Spinner = () => {
  return (
    <div className="p-3">
      <Loader
        style={{ marginLeft: "auto", marginRight: "auto", display: "flex" }}
        animation="grow"
      />
    </div>
  );
};

export default Spinner;
