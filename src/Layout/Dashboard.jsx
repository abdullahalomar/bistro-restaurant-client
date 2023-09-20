import { Link, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaHome,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaShoppingBag,
} from "react-icons/fa";
import { BiSolidContact, BiSolidBookAdd } from "react-icons/bi";
import { TiThMenu } from "react-icons/ti";
import { ImSpoonKnife } from "react-icons/im";
import { MdManageSearch } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: this admin load from server later
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#799ec9]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full text-white font-bold">
            {/* Sidebar content here */}
            <p className="text-2xl text-black ps-4 mb-6">Restaurant</p>

            {isAdmin ? (
              <>
                <li>
                  <Link to="/dashboard/adminhome">
                    <FaHome></FaHome>Admin Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/reservation">
                    <ImSpoonKnife></ImSpoonKnife>add items
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/reservation">
                    <MdManageSearch size={15}></MdManageSearch>manage items
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/mycart">
                    <BiSolidBookAdd></BiSolidBookAdd>Manage bookings{" "}
                    <span className="badge badge-neutral">{cart.length}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/allusers">
                    <FaUsers></FaUsers>all users
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/home">
                    <FaHome></FaHome>User Home
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/reservation">
                    <FaCalendarAlt></FaCalendarAlt>reservation
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart>My Cart{" "}
                    <span className="badge badge-neutral">{cart.length}</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/history">
                    <FaMoneyBillWave></FaMoneyBillWave>Payment History
                  </Link>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <Link to="/">
                <FaHome></FaHome>Home
              </Link>
            </li>
            <li>
              <Link to="/menu">
                <TiThMenu></TiThMenu>Menu
              </Link>
            </li>
            <li>
              <Link to="/order/salad">
                <FaShoppingBag></FaShoppingBag>Shop
              </Link>
            </li>
            <li>
              <Link to="">
                <BiSolidContact></BiSolidContact>Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
