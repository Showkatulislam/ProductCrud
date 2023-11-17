const ProductCart = ({Product,action}) => {
    console.log(Product.ProductId);
    return (
        <div
        className="
        flex 
        flex-col
        gap-4
        bg-cyan-500 
        hover:bg-cyan-600
        py-4
        px-3
        rounderd
        shadow-lg
        text-white
        "
        >
            <h1
            className="
            text-bold 
            text-2xl "
            >{Product?.Name}</h1>
             <div
             className="
             flex
             flex-col
             gap-2
             "
             >
                <p
                className="
                border-2
                py-1
                px-2
                "
                >{Product.Description}</p>
                <div
                className="
                font-bold
                text-md
                "
                >
                    status : <span className="text-purple-900">{Product.Price}</span>
                </div>
                <div>
                    <button
                    className="
                    py-1
                    px-3
                    bg-rose-500
                    text-center
                    rounded-2
                     "
                    onClick={()=>action(Product.id)}
                    >delete</button>
                </div>
             </div>
        </div>
    );
};

export default ProductCart;