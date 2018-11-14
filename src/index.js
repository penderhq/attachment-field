import React from 'react'
import PropTypes from 'prop-types'
import RecordDetail from './contexts/recordDetail'
import RecordGalleryCard from './contexts/recordGalleryCard'

const THUMBNAIL_SHAPE = PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    url: PropTypes.string.isRequired
})

export default class AttachmentField extends React.Component {

    static propTypes = {
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
                })
            })
        )
    }

    render() {

        const {roleId, contextId} = this.props

        if (contextId === 'recordDetail') {

            return (
                <RecordDetail
                    roleId={roleId}
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGalleryCard') {

            return (
                <RecordGalleryCard
                    roleId={roleId}
                    {...this.props}
                />
            )
        }
    }
}