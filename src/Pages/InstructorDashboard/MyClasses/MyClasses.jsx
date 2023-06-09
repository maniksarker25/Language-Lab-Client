import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/UseAuth";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user,loading } = useAuth();

  const { data: myClasses = [], isLoading: classLoading } = useQuery({
    queryKey: ["my-classes", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-classes?email=${user?.email}`);
      return res.data;
    },
  });

  if(classLoading){
    return <LoadingSpinner/>
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
            {
               myClasses.map((myClass,index)=><tr key={myClass._id}>
                    <td>{index + 1}</td>
                    <td>{myClass.name}</td>
                    <td>{myClass.status}</td>
                    <td>0</td>
                    <td>{myClass.feedback ? myClass.feedback:'No feedback'}</td>
                    <th><button className="primary-btn px-2 py-1">update</button></th>
               </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClasses;
