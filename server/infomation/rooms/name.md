### Endpoint

```
POST /takos/v2/server/infomation/room/name
```

### Parameters

```
{
    body: JSON.stringify({
        host: string,
        roomid: string,
        requester: string
    }),
    signature: takos.signData(JSON.stringify({
        host:string,
        roomid: string,
        requester: string
    }))

}
```

### Response

```
{
    body: JSON.stringify({
        host: string,
        roomName: string,
    })
    signature: takos.signData(JSON.stringify({
        host: string,
        roomName: string
    }))
}
```

## descripton

リモートサーバーのroomの名前を設定
