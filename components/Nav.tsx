import clsx from "clsx";
import { Routes, Settings } from "lib/sanity.queries";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import SanityImage from "./SanityImage";

const Navigation = ({
  routes,
  settings,
}: {
  routes: Routes;
  settings: Settings;
}) => {
  const router = useRouter();
  return (
    <Navbar
      className={clsx("bg-white navbar-underline")}
      expand="lg"
      sticky="top"
    >
      <Container className={clsx("align-items-end")}>
        <Navbar.Brand as={Link} href="/">
          <SanityImage
            alt="Journeys Continue Logo"
            className={clsx("d-inline-block align-top")}
            image={settings.brandLogo}
            width={160}
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={clsx("justify-content-end flex-grow-1 pe-3")}>
            <Nav.Link
              active={router.asPath === "/" || router.pathname === "/"}
              as={Link}
              // eslint-disable-next-line sonarjs/no-duplicate-string
              className={clsx("nav-link nav-item")}
              href="/"
            >
              Home
            </Nav.Link>
            {routes.items?.map((route, index) =>
              route.routes ? (
                route.routes.length === 1 ? (
                  <Nav.Link
                    active={router.asPath === `/${route.routes[0].path ?? ""}`}
                    as={Link}
                    className={clsx("nav-link nav-item")}
                    href={route.routes[0].path}
                    key={index}
                  >
                    {route.title ?? "Untitled"}
                  </Nav.Link>
                ) : (
                  <NavDropdown
                    active={route.routes
                      .map((route) => `/${route.path ?? ""}`)
                      .includes(router.asPath)}
                    key={index}
                    title={route.title ?? "Untitled"}
                  >
                    {route.routes.map((subItem, index) => (
                      <NavDropdown.Item
                        active={router.asPath === `/${subItem.path ?? ""}`}
                        as={Link}
                        className={clsx("dropdown-item")}
                        href={subItem.path}
                        key={index}
                      >
                        {subItem.title ?? "Untitled"}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                )
              ) : (
                <Nav.Link
                  as={Link}
                  className={clsx("nav-link nav-item")}
                  href="/"
                  key={index}
                >
                  {route.title ?? "Untitled"}
                </Nav.Link>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
