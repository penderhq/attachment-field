import uniqueId from 'lodash/uniqueId'
import createStore from './createStore'
import randomJpg from './randomJpg'
import randomAudio from './randomAudio'
import randomGif from './randomGif'
import randomVideo from './randomVideo'

export default () => {

    const store = createStore()

    const createAttachment = (fn) => {

        store.dispatch({
            type: 'CREATE_ATTACHMENT',
            payload: fn({id: uniqueId('att1')})
        })
    }

    createAttachment(randomJpg)
    createAttachment(randomAudio)
    createAttachment(randomGif)
    createAttachment(randomVideo)

    return store
}