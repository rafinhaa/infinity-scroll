FROM node
# Important for installing node packages
WORKDIR /srv/infinity-scroll 
COPY . /srv/infinity-scroll
# Install Node dependencies at `/node_modules` in the container.
RUN set -x \
    && yarn install --modules-folder=/node_modules
ENV PATH=/node_modules/.bin:$PATH
CMD ["yarn dev"]