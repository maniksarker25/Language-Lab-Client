import UseSelectedClasses from "../../../Hooks/UseSelectedClasses";


const MySelectedClass = () => {
    const [selectedClasses,refetch,selectedClassesLoading] = UseSelectedClasses();
    console.log(selectedClasses)
    return (
        <div>
            <h1 className="text-4xl font-bold text-center mt-20">Selected Classes</h1>
            
        </div>
    );
};

export default MySelectedClass;