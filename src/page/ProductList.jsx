import axios from "axios";
import { useEffect, useState } from "react";
import url from "../../public/url";
import { toast } from "react-hot-toast";
import ProductCart from "../components/ProductCart";
const ProductList = () => {
  const [Products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  const h = {
    headers: {
      "content-type": "application/json",
      token,
    },
  };
  useEffect(() => {
    axios.get(`${url}Product`, h).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const handleDeleteProduct = (ProductId) => {
    axios.delete(`${url}Product/${ProductId}`, h).then((res) => {
      if (res.statusText) {
        setProducts(
          Products.filter((Product) => Product._ProductId !== ProductId)
        );
        toast.success("Product Delete Successfully");
      }
    });
  };

  return (
    <>
      <h1 className="text-center text-2xl font-bold">All Product</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mx-auto">
        {Products?.map((Product) => (
          <ProductCart
            action={handleDeleteProduct}
            key={Product.ProductId}
            Product={Product}
          ></ProductCart>
        ))}
      </div>
    </>
  );
};

export default ProductList;