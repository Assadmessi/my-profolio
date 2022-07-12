import React from "react";
import profileimg from './profileImg.jpg';

function Home() {
    return (
        <div className="relative inset-y-20 grid grid-cols-2 justify-items-center">
            <img src={profileimg} alt="profileimage"
            className="rounded-full w-72 border-solid border-gray-500 border-8"
            />
            <div className="text-white bg-gradient-to-tr from-gray-900 py-3.5 px-4">
                <p>
                I am currently working as Junior Web Developer and Sale Supervisor at Grand Wynn Group Enterprise in Yangon, Myanmar.
                I re-build the website 
                <a href="https://www.grandfoodmart.net" target={"_blank"} rel="noreferrer" className="text-gray-300 hover:text-brown">
                    www.grandfoodmart.net
                </a>
                E-commerce site for the company using the shopfiy. I also am responsible for maintaining that website and managing the content of  
                <a href="https://www.grandwynngroup.com" target={"_blank"} rel="noreferrer" className="text-gray-300 hover:text-brown">
                    www.grandwynngroup.com
                </a>.
                I am also sale supervisor there so I have to manage and collect order from the seven Facebook pages such as Grand Food Mart, Arla Myanmar, Westgold Myanmar, Kawan Myanmar, Mom&rsquo;s Choice Vegetable Oil, Pascual &ndash; Myanmar, Zade Sunflower Oil. I also have to make the monthly promotion plan and way plan for the deliveries. 
                </p>
                <p>
                    I would describe myself as someone who is quick learner, multitasking, work well under pressure, cooperative with team.  Combined with my experience, I believe the I can make a valuable contribution to your organization. 
                </p>
            </div>
        </div>
    )
};

export default Home;