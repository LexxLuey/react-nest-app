# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./
# COPY yarn.lock ./

RUN apt-get update

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# # Expose the port the app runs on
# EXPOSE 3000

# # Define environment variables
# ENV NODE_ENV=development

# Start the Nest.js application
CMD ["npm", "start"]
