import React from "react";
import email from '../img/email.png';
import phone from '../img/phone.png';

function Contact() {
    return (
        <div className="grid gap-y-5  mr-72">
            <div className="flex">
                <img src={email} alt="email logo"
                className="rounded-full w-11"
                />
                <a href="ayehtetheinmessi@gmail.com" className="pl-5 mt-2 text-white">ayehtetheinmessi@gmail.com</a>
            </div>
            <div className="flex">
                <img src={phone} alt="phone logo"
                className="rounded-full w-11"
                />
                <p className="pl-5 mt-2 text-white">+95-9 263 137 792</p>
            </div>
        </div>
    )
}

export default Contact;