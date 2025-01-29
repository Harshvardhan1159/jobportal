import React from "react";
import Navbar from "../shared/Navbar";
import FilterCard from "../FilterCard";

import Job from "../Job";

const jobsArray =[1,2,3,4,5,6,7,8];

const Jobs = () => {
    return (
        <div>
            <Navbar/>
            <FilterCard/>

            {
                jobsArray.map((item,index) => <Job/>)

                //add similar job
            }


        </div>
    )
}
export default Jobs