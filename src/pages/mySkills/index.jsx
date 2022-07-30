import { MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../common_components/LoadingSpinner";
import getContents from "../../contentful/getContents";
const MySkills = () => {
  //skill list state
  const [skillList, setSkillList] = useState(null);
  //get my skill list
  const getMySkillList = async () => {
    const data = await getContents("skills");
    setSkillList(data);
  };

  //call getMySkillList when page loads
  useEffect(() => {
    getMySkillList();
  }, []);

  //loading spinner
  if (!skillList) {
    return <LoadingSpinner />;
  }

  return (
    <div className="my-skills">
      <MDBRow>
        {skillList &&
          skillList.map((i) => {
            return (
              <MDBCol size="12" md="4" lg="2" className="mb-3">
                <MDBCard className="shadow" role="button">
                  <MDBCardBody className="d-flex justify-content-center align-items-center">
                    {/* thumb */}
                    <img
                      src={i.fields.thumbnail.fields.file.url}
                      alt="project-thumb"
                      width={25}
                      height={25}
                      className="rounded"
                    />
                    {/*  name */}
                    <h6 className="mb-0 ms-3 text-dark">
                      <small>{i.fields.title}</small>
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
