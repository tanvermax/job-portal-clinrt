import { CiBookmark } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link } from "react-router-dom";

const Hotcard = ({ job }) => {
  return (
    <div className="shadow-lg rounded-lg p-14 w-full relative mx-auto border border-teal-400">
      {/* Urgent Tag */}
      {job.isUrgent && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          Urgent
        </div>
      )}

      {/* Saved Icon */}
      <div className="absolute bg-gray-100 p-2 text-teal-500 rounded-full right-10">
        <CiBookmark />
      </div>

      {/* Job Logo */}
      <div className="flex items-center space-x-3">
        <img
          src={job.company_logo || "https://via.placeholder.com/40"} // Placeholder if no logo is provided
          alt={job.company}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="ml-5">
          <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company}</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-4 border-t border-gray-300" />

      {/* Job Details */}
      <div className="text-sm text-gray-700 space-y-2 border-l-4 rounded-l-sm border-teal-400 pl-2">
        <p>
          <span className="font-semibold">Salary:</span>{" "}
          {job.salaryRange && job.salaryRange.min && job.salaryRange.max ? (
            <>
              ${job.salaryRange.min} - ${job.salaryRange.max} /{" "}
              {job.salaryRange.currency === "bdt" ? "Month" : "Per month"}{" "}
              {job.salaryRange.currency}
            </>
          ) : (
            "Not Specified"
          )}
        </p>
        <p>
          <span className="font-semibold">Job Type:</span>{" "}
          {job.jobType || "Not Specified"}
        </p>
        <p>
          <span className="font-semibold">Location:</span>{" "}
          {job.location || "Not Specified"}
        </p>
        <p>
          <span className="font-semibold">Deadline:</span>{" "}
          {job.applicationDeadline || "Not Specified"}
        </p>
      </div>

      {/* Responsibilities Section */}
      <div className="mt-4 text-sm text-gray-700">
        <h4 className="text-md font-semibold text-gray-800 mb-2">
          Responsibilities:
        </h4>
        {Array.isArray(job.responsibilities) &&
        job.responsibilities.length > 0 ? (
          <ul className="list-disc ml-5 space-y-1">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        ) : (
          <p>No responsibilities listed.</p>
        )}
      </div>

      {/* Apply Button */}
      <div className="mt-4 flex text-xl items-center justify-between text-teal-500 font-medium cursor-pointer ">
        <Link className="hover:underline" to={`/jobs/${job._id}`}>
          <span>see details</span>
        </Link>
        <Link
          to={`/apply/${job._id}`}
          className="flex items-center gap-3 hover:underline"
        >
          <span>Apply Now</span>
          <CiLocationArrow1 />
        </Link>
      </div>
    </div>
  );
};

export default Hotcard;
