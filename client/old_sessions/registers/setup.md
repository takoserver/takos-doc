### Endpoint

```
POST /takos/v2/client/sessions/registers/setup
```

### Parameters

※FormDataに格納

| name      | type   | description    | required |
| --------- | ------ | -------------- | -------- |
| nickName  | string | ニックネーム   | true     |
| icon      | string | icon           | true     |
| recaptcha | string | reCAPCHA token | true     |
| age       | string | 年齢           | true     |
| csrftoken | string | csrfトークン   | true     |

### Response

```
body: {
    status: true
}
```

## descripton

初期設定を完了
