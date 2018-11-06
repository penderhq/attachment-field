import React from 'react'
import {render} from 'react-dom'

import Attachment from '../../src'

class Demo extends React.Component {
    render() {
        return <div>
            <h1>Attachment</h1>
            <Attachment
                mode={'preview'}
                attachments={[{
                    id: '1',
                    filename: 'Attachment 1',
                    url: 'https://placekitten.com/200/300'
                }, {
                    id: '2',
                    filename: 'Attachment 2',
                    url: 'https://placekitten.com/200/300'
                }, {
                    id: '2',
                    filename: 'Attachment 1',
                    url: 'https://placekitten.com/200/300'
                }]}
            />
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
