FROM node:9.10

RUN set -x && \
    npm install -y -g yarn &&\
    sleep 3 &&\
    yarn init -y &&\
    yarn add puppeteer -g &&\
    apt-get update &&\
    apt-get install -y firefox-esr libnss3 libxss1 fonts-ipafont-gothic fonts-ipafont-mincho

CMD ["node", "/tmp/share/headless_chrome.js"]