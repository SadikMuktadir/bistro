import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "./Cover";
import menu2 from "../../public/assets/home/banner.jpg";
import useMenu from "../Hooks/useMenu";
import OurShopData from "./OurShopData";
const OurShop = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <div>
        <Cover
          img={menu2}
          title="OUR SHOP"
          desc="Would you like to try a dish?"
        ></Cover>
      </div>
      <div className="">
        <Tabs>
          <div className="flex justify-center my-[80px]">
            <TabList>
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>SOUPS</Tab>
              <Tab>DESSERTS</Tab>
              <Tab>DRINKS</Tab>
            </TabList>
          </div>

          <TabPanel>
            <OurShopData items={popular}></OurShopData>
          </TabPanel>
          <TabPanel>
            <OurShopData items={salad}></OurShopData>
          </TabPanel>
          <TabPanel>
            <OurShopData items={pizza}></OurShopData>
          </TabPanel>
          <TabPanel>
            <OurShopData items={dessert}></OurShopData>
          </TabPanel>
          <TabPanel>
            <OurShopData items={soup}></OurShopData>
          </TabPanel>
          <TabPanel>
            <OurShopData items={drinks}></OurShopData>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
