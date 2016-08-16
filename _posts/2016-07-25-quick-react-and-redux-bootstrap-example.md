---
title: Quick React and redux-bootstrap example
date: 2016-07-25 00:00:00 Z
layout: post
subtitle: quick example combining create-react-app with redux-bootstrap
summary: Getting started very fast with React and Redux
author: Ron
---

## {{ page.title }}

## _{{ page.subtitle }}_

{{ page.summary }}


### Overview

Facebook engineers released a new React CLI just recently:

- [introductory post on Facebook React blog](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html)

- [`create-react-app` on GitHub](https://github.com/facebookincubator/create-react-app)

I prefer to combine [React](https://facebook.github.io/react/) with [Redux](http://redux.js.org/) and [Immutable.js](https://facebook.github.io/immutable-js/),
so I thought I'd take the new CLI for a spin and see just how quickly I could get everything up and running together.


### Secret sauce: redux-bootstrap

I've contributed a little to a very handy helper library: [redux-bootstrap](https://github.com/redux-bootstrap/redux-bootstrap). This helper is a one-stop-shop for conveniently integrating React, Redux, Immutable.js and the popular [React Router](https://github.com/reactjs/react-router).

It provides a few escape hatches should you wish to take more control of the initial `ReactDOM.render()`,
or if you need to customise the browser history navigation mechanism and/or options.
But with good defaults (for me, at least), you are up and running with minimal fuss.

### `create-react-app` example

You can follow this example along here, or in my [React and redux-bootstrap example on GitHub](https://github.com/jokeyrhyme/react-redux-bootstrap-example).

1. `create-react-app my-example`

2. `cd my-example`

3. `npm start` and confirm that this works in the browser

This will open a new tab in your browser pointing to "http://localhost:3000/".
You should see a spinning React logo (assuming your browser supports [CSS animations](http://caniuse.com/#feat=css-animation) and [SVG](http://caniuse.com/#feat=svg)),
and the console should contain no errors.


### `redux-bootstrap` integration

We continue by installing redux-bootstrap:

- `npm install --save redux-bootstrap`

React Router needs to be told which URLs map to which components.
`create-react-app` already provides us with an `App` component, so it makes sense that this should be the root path "/".

We create a new "src/routes.js" file and specify that the pre-existing `App` component is the default:

```js
import React from 'react';
import { Route } from 'react-router';

import App from './App.js';

export const routes = (
  <Route path='/' component={App} />
);
```

This example (and most React examples you'll find elsewhere) uses [JSX syntax](https://facebook.github.io/react/docs/jsx-in-depth.html).
JSX is a convenient XML-like shorthand for calls to [`React.createElement()`](https://facebook.github.io/react/docs/top-level-api.html#react.createelement),
which is why it is important to `import React`, even when it doesn't look like we use it at all here.

This is very much typical React Router usage,
using a component-based approach to declaring that "/" should render the `App` component.

Next, we almost completely replace the contents of "src/index.js":

```js
import { bootstrap } from 'redux-bootstrap';

import './index.css';
import { routes } from './routes.js';

bootstrap({
  reducers: {},
  routes
});
```



`bootstrap()` automatically mounts and renders our React components,
using the routes we just configured.
As we start writing [Redux reducers](http://redux.js.org/docs/basics/Reducers.html),
we can add them to the `reducers` Object that we give to `bootstrap()`.

Style notes:

- I prefer to sort my `import`s into different groups: Node.js built-ins, non-local packages, and files that are local to the current project.
  I feel this makes it slightly easier to review the imports at a glance.

- I also prefer to `import` local project files by using their full filenames including extensions.
  This makes the local group of `import`s even more easily identifiable.
  It can also make it easier to see where images or other non-JavaScript assets are being loaded.


### Summary

We've got some of our fiddliest ducks in a row with a CLI, one helper, and 2 small files.

In the interests of keeping this short and focused,
I'll leave fleshing this example out with React components and Redux reducers and actions as an exercise to the reader.

I may also blog about this some more in future,
but I highly recommend that you take a look at the Redux documentation in the meantime:

- [http://redux.js.org/](http://redux.js.org/)

This might very well be the best technical documentation I've ever encountered.
You learn about core concepts and recommendations from very clear writing.


## Social Posts

I've cross-posted this on the following social networks, where your comments are welcome:

- [Twitter](https://twitter.com/jokeyrhyme/status/757412832543518720)

- [Google+](https://plus.google.com/+RonWaldon/posts/3bvFp1999hm)

- [LinkedIn](https://www.linkedin.com/hp/update/6163178657826222080)
