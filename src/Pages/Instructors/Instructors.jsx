import { Helmet } from "react-helmet-async";
import UseInstructors from "../../Hooks/UseInstructors";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { FaArrowRight } from "react-icons/fa";
import bookIcon from "../../assets/icon/bookIcon.png";

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

      <div className="text-center  mt-20">
        <p className="text-primary font-bold">Our All Instructor Here</p>
        <h1 className=" font-semibold text-5xl">Our Instructors</h1>
      </div>
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
          <div key={instructor._id}>
            <div className="bg-[#F0F7FF]">
              <img className="w-full h-72" src={instructor.photoUrl} alt="" />
              <div className="p-6">
                <h4 className="text-2xl font-semibold">{instructor.name}</h4>
                <p className="my-3">Email: {instructor.email}</p>
                <div className="flex justify-between mt-8">
                  <p className="flex cursor-pointer items-center gap-2 font-bold text-[#FF7350]">
                    See More <FaArrowRight />
                  </p>
                  <img src={bookIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
