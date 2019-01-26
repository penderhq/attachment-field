export default ({id}) => {

    return {
        id,
        typeId: 'video/mp4',
        // url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        url: 'https://storage.googleapis.com/coverr-main/mp4/Mock-up.mp4',
        filename: 'video/mp4 example',
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
