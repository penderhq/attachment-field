import React from 'react'
import {css} from 'emotion'

export default class File extends React.Component {

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
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    `}
                >
                    {this.props.typeId}
                </div>
            </div>
        )
    }
}