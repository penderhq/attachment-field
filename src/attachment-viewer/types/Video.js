import React from 'react'
import {css} from 'emotion'

const Attachment = ({url, onClick}) => (
    <video
        controls
        src={url}
        className={css`
            position: absolute;
            max-width: 100%;
            max-height: 100%;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            user-select: none;
        `}
    />
)

export default Attachment