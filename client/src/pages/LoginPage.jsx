import Inputs from "../components/helper/Inputs";
import SubmitButton from "../components/helper/SubmitButton";
import LinkTo from "../components/helper/LinkTo";
import { Link } from "react-router-dom";
import { schema } from "../schemas/LoginSchema";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

function LoginPage() {
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
    formData.append("email", d.email);
    formData.append("password", d.password);

    axios
      .post("/login", formData)
      .then((res) => {
        console.log(res);
        navigate("/example-show-user");
        reset();
      })
      .catch((err) => {
        console.log(err);
        alert(err.response?.data?.msg);
      });
  };

  return (
    <div className="bg-[#c6d7d9] h-screen flex items-center justify-center tracking-wide">
      <div className=" size-[90%] grid grid-cols-12 font-jura m-5 shadow-md rounded-2xl">
        {/* Title, Form */}
        <div className="col-span-12 md:col-span-5 bg-white flex justify-center items-center rounded-tl-2xl rounded-bl-2xl">
          <div className=" sm:size-[80%] grid grid-rows-12">
            <div className="row-span-2">
              <h1 className="text-4xl tracking-wide">
                Bizz<span className="text-[#1faabd]">Comm</span>Sync
              </h1>
              <h1 className="text-lg tracking-wide">
                Let's sync in your business communications!
              </h1>
            </div>
            <div className="mt-14 row-span-10">
              <form
                onSubmit={handleSubmit(submittedData)}
                className="w-full flex flex-col justify-center items-center"
                method="post"
              >
                <Inputs
                title="Email"
                  name="email"
                  type="email"
                  placeholder="name@email.com"
                  hook={register("email")}
                />
                {errors.email && (
                  <span className="text-s text-red-500  -mt-2.5">
                    {errors.email?.message}
                  </span>
                )}
                <Inputs
                title="Password"
                  name="password"
                  type="password"
                  placeholder="password"
                  hook={register("password")}
                />
                {errors.password && (
                  <span className="text-s text-red-500  -mt-3.5">
                    {errors.password?.message}
                  </span>
                )}
                <div className="flex justify-between w-[20rem] mt-1">
                  <LinkTo to="/forget-password" name="Forget Password" />
                  <LinkTo to="/login-through-otp" name="Login through OTP" />
                </div>
                <SubmitButton name="Login" />
                <div className="-mt-2">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-[#198f9f]">
                    Create Account
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="h-full rounded-tr-2xl shadow-inner border-l-2 border-gray-300 rounded-br-2xl bg-white hidden md:grid md:col-span-7 items-center">
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_23-2149171107.jpg?w=1060&h=980&t=st=1712578356~exp=1712578956~hmac=b0ef92e1dcd28fb674122c0260e07219f3d8cf58cf4d16537cbf5b607cb8a360"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
