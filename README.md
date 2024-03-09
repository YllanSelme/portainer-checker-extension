# portainer-checker

A simple chrome extension to track your Docker images status with portainer api

## Installation

Use [npm](https://nodejs.org/en) to install portainer-checker.

```bash
git clone https://github.com/YllanSelme/portainer-checker-extension.git && cd portainer-checker-extension && echo "REACT_APP_API_URL=https://portainer.YOUR_DOMAIN/api/endpoints/2/docker/containers/json" > .env && echo "REACT_APP_TOKEN=YOUR_TOKEN" >> .env && npm install && npm build
```

## Usage

You can now add the dist folder in chrome://extensions/