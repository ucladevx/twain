FROM node:8.2

RUN mkdir /var/server
COPY package.json /var/server
WORKDIR /var/server
RUN npm install

ENTRYPOINT ["npm", "run", "dev"]
