import React, { useState } from "react";
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
    const [showCopyMessage, setShowCopyMessage] = useState<boolean>(false);

    const handleCopy = () => {
        const textToCopy = prop.link;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setShowCopyMessage(true);
                setTimeout(() => {
                    setShowCopyMessage(false);
                }, 3000);
            })
            .catch(() => {
                setShowCopyMessage(true);
                setTimeout(() => {
                    setShowCopyMessage(false);
                }, 3000);
            });
    };

    return (
        <div className="relative flex flex-col justify-center align-middle p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
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
            {showCopyMessage && (
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md transition-opacity duration-300 ease-in-out">
                    Copied to clipboard!
                </div>
            )}
        </div>
    );
};

export default ResponseBlock;
