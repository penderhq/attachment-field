import React from 'react'
import ReactDOM from 'react-dom'
import Dropzone from 'react-dropzone'
import {css, cx, keyframes} from 'emotion'
import get from 'lodash/get'
import Button from '@cmds/button'
import icons from '../../icons'
import Image from './../../types/Image'
import Audio from './../../types/Audio'
import Video from './../../types/Video'
import FilePreview from './../../types/File'
import Portal from './../../Portal'
import AttachmentViewer from './../../attachment-viewer'

const spinScale = keyframes`
0% {
    transform: rotate(0) scale(1);
}

50% {
    transform: rotate(360deg) scale(.9);
}

100% {
    transform: rotate(720deg) scale(1);
}
`

const animateSpinScale = css`
    animation-name: ${spinScale};
    animation-duration: 1800ms;
    animation-timing-function: cubic-bezier(.785, .135, .15, .86);
`

const animateInfinite = css`
    animation-iteration-count: infinite;
`

const previews = {
    'application/pdf': Image,
    'image/jpg': Image,
    'image/png': Image,
    'image/gif': Image,
    'audio/mpeg': Audio,
    'video/mp4': Video,
    'video/ogg': Video
}

class AttachmentFilenameInput extends React.Component {

    componentDidMount() {
        ReactDOM.findDOMNode(this).select()

        window.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {

        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {

        if (e.code === 'Escape') {
            this.props.onCancel()
        }

        if (e.code === 'Enter') {
            this.props.onDone()
        }
    }

    render() {

        return (
            <input
                className={css`
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    -webkit-transition: border-color .15s ease-in-out;
                    appearance: none;
                    background-color: #fff;
                    border: 1px solid #d9d9d9;
                    border-radius: 3px;
                    color: #191919;
                    display: block;
                    font-size: 16px;
                    height: 25px;
                    line-height: 1.42857;
                    padding: 5px;
                    transition: border-color .15s ease-in-out;
                    width: 100%;
                    &:focus {
                        -webkit-transition-duration: 0s;
                        border-color: #07f;
                        outline: 0;
                        transition-duration: 0s;
                    }
                `}
                type="text"
                value={this.props.value}
                onChange={this.props.onChange}
                onBlur={this.props.onDone}
            />
        )
    }
}

class Attachment extends React.Component {

    state = {
        hover: false,
        text: ''
    }

    render() {

        const {typeId, enableRename, enableDownload, enableRemove} = this.props

        const Preview = previews[typeId] || FilePreview

        return (
            <div
                className={css`
                    position: relative;
                    height: 240px;
                    width: 200px;
                    border-radius: 6px;
                    overflow: hidden;
                    box-shadow: 0 1px 2px 0 rgba(0,0,0,.25);
                    cursor: pointer;
                    &:hover {
                        box-shadow: 0 0 0 2px #07f;
                    }
                `}
                onMouseEnter={() => this.setState({hover: true})}
                onMouseLeave={() => this.setState({hover: false})}
            >
                <div
                    className={css`
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 40px;
                    `}
                    onClick={this.props.onClick}
                >
                    {this.props.uploading ? null : (
                        <Preview {...this.props} />
                    )}
                </div>
                {this.props.uploading ? (
                    <div
                        className={css`
                            position: absolute;
                            width: 150px;
                            top: 50%;
                            left: 50%;
                            margin-top: -7px;
                            margin-left: -75px;
                            background-color: #000;
                            height: 14px;
                            border-radius: 12px;
                            padding: 4px;
                        `}
                    >
                        <div
                            className={css`
                                height: 6px;
                                background-color: #fff;
                                border-radius: 12px;
                                width: 0;
                                transition: 400ms ease width;
                            `}
                            style={{width: this.props.progress + '%'}}
                        />
                    </div>
                ) : (
                    <div
                        className={css`
                            position: absolute;
                            height: 40px;
                            bottom: 0;
                            left: 0;
                            right: 0;
                        `}
                    >
                        {this.state.renaming ? (
                            <div
                                className={css`
                                 position: absolute;
                                top: 0;
                                bottom: 0;
                                left: 0;
                                right: 0;
                                padding: 8px;
                                display: flex;
                                `}
                            >
                                <AttachmentFilenameInput
                                    value={this.state.text}
                                    onChange={this.handleTextChange}
                                    onDone={this.handleRenameDone}
                                    onCancel={this.handleRenameCancel}
                                />
                            </div>
                        ) : (
                            <div
                                className={css`
                                    position: absolute;
                                    top: 0;
                                    right: 0;
                                    bottom: 0;
                                    left: 0;
                                        display: flex;
                            align-items: center;
                                `}
                            >
                                <div
                                    className={css`
                                flex-grow: 1;
                                padding-left: 8px;
                                padding-right: 8px;
                                max-width: 100%;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            `}
                                >
                                    {this.props.filename}
                                </div>
                                {enableRename && this.state.hover ? (
                                    <div className={css`margin-right: 8px;`}>
                                        <div className={css`display: flex;`} onClick={this.handleRename}>
                                            {icons.pencil({height: 16})}
                                        </div>
                                    </div>
                                ) : null}
                                {enableDownload && this.state.hover ? (
                                    <div className={css`margin-right: 8px;`}>
                                        <a target={'_blank'} href={this.props.url}
                                           className={css`display:flex;color: currentColor;`}>
                                            {icons.download({height: 16})}
                                        </a>
                                    </div>
                                ) : null}
                                {enableRemove && this.state.hover ? (
                                    <div className={css`margin-right: 8px;`}>
                                        <div className={css`display: flex;`} onClick={this.handleRemove}>
                                            {icons.trash({height: 16})}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }

    handleRename = () => {

        this.setState({
            text: this.props.filename,
            renaming: true
        })
    }

    handleRenameDone = () => {

        this.props.onRename({
            id: this.props.id,
            filename: this.state.text
        })

        this.setState({
            text: '',
            renaming: false
        })
    }

    handleRenameCancel = () => {

        this.setState({
            text: '',
            renaming: false
        })
    }

    handleTextChange = e => {

        this.setState({
            text: e.target.value
        })
    }

    handleRemove = () => {
        this.props.onRemove({
            id: this.props.id
        })
    }
}

export default class AttachmentField extends React.Component {

    state = {
        viewerOpen: false,
        viewerIndex: 0
    }

    render() {
        return (
            <div>
                <div
                >
                    <Dropzone
                        ref={ref => {
                            this.dropzone = ref
                        }}
                        style={{position: 'relative'}}
                        onClick={evt => evt.preventDefault()}
                        onDragEnter={this.handleDragEnter}
                        onDragLeave={this.handleDragLeave}
                        onDrop={this.handleDrop}
                    >
                        {({getRootProps, getInputProps, isDragActive}) => {
                            return (
                                <div
                                    {...getRootProps()}
                                    className={css`
                                        &:focus {
                                            outline: none;
                                        }
                                    `}
                                >
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <div className={css`
                                            display: flex;
                                            flex: 1 1 auto;
                                            align-items: center;
                                            justify-content: center;
                                            border-radius: 6px;
                                            border: 2px dashed #000;
                                            font-weight: 700;
                                            height: 240px;
                                        `}>
                                            {icons.download({width: 16})}
                                            <div className={css`margin-left: 8px;`}>Drop to upload attachments</div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div
                                                className={css`
                                                    margin-bottom: 16px;
                                                    display: flex;
                                                    align-items: center;
                                                    justify-content: space-between;
                                                `}
                                            >
                                                {this.props.roleId === 'editor' ? (
                                                    <Button
                                                        icon={icons.paperclip}
                                                        onClick={this.handleSelect}
                                                    >
                                                        Attach files
                                                    </Button>
                                                ) : null}

                                                {this.props.uploading ? (
                                                    <div
                                                        className={css`
                                                        align-items: center;
                                                        flex: none;
                                                        display: flex;
                                                    `}
                                                    >
                                                        <div className={css`margin-right: 8px;font-size:12px;`}>
                                                            Uploading
                                                        </div>
                                                        {icons.spinner({
                                                            width: 16.2,
                                                            className: cx(animateSpinScale, animateInfinite)
                                                        })}
                                                    </div>
                                                ) : null}
                                            </div>
                                            {this.props.attachments.length ? (
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
                                                    {this.props.attachments.map((attachment, index) => {

                                                        return (
                                                            <div
                                                                key={attachment.id}
                                                                className={css`
                                                            padding: 6px;
                                                        `}
                                                            >
                                                                <Attachment
                                                                    id={attachment.id}
                                                                    url={attachment.url}
                                                                    uploading={attachment.uploading}
                                                                    progress={attachment.progress}
                                                                    filename={attachment.filename}
                                                                    typeId={attachment.typeId}
                                                                    previewUrl={get(attachment, 'thumbnails.large.url')}
                                                                    enableRename={this.props.roleId === 'editor'}
                                                                    enableDownload={true}
                                                                    enableRemove={this.props.roleId === 'editor'}
                                                                    onClick={() => this.handleAttachmentViewerOpen({index})}
                                                                    onRemove={this.handleRemoveAttachment}
                                                                    onRename={this.handleRenameAttachment}
                                                                />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            ) : (
                                                <div
                                                    className={css`
                                                        padding-top: 16px;
                                                        padding-bottom: 16px;
                                                        display: flex;
                                                        align-items: center;
                                                    `}
                                                >
                                                    {icons.download({width: 16})}
                                                    <div className={css`font-weight: 700;margin-left: 8px;`}>Drop files
                                                        here
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )
                        }}
                    </Dropzone>
                </div>
                {this.state.viewerOpen ? (
                    <Portal>
                        <AttachmentViewer
                            index={this.state.viewerIndex}
                            attachments={this.props.attachments}
                            onClose={this.handleAttachmentViewerClose}
                            onPrev={this.handleAttachmentViewerPrev}
                            onNext={this.handleAttachmentViewerNext}
                            onChangeIndex={this.handleAttachmentViewerChangeIndex}
                        />
                    </Portal>
                ) : null}
            </div>
        )
    }

    handleRenameAttachment = ({id, filename}) => {

        if (this.props.onRenameAttachment) {

            this.props.onRenameAttachment({
                id: this.props.id,
                attachmentId: id,
                filename
            })
        }
    }

    handleRemoveAttachment = ({id}) => {

        if (this.props.onRemoveAttachment) {

            this.props.onRemoveAttachment({
                id: this.props.id,
                attachmentId: id
            })
        }
    }

    handleSelect = (e) => {
        this.dropzone.open()
    }

    handleDrop = async (files) => {
        this.props.onAttach({files})
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