import Swal from "sweetalert2";
import axios from "axios";
import UseAuth from "../../UseAuth/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";


const FoodCart = ({ item }) => {
    const { user } = UseAuth()
    const navigate = useNavigate();
    const location = useLocation();
    const { name, recipe, image, price,  } = item;
    const handleAddToCart = food => {
        console.log(food);
        if (user && user.email) {
            console.log(user.email, food);
            const cartItem = {
                // menuId: _id,
                email: user.email,
                name,
                image,
                price
            }

           // Send data to the database
        axios.post('http://localhost:5000/cards', cartItem)
        .then(res => {
            console.log(res.data);
            if (res.data.insertedId) {
                alert("Data sent to the database successfully");
            }
        })
        .catch(error => {
            console.error("Error sending data:", error);
        });
        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "Please Login to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/sign-up', { state: { form: location } });
                }
                console.log(result);
            });
        }
    }
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
                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;