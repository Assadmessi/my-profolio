import React from "react";
import Profileimg from "../Components/profile-img";
import HomeText from "../Components/homeText";
import Contact from "../Components/Contact";
import Education from "../Components/Education";
import Skills from "../Components/Skill";
import Experience from "../Components/Experience";

function Home() {
    return (
        <div className="relative top-14 grid grid-cols-2  justify-items-center">
            <Profileimg/>
            <div className="bg-tran-white col-start-2 col-end-3 row-start-1 row-end-2">
               <HomeText/>
            </div>
            <div className="bg-tran-white w-full col-start-2 col-end-3 row-start-2 row-end-3">
                <Education/>
                <Experience/>
            </div>
            <div className="mt-6 col-start-1 col-end-2 row-start-2 row-end-3">
                <Contact/>
                <Skills/>
            </div>
        </div>
    )
};

export default Home;