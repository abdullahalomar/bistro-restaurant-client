import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const { register, handleSubmit, reset } = useForm();

  const openModal = () => {
    document.getElementById("my_modal_3").showModal();
  };

  const handleEdit = () => {
    openModal(true);
  };

  const handleDelete = (item) => {
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
        axiosSecure.delete(`/menu/${item._id}`).then((res) => {
          console.log("deleted res", res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="w-full mt-5 px-14">
      <SectionTitle
        subHeading="Hurry Up"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>
      <p className="font-bold text-2xl pb-3">Total Items: {menu.length}</p>
      <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-violet-400	text-white ">
                <tr className="">
                  <th></th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>EDIT</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, index) => (
                  <tr key={item?._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="items image" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      {/* modal */}

                      

                      <button className="btn" onClick={() => handleEdit(item)}>
                        <FaEdit size={15}></FaEdit>
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box w-11/12 max-w-4xl">
                        <SectionTitle
                        heading="UPDATE ITEM"
                      ></SectionTitle>
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <form onSubmit={handleSubmit(handleEdit)}>
                            <label className="label">
                              <span className="label-text font-bold">
                                Recipe name*
                              </span>
                            </label>
                            <input
                              type="text"
                              className="input input-bordered border-[#799ec9] border-2 w-full"
                              placeholder="Recipe name"
                              {...register("name", {
                                required: true,
                                maxLength: 80,
                              })}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                              <div className="form-control max-w-xl">
                                <label className="label">
                                  <span className="label-text font-bold">
                                    Category*
                                  </span>
                                </label>
                                <select
                                  defaultValue="Pick One"
                                  {...register("category", { required: true })}
                                  className="select select-bordered border-[#799ec9] border-2"
                                >
                                  <option value="Salad">Salad</option>
                                  <option value="Pizza">Pizza</option>
                                  <option value="Soup">Soup</option>
                                  <option value="Dessert">Dessert</option>
                                  <option value="Drink">Drink</option>
                                </select>
                              </div>

                              <div className="">
                                <label className="label">
                                  <span className="label-text font-bold">
                                    Price*
                                  </span>
                                </label>
                                <input
                                  type="number"
                                  placeholder="Price"
                                  {...register("price", {
                                    required: true,
                                    maxLength: 100,
                                  })}
                                  className="input input-bordered border-[#799ec9] border-2 w-full max-w-xl"
                                />
                              </div>
                            </div>

                            <div className="w-full">
                              <label className="label">
                                <span className="label-text font-bold">
                                  Recipe Details*
                                </span>
                              </label>
                              <textarea
                                className="textarea border-[#799ec9] border-2 w-full"
                                {...register("recipe", {
                                  required: true,
                                  maxLength: 100,
                                })}
                                placeholder="Recipe Details"
                              ></textarea>
                            </div>

                            {/* <div className="my-5">
                              <input
                                type="file"
                                {...register("image", {
                                  required: true,
                                  maxLength: 80,
                                })}
                                className="file-input file-input-bordered border-[#799ec9] border-2 w-full max-w-xs"
                              />
                            </div> */}
                            <div className="text-center">
                              <input
                                className="btn bg-[#799ec9] border-[#1c3655] border-2 text-white mt-5"
                                type="submit"
                                value="Update Recipe Details"
                              />
                            </div>
                          </form>
                        </div>
                      </dialog>

                      {/* modal */}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item)}
                        className="btn btn-ghost   bg-red-400"
                      >
                        <RiDeleteBin6Line size={15} color="white" />
                      </button>
                    </td>
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
