import { Link } from "react-router-dom";

const CartOverview = () => {
  return (
    <div className="mt-8 flex items-center justify-between bg-stone-900 px-4 py-4 text-slate-100">
      <p className="space-x-1 font-semibold uppercase text-slate-200">
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
