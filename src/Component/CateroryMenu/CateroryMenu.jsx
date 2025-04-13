import { Link } from "react-router-dom";
import ManuItem from "../../Shared/ManuItem";

const CateroryMenu = ({ item , title}) => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
                {
                    item.map(item => <ManuItem
                        key={item._id}
                        item={item}
                    ></ManuItem>)
                }
            </div>
            <div className="max-w-7xl mx-auto">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-gray-500 mx-auto ">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default CateroryMenu;