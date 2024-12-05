import { Link } from "react-router-dom";

const HeaderList = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/newsletter">Newsletter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderList;
