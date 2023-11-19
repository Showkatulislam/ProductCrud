import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import url from "../../public/url";
import toast from "react-hot-toast";
import DropDrown from "../components/DropDrown";

const AddProduct = () => {
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

  const handleAddProduct = (data) => {
    const token = localStorage.getItem("token");
    const {CatagoryName}=data;
    console.log(CatagoryName);
    data.category.CatagoryName=CatagoryName;
    console.log(data);
    const h = {
      headers: {
        "content-type": "application/json",
        "Authorization":`Bearer ${token}`
      }
    };
    axios
      .post(
        `${url}Product
    `,
        data,
        h
      )
      .then((res) => {
        console.log(res);
        toast.success("Product add SuccessFully.");
      })
      .catch((err) => {
        console.log(err);
        const message = err.response.data.message;
        console.log(message);
        toast.error(message);
      });
  };
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
        Add Product
      </h1>
      <form
        className="
        flex
        flex-col
        gap-3
        p-4 
        shadow-2xl
        "
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <Input
          id="Name"
          label="Name"
          type="text"
          register={register}
          required={true}
        />
        <Input
          id="Code"
          label="Code"
          type="text"
          register={register}
          required={true}
        />
        <Input
          id="BrandName"
          label="BrandName"
          type="text"
          register={register}
          required={true}
        />
        <Input
          id="Price"
          label="Price"
          type="Number"
          register={register}
          required={true}
        />
        <Input
          id="Stock"
          label="Stock"
          type="number"
          register={register}
          required={true}
        />
        <Input
          id="Rating"
          label="Rating"
          type="number"
          register={register}
          required={true}
        />
        <Input
          id="Description"
          label="Description"
          type="text"
          register={register}
          required={true}
        />
        <DropDrown
          id="CatagoryName"
          label="CatagoryName"
          type="text"
          register={register}
          required={true}
        />
        <Button>Add Product</Button>
      </form>
    </div>
  );
};

export default AddProduct;
