import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";
const Header = () => {
  const [showNavCentred, setShowNavCentred] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarCentered"
          aria-controls="navbarCentered"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse
          navbar
          show={showNavCentred}
          center
          id="navbarCentered"
          className="py-3 justify-content-center"
        >
          <MDBNavbarNav fullWidth={false} className="mb-2 mb-lg-0">
            {/* home */}
            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" className="fw-bold">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-dark" : "text-muted"
                  }
                >
                  Home
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* contact */}
            <MDBNavbarItem className="fw-bold">
              <MDBNavbarLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-dark" : "text-muted"
                  }
                >
                  Contact me
                </NavLink>
              </MDBNavbarLink>
            </MDBNavbarItem>
            {/* download cv */}
            <MDBNavbarItem className="fw-bold">
              <MDBNavbarLink>Download CV</MDBNavbarLink>
            </MDBNavbarItem>
            {/* github link */}
            <MDBNavbarItem className="fw-bold">
              <MDBNavbarLink>
                <a
                  href="https://github.com/AlFahimBinFaruk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/images/github.jpg"
                    alt=""
                    srcset=""
                    width={25}
                    height={25}
                  />
                </a>
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
