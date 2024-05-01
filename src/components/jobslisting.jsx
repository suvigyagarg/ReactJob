import React from 'react'
import { useEffect ,useState } from 'react';
import Joblisting from "./joblisting.jsx"
import spinner from './spinner.jsx';

function jobslisting({isHome = false}) {
 const [jobs, setJobs] = useState([]);
const[loading, setLoading] = useState(true);

useEffect(() => {
 const fetchJobs = async () => {
  const apiURL = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
try {
//mock backend created using json server npm package  tp run it npm run server 
  const res =await fetch(apiURL);
  const data = await res.json();
  setJobs(data);
 }
 catch (error) {
   console.log(error);
 }
 finally {
   setLoading(false);
 }}
 fetchJobs();

}, [] );

  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Featured Jobs" : "Browse Jobs"}
          </h2>
          
          {loading ? (
           <spinner loading={loading} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            console.log(job),
           <Joblisting job={job} key={job.id} />
          ))}
          </div>
          )}
          
        </div>
      </section>
    </div>
  )
}

export default jobslisting