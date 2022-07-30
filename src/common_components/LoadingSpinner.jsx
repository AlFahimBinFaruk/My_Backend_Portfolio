import { MDBSpinner } from "mdb-react-ui-kit";

const LoadingSpinner = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <MDBSpinner role="status">
        <span className="visually-hidden">Loading...</span>
      </MDBSpinner>
    </div>
  );
};

export default LoadingSpinner;
