FROM alpine:3.8

# install node.js and npm binary
RUN apk update && apk add nodejs-npm

# set workdir
WORKDIR /app

COPY package*.json ./
RUN npm install --log-level=error --ignore-optional

ENTRYPOINT ["npm", "run", "dev"]

