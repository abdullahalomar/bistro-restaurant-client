import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState();

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
        console.log('[PaymentMethod]', paymentMethod);
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
        {cardError && <p className="text-red-600">{cardError}</p>}
        </div>

        <button className="btn btn-active btn-primary w-72 mt-10" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      
    </div>
  );
};

export default CheckOutForm;
