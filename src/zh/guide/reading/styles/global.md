# 全局样式

## 简介

可应用于所有书的全局样式。

## 示例

```css
/* Kaiti */
aside,
table,
.calibre3,
.small,
.small1,
.note,
.msonormal,
.img,
.jiazhu,
.block,
.fnoteright,
.note5,
.kt,
[class*="kaiti"] {
    font-family: "STKaiti", serif !important;
    line-height: 1.2 !important;
    opacity: 0.8;
}
[class*="fangsong"] {
    font-family: "LXGW WenKai Lite", "FangSong_GB2312", serif !important;
    line-height: 1.5 !important;
    opacity: 1;
}

/* Heading */
h1 {
    font-size: 1.8rem !important;
}
h2 {
    font-size: 1.6rem !important;
}
h3 {
    font-size: 1.4rem !important;
    font-weight: bold !important;
    text-indent: 0 !important;
    border-bottom: solid 1px rgba(0,0,0,0.08);
}
h4 {
    font-size: 1.2rem !important;
    font-weight: bold !important;
    border-bottom: solid 1px rgba(0,0,0,0.08);
}
```