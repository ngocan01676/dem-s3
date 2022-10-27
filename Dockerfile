# FROM node:alpine as BUILD
# WORKDIR '/app'
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx
# EXPOSE 80
# COPY --from=BUILD /app/dist/demo /usr/share/nginx/html

#docker build .
#docker run -p 80:80 imageID

################################################
FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD npm run start-prod
#docker build .
#docker run -p 8080:4200 imageID

################################################
