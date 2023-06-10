import Swal from "sweetalert2";
import UseUsers from "../../../Hooks/UseUsers";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const ManageUsers = () => {
  const [users, refetch] = UseUsers();
  const [axiosSecure] = useAxiosSecure();
  console.log(users);

  // handle make admin
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`http://localhost:5000/users/admin/${user._id}`)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an admin now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  // handle make instructor----
  const handleMakeInstructor = (user) => {
    axiosSecure.patch(`http://localhost:5000/users/instructor/${user._id}`)
      .then((data) => {
        if (data.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: `${user.name} is an instructor now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div>
       <Helmet>
        <title>LanguageLab-ManageUsers</title>
      </Helmet>
      <h1 className="text-5xl font-semibold text-center my-16">Manage Users</h1>
      <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className={user.role === 'admin' || user.role === 'instructor'?'bg-orange-200 px-2 py-1 font-semibold':"primary-btn px-2 py-1"}
                    disabled={user.role === 'admin'}

                  >
                    Make Admin
                  </button>
                  <button 
                    onClick={() => handleMakeInstructor(user)}
                    className={user.role === 'admin' || user.role === 'instructor'?'bg-orange-200 px-2 py-1 font-semibold':"primary-btn px-2 py-1"}
                    disabled={user.role === 'instructor'}
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
