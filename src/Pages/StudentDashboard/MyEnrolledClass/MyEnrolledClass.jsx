import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const MyEnrolledClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClasses = [], isLoading: enrolledClassesLoading } =
    useQuery({
      queryKey: ["enrolled-classes", user?.email],
      enabled: !loading && !!user?.email,
      queryFn: async () => {
        const res = await axiosSecure(
          `https://language-lab-server.vercel.app/enrolled-classes?email=${user?.email}`
        );
        return res.data;
      },
    });

  if (enrolledClassesLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Helmet>
        <title>LanguageLab-Enrolled Classes</title>
      </Helmet>
      <h1 className="text-center font-semibold text-4xl mt-20">
        My Enroll Classes
      </h1>
      {enrolledClasses.length === 0 ? (
        <h2 className="text-3xl mt-16 text-center font-semibold">
          You Have Not Enrolled Any Class
        </h2>
      ) : (
        <div className="overflow-x-auto w-10/12 mx-auto ">
          <table className="table table-zebra mt-24">
            <thead>
              <tr className="uppercase">
                <th>SL</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {enrolledClasses.map((enrolledClass, index) => (
                <tr key={enrolledClass._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      className="w-10 h-10 rounded-md"
                      src={enrolledClass.classImage}
                      alt=""
                    />
                  </td>
                  <td>{enrolledClass.className}</td>
                  <td>{enrolledClass.instructorName}</td>
                  <td>{enrolledClass.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyEnrolledClass;
