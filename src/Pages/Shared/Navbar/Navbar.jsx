import { Link } from 'react-router-dom';
import frame from '../../../assets/icon/Frame.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }
    const navOptions = <>
             <li><Link to='/'>Home</Link></li>
            <li><a>Contact us</a></li>
            <li><a>Dashboard</a></li>
            <li><Link to='/menu'>Our Menu</Link></li>
            <li><Link to='/order/salad'>Our Shop</Link></li>
            <li><Link to='/login'>Login </Link></li>
            {
            user ? 
            <>
            <button onClick={handleLogOut} className="btn btn-info">Info</button>
            </> : 
            <>
            <li><Link to='/login'>Login </Link></li> 
            </>
            }
    </>

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-20 text-white font-bold bg-base-100">
        <div className="navbar">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
          {navOptions}
            </ul>
          </div>
          <a className="normal-case text-xl">Restaurant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
       {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="uppercase">
            sign out
            <img src={frame} alt="" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
