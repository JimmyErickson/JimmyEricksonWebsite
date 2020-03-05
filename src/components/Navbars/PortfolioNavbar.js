import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function PortfolioNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={e => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Menu
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                About Me
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Work Experience
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Personal Projects
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Hire Me
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                Social
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand>
              Jimmy's Portfolio
            </NavbarBrand>
            
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://github.com/JimmyErickson"
                  target="_blank"
                  id="github-tooltip"
                >
                  <i className="fab fa-github"></i>
                  <p className="d-lg-none d-xl-none">GitHub</p>
                </NavLink>
                <UncontrolledTooltip target="#github-tooltip">
                  Check out my GitHub
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.linkedin.com/in/jimmy-erickson/"
                  target="_blank"
                  id="linkedin-tooltip"
                >
                  <i className="fab fa-linkedin"></i>
                  <p className="d-lg-none d-xl-none">Linkedin</p>
                </NavLink>
                <UncontrolledTooltip target="#linkedin-tooltip">
                  Connect with me on Linkedin
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default PortfolioNavbar;
