import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/UseAuth";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const [feedback, setFeedback] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = (feedback) => {
    setFeedback(feedback);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const { data: myClasses = [], isLoading: classLoading } = useQuery({
    queryKey: ["my-classes", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-classes?email=${user?.email}`);
      return res.data;
    },
  });

  if (classLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
       <Helmet>
        <title>LanguageLab-MyClasses</title>
      </Helmet>
      <h1 className="text-5xl font-semibold text-center my-16">My Classes</h1>
      <div className="overflow-x-auto w-10/12 mx-auto ">
        <table className="table table-zebra">
          <thead>
            <tr className="uppercase">
              <th>SL</th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Total Enrolled </th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((myClass, index) => (
              <tr key={myClass._id}>
                <td>{index + 1}</td>
                <td>{myClass.name}</td>
                <td>
                  <p
                    className={
                      myClass.status === "pending"
                        ? "bg-orange-500 px-2 py-1 rounded-md text-white"
                        : myClass.status === "approved"
                        ? "bg-green-500 px-2 py-1 rounded-md text-white"
                        : "bg-red-500 px-2 py-1 rounded-md text-white"
                    }
                  >
                    {myClass.status}
                  </p>
                </td>
                <td>{myClass?.totalEnrolled || 0}</td>
                <td>
                  {myClass.status === "pending" ||
                  myClass.status === "approved" ? (
                    "No Feedback"
                  ) : (
                    <button
                      onClick={()=>openModal(myClass.feedback?myClass.feedback:'Admin has not given any feedback')}
                      className="primary-btn px-2 py-1"
                    >
                      See Feedback
                    </button>
                  )}
                </td>
                <th>
                  <button className="primary-btn px-2 py-1">Update</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpen && (
          <div className="fixed inset-0  flex items-center justify-center z-10 shadow-xl">
            <div className="absolute   px-16 bg-[#F6F6F6] w-1/5 p-6 rounded-lg">
            <p>{feedback}</p>
            <FaTimes onClick={closeModal} className="absolute top-2 text-2xl right-2 cursor-pointer"/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyClasses;
