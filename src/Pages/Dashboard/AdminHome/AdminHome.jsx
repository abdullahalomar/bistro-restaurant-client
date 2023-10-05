import useAuth from "../../../hooks/useAuth";


const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div className="w-full">
            <p className="text-2xl font bold">Welcome Back {user.displayName}</p>
        </div>
    );
};

export default AdminHome;