import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const UseInstructors = () => {
   
    const {data:instructors=[], isLoading: instructorLoading} = useQuery({
        queryKey:['all-instructor'],
        queryFn:async()=>{
            const res = await axios.get('https://language-lab-server.vercel.app/all-instructor?role=instructor');
            return res.data;
        }
    })

    return [instructors,instructorLoading]
};

export default UseInstructors;