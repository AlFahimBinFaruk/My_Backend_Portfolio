import { MDBCol } from "mdb-react-ui-kit";
const Contact = () => {
  let myInfo = [
    {
      title: "Email",
      link: "alfahim@gmail.com",
    },
    {
      title: "facebook",
      link: "www.facebook.com",
    },
  ];
  return (
    <MDBCol size="12" lg="5" xl="3" className="mx-auto">
      <h5 className="text-muted mb-3">Contact Info</h5>
      {myInfo.map((i) => {
        return (
          <>
            <h6>
              <span className="text-capitalize">{i.title}:</span>
              <a
                href={i.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ms-1 text-dark"
              >
                {i.link}
              </a>
            </h6>
          </>
        );
      })}
    </MDBCol>
  );
};

export default Contact;
