import { Helmet } from "react-helmet-async";
import UseInstructors from "../../Hooks/UseInstructors";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Instructors = () => {
  const [instructors, instructorLoading] = UseInstructors();

  if (instructorLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Helmet>
        <title>LanguageLab-Instructors</title>
      </Helmet>
      <h1 className="text-center font-semibold text-4xl mt-20">
        Our All Instructor Here
      </h1>
      {/* <div className="overflow-x-auto w-10/12 mx-auto ">
        <table className="table table-zebra mt-16">
          <thead>
            <tr className="uppercase">
              <th>SL</th>
              <th>instructor Image</th>
              <th>Instructor Name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor, index) => (
              <tr key={instructor._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    className="w-10 h-10 rounded-md"
                    src={instructor.photoUrl}
                    alt=""
                  />
                </td>
                <td>{instructor.name}</td>
                <td>{instructor.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {instructors.map((instructor) => (
          <div
            key={instructor._id}
            className="card w-full bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="w-full h-72"
                src={instructor.photoUrl}
                alt="instructor"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              <p>Email: {instructor.email}</p>
              <div className="card-actions justify-end">
                <button className="primary-btn px-4 py-2">See Class</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
