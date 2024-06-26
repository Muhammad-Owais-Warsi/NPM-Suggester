import { useState } from "react";
import { ai } from "../config/ai";
import ResponseBlock from "./response";
import { toast } from "sonner"; // Assuming you have a toast library like react-toastify

interface responseType {
    package: string;
    description: string;
}

export default function Main() {
    const [query, setQuery] = useState<string>("");
    const [response, setResponse] = useState<responseType[] | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string>("");

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
            toast.error("An error occurred. Please try again."); // Assuming toast.error shows an error message
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="flex justify-center items-start h-screen bg-white">
            <div className="text-center p-8 rounded-lg">
                <div className="mb-6">
                    <p className="text-7xl font-bold text-blue-600">NPM Package Suggester</p>
                </div>

                <div className="mb-6">
                    <input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 px-1.5"
                        placeholder="Suggest some packages to delete unused dependencies"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                        onClick={generateResponse}
                        disabled={loading}
                    >
                        {loading ? "Generating..." : "Generate"}
                    </button>
                </div>

                <div className="mt-8">
                {error ? <p className="text-7xl flex">{error}</p> : (
    response ? (
        response.map((item, idx) => (
            <ResponseBlock key={idx} prop={{ no: idx + 1, package: item.package, description: item.description }} />
        ))
    ) : null
)}
                </div>

                <div className="fixed bottom-4 right-4 shadow-md">
                <a href="https://www.producthunt.com/posts/npm-suggester?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-npm&#0045;suggester" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=466189&theme=light" alt="NPM&#0032;Suggester - Get&#0032;quick&#0032;recommendations&#0032;for&#0032;NPM&#0032;packages&#0046; | Product Hunt" style={{width: "250px", height:"54px"}} /></a>
                </div>
            </div>
        </div>
    );
}
