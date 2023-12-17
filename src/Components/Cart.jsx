import useCart from "../Hooks/useCart";
import { MdDeleteForever  } from "react-icons/md";
const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className="flex justify-between items-center px-[100px] py-[50px]">
        <h1 className="text-[32px]">Total Orders: {cart.length} </h1>
        <h1 className="text-[32px]">Total Price: {totalPrice} </h1>
        <button className="text-[20px] btn btn-outline btn-warning">Pay</button>
      </div>
      <div className="px-[100px]">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>
                <th>NO</th>
                </th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((items,index)=><tr key={items._id}>
                    <th>
                     {index+1}
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={items.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                    {items.name}
                    </td>
                    <td>{items.price}</td>
                    <th>
                      <button className="btn btn-outline btn-error"><MdDeleteForever className="text-[30px]" /></button>
                    </th>
                  </tr>)
              }
            </tbody>
           
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
