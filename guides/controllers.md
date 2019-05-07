# Controllers

See the [controllers' concepts](../concepts/concepts.md#controllers) for details.

## How to create a controller?

There are two ways to create a controller:
 - Using the CLI `letsgo-cli generate controller user_controller`. Read the [CLI documentation](../cli/CLI.md#letsgo-cli-generatecontroller) for more information.
 - Manually create a Go file named `user_controller.go` in `./controllers`.

## Adding Endpoints

Each controller’s method receives the `context` (`c *gin.Context`) object as first parameter. The method has to be bounded by a route.

#### Example

In this example, we are defining a specific route in `./routes/routes.go` that takes `controllers.Home` as handler. It means that every time a the `/api/v1` URL is requested, the server will call the `Home` method in the `controllers` package. Our `Home` method returns a JSON object.

**Path —** `./routes/routes.go`.
```go
package routes

import (
	"github.com/gin-gonic/gin"
	"github.com/letsgo-framework/letsgo/controllers"
)

func PaveRoutes() *gin.Engine {
	r := gin.Default()

	// Grouped api
	v1 := r.Group("/api/v1")
	{
		v1.GET("/", controllers.Home)
	}

	return r
}
```

**Path —** `./controllers/main_controller.go`.
```go
package controllers

import (
	"github.com/gin-gonic/gin"
)


// The content below is only a placeholder and can be replaced.
type Welcome struct {
	Greet string `json:"greet"`
	Doc string `json:"link_to_doc"`
	Github string `json:"github"`
	Examples string `json:"examples"`
}
func Home(c *gin.Context) {
	var welcome Welcome
	welcome.Greet = `Welcome to letsGo`
	welcome.Doc = `Link to readme`
	welcome.Github = `Link to github`
	welcome.Examples = `Link To examples`
	c.JSON(200, welcome)
	c.Done()
}
```

