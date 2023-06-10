import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/UseAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CheckOutForm = ({price,paymentClass}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  //
  useEffect(() => {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });

  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log('error', error)
      setCardError(error.message);
    } else {
      // console.log('payment method', paymentMethod)
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
    }
    // console.log("payment intent",paymentIntent)------
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // save payment in database
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        className:paymentClass.name,
        classId : paymentClass.classId,
        selectedClassId : paymentClass._id
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (
          res.data.insertResult.insertedId ||
          res.data.deleteResult.deleteCount > 0
        ) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Payment Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <>
      {" "}
      <form
        className="text-center w-6/12 mx-auto mt-24"
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                border: "",
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
        <div className="text-center">
          <button
            className="bg-[#D1A054] text-white cursor-pointer font-semibold px-20 py-3 mt-20 "
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && (
        <p className="text-center mt-12 text-red-600">{cardError}</p>
      )}
      {transactionId && (
        <p className="text-center mt-12 text-green-500">
          Transaction Id: {transactionId}
        </p>
      )}
    </>
  );
};
export default CheckOutForm;
