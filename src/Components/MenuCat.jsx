import Card from "./Card";

const MenuCat = ({items }) => {
  return (
    <div>
      {
        <div className="grid grid-cols-2 gap-3 my-[100px]">
          {items.map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
      }
    </div>
  );
};

export default MenuCat;
