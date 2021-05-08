FROM node:15

# ENV PORT 5000
# EXPOSE 5000

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app
COPY package.json /usr/src/app
# --only=prod flag to optimize download packages which are required only for PROD
RUN npm install --only=prod
COPY ./ /usr/src/app

CMD "npm" "run" "start"