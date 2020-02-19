FROM node:12.14.1

RUN mkdir -p /usr/src/appy
WORKDIR /usr/src/appy

COPY package.json /usr/src/appy/

RUN npm install

COPY . /usr/src/appy