import React from 'react'
import sample from 'lodash/sample'
import times from 'lodash/times'
import {css, injectGlobal} from 'emotion'
import {render} from 'react-dom'
import AttachmentField from '../../src'

injectGlobal`
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
    * {
        box-sizing: border-box;
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

const RecordGalleryCard = ({children}) => (
    <div
        className={css`
            width: 240px;
            height: 30px;
            background-color: #fff;
        `}
    >
        {children}
    </div>
)


const RecordListItem = ({children}) => (
    <div
        className={css`
            width: 240px;
            height: 24px;
            background-color: #fff;
        `}
    >
        {children}
    </div>
)

const generateAttachment = (i) => {

    const cat = sample(['wanderlust', 'water', 'canada', 'mountain', 'beach'])

    return {
        id: `${i}`,
        type: 'image/jpeg',
        filename: `${cat} ${i}`,
        thumbnails: {
            small: {
                url: `https://source.unsplash.com/featured/800x720?${cat}`
            },
            medium: {
                url: `https://source.unsplash.com/featured/800x720?${cat}`
            },
            large: {
                url: `https://source.unsplash.com/featured/800x720?${cat}`
            },
        },
        url: `https://source.unsplash.com/featured/800x720?${cat}`
    }
}

class Demo extends React.Component {
    render() {
        return <div>
            <h1>AttachmentField Demo</h1>
            <p>Used for (pre)viewing and organizing a list of attachments.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordDetail context
            </h3>
            <p>Used for uploading / removing / previewing / reordering attachments in a record detail.</p>
            <h4>
                Editor role
            </h4>
            <h5>No attachments</h5>
            <Viewport>
                <AttachmentField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                />
            </Viewport>
            <h5>30 images (image/jpeg)</h5>
            <ul>
                <li>
                    Should show 'show more' button after more than 4 rows
                </li>
            </ul>
            <Viewport>
                <AttachmentField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={times(30).map(i => generateAttachment(i))}
                />
            </Viewport>
            <h5>GIF (image/gif)</h5>
            <Viewport>
                <AttachmentField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={[{
                        id: '1',
                        type: 'image/gif',
                        filename: 'GIF',
                        thumbnails: {
                            small: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                            medium: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                            large: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                        },
                        url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                    }]}
                />
            </Viewport>
            <h5>
                Audio (audio/mpeg)
            </h5>
            <Viewport>
                <AttachmentField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={[{
                        id: '1',
                        type: 'audio/mpeg',
                        filename: 'Audio',
                        thumbnails: null,
                        url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
                    }]}
                />
            </Viewport>
            <h5>
                Video (video/mp4)
            </h5>
            <Viewport>
                <AttachmentField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={[{
                        id: '1',
                        type: 'video/mp4',
                        filename: 'Video',
                        thumbnails: null,
                        url: 'https://www.w3schools.com/html/mov_bbb.mp4'
                    }]}
                />
            </Viewport>
            <h5>
                Video (video/mp4)
            </h5>
            <Viewport>
                <AttachmentField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={[{
                        id: '1',
                        type: 'video/ogg',
                        filename: 'Video',
                        thumbnails: null,
                        url: 'https://www.w3schools.com/html/mov_bbb.ogg'
                    }]}
                />
            </Viewport>
            <h5>
                Mixed
            </h5>
            <Viewport>
                <AttachmentField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    attachments={[{
                        id: '1',
                        type: 'video/ogg',
                        filename: 'Video',
                        thumbnails: null,
                        url: 'https://www.w3schools.com/html/mov_bbb.ogg'
                    }, {
                        id: '2',
                        type: 'audio/mpeg',
                        filename: 'Audio',
                        thumbnails: null,
                        url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
                    }, {
                        id: '3',
                        type: 'image/jpeg',
                        filename: `Image`,
                        thumbnails: {
                            small: {
                                url: 'https://lorempixel.com/300/200/nature'
                            },
                            medium: {
                                url: 'https://lorempixel.com/300/200/nature'
                            },
                            large: {
                                url: 'https://lorempixel.com/300/200/nature'
                            },
                        },
                        url: 'https://lorempixel.com/300/200/nature'
                    }, {
                        id: '4',
                        type: 'image/gif',
                        filename: 'GIF',
                        thumbnails: {
                            small: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                            medium: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                            large: {
                                url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                            },
                        },
                        url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                    }]}
                />
            </Viewport>
            <h3>
                RecordGalleryCard context
            </h3>
            <p>Used for previewing small thumbnails of the attachments in a record gallery card.</p>
            <h5>6 pictures</h5>
            <Viewport>
                <RecordGalleryCard>
                    <AttachmentField
                        id={'fld1'}
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        attachments={times(6).map(i => generateAttachment(i))}
                    />
                </RecordGalleryCard>
            </Viewport>
            <h5>
                Mixed attachments
            </h5>
            <Viewport>
                <RecordGalleryCard>
                    <AttachmentField
                        id={'fld1'}
                        contextId={'recordGalleryCard'}
                        roleId={'readOnly'}
                        attachments={[{
                            id: '1',
                            type: 'video/ogg',
                            filename: 'Video',
                            thumbnails: null,
                            url: 'https://www.w3schools.com/html/mov_bbb.ogg'
                        }, {
                            id: '2',
                            type: 'audio/mpeg',
                            filename: 'Audio',
                            thumbnails: null,
                            url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
                        }, {
                            id: '3',
                            type: 'image/jpeg',
                            filename: `Image`,
                            thumbnails: {
                                small: {
                                    url: 'https://source.unsplash.com/featured/800x720?wanderlust'
                                },
                                medium: {
                                    url: 'https://source.unsplash.com/featured/800x720?wanderlust'
                                },
                                large: {
                                    url: 'https://source.unsplash.com/featured/800x720?wanderlust'
                                },
                            },
                            url: 'https://source.unsplash.com/featured/800x720?wanderlust'
                        }, {
                            id: '4',
                            type: 'image/gif',
                            filename: 'GIF',
                            thumbnails: {
                                small: {
                                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                                },
                                medium: {
                                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                                },
                                large: {
                                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                                },
                            },
                            url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                        }]}
                    />
                </RecordGalleryCard>
            </Viewport>
            <h3>
                RecordListItem context
            </h3>
            <p>Used for previewing small thumbnails of the attachments in a record list item.</p>
            <h5>6 pictures</h5>
            <Viewport>
                <RecordListItem>
                    <AttachmentField
                        id={'fld1'}
                        contextId={'recordListItem'}
                        roleId={'readOnly'}
                        attachments={times(6).map(i => generateAttachment(i))}
                    />
                </RecordListItem>
            </Viewport>
            <h5>
                Mixed attachments
            </h5>
            <Viewport>
                <RecordListItem>
                    <AttachmentField
                        id={'fld1'}
                        contextId={'recordListItem'}
                        roleId={'readOnly'}
                        attachments={[{
                            id: '1',
                            type: 'video/ogg',
                            filename: 'Video',
                            thumbnails: null,
                            url: 'https://www.w3schools.com/html/mov_bbb.ogg'
                        }, {
                            id: '2',
                            type: 'audio/mpeg',
                            filename: 'Audio',
                            thumbnails: null,
                            url: 'https://dl.airtable.com/AILblIU3RJfJTtudwUE8_%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A0%E0%B8%97'
                        }, {
                            id: '3',
                            type: 'image/jpeg',
                            filename: `Image`,
                            thumbnails: {
                                small: {
                                    url: 'https://source.unsplash.com/featured/800x720?wanderlust'
                                },
                                medium: {
                                    url: 'https://source.unsplash.com/featured/800x720?wanderlust'
                                },
                                large: {
                                    url: 'https://source.unsplash.com/featured/800x720?wanderlust'
                                },
                            },
                            url: 'https://source.unsplash.com/featured/800x720?wanderlust'
                        }, {
                            id: '4',
                            type: 'image/gif',
                            filename: 'GIF',
                            thumbnails: {
                                small: {
                                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                                },
                                medium: {
                                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                                },
                                large: {
                                    url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                                },
                            },
                            url: 'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
                        }]}
                    />
                </RecordListItem>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
