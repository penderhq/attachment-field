import React from 'react'
import {css} from 'emotion'

export default class Image extends React.Component {

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
                        background-image: url(${this.props.attachment.thumbnails.medium.url});
                    `}
                />
            </div>
        )
    }
}