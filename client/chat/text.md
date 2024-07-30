### Endpoint: `POST /takos/v2/client/chat/text`

#### Parameters

| Name      | Type   | Description | Required | Default |
| --------- | ------ | ----------- | -------- | ------- |
| roomId    | string | roomId      | true     |         |
| text      | string | text        | true     |         |
| csrftoken | string | csrftoken   | true     |         |

#### Response

```
{
    status: true
}
```

#### Description

テキストメッセージを送信します。
