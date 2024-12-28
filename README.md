# Readme Display

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

Dynamic widgets to show off your Last.fm and Letterboxd stats in your readme. Inspired by [novatorem](https://github.com/novatorem/novatorem)

## Examples

### Last.fm - Now Playing

![Last.fm](https://readme-display.vercel.app/api/last-fm/now-playing?theme=vaporwave)

### Last.fm - Top Artists

![Last.fm](https://readme-display.vercel.app/api/last-fm/top-artists?theme=vaporwave)

### Letterboxd - Recently watched

![Letterboxd](https://readme-display.vercel.app/api/letterboxd?theme=vaporwave)

## What?

A Next.js app that generates SVG images to display:

- Your latest (or current) Last.fm scrobbled track
- Your top 5 Last.fm artists for the last 7 days
- Your last 3 Letterboxd diary entries

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

4. Choose a theme and add it as a query param to the URL. If no theme is provided, the default theme will be used. The available themes are:

- `blackmetal`
- `brutal`
- `citypop`
- `darkwave`
- `gameboy`
- `glass`
- `minimal` (default)
- `neon`
- `postpunk`
- `retro`
- `sunbather`
- `synthwave`
- `terminal`
- `vaporwave`
- `witchhouse`

5. Add the widgets you want to your readme:

```markdown
![Last.fm](https://your-deployment-url.vercel.app/api/last-fm/now-playing?theme=brutal)
![Last.fm](https://your-deployment-url.vercel.app/api/last-fm/top-artists?theme=darkwave)
![Letterboxd](https://your-deployment-url.vercel.app/api/letterboxd?theme=postpunk)
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
