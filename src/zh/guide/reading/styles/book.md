# 本书独立样式

只应用于本书的独立样式。

:::info 👆提示
自定义 -> 本书CSS
:::

## 示例

```css
[class*="fangsong"] {
    font-family: "LXGW WenKai Lite", "FangSong_GB2312", serif !important;
    line-height: 1.5 !important;
    opacity: 1;
}
```

### 选择同级节点
选择 `.yiwen` 后第一个 `p` 节点：
```css
.yiwen + p {
    font-family: "STKaiti", STKai, "MKai PRC", Kai, "楷体", serif !important;
    line-height: 1.5 !important;
}
```

### 选择指定属性
```css
span[style*="font-family:'PingFang SC'"] {
    font-family: "STKaiti", STKai, "MKai PRC", Kai, "楷体", serif !important;
    line-height: 1.5 !important;
}
```
