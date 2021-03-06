FROM node:15.6.0-alpine3.12

WORKDIR /var/www/html

RUN apk update && apk upgrade

ENV HOST 0.0.0.0
EXPOSE 3000

COPY package.json yarn.lock ./

RUN yarn install

COPY ./ .

CMD ["yarn", "dev"]
