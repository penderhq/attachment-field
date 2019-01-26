# ![AttachmentField](https://user-images.githubusercontent.com/44801418/48063098-93a3f380-e1f6-11e8-95ef-5a9d39ef96ae.png) AttachmentField

[![Greenkeeper badge](https://badges.greenkeeper.io/entercosmos/attachment-field.svg)](https://greenkeeper.io/)

[![npm package][npm-badge]][npm]

Used for (pre)viewing and organizing a list of attachments.

## Features

- Display an array of attachments
- Preview overlay
- Support for following types
    - Images (png, jpeg)
    - Animated images (gif)
    - Video (mp4)
    - Audio (ogg, mp3)
- Upload progress indicator

## Getting started

````
npm install @cmds/attachment-field --save
````

### Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| id | String | ✓ | Unique id for the instance of this field |
| contextId | Context | ✓ | The appearance will change depending on context in which the field is displayed. Valid options include: `recordDetail` or `recordGridRow` or `recordGalleryCard` or `recordListItem` |
| roleId | Role | ✓ | The behaviour changes based on the role. Valid options include `editor` or `readOnly` |
| attachments | Array | ✓ | Array of `Attachment` objects. [Learn more](#attachment) |
| uploads | Array | ✓ | Array of `Upload` objects. [Learn more](#upload) |
| onCreate | Function |  | Callback invoked whenever a file gets dropped or selected in the field: `({id: string, file: File}): void` |
| onRemove | Function |  | Callback invoked whenever an attachment get's removed: `({id: string, file: File}): void` |
| onRename | Function |  | Callback invoked whenever an attachment's filename changes: `({id: string, attachmentId: string, filename: string}): void` |
| onClear | Function |  | Callback invoked whenever all attachments get removed at once: `({id: string}): void` |
| onSort | Function |  | Callback invoked whenever one of the attachments get's sorted: `({id: string, attachmentId: string, targetIndex: number}): void` |

#### Attachment

```
{
    filename: "Nature.jpg",
    id: "att8NBBKRa8slSrnB",
    size: 1165273,
    type: "image/jpeg",
    url: "https://cosmos3.s3.amazonaws.com/att8NBBKRa8slSrnB",
    thumbnails: {
        large: {
            height: 384,
            url: "https://cosmos3.s3.amazonaws.com/att8NBBKRa8slSrnB_large",
            width: 512
        },
        medium: {
            height: 240,
            url: "https://cosmos3.s3.amazonaws.com/att8NBBKRa8slSrnB_medium",
            width: 320
        },
        small: {
            height: 27,
            url: "https://cosmos3.s3.amazonaws.com/att8NBBKRa8slSrnB_small",
            width: 36
        }
    }
}
```

#### Upload

```
{
    id: 'upl1',
    filename: 'Nature.jpg',
    url: 'https://cosmos3.s3.amazonaws.com/att8NBBKRa8slSrnB',
    progress: 0.8 // 80%
}

```


### More information

This component is designed and developed as part of [Cosmos Design System][cmds]. 

[cmds]: https://github.com/entercosmos/cosmos
[npm-badge]: https://img.shields.io/npm/v/@cmds/attachment-field.svg
[npm]: https://www.npmjs.com/package/@cmds/attachment-field