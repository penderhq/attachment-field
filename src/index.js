import React from 'react'
import RecordDetail from './contexts/recordDetail'
import RecordGalleryCard from './contexts/recordGalleryCard'

export default class AttachmentField extends React.Component {

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