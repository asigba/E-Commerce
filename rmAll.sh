#!/bin/bash
# This script removes all Docker containers and images


docker rm $(docker ps -aq) -f
docker rmi $(docker images -q) -f
