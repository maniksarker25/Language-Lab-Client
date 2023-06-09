import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/UseAuth";
import { Dialog } from "@headlessui/react";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

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
      <h1 className="text-5xl font-semibold text-center my-16">My Classes</h1>
      <div className="overflow-x-auto w-10/12 mx-auto ">
        <table className="table table-zebra">
          <thead>
            <tr className="uppercase">
              <th>SL</th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Enroll </th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myClasses.map((myClass, index) => (
              <tr key={myClass._id}>
                <td>{index + 1}</td>
                <td>{myClass.name}</td>
                <td>{myClass.status}</td>
                <td>0</td>
                <td>
                  {myClass.status === "pending" ||
                  myClass.status === "approved" ? (
                    "No Feedback"
                  ) : (
                    <>
                      {" "}
                      <button
                        onClick={() => setIsOpen(true)}
                        className="primary-btn px-2 py-1"
                      >
                        See Feedback
                      </button>
                      <Dialog open={isOpen} onClose={() => setIsOpen(true)}>
                        <Dialog.Panel className="fixed w-[500px] top-1/3 left-1/2 -translate-x-1/2 bg-white rounded-md shadow-xl p-8">
                          <p className="text-xl">
                            {myClass.feedback
                              ? myClass.feedback
                              : "Admin has not given any feedback"}
                          </p>

                          <button
                            className="absolute top-2 right-2"
                            onClick={() => setIsOpen(false)}
                          >
                            <FaTimes className="text-xl" />
                          </button>
                        </Dialog.Panel>
                      </Dialog>{" "}
                    </>
                  )}
                </td>
                <th>
                  <button className="primary-btn px-2 py-1">Update</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
