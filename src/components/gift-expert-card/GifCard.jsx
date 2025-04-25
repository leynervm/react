const GifCard = ({ url, title }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="rounded-2xl w-full overflow-hidden">
                <img src={url} alt={title} className="block w-full max-w-full h-auto object-scale-down" />
            </div>
            <h2 className="text-white text-justify !leading-normal">{title}</h2>
        </div>
    )
}

export default GifCard