// for building pages using server side react 
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { routes } from './routes.js'
import express from 'express'
import compression from 'compression'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 8080

app.use(compression())

// server static stuff
app.use('/static', express.static('dist'))

// send all requests to index.html so browserHistory in React Roter works
app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    // in here we can make some decisions all at once
    if (err) {
      // there was an error somewhere during route matching
      res.status(500).send(err.message)
    } else if (redirect) {
      // we haven't talked about `onEnter` hooks on routes, but before a
      // route is entered, it can redirect. Here we handle on the server.
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // if we got props then we matched a route and can render
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      // no errors, no redirect, we just didn't match anything
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!doctupe html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/static/index.css>
    <link rel=icon href=/static/favicon.ico>
    <div id=root>${appHtml}</div>
    <script src=/static/bundle.js></script>
  `
}

app.listen(PORT, function() {
  console.log(`Production Express server running at localhost: ${PORT}`) 
})
