import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import UseSelectedClasses from "../../../Hooks/UseSelectedClasses";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
  const { id } = useParams();
  // console.log(id)
  const [selectedClasses] = UseSelectedClasses();

  const paymentClass = selectedClasses.find((cls) => cls._id === id);
  const price = parseInt(paymentClass?.price);
//   console.log(price)

  const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_PK);

  return (
    <div>
      <Helmet>
        <title>LanguageLab-Payment</title>
      </Helmet>
      <h1 className="mt-20 text-center font-semibold text-4xl ">Make Payment</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForm price={price} paymentClass={paymentClass} />
      </Elements>
    </div>
  );
};

export default Payment;
