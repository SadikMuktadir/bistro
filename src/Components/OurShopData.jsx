import Card2 from "./Card2";

const OurShopData = ({ items }) => {
  return (
    <div>
      {
        <div className="grid grid-cols-3 gap-3 my-[100px]">
          {items.map((item) => (
            <Card2 key={item._id} item={item}></Card2>
          ))}
        </div>
      }
    </div>
  );
};

export default OurShopData;
