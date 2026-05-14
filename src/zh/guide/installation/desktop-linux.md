# <svg-icon name="linux" size="36px" color="#0078d4" /> 在 Linux 上安装

## 系统要求
- 系统版本：Ubuntu 22.04+, Debian 11+, Fedora 38+
- 内存：4GB
- CPU：2核

## 安装步骤

1. 下载 `.AppImage` 文件。
2. 双击该 `.AppImage` 文件，**PileaX** 无需安装即可直接运行。

### AppImage 简介
AppImage 是一种用于在 Linux 系统上分发便携式软件的格式，下载后无需安装即可运行。

### AppImageLauncher
使用 AppImage 运行应用默认是不会集成到应用程序中，也不生成桌面快捷方式。AppImageLauncher 可以帮助你将应用集成到桌面中。

安装 AppImageLauncher，以 Ubuntu 为例：
```shell
sudo add-apt-repository ppa:appimagelauncher-team/stable
sudo apt update
sudo apt install appimagelauncher
```

安装好后，再次运行 PileaX 时，会有集成的提示：
![](/screenshots/AppImageLauncher.png)