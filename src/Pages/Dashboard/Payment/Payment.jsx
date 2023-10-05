import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div className="w-full">
            <SectionTitle subHeading='Pay your bill' heading='PAYMENT'></SectionTitle>
            <h1 className="text-3xl">Payment</h1>
            <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
            </Elements>
            
        </div>
    );
};

export default Payment;