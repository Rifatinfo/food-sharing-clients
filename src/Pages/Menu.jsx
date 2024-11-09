import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover";
import menuImg from "./../assets/menu/pizza-bg.jpg";
import SectionTitle from "../Component/SectionTitle/SectionTitle";
import SimpleParallax from "simple-parallax-js";
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>BIstro  | Menu</title>
            </Helmet>
            {/* <img src={menuImg} alt="" /> */}
            <SimpleParallax scale={1.7}>
                <Cover img={menuImg} title="our menu">
                </Cover>
            </SimpleParallax>

            <SectionTitle subHeading="check it out" heading="Featured item"></SectionTitle>
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle subHeading="check it out" heading="Featured item"></SectionTitle>
            <Cover img={menuImg} title="our menu"></Cover>
            <SectionTitle></SectionTitle>
        </div>
    );
};

export default Menu;
