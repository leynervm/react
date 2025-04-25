import { useFetchGifs } from "../../hooks/useFetchGifs"

import GifCard from "./GifCard"
import Loading from "../Loading"

const GridCard = ({ category }) => {
    // const [images, setImages] = useState([])
    const { isLoading, images } = useFetchGifs(category)
    // console.log({isLoading, images});
    // const getImages = async () => {
    //     const newImages = await getGifs(category)
    //     setImages(newImages)
    // }

    // useEffect(() => {
    //     getImages()
    // }, [])

    return (
        <div className="w-full">
            <h1 className="block bg-white rounded-lg font-semibold text-[#00d8ff] !text-2xl">
                {category}</h1>

            {
                isLoading && (<Loading />)
            }
            
            <div className="place-self-center gap-3 grid grid-cols-6 pt-3 w-full">
                {
                    images.map(image => (
                        <GifCard key={image.id} {...image} />
                    ))

                }
            </div>
        </div>
    )
}

export default GridCard