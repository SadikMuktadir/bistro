import SectionTitle from "./sectionTitle";
// import img from "../../public/assets/shop/banner2.jpg";
const AddItems = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const price = form.price.value;
    const details = form.details.value;
    console.log(name, category, price, details);
  };
  return (
    <div>
      <div className="my-[50px]">
        <SectionTitle
          heading="ADD AN ITEM"
          subHeading="---How many??---"
        ></SectionTitle>
      </div>
      <div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse w-[600px]">
            <div>
              <img src="" alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Recipe name*</span>
                  </label>
                  <input
                    name="name"
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
                    className="input input-bordered"
                    required
                    name="category"
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
                    name="price"
                    type="text"
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
                    name="details"
                    type="text"
                    placeholder="Recipe Details"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-outline btn-warning"
                    type="submit"
                    value="Add Item"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
