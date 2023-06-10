import useAuth from "../../Hooks/UseAuth";
import UseUserRole from "../../Hooks/UseUserRole";

const ClassCard = ({ approvedClass }) => {
    const [userRole] = UseUserRole();
    const {user} = useAuth();
  const { name, image, instructorName, availableSeat, price } = approvedClass;



  // handle select -------
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-72 w-full"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Instructor: {instructorName}</p>
        <p>Available Seat: {availableSeat}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button disabled={user && userRole !== 'student'} className={user && userRole !== 'student'?'bg-orange-200 rounded-md px-6 py-3 font-semibold':"primary-btn px-8 py-3"}>Select</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
