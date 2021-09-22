# timer-promise
This module offers a `TimerPromise` class which extends the promise functionality with a timeout.

## Installation
This is a `NodeJS` module and is available via `npm`:

`npm install timer-promise`

## Features
- The `TimerPromise` class allows to set a maximum execution time (in ms) via `timeout` parameter.
- If no timeout argument provided (or timeout <= 0), the class wiöl behave just as a usual promise.

## Documentation
`let promise = new TimedPromise(executor,timeout=0)`
- exeutor: (required) promise function with resolve+reject
- timeout: (optional) integer in milliseconds, default=0

## Examples
```
// include module
const TimerPromise = require("timer-promise");

// Example 1: Never ending promise rejects after timeout
let executor = (resolve,reject) => { /* do nothing ... */ };
let timeout = 1000; // 1000ms = 1s
new TimerPromise(executor,timeout)
   .then(result => console.log("[*] promise resolved: "+result))
   .catch(error => console.log("[*] promise rejected: "+error));
```

## License
MIT License
