import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })    
    .then(res => res.json())
    .then(imgResponse => {
      if (imgResponse.success) {
        const imgURL = imgResponse.data.display_url;
        const {name, price, category, recipe} = data;
        const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
        console.log(newItem);
      }
    })
  };

  console.log(errors);
  console.log(img_hosting_token)
  return (
    <div className="w-full px-36">
      <Helmet>
        <title>Restaurant | My Cart</title>
      </Helmet>
      <SectionTitle
        subHeading="What's new?"
        heading="ADD AN ITEM"
      ></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="label">
          <span className="label-text font-bold">Recipe name*</span>
        </label>
        <input
          type="text"
          className="input input-bordered border-[#799ec9] border-2 w-full"
          placeholder="Recipe name"
          {...register("name", { required: true, maxLength: 80 })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text font-bold">Category*</span>
            </label>
            <select
              defaultValue='Pick One'
              {...register("category", { required: true })}
              className="select select-bordered border-[#799ec9] border-2"
            >
              <option disabled value="Salad">
                Salad
              </option>
              <option value="Pizza">Pizza</option>
              <option value="Soup">Soup</option>
              <option value="Dessert">Dessert</option>
              <option value="Drink">Drink</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-bold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true, maxLength: 100 })}
              className="input input-bordered border-[#799ec9] border-2 w-full max-w-xs"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="label">
            <span className="label-text font-bold">Recipe Details*</span>
          </label>
          <textarea
            className="textarea border-[#799ec9] border-2 w-full"
            {...register("recipe", { required: true, maxLength: 100 })}
            placeholder="Recipe Details"
          ></textarea>
        </div>

        <div className="my-5">
          <input
            type="file"
            {...register("image", { required: true, maxLength: 80 })}
            className="file-input file-input-bordered border-[#799ec9] border-2 w-full max-w-xs"
          />
        </div>
        <input
          className="btn bg-[#799ec9] border-[#1c3655] border-2 text-white"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
