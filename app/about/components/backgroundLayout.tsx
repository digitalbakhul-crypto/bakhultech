"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* 🌌 Background Images Wrapper */}
      {mounted && (
        <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
          <Image
            src="/bgImages/about-ellipse-1.png"
            alt=""
            width={1600}
            height={800}
            className="absolute top-0 left-1/2 -translate-x-1/2 object-contain w-full max-w-[1600px] h-auto"
            priority
          />
          <Image
            src="/bgImages/about-ellipse-2.png"
            alt=""
            width={1600}
            height={800}
            className="absolute top-[800px] left-1/2 -translate-x-1/2 object-contain w-full max-w-[1600px] h-auto"
            priority
          />
          <Image
            src="/bgImages/about-ellipse-3.png"
            alt=""
            width={1600}
            height={800}
            className="absolute top-[1600px] left-1/2 -translate-x-1/2 object-contain w-full max-w-[1600px] h-auto"
            priority
          />
        </div>
      )}

      {/* ✅ Main Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
