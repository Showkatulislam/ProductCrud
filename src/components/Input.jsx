const Input = ({ id, label, type,  register,Value}) => {
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
      <input
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
          
           defaultValue={Value}
        type={type}
        {...register(id)}
      />
    </div>
  );
};

export default Input;