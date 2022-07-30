import { MDBCol } from "mdb-react-ui-kit";
const Contact = () => {
  let myInfo = [
    {
      title: "Email",
      link: "fah8m88@gmail.com,alfahimbinfaruk.inc@gmail.com",
    },
    {
      title: "facebook",
      link: "https://www.facebook.com/profile.php?id=100048229787569",
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
