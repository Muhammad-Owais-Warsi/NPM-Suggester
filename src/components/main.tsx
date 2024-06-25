import { useState } from "react"
import { ai } from "../config/ai"
import ResponseBlock from "./response"
import { toast } from "sonner"

interface responseType {
    package: string,
    description: string
}

export default function Main() {



    const [query, setQuery] = useState<string>("");
    const [response, setResponse] = useState<responseType[] | undefined>(undefined);
    const [loading,setLoading] = useState<boolean>(false);

    const generateResponse = async () => {
        
        try {
            if(query) {
                setLoading(true)
                const result = await ai.generate(query);
                if (typeof result !== "string") {
                    throw new Error("Unexpected response format. Expected a JSON string.");
                }
                const response = JSON.parse(result) as responseType[];
        
                setResponse(response);
                setQuery("");
                setLoading(false)

            }
        } catch (error) {
            console.log(error)
            toast.error("Error");
            return ;
        }

    }


    return (
        <div className="flex justify-center items-start h-screen bg-white ">
            <div className="text-center  p-8 rounded-lg ">
                <div className="mb-6">
                    <p className="text-7xl font-bold text-blue-600">NPM Package Suggester</p>
                </div>
                <div className="mb-6">
                    <input
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 px-1.5"
                        placeholder="Suggest some packages to delete unused dependencies"
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

                <div>
                    {
                        response ? response.map((item, idx) => (
                            <ResponseBlock key={idx} prop={{ no: idx + 1, package: item.package, description: item.description }} />
                        )) : null
                    }
                </div>


            </div>
        </div>
    )
}
