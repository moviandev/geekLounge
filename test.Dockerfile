FROM node:12
COPY package.json .
COPY . .
RUN yarn install

ENV NODE_ENV=test
CMD ["yarn", "test"]