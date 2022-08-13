import React from "react";
import pp from '../img/profile.jpg';

function Profileimg () {
    return (
        <div>
            <img src={pp} alt="profileimage"
            className="rounded-full w-72 border-solid border-gray-500 border-8"
            />
        </div>
    )
    
}

export default Profileimg;