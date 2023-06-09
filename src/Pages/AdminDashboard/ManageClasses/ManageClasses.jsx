import { FaTimes } from "react-icons/fa";
import UseClasses from "../../../Hooks/UseClasses";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Dialog } from '@headlessui/react'
import { useState } from "react";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [classes, refetch, classesLoading] = UseClasses();
  const [axiosSecure] = useAxiosSecure();
  //   console.log(classes);
  const [isOpen, setIsOpen] = useState(false)

  const handleStatus = (id, status) => {
    axiosSecure.patch(`/status/${id}/?status=${status}`).then((data) => {
      console.log(data)
      if (data.data.modifiedCount > 0) {
        refetch()
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
  const handleFeedback = (event, id) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    console.log(feedback);
    axiosSecure.put(`/feedback/${id}`, { feedback }).then((data) => {
      console.log(data);
   
      if(data.data.modifiedCount > 0){
        refetch();
        setIsOpen(false)
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
  return (
    <div>
      <h1 className="text-5xl font-semibold text-center my-16">My Classes</h1>
      <div className="overflow-x-auto ">
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
                <td>{singleClass.status}</td>
                <td className="flex gap-2">
                  <button
                    disabled={singleClass.status !== "pending"}
                    onClick={() => handleStatus(singleClass._id, "approved")}
                    className={
                      singleClass.status === "pending"
                        ? "primary-btn px-2 "
                        : "bg-orange-200 px-2 py-1 font-semibold"
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
                        : "bg-orange-200 px-2 py-1 font-semibold"
                    }
                  >
                    Deny{" "}
                  </button>
                  <button
                    disabled={
                      singleClass.feedback || singleClass.status === "pending"
                    }
                    onClick={() => setIsOpen(true)}
                    className={
                      singleClass.feedback || singleClass.status === "pending"
                        ? "bg-orange-200 px-2 py-1 font-semibold"
                        : "primary-btn px-2 "
                    }
                  >
                    Send Feedback
                  </button>
                  <Dialog open={isOpen} onClose={() => setIsOpen(true)}>
                    <Dialog.Panel className="fixed w-[500px] top-1/3 left-1/2 -translate-x-1/2 bg-white rounded-md shadow-xl p-8">
                      <Dialog.Title className="text-2xl font-bold">
                        Give Feedback
                      </Dialog.Title>

                      <form
                        onSubmit={(event) =>
                          handleFeedback(event, singleClass._id)
                        }
                      >
                        <textarea
                          className="textarea w-full my-4 h-32 textarea-bordered"
                          name="feedback"
                          required
                          placeholder="Write Feedback"
                        ></textarea>
                        <input
                          className="primary-btn cursor-pointer px-4 py-2"
                          type="submit"
                          value="Send Feedback"
                        />
                      </form>

                      <button
                        className="absolute top-2 right-2"
                        onClick={() => setIsOpen(false)}
                      >
                        <FaTimes className="text-xl" />
                      </button>
                    </Dialog.Panel>
                  </Dialog>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
