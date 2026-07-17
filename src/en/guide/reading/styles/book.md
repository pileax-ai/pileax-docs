# Book Styles

Book independent styles.

:::info 👆Tips
Custom -> Book CSS
:::

## Example

```css
[class*="fangsong"] {
    font-family: "LXGW WenKai Lite", "FangSong_GB2312", serif !important;
    line-height: 1.5 !important;
    opacity: 1;
}
```

### Select Sibling Nodes
Select the first `p` element immediately following `.yiwen`:

```shell
.yiwen + p {
    font-family: "STKaiti", STKai, "MKai PRC", Kai, "楷体", serif !important;
    line-height: 1.2 !important;
}
```