import {fromJS} from 'immutable'

export default (state, action) => {

    switch (action.type) {

        case 'CREATE_ATTACHMENT': {
            const attachment = action.payload
            const {id} = attachment
            return state
                .setIn(['attachmentsById', id], fromJS(attachment))
                .update('attachments', attachments => {
                    return attachments.push(id)
                })
        }

        case 'SET_PROGRESS_FOR_ATTACHMENT': {
            const {id, progress} = action.payload
            return state
                .setIn(['attachmentsById', id, 'progress'], progress)
        }

        case 'SET_UPLOADING_FOR_ATTACHMENT': {
            const {id, uploading} = action.payload
            return state
                .setIn(['attachmentsById', id, 'uploading'], uploading)
        }

        case 'SET_FILENAME_FOR_ATTACHMENT': {
            const {id, filename} = action.payload
            return state
                .setIn(['attachmentsById', id, 'filename'], filename)
        }

        case 'UPDATE_ATTACHMENT': {
            const {id, attachment} = action.payload
            return state
                .updateIn(['attachmentsById', id], a => {
                    return a.merge(attachment)
                })
        }

        case 'REMOVE_ATTACHMENT': {
            const {id} = action.payload
            return state
                .update('attachments', attachments => {
                    return attachments.filter(attachmentId => {
                        return attachmentId !== id
                    })
                })
                .removeIn(['attachmentsById', id])
        }

        default: {
            return state
        }
    }
}