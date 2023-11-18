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
  const { register, handleSubmit } = useForm({
    defaultValues: {
      Name: "",
      Code: "",
      BrandName: "",
      Price: 0,
      Stock: 0,
      Rating: 0,
      Description: "",
      CatagoryId: 0,
      category: {
        CategoryId: 0,
        CatagoryName: "Hp",
      },
    },
  });
  const h = {
    headers: {
      "content-type": "application/json",
      token,
    },
  };
  useEffect(() => {
    axios.get(`${url}Product`, h).then((res) => {
      setProduct(res.data.find((p) => p.ProductId == Number(id)));
    });
  }, []);

  const handleUpdateProduct = (data) => {
    const token = localStorage.getItem("token");
    const { CatagoryName } = data;
    console.log(CatagoryName);
    data.category.CatagoryName = CatagoryName;
    data.ProductId = Product.ProductId;
    console.log(data);
    const h = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .put(
        `${url}Product
        `,
        data,
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
          id="title"
          label="Name"
          type="text"
          register={register}
          defualtValue={Product?.Name}
        />
        <Input
          id="Code"
          label="Code"
          type="text"
          register={register}
          defualtValue={Product?.Code}
        />
        <Input
          id="BrandName"
          label="BrandName"
          type="text"
          register={register}
          defualtValue={Product?.BrandName}
        />
        <Input
          id="Price"
          label="Price"
          type="Number"
          register={register}
          defualtValue={Product?.Price}
        />
        <Input
          id="Stock"
          label="Stock"
          type="number"
          register={register}
          defualtValue={Product?.Stock}
        />
        <Input
          id="Rating"
          label="Rating"
          type="number"
          register={register}
          defualtValue={Product?.Rating}
        />
        <Input
          id="Description"
          label="Description"
          type="text"
          register={register}
          defualtValue={Product?.Description}
        />
        <DropDrown
          id="CatagoryName"
          label="CatagoryName"
          type="text"
          register={register}
          defualtValue={Product?.category?.CatagoryName}
        />
        <Button>Update Product</Button>
      </form>
    </div>
  );
};

export default UpdateProduct;
