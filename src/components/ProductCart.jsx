import { Link } from "react-router-dom";

const ProductCart = ({Product,action}) => {
    const {Name,Description,Price,ProductId}=Product
    return (
        <div
        className="
        flex 
        flex-col
        gap-4
        bg-gray-400 
        hover:bg-gray-500
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
            >{Name}</h1>
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
                >{Description}</p>
                <div
                className="
                font-bold
                text-md
                "
                >
                    Price : <span className="text-purple-900">{Price}</span>
                </div>
                <div 
                className="
                flex justify-between items-center"
                >
                    <button
                    className="
                    py-1
                    px-3
                    bg-rose-500
                    text-center
                    rounded-2
                     "
                    onClick={()=>action(ProductId)}
                    >delete</button>

                    <div
                    className="
                    py-1
                    px-3
                    bg-blue-500
                    text-center
                    rounded-2
                     ">
                        <Link to={`update-Product/${ProductId}`}>Update Prouct</Link>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default ProductCart;