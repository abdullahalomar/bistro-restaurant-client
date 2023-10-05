import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const AdminHome = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure()

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    });

    return (
        <div className="w-full">
            <div className="mx-10">
            <p className="text-2xl font bold"><span className="text-blue-500 font-bold">Hi</span> Welcome Back {user.displayName}</p>
            </div>
        </div>
    );
};

export default AdminHome;