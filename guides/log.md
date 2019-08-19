# Log

See the [log concepts](../concepts/concepts.md#log) for details.

## How to bootstrap letslog?

### Define a severity level in `.env`. Debug is default.
```env
LOG_LEVEL=debug
```

### Call `InitLogFuncs()` in `main.go`

```go
package main

import (
    ...
    "github.com/letsgo-framework/letsgo/letslog"
    ...
)


func main() {
    ...
    ...
    letslog.InitLogFuncs()
    ...
}
```

### Write log
```
greet := "Hello log"
letslog.Debug("%s from letsgo", greet)
```

### View log: you can manually open `./log/letsgo.log` or run
```
letsgo-cli log 50
```

