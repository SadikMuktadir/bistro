import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import SectionTitle from "./sectionTitle";
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageItems = () => {
    const axiosSecure = useAxiosSecure();
    const { data: menu = [],refetch } = useQuery({
      queryKey: ["menu"],
      queryFn: async () => {
        const res = await axiosSecure.get("/menu");
        return res.data;
      },
    });
    const handleDelete = (menu) => {
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
            axiosSecure.delete(`/menu/${menu._id}`).then((res) => {
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
      <div className="my-[50px]">
        <SectionTitle
          heading="MANAGE ALL ITEMS"
          subHeading="---Hurry Up!---"
        ></SectionTitle>
      </div>
      <div className="mb-[50px]">
        <div className="flex justify-between items-center px-[100px] py-[50px]">
          <h1 className="text-[20px] md:text-[32px]">Total Menu: {menu.length} </h1>
        </div>
        <div className="lg:px-[100px]">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th className="flex justify-center">EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((menu, index) => (
                  <tr key={menu._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={menu.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{menu.name}</td>
                    <td>${menu.price}</td>
                    <td className="flex justify-center">
                      {menu.role === "admin" ? (
                        <button className="btn btn-outline btn-success">
                          Admin
                        </button>
                      ) : (
                        <button
                        //   onClick={() => handleAdmin(user)}
                          className="btn btn-outline btn-warning"
                        >
                          <FaEdit className="text-[30px]" />
                        </button>
                      )}
                    </td>
                    <th>
                      <button
                        onClick={() => handleDelete(menu)}
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
    </div>
  );
};

export default ManageItems;
