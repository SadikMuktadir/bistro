import useCart from "../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center px-[10px] lg:px-[100px] py-[50px]">
        <h1 className="text-[20px] lg:text-[32px]">Total Orders: {cart.length} </h1>
        <h1 className="text-[20px] lg:text-[32px]">Total Price: {totalPrice} </h1>
        <button className="text-[20px] btn btn-outline btn-warning">Pay</button>
      </div>
      <div className="px-[10px] lg:px-[100px]">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((items, index) => (
                <tr key={items._id}>
                  <th>{index + 1}</th>
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
                  <td>{items.name}</td>
                  <td>{items.price}</td>
                  <th>
                    <button
                      onClick={() => handleDelete(items._id)}
                      className="btn btn-outline btn-error"
                    >
                      <MdDeleteForever className="text-[30px]" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
