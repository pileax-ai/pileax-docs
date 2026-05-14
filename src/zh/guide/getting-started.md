# 快速开始

## 什么是 PileaX

PileaX 是一款本地优先的一站式 AI 知识库，集 AI 对话、智能笔记、电子书阅读和管理于一体。从知识的生产到应用，PileaX 帮助您建立统一的知识库，利用 AI 智能体技术不断优化 AI 交互体验。数据完全由您掌控，支持离线使用的桌面应用和灵活部署的 Web 应用。

## 如何使用

PileaX 提供了桌面应用、Docker镜像和源码，根据根据需求选择不同的使用方式。

<features
    :items="[
        { label: 'macOS', icon: 'apple', link: '/zh/guide/installation/desktop-macos' },
        { label: 'Windows', icon: 'microsoft-windows', link: '/zh/guide/installation/desktop-windows' },
        { label: 'Linux', icon: 'linux', link: '/zh/guide/installation/desktop-linux' },
    ]"
    data-aos="fade-up"
    data-aos-delay="0" dense>
</features>

### 桌面应用
PileaX 提供了 macOS、Windows 和 Linux 的安装包，前往 [下载](/zh/download) 页面下载最新的桌面应用，一健安装即可开始体验。

### Docker

PileaX 的 Docker 镜像已经发布至 [Docker Hub](https://hub.docker.com/u/pileax)，包括：

- pileax/pileax-api：后端API服务
- pileax/pileax-web：Web前端 
- pileax/pileax-collab: 协作服务

详细的部署说明请参考： [Docker](/zh/guide/installation/docker)

### 自定义部署

从源码开始自定义部署。
