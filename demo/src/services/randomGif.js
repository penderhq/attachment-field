import sample from "lodash/sample";

export default ({id}) => {

    const url = sample([
        'https://user-images.githubusercontent.com/44947294/48402064-40cdbd00-e75d-11e8-9633-e52fd0217636.gif',
        'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
    ])

    return {
        id,
        typeId: 'image/gif',
        url,
        filename: 'image/gif example',
        thumbnails: {
            small: {
                url
            },
            medium: {
                url
            },
            large: {
                url
            }
        }
    }
}