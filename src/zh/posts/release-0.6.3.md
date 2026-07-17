---
type: post
title: PileaX 0.6.3 发布
description: 增加更多书籍的背景纹理，并可以自由定义书籍的CSS，持续提升阅读体验。书摘可以按书分组，可以非常便捷地查看阅读的每一本书的所有书摘和笔记。笔记方面，新增了Markdown的导入和导出。
date: 2026-06-17
image: /images/zh/cover/0.6.3-texture.webp
tags:
  - book
  - note
---

<VpvImage :imageConfig="{image: '/images/zh/cover/0.6.3-texture.webp'}" enableZoom />

## 引言

新的版本 `0.6.3` 发布了！增加更多书籍的背景纹理，并可以自由定义书籍的CSS，持续提升阅读体验。书摘可以按书分组，可以非常便捷地查看阅读的每一本书的所有书摘和笔记。笔记方面，新增了Markdown的导入和导出。

## 阅读

### 背景纹理

完美的阅读体验绝不仅仅是“白纸黑字”。极简的纯色背景固然干净，但在长时间阅读时，高饱和度的纯色容易引发视觉疲劳，且缺乏空间层次感。

PileaX 此次引入的[背景底纹](/zh/guide/reading/background/texture)，旨在打破屏幕的冰冷感：

- 缓解视力疲劳：精心调配的纹理能够有效折射和吸收屏幕光线，减少直射眼球的刺眼感。
- 营造阅读氛围：无论是读一本古典文学，还是品味现代小说，合适的底纹能让你瞬间进入“沉浸阅读”的状态。
- 重塑纸质触感：通过细腻的微纹理模拟，让像素点转化为具有呼吸感的“纸张”。

<VpvImageGallery
layout="grid"
headerTitle="预设背景纹理"
:folders="['/gallery/zh/background/textures']"
/>

### 自定义CSS
对电子书字体、颜色等样式进行自定义、灵活、细粒度的配置。支持：
- [全局样式](/zh/guide/reading/styles/global)
- [本书样式](/zh/guide/reading/styles/book)

### 自定义选项

## 笔记

支持笔记的 Markdown 导入导出。

## 更新内容

### 🚀 新功能
- 新增：书籍自定义配置项
- 新增：阅读器背景纹理功能
- 新增：书籍数据导入导出
- 新增：全局/单本独立自定义CSS
- 新增：批注按书籍分组检索

### ⚡ 优化改进
- 优化：书籍扩展属性与排版样式
- 优化：工作空间体验
- 优化：阅读器字重调节

更多：https://github.com/pileax-ai/pileax/releases/tag/v0.6.3