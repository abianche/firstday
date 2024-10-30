# Backend Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for dependency installation
COPY package.json ./
COPY tsconfig.json ./
# For workspace dependencies
COPY ../package.json ../ 

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY src ./src

# Build the TypeScript files
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
