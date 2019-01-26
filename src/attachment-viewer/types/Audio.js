import React from 'react'
import {css} from 'emotion'

const Attachment = ({url, typeId, onClick}) => (
    <div
        className={css`
            position: absolute;
            max-width: 100%;
            max-height: 100%;
            left: 50%;
            top: 50%;
            -webkit-transform: translate(-50%,-50%);
            -moz-transform: translate(-50%,-50%);
            -webkit-transform: translate(-50%,-50%);
            -ms-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        `}
    >
        <audio controls>
            <source src={url} type={typeId}/>
        </audio>
    </div>
)

export default Attachment