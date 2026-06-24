# Tech blog — Jekyll template

A clean, modern Jekyll theme for a developer blog. Built with plain Jekyll (no
third-party theme gem) so every layout lives in this repo and is easy to tweak.

## Features

- **Light & dark mode** — auto-detects the OS preference and remembers a manual
  toggle (no flash of the wrong theme on load).
- **Syntax highlighting** — Rouge-powered fenced code blocks themed for both
  color schemes, with a hover-to-reveal **Copy** button.
- **Responsive** — fluid type, sticky header, and a mobile nav menu.
- **SEO & feeds** — `jekyll-seo-tag`, `jekyll-sitemap`, and an RSS feed via
  `jekyll-feed` (all GitHub Pages compatible).
- **Reading time, tags, and an archive** page grouped by year.
- Accessible: skip link, focus styles, reduced-motion support, semantic markup.

## Structure

```
_config.yml          Site settings, nav, plugins
_layouts/            default, home, post, page
_includes/           head, header, footer
_sass/               _theme (tokens), _base, _layout, _components, _syntax
assets/css/style.scss  Sass entry point
assets/js/main.js    Theme toggle, mobile nav, copy buttons
_posts/              Your posts (YYYY-MM-DD-title.markdown)
archive.html         Posts grouped by year
about.markdown       About page
```

## Run locally

```bash
bundle install
bundle exec jekyll serve --livereload
# open http://localhost:4000
```

## Customize

1. Edit `_config.yml` — `title`, `tagline`, `description`, `author`, `url`, and
   your social usernames. Blank social fields are hidden automatically.
2. Adjust colors in `_sass/_theme.scss` (CSS custom properties for each theme).
3. Update `about.markdown` and the nav under `nav:` in `_config.yml`.
4. Add posts to `_posts/`. Optional front matter: `description`, `tags`.

## Deploy

Pushing to `main` builds and deploys via GitHub Pages
(`.github/workflows/jekyll-gh-pages.yml`). Set `url` (and `baseurl` if the site
lives in a subpath) in `_config.yml` so absolute links and the feed resolve.
