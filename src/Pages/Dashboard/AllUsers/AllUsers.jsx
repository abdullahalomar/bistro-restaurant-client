import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { PiUsersFill } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (id) => {

  }

  const handleDelete = (user) => {

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
                        <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost  bg-violet-400">
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
