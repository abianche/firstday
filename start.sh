#!/bin/bash

# Start the backend services
cd backend
docker-compose up -d
cd -

# Start the frontend services
cd frontend
docker-compose up -d
cd -
