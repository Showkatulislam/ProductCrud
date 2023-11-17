const Input = ({ id, label, type, required, register }) => {
  return (
    <div>
      <label
        className="
            text-md
            text-gray-800
            block
            pb-1
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
        type={type}
        {...register(id, { required })}
      />
    </div>
  );
};

export default Input;
