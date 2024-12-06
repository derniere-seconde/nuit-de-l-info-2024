import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar shouldHideOnScroll="true">
      <NavbarBrand>
        <Link color="foreground" href="/">
          <p className="font-bold text-inherit"> Race for water💧</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/poke-quiz" aria-current="page">
            Poke quiz
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/newsletter">
            Infolettre
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
