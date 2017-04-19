FROM node:alpine

ENV PROJECT_DIR /srv/wedding/
ENV PORT 8080

RUN set -ex \
    && apk upgrade --update-cache 

COPY . ${PROJECT_DIR}

RUN set -ex \
    && cd ${PROJECT_DIR} \
    && npm install express \
    && npm install body-parser \
    && npm install \
    && ./node_modules/webpack/bin/webpack.js

EXPOSE 8080

WORKDIR ${PROJECT_DIR}

CMD ["node", "server.js"]
