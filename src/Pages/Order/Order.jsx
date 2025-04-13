import { useParams } from "react-router-dom";
import OrderTab from "../../Component/OrderTab/OrderTab";
import Cover from "../../Shared/Cover";
import img from "../../assets/menu/pizza-bg.jpg"
import useMenu from "../../hooks/useMenu";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
    const categories = ['popular', 'salad', 'drinks', 'dessert', 'pizza', 'soup', 'offered']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
    console.log(initialIndex);
    const tabIndex = initialIndex === -1 ? 0 : initialIndex; 

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');
    const dessert = menu.filter(item => item.category === 'popular');
    const pizza = menu.filter(item => item.category === 'popular');
    const soup = menu.filter(item => item.category === 'popular');
    const offered = menu.filter(item => item.category === 'offered');
    console.log(category);

    
    return (
        <div>
            <Cover img={img} title="Order Place" />

            {/* react tab  */}
            <Tabs selectedIndex={tabIndex}>
                <TabList>
                    <Tab>popular</Tab>
                    <Tab>salad</Tab>
                    <Tab>drinks</Tab>
                    <Tab>dessert</Tab>
                    <Tab>pizza</Tab>
                    <Tab>soup</Tab>
                    <Tab>offered</Tab>
                </TabList>

                <TabPanel>
                   <OrderTab items={popular}/>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={salad}/>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={drinks}/>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={dessert}/>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={pizza}/>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={soup}/>
                </TabPanel>
                <TabPanel>
                   <OrderTab items={offered}/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;