FROM node:16.15 AS development

# Create app directory
WORKDIR /app

# Installing dependencies
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# Copying source files
COPY . .

# Building app
EXPOSE 3000

# Running the app
CMD npm run dev