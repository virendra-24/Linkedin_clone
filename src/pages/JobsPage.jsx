import { useState } from 'react';

const JobsPage = () => {
  // Dummy jobs data with 10 entries
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Frontend Developer (React)",
      company: "Tech Mahindra",
      location: "Bangalore",
      type: "Full-time",
      salary: "₹12L - ₹18L PA",
      postedDate: "2 days ago",
      description: "Looking for an experienced React developer (3+ years) to lead our frontend team. Must have expertise in React hooks, Context API, and modern JavaScript. Experience with Next.js is a plus.",
      companyLogo: "https://logo.clearbit.com/techmahindra.com",
      applied: false
    },
    {
      id: 2,
      title: "Backend Engineer (Node.js)",
      company: "Flipkart",
      location: "Remote",
      type: "Full-time",
      salary: "₹15L - ₹20L PA",
      postedDate: "1 day ago",
      description: "Build scalable microservices for our e-commerce platform. Strong experience with Node.js, Express, MongoDB, and AWS required. Knowledge of GraphQL is preferred.",
      companyLogo: "https://logo.clearbit.com/flipkart.com",
      applied: false
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "TCS",
      location: "Hyderabad",
      type: "Full-time",
      salary: "₹10L - ₹15L PA",
      postedDate: "1 week ago",
      description: "Work on AI/ML models for enterprise clients. Must have strong Python skills and experience with TensorFlow/PyTorch. Knowledge of NLP and computer vision is a plus.",
      companyLogo: "https://logo.clearbit.com/tcs.com",
      applied: false
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Infosys",
      location: "Pune",
      type: "Full-time",
      salary: "₹9L - ₹14L PA",
      postedDate: "3 days ago",
      description: "Implement CI/CD pipelines and manage cloud infrastructure. Required skills: AWS, Docker, Kubernetes, Terraform. Certification in AWS/GCP is preferred.",
      companyLogo: "https://logo.clearbit.com/infosys.com",
      applied: false
    },
    {
      id: 5,
      title: "UX Designer",
      company: "Zomato",
      location: "Gurgaon",
      type: "Full-time",
      salary: "₹8L - ₹12L PA",
      postedDate: "5 days ago",
      description: "Design intuitive user experiences for our food delivery platform. Must have 2+ years experience with Figma/Sketch and a strong portfolio. Experience with user research is a plus.",
      companyLogo: "https://logo.clearbit.com/zomato.com",
      applied: false
    },
    {
      id: 6,
      title: "Full Stack Developer",
      company: "Swiggy",
      location: "Bangalore",
      type: "Full-time",
      salary: "₹14L - ₹18L PA",
      postedDate: "1 week ago",
      description: "Develop end-to-end features for our food delivery platform. Required: React, Node.js, MongoDB. Experience with TypeScript and GraphQL is preferred.",
      companyLogo: "https://logo.clearbit.com/swiggy.com",
      applied: false
    },
    {
      id: 7,
      title: "Product Manager",
      company: "Paytm",
      location: "Noida",
      type: "Full-time",
      salary: "₹18L - ₹25L PA",
      postedDate: "2 weeks ago",
      description: "Lead product development for our payments platform. 3+ years product management experience required. Strong analytical skills and technical background preferred.",
      companyLogo: "https://logo.clearbit.com/paytm.com",
      applied: false
    },
    {
      id: 8,
      title: "Android Developer",
      company: "Jio",
      location: "Mumbai",
      type: "Full-time",
      salary: "₹10L - ₹16L PA",
      postedDate: "4 days ago",
      description: "Build and maintain our Android applications. Must have 2+ years experience with Kotlin and Jetpack components. Knowledge of MVVM architecture required.",
      companyLogo: "https://logo.clearbit.com/jio.com",
      applied: false
    },
    {
      id: 9,
      title: "Cloud Architect",
      company: "Wipro",
      location: "Chennai",
      type: "Full-time",
      salary: "₹20L - ₹30L PA",
      postedDate: "1 week ago",
      description: "Design and implement cloud solutions for enterprise clients. Required: AWS/Azure certification, 5+ years cloud experience. Strong knowledge of security best practices.",
      companyLogo: "https://logo.clearbit.com/wipro.com",
      applied: false
    },
    {
      id: 10,
      title: "Data Engineer",
      company: "Byju's",
      location: "Bangalore",
      type: "Full-time",
      salary: "₹12L - ₹16L PA",
      postedDate: "3 days ago",
      description: "Build and maintain our data pipelines. Required: Python, SQL, Spark, Airflow. Experience with big data technologies and ETL processes is a must.",
      companyLogo: "https://logo.clearbit.com/byjus.com",
      applied: false
    }
  ]);

  const handleApply = (jobId) => {
    setJobs(jobs.map(job => 
      job.id === jobId ? { ...job, applied: true } : job
    ));
    alert("Application submitted successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Jobs for you</h1>
        
        <div className="space-y-6">
          {jobs.map((job) => (
            <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <img 
                  src={job.companyLogo} 
                  alt={job.company} 
                  className="w-12 h-12 object-contain border border-gray-200 rounded"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-medium text-gray-900">{job.title}</h2>
                  <p className="text-gray-700">{job.company} • {job.location}</p>
                  <p className="text-gray-500 text-sm mt-1">⏳ {job.type} | 💰 {job.salary}</p>
                  <p className="text-gray-400 text-xs mt-1">📅 Posted {job.postedDate}</p>
                  
                  <div className="mt-4">
                    <h3 className="font-medium text-gray-900">Job Description</h3>
                    <p className="text-gray-700 mt-1">{job.description}</p>
                  </div>
                  
                  <div className="mt-4">
                    <button
                      onClick={() => handleApply(job.id)}
                      disabled={job.applied}
                      className={`px-4 py-2 rounded-full font-medium ${
                        job.applied
                          ? 'bg-gray-200 text-gray-700 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {job.applied ? '✓ Applied' : 'Apply Now'}
                    </button>
                    {job.applied && (
                      <p className="text-green-600 text-xs mt-2">Application submitted!</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;