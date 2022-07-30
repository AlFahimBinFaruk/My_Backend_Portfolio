import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { useState } from "react";
const MySkills = () => {
  const [count, setcount] = useState([1, 2, 3, 4, 56, 9]);
  return (
    <div className="my-skills">
      <MDBRow>
        {count.map((i) => {
          return (
            <MDBCol size="12" md="4" lg="2" className="mb-3">
              <MDBCard className="shadow" role="button">
                <MDBCardBody className="d-flex justify-content-center align-items-center">
                  {/* thumb */}
                  <img
                    src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
                    alt="project-thumb"
                    width={25}
                    height={25}
                    className="rounded"
                  />
                  {/* project name */}
                  <h6 className="mb-0 ms-3 text-dark">
                    <small>ExpoMStore-Ecom site</small>
                  </h6>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </div>
  );
};

export default MySkills;
