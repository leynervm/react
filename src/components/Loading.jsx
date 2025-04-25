const Loading = () => {
    return (
        <div className="top-0 right-0 bottom-0 left-0 z-50 fixed flex flex-col justify-center items-center bg-gray-700 opacity-75 w-full h-screen overflow-hidden">
            <div className="mb-4 border-4 border-gray-200 border-t-4 rounded-full w-12 h-12 ease-linear loader"></div>
            <h2 className="font-semibold text-white text-xl text-center">
                Loading...</h2>
            <p className="w-1/3 text-white text-center">
            por favor espere</p>
        </div>
    )
}

export default Loading