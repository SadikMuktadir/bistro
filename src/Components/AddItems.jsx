import { useForm } from "react-hook-form";
import SectionTitle from "./sectionTitle";
import useAxiosPublic from "../Hooks/useAxiospublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const image_hosting_key = "dd333f2cc5522a05be1e5c3a210debdc";
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data)=>{
    const imageFile = {image:data.image[0]}
    const res = await axiosPublic.post(
      image_hosting_api,imageFile,{
        headers:{
          'content-type':'multipart/form-data'
        }
      }
    )
    if(res.data.success){
      const menuItem = {
        name:data.name,
        category:data.category,
        price:parseFloat(data.price),
        recipe:data.recipe,
        image:res.data.data.display_url
      }
      const menuRes = await axiosSecure.post('/menu',menuItem);
      if(menuRes.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item added",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  }
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
                  type="text"
                  placeholder="Recipe Details*"
                  className="input input-bordered h-[150px]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image File*</span>
                </label>
                <input
                  {...register("image")}
                  type="file"
                  placeholder="Recipe Details*"
                  className="input input-bordered"
                  required
                />
              </div>

              <input
                className="btn btn-outline btn-warning"
                type="submit"
                value="Add Items"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
