---
breadcrumb: true
---

# AI Providers

PileaX supports mainstream Large Language Models (LLMs). Simply configure your AI provider to access its AI capabilities.

## Supported AI Providers

Currently supported AI providers:

| Name | Description |
|------|-------------|
| **DeepSeek** | Open-source LLM, efficient inference, low cost. |
| **Moonshot** | Ultra-long context assistant, supports 200k Chinese chars. |
| **Tongyi** | Tongyi Qianwen, Chinese-optimized large language model. |
| **MiniMax** | Multimodal model, supports speech, text, and vision. |
| **OpenAI** | GPT series models, excels in text generation and understanding. |
| **Anthropic** | Safety-aligned model, emphasizes interpretability. |
| **Gemini** | Google's multimodal model, supports text, image, audio, video, and code. |
| **Ollama** | Lightweight framework for running LLMs locally. |


## Configure AI Providers

### Setup Wizard

If no AI provider has been configured, PileaX will prompt you to set up an `AI Provider`.

<VpvImage
:imageConfig="{
image: '/images/en/ai/ai-settings-guide.webp',
}"
width="480px"
class="center"
enableZoom
/>

### Settings
Add your desired providers under `Model Providers` and configure information such as `API Key`.

<VpvImage
:imageConfig="{
image: '/images/en/ai/ai-providers.webp',
image_dark: '/images/en/ai/ai-providers-dark.webp',
}"
enableZoom
/>

:::info 👆Tips
Operation：Settings -> Model Providers

[Shortcut](/guide/shortcut)：<kbd>⌘</kbd><kbd>G</kbd>
:::

