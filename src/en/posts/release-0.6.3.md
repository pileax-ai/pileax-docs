---
type: post
title: PileaX 0.6.3 Released
description: Added more book background textures and support for custom book CSS styling to continuously enhance the reading experience. Book excerpts can now be grouped by book, allowing you to quickly view all excerpts and notes from each volume. For notes, Markdown import and export functionality has been newly added.
date: 2026-06-17
image: /images/en/cover/0.6.3-texture.webp
tags:
  - book
  - note
---

<VpvImage :imageConfig="{image: '/images/en/cover/0.6.3-texture.webp'}" enableZoom />

## Introduction

Version 0.6.3 is now released!

Added more book background textures and support for custom book CSS styling to continuously enhance the reading experience. Book excerpts can now be grouped by book, allowing you to quickly view all excerpts and notes from each volume. For notes, Markdown import and export functionality has been newly added.

## Reading

### Background Texture

Perfect reading experiences go far beyond just "black ink on a white screen." While minimalist, solid backgrounds look clean, prolonged reading on high-saturation solid colors can easily trigger visual fatigue and often lacks a sense of spatial depth.

The newly introduced [background textures](/guide/reading/background/texture) in PileaX are designed to break that icy digital barrier:

* **Relieve Visual Fatigue:** Carefully calibrated textures effectively diffuse screen glare, softening the harsh light that strikes your eyes.
* **Set the Perfect Reading Ambience:** Whether you are diving into classical literature or savoring modern fiction, the right texture instantly teleports you into a state of "deep, immersive reading."
* **Reshape the Tactile Feel of Paper:** Through delicate micro-texture simulation, pixels are transformed into "breathing paper" with a tangible touch.

<VpvImageGallery
layout="grid"
headerTitle="Preset Textures"
:folders="['/gallery/en/background/textures']"
/>

### Custom CSS
Flexible, fine-grained customization of ebook styles such as fonts and colors. Supports:
- [Global Styles](/guide/reading/styles/global)
- [Book Styles](/guide/reading/styles/book)


## Note
Markdown import and export for notes are supported.

## Changelog

### 🚀 Features

- feat: book custom options
- feat: book reader background texture
- feat: book export and import
- feat: book global and independent CSS
- feat: group and search annotation by book

### ⚡ Enhancements

- enhancement: book extra properties and styles
- enhancement: workspace
- enhancement: reader font weight

More：https://github.com/pileax-ai/pileax/releases/tag/v0.6.3