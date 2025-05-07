# E-Commerce

Running the customer jenkins conatiner:

- docker run -d --name jenkins-docker --privileged -p 8080:8080 -p 50000:50000 -v /var/run/docker.sock:/var/run/docker.sock custom-jenkins

Note: the "/var/run/docker.sock:/var/run/docker.sock" allows the container's docker daemon to connect with host docker daemon.
