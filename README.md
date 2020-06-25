# Growth Tech Challenge
A simple fullstack project with Express, React, Jest (and supertest) and Docker.

The challenge consists of filtering out the contents of these
[posts](http://jsonplaceholder.typicode.com/posts) given the its
[author](http://jsonplaceholder.typicode.com/users) works at a company
that's part of a group.

- [About the solution](#about-the-solution)
- [Code Structure](#code-structure)
- [Building](#building)
- [Running](#running)
- [Testing](#testing)
- [References](#references)

# About the solution

The idea was to expose a single route already filtering the data as
requested in the challenge's proposed problem.

# Code Structure

```
.
├── LICENSE
├── README.md
├── api/
│   ├── __test__/                    -- testing files
│   │   └── posts.spec.js
│   ├── posts.js                     -- the actaul route handler
│   ├── routes.js                    -- routes mapping
│   ├── server.js                    -- a simple server implementation
├── dist/                            -- frontend build artifacts
│   ├── build.js
│   └── index.html
├── docker/                          -- deployment related files
│   ├── docker-compose.yml
│   ├── nginx.conf
│   ├── nginx.dockerfile
│   ├── postgres.dockerfile
│   └── postgres.env
├── frontend/                        -- simple react page entrypoint
│   └── main.js
├── index.html                       -- frontend template
├── index.js                         -- backend entrypoint
├── package.json
└── webpack.config.js
```

# Building
This considers available recent versions of Node.JS, NPM, Docker and docker-compose

Get to the project's root and run:
```
# Install the dependencies
$ npm install
```

Edit the file `frontend/main.js` and add the correct IP address or
domain name to the fetch call.

You can now build the fronted artifacts with:
```
$ npx webpack
```

# Running
If all the dependencies are satisfied, from the project's root, build
and run the nginx and postgresql containers with:
```
$ docker-compose -f docker/docker-compose.yml up --build -d
```

Now run the backend entry point:
```
$ node index.js
Server up and running. Listenning at 9000
```

# Testing
Run the automated tests with:
```
$ npm test
```

# References

- [NodeJS](https://nodejs.org/en/docs/)
- [Express](https://expressjs.com/en/4x/api.html)
- [Jest](https://jestjs.io/docs/en/getting-started)
- [Supertest](https://www.npmjs.com/package/supertest)
