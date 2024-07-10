import React from "react";
import { FaCopy } from "react-icons/fa";

interface PropType {
    prop: {
        no: number;
        package: string;
        description: string;
        link: string; 
    };
}

const ResponseBlock: React.FC<PropType> = ({ prop }) => {
    const handleCopy = () => {
        const textToCopy = `Package: ${prop.package}\nDescription: ${prop.description}\nLink: ${prop.link}`;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("Copied to clipboard!");
            })
            .catch((error) => {
                alert("Failed to copy: " + error);
            });
    };

    return (
        <div className="flex flex-col justify-center align-middle p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="flex flex-col w-full">
                <div className="flex items-center mb-2">
                    <p className="text-lg font-bold text-blue-600">{prop.no}.</p>
                    <a
                        href={prop.link}
                        className="underline ml-2 text-blue-600 font-bold text-xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {prop.package}
                    </a>
                    <button
                        onClick={handleCopy}
                        className="ml-4 p-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        title="Copy"
                    >
                        <FaCopy className="text-gray-700 dark:text-gray-300" />
                    </button>
                </div>
                <div className="flex flex-col">
                    <p className="mb-2 text-gray-700 dark:text-gray-300">{prop.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ResponseBlock;
