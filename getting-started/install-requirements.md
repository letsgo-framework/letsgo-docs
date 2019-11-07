# Installation Requirements

This page covers installing the basic installation requirements for letsGo.

## Basic Installation Requirements

letsGo requires just installing [Go](https://golang.org/) and [MongoDB](https://www.mongodb.com/)

This is all that is needed before letsGo can get up and running on your development environment.

## Install Go

Install guide is available at the official [Golang](https://golang.org/doc/install) site.

## Install Mongo

Install guide is available at the official [Mongo](https://docs.mongodb.com/manual/installation/) site.

## GO module

letsgo uses go module to manage dependencies. So You need to enable `GO111MODULE`.
```
export GO111MODULE=on
```

*** If you use [atom](https://atom.io/) for development, to work with [go-plus](https://atom.io/packages/go-plus) properly you need to run `go mod vendor`

::: note
Please make sure GOBIN is set for [letsgo-cli](../cli/CLI.html) to work properly
:::


::: tip NEXT STEPS
👏 Congrats, you are all set! Now that Go is installed you can proceed to the [Quick start](/getting-started/quick-start.html).
:::
