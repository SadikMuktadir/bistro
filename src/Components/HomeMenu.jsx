import { useEffect, useState } from "react";
import SectionTitle from "./sectionTitle";
import Card from "./Card";

const HomeMenu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((items) => items.category === "popular");
        setData(popular);
      });
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
    </div>
  );
};

export default HomeMenu;
