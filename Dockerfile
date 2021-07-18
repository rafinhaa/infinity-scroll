FROM node

# set working directory
WORKDIR /srv/infinity-scroll

# install app dependencies
COPY package*.json /srv/infinity-scroll
RUN yarn install -y

# add app
COPY . /srv/infinity-scroll

# start app
CMD ["yarn", "dev"]