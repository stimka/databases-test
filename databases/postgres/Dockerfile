FROM node:10
WORKDIR /app
ENV NODE_ENV="production"
COPY package.json ./
RUN NODE_ENV=development npm install
COPY . .
CMD ["npm", "run", "start"]
