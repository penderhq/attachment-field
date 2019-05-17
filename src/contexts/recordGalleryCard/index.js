import React from 'react'
import get from 'lodash/get'
import {css} from 'emotion'

const Attachment = ({thumbnails}) => {

    const url = get(thumbnails, 'small.url')

    return (
        <div
            className={css`
            position: relative;
            box-sizing: border-box;
            width: 38px;
            height: 100%;
            overflow: hidden;
        `}
        >
            {url ? (
                <div
                    className={css`
                background-image: url(${url});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                position: absolute;
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;
            `}
                />
            ) : (
                <div
                    className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    right: 0px;
                    bottom: 0px;
                    background-color: #f7f7f7;
                `}
                />
            )}
        </div>
    )
}

const AttachmentField = ({attachments, emptyRenderer}) => (
    <div
        className={css`
            position: relative;
            font-size: 13px;
            padding: 0;
            margin: 0;
            vertical-align: top;
            color: #000;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: 100%;
        `}
    >
        <div
            className={css`
                display: flex;
                flex: 1 1 auto;
                min-width: 0;
                min-height: 0;
                height: 100%;
            `}
        >
            <div
                className={css`
                    display: flex;
                    flex: 1 1 auto;
                    min-width: 0;
                    min-height: 0;
                    align-content: flex-start;
                    overflow: hidden;
                    height: 100%;
                    align-items: center;
                `}
            >
                {attachments && attachments.length ? attachments.map(attachment => (
                    <div
                        key={attachment.id}
                        className={css`
                            border-radius: 3px;
                            border-style: solid;
                            border-width: 1px;
                            border-color: rgba(0,0,0,0.1);
                            flex: none;
                            overflow: hidden;
                            width: auto;
                            margin-right: 2px;
                            height: 100%;
                        `}
                    >
                        <Attachment
                            thumbnails={attachment.thumbnails}
                        />
                    </div>
                )) : emptyRenderer()}
            </div>
        </div>
    </div>
)

export default AttachmentField