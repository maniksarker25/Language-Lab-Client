import "./PeopleSays.css";
import people1 from "../../../assets/people1.jpg";
import people2 from "../../../assets/people2.jpg";
import people3 from "../../../assets/people3.jpg";

const PeopleSays = () => {
  return (
    <div className="my-12 w-full">
      <h2 className="my-16 text-center font-semibold text-4xl">
        What People Say About Us?
      </h2>
      <div className="mt-6 w-full bg-img px-12  lg:px-24 flex items-center h-screen lg:h-96 ">
        <div className="lg:flex space-y-8 lg:space-y-0  gap-6">
          <div className="bg-white rounded-sm p-2 relative shadow-lg">
            <img
              className="w-16 rounded-full h-16 absolute -top-6 -left-4"
              src={people1}
              alt=""
            />
            <div className="p-8">
              <h5 className="text-2xl font-semibold">Nancy Nancy</h5>
              <p>
                "Wow, this recipe is absolutely delicious! The flavors are
                perfectly balanced, and it's so easy to make.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-sm p-2 relative shadow-lg">
            <img
              className="w-16 rounded-full h-16 absolute -top-6 -left-4"
              src={people2}
              alt=""
            />
            <div className="p-8">
              <h5 className="text-2xl font-semibold">Clark Brigid</h5>
              <p>
                "I've never been much of a cook, but this recipe made me feel
                like a pro! It's straightforward.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-sm p-2 relative shadow-lg">
            <img
              className="w-16 rounded-full h-16 absolute -top-6 -left-4"
              src={people3}
              alt=""
            />
            <div className="p-8">
              <h5 className="text-2xl font-semibold">Kevin Helmi</h5>
              <p>
                "This recipe is a real crowd-pleaser! I served it at a dinner
                party, and everyone was asking for seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSays;
