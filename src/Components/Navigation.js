import React from "react";

function Navigation() {
    return(
        <div className='grid grid-cols-2 bg-royal-green h-9 fixed drop-shadow-3xl w-screen text-white h-12 content-center z-10'>
            <div className='mx-5 py-1'>
            Aye Htet Hein
            </div>
            <ul className="list-none flex justify-around py-1">
                <li>Home</li>
                <li>My Project</li>
                <li>Avaliable Service</li>
                <li>Contact</li>
            </ul>
        </div>
    )
};

export default Navigation;