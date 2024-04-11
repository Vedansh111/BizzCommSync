import SubmitButton from "../components/helper/SubmitButton";
import SignupInputs from "../components/helper/SignupInputs";
import { schema } from "../schemas/SignUpSchema";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

function SignUpPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submittedData = (d) => {
    console.log(d);
    const formData = new FormData();
    formData.append("username", d.name);
    formData.append("password", d.password);
    formData.append("email", d.email);
    formData.append("mobile_no", d.mobile);
    formData.append("address", d.address);
    formData.append("bussiness_type", d.bussinessType);

    axios
      .post("/api/users", formData)
      .then((res) => {
        console.log(formData);
        console.log(res);
        navigate("/");
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-[#c6d7d9] h-screen flex items-center justify-center tracking-wide">
      <div className=" size-[90%] grid grid-cols-12 font-jura m-5 shadow-md rounded-2xl">
        {/* Title, Form */}
        <div className="col-span-12 md:col-span-5 bg-white flex justify-center items-center rounded-tl-2xl rounded-bl-2xl">
          <div className="size-[80%] grid grid-rows-12">
            <div className="row-span-2">
              <h1 className="text-4xl tracking-wide">
                Bizz<span className="text-[#1faabd]">Comm</span>Sync
              </h1>
              <h1 className="text-lg tracking-wide">
                Syncing business, communication & more!
              </h1>
            </div>
            <div className="mt-5 row-span-10">
              <form
                onSubmit={handleSubmit(submittedData)}
                className="w-full h-fit flex flex-col justify-center items-center"
                method="post"
              >
                <SignupInputs
                  name="name"
                  type="text"
                  placeholder="username"
                  hook={register("name")}
                />
                {errors.name && (
                  <span className="text-s text-red-500  -mt-2.5">
                    {errors.name?.message}
                  </span>
                )}
                <SignupInputs
                  name="email"
                  type="email"
                  placeholder="name@email.com"
                  hook={register("email")}
                />
                {errors.email && (
                  <span className="text-sm text-red-500  -mt-2.5">
                    {errors.email?.message}
                  </span>
                )}
                <SignupInputs
                  name="mobile"
                  type="text"
                  placeholder="mobile number"
                  hook={register("mobile")}
                />
                {errors.mobile && (
                  <span className="text-sm  text-red-500 -mt-2.5">
                    {errors.mobile?.message}
                  </span>
                )}
                <SignupInputs
                  name="address"
                  type="text"
                  placeholder="address"
                  hook={register("address")}
                />
                <SignupInputs
                  name="password"
                  type="password"
                  placeholder="password"
                  hook={register("password")}
                />
                {errors.password && (
                  <span className="text-sm text-red-500 -mt-2.5">
                    {errors.password?.message}
                  </span>
                )}
                <div className="flex items-center space-x-2 w-[20rem] my-1">
                  <label htmlFor="bussinessType" className="text-base">
                    Bussiness Type:
                  </label>
                  <select
                    {...register("bussinessType")}
                    name="bussinessType"
                    id="bussinessType"
                    className="p-1 w-28 border border-gray-400 rounded-sm"
                  >
                    <option value="">Select</option>
                    <option value="Builder">Builder</option>
                    <option value="Jeweller">Jeweller</option>
                  </select>
                </div>
                {errors.bussinessType && (
                  <span className="text-sm text-red-500 ">
                    {errors.bussinessType?.message}
                  </span>
                )}
                <SubmitButton name="Create Account" />
                <div className="-mt-2">
                  Already have an account?{" "}
                  <Link to="/" className="text-[#198f9f]">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="h-full rounded-tr-2xl shadow-inner border-l-2 border-gray-300 rounded-br-2xl bg-white hidden md:grid md:col-span-7 items-center">
          <img
            src="https://elements-cover-images-0.imgix.net/75d3dd89-25cd-48df-aec1-453809853977?auto=compress&h=630&w=1200&fit=crop&crop=edges&fm=jpeg&s=c3efc7b27dfa15c9e1481ed965ad416b"
            alt="img"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
