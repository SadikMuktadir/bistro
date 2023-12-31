import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import SectionTitle from "./sectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
// import useAxiosPublic from "../Hooks/useAxiospublic";

const Update = () => {
  const { _id, name, category, recipe, price } = useLoaderData();
  const { register, handleSubmit } = useForm();
  // const image_hosting_key = "dd333f2cc5522a05be1e5c3a210debdc";
  // const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  // const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // const imageFile = { image: data.image[0] };
    // const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //   headers: {
    //     "content-type": "multipart/form-data",
    //   },
    // });
    // if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        // image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    // }
  };
  return (
    <div>
      <div className="my-[50px]">
        <SectionTitle
          heading="ADD AN ITEM"
          subHeading="---How many??---"
        ></SectionTitle>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="card shrink-0 w-[400px] max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipe name*</span>
                </label>
                <input
                  {...register("name")}
                  defaultValue={name}
                  type="text"
                  placeholder="Recipe name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category*</span>
                </label>
                <select
                  {...register("category")}
                  defaultValue={category}
                  placeholder="Category*"
                  className="input input-bordered"
                >
                  <option value="salad">SALAD</option>
                  <option value="pizza">PIZZA</option>
                  <option value="soup">SOUP</option>
                  <option value="dessert">DESSERT</option>
                  <option value="drinks">DRINKS</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price*</span>
                </label>
                <input
                  {...register("price")}
                  defaultValue={price}
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Recipe Details*</span>
                </label>
                <input
                  {...register("recipe")}
                  defaultValue={recipe}
                  type="text"
                  placeholder="Recipe Details*"
                  className="input input-bordered h-[150px]"
                  required
                />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Image File*</span>
                </label>
                <input
                  {...register("image")}
                  type="file"
                  placeholder="Recipe Details*"
                  className="input input-bordered"
                />
              </div> */}

              <input
                className="btn btn-outline btn-warning"
                type="submit"
                value="Update Items"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
