# 音声メッセージを送信する

### Endpoint: `GET /takos/v2/client/chat/search`

#### Parameters

| Name   | Type   | Description | Required | Default |
| ------ | ------ | ----------- | -------- | ------- |
| roomId | string | roomId      | true     |         |
| query  | string | query       | true     |         |

#### Response

```
{
    status: true
}
```

#### Description

メッセージを検索します。
