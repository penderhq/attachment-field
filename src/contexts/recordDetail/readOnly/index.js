import React from 'react'
import {css} from 'emotion'
import Image from './../../../types/Image'
import Audio from './../../../types/Audio'
import Video from './../../../types/Video'
import Portal from './../../../Portal'
import AttachmentViewer from './../../../attachment-viewer'

const previews = {
    'image/jpeg': Image,
    'image/jpg': Image,
    'image/png': Image,
    'image/gif': Image,
    'audio/mpeg': Audio,
    'video/mp4': Video,
    'video/ogg': Video
}

class AttachmentItem extends React.Component {

    render() {

        const {typeId} = this.props
        const Preview = previews[typeId]

        return (
            <div
                className={css`
                    position: relative;
                    width: 200px;
                    height: 200px;
                    border-radius: 6px;
                    overflow: hidden;
                    box-shadow: 0 0 0 2px hsla(0,0%,0%,0.05);
                    cursor: pointer;
                    &:hover {
                        box-shadow: 0 0 0 2px hsla(0,0%,0%,0.2);
                    }
                `}
                onClick={this.props.onClick}
            >
                <Preview
                    {...this.props}
                />
            </div>
        )
    }
}

export default class AttachmentField extends React.Component {


    state = {
        viewerOpen: false,
        viewerIndex: 0
    }

    render() {

        const {attachments} = this.props

        return (
            <div
                className={css`
                    background-color: #fff;
                `}
            >
                <div
                    className={css`
                        margin-top: -6px;
                        margin-bottom: -6px;
                        margin-left: -6px;
                        margin-right: -6px;
                        display: flex;
                        flex-wrap: wrap;
                    `}
                >
                    {attachments && attachments.length ? attachments.map((attachment, index) => (
                        <div
                            key={attachment.id}
                            className={css`
                            padding: 6px;
                        `}
                        >
                            <AttachmentItem
                                attachment={attachment}
                                onClick={() => this.handleAttachmentViewerOpen({index})}
                            />
                        </div>
                    )) : null}
                    {this.state.viewerOpen ? (
                        <Portal>
                            <AttachmentViewer
                                index={this.state.viewerIndex}
                                attachments={attachments}
                                onClose={this.handleAttachmentViewerClose}
                                onPrev={this.handleAttachmentViewerPrev}
                                onNext={this.handleAttachmentViewerNext}
                                onChangeIndex={this.handleAttachmentViewerChangeIndex}
                            />
                        </Portal>
                    ) : null}
                </div>
            </div>
        )
    }

    handleAttachmentViewerOpen = ({index}) => {
        this.setState({
            viewerIndex: index,
            viewerOpen: true
        })
    }

    handleAttachmentViewerPrev = () => {

        const index = this.state.viewerIndex > 0 ? this.state.viewerIndex - 1 : this.props.attachments.length - 1

        this.setState({
            viewerIndex: index
        })
    }

    handleAttachmentViewerChangeIndex = ({index}) => {

        this.setState({
            viewerIndex: index
        })
    }

    handleAttachmentViewerNext = () => {

        const index = this.state.viewerIndex < this.props.attachments.length - 1 ? this.state.viewerIndex + 1 : 0

        this.setState({
            viewerIndex: index
        })
    }

    handleAttachmentViewerClose = () => {

        this.setState({
            viewerOpen: false
        })
    }
}
