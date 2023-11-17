import { Link } from "react-router-dom";
import UseAuth from "./context/UseAuth";


const App = () => {
  const {user}=UseAuth()
  console.log(user);
  return (
    <div
    className="
    min-h-screen
    flex 
    flex-col
    justify-center
    bg-gray-900
    max-w-full
    mx-auto
    "
    >
      <h1
      className="
      text-center
      md:text-5xl
      sm:text-4xl
      mb-10
      text-purple-600
      font-bold
      "
      >
        WELCOME TO YOU OUR Product MANAGEMENT SYSTEM {user?.name}
      </h1>
      <div
      className="
      text-center
      mt-8
      "
      >
        <Link
        className="
        md:text-4xl
        font-bold
        bg-orange-500
        text-white
        py-2
        px-5
        rounded
        ring-2
        "
        to='/auth'
        >
          Click to Visit
        </Link>
      </div>
    </div>
  );
};

export default App;