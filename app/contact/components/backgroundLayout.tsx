"use client";

import Image from "next/image";
import React from "react";

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen bg-transparent overflow-hidden">
      {/* 🌌 Background Image Wrapper */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center">
        <div className="w-full max-w-[1600px]">
          <Image
            src="/bgImages/contact-ellipse-1.png"
            alt="Background Top"
            width={1600}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* ✅ Page Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
