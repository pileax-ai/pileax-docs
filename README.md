## Introduction

[PileaX AI](https://github.com/pileax-ai/pileax): One-Stop AI Knowledge Base System. 🍀

## Quick start

### Installation
```shell
pnpm install
```

### Running
```shell
pnpm docs:dev
```

### Build
```shell
pnpm docs:build
```

and preview it locally:
```shell
pnpm docs:preview
```


## I18n

### Docs Directory Structure
```markdown
├── src
│   ├── index.md
│   └── zh
│       └── index.md
```

### Config and Messages
```markdown
.vitepress
├── config
│   ├── common.mts
│   ├── en.mts
│   ├── index.mts
│   └── zh.mts
├── i18n
│   ├── en.json
│   ├── index.ts
│   └── zh.json
```

## Acknowledgements

- The site is built with [Vitepress](https://github.com/vuejs/vitepress).

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.



