# 本书独立样式

## 简介

只应用于本书的独立样式。

## 示例

```css
[class*="fangsong"] {
    font-family: "LXGW WenKai Lite", "FangSong_GB2312", serif !important;
    line-height: 1.5 !important;
    opacity: 1;
}
```

### 选择同级节点
选择 `.yiwen` 后第一个p节点：
```shell
.yiwen + p {
    font-family: "STKaiti", STKai, "MKai PRC", Kai, "楷体", serif !important;
    line-height: 1.2 !important;
}
```