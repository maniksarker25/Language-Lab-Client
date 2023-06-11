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
           <div className="text-center mt-16">
            <p className="font-bold text-primary">Explore Our All Approved Classes</p>
           <h1 className="text-5xl font-semibold mt-2">Our All Classes</h1>
           </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                approvedClasses.map(approvedClass=><ClassCard key={approvedClass._id} approvedClass={approvedClass}></ClassCard>)
            }
            </div>
        </div>
    );
};

export default Classes;