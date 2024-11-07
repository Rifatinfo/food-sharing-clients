import Banner from "../Component/Banner/Banner";
import Category from "../Component/category/category";
import Featured from "../Component/Featured/Featured";
import PopularMenu from "../Component/PopularMenu/PopularMenu";
import Testimonial from "../Component/Testimonial/testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;