# GraphQL

letsgo has graphql support out of the box using [graphql] ( github.com/graphql-go/graphql )

## Usage

In `./routes.routes.go` package in the `PaveRoutes` method add the following line before defining routes

```go
    // Graphql Init
	gql.InitGraphql(r)
```
Then, start your app and open your browser at [http://localhost:8080/graphql](http://localhost:8080/graphql). You should see the interface (GraphQL Playground) that will help you to write GraphQL query to explore your data.

::: note
change `8080` with your server `PORT`
:::

## Configurations

Configurations for graphql is available at `./gql/gql.go`, in `gql` package
