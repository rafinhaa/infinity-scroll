FROM node

# set working directory
WORKDIR /srv/infinity-scroll

# install app dependencies
COPY package*.json /srv/infinity-scroll

# add app
COPY . /srv/infinity-scroll

# mount the volumes
VOLUME /srv/infinity-scroll
VOLUME /srv/infinity-scroll/node_modules

EXPOSE 3000

# build nextjs files
RUN yarn install