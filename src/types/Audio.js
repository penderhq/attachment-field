import React from 'react'
import ReactDOM from 'react-dom'
import {css} from 'emotion'
import PlayButton from './../PlayButton'

export default class Audio extends React.Component {

    state = {
        playing: false
    }

    render() {

        const {typeId, url} = this.props

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
                    <source src={url} type={typeId}/>
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