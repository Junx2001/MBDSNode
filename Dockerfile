# Use the Node.js image from Docker Hub with the tag 20.11.1-alpine3.18
FROM node:20.11.1-alpine3.18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set the PORT environment variable
ENV PORT=3000

# Command to run the Node.js application
CMD ["node", "server.js"]