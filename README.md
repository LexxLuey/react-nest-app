# CENTER KICK BASE API Server

## Description

Server for Center Kick application.

## Requirements
[Install Docker (Linux OS)](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/How-to-install-Docker-and-docker-compose-on-Ubuntu)

[Install Docker (Windows)](https://www.makeuseof.com/how-to-install-docker-windows-10-11/)

[Install Docker](https://docs.docker.com/desktop/install/mac-install/)

## Running the app

```bash
# development
$ docker compose --profile dev up center_kick_base_db # Start the local docker postgres service. WAIT FOR IT TO BE READY TO ACCEPT CONNECTIONS!!!!!!!.
```

```bash
# development
$ docker compose --profile dev up # Start the local development server.
```

```bash
# development
$ docker compose --profile dev down # Stop the local development server
```