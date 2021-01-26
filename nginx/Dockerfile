FROM nginx:1.19.2-alpine

WORKDIR /etc/nginx/conf.d

RUN apk update && \
    apk add --no-cache \
      tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime

RUN rm -f ./*
COPY ./nginx/conf.d .

CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
