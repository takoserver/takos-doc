# room退室API

### Endpoint: `POST /takos/v2/client/room/delete`

#### Parameters

※Form Data

| Name      | Type   | Description | Required | Default |
| --------- | ------ | ----------- | -------- | ------- |
| roomId    | string | roomId      | true     |         |
| csrftoken | string | csrftoken   | true     |         |

※[]はurl埋め込み

#### Response

```
{
    status: true
}
```

#### Description
