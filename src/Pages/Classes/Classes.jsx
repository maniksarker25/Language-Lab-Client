import UseApprovedClasses from "../../Hooks/UseApprovedClasses";
import ClassCard from "./ClassCard";


const Classes = () => {

    const [approvedClasses] = UseApprovedClasses();
    console.log(approvedClasses)
    return (
        <div>
            <h1 className="text-4xl text-center font-semibold mt-12">Our All Approved Classes</h1>
            <div className="my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                approvedClasses.map(approvedClass=><ClassCard key={approvedClass._id} approvedClass={approvedClass}></ClassCard>)
            }
            </div>
        </div>
    );
};

export default Classes;