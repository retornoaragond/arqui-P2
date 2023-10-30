import __nuxt_component_0 from "./HeaderView-f6ad7ae6.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-8849d854.js";
import __nuxt_component_2 from "./FooterView-ed279187.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "hookable";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
const index_vue_vue_type_style_index_0_scoped_e79cefd3_lang = "";
const _sfc_main = {
  async asyncData({ $content, params }) {
    const albums = await $content("albums").fetch();
    return {
      albums
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeaderView = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_FooterView = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-e79cefd3>`);
  _push(ssrRenderComponent(_component_HeaderView, null, null, _parent));
  _push(`<h3 data-v-e79cefd3>Álbumes de Música de Películas</h3><p data-v-e79cefd3>Esta sección presenta información sobre álbumes de música de películas.</p><ul class="album-list" data-v-e79cefd3><li class="album-item" data-v-e79cefd3>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "menu-link",
    to: "/albums_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Álbumes`);
      } else {
        return [
          createTextVNode("Álbumes")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="album-item" data-v-e79cefd3>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "menu-link",
    to: "/composers_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Compositores`);
      } else {
        return [
          createTextVNode("Compositores")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="album-item" data-v-e79cefd3>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "menu-link",
    to: "/movies_index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Películas`);
      } else {
        return [
          createTextVNode("Películas")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
  _push(ssrRenderComponent(_component_FooterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e79cefd3"]]);
export {
  index as default
};
//# sourceMappingURL=index-f64eaa31.js.map
