# Data Project

## Setup
1. `make build` will build all of the docker images needed to run our app
2. `make run` will run *all* of the docker-containers, which include
* activity service
* actvity db (postgres)
* frontend (webpack)
* backend (flask)

## Make Commands
* `make build`: builds all the docker images
* `make run`: runs all the docker-containers
* `make down`: stops the docker-compose network (kills all containers)
* `make log-frontend`: attach to the logs of the webpack-dev-server
* `make log-backend`: attach to the logs of the flask server
* `make pip-install package=<package>`: installs the given python package and saves it to requirements.txt
* `make pip-uninstall package=<package>` uninstalls the given python package
