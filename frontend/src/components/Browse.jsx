import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
const RandomJobs = [1,2,3];

const Browse =()=>{
    return (
        <div>
         <Navbar/>
         <div>
            <h1>Search Results ({RandomJobs.length})</h1>
            {
                RandomJobs.map((item,index)=>{
                    return (
                        <Job/>
                    )
                })
            }
         </div>
           
        </div>
    )
}
export default Browse;

