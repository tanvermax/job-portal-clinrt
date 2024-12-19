import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";


const ApplyForm = () => {

    const {id}= useParams();
    const {user}= UseAuth();
    const navigate = useNavigate();

    console.log(id,user);
    
//   const [qualification, setQualification] = useState("");
//   const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form= e.target;

    const linkdin = form.linkdin.value;
    const email = form.email.value;
    const github = form.github.value;
    const resume = form.resume.value;
    console.log(linkdin,email,github,resume);
    
    // Handle form submission here (e.g., send data to an API or store it in state)
    // setSubmitted(true);
    const jobapplication = {
      job_id : id,
      applicant_email : user.email,
      linkdin, github, resume
    }
    fetch('http://localhost:3000/job-applications',{
      method: "post",
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify(jobapplication)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/application')
      }
      
    })
  };

  return (
    <div className=" mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Apply Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter your Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered input-info w-full "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Linkdin</span>
          </label>
          <input
            type="url"
            placeholder="profile"
            name="linkdin"
            className="input input-bordered input-info w-full "
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github</span>
          </label>
          <input
            type="url"
            placeholder="Github profile"
            name="github"
            className="input input-bordered input-info w-full "
            required
          />
        </div>
        <div className="form-control pb-5">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input
            type="url"
            name="resume"
            placeholder="Github profile"
            className="input input-bordered input-info w-full "
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
      {/* {submitted && (
        <div className="mt-4 text-green-600 text-center">
          <p>Your application has been submitted successfully!</p>
        </div>
      )} */}
    </div>
  );
};

export default ApplyForm;
