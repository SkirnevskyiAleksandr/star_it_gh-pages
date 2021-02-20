1. Install Docker https://docs.docker.com/get-docker/
2. Run Docker
3. Open terminal

# You have to be in same directory as docker-compose.yml in order to proceed

4. Type in terminal: docker-compose up -d
5. Wait for installation is over

Now environment is on.
API server is available on localhost:8181
Client server is available on localhost:8080
Customer application is available on localhost:3000
Business application is available on localhost:3001
Customer landing is available on localhost:3002
Business landing is available on localhost:3003

For now applications are not initialized, so their respective blocks in docker-compose.yml are commented to avoid error messages