FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy all files and expose the port
COPY . .
EXPOSE 3000

CMD ["npm", "run", "dev"]
