import useMenu from "../Hooks/useMenu";
import Cover from "./Cover";
import coverImg from "../../public/assets/menu/banner3.jpg";
import SectionTitle from "./sectionTitle";
import MenuCat from "./MenuCat";
import menu1 from "../../public/assets/home/banner.jpg";
import dessertImg from "../../public/assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../public/assets/menu/pizza-bg.jpg";
import saladImg from "../../public/assets/menu/salad-bg.jpg";
import soupImg from "../../public/assets/menu/soup-bg.jpg";
import { Link } from "react-router-dom";

const OurMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover
        img={coverImg}
        title="OUR MENU"
        desc="Would you like to try a dish?"
      ></Cover>
      <div className="my-[80px]">
        <div>
          <SectionTitle
            subHeading={"---Don't miss---"}
            heading={"TODAY'S OFFER"}
          ></SectionTitle>
          <MenuCat items={popular}></MenuCat>
          <div className="flex justify-center">
            <Link><button className="mb-[50px] btn btn-outline btn-secondary">ORDER YOUR FAVOURITE FOOD</button></Link>
          </div>
        </div>
        <div>
        <Cover
        img={dessertImg}
        title="DESSERTS"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
        <MenuCat items={dessert}></MenuCat>
        <div className="flex justify-center">
            <Link><button className="mb-[50px] btn btn-outline btn-secondary">ORDER YOUR FAVOURITE FOOD</button></Link>
          </div>
        </div>
        <div>
        <Cover
        img={soupImg}
        title="SOUP"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
        <MenuCat items={soup}></MenuCat>
        <div className="flex justify-center">
            <Link><button className="mb-[50px] btn btn-outline btn-secondary">ORDER YOUR FAVOURITE FOOD</button></Link>
          </div>
        </div>
        <div>
        <Cover
        img={saladImg}
        title="SALAD"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
        <MenuCat items={salad}></MenuCat>
        <div className="flex justify-center">
            <Link><button className="mb-[50px] btn btn-outline btn-secondary">ORDER YOUR FAVOURITE FOOD</button></Link>
          </div>
        </div>
        <div>
        <Cover
        img={pizzaImg}
        title="PIZZA"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
        <MenuCat items={pizza}></MenuCat>
        <div className="flex justify-center">
            <Link><button className="mb-[50px] btn btn-outline btn-secondary">ORDER YOUR FAVOURITE FOOD</button></Link>
          </div>
        </div>
        <div>
        <Cover
        img={menu1}
        title="DRINKS"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
        <MenuCat items={drinks}></MenuCat>
        <div className="flex justify-center">
            <Link><button className="mb-[50px] btn btn-outline btn-secondary">ORDER YOUR FAVOURITE FOOD</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
