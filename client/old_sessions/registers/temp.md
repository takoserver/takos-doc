### Endpoint

```
POST /takos/v2/client/sessions/registers/temp
```

### Parameters

| name         | type   | description    | required |
| ------------ | ------ | -------------- | -------- |
| email        | string | email          | true     |
| recaptcha    | string | reCAPCHA token | true     |
| recapchakind | string | v2 or v3       | true     |

### Response

```
body: {
    status: true,
    sessionid: string
}
```

## descripton

メールアドレスを認証します
