# Background Image

PileaX comes with a collection of preset background images and also supports custom image uploads.
To ensure backgrounds do not distract from reading content, two configuration options are provided:
- Background Blur: Blurs the background into soft color blocks for a frosted-glass depth effect, pushing the backdrop visually backward and keeping text the focal point.
- Opacity: Fades and darkens the background to a subtle semi-transparent look, making text stand out prominently.

<VpvImage 
:imageConfig="{
image: '/images/en/background/image.webp',
image_dark: '/images/en/background/image-dark.webp',
}"
enableZoom 
/>

:::info 👆Tips
General -> Appearance -> Background -> Image
:::

## Preview
<VpvImageGallery
layout="grid"
headerTitle="Preset background images"
:folders="['/gallery/en/background/images']"
/>