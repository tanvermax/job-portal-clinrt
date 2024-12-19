import React, { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { data } from "react-router-dom";

const Mypostedjobs = () => {
  const [jobs, setJopbs] = useState([]);
  const { user } = UseAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setJopbs(data)
      });
  }, [user.email]);
  console.log(jobs);
  

  return (
    <div>
      <h1 className="text-3xl">Here my posted job {jobs.length}</h1>
      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        jobs.map((job,index)=> <tr>
          <th>{index+1}</th>
          <td>{job.category}</td>
          <td>{job.company}</td>
          <td>{job.applicationDeadline}</td>
        </tr>)
      }
     
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default Mypostedjobs;
