import React from 'react'
import {Provider} from 'react-redux'
import {css, injectGlobal} from 'emotion'
import {render} from 'react-dom'
import Example from './Example'
import createStore1 from './services/createStore1'
import createStore2 from './services/createStore2'

const store1 = createStore1()
const store2 = createStore2()

injectGlobal`
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
    * {
        box-sizing: border-box;
    }
`

const RecordGalleryCard = ({children}) => (
    <div
        className={css`
            width: 240px;
            height: 30px;
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
        `}
    >
        {children}
    </div>
)

const Context = ({contextId, roleId}) => (
    <div
        className={css`
            margin-top: 32px;
            margin-bottom: 24px;
        `}
    >
        <strong>Context:</strong> {contextId}, <strong>Role:</strong> {roleId}
    </div>
)

class Demo extends React.Component {

    render() {

        return (
            <div>
                <h1>AttachmentField Demo</h1>
                <div
                    className={css`
                        background-color: #f4e395;
                        color: rgba(0, 0, 0, 0.8);
                        padding: 8px 16px;
                        border-radius: 6px;
                        margin-bottom: 16px;
                    `}
                >
                    The attachments that you upload will be replaced with fake files for the purpose of this demo.
                </div>
                <h2>
                    Empty
                </h2>
                <Context contextId={'recordDetail'} roleId={'editor'} />
                <Provider store={store1}>
                    <Example
                        contextId={'recordDetail'}
                        roleId={'editor'}
                    />
                </Provider>
                <h2>
                    Different file types
                </h2>
                <Context contextId={'recordDetail'} roleId={'editor'} />
                <Provider store={store2}>
                    <Example
                        contextId={'recordDetail'}
                        roleId={'editor'}
                    />
                </Provider>
                <Context contextId={'recordDetail'} roleId={'readOnly'} />
                <Provider store={store2}>
                    <Example
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                    />
                </Provider>
                <Context contextId={'recordGalleryCard'} roleId={'readOnly'} />
                <Provider store={store2}>
                    <RecordGalleryCard>
                        <Example
                            contextId={'recordGalleryCard'}
                            roleId={'readOnly'}
                        />
                    </RecordGalleryCard>
                </Provider>
                <Context contextId={'recordListItem'} roleId={'readOnly'} />
                <Provider store={store2}>
                    <RecordListItem>
                        <Example
                            contextId={'recordListItem'}
                            roleId={'readOnly'}
                        />
                    </RecordListItem>
                </Provider>
            </div>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
