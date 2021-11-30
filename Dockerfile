FROM node:14.15.4-alpine3.12 as prod
WORKDIR /usr/src/app

RUN npm install --global pm2

COPY package*.json /usr/src/app/

RUN npm ci --no-optional --ignore-scripts

COPY . /usr/src/app/

RUN npm run build
RUN npm prune --production

# FROM nginx:1.16.0-apline
# COPY --from=prodd /usr/src/app /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", 'daemon off;']

# EXPOSE 3000

# USER node

# CMD [ "pm2-runtime", "npm", "--", "start" ]