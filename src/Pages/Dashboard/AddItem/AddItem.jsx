import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
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
          className="input input-bordered input-info w-full"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="form-control max-w-xs">
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </label>
            <select
              {...register("Title", { required: true })}
              className="select select-bordered select-info"
            >
              <option disabled selected>
                Pick one
              </option>
              <option value="Mr">Star Wars</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text">
                Pick the best fantasy franchise
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              {...register("Last name", { required: true, maxLength: 100 })}
              className="input input-bordered input-info w-full max-w-xs"
            />
          </div>
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <textarea
            className="textarea textarea-info w-full"
            {...register("Last name", { required: true, maxLength: 100 })}
            placeholder="Bio"
          ></textarea>
        </div>
        <input className="btn btn-info" type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
