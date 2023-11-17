const Button = ({children,type}) => {
    return (
        <div>
            <button 
            className="
            w-full
            bg-blue-600
            py-1
            px-5
            text-center
            rounded
            text-white
            font-semibold
            "
            type={type}>
            {children}
            </button>
        </div>
    );
};

export default Button;