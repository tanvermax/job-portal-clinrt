import { useEffect, useState } from "react";
import Hotcard from "./Hotcard";

const Hotjobs = () => {
  const [jobs, setJobs] = useState([]) || {};

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="flex justify-between items-center ">
        <div className="py-5">
          <h1 className="text-3xl font-bold py-2">
            JOBES <span className="text-teal-500">Latest</span> Job
          </h1>
          <p className="text-xl">
            To choose your trending job dream & to make future bright.
          </p>
        </div>
        <div className="text-teal-500 text-xl">show all</div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        {
            jobs.map(job=> <Hotcard key={job._id} job={job}></Hotcard>)
        }
      </div>
    </div>
  );
};

export default Hotjobs;
