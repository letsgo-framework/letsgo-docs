# Databases

letsgo currently supports mongodb only. 

::: note
 letsgo will have support for most common databases in near future. 
:::

**Table of contents:**

- [MongoDB Installation](#mongodb-installation)

## MongoDB Installation

### Install MongoDB locally

Please follow [this](https://docs.mongodb.com/manual/installation/) installation guide.

## Connecting to MongoDB

### Fill the environment variable in `.env` as per your requirement.
```env
DATABASE_HOST=127.0.0.1
DATABASE_PORT=27017
DATABASE=todo_api
```

### To Connect to the database add the following lines in `./main.go`

```go
package main

import (
	...
	"github.com/letsgo-framework/letsgo/database"
    ...
)


func main() {
    ...
    ...
	database.Connect()
    ...
}
```

### Define a collection: in `./database/collections.go` create a function that returns a collection
```go
package database

import "go.mongodb.org/mongo-driver/mongo"

func UserCollection() *mongo.Collection {
	return DB.Collection("users")
}
```
::: note
DB.Collection("users") will perform all mongo-go-driver actions
:::




