# Use the official Node.js image as a base
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Install dependencies using pnpm
RUN npm install -g pnpm

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm run build

ARG PUBLIC_URL /.
RUN echo "E404:.$PUBLIC_URL/index.html" >> httpd.conf

# Use BusyBox to serve the static files
FROM busybox:uclibc
ARG PUBLIC_URL /.
COPY --from=builder /app/httpd.conf .
COPY --from=builder /app/build/ .$PUBLIC_URL
CMD ["httpd", "-f", "-v", "-p", "80", "-c", "httpd.conf"]
EXPOSE 80
