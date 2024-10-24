import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData();
  return (
    <ul>
      {menu?.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export const loader = async () => {
  const response = await getMenu();
  return response;
};

export default Menu;
