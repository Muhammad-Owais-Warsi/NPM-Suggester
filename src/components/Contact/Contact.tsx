import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Contact: React.FC = () => {
  React.useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would handle the form submission.
    // I'm leaving the 'mailto' empty
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center text-black dark:bg-gray-900 dark:text-gray-300">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left md:w-1/2 px-8 py-16 md:py-0"
      >
        <div className="flex items-center mb-6">
          <h1 className="text-4xl font-bold text-blue-500 dark:text-cyan-400">
            Contact Us
          </h1>
        </div>
        <p className="text-xl mb-8 max-w-prose">
          We would love to hear from you. Please reach out to us using the form below.
        </p>
        {/* React Bootstrap Form */}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label><br/>
            <Form.Control type="text" placeholder="Enter name" required className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label><br></br>
            <Form.Control type="email" placeholder="Enter email" required className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label><br></br>
            <Form.Control as="textarea" rows={3} placeholder="Your message" required className="rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500" />
          </Form.Group>

          <Button variant="primary" type="submit" className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
            Submit
          </Button>
        </Form>
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-8">
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gray-400 transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com/company/example" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gray-400 transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-blue hover:text-gray-400 transition-colors duration-300">
            <FaGithub size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
