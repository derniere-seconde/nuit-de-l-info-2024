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
        <p className="font-bold text-inherit"> nuit de l&apos;info</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/test" aria-current="page">
            Poke quiz
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/newsletter">
            Newsletter
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
