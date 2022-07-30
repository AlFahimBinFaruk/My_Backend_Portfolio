import { MDBBtn, MDBCol } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import LoadingSpinner from "../../common_components/LoadingSpinner";
import getContent from "../../contentful/getContent";
const ProjectDetails = () => {
  //project id
  const { id } = useParams();
  //project details state
  const [projectDetails, setProjectDetails] = useState(null);
  //getProjectDetails
  const getProjectDetails = async () => {
    let data = await getContent(id);
    setProjectDetails(data);
  };
  //destructure
  let { title, thumbnail, techStack, previewLink, description } =
    projectDetails || false;

  //call get project details if id is available or changed
  useEffect(() => {
    if (id) {
      getProjectDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  //loading spinner
  if (!projectDetails) {
    return <LoadingSpinner />;
  }
  return (
    <MDBCol size="12" lg="9" xl="7" className="mx-auto">
      {projectDetails && (
        <>
          {/* main info */}
          <div className="main-info d-flex justify-content-center align-items-center flex-wrap">
            {/* project thumb */}
            <img
              src={thumbnail.fields.file.url}
              alt="project-thumb"
              width={350}
              height={350}
              className="rounded"
            />
            {/* project main details */}
            <div className="project-main-details mt-3 text-center">
              {/* name */}
              <h6 className="mb-0 ms-3 text-dark mb-1">{title}</h6>
              {/* live link */}
              <h6 className="mb-0 ms-3">
                Preview:
                <a href={previewLink} target="_blank" rel="noopener noreferrer">
                  {previewLink}
                </a>
              </h6>
              {/* techstack */}
              <div className="techstack m-3">
                <h6>TechStack:</h6>
                <div className="d-flex flex-wrap">
                  {techStack.map((i) => {
                    return (
                      <MDBBtn
                        color="light"
                        size="sm"
                        rounded
                        className="ms-2 mb-2"
                      >
                        {i}
                      </MDBBtn>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* brief overview */}
          <div className="brief-overview my-4">
            <h6 className="text-dark">Project Description</h6>
            <div className="my-3">
              {documentToReactComponents({
                nodeType: "document",
                content: description?.content,
              })}
            </div>
          </div>
        </>
      )}
    </MDBCol>
  );
};

export default ProjectDetails;
