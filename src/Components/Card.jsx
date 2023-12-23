

const Card = ({ item }) => {
const {image,name,recipe,price} = item;
    return (
        <div className="w-[200px] md:w-[300px] lg:w-[648px] mx-auto">
            <div className="flex">
            <div className="h-[104px] w-[118px] mr-[10px] md:mr-[15px] lg:mr-[32px]">
                <img style={{borderRadius:"0px 200px 200px 200px"}} src={image} alt="" />
            </div>
            <div>
                <p className="text-[20px] text-[#151515] mb-2">{name}</p>
                <p className="w-[100px] lg:w-[443px] text-[16px] text-[#737373]">{recipe}</p>
            </div>
            <div>
                <p className="text-[#BB8506] text-[20px]">{price}</p>
            </div>
            </div>
        </div>
    );
};

export default Card;