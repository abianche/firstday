# Frontend Dockerfile
# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json, package-lock.json, and webpack config
COPY package.json ./
COPY tsconfig.json ./
COPY webpack.config.ts ./
COPY .babelrc ./

# Install both dependencies and devDependencies to include webpack
RUN npm install

# Copy the rest of the application code
COPY src ./src

# Build the React application and install 'serve' to serve the static files
RUN npm run build && npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application in production mode
CMD ["serve", "-s", "dist"]
