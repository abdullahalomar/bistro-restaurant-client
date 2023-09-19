import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { PiUsersFill } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
  }

  const handleDelete = (user) => {
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
          fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: "DELETE",
          })
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                refetch();
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
        }
      });
  }

  return (
    <div className="w-full px-14">
      <Helmet>
        <title>Restaurant | My Cart</title>
      </Helmet>
      <p className="font-bold text-2xl pb-3">Total Users: {users.length}</p>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-violet-400	text-white">
              <tr>
                <th></th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {
                        user.role === 'admin' ? 'admin' : 
                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost  bg-violet-400">
                      <PiUsersFill size={15}></PiUsersFill>
                    </button>
                    }
                  </td>
                  <td>
                    <button onClick={() => handleDelete(user)} className="btn btn-ghost   bg-red-400">
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
  );
};

export default AllUsers;
