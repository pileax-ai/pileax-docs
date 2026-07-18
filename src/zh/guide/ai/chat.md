# AI 对话

PileaX 支持主流大语言模型（LLM），只需要配置AI提供商，即可使用其AI能力。

## 支持的AI提供商

目前支持的AI提供商：

| 名称 | 简介 |
|------|------|
| **DeepSeek** | 开源大模型，推理高效且成本低廉。 |
| **Moonshot** | 超长上下文助手，支持二十万汉字。 |
| **Tongyi** | 通义千问，中文优化的大语言模型。 |
| **MiniMax** | 多模态模型，支持语音、文本和视觉。 |
| **OpenAI** | GPT系列模型，擅长文本生成与理解。 |
| **Anthropic** | 安全对齐的模型，注重可解释性。 |
| **Gemini** | 谷歌多模态模型，支持文本图像音频视频和代码。 |
| **Ollama** | 轻量框架，用于本地运行大语言模型。 |

后续会支持更多的AI提供商。

## 设置AI提供商

### 设置向导

初始使用 PileaX 时，PileaX 会提示用户去设置AI提供商。

<VpvImage
:imageConfig="{
image: '/images/zh/ai/ai-settings-guide.webp',
}"
width="480px"
class="center"
enableZoom
/>

### 设置

在 `模型提供商` 中添加需要的提供商，并配置 `API 密钥` 等信息。

<VpvImage
:imageConfig="{
image: '/images/zh/ai/ai-providers.webp',
image_dark: '/images/zh/ai/ai-providers-dark.webp',
}"
enableZoom
/>

:::info 👆提示
操作：设置 -> 模型提供商

快捷键：<kbd>⌘</kbd><kbd>G</kbd>
:::