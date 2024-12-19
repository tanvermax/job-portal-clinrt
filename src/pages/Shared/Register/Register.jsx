import Lottie from "lottie-react";
import registerlotti from "./../../../assets/register.json";
import { useContext } from "react";
import AuthContext from "../../../Context/AuthContext";
const Register = () => {
  const {createuser}= useContext(AuthContext);
    const handleregister=(e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const user= {email,password};

        console.log(user);
        // const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
        // if ( regex.test(password) !== password) {
            
        // }
        createuser(email,password)
        .then(result=>{
          console.log(result.user);
        })
        .catch(error=>{
          console.log(error.message);
          
        })

    }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={registerlotti}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleregister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
