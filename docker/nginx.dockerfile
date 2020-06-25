# nginx version/provider
ARG NGINX_VERSION=1.15.8
ARG NGINX_PROVIDER=alpine

# Get docker image
FROM nginx:${NGINX_VERSION}-${NGINX_PROVIDER}

RUN mkdir -p /data/nginx/pages
