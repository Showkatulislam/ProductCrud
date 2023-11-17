import { useCallback, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import url from "../../public/url";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../context/UseAuth";

const AuthForm = () => {
  const [variant, setVariant] = useState("LOGIN");
  const navigate = useNavigate();
  const {setUser}=UseAuth()

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleForm = (data) => {
    const {email,password,name}=data


    if (variant === "LOGIN") {
      axios.post(`${url}api/auth`, {email,password})
      .then(res=>{
        console.log(res);
        const token=res.data.Token;
        const user=res.data.user;
        setUser(user.Email)
        localStorage.setItem('email',user.Email);
        localStorage.setItem('token',token)
        navigate('/home')
        toast.success("User create Successfully")
      })
      .catch(err=>{
        const {message}=err.response.data
       
        toast.error(message)
        console.log(err);
      })

    } else {
      axios.post(`${url}api/Auth/addUser`, {email,password,name})
      .then(res=>{
        toast.success("User create Successfully")
        toast.success("Please Login")
        console.log(res);
      })
      .catch(err=>{
        console.log(err);
        const {response}=err
        console.log(response.data)
        toast.error("Authentication Error!")
        
      })
    }
  };

  return (
    <div
      className="
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        bg-white
        px-10
        py-3
        rounded-md
        "
    >
      <div
        className="
        mt-3
        "
      >
        <h1
          className="
           text-center
           text-gray-800
           text-2xl
           font-bold"
        >
          {variant === "LOGIN" ? "Login Page" : "Sign Up"}
        </h1>
      </div>

      <form
        className="
        space-y-5"
        onSubmit={handleSubmit(handleForm)}
      >
        {variant === "REGISTER" && (
          <Input
            id="name"
            type="text"
            label="Name"
            register={register}
            required={true}
          />
        )}

        <Input
          id="email"
          type="email
          "
          label="Enter Your Email"
          register={register}
          required={true}
        />

        <Input
          id="password"
          type="password"
          label="Password"
          register={register}
          required={true}
        />

        <Button type="submit">
          {variant === "LOGIN" ? "Login" : "Sign Up"}
        </Button>
      </form>

      <div
        className="
        mt-4
        flex
        justify-center
        items-center
        gap-2
     "
      >
        <p className="text-sm font-semibold">
          {variant === "LOGIN" ? "New User " : "Already have an account? "}
        </p>
        <button
          className="
            text-sm
            font-semibold
            underline
            cursor-pointer"
          onClick={toggleVariant}
        >
          {variant === "LOGIN" ? " Create a Account" : " Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
