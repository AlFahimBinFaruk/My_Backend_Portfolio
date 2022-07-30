import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import getContents from "../../contentful/getContents";
import LoadingSpinner from "../../common_components/LoadingSpinner";
const Home = () => {
  let navigate = useNavigate();
  // projectlist state
  const [projectList, setProjectList] = useState(null);
  //get project list func
  const getProjectList = async () => {
    let data = await getContents("projects");
    setProjectList(data);
    console.log("data", data);
  };
  //call get project list when the page loads
  useEffect(() => {
    getProjectList();
  }, []);
  //loading spinner
  if (!projectList) {
    return <LoadingSpinner />;
  }
  return (
    <div className="home">
      <h5 className="text-center mb-4">My Project List</h5>
      {/* project list */}
      <MDBRow className="flex-column justify-content-center align-items-center">
        {projectList &&
          projectList.map((i) => {
            return (
              <MDBCol size="12" md="8" lg="6" xl="4" className="mb-3">
                <MDBCard
                  className="shadow"
                  role="button"
                  onClick={() => navigate(`${i.sys.id}`)}
                >
                  <MDBCardBody className="d-flex justify-content-center align-items-center">
                    {/* project thumb */}
                    <img
                      src={i.fields.thumbnail.fields.file.url}
                      alt="project-thumb"
                      width={25}
                      height={25}
                      className="rounded"
                    />
                    {/* project name */}
                    <h6 className="mb-0 ms-3">{i.fields.title}</h6>
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
