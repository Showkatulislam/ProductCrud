import { useForm } from "react-hook-form";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";
import url from "../../public/url";
import toast from "react-hot-toast";

const AddProduct = () => {

    const {
        register,
        handleSubmit
    }=useForm()

    const handleAddProduct
=(data)=>{
        const token=localStorage.getItem('token')
        console.log(data);
        const h={headers:{
            'content-type': 'application/json',
            token
        }}
        axios.post(`${url}v1/Product
    `,data,h)
        .then((res)=>{
            console.log(res);
            const message=res.data.message
            toast.success(message)
        })
        .catch(err=>{
            console.log(err);
            const message=err.response.data.message
            console.log(message);
            toast.error(message)
            
        })
    }
    return (
        <div
        className="
        sm:max-w-md
        mx-auto
        flex
        flex-col
        gap-3
        py-4
        "
        >
        <h1 
        className="
        text-purple-500
        font-bold
        text-2xl
        text-center
        ">
            Add Product
        
        </h1>
        <form
        className="
        flex
        flex-col
        gap-3
        p-4 
        shadow-xl
        border
        border-purple-600
        "
        onSubmit={handleSubmit(handleAddProduct
        )}
        >
        <Input 
        id='title'
        label="Title"
        type='text'
        register={register}
        required={true}
        />
        <Input 
        id='content'
        label="Content"
        type='text'
        register={register}
        required={true}
        />
        <Input 
        id='email'
        label="Email"
        type='text'
        register={register}
        required={true}
        />
        <Button>Add Product
        
        </Button>
        </form>
           
        </div>
    );
};

export default AddProduct;