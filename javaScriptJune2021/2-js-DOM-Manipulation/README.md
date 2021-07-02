# Module 4: DOM Manipulation

## 4.13 DOM Explained

- DOM -- Document Object Model
- allows JS to interact with HTML and CSS
- most basic level, it's the Object Model... entire HTML doc represents an object
- DOM has properties and methods just like Objects
- if you want to change the CSS of a p tag, then the "style" is a property of the paragraph tag

## 4.15 SELECTING ELEMENTS

`document` -- the overal DOM, the overall HTML document / page

### DOM Methods

DOM methods accept a string as an argument

- `getElementById()` -- DOM method that finds a single element based on its ID name; returns an `element`
- `getElementsByClassName()` -- DOM method that finds one or more elements based on its class name; returns an array-like object called an `HTMLCollection`
- `getELementsByTagName()` -- targets one or more elements by their tag name (i.e. p, div, h1); returns an `HTMLCollection`
- `querySelector()` -- targets a single CSS style selector (id, class, tags) to return a single `element`
- `querySelectorAll()` -- targets multiple CSS-style selectors of the same type and returns a pseudo-array of matching elements called a `Node List`

`getElementById` and `querySelectorAll` are the 2 **most common** ways to select an element

### DOM Properties

- `style` -- HTML element property that controls the element's styling
- `innerText` -- will reference the text displayed on the screen; used to change (display) text that is wrapped by a tag
- `innerHTML` -- will reference HTML elements inside the tag; used to create HTML elements inside a tag
- `target` -- reference the target of a mouse click

## 4.16 EVENTS

Talking about making things happen on the screen such as clicking a button to open a modal or submitting a form

**events** -- refers to a 'signal' that JS receives to trigger a function

**event listener** -- waits for (listens for) an event (a signal) to happen

Examples of EVENTS

1. mouse click
2. key press
3. browser resizing
4. mouse hovering over an element
5. form submittal
6. page finishes loading

## 4.8 PROMISES

A promise is an object that may return a single value sometime in the future

A promise uses an asynchronous function that allows us to mimic synchronous code behavior

A promise allows JavaScript to handle 'asynchronous' code, which takes an indeterminate amount of time. Once the async process has run, the promise resolves or rejects.

Promises have 3 states:

1. resolve (fulfilled)
2. reject
3. pending

```
let promise = new Promise((resolve,reject) => {
    if(true){
        resolve('success')
    } else {
        reject('failure')
    }
})

promise
.then(foo => console.log(foo)), // foo = 'success'
.catch(err => console.err(err)); //err = 'failure'
```

- Promise is a `Promise constructor`
- constructor accepts two parameters `resolve` and `reject`
- returns a singluar value
- `resolve` and `reject` returns a value that is passed to `.then()`
- `reject` value passes an `Error` object
- `.then()` handles the `resolve` and always returns a new promise
- `.catch()` handles the `reject` to output the error

The .`then()` handles a resolved promise and processes the value passed along from the promise, while the `.catch()` handles a rejected promise and the value passed to it.

Both `.then()` and `.catch()` accepts a call-back function

## 4.9 APIS

- API -- Application Programming Interface

- acts as a layer between your application and the external service you're tapping into

[How to Use an API with JavaScript](https://rapidapi.com/blog/how-to-use-an-api-with-javascript/)

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
