import Banner from "../Component/Banner/Banner";
import Category from "../Component/category/category";
import Featured from "../Component/Featured/Featured";
import PopularMenu from "../Component/PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;