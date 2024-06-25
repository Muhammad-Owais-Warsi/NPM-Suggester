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

    const generateResponse = async () => {
        try {
            if (query) {
                setLoading(true);
                const result = await ai.generate(query);
                if (typeof result !== "string") {
                    throw new Error("Unexpected response format. Expected a JSON string.");
                }
                const parsedResult = JSON.parse(result) as responseType[];
                setResponse(parsedResult);
                setQuery("");
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            toast.error("Error"); // Assuming toast.error shows an error message
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
                    {response ? (
                        response.map((item, idx) => (
                            <ResponseBlock key={idx} prop={{ no: idx + 1, package: item.package, description: item.description }} />
                        ))
                    ) : null}
                </div>

                <div className="fixed bottom-4 right-4">
                    <a
                        href="https://github.com/Muhammad-Owais-Warsi/NPM-Suggester"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition duration-300 flex items-center"
                    >
                        <svg
                            className="w-6 h-6 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.865 8.166 6.839 9.493.5.092.682-.218.682-.48 0-.237-.008-.866-.013-1.701-2.782.604-3.37-1.34-3.37-1.34-.454-1.15-1.108-1.457-1.108-1.457-.906-.618.069-.606.069-.606 1.002.07 1.532 1.028 1.532 1.028.893 1.53 2.345 1.087 2.916.83.092-.646.35-1.087.636-1.337-2.226-.252-4.566-1.113-4.566-4.946 0-1.092.39-1.985 1.032-2.684-.103-.252-.448-1.27.097-2.647 0 0 .84-.268 2.75 1.025a9.58 9.58 0 0 1 2.51-.34c.853.003 1.713.114 2.511.34 1.908-1.293 2.747-1.025 2.747-1.025.548 1.377.202 2.395.1 2.647.643.699 1.03 1.592 1.03 2.684 0 3.842-2.344 4.691-4.576 4.936.36.308.681.922.681 1.857 0 1.34-.012 2.421-.012 2.75 0 .266.18.578.688.479A12.012 12.012 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                            />
                        </svg>
                        Star on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
