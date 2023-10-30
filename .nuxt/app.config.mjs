
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/estebanespinoza/Desktop/My bag/Universidad Nacional /arqui-P2/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "84810e7d-2d48-48fd-8e75-152a81c17973"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
