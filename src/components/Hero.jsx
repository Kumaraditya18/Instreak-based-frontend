import React from "react";

const HeroSection = () => (
  <header className="flex mt-16 h-screen">
    {/* Left Side - Black Background */}
    <div className="w-1/2 bg-black text-white flex flex-col justify-center items-center p-8 text-center">
      <h1 className="text-5xl font-bold">
        Empowering Futures, Engineered Today
      </h1>
      <p className="mt-4 text-lg">
        At Instrek Technologies, we drive the future with AI, IoT, AIoT,
        Blockchain, and next-gen digital solutions. We empower businesses,
        governments, and institutions with cutting-edge automation, committed to
        making India AI-ready through strategic consulting and scalable tech
        solutions.
      </p>
    </div>

    {/* Right Side - Background Image */}
    <div
      className="w-1/2 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://instrek.com/wp-content/uploads/2025/03/image_0.webp)",
      }}
    />
  </header>
);

export default HeroSection;
