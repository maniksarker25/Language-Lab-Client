import { FaArrowRight } from "react-icons/fa";
import UseApprovedClasses from "../../../Hooks/UseApprovedClasses";
import bookIcon from '../../../assets/icon/bookIcon.png'

const PopularClasses = () => {

    const [approvedClasses] = UseApprovedClasses();
    return (
        <div className="mt-20 p-4 lg:p-0">
            <div className="text-center">
                <p className='text-[#FF7350] font-bold'>Explore Our Popular Classes</p>
                <h3 className="text-5xl mt-2 font-semibold ">Popular Classes</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
                {
                    approvedClasses.slice(0,6).map(approvedClass=><div key={approvedClass._id}>

                        <div className="bg-[#F0F7FF] w-full h-full">
                            <img className="w-full h-72" src={approvedClass.image} alt="" />
                            <div className="p-6">
                                <h4 className="text-2xl mb-2 font-semibold">{approvedClass.name}</h4>
                                <div className="space-y-2 ">
                                <p className="text-xl" >Instructor: {approvedClass.instructorName}</p>
                                <p >Price: ${approvedClass.price}</p>
                                <p >Available Seat: {approvedClass.availableSeat}</p>
                                <p >Total Enrolled: {approvedClass?.totalEnrolled || 0}</p>
                                </div>
                                <div className="flex justify-between mt-8">
                                    <button className="flex cursor-pointer items-center gap-2 font-bold text-[#FF7350]">See Details<FaArrowRight/></button>
                                    <img src={bookIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;