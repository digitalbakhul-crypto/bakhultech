"use client";

import Image from "next/image";
import React from "react";

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen bg-transparent">
      {/* 🌌 Background Images Wrapper */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 🔼 Top Background Image */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px]">
          <Image
            src="/bgImages/service-ellipse-1.png"
            alt="Background Top"
            width={1600}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* 🔽 Bottom Background Image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1600px]">
          <Image
            src="/bgImages/service-ellipse-2.png"
            alt="Background Bottom"
            width={1600}
            height={800}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* ✅ Page Content (Including Footer) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
