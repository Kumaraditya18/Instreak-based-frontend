import React from "react";
import { Mail } from "lucide-react";
const Footer = () => (
  <footer id="contact" className="bg-black text-white text-center p-10">
    <h3 className="text-2xl font-semibold">Get in Touch</h3>
    <h2 className="text-3xl font-semibold">We're Here to Help</h2>
    <p className="mt-4">
      Reach out to us for any inquiries or support. Our team is ready to assist
      you with your technology needs.
    </p>
    <a
      href="mailto:anjali.chaurasia@instrek.com"
      className="mt-6 inline-flex items-center justify-center bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200"
    >
      <Mail className="w-6 h-6" />
    </a>
    <p className="mt-2 mb-2 px-4 py-3 text-2xl text-white rounded-lg shadow">
      Email Us
    </p>
  </footer>
);

export default Footer;
