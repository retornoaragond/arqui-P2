
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/estebanespinoza/Desktop/My bag/Universidad Nacional /arqui-P2/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "dcc91940-5c1b-4005-84cd-866f5bfa0eb5"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
