import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  
  console.log(cart);
  // reduce cart price
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  // delete cart item
  const handleDelete = item => {
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
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
      }
    })
  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Restaurant | My Cart</title>
      </Helmet>
      <SectionTitle
        subHeading="My Cart"
        heading="WANNA ADD MORE?"
      ></SectionTitle>
      <div className="px-20">
        <div className="uppercase text-1xl font-bold flex justify-between items-center mb-4">
          <h1>my cart : {cart.length}</h1>
          <h1>Total Price : ${total}</h1>
          <button className="btn btn-warning">PAYMENT</button>
        </div>

        <div className="">
          <table className="table">
            {/* head */}
            <thead className="text-white">
              <tr className="bg-[#799ec9]">
                <th></th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="font-medium">{item.name}</td>
                  <td className="font-medium">${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost btn-md bg-red-400"
                    >
                      <RiDeleteBin6Line size={25} color="white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
