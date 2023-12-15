const Card2 = ({ item }) => {
const {image,name,recipe,price} = item;
  return (
    <div>
      <div className="card h-[450px] bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="">
          <p className=" bg-[#111827] text-center text-white p-2 w-[50px]">{price}</p>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-outline btn-secondary">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
