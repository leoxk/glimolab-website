# Deployment

## Runtime Shape

The site builds as static files and is served by nginx.

- `Dockerfile`: Node 22 Alpine builder, nginx final image.
- `docker-compose.yml`: service `glimolab-web`, container `glimolab-web`, port `127.0.0.1:3090:80`.
- `nginx.conf`: gzip, security headers, static asset caching, clean URL fallback.

## Komodo GitOps Notes

Deployment is expected to run from GitHub through Komodo:

1. Push to the repository branch watched by Komodo.
2. Komodo pulls the repo into the Periphery stack directory.
3. Docker Compose builds the static site and restarts nginx.

Before pushing deployment-sensitive changes:

- Run `npm run build`.
- Check Docker-related edits for static output compatibility.
- Keep `docker-compose.yml` service name and local port stable unless the user explicitly asks to change deployment routing.

## Common Failure Points

- Astro content schema errors from invalid MDX frontmatter.
- Missing translation keys in one locale.
- Public asset paths referenced with incorrect leading slash.
- Header/footer visual regressions on mobile after logo changes.
- Docker build failures if Node version or lockfile assumptions change.

