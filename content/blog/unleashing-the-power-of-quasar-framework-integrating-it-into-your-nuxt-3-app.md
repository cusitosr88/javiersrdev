---
title:  'Unleashing the Power of Quasar Framework: Integrating it into Your Nuxt 3 App'
description: 'This post step-by-step instructions and code examples for implementing the integration, and highlights some of the key benefits and advantages of using Quasar in a Nuxt 3 project.'
img: /images/posts/quasar-nuxt.webp
date: 2023-04-06
---
# Unleashing the Power of Quasar Framework: Integrating it into Your Nuxt 3 App

To integrate Quasar into Nuxt 3, you need to first install both Quasar and Quasar extras using the npm module. Quasar extras provide additional functionality for the framework, such as icons and animations.

## Installing Quasar

To install Quasar and Quasar extras, run the following command in your terminal:

``` bash
npm install quasar @quasar/extras
npm install --save-dev nuxt-quasar-ui
```

## Add to Nuxt Config

This code snippet demonstrates how to add the nuxt-quasar-ui package to the modules section of the Nuxt configuration file `nuxt.config.ts`.This will ensure that the Quasar framework is properly configured in your **Nuxt 3** application. The modules section of nuxt.config.ts is the perfect place to add custom modules to your Nuxt project.

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-quasar-ui'
  ],
  quasar: { /* */ }
})
```

## Demo

You can try it out with Nuxt 3 and Quasar framework. Simply visit https://github.com/cusitosr88/nuxt3-quasar-example to access the demo. Do you have any questions or feedback about this? Please feel free to let me know.


Great news! You can now easily integrate Quasar with your Nuxt app. To get started, simply visit [Quasar Module for Nuxt](https://nuxt.com/modules/quasar) for more information. Happy coding!