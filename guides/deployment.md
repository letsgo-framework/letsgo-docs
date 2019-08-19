# Deployment

letsgo gives you many possible deployment options for your project or application. letsgo can be deployed on traditional hosting servers or services such as Heroku, AWS, Azure and others. The following documentation covers how to develop locally with letsgo and deploy letsgo with various hosting options.


**Table of contents:**

- [Docker](#docker)
---

## Docker

letsgo has a `Dockerfile` to deploy. It needs your projects binary name to run. You can change it manually
```
ENTRYPOINT ["./<YOUR_BINARY_NAME>"]
```
or you can run `letsgo-cli dockerize <YOUR_BINARY_NAME>` on a fresh letsgo project to change it.

### Run the following commands to Create and Run docker image

```bash
sudo docker run --rm -v "$PWD":/go/src/github.com/letsgo-framework/letsgo -w /go/src/github.com/letsgo-framework/letsgo iron/go:dev go build -o letsgo
```

::: note 
replace `/go/src/github.com/letsgo-framework/letsgo` with your project path. Change `letsgo` with your preferred image name
:::

```bash
sudo docker build -t letsgo .
```

```bash
sudo docker run --rm -p 8080:8080 letsgo
```
