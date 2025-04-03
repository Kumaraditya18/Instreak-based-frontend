import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import HeroSection from "./Hero";

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="max-w-6xl mx-auto my-20 p-6 text-black bg-white shadow-lg rounded-xl text-center"
  >
    <h2 className="text-3xl font-semibold text-black">{title}</h2>
    <div className="mt-4 text-gray-700">{children}</div>
  </section>
);

const LandingPage = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen font-sans">
        <Navbar />
        <HeroSection />
        <section id="about" className="flex mt-16 px-24 py-32 items-center">
          {/* Left Side - Title */}
          <div className="w-1/2 text-5xl font-bold text-black pr-12">
            Our Journey and Vision
          </div>

          {/* Right Side - Description */}
          <div className="w-1/2 text-lg text-gray-700 leading-relaxed pl-12">
            <p>
              Founded in 2017, Instrek Technologies has rapidly evolved into a
              leader in AI, IoT, and Blockchain solutions. Our mission is to
              create a future where technology enhances human potential and
              drives sustainable growth. We are committed to making India
              AI-ready through innovative solutions and comprehensive training
              programs. Our core values include innovation, integrity,
              collaboration, and excellence, which guide us in every project we
              undertake. Our dedicated team, led by industry experts, works
              closely with clients to deliver tailored solutions that meet their
              unique needs.
            </p>
          </div>
        </section>

        {/* Image Section */}
        <div className="flex justify-center mt-8">
          <img
            src="https://instrek.com/wp-content/uploads/2025/03/piclumen-1742394774407.png"
            alt="Our Journey"
            className="w-3/4 rounded-lg shadow-lg"
          />
        </div>

        <Section id="strengths" title="Our Strengths">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
            <div className="p-4 border rounded-lg">AI & Machine Learning</div>
            <div className="p-4 border rounded-lg">Cloud Computing</div>
            <div className="p-4 border rounded-lg">Blockchain Technology</div>
            <div className="p-4 border rounded-lg">IoT & AIoT Solutions</div>
            <div className="p-4 border rounded-lg">Cybersecurity</div>
            <div className="p-4 border rounded-lg">Digital Transformation</div>
          </div>
        </Section>

        <Section id="services" title="Our Services">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
            <div className="p-6 border rounded-lg bg-white shadow-lg">
              <h3 className="text-2xl font-semibold text-black">
                Strategic AI Consulting
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Helping businesses leverage AI for operational efficiency and
                innovation.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow-lg">
              <h3 className="text-2xl font-semibold text-black">
                Smart City Innovations
              </h3>
              <p className="mt-2 text-lg text-black">
                Implementing AI and IoT for urban development and smarter
                infrastructure.
              </p>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow-lg">
              <h3 className="text-2xl font-semibold text-black">
                Workforce Training & Hiring
              </h3>
              <p className="mt-2 text-lg text-gray-600">
                Providing AI-driven training and recruitment solutions to build
                a future-ready workforce.
              </p>
            </div>
          </div>
        </Section>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
