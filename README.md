# portainer-checker

A simple chrome extension to track your Docker images status with portainer api

## Installation

Use [npm](https://nodejs.org/en) to install portainer-checker.

```bash
npm install
```

## Usage

Make sure to create .env file in the root of the project and write

REACT_APP_API_URL=https://portainer.YOUR_DOMAIN/api/endpoints/2/docker/containers/json
REACT_APP_TOKEN=YOUR_TOKEN

or run

```bash
echo "REACT_APP_API_URL=https://portainer.YOUR_DOMAIN/api/endpoints/2/docker/containers/json" > .env
echo "REACT_APP_TOKEN=YOUR_TOKEN" >> .env
```

Then build with 

```bash
npm run build
```

You can now add the dist folder in [chrome](chrome://extensions/)