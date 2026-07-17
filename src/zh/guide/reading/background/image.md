# 背景图片

PileaX 提供了一些预设的背景图片，也支持上传图片。为了不使背景图片喧宾夺主，支持以下两个设置选项：
- 背景模糊：将背景模糊成柔和的色块，实现类似毛玻璃的效果，创造一种景深，让背景退远，文字聚焦。
- 透明度：将背景变隐变暗，创造一种若隐若现的效果，突出文字。

<VpvImage 
:imageConfig="{
image: '/images/zh/background/image.webp',
image_dark: '/images/zh/background/image-dark.webp',
}"
enableZoom 
/>

:::info 👆提示
通用 -> 外观 -> 背景 -> 图片
:::

## 预览
<VpvImageGallery
layout="grid"
headerTitle="预设背景图片"
:folders="['/gallery/zh/background/images']"
/>