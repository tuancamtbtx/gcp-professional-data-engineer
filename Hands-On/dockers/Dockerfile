# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code
COPY . .

ENV PORT=8080

# Expose the port
EXPOSE 8080

# Command to run the application
CMD ["node", "app.js"]