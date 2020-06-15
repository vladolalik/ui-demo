# create container "docker build --force-rm -f Dockerfile -t ibm/sislog-ui:prod ."
# save container "docker save -o docker_image/sislog-ui.tar ibm/sislog-ui:prod"
# load container "docker load -i sislog-ui.tar"
# run container "docker-compose up" OR "docker run -it -p 8081:80 --rm ibm/sislog-ui:prod"

# build environment
FROM node:12.13.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm cache verify
RUN npm install --silent
RUN npm install @vue/cli@3.10.0 -g
COPY . /app
RUN npm run test
RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
RUN apk update && apk add bash
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
