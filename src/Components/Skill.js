import React from "react";

function Skills() {
    return (
        <div className="text-white py-3.5 px-4">
            <h1 className="border-b-2 w-14 text-2xl">Skills</h1>
            <div className="grid grid-cols-g100 pt-2.5">
                <p>HTML</p>
                <p className="bg-green-500 border-green-500 w-530 text-center">100%</p>
            </div>
            <div className="grid grid-cols-g100 pt-2.5">
                <p>CSS</p>
                <p className="bg-green-500 border-green-500 w-96 text-center">70%</p>
            </div>
            <div className="grid grid-cols-g100 pt-2.5">
                <p>JS</p>
                <p className="bg-green-500 border-green-500 w-72 text-center">60%</p>
            </div>
            <div className="grid grid-cols-g100 pt-2.5">
                <p>REACT</p>
                <p className="bg-green-500 border-green-500 w-52 text-center">50%</p>
            </div>
            <div className="grid grid-cols-g100 pt-2.5">
                <p>PHOTOSHOP</p>
                <p className="bg-green-500 border-green-500 w-96 text-center">70%</p>
            </div>
            <div className="grid grid-cols-g100 pt-2.5">
                <p>ADOBE XD</p>
                <p className="bg-green-500 border-green-500 w-72 text-center">60%</p>
            </div>
        </div>
    )
}

export default Skills;