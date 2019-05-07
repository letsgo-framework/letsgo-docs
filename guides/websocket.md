# Websocket

letsgo has websocket support out of the box using [websocket] ( https://github.com/gorilla/websocket )

## Usage

In `./routes.routes.go` package in the `PaveRoutes` method add the following line before defining routes

```go
    // websocket setup
    hub := controllers.NewHub()
    go hub.Run()
```
Then, you can connect to the web socket at the following url
[ws://localhost:8080/api/v1/ws](ws://localhost:8080/api/v1/ws)

::: note
change `8080` with your server `PORT`
:::

## Configurations

Configurations for websocket is available at `./controllers/ws_controller.go`
