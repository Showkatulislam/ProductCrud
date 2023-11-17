import { Link, Outlet } from "react-router-dom";
import UseAuth from "../context/UseAuth";

const Home = () => {
  const {user,setUser}=UseAuth()

  const logout=()=>{
    localStorage.removeItem('email')
    setUser("")
  }
  return (
    <div
      className="
        min-h-screen
        bg-gray-900
        overflow-hidden
        p-3
        "
    >
      <div
        className="
        relative
        "
      >
        <button
        className="
        absolute
        top-5
        md:left-20
        w-20
        h-6
        bg-white
        py-1.3
        px-4
        md:hidden
        "
       
        >toggle</button>
        <button
          className="
        absolute
        top-5
        md:right-20
        right-2
        w-20
        h-6
        bg-white
        py-1.3
        px-4
        "
        onClick={()=>logout()}
        >
          Logout
        </button>
      </div>
      <div
        className="
       grid 
       grid-cols-4 
       mt-12 
       gap-x-6"
      >

        <div
          className="
        col-span-1 
        bg-white 
        py-10 
        px-3 
        hidden
        md:block
        rounded 
        shadow-lg
        h-[500px]
        max-h-[800px]
        "
        >
        <div
        className="
        flex
        flex-col
        gap-x-4
        "
          >
        <Link
        className="
        py-3
        px-4
        font-bold
        "
        to="/home/add-product"
         >
          {user}
        </Link>

        <Link
        className="
        py-3
        px-4
        font-bold
        "
        to="/home/add-product"
         >
            Add Product
        </Link>
        <Link
        className="
        py-3
        px-4
        font-bold
        "
        >
        View All Product
        </Link>
          </div>
        </div>


        <div
        className="
        col-span-3 
        bg-white
        py-10 
        px-3 
        rounded
        shadow-lg
        h-full
        overflow-y-auto
        min-w-[480px]
  
        "
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
