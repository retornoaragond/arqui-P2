
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/estebanespinoza/Desktop/My bag/Universidad Nacional /arqui-P2/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {
    "buildId": "d648ebef-44eb-481f-9883-2de61015e553"
  }
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
