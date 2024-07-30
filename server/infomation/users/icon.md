### Endpoint

```
POST /takos/v2/server/infomation/users/icon
```

### Parameters

```
{
    body: JSON.stringify({
        host: string,
        userid: string,
        requester: string
    }),
    signature: takos.signData(JSON.stringify({
        host:string,
        userid: string,
        requester: string
        onluid: string //required false
    }))

}
```

### Response

```
{
    image/jpeg
}
```

## descripton

リモートサーバーの友達のアイコンの画像を取得するapi
