#!/bin/bash

# MarketHub Production Startup Script

cd /home/ubuntu/marketplace_curadoria

# Load environment variables
export NODE_ENV=production
export PORT=3000

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install
fi

# Build if dist doesn't exist
if [ ! -d "dist" ]; then
  echo "Building application..."
  npm run build
fi

# Start the server
echo "🚀 Starting MarketHub in production mode..."
npm start
