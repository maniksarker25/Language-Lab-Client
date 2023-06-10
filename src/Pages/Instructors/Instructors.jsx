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
      <div className="overflow-x-auto w-10/12 mx-auto ">
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
      </div>
    </div>
  );
};

export default Instructors;
