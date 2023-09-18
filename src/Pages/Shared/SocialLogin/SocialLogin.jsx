import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
            fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
               
               
                navigate(from, { replace: true });
              }
            });

            
        })
    }
  return (
    <div>
      <div className="flex flex-col w-full border-opacity-50 mb-3">
        <div className="divider">OR</div>
        <div className="grid place-items-center">
          <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
            <FcGoogle size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
