import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const CheckOutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  const [cardError, setCardError] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState();

  useEffect( () => {
    console.log(price);
    axiosSecure.post('/create-payment-intent', {price})
    .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
    })
  }, [])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
        return
    }
    console.log('card', card);


    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        console.log('[error]', error);
        setCardError(error.message);
      } else {
        setCardError('');
        // console.log('[PaymentMethod]', paymentMethod);
      }

      setProcessing(true)

      const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || 'anonymous',
              email: user?.email || 'unknown',
            },
          },
        },
      );

      if (confirmError) {
        console.log(confirmError);
      }
      console.log('payment intent', paymentIntent);
      setProcessing(false)
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id)
      }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="mt-5">
        {cardError && <p className="text-red-500">{cardError}</p>}
        {transactionId && <p className="text-black-600"><span className="text-green-500 font-bold">Transaction Complete with transactionId:</span> {transactionId}</p>}
        </div>

        <button className="btn btn-active btn-primary w-72 mt-10" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
      
    </div>
  );
};

export default CheckOutForm;
