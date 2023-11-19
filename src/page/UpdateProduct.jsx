import axios from "axios";
import { useEffect, useState } from "react";
import url from "../../public/url";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DropDrown from "../components/DropDrown";
import Button from "../components/Button";
import Input from "../components/Input";

const UpdateProduct = () => {
  const { id } = useParams();
  const [Product, setProduct] = useState([]);
  const token = localStorage.getItem("token");

  const h = {
    headers: {
      "content-type": "application/json",
      "Authorization":`Bearer ${token}`
    }
  };

  const ProductId=parseInt(id);

  useEffect(() => {
    axios.get(`${url}Product/${ProductId}`, h).then((res) => {
    setProduct(res.data);
    });
  }, []);

  const { register, handleSubmit } = useForm();



  const handleUpdateProduct = (data) => {
    console.log(data)

    const { CatagoryName,Name,Code,BrandName,Price,Stock,Rating,Description } = data;

    const my={
        "ProductId":Product?.ProductId,
        "Name": Name,
        "Code": Code,
        "BrandName": BrandName,
        "Price": Price,
        "Stock": Stock,
        "Rating": Rating,
        "Description": Description,
        "CatagoryId":Product.ProductId ,
        "category": {
          "CategoryId": Product.ProductId,
          "CatagoryName": CatagoryName
      }
    
  }
    console.log(my)
    axios
      .put(
        `${url}Product
        `,
        my,
        h
      )
      .then((res) => {
        console.log(res);
        toast.success("Product Update Successfully.");
      })
      .catch((err) => {
        console.log(err);
        const message = err.response.data.message;
        console.log(message);
        toast.error(message);
      });
  };

  console.log(Product, id);

  return (
    <div
      className="
          sm:max-w-md
          mx-auto
          flex
          flex-col
          gap-2
          "
    >
      <h1
        className="
          text-gray-900
          font-bold
          text-xl
          text-center
          "
      >
        Update Product
      </h1>
      <form
        className="
          flex
          flex-col
          gap-3
          p-4 
          shadow-2xl
          "
        onSubmit={handleSubmit(handleUpdateProduct)}
      >
        <Input
          id="Name"
          label="Name"
          type="text"
          register={register}
          Value={Product.Name}
         
        />
        <Input
          id="Code"
          label="Code"
          type="text"
          register={register}
          Value={Product.Code}
        />
        <Input
          id="BrandName"
          label="BrandName"
          type="text"
          register={register}
          Value={Product.BrandName}
      
        />
        <Input
          id="Price"
          label="Price"
          type="Number"
          register={register}
          Value={Product.Number}
    
        />
        <Input
          id="Stock"
          label="Stock"
          type="number"
          register={register}
          Value={Product.Stock}
         
        />
        <Input
          id="Rating"
          label="Rating"
          type="number"
          register={register}
          Value={Product.Rating}
        />
        <Input
          id="Description"
          label="Description"
          type="text"
          register={register}
          Value={Product.Description}
         
        />
        <DropDrown
          id="CatagoryName"
          label="CatagoryName"
          type="text"
          register={register}
          Value={Product?.category?.CatagoryName}
        />
        <Button>Update Product</Button>
      </form>
    </div>
  );
};

export default UpdateProduct;