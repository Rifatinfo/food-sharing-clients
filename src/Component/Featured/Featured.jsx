import SectionTitle from "../SectionTitle/SectionTitle";
import featuredImg from '../../assets/home/featured.jpg';
import '../FeaturedCss/Featured.css';

const Featured = () => {
    return (
        <div className="featured-item mt-10 mb-10 bg-fixed">
            <SectionTitle subHeading="check it out" heading="Featured item"></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36 gap-4 bg-slate-500 bg-opacity-40">
                <div>
                   <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                   <p>March 20, 2023</p>
                   <p className="uppercase">WHERE CAN I GET SOME?</p>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                   <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;


