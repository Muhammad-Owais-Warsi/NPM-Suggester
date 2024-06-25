

interface PropType {
    prop:{
        no : number,
        package : string,
        description : string
    }
}

export default function ResponseBlock({prop} : PropType) {
    return (
        <div className="flex justify-center align-middle shadow-md p-4 mb-4">
        <div className="flex flex-col w-full">
            <div className="flex items-center mb-2">
                <p className="text-lg font-bold">{prop.no}.</p>
                <span className="ml-2 text-gray-600 font-bold text-xl">{prop.package}</span>
            </div>
            <div className="flex flex-col">
                <p className="mb-2">{prop.description}</p>
            </div>
        </div>
    </div>
    )
}