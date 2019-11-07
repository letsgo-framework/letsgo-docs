# Command Line Interface (CLI)

letsgo comes with a full featured Command Line Interface (CLI) which lets you scaffold and manage your project in seconds.

## install letsgo-cli
```
go get github.com/letsgo-framework/letsgo-cli
```
::: note
Under the hood letsgo-cli uses [fresh](https://github.com/gravityblast/fresh) to livereload. So Install that package seperately `go get github.com/pilu/fresh`.
:::
***

## Create a new project

```bash
letsgo-cli init -importPath=<import_namespace> -directory=<project_name> -router=<router>
```

- **letsgo-cli init -importPath=github.com -directory=myapp -router=gin**<br/>
  Generates a new project called **myapp** in your `GOPATH` inside `github.com` having `gin` as router.
  Currently letsgo only supports between `mux` or `gin`. Default is `gin`.

## letsgo-cli generate controller
Create a new controller

```bash
letsgo-cli generate controller
```

- **letsgo-cli generate controller my_controller**<br/>
  Generates an empty controller called **my_controller** in the `./controllers` folder.

## letsgo-cli generate type
Create a new type

```bash
letsgo-cli generate type my_type
```

- **letsgo-cli generate type my_type**<br/>
  Generates an empty type called **my_type** in the `./types` folder. 

## letsgo-cli log clear
Clear log file at `log/letsgo.log`

```bash
letsgo-cli log clear
```

## letsgo-cli log <LINE_COUNT>
Prints the last N number lines of `log/letsgo.log`

```bash
letsgo-cli log 50
```

## letsgo-cli build
Build current project

```bash
letsgo-cli build
```

<!-- ## letsgo-cli dockerize
Update binary name in `Dockerfile`

```bash
letsgo-cli dockerize myApp
```

::: note 
This works only once 
::: -->

## letsgo-cli run
Run the current project

```bash
letsgo-cli run
letsgo-cli run -livereload // run the current project with livereload
```

## letsgo-cli help
List CLI commands.

```
letsgo-cli help
```
