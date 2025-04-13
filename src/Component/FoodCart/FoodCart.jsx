
const FoodCart = ({item}) => {
    const {name, recipe,image,price} = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt=""
                        className="rounded-xl" />
                </figure>
                <p className="absolute mt-4 ml-4 bg-black text-white px-4 py-2">{price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;