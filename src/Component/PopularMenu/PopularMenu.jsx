// import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import ManuItem from "../../Shared/ManuItem";
import useMenu from "../../hooks/useMenu";


const PopularMenu = () => {
    const  [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() =>{
    //     fetch('menu.json')
    //      .then(res => res.json())
    //      .then(data => {
    //         const popularItem = data.filter(item => item.category === 'popular');
    //         setMenu(popularItem);
    //      })
    // })
    return (
        <section className="max-w-6xl mx-auto mb-7">
            <SectionTitle
                heading="From Our Menu"
                subHeading="Popular Item"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popular.map(item => <ManuItem 
                        key={item._id}
                        item={item}
                    ></ManuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;







