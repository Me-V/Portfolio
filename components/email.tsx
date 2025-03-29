"use client";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { div } from "framer-motion/client";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
      setEmailSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-14"
      >
        <h2
          className="text-4xl md:text-5xl font-bold
                    text-content mb-4 text-center"
        >
          Let&apos;s Connect
        </h2>
        <div
          className="w-24 h-1 bg-gradient-to-r from-primary
                    to-tertiary rounded-full"
        />
      </motion.div>

      {emailSubmitted === true ? (
        <p className="text-white font-mono ml-10 text-lg lg:text-5xl font-extrabold mb-20 leading-relaxed">
          Email Sent Successfully! Thanks For Your Time ☺️
        </p>
      ) : (
        <form className="lg:w-[50vw] mb-10" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-2xl font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-[250px] md:w-full p-2.5"
              placeholder="jacob@google.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block text-2xl mb-2 font-medium"
            >
              Name
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-[250px] md:w-full p-2.5"
              placeholder="Just saying hi"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-2xl mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-[250px] md:w-full p-2.5"
              placeholder="Let's talk about..."
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black w-fit ml-16 lg:ml-80"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
