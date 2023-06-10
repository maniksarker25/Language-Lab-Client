import { Helmet } from "react-helmet-async";
import UseApprovedClasses from "../../Hooks/UseApprovedClasses";
import ClassCard from "./ClassCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";


const Classes = () => {

    const [approvedClasses,approvedClassesLoading] = UseApprovedClasses();
    // console.log(approvedClasses)

    if(approvedClassesLoading){
        return <LoadingSpinner/>
    }
    return (
        <div>
            <Helmet>
        <title>LanguageLab-Classes</title>
      </Helmet>
            <h1 className="text-4xl text-center font-semibold mt-12">Our All Approved Classes</h1>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                approvedClasses.map(approvedClass=><ClassCard key={approvedClass._id} approvedClass={approvedClass}></ClassCard>)
            }
            </div>
        </div>
    );
};

export default Classes;