import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <div className="ml-[30px] mb-[50px]">
          <h1 className="text-[25px]">BISTRO BOSS</h1>
          <h1 className="text-[15px]">Restaurant</h1>
        </div>
        <ul>
          {isAdmin ? (
            <>
              <li>
                <div className="flex ml-[30px] my-[20px]">
                  <FaHome />
                  <NavLink className="ml-2" to="/">
                    ADMIN HOME
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="flex ml-[30px] mb-[20px]">
                  <FaShoppingCart />
                  <NavLink className="ml-2" to="/dashboard/ourCart">
                    MY CART
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="flex ml-[30px] mb-[20px]">
                  <FaUtensils />
                  <NavLink className="ml-2" to="/dashboard/addItems">
                    ADD ITEMS
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="flex ml-[30px] mb-[20px]">
                  <FaThList />
                  <NavLink className="ml-2" to="/dashboard/ourCart">
                    MANAGE ITEMS
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="flex ml-[30px] mb-[20px]">
                  <FaBook />
                  <NavLink className="ml-2" to="/dashboard/ourCart">
                    MANAGE BOOKINGS
                  </NavLink>
                </div>
              </li>
              <li>
                <div className="flex ml-[30px] mb-[20px]">
                  <FaUsers />
                  <NavLink className="ml-2" to="/dashboard/allUsers">
                    ALL USERS
                  </NavLink>
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <div className="flex ml-[30px] mb-[20px]">
                  <FaUsers />
                  <NavLink className="ml-2" to="">
                    Profile
                  </NavLink>
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
