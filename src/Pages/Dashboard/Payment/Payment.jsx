import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    return (
        <div className="w-full">
            <SectionTitle subHeading='Pay your bill' heading='PAYMENT'></SectionTitle>
           
            <div className="mx-36">
            <Elements stripe={stripePromise}>
            <CheckOutForm></CheckOutForm>
            </Elements>
            </div>
            
        </div>
    );
};

export default Payment;