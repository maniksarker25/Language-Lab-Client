import UseClasses from "../../../Hooks/UseClasses";

const ManageClasses = () => {
  const [classes, refetch, classesLoading] = UseClasses();
  console.log(classes);
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
                    <button className="primary-btn px-2 ">Approve</button>
                    <button className="primary-btn px-2 ">Deny </button>
                    <button className="primary-btn px-2 ">Send Feedback</button>
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
