import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaTools,
  FaLightbulb,
  FaChartLine,
  FaRocket,
  FaCodeBranch,
  FaGithub,
  FaQuoteLeft,
} from "react-icons/fa";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";

const Home: React.FC = () => {
  const [run, setRun] = React.useState(true);

  const steps: Step[] = [
    {
      target: ".hero-section",
      content: "Welcome to the NPM Package Suggester!",
    },
    {
      target: ".why-choose-us",
      content: "Here you can see why you should choose us.",
    },
    {
      target: ".features",
      content: "Check out our amazing features.",
    },
    {
      target: ".benefits",
      content: "Learn about the benefits of using our tool.",
    },
    {
      target: ".testimonials",
      content: "See what our users have to say.",
    },
    {
      target: ".cta",
      content: "Join our community by checking out our contributors.",
    },
    {
      target: ".feedback-form",
      content: "We value your feedback, please let us know your thoughts!",
    },
  ];

  const testimonials = [
    {
      name: "Mehak Matoo",
      feedback: "Can generate package names from a single word! Really useful.",
      role: "Contributor",
      social: "https://github.com/Mehak-Mattoo"

    }
  ]

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];
    if (finishedStatuses.includes(status)) {
      setRun(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between text-black bg-white dark:bg-gray-900 px-4 py-8 pt-5">
      <Joyride
        steps={steps}
        run={run}
        callback={handleJoyrideCallback}
        continuous
        showProgress
        showSkipButton
        styles={{
          options: {
            arrowColor: "#e3e3e3",
            backgroundColor: "#ffffff",
            overlayColor: "rgba(0, 0, 0, 0.5)",
            primaryColor: "#1a202c",
            textColor: "#333333",
            width: 400,
            zIndex: 1000,
          },
        }}
      />
      {/* Hero Section */}
      <section className="hero-section bg-white dark:bg-gray-900">
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
      <section className="why-choose-us bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl dark:text-cyan-400">
              Why Choose Us
            </h2>
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
                <h2 className="text-lg font-bold dark: text-blue-500">
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
                <h2 className="text-lg font-bold dark: text-blue-500">
                  Tailored Recommendations
                </h2>
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
                <h2 className="text-lg font-bold dark: text-blue-500">
                  Boost Productivity
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Enhance your workflow and boost productivity with our
                  intelligent package suggestions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl  dark:text-cyan-400">
              Our Features
            </h2>
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
                <h2 className="text-lg font-bold dark: text-blue-500">
                  Fast & Reliable
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Experience fast and reliable recommendations for your
                  projects.
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
                <h2 className="text-lg font-bold dark: text-blue-500">
                  Up-to-Date Suggestions
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Get the latest and most relevant NPM package suggestions for
                  your needs.
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
                <h2 className="text-lg font-bold dark: text-blue-500">
                  Open Source
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Our tool is open source and community-driven, ensuring
                  continuous improvement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl  dark:text-cyan-400">
              What Our Users Say
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3  justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col items-start gap-4"
            >

              {
                testimonials.map((testimonial, index) => (
                  <div key={index} >
                    <FaQuoteLeft className="text-4xl text-gray-500 dark:text-gray-400" />
                    <p className="text-lg font-light text-gray-600 dark:text-gray-400 my-4">
                      {testimonial.feedback}
                    </p>
                    <div className="mt-2">
                      <a href={testimonial.social}>  <h3 className="text-lg font-semibold underline  dark:text-white">
                        {testimonial.name}
                      </h3></a>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                ))
              }


            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl  dark:text-cyan-400">
              Join Our Community
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Become a part of our growing community and contribute to the
              project. Check out our contributors!
            </p>
            <Link
              to="/contributors"
              className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-blue-500 group px-5 py-2 rounded-2xl inline-block mt-4"
            >
              <span className="relative z-10 text-blue-500 group-hover:text-white text-xl duration-500">
                View Contributors
              </span>
              <span className="absolute w-full h-full bg-blue-500 opacity-0 group-hover:opacity-100 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
              <span className="absolute w-full h-full bg-blue-500 opacity-0 group-hover:opacity-100 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="feedback-form bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl  dark:text-cyan-400">
              We Value Your Feedback
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Your feedback helps us improve our tool. Please let us know your
              thoughts!
            </p>
            <form className="mt-8 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Your Feedback
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
