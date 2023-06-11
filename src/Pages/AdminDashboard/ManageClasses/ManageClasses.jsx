import UseClasses from "../../../Hooks/UseClasses";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";

const ManageClasses = () => {
  const [classes, refetch, classesLoading] = UseClasses();
  const [axiosSecure] = useAxiosSecure();
  const [id, setId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  //   console.log(classes);

  const openModal = (id) => {
    setId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleStatus = (id, status) => {
    axiosSecure.patch(`/status/${id}/?status=${status}`).then((data) => {
      console.log(data);
      if (data.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Class ${status} successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //
  const handleFeedback = (event) => {
    console.log(id);
    event.preventDefault();
    const feedback = event.target.feedback.value;
    console.log(feedback);
    axiosSecure.put(`/feedback/${id}`, { feedback }).then((data) => {
      console.log(data);

      if (data.data.modifiedCount > 0) {
        refetch();
        setIsOpen(false);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `Successfully send feedback`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  if (classesLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Helmet>
        <title>LanguageLab-ManageClasses</title>
      </Helmet>
      <div className="w-10/12 mx-auto">
      <h1 className="text-5xl font-semibold text-center my-16">
        Manage Classes
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr className="uppercase">
              <th>SL</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th> Instructor Name </th>
              <th> Instructor Email </th>
              <th>Available Seat</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass, index) => (
              <tr key={singleClass._id}>
                <td>{index + 1}</td>
                <td>
                  <img className="w-10 h-10" src={singleClass.image} alt="" />
                </td>
                <td>{singleClass.name}</td>
                <td>{singleClass.instructorName}</td>
                <td>{singleClass.instructorEmail}</td>
                <td>{singleClass.availableSeat}</td>
                <td>{singleClass.price}</td>
                <td>
                  <p
                    className={
                      singleClass.status === "pending"
                        ? "bg-orange-500 px-2 py-1 rounded-md text-white"
                        : singleClass.status === "approved"
                        ? "bg-green-500 px-2 py-1 rounded-md text-white"
                        : "bg-red-500 px-2 py-1 rounded-md text-white"
                    }
                  >
                    {singleClass.status}
                  </p>
                </td>
                <td className="flex gap-2">
                  <button
                    disabled={singleClass.status !== "pending"}
                    onClick={() => handleStatus(singleClass._id, "approved")}
                    className={
                      singleClass.status === "pending"
                        ? "primary-btn px-2 "
                        : "bg-orange-200 px-2 py-1 rounded-lg font-semibold"
                    }
                  >
                    Approve
                  </button>
                  <button
                    disabled={singleClass.status !== "pending"}
                    onClick={() => handleStatus(singleClass._id, "denied")}
                    className={
                      singleClass.status === "pending"
                        ? "primary-btn px-2 "
                        : "bg-orange-200 px-2 py-1 rounded-lg font-semibold"
                    }
                  >
                    Deny{" "}
                  </button>
                  <button
                    disabled={
                      singleClass.feedback || singleClass.status === "pending"
                    }
                    // onClick={() => setIsOpen(true)}
                    onClick={() => openModal(singleClass._id)}
                    className={
                      singleClass.feedback || singleClass.status === "pending"
                        ? "bg-orange-200 px-2 rounded-lg py-1 font-semibold"
                        : "primary-btn px-2 "
                    }
                  >
                    Send Feedback
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isOpen && (
          <div className="fixed inset-0  flex items-center justify-center z-10 shadow-xl">
            <div className="absolute  px-16 bg-white w-2/5 p-6 rounded-lg">
              <h2 className="text-2xl my-4 font-semibold">Give Feedback</h2>
              <form onSubmit={handleFeedback}>
                <textarea
                  className="textarea w-full my-4 h-32 textarea-bordered"
                  name="feedback"
                  required
                  placeholder="Write Feedback"
                ></textarea>

                <div className="flex justify-between">
                  <input
                    className="primary-btn cursor-pointer px-4 py-2"
                    type="submit"
                    value="Send Feedback"
                  />
                  <button
                    onClick={closeModal}
                    className="bg-gray-500 rounded-md font-semibold hover:bg-gray-700 text-white py-2 px-4"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default ManageClasses;
