import { MDBCol } from "mdb-react-ui-kit";
const Contact = () => {
  // name ,title is required ,link is optional
  let myInfo = [
    {
      title: "Email",
      name: "fah8m88@gmail.com",
    },
    {
      title: "facebook",
      link: "https://www.facebook.com/profile.php?id=100048229787569",
      name: "Md Fahim",
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
              {i.link ? (
                <a
                  href={i.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-1 text-dark"
                >
                  {i.name}
                </a>
              ) : (
                <span className="ms-1 text-dark">{i.name}</span>
              )}
            </h6>
          </>
        );
      })}
    </MDBCol>
  );
};

export default Contact;
