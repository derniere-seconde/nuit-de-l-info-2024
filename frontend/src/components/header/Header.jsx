import HeaderLogo from "./HeaderLogo";
import HeaderList from "./HeaderList";

const Header = () => {
  return (
    <header className="flex">
      <HeaderLogo />
      <HeaderList className="self-end" />
    </header>
  );
};

export default Header;
