import useMenu from "../Hooks/useMenu";
import Cover from "./Cover";
import coverImg from "../../public/assets/menu/banner3.jpg";

const OurMenu = () => {
const [menu] = useMenu();
const popular = menu.filter(item =>item.category === 'popular');
const salad = menu.filter(item =>item.category === 'salad');
const pizza = menu.filter(item =>item.category === 'pizza');
const dessert = menu.filter(item =>item.category === 'dessert');
const drinks = menu.filter(item =>item.category === 'drinks');
const soup = menu.filter(item =>item.category === 'soup');
    return (
        <div>
            <Cover img={coverImg}></Cover>
        </div>
    );
};

export default OurMenu;