# Controllers

See the [controllers' concepts](../concepts/concepts.md#controllers) for details.

## How to create a controller?

There are two ways to create a controller:
 - Using the CLI `letsgo-cli generate controller user_controller`. Read the [CLI documentation](../cli/CLI.md#letsgo-cli-generatecontroller) for more information.
 - Manually create a Go file named `user_controller.go` in `./controllers`.

## Adding Endpoints

Each controller’s method receives the `context` (`c *gin.Context`) object as first parameter. The method has to be bounded by a route.

#### Example

In this example, we are defining a specific route in `./routes/routes.go` that takes `controllers.Greet` as handler. It means that every time a the `/api/v1` URL is requested, the server will call the `Greet` method in the `controllers` package which returns a JSON object.

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
		v1.GET("/", controllers.Greet)
	}

	return r
}
```

**Path —** `./controllers/greeter_controller.go`.
```go
package controllers

import (
	"github.com/gin-gonic/gin"
)

// Welcome !! The content below is only a placeholder and can be replaced.
type Welcome struct {
	Greet    string `json:"greet"`
	Doc      string `json:"link_to_doc"`
	Github   string `json:"github"`
	Examples string `json:"examples"`
}

// Greet is the response for api/v1
func Greet(c *gin.Context) {

	welcome := Welcome{
		Greet:    "Welcome to letsGo",
		Doc:      "https://letsgo-framework.github.io/",
		Github:   "https://github.com/letsgo-framework/letsgo",
		Examples: "Coming Soon",
	}
	c.JSON(200, welcome)
	c.Done()
}
```

