import { MDBBtn, MDBCol } from "mdb-react-ui-kit";
const ProjectDetails = () => {
  return (
    <MDBCol size="12" lg="9" xl="7" className="mx-auto">
      {/* main info */}
      <div className="main-info d-flex justify-content-center align-items-center flex-wrap">
        {/* project thumb */}
        <img
          src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
          alt="project-thumb"
          width={350}
          height={350}
          className="rounded"
        />
        {/* project main details */}
        <div className="project-main-details mt-3 text-center">
          {/* name */}
          <h6 className="mb-0 ms-3 text-dark mb-1">ExpoMStore-Ecom site</h6>
          {/* live link */}
          <h6 className="mb-0 ms-3">
            Preview:{" "}
            <a href="http://xyz.com" target="_blank" rel="noopener noreferrer">
              www.xyz.com
            </a>
          </h6>
          {/* techstack */}
          <div className="techstack m-3">
            <h6>TechStack:</h6>
            <div className="d-flex flex-wrap">
              <MDBBtn color="light" size="sm" rounded className="ms-2 mb-2">
                Node.js
              </MDBBtn>
              <MDBBtn color="light" size="sm" rounded className="ms-2 mb-2">
                Node.js
              </MDBBtn>
              <MDBBtn color="light" size="sm" rounded className="ms-2 mb-2">
                Node.js
              </MDBBtn>
              <MDBBtn color="light" size="sm" rounded className="ms-2 mb-2">
                Node.js
              </MDBBtn>
              <MDBBtn color="light" size="sm" rounded className="ms-2 mb-2">
                Node.js
              </MDBBtn>
              <MDBBtn color="light" size="sm" rounded className="ms-2 mb-2">
                Node.js
              </MDBBtn>
              <MDBBtn color="light" size="sm" rounded className="ms-2 mb-2">
                Node.js
              </MDBBtn>
              <MDBBtn color="light" size="sm" rounded className="ms-2 mb-2">
                Node.js
              </MDBBtn>
              <MDBBtn color="light" size="sm" rounded className="ms-2 mb-2">
                Node.js
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
      {/* brief overview */}
      <div className="brief-overview my-4">
        <h6 className="text-dark">Project Description</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eos
          pariatur quibusdam voluptas quasi possimus earum ipsa exercitationem.
          Ex, mollitia. Consectetur aut est voluptatem impedit dolorum odit sunt
          aliquam earum quam tempora! Odio quis hic laudantium numquam nisi ab
          iusto sit velit autem voluptatem. Excepturi, autem. Asperiores
          necessitatibus ut iste recusandae molestias nulla modi odit voluptate
          officiis? Consectetur unde assumenda sint placeat minus, delectus,
          ullam a in necessitatibus excepturi fuga voluptate! Quaerat quibusdam
          repellendus aspernatur, ex itaque, animi quos dolores, odit cumque
          tenetur molestiae assumenda nisi necessitatibus voluptas enim corrupti
          error corporis tempore quis eaque consequuntur eius voluptates quae
          velit. Illo quo ut libero. Perspiciatis quod eum cumque nihil autem,
          saepe temporibus provident perferendis, fugit ab nobis suscipit odit
          laborum! Labore beatae, odit totam excepturi nulla suscipit nemo
          doloribus dicta veritatis cumque ad aperiam laborum voluptatum
          possimus cupiditate! Voluptatum ducimus officiis, debitis voluptatibus
          a praesentium architecto consequatur, voluptate, ipsa quod aspernatur
          eligendi molestias illo beatae iusto iste! Debitis, ducimus quidem
          consequatur dolorem dolore molestias vel numquam hic veniam, cum
          necessitatibus totam incidunt fugiat commodi rem. Natus officia
          possimus cupiditate assumenda exercitationem. Deserunt quibusdam
          tenetur provident a, aperiam exercitationem laborum temporibus
          deleniti ad. Eaque facere, accusantium ducimus ut voluptates
          asperiores quos sed totam sunt cumque earum praesentium similique
          ratione deserunt ex fuga consequatur tenetur nemo non a ipsum. Cumque
          veniam, explicabo, blanditiis voluptas ullam officiis distinctio
          mollitia quas ratione autem ab doloremque natus reprehenderit rerum
          dignissimos ex recusandae nemo, perspiciatis non modi inventore
          similique minima possimus enim. Quam iure est doloribus quibusdam quos
          voluptatem amet dicta cupiditate distinctio eveniet dolorem, facilis
          expedita necessitatibus molestias reprehenderit hic? Qui saepe a
          labore temporibus numquam vitae, sequi quae in fugiat explicabo
          doloremque distinctio, corrupti autem ipsa eos nisi? Repellat, officia
          eaque? Quasi pariatur enim error porro quo corporis quam at culpa
          ullam hic voluptas, eius rerum obcaecati laborum eos illum tempora
          maxime veniam necessitatibus unde aliquid fuga et voluptatum. Deserunt
          qui odio, soluta nisi ipsam omnis repellat atque debitis a ullam optio
          deleniti ratione sequi eum iste?
        </p>
      </div>
    </MDBCol>
  );
};

export default ProjectDetails;
