//workbox will use debug logs automatically when on localhost. it will switch to production on real server
//below you can manually overide this behaviour. it will always use debug/production build
//workbox.setConfig({ debug: true })

//here you can initialize offlice support for google analytics
//workbox.googleAnalytics.initialize()

//set prefix and suffix for cache naming. example cache name after changes: ptrs-precache-v1
workbox.core.setCacheNameDetails({
  prefix: 'ptrs',
  suffix: 'v1'
})

//here workbox will inject precache manifest that was configurated in webpack
workbox.precaching.precacheAndRoute(self.__precacheManifest)

//here we set some rules for caching resources at runtime using workbox's strategies
workbox.routing.registerRoute(
  /\.(?:js|css|html)$/g,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'ptrs-code'
  })
)
workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif|ico)/g,
  workbox.strategies.cacheFirst({
    cacheName: 'ptrs-images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
)
