import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'
import PlayButton from './../PlayButton'

export default class Video extends React.Component {

    state = {
        playing: false,
        hidePlayButton: true
    }

    render() {

        const {url, typeId} = this.props

        return (
            <div
                className={css`
                    position: relative;
                    width: 200px;
                    height: 200px;
                    overflow: hidden;
                `}
            >
                <video
                    ref={'video'}
                    onPlay={this.handlePlay}
                    onPause={this.handlePause}
                    autoPlay={true}
                    muted={true}
                    className={css`
                        min-width: 100%;
                        min-height: 100%;
                        width: auto;
                        height: auto;
                        max-width: 400px;
                        max-height: 400px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                    `}
                >
                    <source src={url} type={typeId}/>
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

    togglePlay = (e) => {

        e.stopPropagation()

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