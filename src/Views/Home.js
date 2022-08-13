import React from "react";
import Profileimg from "../Components/profile-img";
import HomeText from "../Components/homeText";
import Contact from "../Components/Contact";
import Education from "../Components/Education";

function Home() {
    return (
        <div className="relative inset-y-20 grid grid-cols-2 justify-items-center">
            <Profileimg/>
            <div className="bg-tran-white">
               <HomeText/>
               <Education/>
            </div>
            <div>
                <Contact/>
            </div>
        </div>
    )
};

export default Home;