import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
const Home = () => {
  let navigate = useNavigate();
  const [count, setcount] = useState([1, 2, 3, 4, 56, 9]);
  return (
    <div className="home">
      <h5 className="text-center mb-4">My Project List</h5>
      {/* project list */}
      <MDBRow className="flex-column justify-content-center align-items-center">
        {count.map((i) => {
          return (
            <MDBCol size="12" md="8" lg="6" xl="4" className="mb-3">
              <MDBCard
                className="shadow"
                role="button"
                onClick={() => navigate("/ljdljslf")}
              >
                <MDBCardBody className="d-flex justify-content-center align-items-center">
                  {/* project thumb */}
                  <img
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    alt="project-thumb"
                    width={25}
                    height={25}
                    className="rounded"
                  />
                  {/* project name */}
                  <h6 className="mb-0 ms-3">ExpoMStore-Ecom site</h6>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </div>
  );
};

export default Home;
