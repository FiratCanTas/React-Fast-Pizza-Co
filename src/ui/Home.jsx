import CreateUser from "../features/user/CreateUser";

const Home = () => {
  return (
    <div>
      <h1 className="text-dark text-center text-xl font-semibold text-stone-500">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
};

export default Home;
