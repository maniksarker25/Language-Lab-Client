import { FaArrowRight } from "react-icons/fa";
import UseInstructors from "../../../Hooks/UseInstructors";
import bookIcon from "../../../assets/icon/bookIcon.png";

const TopInstructors = () => {
  const [instructors] = UseInstructors();
  return (
    <div className="mt-20 p-4 lg:p-0">
      <div className="text-center">
        <p className="text-[#FF7350] font-bold">Explore Our Top Instructors</p>
        <h3 className="text-4xl mt-2 font-semibold ">Top Instructors</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-6">
        {instructors.slice(0, 6).map((instructor) => (
          <div key={instructor._id}>
            <div className="bg-[#F0F7FF]">
              <img className="w-full h-72" src={instructor.photoUrl} alt="" />
              <div className="p-6">
                <h4 className="text-2xl font-semibold">{instructor.name}</h4>
                <p className="my-3">Email: {instructor.email}</p>
                <div className="flex justify-between mt-8">
                  <p className="flex cursor-pointer items-center gap-2 font-bold text-[#FF7350]">
                    See More <FaArrowRight />
                  </p>
                  <img src={bookIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructors;
