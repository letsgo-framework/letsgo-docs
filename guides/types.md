# Types

See the [types' concepts](../concepts/concepts.md#types) for details.

## How to create a type?

There are two ways to create a type:
 - Using the CLI `letsgo-cli generate type user_type`. Read the [CLI documentation](../cli/CLI.md#letsgo-cli-generatetype) for more information.
 - Manually create a Go file named `user_type.go` in `./types`.
 
 #### Example
 
 In this example, we are defining a `welcome.go`  in `./types` that is imported in  `./controllers/creeter_controller.go`.
 
 **Path —** `./types/welcome.go`.
 ```go
 package types
 
 type Welcome struct {
  	Greet    string `json:"greet"`
  	Doc      string `json:"link_to_doc"`
  	Github   string `json:"github"`
  	Examples string `json:"examples"`
  }
 ```
 
 **Path —** `./controllers/greeter_controller.go`.
 ```go
 package controllers
 
 import (
 	"github.com/gin-gonic/gin"
    "github.com/letsgo-framework/letsgo/types"
 )
  
 // Greet is the response for api/v1
 func Greet(c *gin.Context) {
 
 	welcome := types.Welcome{
 		Greet:    "Welcome to letsGo",
 		Doc:      "https://letsgo-framework.github.io/",
 		Github:   "https://github.com/letsgo-framework/letsgo",
 		Examples: "Coming Soon",
 	}
 	c.JSON(200, welcome)
 	c.Done()
 }
 ```

