import React, { useState } from "react";
import { ai } from "../config/ai";
import { motion } from "framer-motion";
import { toast } from "sonner"; // Placeholder for toast library
import { FiLoader } from "react-icons/fi"; // Example loading icon from react-icons
import ResponseBlock from "./response";

interface responseType {
    package: string;
    description: string;
}

const Main: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [response, setResponse] = useState<responseType[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const generateResponse = async () => {
        try {
            setLoading(true);
            setError(""); // Clear error state at the start of the function
            if (query) {
                const result = await ai.generate(query);

                // Check if result is empty or not a string
                if (!result || typeof result !== "string") {
                    throw new Error("Empty or unexpected response format.");
                }

                const parsedResult = JSON.parse(result) as responseType[];
                setResponse(parsedResult);
                setQuery("");
            }
        } catch (error) {
            console.error("Error generating response:", error);
            setError("An error occurred while generating response. Please try again.");
            toast.error("An error occurred. Please try again."); // Placeholder for toast error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
            >
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-blue-600">NPM Package Suggester</h1>
                    <p className="text-gray-600 mt-2">Get quick recommendations for NPM packages.</p>
                </div>

                <div className="mb-6">
                    <input
                        className="block w-full rounded-md border-gray-300 shadow-sm py-3 px-4 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <button
                        className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md shadow-md transition duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={generateResponse}
                        disabled={loading}
                    >
                        {loading ? <FiLoader className="animate-spin inline-block mr-2" /> : "Generate"}
                    </button>
                </div>

                {error && (
                    <div className="mb-6 text-red-500 text-center">
                        <p>{error}</p>
                    </div>
                )}

                {response && (
                    <div>
                        {response.map((item, idx) => (
                            <ResponseBlock key={idx} prop={{ no: idx + 1, package: item.package, description: item.description }} />
                        ))}
                    </div>
                )}

                <div className="mt-8 text-center">
                    {/* Placeholder for external link */}
                    <a href="https://www.producthunt.com/posts/npm-suggester?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-npm&#0045;suggester" target="_blank">
                        <img
                            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=466189&theme=light"
                            alt="NPM&#0032;Suggester - Get&#0032;quick&#0032;recommendations&#0032;for&#0032;NPM&#0032;packages&#0046; | Product Hunt"
                            className="w-56 mx-auto"
                        />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Main;
