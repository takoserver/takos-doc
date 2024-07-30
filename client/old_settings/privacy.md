### Endpoint

```
POST /takos/v2/client/settings/privacy
```

### Parameters

| name      | type   | description                 | required |
| --------- | ------ | --------------------------- | -------- |
| settings  | object | privacyに関するオブジェクト | true     |
| csrftoken | string | ユーザーネーム              | true     |

### Response

```
body: {
    status: true
}
```

## descripton

iconを再設定します
