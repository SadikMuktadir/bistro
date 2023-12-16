import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import axios from 'axios';
import Swal from "sweetalert2";
import useCart from "../Hooks/useCart";
const Card2 = ({ item }) => {
const navigate = useNavigate();
const {user} =useContext(AuthContext)
const {_id,image,name,recipe,price} = item;
const [,refetch]=useCart();
const handleAddToCart =(food)=>{
  console.log(food);
  if(user && user.email){
    const cartItem ={
      menuId:_id,
      email:user.email,
      name,
      image,
      price
    }
    axios.post("http://localhost:5000/carts",cartItem)
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Added to Cart",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();
      }
    })
  }
  else{
    navigate("/login")
  }
}
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
           <Link to=""><button onClick={()=>handleAddToCart(item)} className="btn btn-outline btn-secondary">Add To Cart</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
