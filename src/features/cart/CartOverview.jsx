import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div className="bg-stone-900 text-slate-100">
      <p className="font-semibold uppercase text-slate-200">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart" className="uppercase">
        Open cart &rarr;
      </Link>
    </div>
  );
};

export default CartOverview;
