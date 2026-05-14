# <svg-icon name="linux" size="36px" color="#0078d4" /> Install on Linux

## System Requirements

- OS version：Ubuntu 22.04+, Debian 11+, Fedora 38+
- Memory: 4GB
- CPU: 2 cores

## Steps

1. Download the `.AppImage` file.
2. Double-click the .AppImage, **PileaX** will run without installation.

## AppImage
### Introduction
AppImage is a portable software distribution format for Linux. It can be run directly after downloading without installation.

### AppImageLauncher
By default, AppImage apps won’t be integrated into the system applications menu or create desktop shortcuts.
AppImageLauncher helps integrate AppImage applications into your desktop environment.

Install AppImageLauncher (taking Ubuntu as an example):
```shell
sudo add-apt-repository ppa:appimagelauncher-team/stable
sudo apt update
sudo apt install appimagelauncher
```
After installation, you will get an integration prompt when launching PileaX next time.
![](/screenshots/AppImageLauncher.png)