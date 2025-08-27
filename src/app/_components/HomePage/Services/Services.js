"use client";
import ServiceAnimation from "@/Components/ServiceAnimation/ServiceAnimation";
import React, { useState } from "react";
import { axiosClient } from "../../../../../Utils/axiosClient";
import Toast from "../../Toast/Toast";

const Services = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [number, setNumber] = useState('')
    const [toast, setToast] = useState(null)
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await axiosClient.post('/user/userform', {
                name,
                email,
                message,
                number
            })
            console.log("RESPONSE DATA", response);
            if(response.data.status === 'ok'){
                setToast({ type: "success", message: "Message sent successfully!" });
            }else{
                setToast({ type: "error", message: "Something went wrong" });
            }
        } catch (error) {
            setToast({ type: "error", message: "Server Error!" });
        }

    }
    return (
        <div className="min-h-screen  text-white flex flex-col md:flex-row items-center justify-center gap-5 py-12 px-5 md:px-15">

            {/* Right Side - Contact Form */}
            <div className="right-side w-full md:w-1/2 bg-black p-8 rounded-2xl shadow-lg border border-red-800">
                <h2 className="text-3xl font-bold text-red-800 mb-6">Contact Me</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-sm">Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-600 text-white focus:outline-none focus:border-red-800"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-sm">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-600 text-white focus:outline-none focus:border-red-800"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-2 text-sm">Phone</label>
                        <input
                            onChange={(e) => setNumber(e.target.value)}
                            type="tel"
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-600 text-white focus:outline-none focus:border-red-800"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-2 text-sm">Message</label>
                        <textarea
                            placeholder="Write your message..."
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            className="w-full px-4 py-2 rounded-lg bg-black border border-gray-600 text-white focus:outline-none focus:border-red-800"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        onSubmit={handleSubmit}
                        type="submit"
                        className="w-full bg-red-800 hover:bg-red-700 transition px-4 py-2 rounded-lg font-semibold"
                    >
                        Send Message
                    </button>
                </form>
                {toast && (
                    <Toast
                        type={toast.type}
                        message={toast.message}
                        onClose={()=>setToast(null)}
                    />
                )}
            </div>

            {/* Left Side - Animation */}
            <div className="left-side  flex justify-center">
                <ServiceAnimation />
            </div>
        </div>
    );
};

export default Services;
