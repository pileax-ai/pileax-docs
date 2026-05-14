# Docker Compose

## Clone code
```shell
git clone --recursive https://github.com/pileax-ai/pileax
```

## Prepare Configuration
```shell
cd docker

cp backend.env.example backend.env
```

## Run
```shell
# start
docker compose up -d

# stop
docker compose down
```

Visit http://localhost:9610