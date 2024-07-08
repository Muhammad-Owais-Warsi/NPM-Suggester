import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTools, FaLightbulb, FaChartLine, FaRocket, FaCodeBranch, FaGithub, FaQuoteLeft } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between text-black bg-white dark:bg-gray-900 px-4 py-8 pt-5">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mr-auto place-self-center lg:col-span-7"
          >
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              NPM Package Suggester
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Get quick recommendations for NPM packages and optimize your projects.
            </p>
            <Link
              to="/main"
              className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-blue-500 group px-5 py-2 rounded-2xl inline-block"
            >
              <span className="relative z-10 text-blue-500 group-hover:text-white text-xl duration-500">
                Get Started 🚀
              </span>
              <span className="absolute w-full h-full bg-blue-500 opacity-0 group-hover:opacity-100 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-blue-500 opacity-0 group-hover:opacity-100 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          >
            <img src="./heroImg.png" alt="hero image" />
          </motion.div>
        </div>
      </section>

      {/* Why Use Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Us</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <FaTools className="h-5 w-5 text-white" />
              </span>
              <div>
                <h2 className="text-lg font-bold">Optimize Your Dependencies</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Our tool helps you optimize your project's dependencies, ensuring you use the best packages available.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <FaLightbulb className="h-5 w-5 text-white" />
              </span>
              <div>
                <h2 className="text-lg font-bold">Tailored Recommendations</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Get recommendations based on your specific needs, making your project development faster and more efficient.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <FaChartLine className="h-5 w-5 text-white" />
              </span>
              <div>
                <h2 className="text-lg font-bold">Boost Productivity</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Enhance your workflow and boost productivity with our intelligent package suggestions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Our Features</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <FaRocket className="h-5 w-5 text-white" />
              </span>
              <div>
                <h2 className="text-lg font-bold">Fast & Reliable</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Experience fast and reliable recommendations for your projects.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <FaCodeBranch className="h-5 w-5 text-white" />
              </span>
              <div>
                <h2 className="text-lg font-bold">Collaborative</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Collaborate with others and get the best package suggestions.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <FaGithub className="h-5 w-5 text-white" />
              </span>
              <div>
                <h2 className="text-lg font-bold">Open Source</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Our project is open source. Contribute and be a part of our community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">Benefits</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <FaRocket className="h-5 w-5 text-white" />
              </span>
              <div>
                <h2 className="text-lg font-bold">Boost Efficiency</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Save time and effort with our efficient package suggestions.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <FaCodeBranch className="h-5 w-5 text-white" />
              </span>
              <div>
                <h2 className="text-lg font-bold">Improve Collaboration</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Enhance team collaboration with our integrated features.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-start gap-4"
            >
              <span className="shrink-0 rounded-lg bg-gray-800 p-4">
                <FaGithub className="h-5 w-5 text-white" />
              </span>
              <div>
                <h2 className="text-lg font-bold">Join the Community</h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Be a part of our open-source community and contribute to the project.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">What Our Users Say</h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="h-6 w-6 text-blue-500" />
                <h3 className="ml-2 text-lg font-bold text-gray-800 dark:text-gray-200">John Doe</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "This tool has significantly improved our development workflow. Highly recommend!"
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="h-6 w-6 text-blue-500" />
                <h3 className="ml-2 text-lg font-bold text-gray-800 dark:text-gray-200">Jane Smith</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "The recommendations are spot on and have helped us save a lot of time."
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <FaQuoteLeft className="h-6 w-6 text-blue-500" />
                <h3 className="ml-2 text-lg font-bold text-gray-800 dark:text-gray-200">Alex Johnson</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                "Amazing tool! It has become an essential part of our development process."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full py-12 bg-[#96C9F4] text-white text-center rounded-b-3xl mb-16"
      >
        <h2 className="text-2xl text-[#304463] md:text-4xl font-bold mb-4">
          This Project is Open Source
        </h2>
        <p className="text-[#5A72A0] text-lg md:text-xl mb-8">
          Star the repo, contribute to it, and view our awesome contributors.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/contributors"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition duration-300"
          >
            Contributors
          </Link>
        </motion.div>
      </motion.div>

      {/* Feedback Form */}
      <section className=" bg-sky-200 dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">We Value Your Feedback</h2>
          </div>
          <div className="mt-8">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                <textarea
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-600"
                  rows={4}
                  required
                />
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Submit Feedback
                </button>
              </motion.div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
