import { Link } from "react-router-dom";

const ProductCart = ({ Product, action }) => {
  const { Name, Description, Price, ProductId, Code ,BrandName,category} = Product;
  return (
    <div
      className="
max-w-sm
bg-white border 
border-gray-200 
rounded-lg shadow 
dark:bg-gray-800 
dark:border-gray-700"
    >
      <a href="#">
        <img
          className="
        rounded-t-lg
        "
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5
            className="mb-2 
            text-2xl 
            font-bold 
            tracking-tight 
            text-gray-900 
            dark:text-white"
          >
            {Name}
          </h5>
        </a>
        <p
          className="mb-3 
        font-normal 
        text-gray-700 
        dark:text-gray-400
        text-justify
        "
        >
          {Description}
        </p>
        <div
        className="
        flex 
        justify-between
        items-center
        my-2
        "
        >
          <p
            className="
          text-white
            font-bold
            text-base
            "
          >
            Price : <span>{Price}</span>
          </p>
          <p
            className="
        text-white
        font-bold
        "
          >
            Code : <span>{Code}</span>
          </p>
        </div>
        <div
        className="
        flex 
        justify-between
        items-center
        my-2
        "
        >
          <p
            className="
          text-white
            font-bold
            "
          >
            BrandName : <span>{BrandName}</span>
          </p>
          <p
            className="
          text-white
            font-bold
            "
          >
            CategoryName : <span>{category?.CategoryName}</span>
          </p>

        </div>
        <div
          className="
        flex 
        justify-between
        items-center"
        >
          <Link
            to={`update-Product/${ProductId}`}
            className="
        inline-flex 
        items-center 
        px-3 py-2 
        text-sm 
        font-medium 
        text-center 
        text-white 
        bg-blue-700 
        rounded-lg 
        hover:bg-blue-800 
        focus:ring-4 
        focus:outline-none 
        focus:ring-blue-300 
        dark:bg-blue-600 
        dark:hover:bg-blue-700 
        dark:focus:ring-blue-800"
          >
            Update Product
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          <button
            className="
        inline-flex 
        items-center 
        px-3 py-2 
        text-sm 
        font-medium 
        text-center 
        text-white 
        bg-rose-700
        rounded-lg 
        hover:bg-rose-800 
        focus:ring-4 
        focus:outline-none 
        focus:ring-blue-300 
        dark:rose-600 
        dark:hover:rose-700 
        dark:focus:ring-rose-800"
            onClick={() => action(ProductId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
