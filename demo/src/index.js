import React from 'react'
import {Provider} from 'react-redux'
import {css, cx, injectGlobal} from 'emotion'
import {Canvas, Paragraph, Box, Heading} from '@cmds/demo-utils'
import {render} from 'react-dom'
import Example from './Example'
import createStore1 from './services/createStore1'
import createStore2 from './services/createStore2'

const store1 = createStore1()
const store2 = createStore2()

injectGlobal`
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
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

const Note = ({hint, children}) => (
    <div
        className={cx(
            css`
            font-size: 14px;
            line-height: 1.8;
            color: rgb(0, 0, 0);
            padding: 16px 24px;
            border-radius: 4px;
            background: rgb(255, 255, 255);
            border-width: 1px;
            border-style: solid;
            border-color: rgb(221, 221, 221);
            border-image: initial;
        `, hint ? css`border-color: #07f;` : ''
        )}
    >
        {children}
    </div>
)

class Demo extends React.Component {

    render() {

        return (
            <Canvas>
                <div
                    className={css`
                        margin-bottom: 50px;
                    `}
                >
                    <Note hint>
                        The attachments that you upload will be replaced with fake files for the purpose of this demo.
                    </Note>
                </div>
                <Heading>
                    Record Detail Context
                </Heading>
                <Paragraph>
                    Attachment Field — No attachments and editor role
                </Paragraph>
                <Box>
                    <Provider store={store1}>
                        <Example
                            contextId={'recordDetail'}
                            roleId={'editor'}
                        />
                    </Provider>
                </Box>
                <Paragraph>
                    Attachment Field — No attachments and read only role
                </Paragraph>
                <Box>
                    <Provider store={store1}>
                        <Example
                            contextId={'recordDetail'}
                            roleId={'readOnly'}
                        />
                    </Provider>
                </Box>
                <Paragraph>
                    Attachment Field — With different file types and editor role
                </Paragraph>
                <Box>
                    <Provider store={store2}>
                        <Example
                            contextId={'recordDetail'}
                            roleId={'editor'}
                        />
                    </Provider>
                </Box>
                <Paragraph>
                    Attachment Field — With read only role
                </Paragraph>
                <Box>
                    <Provider store={store2}>
                        <Example
                            contextId={'recordDetail'}
                            roleId={'readOnly'}
                        />
                    </Provider>
                </Box>
                <Heading>
                    Record Gallery Card Context
                </Heading>
                <Paragraph>
                    Attachment Field — No attachments and read only role
                </Paragraph>
                <Box>
                    <Provider store={store1}>
                        <Example
                            contextId={'recordGalleryCard'}
                            roleId={'readOnly'}
                        />
                    </Provider>
                </Box>
                <Paragraph>
                    Attachment Field — With read only role
                </Paragraph>
                <Box>
                    <Provider store={store2}>
                        <RecordGalleryCard>
                            <Example
                                contextId={'recordGalleryCard'}
                                roleId={'readOnly'}
                            />
                        </RecordGalleryCard>
                    </Provider>
                </Box>
                <Heading>
                    Record List Item Context
                </Heading>
                <Paragraph>
                    Attachment Field — No attachments and read only role
                </Paragraph>
                <Box>
                    <Provider store={store1}>
                        <Example
                            contextId={'recordListItem'}
                            roleId={'readOnly'}
                        />
                    </Provider>
                </Box>
                <Paragraph>
                    Attachment Field — With read only role
                </Paragraph>
                <Box>
                    <Provider store={store2}>
                        <RecordListItem>
                            <Example
                                contextId={'recordListItem'}
                                roleId={'readOnly'}
                            />
                        </RecordListItem>
                    </Provider>
                </Box>
            </Canvas>
        )
    }
}

render(<Demo/>, document.querySelector('#demo'))
