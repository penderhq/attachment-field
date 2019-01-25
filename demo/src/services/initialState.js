import {fromJS} from 'immutable'

// export default fromJS({
//     attachmentsById: {
//         att1: {
//             id: 'att1',
//             uploading: true,
//             progress: 75
//         },
//         att2: {
//             id: 'att2',
//             uploading: true,
//             progress: 75
//         },
//         att3: {
//             id: 'att3',
//             uploading: true,
//             progress: 75
//         },
//         att4: {
//             id: 'att4',
//             uploading: true,
//             progress: 75
//         },
//         att5: {
//             id: 'att5',
//             uploading: true,
//             progress: 75
//         },
//         att6: {
//             id: 'att6',
//             uploading: true,
//             progress: 75
//         }
//     },
//     attachments: ['att1', 'att2', 'att3', 'att4', 'att5', 'att6']
// })

export default fromJS({
    attachmentsById: {},
    attachments: []
})