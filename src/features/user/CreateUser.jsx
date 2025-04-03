import { useState } from "react";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 text-center">
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        className="mt-4 w-72 rounded-sm px-2"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <div className={username ? "visible" : "invisible"}>
        <button className="pt-2">Start ordering</button>
      </div>
    </form>
  );
};

export default CreateUser;
