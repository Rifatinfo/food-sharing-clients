import FoodCart from "../FoodCart/FoodCart";

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4 max-w-7xl mx-auto">
            {items.map(item => <FoodCart item={item} key={item.id}/>)}
        </div>
    );
};

export default OrderTab;