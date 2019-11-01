import React from 'react'
import {css} from 'emotion'

export default class NotSupported extends React.Component {

    render() {

        return (
            <div
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
                    color: #fff;
                `}
            >
                {this.props.previewCannotBeDisplayedLabel}
            </div>
        )
    }
}