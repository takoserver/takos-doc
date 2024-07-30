### Endpoint

```
POST /takos/v2/client/sessions/registers/auth
```

### Parameters

| name         | type   | description       | required |
| ------------ | ------ | ----------------- | -------- |
| code         | string | 認証コード        | true     |
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

メールアドレスを認証します
