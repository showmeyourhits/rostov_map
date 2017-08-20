# Rostov Map

There is two parts in this project:

- server (ready)
- client (coming)

## Server

Node.js server that sends up-to-date info about public transport (buses mostly) to every client that connected to it.

Connect to WebSocket on this server and you will get this messages every 5 seconds:

```javascript
{
  event: 'new_data',
  data: Array<
    {
      route: string, // bus route number
      latitude: string,
      longtitude: string,
      speed: string,
      direction: string, // degrees
      plate: string, // car plate - possibly unique ID
      unknown: string, // unknown field - integer from range 1..4 - i don't know what it means
    }
  >
}

```


## Client

coming soon