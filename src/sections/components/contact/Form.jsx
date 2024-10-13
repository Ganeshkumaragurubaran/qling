import Link from 'next/link';
import React, { useState } from 'react';
import { MdPerson } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus('Sending...');

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      setStatus('Failed to send email.');
    }
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="container px-4 py-12 mx-auto">
        <h4 className="mb-6 text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text md:text-5xl">
          Contact Us
        </h4>
        <p className="mb-8 leading-relaxed text-center text-gray-700">
          We&apos;re here to help! Reach out to us via the form or find our contact information
          below.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-8 border-4 rounded-lg shadow-lg border-gradient-to-r bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
            <h5 className="mb-4 text-2xl font-bold text-white">Send a Message</h5>
            {/* eslint-disable jsx-a11y/label-has-associated-control */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 font-semibold text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-semibold text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Your email"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-1 font-semibold text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Write your message"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-4 font-bold text-white transition-all duration-300 transform bg-black rounded-md hover:scale-105 hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
            {/* eslint-enable jsx-a11y/label-has-associated-control */}

            {status && <p className="mt-4 text-white">{status}</p>}
          </div>

          {/* Contact Information Section */}
          <div className="p-8 bg-white border-4 rounded-lg shadow-lg border-gradient-to-r from-indigo-500 via-pink-500 to-purple-400">
            <h5 className="mb-6 text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text">
              Our Contact Information
            </h5>
            <p className="mb-4 text-lg font-semibold text-gray-700">
              We&apos;re always available to assist you with your inquiries.
            </p>
            <p className="text-gray-500">Feel free to get in touch with us:</p>

            {/* Contact details */}
            <div className="mt-6 space-y-6">
              {/* Contact Person */}
              <div className="flex items-center gap-4">
                <MdPerson className="text-3xl " />
                <div>
                  <p className="text-lg font-bold text-black">Mr. Venkat Raman</p>
                  <p className="text-sm text-gray-600">Chief Executive Officer</p>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-2xl " />
                <div>
                  <Link href="mailto:info@qlingz.com">
                    <span className="text-lg font-semibold text-black transition-colors hover:text-purple-600">
                      info@qlingz.com
                    </span>
                  </Link>
                  <br />
                  <Link href="mailto:infoqlingz@gmail.com">
                    <span className="text-lg font-semibold text-black transition-colors hover:text-purple-600">
                      infoqlingz@gmail.com
                    </span>
                  </Link>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <AiFillPhone className="text-2xl " />
                <p className="text-lg font-semibold text-black">Call: +91-95009 10535</p>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-2xl " />
                <p className="text-lg font-semibold text-black">WhatsApp: +91-95009 10535</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
