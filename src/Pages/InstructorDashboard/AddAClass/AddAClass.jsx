
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/UseAuth";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddAClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const handleAddClass = (data) => {
    data.price = parseInt(data.price);
    data.availableSeat = parseInt(data.availableSeat);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name,instructorName,instructorEmail,availableSeat,price} = data;
          const newClass = {
            name,
            instructorName,
            instructorEmail,
            availableSeat,
            price,
            image: imgURL,
            status:'pending'
          };
          console.log(newClass);
          axiosSecure.post("/class", newClass).then((data) => {
            // console.log('after posting new menu item', data.data)
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Item successfully Added",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  // console.log(errors);
  return (
    <div>
      <h1 className="text-5xl font-semibold my-16 text-center">Add A Class</h1>
      <form
        onSubmit={handleSubmit(handleAddClass)}
        className="bg-[#F6F6F6] p-8  w-10/12 mx-auto"
      >
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">
                Class Name*
              </span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("name", { required: true, maxLength: 120 })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">
                Instructor Name*
              </span>
            </label>
            <input
              value={user?.displayName}
              type="text"
              placeholder="Instructor Name"
              {...register("instructorName", {
                required: true,
                maxLength: 120,
              })}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">
                Instructor Email*
              </span>
            </label>
            <input
              value={user?.email}
              type="email"
              placeholder="Instructor Email"
              {...register("instructorEmail", {
                required: true,
                maxLength: 120,
              })}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">
                Available Seat*
              </span>
            </label>
            <input
              {...register("availableSeat", { required: true })}
              type="number"
              placeholder="Available Seat"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-xl">Price*</span>
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Class Image*
              </span>
            </label>
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
        </div>
              <button className="my-10 primary-btn w-full py-3">Add Class</button>
      </form>
    </div>
  );
};

export default AddAClass;
