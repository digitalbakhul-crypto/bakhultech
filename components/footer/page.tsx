"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setMessage(`Subscribed with ${email}`);
    setEmail("");
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: "/iconImages/Facebook.svg",
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: "/iconImages/Instagram.svg",
      url: "https://instagram.com",
    },
    {
      name: "Twitter",
      icon: "/iconImages/Twiter.svg",
      url: "https://twitter.com",
    },
  ];

  const socialCards = [
    {
      name: "TWITTER",
      url: "https://twitter.com",
      img: "iconImages/twiter-logo.png",
    },
    {
      name: "YOUTUBE",
      url: "https://youtube.com",
      img: "iconImages/youtube-logo.png",
    },
    {
      name: "LINKEDIN",
      url: "https://linkedin.com",
      img: "iconImages/linkdin-logo.png",
    },
  ];

  return (
    <>
      {/* 🔧 Top Footer */}
      <div className="relative z-20 bg-zinc-950 py-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-8 lg:px-10">
          {/* Brand Info */}
          <div className="row-span-2 flex flex-col">
            <h2 className="text-amber-600 text-4xl font-semibold font-poppins">
              Bakhul Tech
            </h2>
            <p className="text-white text-xl font-semibold font-poppins mt-1">
              IT Solution & Technology Website
            </p>
            <p className="text-white/80 text-sm font-medium font-poppins mt-6 leading-relaxed">
              With our expertise, we help you optimize operations, enhance
              productivity, and stay ahead of the competition.
            </p>
          </div>

          {/* Info Links */}
          <div className="hidden md:flex flex-col gap-[14px] md:px-13">
            <h3 className="text-white text-sm font-bold font-poppins">Information</h3>
            <ul className="text-white/80 text-xs font-poppins space-y-2">
              <li><a href="/press-centre">Press Centre</a></li>
              <li><a href="/blog">Our Blog</a></li>
              <li><a href="/terms">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Menu Links */}
          <div className="hidden md:flex flex-col gap-[14px] md:px-13">
            <h3 className="text-white text-sm font-bold font-poppins">Menu</h3>
            <ul className="text-white/80 text-xs font-poppins space-y-2">
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/team">Our Team</a></li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div className="row-span-2 flex flex-col gap-2">
            <h3 className="text-white text-xl font-semibold font-poppins mb-4">
              Get In Touch
            </h3>

            <div className="flex items-center gap-3 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-1 rounded-full"
                >
                  <img src={link.icon} alt={link.name} className="w-6 h-6" />
                </a>
              ))}
            </div>

            <p className="text-neutral-200 text-xs font-poppins mb-2">
              Sign up for our newsletter
            </p>

            <div className="max-w-[250px] flex items-center bg-white rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-3 py-2 text-xs text-black/70 font-poppins outline-none"
              />
              <button
                onClick={handleSubscribe}
                className="bg-amber-600 text-white text-xs font-medium px-4 py-2 rounded-full"
              >
                Subscribe
              </button>
            </div>

            {message && (
              <p className="text-green-400 text-xs mt-2 font-poppins">{message}</p>
            )}
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex flex-col gap-[14px] md:px-13">
            <h3 className="text-white text-sm font-bold font-poppins">Contact</h3>
            <div className="text-white/80 text-xs font-poppins space-y-2">
              <p><strong>Phone:</strong> +123 456 789</p>
              <p><strong>Email:</strong> info@example.com</p>
            </div>
          </div>

          {/* Company Links */}
          <div className="hidden md:flex flex-col gap-[14px] md:px-13">
            <h3 className="text-white text-sm font-bold font-poppins">Company</h3>
            <ul className="text-white/80 text-xs font-poppins space-y-2">
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* 🔵 Bottom Social Bar */}
      <div className="relative z-20 bg-blue-700 py-2">
        <div className="max-w-[1440px] mx-auto text-center lg:text-left w-full px-6 md:px-8 lg:px-10">
          <h3 className="text-gray-100 text-2xl sm:text-3xl md:text-4xl font-semibold font-inter mb-6">
            Follow us for the latest updates
          </h3>
          <div className="flex flex-wrap justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-14 xl:gap-20">
            {socialCards.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-transform hover:scale-105"
                aria-label={`Follow us on ${item.name}`}
              >
                <img
                  src={item.img}
                  alt={`${item.name} icon`}
                  className="w-7 h-7 sm:w-8 sm:h-8"
                />
                <div className="text-left">
                  <p className="text-white text-sm font-medium font-libre_franklin leading-none">
                    {item.name}
                  </p>
                  <p className="text-white text-xs font-libre_franklin opacity-70">
                    linkfields
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
