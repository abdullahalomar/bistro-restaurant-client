import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {

    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div className="w-full">
            <SectionTitle subHeading='Pay your bill' heading='PAYMENT'></SectionTitle>
           
            <div className="mx-36">
            <Elements stripe={stripePromise}>
            <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
            </div>
            
        </div>
    );
};

export default Payment;