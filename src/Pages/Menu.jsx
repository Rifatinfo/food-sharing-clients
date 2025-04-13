import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover";
import menuImg from "./../assets/menu/pizza-bg.jpg";
import SectionTitle from "../Component/SectionTitle/SectionTitle";
import SimpleParallax from "simple-parallax-js";
import CateroryMenu from "../Component/CateroryMenu/CateroryMenu";
import useMenu from "../hooks/useMenu";
const Menu = () => {
    const [menu] = useMenu()
    const offered = menu.filter(item => item.category === 'offered');
    const popular = menu.filter(item => item.category === 'popular');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'popular');
    const pizza = menu.filter(item => item.category === 'popular');
    const soup = menu.filter(item => item.category === 'popular');

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

            <SectionTitle subHeading="Today's Offer" heading="Featured item"></SectionTitle>
            <CateroryMenu title="offered" item={offered}></CateroryMenu>

            <Cover img={menuImg} title="popular"></Cover>
            <SectionTitle subHeading="popular" heading=" check it out"></SectionTitle>
            <CateroryMenu title="popular" item={popular} />

            <Cover img={menuImg} title="salad"></Cover>
            <SectionTitle subHeading=" salad" heading=" check it out"></SectionTitle>
            <CateroryMenu title="salad" item={salad} />

            <Cover img={menuImg} title="drinks"></Cover>
            <SectionTitle subHeading="drinks" heading=" check it out"></SectionTitle>
            <CateroryMenu title="drinks" item={drinks} />

            <Cover img={menuImg} title="dessert"></Cover>
            <SectionTitle subHeading="dessert" heading=" check it out"></SectionTitle>
            <CateroryMenu title="dessert" item={dessert} />

            <Cover img={menuImg} title="pizza"></Cover>
            <SectionTitle subHeading="pizza" heading=" check it out"></SectionTitle>
            <CateroryMenu title="pizza" item={pizza} />

            <Cover img={menuImg} title="soup"></Cover>
            <SectionTitle subHeading="soup" heading=" check it out"></SectionTitle>
            <CateroryMenu title="soup" item={soup} />

        </div>
    );
};

export default Menu;
