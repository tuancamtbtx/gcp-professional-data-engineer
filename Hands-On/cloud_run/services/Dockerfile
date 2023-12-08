FROM node:14

# Set the working directory
WORKDIR /usr/src/app

     # Copy package.json and package-lock.json
COPY package*.json ./

     # Install app dependencies
RUN npm install

     # Copy the application code
COPY . .

     # Set the port
ENV PORT=3000

     # Expose the port
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]