import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageItems = () => {
  const [menu] = useMenu();

  return (
    <div className="w-full w-full px-14">
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
              <thead className="bg-violet-400	text-white">
                <tr>
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
                            <img
                              src={item.image}
                              alt="items image"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      {/* {user?.role === "admin" ? (
                        <span className="font-bold text-green-600 text-lg">
                          admin
                        </span>
                      ) : (
                        
                      )} */}
                      <button className="btn btn-ghost  bg-violet-400">
                          <FaEdit size={15}></FaEdit>
                        </button>
                    </td>
                    <td>
                      <button className="btn btn-ghost   bg-red-400">
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
