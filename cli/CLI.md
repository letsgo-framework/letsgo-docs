# Command Line Interface (CLI)

letsgo comes with a full featured Command Line Interface (CLI) which lets you scaffold and manage your project in seconds.

## install letsgo-cli
```
go get github.com/letsgo-framework/letsgo-cli
```

***

## Create a new project

```bash
letsgo-cli init <import_namespace> <project_name>
```

- **letsgo-cli init github.com myapp**<br/>
  Generates a new project called **myapp** in your `GOPATH` inside `github.com` and installs the default plugins through the glide.

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

## letsgo-cli version
Prints the letsgo version of current project  and letsgo-cli

```bash
letsgo-cli version
```

***

## letsgo-cli help
List CLI commands.

```
letsgo-cli help
```
