import React from 'react';
import {Route ,createBrowserRouter ,createRoutesFromElements ,RouterProvider} from 'react-router-dom';
import Homepage from './pages/homepage.jsx';
import MainLayout from "./layout/mainlayout.jsx";
import Jobspage from './pages/jobspage.jsx';
import Notfound from './pages/notfound.jsx';
import Addjobpage from './pages/addjobpage.jsx';
// job loader can be used in other components as well
import Jobpage , {jobLoader} from './pages/jobpage.jsx';
import Editjobpage from './pages/editjobpage.jsx';



const App = () => {
  // add new job
  const addJob = async (newJob) => {
  const res = await fetch('/api/jobs', {  
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newJob),
  });
  return;
  
  };

  // delete job
  const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: 'DELETE',
  })
  };

//update job
  const updateJob = async (job) => {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  });
};
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/'element={<MainLayout/>}>
   <Route index element ={<Homepage/>}/>
   <Route path="/jobs" element ={<Jobspage/>}/>
   <Route path="/add-job" element ={<Addjobpage addJobSubmit={addJob}/>} />
   <Route path="/edit-job/:id" element ={<Editjobpage updateJobSubmit ={updateJob} />} loader={jobLoader}/>
   <Route path="/jobs/:id" element ={<Jobpage deleteJob={deleteJob} />} loader={jobLoader}/>
   <Route path="*" element ={<Notfound/>}/>
   </Route>
    )
  );

  return  <RouterProvider router={router}/>  ;
}

export default App 
