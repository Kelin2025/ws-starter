## Install

```
npm install
```

## Usage

```javascript
import { init } from "@frameninja/ws-starter"

init({
  path: "wss://localhost:8080",
  actions: {
    hello: ({ name }) => {
      console.log("Hello", name)
    }
  }
})

// When you will receive { action: "hello", payload: { name: "world" } }
// => Hello world
```
