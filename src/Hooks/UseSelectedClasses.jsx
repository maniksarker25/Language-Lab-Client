import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";


const UseSelectedClasses = () => {
   const {user} = useAuth();
   const [axiosSecure] = useAxiosSecure();
   const token = localStorage.getItem('access-token')
    const {data: selectedClasses=[], refetch,isLoading:selectedClassesLoading} = useQuery({
        queryKey:['selectedClasses', user?.email],
        enabled: !!user?.email && !!token,
        queryFn: async()=>{
            const res = await axiosSecure(`https://language-lab-server.vercel.app/selected-classes?email=${user?.email}`)
            return res.data;
        }
    })
    return [selectedClasses,refetch,selectedClassesLoading]
};

export default UseSelectedClasses;