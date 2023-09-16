import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaHome, FaCalendarAlt, FaMoneyBillWave, FaShoppingBag } from 'react-icons/fa';
import { BiSolidContact } from 'react-icons/bi';
import { TiThMenu } from 'react-icons/ti';


const Dashboard = () => {
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
        <div className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full">
            {/* Sidebar content here */}
            
           
            <li>
              <Link to='/dashboard/home'><FaHome></FaHome>User Home</Link>
            </li>
            <li>
              <Link to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt>reservation</Link>
            </li>
            <li>
              <Link to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</Link>
            </li>
            <li>
              <Link to='/dashboard/history'><FaMoneyBillWave></FaMoneyBillWave>Payment History</Link>
            </li>
            <div className="divider"></div>
            <li>
              <Link to='/'><FaHome></FaHome>Home</Link>
            </li>
            <li>
              <Link to='/menu'><TiThMenu></TiThMenu>Menu</Link>
            </li>
            <li>
              <Link to='/order/salad'><FaShoppingBag></FaShoppingBag>Shop</Link>
            </li>
            <li>
              <Link to=''><BiSolidContact></BiSolidContact>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
