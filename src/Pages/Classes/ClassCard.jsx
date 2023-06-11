import useAuth from "../../Hooks/UseAuth";
import UseUserRole from "../../Hooks/UseUserRole";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ClassCard = ({ approvedClass }) => {
  const [axiosSecure] = useAxiosSecure();
  const [userRole] = UseUserRole();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, image, instructorName, availableSeat, price } = approvedClass;

  // handle select -------
  const handleSelect = (approvedClass) => {
    // console.log(item);
    if (user && user.email) {
      const selectClass = {
        classId: approvedClass._id,
        name: approvedClass.name,
        instructorName: approvedClass.instructorName,
        price: approvedClass.price,
        image: approvedClass.image,
        studentEmail: user?.email,
      };
      axiosSecure
        .post("http://localhost:5000/select-class", { selectClass })
        .then((data) => {
          if (data.data.insertedId) {
            // refetch data to update cart item number
            toast.success("Successfully Added Class!");
          }
        });
    } else {
      Swal.fire({
        title: "Please Login First To Add Class!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Okey",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className={availableSeat === 0?"card w-full  shadow-xl bg-red-500":"card w-full bg-base-100 shadow-xl"}>
      <figure>
        <img className="h-72 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Instructor: {instructorName}</p>
        <p>Available Seat: {availableSeat}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleSelect(approvedClass)}
            disabled={user && userRole !== "student" || availableSeat === 0}
            className={
              user && userRole !== "student" || availableSeat === 0
                ? "bg-orange-200 rounded-md px-6 py-3 font-semibold"
                : "primary-btn px-8 py-3"
            }
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
