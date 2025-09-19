"use client";
import React from "react";

export default function FormSection() {
  // Input config array
  const fields = [
    {
      label: "Name",
      name: "FullName",
      type: "text",
      placeholder: "Your Name",
    },
    {
      label: "Email",
      name: "Email",
      type: "email",
      placeholder: "Your Email",
    },
    {
      label: "Phone",
      name: "Phone",
      type: "tel",
      placeholder: "Phone Number",
    },
    {
      label: "Subject",
      name: "Subject",
      type: "text",
      placeholder: "Subject",
    },
  ];

  return (
    <div className="w-full flex justify-center px-4 py-16">
      <div className="w-full max-w-[1420px]">
        {/* Heading */}
        <div className="text-center mt-[138px]">
          <h1 className="font-poppins text-[42.6px] font-semibold leading-[56.8px] text-white">
            Contact Us
          </h1>
          <p className="font-poppins text-[14px] font-normal leading-6 text-white max-w-[498px] mx-auto mt-3.5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Form */}
        <div className="w-full max-w-[941px] bg-amber-50 rounded-[10.65px] mt-[56px] mx-auto p-[48px]">
          <form className="space-y-6 text-black">
            {/* Dynamically Rendered Fields */}
            {[0, 2].map((startIndex) => (
              <div key={startIndex} className="flex flex-col md:flex-row gap-6">
                {fields.slice(startIndex, startIndex + 2).map((field) => (
                  <div key={field.name} className="w-full">
                    <label
                      htmlFor={field.name}
                      className="block text-sm font-medium mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full border border-gray-300 rounded-lg px-[28.4px] py-[15.975px]"
                    />
                  </div>
                ))}
              </div>
            ))}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="Message"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 min-h-[120px]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[225px] h-[56px] flex items-center justify-center bg-[#FF7800] rounded-[36px] transition hover:opacity-90"
            >
              <span className="text-white font-manrope text-[15.975px] font-semibold leading-[28.4px]">
                Send message
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
