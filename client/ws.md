## Endpoint

```
GET /takos/v2/client/ws
```

## descripton

websocketです

## ws request

### join friend room

reqest

```
{
    type: "joinFriendRoom",
    friendName: string
}
```

response

```
{
    type: "joinFriendRoom",
    status: string
}
```

### join room

reqest

```
{
    type: "joinRoom",
    roomid: string
}
```

response

```
{
    type: "joinRoom",
    status: string
}
```

### ここからはサーバーから送られてくるのものみ

on open

```
{
    sessionid: string
}
```

message(friend)

```
{
    type: "friendMessage",
    message: string,
    userName: string,
    messageid: string,
    time: Date,
}
```

message(room)

```
{
    type: "roomMessage",
    message: string,
    userName: string,
    messageid: string,
    time: Date
}
```

read(friend)

```
{
    type: "friendRead",
    friendid: string,
    messageid: string
}
```

read(room)

```
{
    type: "roomRead",
    roomid: string,
    messageid: string
}
```

通知

```
{
    type: "notification",
    message: string,
    link: string
}
```
