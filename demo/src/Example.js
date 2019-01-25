import React from 'react'
import AttachmentField from '../../src'
import store from './services/store'

export default class Example extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <AttachmentField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                />
            </Provider>
        )
    }
}