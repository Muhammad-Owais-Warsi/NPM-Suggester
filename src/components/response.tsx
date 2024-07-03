import React from "react";

interface PropType {
    prop: {
        no: number;
        package: string;
        description: string;
        link?: string; // Make link optional
    };
}


const ResponseBlock: React.FC<PropType> = ({ prop }) => {
    return (
        <div className="flex justify-center align-middle shadow-md p-4 mb-4">
            <div className="flex flex-col w-full">
                <div className="flex items-center mb-2">
                    <p className="text-lg font-bold">{prop.no}.</p>
                    {prop.link ? (
                        <a
                            href={prop.link}
                            className="underline ml-2 text-gray-600 font-bold text-xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {prop.package}
                        </a>
                    ) : (
                        <span className="ml-2 text-gray-600 font-bold text-xl">{prop.package}</span>
                    )}
                </div>
                <div className="flex flex-col">
                    <p className="mb-2">{prop.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ResponseBlock;
