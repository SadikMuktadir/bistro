import useMenu from "../Hooks/useMenu";
import Cover from "./Cover";
import coverImg from "../../public/assets/menu/banner3.jpg";
import SectionTitle from "./sectionTitle";
import MenuCat from "./MenuCat";
import menu1 from "../../public/assets/home/banner.jpg";

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
        </div>
        <div>
        <Cover
        img={menu1}
        title="DESSERTS"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
        <MenuCat items={dessert}></MenuCat>
        </div>
        <div>
        <Cover
        img={menu1}
        title="PIZZA"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
        <MenuCat items={pizza}></MenuCat>
        </div>
        <div>
        <Cover
        img={menu1}
        title="SOUP"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
        <MenuCat items={soup}></MenuCat>
        </div>
        <div>
        <Cover
        img={menu1}
        title="SALAD"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
        <MenuCat items={salad}></MenuCat>
        </div>
        <div>
        <Cover
        img={menu1}
        title="DRINKS"
        desc="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></Cover>
        <MenuCat items={drinks}></MenuCat>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
