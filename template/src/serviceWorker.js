//workbox will use debug logs automatically when on localhost. it will switch to production on real server
//below you can manually overide this behaviour. it will always use debug/production build
//workbox.setConfig({ debug: process.env.NODE_ENV === 'development' })

//here you can initialize offlice support for google analytics
//workbox.googleAnalytics.initialize()

//custom handlers are here because sometimes passing just RegExp to registerRoute won't work properly
//custom handler for route matching with [code]
const matchScripts = ({ url, event }) => {
  const regex = new RegExp('.*\\.(?:js|css|html)$', 'gi')
  const result = regex.test(url.pathname)
  if (url.hostname === 'localhost') {
    console.log('matching url: ', url.pathname)
    console.log('result: ', result)
  }
  return result
}
//custom handler for route matching with [images]
const matchImages = ({ url, event }) => {
  const regex = new RegExp('.*\\.(?:png|jpg|jpeg|svg|gif|ico)$', 'gi')
  const result = regex.test(url.pathname)
  if (url.hostname === 'localhost') {
    console.log('matching url: ', url.pathname)
    console.log('result: ', result)
  }
  return result
}

//here we skip waiting for user to close the page to update the service worker
workbox.skipWaiting()
workbox.clientsClaim()

//here workbox will inject precache manifest that was configurated in webpack
workbox.precaching.precacheAndRoute(self.__precacheManifest)

//set prefix and suffix for cache naming. example cache name after changes: ptrs-precache-v1
workbox.core.setCacheNameDetails({
  prefix: 'ptrs',
  suffix: 'v1'
})

//here we set some rules for caching resources at runtime using workbox's strategies
workbox.routing.registerRoute(
  matchScripts,
  workbox.strategies.cacheFirst({
    cacheName: 'gowno-code'
  })
)

workbox.routing.registerRoute(
  matchImages,
  workbox.strategies.cacheFirst({
    cacheName: 'gowno-images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
)

//a default handler that catches any not matched routes
workbox.routing.setDefaultHandler(({ url, event, params }) => {
  if (url.hostname === 'localhost')
    console.log('got uncatched event from url: ', url)
})
//a catch handler that receives errors from routes
workbox.routing.setCatchHandler(({ url, event, params }) => {
  if (url.hostname === 'localhost')
    console.log('got an error from route: ', url)
})
