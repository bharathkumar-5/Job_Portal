import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { useParams } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa6";
import Swal from "sweetalert2";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  
  useEffect(() => {
    fetch(`https://mern-jobportal-ckfs.onrender.com/all-jobs/${id}`)
      .then((res) => res.json())
      .then((data) => setJob(data));
  }, []);

  const handleJobApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "CV or Resume URL address",
      inputPlaceholder: "Enter the URL",
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Application Submitted Successfully!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"Job Details Page"} path={"Single Job"} />

      <div className="mt-10">
        <h3 className="font-semibold mb-2">Job ID: {parseInt(id)}</h3>

        <div className="my-4">
          <h2 className="text-2xl font-medium text-blue">Job details</h2>
          <p className="text-primary/75 md:w-1/3 text-sm italic my-1">
            Here<span>&apos;</span>s how the job details align with your job
            preferences. Manage job preferences anytime in your profile.
          </p>
        </div>

        <div className="my-4 space-y-2">
          <div className="flex items-center gap-2">
            <FaBriefcase />
            <p className="text-xl font-medium mb-2">
              Job type :
              <span className=" ml-2 text-gray-700 ">{job.employmentType}</span>
            </p>
          </div>
          <button className="bg-blue px-6 py-1 text-white rounded-sm">
            {job.jobTitle}
          </button>
          <button
            className="bg-indigo-700 px-6 py-1  text-white rounded-sm ms-2"
            onClick={handleJobApply}
          >
            Apply Now
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12 mt-12">
          <div className="md:w-1/3">
            <h4 className="text-lg font-medium mb-3">Benefits</h4>
            <p className="text-sm text-primary/70 mb-2">
              Pulled from the full job description
            </p>
            <ul className="list-disc list-outside text-primary/90 space-y-2 text-base">
              <li>1. ${job.minPrice}-{job.maxPrice}k</li>
              <li>2. Disability insurance</li>
              <li>3. Employee discount</li>
              <li>4. Flexible spending account</li>
              <li>5. Health insurance</li>
              <li>6. Paid time off</li>
              <li>7. Vision insurance</li>
              <li>8. Volunteer time off</li>
              <li>9. Dental insurance</li>
            </ul>
          </div>

          <div className="md:w-1/3">
            <h4 className="text-lg font-medium mb-3">OutLine</h4>
            <p className="text-primary/90">
              Grand Canyon Education (GCE) is a rapidly growing educational
              service company that has long been an industry leader in providing
              educational, operational and technological support services to the
              post-secondary education sector. We put people first, drive
              innovation, and do good in the community that we live and work in.
              <br /> <br />
              This position entails joining a web design and development team
              called Academic Web Services within Grand Canyon Education to
              build custom web apps. Academic Web Services is a close-knit team
              that constructs and maintains a wide variety of applications using
              the latest web technologies.
            </p>
          </div>
          <div className="md:w-1/3">
            <h4 className="text-lg font-medium mb-3">Future Growth</h4>
            <p className="text-primary/90">
              An industry leader in providing educational, operational and
              technological support services to the post-secondary education
              sector. We put people first, drive innovation, and do good in the
              community that we live and work in.
              <br />
              <br />
              We’re passionate about web design and development and are focused
              on delivering quality products to our customers in a team setting
              driven by strong culture and a good working atmosphere. We are
              hiring web developers at all levels of experience. Requirements
              below reflect the minimum experience level.
            </p>
          </div>
        </div>

        <div className="text-primary/75 my-5 space-y-6">
          <p>
          Looking for the perfect job? Our job portal connects job seekers with top companies, making the job search process simple and effective. Whether you're a fresher or an experienced professional, we offer a wide range of opportunities across various industries. With our user-friendly interface, you can easily create a profile, upload your resume, and start applying for jobs that match your skills and career goals.
          </p>
          <p>
          Our platform is designed to provide personalized job recommendations based on your experience and preferences. Stay ahead of the competition with real-time job alerts, interview tips, and resume-building guidance. We also offer career resources, industry insights, and networking opportunities to help you grow professionally. Employers actively seek talented candidates like you, and our advanced search filters ensure you find the best opportunities faster.
          </p>
          <p>
          Success in your career starts with the right job, and we are here to support you every step of the way. Join thousands of job seekers who have already found rewarding careers through our platform. Start exploring today and take the next step toward your dream job. Your future begins here—register now and unlock endless possibilities!
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;