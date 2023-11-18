import axios from "axios";
import { useEffect, useState } from "react";
import url from "../../public/url";

const DropDrown = ({ id, label, type, required, register }) => {
  const [Categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");
  const h = {
    headers: {
      "content-type": "application/json",
      "Authorization":`Bearer ${token}`
    }
  };
  useEffect(() => {
    axios.get(`${url}Category`, h).then((res) => {
      setCategories(res.data);
    });
  }, []);
  return (
    <div>
      <label
        className="
            text-md
            text-gray-800
            block
          
            font-semibold
            "
        htmlFor={id}
      >
        {label}
      </label>
      <select
        className="
              outline-none
              w-full
              shadow-sm
              ring-1
              ring-inset
              ring-gray-300
              py-1
              focus:ring-2
              focus:ring-inset
              focus:ring-sky-500
              sm:text-sm
              placeholder:text-gray-800
              rounded
              px-2
              "
        type={type}
        {...register(id, { required })}
      >
        {Categories.map((cat) => (
          <option key={cat.CategoryId} value={cat.CatagoryName}>
            {cat.CatagoryName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDrown;
