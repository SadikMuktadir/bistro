import { useEffect, useState } from "react";
import SectionTitle from "./sectionTitle";
import Card from "./Card";
// import useMenu from "../Hooks/useMenu";
import { Link } from "react-router-dom";

const HomeMenu = () => {
// const [menu] = useMenu();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => 
      {
        const popular = data.filter((items) => items.category === "popular");
        setData(popular);
      }
      // setData(data)
      );
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading="---Check it out---"
        heading="POPULAR MENU"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-3 my-[100px]">
        {data.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
      <div className="flex justify-center">
       <Link to="/ourMenu"><button className="btn btn-outline btn-secondary">View Full  Menu</button></Link>
      </div>
    </div>
  );
};

export default HomeMenu;
