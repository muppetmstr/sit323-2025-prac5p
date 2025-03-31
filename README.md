This is a simple Hello World web site, that is running inside of a Docker container.

Docker creates the container, and then uses the local port 49010 and passes it to port 8080 on the container.  In the server.js, the application is listening on port 8080, so when you navigate to port 49010, docker redirects it to the node.js application inside the container.
