import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UseApprovedClasses = () => {
    const {data: approvedClasses = [], isLoading: approvedClassesLoading} = useQuery({
        queryKey:['approved-classes'],
        queryFn: async ()=>{
            const res = await axios.get('https://language-lab-server.vercel.app/approved-classes?status=approved')
            return res.data;
        }
    })

    return [approvedClasses,approvedClassesLoading]
};

export default UseApprovedClasses;