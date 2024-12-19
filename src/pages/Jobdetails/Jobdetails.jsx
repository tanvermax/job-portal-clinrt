import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Jobdetails = () => {
    const loadjob = useLoaderData();
    const [job ,setJob]= useState(loadjob);

    return (
        <div>
           <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Job Header */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={job.company_logo || "https://via.placeholder.com/80"}
          alt={job.company}
          className="w-20 h-20 object-cover rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
          <p className="text-sm text-gray-600">{job.company}</p>
        </div>
      </div>

      {/* Job Overview */}
      <div className="space-y-4 mb-6">
        <p>
          <span className="font-semibold">Location:</span> {job.location}
        </p>
        <p>
          <span className="font-semibold">Job Type:</span> {job.jobType}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {job.category}
        </p>
        <p>
          <span className="font-semibold">Application Deadline:</span> {job.applicationDeadline}
        </p>
        <p>
          <span className="font-semibold">Salary:</span> {job.salaryRange.min}-{job.salaryRange.max} {job.salaryRange.currency.toUpperCase()} / Month
        </p>
      </div>

      {/* Job Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Description</h2>
        <p className="text-gray-700">{job.description}</p>
      </div>

      {/* Requirements */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Requirements</h2>
        <ul className="list-disc list-inside text-gray-700">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      {/* Responsibilities */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          {job.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>

      {/* HR Contact */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
        <p>
          <span className="font-semibold">HR Name:</span> {job.hr_name}
        </p>
        <p>
          <span className="font-semibold">HR Email:</span> {job.hr_email}
        </p>
      </div>

      {/* Apply Button */}
      <div className="mt-6">
        <Link to={`/apply/${job._id}`} className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600">
          Apply Now
        </Link>
      </div>
    </div>
            
        </div>
    );
};

export default Jobdetails;