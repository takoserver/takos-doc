### Endpoint

```
POST /takos/v2/server/infomation/users/nicName
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
    }))

}
```

### Response

```
{
    body: JSON.stringify({
        host: string,
        nickName: string,

    })
    signature: takos.signData(JSON.stringify({
        host: string,
        nickName: string
    }))
}
```

## descripton

リモートサーバーの友達のuserNameを取得するapi
