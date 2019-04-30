import React from 'react'
import {css} from 'emotion'
import uniqueId from 'lodash/uniqueId'
import {connect} from 'react-redux'
import AttachmentField from '../../src'
import randomAttachment from './services/randomAttachment'
import upload from './services/fakeUpload'

class Example extends React.Component {

    render() {

        return (
            <AttachmentField
                id={'fld1'}
                contextId={this.props.contextId}
                roleId={this.props.roleId}
                attachments={this.props.attachments.toJS()}
                uploading={this.props.uploading}
                onAttach={this.handleAttach}
                onRemoveAttachment={this.handleRemoveAttachment}
                onRenameAttachment={this.handleRenameAttachment}
            />
        )
    }

    handleAttach = async ({files}) => {

        await Promise.all(
            files.map(file => {
                return this.handleUpload(file)
            })
        )
    }

    handleUpload = async (file) => {

        const id = uniqueId('att')

        this.props.dispatch({
            type: 'CREATE_ATTACHMENT',
            payload: {
                id,
                filename: file.name,
                progress: 0,
                uploading: true
            }
        })

        await upload({
            file,
            onProgress: (progress) => {
                this.props.dispatch({
                    type: 'SET_PROGRESS_FOR_ATTACHMENT',
                    payload: {
                        id,
                        progress
                    }
                })
            }
        })

        this.props.dispatch({
            type: 'UPDATE_ATTACHMENT',
            payload: {
                id,
                attachment: randomAttachment({id})
            }
        })

        this.props.dispatch({
            type: 'SET_UPLOADING_FOR_ATTACHMENT',
            payload: {
                id,
                uploading: false
            }
        })
    }

    handleRenameAttachment = ({attachmentId, filename}) => {

        this.props.dispatch({
            type: 'SET_FILENAME_FOR_ATTACHMENT',
            payload: {
                id: attachmentId,
                filename
            }
        })
    }

    handleRemoveAttachment = ({attachmentId}) => {

        this.props.dispatch({
            type: 'REMOVE_ATTACHMENT',
            payload: {
                id: attachmentId
            }
        })
    }
}

export default connect((state, props) => {
    return {
        uploading: !!state.get('attachments').find(id => {
            return state.getIn(['attachmentsById', id, 'uploading'])
        }),
        attachments: state.get('attachments').map(id => {
            return state.getIn(['attachmentsById', id])
        })
    }
})(Example)