import React, { useState, useEffect } from "react";
import { ai } from "../config/ai";
import { motion } from "framer-motion";
import { toast } from "sonner"; // Placeholder for toast library
import { FiLoader } from "react-icons/fi"; // Example loading icon from react-icons
import ResponseBlock from "./response";
import HistorySection from "./HistorySection";

interface responseType {
    package: string;
    description: string;
    link: string;
}

const Main: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [response, setResponse] = useState<responseType[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const [showHistory, setShowHistory] = useState<boolean>(false);

    useEffect(() => {
        const savedHistory = localStorage.getItem("searchHistory");
        if (savedHistory) {
            setSearchHistory(JSON.parse(savedHistory));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }, [searchHistory]);

    const generateResponse = async () => {
        try {
            setLoading(true);
            setError("");
            if (query) {
                const result = await ai.generate(query);

                if (!result || typeof result !== "string") {
                    throw new Error("Empty or unexpected response format.");
                }

                const parsedResult = JSON.parse(result) as responseType[];
                setResponse(parsedResult);

                const updatedHistory = [query, ...searchHistory].slice(0, 5);
                setSearchHistory(updatedHistory);

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

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            generateResponse();
        }
    };

    const toggleHistory = () => {
        setShowHistory(!showHistory);
    };

    const handleHistoryItemClick = (item: string) => {
        setQuery(item);
        setShowHistory(false); // Optionally hide history after clicking an item
    };

    return (
        <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
                {/* NPM Package Generator */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-xl bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg"
                >
                    <div className="mb-6 text-center">
                        <p className="text-3xl font-bold text-blue-600 dark:text-black-300">NPM Package Suggester</p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-6"
                    >
                        <input
                            className="block w-full rounded-md border-0 py-2.5 text-gray-900 dark:text-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 px-2"
                            placeholder="Enter query"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="mb-6 text-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 flex justify-center items-center"
                            onClick={generateResponse}
                            disabled={loading}
                        >
                            {loading ? (
                                <FiLoader className="animate-spin inline-block mr-2 text-white" />
                            ) : (
                                "Generate"
                            )}
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="mt-8 text-left"
                    >
                        {error ? (
                            <motion.p
                                initial={{ x: -10 }}
                                animate={{ x: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="text-red-500"
                            >
                                {error}
                            </motion.p>
                        ) : response ? (
                            response.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                >
                                    <ResponseBlock prop={{ no: idx + 1, package: item.package, description: item.description, link: item.link }} />
                                </motion.div>
                            ))
                        ) : null}
                    </motion.div>
                </motion.div>

                {/* History Section */}
                <HistorySection searchHistory={searchHistory} showHistory={showHistory} toggleHistory={toggleHistory} onHistoryItemClick={handleHistoryItemClick} />
            </div>

            <motion.div
                className="absolute bottom-4 right-4"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                transition={{ yoyo: Infinity, duration: 1 }}
            >
                <a href="https://www.producthunt.com/posts/npm-suggester?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-npm&#0045;suggester" target="_blank">
                    <img
                        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=466189&theme=light"
                        alt="NPM&#0032;Suggester - Get&#0032;quick&#0032;recommendations&#0032;for&#0032;NPM&#0032;packages&#0046; | Product Hunt"
                        style={{ width: "250px", height: "54px" }}
                    />
                </a>
            </motion.div>
        </div>
    );
};

export default Main;
