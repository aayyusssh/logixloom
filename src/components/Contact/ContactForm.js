"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../sendEmail";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ phoneno: "", projects: "" });
  const [status, setStatus] = useState("");

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Ayush",
    message: message,
  };
  const onSubmit = (e) => {
    e.preventDefault();
    sendEmail(templateParams);
    setStatus("Email Sent Successfully");
    setTimeout(() => {
      setStatus("");
    }, 5000);
    setName("");
    setEmail("");
    setMessage({ phoneno: "", projects: "" });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setMessage({ ...message, phoneno: event.target.value });
  };

  const handleProjectChange = (event) => {
    setMessage({ ...message, projects: event.target.value });
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
      >
        Hello! My name is{" "}
        <input
          required
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="your name"
          className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
        />
        and I want to discuss a potential project. You can email me at
        <input
          required
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="your@email"
          className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
        />
        or reach out to me on
        <input
          required
          type="tel"
          value={message.phoneno}
          onChange={handlePhoneChange}
          placeholder="your phone"
          className="outline-none border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
        />
        Here are some details about my project: <br />
        <textarea
          value={message.projects}
          onChange={handleProjectChange}
          placeholder="My project is about..."
          rows={3}
          className="w-full outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray 
        focus:border-gray bg-transparent"
        />
        <input
          type="submit"
          value="send request"
          className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light rounded cursor-pointer"
        />
      </form>
      {status && (
        <div class="bg-green-500 text-black p-4 rounded-lg mt-4">
          Thank you for your message!
        </div>
      )}
    </>
  );
}
