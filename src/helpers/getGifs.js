const getGifs = async (category) => {
    let apikey = 'P9DDnPG3ecSK90R9NiHZlIYpNGrpR4Gn';
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=20`;
    const res = await fetch(url)
    const { data } = await res.json()

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    // console.log(gifs);
    return gifs;
}
export default getGifs