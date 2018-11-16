import React from 'react'
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

export default PlayButton