import React from 'react'
import {css} from 'emotion'

export default () => (
    <div
        className={css`
            display: flex;
            align-items: center;
            height: 22px;
        `}
    >
        <div
            className={css`
                content: '';
                border-radius: 9999px;
                background-color: rgba(0,0,0,0.05);
                width: 18px;
                height: 6px;
            `}
        />
    </div>
)