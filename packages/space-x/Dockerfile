FROM node:15

ENV PORT 3000
EXPOSE 3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
# RUN npm install -g yarn
# RUN yarn install --frozen-lockfile
RUN npm install

# Copying source files
COPY . /usr/src/app

# Running the app
CMD "npm" "run" "dev"

# PROD Building app
# RUN npm run build
# RUN npm run start


