import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTools, FaLightbulb, FaChartLine } from "react-icons/fa";

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
              Get quick recommendations for NPM packages and optimize your
              projects.
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
                <h2 className="text-lg font-bold">
                  Optimize Your Dependencies
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Our tool helps you optimize your project's dependencies,
                  ensuring you use the best packages available.
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
                  Get recommendations based on your specific needs, making your
                  project development faster and more efficient.
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
                  Enhance your workflow and boost productivity with our
                  intelligent package suggestions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
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
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/contributors"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition duration-300"
          >
            Contributors
          </Link>
        </motion.div>
      </motion.div>

      <div className="relative mx-auto max-w-5xl mt-20">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl p-1"
          style={{
            backgroundImage:
              "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)",
          }}
        >
          <motion.div className="rounded-lg bg-white backdrop-blur">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex w-full flex-wrap items-center justify-between gap-4 px-8 py-10 sm:px-16 lg:flex-nowrap"
            >
              <div className="lg:max-w-xl">
                <h2 className="block w-full pb-2 bg-gradient-to-b from-blue-400 to-blue-600 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
                  Enhance Your Project with NPM Package Suggester
                </h2>
                <p className="my-4 bg-transparent font-medium leading-relaxed tracking-wide text-gray-600 dark:text-gray-400">
                  Get quick recommendations for NPM packages and optimize your
                  projects effortlessly.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap items-center justify-center gap-6"
              >
                <Link
                  to="/main"
                  className="relative z-100 cursor-pointer font-semibold overflow-hidden group px-5 py-2 rounded-2xl inline-block border border-blue-500"
                >
                  <span className="relative z-10 text-blue-500 group-hover:text-white text-xl duration-500">
                    Get Started 🚀
                  </span>
                  <span className="absolute w-full h-full bg-blue-500 opacity-0 group-hover:opacity-100 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                  <span className="absolute w-full h-full bg-blue-500 opacity-0 group-hover:opacity-100 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
