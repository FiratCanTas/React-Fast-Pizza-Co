import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="bg-yellow-500 px-4 py-4">
      <Link to="/">Fast React Pizza Co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
