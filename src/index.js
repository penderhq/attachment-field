import React from 'react'
import PropTypes from 'prop-types'
import RecordDetailEditor from './contexts/recordDetail'
import RecordGalleryCard from './contexts/recordGalleryCard'
import defaultEmptyRenderer from './defaultEmptyRenderer'

const THUMBNAIL_SHAPE = PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    url: PropTypes.string
})

export default class AttachmentField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        enableAttachButton: PropTypes.bool,
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        max: PropTypes.number,
        uploading: PropTypes.bool,
        accept: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ),
        attachments: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                filename: PropTypes.string,
                size: PropTypes.number,
                typeId: PropTypes.string.isRequired,
                thumbnails: PropTypes.shape({
                    small: THUMBNAIL_SHAPE,
                    medium: THUMBNAIL_SHAPE,
                    large: THUMBNAIL_SHAPE,
                }),
                uploading: PropTypes.bool,
                progress: PropTypes.number
            })
        ),
        onAttach: PropTypes.func,
        onRemoveAttachment: PropTypes.func,
        onRenameAttachment: PropTypes.func,
        onClear: PropTypes.func,
        onSort: PropTypes.func,
        dropFilesHereLabel: PropTypes.string,
        supportedFileTypesLabel: PropTypes.string,
        attachFilesLabel: PropTypes.string,
        previewCannotBeDisplayedLabel: PropTypes.string
    }

    static defaultProps = {
        max: +Infinity,
        enableRename: true,
        enableDownload: true,
        dropFilesHereLabel: 'Or drop files here',
        supportedFileTypesLabel: 'Supported file types',
        attachFilesLabel: 'Attach files',
        previewCannotBeDisplayedLabel: 'Preview cannot be displayed',
        accept: [
            'application/pdf',
            'image/jpeg',
            'image/png',
            'image/gif',
            'audio/mp3',
            'audio/mpeg',
            'video/mp4',
            'video/ogg'
        ]
    }

    render() {

        const { roleId, contextId } = this.props

        const props = this.props

        if (contextId === 'recordDetail') {

            return (
                <RecordDetailEditor
                    {...props}
                    emptyRenderer={props.emptyRenderer || defaultEmptyRenderer}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    {...props}
                    emptyRenderer={props.emptyRenderer || defaultEmptyRenderer}
                />
            )
        }

        if (contextId === 'recordListItem' && roleId === 'readOnly') {

            return (
                <RecordGalleryCard
                    {...props}
                    emptyRenderer={props.emptyRenderer || defaultEmptyRenderer}
                />
            )
        }

        return (
            <div>
                Not supported
            </div>
        )
    }
}