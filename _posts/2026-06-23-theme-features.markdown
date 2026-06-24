---
layout: post
title: "Theme features at a glance"
date: 2026-06-23 09:00:00 -0700
description: "A demo post showing cover images, syntax highlighting, callouts, and the bits this theme ships with. Safe to delete."
categories: [meta]
tags: [meta, design]
image: /assets/images/cover-ai.svg
image_caption: "Cover images are set per-post via the front-matter image: field."
---

This is a sample post — delete it once you've seen the theme in action. Every
post gets a **cover image** (set with `image:` in the front matter, falling back
to a default), an author bio, and related posts below.

## Typography

Body text is set in Inter; headings use Space Grotesk. You get **bold**,
*italic*, `inline code`, and [links](https://jekyllrb.com/) that follow the
accent color in both light and dark mode.

> Pull quotes and asides get an accent rule down the side. Handy for the line
> you want readers to remember.

## Syntax highlighting

Hover a code block to reveal a **Copy** button.

```javascript
// Debounce — delay a call until input settles
const debounce = (fn, ms = 200) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
};
```

## Tables and lists

| Feature       | Included |
| ------------- | :------: |
| Cover images  |    ✓     |
| Dark mode     |    ✓     |
| Related posts |    ✓     |
| RSS + SEO     |    ✓     |

1. Numbered lists
2. work as expected
   - and nest
   - cleanly

That's the tour. Set your details in `_config.yml`, drop covers in
`assets/images/`, and start writing.
