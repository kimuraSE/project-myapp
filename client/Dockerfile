FROM node:19-alpine

WORKDIR /app
COPY . .
ENV NODE_ENV production
RUN yarn install && yarn build
EXPOSE 3000
CMD [ "yarn", "start" ]