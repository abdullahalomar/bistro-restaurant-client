import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryKey: ['isAdmin', user?.email],
        
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log('is admin response', res);
            console.log(user?.email);
            return res.data.admin;
            
        },
        
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;