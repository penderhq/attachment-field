import sample from "lodash/sample";
const images = [
    '1sim8ojvCbE',
    'i71W6sjKLAg',
    'bWuy_tqJPOA',
    'duiETcZN7O4',
    'kUA-P0oQPUc',
    'JR-bJYBBDbk',
    'YNdEOtbwCKw'
]

export default ({id, filename = 'image/jpeg example'}) => {

    const img = sample(images)

    return {
        id,
        typeId: 'image/jpeg',
        url: 'https://source.unsplash.com/' + img + '/1600x900',
        filename,
        thumbnails: {
            small: {
                url: 'https://source.unsplash.com/' + img + '/200x110'
            },
            medium: {
                url: 'https://source.unsplash.com/' + img + '/400x225'
            },
            large: {
                url: 'https://source.unsplash.com/' + img + '/800x450'
            }
        }
    }
}