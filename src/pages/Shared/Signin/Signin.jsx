import React, { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
import { IoMailOpenOutline } from "react-icons/io5";
import { data, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const { loging, setUser, signeithgoogle } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();
  console.log("insign page paf :" , location);
  
  const from = location.state || "/";

  const handlelogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const user = { email, password };
    console.log(user);

    loging(email, password)
      .then((result) => {
        console.log('sign in :',result.user.email);
        const user = {email: email}
        axios.post('http://localhost:3000/jwt', user,{ withCredentials :true})
        .then(res=>{
          console.log(res.data);
          
        })
        // navigate(from);

        // setUser(result.user)
      })
      .catch((error) => {
        console
          .log(error.message)
          .then((result) => {
            console.log(result.user);
            
          })
          .catch((error) => {
            console.log(error.message);
          });
      });
  };
  const handlegoogle = () => {
    signeithgoogle();
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email*</span>
                </label>
                <div className="flex items-center gap-2 border-[1px] p-2 rounded-md">
                  <span className="text-[#1edbbc] border-r-2 pr-2">
                    <IoMailOpenOutline />
                  </span>
                  <input
                    type="email"
                    placeholder="Info@example.com"
                    name="email"
                    className="input "
                    required
                  />
                </div>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password*</span>
                </label>
                <div className="border-[1px] rounded-md">
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input"
                    required
                  />
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-6">
                <button onClick={handlegoogle} className="btn btn-primary">
                  {" "}
                  Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
