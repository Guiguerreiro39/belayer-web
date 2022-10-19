FROM node:18-alpine AS development

# Create app directory
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install

COPY . .

# Building app
EXPOSE 3000

# Running the app
CMD npm run dev