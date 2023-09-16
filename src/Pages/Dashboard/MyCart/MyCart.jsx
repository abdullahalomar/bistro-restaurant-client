import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
// import SectionTitle from "../components/SectionTitle/SectionTitle";

const MyCart = () => {
    const cart = useCart();
    console.log(cart)
    const total = cart.reduce((sum, item) => item.price + sum, 0)
  return (
    <div>
      <Helmet>
        <title>Restaurant | My Cart</title>
      </Helmet>
      {/* <SectionTitle subHeading="My Cart" heading="WANNA ADD MORE?"></SectionTitle> */}
      <h1>mycart : {cart.length}</h1>
      <h1>Total Price : {total}</h1>
      <button className="btn btn-warning">PAY</button>
    </div>
  );
};

export default MyCart;
