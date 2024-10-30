# Backend Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package.json ./
COPY tsconfig.json ./

# Install only dependencies needed for production
RUN npm install

# Copy the rest of the application code
COPY src ./src

# Build the TypeScript files
RUN npm run build

# Prune development dependencies
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application in production
CMD ["node", "dist/server.js"]
