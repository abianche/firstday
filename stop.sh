#!/bin/bash

# Stop the frontend services
cd frontend
docker-compose stop
cd -

# Stop the backend services
cd appwrite
docker-compose stop
cd -
