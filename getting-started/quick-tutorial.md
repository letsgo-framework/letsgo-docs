# Quick Tutorial

Get ready to make letsgo up and running in **less than 5 minutes** 🚀

## 1. Install letsgo-cli globally

Please make sure [Go, Mongodb and Glide are properly installed](install-requirements.html) on your machine. Also make sure `GOBIN` is set properly.

```bash
go get github.com/letsgo-framework/letsgo-cli
```

## 2. Create a new project

```bash
letsgo-cli init github.com myapp
```

## 3. cd into the newly created project

```bash
cd myapp
```

## 4. That's it. Run the application

```bash
go run main.go
```

## 5. Consume API

Hello World API is accessible at [`http://localhost:8080/api/v1`](http://localhost:8080/api/v1).

*A TODO API build over [quick start](quick-start.html).*
