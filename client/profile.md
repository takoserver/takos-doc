### Endpoint: `POST /takos/v2/client/profile/icon`

#### Parameters (formData)

| Name      | Type   | Description           | Required |
| --------- | ------ | --------------------- | -------- |
| icon      | string | ユーザーアイコンのURL | true     |
| csrftoken | string | CSRFトークン          | true     |

#### Response

```json
{
  "status": true
}
```

#### Description

ユーザーのアイコンを再設定します。

---

### Endpoint: `GET /takos/v2/client/settings/icon`

#### Parameters

なし

#### Response

- Content-Type: `image/jpeg`
- Response Body: ユーザーのアイコン画像

#### Description

ユーザーのアイコン画像を取得します。
