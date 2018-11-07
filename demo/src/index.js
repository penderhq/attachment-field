import React from 'react'
import times from 'lodash/times'
import {css, injectGlobal} from 'emotion'
import {render} from 'react-dom'
import Attachment from '../../src'

injectGlobal`
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

class Demo extends React.Component {
    render() {
        return <div>
            <h1>Attachment</h1>
            <h2>No attachments</h2>
            <Viewport>
                <Attachment
                    mode={'preview'}
                />
            </Viewport>
            <h2>30 images (image/jpeg)</h2>
            <ul>
                <li>
                    Should show 'show more' button after more than 4 rows
                </li>
            </ul>
            <Viewport>
                <Attachment
                    mode={'preview'}
                    attachments={times(30).map(i => ({
                        id: `${i}`,
                        mimeType: 'image/jpeg',
                        filename: `Image ${i + 1}`,
                        thumbnails: {
                            small: 'https://placekitten.com/200/300',
                            medium: 'https://placekitten.com/200/300',
                            large: 'https://placekitten.com/200/300',
                        },
                        url: 'https://placekitten.com/200/300'
                    }))}
                />
            </Viewport>
            <h2>GIF (image/gif)</h2>
            <Viewport>
                <Attachment
                    mode={'preview'}
                    attachments={[{
                        id: '1',
                        mimeType: 'image/gif',
                        filename: 'GIF',
                        thumbnails: {
                            small: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif',
                            medium: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif',
                            large: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif',
                        },
                        url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                    }]}
                />
            </Viewport>
            <h2>
                Audio (audio/mpeg)
            </h2>
            <Viewport>
                <Attachment
                    mode={'preview'}
                    attachments={[{
                        id: '1',
                        mimeType: 'audio/mpeg',
                        filename: 'Audio',
                        thumbnails: null,
                        url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
                    }]}
                />
            </Viewport>
            <h2>
                Video (video/mp4)
            </h2>
            <Viewport>
                <Attachment
                    mode={'preview'}
                    attachments={[{
                        id: '1',
                        mimeType: 'video/mp4',
                        filename: 'Video',
                        thumbnails: null,
                        url: 'https://www.w3schools.com/html/mov_bbb.mp4'
                    }]}
                />
            </Viewport>
            <h2>
                Video (video/mp4)
            </h2>
            <Viewport>
                <Attachment
                    mode={'preview'}
                    attachments={[{
                        id: '1',
                        mimeType: 'video/ogg',
                        filename: 'Video',
                        thumbnails: null,
                        url: 'https://www.w3schools.com/html/mov_bbb.ogg'
                    }]}
                />
            </Viewport>
            <h2>
                Mixed
            </h2>
            <Viewport>
                <Attachment
                    mode={'preview'}
                    attachments={[{
                        id: '1',
                        mimeType: 'video/ogg',
                        filename: 'Video',
                        thumbnails: null,
                        url: 'https://www.w3schools.com/html/mov_bbb.ogg'
                    }, {
                        id: '2',
                        mimeType: 'audio/mpeg',
                        filename: 'Audio',
                        thumbnails: null,
                        url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
                    }, {
                        id: '3',
                        mimeType: 'image/jpeg',
                        filename: `Image`,
                        thumbnails: {
                            small: 'https://placekitten.com/200/300',
                            medium: 'https://placekitten.com/200/300',
                            large: 'https://placekitten.com/200/300',
                        },
                        url: 'https://placekitten.com/200/300'
                    }, {
                        id: '4',
                        mimeType: 'image/gif',
                        filename: 'GIF',
                        thumbnails: {
                            small: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif',
                            medium: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif',
                            large: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif',
                        },
                        url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                    }]}
                />
            </Viewport>
            <h2>
                Loading attachment previews
            </h2>
            <h2>
                Preview overlay
            </h2>
            <h2>
                Uploading
            </h2>
            <h2>
                Drag and drop
            </h2>
            <h2>
                Read only
            </h2>
            <h2>
                Inline
            </h2>
            <h2>
                Expanded
            </h2>
            <h2>
                Error not found
            </h2>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
