import React from 'react'
import {css, cx} from 'emotion'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import icons from './../icons'
import Image from './types/Image'
import NotSupported from './types/NotSupported'

const ArrowLeft = ({onClick}) => (
    <div
        onClick={onClick}
        className={css`
            position: absolute;
            top: 48px;
            bottom: 48px;
            width: 96px;
            cursor: pointer;
            left: 0;
            color: #fff;
                display: flex;
    align-items: center;
    justify-content: center;
        `}
    >
        {icons.arrowLeft({
            width: 44
        })}
    </div>
)

const ArrowRight = ({onClick}) => (
    <div
        onClick={onClick}
        className={css`
            position: absolute;
            top: 48px;
            bottom: 48px;
            width: 96px;
            cursor: pointer;
            right: 0;
            color: #fff;
                display: flex;
    align-items: center;
    justify-content: center;
        `}
    >
        {icons.arrowRight({
            width: 44
        })}
    </div>
)

const CloseButton = ({onClick}) => (
    <div
        className={css`
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            padding: 16px;
            color: #fff;
        `}
        onClick={onClick}
    >
        {icons.close({width: 12})}
    </div>
)

const Filename = ({filename}) => (
    <div
        className={css`
                            color: white;
                            font-size: 14px;
                            position: absolute;
                            top: 12px;
                            left: 50%;
                            max-width: calc(100% - 96px);
                            -webkit-transform: translateX(-50%);
                            -moz-transform: translateX(-50%);
                            transform: translateX(-50%);
                            text-align: center;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            cursor: pointer;
                            user-select: none;
                        `}
    >
        {filename}
    </div>
)

const Container = ({children}) => (
    <div
        className={css`
            position: absolute;
            top: 48px;
            bottom: 48px;
            left: 96px;
            right: 96px;
        `}
    >
        {children}
    </div>
)

const Viewer = ({onClick, children}) => (
    <div
        className={css`
                    position: fixed;
                    background: hsla(0,0%,0%,0.9);
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    z-index: 10004;
                    display: none;
                    opacity: 0;
                    opacity: 1;
                    display: block;
                    transition-property: none;
                `}
        onClick={onClick}
    >
        <div
            className={css`
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: 0;
                        right: 0;
                    `}
        >
            {children}
        </div>
    </div>
)

const Thumbnails = ({children}) => (
    <div
        className={css`
            position: absolute;
            bottom: 0;
            height: 48px;
            width: 100%;
            text-align: center;
        `}
    >
        <div
            className={css`
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            position: absolute;
            margin-top: 12px;
            max-width: 100%;
            left: 96px;
            right: 96px;
            overflow: hidden;
            white-space: nowrap;
        `}
        >
            {children}
        </div>
    </div>
)

const Thumbnail = ({onClick, active, url}) => (
    <div
        onClick={onClick}
        className={cx(
            css`
            width: 24px;
            height: 24px;
            margin-right: 6px;
            border: 2px solid hsla(0,0%,100%,0.4);
            opacity: .6;
            display: inline-block;
            cursor: pointer;
            background-position: center center;
            background-size: cover;
            border-radius: 3px;
            background-image: url(${url});
        `,
            active ? css`
                opacity: 1;
                border: 2px solid hsl(0,0%,100%);
            ` : null
        )}
    >

    </div>
)

const THUMBNAIL_SHAPE = PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    url: PropTypes.string
})

export default class AttachmentViewer extends React.Component {

    static propTypes = {
        attachments: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                filename: PropTypes.string.isRequired,
                type: PropTypes.oneOf([
                    'image/jpeg',
                    'image/jpg',
                    'image/png',
                    'image/gif',
                    'audio/mpeg',
                    'video/mp4',
                    'video/ogg'
                ]),
                thumbnails: PropTypes.shape({
                    small: THUMBNAIL_SHAPE,
                    medium: THUMBNAIL_SHAPE,
                    large: THUMBNAIL_SHAPE,
                })
            })
        )
    }

    componentWillMount() {

        document.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {

        document.removeEventListener('keydown', this.handleKeydown)
    }

    render() {

        const {index, attachments} = this.props

        const attachment = attachments[index]

        const types = {
            'image/jpeg': Image,
            'image/jpg': Image,
            'image/png': Image,
            'image/gif': Image,
            'audio/mpeg': NotSupported,
            'video/mp4': NotSupported,
            'video/ogg': NotSupported
        }

        const Attachment = types[attachment.typeId] || NotSupported

        return (
            <Viewer
                onClick={this.props.onClose}
            >
                <Filename
                    filename={attachment.filename}
                />
                <CloseButton
                    onClick={(e) => {

                        e.stopPropagation()

                        this.props.onClose()
                    }}
                />
                <ArrowLeft
                    onClick={(e) => {

                        e.stopPropagation()

                        this.props.onPrev()
                    }}
                />
                <ArrowRight
                    onClick={(e) => {

                        e.stopPropagation()

                        this.props.onNext()
                    }}
                />
                <Container>
                    <Attachment
                        attachment={attachment}
                        onClick={e => {
                            e.stopPropagation()
                        }}
                    />
                </Container>
                <Thumbnails>
                    {attachments.map((attachment, index) => (
                        <Thumbnail
                            key={index}
                            active={index === this.props.index}
                            url={get(attachment, 'thumbnails.small.url')}
                            onClick={(e) => {

                                e.stopPropagation()

                                this.props.onChangeIndex({index})
                            }}
                        />
                    ))}
                </Thumbnails>
            </Viewer>

        )
    }

    handleKeydown = (e) => {

        if (e.code === 'ArrowRight') {
            this.props.onNext()
        }

        if (e.code === 'ArrowLeft') {
            this.props.onPrev()
        }

        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }
}