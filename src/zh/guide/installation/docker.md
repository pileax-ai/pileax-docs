# Docker Compose

## 克隆代码
```shell
git clone --recursive https://github.com/pileax-ai/pileax
```

## 准备配置
```shell
cd docker

cp backend.env.example backend.env
```

## 运行
```shell
# start
docker compose up -d

# stop
docker compose down
```

访问 http://localhost:9610