# poll-until.js

## What?

A last resort in lieu of Events or Promises.

I decided to turn [one of my Gists](https://gist.github.com/jokeyrhyme/9753904)
into a reusable component.

```javascript
/**
 * @param {Function} condition a function that returns `true` or `false`
 * @param {Number} [interval=197] the amount of time to wait between tests
 * @param {Function} callback a function to invoke when the condition returns `true`
 * @returns {Function} call this to stop early (but no earlier than first check)
 */
function pollUntil(condition, interval, callback)`
```

## Where?

Tested in Internet Explorer 6, Node.JS 0.10.28 and Chrome 35. This tiny
component is likely to work everywhere.

## How?

Can be used as an AMD or Node.JS module, or directly as a browser
global.

### Browser

```sh
bower install poll-until --save
```

```html
<script src="bower_components/poll-until/poll-until.js"></script>
<script>
pollUntil(/* ... */);
</script>
```

### Node.JS

```sh
npm install poll-until --save
```

```javascript
var pollUntil = require('poll-until');
pollUntil(/* ... */);
```

