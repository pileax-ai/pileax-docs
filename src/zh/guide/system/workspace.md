# 空间

在 PileaX 中，`空间`是实现**隔离化组织与多场景协作**的核心载体。


## 什么是空间？

空间（Workspace）是 PileaX 中用于**隔离和组织不同领域知识数据**的最高层级容器。

通过空间，你可以将不同场景下的数据完全解耦与独立管理。每个空间均拥有独立的内容与配置，包括但不限于：

* **独立的数据资产**：各自独立的笔记、书库、媒体库与知识库文件。
* **独立的 AI 配置**：可为不同空间单独绑定特定的 AI 模型、Prompt 提示词模板以及专属的 Agent 智能体。
* **独立的组织架构**：独立的分类目录、标签体系与检索范围，确保不同场景下的搜索与问答互不干扰。

无论是区分`工作`与`个人`，还是针对`特定学术研究`或`兴趣项目`建立专区，空间都能为你提供专注、互不干扰的知识管理环境。


## 空间管理

<VpvImage
:imageConfig="{
image: '/images/zh/system/workspace.webp',
image_dark: '/images/zh/system/workspace-dark.webp',
}"
enableZoom
/>

PileaX 提供了轻量且直观的空间管理能力，帮助你轻松掌控多空间架构：

### 空间创建与切换

* **新建空间**：你可以根据使用场景（如：*工作*、*个人*、*实验场*）随时创建新空间，并为其设置专属名称与图标。
* **快捷切换**：通过左侧边栏顶部或快捷键调出空间切换器，实现不同知识场景的无缝无感跳转。


<VpvImage
:imageConfig="{
image: '/images/zh/system/workspace-switch.webp',
image_dark: '/images/zh/system/workspace-switch-dark.webp',
}"
enableZoom
/>

### 空间协作

同一空间的成员可以共享并参与协作：
- 笔记
- 书库
- AI配置