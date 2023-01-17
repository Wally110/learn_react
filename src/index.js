import React from "react"
import ReactDOM from "react-dom"
import App from './App' // './Api'
import './index.css'


// In development environment, we've been compiling, hot-reloading and updating on the fly.
// For production, we're going to have `static files` loading in - none of the source code.
// We can do this by making a build and deploying it.

// run `npm run build`
// This will create a `build` folder which will contain the app. Put the contents of that folder anywhere.
ReactDOM.render(<App />, document.getElementById('root'))