# Concepts

  - Table of contents
    - [Files structure](#files-structure)
    - [Routing](#routing)
    - [Controllers](#controllers)
    - [Types](#types)
    - [Log](#log)
***

## Files structure

By default, your project's structure will look like this:

- `/controllers`: contains the core code of your application.
- `/database`: contains mongo-go-driver connector.
- `/helpers`: contains helpers functions of your application.
- `/middlewares`: contains middlewares of your application.
- `/routes`: directory contains RESTful api routes of your application.
- `/tests`: contains tests of your application.
- `/types`: contains the types/structures of your application.
- `/jobs`: for cron jobs
- `/mail`: for sending mails and mail templates

## Controllers

Controllers are Go files which contain a set of methods reached by the requested route. It means that every time a route is requested, a controller method performs some business logic coded and sends back the response. They represent the *C* in the *MVC* pattern. In most cases, the controllers will contain the bulk of a project's business logic.

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

In this example, any time the `/api/v1` URL on your app is requested, the response will be the following: 
```json
{
    "greet": "Welcome to letsGo",
    "link_to_doc": "https://letsgo-framework.github.io/",
    "github": "https://github.com/letsgo-framework/letsgo",
    "examples": "Coming Soon"
}
```

### Where are the controllers defined?

The controllers are defined in `./controllers/` folders i.e. `controllers` package. Every Go file put in this folder will be loaded with a `controllers` package. They are available through `controllers` package name. By convention, controllers' filename can be `snake_case`, but the methods should be exported having every word of the method name (include the first one) capitalized `GetCredentials`, `Home`.

::: note
Please refer to the [controllers' guide](../guides/controllers.md) for more information.
:::

## Routing

`./routes/routes.go` file define all available routes.

## Types

Types are a representation of the database's structure or normal struct. Types can be defined in the `types` package i.e. inside `./types`
Every Go file put in this folder will be loaded with a `types` package. By convention, types' filename can be `snake_case`, but the struct should be exported having every word of the struct name (include the first one) capitalized `TokenResponse`, `Users`.

**Path —** `./types/access_token_response.go`. 
```go
package types

type TokenResponse struct {
	Access_token string `json:"access_token"`
	Expires_in   string `json:"expires_in"`
}
```

In this example, there is a `TokenResponse` types which contains two attributes `Access_token` and `Expires_in`.

### Attributes

A types must contain a list of attributes, and each of these attributes must have a type.

::: note
Please refer to the [types' guide](../guides/types.md) for more information.
:::

## Log

`letslog` is defined under `letslog` package in `./log/letslog.go`. It uses four severity levels (Debug, Info, Warn, Error) to display logs and save them in `./log/letsgo.log`

::: note
Please refer to the [log' guide](../guides/log.md) for more information.
:::
***
