# syntax=docker/dockerfile:1

FROM node:16.15.1

# stuff needed to get Electron to run
RUN apt-get update && apt-get install \
    libx11-xcb1 libxcb-dri3-0 libxtst6 libnss3 libatk-bridge2.0-0 libgtk-3-0 libxss1 libasound2 libgbm1\
    -yq --no-install-suggests --no-install-recommends \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Electron doesn't like to run as root
RUN useradd -d /9000-overload 9000-overload
USER 9000-overload

WORKDIR /9000-overload
COPY package.json package.json
RUN npm install

COPY . .
RUN npx electron-rebuild

# Electron needs root for sandboxing
# see https://github.com/electron/electron/issues/17972
USER root
RUN chown root /9000-overload/node_modules/electron/dist/chrome-sandbox
RUN chmod 4755 /9000-overload/node_modules/electron/dist/chrome-sandbox

USER 9000-overload
CMD ["npm", "run", "start"]