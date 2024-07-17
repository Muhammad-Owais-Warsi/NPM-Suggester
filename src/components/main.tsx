import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { ai } from "../config/ai";
import { motion } from "framer-motion";
import { toast } from "sonner"; // Placeholder for toast library
import { FiLoader } from "react-icons/fi"; // Example loading icon from react-icons
import ResponseBlock from "./response";
import HistorySection from "./HistorySection";
import AutoSuggestion from "./AutoSuggestion"; // Import the new component

// Add the PackageType interface here
interface PackageType {
  package: string;
  description: string;
  link: string;
  weeklyDownloads?: number; // Add the weeklyDownloads field
  popularityRank?: number; // Add popularityRank field
}

const Main: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<PackageType[] | undefined>(
    undefined
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [popularPackages, setPopularPackages] = useState<PackageType[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
  }, [searchHistory]);

  useEffect(() => {
    fetchPopularPackages();
  }, []);

  const fetchPopularPackages = async () => {
    try {
      const response = await axios.get(
        "https://api.npms.io/v2/search?q=popularity:desc"
      );
      const packages = response.data.results.map((pkg: any) => ({
        package: pkg.package.name,
        description: pkg.package.description,
        link: pkg.package.links.npm,
      }));
      setPopularPackages(packages.slice(0, 10)); // Display top 10 popular packages
      console.log(popularPackages);
    } catch (error) {
      console.error("Error fetching popular packages:", error);
    }
  };

  const generateResponse = async () => {
    try {
      setLoading(true);
      setError("");
      if (query) {
        const result = await ai.generate(query);

        if (!result || typeof result !== "string") {
          throw new Error("Empty or unexpected response format.");
        }

        const parsedResult = JSON.parse(result) as PackageType[];

        // Fetch weekly download data for each package
        const packagesWithDownloads = await Promise.all(
          parsedResult.map(async (pkg) => {
            const downloadData = await axios.get(
              `https://api.npmjs.org/downloads/point/last-week/${pkg.package}`
            );
            return {
              ...pkg,
              weeklyDownloads: downloadData.data.downloads,
            };
          })
        );

        // Sort packages by weekly downloads to determine popularity rank
        packagesWithDownloads.sort((a, b) =>
          (a.weeklyDownloads || 0) > (b.weeklyDownloads || 0) ? -1 : 1
        );

        // Assign popularity rank based on sorted order
        const rankedPackages = packagesWithDownloads.map((pkg, index) => ({
          ...pkg,
          popularityRank: index + 1,
        }));

        setResponse(rankedPackages);

        const updatedHistory = [query, ...searchHistory].slice(0, 5);
        setSearchHistory(updatedHistory);

        setQuery("");
      }
    } catch (error) {
      console.error("Error generating response:", error);
      setError(
        "An error occurred while generating response. Please try again."
      );
      toast.error("An error occurred. Please try again."); // Placeholder for toast error message
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
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

  const handleDeleteHistoryItem = (index: number) => {
    const updatedHistory = [...searchHistory];
    updatedHistory.splice(index, 1);
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  const handleInputChange = async (value: string) => {
    setQuery(value);
    if (value.trim() !== "") {
      try {
        const response = await axios.get(
          `https://api.npms.io/v2/search/suggestions?q=${value}`
        );
        const suggestions =
          response.data?.map((pkg: any) => pkg.package.name) ?? [];
        setSuggestions(suggestions);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]); // Clear suggestions when input is empty
    }
  };

  const handleSuggestionClick = (value: string) => {
    setQuery(value);
    setSuggestions([]);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 px-4 py-8 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl items-center justify-center">
        {/* NPM Package Generator */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-xl dark:bg-gray-800 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6 text-center">
            <p className="text-3xl font-bold dark:text-cyan-400 text-blue-600">
              NPM Package Suggester
            </p>
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
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            {suggestions.length > 0 && (
              <AutoSuggestion
                suggestions={suggestions}
                onSuggestionClick={handleSuggestionClick}
              />
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mb-6 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full px-4 py-2 bg-blue-600 text-sm sm:text-md md:text-xl text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300 flex justify-center items-center"
              onClick={generateResponse}
              disabled={loading}
            >
              {loading ? (
                <FiLoader className="animate-spin inline-block mr-2   text-white" />
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
                className="text-red-500 text-sm text-center font-semibold"
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
                  <ResponseBlock
                    prop={{
                      no: idx + 1,
                      package: item.package,
                      description: item.description,
                      link: item.link,
                      weeklyDownloads: item.weeklyDownloads, // Pass weeklyDownloads
                      popularityRank: item.popularityRank, // Pass popularityRank
                    }}
                  />
                </motion.div>
              ))
            ) : null}
          </motion.div>
        </motion.div>

        {/* History Section */}
        <HistorySection
          searchHistory={searchHistory}
          showHistory={showHistory}
          toggleHistory={toggleHistory}
          onHistoryItemClick={handleHistoryItemClick}
          handleDeleteHistoryItem={handleDeleteHistoryItem} // Pass delete handler
        />
      </div>
    </div>
  );
};

export default Main;
