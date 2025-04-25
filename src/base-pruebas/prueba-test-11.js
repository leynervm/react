export const getImagen = async () => {
    try {
        const apiKey = 'E3xouuazF2FDZ6Z8SCB1nr96v3fovDa7_'
        const response = await fetch('https://api.giphy.com/v1/gifs/random?api_key=' + apiKey)
        const { data } = await response.json()
        const { url } = data.images.original
        // console.log(url);
        return url
    } catch (error) {
        return 'Error al obtener url'
    }
}