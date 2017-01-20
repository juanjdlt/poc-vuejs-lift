# poc-vuejs-lift

Proof of concept for showing [Webpack](https://webpack.github.io/) + [VueJS 2](https://github.com/vuejs/vue) with Single Page Components, page routing ecosystem along with [Scala Lift Framework](https://www.liftweb.net/) as a REST API. 
WebPack Dev Server is enabled for local development, hot reloading and lintin.
REST API calls are proxied in the Webpack Dev Server to make it work along Jetty SBT Lift Server

## Front End Tech Stack
* [Yarn](https://yarnpkg.com/en/docs/install) - FAST, RELIABLE, AND SECURE DEPENDENCY MANAGEMENT. -
* [Webpack 2](https://webpack.github.io/) - MODULE BUNDLER -
* [VueJS 2](https://github.com/vuejs/vue) - THE PROGRESSIVE JAVASCRIPT FRAMEWORK -
  * [Vue Router 2](https://github.com/vuejs/vue-router) - THE OFFICIAL ROUTER FOR VUE.JS -
  * [Vue Resource](https://github.com/pagekit/vue-resource) - THE HTTP CLIENT FOR VUE.JS -

## Back End Tech Stack
* [Scala Lift Framework](https://www.liftweb.net/) - LIFT IS THE MOST POWERFUL, MOST SECURE WEB FRAMEWORK AVAILABLE TODAY -


## Getting Started
1. Be sure you have [Yarn](https://yarnpkg.com/en/docs/install) installed globally.
2. Clone the repo
3. Run `sbt ~container:start` in in the project root in order to start Rest API Server 
4. run `yarn` or `yarn install` in `/src/main/webapp`

Then if you want to start de WebPack Dev Server run `yarn dev`, otherwise if you want to build the bundle containing all the scripts and code necessary to run in a production like environment run `yarn build`


## Docs and Resources
* [Webpack: When To Use And Why](http://blog.andrewray.me/webpack-when-to-use-and-why/)
* [Front End Center — Webpack from First Principles](https://www.youtube.com/watch?v=WQue1AN93YU)
* [Building Large-Scale Apps](https://v1.vuejs.org/guide/application.html)
* [Build an App with Vue.js: From Authentication to Calling an API](https://auth0.com/blog/build-an-app-with-vuejs/)
* [Build a Single Page Time Tracking App with Vue.js](https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-introduction)
* [A curated list of awesome things related to Vue.js](https://github.com/vuejs/awesome-vue)
* [Vue.js build set-up from scratch with webpack, vue-loader and hot reload](https://skyronic.com/blog/vue-project-scratch)
* [Evan You -  Modern Frontend with Vue.js - Laracon EU 2016](https://www.youtube.com/watch?v=D_z-RAweP1k)
* [General Guidelines for VueJS (vue-loader) and webpack](https://vuejs-templates.github.io/webpack/)
* [A simple Vue 2.0 Webpack & vue-loader setup for quick prototyping.](https://github.com/vuejs-templates/webpack-simple)
* [A bare-bones starter-template to get your hands dirty with awesome Vue.js library.](https://github.com/villeristi/vue.js-starter-template)
* [Google Chrome VueJS Dev Tools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=es)


## If going to use at production
* For a large app maybe it suitabable to see if a centralized state management is needed, like [Vuex](https://vuex.vuejs.org/en/intro.html)
* Check for SSR [Server Side Rendering](https://vuejs.org/v2/guide/ssr.html) and this technique [Vue.js Server Side Rendered Data](http://yang-wei.github.io/blog/2016/01/13/vue-dot-js-server-side-rendered-data/)
* Secure JSON API CALLS on front and back end. This could come handy: [JSON Web Tokens](https://jwt.io/)
