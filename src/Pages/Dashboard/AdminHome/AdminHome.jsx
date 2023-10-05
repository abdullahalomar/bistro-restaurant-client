import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { GiMoneyStack } from 'react-icons/gi';
import { RiGroupLine } from 'react-icons/ri';
import { MdFastfood } from 'react-icons/md';
import { TbTruckDelivery } from 'react-icons/tb';

const AdminHome = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="w-full">
      <div className="mx-10">
        <p className="text-2xl font bold">
          <span className="text-orange-400 font-bold">Hi</span> Welcome Back{" "}
          <span className="font-bold text-2xl text-blue-500">{user.displayName}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-10">
          <div className="flex items-center gap-4 w-42 h-40 rounded bg-primary text-primary-content place-content-center">
            <div>
                <GiMoneyStack size={60}></GiMoneyStack>
            </div>
            <div className="text-2xl font-bold text-white">
                <p>{stats.revenue}</p>
                <p>Revenue</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-42 h-40 rounded bg-secondary text-primary-content place-content-center">
            <div> 
                <RiGroupLine size={60}></RiGroupLine>
            </div>
            <div className="text-2xl font-bold text-white">
                <p>{stats.users}</p>
                <p>Customers</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-42 h-40 rounded bg-info text-primary-content place-content-center">
            <div>
                <MdFastfood size={60}></MdFastfood>
            </div>
            <div className="text-2xl font-bold text-white">
                <p>{stats.products}</p>
                <p>Products</p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-42 h-40 rounded bg-accent text-primary-content place-content-center">
            <div>
                <TbTruckDelivery size={60}></TbTruckDelivery>
            </div>
            <div className="text-2xl font-bold text-white">
                <p>{stats.orders}</p>
                <p>Orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
