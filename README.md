# ![AttachmentField](https://user-images.githubusercontent.com/44801418/48063098-93a3f380-e1f6-11e8-95ef-5a9d39ef96ae.png) AttachmentField

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

## Prop Types

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| attachments | Array | ✓ | Array of [Attachment](#attachment) objects. Example: See down below. |

### Attachment

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

[npm-badge]: https://img.shields.io/npm/v/@cmds/attachment-field.svg
[npm]: https://www.npmjs.com/package/@cmds/attachment-field