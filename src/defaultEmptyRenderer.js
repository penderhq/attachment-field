import React from 'react'
import {css} from 'emotion'

export default () => (
    <div
        className={css`
            content: '';
            border-radius: 9999px;
            background-color: rgba(0,0,0,0.05);
            width: 18px;
            height: 6px;
        `}
    />
)