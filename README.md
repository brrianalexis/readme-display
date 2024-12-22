# Readme Display

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Dynamic widgets to show off your Last.fm and Letterboxd stats in your readme. Inspired by [novatorem](https://github.com/novatorem/novatorem).

## Example

![Last.fm](https://readme-display.vercel.app/api/last-fm)
![Letterboxd](https://readme-display.vercel.app/api/letterboxd)

## What?

A Next.js app that generates SVG images to display:

- Your latest (or current) last.fm scrobbled track
- Your top 5 last.fm artists for the last 7 days
- Your last 3 letterboxd diary entries

## Why?

Just because!

## How?

1. Fork this repo
2. Deploy to Vercel
3. Set up the environment variables:

```zsh
LASTFM_USERNAME=your-lastfm-username
LASTFM_API_KEY=your-lastfm-api-key
LETTERBOXD_USERNAME=your-letterboxd-username
```

4. Add the widget to your readme:

```markdown
![Last.fm](https://your-deployment-url.vercel.app/api/last-fm)
![Letterboxd](https://your-deployment-url.vercel.app/api/letterboxd)
```

## Development

### Install dependencies

```
bun install
```

### Run locally

```
bun dev
```

### Run tests

```
bun test
```

## License

MIT

---

Made with ❤️ by [@brrianalexis](https://github.com/brrianalexis)
