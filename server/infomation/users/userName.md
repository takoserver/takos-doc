### Endpoint

```
POST /takos/v2/server/infomation/users/userrName
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
        userName: string,

    })
    signature: takos.signData(JSON.stringify({
        host: string,
        userName : string
    }))
}
```

## descripton

リモートサーバーの友達のuserNameを取得するurl
