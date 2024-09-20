ARG NODE_ENV=production
ARG NODE_VERSION=22

# Base image
FROM node:${NODE_VERSION}

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci --ignore-scripts

# Bundle app source
COPY . .

# Prisma
RUN npx prisma generate

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3000

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
