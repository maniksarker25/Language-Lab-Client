import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const PaymentHistory = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: payments = [], isLoading: paymentLoading } = useQuery({
    queryKey: ["enrolled-classes", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(
        `https://language-lab-server.vercel.app/payment-history?email=${user?.email}`
      );
      return res.data;
    },
  });

  if (paymentLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Helmet>
        <title>LanguageLab-PaymentHistory</title>
      </Helmet>
     <h1 className="text-center font-semibold text-4xl mt-20">
        Payment History
      </h1>
      {payments.length === 0 ? (
        <h2 className="text-3xl mt-16 text-center font-semibold">
          You Have Not Payment
        </h2>
      ) : (
        <div className="overflow-x-auto w-10/12 mx-auto ">
          <table className="table table-zebra mt-24">
            <thead>
              <tr className="uppercase">
                <th>SL</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>transaction Id</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="w-10 h-10 rounded-md"
                      src={payment.classImage}
                      alt=""
                    />
                  </td>
                  <td>{payment.className}</td>
                  <td>{payment.transactionId}</td>
                  <td>{payment.price}</td>
                  <td>{payment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
