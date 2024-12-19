import React from "react";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Addjob = () => {
    const naviagte = useNavigate();
  const { user } = UseAuth();
  console.log(user);

  const handlesubmitjob = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Correct usage of Object.fromEntries
    const initialData = Object.fromEntries(formData.entries());
    console.log("Form Data Submitted:", initialData);
    const { min, max, currency, ...newjob } = initialData;
    console.log(newjob);
    newjob.salaryrange = { min, max, currency };
    newjob.requtrements = newjob.requirements.split("\n");
    newjob.responsibility = newjob.responsibility.split("\n");
    console.log(newjob);
    fetch("http://localhost:3000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newjob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          naviagte('/mypostjob')
      });
  };

  return (
    <div>
      <h1 className="text-3xl">Add Your Job</h1>
      <div>
        <form onSubmit={handlesubmitjob} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              placeholder="Company"
              defaultValue={"janina"}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              defaultValue={"Job Web"}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              defaultValue={"Uttara"}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Type</span>
            </label>
            <input
              type="text"
              name="jobType"
              placeholder="Job Type"
              defaultValue={"Full-time"}
              className="input input-bordered"
              required
            />
          </div>

          <select
            name="jobTypeSelect"
            className="select select-ghost w-full max-w-xs"
            required
          >
            <option disabled value="">
              Pick the Job Type
            </option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Remote</option>
          </select>

          <select
            name="category"
            className="select select-ghost w-full max-w-xs"
            required
          >
            <option disabled value="">
              Pick the Category
            </option>
            <option>Engineering</option>
            <option>Management</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered"
              defaultValue={"Hello hello hello hello"}
              placeholder="Job Description"
            ></textarea>
          </div>

          <label className="label">
            <span className="label-text">Salary Range</span>
          </label>
          <div className="grid grid-cols-3 gap-4">
            <div className="form-control">
              <input
                type="text"
                name="salaryMin"
                placeholder="Min"
                defaultValue={"10000"}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="salaryMax"
                placeholder="Max"
                defaultValue={"20000"}
                className="input input-bordered"
                required
              />
            </div>
            <select
              name="currency"
              className="select select-ghost w-full max-w-xs"
              required
            >
              <option disabled value="">
                Pick the Currency
              </option>
              <option>BDT</option>
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Requirements</span>
            </label>
            <textarea
              name="requirements"
              className="textarea textarea-bordered"
              defaultValue={"Requirements not needed"}
              placeholder="Put each requirement in a new line"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Job Responsibility</span>
            </label>
            <textarea
              name="responsibilities"
              className="textarea textarea-bordered"
              defaultValue={"Responsibilities not needed"}
              placeholder="Put each responsibility in a new line"
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Name</span>
            </label>
            <input
              type="text"
              name="hr_name"
              placeholder="HR Name"
              defaultValue={user?.uid || ""}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">HR Email</span>
            </label>
            <input
              type="email"
              name="hr_email"
              placeholder="HR Email"
              defaultValue={user?.email || ""}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Logo</span>
            </label>
            <input
              type="url"
              name="company_logo"
              placeholder="Logo URL"
              className="input input-bordered"
              required
            />
          </div>
          {/* applicationDeadline */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">applicationDeadline</span>
            </label>
            <input
              type="date"
              defaultValue={"04/04/2012"}
              name="applicationDeadline"
              placeholder="Deadline"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addjob;
