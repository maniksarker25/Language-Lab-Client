import UseSelectedClasses from "../../../Hooks/UseSelectedClasses";

import { FaTrashAlt } from "react-icons/fa";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const [selectedClasses, refetch, selectedClassesLoading] =
    UseSelectedClasses();
  // console.log(selectedClasses)

  // handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: ` Do you want to delete this Class`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`http://localhost:5000/delete-class/${id}`)
          .then((data) => {
            if (data.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your Class Has Been Deleted.", "success");
            }
          });
      }
    });
  };

  if (selectedClassesLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
         <Helmet>
        <title>LanguageLab-MySelectedClasses</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center mt-20">My Selected Classes</h1>
      <div className="overflow-x-auto w-10/12 mx-auto ">
        <table className="table table-zebra mt-24">
          <thead>
            <tr className="uppercase">
              <th>SL</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((selectedClass, index) => (
              <tr key={selectedClass._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="w-10 h-10 rounded-md"
                    src={selectedClass.image}
                    alt=""
                  />
                </td>
                <td>{selectedClass.name}</td>
                <td>${selectedClass.price}</td>
                <td className="flex gap-6 items-center">
                  <FaTrashAlt
                    onClick={() => handleDelete(selectedClass._id)}
                    className="text-red-600 text-2xl cursor-pointer"
                  />
                  <Link to='/dashboard/payment'><button className="bg-[#FF7350]  font-semibold rounded-md text-white px-4 py-2">
                    Pay
                  </button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
