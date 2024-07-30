### Endpoint

```
POST /takos/v2/client/sessions/registers/auth
```

### Parameters

| name         | type   | description       | required |
| ------------ | ------ | ----------------- | -------- |
| userName     | string | ユーザーネーム    | true     |
| password     | string | パスワード        | true     |
| email        | string | email             | true     |
| recaptcha    | string | reCAPCHA token    | true     |
| recapchakind | string | v2 or v3          | true     |
| sessionid    | string | 登録用のsessionid | true     |

### Response

```
body: {
    status: true
}
```

## descripton

登録を完了します
