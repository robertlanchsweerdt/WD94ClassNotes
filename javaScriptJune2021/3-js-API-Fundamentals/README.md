## 4.19 APIS

- API -- Application Programming Interface

- acts as a layer between your application (Client Side) and the external service (Server Side) you're tapping into

- An API can function as a "bridge" between the Client and Server using different languages

[How to Use an API with JavaScript](https://rapidapi.com/blog/how-to-use-an-api-with-javascript/)

- provides information from the server that the client is requesting

## 4.20 CLIENT

### FETCH

`fetch` talks to the server; it uses an asynchronous process and returns a promise

Because `fetch` is a promise, it has the three states of pending, resolve, and reject

A result from `fetch` will return a stringify and you will need to use the `json()` method, which also returns a promise, will parse the stringify into an Object

fetch will need to include `.catch()` to handle any broken promises (rejected promises)

```
fetch(URL)
 .then((res) => res.json())
 .then((data) => console.log(data))
 .catch((err) => console.error(err));

```

## 4.10 ASYNC AWAIT

Async and await both identify functions and expressions, respectively that return promises. Await, additionally, allows async code to be run as if it happens sequentially, guaranteeing that the await body of the code finishes before running later code.

`async` you pre-pend to a function
`await` you prepend to anything that returns a promise

With `await` the code knows to "await" doing anything else until the promise returns a value. It turns an async process into a linear process.

```
async function someFunc(){
    await fetch(API_URL)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
      console.log('this is a message that will not run until the previous promises resolve or reject)
}
```

## 4.11 RESTFUL SERVER DESIGN

REST -- Representational State Transfer

- REST API -- restful API; an API that uses HTTP requests with web services and must comply with certain restraints

- in JavaScript, the REST API is a connection from your web app to an external data source where the source has a specific internet address

### What are some the REST API restraints?

- Client-server architecture – the client is responsible for the user interface, and the server is responsible for the backend and data storage. Client and server are independent of each other, and each of them can be replaced separately.

- Stateless – no data from the client is stored on the server-side. The session state is stored on the client-side. Clients frequently use 'tokens' to verify their status.

- Cacheable – clients can cache server responses to improve performance.

- Uniform Interface - RESTful APIs have a standardized system of accessing data such as https://www.somesite.com/login and https://www.somesite.com/logout

- Layered system - hieracrchical systems in which every component is responsible for its own behavior. RESTful APIs allow for sub-division of tasks such as one server handles login / logout, another server handles product viewing and buying, and third server handles messaging between users.

### The RESTFUL Diagram

Three parts:

1. Data in client: user experience; will send requests to the server

2. Data in application server: interpret network requests from the client, and appropriately route those network requests; network requests will involve Create (`POST`) - Read (`GET`) - Update (`PUT` / `PATCH`) - Delete data (`DELETE`)

3. Database -- holds your data; PostGreSQL, MongoDB

The JavaScript client does not need to speak with a JavaScript server. It may talk with a .NET or Python server. The two languages do not need to be the same so along as there is an interpretor for the two languages (ExpressJS).

A single request from the client to the server may have multiple hand-offs of communication between the server and the database before the data is returned to the client.
