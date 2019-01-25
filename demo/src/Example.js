import React from 'react'
import sample from 'lodash/sample'
import {css} from 'emotion'
import random from 'lodash/random'
import uniqueId from 'lodash/uniqueId'
import {Provider, connect} from 'react-redux'
import AttachmentField from '../../src'
import createStore from './services/createStore'

const images = [
    '1sim8ojvCbE',
    'i71W6sjKLAg',
    'bWuy_tqJPOA',
    'duiETcZN7O4',
    'kUA-P0oQPUc',
    'JR-bJYBBDbk',
    'YNdEOtbwCKw'
]

const randomVideo = ({id}) => {

    return {
        id,
        typeId: 'video/mp4',
        url: 'https://www.w3schools.com/html/mov_bbb.mp4',
        filename: 'video/mp4 example',
        thumbnails: {
            small: {
                url: null
            },
            medium: {
                url: null
            },
            large: {
                url: null
            }
        }
    }
}

const randomGif = ({id}) => {

    const url = sample([
        'https://user-images.githubusercontent.com/44947294/48402064-40cdbd00-e75d-11e8-9633-e52fd0217636.gif',
        'https://media.giphy.com/media/1wqqlaQ7IX3TXibXZE/giphy.gif'
    ])

    return {
        id,
        typeId: 'image/gif',
        url,
        filename: 'image/gif example',
        thumbnails: {
            small: {
                url
            },
            medium: {
                url
            },
            large: {
                url
            }
        }
    }
}

const randomImage = ({id}) => {

    const img = sample(images)

    return {
        id,
        typeId: 'image/jpeg',
        url: 'https://source.unsplash.com/' + img + '/1600x900',
        filename: 'image/jpeg example',
        thumbnails: {
            small: {
                url: 'https://source.unsplash.com/' + img + '/200x110'
            },
            medium: {
                url: 'https://source.unsplash.com/' + img + '/400x225'
            },
            large: {
                url: 'https://source.unsplash.com/' + img + '/800x450'
            }
        }
    }
}

const randomAttachment = ({id}) => sample([randomImage, randomVideo, randomGif])({id})

const upload = ({file, onProgress}) => new Promise((resolve) => {

    const totalTime = random(1000, 3000)
    const steps = 10
    const intervalTime = totalTime / (steps + 1)
    const counterIncrease = 100 / steps

    let progress = 0

    let interval = setInterval(() => {
        progress += counterIncrease
        onProgress(progress)
    }, intervalTime)

    setTimeout(() => {
        clearInterval(interval)
        resolve()
    }, totalTime)
})

class Demo extends React.Component {

    componentDidMount() {

        if (this.props.demo === '2') {

            this.createAttachment(randomGif)
            this.createAttachment(randomImage)
            this.createAttachment(randomVideo)
        }
    }

    createAttachment = (fn) => {

        this.props.dispatch({
            type: 'CREATE_ATTACHMENT',
            payload: fn({id: uniqueId('att1')})
        })
    }

    render() {

        return (
            <div
                className={css`
                    max-width: 800px;
                    margin-bottom: 30px;
                `}
            >
                <AttachmentField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    attachments={this.props.attachments.toJS()}
                    uploading={this.props.uploading}
                    onAttach={this.handleAttach}
                    onRemoveAttachment={this.handleRemoveAttachment}
                    onRenameAttachment={this.handleRenameAttachment}
                />
            </div>
        )
    }

    handleAttach = async ({files}) => {

        await Promise.all(
            files.map(file => {
                return this.handleUpload(file)
            })
        )
    }

    handleUpload = async (file) => {

        const id = uniqueId('att')

        this.props.dispatch({
            type: 'CREATE_ATTACHMENT',
            payload: {
                id,
                filename: file.name,
                progress: 0,
                uploading: true
            }
        })

        await upload({
            file,
            onProgress: (progress) => {
                this.props.dispatch({
                    type: 'SET_PROGRESS_FOR_ATTACHMENT',
                    payload: {
                        id,
                        progress
                    }
                })
            }
        })

        this.props.dispatch({
            type: 'UPDATE_ATTACHMENT',
            payload: {
                id,
                attachment: randomAttachment({id})
            }
        })

        this.props.dispatch({
            type: 'SET_UPLOADING_FOR_ATTACHMENT',
            payload: {
                id,
                uploading: false
            }
        })
    }

    handleRenameAttachment = ({id, filename}) => {

        this.props.dispatch({
            type: 'SET_FILENAME_FOR_ATTACHMENT',
            payload: {
                id,
                filename
            }
        })
    }

    handleRemoveAttachment = ({id}) => {

        this.props.dispatch({
            type: 'REMOVE_ATTACHMENT',
            payload: {
                id
            }
        })
    }
}

Demo = connect((state, props) => {
    return {
        uploading: !!state.get('attachments').find(id => {
            return state.getIn(['attachmentsById', id, 'uploading'])
        }),
        attachments: state.get('attachments').map(id => {
            return state.getIn(['attachmentsById', id])
        })
    }
})(Demo)

export default class Example extends React.Component {

    render() {

        return (
            <Provider store={createStore()}>
                <Demo {...this.props} />
            </Provider>
        )
    }
}