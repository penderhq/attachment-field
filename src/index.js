import React from 'react'
import PropTypes from 'prop-types'
import RecordDetailEditor from './contexts/recordDetail'
import RecordGalleryCard from './contexts/recordGalleryCard'

const THUMBNAIL_SHAPE = PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    url: PropTypes.string.isRequired
})

export default class AttachmentField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        uploading: PropTypes.bool,
        attachments: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                filename: PropTypes.string.isRequired,
                size: PropTypes.number,
                type: PropTypes.oneOf([
                    'image/jpeg',
                    'image/jpg',
                    'image/png',
                    'image/gif',
                    'audio/mpeg',
                    'video/mp4',
                    'video/ogg'
                ]).isRequired,
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
        onSort: PropTypes.func
    }

    render() {

        const {roleId, contextId} = this.props

        if (contextId === 'recordDetail') {

            return (
                <RecordDetailEditor
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordListItem' && roleId === 'readOnly') {

            return (
                <RecordGalleryCard
                    {...this.props}
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