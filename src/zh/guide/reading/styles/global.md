# 全局样式

可应用于所有书的全局样式。

:::info 👆提示
自定义 -> 全局CSS
:::

## 示例

```css
/* Kaiti */
a,
aside,
blockquote,
blockquote *,
.annotation,
.block,
.fncontent,
.fs,
.jiazhu,
.jiaozhu,
.small,
.small1,
.tuti,
.tuzhu,
[class*="note" i],
[class*="quotation" i],
[class*="quotation" i] *,
[class*="kai" i],
[class*="kai" i] *,
[class*="kt" i],
[class*="kt" i] * {
    font-family: "STKaiti", STKai, "MKai PRC", Kai, "楷体", serif !important;
    line-height: 1.5 !important;
}

[class*="fangsong"],
[class*="fangsong"] * {
    font-family: "LXGW WenKai Lite", "FangSong_GB2312", serif !important;
    line-height: 1.5 !important;
}

.msonormal,
.yinwen,
[class*="poem"],
[class*="poem"] *,
[class*="poetry"],
[class*="poetry"] *,
[class*="shige"],
[class*="shige"] *,
[class*="shiju"],
[class*="shiju"] * {
    font-size: 1.1rem !important;
    font-family: "FZLiuGongQuanKaiShuS", "TsangerJinKai05", "LXGW WenKai Lite", "FangSong_GB2312", serif !important;
    line-height: 1.5 !important;
    text-align: center !important;
}

/* Heading */
h1 {
    font-size: 1.5rem !important;
    text-indent: 0 !important;
}
h2 {
    font-size: 1.4rem !important;
    text-indent: 0 !important;
}
h3 {
    font-size: 1.2rem !important;
    font-weight: bold !important;
    text-indent: 0 !important;
    border-bottom: solid 1px rgba(0,0,0,0.08);
}
h4 {
    font-size: 1.1rem !important;
    font-weight: bold !important;
    text-indent: 0 !important;
    border-bottom: solid 1px rgba(0,0,0,0.08);
}

/* Superscript */
sub,
sup,
[class*="sub" i],
[class*="sup" i] {
    font-size: 0.6rem !important;
}
```