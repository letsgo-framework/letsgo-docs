# Quick Start Guide

Get ready to make letsgo up and running in **less than 5 minutes** 🚀

*For a step-by-step guide, please take a look at the [detailed tutorial](quick-tutorial.html).*

## 1. Install letsgo-cli globally

Please make sure [Go, Mongodb and Glide are properly installed](install-requirements.html) on your machine. Also make sure `GOBIN` is set properly.

```bash
go get github.com/letsgo-framework/letsgo-cli
```

## 2. Create a new project

```bash
lletsgo-cli init -importPath=github.com -directory=myapp -router=gin
```

## 3. cd into the newly created project

```bash
cd myapp
```

## 4. That's it. Run the application

```bash
go run main.go
```
or for live reload
```bash
letsgo-cli run -livereload
```

## 5. Consume API

Hello World API is accessible at [`http://localhost:8080/api/v1`](http://localhost:8080/api/v1).
