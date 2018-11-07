import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'
import icons from './icons'

const PlayButton = ({onClick, playing}) => (
    <div
        className={css`
            width: 50px;
            height: 50px;
            background-color: rgba(0, 0, 0, 0.9);
            color: #fff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                background-color: rgba(0, 0, 0, 0.8);
            }
            &:active {
                background-color: rgba(0, 0, 0, 1);
            }
        `}
        onClick={onClick}
    >
        {playing ? icons.pause({width: 18}) : icons.play({width: 18})}
    </div>
)

class Image extends React.Component {

    render() {

        return (
            <div>
                <div
                    className={css`
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-image: url(${this.props.attachment.thumbnails.medium});
                    `}
                />
            </div>
        )
    }
}

class Audio extends React.Component {

    state = {
        playing: false
    }

    render() {

        const {mimeType, url} = this.props.attachment

        return (
            <div
                className={css`
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                `}
            >
                <audio
                    ref={'audio'}
                    onPause={this.handlePause}
                    onPlay={this.handlePlay}
                >
                    <source src={url} type={mimeType}/>
                    Your browser does not support the audio element.
                </audio>
                <PlayButton
                    playing={this.state.playing}
                    onClick={this.togglePlay}
                />
            </div>
        )
    }

    getPlayer = () => {
        return ReactDOM.findDOMNode(this.refs.audio)
    }

    togglePlay = () => {

        const {playing} = this.state

        const player = this.getPlayer()

        if (!playing) {
            player.play()
        } else {
            player.pause()
        }
    }

    handlePlay = () => {

        this.setState({
            playing: true
        })
    }

    handlePause = () => {

        this.setState({
            playing: false
        })
    }
}

class Video extends React.Component {

    state = {
        playing: false,
        hidePlayButton: false
    }

    render() {

        const {url, mimeType} = this.props.attachment

        return (
            <div
                className={css`
                    position: relative;
                    width: 200px;
                    height: 200px;
                `}
            >
                <video
                    ref={'video'}
                    onPlay={this.handlePlay}
                    onPause={this.handlePause}
                    className={css`
                        min-width: 100%;
                        min-height: 100%;
                        width: auto;
                        height: auto;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                    `}
                >
                    <source src={url} type={mimeType}/>
                    Your browser does not support the video tag.
                </video>
                <div
                    className={css`
                        position: absolute;
                        left: 0;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    `}
                    onMouseEnter={() => this.setState({hidePlayButton: false})}
                    onMouseLeave={() => this.setState({hidePlayButton: true})}
                >
                    {!this.state.playing || !this.state.hidePlayButton ? (
                        <PlayButton
                            playing={this.state.playing}
                            onClick={this.togglePlay}
                        />
                    ) : null}
                </div>
            </div>
        )
    }

    getPlayer = () => {
        return ReactDOM.findDOMNode(this.refs.video)
    }

    togglePlay = () => {

        const {playing} = this.state

        const player = this.getPlayer()

        if (!playing) {
            player.play()
        } else {
            player.pause()
        }
    }

    handlePlay = () => {

        this.setState({
            playing: true
        })
    }

    handlePause = () => {

        this.setState({
            playing: false
        })
    }
}

const previews = {
    'image/jpeg': Image,
    'image/gif': Image,
    'audio/mpeg': Audio,
    'video/mp4': Video,
    'video/ogg': Video
}

class AttachmentItem extends React.Component {

    render() {

        const {mimeType} = this.props.attachment
        const Preview = previews[mimeType]

        console.log('mimeType', mimeType)

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
            >
                <Preview
                    {...this.props}
                />
            </div>
        )
    }
}

export default class AttachmentField extends React.Component {
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
                    {attachments && attachments.length ? attachments.map(attachment => (
                        <div
                            key={attachment.id}
                            className={css`
                            padding: 6px;
                        `}
                        >
                            <AttachmentItem
                                attachment={attachment}
                            />
                        </div>
                    )) : null}
                </div>
            </div>
        )
    }
}
