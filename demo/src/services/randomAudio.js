export default ({id}) => {

    return {
        id,
        typeId: 'audio/mpeg',
        url: 'https://www.w3schools.com/HTML/horse.mp3',
        filename: 'audio/mpeg example',
        thumbnails: {
            small: {
                url: null
            },
            medium: {
                url: null
            },
            large: {
                url: null
            }
        }
    }
}